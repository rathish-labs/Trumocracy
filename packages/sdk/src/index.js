/**
 * `@trumocracy/sdk` — everything a citizen client needs to act, and nothing that would let
 * it act on the citizen's behalf.
 *
 * Layering (ADR-011, enforced by `tools/dep-guard`):
 *   `@trumocracy/protocol` → **this package** → `@trumocracy/web`.
 * The protocol package holds the rules; this package holds the chain, the proving and the
 * transport; the app holds nothing but presentation. A rule implemented twice is a rule
 * that will eventually disagree with itself, so `predict.js` re-exports rather than
 * re-implements.
 */
export * from './errors.js';
export * from './field.js';
export * from './constants.js';
export * from './identity.js';
export * from './tree.js';
export * from './proofs.js';
export * from './transport.js';
export * from './readmodel.js';
export * from './predict.js';
export * from './client.js';
export {
  partyRegistryAbi,
  partyAbi,
  governorAbi,
  personhoodRegistryAbi,
  regionRegistryAbi,
  verifierRegistryAbi,
  featureFlagsAbi,
  mockVerifierAbi,
  optimismPortalAbi,
} from './abi.js';
