# Session memory — reviewer-qa, 2026-09-08T16:00 — Doc 02 v2.17.3 business review, cycle 2 of 5

```
Role:     reviewer-qa — NEUTRAL REVIEWER for this task (document-review skill, business rubric).
          NOT the owner of Doc 02 (product-owner owns it). Read-only: I scored and listed only.
Date:     2026-09-08
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md — reviewer recorded
          BEFORE dispatch. I did not self-appoint.
Wrote:    artifacts/reviews/02-requirements-srs-v2.17.3-business-cycle2.md
          this note
Did not:  edit docs/02-requirements-srs.md or any product code; author any other review;
          review Doc 06 v2.8.0 or the code drop (tester's assignment); sign any merge; make any
          Gate-2 finding; open artifacts/memory-index.json (both paths pre-registered by the PM).
```

## 1. Verdict

**PASS — 96%, 0 Critical / 0 High / 0 Medium / 10 Low** (3 new: ISS-C2-01..03; 7 carried:
cycle-1 ISS-04..ISS-10). Predecessor v2.17.2 was **FAIL 92%, 0C/0H/1M/9L**.

Per-criterion: B1 97 · B2 96 · B3 97 · B4 96 · B5 95 · B6 96 → weighted **96.25% = 96%**.

**Routing:** the product-owner (Priya Raghunathan) sets `Status: Approved` on **v2.17.3**.
The dispatch asked whether a bump to v2.17.4 is needed on a Medium FAIL — **there is no Medium
and no FAIL, so no bump is required or warranted.** The cycle-2 loop closes here.

## 2. What I verified, and how

**Byte-for-byte reconstruction of the whole v2.17.1 to v2.17.3 delta.** From the committed baseline
(`git show HEAD:docs/02-requirements-srs.md` = v2.17.1, 473,754 bytes) I applied the 4 Doc 02 ops
of the v2.17.2 spec and then the 6 ops of the v2.17.3 spec, each `FIND` required to match exactly
once, and compared with disk:

```
10/10 FINDs matched exactly once
v2.17.1 473,754 -> reconstructed v2.17.2 480,660 (= the cycle-1 figure)
                -> reconstructed v2.17.3 492,743 ; disk 492,743 ; BYTE-IDENTICAL: true
```

That proves zero collateral edits and zero transcription residue across the entire file, and it
proves the "no normative change" claim mechanically. I corroborated it by direct section hashing,
HEAD vs disk — all identical: §4.45 FR-131 `9226d7f6ca46fd53`, §4.46 FR-132 `352f6d5e4b9b9edc`,
§8 `d3ebe93bd93db237`, §16 `841e09241d9fbd4f`, whole body §1 to §11 `603567f673bc4bd6`, §14 to end
`9083fba7043f1e3e`. `git diff -U0 HEAD` shows five hunks (header x2, §12 insert, §13 (j) row, §13
widening note), 154 insertions / 6 deletions. No ID minted, reused or renumbered; Must count 114.

**The cycle-1 Medium (ISS-01) is closed at all four sites.**
- Status column: "(3) **RULED 2026-09-08** … application routed to the engineer; its status is
  recorded in Doc 06 §7 and the UT registry, **not here**". "CLOSED — ruled and applied" is gone
  from every live status field.
- Body: split into "THE RULING (closed)" / "THE APPLICATION (routed, not certified here)"; the
  three present-indicative build claims are subordinated to "**The decided remedy is:**".
- Doc 06 pin: "Doc 06 v2.8.0, **Status: In Review** (the tester's technical review is pending)" —
  I verified v2.8.0 exists, is In Review, and that **no review report for v2.8.0 existed** when I
  checked; the pin now resolves and its status claim is true.
- Mirroring: header `Status:` block, v2.17.3 `Change:` entry, marked correction inside the v2.17.2
  `Change:` entry, and the §13 (j) row all agree, with an explicit precedence rule for retained
  dated narration.

**ISS-02 (H-set) closed:** bare `H-15/H-17/H-18` now 0 occurrences; clause (e)'s carve-out set is
`H-16/H-17/H-18` at lines 30, 127, 167, 3173, 3240 — matching FR-131 clause (e)'s own enumeration
at line 1344 verbatim — with H-15 cited additionally; the union with a gloss at 3171/3250 was an
expressly allowed alternative; the single surviving `H-15 / H-17 / H-18` (line 170) is the quoted
original inside the correction marker. **H-16 added** to the (j)(3) evidence list, paraphrase
checked against §16.4 H-16.

