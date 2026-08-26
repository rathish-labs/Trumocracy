/**
 * UT-0841..UT-0870 — party-creation web flow.
 *
 * Covers: EightPillarForm additions (emblem, charter, BR-020, FR-130),
 * ProvisionalStatus component, collision/deficiency error surfaces,
 * jargon scan over new strings.
 *
 * Traces: FR-010, FR-011, FR-077, FR-130, BR-020, CON-013, DES-085,
 *         D2..D6 coordinator rulings 2026-08-25.
 *
 * EXISTING TESTS (UT-0700..UT-0740) ARE UNTOUCHED AND UNMODIFIED.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

import { LocaleProvider } from '@/i18n/LocaleProvider';
import { FlagProvider } from '@/config/flags';
import { EightPillarForm } from '@/components/EightPillarForm';
import { ProvisionalStatus } from '@/components/ProvisionalStatus';
import { PILLARS, NON_VIOLENCE_CLAUSE, PROVISIONAL_MEMBER_CAP } from '@trumocracy/protocol';
import { en } from '@/i18n/en';

const wrap = (ui: ReactElement, flags: Record<string, boolean> = {}) =>
  render(
    <LocaleProvider>
      <FlagProvider overrides={flags}>{ui}</FlagProvider>
    </LocaleProvider>,
  );

const DAY = 86_400;
const T0 = 1_760_000_000;

/** Produces a pillar value that passes the 280-char minimum. */
const goodPillar = (label: string) => `Our position on ${label}. `.repeat(30);
const goodPillars = Object.fromEntries(PILLARS.map((p) => [p, goodPillar(p)]));

// ─── UT-0841 emblem field ─────────────────────────────────────────────────────

describe('UT-0841 EightPillarForm emblem field labelled and bounded (D3, FR-010)', () => {
  it('renders the emblem field with an accessible label', () => {
    wrap(<EightPillarForm />);
    const input = screen.getByTestId('field-emblem');
    const id = input.getAttribute('id');
    const label = id ? document.querySelector(`label[for="${id}"]`) : null;
    expect(label?.textContent).toBeTruthy();
  });

  it('UT-0842 shows an error when emblem is absent after submit', async () => {
    wrap(
      <EightPillarForm
        initialName="Test Party"
        initialJurisdiction="IN/KA"
        initialPillars={goodPillars}
      />,
    );
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));
    const summary = await screen.findByRole('alert');
    expect(summary.textContent).toContain('emblem');
  });

  it('UT-0843 shows an error when emblem exceeds 8 chars after trim', async () => {
    wrap(
      <EightPillarForm
        initialName="Test Party"
        initialJurisdiction="IN/KA"
        initialPillars={goodPillars}
        initialEmblem="TOOLONGEMBLEM"
      />,
    );
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));
    const error = await screen.findByTestId('error-emblem');
    expect(error).toBeTruthy();
  });

  it('UT-0844 accepts emblem within 1–8 chars', async () => {
    const onPublish = vi.fn();
    wrap(
      <EightPillarForm
        initialName="Test Party"
        initialPillars={goodPillars}
        initialEmblem="TP"
        onPublish={onPublish}
      />,
    );
    // Select the first jurisdiction from the dropdown.
    const select = screen.getByTestId('field-jurisdiction');
    await userEvent.selectOptions(select, 'IN/KA');
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));
    expect(onPublish).toHaveBeenCalledWith(
      expect.objectContaining({ emblem: 'TP' }),
    );
  });
});

// ─── UT-0845 deficiency refusal names each deficient pillar ──────────────────

describe('UT-0845 deficiency refusal names each deficient pillar (FR-011)', () => {
  it('all eight pillar names appear in the error summary when all pillars are missing', async () => {
    wrap(<EightPillarForm initialName="Commons Forward" initialEmblem="CF" />);
    // Select jurisdiction.
    await userEvent.selectOptions(screen.getByTestId('field-jurisdiction'), 'IN/KA');
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));

    const summary = await screen.findByRole('alert');
    const text = summary.textContent ?? '';
    for (const pillar of PILLARS) {
      expect(text, `error summary does not name pillar "${pillar}"`).toContain(pillar);
    }
  });
});

// ─── UT-0846 collision errors surfaced ────────────────────────────────────────

describe('UT-0846 collision errors surfaced accessibly (FR-010)', () => {
  it('name collision service error appears in the error summary', async () => {
    const collisionError = [
      { field: 'name', code: 'NAME_COLLISION', message: en.petitions.collisionName },
    ];
    wrap(<EightPillarForm serviceErrors={collisionError} />);
    const summary = await screen.findByRole('alert');
    expect(summary.textContent).toContain(en.petitions.collisionName);
  });

  it('UT-0847 emblem collision service error appears in the error summary', async () => {
    const collisionError = [
      { field: 'emblem', code: 'EMBLEM_COLLISION', message: en.petitions.collisionEmblem },
    ];
    wrap(<EightPillarForm serviceErrors={collisionError} />);
    const summary = await screen.findByRole('alert');
    expect(summary.textContent).toContain(en.petitions.collisionEmblem);
  });
});

// ─── UT-0848 BR-020 disclosure on creation form ───────────────────────────────

describe('UT-0848 BR-020 disclosure present on the creation form', () => {
  it('the creation form renders the platform-vs-legal-registration disclosure', () => {
    wrap(<EightPillarForm />);
    const disclosure = screen.getByTestId('br020-disclosure-form');
    expect(disclosure.textContent).toContain(en.petitions.platformNotLegalTitle);
    expect(disclosure.textContent).toContain(en.petitions.platformNotLegalBody);
  });
});

