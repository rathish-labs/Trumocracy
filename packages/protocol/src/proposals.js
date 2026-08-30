/**
 * Proposal authoring, participation tiers and the deliberative lifecycle — reference rules.
 *
 * This module is the authority on *who may author a proposal*, *how competing proposals
 * relate to one another*, and *what order the deliberative stages run in*. Like party.js,
 * these are application-layer rules with no v1 chain counterpart (ADR-024 §(b): v1 runs no
 * on-chain governance), so they are not differentially tested against a contract. The
 * consensus-layer rules — quorum, tally, tenure, timelock, surge — live in governance.js
 * and ARE mirrored on-chain; nothing here duplicates them.
 *
 * ─── FR-079 / FR-080 — participation tiers ───────────────────────────────────
 *
 * Three tiers per party: Supporter, Worker, Candidate. A member is a Supporter on joining.
 * Worker is SELF-DECLARED with no approval from anyone (FR-080). Tiers are descriptive
 * metadata: they never confer voting weight, standing or precedence (FR-079, FR-021).
 * The one thing tier governs is AUTHORSHIP, and for a reason that is about anonymity
 * rather than merit — see below.
 *
 * ─── FR-024 / FR-090 — who may author, and why ───────────────────────────────
 *
 * Authoring a proposal (original or competing) requires Worker tier or above (OI-14,
 * Rathish, 2026-08-11). The reason is NOT that Supporters are less trusted: authorship is
 * public (FR-090) and a Supporter is anonymous unconditionally (FR-082), so a Supporter
 * cannot author without destroying their own anonymity. Worker tier is self-declared
 * (FR-080), so any member who wishes to author simply declares — this is a disclosure
 * step, never an approval step. Supporters retain full voting rights on every proposal.
 *
 * NOTE — authoring is deliberately NOT an FR-123 counting action. The COUNTING_ACTION
 * allowlist (SDK eligibility.js; DES-100, ratified 2026-08-24) has exactly three members:
 * STRENGTH_CONTRIBUTION, BINDING_VOTE, CANDIDACY. Government-ID verification gates whether
 * an action COUNTS, never whether a person may participate (FR-020, FR-122). An open-tier
 * member may author and deliberate; their BALLOT is what the counting gate governs.
 *
 * ─── FR-090 — competing proposals ────────────────────────────────────────────
 *
 * Any member who may author may post a competing proposal on the same question. Every
 * proposal in a decision window has EQUAL STANDING: same window, same schedule, no
 * ordering privilege, and the first author holds no power over the others. The author
 * never owns the ballot alone — that is the Charter-level fairness property this module
 * exists to enforce.
 *
 * ─── FR-091 — the deliberative lifecycle ─────────────────────────────────────
 *
 * Eight stages in strict sequence. No stage may be skipped, reordered, or vetoed by a
 * human. The review / discussion / debate stages are DELIBERATIVE: they produce records,
 * never outcomes.
 */
import { TIER, TIER_NAMES } from './constants.js';

// ─── FR-079 participation tiers ───────────────────────────────────────────────

/**
 * The three participation tiers (FR-079). Descriptive metadata only — a tier MUST NOT
 * confer voting weight, standing or precedence of any kind (FR-079, FR-021).
 */
export const PARTICIPATION_TIER = Object.freeze({
  SUPPORTER: 'SUPPORTER',
  WORKER: 'WORKER',
  CANDIDATE: 'CANDIDATE',
});

/** Tier assigned automatically on joining a party (FR-079). */
export const DEFAULT_PARTICIPATION_TIER = PARTICIPATION_TIER.SUPPORTER;

/**
 * Tiers permitted to author a proposal (FR-024, FR-090, OI-14).
 * Supporter is excluded because authorship is public and Supporters are anonymous
 * unconditionally — not because a Supporter's proposal would be worth less.
 */
const AUTHORING_TIERS = Object.freeze(
  new Set([PARTICIPATION_TIER.WORKER, PARTICIPATION_TIER.CANDIDATE]),
);

/**
 * May a member at this participation tier author a proposal?
 *
 * @param {string} participationTier
 * @returns {boolean}
 */
export function canAuthorProposal(participationTier) {
  return AUTHORING_TIERS.has(participationTier);
}

/**
 * Tiers do not differ in voting weight — ever. Exposed as a rule (rather than left as an
 * absence) so a test can assert the guarantee directly: every tier weighs exactly 1.
 *
 * @param {string} participationTier
 * @returns {number} always 1
 */
