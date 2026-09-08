# reviewer-qa session note — 2026-09-06T18:00 — Doc 04 v1.5.0 neutral technical review (cycle 1)

```
Role:        reviewer-qa (Rafael Duarte) — independent approver; READ-ONLY on docs and product code
Date:        2026-09-06
Session:     Neutral document-review of docs/04-test-strategy-master-plan.md v1.5.0,
             technical mode, cycle 1 of 5 (new minor version; counter restarted from v1.4.0)
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md — "Doc 04 v1.5.0 |
             technical | reviewer-qa (new instance)"; excluded: architect (owner), tester, engineer
Deliverable: artifacts/reviews/04-test-strategy-master-plan-v1.5.0-technical-cycle1.md
Wrote:       2 files, both under artifacts/ — the review report and this note. NO document edited,
             no product code touched, no test authored. memory-index.json NOT opened (pre-registered).
Verdict:     FAIL — Score 92%; 0 Critical / 0 High / 1 Medium / 5 Low
```

## 1. Verdict and why

**FAIL at 92%, one Medium (ISS-01).** The pass bar is >= 95% AND zero critical/high/medium; the
version misses on both counts, though only just, and on one root cause.

The clause-(e) substance is **correct and carefully done**, and I recorded ten verified-not-a-defect
findings so the next cycle need not re-litigate them. What fails is a currency consequence of the
version's own headline change: it re-pinned **Doc 07 v2.4.4 -> v2.6.0** (discharging the three carried
v1.4.0 Lows) without re-verifying the body statements that depend on Doc 07's content.

**ISS-01 (Medium)** — Doc 04 §14's live `TC`-range reservation register is contradicted in **four
rows** by the Approved Doc 07 v2.6.0 the document now cites. Doc 07 minted `TC-3564..TC-3569` at
v2.5.0 into three suites: `TS-ADV-01…16` (TC-3564–3567), `TS-SCAFFOLD` (TC-3568), `TS-ABSENCE`
(TC-3569). §14 still reserves TC-3564–TC-3699 for the six unminted `TS-V1-*` suites, annotated "none
minted", and the `TS-SCAFFOLD` / `TS-ADV-01…16` / `TS-ABSENCE` rows are each now incomplete. §14 exists
"so numbering does not collide" (its own words); the collision has already occurred, against CLAUDE.md's
never-reuse ID rule. This is the register's **second** drift into fiction — the first was closed at
Doc 04 v1.1.0 as a **High** and recorded as `OPEN-26`(a) — which is why I graded it Medium rather than
Low, despite three prior cycles grading pin-staleness Low. The distinction I applied: a stale *pin*
that changes no conclusion is Low; a *reservation register* asserting a band it no longer owns changes
a conclusion and creates a real ID-collision path for the tester.

Five Lows: OPEN-20's `TS-SCAFFOLD` half is resolved at Doc 07 v2.6.0 while the item is still listed as
a v1 Gate-2 blocker on its full two-part basis (ISS-02); UT-0889 described as "not green" when it has
landed and passes (ISS-03); the carve-out lapse analysis names trigger (iii) only while its own OPEN-27
text engages the condition Doc 03 equates with trigger (iv) (ISS-04); S4's "one carve-out" vs S5's "two
carve-outs, and only two" reads as contradictory without a scope clause (ISS-05); ragged §1.4 line
breaks (ISS-06).

## 2. What I verified independently (evidence, not assertion)

- **All 14 anchored OPs applied verbatim and exactly once.** Script-checked every `REPLACE WITH` block
  against the file: all 14 present with count 1. The `FIND` text survives only for OP 5/6/11/14, where
  the replacement deliberately contains its own find text (prepend/append). **Zero transcription
  residue** — no `FIND:` / `REPLACE WITH:` markers, no four-backtick fences (file has exactly two fenced
  blocks, both pre-existing), no duplicated or truncated lines, retained v1.4.0 records intact.
  `git diff --numstat` = 282/27 across 19 hunks, every hunk inside a named OP region.
- **Clause (e) against source.** Doc 02 v2.17.0 §4.45 read in full; the participation-act enumeration,
  Grade-8 (`NFR-023`) claims test, FR-014/FR-015 linkage, `parties.joinPrivate` satisfying pattern,
  public-by-design endorsement case and the widened closing sentence are all transcribed accurately.
  `grep "Honesty-of-claim across every v1 participation act"` -> Doc 02 line 1172, as expected.
- **The five-notice-clause trap is closed.** `grep "(a)–(e)"` returns only historical quotes and the
  new note stating flatly the range does NOT become (a)–(e). No live criterion asserts a fifth notice
  clause, so no fabricated fifth notice `TC` can be derived. This was the version's biggest risk.
