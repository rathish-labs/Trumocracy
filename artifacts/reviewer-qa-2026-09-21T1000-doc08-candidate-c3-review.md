# reviewer-qa session note — 2026-09-21T1000 — Doc 08 RTM v2.15.0, review cycle 3 of 5

```
Role:       reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, not the owning role
Document:   docs/08-traceability-matrix.md v2.15.0 (In Review — rework cycle 3 of 5)
Owner:      tester (Ji-woo Park) — she wrote it; I do not edit it
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md (recorded before dispatch)
Wrote:      artifacts/reviews/08-traceability-matrix-v2.15.0-technical-cycle3.md
            this note
Did NOT:    edit any document, product code, test artifact, or artifacts/memory-index.json
            (pre-registered by the PM). Wrote nothing under docs/.
Verdict:    FAIL — 96%, 0 Critical / 0 High / 1 Medium / 2 Low
Merge:      THREE CLOSURES SIGNED (FR-036, FR-037, FR-085). Gate 2 NOT MET — 119 of 138 open.
```

## 1. What I did

Independent re-verification of Doc 08 v2.15.0 against the four cycle-2 issues, plus a full
re-derivation of every count, a diff against the PM's v2.14.0 backup, the suite, the dep-guard, the
security scan and the gate audit. I re-ran every device the document publishes rather than reading
its account of them.

## 2. Findings

**Two of the four cycle-2 issues are fully FIXED, one is fixed in substance but not in statement,
one is discharged.**

- **ISS-C2-01 (Medium) — FIXED.** `Source:` pin at L618: **9 / 9** raw parens, **8 / 8** excluding
  the two backticked literals, depth ends at 0 and **never goes negative**, and the line ends
  **`) ·`** like its siblings (L616 **12/12**, L617 **3/3**). The three false "closed" claims are
  corrected where they were made (L115 Status record, L860 Changelog, and the pin's own annotation
  superseded in place).
- **ISS-C2-02 (Medium) — PARTIALLY FIXED, new ISS-C3-01 (Medium).** The root cause is correctly
  diagnosed and the hit list is now exact against the text it describes: I ran the published grep
  against the v2.14.0 backup and got **14 lines / 21 occurrences**, matching all four classes hit
  for hit, **including the §9 tester sign-off row the v2.14.0 sweep missed** (old L2596). Two
  residual falsifications: (a) the text says "Run against **this file** … 14 lines and 21
  occurrences" — the published v2.15.0 file returns **22 lines / 38 occurrences** (8 new lines, all
  this correction's own quotations: L37, L42, L765, L770, L774, L778, L780, L788); (b) class (a) is
  published as **11** occurrences when its own five lines carry **12**, so the classes sum to
  **20, not 21**. The spec tail predicted the post-transcription rise; the document does not
  disclose it. **The finding itself is TRUE — I classified all 22 live hits myself: zero live stale
  figures remain.**
- **ISS-C2-03 (Low) — FIXED.** Rule 4a limb (i) now names `UT-0904` / `TC-3614` for the web surface
  and limb (ii) states only the SDK store holds the datum at rest. Verified: the `it` exists
  verbatim at `apps/web/test/candidates.test.tsx:133`; `TC-3614` really is on the FR-085 row
  (L2371); extent scan reproduces exactly — 5 files, **17 · 8 · 1 · 2 · 2**.
- **ISS-C2-04 (Low) — FIXED/recorded.** Spec-tail figures were run this time; three re-checked and
  all three correct.

