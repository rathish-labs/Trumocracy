# Doc 09 — cycle-3 rework (v1.2.0 → v1.3.0): anchored FIND/REPLACE transcription spec

```
Spec ID:       SPEC-DOC09-REWORK3-2026-09-02
Author:        Chen Wei — Reliability Lead (sre)  — owning role
Date:          2026-09-02
Target:        docs/09-release-notes.md  (current: v1.2.0, Status: In Review, 731 lines, LF, UTF-8)
Result:        docs/09-release-notes.md  v1.3.0, Status: In Review  (Status does NOT change)
Routed by:     artifacts/reviews/09-release-notes-v1.2.0-business-cycle2.md
               (business, cycle 2 — FAIL 89%, 0C / 1H / 2M / 2L; reviewer: tester, PM-assigned)
Transcriber:   project-manager (mechanical applier). Authorship stays with the sre.
Ops:           13 (CH-01 … CH-13)
```

## What this rework does

Cycle 2 raised one High, two Mediums and two Lows. All are accepted; none is disputed. Every
commit attribution was re-derived with `git log -S` **before** an op was written, not read off the
report.

**The High is mine and it is the second of its kind.** In tidying the `REL-LIM-03` correction into
one narrative, v1.2.0 asserted in five places that `REL-LIM-03`, `-04` and `-07` were "all three
closed in the same remediation, `c854c0a`". Only `-03` was. The other two landed in `b8cf2ce`. The
claim was published under the banner *"Verified fixed, re-read against `HEAD` on 2026-09-02"* — an
asserted verification that was not performed, which is exactly the shape of the cycle-1 Critical it
was written to fix.

The reviewer's method note is the substantive finding, not the five sites. **Both failures were
roll-up sentences sitting above per-row citations that were correct.** So this rework does not only
fix the flagged sentences: it re-reads **every generalising sentence in the document** against the
records each one summarises. That sweep is recorded below, and it found two more errors of the same
class that the report did not raise (CH-05, CH-08).

## The generalisation sweep — every roll-up sentence, and what proves it

Method: extract each sentence that asserts something about a *set* of records rather than a single
record, then find the commit, line or table that proves or disproves it. Fourteen were checked.

