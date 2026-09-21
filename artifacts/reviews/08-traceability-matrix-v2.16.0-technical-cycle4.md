# Document Review Report — Doc 08 RTM v2.16.0 (technical, cycle 4 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** (Ji-woo Park) owns this
> document; this review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded before
> dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.16.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 4 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**ISS-C3-01 is fixed, and it is fixed in the only way it could have been: the device was replaced,
not the number.** The sweep now separates three things that v2.14.0 and v2.15.0 conflated. **(1) The
CLAIM is anchored to a frozen reference** — the v2.14.0 text — and I did not take the reference on
trust or on the project-manager's backup. **I reconstructed it from the repository alone, exactly as
the document says a reader can:** `git show 12fe4a6:docs/08-traceability-matrix.md` (v2.12.3), then
the v2.13.0 spec's **43** operations, then the v2.14.0 spec's **17** — **60 operations, every one
matching exactly once, zero failures** — and the result is **byte-identical** (`diff -q` clean) to
`scratchpad/08.v2140.bak`. Against that reconstruction the published command returns **14 lines /
21 occurrences**, on the fourteen lines **19, 709, 712, 716, 789, 1270, 1314, 1802, 2326, 2329,
2537, 2539, 2541, 2747**. **The falsifiability claim is therefore true for a reader with nothing but
the repo**, which is more than the previous two versions ever offered. **(2) The classes now close.**
I counted the occurrences per line myself: (a) 19→1, 709→3, 712→1, 716→1, 2329→6 = **5 lines / 12
occurrences** (the 11→12 correction is right); (b) 789, 1270, 1314, 1802, 2537, 2539, 2747 = **7 / 7**;
(c) 2541 = **1 / 1**; (d) 2326 = **1 / 1**. **12 + 7 + 1 + 1 = 21 over 14 lines.** I also read each
line and confirmed the class it is put in — 2541 really is a transition (`Heading: all 122 open Must
rows → all 119`), 2747 really is the §9 sign-off row's dated `_(Prior v2.12.3: …)_` record, 2326
really is the `FR-`**`122`**` open tier` false positive. **(3) The LIVE figure is published as an
observation and is right:** the command against the published v2.16.0 file returns **23 lines / 41
occurrences**, exactly as printed. **And the fixed-point property holds** — the sentence carrying it
(lines **847–849**) is **not one of the 23 hit lines**, and contains none of the three search
strings; publishing the figure did not move the figure. **(4) The INVARIANT is stated as the claim,
and I verified it by classifying all 23 live hits myself** (102, 107, 137, 834, 873, 878, 882, 886,
888, 896, 912, 915, 919, 992, 1473, 1517, 2005, 2529, 2532, 2740, 2742, 2744, 2950): thirteen are
quotations inside corrections, seven are dated records, one is a transition's *from* side, one is the
FR-132 false positive, and two (834, 873) are the published commands themselves. **Zero live stale
figures.** This is the third consecutive version to attack this paragraph and the first whose device
cannot be defeated by its own publication.

**Both Lows are fixed and I checked the fix, not the claim of a fix.** **ISS-C3-02:** the v2.15.0
record now enumerates **its own six sites** inside itself, and the absolute is narrowed from
"touches a row, a marker, a figure or a ruling" to "changes a row's marker, status, gap code,
evidence ids or ruling, and no figure moves" — which is exactly what OP 7 did and did not do: I
re-confirmed FR-037's row (L2428) is **8 columns, one ✅, zero ☐**, and the cycle-3 diff established
the cell edit **adds** `UT-0904` / `TC-3614` and moves nothing else. **ISS-C3-03:** the Doc 07 pin
now reads `TC-TRUMOCRACY v2.12.0** (**APPROVED** — 07-test-cases-suites-v2.12.0-technical-cycle3.md,
**PASS 97%, 0C/0H/0M**`, which I checked against **both** the report's metadata block (`Score: 97%`,
`Critical: 0`, `High: 0`, `Medium: 0`, `Verdict: PASS`) and Doc 07's own header (`Version: 2.12.0`,
`Status: Approved`).

