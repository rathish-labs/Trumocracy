# Review assignment — Doc 09 (Release Notes) FR-131 rework cycle

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-02
Trigger:       Approver directive (Rathish, 2026-09-02): fix the Doc 09 FR-131 Critical
               flagged in the Docs-04/05/14 review session (line 148: "Your vote in this
               release is anonymous.") — sweep the whole document for the three violation
               classes Doc 14 carried (anonymity claims, tamper-evidence overclaims,
               two-tier omissions); verify against shipped code; neutral review to Approved.
Scope:         Documents only. Code-side FR-131 violations are ROUTED, not fixed.
```

## Ownership and rework

- **Owning role (reworks the document): sre** (Chen Wei — Doc 09 owner per its header and
  the roles table). The sre authors the correction as an anchored FIND/REPLACE spec; the
  project-manager transcribes it mechanically (Edit is unavailable to subagents and
  whole-file Write truncates — established house pattern from the Docs 04/05/14 session).
  Authorship remains with the sre.

## Neutral reviewer (per AL-CANDIDATE-3: assignment recorded BEFORE dispatch)

- **Reviewer: tester** (Ji-woo Park), loading the shared `document-review` skill.
- **Mode: business.** Doc 09 is not listed in the CLAUDE.md mode table (Docs 09–12 sit
  outside the ten hook-governed documents). Its customer-facing sections are public-facing
  plain language of exactly the Doc 14 class, and the trigger defect is a public-facing
  honesty claim — the business rubric applies, matching the Doc 14 precedent. This mode
  choice is recorded here as a PM decision, reviewable by the approver.
- **Rationale:** the tester verifies documented-vs-shipped behaviour (its Doc 07/08 remit)
  and carries the freshest FR-131 verification precedent — it reviewed Doc 14 through all
  five cycles of exactly these three violation classes and verified every fix against the
  shipped code. It owns neither Doc 09 nor its outcome. Doc 09 has no pin into Docs 07/08
  that would give the tester a stake (unlike Doc 04, where the tester was excluded).

## Exclusions

- **sre** — document owner (detector ≠ author).
- **technical-writer** — author of Doc 14, whose approved corrected language is the
  template for this rework; a reviewer scoring conformance to its own wording, and whose
  own approved document would be implicated by any Doc 09/Doc 14 inconsistency finding,
  is not neutral on the outcome.
- **product-owner** — Accountable for Gate 2, where Doc 09 is packet input (same exclusion
  as the Doc 14 assignment).
- **General-purpose agents** — never a valid reviewer (AL-CANDIDATE-3).
- Alternate if the tester is conflicted in a later cycle: **engineer** (no ownership of
  Doc 09 or its outcome; can verify claims against source).

## Independence enforcement

The reviewer scores and lists issues only; it never edits the document. All rework returns
to the sre. A blocked party may not author its own clearing artifact. Pass bar: score ≥95%
AND zero critical/high/medium. Cap 5 cycles, then ESCALATE to the human approver.

## Reports

`artifacts/reviews/09-release-notes-v<version>-business-cycle<k>.md` from
`docs/templates/document-review.template.md`.
