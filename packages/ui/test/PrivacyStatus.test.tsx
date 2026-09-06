/**
 * UT-0750..UT-0759 — PrivacyStatus component (DES-094 v2.7.1).
 *
 * These tests protect the normative binding clauses of the privacy-status component
 * (Doc 03 §10.12.3 v2.7.1). They are written in the spirit of UT-0700/UT-0701 (safety
 * surfaces): the component's rendering contract is a privacy property, not a presentation
 * property.
 *
 * UT-0758 covers the clause 7 backing-aware subtitle selection added in v2.7.1:
 *   - absent prop → v1 subtitle (fail-honest default)
 *   - unlinkable: false → v1 subtitle
 *   - unlinkable: true → v2 subtitle (ZK backing)
 *   - malformed/partial prop → v1 subtitle (fail-honest)
 *
 * UT-0759 covers the same four paths for the `ver` TITLE (FR-131; Doc 09 v1.3.0 REL-LIM-18
 * pre-mount blocker): "Verified" is the v1 fail-honest default; "Verified — private" renders
 * only when unlinkable: true.
 *
 * Traces: DES-094, DES-095, FR-082..086, FR-124, FR-131, NFR-001, NFR-002, NFR-024.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PrivacyStatus } from '../src/PrivacyStatus.js';
import type { SelfViewToken, BackingProperties } from '../src/PrivacyStatus.js';

/** A valid self-view token — the only value that satisfies the contract. */
const VALID_SELF_VIEW: SelfViewToken = { holder: 'authenticated-self' };

describe('UT-0750 PrivacyStatus renders each state with exact approved copy', () => {
  it('renders the anon state with the correct title and subtitle', () => {
    render(<PrivacyStatus state="anon" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Anonymous')).toBeTruthy();
    expect(screen.getByText('Nothing you do here is linked to you')).toBeTruthy();
  });

  it('UT-0751 renders the ver state with the correct title and v1 subtitle when no backingProperties (fail-honest default)', () => {
    // Clause 7 (Doc 03 §10.12.3 v2.7.1): absent backingProperties → fail-honest default →
    // v1 subtitle. The v2 subtitle MUST NOT be shown unless unlinkable === true explicitly.
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    // Title is backing-aware too (UT-0759): the v1 default carries no FR-131 banned word.
    expect(screen.getByText('Verified')).toBeTruthy();
    expect(screen.getByText('Your vote counts. How you voted is never made public.')).toBeTruthy();
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
    expect(status.getAttribute('aria-label')).toBe('Verified');
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
    // Absence test covers the v2 ZK path (unlinkable: true) — the case with the stronger
    // identity claim. Pass unlinkable: true to render v2 subtitle; the absence checks below
    // apply equally to both paths (no extra metadata regardless of which subtitle is shown).
    const v2Backing: BackingProperties = { unlinkable: true };
    const { container } = render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={v2Backing} />);
    const text = container.textContent ?? '';

    // The ONLY text that should appear is the title and subtitle. Nothing else.
    const TITLE = 'Verified — private';
    const SUBTITLE = 'Your vote counts. Your identity is not stored.';
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
    // Check both paths: v1 (no backing) and v2 (unlinkable: true) must both be clean.
    const { container: v1Container } = render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    const { container: v2Container } = render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={{ unlinkable: true }} />);
    const container = v1Container; // primary check; v2 uses same JSX structure
    const markup = container.innerHTML + v2Container.innerHTML;

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
    // The pub state must not accidentally render the ver copy (v1 or v2). Verified Supporters
    // are not public; the pub state is for voluntary role-taking. Mixing the two would
    // be a privacy leak (FR-124(b)/(c)).
    const { container: pubContainer } = render(<PrivacyStatus state="pub" selfView={VALID_SELF_VIEW} />);
    expect(pubContainer.textContent).not.toContain('Verified');
    // Neither v1 nor v2 ver subtitles may appear in a pub render.
    expect(pubContainer.textContent).not.toContain('Your identity is not stored');
    expect(pubContainer.textContent).not.toContain('How you voted is never made public');
  });
});

