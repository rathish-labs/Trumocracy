/**
 * UT-0832..UT-0845 — ProposalService: authoring, competing proposals, deliberation,
 * lifecycle, and the FR-123 ballot-admission counting gate.
 *
 * Traces: FR-024, FR-079, FR-080, FR-090, FR-091, FR-092, FR-107, FR-122, FR-123.
 * Design: DES-103, DES-104, DES-105, DES-106.
 *
 * Test invariants (Doc 06 §2):
 *  - Authoring and deliberation NEVER call the eligibility seam — asserted by spy.
 *  - The competing-proposal fairness property is asserted as capability ABSENCE, not
 *    merely as behaviour: the first author has no method that touches another's proposal.
 *  - Every negative path asserts the SPECIFIC code.
 *  - All clocks injected; no Date.now().
 */
import { describe, it, expect, vi } from 'vitest';

import {
  InMemoryPartyStore,
  PartyCreationService,
  InMemoryProposalStore,
  ProposalService,
  COUNTING_ACTION,
} from '../src/index.js';
import {
  PARTICIPATION_TIER,
  PROPOSAL_STAGE,
  STAGE_ORDER,
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  PETITION,
  TIER,
  petitionThreshold,
} from '@trumocracy/protocol';

const T0 = 1_800_000_000;

const goodPillars = Object.fromEntries(
  PILLARS.map((p) => [p, `Our position on ${p}. `.repeat(30)]),
);

const partyDraft = (overrides = {}) => ({
  name: 'Commons Forward',
  jurisdiction: 'IN/KA',
  pillars: { ...goodPillars },
  emblem: 'CF',
  charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
  jurisdictionPopulation: 1_000,
  jurisdictionVerified: 1_000,
  ...overrides,
});

const proposalDraft = (overrides = {}) => ({
  question: 'Should the party adopt a four-day working week policy?',
  title: 'Adopt a four-day week',
  body: 'We propose the party adopt a four-day working week as policy. '.repeat(4),
  tier: TIER.POLICY,
  ...overrides,
});

/** Build an ACTIVE party plus a ProposalService sharing one injected clock. */
function makeService(clockTime = T0) {
  let now = clockTime;
  const clock = vi.fn(() => now);
  const setClock = (t) => {
    now = t;
  };

  const partyStore = new InMemoryPartyStore();
  const parties = new PartyCreationService(partyStore, clock);

  const { draftId } = parties.createDraft(partyDraft(), 'drafter-a');
  const { petitionId } = parties.publishDraft(draftId);
  const petition = partyStore.findPetitionById(petitionId);
  partyStore.updatePetition(petitionId, {
    endorsements: petitionThreshold({
      eligiblePopulation: petition.jurisdictionPopulation ?? 0,
      verifiedResidents: petition.jurisdictionVerified ?? 0,
      thresholdBps: petition.charter?.petitionThresholdBps,
    }),
  });
  const { partyId } = parties.activateParty(petitionId);

  const store = new InMemoryProposalStore();
  const service = new ProposalService(store, parties, clock);

  /** Join a member so they are a current member of the party. */
  const join = (pseudonym) => {
    parties.joinParty(partyId, pseudonym);
    return pseudonym;
  };

  return { service, store, parties, partyStore, partyId, clock, setClock, join };
}

/** An eligibility verifier stub whose verdict the test controls. */
const verifierReturning = (eligible, reason = null) => ({
  IS_INSECURE_MOCK: () => true,
  verifyEligibility: vi.fn(() => ({ eligible, reason })),
});

/** Walk a window forward to a named stage. Absolute, not cumulative — safe to re-call. */
const stageOf = (service, windowId) => service.participationStatus(windowId, '__probe__').stage;

const advanceTo = (service, windowId, stage) => {
  const target = STAGE_ORDER.indexOf(stage);
  while (STAGE_ORDER.indexOf(stageOf(service, windowId)) < target) {
    service.advanceStage(windowId);
  }
};

/**
 * Assert a method takes no eligibility verifier. Reading `.length` is not enough — a
 * parameter with a default is not counted — so inspect the declared parameter list.
 */
