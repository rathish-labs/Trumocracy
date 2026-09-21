# Session note — product-owner (Priya Raghunathan) — SECURITY.md pin-advance review, cycle 2

```
Role:       product-owner, acting as PM-assigned NEUTRAL REVIEWER for a root public file
Date:       2026-09-21T0100 (work performed 2026-09-20)
Branch:     build/v1-debt-closure
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — "Neutral reviewers"
            table, row "SECURITY.md delta"; owed-actions table rows ISS-01 and ISS-03
Mode:       business rubric, FR-131(e)/FR-132(d) honesty discipline, cycle 2 of 5
Output:     artifacts/status/PUBLIC-FILES-REVIEW-2026-09-20-security-md-cycle2.md
            (deliberately NOT under artifacts/reviews/ — SECURITY.md is a root public file, not a
            governed numbered document, and the hook's artifacts/reviews/ scan must not see it)
Note path:  pre-registered by the PM. I did NOT open or edit artifacts/memory-index.json.
```

## What I did

Reviewed the second SECURITY.md debt-closure delta (`artifacts/technical-writer-2026-09-20T2330-
security-pin-spec.md`, 2 ops, applied by the PM, uncommitted). This delta discharges the two Lows I
routed to the PM at cycle 1: `ISS-03` (advance the Doc 08 pin once the lineage Approves) and
`ISS-01` (the `--audit` parenthetical overclaim).

**Verdict: PASS — 97%, Critical 0 / High 0 / Medium 0 / Low 1.** No rework owed. Cycle 2 of 5.
I scored and listed only; I did not edit SECURITY.md or any other file under review.

## Decisions made

1. **`ISS-03` is DISCHARGED — the conditional Medium is dead and cannot re-raise at session close.**
   My cycle-1 condition was conjunctive (Doc 08 Approves AND the pin is not advanced). Doc 08 is
   `v2.12.3`, `Status: Approved` (front matter lines 5-6; report
   `08-traceability-matrix-v2.12.3-technical-cycle5.md`, PASS 97%, 0C/0H/0M/2L, reviewer-qa, closing
   a five-cycle loop on the cap with a PASS). The pin is advanced at **both** sites — `SECURITY.md:110`
   and `:124-125`. Second conjunct false ⇒ the Medium cannot fire.
2. **Pinning v2.12.3 rather than v2.12.0 is more correct, not a deviation.** v2.12.0/.1/.2 are
   superseded FAILed versions that never held `Approved`. The rule I ruled by at cycle 1 — cite an
   Approved source — is satisfied exactly.
