// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {InternalLeanIMT, LeanIMTData} from "@zk-kit/lean-imt.sol/InternalLeanIMT.sol";

/**
 * @title RegionRegistry
 * @notice Regions, residency credential trees, attesters, and the population denominator
 *         that petition thresholds are computed from (ADR-004).
 *
 * @dev Three deliberate absences: there is no field anywhere in this contract for a street,
 *      a postcode, or a coordinate; there is no way to read back who holds a residency
 *      credential; and there is no privileged call that can set a region's population to an
 *      arbitrary number — the denominator is the median of independently submitted values,
 *      rate-limited, and subject to a dispute window (RISK-12).
 */
contract RegionRegistry {
    using InternalLeanIMT for LeanIMTData;

    struct Region {
        bool exists;
        uint32 schemeVersion;
        bytes32 parent; // bytes32(0) for a country
        uint8 depth; // 1 = country … 5 = ward
        string path; // e.g. "IN/KA/BLR" — administrative labels only
    }

    struct Attester {
        bool active;
        uint8 tier;
        uint256 stake;
        /**
         * @dev The account that may issue under this id.
         *
         * Without it, `attesterId` was a caller-supplied `bytes32` that anyone could read
         * out of the public `AttesterAuthorised` log and reuse — letting a stranger mint
         * unlimited residency credentials. That tree is the Sybil boundary for joining and
         * endorsing AND the source of `verifiedResidents()`, which is both the anonymity
         * guard and the petition denominator, so the attacker would have controlled the very
         * counter meant to bound them.
         */
        address issuer;
        string metadataURI;
    }

    struct PopulationProposal {
        uint256 value;
        uint64 submittedAt;
        bool exists;
    }

    struct Population {
        uint256 value; // effective denominator
        uint64 effectiveFrom;
        uint256 pendingValue;
        uint64 pendingSince;
    }

    /// @notice Dispute window before a new denominator takes effect (ADR-004 §4).
    uint64 public constant POPULATION_DISPUTE_WINDOW = 7 days;

    /// @notice Maximum movement of a denominator per quarter without a governance vote: ±5%.
    uint256 public constant POPULATION_MAX_DRIFT_BPS = 500;
    uint64 public constant POPULATION_DRIFT_PERIOD = 90 days;

    /// @notice Minimum independent sources before a denominator is meaningful.
    uint256 public constant MIN_POPULATION_SOURCES = 5;

    /**
     * @notice The anonymity-set floor a real deployment MUST use (NFR-002).
     *
     * @dev Publishing an action scoped to a region with few verified residents identifies the
     *      actor by elimination. 1,000 is the protocol's answer, and `assertSafeToPromote`
     *      in the deployment script refuses testnet, staging and production for any registry
     *      configured below it — the same treatment a mock verifier gets, and for the same
     *      reason: a deployment that looks correct while providing no anonymity is the most
     *      dangerous thing this codebase could ship.
     */
    uint256 public constant PRODUCTION_MIN_ANONYMITY_SET = 1000;

    /**
     * @notice The floor this deployment enforces.
     *
     * @dev A parameter rather than a constant for exactly one reason: seeding a thousand
     *      real Poseidon insertions per test case made the contract suite take six minutes
     *      and time out its own worker, which produced a green exit having run a fifth of
     *      the tests. A test suite nobody can afford to run is not a control. Production
     *      configuration is pinned to PRODUCTION_MIN_ANONYMITY_SET by the deployment gate
     *      and asserted by test.
     */
    uint256 public immutable minAnonymitySet;

    uint256 public constant ROOT_HISTORY = 64;

    address public immutable timelock;

    mapping(bytes32 regionId => Region) public regions;
    mapping(bytes32 regionId => LeanIMTData) internal _residencyTrees;
    mapping(bytes32 regionId => mapping(uint256 root => bool)) public knownRoot;
    mapping(bytes32 regionId => uint256[ROOT_HISTORY]) private _rootHistory;
    mapping(bytes32 regionId => uint256) private _rootCursor;

    mapping(bytes32 attesterId => Attester) public attesters;
    /// @dev attester → region → count issued, published so a spike is visible to everyone.
    mapping(bytes32 attesterId => mapping(bytes32 regionId => uint256)) public issuanceCount;
    /// @dev Which attesters may write into which region.
    mapping(bytes32 regionId => mapping(bytes32 attesterId => bool)) public attesterAuthorised;

    mapping(bytes32 regionId => Population) public population;
    mapping(bytes32 regionId => mapping(bytes32 sourceId => PopulationProposal)) private _popProposals;
    mapping(bytes32 regionId => bytes32[]) private _popSources;

    /// @notice Frozen regions accept no new residency credentials pending review (ADR-004 §3).
    mapping(bytes32 regionId => bool) public frozen;

    event RegionCreated(bytes32 indexed regionId, bytes32 indexed parent, uint32 schemeVersion, string path);
    event AttesterRegistered(
        bytes32 indexed attesterId, uint8 tier, uint256 stake, address indexed issuer, string metadataURI
    );
    event AttesterAuthorised(bytes32 indexed regionId, bytes32 indexed attesterId);
    event AttesterSlashed(bytes32 indexed attesterId, uint256 amount, string reason);
    event ResidencyIssued(bytes32 indexed regionId, bytes32 indexed attesterId, uint256 leaf, uint256 newRoot);
    event PopulationSubmitted(bytes32 indexed regionId, bytes32 indexed sourceId, uint256 value);
    event PopulationPending(bytes32 indexed regionId, uint256 value, uint64 effectiveAt);
    event PopulationEffective(bytes32 indexed regionId, uint256 value);
    event RegionFrozen(bytes32 indexed regionId, string reason);
    event RegionUnfrozen(bytes32 indexed regionId);

    error NotTimelock();
    error NotAuthorisedAttester(bytes32 regionId, bytes32 attesterId);
    error RegionExists(bytes32 regionId);
    error UnknownRegion(bytes32 regionId);
    error RegionIsFrozen(bytes32 regionId);
    error TooFewSources(uint256 have, uint256 need);
    error DriftTooLarge(uint256 from, uint256 to);
    error DisputeWindowOpen(uint64 until);
    error NoPending();
    error ZeroAddress();
    error BadPath();
    error BadAnonymityFloor();

    constructor(address timelock_, uint256 minAnonymitySet_) {
        if (timelock_ == address(0)) revert ZeroAddress();
        if (minAnonymitySet_ == 0) revert BadAnonymityFloor();
        timelock = timelock_;
        minAnonymitySet = minAnonymitySet_;
    }

    modifier onlyTimelock() {
        if (msg.sender != timelock) revert NotTimelock();
        _;
    }

    // ---------------------------------------------------------------- regions

    /// @dev regionId = keccak256("v<schemeVersion>:<path>") — matches packages/protocol regionPreimage().
    function regionIdOf(string calldata path, uint32 schemeVersion) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("v", _u32ToString(schemeVersion), ":", path));
    }

    function createRegion(string calldata path, uint32 schemeVersion, bytes32 parent, uint8 depth)
        external
        onlyTimelock
        returns (bytes32 regionId)
    {
        if (bytes(path).length == 0 || depth == 0 || depth > 5) revert BadPath();
        regionId = regionIdOf(path, schemeVersion);
        if (regions[regionId].exists) revert RegionExists(regionId);
        if (depth > 1 && !regions[parent].exists) revert UnknownRegion(parent);

        regions[regionId] =
            Region({exists: true, schemeVersion: schemeVersion, parent: parent, depth: depth, path: path});
        emit RegionCreated(regionId, parent, schemeVersion, path);
    }

    // ---------------------------------------------------------------- attesters

    function registerAttester(
        bytes32 attesterId,
        uint8 tier,
        uint256 stake,
        address issuer,
        string calldata metadataURI
    ) external onlyTimelock {
        if (issuer == address(0)) revert ZeroAddress();
        attesters[attesterId] =
            Attester({active: true, tier: tier, stake: stake, issuer: issuer, metadataURI: metadataURI});
        emit AttesterRegistered(attesterId, tier, stake, issuer, metadataURI);
    }

    function authoriseAttester(bytes32 regionId, bytes32 attesterId) external onlyTimelock {
        if (!regions[regionId].exists) revert UnknownRegion(regionId);
        attesterAuthorised[regionId][attesterId] = true;
        emit AttesterAuthorised(regionId, attesterId);
    }

    function slashAttester(bytes32 attesterId, uint256 amount, string calldata reason) external onlyTimelock {
        Attester storage a = attesters[attesterId];
        a.stake = amount >= a.stake ? 0 : a.stake - amount;
        if (a.stake == 0) a.active = false;
        emit AttesterSlashed(attesterId, amount, reason);
    }

    // ---------------------------------------------------------------- residency

    /**
     * @notice Insert a residency credential leaf for a region.
     * @param leaf Poseidon(identityCommitment, regionId, validUntil, tier) — computed off-chain
     *             by the attester. The chain never sees the components, only the commitment.
     */
    function issueResidency(bytes32 regionId, bytes32 attesterId, uint256 leaf) external returns (uint256 newRoot) {
        if (!regions[regionId].exists) revert UnknownRegion(regionId);
        if (frozen[regionId]) revert RegionIsFrozen(regionId);
        Attester storage att = attesters[attesterId];
        if (!attesterAuthorised[regionId][attesterId] || !att.active || att.issuer != msg.sender) {
            revert NotAuthorisedAttester(regionId, attesterId);
        }

        newRoot = _residencyTrees[regionId]._insert(leaf);
        _recordRoot(regionId, newRoot);
        issuanceCount[attesterId][regionId] += 1;

        emit ResidencyIssued(regionId, attesterId, leaf, newRoot);
    }

    function residencyRoot(bytes32 regionId) external view returns (uint256) {
        return _residencyTrees[regionId]._root();
    }

    function verifiedResidents(bytes32 regionId) public view returns (uint256) {
        return _residencyTrees[regionId].size;
    }

    /// @notice NFR-002: a region is only safe to publish actions against once k ≥ the floor.
    function anonymitySetSufficient(bytes32 regionId) external view returns (bool) {
        return verifiedResidents(regionId) >= minAnonymitySet;
    }

    /// @notice True only for a deployment configured to the protocol's real floor.
    function anonymityFloorIsProductionGrade() external view returns (bool) {
        return minAnonymitySet >= PRODUCTION_MIN_ANONYMITY_SET;
    }

    function freezeRegion(bytes32 regionId, string calldata reason) external onlyTimelock {
        frozen[regionId] = true;
        emit RegionFrozen(regionId, reason);
    }

    function unfreezeRegion(bytes32 regionId) external onlyTimelock {
        frozen[regionId] = false;
        emit RegionUnfrozen(regionId);
    }

    // ---------------------------------------------------------------- population oracle

    /**
     * @notice Submit this source's view of a region's eligible population.
     * @dev Any authorised source may submit; the effective value is the MEDIAN, so one
     *      corrupted source moves nothing. Sources are registered by the timelock.
     */
    function submitPopulation(bytes32 regionId, bytes32 sourceId, uint256 value) external onlyTimelock {
        if (!regions[regionId].exists) revert UnknownRegion(regionId);
        PopulationProposal storage p = _popProposals[regionId][sourceId];
        if (!p.exists) {
            p.exists = true;
            _popSources[regionId].push(sourceId);
        }
        p.value = value;
        p.submittedAt = uint64(block.timestamp);
        emit PopulationSubmitted(regionId, sourceId, value);
    }

    /**
     * @notice Compute the median of submitted sources and open the dispute window.
     *         The value does not take effect until the window closes (ADR-004 §4).
     */
    function proposePopulation(bytes32 regionId) external returns (uint256 median) {
        bytes32[] storage srcs = _popSources[regionId];
        if (srcs.length < MIN_POPULATION_SOURCES) revert TooFewSources(srcs.length, MIN_POPULATION_SOURCES);

        uint256[] memory values = new uint256[](srcs.length);
        for (uint256 i = 0; i < srcs.length; i++) {
            values[i] = _popProposals[regionId][srcs[i]].value;
        }
        _sort(values);
        median = values.length % 2 == 1
            ? values[values.length / 2]
            : (values[values.length / 2 - 1] + values[values.length / 2]) / 2;

        Population storage pop = population[regionId];

        // Rate-limit drift so a denominator cannot be swung underneath a live petition.
        if (pop.value != 0 && block.timestamp < pop.effectiveFrom + POPULATION_DRIFT_PERIOD) {
            uint256 maxDelta = (pop.value * POPULATION_MAX_DRIFT_BPS) / 10_000;
            uint256 delta = median > pop.value ? median - pop.value : pop.value - median;
            if (delta > maxDelta) revert DriftTooLarge(pop.value, median);
        }

        pop.pendingValue = median;
        pop.pendingSince = uint64(block.timestamp);
        emit PopulationPending(regionId, median, uint64(block.timestamp) + POPULATION_DISPUTE_WINDOW);
    }

    function activatePopulation(bytes32 regionId) external {
        Population storage pop = population[regionId];
        if (pop.pendingSince == 0) revert NoPending();
        uint64 until = pop.pendingSince + POPULATION_DISPUTE_WINDOW;
        if (block.timestamp < until) revert DisputeWindowOpen(until);

        pop.value = pop.pendingValue;
        pop.effectiveFrom = uint64(block.timestamp);
        pop.pendingSince = 0;
        pop.pendingValue = 0;
        emit PopulationEffective(regionId, pop.value);
    }

    function populationSourceCount(bytes32 regionId) external view returns (uint256) {
        return _popSources[regionId].length;
    }

    // ---------------------------------------------------------------- internals

    function _recordRoot(bytes32 regionId, uint256 r) internal {
        uint256 cursor = _rootCursor[regionId];
        uint256 evicted = _rootHistory[regionId][cursor];
        if (evicted != 0) knownRoot[regionId][evicted] = false;
        _rootHistory[regionId][cursor] = r;
        knownRoot[regionId][r] = true;
        _rootCursor[regionId] = (cursor + 1) % ROOT_HISTORY;
    }

    /// @dev Insertion sort. Source sets are small (single digits) by construction.
    function _sort(uint256[] memory a) private pure {
        for (uint256 i = 1; i < a.length; i++) {
            uint256 key = a[i];
            uint256 j = i;
            while (j > 0 && a[j - 1] > key) {
                a[j] = a[j - 1];
                j--;
            }
            a[j] = key;
        }
    }

    function _u32ToString(uint32 v) private pure returns (string memory) {
        if (v == 0) return "0";
        uint32 tmp = v;
        uint256 len;
        while (tmp != 0) {
            len++;
            tmp /= 10;
        }
        bytes memory buf = new bytes(len);
        while (v != 0) {
            buf[--len] = bytes1(uint8(48 + (v % 10)));
            v /= 10;
        }
        return string(buf);
    }
}
