# Document Review Report — `docs/07-test-cases-suites.md` v2.11.0 (technical, cycle 2 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** owns this document; this
> review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded before dispatch in
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.11.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 3
Cycle: 2 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**All eight cycle-1 issues are FIXED, and every one of them verifies against the artefact it is a
claim about — not against the document's own summary of it.** The two Mediums are fixed at the
root, not papered: the arithmetic now reads **640 + 97 + 2 = 739** with the `+2` named, located in
the right file, the right block and the right Doc 06 version; the orphan sweep's basis is widened
to **eighteen** blocks and *rules* on the eighteenth; and the FR-039 "carrier" that did not exist
is **dropped rather than corrected**, with FR-039 and FR-081 both now stated as carried by **NO
case**, on the pattern the document already used well. I re-ran everything: `npm test` from the
root is **739 / 739, 0 failed, exit 0** (contracts 95 · protocol 178 · sdk 287 · ui 25 ·
indexer 16 · web 138), `npm run lint:deps` is clean (7 workspaces, layering OK), and **R-22
reproduces exactly** — `npx vitest run test/sdk-types-sync.test.ts --reporter=verbose` in
`apps/web` gives **3 passed / 3**, the three `it`s being `IPartyStore`, `IProposalStore` and
**`ICandidateStore`**, i.e. one parameterised `it` over a seam list, exactly as `TC-3540` now
states. `node hooks/run_gates.cjs --audit` still reads **138 Must rows, 19 COMPLETE, 119 OPEN**,
the two independent signals **AGREE** — no ruling moved, as this version promised. §2 still sums
to **521 / 290 / 231** with every row satisfying designed = automated + blocked; §10's identities
(139 + 136 + 15 = 290; 290 + 177 + 46 + 12 − 4 = 521) still hold; all 16 spec OPs are transcribed
exactly once, with **no FIND/REPLACE residue, no leaked fence, no conflict marker and no broken
table row** (every edited row's column count matches its neighbour: 7 / 7 / 7 / 7 for the case
rows, 5 for `TC-3407` and the §8 rows, 6 for `R-22`).

**The verdict is FAIL on a single Medium, and it is the same defect class this version exists to
correct.** (ISS-01) The Changelog publishes an exhaustive, self-described *falsifiable* list —
"**Every site changed, enumerated so the sweep is falsifiable — thirteen sites, and these are
they**" — and the diff against the v2.10.0 text has **fourteen**. The unenumerated fourteenth is
**§5.7's `TC-3605`**, whose *Verifies* cell gains **FR-036**, **US-0046** and **DES-027 rule 6**.
That is not a cosmetic edit: it is the cross-document fold of **Doc 08 v2.13.0 cycle-1 ISS-02
(High)**, and it is the row on which Doc 08's FR-036 closure must rest its withdrawal clause. A
sweep that reports a complete site list over an incomplete basis is worth less than no sweep —
the document says so itself, in this very version, about the orphan check (§8). It is right, and
it is the reason this is a Medium rather than a Low.

## 2. Pass-bar check

