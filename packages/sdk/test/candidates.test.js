/**
 * UT-0896..UT-0902 — CandidateService: self-nomination, the consent crossing, the
 * three-debate gate, no incumbency, feedback scoring and the post-debate member vote
 * through IBallotService.
 *
 * Traces: FR-036, FR-037, FR-038, FR-039, FR-065, FR-066, FR-067, FR-081, FR-085, FR-107,
 *         FR-122, FR-123, FR-131(b).
 * Design: DES-027, DES-028, DES-066, DES-067, DES-076, DES-095, DES-096; Doc 03 §10.13.2(c).
 *
 * Test invariants (Doc 06 §2):
 *  - Reads and the consent step NEVER call a seam — asserted by spy.
 *  - Fairness properties are asserted as capability ABSENCE: no method reads incumbency
 *    on the nomination/publication path; no parameter overrides the tally.
 *  - Every negative path asserts the SPECIFIC code.
 *  - All clocks injected; no Date.now().
 *  - No mock where a real component fits: the real ConventionalBallotService and a real
 *    stub-backed ConventionalEligibilityVerifier are used (only the vendor seams are stubs).
 */
import { describe, it, expect, vi } from 'vitest';

import {
  InMemoryPartyStore,
  PartyCreationService,
  InMemoryCandidateStore,
  CandidateService,
  ConventionalBallotService,
  ConventionalEligibilityVerifier,
  StubPhoneVerifier,
  StubIdDocumentChecker,
  COUNTING_ACTION,
} from '../src/index.js';
import {
  CANDIDACY_STAGE,
  DEBATE_TOPIC,
  REQUIRED_DEBATE_TOPICS,
  FEEDBACK,
  POST_DEBATE_CHOICE,
  NOMINATION_ENDORSEMENTS_MIN,
  NOMINATION_MATURATION_SECONDS,
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  petitionThreshold,
} from '@trumocracy/protocol';

const T0 = 1_800_000_000;
const DAY = 86_400;
const WARD = 'IN/KA/BLR/BLR-S/W-152';
const OTHER_WARD = 'IN/KA/BLR/BLR-S/W-153';
const DISTRICT = 'IN/KA/BLR';

const goodPillars = Object.fromEntries(PILLARS.map((p) => [p, `Our position on ${p}. `.repeat(30)]));

const CONSENT = Object.freeze({
  identityBecomesPublic: true,
  irreversibleForTerm: true,
  revocableOnlyByWithdrawalBeforeLock: true,
});

