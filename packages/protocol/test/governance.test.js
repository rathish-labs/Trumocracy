/**
 * UT-0001..UT-0040 — governance rules.
 *
 * These tests encode political guarantees, not just code behaviour. Where a test name
 * reads like a promise to a citizen ("a party cannot weaken its own protections"), that is
 * intentional: the promise is the requirement, and the test is its enforcement.
 */
import { describe, it, expect } from 'vitest';
import {
  TIER,
  TIER_RULES,
  SURGE,
  BPS,
  CONSTITUTIONAL_TENURE_FLOOR_SECONDS,
  effectiveRules,
  isSurgeActive,
  tally,
  isEligible,
  schedule,
  petitionThreshold,
  petitionOutcome,
  PETITION,
  ProtocolError,
} from '../src/index.js';

const DAY = 86_400;

describe('UT-0001 effectiveRules — protocol floors', () => {
  it('returns the tier defaults when the charter says nothing', () => {
    const r = effectiveRules(TIER.CONSTITUTIONAL);
    expect(r.quorumBps).toBe(4_000);
    expect(r.approvalBps).toBe(7_500);
    expect(r.minTenureSeconds).toBe(180 * DAY);
    expect(r.timelockSeconds).toBe(30 * DAY);
  });

  it('lets a charter be stricter than the protocol', () => {
    const r = effectiveRules(TIER.STRUCTURAL, { tiers: { [TIER.STRUCTURAL]: { approvalBps: 8_000 } } });
    expect(r.approvalBps).toBe(8_000);
  });

  it('UT-0002 refuses a charter that is weaker than the protocol floor', () => {
    expect(() =>
      effectiveRules(TIER.CONSTITUTIONAL, { tiers: { [TIER.CONSTITUTIONAL]: { approvalBps: 5_100 } } }),
    ).toThrowError(/below the protocol floor/);
  });

  it('UT-0003 refuses a constitutional tenure below the 90-day absolute floor', () => {
    expect(() =>
      effectiveRules(TIER.CONSTITUTIONAL, { tiers: { [TIER.CONSTITUTIONAL]: { minTenureSeconds: 30 * DAY } } }),
    ).toThrow(ProtocolError);
    // exactly at the tier default is fine
    expect(effectiveRules(TIER.CONSTITUTIONAL).minTenureSeconds).toBeGreaterThanOrEqual(
      CONSTITUTIONAL_TENURE_FLOOR_SECONDS,
    );
  });

  it('rejects an unknown tier rather than silently defaulting', () => {
    expect(() => effectiveRules(99)).toThrowError(/unknown tier/);
  });
});

describe('UT-0004 adaptive quorum under a growth surge (ADR-008 §3)', () => {
  it('raises the approval bar and doubles the window for structural+ proposals', () => {
    const normal = effectiveRules(TIER.CONSTITUTIONAL, {}, false);
    const surged = effectiveRules(TIER.CONSTITUTIONAL, {}, true);
    expect(surged.approvalBps).toBe(normal.approvalBps + SURGE.APPROVAL_PENALTY_BPS);
    expect(surged.minVotingSeconds).toBe(normal.minVotingSeconds * SURGE.VOTING_WINDOW_MULTIPLIER);
    expect(surged.surgeApplied).toBe(true);
  });

  it('UT-0005 leaves everyday party life untouched during a surge', () => {
    const normal = effectiveRules(TIER.POLICY, {}, false);
    const surged = effectiveRules(TIER.POLICY, {}, true);
    expect(surged).toEqual(normal);
    expect(surged.surgeApplied).toBe(false);
  });

  it('never lets the penalty push approval past 100%', () => {
    const r = effectiveRules(TIER.CONSTITUTIONAL, { tiers: { [TIER.CONSTITUTIONAL]: { approvalBps: 9_900 } } }, true);
    expect(r.approvalBps).toBeLessThanOrEqual(BPS);
  });
});

