/**
 * UT-0760..UT-0779 — ADR-024 seams: IEligibilityVerifier (DES-095) and IBallotService (DES-096).
 *
 * These tests verify the runtime contracts of the v1/v2 abstraction seams:
 *   - The counting-tier gate: verifyEligibility() throws NotACountingAction for any scope
 *     that is not a COUNTING_ACTION (including SCOPE_LABEL.JOIN / SCOPE_LABEL.LEAVE).
 *   - The first-write-wins nullifier behaviour of isUniqueInScope().
 *   - getProperties() / getTallyProperties() exact shapes.
 *   - IS_INSECURE_MOCK() delegation: stub-backed → true; real-backed → false.
 *   - castBallot() refuses without a valid eligibilityRef.
 *   - changeBallot() last-ballot-counts semantics.
 *   - computeTally() correctness on a small fixture.
 *   - DES-100 allowlist discipline: StubIdDocumentChecker result contains ONLY the six
 *     allowlist fields.
 *
 * Traces: DES-095, DES-096, DES-097, DES-100, ADR-024, ADR-025, FR-020, FR-122, FR-123,
 *         FR-131, FR-132, FR-133.
 */
import { describe, it, expect, beforeEach } from 'vitest';

import {
  COUNTING_ACTION,
  NotACountingAction,
  StubPhoneVerifier,
  StubIdDocumentChecker,
  ConventionalEligibilityVerifier,
} from '../src/eligibility.js';
import { ConventionalBallotService } from '../src/ballot.js';
import { SCOPE_LABEL } from '../src/identity.js';

// ─── Helpers ──────────────────────────────────────────────────────────────────────

/**
 * Build a stub-backed ConventionalEligibilityVerifier for testing.
 * The credential store is pre-populated with an id_verified_flag for the given memberId.
 *
 * @param {string} [memberId='member-1']
 * @param {boolean} [idVerified=true]
 */
function makeVerifier(memberId = 'member-1', idVerified = true) {
  const credentialStore = new Map();
  if (idVerified) {
    credentialStore.set(memberId, {
      id_verified_flag: true,
      age_verified: true,
      issuing_region: 'IN',
      subject_id_hash: 'test-subject-hash',
      verified_at: '2026-08-24T10:00:00.000Z',
    });
  }
  return new ConventionalEligibilityVerifier({
    phoneVerifier: new StubPhoneVerifier(),
    idDocumentChecker: new StubIdDocumentChecker(),
    credentialStore,
  });
}

// ─── COUNTING_ACTION enum ─────────────────────────────────────────────────────────

describe('UT-0760 COUNTING_ACTION enum has exactly the three FR-123 actions', () => {
  it('exposes STRENGTH_CONTRIBUTION, BINDING_VOTE, and CANDIDACY', () => {
    expect(COUNTING_ACTION.STRENGTH_CONTRIBUTION).toBe('STRENGTH_CONTRIBUTION');
    expect(COUNTING_ACTION.BINDING_VOTE).toBe('BINDING_VOTE');
    expect(COUNTING_ACTION.CANDIDACY).toBe('CANDIDACY');
    expect(Object.keys(COUNTING_ACTION)).toHaveLength(3);
  });

  it('is frozen — callers cannot add or change enum values', () => {
    const original = COUNTING_ACTION.BINDING_VOTE;
    try { COUNTING_ACTION.BINDING_VOTE = 'tampered'; } catch (_) { /* strict mode */ }
    expect(COUNTING_ACTION.BINDING_VOTE).toBe(original);
  });
});

// ─── Counting-tier gate — NotACountingAction ──────────────────────────────────────

