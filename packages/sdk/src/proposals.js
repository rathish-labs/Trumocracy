/**
 * Proposals & debate — v1 service layer.
 *
 * Implements the authoring, competing-proposal and deliberative-lifecycle flow on top of
 * the reference rules in `@trumocracy/protocol` (proposals.js). Consensus-layer rules —
 * quorum, tally, tenure, timelock, surge — are NOT reimplemented here; they live in
 * governance.js and, in v2, on chain.
 *
 * ─── What this module deliberately does NOT do ───────────────────────────────
 *
 * It does not cast, store, count or tally a vote. The lifecycle runs UP TO the point a
 * ballot opens and hands off at `admitToBallot()`, which asks the injected
 * IEligibilityVerifier whether this member's ballot would COUNT and then stops. The ballot
 * itself is IBallotService's job (DES-096) and the private-ballot mechanism is v2 (MACI).
 * A service that both decided who may vote and counted the votes would be the single point
 * of trust this architecture exists to avoid.
 *
 * ─── FR-090 — the competing-proposal fairness property ───────────────────────
 *
 * Proposals answering the same question share a DECISION WINDOW. Every proposal in a
 * window has equal standing: one stage, one schedule, no ordering privilege, and — the
 * part that matters — the first author holds NO power over the others. There is no
 * withdraw-someone-else's-proposal, no merge, no accept-as-amendment, no priority flag.
 * The author never owns the ballot alone. That absence is asserted by test, not assumed.
 *
 * ─── FR-091 — the lifecycle ──────────────────────────────────────────────────
 *
 * Eight published stages advanced one at a time by `advanceStage()`. It takes no `skipTo`,
 * no `force`, no `reason`. Review/discussion/debate produce deliberation RECORDS which can
 * never change an outcome.
 *
 * ─── FR-092 — the decision trail ─────────────────────────────────────────────
 *
 * Every event — window opened, proposal filed, deliberation posted, stage advanced,
 * ballot admission — appends to a per-window log that is never mutated and never deleted.
 * `decisionTrail()` returns copies, so a caller cannot reach in and rewrite history.
 *
 * ─── Counting-tier placement (FR-020 / FR-122 / FR-123) ──────────────────────
 *
 * Authoring and deliberating are NOT counting actions and MUST NOT call the verifier: the
 * COUNTING_ACTION allowlist (DES-100) has exactly three members and authoring is not among
 * them. Authoring is gated on Worker-tier self-declaration (FR-080) — a disclosure step
 * about anonymity, never an approval step. Only `admitToBallot()` reaches the seam, with
 * scope BINDING_VOTE (Doc 03 §10.13.2(b)).
 */
import {
  PARTICIPATION_TIER,
  PROPOSAL_STAGE,
  canAuthorProposal,
  validateProposalDraft,
  normalizeQuestionKey,
  acceptsCompetingProposal,
  isDeliberativeStage,
  assertStageTransition,
  nextStage,
  PARTY_STATE,
} from '@trumocracy/protocol';
import { COUNTING_ACTION } from './eligibility.js';

// ─── Typedefs ──────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} IProposalStore
 * Injectable persistence seam for the proposal service.
 * Production backing: Postgres (DES-097(b) pattern). Dev/demo: InMemoryProposalStore.
 *
 * @property {function(): boolean} IS_INSECURE_MOCK
 * @property {function(object): string} saveWindow  — returns windowId
 * @property {function(string): object|null} findWindowById
 * @property {function(string, string): object|null} findWindowByQuestion  — (partyId, questionKey)
 * @property {function(string): object[]} findWindowsByParty
 * @property {function(string, object): object} updateWindowStage  — (windowId, {stage, at})
 * @property {function(object): string} saveProposal  — returns proposalId
 * @property {function(string): object|null} findProposalById
 * @property {function(string): object[]} findProposalsByWindow  — submission order
 * @property {function(object): string} appendDeliberation  — returns deliberationId
 * @property {function(string): object[]} findDeliberationsByWindow
 * @property {function(object): void} appendTrailEvent  — append-only; never updated
 * @property {function(string): object[]} getTrail  — (windowId) → copies, in order
 * @property {function(string, string): boolean} isAdmittedToBallot  — (windowId, member)
 * @property {function(string, string): void} recordBallotAdmission  — (windowId, member)
 */

