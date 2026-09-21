/**
 * @trumocracy/protocol — pure, dependency-free reference implementation of the rules.
 *
 * Nothing in this package may import a chain client, a network library or a UI framework
 * (enforced by tools/dep-guard). It exists so that (a) the rules can be tested in
 * milliseconds, and (b) the deployed contracts can be differentially tested against an
 * independent implementation of the same specification.
 */
export * from './constants.js';
export * from './governance.js';
export * from './regions.js';
export * from './flags.js';
export * from './party.js';
export * from './proposals.js';
export * from './candidates.js';
// proposals.js exports: PARTICIPATION_TIER, DEFAULT_PARTICIPATION_TIER, canAuthorProposal,
// votingWeightForTier, PROPOSAL_STAGE, STAGE_ORDER, DELIBERATIVE_STAGES,
// COMPETING_ENTRY_STAGES, ProposalError, stageIndex, isDeliberativeStage,
// acceptsCompetingProposal, nextStage, assertStageTransition, PROPOSAL,
// validateProposalDraft, normalizeQuestionKey — FR-024/079/080/090/091.
// party.js new exports: validateDraft, applyCharterDefaults, charterFingerprint,
// normalizeCollisionKey, NON_VIOLENCE_CLAUSE, PROVISIONAL_MEMBER_CAP, EMBLEM,
// REPETITION_COOLDOWN_SECONDS — all additive, picked up via '*' above.
