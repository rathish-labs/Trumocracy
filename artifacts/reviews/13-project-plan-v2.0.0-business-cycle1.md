# Document Review — Doc 13 Project Plan v2.0.0 — Business Mode — Cycle 1

```
Reviewed document:  docs/13-project-plan.md
Document version:   2.0.0
Review mode:        business
Reviewer role:      technical-writer
Score:              86
Critical:           0
High:               0
Medium:             4
Low:                0
Cycle:              1 of 5
Verdict:            FAIL
```

---

## First-ever review notice

This is Doc 13's **FIRST-EVER document-review report**. No `13-*` file previously existed in
`artifacts/reviews/`. This fact is recorded here to clear the standing hook-noise item that flagged
the absence of a Doc 13 review report. The document-review loop for Doc 13 v2.0.0 now formally opens
with this cycle-1 report.

---

## Review scope

**Context:** The project-manager (Ana-Maria Petrescu) produced Doc 13 v2.0.0 applying the
ceremony-correction and proving-system decisions from `artifacts/status/DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md`
(REC-1 / REC-2, Rathish, 2026-08-21) and re-baselining scope to SRS v2.4.0 (Doc 02 v2.4.0).
The reviewer is the **technical-writer** — a neutral role that does not own Doc 13. This report
**scores and lists issues only**; no edits to the reviewed document.

**Sources consulted:**
- `docs/13-project-plan.md` v2.0.0 (reviewed document)
- `artifacts/status/DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` (REC-1 / REC-2 / six-vs-one clarification)
- `docs/adr/ADR-022-groth16-phase1-commitment.md` (confirmed present)
- `docs/02-requirements-srs.md` §11 v2.4.0 (110 Must FRs)
- `git show HEAD~1:docs/13-project-plan.md` (v1.0.0 — for MS-13 derivation check)

---

## MS-13 Gate-2 derivation — explicit confirmation

**Check requested:** confirm that the Gate-2 / MS-13 date 2027-05-14 is unchanged and that this
is correct by derivation from v1.0.0's own estimates.

**Result: CONFIRMED.**

In v1.0.0:
- MS-08 (ceremony completion): 2027-03-05
- MS-09 (audit completion): 2027-03-12

The audits completed **one week after** the ceremonies. Therefore audits, not ceremonies, were
already the critical-path binding constraint before the correction. Moving ceremonies from
2027-03-05 to 2027-01-25 (~1 week campaign) removes them from the critical path but does not
change the audit completion date (2027-03-12). The post-audit chain — remediation (5 wks),
MACI Phase-3, 30-day on-chain timelock — is unchanged. Gate 2 / MS-13 2027-05-14 is
**correctly unchanged in v2.0.0** and is traceable to v1.0.0's own recorded estimates.

Doc 13 v2.0.0 §3.3 note (2026-08-21 annotation, line 640) states this derivation explicitly
and correctly: "the audits were already the binding constraint before the correction, completing
2027-03-12 vs ceremonies completing 2027-03-05; see §3.4."

---

## CAUTION check — endorsement-floor 500 constants and UT-05xx IDs

**Check:** verify that the endorsement-floor `max(..., 500)` governance constant and UT-05xx
test-identifier instances were not accidentally altered when the ceremony contributor-count
correction was applied.

**Result: PASSED — with a related finding.**

No UT-05xx test IDs appear in Doc 13. No endorsement-floor `max(..., 500)` governance-rule
expressions appear in Doc 13. The correction to ceremony contributor counts was applied as
"5–15 independent contributors per circuit" in DEP-02, RISK-10, RISK-17, §3.3 item 4,
WS-11, the exec banner, and the comms stakeholder row — all correctly scoped to ceremony
context.

**However:** §14 KC-P2 still reads "a circuit's contributor count falls below **500**" — this
is a ceremony contributor count threshold that should have been updated per REC-1 but was not.
This is filed as ISS-01 (Medium) below. It is distinct from the endorsement-floor constant —
it is a ceremony trigger condition, not a governance constant — but it escaped the correction
sweep.

---

## Verification checklist