**Nothing moved, and I derived it rather than read it.** My own marker counter returns §3.1
**114 / 19 / 95**, its pre-v2.0.0 block **54 / 14 / 40**, §3.2 **24 / 0 / 24**, §3.3 **23 / 5 / 18**,
rows carrying **both** markers **0**, Must total **138 / 19 / 119** — identical to v2.15.0 and
v2.14.0. `node hooks/run_gates.cjs --audit` reads **derived 138 Must rows, 19 COMPLETE, 119 OPEN**
against **published by §9: 19 / 119** — the two independent signals **AGREE**. `npm test` is
**739 / 739, exit 0** (contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138 = 739);
`npm run lint:deps` clean, 7 workspaces, layering OK. **The diff against the v2.15.0 backup is
exactly four hunks** — `@@ -2,8 +2,58` · `@@ -12,8 +62,23` · `@@ -615,7 +680,7` · `@@ -758,6 +823,49`
— which are **precisely the four sites the version enumerates about itself**, and everything from
live line **872** onward is byte-identical, which is what makes §3.x, §6, §7 and §9 invariance a
fact rather than an assertion. The marker-row column histogram is **identical before and after**
(`{4:3, 5:1, 6:23, 7:24, 8:110, 11:2, 12:2}`), anomaly sets identical, **0** CRLF, **0** trailing
whitespace, **0** duplicated adjacent lines, no `FIND:` / `REPLACE WITH` marker, no conflict marker,
fence count **2** and balanced. The `Source:` pin balances **10 / 10** raw (**9 / 9** stripping the
backticked literals), final depth **0**, minimum depth **0**, ending `) ·` like its siblings
(L681 **12 / 12**, L682 **3 / 3**).

