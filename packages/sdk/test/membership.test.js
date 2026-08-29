/**
 * UT-0819..UT-0830 — join/membership flow: PartyCreationService membership model.
 *
 * Traces: FR-020 (join without permission), FR-021/FR-022 (equal standing,
 *         leave at will), FR-064 (one active party at a time), FR-122/FR-123
 *         (join ≠ counting; verification gates counting, never joining),
 *         FR-130 (provisional cap at join; Ruling 1 2026-08-26 UNCONDITIONAL),
 *         FR-131 clause (d) data path, BR-003, DES-095 §10.13.2(a).
 *
 * Test invariants:
 *  - joinParty()/leaveParty() NEVER call verifyEligibility() — asserted by spy;
 *    the service holds no verifier (structural FR-020 guarantee).
 *  - contributeToStrength() is the ONLY seam call site, with scope
 *    STRENGTH_CONTRIBUTION — asserted by spy.
 *  - Membership history is append-only: leave never deletes; rejoin adds rows.
 *  - The FR-130 cap counts ACTIVE members and binds at the 100/101 boundary.
 *  - All clocks are injected; no Date.now() in tests (§2.6).
 */
import { describe, it, expect, vi } from 'vitest';

import { InMemoryPartyStore, PartyCreationService } from '../src/party-creation.js';
import {
  COUNTING_ACTION,
  ConventionalEligibilityVerifier,
  StubPhoneVerifier,
  StubIdDocumentChecker,
} from '../src/eligibility.js';
import {
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  PROVISIONAL_MEMBER_CAP,
  petitionThreshold,
} from '@trumocracy/protocol';

// ─── Fixtures ──────────────────────────────────────────────────────────────────

const T0 = 1_800_000_000; // fixed base clock — no wall clock

const goodPillar = (label) => `Our position on ${label}. `.repeat(30);
const goodPillars = Object.fromEntries(PILLARS.map((p) => [p, goodPillar(p)]));

const goodDraft = (overrides = {}) => ({
  name: 'Commons Forward',
  jurisdiction: 'IN/KA',
  pillars: { ...goodPillars },
  emblem: 'CF',
  charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
  jurisdictionPopulation: 1_000,
  jurisdictionVerified: 1_000,
  ...overrides,
});

/** Build a service + store pair with a mutable injected clock. */
function makeService(clockTime = T0) {
  const store = new InMemoryPartyStore();
  let t = clockTime;
  const clock = () => t;
  const setClock = (next) => {
    t = next;
  };
  const service = new PartyCreationService(store, clock);
  return { store, clock, setClock, service };
}

/** Seed a petition's endorsements to exactly the activation threshold. */
function seedThresholdMet(store, petitionId) {
  const petition = store.findPetitionById(petitionId);
  const required = petitionThreshold({
    eligiblePopulation: petition.jurisdictionPopulation ?? 0,
    verifiedResidents: petition.jurisdictionVerified ?? 0,
    thresholdBps: petition.charter?.petitionThresholdBps,
  });
  store.updatePetition(petitionId, { endorsements: required });
}

/** Create and activate a party; returns its id. */
function activatedParty(service, store, overrides = {}) {
  const { draftId } = service.createDraft(goodDraft(overrides), `drafter-${overrides.name ?? 'cf'}`);
  const { petitionId } = service.publishDraft(draftId);
  seedThresholdMet(store, petitionId);
  const { partyId } = service.activateParty(petitionId);
  return partyId;
}

/** A stub-backed conventional verifier with an injectable credential store. */
function makeVerifier(credentialStore = new Map()) {
  return new ConventionalEligibilityVerifier({
    phoneVerifier: new StubPhoneVerifier(),
    idDocumentChecker: new StubIdDocumentChecker(),
    credentialStore,
  });
}

/** Credential-store row that passes the v1 counting check (DES-100 allowlist shape). */
const verifiedCredential = {
  id_verified_flag: true,
  age_verified: true,
  issuing_region: 'IN',
  subject_id_hash: 'test-subject-hash',
  verified_at: '2026-08-26T00:00:00Z',
};

// ─── UT-0819 join without permission (FR-020) ─────────────────────────────────

