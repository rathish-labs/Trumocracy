# Doc 09 v1.7.0 — anchored FIND/REPLACE spec: rework cycle 3

```
Spec ID:       SPEC-09-v1.7.0-CYCLE3
Author:        Chen Wei — Reliability Lead (sre)
Target:        docs/09-release-notes.md   (v1.6.0 In Review  ->  v1.7.0 In Review)
Date:          2026-09-06
Against:       artifacts/reviews/09-release-notes-v1.6.0-business-cycle2.md
               (business, cycle 2 - FAIL 93%, 0C/0H/4M/3L; reviewer: tester, neutral)
Closes:        ISS-C2-01, -02, -03, -04 (Medium) + ISS-C2-05, -06, -07 (Low).
               ISS-L1 carried, non-gating.
Ops:           12
```

**Applier note.** Apply the ops in order. Every FIND block was extracted **mechanically** from
the CURRENT `docs/09-release-notes.md` (which contains the v1.6.0 text) — sliced out by line
number, not retyped — and each was checked with an exact, non-regex substring count over the
whole file: all 12 returned **1**. Fences are four backticks. If any FIND fails to match exactly
once, write nothing and report the failing op number.

**Commands quoted in the new text were executed before this spec was written** (the cycle-2
lesson). `git log --no-merges --oneline HEAD -- packages apps` returns **14** commits;
`git log --oneline --no-merges main..origin/build/v1-fr131-honesty` returns **`b6be070`** and
**`0a5c542`**; `git show --stat 84e2203` shows `.gitignore` +3 and the deletion of
`apps/web/tsconfig.tsbuildinfo`; `node hooks/run_gates.cjs --audit` reports **2** blocking
documents (Docs 07 and 08) with Docs 03 v2.13.0 and 04 v1.4.0 now **passing**.

**What this spec does NOT do.** It does not reopen or weaken the `REL-LIM-18` closure, which the
cycle-2 review re-verified clean at source. It does not touch Docs 03, 04, 07, 08 or the memory
index. The release verdict (**HALTED, Gate 2 not approved**) is unchanged, and the fix remains
**merged to trunk and deployed nowhere**.

---

### OP 1 — docs/09-release-notes.md — version bump 1.6.0 → 1.7.0 and Status rewritten for rework cycle 3. NAMED REPLACEMENT: the v1.6.0 status paragraph becomes a v1.7.0 one carrying the full loop position (v1.5.0 FAIL 93% cycle 1 → v1.6.0 FAIL 93% cycle 2 → v1.7.0 cycle 3, not yet reviewed), the v1.4.0 PASS scoped to v1.4.0, the carried REF-## Low, and the unchanged HALTED / deployed-nowhere posture. It also removes "cycle 2 is pending", which the cycle-2 FAIL falsified. `Last updated:` is already 2026-09-06 and no op touches it.
FIND:
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
REPLACE WITH:
````
Version:       1.7.0            (document version; SemVer)
Release:       0.1.0            (Phase-1 walking skeleton, public testnet)
Status:        In Review — v1.7.0, rework cycle 3 against
               artifacts/reviews/09-release-notes-v1.6.0-business-cycle2.md (business, cycle 2 —
               **FAIL 93%, 0 Critical / 0 High / 4 Medium / 3 Low**; reviewer: tester, neutral,
               PM-assigned). Loop position: v1.5.0 FAIL 93% (cycle 1) → v1.6.0 FAIL 93%
               (cycle 2) → **v1.7.0, cycle 3 of 5, not yet reviewed**. The predecessor v1.4.0
               closed its own loop at PASS 97% on cycle 4 — a fact about v1.4.0, not about the
               current version. Carried Low: the unresolvable `REF-##` citations (PM-accepted
               across six cycles, still owed by the sre at the next Operate cycle). **No
               document-review PASS on this document is a Gate-2 sign-off, and none is a release
               authorisation. This document's own verdict on release 0.1.0 remains HALTED
               (§0, §7), and the code fix v1.5.0 records is merged to trunk and deployed
               nowhere.**
