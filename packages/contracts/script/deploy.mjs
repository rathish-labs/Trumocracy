#!/usr/bin/env node
/**
 * Deployment plan and safety gate.
 *
 * Two jobs:
 *   1. Emit the deterministic deployment order (consumed by Doc 10, the deployment runbook).
 *   2. Refuse to promote an environment whose verifier registry is still wired to a
 *      development mock.
 *
 * The second is the important one. A `MockVerifier` accepts every proof, so a deployment that
 * reaches production with one registered has *no* privacy and *no* Sybil resistance while
 * looking, from the outside, exactly like a working system. That is the worst failure mode
 * available to this codebase: not an outage, but a silent, total, invisible loss of every
 * guarantee the product makes. It is worth a hard gate.
 */
import { keccak256, toHex } from 'viem';

/** Deterministic order. Later entries depend on earlier ones. */
export const DEPLOY_ORDER = Object.freeze([
  { name: 'PoseidonT3', note: 'library at a deterministic address; linked by every Merkle tree' },
  { name: 'FeatureFlags', args: ['timelock', 'emergencyDisabler', 'initiallyEnabled[]'] },
  { name: 'VerifierRegistry', args: ['timelock'] },
  { name: 'PersonhoodRegistry', args: ['timelock', 'VerifierRegistry'] },
  { name: 'RegionRegistry', args: ['timelock', 'minAnonymitySet (production: 1000)'] },
  { name: 'PartyDeployer', args: [] },
  { name: 'GovernorDeployer', args: [] },
  {
    name: 'PartyRegistry',
    args: [
      'PersonhoodRegistry',
      'RegionRegistry',
      'VerifierRegistry',
      'FeatureFlags',
      'PartyDeployer',
      'GovernorDeployer',
      'absoluteFloorEndorsements (production: 500)',
    ],
  },
]);

/** Post-deployment wiring, in order. Skipping any of these leaves the system non-functional. */
export const WIRING_STEPS = Object.freeze([
  'PersonhoodRegistry.setSpenderAuthoriser(PartyRegistry)  — only registry-deployed modules may burn nullifiers',
  'VerifierRegistry.register(personhood_enrol,  verifier, zkeyHash, ceremonyURI)',
  'VerifierRegistry.register(residency_member,  verifier, zkeyHash, ceremonyURI)',
  'VerifierRegistry.register(tenure_member,     verifier, zkeyHash, ceremonyURI)',
  'PersonhoodRegistry.registerIssuer(...) ×N    — ≥2 per region, ≥1 non-state (ADR-003)',
  'RegionRegistry.createRegion(...) top-down    — country before state before district',
  'RegionRegistry.registerAttester / authoriseAttester',
  'RegionRegistry.submitPopulation ×≥5 → proposePopulation → wait 7 days → activatePopulation',
]);

export const CIRCUITS = Object.freeze(['personhood_enrol', 'residency_member', 'tenure_member']);

export const ENVIRONMENTS = Object.freeze({
  local: { mocksAllowed: true },
  ci: { mocksAllowed: true },
  devnet: { mocksAllowed: true },
  testnet: { mocksAllowed: false },
  staging: { mocksAllowed: false },
  production: { mocksAllowed: false },
});

export class UnsafeDeploymentError extends Error {
  constructor(message, findings) {
    super(message);
    this.name = 'UnsafeDeploymentError';
    this.findings = findings;
  }
}

/**
 * Assert an environment is safe to promote.
 *
 * @param {string} environment                 one of ENVIRONMENTS
 * @param {(circuitId: string) => Promise<{verifier: string, zkeyHash: string, ceremonyURI: string}>} readCircuit
 * @param {(address: string) => Promise<boolean>} isInsecureMock  probes `IS_INSECURE_MOCK()`
 * @param {{anonymityFloorIsProductionGrade?: boolean, endorsementFloorIsProductionGrade?: boolean}} [floors]
 *        read from `RegionRegistry` and `PartyRegistry`. Omitted values are treated as NOT
 *        production-grade, because an unchecked floor must never pass by default.
 */
export async function assertSafeToPromote(environment, readCircuit, isInsecureMock, floors = {}) {
  const env = ENVIRONMENTS[environment];
  if (!env) throw new UnsafeDeploymentError(`unknown environment: ${environment}`, []);

  const findings = [];

  for (const circuit of CIRCUITS) {
    const id = keccak256(toHex(circuit));
    let entry;
    try {
      entry = await readCircuit(id);
    } catch {
      findings.push({ circuit, severity: 'critical', issue: 'no verifier registered' });
      continue;
    }

    if (!env.mocksAllowed && (await isInsecureMock(entry.verifier))) {
      findings.push({
        circuit,
        severity: 'critical',
        issue: `verifier ${entry.verifier} is a development mock — it accepts every proof`,
      });
    }
    if (!entry.ceremonyURI || entry.ceremonyURI.length === 0) {
      findings.push({ circuit, severity: 'high', issue: 'no published ceremony URI' });
    }
    if (!entry.zkeyHash || /^0x0*$/.test(entry.zkeyHash)) {
      findings.push({
        circuit,
        severity: 'critical',
        issue: 'no zkeyHash — clients cannot detect a substituted proving key',
      });
    }
  }

  // The policy floors (NFR-002 anonymity set, and the endorsement floor) are deployment
  // parameters so the test suite can finish in seconds instead of timing out. That
  // convenience must never reach a real network: a deployment with k=12 publishes actions
  // into an anonymity set of twelve people, which identifies the actor by elimination while
  // looking, from the outside, exactly like a working private system.
  if (!env.mocksAllowed) {
    if (floors.anonymityFloorIsProductionGrade !== true) {
      findings.push({
        circuit: '—',
        severity: 'critical',
        issue: `RegionRegistry.minAnonymitySet is below PRODUCTION_MIN_ANONYMITY_SET (NFR-002)`,
      });
    }
    if (floors.endorsementFloorIsProductionGrade !== true) {
      findings.push({
        circuit: '—',
        severity: 'critical',
        issue: 'PartyRegistry.absoluteFloorEndorsements is below PRODUCTION_ABSOLUTE_FLOOR_ENDORSEMENTS',
      });
    }
  }

  if (findings.length > 0) {
    throw new UnsafeDeploymentError(
      `${environment} is NOT safe to promote: ${findings.length} finding(s)`,
      findings,
    );
  }
  return { environment, safe: true, circuits: CIRCUITS.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Deployment order:\n');
  DEPLOY_ORDER.forEach((s, i) => {
    console.log(`  ${String(i + 1).padStart(2)}. ${s.name}${s.args?.length ? `(${s.args.join(', ')})` : ''}`);
    if (s.note) console.log(`      ${s.note}`);
  });
  console.log('\nPost-deployment wiring:\n');
  WIRING_STEPS.forEach((s, i) => console.log(`  ${String(i + 1).padStart(2)}. ${s}`));
  console.log('\nPromotion gate: testnet, staging and production refuse any registered verifier');
  console.log('exposing IS_INSECURE_MOCK(), any missing zkeyHash, any missing ceremony URI,');
  console.log('and any deployment whose anonymity or endorsement floor is below production.');
}
