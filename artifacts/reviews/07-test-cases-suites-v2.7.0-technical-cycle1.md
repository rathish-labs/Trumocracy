# Document Review Report — Doc 07 Test Cases & Suites v2.7.0 (technical, cycle 1)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` (2026-09-06). Cycle counter
> restarts at 1: v2.7.0 is a new minor version (v2.6.0 closed PASS at cycle 2).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.7.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 07)
Score: 94%
Critical: 0
High: 0
Medium: 2
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

Doc 07 v2.7.0 **FAILS cycle 1 on two Mediums**, and both are citation defects rather than
judgement defects. The version's substance is right: I re-derived the six new cases against
Doc 02 v2.17.1 §8 **line by line** and every Scenario citation in every row is accurate
(TC-3570 → Scenario 8 lines 2–5 and line 6; TC-3571 → line 4 and safe-harbour line 7 plus
Scenario 9 line 4; TC-3572 → line 2; TC-3573 → line 2 and Scenario 9 line 1; TC-3574 → line 2;
TC-3575 → Scenario 9 in full, quoted verbatim). I re-ran the suites myself: `npm test` from the
repo root, **625 passed / 625, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18
· indexer 16 · web **101** — and then the block case by case,
`npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web`:
**6 passed, 20 skipped (26)**, every `it` green individually. Every assertion TC-3570..TC-3574
claims is present and passing.

**The decisive call I was asked to make — is run R-18 honest as dated? Yes.** R-18 records
624/624 against a named tree (`d526910` **plus the uncommitted engineer change set**, 40 dirty
paths, product code among them) and states three qualifications in the row itself, including that
a post-merge re-run is owed. The suite is now **625** because Doc 06 **v2.7.0** added a sixth `it`
to UT-0889 (a DES-085 jargon scan, its own ISS-03) *after* R-18 was executed. A run log is a
historical record and must not be retro-fitted; R-18 is not a defect and I am not scoring it as
one. **What that later drop does stale is two forward-looking claims**, and those are ISS-02 and
ISS-03 below.

**ISS-01 (Medium) is wrong on its own terms, independent of any later drop.** The changelog states
"Doc 04 §14 **records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699** for the `TS-V1-*`
band". Doc 04 v1.5.0 on disk says neither thing: §14 reserves **TC-3564–TC-3699** for the six
unminted v1 suites and annotates the range *"none minted"*, and the strings `TC-3569` and
`TC-3570` do not occur anywhere in Doc 04. The minting decision is sound — ids continue from
TC-3569, nothing is reused or renumbered — but the register that would ratify it has not been
updated, and the document asserts that it has. **ISS-02 (Medium)** is TC-3573's expected result,
which claims the Arabic guard bans both "سريًا" and "سري"; the shipped assertion is now the exact
retired phrase only. It was accurate when written (Doc 06 v2.7.0 ISS-06 narrowed it deliberately,
because a bare "سري" ban false-positives on "سريعًا" and "تسري"), but as it stands the row claims
more guard than exists — the one direction this document set has consistently marked itself down
for.

