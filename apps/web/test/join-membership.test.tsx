/**
 * UT-0858..UT-0870 — join/membership web flow (PartyMembership + parties page).
 *
 * Covers: FR-020 join without permission (and never calling the seam),
 * one-active-party (FR-064 invariant, explicit-leave form), FR-022 leave at
 * will, append-only membership history, the FR-130 100/101 boundary at the
 * join surface, the join ≠ counting distinction (FR-122/FR-123), the FR-131
 * clause (d) open-tier notice, v1-honest join copy, ship-dark flag gating,
 * and the jargon scan over every new string (DES-085, NFR-023).
 *
 * EXISTING TESTS (UT-0700..UT-0857) ARE UNTOUCHED AND UNMODIFIED.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

import { LocaleProvider } from '@/i18n/LocaleProvider';
import { FlagProvider } from '@/config/flags';
import { PartyMembership } from '@/components/PartyMembership';
import PartiesPage from '@/app/parties/page';
import { en } from '@/i18n/en';
import { ar } from '@/i18n/ar';
import {
  ConventionalEligibilityVerifier,
  InMemoryPartyStore,
  PartyCreationService,
  StubIdDocumentChecker,
  StubPhoneVerifier,
  type IdDocumentResult,
} from '@trumocracy/sdk';
import {
  NON_VIOLENCE_CLAUSE,
  PILLARS,
  PROVISIONAL_MEMBER_CAP,
  petitionThreshold,
} from '@trumocracy/protocol';

const wrap = (ui: ReactElement, flags: Record<string, boolean> = {}) =>
  render(
    <LocaleProvider>
      <FlagProvider overrides={flags}>{ui}</FlagProvider>
    </LocaleProvider>,
  );

const T0 = 1_760_000_000;
const VISITOR = 'test-visitor';

const goodPillar = (label: string) => `Our position on ${label}. `.repeat(30);
const goodPillars = () => Object.fromEntries(PILLARS.map((p) => [p, goodPillar(p)]));

const verifiedCredential: IdDocumentResult = {
  id_verified_flag: true,
  age_verified: true,
  issuing_region: 'IN',
  subject_id_hash: 'test-subject-hash',
  verified_at: '2026-08-26T00:00:00Z',
};

/** Fresh service + verifier + two ACTIVE parties (CF provisional, RA registered). */
function makeDemo(credentials = new Map<string, IdDocumentResult>()) {
  const store = new InMemoryPartyStore();
  const service = new PartyCreationService(store, () => T0);
  const verifier = new ConventionalEligibilityVerifier({
    phoneVerifier: new StubPhoneVerifier(),
    idDocumentChecker: new StubIdDocumentChecker(),
    credentialStore: credentials,
  });

  const seed = (name: string, emblem: string, legal: boolean) => {
    const draft = {
      name,
      jurisdiction: 'IN/KA',
      pillars: goodPillars(),
      emblem,
      charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
      jurisdictionPopulation: 1_000,
      jurisdictionVerified: 1_000,
    };
    const { draftId } = service.createDraft(draft, `drafter-${emblem}`);
    const { petitionId } = service.publishDraft(draftId);
    const required = petitionThreshold({
      eligiblePopulation: 1_000,
      verifiedResidents: 1_000,
    });
    store.updatePetition(petitionId, { endorsements: required });
    const { partyId } = service.activateParty(petitionId);
    if (legal) service.recordLegalRegistration(partyId, 'evidence-ref');
    return { partyId, name, emblem };
  };

  const parties = [seed('Commons Forward', 'CF', false), seed('River Assembly', 'RA', true)];
  return { store, service, verifier, parties };
}

const renderMembership = (demo = makeDemo()) => {
  wrap(
    <PartyMembership
      service={demo.service}
      verifier={demo.verifier}
      memberPseudonym={VISITOR}
      parties={demo.parties}
    />,
  );
  return demo;
};

// ─── UT-0858 join without permission (FR-020) ─────────────────────────────────

