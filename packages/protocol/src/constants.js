/**
 * Protocol constants — the numbers that encode the political design.
 *
 * Every value here is a decision recorded in an ADR. Changing one is a protocol
 * governance action (ADR-010), not a refactor, so each carries its source.
 */

/** Decision tiers (ADR-008 §1). Tenure gates ELIGIBILITY, never vote weight (ADR-007 §2). */
export const TIER = Object.freeze({
  OPERATIONAL: 0,
  POLICY: 1,
  STRUCTURAL: 2,
  CONSTITUTIONAL: 3,
});

export const TIER_NAMES = Object.freeze(['operational', 'policy', 'structural', 'constitutional']);

const DAY = 86_400;
const HOUR = 3_600;

/**
 * Protocol-enforced floors and defaults per tier.
 *
 * `*_FLOOR` values are hard minimums a party charter may not go below; the charter may
 * always be stricter. This is the mechanism that stops a party from configuring away its
 * own anti-capture protections in a moment of enthusiasm (ADR-008).
 */
export const TIER_RULES = Object.freeze({
  [TIER.OPERATIONAL]: Object.freeze({
    quorumBps: 500, // 5%
    approvalBps: 5_001, // >50%
    minTenureSeconds: 0,
    timelockSeconds: 0,
    discussionSeconds: 0,
    minVotingSeconds: 3 * DAY, // NFR-COERCE-01: never shorter than the re-vote window
  }),
  [TIER.POLICY]: Object.freeze({
    quorumBps: 1_000,
    approvalBps: 5_001,
    minTenureSeconds: 14 * DAY,
    timelockSeconds: 48 * HOUR,
    discussionSeconds: 2 * DAY,
    minVotingSeconds: 3 * DAY,
  }),
  [TIER.STRUCTURAL]: Object.freeze({
    quorumBps: 2_500,
    approvalBps: 6_000,
    minTenureSeconds: 90 * DAY,
    timelockSeconds: 14 * DAY,
    discussionSeconds: 7 * DAY,
    minVotingSeconds: 7 * DAY,
  }),
  [TIER.CONSTITUTIONAL]: Object.freeze({
    quorumBps: 4_000,
    approvalBps: 7_500,
    minTenureSeconds: 180 * DAY,
    timelockSeconds: 30 * DAY,
    discussionSeconds: 14 * DAY,
    minVotingSeconds: 14 * DAY,
  }),
});

/** Absolute floor on constitutional tenure, below which no charter may configure. ADR-008 §1. */
export const CONSTITUTIONAL_TENURE_FLOOR_SECONDS = 90 * DAY;

/** Adaptive quorum (ADR-008 §3). */
export const SURGE = Object.freeze({
  WINDOW_SECONDS: 30 * DAY,
  GROWTH_TRIGGER_BPS: 2_000, // +20% membership within the window
  APPROVAL_PENALTY_BPS: 500, // +5 percentage points
  VOTING_WINDOW_MULTIPLIER: 2,
  DECAY_SECONDS: 90 * DAY,
});

/** Petition thresholds (ADR-004 §4). */
export const PETITION = Object.freeze({
  DEFAULT_THRESHOLD_BPS: 200, // 2% of the eligible population of the declared jurisdiction
  MIN_THRESHOLD_BPS: 50,
  MAX_THRESHOLD_BPS: 2_000,
  ABSOLUTE_FLOOR_ENDORSEMENTS: 500, // no party charters on a handful of accounts, ever
  MAX_DURATION_SECONDS: 365 * DAY,
  MIN_DURATION_SECONDS: 30 * DAY,
});

/** Minimum anonymity set before a region's tree may be used for a published action. NFR-PRIV-02. */
export const MIN_ANONYMITY_SET = 1_000;

/** Fork rights (ADR-008 §5). */
export const FORK = Object.freeze({
  MIN_INITIATOR_BPS: 1_000, // 10% of members
  COOLING_OFF_SECONDS: 30 * DAY,
});

/** Delegation limits (ADR-007 §5). Disabled by default; a party must opt in. */
export const DELEGATION = Object.freeze({
  ENABLED_BY_DEFAULT: false,
  MAX_HOPS: 1,
  MAX_SHARE_BPS: 100, // no delegate may hold >1% of a party's delegated votes
});

/** Personhood credential tiers (ADR-003). */
export const PERSONHOOD_TIER = Object.freeze({
  SOCIAL: 1, // web-of-trust / peer attestation — inclusive, weakest
  DOCUMENT: 2, // e-passport / national eID / biometric uniqueness
  REGISTRY: 3, // civil registry / electoral roll attestation
});

/** Protocol invariant (ADR-003): a region must accept ≥2 issuers, ≥1 of them non-state. */
export const MIN_ISSUERS_PER_REGION = 2;

/** Gas sponsorship budget per personhood tier, per epoch (ADR-014). */
export const SPONSORSHIP_OPS_PER_EPOCH = Object.freeze({
  [PERSONHOOD_TIER.SOCIAL]: 10,
  [PERSONHOOD_TIER.DOCUMENT]: 50,
  [PERSONHOOD_TIER.REGISTRY]: 50,
});

export const BPS = 10_000;
export const SECONDS_PER_DAY = DAY;

/** The eight mandatory policy pillars a party vision must cover (BR-INCUBATE). */
export const PILLARS = Object.freeze([
  'finance',
  'society',
  'governance',
  'law',
  'education',
  'healthcare',
  'security',
  'regional',
]);