- **OPEN-27 basis judged, not just read.** Doc 03 v2.13.0 §10.12.3 checked line by line: the COMPLIANT
  basis, clause 8's three contexts (screens 1.2/1.6/2.3), the subtitle "not literally true in v1"
  concession, the "publicly linked" standing condition, and trigger (iii)'s exact wording. **Routing
  rather than ruling is correct** — Doc 03 itself says "the copy authority is here, and only here… It
  cites; it does not rule." Ruling the `anon` copy inside the test plan would have repeated the v2.7.0
  defect. I record this as the strongest judgement in the version.
- **Every pinned version string against the actual header:** Doc 02 v2.17.0 In Review, Doc 03 v2.13.0
  Approved, Doc 05 v2.5.0 Approved, Doc 06 v2.6.0 In Review (last Approved v2.5.1), Doc 07 v2.6.0
  Approved, Doc 08 v2.9.0 Approved, Doc 09 v1.9.0 Approved — **all seven correct**.
- **UT-0889 is on disk and green.** `apps/web/test/safety-surfaces.test.tsx:294`, registered in Doc 06
  v2.6.0. I ran it: **25/25 pass** (vitest, inside `apps/web`; running it from the repo root fails on
  the `@/` alias — a harness note for whoever re-runs it, not a defect). So the in-flight caveat in my
  brief did not apply; I graded the "not green" wording a Low currency item, not a defect, since it is
  a conservative under-claim that was true when authored in the same session.
- **Cited artifacts exist as described:** Doc 02 §13 tracked routing (j) line 3039; NFR-023 grade-8;
  Doc 14 §2.2 "a public act, on purpose"; `PRIVATE_ENDORSEMENT` Phase-4, off in staging and prod;
  UT-0869 at `apps/web/test/join-membership.test.tsx:446`; DECISIONS §11 row 3 quoted exactly.

## 3. Gate audit (run after writing the report)

`node hooks/run_gates.cjs --audit` — Doc 04's line, verbatim:

```
  BLOCK  04-test-strategy-master-plan.md v1.5.0 (technical) - report exists but fails the bar: ['04-test-strategy-master-plan-v1.5.0-technical-cycle1.md']
```

