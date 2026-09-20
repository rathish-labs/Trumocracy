# Document Review Report — Doc 03 Architecture & Design (SDD) v2.12.0

<!-- Produced by the document-review skill (a shared capability, not a ninth agent).
     The reviewer scores and lists issues only; it never edits the document. -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.12.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 89%
Critical: 0
High: 1
Medium: 2
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)
Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`

> **Independence note (disclosed, not disqualifying).** Doc 03's `Approvers:` line names
> Rafael Duarte as the Security approver. The document-review independence rule is that the
> reviewer is not the *owning role*; the owning role is the architect. Being a named sign-off
> approver on a document one did not author is not authorship. Disclosed for completeness.

---

## 1. Summary (BLUF)

Doc 03 v2.12.0 does the hard part of the FR-131 cascade correctly and verifiably. The v2.7.0
"status visibility" ruling that let "Verified — private" render against a v1 conventional
backing is properly OVERRULED and annotated in place, not deleted. §10.12.3's three-state
table, backing-aware sub-table, v2.7.1 normative note and banned-words analysis now agree with
each other and — checked byte for byte — with the shipped constants `VER_TITLE_V1 = 'Verified'`
and `VER_TITLE_V2 = 'Verified — private'` in `packages/ui/src/PrivacyStatus.tsx` at HEAD
(84e2203). The new clause 9 is consistent with clause 7 and with the code, including
`aria-label={title}`. §13's repayment cell, §10.13.6 DES-098 clause (1) and the §15 FR-131 row
all now state the FR-131 truth. All five carried Lows from v2.11.2 are genuinely discharged,
each verified at its own location rather than taken on the changelog's word. Transcription is
clean: no leaked `FIND:` / `REPLACE WITH:` / four-backtick markers, no duplicated line tails,
no words eaten at a boundary. The changelog does not over-claim — a change from this document's
own history, and worth recording as such.

It FAILS on two things. First, and most seriously: a **newly added** §15 traceability cell
asserts a chain state that contradicts Doc 08. Line 2979 states "FR-131 has no `US`/`TC`/RTM
row yet". Doc 08 v2.7.0 (Approved) carries the FR-131 Must row with `DES-096 · ADR-024`,
`EP-06 ▸ FE-058 ▸ US-0134` and ten TCs — and the same table cell names `US-0134` four clauses
earlier. With Gate 2 approaching, where reviewer-qa must certify RTM zero-gaps, a §15 register
publishing "no RTM row" for a Must requirement that in fact has an OPEN, evidence-bearing one
is a material correctness defect. Second: this version minted a normative rule that the FR-131
ban reaches voting-adjacent **status** copy, then dispositioned only one of the two badge
states that carry a banned word. The `anon` state's title is the bare word "Anonymous", and
the `anon` copy analysis is the only one of the three state analyses with no banned-word line
at all.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`89%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (2)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.60 | FR-131 (a)–(d) and the closing sentence are covered at §10.13.6, §13, §15 and §10.12.3. Deductions: ISS-03 and ISS-04. |
| T2 Soundness | 20 | 97 | 19.40 | The reversal is argued from the requirement text, not from authority. Clause 7 left intact + clause 9 as its title-side twin is the right call. ADR sweep reported, not edited. |
| T3 Traceability & IDs | 20 | 70 | 14.00 | ISS-01 (High) and ISS-02 (Medium). IDs themselves stable — no renumbering, no reuse. |
| T4 Security & failure modes | 15 | 95 | 14.25 | Fail-honest default stated for the title as for the subtitle; `aria-label` required to follow the selected title; DES-096 accessor debt stated with a no-set/force/skip constraint. |
| T5 Completeness & testability | 15 | 94 | 14.10 | Every code and test citation opened and verified. All five carried Lows discharged. Deduction: ISS-05. |
| T6 Convention compliance | 10 | 96 | 9.60 | 2.11.2 → 2.12.0 (minor bump, correct floor), `Status: In Review`, ISO-8601 dates, RFC 2119, annotate-don't-delete applied consistently. |
| **Total** | **100** | — | **88.95 → 89%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (line) | Finding | Required fix |
|----|----------|-----------|-----------------|---------|--------------|
| ISS-01 | **High** | T3 | §15, line 2979 | "FR-131 has **no `US`/`TC`/RTM row** yet" — false; contradicted by Doc 08 v2.7.0 and by the same cell four clauses earlier | State the true position: the FR-131 Must row is OPEN (G-PHASE3) with three TCs Blocked |
| ISS-02 | **Medium** | T3 | §15, line 2923 | Cell edited this version still reads "US layer: owed — PO to mint US from FR-131"; US-0134 exists | Replace with the true state; name any residue instead of asserting the US is unminted |
| ISS-03 | **Medium** | T1 | §10.13.6 line 1957 vs §10.12.3 lines 1666, 1691–1701, 1720 | New status-copy ban dispositions the `ver` title but leaves the `anon` title ("Anonymous") undispositioned | Add an `anon`-title banned-word disposition and cross-reference it from the §10.13.6 rule |
| ISS-04 | Low | T1 | §10.11, line 1571 | "individual votes are private, aggregate public (FR-103)" survived the FR-131 sweep | Annotate to "not published individually"; widen the standing sweep to bare-word scanning |
| ISS-05 | Low | T5/T6 | §10.12.3, line 1660 | The note quotes one annotation as applying to "each" of title and subtitle; the title's differs | Quote both, or drop the quotation marks and describe them |