````

### OP 2 — docs/09-release-notes.md — insert the NEW v1.7.0 document-history entry immediately ahead of the v1.6.0 entry. Pure insertion — the three consumed lines are re-emitted unchanged around it.
FIND:
````
> **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2.
> Customer-facing section is plain language; the internal record carries the facts and traceability.
>
````
REPLACE WITH:
````
> Customer-facing section is plain language; the internal record carries the facts and traceability.
>
> **Document history — v1.7.0 (2026-09-06).** Rework cycle 3 against
> `artifacts/reviews/09-release-notes-v1.6.0-business-cycle2.md` (business, cycle 2 — **FAIL 93%,
> 0 Critical / 0 High / 4 Medium / 3 Low**). The review re-derived the `REL-LIM-18` closure against
> source and found it **clean and not regressed** — all eight post-fix pins line-exact, the three
> guards present, 619 green re-run independently, the component still unmounted, the `FR-131` word
> ban clean for a fifth consecutive version, the HALT never softened — and found **no transcription
> residue** in any of the 14 cycle-2 ops. It also confirmed all three cycle-1 Mediums and `ISS-L2`
> closed at source. **None of that is reopened or weakened here.**
>
> All four new Mediums are the same class, now **five-for-five**: a statement of scope, currency or
> provenance published as exact, above records that do not bear it out. Two were *created by the ops
> that closed cycle 1*, and one appeared *inside the remedy chosen for the class*. Closed here:
>
> - **`ISS-C2-01` (Medium) — the document stated two different versions of itself.** The internal
>   record's "Document version" cell still read `1.5.0` against a `1.6.0` header — the same cell
>   v1.5.0 had rewritten with the words "corrected here", stale again one version later. **The
>   duplicate is deleted, not re-synchronised:** the cell now points at the header `Version:` field
>   as the single source of truth and keeps only an append-only review-loop history of closed facts.
>   A fact stored twice drifts; this one drifted twice.
> - **`ISS-C2-02` (Medium) — the remedy was an instance of the disease.** The paragraph that
>   replaced the withdrawn "complete as of `HEAD`" claim offered
>   `git log --no-merges e039ff2..HEAD -- packages apps` as the re-derivation. **It returns 2 of the
>   14 rows**, because `e039ff2` is not on `main` — which the same paragraph says three sentences
>   earlier. Replaced at **both** sites (§Changelog and the v1.6.0 "On method" paragraph) with
>   `git log --no-merges --oneline HEAD -- packages apps`, **executed before publishing**: it
>   returns exactly the 14 on-`main` commits the tables list. The old command is retained, labelled
>   as what it actually was — the delta that found the two missing rows.
> - **`ISS-C2-03` (Medium) — a heading falsified by rows added beneath it in the same version.**
>   "Definition-A (v1) application — 2026-08-25 → 2026-08-29", with "deliberately **not** described
>   as release content", now sat above `1c589c8` (2026-09-05) and `84e2203` (2026-09-06) — the
>   latter being the commit this document describes in five separate sections. Range widened to
>   2026-09-06 and the caveat re-scoped to the five v1 application rows it was written for, with
>   `84e2203` named as the explicit exception.
> - **`ISS-C2-04` (Medium) — incomplete squash provenance.** The `84e2203` row said the squash
>   carries `0a5c542`. **PR #19's branch carries two commits:** `0a5c542` and `b6be070`
>   (`chore(infra): untrack the TypeScript incremental build cache`), and `84e2203`'s diff contains
>   both — three `.gitignore` lines and the deletion of the tracked `apps/web/tsconfig.tsbuildinfo`,
>   neither of which is in `0a5c542`. A reader following this document's own
>   reconstruct-from-the-branch-commit instruction would get a diff that does not match. Both
>   commits are now named, in the row and in the preamble's branch-side list; `b6be070` is an
>   infrastructure chore, so the row's "no behaviour change" characterisation still holds.
> - **`ISS-C2-05`, `ISS-C2-06` (Low, both fixed).** Two cross-document pins had gone stale the same
>   day: §7 said Doc 03 "has not yet cleared its document-review" (it has since reached v2.13.0 and
>   **passed** cycle 2), and §0 pinned Docs 03/04 as two of four blockers (both have since passed;
>   **two** documents block now, not four). Rather than re-pin and wait to go stale a third time,
>   **both sites now separate the durable fact from the volatile one** — §7 keeps "the cascade was
>   delivered" and withdraws the review-state claim; §0 leads with what does not move (this document
>   has no passing report; Docs 10–12 have none at all) and demotes the per-document pins to an
>   explicitly volatile, dated, command-reproducible snapshot.
> - **`ISS-C2-07` (Low, fixed).** The ragged wrapping introduced in §7 halt reason 1 is re-wrapped.
>
> **`ISS-L1` (Low) is carried** for a sixth cycle: `REF-02` and `REF-04`…`REF-10` still do not
> resolve — `docs/refine-log.md` is the unfilled template with zero `REF-` entries. PM-accepted;
> owed by the sre at the next Operate cycle. No `REF-##` was opened for `REL-LIM-18`, which was a
> pre-release honesty defect caught by document review, not a production signal.
>
> **On method, cycle 3 — what changed, since checking summaries was not enough.** v1.6.0 checked
> its summaries conscientiously and still shipped four instances of the class, because it checked
> the sentences it *inherited* and not all of the ones it *wrote*. Three rules were applied here:
>
> 1. **Execute every command this document quotes**, and confirm the output matches the claim
>    attached to it. That alone would have caught `ISS-C2-02` — and it did catch a stale
>    four-blockers claim in §0 before this version was published.
> 2. **After adding a row to any table, re-read the heading above it and the paragraph below it.**
>    That is where `ISS-C2-03` and `ISS-C2-04` were born.
> 3. **Prefer deleting a duplicated fact to synchronising it, and separate durable claims from
>    volatile pins.** A version number stored in two places will drift; a cross-document review
>    state pinned in prose will go stale within the day.
>
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). The `REL-LIM-18`
> closure stands, and the fix remains **merged to trunk and deployed nowhere**. Authored by the sre
> as an anchored FIND/REPLACE spec (`artifacts/sre-2026-09-06T1700-doc09-cycle3-spec.md`).
>
> **Document history — v1.6.0 (2026-09-06).** Rework cycle 2 against
````

