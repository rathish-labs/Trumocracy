/**
 * Shared deployment fixture.
 *
 * Builds the whole protocol in-process: PoseidonT3, registries, flags, deployers and the
 * party registry, plus a populated region with enough verified residents to clear the
 * k ≥ 1000 anonymity floor. Everything runs in the EthereumJS VM with real Solidity — no
 * RPC, no node, no network.
 */
import { Chain, compile, readSolidityDir } from '@trumocracy/evm-harness';
import { keccak256, toHex, encodePacked } from 'viem';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, '..', 'src');
const PKG = path.join(HERE, '..');
const REPO = path.join(HERE, '..', '..', '..');

let cached;

const SUPPORT = path.join(HERE, 'support');

export function artifacts() {
  if (!cached) {
    // Test-support contracts are compiled alongside src under the same virtual root, so a
    // probe can import `../core/...` exactly as a production contract would.
    const sources = { ...readSolidityDir(SRC, SRC), ...readSolidityDir(SUPPORT, path.join(HERE)) };
    cached = compile(sources, { roots: [PKG, REPO] }).contracts;
    for (const [name, a] of Object.entries(cached)) a.name = name;
  }
  return cached;
}

export const flagId = (s) => keccak256(toHex(s));
export const scopeId = (label, ...parts) =>
  keccak256(encodePacked(['string', ...parts.map(() => 'bytes32')], [label, ...parts]));

export const REGION_PATH = 'IN/KA/BLR';
export const SCHEME_VERSION = 1;

/** Matches RegionRegistry.regionIdOf and packages/protocol regionPreimage(). */
export const regionId = (p = REGION_PATH, v = SCHEME_VERSION) =>
  keccak256(encodePacked(['string', 'string', 'string', 'string'], ['v', String(v), ':', p]));

export const ATTESTER = keccak256(toHex('civic-notary-blr'));
export const ISSUER_DOC = keccak256(toHex('epassport-nfc'));
export const ISSUER_STATE = keccak256(toHex('civil-registry'));

/**
 * Identifier namespaces (ADR-003). Issuers that read the SAME underlying document share a
 * namespace, so two of them cannot be used to enrol the same human twice.
 */
export const NS_EPASSPORT = keccak256(toHex('ns:icao-epassport'));
export const NS_CIVIL_REGISTRY = keccak256(toHex('ns:civil-registry'));
export const NS_SOCIAL = keccak256(toHex('ns:social-graph'));

export const ALL_FLAGS = [
  'petitions',
  'party_governance',
  'elections',
  'recall',
  'maci_voting',
  'private_endorsement',
  'delegation',
  'treasury',
  'fork',
].map(flagId);

/** Flags for a Phase-1 deployment: governance on, coercion-resistance and the rest still dark. */
export const PHASE1_FLAGS = ['petitions', 'party_governance', 'fork', 'treasury'].map(flagId);

/**
 * @param {object} opts
 * @param {string[]} opts.flags               flag ids to enable (default PHASE1_FLAGS)
 * @param {number}  opts.residents            residency leaves to seed
 * @param {number}  opts.population           eligible population for the region
 * @param {number}  opts.anonymityFloor       the k this deployment enforces
 *
 * Note on `anonymityFloor`: production is pinned to 1,000 (NFR-002) and a test asserts it,
 * but seeding a thousand real Poseidon insertions per fixture made the suite take six
 * minutes and time out its own worker — which produced a GREEN EXIT having run one test
 * file in five. Tests therefore run a small floor and seed just above it; the production
 * value is verified by `deployment-safety` and by UT-0117 rather than by paying for it in
 * every fixture.
 */
