# Document Review Report — Doc 07 Test Cases & Suites v2.4.4 (technical, cycle 2)

> Produced by the **document-review** skill. Reviewer is **engineer** (neutral — the **tester**
> owns Doc 07; the engineer role never edits this document and made no edits in this session).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.4.4
Review mode: technical
Reviewer role: engineer
Score: 99%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 07 v2.4.4 is the rework of v2.4.3 against `artifacts/reviews/07-test-cases-suites-v2.4.3-technical-cycle1.md`
(FAIL 92%, 0C/1H/0M/1L). Both cycle-1 findings are **verifiably fixed at their exact cited
location**: **ISS-01 (High)** — TC-3545's own Expected-result cell now carries a **"RULED
2026-08-30"** annotation that quotes the superseded sentence verbatim (I diffed it byte-for-byte
against `git show HEAD` and it is an **exact character match**, including the em dashes and the
apostrophe in "FR-090's"), states the approver's ruling, and explicitly says the revisit condition
**never triggered** — no sentence anywhere in the row still asserts a ruling is pending. **ISS-02
(Low)** — the changelog's v2.4.3 entry now says the two Doc 03 §10.13.13 questions were "recorded
in this document at v2.4.0 as owed," and I independently confirmed against the document's own
v2.4.0 changelog entry (line 146) that this is correct: the two questions were first written there,
2026-08-29. I re-ran the full cycle-1 staleness sweep from scratch (not trusting the prior sweep,
since cycle 1 proved a location can be missed) across every section — §0/§5.2–§5.6 headings and
notes, the TC-3542..TC-3563 table rows, the TC-3552..TC-3555 heading note, §8's three orphan-check
paragraphs, §9's execution log, and §10's exit summary — and found **no fifth stale location**: the
only remaining "flagged for ruling / must be revisited" hits are (a) the changelog's own historical
narration of the bug it is fixing (legitimate, quoted/described in past tense) and (b) the
superseded v2.4.0 entry, which correctly carries a `[SUPERSEDED at v2.4.3/v2.4.4 …]` pointer. `git
diff HEAD` confirms the whole delta is five hunks — header, the superseded pointer, the TC-3542..47
narrative note, the TC-3545 row, and the TC-3552..55 note — and nothing in §2's suite table (Total
465 / automated 233 / Blocked-or-no-mechanism 232), §8's automation-mapping table, §9 (still ends at
R-16), or §10 moved; no `TC` status changed. `npm test` from the repo root is **610/610 green**
(contracts 95 · protocol 150 · sdk 244 · ui 14 · indexer 16 · web 91), matching the changelog
exactly. One **Low** is carried forward (not new, not fixed, doesn't block): §9 still lacks an R-17
confirmatory re-run row for this documentation-only version, per the R-14 precedent — the same Low
the v2.4.2 PASS (98%, 0C/0H/0M/1L) already accepted and every version since has honestly carried
rather than silently dropped. **Verdict: PASS.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`99%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — score is above the 95% bar and there are zero Critical/High/Medium issues.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Unchanged from cycle 1 — this is a textual-only rework; FR-091/FR-092 correctly remain OPEN (G-NOMECH) for the unwired-`schedule()` / unbuilt-DES-097 reasons, matching Doc 02 v2.16.0 §13 and the DECISIONS memo §3 exactly. |
| T2 Soundness | 20 | 99 | 19.8 | The self-contradiction that capped cycle 1 (a version claiming a discharge its own content contradicted) is resolved: TC-3545's row now says the same thing the changelog says. The ruling logic itself was already sound and is unchanged. |
| T3 Traceability & IDs | 20 | 99 | 19.8 | TC-3545's row — the unit the RTM actually cites — now correctly and completely reflects the 2026-08-30 ruling; verified character-for-character that the retained quote of the superseded sentence is accurate, not paraphrased or corrupted. |
| T4 Security & failure modes | 15 | 100 | 15.0 | Not touched by this version; no regression versus the v2.4.2 baseline. |
| T5 Completeness & testability | 15 | 99 | 14.85 | A from-scratch re-sweep (not a re-check of the prior sweep) across every section found no further stale location — the "fourth place" class of miss that failed cycle 1 was not repeated. |
| T6 Convention compliance | 10 | 99 | 9.9 | ISS-02 provenance now correctly cites v2.4.0 (verified against the document's own v2.4.0 entry); changelog is honest about scope ("No TC added, changed, re-statused or re-run; no count moved"), which `git diff` confirms true; version bump 2.4.3→2.4.4 (patch) and `Status: In Review` are both correct. Docked 1 point only for the carried, pre-existing R-17 Low (ISS-01 below), not for anything new. |
| **Total** | **100** | — | **98.95% ≈ 99%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T6 | §9 Execution log (ends at R-16, line ~899) | **Carried forward, not new.** §9 still has no R-17 confirmatory re-run row for this documentation-only version, per the R-14 precedent (Doc 07 re-runs the suite and logs a row when a version is purely documentary, to record that behaviour was independently confirmed unchanged). This was first raised at the v2.4.2 cycle-1 review (PASS 98%, 0C/0H/0M/1L) and has been honestly carried, not silently dropped, at every purely-documentary version since (v2.4.2 → v2.4.3 → v2.4.4). Does not affect any TC status, count, or the correctness of this version's fix. | Tester MAY add an R-17 row the next time the suite is actually re-run (or accept it as a standing, already-PASS-accepted Low); does not block PASS. |

> **Low** issues do not block the pass bar. No Critical/High/Medium issues found in this cycle.

## 5. Verification notes (what was independently checked and confirmed correct)

- **ISS-01 (High, cycle 1) — fixed at the row itself.** `git diff HEAD -- docs/07-test-cases-suites.md`
  shows TC-3545's Expected-result cell parenthetical fully replaced. The new text: states
  `**RULED 2026-08-30**`, cites the approver (Rathish) and the DECISIONS memo, **quotes** (not
  paraphrases) the superseded sentence prefaced by "This case previously carried:", states the
  ruling outcome ("PROPOSING is NOT a counting action"), and concludes "**the condition never
  triggers: this case and FR-090's row stand unchanged and need no revisit.**" I re-read this row
  directly in the file (not via the changelog) — no sentence in it asserts a ruling is pending,
  owed, or still to be made.
- **Quote accuracy — verified programmatically, not by eye.** Using a small Node script I extracted
  (a) the exact parenthetical `git show HEAD:docs/07-test-cases-suites.md` shows for TC-3545 in
  v2.4.2, and (b) the exact string between the quotation marks in v2.4.4's "This case previously
  carried: ..." sentence. **They are identical, character for character**, including `§`, the two
  em dashes, and the apostrophe in `FR-090's`. Retaining superseded wording verbatim (rather than
  deleting it) is the project's stated convention (per the cycle-1 routing instruction and the
  TC-3552..3555 precedent); a misquote would have been worse than deletion — there is none.
