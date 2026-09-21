/**
 * Candidate selection — v1 (Definition-A) reference rules.
 *
 * Requirements: FR-036 (self-nomination, region-scoped), FR-037/FR-038 (separate informed
 * consent, stated irreversibility), FR-065 (feedback scoring, ADR-015), FR-066 (three
 * debates), FR-067 (post-debate member vote decides; no incumbency, no auto-renomination),
 * FR-081 (code-checked, no human approves/rejects/ranks), FR-085 (consent irrevocable for
 * the term; withdrawal before the nomination window closes destroys disclosure data).
 * Design: DES-027, DES-028, DES-066, DES-067. State model: Doc 03 §5.6 CANDIDACY.
 *
 * ─── What this module deliberately does NOT do ───────────────────────────────
 * It holds no state, calls no verifier and counts no vote. It is the set of rules the
 * SDK's CandidateService applies and the contracts will implement in Phase 3, kept here
 * so both can be differentially tested against one specification (Doc 06 §2 rule 4).
 *
 * ─── The two fairness properties, stated as absences ─────────────────────────
 *  - There is no `renominate`, no `incumbent` input and no path that reaches PUBLISHED
 *    without passing DEBATES_COMPLETE and VOTE_OPEN. Incumbency confers nothing because
 *    nothing here can read it (FR-067, BR-013).
 *  - There is no `approve`, `reject` or `rank`. The only thing that decides a candidacy is
 *    the member vote's tally (FR-081, BR-016).
 */
import { isWithin } from './regions.js';

const DAY = 86_400;

export class CandidateError extends Error {
  constructor(code, message, extra = {}) {
    super(message ?? code);
    this.code = code;
    Object.assign(this, extra);
  }
}

// ─── Candidacy lifecycle (Doc 03 §5.6) ─────────────────────────────────────────

export const CANDIDACY_STAGE = Object.freeze({
  /** Self-nominated. Disclosure data is confidential-class; consent not yet recorded. */
  NOMINATED: 'NOMINATED',
  /** FR-037 consent recorded as a separate event. May proceed to debates. */
  CONSENTED: 'CONSENTED',
  /** The three debates are scheduled. */
  DEBATING: 'DEBATING',
  /** All three topics debated with attendance attested (FR-066). */
  DEBATES_COMPLETE: 'DEBATES_COMPLETE',
  /** The post-debate member vote is open (FR-067). */
  VOTE_OPEN: 'VOTE_OPEN',
  /** Net-positive member vote: the candidate is on the election ballot. */
  PUBLISHED: 'PUBLISHED',
  /** Vote closed without a net-positive result. Not on the ballot; not deleted. */
  NOT_ADVANCED: 'NOT_ADVANCED',
  /** Withdrawn by the candidate before the ballot locked (FR-036). */
  WITHDRAWN: 'WITHDRAWN',
});

/**
 * Allowed transitions. Every path to PUBLISHED runs through DEBATES_COMPLETE and VOTE_OPEN —
 * that shape IS the FR-067 guarantee, asserted by test as the absence of any other edge.
 */
const TRANSITIONS = Object.freeze({
  [CANDIDACY_STAGE.NOMINATED]: new Set([CANDIDACY_STAGE.CONSENTED, CANDIDACY_STAGE.WITHDRAWN]),
  [CANDIDACY_STAGE.CONSENTED]: new Set([CANDIDACY_STAGE.DEBATING, CANDIDACY_STAGE.WITHDRAWN]),
  [CANDIDACY_STAGE.DEBATING]: new Set([CANDIDACY_STAGE.DEBATES_COMPLETE, CANDIDACY_STAGE.WITHDRAWN]),
  [CANDIDACY_STAGE.DEBATES_COMPLETE]: new Set([CANDIDACY_STAGE.VOTE_OPEN, CANDIDACY_STAGE.WITHDRAWN]),
  [CANDIDACY_STAGE.VOTE_OPEN]: new Set([CANDIDACY_STAGE.PUBLISHED, CANDIDACY_STAGE.NOT_ADVANCED, CANDIDACY_STAGE.WITHDRAWN]),
  [CANDIDACY_STAGE.PUBLISHED]: new Set([]),
  [CANDIDACY_STAGE.NOT_ADVANCED]: new Set([]),
  [CANDIDACY_STAGE.WITHDRAWN]: new Set([]),
});

export function assertCandidacyTransition(from, to) {
  const allowed = TRANSITIONS[from];
  if (!allowed) throw new CandidateError('UNKNOWN_STAGE', `unknown candidacy stage: ${from}`);
  if (!allowed.has(to)) {
    throw new CandidateError('ILLEGAL_TRANSITION', `a candidacy cannot move from ${from} to ${to}`, { from, to });
  }
  return { valid: true };
}

// ─── FR-066 debates ────────────────────────────────────────────────────────────

/** The three topic areas FR-066 names, one debate each. */
export const DEBATE_TOPIC = Object.freeze({
  LOCAL_CONDITIONS: 'LOCAL_CONDITIONS',
  LOCAL_PROBLEMS: 'LOCAL_PROBLEMS',
  WORK_REQUIRED: 'WORK_REQUIRED',
});

export const REQUIRED_DEBATE_TOPICS = Object.freeze([
  DEBATE_TOPIC.LOCAL_CONDITIONS,
  DEBATE_TOPIC.LOCAL_PROBLEMS,
  DEBATE_TOPIC.WORK_REQUIRED,
]);

export const DEBATES_PER_CANDIDATE = REQUIRED_DEBATE_TOPICS.length;

/**
 * Have all three debates been completed for one candidate?
 *
 * "Completed" means: one debate per required topic, each with attendance attested. A
 * recorded absence is a completed debate that the candidate did not attend — it counts
 * against completeness, and it stays on the record (FR-066 last clause).
 *
 * @param {{topic: string, attended: boolean|null}[]} debates
 * @returns {{complete: boolean, missingTopics: string[], absences: string[]}}
 */
