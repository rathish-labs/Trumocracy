# Document Review — Doc 06 Coding & UT v2.5.1 + the REL-LIM-18 code drop (technical, cycle 2)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never -->
<!-- edits the reviewed document or the code. Owning role: engineer (Samuel Oyelaran).      -->

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.5.1
Review mode: technical
Reviewer role: tester (neutral — engineer Samuel Oyelaran owns Doc 06 and the code)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 2
Cycle: 2 of 5
Verdict: PASS
```

Date: 2026-09-05

---

## 1. Summary (BLUF)

Cycle-2 rework review of Doc 06 v2.5.1 and the uncommitted REL-LIM-18 code drop it records.
v2.5.0 passed cycle 1 at 96% with six Lows; the engineer reworked **all six** rather than
carrying them. **Verdict: PASS (98%, 0C/0H/0M/2L).** I verified each of ISS-01..ISS-06
against the artefact it points at — not against the change history's description of it — and
**all six are genuinely closed**: the three residual sweep hits named in ISS-01 say in the
source exactly what §7 item 26 now says they say (`packages/protocol/src/proposals.js` lines
23 and 67, `packages/sdk/src/ballot.js:68` `choice` typedef, `ar.ts:53`
"بقاء اسمك سريًا"), and the Arabic landing string is routed with its English counterpart;
§7 item 17 now names the two `ar.ts` banner keys and requires native-speaker review **before**
any Arabic-locale customer deployment; the 27-word and 22-word banner sentences are split
(en **and** ar), UT-0887's assertions are unaffected and the jargon filter is still clean;
`apps/web/tsconfig.tsbuildinfo` is reverted and absent from `git status`; the
`PrivacyStatus.test.tsx` header reads `UT-0750..UT-0759` and describes the title four-path;
and §7 item 26(a) now names the Doc 03 §10.12.3 three-state `ver` **title** cell and its
v2.7.1 normative note, whose "informational reference copy" caveat is indeed scoped to the
*subtitle* only. **No regression:** I ran the suite myself — **619 tests, zero failures**
(contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95) — typecheck exit 0,
dep-guard "layering OK", all six v2.5.0 REL-LIM-18 fixes intact, and an independent sweep of
`packages/*/src` and `apps/web/src` finds no banned word describing v1 voting affirmatively.
The two new Lows are record-accuracy findings: §4a's reading-level statement is off by one
word (longest sentence is 18, not 17), and ISS-04's *hygiene* half (untrack + `.gitignore`)
is deferred to a chore commit recorded only in the change history, not in the §7 register.
Neither blocks the pass bar.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — PASS only when both rows above are all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 99 | 19.8 | `FR-131` (a), (b), (c) still stated verbatim at the rendered banner after the sentence split; clause (d) still correctly scoped out and owed (§7 item 26(d)) |
| T2 Soundness | 20 | 99 | 19.8 | The ISS-03 split changed sentence boundaries only — no claim was weakened, added or dropped; the fail-honest title rule and FR-over-SDD precedence are unchanged |
| T3 Traceability & IDs | 20 | 99 | 19.8 | ISS-06 closed: the SDD cascade now names the three-state table title cell and its note. §3 totals re-verified by arithmetic **and** by `npm test`: 619. No ID reuse; no new IDs minted at v2.5.1 |
| T4 Security & failure modes | 15 | 99 | 14.85 | No regression: all six REL-LIM-18 fixes intact, UT-0887/UT-0759/UT-0888 green, banned-word sweep clean. ISS-02's closure raises the Arabic coercion-warning risk from a change-history aside to a normative §7 pre-deployment condition |
| T5 Completeness & testability | 15 | 96 | 14.4 | ISS-01, ISS-02, ISS-05 closed and verified at source. ISS-C2-02 |
| T6 Convention compliance | 10 | 95 | 9.5 | Header, semver, ISO dates, §5.0 review history and §4a deviation records all correct. ISS-C2-01 |
| **Total** | **100** | — | **98%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | Low | T6 | Doc 06 §4a, "Reading level of the new vote-surface banner (v2.5.1, §2.2 / NFR-023)" — "eight sentences, the longest 17 words" | "Eight sentences" is correct; "the longest 17 words" is off by one. Counted mechanically from `apps/web/src/i18n/en.ts` after concatenation, the eight sentences are 8 / 10 / 14 / 9 / **18** / 17 / 6 / 11 words (93 total). The longest is sentence 5 — "But the record exists, and it could be shown if somebody pressures you to prove how you voted." (18 words); the 17-word sentence is number 6. The engineer appears to have measured the *second*-longest. The ISS-03 substance is unaffected (both over-long sentences genuinely split; max down from 27 to 18), but §4a is the record a later reader will trust for the NFR-023 bar, and it currently understates the figure it exists to disclose | Correct "the longest 17 words" to "the longest 18 words" in §4a (or state the distribution). No copy change is required — 18 words is within the split's intent |
| ISS-C2-02 | Low | T5 | Doc 06 change history v2.5.1 (ISS-04 clause) vs §7 (limitations register); `.gitignore` (no `*.tsbuildinfo` entry); `git ls-files apps/web/tsconfig.tsbuildinfo` (still tracked) | ISS-04 asked for three things: revert the file, keep it out of this commit, **and** untrack it with `*.tsbuildinfo` ignored. The first two are done and verified (`git status --short` lists the twelve working files without it). The third is deferred to a separate `chore(infra)` commit and is recorded **only in the change history** — a chronological log — not in §7, the canonical register of what this drop leaves owed. The file is still tracked and `.gitignore` still has no entry, so every `npm run typecheck` (a §4a-mandated bar) will re-dirty it; if the chore commit slips, nothing in the register tracks it. This is exactly the registry-hygiene class ISS-02 was raised on. (I re-dirtied it myself by running typecheck and reverted it; that side-effect is not counted here) | Add a one-line §7 item — or a clause on an existing item — recording the tracked `apps/web/tsconfig.tsbuildinfo` and the owed `chore(infra)` untrack + `*.tsbuildinfo` ignore, so the owed work lives in the register and not only in the log |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

---

## 5. Cycle-1 issue closure (ISS-01..ISS-06)

| ID | Cycle-1 finding (abridged) | Status | Evidence I verified |
|----|-----------------------------|--------|---------------------|
| ISS-01 | §7 item 26's "left in place" list omitted three residual sweep hits | **CLOSED — verified** | §7 item 26 now reads: "`packages/protocol/src/proposals.js` (lines ~23 and ~67) repeats the FR-082 'a Supporter is anonymous' property — the protocol twin of the sdk hit; `packages/sdk/src/ballot.js` (`choice` typedef) says the field is 'absent in v2 for receipt-freeness' — a v2 property, not a v1 claim". Checked at source: `proposals.js:23` = "public (FR-090) and a Supporter is anonymous unconditionally (FR-082), so a Supporter"; `proposals.js:67` = "Supporter is excluded because authorship is public and Supporters are anonymous"; `ballot.js:68` = "@property {string} [choice] - The choice made (v1 only; absent in v2 for receipt-freeness)." Both line references and both quotations are accurate. The Arabic mirror is named **and routed**: "…is routed to the product-owner as a candidate — together with its Arabic mirror in `ar.ts` ('بقاء اسمك سريًا', your name kept secret), since the two must be decided together"; `ar.ts:53` reads `'ادعم حزبًا جديدًا مع بقاء اسمك سريًا. …'` — exact string match, and its English counterpart `en.ts:50` ("Support a new party with your name kept private") remains named in the same clause. Closing sentence added: "(v2.5.1: the three sites the v2.5.0 cycle-1 review found missing from this list — ISS-01 — are …)" |
| ISS-02 | §7 item 17 was scoped to party-creation Arabic and did not cover the new vote-surface banner strings | **CLOSED — verified** | Item 17's heading is rewritten to "Arabic strings are a working-draft engineer translation — **including the vote-surface coercion warning**", the body names "the vote-surface safety copy `banner.notReceiptFreeTitle` / `banner.notReceiptFreeBody`", and adds: "**(v2.5.1)** The banner strings MUST have a native-speaker review **before any Arabic-locale customer deployment**: a mistranslated coercion warning is a safety defect, not a polish item." It also correctly bounds what the test guards: "UT-0887 guards their substance …, not their fluency" — which matches the test (it asserts absence of the retired claim and presence of the platform-can-see statement, not translation quality) |
| ISS-03 | The new en banner body carried a 27-word and a 22-word sentence; the record was silent on the reading-level bar | **CLOSED — verified** (record off by one — ISS-C2-01) | Both sentences are split. Mechanical count of the concatenated `en.notReceiptFreeBody`: **8 sentences**, 93 words, lengths 8/10/14/9/18/17/6/11 — the 27-word sentence is now "Nobody outside Trumocracy sees this on any public page." (9) + "But the record exists, and it could be shown if somebody pressures you to prove how you voted." (18); the 22-word sentence is now "A ballot that hides how you voted even from Trumocracy is coming in a later privacy upgrade." (17) + "It is not switched on yet." (6). `ar.ts` is mirrored to the same 8 sentences (the split lands at "…في أي صفحة عامة. لكن السجل موجود…" and "…ترقية الخصوصية لاحقًا. وهي غير مُفعَّلة بعد."). §4a carries the new "Reading level of the new vote-surface banner (v2.5.1, §2.2 / NFR-023)" paragraph. **UT-0887 still holds** — all four `it`s pass in my run; its assertions are substring-based (`'not anonymous'`, `'not receipt-free'`, `'not coercion-resistant'`, `'can see how you voted'`, `'which party you belong to'`, `'not switched on yet'`) and each survives the new sentence boundaries; the third `it` pins to `en.banner.*` so it self-adjusts. **Jargon filter still clean** — no "crypto/token/mint/blockchain/wallet/gas fee/seed phrase/private key" in the new strings, and the copy still contains no "private" at all; UT-0884 (proposals surface scan, where the banner mounts) passes |
| ISS-04 | `apps/web/tsconfig.tsbuildinfo` (tracked) dirtied by the mandated typecheck, making a twelfth file in the drop | **CLOSED — verified (drop scope)**; hygiene half deferred → ISS-C2-02 | `git status --short` on entry listed exactly twelve paths — the eleven commissioned files plus `artifacts/memory-index.json` — and **not** `apps/web/tsconfig.tsbuildinfo`. The file is reverted in the working tree, so the drop's diff is the commissioned set. The untrack + `.gitignore` entry is stated in the change history as a separate `chore(infra)` commit and has not landed (`git ls-files` still returns the path; `.gitignore` has no `*.tsbuildinfo`) — recorded as ISS-C2-02, not as a failure of ISS-04. I re-dirtied the file myself by running the mandated typecheck and reverted it before finishing |
| ISS-05 | `PrivacyStatus.test.tsx` header docblock read "UT-0750..UT-0758" and described only the subtitle four-path | **CLOSED — verified** | Header line 2 now reads "UT-0750..UT-0759 — PrivacyStatus component (DES-094 v2.7.1)." and a new block was added: "UT-0759 covers the same four paths for the `ver` TITLE (FR-131; Doc 09 v1.3.0 REL-LIM-18 pre-mount blocker): 'Verified' is the v1 fail-honest default; 'Verified — private' renders only when unlinkable: true." The pre-existing UT-0758 subtitle four-path enumeration is retained above it, so both paths are described side by side as required. The `Traces:` line already carried FR-131 |
| ISS-06 | §7 item 26(a) named the backing-aware sub-table but not the §10.12.3 three-state reference table's `ver` title cell or its v2.7.1 normative note | **CLOSED — verified** | Item 26(a) now adds: "**(v2.5.1)** the §10.12.3 three-state reference table's `ver` title cell ('Verified — private') and its v2.7.1 normative note, which scopes the 'informational reference copy' caveat to the `ver` *subtitle* only and so now under-covers the title — an engineer taking that row as the title spec would hardcode the v2 claim, the exact failure the note exists to prevent." Verified against Doc 03: line 1575 is the three-state table row `` | `ver` | `privacy ver` | … | "Verified — private" | … ``, and the normative note above it says "The `ver` row preserves the v2 reference **subtitle** annotated …", "… the normative implementation spec for the `ver` **subtitle**", and "… will produce an incorrect hardcoded v2 **subtitle**". The characterisation is exact — the note is subtitle-scoped in all three places. The pre-existing (a) items (v1 sub-table row title, the banned-words analysis at line 1587, and the §13 "Public tallies in Phase 1" mitigation at line 2739) are still named and each still says what item 26 says it says |

**Net:** 6 of 6 closed; 2 new Lows (ISS-C2-01, ISS-C2-02); 0 issues carried.

---

## Appendix A — Evidence (what I verified, and how)

### A.1 Regression run (executed by me, not taken on trust)

`npm test` at `d:/Projects/Trumocracy`, working tree at v2.5.1:

| Workspace | Tests | Result |
|---|---|---|
| `@trumocracy/contracts` | 95 | pass (5 files) |
| `@trumocracy/protocol` | 151 | pass (4 files) |
| `@trumocracy/sdk` | 244 | pass (12 files) |
| `@trumocracy/ui` | 18 | pass (1 file) |
| `@trumocracy/indexer` | 16 | pass (1 file) |
| `@trumocracy/web` | 95 | pass (5 files) |
| **Total** | **619** | **zero failures** |

95 + 151 + 244 + 18 + 16 + 95 = **619** — identical to v2.5.0 and to Doc 06 §3's Total row,
so the change history's "the suite is unchanged at 619" is accurate. `npm run typecheck`
exits 0 (`packages/ui`, `apps/web`, `tsc --noEmit`). `npm run lint:deps` prints
"dep-guard: 7 workspace package(s) checked — layering OK", exit 0. The three affected files
are green in place: `safety-surfaces.test.tsx` 20/20 (includes UT-0887's four),
`PrivacyStatus.test.tsx` 18/18 (includes UT-0759's four), `party-and-regions.test.js` inside
protocol's 151 (includes UT-0888).

### A.2 The six v2.5.0 REL-LIM-18 fixes are intact

Re-read every site in the working tree; none was disturbed by the v2.5.1 rework.

1. **`packages/protocol/src/flags.js`** — "Until this is on, a vote is cast through
   conventional authentication: it is NOT anonymous, NOT receipt-free and NOT
   coercion-resistant, and the platform database CAN see vote direction. … The normative
   wording is FR-131 (Doc 02 §4.45), not this string." ✅
2. **`packages/contracts/src/core/Governor.sol`** (lines 25–32) — both retired sentences still
   replaced; states (a) and (b), keeps the Phase-3/MACI path for (c), retains the prohibition
   "Do not describe a v1 vote as anonymous, private, receipt-free or secure anywhere in this
   contract's documentation." ✅
3. **`apps/web/src/i18n/en.ts` / `ar.ts` banner** — title unchanged from v2.5.0 ("In this
   version, your vote is not anonymous and not coercion-proof"); body re-sentenced only.
   FR-131 (a) "This version signs you in the ordinary way. Your vote is not anonymous, not
   receipt-free and not coercion-resistant."; (b) "Trumocracy's own records can see how you
   voted and which party you belong to."; (c) "A ballot that hides how you voted even from
   Trumocracy is coming in a later privacy upgrade. It is not switched on yet." Banned words
   appear only immediately negated; "private" and "secure" do not appear at all. Retired
   claims "Your vote is private" and "Nobody can see that a vote was yours" absent. Arabic
   mirror preserves each clause; the retired "صوتك سري" has zero hits in `ar.ts`. ✅
4. **`packages/sdk/src/client.js` `#tenureSignals`** — still scopes the true statement to the
   signal array and severs the false inference: "That is a property of the signal array, not
   of v1 voting… Do not describe a v1 vote as anonymous." ✅
5. **`apps/web/src/components/ReceiptFreedomBanner.tsx`** — doc comment still cites FR-131 as
   normative, enumerates (a)/(b)/(c), records the retired SDD §13 line with its decision
   record, and keeps "Do not copy warning text out of this file into any document; cite
   FR-131." ✅
6. **`packages/ui/src/PrivacyStatus.tsx`** — `VER_TITLE_V1 = 'Verified'` as the fail-honest
   default, `VER_TITLE_V2 = 'Verified — private'` only on `backingProperties?.unlinkable ===
   true`, `title` computed by the same clause-7 predicate as `subtitle`, and `aria-label={title}`
   (not `cfg.title`), so the accessible name cannot diverge from the visible one. ✅

### A.3 Independent banned-word sweep (regression check)

Grepped `packages/*/src`, `apps/web/src` and `services/*/src` for `anonymous`, `\bprivate\b`,
`receipt-free`, `secure`. **No string describes v1 voting behaviour affirmatively.** Every
surviving hit classifies as one of: a Solidity visibility keyword (`Governor.sol:221,240`,
`PartyRegistry.sol:402`); an `IS_INSECURE_MOCK` identifier; the FR-082 Supporter-tier property
(`protocol/src/proposals.js:23,67`, `sdk/src/proposals.js:233`, `ProposalsAndDebate.tsx:18` —
all four now named in §7 item 26); a v2/MACI-path reference (`flags.js:43`, `Governor.sol:321`,
`client.js:511`, `ballot.js:68`, `sdk/proposals.js:14,487`); a negated or prohibitive v1
statement from this drop (`Governor.sol:26-32`, `flags.js:44-47`, `client.js:457-459`,
`ReceiptFreedomBanner.tsx:7-16`, `en.ts:400-403`); the `anon` state's own label
(`PrivacyStatus.tsx:132,251`) or the `VER_TITLE_V2` constant and its comments
(`PrivacyStatus.tsx:198,209,212,322`), which render only against declared ZK backing; a
developer-internal use of "private state" (`sdk/party-creation.js:304,751`) or "Private
browsing" (`LocaleProvider.tsx:35`); or the petition-endorsement landing copy
(`en.ts:50` / `ar.ts:53`), which is named and routed by §7 item 26. **No finding.** I did not
raise the developer-internal and browser-mode uses as a §7 omission: item 26's list is
expressly scoped to claim-shaped strings "outside FR-131's 'v1 voting behaviour'", and these
are identifiers and platform terminology, not claims — cycle 1 classed them the same way.

### A.4 Doc 06 internal consistency at v2.5.1

- **Header:** `Version: 2.5.1`, `Status: In Review`, `Last updated: 2026-09-05`, owner
  unchanged. Correct for a version under review. ✅
- **Change history v2.5.1 entry** sits at the top, dated 2026-09-05, cites the cycle-1 report
  by filename with its verdict "(PASS 96%, 0C/0H/0M/6L — all six reworked rather than carried,
  as at v2.4.1)", and describes each of the six fixes. I checked every factual claim in it
  against the artefacts: all accurate, with the single exception of the reading-level figure
  it defers to §4a (ISS-C2-01). The claims "no assertion of UT-0887 changed" and "the suite is
  unchanged at 619" both hold — the assertion set matches the one quoted in the cycle-1 report
  verbatim, and my run reports 619.
- **§5.0 review history** now leads with: "v2.5.0 cycle 1: `artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md`
  — PASS (96%, 0C/0H/0M/6L, reviewer: tester). All six Lows reworked into v2.5.1 rather than
  carried (ISS-01 sweep enumeration, ISS-02 §7 item 17 scope, ISS-03 banner sentence length,
  ISS-04 tracked tsbuildinfo, ISS-05 test header, ISS-06 SDD cascade scope)." Score, severity
  counts, reviewer role, filename and per-issue summary all match the cycle-1 report. ✅
- **§3 inventory:** Total row **619**, unchanged from v2.5.0 and equal to my measured run.
  The 24 Count cells still sum to 619; the prose addends still verify (web 16+27+27+1+18+2+4 =
  95; protocol 126+24+1 = 151; ui 14+4 = 18; sdk 124+36+38+22+24 = 244; indexer 16; contracts
  25+11+34+12+13 = 95). No `UT-####` minted, renumbered or reused at v2.5.1. ✅
- **§4a** carries both recorded paragraphs after the bar table — the v2.5.0 DES-verbatim
  deviation (unchanged and still accurate: the §10.12.3 v2 row is "Verified — private" and
  `VER_TITLE_V2` is exactly that string) and the new v2.5.1 reading-level statement
  (accurate on sentence count and jargon filter; off by one on the longest sentence —
  ISS-C2-01). ✅
- **§7 item 18** still correctly states the pre-mount blocker is *cleared*, not moot, and that
  the component is mounted on no shipped surface — still true at this tree (no JSX usage of
  `PrivacyStatus` outside `packages/ui`). ✅
- **Semver:** a patch bump for a documentation-and-copy rework with no behaviour change and no
  suite delta is the correct increment, and matches the v2.4.1 precedent this entry cites. ✅

### A.5 Scope of the drop

`git status --short` on entry: the eleven commissioned files
(`ReceiptFreedomBanner.tsx`, `ar.ts`, `en.ts`, `safety-surfaces.test.tsx`, `Governor.sol`,
`flags.js`, `party-and-regions.test.js`, `client.js`, `PrivacyStatus.tsx`,
`PrivacyStatus.test.tsx`, `docs/06-coding-and-ut.md`) plus `artifacts/memory-index.json`.
`apps/web/tsconfig.tsbuildinfo` is **gone** from the list (ISS-04). The v2.5.1 product-code
delta over v2.5.0 is confined to two i18n string literals; no test assertion, component,
service or contract changed. The §4a "No out-of-scope feature" bar is met.

## 5. Routing instruction (to the owning role)

**PASS.** The owning role — **engineer, Samuel Oyelaran** — sets Doc 06
`Status: Approved — 06-coding-and-ut-v2.5.1-technical-cycle2.md (PASS 98%, 0C/0H/0M/2L)`
citing this report, and adds the v2.5.1 cycle-2 line to §5.0. The SOP advances.

The two Lows do not block and may be carried. Both are one-line edits; if folded in, do so as
a **v2.5.2 patch bump** with a re-review, otherwise list them in §5.0 as surviving Lows so the
next reader inherits them:

- **ISS-C2-01** — §4a: "the longest 17 words" → "the longest 18 words".
- **ISS-C2-02** — §7: record the tracked `apps/web/tsconfig.tsbuildinfo` and the owed
  `chore(infra)` untrack + `*.tsbuildinfo` ignore in the register, not only in the log.

Downstream, unblocked (unchanged from cycle 1, all still owed):

- **tester (me), Docs 07/08** — `TC` rows for UT-0887, UT-0759 and UT-0888 and the `FR-131`
  RTM row (§7 item 26(c)). `FR-131` is a **Must** row and is open in the RTM; it cannot close
  at Gate 2 without them.
- **architect, Doc 03** — the §10.12.3 cascade: the backing-aware v1 sub-table row title, the
  FR-131 banned-words analysis note, the three-state table `ver` title cell and its v2.7.1
  normative note (ISS-06), and the §13 "Public tallies in Phase 1" mitigation line (2739).
- **sre, Doc 09** — move REL-LIM-18 to closed with the commit SHA (§7 item 26(b)).
- **product-owner** — decide the `en.ts:50` / `ar.ts:53` petition-endorsement landing pair
  together (§7 item 26).

## 6. Human decision at the cap (ESCALATED only)

Not applicable — `Verdict: PASS` at cycle 2 of 5.
