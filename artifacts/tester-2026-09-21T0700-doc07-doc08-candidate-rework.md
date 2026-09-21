# Tester session note — 2026-09-21T0700 — Doc 07 v2.11.0 + Doc 08 v2.14.0, rework cycle 2 of 5

```
Role:       tester (Ji-woo Park) — owning role for Doc 07 and Doc 08
Session:    rework cycle 2 of 5 for BOTH documents, after two cycle-1 FAILs
Reviews:    artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md  (FAIL 91%, 0C/0H/2M/6L)
            artifacts/reviews/08-traceability-matrix-v2.13.0-technical-cycle1.md (FAIL 87%, 0C/2H/3M/3L)
            Reviewer for both: reviewer-qa (Rafael Duarte), neutral, PM-assigned, recorded before dispatch
Wrote:      artifacts/status/SPEC-2026-09-21-doc07-v2.11.0.md  (16 OPs)
            artifacts/status/SPEC-2026-09-21-doc08-v2.14.0.md  (17 OPs)
            this note
Did NOT:    edit Doc 03, Doc 06, Doc 07, Doc 08, any product code, any test, or memory-index.json.
            Wrote no review report — I own both documents and reviewed neither.
Verdict on the reviews: BOTH FAILS ARE CORRECT. Every one of the fourteen issues verified against
            the repo before rework. I contest none of them.
```

## 1. Both reviews were right, and one of them found the defect that matters most

I re-checked every finding against the repo rather than accepting it. **All fourteen stand.** The
Doc 08 ISS-02 finding is the one I would single out: **a Must row (FR-036) closed at v2.13.0 while
its own cells named neither the case nor the `UT` that carried two of its four clauses.** The prose
argued the withdrawal clause from `UT-0897`, the changelog cited `TC-3605`, and the row's TC and UT
cells named neither — and Doc 07's `TC-3605` did not name FR-036 at all, so the backward trace
dead-ended. The tests were always real and green (I re-ran them). **The chain was broken, which is
the one thing this document exists to get right.** A row that closes on evidence its own cells do
not name is a row nobody can check.

## 2. Doc 07 v2.11.0 — 16 ops, not one count moves

**MINOR bump earned by the house rule (Medium-or-worse FAIL), not by a mint.** Designed **521** ·
automated **290** · observed **139** · inherited **136** · not executed **15** · Blocked **177** ·
No mechanism **46** · Manual **12** · failures **0** — every figure identical to v2.10.0. **No case
minted, retired, reused, renumbered or re-statused.** Both Mediums were defects of *statement*, not
of counting — which is exactly why they earned a FAIL.

| ISS | Sev | What was wrong | What I did |
|---|---|---|---|
| 01 | **M** | §5.7 said the 97 `it`s take the suite "640 → 739". **640 + 97 = 737.** The missing 2 are `UT-0871` extended to `IProposalStore` and **`ICandidateStore`** at Doc 06 **v2.10.0**, in a **fifth file** (`apps/web/test/sdk-types-sync.test.ts`, 1 `it` → 3). §9 located them in the wrong block *and* the wrong version. The orphan sweep was computed over **seventeen** blocks when the drop touched **eighteen** | Corrected at six sites; sweep basis widened to eighteen; **ruled** on the two assertions — **no case minted**, `TC-3540` re-scoped from `IPartyStore` to all three seams, because `UT-0871` is one parameterised `it` over a seam list and two more instances of an existing guarantee are not a new guarantee |
| 02 | **M** | §8's reverse sweep claimed a **Blocked** carrier for FR-039 and cited `TC-3320`/`TC-3612`. `TC-3612` has no FR-039 note; `TC-3611` does and is **Pass (obs.)**; `TC-3320` is an FR-067 case. **FR-039's voter-scope and tie-break clauses have NO case at all** | Ids **dropped, not corrected** (no correct id exists) and the fact stated on the FR-081 pattern the document already uses. Carrier list: **four claimed → three real + two case-less clauses** |
| 03 | L | §10 said "**Ten** cases" over an enumeration of **twelve** | "Twelve", and the figure is now **derived from the enumeration beside it** |
| 04 | L | §2/§10 count `TC-3407`/`TC-3411` automated; §8 mapped neither | Mapped in all three rows; "Cases mapped" 8→**10**, 13→**15**, 6→**7** |
| 05 | L | `TC-3470` maps `UT-0750`, whose anon assertion this drop **FLIPPED** — the row described the string the component must now **refuse** to render; evidence cited a 14/14 run the file no longer produces | Annotated on the `TC-3471`/v2.5.0 precedent; title/verifies/expected restated; evidence → R-21's 25/25 |
| 06 | L | `TC-3407`'s "eligibility checked by code" clause is asserted by **none** of its three cited blocks | Added `UT-0894`, `UT-0896` (Doc 03's own FR-081 evidence row cites UT-0896) |
| 07 | L | §0.1's **Pass (obs.)** definition still named only "2026-08-09 or 2026-08-25" while 139 cases rest on it across R-18..R-21 | Amended in place to name the run series and the **case-by-case bar**, as the *Not run* row was amended as it aged |
| 08 | L | `TC-3612` claimed every read "structurally cannot reach a counting gate"; the `it` checks **three named fields** | Softened to what is asserted, with the stronger property **marked as inference** |

