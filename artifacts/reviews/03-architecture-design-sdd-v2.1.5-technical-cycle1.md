# Doc 03 — Architecture Design (SDD) v2.1.5 — Technical Review — Cycle 1

```
Reviewed document: 03-architecture-design-sdd.md
Document version:  2.1.5
Review mode:       technical
document:          docs/03-architecture-design-sdd.md
version:           2.1.5
mode:              technical
cycle:             1
reviewer:          Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:              2026-08-21
score:             99.5
critical:          0
high:              0
medium:            0
low:               1
verdict:           PASS
```

---

## Scope of this review

Doc 03 v2.1.5 is declared a **registration-only patch** applying the REC-1/REC-2 ceremony-burden
and proving-system decisions (Rathish, 2026-08-21;
`artifacts/status/DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md`) to the ADR layer. The
declared touch-points are:

1. Header (version 2.1.4 → 2.1.5, Status → In Review, last-updated, changelog)
2. §12 preamble: ADR count twenty-one → twenty-two; range ADR-001..ADR-021 → ADR-001..ADR-022
3. §12 ADR-005 row: dated amendment note (Decision-2 "≥ 500 contributors" convention superseded)
4. §12 ADR-022 row: new row registering the Groth16-Phase-1 ADR

Also reviewed per assignment:
- `docs/adr/ADR-022-groth16-phase1-commitment.md` (new ADR, full fidelity check against
  REC-1 and REC-2)
- `docs/adr/ADR-005-zk-stack.md` Amendment block (fidelity of the amendment-only scope)
- `docs/04-test-strategy-master-plan.md` v1.0.2 §Z6 surgical fix (fidelity only; Doc 04 has
  no document-review loop of its own — see Doc 04 standing debt note below)

---

## Diff-scope verification — Doc 03

Diff confirmed via `git diff HEAD -- docs/03-architecture-design-sdd.md`. Three and only three
hunks found:

1. Header block (version, status, last-updated, changelog) — expected
2. Preamble: "twenty-one" → "twenty-two"; "ADR-001..ADR-021" → "ADR-001..ADR-022" — expected
3. §12: ADR count line updated, ADR-005 row amended, ADR-022 row appended — expected

