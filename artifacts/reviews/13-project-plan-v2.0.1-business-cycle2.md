# Document Review — Doc 13 Project Plan v2.0.1 — Business Mode — Cycle 2

```
Reviewed document:  docs/13-project-plan.md
Document version:   2.0.1
Review mode:        business
Reviewer role:      technical-writer
Score:              96
Critical:           0
High:               0
Medium:             1
Low:                0
Cycle:              2 of 5
Verdict:            FAIL
```

---

## Review scope

**Context:** The project-manager (Ana-Maria Petrescu) reworked Doc 13 to v2.0.1 addressing the
four Medium findings from the cycle-1 review
(`artifacts/reviews/13-project-plan-v2.0.0-business-cycle1.md`). This cycle-2 review verifies
each fix, checks for regressions, and confirms the diff scope is limited to the four stated
surgical fixes plus header/changelog.

**Reviewer:** technical-writer — neutral reviewer; does not own Doc 13.
**Pass bar:** ≥ 95% AND zero Critical/High/Medium.

---

## Cycle-1 fix verification

### ISS-01 — KC-P2 ceremony integrity trigger (§14)

**Status: RESOLVED.**

v2.0.0 (wrong): "a circuit's contributor count falls below **500**"

v2.0.1 (current): "Any phase-2 ceremony fails independent verification (`snarkjs zkey verify`),
or a circuit's attested contributor set fails the `ADR-022` assurance criteria — fewer than 5
independent institutions represented, or contributor independence cannot be confirmed from
published attestations"

**Verification:**
- Non-vacuous trigger: ✓ — the three conditions (`snarkjs zkey verify` failure; fewer than 5
  independent institutions; independence unconfirmable) are real conditions that may or may not
  fire. None would always fire under the corrected ceremony design (5–15 contributors from
  independent institutions).
- Cites ADR-022: ✓ — "the `ADR-022` assurance criteria" named explicitly.
- Three concrete, independently measurable trigger conditions: ✓.
- The old "below 500" vacuous threshold is gone: ✓.

---

### ISS-02 — RISK-19 shortfall figure (§6)

**Status: RESOLVED.**

v2.0.0 (wrong): "§8.3 shows a ~USD 0.35M shortfall with zero contingency"

v2.0.1 (current): "§8.3 shows a ~USD 245,000 (~−5.8%) shortfall with zero contingency"

Consistent with §8.3 variance row (~−USD 245,000, ~−5.8%). ✓

---

### ISS-03 — §13.1 readiness-packet resourcing row (§13.1)

**Status: RESOLVED.**

v2.0.0 (wrong): "§8.3 — −USD 0.35M, zero contingency (RISK-19)"

v2.0.1 (current): "§8.3 — ~−USD 245,000 (~−5.8%), zero contingency (RISK-19)"

Consistent with §8.3 and RISK-19 (both now ~245k). ✓

---

### ISS-04 — §13.3 lever-table L1 budget figure (§13.3)

**Status: RESOLVED.**

v2.0.0 (wrong): "**−USD 0.35M over** appetite, no contingency"

v2.0.1 (current): "**~−USD 245,000 (~−5.8%) over** appetite, no contingency"

Consistent with §8.3 and RISK-19. ✓

---

## Diff-scope confirmation

The v2.0.1 §11 re-plan log entry (line 542) states: "Four surgical fixes … No other changes."

This is **confirmed correct for the v2.0.1 delta.** The four fix sites (KC-P2, RISK-19, §13.1,
§13.3) are the only locations changed beyond the header (Version: 2.0.1, Last updated: 2026-08-21)
and the §11 changelog entry. The git diff from HEAD~1 to HEAD captures the combined v1.0.0 → v2.0.1
transformation because v2.0.0 and v2.0.1 were committed together; the v2.0.1-specific changes are
limited to the four fix sites plus header/changelog as stated.

**v2.0.0 strengths confirmed unchanged:**
- MS-08 corrected (2027-03-05 → 2027-01-25): ✓
- MS-13 / Gate-2 2027-05-14 unchanged, derivation via v1.0.0 audit-binding-constraint intact: ✓
- §8.3 budget arithmetic (ceremony ~15k; total ~4,445k; variance ~−245k): ✓
- Gate-2 items 11/12/13 (CON-015 NOT STARTED; Doc 04 review OPEN; RTM catch-up NOT STARTED): ✓
- Six transcripts / one batched campaign / 5–15 contributors per circuit: ✓
- Endorsement-floor 500 untouched; UT-05xx IDs untouched: ✓
- Historical records not rewritten: ✓

---