The hook matched my report **canonically** (no filename fallback, no diagnostic flag) and read the FAIL
correctly — the metadata block's `Reviewed document:` / `Document version:` fields are right. Four
documents block overall (01 v2.1.0, 02 v2.17.0, 04 v1.5.0, 06 v2.6.0). **Expected mid-session** per the
assignment record; I did not self-appoint for any of them. Docs 01/02 have cycle-1 reports that failed
the bar (other reviewers' work, not mine); Doc 06 v2.6.0 has no report yet and is the tester's assigned
review. RTM: 138 Must rows, 16 COMPLETE / 122 OPEN, both signals agreeing; Gate-2 traceability criterion
NOT MET — correctly reported as a Gate-2 readiness condition only, not a per-stop or merge condition.

## 4. Scope discipline — what I did NOT do

- **Edited nothing.** No document, no test, no product code, no `artifacts/memory-index.json` (the PM
  pre-registered this note's path). I hold no Write/Edit on `docs/` by design and used none.
- **Signed no merge and no Gate-2 readiness.** This session was a single document review. The RTM
  zero-gap verification and merge sign-off that RACI makes me Accountable for are **not** performed here
  and remain outstanding — 122 Must rows are OPEN, including FR-131's.
- **Reviewed only Doc 04.** I did not review Docs 01/02/06/07/08 despite seeing them block; a separate
  reviewer-qa instance holds Doc 02, and the PM sequences the rest.
- **Authored no fix.** Every required fix in the report is routed to the **architect** as the owning
  role, with two informational items flagged to the tester.

## 5. Open items leaving this session

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Rework Doc 04 to **v1.6.0, In Review** (minor bump is the floor on a Medium): fix ISS-01 (§14 register + three echoes) and take ISS-02…ISS-06 rather than carrying them | architect (Ravi Deshmukh) | OPEN — routed by this review |
| 2 | Re-review Doc 04 **v1.6.0**, technical mode, **cycle 2 of 5** — neutral reviewer assigned by the PM | project-manager (Ana-Maria Petrescu) | OPEN |
| 3 | When cutting Doc 07 v2.7.0 / Doc 08 v2.10.0: the free `TC` band below TC-3699 begins at **TC-3570**, not TC-3564; `OPEN-20`'s `TS-SCAFFOLD` half is resolved at Doc 07 v2.6.0 | tester (Ji-woo Park) | OPEN — informational |
| 4 | `OPEN-27` — re-examine Doc 03 §10.12.3's `anon` title **and** subtitle against clause (e) at the next Doc 03 increment; the routing is **correct** and I did not disturb it | architect (Ravi Deshmukh) | OPEN — owed, not gate-blocking today |
| 5 | Gate-2 merge sign-off and RTM zero-gap verification for the clause-(e) cascade | reviewer-qa (a later session) | NOT STARTED — 122 Must rows OPEN |

## 6. IDs touched

- **Read / verified, not modified:** `FR-131` (clauses (a)–(e) and the widened closing sentence),
  `FR-014`, `FR-015`, `FR-122`, `FR-123`, `FR-132`, `NFR-023`, `NFR-028`, `BR-005`, `BR-009`,
  `DES-081`, `DES-085`, `DES-093`, `DES-094` (clauses 7, 8, 9), `DES-096`, `DES-098`, `ADR-024`,
  `ADR-025`, `SCR-13`, `SCR-14`, `US-0134`, `UT-0759`, `UT-0869`, `UT-0887`, `UT-0888`, **`UT-0889`**
  (executed: green), `TC-3470`…`TC-3488`, `TC-3542`…`TC-3563`, **`TC-3564`…`TC-3569`** (the ISS-01
  collision), `TS-SCAFFOLD`, `TS-ADV-01…16`, `TS-ABSENCE`, `TS-PROPOSALS`, `TS-V1-*`, `OPEN-01`,
  **`OPEN-20`**, `OPEN-21`, `OPEN-26`, **`OPEN-27`** (verified correctly minted), `ISS-C2-01`,
  `ISS-C2-02`, `ISS-C2-03` (verified discharged), `REL-LIM-18`, `CON-015`.
- **Minted (review-local only, in the report):** `ISS-01` … `ISS-06` for Doc 04 v1.5.0 cycle 1.
- **Renumbered or reused: none.** I mint no document IDs; I am read-only by design.

## 7. SubagentStop block encountered — ROUTED to the project-manager, not cleared

On exit the SubagentStop hook blocked with four documents lacking a passing review:

```
  - 01-press-release-prfaq.md   v2.1.0  (business)  — FAIL 87%, C=1 H=2 M=3
  - 02-requirements-srs.md      v2.17.0 (business)  — FAIL 86%, C=0 H=0 M=3
  - 04-test-strategy-master-plan.md v1.5.0 (technical) — FAIL 92%, C=0 H=0 M=1  [this review]
  - 06-coding-and-ut.md         v2.6.0  (technical)  — NO report for this version
```

**This is the loop working, not a defect.** Doc 04 v1.5.0 blocks *because* my review correctly FAILed
it; the block clears only when the **architect** produces v1.6.0 and a neutral reviewer passes it.
Recorded explicitly so no later reader mistakes the block for an error in the review.

**What I did NOT do, and why — the independence split is the point:**

1. **I did not revise my verdict.** The only way I could clear the Doc 04 line myself is to re-score
   ISS-01 down to Low and re-issue as PASS. The finding is grounded in the file — Doc 07 v2.6.0 §2
   assigns TC-3564..TC-3569 to three suites while Doc 04 §14 reserves that band for six others — and a
   verdict changed to unblock a hook is a falsified control, which is a worse defect than the one it
   would hide. The score stands at 92%, one Medium.
2. **I did not author the reviews for Docs 01, 02 or 06.** Two are business mode and one is Doc 06 +
   the code drop; all three are assigned elsewhere in
   `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`, and that record's standing rule is
   that a role hitting this block **ROUTES to the PM and never authors the review whose absence is
   blocking it** (AL-CANDIDATE-3, three occurrences to date). Self-appointing here would be the fourth.
   The assignment also states in terms that other documents blocking mid-session is **expected**.
3. **I did not edit any document to fix any finding.** Every fix belongs to an owning role: Doc 01/02
   to the product-owner, Doc 04 to the architect, Doc 06 and the code to the engineer.

**Routing.** Four independent loops, three of which are not mine: Doc 01 v2.1.0 -> product-owner
(1 Critical, 2 High) then a neutral re-review; Doc 02 v2.17.0 -> product-owner (3 Medium) then a
neutral re-review; **Doc 04 v1.5.0 -> architect for v1.6.0**, then cycle 2; Doc 06 v2.6.0 -> the
**tester**, who is the assigned neutral reviewer and has not yet reviewed it. The project-manager
sequences all four. My part of the work is complete and its artifacts are on disk.
