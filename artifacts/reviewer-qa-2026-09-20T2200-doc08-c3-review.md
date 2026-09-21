# Session note — reviewer-qa (Rafael Duarte) · Doc 08 v2.12.2 neutral technical review, cycle 3 of 5

```
Role:       reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, document-review skill, technical mode
Date:       2026-09-20T2200
Branch:     build/v1-debt-closure
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md (PM, recorded before dispatch)
Output:     artifacts/reviews/08-traceability-matrix-v2.12.2-technical-cycle3.md
Verdict:    FAIL — 94% · 0 Critical / 0 High / 1 Medium / 2 Low · cycle 3 of 5
Scope:      Doc 08 only. Read-only throughout: no docs/ file and no product or test code touched.
            artifacts/memory-index.json NOT opened (PM pre-registers this note).
```

## What I did

Reviewed **Doc 08 v2.12.2** (RTM) as the PM-assigned neutral technical reviewer, cycle 3 of the
v2.12.x loop, against my own cycle-2 report (FAIL 93%, 0C/0H/1M/2L on v2.12.1).

**The central task was to test the tester's convergence claim rather than accept it.** The tester
retired the "all five places" count and replaced it with three reproducible pattern enumerations,
and asserted its line list diverges from mine while agreeing on the total ("the merge is symmetric").
Those claims are about **v2.12.1**, which was never committed. So I **reconstructed v2.12.1** by
parsing the nine FIND/REPLACE pairs out of `artifacts/tester-2026-09-20T2100-doc08-c3-spec.md` and
reverse-applying them to the file on disk, asserting each REPLACE matched exactly once. All nine did;
the result's header reads `Version: 2.12.1`, 2174 lines. I then re-ran P1/P2/P3 on it.

## Decisions and rulings

1. **The convergence is REAL — but the symmetry is not the evidence, and the wrong line list was
   MINE.** All four of the tester's enumerations reproduce **exactly** (P1 14 occurrences on 13
   lines; P2 34 on 24; P3 18 lines; `five places` 3). **410, 1862 and 1930 do not contain the
   contiguous range; 68, 2077 and 2133 do** — my cycle-2 §6.2 had them backwards, and my "12 lines"
   should have been 13. What genuinely converges is the **disposition of every hit**: not one line is
   classified differently, no hit went unclassified in either enumeration (my §6.1 cleared 2077 and
   2133 individually; my §6.2 cleared 68 by name), and both find the same single live defect at 247.
   The matching total of 14 is arithmetic coincidence — three misplaced, three omitted.
2. **The sweep question is CLOSED for the FR-132 claim family.** I classified all 18 range
   occurrences in v2.12.2 by hand. Every one is a defect description, a minting/matrix-entry
   reference where fifteen is true, a Doc 07 suite filing, the FR-131 not-at-all record, the
   enumeration record, or the corrected site. **No live, present-tense §(d) claim survives.** Line
   2274's three occurrences are quotations inside dated records — the PM's reading confirmed.
3. **NEW Medium — ISS-01: a false containment claim about this version's own edit footprint.** The
   v2.12.2 changelog, **line 513**, states "**§6 is not edited at all**". OP 8 edits **line 2055**,
   which is inside **§6** (Coverage dashboard, 2013–2058); §8 begins at 2233. **The mislabel is mine
   — my cycle-2 ISS-02 called that line "§8" and the spec's OP-8 heading inherited it** — but the
   false statement is live in the governed document. Contained (no §6 figure moves; the dashboard
   table is byte-identical) and fixable in one clause. Ruled **Medium** for consistency with my own
   cycle-2 ruling that a falsifiable scope claim which fails is a Medium.
4. **Two Lows.** ISS-02: "the merge is symmetric, which is why both counts land on 14" is not a cause,
   and "the first three carry the claim in words" is wrong for 1862 (which makes no §(d) claim).
   ISS-03: the published commands are anchored to an uncommitted v2.12.1 state — a reader running
   them on v2.12.2 gets 18/50/6, with no bridge recorded.
5. **No suite re-run / no new run id — affirmed again.** No product, test or config path is modified.
   I re-ran `npm test` anyway: **exit 0, 95+151+244+18+16+116 = 640/640**. `R-21` is not minted.
   **R-20 stands.**
6. **Frozen figures re-derived, not accepted.** `--audit` 138·16·122 both signals AGREE; §6
   500/500/245 (136 inh · 109 obs)/255; stories 142/134/17/125; Must-FR 114·16·98; by-reason
   47+13+9+5+6+4+5+34 = 123 with distinct open 122 (NFR-007 compound); §9 245+15+233 = 493; Gate-2 six
   rows six FAIL; FR-131 and FR-132 both OPEN (G-PHASE3). **Dry-run invariants confirmed by diff:**
   open markers 152 → 152, complete markers 26 → 26, distinct `TC` 419 → 419, §9 tester-row pipes
   9 → 9, **exactly 10 original lines changed** — the only failing one is "§6 not edited".