- Score >= 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.20 | Both cycle-1 coverage deductions are repaired: the eighteenth block is cased (`TC-3540` widened), and FR-039's two un-instrumented clauses are now disclosed as case-less instead of assigned a false carrier. `TC-3605`'s new FR-036 / US-0046 attribution closes the last unattributed FR-036 clause ("withdrawal … before the ballot locks" — Doc 02 §4 FR-036, read verbatim). Deduction: ISS-02 (the widened `TC-3540` gives the `IProposalStore` seam a DES but no FR/US). |
| T2 Soundness | 20 | 98 | 19.60 | ISS-06 and ISS-08 are fixed **and correct against the code**: `UT-0894`/`UT-0896` do assert the eligibility chain and `UT-0891`/`UT-0899`/`UT-0901` do not; `UT-0902`'s third `it` checks exactly three named fields (`_verifier`, `_ballots`, `_ballotService`) undefined, which is what the softened cell now claims, with the stronger property marked **inferred**. **R-22 earns a promotion and the document declines it, with a reason** (`TD-RTM-02`, Doc 08 mid-review) — the right call, stated rather than left to look like an oversight. |
| T3 Traceability & IDs | 20 | 88 | 17.60 | Every id I resolved resolves: FR-036 (Doc 02 L895), US-0046 (Doc 05, FE-020 · EP-07), DES-027 **rule 6** ("Window and withdrawal", Doc 03 §10.13.14 L3576), FR-122/US-0133, DES-104 (proposal authorship). Doc 08's propagation claim is true as stated — §3.1's FR-039 row (L2083) cites `TC-0030`, `TC-1024`, `TC-3611` and its §7 entry 19 makes no Blocked-carrier claim. Deductions: ISS-01 (a traceability edit made outside the enumerated change record), ISS-02. |
| T4 Security & failure modes | 15 | 98 | 14.70 | Unchanged and, at `TC-3612`, improved: the `IS_INSECURE_MOCK` delegation discipline is intact and the *structural* unreachability claim is no longer asserted where only three named fields are checked — the honest statement of a gap a fourth differently-named holder would slip past. |
| T5 Completeness & testability | 15 | 90 | 13.50 | No placeholders; every fix lands at its own site with its own annotation; the §0.1 run series and §8 sweep are both now falsifiable enumerations. Deduction: ISS-01 — the version's own completeness guarantee is the thing that is incomplete. |
| T6 Convention compliance | 10 | 93 | 9.30 | MINOR bump correctly justified by the Medium-or-worse rework rule rather than by a mint; ISO-8601 throughout; `Status: In Review — rework cycle 2 of 5`; the v2.10.0 record retained. Deductions: ISS-03, ISS-04. |
| **Total** | **100** | — | **94%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding (detail in §4.1) | Required fix |
|----|----------|-----------|--------------------------------|--------------------------|--------------|
| ISS-01 | **Medium** | T5 / T3 | Changelog, v2.11.0 entry (L375–L382): "**Every site changed, enumerated so the sweep is falsifiable — thirteen sites, and these are they:**"; the unenumerated site is §5.7 `TC-3605` (L2544) | The diff against the v2.10.0 text has **fourteen** changed sites, not thirteen. The fourteenth is `TC-3605`'s *Verifies* cell gaining **US-0046**, **FR-036** and **DES-027 rule 6** — the fold of **Doc 08 v2.13.0 cycle-1 ISS-02 (High)**. It appears nowhere in the enumeration, nowhere in the Status narrative (which says "**All eight issues are taken at this version. Nothing is carried.**", implying the version's scope is the eight), and nowhere else in the document outside the row's own inline annotation. | Re-state as **fourteen** and add the site, naming the Doc 08 cycle-1 ISS-02 fold and the ids added (US-0046, FR-036, DES-027 rule 6); say in the Status that a ninth, cross-document change rides in this version. |
| ISS-02 | Low | T3 / T1 | §5.5, `TC-3540` *Verifies* cell (L2417): "US-0021, US-0133 · FR-013, FR-122 · DES-097 · DES-104 · **§10.13.14 seam**" | The widened case now covers **three** seams and names **three** design elements (DES-097 party · DES-104 proposals · §10.13.14 candidates) but only **two** FRs and **two** USs. The `IProposalStore` seam therefore has a `DES` and no `FR`/`US` — an attribution gap of exactly the class ISS-06 was. | Name the proposals seam's `FR`/`US`, or state explicitly that the seam inherits `FR-013`'s shim-sync guarantee and needs no separate id. |
| ISS-03 | Low | T6 | §0.1, **Pass (obs.)** vocabulary row (L1193): "…across a run series that reaches **R-21**" and the enumerated series ending "**R-21** (2026-09-21) … **97** `it`s" | The row amended for ISS-07 *because it had not aged* is already one run short at publication: **R-22** is minted in this same version (§9 L1824) and is a case-by-case run that the document itself says meets this bar. The 139 figure is correct (R-22 promotes nothing), but the sentence reads as the series' end rather than as the series behind the 139. | Add R-22 with "earns nothing — promotion deferred", or re-word to "the runs behind the **139**". |
| ISS-04 | Low | T6 | Status (L76) and Changelog (L424): "the two Lows carried from v2.9.0 … **this is their second deferral**" | The cycle-1 report said the same words about **v2.10.0** ("this is their second deferral"). Both cannot hold; at v2.11.0 the count is at least one higher than the report this version answers. The disposition (carry a Low explicitly by id, with a reason) is legitimate — the **counter** is not derivable. | State which touch is #1 and derive the number, or drop the ordinal: "carried at v2.10.0 and again here". |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4.1 Detail and evidence for the blocking issue

