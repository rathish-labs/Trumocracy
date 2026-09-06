# Document Review Report — Doc 09 Release Notes v1.8.0 (business, cycle 4)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never edits
     the reviewed document. All rework is done by the owning role (sre, Chen Wei). -->

```
Reviewed document: 09-release-notes.md
Document version: 1.8.0
Review mode: business
Reviewer role: tester (neutral — sre Chen Wei owns Doc 09; PM-assigned)
Score: 94%
Critical: 0
High: 0
Medium: 2
Low: 2
Cycle: 4 of 5
Verdict: FAIL
```

Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (Doc 09 → business →
tester, new instance; sre / technical-writer / product-owner / engineer excluded — and, per the
assignment's **Incident** section, I reviewed **only** Doc 09 and self-appointed for nothing).
Review date **2026-09-06**. Predecessor report:
`artifacts/reviews/09-release-notes-v1.7.0-business-cycle3.md` (FAIL 92%, 0C/0H/3M/2L). Rework
spec: `artifacts/sre-2026-09-06T1900-doc09-cycle4-spec.md` (13 ops); sre note
`artifacts/sre-2026-09-06T1900-doc09-cycle4.md`.

---

## 1. Summary (BLUF)

I read `docs/09-release-notes.md` v1.8.0 end to end and re-derived every load-bearing claim at
`HEAD` = `84e2203`. **All three cycle-3 Mediums and the cycle-3 Low are genuinely closed at
source**, and the two that were transcription damage are closed completely: the template
`**Based on:**` provenance line is restored verbatim and matches
`docs/templates/09-release-notes.template.md:12`; §7's routing sentence is whole again with **both**
lost facts (the three→five re-scope, and that the item came back fixed); and both duplicated lines
are gone. **The transcription of this version is clean.** I checked it mechanically rather than by
eye: all 13 ops parse, every `REPLACE` block appears in the produced file **exactly once**, every
`FIND` is consumed, and a whole-file scan finds **no** adjacent duplicates, **no** non-adjacent
duplicate long lines that are not deliberate, **no** leaked four-backtick fences or
`FIND:`/`REPLACE WITH:` markers, and no trailing whitespace. The builder's new boundary rule worked.

Everything the assignment told me not to let regress holds. `REL-LIM-18`'s closure is intact and
unweakened; the `FR-131` word ban is clean for a **seventh** consecutive version (27 lines
inspected — every occurrence negated, quoted as code, historical, or scoped to the contract skeleton
or Definition-B v2); the verdict is **HALTED** in ten places and the fix is "**merged to trunk and
deployed nowhere**" in eight; nothing anywhere is described as deployed. I re-ran the full suite
myself: **95 + 151 + 244 + 18 + 16 + 95 = 619 passed, `npm test` exit 0**. I re-derived the
changelog record: `git log --no-merges --oneline HEAD -- packages apps` returns exactly **14**
commits and the two tables list exactly those 14 (nine + five) plus two labelled branch-side rows;
I re-confirmed ancestry on all 19 cited SHAs. Every cross-document pin in the document is **true at
the moment of this review**.

**The verdict is FAIL on two Mediums, and both are the document's signature class — a summary
sentence asserting something the records beneath it do not bear out.** First, §0's volatile
snapshot states the audit's exit code **twice, contradicting itself**: it is introduced as
"re-derived … by `node hooks/run_gates.cjs --audit` **(exit 1)**" and then closes "The audit exits
**0**." I ran it: **exit 0, 0 documents blocking**. The `(exit 1)` is a stale fragment the rework's
own `OP 6` carried through while rewriting the same sentence from "2 documents blocking" to "0" —
the one op whose declared purpose was currency. Second, the **structural change this version is
built around is claimed more broadly than it was made**: "§0's volatile snapshot is now the
**single** place in this document where another document's current version is pinned … §0's other
precondition rows, the internal record, the §Links table and §7 now carry only **durable** facts".
It is true for Docs 07 and 08, which were the sites that drifted — and false for Docs 06 and 14,
whose current versions and live `Status:` values are pinned in §0's own precondition rows **and**
in the §Links table **and** in the snapshot, with no pointer and no dated qualifier at any of them.
The document adopts the rule "a fact stored twice drifts" in the row above and breaks it four rows
below.

**Neither Medium is a false claim about the code, the commit, the tests, the word ban, the halt or
the release verdict.** I looked hard for one and did not find it. Both are internal
self-contradictions in §0 — which is the section headed "read this before acting on this document",
and the section whose restructure is this version's headline.

**The §0 dated snapshot itself is not a finding, and I did not manufacture one from it.** It leads
with three durable claims, carries an as-of date, tells the reader not to quote it forward, and
names the command that re-derives it. Every figure in it is exact at review time. That is the
correct treatment of a fact that moves hourly — my own cycle-3 addendum went stale inside two hours
and is cited in this version for exactly that reason. The finding is the wrong exit code inside it
and the overbroad claim about its uniqueness, not the snapshot.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

---

## 3. Cycle-3 issue closure

| Cycle-3 ID | Severity | Subject | Status at v1.8.0 | Evidence |
|---|---|---|---|---|
| `ISS-C3-01` | Medium | `OP 2` boundary error — template `**Based on:**` line silently deleted; `Document history — v1.6.0` line duplicated | **CLOSED — both halves** | (a) Line 35 now reads verbatim `> **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2.` — byte-identical to `docs/templates/09-release-notes.template.md:12`, restored to its original position immediately above the "Customer-facing section" line. `grep -n "Based on:"` returns it (the other two hits are the v1.8.0 history describing the repair and the `grep` command it recommends). (b) `grep -n "Document history — v1.6.0"` returns **one** header, at line 179; the earlier hit at 55 is the history entry quoting the duplicate it deleted. Whole-file adjacent-duplicate scan: **zero** hits. The deletion is also disclosed in the v1.8.0 history rather than repaired silently — the annotate-don't-delete discipline the finding invoked. |
| `ISS-C3-02` | Medium | `OP 11` boundary error — §7 routing sentence truncated to "(routed"; `no longer routed to anyone` line duplicated | **CLOSED — both halves, with both lost facts recovered** | (a) Line 1147 now reads: *"**`REL-LIM-18`, the five `FR-131`-violating code strings** (routed to the engineer 2026-09-02, re-scoped from three sites to five the same day) came back **fixed** — the work authored 2026-09-05 as `0a5c542`, landing on `main` as `84e2203` on 2026-09-06 — and it is **no longer routed to the engineer**…"* Parenthesis closed, sentence grammatical, **both** recorded facts restored (the three→five re-scope; that it came back fixed), and the `ISS-C3-04` authored-versus-merged dates folded in. `grep -n "(routed"` returns no fragment. (b) `grep -n "no longer routed"` returns one occurrence of each phrasing — line 1150 ("to the engineer") and line 1158 ("to anyone"); the duplicate is gone. |
| `ISS-C3-03` | Medium | §Changelog preamble said "three branch-side rows"; the section's closing paragraph said "two" | **CLOSED — by the stronger remedy, deletion rather than correction** | The preamble (line 991) no longer states a count: *"…plus the branch-side rows that are labelled as such and are **counted and enumerated once**, in the 'Scope of the record' paragraph that closes this section."* The count lives in exactly one place, line 1044: *"The second table also carries **two branch-side rows** (`c04b4f2`, `31b6df9`), labelled as such and deliberately not in the 14."* I counted the tables: 9 + 7 = **16 rows**, 14 on-`main` + `c04b4f2` + `31b6df9`. Two is right. The preamble still *names* the branch-side commits (`c04b4f2`, `31b6df9`, `e039ff2`, `0a5c542`, `b6be070`) without counting rows — no contradiction. |
| `ISS-C3-04` | Low | Three sites said the fix was "merged to `main` … on 2026-09-05" | **CLOSED at all three** | Customer-facing bullet (742): *"authored 2026-09-05, merged to `main` as `84e2203` on 2026-09-06"*. `REL-LIM-18` register row, both date sites (854): *"authored 2026-09-05 and merged to `main` as `84e2203` on 2026-09-06 in PR #19"* and *"(PR #19; authored 2026-09-05, on `main` as `84e2203` 2026-09-06)"*. Re-derived: `0a5c542` and `b6be070` authored **2026-09-05**, not ancestors of `main`; `84e2203` authored and committed **2026-09-06**, single parent `1c589c8`. §7 (1149) states the same distinction. The internal record's Security cell (981) cites the SHA `0a5c542` with its own correct date and makes no merge claim — accurate. |
| `ISS-L1` | Low | `REF-02`, `REF-04`…`REF-10` do not resolve | **CARRIED (seventh cycle), correctly disclosed** | `docs/refine-log.md` is still the unfilled template — `grep -c "REF-0"` = **0**. Disclosed in the header `Status:`, the v1.8.0 history and §7 owed-item 2, with the right reasoning (no `REF-##` was opened for `REL-LIM-18`; it was a pre-release honesty defect caught by document review, not a production signal). PM-accepted; non-gating; still owed by the sre. |

### Transcription check (residue is a finding — this version has none)

I verified the 13 ops mechanically against the produced file rather than trusting the spec's
self-check:

| Check | Result |
|---|---|
| Ops parsed from `sre-2026-09-06T1900-doc09-cycle4-spec.md` | **13**, all with well-formed `FIND:`/`REPLACE WITH:` four-backtick blocks |
| Every op's `REPLACE` present in the file | **exactly once** for all 13 |
| Every op's `FIND` consumed | yes — absent for the 11 rewrite ops; present once for `OP 2` and `OP 4`, which are pure insertions whose `FIND` is a subset of their `REPLACE` |
| Lines dropped by a `FIND`→`REPLACE` that the op did **not** declare | **none** — every "lost" line belongs to an op whose intent line declares the rewrite (`OP 1` version block, `OP 5`/`6`/`7`/`8`/`9`/`10`/`11`/`12`/`13`) |
| Adjacent duplicate lines, whole file | **0** |
| Non-adjacent duplicate long lines | only the three deliberate "The release verdict is unchanged: HALTED…" closers, one per history entry — by design |
| Leaked `` ```` `` fences, `FIND:` / `REPLACE WITH:` markers | **0** |
| Trailing whitespace | **0** |

The builder's rules 1–3 worked. **The two Mediums below are authoring, not transcription** — the
spec asked for the text that is in the file.

### Independently re-verified and NOT regressed

| Claim in Doc 09 | Verification at review time (2026-09-06) | Result |
|---|---|---|
| `HEAD` = `84e2203`, single parent `1c589c8`, squash not merge | `git rev-parse HEAD`; `git rev-list --parents -n 1 84e2203` → one parent | ✓ |
| The record is the 14 non-merge commits on `main` touching `packages`/`apps` | `git log --no-merges --oneline HEAD -- packages apps` = **14**; table 1 = 9 rows, table 2 = 5 on-`main` rows + 2 labelled branch-side | ✓ exact |
| Ancestry of every cited SHA | `git merge-base --is-ancestor` on all 19: `c04b4f2`, `31b6df9`, `0a5c542`, `b6be070`, `e039ff2` **not** on `main`; the other 14 are | ✓ |
| `84e2203` carries **both** of PR #19's branch commits | `git show --stat 84e2203`: `.gitignore` +3 and `apps/web/tsconfig.tsbuildinfo` −1 (i.e. `b6be070`) alongside the five `FR-131` sites and the three guards (`0a5c542`) | ✓ |
| "619 tests, `npm test` exit 0" | I re-ran it: contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95 = **619 passed**, exit **0** | ✓ exact |
| Doc 07 is the source of that figure | `docs/07-test-cases-suites.md` v2.6.0 records run **R-17**, 619/619, exit 0, same package split | ✓ |
| `FR-131` word ban across the document | All 27 lines carrying private / anonymous / anonymity / receipt-free / secure inspected — every one negated, quoted as code, historical, or scoped to the contract skeleton / Definition-B (v2). Nothing affirmative about v1 voting, including in the regions v1.8.0 wrote | ✓ **seventh consecutive version** |
| `REL-LIM-18` closure not regressed | Register row, customer bullet, internal record and §7 all still state the closure **and** that the component is still unmounted, together; the pre-fix row text is still kept verbatim inside the closed row | ✓ |
| HALTED; Gate 2 not approved; deployed nowhere | "HALTED" ×10, "deployed nowhere" ×8; no occurrence of "deployed"/"in production" that asserts a deployment (the two hits are `fork` **OFF** in production, and "MUST NOT be promoted to production") | ✓ |
| Cross-document pins | `head` of each: 02 **v2.16.3 Approved**, 03 **v2.13.0 Approved** (cycle 2 PASS 97%), 04 **v1.4.0 Approved** (PASS 96%), 06 **v2.5.1 Approved**, 07 **v2.6.0 Approved** (cycle 2 PASS 97%), 08 **v2.9.0 Approved** (cycle 2 PASS 98%), 14 **v2.3.0 Approved** | ✓ all exact |
| Docs 10/11/12 carry no report at all | `ls artifacts/reviews \| grep -cE "^(10\|11\|12)-"` = **0**; and those three are outside the hook's ten, so no audit run surfaces them — exactly as §0 says | ✓ |
| RTM figures: 138 Must, 16 COMPLETE, 122 OPEN; `FR-131` OPEN | `node hooks/run_gates.cjs --audit` — both independent signals agree; Doc 08 v2.9.0 carries the `FR-131` OPEN ruling | ✓ |
| §7 owed-item 1 (Doc 10/11 cascade still owed) | `docs/10-deployment-runbook.md:374-380` and `docs/11-operations-runbook.md:279-282` still publish the withdrawn `REL-LIM-03` claim, citing Doc 09 | ✓ honestly owed |
| The cycle-3 reviewer's addendum "went stale inside two hours" | `artifacts/reviews/09-release-notes-v1.7.0-business-cycle3.md:210-228` — the addendum exists and says exactly that | ✓ fairly cited |

---

## 4. Per-criterion scores (business rubric)

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 96 | 19.20 | The release verdict (**HALTED**, Gate 2 not approved) is unmissable and never softened; "closing a blocker ≠ lifting the halt" is stated in four places; §0's precondition stays **Not met** and now rests on durable claim (c), which cannot go stale. §7's release-decision prose, damaged at cycle 3, reads correctly again. Deducted only because both Mediums sit inside §0 — the section headed "read this before acting on this document". |
| B2 Completeness | 15 | 95 | 14.25 | All sections present, no placeholders (unfilled figures are explicit `N/A — not yet measured`), the deleted template provenance line restored, and the §7 routing history recovered whole with both facts. The `ISS-C3-03` remedy deletes a duplicated count but records the deletion — annotate-don't-delete honoured. Deducted for the unreconciled stale parenthetical left inside the §0 row (`ISS-C4-01`). |
| B3 Traceability & IDs | 20 | 92 | 18.40 | Every `REL-LIM`, `FR`, `NFR`, `UT`, `DES`, `ADR`, commit SHA, report filename and cross-document pin I checked resolves and is exact **at this moment**; the authored-versus-merged distinction is now right at all three sites; the 14-commit record re-derives exactly and ancestry re-confirms on all 19 SHAs. Deducted for `ISS-C4-02` — Docs 06 and 14 are still pinned at three or four sites each with no pointer, which is the structural precondition for `ISS-02` / `ISS-C2-01` (the same document asserting two current versions of another) to recur — and for the carried `ISS-L1`. |
| B4 Correctness & consistency | 15 | 84 | 12.60 | No false claim about the code, the commit, the tests, the word ban, the halt or the release verdict — I looked hard and did not find one, and I reproduced every figure. Deducted for the two internal contradictions: an exit code stated as 1 and as 0 in the same table cell (`ISS-C4-01`), and a "single place / only durable facts" claim falsified four rows away in the same section (`ISS-C4-02`). Both are the document's signature class, both authored in this version. |
| B5 Testability | 15 | 96 | 14.40 | Still the strongest part. Every command the document quotes was executed by its author before publishing and I re-executed all of them: the 14-commit log, the `Based on:` grep, the `^(10\|11\|12)-` review-report count, the audit, and the suite — **619 green, exit 0**, reproduced package by package. The closure is evidenced, not asserted, and the halt's exit criteria stay falsifiable and named. Deducted because one quoted command's own reported exit code is wrong (`ISS-C4-01`) — the single check this version's method most insists on. |
| B6 Convention compliance | 15 | 98 | 14.70 | ISO-8601 throughout; RFC 2119 correct; named-owner rule held; 1.7.0 → **1.8.0** is the correct minor floor for a three-Medium FAIL; the header `Status:` states the loop position and the cycle-5 cap accurately and disclaims that any PASS here is a Gate-2 sign-off. **Transcription is clean** — all 13 ops verified mechanically, zero residue of any kind, and the restored template line is byte-identical to the template. Deducted 2 for the stale parenthetical's survival through a declared-currency op. |
| **Total** | **100** | — | **93.55 → 94%** | — |

---

## 5. Issues (all severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| `ISS-C4-01` | **Medium** | B4 / B5 | **§0, `Passing document-review reports` row — line 492, the volatile snapshot** | **The row states the audit's exit code twice, and the two disagree.** It reads: *"As re-derived on **2026-09-06** by `node hooks/run_gates.cjs --audit` **(exit 1)**: **0 documents blocking** — every one of the hook's ten governed documents now carries a passing report… **The audit exits 0.**"* I ran the command at review time: **exit code 0**, `Documents blocking the review loop: 0`, all ten PASS. So `(exit 1)` is **false**, and it is contradicted by its own sentence 60 words later. This is not inherited drift that slipped past a sweep — `OP 6`'s `FIND` block carries `(exit 1):* **2 documents blocking**` and its `REPLACE` carries `(exit 1):* **0 documents blocking**`: the op rewrote the count and appended "The audit exits **0**" while leaving the parenthetical it falsified. `OP 6`'s declared purpose is *"re-derived … immediately before publishing"*, and rule 1 of this document's own stated method is *"execute every command this document quotes and confirm the output matches the claim attached to it"*. Exit code 1 and "0 documents blocking" cannot both be outputs of one run: with zero blocking documents the hook exits 0. **Impact is contained** — the row's verdict (**Not met**) rests on durable claim (c), Docs 10–12 having no report at all, which I verified and which is unaffected; no other figure in the snapshot is wrong. But it is a false quoted result inside the Gate-2 precondition table, in the row this version elevated to the document's single authoritative pin. | Delete `(exit 1)` or replace it with `(exit 0)`, so the parenthetical and the closing sentence state one exit code. Re-derive at publication rather than editing the count in place: the sentence should carry **one** as-of date, **one** command and **one** exit code. Consider stating the exit code only once, in the closing sentence — the same "state it in exactly one place" remedy `ISS-C3-03` and `ISS-C2-01` were closed on. |
| `ISS-C4-02` | **Medium** | B4 / B3 | **v1.8.0 history, lines 92–99 ("One structural change…"), restated in §0 line 492 — against §0 lines 486, 487 and §Links lines 1072, 1079** | **The structural change is claimed more broadly than it was made, and the document falsifies the claim four rows below it.** The history says: *"§0's volatile snapshot is now the **single** place in this document where another document's current version is pinned. §0's other precondition rows, the internal record, the §Links table and §7 now carry only **durable** facts — last-approved versions, and figures that do not move — and refer to the snapshot for anything that does. Five sites that could drift apart became one that cannot."* §0 line 492 restates it: *"§0's other rows, the internal record, the §Links table and §7 all state durable facts and refer here, so the pin cannot drift out of sync with itself."* **True for Docs 07 and 08** — those five sites (§0 ×2, internal record, §Links ×2, §7) were rewritten, each states an "Approved at vN as of <date>" durable fact and each explicitly points at the snapshot. I checked all of them; that half of the work is done well. **False for Docs 06 and 14**, which are equally another document's current version: §0's `Coding & UT record (Doc 06)` row (486) says *"present at **v2.5.1, `Status: Approved`**"*, §0's `User Guide published (Doc 14)` row (487) says *"present at **v2.3.0, `Status: Approved`**"*, §Links (1072) says *"`docs/06-coding-and-ut.md` (v2.5.1, Approved)"* and (1079) *"`docs/14-user-guide.md` (v2.3.0, Approved…)"*. **None of the four carries a date, a durable "Approved at" framing, or a pointer to the snapshot** — and the snapshot itself pins `06 (v2.5.1)` and `14 (v2.3.0)`, so each fact is stored three times inside the document, plus a fourth in the header `Source:` block (lines 23–24). "Present at v2.5.1, `Status: Approved`" is a live-state assertion about another document's header, not a durable fact: Doc 06 is the code-drop document with open §7 items and will move. This is the precondition for `ISS-02` and `ISS-C2-01` — *the same document asserting two current versions of another* — to recur, in a version whose §0 row justifies its own restraint with *"because a fact stored twice drifts"*. **No pin is wrong today; I verified all four are exact.** The defect is the absolute claim, authored this version, and the fact that the stated remedy does not cover the sites the claim enumerates. | Either (a) narrow the claim to what was done — *"§0's snapshot is the single place **Doc 07's and Doc 08's** current versions are pinned"* — and say plainly that Docs 06 and 14 are still pinned in more than one place; or (b) extend the remedy: give §0's Doc 06 and Doc 14 rows and the two §Links rows the same treatment the Doc 07/08 rows got — the durable dated fact (*"Approved at v2.5.1 on 2026-09-06"*) plus *"current version and review state are pinned once, in §0's dated volatile snapshot"*. Whichever is chosen, the claim in the v1.8.0 history and the claim in §0 line 492 must say the same thing, and it must be checkable by reading §0 and §Links. |
| `ISS-C4-03` | Low | B2 | **Internal release record, `Document version` cell — line 967** | The cell is labelled *"**Review-loop history** (closed facts, append-only)"* and every entry but the last carries its verdict: *"…v1.5.0 … **FAIL 93%** cycle 1 · v1.6.0 rework cycle 2, 2026-09-06, **FAIL 93%** cycle 2 · v1.7.0 rework cycle 3, 2026-09-06"*. **v1.7.0's verdict — FAIL 92%, cycle 3 — became a closed fact the moment the cycle-3 report was written**, and this whole version is the rework against it, yet the list stops without it and does not open a v1.8.0 entry. An append-only register of closed facts that is one closed fact behind is a small completeness gap, not a false statement: the verdict appears correctly in the header `Status:` block and twice in the v1.8.0 history, so no reader is misled. No cycle-4 op touched this cell. | Append *"**FAIL 92%** cycle 3"* to the v1.7.0 entry (and, at the next version, the v1.8.0 entry with its verdict), so the cell's own "closed facts, append-only" description holds. Non-gating. |
| `ISS-L1` | Low | B3 | Header `Status:`; v1.8.0 history; §7 owed-item 2 | **Carried, correctly disclosed, seventh cycle.** `REF-02` and `REF-04`…`REF-10` do not resolve — `docs/refine-log.md` is the unfilled template with **zero** `REF-` entries (verified). Stated in three places with the right reasoning: no `REF-##` was opened for `REL-LIM-18` because it was a pre-release honesty defect caught by document review, not a production signal, and the refine-log registers production learnings only. PM-accepted; owed by the sre at the next Operate cycle. | No action this cycle. Non-gating. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Notes on what I did *not* raise

- **The §0 dated snapshot is fair practice and I did not manufacture a Medium out of it.** It leads
  with durable claims, dates itself, tells the reader to re-derive and never quote it forward, and
  names the command. Every figure in it is exact at review time. `ISS-C4-01` faults the wrong exit
  code printed inside it and `ISS-C4-02` faults the claim of uniqueness made about it — not the
  snapshot pattern, which is the right answer to a fact that moves hourly.
- **The `REL-LIM-18` closure is not reopened**, and the two facts that must be stated together
  (blocker cleared **and** component still unmounted) are still stated together, in the register
  row and in §7.
- **The honesty constraints hold.** Nothing is described as deployed; release 0.1.0 is HALTED
  everywhere the verdict appears; no affirmative banned word for v1 voting anywhere (`FR-131`,
  Doc 02 §4.45), including in every region v1.8.0 wrote.
- **The internal record's `Requirements delivered` row cites Doc 08 at v2.7.0 (Approved).** Not
  raised, for the same reason the cycle-3 report gave: the row explicitly frames it as what the
  **v2.7.0** matrix records, the figures are unchanged through v2.9.0, and the distinction between
  the last-approved figure and the current one is drawn deliberately elsewhere in the same table.
  That is a durable historical citation, not a current-version pin.
- **The "seventh cycle" count for `ISS-L1`** increments the convention the cycle-3 report accepted
  at "sixth". The count is inherently soft; it is disclosed, PM-accepted and non-gating. Not raised.
- **`ISS-C3-03`'s remedy did not create a new contradiction.** The preamble still *names* five
  branch-side commits without counting rows; the single row count lives in "Scope of the record"
  and is right. I counted the tables to confirm.

### Gate audit at review time

`node hooks/run_gates.cjs --audit` → **exit code 0**. **0 documents blocking** the review loop —
all ten governed documents carry a passing report for their current version: 01 v2.0.0, 02 v2.16.3,
03 v2.13.0, 04 v1.4.0, 05 v2.5.0, 06 v2.5.1, 07 v2.6.0, 08 v2.9.0, 13 v2.8.1, 14 v2.3.0. RTM: 138
Must rows, **16 COMPLETE, 122 OPEN**; both independent signals agree; **Gate-2 traceability
criterion NOT MET** (a Gate-2 readiness condition, not a per-stop or merge condition — rulings
2026-08-25 and 2026-08-30; certify with `node hooks/run_gates.cjs --gate2`). **Doc 09 is not one of
the hook's ten documents**, so this exit code is not a signal about Doc 09 and this report does not
change it.

---

## 6. Routing instruction (to the owning role)

**FAIL — route to the sre (Chen Wei), the owning role, for rework cycle 5 of 5.**

Fix `ISS-C4-01` and `ISS-C4-02`; `ISS-C4-03` is non-gating and should be folded in at the same
time; `ISS-L1` remains carried. Two Mediums make a **minor** bump the floor per the house rule:
produce **v1.9.0**, `Status: In Review`, and this loop re-reviews.

**Cycle 5 is the cap.** If v1.9.0 does not clear the bar, the verdict becomes **ESCALATED** and the
document requires a **recorded human decision** (approve-as-is / rework / reject) on the surviving
issues, presented by the project-manager. Four things to carry into the rework:

1. **Do not touch the parts that are right, and there are now a lot of them.** The `REL-LIM-18`
   closure, the `FR-131` word ban (seven versions clean), the HALTED / deployed-nowhere posture,
   §0's durable-claims restructure, the reproducible changelog, the restored template line, the
   repaired §7 routing sentence and the Doc 07/Doc 08 pin-once treatment are all verified correct.
   None of them is in question, and neither Medium requires editing any of them.
2. **Both Mediums are small, located and mechanical — neither is a judgement call.**
   `ISS-C4-01` is one parenthetical in one cell. `ISS-C4-02` is either one narrowed sentence (say
   "Doc 07's and Doc 08's") or four rows given the treatment two other rows already have. Between
   them they touch at most six lines. **Nothing else in the document is asked to change.**
3. **The boundary discipline worked — keep it, and add one line to it.** The transcription of
   v1.8.0 is clean: I checked all 13 ops mechanically and found no residue of any kind. The rule
   that failed this time is the *content* rule, not the boundary rule: when an op rewrites a
   sentence for currency, **re-read the whole sentence, including its parentheticals**, not just
   the figure being changed. `ISS-C4-01` lives entirely inside a parenthetical that `OP 6` copied
   through while changing the number 30 characters to its right.
4. **`ISS-C4-02` is the "state it once" lesson applied to only half its scope.** Docs 07 and 08 got
   the remedy because they were the ones that drifted this week; Docs 06 and 14 did not, and the
   claim was written as though they had. The cheapest close is to narrow the claim to what was
   actually done — an accurate narrow claim beats an aspirational broad one, and this document's
   whole failing history is broad claims the records beneath them do not support.
