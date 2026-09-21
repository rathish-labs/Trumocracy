# Document Review Report — Doc 06 v2.10.0 (+ the TRUMO-P02 code drop)

> Produced by the **document-review** skill. Reviewer is **not** the owning role: Doc 06 and the
> code are the engineer's (Samuel Oyelaran); this review is the tester's (Ji-woo Park), assigned
> by the PM in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md` **before**
> dispatch. The reviewer **scores and lists issues only — it edited no document and no code.**

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.10.0
Review mode: technical
Reviewer role: tester
Score: 88%
Critical: 0
High: 1
Medium: 4
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 06 v2.10.0 registers a large, careful and — on the question that matters most — **honest**
code drop. Every mechanical claim in the change history was re-run, not accepted: `npm test`
**736/736** with the exact per-package split Doc 06 §3 publishes, `typecheck` clean in `ui` and
`web`, `lint:deps` layering OK, `node hooks/run_gates.cjs --audit` exit 0 with **RTM 138 Must /
16 COMPLETE / 122 OPEN unmoved** and Doc 06 v2.10.0 the sole blocker (this review). §3's
per-UT counts sum exactly to the per-package figures. §7 item 30 states "**zero RTM rows**"
**first**, names the design decision that would change that, and routes it; nothing elsewhere in
Doc 06 quietly claims more. The OPEN-27 implementation is **verbatim** against Doc 03 v2.14.1
§10.12.3 clause 10, and UT-0750's pinned assertion is **genuinely flipped**, not supplemented.

It **FAILS** on one High and four Mediums. The High is the one absence the drop asserts most
loudly and does not actually have: **`recordConsent()` and `withdraw()` bind to no actor.**
Every other member-scoped method on `CandidateService` takes a `memberPseudonym`; these two take
only a `candidacyId`, so any caller holding one can cross **another member's** FR-037/FR-085
one-way door — publishing their legal name — and then **destroy their disclosure data** and
terminate their candidacy. Demonstrated below with the failing input. It is not in §7 item 30's
seven honest limitations, and no UT covers it. The Mediums are three assertions that claim more
than they can detect (a spy that never runs the path its name cites; a `JSON.stringify` on a
`Map`-backed store that is structurally blind; a read masked on one path and open on another)
and one copy string that misstates the ADR-015 asymmetry in both locales.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`88%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (4)
- **Verdict:** `FAIL`

### Verification actually performed (not taken on assertion)

