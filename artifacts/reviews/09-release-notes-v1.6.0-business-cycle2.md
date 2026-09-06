# Document Review Report — Doc 09 Release Notes v1.6.0 (business, cycle 2)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never edits
     the reviewed document. All rework is done by the owning role (sre, Chen Wei). -->

```
Reviewed document: 09-release-notes.md
Document version: 1.6.0
Review mode: business
Reviewer role: tester (neutral — sre Chen Wei owns Doc 09; PM-assigned)
Score: 93%
Critical: 0
High: 0
Medium: 4
Low: 3
Cycle: 2 of 5
Verdict: FAIL
```

Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (Doc 09 → business →
tester, new instance; sre / technical-writer / product-owner / engineer excluded). Review date
**2026-09-06**. Predecessor report: `artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md`
(FAIL 93%, 0C/0H/3M/2L).

---

## 1. Summary (BLUF)

I read `docs/09-release-notes.md` v1.6.0 end to end and re-derived every load-bearing claim against
the repository at `HEAD` (`84e2203`). **All three cycle-1 Mediums are genuinely closed at source,
`ISS-L2` is closed, `ISS-L1` is correctly carried, and I found no transcription residue** — every
one of the 14 ops in `artifacts/sre-2026-09-06T1500-doc09-cycle2-spec.md` transcribed
character-faithfully, and the leaked-marker and adjacent-duplicate scans are clean. The
`REL-LIM-18` closure narrative is **not regressed**: I re-verified all eight post-fix source pins
line-exactly, the three regression guards, the still-unmounted component (six non-render comments
across five consuming files), the full suite (**619 green, `npm test` exit 0**, re-run by me today),
the `FR-131` word ban (clean — no affirmative banned word about v1 voting anywhere, including in the
regions v1.6.0 added), and the **HALTED / deployed-nowhere** posture, which is stated and never
softened. The changelog's on-`main` record is now **actually complete**: I derived all 14 non-merge
commits on `main` touching `packages/`/`apps/` and the tables list exactly those 14.

**The verdict is FAIL on four Mediums, and all four are the same class this document has now failed
on five consecutive versions: a statement of scope, currency or provenance published as exact,
sitting above records that do not bear it out.** The sharpest is that the **internal release
record's "Document version" cell still reads `1.5.0`** — the very cell v1.5.0 rewrote with the
parenthetical "*This cell had gone stale at 1.2.0 while the header block moved on; corrected here*",
now stale again one version later. The second is that the changelog's replacement for the withdrawn
completeness claim offers a **re-derivation command that does not re-derive the record**:
`git log --no-merges e039ff2..HEAD -- packages apps` returns **2 of the 14 rows**, because it is
based on `e039ff2` — a commit the same paragraph correctly declares is *not on `main`*. The remedy
offered for the failing class is itself an instance of the failing class. All four Mediums are
**authoring**, not transcription: each is present verbatim in the sre's own spec, or is a line no op
touched.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (4)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

---

## 3. Cycle-1 issue closure

| Cycle-1 ID | Severity | Subject | Status at v1.6.0 | Evidence |
|---|---|---|---|---|
| `ISS-01` | Medium | §0 gate-status cell claimed this document carries a passing report "for its current version" | **CLOSED** | The cell now reads *"**This document's current version, v1.6.0, carries no passing report:** v1.5.0 failed cycle 1 … and cycle 2 against v1.6.0 is pending"*, keeps the v1.4.0 PASS 97% scoped to v1.4.0, replaces the stale roll-up with a six-document enumeration plus four named blockers and Docs 10–12, and **hardens** the verdict "Partially met" → **"Not met"**. Nothing softened. |
| `ISS-02` | Medium | §Links table pinned Doc 06 at v2.4.3 — a third site of a pin the v1.5.0 change-note implied was fully swept | **CLOSED** | Links now reads `` docs/06-coding-and-ut.md (v2.5.1, Approved) ``; verified against `docs/06-coding-and-ut.md` header (**v2.5.1, Approved**). The v1.5.0 "Two stale facts corrected in passing" bullet is annotated **in place** that a third site existed. Doc 07 and Doc 08 Links pins were swept too (v2.5.0 / v2.8.0, both `In Review`) and both are true at review time. |
| `ISS-03` | Medium | §Changelog claimed "complete as of `HEAD`" while pinned to `e039ff2` and omitting `0a5c542`'s commit | **CLOSED on substance** (a residual defect is raised fresh as `ISS-C2-02`) | `HEAD` **is** `84e2203` (`git rev-parse`). I derived the authoritative set — `git log --no-merges HEAD -- packages apps` = **14 commits** — and the two tables list **exactly those 14**, with `1c589c8` (PR #18) and `84e2203` (PR #19) added. The squash-merge convention is stated; `c04b4f2`, `31b6df9`, `e039ff2`, `0a5c542` confirmed **not** ancestors of `HEAD`; `84e2203` confirmed **single-parent** (the "merge commit" topology error is correctly retracted). |
| `ISS-L1` | Low | `REF-02`, `REF-04`…`REF-10` do not resolve | **CARRIED, correctly disclosed** | `docs/refine-log.md` is still the unfilled template — **zero** `REF-` entries (`grep -c "REF-0"` = 0). The document states this in three places with the right reasoning (no `REF-##` was opened for `REL-LIM-18` because it was a pre-release honesty defect, not a production signal). PM-accepted; still owed by the sre at the next Operate cycle. Non-gating. |
| `ISS-L2` | Low | Post-fix pin `ReceiptFreedomBanner.tsx:3-17` under-covered by one line | **CLOSED** | Pin now `:3-18`. `apps/web/src/components/ReceiptFreedomBanner.tsx:18` = *"Do not copy warning text out of this file into any document; cite FR-131."* — exactly the instruction the customer-facing bullet depends on. |

