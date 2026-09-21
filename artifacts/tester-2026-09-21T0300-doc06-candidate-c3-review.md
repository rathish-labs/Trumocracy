# Session memory — tester (Ji-woo Park) — Doc 06 v2.11.1 + code drop, review cycle 3 of 5

```
Role:       tester (Ji-woo Park) — acting as the PM-assigned NEUTRAL REVIEWER, not as author
Date:       2026-09-21T03:00 (ISO-8601)
Branch:     build/v1-candidate-selection (nothing committed)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md
Skill:      document-review, technical mode, cycle 3 of 5
Artifact:   artifacts/reviews/06-coding-and-ut-v2.11.1-technical-cycle3.md
Verdict:    PASS 97% — 0 Critical / 0 High / 0 Medium / 3 Low
```

## What I did

Reviewed Doc 06 **v2.11.1** and the reworked TRUMO-P02 code drop as the neutral reviewer (the
engineer, Samuel Oyelaran, is the owning role and is excluded). Same reviewer as cycles 1 and 2.
**I edited no document and no product code** — score-and-list only. Verified every claimed fix by
execution or by hand-derivation rather than by changelog.

- **ISS-06 (the cycle-2 Medium) — closed.** Re-derived all five addend chains in §3's accounting
  note: sdk `[124+36+38+22+24]=244`, `244+42+1=287`; protocol `(82+44)=126`, `126+24+1=151`,
  `151+27=178`; ui `(14+4)=18`, `18+7=25`; web `[16+27+27+1+18+2+4+6+15]=116`, `116+2+18+2=138`;
  suite `95+178+287+25+16+138=739`. **Every sum holds and the note now derives web 138 from web
  addends only.** Swept the document for `736`, `+96`, `of 116`, `of 244`, `of 151`, `total of` —
  the cross-package splice is gone from every live site; surviving instances are true history in
  the v2.10.0/v2.11.0 entries.
- **L4 — taken, verified.** UT-0899's spy test now casts a SUITABLE vote, asserts
  `stage === PUBLISHED`, then asserts `officeHolder` never called. Ran verbosely (1 passed) and
  proved the spy **non-vacuous** with a positive control (one `service.officeHolder()` read
  registers exactly one `store.officeHolder` call).
- **L5 — taken, arithmetic reproduced exactly.** Reconstructed the quoted first wording: ×3 gives
  **282** for `finance`, **270** for `law` (the only shorter pillar name), below `MIN_PILLAR_CHARS`
  280. The false v2.11.0 explanation is retained verbatim with the v2.11.1 annotation governing.
- **L6 — taken.** Arabic `feedbackLead` sign pinned (`/يخصم/`) inside the existing `it`, framed as
  wording not fluency.
- **Suite and gates, all run:** `npm test` **739/739** exit 0 (contracts 95 · protocol 178 · sdk 287
  · ui 25 · indexer 16 · web 138 — contracts/protocol re-run separately because the root run's
  output tail truncated them); typecheck clean (ui, web); `lint:deps` "7 workspace package(s)
  checked — layering OK"; `node hooks/run_gates.cjs --audit` **exit 0**, 1 blocking document
  (`06-coding-and-ut.md v2.11.1`, expected — this report's absence), **RTM 138 Must / 16 COMPLETE /
  122 OPEN, both signals agree**, Gate-2 traceability **NOT MET**.
- **Regression battery:** replayed ISS-01's failing input standalone (all four hostile calls refused
  `NOT_YOUR_CANDIDACY`, refusal detail `null`, nothing destroyed, trail `["NOMINATED"]`, candidate's
  own withdraw still destroys); endorser-trail assertion intact; OPEN-27 clause-10 strings verbatim;
  §7 item 30 zero-row honesty intact incl. (viii); six judgement calls undisturbed; copy honesty
  green; FR-131 banner still precedes the vote controls by document-order assertion;
  annotate-don't-delete held in the Status block and both prior change entries.

## Decisions made (rulings)

1. **PASS at 97%, 0C/0H/0M/3L.** Cycle 3 of 5 — the loop closes with two cycles unused. I believe
   this PASS: the Medium is fully and verifiably closed and what survives is genuinely Low-only.
