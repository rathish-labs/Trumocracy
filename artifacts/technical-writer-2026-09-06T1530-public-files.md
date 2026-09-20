# technical-writer session note — 2026-09-06T15:30 — public-release root files

```
Role:     technical-writer (Maya Lindqvist)
Task:     Write README.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md at repo root per
          the project-manager's brief (public-release prep, approver decisions 2026-09-06:
          AGPL-3.0-or-later + CC BY-SA 4.0, DCO not CLA, artifacts/ published, persona note,
          FR-131 clause (e) approved).
Reviewer: product-owner, business mode, FR-131(e) discipline, reporting to
          artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06.md (NOT artifacts/reviews/ — these
          four files are not governed documents and must not enter the hook's cycle counter).
Status:   Files written. Awaiting the product-owner's review.
```

## What I wrote

- **`README.md`** (full rewrite, kept existing structure: five-things list, layout, running it,
  where to start, status, licence). Added the v1-truth "Status — read this first" block (from
  `artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md` §6, adapted with the persona
  sentence). Fixed line 8 (deleted "or reveal who a member is"). Rewrote item 3 to state the v2
  design explicitly and name what v1 actually stores (`phone_hash`/`subject_id_hash`, account↔
  party link — Doc 03 §10.12.3, ADR-025). Rewrote item 5 to FR-131 (a)–(c) in plain words: v1
  voting is NOT anonymous, NOT receipt-free, NOT coercion-resistant; database sees vote
  direction and party membership; MACI/v2 not built. New "What is actually built, and what is a
  demo" section naming the three flagged features, in-memory stores, mocks, and
  `NEXT_PUBLIC_TRUMOCRACY_ENV`. §Running it: `npm ci` (not install), Node ≥22 <25, `npm test`
  (~3 min, in-process EVM), `npm run test:protocol` fast loop, `npm run verify`; test count
  cited as "619 tests at the time of writing (2026-09-06)" per instruction, flagged for
  re-verification by the PM once the new guard lands. §Licence: AGPL-3.0-or-later (code) / CC
  BY-SA 4.0 (`docs/`, `design/`) / DCO sign-off, linking `LICENSE`, `docs/LICENSE`, `DCO`,
  CONTRIBUTING, SECURITY. New "How this repository is run" paragraph: VEKTOR process, two
  gates, eight persona role names, maintainer as sole human decision-maker, decision record
  published on purpose.

- **`CONTRIBUTING.md`** (new). Sections: what this is today + the FR-131(e) honesty rule named
  with the five guard ids (UT-0869, UT-0887, UT-0759, UT-0888, UT-0889 — the last per the
  brief's instruction that it was minted this session; I did not find it in `docs/` yet at read
  time, which is consistent with a build in flight elsewhere this session; I cited it as given
  rather than independently verifying it, and flag that below); how the repo is run (VEKTOR SOP,
  ID scheme, review loop, personas); branch/PR flow (`build/v1-<slug>`, Conventional Commits,
  DCO, engineer-never-merges, CI green); DCO section; running tests + the Doc 06 §4a review bar
  paraphrased; good-first-issues (Arabic review, TD-RTM-01, `.d.ts` shim sync, docs typos) and
  where-not-to-start (audit-scope contracts/circuits, FR-131-class copy without the
  product-owner); optional agent workflow (Python 3 / `VEKTOR_PYTHON`, `--audit`, memory
  protocol, never self-author a blocking review — routed to the PM); Code of Conduct pointer.

