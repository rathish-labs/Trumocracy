# Document Review Report — Doc 08 Traceability Matrix v2.12.2 (technical, cycle 3)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.12.2
Review mode: technical
Reviewer role: reviewer-qa
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 3 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**The cycle-2 Medium is fully discharged, and the process note was adopted properly — more rigorously
than I asked for.** The sixth site is corrected. More importantly, the tester did not change "five"
to "six": it **retired the count** and replaced it with three pattern enumerations. I reconstructed
the **v2.12.1** file (by reverse-applying the nine spec operations against the current file; every
`REPLACE` matched exactly once) and re-ran all three commands on it. **Every figure the tester
published reproduces exactly** — P1 14 occurrences on 13 lines at 19, 68, 247, 249, 438, 519, 598,
1740, 1907, 2076, 2077, 2133, 2149 twice; P2 34 occurrences on 24 lines; P3 18 lines; `five places`
3, at lines 25, 444, 521. **No seventh site exists.** I then classified all **18** surviving range
occurrences in v2.12.2 myself: every one is a defect description, a minting/matrix-entry reference
where fifteen is true, a Doc 07 suite filing, the FR-131 "not at all" record, or the corrected site.
**No live, present-tense claim that a range or count verifies FR-132 §(d) survives anywhere.** The
line-2274 occurrences are, as the PM read them, quotations inside dated records describing the defect.

Both Lows are taken and neither is carried. Every frozen figure held, re-derived rather than
accepted. `--audit`: **138 Must · 16 COMPLETE · 122 OPEN, the two independent signals AGREE**.
`npm test` at the repo root: **exit 0**, 95 · 151 · 244 · 18 · 16 · 116 = **640/640**. No `R-21` was
minted and no product or test path is modified — **R-20 stands**, the call I ruled correct at cycle 2.