**No §1.1 changes** (§1.1 already reflects SRS v2.4.0 from v2.1.4; changelog confirms "no §1.1
count change"). **No DES additions.** **No §16 changes.** No design content changes anywhere
outside §12. **Scope is registration-only as claimed.** ✓

**No ceremony figure existed in the Doc 03 body to correct.** Verified by searching the full
document body (outside §12) for "≥ 500", "500 contributor", "ceremony" references. Ceremony
references in the body are: DES-038 (VerifierRegistry binds circuits to their published
ceremony — no size figure), DES-089 (stewards coordinate a ceremony — no size figure), §5.7
line 507 (ceremony transcripts on IPFS — no size figure), §9 directory listing line 722
(ceremony scripts — no size figure), §11 threat-table line 791 (two audits — no size figure),
§12 line 1122 (Groth16 needs a per-circuit ceremony — no size figure). None carry the "≥ 500"
convention. ✓

---

## ADR-022 fidelity — REC-2 (Groth16 proving-system decision)

Source: DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md §2 (REC-2).

| REC-2 element | ADR-022 coverage | Match |
|---|---|---|
| Record decision to stay with Groth16 | "Groth16 on bn254 stays as the Phase-1 proving system." — Decision section | ✓ |
| Rationale: ceremony burden collapsed | "The ceremony burden that would have justified a universal-setup switch has collapsed. Phase-1 reuses PPoT Hermez at ~$0; per-circuit phase-2 is a small campaign of days. The original motivation for switching — avoiding months of ceremony overhead — no longer applies at Phase-1 scale." | ✓ |
| Rationale: cheapest on-chain verification with ADR-005 table numbers | "Groth16 verification is 3 pairings + a few scalar mults: ~250k gas, constant regardless of circuit size. The alternatives cost materially more: PLONK/KZG ~350–500k gas, Halo2/IPA ~1–5M gas (or recursion), Noir + UltraHonk ~400–700k gas. At ADR-001 fee levels Groth16 is the only option that reliably stays under a cent — the sub-cent participation anchor (NFR-005) is the constraint that ultimately decides this." | ✓ |
| Rationale: most auditor availability | "Circom + Groth16 has the largest audited corpus in the ZK ecosystem. NFR-009 (two independent audits before Gate 2) is unchanged by these decisions and is more readily satisfiable with Groth16 than with any alternative toolchain." | ✓ |
| Rationale: existing design SC-01 binding already Groth16-shaped | "The SC-01 trust-anchor binding (ADR-017: trust-anchor public input, per-class circuits, on-chain verifierAddress and zkeyHash freeze in the verifier registry) was designed for Groth16's one-proof-one-verifier model. A proving-system switch would require redesigning the verifier registry, the circuit artefact hash binding (DES-052), and the SC-01 security argument." | ✓ |
| Accepted trade-off: per-circuit phase-2 vs universal-setup amortisation | "Each new circuit in Phase 2+ requires its own small phase-2 ceremony. A universal-setup system (PLONK, UltraHonk, Halo2) would amortise one ceremony across all circuits..." — Accepted trade-off section, with explicit Phase-1 justification | ✓ |
| Revisit trigger: Phase 2+ circuit-count dominance, tied to IProofVerifier seam / ADR-005 commitment 6 | "Revisit trigger: Phase 2+ grows the circuit count enough that per-circuit phase-2 ceremonies dominate the engineering and operational budget. At that point the IProofVerifier seam (ADR-005 Decision 5) and the Phase-4 re-evaluation commitment (ADR-005 Decision 6) provide the upgrade path: a verifier swap, not a redesign." | ✓ |
| Near-irreversible, Charter-adjacent framing | Dedicated "Near-irreversibility" section: "This is a near-irreversible, Charter-adjacent commitment." Explains verifier registry, SC-01 binding, audit pipeline are Groth16-shaped; migration is a verifier swap by design but full re-audit in practice. Charter-adjacent rationale stated. | ✓ |
| Alternatives rejected with quantified costs | Full "Alternatives rejected" section: PLONK/KZG ~350–500k gas (+40–100%), Halo2/IPA ~1–5M gas (4–20×), UltraHonk ~400–700k gas (+60–180%). Mobile proving penalty: 2–4× slower on WASM. Toolchain/audit reset cost. MS-08 schedule impact stated. | ✓ |
| NFR-009 two-audits explicitly unchanged | "NFR-009 (two independent audits before Gate 2) is unchanged by these decisions and is more readily satisfiable with Groth16 than with any alternative toolchain." | ✓ |

**REC-2 fidelity: all elements confirmed.** ✓

---

## ADR-022 fidelity — REC-1 (ceremony-burden correction)

Source: DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md §2 (REC-1) and §3 (clarification).

| REC-1 element | ADR-022 coverage | Match |
|---|---|---|
| One-honest-contributor soundness stated | "Groth16 phase-2 soundness requires ONE honest contributor. Contributor counts above one are set by target assurance — the goal of a larger ceremony is social assurance (external verification, public scrutiny, replaceability of the poison), not cryptographic necessity." | ✓ |
| Assurance-based sizing as design guidance, NOT a new convention MUST | "Sizing guidance (design rationale; this is NOT a MUST): A phase-2 campaign with 5–15 contributors drawn from mutually-independent institutions (universities, civil society organisations, established NGOs, public-interest technologists) provides sufficient assurance..." | ✓ |
| Independence is the asset, not headcount | "The rationale for favouring fewer diverse independent contributors over many contributors from a single social network: independence is the asset, not headcount." | ✓ |
| PPoT / Hermez ~$0 reuse | "Phase-1 reuses the Perpetual Powers of Tau (Hermez, ≫80k contributors) at ~$0 for the circuit-agnostic phase-1 setup" | ✓ |
| What remains MUST: transparency obligations | "What is MUST: ceremony transparency is a MUST. Concretely: attestations published for every contribution, published beacon, ceremony transcript published permanently (ADR-009), every contribution verifiable by anyone with snarkjs zkey verify, on-chain zkeyHash frozen in the verifier registry (DES-052), client refuses to prove against an unrecognised zkeyHash (ADR-005 Decision 5; DES-052). These obligations are unchanged from ADR-005." | ✓ |
| Gate-2 SET REMAINS SIX TRANSCRIPTS | "The Gate-2 programme requires **six** phase-2 ceremony transcripts" — with table binding each to Must requirements via Doc 08's G-CIRCUIT gap rows | ✓ |
| FR-121 enrolment-family reduction explained | "The enrolment family reduction (FR-121 dividend): naming Aadhaar as the single Phase-1 credential format collapses what would have been three adapter-class enrolment circuit variants (eIDAS, ICAO, offline KYC) to one concrete circuit for Phase 1. This is where 'one circuit (Aadhaar enrolment)' in REC-1 applies." | ✓ |
| Five non-enrolment circuits NOT cancelled | "The five non-enrolment circuits are not cancelled — their ceremonies are corrected in scale (small per-circuit phase-2s), not eliminated." | ✓ |
| Critical-path change: duration/cost, not transcript count | "The original critical-path penalty came from the 'six × ≥ 500-contributor' size assumption. Six small per-circuit phase-2s are batchable into a single contributor campaign of days. The critical-path change is in duration and cost; the number of transcripts is unchanged." | ✓ |

**One issue — see ISS-01 below:** The "Gate-2 transcript set" section attributes the six-circuit
count as "confirmed by the clarification in §3 of the decision record" when §3 actually
describes a pending-confirmation clarification request to the approver.

**REC-1 fidelity: all substantive elements correctly captured; one LOW attribution imprecision.** ✓ (with ISS-01)

---

## ADR-005 amendment block fidelity

Source: DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md §4 (ADR-005 correction site) and §5.

| Amendment requirement | ADR-005 amendment coverage | Match |
|---|---|---|
| Supersede ONLY the "≥ 500 contributors" convention | "What changes: the ≥ 500 contributor count in Decision 2 is superseded. Contributor counts for all phase-2 ceremonies are now set by assurance-based sizing with rationale as specified in ADR-022." | ✓ |
| Transparency obligations retained | "attestations published for every contribution, public randomness beacon, ceremony transcript published permanently (ADR-009), every contribution verifiable with snarkjs zkey verify" | ✓ |
| Beacon retained | "public randomness beacon" — explicitly in the "What does not change" list | ✓ |
| Transcript retained | "ceremony transcript published permanently (ADR-009)" — explicitly retained | ✓ |
| zkey-verify obligation retained | "every contribution verifiable with snarkjs zkey verify" — explicitly retained | ✓ |
| DES-052 on-chain zkeyHash freeze retained | "on-chain zkeyHash frozen in the verifier registry (DES-052), client refuses to prove against an unrecognised zkeyHash (Decision 5; DES-052)" | ✓ |
| Decision body untouched | "The Decision 2 body text is not altered; it is a historical record. Read it with this amendment applied." | ✓ |

**ADR-005 amendment fidelity: all requirements met.** ✓

---

## Doc 04 v1.0.2 §Z6 surgical fix (fidelity only)

**Doc 04 standing review debt:** Doc 04 has no passing document-review report for any version.
This fidelity check reviews the §Z6 surgical change only; it does not clear or reduce that
standing debt. Doc 04 review status is unchanged: a passing review report for Doc 04 does not
exist, and the hook block on Doc 04 remains active.

Diff confirmed via `git diff HEAD -- docs/04-test-strategy-master-plan.md`. Three and only three
hunks:

1. Header: version 1.0.1 → 1.0.2, Last-updated 2026-08-12 → 2026-08-21. ✓
2. Changelog: v1.0.2 entry appended before the v1.0.1 entry. ✓
3. §Z6: ceremony-burden line reworded. ✓

**§Z6 line — before:** "Contributor count (≥ 500) and beacon presence are verified by
**transcript inspection**, which is an audit activity, not a test."

**§Z6 line — after:** "Contributor count — verified against the ADR-022 assurance-based
target recorded for that ceremony — and beacon presence are verified by transcript inspection,
which is an audit activity, not a test."

New wording correctly references ADR-022 and the assurance-based target. Beacon-presence check
unchanged. Audit-activity characterisation unchanged. ✓

**Endorsement-floor 500s verified untouched:**
- Line 570 (A-01.1): `PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS (500)` — governance constant,
  untouched ✓
- Line 575 (A-01.7): "`max(byPopulation, byVerified, 500)`" — governance floor, untouched ✓
- Line 703 (A-12.2): "a party still needs 500 real verified endorsers" — governance floor,
  untouched ✓

**Doc 04 §Z6 fidelity: confirmed correct. Endorsement-floor 500s untouched. Header and changelog
correct. No other changes.** ✓

---

## §12 ADR-005 row check

Old: "Circom + Groth16 on bn254, Poseidon LeanIMT"

New: "Circom + Groth16 on bn254, Poseidon LeanIMT; **amended 2026-08-21 (REC-1: Decision-2
'≥ 500 contributors' convention superseded — contributor count now set by assurance-based
sizing per ADR-022; ceremony transparency/transcripts/beacon unchanged —
DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md)**"

