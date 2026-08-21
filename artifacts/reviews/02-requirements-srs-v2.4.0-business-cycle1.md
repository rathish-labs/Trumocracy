# Document Review Report — 02-requirements-srs.md v2.4.0 · Business · Cycle 1

> Reviewer: **technical-writer** (neutral — not the document owner; product-owner owns Doc 02).
> Independence maintained: scorer ≠ author; no edits made to the reviewed document.
> Scope note: this is a decision-application version applying the OI-19 and OI-20 rulings
> (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md). Review is focused
> on (a) faithful and complete application of both rulings, (b) FR-125 finalisation with all
> required invariants, (c) FR-129 Charter-layer guard correctness, (d) FR-020 and FR-004
> normative-text integrity, and (e) §8 Gherkin coverage including the separating test and
> adversarial scenarios. Changed areas reviewed in full; unchanged areas spot-checked.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.4.0
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

Cycle-1 business review of `docs/02-requirements-srs.md` v2.4.0, applying the OI-19 and OI-20
rulings (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md). All critical checks pass. Both
rulings are applied faithfully and completely with no softening, no scope creep, and no silent
reconciliation beyond what the rulings direct.

OI-19: The ✅ DECIDED banner in §4.41 quotes the ruling verbatim. FR-125 is finalised with all
six required invariants — rate-limiter framing, non-invite fallback always open and not closeable
by any operator configuration or deployment default, no fee, test obligation recording the
separating test ("a determined real person can always join without an invite"), referral-edge
verified-then-discarded rules intact, counted-membership path ungated. FR-020 normative text is
unchanged and the v2.4.0 annotation confirms composition. §8 has five Gherkin scenarios including
the no-invite completion of counted membership (Scenario 3, the separating test) and the
adversarial operator-closes-fallback (Scenario 4, rejected).

