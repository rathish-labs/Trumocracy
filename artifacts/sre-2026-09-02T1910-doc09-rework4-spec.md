# Doc 09 — cycle-4 rework (v1.3.0 → v1.4.0): anchored FIND/REPLACE transcription spec

```
Spec ID:       SPEC-DOC09-REWORK4-2026-09-02
Author:        Chen Wei — Reliability Lead (sre)  — owning role
Date:          2026-09-02
Target:        docs/09-release-notes.md  (current: v1.3.0, Status: In Review, 789 lines, LF, UTF-8)
Result:        docs/09-release-notes.md  v1.4.0, Status: In Review  (Status does NOT change)
Routed by:     artifacts/reviews/09-release-notes-v1.3.0-business-cycle3.md
               (business, cycle 3 — FAIL 94%, 0C / 0H / 1M / 3L; trajectory 77 → 89 → 94)
Transcriber:   project-manager (mechanical applier). Authorship stays with the sre.
Ops:           6 (CH-01 … CH-06)
```

## Version increment — MINOR, not the patch the report suggests

The cycle-3 report routes this to **v1.3.1**, reasoning that no Medium+ *content* defect remains.
The house rule is **Medium-or-worse FAIL → at least a MINOR bump**, and it has been enforced twice
before against patch-bump suggestions. This spec therefore produces **v1.4.0**. Recording the
divergence here so the cycle-4 reviewer does not read it as non-compliance with its own instruction.

## Correction of record: both Mediums are MY authoring, not transcription damage

The report attributes `ISS-01`(a) and (b) to "transcription residue … introduced by v1.3.0", and
says this is "the third consecutive version damaged at a FIND/REPLACE boundary". **The shape of the
diagnosis is right and the attribution is wrong, and I am not going to let it stand — a wrong
attribution here would put the corrective discipline on the wrong side of the handoff.** I re-read
my own cycle-3 spec before writing this one:

