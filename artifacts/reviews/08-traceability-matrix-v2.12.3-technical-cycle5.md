# Document Review Report — Doc 08 Traceability Matrix v2.12.3 (technical, cycle 5 of 5 — the cap)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.12.3
Review mode: technical
Reviewer role: reviewer-qa
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 5 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**PASS, and I believe it.** The cycle-3 Medium is discharged at the level it was raised — not by
editing a sentence but by replacing the method that passed the false sentence. Boundaries are now
derived from the file with `grep -n '^## '` and from nothing else, and the document publishes a
three-state boundary table so a reader can falsify it. **I re-derived every figure in that table
mechanically rather than accepting it**, by reverse-applying the nine cycle-4 operations to obtain
v2.12.2 and the nine cycle-3 operations to obtain v2.12.1 — all eighteen `REPLACE` blocks matched
**exactly once**. Both reconstructed states return the published headings **to the line**:
v2.12.1 §6 **1888** · §7 **1934** · §8 **2108**; v2.12.2 §6 **2013** · §7 **2059** · §8 **2233**;
this file §6 **2204** · §7 **2250** · §8 **2424**. Line 1930 sat inside §6 at v2.12.1 and line 2055
inside §6 at v2.12.2 — so "§6 is not edited at all" was false, exactly as ruled, and the correction
now stands where the claim was made with the superseded wording retained beside it.

**The second-order catch is right, and it caught me.** My cycle-3 required-fix wording offered
*"§6's dashboard table, census and by-reason figures are not edited"*. The by-reason table is at
line **1848**, under `### Must-row gaps by primary reason` in the `SUMMARY` block — and §1 does not
begin until **1882**. Copying my phrasing would have planted a second boundary error inside the fix
for the first. The tester declined to copy it, named the table where it lives, and substituted three
things that genuinely are in §6 (the dashboard table, the TC-count convention notes, the
story-census disclosure). I verified all four placements. **That is precisely the discipline this
cycle was about, and it was applied against the reviewer.**

Both Lows are discharged and neither is carried. Every frozen figure held under independent
re-derivation. `--audit`: **138 Must · 16 COMPLETE · 122 OPEN, the two independent signals AGREE**,
Doc 08 the only blocker. `npm test`: **exit 0**, 95 · 151 · 244 · 18 · 16 · 116 = **640/640**.
No `R-21` minted; **R-20 stands**; no product, test or configuration path is modified.

Two **Low** issues remain — an ambiguous antecedent in the optional deep-reconstruction path of the
ISS-03 bridge, and a cycle-counter discrepancy that is the PM's to reconcile, not the tester's.
Neither blocks the pass bar. **I considered manufacturing neither of them into a Medium to avoid the
appearance of rubber-stamping the cap, and I considered softening neither to reach a PASS. What
survives is genuinely Low-only, and I am saying so plainly.**

## 2. Pass-bar check

