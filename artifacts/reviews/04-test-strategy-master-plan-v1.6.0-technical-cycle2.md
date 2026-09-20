# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.6.0 (technical, cycle 2)

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it never
> edits the reviewed document. All rework is the **owning role's** (architect, Ravi Deshmukh).

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.6.0
Review mode: technical
Reviewer role: reviewer-qa (Rafael Duarte) — neutral, PM-assigned per artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**PASS at 96%, zero Critical/High/Medium.** The cycle-1 Medium is closed, and closed at the root
rather than at the symptom: §14's `TC`-range register is reconciled against **Doc 07 v2.6.0 §2**
across all four affected rows plus its three echoes, the ids Doc 07 owns are recorded where they
actually live, the `TS-V1-*` reservation is narrowed to the band that is genuinely free
(**TC-3570–TC-3699**), and — the part that makes this a systemic fix rather than a patch — §14 gains a
**standing instruction** that any future version advancing the Doc 07 pin MUST re-read the table
against Doc 07 §2 in the same touch. That instruction is aimed squarely at the failure mode that
produced the Medium, and it will fire on the very next Doc 07 re-pin.

All five Lows are closed too, several at more locations than I named. The 21 OPs applied verbatim
and exactly once with **zero transcription residue**, and an independent coverage check confirms **no
edit outside the spec**: of 29 `v1.6.0` strings in the file, 27 sit inside an OP replacement and the
2 that do not are pre-existing references to *Doc 09's* v1.6.0, not edits. The clause-(e) substance I
instructed must not be re-opened is **byte-identical** — S5's four rules, S4's widened criterion and
its (a)–(d) notice range, and `OPEN-27`'s route-don't-rule disposition all stand as written.