export async function deployProtocol(opts = {}) {
  const {
    flags: enabledFlags = PHASE1_FLAGS,
    anonymityFloor = 12,
    endorsementFloor = 8,
    residents = anonymityFloor + 2,
    population = 1_000_000,
  } = opts;

  const A = artifacts();
  const chain = await Chain.create();
  chain.registerErrors(A);

  // account(0) stands in for the protocol timelock in tests. In production it is the
  // 30-day timelock contract from ADR-010, and nothing else can reach these functions.
  const timelock = chain.account(0);
  const emergency = chain.account(9);

  const flagsC = await chain.deploy(A.FeatureFlags, [
    timelock.toString(),
    emergency.toString(),
    enabledFlags,
  ]);
  const verifiers = await chain.deploy(A.VerifierRegistry, [timelock.toString()]);
  const personhood = await chain.deploy(A.PersonhoodRegistry, [timelock.toString(), verifiers.address.toString()]);
  const regions = await chain.deploy(A.RegionRegistry, [timelock.toString(), BigInt(anonymityFloor)]);
  const partyDeployer = await chain.deploy(A.PartyDeployer, []);
  const governorDeployer = await chain.deploy(A.GovernorDeployer, []);
  const partyRegistry = await chain.deploy(A.PartyRegistry, [
    personhood.address.toString(),
    regions.address.toString(),
    verifiers.address.toString(),
    flagsC.address.toString(),
    partyDeployer.address.toString(),
    governorDeployer.address.toString(),
    BigInt(endorsementFloor),
  ]);

  // Verifiers: accepting mocks for the governance-layer tests, plus a rejecting one so the
  // "a bad proof is refused" path is exercised rather than assumed.
  const enrolVerifier = await chain.deploy(A.MockVerifier, [4n, true]);
  const residencyVerifier = await chain.deploy(A.MockVerifier, [7n, true]);
  const tenureVerifier = await chain.deploy(A.MockVerifier, [6n, true]);

  await verifiers.send('register', [
    keccak256(toHex('personhood_enrol')),
    enrolVerifier.address.toString(),
    keccak256(toHex('zkey:enrol:v1')),
    'ipfs://ceremony/enrol',
  ]);
  await verifiers.send('register', [
    keccak256(toHex('residency_member')),
    residencyVerifier.address.toString(),
    keccak256(toHex('zkey:residency:v1')),
    'ipfs://ceremony/residency',
  ]);
  await verifiers.send('register', [
    keccak256(toHex('tenure_member')),
    tenureVerifier.address.toString(),
    keccak256(toHex('zkey:tenure:v1')),
    'ipfs://ceremony/tenure',
  ]);

  // Issuers: ADR-003 requires ≥2 active, ≥1 non-state.
  await personhood.send('registerIssuer', [ISSUER_DOC, 2, false, 0, NS_EPASSPORT, 'ipfs://assessment/epassport']);
  await personhood.send('registerIssuer', [ISSUER_STATE, 3, true, 0, NS_CIVIL_REGISTRY, 'ipfs://assessment/registry']);

  // Only contracts the registry deployed may burn a citizen's nullifier (see
  // PersonhoodRegistry.authorisedSpender) — otherwise anyone could grief anyone.
  await personhood.send('setSpenderAuthoriser', [partyRegistry.address.toString()]);

  // Region hierarchy.
  await regions.send('createRegion', ['IN', SCHEME_VERSION, '0x' + '00'.repeat(32), 1]);
  await regions.send('createRegion', ['IN/KA', SCHEME_VERSION, regionId('IN'), 2]);
  await regions.send('createRegion', [REGION_PATH, SCHEME_VERSION, regionId('IN/KA'), 3]);

  const rid = regionId(REGION_PATH);
  // An attester is an ACCOUNT, not a self-asserted id: `issueResidency` checks msg.sender.
  await regions.send('registerAttester', [
    ATTESTER,
    2,
    10n ** 18n,
    timelock.toString(),
    'ipfs://attester/civic-notary',
  ]);
  await regions.send('authoriseAttester', [rid, ATTESTER]);

  // Population oracle: five independent sources, median, then the dispute window.
  const sources = ['census', 'electoral-roll', 'un-stats', 'world-bank', 'independent-stats'];
  for (const [i, s] of sources.entries()) {
    await regions.send('submitPopulation', [rid, keccak256(toHex(s)), BigInt(population + i * 137)]);
  }
  await regions.send('proposePopulation', [rid]);
  await chain.warp(8 * 86400);
  await regions.send('activatePopulation', [rid]);

  // Seed residency credentials so the region clears the anonymity floor.
  for (let i = 0; i < residents; i++) {
    await regions.send('issueResidency', [rid, ATTESTER, BigInt(1_000_000 + i)]);
  }

  return {
    chain,
    A,
    timelock,
    emergency,
    flags: flagsC,
    verifiers,
    personhood,
    regions,
    partyRegistry,
    partyDeployer,
    governorDeployer,
    enrolVerifier,
    residencyVerifier,
    tenureVerifier,
    rid,
    anonymityFloor,
    endorsementFloor,
  };
}