**It FAILs on one Medium, and — with real regret, because it is partly my own error that the tester
inherited — it is again a scope claim that does not survive one command.** The v2.12.2 changelog
entry, **line 513**, states in the present tense and in bold: **"§6 is not edited at all."** That is
false. This version's OP 8 edits **line 2055, which is inside §6** (Coverage dashboard, lines
2013–2058). §7 begins at 2059 and §8 Change-impact view at **2233**. The `v2.12.0 DoD check`
paragraph is a §6 paragraph and always was. **Provenance is in the tester's favour: my own cycle-2
report mislabelled that line "§8", and the spec's OP-8 heading inherited the label from me.** The
defect is nonetheless live in the governed document; it is contained — no figure in §6 moves, the
dashboard table is byte-identical — and the fix is one clause.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — route to the tester for **v2.12.3**, cycle 4 of 5.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | Unchanged and unharmed. The FR-132 Requirement cell restatement I verified clause by clause against Doc 02 v2.17.3 §4.46 at cycle 2 is untouched; §(a)–(e) all still accurate, the DES-100 seam still correctly demoted |
| T2 Soundness | 20 | 94 | 18.80 | The method is a genuine advance and survives independent re-derivation in full. Minus for one reasoning claim that does not hold: "the merge is symmetric, which is why both counts land on 14" (**ISS-02**). The totals coinciding is a three-for-three arithmetic coincidence, not a structural property — and the sentence's explanation is inaccurate for line 1862 |
| T3 Traceability & IDs | 20 | 98 | 19.60 | **Cycle-2 ISS-01 fully discharged.** I classified all 18 range occurrences and both word-claim sites individually; nothing live and wrong remains. §3.2 NFR-023 is still unedited — TC-2331, TC-2332, TC-3576, TC-3586, two evidence entries, `G-UI`, Complete 0. FR-131 and FR-132 both still OPEN (G-PHASE3); distinct `TC` ids **419 → 419** |
| T4 Security & failure modes | 15 | 96 | 14.40 | Untouched and still sound. Gate-2 FAIL on all six rows, rollback "never drilled (TC-2425)", `/verify` dark above `dev` behind `enrolment_ui`. Reversibility total: ten changed lines in one markdown file, no code, test or config path |
| T5 Completeness & testability | 15 | 88 | 13.20 | The headline achievement is real — the sweep is now falsifiable, and I falsified nothing. Minus for the **Medium** (a new containment claim this version's own edit breaks) and for **ISS-03** (the published enumeration is anchored to a state no reader can obtain) |
| T6 Convention compliance | 10 | 90 | 9.00 | Patch bump correct, retained-record convention honoured throughout — both ISS-02 sites are **annotated, not rewritten**, exactly as asked. `Status: In Review`, ISO-8601 dates, no `TC` minted/retired/re-statused, §7 adds and retires no entry. Minus for the §8/§6 mislabel carried into the version record |
| **Total** | **100** | — | **94%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T5/T6 | **Changelog, the `v2.12.2` entry, line 513** | **A false containment claim about this version's own edit footprint, in the sentence a Gate-2 reader uses to decide whether the dashboard needs re-deriving.** The entry reads: *"No row is opened, closed, reclassified or re-owned; no `TC` is minted, retired or re-statused; §7 adds and retires no entry; **§6 is not edited at all**."* The first three are true — I verified each. **The fourth is false.** OP 8 edits line **2055**, and §6 (Coverage dashboard) spans **2013–2058**; §7 begins at 2059 and §8 Change-impact view at **2233**. The `v2.12.0 DoD check` paragraph is a §6 paragraph and always was. The words "at all" foreclose the charitable reading that "§6" means only the dashboard table. Three aggravating facts and one strongly mitigating one. **(i)** It is the **third** version in this lineage to publish a scope claim that is falsifiable in one command and fails it — a `diff` against the prior state — and it does so in the very version that retires the previous one. **(ii)** The tester's dry-run invariant list records "§6 not edited at all" as *verified*, so the verification itself ran against the wrong section boundary: the method, not only the sentence, is defective. **(iii)** §6 is the one section a reader trusts to hold the census (500/500/245/255, stories 142/134/17/125, FR-Must 114·16·98), so a false "untouched" guarantee about that specific section is not cosmetic. **Mitigating, and I record it plainly: the mislabel is mine.** My cycle-2 ISS-02 located that line in "**§8**, the v2.12.0 DoD check paragraph", and OP 8's heading repeats my label. My own §6.5 row then said "§6 ... lines 1888–1932" — a range that contains line 1930 — so my report contradicted itself and the tester inherited the wrong half | Correct the claim where it is made. Either **"§6's dashboard table, census and by-reason figures are not edited; §6's v2.12.0 DoD-check paragraph gains the ISS-02 annotation and no figure in it moves"**, or drop the section-level claim and state the invariants that actually hold (status markers 152 → 152, 26 complete markers unchanged, distinct `TC` 419 → 419, ten original lines changed). Correct the `§8` label to `§6` in the version record. **No figure moves with this fix** |
| ISS-02 | Low | T2 | **Header `Status:` record, the "Derived independently" paragraph**, and its echo in the changelog | **The comparison to my cycle-2 enumeration is factually right about every line and slightly wrong about why.** Right, and I verified all six mechanically: **410, 1862 and 1930 do not contain the range** and **68, 2077 and 2133 do** — my cycle-2 §6.2 list had them backwards. Three residues. **(a)** "the merge is symmetric, which is why both counts land on 14" — symmetry is not a cause. I happened to misplace exactly three lines and omit exactly three; had I misplaced two and omitted four, the totals would have diverged with the substance unchanged. The document's very next sentence states the correct standard — "The classification, not the raw total, is the claim being made here" — and that sentence, not the symmetry one, is load-bearing. **(b)** "The first three carry the claim in words (P2) rather than as the range (P1)" is accurate for 410 and 1930 but **not for 1862**, which carries the word "fifteen" (fifteen `it(` occurrences) while making **no** §(d) claim — the tester's own P3 classifies it correctly as `it`-count provenance, so the document contradicts itself by one line. **(c)** It repeats my "14 hits on **12** lines" without noting that 12 was itself wrong: my enumerated list has **13** distinct lines | Replace the symmetry clause with the plain fact: the cycle-2 list mis-assigned three lines to the range pattern and omitted three that the range pattern does catch; the totals coincide by arithmetic, not by construction; every line's classification — claim or not-claim — is identical in both enumerations, and both find one live defect. Move 1862 out of the "in words" group. **Do not rewrite the dated text; annotate it** |
| ISS-03 | Low | T5 | **Header `Status:` record, P1/P2/P3 — the published commands** | **The enumeration is reproducible in principle and not in practice, because the state it is anchored to cannot be obtained.** The record says, correctly, "Run over the file exactly as v2.12.1 stood". But v2.12.1 was never committed — it existed only in the working tree — so a reader running the three published commands on the file in front of them gets **18 / 50 / 6**, not **14 / 34 / 3**, and has no way to tell a discrepancy from a defect. I could verify the claim only by reverse-applying the nine spec operations to reconstruct v2.12.1; that recipe lives in an `artifacts/` note the document never cites. This does not make the claim untrue — I confirmed every figure — it makes the falsifiability the version is claiming unavailable to its reader, which is the same gap in kind that "all five places" had | One sentence: cite `artifacts/tester-2026-09-20T2100-doc08-c3-spec.md` as the reverse-apply recipe for the v2.12.1 state, **and/or** publish the v2.12.2 figures beside the v2.12.1 ones (18 / 50 / 6 at this version, the delta being the annotations this version added), so a reader can run the command on the file they actually have and land somewhere |

> **Low** issues do not block the pass bar. **The single Medium forces this FAIL.**

## 5. Routing instruction (to the owning role)

**FAIL — route to the owning role, the tester (Ji-woo Park).** Rework **ISS-01** into **v2.12.3**
(**patch** again; nothing normative moves; set `Status: In Review`) and fold ISS-02 and ISS-03 into
the same edit rather than carrying them. This loop then re-reviews at **cycle 4 of 5**.

**Nothing may move.** Must **138** · COMPLETE **16** · OPEN **122** · G-PHASE3 **47** · G-TRACE **34** ·
Must-FR subtotal **114 · 16 · 98** · stories **142 / 134 / 17 / 125** · designed **500** · passing
evidence **245** (136 inh. · 109 obs.) · gaps **255** · §9's 245 + 15 + 233 = **493** · by-reason
47+13+9+5+6+4+5+34 = **123**, distinct open **122** (NFR-007 compound) · suite **640/640 (R-20)** ·
Gate-2 **six rows, six FAIL** · FR-131 and FR-132 **OPEN (G-PHASE3)** — all independently re-derived
at this cycle and all correct. **ISS-01 is one clause and one section label. No suite re-run is
required or wanted; do not mint R-21.**

**Doc 07 v2.9.0 stays Approved and is not reopened.** Docs 03 (v2.14.1) and 04 (v1.7.1) are the
architect's under a different reviewer; the audit's BLOCK on both is **expected** and I did not touch
them.

**And the sweep note is closed, not repeated.** I will not ask for a fourth sweep of the FR-132 claim
family — **that question is settled** (see 6.3). What ISS-01 asks for is the same discipline applied
one level up: **a claim about which sections this version touched is itself a sweep claim**, and this
version made that one by list rather than by pattern. The pattern for it is a `diff` against the
prior state — which the tester already ran as a dry run. It was read against the wrong boundary, not
skipped.

## 6. Reviewer's independent rulings (evidence, not acceptance)

### 6.1 How I obtained the v2.12.1 state — the convergence question cannot be answered without it

The tester's claims are about a file that no longer exists on disk. I reconstructed it: I parsed the
nine `FIND`/`REPLACE` pairs out of `artifacts/tester-2026-09-20T2100-doc08-c3-spec.md` and
reverse-applied them to `docs/08-traceability-matrix.md`, asserting each `REPLACE` occurred **exactly
once** before substituting. All nine did. The result's header reads `Version: 2.12.1` and **Rework
cycle 2 of 5**, and it is **2174** lines to the current file's **2299**. Two independent
confirmations that it is the right file: the PM's applier reported all nine FINDs matching exactly
once, and every line number in my own cycle-2 report resolves to the text I quoted there.

This also independently confirms the application was clean: **exactly 10 original lines changed**
(old 5, 6, 26, 247, 411, 424, 446, 522, 1930, 2149), no line deleted, no residue, no suffix
duplicate.

### 6.2 The convergence ruling — I re-derived both classifications, and here is my answer

**The two classifications do genuinely converge, but not for the reason the document gives, and the
symmetry is not the evidence.**

**One of the two line lists is wrong, and it is mine.** Run on the reconstructed v2.12.1:

| Pattern | Tester's published figure | What I got |
|---|---|---|
| P1 the contiguous range | 14 occurrences, 13 lines: 19, 68, 247, 249, 438, 519, 598, 1740, 1907, 2076, 2077, 2133, 2149 twice | **identical** |
| P2 `fifteen` (case-insensitive) | 34 occurrences, 24 lines | **identical** — 21, 47, 68, 71, 74, 410, 439, 485, 503, 505, 512, 521, 523, 529, 536, 572, 583, 1740, 1862, 1907, 1930, 2076, 2077, 2149 |
| P3 the co-occurrence net | 18 lines, adding only 1739, 1862, 2122 | **identical** — 18, 19, 21, 247, 410, 435, 438, 439, 521, 1739, 1740, 1862, 1930, 2076, 2077, 2122, 2133, 2149 |
| `five places` | 3 — lines 25, 444, 521 | **identical** |

My cycle-2 §6.2 listed **410, 1862 and 1930** as range hits and omitted **68, 2077 and 2133**. I read
all six lines. 410 reads *"§(d) is the requirement the **fifteen new cases** verify"*; 1930 reads
*"the requirement the **fifteen cases** verify"*; 1862 enumerates **TC-3577**, **TC-3578**, … as
separate ids inside §4's `it`-count provenance. **None of the three contains the contiguous range.**
68, 2077 and 2133 each contain it once. **The tester's correction of my line list is right on all six
lines, and I verified it mechanically rather than accepting it.** My report additionally said "14
hits on **12** lines"; my own enumerated list has **13** distinct lines. Both errors are mine and I
record them here rather than in a footnote.

**So why do I still call the convergence real, and strong?** Because the agreement that matters is
not the total — it is the **disposition of every hit**, and there is not one line on which the two
classifications disagree:

- **410 and 1930** — both enumerations call these *claim sites, dated records, annotate-don't-rewrite*.
  I raised them as ISS-02; the tester fixes them as ISS-02. Identical verdict, different pattern bucket.
- **1862** — both clear it. I called it "the §4 orphan check"; the tester calls it "§4's `it`-count
  provenance". Identical verdict.
- **68, 2077 and 2133** — **my report did classify all three, just not in §6.2.** My §6.1 verified
  2077 (§7 entry 118) and 2133 (§9 gate row) individually and found both **CLEAN**, and §6.2's
  closing paragraph cleared **68** by name as a "matrix-wide statement … correct as written". The
  bookkeeping error was confined to one list; **no hit went unclassified in either enumeration.**
- **247** — both find exactly one live defect, and it is the same one.

**Ruling: the convergence is real and it is strong evidence — evidence of the classifications
agreeing, not of the totals agreeing.** The matching total of 14 is a coincidence: I misplaced
exactly three and omitted exactly three. The document is wrong to offer symmetry as the explanation
(**ISS-02**). But its very next sentence states the correct standard in terms — *"The classification,
not the raw total, is the claim being made here"* — that sentence is right, the classification behind
it is right, and that is what I am signing off on. **The tester took neither my process note nor my
line list on faith: it re-derived from the file and corrected me. That is exactly the behaviour the
note asked for, and it is why I regard the sweep question as closed.**

### 6.3 Is the sweep question closed for this lineage? — Yes, for the FR-132 claim family

**Closed, and I will not reopen it.** I classified all **18** occurrences of the range in v2.12.2 by
hand:

- **Defect descriptions quoting the superseded text** — 24, 91, 516, 557, 641, and two of line 2274's
  three. Quotations inside corrections; not claims.
- **Minting / matrix-entry references, where fifteen is true** — 144, 1865, 2032, 2201, 2202, 2258,
  and 2274's third. Fifteen cases *were* minted and *do* enter the matrix: fourteen at FR-132, one at
  NFR-023. Lines 1865, 2202 and 2258 each say "**of which fourteen**" in the same breath.
- **Doc 07's suite filing** (723, under `TS-ADV-02`) and **the Doc 07 pin** (325, "it is the document
  the range is minted in").
- **The enumeration record itself** (522).
- **The corrected site** (323) — now *"§(d) is the requirement **fourteen of the fifteen `UT-0890`
  cases — TC-3577..TC-3585, TC-3587..TC-3591** — verify"*, with an ISS-01 annotation quoting what it
  replaced.

**Not one is a live, present-tense assertion that a range or count verifies FR-132 §(d).** The PM's
reading of line 2274 is confirmed: all three of its occurrences sit inside dated version records —
two quoting the defect, one recording the v2.12.0 mint. The word-claim family is closed too: the only
two lines that asserted *fifteen verify §(d)* now carry the annotation.

### 6.4 The sixth site and the two Lows — taken, and taken the way they were asked

| Item | Asked for | On disk |
|---|---|---|
| **ISS-01** (cycle 2) | Restate the scoped-read note as the fourteen, with the same annotation | **Done**, line 323. It states `fourteen of the fifteen UT-0890 cases — TC-3577..TC-3585, TC-3587..TC-3591`, quotes the superseded reading, cites Doc 07 v2.9.0's `US-0133 · NFR-023 · DES-085` with no FR named, and the TC-3576 precedent. The Doc 07 pin two lines below is untouched |
| **ISS-02 site A** | One-clause annotation at line 410; **do not rewrite** | **Done**, lines 487–490: *"(v2.12.2, ISS-02: **fourteen**, not fifteen — TC-3586 enters at the §3.2 NFR-023 row only …)"*. The v2.12.0 sentence is preserved **word for word** — I diffed it |
| **ISS-02 site B** | The same at line 1930 | **Done**, line 2055, same form, plus *"No count in this paragraph moves and the DoD figure stays 17 of 142."* Dated text preserved verbatim |
| **ISS-03** | One sentence in the changelog enumerating the pin advance | **Done**: *"at v2.12.1 the `TC-TRUMOCRACY` pin advanced **In Review → Approved** on artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md (PASS 97%, 0C/0H/0M/4L), **version unchanged at v2.9.0 — a status-currency correction only, not a re-read**"* — exactly the fix, exactly the caveat |

**Both Lows are annotated, not rewritten** — which is what the retained-record convention requires and
what I asked for. Neither is carried.

### 6.5 The frozen figures — re-derived at this cycle, not carried from cycle 2

| Figure | Claimed | Independently verified at v2.12.2 |
|---|---|---|
| Must / COMPLETE / OPEN | 138 · 16 · 122 | `--audit`: row status markers **138 / 16 / 122**; §9 publishes **16 / 122**; "the two independent signals **AGREE**" |
| Must-FR subtotal | 114 · 16 · 98 | §6 line 2018, verbatim |
| Designed · evidence · gaps | 500 · 245 · 255 | §6 line 2024: **500 / 500 / 245** (136 inh. · **109** obs.) **/ 255**; 500 − 245 = 255; 136 + 109 = 245 |
| Stories | 142 / 134 / 17 / 125 | §6 line 2023, verbatim |
| §9 denominator | 245 + 15 + 233 = 493 | §9 tests-green row, line 2258 |
| By-reason | 47·13·9·5·6·4·5·34 | Extracted cell by cell: **47, 13, 9, 5, 6, 4, 5, 34**; sum **123**; distinct open **122** (NFR-007 compound), and the note says so |
| Gate-2 verdict | 6 rows, 6 FAIL | Parsed the table: complete-chain, open-Must, tests-green, rollback, Doc-04 blockers, independent audit — **all six FAIL** |
| FR-131 · FR-132 | both OPEN (G-PHASE3) | Rows 1864 and 1865: both open-marker, both `G-PHASE3`. NFR-023 (1893) open-marker, `G-UI`, still citing TC-3586 — **unedited** |
| Suite | 640/640 (R-20) | **Re-run by me**: `npm test` exit **0** — 95 · 151 · 244 · 18 · 16 · 116 = **640** |
| No new run id | R-20 stands | `R-21` appears **zero** times as a run id (its three substring hits are `SCR-21`). `git status` shows **no** product, test or config path modified |

**Dry-run invariants, re-derived by diffing my reconstructed v2.12.1 against the file on disk:** open
status markers **152 → 152**; complete markers **26 → 26**; distinct `TC` ids **419 → 419**; the §9
tester-row pipe count **9 → 9**; **exactly 10 original lines changed**, every one accounted for by an
operation. All hold.

**The one invariant on the tester's list that does not hold is "§6 not edited at all"** — the tenth
changed line, old 1930 / new 2055, is a §6 line. That is **ISS-01**.

### 6.6 No suite re-run and no new run id — still right, and I checked rather than assumed

**Ruling: correct, unchanged from cycle 2.** `git status --porcelain` shows only `SECURITY.md`,
`artifacts/*` and Docs 03/04/07/08; no test in this repository reads any of them. Minting **R-21**
against an unchanged code state would manufacture two evidence items out of one execution — the
defect this document itself named at R-18/R-19. I re-ran the suite anyway rather than take **640** on
assertion, and it reproduces exactly. **R-20 stands, and nothing testable changed.**

### 6.7 Affirmations that stand, and scope kept

Not re-litigated and not reopened: the **FR-131/FR-132 tracing ruling**, the **Must-count reasoning**,
**`TD-RTM-03`'s disclosure sufficiency**, the **declined `SCR` link** (Conflict C-01 remains the
architect's), **R-20's discharge**, **`TD-RTM-01` / `TD-RTM-02` / `TD-RTM-04`** out of scope, and the
three cycle-1 Medium fixes I confirmed at cycle 2. All four §10 debts remain **OPEN** and are
correctly named rather than half-done. **Doc 07 v2.9.0 is Approved and is NOT reopened** — I re-read
its TC-3586 row: unchanged, still `US-0133 · NFR-023 · DES-085`, still naming no FR. Docs 03 (v2.14.1)
and 04 (v1.7.1) are the architect's under a different reviewer; their `--audit` BLOCK is **expected**
and I did not touch them. I did not open `artifacts/memory-index.json`.

### 6.8 Gate-2 posture (unchanged by this version)

`--audit` reports `Gate 2 traceability criterion: NOT MET` — **122 open Must rows**. This version
moves none of them and does not claim to. **Doc 08 cannot support a Gate-2 sign-off at any version
until those rows close**, and this loop is not about closing them — it is about whether the matrix
tells the truth about the gap. On the FR-132 claim family it now does, verifiably and reproducibly.
On its own edit footprint it is one clause short.

### 6.9 Cap awareness

This is **cycle 3 of 5**. Two cycles remain before the verdict becomes ESCALATED. I considered
whether ISS-01 is a Low, given that no figure in §6 actually moves and given that the mislabel
originated in my own cycle-2 report. I concluded **Medium**, for consistency above all: at cycle 2 I
made "the version publishes a completeness claim that a sixth site falsifies" a Medium, and this is
the same shape of defect in the same document — a scope claim, published as verified, that one
command falsifies. Severity is a property of the defect, not of whose mistake seeded it. **The fix is
one clause and one section label, and nothing normative moves with it.**
