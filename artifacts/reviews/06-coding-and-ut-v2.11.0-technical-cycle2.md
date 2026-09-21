# Document Review Report — Doc 06 v2.11.0 (+ the reworked TRUMO-P02 code drop)

> Produced by the **document-review** skill. Reviewer is **not** the owning role: Doc 06 and the
> code are the engineer's (Samuel Oyelaran); this review is the tester's (Ji-woo Park), assigned by
> the PM in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md` **before**
> dispatch. Same neutral reviewer as cycle 1. The reviewer **scores and lists issues only — it
> edited no document and no code.**

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.11.0
Review mode: technical
Reviewer role: tester
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

The rework is good and the High is genuinely closed. Every one of the five blocking cycle-1
findings was verified against the code and the tests rather than the changelog, and each closes:
the cycle-1 failing input (`recordConsent(cid,'mallory',…)` / `withdraw(cid,'mallory')` against
alice's candidacy) now **refuses both with `NOT_YOUR_CANDIDACY`**, leaves stage, public view, raw
store row and disclosures **untouched**, and the refusal carries no member in its detail — executed
against the real service, not read. The ISS-03 store scan is now **provably non-vacuous** (I mutated
the store and confirmed the probe bites where plain `JSON.stringify` does not). `npm test`
**739/739**, exit 0, with the exact per-package split Doc 06 publishes; typecheck clean, `lint:deps`
OK, `--audit` exit 0 with **RTM 138 Must / 16 COMPLETE / 122 OPEN unmoved** and Doc 06 v2.11.0 the
sole blocker (this report). Annotate-don't-delete held; nothing I affirmed at cycle 1 was disturbed.

It nevertheless **FAILS on one Medium**, and it is exactly the class the assignment told me to hunt
for — *a site the sweep missed*. §3's accounting note (`docs/06-coding-and-ut.md:1134–1150`) is the
one place the drop's new counts were grafted onto old text instead of reconciled with it: the
sentence whose subject is "**The web total of 116**" now ends "**= 739**", an equation that does not
hold for its own addend chain (which sums to 215), and the same paragraph still publishes "the SDK
total of **244**", "protocol total of **151**" and "The ui total of **18**" as present-tense facts
when this version's figures are **287 / 178 / 25**. That paragraph carries, three lines below, the
document's own annotation of this **exact** defect at v2.4.3 ("stated the web total as 89 while its
own addends summed to 91"). The `**Total** | 739` row, the §3 per-UT counts, the header and the
change history are all correct — the defect is contained to the narrative that is supposed to
explain them, and it is a three-line fix.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL`

### Verification actually performed (not taken on assertion)