> The cycle-1 report used IDs `ISS-01`, `ISS-02`, `ISS-03`, `ISS-L1`, `ISS-L2` (not `ISS-01..05`).
> The table above is the complete set.

### Independently re-verified and NOT regressed (the `REL-LIM-18` closure)

| Claim in Doc 09 | Verification at `HEAD` (2026-09-06) | Result |
|---|---|---|
| `REL-LIM-18` row Closed at `0a5c542`, annotate-don't-delete | Row struck through; the v1.4.0 text of all four cells kept verbatim inside the closure text | ✓ |
| Post-fix pin `flags.js:42-47` | `MACI_VOTING.description` states the v1 truth, banned words negated only | ✓ line-exact |
| `Governor.sol:25-32` | NatSpec states NOT anonymous / NOT receipt-free / NOT coercion-resistant + "Do not describe a v1 vote as anonymous, private, receipt-free or secure" | ✓ |
| `en.ts:400-408` + Arabic mirror `ar.ts:359-366` | `banner.notReceiptFreeTitle` / `Body` state the v1 truth in both locales | ✓ |
| `client.js:450-459` | "the vote is NOT anonymous, NOT receipt-free and NOT coercion-resistant (FR-131)" | ✓ |
| `PrivacyStatus.tsx:205` / `:212` / `:323-326` | `VER_TITLE_V1 = 'Verified'`; `VER_TITLE_V2 = 'Verified — private'`; title selection gated on `backingProperties?.unlinkable === true` | ✓ **pre-mount blocker cleared** |
| "component still not mounted on any shipped surface" | Exported at `packages/ui/src/index.ts:12`; six explicit non-render comments across five files (`parties/page.tsx:19`, `petitions/new/page.tsx:13,134`, `proposals/page.tsx:22`, `PartyMembership.tsx:26`, `ProvisionalStatus.tsx:11`) | ✓ **both facts hold at once, as stated** |
| Regression guards `UT-0887` / `UT-0759` / `UT-0888` at their pinned lines | `safety-surfaces.test.tsx:112`, `PrivacyStatus.test.tsx:198`, `party-and-regions.test.js:302` | ✓ all three present |
| "619 tests, `npm test` exit 0" | I re-ran the full suite: 95 + 151 + 244 + 18 + 16 + 95 = **619 passed**, exit **0** | ✓ |
| Cycle-1 report scores quoted in §0 (Doc 03 89% 0C/1H/2M; Doc 04 89% 0C/0H/2M; Doc 07 92% 0C/0H/3M; Doc 08 85% 0C/2H/3M) | Read from each report's metadata block | ✓ all four exact |
| "Docs 10, 11 and 12 carry none at all" | `ls artifacts/reviews | grep -E "^(10|11|12)-"` → 0 | ✓ |
| `FR-131` word ban across the document | Every occurrence of private / anonymous / receipt-free / secure inspected; all negated, quoted-as-code, or scoped to the contract skeleton / Definition-B (v2) | ✓ **clean, fifth consecutive version** |
| HALTED, Gate 2 not approved; "merged to trunk and deployed nowhere" | Stated in the header, the v1.6.0 history, the customer bullet, the register row and §7 | ✓ **not softened anywhere** |
| Transcription fidelity | Leaked-fence/marker scan clean; adjacent-duplicate scan clean; each of the 14 ops' REPLACE text matches the document | ✓ **no transcription residue** |