Amendment note accurate and complete: cites REC-1, names the superseded clause, confirms
retained obligations, cites the decision record. ✓

## §12 ADR-022 row check

New row: "Groth16 stays for Phase 1; near-irreversible Charter-adjacent commitment; PPoT
Hermez reused at ~$0 for phase-1 setup; assurance-based per-circuit phase-2 (not convention
count); Gate-2 six-circuit transcript set batchable into a campaign of days; accepted trade-off
over universal-setup; revisit trigger: Phase 2+ circuit-count dominance; NFR-009 (two
independent audits before Gate 2) unchanged (2026-08-21, directed by Rathish;
DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md REC-2)"

All key elements of ADR-022 summarised accurately: near-irreversibility, PPoT reuse, assurance-
based sizing, six-circuit Gate-2 set, trade-off, revisit trigger, NFR-009 unchanged. ✓

Consequence column: "per-circuit phase-2 cost grows with circuit count — growth is the revisit
trigger; migration is a verifier swap by design (IProofVerifier seam) but a full re-audit in
practice" — matches ADR-022 Consequences section exactly. ✓

---

## Consistency checks

- **NFR-005 sub-cent participation:** Preserved. ADR-022 explicitly: "The sub-cent participation
  anchor (NFR-005) is preserved: ~250k gas verification stays the cheapest available option." ✓