> **Low** issues do not block the pass bar. The **High** and the two **Mediums** each force the FAIL.

### 4.1 Issue detail

**ISS-01 (High) — §15, line 2979.** The new "v2.12.0 DES-094 title correction + DES-098
alignment" sub-table's DES-098 row ends:

> **Still owed against DES-098** (unchanged by this version, carried openly): the
> **acknowledge-to-proceed control** on SCR-13 is not built — the banner is non-dismissable but
> has no acknowledgement step (US-0134); and FR-131 has **no `US`/`TC`/RTM row** yet

The final clause is false, and the cell contradicts itself — it names `US-0134` in the clause
immediately before. **Doc 08 v2.7.0 (Approved), line 717** carries the FR-131 Must row:
`BR-005, BR-009 → FR-131 → DES-096 · ADR-024 → EP-06 ▸ FE-058 ▸ US-0134 → TC-3476, TC-3481,
TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535` — five Pass (obs.), two
Pass (inh.), three Blocked; row **OPEN (G-PHASE3)**. Gap-log entry 117 records the same.
**Doc 05 v2.5.0, line 687** carries `FE-058 → US-0134` traced to `FR-131; BR-005`, and line 2008
states "US-0134 delivers the notice". The row has existed since Doc 08 v2.2.0 (2026-08-25), so
the claim was never true in this window. The *first* half of the clause — acknowledge-to-proceed
not built — is verified TRUE and must stand.

*Required fix:* state what is actually owed — the FR-131 Must row is **OPEN in Doc 08 v2.7.0
(G-PHASE3), with TC-3476, TC-3481 and TC-3487 Blocked** because SCR-13/SCR-14 are unbuilt
(Doc 06 §7 item 21) — not that no row exists. While the cell is open, reconcile the DES half:
Doc 08 assigns FR-131 → `DES-096 · ADR-024`, whereas Doc 03 §15 assigns it to `DES-098` and now
also `DES-094`. State the intended assignment so the tester can align Doc 08 rather than guess.
**Do not edit Doc 08 from Doc 03** — that is the tester's row.

**ISS-02 (Medium) — §15, line 2923.** The v2.4.0 sub-table's `FR-131 → DES-098` row was edited
in this version to add the fourth banned word and the badge rule, but its closing sentence was
left standing: *"US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice
surface."* `US-0134` already exists and covers exactly that surface (Doc 05 v2.5.0 FE-058: "the
signed ballot contract — cast, change, and tally exposed as a verifiable seam with honest
pre-action notices"), and `TC-3481` is already written against SCR-13/SCR-14 — **Blocked, not
absent**. This is the "fixes stopped at the section boundary" pattern that this document's own
v2.11.1 changelog records as the lesson of that cycle: the owner had the cell open and corrected
one half of it.

*Required fix:* replace "US layer: owed — PO to mint US…" with the true state — **US-0134
(FE-058 · EP-06) exists and covers the notice surface; TC-3481 is written against SCR-13/SCR-14
and is Blocked pending those screens.** If the architect's view is that US-0134 does not *fully*
cover the DES-098 surface, say that, name the residue and route it — but do not assert the US is
unminted.