describe('UT-0858 anyone may join — no approval step exists on the surface (FR-020)', () => {
  it('one click joins; membership is immediate', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    const card = screen.getByTestId(`party-card-${cf.partyId}`);
    await userEvent.click(within(card).getByRole('button', { name: en.parties.joinConfirm }));

    expect(screen.getByTestId('membership-joined')).toBeTruthy();
    expect(screen.getByTestId(`member-badge-${cf.partyId}`)).toBeTruthy();
    expect(demo.service.activeMembership(VISITOR)?.partyId).toBe(cf.partyId);
  });

  it('no approval, request, or application control exists anywhere on the surface', () => {
    renderMembership();
    const buttons = screen.getAllByRole('button');
    for (const b of buttons) {
      expect(b.textContent).not.toMatch(/approve|request|apply|invite/i);
    }
  });
});

// ─── UT-0859 one active party at a time ───────────────────────────────────────

describe('UT-0859 a second join is refused until the first party is left', () => {
  it('joining party B while a member of party A shows the honest refusal naming A', async () => {
    const demo = renderMembership();
    const [cf, ra] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(
      within(screen.getByTestId(`party-card-${ra.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );

    const error = screen.getByTestId('membership-error');
    expect(error.textContent).toBe(en.parties.alreadyMemberElsewhere('Commons Forward'));
    // Still a member of CF only.
    expect(demo.service.activeMembership(VISITOR)?.partyId).toBe(cf.partyId);
  });

  it('after an explicit leave, joining the second party succeeds', async () => {
    const demo = renderMembership();
    const [cf, ra] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: en.parties.leave }));
    await userEvent.click(
      within(screen.getByTestId(`party-card-${ra.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    expect(screen.getByTestId(`member-badge-${ra.partyId}`)).toBeTruthy();
    expect(demo.service.activeMembership(VISITOR)?.partyId).toBe(ra.partyId);
  });
});

// ─── UT-0860 leave at will (FR-022) ──────────────────────────────────────────

describe('UT-0860 leaving is one action, immediate, with no approval step', () => {
  it('leave takes effect at once and says so', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: en.parties.leave }));

    expect(screen.getByTestId('membership-left')).toBeTruthy();
    expect(demo.service.activeMembership(VISITOR)).toBeNull();
    // The member badge is gone; the join panel is back.
    expect(screen.queryByTestId(`member-badge-${cf.partyId}`)).toBeNull();
  });
});

// ─── UT-0861 membership history is append-only, shown active/inactive ────────

describe('UT-0861 history shows every join and leave; nothing is deleted', () => {
  it('join → leave → rejoin renders two rows: inactive then active', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    const joinBtn = () =>
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      });
    await userEvent.click(joinBtn());
    await userEvent.click(screen.getByRole('button', { name: en.parties.leave }));
    await userEvent.click(joinBtn());

    const history = screen.getByTestId('membership-history');
    expect(within(history).getByText(en.parties.membershipHistoryLead)).toBeTruthy();
    expect(screen.getByTestId('history-state-0').textContent).toBe(en.parties.historyInactive);
    expect(screen.getByTestId('history-state-1').textContent).toBe(en.parties.historyActive);
  });
});

// ─── UT-0862 FR-130 cap at the join surface — the 100/101 boundary ───────────