describe('UT-0758 PrivacyStatus ver subtitle backing-aware selection (clause 7 — Doc 03 §10.12.3 v2.7.1)', () => {
  /**
   * Clause 7 normative rule: subtitle for the `ver` state is selected by the live
   * IEligibilityVerifier backing's declared properties (DES-095 getProperties()).
   *
   * Selection:
   *   backingProperties.unlinkable === true  → v2 subtitle (ZK backing only)
   *   all other cases                        → v1 subtitle (fail-honest default)
   *
   * These tests ensure the component never assumes the stronger (v2) claim.
   * Traces: DES-094, DES-095, FR-131, clause 7 (v2.7.1).
   */

  it('absent backingProperties renders the v1 subtitle (fail-honest default — clause 7)', () => {
    // No prop at all → fall back to v1. The v2 subtitle MUST NEVER be assumed.
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Your vote counts. How you voted is never made public.')).toBeTruthy();
    expect(screen.queryByText('Your vote counts. Your identity is not stored.')).toBeNull();
  });

  it('unlinkable: false renders the v1 subtitle (explicit conventional backing)', () => {
    // v1 conventional backing declares unlinkable: false → v1 subtitle.
    const v1Backing: BackingProperties = { onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={v1Backing} />);
    expect(screen.getByText('Your vote counts. How you voted is never made public.')).toBeTruthy();
    expect(screen.queryByText('Your vote counts. Your identity is not stored.')).toBeNull();
  });

  it('unlinkable: true renders the v2 subtitle (ZK backing — clause 7)', () => {
    // v2 ZK backing declares unlinkable: true → v2 subtitle only.
    const v2Backing: BackingProperties = { onePersonOneVote: true, subpoenaResistant: true, unlinkable: true, anonymityFloor: true };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={v2Backing} />);
    expect(screen.getByText('Your vote counts. Your identity is not stored.')).toBeTruthy();
    expect(screen.queryByText('Your vote counts. How you voted is never made public.')).toBeNull();
  });

  it('malformed/partial prop (no unlinkable field) renders the v1 subtitle (fail-honest)', () => {
    // A partial BackingProperties object with no unlinkable field → undefined → v1 subtitle.
    // This also covers the case of a future backing that omits the field.
    const partialBacking: BackingProperties = { onePersonOneVote: false };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={partialBacking} />);
    expect(screen.getByText('Your vote counts. How you voted is never made public.')).toBeTruthy();
    expect(screen.queryByText('Your vote counts. Your identity is not stored.')).toBeNull();
  });
});

describe('UT-0759 PrivacyStatus ver-state title is backing-aware and carries no FR-131 banned word', () => {
  /**
   * Doc 09 v1.3.0 REL-LIM-18 pre-mount blocker (2026-09-02): the `ver` title
   * "Verified — private" put a banned word on a voting-adjacent status badge against the v1
   * conventional backing. The title now follows the clause-7 rule the subtitle already
   * follows: the v1 fail-honest default is "Verified"; "Verified — private" renders ONLY when
   * the backing declares unlinkable === true. Four-path pattern (absent / false / true /
   * malformed), as UT-0758.
   * Traces: FR-131 (Doc 02 §4.45 closing sentence), DES-094 clause 7, Doc 09 REL-LIM-18.
   */
  const BANNED = /\b(private|anonymous|receipt-free|secure)\b/i;

  it('absent backingProperties renders the v1 title "Verified" with no banned word', () => {
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} />);
    expect(screen.getByText('Verified')).toBeTruthy();
    expect(screen.queryByText('Verified — private')).toBeNull();
    const status = screen.getByRole('status');
    expect(status.getAttribute('aria-label')).toBe('Verified');
    expect(status.textContent ?? '').not.toMatch(BANNED);
  });

  it('unlinkable: false renders the v1 title (explicit conventional backing)', () => {
    const v1Backing: BackingProperties = { unlinkable: false };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={v1Backing} />);
    expect(screen.getByText('Verified')).toBeTruthy();
    expect(screen.queryByText('Verified — private')).toBeNull();
  });

  it('unlinkable: true renders the v2 title "Verified — private" — the one case it is true', () => {
    const v2Backing: BackingProperties = { unlinkable: true };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={v2Backing} />);
    expect(screen.getByText('Verified — private')).toBeTruthy();
    expect(screen.getByRole('status').getAttribute('aria-label')).toBe('Verified — private');
  });

  it('malformed/partial prop (no unlinkable field) renders the v1 title (fail-honest)', () => {
    const partialBacking: BackingProperties = { onePersonOneVote: false };
    render(<PrivacyStatus state="ver" selfView={VALID_SELF_VIEW} backingProperties={partialBacking} />);
    expect(screen.getByText('Verified')).toBeTruthy();
    expect(screen.queryByText('Verified — private')).toBeNull();
  });
});
