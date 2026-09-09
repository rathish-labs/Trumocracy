# Tester session note — 2026-09-08T13:00Z — neutral review of Doc 06 v2.8.0 + the code drop (technical, cycle 1)

```
Role:      tester (Ji-woo Park — Test Lead)
Dispatch:  project-manager (Ana-Maria Petrescu)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md — "Neutral reviewers
           (recorded BEFORE dispatch)", row 1: Doc 06 v2.8.0 (+ the code drop, incl. the hook
           wording change) | technical | tester (new instance). Excluded: engineer (owner),
           product-owner (chose the remedy).
Ruling under review: artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1 (approver: /verify
           page), §3 (approver: stop-hook block wording), §5 (product-owner's choice, remedy (a)).
Scope:     SCORE AND LIST ONLY. No product code, no test code, no Doc 06, no Doc 07, no Doc 08
           was written or edited in this session. artifacts/memory-index.json was NOT opened
           (the PM pre-registered this note's path).
Restart:   An earlier run of this same task was terminated by an API rate limit before anything
           reached disk. This session redid the review from the start; every figure below was
           re-run at HEAD after the restart.
```

## What I did

Ran the `document-review` skill in **technical** mode against `docs/06-coding-and-ut.md` **v2.8.0
(In Review)** and the code drop it registers, and wrote exactly one artifact:

- **`artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md`**

**Verdict: FAIL · Score 95% · Critical 0 · High 0 · Medium 1 · Low 3 · Cycle 1 of 5.**

The numeric score clears the bar; the single Medium does not. The bar is conjunctive.

## The delta I reviewed

1. `hooks/check_gates.py` — review-loop block wording + the module docstring's invariant-(c)
   paragraph (approver decision 3).
2. The `/verify` remedy (a): `packages/protocol/src/flags.js` (`ENROLMENT_UI`),
   `apps/web/src/config/flags.tsx` (`FLAG.ENROLMENT_UI`), `apps/web/src/app/verify/page.tsx`
   (gate + `VerifyUnavailable` placeholder), `apps/web/src/components/SiteHeader.tsx` (nav gate),
   `apps/web/src/i18n/en.ts` + `ar.ts` (four new `verify.unavailable*` keys + header comments),
   `apps/web/types/trumocracy-protocol.d.ts` (`permanentFlags()` declaration).
3. `apps/web/test/safety-surfaces.test.tsx` — the new **UT-0890** guard.
4. Doc 06 header/change entry, §3 UT inventory, §6 flag ledger, §7 item 28.

## Evidence I ran (all at HEAD, this session)

