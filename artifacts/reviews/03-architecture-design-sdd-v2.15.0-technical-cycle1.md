# Document Review Report — Doc 03 (SDD) v2.15.0, technical, cycle 1

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it never
> edits the reviewed document or any product code. Reviewer is **not** the document's owner
> (owner: architect, Ravi Deshmukh; reviewer: tester, Ji-woo Park — assignment recorded before
> dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.15.0
Review mode: technical
Reviewer role: tester
Score: 88%
Critical: 0
High: 2
Medium: 4
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

v2.15.0 does the job it set out to do: it applies the DES-095/DES-096 pattern to candidate
selection — one seam (`ICandidateStore`), two backings, the shipped SDK flow as the Definition-A
(v1) design and the Elections contract as the deferred v2 backing behind the same seam, with
nothing discarded and nothing v2 pulled forward. I read `packages/protocol/src/candidates.js`
(224 lines) and `packages/sdk/src/candidates.js` (778 lines) end to end and checked **every**
method, constant and refusal code §10.13.14 cites: all 24 refusal codes cited exist at the sites
claimed, the seam table's member list matches the `ICandidateStore` typedef exactly (8 data groups
+ `IS_INSECURE_MOCK`), the order-of-checks claims (maturation before the gate; consent takes no
verifier; the service holds neither seam) are true, and I re-ran the suite: **739/739 green**
(contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138). The three OPEN rows
(FR-039, FR-066, FR-093) are honestly OPEN with the blocker named; FR-065's "unlinkable",
FR-067's "logged" and FR-085's TC-3476 are correctly surfaced for the tester rather than decided.
The "Sites changed" list is **true and complete** — I diffed the file against HEAD and all 15
hunks map to the ten claimed site groups, with no N+1th *changed* site and no transcription
residue.