## New finding (cycle-1 reviewer oversight)

### ISS-01 (Medium · B4 Correctness · Exec banner, line 30)

**Location:** `docs/13-project-plan.md` exec banner ("Read this first"), line 30.

**Finding:** The exec banner still reads: "The 10-month run-rate at 18 FTE consumes the whole
USD 4.2M with **no contingency and a ~USD 0.35M shortfall**; the ceremony logistics budget line
drops to near-zero (see §8.3)."

The natural reading of this sentence is that the current shortfall is ~USD 0.35M (the pre-correction
figure). While the "(see §8.3)" reference exists, the clause structure — "consumes … with no
contingency and a ~USD 0.35M shortfall; the ceremony logistics budget line drops to near-zero" —
implies 0.35M is the result *after* noting the ceremony drop, not the *before*. All four other
corrected locations (RISK-19, §13.1, §13.3 L1, and §11 v2.0.1 entry) now state ~USD 245,000;
the exec banner is the single remaining instance of the old figure.

**Reviewer note — cycle-1 oversight:** This instance was present in v2.0.0 and was not caught
in the cycle-1 review, which stated "No other sections require changes." The project-manager
followed that routing correctly. This is a new cycle-2 finding, not a regression introduced by
v2.0.1.

**Required fix:** In the exec banner, update "~USD 0.35M shortfall" to "~USD 245,000 (~−5.8%)
shortfall" so the banner is self-consistent with §8.3 and the four already-corrected sections.
Alternatively, rephrase to make explicit that 0.35M was the pre-correction figure and 245k is
the corrected figure: e.g., "no contingency and a ~USD 245,000 (~−5.8%) shortfall (corrected
from ~USD 0.35M after the ceremony logistics line dropped to near-zero — see §8.3)."

---

## Rubric scores

| Criterion | Weight | Score | Rationale |
|-----------|--------|-------|-----------|
| **B1 Outcome & problem clarity** | 20 | 20/20 | Primary narrative (audit-paced, Gate-2 unchanged, scope re-baselined, ceremony corrected) is correct and clear. Stale figure in the exec banner is a B4 correctness issue, not a B1 outcome-clarity failure. |
| **B2 Completeness** | 15 | 14/15 | All four cycle-1 fix sites addressed. The exec banner is the one remaining instance of the uncorrected shortfall figure — a minor completeness miss that was a cycle-1 reviewer oversight. |
| **B3 Traceability & IDs** | 20 | 20/20 | All ADR/FR/CON/RISK/DEP IDs correct. ADR-022 cited throughout the KC-P2 fix. No UT-05xx altered. No endorsement-floor 500 touched. |
| **B4 Correctness & consistency** | 15 | 12/15 | One remaining internal inconsistency: exec banner says ~USD 0.35M shortfall while §8.3, RISK-19, §13.1, §13.3 L1, and §11 v2.0.1 entry all say ~USD 245,000. All four cycle-1 findings are resolved. |
| **B5 Testability** | 15 | 15/15 | KC-P2 is now a real, non-vacuous kill criterion with three independently measurable trigger conditions. All other kill criteria and plan-stop conditions unchanged and correctly defined. |
| **B6 Convention compliance** | 15 | 15/15 | Header: v2.0.1 / In Review / 2026-08-21 ✓. §11 re-plan log has v2.0.1 entry first and accurate (four fixes, no other changes) ✓. Historical records not rewritten ✓. Named owners, RFC 2119, ISO-8601 dates throughout ✓. |

**Total: 96/100 = 96%**

---

## Verdict

**FAIL.** Score 96% (above the 95% score threshold) but with 0 Critical, 0 High, **1 Medium**,
0 Low. The pass bar requires **both** ≥ 95% **and** zero C/H/M. The single Medium finding
(exec banner shortfall figure) blocks the pass.

---

## Routing

**Route to: project-manager (Ana-Maria Petrescu).** This is cycle 2 of 5.

**Single surgical fix required:**

- **ISS-01** — Exec banner (line 30): change "a ~USD 0.35M shortfall" to "a ~USD 245,000
  (~−5.8%) shortfall" so the banner is self-consistent with §8.3, RISK-19, §13.1, §13.3, and
  §11. Update header to v2.0.2 and add a §11 re-plan log entry.

No other changes are required. All four cycle-1 fixes are confirmed resolved. All v2.0.0
strengths are confirmed intact.

---

*Reviewed by: technical-writer (acting as neutral reviewer — document-review skill)*
*Reviewer is not the document owner. The project-manager (Ana-Maria Petrescu) owns Doc 13.*
*Date: 2026-08-21*