describe('UT-0761 verifyEligibility() enforces the counting-tier gate at runtime', () => {
  it('throws NotACountingAction for SCOPE_LABEL.JOIN (ADR-024 amendment rule)', () => {
    const verifier = makeVerifier();
    expect(() => verifier.verifyEligibility('member-1', 'IN', SCOPE_LABEL.JOIN))
      .toThrow(NotACountingAction);
  });

  it('UT-0762 throws NotACountingAction for SCOPE_LABEL.LEAVE', () => {
    const verifier = makeVerifier();
    expect(() => verifier.verifyEligibility('member-1', 'IN', SCOPE_LABEL.LEAVE))
      .toThrow(NotACountingAction);
  });

  it('UT-0763 throws NotACountingAction for an account-creation scope string', () => {
    const verifier = makeVerifier();
    for (const badScope of ['account-creation', 'signup', 'register', 'join', 'leave', '']) {
      expect(() => verifier.verifyEligibility('member-1', 'IN', badScope))
        .toThrow(NotACountingAction);
    }
  });

  it('UT-0764 the NotACountingAction error message cites FR-020/FR-122/FR-123', () => {
    const verifier = makeVerifier();
    let caught;
    try { verifier.verifyEligibility('member-1', 'IN', 'join'); } catch (e) { caught = e; }
    expect(caught).toBeInstanceOf(NotACountingAction);
    expect(caught.message).toMatch(/FR-020/);
    expect(caught.message).toMatch(/FR-122/);
    expect(caught.message).toMatch(/FR-123/);
    expect(caught.message).toMatch(/counting, never joining/i);
  });

  it('UT-0765 accepts STRENGTH_CONTRIBUTION without throwing', () => {
    const verifier = makeVerifier();
    const result = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.STRENGTH_CONTRIBUTION);
    expect(result.eligible).toBe(true);
  });

  it('UT-0766 accepts BINDING_VOTE without throwing', () => {
    const verifier = makeVerifier();
    const result = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.BINDING_VOTE);
    expect(result.eligible).toBe(true);
  });

  it('UT-0767 accepts CANDIDACY without throwing', () => {
    const verifier = makeVerifier();
    const result = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.CANDIDACY);
    expect(result.eligible).toBe(true);
  });

  it('UT-0768 returns ineligible (not an error) when id_verified_flag is missing', () => {
    const verifier = makeVerifier('member-unverified', false);
    const result = verifier.verifyEligibility('member-unverified', 'IN', COUNTING_ACTION.BINDING_VOTE);
    expect(result.eligible).toBe(false);
    expect(result.reason).toMatch(/id_verified_flag/);
  });
});

// ─── First-write-wins nullifier ───────────────────────────────────────────────────

describe('UT-0769 isUniqueInScope() first-write-wins nullifier', () => {
  it('returns true on first use and false on subsequent uses', () => {
    const verifier = makeVerifier();
    const first = verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE);
    const second = verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE);
    const third = verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE);
    expect(first).toBe(true);
    expect(second).toBe(false);
    expect(third).toBe(false);
  });

  it('treats different scopes as independent nullifiers', () => {
    const verifier = makeVerifier();
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE)).toBe(true);
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.STRENGTH_CONTRIBUTION)).toBe(true);
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.CANDIDACY)).toBe(true);
    // Second call for each scope is false
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE)).toBe(false);
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.STRENGTH_CONTRIBUTION)).toBe(false);
  });

  it('treats different members as independent per scope', () => {
    const verifier = makeVerifier();
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE)).toBe(true);
    expect(verifier.isUniqueInScope('member-2', COUNTING_ACTION.BINDING_VOTE)).toBe(true);
    expect(verifier.isUniqueInScope('member-1', COUNTING_ACTION.BINDING_VOTE)).toBe(false);
    expect(verifier.isUniqueInScope('member-2', COUNTING_ACTION.BINDING_VOTE)).toBe(false);
  });
});

// ─── getProperties() exact shape ─────────────────────────────────────────────────

describe('UT-0770 getProperties() returns the exact v1 shape (all false, Doc 03 §10.13.2)', () => {
  it('declares onePersonOneVote = false', () => {
    const props = makeVerifier().getProperties();
    expect(props.onePersonOneVote).toBe(false);
  });

  it('declares subpoenaResistant = false', () => {
    expect(makeVerifier().getProperties().subpoenaResistant).toBe(false);
  });

  it('declares unlinkable = false', () => {
    expect(makeVerifier().getProperties().unlinkable).toBe(false);
  });

  it('declares anonymityFloor = false', () => {
    expect(makeVerifier().getProperties().anonymityFloor).toBe(false);
  });

  it('has exactly the four expected property keys', () => {
    const props = makeVerifier().getProperties();
    expect(Object.keys(props).sort()).toEqual(
      ['anonymityFloor', 'onePersonOneVote', 'subpoenaResistant', 'unlinkable'].sort(),
    );
  });
});

// ─── IS_INSECURE_MOCK() delegation ───────────────────────────────────────────────

