/**
 * Party lifecycle and charter validation.
 *
 * The state machine here is the contract between the UI, the indexer and the chain. It is
 * deliberately small: a party is a petition until enough people back it, then it is a party,
 * and it can be dissolved or forked. There is no "approved", "featured" or "verified" state,
 * because every one of those would need someone to do the approving.
 */
import { PILLARS, PETITION, FORK, BPS, TIER, CONSTITUTIONAL_TENURE_FLOOR_SECONDS } from './constants.js';
import { parseRegion } from './regions.js';
import { ProtocolError } from './governance.js';

export const PARTY_STATE = Object.freeze({
  DRAFT: 'draft', // author is still writing; not visible, not endorsable
  PETITION: 'petition', // published, gathering endorsements
  ACTIVE: 'active', // threshold met — full party status unlocked
  EXPIRED: 'expired', // petition window closed without reaching threshold
  DISSOLVED: 'dissolved', // members voted to dissolve (T3)
});

/** Legal transitions. Anything not listed here is rejected by the contract and by this module. */
const TRANSITIONS = Object.freeze({
  [PARTY_STATE.DRAFT]: [PARTY_STATE.PETITION],
  [PARTY_STATE.PETITION]: [PARTY_STATE.ACTIVE, PARTY_STATE.EXPIRED],
  [PARTY_STATE.ACTIVE]: [PARTY_STATE.DISSOLVED],
  [PARTY_STATE.EXPIRED]: [],
  [PARTY_STATE.DISSOLVED]: [],
});

export function canTransition(from, to) {
  return (TRANSITIONS[from] ?? []).includes(to);
}

export function assertTransition(from, to) {
  if (!canTransition(from, to)) {
    throw new ProtocolError('ILLEGAL_TRANSITION', `party cannot move from ${from} to ${to}`);
  }
  return true;
}

const MIN_PILLAR_CHARS = 280;
const MAX_NAME_CHARS = 80;

/**
 * Validate a party vision.
 *
 * All eight pillars are mandatory (BR-INCUBATE). The minimum length is a deliberately
 * blunt instrument: it does not judge content — the protocol must never judge political
 * content (ADR-013) — it only refuses an empty placeholder, so that "covers all eight
 * pillars" means something to a citizen reading it.
 */
export function validateVision(vision) {
  const errors = [];

  if (typeof vision?.name !== 'string' || vision.name.trim().length === 0) {
    errors.push({ field: 'name', code: 'REQUIRED', message: 'party name is required' });
  } else if (vision.name.length > MAX_NAME_CHARS) {
    errors.push({ field: 'name', code: 'TOO_LONG', message: `party name must be ≤${MAX_NAME_CHARS} characters` });
  }

  try {
    parseRegion(vision?.jurisdiction ?? '');
  } catch (e) {
    errors.push({ field: 'jurisdiction', code: e.code ?? 'INVALID', message: e.message });
  }

  const pillars = vision?.pillars ?? {};
  for (const pillar of PILLARS) {
    const text = pillars[pillar];
    if (typeof text !== 'string' || text.trim().length === 0) {
      errors.push({ field: `pillars.${pillar}`, code: 'REQUIRED', message: `the "${pillar}" pillar is mandatory` });
    } else if (text.trim().length < MIN_PILLAR_CHARS) {
      errors.push({
        field: `pillars.${pillar}`,
        code: 'TOO_SHORT',
        message: `the "${pillar}" pillar needs at least ${MIN_PILLAR_CHARS} characters so citizens can judge it`,
      });
    }
  }

  const unknown = Object.keys(pillars).filter((k) => !PILLARS.includes(k));
  if (unknown.length > 0) {
    errors.push({ field: 'pillars', code: 'UNKNOWN_PILLAR', message: `unknown pillar(s): ${unknown.join(', ')}` });
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate a charter's configurable parameters against the protocol floors.
 *
 * A charter may always be *stricter* than the protocol. It may never be weaker — that
 * asymmetry is what stops a party from configuring away the protections that ADR-008 puts
 * in place, whether by attack or by enthusiasm.
 */
export function validateCharter(charter) {
  const errors = [];

  const bps = charter?.petitionThresholdBps;
  if (bps !== undefined && bps !== null) {
    if (bps < PETITION.MIN_THRESHOLD_BPS || bps > PETITION.MAX_THRESHOLD_BPS) {
      errors.push({
        field: 'petitionThresholdBps',
        code: 'OUT_OF_RANGE',
        message: `must be within [${PETITION.MIN_THRESHOLD_BPS}, ${PETITION.MAX_THRESHOLD_BPS}]`,
      });
    }
  }

  const constitutionalTenure = charter?.tiers?.[TIER.CONSTITUTIONAL]?.minTenureSeconds;
  if (constitutionalTenure !== undefined && constitutionalTenure < CONSTITUTIONAL_TENURE_FLOOR_SECONDS) {
    errors.push({
      field: `tiers.${TIER.CONSTITUTIONAL}.minTenureSeconds`,
      code: 'BELOW_FLOOR',
      message: `constitutional tenure may not be below ${CONSTITUTIONAL_TENURE_FLOOR_SECONDS}s`,
    });
  }

  if (charter?.membershipRequiresApproval === true) {
    // BR-EQUAL is not negotiable at charter level. A party that can gate joining has
    // re-invented the gatekeeper, which is the one thing this platform exists to remove.
    errors.push({
      field: 'membershipRequiresApproval',
      code: 'FORBIDDEN',
      message: 'membership may never require approval — every citizen joins directly (BR-EQUAL)',
    });
  }

  if (charter?.voteWeighting && charter.voteWeighting !== 'one-person-one-vote') {
    errors.push({
      field: 'voteWeighting',
      code: 'FORBIDDEN',
      message: 'vote weighting is fixed at one-person-one-vote (ADR-007)',
    });
  }

  const immutable = charter?.immutableClauses ?? [];
  if (!Array.isArray(immutable)) {
    errors.push({ field: 'immutableClauses', code: 'INVALID', message: 'immutableClauses must be an array' });
  }

  return { valid: errors.length === 0, errors };
}

/** A clause marked immutable at founding can never be amended by any majority (ADR-008 §4). */
export function canAmendClause(charter, clauseId) {
  const immutable = new Set(charter?.immutableClauses ?? []);
  if (immutable.has(clauseId)) {
    return { allowed: false, reason: 'CLAUSE_IMMUTABLE' };
  }
  const entrenched = charter?.entrenchedClauses?.[clauseId];
  if (entrenched) {
    return { allowed: true, reason: 'ENTRENCHED', requiredApprovalBps: entrenched.approvalBps, timelockSeconds: entrenched.timelockSeconds };
  }
  return { allowed: true, reason: 'AMENDABLE' };
}

/** Fork eligibility (ADR-008 §5): ≥10% of members, then a 30-day cooling-off period. */
export function canFork({ initiators, memberCount, initiatedAt, now }) {
  if (memberCount === 0) return { allowed: false, reason: 'NO_MEMBERS' };
  const shareBps = Math.floor((initiators * BPS) / memberCount);
  if (shareBps < FORK.MIN_INITIATOR_BPS) {
    return { allowed: false, reason: 'INSUFFICIENT_INITIATORS', shareBps, requiredBps: FORK.MIN_INITIATOR_BPS };
  }
  const elapsed = now - initiatedAt;
  if (elapsed < FORK.COOLING_OFF_SECONDS) {
    return { allowed: false, reason: 'COOLING_OFF', readyAt: initiatedAt + FORK.COOLING_OFF_SECONDS, shareBps };
  }
  return { allowed: true, reason: 'OK', shareBps };
}
