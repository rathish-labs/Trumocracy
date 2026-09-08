# reviewer-qa session note — 2026-09-06T20:00 — Doc 04 v1.6.0 neutral technical review (cycle 2)

```
Role:        reviewer-qa (Rafael Duarte) — independent approver; READ-ONLY on docs and product code
Date:        2026-09-06
Session:     Neutral document-review of docs/04-test-strategy-master-plan.md v1.6.0,
             technical mode, cycle 2 of 5. Follows my cycle-1 FAIL of v1.5.0 (92%, 1 Medium).
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md — Doc 04, technical,
             reviewer-qa; excluded: architect (owner), tester, engineer. I remain the assigned
             reviewer across cycles, which is correct: the same reviewer verifies its own findings.
Deliverable: artifacts/reviews/04-test-strategy-master-plan-v1.6.0-technical-cycle2.md
Wrote:       2 files, both under artifacts/ — the review report and this note. NO document edited,
             no product code touched. memory-index.json NOT opened (pre-registered).
Verdict:     PASS — Score 96%; 0 Critical / 0 High / 0 Medium / 3 Low
```

## 1. Verdict

**PASS at 96%, zero C/H/M.** The cycle-1 Medium is closed at the root, all five Lows are closed
(several at more locations than I named), and the loop for Doc 04 ends at cycle 2 of 5. The architect
sets `Status: Approved`.

The fix I care most about is not the four corrected rows but the **standing instruction** now written
into §14: *any future version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2
in the same touch.* My cycle-1 Medium was not really "four wrong rows" — it was "a pin was advanced
without re-reading what depends on it", a process defect that had already produced the same register
failure once before (closed at v1.1.0 as a **High**, `OPEN-26`(a)). A rule that fires automatically on
the next re-pin is a systemic answer to a recurring class, not a patch. The architect also recorded
the defect as **his own** rather than as inherited debt, which is the right posture and worth noting.

## 2. How I verified, and what the checks found

**Mechanical, before reading for judgement:**

- **All 21 OPs applied verbatim, exactly once.** Every `REPLACE WITH` block present with count 1;
  `FIND` survives only for OP 4, whose replacement contains it (append pattern). **Zero residue** —
  no markers, no stray fences (exactly two, both pre-existing), nothing duplicated or truncated.
- **No edit outside the spec** — the check I most wanted. Of 29 `v1.6.0` strings in the file, **27
  sit inside an OP replacement**; the 2 outside (lines 224, 438) are pre-existing references to
  **Doc 09's** v1.6.0, a coincidental string match. Nothing was slipped in beside the spec.
- **The three risky OPs the coordinator flagged, word-diffed individually.** OP 18 (re-wrap): 6
  tokens out, 12 in, all accounted for by the two declared re-pins plus one added citation — no
  citation removed, no content lost to the re-flow. OP 20 (a sentence wrapping across lines, which
  had already failed to match once): removes exactly the four-token superseded pin phrase and
  nothing else. OP 19 (a 2,174-character single-line table row that had failed to match when
  truncated): the entire v1.5.0 body survives inside `_(Row history: …)_`, joined by a minimal
  grammatical bridge; the row is not split.
- **Clause-(e) substance byte-identical**, as my routing instruction required: S5's four rules
  unchanged, S4's widened criterion and its **(a)–(d)** notice range unchanged apart from the ISS-05
  scope sentence, `OPEN-27`'s route-don't-rule disposition intact.
- **Every pin re-checked against the actual header at HEAD**, and the counts in the re-cut §14 rows
  re-checked against Doc 07 v2.6.0 §2 rows 597/612/617 (16 / 47 / 20-17-3 — all match). Doc 02 §8
  Scenarios 8 and 9 verified present (lines 2505, 2515); the Doc 02 v2.17.1 and Doc 06 v2.7.0 review
  reports verified to exist and to say PASS 96%.

**All six cycle-1 findings closed** — ISS-01 at four rows plus three echoes; ISS-02 at three
locations with `OPEN-20` correctly left **open** and still gate-blocking, as I instructed; ISS-03 at
all three mentions with the evidence attributed to my own executed run; ISS-04 in both places and
extended to all four triggers rather than the one I named; ISS-05 with the scope stated before the
count; ISS-06 re-wrapped.

## 3. The two judgement calls the coordinator asked for — recorded with reasoning