**ISS-03 (§12) closed:** session-scope entries now exist for both v2.17.2 (line 3171) and v2.17.3
(line 3173).

**Citations re-checked against primary sources, not summaries:** Doc 06 v2.8.0 header; Doc 06 §7
and the UT registry (UT-0890, line 797, 15 assertions); `DECISIONS-2026-09-08-VERIFY-PAGE.md` §1,
§5, §5.5 and §5.6 (I counted §5.6 — **exactly 15** numbered assertions, so "the 15-assertion guard"
is exact); §16.4 H-15/H-16/H-17/H-18 row texts; FR-131 clause (e).

**Carried Lows verified present and not worsened.** The apparent count increases (`Scenario 8`
6 to 7, `Grade-8` 2 to 3) are the **new Status block's own disclosure text** at lines 39 and 40,
not new defect sites.

## 3. New findings (all Low, none blocking)

| ID | Site | Finding |
|---|---|---|
| ISS-C2-01 | header, v2.17.2 `Change:` entry, line 152 | "applied by the engineer" carries no inline correction marker; discharged in substance by the header precedence clause (lines 44-46). Low, not Medium: dated narration, explicitly governed, every live site correct. |
| ISS-C2-02 | §13 (j), line 3235 | "No string is deleted — … renders in `dev` only" falls outside the "The decided remedy is:" scope and reverts to bare present indicative. Low: not a Status field, no dated completion claim, no artifact pin; and it was not named at cycle 1. |
| ISS-C2-03 | header `Status:`, lines 9-11 | "the same neutral reviewer is assigned for cycle 2" outruns the source cited in the same sentence (the assignment record scopes its Doc 02 row to v2.17.2). True in fact; cheapest fix is the **PM** recording cycle-2 assignments in that record. |

## 4. Observation routed on, deliberately NOT scored

**Doc 06 v2.8.0's UT-0890 registry row (line 797) cites "§16.4 H-15/H-17/H-18"** — the same
citation drift Doc 02 has just corrected, likewise omitting H-16, the provision most directly
answering the retired string "cannot be traced back to you" that UT-0890 asserts is absent from the
DOM. **Not a Doc 02 issue; not scored in my report.** Routed to the project-manager for the
**tester**, who holds the Doc 06 v2.8.0 technical review. I am not Doc 06's reviewer.

## 5. Stop-hook / audit state — recorded, not acted on

`node hooks/run_gates.cjs --audit` before my report: **2 blocking** — Doc 02 v2.17.3 (mine) and
Doc 06 v2.8.0 (no report). After my report: **1 blocking** — Doc 02 v2.17.3 now
`PASS <- 02-requirements-srs-v2.17.3-business-cycle2.md`; the hook matched my metadata block
correctly (canonical `Reviewed document:` / `Document version:` field names, no filename fallback).

**Remaining blocker, not mine:** `BLOCK 06-coding-and-ut.md v2.8.0 (technical) - report exists but
fails the bar: ['06-coding-and-ut-v2.8.0-technical-cycle1.md']`. The tester's cycle-1 report on Doc
06 v2.8.0 landed during my session and FAILED; the rework routes to the **engineer** (owner of Doc
06) and the re-review to the **tester**. Per the assignment record's standing rule — "a role that
hits the SubagentStop block ROUTES to the PM; it never authors the review whose absence is blocking
it" — I record it and **stop**. I did not read, score, or author anything for Doc 06.

## 6. Gate-2 position (explicit)

**No Gate-2 finding and no merge signature is given by this session.** This was a document-review
task under the review-and-rework loop, which is a quality loop, not a gate. The RTM zero-gap
certification and the merge sign-off are separate acts on separate evidence. For the record, the
audit still reports **"Gate 2 traceability criterion: NOT MET"** — 138 Must rows, 16 COMPLETE, 122
OPEN, with the two independent signals agreeing. Gate 2 is not ready and I do not certify it.

## 7. Open items

