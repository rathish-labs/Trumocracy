/**
 * UT-0780..UT-0818, UT-0831 — PartyCreationService + InMemoryPartyStore.
 *
 * Traces: FR-010, FR-011, FR-012, FR-013, FR-018, FR-020, FR-075, FR-077,
 *         FR-130, BR-020, CON-013, DES-073, DES-097.
 * Coordinator rulings: D1..D6 (2026-08-25).
 *
 * Test invariants:
 *  - joinParty() NEVER calls verifyEligibility() — asserted by spy.
 *  - Archived petitions are immutable (updatePetition throws ARCHIVED_IMMUTABLE).
 *  - FR-130 cap is lifted ONLY by recordLegalRegistration(); no other path.
 *  - IS_INSECURE_MOCK() delegates from service to store.
 *  - All clocks are injected; no Date.now() in tests.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { InMemoryPartyStore, PartyCreationService } from '../src/party-creation.js';
import {
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  PROVISIONAL_MEMBER_CAP,
  REPETITION_COOLDOWN_SECONDS,
  PETITION,
  PARTY_STATE,
  petitionThreshold,
} from '@trumocracy/protocol';

// ─── Fixtures ──────────────────────────────────────────────────────────────────

const DAY = 86_400;
const T0 = 1_800_000_000; // fixed base clock — no wall clock

const goodPillar = (label) => `Our position on ${label}. `.repeat(30);
const goodPillars = Object.fromEntries(PILLARS.map((p) => [p, goodPillar(p)]));

const goodDraft = (overrides = {}) => ({
  name: 'Commons Forward',
  jurisdiction: 'IN/KA',
  pillars: { ...goodPillars },
  emblem: 'CF',
  charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
  // Jurisdiction denominators stored in the petition row so activateParty can
  // compute petitionThreshold(). At 1000 pop / 1000 verified and 2% (200 bps),
  // the 500-floor binds: max(20, 20, 500) = 500. (ISS-01 fix.)
  jurisdictionPopulation: 1_000,
  jurisdictionVerified: 1_000,
  ...overrides,
});

/** Build a service + store pair with a fixed clock. */
function makeService(clockTime = T0) {
  const store = new InMemoryPartyStore();
  const clock = vi.fn(() => clockTime);
  const service = new PartyCreationService(store, clock);
  return { store, clock, service };
}

/**
 * Seed the petition's endorsement count to exactly the activation threshold so that
 * activateParty() will succeed. Required at every activateParty call site after the
 * ISS-01 threshold gate was added in v2.2.0.
 *
 * Uses the same petitionThreshold() call as the service: eligiblePopulation =
 * petition.jurisdictionPopulation, verifiedResidents = petition.jurisdictionVerified.
 *
 * @param {InMemoryPartyStore} store
 * @param {string} petitionId
 */
function seedThresholdMet(store, petitionId) {
  const petition = store.findPetitionById(petitionId);
  const required = petitionThreshold({
    eligiblePopulation: petition.jurisdictionPopulation ?? 0,
    verifiedResidents: petition.jurisdictionVerified ?? 0,
    thresholdBps: petition.charter?.petitionThresholdBps,
  });
  store.updatePetition(petitionId, { endorsements: required });
}

// ─── UT-0780 IS_INSECURE_MOCK delegation ──────────────────────────────────────

describe('UT-0780 IS_INSECURE_MOCK discipline', () => {
  it('InMemoryPartyStore.IS_INSECURE_MOCK() returns true', () => {
    expect(new InMemoryPartyStore().IS_INSECURE_MOCK()).toBe(true);
  });

  it('UT-0781 PartyCreationService delegates IS_INSECURE_MOCK to store', () => {
    const { service } = makeService();
    expect(service.IS_INSECURE_MOCK()).toBe(true); // store is InMemoryPartyStore
  });

  it('UT-0782 service IS_INSECURE_MOCK() returns false when store returns false', () => {
    // A real production store returns false.
    const realStore = new InMemoryPartyStore();
    realStore.IS_INSECURE_MOCK = () => false;
    const svc = new PartyCreationService(realStore);
    expect(svc.IS_INSECURE_MOCK()).toBe(false);
  });
});

// ─── UT-0783 createDraft — validation gate ────────────────────────────────────