2. **The PATCH bump was WRONG — v2.11.1 should have been v2.12.0** (recorded as **ISS-L7, Low**).
   Doc 06 states the rule twice ("a Medium forces at least a minor bump", `:455`, `:1291`); the one
   patch carve-out it ever granted (v2.8.1, `:309–311`) is conditioned on six clauses including
   "**no test**", and this rework changed **two test files** plus a comment in a product source
   file. The engineer's ground recited three of the six criteria and omitted the two it fails.
   v2.7.0 is the exact twin and was ruled minor. **Low, not Medium**, because the change entry
   openly and accurately discloses both test changes — the document tells the truth about itself
   and files it under the wrong digit. **Disposition: do NOT renumber retroactively** (the PASS and
   the hook both key off v2.11.1); fold at the next touch and take the next version to **v2.12.0**,
   not v2.11.2.
3. **ISS-L8 (Low) — the site the sweep missed, and I missed it at cycles 1 and 2 too.** §3's table
   caption (`:1115–1116`) still reads "Counts are actual as of **v2.8.1**" above a table totalling
   **739** (v2.8.1 was 640), and its own parenthetical promises it "cannot go stale again on the
   next count change" — falsified twice since (+96 at v2.10.0, +3 at v2.11.0). Pre-existing; the
   v2.11.1 sweep rewrote the note *below* the table and left the caption *above* it. Low because no
   figure it governs is wrong and the correct currency is stated three lines below in a v2.11.1
   stamped note.
4. **ISS-L9 (Low) — mixed measurement basis.** The gate is `text.trim().length`
   (`packages/protocol/src/party.js:82`). The published "392–413" **is** trimmed and correct; the
   published "282 for finance" is **raw** (trimmed = 281). Conclusion unaffected in both directions
   (`law` fails at 269/270 either way).
5. **The Must count held: 138 / 16 / 122**, unmoved, both signals agreeing.

## Open items (carried, not blocking)

- **ISS-L7 / ISS-L8 / ISS-L9** carry to the engineer's next touch on Doc 06 (see the report's §6).
- **Owed by me (tester), a LATER touch — not this session:** `TC-####` rows for UT-0891..UT-0907 and
  the corresponding RTM rows in Docs 07/08. When I author them I will cite **FR-054** (not only
  FR-037) as the ground for the endorser-trail absence — the ruling I made at cycle 2 and re-affirm
  here.
- **Routed, not mine:** the architect's DES decision for FR-081/FR-093 and the Definition-A
  amendment of DES-027/066/067/076 — this is what determines whether any candidate RTM row can
  close. The approver's ratification of **NOMINATION-MIN-01** and **MATURATION-01**.
- **Gate 2 remains NOT MET on traceability** (122 Must rows OPEN). This PASS is a document/code
  quality verdict only; the merge signature is **reviewer-qa's**, not mine.

## IDs touched

- **Documents:** Doc 06 (`CODE-TRUMOCRACY`) **v2.11.1** — reviewed, not edited.
- **Issues raised this cycle:** `ISS-L7`, `ISS-L8`, `ISS-L9` (all Low, all carried).
- **Issues verified closed:** `ISS-06` (Medium, cycle 2), `ISS-L4`, `ISS-L5`, `ISS-L6` (Low, cycle
  2). Re-verified still closed from cycle 1: `ISS-01`..`ISS-05`, `ISS-L1`, `ISS-L2`.
- **UT blocks exercised/inspected:** `UT-0871`, `UT-0891`..`UT-0907`, `UT-0750`, `UT-0903`,
  `UT-0890`.
- **Requirements/design referenced:** FR-011, FR-036, FR-037, FR-038, FR-039, FR-054, FR-065,
  FR-066, FR-067, FR-081, FR-085, FR-093, FR-122, FR-123, FR-131, FR-132, NFR-020, NFR-023,
  CON-015, DES-027, DES-066, DES-067, DES-076, DES-085, DES-094, DES-095, DES-096, DES-100,
  ADR-011, ADR-013, ADR-015, OPEN-27, ARABIC-I18N, NOMINATION-MIN-01, MATURATION-01.

## Notes for whoever reads this next

- The engineer's rework quality is high and improving: L4 delivered a **wider** spied window than
  cycle 2 asked for, and L5 corrected a false claim the engineer had published itself — annotating
  rather than deleting the wrong version. That is the harder case of annotate-don't-delete and it
  was done correctly.
- The recurring family defect in this document is **accounting text that drifts from the numbers it
  explains**. It has now recurred at v2.4.3, at v2.11.0 and (as ISS-L8) in the table caption.
  Whoever reviews §3 next should check the **caption, the table and the note as three separate
  sites** — fixing one has twice left another stale.
- **I did not open or edit `artifacts/memory-index.json`** (roles never do; the PM pre-registers
  note paths). This note's path was pre-registered by the PM.
