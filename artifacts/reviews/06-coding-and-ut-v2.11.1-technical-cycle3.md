# Document Review Report — Doc 06 v2.11.1 (+ the reworked TRUMO-P02 code drop)

> Produced by the **document-review** skill. Reviewer is **not** the owning role: Doc 06 and the
> code are the engineer's (Samuel Oyelaran); this review is the tester's (Ji-woo Park), assigned by
> the PM in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md` **before**
> dispatch. Same neutral reviewer as cycles 1 and 2. The reviewer **scores and lists issues only —
> it edited no document and no code.**

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.11.1
Review mode: technical
Reviewer role: tester
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 3 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

**PASS at 97%, 0C/0H/0M/3L.** The single Medium that failed cycle 2 (ISS-06) is genuinely and
completely closed: §3's accounting note is now written **per package, each figure derived from its
own bracketed addends**, and I re-derived **every one of them by hand** — sdk `244 [124+36+38+22+24]
+ 42 + 1 = 287`, protocol `151 [126 (82+44) + 24 + 1] + 27 = 178`, ui `18 [14+4] + 7 = 25`, web
`116 [16+27+27+1+18+2+4+6+15] + 2 + 18 + 2 = 138`, and `95 + 178 + 287 + 25 + 16 + 138 = 739`. Every
sum holds, **the note now derives web 138 from web addends only**, the cross-package splice is gone,
and the historical annotation is extended rather than replaced. All three Lows are taken and
verified by **execution**, not by changelog: the UT-0899 spy now casts a SUITABLE vote, resolves
**`PUBLISHED`**, and still asserts `officeHolder` was never read — and I proved that spy
**non-vacuous** with a positive control (one read through `service.officeHolder()` registers exactly
one `store.officeHolder` call). The corrected L5 cause **reproduces exactly**: the first wording ×3
gives **282** for `finance` and **270** for `law`, the only shorter pillar name, below
`MIN_PILLAR_CHARS` 280. L6 pins the Arabic sign inside the existing `it`. `npm test` **739/739**
(contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138), typecheck clean, `lint:deps`
OK, `--audit` exit 0 with **RTM 138 Must / 16 COMPLETE / 122 OPEN unmoved** and Doc 06 v2.11.1 the
sole blocker (this report). Nothing affirmed at cycles 1–2 was disturbed.

Three **Low** issues survive and none blocks. The most consequential is my ruling on the version
bump: **the PATCH bump is wrong — this should be v2.12.0.** Doc 06 states the rule twice in its own
change history, and the one patch carve-out it has ever granted (v2.8.1) is explicitly conditioned
on "**no product code, no test** …", two clauses this rework fails. I record it as a **Low**, not a
Medium, because the change-history entry **openly and accurately discloses** that two tests changed
— the entry tells the truth about its own contents and only files that truth under the wrong digit.
The second Low is **the site the sweep missed** (ISS-L8) — §3's table caption still reads "Counts
are actual as of **v2.8.1**" above a table totalling 739, and its own parenthetical promises it
"cannot go stale again on the next count change". It is pre-existing, it went stale at v2.10.0, and
**I missed it at cycles 1 and 2** — I own that. It is Low because no figure it sits above is wrong.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

### Verification actually performed (not taken on assertion)

| Claim | How verified | Result |
|---|---|---|
| **ISS-06** — every §3 package figure derives from its own addends | re-computed all five chains from the note's own bracketed numbers | **all re-derive.** sdk inner `[124,36,38,22,24]` = **244**; `244+42+1` = **287**. protocol `82+44` = **126**; `126+24+1` = **151**; `151+27` = **178**. ui `14+4` = **18**; `18+7` = **25**. web inner `[16,27,27,1,18,2,4,6,15]` = **116**; `116+2+18+2` = **138**. Suite `95+178+287+25+16+138` = **739** |
| ISS-06 — the note now derives **web 138** | read the rewritten web sentence | **yes.** Its subject is "**web 138**" and every addend is a web addend (UT-0871 +2, UT-0904..0907 +18, UT-0905/UT-0906 +2). The v2.11.0 tail "+96 … +3 … = 739" is gone; the suite equation is carried separately as "**contracts 95 · indexer 16** unchanged. **Total 739.**" |
| ISS-06 — the cross-package splice is gone **everywhere** | swept the whole document for `736`, `+96`, `of 116`, `of 244`, `of 151`, `total of` | **gone from every live site.** The only surviving `736`/`+96` are at the v2.10.0 Status line (:31) and the v2.10.0/v2.11.0 change entries (:134, :192), where 736 was the true figure — correct history, correctly preserved |
| ISS-06 — annotate-don't-delete on the note's own defect record | read the closing parenthetical | **extended, not replaced:** the v2.4.3 annotation ("stated 89 while its own addends summed to 91") is intact and the new clause is appended — "At v2.11.0 the same shape recurred: cross-package addends spliced into the web sentence — corrected at v2.11.1" |
| **L4** — the spy now runs the `PUBLISHED` branch | `npx vitest run test/candidates.test.js -t "never read the office-holder record" --reporter=verbose`; read `candidates.test.js:473–488` | **green, 1 passed.** The spy is installed **before** `openElection`, so `stand`, `completeDebates`, `openPostDebateVote`, `castPostDebateVote` **and** `closePostDebateVote` all run under it; `expect(r.stage).toBe(CANDIDACY_STAGE.PUBLISHED)` then `expect(spy).not.toHaveBeenCalled()`. The window is now **wider** than cycle 2 asked for |
| L4 — the spy is **not vacuous** | positive control: wrapped `store.officeHolder` with a counter and called `service.officeHolder('ward-rep')` | **it bites.** `service.officeHolder` returned `"incumbent"` and the store method recorded **exactly 1 call** — `candidates.js:769–770` delegates to `store.officeHolder` (`:215`), so any read on the publication path would register. The absence assertion is real |
| **L5** — the corrected cause is arithmetically true | reconstructed the quoted first wording (`"…in enough detail to judge a programme. "`) for `name='Commons Forward'` over all eight `PILLARS` | **exact.** `finance` ×3 = **282**; `law` ×3 = **270** — and `law` (3 chars) is the **only** pillar name shorter than `finance` (7). Every other pillar is ≥282. The engineer's "282 for finance, below 280 for shorter names" reproduces to the character |
| L5 — the shipped wording really does clear 280 at ×3 | extracted the **actual** template literal from `candidates/page.tsx` by regex and measured | **yes.** Gate-relevant (trimmed) range **392–413**, matching the published figure; raw range 393–414. `validateVision` measures `text.trim().length` (`packages/protocol/src/party.js:82`), so 392–413 is the right basis — see ISS-L9 on the one figure measured on the other basis |
| L5 — annotate-don't-delete | read the v2.11.0 change entry | **retained verbatim**, false clause and all ("fell below MIN_PILLAR_CHARS (280) **for short pillar names**", :127–131), with the v2.11.1 entry above it stating "the v2.11.0 entry is retained with this annotation governing". Correct house practice |
| **L6** — the Arabic sign is pinned | `apps/web/test/candidates.test.tsx:281–286`; `ar.ts:437–439` | **taken.** `expect(ar.candidates.feedbackLead).toMatch(/يخصم/)` sits beside the English assertions **inside the existing `it`**, with a comment framing it as "**wording, not fluency**: still a draft". `ar` reads "الإعجاب يضيف ثلاثًا، وعدم الإعجاب **يخصم** واحدًا" — sign correct |
| **739/739 with the published split** | `npm test` (root), plus `-w @trumocracy/contracts` and `-w @trumocracy/protocol` separately (the root run's tail truncated them) | **PASS, exit 0** — contracts **95** · protocol **178** · sdk **287** · ui **25** · indexer **16** · web **138** = **739**, the exact split Doc 06 publishes. Unchanged from v2.11.0, as the PATCH claim requires |
| typecheck / lint:deps / audit | `npm run typecheck -w @trumocracy/ui` and `-w @trumocracy/web`; `npm run lint:deps`; `node hooks/run_gates.cjs --audit` | **clean · clean · `7 workspace package(s) checked — layering OK` · exit 0**, **1 blocking document = `06-coding-and-ut.md v2.11.1` — "no report for this version"** (expected; this report), **RTM 138 Must / 16 COMPLETE / 122 OPEN, both independent signals AGREE**, Gate-2 traceability **NOT MET** as before |
| **ISS-01 actor binding — replayed once more** | ran the cycle-1 failing input against the real `CandidateService` in a standalone node ESM script (not the test file) | **all four refuse.** `recordConsent(cid,'mallory',CONSENT)` → `NOT_YOUR_CANDIDACY`; `withdraw(cid,'mallory')` → `NOT_YOUR_CANDIDACY`; absent actor (`undefined`, `''`) refused on both; **every refusal detail is `null`** — no member leaked. After the attempts: stage `NOMINATED`, public `member` `null`, **raw store row still holds `{"legalName":"Alice Real Name"}`**, trail `["NOMINATED"]`. The candidate's own call still works: `withdraw(cid,'alice')` → `{"stage":"WITHDRAWN","disclosuresDestroyed":true}` |
| guard placement undisturbed | `candidates.js:494–497`, `:530–534` | `_requireCandidate` is still the **first** check after the row lookup in both methods — before the stage test, before `validateConsent`, before the window/lock test, before any write |
| endorser-trail extension undisturbed | `candidates.test.js:311` | the assertion and its FR-037 comment are intact ("the endorsement trail names no endorser either"); the sdk suite is green. Upheld at cycle 2 on **FR-054** grounds — ruling unchanged |
| OPEN-27 verbatim | `PrivacyStatus.tsx:247`, `:256–259`, `:267`, `:270–272`, `:388` vs Doc 03 v2.14.1 §10.12.3 clause 10 | **untouched and still verbatim**: `ANON_TITLE_V1 = 'Open tier'`, the three context subtitles, the fail-honest `ANON_SUBTITLE_DEFAULT`, the explicit `isAnonContext` type guard, and the selection expression. UT-0903 still 7; ui 25/25 |
| §7 item 30 zero-row honesty | `docs/06-coding-and-ut.md:1776–1790`, `:1813` | intact — "**does not close a single RTM row — stated before anyone reads the drop as closures**" is still the first clause of the first sentence; grounds (a)(b)(c) unchanged; (viii) still present. Nothing quietly claimed |
| six upheld judgement calls · copy honesty · FR-131 banner | v2.11.0 entry `:133` unedited; UT-0907 green; `candidates.test.tsx:248–250` | all stand. The banner/control **document-order** assertion (`compareDocumentPosition … DOCUMENT_POSITION_FOLLOWING`) is intact and green; `ReceiptFreedomBanner` renders at `CandidateSelection.tsx:463` |
| annotate-don't-delete in the Status block | header `:4–60` | **held.** v2.11.1's Status carries v2.11.0's verbatim under "Previously:", which carries v2.10.0's, which carries the v2.9.0 Approved line. Both the v2.11.0 and v2.10.0 change entries are intact and unedited |

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Unchanged from cycle 2. FR-037's actor binding, FR-085's destroy semantics, the nobody-named pre-consent trail and the FR-065 sign in both locales all re-verified by execution. L5's correction makes the FR-011 substance gate's real arithmetic checkable for the first time |
| T2 Soundness | 20 | 99 | 19.8 | Up from 98. The L4 fix **strengthens** the fairness evidence rather than merely restating it: the `PUBLISHED` outcome now literally executes under the spy, and the spy is proven to bite on a real delegating accessor. The guard still adds no verifier and leaks nothing (refusal detail is `null`) |
| T3 Traceability & IDs | 20 | 95 | 19.0 | Up from 85 — **ISS-06 is fully closed** and every one of the five addend chains re-derives independently. IDs clean, nothing renumbered, RTM honestly unmoved at 138/16/122. Residual dent: **ISS-L8**, §3's table caption still dated v2.8.1 above a 739-row table |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged. The one destructive path stays bound to its owner, fails closed on an absent actor, and is disclosed in item 30(viii) in the same plain terms as (i)–(vii). `IS_INSECURE_MOCK` discipline and the CON-015 disclosure untouched |
| T5 Completeness & testability | 15 | 98 | 14.7 | Up from 94 — both cycle-2 residuals are gone. The spy covers the literal publication outcome and is non-vacuous by positive control; the Arabic sign is pinned so an ARABIC-I18N re-issue cannot regress it silently. No placeholders; every new assertion asserts what its name claims |
| T6 Convention compliance | 10 | 90 | 9.0 | Down from 92, and the only criterion that moved the wrong way. The §3 graft and the false in-code comment are both fixed, and annotate-don't-delete held everywhere I checked — but **ISS-L7** (the bump breaches the document's own twice-stated rule), **ISS-L8** (a stale version stamp that promises it cannot go stale) and **ISS-L9** (two figures in one sentence measured on different bases) all land here |
| **Total** | **100** | — | **97%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-L7 | Low | T6 | `docs/06-coding-and-ut.md:1–15` (`Version: 2.11.1`), header Status, change-history v2.11.1 | **The PATCH bump is wrong; this rework earns a MINOR bump (v2.12.0).** Doc 06 states the rule in its own change history **twice**: v2.7.0 — "*A Medium forces at least a minor bump (the skill's rule), hence v2.6.0 -> v2.7.0, not a patch*" (`:455`) — and §5.0's v2.6.0 line, "*All six reworked into v2.7.0 (a Medium forces at least a minor bump)*" (`:1291`). The **only** patch carve-out the document has ever granted is v2.8.1 (`:309–311`), and it is expressly conditioned on **six** things: "*no product code, **no test**, no `UT-####`, no count, no flag and no normative text changes*". v2.11.1 fails **two** of them — it changed **two test files** (`packages/sdk/test/candidates.test.js` for L4, adding a voter, a cast and a new `expect(r.stage).toBe(PUBLISHED)`; `apps/web/test/candidates.test.tsx` for L6, adding the Arabic assertion) and it edited a **product source file** (`apps/web/src/app/candidates/page.tsx`, a comment). The engineer's stated ground — "*no UT minted, no count moved and no normative text changed*" — recites **three** of the six criteria and omits the two it fails: the same shape as the defect this cycle was called to fix, a count of criteria met published as the full criteria list. **v2.7.0 is the exact structural twin**: a Medium documentary fix plus Lows where "*no product code changed **except the one test file***" — ruled **minor, not a patch**. **Low, not Medium**, because the v2.11.1 entry **discloses the test changes openly and accurately** in its own text ("the UT-0899 spy test now casts one SUITABLE vote"; "UT-0906 pins the Arabic `feedbackLead` sign"): no reader is misled about what changed, only about which digit it belongs under | **Do NOT renumber this version retroactively** — this PASS attaches to **v2.11.1**, and the hook matches the document's declared version to this report's filename; renumbering now would re-block the document. Instead record the ruling in the change history at the next touch (annotate, do not rewrite the v2.11.1 entry) and take the **next** version to **v2.12.0**, not v2.11.2 |
| ISS-L8 | Low | T3 / T6 | `docs/06-coding-and-ut.md:1115–1116` (§3 table caption) | **The site the sweep missed — and I missed it at cycles 1 and 2 too.** §3's caption still reads "**Counts are actual as of v2.8.1 (2026-09-08)**, verified by running `npm test` (v2.8.1, ISS-04: version-relative wording **so this line cannot go stale again on the next count change**)" — sitting directly above a table whose `**Total**` row is **739**. At v2.8.1 the suite was **640**. The line is stale by three versions and **99 tests**, and its own parenthetical guarantee has been falsified **twice** since (+96 at v2.10.0, +3 at v2.11.0): the v2.8.1 ISS-04 fix made the wording version-relative but the version stamp still has to be re-cut on every count change, and it was not. The reconciliation sweep at v2.11.1 rewrote the note **below** the table and left the caption **above** it untouched. **Pre-existing** (it went stale at v2.10.0), **not** introduced by this rework. **Low, not Medium**, because no figure it sits above is wrong: the table is correct and I verified all six package totals by execution, and the correct currency is stated three lines below in a note explicitly stamped "*reconciled at v2.11.1*" with per-version addends, and twice more in the header Status and the change history. The failure mode is a reader wasting effort re-deriving, never carrying away a wrong number — unlike cycle-2's ISS-06, where the stale text published **244/151/18** as this version's figures | Re-cut the stamp to the current version at the next touch — "Counts are actual as of **v2.11.1**, verified by running `npm test`" — and either drop the "cannot go stale again" clause or restate it as what it actually is: a **maintenance duty** ("re-stamp this line on every count change"). Consider the house pattern already used at `:1749` and `:1755` ("Re-check this figure on every … version bump") |
| ISS-L9 | Low | T6 / T5 | `docs/06-coding-and-ut.md:88–92` (change-history v2.11.1, the L5 clause); `apps/web/src/app/candidates/page.tsx:82–84` | **Two figures in one sentence, measured on two different bases.** The gate is `text.trim().length < MIN_PILLAR_CHARS` (`packages/protocol/src/party.js:82`), so the length that decides the refusal is the **trimmed** length. The published range for the shipped wording, "**392–413 for all eight**", is the **trimmed** range (raw is 393–414) and is exactly right. But the published figure for the first wording, "**282 for `finance`**", is the **raw** length — trimmed it is **281**. Both figures support the conclusion unchanged (281 and 282 both clear 280; `law` fails at 269 trimmed / 270 raw, and `law` is the only pillar name shorter than `finance`), so **nothing about the defect story is wrong** — the cause is correctly identified and independently reproduced. It is the measurement basis that is inconsistent, in the one sentence whose whole purpose is to compare lengths against a threshold. The page comment inherits the same 282 | State both on the gate's own basis at the next touch: "`.trim().length` **281** for `finance`, **269** for `law` — the only shorter pillar name — against `MIN_PILLAR_CHARS` 280", or say explicitly that 282 is the raw length and 281 the measured one. Optional, as at cycle 2: `.repeat(3)` would match the two sibling pages; the engineer's "×4 is kept as margin, not necessity" is an honest recorded choice and I do not press it |

