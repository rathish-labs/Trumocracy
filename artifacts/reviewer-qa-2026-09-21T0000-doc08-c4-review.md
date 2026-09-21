# Session memory — reviewer-qa (Rafael Duarte) — Doc 08 v2.12.3, cycle 5 of 5 (the cap)

```
Role:        reviewer-qa (neutral technical reviewer; NOT the owning role)
Date:        2026-09-21T00:00 (session dated 2026-09-20)
Branch:      build/v1-debt-closure
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md
Skill:       document-review (technical mode)
Output:      artifacts/reviews/08-traceability-matrix-v2.12.3-technical-cycle5.md
Verdict:     PASS 97% — 0 Critical / 0 High / 0 Medium / 2 Low
```

## What I did

Reviewed **Doc 08 Traceability Matrix v2.12.3** at **cycle 5 of 5 — the cap**. A FAIL would have
become **ESCALATED**; it did not. The version **PASSES** and the loop closes with a PASS, so no human
escalation decision is required. A prior instance of this review was killed by a rate limit and left
nothing on disk; I started fresh.

Every load-bearing claim was **re-derived mechanically**, not accepted:

- **Reconstructed two prior states** by reverse-applying the nine cycle-4 operations
  (`artifacts/tester-2026-09-20T2300-doc08-c4-spec.md`) to reach v2.12.2 and the nine cycle-3
  operations (`artifacts/tester-2026-09-20T2100-doc08-c3-spec.md`) to reach v2.12.1. **All eighteen
  REPLACE blocks matched exactly once.** Line totals 2173 / 2298 / 2489.
- **The boundary method and its three-state table hold exactly.** v2.12.1 §6 1888 · §7 1934 · §8
  2108; v2.12.2 §6 2013 · §7 2059 · §8 2233 (and the full ten-heading list); v2.12.3 §6 2204 · §7
  2250 · §8 2424. Line 1930 was inside §6 at v2.12.1 and 2055 inside §6 at v2.12.2 — the cycle-3
  Medium stands as ruled and is now correctly recorded.
- **The tester's second-order catch against my own cycle-3 wording is CORRECT.** The by-reason table
  is at line 1848 in the SUMMARY block; §1 starts at 1882. My proposed phrase "§6's ... by-reason
  figures" would have planted a second boundary error inside the fix for the first. The tester
  checked it against the file instead of copying it.
- **v2.12.2 footprint:** ten changed lines in three regions (metadata 3–1512 = eight · §6 one · §9
  one); §6 minus the DoD line **byte-identical by md5 over 45 lines**; the one changed §6 line a
  **pure insertion** (one word-level hunk, **67 tokens added, 0 deleted**).
- **v2.12.3 footprint:** exactly nine changed original lines (5, 6, 47, 64, 503, 513, 531, 532, 2274)
  plus two inserts. **§1–§8, §10 and the whole SUMMARY block are byte-identical** to v2.12.2.
- **ISS-03 bridge:** ran the published P1/P2/P3 and five-places commands at all three states —
  14/13, 34/24, 18, 3 · 18/16, 50/34, 23, 6 · 18/16, 50/34, 23, 7. **All twelve figures reproduce.**
- **Frozen figures:** 138 · 16 · 122 (both signals agree) · 114 · 16 · 98 · 142/134/17/125 ·
  500/500/245 (136 inh · 109 obs)/255 · by-reason 47+13+9+5+6+4+5+34 = 123 vs 122 distinct ·
  245+15+233 = 493 · Gate-2 six rows six FAIL · FR-131/FR-132 open G-PHASE3 · NFR-023 unedited,
  G-UI, Complete 0 · open markers 152 · complete markers 26 · distinct TC ids 419.
- **Suite re-run by me:** npm test exit 0 — 95 · 151 · 244 · 18 · 16 · 116 = **640/640**. R-20
  stands; no R-21 minted (two disclaimer mentions, three SCR-21 substrings).
- **Security scan:** secret/credential scan over the Doc 08 diff clean; no product, test, build or
  configuration path modified; npm audit 9 pre-existing vulnerabilities (1 critical, 4 high) —
  unchanged by this version, out of scope for Doc 08, and already reflected in its Gate-2 audit row.
- **Self-check:** `node hooks/run_gates.cjs --audit` now reports **0 documents blocking the review
  loop** — all ten governed documents PASS, Doc 08 v2.12.3 matched to this report.

## Decisions made

1. **PASS at 97%, 0C/0H/0M/2L.** The cycle-3 Medium is discharged at the method level, not the
   sentence level. Nothing that survives reaches Medium.
2. **I deliberately did not manufacture a Medium to avoid the appearance of rubber-stamping the
   cap**, and did not soften one to reach a PASS. Reasoning recorded in §6.10 of the report.
3. **ISS-01 (Low)** — the ISS-03 bridge's deep-reconstruction path (a) names the cycle-3 spec as the
   input "to this file"; three of its nine operations return zero matches against v2.12.3. The
   correct recipe is a composition (cycle-4 spec first, then cycle-3). Held at Low because the
   failure is loud, no figure is wrong, the missing artifact is named two lines later, and the
   remedy ISS-03 actually required (per-state result table) works. **Carried to the tester's next
   Doc 08 touch; does not warrant opening a version.**
4. **ISS-02 (Low)** — the document says "Rework cycle 4 of 5" while the loop dispatched this review
   as cycle 5 of 5. The tester's counter is consistent with its three predecessors; the cycle index
   is the PM's. **Routed to the project-manager, not the tester.**
5. **Did not reopen** the FR-132 claim-family sweep (closed by my own cycle-3 ruling), Doc 07 v2.9.0,
   Doc 03 v2.14.1 or Doc 04 v1.7.1.

## Open items handed on

| Item | Owner | Note |
|---|---|---|
| **SECURITY.md pin v2.11.3 -> v2.12.3** | project-manager | **NOW DUE.** The debt register's SECURITY.md ISS-03 said: advance the pin only after the Doc 08 lineage Approves, and **"if it Approves and the pin is not advanced before the session closes, re-raise as Medium."** It has now Approved at v2.12.3 |
| ISS-01 (bridge composition clause) | tester | Carried Low, next Doc 08 touch |
| ISS-02 (cycle-counter convention) | project-manager | Carried Low, next lineage |
| SECURITY.md ISS-01 (`--audit` overclaim; provenance in CLAUDE.md) | technical-writer + human | Pre-existing accepted Low |
| 122 open Must rows; Gate-2 six-row FAIL; TD-RTM-01/02/03/04 | out of scope | **Doc 08 cannot support a Gate-2 sign-off at any version until these close.** This loop was about honesty, not closure |
| npm audit: 1 critical / 4 high (production deps) | engineer / sre | Pre-existing; standing Gate-2 blocker, already recorded in Doc 08's Gate-2 audit row |

## IDs touched

Reviewed (no edits — reviewer-qa writes nothing to `docs/`): **Doc 08 v2.12.3**. Referenced:
FR-131, FR-132, NFR-023, NFR-007, US-0133, US-0134, TC-3576, TC-3577..TC-3591 (esp. TC-3586),
TC-2425, DES-085, DES-094, DES-096, DES-098, DES-100, G-PHASE3, G-TRACE, G-UI, R-18, R-19, R-20,
TD-RTM-01..04, OPEN-27, OPEN-30. **No ID minted, retired or re-statused by me.**

## Scope kept

I wrote **only** this note and the review report. **I did not open or edit
`artifacts/memory-index.json`** (pre-registered by the PM). I edited no document, no test and no
product code. Cycle-5 report path and `Cycle: 5 of 5` field both as dispatched.
