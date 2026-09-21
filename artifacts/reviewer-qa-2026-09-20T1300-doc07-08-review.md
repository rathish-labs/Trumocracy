# Session memory — reviewer-qa (Rafael Duarte) · 2026-09-20T1300 · Doc 07 v2.9.0 + Doc 08 v2.12.0, technical cycle 1

```
Role:      reviewer-qa (neutral technical reviewer via the document-review skill)
Assigned:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md (PM, recorded before dispatch)
Session:   2026-09-20, branch build/v1-debt-closure, HEAD 18244e8 (working tree ahead; nothing committed)
Scope:     Doc 07 v2.9.0 and Doc 08 v2.12.0 ONLY. Docs 03/04/06 belong to other reviewers this session.
Wrote:     artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md   (PASS 97%, 0C/0H/0M/4L)
           artifacts/reviews/08-traceability-matrix-v2.12.0-technical-cycle1.md (FAIL 92%, 0C/0H/3M/2L)
           this note. Did NOT open artifacts/memory-index.json (PM pre-registers).
Edited:    nothing. Read-only on both documents and on all product code, by design.
```

## What I did

Reviewed both documents end to end against the technical rubric, cycle 1 of a fresh loop for each
(Doc 07 v2.8.1 and Doc 08 v2.11.3 both PASSed and closed their lineages; v2.11.3 closed **on** the
cap with a PASS, which closes the loop rather than freezing the document). Verified rather than
accepted: re-ran the suite, re-ran the block case by case, re-derived every figure, reconstructed
the applied version from `git diff HEAD`, and read the governing requirement clauses in Doc 02
myself.

## Verdicts

| Document | Score | C | H | M | L | Verdict |
|---|---|---|---|---|---|---|
| Doc 07 v2.9.0 | 97% | 0 | 0 | 0 | 4 | **PASS** |
| Doc 08 v2.12.0 | 92% | 0 | 0 | 3 | 2 | **FAIL** — cycle 2 to the tester |

## Evidence I generated

- `npm test` from the repo root: **exit 0**; protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116;
  `apps/web/test/safety-surfaces.test.tsx` 41/41. Contracts 95 implied by exit 0. Total **640**.
- `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0890"` in `apps/web`:
  **15 passed, 26 skipped (41)** — reproduces the tester's R-20 second half exactly.
- `UT-0890` `describe` opens at `apps/web/test/safety-surfaces.test.tsx` line **430**, exactly
  **15** `it`s; all fifteen map one-to-one and in order to TC-3577..TC-3591.
