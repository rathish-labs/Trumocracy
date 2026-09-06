/**
 * UT-0030..UT-0060 — party lifecycle, charter limits, region hierarchy, anonymity guard,
 * issuer-set invariants and feature flags.
 */
import { describe, it, expect } from 'vitest';
import {
  PARTY_STATE,
  canTransition,
  assertTransition,
  validateVision,
  validateCharter,
  canAmendClause,
  canFork,
  PILLARS,
  TIER,
  FORK,
  parseRegion,
  ancestors,
  isWithin,
  resolveAnonymityScope,
  validateIssuerSet,
  regionPreimage,
  MIN_ANONYMITY_SET,
  FLAGS,
  isEnabled,
  permanentFlags,
} from '../src/index.js';

const DAY = 86_400;

const goodPillars = Object.fromEntries(
  PILLARS.map((p) => [p, `Our position on ${p}. `.repeat(30)]),
);

describe('UT-0030 party state machine', () => {
  it('allows the intended lifecycle', () => {
    expect(canTransition(PARTY_STATE.DRAFT, PARTY_STATE.PETITION)).toBe(true);
    expect(canTransition(PARTY_STATE.PETITION, PARTY_STATE.ACTIVE)).toBe(true);
    expect(canTransition(PARTY_STATE.PETITION, PARTY_STATE.EXPIRED)).toBe(true);
    expect(canTransition(PARTY_STATE.ACTIVE, PARTY_STATE.DISSOLVED)).toBe(true);
  });

  it('UT-0031 forbids skipping the petition stage', () => {
    expect(canTransition(PARTY_STATE.DRAFT, PARTY_STATE.ACTIVE)).toBe(false);
    expect(() => assertTransition(PARTY_STATE.DRAFT, PARTY_STATE.ACTIVE)).toThrowError(/cannot move/);
  });

  it('UT-0032 forbids resurrecting an expired or dissolved party', () => {
    expect(canTransition(PARTY_STATE.EXPIRED, PARTY_STATE.ACTIVE)).toBe(false);
    expect(canTransition(PARTY_STATE.DISSOLVED, PARTY_STATE.ACTIVE)).toBe(false);
  });

  it('has no "approved" or "verified" state that would need a gatekeeper', () => {
    const states = Object.values(PARTY_STATE);
    expect(states).not.toContain('approved');
    expect(states).not.toContain('verified');
    expect(states).not.toContain('featured');
  });
});

describe('UT-0033 party vision validation', () => {
  const base = { name: 'Commons Forward', jurisdiction: 'IN/KA', pillars: goodPillars };

  it('accepts a complete vision', () => {
    expect(validateVision(base).valid).toBe(true);
  });

  it('UT-0034 requires all eight pillars', () => {
    for (const missing of PILLARS) {
      const pillars = { ...goodPillars };
      delete pillars[missing];
      const r = validateVision({ ...base, pillars });
      expect(r.valid).toBe(false);
      expect(r.errors.some((e) => e.field === `pillars.${missing}`)).toBe(true);
    }
  });

  it('UT-0035 rejects placeholder pillars', () => {
    const r = validateVision({ ...base, pillars: { ...goodPillars, finance: 'TBD' } });
    expect(r.valid).toBe(false);
    expect(r.errors[0].code).toBe('TOO_SHORT');
  });

  it('rejects an invalid jurisdiction', () => {
    expect(validateVision({ ...base, jurisdiction: 'not/a/region' }).valid).toBe(false);
    expect(validateVision({ ...base, jurisdiction: '' }).valid).toBe(false);
  });

  it('rejects unknown pillars rather than silently ignoring them', () => {
    const r = validateVision({ ...base, pillars: { ...goodPillars, crypto: 'x'.repeat(300) } });
    expect(r.errors.some((e) => e.code === 'UNKNOWN_PILLAR')).toBe(true);
  });

  it('UT-0036 does not judge political content — only completeness', () => {
    const contentious = Object.fromEntries(
      PILLARS.map((p) => [p, `A position on ${p} many would find disagreeable. `.repeat(20)]),
    );
    expect(validateVision({ ...base, pillars: contentious }).valid).toBe(true);
  });
});