describe('UT-0819 anyone may join an active party — no approval path exists (FR-020)', () => {
  it('any account joins on request; the result is immediate membership', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    const result = service.joinParty(partyId, 'member-1');
    expect(result.memberCount).toBe(1);
    expect(result.joinedAt).toBe(T0);
    expect(service.activeMembership('member-1')).toEqual({ partyId, joinedAt: T0 });
  });

  it('joinParty exposes no approval, sponsorship, fee, or veto parameter', () => {
    const { service } = makeService();
    // The method arity is the contract: (partyId, memberPseudonym) and nothing else.
    expect(service.joinParty.length).toBe(2);
  });
});

// ─── UT-0820 join/leave never touch the eligibility seam (FR-020 structural) ──

describe('UT-0820 join and leave NEVER call verifyEligibility (FR-020, §10.13.2)', () => {
  it('a spied verifier in scope is untouched by joinParty and leaveParty', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    const verifier = makeVerifier();
    const spy = vi.spyOn(verifier, 'verifyEligibility');

    service.joinParty(partyId, 'member-1');
    service.leaveParty(partyId, 'member-1');

    expect(spy).not.toHaveBeenCalled();
    // Structural guarantee: the service holds no verifier at all.
    expect(typeof service.verifyEligibility).toBe('undefined');
    expect(typeof service._verifier).toBe('undefined');
    expect(typeof service._store.verifyEligibility).toBe('undefined');
  });
});

// ─── UT-0821 one active party at a time (FR-064 invariant) ────────────────────

describe('UT-0821 one active party at a time — second join refused until explicit leave', () => {
  it('joining party B while a member of party A is refused, naming party A', () => {
    const { service, store } = makeService();
    const partyA = activatedParty(service, store, { name: 'Party Alpha', emblem: 'PA' });
    const partyB = activatedParty(service, store, { name: 'Party Beta', emblem: 'PB' });

    service.joinParty(partyA, 'member-1');
    let thrown;
    try {
      service.joinParty(partyB, 'member-1');
    } catch (e) {
      thrown = e;
    }
    expect(thrown.code).toBe('ALREADY_MEMBER_ELSEWHERE');
    expect(thrown.currentPartyId).toBe(partyA);
    expect(thrown.message).toContain('explicit, recorded action');
  });

  it('after an explicit leave, joining the second party succeeds', () => {
    const { service, store } = makeService();
    const partyA = activatedParty(service, store, { name: 'Party Alpha', emblem: 'PA' });
    const partyB = activatedParty(service, store, { name: 'Party Beta', emblem: 'PB' });

    service.joinParty(partyA, 'member-1');
    service.leaveParty(partyA, 'member-1');
    const result = service.joinParty(partyB, 'member-1');
    expect(result.memberCount).toBe(1);
    expect(service.activeMembership('member-1').partyId).toBe(partyB);
  });
});

// ─── UT-0822 double join of the same party (FR-064 invariant) ─────────────────

describe('UT-0822 a double join of the same party is refused (ALREADY_MEMBER)', () => {
  it('the second join throws ALREADY_MEMBER and does not inflate the member count', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    expect(() => service.joinParty(partyId, 'member-1')).toThrow(
      expect.objectContaining({ code: 'ALREADY_MEMBER' }),
    );
    // The double join must not have inflated the member count.
    expect(service.partyStatus(partyId).memberCount).toBe(1);
  });
});

// ─── UT-0823 leave at will (FR-022) ──────────────────────────────────────────

describe('UT-0823 leaving takes immediate effect with no exit approval (FR-022)', () => {
  it('leave succeeds immediately and the member count drops', () => {
    const { service, store, setClock } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    setClock(T0 + 100);
    const result = service.leaveParty(partyId, 'member-1');
    expect(result.leftAt).toBe(T0 + 100);
    expect(result.memberCount).toBe(0);
    expect(service.activeMembership('member-1')).toBeNull();
  });

  it('leaveParty exposes no approval parameter and refuses only non-members', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    expect(service.leaveParty.length).toBe(2);
    expect(() => service.leaveParty(partyId, 'stranger')).toThrow(
      expect.objectContaining({ code: 'NOT_A_MEMBER' }),
    );
  });
});

// ─── UT-0824 membership history is append-only, shown active/inactive ────────

