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
      'Until this is on, votes are anonymous but NOT receipt-free — the UI must say so.',
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
    removeBy: 'never — degrades to self-pay, never to denial',
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
