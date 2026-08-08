/**
 * Governance rules — the reference implementation.
 *
 * This module is the authority on *what the rules are*. The Solidity contracts implement
 * the same rules on-chain, and the differential test suite asserts the two agree. That
 * agreement is a security property: the client predicts an outcome from this module, and a
 * citizen who is told "your proposal passed" must not be contradicted by the chain.
 */
import {
  BPS,
  SURGE,
  TIER,
  TIER_RULES,
  CONSTITUTIONAL_TENURE_FLOOR_SECONDS,
  PETITION,
} from './constants.js';

/** Proposal lifecycle (ADR-008 §6: discussion always precedes voting). */
export const PROPOSAL_STATE = Object.freeze({
  DRAFT: 'draft',
  DISCUSSION: 'discussion',
  VOTING: 'voting',
  TALLYING: 'tallying',
  SUCCEEDED_TIMELOCK: 'succeeded_timelock',
  EXECUTED: 'executed',
  DEFEATED: 'defeated',
  CANCELLED: 'cancelled',
});

export class ProtocolError extends Error {
  constructor(code, message) {
    super(message ?? code);
    this.code = code;
  }
}

/**
 * Resolve the effective rules for a proposal, combining protocol floors, the party
 * charter's (stricter-only) overrides, and any active growth-surge penalty.
 *
 * @param {number} tier
 * @param {object} charter  optional per-tier overrides: { [tier]: {quorumBps, approvalBps, minTenureSeconds, ...} }
 * @param {boolean} surgeActive
 */
export function effectiveRules(tier, charter = {}, surgeActive = false) {
  const base = TIER_RULES[tier];
  if (!base) throw new ProtocolError('UNKNOWN_TIER', `unknown tier: ${tier}`);

  const override = charter?.tiers?.[tier] ?? {};

  // A charter may only ratchet *up*. Anything else would let a party vote away its own
  // anti-capture protections, which is precisely the attack ADR-008 defends against.
  const pick = (key) => {
    const v = override[key];
    if (v === undefined || v === null) return base[key];
    if (v < base[key]) {
      throw new ProtocolError(
        'CHARTER_WEAKER_THAN_FLOOR',
        `charter ${key}=${v} for tier ${tier} is below the protocol floor ${base[key]}`,
      );
    }
    return v;
  };

  let quorumBps = pick('quorumBps');
  let approvalBps = pick('approvalBps');
  let minTenureSeconds = pick('minTenureSeconds');
  const timelockSeconds = pick('timelockSeconds');
  const discussionSeconds = pick('discussionSeconds');
  let minVotingSeconds = pick('minVotingSeconds');

  if (tier === TIER.CONSTITUTIONAL && minTenureSeconds < CONSTITUTIONAL_TENURE_FLOOR_SECONDS) {
    throw new ProtocolError(
      'TENURE_BELOW_FLOOR',
      `constitutional tenure ${minTenureSeconds}s is below the protocol floor ${CONSTITUTIONAL_TENURE_FLOOR_SECONDS}s`,
    );
  }

  // Growth surge: raise the bar and widen the window for structural+ decisions only.
  // Operational and policy life must keep working during genuine viral growth (ADR-008 §3).
  if (surgeActive && tier >= TIER.STRUCTURAL) {
    approvalBps = Math.min(BPS, approvalBps + SURGE.APPROVAL_PENALTY_BPS);
    minVotingSeconds = minVotingSeconds * SURGE.VOTING_WINDOW_MULTIPLIER;
  }

  return {
    tier,
    quorumBps,
    approvalBps,
    minTenureSeconds,
    timelockSeconds,
    discussionSeconds,
    minVotingSeconds,
    surgeApplied: Boolean(surgeActive && tier >= TIER.STRUCTURAL),
  };
}

/**
 * Is a party currently in an anomalous-growth surge?
 *
 * `history` is an ascending list of { timestamp, memberCount } samples.
 * A surge is active if membership grew more than GROWTH_TRIGGER_BPS within any
 * WINDOW_SECONDS window that ended within DECAY_SECONDS of `now`.
 */
export function isSurgeActive(history, now) {
  if (!Array.isArray(history) || history.length < 2) return false;

  for (let end = history.length - 1; end >= 1; end--) {
    const endSample = history[end];
    if (now - endSample.timestamp > SURGE.DECAY_SECONDS) break; // too old to matter

    for (let start = end - 1; start >= 0; start--) {
      const startSample = history[start];
      const span = endSample.timestamp - startSample.timestamp;
      if (span > SURGE.WINDOW_SECONDS) break;
      if (startSample.memberCount === 0) {
        // Growth from zero is founding, not a surge — a brand-new party is all newcomers.
        continue;
      }
      const growthBps =
        ((endSample.memberCount - startSample.memberCount) * BPS) / startSample.memberCount;
      if (growthBps > SURGE.GROWTH_TRIGGER_BPS) return true;
    }
  }
  return false;
}

/**
 * Decide a vote outcome.
 *
 * Quorum is measured against the member count *at the proposal snapshot* — never the
 * current count. Otherwise an attacker could flood a party mid-vote to fail quorum and
 * kill a proposal they were losing (ADR-008 §2).
 *
 * Abstentions count toward quorum (participation) but not toward approval, which is the
 * standard parliamentary reading and lets "present and unconvinced" be expressible.
 */
