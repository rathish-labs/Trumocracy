# Tester session note — 2026-09-21T0500 — Doc 07 v2.10.0 + Doc 08 v2.13.0, candidate-selection rows

```
Role:       tester (Ji-woo Park)
Session:    TRUMO-P03 follow-on — the TC rows for UT-0891..UT-0907 and the per-row RTM ruling
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md ("Ownership and rework")
Branch:     design/candidate-des-definition-a · HEAD 12fe4a6 (PR #22 merged)
Inputs:     Doc 03 v2.16.0 §10.13.14 + §15 candidate sub-table (Approved, tester-reviewed cycle 2);
            Doc 06 v2.11.1 §3; Doc 02 §4 + §8 + §16.3.1 for the ten requirements; Doc 07 v2.9.0;
            Doc 08 v2.12.3; artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md
Wrote:      artifacts/status/SPEC-2026-09-21-doc07-v2.10.0.md   (30 OPs) — TRANSCRIBED by the PM
            artifacts/status/SPEC-2026-09-21-doc08-v2.13.0.md   (43 OPs) — TRANSCRIBED by the PM
            this note
Did NOT:    edit Doc 03, Doc 06, Doc 07, Doc 08, any product code, any test, or memory-index.json.
            No review report written — reviewer-qa is the recorded neutral reviewer for both.
```

## 1. Run R-21 — the evidence everything here rests on

`npm test` from the repo root: **739 / 739 pass, 0 failed, exit 0** — contracts 95 · protocol 178 ·
sdk 287 · ui 25 · indexer 16 · web 138. Durations: contracts 70.73 s · protocol 580 ms · sdk 1.69 s ·
ui 999 ms · indexer 425 ms · web 3.26 s.

Then four case-by-case `--reporter=verbose` runs: `packages/protocol/test/candidates.test.js`
**27/27** · `packages/sdk/test/candidates.test.js` **43/43** · `packages/ui/test/PrivacyStatus.test.tsx
-t "UT-0903"` **7 passed / 18 skipped (25)** · `apps/web/test/candidates.test.tsx` **20/20**.
**97 `it` names read green individually** — which is what earns Pass (obs.) rather than Pass (inh.).

**Tree state stated, not claimed clean.** `git status --porcelain` returned **nine** paths: seven
untracked `artifacts/` session records, `artifacts/memory-index.json`, and
`docs/03-architecture-design-sdd.md` (the architect's in-flight v2.16.0). **No product, test or
configuration path modified or untracked**, so every test input is identical to `HEAD` `12fe4a6`.
The R-20 clean-tree standard holds; **no re-run is owed**.

## 2. The rulings — nine Must rows plus FR-038

Applied the four completion rules exactly as Doc 08 v2.5.0 did for FR-079/FR-090.

| FR | Ruling | One-line ground |
|---|---|---|
| FR-036 | **CLOSE** ✅ | Every clause has a passing test: self-only by construction (no nominee parameter, UT-0896), containment proved both ways with a *throwing* failure mode (UT-0894), maturation before the seam, a published minimum returned on every endorsement, withdrawal before the lock. |
| FR-037 | **CLOSE** ✅ | Consent separate/literal-`true`/once/verifier-free/candidate-bound; and nobody unconsented is named on any read or trail event. "Under any circumstance" closes because the candidacy disclosure holding is v1's **only** holding of real-world identity (`/verify` flag-off, verify-and-discard unbuilt). Revisit flag on FR-132. |
| FR-038 (Should) | **CLOSE** ✅ | TC-3599 + TC-3614 carry the whole guarantee — both facts stated **before** consent, in asserted document order. Non-gating; moves non-Must 4/19 → 5/18 only. |
| FR-039 | **OPEN — `G-NOMECH`** (was G-PHASE3) | DES-076 rule 2 unbuilt: no office-ballot voter-scope guard, and **no tie-break field exists in the election record at all**. |
| FR-065 | **OPEN — `G-NOMECH`** (was G-PHASE3) | Two clauses fail. "Same nullifier mechanism as scope-action limits": store-local check-then-write, not `isUniqueInScope`; the Postgres UNIQUE constraint is unbuilt. "Unlinkable to their caster": Definition-B; the operator DB sees direction and the surface says so. |
| FR-066 | **OPEN — `G-NOMECH`** (was G-PHASE3) | Lifecycle built and proved; "recorded on the verifiable record" waits on DES-097 S-8 anchoring. Same clause FR-092 is open on. |
| FR-067 | **OPEN — `G-NOMECH`** (was G-PHASE3) | Everything but "refused **and logged**". Capability absence discharges the prohibition; it cannot discharge a positive obligation to produce a record. |
| FR-081 | **OPEN — `G-NOMECH`**, **leaves G-TRACE** | DES-107 closes the chain. "With its state (active/inactive)" fails on **three absences**: no field, no read, no assertion. A mapping published in an SDD is not a test. Smallest open clause in the matrix — one `it`. |
| FR-085 | **CLOSE** ✅ | DES-028 rule 6 is the lifecycle DES it never had. Irrevocability proved as absence + at the boundary; `destroyDisclosures` is the store's only delete and the trail never held the data. |
| FR-093 | **OPEN — `G-NOMECH`**, **leaves G-TRACE** | DES-108 closes the chain. Question phase (rule 3(a)) and the office election (DES-076 r2) unbuilt. |

**The five clauses the architect referred to me, ruled:** FR-065 "unlinkable" — **not satisfied**;
FR-065 "same nullifier mechanism" — **not satisfied**; FR-067 "and logged" — **not satisfied**;
FR-081 "with its state" — **not satisfied**; FR-085's **TC-3476 — removed from the row** (it is an
FR-131 clause-8 *enrolment*-screen case; FR-085 governs *candidacy* consent — and **FR-085 closes
with or without it**, stated so the removal cannot read as clearing an obstacle).