**`ISS-01`(a) — the L762 orphan.** My `CH-13` FIND block was four whole lines ending
`` …**Still open from the same readiness pass:** `REL-LIM-15` (activation still `` — **mid-sentence**.
The sentence continued onto the next line of the file, which my FIND did not include. My REPLACE
then re-emitted that sentence **complete**. The applier did exactly what I specified; the duplicate
tail is the part of the paragraph I failed to anchor.

**`ISS-01`(b) — the five deleted words.** My `CH-05` FIND ended
`` …If a pin below does not resolve to what its row describes, it moved `` and my REPLACE ended
`` …If a pin below does not resolve to what ``. **I dropped "its row describes, it moved" from my own
replacement text.** Nothing ate it. It was inside the range I consumed and I did not re-emit it.

For completeness: cycle 1's `ISS-04` (the destroyed §Upgrade item 4) **was** applier misbehaviour —
that FIND was three whole lines, verified unique, and the applier consumed a fourth. So the record
across three versions is **one applier fault and two authoring faults**, not three of a kind.

**The rule I should have been applying, and am applying here:**

1. A FIND block MUST begin at the start of a block-level unit and **end at the end of one** — the
   line following it must be blank, or a structurally new element. No FIND may stop mid-sentence.
2. Every word inside the FIND range MUST appear in the REPLACE unless its deletion is the point of
   the op, and each such deletion is named explicitly below.

All six ops in this spec satisfy both. Five of the six FIND blocks are followed by a blank line in
the current file; the sixth (CH-01) is a single self-contained `key: value` line inside a fenced
block, where no sentence spans lines at all.

## Verification performed

| Check | Result |
|---|---|
| `ISS-01`(a) — L762 orphan | **Confirmed.** L760–761 complete the sentence; L762 duplicates its tail |
| Independent suffix-duplicate scan across all 789 lines | **L762 is the only hit.** A trailing-suffix scan (any line that is a proper suffix of another) plus an adjacent-line prefix-duplication scan returned exactly one finding — the one the report names. No other residue anywhere in the document |
| `ISS-01`(b) — L497–498 | **Confirmed**, and traced to my own `CH-05` REPLACE text, not the applier |
| `ISS-02` — PrivacyStatus surface count | **Confirmed: five files, six comments.** `grep -rln` over `apps/web/src` returns **5** files; `grep -rn` returns **6** comments — `app/petitions/new/page.tsx` carries two (`:13` file header, `:134` inline). The six citations already in the row are all correct |
| `ISS-03` — L781 stale self-reference | **Confirmed.** "Version 1.2.0 corrects…" against L175's "This version does not re-scope…" |
| Scope | The report says "**Do not re-open anything else**" — nothing else is touched. No content claim is altered by any op in this spec |

## How to apply

- **Every FIND block is WHOLE LINES** — each begins at a line start and ends at the end of a full
  line. There are **no substring ops** in this spec.
- Each FIND was extracted from the current file with `sed -n 'X,Yp'`, occurs **exactly once**, and
  none overlap. Do not retype them.
- **After applying, read the two lines FOLLOWING each replacement**, and run a **suffix-duplicate**
  scan, not only a whole-line duplicate scan — a whole-line scanner cannot see the L762 shape,
  which is why it survived cycle 2. A scanner is included in the checks below.
- Fences are four backticks. Apply in any order. If any FIND matches zero times or more than once,
  **abort the whole spec**.
- No file other than `docs/09-release-notes.md` is changed.

---

## CH-01 Header — version 1.3.0 to 1.4.0 (line 5)

Header. Minor bump per the house rule (Medium FAIL), not the patch increment the report suggests.
`Status` stays `In Review`; `Last updated` stays 2026-09-02.

FIND:
````
Version:       1.3.0            (document version; SemVer)
````
REPLACE WITH:
````
Version:       1.4.0            (document version; SemVer)
````

## CH-02 Document history — prepend the v1.4.0 entry (lines 21-22)

FIND is the first two lines of the v1.3.0 entry; REPLACE emits the new v1.4.0 entry and then those
two lines **unchanged**, so the v1.3.0 entry continues intact. Wrapped to ~100 columns.

FIND:
````
> **Document history — v1.3.0 (2026-09-02).** Rework cycle 2 against
> `artifacts/reviews/09-release-notes-v1.2.0-business-cycle2.md` (business, cycle 2 — **FAIL 89%,
````
REPLACE WITH:
````
> **Document history — v1.4.0 (2026-09-02).** Rework cycle 3 against
> `artifacts/reviews/09-release-notes-v1.3.0-business-cycle3.md` (business, cycle 3 — **FAIL 94%,
> 0 Critical / 0 High / 1 Medium / 3 Low**; trajectory 77% → 89% → 94%). The review found every
> substantive defect from cycles 1 and 2 closed and no new one, and recorded the `FR-131` word ban
> clean for a third consecutive version and the HALT intact. **No content claim is changed by this
> version.** Four mechanical repairs:
>
> - **`ISS-01` (Medium) — two pieces of damage this document did to itself at edit boundaries.**
>   §7 carried a duplicated tail of a pre-edit line, dangling after the sentence it repeated; and the
>   re-pin note had lost the five words *"its row describes, it moved"*, which left its closing
>   sentence ungrammatical and removed the one instruction it exists to give — how to read a pin that
>   does not resolve. Both repaired. **Attribution corrected:** the review recorded these as
>   transcription residue; on re-reading the cycle-3 spec, both were **authoring** errors — one FIND
>   block stopped mid-sentence while its replacement re-emitted the sentence whole, and one
>   replacement silently dropped words its own FIND had consumed. The applier did what it was told
>   in both cases.
> - **`ISS-02` (Low).** "all six consuming surfaces" corrected to **five files carrying six
>   comments** — `app/petitions/new/page.tsx` has two. The six citations were already right and the
>   load-bearing claim (every consuming surface carries an explicit non-render comment) was already
>   true; only the count of surfaces was wrong.
> - **`ISS-03` (Low).** §7's owed-item 3 said "Version 1.2.0 corrects the v1 position…" — a stale
>   self-reference, now version-neutral and consistent with the §0 coverage note.
> - **Increment:** the review suggested v1.3.1; the house rule is that a Medium-or-worse FAIL takes
>   at least a **minor** bump, so this is v1.4.0.
>
> `ISS-04` (unresolvable `REF-##` citations) remains PM-accepted and owed at the next Operate cycle.
> **The release verdict is unchanged: HALTED, Gate 2 not approved** (§0, §7).
>
> **Document history — v1.3.0 (2026-09-02).** Rework cycle 2 against
> `artifacts/reviews/09-release-notes-v1.2.0-business-cycle2.md` (business, cycle 2 — **FAIL 89%,
````

## CH-03 Re-pin blockquote — restore the five lost words  [ISS-01(b), Medium] (lines 494-498)

FIND is the **whole blockquote**, all five lines, ending at the end of the final line; the line after
it (L499) is blank. Only the words *its row describes, it moved* are added; every other word is
re-emitted byte-for-byte.

FIND:
````
> **Source pins in the Trace column were re-verified line by line against `HEAD` on 2026-09-02**
> (rework cycle 1, finding `ISS-06`). The rows whose pins were corrected were `REL-LIM-03`, `-05`,
> `-07`, `-08`, `-10`, `-12`, `-13`, `-15` and `-16`; `REL-LIM-09` gained a pin it had been missing.
> In each case code had moved and the pin had not followed. If a pin below does not resolve to what
> **after** 2026-09-02 — that is the difference this line exists to let you tell.
````
REPLACE WITH:
````
> **Source pins in the Trace column were re-verified line by line against `HEAD` on 2026-09-02**
> (rework cycle 1, finding `ISS-06`). The rows whose pins were corrected were `REL-LIM-03`, `-05`,
> `-07`, `-08`, `-10`, `-12`, `-13`, `-15` and `-16`; `REL-LIM-09` gained a pin it had been missing.
> In each case code had moved and the pin had not followed. If a pin below does not resolve to what
> its row describes, it moved **after** 2026-09-02 — that is the difference this line exists to let
> you tell.
````

## CH-04 REL-LIM-18 — "six consuming surfaces" to five files at six sites  [ISS-02, Low] (line 519)

FIND is the **whole `REL-LIM-18` table row**, one line, from line start to line end; L520 is blank.
The row is ~1,900 characters and is reproduced byte-for-byte apart from six words. Verified:
`grep -rln` over `apps/web/src` returns **5** files, `grep -rn` returns **6** comments.

**Diff of this op, so the transcriber can confirm nothing else moved:**

- `all six consuming surfaces carry an explicit non-render comment`
- becomes `all five consuming files carry an explicit non-render comment, at six sites`

FIND:
````
| **REL-LIM-18** | **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | **(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** | `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` | **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all six consuming surfaces carry an explicit non-render comment (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere |
````
REPLACE WITH:
````
| **REL-LIM-18** | **Five shipped code strings still assert the retired "votes are anonymous but not receipt-free" framing, in violation of `FR-131`.** *(Corrected 2026-09-02 from "three" after a full re-sweep of `packages/*/src` and `apps/web/src`.)* **(1)** `packages/protocol/src/flags.js:44` — `MACI_VOTING.description` says votes are anonymous but not receipt-free **and that the UI must say so**. **(2)** `packages/contracts/src/core/Governor.sol:25,28` — the same assertion in contract NatSpec, twice. **(3)** `apps/web/src/i18n/en.ts:400-405` — `banner.notReceiptFreeTitle` uses the banned word "private" about v1 voting and `notReceiptFreeBody` claims nobody can see that a vote was yours. **(4)** `packages/sdk/src/client.js:455-456` — "which is why a vote is anonymous even though it is public". **(5)** `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` — the file's own doc comment repeats the claim and quotes an SDD line instructing the client to state it. | **(3) is the only one a citizen reads** — it is the rendered banner copy on the vote surface, exactly where `FR-131` mandates the opposite text. **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase. (1), (2) and (4) are developer-facing, but (1) was cited by this document, until v1.1.0, as the normative warning text. **The requirement is normative; none of these strings is.** | `FR-131`(a) and its closing sentence (Doc 02 §4.45); `packages/protocol/src/flags.js:44`; `packages/contracts/src/core/Governor.sol:25,28`; `apps/web/src/i18n/en.ts:400-405`; `packages/sdk/src/client.js:455-456`; `apps/web/src/components/ReceiptFreedomBanner.tsx:6-10` (violating comment) and `:41-44` (the render), mounted at `ProposalsAndDebate.tsx:489` | **Open — routed to the engineer** via the project-manager, 2026-09-02, re-scoped from three sites to five on 2026-09-02 (`09-release-notes-v1.1.0-business-cycle1` `ISS-05`). Blocks any v1 customer-facing deployment. *Excluded from the five, and why:* `packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** — it is exported at `packages/ui/src/index.ts:12`, but all five consuming files carry an explicit non-render comment, at six sites (`apps/web/src/app/parties/page.tsx:19`, `app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`, `components/ProvisionalStatus.tsx:11`). **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge. **Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere |
````

## CH-05 §7 — delete the orphaned duplicate tail  [ISS-01(a), Medium] (lines 759-762)

**The only op in this spec that deletes text, and the deletion is the point of it.** FIND is the
last four lines of the "Verified fixed" paragraph **including the orphan**; L763 is blank. REPLACE
re-emits the three real lines byte-for-byte and drops the orphaned fourth, which duplicates the tail
of the sentence L760-761 already complete.

**Deleted, deliberately:** `` flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set). `` — the pre-edit remainder my cycle-3 `CH-13` FIND stopped short of.

FIND:
````
re-read against the record that proves it before publication.)* **Still open from the same readiness
pass:** `REL-LIM-15` (activation still flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff),
`REL-LIM-17` (irrevocable spender set).
flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set).
````
REPLACE WITH:
````
re-read against the record that proves it before publication.)* **Still open from the same readiness
pass:** `REL-LIM-15` (activation still flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff),
`REL-LIM-17` (irrevocable spender set).
````

## CH-06 §7 owed-item 3 — version-neutral self-reference  [ISS-03, Low] (lines 779-783)

FIND is the **whole numbered list item**, five lines; L784 is blank, so the list boundary is intact
and the item after it is untouched. Matches the §0 coverage note, which already reads "This version".

FIND:
````
3. **A release-notes refresh covering the Definition-A (v1) application drops** — party creation,
   the parties directory, join/leave, membership history, the counting-tier gate, and the proposals
   and deliberation flow — at the **next release cut**. Version 1.2.0 corrects the v1 position
   wherever this document already asserted it, but deliberately does not re-scope the release; see
   the coverage note in §0.
````
REPLACE WITH:
````
3. **A release-notes refresh covering the Definition-A (v1) application drops** — party creation,
   the parties directory, join/leave, membership history, the counting-tier gate, and the proposals
   and deliberation flow — at the **next release cut**. This version corrects the v1 position
   wherever this document already asserted it, but deliberately does not re-scope the release; see
   the coverage note in §0.
````

---

## Op index

| Op | Lines | Finding | What it does |
|---|---|---|---|
| CH-01 | 5 | header | Version 1.3.0 → **1.4.0** (minor, per house rule) |
| CH-02 | 21–22 | header | v1.4.0 history entry prepended, wrapped |
| CH-03 | 494–498 | **`ISS-01`(b)** M | Restores *"its row describes, it moved"* to the re-pin note |
| CH-04 | 519 | `ISS-02` L | "six consuming surfaces" → "five consuming files … at six sites" |
| CH-05 | 759–762 | **`ISS-01`(a)** M | Deletes the orphaned duplicate tail in §7 |
| CH-06 | 779–783 | `ISS-03` L | "Version 1.2.0 corrects…" → "This version corrects…" |

`ISS-04` (`REF-##` register empty) — **no op**, PM-accepted, owed at the next Operate cycle.

## Post-transcription checks

**Run check 1 first — it is the one that would have caught all three boundary defects.**

1. **Suffix-duplicate scan** (not a whole-line duplicate scan — that shape is invisible to one):

   ```
   node -e "const L=require('fs').readFileSync('docs/09-release-notes.md','utf8').split('\n');
   let h=0; for(let i=0;i<L.length;i++){const a=L[i].trim(); if(a.length<25)continue;
   for(let j=0;j<L.length;j++){ if(i===j)continue; const b=L[j].trim();
   if(b.length>a.length&&b.endsWith(a)){console.log('L'+(i+1)+' is a suffix of L'+(j+1));h++;} } }
   console.log(h?h+' hit(s)':'clean');"
   ```

   Expected: **clean**. Against the current v1.3.0 file it returns exactly one hit (L762), so a
   non-clean result after transcription means CH-05 did not apply, or new residue was created.
2. **Read the two lines following every replacement.** Six ops, twelve lines. This is the step whose
   absence let the same defect class through three versions running.
3. Search for `its row describes, it moved` — expect **two** hits, and both are correct: one
   **live** in the re-pin blockquote (the restored text — read it as a whole sentence, ending
   "…let you tell."), and one **quoted** in the v1.4.0 history entry, which names the five words
   that had been lost. A count of one means CH-03 did not apply.
4. Search for `irrevocable spender set` — expect **1**, not 2. Two means CH-05 did not apply.
5. Search for `six consuming surfaces` and for `Version 1.2.0 corrects` — each is expected to
   survive **exactly once, and only inside the v1.4.0 history entry**, where it is quoted as the
   wording being corrected. **Neither may appear anywhere else** — not in `REL-LIM-18` (CH-04), not
   in §7's owed-item 3 (CH-06). Check the line numbers, not the counts: this is the
   correction-of-record pattern the cycle-3 review explicitly endorsed, in which a quoted error is
   not a live claim.
6. Confirm the header reads `Version:       1.4.0`, `Status:        In Review`,
   `Last updated:  2026-09-02`, columns aligned.
7. Confirm §0 still reads "**This release has NOT been approved and MUST NOT be promoted to
   production**", §7 still opens **HALTED** on two independently sufficient reasons, and
   "Approvals (Gate 2): **None.**" is intact.
8. Confirm the `REL-LIM` table still has **18** rows, and that §7's owed-items list still runs
   **1, 2, 3** with item 3 intact — CH-04 and CH-06 are the only ops touching a table row and a
   list item respectively.
