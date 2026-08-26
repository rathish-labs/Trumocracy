/**
 * UT-0060..UT-0085 — party-creation additions: validateDraft, applyCharterDefaults,
 * charterFingerprint, normalizeCollisionKey, additive validateCharter tier bounds.
 *
 * Traces: FR-010, FR-011, FR-012, FR-013, FR-077, CON-013,
 *         D2..D6 coordinator rulings 2026-08-25.
 *
 * EXISTING TESTS ARE UNTOUCHED. This file adds new coverage only.
 */
import { describe, it, expect } from 'vitest';
import {
  PILLARS,
  TIER,
  TIER_RULES,
  PETITION,
  NON_VIOLENCE_CLAUSE,
  EMBLEM,
  PROVISIONAL_MEMBER_CAP,
  REPETITION_COOLDOWN_SECONDS,
  validateDraft,
  validateCharter,
  applyCharterDefaults,
  charterFingerprint,
  normalizeCollisionKey,
} from '../src/index.js';

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const DAY = 86_400;

/** Produces a pillar entry that passes the 280-char minimum. */
const goodPillar = (label) => `Our position on ${label}. `.repeat(30);

const goodPillars = Object.fromEntries(PILLARS.map((p) => [p, goodPillar(p)]));

/** A minimal valid draft — all required fields present and correct. */
const goodDraft = () => ({
  name: 'Commons Forward',
  jurisdiction: 'IN/KA',
  pillars: { ...goodPillars },
  emblem: 'CF',
  charter: {
    nonViolenceClause: NON_VIOLENCE_CLAUSE,
  },
});

// ─── UT-0060 validateDraft — all-eight enforcement ───────────────────────────

describe('UT-0060 validateDraft requires all eight pillars by name (FR-011)', () => {
  it('accepts a complete valid draft', () => {
    expect(validateDraft(goodDraft()).valid).toBe(true);
  });

  it('UT-0061 names ALL eight pillars when all are missing', () => {
    const draft = { ...goodDraft(), pillars: {} };
    const result = validateDraft(draft);
    expect(result.valid).toBe(false);
    for (const pillar of PILLARS) {
      expect(
        result.errors.some((e) => e.field === `pillars.${pillar}`),
        `missing pillar "${pillar}" not reported`,
      ).toBe(true);
    }
    expect(result.errors.filter((e) => e.field.startsWith('pillars.'))).toHaveLength(PILLARS.length);
  });

  it('UT-0062 names exactly the deficient pillar(s) when only some are missing', () => {
    for (const missing of PILLARS) {
      const pillars = { ...goodPillars };
      delete pillars[missing];
      const result = validateDraft({ ...goodDraft(), pillars });
      expect(result.valid).toBe(false);
      const pillarErrors = result.errors.filter((e) => e.field.startsWith('pillars.'));
      expect(pillarErrors).toHaveLength(1);
      expect(pillarErrors[0].field).toBe(`pillars.${missing}`);
    }
  });

  it('UT-0063 passes when all eight pillars are individually substantial', () => {
    // Every pillar present and ≥280 chars → no pillar errors.
    const result = validateDraft(goodDraft());
    expect(result.errors.filter((e) => e.field.startsWith('pillars.'))).toHaveLength(0);
  });
});

// ─── UT-0064 emblem validation ────────────────────────────────────────────────