> **Low** issues do not block the pass bar. There is **no Critical, High or Medium**, so the
> version **PASSES**.

## 5. Rulings the assignment asked for

1. **The §3 sums re-derive — every one of them, from the note's own bracketed addends.** sdk
   `[124+36+38+22+24] = 244`, `244 + 42 + 1 = **287**`; protocol `(82+44) = 126`, `126+24+1 = 151`,
   `151 + 27 = **178**`; ui `(14+4) = 18`, `18 + 7 = **25**`; web `[16+27+27+1+18+2+4+6+15] = 116`,
   `116 + 2 + 18 + 2 = **138**`; suite `95 + 178 + 287 + 25 + 16 + 138 = **739**`. **The note now
   derives web 138**, from web addends only — the subject of the sentence and the number it produces
   finally agree, which is the whole of what ISS-06 asked for. Every figure matches `npm test`
   executed this session. **The cross-package splice is gone from every live site**: I swept the
   document for `736`, `+96`, `of 116`, `of 244`, `of 151` and `total of`, and the only survivors are
   in the v2.10.0 Status line and the v2.10.0/v2.11.0 change entries, where 736 and +96 were the
   **true** figures — correct history, correctly preserved under annotate-don't-delete. **ISS-06 is
   closed.** The sweep did miss one site, but it is the caption *above* the table rather than the
   note below it, no number it governs is wrong, and it is **ISS-L8, Low** — see §4.