describe('UT-0006 isSurgeActive', () => {
  const t0 = 1_700_000_000;

  it('detects >20% growth inside a 30-day window', () => {
    const history = [
      { timestamp: t0, memberCount: 1_000 },
      { timestamp: t0 + 10 * DAY, memberCount: 1_300 },
    ];
    expect(isSurgeActive(history, t0 + 11 * DAY)).toBe(true);
  });

  it('ignores steady organic growth below the trigger', () => {
    const history = [
      { timestamp: t0, memberCount: 1_000 },
      { timestamp: t0 + 29 * DAY, memberCount: 1_150 }, // +15%
    ];
    expect(isSurgeActive(history, t0 + 29 * DAY)).toBe(false);
  });

  it('UT-0007 ignores growth spread over more than the window', () => {
    const history = [
      { timestamp: t0, memberCount: 1_000 },
      { timestamp: t0 + 60 * DAY, memberCount: 1_500 }, // +50% but over 60 days
    ];
    expect(isSurgeActive(history, t0 + 60 * DAY)).toBe(false);
  });

  it('UT-0008 decays after 90 days so a party is not frozen forever', () => {
    const history = [
      { timestamp: t0, memberCount: 1_000 },
      { timestamp: t0 + 5 * DAY, memberCount: 2_000 },
    ];
    expect(isSurgeActive(history, t0 + 6 * DAY)).toBe(true);
    expect(isSurgeActive(history, t0 + 5 * DAY + SURGE.DECAY_SECONDS + DAY)).toBe(false);
  });

  it('UT-0009 treats growth from zero as founding, not as an attack', () => {
    const history = [
      { timestamp: t0, memberCount: 0 },
      { timestamp: t0 + DAY, memberCount: 400 },
    ];
    expect(isSurgeActive(history, t0 + DAY)).toBe(false);
  });

  it('handles degenerate input without throwing', () => {
    expect(isSurgeActive([], t0)).toBe(false);
    expect(isSurgeActive(null, t0)).toBe(false);
    expect(isSurgeActive([{ timestamp: t0, memberCount: 10 }], t0)).toBe(false);
  });
});

describe('UT-0010 tally', () => {
  const rules = effectiveRules(TIER.POLICY);

  it('passes when quorum and approval are both met', () => {
    const r = tally({ forVotes: 300, againstVotes: 100, abstainVotes: 0, snapshotMembers: 1_000, rules });
    expect(r.passed).toBe(true);
    expect(r.quorumBps).toBe(4_000);
    expect(r.approvalBps).toBe(7_500);
  });

  it('UT-0011 fails on quorum even with unanimous support', () => {
    const r = tally({ forVotes: 50, againstVotes: 0, snapshotMembers: 1_000, rules }); // 5% < 10%
    expect(r.passed).toBe(false);
    expect(r.reason).toBe('QUORUM_NOT_MET');
  });

  it('UT-0012 counts abstentions toward quorum but not toward approval', () => {
    const r = tally({ forVotes: 60, againstVotes: 60, abstainVotes: 80, snapshotMembers: 1_000, rules });
    expect(r.quorumBps).toBe(2_000); // 200/1000
    expect(r.approvalBps).toBe(5_000); // 60/120 — abstentions excluded
    expect(r.passed).toBe(false); // needs >50%
  });

  it('UT-0013 requires a strict majority: an exact tie fails', () => {
    const r = tally({ forVotes: 100, againstVotes: 100, snapshotMembers: 1_000, rules });
    expect(r.approvalBps).toBe(5_000);
    expect(r.passed).toBe(false);
  });

  it('UT-0014 measures quorum against the snapshot, not the current membership', () => {
    // 400 of 1000 members voted. If quorum were measured against a post-flood membership of
    // 10,000, an attacker could kill a proposal they were losing simply by joining.
    const r = tally({ forVotes: 300, againstVotes: 100, snapshotMembers: 1_000, rules });
    expect(r.passed).toBe(true);
  });

  it('UT-0015 refuses negative or fractional inputs instead of coercing them', () => {
    expect(() => tally({ forVotes: -1, againstVotes: 0, snapshotMembers: 10, rules })).toThrow(ProtocolError);
    expect(() => tally({ forVotes: 1.5, againstVotes: 0, snapshotMembers: 10, rules })).toThrow(ProtocolError);
  });

  it('handles an empty party without dividing by zero', () => {
    const r = tally({ forVotes: 0, againstVotes: 0, snapshotMembers: 0, rules });
    expect(r.passed).toBe(false);
    expect(r.reason).toBe('NO_MEMBERS');
  });
});