| Claim | Location | Status |
|-------|----------|--------|
| Ceremonies corrected to one batched phase-2 campaign | Exec banner; WS-11 | ✓ |
| Six transcripts (one per circuit) | WS-11; RISK-10; exec banner | ✓ |
| 5–15 independent contributors per circuit | DEP-02; RISK-10; §3.3 item 4; comms row | ✓ |
| ~1 week (days, not months) | Exec banner; §3.4 critical path | ✓ |
| MS-08 corrected 2027-03-05 → 2027-01-25 | §3 milestone table; §3.4 | ✓ |
| MS-09 unchanged (2027-03-12) | §3 milestone table | ✓ |
| Ceremonies OFF critical path | §3.4 | ✓ |
| Audits binding constraint stated explicitly | §3.4; §3.3 note | ✓ |
| Gate 2 / MS-13 unchanged at 2027-05-14 | §3 milestone table | ✓ |
| Derivation traced to v1.0.0 estimates | §3.3 note (2026-08-21 annotation) | ✓ |
| Scope re-baselined to SRS v2.4.0, 110 Must FRs | §2.1; §13.1 | ✓ |
| ADR-022 and DECISIONS-2026-08-21 added to sources | §0 sources | ✓ |
| Budget: ceremony line ~USD 15,000 | §8.3 table (line 3) | ✓ |
| Budget: total ~USD 4,445,000 | §8.3 total row | ✓ |
| Budget: variance ~−USD 245,000 (~−5.8%) | §8.3 variance row | ✓ |
| Budget variance banner "audit-paced" | Exec banner line 27 | ✓ |
| Zero contingency stated | §8.3 variance row | ✓ |
| Gate-2 item: CON-015 NOT STARTED | §3.3 item 11 | ✓ |
| Gate-2 item: Doc 04 review debt OPEN | §3.3 item 12 | ✓ |
| Gate-2 item: FR-121..129 RTM catch-up NOT STARTED | §3.3 item 13 | ✓ |
| §11 re-plan log present with full v2.0.0 entry | §11 | ✓ |
| Header: v2.0.0 / In Review / 2026-08-21 | Header | ✓ |
| Historical records not rewritten (S-01 has correction pointer) | §3.3 note | ✓ |
| Endorsement-floor 500 untouched | Whole document | ✓ |
| UT-05xx IDs untouched | Whole document | ✓ |
| RISK-17 revised (L4/I4 → L2/I4) | §6 RISK-17 | ✓ |
| DEP-02 corrected to 5–15 contributors | §5 DEP-02 | ✓ |
| KC-P2 ceremony contributor threshold updated | §14 KC-P2 | **✗ — ISS-01** |
| RISK-19 budget figure updated | §6 RISK-19 | **✗ — ISS-02** |
| §13.1 budget cross-reference updated | §13.1 | **✗ — ISS-03** |
| §13.3 lever L1 budget figure updated | §13.3 table | **✗ — ISS-04** |

---

## Issues

### ISS-01 (Medium · B4 Correctness · §14 KC-P2)

**Location:** `docs/13-project-plan.md` §14, KC-P2 stop condition (line 704).

**Finding:** KC-P2 trigger condition still reads "a circuit's contributor count falls below
**500**." Per REC-1, the ceremony contributor count was corrected to 5–15 per circuit
(assurance-based, per ADR-022). Since every Phase-1 ceremony will have 5–15 contributors,
and 5–15 < 500, KC-P2 as written would perpetually fire — triggering a re-run on every
ceremony, which defeats the purpose of a kill criterion. REC-1 directs correction "everywhere
it appears" in Doc 13; KC-P2 is a ceremony-related threshold and was not updated.

**Required fix:** Update KC-P2 trigger to reflect the assurance-based contributor floor,
e.g. "a circuit's contributor count falls below the assurance-based minimum documented in
ADR-022, or fewer than 5 distinct independently-sourced institutions contributed."

**Note:** This is a ceremony contributor threshold, NOT the endorsement-floor governance
constant `max(..., 500)`. The CAUTION check passes; this is a distinct escape from the
correction sweep.

---

### ISS-02 (Medium · B4 Correctness · §6 RISK-19)

**Location:** `docs/13-project-plan.md` §6, RISK-19 entry (line 344).

**Finding:** RISK-19 description still reads "§8.3 shows a ~USD 0.35M shortfall with zero
contingency." Section §8.3 was corrected in v2.0.0: the ceremony logistics line dropped from
~USD 120,000 to ~USD 15,000, reducing the shortfall to ~USD 245,000 (~−5.8%). The RISK-19
text references the pre-correction shortfall figure and was not updated. A decision-maker
reading the risk register would see a 43% overstatement of the budget gap (350k vs 245k).

**Required fix:** Update RISK-19 description to read "~USD 0.35M shortfall before ceremony
correction; corrected to ~USD 245,000 (~−5.8%) after ceremony logistics line reduced to
~USD 15,000 per ADR-022 (v2.0.0); zero contingency remains."

---

### ISS-03 (Medium · B4 Correctness · §13.1)

**Location:** `docs/13-project-plan.md` §13.1 Gate-1 readiness packet, "Resourcing costed
against CON-007" row (line 588).

**Finding:** The evidence cell reads "§8.3 — −USD 0.35M, zero contingency (RISK-19)."
Section §8.3 in the same document now states ~−USD 245,000 (~−5.8%), improved from the
pre-correction −350k. The readiness packet cross-reference is stale. A gate-readiness
document that quotes the wrong variance figure misrepresents the budget posture to the
human approver reading the packet.

**Required fix:** Update the evidence cell to read "§8.3 — ~−USD 245,000 (~−5.8%), zero
contingency, improved from −350k by ceremony logistics correction (RISK-19)."

---

### ISS-04 (Medium · B4 Correctness · §13.3)

**Location:** `docs/13-project-plan.md` §13.3 lever table, L1 row (line 648).

