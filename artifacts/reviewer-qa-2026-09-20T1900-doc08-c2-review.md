# Session memory — reviewer-qa (Rafael Duarte) · Doc 08 v2.12.1 cycle-2 technical review

```
Role:       reviewer-qa (neutral technical reviewer; NOT the owner of Doc 08)
Date:       2026-09-20T1900
Branch:     build/v1-debt-closure
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md
Artifact:   artifacts/reviews/08-traceability-matrix-v2.12.1-technical-cycle2.md
Verdict:    FAIL 93% (0C / 0H / 1M / 2L) — cycle 2 of 5, routed to the tester for v2.12.2
```

## What I did

Reviewed `docs/08-traceability-matrix.md` **v2.12.1** in **technical** mode, the tester's rework
against my own cycle-1 FAIL (92%, 0C/0H/3M/2L). Read the document end to end, plus Doc 02 §4.46,
Doc 07 v2.9.0 (as a source only — it is Approved and was NOT reopened), and the tester's rework spec
and note. Wrote nothing to `docs/`. Did not open `artifacts/memory-index.json`.

## Decisions made

1. **All three cycle-1 Mediums are discharged.** ISS-03 (FR-132 Requirement cell) checked clause by
   clause against Doc 02 v2.17.3 §4.46 at the source — faithful on (a)–(e) including the six-field
   DES-100 allowlist. ISS-02 (§9 Denominator note) now states one denominator per measure: 493 / 500
   / 255 vs 233 / gap 7 UNRECONCILED, superseded series parenthesised, the 465-456-463 sentence
   labelled dated, "what is NOT in doubt" now 245 and 640/640 on R-20. ISS-01's **five named sites
   are all clean**, and §3.2 NFR-023 is genuinely unedited.
2. **FAIL on a NEW Medium — a sixth site the sweep missed.** `Source:` block **line 247** still
   reads live and present-tense: *"§(d) is the requirement **TC-3577..TC-3591** verify"* — the
   contiguous range, absorbing TC-3586, asserted against §(d). Not a retained record; two lines above
   the Doc 07 pin this version edited; absent at HEAD, so it is this lineage's own claim. It
   falsifies the version's thrice-repeated "all five places the claim was made".
3. **Two Lows raised.** ISS-02 (Low): lines **410** and **1930** are v2.12.0-stamped records
   repeating "the fifteen ... verify FR-132/§(d)" without the v2.12.1 annotation applied everywhere
   else. ISS-03 (Low): the Doc 07 pin advance is annotated at the pin but not enumerated in the
   changelog.
4. **Ruled: no suite re-run and no new run id was CORRECT.** Nothing testable changed; minting R-21
   would make two evidence items out of one execution. I re-ran anyway: `npm test` exit 0,
   95+151+244+18+16+116 = **640/640**.
5. **Ruled: the Doc 07 pin advance (v2.9.0 In Review to Approved) was SUFFICIENTLY disclosed.**
   Status-only, version unchanged, annotated at the pin with its reason, verifiable at the cited
   report and in `--audit`. Not a Medium.
6. **Ruled: the ISS-04 debt-register framing is accurate.** `TD-RTM-02` and `TD-RTM-03` keep their
   raising dates, both stay OPEN, and both say in terms that the debt is no closer to paid. Doc 07
   §2's 260-of-493 and 233 figures verified at the source.
7. **Frozen figures held — all of them, re-derived not accepted.** Must 138 / 16 COMPLETE / 122 OPEN
   (both hook signals AGREE), gaps 255, designed 500, evidence 245 (136 inh · 109 obs), G-PHASE3 47,
   G-TRACE 34, stories 17 of 142, Must-FR subtotal 114/16/98, suite 640/640 (R-20), Gate-2 FAIL on
   all six rows, FR-131 and FR-132 both OPEN (G-PHASE3). §6 carries zero v2.12.1 annotations — it
   was not edited, as claimed.

## Open items (owned by others)

- **tester (Ji-woo Park)** — ISS-01 (Medium, line 247), ISS-02 (Low, lines 410 and 1930), ISS-03
  (Low, changelog) into **v2.12.2, patch, cycle 3 of 5**. Nothing normative may move.
- **tester** — process: publish a **count of sites CHECKED** (pattern sweep) rather than a count of
  sites fixed. This lineage has now failed twice on exactly that gap.
- **project-manager** — Doc 08 is still In Review, so the SECURITY.md `ISS-03` pin advance (blocking
  on Doc 08 reaching Approved) remains open, as does `OPEN-30`.
- **Gate 2 remains NOT MET** — 122 open Must rows. No merge sign-off is given or implied by this
  review; this is the per-version document-review loop, not the Gate-2 packet.

## IDs touched (referenced, none authored)

Doc 08 v2.12.1 · Doc 07 v2.9.0 · Doc 02 v2.17.3 §4.45 / §4.46 · FR-131 · FR-132 · NFR-023 · US-0133 ·
DES-085 / DES-095 / DES-098 / DES-100 · TC-3479 / TC-3480 / TC-3576 / TC-3577..TC-3591 (esp.
**TC-3586**) · UT-0889 / UT-0890 · TD-RTM-01..04 · OPEN-30 · run R-20 · CON-015

## SubagentStop block — recorded, not cleared (2026-09-20T1900)

The SubagentStop hook (`hooks/run_gates.cjs`) blocked this stop on three documents. **All three
blocks are expected and correct, and none of them is mine to clear.** Recorded here per the hook's
own instruction ("record this block in your session note and stop — the project-manager sequences
the review").

| Document | Hook state | Why it is not mine to clear |
|---|---|---|
| **08-traceability-matrix.md v2.12.1** | Report EXISTS (`08-traceability-matrix-v2.12.1-technical-cycle2.md`) but `Verdict=FAIL, score=93%, C=0 H=0 M=1` | **This is the correct verdict and the block is the mechanism working.** The bar is >=95% AND zero C/H/M; one Medium (ISS-01, the sixth site at line 247) forces the FAIL. Clearing it means the **owning role — the tester** — reworks **v2.12.2** and this loop re-reviews at **cycle 3 of 5**. A passing report authored to clear my own stop would not count as a cycle and would be a fabrication. **I did not and will not write one.** |
| **03-architecture-design-sdd.md v2.14.1** | NO report for this version | **Architect's document, not mine.** The PM's assignment record names the **tester** (Ji-woo Park) as the neutral reviewer for Doc 03; v2.14.0 already FAILed at cycle 1 (93%, 0C/0H/2M/3L) and the architect has since produced **v2.14.1**, which is the version now awaiting its cycle-2 review. **I do not self-appoint.** |
| **04-test-strategy-master-plan.md v1.7.1** | NO report for this version | **Same — architect's document, tester assigned.** v1.7.0 FAILed at cycle 1 (94%, 0C/0H/1M/2L); v1.7.1 is the rework awaiting cycle 2. Not mine. |

**Note for the project-manager:** Docs 03 and 04 advanced from v2.14.0 / v1.7.0 to **v2.14.1 /
v1.7.1** during this session — my earlier `--audit` at the start of this review still showed the
v2.x.0 versions blocking with their cycle-1 FAIL reports. The architect's rework has landed and
**both now need the tester dispatched for cycle 2**.

**Nothing in this block changes my verdict or my figures.** Doc 08 v2.12.1: **FAIL 93%,
0C/0H/1M/2L, cycle 2 of 5**, routed to the tester. Gate 2 remains **NOT MET** (122 open Must rows);
no merge sign-off is given or implied.
