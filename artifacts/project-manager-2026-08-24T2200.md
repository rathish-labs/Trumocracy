# Session memory — project-manager — 2026-08-24T2200

```
Role:          project-manager (Ana-Maria Petrescu)
Session:       2026-08-24 scope-closure rulings
Timestamp:     2026-08-24T22:00:00Z
Phase:         Between Gate 1 and Gate 2 (design / planning phase)
Product:       Trumocracy
```

## What was done

Wrote `artifacts/status/DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md` — the second decision
record of 2026-08-24 and the fifth of this sprint. Captured three approver confirmations
from Rathish (2026-08-24) verbatim and verified all cascade line numbers against the real
files before recording. No document other than the decision record and this memory note was
written in this session (the task explicitly restricts editing Doc 13 to a later session).

## Decisions made

| # | Decision | Approver | Date |
|---|---------|----------|------|
| D-1 | Terminology CONFIRMED: "supporter level" in prior ruling = FR-122 open/unverified tier; two-axis reading (verification axis ⊥ privacy axis) correct; two-axis note in Doc 02 v2.13.0 §4.41 retained unchanged | Rathish | 2026-08-24 |
| D-2 | MS-V1-LRG = 2027-06-30 APPROVER-CONFIRMED (upgraded from APPROVER-DELEGATED) | Rathish | 2026-08-24 |
| D-3 | RISK-44 CLOSED via option (a): Definition-B Gate-2 re-based to "after v1 gate (2027-06-30); offset to be planned when Definition B re-enters"; 2027-05-14 retired as Definition-B Gate-2 target; option (c) explicitly rejected | Rathish | 2026-08-24 |
| D-4 | T-06 ACCEPTED reaffirmed; T-07 PENDING CON-015 reaffirmed | Rathish | 2026-08-24 |
| D-5 | CON-015 and DEP-11/12/13 declared binding critical path; must start now | Rathish | 2026-08-24 |
| D-6 | v1 scope CLOSED; branch ready to push and merge (approver's action, not this session's) | Rathish | 2026-08-24 |

## Verified line numbers (cascade sites)

| File | Line(s) | Statement | Owner |
|------|---------|-----------|-------|
| `docs/01-press-release-prfaq.md` | 420 | "Gate 2 target 2027-05-14 (moved from 2027-02-15…)" | product-owner |
| `docs/02-requirements-srs.md` | 2656 | "One release at 2027-06-01 (following Gate 2 readiness 2027-05-14)…" | product-owner |
| `docs/03-architecture-design-sdd.md` | 1761 | "2027-05-14 \| Gate-2 referent for Definition B confirmed…" | architect |
| `docs/03-architecture-design-sdd.md` | 1762 | "v1 gate date \| … the date is NOT SET" | architect |
| `docs/09-release-notes.md` | 35 | "Gate 2 is milestone MS-13, target 2027-05-14…" | sre |
| `docs/09-release-notes.md` | 341 | "Gate 2 is MS-13, target 2027-05-14 — NOT approved…" | sre |
| `docs/10-deployment-runbook.md` | 19 | "Gate 2 (MS-13, target 2027-05-14) is NOT approved." | sre |

Historical changelog/Change-block mentions across the suite are NOT cascade debt.

## Open items

| # | Item | Owner | Priority |
|---|------|-------|----------|
| O-1 | Doc 13 v2.8.0 increment: label upgrade (D-2), RISK-44 closure (D-3), 2027-05-14 sweep, §3.5.5/§3.5.6, operational headline | project-manager | IMMEDIATE |
| O-2 | CON-015 legal opinion initiation — latest start 2026-09-07 (14 days from 2026-08-24) | Sofia Marchetti | CRITICAL PATH — IMMEDIATE |
| O-3 | DEP-11/12/13 vendor procurement — latest start 2026-09-19 (26 days from 2026-08-24) | Rafael Duarte | CRITICAL PATH — IMMEDIATE |
| O-4 | product-owner cascade: Doc 01 line 420 and Doc 02 line 2656 (2027-05-14 references retired) | product-owner (Priya Raghunathan) | High — next increment |
| O-5 | architect cascade: Doc 03 lines 1761–1762 (dispositions table superseded) | architect (Ravi Deshmukh) | High — next increment |
| O-6 | sre cascade: Doc 09 lines 35/341 and Doc 10 line 19 (2027-05-14 target date retired; NOT approved operative claim remains correct) | sre | High — next increment |
| O-7 | Doc 01 and Doc 05 passing business-mode reviews — Gate-1 presentation blocker | PM to assign neutral reviewer | High |
| O-8 | Definition-B Gate-2 specific offset — to be planned when Definition B re-enters | project-manager / product-owner | Deferred — when v2 re-enters |
| O-9 | T-07 CON-015 resolution | Sofia Marchetti; approver after legal opinion | Deferred pending CON-015 |
| O-10 | Doc 03 Lows ISS-A/ISS-B — design backlog debt | Ravi Deshmukh | Low carry-forward |

## IDs touched

- RISK-44: CLOSED (option a ruling, 2026-08-24)
- MS-V1-LRG: status upgraded APPROVER-DELEGATED → APPROVER-CONFIRMED (2027-06-30, Rathish 2026-08-24)
- FR-122, FR-123 (two-axis interpretation approver-confirmed — no document edit)
- CON-015, DEP-11, DEP-12, DEP-13, RISK-41 (operational headline; cited from Doc 13 §3.3)

## Artifacts written

- `artifacts/status/DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md` (new — this session's primary output)
- `artifacts/project-manager-2026-08-24T2200.md` (this file)
- `artifacts/memory-index.json` (entry appended)
