# Document Review Report — Doc 09 Release Notes v1.5.0 (business, cycle 1)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (sre, Chen Wei) does every rework as a new
> version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (2026-09-06).

```
Reviewed document: 09-release-notes.md
Document version: 1.5.0
Review mode: business
Reviewer role: tester (neutral — sre Chen Wei owns Doc 09; PM-assigned)
Score: 93%
Critical: 0
High: 0
Medium: 3
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 09 v1.5.0 is the `REL-LIM-18` closure pass. **Every substantive claim it makes about the fix is
true and I verified each one against source rather than against the sre's narrative**: commit
`0a5c542` (PR #19, merged to `main` as `84e2203`) exists and touches the six sites; all six read as
fixed at `HEAD`; every post-fix line pin in the register row resolves *exactly* (`flags.js:42-47`,
`Governor.sol:25-32`, `en.ts:400-408`, `ar.ts:359-366`, `client.js:450-459`,
`ReceiptFreedomBanner.tsx:3-17`, `PrivacyStatus.tsx:205`/`:212`/`:323-326`); the three regression
guards `UT-0887`/`UT-0759`/`UT-0888` are present at their cited lines; `npm test` is **619 green,
exit 0**; `PrivacyStatus` is still unmounted at all six non-render comment sites; the `FR-131` word
ban is clean document-wide (every occurrence of the four banned words is negated, a quotation of the
ban itself, a flag name, or a v2 reference); the halt, the "deployed nowhere" statement and the
0.1.0 testnet-rehearsal posture are intact; the annotate-don't-delete treatment of the register row
is genuinely verbatim (I diffed it against `HEAD:docs/09-release-notes.md:555` — character for
character in all four cells); and **there is no transcription residue** (no duplicated tails, no
leaked `FIND:`/`REPLACE WITH:`/four-backtick markers, no boundary word-loss; all 11 spec ops applied
cleanly).

It nevertheless **FAILS**, on three defects of a single class — **currency and completeness claims
that the record no longer supports**. This document's own history records that class three times
(the cycle-1 Critical, the cycle-2 High, the cycle-3 Medium were each a summarising sentence tidier
than the rows beneath it). Here: §0 still tells a Gate-2 reader that this document carries a passing
review "for its **current version**" while the current version is 1.5.0 and carries none; the Links
table still pins Doc 06 at **v2.4.3** while §0 and the internal record now say v2.5.1 — in the very
version whose change note claims the stale Doc 06 pin was corrected; and the Changelog still says it
was cut at `HEAD (e039ff2)` and is "**complete as of `HEAD`**" while omitting `0a5c542`, the commit
this whole version exists to record. None of the three is transcription damage — none of the eleven
ops touched those lines, so all three are authoring omissions by the owning role.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS requires both rows all "yes".

## 3. Per-criterion scores (business rubric)

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 97 | 19.40 | The release verdict (**HALTED**, Gate 2 not approved) is unmissable and unchanged; the two independently sufficient halt reasons are restated; "the fix is merged to trunk and **deployed nowhere**" appears in the header, the document history, the customer bullet, the register row and §7 — five times, and never softened. The distinction "closing a blocker ≠ lifting the halt" is made explicitly in three of those places. |
| B2 Completeness | 15 | 88 | 13.20 | All sections present; no placeholders (unfilled figures are explicit `N/A — not yet measured`). The `REL-LIM-18` row satisfies annotate-don't-delete in all four cells and states **both** required facts (pre-mount blocker cleared **and** component still unmounted). Deducted for **ISS-03**: the Changelog asserts completeness as of `HEAD` while missing the release's headline commit. |
| B3 Traceability & IDs | 20 | 92 | 18.40 | Every `REL-LIM`, `FR`, `UT`, `DES`, commit and report citation I checked resolves. Post-fix source pins are line-exact, which is unusual and worth recording. Deducted for **ISS-02**: the Links table's Doc 06 pointer is a stale pin contradicting two other cells in the same document. |
| B4 Correctness & consistency | 15 | 85 | 12.75 | No false claim about the code, the commit, the tests or the halt — I looked hard for one. Deducted for **ISS-01** (a false statement inside a Gate-2 precondition row) and the internal contradiction in **ISS-02**. |
| B5 Testability | 15 | 97 | 14.55 | The closure is evidenced, not asserted: three named regression guards at named lines, a re-run suite figure, and an explicit statement of what did **not** change (`REL-LIM-02` remains open). Exit criteria for the halt are falsifiable and named. |
| B6 Convention compliance | 15 | 97 | 14.55 | ISO-8601 throughout; RFC 2119 used correctly; named-owner rule held (Chen Wei, and every routing names a person); minor semver bump for a content state change is the right increment; strikethrough on the closed row matches the register's house style for `REL-LIM-03`/`-04`/`-07`. |
| **Total** | **100** | — | **92.85 → 93%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | B4 | §0 release-gate status table, row "Passing `document-review` reports" — **line 260** | The row states: *"Docs 01–08, 13 and 14 each carry a passing report in `artifacts/reviews/` as of 2026-09-01, and **this document now carries one for its current version** (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed)."* The current version is **1.5.0** (header line 5, `Status: In Review`), which carries **no** report — this one is cycle 1 against it. The sentence was true at v1.4.0 and the version bump falsified it, in a **Gate-2 precondition cell**, contradicting the document's own header. It also under-reports: `docs/03-architecture-design-sdd.md` is now v2.12.0 and `docs/04-test-strategy-master-plan.md` v1.3.0, and `node hooks/run_gates.cjs --audit` reports both **BLOCK** ("report exists but fails the bar") — which this document already knows, since its own document history and §7 say Doc 03 v2.12.0 "has not yet cleared its document-review". The v1.4.0 report recorded §0 staleness as a Low fixed in that edit; this is that class regressing. | Rewrite the cell so it is true at v1.5.0: this document's **current version carries no passing report** (v1.4.0, the predecessor, closed its loop at PASS 97% on cycle 4), and Docs 03 and 04 are at versions whose cycle-1 reports **failed the bar**. The row's verdict ("Partially met" → still not met) does not change and should not be softened. |
| ISS-02 | **Medium** | B3 | §Links table — **line 807** (`\| Coding & UT \| docs/06-coding-and-ut.md (v2.4.3, Approved) \|`) | The Links table still pins Doc 06 at **v2.4.3**, while §0 line 254 and the internal record's Test-status cell (line 746) both now say **v2.5.1**. The same document therefore states two different current versions of Doc 06. This is not merely stale: the v1.5.0 document history claims the sweep was completed — *"**Two stale facts corrected in passing**, both falsified by the same commit: the §0 gate-status table and the internal record still pinned Doc 06 at v2.4.3 (now v2.5.1)"* — and the Links table is a **third** site with the identical pin that the sweep did not reach. Confirmed authoring, not transcription: none of the eleven ops in `artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md` addresses this line. | Re-pin the Links row to `docs/06-coding-and-ut.md` **(v2.5.1, Approved)**, and correct the change-note sentence so it enumerates the sites actually corrected rather than implying the sweep was exhaustive. |
| ISS-03 | **Medium** | B2 | §Changelog (this release) — **lines 755-758 and 786-788** | The section opens *"Cut from the repository history at `HEAD` (`e039ff2`, 2026-09-01): every non-merge commit touching `packages/` or `apps/`, oldest first"* and closes *"the record above is the release record, and it is **complete as of `HEAD`**."* Both are now false. `HEAD` is **`84e2203`** (PR #19), not `e039ff2`; and `0a5c542` — the commit this entire version records, which touches `packages/protocol`, `packages/contracts`, `packages/sdk`, `packages/ui` and `apps/web` (`git show --stat 0a5c542`) — is **absent from both changelog tables**, while the section asserts completeness by its own stated rule. Every other section of the document was updated to record `0a5c542`; the one section whose declared job is the commit record was not. | Add `0a5c542` (2026-09-05, `fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18 (US-0134)`; merged as `84e2203`, PR #19) to the changelog as its own drop or as a row in the Definition-A (v1) table, re-pin the cut to the current `HEAD`, and re-date the completeness sentence — or narrow the sentence so it no longer claims completeness. Do **not** over-claim in the entry: it is a copy/comment honesty fix plus three regression guards, merged to trunk and deployed nowhere. |
| ISS-L1 | Low | B3 | §7 "Owed by the sre" item 2 — **lines 889-891** | **Carried, not regressed, and correctly disclosed.** The document cites `REF-02` and `REF-04`…`REF-10`; `docs/refine-log.md` is still the 29-line unfilled template with **zero** `REF-` entries — I checked. The v1.5.0 "What this version does NOT change" paragraph states this accurately, including the correct reasoning that no `REF-##` was opened for this closure because `REL-LIM-18` was a pre-release honesty defect, not a production learning. This remains the PM-accepted Low carried across all four prior cycles. | No change required at this version. Non-gating. Still owed by the sre at the next Operate cycle. |
| ISS-L2 | Low | B3 | §"Known issues / limitations", `REL-LIM-18` Trace cell — **line 621** | The post-fix pin `apps/web/src/components/ReceiptFreedomBanner.tsx:3-17` under-covers by one line: the doc comment's instruction *"Do not copy warning text out of this file into any document; cite FR-131"* is at `:18`, and the customer-facing bullet at line 514 ("Do not copy warning text out of the code") depends on exactly that instruction. Every other post-fix pin in the row is line-exact. | Widen the pin to `:3-18` at the next increment. Cosmetic; does not affect the pass bar. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 4a. What I verified against source (not against the sre's claims)

