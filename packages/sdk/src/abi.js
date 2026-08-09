/**
 * ABIs, transcribed from `packages/contracts/src/core/*.sol`.
 *
 * These are hand-written rather than imported from build artifacts so the SDK has no build
 * dependency on solc — but that makes them a *copy*, and a copy can drift. Every entry
 * below names the Solidity file it came from, and the argument order is the contract's
 * order, not a convenient one. Where a public signal array is passed, the comment states
 * the exact ordering the contract indexes into, because the contract reads
 * `publicSignals[3]` positionally and an SDK that reorders them produces a valid proof of
 * the wrong statement.
 */
import { parseAbi } from 'viem';

/** PartyRegistry.sol — petitions, thresholds, activation, forks. */
export const partyRegistryAbi = parseAbi([
  'struct Charter { uint32 constitutionalTenureSeconds; uint32 structuralTenureSeconds; uint32 policyTenureSeconds; uint32 officeTermSeconds; uint256 contributionCapPerPerson; bytes32 charterHash; string charterCID; }',
  'struct ForkInput { bytes32 petitionId; bytes32 parentPartyId; uint64 initiators; uint64 forkInitiatedAt; string name; bytes32 charterHash; string charterCID; uint64 durationSeconds; }',

  'function openPetition(bytes32 petitionId, bytes32 jurisdiction, string name, bytes32 charterHash, string charterCID, uint16 thresholdBps, uint64 durationSeconds) returns (uint64 required)',
  // publicSignals = [residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment]
  'function endorse(bytes32 petitionId, uint256[8] proof, uint256[] publicSignals)',
  'function withdrawEndorsement(bytes32 petitionId, uint256[8] proof, uint256[] publicSignals)',
  'function activate(bytes32 petitionId, Charter charterParams) returns (address partyAddr, address governorAddr)',
  'function expire(bytes32 petitionId)',
  'function openForkPetition(ForkInput f) returns (uint64 required)',

  'function requiredEndorsements(bytes32 jurisdiction, uint16 thresholdBps) view returns (uint64)',
  'function petitions(bytes32 petitionId) view returns (bytes32 jurisdiction, bytes32 charterHash, string charterCID, string name, uint16 thresholdBps, uint64 requiredEndorsements, uint64 endorsements, uint64 opensAt, uint64 closesAt, uint8 state, address party, bytes32 parentPartyId, uint64 forkInitiatedAt)',
  'function partyOf(bytes32 partyId) view returns (address)',
  'function governorOf(bytes32 partyId) view returns (address)',
  'function petitionCount() view returns (uint256)',
  'function petitionIdAt(uint256 i) view returns (bytes32)',

  'event PetitionOpened(bytes32 indexed petitionId, bytes32 indexed jurisdiction, string name, uint64 requiredEndorsements, uint64 opensAt, uint64 closesAt, bytes32 parentPartyId)',
  'event Endorsed(bytes32 indexed petitionId, uint64 endorsements, uint64 required)',
  'event EndorsementWithdrawn(bytes32 indexed petitionId, uint64 endorsements)',
  'event PartyActivated(bytes32 indexed petitionId, bytes32 indexed partyId, address party, address governor)',
  'event PetitionExpired(bytes32 indexed petitionId, uint64 endorsements, uint64 required)',

  'error PetitionExists(bytes32 petitionId)',
  'error UnknownPetition(bytes32 petitionId)',
  'error NotGathering()',
  'error ThresholdNotMet(uint64 have, uint64 need)',
  'error ThresholdOutOfRange(uint16 bps)',
  'error BadWindow()',
  'error UnknownRegion(bytes32 regionId)',
  'error AnonymitySetTooSmall(bytes32 regionId, uint256 have, uint256 need)',
  'error InvalidProof()',
  'error PetitionClosed(uint64 closesAt)',
  'error NotEndorsed()',
  'error ForkCoolingOff(uint64 until)',
  'error ForkInitiatorsInsufficient(uint16 haveBps, uint16 needBps)',
  'error UnknownParty(bytes32 partyId)',
]);