**The verdict is PASS.** Two Lows survive and neither touches a row, a figure or a ruling: one line
lost its continuation indent in transcription, and one of the spec tail's five grep checks was
declared "run, not predicted" when it was in fact predicted. Low issues do not block.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`. The owning role (tester) sets `Status: Approved` and the SOP advances.

## 3. Per-cycle-3-issue verification (FIXED / not)

| Cycle-3 ID | Sev | Status at v2.16.0 | Evidence I used |
|---|---|---|---|
| **ISS-C3-01** | **Medium** | **FIXED** | **The fix is structural, and I tested the structure.** **(a) The frozen reference is real and reader-reconstructible.** The document says the v2.14.0 text is "reconstructible from `HEAD` `12fe4a6` plus the applied v2.13.0 and v2.14.0 specs, or from the project-manager's backup". I ran the first route, which no previous cycle had: `git show 12fe4a6:docs/08-traceability-matrix.md` → v2.12.3; applied `artifacts/status/SPEC-2026-09-21-doc08-v2.13.0.md` (**43** FIND/REPLACE ops) then `…-v2.14.0.md` (**17** ops); **all 60 matched exactly once, 0 failures**; `diff -q` against `scratchpad/08.v2140.bak` → **identical**. **The reference cannot be moved by anything written afterwards, and a reader can build it from the repo alone.** **(b) The claim reproduces on it.** The published command on the reconstruction → **14 lines / 21 occurrences**, line numbers **19, 709, 712, 716, 789, 1270, 1314, 1802, 2326, 2329, 2537, 2539, 2541, 2747** — identical to the tester's list and to my own cycle-3 list. **(c) The classes close, and the 11→12 correction is right.** Per-line occurrence counts derived mechanically: **(a)** 1+3+1+1+6 = **12** over 5 lines; **(b)** 7 lines × 1 = **7**; **(c)** 1; **(d)** 1. **12+7+1+1 = 21 over 5+7+1+1 = 14.** I read all fourteen lines and confirmed each class assignment, including the three the document names explicitly (§9's sign-off row at 2747, carrying `_(Prior v2.12.3: Submitted — 122 open Must rows…)_`; §7's `Heading: all 122 open Must rows → all 119` transition at 2541; FR-132's `FR-`**`122`**` open tier` at 2326). **(d) The live observation is exact and is a fixed point.** Live file → **23 lines / 41 occurrences**, precisely as published. The sentence carrying the figure spans lines **847–849** and **none of them appears in the 23-line hit list**; it contains none of the three search strings. **Publishing the figure did not change the figure — the trap that killed v2.14.0 and v2.15.0 is closed.** **(e) The invariant holds and I verified it independently.** I classified all **23** live hits myself: quotations inside corrections (102, 107, 137, 878, 882, 886, 888, 896, 912, 915, 919, 2532), the two published commands (834, 873), dated records (992, 1473, 1517, 2005, 2740, 2742, 2950), the transition (2744), the FR-132 false positive (2529). **Zero live stale figures at v2.16.0.** **(f) The reader is told the live figure is not the claim**, in terms, and the general lesson is recorded ("a sweep published inside the corpus it sweeps cannot make a live count falsifiable") along with the instrument of record (the ✅/☐ marker derivation), whose figures I re-derived and which match |
| **ISS-C3-02** | Low | **FIXED** | **Enumerated where it was owed — inside the v2.15.0 record, not in the v2.16.0 one.** Lines **73–81** now read "**Every site changed at v2.15.0 — 6 sites, 7 operations, and these are they**" and list them: header `Version`+`Status` · the v2.14.0 Status record's ISS-05 claim · the v2.14.0 Changelog's ISS-05 claim · the `Source:` block's `TC-TRUMOCRACY (` pin · the v2.14.0 Changelog's ISS-01 sweep · §3.1's FR-037 row. **That is exactly the six-region set I established by diff at cycle 3**, in the same order. **The absolute is narrowed and the narrowing is accurate:** "Nothing in this version changes a row's marker, status, gap code, evidence ids or ruling, and no figure moves", with the superseded absolute quoted in a `_(v2.16.0, ISS-C3-02: …)_` annotation rather than erased — this document's convention. **I confirmed the narrowing is true of OP 7:** FR-037's row (L2428) is **8 columns**, **one ✅**, **zero ☐**, its gap code and ruling unchanged, and the cycle-3 diff showed the Decision cell gained `UT-0904` / `TC-3614` and nothing else. Note also that the v2.16.0 record **separates sites from operations** ("4 sites, 5 operations … published as two figures because they are two things") — the exact conflation that produced Doc 07 v2.11.0's Medium |
| **ISS-C3-03** | Low | **FIXED** | The pin (L683) now reads "**→ Pin advanced again for v2.15.0: TC-TRUMOCRACY v2.12.0** (**APPROVED** — 07-test-cases-suites-v2.12.0-technical-cycle3.md, **PASS 97%, 0C/0H/0M**; its loop closed at three cycles, 91% → 94% → 97%", with a `_(v2.16.0, **ISS-C3-03**: …)_` annotation recording that the old text "was true when written and is not now" and that the qualification is **spent in the right direction**. **Verified against two independent sources:** the report's own metadata block reads `Document version: 2.12.0 · Score: 97% · Critical: 0 · High: 0 · Medium: 0 · Low: 2 · Verdict: PASS`, and `docs/07-test-cases-suites.md` reads `Version: 2.12.0`, `Status: Approved`. **The pin line stays structurally sound after the edit:** **10 / 10** parens raw, **9 / 9** stripped, final depth **0**, minimum depth **0** (never negative), terminating `) ·` — i.e. ISS-C2-01's repair survived the ISS-C3-03 edit, which is the thing most likely to have broken |

## 4. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 99 | 19.8 | Untouched and **provably** so: the diff is four hunks, all before live line 872, so §3.1, §3.2, §3.3, §6, §7, §8 and §9 are **byte-identical** to v2.15.0. No `TC` id, evidence cell, `UT` attribution, clause map, gap code or owner moves. The three closure rows (FR-036 L2427, FR-037 L2428, FR-085 L2479) are each **8 columns / one ✅ / zero ☐** |
| T2 Soundness | 20 | 99 | 19.8 | The sweep's reasoning is now correct **and** its instrument is correct. The diagnosis ("writing the claim changed what the claim measured") is not an excuse but a specification of the fix: anchor to a frozen reference, publish the live figure as an observation in a string-free sentence, and promote the invariant to the claim. All three limbs verified independently, including the reconstruction of the reference from `HEAD` |
| T3 Traceability & IDs | 20 | 99 | 19.8 | Every derivation reproduces: **114/19/95 · 54/14/40 · 24/0/24 · 23/5/18**, both-markers **0**, Must total **138/19/119**; `--audit` derived **138/19/119** vs published §9 **19/119** — **AGREE**. The Doc 07 pin's version and status check out against the report and the document. The four-site self-enumeration matches the four diff hunks one for one |
| T4 Security & failure modes | 15 | 99 | 14.85 | `ELECTIONS` `defaults: { dev: true, staging: true, prod: false }` and `ENROLMENT_UI` `{ dev: true, staging: false, prod: false }` re-read in `packages/protocol/src/flags.js` — **the drop still ships dark**. `npm audit` reports **11** dependency-tree findings (**1 critical / 4 high / 5 moderate / 1 low**), **unchanged and none introduced here**: `package-lock.json` is unmodified in this working tree and this version touches **no code**. Reversal is a four-hunk document revert |
| T5 Completeness & testability | 15 | 97 | 14.55 | The version publishes its own site enumeration (**4 sites, 5 operations**) and it matches the diff exactly; the falsifiable claim is now genuinely runnable by a reader with only the repo, which I proved by running it. Deduction: **ISS-C4-02** — one of the spec tail's five grep checks, published under the heading "all run against the post-application text, none predicted", returns **2** where **1** was published |
| T6 Convention compliance | 10 | 95 | 9.5 | MINOR bump to 2.16.0 per the house rule; ISO-8601; `Status: In Review — v2.16.0 … Rework cycle 4 of 5 — two cycles remain` with the v2.15.0 record retained beneath it; superseded texts annotated in place and **both** prior sweep texts retained as dated records rather than deleted; corrections made where the claims were made. Deduction: **ISS-C4-01** — line 65 lost its 15-space continuation indent inside the header metadata fence |
| **Total** | **100** | — | **98.3 → 98%** | — |

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-C4-01** | Low | T6 | Header metadata fence, **line 65**: "`and that all three closures would be signed. **Nothing in this version changes a row's marker,`" | **Transcription residue: the only line in the header block that lost its continuation indent.** Every other continuation line inside the fenced metadata block carries the 15-space alignment; this one starts at column 0. I verified it is the **sole** such line by scanning lines 4–140 for non-indented, non-key continuation lines — exactly one hit — and confirmed the predecessor text was indented (`08.v2150.bak:15` reads `               and that all three closures would be signed. …`). **The origin is the spec, not the transcription:** OP 3's `REPLACE WITH` block in `artifacts/status/SPEC-2026-09-21-doc08-v2.16.0.md` opens with the un-indented form, so the project-manager reproduced it faithfully — the same "a spec is not self-checking" failure mode this document's own v2.14.0 ISS-05 annotation already names. **No figure, marker, ruling, id or claim is affected**; the block is a fenced literal, so the effect is one visibly mis-aligned line | Tester: restore the 15-space indent on line 65 at the next touch, and add an indent-preservation assertion to the spec tail (a one-line scan of the header fence for continuation lines not starting with 15 spaces) |
| **ISS-C4-02** | Low | T5 | `artifacts/status/SPEC-2026-09-21-doc08-v2.16.0.md`, "After transcription" item **3**, headed "**Grep checks, all run against the post-application text, none predicted**": "`grep -c "Nothing in this version touches a row, a"` → **1**, and it is **expected**: the v2.16.0 correction quotes the absolute it narrows" | **The figure is 2, not 1 — and the reason is the very self-reference this version exists to retire.** Run against the transcribed file the count is **2**: line **47** (the v2.16.0 Status record's ISS-C3-02 paragraph, which quotes the absolute while describing the fix) and line **67** (the v2.15.0 record's `_(v2.16.0, ISS-C3-02: …)_` annotation, which the spec predicted). **The spec author anticipated the second quoting site and not the first — their own OP 2.** Four of the five checks reproduce exactly (`23 lines / 41` → **1**; `ISS-01 — THE SWEEP` → **3**; `Every site changed at v2.15.0` → **1**; the APPROVED pin → **1**), and the one that matters most — the live sweep figure — was demonstrably run and is a fixed point. **I confirmed both occurrences are quotations inside corrections, so no claim in the document is wrong and the invariant is untouched.** This is a **Low against the spec artifact, not the document**: the document publishes no such figure. It is raised because the spec tail's assurance that these were "run, not predicted" is the reader's warrant for the rest of the list, and this lineage carried the identical finding at cycle 2 (ISS-C2-04) | Tester: when a version's grep-check list includes a string the version itself writes about, run the list **after** the final op on the scratch copy and state the count per site; or drop the "none predicted" assurance for checks over self-quoted strings. **No document change is owed** |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. This version
> carries **zero** Critical, High or Medium.

