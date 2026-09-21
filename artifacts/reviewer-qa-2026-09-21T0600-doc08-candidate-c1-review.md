# reviewer-qa session note — 2026-09-21T0600 — Doc 08 v2.13.0, candidate rows, cycle 1

```
Role:       reviewer-qa (Rafael Duarte, new instance) — NEUTRAL REVIEWER, not the owner
Document:   docs/08-traceability-matrix.md v2.13.0 (In Review), technical mode, cycle 1 of 5
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md (recorded before dispatch)
Branch:     design/candidate-des-definition-a · HEAD 12fe4a6
Wrote:      artifacts/reviews/08-traceability-matrix-v2.13.0-technical-cycle1.md ; this note
Did NOT:    edit any document, any code, any test, or artifacts/memory-index.json.
            Did not self-appoint for Doc 07 (a separate reviewer-qa instance owns that report).
Verdict:    FAIL — 87%, 0 Critical / 2 High / 3 Medium / 3 Low
```

## 1. What I did

Independent re-verification, not a read-through.

- `npm test` from the repo root: **739/739, exit 0** — contracts 95 · protocol 178 · sdk 287 ·
  ui 25 · indexer 16 · web 138 (95+178+287+25+16+138 = 739). Matches run R-21 exactly.
- `node hooks/run_gates.cjs --audit`: **derived 138 Must / 19 COMPLETE / 119 OPEN**, **published by
  §9: 19 / 119**. The two independent signals **AGREE**. Doc 07 v2.10.0 and Doc 08 v2.13.0 both
  showed BLOCK for want of a review report at the current version — expected, and now answered.
- Case-by-case verbose runs: protocol candidates 27/27; sdk candidates 43/43; ui PrivacyStatus 25/25
  (UT-0903 group green); web candidates 20/20.