**Two of five went against the design's stated hope.** That is deliberate and argued in the rows.

## 3. Counts — every figure a closure moves

- Must **16 → 19** COMPLETE · **122 → 119** OPEN · completion **11.6% → 13.8%**
- Non-Must **4 / 19 → 5 / 18**; total rows **20 / 141 → 24 / 137** (24 + 137 = 161)
- `G-PHASE3` **47 → 40** · `G-NOMECH` **13 → 19** · `G-TRACE` **34 → 32** · others unchanged ·
  by-reason total **123 → 120**, distinct open **119** (NFR-007 still double-counted)
- §6: FR — Must **19 / 95** · Should/Could **5 / 14** · Stories DoD **17 → 23 of 142**, gaps
  **125 → 119** · Test cases **500 → 528** designed, **245 → 275** evidenced (inh. 136, obs.
  **109 → 139**), gaps **255 → 253**
- §9 hook rows: "Must rows with a complete chain" **19 / 138**; "Open Must rows" **119**
- reviewer-qa + architect G-TRACE enumerations **34 → 32** (FR-081, FR-093 struck)

**DoD check was story by story over an id diff of this file, not deduced from the FRs.** Six newly
qualify: **US-0046, US-0047, US-0048, US-0049, US-0050, US-0095**. Nine do not, each with its
blocking row named — most instructively **US-0132**, which carries six rows of which only FR-085
closes.

## 4. Doc 07 v2.10.0 — what was minted

**28 cases, `TC-3592`..`TC-3619`**, new suite **§5.7 `TS-CANDIDATE`**, one case per guarantee over
the 97 `it`s, every `it` named verbatim in exactly one case's Automation cell. **Band consequence:
Doc 04 v1.7.1 §14 reserves `TC-3592`–`TC-3699` for the six `TS-V1-*` suites, so Doc 04 §14 MUST
re-narrow that floor to `TC-3620`** — OPEN-30 pattern, architect routed.

Re-statused: `TC-3407`, `TC-3411` No mechanism → **Pass (obs.)**; `TC-3419` No mechanism →
**Blocked**; ten cases (TC-0028, TC-0029, TC-3313..TC-3316, TC-3317..TC-3322) keep **Blocked** with
a corrected *reason* — each states an on-chain, E2E or Definition-B expectation v1 does not deliver,
and promoting any on a v1 test would erase the gap its row is open on. `TC-3476` loses its FR-085
link only.

## 5. Transcription state