**Finding:** Lever L1 ("Move Gate 2 to 2027-05-14; hold 3 pilots") budget impact still reads
"**−USD 0.35M over** appetite, no contingency." After the ceremony logistics correction in
§8.3, the correct figure for 3-pilot L1 is ~−USD 245,000. The lever table is the primary
decision-support tool the human approver uses to choose between L1, L2, and L3; quoting
a figure 43% larger than the corrected shortfall (350k vs 245k) could influence the lever
choice and presents a stale worst-case that §8.3 has already corrected.

**Required fix:** Update L1 budget impact to "~−USD 245,000 (~−5.8%) over appetite, no
contingency (corrected from −350k per ceremony logistics update — see §8.3)."

---

## Rubric scores

| Criterion | Weight | Score | Rationale |
|-----------|--------|-------|-----------|
| **B1 Outcome & problem clarity** | 20 | 20/20 | Executive banner is precise and correct: "audit-paced, not ceremony-paced"; ceremonies collapsed to "days not weeks"; Gate-2 unchanged with derivation stated; scope re-baselined to SRS v2.4.0 110 Must FRs. No ambiguity for the decision-maker on the primary narrative. |
| **B2 Completeness** | 15 | 10/15 | All DECISIONS §4 explicitly listed correction sites addressed (MS-08, WS-11, §3.4, comms row, DEP-02, RISK-10, RISK-17). Four implicit cascade locations missed: KC-P2 (ceremony threshold), RISK-19 (budget), §13.1 (budget), §13.3 L1 (budget). These are logically required by REC-1's "correct everywhere" directive. |
| **B3 Traceability & IDs** | 20 | 20/20 | ADR-022 cited throughout; DECISIONS-2026-08-21 added to sources; FR-001..FR-129 / CON-015 / RISK-17..RISK-21 / DEP-02 all correctly referenced. No UT-05xx altered. No endorsement-floor 500 touched. Gate-2 items 11/12/13 fully traced. |
| **B4 Correctness & consistency** | 15 | 7/15 | Four internal inconsistencies: KC-P2 ceremony threshold vs corrected contributor count (ISS-01); RISK-19 vs §8.3 shortfall (ISS-02); §13.1 vs §8.3 shortfall (ISS-03); §13.3 L1 vs §8.3 shortfall (ISS-04). The document says different things in different sections about the same figures. |
| **B5 Testability** | 15 | 12/15 | Product kill criteria (KC-1 through KC-7) correctly defined with triggers, measurement owners, decision owners, and actions. Plan-stop conditions KC-P1 and KC-P3 correctly defined. KC-P2 trigger (threshold 500) is vacuous under the corrected contributor count (5–15), making it a kill criterion that would always fire rather than a genuine stop condition. |
| **B6 Convention compliance** | 15 | 15/15 | Header: v2.0.0 / In Review / 2026-08-21 ✓. Changelog (§11 re-plan log) first and complete ✓. Historical records not rewritten — S-01/GATE1-DECISION-2026-08-09 receive correction pointer only ✓. Named owners on all workstreams and risks ✓. RFC 2119 keywords used appropriately ✓. ISO-8601 dates throughout ✓. |

**Total: 84/100 = 84%**

---

## Verdict

**FAIL.** Score 84% (below the 95% bar) with 0 Critical, 0 High, **4 Medium**, 0 Low.
The pass bar requires ≥ 95% AND zero C/H/M. Both conditions fail.

The primary re-plan decisions are substantively correct — schedule, critical path, ceremony
correction, six-circuit framing, scope re-baseline, and §8.3 budget arithmetic are all right.
The four Medium findings are a single root cause: the ceremony budget correction was applied in
§8.3 but the cascade to RISK-19, §13.1, and §13.3 was not completed, and KC-P2's related
contributor threshold was also not updated.

---

## Routing

**Route to: project-manager (Ana-Maria Petrescu).** This is cycle 1 of 5.

The project-manager must rework Doc 13 into v2.0.1, addressing all four Medium issues:

1. **ISS-01** — §14 KC-P2: replace "contributor count falls below 500" with an assurance-based
   threshold consistent with ADR-022 (e.g. "fewer than the assurance-based minimum per ADR-022"
   or "fewer than 5 distinct independently-sourced institutions").
2. **ISS-02** — §6 RISK-19: update shortfall figure from ~USD 0.35M to ~USD 245,000 (~−5.8%),
   noting the improvement from the ceremony logistics correction.
3. **ISS-03** — §13.1: update "§8.3 — −USD 0.35M" cross-reference to reflect the corrected
   ~−USD 245,000.
4. **ISS-04** — §13.3 L1: update "−USD 0.35M over appetite" to ~−USD 245,000 (~−5.8%).

After rework, bump to v2.0.1 (Status: In Review) and re-submit for cycle-2 review.

**No other sections require changes.** The reviewer confirms that all other correction sites
listed in DECISIONS §4 were correctly applied, the MS-13 Gate-2 derivation is sound, and the
endorsement-floor / UT-05xx CAUTION check passes.

---

*Reviewed by: technical-writer (acting as neutral reviewer — document-review skill)*
*Reviewer is not the document owner. The project-manager (Ana-Maria Petrescu) owns Doc 13.*
*Date: 2026-08-21*