### OP 3 — docs/09-release-notes.md — ISS-C2-02 (second site) — v1.6.0 history, "On method" paragraph: replace the command that does not re-derive the record (`git log --no-merges e039ff2..HEAD -- packages apps`, which returns 2 of 14) with `git log --no-merges --oneline HEAD -- packages apps`, which was executed before publishing and returns exactly 14. The old command is retained inside the correction, labelled as the delta that found the two missing rows.
FIND:
````
> **On method, since the failing class is now four-for-four.** Every sentence in this document that
> asserts a sweep, a record or a set is *complete* was located and re-tested against the thing it
> claims to summarise — including the three the review did not raise. Where a roll-up could not be
> re-derived on demand, it has been replaced by an enumeration plus the command that reproduces it
> (`node hooks/run_gates.cjs --audit` for the review state, `git log --no-merges e039ff2..HEAD --
> packages apps` and `git merge-base --is-ancestor` for the changelog). That is the only defence
> against this class that has worked in this document's history.
````
REPLACE WITH:
````
> **On method, since the failing class is now four-for-four.** Every sentence in this document that
> asserts a sweep, a record or a set is *complete* was located and re-tested against the thing it
> claims to summarise — including the three the review did not raise. Where a roll-up could not be
> re-derived on demand, it has been replaced by an enumeration plus the command that reproduces it
> (`node hooks/run_gates.cjs --audit` for the review state; for the changelog, `git log --no-merges
> --oneline HEAD -- packages apps` and `git merge-base --is-ancestor`). That is the only defence
> against this class that has worked in this document's history. *(v1.7.0 correction: v1.6.0 cited
> `git log --no-merges e039ff2..HEAD -- packages apps` here and in the §Changelog. **That command
> returns 2 of the 14 on-`main` rows**, because `e039ff2` is not on `main` — the very fact stated
> three sentences away from it. It was the delta that found the two missing rows, not the
> derivation of the record. Corrected at both sites per
> `09-release-notes-v1.6.0-business-cycle2` `ISS-C2-02`; the replacement command was executed
> before publishing and returns exactly the 14 rows the tables list.)*
````

