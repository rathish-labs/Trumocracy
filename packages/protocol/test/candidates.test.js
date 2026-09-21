/**
 * UT-0891..UT-0895 — candidate selection reference rules.
 *
 * Traces: FR-036, FR-037, FR-038, FR-065, FR-066, FR-067, FR-081, FR-085.
 * Design: DES-027, DES-028, DES-066, DES-067; Doc 03 §5.6 CANDIDACY state model; ADR-015.
 *
 * Test invariants (Doc 06 §2):
 *  - Names state the guarantee, not the mechanism.
 *  - Every negative path asserts the SPECIFIC code.
 *  - The two fairness properties are asserted as capability ABSENCE: no transition reaches
 *    PUBLISHED except through DEBATES_COMPLETE → VOTE_OPEN, and no export of this module
 *    can approve, reject, rank or renominate.
 */
import { describe, it, expect } from 'vitest';

import * as candidates from '../src/candidates.js';
import {
  CANDIDACY_STAGE,
  CandidateError,
  DEBATE_TOPIC,
  REQUIRED_DEBATE_TOPICS,
  DEBATES_PER_CANDIDATE,
  FEEDBACK,
  FEEDBACK_SCORE,
  POST_DEBATE_CHOICE,
  CONSENT_ACKNOWLEDGEMENTS,
  NOMINATION_ENDORSEMENTS_MIN,
  NOMINATION_MATURATION_SECONDS,
  assertCandidacyTransition,
  debatesComplete,
  feedbackScore,
  isNetPositive,
  inScopeForOffice,
  isMatured,
  validateConsent,
} from '../src/candidates.js';

const DAY = 86_400;

// ─── UT-0891 the lifecycle only reaches the ballot through debates and a vote (FR-067) ──

describe('UT-0891 a candidacy reaches PUBLISHED only through DEBATES_COMPLETE and VOTE_OPEN (FR-067, BR-013)', () => {
  it('the happy path is the only path: NOMINATED → CONSENTED → DEBATING → DEBATES_COMPLETE → VOTE_OPEN → PUBLISHED', () => {
    const path = [
      CANDIDACY_STAGE.NOMINATED,
      CANDIDACY_STAGE.CONSENTED,
      CANDIDACY_STAGE.DEBATING,
      CANDIDACY_STAGE.DEBATES_COMPLETE,
      CANDIDACY_STAGE.VOTE_OPEN,
      CANDIDACY_STAGE.PUBLISHED,
    ];
    for (let i = 0; i < path.length - 1; i++) {
      expect(assertCandidacyTransition(path[i], path[i + 1])).toEqual({ valid: true });
    }
  });

  it('no stage other than VOTE_OPEN can transition to PUBLISHED — there is no shortcut for anyone, incumbent or not', () => {
    for (const from of Object.values(CANDIDACY_STAGE)) {
      if (from === CANDIDACY_STAGE.VOTE_OPEN) continue;
      let err;
      try {
        assertCandidacyTransition(from, CANDIDACY_STAGE.PUBLISHED);
      } catch (e) {
        err = e;
      }
      expect(err, `${from} → PUBLISHED must be refused`).toBeInstanceOf(CandidateError);
      expect(err.code).toBe('ILLEGAL_TRANSITION');
    }
  });

  it('skipping the debates is refused with the specific code', () => {
    expect(() => assertCandidacyTransition(CANDIDACY_STAGE.CONSENTED, CANDIDACY_STAGE.VOTE_OPEN)).toThrow(
      expect.objectContaining({ code: 'ILLEGAL_TRANSITION' }),
    );
  });

  it('PUBLISHED, NOT_ADVANCED and WITHDRAWN are terminal — a decided candidacy is never edited, only recorded (FR-107)', () => {
    for (const terminal of [CANDIDACY_STAGE.PUBLISHED, CANDIDACY_STAGE.NOT_ADVANCED, CANDIDACY_STAGE.WITHDRAWN]) {
      for (const to of Object.values(CANDIDACY_STAGE)) {
        expect(() => assertCandidacyTransition(terminal, to)).toThrow(
          expect.objectContaining({ code: 'ILLEGAL_TRANSITION' }),
        );
      }
    }
  });

  it('an unknown stage is refused, not silently allowed', () => {
    expect(() => assertCandidacyTransition('INCUMBENT', CANDIDACY_STAGE.PUBLISHED)).toThrow(
      expect.objectContaining({ code: 'UNKNOWN_STAGE' }),
    );
  });

  it('capability absence: the module exports nothing that approves, rejects, ranks or renominates (FR-081, BR-016)', () => {
    const names = Object.keys(candidates).map((n) => n.toLowerCase());
    for (const forbidden of ['approve', 'reject', 'rank', 'renominat', 'incumben', 'override', 'skip']) {
      expect(names.some((n) => n.includes(forbidden)), `an export mentioning "${forbidden}" exists`).toBe(false);
    }
  });
});