3. **Figures unmoved, verified at source:** Doc 08 §9 (now line 2440, title still "Gate verdict &
   sign-off") lines 2447-2448 read 138 / 16 / 122. SECURITY.md's three sites match. The
   section-and-title citation survived Doc 08 growing ~600 lines (§9 moved 1834 → 2440).
4. **"Stops nothing" is TRUE** — verified through six links, two of which the writer did not cite:
   `audit()` never reaches `block()`; `--audit` short-circuits `main()` above every enforcement call
   (`check_gates.py:606-608`); `run_gates.cjs:161` scopes the fail-closed block path to
   `args.length === 0`, so a non-zero `--audit` exit **cannot** become a block contract;
   `.claude/settings.json:8` wires the hook with **no arguments**, so `--audit` is structurally off
   the decision path; `run_gates.cjs:185` does propagate the exit code to `$?`; and a repo-wide
   search found **no consumer** — neither `.github/workflows/verify.yml` nor `dco.yml` nor any npm
   script references `run_gates`/`check_gates`. **Nothing gates or halts on that exit code.**
5. **"Changes nothing" → `ISS-04`, Low, no fix owed.** `check_gates.py` contains **zero** write
   operations anywhere in the file (searched `open(`, `.write(`, `write_text`, `mkdir`, `unlink`,
   `rename`, `shutil` — no matches), so it is read-only by construction, stronger than the writer's
   claim. But the sentence names `node hooks/run_gates.cjs --audit`, and the launcher's `log()`
   (lines 62-78, called at 184 on every run) rewrites `.claude/gate-runs.log` with one appended JSON
   line, capped at 500 (past the cap it discards the oldest record; 364 lines today, so nothing is
   being discarded yet). The log is **gitignored** (`.gitignore:21`), so no tracked file changes —
   hence Low, not Medium. **The wording is mine from cycle 1**, used verbatim; I recorded the Low
   for that reason rather than despite it.
6. **RULING on the unchanged date: honest, no change owed, and no "first vs re-verified" split.**
   The compound claim (2026-09-20 + v2.12.3 + 138/16/122) is true: today IS 2026-09-20 and Doc 08
   dates v2.12.3 to 2026-09-20, so the verification could not have happened earlier. "Last verified"
   is by construction a latest timestamp; a field that must change to prove work was done rewards
   date-bumping, which is the opposite and more dangerous failure. The maintenance trigger is a
   **version bump**, not a calendar, so the pair moved where the trigger moved it. Sub-day precision
   would be a small overclaim of rigour in a file that discloses the figure is hand-copied. The only
   residual — no named **verifier** — is carried from cycle-1 Observation 2, still not owed, and if
   ever closed should be closed by attribution.
7. **`ISS-02` correctly NOT fixed here — reaffirmed.** My cycle-1 preferred remedy was internal
   (register the recurring re-check in Doc 06 §7), and nothing in this delta changes that. I
   required no SECURITY.md edit for it. **Fact at my read time:** Doc 06 on disk is still `v2.8.1`,
   `Approved`, and a search of it for `SECURITY.md` returns no matches — so the duty has **no owner
   on disk yet**. That is timing (v2.9.0 is being authored in parallel), not a finding. **Doc 06 is
   the tester's to review; I did not rule on it** and raised no issue against it.
8. **Nothing out of scope moved.** Both ops are line-count-neutral (8→8, 10→10), so every line below
   the delta holds its post-cycle-1 number: `REL-LIM-17` 90-92, `REL-LIM-18` 93-97 (SHAs `0a5c542` /
   `84e2203` intact), `TD-RTM-01` 101-104, "Reporting a vulnerability" 128-139, "What not to report"
   141-146 — all byte-consistent, all unmoved. 138/16/122 unchanged at all three sites.

## Limits (stated, not implied) — the same limit as cycle 1

**Bash was again unavailable to this session** — not in this instance's tool set. **I did not run
`node hooks/run_gates.cjs --audit` and I did not run `git diff SECURITY.md`, and I claim no run I
did not make.** Substituted, exactly as at cycle 1:

- For the `--audit` **behaviour** claims: full source reads of `hooks/check_gates.py` and
  `hooks/run_gates.cjs` plus `.claude/settings.json`, `.gitignore` and the workflow inventory —
  which settles the behaviour for **every** run, not one.
- For the **numbers**: Doc 08 §9 on disk (determines the published half outright); Doc 08 v2.12.3's
  own Approved front matter, which states the `--audit` triple verbatim and was passed by a neutral
  reviewer at cycle 5; and the PM's reported post-flip run (0 blocking, 138/16/122, signals agree).
- For **out-of-scope movement**: the positional proof above, made tight by line-count neutrality. I
  renew my request that the **PM** run `git diff SECURITY.md` once (expected: line 110 and lines
  122-125 only). The PASS does not depend on it.

## Open items (routed, none blocking)

| To | Item |
|---|---|
| PM | Record in the assignment record: `SECURITY.md delta \| Cycle 2: PASS 97% (0C/0H/0M/1L) \| Final: PASS` |
| PM | Mark `ISS-01` and `ISS-03` **DISCHARGED** in the owed-actions table, citing the cycle-2 report. `ISS-04` supersedes `ISS-01` as an accepted Low with **no owed action** |
| PM | **Before the session closes**, confirm Doc 06 v2.9.0 as landed actually contains the recurring SECURITY.md re-check entry (§7). At my read it does not exist on disk. If it does not land, carry `ISS-02` forward rather than close it |
| PM | Run `git diff SECURITY.md` (I could not) |
| human / next handbook editor | `CLAUDE.md:259` still reads "`--audit` reports every invariant without blocking" — now wrong in exactly the way SECURITY.md's parenthetical no longer is. Out of scope for me; agent/handbook edits are human-approved. Second entry in the record for this drift |
| technical-writer | **Nothing owed.** Do not open SECURITY.md again for `ISS-04`; if the file is touched for another reason, prefer "it changes nothing in this repository and stops nothing" |

## IDs touched

- **Reviewed (as subject):** `SECURITY.md` (root public file, no semver) — the 2026-09-20T2330
  delta at lines 108-126 only.
- **Issues raised:** `ISS-04` (Low, new, no fix owed).
- **Issues ruled discharged:** `ISS-01`, `ISS-03` (both from
  `PUBLIC-FILES-REVIEW-2026-09-20-security-md.md`). `ISS-02` reaffirmed as internal-route, status
  not yet visible on disk.
- **Read as sources, not reviewed, not edited:** `docs/08-traceability-matrix.md` v2.12.3;
  `artifacts/reviews/08-traceability-matrix-v2.12.3-technical-cycle5.md`;
  `docs/06-coding-and-ut.md` v2.8.1 (front matter only); `hooks/check_gates.py`;
  `hooks/run_gates.cjs`; `.claude/settings.json`; `.gitignore`; `.claude/gate-runs.log` (line count
  only); `CLAUDE.md`; the `document-review` skill.
- **Requirements referenced as the honesty frame only, not amended:** `FR-131` clause (e),
  `FR-132` §(d). **No `BR`/`FR`/`NFR`/`EP`/`FE`/`US` was created, renumbered or edited this
  session, and no numbered document was opened for edit.**

## Scope discipline observed

- Wrote exactly two files: the cycle-2 review report and this note. **I did not open or edit
  `artifacts/memory-index.json`** (PM-registered).
- Did not edit `SECURITY.md` — the reviewer scores and lists only.
- Did not review, edit or rule on any numbered document; Doc 06 v2.9.0 is in flight under the
  tester and I did not self-appoint.
