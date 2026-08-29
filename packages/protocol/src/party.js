/**
 * Party lifecycle and charter validation.
 *
 * The state machine here is the contract between the UI, the indexer and the chain. It is
 * deliberately small: a party is a petition until enough people back it, then it is a party,
 * and it can be dissolved or forked. There is no "approved", "featured" or "verified" state,
 * because every one of those would need someone to do the approving.
 */
import {
  PILLARS,
  PETITION,
  FORK,
  BPS,
  TIER,
  TIER_RULES,
  CONSTITUTIONAL_TENURE_FLOOR_SECONDS,
  EMBLEM,
  NON_VIOLENCE_CLAUSE,
} from './constants.js';
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

  // Additive bounds: for each tier, if a governance key is declared, it MUST
  // meet the protocol floor. Undefined passes silently (applyCharterDefaults
  // fills the gap). This loop covers all tiers so a charter cannot configure
  // away protections in any tier, not just constitutional. (D6 additive only —
  // existing checks above are unchanged. The CONSTITUTIONAL.minTenureSeconds
  // check above uses CONSTITUTIONAL_TENURE_FLOOR_SECONDS = 90 days as its floor;
  // this loop uses TIER_RULES[CONSTITUTIONAL].minTenureSeconds = 180 days,
  // which is stricter, so both checks coexist harmlessly.)
  const tierBoundKeys = [
    'quorumBps',
    'approvalBps',
    'minTenureSeconds',
    'timelockSeconds',
    'discussionSeconds',
    'minVotingSeconds',
  ];
  for (const [tier, rules] of Object.entries(TIER_RULES)) {
    const tierOverride = charter?.tiers?.[tier];
    if (tierOverride == null) continue;
    for (const key of tierBoundKeys) {
      const val = tierOverride[key];
      if (val !== undefined && val !== null && val < rules[key]) {
        errors.push({
          field: `tiers.${tier}.${key}`,
          code: 'BELOW_FLOOR',
          message: `tier ${tier} ${key}=${val} is below the protocol floor ${rules[key]}`,
        });
      }
    }
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

// ─── Party-creation additions (v1 phase 1) ───────────────────────────────────

/**
 * Normalise a party name or emblem for collision detection (FR-010, DES-073).
 *
 * Folds applied (in order):
 *   1. Unicode NFC (canonical composition — pre-composed and decomposed
 *      variants of the same character collapse to the same form).
 *   2. Lowercase (case-insensitive collision: "Forward" == "forward").
 *   3. Trim (leading/trailing whitespace stripped).
 *   4. Whitespace runs collapsed to a single U+0020 space
 *      ("Forward  Party" == "Forward Party").
 *
 * Diacritics are NOT stripped — "café" ≠ "cafe" — because stripping
 * diacritics would falsely flag as colliding two names that are visually
 * and culturally distinct. Only forms that are visually indistinguishable
 * after these folds are treated as collisions.
 *
 * @param {string} s
 * @returns {string}
 */
export function normalizeCollisionKey(s) {
  return String(s ?? '').normalize('NFC').toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Compute a stable fingerprint of a draft for substantially-identical-charter
 * detection (FR-013, D4 coordinator ruling 2026-08-25).
 *
 * "Substantially identical" = exact match of this fingerprint.
 * Covers: all eight pillar texts (NFC-lowercased, whitespace-collapsed) and
 * the charter governance parameters (petitionThresholdBps, tier overrides).
 * Does NOT include: party name, emblem, jurisdiction — those are collision
 * keys, not fingerprint keys. Does NOT use Date or randomness.
 *
 * @param {object} draft — { pillars?: object, charter?: object }
 * @returns {string}
 */
export function charterFingerprint(draft) {
  const pillars = draft?.pillars ?? {};
  const charter = draft?.charter ?? {};

  // Normalise each pillar text for stable comparison.
  const normPillars = {};
  for (const key of Object.keys(pillars).sort()) {
    normPillars[key] = String(pillars[key] ?? '').normalize('NFC').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  // Extract governance-relevant charter keys only.
  const charterParams = {
    petitionThresholdBps: charter.petitionThresholdBps ?? null,
    tiers: {},
  };
  if (charter.tiers) {
    for (const tier of Object.keys(charter.tiers).sort()) {
      const t = charter.tiers[tier];
      if (t == null) continue;
      charterParams.tiers[tier] = {
        quorumBps: t.quorumBps ?? null,
        approvalBps: t.approvalBps ?? null,
        minTenureSeconds: t.minTenureSeconds ?? null,
        timelockSeconds: t.timelockSeconds ?? null,
      };
    }
  }

  return JSON.stringify({ pillars: normPillars, charter: charterParams });
}

/**
 * Fill platform defaults into a charter wherever the charter is silent (FR-012).
 *
 * Returns a NEW object — never mutates the input. A charter may be stricter
 * than the platform defaults; silence is filled with the platform minimum.
 * Validation (validateCharter) is still required separately.
 *
 * @param {object} [charter]
 * @returns {object}
 */
export function applyCharterDefaults(charter) {
  const c = charter != null ? { ...charter } : {};

  // Petition threshold: default to platform default (FR-012).
  if (c.petitionThresholdBps == null) {
    c.petitionThresholdBps = PETITION.DEFAULT_THRESHOLD_BPS;
  }

  // Per-tier governance parameters: fill with TIER_RULES where silent.
  const sourceTiers = charter?.tiers ?? {};
  c.tiers = {};
  for (const [tier, defaults] of Object.entries(TIER_RULES)) {
    const existing = sourceTiers[tier] ?? {};
    c.tiers[tier] = {
      quorumBps: existing.quorumBps ?? defaults.quorumBps,
      approvalBps: existing.approvalBps ?? defaults.approvalBps,
      minTenureSeconds: existing.minTenureSeconds ?? defaults.minTenureSeconds,
      timelockSeconds: existing.timelockSeconds ?? defaults.timelockSeconds,
      discussionSeconds: existing.discussionSeconds ?? defaults.discussionSeconds,
      minVotingSeconds: existing.minVotingSeconds ?? defaults.minVotingSeconds,
    };
  }

  return c;
}

/**
 * Validate a complete party draft (FR-010, FR-011, FR-012, FR-077).
 *
 * Composes: validateVision (name + jurisdiction + all 8 pillars), emblem
 * bounds check (D3), validateCharter (charter parameter floors), and the
 * non-violence clause verbatim requirement (FR-077, CON-013).
 *
 * All errors are named per field; the error summary pattern (EightPillarForm)
 * renders each as a link to its field. Errors from validateVision and
 * validateCharter are included directly — no re-implementation.
 *
 * @param {object} draft
 * @param {string} [draft.name]
 * @param {string} [draft.jurisdiction]
 * @param {object} [draft.pillars]
 * @param {string} [draft.emblem]
 * @param {object} [draft.charter]
 * @returns {{ valid: boolean, errors: Array<{field: string, code: string, message: string}> }}
 */
export function validateDraft(draft) {
  const errors = [];

  // 1. Vision: name, jurisdiction, all 8 pillars (FR-011 names each deficient pillar).
  const visionResult = validateVision({
    name: draft?.name,
    jurisdiction: draft?.jurisdiction,
    pillars: draft?.pillars,
  });
  errors.push(...visionResult.errors);

  // 2. Emblem (D3): 1–8 characters after trimming; required.
  const emblemRaw = draft?.emblem;
  if (emblemRaw == null || String(emblemRaw).trim().length === 0) {
    errors.push({
      field: 'emblem',
      code: 'REQUIRED',
      message: `party emblem is required (${EMBLEM.MIN_CHARS}–${EMBLEM.MAX_CHARS} characters after trimming)`,
    });
  } else {
    const trimmed = String(emblemRaw).trim();
    if (trimmed.length < EMBLEM.MIN_CHARS) {
      errors.push({
        field: 'emblem',
        code: 'TOO_SHORT',
        message: `emblem must be at least ${EMBLEM.MIN_CHARS} character after trimming`,
      });
    } else if (trimmed.length > EMBLEM.MAX_CHARS) {
      errors.push({
        field: 'emblem',
        code: 'TOO_LONG',
        message: `emblem must be at most ${EMBLEM.MAX_CHARS} characters after trimming`,
      });
    }
  }

  // 3. Charter: parameter floors (D6 additive — validateCharter is unchanged).
  const charterResult = validateCharter(draft?.charter);
  errors.push(...charterResult.errors);

  // 4. Non-violence clause (FR-077, CON-013): must be present and verbatim.
  //    This is the one deliberate exception to content-neutrality (ADR-013 §4).
  const nvClause = draft?.charter?.nonViolenceClause;
  if (nvClause == null || nvClause === '') {
    errors.push({
      field: 'charter.nonViolenceClause',
      code: 'REQUIRED',
      message: 'the platform non-violence clause is required in every charter (FR-077)',
    });
  } else if (nvClause !== NON_VIOLENCE_CLAUSE) {
    errors.push({
      field: 'charter.nonViolenceClause',
      code: 'ALTERED',
      message: 'the platform non-violence clause cannot be altered; it must appear exactly as published (FR-077)',
    });
  }

  return { valid: errors.length === 0, errors };
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
