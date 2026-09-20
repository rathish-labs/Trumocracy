# Engineer session note — 2026-09-06T15:30 — Endorsement-copy honesty fix (FR-131 clause (e))

```
Role:    engineer (Samuel Oyelaran)
Branch:  build/v1-cascade-and-release-prep
Trigger: artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 (approver-confirmed
         2026-09-06, Rathish Kumar); Doc 02 v2.17.0 FR-131 clause (e), In Review.
Scope:   R-1, R-2, R-3, R-4 from DECISIONS §8. Doc 06 bumped 2.5.1 -> 2.6.0, Status: In Review.
```

## What I did

1. **R-1/R-2 — landing-page copy (en + ar, one change set):**
   - `apps/web/src/i18n/en.ts` `home.steps[1].body` — replaced "Support a new party with your
     name kept private..." with the DECISIONS §4.1 copy: "Backing a party is a public act, on
     purpose. Your name is not shown, but the backing goes on the public record, and our own
     records can link it to your account. Only back a party you are content to be seen
     supporting. When enough people in your area back it, the party starts. Nobody decides
     this. The count does."
   - `apps/web/src/i18n/ar.ts` mirror — replaced with the DECISIONS §4.2 Arabic draft (engineer
     working draft; native-speaker review owed, ARABIC-I18N, unchanged tracked deferral).
   - `en.ts` `home.promises[0]` — replaced "We never learn which party you support." with the
     DECISIONS §5.1 copy: "We never publish which party you belong to. In this version of the
     platform, our own records can see it, and we say so plainly rather than promise more."
   - `ar.ts` `home.promises[0]` mirror — replaced with the DECISIONS §5.2 Arabic draft.
   - Kept the file's string-concatenation style throughout; both locales landed together.

2. **R-4 — FR-082 strings reached by the approved clause (e):**
   - `packages/sdk/src/proposals.js` (~line 232), the user-facing
     `AUTHORSHIP_REQUIRES_WORKER_TIER` refusal message — replaced "...because authorship is
     public and Supporters are anonymous..." with "...because authorship is public and a
     Supporter's participation is never published. Worker tier is self-declared — no one
     approves it." (switched that one string literal to double-quoted concatenation to carry
     the apostrophe cleanly; rest of file untouched).
   - `apps/web/src/components/ProposalsAndDebate.tsx` header doc comment (~line 17) — paraphrase
     corrected to match ("a Supporter's participation is never published" instead of
     "Supporters are anonymous"). Confirmed no rendered UI copy in this component repeats the
     old claim (the actual worker-gate copy in en.ts was already honest).
   - `packages/protocol/src/proposals.js` (~23, ~67) — added the SHOULD "(FR-082 — Definition-B
     property; §16.3 DEFERRED-v2)" marker to both doc comments describing the requirement (not
     rewritten — DECISIONS §5.3 rules these are not overclaims, just need the marker).
   - `packages/sdk/src/ballot.js` and the `private_endorsement` flag description — left
     unchanged per DECISIONS §5.3 ("both stand"): they name v2/Phase-4 explicitly.
   - Confirmed no existing test asserts the old strings verbatim (grepped "kept private",
     "never learn", "Supporters are anonymous", Arabic equivalents across apps/ and packages/);
     `packages/protocol/test/proposals.test.js:78`'s `it()` description still says "Supporters
     are anonymous" but only as a test title, asserting no string — left it as-is, out of scope
     (not asked to touch tester-owned describe text and it doesn't fail).

3. **R-3 — regression guard UT-0889** (highest existing was UT-0888; minted UT-0889, did not
   need UT-0890): added to `apps/web/test/safety-surfaces.test.tsx`, new describe block
   `UT-0889 the landing page states the truth about backing a party, not a v2 privacy claim`,
   5 `it()`s:
   - `home.steps[1].body`: not "kept private"; contains "public act", "name is not shown",
     "our own records can link"; no "private"/"anonymous"/"receipt-free"/"secure".
   - `home.promises[0]`: not "never learn"; contains "never publish"; same banned-word check.
   - renders `HomePage` (`@/app/page`) via the file's existing `wrap()` helper (LocaleProvider +
     FlagProvider) and asserts the en source strings are what's on the DOM — confirmed
     `next/link` inside `HomePage` renders fine under vitest/jsdom with no router-context mock
     needed.
   - Arabic mirror: no "سريًا"/"سري" in the endorsement step, no "لا نعرف" in the promise.
   - sdk refusal message: builds a minimal `ProposalService` fixture (InMemoryPartyStore +
     PartyCreationService + InMemoryProposalStore, following the `proposals.test.tsx` fixture
     pattern already in this test dir), files a proposal as `PARTICIPATION_TIER.SUPPORTER`,
     asserts the thrown message no longer contains "Supporters are anonymous" and does contain
     "a Supporter's participation is never published".
   New imports added to the top of `safety-surfaces.test.tsx`: `HomePage` from `@/app/page`;
   `NON_VIOLENCE_CLAUSE`, `PARTICIPATION_TIER`, `petitionThreshold` from `@trumocracy/protocol`;
   `InMemoryPartyStore`, `PartyCreationService`, `InMemoryProposalStore`, `ProposalService` from
   `@trumocracy/sdk`.

