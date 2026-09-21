# Tester session note — 2026-09-21T1300 — Doc 08 v2.16.0, rework cycle 4 of 5

```
Role:       tester (Ji-woo Park) — owning role for Doc 07 and Doc 08
Session:    Doc 08 rework cycle 4 of 5 (TWO CYCLES REMAIN), after a cycle-3 FAIL
Review:     artifacts/reviews/08-traceability-matrix-v2.15.0-technical-cycle3.md
            (reviewer-qa, FAIL 96%, 0C/0H/1M/2L) — neutral, PM-assigned, recorded before dispatch
Wrote:      artifacts/status/SPEC-2026-09-21-doc08-v2.16.0.md  (5 OPs over 4 sites)
            this note
Did NOT:    edit any document, product code, test, or memory-index.json. Wrote no review report —
            I own this document. Doc 07 is Approved at v2.12.0 and needed no touch.
Verdict on the review: THE FAIL IS CORRECT, and ISS-C3-01 is the best finding of the whole lineage.
            I reproduced every figure before reworking. I contest nothing.
```

## 1. Doc 07 is done

**Doc 07 v2.12.0 is Approved** — `07-test-cases-suites-v2.12.0-technical-cycle3.md`, **PASS 97%,
0C/0H/0M**. Three cycles: 91% → 94% → 97%. No further tester action is owed on it. Its pin in this
matrix is folded from "In Review" to **Approved** at v2.16.0 (ISS-C3-03), which means the cycle-2
qualification that Doc 08's closures rested on an In-Review sibling is **spent in the right
direction: the source is stronger than when the closures were signed, not weaker.**

## 2. ISS-C3-01 — the sweep was self-referential, and that is a property, not a slip

v2.15.0 published: *"Run against **this file** it returns **14 lines and 21 occurrences**."* Against
the published v2.15.0 document the command returns **22 lines / 38 occurrences**. I reproduced that
figure exactly before accepting the finding.

**The eight extra lines are the correction's own text.** A classification of matching strings must
**quote the strings it counts**. So:

> **Writing the claim changed what the claim measured.**

That is the whole diagnosis, and it explains why this paragraph has now failed **three consecutive
versions** under three different numbers (15 → 14/21 → 14/21-against-the-wrong-file). **No amount of
re-counting fixes a self-referential measurement.** The reviewer also caught that class (a) was
published as 11 occurrences where its five lines carry **12**, so the classes summed to 20 against a
total asserted as 21 twice — I re-derived it and (a) is **12**.

### The fix is the device, in three separated parts

1. **THE CLAIM — anchored to a FIXED REFERENCE that writing cannot alter.** Against the **v2.14.0
   text** the command returns **14 lines / 21 occurrences**, classes **(a) 5/12 · (b) 7/7 · (c) 1/1
   · (d) 1/1 = 14 / 21**, which now sums. **I reconstructed that text by reverse-applying the
   v2.15.0 spec to the live file** — 7 replacements, 0 failures — and re-ran the command: **14
   lines, 21 occurrences, the fourteen line numbers identical to the reviewer's** (19, 709, 712,
   716, 789, 1270, 1314, 1802, 2326, 2329, 2537, 2539, 2541, 2747). A frozen reference cannot be
   moved by anything written afterwards, so this claim **stays** falsifiable.
2. **THE LIVE OBSERVATION — published, but explicitly not the claim.** After transcription the
   command returns **23 lines / 41 occurrences**. **The sentence carrying that figure deliberately
   contains none of the three search strings**, so publishing it does not change it — and I verified
   that by iterating to a **fixed point**: substitute the figure, re-measure, confirm the measurement
   equals the published value. It converged in one iteration and held.
3. **THE INVARIANT — what actually matters, and unbreakable by quotation.** *Every occurrence, at
   every version, is a quotation, a dated record, a transition's* from *side, or the FR-132 false
   positive. **Zero are live stale figures.*** This is the finding; the totals are only evidence for
   it.

**And the general lesson, now written into the document:** *a sweep published inside the corpus it
sweeps cannot make a live count falsifiable.* It is stable only against a frozen reference or behind
an exclusion the sweep itself defines; everything else must be stated as an **invariant**, not a
total. **The instrument that actually found the three stale subtotals was never this grep** — it was
deriving each subtotal from the ✅/☐ row markers, which is immune to self-reference because prose
about markers is not a marker.

## 3. The two Lows

- **ISS-C3-02** — v2.15.0 published **no site enumeration** (dropping the device the cycle-2 report
  called "the strongest thing in v2.14.0") and stated its scope absolutely — *"Nothing in this
  version touches a row, a marker, a figure or a ruling"* — while **OP 7 edited FR-037's Decision
  cell**. Both corrected **inside the v2.15.0 record itself**: its **six sites** are now listed, and
  the absolute is narrowed to what is true (no marker, status, gap code, evidence id or ruling
  changes; the edit **adds** a citation). **An absolute a reader can falsify by diff is the same
  defect class as a count they can falsify by grep**, and this lineage has produced enough of both.
- **ISS-C3-03** — the Doc 07 pin read "v2.12.0 (In Review)"; Doc 07 is Approved. Folded, with the
  direction of the change stated.

## 4. What did not move