| Command | Result |
|---|---|
| `npm test` | **640/640 green** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116. +15 over v2.7.0's 625; `safety-surfaces.test.tsx` = 41 tests |
| `npm run typecheck` | exit 0 |
| `npm run lint:deps` | "7 workspace package(s) checked — layering OK" |
| `python -m py_compile hooks/check_gates.py` | exit 0 (via `%LOCALAPPDATA%/Programs/Python/Python312/python.exe` — `python` is not on the Git-Bash PATH; that is the interpreter `run_gates.cjs::resolvePython()` finds) |
| `node hooks/run_gates.cjs --audit` | exit 1 — expected mid-session. Format **unchanged**. Before my report: Doc 06 v2.8.0 and Doc 02 v2.17.2/.3 blocking. After: Doc 02 v2.17.3 **PASS** (reviewer-qa's loop, not mine) and Doc 06 v2.8.0 `BLOCK — report exists but fails the bar` naming my report |
| `echo '{}' \| node hooks/run_gates.cjs` (stop mode) | Printed the **new** block text — used to verify decision 3 against what a blocked agent actually receives, not against the diff |
| Byte-compare `en.ts`/`ar.ts` `unavailable*` vs DECISIONS §5.3/§5.4 | **Identical** in both locales |
| Throwaway render probe (written, run, **deleted** — repo clean) | With `enrolment_ui: true` all five retired claims **are** in the DOM (so UT-0890's negatives are non-vacuous); with **no override** (`BUILD_ENVIRONMENT` → `prod`) the placeholder renders |

## Decisions I made (as reviewer)

- **Decision 3 is fully met.** All five required elements are in the live block text; no live code
  path anywhere in the repo still carries the old "Run the `document-review` skill with a
  NEUTRAL…" imperative (only quotations of it, in the decision record, the engineer's note and
  Doc 06's description). The `--audit` output format is unchanged.
- **Decision 1 / remedy (a) is fully met** in code, both locales, with all **15** §5.6 assertions
  present as one `it` each — and I proved the guard is non-vacuous at both ends rather than
  counting `it` blocks.
- **The FAIL is on the document, not the code.** No code change is required by my report.
- **ISS-01 (Medium)** — Doc 06 §3's closing note (rewritten at this version) and §7 item 26(c)
  both state that **UT-0889's TC row is still owed to the tester**. It is not: Doc 07 **v2.8.1
  Approved** mints `TC-3570`..`TC-3576` and Doc 08 **v2.11.3 Approved** carries them (line 530,
  all Pass (obs.) on R-18). Same defect class that failed v2.6.0 at cycle 1. Live consequence: a
  duplicate-mint hazard against the never-reuse-or-renumber rule.
- **ISS-02/03/04 (Low)** — the change entry's unreproducible "`--audit` still exits 0" claim
  (verified by the engineer at v2.7.0, before his own bump); §6's "counted in the
  `permanentFlags()` assertion" (reads as the inverse of what the function returns); §3's
  "as of this session (2026-09-05)" heading a table re-derived on 2026-09-08.
- **Version recommendation: `v2.8.1` (patch), not `v2.9.0`.** The skill's default for a Medium
  FAIL is a minor, but the rework touches no case, count, ID, flag, ruling or normative text —
  the same shape the house already ruled a patch at Doc 07 v2.8.1 and Doc 08 v2.11.3. `v2.9.0` is
  acceptable if the PM prefers the skill's letter.
- **Calibration recorded in the report:** owed-work register errors = Medium; claims that merely
  went stale mid-session without changing anyone's work = Low.

## Open items

- **Doc 06 v2.8.0 → engineer (Samuel Oyelaran)** for rework as v2.8.1; this loop re-reviews as
  cycle 2 of 5. The PM assigns the cycle-2 reviewer.
- **`UT-0890` has no `TC` row — OWED to me** at the next Doc 07/08 touch. Doc 07 (v2.8.1) and
  Doc 08 (v2.11.3) were deliberately **not reopened** this session, per the review assignment
  (Doc 08 closed on the cap). Expect ~15 cases on the UT-0889 pattern (one per independently
  defeatable assertion). It blocks no Must row: `enrolment_ui` ships dark.
- Not mine, recorded for the next reader: the README/CONTRIBUTING `/verify` inventory line
  (technical-writer); the still-open `home.steps[0].body` / `home.promises[3]` question (Doc 02
  §13 (j), explicitly not ruled by DECISIONS §5.7); the Arabic `verify.unavailable*` strings are
  a **draft** under Doc 02 §13 deferral (b) and need native-speaker review pre-Gate-2.

## Stop-hook state at exit

`node hooks/run_gates.cjs --audit` exits 1 with **one** document blocking: `06-coding-and-ut.md
v2.8.0 — report exists but fails the bar: ['06-coding-and-ut-v2.8.0-technical-cycle1.md']`. That
is **my own report recording a FAIL**, which is the loop working as designed: it clears when the
engineer's reworked version passes, not by anything I can write. Per the (newly reworded) block
text and the review assignment, I do not author any further report to clear it, and I did not
self-appoint on Doc 02 at any point — Doc 02 v2.17.3 has since passed under reviewer-qa.

### SubagentStop block actually received, recorded verbatim in substance (2026-09-08)

The SubagentStop hook then blocked this session, as anticipated above. Recorded here because the
block text itself instructs the blocked agent to do exactly this and stop:

> Review loop blocked: … no PASSING (or human-approved ESCALATED) document-review report … **Do
> NOT author that report yourself** … a report written to clear your own stop does not count as a
> cycle … record this block in your session note and stop — the project-manager sequences the
> review … On FAIL, the **OWNING ROLE** reworks a new version and it is re-reviewed (cap 5 cycles).
> Then stop:
>   - `06-coding-and-ut.md v2.8.0` (technical review) — report EXISTS
>     (`06-coding-and-ut-v2.8.0-technical-cycle1.md`) but does not satisfy the gate:
>     **Verdict=FAIL, score=95% C=0 H=0 M=1**

**Disposition — I am stopping, and I am writing nothing further.** The block names the report I
was assigned to write and did write; it is unsatisfied because I found a Medium, which is the
correct outcome of an honest review, not an error to be worked around. The only artifact that can
clear it is the **engineer's** reworked Doc 06 (v2.8.1 recommended) carrying a passing report from
a **PM-assigned** reviewer for that new version. Specifically, I did **not**:

- re-score, soften or re-issue my report to reach a PASS;
- author a second report (for any version of any document) to clear my own stop;
- self-appoint as reviewer of Doc 02 or anything else the audit showed blocking;
- touch `artifacts/memory-index.json` (pre-registered by the PM).

This is the same routing the tester's 2026-09-06 evidence (AL-CANDIDATE-3) asked for, now enforced
by the very wording this review verified — the first recorded instance of the reworded text being
applied by the agent it was written for.

## IDs touched

- **Read / verified, not modified:** `UT-0890` (the drop's new guard), `UT-0889`, `UT-0887`,
  `UT-0888`, `UT-0759`, `UT-0871`, `UT-0055`, `TC-3570`..`TC-3576`, `FR-131`, `FR-132`, `FR-122`,
  `FR-123`, `FR-020`, `NFR-023`, `DES-085`, `DES-098`, `DES-100`, `ADR-003`, `ADR-011`, `CON-015`,
  `US-0134`.
- **Minted:** none. **Renumbered:** none. **Edited in any document:** none.