| # | Generalisation (as published in v1.2.0) | Checked against | Verdict |
|---|---|---|---|
| 1 | "all three closed in the same remediation, `c854c0a`" (×5 sites) | `git log -S "authorisedSpender[msg.sender]"` → `b8cf2ce`; `git log -S "deliberately NOT gated on FLAG_GOVERNANCE"` → `b8cf2ce`; `git log -S "att.issuer != msg.sender"` → `c854c0a` | **FALSE — `ISS-01`.** Fixed at all five sites (CH-04, CH-06, CH-10, CH-12, CH-13) |
| 2 | "Doc 06 §5 `C-01`–`C-06`" as the companion pointer for all three rows | `docs/06-coding-and-ut.md` §5.1 (numbered defects 1–4) and §5.2 (`C-01`–`C-04`, `C-06`, `H-01`, `H-03`, `H-04`) | **FALSE — `ISS-01`.** Two separate tables. `-04` is §5.1 defect 1; `-07` is §5.1 defect 4; only `-03` is a `C-` row. The range is also wrong on its face: there is no `C-05` in §5.2 (it is open, in §5.3) and the range silently excludes the `H-` rows. Pointer replaced with per-row citations, which were already right |
| 3 | "Three shipped code strings still assert the retired framing" (L363) | `REL-LIM-18` (L469), internal record (L596), §7 (L686), routing (L707) — all say five | **FALSE — `ISS-02`.** Fixed (CH-03) |
| 4 | "`PrivacyStatus.tsx` is `FR-131`-compliant by construction" | `packages/ui/src/PrivacyStatus.tsx:236` — `title: 'Verified — private'`, rendered at `:333-335` as `{cfg.title}` | **FALSE in its load-bearing half — `ISS-03`.** Fixed (CH-09) |
| 5 | "`:144`, `:167-168` (the throws)" | `promotion-gate.mjs:144` is `throw new UnsafeDeploymentError(` ✓; `:167-168` are description strings inside `formatDeploymentPlan()`; the other throw is `:88` | **PARTLY FALSE — `ISS-L1`.** Fixed (CH-07) |
| 6 | **"Eight were stale"** (re-pin blockquote, L446) | Rows whose Trace pins were corrected at v1.2.0: `-03`, `-05`, `-07`, `-08`, `-10`, `-12`, `-13`, `-15`, `-16` = **nine**; `-09` was augmented, not corrected | **FALSE — found by this sweep, not reported.** The count is also ambiguous by construction (does a wholesale row rewrite count as a re-pin?). Replaced with an enumeration, which is checkable (CH-05) |
| 7 | **"(3) and (5) are customer-facing"** (`REL-LIM-18` Impact cell) | Site (5) is `ReceiptFreedomBanner.tsx:6-10`, a source-code **comment**. No citizen reads it | **FALSE — found by this sweep, not reported.** Only (3) is read by a citizen; (5) is a comment inside the customer-facing component. Tightened (CH-08) |
| 8 | "Most are open. Three are struck through" | 18 `REL-LIM` rows; `grep -c "^| ~~\*\*REL-LIM"` → **3** (`-03`, `-04`, `-07`) | **TRUE** — kept |
| 9 | "`Governor.sol:199` … on `propose`, and nowhere else" | `grep -n requireEnabled Governor.sol` → only `:199` | **TRUE** — kept (reviewer independently confirmed) |
| 10 | "fourteen dated Conventional-Commit product commits … complete as of `HEAD`" | `git log --oneline --no-merges -- packages/ apps/` → 14, matching one for one | **TRUE** — kept (reviewer independently confirmed) |
| 11 | "Five shipped code strings" (`REL-LIM-18` Limitation cell) | All five sites re-verified individually | **TRUE** — kept |
| 12 | "every consuming surface carries an explicit non-render comment" (implied by "rendered nowhere") | `parties/page.tsx:19`, `petitions/new/page.tsx:13,134`, `proposals/page.tsx:22`, `PartyMembership.tsx:26`, `ProvisionalStatus.tsx:11` | **TRUE** — the exclusion decision stands; only its stated reason was wrong |
| 13 | "reasons 1 and 2 … each sufficient alone" (§7) | Doc 08 v2.7.0 (122 of 138 Must rows OPEN); Doc 10 §8.6 drill unexecuted | **TRUE** — kept, untouched by this spec |
| 14 | "Docs 01–08, 13 and 14 each carry a passing report … Docs 09–12 carry none" (§0) | `artifacts/reviews/` listing | **TRUE** — kept |

**Two conclusions I am recording rather than leaving implicit.** First, the per-row citations in this
document have now been right three cycles running; it is only the sentences that *summarise* them
that have failed, twice. Second, the failure mode is specifically **compression** — every error was
introduced while making a correct-but-scattered set of facts read more tidily. Where a roll-up now
adds nothing a reader could not get from the rows, this version prefers the enumeration (CH-05).

## One correction to the report's own suggested wording

The report's required-fix text for `ISS-01` says to replace the false claim with *"all three are
closed, in two commits one day apart"*. **That is not right either, and I have not used it.**
Verified with `git log -1 --format=%ad --date=iso`:

- `b8cf2ce` — 2026-08-09 **00:28:42 +0000**
- `c854c0a` — 2026-08-09 **01:46:25 +0000**

Both commits are on **the same day**, 78 minutes apart. The ops below say "two commits on
2026-08-09" and give each commit its own closure, rather than substituting one tidy-but-wrong
summary for another. Flagging it so the cycle-3 reviewer does not read the divergence as a
non-compliance with its own instruction.