**ISS-01 — the fourteenth site.** I did not take the enumeration on trust and I did not take the
spec on trust: I diffed the live file against the PM's pre-application backup of the v2.10.0 text
(`scratchpad/07.v2100.bak`, 2429 lines to 2568). The diff is **fifteen hunks in fourteen sites**:
header Version (L5) · Status block (L5–L80) · the new Changelog entry (L362–L426) — together
enumeration item (1) — then §0.1 L1193 (2) · §0.2 L1215 (3) · §8 L1774 (10) · §8 L1778–L1780 (9) ·
§8 L1795 (11) · §9 L1823–L1824 (12) · §10 L1847 (13) · §5.1 L2043 (4) · §5.3 L2175 (5) ·
§5.5 L2417 (6) · §5.7 L2503 (7) · **§5.7 L2544 — `TC-3605`, in no item** · §5.7 L2551 (8).
`grep -n "TC-3605"` over the whole file returns five lines, and the only one that records the
change is the row's own annotation; the entire v2.11.0 header and Changelog (lines 5–426) contain
**no** `TC-3605`, `FR-036` or `US-0046` — the two hits in that range fall inside the *retained
v2.10.0 record*.

The change itself is **correct, well-argued and worth making** — I checked every claim it rests on.
Doc 02 §4 `FR-036` (L895) does end "**and allow withdrawal of a candidacy at any time before the
ballot locks**"; `US-0046` is "Stand for office where I actually live (FE-020 · EP-07)"; Doc 03
**DES-027 rule 6** (L3576) is literally titled "**Window and withdrawal**" and says withdrawal is
permitted at any time before the ballot locks, deferring the lifecycle to DES-028's; and Doc 08
v2.13.0's FR-036 row (L2081) closes the requirement on `TC-3597`, `TC-3598`, `TC-3600`–`TC-3602`,
`TC-3615`, `TC-3616` — **none of which is the withdrawal case**. So the fold is exactly right and
the RTM needs it.

That is what makes the omission Medium rather than Low. The consequence is not aesthetic:

1. **The guarantee is falsified on its own terms.** "Every site changed … thirteen sites" is
   offered as the version's falsifiability device. A reader who exercises it finds a fourteenth.
   This document spent this version teaching a reader that its sentences are now as reliable as its
   numbers, and corrected two sweeps (§5.7's arithmetic, §8's seventeen-block basis) for precisely
   this — a count published over an incomplete basis. The v2.10.0 entry beside it enumerates
   **fourteen** sites and is complete; the discipline exists and slipped here.
2. **The missing site is the cross-document one.** The Doc 08 rework will defend FR-036's
   withdrawal clause by pointing at `TC-3605`. Anyone auditing whether Doc 07 carried its half of
   that fix reads Doc 07's change record first — and the change record says it did not.
3. **It is an id-bearing traceability edit**, not prose: three ids enter a *Verifies* cell. The
   document's own `TD-RTM-03` defect class is misattribution; an unrecorded attribution is the same
   family.

