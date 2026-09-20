/**
 * Feature-flag registry (ADR-011, VEKTOR "ship dark" rule).
 *
 * Every incomplete capability ships behind a flag that defaults OFF in production. The
 * `removeBy` field is the debt: a flag with no removal target becomes permanent
 * configuration, and permanent configuration is how a codebase becomes untestable.
 *
 * `onChain: true` means the flag is ALSO enforced by a FeatureFlags contract read by the
 * modules — a frontend-only flag would leave the risky on-chain path live.
 */
export const FLAGS = Object.freeze({
  PETITIONS: {
    key: 'petitions',
    description: 'Party petition creation, endorsement and threshold activation.',
    defaults: { dev: true, staging: true, prod: true },
    onChain: true,
    removeBy: 'GA — this is core, flag retires at v1.0.0',
  },
  PARTY_GOVERNANCE: {
    key: 'party_governance',
    description: 'Proposals, tiered voting, timelocked execution.',
    defaults: { dev: true, staging: true, prod: true },
    onChain: true,
    removeBy: 'GA — retires at v1.0.0',
  },
  ELECTIONS: {
    key: 'elections',
    description: 'Region+office scoped candidate nomination and internal election.',
    defaults: { dev: true, staging: true, prod: false },
    onChain: true,
    removeBy: 'Phase 3 rollout complete',
  },
  RECALL: {
    key: 'recall',
    description: 'Mid-term recall of an elected representative.',
    defaults: { dev: true, staging: true, prod: false },
    onChain: true,
    removeBy: 'Phase 3 rollout complete',
  },
  MACI_VOTING: {
    key: 'maci_voting',
    description:
      'Receipt-free voting via MACI with a threshold coordinator committee (ADR-006). ' +
      'Until this is on, a vote is cast through conventional authentication: it is NOT ' +
      'anonymous, NOT receipt-free and NOT coercion-resistant, and the platform database ' +
      'CAN see vote direction. The UI must state this plainly before the ballot (FR-131). ' +
      'The normative wording is FR-131 (Doc 02 §4.45), not this string.',
    defaults: { dev: true, staging: false, prod: false },
    onChain: true,
    removeBy: 'Phase 3 — becomes mandatory, flag retires',
  },
  PRIVATE_ENDORSEMENT: {
    key: 'private_endorsement',
    description: 'Charter option: fully private petition endorsement for high-risk jurisdictions.',
    defaults: { dev: true, staging: false, prod: false },
    onChain: true,
    removeBy: 'Phase 4',
  },
  DELEGATION: {
    key: 'delegation',
    description: 'One-hop, revocable, capped vote delegation (ADR-007 §5). Off by default.',
    defaults: { dev: true, staging: false, prod: false },
    onChain: true,
    removeBy: 'Phase 4 — pending capture analysis',
  },
  TREASURY: {
    key: 'treasury',
    description: 'Capped, fully transparent party treasury with member-voted disbursement.',
    defaults: { dev: true, staging: true, prod: false },
    onChain: true,
    removeBy: 'Phase 3 — pending per-jurisdiction legal review (ADR-013)',
  },
  FORK: {
    key: 'fork',
    description: 'Party fork with inherited charter/manifesto lineage (ADR-008 §5).',
    defaults: { dev: true, staging: true, prod: false },
    onChain: true,
    removeBy: 'Phase 3',
  },
  ENROLMENT_UI: {
    key: 'enrolment_ui',
    description:
      'The /verify enrolment screen. OFF above dev: the screen describes the verify-and-discard ' +
      'enrolment design (FR-132 §(b), DES-100, ADR-003) as current fact, and enrolment is ' +
      'unbuilt (StubIdDocumentChecker.IS_INSECURE_MOCK() = true, Doc 06 §7) and blocked on ' +
      'CON-015. With the flag off the route renders the honesty placeholder fixed at ' +
      'DECISIONS-2026-09-08-VERIFY-PAGE.md §5.3. The normative wording is that record, not ' +
      'this string.',
    defaults: { dev: true, staging: false, prod: false },
    onChain: false,
    removeBy: 'Enrolment sprint — retires when FR-132 §(b) ships behind a real ' +
      'IEligibilityVerifier backing; blocked on CON-015',
  },
  L1_FORCE_INCLUSION: {
    key: 'l1_force_inclusion',
    description: 'Censorship fallback: submit citizen actions via L1 force-inclusion (ADR-001).',
    defaults: { dev: true, staging: true, prod: true },
    onChain: false,
    removeBy: 'never — permanent escape hatch',
  },
  SPONSORED_GAS: {
    key: 'sponsored_gas',
    description: 'ERC-4337 paymaster sponsorship, rate-limited per personhood nullifier.',
    defaults: { dev: true, staging: true, prod: true },
    onChain: false,
    removeBy: 'never — exhaustion queues the action at zero cost; it never charges or denies',
  },
});

export const ENVIRONMENTS = Object.freeze(['dev', 'staging', 'prod']);

export function isEnabled(flagKey, env, overrides = {}) {
  if (!ENVIRONMENTS.includes(env)) throw new Error(`unknown environment: ${env}`);
  if (Object.prototype.hasOwnProperty.call(overrides, flagKey)) return Boolean(overrides[flagKey]);
  const flag = Object.values(FLAGS).find((f) => f.key === flagKey);
  if (!flag) throw new Error(`unknown feature flag: ${flagKey}`);
  return flag.defaults[env];
}

/** Flags with no removal target are debt; CI surfaces this list in Doc 06. */
export function permanentFlags() {
  return Object.values(FLAGS).filter((f) => !f.removeBy);
}
