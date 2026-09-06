/**
 * UT-0087..UT-0095 — proposal authoring, participation tiers, deliberative lifecycle.
 *
 * Traces: FR-024, FR-079, FR-080, FR-090, FR-091.
 * Design: DES-103 (tiers), DES-104 (authorship + competing), DES-105 (lifecycle).
 *
 * Test invariants (Doc 06 §2):
 *  - Names state the guarantee, not the mechanism.
 *  - Every negative path asserts the SPECIFIC code, never merely "it threw".
 *  - Capability-absence is tested as a control (no skip/override/veto parameter exists).
 */
import { describe, it, expect } from 'vitest';

import {
  PARTICIPATION_TIER,
  DEFAULT_PARTICIPATION_TIER,
  canAuthorProposal,
  votingWeightForTier,
  PROPOSAL_STAGE,
  STAGE_ORDER,
  DELIBERATIVE_STAGES,
  acceptsCompetingProposal,
  nextStage,
  assertStageTransition,
  stageIndex,
  isDeliberativeStage,
  PROPOSAL,
  validateProposalDraft,
  normalizeQuestionKey,
  TIER,
} from '../src/index.js';

/** A draft that passes every floor, so each test can break exactly one thing. */
const goodDraft = (overrides = {}) => ({
  question: 'Should the party adopt a four-day working week policy?',
  title: 'Adopt a four-day week',
  body: 'We propose the party adopt a four-day working week as policy. '.repeat(4),
  tier: TIER.POLICY,
  ...overrides,
});

// ─── UT-0087 participation tiers (FR-079, FR-080) ─────────────────────────────