let __seq = 0;
const nextId = (prefix) => `${prefix}_${(++__seq).toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

/**
 * In-memory proposal store — demo/dev only.
 *
 * IS_INSECURE_MOCK() returns true: this is not production persistence, and the CI
 * promotion gate refuses to promote any environment containing it.
 *
 * @implements {IProposalStore}
 */
export class InMemoryProposalStore {
  constructor() {
    this._windows = new Map();
    this._proposals = new Map();
    this._deliberations = [];
    this._trail = [];
    this._admissions = new Set();
  }

  /** @returns {true} in-memory persistence is never production. */
  IS_INSECURE_MOCK() {
    return true;
  }

  saveWindow(window) {
    const id = nextId('win');
    this._windows.set(id, { ...window, id });
    return id;
  }

  findWindowById(id) {
    const w = this._windows.get(id);
    return w ? { ...w } : null;
  }

  findWindowByQuestion(partyId, questionKey) {
    for (const w of this._windows.values()) {
      if (w.partyId === partyId && w.questionKey === questionKey) return { ...w };
    }
    return null;
  }

  findWindowsByParty(partyId) {
    return [...this._windows.values()].filter((w) => w.partyId === partyId).map((w) => ({ ...w }));
  }

  updateWindowStage(windowId, { stage, at }) {
    const w = this._windows.get(windowId);
    if (!w) throw new Error(`window ${windowId} not found`);
    const updated = { ...w, stage, stageChangedAt: at };
    this._windows.set(windowId, updated);
    return { ...updated };
  }

  saveProposal(proposal) {
    const id = nextId('prop');
    this._proposals.set(id, { ...proposal, id });
    return id;
  }

  findProposalById(id) {
    const p = this._proposals.get(id);
    return p ? { ...p } : null;
  }

  findProposalsByWindow(windowId) {
    return [...this._proposals.values()]
      .filter((p) => p.windowId === windowId)
      .sort((a, b) => a.seq - b.seq)
      .map((p) => ({ ...p }));
  }

  appendDeliberation(record) {
    const id = nextId('delib');
    this._deliberations.push({ ...record, id, seq: this._deliberations.length });
    return id;
  }

  findDeliberationsByWindow(windowId) {
    return this._deliberations.filter((d) => d.windowId === windowId).map((d) => ({ ...d }));
  }

  /** Append-only. There is no update or delete method on the trail, by design (FR-107). */
  appendTrailEvent(event) {
    this._trail.push({ ...event, seq: this._trail.length });
  }

  getTrail(windowId) {
    return this._trail.filter((e) => e.windowId === windowId).map((e) => ({ ...e }));
  }

  isAdmittedToBallot(windowId, memberPseudonym) {
    return this._admissions.has(`${windowId}::${memberPseudonym}`);
  }

  recordBallotAdmission(windowId, memberPseudonym) {
    this._admissions.add(`${windowId}::${memberPseudonym}`);
  }
}

// ─── Service ───────────────────────────────────────────────────────────────────

const fail = (code, message, extra = {}) => {
  const err = new Error(message);
  err.code = code;
  Object.assign(err, extra);
  throw err;
};

/**
 * ProposalService — the v1 proposals & debate flow.
 *
 * @param {IProposalStore} store
 * @param {object} membership  — a PartyCreationService (or any object exposing
 *   `activeMembership(pseudonym)` and `partyStatus(partyId)`); membership is read, never written.
 * @param {function(): number} [clock]  — Unix seconds; MUST be injected in tests.
 */
export class ProposalService {
  constructor(store, membership, clock = () => Math.floor(Date.now() / 1000)) {
    this._store = store;
    this._membership = membership;
    this._clock = clock;
    // Deliberately absent: this._verifier. The service never HOLDS a verifier, so the
    // authoring and deliberation paths structurally cannot reach one (cf. FR-020).
  }

  /** Delegates to the store: the service is only as trustworthy as its backing. */
  IS_INSECURE_MOCK() {
    return this._store.IS_INSECURE_MOCK();
  }

  // ── internals ───────────────────────────────────────────────────────────────

  /** @private Assert the author is a current member of an ACTIVE party who may author. */
  _requireAuthor(partyId, authorPseudonym, participationTier) {
    const status = this._membership.partyStatus(partyId);
    if (!status) fail('NOT_FOUND', `party ${partyId} not found`);
    if (status.state !== PARTY_STATE.ACTIVE) fail('NOT_ACTIVE', `party ${partyId} is not ACTIVE`);

    const active = this._membership.activeMembership(authorPseudonym);
    if (!active || active.partyId !== partyId) {
      fail('NOT_A_MEMBER', 'only a current member of this party may author a proposal');
    }

    if (!canAuthorProposal(participationTier)) {
      fail(
        'AUTHORSHIP_REQUIRES_WORKER_TIER',
        'authoring a proposal requires Worker tier or above, because authorship is public ' +
          'and Supporters are anonymous. Worker tier is self-declared — no one approves it.',
        { currentTier: participationTier, selfDeclarable: true },
      );
    }
    return active;
  }

  /** @private Append to the permanent decision trail (FR-092). */
  _trail(windowId, type, payload) {
    this._store.appendTrailEvent({ windowId, type, at: this._clock(), ...payload });
  }

  // ── FR-024 / FR-090 authoring ───────────────────────────────────────────────

  /**
   * File a proposal (FR-024, FR-090).
   *
   * If no decision window is open on this question, one opens and this becomes its first
   * proposal. If a window is already open and still accepting entries, this proposal joins
   * it as a competing proposal with EQUAL STANDING — the same call, deliberately: there is
   * no separate privileged "original" entry point, because the distinction carries no power.
   *
   * The verifier is NOT called. Authoring is not a counting action (DES-100 allowlist).
   *
   * @param {string} partyId
   * @param {{question: string, title: string, body: string, tier: number}} draft
   * @param {string} authorPseudonym
   * @param {string} participationTier  — PARTICIPATION_TIER value (FR-079/FR-080)
   * @returns {{proposalId: string, windowId: string, isOriginal: boolean, competingCount: number}}
   * @throws {Error} 'NOT_FOUND' | 'NOT_ACTIVE' | 'NOT_A_MEMBER' |
   *   'AUTHORSHIP_REQUIRES_WORKER_TIER' | 'INVALID_DRAFT' | 'WINDOW_CLOSED_TO_ENTRIES'
   */
  fileProposal(partyId, draft, authorPseudonym, participationTier) {
    this._requireAuthor(partyId, authorPseudonym, participationTier);

    const { valid, errors } = validateProposalDraft(draft);
    if (!valid) {
      fail('INVALID_DRAFT', 'the proposal does not meet the published minimums', { errors });
    }

    const now = this._clock();
    const questionKey = normalizeQuestionKey(draft.question);

    let window = this._store.findWindowByQuestion(partyId, questionKey);
    let isOriginal = false;

    if (!window) {
      const windowId = this._store.saveWindow({
        partyId,
        questionKey,
        question: String(draft.question).trim(),
        stage: PROPOSAL_STAGE.PROPOSAL,
        openedAt: now,
        stageChangedAt: now,
      });
      window = this._store.findWindowById(windowId);
      isOriginal = true;
      this._trail(windowId, 'WINDOW_OPENED', {
        question: window.question,
        openedBy: authorPseudonym,
      });
    } else if (!acceptsCompetingProposal(window.stage)) {
      // Admitting a new option after the ballot opens would change what people already
      // voted on. The refusal names the stage so the surface can say why honestly.
      fail(
        'WINDOW_CLOSED_TO_ENTRIES',
        `this question has moved to the ${window.stage} stage; a competing proposal can no ` +
          'longer join it',
        { windowId: window.id, stage: window.stage },
      );
    }

    const existing = this._store.findProposalsByWindow(window.id);
    const proposalId = this._store.saveProposal({
      windowId: window.id,
      partyId,
      title: String(draft.title).trim(),
      body: String(draft.body).trim(),
      tier: draft.tier,
      authorPseudonym, // FR-090: authorship is public.
      authorTier: participationTier,
      filedAt: now,
      seq: existing.length,
      isOriginal,
    });

    this._trail(window.id, 'PROPOSAL_FILED', {
      proposalId,
      author: authorPseudonym,
      title: String(draft.title).trim(),
      tier: draft.tier,
      isOriginal,
    });

    return {
      proposalId,
      windowId: window.id,
      isOriginal,
      competingCount: existing.length + 1,
    };
  }

  /**
   * Every proposal in a decision window, in submission order, with equal standing.
   *
   * `isOriginal` is provenance, not privilege: nothing in this service consults it to
   * decide anything. It is exposed so the trail can say who asked the question first.
   *
   * @param {string} windowId
   * @returns {Array<object>}
   */
  proposalsInWindow(windowId) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);
    return this._store.findProposalsByWindow(windowId);
  }

  /**
   * The open decision windows for a party, with their proposal counts.
   *
   * @param {string} partyId
   * @returns {Array<{windowId: string, question: string, stage: string, proposalCount: number}>}
   */
  decisionWindows(partyId) {
    return this._store.findWindowsByParty(partyId).map((w) => ({
      windowId: w.id,
      question: w.question,
      stage: w.stage,
      openedAt: w.openedAt,
      proposalCount: this._store.findProposalsByWindow(w.id).length,
    }));
  }

  // ── FR-091 deliberation ─────────────────────────────────────────────────────

  /**
   * Post a deliberation record (FR-091).
   *
   * Open to EVERY current member, including open-tier Supporters: discussion is
   * participation, not a counting action, and the verifier is not called. Permitted only
   * in the deliberative stages, because a record posted after the ballot opens would be
   * arguing to a room that has already voted.
   *
   * Deliberation produces a RECORD and never an outcome — nothing in this method can
   * change a stage, a proposal or a result.
   *
   * @param {string} windowId
   * @param {string} memberPseudonym
   * @param {string} text
   * @param {string} [proposalId]  — optional: address one proposal rather than the question
   * @returns {{deliberationId: string, stage: string}}
   * @throws {Error} 'NOT_FOUND' | 'NOT_A_MEMBER' | 'NOT_A_DELIBERATIVE_STAGE' | 'EMPTY_RECORD'
   */
  postDeliberation(windowId, memberPseudonym, text, proposalId = null) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);

    const active = this._membership.activeMembership(memberPseudonym);
    if (!active || active.partyId !== window.partyId) {
      fail('NOT_A_MEMBER', 'only a current member of this party may take part in deliberation');
    }

    if (!isDeliberativeStage(window.stage)) {
      fail(
        'NOT_A_DELIBERATIVE_STAGE',
        `this question is at the ${window.stage} stage; deliberation happens in the review, ` +
          'discussion and debate stages',
        { stage: window.stage },
      );
    }

    const body = String(text ?? '').trim();
    if (body.length === 0) fail('EMPTY_RECORD', 'a deliberation record cannot be empty');

    if (proposalId) {
      const p = this._store.findProposalById(proposalId);
      if (!p || p.windowId !== windowId) {
        fail('NOT_FOUND', `proposal ${proposalId} is not part of this decision window`);
      }
    }

    const at = this._clock();
    const deliberationId = this._store.appendDeliberation({
      windowId,
      proposalId,
      authorPseudonym: memberPseudonym,
      text: body,
      stage: window.stage,
      at,
    });

    this._trail(windowId, 'DELIBERATION_POSTED', {
      deliberationId,
      proposalId,
      author: memberPseudonym,
      stage: window.stage,
    });

    return { deliberationId, stage: window.stage };
  }

  /**
   * The deliberation records for a window, in order. Never edited, never deleted.
   *
   * @param {string} windowId
   * @returns {Array<object>}
   */
  deliberation(windowId) {
    return this._store.findDeliberationsByWindow(windowId);
  }

  // ── FR-091 stage advancement ────────────────────────────────────────────────

  /**
   * Advance the decision window exactly one stage (FR-091).
   *
   * Takes NO target stage, no `force`, no `skipTo`, no `reason` and no actor: the next
   * stage is a function of the current one, so there is nothing for a human to veto and
   * nothing to argue about. Skipping and reordering are refused by the protocol rule
   * (assertStageTransition) rather than by a check that could be forgotten here.
   *
   * @param {string} windowId
   * @returns {{windowId: string, from: string, to: string}}
   * @throws {Error} 'NOT_FOUND' | 'LIFECYCLE_COMPLETE' | 'STAGE_SKIPPED' | 'STAGE_REVERSED'
   */
  advanceStage(windowId) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);

    const from = window.stage;
    const to = nextStage(from);
    if (to === null) {
      fail('LIFECYCLE_COMPLETE', `this question has completed its lifecycle at ${from}`, { stage: from });
    }

    assertStageTransition(from, to); // protocol rule is the authority

    const at = this._clock();
    this._store.updateWindowStage(windowId, { stage: to, at });
    this._trail(windowId, 'STAGE_ADVANCED', { from, to });

    return { windowId, from, to };
  }

  // ── FR-123 counting gate — the ONE seam call site in this service ────────────

  /**
   * Ask whether this member's ballot would COUNT in this decision window (FR-123).
   *
   * This is call site (b) — BINDING_VOTE — of Doc 03 §10.13.2, and the only place this
   * service touches the eligibility seam. The verifier arrives as an explicit per-call
   * parameter: the service never holds one, so authoring and deliberation cannot reach it.
   *
   * It admits to the ballot. It does NOT cast, store or count a vote — that is
   * IBallotService (DES-096), and the private-ballot mechanism is v2.
   *
   * An open-tier member who is refused here keeps every other right: membership,
   * deliberation, and reading the trail are untouched (FR-020, FR-122).
   *
   * @param {string} windowId
   * @param {string} memberPseudonym
   * @param {{verifyEligibility: function}} verifier  — IEligibilityVerifier, per-call
   * @returns {{admitted: true, windowId: string, member: string}}
   * @throws {Error} 'NOT_FOUND' | 'NOT_A_MEMBER' | 'NOT_AT_VOTE_STAGE' |
   *   'NOT_COUNTING_ELIGIBLE' | 'ALREADY_ADMITTED'
   */
  admitToBallot(windowId, memberPseudonym, verifier) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);

    if (window.stage !== PROPOSAL_STAGE.VOTE) {
      fail(
        'NOT_AT_VOTE_STAGE',
        `this question is at the ${window.stage} stage; the ballot is not open`,
        { stage: window.stage },
      );
    }

    const active = this._membership.activeMembership(memberPseudonym);
    if (!active || active.partyId !== window.partyId) {
      fail('NOT_A_MEMBER', 'only a current member of this party may be admitted to its ballot');
    }

    const status = this._membership.partyStatus(window.partyId);

    // FR-123(b) counting gate — Doc 03 §10.13.2(b).
    const result = verifier.verifyEligibility(
      memberPseudonym,
      status.jurisdiction,
      COUNTING_ACTION.BINDING_VOTE,
    );
    if (!result.eligible) {
      fail(
        'NOT_COUNTING_ELIGIBLE',
        `not eligible for the counting tier: ${result.reason ?? 'verification incomplete'}`,
        { reason: result.reason, stillAMember: true, mayStillDeliberate: true },
      );
    }

    if (this._store.isAdmittedToBallot(windowId, memberPseudonym)) {
      fail('ALREADY_ADMITTED', 'already admitted to this ballot');
    }

    this._store.recordBallotAdmission(windowId, memberPseudonym);
    this._trail(windowId, 'BALLOT_ADMISSION', { member: memberPseudonym });

    return { admitted: true, windowId, member: memberPseudonym };
  }

  /**
   * Whether a member may take part in the window WITHOUT verification, and whether their
   * ballot would count — the honest two-figure read (FR-122/FR-123 distinction).
   *
   * Takes NO verifier: a status read must never be able to trigger verification.
   *
   * @param {string} windowId
   * @param {string} memberPseudonym
   * @returns {{member: boolean, mayAuthor: boolean, mayDeliberate: boolean, admittedToBallot: boolean, stage: string}}
   */
  participationStatus(windowId, memberPseudonym, participationTier = PARTICIPATION_TIER.SUPPORTER) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);

    const active = this._membership.activeMembership(memberPseudonym);
    const isMember = Boolean(active && active.partyId === window.partyId);

    return {
      member: isMember,
      mayAuthor: isMember && canAuthorProposal(participationTier),
      mayDeliberate: isMember && isDeliberativeStage(window.stage),
      admittedToBallot: this._store.isAdmittedToBallot(windowId, memberPseudonym),
      stage: window.stage,
    };
  }

  // ── FR-092 decision trail ───────────────────────────────────────────────────

  /**
   * The permanent decision trail for a window (FR-092): every event, in order, as copies.
   *
   * Append-only and never rewritten — a caller mutating what it receives changes nothing.
   * v1 records the trail in the application store; publication to the audit record, which
   * is what makes it reconstructable by a third party from PUBLIC data alone, is the
   * DES-097 audit-anchoring stage and is not built here. That gap is disclosed rather than
   * papered over.
   *
   * @param {string} windowId
   * @returns {Array<object>}
   */
  decisionTrail(windowId) {
    const window = this._store.findWindowById(windowId);
    if (!window) fail('NOT_FOUND', `decision window ${windowId} not found`);
    return this._store.getTrail(windowId);
  }
}
