# project-manager — 2026-09-08T18:00 — `/verify` page ruling, two confirmations, stop-hook wording

```
Role:      project-manager (Ana-Maria Petrescu)
Date:      2026-09-08
Approver:  Rathish Kumar — directive of 2026-09-08 (three decisions; "Reviews per rubric; neutral
           reviewers, assignment-record enforced. Gate --audit exit 0. npm test (625 green).
           Commit; do not push.")
Records:   artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md (§1–§4 approver; §5 product-owner)
           artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md (owners, reviewers, outcomes)
Result:    all three decisions closed; every governed document Approved; audit exit 0; npm test
           640/640 (625 + UT-0890's 15); committed on main, NOT pushed.
```

## What was done, in SOP order

1. **Transcribed the approver's directive** into DECISIONS-2026-09-08-VERIFY-PAGE.md and wrote the
   review-assignment record BEFORE any reviewer was dispatched (owners: product-owner, engineer,
   technical-writer; neutral reviewers: tester → Doc 06, reviewer-qa → Doc 02, a product-owner
   reviewer instance → the README delta). All note paths pre-registered in `artifacts/memory-index.json`
   with `prereg-any.mjs`; no role opened the index.
2. **Decision 3 (hook wording) — engineer, first.** `hooks/check_gates.py` review-loop block text
   rewritten: it no longer says "Run the `document-review` skill …"; it says do NOT author that report
   yourself, points to the project-manager and `REVIEW-ASSIGNMENT-*.md`, states that a report written to
   clear one's own stop does not count, keeps the bar / owner-reworks rule / cap. Docstring invariant (c)
   reworded. `--audit` output format unchanged; py_compile clean.
3. **Decision 1 (`/verify`) — product-owner chose (a)** on engineering grounds (smaller and reversible;
   the page is false beyond the three quoted strings — H-17 vendor sees the document, OI-20 issuer
   plurality not in effect, H-16/H-18 retained identifier, inert button; nothing depends on it and it
   cannot become true before CON-015 clears; Doc 14 §1.2 already tells the citizen the truth). Normative
   placeholder copy fixed at DECISIONS §5.3 (en) / §5.4 (ar draft). Spec of 5 OPs applied by the PM
   with `apply-spec.cjs` (all FINDs matched exactly once): DECISIONS §5 appended; Doc 02 → v2.17.2.
4. **Engineer built remedy (a):** `enrolment_ui` flag in `packages/protocol/src/flags.js` (dev on,
   staging/prod off, `onChain: false`, `removeBy` = enrolment sprint); `FLAG.ENROLMENT_UI` in
   `apps/web/src/config/flags.tsx`; `apps/web/src/app/verify/page.tsx` renders only the honesty
   placeholder when off (`data-testid="verify-unavailable"`, planned list, link to `/parties/`),
   docstring rewritten; `SiteHeader.tsx` hides the `/verify/` link when off; `en.ts`/`ar.ts` gain four
   `verify.unavailable*` keys with header comments; no string deleted; `permanentFlags()` type added to
   `apps/web/types/trumocracy-protocol.d.ts`. **UT-0890** (15 assertions, A–E of DECISIONS §5.6) in
   `apps/web/test/safety-surfaces.test.tsx`. Suite 625 → **640** (web 101 → 116). Doc 06 → v2.8.0.
5. **Technical-writer** brought README (inventory, legal-age sentence, test count) and CONTRIBUTING
   current: `/verify` is gated behind `enrolment_ui`, off in the public build, showing a short honesty
   notice; the retained design strings are the enrolment sprint's starting copy to be re-litigated;
   Doc 02 §13 (j)(1)–(2) remain open. SECURITY.md unchanged (no `REL-LIM` id exists for the fix).
6. **Decision 2** recorded as approver-confirmed in DECISIONS §2 (Doc 01 integrity class; the
   `/verify` citation qualification). Doc 02 §13 (j) widened to three items by the product-owner.

## Review loops (all neutral, all recorded before dispatch)

