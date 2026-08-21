# ADR-022 — Groth16 for Phase 1: near-irreversible proving-system commitment, ceremony-burden correction, and revisit trigger

```
Status:        Accepted
Date:          2026-08-21
Owner:         Ravi Deshmukh — Principal Architect
Traces:        RISK-10, CON-012, NFR-009, FR-069, FR-070, FR-121, ADR-005, ADR-017
Source:        DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md (REC-1, REC-2; Rathish,
               2026-08-21); architect's Powers-of-Tau ceremony analysis, 2026-08-21
```

## Context

ADR-005 chose Circom + Groth16 on bn254 for all production circuits. Its Decision 2
stated that each phase-2 ceremony "MUST have ≥ 500 independent contributors including
named public figures from civil society." The project plan and gate status (MS-08)
carried this figure as a critical-path item — "six ceremonies at ≥ 500 contributors
each" — that was widely understood to impose a months-long schedule burden.

The architect's 2026-08-21 Powers-of-Tau ceremony analysis established two things:

1. **The ≥ 500 figure was a convention, never a security requirement.** Groth16 phase-2
   is secure with a single honest contributor; the ceremony's purpose is social assurance
   (public scrutiny, external verification), not additional cryptographic hardening.
2. **The real Phase-1 ceremony burden is materially smaller.** Phase-1 reuses the
   Perpetual Powers of Tau (Hermez, ≫80k contributors) at ~$0 for the circuit-agnostic
   phase-1 setup; per-circuit phase-2 ceremonies are small and batchable into a campaign
   of days.

The approver (Rathish, 2026-08-21) issued REC-2 directing this ADR, and REC-1 directing
correction of the convention figure. ADR-005 Decision 2 is amended (see ADR-005 header)
to replace the convention count with assurance-based sizing; this ADR records the
Groth16-for-Phase-1 proving-system decision and its near-irreversible character.

---

## Decision: Groth16 for Phase 1

**Groth16 on bn254 stays as the Phase-1 proving system.** The commitments from ADR-005
are carried forward and this ADR adds the near-irreversibility statement, the corrected
ceremony-burden description, and the explicit revisit trigger.

**Rationale (REC-2 verbatim applied):**

- **The ceremony burden that would have justified a universal-setup switch has collapsed.**
  Phase-1 reuses PPoT Hermez at ~$0; per-circuit phase-2 is a small campaign of days.
  The original motivation for switching — avoiding months of ceremony overhead — no longer
  applies at Phase-1 scale.
- **Cheapest on-chain verification (ADR-005 table).** Groth16 verification is 3 pairings
  + a few scalar mults: ~250k gas, constant regardless of circuit size. The alternatives
  cost materially more: PLONK/KZG ~350–500k gas, Halo2/IPA ~1–5M gas (or recursion),
  Noir + UltraHonk ~400–700k gas. At ADR-001 fee levels Groth16 is the only option that
  reliably stays under a cent — the sub-cent participation anchor (NFR-005) is the
  constraint that ultimately decides this.
- **Most auditor availability.** Circom + Groth16 has the largest audited corpus in the
  ZK ecosystem. NFR-009 (two independent audits before Gate 2) is unchanged by these
  decisions and is more readily satisfiable with Groth16 than with any alternative
  toolchain.
- **Existing design is already Groth16-shaped.** The SC-01 trust-anchor binding
  (ADR-017: trust-anchor public input, per-class circuits, on-chain `verifierAddress`
  and `zkeyHash` freeze in the verifier registry) was designed for Groth16's one-proof-
  one-verifier model. A proving-system switch would require redesigning the verifier
  registry, the circuit artefact hash binding (DES-052), and the SC-01 security
  argument.

---

## Ceremony burden — corrected per REC-1

### Phase-1 setup: PPoT Hermez reused at ~$0

The circuit-agnostic phase-1 Powers of Tau is provided by the Hermez Perpetual Powers of
Tau ceremony (≫80k contributors). There is no cost and no schedule impact — this was
already ADR-005's design (Decision 2: "on top of the existing Perpetual Powers of Tau —
we do not re-run phase 1").

### Phase-2 per circuit: assurance-based sizing, not convention

**Groth16 phase-2 soundness requires ONE honest contributor.** Contributor counts above
one are set by **target assurance** — the goal of a larger ceremony is social assurance
(external verification, public scrutiny, replaceability of the poison), not cryptographic
necessity.

**Sizing guidance (design rationale; this is NOT a MUST):** A phase-2 campaign with
5–15 contributors drawn from mutually-independent institutions (universities, civil society
organisations, established NGOs, public-interest technologists) provides sufficient
assurance that collusion-of-all is socially implausible. Each contributor should attest
their participation, contribute in a separate time window over multiple days, and publish
their contribution for independent verification with `snarkjs zkey verify`. A public
randomness beacon finalises the ceremony. The rationale for favouring fewer diverse
independent contributors over many contributors from a single social network: independence
is the asset, not headcount.

**What is MUST:** ceremony transparency is a MUST. Concretely: attestations published for
every contribution, published beacon, ceremony transcript published permanently (ADR-009),
every contribution verifiable by anyone with `snarkjs zkey verify`, on-chain `zkeyHash`
frozen in the verifier registry (DES-052), client refuses to prove against an unrecognised
`zkeyHash` (ADR-005 Decision 5; DES-052). These obligations are unchanged from ADR-005.

### Gate-2 transcript set: six circuits

The Gate-2 programme requires **six** phase-2 ceremony transcripts, as established by the
architect's analysis and confirmed by the clarification in §3 of the decision record
(DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md). These bind to Must requirements via Doc
08's G-CIRCUIT gap rows:

