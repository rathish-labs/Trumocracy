# Document Review Report — 07 Test Cases & Suites v2.0.1

> Produced by the **document-review** skill. Reviewer: **architect** (Ravi Deshmukh — neutral;
> does not own Doc 07; the tester owns it). This report scores and lists issues only; it does
> not edit the document.

```
Reviewed document: 07-test-cases-suites.md
Document version:  2.0.1
Review mode:       technical
Reviewer role:     architect (neutral — tester is the document owner)
Score:             98%
Critical:          0
High:              0
Medium:            0
Low:               1
Cycle:             2 of 5
Verdict:           PASS
```

---

## 1. Summary (BLUF)

Doc 07 v2.0.1 addresses all seven issues from the cycle-1 FAIL report. The root-cause
Critical defect (nine Guarded Layer property tests pointing to the wrong FRs) is fully
resolved, and both High defects (TC-3454 and TC-3450 wrong Verifies) are corrected. Both
Medium issues (Doc 04 §14 TC-range legality, §10 exit-summary stale count) are addressed. Both
Low issues (P1 spec alignment, §2 convention note) are fixed.

One pre-existing Low issue surfaces in cycle 2: the §10 breakdown sub-totals sum to 372, not
to the stated total of 368. This is a four-case arithmetic gap carried forward from the
pre-v2.0.0 version of §10 that the ISS-05 fix did not fully eliminate. Per CLAUDE.md, Low
issues do not block the pass bar.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes (98%)**
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | All FRs covered. FR-109/FR-110/FR-111 retain their own TCs (TC-3435/3436/3437). Guarded Layer tests correctly credited to FR-119 |
| T2 Soundness | 20 | 99 | 19.8 | SC semantics verified correct. TC-3456 P1 now tests firstVote at 75% per SDD §14 spec. Minor deduction: §10 arithmetic inconsistency (see ISS-01 Low) |
| T3 Traceability & IDs | 20 | 99 | 19.8 | All nine TC-3456..TC-3464 Verifies corrected to US-0129 · FR-119 · DES-087[/DES-091]. TC-3454 → FR-119. TC-3450 → FR-119. Context paragraph for TC-3456..TC-3464 updated to reference FR-119 |
| T4 Security & failure modes | 15 | 100 | 15.0 | SC-15..SC-21 semantics unchanged and correct. No case fabricates passing evidence. All TS-GOV2 cases Blocked or No mechanism |
| T5 Completeness & testability | 15 | 98 | 14.7 | §10 updated (368 total; Blocked 169; No mechanism 48; Manual 12). Convention note added to §2. One Low issue: breakdown sums to 372, not 368 |
| T6 Convention compliance | 10 | 100 | 10.0 | Source pin MTP-TRUMOCRACY v1.0.1 ✓. Doc 04 §14 now contains TS-CR1 (TC-3300–TC-3399) and TS-GOV2 (TC-3400–TC-3499) reservation rows confirmed at source. Semver/Status/date compliant. No ID renumbered |
| **Total** | **100** | — | **99.3% → 98%** | — |

---

## 4. Cycle-1 fix verification (confirmed resolved)

| Cycle-1 issue | Fix required | Fix applied? |
|---------------|-------------|--------------|
| ISS-01 Critical: TC-3456..TC-3464 wrong Verifies (FR-109..FR-111/US-0119..US-0121) | Correct to US-0129 · FR-119 · DES-087[/DES-091] | **Yes** — all nine property tests now say US-0129 · FR-119 · DES-087 (DES-091 where GovernanceConstants exercised, e.g. TC-3456 and TC-3464) |
| ISS-02 High: TC-3454 Verifies FR-109 | Correct to US-0129 · FR-119 · DES-087 | **Yes** |
| ISS-03 High: TC-3450 Verifies FR-118 | Correct to US-0129 · FR-119 · DES-091 | **Yes** |
| ISS-04 Medium: TC-3400..TC-3466 outside Doc 04 §14 reserved range | Coordinate with architect to update Doc 04 §14; record outcome in Doc 07 changelog | **Yes** — Doc 04 at v1.0.1 with TS-CR1 (TC-3300–TC-3399) and TS-GOV2 (TC-3400–TC-3499) rows confirmed in §14 table; retroactive-reservation note present; Doc 07 source pin updated to MTP v1.0.1 |
| ISS-05 Medium: §10 "Cases designed: 298" stale | Update §10 counts for all three drops | **Yes (partial)** — total updated to 368; Blocked 140→169; No mechanism 10→48. One residual arithmetic inconsistency remains (Low; see ISS-01 below) |
| ISS-06 Low: TC-3456 P1 tests secondVote at 79% vs SDD §14 firstVote at 75% | Amend to test firstVote at 75% | **Yes** — TC-3456 title now reads "firstVote closed with 75% YES (below 80% Tier-2 supermajority bar)" |
| ISS-07 Low: No expanded-count convention note in §2 | Add convention note reconciling 368 (anchor) vs 375 (expanded) | **Yes** — TC-count conventions note added to §2 footer |

Context paragraph for TC-3456..TC-3464 was also corrected from the erroneous FR-109..FR-111
reference to "FR-119, DES-087, DES-091." ✓

---

## 5. Regression check (key controls)

| Control | Verified |
|---------|----------|
| FR-109 covered by TC-3435 (US-0119 · FR-109) — no bleed from property tests | ✓ |
| FR-110 covered by TC-3436 (US-0120 · FR-110) — TC-3456 no longer in FR-110 territory | ✓ |
| FR-111 covered by TC-3437 (US-0121 · FR-111) | ✓ |
| SC closure semantics: TC-3449..TC-3455 unchanged and correct | ✓ |
| TC-3444 (GovernanceConstants `onlyGovernor`) still US-0128 · FR-118 · DES-087 — unchanged from v2.0.0, not in scope for this cycle | ✓ |
| All 67 TS-GOV2 cases still Blocked or No mechanism — no fabricated passing evidence | ✓ |
| Doc 07 source pins: MTP v1.0.1, SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1 all present | ✓ |

---

## 6. Issues

| ID | Severity | Criterion | Location | Finding |
|----|----------|-----------|----------|---------|
| ISS-01 | Low | T5 | §10 exit summary, breakdown sub-totals | The §10 category breakdown sums to 372, not the stated total of 368. Arithmetic: 72 (obs.) + 55 (inh.) + 16 (not run) + 169 (Blocked) + 48 (No mechanism) + 12 (Manual — not run) = 372. The four-case gap is a pre-existing inconsistency from the v1.x line: 4 cases appear to be automated (counted in the 143-automated suite-table column) AND Blocked (counted in the §10 "169 Blocked" row), so they are double-counted when the §10 sub-totals are summed against the 368 anchor-count total. The ISS-05 fix correctly updated the stale counts but did not resolve the underlying double-count. Per CLAUDE.md, Low issues are allowed and do not block the pass bar. |

---

## 7. Routing instruction

**PASS.** No further rework cycle is required for Doc 07 v2.0.1. The document owner (Ji-woo
Park) should update the `Status:` field from `In Review` to `Approved` and commit the
final version. ISS-01 (Low) may be addressed in a future patch (clarify the §10 breakdown
footnote to explain the 4-case double-count), but it does not block advancement.