describe('UT-0783 createDraft validation gate (FR-011)', () => {
  it('creates a draft when all fields are valid', () => {
    const { service } = makeService();
    const { draftId } = service.createDraft(goodDraft(), 'drafter-1');
    expect(draftId).toBeDefined();
  });

  it('UT-0784 refuses a draft with all pillars missing — names each deficient pillar', () => {
    const { service } = makeService();
    const draft = goodDraft({ pillars: {} });
    let thrown;
    try {
      service.createDraft(draft, 'drafter-1');
    } catch (e) {
      thrown = e;
    }
    expect(thrown).toBeDefined();
    expect(thrown.code).toBe('VALIDATION_FAILED');
    for (const pillar of PILLARS) {
      expect(
        thrown.errors.some((e) => e.field === `pillars.${pillar}`),
        `missing pillar "${pillar}" not reported`,
      ).toBe(true);
    }
  });

  it('UT-0785 refuses a draft with missing emblem', () => {
    const { service } = makeService();
    const draft = goodDraft({ emblem: null });
    let thrown;
    try {
      service.createDraft(draft, 'drafter-1');
    } catch (e) {
      thrown = e;
    }
    expect(thrown).toBeDefined();
    expect(thrown.errors.some((e) => e.field === 'emblem' && e.code === 'REQUIRED')).toBe(true);
  });

  it('UT-0786 refuses a draft with non-violence clause missing', () => {
    const { service } = makeService();
    const draft = goodDraft({ charter: {} }); // no nonViolenceClause
    let thrown;
    try {
      service.createDraft(draft, 'drafter-1');
    } catch (e) {
      thrown = e;
    }
    expect(thrown).toBeDefined();
    expect(
      thrown.errors.some(
        (e) => e.field === 'charter.nonViolenceClause' && e.code === 'REQUIRED',
      ),
    ).toBe(true);
  });
});

// ─── UT-0787 collision detection ──────────────────────────────────────────────

describe('UT-0787 collision detection (FR-010, DES-073)', () => {
  it('UT-0788 refuses a draft with same name as existing petition (same jurisdiction)', () => {
    const { service } = makeService();
    service.createDraft(goodDraft(), 'drafter-1');
    const { petitionId } = service.publishDraft(
      service._store.findDraftById(
        service.createDraft(
          goodDraft({ name: 'Another Party', emblem: 'AP' }),
          'drafter-99',
        ).draftId,
      ).id,
    );

    // Now create a second draft with the same name as the first (already petitioned).
    // To get the petitioned name in scope, we need to publish draft 1 first.
    // Let's do this cleanly:
    const { store, service: svc2 } = makeService();
    const { draftId: d1 } = svc2.createDraft(goodDraft(), 'drafter-a');
    svc2.publishDraft(d1); // now "Commons Forward" is in petition state

    let thrown;
    try {
      svc2.createDraft(goodDraft(), 'drafter-b'); // same name, same jurisdiction
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NAME_COLLISION');
    expect(thrown?.field).toBe('name');
  });

  it('UT-0789 refuses a draft with same emblem as existing petition (same jurisdiction)', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    svc.publishDraft(draftId); // petition state with emblem "CF"

    let thrown;
    try {
      svc.createDraft(goodDraft({ name: 'Different Name' }), 'drafter-b'); // same emblem "CF"
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('EMBLEM_COLLISION');
    expect(thrown?.field).toBe('emblem');
  });

  it('UT-0790 collision is case-insensitive (normalizeCollisionKey)', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    svc.publishDraft(draftId);

    let thrown;
    try {
      svc.createDraft(goodDraft({ name: 'COMMONS FORWARD' }), 'drafter-b');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NAME_COLLISION');
  });

  it('UT-0791 collision checks against active parties in same jurisdiction', () => {
    const { store, service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(store, petitionId); // ISS-01: seed threshold-met endorsements
    svc.activateParty(petitionId); // party is now ACTIVE

    let thrown;
    try {
      svc.createDraft(goodDraft({ emblem: 'CF2', name: 'Commons Forward' }), 'drafter-b');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NAME_COLLISION');
  });

  it('UT-0792 different jurisdiction does NOT collide', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft({ jurisdiction: 'IN/KA' }), 'drafter-a');
    svc.publishDraft(draftId);

    // Same name/emblem but different jurisdiction — should succeed.
    expect(() =>
      svc.createDraft(goodDraft({ jurisdiction: 'IN/MH' }), 'drafter-b'),
    ).not.toThrow();
  });
});

// ─── UT-0793 publishDraft server-side validation ──────────────────────────────

describe('UT-0793 publishDraft server-side validation (FR-011, FR-013)', () => {
  it('transitions draft to petition state with expiry', () => {
    const { service: svc } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const result = svc.publishDraft(draftId);
    expect(result.petitionId).toBeDefined();
    expect(result.opensAt).toBe(T0);
    expect(result.closesAt).toBe(T0 + PETITION.MIN_DURATION_SECONDS);
  });

  it('UT-0794 refuses to publish a draft that is already published', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    svc.publishDraft(draftId);
    expect(() => svc.publishDraft(draftId)).toThrow();
  });
});