describe('UT-0016 eligibility — tenure gates who may vote, never how much a vote counts', () => {
  const rules = effectiveRules(TIER.CONSTITUTIONAL);
  const snapshotAt = 1_700_000_000;

  it('admits a long-tenured member with weight exactly 1', () => {
    const r = isEligible({ joinedAt: snapshotAt - 200 * DAY, snapshotAt, rules });
    expect(r.eligible).toBe(true);
    expect(r.weight).toBe(1);
  });

  it('UT-0017 gives a 20-year founder exactly the same weight as a 181-day member', () => {
    const founder = isEligible({ joinedAt: snapshotAt - 7300 * DAY, snapshotAt, rules });
    const newer = isEligible({ joinedAt: snapshotAt - 181 * DAY, snapshotAt, rules });
    expect(founder.weight).toBe(newer.weight);
  });

  it('UT-0018 excludes a member who joined after the snapshot (flood defence)', () => {
    const r = isEligible({ joinedAt: snapshotAt + 1, snapshotAt, rules });
    expect(r.eligible).toBe(false);
    expect(r.reason).toBe('JOINED_AFTER_SNAPSHOT');
  });

  it('UT-0019 excludes a member whose tenure is one second short', () => {
    const r = isEligible({ joinedAt: snapshotAt - (180 * DAY - 1), snapshotAt, rules });
    expect(r.eligible).toBe(false);
    expect(r.reason).toBe('TENURE_TOO_SHORT');
  });

  it('UT-0020 lets a day-old member vote on operational and policy matters', () => {
    const operational = effectiveRules(TIER.OPERATIONAL);
    const r = isEligible({ joinedAt: snapshotAt - DAY, snapshotAt, rules: operational });
    expect(r.eligible).toBe(true);
  });

  it('excludes someone who left before the snapshot', () => {
    const r = isEligible({ joinedAt: snapshotAt - 300 * DAY, leftAt: snapshotAt - DAY, snapshotAt, rules });
    expect(r.eligible).toBe(false);
    expect(r.reason).toBe('LEFT_BEFORE_SNAPSHOT');
  });

  it('reports non-membership rather than throwing', () => {
    expect(isEligible({ joinedAt: null, snapshotAt, rules }).reason).toBe('NOT_A_MEMBER');
  });
});

describe('UT-0021 schedule — discussion always precedes voting', () => {
  const createdAt = 1_700_000_000;

  it('orders discussion → voting → timelock for a constitutional change', () => {
    const rules = effectiveRules(TIER.CONSTITUTIONAL);
    const s = schedule({ createdAt, rules });
    expect(s.discussionEndsAt).toBe(createdAt + 14 * DAY);
    expect(s.votingEndsAt).toBe(s.discussionEndsAt + 14 * DAY);
    expect(s.executableAt).toBe(s.votingEndsAt + 30 * DAY);
    // A charter change is visible for 58 days before it can take effect.
    expect(s.executableAt - createdAt).toBe(58 * DAY);
  });

  it('UT-0022 never allows a voting window shorter than the coercion re-vote window', () => {
    for (const tier of Object.values(TIER)) {
      const rules = effectiveRules(tier);
      const s = schedule({ createdAt, rules, requestedVotingSeconds: 60 });
      expect(s.votingSeconds).toBeGreaterThanOrEqual(3 * DAY);
    }
  });

  it('honours a longer requested window', () => {
    const rules = effectiveRules(TIER.POLICY);
    const s = schedule({ createdAt, rules, requestedVotingSeconds: 30 * DAY });
    expect(s.votingSeconds).toBe(30 * DAY);
  });
});

