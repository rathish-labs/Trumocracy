# reviewer-qa session note — 2026-09-21T1000 — Doc 07 v2.12.0, technical review cycle 3 of 5

```
Role:       reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, not the owning role
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md
            (PM-assigned and recorded BEFORE dispatch; tester excluded as owner)
Reviewed:   docs/07-test-cases-suites.md v2.12.0 (technical mode), rework cycle 3 of 5
Against:    artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md (FAIL 94%, 0C/0H/1M/3L)
Wrote:      artifacts/reviews/07-test-cases-suites-v2.12.0-technical-cycle3.md
            this note
Did NOT:    edit any document, product code, test, configuration or memory-index.json.
            (The note path was pre-registered by the PM; I did not open the index.)
VERDICT:    PASS — 97%, Critical 0 / High 0 / Medium 0 / Low 2
```

## 1. What I did

Reviewed Doc 07 v2.12.0, the tester's rework of the cycle-2 FAIL. Re-ran the suites, the dependency
lint, a secret scan and the gate audit, and — the decisive check — **diffed the live file against
the PM's pre-application backup of the v2.11.0 text** rather than reading the document's account of
itself.

## 2. The finding that decided the verdict

The cycle-2 Medium was a **site count published over an incomplete basis**: v2.11.0 claimed
"thirteen sites" over a fourteen-site diff, and the unenumerated fourteenth was the cross-document
one (`TC-3605` gaining FR-036 / US-0046 / DES-027 rule 6, the Doc 08 FR-036 withdrawal fold).

**v2.12.0 fixes it at the root and the fix survives a diff.** `diff -u` against
`scratchpad/07.v2110.bak` (2568 lines to 2664) yields **exactly 7 hunks**, and **all 7 map to the
8 operations the change record enumerates over 6 sites**:

| Hunk | Op(s) | Enumerated site |
|---|---|---|
| header Version + new Status | 1, 2 | (1) the header |
| v2.11.0 Status record carried-Lows line | 6 | (4) |
| new v2.12.0 Changelog entry | 3 | (1) the header |
| v2.11.0 Changelog site enumeration | 4 | (2) "thirteen" to "fourteen" |
| v2.11.0 Changelog carried-Lows line | 5 | (3) |
| §0.1 Pass (obs.) row | 7 | (5) R-22 added |
| §5.5 `TC-3540` *Verifies* | 8 | (6) per-seam map |

**No N+1th site.** The v2.11.0 entry now reads **fourteen** with site (14) named, attributed to the
Doc 08 cycle-1 ISS-02 (High) fold, and the Status block declares that the cross-document fold rides
in v2.11.0 and names Doc 08 **v2.14.0** as its other half. **I verified the other half exists** —
Doc 08 L2224, FR-036's row cites `TC-3605`, `TC-3606`, `UT-0897`, `UT-0898`, status COMPLETE.

## 3. Cycle-2 issues — all four FIXED

| Cycle-2 ID | Sev | Disposition | Evidence |
|---|---|---|---|
| ISS-01 | Medium | FIXED | "fourteen sites" = 1 hit; "thirteen sites" = 1 hit and it is the v2.12.0 Status *quoting* what it corrects (zero live uses); site (14) names FR-036 / US-0046 / DES-027 rule 6; Doc 08 v2.14.0's half confirmed present; **diff has 7 hunks and all 7 are enumerated** |
| ISS-02 | Low | FIXED | `TC-3540` per-seam map. `IProposalStore` to FR-090 · US-0100 · DES-104 resolved independently: Doc 02 L1050, Doc 05 L3195 / L3962 / L205. Row still 7 columns, status still Pass (inh.) |
| ISS-03 | Low | FIXED | "run series that reaches" = **0** hits; header is "the runs behind the 139"; R-22 listed as the `UT-0871` block, 3 `it`s, "earns nothing — promotion deferred", with the reason and the consequence stated. Agrees with §8 L1870 and §9's R-22 row |
| ISS-04 | Low | FIXED | Ordinal dropped at both sites; the 3 surviving mentions (L46, L124, L520) are all quotations inside v2.12.0 annotations. **Zero live uses.** Replaced by the touch list v2.10.0 / v2.11.0 / v2.12.0 |

## 4. New Lows (do not block; owed at the next touch)

- **ISS-01 (Low, T6) — edit residue this version introduced.** OP 6 closed a bold span at
  "…by ordinal**" but left the original closer on the following line, so L125's `quiet:**` is an
  **orphaned bold-close marker**. Proven mechanically: the header fenced block's `**` count is
  **1632 (EVEN)** in the backup and **1907 (ODD)** now — exactly one unmatched marker. Harmless in
  rendering (the header is inside a fence, so `**` is literal) and it falsifies nothing, hence Low.