/** An ACTIVE party in IN/KA, a CandidateService, and helpers sharing one injected clock. */
function makeFixture() {
  let now = T0;
  const clock = vi.fn(() => now);
  const setClock = (t) => {
    now = t;
  };

  const partyStore = new InMemoryPartyStore();
  const parties = new PartyCreationService(partyStore, clock);
  const { draftId } = parties.createDraft(
    {
      name: 'Commons Forward',
      jurisdiction: 'IN/KA',
      pillars: { ...goodPillars },
      emblem: 'CF',
      charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
      jurisdictionPopulation: 1_000,
      jurisdictionVerified: 1_000,
    },
    'drafter-a',
  );
  const { petitionId } = parties.publishDraft(draftId);
  partyStore.updatePetition(petitionId, {
    endorsements: petitionThreshold({ eligiblePopulation: 1_000, verifiedResidents: 1_000 }),
  });
  const { partyId } = parties.activateParty(petitionId);

  const store = new InMemoryCandidateStore();
  const service = new CandidateService(store, parties, clock);

  /** Join a member at a time that makes them MATURED by T0 + 1 day. */
  const join = (pseudonym) => {
    const saved = now;
    now = T0 - NOMINATION_MATURATION_SECONDS - DAY;
    parties.joinParty(partyId, pseudonym);
    now = saved;
    return pseudonym;
  };

  /** Join a member just now — NOT matured. */
  const joinFresh = (pseudonym) => {
    parties.joinParty(partyId, pseudonym);
    return pseudonym;
  };

  const credentialStore = new Map();
  /** Mark a member ID-verified with the DES-100 allowlist row. */
  const verify = (pseudonym) => {
    credentialStore.set(pseudonym, {
      id_verified_flag: true,
      age_verified: true,
      issuing_region: 'IN',
      subject_id_hash: `hmac-${pseudonym}`,
      verified_at: '2026-08-24T10:00:00.000Z',
    });
    return pseudonym;
  };
  const verifier = new ConventionalEligibilityVerifier({
    phoneVerifier: new StubPhoneVerifier(),
    idDocumentChecker: new StubIdDocumentChecker(),
    credentialStore,
  });
  const ballots = new ConventionalBallotService({ eligibilityVerifier: verifier });

  const openElection = (overrides = {}) =>
    service.openElection(partyId, {
      officeId: 'ward-rep',
      officeRegion: WARD,
      nominationClosesAt: T0 + 7 * DAY,
      ballotLocksAt: T0 + 30 * DAY,
      ...overrides,
    }).electionId;

  /** A matured, verified member standing in the ward. */
  const stand = (electionId, pseudonym, residencyRegion = WARD) => {
    join(pseudonym);
    verify(pseudonym);
    return service.nominate(electionId, pseudonym, { residencyRegion, disclosures: { legalName: `Name of ${pseudonym}` } }, verifier).candidacyId;
  };

  /** Endorse a candidacy up to the published minimum with fresh ward residents. */
  const endorseToMinimum = (candidacyId, prefix = 'endorser') => {
    for (let i = 0; i < NOMINATION_ENDORSEMENTS_MIN; i++) {
      const who = join(`${prefix}-${i}`);
      service.endorseNomination(candidacyId, who, { residencyRegion: WARD });
    }
  };

  /** Take a candidacy from NOMINATED to DEBATES_COMPLETE. */
  const completeDebates = (candidacyId, member = 'alice') => {
    service.recordConsent(candidacyId, member, CONSENT);
    endorseToMinimum(candidacyId, `end-${candidacyId}`);
    service.scheduleDebates(candidacyId);
    for (const topic of REQUIRED_DEBATE_TOPICS) {
      service.recordDebate(candidacyId, topic, { attended: true, contentRef: `bafy-${topic}` });
    }
  };

  return {
    service, store, parties, partyId, clock, setClock, join, joinFresh, verify, verifier, ballots,
    openElection, stand, endorseToMinimum, completeDebates, credentialStore,
  };
}

const thrown = (fn) => {
  try {
    fn();
  } catch (e) {
    return e;
  }
  return null;
};
const rejected = async (p) => {
  try {
    await p;
  } catch (e) {
    return e;
  }
  return null;
};

// ─── UT-0896 self-nomination: where you live, if you count, once (FR-036, FR-081, FR-123) ─

