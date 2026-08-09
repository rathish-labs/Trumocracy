// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {Party} from "./Party.sol";
import {PersonhoodRegistry} from "./PersonhoodRegistry.sol";
import {VerifierRegistry} from "./VerifierRegistry.sol";
import {FeatureFlags} from "./FeatureFlags.sol";
import {GovernanceRules as G} from "./GovernanceRules.sol";

/**
 * @title Governor
 * @notice Proposals, tiered voting, snapshots, timelocks and execution for one party.
 *
 * @dev Two properties are worth stating up front because they are what make this different
 *      from a conventional on-chain governor:
 *
 *      1. **There is no voting token and no weight.** `vote()` records exactly one vote per
 *         proven, eligible member. There is no balance to snapshot, so there is nothing to
 *         flash-borrow — the flash-governance attack is not mitigated here, it is absent
 *         (ADR-007 §4).
 *      2. **Eligibility is snapshotted at creation.** A member who joins after a proposal
 *         opens has no power over it, which closes the "see the proposal, flood the party,
 *         vote" sequence (ADR-008 §2).
 *
 *      Phase 1 tallies votes publicly (anonymous but not receipt-free). Phase 3 routes
 *      ballots through MACI for receipt-freeness (ADR-006); the `maci_voting` flag switches
 *      the path, and while it is off the client is required to tell citizens plainly that
 *      their vote is anonymous but not yet coercion-resistant.
 */