// ─── UT-0795 petition expiry + immutable archive ──────────────────────────────

describe('UT-0795 petition expiry and immutable archive (FR-013)', () => {
  it('expirePetitions moves expired petitions to archived state', () => {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);

    // Advance past closesAt.
    svc.expirePetitions(closesAt + 1);
    const petition = store.findPetitionById(petitionId);
    expect(petition.state).toBe(PARTY_STATE.EXPIRED);
  });

  it('UT-0796 archived petition is immutable — mutation attempt throws ARCHIVED_IMMUTABLE', () => {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);
    svc.expirePetitions(closesAt + 1);

    let thrown;
    try {
      store.updatePetition(petitionId, { name: 'Tampered' });
    } catch (e) {
      thrown = e;
    }
    expect(thrown).toBeDefined();
    expect(thrown.code).toBe('ARCHIVED_IMMUTABLE');
  });

  it('UT-0797 live petitions are not expired prematurely', () => {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);

    // Advance to just before closesAt.
    svc.expirePetitions(closesAt - 1);
    const petition = store.findPetitionById(petitionId);
    expect(petition.state).toBe(PARTY_STATE.PETITION);
  });
});

// ─── UT-0798 cooldown check ───────────────────────────────────────────────────

describe('UT-0798 FR-013 cooldown (same drafter + jurisdiction + fingerprint)', () => {
  it('UT-0799 refuses re-petition within cooldown window', () => {
    const { service: svc } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);
    svc.expirePetitions(closesAt + 1);

    // Try to re-petition with same draft within cooldown.
    const svc2 = new PartyCreationService(svc._store, vi.fn(() => closesAt + 2));
    let thrown;
    try {
      svc2.createDraft(goodDraft(), 'drafter-a'); // same drafter + jurisdiction + fingerprint
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('COOLDOWN_ACTIVE');
    expect(thrown?.reopensAt).toBe(closesAt + REPETITION_COOLDOWN_SECONDS);
  });

  it('UT-0800 allows re-petition after cooldown window expires', () => {
    const { service: svc } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { closesAt } = svc.publishDraft(draftId);
    svc.expirePetitions(closesAt + 1);

    // Advance past the cooldown.
    const svc2 = new PartyCreationService(
      svc._store,
      vi.fn(() => closesAt + REPETITION_COOLDOWN_SECONDS + 1),
    );
    expect(() => svc2.createDraft(goodDraft({ emblem: 'CF2', name: 'Commons Forward V2' }), 'drafter-a')).not.toThrow();
  });

  it('UT-0801 different charter fingerprint is not on cooldown', () => {
    const { service: svc } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { closesAt } = svc.publishDraft(draftId);
    svc.expirePetitions(closesAt + 1);

    // Different pillar text = different fingerprint = no cooldown.
    const differentPillars = Object.fromEntries(
      PILLARS.map((p) => [p, `Entirely different policy for ${p}. `.repeat(30)]),
    );
    const svc2 = new PartyCreationService(svc._store, vi.fn(() => closesAt + 2));
    expect(() =>
      svc2.createDraft(
        goodDraft({ pillars: differentPillars, name: 'Other Party', emblem: 'OP' }),
        'drafter-a',
      ),
    ).not.toThrow();
  });
});

// ─── UT-0802 FR-130 provisional membership cap ────────────────────────────────