describe('UT-0037 charter limits — a party cannot configure away its protections', () => {
  it('accepts a stricter-than-protocol charter', () => {
    expect(validateCharter({ tiers: { [TIER.CONSTITUTIONAL]: { minTenureSeconds: 365 * DAY } } }).valid).toBe(true);
  });

  it('UT-0038 rejects a constitutional tenure below the floor', () => {
    const r = validateCharter({ tiers: { [TIER.CONSTITUTIONAL]: { minTenureSeconds: 10 * DAY } } });
    expect(r.valid).toBe(false);
    expect(r.errors[0].code).toBe('BELOW_FLOOR');
  });

  it('UT-0039 forbids gated membership — no party may re-invent the gatekeeper', () => {
    const r = validateCharter({ membershipRequiresApproval: true });
    expect(r.valid).toBe(false);
    expect(r.errors[0].code).toBe('FORBIDDEN');
  });

  it('UT-0040 forbids any vote weighting other than one-person-one-vote', () => {
    for (const scheme of ['token-weighted', 'tenure-weighted', 'quadratic', 'contribution-weighted']) {
      const r = validateCharter({ voteWeighting: scheme });
      expect(r.valid).toBe(false);
      expect(r.errors[0].code).toBe('FORBIDDEN');
    }
    expect(validateCharter({ voteWeighting: 'one-person-one-vote' }).valid).toBe(true);
  });

  it('rejects a petition threshold outside the permitted band', () => {
    expect(validateCharter({ petitionThresholdBps: 5 }).valid).toBe(false);
    expect(validateCharter({ petitionThresholdBps: 9_999 }).valid).toBe(false);
    expect(validateCharter({ petitionThresholdBps: 300 }).valid).toBe(true);
  });
});

describe('UT-0041 entrenched and immutable clauses (ADR-008 §4)', () => {
  const charter = {
    immutableClauses: ['no-corporate-donations'],
    entrenchedClauses: { 'party-name': { approvalBps: 9_000, timelockSeconds: 60 * DAY } },
  };

  it('an immutable clause cannot be amended by any majority', () => {
    expect(canAmendClause(charter, 'no-corporate-donations').allowed).toBe(false);
  });

  it('an entrenched clause is amendable but at a higher bar', () => {
    const r = canAmendClause(charter, 'party-name');
    expect(r.allowed).toBe(true);
    expect(r.requiredApprovalBps).toBe(9_000);
  });

  it('an ordinary clause follows the tier rules', () => {
    expect(canAmendClause(charter, 'meeting-cadence').reason).toBe('AMENDABLE');
  });
});

describe('UT-0042 fork rights — exit as the ultimate anti-capture protection', () => {
  const initiatedAt = 1_700_000_000;

  it('requires 10% of members to initiate', () => {
    expect(canFork({ initiators: 99, memberCount: 1_000, initiatedAt, now: initiatedAt }).reason).toBe(
      'INSUFFICIENT_INITIATORS',
    );
    expect(canFork({ initiators: 100, memberCount: 1_000, initiatedAt, now: initiatedAt }).reason).toBe('COOLING_OFF');
  });

  it('UT-0043 completes after the cooling-off period, needing nobody’s permission', () => {
    const r = canFork({
      initiators: 100,
      memberCount: 1_000,
      initiatedAt,
      now: initiatedAt + FORK.COOLING_OFF_SECONDS,
    });
    expect(r.allowed).toBe(true);
  });

  it('handles an empty party', () => {
    expect(canFork({ initiators: 0, memberCount: 0, initiatedAt, now: initiatedAt }).reason).toBe('NO_MEMBERS');
  });
});

describe('UT-0044 region hierarchy', () => {
  it('parses a full ward path', () => {
    const r = parseRegion('IN/KA/BLR/BLR-S/W-152');
    expect(r.level).toBe('ward');
    expect(r.depth).toBe(5);
  });

  it('UT-0045 refuses anything finer than a ward', () => {
    expect(() => parseRegion('IN/KA/BLR/BLR-S/W-152/HOUSE-12')).toThrowError(/max is 5/);
  });

  it('refuses malformed paths instead of guessing', () => {
    for (const bad of ['', '/IN', 'IN/', 'IN//KA', 'in/ka', 'IN/K A', 'INDIA/KA']) {
      expect(() => parseRegion(bad)).toThrow();
    }
  });

  it('UT-0046 has no way to express coordinates or an address', () => {
    expect(() => parseRegion('12.9716,77.5946')).toThrow();
    expect(() => parseRegion('IN/KA/BLR/560001')).not.toThrow(); // a postcode-shaped segment is
    // structurally legal, but it is still only an administrative label — the schema carries no
    // field for a street, a house number or a coordinate anywhere in the system.
  });

  it('computes ancestors nearest-first', () => {
    expect(ancestors('IN/KA/BLR/BLR-S')).toEqual(['IN/KA/BLR', 'IN/KA', 'IN']);
    expect(ancestors('IN')).toEqual([]);
  });

  it('tests containment', () => {
    expect(isWithin('IN/KA/BLR', 'IN/KA')).toBe(true);
    expect(isWithin('IN/KA', 'IN/KA/BLR')).toBe(false);
    expect(isWithin('IN/TN', 'IN/KA')).toBe(false);
  });

  it('UT-0047 versions the scheme so boundary redraws do not rewrite history', () => {
    expect(regionPreimage('IN/KA', 1)).toBe('v1:IN/KA');
    expect(regionPreimage('IN/KA', 2)).toBe('v2:IN/KA');
    expect(regionPreimage('IN/KA', 1)).not.toBe(regionPreimage('IN/KA', 2));
  });
});

