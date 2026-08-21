# Ceremony Contributor Count & Proving System Decision Record — 2026-08-21

```
Date:            2026-08-21
Decisions:       REC-1 — Correct the contributor-count error
                 REC-2 — Proving system: Groth16 for Phase 1
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — to be applied this session via:
                   ADR-005 Decision-2 amendment (architect)
                   New ADR-022 Groth16-Phase-1 (architect)
                   Doc 03 correction (architect)
                   Doc 04 §Z6 ~line 508 correction (architect)
                   Doc 13 re-plan (project-manager — next assignment)
                   Doc 09 / Doc 10 exec-figure alignment (sre)
                   Gate-status additive correction (PM — with Doc 13 re-plan)
Source:          Architect's Powers-of-Tau ceremony analysis, delivered 2026-08-21
                 in-session; these decisions resolve the ceremony-burden and proving-
                 system questions that had been deferred pending that analysis.
```

---

## 1. What was open

The original project plan (Doc 13) and gate status carried the figure "six phase-2 ceremonies
at ≥ 500 contributors each" as a critical-path item (S-01 disposition, MS-08). The architect's
2026-08-21 Powers-of-Tau analysis established that this figure was never a security
requirement and that the real Phase-1 ceremony burden is materially smaller. Two decisions
follow from that analysis.

---

## 2. The decisions — quoted verbatim

The approver's words are quoted exactly below. No softening, no reinterpretation has been
applied.

---

### REC-1 — CORRECT THE CONTRIBUTOR-COUNT ERROR

> The "six ceremonies at 500+ contributors" figure was never a security requirement; Groth16
> phase-2 is secure with a single honest contributor. Correct it everywhere it appears —
> Doc 03, Doc 13, the gate status, and any exec-facing figure. State the real Phase-1 ceremony
> burden: Perpetual Powers of Tau (Hermez) is reused at ~$0 for phase 1; Phase 1 needs one
> circuit (Aadhaar enrolment) and therefore one small phase-2 contribution with a handful of
> contributors over a few days. Set any contributor count by target assurance with rationale,
> never by convention.

---

### REC-2 — PROVING SYSTEM: GROTH16 FOR PHASE 1

> Record the decision to stay with Groth16, with rationale: the ceremony burden that would
> justify a universal-setup system has collapsed to a reusable ptau plus a tiny phase-2;
> Groth16 has the cheapest on-chain verification, the most auditor availability, and the
> existing design and SC-01 binding are already Groth16-shaped. Record the accepted trade-off
> explicitly: each new circuit in later phases needs its own small phase-2 ceremony, whereas a
> universal setup would amortise one ceremony across all circuits — revisit only if Phase 2+
> circuit count grows enough to dominate. Note this is a near-irreversible, Charter-adjacent
> commitment and write it as an ADR.

---

## 3. Clarification recorded, not reconciled — one-vs-six circuit reading

**This section must be read before applying REC-1.**

The architect's analysis that underlies these decisions also established the following:

**The Gate-2 transcript set is six circuits**, bound to Must requirements via Doc 08's
G-CIRCUIT gap rows:

| Circuit | Must requirements bound |
|---------|------------------------|
| Aadhaar enrolment (Phase-1, FR-121 dividend: one enrolment class instead of three) | FR-006 (uniqueness / Sybil resistance) |
| `residency_member` | FR-002 (one action per person per scope) |
| `party_member` | FR-002 |
| `tenure_member` | FR-023 / FR-027 |
| MACI ballot circuit (×2) | FR-030 .. FR-035 (receipt-freeness and coercion resistance) |

REC-1's sentence "Phase 1 needs one circuit (Aadhaar enrolment)" is **exact for the
enrolment family**: the FR-121 dividend (naming Aadhaar as a single concrete credential
format instead of the three-adapter-class abstraction) collapses what would have been three
enrolment circuit variants to one. Read as the whole programme, however, "one circuit" would
contradict FR-002, FR-023/027, and FR-030..035 — all Must requirements with open G-CIRCUIT
rows in the RTM.

**How this record applies REC-1:**

- The substance of REC-1 — contributor counts set by assurance not convention; PPoT Hermez
  reused at ~$0 for phase-1; per-circuit phase-2 ceremonies take days, not months — applies
  to **all six circuits** in the Gate-2 transcript set.
- The **five non-enrolment circuits are not cancelled**. Their ceremonies are corrected in
  scale (small per-circuit phase-2s batched into one campaign of days), not eliminated.
- The **practical difference is immaterial** after the correction: the original schedule
  penalty came from the "six × 500-contributor" size assumption. Six small per-circuit
  phase-2s batch into a single campaign of days. The critical-path change is in duration and
  cost, not in the number of transcripts.