### OP 4 — docs/09-release-notes.md — ISS-C2-06 + a falsified claim of this version's own — §0 gate-status "Passing document-review reports" row. NAMED RESTRUCTURE: the durable claims (this document has no passing report; some governed documents block; Docs 10–12 have none at all) are stated first and do not depend on any pin; the per-document version pins are demoted to an explicitly volatile, dated, command-reproducible snapshot re-derived on 2026-09-06. The stale "four documents block / Doc 03 v2.12.0 / Doc 04 v1.3.0" enumeration is replaced with the true one (two block; Docs 03 and 04 have since passed), and "cycle 2 against v1.6.0 is pending" is dropped because the cycle-2 FAIL falsified it. Verdict stays "Not met".
FIND:
````
| Passing `document-review` reports | **Not met** — and this row is about other documents' reports as well as this one. **This document's current version, v1.6.0, carries no passing report:** v1.5.0 failed cycle 1 (`09-release-notes-v1.5.0-business-cycle1.md`, **FAIL 93%**, 0C/0H/3M/2L) and cycle 2 against v1.6.0 is pending. Its predecessor v1.4.0 did close its loop (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed) — a fact about v1.4.0, not about the current version. *(v1.5.0 carried the v1.4.0 sentence forward under the words "for its current version", which the version bump had already falsified; corrected per `09-release-notes-v1.5.0-business-cycle1` `ISS-01`.)* Elsewhere, as re-derived on **2026-09-06** with `node hooks/run_gates.cjs --audit`: Docs 01, 02, 05, 06, 13 and 14 each carry a passing report for their current version; **four documents each carry a cycle-1 report that FAILED the bar, and each `BLOCK`s the loop** — Doc 03 v2.12.0 (89%, 0C/1H/2M), Doc 04 v1.3.0 (89%, 0C/0H/2M), Doc 07 v2.5.0 (92%, 0C/0H/3M) and Doc 08 v2.8.0 (85%, 0C/2H/3M), all four owed back to their owning roles (architect, architect, tester, tester); and **Docs 10, 11 and 12 carry none at all**. Each of those reasons is sufficient on its own |
````
REPLACE WITH:
````
| Passing `document-review` reports | **Not met.** *The durable claims, which do not depend on any version pin:* **(a)** this document's current version carries **no** passing report — the header `Status:` field carries its loop position; **(b)** one or more governed documents block the review loop; **(c)** **Docs 10, 11 and 12 carry no `document-review` report at all** — zero files match `^(10\|11\|12)-` in `artifacts/reviews/`, and those three are outside the hook's ten governed documents, so no audit run will ever surface them. **(c) alone keeps this precondition unmet, and (c) is owed by the sre.** *Volatile snapshot — a per-document pin goes stale within hours in this repository, so read the list below as evidence of the date it carries, re-derive it, and never quote it forward. As re-derived on **2026-09-06** by `node hooks/run_gates.cjs --audit` (exit 1):* **2 documents blocking** — Doc 07 v2.5.0 and Doc 08 v2.8.0, both "report exists but fails the bar" (cycle 1 FAIL 92% and 85%), rework owed to the tester; Docs 01, 02, **03 (v2.13.0)**, **04 (v1.4.0)**, 05, 06, 13 and 14 all PASS for their current version. *(v1.6.0 pinned Doc 03 at v2.12.0 and Doc 04 at v1.3.0 as two of four blockers; both have since been reworked and passed at cycle 2 — `09-release-notes-v1.6.0-business-cycle2` `ISS-C2-06`. That same-day churn is why this row now leads with what does not move.)* |
````

