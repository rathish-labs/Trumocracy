# Tester session note — 2026-09-21T1100 — Doc 08 v2.15.0, rework cycle 3 of 5

```
Role:       tester (Ji-woo Park) — owning role for Doc 07 and Doc 08
Session:    Doc 08 rework cycle 3 of 5, after a cycle-2 FAIL
Review:     artifacts/reviews/08-traceability-matrix-v2.14.0-technical-cycle2.md
            (reviewer-qa, FAIL 94%, 0C/0H/2M/2L) — neutral, PM-assigned, recorded before dispatch
Wrote:      artifacts/status/SPEC-2026-09-21-doc08-v2.15.0.md  (7 OPs over 6 sites)
            this note
Did NOT:    edit any document, product code, test, or memory-index.json. Wrote no review report —
            I own this document. Did not touch Doc 07 (v2.12.0 is under its own cycle-3 review).
Verdict on the review: THE FAIL IS CORRECT. I reproduced both Mediums against the live file with my
            own counts before reworking. I contest nothing.
```

## 1. What the reviewer confirmed first, because it matters for the gate

Both cycle-2 **Highs are verified FIXED** with the reviewer's own independent marker counter;
**rule 4a is accepted**; **FR-036 is now defensible at merge**; and the reviewer records that
**all three closures (FR-036, FR-037, FR-085) would be signed**. The substance of v2.14.0 held.

## 2. Both Mediums are the same defect: a claim about my own fix that does not hold

That is the defect class v2.14.0 existed to retire, and it survived **inside the two devices
v2.14.0 offered as proof**. That is the uncomfortable part and the reason the FAIL is right.

### ISS-C2-01 — the parenthesis was never closed, and three places said it was

Cycle-1 ISS-05 was raised on a `Source:` pin that ended mid-word with its sentence, italic and
`TC-TRUMOCRACY (` group unclosed. v2.14.0 restored the tail and advanced the pin — **and left the
group open.** I counted it myself on the live file before accepting the finding:

| Line | Open | Close | Ends |
|---|---|---|---|
| `SRS-TRUMOCRACY …` | 12 | 12 | `) ·` |
| `CODE-TRUMOCRACY v2.11.1 …` | 3 | 3 | `) ·` |
| **`TC-TRUMOCRACY v2.10.0 …`** | **7** | **5** | `checked row by row.` |

One excess is the deliberate backticked literal naming the group; **the other is the group itself.**
Meanwhile the pin's own annotation said "Restored and **closed**", the Status said "restored", and
the Changelog said "restored, **closed**, and advanced". **The document named the exact group it had
failed to close and then asserted it had closed it** — disprovable by counting characters, which is
what the reviewer did.

**Fixed:** the pin now balances **9 / 9** and ends `) ·` like its siblings (verified on the
post-application text), and **all three false claims are corrected where they were made** rather
than left standing beside the fix.

### ISS-C2-02 — the falsifiable enumeration did not reproduce under its own grep

v2.14.0 published "A grep for the stale trio returns **15 hits** — 3 LIVE, 12 HISTORICAL". **It is
not 15 under any convention.** I ran the command myself:

```
grep -n -E "16 complete|98 open|122 open" docs/08-traceability-matrix.md
```

**Live v2.14.0 file: 14 lines / 21 occurrences.** (The reviewer ran it against the v2.13.0 baseline
the line numbers referred to and got 9 lines / 13 occurrences case-sensitive, 11 / 17
case-insensitive. Neither is 15.)

**The root cause, which I diagnosed rather than patched: the sweep conflated the grep's HIT LIST
with the list of SITES CORRECTED.** Two different sets, published under one name:

- **Two of the three sites published as LIVE hits match none of the three strings.** I checked both:
  the pre-v2.0.0 subtotal read "**12 complete · 42 open**" and the non-Must subtotal "**4 complete ·
  19 open**" — **0 matches each**. A reader re-running the grep found the two headline corrections
  *absent from the hit list*.
