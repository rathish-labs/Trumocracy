/**
 * UT-2577…UT-2588 — outcome prediction agrees with `@trumocracy/protocol`.
 *
 * `@trumocracy/protocol` is the reference implementation the contracts are differentially
 * tested against (DES-045). The point of `predict.js` is that the UI never gets a second
 * opinion, so these tests assert *agreement with the reference*, not agreement with a
 * number someone typed into a test.
 *
 * Traces: FR-016, FR-025, FR-028, NFR-021, DES-010, DES-016, DES-019, ADR-008.
 */
import { describe, it, expect } from 'vitest';
import {
  TIER,
  PETITION,
  petitionThreshold,
  petitionOutcome,
  effectiveRules,
  tally as protocolTally,
  isEligible,
} from '@trumocracy/protocol';
import {
  predictPetition,
  predictThreshold,
  predictRules,
  predictOutcome,
  predictEligibility,
  predictSchedule,
  predictFork,
  predictAnonymityScope,
  petitionView,
  validateVision,
} from '../src/predict.js';

const NOW = 1_800_000_000;

describe('petition prediction', () => {
  const base = { endorsements: 750, required: 2000, opensAt: NOW - 86_400, closesAt: NOW + 86_400 * 10 };

  it('UT-2577 delegates the state machine to the protocol reference', () => {
    const mine = predictPetition({ ...base, now: NOW });
    const reference = petitionOutcome({ ...base, now: NOW });
    expect(mine.state).toBe(reference.state);
    expect(mine.met).toBe(reference.met);
    expect(mine.remaining).toBe(reference.remaining);
  });

  it('UT-2578 computes a percentage the UI can render without arithmetic of its own', () => {
    expect(predictPetition({ ...base, now: NOW }).percent).toBe(37);
    expect(predictPetition({ ...base, endorsements: 0, now: NOW }).percent).toBe(0);
  });

  it('UT-2579 caps the bar at 100% when a petition overshoots', () => {
    // A 140% progress bar is a rendering bug that makes the whole screen look untrustworthy.
    expect(predictPetition({ ...base, endorsements: 2800, now: NOW }).percent).toBe(100);
  });

  it('UT-2580 accepts bigints straight from the chain', () => {
    const view = predictPetition({
      endorsements: 750n,
      required: 2000n,
      opensAt: BigInt(NOW - 10),
      closesAt: BigInt(NOW + 10),
      now: NOW,
    });
    expect(view.remaining).toBe(1250);
  });

  it('UT-2581 reports an expired petition once its window closes short', () => {
    expect(predictPetition({ ...base, closesAt: NOW - 1, now: NOW }).state).toBe('expired');
  });

  it('UT-2582 petitionView adds the human time remaining', () => {
    const v = petitionView({ ...base, closesAt: NOW + 86_400 * 2 + 3600 * 5, now: NOW });
    expect(v).toMatchObject({ daysRemaining: 2, hoursRemaining: 5 });
  });
});

describe('threshold prediction', () => {
  it('UT-2583 matches the protocol threshold formula exactly', () => {
    const args = { eligiblePopulation: 1_000_000, verifiedResidents: 12_000, thresholdBps: 200 };
    expect(predictThreshold(args).required).toBe(petitionThreshold(args));
  });

  it('UT-2584 names which term is binding, including the absolute floor', () => {
    // The floor is the reason corrupting the population oracle downward buys nothing
    // (RISK-12) — so the UI has to be able to say "the 500-supporter floor applies here".
    expect(predictThreshold({ eligiblePopulation: 100, verifiedResidents: 50 })).toMatchObject({
      required: PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS,
      binding: 'absolute-floor',
    });
    expect(predictThreshold({ eligiblePopulation: 1_000_000, verifiedResidents: 10 }).binding).toBe('population');
    expect(predictThreshold({ eligiblePopulation: 10, verifiedResidents: 1_000_000 }).binding).toBe(
      'verified-residents',
    );
  });
});

