# reviewer-qa session note — 2026-09-21T08:00 — Doc 07 v2.11.0, technical review cycle 2 of 5

**Role:** reviewer-qa (Rafael Duarte) — neutral reviewer, PM-assigned and recorded before dispatch
in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`. I am not the owning role
(the tester owns Doc 07). **I wrote nothing to `docs/` and edited no code or test.**

## What I did

Reviewed `docs/07-test-cases-suites.md` **v2.11.0** (rework cycle 2 of 5) against the cycle-1
report `artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md` (FAIL 91%, 0C/0H/2M/6L)
and the tester's rework spec `artifacts/status/SPEC-2026-09-21-doc07-v2.11.0.md` (16 OPs).

**Verdict: FAIL — Score 94%, 0 Critical / 0 High / 1 Medium / 3 Low.**
Report: `artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md`.

## Decisions made

1. **All eight cycle-1 issues verified FIXED**, each against the artefact rather than the
   document's summary of it (test files, Doc 02/03/05/08 rows, my own runs). Recorded case by case
   in §4.2 of the report so cycle 3 need not repeat it.
2. **One new Medium (my ISS-01) forces the FAIL: the fourteenth site.** The v2.11.0 Changelog
   claims "Every site changed, enumerated so the sweep is falsifiable — **thirteen sites**"; the
   diff against the PM backup of the v2.10.0 text has **fourteen**. The unenumerated one is §5.7's
   **`TC-3605`** (L2544), whose Verifies cell gains **US-0046, FR-036, DES-027 rule 6** — the fold
   of Doc 08 cycle-1 ISS-02 (High). The edit is **correct and must stay**; the change record is
   what is wrong. Same defect class the version exists to correct (a sweep over an incomplete
   basis), and it sits on the RTM audit path — confirmed when Doc 08 **v2.14.0** landed mid-session
   citing `TC-3605` in its FR-036 row.
3. **Three Lows:** `TC-3540`'s widened cell gives the `IProposalStore` seam a DES but no FR/US;
   §0.1's Pass (obs.) run series stops at R-21 in the version that mints R-22; the "second
   deferral" counter for the two carried v2.9.0 Lows disagrees with the cycle-1 report.
4. **Routed to the tester** (owning role) for cycle 3. Outward: architect owes Doc 04 §14 the
   `TC-3620` re-narrowing; the Doc 08 reviewer owns the v2.13.0 Changelog carrier residue.
5. **Merge sign-off not at issue and not withheld** — the code is already merged at `12fe4a6`
   (PR #22); this cycle reviewed a document and no product/test/config path changed.

## Evidence (all re-run by me, not quoted from the document)

- `npm test` repo root: **739 / 739 pass, 0 failed, exit 0** — contracts 95 · protocol 178 ·
  sdk 287 · ui 25 · indexer 16 · web 138.
- `npx vitest run test/sdk-types-sync.test.ts --reporter=verbose` in `apps/web`: **3 / 3**, the
  `it`s being `IPartyStore`, `IProposalStore`, **`ICandidateStore`** — R-22 reproduced exactly, and
  the file confirms one parameterised `it` over a seam list (so `640 + 97 + 2 = 739` closes).
- `npm run lint:deps`: 7 workspaces checked, layering OK, exit 0.
- `node hooks/run_gates.cjs --audit`: **138 Must rows, 19 COMPLETE, 119 OPEN**, the two independent
  signals **AGREE**; unchanged before and after the Doc 08 v2.14.0 touch. Gate-2 traceability
  criterion **NOT MET**.
- §2 sums re-derived mechanically: **521 / 290 / 231**, every row designed = automated + blocked.
  §10 identities hold: 139 + 136 + 15 = 290; 290 + 177 + 46 + 12 − 4 = 521. No count moved.
- Transcription: 16 OPs present exactly once, no FIND / REPLACE residue, no leaked fence or
  conflict marker, every edited table row matches its neighbour's column count.

## Open items

- **Doc 07 cycle 3** owed by the tester: fix the site enumeration (thirteen to fourteen, naming the
  `TC-3605` fold) plus the three Lows; the two v2.9.0 Lows are owed for a third touch.
- **Doc 04 §14** re-narrowing to `TC-3620` — architect.
- **Doc 08 v2.14.0** has no review report yet — a separate reviewer cycle, not mine.
- **Gate 2 remains blocked** on 119 open Must rows. I withhold any Gate-2 readiness sign-off.

## IDs touched (read/verified, none authored)

Docs: 02 (FR-013, FR-036, FR-122), 03 (DES-027 rule 6, DES-097, DES-104, DES-107, DES-108,
§10.13.14), 05 (US-0021, US-0046, US-0133), 06 v2.11.1 (§3 web addend, §7 items 23 and 26),
07 v2.11.0, 08 v2.13.0 / v2.14.0 (FR-036 row, FR-039 row, §7 entry 19).
Cases: TC-3320, TC-3407, TC-3411, TC-3470, TC-3471, TC-3540, TC-3592..TC-3619 (esp. TC-3605,
TC-3611, TC-3612, TC-3613), TC-3316, TC-3322, TC-3419.
Unit tests: UT-0750, UT-0871, UT-0891, UT-0894..UT-0897, UT-0899, UT-0901..UT-0907.
Runs: R-21 (reproduced), R-22 (reproduced). Debt: TD-RTM-01, TD-RTM-02, TD-RTM-03, TD-07-03.

**Memory index:** this note is pre-registered by the project-manager; per my dispatch I did **not**
open or edit `artifacts/memory-index.json`.

## Review-loop block recorded at stop (2026-09-21T08:00, SubagentStop hook)

The SubagentStop hook blocked my exit with two documents outstanding. **Both are expected and
neither is mine to clear.** Recorded here as the hook requires, and I am stopping.

1. **`07-test-cases-suites.md` v2.11.0 — report EXISTS
   (`07-test-cases-suites-v2.11.0-technical-cycle2.md`), Verdict=FAIL, score=94%, C=0 H=0 M=1.**
   This is **my own report and my own verdict**, produced as the PM-assigned neutral reviewer for
   cycle 2 of 5. The block is the loop working as designed: a FAIL does not advance the SOP. It is
   cleared by the **owning role — the tester (Ji-woo Park)** — reworking a **new version**
   (v2.11.1 or v2.12.0, `Status: In Review`) that takes my ISS-01 (the unenumerated fourteenth
   site, §5.7 `TC-3605`) plus ISS-02..ISS-04, which then re-enters as **cycle 3 of 5**. I will not
   re-score v2.11.0 to clear my own stop, and I will not soften a Medium to make a block go away —
   the Medium is the finding.
2. **`08-traceability-matrix.md` v2.14.0 — NO report for this version.** **This is not my
   assignment.** `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` dispatched me to
   Doc 07 cycle 2; Doc 08's cycle is its own reviewer's, sequenced by the project-manager. v2.14.0
   landed from the tester's rework **while I was writing my Doc 07 report** (it read v2.13.0 when I
   started — see §7 of the report). **Reviewer assignment is the PM's decision, recorded before
   dispatch; I do not self-appoint.**

**Action for the project-manager:** route Doc 07 v2.11.0 back to the tester for cycle 3, and
assign a neutral reviewer for Doc 08 v2.14.0 (recorded before dispatch). Two documents block the
loop; neither blocks a merge, and no merge is pending — the code is already merged at `12fe4a6`.

**Unchanged:** I wrote nothing to `docs/`, edited no code or test, and did not open or edit
`artifacts/memory-index.json`.