- The line offered as historical ("122 **Must rows stay** open") matches none either.
- **A genuine hit was missing: §9's tester sign-off row**, "_(Prior v2.12.3: Submitted — **122 open**
  Must rows…)_" — **the N+1th site, inside the sweep whose purpose was to prove there is no N+1th
  site.** It is a dated prior-version record, correctly left standing; what was wrong was its
  absence from a list claiming to be exhaustive.

**Those three subtotals were never found by the grep. They were found by DERIVING each subtotal from
the ✅/☐ row markers beneath it** — the instrument that actually works, and the one every corrected
figure already cites. **The grep and the derivation answer two different questions.** v2.15.0
publishes the command, its true output, a classification of all 21 occurrences, and the derivation
separately — and re-states the finding, which is unchanged and now checkable: **zero live stale
figures remain.**

## 3. The two Lows

- **ISS-C2-03** — rule 4a's limb (i) named three **SDK** `UT`s "at that site" while limb (ii)
  enumerated **five files**, two outside the SDK, so a reader auditing one limb against the other
  found two files unaccounted for. **Limb (i) now also names `UT-0904` (`TC-3614`) as the
  web-surface absence test**, and **limb (ii) now states that of the five files only
  `packages/sdk/src/candidates.js` holds the datum at rest** — the component holds the caller's own
  input, `page.tsx` a demo fixture, the two i18n files label copy. Both limbs now range over the
  same evidence.
- **ISS-C2-04** — the v2.14.0 spec tail predicted **0** hits for "Thirteen stories were checked";
  the true figure is **2**, both self-quoting. Harmless in the document, but **the spec is the
  transcription contract, and a PM ticking off a wrong expected figure is a check that silently
  passes.** Every figure in the v2.15.0 spec tail was run before it was written.

## 4. What did not move

**Nothing.** Re-derived from the row markers before and after the spec, identical both ways:
**138 Must · 19 COMPLETE · 119 OPEN**; §3.3 **23 rows / 5 complete**; **0** rows carrying both
markers; published §9 **19 / 119**. Non-Must **5 / 18** · total **24 / 137** · `G-PHASE3` **40** ·
`G-NOMECH` **19** · `G-TRACE` **32** · by-reason **120** · stories **23 of 142** · test cases
**528 / 275 / 253**. FR-037 stays **8** columns; the column-anomaly scan returns **28 before and 28
after — identical sets, none new**.

## 5. A defect I introduced while fixing these, caught by my own post-apply check

My first draft of the sweep op anchored its FIND on the wrong line (the "15 hits" line instead of
the section header), which would have **duplicated the old header and silently deleted the "15 hits"
line**. My integrity check — counting the old header, the old sweep line and the new sweep in the
post-application text, expecting 1/1/1 — returned **2/1/1** and caught it. Fixed and re-verified to
1/1/1. **Recording it because the lesson generalises: a spec that verifies "every FIND matches
exactly once" can still destroy content, and the only check that catches it is asserting what the
result should contain.**

## 6. Verification performed

- **7 FINDs, each matching exactly once**; simulated sequential application **0 errors**.
- Paren balance on the repaired pin: **9 / 9**, ending `) ·` (was 7 / 5).
- Content-integrity assertions on the post-application text: old sweep header **1**, old "15 hits"
  line **1**, new sweep **1**.
- Marker derivation before/after: identical. Column-anomaly diff: empty both ways.
- **Every grep in the spec tail was run against the pre-applied text.**

## 7. Open items

1. **Doc 08 v2.15.0 spec awaits transcription**, then `--audit`. **No figure may move: 138 / 19 / 119.**
2. **Doc 07 v2.12.0** is transcribed and under **cycle-3** review; **Doc 08 v2.15.0** will be its
   **cycle 3** when dispatched. Reports owed from **reviewer-qa** for both; I own both and will
   write neither.
3. **Cycle budget:** Doc 07 has used 2 of 5 (91% → 94%), v2.12.0 is its third. Doc 08 has used 2 of 5
   (87% → 94%), v2.15.0 is its third. Both are trending up and the residuals are shrinking, but
   **neither document has yet cleared the bar, and the remaining findings are all one class** — a
   device offered for checking that does not itself hold.
