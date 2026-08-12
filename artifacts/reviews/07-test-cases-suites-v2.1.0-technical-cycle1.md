# Document Review Report — 07 Test Cases & Suites v2.1.0

> Produced by the **document-review** skill. Reviewer: **architect** (Ravi Deshmukh — neutral;
> does not own Doc 07; the tester owns it). This report scores and lists issues only; it does
> not edit the document.

```
Reviewed document: 07-test-cases-suites.md
Document version:  2.1.0
Review mode:       technical
Reviewer role:     architect (neutral — tester is the document owner)
Score:             99%
Critical:          0
High:              0
Medium:            0
Low:               1
Cycle:             1 of 5
Verdict:           PASS
```

---

## 1. Summary (BLUF)

Doc 07 v2.1.0 correctly applies five targeted changes requested after the 2026-08-11 ADR-019
amendment and security-rescan: TC-3451 and TC-3453 are amended to use the seated-but-inactive
precondition for the steward-inaction window; TC-3467 and TC-3468 are minted as vacancy-immediate
cases for publishAuditRef() and issuer-onboarding coordination respectively; TC-3469 is minted
for the SC-16 anti-circularity direct attack. The prior cycle-2 Low defect (§10 breakdown
double-count not explained) is resolved: §10 now states 371 total with an explicit 4-case
overlap convention ("143 + 168 Blocked-only + 48 + 12 = 371"). All new and amended cases
correctly cite FR-117, FR-119, DES-087, DES-091, and DES-092 as specified by the rescan.
No regressions were found in any unchanged TS-GOV2 case or suite-table entry.

One Low issue is raised: the §2 convention note says "A 2-row counting difference between the
two documents" but the consistent apples-to-apples comparison (Doc 07 expanded 371 vs Doc 08
expanded 378) gives 7, the same 7-case gap that existed at v2.0.1 (375 − 368) and that the
cycle-2 ISS-07 fix was written to reconcile. The note computes "2" by comparing inconsistent
measures. All individual numbers are correct; only the descriptive label is imprecise. Per
CLAUDE.md, a Low issue does not block the pass bar.

**Verdict: PASS.**

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes (99%)**
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | TC-3467/3468 correctly attributed to FR-117 (vacancy-immediate under DES-092); TC-3469 correctly attributed to FR-119 (anti-circularity under DES-091 + DES-087). FR-109/FR-110/FR-111 rows unchanged and correct |
| T2 Soundness | 20 | 100 | 20.0 | TC-3451/3453 amended preconditions match the rescan definitions of steward-inaction (stewards seated, inactive within STEWARD_INACTION_WINDOW). TC-3467/3468 correctly specify zero-delay on vacancy (StewardRegistry.registeredStewardCount() == 0). TC-3469 correctly specifies Open Layer vote (60%/15%) calling Guarded Layer constants setter, reverting at onlyGovernor/permittedActionClass classification check. All semantics verified against SECURITY-RESCAN-SC15-21-2026-08-11.md and ADR-019 amendment |
| T3 Traceability & IDs | 20 | 100 | 20.0 | TC-3467..TC-3469 within TS-GOV2 reservation TC-3400..TC-3499 (Doc 04 §14 v1.0.1). No ID reused or renumbered. All new TCs carry US, FR, and DES trace references. TS-GOV2 row in §2 updated to TC-3400–TC-3469 / 70 cases. §5.1 heading range updated to TC-3400–TC-3469 |
| T4 Security & failure modes | 15 | 100 | 15.0 | SC-17 re-attack #1 (seated-but-inactive inaction window): TC-3451 amended. SC-17 re-attack #2 (vacancy-immediate publishAuditRef): TC-3467 minted. SC-19 re-attack (seated-but-inactive issuer-onboarding): TC-3453 amended. SC-19 vacancy-immediate: TC-3468 minted. SC-16 anti-circularity direct attack: TC-3469 minted. All new/amended cases Blocked — Phase 3; no fabricated passing evidence |
| T5 Completeness & testability | 15 | 100 | 15.0 | §10 arithmetic fixed from v2.0.1 ISS-01 Low: total now 371; Blocked 172; explicit "143 + 168 Blocked-only + 48 + 12 = 371" overlap convention. §2 suite table consistent: 371/143/228. §10 "Blocked-only" breakdown 140 pre-TS-GOV2 + 32 TS-GOV2 = 172 verified. TS-GOV2 No mechanism 38 + 10 pre-GOV2 = 48 verified |
| T6 Convention compliance | 10 | 96 | 9.6 | Semver 2.1.0, Status: In Review, ISO date 2026-08-12. Source pins unchanged (MTP v1.0.1, SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1) — all correct. Changelog newest-first for v2.1.0 entry. Minor deduction: §2 convention note "2-row counting difference" claim is imprecise (see ISS-01) |
| **Total** | **100** | — | **99.6% → 99%** | — |

---

## 4. v2.0.1 → v2.1.0 Change Verification

