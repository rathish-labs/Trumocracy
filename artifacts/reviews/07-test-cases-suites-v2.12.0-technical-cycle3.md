# Document Review Report — `docs/07-test-cases-suites.md` v2.12.0 (technical, cycle 3 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** (Ji-woo Park) owns this
> document; this review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded
> before dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.12.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 3 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**The Medium is fixed at the root and the fix survives the only test that matters — a diff.** I did
not read the enumeration; I counted it. `diff -u` of the live file against the PM's pre-application
backup of the v2.11.0 text (`scratchpad/07.v2110.bak`, 2568 lines to 2664) yields **exactly seven
hunks**, and **every one of the seven is named by an operation in the v2.12.0 change record**. There
is no N+1th site. The mapping, which I derived rather than accepted:

| Hunk (backup line) | Op | Enumerated site |
|---|---|---|
| `@@ -2,8` header `Version` + new `Status` | 1, 2 | (1) the header |
| `@@ -73,7` v2.11.0 Status record's carried-Lows line | 6 | (4) the v2.11.0 Status record's carried-Lows line |
| `@@ -359,7` new v2.12.0 Changelog entry | 3 | (1) the header |
| `@@ -372,14` v2.11.0 Changelog site enumeration | 4 | (2) "thirteen" to "fourteen" |
| `@@ -421,7` v2.11.0 Changelog carried-Lows line | 5 | (3) the ordinal dropped |
| `@@ -1190,7` §0.1 Pass (obs.) row | 7 | (5) R-22 added |
| `@@ -2414,7` §5.5 `TC-3540` *Verifies* | 8 | (6) the per-seam map |

**8 operations, 8 accounted for; 7 hunks, 7 accounted for; 0 unenumerated changes.** All 8 spec OPs
are present exactly once and transcribed verbatim — no `FIND:` / `REPLACE WITH` marker, no
four-backtick fence, no conflict marker, no duplicated line tail; the file is pure **LF** (0 CRLF),
0 trailing-whitespace lines, BOM unchanged.