const takesNoVerifier = (fn) => {
  const params = fn.toString().slice(fn.toString().indexOf('('), fn.toString().indexOf(')') + 1);
  expect(params).not.toMatch(/verifier/i);
};

// ─── UT-0832 authoring requires Worker tier (FR-024, FR-090, OI-14) ───────────

describe('UT-0832 authoring requires Worker tier or above — self-declared, never approved (FR-024, FR-090)', () => {
  it('a Worker files a proposal and their authorship is recorded publicly', () => {
    const { service, join, partyId } = makeService();
    join('member-1');

    const { proposalId, windowId, isOriginal } = service.fileProposal(
      partyId,
      proposalDraft(),
      'member-1',
      PARTICIPATION_TIER.WORKER,
    );

    expect(isOriginal).toBe(true);
    const [filed] = service.proposalsInWindow(windowId);
    expect(filed.id).toBe(proposalId);
    expect(filed.authorPseudonym).toBe('member-1');
    expect(filed.authorTier).toBe(PARTICIPATION_TIER.WORKER);
  });

  it('a Supporter is refused, and the refusal says the tier is self-declarable', () => {
    const { service, join, partyId } = makeService();
    join('member-1');

    let thrown;
    try {
      service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.SUPPORTER);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('AUTHORSHIP_REQUIRES_WORKER_TIER');
    // The refusal must not read as a rejection on merit — it is a disclosure step.
    expect(thrown?.selfDeclarable).toBe(true);
    expect(thrown?.message).toContain('self-declared');
  });

  it('UT-0833 a non-member cannot author, whatever tier they claim', () => {
    const { service, partyId } = makeService();
    let thrown;
    try {
      service.fileProposal(partyId, proposalDraft(), 'stranger', PARTICIPATION_TIER.WORKER);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NOT_A_MEMBER');
  });

  it('UT-0834 authoring NEVER calls the eligibility verifier — it is not a counting action', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    const verifier = verifierReturning(true);

    service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);

    expect(verifier.verifyEligibility).not.toHaveBeenCalled();
    // Structural: the service holds no verifier at all, so authoring cannot reach one.
    expect(service._verifier).toBeUndefined();
    takesNoVerifier(service.fileProposal);
  });

  it('refuses a draft below the published floors, naming each deficiency', () => {
    const { service, join, partyId } = makeService();
    join('member-1');

    let thrown;
    try {
      service.fileProposal(
        partyId,
        proposalDraft({ body: 'short' }),
        'member-1',
        PARTICIPATION_TIER.WORKER,
      );
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('INVALID_DRAFT');
    expect(thrown?.errors).toEqual([
      expect.objectContaining({ field: 'body', code: 'TOO_SHORT' }),
    ]);
  });
});

// ─── UT-0835 the competing-proposal fairness property (FR-090) ────────────────

