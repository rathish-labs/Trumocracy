# Doc 09 v1.6.0 — anchored FIND/REPLACE spec: rework cycle 2

```
Spec ID:       SPEC-09-v1.6.0-CYCLE2
Author:        Chen Wei — Reliability Lead (sre)
Target:        docs/09-release-notes.md   (v1.5.0 In Review  ->  v1.6.0 In Review)
Date:          2026-09-06
Against:       artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md
               (business, cycle 1 - FAIL 93%, 0C/0H/3M/2L; reviewer: tester, neutral)
Closes:        ISS-01, ISS-02, ISS-03 (all Medium) + ISS-L2 (Low). ISS-L1 carried, non-gating.
Ops:           14
```

**Applier note.** Apply the ops in order. Every FIND block below was extracted **mechanically**
from the CURRENT `docs/09-release-notes.md` (which contains the v1.5.0 text) — sliced out by
line number, not retyped — and each was checked with an exact, non-regex substring count over
the whole file: all 14 returned **1**. Fences are four backticks. If any FIND fails to match
exactly once, write nothing and report the failing op number.

**What this spec does NOT do.** It does not re-litigate or weaken the `REL-LIM-18` closure —
the cycle-1 review verified that narrative against source and found no false claim. It does not
touch Docs 03, 04, 07, 08 or the memory index. The release verdict (**HALTED, Gate 2 not
approved**) is unchanged, and the fix remains **merged to trunk and deployed nowhere**.

---

### OP 1 — docs/09-release-notes.md — version bump 1.5.0 → 1.6.0 and Status rewritten for rework cycle 2. NAMED REPLACEMENT: the v1.5.0 status paragraph is replaced by a v1.6.0 one that states plainly this version carries NO passing report, keeps the v1.4.0 PASS 97% fact scoped to v1.4.0, keeps the carried REF-## Low, and keeps the HALTED / deployed-nowhere posture. `Last updated:` is already 2026-09-06 and is not touched by any op.
FIND:
````
Version:       1.5.0            (document version; SemVer)
Release:       0.1.0            (Phase-1 walking skeleton, public testnet)
Status:        In Review — v1.5.0, the `REL-LIM-18` closure pass (2026-09-06). The predecessor
               version v1.4.0 was Approved on 09-release-notes-v1.4.0-business-cycle4.md
               (PASS 97%, 0C/0H/0M/2L; reviewer: tester, neutral, PM-assigned), which closed the
               document-review loop INSIDE the 5-cycle cap at cycle 4: 77% → 89% → 94% → 97%.
               Two Lows survived and were accepted on that version: the unresolvable `REF-##`
               citations (PM-accepted across all four cycles, still owed by the sre at the next
               Operate cycle) and the §0 staleness fixed in that same edit. **No document-review
               PASS on this document is a Gate-2 sign-off, and none is a release authorisation.
               This document's own verdict on release 0.1.0 remains HALTED (§0, §7), and the code
               fix this version records is merged to trunk and deployed nowhere.**
````
REPLACE WITH:
````
Version:       1.6.0            (document version; SemVer)
Release:       0.1.0            (Phase-1 walking skeleton, public testnet)
Status:        In Review — v1.6.0, rework cycle 2 against
               artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md (business, cycle 1 —
               **FAIL 93%, 0 Critical / 0 High / 3 Medium / 2 Low**; reviewer: tester, neutral,
               PM-assigned). **This version carries no passing report; cycle 2 is pending.** The
               predecessor v1.4.0 closed its own loop at PASS 97% on cycle 4 (77% → 89% → 94% →
               97%) — a fact about v1.4.0, not about the current version. Carried Low: the
               unresolvable `REF-##` citations (PM-accepted across five cycles, still owed by the
               sre at the next Operate cycle). **No document-review PASS on this document is a
               Gate-2 sign-off, and none is a release authorisation. This document's own verdict
               on release 0.1.0 remains HALTED (§0, §7), and the code fix v1.5.0 records is
               merged to trunk and deployed nowhere.**
````