describe('UT-0771 IS_INSECURE_MOCK() delegation: stub-backed → true; real-backed → false', () => {
  it('StubPhoneVerifier.IS_INSECURE_MOCK() returns true', () => {
    expect(new StubPhoneVerifier().IS_INSECURE_MOCK()).toBe(true);
  });

  it('StubIdDocumentChecker.IS_INSECURE_MOCK() returns true', () => {
    expect(new StubIdDocumentChecker().IS_INSECURE_MOCK()).toBe(true);
  });

  it('ConventionalEligibilityVerifier with both stubs → IS_INSECURE_MOCK() = true', () => {
    expect(makeVerifier().IS_INSECURE_MOCK()).toBe(true);
  });

  it('ConventionalEligibilityVerifier with real-backed deps → IS_INSECURE_MOCK() = false', () => {
    // Simulate a genuine vendor integration: both return IS_INSECURE_MOCK() = false.
    const realPhone = { IS_INSECURE_MOCK: () => false };
    const realId    = { IS_INSECURE_MOCK: () => false };
    const verifier = new ConventionalEligibilityVerifier({
      phoneVerifier: realPhone,
      idDocumentChecker: realId,
      credentialStore: new Map(),
    });
    expect(verifier.IS_INSECURE_MOCK()).toBe(false);
  });

  it('ConventionalEligibilityVerifier with one stub → IS_INSECURE_MOCK() = true (any mock → true)', () => {
    const realPhone = { IS_INSECURE_MOCK: () => false };
    const verifier = new ConventionalEligibilityVerifier({
      phoneVerifier: realPhone,           // real
      idDocumentChecker: new StubIdDocumentChecker(), // stub
      credentialStore: new Map(),
    });
    expect(verifier.IS_INSECURE_MOCK()).toBe(true);
  });
});

// ─── DES-100 allowlist discipline ─────────────────────────────────────────────────

describe('UT-0772 DES-100 allowlist: StubIdDocumentChecker result has only the six allowlist fields', () => {
  it('the stub result object has exactly the six DES-100 allowlist keys', async () => {
    const checker = new StubIdDocumentChecker();
    const result = await checker.checkDocument({});

    // Allowlist (Doc 03 §10.13.9; ADR-025 §(e) Q-1):
    const ALLOWLIST = [
      'id_verified_flag',
      'age_verified',
      'issuing_region',
      'subject_id_hash',
      'verified_at',
    ].sort();

    expect(Object.keys(result).sort()).toEqual(ALLOWLIST);
  });

  it('the stub result contains NONE of the denylist fields', async () => {
    const checker = new StubIdDocumentChecker();
    const result = await checker.checkDocument({});
    const denylist = [
      'name', 'date_of_birth', 'document_number', 'expiry_date',
      'raw_subject_id', 'biometric_template', 'selfie_frame',
      'document_image', 'verification_id',
    ];
    for (const field of denylist) {
      expect(result).not.toHaveProperty(field);
    }
  });
});

// ─── IBallotService — castBallot ─────────────────────────────────────────────────

describe('UT-0773 castBallot() refuses without a valid eligibilityRef', () => {
  let verifier;
  let service;

  beforeEach(() => {
    verifier = makeVerifier();
    service = new ConventionalBallotService({ eligibilityVerifier: verifier });
  });

  it('throws when eligibilityRef is null', async () => {
    await expect(service.castBallot('election-1', 'for', 'member-1', null))
      .rejects.toThrow(/eligibilityRef/);
  });

  it('throws when eligibilityRef.eligible is false', async () => {
    const ineligible = { eligible: false, memberId: 'member-1', scope: COUNTING_ACTION.BINDING_VOTE, reason: 'not verified' };
    await expect(service.castBallot('election-1', 'for', 'member-1', ineligible))
      .rejects.toThrow(/eligibilityRef/);
  });

  it('succeeds with a valid eligibilityRef from verifyEligibility()', async () => {
    const ref = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.BINDING_VOTE);
    const receipt = await service.castBallot('election-1', 'for', 'member-1', ref);
    expect(receipt.choice).toBe('for');
    expect(receipt.electionId).toBe('election-1');
    expect(receipt.memberId).toBe('member-1');
    expect(receipt.messageHash).toBeTruthy();
    expect(receipt.timestamp).toBeTruthy();
  });
});

// ─── IBallotService — changeBallot ───────────────────────────────────────────────

describe('UT-0774 changeBallot() last-ballot-counts semantics', () => {
  it('overrides a prior ballot and returns the new choice', async () => {
    const verifier = makeVerifier();
    const service = new ConventionalBallotService({ eligibilityVerifier: verifier });
    const ref = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.BINDING_VOTE);

    await service.castBallot('election-1', 'for', 'member-1', ref);
    const changed = await service.changeBallot('election-1', 'against', 'member-1');
    expect(changed.choice).toBe('against');
  });

  it('UT-0775 last vote counts in the tally after a change', async () => {
    const verifier = makeVerifier();
    const service = new ConventionalBallotService({ eligibilityVerifier: verifier });
    const ref = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.BINDING_VOTE);

    await service.castBallot('election-2', 'for', 'member-1', ref);
    await service.changeBallot('election-2', 'against', 'member-1');
    const tally = await service.computeTally('election-2');
    // Only the last choice (against) should count.
    expect(tally.result['against']).toBe(1);
    expect(tally.result['for']).toBeUndefined();
  });

  it('throws when no ballot exists to change', async () => {
    const verifier = makeVerifier();
    const service = new ConventionalBallotService({ eligibilityVerifier: verifier });
    await expect(service.changeBallot('election-99', 'for', 'member-1'))
      .rejects.toThrow(/no ballot found/);
  });
});