describe('UT-0896 a member may nominate only themselves, only where they live, only if they count — and nobody approves it (FR-036, FR-081)', () => {
  it('a matured, verified ward resident stands for the ward office and the trail records it without disclosures', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOMINATED);
    const trail = f.service.trail(candidacyId);
    expect(trail[0].type).toBe('NOMINATED');
    expect(JSON.stringify(trail)).not.toContain('Name of alice');
    // FR-037 is absolute: before consent the public record names nobody — not the trail either.
    expect(JSON.stringify(trail)).not.toContain('alice');
  });

  it('a ward resident may stand for a district office that contains the ward', () => {
    const f = makeFixture();
    const electionId = f.openElection({ officeId: 'district-rep', officeRegion: DISTRICT });
    expect(() => f.stand(electionId, 'alice', WARD)).not.toThrow();
  });

  it('a resident of another ward is refused with OUT_OF_SCOPE — nobody parachutes in', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const err = thrown(() => f.stand(electionId, 'bob', OTHER_WARD));
    expect(err.code).toBe('OUT_OF_SCOPE');
  });

  it('a declared residency outside the party jurisdiction is refused', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const err = thrown(() => f.stand(electionId, 'carol', 'IN/MH/MUM'));
    expect(err.code).toBe('RESIDENCY_OUTSIDE_JURISDICTION');
  });

  it('an open-tier member (no ID check) is refused with NOT_COUNTING_ELIGIBLE and told they are still a member — the seam was asked with scope CANDIDACY', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    f.join('dave');
    const spy = vi.spyOn(f.verifier, 'verifyEligibility');
    const err = thrown(() => f.service.nominate(electionId, 'dave', { residencyRegion: WARD }, f.verifier));
    expect(err.code).toBe('NOT_COUNTING_ELIGIBLE');
    expect(err.stillAMember).toBe(true);
    expect(spy).toHaveBeenCalledWith('dave', WARD, COUNTING_ACTION.CANDIDACY);
  });

  it('a fresh joiner is refused with NOT_MATURED before the seam is even asked (FR-023)', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    f.joinFresh('eve');
    f.verify('eve');
    const spy = vi.spyOn(f.verifier, 'verifyEligibility');
    const err = thrown(() => f.service.nominate(electionId, 'eve', { residencyRegion: WARD }, f.verifier));
    expect(err.code).toBe('NOT_MATURED');
    expect(spy).not.toHaveBeenCalled();
  });

  it('one candidacy per member per election: a second nomination is refused with ALREADY_NOMINATED', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    f.stand(electionId, 'alice');
    const err = thrown(() => f.service.nominate(electionId, 'alice', { residencyRegion: WARD }, f.verifier));
    expect(err.code).toBe('ALREADY_NOMINATED');
  });

  it('after the nomination window closes, nominating is refused', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    f.join('alice');
    f.verify('alice');
    f.setClock(T0 + 8 * DAY);
    const err = thrown(() => f.service.nominate(electionId, 'alice', { residencyRegion: WARD }, f.verifier));
    expect(err.code).toBe('NOMINATION_WINDOW_CLOSED');
  });

  it('capability absence: nominate() has no parameter naming anyone but the caller', () => {
    const params = CandidateService.prototype.nominate.toString().split(')')[0];
    expect(params).not.toMatch(/nominee|target|forMember|onBehalf/i);
  });

  it('endorsements come only from matured ward residents, once each, never from the candidate', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    const e1 = f.join('e1');
    expect(f.service.endorseNomination(candidacyId, e1, { residencyRegion: WARD })).toEqual({ endorsements: 1, required: NOMINATION_ENDORSEMENTS_MIN, met: false });
    expect(thrown(() => f.service.endorseNomination(candidacyId, e1, { residencyRegion: WARD })).code).toBe('ALREADY_ENDORSED');
    expect(thrown(() => f.service.endorseNomination(candidacyId, 'alice', { residencyRegion: WARD })).code).toBe('SELF_ENDORSEMENT');
    const outsider = f.join('e2');
    expect(thrown(() => f.service.endorseNomination(candidacyId, outsider, { residencyRegion: OTHER_WARD })).code).toBe('OUT_OF_SCOPE');
    const fresh = f.joinFresh('e3');
    expect(thrown(() => f.service.endorseNomination(candidacyId, fresh, { residencyRegion: WARD })).code).toBe('NOT_MATURED');
  });
});

// ─── UT-0897 the one-way door: separate consent, then irrevocable for the term (FR-037/038/085) ─