**ISS-03 (Medium) — §10.13.6 line 1957, read against §10.12.3 lines 1666, 1691–1701 and 1720.**
v2.12.0 mints a normative rule — *"this ban reaches voting-adjacent **status** copy, not only
notice text"* — and then dispositions only ONE of the two badge states whose copy contains an
FR-131 banned word. The `anon` state's **title is the bare word "Anonymous"**, hardcoded
alongside the `ver` title in the same `STATE_CONFIG` of the same component
(`packages/ui/src/PrivacyStatus.tsx`), and its subtitle "Nothing you do here is linked to you"
is a claim clause 8 expressly concedes is not true of the operator in v1 (`phone_hash` /
`subject_id_hash`; the TRAI chain to a real-world identity). The `anon` copy analysis is **the
only one of the three state analyses with no banned-word line at all** — the `pub` analysis
states "No banned words"; the `ver` analysis now devotes four paragraphs to one.

**My ruling on the merits: the `anon` title is probably compliant and should survive.** An
`anon`-state user is open-tier and, by FR-122/FR-123, cannot cast a binding vote, so the badge
cannot be describing that user's v1 *voting behaviour*, and clause 8's contexts — browsing
(1.2), party-joining (1.6), endorsing (2.3) — are all non-vote. FR-131's ban is scoped to the
four words "to describe v1 voting behaviour", and on that scoping `anon` is outside it.

**But the document does not say so, and that is the defect.** v2.12.0's own diagnosis of v2.7.0
is that an unstated or under-scoped disposition is precisely what ships a banned word; its own
words are *"A note that guards one cell of a two-cell row does not guard the row."* The same
shape recurs here at component scale — an analysis that covers the subtitle cell but not the
title cell. It is also live rather than theoretical: **Doc 04 §0.5 S5 is a BUILD-FAILING
denylist** over `apps/web` and `packages/ui` user-facing strings forbidding any v1 string that
asserts anonymity except inside a DES-098 notice denying it — which the shipped `anon` title
does, verbatim, outside any notice.

*Required fix:* add an `anon`-title banned-word disposition to the §10.12.3 `anon` copy
analysis, in the same form the `ver` and `pub` analyses already use, and cross-reference it from
the §10.13.6 status-copy rule so that rule names its own scope. State the basis explicitly — the
`anon` state renders only for open-tier users who cannot cast a binding vote (FR-122/FR-123), so
the badge makes no claim about v1 voting behaviour and FR-131's ban is not engaged — and record
a re-open trigger, as the `anon` subtitle decision already does. Then reconcile with Doc 04 S5 so
the build-failing scan carries the matching carve-out (routed to Doc 04, same owner; recorded
there as ISS-08).

**ISS-04 (Low) — §10.11 governance-constants table, line 1571.** The "Conduct-vote minimum
quorum" rationale cell reads *"…individual votes are private, aggregate public (FR-103)"* — an
affirmative "votes are private" surviving in a version whose declared purpose is that "this
document stops asserting the claim the rest of the project has already retired". The sweep was
keyed to five phrases from the routing note and this phrasing falls outside all of them.
*Mitigating:* this is internal design rationale, not product copy — FR-131 binds the v1
product's UI, README and public-facing materials — and "aggregate public" makes the intended
meaning (not published per-individual) recoverable. It nonetheless remains the claim §10.12.3
now rules a reader will not parse that finely.

*Required fix:* annotate in place, e.g. *"individual conduct-vote choices are **not published
individually**; the aggregate is public (FR-103). In v1 the platform database CAN see them
(FR-131(b)); 'private' here means unpublished, not unseen."* Also widen the standing FR-131
sweep from the five routed phrases to a bare-word scan of "private" / "anonymous" / "secure" in
vote-adjacent prose, so the next cascade does not have to rediscover this.

**ISS-05 (Low) — §10.12.3, line 1660.** The v2.7.1 normative note, as re-scoped at v2.12.0,
states that the `ver` row *"preserves the v2 reference **title and** subtitle, **each** annotated
\"(v2 ZK backing only — see backing-aware copy below).\""*, presented as a verbatim quotation.
The subtitle cell carries exactly that string; the **title** cell carries a different, longer
one: *"(v2 ZK backing only — the v1 default title is \"Verified\"; see backing-aware copy
below)"*. A quotation matching only one of the two cells it claims to quote is a
self-inconsistency in the very note whose job is to stop a reader taking the wrong cell as
normative. *Required fix:* quote both annotations, or drop the quotation marks and describe them.