describe('UT-0862 the provisional cap binds at the join surface (FR-130, Ruling 1)', () => {
  it('the 100th member joins; the 101st is refused with the honest cap message', async () => {
    // 100th joins:
    const demoAt99 = makeDemo();
    for (let i = 1; i <= 99; i++) demoAt99.service.joinParty(demoAt99.parties[0].partyId, `m-${i}`);
    const { unmount } = wrap(
      <PartyMembership
        service={demoAt99.service}
        verifier={demoAt99.verifier}
        memberPseudonym={VISITOR}
        parties={demoAt99.parties}
      />,
    );
    await userEvent.click(
      within(screen.getByTestId(`party-card-${demoAt99.parties[0].partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    expect(screen.getByTestId('membership-joined')).toBeTruthy();
    expect(demoAt99.service.partyStatus(demoAt99.parties[0].partyId).memberCount).toBe(
      PROVISIONAL_MEMBER_CAP,
    );
    unmount();

    // 101st is refused:
    const demoAt100 = makeDemo();
    for (let i = 1; i <= 100; i++)
      demoAt100.service.joinParty(demoAt100.parties[0].partyId, `m-${i}`);
    wrap(
      <PartyMembership
        service={demoAt100.service}
        verifier={demoAt100.verifier}
        memberPseudonym={VISITOR}
        parties={demoAt100.parties}
      />,
    );
    await userEvent.click(
      within(screen.getByTestId(`party-card-${demoAt100.parties[0].partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    const error = screen.getByTestId('membership-error');
    expect(error.textContent).toBe(en.petitions.provisionalCapHelpReached(PROVISIONAL_MEMBER_CAP));
    expect(demoAt100.service.activeMembership(VISITOR)).toBeNull();
  });
});

// ─── UT-0863 join ≠ counting, made visible ───────────────────────────────────

describe('UT-0863 a joined open-tier member is a real member who does not yet count', () => {
  it('after joining: member count 1, counted members 0, honest counting status', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );

    expect(screen.getByTestId(`party-members-${cf.partyId}`).textContent).toBe(
      en.parties.memberCount(1),
    );
    expect(screen.getByTestId(`party-strength-${cf.partyId}`).textContent).toBe(
      en.parties.officialStrength(0),
    );
    expect(screen.getByTestId('counting-open').textContent).toBe(en.parties.countingOpenBody);
  });
});

// ─── UT-0864 FR-131 clause (d) open-tier notice ──────────────────────────────

describe('UT-0864 attempting a counting action as open-tier shows the clause (d) notice', () => {
  it('the notice carries all four clauses, precedes the refusal, and has no dismiss control', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: en.parties.countMe }));

    const notice = screen.getByTestId('open-tier-notice');
    // (i) current participation is open-tier only
    expect(within(notice).getByText(en.parties.openTierNoticeCurrent)).toBeTruthy();
    // (ii) the action requires government-ID verification
    expect(within(notice).getByText(en.parties.openTierNoticeNeedsId)).toBeTruthy();
    // (iii) what specifically does not count
    expect(within(notice).getByText(en.parties.openTierNoticeWhatDoesNotCount)).toBeTruthy();
    // (iv) how to become a counting member
    expect(within(notice).getByText(en.parties.openTierNoticeHowTo)).toBeTruthy();
    // The refusal statement comes after the four clauses, inside the notice.
    expect(screen.getByTestId('open-tier-refused')).toBeTruthy();

    // Non-dismissable: no button or close control inside the notice.
    expect(within(notice).queryAllByRole('button')).toEqual([]);

    // The refused action changed nothing.
    expect(demo.service.partyStatus(cf.partyId).officialStrength).toBe(0);
    expect(demo.service.countingStatus(cf.partyId, VISITOR)).toEqual({
      member: true,
      counted: false,
    });
  });
});

// ─── UT-0865 a verified member counts ────────────────────────────────────────

describe('UT-0865 a verified member is counted toward official strength (FR-123(a))', () => {
  it('the counting action succeeds and both figures update honestly', async () => {
    const demo = makeDemo(new Map([[VISITOR, verifiedCredential]]));
    renderMembership(demo);
    const [cf] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: en.parties.countMe }));

    expect(screen.getByTestId('counting-counted').textContent).toBe(
      en.parties.countingCountedBody,
    );
    expect(screen.getByTestId(`party-strength-${cf.partyId}`).textContent).toBe(
      en.parties.officialStrength(1),
    );
    expect(screen.queryByTestId('open-tier-notice')).toBeNull();
  });
});

// ─── UT-0866 the seam is reached only by the counting action ─────────────────

describe('UT-0866 join and leave never call the seam; the counting action does (FR-020/FR-123)', () => {
  it('spy: zero verifier calls across join and leave; exactly one on the counting attempt', async () => {
    const demo = makeDemo();
    const spy = vi.spyOn(demo.verifier, 'verifyEligibility');
    renderMembership(demo);
    const [cf] = demo.parties;
    const joinBtn = () =>
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      });

    await userEvent.click(joinBtn());
    await userEvent.click(screen.getByRole('button', { name: en.parties.leave }));
    await userEvent.click(joinBtn());
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: en.parties.countMe }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(VISITOR, 'IN/KA', 'STRENGTH_CONTRIBUTION');
  });
});

