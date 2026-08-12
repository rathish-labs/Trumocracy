# Gate 1 Decision Record — Trumocracy (v2.0.0 Re-entry)

```
Date:          2026-08-11
Gate:          Gate 1 — Direction approved
Decision-maker: Rathish (human approver)
Recorded by:   project-manager (Ana-Maria Petrescu)
Status:        APPROVED — conditional
               Condition: Doc 02 v2.1.0 (steward-organisation requirements, Part B) must pass
               its business-mode review before the design phase begins. Not pre-marked satisfied.
Source packet: artifacts/status/GATE1-REENTRY-v2.0.0-2026-08-10.md
Supersedes:    Gate 1 approval 2026-08-09 (against Doc 02 v1.0.0,
               artifacts/status/GATE1-DECISION-2026-08-09.md) and the CR-v1.1.0
               re-affirmation question (artifacts/status/GATE1-REAFFIRMATION-CR-v1.1.0-2026-08-10.md).
```

---

## 1. What this gate approves

Per `CLAUDE.md`: Gate 1 — Direction approved approves the **PR-FAQ (Doc 01)** and the
**requirements specification (Doc 02)**. Nothing should be designed until it clears.

This decision approves:

| Document | Version | Review-loop outcome |
|----------|---------|---------------------|
| Doc 01 PR-FAQ (`docs/01-press-release-prfaq.md`) | 2.0.0 | business-mode cycle-1 PASS 97% (0C/0H/0M/2L) |
| Doc 02 Requirements (`docs/02-requirements-srs.md`) | 2.0.1 | business-mode cycle-2 PASS 98% (0C/0H/0M/1L) |

Both documents were submitted in the Gate 1 re-entry packet
(`artifacts/status/GATE1-REENTRY-v2.0.0-2026-08-10.md`, prepared 2026-08-10).

**This decision supersedes** the original Gate 1 approval (2026-08-09, against Doc 02 v1.0.0)
and renders the CR-v1.1.0 re-affirmation question moot — SC-01 is closed (2026-08-10, confirmed
by `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`) and OI-13 is resolved at v2.0.0
(BR-017, ruling 3: Supporter tier has no public profile unconditionally).

---

## 2. Approval

**Rathish approves Gate 1 against Doc 01 v2.0.0 and Doc 02 v2.0.1 on 2026-08-11.**

The approver's words, quoted verbatim:

> "APPROVED against Doc 01 v2.0.0 and Doc 02 v2.0.1, conditional on the steward requirements
> in Part B landing before the design phase begins."

**The condition:** the steward-organisation requirement area ("Part B") is to enter Doc 02 as
version 2.1.0 in this same session. The condition is satisfied when Doc 02 v2.1.0 passes its
business-mode review (score ≥ 95%, zero critical/high/medium issues). Until that passing review
is recorded, the design phase may not begin. **This record does not pre-mark the condition as
satisfied.** The project-manager will record condition satisfaction separately once the passing
review exists.

**Condition satisfied — 2026-08-11.** The steward requirements landed as Doc 02 v2.1.0 → v2.1.1
(cycle-1 FAIL 91% reworked; cycle-2 PASS 99%, 0C/0H/0M/1L; report:
`artifacts/reviews/02-requirements-srs-v2.1.1-business-cycle2.md`). Gate 1 approval is now
unconditional; the design phase may begin per §5. One new open item accompanies it: OI-18
(entrenched-charter scope vs previously-absolute guarantees) — a decision for the approver
before the architect fixes the amendment boundary in Doc 03.

**OI-18 decided — 2026-08-11.** Option (c) two-tier core, with CON-001 promoted into the
Tier-1 entrenched charter (fork-only). Full record:
`artifacts/status/OI-18-DECISION-2026-08-11.md`. The design phase proceeds; Doc 03 v2
specifies the Tier-2 super-process numbers with rationale.

---

## 3. Dispositions — open items OI-14, OI-15, OI-16

Each disposition is quoted verbatim from the approver. No softening or reinterpretation has
been applied.

### OI-14 — Proposal authorship vs Supporter anonymity

> "WORKER TIER AND ABOVE. Authorship is public by design, since agenda-setting is influence
> even without a vote, so an anonymous supporter cannot author without breaking their own
> anonymity. This is not a gate: worker tier is self-declared, so anyone who wishes to author
> simply declares. Supporters retain full voting rights."

**Status:** DECIDED — option (a) worker-tier-and-above authorship. FR-090 stands as written
(authorship must be public). A Supporter who wishes to author a proposal self-declares as a
Worker; the platform does not erect a gate to prevent this. Supporters retain full voting
rights without authoring.

### OI-15 — Expulsion scope for anonymous Supporters

> "PUBLIC TIERS ONLY. Supporters are anonymous by design and cannot be expelled — building
> that capability would require deanonymising them, which is refused. Supporters hold no role,
> and fraudulent enrolment is already addressed by FR-005 credential revocation, which acts on
> the credential rather than the person."

**Status:** DECIDED — option (a) expulsion scoped to public tiers (Workers and Candidates).
FR-005 fraud-revocation applies to Supporters in place of party-level expulsion. No
pseudonymous expulsion mechanism is to be designed.

### OI-16 — Destroy-on-withdrawal vs append-only governance record

> "ADOPT THE CONFIDENTIAL-CLASS CARVE-OUT. A withdrawn candidate's disclosures were submitted
> under a consent that never completed; destroying them honours the withdrawal right rather
> than excepting the append-only rule. Public records of completed actions remain append-only
> without exception."