## 6. What is confirmed — stated so nothing is re-litigated downstream

- **The suite and both hook signals.** `npm test` **739 / 739, exit 0** (contracts 95 · protocol 178
  · sdk 287 · ui 25 · indexer 16 · web 138 = 739, summed from the six per-package reports);
  `npm run lint:deps` clean, **7** workspaces, layering OK; `node hooks/run_gates.cjs --audit`
  reports **derived 138 Must rows, 19 COMPLETE, 119 OPEN** against **published by §9: 19 / 119** —
  the two independent signals **AGREE**. `--audit` also shows
  `BLOCK  08-traceability-matrix.md v2.16.0 (technical) - no report for this version`, which is
  **expected** at the moment of review and is **discharged by this PASS report**.
- **Nothing moved, derived not read.** §3.1 **114 / 19 / 95** (pre-v2.0.0 block **54 / 14 / 40**;
  v2.0.0+ block **60 / 5 / 55**); §3.2 **24 / 0 / 24**; §3.3 **23 / 5 / 18**; rows with **both**
  markers **0**; Must total **138 / 19 / 119**; non-Must **5 / 18**; combined complete **24**,
  combined open **137**. Identical to v2.15.0 and to v2.14.0.
- **The change is exactly four hunks and all four are the enumerated sites.** Diff against
  `scratchpad/08.v2150.bak` (2866 → 2974 lines, **+108**): `@@ -2,8 +2,58` (header `Version` +
  `Status`, ops 1–2) · `@@ -12,8 +62,23` (the v2.15.0 Status record, op 3) · `@@ -615,7 +680,7`
  (the `Source:` Doc 07 pin, op 4) · `@@ -758,6 +823,49` (the v2.14.0 Changelog's ISS-01 sweep,
  op 5). **113 lines added, 5 removed, no unenumerated region**, and everything from live line
  **872** to EOF is byte-identical — the mechanical proof that §3.x, §6, §7, §8 and §9 did not move.
