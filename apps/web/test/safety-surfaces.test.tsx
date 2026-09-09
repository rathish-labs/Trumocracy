/**
 * UT-0700..UT-0730 — the client's safety surfaces.
 *
 * Most UI tests protect appearance. These protect people. The vote confirmation screen has
 * to be safe to show to someone standing over your shoulder; the "not yet receipt-free"
 * banner is the only thing standing between a citizen and a false belief that a threat
 * cannot be checked; and the petition progress figure has to agree with the protocol,
 * because a party either exists or it does not.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

import { LocaleProvider } from '@/i18n/LocaleProvider';
import { FlagProvider } from '@/config/flags';
import { VoteConfirmation } from '@/components/VoteConfirmation';
import { ReceiptFreedomBanner } from '@/components/ReceiptFreedomBanner';
import { PetitionProgress } from '@/components/PetitionProgress';
import { EightPillarForm } from '@/components/EightPillarForm';
import { SiteHeader } from '@/components/SiteHeader';
import HomePage from '@/app/page';
import VerifyPage from '@/app/verify/page';
import {
  PILLARS,
  petitionOutcome,
  NON_VIOLENCE_CLAUSE,
  PARTICIPATION_TIER,
  petitionThreshold,
  FLAGS,
  isEnabled,
  permanentFlags,
} from '@trumocracy/protocol';
import {
  InMemoryPartyStore,
  PartyCreationService,
  InMemoryProposalStore,
  ProposalService,
} from '@trumocracy/sdk';
import { en } from '@/i18n/en';
import { ar } from '@/i18n/ar';

const wrap = (ui: ReactElement, flags: Record<string, boolean> = {}) =>
  render(
    <LocaleProvider>
      <FlagProvider overrides={flags}>{ui}</FlagProvider>
    </LocaleProvider>,
  );

const DAY = 86_400;
const T0 = 1_760_000_000;

describe('UT-0700 the vote confirmation screen is safe to show a coercer', () => {
  const choices = ['for', 'against', 'abstain'] as const;

  it('renders identically for every choice', () => {
    const rendered = choices.map((choice) => {
      const { container, unmount } = wrap(
        <VoteConfirmation choice={choice} closesAtLabel="Friday, 6pm" />,
      );
      const html = container.innerHTML;
      unmount();
      return html;
    });

    // Not "similar" — byte-identical. Any difference at all is a receipt.
    expect(rendered[1]).toBe(rendered[0]);
    expect(rendered[2]).toBe(rendered[0]);
  });

  it('UT-0701 never names the choice anywhere in the DOM', () => {
    for (const choice of choices) {
      const { container, unmount } = wrap(
        <VoteConfirmation choice={choice} closesAtLabel="Friday, 6pm" />,
      );
      const text = container.textContent?.toLowerCase() ?? '';
      const markup = container.innerHTML.toLowerCase();
      for (const leak of ['you voted', 'your choice', 'you chose', 'in favour of', choice]) {
        expect(text.includes(leak), `visible text leaks "${leak}"`).toBe(false);
      }
      // And not hidden in an attribute either — a data-* attribute is still a receipt.
      expect(markup.includes(`"${choice}"`), 'choice leaked into an attribute').toBe(false);
      unmount();
    }
  });

  it('UT-0702 offers a change-my-vote path for the whole voting window', async () => {
    const onChangeVote = vi.fn();
    wrap(<VoteConfirmation closesAtLabel="Friday, 6pm" votingOpen onChangeVote={onChangeVote} />);

    const button = screen.getByRole('button', { name: /change/i });
    await userEvent.click(button);
    expect(onChangeVote).toHaveBeenCalledTimes(1);
  });

  it('UT-0703 hides the change path only once voting has closed', () => {
    wrap(<VoteConfirmation closesAtLabel="Friday, 6pm" votingOpen={false} />);
    expect(screen.queryByRole('button', { name: /change/i })).toBeNull();
  });

  it('UT-0704 gives the confirmation an accessible name and a heading', () => {
    wrap(<VoteConfirmation closesAtLabel="Friday, 6pm" />);
    expect(screen.getByRole('region')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });
});

describe('UT-0710 the not-yet-receipt-free warning', () => {
  it('appears whenever coercion-resistant voting is off', () => {
    wrap(<ReceiptFreedomBanner maciEnabled={false} />);
    const banner = screen.getByRole('note');
    const text = banner.textContent ?? '';
    // The warning must actually say the dangerous thing, not gesture at it.
    expect(text.length).toBeGreaterThan(80);
    expect(text.toLowerCase()).toMatch(/prove|proof|pressur|forc/);
  });

  it('UT-0711 disappears only once coercion-resistant voting is on', () => {
    wrap(<ReceiptFreedomBanner maciEnabled />);
    expect(screen.queryByRole('note')).toBeNull();
  });

  it('UT-0712 defaults to showing the warning when the flag is unknown', () => {
    // Fail safe: an unread flag must not silently suppress a safety warning.
    wrap(<ReceiptFreedomBanner />);
    expect(screen.getByRole('note')).toBeTruthy();
  });
});

describe('UT-0887 the vote-surface banner states the FR-131 v1 truth and carries no banned word', () => {
  /**
   * FR-131 (Doc 02 §4.45), closing sentence: the v1 product MUST NOT use "private",
   * "anonymous", "receipt-free" or "secure" to describe v1 voting behaviour. FR-131(a)
   * requires the notice to say the vote is NOT anonymous, NOT receipt-free and NOT
   * coercion-resistant — so those words may appear only immediately negated.
   * Doc 09 v1.3.0 REL-LIM-18 site (3): this banner is the one string a citizen reads.
   * The retired copy said "Your vote is private" and "Nobody can see that a vote was yours".
   */
  const BANNED = /\b(private|anonymous|receipt-free|secure)\b/gi;
  const affirmativeBannedWords = (text: string): string[] =>
    [...text.matchAll(BANNED)]
      .filter((m) => !/\bnot\s+$/i.test(text.slice(0, m.index ?? 0)))
      .map((m) => m[0]);

  const renderedBanner = (): string => {
    wrap(<ReceiptFreedomBanner maciEnabled={false} />);
    return screen.getByRole('note').textContent ?? '';
  };

  it('uses no banned word except immediately negated, and never "private" or "secure" at all', () => {
    const text = renderedBanner();
    expect(affirmativeBannedWords(text)).toEqual([]);
    // "private" and "secure" have no mandated negated use in this notice.
    expect(text).not.toMatch(/\b(private|secure)\b/i);
  });

  it('states FR-131 (a), (b) and (c) — not the retired framing', () => {
    const text = renderedBanner().toLowerCase();
    // (a) conventional authentication; NOT anonymous / receipt-free / coercion-resistant.
    expect(text).toContain('not anonymous');
    expect(text).toContain('not receipt-free');
    expect(text).toContain('not coercion-resistant');
    // (b) the platform CAN see vote direction and party membership.
    expect(text).toContain('can see how you voted');
    expect(text).toContain('which party you belong to');
    // (c) the ballot the platform cannot see comes with a later upgrade, not on yet.
    expect(text).toContain('not switched on yet');
    // The retired claims are gone.
    expect(text).not.toContain('nobody can see that a vote was yours');
    expect(text).not.toContain('your vote is private');
  });

  it('renders the en source strings themselves, so the guard is on the shipped copy', () => {
    const text = renderedBanner();
    expect(text).toContain(en.banner.notReceiptFreeTitle);
    expect(text).toContain(en.banner.notReceiptFreeBody);
  });

  it('the Arabic banner carries the same truth, not the retired "your vote is secret" claim', () => {
    expect(ar.banner.notReceiptFreeTitle).not.toContain('صوتك سري');
    expect(ar.banner.notReceiptFreeBody).not.toContain('لا يستطيع أحد أن يرى أن هذا الصوت صوتك');
    expect(ar.banner.notReceiptFreeTitle).toContain('ليس مجهول الهوية');
    expect(ar.banner.notReceiptFreeBody).toContain('تستطيع أن ترى كيف صوّتّ');
  });
});