## What `c854c0a` actually did to `PersonhoodRegistry.sol`

Relevant because the report describes it as "the *completion* of the spender fix, not its origin",
and the ops rely on that being exact. `git show c854c0a -- packages/contracts/src/core/PersonhoodRegistry.sol`
is **4 insertions, 0 deletions**: one error declaration (`SpenderAuthoriserAlreadySet`) and a
three-line set-once guard in `setSpenderAuthoriser`. That is `H-01` in the commit message
(*"setSpenderAuthoriser was re-callable and self-authorising. Now set once."*), and Doc 06 §5.2
lists it as `H-01`, not as part of defect 1. The `authorisedSpender[msg.sender]` guard that closes
`REL-LIM-04` is not in this commit at all. The report's characterisation holds exactly.

## Verification log

| Finding | What I ran | Result |
|---|---|---|
| `ISS-01` attribution | `git log -S "authorisedSpender[msg.sender]" -- .../PersonhoodRegistry.sol` | `b8cf2ce` — **confirmed** |
| `ISS-01` attribution | `git log -S "deliberately NOT gated on FLAG_GOVERNANCE" -- .../Governor.sol` | `b8cf2ce` — **confirmed** |
| `ISS-01` control | `git log -S "att.issuer != msg.sender" -- .../RegionRegistry.sol` | `c854c0a` — **confirmed**, `REL-LIM-03` is correctly attributed |
| `ISS-01` §5 tables | `docs/06-coding-and-ut.md` §5.1 L597–605, §5.2 L613–624 | Two tables. §5.1 numbered 1–4; §5.2 `C-01`–`C-04`, `C-06`, `H-01`, `H-03`, `H-04`. **Confirmed**, and the `-04`/`-07` rows' own Trace cells already cite "§5 defect 1" / "§5 defect 4" correctly |
| `ISS-02` | `sed -n '363,366p'` | "Three shipped code strings" — **confirmed present** |
| `ISS-03` | `sed -n '232,240p;330,338p' packages/ui/src/PrivacyStatus.tsx` | `:236` is `title: 'Verified — private'`; `:333-335` renders `{cfg.title}`. **Confirmed.** Non-render comments confirmed at all six consuming surfaces — the **exclusion stands**, the stated reason does not |
| `ISS-L1` | `awk NR>=142 && NR<=147 promotion-gate.mjs` | `:144` **is** the `throw` (report is right that it is fine); `:167-168` are `lines.push` description strings; `:88` is the other throw. **Confirmed** |
| Self-found #6 | Diff of v1.1.0 → v1.2.0 Trace cells | Nine rows re-pinned, not eight |
| Self-found #7 | `ReceiptFreedomBanner.tsx:6-10` | A doc comment, not rendered text |

## How to apply

- Ops **CH-06 through CH-12** use **substring** FIND blocks inside long single-line table rows,
  deliberately: the coordinator asked for tight anchors away from list boundaries, and a substring
  is the tightest safe anchor in a 600-character table row. **The applier must do a plain substring
  replacement, not a line replacement.** Each has been machine-verified to occur exactly once in the
  whole file.
- All FIND blocks were extracted from the current file, occur **exactly once**, and **do not
  overlap** — including CH-08 and CH-09, which are two disjoint substrings of the same line (L469).
- No op touches a numbered-list boundary. `ISS-04`'s damage class cannot recur from this spec.
- Fences are four backticks. Apply in any order. If any FIND matches zero times or more than once,
  **abort the whole spec**.
- No file other than `docs/09-release-notes.md` is changed.

---

## CH-01 Header — version 1.2.0 to 1.3.0 (line 5)

Header. `Status` stays `In Review`; `Last updated` stays 2026-09-02. Neither is touched by any op.

FIND:
````
Version:       1.2.0            (document version; SemVer)
````
REPLACE WITH:
````
Version:       1.3.0            (document version; SemVer)
````

