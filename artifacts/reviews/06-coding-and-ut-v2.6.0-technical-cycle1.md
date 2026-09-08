# Document Review Report — Doc 06 Coding & UT v2.6.0 (+ the code drop), technical mode, cycle 1

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.6.0
Review mode: technical
Reviewer role: tester (Ji-woo Park) — neutral; assigned by the project-manager in artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md; the owning role (engineer, Samuel Oyelaran) is excluded
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 06 v2.6.0 and its code drop implement the approver-confirmed FR-131 clause-(e) honesty fix
(`artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11) **exactly and verifiably**. All
four ruled strings are **byte-identical** to the normative text (§4.1, §4.2, §5.1, §5.2), the sdk
refusal message matches §5.3 with the tier gate's reason intact, and **UT-0889 asserts every one of
the five things §5.4 requires** — source strings *and* rendered page, the plain-substring ban, the
Arabic negatives, the sdk message — and would fail on all four of the retired strings. I re-ran the
suite myself: **624/624 green (contracts 95 / protocol 151 / sdk 244 / ui 18 / indexer 16 / web
100)**, `npm run typecheck` exit 0, `npm run lint:deps` "7 workspace package(s) checked — layering
OK". My independent FR-131(e) sweep over `apps/web/src/i18n/*.ts` and `packages/*/src/**` found **no
remaining unnegated claim that a v1 participation act is unknowable to Trumocracy**.

It nonetheless **FAILS**, on the document rather than the code. §7 is, in this document's own words
(item 27), "the canonical register of what this drop leaves owed" — and at v2.6.0 that register, plus
two other passages of **new v2.6.0 prose**, publish **three cascades as still owed that are closed at
HEAD in Approved documents**: Doc 03 v2.13.0 closed all of item 26(a) at v2.12.0; Doc 09 v1.9.0
records `REL-LIM-18` **CLOSED** with its SHA and states in terms that "**Doc 06 v2.5.1 §7 item 26(c)
is closed**"; Doc 07 v2.6.0 / Doc 08 v2.9.0 (both Approved, 2026-09-06) carry `TC-3564`…`TC-3569` for
`UT-0887`/`UT-0759`/`UT-0888`. A release-prep register that over-states open work by three items is a
contained but real defect (**ISS-01, Medium**) — and the direction matters less than the fact that the
PM is assembling a Gate-2 picture from exactly this section this week. Everything else is Low.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL`

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | Clause (e) is implemented at every site the approver reached (DECISIONS §4, §5, §5.3), in **both** locales in one change set. My own clause-(e) sweep (§6 below) found no residual unnegated v1-participation-act claim. −3 for the two sweep residues the register does not inventory (ISS-05) |
| T2 Soundness | 20 | 98 | 19.6 | The four en/ar strings are byte-exact against the normative text; the sdk message matches §5.3 and preserves the gate's reason ("authorship is public and a Supporter's participation is never published … self-declared — no one approves it"); the SHOULD markers land on the two protocol doc comments and nothing else; `ballot.js` and `private_endorsement` correctly untouched; "no feature flag" correctly justified (a correction of a false statement is not a feature). Code diff is exactly the commissioned set — no out-of-scope feature |
| T3 Traceability & IDs | 20 | 88 | 17.6 | `UT-0889` correctly minted in the free `apps/web` band (Doc 04 §UT-0850–UT-0899, free from UT-0887), used nowhere else, registered in §3 with an accurate count, TC owed to the tester. −12 for ISS-01: three passages of new v2.6.0 prose mis-state the current state of the `UT-0887`/`UT-0759`/`UT-0888` → TC chain, the FR-131 RTM row (which is **OPEN**, not absent), and the Doc 03/Doc 09 cascades |
| T4 Security & failure modes | 15 | 98 | 14.7 | The defect class *is* the safety property here, and the fix removes the highest-consequence copy defect in the product; the guard fails the build on regression in both locales and at both source and DOM level. `IS_INSECURE_MOCK` discipline and the capability-absence suites are untouched by this drop (no seam or ABI surface changed) |
| T5 Completeness & testability | 15 | 90 | 13.5 | UT-0889 satisfies **all five** §5.4 requirements and genuinely fails on the old strings; §3 table arithmetic re-derived and exact (624, and every per-workspace addend matches `npm test`); both carried Lows discharged with evidence. −10 for ISS-01, ISS-03 (no jargon scan over the new user-facing strings, against the house pattern) and ISS-05 |
| T6 Convention compliance | 10 | 92 | 9.2 | Header/semver/`Status: In Review`/ISO dates correct; change history complete and honest about what was *not* done; annotate-don't-delete respected. −8 for ISS-02 (§5.0 omits the v2.5.1 cycle-2 entry — the recurring stale-review-record class this document has been caught on three times) and ISS-04 (§2.2/§4a assert a CI jargon scan that does not exist) |
| **Total** | **100** | — | **94%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 / T5 | §7 item 26 (a), (b), (c) (lines ~972–982); change history v2.6.0, the "Not done in this session" clause (lines ~70–73); §3 UT-inventory closing note (lines ~656–658); §4a "Recorded deviation…" final sentence ("The SDD cascade is owed to the architect (§7 item 26); until it lands, UT-0759 is the record of the intended copy") | **The register publishes as owed three cascades that are closed at HEAD in Approved documents.** (a) **Doc 03** — all three sub-items landed at **v2.12.0** and Doc 03 is now **v2.13.0, Approved**: the §10.12.3 backing-aware sub-table v1 row title now reads `"Verified"` with the overruling annotated (line 1766); the three-state reference table's `ver` title cell now carries the v1-default caveat and its note is corrected ("A note that guards one cell of a two-cell row does not guard the row", line 1753); §13 "Public tallies in Phase 1" now states the FR-131 truth instead of "anonymous but not receipt-free" (line 2955). (b) **Doc 09 v1.9.0, Approved** — the `REL-LIM-18` row is `~~REL-LIM-18~~ **CLOSED**` with the commit SHAs `0a5c542`/`84e2203` (line 909). (c) **Doc 07 v2.6.0 and Doc 08 v2.9.0, both Approved 2026-09-06** — `TC-3564`…`TC-3567` (UT-0887), `TC-3568` (UT-0759), `TC-3569` (UT-0888) exist and are approved; Doc 09 line 1034 states it in terms: "Those rows are therefore **authored, reviewed and approved**, and **Doc 06 v2.5.1 §7 item 26(c) is closed** — not merely discharged into review." Separately, the same passages call "the FR-131 RTM row" *owed*: it is **not absent, it is OPEN** (`G-PHASE3`) — Doc 03 §15 line 3082 makes exactly this correction against its own earlier text. This is not inherited staleness: the "still-owed UT-0887/UT-0759/UT-0888 rows" and the "unchanged by this drop" cascade clause are **new v2.6.0 prose** | Annotate (don't delete) 26(a), 26(b) and 26(c) as **CLOSED**, each with the document, version and the evidence that closed it (Doc 03 v2.12.0 §10.12.3 + §13; Doc 09 v1.9.0 `REL-LIM-18` row + `84e2203`; Doc 07 v2.6.0 `TC-3564`–`TC-3569` / Doc 08 v2.9.0). Rewrite the change-history and §3 clauses so the only TC row named as owed is **UT-0889's**, and state the FR-131 RTM row as **OPEN (G-PHASE3)**, not owed. Correct the §4a "until it lands" sentence. Advisory in the same pass: the header `Source: SDD-TRUMOCRACY v2.7.1` pin and the in-body "v2.7.1 sub-table / v2.7.1 normative note" citations are three minor versions behind Doc 03 v2.13.0 |
| ISS-02 | Low | T6 | §5.0 "Scaffold-drop technical review record", first list entry (line 732) | §5.0 has **no `v2.5.1 cycle 2` entry**, although `artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md` exists (PASS 98%, 0C/0H/0M/2L) and this version cites it **three times** elsewhere (§4a line 707, §7 item 27 line 1026, change history line 57). A reader of the canonical review log would conclude v2.5.1 was never reviewed. The engineer's reasoning ("no v2.6.0 review report exists yet") is correct **for v2.6.0** and does not cover the missing v2.5.1 line. This is the same stale-review-record class the loop caught at v2.3.1, v2.3.2 and v2.3.3, each graded Low | Add the `v2.5.1 cycle 2` line to §5.0 with its report path, score and severity counts, and note that both Lows were folded into v2.6.0 rather than carried |
| ISS-03 | Low | T5 | `apps/web/test/safety-surfaces.test.tsx` UT-0889 (lines 294–374); §4a "Jargon filter clean" bar | The two new user-facing landing strings are covered by **no jargon scan**. The house pattern adds one per new string set — UT-0857 (party creation), UT-0868 (membership), UT-0884 (proposals) — and §4a lists "Jargon filter clean" as a code-drop bar. UT-0889's `BANNED` array is the four FR-131 words only. I scanned both new strings by hand against §2.2's full list (wallet, seed, seed phrase, private key, gas, token, mint, chain, block, hash, crypto): **clean**, so this is a coverage gap, not a correctness defect | Extend UT-0889 (or the existing scan) with the §2.2 jargon list over `en.home.steps[1].body` and `en.home.promises[0]`, so the bar is enforced rather than asserted. If the engineer prefers, record in §4a that the landing strings' jargon check was performed by inspection at v2.6.0 and name the reviewer |
| ISS-04 | Low | T6 | §2.2 "Jargon filter (DES-085, NFR-023)" (line ~537); §4a jargon row, "How verified" cell | Both passages assert a mechanical CI enforcement that does not exist: "The CI jargon-filter scan (`packages/protocol/src/flags.js` boundary; DES-085) **enforces this mechanically**", and the §4a bar is "verified" by "CI jargon-filter scan; safety-surfaces test". `.github/workflows/` contains only `verify.yml` (deps, contracts build, five test jobs) and `dco.yml`; `verify.yml` has no jargon step; `grep -rn jargon packages/protocol/src tools/` returns one unrelated comment. §4a's own preamble — "A reviewer failing to find one of these is a reviewer who has been misled" — is the reason this matters | Either add the CI step, or correct §2.2 and §4a to say the filter is enforced **by the per-story test scans** (UT-0740/0857/0868/0884 pattern) and name the gap. Pre-existing, but §4a is a bar a reviewer is told to rely on |
| ISS-05 | Low | T1 / T5 | §7 item 26, "Still stand, and why" paragraph (lines ~1013–1020) | The clause-(e) residue inventory is not exhaustive; my sweep (§6) found two sites it does not name. (i) `packages/ui/src/PrivacyStatus.tsx:251-252` — the `anon` state's `title: 'Anonymous'` and `subtitle: 'Nothing you do here is linked to you'`. It is **not public-facing today** (the component is unmounted; six explicit non-render comments across five consuming files, re-verified by Doc 09 v1.9.0), so clause (e) does not bite — but it is precisely the string a future mount would ship, and Doc 06 is where that gets recorded. (ii) The justification given for `private_endorsement` is imprecise: Doc 06 says `ballot.js` and the flag description "describe v2/Phase-4 behaviour **explicitly** — they name the phase". `ballot.js` does ("absent in v2 for receipt-freeness"); the flag *description string* is `'Charter option: fully private petition endorsement for high-risk jurisdictions.'` and names no phase — the phase lives in the sibling `removeBy: 'Phase 4'` and `defaults.prod: false` fields. The conclusion (it stands) is right; the stated reason is not, and DECISIONS §5.3 rests on that reason. v2.5.0 ISS-01 was this exact class, graded Low | Add both to "Still stand, and why" with their real reasons: the `anon` badge because the component ships on no surface (with a "re-review before first mount" flag alongside the existing `ver`-title precedent), and `private_endorsement` because it is **developer-facing flag configuration whose entry names Phase 4 and is off in prod**, not public-facing copy |
| ISS-06 | Low | T5 | `apps/web/test/safety-surfaces.test.tsx:325` — `expect(ar.home.steps[1].body).not.toContain('سري')` | The bare-substring Arabic assertion is brittle against the **owed** ARABIC-I18N native-speaker rewrite (DECISIONS R-7, pre-Gate 2): common unrelated words contain the sequence — `سريعًا` ("quickly"), and `تسري` ("takes effect") already appears at `ar.ts:123` in `parties.leaveHelp`. Scoped to one string it is correct today and the suite is green; it is a trap for the rewrite that is already scheduled. Implemented exactly as DECISIONS §5.4 specifies, so this is a note on the spec's mechanics, not a departure from it | No change required at v2.6.0. Record in §7 (or in the ARABIC-I18N item) that the `'سري'` assertion should move to word-boundary-aware matching when the native-speaker rewrite lands, so a legitimate rewording does not read as a regression |

> **Low** issues do not block the pass bar. The single **Medium** (ISS-01) forces the FAIL.

---

## 5. Verification performed (so the next reviewer need not re-derive it)

**5.1 The normative strings — byte-exact.** I extracted the concatenated literals from source and
diffed them against the DECISIONS blockquotes with whitespace normalised:

| Site | Against | Result |
|---|---|---|
| `en.ts` `home.steps[1].body` | DECISIONS §4.1 | **EXACT MATCH** |
| `en.ts` `home.promises[0]` | DECISIONS §5.1 | **EXACT MATCH** |
| `ar.ts` `home.steps[1].body` | DECISIONS §4.2 | **EXACT MATCH** |
| `ar.ts` `home.promises[0]` | DECISIONS §5.2 | **EXACT MATCH** |
| `packages/sdk/src/proposals.js` `AUTHORSHIP_REQUIRES_WORKER_TIER` | DECISIONS §5.3 | **EXACT MATCH** (straight apostrophe in both; the switch to double-quoted literals carries it without escapes). The gate's reason survives in full: authorship is public · a Supporter's participation is never published · Worker tier is self-declared — no one approves it |

The four DECISIONS §4 facts all survive in the en copy: (i) public act, on purpose; (ii) name not
shown; (iii) our own records can link it to your account; (iv) nobody decides — the count does. The
step **title** is unchanged and makes no claim, as §4.1 requires.

**5.2 UT-0889 against DECISIONS §5.4 — every requirement met, and it fails on the old strings.**

| §5.4 requirement | Assertion | Fails on the retired string? |
|---|---|---|
| `steps[1].body` no "kept private"; has "public act", name-not-shown, "our own records can link" | lines 299–302 | **Yes** — old S-1 was "…with your name kept private." |
| `promises[0]` no "never learn"; has "never publish" | lines 310–311 | **Yes** — old string was "We never learn which party you support." |
| Neither string contains private / anonymous / receipt-free / secure (plain substring ban — no negated form applies here) | `BANNED` loop, lines 303–305 and 312–314, lower-cased | **Yes** — "private" in old S-1 |
| Arabic mirror: no `سريًا`/`سري` in the endorsement step; no `لا نعرف` about membership | lines 324–326 | **Yes** — old ar step carried `سريًا`, old ar promise `لا نعرف أبدًا` |
| Asserted against the **rendered page**, not only source | line 318–320: `wrap(<HomePage />)` then `getByText(en.home.steps[1].body)` and `getByText(en.home.promises[0])` | Binds source to DOM (by design it does not itself detect the old copy — the four assertions above do) |
| sdk refusal message (§5.3) | lines 330–372: real `ProposalService` fixture, files as `PARTICIPATION_TIER.SUPPORTER`, asserts code + `not.toContain('Supporters are anonymous')` + `toContain("a Supporter's participation is never published")` | **Yes** |

I reasoned this from the assertions and the retired strings recorded in DECISIONS §1/§5; I did not
modify product code to test it.

**5.3 Suites — run by me, not quoted.**

| Command | Result |
|---|---|
| `npm test` | **624 passed, 0 failed** — contracts **95**, protocol **151**, sdk **244**, ui **18**, indexer **16**, web **100** |
| `npm run typecheck` | exit **0** (`packages/ui`, `apps/web`) |
| `npm run lint:deps` | "dep-guard: 7 workspace package(s) checked — layering OK", exit **0** |

The §3 table sums to **624** and every per-workspace subtotal matches the observed run exactly; the
web addend sentence (16+27+27+1+18+2+4+5 = 100) is arithmetically correct. This is the first version
in this document's history where I could re-derive the whole inventory without a discrepancy.

**5.4 Doc 06 checks.** Header `Version: 2.6.0` / `Status: In Review` / `Last updated: 2026-09-06`
correct for a version entering the loop. Change history is complete, cites DECISIONS §11 and Doc 02
v2.17.0, and is candid about what was not done. §3 carries a `UT-0889` row (web, 5) with the TC owed
to the tester. §7 item 26 is genuinely rewritten — the header no longer says "left in place", a
"Fixed at this version" paragraph names every change with its DECISIONS citation, a "Still stand, and
why" paragraph covers the protocol markers / `ballot.js` / `private_endorsement`, and **26(d) (the
DES-098 acknowledge-to-proceed control) is restated as still owed under US-0134** — correct, it is
unbuilt. **No ID reused:** `UT-0889` appears at exactly two places in the tree (both in the new
describe block), the previous high-water mark was `UT-0888`, and Doc 04's allocation table leaves
`UT-0887–UT-0899` free in the `apps/web` band; `UT-0899`/`UT-0900` elsewhere are band boundaries, not
minted IDs. **Citations resolve:** Doc 02 v2.17.0 §4.45 FR-131 clause (e) is present and says what
Doc 06 says it says; DECISIONS §11 records the approver's four confirmations; Doc 12 line 251 and
`flags.js` confirm `private_endorsement` is Phase 4, prod off.

**5.5 Carried Lows from v2.5.1 cycle 2 — both DISCHARGED, not carried.**

- **ISS-C2-01** — §4a now reads "the longest **18** words" and quotes the distribution
  8/10/14/9/18/17/6/11 inline. I re-counted sentence 5 ("But the record exists, and it could be shown
  if somebody pressures you to prove how you voted.") = **18 words**. Correct.
- **ISS-C2-02** — §7 **item 27 (new)** records it RESOLVED, and the claim checks out at HEAD:
  `git ls-files apps/web/tsconfig.tsbuildinfo` returns nothing, `.gitignore:24` carries
  `*.tsbuildinfo`, and commit `84e2203` (PR #19) contains both the `.gitignore` addition and the
  file's deletion. Recording it in the register rather than only the log is exactly what ISS-C2-02
  asked for.

**5.6 §4a bars.** *Suite green* ✅ (624 ≥ 619 baseline). *Dep-guard clean* ✅. *Typecheck clean* ✅.
*IS_INSECURE_MOCK discipline* ✅ — **untouched**: the drop changes five product files and none of them
touches a seam, stub, composite or `IS_INSECURE_MOCK` call site (`git diff HEAD` confirms; the only
occurrence in a changed file, `sdk/proposals.js:213`, is unmodified). *Capability-absence tests* ✅ —
no ABI, selector or opcode surface changed. *No out-of-scope feature* ✅ — the diff is precisely the
commissioned strings, comments, markers and guard. *Honesty copy matches DES verbatim* ✅ — matched
character-for-character against the approver-normative DECISIONS text (§5.1 above), which is the
governing source here. *Jargon filter clean* — clean **in substance**, verified by hand; **not**
covered by a test (ISS-03) and the stated CI enforcement does not exist (ISS-04).

---

## 6. FR-131(e) sweep — run independently, with dispositions

Scope as commissioned: `apps/web/src/i18n/*.ts` and `packages/*/src/**` (plus `services/*/src` and
`apps/web/src` non-i18n, for completeness), case-insensitive on
`anonym|privat|secret|secure|receipt[- ]free|unlinkab` and on the Arabic
`مجهول|سري|خصوصي|خاص|لا نعرف|مخفي`.

**Result: no remaining unnegated claim that a v1 participation act is unknowable to Trumocracy.**
Every hit falls into one of the dispositions below.

| # | Site | String / symbol | Disposition |
|---|---|---|---|
| 1 | `en.ts:403-410`, `ar.ts:361-367` | `banner.notReceiptFreeTitle` / `Body` — "not anonymous, not receipt-free and not coercion-resistant" | **Legitimate — mandated.** FR-131(a)'s required negated forms, expressly carved out by clause (e)'s closing sentence. Guarded by UT-0887 |
| 2 | `en.ts:126`, `ar.ts:115` | key name `parties.joinPrivate` | **Legitimate.** An identifier, not a rendered string; its **value** is the approved clause-(e) satisfying pattern (states what is not published, separately states what our records can see). Guarded by UT-0869 |
| 3 | `en.ts:418`, `ar.ts:374` | key name `errors.anonymityTooSmall` | **Legitimate.** Identifier only; the rendered value makes no anonymity claim ("Too few people in your area have shown they are real, so acting here would point at you") |
| 4 | `en.ts:44-46`, `ar.ts:46-48` | `home.steps[0].body` — "We never see your documents, your name or your address" | **Out of scope by design.** An enrolment/verification claim, expressly excluded by clause (e) ("claims about personhood enrolment and identity verification are governed by FR-132 and §16.4 H-16/H-17/H-18"); routed unruled as DECISIONS §7.1 / Doc 02 §13 (j). Doc 06 item 26 names it as untouched — correct |
| 5 | `en.ts:66` | `home.promises[3]` — "We do not count your visits…" | **Out of scope.** Not a participation-act claim; DECISIONS §7.1 routes it to the sre for confirmation against the deployed build. Non-blocking |
| 6 | `ar.ts:123` | `parties.leaveHelp` — "المغادرة **تسري** فورًا" | **False positive.** `تسري` = "takes effect"; shares the root but is not "secret". Not in the string UT-0889 scans |
| 7 | `packages/protocol/src/proposals.js:16, 23, 67` | FR-082 doc comments describing the requirement | **Legitimate — SHOULD marker applied.** `~23` and `~67` now carry "(FR-082 — Definition-B property; §16.3 DEFERRED-v2)" per DECISIONS §5.3. Line 16 ("a reason that is about anonymity … — see below") points at the marked passage and needs no marker of its own |
| 8 | `packages/sdk/src/ballot.js:68, 69, 96, 295` | "absent in v2 for receipt-freeness" / "absent in v2 for unlinkability" / `receiptFree: false` | **Legitimate — stands.** Names the phase explicitly and declares v1 honestly (`receiptFree: false`). DECISIONS §5.3: "both stand" |
| 9 | `packages/protocol/src/flags.js:52-58` | `PRIVATE_ENDORSEMENT.description` — "fully private petition endorsement" | **Stands, but the recorded reason is imprecise — ISS-05(ii).** Developer-facing flag configuration; the entry names `removeBy: 'Phase 4'` and is `prod: false`, but the **description string itself** names no phase, contrary to Doc 06's "they name the phase" |
| 10 | `packages/protocol/src/flags.js:42-47` | `MACI_VOTING.description` | **Legitimate.** States the v1 truth in negated form; guarded by UT-0888 |
| 11 | `packages/contracts/src/core/Governor.sol:26-32` | NatSpec: "NOT anonymous, NOT receipt-free…" and "Do not describe a v1 vote as anonymous, private, receipt-free or secure" | **Legitimate.** Negated + a standing instruction; closed under REL-LIM-18 |
| 12 | `RegionRegistry.sol`, `PartyRegistry.sol`, `Party.sol`, `constants.js` | `minAnonymitySet`, `PRODUCTION_MIN_ANONYMITY_SET`, `AnonymitySetTooSmall`, `MIN_ANONYMITY_SET` | **Legitimate.** k-anonymity **set-size parameters** (NFR-002), not claims about a participation act |
| 13 | `PersonhoodRegistry.sol:11,256`, `PartyRegistry.sol:255-258`, `Governor.sol:300` | "unlinkable"/"secret" in scoping NatSpec | **Legitimate.** v2/ZK mechanism documentation; `PartyRegistry.sol:255-258` explicitly says the unlinkability "does not exist here anyway: endorsing is [public]" — the honest framing |
| 14 | `packages/ui/src/PrivacyStatus.tsx:198-212, 322-326` | `VER_TITLE_V1='Verified'`, `VER_TITLE_V2='Verified — private'` behind `unlinkable === true` | **Legitimate.** Fail-honest v1 default carries no banned word; the v2 title renders only against a backing that declares it. Guarded by UT-0759, four paths |
| 15 | `packages/ui/src/PrivacyStatus.tsx:251-252` | `anon` state: `title: 'Anonymous'`, `subtitle: 'Nothing you do here is linked to you'` | **Not reached today — but not inventoried: ISS-05(i).** The component is mounted on **no** surface (six explicit non-render comments across five files; re-verified by Doc 09 v1.9.0), so it is not public-facing copy. It must be re-copy-reviewed against clause (e) **before first mount**, on the same footing as the `ver` title was |
| 16 | `apps/web/src/**` (non-i18n) | `ReceiptFreedomBanner.tsx:7-15` doc comment; `flags.tsx:92`; five "PrivacyStatus is NOT rendered" comments | **Legitimate.** Negated/instructional comments and a flag key; no rendered claim |

---

## 7. Routing instruction (to the owning role)

**FAIL → route to the engineer (Samuel Oyelaran), the owning role of Doc 06.** The **code is
accepted as correct** — no code change is required by this review; the rework is documentary.
Fix **ISS-01 (Medium)** — true up §7 item 26(a)/(b)/(c), the v2.6.0 change-history "Not done in this
session" clause, the §3 UT-inventory note and the §4a "until it lands" sentence against Doc 03
v2.13.0, Doc 09 v1.9.0 and Doc 07 v2.6.0 / Doc 08 v2.9.0, annotating rather than deleting — and fold
ISS-02 – ISS-05 in the same pass (each is one to three lines); ISS-06 needs only a recorded note.
Per the skill's rule (a Medium forces at least a **minor** bump), produce **v2.7.0** with
`Status: In Review`; this loop then re-reviews as **cycle 2 of 5**. Only when it PASSes does the
owner set `Status: Approved`.

**Not blocked by this FAIL:** the code drop itself is green, in scope and byte-exact to the approved
ruling. The `TC` row for **UT-0889** is owed to the tester (a separate tester instance is authoring
Doc 07 v2.7.0 / Doc 08 v2.10.0 this session) and is unaffected by this rework.

---

## 8. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