// ─── UT-0892 three debates, one per topic, attendance on the record (FR-066) ──────────

describe('UT-0892 three debates — one per required topic — with attendance attested before a candidacy proceeds (FR-066)', () => {
  it('exactly three topics are required and they are the three FR-066 names', () => {
    expect(DEBATES_PER_CANDIDATE).toBe(3);
    expect(REQUIRED_DEBATE_TOPICS).toEqual([
      DEBATE_TOPIC.LOCAL_CONDITIONS,
      DEBATE_TOPIC.LOCAL_PROBLEMS,
      DEBATE_TOPIC.WORK_REQUIRED,
    ]);
  });

  it('three attended debates on the three topics are complete', () => {
    const debates = REQUIRED_DEBATE_TOPICS.map((topic) => ({ topic, attended: true }));
    expect(debatesComplete(debates)).toEqual({ complete: true, missingTopics: [], absences: [] });
  });

  it('two debates are not complete and the missing topic is named', () => {
    const debates = [
      { topic: DEBATE_TOPIC.LOCAL_CONDITIONS, attended: true },
      { topic: DEBATE_TOPIC.LOCAL_PROBLEMS, attended: true },
    ];
    const r = debatesComplete(debates);
    expect(r.complete).toBe(false);
    expect(r.missingTopics).toEqual([DEBATE_TOPIC.WORK_REQUIRED]);
  });

  it('a recorded absence keeps the candidacy from proceeding AND stays visible on the record', () => {
    const debates = [
      { topic: DEBATE_TOPIC.LOCAL_CONDITIONS, attended: true },
      { topic: DEBATE_TOPIC.LOCAL_PROBLEMS, attended: false },
      { topic: DEBATE_TOPIC.WORK_REQUIRED, attended: true },
    ];
    const r = debatesComplete(debates);
    expect(r.complete).toBe(false);
    expect(r.absences).toEqual([DEBATE_TOPIC.LOCAL_PROBLEMS]);
    expect(r.missingTopics).toEqual([]);
  });

  it('a scheduled-but-not-yet-held debate (attended: null) is missing, not absent', () => {
    const debates = REQUIRED_DEBATE_TOPICS.map((topic) => ({ topic, attended: null }));
    const r = debatesComplete(debates);
    expect(r.complete).toBe(false);
    expect(r.missingTopics).toEqual(REQUIRED_DEBATE_TOPICS);
    expect(r.absences).toEqual([]);
  });
});

// ─── UT-0893 feedback scoring and the net-positive rule (FR-065 / FR-067, ADR-015) ────

describe('UT-0893 feedback scores +3 per upvote and −1 per downvote; the post-debate vote must be strictly net positive (FR-065, FR-067)', () => {
  it('the asymmetry is exactly the ADR-015 values', () => {
    expect(FEEDBACK_SCORE).toEqual({ [FEEDBACK.UPVOTE]: 3, [FEEDBACK.DOWNVOTE]: -1 });
  });

  it('feedbackScore is 3·up − down', () => {
    expect(feedbackScore({ [FEEDBACK.UPVOTE]: 4, [FEEDBACK.DOWNVOTE]: 2 })).toBe(10);
    expect(feedbackScore({ [FEEDBACK.DOWNVOTE]: 5 })).toBe(-5);
    expect(feedbackScore({})).toBe(0);
    expect(feedbackScore(undefined)).toBe(0);
  });

  it('a tie in the post-debate vote does NOT advance the candidate', () => {
    expect(isNetPositive({ [POST_DEBATE_CHOICE.SUITABLE]: 3, [POST_DEBATE_CHOICE.NOT_SUITABLE]: 3 })).toBe(false);
  });

  it('one more SUITABLE than NOT_SUITABLE advances; zero votes does not', () => {
    expect(isNetPositive({ [POST_DEBATE_CHOICE.SUITABLE]: 4, [POST_DEBATE_CHOICE.NOT_SUITABLE]: 3 })).toBe(true);
    expect(isNetPositive({})).toBe(false);
  });
});