- **`SECURITY.md`** (new). Status banner (design-stage, deployed nowhere, no audit started, MS-04
  2026-10-15 / MS-09 2027-03-12 verified against `docs/13-project-plan.md`). Known open findings
  by class with verified register ids: REL-LIM-01, REL-LIM-02, DES-098 (Doc 06 §7 item 26(d)),
  PREREQ-01 (Doc 03 §2330, rules 1–3 unbuilt), C-05, H-02/H-05/H-06/H-07 (Doc 06 §5.3),
  REL-LIM-12/15/16/17 (open), REL-LIM-18 (closed at commit `0a5c542`, cited as a working example
  of the loop), TD-RTM-01 (Doc 08 §10/§4 caveat). Gate 2 NOT MET with the verified Must-row
  figure **138 Must rows: 16 COMPLETE, 122 OPEN** (Doc 08 v2.9.0 header, cross-checked against
  Doc 09 §0's independent `--audit` re-derivation — both agree; I did NOT assume the 122/138
  figure from the task brief, I re-verified it against Doc 08's current header). Reporting via
  GitHub private vulnerability reporting, no email, best-effort single-maintainer response,
  fixes ship through the two-gate process (ADR-010, no silent hotfix). What-not-to-report
  section.

- **`CODE_OF_CONDUCT.md`** (new). Contributor Covenant v2.1 verbatim text with its standard
  attribution block. Enforcement contact set to "the maintainer, via GitHub private
  vulnerability reporting or a direct message to the repository owner" — no email address
  anywhere, per the hard rule.

## Sources cited / grounded against

- `artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md` (full read) — the specification for
  all four files (§4–§7).
- `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §4/§5/§11 — FR-131 clause (e)
  ruling and approver confirmation.
- `docs/02-requirements-srs.md` §4.45 FR-131 v2.17.0, full clause (a)–(e) text read verbatim.
- `docs/14-user-guide.md` §0.1, §0.2, §2.2, §2.3, §2.6 (read in full) — reused approved v1-truth
  language rather than inventing new phrasing.
- `docs/09-release-notes.md` §0 (release-gate status table, read in full) and "What this release
  does **not** do" section (read in full).
- `docs/06-coding-and-ut.md` §1.1, §4a, §5.3 (open findings), §7 (all 22+ numbered known
  limitations, read in full), line 916-918 (DES-098 acknowledge-control gap, exact wording).
- `docs/03-architecture-design-sdd.md` lines 2320-2348 (PREREQ-01 governance status, verbatim).
- `docs/08-traceability-matrix.md` header (Must-row figures, re-derived and cross-checked) and
  §10/§4 (TD-RTM-01).
- `docs/13-project-plan.md` (MS-04, MS-09 dates, verified).
- `README.md` (prior version, read before rewrite), `.github/workflows/verify.yml`,
  `package.json` (scripts, engines), `hooks/run_gates.cjs` header (Python resolution,
  `VEKTOR_PYTHON`), `.claude/settings.json`.
- `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` — confirmed my reviewer
  (product-owner, business mode) and the report path (`PUBLIC-FILES-REVIEW-2026-09-06.md`, not
  `artifacts/reviews/`).

## Claims I could NOT independently verify (named rather than silently included as fact)

- **UT-0889.** Named in the task brief as "minted this session" for the landing copy guard. I
  searched `docs/` and did not find it (the engineer's R-3 work in
  `DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` was still routed/pending at the versions of Doc 06
  I read). I cited it in CONTRIBUTING.md as instructed but did not confirm it against source
  code or a test file myself — this is a same-session concurrency gap, not a discrepancy I
  chose to ignore.
- **`npm run dev -w @trumocracy/web` on a fresh clone.** Per the assessment (§4), this was
  explicitly "not verified this session" by the PM. I carried that caveat into the README rather
  than asserting the dev server runs cleanly.
- **619-test figure.** Cited exactly as instructed ("at the time of writing (2026-09-06)"),
  flagged in-line for the PM's re-verification once a new guard lands, per the brief.
- **`LICENSE` and `docs/LICENSE` and `DCO` file existence.** I linked to them in README/
  CONTRIBUTING as the review-assignment record shows the project-manager is writing these in the
  same session; I did not verify they exist on disk at the time I wrote these links (out of my
  lane per the hard rules — I do not touch `LICENSE`, `DCO`, or `.github/`).

## Open items / not done

- No self-review authored. Per the hard rules and `AL-CANDIDATE-3`, I did not appoint myself a
  reviewer of this work even though the SubagentStop audit may show other documents (01/02/04/
  06/07/08) In Review mid-session — that is expected concurrent state, not something for me to
  act on.
- `ARABIC-I18N` pre-launch review item (R-7 in the endorsement-copy decision record, assigned to
  technical-writer) remains open and is **not** addressed by this session's four files — it
  concerns `apps/web/src/i18n/ar.ts` product strings, not the root public files, and is out of
  this session's scope.
- Did not touch `docs/`, product code, `LICENSE`, `DCO`, `.github/`, or `artifacts/` other than
  this note, per the hard rules.

## IDs / documents touched or cited

FR-131 (a)-(e), DES-098, PREREQ-01, C-05, H-02, H-05, H-06, H-07, REL-LIM-01/02/12/15/16/17/18,
TD-RTM-01, ADR-006/007/008/010/011/013/025, MS-04, MS-09, Doc 02 §4.45, Doc 03 §10.12.3/§10.13.10.1,
Doc 06 §1.1/§4a/§5.3/§7, Doc 08 header/§10, Doc 09 §0, Doc 13 (milestones), Doc 14 §0.1/§0.2/§2.2/§2.3/§2.6.