describe('UT-0897 consent is a separate, explicit event that starts the public record; withdrawal before the window closes destroys disclosures (FR-037, FR-038, FR-085)', () => {
  it('before consent the public view shows no member and no disclosures; after consent it shows both', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    const before = f.service.candidacy(candidacyId);
    expect(before.member).toBeNull();
    expect(before.disclosures).toBeNull();

    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    const after = f.service.candidacy(candidacyId);
    expect(after.stage).toBe(CANDIDACY_STAGE.CONSENTED);
    expect(after.member).toBe('alice');
    expect(after.disclosures).toEqual({ legalName: 'Name of alice' });
    // The name enters the public record AT the consent event, and not before (FR-083).
    const trail = f.service.trail(candidacyId);
    expect(trail.find((e) => e.type === 'CONSENT_RECORDED').member).toBe('alice');
    expect(trail.find((e) => e.type === 'NOMINATED').member).toBeUndefined();
  });

  it('only the candidate can cross their own door or withdraw — any other caller is refused with NOT_YOUR_CANDIDACY and nothing changes (ISS-01)', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.join('mallory');
    expect(thrown(() => f.service.recordConsent(candidacyId, 'mallory', CONSENT)).code).toBe('NOT_YOUR_CANDIDACY');
    expect(thrown(() => f.service.recordConsent(candidacyId, undefined, CONSENT)).code).toBe('NOT_YOUR_CANDIDACY');
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOMINATED);
    expect(f.service.candidacy(candidacyId).member).toBeNull();
    expect(thrown(() => f.service.withdraw(candidacyId, 'mallory')).code).toBe('NOT_YOUR_CANDIDACY');
    expect(thrown(() => f.service.withdraw(candidacyId)).code).toBe('NOT_YOUR_CANDIDACY');
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOMINATED);
    expect(f.store.findCandidacyById(candidacyId).disclosures).toEqual({ legalName: 'Name of alice' });
    // And the endorsement trail names no endorser either (FR-037 names only consenting candidates).
    const e1 = f.join('e1');
    f.service.endorseNomination(candidacyId, e1, { residencyRegion: WARD });
    expect(JSON.stringify(f.service.trail(candidacyId))).not.toContain('e1');
  });

  it('consent with any FR-038 fact missing is refused with CONSENT_INCOMPLETE naming the gap', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    const err = thrown(() => f.service.recordConsent(candidacyId, 'alice', { identityBecomesPublic: true, irreversibleForTerm: true }));
    expect(err.code).toBe('CONSENT_INCOMPLETE');
    expect(err.missing).toEqual(['revocableOnlyByWithdrawalBeforeLock']);
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOMINATED);
  });

  it('consent takes no verifier and calls no seam — it is a disclosure step, not a counting action', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    const spy = vi.spyOn(f.verifier, 'verifyEligibility');
    spy.mockClear();
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    expect(spy).not.toHaveBeenCalled();
    expect(CandidateService.prototype.recordConsent.toString().split(')')[0]).not.toMatch(/verifier/i);
  });

  it('consent is recorded once — a second attempt is refused', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    expect(thrown(() => f.service.recordConsent(candidacyId, 'alice', CONSENT)).code).toBe('NOT_AWAITING_CONSENT');
  });

  it('withdrawing BEFORE the nomination window closes destroys the disclosures, and the trail says so without ever containing them', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    const r = f.service.withdraw(candidacyId, 'alice');
    expect(r).toEqual({ stage: CANDIDACY_STAGE.WITHDRAWN, disclosuresDestroyed: true });
    expect(f.service.candidacy(candidacyId).disclosures).toBeNull();
    expect(f.store.findCandidacyById(candidacyId).disclosures).toBeNull();
    const trail = f.service.trail(candidacyId);
    expect(trail.at(-1)).toMatchObject({ type: 'WITHDRAWN', disclosuresDestroyed: true });
    expect(JSON.stringify(trail)).not.toContain('Name of alice');
  });

  it('withdrawing AFTER the window closes but before the ballot locks is allowed, and the disclosures STAND — consent is irrevocable for the term', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    f.setClock(T0 + 8 * DAY);
    const r = f.service.withdraw(candidacyId, 'alice');
    expect(r.disclosuresDestroyed).toBe(false);
    expect(f.service.candidacy(candidacyId).disclosures).toEqual({ legalName: 'Name of alice' });
  });

  it('after the ballot locks, withdrawal is refused with BALLOT_LOCKED', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.setClock(T0 + 31 * DAY);
    expect(thrown(() => f.service.withdraw(candidacyId, 'alice')).code).toBe('BALLOT_LOCKED');
  });

  it('the store has exactly one delete, and it is the confidential-class carve-out (FR-107, OI-16)', () => {
    const names = Object.getOwnPropertyNames(InMemoryCandidateStore.prototype).filter((n) => /delete|destroy|remove|purge/i.test(n));
    expect(names).toEqual(['destroyDisclosures']);
  });
});

// ─── UT-0898 three debates, attendance on the record, nothing proceeds without them (FR-066) ─