describe('UT-0824 membership history is append-only — leaving is never deletion', () => {
  it('join → leave → rejoin yields two rows: one inactive with leftAt, one active', () => {
    const { service, store, setClock } = makeService();
    const partyId = activatedParty(service, store);

    service.joinParty(partyId, 'member-1');
    setClock(T0 + 100);
    service.leaveParty(partyId, 'member-1');
    setClock(T0 + 200);
    service.joinParty(partyId, 'member-1');

    const history = service.membershipHistory('member-1');
    expect(history).toEqual([
      { partyId, joinedAt: T0, leftAt: T0 + 100, active: false },
      { partyId, joinedAt: T0 + 200, leftAt: null, active: true },
    ]);
  });

  it('history spans parties and is never trimmed by later actions', () => {
    const { service, store, setClock } = makeService();
    const partyA = activatedParty(service, store, { name: 'Party Alpha', emblem: 'PA' });
    const partyB = activatedParty(service, store, { name: 'Party Beta', emblem: 'PB' });

    service.joinParty(partyA, 'member-1');
    setClock(T0 + 10);
    service.leaveParty(partyA, 'member-1');
    setClock(T0 + 20);
    service.joinParty(partyB, 'member-1');

    const history = service.membershipHistory('member-1');
    expect(history).toHaveLength(2);
    expect(history[0]).toMatchObject({ partyId: partyA, active: false });
    expect(history[1]).toMatchObject({ partyId: partyB, active: true });
  });

  it('the store exposes no method that deletes or rewrites a membership event', () => {
    const store = new InMemoryPartyStore();
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(store));
    const mutators = methods.filter((m) => /delete|remove|clear|rewrite/i.test(m));
    expect(mutators).toEqual([]);
  });

  it('getMembershipEvents returns copies — mutating them does not touch the log', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    const events = store.getMembershipEvents('member-1');
    events[0].action = 'TAMPERED';
    expect(store.getMembershipEvents('member-1')[0].action).toBe('JOIN');
  });
});

// ─── UT-0825 FR-130 cap at join — the 100/101 boundary on ACTIVE members ─────

describe('UT-0825 FR-130 provisional cap binds at the 100/101 boundary of ACTIVE members', () => {
  it('member 100 joins; member 101 is refused; a leave frees the slot', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);

    for (let i = 1; i < PROVISIONAL_MEMBER_CAP; i++) {
      service.joinParty(partyId, `member-${i}`);
    }
    // Member 100 — exactly at the cap — joins.
    expect(service.joinParty(partyId, 'member-100').memberCount).toBe(PROVISIONAL_MEMBER_CAP);
    // Member 101 is refused. Unconditional — Ruling 1, 2026-08-26: no grace.
    expect(() => service.joinParty(partyId, 'member-101')).toThrow(
      expect.objectContaining({ code: 'PROVISIONAL_CAP_REACHED' }),
    );
    // The cap counts ACTIVE members: one leave frees exactly one slot.
    service.leaveParty(partyId, 'member-50');
    expect(service.joinParty(partyId, 'member-101').memberCount).toBe(PROVISIONAL_MEMBER_CAP);
  });
});

// ─── UT-0826 contributeToStrength — the FR-123(a) counting gate ──────────────

describe('UT-0826 official strength counts verified members only (FR-123)', () => {
  it('an open-tier member (no ID verification) is refused with the honest reason', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-open');
    const verifier = makeVerifier(); // empty credential store — open tier

    let thrown;
    try {
      service.contributeToStrength(partyId, 'member-open', verifier);
    } catch (e) {
      thrown = e;
    }
    expect(thrown.code).toBe('NOT_COUNTING_ELIGIBLE');
    expect(thrown.reason).toContain('government-ID');
    // The refused member is STILL a member — joining is not revoked by the gate.
    expect(service.countingStatus(partyId, 'member-open')).toEqual({
      member: true,
      counted: false,
    });
    expect(service.partyStatus(partyId).memberCount).toBe(1);
    expect(service.partyStatus(partyId).officialStrength).toBe(0);
  });

  it('a verified member is counted once; a repeat is refused (ALREADY_COUNTED)', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-verified');
    const credentials = new Map([['member-verified', verifiedCredential]]);
    const verifier = makeVerifier(credentials);

    const result = service.contributeToStrength(partyId, 'member-verified', verifier);
    expect(result.officialStrength).toBe(1);
    expect(() => service.contributeToStrength(partyId, 'member-verified', verifier)).toThrow(
      expect.objectContaining({ code: 'ALREADY_COUNTED' }),
    );
    expect(service.partyStatus(partyId).officialStrength).toBe(1);
  });

  it('a non-member is refused regardless of verification (strength counts members)', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    const credentials = new Map([['verified-stranger', verifiedCredential]]);
    const verifier = makeVerifier(credentials);
    expect(() => service.contributeToStrength(partyId, 'verified-stranger', verifier)).toThrow(
      expect.objectContaining({ code: 'NOT_A_MEMBER' }),
    );
  });

  it('memberCount and officialStrength diverge honestly: 3 joined, 1 counted', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    service.joinParty(partyId, 'member-2');
    service.joinParty(partyId, 'member-3');
    const credentials = new Map([['member-2', verifiedCredential]]);
    const verifier = makeVerifier(credentials);
    service.contributeToStrength(partyId, 'member-2', verifier);

    const status = service.partyStatus(partyId);
    expect(status.memberCount).toBe(3);
    expect(status.officialStrength).toBe(1);
  });
});