| Document | Cycle 1 | Cycle 2 | Final |
|---|---|---|---|
| Doc 02 | v2.17.2 FAIL 92% (1M: (j)(3) asserted "applied" + dangling Doc 06 v2.8.0 pin; reviewer-qa) | v2.17.3 PASS 96% (0C/0H/0M/10L) | **Approved v2.17.3** |
| Doc 06 | v2.8.0 FAIL 95% (1M: UT-0889 TC rows wrongly stated as owed; tester) | v2.8.1 PASS 97% (0C/0H/0M/3L; code MD5-identical to cycle 1) | **Approved v2.8.1** |
| README/CONTRIBUTING delta | FAIL 92% (2M: retained copy described as the future promise; present-tense legal-age check; product-owner reviewer) | PASS 97% (0C/0H/0M/3L) | **PASS cycle 2** |

Both Doc 02 / Doc 06 reworks were owner specs transcribed by the PM (`apply-spec.cjs`, 6 OPs for
Doc 02 v2.17.3) or edited directly by the engineer (Doc 06 v2.8.1). Status→Approved flips transcribed
with `flip-approved.mjs`. PM scope ruling: the README:32-33 legal-age sentence (outside the literal
assignment row) was ruled IN scope for cycle 2 — same public-surface honesty class the approver
directed closed — and recorded in the assignment record rather than dropped.

## Decisions made by the PM (recorded, reversible)

- Reviewer-qa's Doc 02 cycle-1 review was dispatched in parallel with the engineer's build; the resulting
  Medium (the row asserted an application that had not happened yet) was a real defect of the row, not
  an artefact of parallelism, and was fixed by separating the ruling from the application.
- The README:32-33 sentence was folded into the cycle-2 rework (above), not carried.
- Doc 07 / Doc 08 NOT reopened: UT-0890's TC row is **owed to the tester** at the next touch (Doc 08
  v2.11.3 closed on the cap this morning).

## Field evidence for the hook fix (decision 3)

Every role instance that hit the reworded block this session routed correctly and authored nothing to
clear its own stop: engineer (×3 stops), reviewer-qa (×2), tester (×2), technical-writer (×2),
product-owner (×3). The tester's cycle-1 note records "the first recorded instance of that text being
applied by the agent it was written for". Recorded in the AL-CANDIDATE-3 packet.

## Verification at close

- `node hooks/run_gates.cjs --audit` → exit 0; "Documents blocking the review loop: 0"; RTM 138 Must
  rows, 16 COMPLETE, 122 OPEN (Gate-2 readiness only — NOT MET, unchanged, certified separately).
- `npm test` → 640/640 green (contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116).
- `npm run typecheck` clean.
- Memory index: placeholders refreshed from the notes; never-written entries pruned.

## Open items / handoff

- **UT-0890 TC row** → tester at the next Doc 07/08 touch (duplicate-mint hazard for UT-0889 removed at
  Doc 06 v2.8.1).
- **Doc 02 §13 (j)(1) `home.steps[0].body` and (j)(2) `home.promises[3]`** → product-owner; (2) needs
  the sre's production check. Still OPEN, un-ruled, non-blocking.
- **Arabic native-speaker review** (Doc 02 §13 deferral (b)) now also covers the four
  `verify.unavailable*` strings.
- **Carried Lows:** Doc 02 ten; Doc 06 three; README/CONTRIBUTING three (listed in the assignment
  record outcomes).
- **AL-CANDIDATE-3 row** for the vektor org repo: unchanged, ready-to-run, push is the approver's.
- **Gate 2:** NOT MET (RTM). Unchanged by this session.

## IDs touched

FR-131 (e), FR-132 §(b)/(d)/(e), CON-015, ADR-003, DES-100, OI-20, §16.4 H-15/H-16/H-17/H-18,
UT-0889 (correction only), **UT-0890 (new)**, TC-3570..TC-3576 (cited), REL-LIM-12 (cited).
Documents: Doc 02 v2.17.1 → v2.17.3 (Approved); Doc 06 v2.7.0 → v2.8.1 (Approved). Flag: `enrolment_ui`.