## CH-02 Document history — prepend the v1.3.0 entry (lines 21-22)

FIND is the first two lines of the v1.2.0 entry; the replacement emits the new v1.3.0 entry and then
those two lines unchanged, so the v1.2.0 entry continues intact from line 3 of the block. Wrapped to
~100 columns per the house style.

FIND:
````
> **Document history — v1.2.0 (2026-09-02).** Rework cycle 1 against
> `artifacts/reviews/09-release-notes-v1.1.0-business-cycle1.md` (business, cycle 1 — **FAIL 77%,
````
REPLACE WITH:
````
> **Document history — v1.3.0 (2026-09-02).** Rework cycle 2 against
> `artifacts/reviews/09-release-notes-v1.2.0-business-cycle2.md` (business, cycle 2 — **FAIL 89%,
> 0 Critical / 1 High / 2 Medium / 2 Low**; trajectory 77% → 89%). The review verified eleven of
> thirteen cycle-1 findings closed against shipped source, and recorded the `FR-131` word ban still
> clean and the HALT intact. Closed here:
>
> - **`ISS-01` (High) — a false commit attribution that v1.2.0 itself introduced, in five places.**
>   v1.2.0 said `REL-LIM-03`, `-04` and `-07` were "all three closed in the same remediation,
>   `c854c0a`". Only `REL-LIM-03` was. `git log -S` places the `authorisedSpender[msg.sender]` guard
>   (`REL-LIM-04`) and the `FLAG_GOVERNANCE` NOTE (`REL-LIM-07`) in **`b8cf2ce`**; `c854c0a`'s only
>   change to `PersonhoodRegistry.sol` is the four-line `H-01` set-once guard, which *completes* the
>   spender fix rather than originating it. The companion pointer "Doc 06 §5 `C-01`–`C-06`" was
>   wrong for the same two rows: Doc 06 §5 holds **two** tables, and `REL-LIM-04`/`-07` are §5.1
>   numbered defects 1 and 4, not `C-` rows. Each closure is now attributed to its own commit at all
>   five sites, and the range pointer is replaced by the per-row citations that were already correct.
> - **`ISS-02` (Medium) — the headline correction had not reached the sentence a citizen reads.**
>   The customer-facing bullet still said **three** `FR-131`-violating code strings while four other
>   places said five. Corrected, with the five sites' character summarised so the number is not the
>   only thing carrying the meaning.
> - **`ISS-03` (Medium) — a false compliance assertion.** The `REL-LIM-18` watch item claimed
>   `PrivacyStatus.tsx` is "`FR-131`-compliant by construction". It is not: `:236` sets
>   `title: 'Verified — private'`, rendered at `:333-335`. The component is protected today by being
>   **unmounted**, not by its construction. The exclusion from the counted five stands — every
>   consuming surface carries an explicit non-render comment — but it is now stated on its true
>   basis, and the string is routed as a **pre-mount blocker** rather than a watch item.
> - **`ISS-L1` (Low).** `promotion-gate.mjs:167-168` were labelled "the throws"; they are the gate's
>   published description strings. The throws are `:88` and `:144`.
>
> **Two further errors of the same class were found by this version's own sweep and are fixed here,
> though the review did not raise them:** the re-pin blockquote said "Eight were stale" when nine
> rows were re-pinned (and the count is ambiguous by construction, so it is replaced with an
> enumeration); and `REL-LIM-18` described sites (3) and (5) as "customer-facing" when (5) is a
> source-code comment that no citizen reads.
>
> **On method.** The cycle-2 report observed that both this document's Critical (cycle 1) and its
> High (cycle 2) were *summarising* sentences asserting something tidier than the records beneath
> them supported, each published under a claim of source verification, while the per-row citations
> they sat above were correct. That is accurate. Before this version was written, every generalising
> sentence in the document was re-read against the commit, line or table that proves it — fourteen
> in total, of which four were false and are fixed here, ten verified true and kept. Where a roll-up
> added nothing the rows do not already carry, it has been replaced by the enumeration.
> `ISS-L2` (unresolvable `REF-##` citations) remains PM-accepted and owed at the next Operate cycle.
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7). Authored by the sre as
> an anchored FIND/REPLACE spec (`artifacts/sre-2026-09-02T1855-doc09-rework3-spec.md`).
>
> **Document history — v1.2.0 (2026-09-02).** Rework cycle 1 against
> `artifacts/reviews/09-release-notes-v1.1.0-business-cycle1.md` (business, cycle 1 — **FAIL 77%,
````

## CH-03 "Three shipped code strings" to five  [ISS-02, Medium] (lines 363-366)

The only place in the customer-facing section that states the count, and it carried the retired
number while four other places said five. The replacement also names the five sites by character, so
the sentence does not rest on a bare numeral that can drift again.

FIND:
````
- **The normative wording is `FR-131` itself — not any string in the codebase.** Three shipped code
  strings still assert the retired "votes are anonymous but not receipt-free" framing and are
  themselves violations of this requirement; they are disclosed as **`REL-LIM-18`** and routed to
  the engineer. Do not copy warning text out of the code.
````
REPLACE WITH:
````
- **The normative wording is `FR-131` itself — not any string in the codebase.** **Five** shipped
  code strings still assert the retired "votes are anonymous but not receipt-free" framing and are
  themselves violations of this requirement: a feature-flag description, contract documentation, an
  SDK comment, a component comment — and, the one that matters most, **the banner copy a citizen
  actually reads on the vote screen**. They are disclosed as **`REL-LIM-18`** and routed to the
  engineer. Do not copy warning text out of the code.
````

## CH-04 Known-issues preamble — split the attribution  [ISS-01 site 1, High] (lines 440-443)

First of the five `ISS-01` sites. Verified: `b8cf2ce` 2026-08-09 00:28 UTC closes `-04` and `-07`;
`c854c0a` 2026-08-09 01:46 UTC closes `-03`. Same day, 78 minutes apart — **not** "one day apart",
which is why the report s own suggested wording is not used here.

FIND:
````
Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Most are
open. Three are struck through and marked closed — `REL-LIM-03`, `REL-LIM-04` and `REL-LIM-07`, all
fixed in the same security remediation (`c854c0a`, 2026-08-09; Doc 06 §5 `C-01`–`C-06`) — and are
kept in the register rather than deleted, so the record of what was disclosed stays readable.
````
REPLACE WITH:
````
Every item below is a **release-blocking** or **disclosed** limitation of release 0.1.0. Most are
open. Three are struck through and marked closed — `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce`, and
`REL-LIM-03` in `c854c0a`, both commits on 2026-08-09 — and are kept in the register rather than
deleted, so the record of what was disclosed stays readable. Each row cites its own commit and its
own Doc 06 §5 entry; there is no single remediation that covers all three, and an earlier version of
this document was wrong to say there was.
````

## CH-05 Re-pin blockquote — replace the count with the enumeration  [self-found, same class as ISS-01] (lines 446-447)

**Not raised by the review.** "Eight were stale" is wrong: nine rows had their Trace pins corrected
at v1.2.0 (`-03`, `-05`, `-07`, `-08`, `-10`, `-12`, `-13`, `-15`, `-16`), and `-09` was augmented
rather than corrected. The count is also ambiguous by construction — `-12` was rewritten wholesale,
so whether it counts as a "re-pin" is a judgement, which is precisely what makes a bare numeral the
wrong instrument here. Replaced with the list, which a reader can check row by row.

FIND:
````
> (rework cycle 1, finding `ISS-06`). Eight were stale: code had moved under them since 2026-08-09
> and the pins had not followed. If a pin below does not resolve to what its row describes, it moved
````
REPLACE WITH:
````
> (rework cycle 1, finding `ISS-06`). The rows whose pins were corrected were `REL-LIM-03`, `-05`,
> `-07`, `-08`, `-10`, `-12`, `-13`, `-15` and `-16`; `REL-LIM-09` gained a pin it had been missing.
> In each case code had moved and the pin had not followed. If a pin below does not resolve to what
````

## CH-06 REL-LIM-03 row — the roll-up inside the Impact cell  [ISS-01 site 2, High] (line 454)

**Substring op** inside a long table row. The row s Trace cell is correct and is not touched; only
the closing sentence of its Impact cell, which is the same false roll-up.

FIND:
````
was inverted: **all three were closed in the same remediation.**
````
REPLACE WITH:
````
was inverted: **all three are closed** — `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce`, this one in `c854c0a`, both on 2026-08-09.
````

## CH-07 REL-LIM-12 Trace — the throws label  [ISS-L1, Low] (line 466)

**Substring op.** Verified: `promotion-gate.mjs:88` and `:144` are the two `throw` statements;
`:167-168` are `lines.push` description strings inside `formatDeploymentPlan()`.

FIND:
````
`:144`, `:167-168` (the throws), `:157` (`formatDeploymentPlan`)
````
REPLACE WITH:
````
`:88` and `:144` (the two throws), `:167-168` (the gate's published description), `:157` (`formatDeploymentPlan`)
````

## CH-08 REL-LIM-18 Impact cell — "customer-facing" overstated  [self-found, same class] (line 469)

**Not raised by the review. Substring op.** Site (5) is `ReceiptFreedomBanner.tsx:6-10`, a source
comment. No citizen reads it. Only site (3) is rendered text. Tightened so the distinction that
makes (3) urgent is not diluted by grouping a comment with it.

FIND:
````
**(3) and (5) are customer-facing:** (3) is the rendered copy and (5) is the standing instruction to keep rendering it, both on the vote surface where `FR-131` mandates the opposite text.
````
REPLACE WITH:
````
**(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase.
````

## CH-09 REL-LIM-18 watch item — restate the PrivacyStatus exclusion truthfully  [ISS-03, Medium] (line 469)

**Substring op**, disjoint from CH-08 on the same line. Verified: `PrivacyStatus.tsx:236` sets
`title: 'Verified — private'`, rendered at `:333-335` as `{cfg.title}`. Every consuming surface
carries an explicit non-render comment, so **the exclusion from the counted five stands** — but it
stands on being unmounted, not on the component being compliant. Per the report s suggestion, the
string is reclassified from a watch item to a **pre-mount blocker** routed with `REL-LIM-18`.

FIND:
````
*Watch item, not counted here:* `packages/ui/src/PrivacyStatus.tsx` is `FR-131`-compliant by construction (backing-aware clause 7, fail-honest v1 default) and is rendered nowhere yet — re-check its copy the first time it is rendered
````
REPLACE WITH:
````
*Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all six consuming surfaces carry an explicit non-render comment (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere
````

## CH-10 Internal record — Security defects closed  [ISS-01 site 3, High] (line 596)

**Substring op** inside the Security/a11y row. The open list is unchanged.

FIND:
````
Security defects **closed**: `REL-LIM-03`, `REL-LIM-04`, `REL-LIM-07` — all three fixed in the same remediation, `c854c0a`, 2026-08-09 (Doc 06 §5 `C-01`–`C-06`); `REL-LIM-03`'s closure was re-verified against `HEAD` on 2026-09-02 after this document had carried it as open in error
````
REPLACE WITH:
````
Security defects **closed**: `REL-LIM-04` and `REL-LIM-07` in `b8cf2ce` (Doc 06 §5.1 numbered defects 1 and 4), and `REL-LIM-03` in `c854c0a` (Doc 06 §5.2 `C-01` / `SEC-C01`) — two commits, both on 2026-08-09. `REL-LIM-03`'s closure was re-verified against `HEAD` on 2026-09-02 after this document had carried it as open in error; the commit split was corrected on the same date after this document had attributed all three to one commit in error
````

## CH-11 Changelog — b8cf2ce row now claims its two closures  [ISS-01, High] (line 614)

The counterpart to CH-12. `b8cf2ce` closed `REL-LIM-04` and `REL-LIM-07` and the changelog did not
say so, which is half of why the closures drifted onto `c854c0a` in the first place.

FIND:
````
| `b8cf2ce` | 2026-08-09 | `feat(contracts):` core protocol + security fixes from the test-strategy review |
````
REPLACE WITH:
````
| `b8cf2ce` | 2026-08-09 | `feat(contracts):` core protocol + security fixes from the test-strategy review — **closes `REL-LIM-04`** (nullifier burn access-controlled) **and `REL-LIM-07`** (open ballots no longer flag-gated); Doc 06 §5.1 numbered defects 1 and 4 |
````

## CH-12 Changelog — c854c0a row claims only what it closed  [ISS-01 site 4, High] (line 619)

Verified: `c854c0a` touches `PersonhoodRegistry.sol` by four insertions only — the `H-01` set-once
guard on `setSpenderAuthoriser` — which completes the spender-authorisation family rather than
closing `REL-LIM-04`. It does not touch `Governor.sol` s flag gating at all.

FIND:
````
| `c854c0a` | 2026-08-09 | `fix(contracts):` six criticals and four highs from the independent security scan — **closes `REL-LIM-03`, `REL-LIM-04`, `REL-LIM-07`** (Doc 06 §5 `C-01`–`C-06`) |
````
REPLACE WITH:
````
| `c854c0a` | 2026-08-09 | `fix(contracts):` six criticals and four highs from the independent security scan — **closes `REL-LIM-03`** (Doc 06 §5.2 `C-01` / `SEC-C01`). It also hardens the `REL-LIM-04` family with `H-01` (`setSpenderAuthoriser` made set-once, four lines) but does **not** close `REL-LIM-04` itself, which `b8cf2ce` had already done |
````

## CH-13 §7 "Verified fixed" — the site the banner sat over  [ISS-01 site 5, High] (lines 700-703)

The most important of the five: the false roll-up was published directly under the words "Verified
fixed, re-read against `HEAD`". The replacement keeps the banner but makes it true, and records the
misattribution rather than silently repairing it — the same posture §7 already takes toward the
cycle-1 Critical two paragraphs above.

FIND:
````
**Verified fixed, re-read against `HEAD` on 2026-09-02:** `REL-LIM-03` (residency issuance now binds
`msg.sender` to the attester's registered `issuer`), `REL-LIM-04` (nullifier burn access-controlled)
and `REL-LIM-07` (open ballots no longer flag-gated) — **all three closed in the same remediation**,
`c854c0a`, 2026-08-09. **Still open from the same readiness pass:** `REL-LIM-15` (activation still
````
REPLACE WITH:
````
**Verified fixed — each against its own commit, re-derived with `git log -S` on 2026-09-02:**
`REL-LIM-04` (nullifier burn access-controlled) and `REL-LIM-07` (open ballots no longer flag-gated)
in **`b8cf2ce`** (Doc 06 §5.1 numbered defects 1 and 4); `REL-LIM-03` (residency issuance now binds
`msg.sender` to the attester's registered `issuer`) in **`c854c0a`** (Doc 06 §5.2 `C-01` /
`SEC-C01`). Two commits, both on 2026-08-09. *(Correction of record: v1.2.0 stated under this same
heading that all three closed "in the same remediation, `c854c0a`". Only `REL-LIM-03` did. The
sentence was a tidy summary of per-row citations that were themselves correct — the second time in
this document's history that a roll-up asserted more than the rows beneath it, and the second time a
neutral review caught it rather than its author. Every generalising sentence in this version was
re-read against the record that proves it before publication.)* **Still open from the same readiness
pass:** `REL-LIM-15` (activation still flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff),
`REL-LIM-17` (irrevocable spender set).
````

---

## Op index

| Op | Line(s) | Finding | Kind | What it does |
|---|---|---|---|---|
| CH-01 | 5 | header | line | Version 1.2.0 → **1.3.0** |
| CH-02 | 21–22 | header | line | v1.3.0 history entry prepended, wrapped |
| CH-03 | 363–366 | **`ISS-02`** M | line | "Three shipped code strings" → **Five**, with the sites' character |
| CH-04 | 440–443 | **`ISS-01`** H (1/5) | line | Known-issues preamble — attribution split |
| CH-05 | 446–447 | self-found | line | "Eight were stale" → the enumeration |
| CH-06 | 454 | **`ISS-01`** H (2/5) | substring | `REL-LIM-03` Impact cell roll-up |
| CH-07 | 466 | `ISS-L1` L | substring | `:167-168` relabelled; `:88` added |
| CH-08 | 469 | self-found | substring | `REL-LIM-18` — "(3) and (5) are customer-facing" tightened |
| CH-09 | 469 | **`ISS-03`** M | substring | `PrivacyStatus` exclusion restated; pre-mount blocker |
| CH-10 | 596 | **`ISS-01`** H (3/5) | substring | Internal record — closed-defect attribution |
| CH-11 | 614 | **`ISS-01`** H | substring | Changelog `b8cf2ce` row claims its two closures |
| CH-12 | 619 | **`ISS-01`** H (4/5) | substring | Changelog `c854c0a` row claims only `REL-LIM-03` |
| CH-13 | 700–703 | **`ISS-01`** H (5/5) | line | §7 "Verified fixed" — corrected under its own banner |

`ISS-L2` (`REF-##` register empty) — **no op**, PM-accepted, owed at the next Operate cycle.

## Post-transcription checks

1. `grep -n "same remediation" docs/09-release-notes.md` — must return **nothing**.
2. `grep -n "C-01–C-06\|C-01..C-06" docs/09-release-notes.md` — must return **nothing**.
3. `grep -n "c854c0a" docs/09-release-notes.md` — every hit must attribute **only `REL-LIM-03`** to
   it, except the `H-01` hardening note in the changelog row, which explicitly says it does *not*
   close `REL-LIM-04`.
4. `grep -n "b8cf2ce" docs/09-release-notes.md` — must now appear in the preamble, the internal
   record, the changelog and §7, each crediting `REL-LIM-04` and `REL-LIM-07`.
5. `grep -ni "three shipped\|Three shipped" docs/09-release-notes.md` — must return **nothing**;
   `grep -c "five" ` should show the count agreeing across L363, `REL-LIM-18`, the internal record,
   §7 and the routing.
6. `grep -n "compliant by construction" docs/09-release-notes.md` — must return **nothing**.
7. `grep -n "Eight were stale" docs/09-release-notes.md` — must return **nothing**.
8. Confirm the header reads `Version:       1.3.0`, `Status:        In Review`,
   `Last updated:  2026-09-02`, columns aligned.
9. Confirm §0 still reads "**This release has NOT been approved and MUST NOT be promoted to
   production**", §7 still opens **HALTED** on two independently sufficient reasons, and
   "Approvals (Gate 2): **None.**" is intact.
10. Re-run the `FR-131` word sweep: every hit for `anonymous`, `private`, `receipt-free`, `secure`
    must remain a negation, the named v2 capability, a cannot-column entry, a flag or copy-key
    identifier, an accurately quoted defective string, or the ban's own restatement. Note that
    CH-09 **adds** one quoted defective string (`'Verified — private'`) — that is a quotation of a
    code defect, in the same category as the existing `REL-LIM-18` quotations, and is compliant.