Everything mechanical is clean. **Zero transcription residue** across the 31-OP boundary set: no
leaked FIND / REPLACE-WITH / four-backtick markers, no duplicated or truncated lines, and a
cell-count sweep over **all 69 tables** found **zero** rows disagreeing with their header and zero
rows missing a trailing pipe — which also **discharges ISS-C2-01** (TC-3519's three inline-regex
pipes are escaped; the row is 7 cells). **ISS-C2-02 is discharged** ("Forty-nine", with TC-3541
named as the forty-ninth). **ISS-C2-03 is discharged**: the pin note is re-cut and every pin I
checked against the actual header is right — SRS **v2.17.1 Approved**, SDD **v2.13.0 Approved**,
MTP **v1.5.0 In Review**, BKLG **v2.5.0 Approved**, Doc 09 **v1.9.0 Approved**. I re-summed §2
row-wise from the file: **477 / 244 / 233** across 28 rows with the identity cases = automated +
blocked holding on **every** row and matching the Total row exactly, and §10's 93 + 136 + 15 =
**244** holds. No duplicate `TC` row anchor exists anywhere in the file.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | Both acceptance criteria for clause (e) are covered and correctly attributed: Scenario 8 at five strings on three surfaces (TC-3570..TC-3574), Scenario 9 as a single **Blocked** case (TC-3575). Every Scenario line reference verified against Doc 02 v2.17.1 §8 — all correct. Refusing to let TC-3570..TC-3574 stand in for Scenario 9 is the right call and is argued from the text. |
| T2 Soundness | 20 | 97 | 19.4 | One-TC-per-`it` (UT-0887 precedent) versus one-TC-per-block (UT-0759 precedent) is chosen with a reason that holds — five different strings on three surfaces. **Blocked** rather than **No mechanism** for TC-3575 is correct against §10's own definitions (instrument absent, not product absent). Pass (obs.) is earned by a second, case-by-case run and explicitly withheld from TC-3564..TC-3569: the bar was not moved. |
| T3 Traceability & IDs | 20 | 88 | 17.6 | Ids continue from TC-3569; none reused, retired or renumbered; no duplicate anchor in the file; UT-0889 exists and every assertion cited exists. Docked for **ISS-01** (Doc 04 §14 asserted to say what it does not) and **ISS-02** (TC-3573 over-states its UT). |
| T4 Security & failure modes | 15 | 97 | 14.55 | The safety-relevant failure mode is named rather than smoothed: no instrument exists for the population sweep, the existing UT-0857/0868/0884 jargon scans "would have caught **neither** string this drop fixed", and the residual rests on inspection (I), "point-in-time and unable to hold a Must row against silent regression". TC-3574's refusal to claim FR-082 is the same discipline. |
| T5 Completeness & testability | 15 | 90 | 13.5 | Every count re-derived independently and every one reconciles (§2 row-wise 477/244/233 with per-row identity; 93+136+15=244; Blocked 175 → 176; No mechanism 49). Docked for **ISS-02**, **ISS-03** (the `it` count and the orphan zero) and **ISS-05** (§0.2 gains no R-18 row although it carries every earlier full-suite run). |
| T6 Convention compliance | 10 | 95 | 9.5 | Correct minor bump (2.6.0 → **2.7.0**), `Status: In Review`, `Last updated: 2026-09-06`, ISO-8601 throughout, named owners on every debt row, the v2.6.0 record retained rather than overwritten. Docked for **ISS-04** (the CODE pin overtaken within the day). |
| **Total** | **100** | — | **93.95 → 94%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 | Changelog, v2.7.0 entry, line **105** — "Doc 04 §14 records TC-3564..TC-3569 as minted and reserves **TC-3570–TC-3699** for the `TS-V1-*` band" | **Doc 04 v1.5.0 says neither half of this.** Its §14 register row (line 2166) reads "the six unminted v1 suites … **TC-3564–TC-3699** *(reserved at v1.1.0; **none minted** — each is blocked on unbuilt capability or on `CON-015`. OPEN-18)*", and §0.4 (line 505) repeats "`TC-3564–TC-3699` is reserved for them at §14; the tester mints the IDs". The strings `TC-3569` and `TC-3570` do not appear anywhere in Doc 04 — I grepped the whole file. The **minting is still sound** (ids continue from TC-3569; nothing reused; the band is otherwise unminted), so no id changes; what is wrong is the citation, and it is wrong in the direction that matters — it reads as though the architect's register has already ratified the mint and narrowed the band, when the register is stale and the reconciliation is owed. This is the over-claim class Doc 04 itself was marked down for this morning ("asserting the section was correct while knowing it was not"). | State what Doc 04 v1.5.0 actually says — the band is reserved **TC-3564–TC-3699** and still records "none minted" — and record the narrowing as **owed to the architect** (already in flight for v1.6.0). Keep the minting rationale unchanged; only the citation is defective. Doc 08's v2.10.0 pin note carries the identical sentence and is raised there as its own ISS-01. |
| ISS-02 | **Medium** | T3 / T5 | §5 `TS-ADV-02`, **TC-3573** expected-result cell, line **1075** | The cell reads: the retired Arabic wording is absent, "neither سريًا nor سري (secret) appears in the endorsement step". The assertion in the repository is now **only** the exact retired phrase — `ar.home.steps[1].body` is asserted not to contain "اسمك سريًا" — plus "لا نعرف" on the promise. The bare "سري" ban was **removed on purpose** at Doc 06 v2.7.0 (its own ISS-06: a bare substring ban on "سري" is brittle because it also matches "سريعًا" ("quickly") and "تسري" ("takes effect")). The row was therefore **accurate when written** against the pinned Doc 06 v2.6.0 and has been overtaken; but as the document now stands it describes a broader guard than TC-3573 has, on a row carrying the strongest status in this document (**Pass (obs.)**) and feeding Doc 08's FR-131 evidence cell. A reader could ship an Arabic string containing "سري" believing this case would catch it. This is the exact defect class the document corrected at TC-3567 (v2.6.0 ISS-02) and again at TC-3543 in this very version: **state less, do not claim more.** | Re-read the UT-0889 Arabic `it` as it stands and re-cut the expected result to the assertion actually made (the exact retired phrase, and "لا نعرف" on the promise), recording the narrowing and its brittleness rationale as a **stated scope limit** rather than silently. **Sequence this after Doc 06 v2.7.0 closes its own review cycle** so the guard is read once in a settled state. |
| ISS-03 | Low | T5 | §8 automation-mapping row (line **1174**) and §8 orphan check (line **1198**) — both "**UT-0889** … **5** `it`s"; and "**Material orphan count for this drop: 0**" | The block now contains **6** `it`s: Doc 06 v2.7.0 added a DES-085 jargon scan ahead of the five mapped ones and records the change in terms ("UT-0889 row and Total updated (5 -> 6; 624 -> 625)"). The sixth `it` maps to **no TC**, so the sweep's "0" is no longer true of the file, and "one TC per `it`" no longer describes the block. **Scored Low, not Medium:** the direction is conservative — an unmapped guard credits no case with a status it has not earned — and the check is explicitly scoped "for this drop (Doc 06 v2.6.0)", which the document pins honestly. | At the next touch re-run the sweep against the settled UT-0889, correct 5 → 6, and either mint a TC for the jargon `it` or record it as deliberately unmapped with a reason. Rides with ISS-02 — one re-read fixes both. |
| ISS-04 | Low | T6 | `Source:` CODE pin (line **64**) and the v2.7.0 pin note (lines 79–84) — "CODE-TRUMOCRACY **v2.6.0** (In Review — v2.7.0 rework in progress)" | Doc 06 is now **v2.7.0, In Review** on disk (its cycle-2 technical review is running). The pin is **correctly dated and annotated** — it names the FAIL, the score and the rework — and it under-claims rather than over-claims, so this is **explicitly not scored as a correctness defect**, on the same ground as the v2.6.0 ISS-C2-03 Low. Its only live consequence is that the two statements resting on it (ISS-02, ISS-03) have moved. | Refresh the CODE pin when Doc 06 v2.7.0 clears its review; it rides with the SRS/SDD/BKLG/MTP pin-sync already recorded as owed, together with the TC-3568 conditional discharge the v2.6.0 report asked to be made unconditional now that Doc 03 v2.13.0 is Approved. |
| ISS-05 | Low | T5 | §0.2 "Execution evidence for this session", lines **634–650** | Every previous full-suite run has a row here — 542/542 (2026-08-29) and 619/619 (R-17) — but **R-18 has none**, although §9 records it in full and the changelog says the version "records run R-18". No statement is false; the section a reader opens first for execution evidence simply omits this version's run, breaking the pattern the last two versions set. | Add the R-18 row to §0.2 with the qualifications §9 already carries (uncommitted tree; post-merge re-run owed), or state in §0.2 that R-18 lives in §9 only. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Carried Lows from cycle 2 of v2.6.0 — all three DISCHARGED, verified mechanically