2. **The patch bump was NOT right — this should be v2.12.0.** Doc 06 states the rule twice in its
   own change history ("a Medium forces at least a minor bump — the skill's rule", `:455`, `:1291`),
   and the single patch carve-out it has ever granted (v2.8.1, `:309–311`) is conditioned on six
   clauses including "**no test**". This rework changed **two test files** and touched a product
   source file. The engineer's ground recites three of the six criteria and drops the two it fails.
   **v2.7.0 is the exact twin** — a Medium documentary fix plus Lows, "no product code changed
   **except the one test file**" — and was ruled **minor, not a patch**. I record this as **ISS-L7
   (Low)** rather than a Medium because the v2.11.1 entry **states plainly that both tests changed**:
   the document tells the truth about itself and files it under the wrong digit. **Disposition:
   do not renumber retroactively** — this PASS attaches to v2.11.1 and the hook matches the declared
   version to this report's filename. Fold the correction at the next touch and let the next version
   be **v2.12.0**, not v2.11.2.
3. **L4 is genuinely taken, and the spy is genuinely non-vacuous.** The UT-0899 `it` now casts one
   SUITABLE vote, asserts `r.stage === PUBLISHED`, and only then asserts `officeHolder` was never
   called — run verbosely, **1 passed**. The spied window is in fact **wider** than cycle 2 asked
   for: the spy is installed before `openElection`, so nomination, endorsement, the three debates,
   the vote-open, the **cast** and the **close** all execute under it. And it is not a vacuous
   assertion: my positive control wrapped `store.officeHolder` with a counter and called
   `service.officeHolder('ward-rep')` — one call registered, `"incumbent"` returned, through the same
   `candidates.js:769–770 → :215` delegation any publication-path read would take. The cycle-2
   residual is closed on the merits, not on the phrasing.
