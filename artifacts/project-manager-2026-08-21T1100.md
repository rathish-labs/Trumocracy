# Session memory — project-manager — 2026-08-21T1100

```
Role:      project-manager (Ana-Maria Petrescu)
Timestamp: 2026-08-21T11:00Z
Phase:     Define → Design (post-Gate-1, re-plan in progress)
Product:   Trumocracy
Directive: Two approver rulings (Rathish, 2026-08-21): budget appetite + RISK-014 inquiry
Scope:     Documents only — no product code, no git commands, no commits
```

---

## What this session did

### Ruling 1 — Budget appetite (applied in substance on record-derived figures)

Identified and surfaced a discrepancy: the approver's cited figures (~$3.836M and ~$294K)
match no artifact in the repository. The record-derived figures on the accepted L2 basis are:
- Corrected L2 cost: ≈ USD 4,025,000 (4,445,000 − 420,000)
- Audit-remediation contingency: ≈ USD 175,000 (4,200,000 − 4,025,000)

Root cause of the stale figure: "≈ USD 4.13M with ~1.7% contingency" in Doc 13 §8.3 was
computed off the pre-correction total of USD 4,550,000. The ADR-022/REC-1 ceremony saving
(USD 105,000) was not cascaded when the total was corrected to USD 4,445,000. Same defect
class as ISS-01..ISS-04 in the v2.0.0 cycle-1 review.

Also identified: the ruling's "Gate 2 date move to 2027-03-15" has no referent — Gate 2 is
and remains 2027-05-14; 2027-03-15 is the audit-remediation + registry-timelock start
(§3.4). No dates changed.

### Ruling 2 — RISK-014 contradiction (HELD — no referent)

`RISK-014` (four-digit) does not exist. `RISK-14` is regulatory reclassification (no MACI
content). ADR-006 decides 5-of-7 with rationale; all downstream consistent; no "undecided"
language anywhere. No document edited. Awaiting approver re-direction.

---

## Artifacts written / edited

| File | Action | Notes |
|---|---|---|
| `artifacts/status/DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md` | **Created** | Decision record: both rulings verbatim; application notes; discrepancies surfaced |
| `docs/13-project-plan.md` | **Edited** (7 surgical changes) | v2.0.2 → v2.0.3, Status: In Review |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | **Edited** (additive only) | Second 2026-08-21 section appended |
| `artifacts/project-manager-2026-08-21T1100.md` | **Created** | This memory note |

### Doc 13 changes (v2.0.2 → v2.0.3)

| Change | Location | What changed |
|---|---|---|
| a | Header | Version 2.0.3; Status: In Review; DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md added to Source |
| b | "Read this first" banner | Added clause: L2 basis / ≈ USD 175K audit-remediation contingency / ruling 2026-08-21 |
| c | §8.3 single-pilot lever paragraph | "≈ USD 4.13M with ~1.7% contingency" → "≈ USD 4,025,000" with cascade-correction note; added explicit Audit-remediation contingency block (≈ USD 175K) with approver rationale; cross-ref RISK-18/RISK-19; discrepancy surfaced |
| d | §13.3 L2 row | Updated budget cell: "≈ USD 4.03M; ≈ USD 175K (~4%) banked as audit-remediation contingency"; B-01 acceptance noted |
| e | RISK-19 row | Revised statement: on L2 basis within appetite; residual exposures (pilot-count reversal; A-PLAN-01 rate sensitivity) stated; "Open — new" → "Open" |
| f | RISK-18 row | Budget cover sentence added to mitigation: ≈ USD 175K now provides explicit budget cover for re-audit/re-ceremony (previously schedule-only) |
| g | §11 re-plan log | v2.0.3 entry inserted at top of table |

---

## IDs touched

| Namespace | IDs |
|---|---|
| RISK | RISK-18 (mitigation updated), RISK-19 (statement revised) |
| Documents | Doc 13 (v2.0.2 → v2.0.3) |
| Decision records | DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md (new) |
| Gate-status | GATE-STATUS-2026-08-09.md (additive section) |
| Not touched | RISK-14, ADR-006, any dates, any endorsement-floor constants, any UT-05xx IDs |

---

## Key decisions

1. Ruling 1 applied in substance with record-derived figures (≈ USD 4,025,000 / ≈ USD 175K
   contingency); approver's cited ~$3.836M and ~$294K surfaced as non-matching — confirmation
   requested from Rathish.
2. Gate-2 date 2027-05-14 unchanged; "2027-03-15" from ruling identified as audit-remediation
   start (§3.4), not a Gate-2 date — approver confirmation of referent requested.
3. Ruling 2 HELD: RISK-014 has no referent; ADR-006 decides 5-of-7; no contradiction exists
   to resolve. Awaiting approver re-direction.

---

## Open items

| Item | Owner | Status |
|---|---|---|
| Approver confirmation: intended magnitude (~$3.836M / ~$294K vs ≈ $4.025M / ≈ $175K) | Rathish | **Awaiting confirmation** |
| Approver confirmation: Gate-2 referent (2027-05-14 vs 2027-03-15) | Rathish | **Awaiting confirmation** |
| Ruling 2 re-direction with specific referent | Rathish | **Awaiting re-direction** |
| Doc 01 banner + §E2 cascade correction ("≈ USD 4.13M / ~1.7%") | product-owner (Priya Raghunathan) | Follow-up debt, not in this directive |
| Doc 02 CON-007 accepted-budget parenthetical cascade correction | product-owner (Priya Raghunathan) | Follow-up debt, not in this directive |
| Pre-existing Gate-2 blockers unchanged: RTM gap (113 open Must rows); Doc 04 review debt; FR-121..129 RTM catch-up; CON-015 legal opinion | Various | Unchanged |

---

## Gate state

- **Gate 1:** APPROVED (unconditional, 2026-08-11).
- **Gate 2:** NOT READY. MS-13 target: 2027-05-14 (unchanged). RTM (Doc 08 v2.1.0):
  125 Must rows / 12 COMPLETE / 113 OPEN. Pre-existing blockers unchanged.
- **Doc 13:** v2.0.3, Status: **Approved** (review loop, cycle 1 PASS 97% — `artifacts/reviews/13-project-plan-v2.0.3-business-cycle1.md`; 0C/0H/0M/2L).

---

## Review outcome — appended post-session

**Doc 13 v2.0.3 neutral review PASSED**: 97%, 0C/0H/0M/2L.
Report: `artifacts/reviews/13-project-plan-v2.0.3-business-cycle1.md`.
Status flipped to Approved. §13.1 readiness row updated to reference this report.
Gate-status additive section updated with two surviving Lows.

Surviving Low issues (not fixed — fold into next substantive re-plan):
- **ISS-01 (Low):** §13.3 L2 row says "~4%" — correct figure is ~4.2% (175,000 / 4,200,000 = ~4.17%).
- **ISS-02 (Low):** §8.3 discrepancy paragraph omits the Gate-2-date no-referent note (2027-03-15); that note lives only in `DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.5`.
