# Document Review Report — Doc 07 Test Cases & Suites v2.2.0 · Technical · Cycle 1

> Produced by the **document-review** skill. NEUTRAL REVIEWER role: reviewer-qa (not the
> document owner; tester owns Doc 07). This reviewer scores and lists issues only — it never
> edits the reviewed document. All rework is done by the owning role (tester).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.2.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — not the document owner)
Score: 95%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 07 v2.2.0 was reviewed in technical mode as Cycle 1. The document adds the TS-SCAFFOLD
suite (TC-3470–TC-3487, 18 cases, 15 automated, 3 Blocked) and updates all counts correctly
to a total of 389 test cases with a clean four-way exit-status breakdown. Arithmetic is sound
throughout, the three Blocked cases genuinely represent unimplemented UI surfaces, and the
automation evidence (14/14 UI, 160/160 SDK) is consistent with the suite-table figures.
**FAIL** because one registered unit test — UT-0753 ("the component carries an accessible
name matching the state title") in `packages/ui/test/PrivacyStatus.test.tsx` — exists in the
repository without a TC mapping, directly contradicting the §4 backward-trace claim of
"UT in the repository with no TC mapping: 0 material." The orphan check is factually incorrect.
A secondary Low issue is that the §2 convention note states a "2-row counting difference"
between Doc 07 and Doc 08 when the actual difference is 7 (389 vs 396).

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1 Medium)
- **Verdict:** `FAIL` — Medium count is non-zero; PASS requires all three severity counts
  at zero.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | All 18 TS-SCAFFOLD TCs trace to FR-122/123/124/131/132 via US-0132/0133/0134; no requirement left uncovered |
| T2 Traceability chain integrity | 20 | 85 | 17.0 | UT-0753 found in repository without a TC mapping; §4 orphan check claim ("0 material") is false (see ISS-01) |
| T3 Test evidence quality | 20 | 100 | 20.0 | 14/14 UI passes and 160/160 SDK passes verified; 3 Blocked cases confirmed to be genuinely unimplemented surfaces; no TC claims automation that a UT does not provide |
| T4 Arithmetic accuracy | 15 | 100 | 15.0 | 371+18=389 ✓; overlap formula 158+175+48+12−4=389 ✓; TS-SCAFFOLD row (18 cases, 15 auto, 3 Blocked) correct; no off-by-one detected |
| T5 Status discipline | 15 | 100 | 15.0 | TC-3476 (enrolment screen not wired), TC-3481 (FR-131 clause (d) UI notice not wired), TC-3487 (audit-contract endpoint not wired) — all three are genuine Blocked cases; no TC claims a passing run against an unimplemented surface |
| T6 Documentation quality | 10 | 80 | 8.0 | Convention note in §2 states "2-row counting difference" between documents; actual difference is 7 (Doc 07 = 389, Doc 08 = 396); both actual totals are stated correctly elsewhere but the stated magnitude of the difference is wrong (see ISS-02) |
| **Total** | **100** | — | **95%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Medium | T2 | §4 backward trace (orphan check row); §8 automation mapping; `packages/ui/test/PrivacyStatus.test.tsx` line 46 | UT-0753 (`it('UT-0753 the component carries an accessible name matching the state title', ...)`) exists in the repository and executes in the 14-test UI suite, but is not cited by any TC in TS-SCAFFOLD or any other suite. The §4 orphan-check row claims "UT in the repository with no TC mapping: 0 material — all 288 observed/inherited tests fall inside a mapped group." This is factually incorrect: at least one UT is material (it is an accessibility verification of the PrivacyStatus component) and has no TC mapping. The coverage it provides is real but untraced — no TC, no FR/NFR chain, no RTM row. | Add a TC (e.g. TC-3488) for the UT-0753 accessibility check, mapping it to NFR-011 (WCAG 2.2 AA) or the appropriate FR; update §4 orphan-check count from "0 material" to the correct count; update §8 automation mapping to include UT-0753; update §2 suite-table total from 389 to 390 (or the correct figure after the new TC is added); update §10 exit summary accordingly. |
| ISS-02 | Low | T6 | §2 convention note (paragraph immediately below the suite table) | The convention note states: "A 2-row counting difference between the two documents is expected and pre-existing; the 396 expanded total is used in the Doc 08 §6 coverage dashboard." The actual difference between Doc 07's 389-case total and Doc 08's 396 expanded total is 7, not 2. Both actual totals are stated correctly elsewhere; only the stated magnitude of the pre-existing difference is wrong. This error has been present since v2.0.1. | Correct the convention note to read "7-row counting difference" (or restate it precisely as "Doc 07 = 389 row-anchors; Doc 08 = 396 expanded TCs because the TS-EXPL collapsed range TC-3200–TC-3209 is expanded to 10 individual cells"). |

> **Low** issues do not block the pass bar. **Medium** forces a FAIL.

---

## 5. Routing instruction

**FAIL — route to the owning role: tester.**

Required fixes:
1. **(Medium — ISS-01)** Add a TC for UT-0753, update the orphan-check claim in §4, update
   §8 automation mapping, and revise §2 suite-table total and §10 exit summary.
2. **(Low — ISS-02)** Correct the §2 convention note from "2-row" to the accurate difference.

The rework MUST produce a **new version** (bump `Version:` semver, set `Status: In Review`),
after which this review loop re-reviews at Cycle 2. Both issues must be addressed in the same
rework to avoid a third cycle.