contract Governor {
    bytes32 public constant CIRCUIT_TENURE = keccak256("tenure_member");
    bytes32 public constant FLAG_GOVERNANCE = keccak256("party_governance");
    bytes32 public constant FLAG_MACI = keccak256("maci_voting");

    enum Choice {
        Against,
        For,
        Abstain
    }

    enum State {
        Discussion,
        Voting,
        Tallying,
        Defeated,
        Timelocked,
        Executed,
        Cancelled
    }

    struct Proposal {
        uint8 tier;
        bytes32 clauseId; // charter clause being amended, or 0
        bytes32 contentHash;
        string cid;
        // snapshot
        uint64 createdAt;
        uint64 snapshotMembers;
        /**
         * @dev The party's member-tree root at the instant the proposal opened, and the
         *      instant itself. Both are bound into the vote proof's public signals.
         *
         *      Without this binding the whole anti-capture design was decorative: a prover
         *      could build their own Merkle tree, prove inclusion against their own root,
         *      and vote as many times as they had secrets. "Eligibility is snapshotted at
         *      creation" has to be enforced by the contract, because the circuit cannot know
         *      which root is the real one.
         */
        uint256 snapshotRoot;
        uint64 snapshotAt;
        bool surgeAtCreation;
        // schedule
        uint64 discussionEndsAt;
        uint64 votingEndsAt;
        uint64 executableAt;
        // rules frozen at creation so a later charter change cannot move the goalposts
        uint16 quorumBps;
        uint16 approvalBps;
        uint32 minTenureSeconds;
        // tally
        uint64 forVotes;
        uint64 againstVotes;
        uint64 abstainVotes;
        bool finalized;
        bool succeeded;
        bool executed;
        bool cancelled;
        // execution
        address target;
        bytes callData;
    }

    Party public immutable party;
    PersonhoodRegistry public immutable personhood;
    VerifierRegistry public immutable verifiers;
    FeatureFlags public immutable flags;

    Proposal[] private _proposals;

    /// @notice Rate-limit: one open proposal per proposer nullifier scope per party (FR-029).
    mapping(bytes32 proposerScope => uint64 lastProposalAt) public lastProposalAt;
    uint64 public constant PROPOSAL_COOLDOWN = 1 days;

    event ProposalCreated(
        uint256 indexed proposalId,
        uint8 tier,
        bytes32 contentHash,
        string cid,
        uint64 snapshotMembers,
        bool surgeAtCreation,
        uint64 votingEndsAt,
        uint64 executableAt
    );
    event VoteCast(uint256 indexed proposalId, Choice choice, uint256 nullifier);
    event ProposalFinalized(
        uint256 indexed proposalId, bool succeeded, uint16 quorumReachedBps, uint16 approvalReachedBps
    );
    event ProposalExecuted(uint256 indexed proposalId, address target, bytes callData);
    event ProposalCancelled(uint256 indexed proposalId);

    error FlagOff(bytes32 flag);
    error UnknownProposal(uint256 id);
    error NotInDiscussion();
    error NotInVoting();
    error VotingNotClosed();
    error AlreadyFinalized();
    error NotFinalized();
    error NotSucceeded();
    error TimelockNotElapsed(uint64 until);
    error AlreadyExecuted();
    error InvalidProof();
    error IneligibleTenure(uint64 have, uint32 need);
    error JoinedAfterSnapshot();
    error ClauseIsImmutable(bytes32 clauseId);
    error ProposalCooldown(uint64 until);
    error ExecutionFailed();
    error MaciPathRequired();
    error WrongSnapshotRoot(uint256 expected, uint256 got);
    error WrongSnapshotTime(uint64 expected, uint64 got);
    error TierTooLowForAction(bytes4 selector, uint8 declaredTier, uint8 requiredTier);
    error TargetNotPermitted(address target);

    constructor(Party party_, PersonhoodRegistry personhood_, VerifierRegistry verifiers_, FeatureFlags flags_) {
        party = party_;
        personhood = personhood_;
        verifiers = verifiers_;
        flags = flags_;
    }

    /**
     * @notice The minimum tier a call is allowed to be proposed under.
     *
     * @dev Without this, the tier was a label the proposer chose while the `callData` did
     *      whatever it liked: a Tier-0 proposal (5% quorum, no discussion, **zero timelock**)
     *      carrying `dissolve()` could end a party in three days. Tier is the price of an
     *      action, so the action has to set it — not the person asking.
     */
    function requiredTier(address target, bytes calldata callData) public view returns (uint8) {
        if (target == address(0) || callData.length < 4) return G.TIER_OPERATIONAL;
        bytes4 selector = bytes4(callData[:4]);

        if (target == address(party)) {
            if (selector == Party.dissolve.selector) return G.TIER_CONSTITUTIONAL;
            if (selector == Party.amendCharter.selector) return G.TIER_CONSTITUTIONAL;
            if (selector == Party.publishManifesto.selector) return G.TIER_STRUCTURAL;
            // An unrecognised call into the party is treated as the most serious thing it
            // could be. Fail closed: a new privileged function must be classified here
            // deliberately, not inherit the cheapest tier by omission.
            return G.TIER_CONSTITUTIONAL;
        }
        // Calls to anything else (a treasury module, an external contract) are structural at
        // minimum; a party spending or binding itself is not an operational matter.
        return G.TIER_STRUCTURAL;
    }

    // ------------------------------------------------------------ proposal

    /// @dev Grouped so the call site reads as a proposal rather than a nine-argument signature.
    struct ProposalInput {
        uint8 tier;
        bytes32 clauseId; // charter clause being amended, or 0
        bytes32 contentHash;
        string cid;
        uint32 requestedVotingSeconds;
        address target;
        bytes callData;
    }

    /**
     * @notice Open a proposal. Anyone with sufficient tenure may propose; there is no
     *         pre-screening, no moderation queue and no sponsor requirement (FR-024).
     *
     * @param publicSignals [partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds, snapshotAt]
     */
    function propose(ProposalInput calldata input, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
        returns (uint256 proposalId)
    {
        flags.requireEnabled(FLAG_GOVERNANCE);
        if (publicSignals.length != 6) revert InvalidProof();
        if (input.clauseId != bytes32(0) && party.immutableClause(input.clauseId)) {
            revert ClauseIsImmutable(input.clauseId);
        }

        uint8 needed = requiredTier(input.target, input.callData);
        if (input.tier < needed) revert TierTooLowForAction(_selectorOf(input.callData), input.tier, needed);

        bool surge = party.surgeActive();
        G.Rules memory r = G.effectiveRules(input.tier, _charterTenure(input.tier), surge);

        _checkProposerEligibility(r, proof, publicSignals);

        proposalId = _record(input, r, surge);
    }

    function _checkProposerEligibility(G.Rules memory r, uint256[8] calldata proof, uint256[] calldata publicSignals)
        private
    {
        uint64 tenure = uint64(publicSignals[4]);
        if (tenure < r.minTenureSeconds) revert IneligibleTenure(tenure, r.minTenureSeconds);

        if (bytes32(publicSignals[2]) != keccak256(abi.encodePacked("propose", party.partyId()))) {
            revert InvalidProof();
        }

        bytes32 nullifierKey = bytes32(publicSignals[3]);
        uint64 last = lastProposalAt[nullifierKey];
        if (last != 0 && block.timestamp < last + PROPOSAL_COOLDOWN) {
            revert ProposalCooldown(last + PROPOSAL_COOLDOWN);
        }
        if (!verifiers.verify(CIRCUIT_TENURE, proof, publicSignals)) revert InvalidProof();
        lastProposalAt[nullifierKey] = uint64(block.timestamp);
    }

    function _record(ProposalInput calldata input, G.Rules memory r, bool surge)
        private
        returns (uint256 proposalId)
    {
        uint32 votingSeconds =
            input.requestedVotingSeconds > r.minVotingSeconds ? input.requestedVotingSeconds : r.minVotingSeconds;

        uint64 nowTs = uint64(block.timestamp);
        uint64 discussionEnds = nowTs + r.discussionSeconds;
        uint64 votingEnds = discussionEnds + votingSeconds;
        uint64 executableAt = votingEnds + r.timelockSeconds;
        uint64 snapshotMembers = party.memberCount();

        _proposals.push(
            Proposal({
                tier: input.tier,
                clauseId: input.clauseId,
                contentHash: input.contentHash,
                cid: input.cid,
                createdAt: nowTs,
                snapshotMembers: snapshotMembers,
                snapshotRoot: party.memberRoot(),
                snapshotAt: nowTs,
                surgeAtCreation: surge,
                discussionEndsAt: discussionEnds,
                votingEndsAt: votingEnds,
                executableAt: executableAt,
                quorumBps: r.quorumBps,
                approvalBps: r.approvalBps,
                minTenureSeconds: r.minTenureSeconds,
                forVotes: 0,
                againstVotes: 0,
                abstainVotes: 0,
                finalized: false,
                succeeded: false,
                executed: false,
                cancelled: false,
                target: input.target,
                callData: input.callData
            })
        );
        proposalId = _proposals.length - 1;

        emit ProposalCreated(
            proposalId,
            input.tier,
            input.contentHash,
            input.cid,
            snapshotMembers,
            surge,
            votingEnds,
            executableAt
        );
    }

    // ------------------------------------------------------------ voting

    /**
     * @notice Cast one vote.
     *
     * @dev The nullifier scope is the proposal id, so a member votes at most once per
     *      proposal and their votes across different proposals are unlinkable. The proof
     *      must be against the party's member root as it stood at the snapshot; joining
     *      later produces no valid witness.
     *
     *      Interim tallies are readable on-chain here, which FR-034 forbids exposing to
     *      citizens before close — that is a client and indexer obligation (see ADR-012);
     *      the chain cannot hide what it stores, so the suppression is enforced above it.
     *
     * @param publicSignals [partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds, snapshotAt]
     */
    function vote(uint256 proposalId, Choice choice, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
    {
        // NOTE: `vote` is deliberately NOT gated on FLAG_GOVERNANCE.
        //
        // A feature flag governs whether a capability may be STARTED, never whether an
        // action already under way may be COMPLETED. If disabling a flag could freeze a
        // ballot that is open, the emergency disabler would be a pause button on a live
        // vote — precisely the capability CON-003 forbids us to build. Opening a proposal
        // is gated; finishing one is not.

        // Once receipt-free voting is live, the public-tally path must close: leaving both
        // open would let a coercer simply demand the citizen use the provable one.
        if (flags.isEnabled(FLAG_MACI)) revert MaciPathRequired();

        Proposal storage p = _get(proposalId);
        if (block.timestamp < p.discussionEndsAt || block.timestamp >= p.votingEndsAt) revert NotInVoting();
        if (publicSignals.length != 6) revert InvalidProof();

        bytes32 scope = keccak256(abi.encodePacked("vote", party.partyId(), proposalId));
        if (bytes32(publicSignals[2]) != scope) revert InvalidProof();

        // The proof must be against THIS party's member tree as it stood when the proposal
        // opened, and against this proposal's snapshot time — otherwise the prover chooses
        // both the electorate and their own tenure.
        if (publicSignals[0] != p.snapshotRoot) revert WrongSnapshotRoot(p.snapshotRoot, publicSignals[0]);
        if (bytes32(publicSignals[1]) != party.partyId()) revert InvalidProof();
        if (uint64(publicSignals[5]) != p.snapshotAt) revert WrongSnapshotTime(p.snapshotAt, uint64(publicSignals[5]));

        uint256 nullifier = publicSignals[3];
        uint64 tenure = uint64(publicSignals[4]);
        if (tenure < p.minTenureSeconds) revert IneligibleTenure(tenure, p.minTenureSeconds);

        if (!verifiers.verify(CIRCUIT_TENURE, proof, publicSignals)) revert InvalidProof();
        personhood.spendNullifier(scope, nullifier);

        // Weight is 1. There is no other possibility expressible in this contract.
        if (choice == Choice.For) p.forVotes += 1;
        else if (choice == Choice.Against) p.againstVotes += 1;
        else p.abstainVotes += 1;

        emit VoteCast(proposalId, choice, nullifier);
    }

    // ------------------------------------------------------------ finalize & execute

    function finalize(uint256 proposalId) external returns (bool succeeded) {
        Proposal storage p = _get(proposalId);
        if (block.timestamp < p.votingEndsAt) revert VotingNotClosed();
        if (p.finalized) revert AlreadyFinalized();

        G.Rules memory r = G.Rules({
            quorumBps: p.quorumBps,
            approvalBps: p.approvalBps,
            minTenureSeconds: p.minTenureSeconds,
            timelockSeconds: 0,
            discussionSeconds: 0,
            minVotingSeconds: 0,
            surgeApplied: p.surgeAtCreation
        });

        (bool ok, uint16 quorumReached, uint16 approvalReached) =
            G.passed(p.forVotes, p.againstVotes, p.abstainVotes, p.snapshotMembers, r);

        p.finalized = true;
        p.succeeded = ok;
        succeeded = ok;
        emit ProposalFinalized(proposalId, ok, quorumReached, approvalReached);
    }

    /**
     * @notice Execute a passed proposal after its timelock.
     * @dev Permissionless: anyone may push the button once the conditions are met. A
     *      privileged executor would be a veto in disguise.
     */
    function execute(uint256 proposalId) external {
        Proposal storage p = _get(proposalId);
        if (!p.finalized) revert NotFinalized();
        if (!p.succeeded) revert NotSucceeded();
        if (p.executed) revert AlreadyExecuted();
        if (block.timestamp < p.executableAt) revert TimelockNotElapsed(p.executableAt);

        p.executed = true;
        if (p.target != address(0)) {
            (bool ok,) = p.target.call(p.callData);
            if (!ok) revert ExecutionFailed();
        }
        emit ProposalExecuted(proposalId, p.target, p.callData);
    }

    /// @notice A proposer may withdraw before voting opens, and not after (FR-029).
    function cancelDuringDiscussion(uint256 proposalId, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
    {
        Proposal storage p = _get(proposalId);
        if (block.timestamp >= p.discussionEndsAt) revert NotInDiscussion();
        if (publicSignals.length != 6) revert InvalidProof();
        bytes32 scope = keccak256(abi.encodePacked("cancel", party.partyId(), proposalId));
        if (bytes32(publicSignals[2]) != scope) revert InvalidProof();
        if (!verifiers.verify(CIRCUIT_TENURE, proof, publicSignals)) revert InvalidProof();
        personhood.spendNullifier(scope, publicSignals[3]);

        p.cancelled = true;
        p.finalized = true;
        p.succeeded = false;
        emit ProposalCancelled(proposalId);
    }

    // ------------------------------------------------------------ views

    function proposalCount() external view returns (uint256) {
        return _proposals.length;
    }

    function proposals(uint256 id) external view returns (Proposal memory) {
        return _get(id);
    }

    function state(uint256 id) external view returns (State) {
        Proposal storage p = _get(id);
        if (p.cancelled) return State.Cancelled;
        if (p.executed) return State.Executed;
        if (block.timestamp < p.discussionEndsAt) return State.Discussion;
        if (block.timestamp < p.votingEndsAt) return State.Voting;
        if (!p.finalized) return State.Tallying;
        if (!p.succeeded) return State.Defeated;
        return State.Timelocked;
    }

    function _get(uint256 id) private view returns (Proposal storage) {
        if (id >= _proposals.length) revert UnknownProposal(id);
        return _proposals[id];
    }

    function _selectorOf(bytes calldata callData) private pure returns (bytes4) {
        return callData.length < 4 ? bytes4(0) : bytes4(callData[:4]);
    }

    function _charterTenure(uint8 tier) private view returns (uint32) {
        (uint32 constitutional, uint32 structural, uint32 policy,,,,) = party.charter();
        if (tier == G.TIER_CONSTITUTIONAL) return constitutional;
        if (tier == G.TIER_STRUCTURAL) return structural;
        if (tier == G.TIER_POLICY) return policy;
        return 0;
    }
}
