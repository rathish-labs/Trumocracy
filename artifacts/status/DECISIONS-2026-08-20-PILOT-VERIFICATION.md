# Pilot Jurisdiction & Verification Decisions — 2026-08-20

```
Date:            2026-08-20
Decisions:       1 — Pilot jurisdiction sequence
                 2 — Verification as a separate, optional step
                 3 — On-device proof, nullifier-only, no stored identity
                 4 — Two rejected designs, recorded with rationale
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — to be applied in Doc 02 v2.3.0 (product-owner, this session)
                 and a new ADR (architect, this session)
```

---

## 1. What this record closes

**OI-04-PILOT — closed by this record.**

OI-04-PILOT was carried forward from `GATE1-DECISION-2026-08-11.md §4` with the description:
"Pilot jurisdiction name and eID rail — name and rail open — must close before enrolment
requirement is implemented."

This record closes OI-04-PILOT: Phase-1 pilot is **INDIA**; the rail is **Aadhaar offline
paperless KYC**; the relevant adapter class is FR-070 adapter class (c) (government-issued
eID, offline-verifiable signed document format, single national issuer).

---

## 2. What this record creates

**A hard dependency, recorded explicitly:**

A **legal opinion** for the lead jurisdiction (India — Aadhaar use for anything resembling
political or voter identification is legally sensitive in India) is **REQUIRED** before the
enrolment requirement is finalised against the Aadhaar rail. This is a **Gate-2 line item**,
not an afterthought. The enrolment requirement (FR-069/FR-070 and the corresponding adapter
specification) must not be marked implementation-ready until this legal opinion is obtained
and recorded.

---

## 3. What this record directs

- **Doc 02 v2.3.0** (product-owner, this session): apply decisions 1–3.
- **New ADR** (architect, this session): tiered verification-gates-counting design; on-device
  nullifier-only posture; the two rejected designs from decision 4 with rationale.
- **Gate-status record** (`artifacts/status/GATE-STATUS-2026-08-09.md`, project-manager,
  this session): the new Gate-2 legal-opinion line item; OI-04-PILOT closed; decisions 2–4
  pointer.

---

## 4. The decisions — quoted verbatim

The approver's words are quoted exactly below. No softening, no reinterpretation has been
applied.

---

### DECISION 1 — PILOT JURISDICTION SEQUENCE

> The enrolment circuit proves against a specific credential format, so the pilot rail must
> be named. Decision, by technical readiness of the identity rail (not market size):
>
> - Phase 1 pilot: INDIA — Aadhaar offline paperless KYC. One national issuer, near-universal
>   coverage, signed XML that is provable in-circuit. This is the first enrolment adapter.
> - Phase 2: EU — eIDAS 2.0 wallets, privacy-preserving by design; first targets France and
>   the Nordic countries.
> - Phase 3: USA — the flagship market. Deferred because the US has no national digital
>   identity: it is a fragmented, state-by-state mobile-driver's-licence patchwork with low
>   activation and an optional "phone-home" privacy default that conflicts with our
>   non-correlation guarantee.
>
> Record explicitly, as a hard dependency, that a LEGAL opinion is required for the lead
> jurisdiction before the enrolment requirement is finalised against it — Aadhaar's use for
> anything resembling political or voter identification is legally sensitive in India. The
> legal review is a Gate-2 line item, not an afterthought.

---

### DECISION 2 — VERIFICATION AS A SEPARATE, OPTIONAL STEP

> Verification is a distinct optional step, not a precondition for joining. Completing it
> grants a visible "verified" status. Structure it as tiered, so verification scales with
> the power an action carries:
>
> - Open to everyone, no verification: read, follow, watch, low-stakes participation
>   (invite-gating for spam control only).
> - Requires proof of unique personhood to COUNT: contributing to a party's official strength
>   number, voting in a binding decision, standing as a candidate.
>
> The design rule to record: verification gates COUNTING, never joining. This is what
> reconciles open participation with a truthful strength number — the open tiers cannot
> inflate anything because they do not count toward anything.

