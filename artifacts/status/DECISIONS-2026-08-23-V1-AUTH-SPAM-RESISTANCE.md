# v1 Authentication & Spam-Resistance Rulings

```
Date:            2026-08-23
Decision:        v1 authentication mechanism (phone-based); v1 spam-resistance layer
                 (flag-don't-block); blockchain ratified as v1 transparent-audit foundation
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — three rulings applied to this record; application to Docs 02, 03,
                 and 13 IN PROGRESS this session (PO and architect acting; Doc 13 to follow)
Source:          Transmitted via coordinator (2026-08-23). Applied session: 2026-08-23.
```

---

## 1. What was open

Three decisions were outstanding from the v1/v2 delivery split (`DECISIONS-2026-08-23-V1-V2-SPLIT.md`):

1. **Item (a) — v1 stack ratification.** DES-097 (Doc 03 §10.13) recommended: blockchain serves
   ONLY as the public transparent-audit record; conventional app and database on top. The architect
   had designed this; the approver had not yet ratified it.
2. **v1 identity mechanism** — Doc 13 §3.5 listed `"(a) auth provider — no artifact basis"` as a
   planning assumption that remained open pending an approver decision. No specific mechanism had
   been decided; the seam interface (DES-095 `IEligibilityVerifier`) was defined but its v1
   backing had not been specified beyond "conventional auth/DB".
3. **v1 spam resistance** — no decision or design existed for how v1 would protect against
   mass fake-account creation in the absence of the v2 ZK enrolment proof.

---

## 2. The rulings — verbatim-in-substance

No softening, no reinterpretation.

---

### Ruling 1 — v1 authentication is phone-based (SMS verification)

> Phone verification is chosen over email. Record it honestly: phone verification is a spam
> speed-bump that makes casual fake accounts harder — it is NOT a proof of unique personhood.
> v1 must never claim one-person-one-vote; that guarantee is v2's ZK enrolment.
> The ADR-024 abstraction still applies: v1's identity backend is phone auth behind
> DES-095 `IEligibilityVerifier`; v2 swaps in ZK enrolment behind the same interface.

### Ruling 2 — v1 gets a conventional spam-resistance layer, explicitly not a uniqueness guarantee

> VoIP/virtual-number detection (flag Google Voice, burner, cloud-farm numbers via a
> phone-intelligence API) plus velocity/device anti-fraud checks.
>
> **MUST:** this FLAGS and RATE-LIMITS suspicious numbers; it does NOT hard-block them.
> Legitimate people use VoIP and eSIMs, and wrongly excluding a citizen from a political
> platform is a serious failure. The false-positive risk and the flag-don't-block rule must
> be recorded explicitly.

### Ruling 3 — blockchain stays in v1 as the public transparent-audit foundation

> Every party action on a tamper-proof public record from day one. v1's story is
> transparency-now, privacy-later: the chain delivers the transparency guarantee in v1;
> the ZK layer delivers the privacy guarantee in v2.
>
> This **RATIFIES** the ADR-024 §(b) / DES-097 stack recommendation (which was listed as
> AWAITING APPROVER CONFIRMATION in `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(a)`). Record
> the ratification explicitly. The approver has asked for confirmation that it composes with
> the existing blockchain-as-audit-layer design — the architect will confirm in Doc 03
> this session.

---

## 3. What these rulings resolve

### 3.1 Item (a) from V1-V2-SPLIT §4 — NOW DECIDED

The v1 stack recommendation (DES-097) is **RATIFIED** by Ruling 3. Item (a) from
`DECISIONS-2026-08-23-V1-V2-SPLIT.md §4` ("v1 stack recommendation ratification") is now
**CLOSED as DECIDED**. No longer AWAITING APPROVER CONFIRMATION.

| What is ratified | Artifact |
|------------------|----------|
| Blockchain as the public transparent-audit record in v1 | DES-097 (Doc 03 §10.13 / ADR-024) |
| Conventional app + database on top of the chain in v1 | DES-097 |
| v1's story: transparency-now (chain); privacy-later (ZK in v2) | Ruling 3 |
| Composition confirmation owed: architect to confirm in Doc 03 v2.4.0 | ADR-025 / Doc 03 §10.13 |

### 3.2 Doc 13 effort-range assumption — PARTIALLY RESOLVED

Doc 13 §3.5 listed `"(a) auth provider — no artifact basis"` as an open planning assumption.
Ruling 1 resolves the **mechanism**: v1 uses phone-based SMS verification behind DES-095.
The **vendor** (specific phone-intelligence API provider, SMS gateway) remains open — no
artifact basis yet. The planning assumption is partially resolved; vendor selection remains.

---

## 4. What these rulings do NOT resolve

The following items remain **AWAITING APPROVER CONFIRMATION** or explicitly remain open.
These rulings do not close them.