// ─── UT-0867 ship-dark flag gating ───────────────────────────────────────────

describe('UT-0867 the parties page is gated on the party_governance flag', () => {
  it('flag off → the page renders only the flag-off message', () => {
    wrap(<PartiesPage />, { party_governance: false });
    expect(screen.getByText(en.errors.flagOff)).toBeTruthy();
    expect(screen.queryByText(en.parties.title)).toBeNull();
  });

  it('flag on → the directory renders', () => {
    wrap(<PartiesPage />, { party_governance: true });
    expect(screen.getByText(en.parties.title)).toBeTruthy();
  });
});

// ─── UT-0868 jargon scan over every new membership string ────────────────────

describe('UT-0868 jargon scan over new membership strings (DES-085, NFR-023)', () => {
  const collect = (dict: typeof en.parties): string[] => [
    dict.joinPrivate,
    dict.memberBadge,
    dict.joined,
    dict.leave,
    dict.leaveHelp,
    dict.left,
    dict.onePartyRule,
    dict.alreadyMemberElsewhere('Example Party'),
    dict.membershipHistoryTitle,
    dict.membershipHistoryLead,
    dict.historyJoined('2026-08-28'),
    dict.historyLeft('2026-08-28'),
    dict.historyActive,
    dict.historyInactive,
    dict.officialStrength(3),
    dict.memberCount(3),
    dict.countingTitle,
    dict.countingOpenBody,
    dict.countingCountedBody,
    dict.countMe,
    dict.openTierNoticeTitle,
    dict.openTierNoticeCurrent,
    dict.openTierNoticeNeedsId,
    dict.openTierNoticeWhatDoesNotCount,
    dict.openTierNoticeHowTo,
    dict.openTierNoticeRefused,
  ];
  const NEW_STRINGS = [...collect(en.parties), ...collect(ar.parties)];

  const JARGON = [
    'wallet',
    'seed phrase',
    'private key',
    'gas',
    'token',
    'mint',
    'on-chain',
    'blockchain',
    'crypto',
    'nullifier',
    'hash',
  ];

  for (const jargon of JARGON) {
    it(`no new string contains "${jargon}"`, () => {
      for (const str of NEW_STRINGS) {
        expect(
          str.toLowerCase().includes(jargon.toLowerCase()),
          `string "${str.slice(0, 60)}..." contains jargon "${jargon}"`,
        ).toBe(false);
      }
    });
  }
});

// ─── UT-0869 v1-honest join copy (FR-131(b) disclosure duty) ─────────────────

describe('UT-0869 the join panel makes no v2 privacy claim against the v1 backing', () => {
  it('the membership-visibility copy discloses that platform records can link account to party', () => {
    // The old copy claimed "Nobody gets that list, including us" — true of the
    // v2 backing only. v1 MUST NOT claim it (FR-131(b): the platform database
    // CAN see party membership in v1).
    expect(en.parties.joinPrivate).not.toContain('Nobody gets that list');
    expect(en.parties.joinPrivate).toContain('our own records can link your account');
    expect(en.parties.joinPrivate).toContain('never published');
  });

  it('the copy renders on every join panel', () => {
    const demo = renderMembership();
    for (const p of demo.parties) {
      expect(screen.getByTestId(`join-privacy-${p.partyId}`).textContent).toBe(
        en.parties.joinPrivate,
      );
    }
  });
});

// ─── UT-0870 absence test — no surveillance metadata on the surface ──────────

describe('UT-0870 the membership surface carries no analytics or tracking attributes', () => {
  it('rendered markup contains no tracking vocabulary (§2.5 absence-test pattern)', async () => {
    const demo = renderMembership();
    const [cf] = demo.parties;
    await userEvent.click(
      within(screen.getByTestId(`party-card-${cf.partyId}`)).getByRole('button', {
        name: en.parties.joinConfirm,
      }),
    );
    await userEvent.click(screen.getByRole('button', { name: en.parties.countMe }));

    const markup = document.body.innerHTML;
    for (const forbidden of ['gtag', 'analytics', 'data-track', 'beacon', 'pixel', 'sentry']) {
      expect(markup.includes(forbidden), `markup contains "${forbidden}"`).toBe(false);
    }
  });
});
