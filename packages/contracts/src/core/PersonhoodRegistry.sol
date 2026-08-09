// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {InternalLeanIMT, LeanIMTData} from "@zk-kit/lean-imt.sol/InternalLeanIMT.sol";
import {VerifierRegistry} from "./VerifierRegistry.sol";

/**
 * @title PersonhoodRegistry
 * @notice One person, one credential — proven, never known (ADR-003).
 *
 * @dev What this contract stores, in full: identity commitments (Poseidon hashes of a secret
 *      that never left a citizen's device), enrolment nullifiers (per-issuer, so one passport
 *      cannot enrol twice), action nullifiers (per-scope, so one human acts once per vote),
 *      and issuer metadata. What it cannot store, because no field exists to hold it: a name,
 *      a document number, a biometric, an address, or any mapping from a nullifier to a
 *      person (FR-003, CON-002).
 *
 *      There is no admin function that can revoke a citizen's participation, and none that
 *      can enumerate who a nullifier belongs to — the information does not exist on-chain or
 *      off it (ADR-013 §3).
 */
contract PersonhoodRegistry {
    using InternalLeanIMT for LeanIMTData;

    /// @dev Credential strength. A charter picks the minimum it accepts per action class.
    uint8 public constant TIER_SOCIAL = 1;
    uint8 public constant TIER_DOCUMENT = 2;
    uint8 public constant TIER_REGISTRY = 3;

    bytes32 public constant CIRCUIT_ENROL = keccak256("personhood_enrol");

    struct Issuer {
        bool active;
        bool stateOperated; // a region may never rely on state issuers alone (ADR-003)
        uint8 tier;
        uint32 maxEnrolmentsPerEpoch; // flood limiter for a compromised issuer
        /**
         * @dev Identifier namespace this issuer's nullifier is computed over — e.g. all
         *      issuers that read an ICAO e-passport share the `epassport` namespace, so two
         *      of them reading the SAME passport derive the SAME `issuerNullifier` and the
         *      second enrolment is rejected. Without this, 1-of-N acceptance would let one
         *      human enrol once per issuer and vote once per enrolment.
         *
         *      This does NOT dedup across namespaces (a passport holder who also obtains a
         *      social-graph credential can still enrol twice). That residual is bounded by
         *      tiering and the per-region social cap, and is stated plainly in ADR-003.
         */
        bytes32 namespaceId;
        string metadataURI; // published security assessment, content-addressed
    }

    struct EpochUsage {
        uint64 epoch;
        uint32 count;
    }

    address public immutable timelock;
    VerifierRegistry public immutable verifiers;

    /// @notice Enrolment epoch length used by the per-issuer flood limiter.
    uint64 public constant EPOCH = 1 days;

    /// @notice The set of enrolled identity commitments. Membership is proven, never listed.
    LeanIMTData internal _identityTree;

    mapping(bytes32 issuerId => Issuer) public issuers;
    bytes32[] private _issuerIds;

    /// @dev issuerNullifier => true. Prevents the same real human enrolling twice at one issuer.
    mapping(uint256 issuerNullifier => bool) public enrolled;

    /// @dev keccak(scope, actionNullifier) => true. Enforces one action per human per scope.
    mapping(bytes32 scopedNullifier => bool) public nullifierUsed;

    /// @dev identityCommitment => tier of the credential it was enrolled with.
    mapping(uint256 identityCommitment => uint8 tier) public commitmentTier;

    mapping(bytes32 issuerId => EpochUsage) private _usage;

    /**
     * @dev Contracts permitted to burn an action nullifier.
     *
     * Without this, `spendNullifier` is a griefing weapon: anyone could burn a nullifier
     * they predicted or observed and permanently deny that citizen the corresponding action.
     * A public governance system must not hand an attacker a one-call disenfranchisement.
     */
    mapping(address spender => bool) public authorisedSpender;

    /// @notice The PartyRegistry, which authorises the Party/Governor pairs it deploys.
    address public spenderAuthoriser;

    /// @notice Rolling window of recent roots, so a proof against a slightly stale root still verifies.
    uint256 public constant ROOT_HISTORY = 64;
    uint256[ROOT_HISTORY] private _rootHistory;
    uint256 private _rootCursor;
    mapping(uint256 root => bool) public knownRoot;

    event IssuerRegistered(
        bytes32 indexed issuerId, uint8 tier, bool stateOperated, bytes32 namespaceId, string metadataURI
    );
    event SpenderAuthorised(address indexed spender, address indexed by);
    event SpenderAuthoriserSet(address indexed authoriser);
    event IssuerDeactivated(bytes32 indexed issuerId, string reason);
    event Enrolled(uint256 indexed identityCommitment, bytes32 indexed issuerId, uint8 tier, uint256 newRoot);
    event NullifierSpent(bytes32 indexed scope, uint256 nullifier);

    error NotTimelock();
    error UnknownIssuer(bytes32 issuerId);
    error IssuerInactive(bytes32 issuerId);
    error AlreadyEnrolled(uint256 issuerNullifier);
    error NullifierAlreadyUsed(bytes32 scope, uint256 nullifier);
    error InvalidProof();
    error UnknownRoot(uint256 root);
    error IssuerEpochCapReached(bytes32 issuerId, uint32 cap);
    error InsufficientTier(uint8 have, uint8 need);
    error ZeroAddress();
    error BadTier(uint8 tier);
    error BadNamespace();
    error NotAuthorisedSpender(address caller);
    error NotSpenderAuthoriser(address caller);
    error IssuerSetInvalid();
    error NamespaceMismatch(bytes32 expected, bytes32 got);
    error SpenderAuthoriserAlreadySet();

    constructor(address timelock_, VerifierRegistry verifiers_) {
        if (timelock_ == address(0) || address(verifiers_) == address(0)) revert ZeroAddress();
        timelock = timelock_;
        verifiers = verifiers_;
    }

    // ---------------------------------------------------------------- issuers

    function registerIssuer(
        bytes32 issuerId,
        uint8 tier,
        bool stateOperated,
        uint32 maxEnrolmentsPerEpoch,
        bytes32 namespaceId,
        string calldata metadataURI
    ) external {
        if (msg.sender != timelock) revert NotTimelock();
        if (tier < TIER_SOCIAL || tier > TIER_REGISTRY) revert BadTier(tier);
        if (namespaceId == bytes32(0)) revert BadNamespace();
        if (!issuers[issuerId].active && issuers[issuerId].tier == 0) _issuerIds.push(issuerId);
        issuers[issuerId] = Issuer({
            active: true,
            stateOperated: stateOperated,
            tier: tier,
            maxEnrolmentsPerEpoch: maxEnrolmentsPerEpoch,
            namespaceId: namespaceId,
            metadataURI: metadataURI
        });
        emit IssuerRegistered(issuerId, tier, stateOperated, namespaceId, metadataURI);
    }

    /**
     * @notice Deactivate a compromised issuer. Future enrolments stop; already-issued
     *         credentials keep working, because mass-revoking them would disenfranchise the
     *         issuer's legitimate users to punish its operator (ADR-003).
     */
    function deactivateIssuer(bytes32 issuerId, string calldata reason) external {
        if (msg.sender != timelock) revert NotTimelock();
        if (issuers[issuerId].tier == 0) revert UnknownIssuer(issuerId);
        issuers[issuerId].active = false;
        emit IssuerDeactivated(issuerId, reason);
    }

    function issuerCount() external view returns (uint256) {
        return _issuerIds.length;
    }

    function issuerIdAt(uint256 i) external view returns (bytes32) {
        return _issuerIds[i];
    }

    /// @notice ADR-003 invariant: ≥2 active issuers, ≥1 of them not state-operated.
    function issuerSetValid() public view returns (bool) {
        uint256 active;
        bool nonState;
        for (uint256 i = 0; i < _issuerIds.length; i++) {
            Issuer storage is_ = issuers[_issuerIds[i]];
            if (!is_.active) continue;
            active++;
            if (!is_.stateOperated) nonState = true;
        }
        return active >= 2 && nonState;
    }

    // ---------------------------------------------------------------- enrolment

    /**
     * @notice Enrol a citizen by proving they hold a valid credential from an accepted issuer.
     *
     * @dev Public signals: [issuerNullifier, identityCommitment, issuerIdAsUint, namespaceId].
     *      The proof establishes that the issuer's signature over the citizen's document is
     *      valid and that `issuerNullifier` is derived from it — all without the document,
     *      or anything derived from it beyond the nullifier, being transmitted.
     */
    function enrol(bytes32 issuerId, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
        returns (uint256 newRoot)
    {
        Issuer storage issuer = issuers[issuerId];
        if (issuer.tier == 0) revert UnknownIssuer(issuerId);
        if (!issuer.active) revert IssuerInactive(issuerId);

        // ADR-003 invariant, enforced rather than merely observable: a jurisdiction where
        // the state is the only accepted issuer is a jurisdiction where the state decides
        // who is a person. Fail closed.
        if (!issuerSetValid()) revert IssuerSetInvalid();

        if (publicSignals.length != 4) revert InvalidProof();
        if (publicSignals[2] != uint256(issuerId)) revert InvalidProof();
        // The circuit computes the nullifier over the issuer's NAMESPACE, so two issuers
        // reading the same underlying document produce the same nullifier and the second
        // enrolment is refused (see Issuer.namespaceId).
        if (bytes32(publicSignals[3]) != issuer.namespaceId) {
            revert NamespaceMismatch(issuer.namespaceId, bytes32(publicSignals[3]));
        }

        uint256 issuerNullifier = publicSignals[0];
        uint256 identityCommitment = publicSignals[1];

        if (enrolled[issuerNullifier]) revert AlreadyEnrolled(issuerNullifier);

        // Flood limiter: a compromised issuer cannot mint a jurisdiction's worth of people
        // faster than the 48h expedited-removal path can react (ADR-003).
        uint64 epoch = uint64(block.timestamp / EPOCH);
        EpochUsage storage u = _usage[issuerId];
        if (u.epoch != epoch) {
            u.epoch = epoch;
            u.count = 0;
        }
        if (issuer.maxEnrolmentsPerEpoch != 0 && u.count >= issuer.maxEnrolmentsPerEpoch) {
            revert IssuerEpochCapReached(issuerId, issuer.maxEnrolmentsPerEpoch);
        }
        u.count += 1;

        if (!verifiers.verify(CIRCUIT_ENROL, proof, publicSignals)) revert InvalidProof();

        enrolled[issuerNullifier] = true;
        commitmentTier[identityCommitment] = issuer.tier;

        newRoot = _identityTree._insert(identityCommitment);
        _recordRoot(newRoot);

        emit Enrolled(identityCommitment, issuerId, issuer.tier, newRoot);
    }

    // ---------------------------------------------------------------- nullifiers

    /**
     * @notice Burn an action nullifier for a scope. Called by protocol modules after they
     *         have verified the citizen's membership/residency proof for that action.
     *
     * @dev Scoping is what makes actions unlinkable: the same human endorsing a petition and
     *      voting in an unrelated election produces two nullifiers with no derivable
     *      relationship (ADR-003).
     */
    function spendNullifier(bytes32 scope, uint256 nullifier) external {
        if (!authorisedSpender[msg.sender]) revert NotAuthorisedSpender(msg.sender);
        bytes32 key = keccak256(abi.encodePacked(scope, nullifier));
        if (nullifierUsed[key]) revert NullifierAlreadyUsed(scope, nullifier);
        nullifierUsed[key] = true;
        emit NullifierSpent(scope, nullifier);
    }

    /// @notice Set the contract allowed to authorise new spenders. Timelocked (ADR-010).
    function setSpenderAuthoriser(address authoriser) external {
        if (msg.sender != timelock) revert NotTimelock();
        if (authoriser == address(0)) revert ZeroAddress();
        // Set once. Re-callable, this was a one-transaction path to making any address —
        // including the timelock itself — a universal, irrevocable nullifier burner.
        if (spenderAuthoriser != address(0)) revert SpenderAuthoriserAlreadySet();
        spenderAuthoriser = authoriser;
        authorisedSpender[authoriser] = true;
        emit SpenderAuthoriserSet(authoriser);
        emit SpenderAuthorised(authoriser, msg.sender);
    }

    /**
     * @notice Authorise a freshly-deployed protocol module to burn nullifiers.
     * @dev Callable only by the registry that deploys parties, so authorisation tracks
     *      deployment exactly. There is deliberately no de-authorisation: revoking a live
     *      party's ability to record votes would be a pause button by another name (CON-003).
     */
    function authoriseSpender(address spender) external {
        if (msg.sender != spenderAuthoriser) revert NotSpenderAuthoriser(msg.sender);
        if (spender == address(0)) revert ZeroAddress();
        authorisedSpender[spender] = true;
        emit SpenderAuthorised(spender, msg.sender);
    }

    function isSpent(bytes32 scope, uint256 nullifier) external view returns (bool) {
        return nullifierUsed[keccak256(abi.encodePacked(scope, nullifier))];
    }

    // ---------------------------------------------------------------- roots

    function root() external view returns (uint256) {
        return _identityTree._root();
    }

    function size() external view returns (uint256) {
        return _identityTree.size;
    }

    function requireKnownRoot(uint256 r) external view {
        if (!knownRoot[r]) revert UnknownRoot(r);
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
