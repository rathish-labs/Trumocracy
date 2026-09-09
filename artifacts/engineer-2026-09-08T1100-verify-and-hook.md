# Engineer session note — 2026-09-08T11:00Z — decision 3 (hook wording) AND decision 1
(/verify remedy (a)) both done in this session

```
Role:      engineer (Samuel Oyelaran)
Trigger:   artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md (approver decisions 1 & 3)
           artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md
Scope:     First message: decision 3 ONLY — hooks/check_gates.py block wording. Second
           message (this extension): decision 1 — the product-owner chose remedy (a)
           (flag-gate /verify behind `enrolment_ui`, honesty placeholder) and directed the
           engineer to implement it exactly per DECISIONS §5. Both items are now complete
           and registered together under Doc 06 v2.8.0 (one version bump, not two, per the
           original plan). Note EXTENDED, not replaced — memory-index entry unchanged,
           artifacts/memory-index.json not opened.
```

## What was done (decision 3 — stop-hook wording)

Reworded the review-loop block message in `hooks/check_gates.py` (`check_review_reports`,
~line 528) and the invariant-(c) description in the module docstring, per the approver's
ruling: the old text ("Run the `document-review` skill with a NEUTRAL (non-owner)
reviewer …") read, to whichever agent stopped last, as an instruction to author the missing
report itself — the mechanism behind three self-appointment incidents (AL-CANDIDATE-3).

**New block message** (verbatim, `hooks/check_gates.py::check_review_reports`):

> Review loop blocked: the following major document version(s) have no PASSING (or
> human-approved ESCALATED) document-review report in artifacts/reviews/. Do NOT author
> that report yourself: reviewer assignment is the project-manager's decision, recorded in
> artifacts/status/REVIEW-ASSIGNMENT-\*.md BEFORE dispatch, and a report written to clear
> your own stop does not count as a cycle. If you are this document's owner, or you are
> not its assigned reviewer, record this block in your session note and stop — the
> project-manager sequences the review. The bar: a version passes only at score >= 95%
> AND zero critical/high/medium issues. On FAIL, the OWNING ROLE reworks a new version and
> it is re-reviewed (cap 5 cycles, then ESCALATE to a human, who must record an
> 'approve-as-is' decision with their name to clear it). Then stop:\n  - {listed}

Kept unchanged: the `{listed}` document-line format (from the existing `missing` list
logic — untouched), the score/severity bar, the owner-reworks-a-new-version rule, and the
5-cycle cap + ESCALATE + named approve-as-is requirement.

Also updated the module docstring's description of invariant (c) (near the top of the
file) so it no longer frames the review as something the blocked agent runs: it now states
the reviewer is assigned by the project-manager and recorded in
`artifacts/status/REVIEW-ASSIGNMENT-*.md` *before* dispatch, and that a report written to
clear one's own stop does not count as a cycle — mirroring the block message.

**`hooks/run_gates.cjs`** — checked for any quoted copy of the old block text (grepped for
"Run the", "document-review", "Review loop", "NEUTRAL", "self-appoint"); none found. The
file only references `check_gates.py` by path and describes interpreter resolution / fail
-closed logging. No edit needed there; left untouched.

## Verification