| Claim | Command | Result |
|---|---|---|
| 736/736, +96 from 640 | `npm test` (root) | **PASS**, exit 0. contracts 95 · protocol 178 · sdk 286 · ui 25 · indexer 16 · web 136 = **736** — matches §3 exactly |
| §3 per-UT counts sum to the package figures | manual count of every `it` in the four new blocks | **exact**: UT-0891..0895 = 6+5+4+7+5 = **27**; UT-0896..0902 = 10+8+6+4+5+6+3 = **42**; UT-0903 = **7**; UT-0904..0907 = 4+4+6+4 = **18**; UT-0871 1→**3** |
| typecheck clean | `npm run typecheck -w @trumocracy/ui` / `-w @trumocracy/web` | both clean, no output |
| layering OK | `npm run lint:deps` | `7 workspace package(s) checked — layering OK` |
| audit exit 0, RTM unmoved | `node hooks/run_gates.cjs --audit` | exit 0; **138 Must / 16 COMPLETE / 122 OPEN**, both signals agree; 1 blocking document = `06-coding-and-ut.md v2.10.0` (this report) — **expected** |
| OPEN-27 verbatim | string-by-string diff vs Doc 03 §10.12.3 clause 10(a)(b)(c) | **all five strings byte-identical** |
| UT-0750 flipped | `git diff packages/ui/test/PrivacyStatus.test.tsx` | old `getByText('Anonymous')` / `getByText('Nothing you do here…')` **removed and replaced**, plus two `queryByText(...).toBeNull()` negatives added — a flip, not a supplement |

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.6 | FR-036/037/038/039/065/066/067/081/085/107/123/131 all addressed and the fence is stated. Dented by ISS-01: FR-037's "MUST NOT disclose the identity of any person who is not a consenting candidate … under any circumstance" and FR-085's destroy semantics are not actor-bound |
| T2 Soundness | 20 | 88 | 17.6 | The rules/service split, the per-call seams, the refusal-not-overwrite decision and the tally-only decision are all correct and well argued. ISS-01 is the soundness dent |
| T3 Traceability & IDs | 20 | 93 | 18.6 | UT-0891..0907 minted cleanly, nothing reused or renumbered; §3 counts exact; RTM honestly unmoved; item 30 stated first. ISS-02: one registry row (and two other places) claims spy evidence that does not exist |
| T4 Security & failure modes | 15 | 80 | 12.0 | `IS_INSECURE_MOCK` discipline is thorough, the stub verifier and CON-015 are disclosed, fail-honest defaults are consistent. But ISS-01's authorization/data-destruction failure mode is not analysed anywhere, and ISS-04 leaves a confidentiality boundary inconsistent |
| T5 Completeness & testability | 15 | 85 | 12.75 | 96 new UTs, strong negatives (every refusal asserts its specific code), real components over mocks. ISS-02/ISS-03 weaken two headline assertions; ISS-04 is untested; ISS-L1 flag-off untested |
| T6 Convention compliance | 10 | 97 | 9.7 | Flags, annotate-don't-delete, ISO-8601, house test-naming invariants, `removeBy` discipline all respected |
| **Total** | **100** | — | **88%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | T2 / T4 / T1 | `packages/sdk/src/candidates.js:476` (`recordConsent`), `:506` (`withdraw`) | **The one-way door and the protocol's only delete bind to no actor.** Both take only a `candidacyId`. Every other member-scoped method on the same class takes the actor — `nominate(electionId, memberPseudonym, …)` `:384`, `endorseNomination(candidacyId, endorserPseudonym, …)` `:438`, `castPostDebateVote(candidacyId, memberPseudonym, …)` `:602`, `castFeedback(candidacyId, memberPseudonym, …)` `:656`. Consequence: any caller holding a candidacyId can (a) cross **another member's** FR-037 consent crossing, which publishes their legal name via `candidacy()` `:706`/`:715`, and (b) `withdraw()` them, which calls `destroyDisclosures` `:513` and **irreversibly destroys their disclosure data**. **Failing input, executed against the real service:** nominate `alice` with `disclosures: {legalName:'Alice Real Name'}`, then from any other caller `svc.recordConsent(cid, {identityBecomesPublic:true, irreversibleForTerm:true, revocableOnlyByWithdrawalBeforeLock:true})` → `{stage:'CONSENTED'}` and `svc.candidacy(cid).disclosures` → `{"legalName":"Alice Real Name"}`; then `svc.withdraw(cid)` → `{stage:'WITHDRAWN', disclosuresDestroyed:true}` and the disclosures are `null`. Neither call is refused, and neither is a demo-only path — the service is what Doc 06 registers as "the v1 candidate-selection flow". The house precedent is explicit that this class of absence is a tested property: `packages/sdk/src/proposals.js:23` — *"There is no withdraw-someone-else's-proposal … That absence is asserted by test, not assumed."* §7 item 30's limitations (i)–(vii) do not mention it. **Not Critical only because** it is unreachable from the shipped surface: `elections` is off in prod, `CandidateSelection.tsx` passes only the visitor's own `candidacyId` held in React state, and the store is in-memory — so there is no live exposure today | Bind both to the actor, as the rest of the class does: `recordConsent(candidacyId, memberPseudonym, acknowledgements)` and `withdraw(candidacyId, memberPseudonym)`, each refusing with a specific code (e.g. `NOT_YOUR_CANDIDACY`) when `memberPseudonym !== c.member`. This does **not** re-introduce a verifier — the FR-037 "no verifier" property (UT-0897) is untouched, and the parameter-inspection assertion `not.toMatch(/verifier/i)` still holds. Add a UT in UT-0897 asserting **both** refusals as capability absences ("nobody can cross someone else's one-way door; nobody can destroy someone else's disclosures"), and update the web callers. If instead the decision is that actor binding belongs above the SDK, that is a design call for the architect and it MUST be written into §7 item 30 as limitation (viii) in the same plain terms as (i)–(vii) — silence is not an option for the drop's single destructive path |
| ISS-02 | Medium | T3 / T5 | `packages/sdk/test/candidates.test.js:448`; Doc 06 §3 UT-0899 row (line 1076); §7 item 30(vii); v2.10.0 change history | **The `officeHolder` spy does not cover the publication step, but three places say it does.** The `it` is named *"nominate() and closePostDebateVote() never read the office-holder record — asserted by spy"*, and its body runs `stand → completeDebates → openPostDebateVote` — **`closePostDebateVote` is never called inside the spied window.** The registry row says "never read on the nomination/**publication** path (spy)"; item 30(vii) and the change history both say "asserted by spy". The spy is **not vacuous** — the nomination path genuinely runs and genuinely never touches `officeHolder` — but half the claimed coverage does not exist. The guarantee itself is true (I read `closePostDebateVote` `:631–642`: it reads the candidacy, the election and the tally, and nothing else) — it is the **evidence** that is overstated, and this is the class of gap that will bite when the TC rows are written from these registry rows | Extend the spied window in the UT to include `await f.service.closePostDebateVote(candidacyId, f.ballots)` before `expect(spy).not.toHaveBeenCalled()`, so the test asserts what its name, its registry row and item 30(vii) all claim. No document wording needs to change once the test does |
| ISS-03 | Medium | T5 | `packages/sdk/test/candidates.test.js:553` | **`expect(JSON.stringify(f.store)).not.toContain('SUITABLE')` cannot detect what it is sold as detecting.** Doc 06 §3's UT-0901 row presents this as the assertion that "this service stores no ballot". `InMemoryCandidateStore` holds every collection in a `Map` (`:100–107`); `JSON.stringify` renders a `Map` as `{}`. Verified: `JSON.stringify(new S())` where `S` holds a populated `Map` yields `{"_c":{},"_t":[…]}` — the Map contents are simply absent. Only `_trail` (an Array) is actually inspected, and in that test the trail contains no choice anyway because the vote is never closed. **If the service did store the ballot in any store Map, this assertion would still pass** | Replace with an assertion that can fail: inspect the store's own structures, e.g. assert no candidacy row and no trail event carries a `POST_DEBATE_CHOICE` value (`[...f.store._candidacies.values()]`, `f.store.getTrail(candidacyId)`), or serialise the Maps explicitly before the scan. Keep the intent; make the evidence real |
| ISS-04 | Medium | T4 / T1 | `packages/sdk/src/candidates.js:425` (write), `:706` (masked read), `:747` (open read) | **A pre-consent candidacy's member is masked on one public read and exposed on another.** `candidacy()` deliberately returns `member: consented ? c.member : null` `:706`, but `nominate()` writes `this._trail(candidacyId, 'NOMINATED', { member: memberPseudonym, … })` `:425`, and `trail()` `:747` is an open read that returns it. Verified against the real service: `candidacy().member` → `null` while `trail()` → `[{"type":"NOMINATED",…,"member":"alice",…}]`. FR-037 (Doc 02 line 896) is absolute — *"MUST NOT disclose the identity of any person who is not a consenting candidate or office-holder under any circumstance"* — and §7 item 30 says nothing about the trail being a weaker boundary than the public view. No UT covers it: UT-0897's *"before consent the public view shows no member and no disclosures"* (`:277`) asserts `candidacy()` only, and UT-0896's trail assertion (`:181`) correctly checks the **disclosures** are absent, which they are. The disclosures are genuinely never in the trail — that half of the one-way door is sound | Pick one and make it true everywhere: either carry `member` on the `CONSENT_RECORDED` event rather than the `NOMINATED` event (and add the matching UT assertion to UT-0897's first `it`: the trail, like the public view, names nobody before consent), or — if a pseudonym on the pre-consent trail is the intended and defensible posture — say so explicitly in §7 item 30 and add the UT that pins it, so the next reader does not take `candidacy()`'s masking for a guarantee it is not |
| ISS-05 | Medium | T1 / T6 | `apps/web/src/i18n/en.ts` `candidates.feedbackLead`; `apps/web/src/i18n/ar.ts:437–439` | **The copy misstates the ADR-015 asymmetry, in both locales.** Rendered English: *"Each member gives one signal per candidate. A thumbs-up counts three; a thumbs-down counts one. Only the total is shown."* A thumbs-down counts **−1** (`FEEDBACK_SCORE` in `packages/protocol/src/candidates.js`). "counts one" reads to an ordinary Grade-8 reader as a weight of **+1**, and the score rendered immediately below it (`feedbackScore`, `feedbackCounts`) contradicts the sentence: 3 up and 2 down displays **7**, not the 11 the copy implies. The Arabic mirrors the same error (*"وعدم الإعجاب يُحتسب واحدًا"*). UT-0907 cannot catch this — it scans for FR-131 banned words and DES-085 jargon, not for sign. Every other new string in the block is v1-accurate, and the three that carry the honesty load (`residencyHelp`, `feedbackVisibility`, `demoNote`) are exemplary | Correct both locales to state the subtraction plainly at Grade-8 — e.g. *"A thumbs-up adds three; a thumbs-down takes away one."* — and re-issue the Arabic as part of the existing ARABIC-I18N draft packet (it is already correctly not claimed reviewed) |
| ISS-L1 | Low | T5 | `apps/web/src/app/candidates/page.tsx:162`; `apps/web/src/components/SiteHeader.tsx` | The ship-dark claim has no guard. Neither the flag-off branch (`t.errors.flagOff`) nor the flag-gated nav link is asserted by any UT. `apps/web/test/join-membership.test.tsx:375` is the in-repo precedent that does assert it (as did UT-0890 for `/verify`); `parties/` and `proposals/` do not — so the house pattern is genuinely mixed and this is additive hardening, not a defect | Optional: one `it` in UT-0905 rendering with `elections` off, asserting the placeholder and the absent nav link |
| ISS-L2 | Low | T3 | Doc 06 §7 item 30(iv) | "each is labelled '(demo)' in the copy" is true of the three controls the sentence names (endorse, attend/absent, close the vote) but two further demo-acting controls are unlabelled — `scheduleDebatesAction` ("Schedule the three debates") and `voteOpenAction` ("Open the member vote"). The page-level `demoNote` ("every control acts for you") does cover them, so the disclosure holds; only the enumeration is narrower than a reader may assume | Either label the two, or add "and the page-level note covers the rest" to item 30(iv) |
| ISS-L3 | Low | T5 | `packages/protocol/test/candidates.test.js:93`; `packages/sdk/test/candidates.test.js:459` | The two capability-absence assertions that work by **name regex** over exports / `Object.getOwnPropertyNames` are the weakest evidence in the drop — a method named `expedite()` would pass both. **This is not a blocking finding**, because the properties they guard are independently held by assertions that a rename cannot evade: UT-0891's exhaustive transition table (every non-`VOTE_OPEN` → `PUBLISHED` refused, all three terminal stages closed), UT-0899's behavioural `candidateSet` check, UT-0902's `_verifier`/`_ballots`/`_ballotService` undefined, and — the strongest in the drop — UT-0897's **whitelist equality** `expect(names).toEqual(['destroyDisclosures'])` over the store's delete-like methods. Confirmed structurally: `stage` is written in exactly two places, `saveCandidacy` `:419` and `_advance` `:310`, and `PUBLISHED` reaches `_advance` only from `closePostDebateVote` `:639` behind `isNetPositive(tally)`. **Ruling: the structural assertions carry the weight; the regexes are belt-and-braces and may stay** | None required. Noted so the TC rows cite the structural assertion, not the regex, as the evidence for the fairness properties |