**Every cycle-2 issue is FIXED and each verifies against the artefact, not against the document's
own summary of it.** ISS-01: the v2.11.0 entry now reads **fourteen** and site **(14)** is
`TC-3605`'s *Verifies* cell with **FR-036**, **US-0046**, **DES-027 rule 6** named and attributed to
the **Doc 08 v2.13.0 cycle-1 ISS-02 (High)** fold; the Status block states the cross-document fold
rides in v2.11.0 and names Doc 08 **v2.14.0** as its other half — I confirmed that half exists
(Doc 08 L2224, FR-036's row cites `TC-3605`, `TC-3606`, `UT-0897`, `UT-0898`, status **COMPLETE**).
ISS-02: `TC-3540`'s per-seam map resolves end to end — `IProposalStore` to **FR-090 · US-0100 ·
DES-104** checks out against Doc 02 L1050 ("Proposal authorship MUST be public…"), Doc 05 L3962
(`FR-090 to US-0100`) and Doc 05 L205 (`FR-090 to DES-104 (US-0100)`), and US-0100 is "Author a
proposal publicly — and submit a competing proposal with equal standing (FE-041 · EP-11)".
ISS-03: the "reaches R-21" phrasing is gone (`grep` gives **0**), replaced by "**the runs behind the
139**" with **R-22** listed and marked **"earns nothing — promotion deferred"**. ISS-04: the ordinal
is dropped at **both** sites; all three surviving occurrences of "second deferral" are quotations
inside v2.12.0 annotations (L46, L124, L520) — **zero live uses**.

**Nothing moved, and I re-derived it rather than read it.** §2 and §10 are **byte-identical** to the
v2.11.0 text (11210 and 14491 bytes each way). §2's suite rows sum to **521 / 290 / 231** with
**every row** satisfying designed = automated + blocked/no-mechanism (zero mismatches, machine
checked). `npm test`: **739 / 739, 0 failed, exit 0** (contracts 95 · protocol 178 · sdk 287 ·
ui 25 · indexer 16 · web 138). `npm run lint:deps`: "7 workspace package(s) checked — layering OK",
exit 0. **R-22 reproduced case by case**: `npx vitest run test/sdk-types-sync.test.ts
--reporter=verbose` in `apps/web` gives **3 passed / 3**, the three `it`s being `IPartyStore`,
`IProposalStore`, `ICandidateStore`, each named individually, and the `it` text matches the
document's quoted template verbatim. `node hooks/run_gates.cjs --audit`: **138 Must rows, 19
COMPLETE, 119 OPEN**, published and derived signals **AGREE** — **no ruling moved**, exactly as this
version promised.

**Two Lows remain and neither blocks.** One is **edit residue this version introduced** (an orphaned
bold-close marker left behind when OP 6 closed a bold span whose original closer sat on the next
line — proven mechanically: the header block's `**` count goes **1632 EVEN to 1907 ODD**). The other
is that **"6 sites" still needs one unstated step to reconcile with a diff of 7 hunks**, and "site"
is used at two granularities inside one enumeration. Both are recorded for the next touch.

## 2. Pass-bar check

- Score >= 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 99 | 19.80 | Cycle-2 ISS-02 is closed by **naming**, not waiving: each of the three shim seams now carries its own `FR`, `US` and `DES`, and I resolved all four newly-entering ids (FR-090, US-0100, FR-036, US-0046) in Doc 02 / Doc 05 / Doc 03. The scoping sentence is correct and load-bearing — the seam table's other members (FR-037/039/065/066/067/081/085/093) are *deliberately* not listed because this case tests the type shim, not those guarantees. Coverage of the candidate drop is unchanged from the v2.11.0 baseline I verified at cycle 2. |
| T2 Soundness | 20 | 99 | 19.80 | No claim in the diff is unsupported. The per-seam map is the SDK's own seam list (`UT-0871` is one parameterised `it` over `IPartyStore` / `IProposalStore` / `ICandidateStore` — re-run, 3/3, names verbatim). The §0.1 R-22 entry agrees with §9's R-22 row and §8's `test/sdk-types-sync.test.ts` row (3 `it`s, not 1). The deliberate **non-promotion** of `TC-3540` is restated with the same reason (`TD-RTM-02`, half a synchronised pair) — still the right call, still stated rather than left to look like an oversight. |
| T3 Traceability & IDs | 20 | 99 | 19.80 | The version's whole point is an id-bearing change record, and it holds: site (14) names the three ids `TC-3605` gained, the Doc 08 half is named and **exists**, and the four ids v2.12.0 itself adds are declared in the enumeration, in the Status and in the Changelog. All three seam chains resolve in the RTM — FR-013 (Doc 08 L2369, complete), FR-090 (L2281, COMPLETE), FR-036 (L2224, COMPLETE). See §4.3 for the cross-document obligation I hunted for and cleared. |
| T4 Security & failure modes | 15 | 99 | 14.85 | Untouched by this version and re-checked as intact: `TC-3612`'s Asserted/Inferred split, the `IS_INSECURE_MOCK` delegation discipline, the §5.7 shared preconditions. Secret scan over the changed document: **0 hits**. No product, test or configuration path is modified in the working tree. |
| T5 Completeness & testability | 15 | 93 | 13.95 | The enumeration is now **complete against the diff**, which is the fix. Deduction: ISS-02 — the published site count is not reconcilable to a diff without an unstated step, and "site" carries two granularities in one list. No placeholders; every fix lands at its own site with its own dated annotation. |
| T6 Convention compliance | 10 | 90 | 9.00 | MINOR bump correctly justified by the Medium-or-worse rework rule, not by a mint; ISO-8601 throughout; `Status: In Review — v2.12.0 … Rework cycle 3 of 5`; the v2.11.0 and v2.10.0 records both retained; v2.9.0's two carried Lows named by id at all four sites. Deduction: ISS-01 — a `**` marker orphaned by this version's own edit. |
| **Total** | **100** | — | **97%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding (detail in §4.1) | Required fix |
|----|----------|-----------|--------------------------------|--------------------------|--------------|
| ISS-01 | Low | T6 | Header block, the retained **v2.11.0 Status record**, L124–L125: `…named by touch rather than by ordinal** _(…)_ —` / `named again rather than allowed to go quiet:** ISS-02 (the missing separator in §10) and` | **Edit residue introduced by this version.** OP 6 replaced a line that had *opened* a bold span closing one line lower. The replacement closes the span at "…by ordinal**", but the original closer on the next line was left in place, so `quiet:**` is now an **orphaned bold-close marker with no opener**. Proven mechanically, not by eye: the header fenced block's `**` count is **1632 (EVEN)** in the v2.11.0 backup and **1907 (ODD)** in v2.12.0 — exactly one unmatched marker, and the diff localises it to this pair of lines. Harmless in rendering (the whole header sits inside a fenced block, so `**` is literal), and it falsifies no figure, id, ruling or claim — hence Low, not Medium. But it is exactly the "duplicated line tail / leaked marker" class this loop sweeps for, and it is in the current version's own header. | Drop the stray `**` on L125 (or re-open the span), at the next touch. No other text need move. |
| ISS-02 | Low | T5 | Changelog, v2.12.0 entry (L420–L426): "**…8 operations over 6 sites, and these are they:**" and "**6 sites, 8 operations. The two numbers are published separately on purpose**" | **The two published figures still do not include the one a falsifier actually produces.** A reader who does what this version tells them to do — derive from the diff, not from the brief — gets **7 hunks**, which equals neither 6 nor 8. The reconciliation exists and is sound (site (1) spans two non-adjacent hunks because ops 1–2 and op 3 sit ~350 lines apart inside the same fenced header) but it is **not stated**. Compounding it, "site" is used at **two granularities in one list**: site (1) is a whole region (`Version` line + the `Status` field + the new Changelog entry — three locations, one site), while site (4) is a **single line inside that same `Status` field**, counted separately. Nothing is omitted — every hunk is named — so this is not the cycle-2 defect recurring; it is the last unstated step in a derivation this version otherwise publishes in full. | Either publish the hunk count beside the other two with the one-line reconciliation ("7 hunks; site (1) is two of them"), or define "site" once at a single granularity and re-derive. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4.1 Cycle-2 issue disposition — every one verified FIXED

| Cycle-2 ID | Sev | Status | Evidence I used (independent of the document) |
|---|---|---|---|
| ISS-01 | **Medium** | **FIXED — at the root, and it survives a diff** | Three things had to be true and all three are. **(a) The v2.11.0 entry now reads fourteen.** `grep -c "fourteen sites"` gives **1**; `grep -c "thirteen sites"` gives **1** and that one is the v2.12.0 Status *quoting* what it corrects (a correction must be able to name what it corrects) — **zero live uses of the wrong figure**. **(b) Site (14) is named with its ids and its cause.** L478: "**(14) §5.7's `TC-3605` *Verifies* cell** — gaining **FR-036**, **US-0046** and **DES-027 rule 6**", annotated as the **cross-document fold of Doc 08 v2.13.0 cycle-1 ISS-02 (High)** and as "the row **Doc 08's FR-036 closure rests its withdrawal clause on**". The root cause is recorded, not apologised for: the list was written from the *issue* list, which the Status had framed as the version's whole scope, so the one edit answering no Doc 07 issue fell outside the frame. **(c) The Status says the fold rides in v2.11.0.** Header L33–L38: "**A CROSS-DOCUMENT FOLD RIDES IN v2.11.0, and it is stated here so no reader has to reconstruct it from two changelogs**", naming Doc 08 **v2.14.0** as the other half and stating **"Neither half is complete alone."** **I verified the other half exists**: Doc 08 L2224, FR-036's row cites `TC-3605`, `TC-3606`, `UT-0897`, `UT-0898`, status **COMPLETE**. **And I verified the new record against a diff, which is the test the last two versions failed:** 7 hunks, 8 ops, all enumerated, **no N+1th site**. |
| ISS-02 | Low | **FIXED — named, not waived** | `TC-3540`'s *Verifies* (L2513) now reads per seam: `IPartyStore` to **FR-013 · US-0021 · DES-097**; `IProposalStore` to **FR-090 · US-0100 · DES-104**; `ICandidateStore` to **FR-036, FR-122 · US-0046, US-0133 · §10.13.14 seam table**. **Every id resolved in its owning document, not in this one:** Doc 02 L1050 — FR-090 "Proposal authorship MUST be public; any member MAY submit a competing proposal on the same question…"; Doc 05 L3195 — US-0100 "Author a proposal publicly — and submit a competing proposal with equal standing (FE-041 · EP-11)"; Doc 05 L3962 and L205 — `FR-090 to US-0100` and `FR-090 to DES-104 (US-0100)`; DES-104 is the proposal-authorship element (Doc 03). The cell also states the thing that makes the map honest — **the guarantee is one shim-sync property instanced three times, not three guarantees** — and limits scope explicitly ("this case tests the type shim, not those guarantees"). **Status unchanged at Pass (inh.); the row is still 7 columns** (awk field count 9 = 7 columns, identical to `TC-3539` above it and to the header). |
| ISS-03 | Low | **FIXED, and at both of its sites** | `grep -c "run series that reaches"` gives **0**. The header phrase now reads "across a run series that **by v2.12.0 runs through R-22**" and the list header is "**The runs behind the 139**". **R-22 is listed**: "**R-22** (2026-09-21) the `UT-0871` block, **3** `it`s — **and R-22 EARNS NOTHING: promotion deferred, not denied**", with the reason (`TD-RTM-02`, half a synchronised pair) and the consequence ("**The 139 therefore does not include it**") both stated. The figure is consistent across the document: §0.1 (3 `it`s), §8 L1870 ("3 / 3 pass, `it` by `it` in R-22 — the file is 3 `it`s, not 1") and §9's R-22 row all agree, and **my own re-run is 3 passed / 3**. |
| ISS-04 | Low | **FIXED — ordinal dropped at both sites, derivable list substituted** | `grep -n` for the ordinal returns **three** lines and **every one is a quotation inside a v2.12.0 annotation** explaining what was dropped: L46 (v2.12.0 Status, ISS-04 narrative), L124 (the v2.11.0 Status record's annotation), L520 (the v2.11.0 Changelog entry's annotation). **Zero live uses.** Both sites now read "carried at **v2.10.0**, at **v2.11.0** and again at **v2.12.0**" — a list a reader can check against the changelog, which an ordinal never was. The v2.9.0 Lows are still carried **explicitly by id with a reason** at all four places (ISS-02 the missing §10 separator, ISS-04 the clause-(e) surface-vs-claim framing). |

### 4.2 What I verified and found sound (recorded so cycle 4 need not re-do it)

- **The diff is the evidence.** `diff -u scratchpad/07.v2110.bak docs/07-test-cases-suites.md` gives
  **7 hunks**, mapped one-for-one to the 8 ops in §1's table. **All 8 spec OPs present exactly
  once**, each transcribed verbatim against `artifacts/status/SPEC-2026-09-21-doc07-v2.12.0.md`.
  **Transcription residue: none** — `FIND:` 0 · `REPLACE WITH` 0 · four-backtick fence 0 · conflict
  marker 0 · trailing whitespace 0 lines · CRLF 0 (pure LF) · BOM unchanged (pre-existing).
- **No count moved, re-derived not read.** §2 and §10 are **byte-identical** to the v2.11.0 text
  (11210 / 14491 bytes both sides). §2's suite rows sum to **521 / 290 / 231** and **every row**
  satisfies designed = automated + blocked/no-mechanism (zero mismatches over all rows). The
  published identities still hold: 139 + 136 + 15 = 290; 290 + 177 + 46 + 12 − 4 = 521. Observed
  **139**, no-mechanism **46**, Manual **12**, failures **0** — all unchanged. `TC-3540`'s status is
  still **Pass (inh.)**; no case is minted, retired, reused, renumbered or re-statused.
- **Suites green, by my own run.** `npm test` at the repo root: **739 passed / 739, 0 failed,
  exit 0** — contracts **95** · protocol **178** · sdk **287** · ui **25** · indexer **16** ·
  web **138** (95+178+287+25+16+138 = 739). `npm run lint:deps`: "7 workspace package(s) checked —
  layering OK", exit 0.
- **R-22 reproduced case by case** (the claim §0.1's new entry rests on): 3 passed / 3, reported
  individually under `--reporter=verbose`, the `it` names being `IPartyStore:` / `IProposalStore:` /
  `ICandidateStore: interface and class member sets equal the JSDoc typedef member set exactly` —
  the document's quoted template, verbatim.
- **Gate audit — and it is the same audit.** `node hooks/run_gates.cjs --audit`: **138 Must rows,
  19 COMPLETE, 119 OPEN**; published §9 figures identical; "**the two independent signals AGREE**".
  **No ruling moved at this version, exactly as it claims.** The audit shows Doc 07 v2.12.0 and
  Doc 08 v2.14.0 both BLOCK for want of a report at their current version — **expected**; this
  report clears the first, Doc 08's cycle-2 reviewer clears the second.
- **Table shape.** `TC-3540` is **7 columns**, identical to `TC-3539` above it and to the suite
  header; §0.1's `Pass (obs.)` row is **2 columns**, identical to `Pass (inh.)` below it. No cell
  boundary was lost to an unescaped pipe — which the tester checked for deliberately, and which the
  Doc 08 v2.14.0 draft's broken row shows is not a theoretical risk.
- **Security.** Secret scan over the changed document: **0 hits** (no key material, no token
  pattern; the "secret" matches are Arabic-locale copy tests and ZK witness vocabulary). Working
  tree: **no product code, test or configuration path modified** — only `artifacts/memory-index.json`
  and Docs 03 / 07 / 08, the rest untracked session records. **`npm audit`: 11 vulnerabilities
  (1 critical · 4 high · 5 moderate · 1 low).** No `package.json` or lockfile changed this session;
  the critical/high figures are **unchanged** from the standing record in
  `artifacts/reviewer-qa-2026-08-30T2359.md` (the moderate count drifted 3 to 5 with the advisory
  database). This is a **pre-existing standing Gate-2 item routed to engineer / sre**, already
  carried in Doc 08's Gate-2 audit row. **No issue is raised against Doc 07 for it.**

### 4.3 The cross-document obligation I hunted for and cleared

This version adds **four** ids to a *Verifies* cell — `FR-090`, `US-0100`, `FR-036`, `US-0046` into
`TC-3540` — while its change record asserts "**Doc 08 is untouched**". Given that the Medium this
version exists to answer was **an id-bearing Verifies-cell edit whose Doc 08 half went undeclared**,
I treated that pairing as the most likely place for the defect to recur and went looking for it.

**It does not recur, and here is why.** Doc 08's evidence column is **not** conventionally
exhaustive over Doc 07's *Verifies* cells — it cites the cases that close each clause. Three
independent checks:

1. **`FR-122` is the control.** It has been in `TC-3540`'s cell since v2.11.0, and Doc 08's FR-122
   row (L2316) cites `TC-3478`, `TC-3530`, `TC-3532`–`TC-3534`, `TC-3555`, `TC-3556` — **not**
   `TC-3540`. That asymmetry pre-dates v2.12.0 and passed Doc 08's own v2.14.0 rework untouched, so
   it is the convention, not a gap this version opened.
2. **`FR-090`'s row is already closed on its own clauses.** Doc 08 L2281: `TC-3416`, `TC-3543`,
   `TC-3545`, `TC-3546`, `TC-3548`–`TC-3551`, status **COMPLETE**. A type-shim sync case adds no
   clause it needs.
3. **`FR-036`'s row closes on the candidate cases**, `TC-3605`/`TC-3606` among them (L2224,
   **COMPLETE**) — again not on a shim test.

So the document's claim is exact: "**no status, count or ruling moves; what changes is that each
seam's row in the chain now resolves**". I checked that last clause literally — **all three seam
chains resolve in the RTM and all three rows are COMPLETE**: FR-013 (L2369), FR-090 (L2281),
FR-036 (L2224). **Nothing is owed to Doc 08 by this version.** Recorded here so cycle 4 does not
re-open it.

### 4.4 Considered and deliberately not raised

- **"The runs behind the 139" lists a run that is not behind the 139.** R-22 appears in a list whose
  header says it is the 139's basis, while the same entry says "**The 139 therefore does not include
  it**". That tension is real but it is **disclosed and reasoned in place** ("a run that earns
  nothing is listed and marked as such rather than omitted, because omitting it is what made the
  sentence stale in the first place"), and it is the disposition **my own cycle-2 ISS-03 offered as
  one of two acceptable fixes**. Raising it now would be reviewer inconsistency, not a finding.
- **The v2.11.0 annotation carries a v2.12.0 forward reference** ("a run series that by v2.12.0 runs
  through R-22") inside a record of a v2.11.0 amendment. It is self-dating and the adjacent v2.12.0
  annotation explains it. Not a defect.
- **`TD-RTM-02` (the four-way test-case denominator disagreement) is still OPEN** and my own raw
  scan of TC-row status labels (519 row anchors / 125 Pass (obs.)) reproduces the disagreement with
  §2's published 521 / 139. **This is the tracked debt, not a new finding**, and this version moves
  neither side of it — §2 and §10 are byte-identical to v2.11.0.
- **Band collision (Doc 04 §14 reserving `TC-3592`–`TC-3699`)** is unchanged, still disclosed by
  Doc 07 and still routed to the architect. **No issue is raised against Doc 07 for it.**

## 5. Routing instruction (to the owning role)

**PASS.** The **tester** (Ji-woo Park) sets `Status: Approved` on `docs/07-test-cases-suites.md`
v2.12.0 and the SOP advances. **The two Lows do not block and are not a rework trigger**; they are
**owed at the next touch of this document**, alongside the two v2.9.0 Lows already carried by id:

- **ISS-01 (this cycle)** — the orphaned `**` at L125.
- **ISS-02 (this cycle)** — publish the hunk count with its one-line reconciliation, or define
  "site" at a single granularity.
- **v2.9.0 ISS-02** — the missing separator in §10. **v2.9.0 ISS-04** — the clause-(e)
  surface-vs-claim framing.

Two items route **outward** and neither blocks this document:

- **architect (Doc 04):** §14 must re-narrow the `TS-V1-*` floor to `TC-3620`. Unchanged since
  cycle 1; Doc 07 has recorded and routed it.
- **tester (Doc 08):** Doc 08 **v2.14.0**'s cycle-2 review is still owed and is **not** this report.
  Doc 07's v2.11.0-era statements *about Doc 08 v2.13.0* are recorded as as-of and are not re-scored
  here.

**Cycle budget.** Doc 07 has now used **3 of 5** cycles: v2.10.0 FAIL 91% to v2.11.0 FAIL 94% to
**v2.12.0 PASS 97%**. The lineage closes on the class it kept failing on — a figure asserted rather
than derived — by deriving the figure and publishing the derivation. **I score and list only — I
have edited nothing.**

**Merge sign-off is not at issue here.** The code under test is already merged at `12fe4a6`
(PR #22) under the Doc 06 v2.11.1 review; this cycle reviews a **document**, and no product code,
test or configuration changed. My **Gate-2 position is unchanged and stated for the record**: with
**119 open Must rows** the Gate-2 traceability criterion is **NOT MET** — `--audit` reports 138 Must
rows, 19 COMPLETE, 119 OPEN, the two independent signals AGREE. Gate-2 sign-off is withheld on that
ground and on the standing `npm audit` 1 critical / 4 high, neither of which is a Doc 07 defect.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 3 of 5 and the verdict is **PASS**.
