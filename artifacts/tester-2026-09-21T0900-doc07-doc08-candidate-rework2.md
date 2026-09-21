# Tester session note — 2026-09-21T0900 — Doc 07 v2.12.0, rework cycle 3 of 5

```
Role:       tester (Ji-woo Park) — owning role for Doc 07 and Doc 08
Session:    Doc 07 rework cycle 3 of 5, after a cycle-2 FAIL
Review:     artifacts/reviews/07-test-cases-suites-v2.11.0-technical-cycle2.md
            (reviewer-qa, FAIL 94%, 0C/0H/1M/3L) — neutral, PM-assigned, recorded before dispatch
Wrote:      artifacts/status/SPEC-2026-09-21-doc07-v2.12.0.md  (8 OPs over 6 sites)
            this note
Did NOT:    write a Doc 08 spec (v2.14.0 is transcribed and under cycle-2 review — I will act on its
            verdict, not ahead of it). Did not edit any document, product code, test, or
            memory-index.json. Wrote no review report — I own this document.
Verdict on the review: THE FAIL IS CORRECT. I verified the Medium and all three Lows against the
            live file before reworking. I contest nothing.
```

## 1. The Medium is the sharpest finding of the session, and it is about my own sweep

v2.11.0's Changelog published **"Every site changed, enumerated so the sweep is falsifiable —
thirteen sites, and these are they"** over a diff of **fourteen**. The unenumerated fourteenth is
**§5.7's `TC-3605`**, whose *Verifies* cell gained **FR-036**, **US-0046** and **DES-027 rule 6**.

That is not a cosmetic omission. It is the **cross-document fold of Doc 08 v2.13.0 cycle-1 ISS-02
(High)** — the row on which **Doc 08's FR-036 closure rests its withdrawal clause**. A reader
auditing FR-036 end to end would have found the edit in the diff and not found it declared in the
list that claims to be exhaustive.

**Root cause, recorded rather than apologised for.** The v2.11.0 Status framed the version's scope
as *"All eight issues are taken … Nothing is carried"*, so I wrote the enumeration **from the
cycle-1 issue list** rather than **from my operation list**. The single edit that answered **no
Doc 07 issue** — because it answered a **Doc 08** issue — fell outside that frame and was invisible
to the way I was counting.

**An enumeration derived from the brief instead of from the diff cannot be falsifiable.** That is
exactly the argument this document makes about the §8 orphan-check basis, **in the same version**.
I made the argument and then committed the error one section away from it.

**The fix is structural, not clerical:**
- the v2.11.0 entry now reads **fourteen**, names the fourteenth and attributes it to the Doc 08 fold;
- **v2.12.0 counts its own sites from its operation list** and publishes **8 operations over 6
  sites** as two separate figures, because letting "sites" and "operations" mean each other is how
  the defect happens;
- **the cross-document fold is named in the Status block**, so it is visible without reading two
  changelogs. Neither half of that fold is complete alone: Doc 07 v2.11.0 carries `TC-3605`'s
  attribution, Doc 08 v2.14.0 carries FR-036's row gaining `TC-3605`/`TC-3606`/`UT-0897`/`UT-0898`.

## 2. The three Lows

