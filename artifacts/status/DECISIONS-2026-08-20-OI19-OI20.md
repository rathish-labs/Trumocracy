# OI-19 and OI-20 Decision Record — Invite-gating & Single-rail Pilot

```
Date:            2026-08-20
Decisions:       OI-19 — invite-gating (FR-125) vs FR-020 admission ban
                 OI-20 — single-rail pilot vs FR-004 plural-attestor requirement
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — closes OI-19 and OI-20;
                 to be applied in Doc 02 v2.4.0 + ADR-016/ADR-021 amendments this session
Source:          OI-19 and OI-20 surfaced during the application of DECISIONS-2026-08-20-
                 PILOT-VERIFICATION.md in Doc 02 v2.3.0 (product-owner) and Doc 03 v2.1.3 /
                 ADR-021 (architect); recorded as PENDING in GATE-STATUS-2026-08-09.md
                 § "Outcomes — applied 2026-08-20"
```

---

## 1. What was open

**OI-19** surfaced when FR-125 (open-tier invite-gating for spam control) was drafted in
Doc 02 v2.3.0. Decision 2 of DECISIONS-2026-08-20-PILOT-VERIFICATION.md permits
"invite-gating for spam control only" on the open tier; Decision 4 permits referral to gate
entry (referral edge verified then discarded, never stored). FR-020 (Must) explicitly bans
approval, sponsorship, or invitation as an admission condition. The question was whether the
open-tier / counted-membership scope distinction resolved the conflict or whether FR-020's
normative text required amendment. FR-125 was left as DRAFT pending this ruling.

**OI-20** surfaced when FR-121 recorded the single-rail Phase-1 pilot (India / Aadhaar).
FR-004 (Must) requires ≥ 2 mutually independent attestation paths per launch region with a
≤ 50% attestor-plurality cap. FR-004's normative text was not amended when the single-rail
pilot was named; the tension between naming one rail and the ≥ 2-path requirement was
recorded and left for the approver to resolve.

---

## 2. The rulings — quoted verbatim

The approver's words are quoted exactly below. No softening, no reinterpretation has been
applied.

---

### OI-19 — invite-gating (FR-125) vs FR-020

> RULING: invite-gating is a spam-control RATE-LIMITER, never an admission condition, and
> the two compose only if a non-invite path always remains open.
>
> - FR-020 stays absolute: no person may be refused membership for lack of an invite.
> - Finalise FR-125 so invite-based onboarding is the fast default path, with a non-invite
>   fallback that is ALWAYS available — slower and higher-friction is fine, closed is not.
> - MUST: the non-invite fallback exists. Without it FR-125 violates FR-020. Add a test
>   obligation that a person with no invite can still complete membership.
> - The test that separates the two: a determined real person can always join without an
>   invite. Record it. Close OI-19.

---

### OI-20 — single-rail pilot vs FR-004

> RULING: the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated
> Phase-1 limitation, never a Charter amendment.
>
> - FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level —
>   Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded
>   dependency.
> - Record the single-rail pilot as a Phase-1 DEPLOYMENT limitation with an explicit exit
>   condition: Phase 2 adds eIDAS. No Charter guarantee is amended.
> - State honestly, as an accepted pilot limitation: in Phase 1 a person without Aadhaar
>   cannot enrol in the pilot region.
> - MUST: making single-issuer operation permanent would be a Charter-layer change requiring
>   re-entry, never a deployment default. Record it. Close OI-20.

---

## 3. What each ruling closes

### OI-19

| Item | Disposition |
|------|-------------|
| **FR-125** | Finalised — no longer DRAFT. Invite-based onboarding is the fast default path; a non-invite fallback is **mandatory and must always remain open**. Slower and higher-friction is acceptable; closed is not. |
| **Test obligation** | A person with no invite must be able to complete membership via the fallback path. This is the separating test: a determined real person can always join without an invite. The product-owner mints this as a must-pass acceptance criterion in Doc 02 v2.4.0; the tester derives a TC from it. |
| **FR-020** | Unamended and absolute. FR-020's prohibition on invitation as an admission condition is fully preserved. Invite-gating composes with FR-020 only because the non-invite fallback is mandatory — the invite path is a rate-limiter, never the sole door. |
| **OI-19** | **CLOSED.** |

### OI-20

| Item | Disposition |
|------|-------------|
| **FR-004** | Unamended. The plural-pluggable-issuer requirement (≥ 2 mutually independent attestation paths per launch region, ≤ 50% attestor cap) is satisfied at the **architecture level** — Aadhaar is one implementation of the pluggable adapter interface. The interface itself is plural; the Phase-1 deployment exercises one implementation of it. |
| **Phase-1 limitation** | Recorded explicitly as a **dated deployment limitation**: in Phase 1 a person without Aadhaar cannot enrol in the pilot region. This is an accepted, honest pilot constraint, not a Charter-level change. The exit condition is stated: Phase 2 adds eIDAS 2.0 as the second rail. |
| **Charter-layer guard** | A new requirement (to be minted in Doc 02 v2.4.0) records that **making single-issuer operation permanent would be a Charter-layer change requiring Gate-1 re-entry, never a deployment default**. This closes the loop against an operator or maintainer normalising the Phase-1 limitation without governance. |
| **Relation to OI-20 §13 option (a)** | The ruling adopts the accept-as-dated-limitation posture at deployment level (option (a) framing from Doc 02 §13 OI-20) while holding FR-004 satisfied at architecture level. No option required amending FR-004. |
| **OI-20** | **CLOSED.** |

---

## 4. What this record directs

| Role | Deliverable | This session |
|------|-------------|-------------|
| **product-owner** (Priya Raghunathan) | Doc 02 v2.4.0: finalise FR-125 (remove DRAFT; add mandatory non-invite fallback + test obligation AC); mint Charter-layer-guard requirement for OI-20; close OI-19 and OI-20 in §13; update §8 Gherkin for FR-125 | Yes |
| **architect** (Ravi Deshmukh) | ADR-016 amendment block: Phase-1 deployment limitation with eIDAS exit condition; Charter-layer-guard note. ADR-021 amendment note: FR-125 finalised; non-invite fallback mandatory; FR-020 unamended | Yes |
| **project-manager** (Ana-Maria Petrescu) | This decision record + gate-status update (`GATE-STATUS-2026-08-09.md`) | Yes (this record) |

---

## 5. Sources

| Source | Role in this record |
|--------|---------------------|
| `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md` | Parent record whose application surfaced OI-19 and OI-20; contains Decision 2 (invite-gating) and Decision 4 (referral edge discarded) that FR-125 draws on |
| `artifacts/status/GATE-STATUS-2026-08-09.md` § "Outcomes — applied 2026-08-20" | OI-19 and OI-20 recorded as PENDING there; this record closes both |
| `docs/02-requirements-srs.md` §4.41 FR-125 | DRAFT requirement awaiting OI-19 ruling; finalised by this record |
| `docs/02-requirements-srs.md` §4.21 FR-004 | Plural-pluggable-issuer Must requirement; unamended by this record |
| `docs/02-requirements-srs.md` §4.22 FR-020 | Admission-condition ban; unamended and absolute |
| `docs/02-requirements-srs.md` §13 OI-19, OI-20 rows | Defined the tensions and pre-framed option (a) for OI-20 |
| `artifacts/status/GATE1-DECISION-2026-08-11.md` | House style reference |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the
decisions of the human approver (Rathish) verbatim. The project-manager does not decide
open items. Only Rathish is the decision-maker.*