describe('UT-0898 three debates are scheduled and attested before the member vote can open; an absence is visible and blocks (FR-066)', () => {
  it('debates cannot be scheduled before consent, nor before the published minimum of endorsements', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    expect(thrown(() => f.service.scheduleDebates(candidacyId)).code).toBe('CONSENT_REQUIRED');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    const err = thrown(() => f.service.scheduleDebates(candidacyId));
    expect(err.code).toBe('ENDORSEMENTS_SHORT');
    expect(err.required).toBe(NOMINATION_ENDORSEMENTS_MIN);
  });

  it('scheduling creates exactly the three FR-066 topics, unheld', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    f.endorseToMinimum(candidacyId);
    const r = f.service.scheduleDebates(candidacyId);
    expect(r.stage).toBe(CANDIDACY_STAGE.DEBATING);
    expect(r.debates.map((d) => d.topic).sort()).toEqual([...REQUIRED_DEBATE_TOPICS].sort());
    expect(r.debates.every((d) => d.attended === null)).toBe(true);
  });

  it('two attended debates leave the candidacy DEBATING and the vote cannot open', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    f.endorseToMinimum(candidacyId);
    f.service.scheduleDebates(candidacyId);
    f.service.recordDebate(candidacyId, DEBATE_TOPIC.LOCAL_CONDITIONS, { attended: true, contentRef: 'bafy-1' });
    const r = f.service.recordDebate(candidacyId, DEBATE_TOPIC.LOCAL_PROBLEMS, { attended: true, contentRef: 'bafy-2' });
    expect(r.complete).toBe(false);
    expect(thrown(() => f.service.openPostDebateVote(candidacyId)).code).toBe('DEBATES_INCOMPLETE');
  });

  it('an absence is recorded on the trail, visible in the public view, and keeps the vote from opening', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    f.endorseToMinimum(candidacyId);
    f.service.scheduleDebates(candidacyId);
    f.service.recordDebate(candidacyId, DEBATE_TOPIC.LOCAL_CONDITIONS, { attended: true, contentRef: 'bafy-1' });
    const r = f.service.recordDebate(candidacyId, DEBATE_TOPIC.LOCAL_PROBLEMS, { attended: false });
    f.service.recordDebate(candidacyId, DEBATE_TOPIC.WORK_REQUIRED, { attended: true, contentRef: 'bafy-3' });
    expect(r.absences).toEqual([DEBATE_TOPIC.LOCAL_PROBLEMS]);
    expect(f.service.trail(candidacyId).some((e) => e.type === 'DEBATE_ABSENT' && e.topic === DEBATE_TOPIC.LOCAL_PROBLEMS)).toBe(true);
    expect(f.service.candidacy(candidacyId).debates.find((d) => d.topic === DEBATE_TOPIC.LOCAL_PROBLEMS).attended).toBe(false);
    expect(thrown(() => f.service.openPostDebateVote(candidacyId)).code).toBe('DEBATES_INCOMPLETE');
  });

  it('all three attended, with content references, moves the candidacy to DEBATES_COMPLETE', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.DEBATES_COMPLETE);
    expect(f.service.candidacy(candidacyId).debates.every((d) => d.attended === true && d.contentRef)).toBe(true);
  });

  it('attendance must be attested as a boolean, and an unknown topic is refused', () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    f.endorseToMinimum(candidacyId);
    f.service.scheduleDebates(candidacyId);
    expect(thrown(() => f.service.recordDebate(candidacyId, DEBATE_TOPIC.LOCAL_CONDITIONS, { attended: 'yes' })).code).toBe('ATTENDANCE_REQUIRED');
    expect(thrown(() => f.service.recordDebate(candidacyId, 'FUNDRAISING', { attended: true })).code).toBe('UNKNOWN_TOPIC');
  });
});

// ─── UT-0899 incumbency confers nothing (FR-067, BR-013) ─────────────────────────────