---

## 4. Per-criterion scores (business rubric)

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The release verdict (**HALTED**, Gate 2 not approved) is unmissable and hardened, not softened; §0's `document-review` row moved *down* from "Partially met" to "Not met" as a result of this rework — a document making itself look worse because that is the truth. "Closing a blocker ≠ lifting the halt" is stated in four places. The live-demonstration paragraph (the §0 enumeration going stale mid-session) is exactly the right kind of self-reporting. |
| B2 Completeness | 15 | 88 | 13.20 | All sections present, no placeholders (unfilled figures are explicit `N/A — not yet measured`). The changelog's on-`main` record is now genuinely complete — I derived all 14 commits and all 14 are listed. Deducted for **ISS-C2-02**: the sentence that replaced the withdrawn completeness claim offers a verification command that reproduces 2 of 14 rows, so the record's stated scope is still not independently checkable by the means the document supplies. |
| B3 Traceability & IDs | 20 | 90 | 18.00 | Every `REL-LIM`, `FR`, `NFR`, `UT`, `DES`, `ADR`, commit SHA and report filename I checked resolves, and the post-fix source pins are line-exact — unusual, and worth recording again. Deducted for **ISS-C2-04** (the PR #19 squash provenance names one of two branch-side commits) and the two stale cross-document pins **ISS-C2-05** / **ISS-C2-06**. |
| B4 Correctness & consistency | 15 | 84 | 12.60 | No false claim about the code, the commit, the tests, the word ban or the halt — I looked hard for one and did not find one. Deducted for **ISS-C2-01** (the internal record states this document's own version as `1.5.0`, contradicting the header block on line 5) and **ISS-C2-03** (a changelog sub-heading whose date range and scoping caveat contradict two rows added beneath it in this same version). |
| B5 Testability | 15 | 98 | 14.70 | The closure is evidenced, not asserted: eight named post-fix pins, three named regression guards at named lines, a re-run suite figure I reproduced exactly, and an explicit statement of what did **not** change (`REL-LIM-02` still open; the component still unmounted). Halt exit criteria remain falsifiable and named. |
| B6 Convention compliance | 15 | 96 | 14.40 | ISO-8601 throughout; RFC 2119 used correctly; named-owner rule held (Chen Wei owns; every routing names a person); the 1.5.0 → **1.6.0** minor bump is the correct increment for a Medium-or-worse FAIL; strikethrough house style consistent across `REL-LIM-03`/`-04`/`-07`/`-18`. Deducted only for **ISS-C2-07** (ragged line wrapping introduced in §7). |
| **Total** | **100** | — | **92.50 → 93%** | — |

---

## 5. Issues (all severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| `ISS-C2-01` | **Medium** | B4 | **Internal release record, "Document version" row — line 814** | The cell reads `` **1.5.0** (`Status: In Review`) — the `REL-LIM-18` closure pass, 2026-09-06 ``, while the header block (line 5) reads `Version: 1.6.0`. **The same document states two different versions of itself.** It is worse than a plain stale pin on two counts: the cell's Predecessors list omits **v1.5.0** (so v1.6.0 appears nowhere in its own version history), and the cell closes with *"(This cell had gone stale at 1.2.0 while the header block moved on; **corrected here**.)"* — a claim of currency falsified by the very next version bump. This is a **verbatim recurrence of the defect v1.5.0 said it had fixed, in the same cell**, and it is the same class as cycle-1 `ISS-01` (a self-referential status claim that the version bump falsified). **Authoring, not transcription:** none of the 14 ops in `artifacts/sre-2026-09-06T1500-doc09-cycle2-spec.md` touches line 814 (OP 9 touches only the "Test status" cell). | Re-state the cell at **1.6.0**, add v1.5.0 to the Predecessors list with its cycle-1 FAIL 93%, and replace the "corrected here" parenthetical with something that cannot go stale — e.g. state that this cell mirrors the header `Version:` field and must be re-checked whenever it moves. Given this cell has now gone stale twice, consider deleting the duplicate version statement outright rather than maintaining two copies of the same fact. |
| `ISS-C2-02` | **Medium** | B2 | **§Changelog closing paragraph ("Scope of the record above — stated exactly")**, and the same command repeated in the **v1.6.0 document history, "On method" paragraph** | The paragraph that replaces the withdrawn completeness claim says the record *"lists every non-merge commit on `main` touching `packages/` or `apps/` from `48b07e0` (2026-08-08) through `HEAD` = `84e2203` (2026-09-06), **re-derived on 2026-09-06 with `git log --no-merges e039ff2..HEAD -- packages apps`**"*. **That command returns 2 rows, not 14.** I ran it: it yields only `84e2203` and `1c589c8`. The cause is stated three sentences earlier in the document's own text — `e039ff2` **is not on `main`**, so using it as the exclusion base silently drops the 12 on-`main` commits that are ancestors of `e039ff2`. The document therefore (a) declares a base commit invalid and then bases its authoritative re-derivation on it, and (b) publishes a verification affordance that does not verify the thing it is attached to. The v1.6.0 history elevates this exact mechanism as the fix for the document's four-for-four failing class — *"replaced by an enumeration plus the command that reproduces it"* — so the remedy is itself an instance of the class. **Authoring:** the wording is verbatim in the spec's OP 12 REPLACE block. | Replace the command at **both** sites with one that actually reproduces the 14 on-`main` rows — `git log --no-merges --reverse --oneline HEAD -- packages apps` (or `48b07e0^..HEAD`) — and, if the `e039ff2..HEAD` command is kept at all, label it for what it is: the delta that found the two missing rows, not the derivation of the record. |
| `ISS-C2-03` | **Medium** | B4 | **§Changelog, second table's heading — line 860** | The heading reads **"Definition-A (v1) application — 2026-08-25 → 2026-08-29."** followed by *"Merged to trunk, and deliberately **not** described as release content in this document."* Both halves were true of the table until **this version added two rows beneath them**: `1c589c8` (**2026-09-05**) and `84e2203` (**2026-09-06**). So the stated date range now excludes 2 of the table's 7 rows, and the "not described as release content" caveat now sits above `84e2203` — the `REL-LIM-18` closure commit, which this document describes at length in §0, the customer-facing bullet, the register row, the internal record and §7. This is the document's signature defect (a summary line above rows it no longer matches) **created by the op that closed `ISS-03`**; the sibling heading, "Protocol and contract skeleton — 2026-08-08 → 2026-08-09", is correct for its nine rows, which makes the contrast plain. **Authoring:** OP 11 adds the rows and does not touch the heading. | Widen the range to **2026-08-25 → 2026-09-06** and re-scope the caveat so it applies to the v1 application drops it was written for while excepting `84e2203`, which this document *does* describe as release-relevant content (a copy-and-comment honesty fix with its guards). |
| `ISS-C2-04` | **Medium** | B3 | **§Changelog, Definition-A table, `84e2203` row**, and the preamble's branch-side enumeration | The row describes `84e2203` as *"the squash commit on `main` **carrying `0a5c542`**"*. **PR #19's branch (`origin/build/v1-fr131-honesty`) carries two commits, not one:** `0a5c542` and then **`b6be070`** ("chore(infra): untrack the TypeScript incremental build cache", 2026-09-05), and `84e2203`'s diff contains both (it adds 3 `.gitignore` lines and deletes `apps/web/tsconfig.tsbuildinfo`, neither of which is in `0a5c542`). The sibling row states its provenance completely — *"carrying `c04b4f2` **and** `31b6df9`"* — which establishes the convention this row breaks, and the preamble's branch-side enumeration (*"`c04b4f2`, `31b6df9` and the old cut pin `e039ff2` … `0a5c542` is branch-side too"*) omits `b6be070` as well. A reader following the document's own squash-provenance instruction to reconstruct PR #19 from `0a5c542` gets a diff that does not match `84e2203` — a reproducibility failure in the one section rewritten this version for exactness. Lightest of the four Mediums, and a one-line fix. | Amend the row to *"carrying `0a5c542` and `b6be070`"* (naming `b6be070` as an infrastructure chore with no product change, so the row's "no behaviour change" characterisation still holds), and add `b6be070` to the preamble's branch-side list. |
| `ISS-C2-05` | Low | B3 | **§7 sre release decision**, the Doc 03 cascade paragraph | *"was **delivered by the architect on 2026-09-06 at Doc 03 v2.12.0**, which is `Status: In Review` and has not yet cleared its document-review"* — stated as bare fact with no as-of date and no re-derivation instruction. At the moment of this review `docs/03-architecture-design-sdd.md` is at **v2.13.0** (`Status: In Review`, rework cycle 1 against the v2.12.0 report). The load-bearing claims survive — the cascade *was* delivered at v2.12.0, and Doc 03 still has not cleared its review — so this is a stale pin, not a false statement. | Either date the pin (*"at v2.12.0; Doc 03 was at v2.13.0 In Review as of …"*) or make it version-neutral: the cascade is delivered and is tracked in Doc 03, which has not yet cleared its document-review. Non-gating. |
| `ISS-C2-06` | Low | B3 | **§0 gate-status, "Passing `document-review` reports" row** | The four-blocker enumeration pins **Doc 03 v2.12.0** and **Doc 04 v1.3.0**. Re-running the row's own cited command at review time: Doc 03 is **v2.13.0** and Doc 04 is **v1.4.0**, and both now block for a *different* reason — `no report for this version`, not "report exists but fails the bar". **Judged as a Low, not a Medium**, because the row does exactly what the document promised: it carries its own as-of date (2026-09-06) **and** the command that re-derives it, and the material claims — four documents blocking, Docs 07/08 pins exact, Docs 01/02/05/06/13/14 passing, Docs 10–12 with none — are all still true (I confirmed each against `node hooks/run_gates.cjs --audit`). This is the same-day churn the document's own "live demonstration" paragraph predicts. | Re-derive the row immediately before the version that leaves `In Review`. Consider stating the *count and conclusion* as the durable claim and demoting the per-document version pins to an explicitly volatile, command-reproducible list. Non-gating. |
| `ISS-C2-07` | Low | B6 | **§7, halt reason 1** | Ragged line wrapping introduced by this version: `"…last Approved"` / `"v2.7.0), so the"` / `"…blocker"` / `"but not this one."` leave three short orphan lines mid-paragraph, breaking the file's otherwise consistent ~100-column wrap. Cosmetic only; the prose reads correctly. **Authoring, not transcription** — the ragged wrap is present verbatim in the spec's OP 14 REPLACE block, so the applier reproduced it faithfully. | Re-wrap the paragraph at the next increment. Non-gating. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Notes on what I did *not* raise

- **No transcription residue.** I scanned for leaked four-backtick fences, `FIND:`/`REPLACE:` markers,
  orphaned suffixes and adjacent duplicate lines, and compared the spec's REPLACE blocks against the
  document. All 14 ops are faithful. Every finding above is attributed to authoring, and I checked
  each against the spec before saying so.
- **The `REL-LIM-18` closure is not reopened.** It verified completely against source, including the
  two facts that must be stated together (blocker cleared **and** component still unmounted).
- **Doc 07 v2.5.0 / Doc 08 v2.8.0 pins are correct at review time.** Rework to v2.6.0 / v2.9.0 is in
  progress but neither file has moved; no finding.
- **The honesty constraints hold.** Nothing is described as deployed; release 0.1.0 is HALTED in
  every place the verdict appears; and there is no affirmative banned word for v1 voting anywhere in
  the document (`FR-131`, Doc 02 §4.45).

### Gate audit at review time

`node hooks/run_gates.cjs --audit` → **exit code 1**. Four documents block the review loop:
Doc 03 v2.13.0 and Doc 04 v1.4.0 (*no report for this version*), Doc 07 v2.5.0 and Doc 08 v2.8.0
(*report exists but fails the bar*). RTM: 138 Must rows, 16 COMPLETE, 122 OPEN; both signals agree;
Gate-2 traceability criterion **NOT MET**. **Doc 09 is not one of the hook's ten documents**, so this
exit code is not a signal about Doc 09 and this report does not change it.

---

## 6. Routing instruction (to the owning role)

**FAIL — route to the sre (Chen Wei), the owning role, for rework cycle 3 of 5.**

Fix `ISS-C2-01`, `ISS-C2-02`, `ISS-C2-03` and `ISS-C2-04`; `ISS-C2-05`, `ISS-C2-06` and `ISS-C2-07`
are non-gating and may be folded in at the same time. Four Mediums make a **minor** bump the floor
per the house rule: produce **v1.7.0**, `Status: In Review`, and this loop re-reviews.

Three things to carry into the rework:

1. **Do not weaken the closure narrative or the halt.** `REL-LIM-18` verified clean at source, the
   `FR-131` word ban is clean for a fifth consecutive version, and the HALTED / deployed-nowhere
   posture is correct. None of it is in question.
2. **All four Mediums are the same failing class, now five-for-five.** Two of them (`ISS-C2-03`,
   `ISS-C2-04`) were *created by the ops that closed cycle 1's `ISS-03`*, and one (`ISS-C2-02`)
   is the class appearing inside the remedy chosen for the class. The pattern to break is not
   "check the summaries" — v1.6.0 did that conscientiously — it is **re-testing every sentence the
   rework itself writes or moves, before publishing**, including headings above tables that gained
   rows and commands offered as proof.
3. **Run the commands you publish.** `ISS-C2-02` would have been caught by executing the command in
   the sentence that carries it. Whatever verification list the next version uses, put "execute every
   command quoted in this document and confirm its output matches the claim it supports" on it.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle **2 of 5**.