| Item | Owner | State |
|---|---|---|
| Set `Status: Approved` on Doc 02 v2.17.3 | product-owner | Owed — verdict PASS |
| Record the cycle-2 Doc 02 outcome (and future cycle-2 reviewer assignments) in the assignment record | project-manager | Owed — also closes ISS-C2-03 |
| ISS-C2-01 / ISS-C2-02 / ISS-C2-03 (3 new Lows) | product-owner (PM for the record half of C2-03) | Open — fold at the next touch of their sites |
| ISS-04..ISS-10 (7 carried Lows) | product-owner | Open — ISS-05 first, on the next version touching §8 |
| Doc 06 v2.8.0 rework after the tester's FAIL | engineer (owner) then tester (re-review) | Open — **not mine**; routed to the PM |
| Doc 06 UT-0890 registry row cites H-15/H-17/H-18 (missing H-16) | tester (raise) / engineer (fix) | Open — observation passed on, unscored |
| TC row for UT-0890 | tester | Owed at the next Doc 07/08 touch |
| §13 (j)(1) and (j)(2) still un-ruled | product-owner | OPEN — unchanged by this version |
| AL-CANDIDATE: a role's document records only facts it can verify from artifacts it owns | human (via meta-reviewer / PM cadence) | Proposed — strengthened by a third sighting; agent definitions change only by human approval |

## 8. IDs touched

- **Document reviewed:** Doc 02 **v2.17.3** (`docs/02-requirements-srs.md`) — scored, not edited.
- **Issue ids minted by me:** ISS-C2-01, ISS-C2-02, ISS-C2-03 (this report only).
- **Issue ids carried forward unchanged:** ISS-04..ISS-10 (cycle-1 ids preserved deliberately).
- **Requirements/provisions checked, none amended:** FR-131 (clause (e) and its carve-out
  enumeration), FR-132 §(b)/(d)/(e), CON-015, §16.4 **H-15, H-16, H-17, H-18**, OI-20,
  §13 tracked deferral (b), §13 tracked routing (h) and (j).
- **Cross-document artifacts read:** Doc 06 v2.8.0 (header, §7, UT registry — for citation
  verification only), `UT-0890` (referenced, not reviewed), the two decision records and both
  product-owner session notes.
- **No BR / FR / NFR / CON / RISK / DES / ADR / SCR / US / TC / UT id was minted, reused or
  renumbered by the document under review. Must count stays at 114.**

## 9. Addendum — SubagentStop block at session close (recorded, NOT acted on)

The stop hook blocked my exit with **one** entry. It is **not my assignment** and I did not author,
score, or clear it. Recorded here per the hook's own instruction and the assignment record's
standing rule.

| Blocked document | Hook's exact finding | Why it is not mine to clear |
|---|---|---|
| `06-coding-and-ut.md` **v2.8.0** (technical) | Report **exists** (`06-coding-and-ut-v2.8.0-technical-cycle1.md`) but does not satisfy the gate: **Verdict=FAIL, score=95%, C=0 H=0 M=1**. It fails the second limb only — the score clears 95%, but one **Medium** forces the FAIL. | Doc 06 v2.8.0 and the code drop are assigned to the **tester** (technical mode) by `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`, and that cycle-1 review has now run and FAILED. The **owning role for Doc 06 is the engineer** (Samuel Oyelaran), who reworks to a new version; the **tester** re-reviews it as cycle 2. I am neither. Authoring a report to clear my own stop would not count as a cycle and would break detector-not-author. |

**Correction to §5 of this note, for accuracy:** §5 recorded the tester's Doc 06 cycle-1 report as
"FAILED" without figures, because the audit line I saw said only "report exists but fails the bar".
The hook's close-out message gives the precise verdict — **FAIL, 95%, 0C / 0H / 1M / (Low count not
reported by the hook)**. Noted so the record is exact; the routing is unchanged.

**Routing (to the project-manager):** Doc 06 v2.8.0 → **engineer** reworks to **v2.8.1** (a Medium
on an otherwise-95% technical review is the same shape as Doc 02's v2.17.2 → v2.17.3 patch cycle,
though the increment is the engineer's call with the tester's report in hand) → **tester**
re-reviews as cycle 2 of 5. Cycle 1 of 5 is spent; the cap is not near.

**My own work is complete and unblocked by this.** Doc 02 v2.17.3 shows
`PASS <- 02-requirements-srs-v2.17.3-business-cycle2.md` in the audit. I am stopping here.