### OP 5 — docs/09-release-notes.md — ISS-C2-01 — internal release record, "Document version" row: the cell said 1.5.0 against a 1.6.0 header, the second time this duplicate drifted. NAMED DELETION: the duplicated version number is removed outright rather than re-synchronised; the cell now points at the header `Version:` field as the single source of truth and keeps only an append-only review-loop history of closed facts, extended with v1.5.0, v1.6.0 and v1.7.0.
FIND:
````
| Document version | **1.5.0** (`Status: In Review`) — the `REL-LIM-18` closure pass, 2026-09-06. Predecessors: v1.1.0 `FR-131` sweep; v1.2.0 correctness and re-pin pass (rework cycle 1), 2026-09-02; v1.3.0 rework cycle 2 and v1.4.0 rework cycle 3, both 2026-09-02, with v1.4.0 Approved at PASS 97% on cycle 4. *(This cell had gone stale at 1.2.0 while the header block moved on; corrected here.)* |
````
REPLACE WITH:
````
| Document version | **See the header `Version:` field — this row deliberately does not restate it.** Two copies of one fact drifted apart twice: this cell went stale at 1.2.0 (corrected in v1.5.0, which added the parenthetical "corrected here"), and stale again at 1.5.0 one version later, caught as `09-release-notes-v1.6.0-business-cycle2` `ISS-C2-01`. The duplicate is deleted rather than maintained. **Review-loop history** (closed facts, append-only): v1.1.0 `FR-131` sweep · v1.2.0 correctness and re-pin pass (rework cycle 1), 2026-09-02 · v1.3.0 rework cycle 2 · v1.4.0 rework cycle 3, both 2026-09-02, **Approved** at PASS 97% on cycle 4 · v1.5.0 `REL-LIM-18` closure pass, 2026-09-06, **FAIL 93%** cycle 1 · v1.6.0 rework cycle 2, 2026-09-06, **FAIL 93%** cycle 2 · v1.7.0 rework cycle 3, 2026-09-06 |
````

### OP 6 — docs/09-release-notes.md — ISS-C2-04 (preamble half) + ISS-C2-02 — §Changelog preamble: add `b6be070`, PR #19's second branch-side commit, to the branch-side enumeration, and state the derivation command that actually produces the record (`git log --no-merges --oneline HEAD -- packages apps` → 14). The squash-merge explanation and the "What this is not" sentence are kept.
FIND:
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
REPLACE WITH:
````
Cut from `main` at `HEAD` (**`84e2203`**, 2026-09-06). The record is derived by
`git log --no-merges --oneline HEAD -- packages apps`, which returns **14** commits — every
non-merge commit on `main` touching `packages/` or `apps/` — and the tables below list exactly
those 14, oldest first, plus three branch-side rows that are labelled as such. **Read the commit
identifiers carefully.** This repository **squash-merges** pull requests, so `main` carries **one**
commit per PR and the branch-side authoring commits are **not** ancestors of `main`. The tables
were originally cut across a branch and so mix the two: `c04b4f2`, `31b6df9` and the old cut pin
`e039ff2` are **branch-side** commits that are not on `main`; PR #19's two branch-side commits,
`0a5c542` and `b6be070`, are likewise not on `main`, and their combined content is on `main` as
`84e2203`. Every such row now says so, and `git merge-base --is-ancestor <sha> HEAD` settles any
of them. **What this is not:** it is not a tagged release range — no git tag exists and no
`CHANGELOG.md` file is maintained — and it is not a claim of verified delivery; the RTM position
is in the internal record above.
````