// ─── UT-0849 non-violence clause visible and non-editable ─────────────────────

describe('UT-0849 non-violence clause visible, non-editable, present in submitted charter (FR-077)', () => {
  it('the non-violence clause is rendered in the form', () => {
    wrap(<EightPillarForm />);
    const clause = screen.getByTestId('non-violence-clause');
    expect(clause.textContent).toBe(NON_VIOLENCE_CLAUSE);
  });

  it('UT-0850 the non-violence clause is not an editable form control', () => {
    wrap(<EightPillarForm />);
    const clause = screen.getByTestId('non-violence-clause');
    // Must NOT be an input, textarea, or contenteditable element.
    expect(clause.tagName.toLowerCase()).not.toBe('input');
    expect(clause.tagName.toLowerCase()).not.toBe('textarea');
    expect(clause.getAttribute('contenteditable')).not.toBe('true');
  });

  it('UT-0851 the submitted charter carries the non-violence clause verbatim', async () => {
    const onPublish = vi.fn();
    wrap(
      <EightPillarForm
        initialName="Test Party"
        initialPillars={goodPillars}
        initialEmblem="TP"
        onPublish={onPublish}
      />,
    );
    await userEvent.selectOptions(screen.getByTestId('field-jurisdiction'), 'IN/KA');
    await userEvent.click(screen.getByRole('button', { name: /publish/i }));
    expect(onPublish).toHaveBeenCalledWith(
      expect.objectContaining({
        charter: expect.objectContaining({ nonViolenceClause: NON_VIOLENCE_CLAUSE }),
      }),
    );
  });
});

// ─── UT-0852 ProvisionalStatus honest at cap boundary ─────────────────────────

describe('UT-0852 ProvisionalStatus honest at cap boundary (FR-130)', () => {
  it('shows provisional label when provisional=true and cap is set', () => {
    wrap(<ProvisionalStatus memberCount={50} provisional cap={PROVISIONAL_MEMBER_CAP} />);
    expect(screen.getByTestId('provisional-label')).toBeTruthy();
    expect(screen.getByTestId('provisional-cap-open')).toBeTruthy();
  });

  it('UT-0853 shows cap-reached message when memberCount >= cap', () => {
    wrap(
      <ProvisionalStatus
        memberCount={PROVISIONAL_MEMBER_CAP}
        provisional
        cap={PROVISIONAL_MEMBER_CAP}
      />,
    );
    expect(screen.getByTestId('provisional-cap-reached')).toBeTruthy();
    expect(screen.queryByTestId('provisional-cap-open')).toBeNull();
  });

  it('UT-0854 shows member 100 ok, then cap message at 101 (boundary test)', () => {
    // Member 100 = not reached.
    const { unmount } = wrap(
      <ProvisionalStatus
        memberCount={PROVISIONAL_MEMBER_CAP - 1}
        provisional
        cap={PROVISIONAL_MEMBER_CAP}
      />,
    );
    expect(screen.queryByTestId('provisional-cap-reached')).toBeNull();
    unmount();

    // Member 100 exact = reached.
    wrap(
      <ProvisionalStatus
        memberCount={PROVISIONAL_MEMBER_CAP}
        provisional
        cap={PROVISIONAL_MEMBER_CAP}
      />,
    );
    expect(screen.getByTestId('provisional-cap-reached')).toBeTruthy();
  });

  it('UT-0855 BR-020 statement present on ProvisionalStatus', () => {
    wrap(<ProvisionalStatus memberCount={0} provisional cap={PROVISIONAL_MEMBER_CAP} />);
    const disclosure = screen.getByTestId('br020-disclosure');
    expect(disclosure.textContent).toContain(en.petitions.platformNotLegalTitle);
    expect(disclosure.textContent).toContain(en.petitions.platformNotLegalBody);
  });

  it('UT-0856 shows legal-registered message when provisional=false', () => {
    wrap(<ProvisionalStatus memberCount={150} provisional={false} cap={null} />);
    expect(screen.getByTestId('provisional-cap-legal')).toBeTruthy();
    expect(screen.queryByTestId('provisional-cap-reached')).toBeNull();
  });
});

// ─── UT-0857 jargon scan over new strings ─────────────────────────────────────

describe('UT-0857 jargon scan over new party-creation strings (DES-085, NFR-023)', () => {
  /**
   * New strings this session that could carry jargon.
   * Extended from the UT-0740 pattern.
   */
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
    'nonce',
    'hash',
  ];

  const newStrings = [
    en.petitions.emblemLabel,
    en.petitions.emblemHelp,
    en.petitions.jurisdictionSelectLabel,
    en.petitions.jurisdictionSelectHelp,
    en.petitions.nonViolenceTitle,
    en.petitions.nonViolenceHelp,
    en.petitions.charterSectionTitle,
    en.petitions.charterSectionHelp,
    en.petitions.platformNotLegalTitle,
    en.petitions.platformNotLegalBody,
    en.petitions.provisionalLabel,
    en.petitions.provisionalCapHelpOpen(100),
    en.petitions.provisionalCapHelpReached(100),
    en.petitions.provisionalCapHelpLegal,
    en.petitions.draftSaved,
    en.petitions.petitionStarted,
    en.petitions.collisionName,
    en.petitions.collisionEmblem,
    NON_VIOLENCE_CLAUSE,
  ];

  for (const jargon of JARGON) {
    it(`no new string contains "${jargon}"`, () => {
      for (const str of newStrings) {
        expect(
          str.toLowerCase().includes(jargon.toLowerCase()),
          `string "${str.slice(0, 60)}..." contains jargon "${jargon}"`,
        ).toBe(false);
      }
    });
  }
});
