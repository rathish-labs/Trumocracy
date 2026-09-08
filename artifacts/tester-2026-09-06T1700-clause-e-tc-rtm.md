# Tester session note — 2026-09-06T17:00 — FR-131 clause (e): Doc 07 v2.7.0 + Doc 08 v2.10.0

```
Role:    tester (Ji-woo Park) — owner of Doc 07 (Test Cases) and Doc 08 (RTM, author)
Branch:  build/v1-cascade-and-release-prep (working tree at d526910 + the uncommitted
         engineer change set of artifacts/engineer-2026-09-06T1530-endorsement-copy.md)
Trigger: Approver ruling 2026-09-06 (Rathish Kumar) — FR-131 clause (e) APPROVED,
         "let Doc 08 reopen and re-close through its loop"
         (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 item 3).
Output:  ONE anchored spec for the PM's mechanical applier —
         artifacts/tester-2026-09-06T1700-clause-e-spec.md (31 OPs: 18 Doc 07, 13 Doc 08).
Scope:   I edited NEITHER document directly, no other document, and no code or unit test.
```

## What I did

1. **Read the requirement and its acceptance criteria, not the summary.** Doc 02 **v2.17.1
   (Approved** — cycle-2 business review PASSED 2026-09-06**)** §4.45 clause (e), the widened
   closing sentence, and — decisively for this session — **§8 FR-131 Scenario 8** (grade-8
   reader test; public-by-design rule; the safe harbour with its v2.17.1 "no contrary claim
   elsewhere in the same string" qualifier; and "where the safe-harbour and the reader test
   disagree, **the reader test governs**") and **§8 FR-131 Scenario 9** (the absence test over
   **every** public-facing surface in **every** language, where "a claim that contains none of
   the four banned words still FAILS"). Also read Doc 04 v1.5.0 §0.5 S4/S5 + §13 OPEN-27 + §14
   register, Doc 06 v2.6.0 §3/§7 item 26, the engineer's note, and **UT-0889 itself** in
   `apps/web/test/safety-surfaces.test.tsx`, `it` by `it`.

2. **Ran the suites myself (run R-18).**
   - `npm test` from the repo root: **624 / 624 pass, 0 failed**, exit 0 — contracts 95 ·
     protocol 151 · sdk 244 · ui 18 · indexer 16 · web **100**. Matches the engineer's claim.
   - Then, because a full-suite run is only **file** granularity under this project's own
     Pass (obs.) convention, a **second, case-by-case run**:
     `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in
     `apps/web` → **5 passed, 20 skipped (25)**, each `it` name reported green individually.
     That second run is what earns TC-3570..TC-3574 their **Pass (obs.)**.

3. **Doc 07 → v2.7.0, In Review (18 OPs).** Minted **TC-3570..TC-3575** from the top of the
   free range (last minted id was TC-3569; Doc 04 §14 reserves TC-3570–TC-3699 for `TS-V1-*`,
   so these six come from the bottom of that band, in order, and TC-3576–TC-3699 still stand).
   Placed in `TS-ADV-02` (RISK-02) beside TC-2614 and TC-3564..TC-3567. Recorded run **R-18**;
   corrected **TC-3543**; discharged all three v2.6.0 Lows; re-derived every affected count.

4. **Doc 08 → v2.10.0, In Review (13 OPs).** FR-131 row: clause (e) + its Scenario 8/9 criteria
   added to the requirement column, UT-0889 and TC-3570..TC-3575 added to the chain and
   evidence, and the ruling recorded. Also §4 sweep, §6 dashboard + convention note + DoD check,
   §7 entry 117 + update note, §8 change-impact row, §9 tests-green row + tester sign-off, pins.

## Decisions made — and the reasoning that matters

- **TC-3575 is the decision of this session.** Scenario 8 is a duty about *a string*; **Scenario
  9 is a duty about a *population*** — every public-facing surface, every language, README
  included, zero claims, banned words irrelevant. The only instrument specified for it is
  **Doc 04 §0.5 S5** (the build-failing FR-131 claims denylist over `apps/web` and
  `packages/ui`), and **S5 is specified and not built**. I checked what does exist: UT-0857,
  UT-0868 and UT-0884 are **DES-085 jargon** scans ("wallet", "seed phrase", "blockchain"…)
  over *enumerated per-drop strings* — they are not the FR-131 denylist and **would have caught
  neither string this drop fixed**, which is exactly how "We never learn which party you
  support" survived the 2026-09-05 sweep. So I minted **TC-3575 Blocked — instrument absent**
  rather than letting TC-3570..TC-3574 stand in for Scenario 9. Recording five guarded strings
  as satisfying "every surface in every language" was the single easiest false pass available
  at this version. The gap is now a **named, traceable case** a Gate-2 verifier can see without
  reading an argument.
- **Blocked, not No mechanism.** Doc 07 §10 defines Blocked as "code, circuit, environment or
  **instrument** absent" and No mechanism as "the product has nothing to test". Here the product
  has abundant surface; the *test* is what is missing. Blocked +1 (175 → 176).
- **One TC per `it` for UT-0889** (the UT-0887/TC-3564..TC-3567 precedent), not one row for the
  block (the TC-3568/UT-0759 precedent): these five assert five different strings on three
  different surfaces, not four paths of one rule, so each is independently defeatable.
- **Pass (obs.) is earned, not relaxed.** The bar in this document has always been case-by-case
  observation. I did the second run, so the observed bucket moves 88 → 93 honestly.
  **TC-3564..TC-3569 are deliberately NOT promoted** on R-18 — no case-by-case run of UT-0887,
  UT-0759 or UT-0888 was performed.
- **Ten obligations become ELEVEN, and I said in three places why that is not a reversion of the
  v2.9.0 correction.** v2.9.0 corrected eleven → ten because the eleventh had been the DES-096
  seam half, which is design this row carries and is *still* not an obligation. The count moves
  because clause (e) is a genuinely new lettered clause.
- **Scope limits stated rather than implied.** Scenario 8's operative test is the **grade-8
  reader test, which governs over the safe harbour**, and **no automated test in this repository
  applies a reader test** — UT-0889 asserts substrings. Nor does anything test the v2.17.1 "no
  contrary claim elsewhere in the same string" qualifier. TC-3570/TC-3571 say so. TC-3573
  asserts **absence only** in Arabic — it makes no positive assertion that the mirror states the
  three facts the English does. TC-3574 explicitly **does not verify FR-082** (a Definition-B
  property; the case asserts only that the v1 *copy* stopped claiming it) — the same discipline
  v2.6.0 used to strip the unsupported NFR-013 claim from TC-3567.
- **TC-3543 corrected, status unchanged.** Its expected result said the Supporter refusal's
  "stated reason is *anonymity*" — copy the product no longer ships. UT-0089 asserts a boolean
  and UT-0832 asserts the error code plus "self-declared"; neither moved, so the case passes and
  only the description was wrong. Grep over "kept private", "never learn", "Supporters are
  anonymous" across Docs 07 and 08 found no other stale row.
- **All three v2.6.0 Lows discharged, none carried:** ISS-C2-01 (TC-3519's inline-regex pipes
  escaped — verified the row is now 8 pipes / 7 cells), ISS-C2-02 ("Forty-eight" → "Forty-nine"
  **and the forty-ninth case, TC-3541, named** rather than absorbed), ISS-C2-03 (pin note re-cut;
  CODE advanced to v2.6.0). Doc 08's v2.9.0 Low (ISS-C2-01, stale pins) also discharged.
- **Pins advance only where the delta was read.** SRS → v2.17.1 (Approved), CODE → v2.6.0
  (In Review, cycle-1 FAIL 94% 0C/0H/1M/5L, **v2.7.0 rework in progress** — the Medium is about
  stale "owed" statements in Doc 06 §7, **not** about UT-0889), MTP → v1.5.0 (In Review, v1.6.0
  rework in progress), TC → v2.7.0. **SDD and BKLG deliberately not advanced.** Noted that Doc 03
  v2.13.0 is now **Approved**, superseding the "In Review, cycle 2 under way" citations in the
  v2.9.0 FR-131 text — annotated in place, not rewritten.
- **R-18's qualifications recorded, not buried:** it ran against an **uncommitted working tree**
  (40 dirty paths, product code among them) because reviewer-qa has not signed the merge; a
  post-merge re-run should confirm the same 624.

## THE RULING — FR-131 Must row

**FR-131 stays OPEN — `G-PHASE3`.** Of its **eleven** obligations, (a), (b), (c) and the widened
closing sentence are met at the copy layer; **clause (e) is PARTIALLY EVIDENCED** — Scenario 8
guarded at **eleven strings** (UT-0869/TC-3535, UT-0887/TC-3564..TC-3567, UT-0889/TC-3570..TC-3574)
but its reader test unautomated, and **Scenario 9 Blocked at TC-3575**; and **six are unmet or
unevidenced**, unchanged by this drop: the notice wherever a vote is cast and on SCR-13/SCR-14
(both unbuilt, TC-3481 Blocked); **the DES-098 acknowledge-to-proceed control, which does not
exist at all** (Doc 06 §7 item 26(d); DECISIONS §10 lists it as unchanged by that record);
"visible before confirmation" (no confirmation step to precede); WCAG 2.2 AA + screen-reader
(unevidenced, NFR-011 is G-UI); TC-3476 and TC-3487 Blocked.

**Must COMPLETE stays 16 of 138 · open Must stays 122 (11.6%) · G-PHASE3 stays 47 · stories
meeting DoD stays 17 of 134. US-0134 does NOT meet the Definition of Done.** A row that closes on
the tractable half of its requirement teaches everyone downstream to read the hard half as
optional.

## Counts re-derived

| Figure | Was | Now |
|---|---|---|
| Doc 07 cases designed | 471 | **477** |
| Doc 07 with an implementing automated test | 239 | **244** |
| Doc 07 executed & observed — Pass (obs.) | 88 | **93** |
| Doc 07 inherited green — Pass (inh.) | 136 | 136 |
| Doc 07 Blocked | 175 | **176** |
| Doc 07 No mechanism / Manual / observed failures | 49 / 12 / 0 | 49 / 12 / 0 |
| Doc 08 §6 test cases (expanded) | 478 | **484** |
| Doc 08 §6 with passing evidence | 224 | **229** (136 inh. · 93 obs.) |
| Doc 08 §6 gaps | 254 | **255** |
| Suite | 619/619 (R-17) | **624/624 (R-18)** |
| **Must COMPLETE / open / stories DoD** | 16/138 · 122 · 17/134 | **unchanged** |

## IDs touched

- **Minted:** `TC-3570`, `TC-3571`, `TC-3572`, `TC-3573`, `TC-3574`, `TC-3575`. Run id **R-18**.
- **Corrected (no status change):** `TC-3543`.
- **Referenced, not minted:** `FR-131` (clause (e), Scenarios 8/9), `FR-082`, `FR-014`, `FR-015`,
  `FR-124`, `FR-132`, `NFR-013`, `NFR-023`, `US-0134`, `US-0132`, `US-0133`, `DES-098`, `DES-094`,
  `DES-096`, `DES-085`, `UT-0889`, `UT-0869`, `UT-0887`, `UT-0888`, `UT-0759`, `UT-0089`,
  `UT-0832`, `UT-0857`, `UT-0868`, `UT-0884`, `TC-3535`, `TC-3564`..`TC-3569`, `TC-3481`,
  `TC-3476`, `TC-3487`, `TC-3541`, `TC-3519`, `OPEN-27`, `TD-07-01/02/03`, `TD-RTM-01/02`.
- **No `US`, `FR`, `DES` or `UT` minted** — none is mine to mint.

## Open items (not mine to close)

- **The spec is not applied.** `artifacts/tester-2026-09-06T1700-clause-e-spec.md` needs the PM's
  mechanical applier. Both documents are still at v2.6.0 / v2.9.0 on disk.
- **Neutral technical review owed** on Doc 07 v2.7.0 and Doc 08 v2.10.0 — reviewer-qa, per
  `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. I did not self-appoint and
  wrote no review report (AL-CANDIDATE-3), although the SubagentStop audit will show Docs 01/04/06
  In Review; that is expected and out of my lane.
- **TC-3575 unblocks only when the engineer builds the Doc 04 §0.5 S5 scan.** Until then the
  remainder of clause (e) rests on inspection (I) — legitimate under FR-131's own Verify-by, but
  point-in-time and unable to hold a Must row against silent regression. **This is the single
  cheapest thing anyone could do to strengthen the FR-131 row** and I recommend it be scoped.
- **`OPEN-27`** (architect / Doc 03, Ravi Deshmukh): the S5 `anon`-badge carve-out
  (`packages/ui/src/PrivacyStatus.tsx` "Anonymous" / "Nothing you do here is linked to you") was
  reasoned against a *voting-scoped* FR-131; party-joining and endorsing are now participation
  acts. A copy ruling, not a test ruling — routed, not answered.
- **`ENROL-COPY (j)`** (product-owner, Priya Raghunathan): enrolment/verification claims are
  expressly outside clause (e); unruled.
- **`ARABIC-I18N`** (technical-writer, pre-Gate 2): TC-3573 guards the claim, not the fluency.
- **`packages/protocol/test/proposals.test.js:78`** still carries "…because authorship is public
  and Supporters are anonymous" as an `it()` **title**. It asserts nothing and does not fail —
  raised for the engineer; I do not edit unit-test code.
- **`TD-RTM-02`** (mine, still open): three live TC-count conventions — Doc 07 §2 **477**,
  Doc 08 §6 **484**, Doc 07 §10's overlap paragraph **430**. Advanced consistently, not
  reconciled; the recount is a document-wide job, not a side-effect of an FR-131 drop.
- **R-18 was run against an uncommitted tree**; a post-merge re-run should confirm 624/624.

## Handoff

To **reviewer-qa** (neutral technical review of Doc 07 v2.7.0 and Doc 08 v2.10.0, then the
independent RTM zero-gaps verification toward Gate 2) via the project-manager, who applies the
spec first. **Gate 2 is not ready:** 122 open Must rows, FR-131 among them.

## Hook state at exit (recorded, not acted on)

The SubagentStop review-loop gate blocks on **three documents, none of them mine**:

| Document | Owner (reworks) | State |
|---|---|---|
| `01-press-release-prfaq.md` v2.2.0 | **product-owner** (Priya Raghunathan) | report exists, **FAIL** 96%, 0C/0H/**1M** → owner reworks to a new version, then re-review |
| `04-test-strategy-master-plan.md` v1.5.0 | **architect** (Ravi Deshmukh) | report exists, **FAIL** 92%, 0C/0H/**1M** → v1.6.0 rework already in progress |
| `06-coding-and-ut.md` v2.7.0 | **engineer** (Samuel Oyelaran) | **no report for this version** → project-manager assigns a neutral technical reviewer |

**I did not act on any of them, and that is deliberate, not an omission.** Under CLAUDE.md's
review loop the reviewer is assigned by the **project-manager** and MUST NOT be the owning role;
rework is done by the **owning role**. Doc 01 is the product-owner's, Doc 04 the architect's,
Doc 06 the engineer's — writing a review report for any of them, or reworking them, would be
self-appointing into two roles at once (**AL-CANDIDATE-3**). I also cannot review my own Doc 07
v2.7.0 / Doc 08 v2.10.0; those go to **reviewer-qa** per
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`.

**Note on the gate's own scope:** Docs 07/08 are **not** in the blocking list, because the
versions on disk are still v2.6.0 / v2.9.0 (both Approved with passing reports) — my spec is not
applied yet. Applying it will put v2.7.0 / v2.10.0 into the gate, which is correct and expected:
they are then owed their neutral technical review.

**One thing the Doc 04 FAIL touches in my work, flagged rather than absorbed:** Doc 04 v1.5.0 is
the source of **§0.5 S5**, and **TC-3575 is Blocked on S5**. If the v1.6.0 rework moves S5's
wording, TC-3575's expected result and Doc 08's FR-131 clause-(e) ruling should be re-read
against it. Both cite S5 as *current In-Review text*, not as settled evidence, precisely so this
is a re-read and not a correction.
