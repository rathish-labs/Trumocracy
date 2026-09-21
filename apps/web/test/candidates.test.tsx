/**
 * UT-0904..UT-0907 — candidate selection web flow.
 *
 * Traces: FR-036, FR-037, FR-038, FR-065, FR-066, FR-067, FR-081, FR-085, FR-122, FR-123,
 * FR-131 (clauses (b), (d), (e)), NFR-023 (plain language), DES-085 (jargon filter), ARABIC-I18N.
 *
 * The properties that matter here are honesty properties, so they are tested as such:
 *  - the consent crossing is two-step and states all three FR-038 facts BEFORE confirm;
 *  - an open-tier visitor who tries to stand gets the clause-(d) notice, never a fake check;
 *  - the binding post-debate vote carries the FR-131 notice BEFORE its controls;
 *  - incumbency is named and disclaimed; the ballot is empty until the members say yes;
 *  - every new string, in both locales, is free of FR-131 banned words and DES-085 jargon,
 *    and the Arabic is a mirror, not a copy-paste — and is NOT claimed reviewed.
 */
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import { CandidateSelection } from '@/components/CandidateSelection';
import CandidatesPage from '@/app/candidates/page';
import { FlagProvider } from '@/config/flags';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { en } from '@/i18n/en';
import { ar } from '@/i18n/ar';
import {
  CandidateService,
  ConventionalBallotService,
  ConventionalEligibilityVerifier,
  InMemoryCandidateStore,
  InMemoryPartyStore,
  PartyCreationService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
  type IdDocumentResult,
} from '@trumocracy/sdk';
import {
  CANDIDACY_STAGE,
  NON_VIOLENCE_CLAUSE,
  NOMINATION_ENDORSEMENTS_MIN,
  NOMINATION_MATURATION_SECONDS,
  PILLARS,
  REQUIRED_DEBATE_TOPICS,
  petitionThreshold,
} from '@trumocracy/protocol';

const DAY = 86_400;
const T0 = 1_800_000_000;
const WARD = 'IN/KA/BLR/BLR-S/W-152';
const MEMBER = 'demo-member';
const NEIGHBOUR = 'demo-neighbour';

afterEach(cleanup);

function buildFixture({ verified = false, incumbent = false }: { verified?: boolean; incumbent?: boolean } = {}) {
  let now = T0;
  const clock = () => now;
  const partyStore = new InMemoryPartyStore();
  const parties = new PartyCreationService(partyStore, clock);
  // A const (not an inline literal) so the shim's PartyCreationDraft excess-property check
  // does not reject the two population fields the service reads — same as proposals.test.tsx.
  const draft = {
    name: 'Commons Forward',
    jurisdiction: 'IN/KA',
    pillars: Object.fromEntries(PILLARS.map((p: string) => [p, `Commons Forward on ${p}. `.repeat(30)])),
    emblem: 'CF',
    charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    jurisdictionPopulation: 1_000,
    jurisdictionVerified: 1_000,
  };
  const { draftId } = parties.createDraft(draft, 'drafter');
  const { petitionId } = parties.publishDraft(draftId);
  partyStore.updatePetition(petitionId, { endorsements: petitionThreshold({ eligiblePopulation: 1_000, verifiedResidents: 1_000 }) });
  const { partyId } = parties.activateParty(petitionId);

  const joinMatured = (who: string) => {
    now = T0 - NOMINATION_MATURATION_SECONDS - DAY;
    parties.joinParty(partyId, who);
    now = T0;
  };
  const credentialStore = new Map<string, IdDocumentResult>();
  const verify = (who: string) =>
    credentialStore.set(who, { id_verified_flag: true, age_verified: true, issuing_region: 'IN', subject_id_hash: `h-${who}`, verified_at: '2026-08-24T10:00:00.000Z' });

  joinMatured(MEMBER);
  if (verified) verify(MEMBER);
  joinMatured(NEIGHBOUR);
  verify(NEIGHBOUR);
  const endorsers = Array.from({ length: NOMINATION_ENDORSEMENTS_MIN + 1 }, (_, i) => `n-${i}`);
  for (const who of endorsers) joinMatured(who);

  const verifier = new ConventionalEligibilityVerifier({ phoneVerifier: new StubPhoneVerifier(), idDocumentChecker: new StubIdDocumentChecker(), credentialStore });
  const ballots = new ConventionalBallotService({ eligibilityVerifier: verifier });
  const store = new InMemoryCandidateStore();
  const service = new CandidateService(store, parties, clock);
  if (incumbent) {
    joinMatured('the-incumbent');
    service.recordOfficeHolder('ward-rep', 'the-incumbent');
  }
  const { electionId } = service.openElection(partyId, { officeId: 'ward-rep', officeRegion: WARD, nominationClosesAt: T0 + 14 * DAY, ballotLocksAt: T0 + 45 * DAY });

  const { candidacyId: neighbourCandidacyId } = service.nominate(electionId, NEIGHBOUR, { residencyRegion: WARD, disclosures: { legalName: 'Neighbour Example' } }, verifier);
  service.recordConsent(neighbourCandidacyId, NEIGHBOUR, { identityBecomesPublic: true, irreversibleForTerm: true, revocableOnlyByWithdrawalBeforeLock: true });
  for (const who of endorsers.slice(0, NOMINATION_ENDORSEMENTS_MIN)) service.endorseNomination(neighbourCandidacyId, who, { residencyRegion: WARD });
  service.scheduleDebates(neighbourCandidacyId);
  for (const topic of REQUIRED_DEBATE_TOPICS) service.recordDebate(neighbourCandidacyId, topic, { attended: true, contentRef: `c-${topic}` });

  return { service, verifier, ballots, electionId, neighbourCandidacyId, endorsers };
}