Recorded so the next cycle does not re-do it, and so a disagreement with any line below is checkable.

| Claim in v1.5.0 | Verification | Result |
|---|---|---|
| Commit `0a5c542` exists, is PR #19, merged as `84e2203` | `git show --stat 0a5c542`; `git log --oneline -1` | **True.** 17 files, message matches verbatim including `(US-0134)`. `84e2203` is `HEAD`. |
| Site (1) `flags.js` `MACI_VOTING.description` fixed; pin `:42-47` | read at `HEAD` | **True, pin exact.** States NOT anonymous / NOT receipt-free / NOT coercion-resistant, database CAN see direction, and "The normative wording is FR-131 …, not this string." |
| Site (2) `Governor.sol` NatSpec fixed; pin `:25-32` | read at `HEAD` | **True, pin exact.** Both retired sentences replaced; adds an explicit banned-words instruction. |
| Site (3) `en.ts` banner copy fixed; pin `:400-408` | read at `HEAD` | **True, pin exact.** `notReceiptFreeTitle` no longer uses "private"; body states (a), (b), (c). |
| Arabic mirror `ar.ts`; pin `:359-366` | read at `HEAD` | **True, pin exact.** Mirrors the English honestly. |
| Site (4) `client.js` `#tenureSignals` comment fixed; pin `:450-459` | read at `HEAD` | **True, pin exact.** Scopes the no-commitment property to the signal array and states the v1 truth. |
| Site (5) `ReceiptFreedomBanner.tsx` doc comment fixed; pin `:3-17` | read at `HEAD` | **True**; pin off by one line (ISS-L2). |
| `PrivacyStatus` pre-mount blocker cleared; `VER_TITLE_V1='Verified'` `:205`, `VER_TITLE_V2` `:212`, selection `:323-326` | read at `HEAD` | **True, all three pins exact.** `state === 'ver' && backingProperties?.unlinkable === true ? VER_TITLE_V2 : cfg.title` — fail-honest v1 default, v2 title only on a declared `unlinkable: true` backing. |
| "The component is still not mounted on any shipped surface" — exported at `index.ts:12`, five consuming files, six non-render comments | `grep -rn PrivacyStatus apps/web/src packages/ui/src` | **True, and the six sites match the row's enumeration exactly.** |
| `UT-0887` at `safety-surfaces.test.tsx:112`, `UT-0759` at `PrivacyStatus.test.tsx:198`, `UT-0888` at `party-and-regions.test.js:302` | read at `HEAD` | **All three present at the cited lines.** |
| "619 tests, `npm test` exit 0" | `npm test` re-run 2026-09-06 | **True.** 95 + 151 + 244 + 18 + 16 + 95 = **619 passed**, exit 0. |
| "Doc 03 v2.12.0, `Status: In Review`, has not yet cleared its document-review" (stated twice) | `head -8 docs/03-architecture-design-sdd.md`; `ls artifacts/reviews \| grep 03-architecture` | **True and not stale.** Doc 03 is v2.12.0 / In Review; `03-architecture-design-sdd-v2.12.0-technical-cycle1.md` exists with **Verdict: FAIL** (97%, 1 Medium), so "not yet cleared" is accurate. |
| Annotate-don't-delete: the v1.4.0 row kept verbatim | diffed against `git show HEAD:docs/09-release-notes.md` line 555 | **True in all four cells, character for character**, each introduced by an explicit "kept verbatim" marker. A reader can still see what the five strings were and where. |
| `FR-131` word ban clean (no affirmative "private"/"anonymous"/"receipt-free"/"secure" about v1 voting) | every occurrence read in context (28 lines) | **Clean.** Negated, quoted-as-the-ban, flag names (`private_endorsement`), or v2/`REL-LIM-01`-qualified. |
| Transcription residue | `git diff -- docs/09-release-notes.md`; suffix-duplicate scan; leaked-marker grep | **None.** No duplicated tails, no repeated lines, no `FIND:`/`REPLACE WITH:`/four-backtick leakage, no boundary word-loss. All 11 spec ops applied. |
| Honesty: no implied deployment; 0.1.0 posture unchanged; HALTED intact | §0, §7, header, customer bullet, register row | **Held.** "Deployed nowhere" stated five times; halt reasons 1 and 2 untouched; `REL-LIM-12`/`-15`/`-16` untouched. |
| No claim stronger than the code supports (DES-098 acknowledge-to-proceed still unbuilt, Doc 06 §7 item 26(d)) | §"What this release does not do" lines 494-501 | **Held.** The notice obligations are stated as a future-framed `MUST` against `SCR-13`/`SCR-14`, not as shipped behaviour, and the document states plainly that no ballot screen exists in 0.1.0. (The paraphrase omits FR-131's "the voter MUST acknowledge the notice to proceed" sub-clause; unchanged from v1.4.0, not an over-claim, and not raised as an issue.) |

## 4b. Gate audit

`node hooks/run_gates.cjs --audit` → **exit code 1**. Doc 09 is outside the hook's ten governed
documents and is not listed, as expected. The two blocking rows are **Doc 03 v2.12.0** and **Doc 04
v1.3.0** ("report exists but fails the bar") — neither is owned by this document, and both are
already tracked by the same FR-131 cascade assignment. The RTM block reports 138 Must rows, 16
COMPLETE, 122 OPEN, the two independent signals agreeing — which matches Doc 09 §0, §7 and the
internal record exactly.

## 5. Routing instruction (to the owning role)

**FAIL → route to the sre (Chen Wei), the owning role for Doc 09.** Fix `ISS-01`, `ISS-02` and
`ISS-03`; `ISS-L1` is carried and non-gating, `ISS-L2` is cosmetic. Because the highest surviving
severity is **Medium**, the house rule requires **at least a minor bump**: rework as **v1.6.0** with
`Status: In Review`, then this loop re-reviews at cycle 2 of 5.

Three notes for the rework, in the spirit of this document's own cycle-2 method note:

1. All three Mediums are **currency/completeness** claims, not claims about the fix. The fix
   narrative is sound and verified — **do not re-litigate it**, and do not weaken the closure.
2. All three are **authoring** omissions, not transcription residue: none of the eleven ops in
   `artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md` touches the three affected lines, and the
   transcription itself was clean. Attribute them accordingly in the v1.6.0 history.
3. The pattern to break is the one the change note itself exhibits: a sentence claiming a sweep is
   complete (`"Two stale facts corrected in passing"`, `"complete as of HEAD"`, `"one for its
   current version"`) sitting above records that are correct but not exhaustive. Prefer an
   enumeration to a roll-up, exactly as v1.3.0 did for the re-pin count.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
