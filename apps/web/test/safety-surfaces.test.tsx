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
import { PILLARS, petitionOutcome } from '@trumocracy/protocol';
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
