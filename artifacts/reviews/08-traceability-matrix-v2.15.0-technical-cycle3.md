# Document Review Report — Doc 08 RTM v2.15.0 (technical, cycle 3 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** (Ji-woo Park) owns this
> document; this review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded before
> dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.15.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 96%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 3 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**ISS-C2-01 is fixed, and I confirmed nothing on trust — I counted the characters.** The `Source:`
pin at line **618** now carries **9 open parens and 9 close**; stripping the two deliberate
backticked literals it is **8 / 8**, the running depth returns to zero and **never goes negative**,
and the line now ends **`) ·`** exactly like its two siblings at 616 (**12 / 12**) and 617
(**3 / 3**). The three false claims are corrected **where they were made**: the v2.14.0 Status
record (L115) and the v2.14.0 Changelog entry (L860) are amended in place, and the pin's own
"Restored and closed" annotation is superseded by a v2.15.0 annotation on the same line — the dated
record is annotated, not rewritten, which is this document's convention.

**ISS-C2-03 is fixed and I re-verified both limbs against the code, not the prose.** Rule 4a limb
(i) now splits the evidence by site — the store/service (`UT-0897`, `UT-0900`, `UT-0901`) and **the
web surface (`UT-0904`, `TC-3614`)** — and limb (ii) now states that of the five files only
`packages/sdk/src/candidates.js` holds the datum **at rest**. I re-ran the extent scan and it
reproduces **exactly**: five files, **17 / 8 / 1 / 2 / 2** matching lines, nothing in
`packages/protocol`, `services/indexer` or any other `apps/web` route. `UT-0904`'s first `it` reads
verbatim *"after standing, nothing is public and the gate names the one-way door; the facts are
shown only in step 2"* at `apps/web/test/candidates.test.tsx:133`, and **`TC-3614` is genuinely on
the FR-085 row** (L2371, TC cell) as the annotation says. **ISS-C2-04** is discharged: I re-ran
three of the spec tail's declared survivors and all three are right (`A grep for the stale trio`
**1 → 2**, the retained v2.14.0 sweep header **1**, `Re-published at v2.15.0, ISS-C2-02` **1**).

**Nothing moved, and I derived that rather than read it.** My own marker counter returns §3.1
**114 / 19 / 95**, the pre-v2.0.0 block **54 / 14 / 40**, §3.2 **24 / 0 / 24**, §3.3 **23 / 5 / 18**,
rows carrying **both** markers **0**, Must total **138 / 19 / 119** — identical to v2.14.0.
`node hooks/run_gates.cjs --audit` reads **derived 138 Must rows, 19 COMPLETE, 119 OPEN** against
**published by §9: 19 / 119** — the two independent signals **AGREE**. `npm test` is
**739 / 739, exit 0** (contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138);
`npm run lint:deps` clean, 7 workspaces, layering OK; `ELECTIONS` is `prod: false` and
`ENROLMENT_UI` is `{dev: true, staging: false, prod: false}` — **the drop still ships dark**.
**I diffed the live file against the PM's v2.14.0 backup: exactly six changed regions**, each one
of the spec's six sites, **nothing outside them**. FR-037 keeps **8** columns and **exactly one**
status marker; the marker-row column-anomaly set is **identical before and after**. No `FIND:` /
`REPLACE WITH` marker, no conflict marker, no stray fence, **0** CRLF, no trailing whitespace, no
duplicated adjacent line. The tester's own post-apply integrity assertion (old header **1**, old
"15 hits" line **1**, new sweep **1**) reproduces.