describe('UT-0835 a competing proposal joins the same decision window with equal standing (FR-090)', () => {
  it('a second author on the same question joins the first author’s window', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');

    const first = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    const second = service.fileProposal(
      partyId,
      proposalDraft({ title: 'Keep the five-day week' }),
      'member-2',
      PARTICIPATION_TIER.WORKER,
    );

    expect(second.windowId).toBe(first.windowId);
    expect(second.isOriginal).toBe(false);
    expect(second.competingCount).toBe(2);
  });

  it('the same question phrased differently still lands in ONE window', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');

    const first = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    const second = service.fileProposal(
      partyId,
      proposalDraft({
        question: '  SHOULD the party   adopt a four-day working week POLICY? ',
        title: 'A different answer',
      }),
      'member-2',
      PARTICIPATION_TIER.WORKER,
    );
    expect(second.windowId).toBe(first.windowId);
  });

  it('UT-0836 the first author holds NO power over a competing proposal (capability absence)', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    service.fileProposal(
      partyId,
      proposalDraft({ title: 'Keep the five-day week' }),
      'member-2',
      PARTICIPATION_TIER.WORKER,
    );

    // The fairness property is the ABSENCE of these capabilities. If any appears later,
    // the author would own the ballot — exactly what FR-090 forbids.
    for (const forbidden of [
      'withdrawProposal',
      'removeProposal',
      'rejectCompeting',
      'mergeProposal',
      'acceptAsAmendment',
      'prioritiseProposal',
      'setPrimaryProposal',
      'closeWindow',
      'vetoProposal',
    ]) {
      expect(typeof service[forbidden]).toBe('undefined');
    }

    // And nothing on the service surface matches the shape of such a power.
    const surface = Object.getOwnPropertyNames(Object.getPrototypeOf(service));
    expect(surface.some((m) => /withdraw|remove|delete|veto|reject|merge|prioriti/i.test(m))).toBe(
      false,
    );

    // Both proposals remain, in submission order, after every legal operation.
    expect(service.proposalsInWindow(windowId)).toHaveLength(2);
  });

  it('UT-0837 no proposal in a window carries a standing privilege — isOriginal is provenance only', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    service.fileProposal(
      partyId,
      proposalDraft({ title: 'Keep the five-day week' }),
      'member-2',
      PARTICIPATION_TIER.WORKER,
    );

    const proposals = service.proposalsInWindow(windowId);
    // Every proposal shares the window, therefore one stage and one schedule.
    expect(new Set(proposals.map((p) => p.windowId)).size).toBe(1);
    // No weight, rank, priority or standing field exists to differentiate them.
    for (const p of proposals) {
      for (const field of ['weight', 'rank', 'priority', 'standing', 'primary', 'featured']) {
        expect(p[field]).toBeUndefined();
      }
    }
    // The only difference between them is provenance and submission order.
    expect(proposals.map((p) => p.isOriginal)).toEqual([true, false]);
  });

  it('UT-0838 refuses a competing proposal once the ballot has opened, naming the stage', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);

    advanceTo(service, windowId, PROPOSAL_STAGE.DEBATE);

    let thrown;
    try {
      service.fileProposal(
        partyId,
        proposalDraft({ title: 'Too late' }),
        'member-2',
        PARTICIPATION_TIER.WORKER,
      );
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('WINDOW_CLOSED_TO_ENTRIES');
    expect(thrown?.stage).toBe(PROPOSAL_STAGE.DEBATE);
  });
});

// ─── UT-0839 deliberation is open to every member (FR-091, FR-122) ────────────

describe('UT-0839 deliberation is open to every member including open-tier, and produces records only (FR-091)', () => {
  const atDiscussion = () => {
    const ctx = makeService();
    ctx.join('member-1');
    ctx.join('member-2');
    const { windowId } = ctx.service.fileProposal(
      ctx.partyId,
      proposalDraft(),
      'member-1',
      PARTICIPATION_TIER.WORKER,
    );
    advanceTo(ctx.service, windowId, PROPOSAL_STAGE.DISCUSSION);
    return { ...ctx, windowId };
  };

  it('an open-tier Supporter may post a deliberation record without any verification', () => {
    const { service, windowId } = atDiscussion();
    const verifier = verifierReturning(false, 'NO_ID');

    const { deliberationId, stage } = service.postDeliberation(
      windowId,
      'member-2',
      'I disagree, and here is why.',
    );

    expect(deliberationId).toBeDefined();
    expect(stage).toBe(PROPOSAL_STAGE.DISCUSSION);
    expect(verifier.verifyEligibility).not.toHaveBeenCalled();
    takesNoVerifier(service.postDeliberation);
  });

  it('UT-0840 deliberation changes no outcome — the stage and the proposals are untouched', () => {
    const { service, windowId } = atDiscussion();
    const before = service.proposalsInWindow(windowId);

    service.postDeliberation(windowId, 'member-2', 'A strongly worded objection.');

    const after = service.proposalsInWindow(windowId);
    expect(after).toEqual(before);
    expect(service.participationStatus(windowId, 'member-2').stage).toBe(PROPOSAL_STAGE.DISCUSSION);
  });

  it('refuses deliberation outside the deliberative stages, naming the stage', () => {
    const { service, windowId } = atDiscussion();
    advanceTo(service, windowId, PROPOSAL_STAGE.VOTE);

    let thrown;
    try {
      service.postDeliberation(windowId, 'member-2', 'Too late to argue.');
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NOT_A_DELIBERATIVE_STAGE');
    expect(thrown?.stage).toBe(PROPOSAL_STAGE.VOTE);
  });

  it('refuses a non-member and an empty record', () => {
    const { service, windowId } = atDiscussion();

    expect(() => service.postDeliberation(windowId, 'stranger', 'hello')).toThrow(
      expect.objectContaining({ code: 'NOT_A_MEMBER' }),
    );
    expect(() => service.postDeliberation(windowId, 'member-2', '   ')).toThrow(
      expect.objectContaining({ code: 'EMPTY_RECORD' }),
    );
  });
});

// ─── UT-0841 lifecycle sequence (FR-091) ──────────────────────────────────────

describe('UT-0841 the lifecycle advances one stage at a time and cannot be skipped or vetoed (FR-091)', () => {
  it('walks the eight published stages in order and then refuses to go further', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);

    const walked = [PROPOSAL_STAGE.PROPOSAL];
    for (let i = 0; i < STAGE_ORDER.length - 1; i++) {
      walked.push(service.advanceStage(windowId).to);
    }
    expect(walked).toEqual([...STAGE_ORDER]);

    let thrown;
    try {
      service.advanceStage(windowId);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('LIFECYCLE_COMPLETE');
  });

  it('UT-0842 advanceStage takes no target, no force and no skip parameter (capability absence)', () => {
    const { service } = makeService();
    // A stage machine with an escape hatch is not code-enforced. One argument: the window.
    expect(service.advanceStage.length).toBe(1);
    for (const forbidden of ['skipTo', 'setStage', 'forceStage', 'rewindStage', 'cancelWindow']) {
      expect(typeof service[forbidden]).toBe('undefined');
    }
  });
});

