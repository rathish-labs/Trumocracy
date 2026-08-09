// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {InternalLeanIMT, LeanIMTData} from "@zk-kit/lean-imt.sol/InternalLeanIMT.sol";
import {PersonhoodRegistry} from "./PersonhoodRegistry.sol";
import {RegionRegistry} from "./RegionRegistry.sol";
import {VerifierRegistry} from "./VerifierRegistry.sol";
import {FeatureFlags} from "./FeatureFlags.sol";

/**
 * @title Party
 * @notice Membership, charter and manifesto for one political party.
 *
 * @dev Read the *absences* first, because they are the design:
 *      - There is no `transfer`, `approve`, `permit` or `delegate` for membership. Membership
 *        is not an asset, so there is nothing to buy, sell, lend or flash-borrow (ADR-007).
 *      - There is no admin, owner, founder or moderator role. Nobody can approve, reject,
 *        suspend or expel a member. Joining is unconditional for any verified citizen with a
 *        residency credential for the party's jurisdiction (BR-003, FR-020).
 *      - There is no vote-weight field anywhere. Weight is 1, always, by construction.
 *
 *      Membership is recorded as an insertion into a Poseidon LeanIMT of identity
 *      commitments. The chain can prove that someone is a member; it cannot list who they are.
 */
contract Party {
    using InternalLeanIMT for LeanIMTData;

    bytes32 public constant FLAG_FORK = keccak256("fork");

    struct ManifestoVersion {
        bytes32 contentHash; // keccak256 of the content addressed by `cid`
        string cid; // IPFS CIDv1, mirrored to Arweave (ADR-009)
        uint64 publishedAt;
        string changeSummary;
    }

    struct GrowthSample {
        uint64 timestamp;
        uint64 memberCount;
    }

    struct Charter {
        uint32 constitutionalTenureSeconds;
        uint32 structuralTenureSeconds;
        uint32 policyTenureSeconds;
        uint32 officeTermSeconds;
        uint256 contributionCapPerPerson; // per rolling period, wei
        bytes32 charterHash; // keccak256 of the full charter document
        string charterCID;
    }

    // ------------------------------------------------------------ immutable wiring

    bytes32 public immutable partyId;
    bytes32 public immutable jurisdiction; // regionId; immutable after activation (FR-019)
    PersonhoodRegistry public immutable personhood;
    RegionRegistry public immutable regions;
    VerifierRegistry public immutable verifiers;
    FeatureFlags public immutable flags;
    /// @notice The PartyRegistry that requested this party. Set at construction, never changeable.
    address public immutable registry;

    /// @notice Lineage: the party this one forked from, and at which block. Permanent (ADR-008 §5).
    bytes32 public immutable parentPartyId;
    uint64 public immutable forkBlock;

    bytes32 public constant CIRCUIT_RESIDENCY = keccak256("residency_member");

    // ------------------------------------------------------------ state

    Charter public charter;

    LeanIMTData internal _memberTree;
    uint256 public constant ROOT_HISTORY = 64;
    uint256[ROOT_HISTORY] private _rootHistory;
    uint256 private _rootCursor;
    mapping(uint256 root => bool) public knownRoot;

    /// @dev identityCommitment => join timestamp (0 = never joined). Tenure, not weight (ADR-007 §2).
    mapping(uint256 identityCommitment => uint64 joinedAt) public joinedAt;
    mapping(uint256 identityCommitment => uint64 leftAt) public leftAt;
    uint64 public memberCount;

    GrowthSample[] public growthSamples;

    ManifestoVersion[] public manifestoVersions;

    /// @dev Clauses a party bound itself to at founding. No majority can amend these (ADR-008 §4).
    mapping(bytes32 clauseId => bool) public immutableClause;
    mapping(bytes32 clauseId => uint16 approvalBps) public entrenchedApprovalBps;
    mapping(bytes32 clauseId => uint32 timelockSeconds) public entrenchedTimelock;

    /// @notice The governor authorised to mutate charter/manifesto after a passed proposal.
    address public governor;
    bool public dissolved;

    event Joined(uint256 indexed identityCommitment, uint64 at, uint256 newRoot, uint64 memberCount);
    event Left(uint256 indexed identityCommitment, uint64 at, uint64 memberCount);
    event ManifestoPublished(uint256 indexed version, bytes32 contentHash, string cid, string changeSummary);
    event CharterAmended(bytes32 charterHash, string charterCID);
    event AnomalousGrowth(uint64 fromCount, uint64 toCount, uint64 windowSeconds);
    event GovernorSet(address governor);
    event Dissolved(uint64 at);

    error NotRegistry();
    error NotGovernor();
    error AlreadyMember(uint256 identityCommitment);
    error NotMember(uint256 identityCommitment);
    error PartyDissolved();
    error InvalidProof();
    error WrongJurisdiction();
    error AnonymitySetTooSmall(bytes32 regionId, uint256 have, uint256 need);
    error ClauseIsImmutable(bytes32 clauseId);
    error GovernorAlreadySet();
    error EmptyContent();
    error StaleProof(uint64 provedAt);

    constructor(
        bytes32 partyId_,
        bytes32 jurisdiction_,
        PersonhoodRegistry personhood_,
        RegionRegistry regions_,
        VerifierRegistry verifiers_,
        FeatureFlags flags_,
        Charter memory charter_,
        bytes32 parentPartyId_,
        uint64 forkBlock_,
        address registry_
    ) {
        partyId = partyId_;
        jurisdiction = jurisdiction_;
        personhood = personhood_;
        regions = regions_;
        verifiers = verifiers_;
        flags = flags_;
        charter = charter_;
        parentPartyId = parentPartyId_;
        forkBlock = forkBlock_;
        registry = registry_;
        growthSamples.push(GrowthSample({timestamp: uint64(block.timestamp), memberCount: 0}));
    }

    modifier notDissolved() {
        if (dissolved) revert PartyDissolved();
        _;
    }

    /// @dev Set once, by the registry, immediately after construction. No path to replace it.
    function setGovernor(address governor_) external {
        if (msg.sender != registry) revert NotRegistry();
        if (governor != address(0)) revert GovernorAlreadySet();
        governor = governor_;
        emit GovernorSet(governor_);
    }

    // ------------------------------------------------------------ membership

    /**
     * @notice Join this party. No approval, no sponsorship, no interview, no invitation.
     *
     * @dev Public signals: [residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment].
     *      The proof establishes that the caller holds a valid residency credential for this
     *      party's jurisdiction. It does not reveal which credential, and the chain records
     *      only the commitment — which is not a person, and cannot be resolved to one.
     */
    function join(uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
        notDissolved
        returns (uint256 newRoot)
    {
        if (publicSignals.length != 7) revert InvalidProof();
        _requireFreshProof(publicSignals[6]);

        uint256 residencyRoot = publicSignals[0];
        bytes32 regionId = bytes32(publicSignals[1]);
        bytes32 scope = bytes32(publicSignals[3]);
        uint256 nullifier = publicSignals[4];
        uint256 identityCommitment = publicSignals[5];

        if (regionId != jurisdiction) revert WrongJurisdiction();
        if (scope != _joinScope()) revert InvalidProof();
        if (!regions.knownRoot(regionId, residencyRoot)) revert InvalidProof();

        // NFR-002: publishing an action scoped to a region with a tiny verified population
        // would identify the actor by elimination. Refuse rather than pretend.
        uint256 k = regions.verifiedResidents(regionId);
        if (k < regions.minAnonymitySet()) {
            revert AnonymitySetTooSmall(regionId, k, regions.minAnonymitySet());
        }

        if (joinedAt[identityCommitment] != 0 && leftAt[identityCommitment] == 0) {
            revert AlreadyMember(identityCommitment);
        }

        if (!verifiers.verify(CIRCUIT_RESIDENCY, proof, publicSignals)) revert InvalidProof();
        personhood.spendNullifier(scope, nullifier);

        bool rejoining = joinedAt[identityCommitment] != 0;
        joinedAt[identityCommitment] = uint64(block.timestamp);
        leftAt[identityCommitment] = 0;
        memberCount += 1;

        if (rejoining) {
            // The commitment is already a leaf; re-inserting would corrupt the tree. The
            // membership record is the joinedAt/leftAt pair, which is what tenure reads.
            newRoot = _memberTree._root();
        } else {
            newRoot = _memberTree._insert(identityCommitment);
            _recordRoot(newRoot);
        }

        _sampleGrowth();
        emit Joined(identityCommitment, uint64(block.timestamp), newRoot, memberCount);
    }

    /**
     * @notice Leave. Takes effect immediately, needs nobody's approval, and cannot be blocked.
     * @dev Called with a proof of membership so leaving does not require revealing identity
     *      to anyone — including to the party.
     */
    function leave(uint256[8] calldata proof, uint256[] calldata publicSignals) external returns (uint64) {
        if (publicSignals.length != 7) revert InvalidProof();
        _requireFreshProof(publicSignals[6]);
        bytes32 scope = bytes32(publicSignals[3]);
        uint256 nullifier = publicSignals[4];
        uint256 identityCommitment = publicSignals[5];

        if (scope != _leaveScope()) revert InvalidProof();
        if (joinedAt[identityCommitment] == 0 || leftAt[identityCommitment] != 0) {
            revert NotMember(identityCommitment);
        }
        if (!verifiers.verify(CIRCUIT_RESIDENCY, proof, publicSignals)) revert InvalidProof();
        personhood.spendNullifier(scope, nullifier);

        leftAt[identityCommitment] = uint64(block.timestamp);
        memberCount -= 1;
        _sampleGrowth();
        emit Left(identityCommitment, uint64(block.timestamp), memberCount);
        return memberCount;
    }

    function isMemberAt(uint256 identityCommitment, uint64 timestamp) external view returns (bool) {
        uint64 j = joinedAt[identityCommitment];
        if (j == 0 || j > timestamp) return false;
        uint64 l = leftAt[identityCommitment];
        return l == 0 || l > timestamp;
    }

    function tenureAt(uint256 identityCommitment, uint64 timestamp) external view returns (uint64) {
        uint64 j = joinedAt[identityCommitment];
        if (j == 0 || j > timestamp) return 0;
        return timestamp - j;
    }

    function memberRoot() external view returns (uint256) {
        return _memberTree._root();
    }

    function treeSize() external view returns (uint256) {
        return _memberTree.size;
    }

    // ------------------------------------------------------------ growth surveillance

    /**
     * @notice Has the party grown more than 20% inside any 30-day window recently?
     * @dev Mirrors `isSurgeActive` in packages/protocol — the differential suite asserts the
     *      two agree. Genuine viral growth is success, not attack; what this detects is the
     *      *speed* that makes a takeover invisible (ADR-008 §3).
     */
    function surgeActive() public view returns (bool) {
        uint256 n = growthSamples.length;
        if (n < 2) return false;

        for (uint256 e = n; e >= 2; e--) {
            GrowthSample storage endS = growthSamples[e - 1];
            if (block.timestamp > uint256(endS.timestamp) + 90 days) break;
            for (uint256 s = e - 1; s >= 1; s--) {
                GrowthSample storage startS = growthSamples[s - 1];
                if (uint256(endS.timestamp) - uint256(startS.timestamp) > 30 days) break;
                // The ordering here is load-bearing: computing the difference before
                // checking which sample is larger underflows the moment a single member
                // leaves, and an arithmetic panic in this view would revert join, leave and
                // propose permanently, with no admin path to unstick the party.
                if (startS.memberCount == 0) continue;
                if (endS.memberCount <= startS.memberCount) continue;
                uint256 growthBps =
                    ((uint256(endS.memberCount) - uint256(startS.memberCount)) * 10_000) / uint256(startS.memberCount);
                if (growthBps > 2_000) return true;
            }
        }
        return false;
    }

    function growthSampleCount() external view returns (uint256) {
        return growthSamples.length;
    }

    function _sampleGrowth() internal {
        uint256 n = growthSamples.length;
        GrowthSample storage last = growthSamples[n - 1];
        // Coalesce samples within the same hour to bound unbounded growth of this array.
        if (uint64(block.timestamp) - last.timestamp < 1 hours) {
            last.memberCount = memberCount;
        } else {
            growthSamples.push(GrowthSample({timestamp: uint64(block.timestamp), memberCount: memberCount}));
            if (growthSamples.length > 512) {
                // Keep the window bounded; the surge check only looks back 90 days anyway.
                for (uint256 i = 0; i < growthSamples.length - 1; i++) {
                    growthSamples[i] = growthSamples[i + 1];
                }
                growthSamples.pop();
            }
            if (surgeActive()) {
                emit AnomalousGrowth(growthSamples[0].memberCount, memberCount, 30 days);
            }
        }
    }

    // ------------------------------------------------------------ manifesto & charter

    /**
     * @notice Publish a manifesto version. Only the governor may call, i.e. only after a
     *         member vote has passed. History is append-only: an edit creates a new version
     *         and never alters or removes an old one (FR-047).
     */
    function publishManifesto(bytes32 contentHash, string calldata cid, string calldata changeSummary)
        external
        notDissolved
        returns (uint256 version)
    {
        if (msg.sender != governor) revert NotGovernor();
        if (contentHash == bytes32(0) || bytes(cid).length == 0) revert EmptyContent();
        manifestoVersions.push(
            ManifestoVersion({
                contentHash: contentHash,
                cid: cid,
                publishedAt: uint64(block.timestamp),
                changeSummary: changeSummary
            })
        );
        version = manifestoVersions.length - 1;
        emit ManifestoPublished(version, contentHash, cid, changeSummary);
    }

    function manifestoVersionCount() external view returns (uint256) {
        return manifestoVersions.length;
    }

    function amendCharter(bytes32 clauseId, bytes32 newCharterHash, string calldata newCharterCID)
        external
        notDissolved
    {
        if (msg.sender != governor) revert NotGovernor();
        if (immutableClause[clauseId]) revert ClauseIsImmutable(clauseId);
        charter.charterHash = newCharterHash;
        charter.charterCID = newCharterCID;
        emit CharterAmended(newCharterHash, newCharterCID);
    }

    /// @dev Set at founding by the registry only. There is no path to add or remove later —
    ///      an entrenchment a majority could lift would not be an entrenchment.
    function setFoundingClauses(
        bytes32[] calldata immutableIds,
        bytes32[] calldata entrenchedIds,
        uint16[] calldata approvalBps,
        uint32[] calldata timelocks
    ) external {
        if (msg.sender != registry) revert NotRegistry();
        for (uint256 i = 0; i < immutableIds.length; i++) {
            immutableClause[immutableIds[i]] = true;
        }
        for (uint256 i = 0; i < entrenchedIds.length; i++) {
            entrenchedApprovalBps[entrenchedIds[i]] = approvalBps[i];
            entrenchedTimelock[entrenchedIds[i]] = timelocks[i];
        }
    }

    function dissolve() external notDissolved {
        if (msg.sender != governor) revert NotGovernor();
        dissolved = true;
        emit Dissolved(uint64(block.timestamp));
    }

    // ------------------------------------------------------------ internals

    /// @dev See PartyRegistry.MAX_PROOF_AGE — a circuit cannot read the clock, so the
    ///      contract bounds how stale the "now" it proved against may be.
    uint64 public constant MAX_PROOF_AGE = 1 hours;

    function _requireFreshProof(uint256 provedAt) internal view {
        uint64 t = uint64(provedAt);
        if (t > block.timestamp || block.timestamp - t > MAX_PROOF_AGE) revert StaleProof(t);
    }

    function _joinScope() internal view returns (bytes32) {
        return keccak256(abi.encodePacked("join", partyId));
    }

    function _leaveScope() internal view returns (bytes32) {
        return keccak256(abi.encodePacked("leave", partyId));
    }

    function _recordRoot(uint256 r) internal {
        uint256 cursor = _rootCursor;
        uint256 evicted = _rootHistory[cursor];
        if (evicted != 0) knownRoot[evicted] = false;
        _rootHistory[cursor] = r;
        knownRoot[r] = true;
        _rootCursor = (cursor + 1) % ROOT_HISTORY;
    }
}