export function debatesComplete(debates) {
  const byTopic = new Map();
  for (const d of debates ?? []) byTopic.set(d.topic, d);
  const missingTopics = REQUIRED_DEBATE_TOPICS.filter((t) => !byTopic.has(t) || byTopic.get(t).attended === null || byTopic.get(t).attended === undefined);
  const absences = REQUIRED_DEBATE_TOPICS.filter((t) => byTopic.get(t)?.attended === false);
  return { complete: missingTopics.length === 0 && absences.length === 0, missingTopics, absences };
}

// ─── FR-065 feedback scoring (ADR-015) ─────────────────────────────────────────

export const FEEDBACK = Object.freeze({ UPVOTE: 'UPVOTE', DOWNVOTE: 'DOWNVOTE' });

/**
 * The deliberate asymmetry (ADR-015): an upvote is worth +3, a downvote −1, so that a
 * downvoter is protected from retaliation by being one of many small signals rather
 * than a decisive one. The rationale is the ADR's, not this module's.
 */
export const FEEDBACK_SCORE = Object.freeze({
  [FEEDBACK.UPVOTE]: 3,
  [FEEDBACK.DOWNVOTE]: -1,
});

/**
 * @param {Record<string, number>} tally  — counts per FEEDBACK value
 * @returns {number} 3·upvotes − downvotes
 */
export function feedbackScore(tally) {
  const up = tally?.[FEEDBACK.UPVOTE] ?? 0;
  const down = tally?.[FEEDBACK.DOWNVOTE] ?? 0;
  return up * FEEDBACK_SCORE[FEEDBACK.UPVOTE] + down * FEEDBACK_SCORE[FEEDBACK.DOWNVOTE];
}

// ─── FR-067 post-debate member vote ────────────────────────────────────────────

export const POST_DEBATE_CHOICE = Object.freeze({
  SUITABLE: 'SUITABLE',
  NOT_SUITABLE: 'NOT_SUITABLE',
});

/**
 * "Only candidates who receive a net positive member-vote result advance" (FR-067).
 * Strictly more SUITABLE than NOT_SUITABLE; a tie does not advance.
 *
 * @param {Record<string, number>} tally  — counts per POST_DEBATE_CHOICE value
 */
export function isNetPositive(tally) {
  const yes = tally?.[POST_DEBATE_CHOICE.SUITABLE] ?? 0;
  const no = tally?.[POST_DEBATE_CHOICE.NOT_SUITABLE] ?? 0;
  return yes > no;
}

// ─── FR-036 region scope ───────────────────────────────────────────────────────

/**
 * A member may stand only "for an office whose region equals or contains the member's
 * active residency scope" (FR-036). Both are region paths (ADR-004).
 *
 * @param {{residencyRegion: string, officeRegion: string}} args
 */
export function inScopeForOffice({ residencyRegion, officeRegion }) {
  return isWithin(residencyRegion, officeRegion);
}

/**
 * FR-036 minimum nomination endorsements from matured members resident in the region.
 *
 * APPROVER RATIFICATION REQUIRED (Flag: NOMINATION-MIN-01). No published figure exists in
 * Doc 02/03 (grepped: "nomination endorsement", "minimum number", FR-036, DES-027). A party
 * charter MAY raise it (`charter.nominationEndorsementsMin`); it MAY NOT lower it below
 * this floor, on the ADR-008 ratchet-up-only principle.
 */
export const NOMINATION_ENDORSEMENTS_MIN = 5;

/**
 * FR-023 maturation period applied to nominating, endorsing a nomination, feedback and the
 * post-debate vote.
 *
 * APPROVER RATIFICATION REQUIRED (Flag: MATURATION-01). Doc 02 OI-08 records the maturation
 * period as "published but unset". TIER_RULES sets tenure per DECISION tier (14–180 days),
 * not for nomination. Engineer-chosen at 30 days — FR-068's "at least one month of
 * continuous membership" is the nearest published figure. Needs explicit ratification.
 */
export const NOMINATION_MATURATION_SECONDS = 30 * DAY;

/**
 * @param {{joinedAt: number|null|undefined, now: number, maturationSeconds?: number}} args
 * @returns {{matured: boolean, tenure: number, required: number}}
 */
export function isMatured({ joinedAt, now, maturationSeconds = NOMINATION_MATURATION_SECONDS }) {
  if (joinedAt === null || joinedAt === undefined) return { matured: false, tenure: 0, required: maturationSeconds };
  const tenure = now - joinedAt;
  return { matured: tenure >= maturationSeconds, tenure, required: maturationSeconds };
}

// ─── FR-037 / FR-038 informed consent ──────────────────────────────────────────

/**
 * The three facts FR-038 requires the consent to state and the member to acknowledge —
 * each must be explicitly true in the consent record; a missing key is a missing
 * acknowledgement, not a default.
 */
export const CONSENT_ACKNOWLEDGEMENTS = Object.freeze([
  /** FR-037: real-world identity becomes public. */
  'identityBecomesPublic',
  /** FR-038 / FR-085: irreversible for the candidacy and any resulting term. */
  'irreversibleForTerm',
  /** FR-038: revocable only by withdrawing before the ballot locks. */
  'revocableOnlyByWithdrawalBeforeLock',
]);

/**
 * @param {Record<string, unknown>} acknowledgements
 * @returns {{valid: boolean, missing: string[]}}
 */
export function validateConsent(acknowledgements) {
  const missing = CONSENT_ACKNOWLEDGEMENTS.filter((k) => acknowledgements?.[k] !== true);
  return { valid: missing.length === 0, missing };
}