It nevertheless **FAILS** the bar. Two High issues: (1) §10.13.14 DES-066 rule 4 states that the
FR-131(b) disclosure "the surface says so **before the controls**" — at HEAD it renders *after*
the thumbs-up/thumbs-down buttons (`CandidateSelection.tsx:428-442`), and the cited UT-0906
asserts only presence, not order; (2) DES-108 rule 3(a) rests a v1 design rule on FR-082
("a Supporter is anonymous unconditionally"), a **DEFERRED-v2** Must that this document's own §16
confirmations table records as one the "v1 makes no claim to". Four Mediums are coverage/sweep
defects of the same family this document has been corrected for before — most importantly the
§5.2 SCR-assignment note that *generates* the SCR-22/23 inversion is left unannotated while the
two rows it feeds are annotated.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`88%`)
- Critical = 0? **yes** · High = 0? **no** (2) · Medium = 0? **no** (4)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.6 | Ten FRs covered rule-by-rule and each mapped to built/owed. Two clauses of Must requirements are not covered: FR-065's "enforced by **the same nullifier mechanism as scope-action limits**" (ISS-03) and FR-081's "recorded append-only **with its state (active/inactive)**" (ISS-04). |
| T2 Soundness | 20 | 88 | 17.6 | Layering is correct and matches the DES-095/096 precedent; failure modes enumerated; no v2 property claimed for v1 **except** ISS-02. Deduction also for asserting mechanism-equivalence in DES-066 rule 2 without the atomicity analysis (ISS-03). |
| T3 Traceability & IDs | 20 | 86 | 17.2 | DES-107/108 are the only mints; nothing renumbered or reused; UT citations largely verified against the tests. Deductions: ISS-05 (inversion record incomplete), ISS-06 (§5.6 stale vs the now-normative machine), ISS-08/ISS-09/ISS-10 (citation over-reach, Q18 lettering). |
| T4 Security & failure modes | 15 | 84 | 12.6 | Strong on confidential-class handling, the single delete, `IS_INSECURE_MOCK`, and the counting-gate placement. Deductions: ISS-01 (an FR-131 honesty-placement claim the surface does not implement) and ISS-02 (no FR-131(b)-style disclosure for the question asker where the identical exposure exists). |
| T5 Completeness & testability | 15 | 88 | 13.2 | Evidence map, §13 owed rows, §15 trace rows, Q18 all present; no placeholders. Deductions: ISS-05, ISS-06, ISS-11. |
| T6 Convention compliance | 10 | 95 | 9.5 | ISO-8601 dates, RFC 2119, named owners on every §13/§16 row, ids stable. Minor: ISS-07 (constant name differs from the code identifier). |
| **Total** | **100** | — | **87.7 → 88%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **High** | T4 / T1 | §10.13.14, **DES-066 rule 4** (lines 3538–3539): "the operator database CAN see the direction of an individual feedback vote — the record is unpublished, not unseen — and **the surface says so before the controls (UT-0906)**" | False against HEAD. In `apps/web/src/components/CandidateSelection.tsx` the feedback section renders, in document order: `feedbackLead` → `feedback-score` → `feedback-counts` → **`upvote` / `downvote` buttons (lines 428–435)** → `feedback-visibility` (lines 440–442). The FR-131(b) sentence (`en.candidates.feedbackVisibility`, "In this version our own records can see which way you signalled") is the **last** child of the section, *after* the controls. The only string before the controls is `feedbackLead` ("Only the total is shown"), which is the publication fact, not the visibility fact. **UT-0906 does not assert order for it either** — `apps/web/test/candidates.test.tsx:270-276` asserts only `feedback-visibility.textContent === en.candidates.feedbackVisibility`; the one order assertion in UT-0906 (lines 245-251) is the `ReceiptFreedomBanner` vs `vote-suitable`, a different control. This is the brief's class-1 defect: a rule stated as implemented that the code does not implement — and it is load-bearing, because this design calls a feedback vote a BINDING_VOTE-gated vote, so notice placement is an FR-131 obligation, not cosmetics. | Either (a) correct the sentence to describe what ships ("the surface states it in the feedback section; placement relative to the controls is not asserted") and raise the placement as a routed engineer/tester question with a §13 row, or (b) state it as an **owed** design obligation with a §13 row. Do not leave the present-tense claim. Drop or re-scope the `(UT-0906)` citation to what the test actually asserts. |
| ISS-02 | **High** | T2 / T4 | §10.13.14, **DES-108 rule 3(a)** (line 3643): "`askQuestion` appends `QUESTION_ASKED` … carrying the question text and a per-election question id and **not** the asker's identity (**a Supporter is anonymous unconditionally, FR-082**; asking is participation, not a counting action, FR-122)" | A Definition-B property is asserted, present tense, as the basis of a **v1** design rule. Doc 02 §16.3.1 (line 3476) classes **FR-082 as DEFERRED-v2**: "FR-082 cannot be technically satisfied in v1 where DB holds member↔party mapping." This document's own §16 confirmations table says of FR-030/031/**082**/086: "Definition-B-only confirmed … **v1 makes no claim to these properties**." So §10.13.14 now contradicts §16 of the same document. The design consequence (the trail must not name the asker) is right and v1-achievable, but it is *non-publication*, not anonymity: in v1 the operator database will hold the asker↔question link exactly as it holds the feedback caster — and rule 4 of DES-066, two pages earlier, gives that exposure an explicit FR-131(b) disclosure. The question phase gets none. This is the same defect class the document corrected at v2.14.0 for DES-066's "private votes" cell (ISS-C2-02). | Annotate the parenthetical: FR-082 is DEFERRED-v2 and is **not** claimed for v1; the v1 property delivered is that the public record does not name the asker. Add the FR-131(b)-equivalent obligation for the (owed) question surface, or state explicitly that it is owed, so the engineer who builds `askQuestion` is not told an unlinkability property is already guaranteed. |
| ISS-03 | Medium | T1 / T2 | §10.13.14, **DES-066 rule 2** (line 3532): "The caster record **is the v1 nullifier**: kept solely to refuse, returned by no read"; and §15's FR-065 row ("**Design + code + tests present**") | FR-065 (Doc 02 §4, line 898) has three normative clauses, and the section rules on only two. The unaddressed clause: "the one-vote-per-member constraint **MUST be enforced by the same nullifier mechanism as scope-action limits**." In v1 the scope-action-limit mechanism is `IEligibilityVerifier.isUniqueInScope` (§10.13.2: "Database nullifier record (atomic write on first COUNTING action per scope)"; `packages/sdk/src/eligibility.js:398-421` — documented **first-write-wins atomic check-and-register**, and used by `nominate()` at `candidates.js:419` for `CANDIDACY:<electionId>`). Feedback does **not** use it: `castFeedback` does `hasGivenFeedback()` then `recordFeedback()` against a per-candidacy `Set` inside `ICandidateStore` (`candidates.js:190-206, 683-700`) — a different component, and a check-then-write pair that loses precisely the atomicity property the seam's docstring says exists "to prevent concurrent double-voting". The section explains at length why feedback does not ride **DES-096** (last-ballot-counts) but never why it does not ride **DES-095**'s nullifier, and instead asserts equivalence ("is the v1 nullifier"). Since the `ICandidateStore` production backing is owed (§13), this is exactly the moment to specify it. | Address FR-065's third clause explicitly: either justify the store-local caster record as satisfying "the same nullifier mechanism" (and then specify the atomicity requirement the Postgres backing must provide), or record it as a divergence for the tester's ruling alongside "unlinkable". Do not leave the clause unmentioned while §15 posts the row as design+code+tests present. |
| ISS-04 | Medium | T1 / T3 | §10.13.14, **DES-107 rule 4** (line 3626): "State per FR-081: NOMINATED, CONSENTED, DEBATING, DEBATES_COMPLETE, VOTE_OPEN and PUBLISHED are **active**; NOT_ADVANCED and WITHDRAWN are **inactive**"; §5.2 DES-107 cell ("… active = NOMINATED..PUBLISHED, inactive = NOT_ADVANCED / WITHDRAWN …"); §15 FR-081 row ("trail append-only with active/inactive mapping. **Design + code + tests present** (UT-0891/0896/0897/0901)") | FR-081 requires "every tier transition MUST be **recorded** append-only **with its state (active/inactive)**". The trail event carries `{candidacyId, type, at, from, to, …}` only (`candidates.js:317-328`); there is no active/inactive field anywhere in `packages/protocol` or `packages/sdk`, no read exposes one, and **none** of the four cited UTs asserts the mapping (I grepped and read all four). The mapping exists only in this document. It is a defensible *derivation* from the stage, but it is presented inside a list of code facts in the §5.2 Tech-backed row and posted in §15 with "code + tests present" — which is what the tester will rule FR-081's row on. | State plainly that the active/inactive classification is a **design-level derivation from the stage**, not a recorded field, and say whether FR-081's clause is satisfied by derivation (architect's view) with the ruling left to Doc 08 — or record it as owed. Adjust the §15 evidence phrasing accordingly. |
| ISS-05 | Medium | T3 / T5 | **§5.2 header note, lines 1472–1473** (unchanged by this version): "SCR-22 = Debate scheduling and attendance surface (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065)" | The version records the §5.2 ↔ §10.12.4 **SCR-22/SCR-23 inversion** at the DES-066 and DES-067 rows and in the change entry ("§5.2's DES-066/DES-067 rows carry SCR-23/SCR-22 the other way round … annotated, not swapped"). But the inversion's **origin** is this provisional SCR-assignment note five lines above the table — the third §5.2 site carrying the inverted mapping, and the one a top-down reader meets **first**, ~55 lines before the DES-066 annotation that corrects it. It is left live and unannotated. This is the defect this document names in its own words at v2.14.1: *"a note that guards one row of a three-row table does not guard the table."* (The other candidate site, §10.12.4's wireframe-coverage row at line 2430, is consistent with the inventory — checked.) | Annotate the §5.2 header note in place (do not swap): record that §10.12.4 is the screen inventory of record, that SCR-22 = feedback widget and SCR-23 = debate schedule there, and that §10.13.14 follows §10.12.4. Add the site to the change entry's "Sites changed" list. |
| ISS-06 | Medium | T3 / T5 | **§5.6 State models, line 1816**: "CANDIDACY: nominated(self) ──3 debates completed──▶ post-debate member vote ──passes──▶ published" | The version's whole purpose is that the shipped machine **is** the v1 design, and §10.13.14 DES-067 rule 3 makes `assertCandidacyTransition` "the authority". §5.6 — the document's own state-model section — still shows a four-node sketch that omits **CONSENTED** (the FR-037 one-way door this version makes normative), **DEBATING**, **DEBATES_COMPLETE**, **VOTE_OPEN**, **NOT_ADVANCED** and **WITHDRAWN**, and shows a direct edge from `nominated(self)` to debates that the built machine refuses (`scheduleDebates` → `CONSENT_REQUIRED` unless CONSENTED). It is not annotated and carries no pointer to §10.13.14 — while **the code points readers at it**: `packages/protocol/src/candidates.js` header, "State model: Doc 03 §5.6 CANDIDACY", and Doc 06 v2.10.0 cites the same. The staleness is inherited from TRUMO-P02, but this is the version that makes the nine-stage machine normative, and a v2 contract implementer working from §5.6 would build the wrong state set. | Annotate §5.6's CANDIDACY block (retain the existing text) with the nine `CANDIDACY_STAGE` values and the legal edges, or with an explicit pointer that §10.13.14 / `assertCandidacyTransition` is the authoritative machine and §5.6 is a summary. Add the site to "Sites changed". |
| ISS-07 | Low | T6 | Change entry line 318 and §10.13.14 **DES-027 rule 3**, line 3471: "**NOMINATION_MATURATION = 30 days** (§10.11, ratified 2026-09-21)" | No identifier `NOMINATION_MATURATION` exists. The code constant is `NOMINATION_MATURATION_SECONDS` (`packages/protocol/src/candidates.js:189`), and **§10.11 — the cited home — names it correctly**, as does the decisions record's table. The short form comes from the approver's verbatim ruling; rendered in code font in a normative rule it sends an implementer grepping for a name that is not there. | Use `NOMINATION_MATURATION_SECONDS` (= 30 days) in the normative rule, or mark the short form as the approver's wording. |
| ISS-08 | Low | T3 | §10.13.14, **DES-107 rule 3**, lines 3619–3621: "The service **and the store** expose no method or parameter named approve, reject, rank, renominate, override or skip (**export scan, UT-0891; UT-0899**)" | True of the code (I checked both prototypes), but neither cited UT covers the store: UT-0891 scans the **protocol module's exports** (`packages/protocol/test/candidates.test.js:93-99`) and UT-0899 scans **`CandidateService.prototype`** (`packages/sdk/test/candidates.test.js:490-495`). The only scan over `InMemoryCandidateStore.prototype` is UT-0897's delete/destroy/remove/purge name check. The store half of the claim is unasserted. | Drop "and the store", or mark the store half as true-by-inspection-but-unasserted (a candidate UT the tester can add). |
| ISS-09 | Low | T3 | §10.11 sub-table (durations row → "**Q18(a)**"; maturation row → "Q18(b)") vs `artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md` §3, which prescribes "Doc 03 §16 **Q18**: (a) whether DES-068's founding-cohort waiver applies …; (b) the … durations" | Doc 03 is internally consistent (§16 Q18 (a) = durations, (b) = waiver), but the lettering is **inverted** relative to the record that commissioned it, so a cross-reference to "Q18(a)" from the decisions record resolves to the wrong limb. Substance matches on both sides. | Either match the record's lettering or note in §10.11/§16 that the letters were re-ordered relative to the ruling record. |
| ISS-10 | Low | T3 | §10.13.14, **DES-067 rule 8**, line 3590: "the FR-131 notice (DES-098) renders **before** the post-debate vote controls, **non-dismissable** (UT-0906)" | The order half is correct and asserted (`apps/web/test/candidates.test.tsx:245-251`, plus `CandidateSelection.tsx:462` renders `<ReceiptFreedomBanner/>` ahead of `vote-suitable`). The **non-dismissability** half is a property of the banner component (`ReceiptFreedomBanner.tsx` exposes no close control; its own UT is UT-0887) and is not asserted by UT-0906. Minor citation over-reach. | Cite UT-0906 for placement and the banner's own UT for non-dismissability. |
| ISS-11 | Low | T5 | Change entry line 349: "(7) **§15** — a v2.15.0 trace sub-table, **one row per FR**" | The sub-table has **eight** rows covering eleven FRs: FR-037/FR-038/FR-085 share one row, and FR-023 / FR-123(c) ride the FR-036 row. The table is fine; the description is not exact, and this document's own standard is that enumerations are exact. | Reword to "one row per requirement group" or split the shared row. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Verification performed (so the next cycle need not repeat it)

