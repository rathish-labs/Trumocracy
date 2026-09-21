# Document Review Report — Doc 07 Test Cases & Suites v2.9.0 (technical, cycle 1)

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.9.0
Review mode: technical
Reviewer role: reviewer-qa
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 4
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 07 v2.9.0 mints fifteen test cases, `TC-3577`..`TC-3591`, one per `it` of the `UT-0890`
`/verify` flag-gate block, into §5 `TS-ADV-01…16` (`ADV-02 · RISK-02`), and records run **R-20**.
I verified the mint against the repository rather than against the document: the `describe` opens
at `apps/web/test/safety-surfaces.test.tsx` line **430** and contains exactly **15** `it`s (41 in
the file); I re-ran `npm test` from the repo root (**exit 0**; protocol 151 · sdk 244 · ui 18 ·
indexer 16 · web **116**, `safety-surfaces.test.tsx` 41/41) and re-ran the block case by case —
`npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0890"` returned
**15 passed, 26 skipped (41)**, every `it` green individually, reproducing the tester's figure
exactly. I mapped each of the fifteen `it` names, in order, to its `TC` row: the correspondence is
**one-to-one with no drift**, and each row's stated assertion matches the test's actual assertion.
Every arithmetic identity re-derives (109 + 136 + 15 = 260; 478 + 15 = 493; 54 + 15 = 69 and
34 + 15 = 49 in the §2 suite table; 485 → 500 cross-referenced). The **Pass (obs.)** promotions
are earned on the document's own stated bar, and the R-20 discharge claim is honestly qualified
rather than flat. **PASS** — four Lows, none blocking; the sharpest is that the document mints
fifteen ids out of the `TS-V1-*` band without restating the free band, which is the discipline
v2.8.1 ISS-03 established one version ago and which this version's own status block cites by name.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Every case ties to `FR-132 §(d)` (or `NFR-023 · DES-085` for TC-3586, correctly scoped) and to `US-0133`. The FR-131 exclusion is ruled from Doc 02 §4.45's own closing sentence and is **correct** — see §6. TC-3577's flag-default scope limit, TC-3584's "if that default ever flips, this case still passes and the product becomes dishonest", TC-3587's "right fact on the wrong surface" and TC-3590's "does not assert that the Arabic says what the English says" are disclosures a weaker version would have omitted |
| T2 Soundness | 20 | 98 | 19.6 | Suite placement in `TS-ADV-02 · RISK-02` is justified **and** its own weakness named (a false enrolment claim sits substantively closer to RISK-06/RISK-07); `TS-V1-ID` deliberately not opened, with a reason that holds. No case is offered as RISK-02 mitigation and §5's RISK-02 verdict is untouched |
| T3 Traceability & IDs | 20 | 96 | 19.2 | Ids contiguous, inside the free band, none reused, renumbered or re-statused — verified by an id sweep across all of `docs/`. §5 heading, §2 suite row, §8 file inventory, §8 orphan check, §0.2, §9 and §10 all moved together. Minus 4 for ISS-01 and ISS-03 |
| T4 Security & failure modes | 15 | 97 | 14.55 | The flag gate is the reversibility story and it is recorded honestly: dark above `dev`, `permanentFlags()` empty, `removeBy` naming CON-015. TC-3578's limit (a `removeBy` must *exist*, not expire) and TC-3583's (`SiteHeader` is one surface; the home CTA still links to `/verify/`) are exactly the failure modes a reader needs |
| T5 Completeness & testability | 15 | 98 | 14.7 | Every row carries steps, expected result, mapped `UT` and status; every one re-verified green by me. Orphan count 0, re-derived. The reverse sweep over the five retired claims returns zero hits in both documents, and the tester names that zero as the finding rather than as a clean bill of health |
| T6 Convention compliance | 10 | 95 | 9.5 | ISO-8601 dates, RFC 2119 and the retained-record convention all honoured. Minus 5 for ISS-02 |
| **Total** | **100** | — | **97%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Low | T3 | §2 status block (lines 15–16); Changelog, v2.8.0 entry ("The free `TS-V1-*` band after this mint is TC-3577–TC-3699") | **Fifteen ids are drawn from the `TS-V1-*` band and the free band is not restated.** The document's only statement of the band remains **TC-3577–TC-3699**; after this mint the free band is **TC-3592–TC-3699**. This is the defect v2.8.1 ISS-03 closed one version ago for a single id ("v2.8.0 minted TC-3576 without restating it, leaving … the document's only statement of the band one id out of date") — now **fifteen** ids out of date, and this version's status block cites ISS-03 by name while not applying its discipline. Consequentially **Doc 04 v1.6.0 §14 still reserves TC-3570–TC-3699**, now 22 ids stale, and this version routes no narrowing to the architect, who is holding Doc 04 open in this same session | Restate the free band as **TC-3592–TC-3699** in the v2.9.0 changelog entry; annotate (do not edit) the v2.8.0 sentence as superseded; add a one-line routing note that Doc 04 §14's reservation needs narrowing to TC-3592–TC-3699 (architect, Ravi Deshmukh) |
| ISS-02 | Low | T6 | §10 table, "Cases with an implementing automated test" row | Sentence-join defect: "… observed case by case in R-19) **v2.9.0 adds 15** (TC-3577..TC-3591 …" — no separator between the v2.8.0 clause and the v2.9.0 clause, so the two run together | Insert `; ` or a full stop before "**v2.9.0 adds 15**" |
| ISS-03 | Low | T3 | §2 footer, the "**260 of 493 cases have an implementing automated test**" paragraph | The inner enumeration of which drops contribute automated tests still stops at "of the 7 TC-3570..TC-3576, **6 are Pass (obs.)** … TC-3575 … is Blocked". `TC-3577..TC-3591` are absent from it, so the enumeration no longer accounts for its own headline **260**. Contained, because the appended _(v2.9.0: 94 → 109 and 245 → 260 …)_ note in the same paragraph covers them explicitly and §10's row enumerates the +15 | Extend the inner enumeration by one clause for the fifteen UT-0890 cases, so the list reconciles to its headline |
| ISS-04 | Low | T2 | §5, TC-3581 scope limit (3) and TC-3585 scope limit | **The clause (e) carve-out is stated as surface-scoped where Doc 02 scopes it by claim.** The rows reason "the `/verify` copy is enrolment copy, therefore clause (e) does not govern". Doc 02 §4.45 clause (e) is scoped to **claims about participation acts**, not to pages: "This clause governs **participation acts only**". The shipped `en.verify.unavailableBody` itself names two participation acts — "anyone can make an account, **join a party**, read, discuss and **support one**, and nobody is checked at all". **The ruling's outcome is right** (no `/verify` string asserts that a participation act is unknowable, so clause (e) is not engaged, and the four-word ban reaches only "v1 voting behaviour or any other v1 participation act"), but the stated reasoning would license a future enrolment-page string that *did* make such a claim | Restate the carve-out from the **claim**, not the surface: clause (e) does not reach these strings because none of them asserts that a participation act is unknowable to Trumocracy — not because they sit on `/verify` |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL; there are none.

