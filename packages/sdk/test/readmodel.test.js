/**
 * UT-2557…UT-2570 — the indexer trust boundary (ADR-014 §1).
 *
 * The indexer is allowed to be slow. It is not allowed to be wrong about a value a citizen
 * is about to act on. These tests assert that the disagreement is *loud* — because a guard
 * that silently prefers one side is indistinguishable from no guard, and a guard that
 * silently prefers the indexer is worse than none at all.
 *
 * Traces: NFR-006, RISK-16, ADR-014, DES-045, FR-034.
 */
import { describe, it, expect, vi } from 'vitest';
import { ReadModel, verified } from '../src/readmodel.js';
import { InvalidArgument, TrustBoundaryViolation } from '../src/errors.js';

const PETITION = `0x${'11'.repeat(32)}`;
const PARTY = `0x${'ab'.repeat(20)}`;
const GOVERNOR = `0x${'cd'.repeat(20)}`;

describe('verified()', () => {
  it('UT-2557 returns the chain value when the indexer agrees', async () => {
    const r = await verified('endorsements', 1200, async () => 1200n);
    expect(r.value).toBe(1200n); // the CHAIN's value, not the indexer's
    expect(r.source).toBe('indexer+chain');
  });

  it('UT-2558 throws TrustBoundaryViolation when the indexer disagrees', async () => {
    await expect(verified('endorsements', 9999, async () => 1200n)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2559 the violation carries both numbers, so a citizen can be told what happened', async () => {
    const err = await verified('endorsements', 9999, async () => 1200n).catch((e) => e);
    expect(err.code).toBe('TRUST_BOUNDARY_VIOLATION');
    expect(err.details).toMatchObject({ label: 'endorsements', indexerValue: 9999, chainValue: 1200n });
  });

  it('UT-2560 tolerates the JSON/bigint boundary — "1200" and 1200n are the same fact', async () => {
    await expect(verified('endorsements', '1200', async () => 1200n)).resolves.toMatchObject({ value: 1200n });
    await expect(verified('flag', true, async () => true)).resolves.toMatchObject({ value: true });
    await expect(verified('addr', '0xAB', async () => '0xab')).resolves.toMatchObject({ value: '0xab' });
  });

  it('UT-2561 degrades to a chain read when the indexer has nothing (fail open on convenience)', async () => {
    const r = await verified('endorsements', undefined, async () => 1200n);
    expect(r).toEqual({ value: 1200n, source: 'chain', verified: true });
  });

  it('UT-2562 cannot be called without a chain reader — an unchecked read is not a read', async () => {
    await expect(verified('endorsements', 1200, null)).rejects.toBeInstanceOf(InvalidArgument);
  });

  it('UT-2563 notifies an observer on violation, for the incident trail', async () => {
    const onViolation = vi.fn();
    await verified('x', 1, async () => 2, { onViolation }).catch(() => {});
    expect(onViolation).toHaveBeenCalledOnce();
  });

  it('UT-2564 compares structured values field by field', async () => {
    await expect(verified('tally', { for: 3, against: 1 }, async () => ({ against: 1n, for: 3n }))).resolves.toBeTruthy();
    await expect(verified('tally', { for: 4, against: 1 }, async () => ({ against: 1n, for: 3n }))).rejects.toBeInstanceOf(
      TrustBoundaryViolation,
    );
  });
});

/** Chain readers that behave; individual tests override what they need to. */
const chainStub = (over = {}) => ({
  petitionEndorsements: async () => 1200n,
  petitionRequired: async () => 2000n,
  requiredEndorsements: async () => 2000n,
  isMemberAt: async () => true,
  tenureAt: async () => 86_400n * 30n,
  proposalTally: async () => ({
    forVotes: 10n,
    againstVotes: 3n,
    abstainVotes: 1n,
    snapshotMembers: 100n,
    votingEndsAt: 1_000n,
    finalized: false,
    succeeded: false,
  }),
  balanceOf: async () => 5n,
  ...over,
});

describe('ReadModel', () => {
  it('UT-2565 works with no indexer at all — the chain alone is sufficient', async () => {
    const rm = new ReadModel({ chain: chainStub() });
    expect(rm.hasIndexer).toBe(false);
    await expect(rm.petitionProgress(PETITION)).resolves.toMatchObject({ endorsements: 1200n, required: 2000n });
  });

  it('UT-2566 refuses to exist without chain readers', () => {
    expect(() => new ReadModel({ indexer: {} })).toThrow(InvalidArgument);
  });

  it('UT-2567 an indexer that inflates a petition count is caught', async () => {
    const rm = new ReadModel({
      chain: chainStub(),
      indexer: { petition: async () => ({ endorsements: 2000, requiredEndorsements: 2000 }) },
    });
    // "It already passed, don't bother" is the cheapest way to suppress a petition.
    await expect(rm.petitionProgress(PETITION)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2568 an indexer that deflates a petition count is caught', async () => {
    const rm = new ReadModel({
      chain: chainStub(),
      indexer: { petition: async () => ({ endorsements: 12, requiredEndorsements: 2000 }) },
    });
    await expect(rm.petitionProgress(PETITION)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2569 an indexer that throws is treated as absent, not as authoritative', async () => {
    const rm = new ReadModel({
      chain: chainStub(),
      indexer: {
        petition: async () => {
          throw new Error('indexer down');
        },
      },
    });
    await expect(rm.petitionProgress(PETITION)).resolves.toMatchObject({ endorsements: 1200n, source: 'chain' });
  });

  it('UT-2570 thresholds come from the chain even when the indexer offers one', async () => {
    const rm = new ReadModel({ chain: chainStub(), indexer: { threshold: async () => 500 } });
    await expect(rm.threshold(PETITION, 200)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2571 eligibility is re-verified at the moment of voting', async () => {
    const rm = new ReadModel({
      chain: chainStub(),
      indexer: { membership: async () => ({ isMember: false, tenureSeconds: 0 }) },
    });
    // An indexer that says "you are not eligible" silently disenfranchises.
    await expect(rm.eligibility(PARTY, 42n, 1000)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2572 treasury balances are re-verified (DES-033)', async () => {
    const rm = new ReadModel({ chain: chainStub(), indexer: { treasuryBalance: async () => 999 } });
    await expect(rm.treasuryBalance(PARTY)).rejects.toBeInstanceOf(TrustBoundaryViolation);
  });

  it('UT-2573 suppresses an interim tally while voting is open (FR-034)', async () => {
    const rm = new ReadModel({ chain: chainStub() });
    const result = await rm.tally(GOVERNOR, 0, { now: 500 });
    expect(result).toMatchObject({ suppressed: true, reason: 'VOTING_OPEN' });
    expect(result.forVotes).toBeUndefined();
  });

  it('UT-2574 releases the tally once voting has closed', async () => {
    const rm = new ReadModel({ chain: chainStub() });
    await expect(rm.tally(GOVERNOR, 0, { now: 2000 })).resolves.toMatchObject({ suppressed: false, forVotes: 10n });
  });

  it('UT-2575 an auditor may ask for the interim count explicitly, and only explicitly', async () => {
    const rm = new ReadModel({ chain: chainStub() });
    await expect(rm.tally(GOVERNOR, 0, { now: 500, allowInterim: true })).resolves.toMatchObject({
      suppressed: false,
      forVotes: 10n,
    });
  });

  it('UT-2576 display-only reads are a separate, named door', async () => {
    const rm = new ReadModel({ chain: chainStub(), indexer: { partyNames: async () => ['Commons Forward'] } });
    await expect(rm.unverifiedDisplayOnly('partyNames')).resolves.toEqual(['Commons Forward']);
  });
});
