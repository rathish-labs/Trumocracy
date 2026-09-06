# reviewer-qa session note — 2026-09-06T13:00 — Doc 03 v2.12.0 + Doc 04 v1.3.0 technical review

```
Role:        reviewer-qa (Rafael Duarte) — NEUTRAL REVIEWER, document-review skill, technical mode
Date:        2026-09-06
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md (PM, Ana-Maria Petrescu)
Scope:       Score two documents. Read-only: no document, code or test artifact was edited.
             artifacts/memory-index.json NOT modified (pre-registered by the PM, per instruction).
Not done:    No merge sign-off, no Gate-2 readiness summary — this was a document-review cycle,
             not a Gate-2 verification. Nothing was committed.
```

## 1. What I did

Loaded `CLAUDE.md` and the `document-review` skill, then reviewed, in **technical** mode:

| Document | Version | Owner | Report | Verdict | Score | C/H/M/L |
|---|---|---|---|---|---|---|
| `docs/03-architecture-design-sdd.md` | 2.12.0 | architect | `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md` | **FAIL** | 89% | 0/1/2/2 |
| `docs/04-test-strategy-master-plan.md` | 1.3.0 | architect | `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md` | **FAIL** | 89% | 0/0/2/6 |

Verification was against source, not against the changelogs: `git diff -U6` on both documents;
FR-131 at `docs/02-requirements-srs.md` §4.45 (Approved v2.16.3); ADR-024 §(d); code and tests at
HEAD `84e2203` (`PrivacyStatus.tsx`, `PrivacyStatus.test.tsx` UT-0759, `flags.js`, `en.ts`,
`safety-surfaces.test.tsx` UT-0887, `party-and-regions.test.js` UT-0888, `Governor.sol`,
`client.js`); cross-documents Doc 05 v2.5.0, Doc 06 v2.5.1, Doc 08 v2.7.0, Doc 09 v1.4.0.

## 2. Verdicts and the reason for each

**Doc 03 v2.12.0 — FAIL 89%, 0C / 1H / 2M / 2L.** The FR-131 copy work is correct and verified
verbatim against the shipped constants. It fails on traceability and on an incomplete application
of its own new rule.

- **ISS-01 (High)** §15 line 2979 — the new sub-table states "FR-131 has **no `US`/`TC`/RTM row**
  yet". False. Doc 08 v2.7.0 line 717 carries the FR-131 Must row (DES-096 · ADR-024;
  EP-06 ▸ FE-058 ▸ US-0134; ten TCs; OPEN G-PHASE3), gap entry 117. The same cell names US-0134
  four clauses earlier. A §15 register publishing "no RTM row" for a Must requirement in the
  run-up to Gate 2 is a material correctness defect.
- **ISS-02 (Medium)** §15 line 2923 — a cell edited this version still reads "US layer: owed — PO
  to mint US from FR-131"; US-0134 exists (Doc 05 v2.5.0 FE-058) and TC-3481 covers SCR-13/14
  (Blocked, not absent).
- **ISS-03 (Medium)** §10.13.6 line 1957 vs §10.12.3 — the new "the ban reaches voting-adjacent
  **status** copy" rule dispositions the `ver` title (clause 9) but leaves the `anon` title
  ("Anonymous", a banned word, same `STATE_CONFIG`) undispositioned; the `anon` copy analysis is
  the only one of the three with no banned-word line at all.
- **ISS-04 (Low)** §10.11 line 1571 — "individual votes are private, aggregate public" survived
  the sweep. **ISS-05 (Low)** §10.12.3 line 1660 — the normative note quotes one annotation as
  applying to "each" of title and subtitle; the title's differs.

**Doc 04 v1.3.0 — FAIL 89%, 0C / 0H / 2M / 6L.** A-02.6 and OPEN-01 are corrected exactly right —
false premise removed, substantive finding preserved unweakened. It fails on §0.5 S4.