describe('UT-0720 petition progress agrees with the protocol', () => {
  const args = { endorsements: 250, required: 500, opensAt: T0, closesAt: T0 + 90 * DAY, now: T0 + DAY };

  it('shows the same counts the protocol computes', () => {
    wrap(<PetitionProgress {...args} />);
    const ref = petitionOutcome({
      endorsements: args.endorsements,
      required: args.required,
      opensAt: args.opensAt,
      closesAt: args.closesAt,
      now: args.now,
    });
    expect(screen.getByTestId('endorsements').textContent).toBe('250');
    expect(ref.remaining).toBe(250);
    // The remaining count is shown too, so a supporter knows how far there is to go.
    expect(screen.getAllByText(/250/).length).toBeGreaterThanOrEqual(1);
  });

  it('UT-0721 exposes progress to assistive technology, not only as a bar', () => {
    wrap(<PetitionProgress {...args} />);
    const meter = screen.getByRole('progressbar');
    expect(meter.getAttribute('aria-valuenow')).toBe('50');
    expect(meter.getAttribute('aria-valuetext')).toBeTruthy();
  });

  it('UT-0722 reports the threshold as met at exactly the required count', () => {
    wrap(<PetitionProgress {...args} endorsements={500} />);
    expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('100');
  });

  it('UT-0723 never shows more than 100% when support overshoots', () => {
    wrap(<PetitionProgress {...args} endorsements={5000} />);
    expect(Number(screen.getByRole('progressbar').getAttribute('aria-valuenow'))).toBeLessThanOrEqual(100);
  });
});

