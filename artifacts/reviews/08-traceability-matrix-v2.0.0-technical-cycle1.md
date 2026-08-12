# Document Review Report — 08 Traceability Matrix v2.0.0

> Produced by the **document-review** skill. Reviewer: **architect** (Ravi Deshmukh — neutral;
> does not own Doc 08; the tester owns it). This report scores and lists issues only; it does
> not edit the document.

```
Reviewed document: 08-traceability-matrix.md
Document version:  2.0.0
Review mode:       technical
Reviewer role:     architect (neutral — tester is the document owner)
Score:             87%
Critical:          1
High:              1
Medium:            2
Low:               1
Cycle:             1 of 5
Verdict:           FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.0.0 is reviewed here at cycle 1. The structural additions for v2.0.0 are sound:
49 new Must rows (47 FR + 2 NFR), SUMMARY arithmetic verified (125/12/113, 9.6%), gap-by-reason
counts confirmed (G-TRACE=39=1+38, G-PHASE3=36=25+11), §7 gap-log entry count reaches 113, DES
cells for FR-112..FR-120 match SDD §15 exactly, supersession annotations for FR-062 (→FR-082..
FR-086) and FR-046 (→FR-094/FR-095) are accurate, source pins are current (SRS v2.2.0, SDD v2.1.1,
BKLG v2.0.1, CODE v1.0.0, MTP v1.0.0, TC v2.0.0), no existing ID is renumbered, and the NFR-007
double-count annotation (114-vs-113 by-reason total) is correctly explained and acceptable.

The reason for FAIL is a **Critical traceability defect**: five Guarded Layer property-test TCs
(TC-3460..TC-3464, P4a/P4b/P4c/P5a/P5b) exist in Doc 07 but are not cited in the FR-119 row or
any other Must FR row, leaving them orphaned in the RTM. One High defect: TC-3454 ([SC-20 closure])
appears in the FR-109 row but the test verifies a Guarded Layer quorum-denominator property that
belongs to FR-119. Two Medium defects: the §9 gate-verdict table retains pre-v2.0.0 figures
(76 Must rows / 12 complete / 64 open, not updated for the 49 new rows), and the §6 passing-TC
count (148 = 104 inh. + 44 obs.) is inconsistent with Doc 07 §2's stated count (127 = 72 obs. +
55 inh.).

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`87%`)
- Critical = 0? **No (1)** · High = 0? **No (1)** · Medium = 0? **No (2)**
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | 49 new Must rows cover all FR-074..FR-120 + NFR-027/028. Gap codes correctly justified. Supersession annotations accurate. Minor deduction: FR-119 row appears to cover fewer property tests than it should because 5 TCs are orphaned |
| T2 Soundness | 20 | 97 | 19.4 | G-TRACE=39 (1+38), G-PHASE3=36 (25+11), OPEN=113, COMPLETE=12, total=125 all verified correct. NFR-007 double-count annotation (114 vs 113) is transparent and correctly stated. Chain-integrity findings section accurately reflects known gaps |
| T3 Traceability & IDs | 20 | 60 | 12.0 | **Critical:** TC-3460..TC-3464 orphaned (exist in Doc 07, not in FR-119 or any Must FR row). **High:** TC-3454 in FR-109 row incorrectly. **Medium:** §6 passing-TC count (148) contradicts Doc 07 §2 (127) with no reconciliation note |
| T4 Security & failure modes | 15 | 96 | 14.4 | All SC-15..SC-21 TCs cited under appropriate FR rows. Risk table complete. No passing evidence fabricated |
| T5 Completeness & testability | 15 | 80 | 12.0 | §9 gate verdict table not updated for v2.0.0 (shows 76/12/64, should be 125/12/113). Stale "There are 54" sentence at end of §9 |
| T6 Convention compliance | 10 | 95 | 9.5 | Source pins complete (TC v2.0.0 added). Semver/Status/ISO-date compliant. No ID renumbered |
| **Total** | **100** | — | **86.7% → 87%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location (section / row) | Finding | Required fix |
|----|----------|-----------|--------------------------|---------|--------------|
| ISS-01 | **Critical** | T3 | §3.1, FR-119 row | TC-3460, TC-3461, TC-3462, TC-3463, TC-3464 (Guarded Layer property tests P4a, P4b, P4c, P5a, P5b) exist in Doc 07 §5 (`TS-GOV2`) and belong to the FR-119 coverage group (Guarded Layer super-process, DES-087), but they do not appear in the FR-119 row here, nor in any other Must-FR row. The root cause is that Doc 07's `Verifies` fields for these TCs incorrectly cite FR-109 (transparency dashboard); the Doc 08 author correctly put TC-3456..TC-3459 in the FR-119 row but stopped there, omitting TC-3460..TC-3464. The result is five test cases with no RTM home — a broken backward chain. | Add TC-3460, TC-3461, TC-3462, TC-3463, TC-3464 to the FR-119 row's TC column. Coordinate with Doc 07 tester (ISS-01 in the companion Doc 07 report) to also correct the `Verifies` fields in those TCs; both documents must be fixed in the same rework cycle so the chains align. |
| ISS-02 | **High** | T3 | §3.1, FR-109 row | TC-3454 ([SC-20 closure]) is cited in the FR-109 row (public transparency dashboard). SC-20's closure test verifies that the Guarded Layer quorum denominator equals the enrolled-citizen count fixed at `proposeAmendment()` via `snapshotRoot` — this is a Guarded Layer amendment-mechanics property (FR-119 / DES-087), not a transparency-dashboard property (FR-109 / DES: none). TC-3454 creates false coverage of FR-109 and genuine under-coverage of FR-119. | Remove TC-3454 from the FR-109 TC column. Add TC-3454 to the FR-119 TC column. Coordinate with Doc 07 tester (ISS-02 in the companion Doc 07 report) to correct TC-3454's `Verifies` field. |
| ISS-03 | **Medium** | T5 | §9 gate verdict table | The §9 gate verdict table still shows pre-v2.0.0 figures: "Must rows with a complete chain: 76 / 76 · Open Must rows: 64 — FAIL." The SUMMARY (§0.1 or equivalent) and §7 gap log correctly reflect the v2.0.0 state: 125 Must rows, 12 complete, 113 open. The §9 table was not updated when 49 new Must rows were added. A Gate-2 reviewer reading §9 would see counts that are 49 rows lower than reality. Additionally, the text at the very end of §9 reads "There are 54. The gate stays shut." — a stale sentence from v1.0.0 (pre-v1.1.0 additions). | Update §9 gate verdict table row values to: "Must rows with a complete chain: 12 / 125 · Open Must rows: 113 — FAIL." Update the trailing sentence to "There are 113 open Must rows. The gate stays shut." |
| ISS-04 | **Medium** | T3 | §6 coverage dashboard, "Test cases" row | The "Test cases" row in §6 claims "148 with passing evidence (104 inh. · 44 obs.)" but Doc 07 §2 footer explicitly states "72 were executed and observed passing by the tester this session; 55 are inherited-green contract cases," giving 127 with passing evidence. The discrepancy is 21 cases (148 − 127) and is not explained by any counting-convention note in either document. This inconsistency leaves the true passing-evidence count ambiguous for Gate-2 sign-off. | Reconcile the passing-evidence count between Doc 07 §2 and Doc 08 §6. State the authoritative figure and add a brief note explaining how it was derived if the two documents apply different conventions. |
| ISS-05 | Low | T5 | §9, final sentence | "There are 54. The gate stays shut." — the count 54 predates both the v1.1.0 (12 stories completed) and v2.0.0 additions and is therefore doubly stale. This is subsumed by the ISS-03 fix but noted separately for completeness. | Addressed by ISS-03 fix. No separate action needed beyond ISS-03. |

---

## 5. Arithmetic validation (informational — all pass)

| Claim | Computed | Match |
|-------|----------|-------|
| Must rows = 125 (101 FR + 24 NFR) | (54 pre-v2.0.0 FR + 47 v2.0.0 FR) + (22 pre + 2 new) NFR = 101+24 = 125 | ✓ |
| COMPLETE = 12 | FR-011, FR-016, FR-020, FR-021, FR-022, FR-024, FR-025, FR-026, FR-027, FR-028, FR-035, FR-051 | ✓ |
| OPEN = 113 | 125 − 12 | ✓ |
| Completion rate 9.6% | 12 / 125 = 0.096 | ✓ |
| G-TRACE = 39 | NFR-007 (1) + FR-074..FR-111 (38) | ✓ |
| G-PHASE3 = 36 | 25 pre-v2.0.0 + 11 v2.0.0 (FR-112..FR-120 + NFR-027/028) | ✓ |
| By-reason total 114 | 36+10+9+5+6+4+5+39 = 114; exceeds 113 by 1 because NFR-007 holds both G-NOENV and G-TRACE; correctly annotated | ✓ |
| §7 gap-log entries | 113 (verified entries 1–113) | ✓ |
| §6 BR = 21 | BR-001..BR-021 in Doc 02 | ✓ |
| §6 stories = 130 | US-0001..US-0083 (83) + US-0084..US-0130 (47) | ✓ |
| §6 TC = 375 (expanded) | 366 row anchors − 1 (TS-EXPL anchor) + 10 (charters) = 375 | ✓ |
| DES cells FR-112..FR-120 | Match SDD §15 exactly (DES-090, DES-090, DES-088, DES-089, DES-089, DES-089, DES-087, DES-087+DES-091, DES-034) | ✓ |

---

## 6. Routing instruction

**FAIL.** Route to the owning role: **Ji-woo Park (tester)**.

The tester MUST rework Doc 08 into a new version (bump `Version:` semver — Critical + High issues
mandate at least a minor bump; set `Status: In Review`) addressing the following before re-review:

1. **ISS-01 (Critical):** Add TC-3460..TC-3464 to the FR-119 TC column. This fix must be
   co-ordinated with the Doc 07 rework (ISS-01 in the Doc 07 cycle-1 report) so that the
   corrected `Verifies` fields in Doc 07 align with the corrected RTM rows here. Both documents
   must reach their next version in the same rework cycle.
2. **ISS-02 (High):** Move TC-3454 from the FR-109 TC column to the FR-119 TC column.
   Coordinate with the Doc 07 rework (ISS-02 in the Doc 07 cycle-1 report).
3. **ISS-03 (Medium):** Update §9 gate verdict table to reflect v2.0.0 totals (125/12/113).
   Fix the trailing stale sentence (ISS-05 is subsumed here).
4. **ISS-04 (Medium):** Reconcile the passing-evidence TC count with Doc 07 §2 and add a
   convention note if the counts reflect different methodologies.

ISS-05 (Low) is resolved by ISS-03 and requires no separate action.