### OP 2 — docs/09-release-notes.md — insert the NEW v1.6.0 document-history entry immediately ahead of the v1.5.0 entry. Pure insertion — the three consumed lines are re-emitted unchanged around it.
FIND:
````
> Customer-facing section is plain language; the internal record carries the facts and traceability.
>
> **Document history — v1.5.0 (2026-09-06).** `REL-LIM-18` closure pass — a **state change in the
````
REPLACE WITH:
````
> Customer-facing section is plain language; the internal record carries the facts and traceability.
>
> **Document history — v1.6.0 (2026-09-06).** Rework cycle 2 against
> `artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md` (business, cycle 1 — **FAIL 93%,
> 0 Critical / 0 High / 3 Medium / 2 Low**; reviewer: tester, neutral, PM-assigned). The review
> verified every substantive claim v1.5.0 makes about the `REL-LIM-18` fix against source — the
> commit, all six sites, every post-fix line pin, the three regression guards, the 619-green suite,
> the still-unmounted component, the `FR-131` word ban, the halt, and the verbatim
> annotate-don't-delete treatment of the register row — and found **no false claim about the fix**
> and **no transcription residue**. **Nothing in the closure narrative is re-litigated or weakened
> here.**
>
> What failed was a fourth instance of this document's oldest defect: **a sentence claiming a sweep
> or a record is complete, sitting above rows that are correct but not exhaustive.** All three
> Mediums are that class, and all three are **authoring** omissions — none of the eleven ops in
> `artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md` touched the affected lines, and the
> transcription was clean. Closed here:
>
> - **`ISS-01` (Medium) — a false statement inside a Gate-2 precondition cell.** §0's
>   `document-review` row still said this document "now carries one for its **current version**",
>   citing the v1.4.0 report; the version bump to 1.5.0 had already falsified it. The cell now
>   states the true loop position (v1.5.0 FAIL 93% at cycle 1; v1.6.0 cycle 2 pending) and, rather
>   than the stale roll-up "Docs 01–08, 13 and 14 each carry a passing report", **enumerates** the
>   current audit: four documents (03, 04, 07, 08) carry cycle-1 reports that **failed the bar**
>   and Docs 10–12 carry none at all. The verdict hardens from "Partially met"
>   to **Not met**.
> - **`ISS-02` (Medium) — the Doc 06 re-pin reached two of three sites.** The §Links table still
>   pinned Doc 06 at v2.4.3 while §0 and the internal record said v2.5.1 — the same document
>   asserting two current versions of another. Re-pinned, **and** the v1.5.0 change note that
>   claimed "two stale facts corrected in passing" is annotated in place to say there was a third.
>   Since the Links table was already being corrected, its **Doc 07 and Doc 08 pins were checked
>   too** and were stale by the same class (v2.4.4/v2.7.0 Approved → v2.5.0/v2.8.0 In Review).
> - **`ISS-03` (Medium) — the Changelog claimed completeness while omitting the commit this
>   document exists to record**, and it turned out to be worse than the review found. The section
>   said it was cut at `HEAD (e039ff2, 2026-09-01)` and was "complete as of `HEAD`". Re-derived
>   with `git merge-base --is-ancestor` on every listed commit: `HEAD` is **`84e2203`**; `e039ff2`
>   **is not on `main` at all**; `c04b4f2` and `31b6df9` are **branch-side commits**, not on `main`;
>   and **two** commits were missing, not one — `1c589c8` (PR #18) as well as `84e2203` (PR #19).
>   The cause is that this repository **squash-merges** PRs, so `0a5c542` — cited throughout this
>   document — is a branch-side commit whose content is on `main` as `84e2203`. The preamble now
>   states that convention, every branch-side row is labelled, the two missing rows are added, and
>   the completeness sentence is replaced by an exact statement of scope with the command that
>   re-derives it.
> - **`ISS-L2` (Low, fixed — it was cheap).** The post-fix pin
>   `ReceiptFreedomBanner.tsx:3-17` under-covered by one line; the "do not copy warning text"
>   instruction the customer-facing bullet depends on is at `:18`. Widened to `:3-18`.
> - **Topology correction, found by this version's own sweep and not raised by the review.** v1.5.0
>   called `84e2203` a "**merge commit**" in two places. It has a single parent and is a squash
>   commit. Corrected in the register row and annotated in the v1.5.0 history entry.
>
> **`ISS-L1` (Low) is carried, not fixed:** the `REF-02` and `REF-04`…`REF-10` citations still do
> not resolve — `docs/refine-log.md` remains the unfilled template with zero `REF-` entries. It has
> been PM-accepted across five cycles and is owed by the sre at the next Operate cycle. It is
> **not** a production-learning gap created by this work: no `REF-##` was opened for `REL-LIM-18`
> because it was a pre-release honesty defect caught by document review, not a production signal.
>
> **On method, since the failing class is now four-for-four.** Every sentence in this document that
> asserts a sweep, a record or a set is *complete* was located and re-tested against the thing it
> claims to summarise — including the three the review did not raise. Where a roll-up could not be
> re-derived on demand, it has been replaced by an enumeration plus the command that reproduces it
> (`node hooks/run_gates.cjs --audit` for the review state, `git log --no-merges e039ff2..HEAD --
> packages apps` and `git merge-base --is-ancestor` for the changelog). That is the only defence
> against this class that has worked in this document's history.
>
> **A live demonstration of why, recorded because it happened during this rework.** The §0
> enumeration was first written when Docs 07 and 08 had *no* cycle-1 report; within the same
> session all four blocked documents acquired one, and all four **failed** (Doc 03 89%, Doc 04
> 89%, Doc 07 92%, Doc 08 85%). Re-running the audit before publishing caught it — a roll-up
> would not have. Cross-document state in this repository moves faster than a document version
> does, which is why the row carries its as-of date **and** the command that re-derives it.
>
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). The `REL-LIM-18`
> closure stands, and the fix remains **merged to trunk and deployed nowhere**. Authored by the sre
> as an anchored FIND/REPLACE spec (`artifacts/sre-2026-09-06T1500-doc09-cycle2-spec.md`).
>
> **Document history — v1.5.0 (2026-09-06).** `REL-LIM-18` closure pass — a **state change in the
````