- **ISS-02 (Low, cycle 1) — fixed and provenance verified correct.** The v2.4.3 changelog entry
  (preserved inside the v2.4.4 changelog block) now reads "recorded in this document at v2.4.0 as
  owed." I independently located the v2.4.0 changelog entry itself (line 146:
  "Doc 03 §10.13.13's two open questions are recorded where they bear...", dated 2026-08-29) and
  confirmed this is indeed the **first** place either open question appears in Doc 07. v2.4.0 is
  the correct provenance.
- **No fifth missed location — full re-sweep, not a re-check.** Grepped the entire document (not
  just the three/four previously-known locations) for: `flagged for an approver ruling`,
  `must be revisited`, `reconciliation is owed`, `bears directly on what`, `revisit flag`,
  `revisit note`, `approver ruling`, `is owed`, `awaiting ruling`, `pending ruling`,
  `PROPOSAL_STATE`, `ADR-008`, `counting action`, `FR-123`, `10.13.13`, `complementary`,
  `competing`, `different taxonomy`. Every hit outside the (correctly historical/superseded)
  changelog narration is either (a) in the two now-fixed locations (TC-3545 row, TC-3542..47
  narrative note, TC-3552..55 note) or (b) genuinely unrelated — TC-3403/TC-3508..3510 (FR-077
  amendment-path, a different open item), TC-3530..3533/TC-3556..3558 (FR-122/FR-123 counting gate
  for join/vote, not for proposing), TC-2750 (`FeatureFlags` blast radius, unrelated "awaiting"),
  §8's three orphan-check paragraphs (clean), §9's execution log (clean, still ends R-16), and
  §10's exit summary (clean, byte-identical to baseline). Also checked §0.2/§10.13.13(b) cross-refs
  in TC-3545 against Doc 03's actual §10.13.13 section (exists, confirmed) and Doc 03/Doc 02
  headers, which pin at **v2.10.0** / **v2.16.0** exactly matching Doc 07's own source-pin block.