## 5. Rulings on the six questions the assignment asked me to test hardest

1. **Fairness-as-absence — REAL, with one overstated citation (ISS-02).** UT-0891's transition
   table is an exhaustive structural proof, not a naming check, and it holds: `PUBLISHED` is
   reachable only from `VOTE_OPEN`, and only `closePostDebateVote()` — gated on
   `isNetPositive(tally)` — can pass it. UT-0899's `officeHolder` spy is **not vacuous**: the
   spied path genuinely executes nomination through to `openPostDebateVote`. But it stops one
   call short of the publication step its own name, its §3 registry row and §7 item 30(vii) all
   cite (ISS-02). `nominate()` has no nominee parameter and `closePostDebateVote(candidacyId,
   ballotService)` has no override parameter — both verified by reading the signatures, not only
   by the regex. **The structural assertions carry the weight** (ISS-L3).
2. **FR-065 refusal semantics — SOUND, and the UT-0900 coverage is complete.** The second vote is
   refused with `ALREADY_GAVE_FEEDBACK` `:665` and the tally is unchanged — asserted. The
   engineer's reason for not riding the ballot seam is correct: `ConventionalBallotService.castBallot`
   is explicitly last-ballot-counts (`packages/sdk/src/ballot.js:194`), which cannot express a
   refusal. On sufficiency of `JSON.stringify(…).not.toContain(pseudonym)`: **yes, here** — unlike
   ISS-03's store scan, all three targets (`feedbackTally`, `candidacy`, `trail`) are plain objects
   and arrays that serialise fully. **No uncovered read path:** the service's public reads are
   `feedbackTally`, `candidacy`, `candidacies`, `candidateSet`, `election`, `officeHolder`, `trail`;
   `candidacies`/`candidateSet` are `candidacy()` composed, and `castFeedback` returns
   `this.feedbackTally(...)`. The caster survives only in `_feedbackCasters` and only
   `hasGivenFeedback` reads it, which the service never surfaces.
