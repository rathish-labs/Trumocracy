/**
 * UT-0750..UT-0757 — PrivacyStatus component (DES-094).
 *
 * These tests protect the normative binding clauses of the privacy-status component
 * (Doc 03 §10.12.3). They are written in the spirit of UT-0700/UT-0701 (safety surfaces):
 * the component's rendering contract is a privacy property, not a presentation property.
 *
 * Traces: DES-094, FR-082..086, FR-124, NFR-001, NFR-002, NFR-024.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PrivacyStatus } from '../src/PrivacyStatus.js';
import type { SelfViewToken } from '../src/PrivacyStatus.js';

/** A valid self-view token — the only value that satisfies the contract. */
const VALID_SELF_VIEW: SelfViewToken = { holder: 'authenticated-self' };

describe('UT-0750 PrivacyStatus renders each state with exact approved copy', () => {
  it('renders the anon state with the correct title and subtitle', () => {
    render(<PrivacyStatus state="anon" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Anonymous')).toBeTruthy();
    expect(screen.getByText('Nothing you do here is linked to you')).toBeTruthy();
  });

  it('UT-0751 renders the ver state with the correct title and subtitle', () => {
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Verified — private')).toBeTruthy();
    expect(screen.getByText('Your vote counts. Your identity is not stored')).toBeTruthy();
  });

  it('UT-0752 renders the pub state with the correct title and subtitle', () => {
    render(<PrivacyStatus state="pub" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Public')).toBeTruthy();
    expect(screen.getByText('You chose a public role. Your record is visible')).toBeTruthy();
  });

  it('UT-0753 the component carries an accessible name matching the state title', () => {
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    const status = screen.getByRole('status');
    expect(status).toBeTruthy();
    expect(status.getAttribute('aria-label')).toBe('Verified — private');
  });
});

describe('UT-0754 PrivacyStatus enforces the self-view contract at runtime (clause 1)', () => {
  it('returns null when selfView is null — clause 1 fail-closed', () => {
    // We deliberately bypass TypeScript to test the runtime guard; clause 1 must hold
    // even when callers misuse the API (e.g. via JS code that bypasses tsc).
    const { container } = render(<PrivacyStatus state="ver" selfView={null as unknown as SelfViewToken} />);
    expect(container.firstChild).toBeNull();
  });

  it('UT-0755 returns null when selfView.holder is not authenticated-self', () => {
    // A caller who passes the wrong holder value (e.g. 'server-render' or anything else)
    // gets a null render. This enforces the contract at every call site.
    const wrong = { holder: 'server-render' } as unknown as SelfViewToken;
    const { container } = render(<PrivacyStatus state="ver" selfView={wrong} />);
    expect(container.firstChild).toBeNull();
  });

  it('UT-0756 returns null when selfView is an empty object', () => {
    const empty = {} as unknown as SelfViewToken;
    const { container } = render(<PrivacyStatus state="anon" selfView={empty} />);
    expect(container.firstChild).toBeNull();
  });
});

describe('UT-0757 PrivacyStatus ver state absence test — clause 3 and clause 6', () => {
  /**
   * Absence test in the spirit of UT-0701 (which verifies the vote confirmation screen
   * never leaks the voter's choice into the DOM).
   *
   * The ver state MUST NOT leak anything beyond the state's own approved copy:
   *   - No member identifiers in text or attributes.
   *   - No data-* attributes recording the state value beyond what rendering requires.
   *   - No other-actor names, IDs, or references.
   *
   * Doc 03 §10.12.3 clause 3 (Supporter ver state absence) and clause 6 (no retroactive
   * linkage — no analytics, no console, no data attributes recording state).
   */
  it('the ver state markup contains only the two approved copy strings and nothing more', () => {
    const { container } = render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    const text = container.textContent ?? '';

    // The ONLY text that should appear is the title and subtitle. Nothing else.
    const TITLE = 'Verified — private';
    const SUBTITLE = 'Your vote counts. Your identity is not stored';
    const expectedText = `${TITLE}${SUBTITLE}`;

    // Normalise whitespace for comparison.
    const normalised = text.replace(/\s+/g, ' ').trim();
    const expectedNormalised = expectedText.replace(/\s+/g, ' ').trim();
    expect(normalised).toBe(expectedNormalised);

    // No member identifiers — no numeric ID, no UUID pattern, no "member" keyword beyond
    // the approved subtitle.
    expect(text).not.toMatch(/member[-_]?id/i);
    expect(text).not.toMatch(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i);
  });

  it('the ver state rendered markup has no data-* attributes recording the state', () => {
    const { container } = render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    const markup = container.innerHTML;

    // Clause 6: no data-* attributes that record state beyond what rendering requires.
    // The CSS class (privacy ver) is necessary for rendering; a data-state or data-value
    // attribute would be unnecessary surveillance metadata.
    expect(markup).not.toMatch(/data-state/i);
    expect(markup).not.toMatch(/data-value/i);
    expect(markup).not.toMatch(/data-member/i);
    expect(markup).not.toMatch(/data-tier/i);
    expect(markup).not.toMatch(/data-privacy/i);

    // No analytics attributes — clause 6 prohibits them.
    expect(markup).not.toMatch(/data-track/i);
    expect(markup).not.toMatch(/data-analytics/i);
  });

  it('the ver state does not appear in a pub-state render (states are mutually exclusive)', () => {
    // The pub state must not accidentally render the ver copy. Verified Supporters are
    // not public; the pub state is for voluntary role-taking. Mixing the two would
    // be a privacy leak (FR-124(b)/(c)).
    const { container: pubContainer } = render(<PrivacyStatus state="pub" selfView={VALID_SELF_VIEW} />);
    expect(pubContainer.textContent).not.toContain('Verified');
    expect(pubContainer.textContent).not.toContain('Your identity is not stored');
  });
});