- **ISS-01 (Medium)** Status line 15 + Changelog lines 58–62 assert "§0.5 S4/S5 needed no change —
  already stated correctly" while the owner's own note records S4 as wrong. An over-claim in a
  live status field, and the defect class this document family has repeatedly been caught on.
- **ISS-02 (Medium)** §0.5 S4 lines 312–316 — "the required clauses **(a)–(e)**"; FR-131 has
  (a)–(d).
- **ISS-03..ISS-08 (Low)** S4's five-word list vs FR-131's four; A-02.6's "Enforced today by"
  over-reaching the placement half; stale `Source:` pins for Doc 05 (v2.3.0/In Review vs
  v2.5.0/Approved) and Doc 09 (v1.3.0 vs v1.4.0); the `Owner:` parenthetical still citing Doc 03
  v2.11.2; and S5's build-failing denylist unreconciled with the shipped `anon` title.

## 3. Decisions I made (and the reasoning, so cycle 2 need not re-derive it)

1. **The FR-131 copy work is correct and MUST NOT be re-opened.** Verified byte for byte: the
   three-state table, the backing-aware sub-table and clause 9 match `VER_TITLE_V1 = 'Verified'`
   and `VER_TITLE_V2 = 'Verified — private'` including the U+2014 em dash. UT-0759 asserts all
   four paths and the `aria-label`. None of my findings touches this.
2. **Clause 9 is consistent with clause 7 and with the code — the split is sound.** Clause 7 is
   subtitle-scoped and correct as written; rewriting it would have destroyed the record of what
   was actually shipped against. I explicitly declined to raise the "merge them" preference as a
   finding: it is taste, not correctness.
3. **On the `anon` title (PM-forwarded candidate finding 1): the claim is probably COMPLIANT, the
   silence is the defect.** An `anon`-state user is open-tier and cannot cast a binding vote
   (FR-122/FR-123), so the badge makes no claim about v1 *voting behaviour* and FR-131's ban is
   not engaged; clause 8's contexts (browsing 1.2, joining 1.6, endorsing 2.3) are all non-vote.
   I did **not** accept the finding as "the `anon` copy violates FR-131". I graded the **gap in
   the new rule's scope** — Medium — because v2.12.0's own diagnosis of v2.7.0 is that an
   unstated disposition is what ships a banned word, and because Doc 04 S5 is a *build-failing*
   scan that the shipped string would trip. Recorded as Doc 03 ISS-03 (Medium) and Doc 04 ISS-08
   (Low), sequenced Doc 03 first so S5 cites a ruling rather than inventing one.
4. **On S4's "(a)–(e)" (PM-forwarded candidate finding 2): I had already found this independently
   before the PM's message, and my judgement is unchanged.** Routing the *requirement* question
   to the product-owner is **acceptable and correct** — an architect must not invent or delete a
   requirement clause. What is not acceptable is leaving the criterion un-annotated **and**
   publishing that the section "needed no change". Graded as two Mediums because the fixes are in
   different places.
5. **Doc 04's corrections preserved the substantive findings exactly, and I said so in the
   report.** FR-031/FR-032/NFR-003 remain Must, TS-ADV-02 still cannot pass, OPEN-01 remains a
   Gate-2 blocker with unchanged owners. Weakening a finding while fixing its premise would have
   been the worse defect; the architect avoided it deliberately.
6. **Doc 03's changelog does not over-claim** — every code and test citation was opened and every
   one held. Recorded affirmatively because this document has been marked down for over-claiming
   before, and the improvement should be on the record.
7. **Transcription residue: none in either document.** Zero leaked `FIND:` / `REPLACE WITH:` /
   four-backtick markers; the repeated-substring scan found three hits, all pre-existing ASCII
   box-drawing rules. The PM's mechanical transcription held.

## 4. Gate audit

`node hooks/run_gates.cjs --audit` — both reports were matched to the current versions and both
show BLOCK ("report exists but fails the bar"), which is the correct reading of a FAIL:

