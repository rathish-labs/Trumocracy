/**
 * Candidate selection — v1 (Definition-A) service layer.
 *
 * Implements self-nomination, nomination endorsements, the separate informed-consent
 * crossing, the three-debate gate, feedback scoring and the post-debate member vote on
 * top of the reference rules in `@trumocracy/protocol` (candidates.js).
 *
 * Requirements: FR-036, FR-037, FR-038, FR-065, FR-066, FR-067, FR-081, FR-085, FR-107.
 * Design: DES-027, DES-028, DES-066, DES-067. Counting seam: Doc 03 §10.13.2(c) CANDIDACY.
 *
 * ─── What this module deliberately does NOT do ───────────────────────────────
 *  - It does not count a vote. The post-debate member vote is cast through the injected
 *    IBallotService (DES-096) and its tally is read back; feedback votes are recorded here
 *    only because FR-065 requires a refusal on the second attempt (not last-write-wins),
 *    which the ballot seam does not provide.
 *  - It does not verify anyone. Standing (FR-123 CANDIDACY) and voting (BINDING_VOTE) ask
 *    the injected IEligibilityVerifier, per call. The service never HOLDS a verifier or a
 *    ballot service: reads and the consent step structurally cannot reach either.
 *  - It does not know who holds office. `nominate()` reads nothing about incumbency; an
 *    office-holder standing again takes the identical path as anyone else (FR-067). The
 *    office-holder record exists for FR-083's public participation record, and nothing
 *    in the nomination or publication path can read it — asserted by test.
 *  - It does not approve, reject or rank. The only thing that decides a candidacy is the
 *    member vote's tally (FR-081).
 *
 * ─── The one deletion in the protocol (FR-085, OI-16) ────────────────────────
 * Disclosure data submitted with a nomination is confidential-class and never enters the
 * append-only governance record. Withdrawal BEFORE the nomination window closes destroys
 * it. After the window closes, consent is irrevocable for the term: withdrawal is still
 * allowed until the ballot locks (FR-036), but the disclosures stand. The trail records
 * the withdrawal and whether disclosures were destroyed — never their content.
 *
 * ─── v1 residency (honest limitation) ────────────────────────────────────────
 * No residency attestation exists in v1. The nominee DECLARES a residency region; the
 * service checks it is within the office region (FR-036) and within the party's
 * jurisdiction. Real residency attestation is DES-007 / v2. Doc 06 §7 records this.
 */
import {
  CANDIDACY_STAGE,
  CONSENT_ACKNOWLEDGEMENTS,
  DEBATE_TOPIC,
  FEEDBACK,
  NOMINATION_ENDORSEMENTS_MIN,
  NOMINATION_MATURATION_SECONDS,
  POST_DEBATE_CHOICE,
  REQUIRED_DEBATE_TOPICS,
  PARTY_STATE,
  assertCandidacyTransition,
  debatesComplete,
  feedbackScore,
  inScopeForOffice,
  isMatured,
  isNetPositive,
  isWithin,
  validateConsent,
} from '@trumocracy/protocol';
import { COUNTING_ACTION } from './eligibility.js';

// ─── Typedefs ──────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} ICandidateStore
 * Injectable persistence seam for the candidate-selection service.
 * Production backing: Postgres (DES-097(b) pattern). Dev/demo: InMemoryCandidateStore.
 * @property {function(): boolean} IS_INSECURE_MOCK
 * @property {function(object): string} saveElection  — returns electionId
 * @property {function(string): object|null} findElectionById
 * @property {function(string, object): object} updateElection  — (electionId, patch)
 * @property {function(object): string} saveCandidacy  — returns candidacyId
 * @property {function(string): object|null} findCandidacyById
 * @property {function(string): object[]} findCandidaciesByElection
 * @property {function(string, object): object} updateCandidacy  — (candidacyId, patch)
 * @property {function(string): void} destroyDisclosures  — the FR-085 / OI-16 carve-out
 * @property {function(string, string): boolean} hasEndorsed  — (candidacyId, endorser)
 * @property {function(string, string): void} recordEndorsement  — (candidacyId, endorser)
 * @property {function(string): number} countEndorsements
 * @property {function(string, object): void} upsertDebate  — (candidacyId, {topic, ...})
 * @property {function(string): object[]} findDebates
 * @property {function(string, string): boolean} hasGivenFeedback  — (candidacyId, member)
 * @property {function(string, string, string): void} recordFeedback  — (candidacyId, member, feedback)
 * @property {function(string): Record<string, number>} feedbackTally  — counts only, no casters
 * @property {function(string, string): void} recordOfficeHolder  — (officeId, member)
 * @property {function(string): string|null} officeHolder
 * @property {function(object): void} appendTrailEvent  — append-only; never updated
 * @property {function(string): object[]} getTrail  — (candidacyId) → copies, in order
 */