Three Lows remain, all currency-or-disclosure and none changing a conclusion: the Doc 06 pin reads
"In Review" where HEAD now says Approved (a status that flipped after the spec was written); §14's
disclosure that the TC-3570 floor is being drawn on stops one clause short of naming the suite doing
the drawing; and one self-description sentence is a shade broader than what the operation did. Lows
do not block the bar. **The document advances; the architect sets `Status: Approved`.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — both rows are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Clause (e) coverage carries forward intact (S4 criterion, S5's four rules, the verification path, the satisfying pattern, the out-of-scope enrolment class). Improved: S4's note now points the tester at **Doc 02 v2.17.1 §8 Scenarios 8 and 9** as the Gherkin the owed rows trace to, rather than leaving them to paraphrase §4.45 — both scenarios verified present in Doc 02 (lines 2505, 2515). |
| T2 Soundness | 20 | 97 | 19.4 | ISS-04's disposal is now complete: **all four** Doc 03 re-open triggers are disposed of by name, and (iv) on the evidence standard it actually sets ("shows"), correctly distinguishing a review that *raises* a question from one that *shows* a reading. ISS-05's fix is exactly right — "the counts differ because the scopes differ; neither may be applied outside its own section." Methodologically, reconciling against the last **Approved** Doc 07 while disclosing the in-flight movement is the correct standard for a document whose sources pass through a review loop. Small deduction: "does not pin a number it cannot see" is imprecise (see ISS-08). |
| T3 Traceability & IDs | 20 | 93 | 18.6 | The cycle-1 Medium is closed at all four §14 rows and all three echoes, verified line by line against Doc 07 v2.6.0 §2 (rows 597/612/617) including the case counts (16 / 47 / 20-17-3). No `TC` minted, none renumbered or reused; `OPEN-27` remains the high-water mark; every change annotated rather than deleted. Deductions: the Doc 06 pin is stale at HEAD (ISS-07) and the free-band disclosure does not name the suite consuming it (ISS-08). |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged and intact: S5 stays **build-failing**, the claims test still catches strings containing none of the five words, the carve-outs stay bounded at exactly two and keyed to named strings, and the `anon` carve-out now stands on a complete four-trigger analysis rather than a one-trigger one — a strictly stronger safety argument than v1.5.0's. |
| T5 Completeness & testability | 15 | 97 | 14.55 | `UT-0889` is correctly re-stated as landed and green with named, dated, independently-executed evidence, and the discipline that produced the original under-claim is preserved in terms ("this plan upgrades no test status it has not seen pass"). The owed `TC` re-cut still names owner, target versions and story, and FR-131's Doc 08 Must row is still honestly left **OPEN**. |
| T6 Convention compliance | 10 | 94 | 9.4 | Annotate-don't-delete applied consistently at every one of the ~15 changed sites; ISO-8601 dates; named individual owners; the 15-column header gutter preserved; the changelog correctly stacked v1.6.0 → v1.5.0 → v1.4.0 → v1.3.0 → v1.2.0 with every prior entry intact; §1.4 re-wrapped as asked. Deduction for the self-description in ISS-09. |
| **Total** | **100** | — | **96.25% → 96%** | — |

## 4. Cycle-1 findings — closure verification (each checked at every location I named)

| Cycle-1 ID | Sev | Verdict | Evidence |
|---|---|---|---|
| **ISS-01** | Medium | **CLOSED** | Four §14 rows re-cut against Doc 07 v2.6.0 §2: `TS-ADV-01…16` records **TC-3564–TC-3567** (mapping UT-0887, 47 cases), `TS-SCAFFOLD` **TC-3568** (UT-0759, 20/17/3), `TS-ABSENCE` **TC-3569** (UT-0888, 16 cases, and `FR-131` closing sentence added to its Covers cell to match Doc 07), `TS-V1-*` narrowed to **TC-3570–TC-3699** with "none minted" corrected to the accurate "none of **these six suites** has minted an id". All three echoes fixed — §0.4 (line 702), the v1.1.0 changelog entry (line 531), Downstream (line 2694). Every count I re-verified against Doc 07 v2.6.0 §2 rows 597/612/617 matches. Plus a **standing instruction** at §14: any version advancing the Doc 07 pin MUST re-read this table against Doc 07 §2 in the same touch. |
| **ISS-02** | Low | **CLOSED** | `OPEN-20` narrowed at all three locations (§0.4 note line 694, §13 row 2352, Downstream 2700) to the surviving `TS-PROPOSALS` half, with the `TS-SCAFFOLD` half recorded as resolved at Doc 07 v2.6.0. **Correctly left open and still listed in the Definition-A Gate-2 blocker bullet** (line 2320), per my explicit instruction not to close it. |
| **ISS-03** | Low | **CLOSED** | All three "owed-and-in-progress, not green" mentions re-stated as landed and green (`Source:` line 200, §0.5 S4 note line 795, Downstream) with the evidence attributed — "25/25 pass, executed independently by the cycle-1 reviewer on 2026-09-06". Every surviving occurrence of the old phrase is inside a v1.6.0 annotation quoting the superseded wording, which is the house convention, not a miss. |
| **ISS-04** | Low | **CLOSED** | Trigger **(iv)** disposed of by name in **both** places (§0.5 S5 annotation line 908; `OPEN-27` body line 2359), on (iv)'s own "shows" standard, correctly reasoning that the 2026-09-06 ruling examined landing-page copy and the FR-082 strings and took no evidence about the badge — it raises the question without showing the reading. Triggers (i) and (ii) also disposed of, so the conclusion now reads "**None of the four triggers has fired**". |
| **ISS-05** | Low | **CLOSED** | S4 now states its scope before its count ("**Within S4's scope** — the DES-098 notice and v1 voting surfaces, where the DES-094 `anon` badge does not render — the word ban carries **exactly one carve-out**"), points at S5's second exception, and closes with the rule that settles it: "The counts differ because the scopes differ; neither may be applied outside its own section." Neither count changed. |
| **ISS-06** | Low | **CLOSED** | §1.4 re-wrapped to the surrounding measure. Word-level diff of OP 18 confirms the only token changes are the two declared re-pins plus the added §8 Scenarios citation (ISS-09); no citation was *removed* and no other word moved. |

## 5. Transcription and integrity checks (mechanical)

1. **All 21 OPs applied verbatim, exactly once.** Every `REPLACE WITH` block occurs in the file with
   count 1. The `FIND` text survives only for OP 4, whose replacement deliberately contains it
   (append pattern). **Zero residue** — no `FIND:` / `REPLACE WITH:` markers, no four-backtick
   fences (the file holds exactly two fenced blocks, both pre-existing), no duplicated or truncated
   lines.
2. **No edit outside the spec.** Coverage check: of the 29 occurrences of `v1.6.0` in the file, **27
   fall inside an OP replacement**; the 2 that do not (lines 224, 438) are pre-existing text about
   **Doc 09's** v1.6.0 release-notes loop — a coincidental string match, not an edit.
3. **OP 18 (the re-wrap) — no word lost.** Word-level diff: 6 tokens removed, 12 added, and every one
   is accounted for by the two declared re-pins (Doc 02 v2.17.0 → v2.17.1; Doc 06 "v2.6.0 in flight"
   → "v2.7.0 In Review") plus the added "and its §8 Scenarios 8 and 9". No citation removed, no
   content dropped by the re-flow.
4. **OP 20 (the wrapped-sentence anchor) — nothing else moved.** Word-level diff removes exactly four
   tokens — the superseded pin phrase "**v2.17.0**, In Review 2026-09-06;" — and adds only the new
   pin and its annotation. The load-bearing comma problem recorded in the architect's note §8 is
   correctly resolved: the wrapped sentence is re-emitted whole and unaltered.
5. **OP 19 (the 2,174-character §22 table row) — the v1.5.0 body survives in full.** Word-level diff
   removes 5 tokens, all of which reappear; spot-checks confirm the whole v1.5.0 narrative is folded
   into `_(Row history: …)_` ahead of the v1.4.0 → v1.0.0 history, with a minimal grammatical bridge
   ("Not a rework cycle — a **requirement cascade**" → "It was not a rework cycle but a **requirement
   cascade**"). Nothing dropped; the row is not split.
6. **Changelog intact and correctly stacked:** v1.6.0 (line 228) → v1.5.0 (333) → v1.4.0 (397) →
   v1.3.0 (457) → v1.2.0 (490). The v1.5.0 `Status` narrative is retained verbatim under
   `_(v1.5.0 record, retained verbatim per annotate-don't-delete:)_`.
7. **ID discipline:** no `TC`, `UT`, `US` or `OPEN-##` minted, renumbered or reused. `OPEN-27` remains
   the high-water mark. The only id-space change is the narrowing of a reservation Doc 04 owns.
8. **Clause-(e) substance not re-opened, as instructed:** S5's four rules are byte-identical to
   v1.5.0; S4's widened criterion and its **(a)–(d)** notice range are unchanged apart from the ISS-05
   scope sentence; `OPEN-27`'s route-don't-rule disposition stands.
9. **Every pin re-verified against the actual header at HEAD:** Doc 02 **v2.17.1 Approved** (PASS 96%,
   report present) ✓ · Doc 03 v2.13.0 Approved ✓ · Doc 05 v2.5.0 Approved ✓ · Doc 07 v2.6.0 Approved ✓
   (basis of the §14 reconciliation) · Doc 08 v2.9.0 Approved ✓ · Doc 09 v1.9.0 Approved ✓ · Doc 06 —
   **see ISS-07**. Doc 02 §8 Scenarios 8 and 9 verified present (lines 2505, 2515).

## 6. Issues (new this cycle — all Low; none blocks the bar)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-07 | Low | T3 | `Source:` CODE-TRUMOCRACY cell (lines 200–214); §1.4 (line 972); Status (lines 57–58) | **The Doc 06 pin reads "v2.7.0, In Review; last Approved v2.5.1"; at HEAD Doc 06 v2.7.0 is Approved** (`artifacts/reviews/06-coding-and-ut-v2.7.0-technical-cycle2.md`, PASS 96%, 0C/0H/0M/3L, reviewer: tester), so "last Approved v2.5.1" is now false. **Accurate as dated** — the flip came after the architect wrote the spec, and the re-pin to v2.7.0 was itself a deliberate Revision-2 sweep recorded in the spec header. **Consequence: nil.** Nothing in this plan's reasoning turns on Doc 06's review state; the load-bearing claim — UT-0889 registered at **v2.6.0** and carried unchanged into v2.7.0 — is correct at both versions, and the error is in the conservative direction (understating a dependency's maturity). Graded by consequence, as directed. | On the next touch, change "v2.7.0, In Review; last Approved v2.5.1" to "**v2.7.0, Approved** (PASS 96%)". One token pair in two locations. |
| ISS-08 | Low | T3 | §14 `TS-V1-*` row (line 2399); §0.4 (lines 702–708) | **The free-band disclosure stops one clause short of the fact that matters.** Both places record that the TC-3570 floor "is itself being drawn on by **Doc 07 v2.7.0, in progress** for the clause-(e) rows" — but neither names *which suite* is drawing on it. At HEAD, Doc 07 v2.7.0 §2 assigns **TC-3570–TC-3575 to `TS-ADV-01…16`** (row 734), i.e. once again **not** to any of the six `TS-V1-*` suites the band is reserved for. **I judge the architect's underlying choice CORRECT and endorse it:** Doc 07 v2.7.0 is *In Review*, its ids can still move in rework, and recording provisional mints as settled register entries is precisely the error that produced the cycle-1 Medium; reconciling against the last **Approved** version (v2.6.0) and disclosing the in-flight movement is the right standard. No collision is possible, because the tester mints sequentially inside a band Doc 04 has flagged, and Doc 07 v2.7.0 itself cites this reservation. What is missing is only the suite name. Separately, "does not pin a number it **cannot see**" is imprecise — the ids are visible in an In Review document; what the register properly declines to do is **rely** on ids from an unreviewed version. | When the Doc 07 pin advances to v2.7.0 Approved — which the new §14 standing instruction will force — record **TC-3570–TC-3575 under `TS-ADV-01…16`** and re-narrow the `TS-V1-*` floor to TC-3576. Meanwhile, add the suite name to the disclosure and re-word "cannot see" to "declines to rely on an unreviewed version". |
| ISS-09 | Low | T6 | `Status:` line 53 ("No word changed by the re-wrap itself"); §1.4 (line 968) | **A self-description is a shade broader than what the operation did.** §1.4 gained a new citation in the same operation — the Doc 02 entry now reads "…§4.45 FR-131 clause (e) **and its §8 Scenarios 8 and 9**" — while OP 18's own header asserts "no citation is added or removed" and the Status line says "No word changed by the re-wrap itself". The hedge "by the re-wrap itself" is defensible, the added citation is accurate, and the Status block does disclose two paragraphs later that v2.17.1 adds §8 Scenarios 8 and 9. But this document family has been marked down repeatedly for sentences that invite a reader to skip a verification, and this is one. | Extend the sentence: "No word changed by the re-wrap itself; the two pins advanced and the §8 Scenarios citation was added with them, both recorded below." |

> **Low** issues do not block the pass bar. **Zero Critical, High or Medium** — the version PASSES.

## 7. Routing instruction (to the owning role)

**PASS — the architect (Ravi Deshmukh) sets `Status: Approved` on v1.6.0 and the SOP advances.** The
document-review loop for Doc 04 closes at cycle 2 of 5.

ISS-07, ISS-08 and ISS-09 are **carried, not blocking**, and are owed on the next touch of this
document — which the §14 standing instruction will itself trigger when the Doc 07 pin advances to
v2.7.0 Approved. Recorded here so the next reviewer inherits them explicitly rather than rediscovering
them, exactly as the v1.4.0 → v1.5.0 carry was handled.

**For the tester (Ji-woo Park), informational, not a defect in this document:** Doc 07 v2.7.0 mints
`TC-3570..TC-3575` into `TS-ADV-01…16` from a band Doc 04 §14 reserves for the six `TS-V1-*` suites.
That reservation is Doc 04's to narrow and it has been narrowed once already this cycle; the two
documents agree today only because Doc 04 pins the last Approved Doc 07. Worth a line in Doc 07
v2.7.0's own register note so the next re-pin closes cleanly.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — PASS at cycle 2; the cap was never approached.