**The verdict is FAIL on one Medium, and it is the same device failing a third time.** ISS-C2-02's
substance is repaired and well repaired: the root cause is **correctly diagnosed** (the sweep
conflated the grep's hit list with the list of sites corrected), the derivation is separated from
the grep, and **the hit list now matches the grep exactly against the text it describes** — I ran
the published command against the v2.14.0 backup and got **14 lines / 21 occurrences**, hit for hit
the fourteen lines the new classification names, **including the §9 tester sign-off row that the
v2.14.0 sweep missed**. But the re-published enumeration makes two statements a reader can falsify
in thirty seconds. **(a)** It says *"Run against **this file** it returns 14 lines and 21
occurrences"* and names the command
`grep -n -E "16 complete|98 open|122 open" docs/08-traceability-matrix.md`. Run against **this
file** — the published v2.15.0 document — it returns **22 lines / 38 occurrences**. The eight extra
lines are this correction's own quotations (L37, L42 in the v2.15.0 Status; L765, L770, L774, L778,
L780, L788 in the new sweep), which the **spec tail predicted** and the **document does not
disclose**. **(b)** Class (a) is published as "5 lines, **11** occurrences"; its own five lines
carry **1 + 3 + 1 + 1 + 6 = 12**, so the four classes sum to **20** against the total of **21** the
same paragraph asserts twice. The finding itself is sound and I verified it independently — I
classified all 22 live hit lines myself and **every one is a quotation, a dated record, the *from*
side of a stated transition, or the FR-132 "FR-**122** open tier" false positive; zero live stale
figures remain** — which is why this is a Medium and not a High. But the sentence *"That claim is
now checkable by running the command above"* is the version's whole thesis, and running the command
above does not produce what is printed beneath it.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the pass bar is conjunctive; one Medium blocks regardless of score.

## 3. Per-cycle-2-issue verification (FIXED / not)