- **Doc 07 spec: TRANSCRIBED by the PM.** `docs/07-test-cases-suites.md` is at **v2.10.0**.
  Re-verified after the fact: **all 30 replacements present exactly once**; 28 TC rows, 7 columns
  each; R-21 logged once; Version 2.10.0, Last updated 2026-09-21.
  *(Correction to the spec's own tail: `TS-CANDIDATE` appears **7** times, not 6 — Status,
  Changelog, §2 suite row, §2 enumeration paragraph, §5.7 heading, §5.7 context, §10 "Cases
  designed". All seven enumerated and legitimate; not a double-apply.)*
- **Doc 08 spec: TRANSCRIBED by the PM** _(this bullet was written before the transcription landed and is corrected in place rather than left to contradict §11 — carrying a superseded claim beside its correction is the defect class this whole session exists to name)._ `docs/08-traceability-matrix.md` is at **v2.13.0**; **all 43 replacements verified present exactly once** after the fact, and `--audit` reports the two signals AGREEING at 19 / 119. Before transcription, all **43** FINDs were re-checked against
  `docs/08-traceability-matrix.md` at this moment: each matches **exactly once**, and a simulated
  sequential application completes with **0 errors**.
- **Caution for the PM: neither spec is idempotent.** Four Doc 07 OPs (18, 20, 21, 22) and several
  Doc 08 OPs re-state their FIND inside the replacement, so re-running an already-applied spec would
  duplicate content rather than fail loudly. Apply each spec **once**.

## 6. Pre-verified post-transcription figures for Doc 08

I replayed `hooks/check_gates.py`'s own RTM counting algorithm over the post-application text:
derived **must=138 complete=19 open=119**; published by §9 **19 / 119**; **zero rows carrying both a
✅ and a ☐** (the failure mode that hid FR-078 at v2.5.4). **The two independent signals AGREE.**
`node hooks/run_gates.cjs --audit` should report exactly that.

Expected and **not** a defect after transcription: Doc 07 v2.10.0 and Doc 08 v2.13.0 both blocking
for want of a passing `document-review` report at the current version. Both are **reviewer-qa's** to
write; I own both documents and reviewed neither.

## 7. Raised, routed, not repaired here

- **`TD-RTM-05` (new, Doc 08 §10)** — Doc 02 §16.3.1 records FR-065 as fully **IN-v1**, v2 "Same",
  divergence "**N**", for a requirement whose §4 text demands unlinkability v1 demonstrably lacks;
  **FR-063 carries "Y" for a strictly smaller gap**. Owner: product-owner. **This session's ruling
  does not rest on §16.3.1** — a row cannot close by citing a source that is wrong about the row.
- **Product-owner:** `TD-RTM-05`; Q18 (FR-093 phase-duration floor).
- **Architect:** Doc 04 §14 `TS-V1-*` floor → `TC-3620`; the DES-097 S-8 anchoring mapping.
- **Engineer:** FR-039 office-ballot guard + tie-break field · FR-065 UNIQUE constraint, the
  convergent `isUniqueInScope` form, and the FR-131(b) disclosure placed *before* the feedback
  controls with a document-order assertion · FR-067 refusal event · FR-081 active/inactive record or
  assertion + the store prototype scan (DES-107 ISS-08) · FR-093 question phase ·
  `NOMINATION_ENDORSEMENTS_MIN` value pin and the stale "flagged for ratification" `it` title.
- **Carried by id, not silently:** Doc 07 v2.9.0 ISS-02 (missing §10 separator) and ISS-04 (the
  clause-(e) surface-vs-claim framing) — owed at the next Doc 07 touch.

## 8. Open items for whoever picks this up

1. **Doc 08 spec still needs transcribing** (43 OPs), then `--audit`.
2. **Two review reports owed from reviewer-qa** — Doc 07 v2.10.0 and Doc 08 v2.13.0, technical mode.
3. **FR-081 is one `it` from closing.** If the engineer records the state on the transition event or
   asserts the DES-107 rule 4 mapping, Doc 08's Must count goes 19 → 20 and US-0091 meets DoD.
4. **FR-067 is one trail event from closing** (Doc 03 §13 already carries it); `TC-3322` is the case.
5. `TD-RTM-02` (the now four-way test-case denominator disagreement: Doc 07 §2 **521**, Doc 08 §6
   **528**, Doc 08 §9 **521**, Doc 07 §10's overlap paragraph **459**) is **still OPEN** and is the
   tester's own owed recount. Not attempted in a version that mints 28 cases.

## 9. IDs touched

`TC-3592`..`TC-3619` (minted) · `TC-0028`, `TC-0029`, `TC-3313`..`TC-3316`, `TC-3317`..`TC-3322`,
`TC-3407`, `TC-3411`, `TC-3419`, `TC-3476` (re-statused or re-linked) ·
`FR-023`, `FR-036`, `FR-037`, `FR-038`, `FR-039`, `FR-065`, `FR-066`, `FR-067`, `FR-081`, `FR-085`,
`FR-093`, `FR-107`, `FR-122`, `FR-123`, `FR-124`, `FR-131`, `FR-132`, `NFR-020`, `NFR-023` ·
`DES-027`, `DES-028`, `DES-066`, `DES-067`, `DES-076`, `DES-085`, `DES-094`, `DES-095`, `DES-096`,
`DES-097`, `DES-098`, `DES-107`, `DES-108` · `ADR-015` ·
`US-0046`..`US-0052`, `US-0074`..`US-0077`, `US-0091`, `US-0095`, `US-0103`, `US-0132`, `US-0133`,
`US-0134` · `UT-0891`..`UT-0907` · `SCR-15`, `SCR-16`, `SCR-22`, `SCR-23` ·
`TD-RTM-05` (new) · `R-21` (new run id) · `Q18`, `OPEN-30`, `OI-16`, `CON-015`.

---

## 10. SubagentStop review-loop block — recorded, not cleared by me

At session exit the `SubagentStop` hook (`hooks/check_gates.py` via `hooks/run_gates.cjs`) blocked
with:

```
Review loop blocked: the following major document version(s) have no PASSING (or human-approved
ESCALATED) document-review report in artifacts/reviews/:
  - 07-test-cases-suites.md  v2.10.0 (technical review) — NO report found for this version
  - 08-traceability-matrix.md v2.13.0 (technical review) — NO report found for this version
```

**This is the review loop working, and it is EXPECTED at this point in the session.** Both documents
were transcribed from my specs during this session and both are `Status: In Review`; neither has yet
been reviewed, because **the review has not been dispatched**.

**I did not write either report, and I must not.** I am the **owning role** of Doc 07 and Doc 08.
CLAUDE.md's review-and-rework loop requires the reviewer to be a neutral role assigned by the
project-manager and **recorded before dispatch**; a report an owner writes to clear its own stop is
not a cycle. The assignment record already names the reviewer:
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md` — **reviewer-qa (Rafael Duarte, a
new instance per document), technical mode**, with the tester excluded as owner and the architect
excluded as the author of the DESs these rows cite. Its "Outcomes" table still reads `_pending_` for
both rows.

**Routed to the project-manager:** dispatch reviewer-qa for **Doc 07 v2.10.0** and **Doc 08 v2.13.0**
(technical rubric; pass bar ≥ 95% **and** zero critical/high/medium). On a FAIL, the rework returns
to me as the owning role and earns a new version; cap 5 cycles, then ESCALATE to the human with a
recorded `approve-as-is` / `rework` / `reject` decision.

## 11. Transcription CONFIRMED for both documents (state at session end)

Both specs were transcribed by the project-manager during this session. I verified each **after the
fact**, by checking that every replacement text appears **exactly once** in the target file:

| Document | Version on disk | OPs | Replacements present exactly once |
|---|---|---|---|
| `docs/07-test-cases-suites.md` | **2.10.0** | 30 | **30 / 30** |
| `docs/08-traceability-matrix.md` | **2.13.0** | 43 | **43 / 43** |

**`node hooks/run_gates.cjs --audit` confirms the RTM invariant, and this is the check the brief
asked for:**

```
RTM Must-row state (structured; invariant (b))
  derived from row status markers: 138 Must rows, 19 COMPLETE, 119 OPEN
  published by RTM section 9:      19 COMPLETE, 119 OPEN
  the two independent signals AGREE
  Gate 2 traceability criterion: NOT MET
```

**The two independent signals AGREE at 19 / 119** — the derived count over the §3.1 + §3.2 status
markers and the §9 published figures match, with no discrepancies and no row carrying both a ✅ and
a ☐. "Gate 2 traceability criterion: NOT MET" is the correct and intended reading: 119 Must rows are
still open, and per the approver rulings of 2026-08-25 and 2026-08-30 that is a **Gate-2 readiness**
condition, not a per-stop or merge condition.

**Nothing further is owed from the tester on these two documents until a review report returns.**