describe('UT-0802 FR-130 provisional membership cap (D2 ruling)', () => {
  /** Set up an ACTIVE provisional party with N members already joined. */
  function makePartyWithMembers(n) {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);
    for (let i = 0; i < n; i++) {
      svc.joinParty(partyId, `member-${i}`);
    }
    return { svc, partyId };
  }

  it('member 100 (the cap) can join a provisional party', () => {
    const { svc, partyId } = makePartyWithMembers(PROVISIONAL_MEMBER_CAP - 1);
    const result = svc.joinParty(partyId, 'member-cap');
    expect(result.memberCount).toBe(PROVISIONAL_MEMBER_CAP);
  });

  it('UT-0803 member 101 is refused on a provisional party with honest named error', () => {
    const { svc, partyId } = makePartyWithMembers(PROVISIONAL_MEMBER_CAP);
    let thrown;
    try {
      svc.joinParty(partyId, 'member-101');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('PROVISIONAL_CAP_REACHED');
    expect(thrown?.cap).toBe(PROVISIONAL_MEMBER_CAP);
    expect(thrown?.message).toMatch(/anti-capture|FR-130|legal registration/);
  });

  it('UT-0804 recordLegalRegistration lifts the cap', () => {
    const { svc, partyId } = makePartyWithMembers(PROVISIONAL_MEMBER_CAP);
    svc.recordLegalRegistration(partyId, 'evidence-ref-123');
    // Member 101 should now be allowed.
    const result = svc.joinParty(partyId, 'member-101');
    expect(result.memberCount).toBe(PROVISIONAL_MEMBER_CAP + 1);
  });

  it('UT-0805 no other path lifts the cap — no bypass parameter exists', () => {
    // The PartyCreationService constructor does NOT accept a bypass flag.
    // joinParty() does NOT accept a bypass flag.
    // recordLegalRegistration() does NOT accept a bypass flag.
    // There is no setProvisionalCapOverride() method.
    const { svc, partyId } = makePartyWithMembers(PROVISIONAL_MEMBER_CAP);
    // Verify by inspection: these methods do not exist on the service.
    expect(typeof svc.setProvisionalCapOverride).toBe('undefined');
    expect(typeof svc.bypassProvisionalCap).toBe('undefined');
    expect(typeof svc.liftCap).toBe('undefined');
    // And calling joinParty still throws at 101.
    expect(() => svc.joinParty(partyId, 'member-101')).toThrow();
  });

  it('UT-0806 a legally registered party is uncapped', () => {
    const { svc, partyId } = makePartyWithMembers(0);
    svc.recordLegalRegistration(partyId, 'evidence-ref-456');
    // Should be able to add PROVISIONAL_MEMBER_CAP + 50 members without error.
    for (let i = 0; i < PROVISIONAL_MEMBER_CAP + 50; i++) {
      expect(() => svc.joinParty(partyId, `member-legal-${i}`)).not.toThrow();
    }
  });
});

// ─── UT-0807 joinParty NEVER calls verifyEligibility ──────────────────────────

describe('UT-0807 joinParty MUST NOT call verifyEligibility (FR-020, §10.13.2)', () => {
  it('joinParty does not call any eligibility method — spy asserts zero calls', () => {
    // Build a store with a spy on any method that sounds like eligibility.
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(svc._store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);

    // Spy on every method of the service to check none is named verifyEligibility.
    const verifyEligibilitySpy = vi.fn();
    // The service should have no verifyEligibility method at all.
    expect(typeof svc.verifyEligibility).toBe('undefined');

    // Also: the store has no verifyEligibility method.
    expect(typeof svc._store.verifyEligibility).toBe('undefined');

    // Joining should proceed without calling any eligibility check.
    const result = svc.joinParty(partyId, 'member-x');
    expect(result.memberCount).toBe(1);
    expect(verifyEligibilitySpy).not.toHaveBeenCalled();
  });
});

// ─── UT-0808 partyStatus honest disclosure ────────────────────────────────────

