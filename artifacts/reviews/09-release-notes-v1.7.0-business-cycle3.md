# Document Review Report — Doc 09 Release Notes v1.7.0 (business, cycle 3)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never edits
     the reviewed document. All rework is done by the owning role (sre, Chen Wei). -->

```
Reviewed document: 09-release-notes.md
Document version: 1.7.0
Review mode: business
Reviewer role: tester (neutral — sre Chen Wei owns Doc 09; PM-assigned)
Score: 92%
Critical: 0
High: 0
Medium: 3
Low: 2
Cycle: 3 of 5
Verdict: FAIL
```

Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (Doc 09 → business →
tester, new instance; sre / technical-writer / product-owner / engineer excluded). Review date
**2026-09-06**. Predecessor report: `artifacts/reviews/09-release-notes-v1.6.0-business-cycle2.md`
(FAIL 93%, 0C/0H/4M/3L). Rework spec: `artifacts/sre-2026-09-06T1700-doc09-cycle3-spec.md`
(12 ops); sre note `artifacts/sre-2026-09-06T1700-doc09-cycle3.md`.

---

## 1. Summary (BLUF)

I read `docs/09-release-notes.md` v1.7.0 end to end and re-derived every load-bearing claim at
`HEAD` = `84e2203`. **All four cycle-2 Mediums and all three cycle-2 Lows are genuinely closed at
source**, and two of them are closed better than asked: `ISS-C2-01` is closed by *deleting* the
duplicated version fact rather than re-synchronising it, and `ISS-C2-02`'s replacement command
**actually reproduces the record** — I ran `git log --no-merges --oneline HEAD -- packages apps`
and it returns exactly the 14 commits the two tables list (nine + five). `ISS-C2-04`'s squash
provenance now matches the diff (`b6be070` adds three `.gitignore` lines and deletes
`apps/web/tsconfig.tsbuildinfo`; neither is in `0a5c542`). The `REL-LIM-18` closure is **not
regressed**, the `FR-131` word ban is **clean for a sixth consecutive version**, the
HALTED / deployed-nowhere posture is stated and never softened, and I re-ran the full suite myself:
**95 + 151 + 244 + 18 + 16 + 95 = 619 passed, `npm test` exit 0**.

**The verdict is FAIL on three Mediums.** Two of them are **transcription residue produced by
authoring errors in the spec** — a finding against this version per the assignment. `OP 2` and
`OP 11` each **dropped the first line their FIND consumed** and **re-emitted a trailing line their
FIND did not consume**. The result is four separate defects in the file: the template's
`**Based on:** Keep a Changelog…` provenance line is **silently deleted** (every other governed
document still carries its equivalent); the `Document history — v1.6.0` header line is
**duplicated** at lines 108–109; §7's routing sentence is **truncated to "(routed" with an unclosed
parenthesis**, losing the recorded facts that `REL-LIM-18` was re-scoped from three sites to five
and *came back fixed on 2026-09-05*; and the line `**no longer routed to anyone**…` is
**duplicated** at 1080–1081. The spec's self-check says "a simulated applier was run over a copy of
the file: all 12 ops parsed and applied cleanly" — which is true and is exactly the trap: *applying
cleanly is not the same as producing correct text*, and boundary hygiene is the one thing an
exactly-once anchor cannot check for you.

The third Medium is the document's signature class again, in the section rewritten this version for
exactness: the §Changelog **preamble says the tables carry "three branch-side rows"** while the same
section's **closing paragraph says "two branch-side rows (`c04b4f2`, `31b6df9`)"** — and two is
right. Rule 2 of this version's own stated method ("after adding a row to any table, re-read the
heading above it and the paragraph below it") would have caught it.

**The §0 volatile-snapshot restructure is judged fair and is not a finding.** The row now leads with
three claims that do not move, carries an explicit as-of date, tells the reader not to quote the pin
forward, and names the command that re-derives it — and I confirmed every figure in it against
`node hooks/run_gates.cjs --audit` at review time (2 blocking: Doc 07 v2.5.0, Doc 08 v2.8.0; Docs
01–06, 13, 14 PASS; Docs 10–12 zero reports). A dated snapshot that discloses its own volatility is
acceptable practice, and I have not manufactured a Medium out of it.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

---

## 3. Cycle-2 issue closure