### OP 3 — docs/09-release-notes.md — v1.5.0 history entry: correct the topology error in place. NAMED CHANGE: "merged to `main` in PR #19 (merge commit `84e2203`)" becomes an accurate statement — PR #19 was squash-merged, `0a5c542` is branch-side and not an ancestor of `main`, and `84e2203` has a single parent. The original wording is quoted inside the correction, not silently dropped.
FIND:
````
> truth in code, closing REL-LIM-18 (US-0134)"), merged to `main` in PR #19 (merge commit
> `84e2203`); Doc 06 is Approved at v2.5.1
````
REPLACE WITH:
````
> truth in code, closing REL-LIM-18 (US-0134)"), which reached `main` through PR #19. *(v1.6.0
> correction: PR #19 was **squash-merged**. `0a5c542` is a branch-side authoring commit and is
> **not** an ancestor of `main`; the commit on `main` is `84e2203`, which has a single parent —
> v1.5.0 called it a "merge commit", and it is a squash commit. See the Changelog preamble.)*
> Doc 06 is Approved at v2.5.1
````

### OP 4 — docs/09-release-notes.md — v1.5.0 history entry, the "Two stale facts corrected in passing" bullet: annotate in place that the claim was not exhaustive — a third site (§Links) carried the same Doc 06 v2.4.3 pin. The original bullet is kept verbatim and the correction is appended (ISS-02 root cause).
FIND:
````
> - **Two stale facts corrected in passing**, both falsified by the same commit: the §0 gate-status
>   table and the internal record still pinned Doc 06 at v2.4.3 (now v2.5.1), and the internal
>   record's "Document version" cell had been stuck at 1.2.0 since that version.
````
REPLACE WITH:
````
> - **Two stale facts corrected in passing**, both falsified by the same commit: the §0 gate-status
>   table and the internal record still pinned Doc 06 at v2.4.3 (now v2.5.1), and the internal
>   record's "Document version" cell had been stuck at 1.2.0 since that version. *(v1.6.0
>   correction — this bullet was wrong to imply the Doc 06 sweep was exhaustive. A **third** site,
>   the §Links table, carried the same v2.4.3 pin and v1.5.0 never reached it; cycle 1 caught it as
>   `ISS-02`. The sites are enumerated in the v1.6.0 entry rather than rolled up.)*
````

### OP 5 — docs/09-release-notes.md — §0 gate-status, RTM row: re-pin Doc 08 v2.7.0 Approved → v2.8.0 In Review (cycle 1 FAILED at 85%) and record that the 138 / 16 / 122 figures were independently re-derived on 2026-09-06 and are unchanged. The verdict "Not met" does not change.
FIND:
````
| RTM (Doc 08) zero gaps in Must rows | **Not met** — `docs/08-traceability-matrix.md` now exists at **v2.7.0, Approved**, and records **138 Must rows: 16 COMPLETE, 122 OPEN** (Doc 08 §3.1 and gap log). The check that could not be performed at the first readiness pass now can be, and it **fails** |
````
REPLACE WITH:
````
| RTM (Doc 08) zero gaps in Must rows | **Not met** — `docs/08-traceability-matrix.md` is at **v2.8.0, `Status: In Review`** on 2026-09-06 (cycle 1 **FAILED** — `08-traceability-matrix-v2.8.0-technical-cycle1.md`, 85%, 0C/2H/3M/3L, rework owed by the tester; last **Approved** at v2.7.0, which this row pinned until now — v2.8.0 adds the `FR-131` honesty-drop traceability), and records **138 Must rows: 16 COMPLETE, 122 OPEN** (Doc 08 §3.1 and gap log) — figures re-derived independently on 2026-09-06 by `node hooks/run_gates.cjs --audit`, whose two signals (row status markers and RTM §9) agree, and unchanged from v2.7.0. The check that could not be performed at the first readiness pass now can be, and it **fails** |
````

