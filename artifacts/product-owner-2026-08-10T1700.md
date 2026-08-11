# Product Owner Session Memory — 2026-08-10T17:00

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-10T17:00:00Z
Phase:      Vision · Define — v2.0.0 FR pass (pass 3 of 4)
Product:    Trumocracy
Document:   docs/02-requirements-srs.md v2.0.0 (in progress)
```

## What was done

Pass 3 of 4 on Doc 02 v2.0.0. All assigned edits completed in nine surgical Edit calls (one per response per hard-work rule).

### FR sections appended (§4.29–§4.38)

Ten new subsections written and appended after §4.28, before `## 5.`:

| Section | FR IDs | Notes |
|---------|--------|-------|
| §4.29 Financial transparency & anomaly detection | FR-096 | anomaly detection: informs, never freezes/blocks |
| §4.30 Conflict-of-interest disclosure & recusal | FR-097, FR-098 | public disclosure + investigation-only review |
| §4.31 Independent internal audit | FR-099 | per-case sortition, no standing body, read-only |
| §4.32 Dispute resolution with defined timelines | FR-100, FR-101 | per-stage timelines; sortition panels; outputs are recommendations |
| §4.33 Explicit member rights | FR-102 | machine-readable charter; platform floor non-reducible |
| §4.34 Conduct votes, removal & expulsion | FR-103, FR-104, FR-105 | OI-15 ⚠ banner at FR-105 (Supporter expulsion impossible) |
| §4.35 Data classification & append-only lifecycle | FR-106, FR-107, FR-108 | three-class system; nothing deleted except OI-16 carve-out; public record discipline |
| §4.36 Transparency dashboard & performance scorecard | FR-109, FR-110 | aggregate-only; informs, does not conclude |
| §4.37 Behavioural-analytics prohibition | FR-111 | Must; UT-0525/UT-0740 preserved and extended |
| §4.38 Trust-anchor lifecycle governance | FR-112, FR-113 | §4.38 preamble cites SC-13/SC-14; member-vote governance; expedited emergency variant |

Total new Must FRs this pass: **18** (FR-096..FR-113).

### FR-050 amended

- §4.13 FR-050: Priority changed Should → **Must**; note appended: `_(v2.0.0: raised to Must per BR-019 — financial transparency is now a business requirement, not an enhancement.)_`

### Register additions

| Register | IDs minted |
|----------|-----------|
| §6 NFR | NFR-027 (Privacy — no behavioural telemetry), NFR-028 (Data lifecycle — append-only) |
| §9.1 CON | CON-013 (non-violence founding principle), CON-014 (platform ≠ legal registration) |
| §9.3 TD | TD-08 (no telemetry vs observability), TD-09 (Worker permanence vs recruitment), TD-10 (political neutrality vs non-violence clause) |
| §10 RISK | RISK-25..RISK-30 (public-tier disclosure/targeting; analytics prohibition/UX; committee soft power; conduct votes weaponised; non-violence clause scope creep; trust-anchor governance latency) |
| §13 OI | OI-14 (proposal authorship vs Supporter anonymity; Gate 1 decision), OI-15 (Supporter expulsion impossible; Gate 1 decision), OI-16 (append-only vs withdrawal-destroys-data; Gate 1 decision), OI-17 (governance constants for Design phase) |
| §13 notes | SC-13/SC-14 carry-forward status (resolved in principle by FR-112/113; Doc 03 design change owed after Gate 1); fork-initiation carry-forward status (unchanged) |

## OI-15 banner placement

The ⚠ OI-15 banner appears immediately after the FR-105 table row in §4.34, before §4.35 begins.

## ID discipline verification

| Namespace | Minted | Range |
|-----------|--------|-------|
| FR | 18 | FR-096..FR-113 |
| NFR | 2 | NFR-027..NFR-028 |
| CON | 2 | CON-013..CON-014 |
| RISK | 6 | RISK-25..RISK-30 |
| TD | 3 | TD-08..TD-10 |
| OI | 4 | OI-14..OI-17 |

No gaps, no renumbering, no collisions with prior sessions.

## High-water marks after pass 3

- BR: BR-020 (unchanged)
- FR: FR-113
- NFR: NFR-028
- CON: CON-014
- RISK: RISK-30
- TD: TD-10
- OI: OI-17

## Sections NOT touched this pass (reserved for pass 4)

- §8 Gherkin (acceptance criteria blocks for new Must requirements)
- §11 counts (MoSCoW table and totals)
- §12 Traceability (v2.0.0 BR↔FR trace additions)
- §14 Glossary (new terms from v2.0.0)

## New contradictions noticed (surfaced, not resolved)

1. **FR-102 vs FR-053 fork right for Supporters:** FR-102 lists fork (FR-053) as a member right in the machine-readable charter, but FR-053 is a Could-priority feature and the fork-initiation calldata vulnerability is unresolved. If FR-102 is Must and FR-053 is Could, the rights charter promises something not yet delivered at Gate 2. This is a priority-tension, not a logical contradiction — the rights charter should note the feature flag status. Recommend recording as a Low issue in the §4.33 area but not a new OI; pass-4 may address.

2. **RISK-25 vs NFR-024 overlap:** RISK-25 mitigation references NFR-024 (harassment-rate metric). NFR-024 is already a mitigation for RISK-28 (conduct votes weaponised). The shared mitigation is intentional and not a contradiction, but the reviewer should note the coupling.

3. **OI-17 governance constants scope vs OI-08:** OI-17 mints a new Design-phase open item for governance constants introduced in v2.0.0. OI-08 covers the existing governance constants (maturation period, dwell, timelocks, recall bars, grace, cooldowns). Pass-4 should confirm whether OI-17 extends OI-08 or is correctly a separate item. No change made here — kept distinct per the task instruction.

## Open items after this pass

- Pass 4 (consistency pass) still outstanding: §8 Gherkin for new Must FRs, §11 counts, §12 traces, §14 Glossary.
- OI-14, OI-15, OI-16 require Gate 1 decisions from Rathish.
- OI-17 constants set in Design by architect/Tomás Ferreira.
- SC-13/SC-14 design change owed from architect after Gate 1.
- Doc 02 v2.0.0 requires business-mode document-review after pass 4 completes.
- FR-050 priority change from Should → Must: §11 count tables will need updating in pass 4 (one FR moves from Should to Must).

## Memory protocol compliance

- This file written to artifacts/product-owner-2026-08-10T1700.md
- memory-index.json entry appended (id: product-owner-2026-08-10T1700, distinct from project-manager-2026-08-10T1700)