- **No count moved, no TC re-statused.** `git diff HEAD -- docs/07-test-cases-suites.md` is exactly
  five hunks (99 lines total): header/changelog, the `[SUPERSEDED at v2.4.3/v2.4.4]` pointer line,
  the TC-3542..47 narrative note, the TC-3545 row, and the TC-3552..55 note. §2's suite table
  (line 440: Total **465**, automated **233**, Blocked-or-no-mechanism **232**), §8's automation
  mapping and orphan checks, §9's execution log (still R-16, no R-17), and §10's exit summary are
  confirmed **byte-identical** to the v2.4.2 (HEAD) baseline — none of them appear in the diff.
  TC-3545's Status cell is unchanged: `Automated — packages/sdk/test/proposals.test.js · UT-0834 |
  Pass (inh.) — inherited from Doc 06 v2.4.1`.
- **`npm test` from repo root:** contracts 95 + protocol 150 + sdk 244 + ui 14 + indexer 16 + web
  91 = **610/610 green**, matching the changelog's claim exactly (re-run independently by this
  reviewer, not taken on trust).
- **Header/status coherence.** `Version: 2.4.4`, `Status: In Review`, `Last updated: 2026-08-30` are
  mutually consistent; source pins (`SRS v2.16.0`, `SDD v2.10.0`, `CODE v2.4.3`) match the current
  headers of Doc 02 and Doc 03 exactly. The changelog honestly frames this as "Rework cycle 1
  against [the cycle-1 report] (FAIL 92%, 0C/1H/0M/1L)" and states both fixes plainly — it does not
  overclaim or omit the prior FAIL.
- **DECISIONS memo cross-check.** `artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md`
  exists and its Ruling 1/Ruling 2 content matches exactly what Doc 07 v2.4.4 now states (PROPOSING
  is open participation, not FR-123-gated; FR-091 stages and `PROPOSAL_STATE` are complementary,
  not competing). Note for the record (not a Doc 07 defect): that memo's own §4 Application table
  says "Doc 07 v2.4.3 | stale 'ruling owed' cross-references corrected" — which cycle 1 of this loop
  showed was **not fully true** for v2.4.3 (TC-3545's row was missed). That memo is a different
  artifact, outside this review's scope (it is not owned by the tester and Doc 07 does not depend
  on its accuracy), so it is not scored here — flagged only for awareness.

## 6. Routing instruction (to the owning role)

**PASS.** The tester (Ji-woo Park, Doc 07 owner) sets `Status: Approved` on v2.4.4. No further
rework is required by this cycle. ISS-01 (Low, carried) may be picked up whenever the suite is next
actually re-run; it does not block this PASS and was already accepted once at the v2.4.2 PASS.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this cycle PASSED; the cap (5 cycles) was not reached (cycle 2 of 5).