### OP 6 — docs/09-release-notes.md — §0 gate-status, suites row: re-pin Doc 07 v2.4.4 Approved → v2.5.0 In Review (cycle 1 FAILED at 92%; run R-17 = 619/619 green), while keeping 610 as the last *approved* figure of record. The verdict "Partially met" does not change.
FIND:
````
| All suites green, 0 Sev-1/2 (Doc 07) | **Partially met** — `docs/07-test-cases-suites.md` now exists at **v2.4.4, Approved**, recording **610 suite cases green** and no Sev-1/2 of record. That is a suite result, not a Gate-2 pass on its own: the NFR measurements below are still absent |
````
REPLACE WITH:
````
| All suites green, 0 Sev-1/2 (Doc 07) | **Partially met** — `docs/07-test-cases-suites.md` is at **v2.5.0, `Status: In Review`** on 2026-09-06 (cycle 1 **FAILED** — `07-test-cases-suites-v2.5.0-technical-cycle1.md`, 92%, 0C/0H/3M/4L, rework owed by the tester), recording run **R-17** — full-repo `npm test`, **619/619 green**, exit 0 — and no Sev-1/2 of record. Its last **Approved** version, v2.4.4, recorded **610 green**, which is what this row pinned until now; 610 therefore remains the last *approved* figure of record, and 619 is the observed figure at `HEAD`. That is a suite result, not a Gate-2 pass on its own: the NFR measurements below are still absent |
````

### OP 7 — docs/09-release-notes.md — ISS-01 — §0 gate-status, "Passing document-review reports" row: the cell claimed this document carries a passing report "for its current version", which the v1.5.0 bump had falsified. NAMED REPLACEMENT: the stale roll-up "Docs 01–08, 13 and 14 each carry a passing report" is replaced by an enumeration re-derived from `node hooks/run_gates.cjs --audit` on 2026-09-06, and the verdict HARDENS from "Partially met" to "Not met". Nothing is softened.
FIND:
````
| Passing `document-review` reports | **Partially met** — Docs 01–08, 13 and 14 each carry a passing report in `artifacts/reviews/` as of 2026-09-01, and **this document now carries one for its current version** (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed). **Docs 10, 11 and 12 carry none** — which is why this precondition is still not met |
````
REPLACE WITH:
````
| Passing `document-review` reports | **Not met** — and this row is about other documents' reports as well as this one. **This document's current version, v1.6.0, carries no passing report:** v1.5.0 failed cycle 1 (`09-release-notes-v1.5.0-business-cycle1.md`, **FAIL 93%**, 0C/0H/3M/2L) and cycle 2 against v1.6.0 is pending. Its predecessor v1.4.0 did close its loop (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed) — a fact about v1.4.0, not about the current version. *(v1.5.0 carried the v1.4.0 sentence forward under the words "for its current version", which the version bump had already falsified; corrected per `09-release-notes-v1.5.0-business-cycle1` `ISS-01`.)* Elsewhere, as re-derived on **2026-09-06** with `node hooks/run_gates.cjs --audit`: Docs 01, 02, 05, 06, 13 and 14 each carry a passing report for their current version; **four documents each carry a cycle-1 report that FAILED the bar, and each `BLOCK`s the loop** — Doc 03 v2.12.0 (89%, 0C/1H/2M), Doc 04 v1.3.0 (89%, 0C/0H/2M), Doc 07 v2.5.0 (92%, 0C/0H/3M) and Doc 08 v2.8.0 (85%, 0C/2H/3M), all four owed back to their owning roles (architect, architect, tester, tester); and **Docs 10, 11 and 12 carry none at all**. Each of those reasons is sufficient on its own |
````

