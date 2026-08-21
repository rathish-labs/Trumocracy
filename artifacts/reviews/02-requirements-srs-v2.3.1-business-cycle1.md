# Document Review Report — 02-requirements-srs.md v2.3.1 · Business · Cycle 1

> Reviewer: **technical-writer** (neutral — not the document owner; product-owner owns Doc 02).
> Independence maintained: scorer ≠ author; no edits made to the reviewed document.
> Scope note: this is a patch version applying the FR-124 verified-status visibility ruling
> (Rathish, 2026-08-20) and fixing the three Low issues surfaced in the v2.3.0 cycle-1 review
> (artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md). Review is focused on
> (a) correct and complete application of the FR-124 ruling, (b) Supporter anonymity preservation
> (FR-082 consistency), (c) scope-guard integrity for OI-19/OI-20 and FR-125, and (d) resolution
> of ISS-01/ISS-02/ISS-03. Changed areas reviewed in full; unchanged areas spot-checked.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.3.1
Review mode: business
Reviewer role: technical-writer (neutral — not the document owner)
Score: 100%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Cycle-1 business review of `docs/02-requirements-srs.md` v2.3.1. This is a patch to v2.3.0
applying the approver's (Rathish, 2026-08-20) FR-124 verified-status visibility ruling and
fixing the three Low issues from the v2.3.0 cycle-1 review. All critical, high, and medium
bars are clear with a perfect score.

The ruling is applied faithfully and completely: FR-124 normative text is amended with six
clauses (a)–(f) that match the ruling verbatim; the original v2.3.0 clause (b) is retained
with a SUPERSEDED annotation and pointer; §8 Gherkin is updated with four scenarios including a
falsifiable adversarial aggregate-inference test; §14 glossary "Verified status" entry is updated
to match the amended composition. Supporter anonymity is preserved: self-view is correctly scoped
to the holder's own authenticated session only, with no public surface and an explicit
"MUST NOT be accessible to any other actor" clause — consistent with FR-082. Worker/Candidate
badge is correctly permitted by reference to voluntary role-taking (FR-080/FR-083).