- `python -m py_compile hooks/check_gates.py` — via
  `"$LOCALAPPDATA/Programs/Python/Python312/python.exe"` (the interpreter
  `run_gates.cjs`'s `resolvePython()` would find) — **compiles clean**.
- `node hooks/run_gates.cjs --audit` — **exit code 0**. All 10 gated docs (01, 02, 03, 04,
  05, 06 v2.7.0, 07, 08, 13, 14) show `PASS`; RTM section unchanged (138 Must rows, 16
  complete, 122 open, signals AGREE, "Gate 2 traceability criterion: NOT MET" — as
  expected, Gate-2 readiness only). Output format is byte-identical to the pre-change
  shape (same column layout, same RTM block, same "Certify with" footer).
- Did **not** simulate the block path by writing a fake review report — verified by
  reading the code path instead (`check_review_reports` → `missing` list → `block(...)`
  with the new string), per the brief's instruction not to fabricate reports.
- `npm test` (repo root, all workspaces) — **244 + 18 + 16 + 101 = ... all green**, no
  regressions; the hook change touches only Python text, no JS/TS surface.
- Stdlib-only preserved: no new imports added to `check_gates.py` (still just `json, os,
  re, sys, time, pathlib.Path`).

## Files touched (this message)

- `d:\Projects\Trumocracy\hooks\check_gates.py` — reworded the invariant-(c) docstring
  paragraph and the `check_review_reports` block message. No other logic changed
  (`missing` list construction, `report_satisfies`, RTM scanning, `--audit`, `--gate2`
  all untouched).

## What was done (decision 1 — `/verify` remedy (a): flag-gate + honesty placeholder)

Read `artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.1–§5.7 in full (the
product-owner's normative record) before touching anything, per the coordinator's
instruction. Implemented exactly as specified:

1. **`packages/protocol/src/flags.js`** — added `ENROLMENT_UI` (key `enrolment_ui`,
   `defaults: { dev: true, staging: false, prod: false }`, `onChain: false`, `removeBy`
   citing the enrolment sprint / CON-015, description citing FR-132 and CON-015), placed
   after `FORK` and before `L1_FORCE_INCLUSION`. `permanentFlags()` still returns `[]`
   (verified by test).
2. **`apps/web/src/config/flags.tsx`** — added `ENROLMENT_UI: 'enrolment_ui'` to `FLAG`.
3. **`apps/web/src/app/verify/page.tsx`** — added a `VerifyUnavailable` component (the
   placeholder: `unavailableTitle` as `h1`, `unavailableBody` as `p.lead`,
   `unavailablePlannedTitle` as `h2`, `unavailablePlanned` as a `ul` with
   `data-testid="verify-unavailable-planned"`, a `/parties/` link labelled `t.nav.parties`,
   wrapper `data-testid="verify-unavailable"`). `VerifyPage` reads
   `useFlag(FLAG.ENROLMENT_UI)` and returns only the placeholder when off; the existing
   screen is unchanged when on. Rewrote the module docstring to state the file implements
   the DESIGNED screen (FR-132 §(b), DES-100, ADR-003), not a built one, and why it is
   gated.
4. **`apps/web/src/components/SiteHeader.tsx`** — the `/verify/` `li` now renders only when
   `useFlag(FLAG.ENROLMENT_UI)` is true.
5. **`apps/web/src/i18n/en.ts`**/**`ar.ts`** — added the four `verify.unavailable*` keys with
   the exact §5.3 English text and the §5.4 Arabic draft mirror; headed both `verify.*`
   blocks with the §5.5-item-5 comment (design copy, `dev`-only, not a v1 claim). No
   existing string deleted.
6. **Guard — `UT-0890`** in `apps/web/test/safety-surfaces.test.tsx` (next free id — checked
   the file and Doc 06's registry; UT-0889 was the prior highest). All 15 assertions of
   §5.6 A–E implemented as 15 separate `it()` blocks (flag defaults + `permanentFlags()` +
   description citations; placeholder renders with retired claims absent from the DOM and
   controls gone; flag-on screen+nav intact; new-copy honesty — no banned word, no jargon,
   states the H-17/H-15/CON-015 facts and "nobody is checked at all"; Arabic-mirror key-set
   equality, completeness, non-copy-paste, no banned word). File header comment above the
   `describe` cites the record §1/§5, FR-131(e), FR-132 §(d)/(e), §16.4 H-15/H-17/H-18,
   Doc 06 §7, CON-015. Flag-override mechanism used: the existing `FlagProvider overrides`
   prop via the file's `wrap()` helper (`{ enrolment_ui: true/false }`) — no new mechanism
   needed, matched the established pattern.
7. **`apps/web/types/trumocracy-protocol.d.ts`** — added the missing `permanentFlags()`
   declaration (not previously in the type shim; `tsc --noEmit` caught the gap the moment
   the new test imported it — same class of drift item 23/ISS-C3-01 already tracks for
   other shim surfaces).
8. **`docs/06-coding-and-ut.md` → v2.8.0, Status: In Review** (neutral reviewer: tester,
   per the review assignment). Header bumped, one v2.8.0 change-history entry covers BOTH
   the hook wording (decision 3) and the `/verify` remedy (decision 1) together — matching
   the brief's "hold the Doc 06 edit... one version, not two." §3 UT inventory: added the
   `UT-0890` row (15 tests), Total 625 → 640, web-total addend note updated 101 → 116. §6
   flag ledger: added the `enrolment_ui` row plus an explanatory paragraph (onChain:false
   rationale, precedented by `l1_force_inclusion`/`sponsored_gas`, but carries a real
   `removeBy` unlike those two). §7: added **item 28**, stating plainly that `/verify` is
   now flag-gated off in the public build, and explicitly noting this does **not** rule on
   the still-OPEN `home.steps[0].body`/`home.promises[3]` question item 26 already tracks
   (a distinct, unruled question per DECISIONS-2026-09-08 §5.7). Prior status/history
   entries retained verbatim (v2.7.0 and earlier untouched).

## Deviations / decisions made while implementing (none requiring escalation)

- **Nav-link href assertion in UT-0890 uses `startsWith('/verify')`, not an exact
  `/verify/` match.** Discovered by a scratch debug render that Next's `<Link
  href="/verify/">` (and the pre-existing `/parties/`, `/petitions/new/`) render as
  `href="/verify"` etc. (no trailing slash) under this repo's test environment. This is
  pre-existing behaviour of every nav link, not something this change introduced; the
  assertion was written to match what actually renders rather than the source prop, per
  the house pattern ("assert the source string, then assert what actually renders").
- **`ENROLMENT_UI` flag placement** in `flags.js`: inserted after `FORK`, before
  `L1_FORCE_INCLUSION` — the spec said "keys sorted where the file already groups them"
  without pinning an exact slot; this groups it with the other Phase-gated feature flags
  (off in staging/prod, real `removeBy`) rather than the two permanent `never`-removeBy
  entries.
- **Doc 06 item 28 vs. item 26**: did not touch item 26's existing text (the still-open
  `home.steps[0].body`/`home.promises[3]` question) — DECISIONS-2026-09-08 §5.7 is explicit
  that this session's remedy does not rule on it. Added item 28 as a new, separate entry
  instead, with a cross-reference so a reader cannot conflate the two.

## Verification (second message)

- `apps/web` vitest: `UT-0890`'s 15 assertions all pass individually (confirmed via
  targeted `npx vitest run test/safety-surfaces.test.tsx` — 41/41 tests green, including
  the pre-existing UT-0700..UT-0889 tests in the same file).
- `npm test` (repo root, all workspaces): **640/640 passing** — contracts 95, protocol 151,
  sdk 244, ui 18, indexer 16, web 116 (was 101 + 15 new UT-0890 assertions = 116; 625 + 15
  = 640 overall).
- `npm run typecheck`: exits 0 in `packages/ui` and `apps/web` (after adding the
  `permanentFlags()` shim declaration — see deviations).
- `npm run lint:deps`: "7 workspace package(s) checked — layering OK".
- `node hooks/run_gates.cjs --audit`: exit code **1** (report-only exit, not a hook
  decision) — **EXPECTED**: `06-coding-and-ut.md v2.8.0` and `02-requirements-srs.md
  v2.17.2` both show `BLOCK ... no report for this version`, because neither has been
  reviewed yet this session. All other docs (01, 03, 04, 05, 07, 08, 13, 14) still `PASS`.
  RTM section unchanged (138 Must rows, 16 complete, 122 open, signals AGREE). Per the
  brief and CLAUDE.md: **did not self-appoint, did not author any review report** — Doc
  06's assigned neutral reviewer is the tester (new instance), Doc 02's is reviewer-qa (new
  instance), both per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`; this
  engineer owns both documents and is excluded from reviewing either.

## Files touched (both messages, complete list)

- `d:\Projects\Trumocracy\hooks\check_gates.py` — block-wording rework (message 1).
- `d:\Projects\Trumocracy\packages\protocol\src\flags.js` — new `ENROLMENT_UI` flag entry.
- `d:\Projects\Trumocracy\apps\web\src\config\flags.tsx` — `FLAG.ENROLMENT_UI` key.
- `d:\Projects\Trumocracy\apps\web\src\app\verify\page.tsx` — flag gate, placeholder
  component, rewritten module docstring.
- `d:\Projects\Trumocracy\apps\web\src\components\SiteHeader.tsx` — `/verify/` nav item
  gated on the flag.
- `d:\Projects\Trumocracy\apps\web\src\i18n\en.ts` — four new `verify.unavailable*` keys +
  header comment.
- `d:\Projects\Trumocracy\apps\web\src\i18n\ar.ts` — Arabic mirror of the above + header
  comment.
- `d:\Projects\Trumocracy\apps\web\test\safety-surfaces.test.tsx` — new `UT-0890` describe
  block (15 assertions) + supporting imports (`SiteHeader`, `VerifyPage`, `FLAGS`,
  `isEnabled`, `permanentFlags`).
- `d:\Projects\Trumocracy\apps\web\types\trumocracy-protocol.d.ts` — added the missing
  `permanentFlags()` type declaration.
- `d:\Projects\Trumocracy\docs\06-coding-and-ut.md` — v2.7.0 → **v2.8.0, In Review**: header,
  change-history entry (covers both decisions), §3 UT inventory, §6 flag ledger, §7 item 28.

Not touched: `docs/02-requirements-srs.md` (product-owner's file — already modified by
them before this message, confirmed via `git status`, not edited by the engineer),
`artifacts/memory-index.json` (never opened, per instruction — the pre-registered entry for
this note's path was already present).

## IDs touched

- **New:** `UT-0890` (web test, 15 assertions, `apps/web/test/safety-surfaces.test.tsx`).
- **Referenced, not newly minted:** FR-131(e), FR-132 §(b)/(d)/(e), CON-015, ADR-003,
  DES-100, §16.4 H-15/H-17/H-18. No new `US`/`DES`/`FR` minted — this is a remedy to an
  existing honesty defect, not new requirement scope (per DECISIONS §5.7, "Delete before
  you build applies to requirements too").
- **Doc 06** bumped 2.7.0 → 2.8.0 (In Review).
- **TC row for UT-0890 is OWED to the tester** at the next Doc 07/08 touch — Doc 08 v2.11.3
  just closed on its own cap and was deliberately NOT reopened for this row mid-session,
  per the review assignment.

## SubagentStop hook block — confirms the reworded wording, recorded per its own instruction

On stop, the hook (using the wording this session itself rewrote) blocked with:

  - `02-requirements-srs.md v2.17.2` (business) — report EXISTS
    (`02-requirements-srs-v2.17.2-business-cycle1.md`) but FAILS the bar: score 92%,
    C=0 H=0 M=1.
  - `06-coding-and-ut.md v2.8.0` (technical) — NO report found for this version.

Per the hook's own text (and CLAUDE.md): **not authoring either report.** For Doc 06 I am
the **owner** (engineer), not its assigned reviewer (the **tester**, per the review
assignment) — the owner reworking a new version only happens *after* a FAIL is reported by
the assigned reviewer, and no such report exists yet. For Doc 02 I am neither the owner
(**product-owner**) nor its assigned reviewer (**reviewer-qa**) — its existing cycle-1 FAIL
(1 Medium) is that owner's rework to make, not mine. Recording this block here and
stopping, as directed: **the project-manager sequences both reviews next** (dispatch the
tester for Doc 06 v2.8.0; the Doc 02 v2.17.2 cycle-1 Medium routes back to the
product-owner for rework into v2.17.3).

## Open items / handoff

- **Review loop:** Doc 06 v2.8.0 needs the tester (new instance, neutral, PM-assigned) to
  run the technical-mode `document-review`. Doc 02 v2.17.2 needs reviewer-qa (new instance).
  This engineer is the owner of Doc 06 and is excluded from reviewing it; did not
  self-appoint.
- **Owed to other roles (unchanged by this session, restated for the next reader):**
  README/CONTRIBUTING `/verify` inventory line → technical-writer; UT-0890's TC/RTM rows →
  tester; the still-open `home.steps[0].body`/`home.promises[3]` question → product-owner
  (item 26, untouched); the DES-098 acknowledge-to-proceed control → SCR-13 story scope
  (item 26(d), untouched); ARABIC-I18N native-speaker review → technical-writer (now also
  covers the four new `ar.ts` `verify.unavailable*` strings).
- Did not commit (brief: "Do not commit").