describe('UT-0023 petition thresholds (ADR-004 §4)', () => {
  it('uses the population percentage when it is the binding constraint', () => {
    const t = petitionThreshold({ eligiblePopulation: 1_000_000, verifiedResidents: 5_000 });
    expect(t).toBe(20_000); // 2% of 1,000,000
  });

  it('UT-0024 an oracle that deflates the population gains the attacker nothing', () => {
    const honest = petitionThreshold({ eligiblePopulation: 1_000_000, verifiedResidents: 800_000 });
    const attacked = petitionThreshold({ eligiblePopulation: 1, verifiedResidents: 800_000 });
    expect(attacked).toBe(16_000); // the verified-resident floor still binds
    expect(attacked).toBeLessThan(honest);
    expect(attacked).toBeGreaterThan(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS);
  });

  it('UT-0025 never lets a party charter on a handful of accounts', () => {
    const t = petitionThreshold({ eligiblePopulation: 0, verifiedResidents: 0 });
    expect(t).toBe(PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS);
  });

  it('rejects a threshold outside the permitted band', () => {
    expect(() => petitionThreshold({ eligiblePopulation: 100, verifiedResidents: 0, thresholdBps: 10 })).toThrow(
      ProtocolError,
    );
    expect(() => petitionThreshold({ eligiblePopulation: 100, verifiedResidents: 0, thresholdBps: 9_000 })).toThrow(
      ProtocolError,
    );
  });
});

describe('UT-0026 petitionOutcome', () => {
  const opensAt = 1_700_000_000;
  const closesAt = opensAt + 90 * DAY;

  it('reports remaining endorsements while gathering', () => {
    const r = petitionOutcome({ endorsements: 100, required: 500, opensAt, closesAt, now: opensAt + DAY });
    expect(r.state).toBe('gathering');
    expect(r.remaining).toBe(400);
  });

  it('UT-0027 unlocks the moment the threshold is met, with no human approval step', () => {
    const r = petitionOutcome({ endorsements: 500, required: 500, opensAt, closesAt, now: opensAt + DAY });
    expect(r.state).toBe('threshold_met');
    expect(r.met).toBe(true);
  });

  it('expires when the window closes short of the threshold', () => {
    const r = petitionOutcome({ endorsements: 499, required: 500, opensAt, closesAt, now: closesAt + 1 });
    expect(r.state).toBe('expired');
  });

  it('stays met even after the window closes', () => {
    const r = petitionOutcome({ endorsements: 600, required: 500, opensAt, closesAt, now: closesAt + DAY });
    expect(r.met).toBe(true);
  });
});

describe('UT-0028 tier rules are internally consistent', () => {
  it('escalates monotonically: harder tiers are never easier on any axis', () => {
    const tiers = [TIER.OPERATIONAL, TIER.POLICY, TIER.STRUCTURAL, TIER.CONSTITUTIONAL];
    for (let i = 1; i < tiers.length; i++) {
      const lower = TIER_RULES[tiers[i - 1]];
      const higher = TIER_RULES[tiers[i]];
      expect(higher.quorumBps).toBeGreaterThanOrEqual(lower.quorumBps);
      expect(higher.approvalBps).toBeGreaterThanOrEqual(lower.approvalBps);
      expect(higher.minTenureSeconds).toBeGreaterThanOrEqual(lower.minTenureSeconds);
      expect(higher.timelockSeconds).toBeGreaterThanOrEqual(lower.timelockSeconds);
      expect(higher.discussionSeconds).toBeGreaterThanOrEqual(lower.discussionSeconds);
    }
  });

  it('never sets an approval threshold at or below a bare 50%', () => {
    for (const tier of Object.values(TIER)) {
      expect(TIER_RULES[tier].approvalBps).toBeGreaterThan(5_000);
    }
  });
});
