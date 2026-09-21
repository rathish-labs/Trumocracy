# Tester session note — 2026-09-21T02:00 — Doc 03 v2.15.0 neutral review (cycle 1 of 5)

```
Role:        tester (Ji-woo Park) — acting as NEUTRAL REVIEWER, not owner
Document:    docs/03-architecture-design-sdd.md v2.15.0 (owner: architect, Ravi Deshmukh)
Mode:        technical (document-review skill)
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md (recorded before dispatch)
Branch:      design/candidate-des-definition-a
Report:      artifacts/reviews/03-architecture-design-sdd-v2.15.0-technical-cycle1.md
Verdict:     FAIL — 88%, 0 Critical / 2 High / 4 Medium / 5 Low
```

## 1. What I did

- Read the assignment and the `document-review` skill first; confirmed independence (the architect
  owns Doc 03; I am the standing neutral reviewer for it, and the engineer is a routed party).
- Scoped read of Doc 03 v2.15.0 at every site the change entry names: header + the v2.15.0 Change
  entry; §5.2 rows DES-027/028/066/067/076 and the new DES-107/DES-108 sub-table; §10.11 constants
  sub-table; §10.12.3 ISS-C2-01 fold; §10.12.4 SCR-15/16/22/23; **§10.13.14 in full**; §11 four
  rows; §13 three rows; §15 trace sub-table; §16 Q18. Also read §10.13.2/§10.13.3/§10.13.13 as the
  precedent pattern, §5.6 and the §16 confirmations table.
- Read the **code** end to end rather than trusting assertions: `packages/protocol/src/candidates.js`
  (224 lines), `packages/sdk/src/candidates.js` (778 lines), `packages/sdk/src/eligibility.js`
  (`isUniqueInScope`), `apps/web/src/components/CandidateSelection.tsx`,
  `apps/web/src/components/ReceiptFreedomBanner.tsx`, `apps/web/src/i18n/en.ts` (candidates block).
- Read every cited UT: `packages/protocol/test/candidates.test.js` (UT-0891..0895),
  `packages/sdk/test/candidates.test.js` (UT-0896..0902), `apps/web/test/candidates.test.tsx`
  (UT-0904..0907), `packages/ui/test/PrivacyStatus.test.tsx` (UT-0903).
- Cross-checked Doc 06 v2.11.1 §3 + change history, Doc 02 §4 rows and §16.3.1, Doc 08 v2.12.3
  §3.1 gap rows, `DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md`, and the P02 engineer note.
- Ran `npm test` (full): **739/739 green** — contracts 95 · protocol 178 · sdk 287 · ui 25 ·
  indexer 16 · web 138. Ran `node hooks/run_gates.cjs --audit` before and after writing the report.
- Wrote only the review report and this note. **No document, no product code, no test was edited.**

## 2. Decisions made (as reviewer)

- **FAIL at 88%.** Two High + four Medium; the pass bar needs ≥95% and zero C/H/M.
- **ISS-01 High** — §10.13.14 DES-066 r4 "the surface says so **before the controls** (UT-0906)".
  At HEAD `feedback-visibility` renders *after* the upvote/downvote buttons
  (`CandidateSelection.tsx:428-442`) and UT-0906 asserts presence only. Classed High under the
  assignment's rule 1 (a rule stated as implemented that the code does not implement), and because
  a feedback vote is BINDING_VOTE-gated in this design, so notice placement is an FR-131 matter.
- **ISS-02 High** — DES-108 r3(a) rests a v1 rule on FR-082 ("a Supporter is anonymous
  unconditionally"), a DEFERRED-v2 Must; contradicts Doc 03's own §16 confirmations line "v1 makes
  no claim to these properties" and Doc 02 §16.3.1. Classed High under assignment rule 2.
- **ISS-03/04 Medium** — two Must clauses not covered while §15 posts the rows as
  design+code+tests present: FR-065's "same nullifier mechanism as scope-action limits" (v1 uses a
  store-local caster Set, not `isUniqueInScope`, and loses its atomic check-and-register) and
  FR-081's "recorded … with its state (active/inactive)" (mapping is document-only; no field, no
  read, no cited UT). **Both are rulings I will need in Doc 08 — flagged deliberately.**
- **ISS-05/06 Medium** — sweep-completeness: §5.2's SCR-assignment header note (lines 1472-73)
  still carries the inverted SCR-22/23 mapping unannotated while the two rows it feeds are
  annotated; §5.6's CANDIDACY state model omits CONSENTED/DEBATING/DEBATES_COMPLETE/VOTE_OPEN/
  NOT_ADVANCED/WITHDRAWN although the code header points readers at it.