4. **L5's corrected arithmetic is exact, and the correction is properly annotated.** Reconstructing
   the wording the engineer quotes — `"${name} sets out its position on ${p} here, in enough detail
   to judge a programme. "` with `name = 'Commons Forward'` — gives **282** at ×3 for `finance` and
   **270** for `law`, the **only** pillar name shorter than `finance`; every other pillar is ≥282.
   That reproduces the published claim to the character and, because the reconstruction had to be
   exact to land on 282, it independently corroborates that the quoted string really was the
   pre-fix seed. The **false** v2.11.0 explanation is **retained verbatim** in its own change entry
   (`:127–131`) with the v2.11.1 entry above it stating "the v2.11.0 entry is retained with this
   annotation governing" — **annotate-don't-delete, correctly applied to a correction of the
   engineer's own prior claim**, which is the harder case and the one that matters. One residual:
   282 is the **raw** length where the gate measures `.trim().length` = 281, while the 392–413 in the
   same sentence **is** trimmed — **ISS-L9, Low**; the conclusion is unaffected.
5. **L6 is taken and correctly scoped.** `expect(ar.candidates.feedbackLead).toMatch(/يخصم/)` sits
   beside the English assertions **inside the existing `it`** — which is why no count moved — with a
   comment that draws the line exactly where it belongs: "**wording, not fluency**: still a draft".
   That is the right scope. Pinning one sign does not and must not imply the Arabic has been
   reviewed; the ARABIC-I18N draft marker and UT-0907's "reviewed status NOT claimed" assertion are
   both untouched.
