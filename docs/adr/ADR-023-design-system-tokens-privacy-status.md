# ADR-023 — Design system: token set & privacy-status signature element for packages/ui

```
Status:        Accepted
Date:          2026-08-22
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        DES-093 (design token set), DES-094 (privacy-status component),
               ADR-011 (packages/ui designation), DES-081 (WCAG 2.2 AA),
               DES-083 (i18n/RTL), DES-085 (UX writing / jargon filter),
               FR-082..086, FR-124 (verified-status privacy, v2.3.1 ruling)
Source:        Approver directive, Rathish, 2026-08-22;
               wireframe design/wireframes/index.html
```

## Context

ADR-011 designated `packages/ui` as "design system (accessible components, i18n primitives)"
without specifying what goes in it. The wireframe (`design/wireframes/index.html`) proposes a
concrete visual language: 16 colour tokens, two typefaces (Fraunces display serif + Inter UI
sans), a territory rule (navy = public-party surfaces / paper = private-user surfaces), and a
"privacy-status" signature element with three normative states (anonymous / verified-private /
public). This is the first design-system content to be formalised for this product.

Adopting the token set commits the entire UI layer to a coherent visual vocabulary. Adopting
the privacy-status component commits the product to a specific FR-124-bound holder-self-view
element — with normative privacy consequences that go beyond the visual: the component spec is
the enforcement point for the FR-124 absence obligation (verified status never visible to anyone
but the holder in the Supporter tier).

The wireframe was assessed in Doc 03 §10.12.1 against the three-tier privacy model
(FR-082..086, FR-124), the SCR stubs (SCR-01..23), and the ADR-011 designation. The assessment
verdict was SOUND on all three axes, with four conflicts recorded in §10.12.6 that require
product owner or build-time resolution.

**Referent correction (noted here for traceability):** The approver directive attributed the
verified-status-privacy ruling to "OI-19". OI-19 is the invite-gating ruling (FR-125;
DECISIONS-2026-08-20-OI19-OI20.md). The verified-status-privacy ruling is the FR-124 ruling
(Doc 02 v2.3.1, Rathish, 2026-08-20). This ADR cites FR-124 throughout.

## Decision

**Adopt the wireframe's token set and privacy-status element as the normative design system
foundation for `packages/ui`**, as specified in Doc 03 §10.12 (DES-093 token set, DES-094
privacy-status component).

Normative content:

1. **DES-093 — Token set:** The 16 colour tokens and 2 typefaces verbatim from the wireframe
   `:root` block (§10.12.2) are authoritative. The territory rule — navy = public/party surfaces,
   paper = private/user surfaces — is a normative design constraint. A screen that violates the
   territory assignment is a design defect.

2. **DES-094 — Privacy-status component:** The three states (anon / ver / pub) with their exact
   wireframe copy, colour bindings, and the normative FR-124 privacy binding in §10.12.3 are
   authoritative. The binding is a **component-level requirement**, not a policy comment:
   - MUST render only in the authenticated holder's own session.
   - MUST NOT render on unauthenticated routes or on surfaces displaying another actor's data.
   - The `ver` state is NEVER rendered in any context visible to anyone other than the holder.
   - The FR-124(f) absence-test obligation applies at build and CI.

3. **Conflicts (§10.12.6) are recorded as disposition guidance,** not resolved by this ADR:
   - C-01: "Verify with Aadhaar" button text must be adapter-driven at build time.
   - C-02: "Caps at 100 until legal verification" has no backing FR — PO decision required.
   - C-03: Finance ledger screen undesigned — must be designed before the 1.6 row is built.
   - C-04: "9,000 to activate" is an illustrative prototype value — MUST NOT become a constant.

4. **packages/ui not built in this session.** This ADR records the design decision. The
   engineer implements `packages/ui/tokens.css` and `packages/ui/PrivacyStatus` during the
   Coding phase against the spec in §10.12, as directed by Doc 06.

## Alternatives rejected

**Alternative 1 — Defer to a separate design-system spike.** The wireframe provides a
complete, consistent visual language that has been assessed against all normative requirements
and found sound. A design spike would produce the same output with additional delay. Rejected.

**Alternative 2 — Use a third-party design system (e.g. Material Design, Radix).** The
privacy-status component's normative binding is specific to FR-124 and the three-tier privacy
model. A third-party system has no concept of this element. The territory rule (navy/paper) is
product-semantic, not a generic UI pattern. Adopting a third-party system would require
extensive customisation that is effectively the same work as building from the token set.
Additionally, DES-085 (no jargon), DES-081 (WCAG 2.2 AA), and DES-082 (15 MB install floor)
impose constraints that third-party systems may not satisfy. Rejected.

**Alternative 3 — Formalise tokens only; defer the privacy-status component spec.** The
privacy-status component is the architectural enforcement point for FR-124(a)/(d)/(f). Deferring
its normative spec delays the absence-test obligation and creates a window in which FR-124 could
be violated without a design-level guard. Rejected.

## Consequences

**Good:**
- One coherent visual language across all flows; the engineer builds against a normative spec
  in §10.12, not against an unverified wireframe.
- The privacy-status component's normative binding enforces FR-124 at the component level,
  creating a design-time and CI-enforced guard against Supporter-status leaks.
- The territory rule provides a reviewable design invariant: any navy-on-private or
  paper-on-public screen is a detectable defect.
- DES-083 (i18n/RTL) and DES-081 (WCAG 2.2 AA) now have a concrete token vocabulary and
  component inventory to validate against.
- SCR-mapping and design-debt register (§10.12.4/5) give the tester and PO a complete gap
  inventory for the next planning cycle.

**Bad / accepted:**
- **Typeface bundle risk:** Fraunces (variable font, GSUB-heavy) + Inter add to the font
  bundle. The engineer MUST verify the combined bundle meets the DES-082 15 MB install floor
  and self-host both fonts. Google Fonts CDN is blocked by the PWA CSP (ADR-012).
- **Specific hex values, not a semantic system:** Token values are the wireframe hex values,
  not a brand-derived palette. Any future brand change requires a DES-093 amendment through
  the standard DES governance path. Accepted intentionally — the tokens are the design.
- **Three open conflicts:** C-01 (adapter-driven strings), C-02 (unbacked 100-member cap),
  C-03 (missing finance ledger screen) are not resolved here. They require product owner
  decisions and engineer build-time discipline. Blocking the adoption decision on these conflicts
  would delay the entire design system; they are better resolved as targeted actions.
- **Design-debt backlog:** §10.12.5 records 5 screens (class i) and 3 required-absent screens
  (class ii) as design debt. This ADR does not resolve that debt; it makes it explicit and
  actionable.