- `node hooks/run_gates.cjs --audit`: **138 Must · 16 COMPLETE · 122 OPEN**, both signals agree.
  After my reports: Doc 07 PASS and no longer blocking; Doc 08 correctly recorded as failing the
  bar; blocking count 4 → 3 (Docs 03/04 remain, expected — architect's parallel work).
- Source checks: `packages/protocol/src/flags.js` (ENROLMENT_UI dev true / staging false / prod
  false, `removeBy` present, description cites CON-015 + FR-132), `apps/web/src/app/verify/page.tsx`
  (flag branch + `verify-unavailable` placeholder), `apps/web/src/i18n/en.ts` (TC-3587's five
  substrings and TC-3588's "nobody is checked at all" verbatim), `docs/03` §10.12.4 (SCR-01/SCR-02
  both **partial**, Conflict C-01 open), `docs/02` §4.45 clause (e) and §4.46 FR-132 (a)-(e).
- Id sweep `TC-35[7-9][0-9]` across all of `docs/`: TC-3577..TC-3591 appear only in Docs 07 and 08
  and nowhere before this version. Nothing reused, renumbered or re-statused.

## Decisions and rulings made

1. **FR-131 versus FR-132 — the tester is RIGHT.** Doc 02 §4.45 clause (e) closes: "This clause
   governs **participation acts only**: claims about personhood enrolment and identity verification
   are addressed by FR-132 §(d) … and are **expressly outside this clause**." The four-word ban in
   the same requirement is scoped to "v1 voting behaviour or any other v1 participation act as
   defined in clause (e)", so it does not reach enrolment copy either. **None of the fifteen carries
   an FR-131 link and none should.** TC-3585/TC-3591 applying the word list as an **instrument** is
   correct. Recorded caveat (Low in both reports): the carve-out is argued from the **surface**
   ("/verify copy is enrolment copy") where Doc 02 scopes it by **claim** — and
   `en.verify.unavailableBody` itself names two participation acts ("join a party … support one").
   Outcome unaffected; framing should be restated from the claim.
2. **The Must count genuinely holds: 138 · 16 · 122.** Verified by hook and re-derived clause by
   clause. FR-132 §(a)/(b)/(c)/(e) unbuilt; §(d)'s statement duty sits on **DES-098**, which does
   not exist — so TC-3587 is the right fact on the wrong surface, and the row says so. NFR-023 stays
   `G-UI`, Complete 0. No status marker, gap code, owner or phase moved anywhere in the diff.
3. **Doc 08 FAILs on three Mediums.** ISS-01: an **FR-132 → TC-3586** link is asserted that Doc 07
   does not support (TC-3586 verifies `US-0133 · NFR-023 · DES-085`, no FR) — a fresh instance of
   the `TD-RTM-03` defect class, against this document's own TC-3576/FR-131 precedent. ISS-02: the
   §9 gate row states its own denominator **twice and differently** — headline 493, "Denominator
   note" 478, and it quotes §6 at 485 when §6 now says 500 — inside the very cell v2.12.0 edited.
   ISS-03: FR-132's **Requirement** cell still summarises the DES-100 seam, not the five-clause
   requirement, so §(d) — the clause the fifteen verify — is absent from the column that states the
   requirement (the FR-131/v2.9.0 defect, repeated for FR-132).
4. **Doc 07 PASSes with four Lows.** Sharpest: fifteen ids drawn from the `TS-V1-*` band without
   restating the free band, which is the v2.8.1 ISS-03 discipline, cited by name in the same status
   block. Free band is now **TC-3592–TC-3699**, and **Doc 04 v1.6.0 §14 still reserves
   TC-3570–TC-3699** — 22 ids stale, with no routing note to the architect who holds Doc 04 open
   this session.
5. **`TD-RTM-03` extension is acceptable; disclosure is sufficient.** The row moves 1-of-3 to
   2-of-4, the absolute omission is unchanged at two, it is re-stated in the row itself, nothing
   turns on it, and withholding the case this version owns would leave the two documents
   disagreeing by one MORE case. Not a defect. (§10's currency is a separate Low.)
6. **Declining the `SCR` link was RIGHT.** Doc 03 §10.12.4 maps Verify to SCR-01/SCR-02 both
   **partial**, with **Conflict C-01** open on that surface. A tester asserting a screen id would be
   resolving the architect's open conflict from a trace cell. Routing to Ravi Deshmukh is correct.
7. **R-20's discharge claim is sound.** Merged at `18244e8`; R-18/R-19's uncommitted-tree
   qualification is genuinely discharged. The three dirty paths are session-governance records and
   no test reads any of them (nor `SECURITY.md`). Honestly qualified, not over-claimed.

## Open items (and who owns them)

- **Doc 08 v2.12.x rework — tester (Ji-woo Park):** ISS-01, ISS-02, ISS-03 (Medium, blocking);
  ISS-04, ISS-05 (Low, fold in the same edit). Patch bump is sufficient — no count, status or gap
  code may move. Re-review at **cycle 2 of 5**.
- **Doc 07 Lows — tester:** fold at the next touch; **ISS-01 first** (the free band).
- **Doc 04 §14 — architect (Ravi Deshmukh):** narrow the `TS-V1-*` reservation to
  **TC-3592–TC-3699**. Live this session while Doc 04 v1.7.0 is open. Not mine to write.
- **`TD-RTM-01`, `TD-RTM-02`, `TD-RTM-04`** — deliberately out of scope, confirmed untouched,
  correctly named rather than half-done. All still OPEN and all still Gate-2 relevant.
- **Merge sign-off: NOT given.** This was a document review, not a Gate-2 merge sign-off. The RTM
  has **122 open Must rows**, so the Gate-2 traceability criterion is **NOT MET**; rollback is still
  never drilled; the §9 reviewer-qa verifier row is still `_pending_`. Doc 08 must PASS its loop
  before anything else is asked of me.

## IDs touched (referenced, none authored)

`TC-3577`..`TC-3591` · `UT-0890` · `FR-131` (clause (e)) · `FR-132` §(a)–(e) · `NFR-023` ·
`DES-085` · `DES-098` (absent) · `DES-100` · `US-0133` · `US-0134` · `CON-015` · `RISK-02` ·
`SCR-01`/`SCR-02` (declined, routed) · `TD-RTM-01..04` · `TD-07-01..03` · `OPEN-27` (untouched) ·
runs `R-18`, `R-19`, `R-20`.

## SubagentStop block — recorded, not cleared (2026-09-20)

The SubagentStop hook (`hooks/run_gates.cjs`) blocked this session's stop on three documents. **None
is mine to clear, and I did not clear any of them.** Recorded here per the hook's own instruction
("record this block in your session note and stop — the project-manager sequences the review").

| Blocking document | Why it blocks | Whose move | My action |
|---|---|---|---|
| `08-traceability-matrix.md` **v2.12.0** | Report EXISTS (`08-traceability-matrix-v2.12.0-technical-cycle1.md`) but `Verdict=FAIL, score=92%, M=3` | **tester (Ji-woo Park)** — the OWNING ROLE reworks a new version; I re-review at cycle 2 of 5 | **None.** This block is the correct and intended outcome of my review. The three Mediums (ISS-01 FR-132 → TC-3586 link Doc 07 does not carry; ISS-02 §9 cell stating two live denominators; ISS-03 FR-132 Requirement cell describing the DES-100 seam, not the requirement) are real and evidenced. **I will not author a passing report to clear my own stop** — a report written to clear a block does not count as a cycle, and the reviewer never does the rework |
| `03-architecture-design-sdd.md` **v2.14.0** | No report for this version | **tester (Ji-woo Park)**, per `REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md` §"Neutral reviewers"; the architect owns it and is excluded, as is the engineer | **None — I am not the assigned reviewer and I do not self-appoint.** The assignment record names the tester before dispatch |
| `04-test-strategy-master-plan.md` **v1.7.0** | No report for this version | **tester (Ji-woo Park)**, same assignment row | **None — same reason** |

**Expected state, not a defect.** The assignment record anticipates exactly this: *"Other documents
being In Review mid-session is EXPECTED — do not self-appoint"*, and the dispatch brief repeats it.
Docs 03 and 04 are being incremented in parallel by the architect this session and are the tester's
to review; Doc 06 v2.9.0 comes later and is also the tester's.

**Routed to the project-manager (Ana-Maria Petrescu), who sequences the loop:**

1. Dispatch the **tester** to review **Doc 03 v2.14.0** and **Doc 04 v1.7.0** (technical), per the
   assignment record already on disk.
2. Route my **Doc 08 FAIL** to the **tester as owning role** for a rework version (patch bump is
   sufficient — no count, status or gap code may move), then re-dispatch me for **cycle 2 of 5**.
3. Doc 07 v2.9.0 has **PASSed** and no longer blocks; the tester should set `Status: Approved`.

**Nothing further is owed by me in this session.** I wrote two review reports and this note; I
edited no document, no test artifact and no product code; I did not open
`artifacts/memory-index.json`; and I have given **no merge sign-off** — the RTM carries 122 open
Must rows, so the Gate-2 traceability criterion remains NOT MET.