describe('UT-0064 validateDraft emblem bounds (D3, FR-010)', () => {
  it('accepts a 1-char emblem (minimum)', () => {
    expect(validateDraft({ ...goodDraft(), emblem: 'X' }).valid).toBe(true);
  });

  it('accepts an 8-char emblem (maximum)', () => {
    expect(validateDraft({ ...goodDraft(), emblem: 'ABCDEFGH' }).valid).toBe(true);
  });

  it('UT-0065 requires emblem — null → named REQUIRED error', () => {
    const result = validateDraft({ ...goodDraft(), emblem: null });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'emblem' && e.code === 'REQUIRED')).toBe(true);
  });

  it('UT-0066 requires emblem — undefined → named REQUIRED error', () => {
    const draft = goodDraft();
    delete draft.emblem;
    const result = validateDraft(draft);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'emblem' && e.code === 'REQUIRED')).toBe(true);
  });

  it('UT-0067 requires emblem — whitespace-only → named REQUIRED error', () => {
    const result = validateDraft({ ...goodDraft(), emblem: '   ' });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'emblem' && e.code === 'REQUIRED')).toBe(true);
  });

  it('UT-0068 rejects emblem > 8 chars after trim → TOO_LONG error', () => {
    const result = validateDraft({ ...goodDraft(), emblem: 'ABCDEFGHI' }); // 9 chars
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'emblem' && e.code === 'TOO_LONG')).toBe(true);
  });

  it('UT-0069 trims emblem before length check — " CF " (4 with spaces) passes', () => {
    // After trim: "CF" → 2 chars → within bounds.
    expect(validateDraft({ ...goodDraft(), emblem: '  CF  ' }).valid).toBe(true);
  });

  it('UT-0070 trims emblem before length check — " ABCDEFGHI " (9 interior) fails', () => {
    // After trim: "ABCDEFGHI" → 9 chars → TOO_LONG.
    const result = validateDraft({ ...goodDraft(), emblem: ' ABCDEFGHI ' });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'emblem' && e.code === 'TOO_LONG')).toBe(true);
  });
});

// ─── UT-0071 non-violence clause ──────────────────────────────────────────────

describe('UT-0071 non-violence clause (FR-077, CON-013)', () => {
  it('passes when the clause matches NON_VIOLENCE_CLAUSE verbatim', () => {
    const result = validateDraft(goodDraft());
    expect(result.errors.some((e) => e.field === 'charter.nonViolenceClause')).toBe(false);
  });

  it('UT-0072 reports REQUIRED when the clause is absent', () => {
    const draft = goodDraft();
    delete draft.charter.nonViolenceClause;
    const result = validateDraft(draft);
    expect(result.valid).toBe(false);
    expect(
      result.errors.some((e) => e.field === 'charter.nonViolenceClause' && e.code === 'REQUIRED'),
    ).toBe(true);
  });

  it('UT-0073 reports REQUIRED when the clause is null', () => {
    const result = validateDraft({ ...goodDraft(), charter: { nonViolenceClause: null } });
    expect(result.valid).toBe(false);
    expect(
      result.errors.some((e) => e.field === 'charter.nonViolenceClause' && e.code === 'REQUIRED'),
    ).toBe(true);
  });

  it('UT-0074 reports ALTERED when the clause is present but modified', () => {
    const result = validateDraft({
      ...goodDraft(),
      charter: { nonViolenceClause: 'This party may use violence.' },
    });
    expect(result.valid).toBe(false);
    expect(
      result.errors.some((e) => e.field === 'charter.nonViolenceClause' && e.code === 'ALTERED'),
    ).toBe(true);
  });

  it('UT-0075 treats even a one-character alteration as ALTERED', () => {
    // Remove the final period.
    const altered = NON_VIOLENCE_CLAUSE.slice(0, -1);
    const result = validateDraft({
      ...goodDraft(),
      charter: { nonViolenceClause: altered },
    });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.code === 'ALTERED')).toBe(true);
  });

  it('NON_VIOLENCE_CLAUSE constant is a non-empty string', () => {
    expect(typeof NON_VIOLENCE_CLAUSE).toBe('string');
    expect(NON_VIOLENCE_CLAUSE.length).toBeGreaterThan(0);
  });
});

// ─── UT-0076 applyCharterDefaults ─────────────────────────────────────────────