- Score >= 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`. The tester sets `Status: Approved` at v2.12.3. The loop closes at cycle 5
  **with a PASS, not an escalation** — the cap governs the loop, and a PASS ends it.

## 3. Per-criterion scores

| Criterion | Weight | Score (0-100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.60 | Unchanged and unharmed. §1–§8, §10 and the whole `SUMMARY` block are **byte-identical** to v2.12.2 — I diffed them, I did not take it. The FR-132 Requirement cell, the FR-131 row and the §3.2 NFR-023 row are untouched |
| T2 Soundness | 20 | 98 | 19.60 | The method replacement is the right remedy at the right level, and it survives full independent re-derivation at three states. Every arithmetic claim about v2.12.2's footprint holds, including the ones easiest to fudge: 45 lines byte-identical by hash, one hunk, 67 tokens added, zero deleted. The withdrawn symmetry sentence is replaced by the correct account (arithmetic, not construction) |
| T3 Traceability & IDs | 20 | 99 | 19.80 | Distinct `TC` ids **419 -> 419**; open markers **152 -> 152**; complete markers **26 -> 26**. FR-131 open `G-PHASE3`, FR-132 open `G-PHASE3` (its `TC` cell carrying the split range `TC-3577..TC-3585, TC-3587..TC-3591`), NFR-023 open `G-UI` with Complete 0 — all three rows byte-identical to v2.12.2 |
| T4 Security & failure modes | 15 | 98 | 14.70 | Gate-2 table parsed row by row: **six rows, six FAIL**, rollback "never drilled (TC-2425)", independent audit "not started". Reversibility total: **nine changed lines and two inserts in one markdown file**; `git status` shows no code, test or configuration path modified, which I confirmed rather than assumed |
| T5 Completeness & testability | 15 | 94 | 14.10 | The ISS-03 bridge delivers the remedy that matters — each command's result at the state the reader actually holds — and I reproduced all twelve figures exactly. Minus for **ISS-01 (Low)**: the deep-reconstruction path (a) names the wrong file as its input, in the one paragraph whose whole purpose is an instruction a reader can run |
| T6 Convention compliance | 10 | 95 | 9.50 | Patch bump correct, `Status: In Review`, ISO-8601 dates, retained-record convention honoured at every site (the superseded wording is quoted, never silently overwritten), no `TC` minted/retired/re-statused, no run id minted, §7 adds and retires no entry. Minus for **ISS-02 (Low)**, the cycle-counter discrepancy |
| **Total** | **100** | — | **97%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Low | T5 | **Header `Status:` record, the ISS-03 bridge, paragraph (a)** | **The deep-reconstruction recipe names the wrong input file, and it fails on the assertion the document itself prescribes.** Paragraph (a) reads: *"To obtain the v2.12.1 state: reverse-apply the nine FIND/REPLACE pairs in `artifacts/tester-2026-09-20T2100-doc08-c3-spec.md` **to this file**, asserting each REPLACE matches exactly once before substituting."* Run literally against the file on disk, **three of the nine operations match zero times** — OP 1 (the header block), OP 7 (the v2.12.2 changelog entry) and OP 9 (the §9 sign-off row) — because v2.12.3 edited all three regions. The correct recipe is a **composition**: reverse-apply the **cycle-4** spec to reach v2.12.2, then the cycle-3 spec to reach v2.12.1. That is how I did it, and both stages matched nine-for-nine. **Two things hold the severity down, and I weighed them explicitly.** First, the failure is **loud, not silent** — the prescribed "exactly once" assertion trips on the first operation, so no reader can be misled into believing a wrong reconstruction. Second, the paragraph's **closing sentence names the missing piece**: *"The equivalent recipe for this version is `artifacts/tester-2026-09-20T2300-doc08-c4-spec.md`"*, and read in the frame the rest of (a) uses — it contrasts throughout against "v2.12.2's 2298" — "this file" plausibly means the v2.12.2 state the cycle-3 reviewer reconstructed from. The defect is an **ambiguous antecedent plus an unstated composition step**, not a false figure: every number (a) publishes is true, and I verified each — **2173** lines against **2298**, nine operations, ten changed lines at 5, 6, 26, 247, 411, 424, 446, 522, 1930, 2149. **And the remedy ISS-03 actually required is delivered and works**: the (b) table gives each command's result at the state a reader holds, which I reproduced exactly | One clause, on the next Doc 08 touch: *"reverse-apply the nine pairs in the **cycle-4** spec to this file to reach v2.12.2, then the nine pairs in the cycle-3 spec to reach v2.12.1."* **No figure moves with this fix.** It does not warrant opening a version on its own |
| ISS-02 | Low | T6 | **Header `Status:` line 5 and the §9 sign-off — the cycle counter** | **The document's self-declared cycle is one behind the loop's dispatch, in a sentence a Gate-2 reader uses to judge how close the cap is.** The header reads *"Rework cycle 4 of 5"* and *"This is cycle 4 of 5 — if cycle 5 fails, the verdict becomes ESCALATED"*. This review is dispatched as **cycle 5 of 5, the cap** — so a FAIL here would have escalated **now**, not next round. **The tester is not at fault and I do not route this to it:** its counter is consistent with all three predecessors (v2.12.1 "cycle 2 of 5", v2.12.2 "cycle 3 of 5"), each of which counted the rework it was entering. The loop's cycle index is the **project-manager's** to set, and the PM set this one at 5. Moot for this verdict, since the version passes; recorded because an off-by-one in a cap counter is exactly the kind of governance figure that must not be discovered at a gate | **Route to the project-manager, not the tester.** Reconcile the two counters for the next lineage — either the document states the review cycle it is answering, or the dispatch states the rework index — and record which convention governs. **No Doc 08 version is opened for this** |

> **Low** issues do not block the pass bar. **Zero Critical, zero High, zero Medium — the version PASSES.**

## 5. Routing instruction

**PASS — no rework. The owning role (tester, Ji-woo Park) sets `Status: Approved` at v2.12.3.**
The two Lows are **carried, not owed**: ISS-01 to the tester's next Doc 08 touch, ISS-02 to the
project-manager. Neither is a condition of the PASS.

**Consequential, and I flag it because the assignment record made it a Medium trigger:** the debt
register's SECURITY.md `ISS-03` is **now due**. Its condition was *"advance the pin only after Doc 08
v2.12.0 reaches Approved"* and *"if v2.12.0 Approves and the pin is not advanced before the session
closes, re-raise as Medium."* This lineage has now Approved — at **v2.12.3**, the lineage's head.
**The SECURITY.md v2.11.3 pin must be advanced to v2.12.3 before the session closes**, or that Low
becomes a Medium by its own recorded terms. That is the project-manager's item, already on its list.

**Nothing moved and I verified nothing moved.** Must **138** · COMPLETE **16** · OPEN **122** ·
G-PHASE3 **47** · G-TRACE **34** · Must-FR subtotal **114 · 16 · 98** · stories **142 / 134 / 17 /
125** · designed **500** · traced **500** · passing evidence **245** (136 inh. · 109 obs.) · gaps
**255** · §9's 245 + 15 + 233 = **493** · by-reason 47+13+9+5+6+4+5+34 = **123** against **122**
distinct open rows (NFR-007 compound) · Gate-2 **six rows, six FAIL** · FR-131 and FR-132 both
**OPEN (G-PHASE3)** · NFR-023 **unedited, G-UI, Complete 0** · suite **640/640 (R-20)**.

**Not reopened:** Doc 07 **v2.9.0**, Doc 03 **v2.14.1** and Doc 04 **v1.7.1** are all Approved, none
is mine, and I touched none of them. The **FR-132 claim-family sweep stays CLOSED** by my own cycle-3
ruling — I did not ask for a fourth sweep and I did not run one.

## 6. Reviewer's independent rulings (evidence, not acceptance)

### 6.1 The boundary method and its published table — re-derived, not accepted

I reconstructed both prior states by reverse-application, asserting **exactly one** match per
REPLACE before substituting. **All eighteen operations across the two specs matched exactly once.**
Line totals: **2173 / 2298 / 2489** — the document publishes 2173 and 2298 and both are right.

| State | Published §6 | Published §7 | Published §8 | **I got** | §6 spans | DoD line inside §6? |
|---|---|---|---|---|---|---|
| v2.12.1 (reconstructed) | 1888 | 1934 | 2108 | **identical** | 1888–1933 | **1930 — YES** |
| v2.12.2 (reconstructed) | 2013 | 2059 | 2233 | **identical** | 2013–2058 | **2055 — YES** |
| v2.12.3 (on disk) | 2204 | 2250 | 2424 | **identical** | 2204–2249 | — |

The v2.12.2 row is published in full and the full list is right too: §1 **1691** · §2 **1718** · §3
**1727** · §4 **1956** · §5 **1989** · §6 **2013** · §7 **2059** · §8 **2233** · §9 **2249** · §10
**2284**. **The file was never ambiguous in either state; only the label was.** The document's own
self-referential row is a **fixpoint** — the digits it publishes about itself are the digits
`grep -n` over top-level headings returns from it, after the digits were written in. That is the hard
half of a self-describing claim and it holds.

### 6.2 The second-order catch about my own wording — CORRECT, and it matters

My cycle-3 required fix proposed the wording *"§6's dashboard table, census and by-reason figures
are not edited"*. Verified against the file:

- `### Must-row gaps by primary reason` — line **1848**
- `# SUMMARY — read this first` — line **1836**
- `## 1. Purpose & how to read` — line **1882**
- `## 6. Coverage dashboard` — **2204**–2249