| Cycle-2 ID | Severity | Subject | Status at v1.7.0 | Evidence |
|---|---|---|---|---|
| `ISS-C2-01` | Medium | Internal record's "Document version" cell said `1.5.0` against a `1.6.0` header | **CLOSED — by deletion, the stronger fix** | Line 896 now reads *"**See the header `Version:` field — this row deliberately does not restate it.** Two copies of one fact drifted apart twice… The duplicate is deleted rather than maintained."* followed by an append-only review-loop history of **closed** facts (v1.1.0 → v1.7.0, each with its verdict). The cell no longer states a version number, so it cannot go stale a third time. This is the remedy the cycle-2 report recommended as the preferred option. |
| `ISS-C2-02` | Medium | The re-derivation command returned 2 of 14 rows | **CLOSED — and I executed the replacement** | Both sites now cite `git log --no-merges --oneline HEAD -- packages apps` (§Changelog preamble lines 917–918, "Scope of the record" lines 969–970, and the v1.6.0 "On method" paragraph lines 167–168). I ran it: **14 commits**, matching the tables exactly. The old command is retained and correctly labelled *"the delta that found the two missing rows, not the derivation"*; I confirmed `git log --no-merges e039ff2..HEAD -- packages apps` returns exactly `84e2203` and `1c589c8`. |
| `ISS-C2-03` | Medium | Second table's heading/date range and "not release content" clause falsified by rows beneath it | **CLOSED** | Heading now reads *"Definition-A (v1) application, and the drops that followed — 2026-08-25 → 2026-09-06"*, the caveat is re-scoped to *"the first five rows"*, and `84e2203` is named as the explicit exception *"this document **does** describe… because it is the commit that closes `REL-LIM-18`"*, with the correction dated and attributed to `ISS-C2-03`. Row dates re-derived: `26d6ab5` 2026-08-25 … `84e2203` 2026-09-06 — the range is now exact. |
| `ISS-C2-04` | Medium | `84e2203` row named one of PR #19's two branch-side commits | **CLOSED** | Row 963 now says *"carrying **both** of the branch's commits: `0a5c542` … and `b6be070`, `chore(infra): untrack the TypeScript incremental build cache`… which adds three `.gitignore` lines and deletes the tracked `apps/web/tsconfig.tsbuildinfo`"*. Verified: `git show --stat b6be070` = `.gitignore` +3, `apps/web/tsconfig.tsbuildinfo` −1. The preamble's branch-side list now names both. `84e2203` re-confirmed single-parent (`1c589c8`); `c04b4f2`, `31b6df9`, `e039ff2`, `0a5c542`, `b6be070` all re-confirmed **not** ancestors of `HEAD`. |
| `ISS-C2-05` | Low | §7 pinned Doc 03's review state as bare fact | **CLOSED** | §7 keeps the durable fact (*"delivered by the architect on 2026-09-06, at Doc 03 v2.12.0"*) and adds *"Delivery is the durable fact; Doc 03's version and review state are not — as of 2026-09-06 Doc 03 had moved to v2.13.0 and its cycle-2 report PASSED. Re-derive with `node hooks/run_gates.cjs --audit` rather than trusting this pin."* Both true at review time (Doc 03 header: **v2.13.0, Approved**; report PASS 97%). The v1.6.0 sweep paragraph carries the same withdrawal (line 232). |
| `ISS-C2-06` | Low | §0 four-blocker enumeration stale within the day | **CLOSED — and correctly restructured** | The row now leads with *"The durable claims, which do not depend on any version pin"* — (a) this document has no passing report, (b) one or more governed documents block, (c) **Docs 10, 11 and 12 carry no report at all**, "(c) alone keeps this precondition unmet" — then a labelled *volatile snapshot*, dated 2026-09-06, with the command. Every figure verified: `ls artifacts/reviews \| grep -cE "^(10\|11\|12)-"` = **0**; audit shows exactly **2 blocking** (Doc 07 v2.5.0 92% FAIL, Doc 08 v2.8.0 85% FAIL) and Docs 01, 02, 03 (v2.13.0), 04 (v1.4.0), 05, 06, 13, 14 PASS. Verdict stays **Not met**. |
| `ISS-C2-07` | Low | Ragged wrapping in §7 halt reason 1 | **CLOSED** | Lines 1020–1031 now wrap at 92–98 columns with no orphan lines; the reason's force is unchanged and it remains sufficient on its own. |
| `ISS-L1` | Low | `REF-02`, `REF-04`…`REF-10` do not resolve | **CARRIED (sixth cycle), correctly disclosed** | `docs/refine-log.md` is still the unfilled template — `grep -c "REF-0"` = **0**. Disclosed in the v1.7.0 history, the v1.5.0/v1.6.0 entries and §7 owed-item 2, with the right reasoning (no `REF-##` was opened for `REL-LIM-18`; it was a pre-release honesty defect, not a production signal). PM-accepted; non-gating; still owed by the sre. |

