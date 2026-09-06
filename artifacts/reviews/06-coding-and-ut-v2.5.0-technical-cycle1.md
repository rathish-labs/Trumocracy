# Document Review — Doc 06 Coding & UT v2.5.0 + the REL-LIM-18 code drop (technical, cycle 1)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never -->
<!-- edits the reviewed document or the code. Owning role: engineer (Samuel Oyelaran).      -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.5.0
Review mode: technical
Reviewer role: tester (neutral — engineer Samuel Oyelaran owns Doc 06 and the code)
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 6
Cycle: 1 of 5
Verdict: PASS
```

Date: 2026-09-05

---

## 1. Summary (BLUF)

Doc 06 v2.5.0 and the uncommitted code drop it records were reviewed end to end against
`FR-131` (Doc 02 §4.45), the `REL-LIM-18` row in Doc 09 v1.3.0, the Doc 03 §10.12.3
backing-aware sub-table, and the Doc 06 §4a code-drop review bar. **Verdict: PASS
(96%, 0C/0H/0M/6L).** All six commissioned sites are genuinely fixed: every replacement string
states the `FR-131` v1 truth — conventional authentication, NOT anonymous / receipt-free /
coercion-resistant; the platform database CAN see vote direction and party membership; the
private ballot arrives with v2 and is not on — and the four banned words appear only negated.
The one string a citizen reads (`banner.notReceiptFreeTitle/Body`, EN and its Arabic mirror)
was verified **as rendered**, not merely as source. I ran the suite myself: **619 tests, zero
failures** (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95), typecheck
clean, dep-guard clean — matching the drop's claim exactly. An independent sweep of
`packages/*/src` and `apps/web/src` confirms **no remaining `FR-131` violation**: every
surviving hit is a Solidity/JS visibility keyword, an `IS_INSECURE_MOCK` identifier, an FR-082
Supporter-tier property, a v2/MACI-path reference, or the `anon` state name. The six Lows are
documentation-hygiene and record-completeness findings, not correctness or safety defects; none
blocks the pass bar.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — PASS only when both rows above are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | `FR-131` (a), (b), (c) stated at every replacement site; clause (d) acknowledgement gap correctly scoped out and recorded as owed (§7 item 26(d)) |
| T2 Soundness | 20 | 98 | 19.6 | Backing-aware title reuses the proven clause-7 fail-honest pattern; the FR-over-SDD precedence is reasoned, sourced and recorded, not asserted |
| T3 Traceability & IDs | 20 | 95 | 19.0 | `UT-0759/0887/0888` correctly minted, no reuse; §3 rows and all totals verified by arithmetic and by `npm test`; owed TC/RTM rows named. ISS-06 |
| T4 Security & failure modes | 15 | 98 | 14.7 | Fail-honest default on absent/false/malformed backing; four-path test present; negation guard errs strict; change is copy + one render branch, trivially reversible |
| T5 Completeness & testability | 15 | 94 | 14.1 | Regression guards genuinely fail on reversion; ISS-01, ISS-02, ISS-05 |
| T6 Convention compliance | 10 | 92 | 9.2 | House style, ISO dates, semver, §4a bars; ISS-03, ISS-04 |
| **Total** | **100** | — | **96%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T5 | Doc 06 §7 item 26, "Left in place… named here so the next sweep does not rediscover them"; change-history v2.5.0 ("§7 item 26 names the non-voting hits left in place") | The enumeration is incomplete. My independent sweep found three further residual hits that item 26 does not name: `packages/protocol/src/proposals.js:23,67` ("a Supporter is anonymous unconditionally (FR-082)" — the protocol twin of the named `sdk/src/proposals.js` hit), `packages/sdk/src/ballot.js:68` ("absent in v2 for receipt-freeness"), and `apps/web/src/i18n/ar.ts:53` ("بقاء اسمك سريًا" = "your name kept secret" — the Arabic mirror of the en.ts landing string the item *does* name and route). The compliance substance is unaffected (none describes v1 voting; I confirm the claim "no further v1-voting claim"), but the stated purpose of the list — that the next sweep not rediscover them — is not met | Add the three sites to §7 item 26's "left in place" list with their one-line justification, and route `ar.ts:53` to the product-owner alongside its English counterpart, since the two must be decided together |
| ISS-02 | Low | T5 | Doc 06 §7 item 17 vs change history v2.5.0 ("working-draft engineer translation; §7 item 17 applies") | §7 item 17 is scoped to "Arabic **party-creation** strings … (party-creation section)". The new `ar.ts` `banner.notReceiptFreeTitle/Body` is a **vote-surface safety** string, not a party-creation string, so item 17 as written does not cover it; only a change-history parenthetical asserts that it does. A reader of §7 — the canonical limitations register — would not learn that the Arabic coercion warning is an unreviewed engineer draft. (I read the Arabic segment by segment and it is a faithful, `FR-131`-compliant rendering; the risk is registry hygiene, not present mistranslation) | Widen §7 item 17 to name `apps/web/src/i18n/ar.ts` `banner.notReceiptFreeTitle` / `notReceiptFreeBody` explicitly, flagged for native-speaker review **before** any Arabic-locale customer deployment — a mistranslated coercion warning is a safety defect, not a polish item |
| ISS-03 | Low | T6 | `apps/web/src/i18n/en.ts:400-407`; Doc 06 §2.2 (Grade-8, NFR-023) and the §4a "Jargon filter clean" bar | The drop record states suite/typecheck/dep-guard but is silent on the §4a jargon-filter and §2.2 reading-level bar for the new strings, and the new body is materially longer and denser than the copy it replaces: 6 sentences / ~93 words including one 27-word sentence ("Nobody outside Trumocracy sees this on any public page, but a record exists, and it could be shown if somebody pressures you to prove how you voted.") and one 22-word sentence; a Flesch-Kincaid estimate puts it near grade 9–10 against ~6–7 for the retired copy. Much of the rise is compelled by `FR-131`'s own mandated vocabulary. **The jargon filter itself is clean** — I verified no banned term ("crypto", "token", "mint", "blockchain", "wallet", "gas fee", "seed phrase", "private key") appears in the new EN strings, and UT-0884 scans the proposals surface that mounts this banner and passes | Split the 27-word sentence (e.g. "Nobody outside Trumocracy sees this on any public page. But the record exists, and somebody could pressure you to show it.") and add a one-line reading-level statement to the v2.5.0 record — or, if the length is judged compelled by `FR-131`, record it as a deviation in §4a exactly as the DES-verbatim deviation was recorded |
| ISS-04 | Low | T6 | `apps/web/tsconfig.tsbuildinfo` (tracked in HEAD; modified in the working tree) | `git status --short` shows 12 modified files, not the 11 commissioned: the twelfth is a TypeScript incremental-build cache that is **tracked** and is dirtied by the very `npm run typecheck` the §4a bar mandates. Pre-existing hygiene (it was tracked before this drop), surfaced by it; not a product change | Add `*.tsbuildinfo` to `.gitignore`, `git rm --cached apps/web/tsconfig.tsbuildinfo`, and keep it out of the REL-LIM-18 commit so the drop's diff is exactly the six sites + tests + Doc 06 |
| ISS-05 | Low | T5 | `packages/ui/test/PrivacyStatus.test.tsx:1-16` (file header docblock) | The header still reads "UT-0750..UT-0758 — PrivacyStatus component" and enumerates only the clause-7 **subtitle** four-path; UT-0759 and the title four-path are absent from it. The block itself is correctly documented in place; only the file header is stale | Update the header range to `UT-0750..UT-0759` and add the title four-path line beside the existing subtitle one |
| ISS-06 | Low | T3 | Doc 06 §7 item 26(a) vs Doc 03 §10.12.3 (three-state table + its "Normative note (v2.7.1 — ISS-03)", line ~1571-1575) | The owed SDD cascade names the backing-aware sub-table v1 row and the "FR-131 banned-words analysis" note, but not the **three-state reference table**, whose `ver` row still shows Title "Verified — private" and whose normative note scopes the "informational reference copy" caveat to the `ver` **subtitle** only ("The `ver` row preserves the v2 reference **subtitle** annotated…"). Now that the title is also backing-aware, that note under-covers the title, and an engineer taking the three-state row as the title spec would hardcode the v2 claim — the exact failure the note exists to prevent | Add the three-state table's `ver` title cell and its normative note to the §7 item 26(a) cascade list handed to the architect |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

---

## Appendix A — Evidence (what I verified, and how)

### A.1 Suite, typecheck, dep-guard (run by me, not taken on trust)

`npm test` at `d:/Projects/Trumocracy`, HEAD working tree:

| Workspace | Tests | Result |
|---|---|---|
| `@trumocracy/contracts` | 95 | pass (5 files) |
| `@trumocracy/protocol` | 151 | pass (4 files) |
| `@trumocracy/sdk` | 244 | pass (12 files) |
| `@trumocracy/ui` | 18 | pass (1 file) |
| `@trumocracy/indexer` | 16 | pass (1 file) |
| `@trumocracy/web` | 95 | pass (5 files) |
| **Total** | **619** | **zero failures** |

95 + 151 + 244 + 18 + 16 + 95 = **619** — exactly the claimed count. `npm run typecheck`
exits 0 (`packages/ui`, `apps/web`, `tsc --noEmit`). `npm run lint:deps` prints
"dep-guard: 7 workspace package(s) checked — layering OK", exit 0. All three §4a bars met.

Deltas reconcile: `safety-surfaces.test.tsx` 16 → 20 (+4, UT-0887), `PrivacyStatus.test.tsx`
14 → 18 (+4, UT-0759), `party-and-regions.test.js` 41 → 42 (+1, UT-0888); 610 + 9 = 619.

### A.2 FR-131 compliance of every replacement string

`FR-131` closing sentence: the v1 product MUST NOT use **"private", "anonymous",
"receipt-free", "secure"** to describe v1 voting behaviour. `FR-131`(a) requires the notice to
say the ballot is NOT anonymous, NOT receipt-free, NOT coercion-resistant — so those words are
permitted **negated**, and the closing ban is on affirmative use.

**(3) `apps/web/src/i18n/en.ts` — the rendered banner, the one a citizen reads.** Checked as
rendered (`ReceiptFreedomBanner` → `role="note"` textContent), not just as source:

> Title: "In this version, your vote is not anonymous and not coercion-proof"
> Body: "This version signs you in the ordinary way. Your vote is not anonymous, not
> receipt-free and not coercion-resistant. Trumocracy's own records can see how you voted and
> which party you belong to. Nobody outside Trumocracy sees this on any public page, but a
> record exists, and it could be shown if somebody pressures you to prove how you voted. The
> ballot that hides how you voted even from Trumocracy comes with a later privacy upgrade and
> is not switched on yet. Do not vote in front of somebody who is pressuring you."

- **(a)** "This version signs you in the ordinary way" = conventional authentication in plain
  words; "not anonymous, not receipt-free and not coercion-resistant" states all three
  negations verbatim. ✅
- **(b)** "Trumocracy's own records can see how you voted **and which party you belong to**" —
  both vote direction *and* party membership, as `FR-131`(b) requires. ✅
- **(c)** "The ballot that hides how you voted even from Trumocracy comes with a later privacy
  upgrade and is not switched on yet" — the v2 layer named as the successor and explicitly not
  on. ✅
- **Banned words:** "anonymous" and "receipt-free" appear only immediately negated; "private"
  and "secure" do not appear at all. ✅
- Retired claims "Your vote is private" and "Nobody can see that a vote was yours" are gone. ✅

**Judgement asked for — "not coercion-proof" in the title.** Acceptable. "coercion-proof" is
not one of the four banned words, it appears negated, and the mandated term
"coercion-resistant" appears verbatim in the body one sentence later. The title is the plainer
register — it is the same word the retired title used ("not yet coercion-proof"), so the
citizen-facing vocabulary is unchanged while the claim it attaches to is now truthful. No
finding.

**Judgement asked for — "privacy upgrade" in the body.** Acceptable, and arguably required.
`FR-131`'s ban is on the word **"private"** used **to describe v1 voting behaviour**. "privacy
upgrade" (i) is not the banned token — UT-0887's `/\b(private|secure)\b/i` guard correctly does
not match "privacy" — and (ii) describes the **v2** layer, which `FR-131`(c) obliges the notice
to describe. `FR-131` itself uses "the Definition-B (v2) **privacy** layer" and "the
cryptographic **private** ballot" for exactly this clause, so the copy mirrors the requirement's
own vocabulary. Reading it as a violation would make clause (c) unsatisfiable in plain English.
No finding.

**Arabic mirror (`ar.ts`).** Read segment by segment. Title "في هذه النسخة، صوتك ليس مجهول
الهوية وليس محميًا من الإكراه" = "In this version, your vote is not anonymous and not protected
from coercion". Body: "signs you in the ordinary way" ✅ (a); "ليس مجهول الهوية، وليس خاليًا من
الإيصال، وليس مقاومًا للإكراه" = "not anonymous, not receipt-free, not coercion-resistant" ✅ (a);
"سجلات ترومقراطية نفسها تستطيع أن ترى كيف صوّتّ وإلى أي حزب تنتمي" = "Trumocracy's own records can
see how you voted and which party you belong to" ✅ (b); "ورقة الاقتراع التي تُخفي كيف صوّتّ حتى عن
ترومقراطية تأتي مع ترقية الخصوصية لاحقًا، وهي غير مُفعَّلة بعد" = "the ballot that hides how you voted
even from Trumocracy comes with the privacy upgrade later, and is not switched on yet" ✅ (c).
The retired claim "صوتك سري" ("your vote is secret") is gone — confirmed by grep. Translation
quality caveat: ISS-02.

**(1) `packages/protocol/src/flags.js`** — "Until this is on, a vote is cast through
conventional authentication: it is NOT anonymous, NOT receipt-free and NOT coercion-resistant,
and the platform database CAN see vote direction. The UI must state this plainly before the
ballot (FR-131). The normative wording is FR-131 (Doc 02 §4.45), not this string." States
(a)+(b), points at (c) through the flag's own semantics, and — importantly — **de-normativises
itself**, which is the fix for the failure mode Doc 09 recorded (this string had been cited as
the normative warning text until Doc 09 v1.1.0). ✅

**(2) `packages/contracts/src/core/Governor.sol`** — both retired sentences replaced; states
(a) and (b), keeps the Phase-3/MACI path (c), and adds a prohibition ("Do not describe a v1
vote as anonymous, private, receipt-free or secure anywhere in this contract's
documentation"). ✅

**(4) `packages/sdk/src/client.js` `#tenureSignals`** — the fix is the right one *technically*,
not just verbally: it keeps the true statement about the signal array ("the chain learns that
*some* member with sufficient tenure acted") and severs the false inference that used to be
drawn from it ("which is why a vote is anonymous even though it is public"), explicitly scoping
it: "That is a property of the signal array, not of v1 voting". ✅

**(5) `apps/web/src/components/ReceiptFreedomBanner.tsx`** — the doc comment now names `FR-131`
as normative, enumerates (a)/(b)/(c), records that the SDD §13 line is retired with its
decision record, and adds "Do not copy warning text out of this file into any document; cite
FR-131" — which closes the loop that made this comment the reason the bad copy would return. ✅

**(6) `packages/ui/src/PrivacyStatus.tsx`** — `ver` title backing-aware via the same clause-7
predicate as the subtitle (`backingProperties?.unlinkable === true`), `VER_TITLE_V1 =
'Verified'` as the fail-honest default, `VER_TITLE_V2 = 'Verified — private'` only on declared
ZK backing; `aria-label` follows the computed `title`, not `cfg.title`. ✅

### A.3 UT-0887 negation logic — is `affirmativeBannedWords` sound?

```javascript
const BANNED = /\b(private|anonymous|receipt-free|secure)\b/gi;
const affirmativeBannedWords = (text) =>
  [...text.matchAll(BANNED)]
    .filter((m) => !/\bnot\s+$/i.test(text.slice(0, m.index ?? 0)))
    .map((m) => m[0]);
```

**Sound, and it errs in the safe direction.** The lookbehind-by-slice tests the text *preceding
each match* for a trailing "not" + whitespace, so a banned word counts as permitted **only**
when the literal token "not" immediately precedes it. Everything else — including
distance-negation ("we do not claim it is anonymous"), other negators ("never anonymous"), and
"cannot" (the `\b` correctly refuses to see "not" inside "cannot") — is classified
**affirmative** and fails the assertion. Over-flagging is the correct failure direction for a
safety guard. No stateful-regex hazard: `String.prototype.matchAll` species-constructs its own
matcher and does not mutate `BANNED.lastIndex`, so repeated calls are deterministic.

**Could the retired copy pass it?** No, on two independent paths.
"Your vote is private, but it is not yet coercion-proof" → "private" is preceded by "Your vote
is " → returned as affirmative → `toEqual([])` fails; it is *also* caught by the second, blunt
assertion `expect(text).not.toMatch(/\b(private|secure)\b/i)`. "Nobody can see that a vote was
yours" contains **no** banned word and would slip past `affirmativeBannedWords` — this is the
guard's real blind spot — but it is caught by the second `it`, which asserts
`not.toContain('nobody can see that a vote was yours')` **and** positively requires "not
anonymous", "not receipt-free", "not coercion-resistant", "can see how you voted", "which party
you belong to", "not switched on yet". A revert to the retired body fails five of those. The
two `it`s together are a genuine guard; neither alone is.

**Could a future affirmative "anonymous" slip past?** Only via a contrived double negative
("not not anonymous") or a hyphenated compound ("not anonymous-adjacent"). Every natural
affirmative construction I tested is caught. The residual gap is that
`affirmativeBannedWords` cannot see a *false claim made without the banned vocabulary* — which
is precisely why the second `it`'s positive assertions on (a)/(b)/(c) matter, and they are
present. No finding.

The third `it` (`toContain(en.banner.notReceiptFreeTitle/Body)`) closes the "the test asserts a
string that isn't the shipped string" hole — the guard is pinned to the source of truth. Good
practice, worth keeping as a pattern.

### A.4 UT-0759 — four-path and aria-label

Matches the UT-0758 pattern exactly: absent prop → "Verified"; `unlinkable: false` →
"Verified"; `unlinkable: true` → "Verified — private"; malformed/partial (`{ onePersonOneVote:
false }`, no `unlinkable` field) → "Verified". Each v1 path also asserts
`queryByText('Verified — private')` is null, so the assertion cannot pass by substring
coincidence, and path 1 asserts the whole `status.textContent` carries no banned word. The
**aria-label follows the title** on both the v1 path (`toBe('Verified')`) and the v2 path
(`toBe('Verified — private')`) — the accessible name and the visible name cannot diverge, which
is the defect that would otherwise leave a screen-reader user hearing the retired claim.
UT-0751 and UT-0753 in the UT-0750 block are updated consistently. ✅

### A.5 Jargon filter and reading level

No banned vocabulary ("crypto", "token", "mint", "blockchain", "wallet", "gas fee", "seed
phrase", "private key") appears in the new `en.ts` strings — checked by inspection and
transitively by UT-0884, which scans `container.textContent` of the proposals surface where
`ReceiptFreedomBanner` is mounted (`ProposalsAndDebate.tsx:489`) and passes. Note the banned
list includes the substring "private key"; the new copy contains no "private" at all, so the
filter is clean by construction. Reading level: ISS-03 (Low).

### A.6 The §4a "Honesty copy matches DES verbatim" deviation — is the record adequate?

**Yes.** The §4a recorded deviation (a) names the exact string and file, (b) states the
precedence rule that justifies it (`FR-131` is normative over the SDD's copy table), (c) cites
the routing (Doc 09 v1.3.0 REL-LIM-18 / ISS-03) and the approver direction with its date
(2026-09-05), (d) confirms the **v2 row still matches verbatim** — which I verified against Doc
03 §10.12.3: the sub-table's v2 row is "Verified — private" and `VER_TITLE_V2` is exactly that
string — and (e) names the owed cascade and the interim record of intent (UT-0759). That is an
honest deviation record, not a quiet divergence: a reader learns what deviates, why, on whose
authority, and who owes the fix. The only shortfall is the cascade's scope (ISS-06, Low).

### A.7 Independent sweep of `packages/*/src` and `apps/web/src`

Grepped for `anonymous`, `\bprivate\b`, `secure`, `receipt.free`, `nobody can see`,
`coercion-proof`, `صوتك سري`. **Confirmed: no remaining string describes v1 voting behaviour in
violation of `FR-131`.** "صوتك سري" has zero hits. Every surviving hit classifies as:

| Class | Examples | Verdict |
|---|---|---|
| Solidity/JS visibility keyword | `Governor.sol:102,221,240,439…`, `Party.sol`, `PartyRegistry.sol`, `RegionRegistry.sol`, `PersonhoodRegistry.sol`, `VerifierRegistry.sol` | Not user-facing; out of scope |
| `IS_INSECURE_MOCK` / "insecure mock" identifiers and docs | `eligibility.js`, `ballot.js`, `party-creation.js`, `proofs.js`, `promotion-gate.mjs`, page comments | Developer-facing; "secure" only inside "insecure mock" |
| FR-082 Supporter-tier anonymity (not the ballot) | `sdk/src/proposals.js:233`, `protocol/src/proposals.js:23,67`, `ProposalsAndDebate.tsx:18` | Correct per FR-082; **two of these unlisted — ISS-01** |
| v2 / MACI-path references | `flags.js:43`, `Governor.sol:321`, `client.js:503,511`, `ballot.js:68`, `sdk/proposals.js:14,487` | Describes v2, not v1 |
| Negated or prohibitive v1 statements (this drop) | `Governor.sol:26-32`, `flags.js:44-47`, `client.js:457-459`, `ReceiptFreedomBanner.tsx:10-18`, `en.ts:400-407` | Compliant |
| `anon` state name / DES-094 copy | `PrivacyStatus.tsx:45,132,251` | The state's own label, not a v1 voting claim |
| Petition endorsement, not voting | `en.ts:50` "name kept private" (named + routed by §7 item 26), `ar.ts:53` "اسمك سريًا" (**unlisted — ISS-01**), `flags.js:54` `private_endorsement` (named) | Outside FR-131's "v1 voting behaviour"; routed as candidates |

So Doc 06 §7 item 26's **substantive** claim — "no further v1-voting claim" — is **confirmed**;
its **enumeration** of the non-voting residue is incomplete (ISS-01).

### A.8 Doc 06 accuracy

- **Change history v2.5.0:** every factual claim checked against the working tree and found
  accurate — the five sites, the pre-mount blocker, the clause-7 rule, the new UT IDs and their
  `it` counts (4/4/1), the UT-0751/UT-0753 updates, the suite delta 610 → 619, typecheck and
  dep-guard clean, and the §3 sub-total correction.
- **§3 inventory:** the 24 Count cells sum to exactly **619**, matching my measured run. Every
  prose addend verifies: web 16+27+27+1+18+2+4 = **95**; protocol 126+24+1 = **151** (and
  82+44 = 126); ui 14+4 = **18**; sdk 124+36+38+22+24 = **244**; indexer 16; contracts
  25+11+34+12+13 = **95**. Per-workspace figures match `npm test` one for one.
- **The self-correction is honest and unprompted:** "(Through v2.4.3 this sentence stated the
  web total as 89 while its own addends summed to 91 and `npm test` reported 91 — corrected at
  v2.5.0.)" I verified this: the table total 610 was right; only the prose sentence was wrong.
  Correcting a number nobody had challenged, and saying so in the document, is the behaviour
  this loop is meant to reward.
- **§7 item 18:** the claim that PrivacyStatus "is still mounted on no shipped surface" is
  **true at HEAD** — grep finds five explicit non-render comments and zero JSX usages outside
  `packages/ui`. The pre-mount blocker is correctly described as *cleared*, not as *moot*.
- **§7 item 26:** accurate on all four owed cascades — (a) architect/Doc 03 (verified: §10.12.3
  v1 sub-table row still reads "Verified — private" at line 1583 and the banned-words analysis
  at line 1587 still rules it COMPLIANT); (b) sre/Doc 09 (verified: REL-LIM-18 still reads
  "Open — routed to the engineer"); (c) tester/Docs 07–08 TC + RTM rows for the three new
  blocks (I acknowledge this as owed to my own role); (d) the DES-098 acknowledgement control,
  correctly identified as SCR-13 story scope rather than smuggled into a defect fix. Scope
  shortfall on (a): ISS-06.
- **§5.0** carries no v2.5.0 line — correct at review time; the owner adds it after this
  verdict. Not flagged, per the review brief.

### A.9 Scope

`git status --short` shows the eleven commissioned files (`ReceiptFreedomBanner.tsx`, `ar.ts`,
`en.ts`, `safety-surfaces.test.tsx`, `Governor.sol`, `flags.js`, `party-and-regions.test.js`,
`client.js`, `PrivacyStatus.tsx`, `PrivacyStatus.test.tsx`, `docs/06-coding-and-ut.md`) plus
`apps/web/tsconfig.tsbuildinfo` (ISS-04). **No application feature outside the commissioned fix
was shipped**; the whole product-code diff is comments, i18n strings, two title constants and
one ternary. The §4a "No out-of-scope feature" bar is met.

## 5. Routing instruction (to the owning role)

**PASS.** The owning role — **engineer, Samuel Oyelaran** — sets Doc 06 `Status: Approved`
(citing this report) and adds the v2.5.0 line to §5.0; the SOP advances. The six Lows do not
block and may be carried, but ISS-01, ISS-02 and ISS-06 are cheap to fix and each prevents a
future reader being misled by a register that is narrower than the fact it points at — the same
class of defect this drop was commissioned to close. If they are folded in, do so as a **patch
bump (v2.5.1)** with a re-review; if carried, list them in §5.0 as surviving Lows.

Downstream, now unblocked by this verdict:
- **tester (me), Docs 07/08** — `TC` rows for UT-0887, UT-0759 and UT-0888 and the `FR-131`
  RTM row (§7 item 26(c)). `FR-131` is a **Must** row and is currently open in the RTM; it
  cannot close at Gate 2 without them.
- **architect, Doc 03** — the §10.12.3 cascade (§7 item 26(a) + ISS-06).
- **sre, Doc 09** — move REL-LIM-18 to closed with the commit SHA (§7 item 26(b)).

## 6. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: PASS` at cycle 1 of 5.