6. **The Must count held: 138 Must / 16 COMPLETE / 122 OPEN**, derived and published signals
   agreeing, exactly as at cycles 1 and 2 and at the v2.10.0 entry state. `--audit` exits **0** with
   `06-coding-and-ut.md v2.11.1` the only blocking document — "no report for this version", which is
   this report's absence and is expected. Item 30 still leads with "**does not close a single RTM
   row**" and its grounds (a)(b)(c) are unchanged. Nothing in this rework claimed a closure. The
   Gate-2 traceability criterion remains **NOT MET**, as it was.
7. **Nothing I affirmed at cycles 1–2 was disturbed.** ISS-01's actor binding **replayed by
   execution once more**: all four hostile inputs refused with `NOT_YOUR_CANDIDACY`, every refusal
   detail `null`, stage still `NOMINATED`, public `member` still `null`, the raw store row still
   holding `legalName: 'Alice Real Name'`, the trail still `["NOMINATED"]`, and the candidate's own
   `withdraw` still destroying. `_requireCandidate` is still the first check after the row lookup in
   both methods. The **endorser-trail extension** is intact (`candidates.test.js:311`) and my FR-054
   ruling stands — that is the cite I will use in the TC row. **OPEN-27** is verbatim against Doc 03
   v2.14.1 clause 10: title, three context strings, fail-honest default, explicit `isAnonContext`
   guard, `aria-label` = selected title; UT-0903 still 7, UT-0750 still flipped. **Item 30's
   zero-row honesty** holds, (viii) included. The **six upheld judgement calls** stand — the v2.11.0
   entry recording them is unedited. **Copy honesty** is green (UT-0907), and the **FR-131 banner**
   still precedes the post-debate vote controls, asserted by `compareDocumentPosition`.