- Mechanical check of every `it` title Doc 07 §5.7 quotes against the four test files: **98 of 98
  verbatim** (the one regex miss is TC-3599's title, which embeds double quotes — verified by eye).
- Spec integrity: all **43** OPs of the Doc 08 spec present **exactly once** (scripted substring
  count). No double-apply, no leaked FIND/REPLACE marker. Table column counts consistent in
  §3.1 (114 rows), §3.2, §3.3 and §7.
- Every published figure re-derived by hand: 19/138 = 13.768% → 13.8%; 40+19+9+5+6+4+5+32 = 120,
  distinct 119; 24+137 = 161; 95+24 = 119; 275+15+231 = 521; 136 inh. + 139 obs. = 275;
  245 + 28 new + 2 re-statused (TC-3407, TC-3411) = 275; 493 + 28 = 521; 17 + 6 = 23 of 142;
  G-TRACE legend 1 NFR + 31 FRs = 32, matching both sign-off enumerations.
- Read Doc 02 §4 normative text **and** §8 Gherkin for all ten requirements, clause by clause;
  Doc 03 v2.16.0 §15 candidate trace sub-table and §10.12.4 screen inventory; Doc 07 §5.7;
  the four test files and `packages/protocol/src/flags.js`.

## 2. Rulings I make as the independent verifier

**I concur with all six OPEN rulings** — FR-039, FR-065, FR-066, FR-067, FR-081, FR-093 — and each
premise was checked against the code, not accepted on assertion:

- **FR-081 is NOT over-cautious.** The architect's "satisfied by derivation" view loses correctly.
  The standard is already set: FR-079 closed at v2.5.0 on "each clause of the stated guarantee has
  its own passing test". No field, no read, no assertion is three absences — and the same SDD's
  cycle-2 review caught DES-107 miscounting its own enum, the exact failure an untested mapping has.
- **FR-067's "refused AND logged" ruling is right.** The words are in FR-067's §8 Gherkin verbatim.
  Capability absence discharges a prohibition; it produces no record.
- **FR-065's two clauses are right.** Both are in §4's normative text. `castFeedback` uses a
  store-local `hasGivenFeedback`/`recordFeedback` pair, not `isUniqueInScope`; the caster record
  exists precisely so a second vote can be refused. `TD-RTM-05` is correctly raised and correctly
  not relied upon.
- **FR-085 closes.** Verified in UT-0897: irrevocability as absence and at the boundary; withdrawal
  before the window calling the store's only delete; the trail recording destruction without ever
  holding the data. The **TC-3476 removal is justified** — Doc 07 now lists it as
  `US-0132 · FR-131 clause 8 · DES-094`, Blocked, and it keeps its place on the FR-131 row here.
  The row would close without the removal, as the document claims.
- **SCR-22/SCR-23 follows Doc 03 §10.12.4** (SCR-22 = feedback widget, SCR-23 = debate schedule and
  post-debate vote) with the long-standing §5.2 inversion recorded, not swapped silently.

**The one closure I would NOT defend at merge as published: FR-036** (ISS-02). Two of its four Doc 02
clauses — withdrawal before the ballot locks, and the endorsement minimum actually **gating** the
candidacy — rest on TC-3605/UT-0897 and TC-3606/UT-0898, and **neither TC nor UT is on the row**.
Doc 07's TC-3605 does not name FR-036 at all. The tests are real and green; the chain is not.

**A second closure I flag rather than block: FR-037** (ISS-03, Medium). Its platform-wide "under any
circumstance" clause closes on a scope premise, not a test. I verified the premise myself
(`ENROLMENT_UI` off above dev; no other real-world-identity holding in the repo), so the substance
holds — but the same version refuses FR-081 for exactly the absence of an assertion, and nothing
reconciles the two rulings.

## 3. Issues raised (full text in the review report)

| ID | Sev | One line |
|---|---|---|
| ISS-01 | High | Three live subtotal lines still read 12/42, 16/98 ("= 122 open of 138 Must") and 4/19 — §3.1 L2110, §3.1 L2186, §3.3 L2248. The recurring defect class, three more sites |
| ISS-02 | High | FR-036 closes without TC-3605 or TC-3606 on the row; Doc 07's TC-3605 does not name FR-036 |
| ISS-03 | Medium | FR-037's platform-wide clause closes on an argument while FR-081's is refused for want of an assertion — no reconciling rule is recorded |
| ISS-04 | Medium | "Thirteen stories were checked" over a list of fifteen; §6 says fifteen |
| ISS-05 | Medium | Source block's Doc 07 pin truncated mid-word ("after that annot"); italic and paren unterminated |
| ISS-06 | Low | §4 has no v2.13.0 orphan sweep for UT-0891..UT-0907 |
| ISS-07 | Low | §7 preamble has no v2.13.0 update note despite 3 retirements + 6 rewrites |
| ISS-08 | Low | §8 change-impact gains no row for the ratified constants, the ICandidateStore seam or the three new revisit flags |

## 4. Gate-2 readiness — withheld

**No merge sign-off. Gate 2 is not ready, and this review does not change that.**

- Suites green: **YES** — 739/739, exit 0, re-run by me against `HEAD` 12fe4a6.
- RTM zero gaps in Must rows: **NO** — **119 open Must rows of 138** (13.8% complete). The gate
  criterion requires zero. Both hook signals agree on the figure, so the number is trustworthy;
  the number itself is a fail.
- Rollback proven: **NO** — never drilled (TC-2425).
- Feature flags / reversibility: **YES for this drop** — `ELECTIONS` is `prod: false` and
  `ENROLMENT_UI` is `staging: false, prod: false` in `packages/protocol/src/flags.js`; the
  candidate-selection work ships dark and is reversible by flag.
- Merge sign-off: **WITHHELD** — two Highs open, one of which (ISS-02) is an unevidenced clause on
  a Must row this version closes. I am Accountable for "RTM complete (zero gaps)" under the RACI
  and will not sign a closure I cannot defend.

## 5. Open items for whoever picks this up

1. Doc 08 rework to **v2.13.1 or v2.14.0** by the tester, then cycle 2 of this loop.
2. ISS-02 needs a **Doc 07 fix too** (TC-3605's requirement cell); it cannot be closed in Doc 08 alone.
3. `TD-RTM-02` (four-way test-case denominator) remains open and is disclosed, not hidden. Not a
   blocker for this cycle.
4. Routed unchanged from the tester and confirmed by me: Doc 04 §14's `TS-V1-*` floor must re-narrow
   to `TC-3620` (architect); the `NOMINATION_ENDORSEMENTS_MIN` value pin and the stale "flagged for
   ratification" `it` title (engineer); `TD-RTM-05` (product-owner).

## 6. IDs touched (read/verified, none written)

`FR-023`, `FR-036`, `FR-037`, `FR-038`, `FR-039`, `FR-065`, `FR-066`, `FR-067`, `FR-079`, `FR-081`,
`FR-085`, `FR-093`, `FR-107`, `FR-131`, `FR-132` · `NFR-007`, `NFR-023` ·
`DES-027`, `DES-028`, `DES-066`, `DES-067`, `DES-076`, `DES-093`, `DES-094`, `DES-095`, `DES-096`,
`DES-097`, `DES-107`, `DES-108` · `ADR-015`, `ADR-023`, `ADR-024` ·
`US-0046`..`US-0052`, `US-0074`..`US-0077`, `US-0091`, `US-0095`, `US-0103`, `US-0132` ·
`UT-0891`..`UT-0907` · `TC-3407`, `TC-3411`, `TC-3419`, `TC-3476`, `TC-3592`..`TC-3619` ·
`SCR-15`, `SCR-22`, `SCR-23` · `TD-RTM-01`, `TD-RTM-02`, `TD-RTM-05` · `R-21` · `OI-16`, `Q18`,
`OPEN-30` · `ISS-01`..`ISS-08` (minted in this review report)

## 7. SubagentStop block — recorded, expected, and NOT mine to clear

On exit the SubagentStop hook blocked with:

```
Review loop blocked: no PASSING (or human-approved ESCALATED) document-review report for:
  - 07-test-cases-suites.md  v2.10.0 (technical) — report EXISTS
    (07-test-cases-suites-v2.10.0-technical-cycle1.md) but Verdict=FAIL, score=91%, C=0 H=0 M=2
  - 08-traceability-matrix.md v2.13.0 (technical) — report EXISTS
    (08-traceability-matrix-v2.13.0-technical-cycle1.md) but Verdict=FAIL, score=87%, C=0 H=2 M=3
```

**This block is the correct mechanical consequence of my own verdict, and it is working as designed.**
Both reports exist at the current version, both were written by the PM-assigned neutral reviewer
(reviewer-qa, one instance per document, recorded BEFORE dispatch in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`), and both returned **FAIL**. The
hook is refusing to advance the SOP on a failed version — which is exactly what it must do.

**I am not clearing it, and I must not.** The bar is score >= 95% AND zero critical/high/medium.
Neither document meets it. Clearing the block requires the **OWNING ROLE — the tester (Ji-woo Park)**
— to rework each document into a **new version** (`Status: In Review`, semver bumped), which is then
re-reviewed as **cycle 2**. A report written by me to clear my own stop would not count as a cycle
and would corrupt the loop. I have written exactly the two reports I was assigned and nothing else:
no document, no code, no test, and not `artifacts/memory-index.json`.

**Routing, for the project-manager who sequences the loop:**

| Document | Version | Verdict | Owner of the rework | Next |
|---|---|---|---|---|
| 08 RTM | v2.13.0 | FAIL 87% (0C/2H/3L+3M) | tester (Ji-woo Park) | v2.13.1 or v2.14.0 → cycle 2 |
| 07 Test Cases | v2.10.0 | FAIL 91% (0C/0H/2M) | tester (Ji-woo Park) | new version → cycle 2 |

**Sequence them together.** My Doc 08 **ISS-02** cannot be closed inside Doc 08 alone — it requires
`TC-3605`'s requirement cell in **Doc 07** to name **FR-036**. If Doc 07 is reworked first without
that change, Doc 08's cycle-2 will fail again on the same finding. Cycle count stands at **1 of 5**
for both; four cycles remain before the ESCALATE-to-human cap.

**Gate 2 is unaffected by this block and remains shut on its own merits:** 119 open Must rows of 138,
rollback never drilled, no audit. The block delays a document version; it does not change the gate.