**Status:** DECIDED — option (a) confidential-class carve-out adopted. Pre-nomination Worker
disclosure data is classified as a confidential class (Doc 02 §4.35 data classification) and
falls outside the append-only boundary; it may be destroyed on withdrawal. Public records of
completed actions remain append-only without exception.

---

## 4. Carry-forward open items

The following items remain open after this approval. The approver's words on carry-forwards:

> "the activation-threshold number and the pilot jurisdiction remain open; fork initiation
> remains an open critical with the flag off above dev; SC-13/SC-14 are resolved in principle
> by FR-112/FR-113 with the Doc 03 design change owed to the architect after this gate."

Each item must close before the column indicated.

| Item | Description | Must close before |
|------|-------------|-------------------|
| **OI-01-NUM** | Activation threshold percentage — method decided 2026-08-09 (percentage of regional population from the population oracle, calibrated per region, published before first petition opens above dev); **number open** | First petition opens above dev |
| **OI-04-PILOT** | Pilot jurisdiction name and eID rail — one pilot accepted at Gate 1 2026-08-09 via Lever L2; **name and rail open** | Enrolment requirement is implemented |
| **FORK-CRIT** | Fork initiation calldata vulnerability — 10% threshold and 30-day cooling-off are currently decorative; `fork` feature flag **must remain OFF in every environment above dev** until fixed | Gate 2 / `fork` flag enabled above dev |
| **SC-13/SC-14** | Doc 03 design change implementing FR-112/FR-113 (trust-anchor lifecycle events as member-vote actions executed by code — ruling 4) — resolved in principle at requirements level; **design work owed to architect** | Doc 03 v2 produced |
| **SC-05** | Rate-limit on recovery re-initiation after ABORTED state — unaddressed by v2.0.0 requirements; **must be addressed in Doc 03 v2 specification** | Doc 03 v2 specification (before Change 7 / FR-071/FR-072 is coded) |
| **OI-08/OI-17** | Governance constants (quorums, timelocks, thresholds) — deliberately deferred to Design; owner Tomás Ferreira (OI-17); **closed by architect in Doc 03** | Doc 03 v2 (Design phase) |

---

## 5. What this decision unlocks — and in what order

Gate 1 is approved conditional on Part B (steward-organisation requirements) entering Doc 02
as v2.1.0 with a passing business-mode review in this session. The sequence is:

**Phase A — THIS SESSION (pre-design, satisfying the condition):**

| Step | Role | Deliverable | Depends on |
|------|------|-------------|-----------|
| A1 | product-owner | Doc 02 v2.1.0 — steward-organisation requirements added as Part B | Gate 1 APPROVED (this record) |
| A2 | neutral reviewer | business-mode document-review of Doc 02 v2.1.0 (cycle 1 of 5) | Doc 02 v2.1.0 produced |
| A3 | project-manager | condition-satisfaction note — records that the condition is met | Doc 02 v2.1.0 passes business review (≥95%, zero C/H/M) |

**Phase B — POST-CONDITION (design phase begins once A3 is recorded):**

| Step | Role | Deliverable | Depends on |
|------|------|-------------|-----------|
| B1 | product-owner | Doc 05 Backlog v2 — epics, features, stories for all 94 Must FRs including steward requirements from v2.1.0; OI-14/15/16 decisions applied to affected stories | Condition satisfied (Doc 02 v2.1.0 PASS) |
| B2 | project-manager | Doc 13 Project Plan re-plan — re-estimate schedule and appetite for v2.0.0 scope per CON-007 flag | Condition satisfied |
| B3 | architect | Doc 03 Architecture v2 — full FR coverage incl. steward requirements from v2.1.0; SC-13/SC-14 (FR-112/FR-113 design); SC-05 rate-limit; OI-17 governance constants; SC-04 nullifier-linkage architectural treatment | Condition satisfied; OI-14/15/16 decided (this record) |
| B4 | tester | Docs 07/08 catch-up — new TCs for FR-074..FR-113 and v2.1.0 steward requirements; RTM rows; current RTM covers v1.1.x only | Doc 03 v2 available |

---

## 6. Source references

- **Gate 1 re-entry packet:** `artifacts/status/GATE1-REENTRY-v2.0.0-2026-08-10.md`
- **Doc 01 PR-FAQ v2.0.0:** `docs/01-press-release-prfaq.md` — Status: Approved (cycle-1 PASS 97%, 0C/0H/0M/2L)
- **Doc 02 Requirements v2.0.1:** `docs/02-requirements-srs.md` — Status: Approved (cycle-2 PASS 98%, 0C/0H/0M/1L)
- **Review report Doc 01 v2.0.0 cycle 1:** `artifacts/reviews/01-press-release-prfaq-v2.0.0-business-cycle1.md`
- **Review report Doc 02 v2.0.0 cycle 1:** `artifacts/reviews/02-requirements-srs-v2.0.0-business-cycle1.md` (FAIL 92% — basis for v2.0.1 rework)
- **Review report Doc 02 v2.0.1 cycle 2:** `artifacts/reviews/02-requirements-srs-v2.0.1-business-cycle2.md` (PASS 98%)
- **SC-01 re-scan confirmation:** `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`
- **Prior Gate 1 decision (superseded):** `artifacts/status/GATE1-DECISION-2026-08-09.md`
- **CR-v1.1.0 re-affirmation packet (superseded):** `artifacts/status/GATE1-REAFFIRMATION-CR-v1.1.0-2026-08-10.md`

---

*This record is written by the project-manager and reflects the decision of the human approver
verbatim. The project-manager does not approve gates. Only the human approver — Rathish — is
the decision-maker.*