describe('UT-0899 a sitting office-holder gets no automatic candidacy — the same path as everyone, and no method can skip it (FR-067)', () => {
  it('the incumbent nominates through the identical path and is NOMINATED, not PUBLISHED', () => {
    const f = makeFixture();
    f.service.recordOfficeHolder('ward-rep', 'incumbent');
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'incumbent');
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOMINATED);
    expect(f.service.candidateSet(electionId)).toEqual([]);
  });

  it('nominate() and closePostDebateVote() never read the office-holder record — asserted by spy', async () => {
    const f = makeFixture();
    f.service.recordOfficeHolder('ward-rep', 'incumbent');
    const spy = vi.spyOn(f.store, 'officeHolder');
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'incumbent');
    f.completeDebates(candidacyId, 'incumbent');
    f.service.openPostDebateVote(candidacyId);
    // ISS-02: the spy must cover the PUBLICATION step, not stop one call short of it — and
    // (cycle-2 L4) the PUBLISHED branch itself must execute under the spy, so cast one yes.
    const voter = f.verify(f.join('voter-for-incumbent'));
    await f.service.castPostDebateVote(candidacyId, voter, POST_DEBATE_CHOICE.SUITABLE, f.verifier, f.ballots);
    const r = await f.service.closePostDebateVote(candidacyId, f.ballots);
    expect(r.stage).toBe(CANDIDACY_STAGE.PUBLISHED);
    expect(spy).not.toHaveBeenCalled();
  });

  it('capability absence: no method or parameter mentions incumbent, renominate, override or skip', () => {
    const names = Object.getOwnPropertyNames(CandidateService.prototype);
    expect(names.some((n) => /incumben|renominat|override|skip|approve|reject|rank/i.test(n))).toBe(false);
    const closeParams = CandidateService.prototype.closePostDebateVote.toString().split(')')[0];
    expect(closeParams).not.toMatch(/override|force|outcome|result/i);
  });

  it('the candidate set is empty until a net-positive vote closes — there is no other way onto the ballot', async () => {
    const f = makeFixture();
    f.service.recordOfficeHolder('ward-rep', 'incumbent');
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'incumbent');
    f.completeDebates(candidacyId, 'incumbent');
    expect(f.service.candidateSet(electionId)).toEqual([]);
    f.service.openPostDebateVote(candidacyId);
    expect(f.service.candidateSet(electionId)).toEqual([]);
    // Nobody voted → not net positive → not on the ballot, incumbent or not.
    const r = await f.service.closePostDebateVote(candidacyId, f.ballots);
    expect(r.stage).toBe(CANDIDACY_STAGE.NOT_ADVANCED);
    expect(f.service.candidateSet(electionId)).toEqual([]);
  });
});

// ─── UT-0900 feedback: +3/−1, once per member per candidate, aggregate only (FR-065) ───

describe('UT-0900 one feedback vote per member per candidate per election, scored +3/−1, and only the aggregate is readable (FR-065, ADR-015)', () => {
  const setup = () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.service.recordConsent(candidacyId, 'alice', CONSENT);
    return { f, electionId, candidacyId };
  };

  it('an upvote adds 3 and a downvote subtracts 1', () => {
    const { f, candidacyId } = setup();
    const v1 = f.verify(f.join('v1'));
    const v2 = f.verify(f.join('v2'));
    expect(f.service.castFeedback(candidacyId, v1, FEEDBACK.UPVOTE, f.verifier)).toEqual({ score: 3, upvotes: 1, downvotes: 0 });
    expect(f.service.castFeedback(candidacyId, v2, FEEDBACK.DOWNVOTE, f.verifier)).toEqual({ score: 2, upvotes: 1, downvotes: 1 });
  });

  it('a second feedback vote from the same member is REFUSED, not overwritten', () => {
    const { f, candidacyId } = setup();
    const v1 = f.verify(f.join('v1'));
    f.service.castFeedback(candidacyId, v1, FEEDBACK.UPVOTE, f.verifier);
    expect(thrown(() => f.service.castFeedback(candidacyId, v1, FEEDBACK.DOWNVOTE, f.verifier)).code).toBe('ALREADY_GAVE_FEEDBACK');
    expect(f.service.feedbackTally(candidacyId)).toEqual({ score: 3, upvotes: 1, downvotes: 0 });
  });

  it('the candidate cannot give feedback on themselves; an open-tier member is refused; a fresh joiner is refused', () => {
    const { f, candidacyId } = setup();
    expect(thrown(() => f.service.castFeedback(candidacyId, 'alice', FEEDBACK.UPVOTE, f.verifier)).code).toBe('SELF_VOTE');
    const open = f.join('open-tier');
    expect(thrown(() => f.service.castFeedback(candidacyId, open, FEEDBACK.UPVOTE, f.verifier)).code).toBe('NOT_COUNTING_ELIGIBLE');
    const fresh = f.verify(f.joinFresh('fresh'));
    expect(thrown(() => f.service.castFeedback(candidacyId, fresh, FEEDBACK.UPVOTE, f.verifier)).code).toBe('NOT_MATURED');
  });

  it('no read returns a caster: the aggregate, the public view and the trail carry no pseudonym of anyone who gave feedback', () => {
    const { f, candidacyId } = setup();
    const v1 = f.verify(f.join('secret-voter-1'));
    f.service.castFeedback(candidacyId, v1, FEEDBACK.UPVOTE, f.verifier);
    expect(JSON.stringify(f.service.feedbackTally(candidacyId))).not.toContain('secret-voter-1');
    expect(JSON.stringify(f.service.candidacy(candidacyId))).not.toContain('secret-voter-1');
    expect(JSON.stringify(f.service.trail(candidacyId))).not.toContain('secret-voter-1');
  });

  it('feedbackTally() takes no verifier and calls no seam', () => {
    const { f, candidacyId } = setup();
    const spy = vi.spyOn(f.verifier, 'verifyEligibility');
    spy.mockClear();
    f.service.feedbackTally(candidacyId);
    expect(spy).not.toHaveBeenCalled();
    expect(CandidateService.prototype.feedbackTally.toString().split(')')[0]).not.toMatch(/verifier/i);
  });
});