describe('UT-0076 applyCharterDefaults fills defaults where silent (FR-012)', () => {
  it('returns a new object — never mutates the input', () => {
    const original = { petitionThresholdBps: 300 };
    const result = applyCharterDefaults(original);
    expect(result).not.toBe(original);
    expect(original.tiers).toBeUndefined();
    expect(result.tiers).toBeDefined();
  });

  it('UT-0077 fills petitionThresholdBps with platform default when absent', () => {
    const result = applyCharterDefaults({});
    expect(result.petitionThresholdBps).toBe(PETITION.DEFAULT_THRESHOLD_BPS);
  });

  it('preserves a declared petitionThresholdBps', () => {
    const result = applyCharterDefaults({ petitionThresholdBps: 500 });
    expect(result.petitionThresholdBps).toBe(500);
  });

  it('UT-0078 fills all four tiers with TIER_RULES defaults when tiers is absent', () => {
    const result = applyCharterDefaults({});
    for (const [tier, rules] of Object.entries(TIER_RULES)) {
      expect(result.tiers[tier]).toBeDefined();
      expect(result.tiers[tier].quorumBps).toBe(rules.quorumBps);
      expect(result.tiers[tier].approvalBps).toBe(rules.approvalBps);
      expect(result.tiers[tier].minTenureSeconds).toBe(rules.minTenureSeconds);
      expect(result.tiers[tier].timelockSeconds).toBe(rules.timelockSeconds);
    }
  });

  it('preserves a declared tier override while defaulting the others', () => {
    const result = applyCharterDefaults({
      tiers: { [TIER.CONSTITUTIONAL]: { minTenureSeconds: 365 * DAY } },
    });
    // Constitutional tier keeps the declared override.
    expect(result.tiers[TIER.CONSTITUTIONAL].minTenureSeconds).toBe(365 * DAY);
    // Constitutional fields NOT declared fall back to TIER_RULES.
    expect(result.tiers[TIER.CONSTITUTIONAL].quorumBps).toBe(
      TIER_RULES[TIER.CONSTITUTIONAL].quorumBps,
    );
    // Other tiers get TIER_RULES defaults.
    expect(result.tiers[TIER.OPERATIONAL].quorumBps).toBe(
      TIER_RULES[TIER.OPERATIONAL].quorumBps,
    );
  });

  it('handles null input gracefully', () => {
    const result = applyCharterDefaults(null);
    expect(result.petitionThresholdBps).toBe(PETITION.DEFAULT_THRESHOLD_BPS);
    expect(result.tiers).toBeDefined();
  });
});

// ─── UT-0079 validateCharter additive tier bounds ─────────────────────────────

describe('UT-0079 validateCharter additive tier bounds (D6)', () => {
  it('passes when all tier fields are absent (undefined passes silently)', () => {
    expect(validateCharter({}).valid).toBe(true);
    expect(validateCharter({ tiers: {} }).valid).toBe(true);
  });

  it('UT-0080 fails when a present tier quorumBps is below floor', () => {
    const r = validateCharter({
      tiers: { [TIER.OPERATIONAL]: { quorumBps: TIER_RULES[TIER.OPERATIONAL].quorumBps - 1 } },
    });
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.code === 'BELOW_FLOOR' && e.field.includes('quorumBps'))).toBe(
      true,
    );
  });

  it('UT-0081 passes when a present tier quorumBps equals or exceeds floor', () => {
    const floor = TIER_RULES[TIER.OPERATIONAL].quorumBps;
    expect(validateCharter({ tiers: { [TIER.OPERATIONAL]: { quorumBps: floor } } }).valid).toBe(
      true,
    );
    expect(
      validateCharter({ tiers: { [TIER.OPERATIONAL]: { quorumBps: floor + 100 } } }).valid,
    ).toBe(true);
  });

  it('UT-0082 fails when a present timelockSeconds is below floor', () => {
    const r = validateCharter({
      tiers: {
        [TIER.STRUCTURAL]: { timelockSeconds: TIER_RULES[TIER.STRUCTURAL].timelockSeconds - 1 },
      },
    });
    expect(r.valid).toBe(false);
    expect(r.errors.some((e) => e.code === 'BELOW_FLOOR')).toBe(true);
  });

  it('undefined timelockSeconds for a tier passes (absent = silent)', () => {
    // Only quorumBps declared, timelockSeconds undefined → no timelockSeconds error.
    const r = validateCharter({
      tiers: { [TIER.POLICY]: { quorumBps: TIER_RULES[TIER.POLICY].quorumBps } },
    });
    expect(r.errors.some((e) => e.field.includes('timelockSeconds'))).toBe(false);
  });
});