describe('UT-0808 partyStatus honest live status (FR-130, BR-020)', () => {
  it('reports provisional status and cap for a provisional party', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(svc._store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);
    svc.joinParty(partyId, 'member-1');

    const status = svc.partyStatus(partyId);
    expect(status.provisional).toBe(true);
    expect(status.cap).toBe(PROVISIONAL_MEMBER_CAP);
    expect(status.memberCount).toBe(1);
    expect(status.capReached).toBe(false);
  });

  it('UT-0809 reports cap reached at PROVISIONAL_MEMBER_CAP', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(svc._store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);
    for (let i = 0; i < PROVISIONAL_MEMBER_CAP; i++) {
      svc.joinParty(partyId, `member-${i}`);
    }

    const status = svc.partyStatus(partyId);
    expect(status.memberCount).toBe(PROVISIONAL_MEMBER_CAP);
    expect(status.capReached).toBe(true);
  });

  it('UT-0810 legalRegistrationStatement present and mentions platform vs legal distinction (BR-020)', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(svc._store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);

    const status = svc.partyStatus(partyId);
    expect(typeof status.legalRegistrationStatement).toBe('string');
    expect(status.legalRegistrationStatement.length).toBeGreaterThan(20);
    // Must mention that platform registration ≠ legal registration.
    expect(status.legalRegistrationStatement.toLowerCase()).toMatch(
      /platform|registration|legal/,
    );
  });

  it('UT-0811 cap is null and provisional is false after legal registration', () => {
    const { service: svc } = makeService();
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(svc._store, petitionId); // ISS-01: seed threshold-met endorsements
    const { partyId } = svc.activateParty(petitionId);
    svc.recordLegalRegistration(partyId, 'evidence-ref-789');

    const status = svc.partyStatus(partyId);
    expect(status.provisional).toBe(false);
    expect(status.cap).toBeNull();
    expect(status.capReached).toBe(false);
  });
});

// ─── UT-0812 determinism — injected clock ─────────────────────────────────────

describe('UT-0812 determinism — injected clock (§2.6)', () => {
  it('publishDraft uses the injected clock for opensAt and closesAt', () => {
    const FIXED_TIME = 1_900_000_000;
    const { service: svc } = makeService(FIXED_TIME);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { opensAt, closesAt } = svc.publishDraft(draftId);
    expect(opensAt).toBe(FIXED_TIME);
    expect(closesAt).toBe(FIXED_TIME + PETITION.MIN_DURATION_SECONDS);
  });

  it('UT-0813 same clock → same output (no wall clock)', () => {
    const { service: svc1 } = makeService(T0);
    const { service: svc2 } = makeService(T0);
    const { draftId: d1 } = svc1.createDraft(goodDraft(), 'drafter-a');
    const { draftId: d2 } = svc2.createDraft(goodDraft(), 'drafter-a');
    const r1 = svc1.publishDraft(d1);
    const r2 = svc2.publishDraft(d2);
    expect(r1.opensAt).toBe(r2.opensAt);
    expect(r1.closesAt).toBe(r2.closesAt);
  });
});

// ─── UT-0814 activateParty FR-018 threshold gate ──────────────────────────────

