/**
 * UT-0872..UT-0882 — proposals & debate web flow.
 *
 * Traces: FR-024, FR-079, FR-080, FR-090, FR-091, FR-092, FR-122, FR-123, FR-031/NFR-003,
 * NFR-023 (plain language), DES-085 (jargon filter).
 *
 * The properties that matter here are honesty properties, so they are tested as such:
 *  - the competing-proposal rule is visible and the two proposals are rendered identically;
 *  - the Worker gate reads as a disclosure step, never a judgement;
 *  - deliberation is open to open-tier members and says so;
 *  - the vote step carries the coercion-resistance notice BEFORE the member acts;
 *  - the trail admits what v1 does not yet do.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within, cleanup, fireEvent } from '@testing-library/react';

import { ProposalsAndDebate } from '@/components/ProposalsAndDebate';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import {
  ConventionalEligibilityVerifier,
  InMemoryPartyStore,
  InMemoryProposalStore,
  PartyCreationService,
  ProposalService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
  type IdDocumentResult,
} from '@trumocracy/sdk';
import {
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  PROPOSAL_STAGE,
  STAGE_ORDER,
  petitionThreshold,
} from '@trumocracy/protocol';

const MEMBER = 'demo-member';
const NEIGHBOUR = 'demo-neighbour';

const seedPillars = (name: string) =>
  Object.fromEntries(PILLARS.map((p: string) => [p, `${name} on ${p}. `.repeat(30)]));

function buildFixture({ verified = false }: { verified?: boolean } = {}) {
  const partyStore = new InMemoryPartyStore();
  const parties = new PartyCreationService(partyStore);
  const draft = {
    name: 'Commons Forward',
    jurisdiction: 'IN/KA',
    pillars: seedPillars('Commons Forward'),
    emblem: 'CF',
    charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    jurisdictionPopulation: 1_000,
    jurisdictionVerified: 1_000,
  };
  const { draftId } = parties.createDraft(draft, 'drafter');
  const { petitionId } = parties.publishDraft(draftId);
  partyStore.updatePetition(petitionId, {
    endorsements: petitionThreshold({ eligiblePopulation: 1_000, verifiedResidents: 1_000 }),
  });
  const { partyId } = parties.activateParty(petitionId);
  parties.joinParty(partyId, MEMBER);
  parties.joinParty(partyId, NEIGHBOUR);

  const proposalStore = new InMemoryProposalStore();
  const service = new ProposalService(proposalStore, parties);

  // DES-100 allowlist row for a verified member; empty store = open-tier visitor.
  // DES-100 allowlist row — every retained field, and nothing beyond them.
  const credentialStore = new Map<string, IdDocumentResult>(
    verified
      ? [
          [
            MEMBER,
            {
              id_verified_flag: true,
              age_verified: true,
              issuing_region: 'IN',
              subject_id_hash: 'hmac-of-document-id',
              verified_at: '2026-08-29T00:00:00Z',
            },
          ],
        ]
      : [],
  );
  const verifier = new ConventionalEligibilityVerifier({
    phoneVerifier: new StubPhoneVerifier(),
    idDocumentChecker: new StubIdDocumentChecker(),
    credentialStore,
  });

  return { service, partyId, verifier, parties };
}

const draftFor = (title: string, question = 'Should the party meet in the evening instead?') => ({
  question,
  title,
  body: 'A full explanation of what this proposal would do and why it is worth doing. '.repeat(3),
  tier: 1,
});

const renderFlow = (fixture: ReturnType<typeof buildFixture>) =>
  render(
    <LocaleProvider>
      <ProposalsAndDebate
        service={fixture.service as never}
        verifier={fixture.verifier}
        partyId={fixture.partyId}
        memberPseudonym={MEMBER}
      />
    </LocaleProvider>,
  );

beforeEach(cleanup);

// ─── UT-0872 the Worker-tier gate is a disclosure step (FR-024, FR-080) ───────

describe('UT-0872 the Worker gate explains a disclosure step and never judges the idea (FR-024, FR-080)', () => {
  it('a Supporter sees the gate, the reason, and a declaration they make themselves', () => {
    renderFlow(buildFixture());

    const gate = screen.getByTestId('worker-gate');
    expect(within(gate).getByText(/authorship is public|do so in the open/i)).toBeTruthy();
    // FR-080: nobody approves it.
    expect(within(gate).getByText(/Nobody approves it/i)).toBeTruthy();
    // It must not read as a judgement on the proposal's merit.
    expect(screen.getByTestId('worker-gate-not-judgement').textContent).toMatch(
      /not about whether your idea is good/i,
    );
  });

  it('UT-0873 a Supporter is not offered the filing form at all', () => {
    renderFlow(buildFixture());
    expect(screen.queryByTestId('file-proposal')).toBeNull();
  });

  it('declaring Worker opens the filing form — no approval step appears anywhere', () => {
    renderFlow(buildFixture());
    fireEvent.click(screen.getByTestId('declare-worker'));

    expect(screen.getByTestId('file-proposal')).toBeTruthy();
    // No control on this surface asks anyone for permission.
    for (const btn of screen.getAllByRole('button')) {
      expect(btn.textContent ?? '').not.toMatch(/approve|request|permission|await|pending review/i);
    }
  });
});

// ─── UT-0874 the competing-proposal rule (FR-090) ─────────────────────────────

describe('UT-0874 a competing proposal stands equally with the original (FR-090)', () => {
  const withTwo = () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings to the evening'), NEIGHBOUR, 'WORKER');
    f.service.fileProposal(f.partyId, draftFor('Keep meetings in the daytime'), MEMBER, 'WORKER');
    return f;
  };

  it('renders both proposals in ONE window, in submission order, with the same affordances', () => {
    renderFlow(withTwo());

    const windows = screen.getAllByTestId('decision-window');
    expect(windows).toHaveLength(1); // one question, one window

    const items = within(windows[0]).getAllByTestId('proposal');
    expect(items).toHaveLength(2);

    // Identical structure: each carries an author line and a provenance line, nothing more.
    for (const item of items) {
      expect(within(item).getByTestId('proposal-author')).toBeTruthy();
      expect(within(item).getByTestId('proposal-provenance')).toBeTruthy();
    }
  });

  it('UT-0875 names both authors — agenda-setting is visible (FR-090, FR-092)', () => {
    renderFlow(withTwo());
    const authors = screen
      .getAllByTestId('proposal-author')
      .map((n) => n.textContent ?? '');
    expect(authors.some((a) => a.includes(NEIGHBOUR))).toBe(true);
    expect(authors.some((a) => a.includes(MEMBER))).toBe(true);
  });

  it('UT-0876 offers NO control that lets one author act on another’s proposal', () => {
    renderFlow(withTwo());

    // The fairness property rendered: no withdraw/remove/reject/merge/prioritise control
    // exists on this surface, because the service exposes no such capability.
    for (const btn of screen.getAllByRole('button')) {
      expect(btn.textContent ?? '').not.toMatch(
        /withdraw|remove|delete|reject|merge|prioriti|make primary|veto/i,
      );
    }
    // And the surface states the equal-standing rule in words a member can read.
    expect(screen.getByText(/They stand equally/i)).toBeTruthy();
  });

  it('UT-0877 the “asked the question” tag is provenance, not precedence', () => {
    renderFlow(withTwo());
    const tags = screen.getAllByTestId('proposal-provenance').map((n) => n.textContent ?? '');
    expect(tags[0]).toMatch(/Asked the question/i);
    expect(tags[1]).toMatch(/Answering the same question/i);
    // No ranking, weight or priority language anywhere in the list.
    const list = screen.getByTestId('proposal-list');
    expect(list.textContent ?? '').not.toMatch(/rank|priority|primary|main proposal|preferred/i);
  });
});

// ─── UT-0878 the lifecycle is surfaced honestly (FR-091) ──────────────────────

describe('UT-0878 the eight lifecycle stages are shown in order, with the current one marked (FR-091)', () => {
  it('renders every published stage and marks exactly one as now', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    renderFlow(f);

    const stages = screen.getAllByTestId('stage');
    expect(stages.map((s) => s.getAttribute('data-stage'))).toEqual([...STAGE_ORDER]);
    expect(stages.filter((s) => s.getAttribute('data-state') === 'now')).toHaveLength(1);
    expect(stages[0].getAttribute('data-state')).toBe('now'); // PROPOSAL
  });

  it('UT-0879 offers no control that skips a stage', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    renderFlow(f);

    for (const btn of screen.getAllByRole('button')) {
      expect(btn.textContent ?? '').not.toMatch(/skip|jump|fast.?forward|straight to the vote/i);
    }
  });
});

// ─── UT-0880 deliberation is open to open-tier members (FR-091, FR-122) ───────

describe('UT-0880 deliberation is open to every member and says so (FR-091, FR-122)', () => {
  const atDiscussion = () => {
    const f = buildFixture();
    const { windowId } = f.service.fileProposal(
      f.partyId,
      draftFor('Move meetings'),
      MEMBER,
      'WORKER',
    );
    while (
      f.service.participationStatus(windowId, MEMBER).stage !== PROPOSAL_STAGE.DISCUSSION
    ) {
      f.service.advanceStage(windowId);
    }
    return f;
  };

  it('states plainly that members without an ID check can take part', () => {
    renderFlow(atDiscussion());
    fireEvent.click(screen.getByTestId('toggle-window'));

    expect(screen.getByTestId('discussion-open-to-all').textContent).toMatch(
      /including members who have not done a government ID check/i,
    );
  });

  it('an open-tier member can post, and the record is kept and attributed', () => {
    const f = atDiscussion();
    renderFlow(f);
    fireEvent.click(screen.getByTestId('toggle-window'));

    const form = screen.getByTestId('deliberation-form');
    fireEvent.change(within(form).getByRole('textbox'), {
      target: { value: 'Evenings work better for shift workers.' },
    });
    fireEvent.click(screen.getByTestId('post-deliberation'));

    const records = screen.getAllByTestId('discussion-record');
    expect(records).toHaveLength(1);
    expect(within(records[0]).getByTestId('record-author').textContent).toBe(MEMBER);
    // FR-091: a record, never an outcome — the stage is unchanged by speaking.
    expect(screen.getByTestId('decision-window').getAttribute('data-stage')).toBe(
      PROPOSAL_STAGE.DISCUSSION,
    );
  });
});

// ─── UT-0881 the ballot step and the counting gate (FR-123, NFR-003) ──────────

describe('UT-0881 the vote step carries the coercion notice and gates on counting tier (FR-123, NFR-003)', () => {
  const atVote = (verified: boolean) => {
    const f = buildFixture({ verified });
    const { windowId } = f.service.fileProposal(
      f.partyId,
      draftFor('Move meetings'),
      MEMBER,
      'WORKER',
    );
    while (f.service.participationStatus(windowId, MEMBER).stage !== PROPOSAL_STAGE.VOTE) {
      f.service.advanceStage(windowId);
    }
    return f;
  };

  it('shows the not-receipt-free banner BEFORE the member is asked to act, and it cannot be dismissed', () => {
    renderFlow(atVote(false));
    fireEvent.click(screen.getByTestId('toggle-window'));

    const banner = screen.getByTestId('not-receipt-free-banner');
    expect(banner).toBeTruthy();
    // No dismiss control inside the notice.
    expect(within(banner).queryAllByRole('button')).toHaveLength(0);
  });

  it('UT-0882 refuses an open-tier member honestly — and the refusal says what they keep', () => {
    renderFlow(atVote(false));
    fireEvent.click(screen.getByTestId('toggle-window'));
    fireEvent.click(screen.getByTestId('check-ballot'));

    const refusal = screen.getByTestId('proposal-refusal');
    expect(refusal.getAttribute('data-code')).toBe('NOT_COUNTING_ELIGIBLE');
    // Membership and discussion survive the refusal (FR-020/FR-122).
    expect(screen.getByTestId('discussion-open-to-all')).toBeTruthy();
  });

  it('the ballot is not offered before the vote stage', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    renderFlow(f);
    fireEvent.click(screen.getByTestId('toggle-window'));

    expect(screen.getByTestId('ballot-not-open')).toBeTruthy();
    expect(screen.queryByTestId('check-ballot')).toBeNull();
  });
});

// ─── UT-0883 the decision trail (FR-092) ──────────────────────────────────────

describe('UT-0883 the decision trail is shown in order and admits what v1 does not do (FR-092)', () => {
  it('lists every event in order, including who filed what', () => {
    const f = buildFixture();
    const { windowId } = f.service.fileProposal(
      f.partyId,
      draftFor('Move meetings'),
      NEIGHBOUR,
      'WORKER',
    );
    f.service.fileProposal(f.partyId, draftFor('Keep daytime meetings'), MEMBER, 'WORKER');
    f.service.advanceStage(windowId);
    renderFlow(f);
    fireEvent.click(screen.getByTestId('toggle-window'));

    const events = screen.getAllByTestId('trail-event').map((n) => n.getAttribute('data-type'));
    expect(events).toEqual([
      'WINDOW_OPENED',
      'PROPOSAL_FILED',
      'PROPOSAL_FILED',
      'STAGE_ADVANCED',
    ]);
  });

  it('states honestly that the record is not yet independently checkable in v1', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    renderFlow(f);
    fireEvent.click(screen.getByTestId('toggle-window'));

    expect(screen.getByTestId('trail-v1-note').textContent).toMatch(
      /not switched on yet|without trusting us/i,
    );
  });
});

// ─── UT-0884 jargon and absence scan (DES-085, NFR-023) ───────────────────────

describe('UT-0884 the surface carries no banned vocabulary and no surveillance metadata (DES-085)', () => {
  it('contains none of the banned blockchain words', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    const { container } = renderFlow(f);
    fireEvent.click(screen.getByTestId('toggle-window'));

    const text = (container.textContent ?? '').toLowerCase();
    for (const banned of [
      'wallet',
      'seed phrase',
      'private key',
      'gas fee',
      'token',
      'mint',
      'blockchain',
      'crypto',
    ]) {
      expect(text).not.toContain(banned);
    }
  });

  it('records no member identifier in a data attribute beyond the proposal/window ids it needs', () => {
    const f = buildFixture();
    f.service.fileProposal(f.partyId, draftFor('Move meetings'), MEMBER, 'WORKER');
    const { container } = renderFlow(f);

    // The absence IS the property: no analytics, tracking or surveillance attributes.
    const html = container.innerHTML;
    expect(html).not.toMatch(/data-(analytics|track|session|user-id|fingerprint)/i);
  });
});