// ─── UT-0083 charterFingerprint ───────────────────────────────────────────────

describe('UT-0083 charterFingerprint stability (D4, FR-013)', () => {
  const base = { ...goodDraft() };

  it('same content → same fingerprint', () => {
    expect(charterFingerprint(base)).toBe(charterFingerprint(base));
  });

  it('UT-0084 whitespace differences do not change the fingerprint', () => {
    const a = { pillars: { finance: 'Our stance on finance. '.repeat(15) } };
    const b = { pillars: { finance: 'Our  stance  on  finance.  '.repeat(15) } };
    // Both normalise to the same collapsed whitespace form.
    expect(charterFingerprint(a)).toBe(charterFingerprint(b));
  });

  it('UT-0085 case differences do not change the fingerprint', () => {
    const a = { pillars: { finance: 'Our Finance Policy. '.repeat(15) } };
    const b = { pillars: { finance: 'our finance policy. '.repeat(15) } };
    expect(charterFingerprint(a)).toBe(charterFingerprint(b));
  });

  it('different pillar text changes the fingerprint', () => {
    const a = { pillars: { finance: 'PolicyA. '.repeat(35) } };
    const b = { pillars: { finance: 'PolicyB. '.repeat(35) } };
    expect(charterFingerprint(a)).not.toBe(charterFingerprint(b));
  });

  it('deterministic — no Date or randomness', () => {
    const fp1 = charterFingerprint(base);
    const fp2 = charterFingerprint(base);
    expect(fp1).toBe(fp2);
  });
});

// ─── UT-0086 normalizeCollisionKey ────────────────────────────────────────────

describe('UT-0086 normalizeCollisionKey (FR-010, DES-073)', () => {
  it('lowercases', () => {
    expect(normalizeCollisionKey('ABC')).toBe('abc');
  });

  it('trims leading and trailing whitespace', () => {
    expect(normalizeCollisionKey('  abc  ')).toBe('abc');
  });

  it('collapses internal whitespace runs', () => {
    expect(normalizeCollisionKey('forward  party')).toBe('forward party');
  });

  it('NFC pre-composed and decomposed forms are equal', () => {
    // U+00E9 (precomposed é) vs U+0065 U+0301 (decomposed e + combining accent).
    const precomposed = 'é';
    const decomposed = 'é';
    expect(normalizeCollisionKey(precomposed)).toBe(normalizeCollisionKey(decomposed));
  });

  it('diacritics are NOT stripped — café ≠ cafe', () => {
    expect(normalizeCollisionKey('café')).not.toBe(normalizeCollisionKey('cafe'));
  });

  it('handles null/undefined gracefully', () => {
    expect(normalizeCollisionKey(null)).toBe('');
    expect(normalizeCollisionKey(undefined)).toBe('');
  });
});

// ─── Constant sanity checks ───────────────────────────────────────────────────

describe('party-creation constants', () => {
  it('PROVISIONAL_MEMBER_CAP is 100 (FR-130)', () => {
    expect(PROVISIONAL_MEMBER_CAP).toBe(100);
  });

  it('EMBLEM bounds are 1–8 chars (D3)', () => {
    expect(EMBLEM.MIN_CHARS).toBe(1);
    expect(EMBLEM.MAX_CHARS).toBe(8);
  });

  it('REPETITION_COOLDOWN_SECONDS is a positive number (COOLDOWN-01)', () => {
    expect(typeof REPETITION_COOLDOWN_SECONDS).toBe('number');
    expect(REPETITION_COOLDOWN_SECONDS).toBeGreaterThan(0);
  });

  it('NON_VIOLENCE_CLAUSE is a non-empty string', () => {
    expect(typeof NON_VIOLENCE_CLAUSE).toBe('string');
    expect(NON_VIOLENCE_CLAUSE.length).toBeGreaterThan(20);
  });
});