3. **The one-way door — the DATA half is sound; the ACTOR half is the High (ISS-01).**
   `recordConsent` takes no verifier and calls no seam (spy + parameter inspection, both
   genuine). `saveCandidacy` `:137` destructures `disclosures` off the row into a separate map, so
   nothing leaks them before consent: `candidacy()` gates them on `consentRecordedAt !== null`,
   the trail never carries them (confirmed at every `_trail` call site), and the store's **only**
   delete is `destroyDisclosures` (whitelist-equality assertion — the strongest in the drop).
   Destroy-before-close / stand-after-close is correct and tested both ways. **But nothing binds
   either call to the candidate**, so the door can be crossed and the data destroyed by someone
   else. ISS-04 is a smaller boundary inconsistency on the same path.
4. **OPEN-27 — implemented VERBATIM, and UT-0750 is genuinely FLIPPED.** All five normative
   strings are byte-identical to Doc 03 v2.14.1 §10.12.3 clause 10(a)/(b)/(c). Selection is by an
   explicit `isAnonContext` type guard over the enumerated set only — **no inference** from route,
   referrer or heuristic, and unrecognised/malformed falls through to the fail-honest default,
   which UT-0903 pins with `anonContext={'vote' as never}`. `aria-label={title}` carries the
   selected title (clause 10(a) / clause 9). No effect on `ver`/`pub` — asserted. The banned-word
   scan covers title, subtitle **and** aria-label as clause 10(g) requires, with the identical
   regex UT-0759 uses. The `git diff` shows UT-0750's two pinned assertions **deleted and
   replaced**, with two `queryByText(...).toBeNull()` negatives added — a flip, not a supplement.
