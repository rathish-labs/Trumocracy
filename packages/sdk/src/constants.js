/**
 * On-chain identifiers the client needs, derived the same way the contracts derive them.
 *
 * These are computed, not transcribed, so a typo cannot survive: `CIRCUIT.RESIDENCY` is
 * literally `keccak256("residency_member")`, which is literally what
 * `PartyRegistry.CIRCUIT_RESIDENCY` is.
 */
import { keccak256, toHex } from 'viem';
import { FLAGS } from '@trumocracy/protocol';

/** Circuit ids (ADR-005 §"The circuit set"). */
export const CIRCUIT = Object.freeze({
  /** `PersonhoodRegistry.CIRCUIT_ENROL` */
  PERSONHOOD_ENROL: keccak256(toHex('personhood_enrol')),
  /** `PartyRegistry.CIRCUIT_RESIDENCY` / `Party.CIRCUIT_RESIDENCY` */
  RESIDENCY_MEMBER: keccak256(toHex('residency_member')),
  /** `Governor.CIRCUIT_TENURE` */
  TENURE_MEMBER: keccak256(toHex('tenure_member')),
  /** Not yet wired into a contract entrypoint; reserved by ADR-005. */
  PARTY_MEMBER: keccak256(toHex('party_member')),
  /** MACI, Phase 3 (ADR-006). Dark until `maci_voting` is on. */
  VOTE_MESSAGE: keccak256(toHex('vote_message')),
  TALLY: keccak256(toHex('tally')),
});

/** Human-readable circuit name → id, for error messages and artifact lookup. */
export const CIRCUIT_NAME = Object.freeze(
  Object.fromEntries(Object.entries(CIRCUIT).map(([k, v]) => [v, k.toLowerCase()])),
);

/**
 * Feature-flag ids as the `FeatureFlags` contract keys them: `keccak256(flagKey)`.
 * Sourced from `@trumocracy/protocol`'s registry so the client cannot drift from it.
 */
export const FLAG_ID = Object.freeze(
  Object.fromEntries(Object.values(FLAGS).map((f) => [f.key, keccak256(toHex(f.key))])),
);

/** `Governor.Choice` — the enum ordering is load-bearing in `vote()`. */
export const CHOICE = Object.freeze({ AGAINST: 0, FOR: 1, ABSTAIN: 2 });

/** `Governor.State`. */
export const PROPOSAL_STATE_ENUM = Object.freeze([
  'discussion',
  'voting',
  'tallying',
  'defeated',
  'timelocked',
  'executed',
  'cancelled',
]);

/** `PartyRegistry.PetitionState`. */
export const PETITION_STATE_ENUM = Object.freeze(['gathering', 'activated', 'expired']);

/** The all-zero Groth16 proof. Only an insecure mock verifier accepts it. */
export const ZERO_PROOF = Object.freeze([0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n]);

/** Public-signal counts the contracts assert on. A mismatch reverts with `InvalidProof`. */
export const SIGNAL_COUNT = Object.freeze({
  [CIRCUIT.PERSONHOOD_ENROL]: 4,
  [CIRCUIT.RESIDENCY_MEMBER]: 6,
  [CIRCUIT.TENURE_MEMBER]: 5,
});