### 4.2 Verified NOT defects (checked, and recorded so cycle 2 need not re-litigate them)

- **Clause 9 is consistent with clause 7 and with the code.** Clause 9 (line 1722) requires the
  v2 title ONLY on `getProperties().unlinkable === true`, the v1 title in every other case
  (false / call fails / malformed / absent), and the `aria-label` to carry the *selected* title.
  The component does exactly this:
  `state === 'ver' && backingProperties?.unlinkable === true ? VER_TITLE_V2 : cfg.title`, with
  `STATE_CONFIG.ver.title = VER_TITLE_V1` and `aria-label={title}`. Clause 7 is untouched and
  remains correct — it is subtitle-scoped and its body says so. The split is sound and
  self-documenting; merging the two clauses would be a matter of taste, not correctness.
- **Verbatim match to the code constants.** The three-state table (line 1666) and the
  backing-aware sub-table (lines 1674–1675) carry "Verified" and "Verified — private" with the
  same U+2014 em dash and the same spacing as `VER_TITLE_V1` / `VER_TITLE_V2`. Byte-checked with
  `cat -A` on both sides.
- **The v2.7.0 ruling is superseded, not deleted.** The v2.7.0 changelog entry (line 474) carries
  a `[REVERSED IN PART at v2.12.0 …]` prefix with the original text standing; the banned-words
  analysis (lines 1677–1687) marks the ruling SUPERSEDED, retains the v2.7.0 text verbatim, and
  states the rule now in force. Annotate-don't-delete honoured throughout.
- **§10.13.6 DES-098 and §15 align with FR-131.** Element clause (1) names all three FR-131(a)
  denials; (2) matches (b); (3) matches (c); clause (d) is covered by the existing extension
  paragraph. The banned-words bullet lists all four words with the full UI / README /
  public-material scope, states the status-copy reach, records the overruling, and preserves the
  mandated-negation carve-out — correct, since a blanket substring ban would fail FR-131(a)'s own
  required wording. That is exactly why UT-0887 is negation-aware.
- **§13 "Public tallies in Phase 1"** (line 2852) now states the FR-131 truth, and its
  attribution of the retired quotation to **ADR-024 §(d)** is correct: the quotation sits at
  `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md:356`, inside §(d), which spans
  lines 326–365. No mis-citation. ADR-024's "What v1 MUST NOT say or imply" list independently
  supports the reversal — it forbids "Your vote is private" outright.
- **All five carried Lows are genuinely discharged**, each verified at its location: (1) Q17's
  body at line 3001 now reads "exercises **none of the three**", and the v2.11.2 changelog
  over-claim is annotated in place as the over-claim it was; (2) the `Source:` pin is re-pinned
  to SRS v2.16.3, which is Doc 02's actual Approved version, and FR-131 §4.45 is indeed unchanged
  across the delta; (3) the "Still routed … Doc 02 §13 (h)" line is annotated as discharged, with
  the correct nuance that (h) itself stays open as a PO question; (4) §10.13.12's `Traces:`
  footer (lines 2446–2452) annotates FR-107 as related-only and expressly NOT a DES assignment,
  citing Doc 08's OPEN row with DES = none; (5) §10.13.3 (line 1914) now carries the DES-096
  ballot-state-accessor clause matching the §13 debt row. The header's claim that no Low is
  carried forward holds.
- **Transcription residue: none.** Scanned both reviewed documents for `FIND:`, `REPLACE WITH:`
  and four-backtick fences (zero hits), and for repeated substrings of 30+ characters within a
  line (three hits, all pre-existing box-drawing rules in ASCII art). No boundary word loss found
  reading the diff.