- **The §7 gap log and §6 dashboard are untouched**, so `G-PHASE3` **40** · `G-NOMECH` **19** ·
  `G-TRACE` **32**, by-reason **120** / distinct **119**, stories **23 of 142** and test cases
  **528 / 275 / 253** stand as verified at earlier cycles. *(My own crude code tally over §7 does
  not reproduce the by-reason split exactly, because **27** rows carry two gap codes — e.g.
  `G-TRACE + G-PHASE3` on FR-121..FR-129 — and my parser attributes only the first. That is a
  limitation of my instrument, not a defect: byte-identity with v2.15.0 settles the question.)*
- **No transcription residue except ISS-C4-01's indent:** no `FIND:` / `REPLACE WITH` marker, no
  conflict marker, fence count **2** and balanced, **0** CRLF, **0** trailing-whitespace lines,
  **0** duplicated adjacent lines. Marker-row column histogram **identical before and after**
  (`{4:3, 5:1, 6:23, 7:24, 8:110, 11:2, 12:2}`), anomaly sets identical by content.
- **The `Source:` pin survived its own edit.** L683: **10 / 10** raw parens, **9 / 9** stripping the
  backticked literals, final depth **0**, minimum depth **0**, terminating `) ·`; siblings L681
  **12 / 12** and L682 **3 / 3**. ISS-C2-01's repair is intact.
- **The rulings.** All six OPEN rulings (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093) are
  untouched by the diff and stand as confirmed at cycles 1–3; FR-085's closure and the TC-3476
  re-homing stand; **rule 4a** stands; `TD-RTM-05` stands.
