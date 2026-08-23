# Document Review Report — Doc 03 Architecture & Design SDD v2.2.0

> Produced by the **document-review** skill. Reviewer: tester (neutral — not the document's owner).
> Mode: technical. Reviewed scope: v2.2.0 increment (§10.12, ADR-023, §12 preamble count, §15 DES-093/094 rows, §16 Q11–Q14, §18 C-01..C-03) in full-document context. Sources verified against: `design/wireframes/index.html`, `docs/02-requirements-srs.md`, `docs/05-product-backlog.md`, `docs/adr/ADR-011-repository-structure.md`, `docs/adr/ADR-023-design-system-tokens-privacy-status.md`.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.2.0
Review mode: technical
Reviewer role: tester
Score: 84%
Critical: 0
High: 0
Medium: 2
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.2.0 adds §10.12 "Design system & screen inventory" (~250 lines), ADR-023, §15 DES-093/094 traceability rows, §16 Q11–Q14, and §18 C-01..C-03. The increment is technically well-executed: all 16 colour-token hex values are verbatim-faithful to the wireframe `:root` block; the territory rule (navy/paper) correctly reflects `body.navy` and `body.paper` usage across all 15 screens; the privacy-status component states match the wireframe `privacy()` function exactly; the FR-124 binding in DES-094 is substantively comprehensive; the leak-check is independently confirmed as PASS (13 `privacy()` function calls, all authenticated-holder self-view, no Supporter status exposed to any other actor); and all four conflicts (C-01..C-04) are accurately characterised. Two medium-severity internal inconsistencies block the pass bar: (1) the §10.12.1(b) assessment summary states "8 of the 23 SCRs with full or partial coverage; 8 SCRs have no wireframe screen at all" — the §10.12.4 table directly contradicts this with 16 SCRs having some coverage and 7 having none; (2) the §10.12.4 Wireframe→SCR table classifies screen 3.4 "Vote confirmed" as having no SCR and adds it to design-debt class (i), while the SCR→Wireframe table in the same section maps SCR-14 ("Result & verify-it-yourself") to screen 3.4 with partial coverage. Three low-severity issues (changelog §18 entry count, one uncounted `.privacy` HTML element in screen 3.6, FR-124(e) not explicitly cited in DES-094 binding) do not block the pass bar but are noted for the rework.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`84%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (2 medium issues)
- **Verdict:** `FAIL` — two medium issues force failure regardless of score.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage & traceability | 20 | 90 | 18.0 | DES-093/094 traces to FR-082..086, FR-124, relevant NFRs all well-formed; FR-124(e) not explicitly bound in DES-094 (Low ISS-05); US layer owed and acknowledged |
| T2 Design completeness | 20 | 80 | 16.0 | Token values, territory rule, privacy states, conflict register, and design-debt register all accurate; SCR coverage summary in §10.12.1(b) materially wrong (Medium ISS-01) |
| T3 Technical correctness | 20 | 92 | 18.4 | All 16 hex tokens verbatim-faithful; privacy states exact; leak-check independently verified PASS; C-04 endorsement-floor formula correctly cited; 14th `.privacy` HTML element in 3.6 uncounted (Low ISS-04) |
| T4 Internal consistency | 20 | 70 | 14.0 | Two cross-table contradictions (ISS-01, ISS-02); changelog §18 entry count misleading (ISS-03 Low); ADR count preamble, DES IDs, and §16 Q-numbering all correct |
| T5 NFR / risk / security coverage | 10 | 88 | 8.8 | Privacy binding comprehensive; typeface bundle risk noted; no endorsement-floor or §10.11 contradiction; FR-124(e) retroactive-linkage clause not bound at component level (Low ISS-05) |
| T6 Traceability & documentation quality | 10 | 85 | 8.5 | ADR-023 well-formed, format consistent with ADR-016+ house style (Alternatives rejected section, Source field); §12 row correct; §15 rows complete; §16 Q11–Q14 continuous; §18 has C-01..C-03 per architect intent; changelog description of §18 slightly overstates (ISS-03) |
| **Total** | **100** | — | **84%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T2, T4 | §10.12.1(b) — assessment paragraph, second bullet | The summary text states "The 15 wireframe screens cover **8** of the 23 SCRs with full or partial coverage. **8** SCRs have no wireframe screen at all." Independent count from the §10.12.4 SCR→Wireframe table shows **16** SCRs with some coverage (SCR-01, 02, 04, 06, 08, 09, 10, 11, 12, 13, 14, 15, 17, 20, 22, 23) and **7** SCRs with no wireframe (SCR-03, 05, 07, 16, 18, 19, 21). The stated figures (8 covered + 8 uncovered = 16) do not sum to 23; the actual figures (16 + 7 = 23) are internally consistent. The summary misrepresents the SCR coverage state by a factor of approximately 2 and will mislead backlog and planning readers who read only the assessment section. | Replace "8 of the 23 SCRs with full or partial coverage" with "16 of the 23 SCRs with full or partial coverage" and replace "8 SCRs have no wireframe screen at all" with "7 SCRs have no wireframe screen at all." |
| ISS-02 | **Medium** | T3, T4 | §10.12.4 — Wireframe→SCR table row for screen 3.4; SCR→Wireframe table row for SCR-14 | The §10.12.4 Wireframe→SCR table declares screen 3.4 "Vote confirmed" as having no SCR ("None") and adds it to design-debt class (i): "No SCR. DES-063 covers coercion-safe confirmation at design level." In the same section, the SCR→Wireframe table maps SCR-14 ("Result & verify-it-yourself") to screen 3.4 with partial coverage: "Partial — post-vote tally shown; independent-verifier flow absent." Both statements cannot be true simultaneously. Screen 3.4 clearly renders a post-vote tally (confirmed by wireframe code at line 408 and the "Where the whole party stands" card), which is the subject matter of SCR-14. | Correct the Wireframe→SCR row for screen 3.4: replace "None" with "SCR-14 (partial)" and revise the coverage note to "Post-vote tally present (consistent with SCR-14 result surface); independent-verifier flow (verify-it-yourself) absent." Remove screen 3.4 from the design-debt class (i) register; it does have SCR coverage. If a separate DES for the coercion-safe confirmation UX state is still desired, note it as a DES gap under SCR-14, not as a missing SCR. |
| ISS-03 | Low | T6 | Changelog header, v2.2.0 entry, §18 reference | The changelog entry states "§18 four new entries (C-01 Aadhaar button hardcoding; C-02 100-member cap unbacked; C-03 finance ledger screen absent; C-04 illustrative threshold)." Inspection of §18 finds three new entries: C-01 (§18 line heading "### C-01"), C-02 ("### C-02"), and C-03 ("### C-03"). C-04 does not appear in §18. The architect memory note (artifacts/architect-2026-08-22T1120.md field `contradiction_entries: "C-01, C-02, C-03"`) confirms C-04 was deliberately excluded from §18 because its disposition is "confirmed no conflict." The changelog description is misleading: it implies four entries were added to §18 when in fact only three were. | Correct the changelog to read "§18 three new entries (C-01..C-03)." C-04 should remain in §10.12.6 only, with its "confirmed no conflict" disposition, which is the correct placement. |
| ISS-04 | Low | T3 | §10.12.3 leak-check table; wireframe screen 3.6, line 450 | The §10.12.3 leak-check states "13 instances" of the privacy-status pill, all self-view. The reviewer counted 13 `privacy()` function calls (confirmed by source-code search). However, screen 3.6 (The one-way door) additionally contains an inline `<div class="privacy pub" style="margin:12px 0 0">` at wireframe line 450 — a preview rendering the `pub` state to show the holder what their pill will look like after they cross to a public role. This is not a privacy leak (it is the holder's own future state, visible only in their authenticated session), but it is a 14th use of the `.privacy` CSS class in the wireframe that is unaddressed by the DES-094 clause 4 (which addresses `.pill.pub` candidate badges in screen 3.2, not this element). An implementing engineer who counts raw `.privacy` class usages will find 14, not 13, and may be uncertain whether the preview element is a PrivacyStatus component instance or an intentional one-off. | Amend the §10.12.3 leak-check to note: "13 `privacy()` component function calls — all self-view. Screen 3.6 additionally contains one inline `<div class="privacy pub">` (wireframe line 450) as a holder self-view preview of the future `pub` state; this is not a component instance and not a privacy leak, but the engineer MUST NOT implement it as a PrivacyStatus component call — it is a one-off static preview element." |
| ISS-05 | Low | T1, T5 | §10.12.3 — DES-094 normative binding clauses 1–5 | DES-094's five normative binding clauses explicitly cite FR-124(a)/(b)/(c)/(d)/(f) but do not explicitly cite FR-124(e) ("No retroactive linkage: no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits (FR-086 applies)"). FR-124(e) is primarily a data-retention and architectural-posture obligation rather than a component rendering obligation; the component's "no path available to any actor other than the authenticated holder" formulation in clause 3 partially captures it by implication. The binding is functionally adequate but the omission of the explicit (e) citation creates a gap in the component spec's FR-124 coverage that a test author will notice when writing absence-of-data tests. | Add an explicit reference to FR-124(e) in DES-094's binding, either as a sixth clause — "No retroactive linkage (FR-124(e)): the PrivacyStatus component MUST NOT write, emit, or trigger any log entry or export that associates the holder's rendered state with any persistent record accessible to any other actor; FR-086 applies" — or as a rider to clause 3, noting that the absence-from-logs obligation in FR-124(e) applies at the component output level. |

> **Low** issues (ISS-03, ISS-04, ISS-05) do not block the pass bar. **Medium** issues ISS-01 and ISS-02 each force FAIL.

---

## 5. Routing instruction (to the owning role)

**FAIL. Route to the owning role: architect (Ravi Deshmukh).**

The rework MUST address both medium issues (ISS-01 and ISS-02); addressing the low issues (ISS-03, ISS-04, ISS-05) in the same pass is strongly recommended to avoid a future low-severity accumulation. The rework MUST produce a new version with a bumped `Version:` semver and `Status: In Review`. The review loop then re-reviews at cycle 2.

**Minimum rework scope (medium issues):**
1. **ISS-01** — Correct the §10.12.1(b) SCR coverage summary: 16 of 23 covered, 7 with no wireframe (not 8/8).
2. **ISS-02** — Correct the Wireframe→SCR table row for screen 3.4: replace "None" with "SCR-14 (partial)"; update the coverage note; remove screen 3.4 from the design-debt class (i) register.

**Recommended rework scope (low issues):**
3. **ISS-03** — Correct changelog §18 entry count from four to three.
4. **ISS-04** — Add an explicit engineer note in the §10.12.3 leak-check table covering the 3.6 inline `.privacy.pub` preview div.
5. **ISS-05** — Add FR-124(e) explicit citation to DES-094's normative binding clauses.

---

## 6. Human decision at the cap (ESCALATED only)

*Not applicable — verdict is FAIL, cycle 1 of 5.*

---

## Appendix A — Independent leak-check results

Reviewer independently searched for every `privacy(` call in `design/wireframes/index.html`. Results:

| Line | Call | Screen | State | Context | Safe? |
|------|------|--------|-------|---------|-------|
| 225 | `privacy('anon')` | 1.2 Browse anonymously | anon | Authenticated holder, own session | Yes |
| 241 | `privacy('anon')` | 1.3 Verify — the offer | anon | Authenticated holder, own session | Yes |
| 256 | `privacy('anon')` | 1.4 Verify — on your device | anon | Authenticated holder, own session | Yes |
| 275 | `privacy('ver')` | 1.5 Verified | ver | Authenticated holder, own session | Yes |
| 289 | `privacy('ver')` | 1.6 Join a party | ver | Authenticated holder, own session | Yes |
| 307 | `privacy('ver')` | 2.1 Create a party — vision | ver | Authenticated holder, own session | Yes |
| 322 | `privacy('ver')` | 2.2 Create — constitution | ver | Authenticated holder, own session | Yes |
| 338 | `privacy('ver')` | 2.3 Petition — live onboarding | ver | Authenticated holder, own session | Yes |
| 360 | `privacy('ver')` | 3.1 Proposal lifecycle | ver | Authenticated holder, own session | Yes |
| 375 | `privacy('ver')` | 3.2 Candidate selection | ver | Authenticated holder, own session | Yes |
| 391 | `privacy('ver')` | 3.3 Cast a vote | ver | Authenticated holder, own session | Yes |
| 408 | `privacy('ver')` | 3.4 Vote confirmed | ver | Authenticated holder, own session | Yes |
| 443 | `privacy('ver')` | 3.6 The one-way door | ver | Authenticated holder, own session | Yes |

**Independent count: 13 `privacy()` function calls (3 anon + 10 ver). Zero `pub` state rendered via the function. All 13 are authenticated-holder self-view. PASS — no Supporter verified-status leak as-drawn.**

Additional finding not counted in the 13: wireframe line 450 (screen 3.6) contains `<div class="privacy pub">` as an inline holder self-view preview — not a component function call; not a privacy leak; noted as ISS-04.

Screens with no privacy pill: 1.1 Welcome (navy, unauthenticated — correct), 3.5 Accountability dashboard (navy, public surface — correct). No pill on public surfaces confirmed. ✓

---

## Appendix B — Token extraction verification

Reviewer verified all 16 colour tokens and 2 typeface tokens against the wireframe `:root` block (lines 11–19). Every hex value matches verbatim. Territory rule (navy/paper) verified against every `body.navy` and `body.paper` class in the wireframe:

- **Navy territory:** 1.1 Welcome (`body navy` ✓), 3.5 Accountability dashboard (`body navy` ✓)
- **Paper territory:** 1.2–1.6, 2.1–2.3, 3.1–3.4, 3.6 (all `body paper` ✓)

Token extraction and territory rule: **VERBATIM FAITHFUL — VERIFIED**.

---

## Appendix C — Author claims verified or refuted

| Claim | Source location | Reviewer finding |
|-------|----------------|-----------------|
| "13 instances, all self-view" | §10.12.3 leak-check | **VERIFIED** (for `privacy()` function calls) |
| "15 wireframe screens" | §10.12.1(b), §10.12.4 table header | **VERIFIED** (counted 15 in wireframe: 1.1–1.6, 2.1–2.3, 3.1–3.6) |
| "8 of the 23 SCRs with full or partial coverage" | §10.12.1(b) | **REFUTED** — table shows 16 of 23 covered (ISS-01) |
| "8 SCRs have no wireframe screen at all" | §10.12.1(b) | **REFUTED** — table shows 7 SCRs with no coverage (ISS-01) |
| Screen 3.4 "Vote confirmed" → "None" (no SCR) | §10.12.4 Wireframe→SCR table | **PARTIALLY REFUTED** — §10.12.4 SCR→Wireframe table shows SCR-14 → 3.4 (partial); these two tables contradict each other (ISS-02) |
| "§18 four new entries (C-01..C-04)" | Changelog | **REFUTED** — §18 contains C-01, C-02, C-03 only; C-04 deliberately excluded (ISS-03) |
| Leak-check PASS, no Supporter verified-status leak | §10.12.3 | **VERIFIED** |
| DES-093/094 are next free DES IDs | §10.12 | **VERIFIED** (previous highest: DES-092 at v2.1.0) |
| ADR-023 registered, preamble count 22→23 | §12 | **VERIFIED** |
| Q11–Q14 continuous from Q10 | §16 | **VERIFIED** |
| Referent correction (OI-19 = FR-125, not FR-124) | §10.12 source block, ADR-023 | **VERIFIED** (DECISIONS-2026-08-20-OI19-OI20.md confirms OI-19 = invite-gating = FR-125) |
| C-04 "9,000" confirmed no normative conflict with DES-010 endorsement floor | §10.12.6 C-04 | **VERIFIED** (DES-010: max(pct×pop, pct×verified, 500)) |
| No changes to §10.11 governance constants | Changelog | **VERIFIED** |