---

### DECISION 3 — ON-DEVICE PROOF, NULLIFIER-ONLY, NO STORED IDENTITY

> The credential is read and proven ON THE USER'S DEVICE. Only a zero-knowledge proof and a
> one-way uniqueness nullifier are transmitted. The raw credential — Aadhaar XML, eIDAS
> attributes, DL/mDL data — is used locally to generate the proof and then discarded. It is
> never sent to the platform in any form.
>
> Impersonation, double-enrolment and inflated strength are prevented by NULLIFIER COLLISION
> — a second verification by the same person yields the same nullifier and is rejected — not
> by comparing stored identity records. Confirm this is the existing enrolment circuit (the
> C-03 design with the SC-01 trust-anchor binding), not a new component, and map the
> "verified status" and the counting-tier gate onto it.
>
> MUST-NOT, with a test obligation: the platform stores no raw or reversible identity data,
> not even encrypted. The acceptance test is the subpoena test — if a court ordered the
> platform to disclose who belongs to a party, it must be technically unable to comply.
> Encrypted-but-decryptable storage fails this test.

---

### DECISION 4 — TWO REJECTED DESIGNS, RECORDED WITH RATIONALE

> Record these as considered-and-rejected so a future contributor does not reinvent them as
> oversights:
>
> - Persistent referral graph / referrer-liability / association-based "troublemaker" tracing.
>   Rejected: it deanonymises supporters through the social graph, enables guilt-by-association
>   purges, and contradicts the standing rulings on affirmative-quorum removal, no behavioural
>   surveillance, and sacred user space. Referral may GATE entry, but the referral edge is
>   verified and discarded, never stored.
>
> - Storing identity data (even encrypted) for later comparison. Rejected: a decryptable
>   identity registry recreates the subpoena, operator-override and capture risks the platform
>   exists to eliminate, and turns "we cannot deanonymise you" into "we promise not to."

---

## 5. Disposition summary

| Decision | Item | Disposition |
|----------|------|-------------|
| 1 | Pilot jurisdiction sequence | DECIDED — Phase 1: India/Aadhaar offline KYC; Phase 2: EU/eIDAS 2.0; Phase 3: USA (deferred, fragmented rail). OI-04-PILOT **closed**. Hard dependency: legal opinion required before enrolment requirement finalised. Gate-2 line item. |
| 2 | Verification as optional, tiered | DECIDED — verification gates COUNTING, never joining. Open-to-all tiers do not count toward strength numbers. Verified status granted on proof of unique personhood. Apply in Doc 02 v2.3.0 and ADR. |
| 3 | On-device proof, nullifier-only | DECIDED — existing enrolment circuit (C-03 / SC-01 trust-anchor binding) is the mechanism; not a new component. No raw or reversible identity data stored at any time. Subpoena test is the acceptance criterion. Apply in Doc 02 v2.3.0 and ADR. |
| 4 | Two rejected designs | DECIDED — persistent referral graph and encrypted identity registry both rejected with rationale. Record in ADR as considered-and-rejected. |

---

## 6. Sources

| Source | Role in this record |
|--------|---------------------|
| `artifacts/status/GATE1-DECISION-2026-08-11.md §4` | Carried OI-04-PILOT as a carry-forward open item with the description "Pilot jurisdiction name and eID rail — name and rail open — must close before enrolment requirement is implemented" |
| `docs/02-requirements-srs.md §4.21–§4.22` (FR-069, FR-070) | Enrolment adapter-class FRs that the pilot decision bears on |
| `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md` | Confirmed SC-01 closed; C-03 design with trust-anchor binding is the sound base the nullifier-only posture builds on |
| `artifacts/status/OI-18-DECISION-2026-08-11.md` | House style reference for the decision-record format |
| `artifacts/status/GATE1-DECISION-2026-08-11.md` | House style reference; source of OI-04-PILOT carry-forward wording |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the
decisions of the human approver (Rathish) verbatim. The project-manager does not decide
open items. Only Rathish is the decision-maker.*