### OP 8 — docs/09-release-notes.md — ISS-L2 + topology — REL-LIM-18 register row: widen the post-fix pin `ReceiptFreedomBanner.tsx:3-17` to `:3-18` (the "do not copy warning text" instruction the customer bullet depends on is at :18), and correct "merge commit `84e2203`" to the accurate squash-merge description. Two substring substitutions inside one row; every other word of the row is untouched.
FIND:
````
| ~~**REL-LIM-18**~~ | **CLOSED — all five strings are fixed in commit `0a5c542`** ("fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)"), merged to `main` in PR #19 on 2026-09-05; Doc 06 v2.5.1, Approved. Verified at `HEAD` by the sre on 2026-09-06: each of the five sites now states the `FR-131` v1 truth — a v1 vote is cast through conventional authentication and is NOT anonymous, NOT receipt-free and NOT coercion-resistant; the platform database CAN see vote direction and party membership; the ballot the platform is technically unable to read arrives with the Definition-B (v2) privacy layer. *The row as it stood at v1.4.0 is kept verbatim below, unedited, so a reader can still see what the five strings were and where —* **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | *Impact while the row was open, kept verbatim:* **(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** *Impact now that the row is closed:* **that impact is retired at the source.** The banner a citizen reads states the `FR-131` v1 truth in English and in its Arabic mirror, and `UT-0887` fails the build if it stops doing so; `UT-0888` guards the flag description; `UT-0759` guards the `PrivacyStatus` title. What has **not** changed is the underlying limitation those strings mis-described — v1 voting is still NOT anonymous, NOT receipt-free and NOT coercion-resistant. That is `REL-LIM-02`, which remains open and is untouched by this closure. | *Pre-fix pins, as recorded on 2026-09-02:* `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` — *Fix and post-fix pins, verified at `HEAD` on 2026-09-06:* commit `0a5c542` (PR #19, merge commit `84e2203`); `packages/protocol/src/flags.js:42-47`; `packages/contracts/src/core/Governor.sol:25-32`; `apps/web/src/i18n/en.ts:400-408` and its Arabic mirror `apps/web/src/i18n/ar.ts:359-366`; `packages/sdk/src/client.js:450-459`; `apps/web/src/components/ReceiptFreedomBanner.tsx:3-17`; `packages/ui/src/PrivacyStatus.tsx:205` (`VER_TITLE_V1`), `:212` (`VER_TITLE_V2`), `:323-326` (the backing-aware title selection). Regression guards: `UT-0887` (`apps/web/test/safety-surfaces.test.tsx:112`), `UT-0759` (`packages/ui/test/PrivacyStatus.test.tsx:198`), `UT-0888` (`packages/protocol/test/party-and-regions.test.js:302`). Doc 06 v2.5.1 §7 item 26; `artifacts/engineer-2026-09-05T1700.md` | **Closed — fixed in commit `0a5c542` (PR #19, 2026-09-05), Doc 06 v2.5.1 Approved** (`artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md`, PASS 96%; `artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md`, PASS 98%). Re-verified against `HEAD` by the sre on 2026-09-06, source site by source site, with the full suite green (619 tests, `npm test` exit 0). **The `PrivacyStatus.tsx` pre-mount blocker recorded in this row is CLEARED:** the `ver`-state title is now backing-aware by the same clause-7 rule as the subtitle — the fail-honest v1 default is `VER_TITLE_V1 = 'Verified'`, which carries no banned word, and the v2 title renders only where the live backing declares `unlinkable: true` — and `UT-0759` asserts all four paths. **And the component is still not mounted on any shipped surface:** it is exported at `packages/ui/src/index.ts:12`, and all five consuming files still carry an explicit non-render comment. Both facts hold at once and neither replaces the other — clearing the blocker removed the pre-mount *condition*, not the unmounted *state*. The component may now be mounted without violating `FR-131`; it has not been. **The fix is merged to trunk and is deployed nowhere.** This closure removes a blocker on a customer-facing v1 deployment; it does not lift the halt on release `0.1.0`, whose two sufficient reasons (§7) are untouched. *The v1.4.0 text of this cell is kept verbatim below —* **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all five consuming files carry an explicit non-render comment, at six sites (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere |
````
REPLACE WITH:
````
| ~~**REL-LIM-18**~~ | **CLOSED — all five strings are fixed in commit `0a5c542`** ("fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)"), merged to `main` in PR #19 on 2026-09-05; Doc 06 v2.5.1, Approved. Verified at `HEAD` by the sre on 2026-09-06: each of the five sites now states the `FR-131` v1 truth — a v1 vote is cast through conventional authentication and is NOT anonymous, NOT receipt-free and NOT coercion-resistant; the platform database CAN see vote direction and party membership; the ballot the platform is technically unable to read arrives with the Definition-B (v2) privacy layer. *The row as it stood at v1.4.0 is kept verbatim below, unedited, so a reader can still see what the five strings were and where —* **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | *Impact while the row was open, kept verbatim:* **(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** *Impact now that the row is closed:* **that impact is retired at the source.** The banner a citizen reads states the `FR-131` v1 truth in English and in its Arabic mirror, and `UT-0887` fails the build if it stops doing so; `UT-0888` guards the flag description; `UT-0759` guards the `PrivacyStatus` title. What has **not** changed is the underlying limitation those strings mis-described — v1 voting is still NOT anonymous, NOT receipt-free and NOT coercion-resistant. That is `REL-LIM-02`, which remains open and is untouched by this closure. | *Pre-fix pins, as recorded on 2026-09-02:* `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` — *Fix and post-fix pins, verified at `HEAD` on 2026-09-06:* commit `0a5c542` (PR #19; **squash-merged to `main` as `84e2203`**, so `0a5c542` is a branch-side authoring commit and is **not** an ancestor of `main` — v1.5.0 called `84e2203` a "merge commit"; it has a single parent. See the Changelog preamble); `packages/protocol/src/flags.js:42-47`; `packages/contracts/src/core/Governor.sol:25-32`; `apps/web/src/i18n/en.ts:400-408` and its Arabic mirror `apps/web/src/i18n/ar.ts:359-366`; `packages/sdk/src/client.js:450-459`; `apps/web/src/components/ReceiptFreedomBanner.tsx:3-18` (widened from `:3-17` in v1.6.0 per `ISS-L2`: the instruction "Do not copy warning text out of this file into any document; cite FR-131" is at `:18`, and the customer-facing bullet depends on exactly that line); `packages/ui/src/PrivacyStatus.tsx:205` (`VER_TITLE_V1`), `:212` (`VER_TITLE_V2`), `:323-326` (the backing-aware title selection). Regression guards: `UT-0887` (`apps/web/test/safety-surfaces.test.tsx:112`), `UT-0759` (`packages/ui/test/PrivacyStatus.test.tsx:198`), `UT-0888` (`packages/protocol/test/party-and-regions.test.js:302`). Doc 06 v2.5.1 §7 item 26; `artifacts/engineer-2026-09-05T1700.md` | **Closed — fixed in commit `0a5c542` (PR #19, 2026-09-05), Doc 06 v2.5.1 Approved** (`artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md`, PASS 96%; `artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md`, PASS 98%). Re-verified against `HEAD` by the sre on 2026-09-06, source site by source site, with the full suite green (619 tests, `npm test` exit 0). **The `PrivacyStatus.tsx` pre-mount blocker recorded in this row is CLEARED:** the `ver`-state title is now backing-aware by the same clause-7 rule as the subtitle — the fail-honest v1 default is `VER_TITLE_V1 = 'Verified'`, which carries no banned word, and the v2 title renders only where the live backing declares `unlinkable: true` — and `UT-0759` asserts all four paths. **And the component is still not mounted on any shipped surface:** it is exported at `packages/ui/src/index.ts:12`, and all five consuming files still carry an explicit non-render comment. Both facts hold at once and neither replaces the other — clearing the blocker removed the pre-mount *condition*, not the unmounted *state*. The component may now be mounted without violating `FR-131`; it has not been. **The fix is merged to trunk and is deployed nowhere.** This closure removes a blocker on a customer-facing v1 deployment; it does not lift the halt on release `0.1.0`, whose two sufficient reasons (§7) are untouched. *The v1.4.0 text of this cell is kept verbatim below —* **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all five consuming files carry an explicit non-render comment, at six sites (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere |
````