- **ISS-C2-01** (TC-3519's unescaped inline-regex pipes) — **discharged**. The three pipes are
  escaped and my cell-count sweep over **all 69 tables** reports **zero** mismatched rows, so
  TC-3519 renders 7 cells against its 7-column header and its Automation and Status cells survive.
  Three other rows carrying the same construct (TC-3526, TC-3544, TC-3562) were already escaped
  and also measure clean.
- **ISS-C2-02** ("Forty-eight" against the table's 49) — **discharged**, and better than asked:
  the prose reads "Forty-nine", **TC-3541 is named** as the forty-ninth (10 + 38 + 1 = 49) rather
  than absorbed into a corrected total, and a pointer distinguishes TC-3575 (Blocked) from this
  bucket.
- **ISS-C2-03** (stale pin note) — **discharged**. The note is re-cut and I checked each pin
  against the live header: SRS v2.17.1 **Approved**, SDD v2.13.0 **Approved**, MTP v1.5.0
  **In Review**, BKLG v2.5.0 **Approved**, Doc 09 v1.9.0 **Approved** — all five correct. Only the
  CODE pin has since moved (ISS-04). The one half not executed — converting TC-3568's conditional
  discharge to unconditional now that Doc 03 v2.13.0 is Approved — is folded into ISS-04's
  pin-sync rather than raised as a separate issue.

### Independent verification performed for this review (evidence, not assertion)

| Check | Method | Result |
|---|---|---|
| Suite green | `npm test` from the repo root | **625 / 625 pass, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101** |
| UT-0889 case by case | `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` | **6 passed, 20 skipped (26)**; each `it` reported green individually — all five mapped assertions present and passing, plus the unmapped jargon `it` (ISS-03) |
| Every TC-3570..TC-3574 assertion | read `apps/web/test/safety-surfaces.test.tsx` line by line against each expected-result cell | Matches for TC-3570, TC-3571, TC-3572 and TC-3574; **mismatch for TC-3573** (ISS-02) |
| Scenario citations | every Scenario 8 / Scenario 9 line reference checked against Doc 02 v2.17.1 §8 (lines 2505–2519) | **All correct**, including "line 6" for the banned-word ban, "line 7" for the safe harbour and Scenario 9 line 4 for the none-of-the-four-words clause |
| §2 arithmetic | row-wise re-sum of the suite table from the file | **477 / 244 / 233** over 28 rows; per-row identity cases = automated + blocked holds on **every** row; the Total row matches |
| §10 identity | recomputed | 93 + 136 + 15 = **244**; Blocked 175 → **176**; No mechanism **49**; the overlap paragraph is internally consistent at 198 + 176 + 48 + 12 − 4 = **430** (its base still disagrees with §2's 244 — disclosed as `TD-RTM-02`) |
| Transcription residue over the 18 Doc 07 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | cell-count and trailing-pipe sweep over all **69** tables | **zero** mismatches, **zero** missing trailing pipes |
| Id hygiene | duplicate-anchor sweep over every TC row anchor | **475** unique anchors, **zero** duplicates; ids continue from TC-3569; TC-3576–TC-3699 untouched |
| Stale-string sweep | grep "kept private" / "never learn" / "Supporters are anonymous" / "stated reason is anonymity" across Docs 07 and 08 | **No live TC asserts a retired string.** Every surviving occurrence is a quotation inside a correction record (changelog, orphan check, the TC-3543 correction note). TC-3543's cell now reads "non-publication" and matches what UT-0089 and UT-0832 actually assert |
| Doc 04 §14 band | grep TC-3564 / TC-3569 / TC-3570 / TC-3699 in Doc 04 v1.5.0 | Band reserved **TC-3564–TC-3699**, "none minted"; TC-3569 and TC-3570 absent → **ISS-01** |
| Gate audit | `node hooks/run_gates.cjs --audit` | Doc 07 v2.7.0 was blocking for want of this report; the RTM's two independent signals agree at **138 Must / 16 COMPLETE / 122 OPEN** |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role.** Fix **ISS-01** (state what Doc 04
v1.5.0 actually reserves and record the §14 narrowing as owed to the architect) and **ISS-02**
(re-cut TC-3573's expected result to the assertion UT-0889 actually makes); ISS-03, ISS-04 and
ISS-05 should ride with the same touch. The rework MUST produce a **new version** — a Medium-level
FAIL means at least a minor bump, to **v2.8.0**, with `Status: In Review` — after which this loop
re-reviews at cycle 2. **No case status changes on my findings**: TC-3570..TC-3574 remain
Pass (obs.) (I observed all five green case by case myself) and TC-3575 remains correctly Blocked.

**Sequencing recommendation to the project-manager (not a finding):** ISS-02 and ISS-03 both come
from Doc 06 **v2.7.0**, which is itself In Review with its cycle-2 technical review running. Hold
the Doc 07 rework until that review closes, so the tester re-reads a settled UT-0889 once instead
of twice. Nothing here closes a Must row either way — FR-131 stays OPEN — so there is no schedule
cost to sequencing it correctly.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