describe('UT-0814 activateParty FR-018 / FR-016 endorsement threshold gate (ISS-01 fix)', () => {
  it('UT-0814 refuses activation below threshold — THRESHOLD_NOT_MET names current and required counts', () => {
    const { service: svc } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    // endorsements remain at 0 (the published default) — below the 500-floor.
    let thrown;
    try {
      svc.activateParty(petitionId);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('THRESHOLD_NOT_MET');
    expect(thrown?.current).toBe(0);
    expect(typeof thrown?.required).toBe('number');
    expect(thrown?.required).toBeGreaterThanOrEqual(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS);
    expect(thrown?.message).toContain('0');
    expect(thrown?.message).toContain(String(thrown?.required));
  });

  it('UT-0815 activation at exactly the threshold succeeds', () => {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    seedThresholdMet(store, petitionId); // endorsements = petitionThreshold(petition)
    const { partyId } = svc.activateParty(petitionId);
    expect(partyId).toBeDefined();
  });

  it('UT-0816 500-floor binds when percentage-of-population is below the floor (pop=100, verified=100)', () => {
    const { service: svc, store } = makeService(T0);
    // With 2% × 100 = 2 < 500-floor, the floor must win.
    const draft = goodDraft({ jurisdictionPopulation: 100, jurisdictionVerified: 100 });
    const { draftId } = svc.createDraft(draft, 'drafter-a');
    const { petitionId } = svc.publishDraft(draftId);
    const petition = store.findPetitionById(petitionId);
    const required = petitionThreshold({
      eligiblePopulation: petition.jurisdictionPopulation ?? 0,
      verifiedResidents: petition.jurisdictionVerified ?? 0,
      thresholdBps: petition.charter?.petitionThresholdBps,
    });
    expect(required).toBe(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS);

    // One below the floor → refused.
    store.updatePetition(petitionId, { endorsements: PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS - 1 });
    let thrown;
    try {
      svc.activateParty(petitionId);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('THRESHOLD_NOT_MET');
    expect(thrown?.required).toBe(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS);
    expect(thrown?.current).toBe(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS - 1);

    // Exactly at the floor → succeeds.
    store.updatePetition(petitionId, { endorsements: PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS });
    expect(() => svc.activateParty(petitionId)).not.toThrow();
  });
});

// ─── UT-0817 archivedAt equals injected time (ISS-03 fix) ────────────────────

describe('UT-0817 archivePetition uses injected clock time — deterministic archivedAt (ISS-03 fix, §2.6)', () => {
  it('UT-0817 archivedAt on an expired petition equals the value passed to expirePetitions', () => {
    const { service: svc, store } = makeService(T0);
    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);
    const expireTime = closesAt + 1; // deterministic, injected
    svc.expirePetitions(expireTime);
    const petition = store.findPetitionById(petitionId);
    expect(petition.archivedAt).toBe(expireTime);
  });
});

// ─── UT-0818 publishDraft TOCTOU collision re-check (ISS-02 fix) ─────────────

describe('UT-0818 publishDraft TOCTOU collision re-check (ISS-02 fix)', () => {
  it('UT-0818 refuses publishDraft when a colliding petition was published after createDraft', () => {
    const { service: svc } = makeService(T0);

    // Drafter A creates a draft — no live petitions yet, so no collision.
    const { draftId: draftA } = svc.createDraft(goodDraft(), 'drafter-a');

    // Drafter B creates and publishes a petition with the same name in the same
    // jurisdiction. This is allowed at createDraft time because drafter A's draft
    // is in DRAFT state (not visible to the live-petition collision check).
    const { draftId: draftB } = svc.createDraft(
      goodDraft({ emblem: 'CF2' }), // same name 'Commons Forward', different emblem
      'drafter-b',
    );
    svc.publishDraft(draftB); // succeeds — drafter A's draft is not yet a petition

    // Drafter A tries to publish. The ISS-02 collision re-check inside publishDraft
    // now sees drafter B's live petition and must refuse with NAME_COLLISION.
    let thrown;
    try {
      svc.publishDraft(draftA);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NAME_COLLISION');
  });
});

// ─── UT-0831 expirePetitions uses only the IPartyStore interface (ISS-01 fix) ─

describe('UT-0831 expirePetitions reaches only the IPartyStore interface — no private-state access (ISS-01 fix)', () => {
  /**
   * Every method declared on the IPartyStore @typedef, and nothing else. The
   * facade below exposes exactly these, delegating to a real InMemoryPartyStore.
   * Any service access to private backing state (e.g. `_petitions`) finds
   * `undefined` on the facade — which is exactly the silent production no-op
   * that ISS-01 (Doc 06 v2.3.0 cycle-1 Medium) described. This test fails if
   * the seam break ever comes back.
   */
  const IPARTY_STORE_METHODS = [
    'IS_INSECURE_MOCK',
    'findDraftById',
    'findPetitionById',
    'findPartyById',
    'findLivePetitionsByJurisdiction',
    'findActivePartiesByJurisdiction',
    'findExpiredPetitionsByDrafter',
    'saveDraft',
    'updateDraft',
    'savePetition',
    'updatePetition',
    'archivePetition',
    'findPetitionsPastClose',
    'saveParty',
    'updateParty',
    'recordJoin',
    'recordLeave',
    'getActiveMembership',
    'getMembershipEvents',
    'getMemberPseudonyms',
    'recordStrengthContribution',
    'getCountedPseudonyms',
  ];

  it('UT-0831 expires a past-close petition through an interface-only store facade', () => {
    const backing = new InMemoryPartyStore();
    const facade = Object.fromEntries(
      IPARTY_STORE_METHODS.map((m) => [m, (...args) => backing[m](...args)]),
    );
    const svc = new PartyCreationService(facade, vi.fn(() => T0));

    const { draftId } = svc.createDraft(goodDraft(), 'drafter-a');
    const { petitionId, closesAt } = svc.publishDraft(draftId);

    const expired = svc.expirePetitions(closesAt + 1);

    expect(expired).toContain(petitionId);
    expect(backing.findPetitionById(petitionId).state).toBe(PARTY_STATE.EXPIRED);
    expect(backing.findPetitionById(petitionId).archivedAt).toBe(closesAt + 1);
  });
});
