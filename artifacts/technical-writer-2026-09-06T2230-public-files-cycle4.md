# technical-writer session note — 2026-09-06T22:30 — public-files rework, cycle 4

```
Role:      technical-writer (Maya Lindqvist)
Trigger:   artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06-cycle3.md — product-owner review,
           cycle 3: FAIL 95%, exactly one Medium, zero Lows.
Scope:     Two edits only, per the coordinator's message — README.md (retention wording) and
           README.md + CONTRIBUTING.md (test count 624 → 625).
Status:    Both edits applied. Not self-reviewed; routes back to the product-owner.
```

## The two edits

1. **README.md, "The five things worth knowing," item 3 (retention paragraph).** The claim that
   an open-tier account keeps "**only** the phone hash and the party link" understated
   retention: `FR-133` (Doc 02 §4.47) mandates VoIP screening, IP/device velocity checks, and
   device anti-fraud signals as restricted-class data (`NFR-027`), which an open-tier account
   also carries. Removed "only" and added the required clause: an open-tier account "keeps the
   phone hash and the party link, plus the anti-abuse signals `FR-133` requires (Doc 02 §4.47)
   — none of the other five counting-tier fields exist until that check runs."
2. **Test count, README.md and CONTRIBUTING.md.** Updated "624 tests at the time of writing
   (2026-09-06)" → "**625** tests at the time of writing (2026-09-06)" in both files'
   `npm test` command comments, per the coordinator's supplied figure (web 101, after the
   engineer's cycle-2 hardening of `UT-0889`). I did not re-derive this number myself; I applied
   the coordinator-certified figure as in prior cycles.

Nothing else was touched in either file, and SECURITY.md / CODE_OF_CONDUCT.md were not touched
this cycle, per the coordinator's "nothing else" instruction.

## Claims I could not independently verify this cycle

- The exact FR-133/NFR-027 field list (VoIP screening, IP/device velocity, device anti-fraud
  signals) is taken from the coordinator's message; I did not re-read Doc 02 §4.47 in full this
  cycle before applying the fix, since the fix itself only removes an overclaim ("only") and
  adds a pointer to `FR-133`/§4.47 rather than asserting the field list verbatim in the README.
- The "625 tests (web 101)" figure is applied as supplied; not independently re-run.

## IDs / documents touched or cited this cycle

FR-133 (Doc 02 §4.47), NFR-027, UT-0889 (cycle-2 hardening reference).