This routes to the **tester**, not to the PM: the rework spec's **OP 10** contains the `TC-3605`
change in full and the PM transcribed it faithfully. What is missing is the spec's own OP 2 / OP 3
accounting for it — an authoring omission, and the post-transcription checklist ("After
transcription — what the PM should see") repeats "thirteen sites" without catching it.

### 4.2 Cycle-1 issue disposition — every one verified FIXED

| Cycle-1 ID | Sev | Status | Evidence I used (independent of the document) |
|---|---|---|---|
| ISS-01 | Medium | **FIXED** (six sites, all checked) | §5.7 L2503 now reads "**640 + 97 + 2 = 739**" and names the `+2` as `UT-0871` extended at Doc 06 **v2.10.0** in a **fifth file**; §9's R-21 cell retracts "v2.11.0/v2.11.1 that landed inside them" and quotes Doc 06 v2.11.1 §3's web addend; §8's orphan check is re-based on **eighteen** blocks, maps `UT-0871` to `TC-3540` and **rules** ("no case minted — one parameterised `it` over a seam list"); §8's file row no longer says "1 test, green"; §0.2's dated row is annotated rather than rewritten (honest); `TC-3540` is re-scoped from `IPartyStore` to all three seams. **Checked against `apps/web/test/sdk-types-sync.test.ts` itself:** one loop over `IPartyStore` / `IProposalStore` / `ICandidateStore`, one `it` template — the cited `it` text matches the template verbatim — and the `ICandidateStore` instance does guard this suite's own seam. **R-22 re-run by me: 3 passed / 3**, each named individually. |
| ISS-02 | Medium | **FIXED** | §8's reverse sweep now reads "**Five criteria have no executing test. TWO of the five are carried by NO case at all**": FR-039 and FR-081 are named case-less on the same pattern; `TC-3316` / `TC-3322` / `TC-3419` are the three real Blocked carriers. **The false ids are dropped, not corrected** — a grep for `TC-3320` returns 8 lines and **every one is either the retraction narrative or the `TC-3320` case row itself (L1956)**; no line asserts it as an FR-039 carrier. The propagation check is true: Doc 08 §3.1 L2083 cites `TC-0030`, `TC-1024`, `TC-3611`; §7 entry 19 (L2422) classes FR-039 `G-NOMECH` with no carrier claim. The Doc 08 Changelog residue is correctly recorded and correctly **not** fixed from here. |
| ISS-03 | Low | **FIXED** | §10 L1847: "**Twelve cases** … TC-0028, TC-0029 (2) · TC-3313..TC-3316 (4) · TC-3317..TC-3322 (6); **2 + 4 + 6 = 12**" — the figure is now derived from the enumeration beside it. A grep for the old "Ten cases" returns 0. |
| ISS-04 | Low | **FIXED** | §8 L1778–L1780 map `TC-3407` (UT-0891, UT-0894 · UT-0896, UT-0899, UT-0901) and `TC-3411` (UT-0895 · UT-0897 · UT-0904); "Cases mapped" re-derived 8 to 10, 13 to 15, 6 to 7, each with old and new stated in the cell. The forward sweep in §8 carries the same annotations, so the two places agree. |
| ISS-05 | Low | **FIXED** | `TC-3470` (L2175) is restated to what the flipped `it` asserts and annotated on the `TC-3471`/v2.5.0 precedent. **Checked against `packages/ui/test/PrivacyStatus.test.tsx`:** the `it` asserts the presence of "Open tier" and "Our own records can link what you do here to your account.", and the **absence** of "Anonymous" and "Nothing you do here is linked to you" — the row's Expected cell is now that, clause for clause. Evidence cite refreshed 14/14 to **25/25 in R-21**, and `packages/ui` is 25 in my run. |
| ISS-06 | Low | **FIXED** | `TC-3407` (L2043) cites `UT-0891`, **UT-0894**; `UT-0896`, `UT-0899`, `UT-0901`, with per-clause attribution spelled out. **Checked against the test files:** `UT-0894` is "you may stand only where you live … maturation … the two engineer-chosen constants"; `UT-0896` carries "refused with NOT_COUNTING_ELIGIBLE … the seam was asked with scope CANDIDACY", "NOT_MATURED before the seam is even asked", "ALREADY_NOMINATED" and the endorsement rule — these and not the other three are the eligibility chain. |
| ISS-07 | Low | **FIXED** (see my ISS-03) | §0.1 L1193 now defines the label by the **case-by-case bar** and lists the run series 2026-08-09 through R-21 with per-run `it` counts, and re-states that a full-suite green run has never earned it. |
| ISS-08 | Low | **FIXED** | `TC-3612` (L2551) separates **Asserted** (three named fields undefined) from **Inferred** (per-call construction implies no read reaches a counting gate) and says a fourth differently-named holder would pass. **Checked against `packages/sdk/test/candidates.test.js` UT-0902:** the third `it` is exactly three toBeUndefined assertions on `_verifier`, `_ballots`, `_ballotService` — no own-property enumeration. |

### 4.3 What I verified and found sound (recorded so cycle 3 need not re-do it)

- **Suites green, by my own run.** `npm test` at the repo root: **739 passed / 739, 0 failed,
  exit 0** — contracts **95** · protocol **178** · sdk **287** · ui **25** · indexer **16** ·
  web **138** (95+178+287+25+16+138 = 739). `apps/web` per-file shows
  `test/sdk-types-sync.test.ts` **3 tests** and `test/candidates.test.tsx` **20**.
- **R-22 reproduced case by case**, the claim it is cited for: `IPartyStore`, `IProposalStore` and
  **`ICandidateStore`** — 3 passed / 3, each reported individually under `--reporter=verbose`.
- **Lint / layering:** `npm run lint:deps` gives "7 workspace package(s) checked — layering OK",
  exit 0. No product, test or configuration path is modified in the working tree — the four
  modified paths are `artifacts/memory-index.json` and Docs 03 / 07 / 08, the rest untracked
  session records. R-22's "tree state unchanged in kind" is accurate.
- **Gate audit:** `node hooks/run_gates.cjs --audit` gives "**138 Must rows, 19 COMPLETE, 119
  OPEN**", published §9 figures identical, "**the two independent signals AGREE**". **No ruling
  moved at this version, exactly as it claims.** Doc 07 v2.11.0 shows BLOCK — no report for this
  version (this report is what clears it) and Doc 08 v2.13.0 BLOCK — report exists but fails the
  bar (its own cycle). Both expected.
- **No count moved, re-derived not read.** §2's table sums to **521 / 290 / 231** and **every row**
  satisfies designed = automated + blocked/no-mechanism (machine-checked over all rows, zero
  mismatches). §10 publishes 521 · 290 · 139 · 136 · 15 · 177 · 46 · 12 · 0 — identical to
  v2.10.0; 139 + 136 + 15 = **290**; 290 + 177 + 46 + 12 − 4 = **521**.
- **Transcription integrity.** All **16** OPs present exactly once. No FIND / REPLACE WITH marker,
  no four-backtick fence, no conflict marker anywhere in the file. Every edited table row has the
  same column count as the row above it (7 · 7 · 7 · 7 · 5 · 5 · 6 · 3 · 2), so no cell boundary
  was lost to an unescaped pipe. The four pre-existing cell-count anomalies noted at cycle 1 are
  untouched and still out of scope.
- **The spec's own post-check is wrong in two places, and neither is a document defect.** A line
  count for `TC-3320` is **8**, not the predicted 1 (the retraction narrative quotes the id four
  times, which is correct behaviour), and for "640 + 97 + 2 = 739" it is **6**, not 4. The
  *document* is right; the spec's predicted numbers are not. Flagged so cycle 3 does not chase them.
- **Carried v2.9.0 Lows.** ISS-02 (missing §10 separator) and ISS-04 (clause-(e) surface-vs-claim)
  are carried **explicitly by id with a reason** in both the Status and the Changelog — a
  legitimate disposition for a Low, and named rather than allowed to go quiet. Only the ordinal is
  questioned (my ISS-04).
- **The deliberate non-promotion is the right call.** `TC-3540` meets the Pass (obs.) bar on R-22
  and is held at Pass (inh.) because promoting it would move §2/§10 **and** Doc 08 §6/§9 while
  Doc 08 v2.13.0 is mid-review. Moving half a synchronised pair is `TD-RTM-02`. Deferred, stated,
  and registered as owed — I endorse it.
- **Band collision (Doc 04 §14 reserving `TC-3592`–`TC-3699`)** is unchanged, still disclosed and
  still routed to the architect. **No issue is raised against Doc 07 for it.**

## 5. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owning role of Doc 07.** The rework MUST produce
a **new version** (bump the semver, `Status: In Review`) and re-enter this loop as **cycle 3 of 5**.
ISS-01 is the only blocking issue and it is a **change-record** fix, not a content fix — the
`TC-3605` edit itself is correct and must **stay**. ISS-02..ISS-04 are non-blocking and sit in the
same three edits. I score and list only — **I have edited nothing.**

Two items route **outward** and neither blocks this document:

- **architect (Doc 04):** §14 must re-narrow the `TS-V1-*` floor to `TC-3620`. Unchanged from
  cycle 1; Doc 07 has recorded and routed it.
- **tester (Doc 08 rework):** Doc 07 correctly reports that **Doc 08 v2.13.0's §3.1 FR-039 row and
  §7 entry 19 are clean** but its **v2.13.0 Changelog entry repeats the false carrier claim** as
  "`TC-3320`/`TC-3611`'s note". I confirmed both halves. It must be fixed in the Doc 08 rework, and
  Doc 08's FR-036 row (L2081) should now be able to cite `TC-3605` for the withdrawal clause.

**Merge sign-off is NOT withheld by this report and is not at issue here.** The code under test is
already merged at `12fe4a6` (PR #22) under the Doc 06 v2.11.1 review; this cycle reviews a
**document**, and no product code, test or configuration changed. My Gate-2 position is unchanged
and stated for the record: with **119 open Must rows** the Gate-2 traceability criterion is **NOT
MET** — `--audit` reports 138 Must rows, 19 COMPLETE, 119 OPEN, the two independent signals AGREE.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is **FAIL**, not ESCALATED.

---

## 7. Addendum (recorded after the scoring, during the same review session)

While I was writing this report the tester's Doc 08 rework landed: `--audit` now reads
**08-traceability-matrix.md v2.14.0 — no report for this version** (its own cycle 2, not mine).
**Two facts from v2.14.0 bear on the score above and neither changes it:**

1. **ISS-01 is corroborated, not weakened.** Doc 08 **v2.14.0's FR-036 row (L2224)** now cites
   **`TC-3605`** among its evidence cases — it did not at v2.13.0 (L2081). So the RTM does rest
   FR-036's withdrawal clause on the very Doc 07 row whose FR-036 / US-0046 attribution Doc 07's
   own change record does not mention. That is precisely the audit path ISS-01 says is broken, now
   demonstrated rather than predicted.
2. **The RTM figures did not move.** After the Doc 08 touch, `--audit` still reports **138 Must
   rows, 19 COMPLETE, 119 OPEN**, published and derived signals **AGREE**. Doc 07 v2.11.0's claim
   that it changes no ruling holds against the newer RTM as well.

Doc 07's statements *about Doc 08 v2.13.0* (§3.1 FR-039 row and §7 entry 19 clean; the v2.13.0
Changelog entry not clean) were true of v2.13.0 when I checked them and are recorded here as
as-of. Whether v2.14.0 cleared the Changelog residue is for the **Doc 08 cycle-2 reviewer**, not
for this report.