| Item | Status | Where surfaced |
|------|--------|----------------|
| **T-01..T-05 Charter-layer tensions** | AWAITING APPROVER CONFIRMATION — unchanged | Doc 03 v2.3.1 §10.13.7; ADR-024 |
| **DEFERRED-v2 Must FR confirmations** (FR-030, FR-031, FR-082, FR-086 classification) | AWAITING APPROVER CONFIRMATION — unchanged | Doc 02 v2.7.0 §16.5 |
| **NFR-009 v1 re-reading** (lighter bar vs two heavy audits) | AWAITING APPROVER CONFIRMATION — unchanged | Doc 13 §3.5 |
| **v1 gate date** | NOT SET — AWAITING APPROVER CONFIRMATION — unchanged | Doc 13 §3.5 |
| **2027-05-14 referent confirmation** (carry-forward from 2026-08-21) | AWAITING APPROVER CONFIRMATION — unchanged | `DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.5` |
| **16-item contradiction surface** (Doc 02 v2.7.0 §16.5) | AWAITING APPROVER CONFIRMATION — unchanged (see §5 for two new additions) | Doc 02 v2.7.0 §16.5 |
| **v1 auth/spam vendor selection** (specific API providers, SMS gateway) | OPEN — no artifact basis; depends on vendor evaluation | Doc 13 §3.5 assumption (a) |
| **Blockchain composition confirmation** | OWED by architect (Doc 03 v2.4.0 this session) | Ruling 3 |

---

## 5. Two new tensions surfaced by these rulings

The rulings surface two new tensions that were NOT in T-01..T-05. They are recorded here
for the architect to formalise in the conflict table (Doc 03 §10.13.7 / ADR-025) and for
the approver's eventual ruling. Neither is resolved here — record, don't resolve.

### Tension T-06 — Charter Rule 1 (one human, one vote) vs v1 phone-auth

**Charter Rule 1** states one human, one vote as a foundational guarantee of the platform.
**Ruling 1** is explicit: phone verification is a spam speed-bump, NOT a proof of unique
personhood; v1 must never claim one-person-one-vote. This was NOT in T-01..T-05.

- v1 ships with Charter Rule 1 visible but without the mechanism to enforce it (that
  mechanism is v2's ZK enrolment).
- The honesty register (H-register, Doc 02 §16.4) must include an explicit item stating
  this gap — the existing H-01..H-14 entries MUST be assessed to confirm coverage.
- Any product material, README section, or onboarding screen that implies one-person-one-vote
  in v1 is a compliance failure against FR-131 and Ruling 1.

**Status: AWAITING architect conflict-table update (Doc 03 §10.13.7) and approver confirmation.**

### Tension T-07 — FR-003 (no identity data at rest) vs v1 phone number storage

**FR-003** (Doc 02 §4.2) states: no identity data stored at rest. **Ruling 1** requires
phone numbers as the v1 authentication credential. A phone number is identity data.

- Doc 02 §16 (Delivery Phasing) currently carries FR-003 as IN-v1 (outside the PARTIAL or
  DEFERRED-v2 lists). If v1 stores phone numbers, FR-003's IN-v1 classification is incorrect.
- The product-owner must reassess FR-003's classification: is it PARTIAL (v1 stores phone
  numbers with appropriate controls; v2 removes the storage via ZK enrolment), or does FR-003
  need a v1-specific amendment / new sub-requirement?
- The false-positive policy (flag-don't-block, Ruling 2) may require retaining phone-number
  records for rate-limiting and dispute purposes — deepening the FR-003 tension.

**Status: AWAITING PO reassessment of FR-003 classification in Doc 02 §16, architect
conflict-table update (Doc 03 §10.13.7), and approver confirmation.**

---

## 6. Application plan — this session

The three rulings are being applied to Docs 02, 03, and 13 this session in SOP order.

| Role | Document | Version | Work owed | Status |
|------|----------|---------|-----------|--------|
| **product-owner** | Doc 02 Requirements | v2.8.0 | **FR-132** — phone-based SMS authentication (v1 `IEligibilityVerifier` backing, Must); **FR-133** — spam-resistance layer (VoIP/device detection, flag-don't-block, Must with false-positive disclosure); FR-003 classification reassessment (T-07); H-register update for T-06 | IN PROGRESS this session |
| **architect** | Doc 03 SDD | v2.4.0 | **ADR-025** — v1 identity: phone auth + spam-resistance layer; **DES-095 amendment** — specify v1 concrete backing of `IEligibilityVerifier` (phone auth + DES-099 guard); **DES-099** — spam-resistance/phone-intelligence layer design; blockchain composition confirmation (Ruling 3); T-06/T-07 added to conflict table (§10.13.7) | IN PROGRESS this session |
| **project-manager** | Doc 13 Project Plan | v2.3.0 | Effort-range assumption (a) partially resolved (mechanism: phone auth); vendor still open; RISK updates; §11 re-plan log entry | AFTER PO and architect complete |

---

## 7. Sources

| Source | Role in this record |
|--------|---------------------|
| Coordinator transmission (2026-08-23) | Approver's rulings (verbatim-in-substance, §2) |
| `DECISIONS-2026-08-23-V1-V2-SPLIT.md` | Context: what was open; item (a) now resolved |
| `docs/03-architecture-design-sdd.md` v2.3.1 (Approved) | DES-097 stack recommendation now ratified |
| `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md` | DES-095 `IEligibilityVerifier` seam |
| `docs/02-requirements-srs.md` v2.7.0 (Approved) | FR-003 tension (T-07); §16 classification basis |
| `docs/13-project-plan.md` v2.2.0 (Approved) | §3.5 effort-range assumption (a) partially resolved |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | Updated with additive section (this session) |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the decisions
of the human approver (Rathish) verbatim-in-substance. The project-manager does not approve
gates and does not decide open items. Only Rathish is the decision-maker.*