**New this cycle:** ISS-C3-01 (Medium, above); **ISS-C3-02 (Low)** — v2.15.0 publishes **no site
enumeration**, dropping the device v2.13.0/v2.14.0 used to retire the N+1th-site class, and states
"nothing touches a row" absolutely while OP 7 edits FR-037's Decision cell (I verified the scope by
diff: **six regions, all six the spec's sites, nothing outside**); **ISS-C3-03 (Low)** — the Doc 07
pin says v2.12.0 "In Review" while Doc 07 reached **Approved (PASS 97%)** later in this session.
**I ruled that expected pin lag, not a defect of this version**: the version pinned is the right
one, the status word was true when written, and the evidence (R-21's 97 `it`s) does not depend on
review status. Folded for the next touch on the document's own v2.12.0 precedent.

## 3. Evidence gathered (all re-run by me)

- `npm test` — **739 / 739, exit 0**: contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 ·
  web 138.
- `npm run lint:deps` — clean, **7 workspaces**, layering OK.
- `node hooks/run_gates.cjs --audit` — **derived 138 Must rows, 19 COMPLETE, 119 OPEN** vs
  **published by §9: 19 / 119**. **The two independent signals AGREE.** (Doc 08 v2.15.0 shows
  BLOCK for "no report for this version" — expected; discharged by my report.)
- `npm audit` — **11** findings (1 critical / 4 high / 5 moderate / 1 low), **unchanged**; no
  lockfile change in this working tree; **no code touched by this version**.
- My own marker counter — §3.1 **114 / 19 / 95** · pre-v2.0.0 block **54 / 14 / 40** · §3.2
  **24 / 0 / 24** · §3.3 **23 / 5 / 18** · both-markers **0** · Must total **138 / 19 / 119**.
  Identical to v2.14.0: **nothing moved**.
- Diff vs `scratchpad/08.v2140.bak` — **six hunks**, all six the spec's sites, nothing outside.
- Residue — no FIND/REPLACE marker, no conflict marker, fences balanced (2), **0** CRLF, **0**
  trailing-whitespace lines, no duplicated adjacent line, column-anomaly set identical before/after.
- Flags — `ELECTIONS` `prod: false`; `ENROLMENT_UI` `{dev: true, staging: false, prod: false}`.
  **The drop still ships dark**, and a document-only version is trivially reversible.

## 4. Decisions made

1. **FAIL at 96%** — the pass bar is conjunctive and one Medium blocks. Score rose (87 to 94 to 96)
   because the version is materially better; the verdict is still FAIL.
2. **PATCH (v2.15.1) is sufficient** for the rework — no row, count or ruling is implicated.
3. **Merge sign-off re-affirmed for FR-036, FR-037 and FR-085** — the Medium is a defect of
   statement inside a changelog annotation and touches no row, marker, figure or ruling.
4. **Gate 2: NOT MET**, and not because of this review — **119 of 138 Must rows are open**. The
   zero-gap certification belongs to the project-manager via `--gate2`.
5. **The Doc 07 pin's "In Review" wording is pin lag, not a v2.15.0 defect** — recorded as a Low to
   be folded, with the reasoning stated so cycle 4 does not re-argue it.

## 5. Open items / routing

1. **To the tester (owning role):** ISS-C3-01 (Medium, blocking), ISS-C3-02 and ISS-C3-03 (Lows).
   Cycle 4 of 5 next; **two cycles remain** on the cap.
2. **Caution recorded for the next spec:** a self-quoting correction changes its own grep count when
   transcribed — run the figure after the text exists, or name the file/version it is true of.
3. **To the engineer (standing, unchanged):** the FR-037 absence-scan `it` (owed hardening under
   rule 4a, not a condition of the closure); the `NOMINATION_ENDORSEMENTS_MIN` value pin and its
   stale "flagged for ratification" `it` title; the `UT-0902` own-property enumeration.
4. **To the project-manager:** Doc 08 remains In Review and blocking; Doc 07 is **Approved at
   v2.12.0**. Gate-2 readiness is **NOT MET** on the RTM criterion (119 open Must rows).
5. `TD-RTM-02` (denominator disagreement — Doc 07 "521 designed" vs Doc 08 "528") stays OPEN and
   disclosed; `TD-RTM-05` stays.

## 6. IDs touched (read/verified, none edited)

`FR-036`, `FR-037`, `FR-081`, `FR-085`, `FR-132` · `DES-027`, `DES-028` · `US-0046`, `US-0049`,
`US-0050`, `US-0095`, `US-0132` · `TC-3599`, `TC-3603`, `TC-3604`, `TC-3605`, `TC-3609`, `TC-3614`,
`TC-0029` · `UT-0895`, `UT-0897`, `UT-0900`, `UT-0901`, `UT-0904` · `Completion rule 4a` ·
`TD-RTM-02`, `TD-RTM-05` · run `R-21`. **I changed nothing.**

## 7. SubagentStop hook block — recorded, expected, and NOT to be cleared by me

On exit the SubagentStop hook (`hooks/run_gates.cjs`) blocked with:

```
08-traceability-matrix.md v2.15.0 (technical review) — report EXISTS
(08-traceability-matrix-v2.15.0-technical-cycle3.md) but does not satisfy the gate:
Verdict=FAIL, score=96% C=0 H=0 M=1
```

**This is the correct behaviour and it is my own verdict being enforced.** I am the PM-assigned
neutral reviewer for this document (recorded before dispatch in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`); the report exists, is parsed
correctly by the hook, and **FAILS the bar on one Medium (ISS-C3-01)** — score 96% clears the
numeric threshold but the bar is conjunctive.

**I will not clear this block, and no one should clear it by re-reviewing v2.15.0.** The route is:

1. **Tester (Ji-woo Park), the owning role** — rework ISS-C3-01 (Medium, blocking) plus ISS-C3-02
   and ISS-C3-03 (Lows) into a **new version, `v2.15.1` (PATCH is sufficient)**, `Status: In Review`.
2. **Project-manager** — sequence **cycle 4 of 5** and assign the reviewer, recorded before dispatch.
3. Only a **passing** report at the **new** version clears the hook. **Two cycles remain** before
   the cap; at cycle 5 a FAIL becomes ESCALATED and needs a named human `approve-as-is` decision.

**I wrote no further report and edited nothing.** Doc 07 v2.12.0 is separately **Approved** and does
not block. Gate 2 remains **NOT MET** on the RTM criterion (**119 of 138 Must rows open**),
independently of this block.