/** Party.sol — membership, charter, manifesto. Note the absences: no transfer, no admin. */
export const partyAbi = parseAbi([
  // publicSignals = [residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment]
  'function join(uint256[8] proof, uint256[] publicSignals) returns (uint256 newRoot)',
  'function leave(uint256[8] proof, uint256[] publicSignals) returns (uint64)',

  'function partyId() view returns (bytes32)',
  'function jurisdiction() view returns (bytes32)',
  'function memberCount() view returns (uint64)',
  'function memberRoot() view returns (uint256)',
  'function treeSize() view returns (uint256)',
  'function knownRoot(uint256 root) view returns (bool)',
  'function joinedAt(uint256 identityCommitment) view returns (uint64)',
  'function leftAt(uint256 identityCommitment) view returns (uint64)',
  'function isMemberAt(uint256 identityCommitment, uint64 timestamp) view returns (bool)',
  'function tenureAt(uint256 identityCommitment, uint64 timestamp) view returns (uint64)',
  'function surgeActive() view returns (bool)',
  'function growthSampleCount() view returns (uint256)',
  'function growthSamples(uint256 i) view returns (uint64 timestamp, uint64 memberCount)',
  'function charter() view returns (uint32 constitutionalTenureSeconds, uint32 structuralTenureSeconds, uint32 policyTenureSeconds, uint32 officeTermSeconds, uint256 contributionCapPerPerson, bytes32 charterHash, string charterCID)',
  'function manifestoVersionCount() view returns (uint256)',
  'function manifestoVersions(uint256 i) view returns (bytes32 contentHash, string cid, uint64 publishedAt, string changeSummary)',
  'function immutableClause(bytes32 clauseId) view returns (bool)',
  'function entrenchedApprovalBps(bytes32 clauseId) view returns (uint16)',
  'function entrenchedTimelock(bytes32 clauseId) view returns (uint32)',
  'function governor() view returns (address)',
  'function dissolved() view returns (bool)',
  'function parentPartyId() view returns (bytes32)',
  'function forkBlock() view returns (uint64)',

  'event Joined(uint256 indexed identityCommitment, uint64 at, uint256 newRoot, uint64 memberCount)',
  'event Left(uint256 indexed identityCommitment, uint64 at, uint64 memberCount)',
  'event ManifestoPublished(uint256 indexed version, bytes32 contentHash, string cid, string changeSummary)',
  'event AnomalousGrowth(uint64 fromCount, uint64 toCount, uint64 windowSeconds)',

  'error AlreadyMember(uint256 identityCommitment)',
  'error NotMember(uint256 identityCommitment)',
  'error PartyDissolved()',
  'error InvalidProof()',
  'error WrongJurisdiction()',
  'error AnonymitySetTooSmall(bytes32 regionId, uint256 have, uint256 need)',
]);

/** Governor.sol — proposals, tiered voting, timelock, permissionless execution. */
export const governorAbi = parseAbi([
  'struct ProposalInput { uint8 tier; bytes32 clauseId; bytes32 contentHash; string cid; uint32 requestedVotingSeconds; address target; bytes callData; }',
  'struct Proposal { uint8 tier; bytes32 clauseId; bytes32 contentHash; string cid; uint64 createdAt; uint64 snapshotMembers; bool surgeAtCreation; uint64 discussionEndsAt; uint64 votingEndsAt; uint64 executableAt; uint16 quorumBps; uint16 approvalBps; uint32 minTenureSeconds; uint64 forVotes; uint64 againstVotes; uint64 abstainVotes; bool finalized; bool succeeded; bool executed; bool cancelled; address target; bytes callData; }',

  // publicSignals = [partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds]
  'function propose(ProposalInput input, uint256[8] proof, uint256[] publicSignals) returns (uint256 proposalId)',
  'function vote(uint256 proposalId, uint8 choice, uint256[8] proof, uint256[] publicSignals)',
  'function cancelDuringDiscussion(uint256 proposalId, uint256[8] proof, uint256[] publicSignals)',
  'function finalize(uint256 proposalId) returns (bool succeeded)',
  'function execute(uint256 proposalId)',

  'function proposalCount() view returns (uint256)',
  'function proposals(uint256 id) view returns (Proposal)',
  'function state(uint256 id) view returns (uint8)',
  'function party() view returns (address)',
  'function lastProposalAt(bytes32 proposerScope) view returns (uint64)',

  'event ProposalCreated(uint256 indexed proposalId, uint8 tier, bytes32 contentHash, string cid, uint64 snapshotMembers, bool surgeAtCreation, uint64 votingEndsAt, uint64 executableAt)',
  'event VoteCast(uint256 indexed proposalId, uint8 choice, uint256 nullifier)',
  'event ProposalFinalized(uint256 indexed proposalId, bool succeeded, uint16 quorumReachedBps, uint16 approvalReachedBps)',
  'event ProposalExecuted(uint256 indexed proposalId, address target, bytes callData)',
  'event ProposalCancelled(uint256 indexed proposalId)',

  'error UnknownProposal(uint256 id)',
  'error NotInDiscussion()',
  'error NotInVoting()',
  'error VotingNotClosed()',
  'error AlreadyFinalized()',
  'error NotFinalized()',
  'error NotSucceeded()',
  'error TimelockNotElapsed(uint64 until)',
  'error AlreadyExecuted()',
  'error InvalidProof()',
  'error IneligibleTenure(uint64 have, uint32 need)',
  'error ClauseIsImmutable(bytes32 clauseId)',
  'error ProposalCooldown(uint64 until)',
  'error ExecutionFailed()',
  'error MaciPathRequired()',
]);