### Independently re-verified and NOT regressed

| Claim in Doc 09 | Verification at review time (2026-09-06) | Result |
|---|---|---|
| `HEAD` = `84e2203`, single parent `1c589c8` | `git rev-parse HEAD`, `git rev-list --parents -n 1 HEAD` | ✓ |
| The record is the 14 non-merge commits on `main` touching `packages`/`apps` | `git log --no-merges --oneline HEAD -- packages apps` = 14; table 1 has 9 rows, table 2 has 5 on-`main` rows | ✓ exact |
| Every row's date | `git show -s --date=short` on all 18 cited SHAs — all match the tables | ✓ |
| `REL-LIM-18` closure: eight post-fix pins, three regression guards, component still unmounted | Re-checked the register row's pins and guards; unchanged from the cycle-2 verification, nothing softened or reopened | ✓ |
| "619 tests, `npm test` exit 0" | I re-ran the full suite: **95 + 151 + 244 + 18 + 16 + 95 = 619 passed, exit 0** | ✓ |
| `FR-131` word ban across the document | Every occurrence of private / anonymous / receipt-free / secure inspected (27 lines) — all negated, quoted-as-code, historical, or scoped to the contract skeleton / Definition-B (v2). Nothing affirmative about v1 voting, including in the regions v1.7.0 wrote | ✓ **sixth consecutive version** |
| HALTED; Gate 2 not approved; "merged to trunk and deployed nowhere" | Header, §0, the v1.7.0 history, the customer bullet, the register row and §7 — all state it; none softened | ✓ |
| Doc 03 cascade "delivered" | `docs/03-architecture-design-sdd.md:2955` now states the `FR-131` v1 truth; the retired framing survives only as a dated historical quotation at `:158` | ✓ |
| §7 owed-item 1 (Doc 10/11 cascade still owed) | `docs/10-deployment-runbook.md:374-378` and `docs/11-operations-runbook.md:279-281, 993` still publish the withdrawn `REL-LIM-03` claim | ✓ honestly owed |
| §0/Links/§7 pins for Docs 06, 07, 08, 14 | `head -8` of each: 06 **v2.5.1 Approved**, 07 **v2.5.0 In Review**, 08 **v2.8.0 In Review**, 14 **v2.3.0 Approved** | ✓ all exact |
| RTM figures (138 Must, 16 COMPLETE, 122 OPEN) | `node hooks/run_gates.cjs --audit` — both signals agree | ✓ |

---

