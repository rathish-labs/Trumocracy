// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {Party} from "./Party.sol";
import {PartyDeployer, GovernorDeployer, Wiring} from "./PartyDeployer.sol";
import {PersonhoodRegistry} from "./PersonhoodRegistry.sol";
import {RegionRegistry} from "./RegionRegistry.sol";
import {VerifierRegistry} from "./VerifierRegistry.sol";
import {FeatureFlags} from "./FeatureFlags.sol";

/**
 * @title PartyRegistry
 * @notice Petitions, thresholds and party activation (ADR-004 §4, ADR-008 §5).
 *
 * @dev The activation path contains no human step. When the endorsement count reaches the
 *      threshold, `activate()` succeeds for anyone who calls it — there is no approve,
 *      reject, review, feature or verify function anywhere in this contract, and adding one
 *      would reintroduce exactly the gatekeeper the product exists to remove (FR-018).
 *
 *      The threshold is `max(pct × population, pct × verifiedResidents, absoluteFloor)`.
 *      The floor is what makes the population oracle safe to depend on: corrupting it
 *      downward buys an attacker nothing (RISK-12).
 */
contract PartyRegistry {
    bytes32 public constant FLAG_PETITIONS = keccak256("petitions");
    bytes32 public constant FLAG_FORK = keccak256("fork");
    bytes32 public constant CIRCUIT_RESIDENCY = keccak256("residency_member");

    uint16 public constant DEFAULT_THRESHOLD_BPS = 200; // 2%
    uint16 public constant MIN_THRESHOLD_BPS = 50;
    uint16 public constant MAX_THRESHOLD_BPS = 2_000;
    /**
     * @notice The endorsement floor a real deployment MUST use.
     *
     * @dev No party charters on a handful of accounts, however small or thinly-measured its
     *      region. Pinned for testnet and above by `assertSafeToPromote`.
     */
    uint64 public constant PRODUCTION_ABSOLUTE_FLOOR_ENDORSEMENTS = 500;

    /**
     * @notice The endorsement floor this deployment enforces.
     * @dev A parameter for the same reason as `RegionRegistry.minAnonymitySet`: paying for
     *      five hundred real endorsement transactions in every fixture made the suite too
     *      slow to finish, and a suite that does not finish is not a control.
     */
    uint64 public immutable absoluteFloorEndorsements;
    uint64 public constant MIN_PETITION_SECONDS = 30 days;
    uint64 public constant MAX_PETITION_SECONDS = 365 days;

    /// @notice A fork must be initiated by ≥10% of the parent's members, then wait 30 days.
    uint16 public constant FORK_MIN_INITIATOR_BPS = 1_000;
    uint64 public constant FORK_COOLING_OFF = 30 days;

    enum PetitionState {
        Gathering,
        Activated,
        Expired
    }

    struct Petition {
        bytes32 jurisdiction;
        bytes32 charterHash;
        string charterCID;
        string name;
        uint16 thresholdBps;
        uint64 requiredEndorsements; // snapshotted at creation — cannot be raised underneath a petition
        uint64 endorsements;
        uint64 opensAt;
        uint64 closesAt;
        PetitionState state;
        address party;
        bytes32 parentPartyId; // non-zero for a fork
        uint64 forkInitiatedAt;
    }

    PersonhoodRegistry public immutable personhood;
    RegionRegistry public immutable regions;
    VerifierRegistry public immutable verifiers;
    FeatureFlags public immutable flags;
    PartyDeployer public immutable partyDeployer;
    GovernorDeployer public immutable governorDeployer;

    mapping(bytes32 petitionId => Petition) public petitions;
    bytes32[] private _petitionIds;
    mapping(bytes32 partyId => address) public partyOf;
    mapping(bytes32 partyId => address) public governorOf;

    /// @dev petition → endorsement nullifier → already withdrawn. Stops a repeat decrement.
    mapping(bytes32 petitionId => mapping(uint256 nullifier => bool)) public withdrawn;

    /**
     * @notice How stale a residency proof may be.
     * @dev A circuit cannot read the clock, so it proves "my credential had not expired at
     *      `provedAt`" and the contract bounds how far in the past that may be. Without the
     *      bound, an expired credential could be used forever by replaying an old timestamp.
     */
    uint64 public constant MAX_PROOF_AGE = 1 hours;

    event PetitionOpened(
        bytes32 indexed petitionId,
        bytes32 indexed jurisdiction,
        string name,
        uint64 requiredEndorsements,
        uint64 opensAt,
        uint64 closesAt,
        bytes32 parentPartyId
    );
    event Endorsed(bytes32 indexed petitionId, uint64 endorsements, uint64 required);
    event EndorsementWithdrawn(bytes32 indexed petitionId, uint64 endorsements);
    event PartyActivated(bytes32 indexed petitionId, bytes32 indexed partyId, address party, address governor);
    event PetitionExpired(bytes32 indexed petitionId, uint64 endorsements, uint64 required);

    error PetitionExists(bytes32 petitionId);
    error UnknownPetition(bytes32 petitionId);
    error NotGathering();
    error ThresholdNotMet(uint64 have, uint64 need);
    error ThresholdOutOfRange(uint16 bps);
    error BadWindow();
    error UnknownRegion(bytes32 regionId);
    error AnonymitySetTooSmall(bytes32 regionId, uint256 have, uint256 need);
    error InvalidProof();
    error PetitionClosed(uint64 closesAt);
    error NotEndorsed();
    error ForkCoolingOff(uint64 until);
    error ForkInitiatorsInsufficient(uint16 haveBps, uint16 needBps);
    error UnknownParty(bytes32 partyId);
    error BadEndorsementFloor();
    error AlreadyWithdrawn();
    error ProofTooOld(uint64 provedAt, uint64 nowTs);
    error ProofFromTheFuture(uint64 provedAt, uint64 nowTs);

    constructor(
        PersonhoodRegistry personhood_,
        RegionRegistry regions_,
        VerifierRegistry verifiers_,
        FeatureFlags flags_,
        PartyDeployer partyDeployer_,
        GovernorDeployer governorDeployer_,
        uint64 absoluteFloorEndorsements_
    ) {
        if (absoluteFloorEndorsements_ == 0) revert BadEndorsementFloor();
        personhood = personhood_;
        regions = regions_;
        verifiers = verifiers_;
        flags = flags_;
        partyDeployer = partyDeployer_;
        governorDeployer = governorDeployer_;
        absoluteFloorEndorsements = absoluteFloorEndorsements_;
    }

    /// @notice True only for a deployment configured to the protocol's real floor.
    function endorsementFloorIsProductionGrade() external view returns (bool) {
        return absoluteFloorEndorsements >= PRODUCTION_ABSOLUTE_FLOOR_ENDORSEMENTS;
    }

    // ------------------------------------------------------------ petitions

    /**
     * @notice Open a petition for a new party. Any verified citizen may do this.
     * @dev The required endorsement count is computed and FROZEN here, so a later movement of
     *      the population denominator cannot raise the bar underneath a petition that is
     *      succeeding (ADR-004 §4).
     */
    function openPetition(
        bytes32 petitionId,
        bytes32 jurisdiction,
        string calldata name,
        bytes32 charterHash,
        string calldata charterCID,
        uint16 thresholdBps,
        uint64 durationSeconds
    ) external returns (uint64 required) {
        flags.requireEnabled(FLAG_PETITIONS);
        if (petitions[petitionId].opensAt != 0) revert PetitionExists(petitionId);
        if (thresholdBps == 0) thresholdBps = DEFAULT_THRESHOLD_BPS;
        if (thresholdBps < MIN_THRESHOLD_BPS || thresholdBps > MAX_THRESHOLD_BPS) {
            revert ThresholdOutOfRange(thresholdBps);
        }
        if (durationSeconds < MIN_PETITION_SECONDS || durationSeconds > MAX_PETITION_SECONDS) revert BadWindow();
        (bool exists,,,,) = regions.regions(jurisdiction);
        if (!exists) revert UnknownRegion(jurisdiction);

        required = requiredEndorsements(jurisdiction, thresholdBps);

        petitions[petitionId] = Petition({
            jurisdiction: jurisdiction,
            charterHash: charterHash,
            charterCID: charterCID,
            name: name,
            thresholdBps: thresholdBps,
            requiredEndorsements: required,
            endorsements: 0,
            opensAt: uint64(block.timestamp),
            closesAt: uint64(block.timestamp) + durationSeconds,
            state: PetitionState.Gathering,
            party: address(0),
            parentPartyId: bytes32(0),
            forkInitiatedAt: 0
        });
        _petitionIds.push(petitionId);

        emit PetitionOpened(
            petitionId, jurisdiction, name, required, uint64(block.timestamp), uint64(block.timestamp) + durationSeconds, bytes32(0)
        );
    }

    /// @notice `max(pct × population, pct × verifiedResidents, absoluteFloor)` — the floor is the point.
    function requiredEndorsements(bytes32 jurisdiction, uint16 thresholdBps) public view returns (uint64) {
        (uint256 population,,,) = regions.population(jurisdiction);
        uint256 verified = regions.verifiedResidents(jurisdiction);

        uint256 byPopulation = _ceilMulDiv(population, thresholdBps, 10_000);
        uint256 byVerified = _ceilMulDiv(verified, thresholdBps, 10_000);

        uint256 required = byPopulation > byVerified ? byPopulation : byVerified;
        if (required < absoluteFloorEndorsements) required = absoluteFloorEndorsements;
        return uint64(required);
    }

    /**
     * @notice Endorse a petition. One endorsement per person per petition, enforced by a
     *         scope-bound nullifier — not by an account, which could be multiplied.
     * @param publicSignals [residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment]
     */
    function endorse(bytes32 petitionId, uint256[8] calldata proof, uint256[] calldata publicSignals) external {
        flags.requireEnabled(FLAG_PETITIONS);
        Petition storage p = _get(petitionId);
        if (p.state != PetitionState.Gathering) revert NotGathering();
        if (block.timestamp >= p.closesAt) revert PetitionClosed(p.closesAt);
        if (publicSignals.length != 7) revert InvalidProof();
        _requireFreshProof(publicSignals[6]);

        if (bytes32(publicSignals[1]) != p.jurisdiction) revert InvalidProof();
        if (bytes32(publicSignals[3]) != _endorseScope(petitionId)) revert InvalidProof();
        if (!regions.knownRoot(p.jurisdiction, publicSignals[0])) revert InvalidProof();

        uint256 k = regions.verifiedResidents(p.jurisdiction);
        if (k < regions.minAnonymitySet()) {
            revert AnonymitySetTooSmall(p.jurisdiction, k, regions.minAnonymitySet());
        }

        if (!verifiers.verify(CIRCUIT_RESIDENCY, proof, publicSignals)) revert InvalidProof();
        personhood.spendNullifier(_endorseScope(petitionId), publicSignals[4]);

        p.endorsements += 1;
        emit Endorsed(petitionId, p.endorsements, p.requiredEndorsements);
    }

    /**
     * @notice Withdraw an endorsement before activation (FR-015).
     *
     * @dev Withdrawal proves against the **endorsement scope**, not a separate one, and the
     *      contract requires that exact nullifier to have been spent endorsing this petition.
     *
     *      An earlier version used a distinct scope in the name of unlinkability, which meant
     *      it verified nothing at all: any resident could decrement any petition, repeatedly,
     *      without ever having endorsed it — a one-call veto on a party's existence. The
     *      unlinkability that was being protected does not exist here anyway: endorsing is
     *      public by design (ADR-006), so a public act being publicly reversed reveals nothing
     *      the endorsement did not.
     */
    function withdrawEndorsement(bytes32 petitionId, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
    {
        Petition storage p = _get(petitionId);
        if (p.state != PetitionState.Gathering) revert NotGathering();
        if (publicSignals.length != 7) revert InvalidProof();
        if (p.endorsements == 0) revert NotEndorsed();

        bytes32 endorseScope = _endorseScope(petitionId);
        if (bytes32(publicSignals[1]) != p.jurisdiction) revert InvalidProof();
        if (bytes32(publicSignals[3]) != endorseScope) revert InvalidProof();
        if (!regions.knownRoot(p.jurisdiction, publicSignals[0])) revert InvalidProof();
        _requireFreshProof(publicSignals[6]);

        uint256 nullifier = publicSignals[4];
        if (!personhood.isSpent(endorseScope, nullifier)) revert NotEndorsed();
        if (withdrawn[petitionId][nullifier]) revert AlreadyWithdrawn();

        if (!verifiers.verify(CIRCUIT_RESIDENCY, proof, publicSignals)) revert InvalidProof();

        withdrawn[petitionId][nullifier] = true;
        p.endorsements -= 1;
        emit EndorsementWithdrawn(petitionId, p.endorsements);
    }

    // ------------------------------------------------------------ activation

    /**
     * @notice Activate a party whose petition reached its threshold.
     * @dev Permissionless and unconditional on anything but the count. No approval exists.
     */
    function activate(bytes32 petitionId, Party.Charter calldata charterParams)
        external
        returns (address partyAddr, address governorAddr)
    {
        flags.requireEnabled(FLAG_PETITIONS);
        Petition storage p = _get(petitionId);
        if (p.state != PetitionState.Gathering) revert NotGathering();
        if (p.endorsements < p.requiredEndorsements) {
            revert ThresholdNotMet(p.endorsements, p.requiredEndorsements);
        }

        bytes32 partyId = petitionId;

        Wiring memory w = Wiring({personhood: personhood, regions: regions, verifiers: verifiers, flags: flags});
        partyAddr = partyDeployer.deployParty(
            partyId,
            p.jurisdiction,
            w,
            charterParams,
            p.parentPartyId,
            p.parentPartyId == bytes32(0) ? 0 : uint64(block.number),
            address(this)
        );
        governorAddr = governorDeployer.deployGovernor(Party(partyAddr), w);
        Party(partyAddr).setGovernor(governorAddr);

        // A freshly-deployed party and its governor must be able to burn action nullifiers.
        // Authorisation is granted here and nowhere else, so the set of contracts that can
        // spend a citizen's nullifier is exactly the set this registry deployed.
        personhood.authoriseSpender(partyAddr);
        personhood.authoriseSpender(governorAddr);

        p.state = PetitionState.Activated;
        p.party = partyAddr;
        partyOf[partyId] = partyAddr;
        governorOf[partyId] = governorAddr;

        emit PartyActivated(petitionId, partyId, partyAddr, governorAddr);
    }

    /// @notice Mark a petition expired once its window closes short of the threshold.
    function expire(bytes32 petitionId) external {
        Petition storage p = _get(petitionId);
        if (p.state != PetitionState.Gathering) revert NotGathering();
        if (block.timestamp < p.closesAt) revert BadWindow();
        p.state = PetitionState.Expired;
        emit PetitionExpired(petitionId, p.endorsements, p.requiredEndorsements);
    }

    // ------------------------------------------------------------ fork

    /**
     * @notice Open a fork petition inheriting a parent party's charter and lineage.
     * @dev Requires ≥10% of the parent's members to have initiated, then a 30-day cooling-off
     *      period. Nobody in the parent party can block it — that is the whole point: capture
     *      defences that rely on winning the fight eventually lose, so the real protection is
     *      that capturing a party no longer captures its people (ADR-008 §5).
     */
    struct ForkInput {
        bytes32 petitionId;
        bytes32 parentPartyId;
        uint64 initiators;
        uint64 forkInitiatedAt;
        string name;
        bytes32 charterHash;
        string charterCID;
        uint64 durationSeconds;
    }

    function openForkPetition(ForkInput calldata f) external returns (uint64 required) {
        flags.requireEnabled(FLAG_FORK);
        if (petitions[f.petitionId].opensAt != 0) revert PetitionExists(f.petitionId);
        address parent = partyOf[f.parentPartyId];
        if (parent == address(0)) revert UnknownParty(f.parentPartyId);

        _checkForkEligibility(parent, f.initiators, f.forkInitiatedAt, f.durationSeconds);

        bytes32 jurisdiction = Party(parent).jurisdiction();
        required = requiredEndorsements(jurisdiction, DEFAULT_THRESHOLD_BPS);

        petitions[f.petitionId] = Petition({
            jurisdiction: jurisdiction,
            charterHash: f.charterHash,
            charterCID: f.charterCID,
            name: f.name,
            thresholdBps: DEFAULT_THRESHOLD_BPS,
            requiredEndorsements: required,
            endorsements: 0,
            opensAt: uint64(block.timestamp),
            closesAt: uint64(block.timestamp) + f.durationSeconds,
            state: PetitionState.Gathering,
            party: address(0),
            parentPartyId: f.parentPartyId,
            forkInitiatedAt: f.forkInitiatedAt
        });
        _petitionIds.push(f.petitionId);

        emit PetitionOpened(
            f.petitionId,
            jurisdiction,
            f.name,
            required,
            uint64(block.timestamp),
            uint64(block.timestamp) + f.durationSeconds,
            f.parentPartyId
        );
    }

    function _checkForkEligibility(address parent, uint64 initiators, uint64 forkInitiatedAt, uint64 durationSeconds)
        private
        view
    {
        uint64 parentMembers = Party(parent).memberCount();
        uint16 shareBps = parentMembers == 0 ? 0 : uint16((uint256(initiators) * 10_000) / parentMembers);
        if (shareBps < FORK_MIN_INITIATOR_BPS) revert ForkInitiatorsInsufficient(shareBps, FORK_MIN_INITIATOR_BPS);
        if (block.timestamp < forkInitiatedAt + FORK_COOLING_OFF) {
            revert ForkCoolingOff(forkInitiatedAt + FORK_COOLING_OFF);
        }
        if (durationSeconds < MIN_PETITION_SECONDS || durationSeconds > MAX_PETITION_SECONDS) revert BadWindow();
    }

    // ------------------------------------------------------------ views

    function petitionCount() external view returns (uint256) {
        return _petitionIds.length;
    }

    function petitionIdAt(uint256 i) external view returns (bytes32) {
        return _petitionIds[i];
    }

    function _endorseScope(bytes32 petitionId) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("endorse", petitionId));
    }

    function _withdrawScope(bytes32 petitionId) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("withdraw-endorsement", petitionId));
    }

    function _get(bytes32 petitionId) private view returns (Petition storage p) {
        p = petitions[petitionId];
        if (p.opensAt == 0) revert UnknownPetition(petitionId);
    }

    /// @dev Bound how stale a residency proof's asserted "now" may be (see MAX_PROOF_AGE).
    function _requireFreshProof(uint256 provedAt) internal view {
        uint64 t = uint64(provedAt);
        if (t > block.timestamp) revert ProofFromTheFuture(t, uint64(block.timestamp));
        if (block.timestamp - t > MAX_PROOF_AGE) revert ProofTooOld(t, uint64(block.timestamp));
    }

    function _ceilMulDiv(uint256 a, uint256 b, uint256 d) private pure returns (uint256) {
        if (a == 0 || b == 0) return 0;
        return (a * b + d - 1) / d;
    }
}