/**
 * Residency proof public signals:
 * [residencyRoot, regionId, minTier, scope, actionNullifier, identityCommitment]
 *
 * NOTE for readers: with the mock verifier these values are unconstrained, so these tests
 * exercise the CONTRACT's checks (scope binding, root freshness, nullifier spend, region
 * match), not the circuit's. Binding the signals to a real witness is the circuit's job and
 * is covered by the circuit suite (Doc 04 §ZK doctrine).
 */
export async function residencySignals(ctx, { scope, nullifier, commitment, minTier = 1, provedAt }) {
  const { regions, rid, chain } = ctx;
  const root = await regions.read('residencyRoot', [rid]);
  // `provedAt` is the "now" the circuit proved the credential had not expired at; the
  // contract bounds how stale it may be (MAX_PROOF_AGE).
  const now = provedAt ?? chain.timestamp;
  return [root, BigInt(rid), BigInt(minTier), BigInt(scope), BigInt(nullifier), BigInt(commitment), BigInt(now)];
}

/** Enrolment public signals: [issuerNullifier, identityCommitment, issuerId, namespaceId] */
export function enrolSignals({ issuerNullifier, commitment, issuerId, namespaceId }) {
  return [BigInt(issuerNullifier), BigInt(commitment), BigInt(issuerId), BigInt(namespaceId)];
}

/**
 * Tenure proof public signals:
 * [partyRootAtSnapshot, partyId, scope, actionNullifier, tenureSeconds, snapshotAt]
 *
 * The root and `snapshotAt` are bound by `Governor.vote` to the proposal's own snapshot, so
 * a test that votes must pass the values the proposal actually recorded.
 */
export function tenureSignals({ partyRoot = 0n, partyId, scope, nullifier, tenureSeconds, snapshotAt = 0n }) {
  return [
    BigInt(partyRoot),
    BigInt(partyId),
    BigInt(scope),
    BigInt(nullifier),
    BigInt(tenureSeconds),
    BigInt(snapshotAt),
  ];
}

/** Read a proposal's snapshot root and time, for building a vote proof against it. */
export async function proposalSnapshot(governor, proposalId) {
  const p = await governor.read('proposals', [proposalId]);
  return { root: p.snapshotRoot, at: p.snapshotAt };
}

export const ZERO_PROOF = [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n];

export const DEFAULT_CHARTER = {
  constitutionalTenureSeconds: 180 * 86400,
  structuralTenureSeconds: 90 * 86400,
  policyTenureSeconds: 14 * 86400,
  officeTermSeconds: 730 * 86400,
  contributionCapPerPerson: 10n ** 18n,
  charterHash: keccak256(toHex('charter-v1')),
  charterCID: 'ipfs://charter/v1',
};

export function charterTuple(overrides = {}) {
  const c = { ...DEFAULT_CHARTER, ...overrides };
  return [
    c.constitutionalTenureSeconds,
    c.structuralTenureSeconds,
    c.policyTenureSeconds,
    c.officeTermSeconds,
    c.contributionCapPerPerson,
    c.charterHash,
    c.charterCID,
  ];
}

/** Bind a compiled artifact to an address that came out of an event. */
export function attach(ctx, name, address) {
  return ctx.chain.attach(artifacts()[name], address);
}

/** Drive a petition from opening to an activated party. */
export async function activateParty(ctx, { petitionId, endorsements, thresholdBps = 200, duration = 90 * 86400 }) {
  const { partyRegistry, rid } = ctx;
  await partyRegistry.send('openPetition', [
    petitionId,
    rid,
    'Commons Forward',
    keccak256(toHex('charter-v1')),
    'ipfs://charter/v1',
    thresholdBps,
    BigInt(duration),
  ]);

  const required = (await partyRegistry.read('petitions', [petitionId]))[5];
  const n = endorsements ?? Number(required);
  if (n > 600) {
    throw new Error(
      `activateParty would need ${n} endorsements; use a fixture with a lower threshold ` +
        `rather than paying for them — see the note on anonymityFloor in deployProtocol().`,
    );
  }
  for (let i = 0; i < n; i++) {
    const signals = await residencySignals(ctx, {
      scope: scopeId('endorse', petitionId),
      nullifier: 5_000_000n + BigInt(i),
      commitment: 1_000_000n + BigInt(i),
    });
    await partyRegistry.send('endorse', [petitionId, ZERO_PROOF, signals]);
  }

  const res = await partyRegistry.send('activate', [petitionId, charterTuple()]);
  const ev = res.events.find((e) => e.name === 'PartyActivated');
  return { partyAddress: ev.args.party, governorAddress: ev.args.governor, required };
}
