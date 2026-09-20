# Engineer session note — 2026-09-08T19:00Z — Doc 06 v2.8.0 -> v2.8.1 rework (cycle 2 of 5)

```
Role:      engineer (Samuel Oyelaran)
Trigger:   artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md (tester Ji-woo Park,
           neutral, PM-assigned; FAIL 95%, 0C/0H/1M/3L)
Scope:     Doc 06 prose only. No product code, no test code, no hook code touched. Doc 07
           and Doc 08 explicitly NOT edited (both Approved and correct per the report).
Result:    Doc 06 v2.8.0 -> v2.8.1, Status In Review. ISS-01 (Medium) fixed at both cited
           locations without touching Doc 07/08; ISS-02/03/04 (Low) folded. Patch bump, not
           minor, per the report's own routing instruction and house precedent (Doc 07
           v2.8.0->v2.8.1, Doc 08 v2.11.2->v2.11.3).
```

## Read first

Read `artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md` in full (all 9
sections) before editing anything, per the coordinator's instruction. Then verified every
factual claim the report and the fix depend on against Doc 07 and Doc 08 **on disk at
HEAD**, not from memory or from my own prior session note:

- `docs/07-test-cases-suites.md` header: **Version 2.8.1, Status Approved**
  (`07-test-cases-suites-v2.8.1-technical-cycle3.md`, PASS 98%). `grep` confirmed
  `TC-3570`..`TC-3576` all present and minted for UT-0889 (six IDs: `TC-3570`..`TC-3575`
  from the original five `it`s plus the observed-run split, `TC-3576` for the sixth `it`,
  the DES-085 jargon scan added at Doc 06 v2.7.0 ISS-03).