All three v2.3.0 Low issues are resolved: ISS-01 (§2.5 CON range) ✓, ISS-02 (§15 OI-18 stale
note) ✓, ISS-03 (FR-020 annotation scoping sentence) ✓. All four scope guards are intact:
FR-020 normative text unchanged, FR-004 normative text unchanged, OI-19 PENDING with "Do NOT
mark decided" guard, OI-20 PENDING with "Do NOT amend FR-004's normative text" guard, and
FR-125 still draft pending OI-19. No new issues found. **Verdict: PASS.**

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`100%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — all rows above are "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 100 | 20.0 | Ruling quoted verbatim in FR-124 banner; rationale clear ("disclosure follows voluntary role-taking; verification is not role-taking — NFR-001, NFR-002, TD-02"); amendment source (Rathish, 2026-08-20, DECISIONS-2026-08-20-PILOT-VERIFICATION.md) on record; all four v2.3.0 decisions faithfully carried forward |
| B2 Completeness | 15 | 100 | 15.0 | All six ruling clauses captured in FR-124 normative text; §14 glossary updated; §8 4-scenario Gherkin with adversarial; three Low fixes documented inline with version tags; original v2.3.0 clause (b) retained with SUPERSEDED annotation and pointer |
| B3 Traceability & IDs | 20 | 100 | 20.0 | No new FRs minted (patch only); §11 "(v2.3.0)" count stamp correct by established convention (only updates when requirements are added); FR-124 composition check cites FR-082/083/086/NFR-001/NFR-002/TD-02 correctly; OI-19/OI-20 remain in §13 with PENDING status; ruling citation intact |
| B4 Correctness & consistency | 15 | 100 | 15.0 | All four CRITICAL checks passed (see §4 below); FR-082 consistency confirmed — self-view explicitly "the member's own authenticated-session view only and MUST NOT be accessible to any other actor"; Worker/Candidate badge permitted correctly cites FR-080 (voluntary role-taking already crossed disclosure line); absence-test obligation consistent with NFR-001/002 |
| B5 Testability | 15 | 100 | 15.0 | Four Gherkin scenarios: Supporter private self-view; absence from all public surfaces and other-actor views; Worker/Candidate badge visible; adversarial aggregate-inference attempt — all falsifiable; FR-124(f) absence-test obligation cites UT-0700/UT-0701 style; FR-128 subpoena-test Gherkin unchanged and valid |
| B6 Convention compliance | 15 | 100 | 15.0 | Header: Version 2.3.1 ✓; Status: In Review ✓; Last updated: 2026-08-20 ✓; Owner: Priya Raghunathan ✓; change entry documents amendment and three Low fixes ✓; RFC 2119 compliant ✓; ISO-8601 dates ✓; named owners on all requirements ✓ |
| **Total** | **100** | — | **100%** | — |

---

## 4. Critical-scope checks

| # | Check | Status | Evidence |
|---|-------|--------|----------|
| C-1 | FR-020 normative text unchanged — "Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto available to any existing member, office-holder, drafter or platform actor" | CONFIRMED | §4.6 FR-020 row: normative text verbatim unchanged. ISS-03 fix adds a scoping sentence to the *annotation* ("**Scope of this annotation: open-tier (non-counted) joining only.** The normative text of FR-020 — 'Admit any verified citizen...' — applies in full and without amendment to COUNTED membership") — annotation clarified, normative text untouched. |
| C-2 | FR-004 normative text unchanged | CONFIRMED | FR-004 normative text unchanged. OI-20 in §13 reads "Do NOT amend FR-004's normative text" and that instruction is followed. _(v2.3.1 made no touch to FR-004.)_ |
| C-3 | OI-19 PENDING — invite-gating vs FR-020 admission ban unresolved; FR-125 still draft | CONFIRMED | §4.41 banner: "PENDING APPROVER DECISION (Rathish)" and "Do NOT mark OI-19 decided. The OI is live." FR-125 text: "(Draft — pending OI-19 resolution before marking implementation-ready.)"; §8 FR-125 Gherkin guard: "Do NOT derive finalised test cases until OI-19 resolves." §13 OI-19 row: "Do NOT mark OI-19 decided. FR-125 is not implementation-ready until OI-19 closes." All four guards intact. |
| C-4 | OI-20 PENDING — single-rail pilot vs FR-004 attestor-plurality unresolved | CONFIRMED | §13 OI-20 row: "PENDING APPROVER DECISION (Rathish)" and "Do NOT mark OI-20 decided." _(v2.3.1 made no touch to OI-20.)_ |
| C-5 | FR-082 consistency — self-view scoped to holder's authenticated session, not a public surface | CONFIRMED | FR-124(a) normative text: "every verified participant — including Supporters — sees their own verified status...in the member's own authenticated-session view only and MUST NOT be accessible to any other actor." Gherkin Scenario 1: "Then verified status visible to that participant in their own authenticated session only; no other actor has access." Gherkin Scenario 2: "When examined by any actor OTHER THAN the authenticated Supporter, Then no per-person marker visible; absence-of-path test passes; FR-086 applies." No public-profile surface created. FR-082 (no public profile for Supporters) is not violated. |
| C-6 | Supporter anonymity not weakened — FR-082/086/NFR-001/002 composition | CONFIRMED | FR-124(b): aggregate-only public display for Supporters ✓; FR-124(d): MUST-NOT persistent public attribute ✓; FR-124(f): absence-test obligation ✓; Gherkin Scenario 4 (adversarial): "the adversary cannot determine which Supporter verified nor link the verification event to any identity, pseudonym, or nullifier; the aggregate count changes but no Supporter-to-count association is derivable by any actor from any system output" ✓ |

---

## 5. v2.3.0 Low-issue resolution checks

| ISS (v2.3.0) | Finding | Resolution status |
|---|---|---|
| ISS-01 | §2.5 CON range showed CON-014; CON-015 was added at v2.3.0 | RESOLVED — §2.5 now reads "See §9 (`CON-001` … `CON-015`). _(v2.3.1 ISS-01: range updated to reflect CON-015 minted at v2.3.0.)_" |
| ISS-02 | §15 OI-18 stale note ("OI-18 open") — OI-18 was decided at v2.2.0 | RESOLVED — §15 v2.1.0 row Notes now reads "~~OI-18 open~~ **OI-18 RESOLVED at v2.2.0** (two-tier entrenched-charter scope decided; OI-18-DECISION-2026-08-11.md applied at v2.2.0). _(v2.3.1 ISS-02: stale 'OI-18 open' note corrected.)_" |
| ISS-03 | FR-020 annotation implicitly narrowed scope without formal scoping clause | RESOLVED — FR-020 annotation now opens with "**Scope of this annotation: open-tier (non-counted) joining only.**" followed by an explicit statement that the normative text "applies in full and without amendment to COUNTED membership." Clarifies that FR-020's admission properties (no approval / no sponsorship / no invitation / no fee / no veto) "are retained in full and extended to open-tier entry" — resolving the ambiguity without changing the normative text. |

---

## 6. FR-124 ruling cross-check

| Ruling phrase (Rathish, 2026-08-20) | Location in Doc 02 v2.3.1 | Match |
|--------------------------------------|---------------------------|-------|
| "verified status is PRIVATE TO THE HOLDER, expressed as eligibility, never a public marker on a supporter" | FR-124 banner: verbatim; §14 "Verified status": verbatim | ✓ (verbatim) |
| Every verified participant including Supporters sees own status in own authenticated session | FR-124(a) normative text; Gherkin Scenario 1 | ✓ (verbatim) |
| Public sees only aggregate verified counts, never per-Supporter badge | FR-124(b); Gherkin Scenario 2 | ✓ (verbatim) |
| Worker/Candidate verified badge permitted (voluntary role-taking already crossed disclosure line) | FR-124(c); Gherkin Scenario 3; §14 clause (c) | ✓ (verbatim) |
| MUST-NOT: no persistent public attribute may reveal a specific Supporter is verified | FR-124(d); §14 clause (d) | ✓ (verbatim) |
| No retroactive linkage (FR-086) | FR-124(e); §14 | ✓ |
| Absence-test obligation | FR-124(f); §14 clause (d) tail | ✓ |
| Original v2.3.0 clause (b) retained with SUPERSEDED annotation | Document header lines 19–20; FR-124 normative text annotation | ✓ |

---

## 7. Issues

No issues found at any severity level. All three v2.3.0 Low issues are resolved (see §5). The
FR-124 amendment is correctly scoped, properly annotated, and fully consistent with the existing
privacy model (FR-082, FR-083, FR-086, NFR-001, NFR-002, TD-02). No new requirements were minted;
no IDs were renumbered or reused; all scope guards are intact.

---

## 8. Routing instruction

**Verdict: PASS.** The owning role (**product-owner**, Priya Raghunathan) MUST:

1. Set `Status: Approved` in the document header.

No Low issues to carry forward. All v2.3.0 cycle-1 Low issues are resolved.

**Open items inherited from v2.3.0 (unchanged — not new):**

- **Approver (Rathish):** OI-19 (invite-gating vs FR-020 admission ban) and OI-20 (single-rail
  pilot vs FR-004 attestor plurality) remain PENDING approver decision. Neither blocks this
  review cycle. FR-125 is not implementation-ready until OI-19 resolves.
- **Architect:** FR-124..128 have no DES yet — same recorded-phasing posture as FR-074..FR-111
  (Doc 03 §16). The §4.41/§4.42 requirements are in scope for the next Design phase.
- **Tester:** RTM catch-up for FR-121..128 deferred until DES and US exist; FR-125 TC seeding
  deferred until OI-19 closes.