- **Low-end-phone commitment (CON-011, ≤ 10s proving):** Preserved. ADR-022 Alternatives
  rejected: "CON-011 (2 GB RAM / Android 9 / 64 kbit/s floor) and the ≤ 10s proving time
  commitment are already at the edge with Groth16." No change to these commitments. ✓
- **NFR-009 (two independent audits before Gate 2):** Explicitly unchanged in ADR-022. ✓
- **DES-052 (`zkeyHash` freeze):** Explicitly retained in both ADR-005 amendment and ADR-022
  "What is MUST" section. ✓
- **IProofVerifier seam (ADR-005 Decision 5):** Cited as the upgrade path in ADR-022 Accepted
  trade-off and Near-irreversibility sections. ✓
- **No new contradictions with Must requirements or ADRs** beyond the directed supersession
  of the ≥500 convention. ✓

---

## Issue log

### ISS-01 — LOW — ADR-022 §"Gate-2 transcript set: six circuits", attribution language

**Location:** `docs/adr/ADR-022-groth16-phase1-commitment.md`, §"Gate-2 transcript set: six
circuits", line 3.

**Finding:** ADR-022 states: "The Gate-2 programme requires **six** phase-2 ceremony
transcripts, as established by the architect's analysis and **confirmed by the clarification
in §3** of the decision record (DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md)."