export function votingWeightForTier(participationTier) {
  if (!Object.values(PARTICIPATION_TIER).includes(participationTier)) {
    throw new ProposalError('UNKNOWN_PARTICIPATION_TIER', `unknown tier: ${participationTier}`);
  }
  return 1;
}

// ─── FR-091 deliberative lifecycle ────────────────────────────────────────────

/**
 * The eight published lifecycle stages, in the order FR-091 names them.
 *
 * Relationship to `PROPOSAL_STATE` (governance.js / ADR-008): that enum is the
 * CONSENSUS state of a ballot (draft/discussion/voting/tallying/timelock/executed/
 * defeated/cancelled) and is what the v2 chain implements. This enum is the DELIBERATIVE
 * stage a decision window is in, which is what a citizen sees. They are different
 * taxonomies answering different questions; §10.13.13 of the SDD records the mapping and
 * the open reconciliation question.
 */
export const PROPOSAL_STAGE = Object.freeze({
  PROPOSAL: 'PROPOSAL',
  REVIEW: 'REVIEW',
  DISCUSSION: 'DISCUSSION',
  DEBATE: 'DEBATE',
  VOTE: 'VOTE',
  DECISION: 'DECISION',
  IMPLEMENTATION: 'IMPLEMENTATION',
  MEASUREMENT: 'MEASUREMENT',
});

/** Canonical order. Index position IS the sequence rule (FR-091). */
export const STAGE_ORDER = Object.freeze([
  PROPOSAL_STAGE.PROPOSAL,
  PROPOSAL_STAGE.REVIEW,
  PROPOSAL_STAGE.DISCUSSION,
  PROPOSAL_STAGE.DEBATE,
  PROPOSAL_STAGE.VOTE,
  PROPOSAL_STAGE.DECISION,
  PROPOSAL_STAGE.IMPLEMENTATION,
  PROPOSAL_STAGE.MEASUREMENT,
]);

/**
 * The deliberative stages. FR-091: these "produce records, never outcomes" — a
 * deliberation record can never change what a decision window decides.
 */
export const DELIBERATIVE_STAGES = Object.freeze([
  PROPOSAL_STAGE.REVIEW,
  PROPOSAL_STAGE.DISCUSSION,
  PROPOSAL_STAGE.DEBATE,
]);

/** Stages in which a competing proposal may still join the window (FR-090). */
export const COMPETING_ENTRY_STAGES = Object.freeze([
  PROPOSAL_STAGE.PROPOSAL,
  PROPOSAL_STAGE.REVIEW,
  PROPOSAL_STAGE.DISCUSSION,
]);

export class ProposalError extends Error {
  constructor(code, message, extra = {}) {
    super(message ?? code);
    this.code = code;
    Object.assign(this, extra);
  }
}

/**
 * @param {string} stage
 * @returns {number} position in STAGE_ORDER
 */
export function stageIndex(stage) {
  const i = STAGE_ORDER.indexOf(stage);
  if (i === -1) throw new ProposalError('UNKNOWN_STAGE', `unknown lifecycle stage: ${stage}`);
  return i;
}

/** @param {string} stage @returns {boolean} */
export function isDeliberativeStage(stage) {
  return DELIBERATIVE_STAGES.includes(stage);
}

/** @param {string} stage @returns {boolean} */
export function acceptsCompetingProposal(stage) {
  return COMPETING_ENTRY_STAGES.includes(stage);
}

/**
 * The single stage that follows `stage`, or null at the end of the lifecycle.
 * There is no branching: a lifecycle with a branch is a lifecycle with a veto.
 *
 * @param {string} stage
 * @returns {string|null}
 */
export function nextStage(stage) {
  const i = stageIndex(stage);
  return i === STAGE_ORDER.length - 1 ? null : STAGE_ORDER[i + 1];
}

/**
 * Validate a stage transition (FR-091). The ONLY legal move is exactly one step forward.
 *
 * Refuses, by name: skipping a stage (`STAGE_SKIPPED`), moving backward
 * (`STAGE_REVERSED`), standing still (`STAGE_UNCHANGED`), and advancing past the end
 * (`LIFECYCLE_COMPLETE`). There is deliberately no `force`, `override` or `skipTo`
 * parameter — a stage machine with an escape hatch is not code-enforced, and FR-091's
 * "no stage MAY be skipped, reordered, or human-vetoed" would be decorative.
 *
 * @param {string} from
 * @param {string} to
 * @returns {{valid: true}}
 */