**The by-reason table is 356 lines above §1 and is not in §6.** Had the tester copied my phrasing it
would have published a **second boundary error inside the correction of the first** — in the version
whose entire subject is that boundaries must come from the file and not from a label, a spec or a
review report. It did not copy it. It named the table where it lives and substituted three items I
confirmed **are** in §6: the dashboard table, the TC-count convention notes and the story-census
disclosure. **The tester declined to take the reviewer's wording on authority and checked it against
the file. That is the behaviour the whole cycle asked for, and it was applied to me.**

### 6.3 v2.12.2's real footprint — every claim re-derived

| Claim | Verified |
|---|---|
| Exactly **ten** original lines changed | **Yes** — 5, 6, 26, 247, 411, 424, 446, 522, 1930, 2149, by line-level diff of the two reconstructions |
| **Three** regions: metadata (8) · §6 (1) · §9 (1) | **Yes** — the metadata fence runs **3–1512** in v2.12.1 (closing fence at 1512, SUMMARY heading at 1520); eight of the ten fall inside it; 1930 is in §6 (1888–1933); 2149 is in §9 (2124–2158) |
| §6's other **45** lines byte-identical | **Yes** — §6 is 46 lines in both states; excluding the DoD line, the two sets hash **identically** (md5) |
| The one changed §6 line is a **pure insertion** | **Yes** — word-level diff yields **one hunk**: insert, **67 tokens added, 0 deleted, 0 substituted** |
| The dated v2.12.0 sentence survives word for word; DoD figure stays **17 of 142** | **Yes** — a consequence of the above, and read directly in §6 |
| The by-reason table is untouched and is not in §6 | **Yes** — see 6.2 |

