# Architect session note — 2026-09-21T01:00 — TRUMO-P03 candidate/election DESs made Definition-A

```
Role:        architect (Ravi Deshmukh — Principal Architect; owning role for Doc 03)
Date:        2026-09-21
Branch:      design/candidate-des-definition-a (off main at 12fe4a6, PR #22 merged)
Deliverable: Doc 03 v2.14.1 (Approved) → v2.15.0 (In Review → see §6 for the outcome)
Reviewer:    tester (Ji-woo Park, new instance), PM-assigned BEFORE dispatch —
             artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md
Entry state: npm test 739/739; gate --audit exit 0; RTM 138/16/122, signals agreeing.
Scope:       DOCUMENTS ONLY. No product code, test or UT written or edited.
Index:       my note path was pre-registered; I did not open artifacts/memory-index.json.
```

## 1. Phase-1 map (reported before designing) — see the assignment record §"Phase-1 map"

Nine candidate/election Must rows. Six blocked purely on the DES pointing at the on-chain
Elections contract while working, tested v1 code exists (FR-036, FR-037, FR-065, FR-067, FR-081,
FR-085); three cannot close this session (FR-039 office ballot not built; FR-066 "verifiable
record" needs DES-097 anchoring; FR-093 question phase and election not built). Two findings the
brief did not anticipate: FR-037's DES is **DES-028** (amended too), and FR-093's schedule
durations were never set at OI-17 closure (→ Q18).

## 2. What v2.15.0 changed

- **§10.13.14 (new):** the `ICandidateStore` seam (member groups × data class × v1/v2 backing);
  counting-tier placement (CANDIDACY at `nominate`; BINDING_VOTE at the two votes; the service holds
  no verifier and no ballot service); DES-027/028/066/067/076 amended in place; DES-107 (FR-081 —
  the Candidate tier is DERIVED from PUBLISHED, never assigned); DES-108 (FR-093 — the schedule is
  the immutable election record; question phase designed, owed); honesty; failure modes; an
  evidence map per FR (design claims only — the row rulings are the tester's).
- **§5.2:** five rows annotated (Elections contract struck through in Tech and re-homed as the v2
  backing); a v2.15.0 sub-table minting DES-107/DES-108.
- **§10.11:** NOMINATION_ENDORSEMENTS_MIN = 5 and NOMINATION_MATURATION = 30 days recorded as
  approver-ruled (DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md) with rationale and amendment layer;
  the unset phase durations recorded.
- **§10.12.3:** ISS-C2-01 (the one carried Low) folded. **§10.12.4:** SCR-15/16/22/23 annotated as
  built; the §5.2 ↔ §10.12.4 SCR-22/SCR-23 inversion recorded, not swapped.
- **§11** four rows, **§13** three rows, **§15** one trace sub-table, **§16** Q18.

## 3. Decisions made

- The conventional backing IS the v1 design (DES-095/096 pattern); the Elections contract is the
  deferred v2 backing behind the same seam. Nothing discarded, nothing pulled forward.
- FR-066's "verifiable record" and FR-067's "logged" are stated as v1 boundaries (DES-067 rules
  6–7), not papered over; FR-065's "unlinkable" declared Definition-B and NOT claimed for v1. All
  three routed to the tester's ruling rather than decided in Doc 03.
- DES-068's founding-cohort waiver is NOT applied to nomination maturation in v1 — recorded as
  Q18(b), a product decision.

## 4. Routed, not claimed

| To | What |
|---|---|
| tester (this session, folded in) | Doc 07 v2.10.0 TC rows for UT-0891..UT-0907; Doc 08 v2.13.0 per-row rulings and the new Must count |
| product-owner | Doc 02 annotations for the two constants (FR-036, FR-023), as COOLDOWN-01's; Q18 |
| engineer | "flagged for ratification" comments in candidates.js and Doc 06 §7 item 30(iii) → cite the decisions record (next Doc 06 version, v2.12.0); office ballot + question phase build (§13) |
| architect (next Doc 04 touch) | §14 re-narrowing of the `TS-V1-*` band if Doc 07 draws from TC-3592+ |

## 5. IDs touched

Minted: DES-107, DES-108, Q18. Amended: DES-027, DES-028, DES-066, DES-067, DES-076.
Annotated: SCR-15, SCR-16, SCR-22, SCR-23; §11 FR-036/065/066/067 rows. Cited: FR-023, FR-036,
FR-037, FR-038, FR-039, FR-054, FR-065, FR-066, FR-067, FR-079, FR-081, FR-082, FR-083, FR-085,
FR-093, FR-106, FR-107, FR-108, FR-122, FR-123, FR-131, DES-001, DES-007, DES-029, DES-035,
DES-068, DES-075, DES-095, DES-096, DES-097, DES-098, DES-103, DES-106, ADR-015, ADR-024,
NOMINATION-MIN-01, MATURATION-01, COOLDOWN-01, OI-16, OI-17, UT-0891..UT-0907.
Reused/renumbered: none.

## 6. Outcome

- **Doc 03:** v2.15.0 FAIL 88% (0C/2H/4M/5L; tester) — both Highs mine and the same class: a design
  sentence describing what the code should do as if it did (the FR-131(b) feedback disclosure renders
  AFTER the controls, not before; FR-082 anonymity invoked in a v1 rule). Reworked to **v2.16.0** (MINOR):
  Highs corrected to what ships with the placement recorded as OWED; FR-065's "same nullifier mechanism"
  recorded as a v1 DIVERGENCE; FR-081's active/inactive stated as a derivation, not a fact; the §5.2 SCR
  note and the §5.6 CANDIDACY sketch annotated. v2.16.0 **PASS 97%** (0C/0H/0M/2L), Approved carrying two
  Lows (UT-0887 does not assert non-dismissability either; "nine stages" — the enum has eight).
- **Doc 07:** v2.10.0 FAIL 91% (2M/6L) → v2.11.0 FAIL 94% (1M/3L) → **v2.12.0 PASS 97%** (0/0/0/2L),
  Approved. 28 cases TC-3592..TC-3619 in a new suite TS-CANDIDATE; runs R-21 (739/739) and R-22.
  Doc 04 §14 must re-narrow the TS-V1-* floor to TC-3620 — mine, next Doc 04 touch.
- **Doc 08:** v2.13.0 FAIL 87% (2H/3M/3L) → v2.14.0 FAIL 94% (2M/2L; both Highs fixed, the reviewer
  would sign all three closures) → v2.15.0 FAIL 96% (1M/2L — the self-referential sweep count) →
  **v2.16.0 PASS 98%** (0/0/0/2L), Approved; the sweep DEVICE replaced (frozen reference + live
  observation + invariant). **Merge sign-off signed on FR-036, FR-037, FR-085.** Four cycles used,
  one unspent; the cap was not reached.
- **Session totals:** three documents, nine review cycles (Doc 03 2 · Doc 07 3 · Doc 08 4), all
  neutral, all recorded before dispatch; `npm test` 739/739 (95 · 178 · 287 · 25 · 16 · 138) on the
  final tree; `--audit` exit 0, 0 blocking; RTM 138 / 19 / 119, both signals agreeing; Gate 2 NOT MET.
- **Owed after this session (routed, not claimed):** engineer — FR-039 office ballot + tie-break
  field; FR-065 UNIQUE constraint + convergent `isUniqueInScope` form + FR-131(b) disclosure before
  the feedback controls; FR-067 refusal trail event (one event from closing); FR-081 stage→state
  record or assertion (one `it` from closing); FR-093 question phase; the "flagged for ratification"
  comments. Architect — Doc 04 §14 floor → TC-3620; DES-097 S-8 anchoring mapping; ICandidateStore
  Postgres mapping; the two Doc 03 Lows. Product-owner — Doc 02 constants annotation; TD-RTM-05
  (§16.3.1 classes FR-065 IN-v1 "N" for a requirement v1 does not satisfy); Q18. Tester — TC-3540
  promotion on R-22; TD-RTM-02 denominator recount; the carried Doc 07/08 Lows.
- **Rulings (tester, Doc 08):** FR-036, FR-037, FR-085 CLOSE; FR-038 (Should) CLOSE; FR-039, FR-065,
  FR-066, FR-067, FR-081, FR-093 OPEN → G-NOMECH with the failing clause named (FR-081/FR-093 leave
  G-TRACE). Two of the five clauses I hoped would pass by derivation were ruled against (FR-081 "with
  its state"; FR-067 "logged"). **Must 16 → 19 COMPLETE · 122 → 119 OPEN.**