- **Changelog accuracy.** Every code and test citation in the Change block was opened and read:
  `PrivacyStatus.tsx` constants and selection logic; `flags.js` `MACI_VOTING.description`;
  `en.ts` `banner.notReceiptFreeTitle`/`Body`; `Governor.sol` NatSpec lines 26–32;
  `client.js:458–459` (`#tenureSignals` JSDoc); UT-0759's four paths; UT-0887; UT-0888 at
  `packages/protocol/test/party-and-regions.test.js:302`. All present, all as described. The
  "Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02)" citation is precise —
  v1.3.0 is where ISS-03 re-based the `PrivacyStatus.tsx` title from a watch item to a pre-mount
  blocker. **No over-claim found in this changelog.**

## 5. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), the owning role.** The rework MUST produce a
**new version** — a Medium-or-worse finding sets a **minor** bump as the floor, so **v2.13.0**,
with `Status: In Review` — after which this loop re-reviews as cycle 2.

Three fixes are required: **ISS-01 (High)**, **ISS-02 (Medium)** and **ISS-03 (Medium)**. ISS-04
and ISS-05 are Low and may be taken on this touch or carried with an explicit "fix first on any
future touch" note in the Status block, per this document's own convention. ISS-01 and ISS-02 are
one-cell edits in §15; ISS-03 is one paragraph plus a cross-reference. **None of them touches the
FR-131 title/notice copy work, which is correct and must not be re-opened.**

**Routed elsewhere (reported, not scored against Doc 03):**

- **Engineer** — `packages/ui/src/PrivacyStatus.tsx` still pins its normative reference to
  "Doc 03 §10.12.3 **v2.7.1**" and attributes the title rule to clause 7 ("The same rule applies
  to `ver.title`"). Doc 03 v2.12.0 mints **clause 9** for it. The behaviour is right; the citation
  is stale. Cheap fix at the next touch of that file. Not a Doc 03 defect.
- **Tester** — Doc 08's FR-131 row assigns `DES-096 · ADR-024`, while Doc 03 now also assigns
  `DES-094` (title) and `DES-098` (notice); TC mints for UT-0759 / UT-0887 / UT-0888 are owed per
  Doc 06 v2.5.1 §7 item 26(c). The FR-131 Must row stays OPEN either way — a Gate-2 input, and
  reviewer-qa is Accountable for its zero-gap state.
- **Approver** — ADR-024 §(d)'s quotation of the retired §13 wording is now contradicted by Doc 03
  §13. The architect's recommendation — a one-line dated amendment note, or leaving it as an
  accurate record of what §13 said on 2026-08-23 — is sound either way. Not a Doc 03 defect: §13
  states the contradiction openly, so a reader arriving from the ADR is not misled.

## 6. Evidence (what was actually run and read)

- `git diff -U6 -- docs/03-architecture-design-sdd.md` — full diff read line by line.
- Normative source: `docs/02-requirements-srs.md` §4.45 (Approved **v2.16.3**), FR-131 clauses
  (a), (b), (c), (d) and the closing four-word ban. **FR-131 has four clauses, not five.**
- Code at HEAD (`84e2203`): `packages/ui/src/PrivacyStatus.tsx`;
  `packages/ui/test/PrivacyStatus.test.tsx` (UT-0759 — four paths confirmed);
  `packages/protocol/src/flags.js` (`MACI_VOTING.description`);
  `apps/web/src/i18n/en.ts` (`banner.notReceiptFree*`);
  `apps/web/test/safety-surfaces.test.tsx` (UT-0887 — negation-aware);
  `packages/protocol/test/party-and-regions.test.js` (UT-0888);
  `packages/contracts/src/core/Governor.sol`; `packages/sdk/src/client.js`.
- Cross-documents: `docs/08-traceability-matrix.md` v2.7.0 (FR-131 row 717; gap entry 117);
  `docs/05-product-backlog.md` v2.5.0 (FE-058 / US-0134); `docs/09-release-notes.md` v1.4.0
  (REL-LIM-18; the ISS-03 history at lines 56–95);
  `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md` §(d).
- Survivor greps across both reviewed documents for `anonymous but`, `votes are anonymous`,
  `vote is anonymous`, `Verified — private` and `status visibility` — every hit opened and
  classified. All Doc 03 hits are the corrected text, an explicitly SUPERSEDED or historical
  quotation, or the legitimate v2 case.
- Residue scans: leaked-marker grep (0 hits); repeated-substring scan (3 hits, all pre-existing
  ASCII box-drawing rules).

## 7. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
