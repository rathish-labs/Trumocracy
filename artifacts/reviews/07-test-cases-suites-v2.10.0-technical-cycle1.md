# Document Review Report — `docs/07-test-cases-suites.md` v2.10.0 (technical, cycle 1 of 5)

> Produced by the **document-review** skill. The reviewer scores and lists issues only and never
> edits the reviewed document or any code. Independence: the **tester** owns this document; this
> review was run by **reviewer-qa** (Rafael Duarte), PM-assigned and recorded before dispatch in
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.10.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 91%
Critical: 0
High: 0
Medium: 2
Low: 6
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

v2.10.0 mints twenty-eight cases (`TC-3592`..`TC-3619`) into a new §5.7 `TS-CANDIDATE` suite, re-statuses
four pre-existing cases and re-derives every count. **The core of the drop verifies clean and it
verifies hard:** I re-ran `npm test` from the repo root (**739/739, 0 failed, exit 0** — contracts 95 ·
protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138) and all four case-by-case runs (protocol 27/27,
sdk 43/43, ui 7 passed / 18 skipped of 25 under `-t "UT-0903"`, web 20/20); I machine-extracted the
**97** `it` names cited across the 28 new cases and matched them against the four test files:
**97 cited, 97 found verbatim, 0 missing, 0 cited twice, 0 orphaned inside the seventeen blocks**, and
every per-block split in §5.7's arithmetic paragraph (6=5+1 · 5 · 4=2+2 · … · 4) reproduces exactly.
Every §2 row satisfies designed = automated + blocked/no-mechanism and the table sums to
**521 / 290 / 231** on the nose; §10's identities (139+136+15=290; 290+177+46+12−4=521) hold; all 30
spec OPs transcribed exactly once, with no residue and no broken table row in any edited region.
**The verdict is FAIL on two Mediums, both inside the sweep this version offers as its own
falsifiability guarantee.** (ISS-01) The drop's `UT` footprint is larger than the seventeen blocks the
sweep covers: the suite went 640 → **739**, the four candidate blocks hold **97** `it`s, and
640 + 97 = **737**. §5.7 asserts the 97 take the suite to 739, and §9's R-21 row explains the missing
two as "added at Doc 06 v2.11.0/v2.11.1 **that landed inside them**". Doc 06 v2.11.1 §3 says otherwise,
in terms: "+ **2 (UT-0871 extended to two more seams, v2.10.0)**" — `apps/web/test/sdk-types-sync.test.ts`,
a different file, a different block, a different version, and one of the two new assertions guards the
**`ICandidateStore`** shim, i.e. this suite's own seam. Those two assertions are swept by nothing in
this version, and §8 still describes that file as "1 test, green". (ISS-02) The reverse sweep claims
each of four un-instrumented acceptance criteria "is carried by an existing **Blocked** case" and cites
`TC-3320` / `TC-3612` for FR-039; `TC-3612` carries no FR-039 note (`TC-3611` does, and it is
**Pass (obs.)**, not Blocked) and `TC-3320` is an FR-067 case — FR-039's voter-scope and tie-break
clauses are carried by **no case at all**, which is the very condition the document discloses
explicitly for FR-081 one sentence later.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`91%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 90 | 18.00 | Nine FRs read clause by clause; the six open rows each name the failing clause and the case that will close it — genuinely strong work. Deductions: FR-039's two un-instrumented clauses are carried by no case (ISS-02); the drop's `UT-0871` `ICandidateStore` shim assertions are covered by no TC (ISS-01). |
| T2 Soundness | 20 | 93 | 18.60 | The four re-status rulings are argued against Doc 02 §4/§8 and Doc 03 v2.16.0 §10.13.14, and each survives checking. **No case whose expected result states an on-chain or Definition-B property was promoted on a v1 test** — TC-3313..TC-3322 are held Blocked on exactly that ground, and TC-3407/TC-3411 state no on-chain property. Deductions: ISS-06, ISS-08. |
| T3 Traceability & IDs | 20 | 85 | 17.00 | 97/97 `it`s verbatim, no duplicate, no orphan; every `US`/`DES`/`FR` id cited in §5.7 resolves in Docs 02/03/05; SCR ids follow §10.12.4 with the inversion disclosed. Deductions: ISS-01 (unswept 18th block, false +2 account, stale §8 row), ISS-02 (wrong carrier ids), ISS-04 (§8 maps no implementing test for the two newly automated cases). |
| T4 Security & failure modes | 15 | 96 | 14.40 | `IS_INSECURE_MOCK` discipline, capability-absence cases, the ship-dark flag case, the FR-131(b) operator-visibility disclosure and the refusal to claim unlinkability are all present and asserted. |
| T5 Completeness & testability | 15 | 93 | 13.95 | No placeholders; the fourteen-site enumeration is complete and falsifiable (I checked it against the diff hunks); edge cases (tie, zero votes, malformed region, truthy-not-true consent) covered. Deduction: ISS-03. |
| T6 Convention compliance | 10 | 94 | 9.40 | ISO-8601, id scheme, MINOR bump earned by a mint, Status/Changelog discipline. Deductions: ISS-05, ISS-07. |
| **Total** | **100** | — | **91%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding (detail in §4.1) | Required fix |
|----|----------|-----------|--------------------------------|--------------------------|--------------|
| ISS-01 | **Medium** | T3 / T1 | §5.7 Context para (L2364); §9 run R-21 (L1685); §8 row `apps/web` / `test/sdk-types-sync.test.ts` (L1636) | The suite moved 640 to **739** but the four candidate blocks hold **97** `it`s, and 640 + 97 = **737**. The missing 2 are mis-located, mis-versioned and swept by nothing: they are `UT-0871` extended to `IProposalStore` and **`ICandidateStore`** at Doc 06 **v2.10.0**, in a fifth file. The drop's `UT` footprint is **eighteen** blocks, not seventeen. | Re-state +99 as 97 + 2 with the 2 named; widen the v2.10.0 orphan check to eighteen blocks and rule on the two `UT-0871` assertions; refresh the §8 row. |
| ISS-02 | **Medium** | T3 / T1 | §8, "Orphan check (v2.10.0 …)" reverse-sweep sentence (L1657) | "Each is carried by an existing **Blocked** case — `TC-3320`/`TC-3612`'s FR-039 note …" is false for FR-039: `TC-3612` has no FR-039 note, `TC-3611` (which does) is **Pass (obs.)**, and `TC-3320` is an FR-067 case. FR-039's voter-scope and tie-break clauses are carried by **no case at all**. | Fix the ids and state FR-039's case-less clauses on the FR-081 pattern; confirm Doc 08 v2.13.0's FR-039 row did not inherit the citation. |
| ISS-03 | Low | T5 | §10, "Cases **Blocked**" measure (L1716) | "**Ten cases** keep their Blocked status with a corrected reason" — the same parenthesis enumerates **twelve** ids (2 + 4 + 6). | "Twelve", or narrow the enumeration. |
| ISS-04 | Low | T3 | §8 automation table (L1640–L1642) vs §2 `TS-GOV2` row and §10 | §2 and §10 now count `TC-3407` and `TC-3411` as automated, but §8 maps neither: its three new rows cover only `TC-3592`..`TC-3599` (8), `TC-3600`..`TC-3612` (13), `TC-3614`..`TC-3619` (6), so §8 no longer reconciles with the 290. | Add the two cases to the protocol / sdk / web rows and re-derive "Cases mapped". |
| ISS-05 | Low | T6 / T3 | §5.3, `TC-3470` (L2038) | The drop **flipped** the `UT-0750` anon `it` this row maps (Doc 06 v2.11.1: "UT-0750's anon assertion FLIPPED"). No v2.10.0 annotation, and the evidence still cites "14/14, 2026-08-25" — a run the file no longer produces (ui is 25). The `TC-3471` / `UT-0751` precedent at v2.5.0 did annotate exactly this. | Annotate `TC-3470` on the `TC-3471` precedent; refresh the evidence cite to R-21. |
| ISS-06 | Low | T2 / T3 | §5.1, `TC-3407` (L1904) | The row's third clause is "eligibility checked by code", and its note claims all three clauses are asserted — but none of the cited blocks (`UT-0891`, `UT-0899`, `UT-0901`) asserts eligibility; `UT-0894` and `UT-0896` do, and Doc 03's own FR-081 evidence row cites `UT-0896`. | Add `UT-0894` and/or `UT-0896` to the automation cell. |
| ISS-07 | Low | T6 | §0.1 status vocabulary, **Pass (obs.)** row (L1054) | The definition still reads "executed by the tester in this session (**2026-08-09 or 2026-08-25**)" while §10 now rests **139** cases on that label across R-18, R-19, R-20 and R-21. The *Not run* row was amended in place as it aged; this one was not. | Amend the row to name the run series and the case-by-case bar it now encodes. |
| ISS-08 | Low | T2 | §5.7, `TC-3612` expected result (L2412) | "every read **structurally cannot reach a counting gate**" is stronger than the implementing `it`, which asserts three named fields are `undefined` rather than enumerating own properties. True of the code, but stated as asserted where neighbouring rows (`TC-3598`, `TC-3609`, `TC-3611`, `TC-3618`) separate asserted from inferred. | Soften to what the three-field check establishes, or mark the inference. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### 4.1 Detail and evidence for the two blocking issues

**ISS-01 — the eighteenth block.** I counted the four candidate blocks mechanically, not from the
document: `packages/protocol/test/candidates.test.js` 27 (`UT-0891` 6 · `UT-0892` 5 · `UT-0893` 4 ·
`UT-0894` 7 · `UT-0895` 5), `packages/sdk/test/candidates.test.js` 43 (10 · 9 · 6 · 4 · 5 · 6 · 3),
`packages/ui/test/PrivacyStatus.test.tsx` `UT-0903` 7, `apps/web/test/candidates.test.tsx` 20
(4 · 5 · 7 · 4) — **97**, exactly as §5.7's arithmetic paragraph states, and exactly what the four
case-by-case runs report. The repo total is **739** and the pin's previous total was **640**, so the
drop added **99** `it`s. Doc 06 v2.11.1 §3 spends the difference explicitly:

> **web 138** = 116 through v2.9.0 [...] + **2 (UT-0871 extended to two more seams, v2.10.0)** +
> 18 (UT-0904..UT-0907 candidate web flow, v2.10.0) + 2 (UT-0905 flag-off, UT-0906 sign — one each,
> v2.11.0)

The v2.11.0 pair is therefore already **inside** the 20 web `it`s this document maps; the pair that is
not accounted for is `UT-0871`'s, added at **v2.10.0** in `apps/web/test/sdk-types-sync.test.ts`. I
confirmed the file against `git show --stat 12fe4a6` (modified by this drop, 40 changed lines) and by
running `apps/web` per-file: `candidates.test.tsx` 20, `sdk-types-sync.test.ts` **3** (it was 1 at R-20).
Doc 06 §7 item 23 names what the two new assertions guard — `IProposalStore` and **`ICandidateStore`**,
the seam §5.7 is about. Consequences in this document: §5.7's "taking the suite 640 → 739" is
arithmetically false; §9's reconciliation names the wrong block and the wrong version; the v2.10.0
orphan check's "Material orphan count for this drop: 0" is computed over seventeen blocks when the drop
touched eighteen; §8's row for that file still says "1" and cites R-12; and `TC-3540`, the only case
mapping `UT-0871`, is scoped to "`IPartyStore`" alone, so the two new assertions are cased by nothing.
None of this moves a count in §2 or §10 (both are case counts, not `it` counts) and none of it
falsifies a Must-row ruling — which is why it is Medium and not High.

**ISS-02 — the FR-039 carrier.** The reverse sweep names four acceptance criteria with no executing
test and then asserts a Blocked carrier for each. For FR-039 it cites `TC-3320` and "`TC-3612`'s FR-039
note". `TC-3612` is "`IS_INSECURE_MOCK` discipline, and the structural reason a read can never reach a
gate" and mentions FR-039 nowhere; the FR-039 note lives on **`TC-3611`**, whose status is
**Pass (obs.)** — so even after the id is corrected, the sentence's claim ("an existing **Blocked**
case") does not hold. `TC-3320` verifies "US-0077 · FR-067" and is Blocked on an on-chain advancement
guard, not on voter scope or tie-break. A grep of every FR-039 mention in the document returns only
`TC-1024` (FR-026/FR-039, Pass) and `TC-3611`. So FR-039's two un-instrumented clauses have **no case**,
Blocked or otherwise. The document already knows how to say that — it says it, well, for FR-081's
"with its state (active/inactive)" in the very next sentence — which is what makes the FR-039 line a
defect of disclosure rather than a typo. The risk I care about as the RTM's accountable verifier is the
tail of the same sentence: "each is the named blocker on its Must row in Doc 08 v2.13.0."

### 4.2 What I verified and found sound (recorded so the next cycle need not re-do it)

- **The 97 `it` names.** Machine-extracted from the 28 automation cells and matched against the four
  test files: **97 cited, 97 found verbatim, 0 missing, 0 near-miss, 0 cited twice, 0 `it` in the
  seventeen blocks left uncited.** `UT-0903`'s block has exactly the 7 `it`s `TC-3613` names; the other
  18 `it`s in that file belong to `UT-0750`..`UT-0759` and are correctly out of scope.
- **The per-block partition.** Every split in §5.7 and in the §8 orphan check (6 = 5 + 1 · 5 ·
  4 = 2 + 2 · 7 = 5 + 2 · 5 · 10 = 8 + 1 + 1 · 9 = 4 + 1 + 4 · 6 · 4 · 5 = 3 + 2 · 6 = 4 + 2 · 3 · 7 ·
  4 · 5 = 4 + 1 · 7 = 4 + 3 · 4) reproduces against the files.
- **R-21 is real.** `npm test` at the repo root: **739 passed / 739, 0 failed, exit 0** — contracts 95 ·
  protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138, identical to §0.2 and §9. Case by case:
  protocol **27/27**, sdk **43/43**, ui **7 passed / 18 skipped (25)** under `-t "UT-0903"`, web
  **20/20** — identical. The tree-state disclosure in §9 is accurate in kind (no product, test or
  configuration path modified) and `HEAD` is `12fe4a6` as stated.
- **The counts.** §2's suite table sums to **521 / 290 / 231** and **every row** satisfies
  designed = automated + blocked/no-mechanism. §10: 521 designed; 290 automated (56%); 139 + 136 + 15 =
  **290**; 290 + 177 + 46 + 12 − 4 = **521**; Blocked 140 + 32 + 3 + 1 + 1 = **177**; No mechanism
  10 + 35 + 1 = **46**; the counting-convention paragraph's own base advances consistently
  (199 → 229, 176 → 177, 48 → 45, total **459**) and is honest that it still agrees with nothing else,
  under `TD-RTM-02`.
- **The four re-status rulings.** `TC-3407` and `TC-3411` state no on-chain property, and every clause
  of `TC-3411` maps to an `it` I read (`UT-0895`, `UT-0897`, `UT-0904` — the same set Doc 03 v2.16.0's
  evidence map assigns to FR-085). `TC-3419` to Blocked is the right kind-change: `askQuestion` /
  `recordAnswer` / `closeQuestionPhase` do not exist in `packages/sdk/src/candidates.js`. `TC-3476`'s
  FR-085 delink is argued on subject matter (enrolment vs candidacy) and costs no coverage. The ten
  (twelve) rows held Blocked on Definition-B / on-chain / E2E grounds are **not** promoted on v1 tests,
  which is the discipline this session was most at risk of losing.
- **The band collision is disclosed, not hidden.** Doc 04 **v1.7.1 §14** does still reserve
  `TC-3592`–`TC-3699` for the six `TS-V1-*` suites — I read the text. Doc 07 states the consequence in
  four places, names the required re-narrowing to `TC-3620`, cites the OPEN-30 pattern and the routing
  record, and says the two documents disagree until the architect's touch lands. **No issue is raised
  against Doc 07 for this.**
- **Transcription integrity.** All **30** spec OPs are present exactly once; the five OPs whose FIND is
  re-stated by their REPLACE are the anchor-retaining ones and behave correctly. No `FIND:` /
  `REPLACE WITH:` marker, fence or conflict marker leaked. The `git diff` hunk set matches the
  Changelog's fourteen-site enumeration exactly, with no unannounced edit. Four table rows elsewhere in
  the file have a cell-count anomaly (L2209, L2233, L2302, L2315) — all **pre-existing**, outside every
  hunk of this version, and not raised here.
- **Id resolution.** Every `US`, `DES` and `FR` id cited in §5.7 resolves in Docs 05, 03 and 02
  respectively. SCR ids follow Doc 03 §10.12.4 (SCR-15 nomination consent, SCR-22 feedback widget,
  SCR-23 debate schedule and vote) and the §5.2 inversion is disclosed at the suite and in §11.

### 4.3 Carried from the v2.9.0 PASS

Two of the four Lows the v2.9.0 report carried are **folded here and I verified both folds**: ISS-01
(the free band is restated in the Status line and in §5.7, with the Doc 04 §14 collision and the
routing) and ISS-03 (§2's enumeration paragraph extended for this drop). The other two — v2.9.0
**ISS-02** (missing separator in §10) and **ISS-04** (the clause-(e) surface-vs-claim framing) — are
carried **explicitly by id with a stated reason**, which is a legitimate disposition for a Low; they are
not re-scored against this version, but this is their second deferral and they are owed at the next
touch.

## 5. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owning role of Doc 07.** The rework MUST produce a
**new version** (bump the semver, `Status: In Review`) and re-enter this loop as **cycle 2 of 5**.
ISS-01 and ISS-02 are the blocking pair; ISS-03..ISS-08 are non-blocking and sit in the same edits.
I score and list only — **I have edited nothing**.

Two items route **outward** and neither blocks this document:

- **architect (Doc 04):** §14 must re-narrow the `TS-V1-*` floor to `TC-3620`. Doc 07 has already
  recorded and routed this; it is the architect's touch, and it is the OPEN-30 pattern.
- **tester / the Doc 08 reviewer:** check that Doc 08 v2.13.0's FR-039 row does not name `TC-3612` or
  `TC-3320` as its blocker (ISS-02's propagation path).

**Merge sign-off is NOT withheld by this report and is not at issue here.** The code under test is
already merged at `12fe4a6` (PR #22) under the Doc 06 v2.11.1 review; this cycle reviews a **document**.
My Gate-2 position is unchanged and is stated for the record: with **119 open Must rows** the Gate-2
traceability criterion is **NOT MET**, independently confirmed by `node hooks/run_gates.cjs --audit`
("138 Must rows, 19 COMPLETE, 119 OPEN … the two independent signals AGREE"), which also corroborates
the Must-count movement this version announces. Docs 07 and 08 both show **BLOCK — no report for this
version** in the audit; for Doc 07 that is exactly what this report exists to clear, and for Doc 08 it
is its own reviewer's cycle.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is **FAIL**, not ESCALATED.