export function tally({ forVotes, againstVotes, abstainVotes = 0, snapshotMembers, rules }) {
  for (const [k, v] of Object.entries({ forVotes, againstVotes, abstainVotes, snapshotMembers })) {
    if (!Number.isInteger(v) || v < 0) throw new ProtocolError('BAD_TALLY_INPUT', `${k} must be a non-negative integer`);
  }
  if (snapshotMembers === 0) {
    return { passed: false, reason: 'NO_MEMBERS', quorumBps: 0, approvalBps: 0, participation: 0 };
  }

  const participation = forVotes + againstVotes + abstainVotes;
  const quorumReachedBps = Math.floor((participation * BPS) / snapshotMembers);
  const decisive = forVotes + againstVotes;
  const approvalReachedBps = decisive === 0 ? 0 : Math.floor((forVotes * BPS) / decisive);

  if (quorumReachedBps < rules.quorumBps) {
    return {
      passed: false,
      reason: 'QUORUM_NOT_MET',
      quorumBps: quorumReachedBps,
      approvalBps: approvalReachedBps,
      participation,
    };
  }
  if (approvalReachedBps < rules.approvalBps) {
    return {
      passed: false,
      reason: 'APPROVAL_NOT_MET',
      quorumBps: quorumReachedBps,
      approvalBps: approvalReachedBps,
      participation,
    };
  }
  return {
    passed: true,
    reason: 'PASSED',
    quorumBps: quorumReachedBps,
    approvalBps: approvalReachedBps,
    participation,
  };
}

/**
 * Is a member eligible to vote on a proposal?
 *
 * Two independent conditions, both required, and both evaluated against the SNAPSHOT:
 *   1. they were a member at the snapshot block (joining later gives no power over it), and
 *   2. their tenure at the snapshot met the tier's minimum.
 *
 * Note what this deliberately does NOT do: it never scales a vote. Eligibility is binary.
 */
export function isEligible({ joinedAt, snapshotAt, leftAt = null, rules }) {
  if (joinedAt === null || joinedAt === undefined) return { eligible: false, reason: 'NOT_A_MEMBER' };
  if (joinedAt > snapshotAt) return { eligible: false, reason: 'JOINED_AFTER_SNAPSHOT' };
  if (leftAt !== null && leftAt <= snapshotAt) return { eligible: false, reason: 'LEFT_BEFORE_SNAPSHOT' };
  const tenure = snapshotAt - joinedAt;
  if (tenure < rules.minTenureSeconds) {
    return { eligible: false, reason: 'TENURE_TOO_SHORT', tenure, required: rules.minTenureSeconds };
  }
  return { eligible: true, reason: 'ELIGIBLE', tenure, weight: 1 };
}

/**
 * Compute the schedule of a proposal from its tier rules.
 * Returns absolute timestamps for each transition.
 */
export function schedule({ createdAt, rules, requestedVotingSeconds }) {
  const votingSeconds = Math.max(rules.minVotingSeconds, requestedVotingSeconds ?? 0);
  const discussionEndsAt = createdAt + rules.discussionSeconds;
  const votingEndsAt = discussionEndsAt + votingSeconds;
  const executableAt = votingEndsAt + rules.timelockSeconds;
  return { createdAt, discussionEndsAt, votingStartsAt: discussionEndsAt, votingEndsAt, executableAt, votingSeconds };
}

export function stateAt(sched, now, { executed = false, cancelled = false, outcome = null } = {}) {
  if (cancelled) return PROPOSAL_STATE.CANCELLED;
  if (executed) return PROPOSAL_STATE.EXECUTED;
  if (now < sched.discussionEndsAt) return PROPOSAL_STATE.DISCUSSION;
  if (now < sched.votingEndsAt) return PROPOSAL_STATE.VOTING;
  if (outcome === null) return PROPOSAL_STATE.TALLYING;
  if (!outcome.passed) return PROPOSAL_STATE.DEFEATED;
  return now < sched.executableAt ? PROPOSAL_STATE.SUCCEEDED_TIMELOCK : PROPOSAL_STATE.SUCCEEDED_TIMELOCK;
}

/**
 * Petition threshold (ADR-004 §4).
 *
 * The floor is the crux: an attacker who corrupts the population oracle downward gains
 * nothing, because the verified-resident count and the absolute floor both still apply.
 */
export function petitionThreshold({
  eligiblePopulation,
  verifiedResidents,
  thresholdBps = PETITION.DEFAULT_THRESHOLD_BPS,
  absoluteFloor = PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS,
}) {
  if (thresholdBps < PETITION.MIN_THRESHOLD_BPS || thresholdBps > PETITION.MAX_THRESHOLD_BPS) {
    throw new ProtocolError('THRESHOLD_OUT_OF_RANGE', `thresholdBps ${thresholdBps} outside [${PETITION.MIN_THRESHOLD_BPS}, ${PETITION.MAX_THRESHOLD_BPS}]`);
  }
  const byPopulation = Math.ceil((eligiblePopulation * thresholdBps) / BPS);
  const byVerified = Math.ceil((verifiedResidents * thresholdBps) / BPS);
  return Math.max(byPopulation, byVerified, absoluteFloor);
}

export function petitionOutcome({ endorsements, required, opensAt, closesAt, now }) {
  if (now < opensAt) return { state: 'pending', met: false, remaining: required };
  const met = endorsements >= required;
  if (met) return { state: 'threshold_met', met: true, remaining: 0 };
  if (now >= closesAt) return { state: 'expired', met: false, remaining: required - endorsements };
  return { state: 'gathering', met: false, remaining: required - endorsements };
}