```
BLOCK  03-architecture-design-sdd.md v2.12.0 (technical) - report exists but fails the bar: ['03-architecture-design-sdd-v2.12.0-technical-cycle1.md']
BLOCK  04-test-strategy-master-plan.md v1.3.0 (technical) - report exists but fails the bar: ['04-test-strategy-master-plan-v1.3.0-technical-cycle1.md']
```

The audit also shows `07-test-cases-suites.md v2.5.0` and `08-traceability-matrix.md v2.8.0`
BLOCKing with "no report for this version" — the tester's parallel half of this cascade, assigned
to a separate reviewer-qa instance. Outside my scope this session. RTM Must-row state:
138 Must rows, 16 COMPLETE, 122 OPEN; both signals agree; **Gate-2 traceability criterion NOT
MET** — informational here, not a per-stop condition (rulings 2026-08-25 / 2026-08-30).

## 5. Open items (with owners)

1. **Architect (Ravi Deshmukh)** — rework Doc 03 → **v2.13.0** (ISS-01 High, ISS-02 Medium,
   ISS-03 Medium required; ISS-04/05 Low) and Doc 04 → **v1.4.0** (ISS-01, ISS-02 required;
   ISS-03..08 Low). Minor bump is the floor for both. Re-review as cycle 2 of 5.
2. **Sequencing** — fix Doc 03 ISS-03 (the `anon`-title disposition) **before** Doc 04 ISS-08, so
   S5's carve-out cites the copy authority rather than creating a second ruling site.
3. **Product-owner (Priya Raghunathan)** — rule on FR-131 clause "(e)": never-minted clause, or a
   typo for (d)? One-character fix in Doc 04 §0.5 S4 once ruled. Doc 04 must carry the annotation
   meanwhile.
4. **Tester (Ji-woo Park)** — TC mints owed for UT-0887 / UT-0888 / UT-0759 (Doc 06 v2.5.1 §7
   item 26(c)). **Do not derive FR-131 TC rows from S4's "(a)–(e)"** until the PO rules; FR-131
   §4.45 is the normative wording and has four clauses. Doc 08's FR-131 Must row is OPEN
   (G-PHASE3) with TC-3476 / TC-3481 / TC-3487 Blocked; Doc 03 may ask for its DES cell to change.
5. **Engineer (Samuel Oyelaran)** — `packages/ui/src/PrivacyStatus.tsx` pins its normative
   reference to "Doc 03 §10.12.3 v2.7.1" and attributes the title rule to clause 7; Doc 03
   v2.12.0 mints **clause 9**. Behaviour correct, citation stale. Not a Doc 03 defect.
6. **Project-manager** — pin-currency sweep: Doc 05 is Approved v2.5.0 and Doc 09 Approved v1.4.0;
   several documents still pin older versions. The architect disclosed he verified only the pins
   he had evidence for.
7. **Approver** — ADR-024 §(d) quotes the now-retired Doc 03 §13 wording as its precedent pattern.
   A one-line dated amendment note, or leaving it as an accurate record of what §13 said on
   2026-08-23, are both defensible. Not a Doc 03 defect — §13 states the contradiction openly.
8. **Doc 07 v2.5.0 / Doc 08 v2.8.0** have no review report at their current versions and are
   BLOCKing the loop. Assigned to a separate reviewer-qa instance per the assignment; flagged here
   so it is not lost.

## 6. IDs touched (referenced and verified; none authored, none renumbered)

- **Requirements:** FR-131 (clauses (a)–(d) and the closing four-word ban), FR-031, FR-032,
  NFR-003, FR-103, FR-107, FR-122, FR-123, FR-124, H-15, H-16, T-01, T-02.
- **Design / decisions:** DES-094, DES-095, DES-096, DES-097(b), DES-098; clause 7, clause 8,
  **clause 9** (§10.12.3); ADR-023, ADR-024 §(d), ADR-025, ADR-006.