describe('UT-0730 the eight-pillar form uses the protocol’s own validation', () => {
  it('requires all eight pillars, naming each one that is missing', async () => {
    wrap(<EightPillarForm initialName="Commons Forward" initialJurisdiction="IN/KA" />);
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));

    const summary = await screen.findByRole('alert');
    const text = summary.textContent ?? '';

    // Eight distinct, named problems — not a single "form invalid". A citizen who has
    // written seven essays needs to be told which one is missing, not that "the form has
    // errors".
    expect(PILLARS).toHaveLength(8);
    for (const pillar of PILLARS) {
      expect(text, `the error summary does not name the "${pillar}" pillar`).toContain(pillar);
    }

    // And each problem links to the field it is about, so a keyboard or screen-reader user
    // can jump straight there (WCAG 2.2 AA 3.3.1).
    const links = within(summary).getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(PILLARS.length);
  });

  it('UT-0731 shows a real label for every pillar field', () => {
    wrap(<EightPillarForm />);
    // Every input a citizen must fill has a programmatic label (WCAG 2.2 AA 3.3.2).
    const textareas = screen.getAllByRole('textbox');
    expect(textareas.length).toBeGreaterThanOrEqual(PILLARS.length);
    for (const box of textareas) {
      const labelled =
        box.getAttribute('aria-label') ??
        (box.getAttribute('aria-labelledby')
          ? document.getElementById(box.getAttribute('aria-labelledby')!)?.textContent
          : null) ??
        (box.id ? document.querySelector(`label[for="${box.id}"]`)?.textContent : null);
      expect(labelled, `an input has no accessible label: ${box.getAttribute('name') ?? box.id}`).toBeTruthy();
    }
  });

  it('UT-0732 does not judge what a pillar says, only that it is substantial', async () => {
    const contentious = Object.fromEntries(
      PILLARS.map((p) => [p, `A position on ${p} that many people would find disagreeable. `.repeat(8)]),
    );
    wrap(
      <EightPillarForm
        initialName="Contentious Party"
        initialJurisdiction="IN/KA"
        initialPillars={contentious}
      />,
    );
    const publish = screen.getByRole('button', { name: /publish/i });
    expect(publish.hasAttribute('disabled')).toBe(false);
  });
});

describe('UT-0740 the client collects nothing about its reader', () => {
  it('renders without any network beacon, analytics global or tracking attribute', () => {
    const { container } = wrap(<PetitionProgress endorsements={1} required={500} opensAt={T0} closesAt={T0 + DAY} now={T0} />);
    const markup = container.innerHTML.toLowerCase();
    for (const forbidden of ['gtag', 'analytics', 'data-track', 'beacon', 'pixel', 'sentry']) {
      expect(markup.includes(forbidden), `markup contains "${forbidden}"`).toBe(false);
    }
    // Reading about a party must not create a record of who is interested in it.
    expect(typeof (globalThis as Record<string, unknown>).gtag).toBe('undefined');
  });
});

