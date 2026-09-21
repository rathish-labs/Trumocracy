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

// ─── ADR-024 seams — DES-095 / DES-096 / DES-097 ────────────────────────────────
// IEligibilityVerifier and IBallotService: stable interfaces allowing the v2 ZK
// swap behind the seam without changing any caller above it. Doc 03 §10.13.2–10.13.3.
export {
  COUNTING_ACTION,
  NotACountingAction,
  StubPhoneVerifier,
  StubIdDocumentChecker,
  ConventionalEligibilityVerifier,
} from './eligibility.js';

export {
  ConventionalBallotService,
} from './ballot.js';

// ─── Party-creation service seam (DES-097 predecessor) ───────────────────────
// IPartyStore + InMemoryPartyStore + PartyCreationService: mirrors the
// eligibility/ballot seam pattern. Postgres/API backing is later wiring.
export {
  InMemoryPartyStore,
  PartyCreationService,
} from './party-creation.js';

// ─── Proposals & debate (DES-103..DES-106) ───────────────────────────────────
// IProposalStore + InMemoryProposalStore + ProposalService: the v1 authoring,
// competing-proposal, deliberation and lifecycle flow. Runs UP TO the ballot and
// hands off at admitToBallot() — it never casts, stores or counts a vote.
export {
  InMemoryProposalStore,
  ProposalService,
} from './proposals.js';

// ─── Candidate selection (DES-027/028/066/067) ───────────────────────────────
// ICandidateStore + InMemoryCandidateStore + CandidateService: self-nomination,
// the consent crossing, the three-debate gate, feedback scoring and the post-debate
// member vote. Standing is the CANDIDACY counting action (Doc 03 §10.13.2(c)); the
// post-debate vote is cast through IBallotService. The service holds neither seam.
export {
  InMemoryCandidateStore,
  CandidateService,
} from './candidates.js';
