# Document Review Report — Doc 02 Requirements v2.1.0, Business Cycle 1

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.1.0
Review mode: business
Reviewer role: technical-writer (neutral — not the document owner)
Score: 91%
Critical: 0
High: 0
Medium: 1
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 02 v2.1.0 adds the steward-organisation requirement area (BR-021, FR-114..FR-120, TD-11,
RISK-31/32, OI-18) and applies the Gate 1 OI-14/OI-15/OI-16 decisions to the five affected FRs
(FR-024, FR-085, FR-090, FR-105, FR-107). The document is substantially well-formed: the Bitcoin
Foundation preamble in §4.39 is faithful to the approver's recorded rationale; all seven steward
FR Gherkin blocks are present and adversarially complete; the three OI disposition comments in §8
are present (OI-14 in FR-024/FR-090, OI-15 in FR-105); independently verified counts match every
stated figure in §11; OI-18 correctly identifies the previously-absolute guarantees not in the
entrenched-charter list; and the §12 BR-021 trace is complete.

The verdict is **FAIL** on one Medium issue: FR-092 in §4.26 still carries the clause "authorship
(per FR-090, **pending OI-14**)" — OI-14 was decided at this very version and §13 correctly
records it as DECIDED, making the §4 text internally inconsistent. This clause was missed by the
product-owner's consistency sweep (which checked for "pending OI-16" occurrences and found zero,
but did not sweep for "pending OI-14"). Five Low issues cover stale cross-references, a missing
OI-16 Gherkin annotation, and absent negative test scenarios.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`91%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1 Medium)
- **Verdict:** `FAIL` — one Medium issue blocks the pass bar regardless of score.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.4 | Bitcoin Foundation preamble faithful; BR-021 success measure (capability-absence testing, steward-vacancy simulation) observable and falsifiable; OI-18 tension clearly framed with options; all OI-14/15/16 dispositions carry verbatim rationale. Minor: FR-092 "pending OI-14" creates a small clarity fault in an adjacent Must FR. |
| B2 Completeness | 15 | 89 | 13.4 | All sections present and filled; FR-114..FR-120 fully specified; TD-11, RISK-31/32, OI-18 present; §12 BR-021 trace complete; non-violence Part-B check correctly recorded; US/TC deferral acknowledged. Deducted: FR-092 §4.26 — OI-14 decision was applied to FR-024 and FR-090 but FR-092's authorship cross-reference was not updated (Medium). |
| B3 Traceability & IDs | 20 | 97 | 19.4 | All stated counts independently verified (see §5 below). All FR-114..FR-120 have correct IDs, priority, named owner, verify-by, and traces. §12 cross-links to existing BRs (BR-015, BR-008, BR-003) correct. §15 approvals rows present and accurate. Minor: §2.5 "See §9 (`CON-001` … `CON-012`)" is a stale reference — v2.0.0 added CON-013 and CON-014 (Low). |
| B4 Correctness & consistency | 15 | 82 | 12.3 | OI-14/15/16 applied faithfully to FR-024, FR-085, FR-090, FR-105, FR-107 with verbatim disposition language. OI-18 banner names the correct set of previously-absolute guarantees (CON-001, BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013) verified against §9.1/§6. Steward FRs internally consistent with BR-015, CON-003, NFR-017; TD-11 honestly records the sortition tension. Major deduction: FR-092 "pending OI-14" while §13 records OI-14 as DECIDED — internal inconsistency in a Must FR (Medium). Minor: two stale passages in §15 (Low). |
| B5 Testability | 15 | 89 | 13.4 | All 7 steward FR Gherkin blocks present with multiple adversarial scenarios. FR-117 correctly defers UT ID assignment ("UT IDs assigned by the engineer") without fabricating. FR-118 cites the existing entrenchment mechanism (FR-027 discipline). MoSCoW table complete and accurate per independent recount. Three OI disposition comments present: FR-024 (OI-14), FR-090 (OI-14), FR-105 (OI-15). Deductions: OI-16 Gherkin annotation absent from FR-085 and FR-107 §8 blocks — inconsistent with OI-14/OI-15 pattern (Low); FR-024 and FR-105 §8 blocks test the positive path only and omit the corresponding negative scenario for each OI decision (Low). |
| B6 Convention compliance | 15 | 88 | 13.2 | RFC 2119 keywords used correctly throughout the steward FRs (MUST/MUST NOT/SHOULD/MAY). ISO-8601 dates: 2026-08-11 throughout. Named owner on every FR. §14 Glossary updated with four steward-area terms. Deductions: §2.5 CON range stale (Low, see B3); §15 "Downstream" paragraph contains stale v1.1.0 re-affirmation language (Low); §15 approvals table retains a "_pending_" row for the superseded v1.1.0 re-affirmation (Low). |
| **Total** | **100** | — | **91.1% → 91%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | B4 | §4.26 FR-092, "authorship (per FR-090, **pending OI-14**)" | FR-092 still describes authorship as "pending OI-14." OI-14 was decided at v2.1.0 (Worker tier and above); §13 correctly marks OI-14 as DECIDED with strikethrough. The §4 text is internally inconsistent with the decision recorded in the same document. The product-owner's consistency sweep checked for "pending OI-16" but did not sweep for "pending OI-14," so this survived. | Replace "(per FR-090, pending OI-14)" with "(per FR-090; per OI-14 decided 2026-08-11: Worker tier or above; see GATE1-DECISION-2026-08-11.md §3)" or equivalent resolved phrasing. |
| ISS-02 | Low | B3/B6 | §2.5 line "See §9 (`CON-001` … `CON-012`)" | v2.0.0 added CON-013 (non-violence) and the constraint table already had CON-014 (platform ≠ legal registration). The §2.5 cross-reference still reads "CON-001 … CON-012" — two constraints are invisible to a reader who follows only this pointer. | Update to "See §9 (`CON-001` … `CON-014`)". |
| ISS-03 | Low | B4/B6 | §15 "Downstream" paragraph (line 2023–2024) | "Nothing is designed until Gate 1 re-affirmation clears for v1.1.0" — stale from the v1.1.0 era. At v2.1.0 the relevant condition is the passing of this review loop, not the v1.1.0 re-affirmation. | Update to reflect the current Gate 1 conditional approval: e.g. "Nothing is designed until Doc 02 v2.1.0 passes its business-mode review and the project-manager records condition satisfaction (GATE1-DECISION-2026-08-11.md §2)." |
| ISS-04 | Low | B4/B6 | §15 approvals table, row "Human approver — Gate 1 re-affirmation / Rathish / **Pending re-affirmation at v1.1.0** / _pending_" | The v1.1.0 re-affirmation was superseded by the v2.0.0 re-entry approval recorded in the two rows below it. The word "_pending_" in the Date column and "Pending re-affirmation" in the Decision column are misleading at v2.1.0; OI-13 (cited in Notes) is also fully resolved. | Annotate the row as superseded, e.g. add "_(superseded by v2.0.0 re-entry approval 2026-08-11; OI-13 resolved)_" to the Notes column, or consolidate the historical approval narrative. |
| ISS-05 | Low | B5 | §8 Gherkin blocks for FR-085 (line 1251) and FR-107 (line 1417) | OI-16 Gherkin annotation absent from both §8 blocks. The requirement texts in §4.24 (FR-085) and §4.35 (FR-107) both carry the OI-16 annotation ("carve-out ADOPTED per OI-16"), and a ✅ OI-16 banner appears after FR-085 in §4. However, neither §8 Gherkin block carries a "# v2.1.0 per OI-16" disposition comment, inconsistent with the pattern used for OI-14 (FR-024, FR-090) and OI-15 (FR-105). | Add "# v2.1.0 per OI-16: confidential-class carve-out adopted — pre-nomination disclosure data destroyed on withdrawal; public records remain append-only" as a comment line to the FR-085 §8 block and "# v2.1.0 per OI-16: sole exception is pre-nomination disclosure data (FR-085, confidential-class, never entered the governance record)" to the FR-107 §8 block. |
| ISS-06 | Low | B5 | §8 Gherkin: FR-024 block (line 864) and FR-105 block (line 1400) | The FR-024 §8 block tests only the positive path ("Given a matured member / When they submit a proposal with a declared tier / Then it is accepted"). The negative OI-14 scenario — a Supporter attempting to propose without declaring Worker tier is blocked or prompted — is described in the disposition comment but absent as a Given/When/Then scenario. Similarly, the FR-105 block tests the higher expulsion bar and successful outcome but omits the OI-15 negative scenario: attempting to expel a Supporter produces no such capability. Both negative behaviours are in the disposition comments but not in executable form. | For FR-024: add "Given a Supporter-tier matured member who has not declared Worker tier / When they attempt to submit a proposal / Then the submission is refused and they are prompted to self-declare Worker tier (public) first". For FR-105: add "Given a Supporter-tier participant targeted in an expulsion vote / When the expulsion vote is submitted / Then no such path exists and the attempt is refused; FR-005 credential revocation is the applicable mechanism". (US/TC deferral remains in effect per §12 session scope; these are §8 Gherkin completeness items.) |

> **Low** issues (ISS-02 through ISS-06) do not block the pass bar individually; the verdict is
> FAIL solely because of ISS-01 (Medium).

---

## 5. Independent counts (reviewer-measured)

The following counts were measured by the reviewer independently from the document text. All match the §11 stated figures.

| Item | §11 states | Reviewer measured | Match? |
|------|-----------|-------------------|--------|
| FR minted total | 120 | 120 (101 Must + 14 Should + 3 Could active = 118 + 2 superseded FR-046/FR-062) | ✓ |
| FR Must active | 101 | 101 (counted from §11 MoSCoW table — FR-001..FR-120 enumerated list) | ✓ |
| FR Should | 14 | 14 (FR-005, 012, 013, 015, 017, 019, 029, 034, 038, 041, 044, 048, 049, 055) | ✓ |
| FR Could | 3 | 3 (FR-052, 053, 057) | ✓ |
| BR count | 21 | 21 (BR-001..BR-021) | ✓ |
| CON count | 14 | 14 (CON-001..CON-014; CON-014 at §9.1 line 1796 confirmed) | ✓ |
| NFR count | 28 | 28 (Must: NFR-001..007, 009..017, 020..025, 027..028 = 24; Should: NFR-008, 018, 019, 026 = 4) | ✓ |
| RISK rows in §10 | 27 | 27 (RISK-01..16 = 16; RISK-22..32 = 11; RISK-17..21 live in Doc 13) | ✓ |
| TD count | 11 | 11 (TD-01..TD-11) | ✓ |
| Steward FR Gherkin blocks | 7 | 7 (FR-114, FR-115, FR-116, FR-117, FR-118, FR-119, FR-120) | ✓ |
| OI-14/15/16 §8 disposition comments | 3 | 3 (FR-024 OI-14 ✓, FR-090 OI-14 ✓, FR-105 OI-15 ✓; OI-16 absent from §8 — see ISS-05) | Note |

**OI-18 named-absolutes check (per task instruction, against §9.1/§6):**

The OI-18 banner in §4.39 names: CON-001, BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012,
CON-013. The reviewer verified each against the constraints/NFR table:

- CON-001 (§9.1): "This is absolute and not negotiable at any gate." ✓ Not in entrenched charter; correctly flagged.
- BR-011/NFR-003 (§3/§6): Receipt-freeness and coercion resistance stated as Must. ✓ Not in entrenched charter; correctly flagged.
- CON-002/CON-008/NFR-010 (§9.1/§6): Data minimisation; no personal data on immutable record. ✓ Not in entrenched charter; correctly flagged.
- CON-012 (§9.1): No bespoke unaudited cryptography. ✓ Not in entrenched charter; correctly flagged.
- CON-013 (§9.1): Non-violence founding clause. ✓ Not in entrenched charter; correctly flagged.

No additional previously-absolute guarantees were found in §9.1/§6 that the OI-18 banner missed within the scope of the task verification (CON-001, BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013).

---

## 6. Routing instruction

**FAIL.** Route Doc 02 v2.1.0 to the **owning role (product-owner: Priya Raghunathan)** for rework.

The required rework:
1. **(Medium — must fix)** Remove "pending OI-14" from FR-092 §4.26 and replace with resolved language citing the decided disposition (ISS-01).
2. **(Low — should fix in same pass)** Update §2.5 CON range to "CON-001 … CON-014" (ISS-02).
3. **(Low)** Update §15 Downstream stale language to reflect the current Gate 1 condition (ISS-03).
4. **(Low)** Annotate or remove the stale "_pending_" v1.1.0 re-affirmation row in §15 (ISS-04).
5. **(Low)** Add "# v2.1.0 per OI-16" disposition comment to FR-085 and FR-107 §8 blocks (ISS-05).
6. **(Low)** Add negative Given/When/Then scenarios for OI-14 (FR-024) and OI-15 (FR-105) to §8 (ISS-06).

The rework MUST produce a **new version** (`Version: 2.1.1`, `Status: In Review`). After rework,
the review loop re-reviews at **cycle 2 of 5**. The single Medium fix (ISS-01) is a surgical
one-line edit in FR-092; the Lows are all minor annotation additions. A cycle-2 PASS is expected
if all six issues are addressed.

The gate-1 condition (Doc 02 v2.1.0 passing its business-mode review) is **not yet satisfied**.
The project-manager should not record condition satisfaction until a PASS review report exists for
the current version.