OI-20: The ✅ DECIDED banner on FR-004 quotes the ruling verbatim. FR-004 normative text is
explicitly noted "NOT amended." The Phase-1 deployment limitation is recorded honestly and in
full: (a) person without Aadhaar cannot enrol in the pilot region; (b) the 50% attestor-share cap
is inoperative for the Phase-1 single-rail duration (sole rail carries 100% share — stated
explicitly). Exit condition named (Phase 2/eIDAS 2.0/FR-121). FR-129 minted as Must — Charter-layer
guard that making single-issuer operation permanent requires Charter-level amendment with re-entry
through both gates, never a deployment default. The WHICH-tier question (FR-118 Tier 1 vs FR-119
Tier 2) is explicitly deferred to the architect, not invented. §8 has two FR-129 Gherkin scenarios
including the adversarial config-extension (rejected). §13 OI-19 and OI-20 are both marked
RESOLVED with the prior PENDING text struck through and entries retained. §11 Must count 110,
FR minted 129, verified correct. No issues found. **Verdict: PASS.**

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`100%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — all rows above are "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 100 | 20.0 | Both rulings quoted verbatim in banners (§4.41 OI-19 DECIDED banner; §4.1 FR-004 OI-20 DECIDED annotation); change header summarises both rulings accurately; "never an admission condition" and "dated Phase-1 limitation, never a Charter amendment" framing preserved throughout |
| B2 Completeness | 15 | 100 | 15.0 | OI-19: all elements present — rate-limiter framing, always-open fallback, not-closeable constraint, no fee, test obligation with separating test, referral-discard rules, FR-020 absolute. OI-20: all elements present — architecture-level satisfaction, Phase-1 limitation (no-Aadhaar exclusion + 50% cap inoperative), exit condition Phase 2/eIDAS, FR-129 Charter guard, WHICH-tier deferred. §8 Gherkin complete for both. §13 entries retained RESOLVED. §12 traces updated. |
| B3 Traceability & IDs | 20 | 100 | 20.0 | FR-129 minted with new ID (no reuse); traces to BR-006, BR-012, BR-021; §12 trace added; §11 Must 110 (manually verified against FR list), FR minted 129, active 127 (129−2 superseded), cumulative note records "Added by v2.4.0: 1 FR (FR-129)"; FR-125 §12 trace note updated to "OI-19 RESOLVED, story now Ready" |
| B4 Correctness & consistency | 15 | 100 | 15.0 | FR-020 normative text unchanged; FR-004 normative text unchanged (explicitly stated "FR-004 normative text is NOT amended"); FR-129 correctly defers WHICH-tier to architect — not invented; OI-20 ruling "architecture level" framing accurately reflected; FR-125 composition with FR-020 confirmed in v2.4.0 annotation on FR-020 |
| B5 Testability | 15 | 100 | 15.0 | FR-125 Scenario 3 (no-invite → counted membership) is falsifiable and tests the separating test; Scenario 4 (operator closes fallback — rejected) is adversarial and falsifiable; FR-129 adversarial scenario (config-extension rejected) is falsifiable; all Gherkin blocks test mechanically enforceable properties |
| B6 Convention compliance | 15 | 100 | 15.0 | Header: Version 2.4.0 ✓; Status: In Review ✓; Last updated: 2026-08-20 ✓; Owner: Priya Raghunathan ✓; change entry newest-first ✓; FR-129 named owner (Marcus Adeyemi) ✓; RFC 2119 compliant ✓; ISO-8601 dates ✓ |
| **Total** | **100** | — | **100%** | — |

---

## 4. Critical-scope checks

| # | Check | Status | Evidence |
|---|-------|--------|----------|
| C-1 | OI-19 DECIDED banner quotes ruling verbatim in §4.41 | CONFIRMED | §4.41 banner (lines 707–717): "invite-gating is a spam-control RATE-LIMITER, never an admission condition, and the two compose only if a non-invite path always remains open." All four ruling bullet points quoted verbatim. Banner closes: "FR-020 unamended and absolute. FR-125 finalised below (no longer draft). OI-19 RESOLVED in §13." |
| C-2 | FR-125 finalised — no draft markers; all required invariants present | CONFIRMED | FR-125 row header: no "(Draft)" marker. Six clauses: (a) rate-limiter only, never admission condition, never sole door; (b) non-invite fallback ALWAYS available, not closeable by any operator configuration or deployment default, no fee, leads to full counted membership; (c) no refusal for lack of invite; (d) separating test as mandatory acceptance criterion — "a determined real person can always join without an invite"; (e) referral edge verified and discarded, never stored; (f) counted-membership path ungated. FR-020 admission properties apply "without exception" to counted membership. |
| C-3 | FR-020 normative text unchanged and absolute | CONFIRMED | FR-020 row (§4.6): "Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto available to any existing member, office-holder, drafter or platform actor." — verbatim unchanged. v2.4.0 annotation confirms composition: "invite-gating in FR-125 is a rate-limiter on the default open-tier path, never an admission condition; FR-020's admission guarantee is discharged by the always-open non-invite fallback mandated in FR-125; FR-020 is unamended and absolute." |
| C-4 | OI-20 DECIDED banner on FR-004 quotes ruling verbatim | CONFIRMED | FR-004 annotation: "✅ OI-20 DECIDED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md)" followed by ruling verbatim: "the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment." All six ruling bullet points present verbatim. "FR-004 normative text is NOT amended" stated explicitly. |
| C-5 | FR-004 normative text unchanged | CONFIRMED | FR-004 row (§4.1): "Support at least two mutually independent identity-attestation paths per launch region, publish each attestor's share of credentials issued per region, and refuse further issuance from any attestor whose share would exceed 50% in that region." — verbatim unchanged. Annotation explicitly states "FR-004 normative text is NOT amended." |
| C-6 | Phase-1 deployment limitation honest and findable from FR-004 | CONFIRMED | FR-004 annotation records: "(a) in Phase 1 a person without Aadhaar cannot enrol in the pilot region — accepted exclusion per TD-05/ADR-016; (b) FR-004's 50% attestor-share cap is inoperative during the Phase-1 single-rail deployment — the sole rail carries 100% share for the pilot's duration; this is a dated, accepted, findable limitation recorded not hidden." Exit condition named: "Phase 2 adds eIDAS 2.0 as the second rail (FR-121)." |
| C-7 | FR-129 Charter-layer guard — permanence never a deployment/config default; re-entry required | CONFIRMED | FR-129: "Making single-issuer operation permanent — or extending it beyond the published, dated Phase-1 scope (FR-121) — MUST NOT be achievable as a deployment or configuration default; it MUST require the Charter-layer amendment process with re-entry through the two human gates (CLAUDE.md re-entry rule)." Normative regardless of tier: (a) rejected by system if no Charter process; (b) config flag blocked; (c) only Amendment path can modify scope. |
| C-8 | WHICH-tier question (FR-118 vs FR-119) explicitly deferred to architect, not invented | CONFIRMED | FR-129: "the question of WHICH tier governs issuer-plurality requirements is not answered in this version and MUST NOT be assumed — that determination is owed to the architect in the next Doc 03 increment and MUST be recorded in the RTM when settled." FR-118 and FR-119 are referenced as the two-tier system without resolving which applies. |
| C-9 | §8 Gherkin: FR-125 separating test scenario and adversarial fallback-closure present | CONFIRMED | Scenario 3 (lines 1840–1843): "Given a citizen who has no referral token... When they attempt to register for the platform and proceed through the non-invite fallback path to full counted membership... Then the non-invite fallback path is available and open... the citizen successfully completes enrolment (FR-069 nullifier minted) and gains counted-action eligibility (FR-123); they are not refused membership for lack of an invite." Scenario 4 (lines 1845–1848): operator attempts to close fallback → "the system rejects the configuration; the non-invite fallback path cannot be closed by any operator configuration, deployment flag, or default." |
| C-10 | §8 Gherkin: FR-129 adversarial config-extension scenario present | CONFIRMED | FR-129 Gherkin block (lines 1892–1901): adversarial scenario — "Given an operator or maintainer who attempts to extend the Phase-1 single-rail... by applying a configuration flag, environment variable, or deployment default... Then the system rejects the configuration." Valid Charter amendment scenario also present as the affirmative case. |
| C-11 | §13 OI-19 and OI-20 RESOLVED with entries retained | CONFIRMED | §13 OI-19 (line 2286): prior PENDING text struck through with ~~ markers; "✅ OI-19 RESOLVED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md)" with ruling summary; entry retained. §13 OI-20 (line 2287): same pattern; "✅ OI-20 RESOLVED"; FR-129 minted reference; FR-004 unamended. Both entries retained per ID-scheme rule. |
| C-12 | §11 arithmetic: Must 110, minted 129; convention note updated | CONFIRMED | Must FR list (line 2190): 110 FRs explicitly listed (FR-001 through FR-129, manually counted). Header: "129 FR minted (127 active + 2 superseded)." Cumulative note: "Added by v2.4.0: 1 FR (FR-129, Must — Charter-layer guard); OI-19 and OI-20 CLOSED; FR-125 finalised (no longer draft)." Convention note updated: "FR-125 is a finalised Must requirement (OI-19 RESOLVED at v2.4.0; no longer draft; implementation-ready)." |

---

## 5. OI-19 ruling cross-check

| Ruling phrase (Rathish, 2026-08-20) | Location in Doc 02 v2.4.0 | Match |
|--------------------------------------|---------------------------|-------|
| "invite-gating is a spam-control RATE-LIMITER, never an admission condition" | FR-125(a): "invite-gating is a spam-control RATE-LIMITER only — never an admission condition and never the sole door" | ✓ (verbatim) |
| "the two compose only if a non-invite path always remains open" | FR-125(b): "MUST ALWAYS be available... MUST remain permanently open and MUST NOT be closeable by any operator configuration or deployment default" | ✓ (verbatim intent, normative form) |
| "FR-020 stays absolute: no person may be refused membership for lack of an invite" | FR-125(c): "a person MUST NOT be refused open-tier or counted membership for lack of an invite token — FR-020 stays absolute and unamended" | ✓ (verbatim) |
| "slower and higher-friction is fine, closed is not" | FR-125(b): "The fallback MAY be slower or higher-friction than the invite path... closed is not" | ✓ (verbatim) |
| "MUST: the non-invite fallback exists. Without it FR-125 violates FR-020." | FR-125(b): "the fallback MUST remain permanently open... Without it, the invite path would constitute an admission condition barred by FR-020" | ✓ |
| "Add a test obligation that a person with no invite can still complete membership" | FR-125(d): "this is the mandatory acceptance criterion: the non-invite fallback MUST successfully lead to full counted membership (FR-069 enrolment nullifier + FR-123 counted-action eligibility)" | ✓ (verbatim intent) |
| "The test that separates the two: a determined real person can always join without an invite. Record it." | FR-125(d): "a determined real person can always join without an invite; this is the mandatory acceptance criterion" | ✓ (verbatim) |

---

## 6. OI-20 ruling cross-check

| Ruling phrase (Rathish, 2026-08-20) | Location in Doc 02 v2.4.0 | Match |
|--------------------------------------|---------------------------|-------|
| "the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment" | FR-004 annotation: verbatim; §4.43 preamble: "Phase-1 single-rail deployment is a dated, explicit pilot limitation" | ✓ (verbatim) |
| "FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level — Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency" | FR-004 annotation: verbatim | ✓ (verbatim) |
| "Record the single-rail pilot as a Phase-1 DEPLOYMENT limitation with an explicit exit condition: Phase 2 adds eIDAS" | FR-004 annotation: "Exit condition: Phase 2 adds eIDAS 2.0 as the second rail (FR-121)" | ✓ |
| "State honestly, as an accepted pilot limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region" | FR-004 annotation: "(a) in Phase 1 a person without Aadhaar cannot enrol in the pilot region — accepted exclusion per TD-05/ADR-016" | ✓ (verbatim) |
| "MUST: making single-issuer operation permanent would be a Charter-layer change requiring re-entry, never a deployment default. Record it." | FR-129: "MUST NOT be achievable as a deployment or configuration default; it MUST require the Charter-layer amendment process with re-entry through the two human gates" | ✓ (verbatim intent, normative form) |
| 50% attestor-share cap status | FR-004 annotation: "(b) FR-004's 50% attestor-share cap is inoperative during the Phase-1 single-rail deployment — the sole rail carries 100% share for the pilot's duration; this is a dated, accepted, findable limitation recorded not hidden" | ✓ (explicitly stated, honest) |

---

## 7. Issues

No issues found at any severity level.

Both rulings are applied faithfully, completely, and without softening. All critical and scope
checks pass. All Gherkin scenarios are falsifiable and correctly structured. The WHICH-tier
deferral is properly worded. The Phase-1 deployment limitation is stated honestly with no
euphemism. FR-020 and FR-004 normative texts are unchanged.

---

## 8. Routing instruction

**Verdict: PASS.** The owning role (**product-owner**, Priya Raghunathan) MUST:

1. Set `Status: Approved` in the document header.

No issues to carry forward.

**Open items inherited from prior versions (unchanged — not new):**

- **Approver (Rathish):** OI-10 (collusion bound ε) still open; provisional ε = 0.02 in Gherkin until Design baseline.
- **Architect:** DES coverage for FR-121..FR-129 owed in next Design increment. WHICH tier (FR-118 Tier 1 or FR-119 Tier 2) governs issuer-plurality requirements — must be determined and recorded in next Doc 03 increment; RTM catches up when settled. ADR-016/ADR-021 amendment notes owed per DECISIONS-2026-08-20-OI19-OI20.md §4.
- **Tester:** FR-125 is now implementation-ready (OI-19 RESOLVED); story Ready per DoR once DES/US assigned. RTM catch-up for FR-121..FR-129 deferred until DES and US exist.
- **Project-manager:** GATE-STATUS update owed — OI-19 and OI-20 CLOSED (both per DECISIONS-2026-08-20-OI19-OI20.md).