- **Ruled sound and NOT reworkable:** the layering itself (one seam, two backings, nothing
  discarded, nothing pulled forward); the DES-107/DES-108 mints; the three honest OPEN rows
  (FR-039, FR-066, FR-093) with named blockers; the three clauses surfaced for my ruling rather
  than decided by the architect (FR-065 "unlinkable", FR-067 "logged", FR-085 TC-3476); the two
  ratified constants and their decisions record; the "Sites changed" list (verified complete
  against `git diff` — 15 hunks, 10 claimed site groups, no N+1th changed site, no residue).

## 3. Open items / what happens next

- Routed to the **architect** for rework → **v2.16.0** (MINOR bump, `Status: In Review`) →
  cycle 2 of 5 re-review. The PM assigns the cycle-2 reviewer.
- `--audit` shows Doc 03 BLOCK ("report exists but fails the bar") — expected mid-loop; the hook
  matched the report by its canonical `Reviewed document:` / `Document version:` fields, no
  filename fallback. No other document blocks.
- **Carry into my own Doc 07 v2.10.0 / Doc 08 v2.13.0 work** (not done in this session): FR-065's
  nullifier-mechanism clause and FR-081's active/inactive clause are now open questions on rows I
  was expected to be able to close; FR-085's TC-3476 re-homing is still mine to rule. If the
  architect's v2.16.0 leaves ISS-03/ISS-04 as derivations, those rows close with a recorded
  reading, not silently.
- RTM unchanged this session: 138 Must / 16 COMPLETE / 122 OPEN, both hook signals agreeing.

## 4. IDs touched

- **Minted:** none. (Review issue ids ISS-01..ISS-11 are local to the report.)
- **Read / cited, not changed:** DES-027, DES-028, DES-066, DES-067, DES-076, DES-093, DES-094,
  DES-095, DES-096, DES-097(b), DES-098, DES-100, DES-103, DES-106, DES-107, DES-108, ADR-015,
  ADR-024, ADR-025; FR-023, FR-036, FR-037, FR-038, FR-039, FR-054, FR-065, FR-066, FR-067,
  FR-079, FR-081, FR-082, FR-083, FR-085, FR-093, FR-106, FR-107, FR-108, FR-122, FR-123, FR-131;
  BR-004, BR-013, BR-016; SCR-15, SCR-16, SCR-22, SCR-23; UT-0891..UT-0907 (UT-0887 referenced);
  TC-3476; Q18; NOMINATION-MIN-01, MATURATION-01; OI-16, OI-17, OPEN-27.
- **Nothing renumbered, reused or deleted. No product code, test or document edited.**

## 5. SubagentStop hook block — recorded, not acted on

On exit the SubagentStop hook (`hooks/run_gates.cjs` → `hooks/check_gates.py`) blocked with:

> `03-architecture-design-sdd.md v2.15.0 (technical review) — report EXISTS`
> `(03-architecture-design-sdd-v2.15.0-technical-cycle1.md) but does not satisfy the gate:`
> `Verdict=FAIL, score=88% C=0 H=2 M=4`

**This is the expected mid-loop state and requires nothing from me.** The block is the mechanical
counterpart of my own verdict: the loop is open because v2.15.0 failed the bar, and it closes only
when the **owning role** (architect, Ravi Deshmukh) reworks to **v2.16.0** and a PM-assigned
reviewer scores that new version as cycle 2 of 5.

What I did **not** do, per the handbook and the hook's own text:

- I did **not** revise the verdict, the score or any severity to clear my own stop. The two Highs
  (ISS-01 false placement claim vs `CandidateSelection.tsx:428-442`; ISS-02 FR-082 Definition-B
  invocation contradicting Doc 03 §16) and four Mediums are each grounded in quoted document text
  and verified code/test evidence, and they stand.
- I did **not** write a second or replacement review report. A report written to clear one's own
  stop does not count as a cycle.
- I did **not** edit Doc 03, any other document, any product code or any test. Reviewer is
  read-only; rework belongs to the owning role.
- I did **not** self-appoint as reviewer for any other document. Reviewer assignment is the
  project-manager's, recorded before dispatch.

**Routing:** project-manager (Ana-Maria Petrescu) — record cycle 1 for Doc 03 v2.15.0 as FAIL in
the assignment's Outcomes table, route the six blocking issues to the architect for v2.16.0, and
assign the cycle-2 reviewer. The hook will keep blocking until a passing (or human-approved
ESCALATED) report exists for the **current** version — that is the loop working, not a defect.
