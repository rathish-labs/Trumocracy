# SECURITY.md debt-closure delta — anchored FIND/REPLACE spec

```
Author:        technical-writer (Nadia Hassan)
Date:          2026-09-20
Target file:   SECURITY.md
Applies to:    current SECURITY.md on disk (post the PASS-96% v1 delta reviewed in
               artifacts/status/PUBLIC-FILES-REVIEW-2026-09-20-security-md.md)
Closes:        ISS-03 (mandatory — Doc 08 pin advance) and ISS-01 (the --audit
               parenthetical overclaim), both carried as owed actions in
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md
Does NOT touch: ISS-02 (maintenance-duty owner — routed to Doc 06 §7, engineer,
               in parallel), TD-RTM-01, REL-LIM-17/18, both vulnerability-reporting
               sections.
Verified before writing:
  - Doc 08 on disk is Version 2.12.3, Status: Approved
    (08-traceability-matrix.md lines 5-6; PASS report
    artifacts/reviews/08-traceability-matrix-v2.12.3-technical-cycle5.md,
    97%, 0C/0H/0M/2L, reviewer: reviewer-qa).
  - Doc 08's own v2.12.3 changelog states the count-preservation invariant
    verbatim: "node hooks/run_gates.cjs --audit reads 138 Must rows · 16
    COMPLETE · 122 OPEN, and the two independent signals AGREE." No figure
    moves in this delta — only the pin (v2.11.3 -> v2.12.3) and the
    last-verified line advance.
  - hooks/check_gates.py read directly: the module docstring (lines 1-40)
    names three invariants — (a) memory protocol, (c) review-and-rework loop
    (both PER-STOP), and (b) RTM zero-gap (GATE-2 CERTIFICATION ONLY). The
    audit() function (lines 548-603) prints PASS/BLOCK lines for invariant
    (c) and the RTM Must-row state for invariant (b) only; invariant (a)
    (memory protocol) never appears in audit()'s output. audit() performs no
    writes (read-only over docs/, artifacts/reviews/, and the RTM) and
    returns 1 if blocked else 0 via sys.exit(audit(...)) in main() — an exit
    code for an operator to read, not an action that blocks or halts
    anything else in this repository. "Changes nothing and stops nothing" is
    accurate: nothing is written, and nothing downstream acts on --audit's
    exit code to halt a process.
```

### OP 1 — advance the Gate-2 paragraph's Doc 08 pin (v2.11.3 -> v2.12.3)

FIND:
````
This project's own governance requires two human-approved gates before anything ships:
direction (Gate 1) and launch (Gate 2). **Gate 2 has not been reached.** As of
[Doc 08](docs/08-traceability-matrix.md) **v2.11.3** (Approved), of **138 Must-priority
requirement rows, 16 are complete and 122 remain open**. Independent audits have not started, a
rollback drill has not been executed, and the MACI committee that would run the private ballot
does not exist yet. See Doc 08 and [Doc 09 §0](docs/09-release-notes.md) for the full, current
accounting — those documents, not this one, are the source of truth for the exact figures, and
they are updated more often than this file.
````
REPLACE WITH:
````
This project's own governance requires two human-approved gates before anything ships:
direction (Gate 1) and launch (Gate 2). **Gate 2 has not been reached.** As of
[Doc 08](docs/08-traceability-matrix.md) **v2.12.3** (Approved), of **138 Must-priority
requirement rows, 16 are complete and 122 remain open**. Independent audits have not started, a
rollback drill has not been executed, and the MACI committee that would run the private ballot
does not exist yet. See Doc 08 and [Doc 09 §0](docs/09-release-notes.md) for the full, current
accounting — those documents, not this one, are the source of truth for the exact figures, and
they are updated more often than this file.
````

### OP 2 — advance the maintenance note's pin and last-verified line; fix the `--audit` overclaim

FIND:
````
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
REPLACE WITH:
````
**Keeping this figure current.** The 138/16/122 count above is a **derived copy** of Doc 08 §9
("Gate verdict & sign-off"), copied here by hand rather than generated automatically, so it can
go silently stale if Doc 08 moves and this file is not updated to match. To re-derive it
mechanically, run `node hooks/run_gates.cjs --audit`, which reports the Must / COMPLETE / OPEN
triple read from the RTM's own row-status markers alongside Doc 08 §9's published figure, so a
reader can see directly whether the two independent signals still agree (`--audit` only prints
this report — it changes nothing and stops nothing). **Re-check this figure on every Doc 08
version bump, and before any public release.** Last verified: **2026-09-20**, against **Doc 08
v2.12.3**, where `node hooks/run_gates.cjs --audit` reported 138 Must rows / 16 COMPLETE / 122
OPEN, agreeing with Doc 08 §9.
````

### Notes for the applier

- Both FINDs are whole paragraphs (block-level units bounded by blank lines on both
  sides), each matches exactly once in the current SECURITY.md.
- OP 1 and OP 2 target disjoint line ranges (the Gate-2 paragraph vs. the maintenance
  paragraph immediately below it) and can be applied in either order.
- No figure changes: 138 Must rows / 16 COMPLETE / 122 OPEN are untouched in both OPs —
  only the Doc 08 version pin (two sites: the Gate-2 paragraph and the last-verified
  line) and the `--audit` parenthetical wording change.
- ISS-02 (maintenance-duty owner) is deliberately not addressed here — see the
  assignment record; it is landing in Doc 06 §7 via the engineer, not in this file.
