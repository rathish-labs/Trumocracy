# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.3.0

<!-- Produced by the document-review skill (a shared capability, not a ninth agent).
     The reviewer scores and lists issues only; it never edits the document. -->

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.3.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect Ravi Deshmukh owns Doc 04)
Score: 89%
Critical: 0
High: 0
Medium: 2
Low: 6
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)
Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`

> **Independence note (disclosed).** Doc 04's `Approvers:` row list includes `reviewer-qa`
> (pending). Reviewing a version is not approving it, and the owning role is the architect.
> Disclosed for completeness.

---

## 1. Summary (BLUF)

The two corrections this version exists to make are both **right**, and right in the way that
matters most: the false premise is removed and the substantive finding is preserved intact.
`A-02.6` and `OPEN-01` no longer assert that v1 votes are anonymous; both now state the FR-131
truth; and `FR-031` / `FR-032` / `NFR-003` remain **Must** guardrails that v1 does not deliver,
`TS-ADV-02` still cannot pass, and `OPEN-01` remains a Definition-B Gate-2 blocker with the same
owners. Weakening a real finding while "fixing" its premise would have been the worse defect and
the architect explicitly avoided it. Every test citation the new `A-02.6` makes was checked
against source and all three hold: `UT-0887`, `UT-0888` and `UT-0759` exist and assert what the
cell says they assert. `ISS-10` carried from v1.2.0 is genuinely discharged — §22's Approvals row
now describes this submission and preserves the row history. Transcription is clean: no leaked
markers, no duplicated tails, no boundary word loss.

It **FAILS** on the document's own §0.5 **S4** — the very criterion this plan uses to test FR-131.
S4 requires testing "the required clauses **(a)–(e)**"; FR-131 (Doc 02 §4.45, Approved v2.16.3)
has clauses **(a)–(d)**. There is no (e). The architect found this, recorded it in the session
note, and routed the *requirement* question to the product-owner — which is the correct instinct
— but then published, in this version's Status block and Changelog, that "§0.5 S4/S5 needed no
change — the honesty doctrine was already stated correctly there" and "Neither S4 nor S5 is
changed". **Routing the question is acceptable; asserting the section is correct while knowing it
is not, and leaving it un-annotated, is not.** That is the over-claim pattern this document family
has repeatedly been marked down for, and it lands in the one section the tester will read next
when minting the owed FR-131 TCs.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`89%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (2)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 84 | 16.80 | `A-02.6` and `OPEN-01` now cover FR-131 (a)/(b)/(c) and the four-word ban correctly. Deductions: S4 — the plan's primary FR-131 criterion — mis-states the clause range (ISS-02) and the word list (ISS-03). |
| T2 Soundness | 20 | 93 | 18.60 | Correcting the premise while preserving the finding is exactly right, and stated as such. Deductions: ISS-04 and ISS-08 (S5's build-failing denylist is unreconciled with the shipped `anon` title Doc 03 approves). |
| T3 Traceability & IDs | 20 | 88 | 17.60 | `UT-0887` / `UT-0888` / `UT-0759` / `OPEN-01` / `TS-ADV-02` / `ISS-10` all correct and verified in source; no renumbering. Deductions: three stale `Source:`-block pins (ISS-05, ISS-06, ISS-07). |
| T4 Security & failure modes | 15 | 96 | 14.40 | `OPEN-01` retained as a Gate-2 blocker with owners unchanged; the "this suite cannot pass in v1 and MUST NOT be run as if a fail were a defect" note is intact; S5 remains build-failing. |
| T5 Completeness & testability | 15 | 86 | 12.90 | ISS-01 (the S4/S5 over-claim) and ISS-04 (`A-02.6`'s "Enforced today by" over-reaches the placement half). |
| T6 Convention compliance | 10 | 91 | 9.10 | 1.2.0 → 1.3.0 (minor — normative test-criterion copy changed; correct floor), `Status: In Review`, `Last updated: 2026-09-06`, ISO-8601 dates. Deduction: the Changelog asserts a verification that does not hold (ISS-01). |
| **Total** | **100** | — | **89.40 → 89%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (line) | Finding | Required fix |
|----|----------|-----------|-----------------|---------|--------------|
| ISS-01 | **Medium** | T5/T6 | Status block line 15; Changelog lines 58–62 | Asserts "§0.5 S4/S5 needed no change — the honesty doctrine was already stated correctly there" and "Neither S4 nor S5 is changed", while the owner's own session note records S4 as wrong | Replace the correctness claim with the true position: S5 is unchanged and correct; S4 is unchanged but carries a known discrepancy, routed to the PO |
| ISS-02 | **Medium** | T1 | §0.5 S4, lines 312–316 | "the required clauses **(a)–(e)**" — FR-131 has (a), (b), (c), (d); there is no (e) | Annotate S4 in place naming the discrepancy, the routing, the owner and the criterion tested pending the ruling |
| ISS-03 | Low | T1 | §0.5 S4, line 314 | S4's forbidden-word list is five words (adds *secret*); FR-131 bans four, and this version's own `A-02.6` says "The four banned words" | Label the fifth word as this plan's own deliberate extension, so the list is not read as a mis-citation of FR-131 |
| ISS-04 | Low | T5 | §8 `A-02.6`, line 1167 | "Enforced today by `UT-0887`, `UT-0888`, `UT-0759`" — true of the content and word-ban halves, not of the "before the ballot is confirmed" placement half | Split the cell: state which half is enforced today and which is owed pending SCR-13/SCR-14 |
| ISS-05 | Low | T3 | `Source:` block, line 31; `OPEN-21` body, line 1720 | Doc 05 pinned at "**v2.3.0**, In Review"; Doc 05 is **Approved at v2.5.0** | Re-pin to v2.5.0 (Approved) in both places; `OPEN-21` itself remains live and correct |
| ISS-06 | Low | T3 | `Source:` block, line 37 | Doc 09 pinned at **v1.3.0**; Doc 09 is **Approved at v1.4.0** | Pin the current version and cite v1.3.0 as where `REL-LIM-18` / `ISS-03` was recorded |
| ISS-07 | Low | T3 | `Owner:` block parenthetical, line 22 | Cites "Doc 03 **v2.11.2** (Approved)" while the `Source:` block in the same header now pins Doc 03 v2.12.0 (In Review) | Re-pin, or mark the citation as historical provenance for the owner name |
| ISS-08 | Low | T2 | §0.5 S5, line 320 | S5's **build-failing** denylist forbids any v1 `packages/ui` string asserting anonymity outside a DES-098 notice; the shipped `PrivacyStatus` `anon` title is the word "Anonymous" | Add the carve-out once Doc 03 dispositions the `anon` title (Doc 03 ISS-03), so the specified scan does not fail the copy Doc 03 approves |

> **Low** issues do not block the pass bar. The two **Mediums** each force the FAIL.

### 4.1 Issue detail

**ISS-01 (Medium) and ISS-02 (Medium) — §0.5 S4, and the claim made about it.**
These are separated because the fixes are in different places, but they are one defect with two
halves. S4 (lines 312–316) reads:

> **S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`)
> MUST be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
> screen-reader operability; **the required clauses (a)–(e)**; and a **forbidden-word scan** …

FR-131 (`docs/02-requirements-srs.md` §4.45, Approved v2.16.3) enumerates **(a)**, **(b)**, **(c)**
and **(d)** — four clauses, each explicitly lettered, with (d) added at Doc 02 v2.12.0. There is
no (e), and nothing in Doc 02's history indicates a fifth was ever minted.

**The routing decision is acceptable; the silence is not.** The architect's session note
(`artifacts/architect-2026-09-06T1000-fr131-cascade.md` §6 item 4) records the discrepancy and
routes it to the product-owner because "I could not determine from Doc 02 whether '(e)' refers to
a fifth clause that was never minted or is a typo for (d), and inventing either reading is a
requirement decision, not an architect's." That reasoning is sound and I endorse it — an architect
must not silently invent or delete a requirement clause. **But the remedy for an unresolved
question is to annotate it, not to leave the criterion asserting a range that does not exist.**
This document's own house convention, applied more than ten times in this same session across
Doc 03, is annotate-don't-delete: mark the text, name the authority, name the owner, state what
governs meanwhile. S4 received none of that. A tester deriving the owed FR-131 TC rows from S4 —
which is the very next task in the queue, since FR-131's Doc 08 row is OPEN and TC mints are owed
— will look for five clauses, find four, and must then either fabricate a fifth or report a false
gap.

The second half is worse than the first. This version's **Status block (line 15)** states:

> §0.5 S4/S5 needed no change — the honesty doctrine was already stated correctly there, and it
> is the standard this correction applies.

and its **Changelog (lines 58–62)**:

> **Why this is a cascade and not a new opinion:** §0.5 **S4** and **S5** already stated the
> correct rule … Neither S4 nor S5 is changed.

S5 is indeed correct and unchanged. **S4 is not correct**, and the author knew it when these
sentences were written — the session note proves the finding predates the document. Publishing an
affirmative statement of correctness about a section one has just found to be incorrect is the
over-claim class this document family has repeatedly been caught on: Doc 03 v2.11.2's changelog
claimed Q17 was "corrected in both its title and body" when only the title was (carried as Low #1
and discharged only this session); Doc 09's cycle-1 Critical and cycle-2 High were both
"summarising sentences asserting something tidier than the records beneath them supported". This
is the same defect, in a live status field.

*Required fixes.* **ISS-01:** amend both sentences to the true position — S5 is unchanged and
correct; S4 is unchanged **and carries a known discrepancy routed to the product-owner**, cited
by location. **ISS-02:** annotate S4 in place, e.g. *"(v1.3.0: FR-131 (Doc 02 §4.45, Approved
v2.16.3) enumerates clauses (a)–(d); this criterion's '(a)–(e)' is unexplained. Whether (e) was a
clause never minted or a typo for (d) is a requirement question, routed to Priya Raghunathan
(PO), not decided here. Until it is answered, this criterion tests the four clauses FR-131
actually states.)"* One annotation closes both halves at the S4 end.

**ISS-03 (Low) — §0.5 S4, line 314.** S4's forbidden-word scan names five words — *private*,
*anonymous*, *receipt-free*, **secret**, *secure* — while FR-131's closing sentence bans four
(*private*, *anonymous*, *receipt-free*, *secure*), and this version's own `A-02.6` says "The
four banned words". A stricter superset is a legitimate test-strategy choice and cannot cause a
false pass, so this is Low. But it is unlabelled, so within one document S4 says five and §8 says
four with nothing reconciling them — in the version whose subject is citation accuracy.
*Required fix:* mark the fifth word as this plan's own deliberate extension beyond FR-131.

**ISS-04 (Low) — §8 `A-02.6`, line 1167.** The corrected pass criterion opens "The UI states,
**before the ballot is confirmed**, that …" and closes "Enforced today by `UT-0887` (rendered
banner, negation-aware), `UT-0888` (flag description) and `UT-0759` (the `ver` badge title …)."
All three tests exist and assert what is claimed — verified in source. But they enforce the
*content* and *word-ban* halves only. The **placement** half is not enforced today: UT-0887
renders `ReceiptFreedomBanner` directly at component level, SCR-13/SCR-14 are not built (Doc 06
§7 item 21), Doc 08 records `TC-3481` — the SCR-13/14 case — as **Blocked**, and Doc 03 v2.12.0
§15 records that DES-098's acknowledge-to-proceed control is not built. Read strictly, "Enforced
today by" attaches to the sentence before it, and the paragraph below the table already warns the
suite cannot pass in v1 — which is why this is Low rather than Medium. *Required fix:* split the
claim, as Doc 03 §15 does for the same facts: name what is enforced today and what is owed
pending the ballot surfaces.

**ISS-05, ISS-06, ISS-07 (Low) — `Source:` and `Owner:` block currency.** Three pins in a header
block that was actively reworked in this version: Doc 05 is pinned "**v2.3.0**, In Review" (line
31) but is **Approved at v2.5.0**, and `OPEN-21`'s body (line 1720) repeats the stale number;
Doc 09 is pinned **v1.3.0** (line 37) but is **Approved at v1.4.0** — v1.3.0 is correct as the
version where `REL-LIM-18` / `ISS-03` was recorded, so the citation is right and only the pin is
stale; and the `Owner:` parenthetical (line 22) still cites "Doc 03 **v2.11.2** (Approved)" while
the `Source:` block four lines below now pins Doc 03 v2.12.0. Each is Low individually — none
changes a conclusion, `OPEN-21` remains live and correct on its merits, and the architect
disclosed in the session note that he verified only the pins he had evidence for. Recorded because
this is the same defect class the sibling document just discharged as its carried Low #2, and
because a `Source:` pin asserting a downstream document is unapproved when it is Approved is a
live status field, not narration.

**ISS-08 (Low) — §0.5 S5, line 320.** S5 is a **build-failing** denylist: "no v1 string may
assert anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote,
zero-knowledge or 'we cannot see it', except inside a DES-098 notice that is explicitly denying
it", scoped over `apps/web` and `packages/ui` user-facing strings. The shipped
`packages/ui/src/PrivacyStatus.tsx` `STATE_CONFIG.anon.title` is the word **"Anonymous"**, outside
any DES-098 notice. So S5 as written would fail the build on copy Doc 03 §10.12.3 approves. This
is Low here because the scan is specified, not built, and because my ruling on the merits (given
in the Doc 03 report as its ISS-03) is that the `anon` title is **compliant** — an `anon`-state
user is open-tier and cannot cast a binding vote (FR-122/FR-123), so the badge makes no claim
about v1 voting behaviour. The defect is that neither document says so. *Required fix:* once
Doc 03 dispositions the `anon` title, give S5 the matching named carve-out. **Sequence Doc 03
first** — S5 should cite the disposition, not invent one.

### 4.2 Verified NOT defects (checked, and recorded so cycle 2 need not re-litigate them)

- **`A-02.6` (line 1167) — false premise removed, substantive point intact.** The retired cell
  ("The UI states that votes are anonymous but **not** receipt-free — the flag's own description
  requires it") is quoted in an inline `_(v1.3.0: …)_` annotation and replaced with FR-131
  (a)/(b)/(c) content plus the four-word ban. The finding it carries is unchanged and unweakened:
  "**This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.**"
  The paragraph beneath the table — "This suite cannot pass in v1 and MUST NOT be run as if a
  fail were a defect" — is untouched and still correct.
- **`OPEN-01` (line 1700) — same treatment, same result.** The false clause is quoted in the
  annotation, the corrected clause states the FR-131 truth, and Impact ("A Must guardrail is not
  delivered at v1. `TS-ADV-02` cannot pass. **Gate-2 blocker unless Doc 02 or the roadmap
  changes**") and Owner (Aisha Nkemdirim / Priya Raghunathan) are byte-identical to v1.2.0. The
  changelog's justification is exactly right and worth quoting back: "A finding that a Must
  guardrail is undelivered does not need a false premise to stand."
- **Every test citation holds.** `UT-0887` at `apps/web/test/safety-surfaces.test.tsx:112` — is
  negation-aware (`affirmativeBannedWords` filters matches preceded by "not "), bans *private* and
  *secure* outright, and separately asserts FR-131 (a), (b) and (c) content against the shipped
  `en.ts` strings. `UT-0888` at `packages/protocol/test/party-and-regions.test.js:302` — guards
  `MACI_VOTING.description`, which now reads "it is NOT anonymous, NOT receipt-free and NOT
  coercion-resistant, and the platform database CAN see vote direction", so the cell's claim that
  "the flag description no longer says [votes are anonymous]" is verified true. `UT-0759` at
  `packages/ui/test/PrivacyStatus.test.tsx:198` — four paths (absent / `false` / `true` /
  malformed), asserting both the rendered title and the `aria-label`.
- **`ISS-10` (the Low carried from v1.2.0) is genuinely discharged.** §22's architect Approvals
  row (line 2006) now reads "Submitted for review · 2026-09-06 · **v1.3.0, Status: In Review**"
  and folds the v1.2.0 / v1.1.0 / v1.0.0 history into a parenthetical rather than deleting it —
  including the honest note that v1.2.0's surviving Low "being that this row still described
  v1.1.0, which is the defect this update closes".
- **§22 "Downstream" re-pin is correct.** Doc 06 is re-pinned from v2.4.3 to **Approved v2.5.1**,
  which matches Doc 06's actual header, and the note correctly records that v2.5.0/v2.5.1 carry
  the FR-131 code drop and UT-0759 / UT-0887 / UT-0888, with "TC mints for these remain owed from
  Doc 07" — consistent with Doc 06 v2.5.1 §7 item 26(c) and with Doc 08's OPEN FR-131 row.
- **Version, status and date discipline.** 1.2.0 → 1.3.0 is the correct floor (normative
  test-criterion copy changed → minor); `Status: In Review`; `Last updated: 2026-09-06`; the prior
  Approved verdict is retained "for the trail" rather than overwritten. No `OPEN-##`, `TS-`,
  `UT-`, `TC-` or `ISS-` identifier was renumbered or reused.
- **Transcription residue: none.** No leaked `FIND:` / `REPLACE WITH:` / four-backtick markers; no
  repeated 30+ character substring within any line; no boundary word loss visible in the diff.
- **Survivor sweep clean.** Greps for `anonymous but`, `votes are anonymous`, `vote is anonymous`,
  `Verified — private` and `status visibility`: every hit in Doc 04 is either a quoted retired
  phrase inside a `_(v1.3.0: …)_` correction annotation, the changelog narrating the correction,
  or the legitimate v2-only `Verified — private` in `A-02.6`'s `UT-0759` citation. No affirmative
  claim that v1 voting is anonymous, private, receipt-free or secure survives anywhere in the
  document.

## 5. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), the owning role.** The rework MUST produce a
**new version** — a Medium finding sets a **minor** bump as the floor, so **v1.4.0**, with
`Status: In Review` — after which this loop re-reviews as cycle 2.

Two fixes are required: **ISS-01** and **ISS-02**, which together are one annotation in §0.5 S4
plus two corrected sentences in the Status block and Changelog. ISS-03 through ISS-08 are Low;
ISS-05/06/07 are three one-token pin updates and should simply be taken while the header is open.

**Sequencing note.** ISS-08 depends on Doc 03: fix Doc 03's ISS-03 (the `anon`-title disposition)
first, then have S5 cite it. Do not write a carve-out into S5 that Doc 03 has not ruled — that
would repeat, in the test plan, the v2.7.0 mistake of a copy ruling living somewhere other than
the copy authority.

**Routed elsewhere (reported, not scored against Doc 04):**

- **Product-owner (Priya Raghunathan)** — the standing question the architect routed: does FR-131
  have, or need, a clause **(e)**, or is S4's "(a)–(e)" a typo for (d)? A one-character fix once
  ruled. Doc 04 must carry the annotation meanwhile; it must not wait silently.
- **Tester (Ji-woo Park)** — TC mints for `UT-0887`, `UT-0888` and `UT-0759` are owed (Doc 06
  v2.5.1 §7 item 26(c)); FR-131's Doc 08 Must row is OPEN (G-PHASE3) with `TC-3476`, `TC-3481`
  and `TC-3487` Blocked. **Do not derive FR-131 TC rows from S4's "(a)–(e)" until the PO rules** —
  FR-131 §4.45 is the normative wording, and it has four clauses.
- **Project-manager** — Doc 05 is Approved at v2.5.0 and Doc 09 at v1.4.0; the architect
  explicitly flagged that he verified only the pins he had evidence for. A pin-currency sweep at
  the next touch would stop this recurring.

## 6. Evidence (what was actually run and read)

- `git diff -U6 -- docs/04-test-strategy-master-plan.md` — full diff read line by line.
- Normative source: `docs/02-requirements-srs.md` §4.45 (Approved **v2.16.3**) — FR-131 clauses
  **(a), (b), (c), (d)** and the closing sentence banning four words across the v1 product's UI,
  README and all public-facing materials.
- Code and tests at HEAD (`84e2203`): `packages/protocol/src/flags.js` (`MACI_VOTING.description`);
  `apps/web/src/i18n/en.ts` (`banner.notReceiptFreeTitle` / `Body`);
  `apps/web/test/safety-surfaces.test.tsx` (UT-0887);
  `packages/protocol/test/party-and-regions.test.js` (UT-0888);
  `packages/ui/src/PrivacyStatus.tsx` (`STATE_CONFIG`, `VER_TITLE_V1` / `VER_TITLE_V2`);
  `packages/ui/test/PrivacyStatus.test.tsx` (UT-0759).
- Cross-documents: `docs/03-architecture-design-sdd.md` v2.12.0 (reviewed in parallel);
  `docs/05-product-backlog.md` v2.5.0; `docs/06-coding-and-ut.md` v2.5.1;
  `docs/07-test-cases-suites.md` v2.4.4; `docs/08-traceability-matrix.md` v2.7.0 (FR-131 row 717);
  `docs/09-release-notes.md` v1.4.0.
- Owner's session note read for intent and for what was knowingly left:
  `artifacts/architect-2026-09-06T1000-fr131-cascade.md`.
- Residue scans: leaked-marker grep (0 hits); repeated-substring scan (0 hits in this document).

## 7. Human decision at the cap (ESCALATED only)

Not applicable — cycle 1 of 5.