4. **Doc 06** (`docs/06-coding-and-ut.md`) — bumped **2.5.1 -> 2.6.0, Status: In Review**
   (Edit tool only, file confirmed LF at HEAD, no line-ending churn introduced):
   - New top change-history entry citing DECISIONS §11 and Doc 02 v2.17.0 clause (e), listing
     every string changed and every file touched, the new UT-0889 guard, and what's explicitly
     NOT done this session (Doc 02's own review loop, Doc 07/08 rows, Doc 09/Doc 03 cascades,
     ARABIC-I18N, §7.1 enrolment ruling, DES-098 control).
   - §3 UT inventory: new `UT-0889` row (web, 5); Total row 619 -> **624**; web-total addend
     sentence corrected 95 -> 100 (+5 for UT-0889); "TC rows owed to the tester" sentence
     updated to name UT-0889 alongside the still-open UT-0887/UT-0759/UT-0888/FR-131 RTM row.
   - §4a: folded **ISS-C2-01** (cheap, one-line) — "the longest 17 words" corrected to "the
     longest 18 words" per the cycle-2 reviewer's own arithmetic
     (`06-coding-and-ut-v2.5.1-technical-cycle2.md`), with the sentence-length breakdown quoted
     inline so a later reader doesn't have to re-derive it.
   - §7 item 26: rewritten. Header changed from "...three non-voting strings are deliberately
     left in place" to "...the endorsement-copy and FR-082-refusal strings are fixed at v2.6.0
     under FR-131 clause (e)". The old "Left in place" paragraph (S-1/S-2/promises[0]/sdk
     message) is replaced with a "Fixed at this version" paragraph naming every change and its
     DECISIONS citation, a "Still stand, and why" paragraph for `protocol/proposals.js`
     markers, `ballot.js` and `private_endorsement` (clause (e) does not reach them — they name
     the phase explicitly / are requirement doc comments, not claims), and a restated "Still
     owed, unchanged by this fix" paragraph: (d) the DES-098 acknowledge-to-proceed control
     stays open under US-0134, and the §7.1 enrolment/verification copy question (not ruled) is
     named as untouched.
   - New **§7 item 27** (RESOLVED): folded **ISS-C2-02** — confirmed
     `apps/web/tsconfig.tsbuildinfo` is untracked (`git ls-files` returns nothing) and
     `.gitignore` carries `*.tsbuildinfo` — this landed on trunk at commit `84e2203` before this
     session started, so it's recorded here as resolved rather than owed.
   - Did NOT touch §5.0 (review-history log) — no v2.6.0 review report exists yet; that's the
     tester's/reviewer-qa's next step, not mine to pre-empt.