/** PersonhoodRegistry.sol — enrolment and nullifier burning. */
export const personhoodRegistryAbi = parseAbi([
  // publicSignals = [issuerNullifier, identityCommitment, uint256(issuerId), namespaceId]
  'function enrol(bytes32 issuerId, uint256[8] proof, uint256[] publicSignals) returns (uint256 newRoot)',
  'function issuers(bytes32 issuerId) view returns (bool active, bool stateOperated, uint8 tier, uint32 maxEnrolmentsPerEpoch, bytes32 namespaceId, string metadataURI)',
  'function issuerCount() view returns (uint256)',
  'function issuerIdAt(uint256 i) view returns (bytes32)',
  'function issuerSetValid() view returns (bool)',
  'function enrolled(uint256 issuerNullifier) view returns (bool)',
  'function isSpent(bytes32 scope, uint256 nullifier) view returns (bool)',
  'function commitmentTier(uint256 identityCommitment) view returns (uint8)',
  'function root() view returns (uint256)',
  'function size() view returns (uint256)',
  'function knownRoot(uint256 root) view returns (bool)',

  'event Enrolled(uint256 indexed identityCommitment, bytes32 indexed issuerId, uint8 tier, uint256 newRoot)',
  'event NullifierSpent(bytes32 indexed scope, uint256 nullifier)',

  'error UnknownIssuer(bytes32 issuerId)',
  'error IssuerInactive(bytes32 issuerId)',
  'error AlreadyEnrolled(uint256 issuerNullifier)',
  'error NullifierAlreadyUsed(bytes32 scope, uint256 nullifier)',
  'error InvalidProof()',
  'error IssuerEpochCapReached(bytes32 issuerId, uint32 cap)',
  'error IssuerSetInvalid()',
  'error NamespaceMismatch(bytes32 expected, bytes32 got)',
]);

/** RegionRegistry.sol — regions, residency trees, the population denominator. */
export const regionRegistryAbi = parseAbi([
  'function regionIdOf(string path, uint32 schemeVersion) pure returns (bytes32)',
  'function regions(bytes32 regionId) view returns (bool exists, uint32 schemeVersion, bytes32 parent, uint8 depth, string path)',
  'function residencyRoot(bytes32 regionId) view returns (uint256)',
  'function verifiedResidents(bytes32 regionId) view returns (uint256)',
  'function knownRoot(bytes32 regionId, uint256 root) view returns (bool)',
  'function anonymitySetSufficient(bytes32 regionId) view returns (bool)',
  'function population(bytes32 regionId) view returns (uint256 value, uint64 effectiveFrom, uint256 pendingValue, uint64 pendingSince)',
  'function frozen(bytes32 regionId) view returns (bool)',
  'function MIN_ANONYMITY_SET() view returns (uint256)',
  'function issuanceCount(bytes32 attesterId, bytes32 regionId) view returns (uint256)',
  'event ResidencyIssued(bytes32 indexed regionId, bytes32 indexed attesterId, uint256 leaf, uint256 newRoot)',
]);

/**
 * VerifierRegistry.sol — the source of truth for `zkeyHash` (DES-052).
 * This is the single most security-relevant read the client makes.
 */
export const verifierRegistryAbi = parseAbi([
  'struct CircuitVersion { address verifier; bytes32 zkeyHash; string ceremonyURI; uint64 registeredAt; uint64 retiredAt; }',
  'function current(bytes32 circuitId) view returns (CircuitVersion)',
  'function versionCount(bytes32 circuitId) view returns (uint256)',
  'error UnknownCircuit(bytes32 circuitId)',
]);

/** FeatureFlags.sol — the on-chain half of ship-dark. */
export const featureFlagsAbi = parseAbi([
  'function isEnabled(bytes32 flag) view returns (bool)',
  'error FlagDisabledError(bytes32 flag)',
]);

/**
 * The mock verifier's self-identification (SDD §14). It exists so a deployment-safety
 * check can *detect* a mock rather than trust a config file that says there isn't one.
 */
export const mockVerifierAbi = parseAbi(['function IS_INSECURE_MOCK() view returns (bool)']);

/**
 * `OptimismPortal.depositTransaction` on L1 — the force-inclusion escape hatch (DES-041).
 * A transaction deposited here is included by the L2 derivation pipeline whether or not
 * the sequencer cooperates, which is what makes censorship a delay rather than a veto.
 */
export const optimismPortalAbi = parseAbi([
  'function depositTransaction(address _to, uint256 _value, uint64 _gasLimit, bool _isCreation, bytes _data) payable',
]);