8. **Annotate-don't-delete held.** v2.11.1's Status carries v2.11.0's verbatim under "Previously:",
   which carries v2.10.0's, which carries the v2.9.0 Approved line beneath it. Both the v2.11.0 and
   v2.10.0 change-history entries are intact and unedited. §3's note extended the v2.4.3 defect
   annotation rather than replacing it. The one place the convention is still owed a stamp is
   ISS-L8's caption — a line that was never re-cut, not a line that was overwritten.

## 6. Routing instruction

**PASS → the owning role (engineer, Samuel Oyelaran) sets `Status: Approved` on Doc 06 v2.11.1 and
the SOP advances.** The review-and-rework loop for the TRUMO-P02 code drop closes here, at **cycle 3
of 5** — two cycles unused. No Critical, High or Medium survives, so nothing blocks commit.

**Do not renumber v2.11.1.** This PASS is filed against version **2.11.1** and
`node hooks/run_gates.cjs --audit` matches the document's declared version to this report's
filename; changing the version now would re-block the document and cost a cycle for a digit. The
three **Lows carry**, to be folded at the next touch in the house manner: **ISS-L7** (record the
bump ruling and take the next version to **v2.12.0**, not v2.11.2), **ISS-L8** (re-cut §3's caption
to the current version and turn "cannot go stale again" into an explicit re-stamp duty), **ISS-L9**
(state the first-wording length on the gate's own `.trim().length` basis).

Nothing in Docs 03/04/07/08 changes as a result of this review, and nothing in them is reopened.
The **RTM Must count held at 138/16/122** and is expected to stay there: the TC rows for
UT-0891..UT-0907 and the RTM rows are the tester's on a **later touch**, and whether any candidate
row can close remains the **architect's** routed decision on DES for FR-081/FR-093 and the
Definition-A amendment of DES-027/066/067/076. The **approver's** ratification of
**NOMINATION-MIN-01** and **MATURATION-01** is likewise untouched. **Gate 2 remains NOT MET on
traceability** — this PASS is a document/code-quality verdict, not a gate sign-off, and the merge
signature is reviewer-qa's.

## 7. Human decision at the cap

Not applicable — cycle 3 of 5, verdict **PASS**, not ESCALATED. The cap was not reached and no
human decision is required.