### 6.4 The ISS-03 bridge — I ran the published commands at all three states

| Pattern | v2.12.1 | v2.12.2 | v2.12.3 | Published |
|---|---|---|---|---|
| **P1** the contiguous range | 14 occ / 13 lines | 18 / 16 | 18 / 16 | **matches exactly** |
| **P2** the word, case-insensitive | 34 / 24 | 50 / 34 | 50 / 34 | **matches exactly** |
| **P3** the co-occurrence net | 18 lines | 23 | 23 | **matches exactly** |
| the retired five-places claim | 3 | 6 | 7 | **matches exactly** |

**All twelve figures reproduce.** The reason given for the rise is correct and I checked the
mechanism: every correction is published by quoting the pattern it corrects, so annotating a site
adds occurrences to the count that found it. **The remedy ISS-03 asked for is delivered** — a reader
holding v2.12.3 runs the commands and lands on the published v2.12.3 row. The defect at ISS-01 above
is in the *optional* deeper path, not this one.

### 6.5 The mislabel — corrected everywhere it was live, quoted where it is history

All three sites are corrected (v2.12.2 lines **47**, **64**, **531**, in the diff's original
numbering). The only surviving occurrences attached to line 1930 are inside **v2.12.3 ISS-01
annotations quoting the superseded label** — which is the retained-record convention working
correctly, not a residue. **The provenance is recorded and it is not used to soften anything**: the
document states the label originated in the cycle-2 review report and was inherited, and adds that it
is recorded because it belongs in the record and not because it changes the severity. That is the
right disposition and it matches my cycle-3 ruling in substance.

### 6.6 The disclosed pipe defect — the right call, and the disclosure is the point

The tester reports that its own dry run caught a defect **in its draft**: the §9 sign-off text
carried a pipe-delimited story census, whose unescaped pipes would have added three columns to a
table row — the same class of defect this document fixed at v2.9.0. It rewrote it as "stories 17 of
142"; pipe count moved 9 to 12 and back to **9**. **Verified on disk: the §9 tester row has exactly 9
pipes at both v2.12.2 and v2.12.3.** The pipe-delimited form does survive in the **changelog**, at
line 636 — and that is **correct**, because line 636 is inside the fenced metadata block (fence
closes at 1828), where pipes are inert. **The fix was scoped to the one place it mattered.** A defect
caught in a dry run and disclosed rather than quietly fixed is worth more to this lineage than a
clean draft.

### 6.7 Frozen figures and the run id — re-derived at this cycle

