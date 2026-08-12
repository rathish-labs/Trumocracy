# Document Review Report — 07 Test Cases & Suites v2.0.0

> Produced by the **document-review** skill. Reviewer: **architect** (Ravi Deshmukh — neutral;
> does not own Doc 07; the tester owns it). This report scores and lists issues only; it does
> not edit the document.

```
Reviewed document: 07-test-cases-suites.md
Document version:  2.0.0
Review mode:       technical
Reviewer role:     architect (neutral — tester is the document owner)
Score:             78%
Critical:          1
High:              2
Medium:            2
Low:               2
Cycle:             1 of 5
Verdict:           FAIL
```

---

## 1. Summary (BLUF)

Doc 07 v2.0.0 is reviewed here at cycle 1. The new TS-GOV2 suite (TC-3400..TC-3466, 67 cases)
is honest in all statuses — every case is correctly Blocked or No mechanism, no new case is marked
Pass, and the SC-15..SC-21 closure semantics (window lengths, state transitions, retroactivity,
denominator rule) are accurately stated. The 67-case count is confirmed, all source pins are
current (SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1), and the FR-074..FR-111 "No mechanism" rationale
is correctly anchored to Doc 03 §16 deliberate phasing.

The reason for FAIL is a **Critical traceability defect** in the Guarded Layer property tests
(TC-3456..TC-3464): all nine cases have wrong `Verifies` fields, citing FR-109/FR-110/FR-111
(transparency dashboard, performance scorecard, behavioural analytics) instead of FR-119
(three-tier amendment structure). This creates false coverage signals for transparency FRs and
contradicts the Doc 08 RTM, which correctly maps TC-3456..TC-3459 to FR-119. Two further High
misattributions exist: TC-3454 (SC-20 closure mapped to FR-109 instead of FR-119) and TC-3450
(SC-16 closure mapped to FR-118 instead of FR-119). Two Medium issues: TC-3400..TC-3466 sit
outside the Doc 04 §14 reserved range, and §10 exit summary still says "298 cases designed"
(stale since v1.1.0; suite table shows 368).

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`78%`)
- Critical = 0? **No (1)** · High = 0? **No (2)** · Medium = 0? **No (2)**
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 90 | 18.0 | All 47 new Must FRs, 2 Must NFRs, SC-15..SC-21, P1..P5, and FR-117 absence suite all have at least one TC. Minor deduction: wrong Verifies fields misrepresent which FRs are actually covered by the property tests |
| T2 Soundness | 20 | 93 | 18.6 | SC case semantics correct for SC-17 (60-day inaction + vacancy-immediate), SC-18 (ROTATION_ABORTED, no retroactive invalidation), SC-20 (snapshotRoot denominator). Minor deviation: TC-3456 P1 tests secondVote at 79% while SDD §14 specifies firstVote at 75% |
| T3 Traceability & IDs | 20 | 35 | 7.0 | **Critical:** TC-3456..TC-3464 (9 cases) all carry wrong FR/US. **High:** TC-3454 (FR-109 vs FR-119) and TC-3450 (FR-118 vs FR-119). These three groups create contradictory chains between Doc 07 and Doc 08 RTM |
| T4 Security & failure modes | 15 | 96 | 14.4 | All seven SC-15..SC-21 findings have dedicated closure cases. No case fabricates passing evidence. Honest "No mechanism" and "Blocked" vocabulary throughout |
| T5 Completeness & testability | 15 | 77 | 11.55 | §10 exit summary stale (298 vs 368); cross-document TC-total discrepancy (368 suite table vs Doc 08's 366 row anchors / 375 expanded) |
| T6 Convention compliance | 10 | 80 | 8.0 | Source pins correct; semver/Status/ISO-date compliant; no ID renumbered. Penalty: TC-3400..TC-3466 range not reserved in Doc 04 §14 |
| **Total** | **100** | — | **77.55% → 78%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location (section / TC) | Finding | Required fix |
|----|----------|-----------|--------------------------|---------|--------------|
| ISS-01 | **Critical** | T3 | §5 (`TS-GOV2`), TC-3456..TC-3464 (9 cases) | All nine Guarded Layer property tests carry wrong `Verifies` fields. TC-3456 (P1) says `US-0120 · FR-110 · DES-087`; TC-3457 (P2) says `US-0121 · FR-111 · DES-087`; TC-3458..TC-3464 (P3a, P3b, P4a, P4b, P4c, P5a, P5b) all say `US-0119 · FR-109 · DES-087`. FR-109 is the transparency dashboard, FR-110 is the performance scorecard, FR-111 is the behavioural-analytics prohibition — none of which governs the Guarded Layer two-vote super-process. The SDD §15 maps `DES-087` to FR-119 (three-tier amendment structure / US-0129). Doc 08 RTM correctly puts TC-3456..TC-3459 in the FR-119 row, contradicting the Verifies fields in Doc 07. TC-3460..TC-3464 appear in neither the FR-109 nor the FR-119 RTM rows (orphaned), because Doc 08 follows the wrong attribution from Doc 07. | Change all nine `Verifies` fields to `US-0129 · FR-119 · DES-087` (and `DES-091` where the test exercises GovernanceConstants constants directly). Coordinate with the tester (Doc 08 owner) to add TC-3460..TC-3464 to the FR-119 RTM row. |
| ISS-02 | **High** | T3 | §5 (`TS-GOV2`), TC-3454 | TC-3454 ([SC-20 closure]) states `Verifies: FR-109 · DES-087`. SC-20 tests that the Guarded Layer quorum denominator equals the enrolled-citizen count fixed at `proposeAmendment()` via `snapshotRoot` — a property of the Guarded Layer amendment mechanics (FR-119 / DES-087), not the public transparency dashboard (FR-109). Doc 08 RTM lists TC-3454 under the FR-109 row, inheriting this error. | Change to `Verifies: US-0129 · FR-119 · DES-087`. Coordinate with Doc 08 tester: move TC-3454 from the FR-109 row to the FR-119 row. |
| ISS-03 | **High** | T3 | §5 (`TS-GOV2`), TC-3450 | TC-3450 ([SC-16 closure]) states `Verifies: FR-118 · DES-091`. SC-16 is about GovernanceConstants having per-constant Amendment Layer classification, specifically protecting `STEWARD_INACTION_WINDOW` at the Guarded Layer bar — a property of the three-tier amendment structure (FR-119 / DES-091), not the entrenched-rule set (FR-118). Doc 08 RTM already correctly places TC-3450 in the FR-119 row, contradicting the `Verifies` field here. | Change to `Verifies: US-0129 · FR-119 · DES-091`. |
| ISS-04 | **Medium** | T6 | §2 suite table; TC-3400..TC-3466 | TC-3400..TC-3466 (67 IDs) are outside the Doc 04 §14 reserved range. Doc 04 §14 ends its range table at TC-3299 (TS-UAT: TC-3250–TC-3299). TS-CR1 (TC-3300..TC-3345, added v1.1.0) and TS-GOV2 (TC-3400..TC-3466, added v2.0.0) both reside in un-reserved space. Un-reserved TC IDs risk future numbering collisions and violate the master-plan convention. | Update Doc 04 §14 to add rows for `TS-CR1` (TC-3300..TC-3466 or per sub-suite) and `TS-GOV2` reserving TC-3300..TC-3466; OR migrate the TS-GOV2 cases into a previously reserved but under-used range. Coordinate with the Doc 04 owner (architect). |
| ISS-05 | **Medium** | T5 | §10 exit summary | §10 states "Cases designed: 298" and related counts (Blocked: 140, No mechanism: 10, Manual: 12). These figures were not updated when TS-CR1 (46 cases, v1.1.0/v1.1.2) and TS-GOV2 (67 cases, v2.0.0) were added. The suite table in §2 shows 368 total. The total under the expanded convention (as used in Doc 08 §6) is 375. Sub-counts are also internally inconsistent: 72+55+16+140+10+12 = 305, not 298. | Update §10 "Cases designed" to 368 (or 375 under the expanded convention, consistent with Doc 08 §6). Recalculate Blocked, No mechanism, Manual, and Not-run sub-counts to reflect all three drops (original + TS-CR1 + TS-GOV2). |
| ISS-06 | Low | T2 | §5 (`TS-GOV2`), TC-3456 (P1) | Doc 03 §14 specifies P1 as "firstVote cast at 75% approval — enact() MUST revert `SupermajorityNotMet`." TC-3456 tests "secondVote with 79% YES." The stage (firstVote vs secondVote) and the specific percentage differ. Both are valid failure scenarios, but the deviation from the SDD spec may leave firstVote supermajority enforcement untested. | Add a companion case for firstVote at a sub-80% value, or amend TC-3456 to match the SDD §14 spec (firstVote at 75%). Low priority — does not block the pass bar. |
| ISS-07 | Low | T5 | §2 suite table (footer) | The §2 suite table says total = 368. Doc 08 §6 says 366 row anchors expanding to 375 under the convention (TS-EXPL is 1 row anchor = 10 charters). Doc 07 counts TS-EXPL as 10 in the suite table. Neither counting is wrong, but the 375 figure is never stated in Doc 07 — only 368. This creates a minor confusion when comparing the two documents. | Add a TC-count convention note in §2 or §6 (similar to Doc 08 §6 note) explaining the 366 row anchors / 375 expanded total, so readers can reconcile the numbers. Low priority — does not block the pass bar. |

---

## 5. Routing instruction

**FAIL.** Route to the owning role: **Ji-woo Park (tester)**.

The tester MUST rework Doc 07 into a new version (bump `Version:` semver — Critical + High
issues mandate at least a minor bump; set `Status: In Review`) addressing the following before
re-review:

1. **ISS-01 (Critical):** Correct `Verifies` on all nine TC-3456..TC-3464 to `US-0129 · FR-119 ·
   DES-087` (add `DES-091` where applicable). Notify the Doc 08 tester: TC-3460..TC-3464 must be
   added to the FR-119 RTM row, and TC-3454 and TC-3450 must be moved to the FR-119 row.
2. **ISS-02 (High):** Correct TC-3454 `Verifies` to `US-0129 · FR-119 · DES-087`.
3. **ISS-03 (High):** Correct TC-3450 `Verifies` to `US-0129 · FR-119 · DES-091`.
4. **ISS-04 (Medium):** Coordinate with the architect (Doc 04 owner) to update Doc 04 §14, or
   obtain a documented rationale for the un-reserved range. Record the outcome in the Doc 07
   changelog.
5. **ISS-05 (Medium):** Update §10 exit summary counts.

ISS-06 and ISS-07 (Low) do not block the pass bar and may be addressed in the same rework cycle
or deferred to the next patch version.