let __seq = 0;
const nextId = (prefix) => `${prefix}_${(++__seq).toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

/**
 * In-memory candidate store — demo/dev only.
 * IS_INSECURE_MOCK() returns true: this is not production persistence, and the CI
 * promotion gate refuses to promote any environment containing it.
 * @implements {ICandidateStore}
 */
export class InMemoryCandidateStore {
  constructor() {
    this._elections = new Map();
    this._candidacies = new Map();
    this._disclosures = new Map(); // confidential-class; kept apart from the candidacy row
    this._endorsements = new Map(); // candidacyId → Set<endorser>
    this._debates = new Map(); // candidacyId → Map<topic, debate>
    this._feedbackCasters = new Map(); // candidacyId → Set<member> (nullifier record only)
    this._feedbackTally = new Map(); // candidacyId → {UPVOTE, DOWNVOTE}
    this._officeHolders = new Map();
    this._trail = [];
  }

  /** @returns {true} in-memory persistence is never production. */
  IS_INSECURE_MOCK() {
    return true;
  }

  saveElection(election) {
    const id = nextId('elec');
    this._elections.set(id, { ...election, id });
    return id;
  }

  findElectionById(id) {
    const e = this._elections.get(id);
    return e ? { ...e } : null;
  }

  updateElection(electionId, patch) {
    const e = this._elections.get(electionId);
    if (!e) throw new Error(`election ${electionId} not found`);
    const updated = { ...e, ...patch };
    this._elections.set(electionId, updated);
    return { ...updated };
  }

  saveCandidacy(candidacy) {
    const id = nextId('cand');
    const { disclosures, ...row } = candidacy;
    this._candidacies.set(id, { ...row, id });
    if (disclosures !== undefined) this._disclosures.set(id, { ...disclosures });
    return id;
  }

  findCandidacyById(id) {
    const c = this._candidacies.get(id);
    if (!c) return null;
    const disclosures = this._disclosures.get(id);
    return { ...c, disclosures: disclosures ? { ...disclosures } : null };
  }

  findCandidaciesByElection(electionId) {
    return [...this._candidacies.keys()]
      .filter((id) => this._candidacies.get(id).electionId === electionId)
      .map((id) => this.findCandidacyById(id));
  }

  updateCandidacy(candidacyId, patch) {
    const c = this._candidacies.get(candidacyId);
    if (!c) throw new Error(`candidacy ${candidacyId} not found`);
    const updated = { ...c, ...patch };
    this._candidacies.set(candidacyId, updated);
    return this.findCandidacyById(candidacyId);
  }

  /** The FR-085 / OI-16 carve-out: the only delete in the protocol, and it is confidential-class only. */
  destroyDisclosures(candidacyId) {
    this._disclosures.delete(candidacyId);
  }

  hasEndorsed(candidacyId, endorser) {
    return this._endorsements.get(candidacyId)?.has(endorser) ?? false;
  }

  recordEndorsement(candidacyId, endorser) {
    if (!this._endorsements.has(candidacyId)) this._endorsements.set(candidacyId, new Set());
    this._endorsements.get(candidacyId).add(endorser);
  }

  countEndorsements(candidacyId) {
    return this._endorsements.get(candidacyId)?.size ?? 0;
  }

  upsertDebate(candidacyId, debate) {
    if (!this._debates.has(candidacyId)) this._debates.set(candidacyId, new Map());
    this._debates.get(candidacyId).set(debate.topic, { ...debate });
  }

  findDebates(candidacyId) {
    return [...(this._debates.get(candidacyId)?.values() ?? [])].map((d) => ({ ...d }));
  }

  hasGivenFeedback(candidacyId, member) {
    return this._feedbackCasters.get(candidacyId)?.has(member) ?? false;
  }

  /**
   * The caster is kept ONLY as a nullifier record so a second vote can be refused
   * (FR-065). It is never returned by any read. In v1 the operator's database can see it
   * (FR-131(b)); unlinkability arrives with the v2 nullifier (DES-066 annotation).
   */
  recordFeedback(candidacyId, member, feedback) {
    if (!this._feedbackCasters.has(candidacyId)) this._feedbackCasters.set(candidacyId, new Set());
    this._feedbackCasters.get(candidacyId).add(member);
    const tally = this._feedbackTally.get(candidacyId) ?? { [FEEDBACK.UPVOTE]: 0, [FEEDBACK.DOWNVOTE]: 0 };
    tally[feedback] = (tally[feedback] ?? 0) + 1;
    this._feedbackTally.set(candidacyId, tally);
  }

  feedbackTally(candidacyId) {
    return { ...(this._feedbackTally.get(candidacyId) ?? { [FEEDBACK.UPVOTE]: 0, [FEEDBACK.DOWNVOTE]: 0 }) };
  }

  recordOfficeHolder(officeId, member) {
    this._officeHolders.set(officeId, member);
  }

  officeHolder(officeId) {
    return this._officeHolders.get(officeId) ?? null;
  }

  /** Append-only. There is no update or delete method on the trail, by design (FR-107). */
  appendTrailEvent(event) {
    this._trail.push({ ...event, seq: this._trail.length });
  }

  getTrail(candidacyId) {
    return this._trail.filter((e) => e.candidacyId === candidacyId).map((e) => ({ ...e }));
  }
}

// ─── Service ───────────────────────────────────────────────────────────────────

const fail = (code, message, extra = {}) => {
  const err = new Error(message);
  err.code = code;
  Object.assign(err, extra);
  throw err;
};

/** The IBallotService election id for one candidacy's post-debate vote. */
const postDebateBallotId = (candidacyId) => `pdv:${candidacyId}`;

/**
 * CandidateService — the v1 candidate-selection flow.
 *
 * @param {ICandidateStore} store
 * @param {object} membership  — a PartyCreationService (or any object exposing
 *   `activeMembership(pseudonym)` and `partyStatus(partyId)`); membership is read, never written.
 * @param {function(): number} [clock]  — Unix seconds; MUST be injected in tests.
 */
export class CandidateService {
  constructor(store, membership, clock = () => Math.floor(Date.now() / 1000)) {
    this._store = store;
    this._membership = membership;
    this._clock = clock;
    // Deliberately absent: this._verifier and this._ballots. The service never HOLDS
    // either seam, so reads and the consent step structurally cannot reach them.
  }

  /** Delegates to the store: the service is only as trustworthy as its backing. */
  IS_INSECURE_MOCK() {
    return this._store.IS_INSECURE_MOCK();
  }

  // ── internals ───────────────────────────────────────────────────────────────

  /** @private Assert the member is a current member of an ACTIVE party; return membership + status. */
  _requireMember(partyId, memberPseudonym) {
    const status = this._membership.partyStatus(partyId);
    if (!status) fail('NOT_FOUND', `party ${partyId} not found`);
    if (status.state !== PARTY_STATE.ACTIVE) fail('NOT_ACTIVE', `party ${partyId} is not ACTIVE`);
    const active = this._membership.activeMembership(memberPseudonym);
    if (!active || active.partyId !== partyId) {
      fail('NOT_A_MEMBER', 'only a current member of this party may take part in its candidate selection');
    }
    return { active, status };
  }

  /** @private The caller must be the candidate. Read nothing else first; refuse by identity alone. */
  _requireCandidate(candidacy, memberPseudonym) {
    if (!memberPseudonym || candidacy.member !== memberPseudonym) {
      fail('NOT_YOUR_CANDIDACY', 'only the candidate can do this to their own candidacy', {
        candidacyId: candidacy.id,
      });
    }
  }

  /** @private FR-023: governance rights wait for the published maturation period. */
  _requireMatured(active, what) {
    const m = isMatured({ joinedAt: active.joinedAt, now: this._clock(), maturationSeconds: this._maturation() });
    if (!m.matured) {
      fail('NOT_MATURED', `${what} needs ${m.required} seconds of membership; you have ${m.tenure}`, {
        tenure: m.tenure,
        required: m.required,
      });
    }
  }

  /** @private */
  _maturation() {
    return NOMINATION_MATURATION_SECONDS;
  }

  /** @private */
  _election(electionId) {
    const e = this._store.findElectionById(electionId);
    if (!e) fail('NOT_FOUND', `election ${electionId} not found`);
    return e;
  }

  /** @private */
  _candidacy(candidacyId) {
    const c = this._store.findCandidacyById(candidacyId);
    if (!c) fail('NOT_FOUND', `candidacy ${candidacyId} not found`);
    return c;
  }

  /** @private Move a candidacy to a new stage through the reference transition table. */
  _advance(candidacy, to, trailType, payload = {}) {
    assertCandidacyTransition(candidacy.stage, to);
    this._store.updateCandidacy(candidacy.id, { stage: to, stageChangedAt: this._clock() });
    this._trail(candidacy.id, trailType, { from: candidacy.stage, to, ...payload });
  }

  /** @private Append to the permanent record (FR-054, FR-107). Never carries disclosures. */
  _trail(candidacyId, type, payload) {
    this._store.appendTrailEvent({ candidacyId, type, at: this._clock(), ...payload });
  }

  // ── FR-039 election timetable ───────────────────────────────────────────────

  /**
   * Open an internal election for one (region, office) pair with a published timetable.
   * The timetable is immutable after this call: there is no `updateTimetable` (FR-039).
   *
   * @param {string} partyId
   * @param {{officeId: string, officeRegion: string, nominationClosesAt: number, ballotLocksAt: number}} timetable
   * @returns {{electionId: string}}
   */
  openElection(partyId, { officeId, officeRegion, nominationClosesAt, ballotLocksAt }) {
    const status = this._membership.partyStatus(partyId);
    if (!status) fail('NOT_FOUND', `party ${partyId} not found`);
    if (status.state !== PARTY_STATE.ACTIVE) fail('NOT_ACTIVE', `party ${partyId} is not ACTIVE`);
    if (!isWithin(officeRegion, status.jurisdiction)) {
      fail('OFFICE_OUTSIDE_JURISDICTION', `office region ${officeRegion} is not within the party's jurisdiction ${status.jurisdiction}`);
    }
    const now = this._clock();
    if (!(nominationClosesAt > now)) fail('INVALID_TIMETABLE', 'the nomination window must close in the future');
    if (!(ballotLocksAt > nominationClosesAt)) fail('INVALID_TIMETABLE', 'the ballot must lock after the nomination window closes');

    const electionId = this._store.saveElection({
      partyId,
      officeId,
      officeRegion,
      openedAt: now,
      nominationClosesAt,
      ballotLocksAt,
      locked: false,
    });
    return { electionId };
  }

  /**
   * Lock the ballot: the candidate set becomes immutable (FR-039). Idempotent.
   * @param {string} electionId
   */
  lockBallot(electionId) {
    const e = this._election(electionId);
    if (e.locked) return { electionId, locked: true };
    if (this._clock() < e.ballotLocksAt) fail('TOO_EARLY', 'the ballot locks at the published time, not before');
    this._store.updateElection(electionId, { locked: true, lockedAt: this._clock() });
    return { electionId, locked: true };
  }

  // ── FR-036 / FR-081 self-nomination ─────────────────────────────────────────

  /**
   * Nominate YOURSELF. There is no parameter for nominating anyone else (FR-036).
   *
   * Standing is a COUNTING action (Doc 03 §10.13.2(c)): the verifier is asked whether this
   * member's candidacy would count, then asked to register the CANDIDACY nullifier so one
   * member stands once per election. Reading and following the race is open and never
   * reaches the seam.
   *
   * Disclosures are confidential-class until consent (FR-085): they are stored apart from
   * the candidacy row and NEVER written to the trail.
   *
   * @param {string} electionId
   * @param {string} memberPseudonym
   * @param {{residencyRegion: string, disclosures?: object}} nomination
   * @param {object} verifier  — IEligibilityVerifier (DES-095)
   * @returns {{candidacyId: string, stage: string}}
   */
  nominate(electionId, memberPseudonym, { residencyRegion, disclosures = {} }, verifier) {
    const election = this._election(electionId);
    const { active, status } = this._requireMember(election.partyId, memberPseudonym);
    this._requireMatured(active, 'standing for office');

    const now = this._clock();
    if (now >= election.nominationClosesAt) fail('NOMINATION_WINDOW_CLOSED', 'the nomination window has closed');

    if (!isWithin(residencyRegion, status.jurisdiction)) {
      fail('RESIDENCY_OUTSIDE_JURISDICTION', `residency ${residencyRegion} is not within the party's jurisdiction ${status.jurisdiction}`);
    }
    if (!inScopeForOffice({ residencyRegion, officeRegion: election.officeRegion })) {
      fail('OUT_OF_SCOPE', `you may stand only where you live: ${residencyRegion} is not within the office region ${election.officeRegion}`, {
        residencyRegion,
        officeRegion: election.officeRegion,
      });
    }

    // FR-123(c) counting gate — Doc 03 §10.13.2(c).
    const result = verifier.verifyEligibility(memberPseudonym, election.officeRegion, COUNTING_ACTION.CANDIDACY);
    if (!result.eligible) {
      fail('NOT_COUNTING_ELIGIBLE', `not eligible for the counting tier: ${result.reason ?? 'verification incomplete'}`, {
        reason: result.reason,
        stillAMember: true,
        mayStillFollow: true,
      });
    }
    if (!verifier.isUniqueInScope(memberPseudonym, `${COUNTING_ACTION.CANDIDACY}:${electionId}`)) {
      fail('ALREADY_NOMINATED', 'you are already standing in this election');
    }

    const candidacyId = this._store.saveCandidacy({
      electionId,
      partyId: election.partyId,
      member: memberPseudonym,
      residencyRegion,
      stage: CANDIDACY_STAGE.NOMINATED,
      nominatedAt: now,
      consentRecordedAt: null,
      disclosures,
    });
    // FR-037: the public record names nobody who has not consented. The member is written to
    // the trail at CONSENT_RECORDED, not here.
    this._trail(candidacyId, 'NOMINATED', { residencyRegion });
    return { candidacyId, stage: CANDIDACY_STAGE.NOMINATED };
  }

  /**
   * Endorse a nomination (FR-036): a matured member resident in the office region.
   * One endorsement per member per candidacy; a nomination right is not transferable (FR-035).
   *
   * @param {string} candidacyId
   * @param {string} endorserPseudonym
   * @param {{residencyRegion: string}} args
   * @returns {{endorsements: number, required: number, met: boolean}}
   */
  endorseNomination(candidacyId, endorserPseudonym, { residencyRegion }) {
    const c = this._candidacy(candidacyId);
    const election = this._election(c.electionId);
    const { active } = this._requireMember(c.partyId, endorserPseudonym);
    this._requireMatured(active, 'endorsing a nomination');
    if (endorserPseudonym === c.member) fail('SELF_ENDORSEMENT', 'you cannot endorse your own nomination');
    if (!isWithin(residencyRegion, election.officeRegion)) {
      fail('OUT_OF_SCOPE', 'only members resident in the office region may endorse a nomination there');
    }
    if (this._store.hasEndorsed(candidacyId, endorserPseudonym)) fail('ALREADY_ENDORSED', 'you have already endorsed this nomination');
    if (this._clock() >= election.nominationClosesAt) fail('NOMINATION_WINDOW_CLOSED', 'the nomination window has closed');

    this._store.recordEndorsement(candidacyId, endorserPseudonym);
    // The trail records THAT a nomination was endorsed, never by whom: an endorser is not a
    // consenting candidate, and FR-037 names nobody else (the store keeps the endorser only
    // so a second endorsement can be refused).
    this._trail(candidacyId, 'NOMINATION_ENDORSED', {});
    const endorsements = this._store.countEndorsements(candidacyId);
    const required = this._endorsementsRequired();
    return { endorsements, required, met: endorsements >= required };
  }

  /** @private */
  _endorsementsRequired() {
    return NOMINATION_ENDORSEMENTS_MIN;
  }

  // ── FR-037 / FR-038 / FR-085 the informed-consent crossing ───────────────────

  /**
   * Record the separate, explicit informed consent that makes a candidacy publishable.
   * This is the one-way door: from this event, the public participation record starts
   * (FR-083), and consent is irrevocable for the term (FR-085).
   *
   * Every FR-038 fact must be acknowledged with the literal `true`. The service takes NO
   * verifier here — consent is a disclosure step, never a counting action.
   *
   * Only the candidate can cross their own door: any other caller is refused with
   * NOT_YOUR_CANDIDACY before anything is read or written. There is no
   * consent-on-someone's-behalf, and that absence is asserted by test (UT-0897).
   *
   * @param {string} candidacyId
   * @param {string} memberPseudonym  — MUST be the candidate
   * @param {Record<string, boolean>} acknowledgements  — keys per CONSENT_ACKNOWLEDGEMENTS
   * @returns {{stage: string, consentRecordedAt: number}}
   */
  recordConsent(candidacyId, memberPseudonym, acknowledgements) {
    const c = this._candidacy(candidacyId);
    this._requireCandidate(c, memberPseudonym);
    if (c.stage !== CANDIDACY_STAGE.NOMINATED) {
      fail('NOT_AWAITING_CONSENT', `consent is recorded once, at nomination; this candidacy is ${c.stage}`, { stage: c.stage });
    }
    const v = validateConsent(acknowledgements);
    if (!v.valid) {
      fail('CONSENT_INCOMPLETE', `every fact must be acknowledged before a candidacy can be published: missing ${v.missing.join(', ')}`, {
        missing: v.missing,
      });
    }
    const at = this._clock();
    this._store.updateCandidacy(candidacyId, { consentRecordedAt: at });
    // The consent event is public by definition — it is the start of the public record.
    // The consent event is where the member's name first enters the public record (FR-083).
    this._advance({ ...c }, CANDIDACY_STAGE.CONSENTED, 'CONSENT_RECORDED', {
      member: memberPseudonym,
      acknowledged: [...CONSENT_ACKNOWLEDGEMENTS],
    });
    return { stage: CANDIDACY_STAGE.CONSENTED, consentRecordedAt: at };
  }

  /**
   * Withdraw a candidacy at any time before the ballot locks (FR-036).
   *
   * Before the nomination window closes, the disclosure data is DESTROYED (FR-085, OI-16
   * carve-out). After it closes, consent is irrevocable for the term: the candidacy
   * withdraws but the disclosures stand. The trail records which happened, never the data.
   *
   * Only the candidate can withdraw their own candidacy (NOT_YOUR_CANDIDACY otherwise) —
   * the destroy half of this method is the one delete in the protocol, and it must not be
   * reachable by anyone else.
   *
   * @param {string} candidacyId
   * @param {string} memberPseudonym  — MUST be the candidate
   * @returns {{stage: string, disclosuresDestroyed: boolean}}
   */
  withdraw(candidacyId, memberPseudonym) {
    const c = this._candidacy(candidacyId);
    this._requireCandidate(c, memberPseudonym);
    const election = this._election(c.electionId);
    const now = this._clock();
    if (election.locked || now >= election.ballotLocksAt) fail('BALLOT_LOCKED', 'the ballot has locked; a candidacy can no longer be withdrawn');

    const beforeWindowClose = now < election.nominationClosesAt;
    if (beforeWindowClose) this._store.destroyDisclosures(candidacyId);
    this._advance(c, CANDIDACY_STAGE.WITHDRAWN, 'WITHDRAWN', { disclosuresDestroyed: beforeWindowClose });
    return { stage: CANDIDACY_STAGE.WITHDRAWN, disclosuresDestroyed: beforeWindowClose };
  }

  // ── FR-066 the three debates ────────────────────────────────────────────────

  /**
   * Schedule the three debates, one per FR-066 topic. Requires consent recorded and the
   * published minimum of nomination endorsements.
   *
   * @param {string} candidacyId
   * @param {{[topic: string]: number}} [scheduledAt]  — Unix seconds per topic; optional
   * @returns {{stage: string, debates: object[]}}
   */
  scheduleDebates(candidacyId, scheduledAt = {}) {
    const c = this._candidacy(candidacyId);
    if (c.stage !== CANDIDACY_STAGE.CONSENTED) {
      fail('CONSENT_REQUIRED', 'debates are scheduled only after consent is recorded', { stage: c.stage });
    }
    const endorsements = this._store.countEndorsements(candidacyId);
    const required = this._endorsementsRequired();
    if (endorsements < required) {
      fail('ENDORSEMENTS_SHORT', `a nomination needs ${required} endorsements before debates are scheduled; it has ${endorsements}`, {
        endorsements,
        required,
      });
    }
    for (const topic of REQUIRED_DEBATE_TOPICS) {
      this._store.upsertDebate(candidacyId, { topic, scheduledAt: scheduledAt[topic] ?? null, attended: null, contentRef: null });
    }
    this._advance(c, CANDIDACY_STAGE.DEBATING, 'DEBATES_SCHEDULED', { topics: [...REQUIRED_DEBATE_TOPICS] });
    return { stage: CANDIDACY_STAGE.DEBATING, debates: this._store.findDebates(candidacyId) };
  }

  /**
   * Record a completed debate: attendance attestation and the off-chain content
   * reference (FR-066). An absence is recorded and stays visible; it also keeps the
   * candidacy from proceeding until that topic is held again.
   *
   * @param {string} candidacyId
   * @param {string} topic  — DEBATE_TOPIC value
   * @param {{attended: boolean, contentRef?: string|null}} record
   * @returns {{stage: string, complete: boolean, absences: string[]}}
   */
  recordDebate(candidacyId, topic, { attended, contentRef = null }) {
    const c = this._candidacy(candidacyId);
    if (c.stage !== CANDIDACY_STAGE.DEBATING) fail('NOT_DEBATING', `debates are not open for this candidacy (${c.stage})`, { stage: c.stage });
    if (!Object.values(DEBATE_TOPIC).includes(topic)) fail('UNKNOWN_TOPIC', `unknown debate topic: ${topic}`);
    if (typeof attended !== 'boolean') fail('ATTENDANCE_REQUIRED', 'attendance must be attested true or false');

    const existing = this._store.findDebates(candidacyId).find((d) => d.topic === topic) ?? { topic };
    this._store.upsertDebate(candidacyId, { ...existing, attended, contentRef, heldAt: this._clock() });
    this._trail(candidacyId, attended ? 'DEBATE_ATTENDED' : 'DEBATE_ABSENT', { topic, contentRef });

    const r = debatesComplete(this._store.findDebates(candidacyId));
    if (r.complete) this._advance({ ...c, stage: CANDIDACY_STAGE.DEBATING }, CANDIDACY_STAGE.DEBATES_COMPLETE, 'DEBATES_COMPLETE');
    return { stage: r.complete ? CANDIDACY_STAGE.DEBATES_COMPLETE : CANDIDACY_STAGE.DEBATING, complete: r.complete, absences: r.absences };
  }

  // ── FR-067 the post-debate member vote — cast through IBallotService ────────

  /**
   * Open the post-debate member vote. Only after all three debates are complete.
   * @param {string} candidacyId
   */
  openPostDebateVote(candidacyId) {
    const c = this._candidacy(candidacyId);
    if (c.stage !== CANDIDACY_STAGE.DEBATES_COMPLETE) {
      fail('DEBATES_INCOMPLETE', 'the member vote opens only after all three debates are complete', { stage: c.stage });
    }
    this._advance(c, CANDIDACY_STAGE.VOTE_OPEN, 'POST_DEBATE_VOTE_OPENED', { ballotId: postDebateBallotId(candidacyId) });
    return { stage: CANDIDACY_STAGE.VOTE_OPEN, ballotId: postDebateBallotId(candidacyId) };
  }

  /**
   * Cast a post-debate vote on a candidate's suitability (FR-067).
   *
   * This IS a binding vote: the verifier is asked with scope BINDING_VOTE, then the
   * ballot is cast through the injected IBallotService, which owns storage, receipts and
   * the tally (DES-096). This service never sees the ballot again except as a tally.
   *
   * @param {string} candidacyId
   * @param {string} memberPseudonym
   * @param {string} choice  — POST_DEBATE_CHOICE value
   * @param {object} verifier  — IEligibilityVerifier
   * @param {object} ballotService  — IBallotService
   * @returns {Promise<import('./ballot.js').BallotReceipt>}
   */
  async castPostDebateVote(candidacyId, memberPseudonym, choice, verifier, ballotService) {
    const c = this._candidacy(candidacyId);
    if (c.stage !== CANDIDACY_STAGE.VOTE_OPEN) fail('VOTE_NOT_OPEN', `the member vote is not open (${c.stage})`, { stage: c.stage });
    if (!Object.values(POST_DEBATE_CHOICE).includes(choice)) fail('UNKNOWN_CHOICE', `unknown choice: ${choice}`);
    const { active } = this._requireMember(c.partyId, memberPseudonym);
    this._requireMatured(active, 'voting on a candidacy');
    if (memberPseudonym === c.member) fail('SELF_VOTE', 'a candidate does not vote on their own suitability');

    const election = this._election(c.electionId);
    // FR-123(b) counting gate — Doc 03 §10.13.2(b).
    const result = verifier.verifyEligibility(memberPseudonym, election.officeRegion, COUNTING_ACTION.BINDING_VOTE);
    if (!result.eligible) {
      fail('NOT_COUNTING_ELIGIBLE', `not eligible for the counting tier: ${result.reason ?? 'verification incomplete'}`, {
        reason: result.reason,
        stillAMember: true,
      });
    }
    return ballotService.castBallot(postDebateBallotId(candidacyId), choice, memberPseudonym, result);
  }

  /**
   * Close the post-debate vote and decide the candidacy from the tally alone (FR-067,
   * FR-081). Net positive → PUBLISHED (on the election ballot); otherwise NOT_ADVANCED.
   * No parameter can override the tally.
   *
   * @param {string} candidacyId
   * @param {object} ballotService  — IBallotService
   * @returns {Promise<{stage: string, tally: Record<string, number>, resultHash: string}>}
   */
  async closePostDebateVote(candidacyId, ballotService) {
    const c = this._candidacy(candidacyId);
    if (c.stage !== CANDIDACY_STAGE.VOTE_OPEN) fail('VOTE_NOT_OPEN', `the member vote is not open (${c.stage})`, { stage: c.stage });
    const election = this._election(c.electionId);
    if (election.locked) fail('BALLOT_LOCKED', 'the ballot has locked; the candidate set cannot change');

    const tallyResult = await ballotService.computeTally(postDebateBallotId(candidacyId));
    const tally = tallyResult.result;
    const to = isNetPositive(tally) ? CANDIDACY_STAGE.PUBLISHED : CANDIDACY_STAGE.NOT_ADVANCED;
    this._advance(c, to, 'POST_DEBATE_VOTE_CLOSED', { tally, resultHash: tallyResult.resultHash });
    return { stage: to, tally, resultHash: tallyResult.resultHash };
  }

  // ── FR-065 feedback scoring ─────────────────────────────────────────────────

  /**
   * Cast one feedback vote on a candidate in an election (FR-065). A second attempt is
   * REFUSED, not overwritten. Requires maturation and the counting tier (it is a vote).
   *
   * @param {string} candidacyId
   * @param {string} memberPseudonym
   * @param {string} feedback  — FEEDBACK value
   * @param {object} verifier  — IEligibilityVerifier
   * @returns {{score: number, upvotes: number, downvotes: number}}  — aggregate only
   */
  castFeedback(candidacyId, memberPseudonym, feedback, verifier) {
    const c = this._candidacy(candidacyId);
    if (![CANDIDACY_STAGE.CONSENTED, CANDIDACY_STAGE.DEBATING, CANDIDACY_STAGE.DEBATES_COMPLETE, CANDIDACY_STAGE.VOTE_OPEN].includes(c.stage)) {
      fail('FEEDBACK_CLOSED', `feedback is open from consent until the member vote closes (${c.stage})`, { stage: c.stage });
    }
    if (!Object.values(FEEDBACK).includes(feedback)) fail('UNKNOWN_FEEDBACK', `unknown feedback: ${feedback}`);
    const { active } = this._requireMember(c.partyId, memberPseudonym);
    this._requireMatured(active, 'giving feedback on a candidate');
    if (memberPseudonym === c.member) fail('SELF_VOTE', 'a candidate does not give feedback on themselves');
    if (this._store.hasGivenFeedback(candidacyId, memberPseudonym)) {
      fail('ALREADY_GAVE_FEEDBACK', 'one feedback vote per member per candidate per election');
    }
    const election = this._election(c.electionId);
    const result = verifier.verifyEligibility(memberPseudonym, election.officeRegion, COUNTING_ACTION.BINDING_VOTE);
    if (!result.eligible) {
      fail('NOT_COUNTING_ELIGIBLE', `not eligible for the counting tier: ${result.reason ?? 'verification incomplete'}`, { reason: result.reason });
    }
    this._store.recordFeedback(candidacyId, memberPseudonym, feedback);
    // The trail records THAT feedback moved, never who gave it.
    this._trail(candidacyId, 'FEEDBACK_RECORDED', {});
    return this.feedbackTally(candidacyId);
  }

  /**
   * The public aggregate (FR-065): score and counts. No caster is ever returned.
   * Takes NO verifier: a read must never trigger verification.
   */
  feedbackTally(candidacyId) {
    this._candidacy(candidacyId);
    const tally = this._store.feedbackTally(candidacyId);
    return {
      score: feedbackScore(tally),
      upvotes: tally[FEEDBACK.UPVOTE] ?? 0,
      downvotes: tally[FEEDBACK.DOWNVOTE] ?? 0,
    };
  }

  // ── Reads (open to everyone; never reach a seam) ────────────────────────────

  /**
   * One candidacy as the public sees it. Disclosures appear only once consent is recorded
   * (FR-083: the public record starts at the consent event) and never after withdrawal
   * destroyed them.
   */
  candidacy(candidacyId) {
    const c = this._candidacy(candidacyId);
    const consented = c.consentRecordedAt !== null;
    return {
      candidacyId: c.id,
      electionId: c.electionId,
      member: consented ? c.member : null,
      stage: c.stage,
      residencyRegion: c.residencyRegion,
      nominatedAt: c.nominatedAt,
      consentRecordedAt: c.consentRecordedAt,
      endorsements: this._store.countEndorsements(candidacyId),
      endorsementsRequired: this._endorsementsRequired(),
      debates: this._store.findDebates(candidacyId),
      feedback: this.feedbackTally(candidacyId),
      disclosures: consented ? c.disclosures : null,
    };
  }

  /** Every candidacy in an election, public view. */
  candidacies(electionId) {
    this._election(electionId);
    return this._store.findCandidaciesByElection(electionId).map((c) => this.candidacy(c.id));
  }

  /**
   * The election ballot's candidate set: PUBLISHED candidacies only. Nothing places a
   * name here except closePostDebateVote() with a net-positive tally (FR-067, FR-081).
   */
  candidateSet(electionId) {
    return this.candidacies(electionId).filter((c) => c.stage === CANDIDACY_STAGE.PUBLISHED);
  }

  election(electionId) {
    return this._election(electionId);
  }

  /** FR-083: a sitting office-holder is public. Recorded for the participation record only. */
  recordOfficeHolder(officeId, memberPseudonym) {
    this._store.recordOfficeHolder(officeId, memberPseudonym);
  }

  officeHolder(officeId) {
    return this._store.officeHolder(officeId);
  }

  /** The permanent record for one candidacy (FR-054, FR-107). Copies, in order. */
  trail(candidacyId) {
    this._candidacy(candidacyId);
    return this._store.getTrail(candidacyId);
  }
}