- **Refusal codes:** all codes cited in §10.13.14 exist — `OUT_OF_SCOPE`, `RESIDENCY_OUTSIDE_JURISDICTION`, `NOT_MATURED`, `NOT_COUNTING_ELIGIBLE`, `ALREADY_NOMINATED`, `SELF_ENDORSEMENT`, `ALREADY_ENDORSED`, `NOMINATION_WINDOW_CLOSED`, `ENDORSEMENTS_SHORT`, `CONSENT_INCOMPLETE`, `NOT_AWAITING_CONSENT`, `NOT_YOUR_CANDIDACY`, `CONSENT_REQUIRED`, `BALLOT_LOCKED`, `UNKNOWN_TOPIC`, `ATTENDANCE_REQUIRED`, `DEBATES_INCOMPLETE`, `ILLEGAL_TRANSITION`, `SELF_VOTE`, `ALREADY_GAVE_FEEDBACK`, `FEEDBACK_CLOSED`, `TOO_EARLY`, `INVALID_TIMETABLE`, `OFFICE_OUTSIDE_JURISDICTION`, `NOT_ACTIVE`.
- **Seam table:** matches the `ICandidateStore` typedef member-for-member; §13's "eight member groups" is the correct count; `updateElection` is indeed reached only from `lockBallot`.
- **Order claims:** maturation before the verifier (asserted by UT-0896's spy), consent takes no verifier, service holds neither seam (UT-0902), `destroyDisclosures` is the store's only delete (UT-0897).
- **UT citations:** each UT in the evidence map was opened and read; every citation matched what the DES says **except** ISS-01, ISS-04, ISS-08, ISS-10. UT-0901 does carry the timetable/lock case, so the FR-039/FR-093 "(timetable, lock)" citations are correct.
- **Suite:** `npm test` re-run — 739/739 green, matching Doc 06 v2.11.1's published split.
- **Sites changed:** `git diff -U0` gives 15 hunks; all map to the ten claimed site groups. No unclaimed changed site, no transcription residue (no stray FIND/REPLACE markers, no duplicated tails, every new table row has the right column count).
- **Upstream agreement:** Doc 08 v2.12.3 rows (FR-036/039/065/066/067/081/085/093) say what Doc 03 says they say, including TC-3476 Blocked on FR-085; Doc 02 §16.3.1's quoted v1-mechanism strings are accurate; the decisions record matches §10.11 on approver, date, values, rationale and amendment layer (Open Layer) — see ISS-09 for the one lettering divergence.
- **Definition-B sweep:** no unlinkability / receipt-freeness / on-chain-verifiability claim for v1 anywhere in §10.13.14 **except** ISS-02; DES-066 rule 4 and DES-067 rule 7 disclaim theirs correctly.
- **Gate audit:** `node hooks/run_gates.cjs --audit` → Doc 03 v2.15.0 `BLOCK — no report for this version` (expected mid-loop; this report is that report). RTM 138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing. No other document blocking.

## 5. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), the owning role.** Fix ISS-01 through ISS-06
(the two Highs and four Mediums) and take the five Lows on the same touch; the rework MUST
produce a **new version** — at least a **MINOR** bump (Medium-or-worse present), i.e. **v2.16.0**,
`Status: In Review` — after which this loop re-reviews as **cycle 2 of 5**. Nothing in the
layering, the seam design, the DES-107/DES-108 mints, the OPEN rulings or the constants record
needs reworking; the defects are a false placement claim, one Definition-B invocation, two
uncovered requirement clauses, and two un-swept sites. **The reviewer wrote no document text and
no code.**

## 6. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5, verdict FAIL.
