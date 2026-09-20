# Session memory — tester as neutral reviewer, Doc 09 v1.6.0 (business, cycle 2)

```
Role:        tester (Ji-woo Park) — acting as NEUTRAL REVIEWER via the document-review skill
Date:        2026-09-06
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md (Doc 09 → business → tester)
Document:    docs/09-release-notes.md v1.6.0 (owner: sre, Chen Wei)
Report:      artifacts/reviews/09-release-notes-v1.6.0-business-cycle2.md
Verdict:     FAIL — 93%, 0 Critical / 0 High / 4 Medium / 3 Low, cycle 2 of 5
Predecessor: artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md (FAIL 93%, 0C/0H/3M/2L)
```

## What I did

Read `CLAUDE.md`, the assignment (including the 2026-09-06 01:23 self-appointment incident), the
`document-review` skill and the report template. Read `docs/09-release-notes.md` v1.6.0 end to end
(998 lines). Re-derived every load-bearing claim against the repository at `HEAD` rather than
accepting the document's own verification statement. Scored against the **business** rubric
(B1–B6), wrote the report, ran the gate audit. **I did not edit Doc 09 or any product code, and I
did not touch `artifacts/memory-index.json`** (pre-registered by the PM before dispatch).

I did **not** self-appoint on Docs 03/04/07/08, which the audit reports as blocking — those are
assigned to reviewer-qa, and Docs 07/08 are my own owned documents. That block is expected and is
not mine to clear.

## Verification performed (evidence, not assertion)

- **Git topology.** `HEAD` = `84e2203` (single parent — the "merge commit" claim correctly retracted).
  `git log --no-merges HEAD -- packages apps` = **14 commits**; the changelog's two tables list
  exactly those 14. `0a5c542`, `b6be070`, `c04b4f2`, `31b6df9`, `e039ff2` confirmed **not** ancestors
  of `main`. `1c589c8` and `84e2203` confirmed added.
- **`REL-LIM-18` closure, source site by source site.** All eight post-fix pins line-exact:
  `flags.js:42-47`, `Governor.sol:25-32`, `en.ts:400-408`, `ar.ts:359-366`, `client.js:450-459`,
  `ReceiptFreedomBanner.tsx:3-18`, `PrivacyStatus.tsx:205`/`:212`/`:323-326`. Three regression guards
  present at their pinned lines (`UT-0887`, `UT-0759`, `UT-0888`). PrivacyStatus **blocker cleared**
  and component **still unmounted** (export at `index.ts:12`; six non-render comments in five files).
- **Suite.** Re-ran `npm test`: 95 + 151 + 244 + 18 + 16 + 95 = **619 passed, exit 0** — matches the
  document's claim exactly.
- **`FR-131` word ban.** Every occurrence of private / anonymous / receipt-free / secure inspected;
  all negated, quoted-as-code or scoped to the contract skeleton / Definition-B. Clean for a fifth
  consecutive version. HALTED / "deployed nowhere" stated and never softened.
- **Cross-document pins at review time.** Doc 06 v2.5.1 Approved ✓ · Doc 07 v2.5.0 In Review ✓ ·
  Doc 08 v2.8.0 In Review ✓ · Doc 14 v2.3.0 Approved ✓ · Doc 03 **v2.13.0** (doc says v2.12.0) ·
  Doc 04 **v1.4.0** (doc says v1.3.0). All four cycle-1 report scores quoted in §0 verified exact
  against the report metadata blocks. Docs 10/11/12 carry zero reports ✓. `docs/refine-log.md` still
  has zero `REF-` entries ✓.
- **Transcription fidelity.** Leaked-marker, fence and adjacent-duplicate scans clean; the 14 ops in
  `artifacts/sre-2026-09-06T1500-doc09-cycle2-spec.md` compared against the document. **No
  transcription residue.** Every finding attributed to authoring, each checked against the spec first.

## Cycle-1 closure

`ISS-01` CLOSED · `ISS-02` CLOSED · `ISS-03` CLOSED on substance · `ISS-L2` CLOSED ·
`ISS-L1` correctly CARRIED (PM-accepted, owed by the sre at the next Operate cycle).