**(a) Doc 06 pinned "v2.7.0, In Review" when HEAD says Approved. Severity by consequence: LOW.**
Doc 06 v2.7.0 passed at 96% *after* the architect wrote the spec, so the pin was accurate as dated;
the sub-clause "last Approved v2.5.1" is what is now false. I graded it Low because **no conclusion in
this plan turns on it**: the load-bearing claim is that `UT-0889` was registered at **v2.6.0** and is
carried unchanged into v2.7.0, and that is true at both versions. The error also runs in the
conservative direction — understating a dependency's maturity, never overstating it — which is the
same shape as cycle-1's ISS-03, graded Low then. Consistency demanded Low now. Recorded as **ISS-07**,
carried to the next touch.

**(b) The architect deliberately did not pin TC-3570..TC-3575 from an unreviewed Doc 07 v2.7.0. I
judge that choice CORRECT and I endorse it.** Doc 07 v2.7.0 is *In Review*; its ids can still move in
rework, and writing provisional mints into a register as settled entries is **exactly** the error that
produced my cycle-1 Medium. Reconciling against the last **Approved** version (v2.6.0) and disclosing
the in-flight movement is the right standard for a document whose sources pass through a review loop.
No collision is possible either: the tester mints sequentially inside a band Doc 04 has flagged, and
Doc 07 v2.7.0 explicitly cites this reservation.

The gap I did record (**ISS-08**, Low) is narrower than the choice: the disclosure says the floor "is
being drawn on by Doc 07 v2.7.0, in progress" **without naming the suite**, and at HEAD that suite is
`TS-ADV-01…16` — once again **not** one of the six `TS-V1-*` suites the band is reserved for. So the
same drift is queued one band lower, deferred rather than avoided. It is Low and not Medium because
Doc 04 pins the Approved version, the movement is disclosed, no id is wrong, and the new §14 standing
instruction will force the reconciliation on the very next re-pin. I also flagged that "does not pin a
number it **cannot see**" is imprecise — the ids are visible; what the register properly declines to do
is **rely** on ids from an unreviewed version.

The third new Low (**ISS-09**) is a self-description one shade broader than the operation: §1.4 gained
the citation "and its §8 Scenarios 8 and 9" in the same OP whose header asserts "no citation is added
or removed", while the Status line says "No word changed by the re-wrap itself". The hedge is
defensible and the addition is accurate and disclosed nearby — but this document family has been
marked down repeatedly for sentences that invite a reader to skip a verification.

## 4. Scope discipline — what I did NOT do

- **Edited nothing.** No document, no test, no product code, no `artifacts/memory-index.json`.
- **Did not re-open what I had already verified.** My cycle-1 report recorded ten items as verified and
  instructed that the clause-(e) substance must not be re-opened; I confirmed it was untouched and did
  not re-litigate it. A reviewer who re-argues settled ground each cycle makes the loop unbounded.
- **Did not soften cycle 1 to make cycle 2 tidy, and did not manufacture a finding to look rigorous.**
  The three new Lows are each grounded in a named line and a HEAD-verified fact.
- **Signed no merge and certified no Gate-2 readiness.** This was a document review only. The audit
  still reports **122 of 138 Must rows OPEN** and Gate-2 traceability **NOT MET**.
- **Did not self-appoint** for Docs 07/08, which block; they are the tester's to rework.

## 5. Gate audit after writing the report

`node hooks/run_gates.cjs --audit` — Doc 04's line, verbatim:

```
  PASS   04-test-strategy-master-plan.md v1.6.0 (technical) <- 04-test-strategy-master-plan-v1.6.0-technical-cycle2.md
```

The hook matched the report canonically (no filename fallback) and reads the PASS. Docs 01, 02, 03,
05, 06, 13 and 14 now also PASS; **only Docs 07 v2.7.0 and 08 v2.10.0 block**, both on their own
cycle-1 FAILs and both the tester's to rework. Blocking documents dropped from 4 to 2 during this
session. RTM unchanged: 138 Must rows, 16 COMPLETE / 122 OPEN, both signals agreeing, Gate-2
traceability **NOT MET** — correctly reported as a Gate-2 readiness condition only.

