# SECURITY.md anchored FIND/REPLACE spec — 2026-09-20 debt-closure session

```
Author:        technical-writer (Nadia Hassan)
Target file:   SECURITY.md (root, public-facing, NOT one of the 14 numbered docs)
Session:       Debt-closure — REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md, item 2
Purpose:       (a) pin "the traceability matrix's current approved version" to a named,
               re-verified Doc 08 version instead of an unfalsifiable floating phrase;
               (b) add an anti-staleness maintenance note so the 16/122 figure cannot
               silently go stale again.
Verification:  Re-read directly against docs/08-traceability-matrix.md before writing this
               spec. Doc 08's front-matter reads "Version: 2.11.3" / "Status: Approved —
               ... (PASS 98%, 0C/0H/0M/1L ...)". §9 "Gate verdict & sign-off" (line 1841)
               publishes "Must rows with a complete chain | 138 / 138 | 16 / 138 | FAIL" and
               "Open Must rows | 0 | 122 | FAIL", restated in the §9 sign-off row as "Must
               138 · COMPLETE 16 · OPEN 122 (11.6%)". SECURITY.md's existing "138 /
               16 / 122" text is CORRECT against this version and is NOT changed in this
               spec, only pinned to its source version. Pinned at v2.11.3 per the dispatch
               instruction not to chase Doc 08 v2.12.0, which is being authored by the
               tester in parallel this session and was not read for this spec.
Applier:       project-manager, mechanically. Boundary rule observed: FIND starts at the
               "## Gate 2" line start and ends at the end of the existing paragraph (a full
               block-level unit); nothing mid-sentence is anchored.
Op count:      1
```

### OP 1 — Pin Doc 08 version in the Gate-2 paragraph; add a maintenance note

This op does two things to one contiguous block: (1) replaces the unfalsifiable phrase "the
traceability matrix's current approved version" with a named citation, "Doc 08 v2.11.3
(Approved)" — the words "matrix's current approved version" are deleted and replaced by that
citation; the rest of the existing paragraph's wording is unchanged, only re-flowed around the
new citation. (2) appends one new paragraph, "**Keeping this figure current.**", after the
existing paragraph. No existing sentence is deleted anywhere else in the block.

FIND:
````
## Gate 2 (launch readiness): NOT met

This project's own governance requires two human-approved gates before anything ships:
direction (Gate 1) and launch (Gate 2). **Gate 2 has not been reached.** As of the traceability
matrix's current approved version, of **138 Must-priority requirement rows, 16 are complete and
122 remain open**. Independent audits have not started, a rollback drill has not been executed,
and the MACI committee that would run the private ballot does not exist yet. See
[Doc 08](docs/08-traceability-matrix.md) and [Doc 09 §0](docs/09-release-notes.md) for the full,
current accounting — those documents, not this one, are the source of truth for the exact
figures, and they are updated more often than this file.
````

REPLACE WITH:
````
## Gate 2 (launch readiness): NOT met

This project's own governance requires two human-approved gates before anything ships:
direction (Gate 1) and launch (Gate 2). **Gate 2 has not been reached.** As of
[Doc 08](docs/08-traceability-matrix.md) **v2.11.3** (Approved), of **138 Must-priority
requirement rows, 16 are complete and 122 remain open**. Independent audits have not started, a
rollback drill has not been executed, and the MACI committee that would run the private ballot
does not exist yet. See Doc 08 and [Doc 09 §0](docs/09-release-notes.md) for the full, current
accounting — those documents, not this one, are the source of truth for the exact figures, and
they are updated more often than this file.

**Keeping this figure current.** The 138/16/122 count above is a **derived copy** of Doc 08 §9
("Gate verdict & sign-off"), copied here by hand rather than generated automatically, so it can
go silently stale if Doc 08 moves and this file is not updated to match. To re-derive it
mechanically, run `node hooks/run_gates.cjs --audit`, which reports the Must / COMPLETE / OPEN
triple read from the RTM's own row-status markers alongside Doc 08 §9's published figure, so a
reader can see directly whether the two independent signals still agree (`--audit` reports every
invariant; it does not block anything). **Re-check this figure on every Doc 08 version bump, and
before any public release.** Last verified: **2026-09-20**, against **Doc 08 v2.11.3**, where
`node hooks/run_gates.cjs --audit` reported 138 Must rows / 16 COMPLETE / 122 OPEN, agreeing with
Doc 08 §9.
````

### Notes for the applier

- `TD-RTM-01` (the `UT-0841`..`UT-0848` duplicate-id bullet, lines ~101-104) is **not touched** by
  this op and must not be — renumbering those ids is an engineer code touch, out of scope this
  session.
- The `REL-LIM-17` / `REL-LIM-18` bullets and the "Reporting a vulnerability" / "What not to
  report" sections are **not touched**.
- No other SECURITY.md text is in scope for this spec.