| Claim | How verified | Result |
|---|---|---|
| ISS-01 refuses the cycle-1 failing input | replayed the cycle-1 script against the real `CandidateService` (node ESM, resolved from `packages/sdk`) | **both refuse.** `recordConsent(cid,'mallory',CONSENT)` → `NOT_YOUR_CANDIDACY`; `withdraw(cid,'mallory')` → `NOT_YOUR_CANDIDACY`; an absent actor (`undefined`, `''`) is refused on both. After the attempts: `candidacy().stage` = `NOMINATED`, `candidacy().member` = `null`, the **raw store row still holds `legalName: 'Alice Real Name'`** (nothing destroyed), trail unchanged. The candidate's own calls still work (`withdraw(cid,'alice')` → `disclosuresDestroyed: true`) |
| refusal precedes any state read or write | read `packages/sdk/src/candidates.js:495–497`, `:533–534`; executed a stranger call against a **CONSENTED** candidacy | `_requireCandidate` is the **first** check after the row lookup: a stranger gets `NOT_YOUR_CANDIDACY` where the candidate would get `NOT_AWAITING_CONSENT`. No stage test, no `validateConsent`, no window/lock test and **no write** precedes it |
| the refusal leaks nothing | `_requireCandidate` `:278–284` | the error detail is `{ candidacyId }` only — **no `member`**. The guard cannot be turned into a read of the pre-consent name |
| no verifier re-introduced | signature + UT-0897 parameter inspection + the no-seam spy | signature is `(candidacyId, memberPseudonym, acknowledgements)`; `not.toMatch(/verifier/i)` still holds; the "consent calls no seam" spy `it` is still green |
| ISS-02 spy reaches the close call | `packages/sdk/test/candidates.test.js:479–484`; read `closePostDebateVote` `:657–670` | `await f.service.closePostDebateVote(candidacyId, f.ballots)` **is inside** the spied window and the path genuinely executes. One residual (ISS-L4): the run resolves `NOT_ADVANCED`, so the `PUBLISHED` branch is not literally inside the window — the branches differ only in the stage constant handed to `_advance`, which reads nothing |
| ISS-03 non-vacuous | ran the replacer against a `Map`/`Set`/nested-`Map` fixture **and** the live store, then **mutated** the store | the replacer walks nested Maps, Sets and Maps-in-arrays. `dump(store)` is 2,818 chars and contains the candidacy id, `NOMINATED`, the confidential `legalName`, a debate `contentRef` (from a nested `Map<topic,debate>`) and an endorser (from a `Set`). Injecting `'SUITABLE'` into a store Map → `dump(store)` **finds it**; plain `JSON.stringify(store)` **does not**. The positive control `dump(f.ballots._ballots)` **contains** `SUITABLE`. **Sufficient** |
| ISS-04 trail | `candidates.js:425` (`NOMINATED` payload = `{ residencyRegion }`), `:512–515` (`CONSENT_RECORDED` carries `member`); executed | pre-consent trail: `[{"type":"NOMINATED","residencyRegion":…}]` — **no member**; post-consent the `CONSENT_RECORDED` event carries `"member":"alice"`. `NOMINATION_ENDORSED`'s payload is `{}` and UT-0897 asserts the endorser's pseudonym is absent from the trail |
| ISS-05 both locales | `apps/web/src/i18n/en.ts:502`, `ar.ts:437–439`; UT-0906 | en: "A thumbs-up adds three; a thumbs-down takes one away." ar: "الإعجاب يضيف ثلاثًا، وعدم الإعجاب يخصم واحدًا" (adds three / deducts one) — **sign correct in both**. UT-0906 asserts the wording **and** that the rendered score is `-1` after a downvote |
| ISS-L1 defect real? | computed all eight seed lengths; read `apps/web/src/app/candidates/page.tsx:81–86`, `:123`; ran the new flag-off `it` | **the guard is real and the page now imports cleanly** (the test renders `CandidatesPage`; web is 138/138 green). **The published cause is not corroborated** — see ISS-L5: with the wording actually shipped, **three** repeats clear 280 for every pillar name (392–413 chars) |
| ISS-L2 | `en.ts:477,491,495,496,517,521` vs item 30(iv) | all **six** demo-acting controls are now enumerated (endorse, mark attended, mark absent, schedule debates, open the vote, close the vote). Every other control acts for the visitor themselves |
| 739/739 with the published split | `npm test` (root) | **PASS**, exit 0 — contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138 = **739**, the exact split Doc 06 publishes; +3 over 736 |
| §3 per-UT counts | counted every `it` in the touched blocks | **exact**: UT-0896..0902 = 10+9+6+4+5+6+3 = **43** (244+43 = 287 sdk); UT-0904..0907 = 4+5+7+4 = **20** and UT-0871 = **3** (parametrised over three seams) → 116+20+2 = **138** web; UT-0903 = 7 (18+7 = 25 ui); UT-0891..0895 = 27 (151+27 = 178 protocol) |
| typecheck / lint:deps / audit | `npm run typecheck -w @trumocracy/ui` and `-w @trumocracy/web`; `npm run lint:deps`; `node hooks/run_gates.cjs --audit` | clean · clean · `7 workspace package(s) checked — layering OK` · exit 0, **1 blocking document = `06-coding-and-ut.md v2.11.0`** (expected — this report), **RTM 138 Must / 16 COMPLETE / 122 OPEN, both signals agree** |
| OPEN-27 undisturbed | `packages/ui/src/PrivacyStatus.tsx:247,256–258,267,270,388` vs Doc 03 v2.14.1 §10.12.3 clause 10 | title, the three context strings, the fail-honest default and the explicit `isAnonContext` type guard are **unchanged and still verbatim**; UT-0903 still 7; UT-0750 still flipped |

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | FR-037's "under any circumstance" and FR-085's destroy semantics are now **actor-bound and asserted**; the pre-consent trail names nobody; the FR-065 copy states the real ADR-015 asymmetry in both locales. The cycle-1 T1 dent is fully repaired |
| T2 Soundness | 20 | 98 | 19.6 | The guard is placed correctly (identity before state, before any write), fails closed on an absent actor, leaks nothing in its detail, and adds **no** verifier — the "consent is not a counting action" property survives intact. The endorser extension is defensible and upheld (§5.2) |
| T3 Traceability & IDs | 20 | 85 | 17.0 | IDs clean, nothing renumbered, every §3 row count verified exact against the suite, RTM honestly unmoved, item 30 still leads with "zero rows". **ISS-06 lives here:** §3's accounting note publishes three stale package totals and an equation that does not hold |
| T4 Security & failure modes | 15 | 98 | 14.7 | The drop's one destructive path is bound to its owner and tested as a capability absence; the failure mode is disclosed in §7 item 30(viii) in the same plain terms as (i)–(vii), including why it was High and not Critical. `IS_INSECURE_MOCK` discipline and the CON-015 disclosure are unchanged |
| T5 Completeness & testability | 15 | 94 | 14.1 | Both overstated assertions now assert what their names claim; the ISS-03 probe is proven to bite; the flag-off guard exists and caught a real page-load defect. Residual: ISS-L4 (the spied run never resolves `PUBLISHED`) and ISS-L6 (the Arabic sign is correct but unasserted) |
| T6 Convention compliance | 10 | 92 | 9.2 | Annotate-don't-delete held everywhere checked — v2.10.0's Status survives under "Previously:", the v2.10.0 change entry is intact, item 30 gains (viii) rather than rewriting (i)–(vii). Dented by the §3 note (the document's own stale-figure convention is to annotate, not graft) and by ISS-L5's false in-code comment |
| **Total** | **100** | — | **94%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-06 | **Medium** | T3 / T6 | `docs/06-coding-and-ut.md:1134–1150` (§3 accounting note) | **The site the sweep missed: §3's accounting note publishes counts that are false for this version.** (a) The sentence "**The web total of 116** comprises 16 + 27 + 27 + 1 + 18 + 2 + 4 + 6 + 15 **+ 96 at v2.10.0 (…) + 3 at v2.11.0 (…) = 739**" is incoherent as written: its subject is the **web** subtotal, its addend chain sums to **215**, and it asserts **739**. The 96 and the 3 are **cross-package** addends (the v2.11.0 trio includes **UT-0897, an sdk test**) spliced into a web breakdown, so the sentence no longer derives the number it exists to derive — a reader cannot get web **138** out of it (it is 116 + 18 + 2 + 2). (b) In the same paragraph "the **SDK total of 244** comprises…", "**protocol total of 151** comprises…" and "The **ui total of 18** comprises…" stand unannotated in the present tense; this version's figures are **287 / 178 / 25**. (c) Three lines below sits the document's own annotation of this exact defect — *"Through v2.4.3 this sentence stated the web total as 89 while its own addends summed to 91 and `npm test` reported 91 — corrected at v2.5.0"* — so the house standard for this paragraph is already on the record. **Not higher than Medium** because every authoritative figure is right and independently verified: the `**Total** 739` row, all 17 new per-UT row counts, the header, the change history and the note's own tail each match `npm test` exactly | Reconcile the paragraph instead of appending to it: close the web sentence at its own subtotal (**"The web total of 138 comprises … + 18 (UT-0904..UT-0907, v2.10.0) + 2 (UT-0871, v2.10.0) + 2 (UT-0905, UT-0906, v2.11.0)"**), annotate the three stale leads in the house style (e.g. "the SDK total of 244 *(v2.10.0: 287 — +42 UT-0896..UT-0902, +1 at v2.11.0)*"), and carry the suite-level equation as its **own** sentence: "Suite total **739** = contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138." No code change; no other section is affected |
| ISS-L4 | Low | T5 | `packages/sdk/test/candidates.test.js:479–484` | The ISS-02 fix is correct — `closePostDebateVote()` is now genuinely inside the spied window — but the spied run casts **no votes**, so the tally is not net positive and the call resolves `NOT_ADVANCED`: the **`PUBLISHED` branch never executes under the spy**. The guarantee holds structurally (`:657–670` reads the candidacy, the election and the tally and nothing else; both outcomes go through the same `_advance`, which calls `assertCandidacyTransition`, `updateCandidacy` and `_trail` only), and §3 / item 30(vii) now say "runs through `closePostDebateVote()`", which is **true as written**. Evidence precision, not a hole | Optional: cast one `SUITABLE` vote before closing inside the spied window, so the assertion covers the literal publication outcome and the older "publication path" phrasing becomes exact rather than merely defensible |
| ISS-L5 | Low | T6 / T5 | `apps/web/src/app/candidates/page.tsx:83–84`; Doc 06 change history v2.11.0, the ISS-L1 clause | **The published cause of the L1 defect is not true of the code that fixed it.** The comment reads *"MIN_PILLAR_CHARS is 280; four repeats clear it for every pillar name (three did not for the short ones)"* — but with the wording actually shipped (the proposals-page sentence) **three repeats clear 280 for every pillar name**: measured, `law` is the shortest at **392** characters and `governance`/`healthcare` the longest at **413**. `apps/web/src/app/proposals/page.tsx:61` and `parties/page.tsx:59` use the identical string at `.repeat(3)` and pass. Doc 06's change history repeats the same explanation ("fell below MIN_PILLAR_CHARS (280) **for short pillar names**"). The **defect itself was real** — the seed runs at module scope (`const _partyId = seedParty()` `:123`), so a short pillar makes `createDraft` throw on import, and the new test does import the page — but the pre-fix seed is **untracked**, so the repo holds no evidence of what it was and the surviving explanation is provably wrong about the string it annotates | Correct both sites to what is checkable: state the old seed text and its measured length, or drop the counterfactual and say only "the seed must clear MIN_PILLAR_CHARS (280) for every pillar name; the proposals-page wording at ×4 gives 523–551". Consider `.repeat(3)` for consistency with the two sibling pages |
| ISS-L6 | Low | T5 | `apps/web/test/candidates.test.tsx:281–282` | Half of ISS-05 was an **Arabic** sign error; the Arabic is now correct by inspection (`ar.ts:437–439`) but **only the English is pinned**. UT-0907 scans `ar.candidates` for banned words, key-mirroring and copy-paste — none of which can catch a sign. The ARABIC-I18N packet regeneration that item 17 records as owed could silently reintroduce it | Optional: assert the Arabic lead carries the subtraction (e.g. `expect(ar.candidates.feedbackLead).toMatch(/يخصم/)`) alongside the English assertion, so the native-review packet cannot land a sign regression unnoticed |

> **Low** issues do not block the pass bar. The single **Medium** forces the FAIL.

## 5. Rulings the assignment asked for

1. **ISS-01's failing input now refuses — verified by execution, on both methods, and nothing
   changes.** `recordConsent(cid,'mallory',…)` and `withdraw(cid,'mallory')` both raise
   `NOT_YOUR_CANDIDACY`; an absent actor (`undefined`, `''`) is refused too, so the guard fails
   closed. After the attempts the stage is still `NOMINATED`, the public view still shows
   `member: null`, the **raw store row still holds `legalName: 'Alice Real Name'`**, and the trail
   holds only the `NOMINATED` event. The candidate's own calls are unaffected. **The order of checks
   is right:** `_requireCandidate` is the first check after the row lookup — a stranger hitting a
   **CONSENTED** candidacy still gets `NOT_YOUR_CANDIDACY`, where the candidate would get
   `NOT_AWAITING_CONSENT` — so no state is consulted and nothing is written before the refusal. The
   row lookup that necessarily precedes it is the minimum needed to know who the candidate is,
   returns nothing to the caller, and the refusal detail carries **no member**, so the guard cannot
   be turned into a read of the pre-consent name. **No verifier was introduced:** the FR-037 "not a
   counting action" property and UT-0897's parameter-inspection assertion both stand, and the
   no-seam spy is still green. The web component and page pass the visitor's own pseudonym
   (`CandidateSelection.tsx:174`, `:235`) and the `.d.ts` shim matches (`trumocracy-sdk.d.ts:528–529`,
   guarded by UT-0871).
2. **The endorser-trail extension is RIGHT — uphold it, and cite FR-054 for it, not only FR-037.**
   Three grounds. **(a) FR-054 is decisive** (Doc 02:944): it requires, for every governance action
   *and it names endorsement explicitly*, "a publicly readable, tamper-evident record sufficient to
   **reconstruct the outcome**, and containing **no personal data**". A `NOMINATION_ENDORSED` event
   without the endorser still reconstructs the outcome — the store refuses `ALREADY_ENDORSED`, so
   one event is one distinct endorser and the count against `NOMINATION_ENDORSEMENTS_MIN` is
   derivable from the trail — while a pseudonym on a public event is exactly the linkable datum
   FR-054 asks to keep out. **(b) The Doc 14 asymmetry cuts the engineer's way, not against it.**
   §2.2 makes petition backing public *and tells the backer so before they act* ("only back a
   petition if you are comfortable being seen to support it", `docs/14-user-guide.md:601–614`).
   Nothing in Doc 14's standing section or in Doc 02 tells a **nomination** endorser their support
   will be published — §2.11 says only "a published minimum number of members who live in your area
   must back your nomination", and the very next paragraph frames the candidate as "**the one
   place** where Trumocracy shows a real name". Publishing what the product never warned it would
   publish is the failure mode FR-131 exists to prevent; the conservative read is the honest one.
   **(c) It costs nothing:** the store keeps the endorser for the `ALREADY_ENDORSED` refusal, no
   service read returns it, and UT-0897 pins its absence from the trail. This is **not** an over-read
   of FR-037 — but Doc 06's justification leans on FR-037 where **FR-054** is the stronger and more
   precise citation, and FR-054 is the cite I will use in the TC row. Worth adding at the next
   touch; not raised as an issue.
3. **The L1 page-load defect was real; its published explanation is not.** The mechanism is real and
   still live: the seed executes at module scope, so any pillar under `MIN_PILLAR_CHARS` makes the
   page throw on import — which is precisely why the new flag-off `it`, which imports the page,
   caught it. The guard is worth having and the page now imports cleanly (web 138/138). But the
   fix's own comment, and the change-history sentence repeating it, assert a counterfactual that is
   **false of the string they annotate**, and the pre-fix file is untracked so the claim cannot be
   checked against the repo. **ISS-L5**, Low: the guard stands, the story needs correcting.
4. **The Must count held: 138 Must / 16 COMPLETE / 122 OPEN**, derived and published signals
   agreeing, exactly as at cycle 1 and at the v2.10.0 entry state. `--audit` exits 0 with Doc 06
   v2.11.0 the only blocking document, which is this report's absence and is expected. Item 30 still
   states "does not close a single RTM row" in the **first clause of the first sentence**, and its
   three grounds (a)(b)(c) are unchanged and still check out. Nothing in the rework quietly claimed
   a closure; the Gate-2 traceability criterion remains **NOT MET**, as it was.
5. **Nothing I affirmed at cycle 1 was disturbed.** OPEN-27's five normative strings, the explicit
   `isAnonContext` type guard, the fail-honest default and `aria-label = selected title` are
   untouched and still verbatim against Doc 03 v2.14.1 clause 10; UT-0750 is still flipped and
   UT-0903 is still 7 tests. Item 30's zero-row honesty holds. The six upheld judgement calls stand
   — none of the reworked code reopens them. The copy-honesty scan is still real (templates rendered
   before scanning) and now one string truer. `ReceiptFreedomBanner` still precedes the post-debate
   vote controls, asserted by document order. ISS-L3's ruling was **recorded, not silently
   actioned**, as directed.
6. **Annotate-don't-delete held.** The v2.10.0 Status survives verbatim under "Previously:" inside
   the v2.11.0 Status, which in turn preserves the v2.9.0 Approved line beneath it; the v2.10.0
   change-history entry is intact and unedited with v2.11.0 added above it; item 30 gains (viii) and
   annotates (iv) and (vii) in place rather than rewriting them. The one place the convention
   slipped is ISS-06's paragraph, where new figures were grafted onto old ones instead of
   annotating them.

## 6. Routing instruction

**FAIL → route to the owning role: engineer (Samuel Oyelaran).** There is **no critical and no
high**, so nothing here must be fixed before commit on safety grounds; the single **Medium
(ISS-06)** is a documentation-accuracy fix in §3 of Doc 06 and touches **no code**. The rework MUST
produce a **new version** — bump `Version:` to **2.11.1** (a documentation-only correction with no
code change is a patch bump; if the engineer also takes ISS-L4/L5/L6, which touch two tests and a
comment, **2.12.0**) — set `Status: In Review`, record the closure in the change history, and this
loop re-reviews as **cycle 3 of 5**.

Nothing in Docs 03/04/07/08 changes as a result of this review. The **RTM Must count held at
138/16/122** and is expected to stay there: the TC rows for UT-0891..UT-0907 and the RTM rows are
the tester's on a later touch, and whether any candidate row can close remains the architect's
routed decision on DES for FR-081/FR-093 and the Definition-A amendment of DES-027/066/067/076. The
approver's ratification of **NOMINATION-MIN-01** and **MATURATION-01** is likewise untouched.

## 7. Human decision at the cap

Not applicable — cycle 2 of 5, verdict FAIL, not ESCALATED.