| Figure | Verified |
|---|---|
| Must / COMPLETE / OPEN | gate audit: **138 / 16 / 122** from row markers; §9 publishes **16 / 122**; the two independent signals AGREE |
| Must-FR subtotal · stories · test cases | §6 dashboard read cell by cell: **114 · 114 · 16 · 98**; **142 · 134 · 17 · 125**; **500 · 500 · 245** (136 inh. · **109** obs.) **· 255**. 500 − 245 = 255; 136 + 109 = 245 |
| By-reason | Extracted cell by cell: **47, 13, 9, 5, 6, 4, 5, 34** = **123**; distinct open **122** (NFR-007 compound, and the note says so) |
| §9 denominator | 245 + 15 + 233 = **493**, three occurrences, all consistent |
| Gate-2 verdict | Parsed all six rows: **FAIL, FAIL, FAIL, FAIL, FAIL, FAIL** |
| FR-131 · FR-132 · NFR-023 | open G-PHASE3 · open G-PHASE3 · open G-UI Complete 0 — all three rows **byte-identical** to v2.12.2 |
| Markers and ids | open markers **152 to 152** · complete markers **26 to 26** · distinct TC ids **419 to 419** |
| Suite | **Re-run by me**: npm test exit **0** — 95 · 151 · 244 · 18 · 16 · 116 = **640** |
| No new run id | Every R-21 occurrence accounted for: **two** are the disclaimer explaining why it was not minted (one live, one in the retained v2.12.2 record), **three** are SCR-21 substrings. **R-20 stands** |

### 6.8 Independent security scan

- **Secret/credential scan** over the full diff of `docs/08-traceability-matrix.md`: **clean** (the
  only hits are the English words private and secret inside FR-131's own honesty requirement text).
- **Changed-path scan**: the working tree shows only `SECURITY.md`, `artifacts/*` and Docs
  03/04/07/08. **No product, test, build or configuration path is modified**, so no code-level
  regression surface exists and no re-scan of the application is warranted by this version.
- **npm audit (production deps)**: 9 vulnerabilities (1 critical · 4 high · 3 moderate · 1 low).
  **Pre-existing and unchanged by this version** — no package manifest or lockfile is touched. **Out
  of scope for a Doc 08 review and correctly reflected in the document**, whose Gate-2 row for an
  independent security/crypto audit reads **not started — FAIL**. Recorded here so the Gate-2 packet
  carries it: **this is an engineer/sre item and a standing Gate-2 blocker, not a Doc 08 defect.**

### 6.9 Gate-2 posture (unchanged by this version, and honestly stated)

The gate audit reports the Gate-2 traceability criterion **NOT MET** — **122 open Must rows**. This
version moves none and claims to move none. **Doc 08 cannot support a Gate-2 sign-off at any version
until those rows close**, and this loop was never about closing them: it was about whether the matrix
tells the truth about its own gap and its own edits. **On both, it now does — verifiably,
reproducibly, and against the file rather than against a label.**

### 6.10 Cap awareness — why this is a PASS and not a reluctant one

This closes at the cap. I record my reasoning so the judgement can be audited rather than trusted.
**I did not lower the bar to avoid an escalation.** I looked hardest at the one place a Medium could
legitimately survive — the ISS-03 bridge — found a real defect in it, ran it to confirm (three of
nine operations return zero matches), and then asked the only question that sets severity: **what
does it do to a reader?** It fails loudly on the document's own prescribed assertion, it misleads no
one, it corrupts no figure, the artifact it omits is named two lines later, and the reproducibility
remedy that ISS-03 actually required is delivered and works at the state the reader holds. That is a
**Low**, and calling it a Medium to avoid the appearance of rubber-stamping the cap would be
manufacturing a finding — which is its own failure of independence, and a more corrosive one.

**I also did not soften the standard I applied at cycle 3.** There I graded a defect Medium even
though the mislabel that seeded it was mine, on the rule that *severity is a property of the defect,
not of whose mistake seeded it*. The same rule applies here and points the other way: this version's
defects are small on their own merits. **Three versions of this lineage published a scope claim that
one command falsified. This one publishes a boundary table, derived by a command, at three states,
including its own — and I ran the command at all three.** That is the defect class closed at the root
rather than at the sentence.

**Verdict: PASS at 97%, 0 Critical / 0 High / 0 Medium / 2 Low. Cycle 5 of 5 closes with a PASS — an
escalation was available and is not warranted.**