const renderFlow = (f: ReturnType<typeof buildFixture>) =>
  render(
    <LocaleProvider>
      <CandidateSelection
        service={f.service}
        verifier={f.verifier}
        ballots={f.ballots}
        electionId={f.electionId}
        memberPseudonym={MEMBER}
        residencyRegion={WARD}
        neighbourCandidacyId={f.neighbourCandidacyId}
        demoEndorsers={f.endorsers}
      />
    </LocaleProvider>,
  );

const stand = () => {
  fireEvent.change(screen.getByTestId('legal-name'), { target: { value: 'Demo Member' } });
  fireEvent.click(screen.getByTestId('stand-action'));
};

// ─── UT-0904 the consent crossing (FR-037, FR-038, FR-085) ──────────────────────

describe('UT-0904 going public is a two-step consent that states all three FR-038 facts before confirm (FR-037, FR-038, FR-085)', () => {
  it('after standing, nothing is public and the gate names the one-way door; the facts are shown only in step 2', () => {
    renderFlow(buildFixture({ verified: true }));
    stand();
    expect(screen.getByTestId('stood').textContent).toBe(en.candidates.stood);
    expect(screen.getByTestId('consent-gate')).toBeTruthy();
    expect(screen.queryByTestId('candidate-consent')).toBeNull();
    expect(screen.queryByTestId('confirm-consent')).toBeNull();
  });

  it('step 2 states identity-public, irreversible-for-term and withdraw-only-before-lock, plus no-approval, BEFORE the confirm control', () => {
    renderFlow(buildFixture({ verified: true }));
    stand();
    fireEvent.click(screen.getByTestId('open-consent'));
    const consent = screen.getByTestId('candidate-consent');
    expect(screen.getByTestId('consent-identity-public').textContent).toBe(en.candidates.consentIdentityPublic);
    expect(screen.getByTestId('consent-irreversible').textContent).toBe(en.candidates.consentIrreversible);
    expect(screen.getByTestId('consent-withdraw-only').textContent).toBe(en.candidates.consentWithdrawOnly);
    expect(screen.getByTestId('consent-no-approval').textContent).toBe(en.candidates.consentNoApproval);
    // Order: every fact precedes the confirm button in document order.
    const confirm = screen.getByTestId('confirm-consent');
    for (const id of ['consent-identity-public', 'consent-irreversible', 'consent-withdraw-only', 'consent-no-approval']) {
      expect(screen.getByTestId(id).compareDocumentPosition(confirm) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
    expect(consent.contains(confirm)).toBe(true);
  });

  it('cancel returns to the gate with nothing recorded; confirm records consent and the candidacy becomes public', () => {
    const f = buildFixture({ verified: true });
    renderFlow(f);
    stand();
    fireEvent.click(screen.getByTestId('open-consent'));
    fireEvent.click(screen.getByTestId('cancel-consent'));
    expect(screen.getByTestId('consent-gate')).toBeTruthy();
    expect(screen.getByTestId('my-candidacy').getAttribute('data-stage')).toBe(CANDIDACY_STAGE.NOMINATED);

    fireEvent.click(screen.getByTestId('open-consent'));
    fireEvent.click(screen.getByTestId('confirm-consent'));
    expect(screen.getByTestId('my-candidacy').getAttribute('data-stage')).toBe(CANDIDACY_STAGE.CONSENTED);
    expect(screen.getByTestId('consented').textContent).toBe(en.candidates.consented);
    expect(screen.getByTestId('trail').textContent).toContain('CONSENT_RECORDED');
    expect(screen.getByTestId('trail').textContent).not.toContain('Demo Member');
  });

  it('withdrawing before nominations close says the submission was destroyed', () => {
    renderFlow(buildFixture({ verified: true }));
    stand();
    fireEvent.click(screen.getByTestId('withdraw'));
    expect(screen.getByTestId('withdrawn').textContent).toBe(en.candidates.withdrawnDestroyed);
  });
});

// ─── UT-0905 standing: where you live, if you count — honest refusals (FR-036, FR-123, FR-131(d)) ─

describe('UT-0905 an open-tier visitor who tries to stand gets the FR-131 clause (d) notice, never a fake check; a counted resident stands (FR-036, FR-123)', () => {
  it('the open-tier visitor sees what is not counted, why, that membership still works, and that the request was not counted', () => {
    renderFlow(buildFixture({ verified: false }));
    stand();
    const notice = screen.getByTestId('open-tier-notice');
    expect(notice.textContent).toContain(en.parties.openTierNoticeCurrent);
    expect(screen.getByTestId('what-does-not-count').textContent).toBe(en.parties.openTierNoticeWhatDoesNotCount);
    expect(notice.textContent).toContain(en.parties.openTierNoticeHowTo);
    expect(screen.getByTestId('refused').textContent).toBe(en.parties.openTierNoticeRefused);
    expect(screen.queryByTestId('my-candidacy')).toBeNull();
    // No control on this surface pretends to verify anyone.
    expect(screen.queryByText(/verify me|mark me verified|skip the check/i)).toBeNull();
  });

  it('a counted resident of another ward is told they can stand only where they live', () => {
    renderFlow(buildFixture({ verified: true }));
    fireEvent.change(screen.getByTestId('residency'), { target: { value: 'IN/KA/BLR/BLR-S/W-153' } });
    stand();
    const err = screen.getByTestId('stand-error');
    expect(err.getAttribute('data-code')).toBe('OUT_OF_SCOPE');
    expect(err.textContent).toBe(en.candidates.outOfScope);
  });

  it('the residency field says plainly that v1 takes the member at their word', () => {
    renderFlow(buildFixture({ verified: true }));
    expect(screen.getByTestId('residency-help').textContent).toBe(en.candidates.residencyHelp);
    expect(en.candidates.residencyHelp).toMatch(/not built yet/);
  });

  it('with the elections flag off, /candidates/ renders only the flag-off line — the surface ships dark (ISS-L1)', () => {
    render(
      <LocaleProvider>
        <FlagProvider overrides={{ elections: false }}>
          <CandidatesPage />
        </FlagProvider>
      </LocaleProvider>,
    );
    expect(screen.getByText(en.errors.flagOff)).toBeTruthy();
    expect(screen.queryByTestId('stand')).toBeNull();
    expect(screen.queryByTestId('neighbour')).toBeNull();
  });

  it('a counted ward resident stands, and the timetable is shown as fixed', () => {
    renderFlow(buildFixture({ verified: true }));
    stand();
    expect(screen.getByTestId('my-candidacy').getAttribute('data-stage')).toBe(CANDIDACY_STAGE.NOMINATED);
    expect(screen.getByTestId('timetable-fixed').textContent).toBe(en.candidates.timetableFixed);
  });
});

// ─── UT-0906 the binding vote carries the FR-131 notice; incumbency confers nothing; the ballot fills only on yes ─

describe('UT-0906 the post-debate vote shows the FR-131 notice before its controls, incumbency is disclaimed, and the ballot fills only when the members say yes (FR-067, FR-131)', () => {
  it('the sitting office-holder is named and told the office gives them nothing here', () => {
    renderFlow(buildFixture({ verified: true, incumbent: true }));
    expect(screen.getByTestId('incumbent-note').textContent).toBe(en.candidates.incumbentNote('the-incumbent'));
    expect(screen.getByTestId('ballot-empty').textContent).toBe(en.candidates.ballotEmpty);
  });

  it('opening the vote renders the FR-131 notice BEFORE the suitable/not-suitable controls', () => {
    renderFlow(buildFixture({ verified: true }));
    fireEvent.click(screen.getByTestId('open-vote'));
    const banner = screen.getByText(en.banner.notReceiptFreeTitle);
    const control = screen.getByTestId('vote-suitable');
    expect(banner.compareDocumentPosition(control) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('a counted member votes yes; closing the vote puts the neighbour on the ballot', async () => {
    renderFlow(buildFixture({ verified: true }));
    fireEvent.click(screen.getByTestId('open-vote'));
    fireEvent.click(screen.getByTestId('vote-suitable'));
    await screen.findByTestId('vote-cast');
    fireEvent.click(screen.getByTestId('close-vote'));
    await waitFor(() => expect(screen.getByTestId('vote-result').textContent).toBe(en.candidates.votePublished));
    expect(screen.getAllByTestId('ballot-entry').map((e) => e.textContent)).toEqual([NEIGHBOUR]);
  });

  it('with no votes, closing does NOT advance the neighbour and the ballot stays empty', async () => {
    renderFlow(buildFixture({ verified: true }));
    fireEvent.click(screen.getByTestId('open-vote'));
    fireEvent.click(screen.getByTestId('close-vote'));
    await waitFor(() => expect(screen.getByTestId('vote-result').textContent).toBe(en.candidates.voteNotAdvanced));
    expect(screen.getByTestId('ballot-empty')).toBeTruthy();
  });

  it('an open-tier visitor who tries to vote gets the clause (d) notice; feedback direction visibility is stated (FR-131(b))', async () => {
    renderFlow(buildFixture({ verified: false }));
    fireEvent.click(screen.getByTestId('open-vote'));
    fireEvent.click(screen.getByTestId('vote-suitable'));
    await screen.findByTestId('open-tier-notice');
    expect(screen.getByTestId('feedback-visibility').textContent).toBe(en.candidates.feedbackVisibility);
  });

  it('the feedback lead states the sign: a thumbs-down takes one away, and the score beside it goes to -1 (ISS-05)', () => {
    renderFlow(buildFixture({ verified: true }));
    expect(en.candidates.feedbackLead).toMatch(/takes one away/);
    expect(en.candidates.feedbackLead).not.toMatch(/counts one\b/);
    // The Arabic mirror carries the sign as well ("يخصم" = deducts) — pinned so an ARABIC-I18N
    // re-issue cannot silently regress it (cycle-2 L6). Wording, not fluency: still a draft.
    expect(ar.candidates.feedbackLead).toMatch(/يخصم/);
    fireEvent.click(screen.getByTestId('downvote'));
    expect(screen.getByTestId('feedback-score').textContent).toBe(en.candidates.feedbackScore(-1));
  });

  it('feedback: one signal, then the controls are gone and the aggregate moved by +3', () => {
    renderFlow(buildFixture({ verified: true }));
    fireEvent.click(screen.getByTestId('upvote'));
    expect(screen.getByTestId('feedback-given').textContent).toBe(en.candidates.feedbackGiven);
    expect(screen.getByTestId('feedback-score').textContent).toBe(en.candidates.feedbackScore(3));
    expect(screen.queryByTestId('upvote')).toBeNull();
  });
});

// ─── UT-0907 honesty scan over every new string, both locales (FR-131(e), DES-085, ARABIC-I18N) ─

describe('UT-0907 every new candidate-selection string is free of FR-131 banned words and DES-085 jargon in both locales; the Arabic is a mirror, not a copy, and is not claimed reviewed', () => {
  const BANNED = /\b(private|anonymous|receipt-free|secure|secret)\b/i;
  const JARGON = ['wallet', 'seed phrase', 'private key', 'gas', 'token', 'mint', 'on-chain', 'blockchain', 'crypto', 'nullifier', 'hash'];

  /** Every leaf string, with template functions rendered at sample inputs. */
  const leaves = (obj: unknown): string[] => {
    if (typeof obj === 'string') return [obj];
    if (typeof obj === 'function') return [String((obj as (...a: unknown[]) => unknown)('X', 3, 5))];
    if (obj && typeof obj === 'object') return Object.values(obj as Record<string, unknown>).flatMap(leaves);
    return [];
  };

  it('no en.candidates string carries a banned word or jargon', () => {
    for (const s of [...leaves(en.candidates), en.nav.candidates]) {
      expect(s, s).not.toMatch(BANNED);
      for (const j of JARGON) expect(s.toLowerCase(), `"${j}" in "${s}"`).not.toContain(j);
    }
  });

  it('ar.candidates mirrors en.candidates key-for-key (and nav.candidates exists in both)', () => {
    const keys = (o: object): string[] =>
      Object.entries(o).flatMap(([k, v]) => (v && typeof v === 'object' && !Array.isArray(v) ? keys(v as object).map((s) => `${k}.${s}`) : [k]));
    expect(new Set(keys(ar.candidates))).toEqual(new Set(keys(en.candidates)));
    expect(typeof ar.nav.candidates).toBe('string');
  });

  it('the Arabic is not a copy-paste of the English and carries no Latin-script banned word', () => {
    const enL = leaves(en.candidates);
    const arL = leaves(ar.candidates);
    expect(arL.length).toBe(enL.length);
    for (let i = 0; i < arL.length; i++) {
      expect(arL[i].length).toBeGreaterThan(0);
      expect(arL[i]).not.toBe(enL[i]);
      expect(arL[i]).not.toMatch(BANNED);
    }
  });

  it('the Arabic section is flagged as an engineer draft awaiting native review — it is not claimed reviewed', async () => {
    const { readFileSync } = await import('node:fs');
    const { resolve } = await import('node:path');
    // jsdom gives import.meta.url a non-file scheme; vitest runs from apps/web, so resolve from cwd.
    const src = readFileSync(resolve(process.cwd(), 'src/i18n/ar.ts'), 'utf8');
    expect(src).toMatch(/ARABIC-I18N/);
  });
});