- **Stories / features:** US-0134, FE-058, EP-06.
- **Tests:** UT-0759, UT-0887, UT-0888, TC-3476, TC-3481..TC-3487, TC-3534, TC-3535;
  TS-ADV-02 / A-02.6; §0.5 S4, S5.
- **Defects / findings:** REL-LIM-18, ISS-03 (Doc 09 v1.3.0), OPEN-01, OPEN-21, ISS-10 (Doc 04
  v1.2.0); Doc 03 v2.11.2 carried Lows #1–#5 (all verified discharged); gap-log entry 117.
- **Document versions read:** Doc 02 v2.16.3, Doc 03 v2.12.0, Doc 04 v1.3.0, Doc 05 v2.5.0,
  Doc 06 v2.5.1, Doc 07 v2.4.4, Doc 08 v2.7.0, Doc 09 v1.4.0.
- **Issue IDs I minted (in my two reports only):** Doc 03 ISS-01..ISS-05; Doc 04 ISS-01..ISS-08.

## 7. Files I wrote

- `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md`
- `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md`
- `artifacts/reviewer-qa-2026-09-06T1300-doc03-04-review.md` (this note)

No `docs/` file, no product code, no test artifact and no `artifacts/memory-index.json` entry was
written or modified. Nothing was committed.

## 8. SubagentStop hook block — recorded, and deliberately NOT cleared

On exit the SubagentStop hook (`hooks/run_gates.cjs`) blocked the stop, naming four documents
with no passing review report:

```
- 03-architecture-design-sdd.md v2.12.0 — report EXISTS but Verdict=FAIL, score=89% C=0 H=1 M=2
- 04-test-strategy-master-plan.md v1.3.0 — report EXISTS but Verdict=FAIL, score=89% C=0 H=0 M=2
- 07-test-cases-suites.md v2.5.0 — NO report found for this version
- 08-traceability-matrix.md v2.8.0 — NO report found for this version
```

**This block is the correct outcome of this session, not a defect to be worked around.** The
hook read my metadata blocks exactly as written — the verdicts, scores and severity counts it
reports are mine, verbatim — and is doing precisely what it exists to do: stopping the SOP from
advancing while four documents lack a passing report.

**I did not and will not clear it.** Clearing it would require one of three things, none of which
is available to me:

1. **Raising my scores or flipping either verdict to PASS.** The pass bar is score ≥ 95% AND zero
   Critical/High/Medium. Doc 03 carries 1 High and 2 Mediums; Doc 04 carries 2 Mediums. Every one
   is grounded in document text checked against source and cited by line. Editing a verdict to
   satisfy a mechanical gate would fabricate an approval and defeat the entire purpose of the
   detector-is-not-the-author split. A hook is not a reason to change a finding.
2. **Editing Doc 03 or Doc 04 to fix the findings.** Rework belongs to the **owning role** (the
   architect), as a **new version** — v2.13.0 and v1.4.0. The reviewer is read-only on the
   document by design, and I have no Write or Edit tool for exactly this reason.
3. **Reviewing Doc 07 v2.5.0 and Doc 08 v2.8.0.** Those are assigned by
   `REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` to a **separate reviewer-qa instance**, and
   their owner (the tester) shipped them during this session. They are outside this instance's
   scope; reviewing them here would collapse two deliberately separated reviews into one.

**What actually clears the block:** the architect reworks Doc 03 → v2.13.0 and Doc 04 → v1.4.0
(ISS-01/02/03 and ISS-01/02 respectively) and both are re-reviewed as cycle 2 of 5; and the
second reviewer-qa instance reviews Doc 07 v2.5.0 and Doc 08 v2.8.0. Routed to the
**project-manager** to schedule. Cap is 5 cycles, then ESCALATE to the human approver.

**Withheld:** no merge sign-off and no Gate-2 readiness summary is issued this session. Gate 2
also remains unmet independently on traceability — `--audit` reports 138 Must rows, 122 OPEN.