**Nothing.** Derived before and after, identical: **138 Must · 19 COMPLETE · 119 OPEN**; §3.3 **23
rows / 5 complete**; **0** both-marker rows; published §9 **19 / 119**; non-Must **5 / 18**; total
**24 / 137**; `G-PHASE3` **40** · `G-NOMECH` **19** · `G-TRACE` **32**; by-reason **120**; stories
**23 of 142**; test cases **528 / 275 / 253**. FR-037 stays **8** columns; the Source pin stays
balanced (**10 / 10**, ending `) ·`); column-anomaly scan **28 / 28, identical sets**.

## 5. Verification performed

- **5 FINDs, each matching exactly once**; sequential application **0 errors**.
- **Reverse-application** of the v2.15.0 spec to reconstruct the v2.14.0 baseline: **7 ops reversed,
  0 failures**, and the resulting grep matched the reviewer's line list exactly. *(This is a new
  technique for this lineage and it is worth keeping: a spec whose replacements are each unique is
  invertible, which makes any prior version reconstructible without a backup.)*
- **Fixed-point check on the published live figure** — the check the previous two versions lacked.
- Per-class occurrence counts computed mechanically, not by hand: (a) 12, (b) 7, (c) 1, (d) 1.
- Every grep in the spec tail run against the post-application text.

## 6. Open items

1. ~~**Doc 08 v2.16.0 spec awaits transcription**, then `--audit`.~~ **SUPERSEDED by §8 — it was
   transcribed during this session and verified: 5/5 replacements present exactly once, the
   fixed-point figure holds against the published file, and `--audit` still reads 138 / 19 / 119 with
   both signals agreeing.** _(Corrected in place rather than left standing: an open item that has been
   closed, still published as open, is the same defect class this whole lineage has been about.)_
2. **Cycle budget — worth watching now.** Doc 08 has used **3 of 5** (87% → 94% → 96%); v2.16.0 is
   its **fourth**, so **cycle 5 is the only one left after it** _(stated this way at v2.16.0 because
   "two cycles remain" — counting this one — and "one remains after this one" are the same fact,
   and an ambiguous count is how a budget gets misread)_. If cycle 5 also fails, the loop **ESCALATES to the human**,
   who must record an `approve-as-is` / `rework` / `reject` decision by name. The trend is right —
   the scores are climbing and each surviving finding is smaller than the last — but the sweep
   paragraph has now consumed three of the three cycles, which is why v2.16.0 changes the **device**
   rather than the number.
3. Reviewer-qa report owed for **Doc 08 v2.16.0** (cycle 4 of 5). I own the document and will not
   write it.
4. **Owed at the next synchronised Doc 07/08 touch** (neither document can take these alone):
   `TC-3540`'s promotion to Pass (obs.) on R-22 evidence; the `TD-RTM-02` denominator recount.
5. Routed and unchanged: the FR-037 absence-scan `it`, the `NOMINATION_ENDORSEMENTS_MIN` value pin,
   a stronger `UT-0902`, and the six build items from v2.13.0.

## 7. IDs touched

Doc 07 pin → **v2.12.0 Approved** · `FR-037` (row cited, not edited at this version) · `FR-132`
(false-positive line) · `TC-3614`, `UT-0904` (cited in the v2.15.0 enumeration). **No row, marker,
status, gap code, count or ruling changes.**

---

## 8. Post-transcription addendum, and the SubagentStop block — recorded, not cleared by me

**Doc 08 v2.16.0 was transcribed** while I was closing this note. Verified after the fact:

- **all 5 replacements present exactly once**; `Version: 2.16.0`;
- **the fixed-point claim HOLDS against the real published file** — the document says the command
  returns **23 lines / 41 occurrences**, and run against the transcribed file it returns **exactly
  23 lines / 41 occurrences**. **This is the first version of this paragraph whose published figure
  is true of the file that publishes it**, and it is true because the sentence carrying the figure
  contains none of the three search strings, so writing it could not move it;
- `node hooks/run_gates.cjs --audit`: **138 Must rows, 19 COMPLETE, 119 OPEN, the two independent
  signals AGREE** — unchanged, as the spec promised.

### The block

```
- 08-traceability-matrix.md v2.16.0 (technical review) — NO report found for this version
```

**This is the cleanest form of the block and it is not mine to clear.** I am the **owning role** of
Doc 08; a report an owner writes to clear its own stop is not a cycle, and reviewer assignment is
the project-manager's, recorded before dispatch in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` (**reviewer-qa**, Rafael Duarte,
technical mode, tester excluded as owner). There is no failing verdict outstanding — the document
is simply **mid-loop, awaiting its cycle-4 review**, which is the normal state.

### Routed to the project-manager

1. **Dispatch reviewer-qa for Doc 08 v2.16.0 — cycle 4 of 5.** Nothing else is owed from me on
   either document until that verdict returns.
2. **Doc 07 needs nothing** — Approved at v2.12.0 (PASS 97%).
3. **Cycle budget, restated because it now matters:** Doc 08 has used **3 of 5** (87% → 94% → 96%)
   and v2.16.0 is its **fourth**. **One cycle remains after this one.** If cycle 5 also fails, the
   loop **ESCALATES to the human**, who must record an `approve-as-is` / `rework` / `reject`
   decision **by name**, with the surviving issues listed. Worth knowing in advance: every FAIL in
   this lineage since cycle 1 has been a **defect of statement inside an annotation** — never a
   wrong row, marker, figure or ruling — and the reviewer has signed all three closures at each of
   the last two cycles.
4. **Owed at the next synchronised Doc 07/08 touch** (neither can take these alone): `TC-3540`'s
   promotion to Pass (obs.) on R-22 evidence, and the `TD-RTM-02` denominator recount.

**Nothing further is owed from the tester until a review verdict returns.**
