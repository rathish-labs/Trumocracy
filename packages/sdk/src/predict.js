/**
 * Outcome prediction — the UI's only source of governance arithmetic.
 *
 * Every number a citizen is shown about *what will happen* ("312 more supporters needed",
 * "this needs 60% to pass", "you can vote from 14 March") is computed here, by delegating
 * to `@trumocracy/protocol`. The UI never does the arithmetic itself.
 *
 * That is a correctness rule with a political edge: `@trumocracy/protocol` is the same
 * reference implementation the contracts are differentially tested against (DES-045), so a
 * citizen who is told "your proposal passed" cannot be contradicted by the chain. A second
 * copy of the rules in a React component would be a second opinion, and a second opinion
 * about whether a vote passed is a governance failure, not a bug.
 */
import {
  BPS,
  PETITION,
  TIER,
  effectiveRules,
  isEligible,
  isSurgeActive,
  petitionOutcome,
  petitionThreshold,
  schedule,
  tally,
  canFork,
  validateVision,
  validateCharter,
  resolveAnonymityScope,
  MIN_ANONYMITY_SET,
} from '@trumocracy/protocol';

/** Re-exported so a caller never reaches around the SDK for the rules. */
export { validateVision, validateCharter, TIER, BPS, PETITION, MIN_ANONYMITY_SET };

const toNum = (v) => (typeof v === 'bigint' ? Number(v) : Number(v ?? 0));

/**
 * How is this petition doing, and what is left to do?
 *
 * @param {object} p
 * @param {number|bigint} p.endorsements
 * @param {number|bigint} p.required   the count frozen at open — never recomputed
 * @param {number|bigint} p.opensAt
 * @param {number|bigint} p.closesAt
 * @param {number} [p.now] unix seconds
 * @returns {{state: string, met: boolean, remaining: number, endorsements: number, required: number,
 *            percent: number, secondsRemaining: number}}
 */
export function predictPetition({ endorsements, required, opensAt, closesAt, now = Math.floor(Date.now() / 1000) }) {
  const e = toNum(endorsements);
  const r = toNum(required);
  const outcome = petitionOutcome({ endorsements: e, required: r, opensAt: toNum(opensAt), closesAt: toNum(closesAt), now });
  return {
    ...outcome,
    endorsements: e,
    required: r,
    // Capped at 100 so a petition that overshoots its threshold does not render a 140% bar.
    percent: r === 0 ? 0 : Math.min(100, Math.floor((e * 100) / r)),
    secondsRemaining: Math.max(0, toNum(closesAt) - now),
  };
}

/**
 * The bar a petition has to clear: `max(pct×population, pct×verified, 500)`.
 * The floor is why corrupting the population oracle downward buys an attacker nothing
 * (ADR-004 §4, RISK-12) — surfaced here so the UI can *say* which term is binding.
 *
 * @param {object} p
 * @param {number} p.eligiblePopulation
 * @param {number} p.verifiedResidents
 * @param {number} [p.thresholdBps]
 */
export function predictThreshold({ eligiblePopulation, verifiedResidents, thresholdBps = PETITION.DEFAULT_THRESHOLD_BPS }) {
  const required = petitionThreshold({
    eligiblePopulation: toNum(eligiblePopulation),
    verifiedResidents: toNum(verifiedResidents),
    thresholdBps,
  });
  const byPopulation = Math.ceil((toNum(eligiblePopulation) * thresholdBps) / BPS);
  const byVerified = Math.ceil((toNum(verifiedResidents) * thresholdBps) / BPS);
  let binding = 'absolute-floor';
  if (required === byPopulation && byPopulation >= byVerified) binding = 'population';
  else if (required === byVerified && byVerified > byPopulation) binding = 'verified-residents';
  return { required, byPopulation, byVerified, absoluteFloor: PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS, binding };
}

/**
 * The exact bar a proposal must clear, including any growth-surge penalty (US-0034).
 *
 * @param {object} p
 * @param {number} p.tier
 * @param {object} [p.charter]  per-tier stricter-only overrides
 * @param {Array<{timestamp: number, memberCount: number}>} [p.growthHistory]
 * @param {boolean} [p.surgeActive] explicit override; otherwise derived from history
 * @param {number} [p.now]
 */
