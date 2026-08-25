/**
 * DES-094 — Privacy-status component.
 *
 * Persistent authenticated-holder self-view element. Renders one of three participation-tier
 * states. Normatively binds FR-124 at the component level.
 *
 * Normative reference: Doc 03 §10.12.3; ADR-023.
 * Traces: FR-082..086, FR-124, NFR-001, NFR-002, NFR-024.
 *
 * ─── Normative binding clauses (Doc 03 §10.12.3) ────────────────────────────────
 *
 * Clause 1 — Self-view only (FR-124(a)):
 *   The component MUST render only the authenticated holder's own state in their own
 *   authenticated session. It MUST NOT render on any route accessible without
 *   authentication, and MUST NOT render on any surface displaying data belonging to
 *   another actor. This clause is enforced at runtime by the `selfView` prop contract:
 *   the component returns null whenever `selfView.holder !== 'authenticated-self'`.
 *
 * Clause 2 — No other-actor render (FR-082, FR-124(a)/(b)):
 *   The component MUST NOT render on a Supporter's public profile (no public Supporter
 *   profile exists by design — FR-082), on any other party member's page, or on any
 *   aggregate-only public view.
 *
 * Clause 3 — Supporter `ver` state absence (FR-124(b)/(d)/(f)):
 *   A Supporter's verified state MUST be absent from all public surfaces, all other-actor
 *   views, all logs, and all exports. The `ver` state is never rendered in a context
 *   visible to anyone other than the authenticated holder. The FR-124(f) absence-test
 *   obligation applies: see UT-0750/UT-0751.
 *
 * Clause 4 — Worker/Candidate `pub` state (FR-124(c)):
 *   The `pub` state corresponds to voluntary role-taking. A separate static "Public" badge
 *   on the Worker/Candidate public participation record is permitted by FR-124(c). That
 *   badge is NOT a PrivacyStatus component instance; it is a distinct static label on the
 *   public-tier participation record.
 *
 * Clause 5 — Aggregate counts (FR-124(b)):
 *   Aggregate verified counts (e.g. "12,480 verified members") on public party pages are
 *   plain text derived from on-chain aggregate data. They are NOT PrivacyStatus component
 *   instances and do not reveal any individual's state.
 *
 * Clause 6 — No retroactive linkage (FR-124(e), FR-086):
 *   The component MUST NOT write, emit, or trigger any log entry or export that associates
 *   the holder's rendered state with any persistent record accessible to any other actor.
 *   No analytics, no console.log, no data-* attributes that record the state beyond what
 *   rendering requires. FR-086 applies: no retroactive linkage between an anonymous
 *   Supporter's verified status and their identity is permitted through any data the system
 *   holds or emits.
 *
 *   IMPORTANT — Screen 3.6 (wireframe line 450): the static `<div class="privacy pub">` in
 *   the one-way door screen body is a holder self-view PREVIEW of the future pub state after
 *   crossing to a public role. It is NOT a PrivacyStatus component instance. The engineer
 *   MUST NOT implement screen 3.6's preview element as a PrivacyStatus component call.
 *
 * ─────────────────────────────────────────────────────────────────────────────────
 */

import type { ReactElement, CSSProperties } from 'react';

/**
 * Proof token for the self-view contract (clause 1 above).
 *
 * Callers obtain a SelfViewToken from their authenticated session context. The discriminated
 * literal `holder: 'authenticated-self'` is the type-level signal that only an authenticated
 * holder can construct this value — it MUST NOT be fabricated on surfaces displaying another
 * actor's data, and it MUST NOT be passed on unauthenticated routes.
 *
 * The runtime guard (`selfView.holder !== 'authenticated-self'`) is enforced inside the
 * component in addition to the TypeScript type check. The component returns null for any
 * deviation — fail-closed by design.
 */
export interface SelfViewToken {
  readonly holder: 'authenticated-self';
}

/**
 * The three participation-tier states of the PrivacyStatus component.
 *
 * Doc 03 §10.12.3 — three states with exact wireframe copy and colour bindings:
 *   anon — Anonymous: dot --grey-soft, bg #ECEEF5, text #41496b
 *   ver  — Verified — private: dot --green, bg --green-soft, text #1f5a42
 *   pub  — Public: dot --amber, bg #FDF3E0, text #8a5b10
 */
export type PrivacyState = 'anon' | 'ver' | 'pub';