### OP 9 — docs/09-release-notes.md — internal record, "Test status" cell: re-pin Doc 07 → v2.5.0 In Review and Doc 08 → v2.8.0 In Review, and correct v1.5.0's now-false claim that "Docs 07 and 08 have not caught up to 619" — the tester delivered that catch-up the same day, into review, so item 26(c) is discharged into review rather than closed. The superseded claim is quoted inside the correction, not deleted.
FIND:
````
| Test status | Suites present: `packages/contracts/test/{lifecycle,governance,adversarial,differential}.test.mjs`, `packages/protocol/test/*`, `apps/web/test/*`. Doc 07 v2.4.4 (Approved) records **610 suite cases green** and no Sev-1/2 of record; Doc 06 **v2.5.1** (Approved) records the `UT-####` inventory — now **619**, after the three `REL-LIM-18` regression guards `UT-0887`, `UT-0759` and `UT-0888` landed in `0a5c542` on 2026-09-05 — and its §7 open limitations; Doc 08 v2.7.0 (Approved) records **122 of 138 Must rows OPEN**. **Docs 07 and 08 have not caught up to 619:** the `TC` rows for those three guards and the `FR-131` RTM row are owed by the tester (Doc 06 v2.5.1 §7 item 26(c)), so 610 remains the suite figure of record in Doc 07 until they land. The sre re-ran the full suite against `HEAD` on 2026-09-06 — **619 green, `npm test` exit 0** — which verifies the fix; it does not substitute for Doc 07. Performance, capacity, availability and a11y remain `N/A — not yet measured` — see the NFR row below |
````
REPLACE WITH:
````
| Test status | Suites present: `packages/contracts/test/{lifecycle,governance,adversarial,differential}.test.mjs`, `packages/protocol/test/*`, `apps/web/test/*`. Doc 07 is at **v2.5.0, In Review** (cycle 1 **FAILED** at 92%, rework owed by the tester) and records run **R-17**, full-repo `npm test`, **619/619 green**, exit 0, and no Sev-1/2 of record — its last **Approved** version, v2.4.4, recorded **610 green**; Doc 06 **v2.5.1** (Approved) records the `UT-####` inventory — now **619**, after the three `REL-LIM-18` regression guards `UT-0887`, `UT-0759` and `UT-0888` landed in `0a5c542` on 2026-09-05 — and its §7 open limitations; Doc 08 is at **v2.8.0, In Review** (cycle 1 **FAILED** at 85%, rework owed by the tester) and records **122 of 138 Must rows OPEN**, unchanged from its last Approved version v2.7.0. *(v1.5.0 said "Docs 07 and 08 have not caught up to 619" and that the `TC` rows for the three guards and the `FR-131` RTM row were owed by the tester. The tester delivered that catch-up the same day: Doc 07 v2.5.0 and Doc 08 v2.8.0. Both are `In Review` and **both failed cycle 1** (Doc 07 92%, Doc 08 85%), so those rows are **authored, reviewed and not yet approved** — Doc 06 v2.5.1 §7 item 26(c) is discharged into review, not closed.)* The sre re-ran the full suite against `HEAD` on 2026-09-06 — **619 green, `npm test` exit 0** — which verifies the fix; it does not substitute for Doc 07. Performance, capacity, availability and a11y remain `N/A — not yet measured` — see the NFR row below |
````

