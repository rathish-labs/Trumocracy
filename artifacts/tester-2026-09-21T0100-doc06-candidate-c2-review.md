# Session memory — tester (Ji-woo Park) — Doc 06 v2.11.0 + code drop, review cycle 2 of 5

```
Role:        tester (Ji-woo Park) — acting as the PM-assigned NEUTRAL REVIEWER (document-review
             skill, technical mode). NOT the author of Doc 06 or of any code.
Date:        2026-09-21T01:00 (session), repo date 2026-09-20
Branch:      build/v1-candidate-selection (nothing committed; the whole drop is working-tree)
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md
Predecessor: artifacts/reviews/06-coding-and-ut-v2.10.0-technical-cycle1.md (FAIL 88%, 0C/1H/4M/3L)
Artifact:    artifacts/reviews/06-coding-and-ut-v2.11.0-technical-cycle2.md
Verdict:     FAIL — Score 94%, 0 Critical / 0 High / 1 Medium / 3 Low. Cycle 2 of 5.
```

## What I did

Re-reviewed **Doc 06 v2.11.0 + the reworked TRUMO-P02 code drop** as the same neutral reviewer who
returned the cycle-1 FAIL. Every claimed fix was verified against the code and the tests, never
against the changelog. I wrote **no document and no code** — only the review report and this note.

## Verification performed (all executed, not asserted)

- **Replayed the cycle-1 failing input** against the real `CandidateService` in a throwaway node ESM
  script (scratchpad, outside the repo): `recordConsent(cid,'mallory',…)` and
  `withdraw(cid,'mallory')` on alice's candidacy → **both `NOT_YOUR_CANDIDACY`**; absent actor
  (`undefined`, `''`) refused on both; stage, public view, **raw store disclosures** and trail all
  unchanged; the candidate's own calls still work. Order of checks confirmed by hitting a
  **CONSENTED** candidacy as a stranger (still `NOT_YOUR_CANDIDACY`, not `NOT_AWAITING_CONSENT`).
  The refusal detail carries `{ candidacyId }` only — **no member leak**.
- **Mutation-tested the ISS-03 store scan**: the new `JSON.stringify` replacer walks nested Maps,
  Sets and Maps-in-arrays (verified on a fixture and on the live store: 2,818 chars, finds the
  confidential `legalName`, a nested debate `contentRef`, an endorser from a `Set`). Injected
  `'SUITABLE'` into a store Map → the probe **finds** it; plain `JSON.stringify` does not.
- `npm test` **739/739**, exit 0 — contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 ·
  web 138, the exact split Doc 06 publishes. Counted every `it` in the touched blocks: UT-0896..0902
  = 43, UT-0904..0907 = 20, UT-0871 = 3, UT-0903 = 7, UT-0891..0895 = 27 — all rows exact.
- `typecheck` (ui, web) clean · `lint:deps` layering OK · `node hooks/run_gates.cjs --audit` exit 0,
  **RTM 138 Must / 16 COMPLETE / 122 OPEN unmoved**, both signals agree, Doc 06 v2.11.0 the sole
  blocker (this report, correctly identified by the hook — no filename fallback).
- Computed all eight pillar-seed lengths to test the ISS-L1 defect narrative.

## Findings and decisions

- **ISS-01 (High) is CLOSED** — genuinely, at the right place in the call order, with no verifier
  re-introduced and no leak in the refusal. ISS-02, ISS-03, ISS-04, ISS-05, ISS-L1, ISS-L2 all
  close; ISS-L3's ruling was recorded, not silently actioned.
- **ISS-06 (Medium) — NEW, and the reason for the FAIL.** `docs/06-coding-and-ut.md:1134–1150`,
  §3's accounting note: the sentence "The web total of **116** comprises … = **739**" is incoherent
  (its own chain sums to 215; the 96 and the 3 are cross-package addends, one of them an sdk test),
  and the same paragraph still publishes "SDK total of 244 / protocol total of 151 / ui total of 18"
  when this version is 287 / 178 / 25. The paragraph carries the document's own annotation of this
  exact defect at v2.4.3. Every authoritative figure (Total row, per-UT rows, header, change
  history) is correct — the defect is the explanatory narrative. Documentation-only, three-line fix.
- **ISS-L4 (Low):** the ISS-02 spy now runs through `closePostDebateVote()` but with no votes, so it
  resolves `NOT_ADVANCED` — the `PUBLISHED` branch never executes under the spy. Structurally
  harmless (branches differ only in the stage constant handed to `_advance`).