### OP 7 — docs/09-release-notes.md — ISS-C2-03 — §Changelog, second table heading: the date range "2026-08-25 → 2026-08-29" and the blanket "not described as release content" caveat were falsified by the two rows v1.6.0 added beneath them. Range widened to 2026-09-06 and the caveat re-scoped to the five v1 application rows, with `84e2203` named as the explicit exception this document does describe.
FIND:
````
**Definition-A (v1) application — 2026-08-25 → 2026-08-29.** *Merged to trunk, and deliberately
**not** described as release content in this document — see the coverage note in §0 and the owed
refresh in §7.*
````
REPLACE WITH:
````
**Definition-A (v1) application, and the drops that followed — 2026-08-25 → 2026-09-06.** *The
first five rows are the v1 application drops, merged to trunk and deliberately **not** described as
release content in this document — see the coverage note in §0 and the owed refresh in §7. The
last row, `84e2203`, is the exception: this document **does** describe it, at length, in §0, the
customer-facing bullet, the `REL-LIM-18` register row, the internal record and §7, because it is
the commit that closes `REL-LIM-18`.* *(v1.7.0: the heading read "2026-08-25 → 2026-08-29" and
applied the "not release content" caveat to every row, both of which v1.6.0 falsified when it added
the `1c589c8` and `84e2203` rows beneath them —
`09-release-notes-v1.6.0-business-cycle2` `ISS-C2-03`.)*
````

