# Session memory — reviewer-qa (Rafael Duarte) — 2026-09-06T18:00

**Role:** reviewer-qa, acting as the PM-assigned **neutral document reviewer** (not the Gate-2
merge signer in this session).
**Assignment:** `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` — Doc 02
`docs/02-requirements-srs.md` **v2.17.0**, **business** mode, **cycle 1** (counter restarted for a
new minor version). Owner product-owner (Priya Raghunathan) excluded as author.
**Scope discipline:** I reviewed **only Doc 02**. Other documents blocking in the audit is expected
mid-session; I did **not** self-appoint for any of them (AL-CANDIDATE-3 discipline).

## What I did

- Read `CLAUDE.md`, the `document-review` skill, `docs/templates/document-review.template.md`, the
  assignment, and the prior passing report `02-requirements-srs-v2.16.3-business-cycle4.md` (96%).
- Read the applied spec `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md` and the
  ruling `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` (including §11).
- Verified application mechanically: a Node script confirmed all four `REPLACE WITH` blocks appear
  **verbatim, exactly once** (1629 / 3245 / 6018 / 1662 chars); `git diff HEAD` is **+59 / -12 in
  exactly four hunks**; **no transcription residue** (no `FIND:`/`REPLACE WITH:` leaks, no stray
  fences, no conflict markers, no duplication or truncation at any OP boundary).
- Verified every citation against primary source: FR-014 (line 684), FR-015 (685), NFR-023 (1290),
  §16.3 rows 3190/3191, §16.4 H-16/H-17/H-18 (3369-3371), §16.5 FR-082 + T-03,
  FR-132 §(d)/§(e) (1206), Doc 14 §2.2 (579/601/611-612),
  `packages/protocol/src/flags.js` 52-58, `apps/web/src/i18n/en.ts` 126-129, UT-0869
  (`apps/web/test/join-membership.test.tsx` 444), UT-0887 (`apps/web/test/safety-surfaces.test.tsx`
  125), UT-0870 (`join-membership.test.tsx` 466).
- Checked ID scheme (no reuse/renumber, no new mints), RFC 2119, ISO-8601, named-owner rule,
  annotate-don't-delete, semver bump, and the three carried Lows.
- Wrote `artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md` and ran
  `node hooks/run_gates.cjs --audit` to confirm the hook parses it canonically.

## Verdict

**FAIL — 86%, Critical 0 / High 0 / Medium 3 / Low 7.** Cycle 1 of 5; four cycles remain.
The amendment's **substance is sound and correctly applied**; what fails is its **cascade inside
Doc 02**. Routed to the **product-owner** for **v2.17.1** (patch bump — no normative meaning
changes).

Hook line confirming canonical parse (no filename fallback):
`BLOCK  02-requirements-srs.md v2.17.0 (business) - report exists but fails the bar: ['02-requirements-srs-v2.17.0-business-cycle1.md']`

## Decisions made (and the severity reasoning, so it is not re-litigated)

1. **ISS-01 Medium — no §8 Gherkin scenario for clause (e).** Anchored on the document's own
   precedent: the changelog line 194 records "*ISS-03 (Medium): FR-131 Scenario 5 added covering
   FR-131 clause (d)*" — the identical gap, rated Medium, one clause earlier.