**New run R-22**, and it deliberately promotes nothing: `sdk-types-sync.test.ts --reporter=verbose`
→ **3 passed / 3**, each `it` green individually. That meets the Pass (obs.) bar. **`TC-3540` is
held at Pass (inh.) anyway**, because promoting it moves the observed/inherited buckets here **and**
in Doc 08 §6/§9 while Doc 08 is mid-review — moving half of a synchronised pair is the `TD-RTM-02`
drift. **Promotion deferred, not denied; owed at the next synchronised touch.**

**Folded in from the Doc 08 review (ISS-02, High):** `TC-3605`'s requirement cell now names
**FR-036** and **US-0046** (and DES-027 rule 6), because Doc 08's FR-036 closure rests on its
withdrawal clause.

**Still carried, second deferral, named not quiet:** v2.9.0 ISS-02 (missing §10 separator) and
ISS-04 (clause-(e) surface-vs-claim framing).

## 3. Doc 08 v2.14.0 — 17 ops, no ruling changes, no count moves

**MINOR to v2.14.0, not the offered v2.13.1**, because ISS-02 changes a **closed Must row's cited
evidence set** — not a patch-shaped change even though no status moves.

- **ISS-01 (High) — the recurring defect class recurred three times, in the document that names it.**
  Three **live** subtotals were never moved. **The sweep is published as a falsifiable enumeration:
  15 hits for the stale trio — 3 LIVE (corrected), 12 HISTORICAL (deliberately not rewritten: lines
  66, 149, 647, 858, 1128, 1172, 1660, 2392, 2394, plus 2183 which is a false positive — "FR-**122**
  open tier" inside FR-132's text).** Each corrected figure is **derived from the row markers**:
  §3.1 pre-v2.0.0 **54 / 14 / 40**; §3.1 all-114 **114 / 19 / 95** with the reconciliation
  **95 + 24 = 119 of 138**; §3.3 **23 / 5 / 18**.
- **A defect the review did NOT catch, found while re-deriving ISS-01(c), and it is the FR-078
  failure mode exactly.** **FR-038's row carried BOTH a ✅ and a ☐** — my own v2.13.0 annotation
  wrote "was ☐ Phase 3". A row with both markers is **silently uncountable**: §3.3 derived **22 rows
  / 4 complete**, so the honest **5 / 18** could not be reproduced mechanically. The Must count is
  unaffected (the hook reads §3.1/§3.2 only) and **no published figure was ever wrong** — but a
  figure a verifier cannot re-derive is a figure a verifier cannot check. Fixed by removing the
  glyph. **In the fix, neither glyph is reproduced — both are named by codepoint** — because quoting
  one re-creates the defect: the counter is a plain substring test and cannot tell a marker from a
  mention of a marker. *(My first draft of that annotation did exactly this and I caught it in the
  post-apply derivation.)*
- **ISS-02 (High):** FR-036 gains **TC-3605**, **TC-3606**, **UT-0897**, **UT-0898**, plus a
  **clause → case map** so no reader has to reconstruct it. §7 entry 17 and the changelog reconciled
  to the row.
- **ISS-03 (Medium) — RULED, not straddled.** v2.13.0 closed FR-037's platform-wide clause on a
  scope premise verified by *inspection* while refusing FR-081's clause for want of an *assertion*,
  and reconciled them nowhere. **I wrote the rule down as `Completion rule 4a` (§1):** a reproducible,
  published inspection may fix the **EXTENT of an absence clause** — but only where every site at
  which the protected datum exists is itself covered by a passing absence test — and it may **never**
  discharge a **positive obligation to record**. **Inspection can bound an absence; it cannot
  manufacture a record.** FR-037 is a prohibition and falls inside 4a; FR-081 is a positive
  obligation and falls outside it, where inspection would **confirm the gap** rather than discharge
  it. **FR-037 stays CLOSED, FR-081 stays OPEN, both rows cite 4a and say which side they fall on.**
  The extent scan is published so it can be re-run: **5 files hit, all five in the candidacy flow**
  (`packages/sdk/src/candidates.js` 17 · `CandidateSelection.tsx` 8 · `candidates/page.tsx` 1 ·
  `i18n/en.ts` 2 and `ar.ts` 2, the last two being **label copy**, not storage); `packages/protocol`,
  `services/indexer` and every other route return **nothing**; `ENROLMENT_UI` is
  `{dev:true, staging:false, prod:false}`. The **absence-scan `it` is ROUTED to the engineer as owed
  hardening, not required** — 4a discharges the clause today — and FR-037 carries the revisit flag.
- **ISS-04/05 (Medium):** "Thirteen stories" → **Fifteen** (6 + 9 = 15), derived from its own list;
  the `Source:` block's Doc 07 pin ended **mid-word** ("…after that annot") leaving a sentence, an
  italic and a parenthesis unclosed — **the truncation was in my own v2.13.0 REPLACE block**, which
  transcription faithfully reproduced. **A spec is not self-checking; that is the failure mode of
  authoring one.** Restored, closed, and re-pinned to **Doc 07 v2.11.0**.
- **Three Lows:** §4 gains the **v2.13.0 sweep** (17 ids, 97 `it`s, orphan count 0); §7's preamble
  gains its **v2.13.0 update** (3 retired, 6 rewritten, heading 122 → 119); §8 gains **four**
  change-impact rows (the two ratified constants, the `ICandidateStore` v1→v2 seam, the three
  revisit triggers).

## 4. Verification performed on both specs

- **Doc 07 v2.11.0:** 16 FINDs, each matching **exactly once**; simulated sequential application
  **0 errors**; edited-row column counts checked (7/7/7/7 for the TC rows, 5 for the TS-GOV2 row,
  5 for the §8 rows, 6 for R-22); **all counts identical to v2.10.0**.
- **Doc 08 v2.14.0:** 17 FINDs, each matching **exactly once**; sequential application **0 errors**.
  Post-apply derivation: §3.1 **114 / 19 / 95**, §3.1 pre-block **54 / 14 / 40**, §3.2 **24 / 0 / 24**,
  §3.3 **23 / 5 / 18**, **Total Must 138 / 19 / 119**, published §9 **19 / 119**, **0 rows carrying
  both markers**. FR-036/FR-037/FR-081 all **8** columns.
- **A column anomaly I introduced and caught:** FR-037's row initially broke to **13 columns**
  because my identity scan was written as a piped regex alternation and **a literal `|` is a cell
  break**. Rewritten with the six names comma-separated. A marker-row anomaly scan returns **28 rows
  both before and after the spec — identical sets, none new, none fixed** (pre-existing rows whose
  prose cells contain pipes; the Doc 07 reviewer flagged the same class as out of scope).

## 5. Open items

1. **Both specs await transcription**, then `--audit`. **The Must figures must NOT move: 138 / 19 /
   119, both signals agreeing.** Neither spec edits a §9 hook-parsed row.
2. **Two review reports owed from reviewer-qa** — Doc 07 **v2.11.0** and Doc 08 **v2.14.0**,
   technical mode, **cycle 2 of 5** each. I own both and will not write either.
3. **`TC-3540` promotion to Pass (obs.) is owed** at the next synchronised Doc 07/08 touch (R-22
   evidence already recorded; deferred to keep the two documents' evidence buckets in step).
4. **Routed to the engineer:** the FR-037 absence-scan `it` (owed hardening under 4a); the
   `NOMINATION_ENDORSEMENTS_MIN` value pin and its stale "flagged for ratification" `it` title; a
   stronger `UT-0902` enumerating own properties (would convert TC-3612's inference into an
   assertion); plus the six build items already routed at v2.13.0.
5. **`TD-RTM-02`** (now a four-way denominator disagreement) still OPEN — the tester's own owed
   recount, still not attempted inside a rework.

## 6. IDs touched

`TC-3407`, `TC-3411`, `TC-3470`, `TC-3540`, `TC-3605`, `TC-3606`, `TC-3612`, `TC-3592`..`TC-3619`
(cited), `TC-3320`/`TC-3611`/`TC-3612` (false citation removed) ·
`UT-0750`, `UT-0871`, `UT-0891`..`UT-0907`, `UT-0902` ·
`FR-036`, `FR-037`, `FR-038`, `FR-039`, `FR-065`, `FR-066`, `FR-067`, `FR-078` (referenced),
`FR-081`, `FR-085`, `FR-093`, `FR-131`, `FR-132` · `US-0046`, `US-0095` ·
`DES-027`, `DES-028`, `DES-097`, `DES-107`, `DES-108` · `R-22` (new run id) ·
**`Completion rule 4a` (new)** · `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-05`.

---

## 7. Post-transcription addendum — Doc 07 v2.11.0 is APPLIED; one of my own verification predictions was wrong

**Doc 07 v2.11.0 was transcribed by the project-manager during this session.** Verified after the
fact: **all 16 replacements present exactly once**; `Version: 2.11.0`; `**Ten cases**` → **0** hits
and `Twelve cases` → **1**; the `R-22` row present once; §2's total still **521 / 290 / 231** —
**no count moved**, as designed.

**`node hooks/run_gates.cjs --audit` confirms the RTM is untouched by the rework:**

```
derived from row status markers: 138 Must rows, 19 COMPLETE, 119 OPEN
published by RTM section 9:      19 COMPLETE, 119 OPEN
the two independent signals AGREE
```

**A correction to my own spec tail, recorded because getting this wrong is the defect class this
session is about.** The v2.11.0 spec's "After transcription" section predicts
`grep -c "TC-3320" docs/07-test-cases-suites.md` → **1**. **The true figure is 8, and 8 is correct.**
Classified, as a falsifiable enumeration: **7 are the correction itself quoting the wrong ids in
order to explain them** — lines 37, 39, 47 (the v2.11.0 Status block), 394, 395, 402 (the v2.11.0
Changelog), 1795 (§8's orphan-check annotation) — and **1 is the `TC-3320` case row itself** in §5.2
(line 1956). **No live FR-039 carrier claim survives**: every remaining mention is inside an
annotation that states the citation was wrong.

This is the same shape as the FR-038 glyph problem in Doc 08 §3.3 — **a correction that must quote
the thing it corrects** — with the opposite consequence. There it was fatal, because a counter reads
the row and cannot distinguish a marker from a mention of one, so the glyph had to be named by
codepoint instead. Here it is harmless, because nothing counts prose. **The lesson is the same and
worth carrying: before predicting a grep count in a spec, run it.** I predicted this one instead of
running it, and it is the one figure in either spec tail that is wrong.

**Doc 08 v2.14.0 remains NOT transcribed.** Re-verified against the live file at session end:
**17 FINDs, each matching exactly once, sequential application 0 errors.**