// ─── IBallotService — computeTally correctness ───────────────────────────────────

describe('UT-0776 computeTally() correctness on a small fixture', () => {
  it('aggregates votes correctly for a three-way election', async () => {
    // Set up a verifier with three pre-verified members.
    const credentialStore = new Map([
      ['alice', { id_verified_flag: true, age_verified: true, issuing_region: 'IN', subject_id_hash: 'h1', verified_at: '2026-08-24T10:00:00Z' }],
      ['bob',   { id_verified_flag: true, age_verified: true, issuing_region: 'IN', subject_id_hash: 'h2', verified_at: '2026-08-24T10:00:00Z' }],
      ['carol', { id_verified_flag: true, age_verified: true, issuing_region: 'IN', subject_id_hash: 'h3', verified_at: '2026-08-24T10:00:00Z' }],
    ]);
    const verifier = new ConventionalEligibilityVerifier({
      phoneVerifier: new StubPhoneVerifier(),
      idDocumentChecker: new StubIdDocumentChecker(),
      credentialStore,
    });
    const service = new ConventionalBallotService({ eligibilityVerifier: verifier });

    const aliceRef = verifier.verifyEligibility('alice', 'IN', COUNTING_ACTION.BINDING_VOTE);
    const bobRef   = verifier.verifyEligibility('bob',   'IN', COUNTING_ACTION.BINDING_VOTE);
    const carolRef = verifier.verifyEligibility('carol', 'IN', COUNTING_ACTION.BINDING_VOTE);

    await service.castBallot('election-3', 'for',     'alice', aliceRef);
    await service.castBallot('election-3', 'for',     'bob',   bobRef);
    await service.castBallot('election-3', 'against', 'carol', carolRef);

    const tally = await service.computeTally('election-3');
    expect(tally.result['for']).toBe(2);
    expect(tally.result['against']).toBe(1);
    expect(tally.result['abstain']).toBeUndefined();
  });

  it('returns a resultHash, evidence, and publicationPath in the tally result', async () => {
    const verifier = makeVerifier();
    const service  = new ConventionalBallotService({ eligibilityVerifier: verifier });
    const ref = verifier.verifyEligibility('member-1', 'IN', COUNTING_ACTION.BINDING_VOTE);
    await service.castBallot('election-4', 'for', 'member-1', ref);
    const tally = await service.computeTally('election-4');

    expect(tally.resultHash).toBeTruthy();
    expect(tally.resultHash).toMatch(/^[0-9a-f]{64}$/); // SHA-256 hex
    expect(tally.evidence).toBe('conventional-sql-aggregate');
    expect(tally.publicationPath).toMatch(/PENDING-audit-contract-wiring/);
  });
});

// ─── getTallyProperties() exact shape ────────────────────────────────────────────

describe('UT-0777 getTallyProperties() returns the exact v1 shape (Doc 03 §10.13.3)', () => {
  it('returns exactly the four expected property keys with the correct v1 values', () => {
    const service = new ConventionalBallotService({ eligibilityVerifier: makeVerifier() });
    const props = service.getTallyProperties();
    expect(props).toEqual({
      receiptFree: false,
      coercionOverride: false,
      zeroKnowledge: false,
      publiclyVerifiable: true,
    });
    expect(Object.keys(props).sort()).toEqual(
      ['coercionOverride', 'publiclyVerifiable', 'receiptFree', 'zeroKnowledge'].sort(),
    );
  });
});

// ─── IBallotService — IS_INSECURE_MOCK() delegation ──────────────────────────────

describe('UT-0778 ConventionalBallotService.IS_INSECURE_MOCK() delegates to the eligibility verifier', () => {
  it('returns true when the eligibility verifier is stub-backed', () => {
    const service = new ConventionalBallotService({ eligibilityVerifier: makeVerifier() });
    expect(service.IS_INSECURE_MOCK()).toBe(true);
  });

  it('UT-0779 returns false when the eligibility verifier has real backing', () => {
    const realVerifier = {
      IS_INSECURE_MOCK: () => false,
      verifyEligibility: () => ({ eligible: true, memberId: 'x', scope: COUNTING_ACTION.BINDING_VOTE }),
    };
    const service = new ConventionalBallotService({ eligibilityVerifier: realVerifier });
    expect(service.IS_INSECURE_MOCK()).toBe(false);
  });
});