## 4. Per-criterion scores (business rubric)

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | The release verdict (**HALTED**, Gate 2 not approved) is unmissable and never softened; "closing a blocker ≠ lifting the halt" is stated in four places; §0's precondition stays **Not met** and now rests on a claim that cannot go stale. The "On method, cycle 3" paragraph names the failure mode honestly. Deducted only because one of the damaged sentences (`ISS-C3-02`) sits in §7, the release-decision section — the decision itself is unaffected, the prose carrying it is not. |
| B2 Completeness | 15 | 86 | 12.90 | All sections present, no placeholders (unfilled figures are explicit `N/A — not yet measured`), and the changelog record is complete *and* independently reproducible for the first time in this document's history. Deducted for two **undisclosed deletions** made by the rework: the template provenance line (`ISS-C3-01`) and the `REL-LIM-18` routing history in §7 (`ISS-C3-02`) — content removed with no note, in a document whose stated discipline is annotate-don't-delete. |
| B3 Traceability & IDs | 20 | 94 | 18.80 | Every `REL-LIM`, `FR`, `NFR`, `UT`, `DES`, `ADR`, commit SHA and report filename I checked resolves; the squash provenance now reconstructs to a matching diff; the cross-document pins are exact at review time. Deducted for `ISS-C3-04` (a merge date that contradicts the document's own changelog row) and the carried `ISS-L1`. |
| B4 Correctness & consistency | 15 | 85 | 12.75 | No false claim about the code, the commit, the tests, the word ban or the halt — I looked hard and did not find one. Deducted for `ISS-C3-03` (the section rewritten for exactness contradicts itself two paragraphs apart on its own row count) and for the ungrammatical, unclosed-parenthesis sentence in §7 (`ISS-C3-02`). |
| B5 Testability | 15 | 98 | 14.70 | The strongest part of this version. Every command the document quotes was executed by its author before publishing and reproduces its claim — I re-executed all of them and they do. The closure is evidenced, not asserted: named pins, named guards, a suite figure I reproduced exactly, and an explicit statement of what did **not** change. Halt exit criteria remain falsifiable and named. |
| B6 Convention compliance | 15 | 92 | 13.80 | ISO-8601 throughout; RFC 2119 correct; named-owner rule held; the 1.6.0 → **1.7.0** minor bump is the correct floor for a Medium-or-worse FAIL; `ISS-C2-07`'s wrapping fix verified. Deducted for the two duplicated lines and the dropped template header line (`ISS-C3-01`, `ISS-C3-02`). |
| **Total** | **100** | — | **92.35 → 92%** | — |

---

## 5. Issues (all severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| `ISS-C3-01` | **Medium** | B2 / B6 | **Header blockquote — the deleted line above line 34, and lines 108–109** | **`OP 2` violated the boundary rule at both ends, and both symptoms are in the file.** (a) Its FIND consumed three lines but its REPLACE re-emits only two: the line `` > **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2. `` is **silently deleted**. `grep -n "Based on:" docs/09-release-notes.md` now returns nothing, while Docs 01, 02, 03, 04, 05, 07, 08, 10, 11 and 12 all still carry theirs, and `docs/templates/09-release-notes.template.md:12` defines it. No document-history entry mentions the removal — in a document whose declared discipline is annotate-don't-delete. (b) Its REPLACE **ends with** `> **Document history — v1.6.0 (2026-09-06).** Rework cycle 2 against`, a line the FIND never consumed, so the applier correctly wrote it and the original survives beneath: **lines 108 and 109 are byte-identical**. The spec header calls this op "Pure insertion — the three consumed lines are re-emitted unchanged around it"; two of the three are. **Authoring, not applier:** the fault is in the spec's FIND/REPLACE boundaries, and the applier reproduced them faithfully. | Restore the `**Based on:**` line verbatim (or, if its removal is deliberate, say so in the v1.8.0 history and explain why Doc 09 alone drops the template provenance line). Delete one of lines 108/109. Then re-run an adjacent-duplicate scan over the whole file, not over the ops. |
| `ISS-C3-02` | **Medium** | B4 / B2 | **§7 sre release decision — line 1071 ("(routed"), and lines 1080–1081** | **`OP 11` made the same two boundary errors, and one of them broke a sentence in the release-decision section.** (a) Its FIND began at `2026-09-02, re-scoped from three sites to five the same day) came back **fixed** on 2026-09-05 and` and its REPLACE drops that line, so the document now reads: *"**`REL-LIM-18`, the five `FR-131`-violating code strings** (routed / is **no longer routed to the engineer**; this version closes its register row."* — an **unclosed parenthesis**, an ungrammatical clause, and the loss of two recorded facts (the three→five re-scope, and that the item *came back fixed on 2026-09-05*). This is the identical failure mode the v1.4.0 rework recorded as its `ISS-01`: "one FIND block stopped mid-sentence while its replacement re-emitted the sentence whole… the applier did what it was told". (b) Its REPLACE appends `**no longer routed to anyone**: it is closed (see the correction of record above).`, a line the FIND did not consume — **lines 1080 and 1081 are byte-identical**. **Authoring, not applier.** | Restore the routing sentence whole — e.g. *"**`REL-LIM-18`, the five `FR-131`-violating code strings** (routed to the engineer 2026-09-02, re-scoped from three sites to five the same day) came back **fixed** on 2026-09-05 and is no longer routed to the engineer…"* — and delete one of lines 1080/1081. Since this is the third version in this document's history damaged at an edit boundary, add the check to the publishing list explicitly: *for every op, the REPLACE must begin with the FIND's first line and end with the FIND's last line unless the change to that line is named in the op header.* |
| `ISS-C3-03` | **Medium** | B4 | **§Changelog preamble, line 920 — against the section's own closing paragraph, line 972** | The preamble says the tables *"list exactly those 14, oldest first, **plus three branch-side rows** that are labelled as such"*. The closing paragraph of the same section says *"The second table also carries **two branch-side rows** (`c04b4f2`, `31b6df9`), labelled as such and deliberately not in the 14"*. **Two is right**: the tables hold 16 rows — 14 on-`main` plus `c04b4f2` and `31b6df9`. "Three" matches nothing under any reading: branch-side **rows** = 2, branch-side **commits named in the section** = 4 (`c04b4f2`, `31b6df9`, `0a5c542`, `b6be070`), 5 counting `e039ff2`. The number is inherited from v1.6.0's *"plus three branch-side commits (`c04b4f2`, `31b6df9`, and `0a5c542` by reference)"* — which was true of *commits* then; `OP 6` rewrote the sentence to say *rows* and `OP 8` added a fourth branch-side commit, and the count was not re-tested at either op. **This is the document's signature class — a summary line contradicted by the records beneath it — authored in this version, in the paragraph rewritten for exactness, and self-contradicted 52 lines later.** Rule 2 of this version's own stated method targets exactly this. | Correct the preamble to **two branch-side rows**, or restate it as the closing paragraph does (2 labelled rows; `0a5c542` and `b6be070` by reference inside the `84e2203` row; `e039ff2` named but not tabled). Whichever wording is chosen, state the count in **one** place and have the other refer to it — this is the same "a fact stored twice drifts" lesson `ISS-C2-01` was closed on. |
| `ISS-C3-04` | Low | B3 | **Customer-facing bullet, line 670; `REL-LIM-18` register row, line 783 (twice)** | Three sites say the fix was *"merged to `main` … on 2026-09-05"* / *"(PR #19, 2026-09-05)"*. `0a5c542` and `b6be070` were **authored** 2026-09-05, but the squash commit on `main`, `84e2203`, is dated **2026-09-06** — which this document's own changelog row states. So PR #19 reached `main` on 2026-09-06, not 2026-09-05. The load-bearing facts (fixed, on `main`, at `84e2203`, verified at `HEAD`) are all true and the SHAs make it reproducible, so this is a one-day slip, not a false claim — but it is the same authored-vs-merged distinction this version spent four ops sharpening. Inherited text; no cycle-3 op touched these lines. | Say *"authored 2026-09-05, merged to `main` as `84e2203` on 2026-09-06"* at all three sites, or drop the date and cite the SHA. Non-gating. |
| `ISS-L1` | Low | B3 | v1.7.0 history; §7 owed-item 2 | **Carried, correctly disclosed, sixth cycle.** `REF-02` and `REF-04`…`REF-10` do not resolve — `docs/refine-log.md` is the unfilled template with **zero** `REF-` entries (verified). Stated in three places with the right reasoning. PM-accepted; owed by the sre at the next Operate cycle. | No action this cycle. Non-gating. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Notes on what I did *not* raise

- **The §0 volatile-snapshot restructure is fair, and I did not manufacture a Medium out of it.**
  The row states its durable claims first, dates the snapshot, tells the reader not to quote it
  forward, and names the command that re-derives it. Every figure in it is true at the moment of
  this review. That is the correct treatment of a fact that moves hourly.
- **The `REL-LIM-18` closure is not reopened**, and the two facts that must be stated together
  (blocker cleared **and** component still unmounted) are still stated together.
- **The honesty constraints hold.** Nothing is described as deployed; release 0.1.0 is HALTED
  everywhere the verdict appears; no affirmative banned word for v1 voting anywhere (`FR-131`,
  Doc 02 §4.45), including in every region v1.7.0 wrote.
- **The Doc 10/11/12 claim is accurate**, and I checked it two ways: zero files match
  `^(10|11|12)-` in `artifacts/reviews/`, and those three documents are outside the hook's ten, so
  the audit will never surface them — exactly as the row says.
- **The internal record's "Requirements delivered" row pins Doc 08 at v2.7.0 (Approved)** while the
  rest of the document pins v2.8.0 (In Review). Not raised: the row explicitly says *"Doc 08 v2.7.0
  (Approved) records"*, the figures are unchanged at v2.8.0, and the distinction between the last
  *approved* figure and the current one is drawn deliberately elsewhere in the same table.
- **No other transcription residue.** I scanned the whole file for leaked four-backtick fences,
  `FIND:`/`REPLACE WITH:` markers and adjacent duplicate lines, and compared all 12 ops' boundaries
  mechanically. Exactly two ops (2 and 11) are defective; the other ten are faithful and correct.

### Gate audit at review time

`node hooks/run_gates.cjs --audit` → **exit code 1**. Two documents block the review loop:
**Doc 07 v2.5.0** and **Doc 08 v2.8.0** (*report exists but fails the bar* — 92% and 85%, rework
owed by the tester; rework to v2.6.0 / v2.9.0 is in progress). Docs 01, 02, 03 (v2.13.0), 04
(v1.4.0), 05, 06, 13 and 14 all PASS for their current version. RTM: 138 Must rows, 16 COMPLETE,
122 OPEN; both signals agree; Gate-2 traceability criterion **NOT MET** (a Gate-2 readiness
condition, not a per-stop one). **Doc 09 is not one of the hook's ten documents**, so this exit code
is not a signal about Doc 09 and this report does not change it.

---

## 6. Routing instruction (to the owning role)

**FAIL — route to the sre (Chen Wei), the owning role, for rework cycle 4 of 5.**

Fix `ISS-C3-01`, `ISS-C3-02` and `ISS-C3-03`; `ISS-C3-04` is non-gating and should be folded in at
the same time; `ISS-L1` remains carried. Three Mediums make a **minor** bump the floor per the house
rule: produce **v1.8.0**, `Status: In Review`, and this loop re-reviews.

**Cycle 4 of 5 is the second-to-last.** If v1.8.0 does not clear the bar, cycle 5 is the cap and the
verdict becomes ESCALATED — a recorded human decision on the surviving issues. Four things to carry
into the rework:

1. **Do not touch the parts that are right.** The `REL-LIM-18` closure, the `FR-131` word ban (six
   versions clean), the HALTED / deployed-nowhere posture, the §0 durable-claims restructure and the
   now-reproducible changelog are all verified correct. None of them is in question, and none of the
   three Mediums requires editing any of them.
2. **The two Mediums that matter are mechanical, and neither is a judgement call.** Both are
   FIND/REPLACE boundary errors of the *same* shape, in the *same* spec: the REPLACE dropped the
   FIND's first line and appended a line the FIND never consumed. A one-line check catches both —
   *for every op, REPLACE[0] == FIND[0] and REPLACE[-1] == FIND[-1] unless the op header names the
   change to that line* — and I ran exactly that check over all 12 ops in about a minute. Add it to
   the spec's author self-check, above the "simulated applier" line. **The simulated applier passed
   these ops.** A clean apply proves the anchors matched; it proves nothing about whether the result
   reads correctly.
3. **Re-read the produced file, not the spec.** All four symptoms of `ISS-C3-01` and `ISS-C3-02` are
   visible to a plain read of `docs/09-release-notes.md` around lines 108, 1071 and 1080 — and to
   `grep -n "Based on:"`. The v1.7.0 method list checks *commands* and *headings*; add *the file*.
4. **`ISS-C3-03` is the class, one more time, and it is a two-word fix.** The section rewritten this
   version to be exactly checkable contradicts itself on its own row count. Apply the lesson
   `ISS-C2-01` was closed on: state the count once and let the other site refer to it.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle **3 of 5**.

---

## 8. Addendum — the audit snapshot in §5 went stale during this review (2026-09-06)

Recorded because it happened, and because this report raised three Mediums about exactly this class.

The audit figures in §5 were true when I ran them and are **already stale**. At the end of this
session `node hooks/run_gates.cjs --audit` still exits **1** and still reports **2 documents
blocking**, but for different versions and a different reason:

| At my §5 run | At the end of this session |
|---|---|
| Doc 07 **v2.5.0** — *report exists but fails the bar* (92%) | Doc 07 **v2.6.0** — *no report for this version* |
| Doc 08 **v2.8.0** — *report exists but fails the bar* (85%) | Doc 08 **v2.9.0** — *no report for this version* |

The tester's rework landed mid-session, exactly as Doc 09's own §0 row predicts ("a per-document pin
goes stale within hours in this repository"). **Nothing in §5 changes:** the durable conclusions —
exit code 1, two documents blocking, RTM 138 Must / 16 COMPLETE / 122 OPEN, Doc 09 outside the
hook's ten — all still hold, and none of the three Mediums or two Lows depends on the pins. Read the
§5 table as evidence of the moment it carries and re-derive with the command it names.

**This also vindicates the §0 restructure I declined to fault** (`ISS-C2-06` closure): a dated,
self-disclosing, command-reproducible snapshot is the right treatment for a fact that moves hourly,
and the proof is that mine went stale inside two hours while its durable claims did not.

**Not reviewed here, and not mine to review:** Doc 07 v2.6.0 and Doc 08 v2.9.0 are the tester's own
documents (owner of 07, author of 08). Author ≠ reviewer — they are routed to the project-manager
for a neutral reviewer, not cleared from this session.