## New issues raised

| ID | Sev | Site |
|---|---|---|
| `ISS-C2-01` | Medium | Internal record line 814 — "Document version" cell reads **1.5.0** at a v1.6.0 document; same cell v1.5.0 said it had "corrected here" |
| `ISS-C2-02` | Medium | §Changelog scope paragraph + v1.6.0 "On method" — `git log --no-merges e039ff2..HEAD -- packages apps` returns **2 of 14** rows; base commit is one the same paragraph declares not on `main` |
| `ISS-C2-03` | Medium | §Changelog line 860 — heading "2026-08-25 → 2026-08-29" and "not described as release content" contradict the two rows this version added (2026-09-05, 2026-09-06) |
| `ISS-C2-04` | Medium | §Changelog `84e2203` row + preamble — PR #19 carries **two** branch-side commits (`0a5c542` **and `b6be070`**); only one is named, while the sibling `1c589c8` row names both |
| `ISS-C2-05` | Low | §7 — Doc 03 pinned at v2.12.0 as bare fact; it is v2.13.0 |
| `ISS-C2-06` | Low | §0 review-report row — Doc 03/Doc 04 pins stale; judged Low because the row carries its as-of date **and** its re-derivation command, and its material claims still hold |
| `ISS-C2-07` | Low | §7 reason 1 — ragged line wrapping (authoring; verbatim in spec OP 14) |

## Decisions made

- **FAIL at 93%.** Four Mediums; the pass bar needs ≥95% **and** zero C/H/M.
- Graded `ISS-C2-06` a **Low, not a Medium**, per the assignment's instruction to judge fairly a
  sentence carrying its own as-of date and re-derivation command — the staleness is same-day churn
  the document itself predicts, and the count and conclusion remain true.
- Graded `ISS-C2-04` a **Medium** despite being a one-line fix: it is a reproducibility failure in
  the very section rewritten this version for exactness, and the sibling row establishes the
  complete-enumeration convention it breaks.
- Did **not** reopen the `REL-LIM-18` closure content judged at cycle 1 — it verified clean.
- Routed to the **sre** for **v1.7.0** (four Mediums ⇒ minor bump is the floor), cycle 3 of 5.

## Gate audit

`node hooks/run_gates.cjs --audit` → **exit code 1** (before and after writing the report; Doc 09 is
not one of the hook's ten documents, so this report does not move it). Blocking: Doc 03 v2.13.0 and
Doc 04 v1.4.0 (*no report for this version*), Doc 07 v2.5.0 and Doc 08 v2.8.0 (*report exists but
fails the bar*). RTM: 138 Must rows, 16 COMPLETE, 122 OPEN, both signals agree, Gate-2 traceability
**NOT MET**.

## Open items / hand-off

- **sre (Chen Wei):** rework Doc 09 → v1.7.0 against the four Mediums; `ISS-C2-02`'s fix is to
  publish a command that actually reproduces the 14 rows. Carried debt unchanged: the empty `REF-##`
  register and the `REL-LIM-03` cascade into Docs 10/11.
- **project-manager:** cycle 3 of 5 for Doc 09 needs a neutral reviewer assignment on the next
  version. Doc 09 has now failed the same class on five consecutive versions — worth a candidate
  agent-learning: *a rework must execute every command it publishes as proof, and re-test every
  heading above a table it added rows to.*
- **Me (tester, in my owning role):** Doc 07 v2.5.0 → v2.6.0 and Doc 08 v2.8.0 → v2.9.0 rework
  remains owed; unaffected by this review.

## IDs touched

Reviewed/cited, none authored: `REL-LIM-01`…`REL-LIM-18` · `FR-020`, `FR-064`, `FR-121`, `FR-122`,
`FR-123`, `FR-129`, `FR-131`, `FR-132` · `NFR-003`, `NFR-009`, `NFR-020` · `ADR-003`, `ADR-006`,
`ADR-010` · `DES-097`, `DES-098` · `UT-0759`, `UT-0887`, `UT-0888` · `US-0134` · `H-19` · `MS-05`,
`MS-13`. New IDs created by me: `ISS-C2-01`…`ISS-C2-07` (report-local only).
