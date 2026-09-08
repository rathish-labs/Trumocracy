# Session note — technical-writer (Maya Lindqvist) — 2026-09-06T20:00

```
Role:          technical-writer
Capacity:      NEUTRAL REVIEWER (document-review skill), NOT document owner this session
Assignment:    Coordinator message — Doc 01 v2.2.0 cycle 2 (I remain the assigned neutral
               reviewer, per artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md)
Reviewed:      docs/01-press-release-prfaq.md v2.2.0, business mode, cycle 2 of 5
Report:        artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md
Verdict:       FAIL — Score 96%, Critical 0 / High 0 / Medium 1 / Low 0
```

## What I did

Checked first for a partial/cut-off report at the target path — none existed, so this is a full,
fresh run. Read the product-owner's cycle-2 spec (`artifacts/product-owner-2026-09-06T1900-doc01-
cycle2-spec.md`, 12 OPs) and session note (`artifacts/product-owner-2026-09-06T1900-doc01-
cycle2.md`) to understand the rework's intent, then read `docs/01-press-release-prfaq.md` v2.2.0 in
full and verified each of the six cycle-1 issues (ISS-01 Critical .. ISS-06 Medium, from my own
`01-press-release-prfaq-v2.1.0-business-cycle1.md`) against its fix, line by line, re-checking
every new `FR/H/NFR` citation against Doc 02 §4.45/§16.4. Independently counted the body's marker
occurrences (grep) and confirmed 15 `(v2 target — see §0.)` + 1 `(v1 accuracy note — see §0.)`,
matching the header's restated count exactly (closing `ISS-06`). Checked all 12 OP boundaries for
transcription residue (orphaned `FIND:`/fences, duplicated headings) — none found. Re-swept §A–§F
independently for any further unmarked present-tense identity-linkage claim — found none beyond
what the PO's own sweep had already marked.

## The one new finding

The coordinator specifically asked me to rule on the *integrity / no-gatekeeper* claim class the
PO deliberately left unmarked (§A tenets 1 and 8, §E3 "Why blockchain at all?"). My judgement: the
§0 banner's override sentence is scoped only to identity-linkage ("link a person to a vote, to a
party membership or to a petition they backed") and does not cover tally/count-alteration claims.
Tenet 1 and the "Why blockchain at all?" answer are directly contradicted by the approver-CONFIRMED
Doc 02 §16.5 finding (Charter Rule 3 / T-05: in v1 the operator DB is the tally source of truth and
can in principle be altered before the hash is published — tamper-evidence, not tamper-prevention).
I classified this **Medium** (not Critical/High): it lacks the anonymity gaps' physical-safety
consequence, and the adjacent "You say 'no gatekeepers'..." FAQ already partly concedes the tension.
Tenet 8's claim is materially weaker/truer in v1 (append-only is enforced per `NFR-028`, Must,
IN-v1), so I did not weight it equally with Tenet 1. This single Medium caps cycle 2 at FAIL despite
an otherwise clean, well-grounded rework — all six cycle-1 issues verified closed.

## IDs touched

- **Reviewed:** `01-press-release-prfaq.md` v2.2.0 (business mode). **Verdict: FAIL** (96%, 1
  Medium), routed to **product-owner** for v2.3.0.
- **Verified closed:** cycle-1 `ISS-01`..`ISS-06`.
- **New:** cycle-2 `ISS-01` (Medium) — the integrity/no-gatekeeper claim class, citing Doc 02 §16.5
  T-05/Charter Rule 3 and `NFR-028`.
- I wrote only the review report and this note; Doc 01 itself was not edited (read-only per the
  document-review skill's independence rule).

## Open items / handoff

1. **Owed by product-owner:** rework Doc 01 to v2.3.0 — either mark the integrity/no-gatekeeper
   class (Tenet 1, "Why blockchain at all?") following the established `(v2 target — see §0.)`
   pattern, or obtain and record an explicit approver ruling that the class is out of scope for
   this posture rework. Route back for cycle 3.
2. I did not self-appoint to any other blocked document this session (Docs 02/04/06 remain outside
   my assignment, per the standing note in the review-assignment file).
3. Per instructions, I did **not** open or edit `artifacts/memory-index.json` — this note is
   pre-registered by the assigning agent.