5. **§7 item 30's honesty — HOLDS.** "does not close a single RTM row" is the **first clause of
   the first sentence**, before any description of what was built, and the three grounds (a)(b)(c)
   are each checkable and each check out. The audit independently confirms the Must count is
   **unmoved at 138/16/122**. Nothing elsewhere in Doc 06 claims more — §7 item 4's v2.10.0
   annotation is scrupulous ("'Elections not implemented' was true at v2.9.0 and is no longer the
   whole truth"), the §6 flag-ledger row names the flow as shipping dark, and the change history
   repeats the zero-closure note. Of the seven limitations, **(i)–(vi) are each true of the code**
   as written; **(vii) is true as a property but overstates its evidence** (ISS-02). The gap in the
   list is what it does **not** say: ISS-01.
6. **Copy honesty — strong except one string (ISS-05).** Every new `en.candidates.*` string is
   v1-accurate and claims nothing the product does not deliver; `residencyHelp`, `feedbackVisibility`
   and `demoNote` each state an unflattering v1 truth plainly. No FR-131 banned word, no DES-085
   jargon, Grade-8 — and UT-0907 renders template functions before scanning, so the scan is real.
   The Arabic is a key-for-key mirror, is not a copy-paste, and `ar.ts:370` carries the
   `ARABIC-I18N` marker — **reviewed status is correctly not claimed**. `ReceiptFreedomBanner`
   precedes the post-debate vote controls, asserted by `compareDocumentPosition` (real document
   order, not source order). The open-tier visitor gets the full clause-(d) notice on both the
   stand and vote paths, and no control anywhere pretends to verify them — `page.tsx` deliberately
   leaves the visitor's credential row absent and says why. `feedbackLead` is the one string that
   misstates what the code does, in both locales.

## 6. Rulings on the engineer's judgement calls

| Call | Ruling |
|---|---|
| Gate behind the existing `elections` flag rather than a new one | **Upheld.** `packages/protocol/src/flags.js:26` already reads "Region+office scoped candidate nomination and internal election" with `prod:false` and `removeBy: 'Phase 3 rollout complete'`. A new flag would have duplicated the semantics and added a second thing to retire |
| Editing Doc 06 directly rather than via a PM-applied spec | **Upheld.** The engineer owns Doc 06 and holds Edit; the build-session precedent applies. The result is internally consistent, the annotate-don't-delete convention is respected throughout, and every mechanical figure in it verified |
| Two engineer-chosen constants flagged for ratification (COOLDOWN-01 pattern) | **Upheld.** Both are flagged in the source JSDoc, in §7 item 30(iii), in the assignment's ownership table and in a UT — four places. The reasoning for each ("no published figure exists"; "OI-08 records it as published-but-unset"; FR-068's one month as the nearest anchor) is recorded, and neither is silently naturalised. Correctly routed to the approver, not decided |
| v1 residency self-declared, and said so in copy | **Upheld.** The limitation, its bound (within jurisdiction AND office region) and its v2 successor (DES-007) are stated in the module header, in §7 item 30(i) and to the member in `residencyHelp` — the honest order |
| Not mounting PrivacyStatus on `/candidates/` | **Upheld.** Clause 1's self-view contract would return `null` without an authenticated session; mounting it would be theatre. Consistent with every other page and with §7 item 18. Clause 10 is implemented in the component for whichever surface mounts first, which is the right place for it |
| "(demo)" controls acting for the visitor | **Upheld, with ISS-L2.** Disclosed at the control, at the section and at the page. The three controls item 30(iv) names are each labelled; two others rely on the page-level note |

## 7. Routing instruction

**FAIL → route to the owning role: engineer (Samuel Oyelaran).** Per the assignment record, the
**High (ISS-01)** is fixed **this session, before commit**. ISS-02, ISS-03, ISS-04 and ISS-05 are
Mediums and each independently forces the FAIL, so all five must close. The rework MUST produce a
**new version** — bump `Version:` to **2.11.0** (a Medium+ FAIL warrants at least a minor bump),
set `Status: In Review`, and record the five closures in the change history — after which this
loop re-reviews as **cycle 2 of 5**.

Nothing in Docs 03/04/07/08 changes as a result of this review. The **RTM Must count held at
138/16/122** and is expected to stay there: the TC rows for UT-0891..UT-0907 and the RTM rows are
the tester's on a later touch, and whether any candidate row can close remains the architect's
routed decision on DES for FR-081/FR-093 and the Definition-A amendment of DES-027/066/067/076.

## 8. Human decision at the cap

Not applicable — cycle 1 of 5, verdict FAIL, not ESCALATED.