describe('governance prediction', () => {
  it('UT-2585 resolves the effective rules through the protocol reference', () => {
    expect(predictRules({ tier: TIER.STRUCTURAL })).toEqual(effectiveRules(TIER.STRUCTURAL, {}, false));
  });

  it('UT-2586 applies the growth-surge penalty to structural decisions only', () => {
    const history = [
      { timestamp: NOW - 86_400 * 20, memberCount: 1000 },
      { timestamp: NOW - 86_400, memberCount: 5000 },
    ];
    const structural = predictRules({ tier: TIER.STRUCTURAL, growthHistory: history, now: NOW });
    const policy = predictRules({ tier: TIER.POLICY, growthHistory: history, now: NOW });
    expect(structural.surgeApplied).toBe(true);
    expect(structural.approvalBps).toBe(effectiveRules(TIER.STRUCTURAL, {}, false).approvalBps + 500);
    // Operational and policy life must keep working during genuine viral growth (ADR-008 §3).
    expect(policy.surgeApplied).toBe(false);
  });

  it('UT-2587 predicts an outcome identically to the reference tally', () => {
    const rules = predictRules({ tier: TIER.POLICY });
    const args = { forVotes: 60, againstVotes: 30, abstainVotes: 10, snapshotMembers: 500, rules };
    const mine = predictOutcome(args);
    const reference = protocolTally(args);
    expect(mine.passed).toBe(reference.passed);
    expect(mine.reason).toBe(reference.reason);
    expect(mine.quorumBps).toBe(reference.quorumBps);
  });

  it('UT-2588 tells a member how many more votes quorum needs', () => {
    const rules = predictRules({ tier: TIER.POLICY }); // quorum 10%
    const result = predictOutcome({ forVotes: 20, againstVotes: 5, snapshotMembers: 1000, rules });
    expect(result.reason).toBe('QUORUM_NOT_MET');
    expect(result.votesNeededForQuorum).toBe(75);
  });

  it('UT-2589 eligibility is binary and snapshot-bound, never weighted', () => {
    const rules = predictRules({ tier: TIER.POLICY }); // 14-day tenure
    const snapshotAt = NOW;
    const eligible = predictEligibility({ joinedAt: NOW - 86_400 * 30, snapshotAt, rules });
    expect(eligible).toEqual(isEligible({ joinedAt: NOW - 86_400 * 30, snapshotAt, leftAt: null, rules }));
    expect(eligible.weight).toBe(1);

    // Joining after the snapshot confers nothing (DES-019).
    expect(predictEligibility({ joinedAt: NOW + 10, snapshotAt, rules }).reason).toBe('JOINED_AFTER_SNAPSHOT');
  });

  it('UT-2590 "not yet" comes with the date, because it is a different answer from "no"', () => {
    const rules = predictRules({ tier: TIER.POLICY });
    const joinedAt = NOW - 86_400 * 3;
    const verdict = predictEligibility({ joinedAt, snapshotAt: NOW, rules });
    expect(verdict.reason).toBe('TENURE_TOO_SHORT');
    expect(verdict.eligibleFrom).toBe(joinedAt + rules.minTenureSeconds);
  });

  it('UT-2591 treats leftAt=0 from the chain as "has not left"', () => {
    const rules = predictRules({ tier: TIER.OPERATIONAL });
    expect(predictEligibility({ joinedAt: NOW - 100, snapshotAt: NOW, leftAt: 0n, rules }).eligible).toBe(true);
  });

  it('UT-2592 lays out the proposal schedule from the tier rules', () => {
    const rules = predictRules({ tier: TIER.CONSTITUTIONAL });
    const s = predictSchedule({ createdAt: NOW, rules });
    expect(s.discussionEndsAt).toBe(NOW + rules.discussionSeconds);
    expect(s.votingEndsAt).toBe(s.discussionEndsAt + rules.minVotingSeconds);
    expect(s.executableAt).toBe(s.votingEndsAt + rules.timelockSeconds);
  });
});

describe('fork and anonymity prediction', () => {
  it('UT-2593 a fork needs 10% of members and then 30 days', () => {
    const initiatedAt = NOW - 86_400 * 10;
    expect(predictFork({ initiators: 50, memberCount: 1000, initiatedAt, now: NOW }).reason).toBe(
      'INSUFFICIENT_INITIATORS',
    );
    expect(predictFork({ initiators: 150, memberCount: 1000, initiatedAt, now: NOW }).reason).toBe('COOLING_OFF');
    expect(predictFork({ initiators: 150, memberCount: 1000, initiatedAt: NOW - 86_400 * 31, now: NOW }).allowed).toBe(
      true,
    );
  });

  it('UT-2594 escalates a thin ward to the nearest ancestor that clears k ≥ 1000', () => {
    const counts = { 'IN/KA/BLR/BLR-S/W-152': 40, 'IN/KA/BLR/BLR-S': 300, 'IN/KA/BLR': 40_000, 'IN/KA': 9e6, IN: 9e8 };
    expect(predictAnonymityScope('IN/KA/BLR/BLR-S/W-152', (p) => counts[p])).toEqual({
      regionPath: 'IN/KA/BLR',
      escalated: true,
      size: 40_000,
    });
  });

  it('UT-2595 returns null when even the country is too thin — the action must not publish', () => {
    expect(predictAnonymityScope('IN/KA', () => 5)).toBeNull();
  });
});

describe('vision validation is the protocol\'s, not the UI\'s', () => {
  it('UT-2596 re-exports validateVision so a form cannot invent its own rules', () => {
    const result = validateVision({ name: '', jurisdiction: 'nope', pillars: {} });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'pillars.finance')).toBe(true);
  });
});