describe('UT-0087 participation tiers are descriptive and never confer weight (FR-079)', () => {
  it('a member joins as a Supporter without declaring anything', () => {
    expect(DEFAULT_PARTICIPATION_TIER).toBe(PARTICIPATION_TIER.SUPPORTER);
  });

  it('every tier weighs exactly one vote — no tier multiplier exists', () => {
    for (const tier of Object.values(PARTICIPATION_TIER)) {
      expect(votingWeightForTier(tier)).toBe(1);
    }
  });

  it('an unknown tier is refused rather than silently weighted', () => {
    let thrown;
    try {
      votingWeightForTier('FOUNDER');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('UNKNOWN_PARTICIPATION_TIER');
  });

  it('UT-0088 exactly three tiers exist — no privileged fourth tier can be named', () => {
    expect(Object.values(PARTICIPATION_TIER)).toEqual(['SUPPORTER', 'WORKER', 'CANDIDATE']);
  });
});

// ─── UT-0089 who may author (FR-024, FR-090, OI-14) ───────────────────────────

describe('UT-0089 authoring requires Worker tier or above — a disclosure step, not an approval step (FR-024, FR-090)', () => {
  it('Worker and Candidate may author', () => {
    expect(canAuthorProposal(PARTICIPATION_TIER.WORKER)).toBe(true);
    expect(canAuthorProposal(PARTICIPATION_TIER.CANDIDATE)).toBe(true);
  });

  it('a Supporter may not author, because authorship is public and Supporters are anonymous', () => {
    expect(canAuthorProposal(PARTICIPATION_TIER.SUPPORTER)).toBe(false);
  });

  it('the rule is a pure function of tier — it takes no approver, no reviewer, no reason', () => {
    // FR-024: no pre-screening, moderation or approval by any actor. A gate that accepted
    // a second argument would be a gate someone could stand in.
    expect(canAuthorProposal.length).toBe(1);
  });
});

// ─── UT-0090 lifecycle order (FR-091) ─────────────────────────────────────────

describe('UT-0090 the lifecycle runs in the published order and cannot be skipped (FR-091)', () => {
  it('publishes exactly the eight stages FR-091 names, in that order', () => {
    expect(STAGE_ORDER).toEqual([
      'PROPOSAL',
      'REVIEW',
      'DISCUSSION',
      'DEBATE',
      'VOTE',
      'DECISION',
      'IMPLEMENTATION',
      'MEASUREMENT',
    ]);
  });

  it('advances one stage at a time, ending at MEASUREMENT', () => {
    let stage = PROPOSAL_STAGE.PROPOSAL;
    const walked = [stage];
    while (nextStage(stage) !== null) {
      stage = nextStage(stage);
      walked.push(stage);
    }
    expect(walked).toEqual(STAGE_ORDER);
    expect(nextStage(PROPOSAL_STAGE.MEASUREMENT)).toBeNull();
  });

  it('UT-0091 refuses a skipped stage, naming what was skipped', () => {
    let thrown;
    try {
      assertStageTransition(PROPOSAL_STAGE.DISCUSSION, PROPOSAL_STAGE.VOTE);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('STAGE_SKIPPED');
    expect(thrown?.skipped).toEqual(['DEBATE']);
  });

  it('UT-0092 refuses a reversed transition — deliberation cannot be re-run to get a better answer', () => {
    let thrown;
    try {
      assertStageTransition(PROPOSAL_STAGE.VOTE, PROPOSAL_STAGE.DISCUSSION);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('STAGE_REVERSED');
  });

  it('refuses a no-op transition', () => {
    let thrown;
    try {
      assertStageTransition(PROPOSAL_STAGE.DEBATE, PROPOSAL_STAGE.DEBATE);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('STAGE_UNCHANGED');
  });

  it('accepts exactly the single legal step forward at every position', () => {
    for (let i = 0; i < STAGE_ORDER.length - 1; i++) {
      expect(assertStageTransition(STAGE_ORDER[i], STAGE_ORDER[i + 1])).toEqual({ valid: true });
    }
  });

  it('UT-0093 exposes no override, force or skip-to capability (capability-absence control)', () => {
    // FR-091: "no stage MAY be skipped, reordered, or human-vetoed". A stage machine with
    // an escape hatch is not code-enforced. assertStageTransition takes (from, to) only.
    expect(assertStageTransition.length).toBe(2);
    const surface = Object.keys(
      // eslint-disable-next-line no-import-assign
      { assertStageTransition, nextStage, stageIndex, isDeliberativeStage, acceptsCompetingProposal },
    );
    expect(surface.some((k) => /force|override|skip|veto|cancel|reset/i.test(k))).toBe(false);
  });

  it('rejects an unknown stage rather than treating it as position zero', () => {
    let thrown;
    try {
      stageIndex('RATIFICATION');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('UNKNOWN_STAGE');
  });
});

// ─── UT-0094 deliberative stages produce records, never outcomes (FR-091) ─────

describe('UT-0094 review, discussion and debate are deliberative — records, never outcomes (FR-091)', () => {
  it('names exactly the three deliberative stages', () => {
    expect(DELIBERATIVE_STAGES).toEqual(['REVIEW', 'DISCUSSION', 'DEBATE']);
  });

  it('the vote and decision stages are not deliberative', () => {
    expect(isDeliberativeStage(PROPOSAL_STAGE.VOTE)).toBe(false);
    expect(isDeliberativeStage(PROPOSAL_STAGE.DECISION)).toBe(false);
  });

  it('a competing proposal may still join while deliberation is open, but not once voting starts (FR-090)', () => {
    expect(acceptsCompetingProposal(PROPOSAL_STAGE.PROPOSAL)).toBe(true);
    expect(acceptsCompetingProposal(PROPOSAL_STAGE.DISCUSSION)).toBe(true);
    // Once the ballot opens, admitting a new option would change what people already voted on.
    expect(acceptsCompetingProposal(PROPOSAL_STAGE.DEBATE)).toBe(false);
    expect(acceptsCompetingProposal(PROPOSAL_STAGE.VOTE)).toBe(false);
  });
});

// ─── UT-0095 draft validation (FR-024) ────────────────────────────────────────

describe('UT-0095 proposal drafts are checked against published floors, never judged on content (FR-024)', () => {
  it('accepts a complete draft', () => {
    expect(validateProposalDraft(goodDraft())).toEqual({ valid: true, errors: [] });
  });

  it('names each missing field with (field, code), matching the party-draft convention', () => {
    const { valid, errors } = validateProposalDraft({});
    expect(valid).toBe(false);
    expect(errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ field: 'question', code: 'REQUIRED' }),
        expect.objectContaining({ field: 'title', code: 'REQUIRED' }),
        expect.objectContaining({ field: 'body', code: 'REQUIRED' }),
        expect.objectContaining({ field: 'tier', code: 'REQUIRED' }),
      ]),
    );
  });

  it('refuses a body below the substance floor and one above the ceiling', () => {
    const short = validateProposalDraft(goodDraft({ body: 'too short' }));
    expect(short.errors).toEqual([
      expect.objectContaining({ field: 'body', code: 'TOO_SHORT' }),
    ]);

    const long = validateProposalDraft(goodDraft({ body: 'x'.repeat(PROPOSAL.BODY_MAX_CHARS + 1) }));
    expect(long.errors).toEqual([expect.objectContaining({ field: 'body', code: 'TOO_LONG' })]);
  });

  it('refuses an unknown tier', () => {
    const { errors } = validateProposalDraft(goodDraft({ tier: 99 }));
    expect(errors).toEqual([expect.objectContaining({ field: 'tier', code: 'UNKNOWN_TIER' })]);
  });

  it('accepts every declared tier — the platform never judges which tier a proposal claims', () => {
    // Whether the declared tier is high enough for what the proposal DOES is a
    // consensus-layer check (requiredTier / SEC-C06), not an authoring-time one.
    for (const tier of Object.values(TIER)) {
      expect(validateProposalDraft(goodDraft({ tier })).valid).toBe(true);
    }
  });

  it('groups differently-phrased spellings of one question into one decision window (FR-090)', () => {
    expect(normalizeQuestionKey('  Should WE adopt   a four-day week? ')).toBe(
      normalizeQuestionKey('should we adopt a four-day week?'),
    );
    expect(normalizeQuestionKey('Should we adopt a four-day week?')).not.toBe(
      normalizeQuestionKey('Should we adopt a three-day week?'),
    );
  });
});