| Change | Claimed | Verified |
|--------|---------|----------|
| TC-3451 amended — seated-but-inactive precondition for publishAuditRef(); revokeTrustAnchor vacancy-immediate sub-assertion preserved | SC-17 re-attack #1 closure | **Yes** — title/precondition correctly requires "at least one steward registered in StewardRegistry but none having acted within STEWARD_INACTION_WINDOW"; distinct from vacancy (zero registered stewards) |
| TC-3453 amended — seated-but-inactive precondition for issuer-onboarding coordination | SC-19 re-attack closure | **Yes** — "stewards present, not absent"; corrects the prior conflation |
| TC-3467 minted — publishAuditRef() citizen fallback immediate with zero delay on steward vacancy (zero registered stewards) | SC-17 re-attack #2 closure; ADR-019 amendment 2026-08-11 | **Yes** — StewardRegistry.registeredStewardCount() == 0 precondition; "zero delay from firstVoteClosedAt; call succeeds immediately — no 60-day wait applied"; Verifies US-0127 · FR-117 · DES-092 |
| TC-3468 minted — issuer-onboarding coordination immediate on vacancy (zero registered stewards) | SC-19 vacancy-immediate closure; ADR-019 | **Yes** — same vacancy precondition; "enrolled citizen triggers the issuer-onboarding coordination step with zero delay"; Verifies US-0127 · FR-117 · DES-092 |
| TC-3469 minted — Open Layer vote (60%/15%) attempts GovernanceConstants setter to lower TIER2_QUORUM 25%→16% and TIER2_SUPERMAJORITY 80%→61%; reverts at Amendment Layer classification check | SC-16 anti-circularity direct attack; rescan §3 re-attack #1 | **Yes** — Governor.execute() invokes setter with value 16 and 61; reverts at onlyGovernor / permittedActionClass / Amendment Layer classification; Verifies US-0129 · FR-119 · DES-091 · DES-087 |
| §10 arithmetic fixed (cycle-2 ISS-01 Low) | 4-case overlap convention stated explicitly | **Yes** — "143 + 168 (Blocked-only = 172 − 4) + 48 + 12 = 371" and "143 + 172 + 48 + 12 − 4 = 371" both present; sum verified correct |
| §2 TS-GOV2 row updated | 67→70 cases, TC-3400–TC-3469, not-automated 67→70 | **Yes** — suite table row shows 70 / 0 automated / 70 blocked-no-mech; range TC-3400–TC-3469 |
| §2 convention note updated | 368/375 → 371/378 | **Yes (numbers correct, label imprecise — see ISS-01)** |
| §5.1 heading range updated | TC-3400–TC-3466 → TC-3400–TC-3469 | **Yes** |

---

## 5. Regression check (key controls)

| Control | Verified |
|---------|----------|
| TC-3449..TC-3455 (SC-15..SC-21 closure cases) unchanged | ✓ |
| TC-3456..TC-3464 (Guarded Layer property tests, US-0129 · FR-119 · DES-087/DES-091) unchanged | ✓ |
| TC-3465..TC-3466 (FR-117 capability-absence: publishAuditRef / issuer-onboarding — existing Blocked cases) unchanged | ✓ |
| FR-109 coverage: TC-3435 (US-0119 · FR-109) — unchanged, no bleed from property tests | ✓ |
| FR-110 coverage: TC-3436 (US-0120 · FR-110) — unchanged | ✓ |
| FR-111 coverage: TC-3437 (US-0121 · FR-111) — unchanged | ✓ |
| FR-118 TCs: TC-3444, TC-3449, TC-3455 — unchanged | ✓ |
| All 70 TS-GOV2 cases Blocked or No mechanism — no fabricated passing evidence | ✓ |
| §10 total 371 consistent with §2 suite-table total 371 | ✓ |
| §10 Automated 143 unchanged (three new cases all Blocked, not automated) | ✓ |
| §10 No mechanism 48 unchanged (three new cases all Blocked, not No-mechanism) | ✓ |
| Stale references (368/375/67-case/TC-3466 range) absent outside historical changelog entries | ✓ |
| Source pins MTP-TRUMOCRACY v1.0.1, SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1 all present | ✓ |

---

## 6. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Low | T6 | §2, TC-count conventions footer | The note says "A 2-row counting difference between the two documents is expected and pre-existing." The value 2 is produced by comparing Doc 07's expanded suite-table total (371, counting TC-3200..TC-3209 as 10 individual rows) against Doc 08's anchor count (369, treating TC-3200..TC-3209 as one collapsed row) — inconsistent counting conventions. The apples-to-apples comparison — expanded vs expanded (378 − 371 = 7) or anchors vs anchors — gives 7, the same 7-case gap the cycle-2 ISS-07 fix explicitly reconciled (375 − 368 = 7 at v2.0.1). A reader who computes 378 − 371 = 7 and reads "2-row difference" will find a 5-unit discrepancy, raising false doubt about the arithmetic. All individual numbers (371, 369, 378) are arithmetically correct; only the descriptive claim is imprecise. | Amend the convention note to describe the 7-case difference at the expanded level: e.g. "Doc 07 suite table (371, expanded) differs from Doc 08 expanded total (378 = 369 − 1 + 10) by 7 cases — the same pre-existing 7-case gap as v2.0.1 (375 − 368)." Remove the "2-row" claim. |

---

## 7. Routing instruction

**PASS.** No rework cycle is required for Doc 07 v2.1.0 at this cycle. ISS-01 (Low) may be
addressed in the next patch version (clarify §2 convention note to use consistent counting
measures), but it does not block advancement. The document owner (Ji-woo Park) should update
the `Status:` field from `In Review` to `Approved` and commit the final version. Doc 08 v2.1.0
review verdict is recorded separately.