## Test / build results

- `npm test`: **624 passed, 0 failed** across 6 workspaces (was 619 at v2.5.1):
  contracts 95, protocol 151, sdk 244, ui 18, indexer 16, **web 100** (was 95; +5 = UT-0889).
- `npm run typecheck`: exits 0 (`packages/ui`, `apps/web`).
- `npm run lint:deps`: "7 workspace package(s) checked — layering OK".

## Decisions made

- Used double-quoted string literals for the one sdk message that needed an apostrophe
  ("a Supporter's participation"), rather than escaping `\'` inside the file's usual
  single-quoted style — no other apostrophe-in-string-literal precedent existed in that file to
  match against, and double-quoting is the less noisy option.
- Added the FR-082 marker to `packages/protocol/src/proposals.js` as a SHOULD, not a rewrite,
  per DECISIONS §5.3's explicit ruling that these two doc comments describe a requirement, not
  a user-facing claim, and are not overclaims.
- Did not touch `packages/protocol/test/proposals.test.js:78`'s `it()` title (still reads
  "...because authorship is public and Supporters are anonymous") because it is a test
  description string, asserts nothing about the message text, and is tester-owned; changing it
  was not in scope and doing so uninvited would be touching another role's document.
- Folded both carried Lows (ISS-C2-01, ISS-C2-02) into this version rather than carrying them
  again, since both were one-line, already-cheap fixes per the cycle-2 reviewer's own routing
  instruction, and ISS-C2-02's underlying work had, in fact, already landed on trunk.
- Left the Doc 06 §5.0 review-history log untouched — a v2.6.0 review report doesn't exist yet;
  that entry gets added when the review actually runs, not pre-emptively by the owning role.

## IDs touched

- **Minted:** `UT-0889` (web, `apps/web/test/safety-surfaces.test.tsx`).
- **Referenced, not minted:** `US-0134`, `FR-131` (clause (e)), `FR-082`, `FR-014`, `FR-015`,
  `DES-098`, `UT-0869` (pattern precedent), `UT-0887`/`UT-0759`/`UT-0888` (still-owed TC rows),
  `ISS-C2-01`/`ISS-C2-02` (folded).
- **No new `US-####` minted** — DECISIONS §5.5 explicitly places this work under the existing
  US-0134 story home.

## Files changed

- `apps/web/src/i18n/en.ts`
- `apps/web/src/i18n/ar.ts`
- `packages/sdk/src/proposals.js`
- `apps/web/src/components/ProposalsAndDebate.tsx`
- `packages/protocol/src/proposals.js`
- `apps/web/test/safety-surfaces.test.tsx`
- `docs/06-coding-and-ut.md`

## Open items (not mine to close)

- Doc 02 v2.17.0's own document-review loop (business mode, neutral reviewer — project-manager
  to assign, per DECISIONS R-6).
- Doc 07/08: TC rows for UT-0889, UT-0887, UT-0759, UT-0888; the FR-131 RTM row (tester).
- Doc 09 REL-LIM-18 row / Doc 03 §10.12.3 cascade (sre / architect — unchanged by this drop,
  named again in Doc 06 item 26(a)/(b)).
- ARABIC-I18N: native-speaker review of the two new Arabic strings before any Arabic-locale
  customer deployment (technical-writer, pre-Gate 2).
- §7.1 enrolment/verification copy question (`home.steps[0].body`, `home.promises[3]`) — not
  ruled, tracked Doc 02 §13 (j), non-blocking (product-owner, sre consulted).
- DES-098 acknowledge-to-proceed control (Doc 06 item 26(d)) — still unbuilt, SCR-13 story
  scope, unchanged by this session.

## Handoff

Per instructions, I did not self-appoint as reviewer and wrote no review report even though the
SubagentStop audit may show other documents (Doc 02 v2.17.0, Doc 01, Doc 04, Doc 07/08) In
Review mid-session — that is expected and out of my lane. Stopping here for reviewer-qa /
tester per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`.
