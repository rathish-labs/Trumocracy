/**
 * DES-094 — Privacy-status component.
 *
 * Persistent authenticated-holder self-view element. Renders one of three participation-tier
 * states. Normatively binds FR-124 at the component level.
 *
 * Normative reference: Doc 03 §10.12.3 v2.7.1; ADR-023.
 * Traces: FR-082..086, FR-124, FR-131, NFR-001, NFR-002, NFR-024.
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
 * Clause 7 — Backing-aware copy selection for `ver` state (FR-131, H-15, H-16, T-01, T-02):
 *   The subtitle rendered in the `ver` state MUST be selected by the live IEligibilityVerifier
 *   backing's declared properties (DES-095 seam, Doc 03 §10.13.2 `getProperties()`), passed
 *   via the optional `backingProperties` prop. The component is designed so a caller can pass
 *   `verifier.getProperties()` straight through without adaptation.
 *
 *   Selection rule (normative — clause 7):
 *     - `backingProperties.unlinkable === true`   → v2 subtitle (ZK backing)
 *     - All other cases (false, undefined, absent, call error) → v1 subtitle (fail-honest default)
 *
 *   The v2 subtitle ("Your vote counts. Your identity is not stored.") MUST render ONLY when
 *   the live backing explicitly declares `unlinkable: true`. Absence of the prop or any error
 *   falls back to the v1 subtitle ("Your vote counts. How you voted is never made public.").
 *   The v2 subtitle MUST NEVER be assumed — fail-honest means the weaker claim is the default.
 *
 *   Proxy annotation (Doc 03 §10.12.3 clause 7, v2.7.1 ISS-02): `getProperties().unlinkable`
 *   is used as the subtitle-selection trigger because the current v2 ZK backing that declares
 *   `unlinkable: true` also guarantees "no identity at rest" by construction (ZK enrolment;
 *   nullifier-only on-chain; no `phone_hash` or `subject_id_hash` retained). The `unlinkable`
 *   property is a PROXY for the full "no identity at rest" guarantee, not an independent test.
 *   Any future backing declaring `unlinkable: true` MUST satisfy the same guarantee by design
 *   review before the v2 subtitle may render behind it. This is a design-review invariant for
 *   future backing registrations.
 *
 * Clause 8 — Non-vote `anon` context disclosure (FR-131, ADR-025 §(c-ii)):
 *   In browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3), the
 *   `anon` pill or its host screen MUST provide an accessible data-practices disclosure link
 *   adjacent to the pill. This obligation is deliberately NOT implemented in this session —
 *   it belongs to the enrolment sprint. Owner: engineer (enrolment sprint). Trigger: MUST be
 *   implemented before any screen rendering the `anon` pill in a non-vote context ships to
 *   production. Doc 03 §10.12.3 clause 8.
 *
 * ─────────────────────────────────────────────────────────────────────────────────
 */

import type { ReactElement, CSSProperties } from 'react';

/**
 * Properties declared by the live IEligibilityVerifier backing (DES-095, Doc 03 §10.13.2).
 *
 * Matches the exact shape of `ConventionalEligibilityVerifier.getProperties()` so a caller
 * can pass `verifier.getProperties()` directly without adaptation:
 *   `<PrivacyStatus state="ver" selfView={sv} backingProperties={verifier.getProperties()} />`
 *
 * All fields are optional so a partial response (e.g. a future backing exposing a subset)
 * degrades gracefully to the fail-honest default rather than throwing.
 *
 * Clause 7 (Doc 03 §10.12.3): only `unlinkable` drives subtitle selection for the `ver`
 * state. The other fields are accepted for forward compatibility and ignored by this component.
 */