export function predictRules({ tier, charter = {}, growthHistory, surgeActive, now = Math.floor(Date.now() / 1000) }) {
  const surge = surgeActive ?? (growthHistory ? isSurgeActive(growthHistory, now) : false);
  return effectiveRules(tier, charter, surge);
}

/**
 * Will this proposal pass on the numbers so far?
 *
 * Returns the *reason* alongside the verdict, because "it failed" and "it failed on quorum
 * with 41% turnout" are different facts to a member deciding whether to go and vote.
 *
 * @param {object} p
 * @param {number} p.forVotes
 * @param {number} p.againstVotes
 * @param {number} [p.abstainVotes]
 * @param {number} p.snapshotMembers
 * @param {object} p.rules  from `predictRules`
 */
export function predictOutcome({ forVotes, againstVotes, abstainVotes = 0, snapshotMembers, rules }) {
  const result = tally({
    forVotes: toNum(forVotes),
    againstVotes: toNum(againstVotes),
    abstainVotes: toNum(abstainVotes),
    snapshotMembers: toNum(snapshotMembers),
    rules,
  });
  const votesNeededForQuorum = Math.max(
    0,
    Math.ceil((rules.quorumBps * toNum(snapshotMembers)) / BPS) - result.participation,
  );
  return { ...result, votesNeededForQuorum };
}

/**
 * May *this* member vote on *this* proposal?
 *
 * Eligibility is binary and evaluated at the snapshot: joining after a proposal opens
 * confers nothing (DES-019). Nothing here ever scales a vote — there is no weight to
 * return, by construction (ADR-007).
 *
 * @param {object} p
 * @param {number|null} p.joinedAt
 * @param {number} p.snapshotAt
 * @param {number|null} [p.leftAt]
 * @param {object} p.rules
 */
export function predictEligibility({ joinedAt, snapshotAt, leftAt = null, rules }) {
  const j = joinedAt === null || joinedAt === undefined ? null : toNum(joinedAt);
  const l = leftAt === null || leftAt === undefined || toNum(leftAt) === 0 ? null : toNum(leftAt);
  const verdict = isEligible({ joinedAt: j, snapshotAt: toNum(snapshotAt), leftAt: l, rules });
  if (verdict.eligible || verdict.reason !== 'TENURE_TOO_SHORT') return verdict;
  // "Not yet" is a different answer from "no", and the citizen deserves the date.
  return { ...verdict, eligibleFrom: j + rules.minTenureSeconds };
}

/**
 * When does each phase of a proposal start and end?
 * @param {object} p
 * @param {number} p.createdAt
 * @param {object} p.rules
 * @param {number} [p.requestedVotingSeconds]
 */
export function predictSchedule({ createdAt, rules, requestedVotingSeconds }) {
  return schedule({ createdAt: toNum(createdAt), rules, requestedVotingSeconds });
}

/**
 * Can this group fork? (ADR-008 §5 — ≥10% of members, then 30 days of cooling off.)
 * @param {object} p
 */
export function predictFork({ initiators, memberCount, initiatedAt, now = Math.floor(Date.now() / 1000) }) {
  return canFork({
    initiators: toNum(initiators),
    memberCount: toNum(memberCount),
    initiatedAt: toNum(initiatedAt),
    now,
  });
}

/**
 * Which region should this action be published against? (DES-008, NFR-002.)
 *
 * A ward with 40 verified residents provides no anonymity, so the action's scope escalates
 * to the nearest ancestor region that clears k ≥ 1000. `null` means even the country is
 * too thin and the action **must not be published** — the client's job then is to say so,
 * not to publish anyway with a warning.
 *
 * @param {string} regionPath
 * @param {(path: string) => number} residentCountOf
 */
export function predictAnonymityScope(regionPath, residentCountOf) {
  return resolveAnonymityScope(regionPath, residentCountOf);
}

/**
 * Everything the petition screen needs, in one call, so the component holds no arithmetic.
 * @param {object} p
 */
export function petitionView(p) {
  const progress = predictPetition(p);
  const days = Math.floor(progress.secondsRemaining / 86_400);
  const hours = Math.floor((progress.secondsRemaining % 86_400) / 3600);
  return { ...progress, daysRemaining: days, hoursRemaining: hours };
}
