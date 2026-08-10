# Document Review Report — 07 Test Cases & Suites v1.1.0

> Produced by the **document-review** skill. Reviewer: **engineer** (neutral — does not own Doc 07; the tester owns it). This is the **first review at any version** for this document. The whole document is scored, not only the v1.1.0 delta.

```
Reviewed document: 07-test-cases-suites.md
Document version: 1.1.0
Review mode: technical
Reviewer role: engineer (neutral — tester is the document owner)
Score: 92%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 07 v1.1.0 is a thorough, honestly-written test-case suite for a Phase-1 drop. The §0 "Reading this document honestly" preamble, the precise six-value status vocabulary, the execution evidence table, and the §10 exit summary are all best-practice quality. The 298 cases cover all 54 Must FRs, all 26 NFRs, and all §11 failure modes; the 43 new cases (TC-3300..TC-3342) correctly cover FR-062..073 and RISK-22..24; both mandated composition cases (TC-3309 and TC-3311) are present. The automation status is honest: every Phase-3 capability is marked Blocked, no case claims execution on the strength of a mock verifier. The document **FAILS** cycle 1 for one medium issue: TC-3309 (one of two mandated composition cases) asserts an expected result that is not derivable from the design specification. DES-068 specifies the tenure waiver as applying to "the one-month tenure check" without restricting it to founding members vs. party-switchers, yet TC-3309 asserts that the waiver is "inapplicable" when the tenure clock was reset by a party switch — an interpretation that cannot be confirmed from DES-068 alone.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1 medium)
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 94 | 18.8 | All 54 Must FRs, all 26 NFRs, all 26 §11 failure modes have at least one TC. TC-3300..3342 add coverage for FR-062..073 and RISK-22..24. All Blocked cases cite their blocking reason. |
| T2 Soundness | 20 | 90 | 18.0 | The status vocabulary is precise; the §0.2 execution evidence is accurate; the load-bearing TS-DIFF suite is correctly identified; TC-3311 composition is correctly derived. ISS-01 (TC-3309 expected result not derivable from DES-068) is a real soundness gap in the mandated case. |
| T3 Traceability & IDs | 20 | 93 | 18.6 | Every TC cites US and FR/NFR. Every UT cited was located in a real test file. Orphan check is clean. TD-07-01 (UT-0600..0612 and UT-0700..0742 missing from Doc 06 inventory) correctly identified and routed to the engineer rather than silently absorbed. |
| T4 Security & failure modes | 15 | 92 | 13.8 | RISK-22..24 adversarial cases (TC-3340..3342) correctly describe the threat, the expected defense, and the blocking reason (Phase 3). All SDD §11 failure modes are mapped to TS-EDGE or TS-ADV cases. |
| T5 Completeness & testability | 15 | 90 | 13.5 | No case claims a passing status it has not earned; Blocked and No-mechanism statuses are correctly applied; §6 coverage checklist is honest. ISS-01 means TC-3309 is not fully testable without a design clarification. |
| T6 Convention compliance | 10 | 93 | 9.3 | Document header, semver, status vocabulary, and case template are consistent. ISS-02 (TS-CR1 suite descriptor omits RISK-22..24 from the "Covers" column) is a minor incompleteness. |
| **Total** | **100** | — | **92.0%** | |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T2, T5 | §5.2 TC-3309 | TC-3309 (mandated composition case (a): FR-064 × FR-068 interaction) asserts "vote rejected as tenure not yet met; FR-068 waiver is inapplicable because the tenure clock reset to 0 on party switch." The rationale states the waiver "relaxes tenure for the party duration, not for a member whose clock reset on switching." DES-068 (the normative design element) says the waiver "waives one-month tenure check only" without any restriction distinguishing founding members from party-switchers. A tester — or an engineer implementing the behavior — reading DES-068 alone would likely conclude the opposite: that the waiver removes the one-month check for all members of the new party regardless of how they arrived. Neither FR-068 nor any ADR specifies this distinction. Without a design clarification (see ISS-03 in the Doc 03 review), TC-3309's expected result cannot be independently verified as correct from the current specification. | Once the architect clarifies DES-068 (whether the waiver applies to party-switchers), update TC-3309's expected result and rationale to cite the specific DES-068 clause or ADR sentence that supports the assertion. If the waiver does apply to party-switchers, revise the expected result accordingly. |
| ISS-02 | Low | T6 | §2 suite organization table, `TS-CR1` row | The TS-CR1 "Covers" column reads "FR-062..073 · BR-013" but the suite also covers RISK-22..24 (via TC-3340..3342). The suite title row correctly names "FR-062..073; RISK-22..24" but the Covers cell omits the RISKs, creating an incomplete descriptor. | Add "· RISK-22..24" to the TS-CR1 "Covers" cell. |

---

## 5. Routing instruction

**FAIL.** Route to the **tester** (owner, Ji-woo Park) for v1.1.1.

One medium issue to fix: update TC-3309's expected result and design citation once the architect has clarified DES-068 (the party-switcher scope of the tenure waiver). No new version of Doc 07 should be submitted until the Doc 03 ISS-03 fix is available to cite.

One low issue to fix alongside: add RISK-22..24 to the TS-CR1 "Covers" column in the §2 suite table.

The rework MUST produce a new version (bump `Version:` semver to at least 1.1.1, set `Status: In Review`). This loop re-reviews after the new version is produced.

**What must be preserved:** The §0 "Reading this document honestly" framework, all Blocked/No-mechanism statuses (do not change them to Pass), the TD-07-01 and TD-07-02 defect records, the honest §10 exit summary, and TC-3311 which is correctly derived.

---

## Supplementary: verification of mandated composition cases

| Case | Mandated check | Verdict |
|---|---|---|
| TC-3309 (a): FR-064 × FR-068 interaction — party-switch tenure reset vs. waiver | Present with [MANDATED] label; expected result stated with rationale; Status correctly Blocked (Phase 3) | **Present but expected result unverifiable from DES-068 — see ISS-01** |
| TC-3311 (b): FR-068 × FR-023 × FR-028 — growth surge during tenure waiver period | Present with [MANDATED] label; expected result correctly asserts waiver touches tenure check only, anti-capture controls (FR-023 churn limits + FR-028 snapshot) remain active per UT-0220 logic; Status correctly Blocked (Phase 3) | **Correct — derivable from DES-068** |