- `docs/08-traceability-matrix.md` header: **Version 2.11.3, Status Approved** ("loop closed
  ON the cap, cycle 5 of 5, no escalation"). Line ~530 confirmed: "**UT-0889** ->
  **TC-3570** (en `home.steps[1].body`), **TC-3571** (en `home.promises[0]`), **TC-3572**
  … **TC-3573** … **TC-3574** … all five **Pass (obs.)** on R-18." Lines ~471-474 confirmed
  the §3.2 NFR-023 row carries the `TC-3576` link.

Both facts matched the review report exactly. No discrepancy found.

## Edits made, and the ISS each one closes

1. **§3, UT-inventory closing note** (the sentence beginning "Every `UT-####` maps to an
   `FR`/`NFR`/`RISK` in the RTM (Doc 08) —") — **closes ISS-01 (Medium).** The primary
   sentence is now restricted to "**the UT-0890 block's** TC row is owed to the tester"
   (UT-0889 removed from the claim). A new dated annotation is appended AFTER the existing
   v2.7.0 annotation (not replacing it): `**(v2.8.1, ISS-01 correction:** …)`, recording that
   the v2.8.0 text above it wrongly claimed both UT-0889 and UT-0890 were owed, that Doc 07
   v2.8.1 mints `TC-3570`..`TC-3576` for UT-0889 and Doc 08 v2.11.3 carries them, that the
   sole owed row is UT-0890's, and that Doc 07/08 are not edited by this correction.
2. **§7 item 26(c)** (the sentence "The only `TC` row still owed by the tester is
   **UT-0889's**…") — **closes ISS-01 (Medium), the second cited location.** Left the
   existing sentence untouched (per the report: "append a dated correction after the
   existing sentence, do not rewrite it") and appended
   `**(v2.8.1, ISS-01 correction:** …)` stating the same two fixed facts (Doc 07 v2.8.1,
   Doc 08 v2.11.3, `TC-3570`..`TC-3576`) and that the sole owed row today is UT-0890's
   (cross-referenced to §7 item 28).
3. **Change history, v2.8.0 entry, item (1)** (the sentence "`node hooks/run_gates.cjs
   --audit` still exits 0 with the unchanged format") — **closes ISS-02 (Low).** Rewritten
   in place (a Low, no annotate-don't-delete instruction was given for it) to state only
   what is true and reproducible: the audit's output format and RTM section are unchanged,
   the hook compiles clean; the exit-0 observation was made at v2.7.0 before this version's
   own bump; at v2.8.0 itself `--audit` exits 1 by design (a report, not a hook decision)
   until this version's and Doc 02's reviews land.
4. **§6, the `enrolment_ui` paragraph** (the sentence "…is therefore counted in the
   `permanentFlags()` assertion…") — **closes ISS-03 (Low).** Corrected to state the flag
   stays **out of** `permanentFlags()` (which returns only flags with no `removeBy`) and
   that the standing `permanentFlags() === []` assertion (UT-0890) continues to hold —
   matching what the function and the test actually check.
5. **§3, the counts-currency line** ("Counts are actual as of this session (2026-09-05)…")
   — **closes ISS-04 (Low).** Advanced to "as of v2.8.1 (2026-09-08)", made
   version-relative per the report's suggested fix so it cannot go stale again on the next
   count change.
6. **Header block** — Version `2.8.0` -> `2.8.1`; `Status: In Review — review-loop rework
   cycle 2 of 5 against 06-coding-and-ut-v2.8.0-technical-cycle1.md (FAIL 95%, 0C/0H/1M/3L;
   reviewer: tester Ji-woo Park, neutral, PM-assigned)`, naming which ISS is fixed where and
   the neutral reviewer for cycle 2 (tester, per the review assignment); the v2.8.0 status
   line is preserved verbatim under a nested `Previously:`, which in turn preserves the
   v2.7.0 `Previously:` block verbatim beneath it — no history deleted.
7. **New v2.8.1 change-history entry** added at the top of the `Change history:` block
   (above the untouched v2.8.0 entry), naming the trigger report, the patch-not-minor
   rationale (citing the Doc 07/08 precedent the review report itself cites), and which ISS
   each of the five edits above closes, plus the disk-verification steps taken against
   Doc 07/08.

**Nothing else changed.** Per the report's §7 ("What is *not* wrong"): no product code, no
test code, no hook code, no flag definition, no `UT-####`, no count, no ruling. Confirmed by
`git status` (only `docs/06-coding-and-ut.md` newly modified this session; `docs/07-*` and
`docs/08-*` show no changes).

## Verification

- `npm test` (repo root, all workspaces): **640/640 passing, unchanged** — contracts 95 /
  protocol 151 / sdk 244 / ui 18 / indexer 16 / web 116. No change to the total or to
  UT-0890's assertion count (still 15) — nothing to say loudly; README/CONTRIBUTING's
  "640"/"15" citations remain accurate.
- `npm run typecheck`, `npm run lint:deps`: not re-run this message — no code was touched
  (both were confirmed clean against this exact code state in the prior message and
  independently re-verified by the tester's cycle-1 report itself, §4 rows 2-3).
- `node hooks/run_gates.cjs --audit`: **exit code 1** (report, not a hook decision).
  `06-coding-and-ut.md v2.8.1` shows `BLOCK ... no report for this version` — **expected**:
  the tester's cycle-2 review has not landed yet. All other docs now `PASS`, including
  `02-requirements-srs.md v2.17.3` (the product-owner's rework cleared reviewer-qa's loop
  independently while this rework was in progress — not this role's doing). RTM section
  unchanged: 138 Must rows, 16 complete, 122 open, signals AGREE, Gate-2 criterion NOT MET
  (Gate-2 readiness only, unaffected by this document-only change).
- **Did not self-appoint.** Did not author a review report for Doc 06 v2.8.1 (my own
  document) or for any other document. The tester (already recorded as the assigned
  neutral reviewer for Doc 06 in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`)
  runs cycle 2.

## Files touched

- `d:\Projects\Trumocracy\docs\06-coding-and-ut.md` — v2.8.0 -> **v2.8.1, In Review**: header
  block, new v2.8.1 change-history entry, §3 (two edits: closing note + counts-currency
  line), §6 (`enrolment_ui` paragraph), §7 item 26(c) (dated correction appended).

No other file touched this message.

## IDs touched

- No new `US`/`UT`/`DES`/`FR`/`NFR` — this rework is corrections to Doc 06's prose only.
- Doc 06: **v2.8.0 -> v2.8.1**.
- Cites (unminted, pre-existing): `TC-3570`..`TC-3576` (Doc 07, verified on disk, not
  re-minted or renumbered), `UT-0889`, `UT-0890`, ISS-01 (Medium), ISS-02/03/04 (Low).

## SubagentStop hook block — expected, recorded per its own instruction

On stop, the hook blocked with: `06-coding-and-ut.md v2.8.1 (technical review) — NO report
found for this version`. This is the expected consequence of the v2.8.0 -> v2.8.1 bump
(no cycle-2 report exists yet) and was already anticipated above ("expected: the tester's
cycle-2 review has not landed yet"). Per the hook's own text and CLAUDE.md: **not authoring
it.** I am Doc 06's owner, not its assigned reviewer — the tester is assigned (per
`REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`) and runs cycle 2. Recording this here and
stopping; the project-manager sequences the tester's dispatch next.

## Open items / handoff

- **Doc 06 v2.8.1** awaits the tester's cycle-2 technical review (assigned, per
  `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`). This is cycle 2 of 5 against the v2.8.0
  cycle-1 FAIL.
- UT-0890's TC row remains OWED to the tester at the next Doc 07/08 touch — unchanged by
  this rework, and explicitly not paid this session (Doc 07/08 not reopened).
- Did not commit (brief: "Do not commit").