### OP 8 — docs/09-release-notes.md — ISS-C2-04 — §Changelog, `84e2203` row: the squash carries TWO branch-side commits, not one. Name `b6be070` (chore(infra): untrack the TypeScript incremental build cache) alongside `0a5c542`, with what it contributes to the diff, so a reader reconstructing PR #19 gets a diff that matches. The "no behaviour change" characterisation is retained and justified.
FIND:
````
| `84e2203` | 2026-09-06 | `build/v1` fr131 honesty (**PR #19**) — the squash commit on `main` carrying `0a5c542`, `fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)`, authored 2026-09-05. **This is the commit on `main` that closes `REL-LIM-18`**: the five `FR-131`-violating strings and the `PrivacyStatus.tsx` pre-mount blocker, plus regression guards `UT-0887`, `UT-0759` and `UT-0888` (suite 610 → 619). A copy-and-comment honesty fix with its guards — **no behaviour change, merged to trunk, deployed nowhere.** *Added in v1.6.0 (`ISS-03`).* |
````
REPLACE WITH:
````
| `84e2203` | 2026-09-06 | `build/v1` fr131 honesty (**PR #19**) — the squash commit on `main` carrying **both** of the branch's commits: `0a5c542`, `fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)`, authored 2026-09-05; and `b6be070`, `chore(infra): untrack the TypeScript incremental build cache`, also 2026-09-05, which adds three `.gitignore` lines and deletes the tracked `apps/web/tsconfig.tsbuildinfo` — an infrastructure chore with no product change. **This is the commit on `main` that closes `REL-LIM-18`**: the five `FR-131`-violating strings and the `PrivacyStatus.tsx` pre-mount blocker, plus regression guards `UT-0887`, `UT-0759` and `UT-0888` (suite 610 → 619). A copy-and-comment honesty fix with its guards — **no behaviour change, merged to trunk, deployed nowhere.** *Added in v1.6.0 (`ISS-03`); `b6be070` named in v1.7.0 (`ISS-C2-04`), because reconstructing PR #19 from `0a5c542` alone yields a diff that does not match `84e2203`.* |
````

### OP 9 — docs/09-release-notes.md — ISS-C2-02 (primary site) — §Changelog closing "Scope of the record" paragraph: NAMED REPLACEMENT of the re-derivation command. `git log --no-merges e039ff2..HEAD -- packages apps` returns 2 of the 14 rows because `e039ff2` is not on `main`; it is replaced by `git log --no-merges --oneline HEAD -- packages apps`, executed 2026-09-06 before publishing, which returns exactly 14. The row arithmetic (9 + 5 on-`main` rows, plus 2 labelled branch-side rows) is stated so the claim is checkable. Both superseded claims are quoted inside the correction.
FIND:
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
REPLACE WITH:
````
A `CHANGELOG.md` and a tagged `0.1.0` range are owed at the release cut, alongside the refresh
recorded in §7. Neither is a precondition of this document leaving `In Review`. **Scope of the
record above — stated exactly, in place of a completeness claim, and re-derivable by one command:**
it lists every non-merge commit on `main` touching `packages/` or `apps/` from `48b07e0`
(2026-08-08) through `HEAD` = `84e2203` (2026-09-06). Run
`git log --no-merges --oneline HEAD -- packages apps`: it returns **14** commits, and the two
tables list exactly those 14 — nine in the first table, five in the second. The second table also
carries **two branch-side rows** (`c04b4f2`, `31b6df9`), labelled as such and deliberately not in
the 14; `0a5c542` and `b6be070` are branch-side too and appear by reference inside the `84e2203`
row. Executed on 2026-09-06 before publishing this version. *(v1.5.0 and every version before it
said the record was "complete as of `HEAD`" while pinning `HEAD` to `e039ff2` — which is itself
not on `main` — and while omitting `1c589c8` and `84e2203`; corrected per
`09-release-notes-v1.5.0-business-cycle1` `ISS-03`. v1.6.0 then offered
`git log --no-merges e039ff2..HEAD -- packages apps` as the re-derivation, which returns **2** of
the 14 rows for exactly the reason this section states — `e039ff2` is not on `main`. That command
was the delta that found the two missing rows, not the derivation; corrected per
`09-release-notes-v1.6.0-business-cycle2` `ISS-C2-02`.)*
````

### OP 10 — docs/09-release-notes.md — ISS-C2-07 + currency — §7 halt reason 1: re-wrap the ragged lines this document introduced at v1.6.0, and add Doc 07's cycle-1 FAIL at 92% and the audit re-derivation date for the RTM figures. The reason's force is unchanged and it remains sufficient on its own.
FIND:
````
1. **The RTM (Doc 08) has open Must rows.** The document is at v2.8.0 (`In Review`; cycle 1 FAILED at 85%, rework owed; last Approved
   v2.7.0), so the
   zero-gap check that could not be performed at the first readiness pass now can be — and it
   **fails**: 122 of 138 Must rows are OPEN (Doc 08 §3.1 and gap log). Doc 07 (v2.5.0, `In Review`;
   last Approved v2.4.4) supplies a suite result of record — 619 green at `HEAD`, 610 at its last
   approved version — which clears the "no result of record" blocker
   but not this one. **Sufficient alone:** Gate 2 requires zero gaps in Must rows.
````
REPLACE WITH:
````
1. **The RTM (Doc 08) has open Must rows.** Doc 08 is at v2.8.0 (`In Review`; cycle 1 FAILED at
   85%, rework owed to the tester; last Approved v2.7.0), so the zero-gap check that could not be
   performed at the first readiness pass now can be — and it **fails**: 122 of 138 Must rows are
   OPEN (Doc 08 §3.1 and gap log; re-derived 2026-09-06 by `node hooks/run_gates.cjs --audit`,
   both signals agreeing). Doc 07 (v2.5.0, `In Review`; cycle 1 FAILED at 92%; last Approved
   v2.4.4) supplies a suite result of record — 619 green at `HEAD`, 610 at its last approved
   version — which clears the "no result of record" blocker but not this one. **Sufficient
   alone:** Gate 2 requires zero gaps in Must rows.
````

### OP 11 — docs/09-release-notes.md — ISS-C2-05 — §7 routing, the Doc 03 cascade sentence: NAMED DELETION of the volatile claim that Doc 03 "has not yet cleared its document-review", which was true when written and false by 2026-09-06 (Doc 03 reached v2.13.0 and its cycle-2 report PASSED). The durable fact — the cascade was delivered at v2.12.0 and is tracked in Doc 03 — is kept, with the re-derivation command named instead of a pin.
FIND:
````
2026-09-02, re-scoped from three sites to five the same day) came back **fixed** on 2026-09-05 and
is **no longer routed to the engineer**; this version closes its register row. The Doc 03 cascade
the same commit created — §13 "Public tallies in Phase 1" instructing the client to state the
retired framing, and §10.12.3 giving the v2 `ver` title as the v1 spec — was **delivered by the
architect on 2026-09-06 at Doc 03 v2.12.0**, which is `Status: In Review` and has not yet cleared
its document-review; it is tracked there, not here (Doc 06 v2.5.1 §7 item 26(a)). `REL-LIM-03` is
````
REPLACE WITH:
````
is **no longer routed to the engineer**; this version closes its register row. The Doc 03 cascade
the same commit created — §13 "Public tallies in Phase 1" instructing the client to state the
retired framing, and §10.12.3 giving the v2 `ver` title as the v1 spec — was **delivered by the
architect on 2026-09-06, at Doc 03 v2.12.0**, and is tracked in Doc 03, not here (Doc 06 v2.5.1 §7
item 26(a)). *Delivery is the durable fact; Doc 03's version and review state are not — as of
2026-09-06 Doc 03 had moved to v2.13.0 and its cycle-2 report PASSED. Re-derive with
`node hooks/run_gates.cjs --audit` rather than trusting this pin
(`09-release-notes-v1.6.0-business-cycle2` `ISS-C2-05`).* `REL-LIM-03` is
**no longer routed to anyone**: it is closed (see the correction of record above).
````

### OP 12 — docs/09-release-notes.md — ISS-C2-05 (second site, found by this version's own sweep and not raised by the review) — the v1.6.0 history sweep paragraph carries the same "has not yet cleared its document-review" claim about Doc 03. The delivery fact is kept and the review-state claim is withdrawn in place, with the reason dated.
FIND:
````
> and nothing claims the five strings are live. Two residuals lived **outside** this document —
> Doc 03 §13, which instructed the client to state the retired framing, and Doc 03 §10.12.3, which
> gave the v2 `ver` title as the v1 spec. Both were architect cascades created by the same commit
> (Doc 06 v2.5.1 §7 item 26(a)), and both were **delivered by the architect on 2026-09-06 at Doc 03
> v2.12.0**, which is `Status: In Review` and has not yet cleared its document-review. They are
> tracked there, not here; §7 records that.
````
REPLACE WITH:
````
> and nothing claims the five strings are live. Two residuals lived **outside** this document —
> Doc 03 §13, which instructed the client to state the retired framing, and Doc 03 §10.12.3, which
> gave the v2 `ver` title as the v1 spec. Both were architect cascades created by the same commit
> (Doc 06 v2.5.1 §7 item 26(a)), and both were **delivered by the architect on 2026-09-06 at Doc 03
> v2.12.0**. They are tracked there, not here; §7 records that. *(v1.7.0: this sentence went on to
> say Doc 03 "has not yet cleared its document-review" — true when written, false by 2026-09-06,
> when Doc 03 reached v2.13.0 and its cycle-2 report PASSED. The delivery is the durable fact; the
> review state is not, and is withdrawn from here rather than re-pinned.)*
````

---

## Author self-check

- Every FIND was sliced out of the live file by line number, so it is character-for-character
  identical to the target — em dashes, backticks, trailing pipes and all.
- Every FIND begins at a line start and ends at the end of a whole line.
- Exact substring count over the whole document: **1** for each of the 12 ops.
- Every command quoted in a REPLACE block was executed and its output matched the claim it
  supports, before the spec was finalised.
- A simulated applier was run over a copy of the file: all 12 ops parsed and applied cleanly.