describe('UT-0048 anonymity-set guard (NFR-PRIV-02)', () => {
  const counts = { 'IN/KA/BLR/BLR-S/W-152': 40, 'IN/KA/BLR/BLR-S': 300, 'IN/KA/BLR': 5_000, 'IN/KA': 90_000, IN: 2_000_000 };
  const countOf = (p) => counts[p] ?? 0;

  it('uses the ward directly when it is big enough', () => {
    const r = resolveAnonymityScope('IN/KA/BLR', countOf);
    expect(r.escalated).toBe(false);
    expect(r.regionPath).toBe('IN/KA/BLR');
  });

  it('UT-0049 escalates a thinly-populated ward to the nearest safe ancestor', () => {
    const r = resolveAnonymityScope('IN/KA/BLR/BLR-S/W-152', countOf);
    expect(r.escalated).toBe(true);
    expect(r.regionPath).toBe('IN/KA/BLR');
    expect(r.size).toBeGreaterThanOrEqual(MIN_ANONYMITY_SET);
  });

  it('UT-0050 refuses to publish when even the country is too thin, rather than pretending', () => {
    const sparse = () => 5;
    expect(resolveAnonymityScope('IN/KA/BLR', sparse)).toBeNull();
  });
});

describe('UT-0051 issuer-set invariant (ADR-003)', () => {
  it('requires at least two active issuers', () => {
    const r = validateIssuerSet([{ id: 'a', stateOperated: false }]);
    expect(r.valid).toBe(false);
    expect(r.reason).toBe('TOO_FEW_ISSUERS');
  });

  it('UT-0052 refuses a region where the state is the only issuer of personhood', () => {
    const r = validateIssuerSet([
      { id: 'civil-registry', stateOperated: true },
      { id: 'national-eid', stateOperated: true },
    ]);
    expect(r.valid).toBe(false);
    expect(r.reason).toBe('NO_NON_STATE_ISSUER');
  });

  it('accepts a mixed set', () => {
    expect(
      validateIssuerSet([
        { id: 'civil-registry', stateOperated: true },
        { id: 'epassport-nfc', stateOperated: false },
      ]).valid,
    ).toBe(true);
  });

  it('ignores deactivated issuers when counting', () => {
    const r = validateIssuerSet([
      { id: 'a', stateOperated: false, active: false },
      { id: 'b', stateOperated: true },
      { id: 'c', stateOperated: false },
    ]);
    expect(r.valid).toBe(true);
    expect(r.count).toBe(2);
  });
});

describe('UT-0053 feature flags — risky capabilities ship dark', () => {
  it('keeps MACI, elections, recall, treasury and fork off in production until their phase lands', () => {
    for (const key of ['maci_voting', 'elections', 'recall', 'treasury', 'fork', 'delegation']) {
      expect(isEnabled(key, 'prod')).toBe(false);
    }
  });

  it('UT-0054 keeps the censorship escape hatch and gas sponsorship permanently on', () => {
    expect(isEnabled('l1_force_inclusion', 'prod')).toBe(true);
    expect(isEnabled('sponsored_gas', 'prod')).toBe(true);
  });

  it('UT-0055 enforces every on-chain-relevant flag is marked onChain', () => {
    // A flag that only exists in the frontend would leave the risky contract path live.
    for (const key of ['elections', 'recall', 'maci_voting', 'treasury', 'fork', 'delegation']) {
      const flag = Object.values(FLAGS).find((f) => f.key === key);
      expect(flag.onChain).toBe(true);
    }
  });

  it('UT-0888 the maci_voting description states the FR-131 v1 truth, not the retired framing', () => {
    // Doc 09 v1.3.0 REL-LIM-18 site (1). FR-131 (Doc 02 §4.45): the banned words may appear
    // only negated; the description must not say votes "are anonymous".
    const desc = FLAGS.MACI_VOTING.description;
    expect(desc).not.toMatch(/votes are anonymous/i);
    expect(desc).not.toMatch(/\bis anonymous\b/i);
    expect(desc).toMatch(/NOT anonymous/);
    expect(desc).toMatch(/CAN see vote direction/);
    expect(desc).toMatch(/FR-131/);
  });

  it('rejects unknown flags and environments loudly', () => {
    expect(() => isEnabled('nope', 'prod')).toThrowError(/unknown feature flag/);
    expect(() => isEnabled('elections', 'production')).toThrowError(/unknown environment/);
  });

  it('respects explicit overrides', () => {
    expect(isEnabled('elections', 'prod', { elections: true })).toBe(true);
  });

  it('records a removal target for every flag (no permanent configuration by accident)', () => {
    expect(permanentFlags()).toEqual([]);
  });
});