export interface BackingProperties {
  readonly onePersonOneVote?: boolean;
  readonly subpoenaResistant?: boolean;
  /** Clause 7 trigger: true iff the backing cannot determine who voted (v2 ZK property). */
  readonly unlinkable?: boolean;
  readonly anonymityFloor?: boolean;
}

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
 *   ver  — Verified (v1 fail-honest default) / Verified — private (v2 ZK backing only —
 *          clause 7, same rule as the subtitle): dot --green, bg --green-soft, text #1f5a42
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
  /**
   * Properties declared by the live IEligibilityVerifier backing (DES-095 getProperties()).
   *
   * Clause 7 (Doc 03 §10.12.3 v2.7.1): When `state` is "ver", this prop drives subtitle
   * selection:
   *   - `backingProperties.unlinkable === true`  → v2 subtitle (ZK backing only)
   *   - All other cases (false, undefined, prop absent, or error) → v1 subtitle (fail-honest)
   *
   * Designed for direct pass-through: `backingProperties={verifier.getProperties()}`.
   * Absent or malformed → fail-honest default (v1 subtitle). The v2 subtitle MUST NEVER
   * be assumed. Has no effect when state is "anon" or "pub".
   *
   * Clause 8 owed obligation (enrolment sprint, NOT this session): the `anon` state requires
   * a data-practices disclosure link in non-vote contexts (Doc 03 §10.12.3 clause 8).
   */
  backingProperties?: BackingProperties;
}

// ─── ver-state subtitle constants (clause 7, Doc 03 §10.12.3 v2.7.1 backing-aware sub-table)

/**
 * v1 subtitle — fail-honest default (conventional backing; all cases where unlinkable ≠ true).
 *
 * Verbatim from the v2.7.1 backing-aware sub-table (row: "v1 (conventional): unlinkable = false,
 * or call absent/error — fail-honest default"). FR-131 compliant: no identity-at-rest claim;
 * truthful for v1 (aggregate-only publication is policy-enforced; individual vote direction
 * never published). Doc 03 §10.12.3 clause 7, backing-aware sub-table row 2.
 */
const VER_SUBTITLE_V1 = 'Your vote counts. How you voted is never made public.' as const;

/**
 * v2 subtitle — rendered ONLY when backingProperties.unlinkable === true (ZK backing).
 *
 * Verbatim from the v2.7.1 backing-aware sub-table (row: "v2 (ZK): unlinkable = true").
 * MUST NOT render against a v1 conventional backing: v1 retains phone_hash and subject_id_hash
 * in the operator DB and cannot technically sustain "Your identity is not stored" (H-15, H-16,
 * T-01, T-02). Doc 03 §10.12.3 clause 7, backing-aware sub-table row 1.
 *
 * Proxy annotation (v2.7.1 ISS-02): any future backing declaring unlinkable: true MUST satisfy
 * "no identity at rest" by design review before this subtitle may render. Doc 03 §10.12.3 clause 7.
 */
const VER_SUBTITLE_V2 = 'Your vote counts. Your identity is not stored.' as const;

// ─── ver-state title constants — backing-aware by the same clause-7 rule as the subtitle ─

/**
 * v1 title — fail-honest default (conventional backing; all cases where unlinkable ≠ true).
 *
 * Carries no FR-131 banned word. "private" MUST NOT appear on a voting-adjacent status badge
 * against a v1 conventional backing (FR-131 closing sentence, Doc 02 §4.45; Doc 09 v1.3.0
 * REL-LIM-18 pre-mount blocker, 2026-09-02; approver direction 2026-09-05). Doc 03 §10.12.3
 * v2.7.0 had read the word as describing "status visibility" and ruled the title compliant —
 * that reading is overruled; the SDD's v1 sub-table row and its banned-words note owe an
 * architect cascade (recorded in Doc 06 v2.5.0 §7). UT-0759 asserts the four-path rule.
 */
const VER_TITLE_V1 = 'Verified' as const;

/**
 * v2 title — rendered ONLY when backingProperties.unlinkable === true (ZK backing), the one
 * case in which "private" is true of the ballot. Verbatim from the v2.7.1 backing-aware
 * sub-table (row: "v2 (ZK): unlinkable = true"). Same proxy annotation as VER_SUBTITLE_V2.
 */