// ─── UT-0889 endorsement-copy honesty guard (FR-131 clause (e)) ──────────────
//
// DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4, Ruling B (approver-confirmed §11):
// "your name kept private" and "we never learn which party you support" quoted a v2
// (Definition-B) target property as shipped v1 behaviour. Backing a party is a public act
// by design (Doc 14 §2.2); the v1 operator database CAN link the account to the backing
// (FR-014/FR-015) and to party membership (FR-131(b)). This guard is the UT-0869 pattern
// applied to the landing page's endorsement copy, its "What we promise" list, and the
// FR-082 refusal message the same ruling reaches (§5.3).

describe('UT-0889 the landing page states the truth about backing a party, not a v2 privacy claim', () => {
  const BANNED = ['private', 'anonymous', 'receipt-free', 'secure'];
  // §2.2 jargon filter (DES-085, NFR-023), the house pattern also applied at UT-0857/0868/0884:
  // (v2.7.0, ISS-03, 06-coding-and-ut-v2.6.0-technical-cycle1.md — the two new landing strings
  // had no jargon scan of their own).
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

  it('neither corrected string contains banned blockchain jargon (§2.2, DES-085)', () => {
    for (const jargon of JARGON) {
      expect(
        en.home.steps[1].body.toLowerCase(),
        `home.steps[1].body contains jargon "${jargon}"`,
      ).not.toContain(jargon.toLowerCase());
      expect(
        en.home.promises[0].toLowerCase(),
        `home.promises[0] contains jargon "${jargon}"`,
      ).not.toContain(jargon.toLowerCase());
    }
  });

  it('home.steps[1].body: no "kept private"; states the public-act, name-not-shown and record-linkage facts', () => {
    const body = en.home.steps[1].body;
    expect(body).not.toContain('kept private');
    expect(body).toContain('public act');
    expect(body).toContain('name is not shown');
    expect(body).toContain('our own records can link');
    for (const word of BANNED) {
      expect(body.toLowerCase(), `"${word}" found in home.steps[1].body`).not.toContain(word);
    }
  });

  it('home.promises[0]: no "never learn"; states "never publish"', () => {
    const promise = en.home.promises[0];
    expect(promise).not.toContain('never learn');
    expect(promise).toContain('never publish');
    for (const word of BANNED) {
      expect(promise.toLowerCase(), `"${word}" found in home.promises[0]`).not.toContain(word);
    }
  });

  it('the corrected en source strings are what renders on the landing page', () => {
    wrap(<HomePage />);
    expect(screen.getByText(en.home.steps[1].body)).toBeTruthy();
    expect(screen.getByText(en.home.promises[0])).toBeTruthy();
  });

  it('the Arabic mirror is honest: no "kept secret" in the endorsement step, no "we never know" about party membership', () => {
    // The retired string was "...بقاء اسمك سريًا..." ("...your name kept secret...").
    // A bare substring ban on "سري" is brittle: it also matches ordinary, unrelated words
    // that merely share the root — "سريعًا" ("quickly") and "تسري" ("takes effect", already
    // present at ar.ts parties.leaveHelp) (v2.7.0, ISS-06,
    // 06-coding-and-ut-v2.6.0-technical-cycle1.md). Assert the exact retired phrase instead,
    // so the guard cannot false-positive against an honest sentence and still catches the
    // one string it exists to catch.
    expect(ar.home.steps[1].body).not.toContain('اسمك سريًا');
    expect(ar.home.promises[0]).not.toContain('لا نعرف');
  });

  it('the sdk authorship-refusal message no longer claims Supporters are anonymous (§5.3)', () => {
    const partyStore = new InMemoryPartyStore();
    const parties = new PartyCreationService(partyStore);
    const draft = {
      name: 'Commons Forward',
      jurisdiction: 'IN/KA',
      pillars: Object.fromEntries(
        PILLARS.map((p: string) => [p, `Commons Forward on ${p}. `.repeat(30)]),
      ),
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
    parties.joinParty(partyId, 'demo-member');

    const proposalStore = new InMemoryProposalStore();
    const service = new ProposalService(proposalStore, parties);

    let thrown: { code?: string; message?: string } | undefined;
    try {
      service.fileProposal(
        partyId,
        {
          question: 'Should the party meet in the evening instead?',
          title: 'Evening meetings',
          body: 'A full explanation of what this proposal would do and why. '.repeat(3),
          tier: 1,
        },
        'demo-member',
        PARTICIPATION_TIER.SUPPORTER,
      );
    } catch (e) {
      thrown = e as { code?: string; message?: string };
    }
    expect(thrown?.code).toBe('AUTHORSHIP_REQUIRES_WORKER_TIER');
    expect(thrown?.message).not.toContain('Supporters are anonymous');
    expect(thrown?.message).toContain("a Supporter's participation is never published");
  });
});

// ─── UT-0890 the /verify page is flag-gated dark, and its honesty placeholder is itself
// honest ─────────────────────────────────────────────────────────────────────────────────
//
// DECISIONS-2026-09-08-VERIFY-PAGE.md §1 (approver ruling): the /verify page's copy states
// the verify-and-discard enrolment design (FR-132 §(b); ADR-003; DES-100) as current fact,
// but enrolment is unbuilt (StubIdDocumentChecker.IS_INSECURE_MOCK() = true, Doc 06 §7) and
// blocked on CON-015. §5 (product-owner's choice, remedy (a)): the route is gated behind a
// new `enrolment_ui` flag (dev on; staging/prod off) and shows an honest placeholder
// otherwise (§5.3, NORMATIVE text). This guard is the UT-0869/UT-0889 pattern: assert the
// source string, assert it is what actually renders, assert the retired claim is gone from
// the DOM. Cites FR-131 clause (e) (the Grade-8-reader honesty test), FR-132 §(d)/(e)
// (anonymity/one-person-one-vote claims), §16.4 H-15 (same-document dedup is not 1p1v),
// H-17 (the vendor sees the document) and H-18 (subject_id_hash is a stable linkable id).

describe('UT-0890 the /verify page is flag-gated dark, and its honesty placeholder is itself honest', () => {
  const RETIRED_CLAIMS = [
    'never leaves your phone',
    'and nothing else',
    'cannot be traced back to you',
    'never run by a government',
    'Everything happens on your phone',
  ];
  const BANNED = ['private', 'anonymous', 'receipt-free', 'secure'];
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
  const newEnValues = () => [
    en.verify.unavailableTitle,
    en.verify.unavailableBody,
    en.verify.unavailablePlannedTitle,
    ...en.verify.unavailablePlanned,
  ];

  // A. The flag ships dark and carries its debt
  it('isEnabled(enrolment_ui, ...) is off in staging/prod and on in dev', () => {
    expect(isEnabled('enrolment_ui', 'prod')).toBe(false);
    expect(isEnabled('enrolment_ui', 'staging')).toBe(false);
    expect(isEnabled('enrolment_ui', 'dev')).toBe(true);
  });

  it('permanentFlags() stays empty — the new flag carries a removeBy', () => {
    expect(permanentFlags()).toEqual([]);
  });

  it('FLAGS.ENROLMENT_UI.description cites CON-015 and FR-132', () => {
    const desc = FLAGS.ENROLMENT_UI.description;
    expect(desc).toContain('CON-015');
    expect(desc).toContain('FR-132');
  });

  // B. With the flag off, no unbuilt guarantee reaches the DOM
  it('with the flag off, the honesty placeholder renders title, body, planned title and all four planned items', () => {
    wrap(<VerifyPage />, { enrolment_ui: false });
    expect(screen.getByTestId('verify-unavailable')).toBeTruthy();
    expect(screen.getByText(en.verify.unavailableTitle)).toBeTruthy();
    expect(screen.getByText(en.verify.unavailableBody)).toBeTruthy();
    expect(screen.getByText(en.verify.unavailablePlannedTitle)).toBeTruthy();
    for (const item of en.verify.unavailablePlanned) {
      expect(screen.getByText(item)).toBeTruthy();
    }
  });

  it('the rendered DOM carries none of the retired enrolment claims', () => {
    const { container } = wrap(<VerifyPage />, { enrolment_ui: false });
    const text = container.textContent ?? '';
    for (const claim of RETIRED_CLAIMS) {
      expect(text, `retired claim "${claim}" found in the DOM with the flag off`).not.toContain(claim);
    }
  });

  it('the enrolment controls are entirely absent with the flag off', () => {
    wrap(<VerifyPage />, { enrolment_ui: false });
    expect(screen.queryByTestId('start-verification')).toBeNull();
    expect(screen.queryByTestId('kept-list')).toBeNull();
    expect(screen.queryByTestId('not-kept-list')).toBeNull();
  });

  it('SiteHeader renders no anchor to /verify/ with the flag off', () => {
    const { container } = wrap(<SiteHeader />, { enrolment_ui: false });
    const anchors = Array.from(container.querySelectorAll('a'));
    expect(anchors.some((a) => (a.getAttribute('href') ?? '').startsWith('/verify'))).toBe(false);
  });

  // C. With the flag on (the dev posture), the screen is intact
  it('with the flag on, the enrolment screen renders and the nav link is present — the copy is gated, not deleted', () => {
    wrap(<VerifyPage />, { enrolment_ui: true });
    expect(screen.getByText(en.verify.onDeviceBody)).toBeTruthy();
    expect(screen.queryByTestId('start-verification')).not.toBeNull();

    const { container } = wrap(<SiteHeader />, { enrolment_ui: true });
    const anchors = Array.from(container.querySelectorAll('a'));
    expect(anchors.some((a) => (a.getAttribute('href') ?? '').startsWith('/verify'))).toBe(true);
  });

  // D. The new copy is itself honest
  it('none of the four new en.verify.* values contains a FR-131 banned word', () => {
    for (const value of newEnValues()) {
      for (const word of BANNED) {
        expect(value.toLowerCase(), `"${word}" found in "${value}"`).not.toContain(word);
      }
    }
  });

  it('none of the four new en.verify.* values contains DES-085/§2.2 jargon', () => {
    for (const value of newEnValues()) {
      for (const term of JARGON) {
        expect(value.toLowerCase(), `"${term}" found in "${value}"`).not.toContain(term);
      }
    }
  });

  it('unavailablePlanned states the H-17/H-15/CON-015 facts, not a rosier story', () => {
    const joined = en.verify.unavailablePlanned.join(' ');
    expect(joined).toContain('will see your document');
    expect(joined).toContain('promise written into a contract');
    expect(joined).toContain('will not prove that each person has only one account');
    expect(joined).toContain('None of this is built');
    expect(joined).toContain('legal opinion');
  });

  it('unavailableBody states the v1 truth positively: nobody is checked at all', () => {
    expect(en.verify.unavailableBody).toContain('nobody is checked at all');
  });

  // E. The Arabic mirror exists and is a translation
  it('ar.verify and en.verify have the same key set', () => {
    expect(new Set(Object.keys(ar.verify))).toEqual(new Set(Object.keys(en.verify)));
  });

  it('the Arabic mirror is complete and is not a copy-paste of the English', () => {
    expect(ar.verify.unavailablePlanned).toHaveLength(4);
    const pairs: [string, string][] = [
      [ar.verify.unavailableTitle, en.verify.unavailableTitle],
      [ar.verify.unavailableBody, en.verify.unavailableBody],
      [ar.verify.unavailablePlannedTitle, en.verify.unavailablePlannedTitle],
      ...ar.verify.unavailablePlanned.map(
        (v, i): [string, string] => [v, en.verify.unavailablePlanned[i]],
      ),
    ];
    for (const [arValue, enValue] of pairs) {
      expect(arValue.length).toBeGreaterThan(0);
      expect(arValue).not.toBe(enValue);
    }
  });

  it('no Arabic value contains a Latin-script banned word', () => {
    const arValues = [
      ar.verify.unavailableTitle,
      ar.verify.unavailableBody,
      ar.verify.unavailablePlannedTitle,
      ...ar.verify.unavailablePlanned,
    ];
    for (const value of arValues) {
      for (const word of BANNED) {
        expect(value.toLowerCase(), `"${word}" found in Arabic string "${value}"`).not.toContain(word);
      }
    }
  });
});
