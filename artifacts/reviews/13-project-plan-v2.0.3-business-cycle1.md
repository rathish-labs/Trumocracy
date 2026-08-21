# Document Review — Doc 13 Project Plan v2.0.3 — Business Mode — Cycle 1

```
Reviewed document: docs/13-project-plan.md
Document version: 2.0.3
Review mode: business
Reviewer role: technical-writer
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 13 v2.0.3 applies the budget-appetite ruling of 2026-08-21 (Rathish) and cascades the stale
L2 lever figure to the corrected basis (≈ USD 4,025,000 / ≈ USD 175K audit-remediation
contingency). The document scores 97% with zero critical, high, or medium issues. **PASS.** Two
Low issues were found: a minor percentage rounding imprecision in §13.3 ("~4%" should be "~4.2%")
and an incompleteness in the §8.3 discrepancy paragraph, which surfaces the figure discrepancy and
requests magnitude confirmation but does not also note the pending Gate-2-date confirmation that the
DECISIONS record (§3.5) requests. Neither issue blocks the pass bar.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (97%)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both conditions met.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1 Outcome & problem clarity** | 20 | 95 | 19.0 | Exec banner correctly states both the three-pilot (~−245K, zero contingency) and L2-accepted (≈4.03M, 175K contingency) positions. Ruling surfaced, figure discrepancy noted. Minor: the Gate-2-date referent discrepancy is covered by the DECISIONS record (cited Source) but not surfaced in Doc 13's own text. |
| **B2 Completeness** | 15 | 93 | 14.0 | All required v2.0.3 changes applied: exec banner updated, §8.3 cascade correction with contingency paragraph, RISK-18 budget-cover addition, RISK-19 L2-basis update, §13.3 L2 row correction, §11 re-plan log entry. Minor: "~4%" in §13.3 L2 row is a rounding imprecision (correct is ~4.2%). |
| **B3 Traceability & IDs** | 20 | 100 | 20.0 | All ADR/CON/RISK/FR/NFR IDs correct and unchanged. DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md correctly cited as Source. B-01 lever acceptance and GATE1-DECISION-2026-08-09.md §5 cross-references in §8.3 and §13.3 correct. RISK-18 ↔ RISK-19 ↔ §8.3 cross-references all correct. |
| **B4 Correctness & consistency** | 15 | 93 | 14.0 | Core arithmetic correct throughout: 4,445,000 − 420,000 = 4,025,000 ✓; 4,200,000 − 4,025,000 = 175,000 ✓. §8.3 three-pilot table unchanged at Total 4,445,000 / Appetite 4,200,000 / Variance ~−245,000 ✓. Zero normative instances of stale "≈ USD 4.13M / ~1.7%": all three occurrences are in correction-footnote or changelog contexts ✓. No date changes: MS-08 = 2027-01-25, MS-13 = 2027-05-14, §3.4 dates unchanged ✓. "~4%" vs "~4.2%" is the sole consistency imprecision. |
| **B5 Testability** | 15 | 100 | 15.0 | KC-P2 trigger unchanged and evidence-based (ADR-022 assurance criteria: fewer than 5 independent institutions, or contributor independence unconfirmable from published attestations). All kill criteria and plan-stop conditions intact and non-vacuous. |
| **B6 Convention compliance** | 15 | 100 | 15.0 | Header: v2.0.3 / In Review / 2026-08-21 ✓. Source: DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md (Ruling 1) added ✓. §11 re-plan log: v2.0.3 entry at top with date, all change descriptions, and all source citations ✓. Historical records (stale figures in correction footnotes and changelog) not rewritten ✓. Named owners, RFC 2119, ISO-8601 dates throughout ✓. |
| **Total** | **100** | — | **97%** | — |

---

## 4. Specific checks (as briefed)

### 4.1 Arithmetic

| Check | Expected | Found | Status |
|-------|----------|-------|--------|
| L2 lever cost | 4,445,000 − 420,000 = 4,025,000 | ≈ USD 4,025,000 (§8.3 single-pilot lever paragraph) | ✓ |
| Savings breakdown | 140k + 160k + 80k + 40k = 420k | Stated identically in §8.3 | ✓ |
| Headroom vs appetite | 4,200,000 − 4,025,000 = 175,000 | ≈ USD 175,000 / ≈ USD 175K in all normative locations | ✓ |
| Contingency % | ~4.2% of appetite (175k/4200k = 4.17%) | "~4%" in §13.3 L2 row; no % stated in exec banner or §8.3 | **ISS-01 (Low)** |
| §8.3 three-pilot table | Total 4,445,000 / Appetite 4,200,000 / Variance ~−245,000 | Unchanged | ✓ |

### 4.2 Cascade completeness — stale "≈ USD 4.13M / ~1.7% contingency"

Three occurrences of "4.13M" found in the document:

1. **§8.3 single-pilot lever paragraph** (parenthetical correction footnote): "the prior figure '≈ USD 4.13M with ~1.7% contingency' was computed off the pre-correction three-pilot total of USD 4,550,000" — legitimate correction note identifying the stale figure. ✓
2. **§13.3 L2 row** (correction footnote): "corrected from '≈ USD 4.13M, ~1.7%' which was computed off the pre-correction 4.55M total" — legitimate correction note. ✓
3. **§11 re-plan log v2.0.3 entry**: "'≈ USD 4.13M with ~1.7% contingency' in §8.3 and §13.3 L2 row was computed off the pre-correction 4.55M total; corrected to ≈ USD 4,025,000 / ≈ USD 175K contingency" — legitimate changelog. ✓

**Zero normative instances of the stale figures.** All normative locations state ≈ USD 4,025,000 / ≈ USD 175K / ≈ USD 4.03M consistently.

### 4.3 No silent reconciliation

**Figures discrepancy (approver's ~$3.836M / ~$294K):** Surfaced in §8.3 "Discrepancy to surface" paragraph and in §11 re-plan log discrepancy note. Approver magnitude confirmation explicitly requested. ✓

**Gate-2-date referent discrepancy (ruling cited "Gate 2 date move to 2027-03-15"):** Covered comprehensively in the DECISIONS record §3.5 (cited as Source in the document header). The §8.3 "Discrepancy to surface" paragraph requests magnitude confirmation but does not also request Gate-2-date referent confirmation. The DECISIONS record (§3.5) states: "The approver's confirmation that 2027-05-14 (not 2027-03-15) is the intended Gate-2 referent is requested." Doc 13 itself does not surface this specific pending confirmation in its own text. **ISS-02 (Low).** See §4 Issues table.

The document does NOT pretend the approver's cited figures are the record's — record-derived figures are explicitly applied and the discrepancy is prominently called out. This is not a High condition.

### 4.4 No date changes

| Milestone | Expected | Found | Status |
|-----------|----------|-------|--------|
| MS-08 (batched ceremony) | 2027-01-25 | 2027-01-25 (line 150) | ✓ |
| MS-13 / Gate 2 | 2027-05-14 | 2027-05-14 (lines 155, 183, 244, 265, 664) | ✓ |
| Audit remediation start | 2027-03-15 | 2027-03-15 (§3.4 critical path + long-lead table) | ✓ |
| All other §3.4 dates | Unchanged | Verified across critical path diagram and long-lead table | ✓ |

### 4.5 Appetite unchanged at USD 4.2M

CON-007 appetite holds at USD 4,200,000 throughout. §8.3 "Appetite (CON-007)" row = 4,200,000. ✓

### 4.6 Contingency line explicit

Named "audit-remediation contingency" (§8.3, RISK-18, RISK-19, §13.3). Approver's rationale recorded verbatim in §8.3 contingency paragraph. ✓

### 4.7 Risk register

| Check | Status |
|-------|--------|
| RISK-18 updated: budget cover added | ✓ — "the ≈ USD 175K audit-remediation contingency line... now provides explicit budget cover for the re-audit / re-ceremony event — previously the contingency was schedule-only" |
| RISK-18 cross-references §8.3 and RISK-19 | ✓ |
| RISK-19 updated: accepted-L2 basis within appetite | ✓ — "On the accepted L2 basis (B-01, 2026-08-09) the corrected cost is ≈ USD 4,025,000, within the USD 4.2M appetite" |
| RISK-19 residual exposures stated | ✓ — (1) three-pilot basis ~−245K if pilot-count reversed; (2) A-PLAN-01 ±0.30M sensitivity exceeds ≈175K contingency |
| RISK-19 cross-references §8.3 and RISK-18 | ✓ |
| No other risk rows touched | ✓ — §11 v2.0.3 entry names only RISK-18 and RISK-19; all other rows verified unchanged |

### 4.8 Version / status discipline

- Header: Version 2.0.3 ✓, Status: In Review ✓, Last updated: 2026-08-21 ✓
- Source: DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md (Ruling 1 — budget appetite) added ✓
- §11 re-plan log: v2.0.3 entry present, first row, dated 2026-08-21, with full change description and source citations ✓

### 4.9 Endorsement-floor constants and UT-05xx IDs

These do not appear in Doc 13 and were not touched. ✓ (Consistent with prior cycle 3 verification.)

---

## 5. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Low | B4 Correctness | §13.3 L2 row | "≈ USD 175K (~4%) banked as an explicit audit-remediation contingency" — the percentage expression is "~4%" but 175,000 / 4,200,000 = 4.17%, which rounds to ~4.2%, not ~4%. The correct figure (≈ USD 175K) is stated accurately throughout; only this single percentage expression is imprecise. The exec banner and §8.3 contingency paragraph omit the percentage entirely (correct), avoiding the error in those locations. | Change "~4%" to "~4.2%" in the §13.3 L2 row. |
| ISS-02 | Low | B1 Outcome & clarity | §8.3 "Discrepancy to surface" paragraph; §11 re-plan log discrepancy note | The §8.3 discrepancy paragraph surfaces the figure discrepancy (~$3.836M / ~$294K vs record-derived ≈4,025K / ≈175K) and requests approver magnitude confirmation. It does not also note that the ruling's reference to a "Gate 2 date move to 2027-03-15" has no referent in the repository (Gate 2 = MS-13 = 2027-05-14, unchanged; 2027-03-15 is audit-remediation start per §3.4), and therefore does not request the corresponding Gate-2-date referent confirmation. The DECISIONS record §3.5 covers this fully and is cited as Source. A reader of Doc 13 alone would miss the pending Gate-2-date confirmation request. | Extend the §8.3 "Discrepancy to surface" paragraph to add: the ruling cited "Gate 2 date move to 2027-03-15"; this has no referent (Gate 2 = MS-13 = 2027-05-14, unchanged; 2027-03-15 is the audit-remediation start per §3.4); approver confirmation that 2027-05-14 is the intended Gate-2 referent is pending (see DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.5). |

> **Low issues do not block the pass bar.** Zero critical/high/medium were found.

---

## 6. Prior-strength verification (spot-check)

| Check | Status |
|-------|--------|
| §8.3 three-pilot table: Total 4,445,000 / Appetite 4,200,000 / Variance ~−245,000 / zero contingency | ✓ Unchanged |
| KC-P2 non-vacuous trigger (ADR-022 assurance terms: 5 distinct independent institutions) | ✓ Unchanged from v2.0.2 |
| Gate-2 (MS-13) 2027-05-14 | ✓ Unchanged from v2.0.2 |
| MS-08 2027-01-25 (ceremonies off critical path) | ✓ Unchanged from v2.0.2 |
| Exec banner three-pilot position (~245K shortfall, zero contingency) | ✓ Unchanged from v2.0.2 |
| RISK-01..RISK-17 and RISK-20..RISK-21 content | ✓ Unchanged |
| §13.1 Gate-1 readiness rows (all entries) | ✓ Unchanged from v2.0.2 |
| §13.2 OI-01..OI-05 | ✓ Unchanged |
| §13.4 E-01 / E-02 governance exceptions | ✓ Unchanged |
| Gate-2 line items 11/12/13 (CON-015 / Doc 04 / RTM catch-up) | ✓ Unchanged |
| §11 re-plan log — v2.0.0, v2.0.1, v2.0.2 entries | ✓ Present and unaltered |
| Named owners throughout | ✓ Unchanged |
| Endorsement-floor constants and UT-05xx IDs | ✓ Not in Doc 13 — not touched |

---

## 7. Routing

**PASS — no rework required for this cycle.**

The project-manager (Ana-Maria Petrescu) may set `Status: Approved` on Doc 13 v2.0.3. The SOP may advance.

Optional housekeeping for v2.0.4 (neither issue blocks Gate 1 or any SOP step):

1. Fix ISS-01: change "~4%" → "~4.2%" in §13.3 L2 row.
2. Fix ISS-02: extend §8.3 "Discrepancy to surface" paragraph to note the Gate-2-date referent discrepancy and request the corresponding approver confirmation.

If the PM elects to produce v2.0.4 to close these Lows, a new review cycle (cycle 2 of 5) would be required. Given both are Low-only and the pass bar is already met at cycle 1, the recommended path is to proceed on v2.0.3 and fold both fixes into the next substantive re-plan if any.

The §13.1 document-review readiness row cites v2.0.2 PASS 100% for Doc 13. The PM should update that row to reference v2.0.3 PASS 97% (this report) after setting `Status: Approved`.

---

*Reviewed by: technical-writer (Nadia Hassan — acting as neutral reviewer, document-review skill)*
*Reviewer does not own Doc 13. The project-manager (Ana-Maria Petrescu) owns Doc 13.*
*Date: 2026-08-21*
*Cycle: 1 of 5 — PASS*
