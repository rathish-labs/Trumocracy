# Session memory — tester (Ji-woo Park) acting as NEUTRAL REVIEWER, Doc 09 v1.7.0, business, cycle 3

```
Role:        tester (Ji-woo Park) — as PM-assigned neutral reviewer, NOT as Doc 07/08 owner
Date:        2026-09-06 (T1800)
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md
Skill:       document-review (business mode)
Document:    docs/09-release-notes.md v1.7.0 (owner: sre, Chen Wei)
Report:      artifacts/reviews/09-release-notes-v1.7.0-business-cycle3.md
Verdict:     FAIL — 92%, 0 Critical / 0 High / 3 Medium / 2 Low, cycle 3 of 5
```

## What I did

Read Doc 09 v1.7.0 end to end (1101 lines) and re-derived every load-bearing claim at source rather
than trusting the document or the rework spec.

- **Git claims re-derived myself:** `git rev-parse HEAD` = `84e2203`;
  `git log --no-merges --oneline HEAD -- packages apps` = **14 commits**, matching the two tables
  exactly (9 + 5); `git log --no-merges e039ff2..HEAD -- packages apps` = 2 (as the document now
  says); `git merge-base --is-ancestor` on `c04b4f2`, `31b6df9`, `e039ff2`, `0a5c542`, `b6be070` —
  all **not** ancestors of `HEAD`; `84e2203` single-parent `1c589c8`; `git show --stat b6be070` =
  `.gitignore` +3, `apps/web/tsconfig.tsbuildinfo` −1; author/commit dates for all 18 cited SHAs.
- **Suite re-run independently:** `npm test` → 95 + 151 + 244 + 18 + 16 + 95 = **619 passed, exit 0**.
- **Gate audit:** `node hooks/run_gates.cjs --audit` → **exit code 1**; 2 documents blocking
  (Doc 07 v2.5.0, Doc 08 v2.8.0); RTM 138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing.
  Doc 09 is outside the hook's ten, so the exit code is not a signal about Doc 09.
- **Cross-document pins checked at the moment of review** via `head -8`: Doc 03 **v2.13.0 Approved**
  (report PASS 97%), Doc 04 **v1.4.0 Approved** (PASS 96%), Doc 06 **v2.5.1 Approved**, Doc 07
  **v2.5.0 In Review** (FAIL 92%), Doc 08 **v2.8.0 In Review** (FAIL 85%), Doc 14 **v2.3.0 Approved**.
  `ls artifacts/reviews | grep -cE "^(10|11|12)-"` = **0** — Doc 09's Docs 10/11/12 claim is accurate.
- **Transcription check** (the assignment says residue is a finding): whole-file scan for leaked
  four-backtick fences and `FIND:`/`REPLACE WITH:` markers (clean), adjacent-duplicate-line scan
  (**two hits**), and a mechanical boundary comparison of all 12 ops in
  `artifacts/sre-2026-09-06T1700-doc09-cycle3-spec.md` (REPLACE[0] vs FIND[0], REPLACE[-1] vs
  FIND[-1]) — **ops 2 and 11 are defective; the other ten are faithful.**

## Findings

**All four cycle-2 Mediums (`ISS-C2-01`…`-04`) and all three cycle-2 Lows (`-05`, `-06`, `-07`) are
closed at source**, two of them by the stronger remedy (delete the duplicated fact; publish a command
that actually re-derives the record). `ISS-L1` (unresolvable `REF-##`; `docs/refine-log.md` still
holds zero entries) is correctly carried for a sixth cycle. The `REL-LIM-18` closure is not
regressed, the `FR-131` word ban is clean for a **sixth** consecutive version, and the HALTED /
deployed-nowhere posture is never softened.

New issues:

| ID | Sev | Location | Finding |
|---|---|---|---|
| `ISS-C3-01` | Medium | header blockquote; lines 108–109 | `OP 2` boundary error: the template's `**Based on:** Keep a Changelog…` line is **silently deleted** (every other governed doc keeps its equivalent; the template defines it at `:12`), and the `Document history — v1.6.0` line is **duplicated**. |
| `ISS-C3-02` | Medium | §7, line 1071; lines 1080–1081 | `OP 11` boundary error: the routing sentence is truncated to *"…code strings** (routed / is no longer routed to the engineer"* — unclosed parenthesis, ungrammatical, and the re-scope + "came back fixed on 2026-09-05" facts are lost; plus a **duplicated** line. |
| `ISS-C3-03` | Medium | §Changelog preamble line 920 vs closing paragraph line 972 | Preamble says "**three** branch-side rows"; the same section's closing paragraph says "**two** branch-side rows (`c04b4f2`, `31b6df9`)". Two is right. The signature failing class, authored in the paragraph rewritten this version for exactness. |
| `ISS-C3-04` | Low | lines 670, 783 (×2) | "merged to `main` on 2026-09-05" — `0a5c542`/`b6be070` were *authored* 2026-09-05; the squash `84e2203` on `main` is dated **2026-09-06**, as the document's own changelog row states. One-day slip; SHAs make it reproducible. |
| `ISS-L1` | Low | v1.7.0 history; §7 owed-item 2 | Carried, correctly disclosed, sixth cycle. Non-gating. |

**Judged fairly and NOT raised:** the §0 volatile-snapshot restructure. It leads with claims that do
not move, dates the snapshot, tells the reader not to quote it forward, names the re-derivation
command, and every figure in it is true at review time. I did not manufacture a Medium out of it.

## Decisions made

- **FAIL at 92%** (B1 97 · B2 86 · B3 94 · B4 85 · B5 98 · B6 92) → route to the **sre (Chen Wei)**
  for **v1.8.0**, `Status: In Review`, **cycle 4 of 5** — the second-to-last cycle before the cap.
- Both transcription-residue findings attributed to **authoring** (defective FIND/REPLACE boundaries
  in the spec), not to the applier, and verified op-by-op before saying so.
- Recommended check to add to the spec author self-check, above the "simulated applier" line:
  *for every op, REPLACE[0] == FIND[0] and REPLACE[-1] == FIND[-1] unless the op header names the
  change to that line.* A clean apply proves the anchors matched, not that the result reads correctly.

## Open items (not mine to fix)

- sre: `ISS-C3-01`, `-02`, `-03` (gating), `-04` (non-gating), `ISS-L1` (carried); the Doc 10/11
  `REL-LIM-03` cascade and the empty `REF-##` register, both honestly owed in §7.
- tester (me, as **owner**, in a separate workstream — not this session): Doc 07 v2.5.0 → v2.6.0 and
  Doc 08 v2.8.0 → v2.9.0 rework. Those two are the only documents blocking the audit; that block is
  expected and is not a Doc 09 signal.

## IDs touched

`REL-LIM-18`, `REL-LIM-02`, `REL-LIM-03`, `REL-LIM-12`, `REL-LIM-15`, `REL-LIM-16`, `FR-131`,
`FR-132`, `UT-0887`, `UT-0759`, `UT-0888`, `US-0134`, `ISS-C2-01`…`ISS-C2-07`, `ISS-L1`,
`ISS-C3-01`…`ISS-C3-04`. Commits referenced (read-only): `84e2203`, `1c589c8`, `0a5c542`,
`b6be070`, `c04b4f2`, `31b6df9`, `e039ff2`, `c854c0a`, `b8cf2ce`.

## Constraints honoured

Read-only on Doc 09 and on all product code — I wrote only this note and the review report. I did
**not** modify `artifacts/memory-index.json` (the PM pre-registered this note). Nothing committed.
I reviewed only Doc 09, the single document assigned to me; I did not self-appoint for any other.