| Circuit | Must requirements bound |
|---------|------------------------|
| `personhood_enrol_aadhaar` (Phase-1 Aadhaar enrolment; FR-121 dividend: one class not three) | FR-006 (uniqueness / Sybil resistance) |
| `residency_member` | FR-002 (one action per person per scope) |
| `party_member` | FR-002 |
| `tenure_member` | FR-023 / FR-027 |
| `vote_message` (MACI ballot) | FR-030..FR-035 (receipt-freeness, coercion resistance) |
| `tally` (MACI) | FR-030..FR-035 |

**The enrolment family reduction (FR-121 dividend):** naming Aadhaar as the single Phase-1
credential format collapses what would have been three adapter-class enrolment circuit
variants (eIDAS, ICAO, offline KYC) to one concrete circuit for Phase 1. This is where
"one circuit (Aadhaar enrolment)" in REC-1 applies. The five non-enrolment circuits are
not cancelled — their ceremonies are corrected in scale (small per-circuit phase-2s), not
eliminated.

**Practical difference from the original schedule:** the original critical-path penalty
came from the "six × ≥ 500-contributor" size assumption. Six small per-circuit phase-2s
are batchable into a single contributor campaign of days. The critical-path change is in
duration and cost; the number of transcripts is unchanged.

---

## Accepted trade-off

Each new circuit in Phase 2+ requires its own small phase-2 ceremony. A universal-setup
system (PLONK, UltraHonk, Halo2) would amortise one ceremony across all circuits — the
Phase-1 ceremony cost is paid once, and new circuits do not require new ceremonies.

This trade-off is accepted for Phase 1 because:
- Phase-1 has six circuits; the ceremony cost is bounded and small.
- The per-circuit cost of a universal-setup switch (see Alternatives rejected) exceeds the
  per-circuit phase-2 ceremony saving at Phase-1 scale.

**Revisit trigger:** Phase 2+ grows the circuit count enough that per-circuit phase-2
ceremonies dominate the engineering and operational budget. At that point the `IProofVerifier`
seam (ADR-005 Decision 5) and the Phase-4 re-evaluation commitment (ADR-005 Decision 6)
provide the upgrade path: a verifier swap, not a redesign. The Phase-4 target for
re-evaluation is carried from ADR-005.

---

## Near-irreversibility

This is a **near-irreversible, Charter-adjacent commitment.** The verifier registry, the
SC-01 on-chain trust-anchor binding, the audit pipeline, and the client proving stack are
Groth16-shaped. Migration to a different proving system later is a verifier swap *by
design* (ADR-005 Decision 5 — `IProofVerifier` seam) but a **full re-audit in practice**:
new circuits, new ceremonies, a new client proving WASM bundle, and re-validation of every
security property that depends on the Groth16 construction.

The decision is Charter-adjacent because the verifier registry, the ceremony transparency
obligations, and the `zkeyHash` freeze are part of the immutable-core security argument
(ADR-010). Changing the proving system is not technically gated by the Charter-layer
amendment process, but the depth of re-audit required means it is effectively an
irreversible architectural commitment for the Phase-1 system.

---

## Consequences

**Good**
- The sub-cent participation anchor (NFR-005) is preserved: ~250k gas verification stays
  the cheapest available option.
- NFR-009 (two independent audits before Gate 2) is more easily satisfiable with the
  Circom corpus than with any alternative toolchain.
- The ceremony schedule burden is correct: six small per-circuit phase-2s batch into a
  campaign of days, removing the original MS-08 critical-path risk.
- The SC-01 trust-anchor binding and the verifier registry design require no changes.

**Bad / accepted risk**
- **Per-circuit phase-2 cost grows with circuit count.** Each Phase 2+ circuit needs its
  own ceremony. This is the accepted trade-off above; the revisit trigger is the governing
  signal.
- **Near-irreversibility.** Stated plainly above. The `IProofVerifier` seam is the
  designed mitigation; re-audit cost is the accepted residual.

---

## Alternatives rejected

**Universal-setup switch now (PLONK / KZG, UltraHonk / Noir, Halo2 / IPA)**

What it would save: per-circuit ceremonies — Phase 2+ circuits require no new ceremonies.

What it would cost:
- **Gas multiples vs the sub-cent verification anchor.** PLONK/KZG ~350–500k gas (+40–100%
  over Groth16); Halo2/IPA ~1–5M gas (4–20×); UltraHonk ~400–700k gas (+60–180%). At
  ADR-001 L2 fee levels a 4–20× verify cost increase would push citizen actions above the
  cent threshold — the requirement that ultimately decided ADR-005 in the first place.
- **2–4× mobile proving vs the low-end-phone commitment.** PLONK and UltraHonk are
  2–4× slower than Groth16 on a WASM prover. CON-011 (2 GB RAM / Android 9 / 64 kbit/s
  floor) and the ≤ 10s proving time commitment are already at the edge with Groth16.
- **Toolchain and audit reset.** The Circom audited corpus is the deepest in the
  ecosystem; switching to Noir + Barretenberg or Halo2 resets the audit lineage,
  invalidates existing `circomspect` CI, and requires re-auditing every circuit — the same
  re-audit cost as a post-Phase-1 migration, but paid now with no Phase-1 circuits to
  migrate from.
- **MS-08 delay.** A proving-system switch now would require rebuilding the client proving
  WASM stack, redesigning the verifier registry for the new proof format, re-running the
  SC-01 trust-anchor security argument for the new construction, and re-auditing. The
  schedule impact exceeds the ceremony cost it was intended to avoid.

Conclusion: the trade-off is negative in every dimension at Phase-1 scale. Revisit at
Phase 4 when circuit count, toolchain maturity, and on-chain gas costs are re-evaluated
(ADR-005 Decision 6).