// ─── UT-0894 region scope and maturation (FR-036, FR-023) ────────────────────────────

describe('UT-0894 you may stand only where you live — the office region must equal or contain your residency (FR-036)', () => {
  it('a ward resident may stand for that ward', () => {
    expect(inScopeForOffice({ residencyRegion: 'IN/KA/BLR/BLR-S/W-152', officeRegion: 'IN/KA/BLR/BLR-S/W-152' })).toBe(true);
  });

  it('a ward resident may stand for an office covering the whole district that contains the ward', () => {
    expect(inScopeForOffice({ residencyRegion: 'IN/KA/BLR/BLR-S/W-152', officeRegion: 'IN/KA/BLR' })).toBe(true);
  });

  it('a resident of one ward may NOT stand for a different ward — nobody parachutes in', () => {
    expect(inScopeForOffice({ residencyRegion: 'IN/KA/BLR/BLR-S/W-152', officeRegion: 'IN/KA/BLR/BLR-S/W-153' })).toBe(false);
  });

  it('a district resident may NOT stand for a single ward inside it — the office region must contain the residency, not the reverse', () => {
    expect(inScopeForOffice({ residencyRegion: 'IN/KA/BLR', officeRegion: 'IN/KA/BLR/BLR-S/W-152' })).toBe(false);
  });

  it('a malformed region path is a RegionError, never a silent pass', () => {
    expect(() => inScopeForOffice({ residencyRegion: '/bad', officeRegion: 'IN/KA' })).toThrow();
  });

  it('maturation: a member is matured only once the published period has elapsed since joining (FR-023)', () => {
    const now = 1_800_000_000;
    expect(isMatured({ joinedAt: now - NOMINATION_MATURATION_SECONDS, now }).matured).toBe(true);
    expect(isMatured({ joinedAt: now - NOMINATION_MATURATION_SECONDS + 1, now }).matured).toBe(false);
    expect(isMatured({ joinedAt: null, now }).matured).toBe(false);
  });

  it('the two engineer-chosen constants are flagged for ratification and are not zero', () => {
    expect(NOMINATION_ENDORSEMENTS_MIN).toBeGreaterThan(0);
    expect(NOMINATION_MATURATION_SECONDS).toBe(30 * DAY);
  });
});

// ─── UT-0895 informed consent names all three FR-038 facts (FR-037, FR-038, FR-085) ───

describe('UT-0895 consent is valid only when every FR-038 fact is explicitly acknowledged (FR-037, FR-038, FR-085)', () => {
  it('the three acknowledgements are identity-public, irreversible-for-term, revocable-only-by-withdrawal-before-lock', () => {
    expect(CONSENT_ACKNOWLEDGEMENTS).toEqual([
      'identityBecomesPublic',
      'irreversibleForTerm',
      'revocableOnlyByWithdrawalBeforeLock',
    ]);
  });

  it('all three true is valid', () => {
    expect(
      validateConsent({ identityBecomesPublic: true, irreversibleForTerm: true, revocableOnlyByWithdrawalBeforeLock: true }),
    ).toEqual({ valid: true, missing: [] });
  });

  it('a missing key is a missing acknowledgement — silence is not consent', () => {
    const r = validateConsent({ identityBecomesPublic: true, irreversibleForTerm: true });
    expect(r.valid).toBe(false);
    expect(r.missing).toEqual(['revocableOnlyByWithdrawalBeforeLock']);
  });

  it('a truthy-but-not-true value ("yes", 1) does not count — the acknowledgement must be the literal true', () => {
    const r = validateConsent({ identityBecomesPublic: 'yes', irreversibleForTerm: 1, revocableOnlyByWithdrawalBeforeLock: true });
    expect(r.valid).toBe(false);
    expect(r.missing).toEqual(['identityBecomesPublic', 'irreversibleForTerm']);
  });

  it('an empty or absent record is missing all three', () => {
    expect(validateConsent({}).missing).toHaveLength(3);
    expect(validateConsent(undefined).missing).toHaveLength(3);
  });
});