// ─── UT-0843 the FR-123 ballot-admission counting gate ────────────────────────

describe('UT-0843 admission to the ballot is the counting gate, and it is the only seam call site (FR-123)', () => {
  const atVote = () => {
    const ctx = makeService();
    ctx.join('member-1');
    const { windowId } = ctx.service.fileProposal(
      ctx.partyId,
      proposalDraft(),
      'member-1',
      PARTICIPATION_TIER.WORKER,
    );
    advanceTo(ctx.service, windowId, PROPOSAL_STAGE.VOTE);
    return { ...ctx, windowId };
  };

  it('admits a verified member, calling the seam exactly once with scope BINDING_VOTE', () => {
    const { service, windowId } = atVote();
    const verifier = verifierReturning(true);

    const result = service.admitToBallot(windowId, 'member-1', verifier);

    expect(result).toEqual({ admitted: true, windowId, member: 'member-1' });
    expect(verifier.verifyEligibility).toHaveBeenCalledTimes(1);
    expect(verifier.verifyEligibility).toHaveBeenCalledWith(
      'member-1',
      'IN/KA',
      COUNTING_ACTION.BINDING_VOTE,
    );
  });

  it('UT-0844 refuses an open-tier member — and says plainly what they KEEP', () => {
    const { service, windowId } = atVote();
    const verifier = verifierReturning(false, 'ID_VERIFICATION_REQUIRED');

    let thrown;
    try {
      service.admitToBallot(windowId, 'member-1', verifier);
    } catch (e) {
      thrown = e;
    }
    expect(thrown?.code).toBe('NOT_COUNTING_ELIGIBLE');
    expect(thrown?.reason).toBe('ID_VERIFICATION_REQUIRED');
    // FR-020/FR-122: verification gates counting, never participation.
    expect(thrown?.stillAMember).toBe(true);
    expect(thrown?.mayStillDeliberate).toBe(true);

    // And the refusal really does leave membership intact.
    expect(service.participationStatus(windowId, 'member-1').member).toBe(true);
  });

  it('refuses admission before the ballot opens, and refuses a repeat admission', () => {
    const ctx = makeService();
    ctx.join('member-1');
    const { windowId } = ctx.service.fileProposal(
      ctx.partyId,
      proposalDraft(),
      'member-1',
      PARTICIPATION_TIER.WORKER,
    );
    const verifier = verifierReturning(true);

    expect(() => ctx.service.admitToBallot(windowId, 'member-1', verifier)).toThrow(
      expect.objectContaining({ code: 'NOT_AT_VOTE_STAGE' }),
    );

    advanceTo(ctx.service, windowId, PROPOSAL_STAGE.VOTE);
    ctx.service.admitToBallot(windowId, 'member-1', verifier);
    expect(() => ctx.service.admitToBallot(windowId, 'member-1', verifier)).toThrow(
      expect.objectContaining({ code: 'ALREADY_ADMITTED' }),
    );
  });

  it('UT-0845 the service never casts, stores or counts a vote — that is the ballot layer', () => {
    const { service } = makeService();
    for (const forbidden of ['castVote', 'vote', 'tally', 'countVotes', 'recordVote', 'results']) {
      expect(typeof service[forbidden]).toBe('undefined');
    }
    // participationStatus is a READ: it takes no verifier, so a status check can never
    // trigger verification as a side effect.
    takesNoVerifier(service.participationStatus);
  });
});

