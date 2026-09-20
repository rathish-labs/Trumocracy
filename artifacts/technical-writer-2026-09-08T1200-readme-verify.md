# Technical-writer session note — 2026-09-08T12:00Z — README/CONTRIBUTING `/verify` delta

```
Role:      technical-writer (Maya Lindqvist)
Trigger:   artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md (my row: "README
           `/verify` inventory line (and CONTRIBUTING if it repeats the 'unruled' claim)
           brought current")
Sources read (in order): CLAUDE.md; REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md;
           DECISIONS-2026-09-08-VERIFY-PAGE.md (full — §1 approver ruling, §2 confirmations,
           §5 PO's remedy choice incl. §5.3 normative placeholder copy and §5.7 "does NOT
           do"); artifacts/engineer-2026-09-08T1100-verify-and-hook.md (what shipped:
           `enrolment_ui` flag, defaults dev/staging/prod = true/false/false, placeholder
           component, UT-0890 with 15 assertions, npm test 625→640); docs/14-user-guide.md
           §1.2 (citizen-facing account: "Not fully available yet... no working screen you
           complete today", two-step model, vendor, discard, Aadhaar-only pilot gap);
           docs/02-requirements-srs.md §13 tracked routing item (j), specifically (j)(3) —
           the exact register text ruling the `/verify` page copy RULED and CLOSED
           2026-09-08, remedy (a), and confirming items (1)/(2) (the two landing strings)
           remain OPEN, un-ruled, unaffected by this ruling.
Scope:     README.md, CONTRIBUTING.md — grepped both (and SECURITY.md) for `verify`,
           `unruled`, `open question`, `625`, `placeholder`, case-insensitive.
```

## What changed

### `README.md`

1. **Lines 118–136 (was 118–136 pre-edit; the "What is actually built, and what is a
   demo" section intro + the `/verify` bullet).**
   - **Before:** intro sentence read "...and one further page is in the navigation but is
     not one of them"; the `/verify` bullet said the page "is **not** behind a feature flag
     and is wired to nothing," quoted the retired v2 guarantee strings, and closed with
     "Whether that copy is an honest description of a future page or an overclaim on a
     shipped one is an **open, unruled question**," citing Doc 02 §13 (j) as covering only
     the landing-page strings and stating "this page's own copy is not yet in any
     register."
   - **After:** intro sentence now reads "...and a fourth route, `/verify`, exists behind
     its own flag, off by default in the public build." The `/verify` bullet (now lines
     128–136) states: the route sits behind `enrolment_ui` (on in dev, off in staging and
     prod); the nav link does not appear in the public build; the page shows a short notice
     that no check exists yet plus what the planned check will and will not do; enrolment
     is unbuilt and blocked on `CON-015`; the fuller design copy stays in the code and
     renders only in `dev`; points to **Doc 14 §1.2** for the citizen-facing account and
     **Doc 02 §13 (j)(3)** (ruled and closed 2026-09-08) plus the decision-record path
     (`artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md`) for the ruling. The
     "unruled question" line is removed, as directed by DECISIONS §5.7's closing paragraph.
2. **Line 158 (was line 157): `npm test` count.**
   - **Before:** `# 625 tests at the time of writing (2026-09-06)`.
   - **After:** `# 640 tests at the time of writing (2026-09-08)` — taken verbatim from the
     engineer's note ("`npm test` (repo root, all workspaces): **640/640 passing**").

   Left untouched: the "Status" block (no `/verify` claim there), the repository-layout
   code-comment line ("...plus one placeholder page") — still accurate for the public
   build's default behaviour and not contradicted by the ruling, so left alone per "leave
   everything else untouched" — and the `npm run verify` script-name mentions (unrelated
   grep hits on the word "verify" meaning the CI script, not the page).

### `CONTRIBUTING.md`

1. **§1, paragraph beginning "What this rule does *not* cover" (was lines 37–45, now
   37–48).**
   - **Before:** stated "/verify" as a "shipped, navigable surface" making an enrolment
     claim, called it an "**open, unruled question**," and said "`/verify`'s own copy is
     not yet in any register."
   - **After:** names the two landing strings (`home.steps[0].body`, `home.promises[3]`) as
     the still-open, un-ruled question (Doc 02 §13 (j) items (1) and (2)); states the
     `/verify` page's own copy question is now **ruled and closed** (Doc 02 §13 (j)(3);
     links the decision record), gated behind `enrolment_ui`, off in the public build,
     showing a short honesty notice instead of the design copy; points to Doc 14 §1.2.
2. **§6 "Where NOT to start," last bullet (was lines 156–159, now ~159–162).**
   - **Before:** described `/verify` as an example of a "separate, currently **open and
     unruled** question."
   - **After:** still cautions that enrolment/identity-verification copy — including the
     retained `/verify` design strings, which render only in `dev` and must be
     re-litigated before the flag turns on — needs product-owner routing; the "open and
     unruled" framing is now attached only to Doc 02 §13 (j) items (1) and (2), not to
     `/verify`.