- The **one-vs-six reading is being surfaced to the approver** so Rathish can confirm whether
  "Phase 1 needs one circuit" was intended to cancel the five non-enrolment ceremonies or
  solely to describe the enrolment-family reduction. This is a clarification request, not a
  hold — the Doc 13 re-plan and gate-status correction proceed on the six-circuit
  interpretation pending that confirmation.

---

## 4. Correction sites

REC-1 directs correction "everywhere it appears." The true sites carrying the ceremonial
figure in normative or exec-facing roles are:

| Site | What to correct |
|------|----------------|
| **ADR-005** (`docs/adr/ADR-005-zk-stack.md`) | Decision-2 normative source: replace "≥ 500 contributors" convention with assurance-based sizing with rationale |
| **Doc 04** §Z6 ~line 508 (`docs/04-test-strategy-master-plan.md`) | Ceremony burden line in the test-strategy master plan |
| **Doc 13** (`docs/13-project-plan.md`) | MS-08 milestone row; WS-11 work stream; §3.4 / §612 narrative; comms row |
| **Doc 10** (`docs/10-deployment-runbook.md`) | Gate checklist ceremony entry |
| **Doc 09** (`docs/09-release-notes.md`) | Release-readiness row |
| **Gate status** (`artifacts/status/GATE-STATUS-2026-08-09.md`) | Current-state rows that cite the six-ceremony / 500-contributor figure |

**CAUTION — do not touch:** many instances of "500" in the repository are the **endorsement-
floor constant** (`max(..., 500)`) used in governance rules and its associated unit tests
(`UT-05xx` IDs). These are completely unrelated to the ceremony contributor count and must
not be altered. Similarly, `UT-05xx` test IDs are test identifiers, not ceremony references.
Correct only the sites listed above.

**Historical records are never rewritten.** The S-01 schedule-acceptance row in
`GATE1-DECISION-2026-08-09.md` and the original Gate-1 gate-status entry are not edited.
They receive a **dated correction pointer** (e.g., "Correction: see
DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md REC-1 — contributor-count figure corrected
2026-08-21; the ceremony burden at the time of Gate 1 was understood as stated; the
architect's 2026-08-21 analysis establishes the correct figure").

---

## 5. What this record directs

| Role | Deliverable | Trigger |
|------|-------------|---------|
| **architect** (Ravi Deshmukh) | ADR-005 Decision-2 amendment: replace "≥ 500 contributors" convention with assurance-based contributor count with rationale | This session |
| **architect** (Ravi Deshmukh) | New **ADR-022** — Groth16 Phase-1 proving system: near-irreversible / Charter-adjacent; rationale (PPoT reuse, cheapest on-chain verification, most auditor availability, existing SC-01 binding already Groth16-shaped); accepted trade-off (per-circuit phase-2 vs universal-setup amortisation); revisit trigger (Phase 2+ circuit count growth) | This session |
| **architect** (Ravi Deshmukh) | Doc 03 correction: ceremony-burden figures updated per REC-1 | This session |
| **architect** (Ravi Deshmukh) | Doc 04 §Z6 ~line 508 correction: ceremony-burden line updated per REC-1 | This session |
| **project-manager** (Ana-Maria Petrescu) | Doc 13 re-plan: the re-plan that was waiting on this answer — schedule and critical-path corrected; MS-08 / WS-11 / §3.4 / comms row updated | Next assignment (this session) |
| **project-manager** (Ana-Maria Petrescu) | Gate-status additive correction: dated correction pointer added to the ceremony-burden rows; historical S-01 row and GATE1-DECISION-2026-08-09 never rewritten | With Doc 13 re-plan |
| **sre** | Doc 09 / Doc 10 exec-figure alignment: readiness-row and gate-checklist ceremony figures corrected per REC-1 | This session |

---

## 6. Sources

| Source | Role in this record |
|--------|---------------------|
| Architect's Powers-of-Tau ceremony analysis, 2026-08-21 | The analysis that underlies both decisions; established PPoT Hermez reuse, per-circuit phase-2 sizing, and the Gate-2 six-circuit set |
| `docs/adr/ADR-005-zk-stack.md` | Normative source of the "≥ 500 contributors" figure; to be amended per REC-1 |
| `artifacts/status/GATE1-DECISION-2026-08-09.md` §5 (S-01 schedule acceptance) | Original schedule acceptance that referenced the ceremony burden; historical record — not rewritten; receives a dated correction pointer |
| `artifacts/status/GATE-STATUS-2026-08-09.md` (current-state rows) | Carries the ceremony figure in exec-facing summaries; corrected additively |
| `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md` | Established Phase-1 pilot as India / Aadhaar — the FR-121 dividend (one enrolment circuit not three) is a consequence of that decision |
| `artifacts/status/OI-18-DECISION-2026-08-11.md` | House style reference |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the
decisions of the human approver (Rathish) verbatim. The project-manager does not decide
open items. Only Rathish is the decision-maker.*