The phrase "confirmed by the clarification in §3" implies the six-circuit count is fully
confirmed. However, DECISIONS §3 says: "The one-vs-six reading is **being surfaced to the
approver** so Rathish can confirm whether 'Phase 1 needs one circuit' was intended to cancel
the five non-enrolment ceremonies or solely to describe the enrolment-family reduction. This
is a clarification request, not a hold — the Doc 13 re-plan and gate-status correction proceed
on the six-circuit interpretation **pending that confirmation**."

The six-circuit interpretation is the correct, directed basis for proceeding — the substance of
ADR-022 is right. But "confirmed by the clarification in §3" misrepresents §3: §3 describes
a clarification request to the approver and directs proceeding on the six-circuit interpretation
while awaiting explicit confirmation. A reader of ADR-022 may treat the six-circuit count as
fully approved when the decision record records it as proceeding pending approver confirmation.

**Severity rationale:** LOW. The six-circuit interpretation is correct and the directed basis
for all current planning. No action is wrong. The gap is that ADR-022's attribution language
overstates the confirmation level relative to what §3 of the decision record actually says;
this matters for governance traceability if the approver later clarifies differently.

**Fix (SHOULD):** Reword to reflect the pending status: "as established by the architect's
analysis and recorded as the basis for proceeding in §3 of the decision record (pending
approver confirmation of the one-vs-six reading —
DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md §3)."

---

## Regression check

No regressions from v2.1.4. The v2.1.4 PASS base is preserved:

- §1.1 SRS v2.4.0 counts unchanged and correct (no §1.1 hunk in diff). ✓
- ADR-016 amendment note (OI-20 CLOSED) in §12 row: present and unchanged. ✓
- ADR-021 amendment note (OI-19 CLOSED, OI-20 CLOSED) in §12 row: present and unchanged. ✓
- §16 scope note (FR-129, OI-19/OI-20 closed, tier-determination debt) unchanged. ✓
- Preamble "twenty-two decision records" count correct after the v2.1.5 increment. ✓

---

## Summary

| Category | Result |
|---|---|
| Score | 99.5% |
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 1 |
| Verdict | **PASS** |
| Doc 03 diff scope | Registration-only — confirmed; three hunks only |
| No body ceremony figure to correct | Confirmed — no "≥ 500" reference in Doc 03 body outside §12 |
| ADR-022 fidelity to REC-2 | All elements confirmed |
| ADR-022 fidelity to REC-1 | All substantive elements confirmed; one LOW attribution imprecision (ISS-01) |
| ADR-005 amendment fidelity | Confirmed — ≥500 superseded only; all obligations retained; decision body untouched |
| Doc 04 v1.0.2 §Z6 fidelity | Confirmed — correctly reworded; endorsement-floor 500s untouched |
| Consistency (NFR-005, CON-011, NFR-009, DES-052) | All preserved and confirmed |

**PASS. The SOP advances.** ISS-01 (LOW) does not block. The architect SHOULD address the
attribution language in the next Doc 03 increment.

---

## Pre-existing stop-hook tokens (unchanged)

The following blocks remain active and are not cleared by this review:

- **RTM gap:** Doc 08 has open Must rows (FR-121..FR-129 and others with no TC yet). Gate 2
  blocked until zero gaps.
- **Doc 04 review debt:** No passing document-review report exists for Doc 04 at any version.
  This fidelity check of the §Z6 surgical fix does NOT constitute a passing review of Doc 04.
  The standing block remains.

This review clears Doc 03 v2.1.5 only.