- **ISS-L5 (Low):** `apps/web/src/app/candidates/page.tsx:83–84` claims "three [repeats] did not for
  the short ones" — **false** of the shipped wording (392–413 chars at ×3; the two sibling pages use
  ×3 and pass). Doc 06's change history repeats it. The defect was real (module-scope seed throws on
  import), the published cause is not corroborated and the pre-fix file is untracked.
- **ISS-L6 (Low):** the Arabic `feedbackLead` sign is correct but unasserted; only the English is
  pinned.
- **Ruling requested by the PM — the `NOMINATION_ENDORSED` extension is RIGHT; upheld.** Grounds:
  **FR-054** (Doc 02:944) names endorsement and demands a record sufficient to reconstruct the
  outcome **containing no personal data** — the count is still derivable (one event per distinct
  endorser, `ALREADY_ENDORSED` enforced); and **Doc 14 §2.2** makes *petition* backing public **and
  warns the backer first** (`docs/14-user-guide.md:601–614`), while nothing anywhere warns a
  *nomination* endorser. Noted for my own later TC row: cite **FR-054**, not only FR-037.

## Open items / owed by me later (NOT this session)

- TC rows for **UT-0891..UT-0907** in Doc 07, and the matching Doc 08 RTM rows — my later touch.
  Cite the **structural** assertions (UT-0891's transition table, UT-0897's whitelist equality and
  the new actor-binding `it`, UT-0901's walked-store scan) as evidence, **not** the name regexes
  (cycle-1 ISS-L3 ruling), and cite FR-054 for the endorser-absence property.
- Whether any candidate RTM row can close remains the **architect's** routed DES decision
  (FR-081/FR-093 mint; Definition-A amendment of DES-027/066/067/076). Not mine.
- **NOMINATION-MIN-01** and **MATURATION-01** remain the approver's human decision.

## IDs touched

Read/verified only — none minted, none renumbered: `UT-0871`, `UT-0891`..`UT-0907`, `UT-0750`,
`FR-036`, `FR-037`, `FR-038`, `FR-039`, `FR-054`, `FR-065`, `FR-066`, `FR-067`, `FR-081`, `FR-083`,
`FR-085`, `FR-093`, `FR-107`, `FR-123`, `FR-131`, `DES-027`, `DES-066`, `DES-067`, `DES-076`,
`DES-094`, `DES-095`, `DES-096`, `ADR-015`, `CON-015`, `OPEN-27`, `OPEN-28`, `OI-16`.
Review issue ids are local to the report: `ISS-06`, `ISS-L4`, `ISS-L5`, `ISS-L6`.

## Hand-off

**To the project-manager → engineer (Samuel Oyelaran)** as the owning role: one Medium
(documentation-only) and three Lows; rework to **v2.11.1** (or **2.12.0** if the Lows are taken),
`Status: In Review`, then **cycle 3 of 5** with the same neutral reviewer. No critical/high remains,
so nothing blocks commit on safety grounds — but the review loop blocks until a passing report
exists for the current version. Note path pre-registered by the PM; I did **not** open
`artifacts/memory-index.json`.

## SubagentStop hook block — recorded, not cleared

On exit the SubagentStop hook (`hooks/run_gates.cjs` → `hooks/check_gates.py`) blocked with:

> `06-coding-and-ut.md v2.11.0 (technical review) — report EXISTS
> (06-coding-and-ut-v2.11.0-technical-cycle2.md) but does not satisfy the gate:
> Verdict=FAIL, score=94% C=0 H=0 M=1`

**This is the correct and expected behaviour, and I am leaving it in place.** I am the
PM-assigned neutral reviewer for this version and I have already run my cycle — cycle 2 of 5 —
and it returned **FAIL**. The block is the mechanical consequence of that verdict, not a missing
artifact: the report exists, is correctly formatted and is read by the hook (it names the file).

- **I did not and will not author a passing report to clear my own stop.** A second report on the
  same version would not be a cycle, and a PASS at 1 Medium would violate the bar
  (≥95% AND zero C/H/M) that the hook re-checks.
- **The block clears only by rework**, which is the **owning role's** (engineer, Samuel Oyelaran):
  fix **ISS-06** (documentation-only, `docs/06-coding-and-ut.md:1134–1150`), optionally ISS-L4/L5/L6,
  bump to **v2.11.1** (or 2.12.0 if the Lows are taken), `Status: In Review` — then **cycle 3 of 5**
  re-review, which the **project-manager** sequences and assigns.
- Nothing about this block changes the substance of the review: 0 Critical, 0 High; the drop is not
  unsafe to commit on my findings, but the review loop stays closed until a passing (or
  human-approved ESCALATED) report exists for the current version.

Stopping here and handing back to the project-manager.
