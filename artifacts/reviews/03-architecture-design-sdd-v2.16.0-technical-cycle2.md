# Document Review Report — Doc 03 (SDD) v2.16.0, technical, cycle 2

> Produced by the **document-review** skill. The reviewer scores and lists issues only — it never
> edits the reviewed document or any product code. Reviewer is **not** the document's owner
> (owner: architect, Ravi Deshmukh; reviewer: tester, Ji-woo Park — assignment recorded before
> dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`, same reviewer as
> cycle 1).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.16.0
Review mode: technical
Reviewer role: tester
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

v2.16.0 takes every one of cycle 1's eleven findings and lands ten of them cleanly. **Both Highs
are fixed at the root, not papered over.** ISS-01: DES-066 rule 4 no longer claims the FR-131(b)
feedback disclosure renders before the controls — it now states what ships (`feedbackVisibility`,
presence asserted by UT-0906), names the placement as an FR-131 obligation that is **owed**, and
carries a §13 row for it. ISS-02: DES-108 rule 3(a) no longer rests a v1 rule on FR-082 — FR-082 is
stated DEFERRED-v2 and explicitly **not claimed**, the v1 property is re-described as
**non-publication** of the asker (the operator database will hold the link), and the
FR-131(b)-equivalent disclosure is made an obligation of the owed question surface; the §5.2
DES-108 cell says the same thing. The four Mediums are fixed the way this document fixes things
well: FR-065's third clause is recorded as a named **v1 divergence** with the Postgres UNIQUE
requirement and the convergent `isUniqueInScope` form specified and the **ruling left to the
tester** ("is the v1 nullifier" is withdrawn); FR-081's active/inactive is stated as a design-level
derivation from the recorded stage with the architect's view marked **as a view**; the §5.2
provisional SCR note — the origin of the SCR-22/23 inversion — is annotated in place, not swapped;
and §5.6's CANDIDACY sketch is annotated with the stage set and the legal edges.

I re-verified the fixes against the code rather than against the change entry: the §5.6 edge list
matches `packages/protocol/src/candidates.js` `TRANSITIONS` **edge for edge** (including WITHDRAWN
reachable from all five non-terminal stages and the three terminal stages with empty sets); the
DES-107 rule 4 mapping is total over the stage enum; the suite is **739/739 green** (contracts 95 ·
protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138); the new §13 row is honest about what is
owed regardless ((a), the FR-131 placement) versus owed only if my Doc 08 ruling requires it ((b),
(c)); and the decisions record's Q18 lettering now matches Doc 03 §10.11/§16 with the correction
noted in the record. The "Sites changed at v2.16.0" list is **true and complete** — every v2.16.0
mark in the file maps to a claimed site, and I found no unclaimed changed site and no transcription
residue (no stray markers, no duplicated tails, table column counts intact).

It **PASSES**. Two **Low** issues remain, neither blocking: cycle-1's ISS-10 was taken but landed
on the wrong test (`UT-0887` asserts the banner's copy, not its non-dismissability), and §5.6's
annotation says "Nine stages" where `CANDIDACY_STAGE` has eight — a count word disagreeing with the
correct enumeration printed beside it, the same exactness class as cycle-1's ISS-11.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Both uncovered Must clauses are now covered: FR-065's "same nullifier mechanism" as a divergence with design consequences, FR-081's "with its state" as a derivation. Every rule in §10.13.14 remains traceable to a method, constant or refusal code that exists, or is marked owed with a §13 row. |
| T2 Soundness | 20 | 99 | 19.8 | The one Definition-B invocation is withdrawn; the layering, seam and mints are untouched (correctly — cycle 1 found nothing wrong with them). The ISS-03 annotation now does the atomicity analysis it previously asserted around, and names both the backing constraint and the convergent form. |
| T3 Traceability & IDs | 20 | 93 | 18.6 | ISS-05, ISS-06, ISS-08, ISS-09 and ISS-11 all fixed and verified at source. Deductions: ISS-C2-01 (the non-dismissability citation is still not what the cited test asserts) and ISS-C2-02 (stage count). No id minted, renumbered or reused. |
| T4 Security & failure modes | 15 | 98 | 14.7 | The two FR-131 defects are both closed: the false placement claim is now an owed obligation with a §13 row and a named owner, and the question surface gets the FR-131(b)-equivalent disclosure duty it lacked. |
| T5 Completeness & testability | 15 | 96 | 14.4 | §13's new row separates owed-regardless from owed-if-ruled; the evidence map and §15 rows now say which clauses are evidenced and which are mine to rule. Small deduction for ISS-C2-02 sitting in the annotation that is meant to be the authoritative stage list. |
| T6 Convention compliance | 10 | 99 | 9.9 | `NOMINATION_MATURATION_SECONDS` in the normative rule, the approver's short form retained and marked as such; ISO-8601, RFC 2119, named owners on the new §13 and §16 rows. |
| **Total** | **100** | — | **97.0 → 97%** | — |

## 4. Cycle-1 findings — fixed / not fixed

| Cycle-1 ID | Severity then | State | Evidence I checked |
|---|---|---|---|
| ISS-01 | High | **FIXED** | §10.13.14 DES-066 rule 4 now reads "the surface states it (`feedbackVisibility`; asserted present by UT-0906)", and the annotation says plainly that at HEAD the sentence is the **last** child of the feedback section, after the controls, and that no test asserts its order. The placement (before the controls, "as the post-debate vote's notice already does") is recorded as **owed — §13**. Checked against `apps/web/test/candidates.test.tsx` (UT-0906 asserts `feedback-visibility.textContent` only; its single order assertion is banner vs `vote-suitable`) and against `CandidateSelection.tsx`. The §13 row exists and names Samuel Oyelaran. |
| ISS-02 | High | **FIXED** | DES-108 rule 3(a): "FR-082 is **DEFERRED-v2** … and is **not claimed here**. The v1 property is **non-publication** … while the operator database will hold the asker↔question link. The owed question surface MUST therefore carry the FR-131(b)-equivalent disclosure … **before** the ask control." No contradiction with §16's confirmations table remains. The §5.2 DES-108 cell carries the same three facts (DEFERRED-v2, not claimed, FR-131(b) disclosure on the owed surface). |
| ISS-03 | Medium | **FIXED** | DES-066 rule 2 records the third clause as a **v1 DIVERGENCE**, contrasts `hasGivenFeedback` + `recordFeedback` with DES-095's first-write-wins `isUniqueInScope` that `nominate` uses for `CANDIDACY:<electionId>`, specifies (i) the UNIQUE (candidacyId, member) constraint the DES-097(b) backing MUST enforce and (ii) the convergent `FEEDBACK:<candidacyId>` form as the recommended engineer touch (§13), and leaves (iii) the ruling to me. "is the v1 nullifier" is explicitly **withdrawn**. §15's FR-065 row and the evidence map now say which clauses are evidenced and which two are the tester's. |
| ISS-04 | Medium | **FIXED** | DES-107 rule 4: "**a design-level derivation, not a recorded field**" — no field, no read, no cited UT; the mapping is published and is total over the stage enum; "the architect's view is that the clause is satisfied by derivation … **but that is a view**; the row ruling is the **tester's** (Doc 08)". §5.2's DES-107 cell and §15's FR-081 row re-phrased to match. |
| ISS-05 | Medium | **FIXED** | §5.2's provisional SCR note (line ~1552) is annotated **in place**, directly under the note and ~100 lines above the rows: §10.12.4 is the inventory of record, SCR-22 = feedback widget, SCR-23 = debate schedule, §10.13.14 follows §10.12.4, note retained not swapped. The site is in the "Sites changed" list. |
| ISS-06 | Medium | **FIXED** (one Low, below) | §5.6's CANDIDACY block is annotated with the stage set, the legal edges and the pointer to §10.13.14 / `assertCandidacyTransition` as the authority. I checked every edge against `TRANSITIONS` in `packages/protocol/src/candidates.js`: NOMINATED→CONSENTED, CONSENTED→DEBATING, DEBATING→DEBATES_COMPLETE, DEBATES_COMPLETE→VOTE_OPEN, VOTE_OPEN→{PUBLISHED, NOT_ADVANCED}, WITHDRAWN from all five non-terminal stages, and PUBLISHED / NOT_ADVANCED / WITHDRAWN terminal with empty sets — **all correct and complete**; "every other edge is refused with ILLEGAL_TRANSITION" matches `assertCandidacyTransition`. Only the count word is wrong (ISS-C2-02). |
| ISS-07 | Low | **FIXED** | DES-027 rule 3 now names `NOMINATION_MATURATION_SECONDS`; the short form in the v2.15.0 entry is retained and marked as the approver's wording. |
| ISS-08 | Low | **FIXED** | DES-107 rule 3 now scopes the citation: the protocol export scan (UT-0891) and the `CandidateService.prototype` scan (UT-0899), with the store half marked "true by inspection but **unasserted**". Verified UT-0897's store scan is `/delete\|destroy\|remove\|purge/i` over `InMemoryCandidateStore.prototype` only (`packages/sdk/test/candidates.test.js:379-381`). |
| ISS-09 | Low | **FIXED** | `artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md` §3 now letters Q18 (a) = durations, (b) = waiver, with an in-record correction note citing this review; §4's MATURATION-01 row cites "Q18(b) — the founding-cohort waiver". Matches Doc 03 §10.11 (durations row → Q18(a), maturation row → Q18(b)) and §16 Q18. |
| ISS-10 | Low | **NOT FIXED** → **ISS-C2-01** | See §5. |
| ISS-11 | Low | **FIXED** | The v2.15.0 entry item (7) now reads "one row per requirement group", marked `_(v2.16.0, ISS-11: was "per FR" — eight rows cover eleven requirements)_`. |

## 5. Issues (this cycle)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | Low | T3 | §10.13.14, **DES-067 rule 8** (line 3700): "the FR-131 notice (DES-098) renders **before** the post-debate vote controls (document order asserted, UT-0906) and is non-dismissable — a property of `ReceiptFreedomBanner` itself, **asserted by its own UT-0887** (ISS-10)" | Cycle-1's ISS-10 was taken, but the citation moved from one test that does not assert non-dismissability to another that also does not. **UT-0887** (`apps/web/test/safety-surfaces.test.tsx:130-186`) has four `it`s: the negation-aware banned-word scan, the clause (a)/(b)/(c) content check, a check that the rendered text contains the shipped `en.banner.*` strings, and the Arabic mirror. **None looks for a close control.** The banner's own source comment is precise about this: line 17's "UT-0887 asserts this" attaches to the *copy* rule immediately above it, while the "persistent, not dismissible" paragraph (lines 20-22) cites no test. The property is real and **is** asserted — but on another surface, by **UT-0881** (`apps/web/test/proposals.test.tsx:342-350`: "it cannot be dismissed", `within(banner).queryAllByRole('button')` → length 0) — and on the candidate surface (SCR-23), which is what rule 8 is about, it is unasserted. Same class as ISS-08 and cycle-1's ISS-10, and it makes the header's "all five Lows taken … nothing carried" one item optimistic. | Cite **UT-0881** (or whichever guard the tester adopts) for non-dismissability, or state it the way rule 3 now states the store scan: true by inspection, **unasserted on this surface** — a candidate UT. Keep UT-0906 for placement, which is correct and asserted. |
| ISS-C2-02 | Low | T3 / T5 | **§5.6**, the v2.16.0 ISS-06 annotation (line 1898): "**Nine stages** and the legal edges from its TRANSITIONS table:" — and the change entry (line ~330): "§5.6's four-node CANDIDACY sketch omitted **six of the nine stages**" | `CANDIDACY_STAGE` (`packages/protocol/src/candidates.js:37-54`) freezes **eight** values: NOMINATED, CONSENTED, DEBATING, DEBATES_COMPLETE, VOTE_OPEN, PUBLISHED, NOT_ADVANCED, WITHDRAWN. The annotation's own edge list names exactly those eight and no ninth, and DES-107 rule 4 calls its six-active/two-inactive mapping "total and fixed" — so the document is inconsistent with itself as well as with the enum. The enumeration is right, so no reader builds the wrong stage set, but a reader who counts goes hunting for a stage that does not exist, in the one annotation whose purpose is to be the authoritative list. This is the exactness class cycle 1 raised as ISS-11 ("one row per FR"), and in fairness the wrong number originated in **my own cycle-1 required-fix text** ("annotate … with the nine `CANDIDACY_STAGE` values"); it was transcribed rather than checked. | Say **eight** at both sites (or "the eight `CANDIDACY_STAGE` values"). No other change needed — the edges and the terminal set are correct. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Verification performed this cycle

- **Stage machine:** `TRANSITIONS` read line by line and compared to §5.6's new edge list and to DES-107 rule 4's mapping — edges and terminal stages match exactly; the only divergence is the count word (ISS-C2-02).
- **Test citations touched by the fixes:** UT-0906 (`apps/web/test/candidates.test.tsx:238-297`) — the order assertion is banner-vs-`vote-suitable`; `feedback-visibility` is a presence/text assertion, exactly as the corrected rule 4 now says. UT-0887 — read all four `it`s (ISS-C2-01). UT-0897's store scan — read (`expect(names).toEqual(['destroyDisclosures'])`). UT-0891 / UT-0899 export and prototype scans unchanged since cycle 1.
- **Code facts behind ISS-03:** `isUniqueInScope` (first-write-wins atomic check-and-register, `packages/sdk/src/eligibility.js`) vs `hasGivenFeedback` / `recordFeedback` on `ICandidateStore` — the annotation's description of both is accurate, as is "a check-then-write pair whose atomicity is only as good as the backing".
- **Suite:** `npm test` re-run — **739/739 green**, split matching Doc 06 v2.11.1 (95 · 178 · 287 · 25 · 16 · 138). Document-only change; nothing regressed.
- **Sites changed:** `git diff -U0 HEAD` → 18 hunks (15 of them were verified at cycle 1 as the v2.15.0 change). Every `v2.16.0` mark in the file maps to a claimed site: header / Status / change entry; §5.2 note + DES-107 + DES-108 cells; §5.6; §10.13.14 DES-027 r3 (ISS-07), DES-066 r2 and r4, DES-067 r8 (ISS-10), DES-107 r3 (ISS-08) and r4, DES-108 r3(a), evidence map FR-065 / FR-081; §13 one new row (the §13 table gained four rows in total — three at v2.15.0, one here, as claimed); §15 FR-065 / FR-081 rows; the two marked corrections inside the v2.15.0 entry. **No unclaimed changed site.** No FIND/REPLACE residue, no duplicated tails, table column counts intact (all §13 rows 4 columns).
- **§13 honesty:** the new row splits (a) "owed regardless — an FR-131 obligation on a BINDING_VOTE-gated control" from (b)/(c) "owed if the tester's Doc 08 ruling … requires them", with severities and a named owner. That is the distinction cycle 1 asked for.
- **Upstream agreement:** the decisions record now matches Doc 03 on lettering as well as on approver, date, values, rationale and amendment layer. Doc 02 §16.3.1's FR-082 and FR-065 quotations remain accurate.
- **Definition-B sweep (re-run over the changed prose):** no unlinkability / receipt-freeness / on-chain-verifiability property is claimed for v1 anywhere in §10.13.14; DES-066 rule 4, DES-067 rule 7 and DES-108 rule 3(a) each disclaim theirs explicitly.
- **Gate audit:** `node hooks/run_gates.cjs --audit` → `BLOCK 03-architecture-design-sdd.md v2.16.0 — no report for this version` (expected mid-loop; **this report is that report**), 1 document blocking, no other. RTM 138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing — unchanged, as expected from a version that closes no row.

## 6. Routing instruction (to the owning role)

**PASS → the architect (Ravi Deshmukh) sets `Status: Approved` for v2.16.0 and the SOP advances.**
The two surviving **Low** issues are non-blocking and are carried to the next Doc 03 touch:
**ISS-C2-01** (cite UT-0881, or mark non-dismissability unasserted on SCR-23, instead of UT-0887)
and **ISS-C2-02** (eight `CANDIDACY_STAGE` values, not nine — at §5.6 and in the change entry).
Neither needs a version bump of its own; both are one-line annotation corrections. **The reviewer
wrote no document text and no code.** Next in the loop: the tester authors Doc 07 v2.10.0 and
Doc 08 v2.13.0, where the rulings this version correctly left open — FR-065's "unlinkable" and
"same nullifier mechanism", FR-067's "logged", FR-081's derived state, and TC-3476 on FR-085 — are
decided.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — cycle 2 of 5, verdict PASS.