| ISS | What was wrong | Ruling |
|---|---|---|
| 02 | `TC-3540`'s *Verifies* cell named **three** DES (DES-097 party · DES-104 proposals · §10.13.14 candidates) but only **two** FR and **two** US, so **`IProposalStore` carried a design element with no requirement and no story** — the same attribution-gap class as cycle-1's ISS-06, which this document had just fixed elsewhere | **Named, not waived.** The cell now carries a **per-seam map**: `IPartyStore` → **FR-013 · US-0021 · DES-097**; `IProposalStore` → **FR-090 · US-0100 · DES-104**; `ICandidateStore` → **FR-036, FR-122 · US-0046, US-0133 · §10.13.14 seam table**. Stated explicitly: the guarantee is **one shim-sync property instanced three times**, not three guarantees, and the seam table's other members are **not** listed because **this case tests the type shim, not those guarantees** |
| 03 | §0.1's **Pass (obs.)** row — amended at v2.11.0 *precisely because it had not aged* — was **already one run short at publication**: it said the series "reaches **R-21**" while **R-22** was minted in the same version | Re-worded to **"the runs behind the 139"**, with **R-22 listed and marked "earns nothing — promotion deferred"**. Two sites fixed, not one: the series header *and* the earlier "across a run series that reaches R-21" phrase in the v2.11.0 annotation, which the first pass of my own spec missed |
| 04 | "this is their **second** deferral" was said of **v2.11.0** by me and of **v2.10.0** by the cycle-1 report. Both cannot hold, and **the counter was never derivable** | **Ordinal dropped at both sites** and replaced by the touches themselves — carried at **v2.10.0**, at **v2.11.0** and again **here**. A named list can be checked against the changelog; an ordinal in prose cannot |

## 3. What did not move

**Nothing.** designed **521** · automated **290** · observed **139** · inherited **136** · not
executed **15** · Blocked **177** · No mechanism **46** · Manual **12** · failures **0** — identical
to v2.11.0 **and** to v2.10.0. §2 still sums to **521 / 290 / 231**; the identities still hold.
**No case minted, retired, reused, renumbered or re-statused.** Doc 08 untouched: **138 · 19 · 119**,
both hook signals agreeing. MINOR bump earned by the house rule (Medium-or-worse FAIL), not by a
mint.

## 4. Verification performed

- **8 FINDs, each matching exactly once** against the live v2.11.0 file; simulated sequential
  application **0 errors**.
- `TC-3540` stays **7 columns** — checked deliberately, because the Doc 08 v2.14.0 draft broke a row
  by putting literal `|` characters in a cell and this op edits a cell too.
- **Every grep in the spec's "After transcription" section was RUN against the pre-applied text, not
  predicted.** That is a direct correction of my own practice: the one wrong figure in the v2.11.0
  spec tail was a grep count I predicted (`TC-3320` → 1; the truth is 8, all legitimate).
- **Two expected survivors are declared in the spec tail so they are not misread as failures:**
  `grep -c "thirteen sites"` → **1** and `grep -c "second deferral"` → **1**, both being the
  v2.12.0 annotations **quoting** what they correct. **Zero live uses of either remain.** This is
  the same tension as the Doc 08 FR-038 glyph, with the opposite consequence: there the quotation
  was fatal because a counter reads the row and cannot tell a marker from a mention of one, so the
  glyph had to be named by codepoint; here nothing counts prose, so quoting is safe and necessary.

## 5. Open items

1. **Doc 07 v2.12.0 spec awaits transcription**, then `--audit`. **No figure may move: 138 / 19 /
   119.**
2. **Doc 08 v2.14.0 is transcribed and under cycle-2 review.** I have deliberately **not** written a
   Doc 08 spec — I will act on that verdict when it lands, not ahead of it.
3. **Review reports owed from reviewer-qa:** Doc 07 **v2.12.0** (cycle 3 of 5) and Doc 08 **v2.14.0**
   (cycle 2 of 5). I own both documents and will write neither.
4. **`TC-3540` promotion to Pass (obs.) still owed** at the next synchronised Doc 07/08 touch — R-22
   evidence recorded, promotion deferred to keep the two documents' evidence buckets in step.
5. **Still carried, named by touch rather than counted:** v2.9.0 ISS-02 (missing §10 separator) and
   ISS-04 (clause-(e) surface-vs-claim framing) — carried at v2.10.0, v2.11.0 and v2.12.0.
6. **`TD-RTM-02`** (the four-way test-case denominator disagreement) still OPEN — my own owed
   recount, still not attempted inside a rework.

## 6. The lesson I would carry out of this cycle