// ─── UT-0846 the permanent decision trail (FR-092, FR-107) ────────────────────

describe('UT-0846 the decision trail is append-only and records the whole deliberation (FR-092)', () => {
  it('records window opening, every proposal, deliberation, stage change and admission in order', () => {
    const { service, join, partyId } = makeService();
    join('member-1');
    join('member-2');

    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    service.fileProposal(
      partyId,
      proposalDraft({ title: 'Keep the five-day week' }),
      'member-2',
      PARTICIPATION_TIER.WORKER,
    );
    advanceTo(service, windowId, PROPOSAL_STAGE.DISCUSSION);
    service.postDeliberation(windowId, 'member-2', 'My objection, recorded permanently.');
    advanceTo(service, windowId, PROPOSAL_STAGE.VOTE);
    service.admitToBallot(windowId, 'member-1', verifierReturning(true));

    const trail = service.decisionTrail(windowId).map((e) => e.type);
    expect(trail).toEqual([
      'WINDOW_OPENED',
      'PROPOSAL_FILED',
      'PROPOSAL_FILED',
      'STAGE_ADVANCED', // → REVIEW
      'STAGE_ADVANCED', // → DISCUSSION
      'DELIBERATION_POSTED',
      'STAGE_ADVANCED', // → DEBATE
      'STAGE_ADVANCED', // → VOTE
      'BALLOT_ADMISSION',
    ]);
    // Authorship is in the trail: agenda-setting is visible (FR-090, FR-092).
    const filed = service.decisionTrail(windowId).filter((e) => e.type === 'PROPOSAL_FILED');
    expect(filed.map((e) => e.author)).toEqual(['member-1', 'member-2']);
  });

  it('UT-0847 the trail cannot be rewritten by a caller, and the store exposes no delete path', () => {
    const { service, store, join, partyId } = makeService();
    join('member-1');
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);

    const trail = service.decisionTrail(windowId);
    trail[0].type = 'TAMPERED';
    trail.push({ type: 'FABRICATED' });

    // Copies out: mutating what you received changes nothing (FR-107).
    expect(service.decisionTrail(windowId)[0].type).toBe('WINDOW_OPENED');
    expect(service.decisionTrail(windowId)).toHaveLength(2);

    // The store offers append and read only — no update, no delete, no rewrite.
    const storeSurface = Object.getOwnPropertyNames(Object.getPrototypeOf(store));
    expect(
      storeSurface.some((m) => /deleteTrail|updateTrail|removeTrail|clearTrail|rewrite/i.test(m)),
    ).toBe(false);
  });

  it('UT-0848 timestamps come from the injected clock, so the same run is reproducible', () => {
    const { service, join, partyId, setClock } = makeService();
    join('member-1');
    setClock(T0 + 500);
    const { windowId } = service.fileProposal(partyId, proposalDraft(), 'member-1', PARTICIPATION_TIER.WORKER);
    expect(service.decisionTrail(windowId).every((e) => e.at === T0 + 500)).toBe(true);
  });

  it('IS_INSECURE_MOCK delegates from the service to its store', () => {
    const { service, store } = makeService();
    expect(store.IS_INSECURE_MOCK()).toBe(true);
    expect(service.IS_INSECURE_MOCK()).toBe(true);
  });
});