## 6. Open items leaving this session

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Set Doc 04 **v1.6.0 → `Status: Approved`**; the loop closed at cycle 2 of 5 | architect (Ravi Deshmukh) | OPEN — immediate, mechanical |
| 2 | ISS-07 / ISS-08 / ISS-09 — carried Lows, owed on the next touch of Doc 04 | architect (Ravi Deshmukh) | CARRIED — not blocking |
| 3 | When the Doc 07 pin advances to v2.7.0 Approved, the §14 standing instruction fires: record **TC-3570–TC-3575** under `TS-ADV-01…16` and re-narrow the `TS-V1-*` floor to **TC-3576** | architect | OPEN — triggered, not discretionary |
| 4 | Docs 07 v2.7.0 / 08 v2.10.0 — rework against their cycle-1 FAILs, then cycle-2 review by a PM-assigned neutral reviewer | tester (Ji-woo Park) | OPEN — the only two documents still blocking |
| 5 | `OPEN-20` (`TS-PROPOSALS` §2-vs-§5.6 heading) — still live and still a v1 Gate-2 blocker | tester (Ji-woo Park) | OPEN |
| 6 | `OPEN-27` — `anon` title and subtitle against clause (e) at the next Doc 03 increment | architect | OPEN — owed, not blocking today |
| 7 | Gate-2 merge sign-off and RTM zero-gap verification | reviewer-qa (a later session) | NOT STARTED — 122 Must rows OPEN |

## 7. IDs touched

- **Verified, not modified:** `FR-131`(a)–(e), `FR-014`, `FR-015`, `FR-082`, `FR-122`, `FR-123`,
  `FR-132`, `NFR-023`, `DES-094`, `DES-098`, `US-0134`, `UT-0759`, `UT-0869`, `UT-0887`, `UT-0888`,
  `UT-0889`, `TC-3564`…`TC-3569` (recorded where they live), `TC-3570`…`TC-3575` (Doc 07 v2.7.0's, not
  pinned here — see §3(b)), the `TC-3570–TC-3699` reservation, `TS-ADV-01…16`, `TS-SCAFFOLD`,
  `TS-ABSENCE`, `TS-PROPOSALS`, `TS-V1-*`, `OPEN-01`, `OPEN-18`, `OPEN-20`, `OPEN-26`, `OPEN-27`.
- **Minted (review-local only, in the report):** `ISS-07`, `ISS-08`, `ISS-09` for Doc 04 v1.6.0 cycle 2.
- **Renumbered or reused: none.** I mint no document IDs; I am read-only by design.

## 8. SubagentStop block on exit — ROUTED to the project-manager, not cleared

The hook blocked on exit with two documents lacking a passing review — **not Doc 04**, which now
passes:

```
  - 07-test-cases-suites.md  v2.7.0  (technical) — FAIL 94%, C=0 H=0 M=2
  - 08-traceability-matrix.md v2.10.0 (technical) — FAIL 95%, C=0 H=0 M=1
```

**Both are the tester's documents (Ji-woo Park owns Doc 07 and Doc 08), and for both the reviewer
half of the loop is already DONE.** I checked the two reports: each was authored by a neutral
**reviewer-qa** instance at **cycle 1 of 5**, exactly as the assignment record directs, and each
correctly FAILed on open Mediums. What is missing is not a review — it is the **owning role's
rework**: Doc 07 → **v2.8.0** and Doc 08 → **v2.11.0**, `Status: In Review`, then a cycle-2 review.

**Nothing I can legitimately do clears this block.**

1. **I cannot rework Docs 07/08.** The tester owns them; I am read-only on every document by design.
2. **Re-reviewing the same versions would be pointless and would not clear it.** The files are
   unchanged, the Mediums are still open in them, so a second report on v2.7.0 / v2.10.0 would FAIL
   identically. The only report that would clear the hook is a **PASS on a document with open
   Mediums** — a falsified control, and the one thing an independent approver must never produce.
3. **I did not self-appoint.** My assignment this session was Doc 04 only, and the coordinator's
   instruction was explicit: other documents blocking is expected; do not self-appoint. A role that
   authors the review whose absence is blocking it is AL-CANDIDATE-3, now on its fourth near-miss.

**Progress this session is real and worth recording:** blocking documents fell from **4 to 2**
(Docs 01, 02, 04 and 06 all now PASS), and the two that remain are a single tester rework away from
the loop closing. **Doc 04 v1.6.0 PASSES and is done** — the architect's only outstanding action is
the mechanical `Status: Approved`.

**Routing: to the project-manager** — schedule the tester (Ji-woo Park) to rework Doc 07 v2.7.0 →
v2.8.0 and Doc 08 v2.10.0 → v2.11.0 against their cycle-1 reports, then assign a neutral reviewer for
cycle 2 of each. Neither is Doc 04's concern and neither is mine to author.