const VER_TITLE_V2 = 'Verified — private' as const;

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
  /** The title line — approved copy. For `ver` this is the fail-honest v1 default (clause 7). */
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
 *
 * NOTE on `ver.subtitle`: the value stored here (VER_SUBTITLE_V1) is the fail-honest default
 * used when backingProperties is absent or unlinkable !== true. The component overrides it to
 * VER_SUBTITLE_V2 when backingProperties.unlinkable === true (clause 7). Do not change the
 * `ver.subtitle` field here to VER_SUBTITLE_V2 — that would hardcode the v2 claim, which
 * clause 7 expressly prohibits. The same rule applies to `ver.title` (VER_TITLE_V1 here;
 * VER_TITLE_V2 only when unlinkable === true) — FR-131, Doc 09 REL-LIM-18 pre-mount blocker.
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
    // Clause 7 fail-honest defaults — overridden to VER_TITLE_V2 / VER_SUBTITLE_V2 by the
    // component when backingProperties.unlinkable === true. See the component body.
    title:      VER_TITLE_V1,
    subtitle:   VER_SUBTITLE_V1,
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
 * For the `ver` state, pass `backingProperties` to select the correct title and subtitle
 * (clause 7):
 *   - `backingProperties.unlinkable === true`  → v2 title + subtitle (ZK backing)
 *   - All other cases (absent prop, false, undefined) → v1 title + subtitle (fail-honest default)
 *
 * @example
 * // v1 conventional backing — no prop needed (fail-honest default):
 * const selfView: SelfViewToken = { holder: 'authenticated-self' };
 * return <PrivacyStatus state="ver" selfView={selfView} />;
 *
 * @example
 * // v2 ZK backing — pass getProperties() directly:
 * return <PrivacyStatus state="ver" selfView={selfView} backingProperties={verifier.getProperties()} />;
 */
export function PrivacyStatus({ state, selfView, backingProperties }: PrivacyStatusProps): ReactElement | null {
  // Clause 1 — runtime guard: self-view only.
  // The component returns null when the selfView contract is not satisfied, regardless of
  // what TypeScript's type system allows. This is the fail-closed rendering rule.
  if (!selfView || selfView.holder !== 'authenticated-self') {
    return null;
  }

  const cfg = STATE_CONFIG[state];

  // ─── Clause 7 — backing-aware subtitle selection for `ver` state ─────────────────
  //
  // The subtitle for the `ver` state is selected by the live backing's declared properties.
  // Rule: backingProperties.unlinkable === true → v2 subtitle (ZK backing has no identity at
  // rest); all other cases → v1 subtitle (fail-honest default; the stronger claim is never
  // assumed). Doc 03 §10.12.3 clause 7; backing-aware sub-table (v2.7.1).
  //
  // `unlinkable` is a PROXY for "no identity at rest" — see proxy annotation in JSDoc above.
  // Any future backing declaring unlinkable: true MUST satisfy the same guarantee by design
  // review. Doc 03 §10.12.3 clause 7, v2.7.1 ISS-02.
  const subtitle: string =
    state === 'ver' && backingProperties?.unlinkable === true
      ? VER_SUBTITLE_V2
      : cfg.subtitle;

  // The title follows the same rule (FR-131; Doc 09 REL-LIM-18 pre-mount blocker): the word
  // "private" renders only against a backing that has declared it true.
  const title: string =
    state === 'ver' && backingProperties?.unlinkable === true
      ? VER_TITLE_V2
      : cfg.title;

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
      aria-label={title}
    >
      {/* Decorative dot — hidden from assistive technology; the aria-label above carries
          the accessible name. Clause 6: this element carries no data beyond what rendering
          requires; no data-* attribute records the state value. */}
      <span aria-hidden="true" style={dotStyle} />
      <span className="privacy-content" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span className="privacy-title" style={{ fontWeight: 600, fontSize: '13px', lineHeight: 1.2 }}>
          {title}
        </span>
        <span className="privacy-subtitle" style={{ fontSize: '11px', lineHeight: 1.3 }}>
          {subtitle}
        </span>
      </span>
    </div>
  );
}