export function assertStageTransition(from, to) {
  const fromIndex = stageIndex(from);
  const toIndex = stageIndex(to);

  if (toIndex === fromIndex) {
    throw new ProposalError('STAGE_UNCHANGED', `already at stage ${from}`, { from, to });
  }
  if (toIndex < fromIndex) {
    throw new ProposalError(
      'STAGE_REVERSED',
      `the lifecycle does not run backwards: ${from} → ${to}`,
      { from, to },
    );
  }
  if (toIndex > fromIndex + 1) {
    throw new ProposalError(
      'STAGE_SKIPPED',
      `stage ${STAGE_ORDER[fromIndex + 1]} cannot be skipped (${from} → ${to})`,
      { from, to, skipped: STAGE_ORDER.slice(fromIndex + 1, toIndex) },
    );
  }
  return { valid: true };
}

// ─── FR-024 / FR-090 proposal content ─────────────────────────────────────────

/** Content bounds. Substance floors, not editorial judgement (cf. FR-011 pillars). */
export const PROPOSAL = Object.freeze({
  QUESTION_MIN_CHARS: 10,
  QUESTION_MAX_CHARS: 300,
  TITLE_MIN_CHARS: 4,
  TITLE_MAX_CHARS: 120,
  BODY_MIN_CHARS: 100,
  BODY_MAX_CHARS: 20_000,
});

/**
 * Validate a proposal draft (FR-024 — no pre-screening beyond published, machine-checkable
 * floors; the platform never judges the CONTENT of a political proposal).
 *
 * Returns the same `{ valid, errors: [{field, code, message}] }` shape party.js uses, so
 * every surface renders deficiencies the same way.
 *
 * @param {object} draft  { question, title, body, tier }
 * @returns {{valid: boolean, errors: Array<{field: string, code: string, message: string}>}}
 */
export function validateProposalDraft(draft) {
  const errors = [];

  const text = (v) => (typeof v === 'string' ? v.trim() : '');

  const bounded = (field, value, min, max, label) => {
    const t = text(value);
    if (t.length === 0) {
      errors.push({ field, code: 'REQUIRED', message: `${label} is required` });
      return;
    }
    if (t.length < min) {
      errors.push({
        field,
        code: 'TOO_SHORT',
        message: `${label} must be at least ${min} characters`,
      });
    } else if (t.length > max) {
      errors.push({
        field,
        code: 'TOO_LONG',
        message: `${label} must be at most ${max} characters`,
      });
    }
  };

  bounded('question', draft?.question, PROPOSAL.QUESTION_MIN_CHARS, PROPOSAL.QUESTION_MAX_CHARS, 'the question this proposal answers');
  bounded('title', draft?.title, PROPOSAL.TITLE_MIN_CHARS, PROPOSAL.TITLE_MAX_CHARS, 'the proposal title');
  bounded('body', draft?.body, PROPOSAL.BODY_MIN_CHARS, PROPOSAL.BODY_MAX_CHARS, 'the proposal text');

  // The tier is DECLARED by the proposer (FR-024). It is validated as a known tier only —
  // whether the declared tier is *high enough* for what the proposal does is a
  // consensus-layer question (requiredTier / SEC-C06), not an authoring-time one.
  const tier = draft?.tier;
  if (tier === undefined || tier === null) {
    errors.push({ field: 'tier', code: 'REQUIRED', message: 'a proposal must declare its tier' });
  } else if (!Object.values(TIER).includes(tier)) {
    errors.push({
      field: 'tier',
      code: 'UNKNOWN_TIER',
      message: `unknown proposal tier: ${tier}; expected one of ${TIER_NAMES.join(', ')}`,
    });
  }

  return { valid: errors.length === 0, errors };
}

/**
 * A stable key grouping proposals that answer the same question (FR-090).
 *
 * Normalisation mirrors normalizeCollisionKey in party.js: case-folded, whitespace
 * collapsed. Two members who phrase the same question with different capitalisation are
 * answering one question, and their proposals belong in one decision window.
 *
 * @param {string} question
 * @returns {string}
 */
export function normalizeQuestionKey(question) {
  return String(question ?? '')
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}