| Cycle-2 ID | Sev | Status at v2.15.0 | Evidence I used |
|---|---|---|---|
| ISS-C2-01 | **Medium** | **FIXED** | Counted the pin line (L618) character by character with my own script: **9 open / 9 close** raw; stripping the two backticked literals gives **8 / 8** with final depth **0** and **minimum depth 0** (never negative). Siblings L616 **12 / 12** and L617 **3 / 3**, neither containing parens inside code spans. The line now terminates **`) ·`**, the separator its siblings carry; L619 still opens the unrelated `_(v2.7.0: …)_`, which is now correctly a *separate* `Source:` entry rather than a structural break. The three claims: **L115** (v2.14.0 Status record) now reads "the sentence and the italic restored **but the `TC-TRUMOCRACY (` group left OPEN, which v2.15.0 closes (ISS-C2-01)**"; **L860** (v2.14.0 Changelog) now reads "the tail restored and the pin advanced … **but the `TC-TRUMOCRACY (` group itself was NOT closed, and this entry said it was**"; the pin's own annotation is superseded in place by a v2.15.0 annotation naming the 7/5 count. **The v2.15.0 Status's claim "the pin now ends `) ·` like its siblings" is TRUE** — which, for a version whose subject is claims about its own fixes, is the point |
| ISS-C2-02 | **Medium** | **PARTIALLY FIXED → ISS-C3-01 (Medium)** | Ran the published command against the PM's v2.14.0 backup: **14 lines / 21 occurrences** — bak L19, 709, 712, 716, 789, 1270, 1314, 1802, 2326, 2329, 2537, 2539, 2541, 2747 — and mapped them hit for hit onto the four published classes: **(a)** 19, 709, 712, 716, 2329 (5 lines ✓); **(b)** 789, 1270, 1314, 1802, 2537, 2539, **2747** (7 lines ✓, and **2747 is the previously unenumerated hit** — old L2596 in the cycle-2 line numbering — **now covered and correctly classified as a dated prior-version record**); **(c)** 2541 (1 ✓); **(d)** 2326 (1 ✓). **The line-level enumeration is exact and the root cause is diagnosed, not patched.** **Two residual falsifications:** the "this file" framing (the live file returns **22 / 38**) and class (a)'s occurrence subtotal (**11** published, **12** derived; classes sum to 20 ≠ 21). See ISS-C3-01 |
| ISS-C2-03 | Low | **FIXED** | FR-037 row (L2320): limb (i) now reads "**At the store and service** … UT-0897, UT-0900 and UT-0901 … **At the web surface**, **UT-0904** (`TC-3614`, already on the FR-085 row) is the absence test: its first `it` asserts that after standing **nothing is public** and the gate names the one-way door", with a v2.15.0 annotation naming ISS-C2-03; limb (ii) now reads "**Of the five, only `packages/sdk/src/candidates.js` holds the datum AT REST**" and classifies the other four (caller's own input · demo fixture · label copy ×2). Verified: the `it` exists verbatim at `apps/web/test/candidates.test.tsx:133`; `TC-3614` is on the FR-085 row's TC cell (L2371); the extent scan returns the same 5 files / 17·8·1·2·2. Row stays **8** columns, **1** marker |
| ISS-C2-04 | Low | **FIXED (recorded; no document change was owed)** | The spec tail's declared survivors were run, not predicted, and I re-ran three: `A grep for the stale trio` → **2** (predicted 1 before / 2 after ✓); `THE SWEEP, AS A FALSIFIABLE ENUMERATION RATHER THAN A COUNT` → **1** ✓; `Re-published at v2.15.0, ISS-C2-02` → **1** ✓. The v2.14.0 mis-prediction is recorded in the tester's note §3 with the true figure **2** and both self-quoting sites named |

## 4. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Unchanged by this version and re-confirmed by diff: no `TC` id, evidence cell, `UT` attribution or clause map is touched except FR-037's limb (i), which **adds** a citation (`UT-0904` / `TC-3614`). FR-036's clause-by-clause map against Doc 02 L895 stands as verified at cycle 2 |
| T2 Soundness | 20 | 98 | 19.6 | The cycle-2 deduction is repaired: rule 4a's two limbs now range over the same evidence, and I checked the reconciliation against the code rather than the prose — the component holds only the caller's own input, `page.tsx` a demo fixture, the i18n pair label copy, and the only at-rest holding is the SDK store, which limb (i)'s three `UT`s cover. FR-081 correctly stays OPEN on the prohibition / positive-obligation distinction |
| T3 Traceability & IDs | 20 | 94 | 18.8 | Every derivation reproduces (114/19/95 · 54/14/40 · 24/0/24 · 23/5/18 · both-markers **0** · total 138/19/119); both hook signals agree; the extent scan reproduces to the line; the `it` and the `TC-3614` cross-row citation check out. Deduction: ISS-C3-01 — the sweep's own arithmetic does not close (20 vs 21) |
| T4 Security & failure modes | 15 | 98 | 14.7 | `ELECTIONS` `prod: false` and `ENROLMENT_UI` `{dev: true, staging: false, prod: false}` re-verified in `packages/protocol/src/flags.js`; the FR-037 closure's 4a revisit flag is intact and §8 still carries the FR-132 trigger; `npm audit` reports **11** dependency-tree findings (1 critical / 4 high / 5 moderate / 1 low), **unchanged and none introduced here** — `package-lock.json` is unmodified in this working tree and this version touches no code |
| T5 Completeness & testability | 15 | 90 | 13.5 | The sweep is materially more complete than v2.14.0's — command published, all fourteen lines classified, the missed §9 hit enumerated, the derivation separated from the grep. Deductions: ISS-C3-01 (the published check does not reproduce against the published file) and ISS-C3-02 (this version publishes **no site enumeration at all**, dropping the device that was the strongest thing in v2.14.0 — I had to diff to establish that all six regions are accounted for) |
| T6 Convention compliance | 10 | 93 | 9.3 | MINOR bump correctly taken per the house rule; ISO-8601; `Status: In Review — v2.15.0 … Rework cycle 3 of 5` with the v2.14.0 record retained beneath it; dated records annotated rather than rewritten; corrections made where the claims were made. Deductions: ISS-C3-02's absolute scope claim, ISS-C3-03's pin lag |
| **Total** | **100** | — | **95.5 → 96%** | — |

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C3-01 | **Medium** | T5, T3 | `Changelog:` v2.14.0 entry, the re-published ISS-01 sweep, lines **765–784** — specifically the sentence "**Run against this file it returns 14 lines and 21 occurrences, and these are they, every one classified:**", the class header "**(a) Quotations inside the corrections themselves — 5 lines, 11 occurrences**", and the closing "Every one of the **21** occurrences is … **That claim is now checkable by running the command above.**" | **The re-published enumeration is better in every way that matters and still makes two statements a reader can falsify.** **(a) "this file" is the wrong file.** The published command names `docs/08-traceability-matrix.md`; run against the published v2.15.0 document it returns **22 lines / 38 occurrences**, not 14 / 21. The eight extra lines are this correction's own text — **L37** and **L42** (the v2.15.0 Status quoting the grep terms and the §9 hit) and **L765, L770, L774, L778, L780, L788** (the new sweep itself). The figure published is true of the **v2.14.0 text this version reworks**, which I confirmed against the PM's backup: **exactly 14 lines / 21 occurrences, matching the classification hit for hit**. The spec tail (`artifacts/status/SPEC-2026-09-21-doc08-v2.15.0.md`, "After transcription" item 3) states plainly that "after transcription the count will be **higher** … that is expected, and the classification says so" — **but the classification does not say so; it says "this file"**. A reader following the instruction the sentence gives finds 17 unclassified occurrences inside a list that claims to classify every one. **(b) The classes do not sum to the total.** Class (a) is published as "5 lines, **11** occurrences". Its five lines carry **1** (the v2.14.0 Status record) + **3** (the "stale trio" line) + **1** + **1** (the two other changelog lines) + **6** (the §3.1 all-114 subtotal — the text itself says "six times") = **12**. Classes (b) 7 lines + (c) 1 + (d) 1 contribute one occurrence each, so the published split totals **20** against the **21** the same paragraph asserts twice. **The substance is sound and I verified it without the document's help:** I classified all 22 live hit lines myself and every one is a quotation inside a correction, a dated record, the *from* side of a stated transition, or the FR-132 false positive — **zero live stale figures remain**. What fails, for the third consecutive version, is the device offered so that a reader need not take that on trust | Tester: state the file each figure is true of and publish both — e.g. "against the **v2.14.0 text this version reworks**: 14 lines / 21 occurrences, classified below; **against this published file: 22 lines / 38 occurrences** — the additional 8 lines being this correction's own quotations (the v2.15.0 Status and this sweep), which is what a self-quoting correction does to its own grep". And correct class (a) to **12 occurrences**, so that 12 + 7 + 1 + 1 = **21** closes |
| ISS-C3-02 | Low | T5, T6 | Header `Status:` block, lines **6–59**; compare the v2.14.0 Changelog entry's "**Every site changed, enumerated — sixteen sites, and these are they**" (lines 752–759) | **This version publishes no site enumeration, and its scope claim is stated absolutely.** v2.13.0 and v2.14.0 both enumerated every changed site, and the cycle-2 report called v2.14.0's sixteen-site enumeration "the strongest thing in this version" — it is the one device that retires the N+1th-site defect class this lineage has now produced twice. v2.15.0 drops it: the Status block describes the four issues and their fixes but never lists the places it edited. (There is no `Changelog: v2.15.0` entry either, but the retained-Status chain is this document's established alternative — v2.12.0 through v2.12.3 carry no changelog entry — so the missing entry is **not** itself a defect.) **No false claim is made, and I verified the scope by diff** — six changed regions, all six inside the spec's six sites, nothing outside — **but the reader cannot.** Relatedly, the Status asserts "**Nothing in this version touches a row, a marker, a figure or a ruling**" while **OP 7 edits the FR-037 row's Decision cell** (adding `UT-0904` / `TC-3614` to limb (i)); the Status explains that edit two paragraphs later, so nobody is misled, but the sentence is stated more absolutely than it is true | Tester: add a one-line site enumeration to the v2.15.0 Status record — "six sites: header Version+Status · the v2.14.0 Status record's ISS-05 claim · the v2.14.0 Changelog's ISS-05 claim · the `Source:` pin · the v2.14.0 Changelog's ISS-01 sweep · §3.1 FR-037" — **counted from the diff, not from the issue list**; and narrow the scope claim to "no row's marker, status, gap code, `TC` id or ruling moves; the only row edited is FR-037's Decision-cell prose" |
| ISS-C3-03 | Low | T6 | `Source:` block, line **618**: "**→ Pin advanced again for v2.15.0: TC-TRUMOCRACY v2.12.0** (**In Review** — rework cycle 3 of 5 against 07-test-cases-suites-v2.11.0-technical-cycle2.md, FAIL 94% …)" | **Expected pin lag, NOT a defect of this version's authoring — stated explicitly because the brief asks which it is.** Doc 07 reached **v2.12.0 Approved** (`artifacts/reviews/07-test-cases-suites-v2.12.0-technical-cycle3.md`, **PASS 97%, 0C/0H/0M/2L**) in this same session, **after** this spec was written — the tester's note §7 item 2 records Doc 07 v2.12.0 as "under cycle-3 review" at the time, which was true. The **version pinned is correct** (v2.12.0, the approved one); only the status word is stale, and the pin carries the standing qualification that the evidence is the 97 `it`s of R-21 and "does not depend on either document's review status", which I re-verified green. It is recorded as a Low only because **this document set its own precedent for exactly this**: the v2.12.0 annotation corrects a pin that read "In Review" after Doc 07 v2.8.1 had reached Approved, on the reasoning that an unannotated status "reads as settled evidence when it is not" — here the inverse | Tester: at the next touch, annotate the pin "**Doc 07 v2.12.0 reached Approved on 2026-09-21** — 07-test-cases-suites-v2.12.0-technical-cycle3.md, PASS 97%, two Lows carried — after this annotation was written", on the v2.12.0 precedent. **No row, figure or ruling moves with it**: I read Doc 07 v2.12.0's two carried Lows (an orphaned bold-close marker in its header fence; a "6 sites" count against 7 diff hunks) and **neither reaches a `TC` id, an evidence cell, a figure or a ruling in this matrix** |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 6. What is confirmed and needs no rework — stated so cycle 4 does not re-litigate it

- **The suite and the hook signals.** `npm test` **739 / 739, exit 0** (contracts 95 · protocol 178
  · sdk 287 · ui 25 · indexer 16 · web 138 = 739); `npm run lint:deps` clean, 7 workspaces,
  layering OK; `node hooks/run_gates.cjs --audit` reports **derived 138 Must rows, 19 COMPLETE, 119
  OPEN** against **published by §9: 19 / 119** — the two independent signals **AGREE**. `--audit`
  also shows `08-traceability-matrix.md v2.15.0 (technical) - no report for this version`, which is
  **expected** at the moment of review and is discharged by this report.
- **Nothing moved, derived not read.** §3.1 **114 / 19 / 95**; §3.1 pre-v2.0.0 block
  **54 / 14 / 40**; §3.2 **24 / 0 / 24**; §3.3 **23 / 5 / 18**; rows with **both** markers **0**;
  Must total **138 / 19 / 119**. §6 is untouched by the diff: Test cases **528 / 275 / 253** (136
  inh. · 139 obs.), Stories **142 / 134 / 23 meet DoD**, BR 21, FR-Must 114, NFR-Must 24. The Doc 07
  "**521** designed" vs this matrix's "**528**" gap is the **disclosed `TD-RTM-02` convention
  difference** (Doc 07 row anchors vs this dashboard's expanded figure), pre-existing, explained in
  §6's convention notes, and not moved here.
- **The change is exactly six regions and all six are the spec's sites.** Diff against
  `scratchpad/08.v2140.bak`: `@@ -5,2 +5,55` (header Version + Status, OPs 1–2) · `@@ -62 +115`
  (the v2.14.0 Status record's ISS-05 claim, OP 3) · `@@ -565 +618` (the `Source:` pin, OP 5) ·
  `@@ -707,0 +761,42` (the re-published sweep, OP 6) · `@@ -765 +860` (the v2.14.0 Changelog's
  ISS-05 claim, OP 4) · `@@ -2225 +2320` (§3.1 FR-037, OP 7). **No unenumerated region** — which is
  why ISS-C3-02 is a Low about a missing device and not a High about a missed site. All 7 spec OPs
  applied exactly once; the tester's post-apply integrity assertion (old sweep header **1**, old
  "15 hits" line **1**, new sweep **1**) reproduces — **the near-miss she records in her note §5
  did not reach the file**.
- **No transcription residue:** no `FIND:` / `REPLACE WITH` marker, no conflict marker, no stray
  fence (fence count 2, balanced), **0** CRLF, **0** trailing-whitespace lines, no duplicated
  adjacent line. FR-037 keeps **8** columns and **exactly one** status marker; the marker-row
  column-anomaly set is **identical before and after** — same rows, none new, none fixed.
- **The rulings.** All six OPEN rulings (FR-039, FR-065, FR-066, FR-067, FR-081, FR-093) are
  untouched by the diff and stand as confirmed at cycles 1 and 2; FR-085's closure and the TC-3476
  re-homing stand; **rule 4a** stands and is now internally consistent; `TD-RTM-05` stands.
- **Ships dark, and reversibly.** `ELECTIONS` `defaults: { dev: true, staging: true, prod: false }`
  and `ENROLMENT_UI` `{ dev: true, staging: false, prod: false }` in
  `packages/protocol/src/flags.js`. This version changes **no code**, so it is trivially
  reversible: reverting the six document regions restores v2.14.0 exactly.

## 7. Merge sign-off — a separate question, re-answered

**Yes to all three closures, unchanged and re-verified.** This is my RACI accountability ("RTM
complete (zero gaps)") and I state it separately from the document verdict, because ISS-C3-01 is a
defect of *statement* inside a changelog annotation: it touches no row, no marker, no figure and no
ruling, and I re-derived every count myself rather than reading it.

- **FR-036 — sign.** Nothing in this version touches the row. The clause-by-clause map against
  Doc 02 L895 verified at cycle 2 stands, every case names an `it` I read, and the backward trace
  resolves in Doc 07 — which is now **Approved at v2.12.0 (PASS 97%)**, so the cycle-2
  qualification that the pin pointed at an In-Review sibling is **spent in the right direction**:
  the source is stronger than when I signed it, not weaker.
- **FR-037 — sign, under rule 4a, and ISS-C2-03 is now discharged.** Both limbs range over the same
  evidence; the extent scan reproduces exactly (5 files, 17·8·1·2·2); `UT-0904`'s absence `it`
  exists verbatim and is correctly attributed to `TC-3614`; the 4a revisit flag for the FR-132
  identity layer is present and §8 carries the trigger. The routed absence-scan `it` remains owed
  hardening for the engineer, **not** a condition of the closure.
- **FR-085 — sign.** Untouched since cycle 1. `TC-3614` being cited from the FR-037 row does not
  weaken it; the TC-3476 re-homing (`US-0132 · FR-131 clause 8 · DES-094`, still Blocked) stands.

**Gate 2 remains NOT MET, and that is unrelated to this review:** **119 of 138 Must rows are open**
(13.8% complete). The RTM's zero-gap criterion is a Gate-2 readiness condition certified by the
project-manager with `node hooks/run_gates.cjs --gate2`; this document is an accurate record of a
gate that is shut, and **I withhold Gate-2 sign-off on that basis, not on this version's Medium.**

## 8. Routing instruction (to the owning role)

**FAIL.** Route to the **tester (Ji-woo Park)**, the owning role for Doc 08. Rework MUST produce a
new version — bump the `Version:` semver and set `Status: In Review`, then re-enter this loop at
**cycle 4 of 5**. **A PATCH is sufficient**: `v2.15.1`. ISS-C3-01 is two sentences and one figure
(11 → 12) inside one changelog annotation; ISS-C3-02 is a one-line site enumeration **counted from
the diff** plus a narrowed scope clause; ISS-C3-03 is one annotation on the `Source:` pin. **No
row, marker, count, gap code or ruling may move, and I will re-derive all of them.**

One caution for the next spec, since it is the exact shape of this cycle's Medium: **the count a
self-quoting correction publishes about itself changes when the correction is transcribed.** Any
grep figure v2.15.1 publishes about this file must either be run **after** the intended text
exists, or be stated with the file and version it is true of.

Nothing here routes outside the tester except the standing engineer items, unchanged: the FR-037
absence-scan `it` (owed hardening under 4a), the `NOMINATION_ENDORSEMENTS_MIN` value pin and its
stale "flagged for ratification" `it` title, and the `UT-0902` own-property enumeration.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: FAIL` at cycle 3 of 5. **Two cycles remain.** Trajectory: **87% → 94% →
96%**; issue mix **0C/2H/3M/3L → 0C/0H/2M/2L → 0C/0H/1M/2L**.