// ─── UT-0901 the post-debate vote decides, through IBallotService (FR-067, FR-081, DES-096) ─

describe('UT-0901 the post-debate member vote is cast through IBallotService and its tally alone decides the candidacy (FR-067, FR-081)', () => {
  it('a vote asks the seam with scope BINDING_VOTE and then casts through the ballot service — this service stores no ballot', async () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    f.service.openPostDebateVote(candidacyId);
    const voter = f.verify(f.join('voter-1'));
    const verifySpy = vi.spyOn(f.verifier, 'verifyEligibility');
    const castSpy = vi.spyOn(f.ballots, 'castBallot');
    const receipt = await f.service.castPostDebateVote(candidacyId, voter, POST_DEBATE_CHOICE.SUITABLE, f.verifier, f.ballots);
    expect(verifySpy).toHaveBeenCalledWith(voter, WARD, COUNTING_ACTION.BINDING_VOTE);
    expect(castSpy).toHaveBeenCalledTimes(1);
    expect(receipt.electionId).toBe(`pdv:${candidacyId}`);
    // ISS-03: JSON.stringify renders a Map as {} — walk Maps and Sets explicitly so the check
    // cannot pass vacuously, and prove it bites by finding the ballot where it DOES live.
    const dump = (v) => JSON.stringify(v, (_k, x) => (x instanceof Map ? [...x.entries()] : x instanceof Set ? [...x] : x));
    expect(dump(f.store)).not.toContain('SUITABLE');
    expect(dump(f.ballots._ballots)).toContain('SUITABLE');
  });

  it('net positive → PUBLISHED and on the candidate set; the trail records the tally and result hash', async () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    f.service.openPostDebateVote(candidacyId);
    for (const [who, choice] of [['v1', 'SUITABLE'], ['v2', 'SUITABLE'], ['v3', 'NOT_SUITABLE']]) {
      await f.service.castPostDebateVote(candidacyId, f.verify(f.join(who)), choice, f.verifier, f.ballots);
    }
    const r = await f.service.closePostDebateVote(candidacyId, f.ballots);
    expect(r.stage).toBe(CANDIDACY_STAGE.PUBLISHED);
    expect(r.tally).toEqual({ SUITABLE: 2, NOT_SUITABLE: 1 });
    expect(f.service.candidateSet(electionId).map((c) => c.member)).toEqual(['alice']);
    expect(f.service.trail(candidacyId).at(-1)).toMatchObject({ type: 'POST_DEBATE_VOTE_CLOSED', tally: { SUITABLE: 2, NOT_SUITABLE: 1 } });
    expect(typeof r.resultHash).toBe('string');
  });

  it('a tie → NOT_ADVANCED; the record stands and the candidate is not on the ballot', async () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    f.service.openPostDebateVote(candidacyId);
    await f.service.castPostDebateVote(candidacyId, f.verify(f.join('v1')), POST_DEBATE_CHOICE.SUITABLE, f.verifier, f.ballots);
    await f.service.castPostDebateVote(candidacyId, f.verify(f.join('v2')), POST_DEBATE_CHOICE.NOT_SUITABLE, f.verifier, f.ballots);
    const r = await f.service.closePostDebateVote(candidacyId, f.ballots);
    expect(r.stage).toBe(CANDIDACY_STAGE.NOT_ADVANCED);
    expect(f.service.candidateSet(electionId)).toEqual([]);
    expect(f.service.candidacy(candidacyId).stage).toBe(CANDIDACY_STAGE.NOT_ADVANCED);
  });

  it('the candidate cannot vote on their own suitability; an open-tier member is refused before the ballot service is reached', async () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    f.service.openPostDebateVote(candidacyId);
    expect((await rejected(f.service.castPostDebateVote(candidacyId, 'alice', POST_DEBATE_CHOICE.SUITABLE, f.verifier, f.ballots))).code).toBe('SELF_VOTE');
    const open = f.join('open');
    const castSpy = vi.spyOn(f.ballots, 'castBallot');
    expect((await rejected(f.service.castPostDebateVote(candidacyId, open, POST_DEBATE_CHOICE.SUITABLE, f.verifier, f.ballots))).code).toBe('NOT_COUNTING_ELIGIBLE');
    expect(castSpy).not.toHaveBeenCalled();
  });

  it('once the ballot has locked the candidate set cannot change: closing a vote is refused (FR-039)', async () => {
    const f = makeFixture();
    const electionId = f.openElection();
    const candidacyId = f.stand(electionId, 'alice');
    f.completeDebates(candidacyId);
    f.service.openPostDebateVote(candidacyId);
    f.setClock(T0 + 31 * DAY);
    f.service.lockBallot(electionId);
    expect((await rejected(f.service.closePostDebateVote(candidacyId, f.ballots))).code).toBe('BALLOT_LOCKED');
  });

  it('the timetable is published before the election opens and cannot be changed afterwards — there is no update method (FR-039)', () => {
    const f = makeFixture();
    expect(thrown(() => f.openElection({ nominationClosesAt: T0 - 1 })).code).toBe('INVALID_TIMETABLE');
    expect(thrown(() => f.openElection({ ballotLocksAt: T0 + 1 })).code).toBe('INVALID_TIMETABLE');
    expect(thrown(() => f.openElection({ officeRegion: 'IN/MH/MUM' })).code).toBe('OFFICE_OUTSIDE_JURISDICTION');
    const names = Object.getOwnPropertyNames(CandidateService.prototype);
    expect(names.some((n) => /updateTimetable|setTimetable|changeTimetable|reschedule|extend/i.test(n))).toBe(false);
    expect(thrown(() => f.service.lockBallot(f.openElection())).code).toBe('TOO_EARLY');
  });
});

// ─── UT-0902 IS_INSECURE_MOCK discipline for the new seam components (Doc 06 §2.1) ────

describe('UT-0902 the in-memory candidate store and the service it backs are marked IS_INSECURE_MOCK (Doc 06 §2.1, §10.13.4)', () => {
  it('the in-memory store returns true and the service delegates to it', () => {
    const f = makeFixture();
    expect(f.store.IS_INSECURE_MOCK()).toBe(true);
    expect(f.service.IS_INSECURE_MOCK()).toBe(true);
  });

  it('a store that is not a mock makes the service not a mock — the service adds no trust of its own', () => {
    const honest = { IS_INSECURE_MOCK: () => false };
    const service = new CandidateService(honest, {}, () => T0);
    expect(service.IS_INSECURE_MOCK()).toBe(false);
  });

  it('the service holds no verifier and no ballot service — both are per-call, so reads cannot reach them', () => {
    const f = makeFixture();
    expect(f.service._verifier).toBeUndefined();
    expect(f.service._ballots).toBeUndefined();
    expect(f.service._ballotService).toBeUndefined();
  });
});
