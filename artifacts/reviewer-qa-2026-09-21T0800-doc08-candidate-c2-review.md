# reviewer-qa session note — 2026-09-21T0800 — Doc 08 RTM v2.14.0, neutral technical review, cycle 2 of 5

```
Role:       reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, not the owning role
Document:   docs/08-traceability-matrix.md v2.14.0 (owner: tester, Ji-woo Park)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md (PM-recorded before dispatch)
Answers:    artifacts/reviews/08-traceability-matrix-v2.13.0-technical-cycle1.md (FAIL 87%, 0C/2H/3M/3L)
Wrote:      artifacts/reviews/08-traceability-matrix-v2.14.0-technical-cycle2.md
            this note
Did NOT:    edit any document, any test, any product code, or artifacts/memory-index.json
            (this note's path was pre-registered by the project-manager)
Verdict:    FAIL — Score 94%, 0 Critical / 0 High / 2 Medium / 2 Low, cycle 2 of 5
```

## 1. What I did

Independent re-verification, not a re-read. I wrote my own marker counter over §3.1/§3.2/§3.3,
diffed the live file against the PM's pre-application backup of v2.13.0, re-ran the tester's
published greps and scans myself, re-ran the suite and the hook audit, and read the implementing
`it`s in the test files for every case newly added to a closed Must row.

**Evidence produced this session**

- `npm test` from the repo root: **739 / 739, exit 0** — contracts 95 · protocol 178 · sdk 287 ·
  ui 25 · indexer 16 · web 138 (95+178+287+25+16+138 = 739).
- `npm run lint:deps`: **clean**, 7 workspace packages, layering OK.
- `node hooks/run_gates.cjs --audit`: **derived 138 Must rows, 19 COMPLETE, 119 OPEN** against
  **published by §9: 19 COMPLETE, 119 OPEN** — the two independent signals **AGREE**. Doc 07
  v2.11.0 and Doc 08 v2.14.0 both block the review loop (expected: cycle 2 of 5 for each).
- `npm audit`: 11 findings, all dependency-tree, **unchanged** — no lockfile change this session.
- Marker derivation (my own script): §3.1 **114 / 19 / 95**; §3.1 pre-v2.0.0 block **54 / 14 / 40**;
  §3.2 **24 / 0 / 24**; §3.3 **23 / 5 / 18**; **rows carrying both a ✅ and a ☐ = 0**.
- Diff vs `scratchpad/08.v2130.bak`: **15 changed regions**, all inside the changelog's sixteen-site
  enumeration; §10 genuinely unchanged (site 16). No residue, 0 CRLF, no duplicated tail.
- Column/marker check on touched rows: FR-036 / FR-037 / FR-081 / FR-085 = **8** columns, FR-038 =
  **6**, §7 entry 17 = **6**, rule 4a = **2**, the four new §8 rows = **2**; **exactly one status
  marker** each.
- `it`-per-`describe` count over the four candidate test files: **27 / 43 / 7 / 20 = 97**, matching
  the new §4 v2.13.0 sweep block for block.
- FR-037 extent scan re-run: **5 files**, matching-line counts **17 / 8 / 1 / 2 / 2**, exactly as
  published; `packages/protocol`, `services/indexer` and all other `apps/web` routes return nothing.
- Flag posture: `ELECTIONS` `{dev:true, staging:true, prod:false}`; `ENROLMENT_UI`
  `{dev:true, staging:false, prod:false}` — the drop still ships dark, rollback is a flag flip.

## 2. Verdict and why

**All eight cycle-1 issues were taken; six are FIXED outright, one (ISS-05) is PARTIALLY fixed, and
ISS-01's substance is fixed while its self-description is not.** FAIL on two new Mediums, both of
the same shape — **a statement this version makes about its own fixes that does not hold**:

- **ISS-C2-01 (Medium).** The `Source:` block's `TC-TRUMOCRACY (` group is **still unclosed**
  (L565: 7 open parens, 5 close; one excess is a deliberate backticked literal). The truncation is
  genuinely repaired and the pin genuinely advanced to Doc 07 v2.11.0 — but three places (the
  inline annotation, the Status, the Changelog) assert the parenthesis was closed, naming the exact
  group. Sibling pins on L563/L564 balance 12/12 and 3/3.