// ─── UT-0827 leaving ends the strength contribution, not the history ─────────

describe('UT-0827 a counted member who leaves stops counting; history remains', () => {
  it('strength drops on leave; a rejoin does not silently re-count', () => {
    const { service, store, setClock } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    const credentials = new Map([['member-1', verifiedCredential]]);
    const verifier = makeVerifier(credentials);
    service.contributeToStrength(partyId, 'member-1', verifier);
    expect(service.partyStatus(partyId).officialStrength).toBe(1);

    setClock(T0 + 100);
    service.leaveParty(partyId, 'member-1');
    expect(service.partyStatus(partyId).officialStrength).toBe(0);

    setClock(T0 + 200);
    service.joinParty(partyId, 'member-1');
    // Rejoining restores membership, not the counted status.
    expect(service.countingStatus(partyId, 'member-1')).toEqual({
      member: true,
      counted: false,
    });
    // The full history is still there.
    expect(service.membershipHistory('member-1')).toHaveLength(2);
  });
});

// ─── UT-0828 the seam is called with the normative scope, only at counting ───

describe('UT-0828 contributeToStrength calls the seam with STRENGTH_CONTRIBUTION only', () => {
  it('the verifier receives scope COUNTING_ACTION.STRENGTH_CONTRIBUTION and the party jurisdiction', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    service.joinParty(partyId, 'member-1');
    const verifier = makeVerifier(new Map([['member-1', verifiedCredential]]));
    const spy = vi.spyOn(verifier, 'verifyEligibility');

    service.contributeToStrength(partyId, 'member-1', verifier);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      'member-1',
      'IN/KA',
      COUNTING_ACTION.STRENGTH_CONTRIBUTION,
    );
  });
});

// ─── UT-0829 determinism — injected clock stamps join/leave ──────────────────

describe('UT-0829 joinedAt/leftAt come from the injected clock (§2.6)', () => {
  it('same clock → same history; no wall clock anywhere', () => {
    const run = () => {
      const { service, store, setClock } = makeService();
      const partyId = activatedParty(service, store);
      service.joinParty(partyId, 'member-1');
      setClock(T0 + 42);
      service.leaveParty(partyId, 'member-1');
      return service.membershipHistory('member-1');
    };
    expect(run()).toEqual(run());
  });
});

// ─── UT-0830 countingStatus is a read — it never calls the seam ──────────────

describe('UT-0830 countingStatus reads recorded state; no verifier involved', () => {
  it('reports non-member, open-tier member, and counted member honestly', () => {
    const { service, store } = makeService();
    const partyId = activatedParty(service, store);
    expect(service.countingStatus(partyId, 'nobody')).toEqual({ member: false, counted: false });

    service.joinParty(partyId, 'member-1');
    expect(service.countingStatus(partyId, 'member-1')).toEqual({ member: true, counted: false });

    const verifier = makeVerifier(new Map([['member-1', verifiedCredential]]));
    service.contributeToStrength(partyId, 'member-1', verifier);
    expect(service.countingStatus(partyId, 'member-1')).toEqual({ member: true, counted: true });
  });

  it('countingStatus takes no verifier parameter', () => {
    const { service } = makeService();
    expect(service.countingStatus.length).toBe(2);
  });
});
