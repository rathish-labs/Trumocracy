# Product-owner session note — 2026-09-08T14:00Z — neutral review of the README/CONTRIBUTING/SECURITY `/verify` delta

```
Role:      product-owner (Priya Raghunathan) — acting as NEUTRAL REVIEWER only, not as owner
Trigger:   artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md — "Neutral reviewers"
           table, row: "README / CONTRIBUTING delta | business, FR-131(e)/FR-132(d) discipline
           | product-owner (new instance) — report
           artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md, NOT under
           artifacts/reviews/ | RACI: Accountable for public-facing claims | excluded:
           technical-writer (author)"
Deliverable: artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md (written)
Restart:   an earlier attempt in this session was terminated by an API rate limit before
           anything reached disk; the review was re-run from the start.
```

## What I did

Reviewed the technical-writer's `/verify` delta to the three public root files, in business
mode, against the FR-131 clause (e) / FR-132 §(d) discipline and against source facts.

Sources read (in order): `CLAUDE.md` (review-and-rework loop);
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`;
`artifacts/technical-writer-2026-09-08T1200-readme-verify.md` (the author's line-by-line
before/after); `artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md` (full — §1 ruling, §2
confirmations, §5.1–§5.7); `artifacts/engineer-2026-09-08T1100-verify-and-hook.md`;
`README.md`, `CONTRIBUTING.md`, `SECURITY.md` (whole files, working tree);
`apps/web/src/app/verify/page.tsx`; `apps/web/src/components/SiteHeader.tsx` (grep);
`apps/web/src/app/page.tsx` (grep — the home CTA still links to `/verify/`);
`apps/web/src/i18n/en.ts` (the `verify` block header comment and `unavailable*` keys);
`packages/protocol/src/flags.js` (`ENROLMENT_UI`); `docs/14-user-guide.md` §1.2;
`docs/02-requirements-srs.md` §13 (j) **read-only**; and
`artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06-cycle4.md` for the report's shape.

I verified the writer's claims against the files and the code rather than against the note:
flag defaults (`dev true / staging false / prod false`) exact; nav gating present; placeholder
component and its markup contract present; no `verify.*` string deleted; Doc 14 §1.2 and Doc 02
§13 (j)(3) citations resolve; `640 = 95+151+244+18+16+116` checks.

## Verdict

**FAIL — 92% (92.4 weighted) — Critical 0 / High 0 / Medium 2 / Low 5.** Cycle 1 of a cap of 5.
Rework routes to the **technical-writer** (owning role for the public root files).

- **ISS-01 (Medium, `README:133-134`)** — "the wording this page will use once enrolment is
  built" contradicts DECISIONS §5.1/§5.2/§5.5 item 6 (starting copy, must be re-litigated before
  the flag turns on; several of those strings are false even of the planned v1 check) and
  contradicts `CONTRIBUTING:159-162` in the same delta.
- **ISS-02 (Medium, `README:32-33`)** — the pre-existing "v1 also checks that you are a real,
  legal-age person… can pass the check twice" is present-tense about an unbuilt check and now
  contradicts `README:131` ("no check exists yet"). Stale as of the 2026-09-08 ruling. Routed
  with a scope note: it sits outside the literal assignment row, so the PM should record whether
  it blocks cycle 2 or is carried separately — but it must not be silently dropped.
- **Lows:** ISS-03 README layout comment still calls `/verify` "one placeholder page" without
  the flag; ISS-04 CONTRIBUTING §1 omits *why* (enrolment unbuilt, CON-015); ISS-05 CONTRIBUTING
  §1 names no guard for the enrolment class though `UT-0890` pins the placeholder text (I agreed
  with the writer that it does **not** belong in the FR-131(e) guard table — a sentence, not a
  row); ISS-06 a clause in CONTRIBUTING §1 can be read as narrowing the routing duty; ISS-07
  SECURITY.md optional `REL-LIM-18`-style entry — writer's call, the file is not false.

**No FR-131 clause (e) breach anywhere in the delta.** No banned word un-negated; no
participation-act claim touched; nothing describes the enrolment design as working today; no
claim of progress on enrolment (DECISIONS §5.7 respected); enrolment-unbuilt + CON-015 stated in
README. Leaving SECURITY.md unmodified was the correct call.

## Decisions made (as reviewer)

1. Scored in the `artifacts/status/` public-files convention, **not** the `document-review`
   field names, so this report cannot enter the hook's cycle counter — per the assignment row
   ("NOT under artifacts/reviews/") and the 2026-09-06 precedent.
2. Routed ISS-02 despite it being a pre-existing line: the delta created the contradiction, and
   the fix is in the file the technical-writer owns. Flagged the scope question to the PM rather
   than deciding it unilaterally.
3. Did **not** require `UT-0890` in the CONTRIBUTING §1 guard table — that table is scoped to
   FR-131 clause (e); `UT-0890` guards the FR-132 §(d) class. The writer's reasoning was right.
4. Recorded five watch items (W-1..W-5) as routed observations rather than issues: the 640 figure
   rests on Doc 06 v2.8.0 (In Review); the delta describes uncommitted code; Doc 02 §13 (j)(3) is
   cited from a version in review; the Arabic draft debt; the owed `UT-0890` TC row.

## Boundaries observed

- **Reviewer only.** I edited none of `README.md`, `CONTRIBUTING.md`, `SECURITY.md` — I wrote
  only my report and this note.
- **Doc 02 untouched.** Opened `docs/02-requirements-srs.md` read-only to resolve the §13 (j)(3)
  citation; made no edit. Its v2.17.2 → v2.17.3 rework belongs to the other product-owner
  instance and I did not interfere with it.
- **No self-appointment.** I authored no report other than the one assigned to me. Doc 06 v2.8.0
  remains the tester's review; Doc 02 v2.17.3 remains reviewer-qa's.
- Did not open `artifacts/memory-index.json` (this note's path is pre-registered by the PM).
- No Bash available to this instance, so I did not run `node hooks/run_gates.cjs --audit`.

## Gate/hook status — the block I actually hit, recorded per its own instruction

At my stop the SubagentStop hook (`node hooks/run_gates.cjs`) blocked with the reworded
review-loop message:

> Review loop blocked: the following major document version(s) have no PASSING (or
> human-approved ESCALATED) document-review report in artifacts/reviews/. Do NOT author that
> report yourself: reviewer assignment is the project-manager's decision, recorded in
> artifacts/status/REVIEW-ASSIGNMENT-\*.md BEFORE dispatch, and a report written to clear your
> own stop does not count as a cycle. … Then stop:
> - `02-requirements-srs.md v2.17.3` (business review) — NO report found for this version
> - `06-coding-and-ut.md v2.8.0` (technical review) — NO report found for this version

**Expected, and not mine to clear.** Note the drift from the state the engineer and the
technical-writer recorded earlier today: Doc 02 has moved **v2.17.2 → v2.17.3** (the owner's
rework of the cycle-1 Medium landed while I was reviewing), so the block on it is now "NO report
for this version" rather than the earlier "report EXISTS but FAILS the bar".

- **`02-requirements-srs.md` v2.17.3** — owner: **product-owner** (the other instance, which
  authored the rework). Assigned neutral reviewer: **reviewer-qa** (new instance), per the
  assignment record. I am the *same role as the owner* and I am **not** its assigned reviewer —
  doubly excluded. Cycle 2 of that loop is reviewer-qa's to run.
- **`06-coding-and-ut.md` v2.8.0** — owner: **engineer**. Assigned neutral reviewer: **tester**
  (new instance). I am neither.

**I authored neither report**, and my own deliverable
(`artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md`) is deliberately outside
`artifacts/reviews/`, so it plays no part in either block. Recording the block here and
stopping, exactly as the hook text directs — the **project-manager** sequences the reviewer-qa
(Doc 02 v2.17.3) and tester (Doc 06 v2.8.0) dispatches.

## Open items / handoff

- **technical-writer** — cycle 2 of the public-files `/verify` delta: ISS-01 and ISS-02 required;
  ISS-03..ISS-06 recommended; ISS-07 optional. Suggested wording for each is in the report.
- **project-manager** — record "cycle 1 FAIL 92% (0C/0H/2M/5L)" in the Outcomes table of the
  assignment record; rule on the ISS-02 scope question; carry W-1..W-5; re-dispatch this same
  reviewer for cycle 2; sequence reviewer-qa on Doc 02 **v2.17.3** (the version number in the
  assignment record's Outcomes row is now one patch behind the tree) and the tester on Doc 06
  v2.8.0.
- No requirement was promoted, closed, or minted this session. No `REF-##` intake occurred.

## IDs touched

None minted. Referenced only: `FR-131` clause (e), `FR-132` §(b)/(d)/(e), `CON-015`, `NFR-023`,
§16.4 `H-15`/`H-16`/`H-17`/`H-18`, `OI-20`, `UT-0890`, `REL-LIM-18`, Doc 02 §13 (j)(1)/(2)/(3),
Doc 06 §7 item 28, Doc 14 §1.2, flag `enrolment_ui`.

## Files touched

- `D:\Projects\Trumocracy\artifacts\status\PUBLIC-FILES-REVIEW-2026-09-08-verify.md` — the review
  report (created).
- `D:\Projects\Trumocracy\artifacts\product-owner-2026-09-08T1400-public-files-verify-review.md` —
  this note (pre-registered path).
- Nothing else. No product code, no `docs/`, no root file, no memory index.