2. **ISS-02 Medium — §4.45 heading/rationale still ballot-scoped.** Anchored on changelog line 163
   ("*ISS-01 (Medium): §4.45 FR-131 preamble and §4.45 FR-131 requirement text ... at both
   sites*"), and aggravated because a ballot-scoped scope statement read literally is the exact
   mechanism that shipped the two false strings.
3. **ISS-03 Medium — RFC 2119 defect** in clause (e)'s operative prohibition ("no ... **MUST**
   assert" negates the subject of a MUST, inverting it to a null obligation). Not High: the duty
   is redundantly carried by the "FAILS this clause if..." test and the widened closing MUST NOT.
   Not Low: it is the defining prohibition of a new normative clause of a Must requirement, in an
   amendment premised on literal readings mattering.
4. **The stale "presented for approver confirmation" is a Low, not a Medium** (ISS-04). Considered
   Medium and declined on three grounds, recorded in the report: the error is **understatement not
   overclaim**; the confirmation is in **§11 of the artifact cited inline at all four
   occurrences**, so the link is intact one hop away; and the two header occurrences are rewritten
   by the PASS routing anyway. The **durable** occurrence is the FR-131 Source annotation — that is
   the one to fix.
5. **ISS-09 is a citation-hygiene Low, not a mis-citation.** "the §2.5 absence-test pattern" does
   resolve correctly — to **Doc 06 §2.5** — it is merely unqualified, and the naive resolution
   (the cited decision record's §2.5, "The precedent") is wrong.
6. **ISS-10 is Low and pre-existing.** §16.3's FR-132 row "FR-131 notice (DES-098) clauses (d)/(e)"
   is unchanged at `HEAD`; v2.17.0 only *activates* the ambiguity by giving FR-131 a clause (e).
7. **I made no Gate-2 finding and signed no merge.** This session was a document-review-loop
   assignment only; RTM zero-gap certification and merge sign-off are separate acts.

## IDs touched (read/verified only — I wrote no document and no code)

FR-014, FR-015, FR-017, FR-064, FR-082, FR-090, FR-091, FR-092, FR-123, FR-130, **FR-131**, FR-132,
NFR-023, BR-005, BR-009, ADR-024, ADR-025, DES-063, DES-095, DES-096, DES-098, US-0134,
UT-0869, UT-0870, UT-0887, UT-0889 (existence only), TC-3511..TC-3516 (reference only),
§13 routing blocks (f)(g)(h)(i)**(j)**, §16.3 / §16.4 H-16/H-17/H-18 / §16.5, REL-LIM-18 (reference).

## Open items I am handing on

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Doc 02 **v2.17.1** fixing ISS-01/02/03 (blocking) and ideally ISS-04..07, ISS-09 | product-owner | OPEN — routed by this review |
| 2 | Re-review Doc 02 v2.17.1, business mode, **cycle 2 of 5**, neutral reviewer assigned by the PM | project-manager | OPEN |
| 3 | **Sequencing risk:** Doc 07 v2.7.0 / Doc 08 v2.10.0 re-cut FR-131's chain for clause (e) with **no Doc 02 acceptance criterion to cut against**. Either v2.17.1 lands its scenario first, or Doc 08's FR-131 row must state plainly that clause (e)'s criterion is owed by Doc 02 | project-manager (sequencing); tester | OPEN — flagged, not a tester defect |
| 4 | Doc 02 carried Lows ISS-11 (FR-064 / FR-023 / FR-068 cross-reference), ISS-12 (v2.16.0 changelog echo), ISS-13 (§13 (h) wording) — carried a further version | product-owner | OPEN — non-blocking |
| 5 | Docs 04 v1.5.0, 06 v2.6.0, 07 v2.7.0, 08 v2.10.0 reviews (reviewer-qa is assigned to 04 and 07/08 as **new instances**) | project-manager | OPEN — expected mid-session; I did not self-appoint |

## Note for later agents (selective recall)

Read this note if you are: the **product-owner** reworking Doc 02 to v2.17.1 (the three blocking
fixes and their exact locations are in §4 and §5 of the review report); the **project-manager**
sequencing the clause-(e) cascade (open item 3 is the one that bites); or a future **reviewer** of
Doc 02 (the severity reasoning above, especially items 3 and 4, is deliberately recorded so it is
not re-argued from scratch). The mechanical application of the anchored spec was **faultless** —
that protocol is working and is not the source of any issue in this report.

**Report:** `artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md`
**Memory index:** pre-registered by the PM before dispatch — I did **not** open or edit
`artifacts/memory-index.json`, per the assignment's memory-index hygiene rule.