- **ISS-02 (Low, T5) — "6 sites" still needs one unstated step to reconcile with 7 diff hunks**, and
  "site" is used at two granularities in one list (site (1) = three locations; site (4) = one line
  inside site (1)'s own `Status` field). Nothing is omitted, so this is NOT the cycle-2 defect
  recurring — it is the last unstated step of an otherwise fully published derivation.

## 5. Independent verification performed (evidence)

- `npm test` at the repo root: **739 / 739 passed, 0 failed, exit 0** — contracts 95 · protocol 178 ·
  sdk 287 · ui 25 · indexer 16 · web 138.
- `npm run lint:deps`: "7 workspace package(s) checked — layering OK", exit 0.
- **R-22 reproduced case by case**: `npx vitest run test/sdk-types-sync.test.ts --reporter=verbose`
  in `apps/web` gives **3 passed / 3**, the three `it`s being `IPartyStore`, `IProposalStore`,
  `ICandidateStore`, names matching the document's quoted template verbatim.
- `node hooks/run_gates.cjs --audit`: **138 Must rows, 19 COMPLETE, 119 OPEN**, published and derived
  signals **AGREE**. **No ruling moved.** After this report the audit shows Doc 07 v2.12.0 **PASS**;
  Doc 08 v2.14.0 remains blocking on its own cycle-2 report (not mine).
- **Nothing moved:** §2 and §10 are **byte-identical** to the v2.11.0 text (11210 / 14491 bytes).
  §2 sums to **521 / 290 / 231**, every row satisfies designed = automated + blocked/no-mechanism
  (zero mismatches). 139 obs · 136 inh · 15 not-run · 177 Blocked · 46 no-mechanism · 12 Manual ·
  0 failures — all unchanged.
- **Transcription integrity:** 8/8 OPs present exactly once; 0 `FIND:` / `REPLACE WITH` markers,
  0 four-backtick fences, 0 conflict markers, 0 trailing-whitespace lines, 0 CRLF (pure LF), BOM
  unchanged. `TC-3540` still 7 columns; §0.1 Pass (obs.) row still 2 columns.
- **Security:** secret scan over the changed document = 0 hits. Working tree has **no product code,
  test or configuration change** (only `artifacts/memory-index.json` and Docs 03 / 07 / 08 modified).
  `npm audit` = 11 vulnerabilities (1 critical · 4 high · 5 moderate · 1 low); no lockfile or
  `package.json` changed this session and the critical/high figures are unchanged from the standing
  record — a **pre-existing Gate-2 item routed to engineer / sre**, not a Doc 07 defect.

## 6. The cross-document obligation I hunted and cleared (recorded so it is not re-opened)

v2.12.0 itself adds **four** ids to a *Verifies* cell (`FR-090`, `US-0100`, `FR-036`, `US-0046` into
`TC-3540`) while claiming "Doc 08 is untouched" — the exact pairing whose undeclared half was the
cycle-2 Medium. **It does not recur.** Doc 08's evidence column is not exhaustive over Doc 07's
*Verifies* cells; it cites the cases that close each clause. Controls:
`FR-122` has been in `TC-3540`'s cell since v2.11.0 and Doc 08's FR-122 row (L2316) does **not**
cite `TC-3540`; `FR-090`'s row (L2281) is already **COMPLETE** on eight clause-closing cases; and
`FR-036`'s row (L2224) closes on `TC-3605`/`TC-3606`, not on a shim test. **All three seam chains
resolve in the RTM and all three rows are COMPLETE** — FR-013 (L2369), FR-090 (L2281), FR-036
(L2224). Nothing is owed to Doc 08 by this version.

## 7. Decisions made

1. **PASS at 97%** — score >= 95 and zero Critical/High/Medium. The tester sets `Status: Approved`
   on Doc 07 v2.12.0 and the SOP advances.
2. **Both new findings classified Low, deliberately.** Neither falsifies a figure, id, ruling,
   status or claim; one is cosmetic residue inside a fenced block, the other is an unstated
   reconciliation step in a derivation that is otherwise complete and omits nothing.
3. **Two things considered and NOT raised**, recorded so a later cycle does not chase them: the mild
   tension in "the runs behind the 139" listing R-22 (which my own cycle-2 ISS-03 sanctioned as one
   of two acceptable fixes), and the v2.11.0 annotation's self-dated v2.12.0 forward reference.
4. **`TD-RTM-02` is untouched, not re-found.** My raw TC-row scan (519 anchors / 125 Pass (obs.))
   reproduces the known four-way denominator disagreement against §2's 521 / 139. Tracked debt.

## 8. Open items

1. **Doc 08 v2.14.0 cycle-2 review** — a report now exists and the hook reports it as failing the
   bar. It is **not mine** and is not re-scored here; the assigned reviewer owns that verdict.
2. **architect (Doc 04 §14)** — re-narrow the `TS-V1-*` floor to `TC-3620`. Standing since cycle 1;
   Doc 07 has recorded and routed it. Unchanged.
3. **Doc 07 Lows owed at the next touch:** this cycle's ISS-01 (orphaned `**` at L125) and ISS-02
   (hunk-count reconciliation / single-granularity "site"), plus the carried v2.9.0 ISS-02 (missing
   §10 separator) and ISS-04 (clause-(e) surface-vs-claim framing).
4. **`TC-3540` promotion to Pass (obs.)** still owed at the next synchronised Doc 07/08 touch — R-22
   evidence is recorded and I endorse the deferral (`TD-RTM-02`: do not move half a synchronised
   pair).

## 9. Gate-2 position (unchanged, stated for the record)

**Gate-2 traceability criterion: NOT MET.** `node hooks/run_gates.cjs --audit` reports **138 Must
rows, 19 COMPLETE, 119 OPEN**, the two independent signals AGREE. **Merge sign-off is not at issue
in this cycle** — the code under test is already merged at `12fe4a6` (PR #22) under the Doc 06
v2.11.1 review, and this cycle reviewed a **document**; no product code, test or configuration
changed. **Gate-2 sign-off remains withheld** on the 119 open Must rows and on the standing
`npm audit` 1 critical / 4 high — neither is a Doc 07 defect, and both route to the project-manager
(Gate-2 packet) and to engineer / sre respectively.

## 10. IDs touched (read or verified, none written)

`TC-3540`, `TC-3539`, `TC-3605`, `TC-3606`, `TC-3612` · `UT-0871`, `UT-0894`, `UT-0896`, `UT-0897`,
`UT-0898` · `FR-013`, `FR-036`, `FR-090`, `FR-122` · `US-0021`, `US-0046`, `US-0100`, `US-0133` ·
`DES-027 rule 6`, `DES-097`, `DES-104`, `§10.13.14 seam table` · `R-21`, `R-22` · `TD-RTM-02`,
`TD-07-03`. **No id minted, retired, reused or renumbered — I write nothing but this note and the
review report.**

## 11. SubagentStop review-loop block — recorded, NOT cleared by me

At session exit the `SubagentStop` hook (`hooks/check_gates.py` via `hooks/run_gates.cjs`) blocked
with one entry:

```
- 08-traceability-matrix.md v2.14.0 (technical review) — report EXISTS
  (08-traceability-matrix-v2.14.0-technical-cycle2.md) but does not satisfy the gate:
  Verdict=FAIL, score=94% C=0 H=0 M=2
```

**This is the loop working, and it is not mine to clear.** Recorded and left standing:

1. **My assignment was Doc 07 v2.12.0 only** — `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`,
   dispatched by the project-manager for **cycle 3 of 5** of Doc 07. I delivered that report
   (`artifacts/reviews/07-test-cases-suites-v2.12.0-technical-cycle3.md`, **PASS 97%, 0C/0H/0M/2L**),
   and the audit now shows `PASS 07-test-cases-suites.md v2.12.0`. **Doc 07 is clear.**
2. **Doc 08 v2.14.0 already HAS its cycle-2 report** and it is a **FAIL (94%, 0C/0H/2M/2L)**. The
   block is not "no report" — it is the correct consequence of a failing verdict. **A FAIL is
   cleared by the OWNING ROLE producing a new version, not by a reviewer producing another report.**
   The owning role is the **tester (Ji-woo Park)**, who must rework Doc 08 to **v2.15.0** and
   re-enter as **cycle 3 of 5**.
3. **I did not write, re-score, amend or supersede the Doc 08 report**, and I will not. Writing a
   second report against the same version to clear my own stop is not a cycle — CLAUDE.md's
   review-and-rework loop requires the project-manager to assign the reviewer and record it before
   dispatch, and the verdict on a version is owned by that recorded cycle.
4. **Nothing in my Doc 07 review depends on the Doc 08 verdict.** Doc 07's statements *about Doc 08
   v2.13.0* are recorded as as-of and were not re-scored; the cross-document fold's Doc 08 half
   (FR-036's row citing `TC-3605`/`TC-3606`) I verified as **present** at v2.14.0 regardless of that
   document's own open Mediums. `--audit` reads **138 Must rows, 19 COMPLETE, 119 OPEN**, both
   signals agreeing, unchanged throughout this session.

**Routed to the project-manager:**
1. Send **Doc 08 v2.14.0's cycle-2 FAIL** back to the **tester** for rework to **v2.15.0**
   (cycle 3 of 5); Doc 08 has now used **2 of 5** cycles (v2.13.0 FAIL 87%, v2.14.0 FAIL 94%).
2. **Doc 07 needs nothing further from me.** Its v2.12.0 review is complete and passing; the tester
   sets `Status: Approved`.
3. **Gate 2 remains not ready** on the grounds in §9 above — 119 open Must rows and the standing
   `npm audit` 1 critical / 4 high. Neither is a Doc 07 or Doc 08 document defect.

**Nothing further is owed from reviewer-qa on Doc 07. I am stopping here.**