4. `TC-3540` promotion to Pass (obs.) still owed at the next synchronised Doc 07/08 touch.
5. **`TD-RTM-02`** (four-way denominator disagreement) still OPEN.
6. Routed and unchanged: the FR-037 absence-scan `it`, the `NOMINATION_ENDORSEMENTS_MIN` value pin,
   a stronger `UT-0902`, and the six build items from v2.13.0.

## 8. The lesson, now stated twice in one session

Across five review cycles the recurring finding is **a figure or a list asserted rather than
derived**: "thirteen sites" counted from the issue list not the diff; "15 hits" counted from the
sites corrected not the grep; "Ten cases" over twelve; "second deferral" with no derivable counter;
"reaches R-21" written the day R-22 was minted; a predicted grep count in a spec tail, three times.
**The countermeasure is not more care.** It is: **derive the figure from the instrument, publish the
instrument, run it, and state the result — including the hits that embarrass you.**

## 9. IDs touched

`TC-3614` · `UT-0897`, `UT-0900`, `UT-0901`, `UT-0904` · `FR-036`, `FR-037`, `FR-085`, `FR-132`
(false-positive line) · **`Completion rule 4a`** (limbs reconciled) · Doc 07 pin advanced to
**v2.12.0**. **No row, marker, status, gap code, count or ruling changes.**

---

## 10. Post-transcription addendum, and the SubagentStop block — recorded, not cleared by me

**Doc 07 v2.12.0 PASSED.** `artifacts/reviews/07-test-cases-suites-v2.12.0-technical-cycle3.md` —
**97%, 0C/0H/0M**, cycle 3 of 5. The document's `Status:` line now reads **Approved**. **Doc 07's
review loop is closed**; it no longer appears in the hook's block list. The loop took three cycles
(91% → 94% → **97%**), and every cycle's finding was the same class: a figure or list asserted
rather than derived.

**Doc 08 v2.15.0 was transcribed** while I was writing this note. Verified after the fact:

- **all 7 replacements present exactly once**;
- the repaired `Source:` pin now balances **9 open / 9 close** and ends `) ·` — **the parenthesis
  ISS-C2-01 was raised on is genuinely closed**, and this time the claim can be checked by counting
  rather than believed;
- `node hooks/run_gates.cjs --audit`: **138 Must rows, 19 COMPLETE, 119 OPEN, the two independent
  signals AGREE** — unchanged, exactly as the spec promised.

### The block

At session exit the `SubagentStop` hook blocked with one entry:

```
- 08-traceability-matrix.md v2.14.0 — report EXISTS (…-v2.14.0-technical-cycle2.md) but does not
                                      satisfy the gate: Verdict=FAIL, score=94%, C=0 H=0 M=2
```

**This is the verdict this session answers, and it is not mine to clear.** I am the **owning role**
of Doc 08; a report an owner writes to clear its own stop is not a cycle, and reviewer assignment is
the project-manager's, recorded before dispatch in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` (**reviewer-qa**, Rafael Duarte,
technical mode, tester excluded as owner).

**The block names v2.14.0 because it was evaluated before the transcription landed.** The document
is now at **v2.15.0**, so the block will re-form as "no report for v2.15.0" — which is **cycle 3 of
5 awaiting reviewer-qa**, the normal state of a document mid-loop.

### Routed to the project-manager

1. **Dispatch reviewer-qa for Doc 08 v2.15.0** (cycle **3** of 5). Nothing else is owed from me on
   this document until that verdict returns.
2. **Doc 07 needs no further tester action** — v2.12.0 is Approved.
3. **Cycle budget:** Doc 08 has used **2 of 5** (v2.13.0 FAIL 87%, v2.14.0 FAIL 94%); v2.15.0 is its
   third. Doc 07 closed at three. Not near the cap.
4. **Owed at the next synchronised Doc 07/08 touch** (both documents must move together, so neither
   can take these alone): `TC-3540`'s promotion to **Pass (obs.)** on R-22 evidence, and the
   `TD-RTM-02` denominator recount.

**Nothing further is owed from the tester on either document until a review verdict returns.**