### OP 10 — docs/09-release-notes.md — ISS-03 (a) — §Changelog preamble: re-pin the cut from `e039ff2` (which is not on `main`) to `HEAD` = `84e2203`, and state the squash-merge convention that makes branch-side SHAs like `0a5c542` non-ancestors of `main`, so a reader can tell the two kinds of identifier apart. The "What this is not" sentence is kept verbatim.
FIND:
````
Cut from the repository history at `HEAD` (`e039ff2`, 2026-09-01): every non-merge commit touching
`packages/` or `apps/`, oldest first. **What this is not:** it is not a tagged release range — no
git tag exists and no `CHANGELOG.md` file is maintained — and it is not a claim of verified
delivery; the RTM position is in the internal record above.
````
REPLACE WITH:
````
Cut from `main` at `HEAD` (**`84e2203`**, 2026-09-06): every non-merge commit on `main` touching
`packages/` or `apps/`, oldest first. **Read the commit identifiers carefully.** This repository
**squash-merges** pull requests, so `main` carries **one** commit per PR and the branch-side
authoring commits are **not** ancestors of `main`. The tables below were originally cut across a
branch and so mix the two: `c04b4f2`, `31b6df9` and the old cut pin `e039ff2` are **branch-side**
commits that are not on `main`; `0a5c542` is branch-side too, and its content is on `main` as
`84e2203`. Every such row now says so, and `git merge-base --is-ancestor <sha> HEAD` settles any
of them. **What this is not:** it is not a tagged release range — no git tag exists and no
`CHANGELOG.md` file is maintained — and it is not a claim of verified delivery; the RTM position
is in the internal record above.
````