## 5. Routing instruction (to the owning role)

**PASS.** The owning role — **tester (Ji-woo Park)** — sets `Status: Approved` on Doc 07 v2.9.0 and
the SOP advances. The four Lows are **non-blocking and carried**, to be folded at the next touch of
this document. **Fold ISS-01 first:** an un-restated band is how an id gets reused, and its Doc 04
§14 half is live this session while the architect holds Doc 04 open.

## 6. Reviewer's independent rulings (evidence, not acceptance)

- **The mint is real and correctly sized.** `describe` at `apps/web/test/safety-surfaces.test.tsx`
  line **430**; **15** `it`s; 41 in the file. Verbose run: **15 passed, 26 skipped (41)**. The
  fifteen `it` names map one-to-one and in order to TC-3577..TC-3591, and each row's stated
  assertion is the assertion the test actually makes. Re-verified against source, not against the
  document: `packages/protocol/src/flags.js` (`ENROLMENT_UI` defaults `dev: true, staging: false,
  prod: false`; `removeBy` present, naming CON-015 and FR-132 §(b); description contains both ids),
  `apps/web/src/app/verify/page.tsx` (the flag branch and the `verify-unavailable` placeholder),
  and `apps/web/src/i18n/en.ts` (all five TC-3587 substrings and TC-3588's "nobody is checked at
  all" present verbatim).
- **No id is reused, renumbered or drawn outside the band.** Sweep of `TC-35[7-9][0-9]` across all
  of `docs/`: TC-3577..TC-3591 occur only in Docs 07 and 08 and nowhere before this version. Doc 04
  v1.6.0 §14 reserves TC-3570–TC-3699; TC-3570..TC-3576 were drawn at v2.7.0/v2.8.0; the fifteen
  fall in the free remainder. (See ISS-01 for the consequence.)
- **FR-131 versus FR-132 — the tester is right, and I read the clause myself.** Doc 02 §4.45 clause
  (e) closes: "This clause governs **participation acts only**: claims about personhood enrolment
  and identity verification are addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18 and are
  **expressly outside this clause**." The four-word ban in the same requirement is scoped to "v1
  voting behaviour **or any other v1 participation act as defined in clause (e)**", so it does not
  reach enrolment copy either. TC-3585 and TC-3591 applying the four-word list as an **instrument**
  rather than as an FR-131 obligation is the correct reading, and both rows say so in terms.
  **No case here carries an FR-131 link and none should.** One framing caveat only: ISS-04.
- **The Pass (obs.) promotions are earned.** The document's own bar is a full-suite green *plus* a
  case-by-case verbose re-run of the block. Both halves happened and I reproduced both. The
  discipline holds in the other direction too: TC-3564..TC-3569 are again **not** promoted, and
  `TD-07-03`'s 15 rows are again **not** promoted — both stated rather than left to inference.
- **R-20's discharge claim is sound and honestly qualified.** R-18/R-19 ran against an uncommitted
  76-path tree; that work merged at `18244e8` and R-20 runs against it. The tester does not claim a
  pristine tree — it names three dirty paths, all session-governance records under `artifacts/` —
  and I confirmed independently that **no test in this repository reads any of them** (nor
  `SECURITY.md`, the one other root file dirty in this session). My own re-run, taken when the only
  modified tracked paths were `SECURITY.md`, `artifacts/*` and Docs 07/08 — **no product, test or
  configuration path** — reproduces the result. The discharge is good, and the qualification is
  stated at the right strength: "clean" is claimed of the categories that matter, not of the tree.
- **Figures, re-derived rather than accepted.** designed 478 → **493**; automated 245 → **260**;
  observed 94 → **109**; inherited **136**, not executed **15**, Blocked **176**, No mechanism
  **49**, Manual **12** — all unchanged. Identity `109 + 136 + 15 = 260` holds. §2 suite row
  `54 | 34 | 20` → `69 | 49 | 20` holds (`49 + 20 = 69`). §10's parenthetical correctly
  forward-references Doc 08's **500** and labels the two conventions as unreconciled rather than
  quietly bridging them. **Every place that names a moved figure moved together** — §0.2, §2, §5,
  §8, §9, §10 — which is the specific failure mode this lineage has repeated, and it did not repeat
  here in this document.
- **The Must count genuinely holds.** `node hooks/run_gates.cjs --audit` reports **138 Must · 16
  COMPLETE · 122 OPEN** with both independent signals agreeing, and I re-derived the *reasoning*
  rather than the number: FR-132 §(a)/(b)/(c) are unbuilt in code (no `phone_hash` or
  `subject_id_hash` implementation beyond the SDK seam and `PrivacyStatus`), §(e) is a procurement
  clause with no procurement, and §(d)'s statement duty is placed by Doc 02 on "the FR-131 honesty
  notice (**DES-098**)", which does not exist. NFR-023 stays `G-UI` because no jargon scanner and
  no readability check exist. **Nothing in this drop closes a row, and the document does not claim
  otherwise.**
- **Out-of-scope items confirmed left alone.** `TD-RTM-01` — no new case cites UT-0841..UT-0848
  (checked). `TD-RTM-02` — all three conventions move by +15, none reconciled, and the document
  says so. `TD-RTM-04` — every new case cites `US-0133`, which is traced. `TD-07-01/02/03` —
  unchanged; the §8 "Cases mapped" **14** is again not advanced, with the v2.8.0 reason restated
  rather than a new one invented. I agree with each of those calls.
- **On declining the `SCR` link:** correct, and it is the tester's best call of the session. Doc 03
  §10.12.4 maps the Verify flow to **SCR-01 (partial)** and **SCR-02 (partial)** and carries an
  open **Conflict C-01** on that very surface. Asserting a screen id would have been the tester
  resolving an architect's open conflict from a trace cell. Routing it to Ravi Deshmukh while he
  holds Doc 03 open this session is exactly right.