3. **Line 110 (was line 107): `npm test` count.** Same before/after as README's, `625
   (2026-09-06)` → `640 (2026-09-08)`.

   Left untouched: the §1 guard table (`UT-0869`/`UT-0887`/`UT-0889`/`UT-0759`/`UT-0888`) —
   these guard the FR-131(e) **participation-act** honesty rule, a different class from the
   FR-132(d) enrolment-copy rule that `UT-0890` guards; per the document's own framing (the
   paragraph immediately above the table draws this line), `UT-0890` does not belong in
   that table, so I did not add it. Adding a TC/RTM row for `UT-0890` is explicitly owed to
   the **tester**, not the technical-writer (engineer's note, "Open items / handoff").

### `SECURITY.md`

Grepped for the same five terms. The only hit was the word "placeholder" in the Doc 13
MS-09 schedule-anchor sentence (unrelated to `/verify`). No stale `/verify` claim found in
this file — **left untouched**, no changes made.

## Constraints checked against the new copy

- Grade-8 readability: short sentences, plain words ("no check exists yet," "not built,"
  "off by default").
- No banned words (`private`, `anonymous`, `receipt-free`, `secure`) used anywhere in the
  new text, negated or otherwise — avoided entirely rather than risk misuse.
- No claim that the enrolment design works today: every sentence about the design is
  framed as "planned," "will," "once enrolment is built," or "not built" — never present
  tense as fact.
- Cited Doc 02 §13 (j)(3) and the decision-record path in both files, as directed.
- Kept each file's existing voice and heading structure; the deltas are the two sections
  named above plus the two one-line test-count corrections in each file — not a rewrite.

## IDs touched (referenced only — this role mints none)

`FR-131` clause (e), `FR-132` §(b)/(d)/(e), `CON-015`, Doc 02 §13 (j)(1)/(2)/(3), Doc 14
§1.2, `UT-0890` (referenced, not newly cited in either file), `enrolment_ui` flag.

## Gate/hook status observed

**At my own stop**, the SubagentStop hook (`node hooks/run_gates.cjs`) blocked with:

> Review loop blocked: the following major document version(s) have no PASSING (or
> human-approved ESCALATED) document-review report in artifacts/reviews/. ... Then stop:
> - `02-requirements-srs.md v2.17.2` (business review) — report EXISTS
>   (`02-requirements-srs-v2.17.2-business-cycle1.md`) but does not satisfy the gate:
>   Verdict=FAIL, score=92% C=0 H=0 M=1
> - `06-coding-and-ut.md v2.8.0` (technical review) — NO report found for this version

This matches exactly what the engineer's note recorded as the state before my dispatch
(no drift). Per the hook's own (reworded) text, CLAUDE.md's review-and-rework loop, and
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`'s "Neutral reviewers" table:

- **`06-coding-and-ut.md` v2.8.0** — owner is the **engineer**; assigned neutral reviewer
  is the **tester** (new instance). I am neither. Its FAIL/no-report state is not mine to
  clear, and rework (if any) belongs to the engineer once the tester's report exists.
- **`02-requirements-srs.md` v2.17.2** — owner is the **product-owner**; assigned neutral
  reviewer is **reviewer-qa** (new instance). I am neither. The existing cycle-1 FAIL
  (1 Medium, score 92%) is the product-owner's rework to make into v2.17.3, not mine.
- My own deliverable (the README/CONTRIBUTING delta) has its **own**, separately assigned
  reviewer — a new **product-owner** instance, reporting to
  `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md` (explicitly **not** under
  `artifacts/reviews/`, so it plays no part in the two blocks quoted above). I did not
  write that report either.

**I am not authoring any of these three reports.** Per the hook's instruction and my own
role boundary (owner of neither blocking document, assigned reviewer of neither), I am
recording this block here and stopping — the project-manager sequences the tester (Doc 06)
and reviewer-qa (Doc 02) dispatches next, and separately schedules the product-owner
review of this delta.

## Open items / handoff

- The README/CONTRIBUTING delta above is owed a neutral review by the **product-owner**
  (new instance), per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`'s
  "Neutral reviewers" table — I am excluded as the author.
- Doc 06 v2.8.0 (no report yet — tester owed) and Doc 02 v2.17.2 (cycle-1 FAIL, 92%,
  1 Medium — product-owner rework owed into v2.17.3) review loops remain open; both are
  blocking the shared SubagentStop hook for every role until the project-manager
  sequences them. Not my scope to resolve.
- Arabic-review debt for the four new `verify.unavailable*` `ar.ts` strings is tracked
  elsewhere (Doc 02 §13 tracked deferral (b); CONTRIBUTING §6 "good first issues" already
  names this generally) — I did not add a new bullet for it since the existing "Arabic
  native-speaker review" item already covers `ar.ts` in general and adding a
  `/verify`-specific sub-bullet was not requested and risks scope creep beyond "a few
  lines."
- Did not commit (no Bash tool available this session; not instructed to commit).

## Files touched

- `D:\Projects\Trumocracy\README.md`
- `D:\Projects\Trumocracy\CONTRIBUTING.md`
- `D:\Projects\Trumocracy\SECURITY.md` — read and grepped, **not modified** (no stale line
  found).
- `D:\Projects\Trumocracy\artifacts\technical-writer-2026-09-08T1200-readme-verify.md` —
  this note (pre-registered path; did not open `artifacts/memory-index.json`).