- **ISS-C2-02 (Medium).** The ISS-01 sweep is published as a falsifiable enumeration —
  "a grep for the stale trio (`16 complete` / `98 open` / `122 open`) returns 15 hits" — and **it
  does not reproduce**. Against the v2.13.0 baseline that grep returns **9 lines / 13 occurrences**
  case-sensitively, **11 / 17** case-insensitively. Two of the three "LIVE" sites (L2110
  "12 complete · 42 open", L2248 "4 complete · 19 open") and one "historical" line (L858, "122 Must
  rows stay open") contain none of the three strings; **L2596 is a real hit and is unenumerated**.
  The underlying work is right — I derived all four subtotals and swept the live file myself, and
  **no live stale figure survives** — but the device offered so a reader need not trust the author
  is itself unreproducible.
- **ISS-C2-03 (Low).** Rule 4a limb (i) names three SDK `UT`s "at that site" while limb (ii)
  enumerates five files; `CandidateSelection.tsx` and `page.tsx` are unaccounted for in limb (i).
  Substance verified by me (UT-0904/TC-3614 is the web-surface absence test; the fixture and the
  i18n label copy hold nothing) — a prose precision gap, not a closure gap.
- **ISS-C2-04 (Low).** The rework spec's post-transcription checklist predicts 0 hits for
  "Thirteen stories were checked"; the true figure is 2 (both self-quoting). Harmless in the
  document; recorded because the spec is the transcription contract.

## 3. Merge sign-off (RACI: I am A for "RTM complete (zero gaps)" and for "Merge to trunk")

**I would now sign all three closures — FR-036, FR-037, FR-085.** At cycle 1 I refused FR-036; at
cycle 2 I would defend it. Every clause of Doc 02 FR-036 (L895) now carries a case **on the row**
(TC-3598/TC-3600 matured · TC-3601 self-only · TC-3597/TC-3600 region · TC-3602 published +
**TC-3606** gating · **TC-3605** withdrawal), each with a real implementing `it` I read in
`packages/sdk/test/candidates.test.js`, and Doc 07 v2.11.0's `TC-3605` now names **FR-036** and
**US-0046**, so the backward trace resolves on both sides. FR-037 signs under the newly written
`Completion rule 4a`, whose extent scan I reproduced to the line. FR-085 is unchanged and was
verified at cycle 1.

**This is a sign-off on three row closures, not a Gate-2 sign-off.** Gate 2 is **NOT MET** and this
document says so correctly: **119 of 138 Must rows are open**. The RTM zero-gap criterion is a
Gate-2 readiness condition certified by the project-manager with `node hooks/run_gates.cjs --gate2`.

## 4. Open items / routing

1. **Doc 08 rework cycle 3 of 5 → tester.** A **PATCH (v2.14.1)** suffices: no row, ruling, status
   or count moves. MINOR only if the tester takes ISS-C2-03 by routing the absence-scan `it`.
2. **Doc 07 v2.11.0 is also FAIL (94%, 1 Medium)** — reviewed by me in the same session
   (`artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md`). Its Medium is a change
   record omission, **not** a wrong change; **no Doc 08 row or figure moves on it**.
3. **Engineer (standing, unchanged):** the FR-037 absence-scan `it` (owed hardening under 4a, not a
   condition of the closure); the `NOMINATION_ENDORSEMENTS_MIN` value pin and its stale "flagged for
   ratification" `it` title; a stronger `UT-0902` own-property enumeration.
4. **Tester (standing):** `TC-3540` promotion to Pass (obs.) at the next synchronised Doc 07/08
   touch; `TD-RTM-02`'s four-way denominator recount.
5. **Project-manager:** two FAIL verdicts to carry into the Gate-2 packet; both documents remain
   blocking in `--audit` until a passing report exists for their current versions.

## 5. IDs touched (read/verified, none written)

`FR-036`, `FR-037`, `FR-038`, `FR-039`, `FR-065`, `FR-066`, `FR-067`, `FR-078` (referenced),
`FR-081`, `FR-085`, `FR-093`, `FR-107`, `FR-131`, `FR-132` ·
`TC-0028`, `TC-0029`, `TC-3407`, `TC-3411`, `TC-3476`, `TC-3540`, `TC-3592`..`TC-3619` (esp.
`TC-3597`, `TC-3598`, `TC-3600`, `TC-3601`, `TC-3602`, `TC-3605`, `TC-3606`, `TC-3614`, `TC-3615`,
`TC-3616`) ·
`UT-0750`, `UT-0871`, `UT-0891`..`UT-0907` (esp. `UT-0894`, `UT-0896`, `UT-0897`, `UT-0898`,
`UT-0900`, `UT-0901`, `UT-0904`) ·
`US-0046`, `US-0047`, `US-0048`, `US-0049`, `US-0050`, `US-0091`, `US-0095`, `US-0132` ·
`DES-007`, `DES-027`, `DES-028`, `DES-095`, `DES-097`, `DES-107`, `DES-108` ·
`BR-004`, `BR-009`, `BR-013`, `BR-016` · `CON-015` · `R-21`, `R-22` ·
**`Completion rule 4a`** (verified, not authored) · `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-05` ·
new review ids **`ISS-C2-01`**..**`ISS-C2-04`**.

---

## 6. Post-review addendum — SubagentStop hook block, recorded and NOT cleared by me

My stop was blocked by `hooks/run_gates.cjs` (review-loop invariant (c)). **This is the correct
behaviour and I did not act to clear it.** I did not author a passing report for either document:
reviewer assignment is the project-manager's decision, recorded before dispatch, and a report
written to clear one's own stop does not count as a cycle.

**The block as delivered named two documents; re-running `--audit` now shows only one.**

```
PASS   07-test-cases-suites.md v2.12.0 (technical) <- 07-test-cases-suites-v2.12.0-technical-cycle3.md
BLOCK  08-traceability-matrix.md v2.14.0 (technical) - report exists but fails the bar
Documents blocking the review loop: 1   [PER-STOP - invariant (c)]
RTM: derived 138 Must / 19 COMPLETE / 119 OPEN; published by section 9: 19 / 119; signals AGREE
```

- **Doc 07 v2.12.0 — no longer blocking.** The hook message I received was a stale snapshot; the
  cycle-3 report on disk carries a single metadata block reading **Score 97%, C=0 H=0 M=0 L=2,
  Verdict PASS**, and `--audit` now reads it as PASS. Nothing is owed here by me.
- **Doc 08 v2.14.0 — still blocking, by my own FAIL verdict, which is the loop working.** Only the
  **tester** can clear it: rework to **v2.14.1** (a PATCH suffices — neither Medium moves a row,
  ruling, status or count), then the **project-manager** dispatches **cycle 3 of 5** to a neutral
  reviewer. I am at 2 of a cap of 5 cycles on this document; three remain before ESCALATION to a
  human.

**Two things for the tester's v2.14.1 and the project-manager, found while recording this block:**

1. **The Doc 08 Source pin is now one version stale, and the fix lands on the same line as
   ISS-C2-01.** Doc 08 v2.14.0 pins `TC-TRUMOCRACY v2.11.0`; Doc 07 is now at **v2.12.0** with a
   **PASSING** cycle-3 review. The unclosed `TC-TRUMOCRACY (` group and the pin advance are the
   same site (L565), so both should be taken in one op rather than two.
2. **Doc 08's FR-036 closure is undisturbed by the Doc 07 advance — I checked rather than assumed.**
   `TC-3605` (L2640) still reads `US-0095, US-0046 · FR-085, FR-107, FR-081, FR-036 · DES-028 rule 6
   · DES-027 rule 6` and `TC-3606` (L2641) still reads `US-0076, US-0048 · FR-066, FR-036`. The
   backward trace that ISS-02 was raised on still resolves on both sides, so **my merge sign-off on
   FR-036, FR-037 and FR-085 in §3 above stands unchanged**.
3. **Minor, for the owning role:** Doc 07 v2.12.0's header still reads `Status: In Review — v2.12.0
   … Rework cycle 3 of 5` although its review PASSED. On PASS the owner sets `Status: Approved`.
   The hook reads the report rather than the status line, so nothing is blocked by it — but the
   document currently describes itself as under a review it has cleared.

**Stopping here.** No document, test, product code or `artifacts/memory-index.json` was touched at
any point in this session.
