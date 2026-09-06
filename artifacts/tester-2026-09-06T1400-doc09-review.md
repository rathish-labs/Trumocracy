# Session memory — tester (Ji-woo Park), acting as neutral reviewer for Doc 09 v1.5.0

```
Role:        tester (Ji-woo Park) — NEUTRAL REVIEWER, document-review skill, business mode
Date:        2026-09-06
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md (PM, Ana-Maria Petrescu)
Document:    docs/09-release-notes.md v1.5.0 (owner: sre, Chen Wei) — the REL-LIM-18 closure pass
Report:      artifacts/reviews/09-release-notes-v1.5.0-business-cycle1.md
Verdict:     FAIL — 93%, 0 Critical / 0 High / 3 Medium / 2 Low, cycle 1 of 5
Note:        NOT reviewing Doc 07/08 this session — those are my own documents; reviewer-qa has them.
             I did not edit Doc 09 (read-only on the reviewed document, per the skill).
```

## What I did

Read `CLAUDE.md`, the review assignment, the `document-review` skill and
`docs/templates/document-review.template.md`, then Doc 09 v1.5.0 end to end (902 lines). Ran the
business rubric (B1–B6). **Verified every load-bearing claim against source rather than against the
sre's narrative**, as the assignment required:

- `git show --stat 0a5c542` — commit exists, 17 files, message matches verbatim; `84e2203` is `HEAD`.
- Read all six fixed sites at `HEAD` and checked **every post-fix line pin**: `flags.js:42-47`,
  `Governor.sol:25-32`, `en.ts:400-408`, `ar.ts:359-366`, `client.js:450-459`,
  `ReceiptFreedomBanner.tsx:3-17`, `PrivacyStatus.tsx:205`/`:212`/`:323-326`. All exact except
  `ReceiptFreedomBanner.tsx`, which under-covers by one line (ISS-L2, Low).
- Confirmed the three regression guards exist at their cited lines: `UT-0887`
  (`apps/web/test/safety-surfaces.test.tsx:112`), `UT-0759`
  (`packages/ui/test/PrivacyStatus.test.tsx:198`), `UT-0888`
  (`packages/protocol/test/party-and-regions.test.js:302`).
- Re-ran `npm test`: **619 passed (95+151+244+18+16+95), exit 0** — matches the document's figure.
- Confirmed `PrivacyStatus` is still mounted nowhere: exported at `packages/ui/src/index.ts:12`,
  five consuming files carrying six non-render comments, exactly as the row enumerates.
- Read `docs/02-requirements-srs.md` §4.45 FR-131 and swept all 28 lines of Doc 09 containing
  "private"/"anonymous"/"receipt-free"/"secure": **word ban clean** — every use is negated, a
  quotation of the ban, a flag name, or a v2/`REL-LIM-01`-qualified reference.
- Checked the sre's Doc 03 pin (`v2.12.0, In Review, has not cleared its document-review`, stated
  twice): **true and not stale** — Doc 03 is v2.12.0/In Review and
  `03-architecture-design-sdd-v2.12.0-technical-cycle1.md` carries `Verdict: FAIL`.
- Transcription-residue scan (`git diff -- docs/09-release-notes.md`, suffix-duplicate scan in node,
  leaked `FIND:`/`REPLACE WITH:`/four-backtick grep, consecutive-duplicate-line scan): **clean**.
  All 11 ops of `artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md` applied.
- Diffed the `REL-LIM-18` row against `git show HEAD:docs/09-release-notes.md` line 555:
  **annotate-don't-delete honoured verbatim in all four cells**.
- `node hooks/run_gates.cjs --audit` → **exit code 1**. Doc 09 is outside the ten governed documents
  and is not listed. Blocking rows are Doc 03 v2.12.0 and Doc 04 v1.3.0 (reports exist, fail the
  bar) — neither is Doc 09's. RTM signals agree: 138 Must rows, 16 COMPLETE, 122 OPEN.

## Decisions made

1. **FAIL at 93%, 3 Medium.** The closure narrative is sound and I found no false claim about the
   code, the commit, the tests, the halt or the deployment posture. The failure is a single class:
   three currency/completeness claims that the record no longer supports.
2. **Attributed all three to authoring, not transcription.** None of the eleven spec ops touches the
   three affected lines, and the transcription itself was clean — the same attribution correction
   the v1.4.0 cycle made for its own ISS-01.
3. **Did not raise** the FR-131 "acknowledge to proceed" paraphrase gap in §"What this release does
   not do" as an issue: it is a future-framed `MUST` about `SCR-13`/`SCR-14`, not an over-claim, and
   it is unchanged from the version that passed at 97%.
4. **Rework increment = v1.6.0** (Medium-or-worse FAIL takes at least a minor bump, house rule).

## Issues raised

| ID | Sev | One line |
|---|---|---|
| ISS-01 | Medium | §0 line 260 says this document "carries one for its current version" — the current version is 1.5.0 and carries none; also under-reports Docs 03/04 now BLOCKing the audit. |
| ISS-02 | Medium | Links table line 807 still pins Doc 06 at **v2.4.3** while §0 (254) and the internal record (746) say **v2.5.1** — a third site the "two stale facts corrected" sweep missed. |
| ISS-03 | Medium | Changelog (755, 788) still cut at `HEAD (e039ff2)` and claims "complete as of `HEAD`" while omitting `0a5c542` — the commit this version exists to record, and it touches `packages/` and `apps/`. |
| ISS-L1 | Low | Unresolvable `REF-##` citations — **carried, not regressed**; `docs/refine-log.md` is still the 29-line unfilled template with zero entries, and the document discloses this accurately. PM-accepted, non-gating. |
| ISS-L2 | Low | `ReceiptFreedomBanner.tsx:3-17` pin under-covers by one line (`:18` carries the "do not copy warning text" instruction). Cosmetic. |

**Carried-Low status asked for by the assignment:** `REF-##` citations — **still carried**, correctly
disclosed (§7 owed-item 2). §0 staleness — **regressed** (that is ISS-01); v1.4.0 recorded it as
fixed in that edit, and the version bump re-opened the same cell.

## Open items / hand-off

- Doc 09 returns to the **sre (Chen Wei)** for rework into **v1.6.0**, `Status: In Review`, then
  cycle 2 of 5 with a neutral reviewer.
- Nothing here changes my own Doc 07/08 obligations, which remain owed per Doc 06 v2.5.1 §7 item
  26(c): `TC` rows for `UT-0887`, `UT-0759`, `UT-0888` and the `FR-131` RTM row (specced in
  `artifacts/tester-2026-09-06T1000-fr131-tc-rtm-spec.md`, reviewed separately by reviewer-qa).
- I did not commit, did not touch `artifacts/memory-index.json` (pre-registered by the PM), and did
  not edit any product code or Doc 09. `apps/web/tsconfig.tsbuildinfo` was not listed as modified
  after the test run, so no checkout was needed.

## IDs touched

`REL-LIM-18` · `REL-LIM-02` · `REL-LIM-03` · `REL-LIM-12` · `REL-LIM-15` · `REL-LIM-16` ·
`FR-131` · `FR-132` · `FR-122` · `FR-123` · `DES-098` · `UT-0887` · `UT-0759` · `UT-0888` ·
`US-0134` · `ISS-01`–`ISS-03`, `ISS-L1`, `ISS-L2` (this report's own IDs). No `TC-####` authored or
renumbered this session.