export interface PrivacyStatusProps {
  /** Current participation-tier state of the authenticated holder. */
  state: PrivacyState;
  /**
   * Self-view proof token (clause 1 — self-view only).
   *
   * The component returns null when this is absent or when `holder !== 'authenticated-self'`.
   * Obtain this value from the authenticated session context. Callers MUST NOT fabricate this
   * token on surfaces displaying another actor's data.
   */
  selfView: SelfViewToken;
}

// ─── State configuration (verbatim from Doc 03 §10.12.3 table) ───────────────────

type StateConfig = {
  /** Dot colour (exact hex from the DES-094 table). */
  readonly dotColor: string;
  /** Background colour of the status element. */
  readonly background: string;
  /** Text colour inside the element. */
  readonly textColor: string;
  /** CSS class string matching the wireframe convention: "privacy <state>". */
  readonly cssClass: string;
  /** The title line — approved copy, verbatim from DES-094. MUST NOT be changed. */
  readonly title: string;
  /** The subtitle line — approved copy, verbatim from DES-094. MUST NOT be changed. */
  readonly subtitle: string;
};

/**
 * State configuration table — DES-094 §10.12.3.
 *
 * Every value in this table is normative: the copy is approved verbatim and the colour
 * bindings correspond exactly to the CSS custom properties in tokens.css (DES-093).
 * Do not alter any value here without a matching change to the SDD and ADR-023.
 */
const STATE_CONFIG: Readonly<Record<PrivacyState, StateConfig>> = {
  anon: {
    dotColor:   '#8892AE', // var(--grey-soft)
    background: '#ECEEF5',
    textColor:  '#41496b',
    cssClass:   'privacy anon',
    title:      'Anonymous',
    subtitle:   'Nothing you do here is linked to you',
  },
  ver: {
    dotColor:   '#2C7A5B', // var(--green)
    background: '#E7F1EC', // var(--green-soft)
    textColor:  '#1f5a42',
    cssClass:   'privacy ver',
    title:      'Verified — private',
    subtitle:   'Your vote counts. Your identity is not stored',
  },
  pub: {
    dotColor:   '#F2B134', // var(--amber)
    background: '#FDF3E0',
    textColor:  '#8a5b10',
    cssClass:   'privacy pub',
    title:      'Public',
    subtitle:   'You chose a public role. Your record is visible',
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────────

/**
 * PrivacyStatus — DES-094.
 *
 * Renders the authenticated holder's participation-tier state in their own authenticated
 * session. Returns null for any non-conforming selfView token (clause 1 — fail-closed).
 *
 * @example
 * // Obtain selfView from the authenticated session context only:
 * const selfView: SelfViewToken = { holder: 'authenticated-self' };
 * return <PrivacyStatus state="ver" selfView={selfView} />;
 */
export function PrivacyStatus({ state, selfView }: PrivacyStatusProps): ReactElement | null {
  // Clause 1 — runtime guard: self-view only.
  // The component returns null when the selfView contract is not satisfied, regardless of
  // what TypeScript's type system allows. This is the fail-closed rendering rule.
  if (!selfView || selfView.holder !== 'authenticated-self') {
    return null;
  }

  const cfg = STATE_CONFIG[state];

  // Inline styles use the exact hex values from DES-094 rather than CSS custom property
  // references, so the component renders correctly in environments that do not load
  // tokens.css (e.g. jsdom in tests). CSS custom properties from tokens.css are still the
  // canonical reference for production styling.
  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '12px', // --radius-privacy
    background: cfg.background,
    color: cfg.textColor,
  };

  const dotStyle: CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: cfg.dotColor,
    flexShrink: 0,
  };

  return (
    // Role "status" signals a live region to assistive technology; the holder's own
    // participation tier is a relevant, low-urgency status update (WCAG 4.1.3).
    <div
      className={cfg.cssClass}
      style={containerStyle}
      role="status"
      aria-label={cfg.title}
    >
      {/* Decorative dot — hidden from assistive technology; the aria-label above carries
          the accessible name. Clause 6: this element carries no data beyond what rendering
          requires; no data-* attribute records the state value. */}
      <span aria-hidden="true" style={dotStyle} />
      <span className="privacy-content" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span className="privacy-title" style={{ fontWeight: 600, fontSize: '13px', lineHeight: 1.2 }}>
          {cfg.title}
        </span>
        <span className="privacy-subtitle" style={{ fontSize: '11px', lineHeight: 1.3 }}>
          {cfg.subtitle}
        </span>
      </span>
    </div>
  );
}