### OP 11 — docs/09-release-notes.md — ISS-03 (b) — §Changelog, Definition-A table: label `c04b4f2` and `31b6df9` as branch-side commits not on `main`, add the two missing on-`main` rows `1c589c8` (PR #18) and `84e2203` (PR #19, the commit that closes REL-LIM-18), and add the PR numbers to `4879d8e` and `fe102a4`. Every original row text is preserved; only labels and rows are added.
FIND:
````
| `26d6ab5` | 2026-08-25 | `feat(scaffold):` v1 structure and `ADR-024` seams — `packages/ui`, `IEligibilityVerifier`, `IBallotService` |
| `4879d8e` | 2026-08-28 | `build/v1` party creation |
| `fe102a4` | 2026-08-29 | `build/v1` join membership — includes the live `FR-131`(d) counting-tier notice |
| `c04b4f2` | 2026-08-29 | `feat(proposals):` v1 proposals and debate flow with `DES-103`…`DES-106` |
| `31b6df9` | 2026-08-29 | `fix(proposals):` `FR-080` informed-consent event; Doc 07 v2.4.1 + Doc 08 v2.5.1 traceability |
````
REPLACE WITH:
````
| `26d6ab5` | 2026-08-25 | `feat(scaffold):` v1 structure and `ADR-024` seams — `packages/ui`, `IEligibilityVerifier`, `IBallotService` |
| `4879d8e` | 2026-08-28 | `build/v1` party creation (**PR #15**) |
| `fe102a4` | 2026-08-29 | `build/v1` join membership (**PR #16**) — includes the live `FR-131`(d) counting-tier notice |
| `c04b4f2` | 2026-08-29 | `feat(proposals):` v1 proposals and debate flow with `DES-103`…`DES-106`. **Branch-side commit — not on `main`**; its content reached `main` as `1c589c8` below |
| `31b6df9` | 2026-08-29 | `fix(proposals):` `FR-080` informed-consent event; Doc 07 v2.4.1 + Doc 08 v2.5.1 traceability. **Branch-side commit — not on `main`**; its content reached `main` as `1c589c8` below |
| `1c589c8` | 2026-09-05 | `build/v1` proposals (**PR #18**) — the squash commit on `main` carrying `c04b4f2` and `31b6df9`. *Added in v1.6.0: absent from this table while the section claimed completeness (`09-release-notes-v1.5.0-business-cycle1` `ISS-03`).* |
| `84e2203` | 2026-09-06 | `build/v1` fr131 honesty (**PR #19**) — the squash commit on `main` carrying `0a5c542`, `fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)`, authored 2026-09-05. **This is the commit on `main` that closes `REL-LIM-18`**: the five `FR-131`-violating strings and the `PrivacyStatus.tsx` pre-mount blocker, plus regression guards `UT-0887`, `UT-0759` and `UT-0888` (suite 610 → 619). A copy-and-comment honesty fix with its guards — **no behaviour change, merged to trunk, deployed nowhere.** *Added in v1.6.0 (`ISS-03`).* |
````

### OP 12 — docs/09-release-notes.md — ISS-03 (c) — §Changelog closing paragraph: NAMED DELETION of the false completeness claim "the record above is the release record, and it is complete as of `HEAD`", replaced by an exact statement of scope plus the commands that re-derive it. The withdrawn claim is quoted in the correction so the record shows what was wrong.
FIND:
````
A `CHANGELOG.md` and a tagged `0.1.0` range are owed at the release cut, alongside the refresh
recorded in §7. Neither is a precondition of this document leaving `In Review`: the record above is
the release record, and it is complete as of `HEAD`.
````
REPLACE WITH:
````
A `CHANGELOG.md` and a tagged `0.1.0` range are owed at the release cut, alongside the refresh
recorded in §7. Neither is a precondition of this document leaving `In Review`. **Scope of the
record above — stated exactly, in place of a completeness claim:** it lists every non-merge commit
on `main` touching `packages/` or `apps/` from `48b07e0` (2026-08-08) through `HEAD` = `84e2203`
(2026-09-06), re-derived on 2026-09-06 with `git log --no-merges e039ff2..HEAD -- packages apps`,
**plus** three branch-side commits (`c04b4f2`, `31b6df9`, and `0a5c542` by reference) that are
labelled as such. *(v1.5.0 and every version before it said the record was "complete as of `HEAD`"
while pinning `HEAD` to `e039ff2` — which is itself not on `main` — and while omitting `1c589c8`
and `84e2203`. Corrected per `09-release-notes-v1.5.0-business-cycle1` `ISS-03`.)*
````

### OP 13 — docs/09-release-notes.md — ISS-02 — §Links table: re-pin Doc 06 v2.4.3 → v2.5.1 Approved (the third site of the stale pin), and, since the table was already being corrected, re-pin Doc 07 → v2.5.0 and Doc 08 → v2.8.0 (both In Review, both cycle 1 FAILED) rather than leaving two more sites of the same class behind.
FIND:
````
| Coding & UT | `docs/06-coding-and-ut.md` (v2.4.3, Approved) |
| Test cases | `docs/07-test-cases-suites.md` (v2.4.4, Approved — 610 green) |
| **RTM** | `docs/08-traceability-matrix.md` (v2.7.0, Approved) — **still a Gate-2 blocker: 122 of 138 Must rows OPEN** |
````
REPLACE WITH:
````
| Coding & UT | `docs/06-coding-and-ut.md` (v2.5.1, Approved) |
| Test cases | `docs/07-test-cases-suites.md` (v2.5.0, **In Review** — cycle 1 FAILED at 92%, rework owed by the tester; records run R-17, 619/619 green. Last Approved: v2.4.4, 610 green) |
| **RTM** | `docs/08-traceability-matrix.md` (v2.8.0, **In Review** — cycle 1 FAILED at 85%, rework owed by the tester; last Approved v2.7.0) — **still a Gate-2 blocker: 122 of 138 Must rows OPEN** |
````

### OP 14 — docs/09-release-notes.md — §7 halt reason 1: re-pin Doc 08 → v2.8.0 and Doc 07 → v2.5.0 (both In Review, both cycle 1 FAILED), and give both the 619-at-HEAD and 610-last-approved figures. The reason remains sufficient on its own and its force is unchanged.
FIND:
````
1. **The RTM (Doc 08) has open Must rows.** The document exists at v2.7.0 (Approved), so the
   zero-gap check that could not be performed at the first readiness pass now can be — and it
   **fails**: 122 of 138 Must rows are OPEN (Doc 08 §3.1 and gap log). Doc 07 v2.4.4 (Approved)
   supplies a suite result of record — 610 green — which clears the "no result of record" blocker
   but not this one. **Sufficient alone:** Gate 2 requires zero gaps in Must rows.
````
REPLACE WITH:
````
1. **The RTM (Doc 08) has open Must rows.** The document is at v2.8.0 (`In Review`; cycle 1 FAILED at 85%, rework owed; last Approved
   v2.7.0), so the
   zero-gap check that could not be performed at the first readiness pass now can be — and it
   **fails**: 122 of 138 Must rows are OPEN (Doc 08 §3.1 and gap log). Doc 07 (v2.5.0, `In Review`;
   last Approved v2.4.4) supplies a suite result of record — 619 green at `HEAD`, 610 at its last
   approved version — which clears the "no result of record" blocker
   but not this one. **Sufficient alone:** Gate 2 requires zero gaps in Must rows.
````

---

## Author self-check

- Every FIND was sliced out of the live file by line number, so it is character-for-character
  identical to the target — em dashes, backticks, trailing pipes and all.
- Every FIND begins at a line start and ends at the end of a whole line.
- Exact substring count over the whole document: **1** for each of the 14 ops.
- Ops 5, 6, 8, 9 and 14 rebuild a row or paragraph by substituting inside it; each of their
  eight inner substrings was independently verified to occur exactly once in its target before
  the rebuild.
- A simulated applier was run over a copy of the file: all 14 ops parsed and applied cleanly.