7. **Nothing reopened.** FR-131/FR-132 tracing ruling, Must-count reasoning, TD-RTM-03 disclosure
   sufficiency, the declined SCR link (Conflict C-01 stays the architect's), R-20's discharge,
   TD-RTM-01/02/04 out of scope, and the three cycle-1 Medium fixes — all stand. **Doc 07 v2.9.0
   Approved and NOT reopened.** Docs 03/04 are the architect's under another reviewer; untouched.

## Gate-2 posture — NO merge sign-off, and none is owed at this cycle

`--audit`: **Gate 2 traceability criterion NOT MET — 122 open Must rows of 138.** This version moves
none and does not claim to. **I withhold Gate-2 sign-off**, and the RTM cannot support one at any
version until those rows close. This loop is about whether the matrix tells the truth about the gap.
No merge is signed here: this is a document-review cycle, not a code drop.

## Open items (routed, not carried by me)

| Item | Owner | State |
|---|---|---|
| **ISS-01** (Medium) — the false "§6 is not edited at all" claim, line 513, + the §8/§6 label | **tester** (Ji-woo Park) | Route to **v2.12.3, cycle 4 of 5**, patch bump. Nothing normative moves |
| **ISS-02, ISS-03** (Low) | **tester** | Fold into the same edit rather than carry |
| **My own cycle-2 errors**, recorded so they are not re-inherited: §6.2's line list put 410/1862/1930 in the range bucket and omitted 68/2077/2133; "12 lines" should read 13; §6.5's "§6 ... lines 1888–1932" contradicted ISS-02's "§8" label for line 1930 | **reviewer-qa** (me) | Disclosed in §6.2 and ISS-01 of the cycle-3 report. The cycle-2 report is a dated record and is not rewritten |
| `OPEN-30` | project-manager | Still routed, still not fixed here |
| `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-03`, `TD-RTM-04` | tester / engineer / product-owner | All **OPEN**, correctly named rather than half-done |
| SECURITY.md `ISS-03` — advance the v2.11.3 pin once Doc 08 Approves | project-manager | Still blocked: Doc 08 has not Approved |

## IDs touched (read-only — nothing authored, nothing edited)

Documents: **08** (reviewed, v2.12.2), 07 (v2.9.0 re-read, TC-3586 row), 02 (§4.46 re-read at cycle 2,
not re-opened), 06/03/04 (pins only). Requirements: **FR-131**, **FR-132**, **NFR-023**, FR-122,
FR-123, NFR-007, CON-015. Design: DES-085, DES-094, DES-095, DES-096, DES-098, DES-100, ADR-024,
ADR-025. Stories: US-0132, US-0133, US-0134. Tests: **UT-0890**, UT-0887, UT-0889,
**TC-3577..TC-3591** (esp. **TC-3586**), TC-3576, TC-3479, TC-3480, TC-2331, TC-2332, TC-2425,
TC-3538, TC-3561. Runs: **R-20** (R-21 deliberately not minted). Debts: TD-RTM-01..04, TD-07-03,
OPEN-30. Gap codes: G-PHASE3, G-TRACE, G-UI, G-NOMECH, G-NOENV, G-EXTERNAL, G-UNMEASURABLE, G-CIRCUIT.

## SubagentStop block — recorded, not cleared (this is the loop working correctly)

On exit the SubagentStop hook (`hooks/run_gates.cjs` → `hooks/check_gates.py`, invariant (c)) blocked
with:

```
08-traceability-matrix.md v2.12.2 (technical review) — report EXISTS
(08-traceability-matrix-v2.12.2-technical-cycle3.md) but does not satisfy the gate:
Verdict=FAIL, score=94% C=0 H=0 M=1
```

**This block is EXPECTED and is the correct state of the world.** It is not a defect, and I did not
and will not clear it. Recording the reasoning so no later agent mistakes it for an obstacle:

1. **The block is the mechanical shadow of my own verdict.** I am the PM-assigned **neutral
   reviewer** for Doc 08 (recorded in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`
   BEFORE dispatch), not its owner. I returned **FAIL 94% (0C/0H/1M/2L)** at cycle 3 of 5. A FAIL
   verdict is precisely what the hook is built to detect, so the hook firing means the report was
   well-formed and machine-parseable — the metadata block was read correctly (`Reviewed document:`,
   `Document version: 2.12.2`, no filename fallback needed).
2. **I MUST NOT author a passing report to clear my own stop.** The hook's own text says a report
   written to clear a stop "does not count as a cycle", and the `document-review` skill says to emit
   PASS **only** at score ≥ 95% AND zero C/H/M. v2.12.2 carries one Medium (**ISS-01**, the false
   "§6 is not edited at all" claim at line 513). Revising the score or the severity to clear a block
   would be the single most corrosive thing a neutral reviewer could do, and it would invert the
   detector-≠-author rule the whole loop rests on.
3. **The block clears by the OWNING ROLE reworking, not by me re-scoring.** Route: **tester**
   (Ji-woo Park) → **Doc 08 v2.12.3**, patch bump, `Status: In Review` → re-review at **cycle 4 of 5**.
   Two cycles remain before the verdict would become ESCALATED and a human would have to record an
   approve-as-is / rework / reject decision. **The remaining defect is one clause and one section
   label, and nothing normative moves with the fix.**
4. **Nothing else blocks.** `--audit` at the close of this session reports **1** document blocking the
   review loop — Doc 08 only. Docs 03 (v2.14.1) and 04 (v1.7.1) both reached **PASS** under their own
   reviewer during this session and no longer block; every other governed document passes.
5. **I stop here**, per the hook's own instruction to record the block and stop. Sequencing the next
   cycle is the **project-manager's** call, not mine.