Three of the four issues across two cycles have the same shape: **a figure that was asserted rather
than derived.** "Thirteen sites" (counted from the brief, not the diff), "Ten cases" over twelve,
"second deferral" with no derivable counter, "reaches R-21" written the day R-22 was minted. The
countermeasure that works is not more care — it is **deriving the figure from the thing beside it**
and **publishing the derivation**, which is what this version does at every site it touches.

## 7. IDs touched

`TC-3540`, `TC-3605` (referenced) · `UT-0871` · `FR-013`, `FR-036`, `FR-090`, `FR-122` ·
`US-0021`, `US-0046`, `US-0100`, `US-0133` · `DES-097`, `DES-104`, `DES-027 rule 6`,
`§10.13.14 seam table` · `R-21`, `R-22` · `TD-RTM-02`. **No `TC` minted, retired or renumbered.**

---

## 8. SubagentStop review-loop block — recorded, not cleared by me

At session exit the `SubagentStop` hook (`hooks/check_gates.py` via `hooks/run_gates.cjs`) blocked
with two entries:

```
- 07-test-cases-suites.md  v2.11.0 — report EXISTS (…-v2.11.0-technical-cycle2.md) but does not
                                     satisfy the gate: Verdict=FAIL, score=94%, C=0 H=0 M=1
- 08-traceability-matrix.md v2.14.0 — NO report found for this version
```

**Both are expected, both are the loop working, and neither is mine to clear.** I am the **owning
role** of both documents. CLAUDE.md's review-and-rework loop requires a neutral reviewer assigned by
the project-manager and recorded before dispatch; **a report an owner writes to clear its own stop
is not a cycle.** The reviewer is already named in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`: **reviewer-qa (Rafael Duarte),
technical mode**, with the tester excluded as owner.

**Entry 1 — Doc 07 v2.11.0 (FAIL 94%, one Medium).** This is the verdict **this session answers**.
The rework is written and verified: `artifacts/status/SPEC-2026-09-21-doc07-v2.12.0.md`, **8
operations over 6 sites**, every FIND re-checked against the live file (**8/8 match exactly once,
sequential application 0 errors**). **`docs/07-test-cases-suites.md` is still at v2.11.0 on disk —
the spec is NOT yet transcribed**, which is exactly why the hook still sees the failing version.
**Once the PM transcribes it the block becomes "no report for v2.12.0", which is cycle 3 of 5
awaiting reviewer-qa** — the normal state of a document mid-loop.

**Entry 2 — Doc 08 v2.14.0 (no report).** `docs/08-traceability-matrix.md` **is** at v2.14.0: my
rework of the cycle-1 FAIL was transcribed. Its **cycle-2 review has not yet been produced**. I have
deliberately **not** written a Doc 08 spec this session and will not pre-empt that verdict.

**Routed to the project-manager:**
1. Transcribe `SPEC-2026-09-21-doc07-v2.12.0.md` (verified applicable at the moment of this note).
2. Dispatch **reviewer-qa** for **Doc 07 v2.12.0** (cycle **3** of 5) once transcribed, and for
   **Doc 08 v2.14.0** (cycle **2** of 5).
3. **Cycle budget, stated so it is not discovered late:** Doc 07 has used **2 of 5** cycles (v2.10.0
   FAIL 91%, v2.11.0 FAIL 94%) and v2.12.0 will be its **third**. Doc 08 has used **1 of 5**
   (v2.13.0 FAIL 87%) and v2.14.0 is its **second**. Neither is near the cap, but the trend on Doc 07
   is the one to watch: **91% → 94%**, with the residual findings getting smaller and all of one
   class — a figure asserted rather than derived (see §6 above).

**The RTM is unaffected by any of this.** `node hooks/run_gates.cjs --audit` at session end:
**138 Must rows, 19 COMPLETE, 119 OPEN, the two independent signals AGREE.** No ruling, status or
count has moved since Doc 08 v2.13.0, and the v2.12.0 rework moves none either.

**Nothing further is owed from the tester on either document until a review verdict returns.**
