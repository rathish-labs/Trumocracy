# Project-Manager Session Memory — 2026-08-11T1500

```
Role:       project-manager (Ana-Maria Petrescu)
Timestamp:  2026-08-11T15:00:00Z
Phase:      Define — OI-18 decision recording (pre-Design)
Product:    Trumocracy
```

## What was done

Recorded Rathish's decision on OI-18 (entrenched-charter scope vs previously-absolute
guarantees). OI-18 was the one open item remaining after the Gate 1 condition was satisfied
(Doc 02 v2.1.1 cycle-2 PASS 99%); it required a human decision before the architect could
fix the amendment boundary in Doc 03.

**Decision recorded:** option (c) two-tier core, with CON-001 promoted into the Tier-1
entrenched charter (fork-only). Full decision text quoted verbatim in
`artifacts/status/OI-18-DECISION-2026-08-11.md` §2.

### Files written or edited

| File | Action |
|------|--------|
| `artifacts/status/OI-18-DECISION-2026-08-11.md` | **Written** — full decision record (header, §1 context, §2 verbatim decision, §3 disposition table, §4 unlocks, §5 sources, closing note) |
| `artifacts/status/GATE1-DECISION-2026-08-11.md` | **Edited** — one paragraph appended immediately after the condition-satisfied sentence: OI-18 decided option (c), pointer to full record, design phase proceeds |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | **Edited** — dated paragraph appended after "Gate 2: Unchanged" tail: OI-18 DECIDED (option c, CON-001 promoted), architect to Doc 03 v2, Gate 2 unchanged |
| `artifacts/project-manager-2026-08-11T1500.md` | **Written** — this memory note |
| `artifacts/memory-index.json` | **Edited** — entry 30 appended |

## Decisions recorded

- **OI-18 DECIDED** — option (c) two-tier core.
  - Tier 1 (fork-only): six existing charter rules + CON-001.
  - Tier 2 (super-process): BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013.
  - Tier 3 (ordinary tier): everything else.
  - Super-process minimum: (1) supermajority materially above ordinary structural tier;
    (2) timelock long enough fork right is genuinely exercisable; (3) two consecutive
    affirmative votes separated by that window; (4) growth-surge defence active throughout;
    (5) independent audit published before the second vote. Numbers set by architect in Doc 03.

## IDs touched

- OI-18 — DECIDED (this session)
- FR-118, FR-119 — amendment boundary now defined at requirements level; DES elements owed in Doc 03 v2
- CON-001 — promoted to Tier 1
- BR-011, NFR-003, CON-002, CON-008, NFR-010, CON-012, CON-013 — assigned to Tier 2
- FR-114..FR-120 — DES elements owed to architect (incl. FR-117 capability-absence obligation)
- SC-13, SC-14 — carry-forward, Doc 03 design change owed
- OI-17 — carry-forward, governance constants to architect (Tomás Ferreira)

## Open items after this session

| Item | Status | Must close before |
|------|--------|-------------------|
| Doc 03 v2 — amendment boundary, Tier-2 super-process numbers, SC-13/SC-14, OI-17 constants, DES FR-114..FR-120 | OPEN — architect (Ravi Deshmukh) | Doc 03 v2 produced |
| OI-01-NUM — activation threshold percentage | OPEN | First petition opens above dev |
| OI-04-PILOT — pilot jurisdiction name and eID rail | OPEN | Enrolment requirement implemented |
| FORK-CRIT — fork initiation calldata vulnerability; `fork` flag OFF above dev | OPEN critical | Gate 2 / `fork` flag enabled above dev |
| SC-05 — rate-limit on recovery re-initiation | OPEN | Doc 03 v2 specification |
| Gate 2 | OPEN / NOT READY | 2027-05-14 (MS-13) |

## Gate state

- Gate 1: **APPROVED unconditionally** 2026-08-11 (condition satisfied by Doc 02 v2.1.1 PASS).
- OI-18: **DECIDED** 2026-08-11. No remaining open items block the design phase.
- Gate 2: **OPEN / NOT READY** — RTM has open Must rows; audits and ceremonies not started.

## Next role

Architect (Ravi Deshmukh) — Doc 03 v2 covering: FR-118/FR-119 amendment boundary + Tier-2
super-process numbers with rationale; SC-13/SC-14 trust-anchor governance design (FR-112/FR-113);
OI-17 governance constants; DES elements for FR-114..FR-120 (incl. FR-117 capability-absence
obligation); full FR/NFR/RISK coverage per the VEKTOR SOP.