- **Ships dark, and reversibly.** `ELECTIONS` `prod: false`; `ENROLMENT_UI`
  `{ dev: true, staging: false, prod: false }`. **No code changes at this version**, so reversal is
  reverting four document hunks, which restores v2.15.0 exactly.

## 7. Merge sign-off — re-stated on the three closures

**Yes to all three, re-verified at this version and not carried on the cycle-3 finding.** This is my
RACI accountability ("RTM complete (zero gaps)"), and I state it separately from the document
verdict.

- **FR-036 — sign.** Row L2427, **8 columns, one ✅**, untouched by the diff. The clause-by-clause
  map against Doc 02 L895 verified at cycle 2 stands; the backward trace resolves in Doc 07, now
  **Approved at v2.12.0 (PASS 97%, 0C/0H/0M)** — and the pin in this matrix now *says* so, which was
  ISS-C3-03. The cycle-2 qualification that the source was In Review is **spent in the right
  direction: the source is stronger than when I signed it, not weaker.**
- **FR-037 — sign, under rule 4a.** Row L2428, **8 columns, one ✅**, untouched by the diff. Rule
  4a's two limbs range over the same evidence (the ISS-C2-03 repair, verified at cycle 3 against the
  code: five files, 17·8·1·2·2 matching lines; `UT-0904`'s absence `it` verbatim at
  `apps/web/test/candidates.test.tsx:133`; `TC-3614` genuinely on the FR-085 row). The 4a revisit
  flag for the FR-132 identity layer is intact and §8 carries the trigger. The routed absence-scan
  `it` remains owed hardening **for the engineer**, not a condition of the closure.
- **FR-085 — sign.** Row L2479, **8 columns, one ✅**, untouched since cycle 1. `TC-3614` being
  cited from the FR-037 row does not weaken it; the TC-3476 re-homing (`US-0132 · FR-131 clause 8 ·
  DES-094`, still Blocked) stands.

**Gate 2 remains NOT MET, and that is a fact about the product, not about this document.**
**119 of 138 Must rows are open** (13.8% complete) and §9 closes with "*There are 119 open Must
rows. The gate stays shut.*" The RTM's zero-gap criterion is a **Gate-2 readiness condition
certified by the project-manager** with `node hooks/run_gates.cjs --gate2`; this document is an
**accurate record of a gate that is shut**, which is exactly what it should be. **I withhold
Gate-2 sign-off on that basis, and on that basis only. Merge sign-off for the three closures is
given.**

## 8. Routing instruction (to the owning role)

**PASS.** The **tester (Ji-woo Park)**, as owning role, sets `Status: Approved` on Doc 08 v2.16.0
citing this report, and the SOP advances. **No rework version is required.** The two Lows are
carried, non-blocking, and recorded for the next touch:

1. **ISS-C4-01** — restore line 65's 15-space indent; add an indent assertion to the spec tail.
2. **ISS-C4-02** — no document change owed; tighten the spec tail's grep-check discipline.

Also carried into the next synchronised Doc 07/08 touch, unchanged and unrelated to this version:
`TC-3540`'s promotion to Pass (obs.) on R-22 evidence, and the `TD-RTM-02` denominator recount
(Doc 07 "521 designed" vs this matrix's "528" — the disclosed convention difference).

Nothing routes outside the tester except the standing **engineer** items, unchanged: the FR-037
absence-scan `it` (owed hardening under 4a), the `NOMINATION_ENDORSEMENTS_MIN` value pin and its
stale "flagged for ratification" `it` title, and the `UT-0902` own-property enumeration.

**One note worth keeping beyond this document.** The device this version invented — *anchor the
falsifiable claim to a frozen reference, publish the live observation in a sentence that contains
none of the strings it counts, and promote the invariant to the claim* — is the general solution to
a self-referential measurement, and it is now **demonstrated rather than asserted**: I rebuilt the
frozen reference from `HEAD` plus two specs in **60 operations** and it matched **byte for byte**.
That is a reusable technique, and it closed an issue that survived three previous versions.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: PASS` at cycle 4 of 5; the loop closes here and does not reach the cap.
Trajectory: **87% → 94% → 96% → 98%**; issue mix **0C/2H/3M/3L → 0C/0H/2M/2L → 0C/0H/1M/2L →
0C/0H/0M/2L**.
