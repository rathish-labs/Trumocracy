# Project Plan — Trumocracy

```
Document ID:   PLAN-TRUMOCRACY
Version:       2.2.0
Status:        Approved (c2 business-mode review PASS 95%, 0C/0H/0M/2L — `artifacts/reviews/13-project-plan-v2.2.0-business-cycle2.md`; 2026-08-23)
Owner:         Ana-Maria Petrescu — Project Manager
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md),
               SRS-TRUMOCRACY v2.7.0 (docs/02-requirements-srs.md),
               BKLG-TRUMOCRACY (docs/05-product-backlog.md),
               ADR-001 … ADR-024 (docs/adr/),
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md (REC-1, REC-2),
               DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md (Ruling 1 — budget appetite),
               DECISIONS-2026-08-23-V1-V2-SPLIT.md (v1/v2 delivery split, Definition A/B)
Last updated:  2026-08-23
```

> **Based on:** Shape Up (appetite, fixed-time/flex-scope) + Rolling-wave planning + the VEKTOR
> two-gate governance model. **Produced in:** Define (drafted), **living** (re-planned at each gate).
> _Plans are anchored to **outcomes, not date theatre**. Fix the time, flex the scope. Plan the next
> wave in detail and the rest coarse. Milestones are gates, not arbitrary dates. A living risk
> register — not a Gantt — drives the plan._

> **Read this first.** This plan reports **one material variance** against the appetite recorded in
> `CON-007`. The cryptography critical path — **one batched phase-2 ceremony campaign across six
> circuits** (5–15 independent contributors per circuit, days not weeks — corrected per `ADR-022` /
> REC-1 2026-08-21) **plus two independent audits and their remediation** — cannot be compressed
> into a Gate 2 on **2027-02-15**. The plan's evidence-based Gate-2 date is **2027-05-14** (+13
> weeks), and this date is **audit-paced, not ceremony-paced** (the audits were already the binding
> constraint before the ceremony correction; removing the ceremony bulk from the critical path does
> not move Gate 2). The 10-month run-rate at 18 FTE consumes the whole USD 4.2M with **no
> contingency and a ~USD 245,000 (~−5.8%) shortfall**; the ceremony logistics budget line drops to near-zero
> (see §8.3). On the Gate-1-accepted L2 basis (decision B-01) the corrected budget is ≈ USD 4.03M against
> the unchanged USD 4.2M appetite, with the ≈ USD 175K difference held as an explicit audit-remediation
> contingency per the approver ruling of 2026-08-21 (see §8.3, RISK-18, RISK-19). The scope has
> re-baselined to **SRS v2.4.0 (110 Must requirements)**. Sections §3.4
> (critical path), §8.3 (resourcing) and §13 (Gate-1 packet) set out the three levers. **The
> project-manager does not decide this. The Gate-1 approver does.**
>
> **v2.0.0 re-plan (2026-08-21):** cryptography path corrected per REC-1 / REC-2 (`ADR-022`);
> scope re-baselined to SRS v2.4.0; ceremony logistics budget to near-zero; Gate-2 date unchanged.
> See §11 re-plan log for the full entry.
>
> **v2.1.0 re-plan (2026-08-23):** v1/v2 delivery split applied per Rathish directive (transmitted
> 2026-08-23); Definition A (v1 — conventional-auth platform) delivery plan added at §3.5;
> Definition B (v2 — guarantee layer) re-entry noted; §3.1 supersession annotation applied; scope
> re-baselined to SRS v2.6.0 (112 Must requirements); RISK-31..RISK-34 added (v1-specific risks).
> Gate-2 date 2027-05-14 UNCHANGED — attaches to Definition B; v1 gate date NOT SET, AWAITING
> APPROVER CONFIRMATION. See §11 re-plan log and `DECISIONS-2026-08-23-V1-V2-SPLIT.md`.
>
> **v2.2.0 re-plan (2026-08-23):** Cycle-1 business-mode review rework (FAIL 84%, 0C/1H/2M/2L). Five
> issues fixed: RISK-22..30 inserted in §6 (ISS-H1); v1 Must-set corrected to 108 (ISS-M1); honesty
> register updated H-01..H-14 in MS-V1-09 / PR-7 (ISS-M2); SRS pin updated to v2.7.0 Approved
> (ISS-L1); §13.1 review-status row updated (ISS-L2). See §11 re-plan log.

---

## 1. Objective & success metrics

> Lifted from the PR-FAQ (Doc 01 §C). The plan exists to move these numbers — every workstream in
> §4 traces to at least one. Measurement owner for all rows: **Yuki Sato** (Data & Measurement Lead).

**Objective.** Let any verified citizen create, incubate, join, govern and hold to account a
political party — with no gatekeeper, no party elite, and no privileged platform operator anywhere
in the governance path.

| # | Outcome | Metric | Baseline (2026-08-08) | Target | Guardrail | Source |
|---|---------|--------|-----------------------|--------|-----------|--------|
| O-1 | People can actually get in | Verified unique persons enrolled across the pilot jurisdictions | 0 | ≥ 250,000 by 2027-09-01 | Duplicate/synthetic-person rate ≤ 0.1%, independently audited | Doc 01 §C; `BR-006`, `NFR-004` |
| O-2 | The open-incubation thesis holds | Parties reaching the activation threshold | 0 | ≥ 12 in the first 12 months | ≥ 60% of activated parties still above the maintenance floor at month 6 | Doc 01 §C; `BR-002` |
| O-3 | Participation is not means-tested | Median platform-borne cost per citizen governance action | n/a | < USD 0.01 | p99 < USD 0.05; **USD 0.00 charged to the citizen, always** | Doc 01 §C; `NFR-005` |
| O-4 | A non-technical citizen can use it | First-time citizens completing enrol → endorse unaided | n/a | ≥ 80% within 10 minutes | SUS ≥ 75; support-contact rate ≤ 5% of enrolments | Doc 01 §C; `NFR-022` |
| O-5 | Nobody gets hurt for participating | Confirmed deanonymisation of an ordinary member's affiliation or ballot | n/a | **0** | 0, permanently — **kill-criterion metric** (§14, KC-1) | Doc 01 §C; `BR-009`, `NFR-001` |
| O-6 | Results are checkable by strangers | Independently reproducible tallies | n/a | 100% of closed ballots | ≥ 25 distinct third-party orgs running the verifier by month 6 | Doc 01 §C; `FR-033`, `FR-055` |
| O-7 | Coercion has a real defence | Reported coercion cases where the silent override took effect | n/a | ≥ 95% of reported cases | 0 cases where the override was externally detectable | Doc 01 §C; `BR-011`, `NFR-003` |
| O-8 | No issuer becomes the gatekeeper | Largest single attestor's share of credentials in any one region | n/a | ≤ 40% | Never > 50% — a majority-issuing attestor is a **stop-the-line** event | Doc 01 §C; `FR-004` |
| O-9 | Accountability is exercised, not decorative | Elected representatives subject to a recall reaching a vote | 0 | ≥ 1 per 20 offices per year | ≤ 10% of recall initiations judged harassment | Doc 01 §C; `BR-005` |
| O-10 | The platform is there when needed | Citizen write-path availability | n/a | 99.5% monthly | No single operator outage blocks a citizen action > 60 min | Doc 01 §C; `NFR-007`, `NFR-025` |
| O-11 | Everyone can use it | WCAG 2.2 AA conformance on primary flows | n/a | 100% of primary flows | 0 Level A or AA failures at Gate 2 | Doc 01 §C; `NFR-011` |

**The plan's own delivery outcome.** Reach Gate 2 with `RTM` (Doc 08) zero gaps in Must rows, two
independent audits at zero critical/high open, and a rollback proven under 15 minutes (`NFR-020`) —
without spending more than the appetite in `CON-007` allows.

---

## 2. Scope & explicit out-of-scope

### 2.1 In scope (this release)

The **112 Must** functional requirements (`FR-001`…`FR-131`, SRS v2.7.0 §11) and the 22 **Must**
non-functional requirements, delivered across four phases (§3.1) as designed in `ADR-001`…`ADR-024`
_(scope re-baselined 2026-08-23: was 42 Must FRs per Doc 02 v1.0.0 at Gate 1; grown to 110 at
v2.4.0, then FR-130 (provisional-party cap) and FR-131 (v1 honesty notice) added at v2.5.0/v2.6.0
— see SRS v2.6.0 §11 and §16; the v1/v2 split classifies the Must set into IN-v1 / PARTIAL /
DEFERRED-v2 per the 2026-08-23 directive — see §3.5 and `DECISIONS-2026-08-23-V1-V2-SPLIT.md`)_:

- Verified personhood (issuer-agnostic adapter registry, scope-bound nullifiers — `ADR-003`) and
  regional residency (versioned hierarchical region codes, per-region credential trees, ZK
  membership proof — `ADR-004`).
- Party drafting across the eight mandatory pillars; petition → threshold → automatic activation,
  with a multi-source denominator oracle and a verified-resident floor (`ADR-004` §4).
- Open, equal membership with maturation and churn limits; tiered proposals, supermajorities and
  timelocks; entrenched founding clauses (`ADR-007`, `ADR-008`).
- Anonymous, receipt-free voting via MACI with a **5-of-7 threshold coordinator committee**
  (`ADR-006`); region-and-office-scoped nomination and internal election; mid-term recall.
- Public verifiable record, standalone verifier, immutable version history (`ADR-009`).
- Zero-cost citizen actions via sponsored ERC-4337 transactions with an L1 force-inclusion escape
  hatch (`ADR-001`, `ADR-002`); seedless recovery; WCAG 2.2 AA; 8 launch locales incl. RTL.
- The engineering programme those require: monorepo with CI-enforced dependency direction
  (`ADR-011`), Circom circuits with **one batched phase-2 ceremony campaign across six circuits**
  (assurance-sized per `ADR-022`; `ADR-005`), **two independent audits — one protocol, one
  circuits** (`ADR-005`, `NFR-009`), issuer + attester onboarding, and a staged 1 → 10 → 50 → 100%
  production rollout.

### 2.2 Explicit out-of-scope (and when, if ever, later)

| Out of scope | Why | Revisit |
|---|---|---|
| Conducting, certifying or replacing any binding **state** election or referendum | `CON-001` — absolute, non-negotiable at any gate | **Never** |
| Any transferable token, coin, sale, subscription or fundraising instrument | `CON-006`, `ADR-007` — wealth must not convert into governance influence | **Never** |
| Vote delegation / proxy / liquid democracy | Reintroduces brokers, the exact problem being solved | No earlier than v2 |
| Cross-jurisdiction / federated parties | A party declares one jurisdiction at activation (`FR-019`) | Post-launch |
| Party treasuries at full scale (`FR-049`, `FR-050`, `FR-052`) | v1 ships the *guardrail* (`FR-051`, Must) only; workflow is Should/Could | Phase 3 flag, jurisdiction-gated |
| Social layer: feeds, forums, DMs | Not the product | Never in this plan |
| Staff moderation of political speech | `FR-056` — only jurisdiction-scoped **display** filtering, publicly logged | Never |
| Party dormancy lifecycle, treasury split on fork, personal blocklists | Could items | Post-launch |
| Sovereign rollup, protocol-key renunciation, transparent-setup proving system, native client | Deliberately deferred — running our own chain before a decentralised sequencer set exists replaces "trust Base" with "trust us" (`ADR-001`) | **Phase 4** (§3.1) |
| A fourth+ pilot jurisdiction | Legal review is per-jurisdiction (`CON-005`) | Post-launch |

**Scope is the flex variable.** `CON-007` fixes the money and the team. Where the plan cannot fit,
scope moves — §13 names the two candidate scope cuts and their price.

---

## 3. Milestones & the two gates

### 3.1 Phase map (derived from `ADR-001`…`ADR-014`)

| Phase | What it delivers | Flags | Environment | Window |
|---|---|---|---|---|
| **Phase 0 — Foundations** | Monorepo with CI-enforced dependency direction (`ADR-011`); EVM test harness; **pure protocol reference implementation** (`packages/protocol` — threshold maths, tier rules, state transitions, ID derivation, no I/O); `ADR-001`…`ADR-014` written | n/a | local / CI | **In progress**, complete by 2026-09-14 |
| **Phase 1 — Walking skeleton on testnet** | Personhood + residency registries against a **mock verifier**; petition → threshold → activation; join/leave; tiered proposals + voting with a **public tally**; timelocks. End-to-end, one citizen journey, nothing real about the cryptography yet | elections **OFF** · recall **OFF** · treasury **OFF** · fork **OFF** · MACI **OFF** | public testnet | 2026-09-14 → 2026-11-27 |
| **Phase 2 — Real cryptography** | Circom circuits per `ADR-005`; **one batched phase-2 ceremony campaign, six transcripts**, 5–15 independent contributors per circuit on Perpetual Powers of Tau (`ADR-022` — corrected 2026-08-21); Groth16 verifiers frozen by hash in the verifier registry; client-side proving on the reference device; **two independent audits — one protocol, one circuits** (`NFR-009`, `CON-012`); issuer + attester onboarding for the pilot region(s) through the 30-day registry timelock (`ADR-003`, `ADR-010`) | MACI still **OFF**; mock verifier retired | testnet, then mainnet dark | 2026-10-05 → 2027-04-19 |
| **Phase 3 — Coercion resistance & representation** | MACI with the **5-of-7 threshold coordinator committee** (`ADR-006`); elections; recall; treasury guardrail; fork. **This is the first phase real citizens use.** Staged **1 → 10 → 50 → 100%** | all five flags progressively **ON**, metric-gated | production (lead pilot) | 2027-04-19 → 2027-07-09 |
| **Phase 4 — Sovereignty** | `renounceProtocolKeys()` — irreversible protocol-key renunciation (`ADR-010`); sovereign OP Stack rollup evaluation (`ADR-001b`); transparent-setup proving system evaluation (Noir/UltraHonk or STARK, `ADR-005` §6); hardened native client for high-risk jurisdictions (`ADR-012`) | — | production | from 2027-09-03 (entry review) |

**Why Phase 3 is the launch, not Phase 2.** `BR-011` and `NFR-003` (receipt-freeness) are **Must**.
A production rollout to real citizens with MACI OFF would be a voting platform without coercion
resistance — a different and worse product, and one the Doc 02 Must set does not permit. Phase 2 is
therefore a **dark** mainnet phase, not a launch.

> **⚠ Supersession annotation — 2026-08-23 (Rathish directive, `DECISIONS-2026-08-23-V1-V2-SPLIT.md`).**
> The argument above now applies to **Definition B (v2)** only. Per the 2026-08-23 directive,
> **Definition A (v1)** launches with conventional-authentication voting under `FR-131` disclosure
> ("NOT anonymous, NOT receipt-free, NOT coercion-resistant — database CAN see vote direction").
> v1 voting works without MACI; the absence of MACI is disclosed at every vote-cast surface by
> `FR-131` (Must), not concealed. The original text is preserved intact — it correctly describes
> why the full-guarantee programme (Definition B) cannot launch from Phase 2. The supersession
> is additive: Definition A adds a distinct, earlier launch path; Definition B's programme
> (Phase 2 → Phase 3) is unchanged. See §3.5 for the v1 delivery plan and `ADR-024` for the
> `IEligibilityVerifier` / `IBallotService` seam definitions that make v2 an implementation swap.

### 3.2 Milestones

| ID | Milestone | Type | Gate? | Target | Entry evidence | Exit decision by |
|----|-----------|------|-------|--------|----------------|------------------|
| MS-01 | **Direction approved** | **Gate** | **Gate 1** | **2026-08-22** | Doc 01 + Doc 02 + Doc 05 + Doc 13 at v1.0.0 with passing `document-review` reports; named owner on every requirement; `OI-01`…`OI-05` decided | **Human approver** (Product **A** · Eng **C** · Design **C**) |
| MS-02 | Design baselined | Checkpoint | — | 2026-09-11 | Doc 03 SDD (incl. §9 repo structure) + Doc 04 Test Strategy; `ADR-001`…`ADR-014` re-confirmed against the Gate-1 decisions | Architect |
| MS-03 | Repo scaffolded · coding starts | Checkpoint | — | 2026-09-14 | Monorepo built from SDD §9 / `ADR-011`; CI dependency check green; UT standard live (Doc 06); `FeatureFlags` registry deployed | Eng Lead |
| MS-04 | **Long-lead trigger:** both audit firms contracted; ceremony coordinator appointed | Checkpoint | — | **2026-10-15** | Signed audit engagements with January start dates; ceremony coordinator appointed; no large-scale contributor outreach programme (`ADR-022` — corrected 2026-08-21) | PM · Head of Security |
| MS-05 | Phase-1 walking skeleton green on testnet | Checkpoint | — | 2026-11-27 | One citizen journey end to end against the mock verifier; differential tests `protocol` vs contract passing; five flags OFF and proven OFF | Eng Lead · Test Lead |
| MS-06 | **Circuit specification freeze** | Checkpoint | — | 2026-12-11 | All six circuits' public/private inputs frozen; `r1cs` hashes reproducible; no further circuit scope accepted | Architect |
| MS-07 | **Ceremony logistics confirmed** — contributors engaged, beacon procedure ready | Checkpoint | — | 2027-01-15 _(corrected from 2027-01-08; large-scale pledge campaign retired per ADR-022)_ | 5–15 independent contributors per circuit confirmed from mutually-independent institutions (`ADR-022`); beacon procedure published; ceremony run-book ready | Architect · Head of Security |
| MS-08 | **Batched phase-2 ceremony campaign complete** — six transcripts published | Checkpoint | — | **2027-01-25** _(corrected from 2027-03-05; ceremonies now a days-long campaign per ADR-022 — MS-08 is **off the critical path**; audits govern from here)_ | Six transcripts published permanently (`ADR-009`); every attestation and beacon published; `snarkjs zkey verify` reproducible by any third party; `zkeyHash` frozen in the verifier registry | Architect · Head of Security |
| MS-09 | **Both independent audits reported** | Checkpoint | — | 2027-03-12 | Protocol audit report + circuits audit report delivered | Head of Security |
| MS-10 | Audit remediation closed | Checkpoint | — | 2027-04-16 | **Zero critical and zero high open** (`NFR-009`); re-review signed by both firms | Head of Security |
| MS-11 | Issuer + attester registries live for the pilot region(s) | Checkpoint | — | 2027-04-19 | ≥ 2 accepted issuers incl. ≥ 1 non-state (`ADR-003` invariant); ≥ 2 residency attesters; 30-day registry timelock cleared | Identity PM · Architect |
| MS-12 | MACI 5-of-7 committee constituted; DKG rehearsed | Checkpoint | — | 2027-05-07 | 7 operators across ≥ 5 legal jurisdictions and competing parties; DKG + tally rehearsal on testnet; liveness attestations live | Elections PM · SRE |
| MS-13 | **Launch readiness** | **Gate** | **Gate 2** | **2027-05-14** | See §3.3 | **Human approver** (Product **A** · QA **C** · SRE **C**) |
| MS-14 | Staged rollout at 100% in the lead pilot | Checkpoint | — | 2027-07-09 | 1 → 10 → 50 → 100% completed, each stage metric-gated; no kill criterion tripped | SRE |
| MS-15 | Phase 4 entry review | Checkpoint | — | 2027-09-03 | 12-week production evidence; refine-log routed; renunciation readiness assessed | PO · Architect |

### 3.3 What each gate's approver must see — stated plainly

**Gate 1 — Direction approved (MS-01, target 2026-08-22).** The approver must be shown, and must be
able to check, all of:

1. **Doc 01 PR-FAQ v1.0.0** — headline, problem, solution, customer + stakeholder FAQ, the hard
   questions answered including where we lose, 11 measurable metrics with baseline/target/guardrail,
   10 explicit non-goals, 7 kill criteria.
2. **Doc 02 SRS v1.0.0** — 12 `BR`, 61 `FR` (42 Must), 26 `NFR` (22 Must), 12 `CON`, 16 `RISK`,
   6 recorded trade-offs; Gherkin acceptance criteria on **every** Must requirement; every `FR`/`NFR`
   tracing up to a `BR`; **a named individual owner on every single requirement** — never a team.
3. **Doc 05 Backlog v1.0.0** — 10 `EP`, 28 `FE`, 70 `US`, each with Gherkin, an owner and an `FR`
   trace, plus four **declared** non-Must coverage gaps.
4. **Doc 13 (this plan) v1.0.0** — outcomes, scope, phases, milestones, dependencies, the risk
   register of record (§6), RACI (§7), resourcing (§8.3), rollout/rollback (§9), kill criteria (§14).
5. **A passing `document-review` report for the current version of each of Docs 01, 02, 05 and 13** —
   business mode, neutral (non-owning) reviewer, ≥ 95% and zero critical/high/medium.
6. **A recorded decision on each of `OI-01` … `OI-05`** (§13.2). These are not discussion items; the
   gate does not clear without five decisions.
7. **A recorded decision on the two governance exceptions `E-01` and `E-02`** (§13.4).
8. **A recorded decision on the appetite variance** (§13.3) — date, budget, or scope.

Gate 1 approves **direction only**. It does not approve a schedule as a commitment.

**Gate 2 — Launch readiness (MS-13, target 2027-05-14), immediately before the Phase-3 production
rollout.** The approver must be shown, and must be able to check, all of:

1. **RTM (Doc 08) with zero gaps in every Must row** — `BR → FR/NFR → DES → US → TC` closed for all
   42 Must FRs and 22 Must NFRs, **verified independently by reviewer-qa**, not self-reported.
2. **All suites green**, including the mandatory ZK test classes from `ADR-005`: `circomspect` in CI,
   differential testing of the witness generator against the pure reference implementation, and
   **negative tests asserting a malformed witness fails** (an under-constrained circuit passes every
   positive test, so positive tests prove nothing).
3. **Two independent audit reports — one protocol, one circuits — with zero critical and zero high
   findings open** (`NFR-009`, `CON-012`), plus the signed remediation re-review.
4. **Six published ceremony transcripts** — assurance-sized (5–15 independent contributors per
   circuit from mutually-independent institutions, per `ADR-022`; corrected 2026-08-21 from ≥ 500
   convention), verifiable by any third party, every attestation and beacon published, with the
   `zkeyHash` of each circuit frozen in the on-chain verifier registry.
5. **Rollback proven, not asserted** — a live drill restoring the previous version in **< 15 minutes**
   (`NFR-020`, `NF-07`), including proof that a flag governing an **open ballot** cannot be changed
   while that ballot is open.
6. **Adversarial evidence**: privacy audit (`NF-01`), red-team flash-takeover and mob-capture
   simulations both failing to succeed (`NF-03`, `BR-012`), censorship and operator-censorship
   simulations passing (`NF-06`, `NFR-014`, `NFR-025`), load test at the `NFR-008` figures.
7. **Zero Level A/AA accessibility failures** on all primary flows (`NFR-011`), and 100% primary-flow
   string coverage in all launch locales (`NFR-013`).
8. **Legal sign-off per pilot jurisdiction** (`NFR-015`, `CON-005`) and a data-inventory inspection
   showing **no personal data anywhere on the public record** (`NFR-010`).
9. **The MACI 5-of-7 committee constituted and rehearsed**, with the documented last-resort fallback
   (re-run under a fresh committee — **never** a fallback to a plaintext tally).
10. **Doc 14 User Guide published**, and Docs 09/10/11/12 drafted by the sre.
11. **`CON-015` legal opinion cleared** — independent legal opinion on Aadhaar API usage within the
    project's data-minimisation posture (Gate-2 line item opened 2026-08-20 per
    DECISIONS-2026-08-20-PILOT-VERIFICATION.md). Status: **NOT STARTED**. Owner: Sofia Marchetti.
    Must be in hand ≥ 8 weeks before Gate 2 (≥ 2027-03-19).
12. **Doc 04 (Test Strategy) `document-review` debt cleared** — a passing review report (≥ 95%, zero
    C/H/M) for the current Doc 04 version. Status: **OPEN**. Owner: PM to assign neutral reviewer.
13. **RTM (Doc 08) catch-up for `FR-121`…`FR-129`** — traceability rows (`FR/NFR → DES → US → TC`)
    for all nine pilot-and-charter requirements minted in SRS v2.3.0–v2.4.0. None have DES/US/TC
    rows as of 2026-08-21. Status: **NOT STARTED**. Unblocked after Architect assigns DES IDs and
    Backlog adds US rows.

If any one of these is missing, **the gate is not presented.** The project-manager emits
`<missing_information>` naming the blocker and routes the work back to the owning role.

> **⚠ v1/v2 split annotation — 2026-08-23.** The twelve conditions above describe the
> **Definition B (v2)** Gate-2 posture (audit-paced, 2027-05-14). **Definition A (v1)** uses a
> lighter, separately stated production-readiness bar — see **§3.5**. The v1 bar replaces items 3
> (two heavy ZK audits), 4 (six ceremony transcripts), and 9 (MACI 5-of-7 committee) for the v1
> launch-readiness gate. All other items (RTM zero gaps for the v1 Must set, suites green, rollback
> proven, a11y, legal, Doc 04 review debt, FR-121..FR-131 catch-up) apply to both Definitions.
> The v1 gate date is NOT SET — AWAITING APPROVER CONFIRMATION. See `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(d)`.

### 3.4 Critical path

The critical path runs through **cryptography, not features**. Every long-lead item below is
externally paced — contributor recruitment, audit-firm capacity, and a 30-day on-chain registry
timelock are not things a team of 18 can work harder to shorten.

```
Gate 1 (2026-08-22)
  → SDD + Test Strategy baselined (2026-09-11)
    → repo scaffolded, coding starts (2026-09-14)
      → Phase-1 walking skeleton green on testnet (2026-11-27)
        → ▲ CIRCUIT SPEC FREEZE (2026-12-11)
          → circuits implemented; circomspect + differential + negative tests (→ 2027-01-15)
            → BATCHED PHASE-2 CEREMONY CAMPAIGN, 6 circuits, 5–15 contributors each (2027-01-18 → 2027-01-25)   [~1 week; corrected per ADR-022 — OFF THE CRITICAL PATH]
            ∥ ▲ TWO INDEPENDENT AUDITS, protocol + circuits, in parallel (2027-01-25 → 2027-03-12)  [7 weeks, external — BINDING CONSTRAINT]
              → ▲ AUDIT REMEDIATION + RE-REVIEW to zero critical/high (2027-03-15 → 2027-04-16)   [5 weeks]
                → ▲ verifier registry frozen; issuer/attester registry 30-day timelock clears (2027-04-19)  [external]
                  → MACI Phase-3 integration + 5-of-7 committee DKG rehearsal (2027-04-19 → 2027-05-07)
                    → RTM zero gaps · rollback drill · red-team · a11y · legal (2027-05-07 → 2027-05-13)
                      → ▣ GATE 2 (2027-05-14)
                        → staged rollout 1 → 10 → 50 → 100% (2027-05-17 → 2027-07-09)
```

**Long-lead items (▲) and the date they must be *started*, not finished:**

| Long-lead item | Duration | Must start by | Why it cannot be compressed |
|---|---|---|---|
| Audit-firm engagement (both) | 7 wks execution | **2026-10-15** | Credible protocol/circuit audit firms book 3+ months ahead. Miss this booking and the January slot is gone until March — a **10-week** slip, not a 2-week one |
| Ceremony contributor engagement | 2 wks | **2027-01-04** | 5–15 independent contributors per circuit from mutually-independent institutions; no large-scale outreach programme required (`ADR-022` — corrected 2026-08-21) |
| Batched phase-2 ceremony campaign (six circuits) | ~1 wk | 2027-01-18 | Per-circuit phase-2 is a small campaign of days, batchable across the six circuits (`ADR-022`); **OFF the critical path** — audits govern |
| Audit remediation + re-review | 5 wks | 2027-03-15 | An under-constrained circuit finding may require a **circuit change and a re-run ceremony** — the contingency below covers one such event |
| Issuer/attester registry additions | 30 days | 2027-03-15 | `ADR-003`/`ADR-010` impose a **30-day timelock** on registry additions. This is a deliberate design property, not a queue we can jump |
| Per-jurisdiction legal review | 8 wks | 2027-02-15 | `CON-005`, `NFR-015`; external counsel per jurisdiction |

**Float.** Phases 1 and 2 carry ~3 weeks of float in feature workstreams (WS-02, WS-04, WS-08).
The critical path itself carries **2 weeks** of contingency, sized to absorb exactly **one** circuit
re-ceremony (now a matter of days per `ADR-022`) or an audit remediation overshoot. Recall deferral
(`OI-02`) buys ~3 weeks — but on the *feature* path, which is not the critical path. **Cutting
features does not buy time here. Only starting the audit programme earlier does.**

**The variance.** `CON-007` targets Gate 2 on 2027-02-15 and launch on 2027-03-01. The evidence-based
dates are **Gate 2 on 2027-05-14** and 100% rollout on **2027-07-09**. See §13.3.

---

### 3.5 v1 Delivery Plan — Definition A

> **Authority:** Rathish (human approver), 2026-08-23, transmitted via coordinator.
> Full directive: `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md`.
> This section is the plan's recommendation. Items marked AWAITING APPROVER CONFIRMATION
> require Rathish's decision before the PM presents the v1 launch-readiness gate.

#### 3.5.1 What ships in v1 (Definition A)

**In scope for v1:**
- **108 Must FRs in the v1 Must set** — derived as: 112 total Must (SRS v2.7.0 §11) minus
  4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = **108**. The four deferred FRs exist
  solely for ZK anonymity / private-ballot / coercion-resistance and are structurally excluded
  from v1. All remaining 108 Must FRs are IN-v1 or have a defined PARTIAL v1 form (including FR-131).
- **24 IN-v1 NFRs** + **3 PARTIAL NFRs** (NFR-001, NFR-002, NFR-024 in v1 policy-enforcement forms).
- **Wireframes and design system** per `ADR-023` (DES-093/DES-094); all SCR screens remain in scope.
- **DES-097 package disposition**: blockchain serves ONLY as the public transparent-audit record
  (hash publication to audit contract for verifiable transparency); conventional application +
  database sits on top. v1 reuses: `packages/protocol` (governance rules, threshold maths, tier
  rules — no change); `packages/contracts` (audit-anchoring subset — hash publication only; registry
  contracts remain but no ZK verifier calls); `apps/web` + `packages/ui` (wireframe components,
  design system). **New in v1:** conventional auth + user account layer; relational database for
  membership, ballot, and manifesto data; `IEligibilityVerifier` v1 implementation (conventional
  auth/DB backing per DES-095); `IBallotService` v1 implementation (DB-backed ballot per DES-096).

**Not in scope for v1:**
- **4 DEFERRED-v2 FRs:** FR-030 (ballot unlinkability), FR-031 (receipt-freeness), FR-082 (Supporter
  unconditional anonymity), FR-086 (prior-period activity permanently anonymous).
- **1 DEFERRED-v2 NFR:** NFR-003 (coercion resistance — MACI receipt-freeness).
- **Everything that exists only to serve the DEFERRED items:** Circom circuit compilation
  (`ADR-005` posture unchanged for Definition B); the batched phase-2 ceremony campaign (`ADR-022`);
  MACI message queue and tally; the 5-of-7 coordinator committee (`ADR-006`); the two heavy
  independent cryptographic audits (NFR-009 Definition B path, one protocol + one circuits).
- **2 SUPERSEDED FRs:** FR-046, FR-062 (retained for traceability only).

#### 3.5.2 Build order — stage-sequenced plan

Milestones follow the existing MS- scheme; new v1-specific milestones use the `MS-V1-##` prefix
to avoid collision with existing MS-01..MS-15 (Definition B programme).

| Stage | MS ID | What it delivers | Anchors to | Reuse / New |
|-------|-------|-----------------|------------|-------------|
| **S-1 Foundations** | MS-V1-01 | Monorepo scaffolded (same as MS-03); `IEligibilityVerifier` + `IBallotService` interface definitions committed (`DES-095`, `DES-096`, `ADR-024`); v1 conventional-auth + DB schema bootstrapped; `FR-131` honesty-notice component (DES-098) scaffolded; CI green | `ADR-011`, `ADR-024`, `DES-095`, `DES-096`, `DES-097`, `DES-098`, `FR-131` | Reuse: protocol, monorepo scaffold. New: auth layer, DB schema, seam interfaces |
| **S-2 Identity & eligibility (v1)** | MS-V1-02 | `IEligibilityVerifier` v1 implementation (conventional auth — account registration, login, session, one-person-one-account enforcement via DB uniqueness constraint); residency / region code assignment; Phase-1 Aadhaar adapter stub (`DES-070`) behind a flag | `FR-001`..`FR-005` (v1 forms), `FR-121`..`FR-128` (v1 PARTIAL forms), `DES-095`, `ADR-016`, `ADR-021` | New: conventional auth backend. Reuse: protocol eligibility rules |
| **S-3 Party lifecycle** | MS-V1-03 | Party draft across eight mandatory pillars (`FR-006`..`FR-012`); digital constitution (`FR-074`..`FR-080`); non-violence clause (`FR-009`); petition → threshold → automatic activation (`FR-014`..`FR-018`); provisional-party membership cap (`FR-130`); DES-097 audit-record anchor on activation | `EP-02`, `EP-03`, `FR-006`..`FR-018`, `FR-074`..`FR-080`, `FR-130`, `DES-097` | Reuse: protocol threshold/activation rules, contracts (petition + party registries). New: DB party store |
| **S-4 Membership & proposals** | MS-V1-04 | Open membership join/leave (`FR-019`..`FR-025`); participation tiers (`FR-083`..`FR-089`); tiered proposals and supermajorities (`FR-035`..`FR-041`); timelocks (`FR-042`..`FR-044`) | `EP-03`, `EP-04`, `FR-019`..`FR-025`, `FR-035`..`FR-044`, `FR-083`..`FR-089` | Reuse: protocol tier/timelock rules, contracts. New: DB membership store |
| **S-5 Voting (v1) + FR-131** | MS-V1-05 | `IBallotService` v1 implementation (DB-backed ballot — vote stored and counted in DB, last-ballot-counts logic, public tally); **`FR-131` honesty notice** displayed at every vote-cast surface (SCR-13 non-dismissable pre-vote notice, SCR-14 post-vote notice) per DES-098; no MACI, no ZK — fully disclosed per FR-131 | `FR-026`..`FR-034` (v1 PARTIAL/IN-v1 forms), `FR-131`, `DES-096`, `DES-098`, `SCR-13`, `SCR-14` | Reuse: protocol tally rules. New: DB ballot store, IBallotService v1 |
| **S-6 Candidate selection, debates & recall** | MS-V1-06 | Self-nomination and candidate profiles (`FR-059`..`FR-061`, `FR-096`..`FR-102`); member-vote candidate selection (`FR-103`..`FR-110`); committee proposals (`FR-091`..`FR-095`); recall (`FR-042`/`FR-043`/`FR-045`); debate moderation boundary (`FR-056`) | `EP-05`, `EP-06`, `EP-07`, `FR-056`, `FR-059`..`FR-061`, `FR-091`..`FR-110` | Reuse: protocol recall rules. New: DB candidate store |
| **S-7 Manifesto commitments + dashboards** | MS-V1-07 | Measurable manifesto commitments with tracked evidence (`FR-111`..`FR-115`); public finance dashboards (FR-049..FR-052 v1 forms); promise-vs-performance dashboard; DES-097 audit-record anchoring for manifesto entries and financial summaries | `EP-08`, `EP-09`, `FR-049`..`FR-052`, `FR-111`..`FR-115`, `DES-097` | New: manifesto DB, dashboard backend |
| **S-8 Public audit-record anchoring** | MS-V1-08 | Hash publication to the audit contract for all major state transitions (party activation, ballot close, manifesto update) per DES-097; standalone verifier integration for audit-record verification; IPFS/Arweave mirror of audit hashes | `FR-054`, `FR-055`, `DES-097`, `ADR-009` | Reuse: contracts (audit-anchoring subset), verifier |
| **S-9 Hardening & beta** | MS-V1-09 | v1 production-readiness bar (§3.5.4); open-source readiness items (README honesty register H-01..H-14, contribution docs, licence); staged rollout infrastructure (1→10→50→100%) | NFR-006, NFR-007, NFR-011, NFR-020, `FR-131`, H-01..H-14 | — |

**Sequencing note.** Stages S-1..S-3 are strictly sequential (foundations → identity → party lifecycle).
S-4 and S-5 can proceed in parallel once S-3 is complete. S-6 and S-7 are parallel after S-4/S-5.
S-8 runs concurrently from S-3 onward. S-9 is the hardening pass on the completed feature set.

#### 3.5.3 Honest effort range

> **No formal v1 re-estimate has been produced for the v1-only scope.** The following is a
> reasoning-from-record range; it is not a plan commitment. Any appetite change is for the approver.

**Assumptions (sourced from existing artifacts):**

| Assumption | Basis |
|------------|-------|
| Team: 18 FTE per CON-007 (no budget re-ruling) | `CON-007`, Doc 13 §8.3 |
| Effective engineering capacity: ~9.0 FTE | Doc 13 §8.3 ("Effective hands-on engineering capacity: ~9.0 FTE") |
| No cryptography critical path in v1 | `ADR-024`; DEFERRED-v2 list above |
| Phase 0 + Phase 1 feature work (S-1..S-3 basis) largely reusable; coding start: 2026-09-14 | MS-03 (Doc 13 §3.2) |
| v2 seam interfaces (DES-095/096) must be committed before any v1 auth/ballot code — no bypass | `ADR-024`, RISK-34 |
| v1-specific tech stack (database vendor, auth provider) not yet decided — no artifact basis | N/A — not yet produced |
| Lightweight security review scheduling: typically 4–8 weeks lead time; duration 2–4 weeks | N/A — not yet produced; analogous to audit-firm booking precedent |

**Effort range:** **5–9 months from coding start (2026-09-14)**, contingent on:
- v1 tech-stack decision (database + auth provider) — if delayed, range shifts right.
- Lightweight security review scheduling (see §3.5.4) — 4–8 week booking lead time.
- Degree of reuse of Phase-1 walking-skeleton components; if the Phase-1 testnet skeleton
  is reused as the v1 base (likely), S-1..S-5 compress significantly.
- No structured v1 re-estimate artifact exists; this range is a first-principles derivation
  consistent with the approver's stated goal of "a working v1 in months."

**What is reused vs new:**

| Component | Status |
|-----------|--------|
| `packages/protocol` (governance rules, threshold maths, tier rules) | **Reused unchanged** |
| `packages/contracts` — petition, party, registry contracts | **Reused** (audit-anchoring subset) |
| `apps/web` + `packages/ui` (wireframe components, design system ADR-023) | **Reused** |
| Phase-1 testnet walking skeleton (party lifecycle, proposals, public tally) | **Reused as base** |
| Circom circuits, ZK verifier, MACI, ceremony tooling | **Not built in v1** |
| Conventional auth + account layer | **New** |
| Relational database schema (membership, ballot, manifesto) | **New** |
| `IEligibilityVerifier` v1 implementation | **New** |
| `IBallotService` v1 implementation | **New** |
| FR-131 honesty-notice component (DES-098, SCR-13/SCR-14) | **New** |

#### 3.5.4 v1 production-readiness bar

v1 is exempt from the ceremony, the coordinator committee, and the two heavy ZK audits (NFR-009
Definition B path). v1 DOES need the following before it is production-grade and public:

| # | Item | Standard | Owner | Status |
|---|------|----------|-------|--------|
| PR-1 | **Lightweight independent security review / penetration test** — OWASP-class web / API / authn / authz scope. NOT circuit cryptography. Covers: session management, CSRF/XSS/injection, broken access control, authentication bypass, API authorisation. | OWASP Top 10 + API Security Top 10 | Head of Security (Rafael Duarte) to engage external firm | NOT STARTED |
| PR-2 | **Accessibility audit** — WCAG 2.2 AA conformance on all primary flows (`NFR-011`, Must; not DEFERRED). Zero Level A or AA failures at v1 launch. | `NFR-011` | Nadia Hassan | NOT STARTED |
| PR-3 | **Load / performance verification** — p95 write-path latency < 2s (`NFR-006`); availability 99.5% monthly (`NFR-007`); test at v1-applicable `NFR-008` user volume (scaled for v1 pilot scope — no formal v1 target yet) | `NFR-006`, `NFR-007`, `NFR-008` (v1-scoped) | Chen Wei (SRE) | NOT STARTED |
| PR-4 | **Rollback drill** — v1 conventional infrastructure rollback (previous version restored in < 15 min, `NFR-020`); evidenced before v1 gate. Note: v1 does not have an immutable core; rollback is a standard deployment rollback. | `NFR-020` | Chen Wei (SRE) | NOT STARTED |
| PR-5 | **Staged rollout** — 1 → 10 → 50 → 100% in the lead pilot jurisdiction, each stage metric-gated. Minimum 5 days at each stage. | Doc 13 §9 | Chen Wei (SRE) | NOT STARTED |
| PR-6 | **FR-131 honesty-notice verification in the release checklist** — confirm that every ballot submission code path triggers the SCR-13 non-dismissable notice and the SCR-14 post-vote notice; confirm that no product material uses the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting. | `FR-131` (Must), `DES-098` | Nadia Hassan (notice); Ji-woo Park (checklist) | NOT STARTED |
| PR-7 | **Open-source readiness** — README honesty register (`H-01`..`H-14` from Doc 02 §16.4); contribution docs (CONTRIBUTING.md, CODE_OF_CONDUCT.md); LICENCE file; GitHub issue templates. | Doc 02 §16.4 H-01..H-14 | product-owner (Priya Raghunathan) + engineer (Samuel Oyelaran) | NOT STARTED |
| PR-8 | **Legal review** — `CON-015` (independent legal opinion on Aadhaar API usage within the data-minimisation posture) remains a Gate-2 line item; it applies to both Definitions. Per-jurisdiction legal review required for any jurisdiction where v1 is deployed (`CON-005`, `NFR-015`). | `CON-015`, `CON-005`, `NFR-015` | Sofia Marchetti | NOT STARTED — Gate-2 blocker |
| PR-9 | **Doc 04 (Test Strategy) review debt** — a passing technical-mode document-review of Doc 04 v1.0.2. Applies to both Definitions. | VEKTOR review loop | PM to assign neutral reviewer | OPEN — Gate-2 blocker |
| PR-10 | **RTM zero gaps in v1-scoped Must rows** — `BR → FR/NFR → DES → US → TC` closed for all Must FRs in the v1 Must set (108 = 112 total Must − 4 DEFERRED-v2 Must FRs: FR-030, FR-031, FR-082, FR-086); verified independently by reviewer-qa. | Doc 08 / VEKTOR DoD | Ji-woo Park (tester); Rafael Duarte (reviewer-qa) | NOT STARTED — 114 open Must rows currently |

**On NFR-009 re-reading for v1:** NFR-009 specifies two independent audits (protocol + circuits)
as Must requirements. The v1 production-readiness bar (PR-1 above) substitutes a lighter,
OWASP-class web/API/authn/authz security review. This is a **re-reading of what NFR-009's
Gate-2 conditions mean for Definition A**. It is stated here as a **plan recommendation; only
the approver can ratify the re-reading.** NFR-009's two heavy audits remain binding for
Definition B, and the v1 bar is a DIFFERENT, lighter, explicitly stated bar — not a silent
weakening. See `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(e)`. AWAITING APPROVER CONFIRMATION.

#### 3.5.5 Where v2 re-enters

Per the VEKTOR SOP: a promoted bet re-enters at the top and passes through both gates. Definition
B is not an exception.

**Programme disposition:**
- The existing **Phase 2 (circuits / ceremony / audits)** and **Phase 3 (MACI / elections-crypto)**
  content becomes the **Definition-B programme**, re-entering design→build **after v1 launch** (not
  before). The design artifacts (ADR-005, ADR-006, ADR-022, Doc 03 §10.x, the six Circom circuit
  specs) are preserved intact — nothing is discarded.
- **`DES-095` / `DES-096` seams** (ADR-024) make v2 an implementation swap: the `IEligibilityVerifier`
  and `IBallotService` interfaces are the stable contracts; the v1 conventional-auth / DB backing is
  replaced by the ZK nullifier circuit / MACI message queue backing. This is one implementation
  swap at two points, never a rewrite of the full application.
- **Gate-2 date 2027-05-14** (audit-paced, MS-13) attaches to **Definition B**. The existing critical
  path (MS-06 circuit freeze → MS-07 ceremony logistics → MS-08 batched ceremony → MS-09/MS-10
  audits → MS-11/MS-12 MACI integration → MS-13 Gate 2) is the **Definition-B programme** unchanged.
- **v1 launch-readiness gate (MS-V1-LRG):** v1 aims for its own earlier launch-readiness gate
  against the v1-scoped Must set. The specific date is NOT SET — it is the plan's recommendation
  to establish this gate after the v1 tech-stack decision and the PR-1 security-review scheduling
  are complete. **AWAITING APPROVER CONFIRMATION.** See `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4(d)`.
- **Gate-2 re-dating:** The existing 2027-05-14 is proposed to remain as the Definition-B Gate-2
  date. No date has been changed. This re-scoping of which definition the date attaches to is a
  **plan recommendation AWAITING APPROVER CONFIRMATION.**

---

## 4. Workstreams mapped to epics

> No workstream without an epic; no epic without a named owner. `WS-11`/`WS-12`/`WS-13` are
> **enabling** workstreams — they carry no epic of their own and are labelled honestly as such,
> mapping instead to the non-functional backlog items `NF-01`…`NF-08` (Doc 05) and to constraints.

| ID | Workstream | Maps to | Owner (named) | Wave | Status |
|----|-----------|---------|---------------|------|--------|
| WS-01 | Verified personhood & regional eligibility | `EP-01` · `ADR-003`, `ADR-004` | Marcus Adeyemi | Now (P1) → Next (P2) | Not started |
| WS-02 | Party drafting & the eight mandatory pillars | `EP-02` · `ADR-009` | Tomás Ferreira | Now (P1) | Not started |
| WS-03 | Petition, threshold, activation & the denominator oracle | `EP-03` · `ADR-004` §4 | Tomás Ferreira (denominator: Yuki Sato) | Now (P1) | Not started |
| WS-04 | Open, equal membership | `EP-04` · `ADR-007` | Grace Mbeki | Now (P1) | Not started |
| WS-05 | Proposals, amendment & anti-capture governance | `EP-05` · `ADR-008` | Tomás Ferreira (anti-capture: Rafael Duarte) | Now (P1) | Not started |
| WS-06 | Anonymous, receipt-free voting (MACI) | `EP-06` · `ADR-006` | Aisha Nkemdirim | Later (P3) — **largest single engineering cost** | Not started |
| WS-07 | Localized nomination & internal election | `EP-07` · `ADR-004` | Aisha Nkemdirim | Later (P3) | Not started |
| WS-08 | Accountability: manifestos, records & mid-term recall | `EP-08` · `ADR-009` | Erik Lindqvist (recall: Aisha Nkemdirim) | Later (P3) | Not started |
| WS-09 | Public verifiability & the moderation-by-code boundary | `EP-09` · `ADR-009`, `ADR-013` | Erik Lindqvist (boundary: Daniel Okonkwo) | Now (P1) → Next (P2) | Not started |
| WS-10 | Zero-friction access: cost, recovery, accessibility | `EP-10` · `ADR-001`, `ADR-002`, `ADR-012` | Hiroshi Tanaka (recovery: Amara Diallo; a11y/i18n: Nadia Hassan) | Now (P1) → Next (P2) | Not started |
| WS-11 | **Enabling — cryptography programme**: circuits, one batched phase-2 ceremony campaign (six transcripts), two independent audits (`ADR-022`) | *no epic*; enables `EP-01`, `EP-06` · `NF-01`, `NF-02`, `NF-03` · `ADR-005`, `ADR-022` | Rafael Duarte (audits) · Architect (circuits/ceremonies) | Next (P2) — **on the critical path (audit-paced)** | Not started |
| WS-12 | **Enabling — platform & operations**: monorepo, CI, indexer, relayer, paymaster, rollout, rollback | *no epic*; `NF-04`…`NF-08` · `ADR-011`, `ADR-014` | Chen Wei | Now (P0/P1) → all waves | In progress (P0) |
| WS-13 | **Enabling — legal & jurisdiction enablement**: per-jurisdiction review, feature gating, transparency posture | *no epic*; `CON-005`, `NFR-015` · `ADR-013` | Sofia Marchetti | Now → Next | In progress |

---

## 5. Dependencies & assumptions

| ID | Dependency / assumption | Type | On whom | Needed by | Status | Fallback if it slips |
|----|-------------------------|------|---------|-----------|--------|----------------------|
| DEP-01 | **Two independent audit firms contracted** — one protocol, one circuits (`NFR-009`, `CON-012`) | Vendor | Rafael Duarte | **2026-10-15** | Not started | Sequential audits instead of parallel → **+7 weeks** on the critical path. There is no acceptable "skip" |
| DEP-02 | **5–15 independent phase-2 ceremony contributors per circuit**, drawn from mutually-independent institutions (`ADR-022`; corrected 2026-08-21 from v1.0.0 ≥ 500 convention — see DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md REC-1) | External community | Architect + Head of Security | 2027-01-15 | Not started | Contributor count above 1 is assurance-based, not a security floor; reduce count only if institutional independence across contributors is preserved |
| DEP-03 | **≥ 2 accepted personhood issuers per pilot region, ≥ 1 of them non-state** (`ADR-003` on-chain invariant; `A-01`) | Vendor / partner | Marcus Adeyemi | 2027-03-15 (for the 30-day timelock) | Not started | That jurisdiction **cannot launch** (`A-01`). Fall back to the lead pilot only |
| DEP-04 | **≥ 2 independent residency attesters per pilot region**, staked and slashable (`ADR-004` §3) | Vendor / partner | Marcus Adeyemi | 2027-03-15 | Not started | Enable the civic-notary + peer-attestation tiers first, hard-capped at 5% per epoch |
| DEP-05 | **≥ 5 independent population-statistics sources** per region with ≤ published tolerance disagreement (`FR-009`, `ADR-004` §4; `A-02`) | Data | Yuki Sato | 2027-02-15 | Not started | Re-scope thresholds to a coarser region tier; the verified-resident floor still holds |
| DEP-06 | **Per-jurisdiction legal review and sign-off** (`CON-005`, `NFR-015`, `ADR-013`) | Legal / vendor | Sofia Marchetti | 2027-04-16 | Not started | Launch the cleared jurisdiction only; gate features per jurisdiction as designed |
| DEP-07 | **7 independent MACI committee operators** across ≥ 5 legal jurisdictions and competing parties, resampled per election (`ADR-006`) | External partner | Aisha Nkemdirim | 2027-04-19 | Not started | No Phase-3 rollout. There is no single-coordinator fallback — a party that can read every ballot is the failure mode we are here to prevent |
| DEP-08 | **Base (OP Stack L2) availability, blob-fee levels and force-inclusion path** (`ADR-001`) | Infra | Chen Wei | Continuous | Assumed available | Contracts are CREATE2/chain-agnostic — redeployment to another L2 is configuration, not a rewrite |
| DEP-09 | **A named Principal Architect distinct from the Product Owner** — see governance exception `E-02` (§13.4) | Team | Human approver | **Gate 1** | **Unresolved** | Gate-1 approver either splits the role or records an explicit acceptance of the conflict |
| DEP-10 | **Sponsorship buffer sized to 90 days at p95 blob fees** (`ADR-001`) | Budget | Hiroshi Tanaka | 2027-04-19 | Not started | Paymaster degrades to "user may self-pay" — which **violates** `FR-060`/`NFR-005`, so this is a launch blocker, not a graceful degradation |

**Assumptions carried from Doc 02 §9.2** (`A-01`…`A-06`) are adopted unchanged and are not restated
here except where they carry a dependency above. Two plan-local assumptions are added:

| ID | Plan assumption | If false |
|----|-----------------|----------|
| A-PLAN-01 | Blended fully-loaded cost is **USD 16,500 per FTE-month** across the 18-person team | §8.3 budget moves proportionally; a 10% error is ±USD 0.30M — larger than the entire remaining contingency |
| A-PLAN-02 | The two audits can run **in parallel** (different firms, different scopes) with no serialising dependency between protocol and circuit findings | Serialised audits add **7 weeks**; Gate 2 moves to 2027-07-02 |

---

## 6. Risk register (living) — **register of record**

> This is the **single living risk register of record** for Trumocracy. Doc 02 §10 and Doc 03 §13
> **reference** these `RISK-##` IDs; they do not keep competing copies. `L` and `I` are on Doc 02's
> 1–5 scale. **Exposure = L × I.** Reviewed every wave; a realized risk re-plans the wave.
> `RISK-01`…`RISK-16` are carried across from Doc 02 §10 unchanged in meaning.
> `RISK-22`…`RISK-30` are also carried from Doc 02 §10 (minted at v1.1.0 and v2.0.0 era
> respectively); recovered and added to this register at v2.2.0 (ISS-H1 — absent at v2.1.0 in error).
> `RISK-17`…`RISK-21` are **new at Doc 13 v1.0.0** — delivery and schedule risks that are the
> project-manager's to own and did not belong in a requirements document. No ID is reused.
> `RISK-31`…`RISK-34` are **new at Doc 13 v2.1.0** — v1-specific delivery risks.

| ID | Risk | L | I | Exposure | Mitigation / trigger | Carried by | Owner | Status |
|----|------|---|---|----------|----------------------|-----------|-------|--------|
| RISK-01 | **Sybil inflation of a threshold** — fake or duplicated persons manufacture endorsements to activate a party or carry a vote | 4 | 5 | **20** | Scope-bound nullifiers `Nᵢ`/`Nₐ`; issuer tiering; per-issuer enrolment caps per region per epoch; attestor 50% concentration cap; activation dwell period; published duplicate-rate audit. **Trigger:** any issuer > 40% share in a region | `ADR-003`, `ADR-004` | Marcus Adeyemi | Open |
| RISK-02 | **Coercion and vote-buying** — an employer, spouse, clan leader or broker compels or purchases votes | 4 | 5 | **20** | MACI key-change indistinguishability makes the receipt worthless; ≥ 72h voting windows; no interim tallies; plausible-deniability confirmation screen + panic re-vote; non-exportable enclave keys. **Trigger:** any evidence of a functioning vote market → KC-2 | `ADR-006`, `ADR-002` | Aisha Nkemdirim | Open |
| RISK-03 | **Flash governance takeover** — voting power acquired instantaneously immediately before or during a vote | 3 | 5 | 15 | Maturation period; eligibility snapshot fixed at proposal open; tier timelocks; non-transferability; red-team simulation before Gate 2 (`NF-03`) | `ADR-007`, `ADR-008` | Rafael Duarte | Open |
| RISK-04 | **Mob capture of a founding charter** — a coordinated flood of new members rewrites the founding clauses | 4 | 5 | **20** | Entrenched clauses with membership-age quorum; escalating tiers; longest timelock at the top tier; fork as the minority's guaranteed exit. **Trigger:** any party's membership > 3× in 7 days | `ADR-008`, `ADR-010` | Rafael Duarte | Open |
| RISK-05 | **Identity-provider single point of failure or compromise** — one issuer fails, is captured, is compelled, or mass-issues | 3 | 5 | 15 | 1-of-N issuer registry with the on-chain invariant `acceptedIssuers(region).length >= 2` and ≥ 1 non-state; 48h expedited removal (removal only, never addition); re-attestation instead of mass revocation | `ADR-003` | Marcus Adeyemi | Open |
| RISK-06 | **Deanonymisation via correlation or timing** — traffic patterns, action timing or small scopes re-identify a member | 4 | 5 | **20** | `k ≥ 1000` anonymity floor enforced as a **checked precondition** with escalation to the nearest ancestor region; no timestamp finer than the epoch; mandatory random delay between enrolment and first action; adversarial privacy audit (`NF-01`). **Trigger:** any confirmed linkage → KC-1 | `ADR-004`, `ADR-003`, `ADR-005` | Dr. Lena Kowalczyk | Open |
| RISK-07 | **State compulsion** — a government orders disclosure of the member list or a voter's ballot | 3 | 5 | 15 | The data does not exist to disclose: no identity data at rest, no member list anywhere, threshold committee spanning jurisdictions so no single court order reaches 5-of-7; transparency reporting. **Residual risk accepted and disclosed** (Doc 01 §E3) | `ADR-003`, `ADR-009`, `ADR-013`, `ADR-006` | Sofia Marchetti | Open — accepted |
| RISK-08 | **State-level blocking** — the platform is blocked at network or app-store level | 4 | 4 | 16 | ≥ 2 independent access paths verified under blocking simulation (`NF-06`); PWA-first so no single store dependency; IPFS/Arweave mirrors | `ADR-012`, `ADR-009` | Chen Wei | Open |
| RISK-09 | **Ordering/settlement liveness failure** — the sequencer stalls or censors | 3 | 4 | 12 | L1 force-inclusion wired into the SDK as a real fallback transport, not a theoretical property; ≥ 72h voting windows so a 12–24h force-inclusion round trip cannot disenfranchise; degrade-by-delay never denial | `ADR-001`, `ADR-014` | Chen Wei | Open |
| RISK-10 | **Compromise of the proving system or its setup ceremony** — a flaw or compromised setup silently breaks anonymity or forges eligibility | 2 | 5 | 10 | No bespoke constructions; 5–15 independent contributors per circuit from mutually-independent institutions (`ADR-022`; assurance-based — security requires only one honest contributor) with a beacon, published attestations, permanent transcript, and on-chain `zkeyHash` freeze; **two** independent audits; `circomspect`, differential and negative tests; reproducible builds. **Bounded:** the failure mode is forgery, not deanonymisation | `ADR-005`, `ADR-022` | Rafael Duarte | Open |
| RISK-11 | **Key loss at population scale** — citizens lose access and cannot participate | 4 | 4 | 16 | Passkey/enclave keys with no seed phrase to lose; seedless recovery with timelock, notification and cancellation window; ≥ 99% recovery success within 14 days as a launch SLO | `ADR-002` | Amara Diallo | Open |
| RISK-12 | **Oracle manipulation of the population denominator** — thresholds computed against a wrong, stale or manipulated number | 3 | 5 | 15 | ≥ 5 independent sources, **median not mean**; ±5% per-quarter change rate-limit; 7-day dispute window; **verified-resident floor** so deflation gains an attacker nothing; denominator snapshotted at petition creation | `ADR-004` §4 | Yuki Sato | Open |
| RISK-13 | **Reputational and misuse risk** — parties formed for unlawful, violent or extremist purposes are hosted and attributed to us | 4 | 4 | 16 | Member-voted `retracted` flag honoured by conforming clients; opt-in, publicly auditable, jurisdiction-scoped gateway denylist — filtering is **visible, never silent**; never a deletion. **Residual risk accepted** | `ADR-009`, `ADR-013` | Daniel Okonkwo | Open — accepted |
| RISK-14 | **Regulatory reclassification** — a regulator deems the platform an electoral body, a political-finance vehicle, or a controller of political-opinion data | 3 | 5 | 15 | `CON-001` boundary stated on every public surface; the protocol *produces evidence* for a party's statutory filing, a human officer files it under their own name; per-jurisdiction gating; treasury off by default | `ADR-013` | Sofia Marchetti | Open |
| RISK-15 | **Adoption failure** — thresholds are never reached and the platform looks like a graveyard of dead petitions | 4 | 4 | 16 | Field enrolment programme; threshold calibration reviewed against month-3 enrolment (`OI-01`); petition expiry and archiving; read-path performance so browsing is instant. **Trigger:** < 25,000 in the lead pilot at month 6 → KC-3 | `ADR-014` | Grace Mbeki | Open |
| RISK-16 | **Trumocracy itself becomes the gatekeeper** — via code authorship, funding conditions, or an operational lever added under pressure | 3 | 5 | 15 | Immutable core with no proxy, no admin, no pause; registries timelocked at 30 days; funders hold no governance rights; guaranteed party exit tested in CI (`TC-EXIT-*`); `renounceProtocolKeys()` as a Gate-2-equivalent Phase-4 milestone | `ADR-010`, `ADR-007` | Rafael Duarte | Open |
| **RISK-17** | **Ceremony contributor independence insufficient** — contributors for one or more circuits are not sufficiently independent (same institution or coordinated network) | 2 | 4 | 8 | ~~Recruitment opens 2026-11-02, 11 weeks ahead~~ _(corrected 2026-08-21 per ADR-022 / REC-1: the ≥ 500 convention was retired)_. **Revised mitigation:** require institutional diversity — all contributors drawn from mutually-independent institutions (`ADR-022`); 5–15 contributors is the assurance range; independence is the asset, not headcount. **Trigger:** fewer than 5 distinct independent institutions contributing to any circuit | `ADR-005`, `ADR-022` | Rafael Duarte | **Revised — corrected 2026-08-21** |
| **RISK-18** | **Audit capacity slip** — audit firms are not contracted by 2026-10-15, or a finding forces a circuit change and a **re-run ceremony** | 3 | 5 | 15 | Both engagements signed at MS-04 with January starts; audits run in parallel (`A-PLAN-02`); **2 weeks of critical-path contingency** (a re-ceremony for a single circuit now takes days per `ADR-022` — contingency absorbs the re-run overhead and leaves a buffer for audit remediation overshoot). **Budget cover (added 2026-08-21):** the ≈ USD 175K audit-remediation contingency line (ruling 2026-08-21; see §8.3 and RISK-19) now provides explicit budget cover for the re-audit / re-ceremony event — previously the contingency was schedule-only (2 weeks). **Trigger:** either engagement unsigned at 2026-10-15 → escalate to the human approver same week | `ADR-005`, `ADR-022` | Rafael Duarte | **Open** |
| **RISK-19** | **Appetite overrun** — `CON-007` (USD 4.2M / 18 FTE) showed a ~USD 245,000 (~−5.8%) shortfall on the three-pilot basis. **On the accepted L2 basis (B-01, 2026-08-09) the corrected cost is ≈ USD 4,025,000**, within the USD 4.2M appetite with a ≈ USD 175,000 explicit audit-remediation contingency (ruling 2026-08-21). **Residual exposure:** (1) the three-pilot basis remains ~−USD 245,000 in deficit if the pilot-count decision is reversed — reversible up to 2027-02-15; (2) `A-PLAN-01`'s ±10% rate sensitivity (±USD 0.30M) still exceeds the ≈ USD 175K contingency | 4 | 4 | 16 | L2 lever accepted as B-01 (Gate 1 2026-08-09); monthly burn tracked in the WBR against a published plan line; pilot-count lever reversible up to 2027-02-15. The ≈ USD 175K audit-remediation contingency is banked as headroom against audit risk — not removed from the plan (approver ruling 2026-08-21; see §8.3 and RISK-18) | — (plan) | Ana-Maria Petrescu | **Open** |
| **RISK-20** | **MACI Phase-3 complexity underestimated** — circuits, message queue, batched tally and a per-election committee ceremony are, in the architect's own words, "the single largest engineering cost in this design" | 4 | 5 | **20** | Phase-1 ships public-tally governance behind a flag so the governance surface is proven before MACI lands; MACI integration is scheduled **after** audits so it is built against frozen, audited circuits; committee DKG rehearsed on testnet at MS-12; documented last-resort fallback is re-run under a fresh committee, **never** a plaintext tally | `ADR-006` | Aisha Nkemdirim | **Open — new** |
| **RISK-21** | **Role-separation defect** — the Product Owner and the Principal Architect are the same person (Priya Raghunathan signs Doc 02 as PO and `ADR-001`…`ADR-014` as Principal Architect), so the role **Accountable** for direction is also the role **Accountable** for the design that direction is meant to constrain | 5 | 3 | 15 | Raised as governance exception `E-02` for a Gate-1 decision (§13.4); until resolved, `document-review` on Doc 03 MUST be run by a reviewer neutral to **both** hats, and Gate-1 `OI-05` confirmation must be recorded by the PO explicitly *as PO* | — (plan) | Ana-Maria Petrescu | **Open — new** |
| **RISK-22** | **Stolen-credential takeover (Change 7)** — an attacker who obtains a victim's credential (e.g., a stolen document or cloned eID) initiates the nullifier-collision recovery flow (`FR-071`) to seize the victim's party membership and voting rights | 3 | 5 | 15 | `FR-072` seven-day delay + active-key veto; `NFR-016` ≥ 99% legitimate recovery success within 14 days; notification to registered channel at initiation; veto window equal to delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| **RISK-23** | **Veto suppression (Change 7)** — an attacker simultaneously compromises the victim's registered notification channel to suppress the recovery veto notification, preventing the legitimate holder from cancelling before key rotation completes | 2 | 5 | 10 | `FR-072` active-key veto independent of notification channel where feasible; secondary out-of-band notification required; `NFR-016` fraud rate ≤ 0.01%. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| **RISK-24** | **Recovery raced against a live ballot (Change 7)** — an attacker initiates recovery during an active ballot window, briefly holding dual control of an active credential, and attempts to cast a replacement ballot under the original key before rotation completes | 2 | 5 | 10 | `FR-072` voting barred for the recovering credential during the seven-day delay; active-key veto; `FR-032` only the last valid ballot counted; ballot-scope nullifiers prevent double-counting. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| **RISK-25** | **Public-tier disclosure enables targeting and harassment** — workers, candidates, and office-holders whose identities are public may be targeted in the physical world | 3 | 4 | 12 | `FR-084` disclosure schedule limits what is demanded; `FR-063` ballot direction never disclosed; `NFR-024` harassment-rate metric (mechanical, no human discretion); `FR-103` individual conduct votes private | `FR-084`, `FR-063`, `NFR-024` | Daniel Okonkwo | Open |
| **RISK-26** | **Analytics prohibition slows UX iteration and masks funnel failures** — with no per-user telemetry, product teams cannot detect individual drop-off points or run A/B tests | 4 | 2 | 8 | `NFR-019` aggregate-only governance dashboards; `NFR-022` usability studies on consenting panels; TD-08 records the deliberate trade-off | `NFR-019`, `NFR-022` | Yuki Sato | Open |
| **RISK-27** | **Committee soft power — agenda capture despite no formal power** — a steering committee that sets meeting agendas and controls facilitation can steer outcomes without holding decisional power | 3 | 3 | 9 | `FR-090` public proposal authorship with equal standing for competing proposals; `FR-087` public committee composition and minutes; `FR-089` mechanical expiry with no standing renewal path | `FR-090`, `FR-087`, `FR-089` | Tomás Ferreira | Open |
| **RISK-28** | **Conduct and removal votes weaponised for harassment campaigns** — coordinated members flood conduct votes or removal votes against a targeted individual | 3 | 4 | 12 | `FR-104` affirmative quorum with UT-0220 growth-surge defence; statement right mandatory before window closes; `NFR-024` harassment-rate metric; `FR-044`-style cooldowns as governance constants | `FR-104`, `NFR-024` | Daniel Okonkwo | Open |
| **RISK-29** | **Non-violence clause drags the platform toward content judgment** — enforcing one mandatory political value creates pressure to enforce others | 2 | 4 | 8 | Code enforces presence-check only (`FR-077`); enforcement beyond presence belongs to members and law; `FR-056` jurisdiction-scoped display filtering boundary unchanged; TD-10 records the accepted tension | `FR-077`, `FR-056` | Sofia Marchetti | Open |
| **RISK-30** | **Trust-anchor governance latency** — member-vote revocation is slower than an operator kill-switch; a compromised anchor can mint Sybils during the emergency-variant timelock | 2 | 5 | 10 | `FR-112` expedited emergency variant with published (shortened but non-zero) duration; `FR-004` attestor concentration cap limits Sybil yield per compromised anchor; `NFR-004` quarterly audit; residual accepted — cites SC-13/SC-14 from `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`. _(ADR-020 §4: epoch cap bounds blast radius.)_ | `FR-112`, `ADR-020` | Rafael Duarte | Open — accepted |

| **RISK-31** | **Operator-trust concentration in the v1 conventional database** — v1 stores member↔party mapping, vote direction, and ballot data in a conventional database; a database administrator or any sufficiently privileged operator can see individual member affiliations and votes at the application layer. In ZK designs (Definition B), this data does not exist to query; in v1 it does. | 4 | 4 | 16 | `FR-131` requires a non-dismissable honesty notice at every vote-cast surface stating the DB can see vote direction and membership; `H-01`/`H-02` honesty-register items are required in the public README. Organisational access controls (least privilege on DB credentials). The `IBallotService`/`IEligibilityVerifier` seams (`ADR-024`) ensure v2 removes this data from the DB path without a rewrite. **Trigger:** any confirmed DB-level access to vote or membership data by an unauthorised party → stop-the-line escalation | `ADR-024`, `DES-095`, `DES-096`, `FR-131` | Rafael Duarte | **Open — new (v1)** |
| **RISK-32** | **Credential / auth-path compromise in v1** — v1 uses conventional authentication (password, passkey, or OAuth) rather than ZK nullifiers; a credential-stuffing attack, auth-path compromise, or session-fixation vulnerability could allow fake votes or impersonation that ZK nullifiers structurally prevent in Definition B | 3 | 5 | 15 | OWASP auth hardening (rate limiting, MFA option, session expiry, PKCE for OAuth); the PR-1 lightweight security review / pen test covers the auth path specifically; `NFR-016` secure coding standard applied throughout. **Trigger:** any confirmed auth-path compromise → immediate flag kill on the affected ballot surface and incident escalation | `ADR-024`, `DES-095`, `NFR-016` | Rafael Duarte | **Open — new (v1)** |
| **RISK-33** | **v1 mistaken for the guarantee product** — v1 lacks ZK anonymity, receipt-freeness, and coercion-resistance; if press, partners, or users describe v1 as providing these guarantees, trust in the political process and the brand is damaged, and the platform may attract use-cases it cannot safely serve | 4 | 4 | 16 | `FR-131` (Must): non-dismissable plain-language honesty notice at every vote-cast surface, stating "NOT anonymous, NOT receipt-free, NOT coercion-resistant"; MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting in any product material. `H-01`..`H-06` honesty register in the public README (PR-7). All partner onboarding materials must repeat the disclosure. PR-6 release checklist verifies no false claims in shipped materials. **Trigger:** any confirmed false representation of v1 as providing ZK guarantees → immediate public correction and PR-6 re-audit | `FR-131`, `DES-098`, Doc 02 §16.4 H-01..H-06 | Nadia Hassan | **Open — new (v1)** |
| **RISK-34** | **v1 conventional code ossifying against the v2 swap** — if the engineer builds v1 auth/ballot logic directly into components, bypassing the `IEligibilityVerifier` and `IBallotService` seam interfaces (`DES-095`/`DES-096`), v2 ceases to be an implementation swap and becomes a rewrite; the approver's reuse guardrail is violated and the v2 programme cost and risk increase materially | 3 | 5 | 15 | `ADR-024` mandates the seam interfaces as the stable contracts; no auth or ballot logic may bypass them. CI coverage of the interface contracts (integration tests verifying that only the seam interface is called, never the concrete implementation directly). MS-V1-01 commit of the interface definitions before any v1 implementation code is merged. **Trigger:** any pull request adding auth or ballot logic that calls a concrete implementation class directly (bypassing the seam interface) is a merge blocker — reviewer-qa must catch this at code review | `ADR-024`, `DES-095`, `DES-096` | Samuel Oyelaran | **Open — new (v1)** |

**Top 5 by exposure:** `RISK-01`, `RISK-02`, `RISK-04`, `RISK-06`, `RISK-20` (all at 20). Four of the
five are adversarial-integrity risks and one is delivery. Every one of them has at least one
mitigation that is **verified at Gate 2 by evidence, not by assertion** (§3.3).

**v1-specific risks (RISK-31..RISK-34):** added 2026-08-23 per the v1/v2 delivery split directive.
Top v1 risks by exposure: RISK-31 and RISK-33 (16 each — operator trust and mistaken-guarantee
risks); RISK-32 and RISK-34 (15 each — auth compromise and seam ossification). All four are
mitigated by a combination of disclosure (`FR-131`, H-register), the seam architecture (`ADR-024`),
and the PR-1 lightweight security review.

---

## 7. Roles & decision rights (RACI) — **canonical for the suite**

> Mirrors CLAUDE.md exactly. One **A** and one **R** per decision. **This is the canonical RACI**;
> other documents reference it and none redefine it. Names are those recorded in Doc 02 §2.7; three
> roles (PM, Eng Lead, Test Lead) are unnamed in Doc 02 and are named here for the first time.

### 7.1 Role holders

| VEKTOR role | Named individual | Source |
|---|---|---|
| **product-owner** (PO) | **Priya Raghunathan** — Product Owner | Doc 02 §2.7, §15 |
| **project-manager** (PM) | **Ana-Maria Petrescu** — Project Manager | *named here* (Doc 02 §15 records "pending") |
| **architect** (Arch) | **Priya Raghunathan** — Principal Architect | `ADR-001`…`ADR-014` signature blocks — **⚠ dual-hat, see `E-02` / `RISK-21`** |
| **engineer** (Eng) | **Samuel Oyelaran** — Engineering Lead | *named here* |
| **tester** (Test) | **Ji-woo Park** — Test Lead | *named here* |
| **reviewer-qa** (QA) | **Rafael Duarte** — Head of Security | Doc 02 §2.7 |
| **technical-writer** (TW) | **Nadia Hassan** — Accessibility & Localisation Lead | Doc 02 §2.7 (`NFR-023` plain-language owner) |
| **sre** | **Chen Wei** — Reliability Lead | Doc 02 §2.7 |

### 7.2 Decision rights

| Decision | PO | PM | Arch | Eng | Test | QA | SRE | TW |
|----------|----|----|------|-----|------|----|-----|----|
| Approve **Gate 1** (direction) — *decided by the **human approver***, PO Accountable | **A** | **R** | C | C | I | C | I | I |
| Backlog (`EP`/`FE`/`US`) | **A/R** | C | C | C | C | I | I | I |
| Architecture / `ADR` | C | I | **A** | C | C | I | C | I |
| Merge to trunk | I | I | I | **R** | C | **A** | I | I |
| RTM complete (zero gaps) | I | C | I | C | **R** | **A** | I | I |
| Approve **Gate 2** (launch) — *decided by the **human approver***, PO Accountable | **A** | **R** | I | C | C | C | C | C |
| Staged rollout | C | **R** | I | C | I | I | **A** | I |
| Flag kill / rollback | I | C | I | C | I | I | **A** | I |
| Status reporting (DAILY / WBR) | I | **A/R** | I | I | I | I | I | I |
| Document review (≥ 95%, no C/H/M) | C | **A/R** | C | C | C | C | I | C |
| User Guide published (Doc 14) | C | I | I | I | I | C | C | **A/R** |

**Two invariants, stated so they cannot be quietly eroded:**

1. **The project-manager cannot approve a gate.** The PM is **R** — assembles the packet, verifies
   preconditions, presents it, and stops. The **human approver** decides; the PO is **A**.
2. **The engineer is the only role that writes product code, and never merges its own work.**
   reviewer-qa signs the merge. The tester writes Docs 07/08 and test artifacts only. reviewer-qa
   writes no product code at all.

---

## 8. Appetite, timeline & cadence

### 8.1 Appetite per wave

`CON-007` fixes **USD 4.2M** and a team of **18**. Scope, not date, absorbs overrun — except where
the overrun is on an externally paced critical-path item, where neither scope nor effort helps and
only the **date or the pilot count** can move (§3.4).

| Wave | Phase | Appetite (time-box) | Detail level | Re-plan trigger |
|------|-------|---------------------|--------------|-----------------|
| **Now** | Phase 0 → Phase 1 | **14 weeks** (2026-08-24 → 2026-11-27) | Detailed | Gate 1 decision; MS-05 |
| **Next** | Phase 2 | **21 weeks** (2026-12-14 → 2027-04-19, overlapping from 2026-10-05) | Coarse — sharpened at MS-05 | MS-06 circuit freeze; any audit finding above medium |
| **Later** | Phase 3 | **12 weeks** (2027-04-19 → 2027-07-09) | Headline only | Gate 2; each rollout stage gate |
| **Beyond** | Phase 4 | Not appetited in this plan | Headline only | MS-15 entry review with 12 weeks of production evidence |

### 8.2 Cadence (deliberately light)

| Ceremony | Frequency | Who | Output |
|---|---|---|---|
| Trunk flow | Continuous | Eng | Small reversible commits behind flags (`ADR-011`); Conventional Commits citing `US-####` |
| **WBR status report** | **Weekly (Mon)** | PM | `artifacts/status/STATUS-WBR-<YYYY-Www>.md` — Page Zero, BLUF, variance-based, every figure cited to its source artifact |
| Daily status | **On demand only** | PM | `artifacts/status/STATUS-DAILY-<YYYY-MM-DD>.md` |
| Backlog refinement | Fortnightly | PO + Eng + Test | Ready stories per the Definition of Ready |
| Wave review + demo | At each milestone (§3.2) | All | Working software on testnet, never slideware |
| Risk register review | **Weekly**, in the WBR | PM | §6 updated; a realized risk re-plans the wave |
| `document-review` loop | On every major document version + the code drop | PM assigns a **neutral** role | Scored report in `artifacts/reviews/`; ≥ 95% and zero C/H/M to pass; cap 5 cycles then ESCALATE |
| Retro → refine loop | At each gate and monthly in Operate | SRE → PO | `docs/refine-log.md` `REF-##` entries; PO promotes to `BR`/`FR` |
| Agent-improvement cadence | Monthly / at each gate retro | PM invokes `meta-reviewer` | **Drafted** proposals presented to the human — the PM cannot adopt them |

### 8.3 Capacity, resourcing & budget (`CON-007`)

**Track throughput and WIP, not utilization.** WIP limit: **one workstream per named owner** in the
Now wave.

**Team of 18.** Doc 02 §2.7 names 15 people; three delivery roles were unnamed and are named in §7.1.
15 + 3 = **18**, which is exactly the `CON-007` cap — and that is the finding: the 18 includes the
full product, privacy, legal, accessibility, security, data and community leadership. Several are
fractional on delivery.

| # | Person | Role | FTE | Hands-on build? |
|---|--------|------|-----|-----------------|
| 1 | Priya Raghunathan | Product Owner **+ Principal Architect** (⚠ `E-02`) | 1.0 | Design only |
| 2 | Ana-Maria Petrescu | Project Manager | 1.0 | No |
| 3 | Samuel Oyelaran | Engineering Lead — contracts/protocol | 1.0 | **Yes** |
| 4 | Ji-woo Park | Test Lead — Docs 07/08, suites | 1.0 | Tests only |
| 5 | Rafael Duarte | Head of Security · reviewer-qa · audit owner | 1.0 | No |
| 6 | Chen Wei | Reliability Lead · sre · WS-12 | 1.0 | **Yes** (infra/services) |
| 7 | Marcus Adeyemi | Identity & Personhood — WS-01, `DEP-03`/`DEP-04` | 1.0 | **Yes** (partial) |
| 8 | Aisha Nkemdirim | Elections & Voting — WS-06/07, MACI | 1.0 | **Yes** (partial) |
| 9 | Dr. Lena Kowalczyk | Privacy Lead — circuits, `NF-01` | 1.0 | **Yes** (circuits) |
| 10 | Tomás Ferreira | Party Formation & Governance — WS-02/03/05 | 1.0 | **Yes** (partial) |
| 11 | Erik Lindqvist | Transparency & Treasury — WS-08/09 | 1.0 | **Yes** (partial) |
| 12 | Hiroshi Tanaka | Platform Economics & Access — WS-10, paymaster | 1.0 | **Yes** (partial) |
| 13 | Nadia Hassan | Accessibility, Localisation **+ technical-writer** (Doc 14) | 1.0 | Client/a11y |
| 14 | Grace Mbeki | Community & Field Operations — enrolment programme | 1.0 | No |
| 15 | Amara Diallo | Support & Account Recovery — WS-10 recovery | 1.0 | Partial |
| 16 | Yuki Sato | Data & Measurement — denominator oracle, `NF-08` | 1.0 | Partial |
| 17 | Sofia Marchetti | Legal & Regulatory — WS-13, `DEP-06` | 1.0 | No |
| 18 | Daniel Okonkwo | Trust & Safety — moderation boundary, abuse metrics | 1.0 | No |

**Effective hands-on engineering capacity: ~9.0 FTE.** The workload implied by
`ADR-001`…`ADR-014` — an immutable Solidity core, six Circom circuits, a MACI integration, a
TypeScript SDK with 4337 + force-inclusion, an accessible offline-capable PWA in 8 locales, an
indexer, a relayer/paymaster, and a standalone verifier — is realistically **13–14 engineer-FTE**.
This is a **~4.5 FTE structural gap**, and it is the reason the feature float in §3.4 is only three
weeks. It is stated here rather than absorbed into optimism.

**Budget against USD 4.2M** (Gate 1 2026-08-22 → Gate 2 2027-05-14 ≈ **10 months**; blended rate per
`A-PLAN-01`):

| Line | Basis | USD |
|---|---|---:|
| Personnel | 18 FTE × 10 months × USD 16,500 | 2,970,000 |
| Two independent audits (protocol + circuits) incl. remediation re-review | `NFR-009`, `CON-012`, `DEP-01` | 550,000 |
| Ceremony programme — 6 circuits, batched per-circuit phase-2s; 5–15 contributors each; beacons and permanent transcript archival (corrected per `ADR-022`: PPoT phase-1 reuse at ~$0; contributor outreach programme retired; logistics cost drops to **near-zero** — formal re-estimate not yet produced) | `ADR-005`, `ADR-022`, `ADR-009` | **~15,000** |
| Per-jurisdiction legal review × 3 pilots + external counsel | `CON-005`, `NFR-015`, `DEP-06` | 210,000 |
| Infrastructure: L2 gas sponsorship pool (90-day p95 buffer), blobs/DA, IPFS pinning + Arweave permanence | `ADR-001`, `ADR-009`, `DEP-10` | 180,000 |
| Field enrolment programme + issuer/attester onboarding across 3 pilots | `DEP-03`, `DEP-04`, `RISK-15` | 240,000 |
| Localisation (8 locales incl. RTL) + independent accessibility audit | `NFR-011`, `NFR-013` | 130,000 |
| Adversarial privacy audit + red-team (`NF-01`, `NF-03`), separate from the two audits | `BR-012` | 90,000 |
| Load, censorship and operator-censorship simulation infrastructure (`NF-06`) | `NFR-008`, `NFR-014`, `NFR-025` | 60,000 |
| **Total** | | **~4,445,000** _(ceremony line corrected; all other lines unchanged)_ |
| **Appetite (`CON-007`)** | | **4,200,000** |
| **Variance** | | **~−245,000 (~−5.8%), and zero contingency** _(improved from −350k by ceremony logistics correction; remains in deficit)_ |

**The single-pilot lever.** Launching Phase 3 in **one** pilot jurisdiction and rolling the other two
post-launch saves ≈ **USD 420,000** (two legal reviews deferred −140k, field programme −160k, five of
eight locales deferred −80k, issuer/attester onboarding −40k), landing at ≈ **USD 4,025,000** _(corrected
2026-08-21: the prior figure "≈ USD 4.13M with ~1.7% contingency" was computed off the pre-correction
three-pilot total of USD 4,550,000; the ADR-022/REC-1 ceremony saving of USD 105,000 was not cascaded
when the total was corrected to USD 4,445,000 — same defect class as ISS-01..ISS-04 in the v2.0.0
cycle-1 review)_. It buys **no time** — the critical path is cryptographic, not jurisdictional. This is
the plan's recommended lever; it was **accepted as B-01 by the Gate-1 approver on 2026-08-09** (see §13.3
and `GATE1-DECISION-2026-08-09.md §5`).

**Audit-remediation contingency — ≈ USD 175,000** (appetite held at USD 4.2M; approver ruling
2026-08-21). On the accepted L2 basis the corrected cost is ≈ USD 4,025,000 against the unchanged
USD 4.2M appetite, leaving ≈ USD 175,000 of headroom. Per the approver's ruling, this difference is
held as an **explicit named contingency line** against audit risk — not removed from the plan. The
approver's recorded rationale: _the re-plan itself flags the contingency as under-provisioned; this
project's defect-discovery rate (eleven critical/high found in own work, a critical caught after a 98%
review) makes an audit finding requiring a re-audit a live scenario; a re-audit is the specific
unbudgeted event; the saving is banked as headroom against that risk, not removed from the plan._
Cross-references: `RISK-18` (audit capacity slip; re-ceremony event — budget cover now added);
`RISK-19` (appetite overrun — L2 basis now within appetite; residual exposures stated).

**Discrepancy to surface:** the approver's cited figures (~$3.836M and ~$294K) match no artifact in
the repository. Record-derived figures (≈ USD 4,025,000 / ≈ USD 175,000 contingency) are applied
here. Approver confirmation of magnitude is pending — see
`DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3`.

---

## 9. Rollout & rollback plan (high level)

> The release-level view. Executable detail lives in the Deployment Runbook (Doc 10), owned by the sre.

- **Rollout shape.** Phase 3 only, in the lead pilot jurisdiction first: **1% → 10% → 50% → 100%**,
  each stage metric-gated on `NFR-005` (median cost), `NFR-006` (p95 latency), `NFR-007`
  (availability), recovery success rate, and **zero** privacy findings. Minimum 5 days at each stage.
  The remaining pilots follow only after the lead pilot holds 100% for 4 weeks.
- **Ship dark.** Everything incomplete ships behind a flag registered in `packages/protocol/flags.ts`
  **and** in the on-chain `FeatureFlags` registry — because "ship dark" must apply on-chain too, or
  the flag strategy stops at the frontend and the risky part ships un-flagged (`ADR-011`).
  Phase-1 flag posture: elections OFF · recall OFF · treasury OFF · fork OFF · MACI OFF.
- **Rollback posture.** *Rollback first, diagnose after.* Any release reversible in **< 15 minutes**
  (`NFR-020`), drilled and evidenced before Gate 2 (`NF-07`). Flags are independently kill-switchable.
  **A flag governing an open ballot's rules cannot be changed while that ballot is open** — enforced,
  not policy.
- **What rollback cannot undo, stated honestly.** The core is immutable: no proxy, no admin, **no
  pause button** (`ADR-010`). Rollback reverses *our deployment*, never a party's governance outcome.
  Emergency response to a core defect is **migration** — deploy a new core version and parties vote
  to migrate — which is slower, louder, and impossible to do quietly. That is the design intent.
  Every party's migration path is rehearsed on testnet before mainnet, so it is a drilled operation
  rather than a crisis improvisation.
- **Guaranteed exit.** Any party can export its full verifiable state and reconstitute it elsewhere
  with **no permission from anyone** (`NFR-018`), tested in CI as `TC-EXIT-*` — because an exit path
  that has never been executed is not an exit path.
- **Owner on call for every rollout window:** **Chen Wei** (sre). Flag kill / rollback: sre is **A**.

---

## 10. Communications & stakeholders

| Stakeholder | Interest | Cadence | Channel |
|-------------|----------|---------|---------|
| **Human approver (gates)** | Go/no-go at MS-01 and MS-13; the five `OI` decisions; the appetite variance | At each gate + on any kill-criterion trigger | Gate-readiness packet (§13) |
| Product Owner — Priya Raghunathan | Scope, metrics, `OI` closure, refine-log promotion | Weekly WBR + wave review | `artifacts/status/STATUS-WBR-*` |
| Delivery team (18) | Wave plan, WIP, blockers | Weekly WBR; wave review at each milestone | Repo + WBR |
| Funders / grantors | Burn vs the USD 4.2M appetite; no governance strings (`A-05`) | Monthly | WBR extract; published funding record (`ADR-007`) |
| Audit firms (2) | Scope, freeze dates, remediation windows | Fortnightly from MS-04 | Engagement channel |
| Ceremony contributors (5–15 per circuit, institutional) | Contribution instructions, attestation process, transcript verification | From 2027-01-04 (two weeks before campaign start), then as needed through MS-08 | Ceremony coordinator + public transcript page |
| Identity issuers & residency attesters | Onboarding, 30-day timelock windows, concentration caps | Monthly from Gate 1 | Partner channel; public per-issuer statistics |
| MACI committee operators (7) | Selection, DKG rehearsal, liveness attestations | Weekly from MS-11 | Committee channel |
| Pilot-jurisdiction counsel | Per-jurisdiction review status, feature gating | Monthly | Legal channel |
| Citizens / press / independent auditors | Verifiable record, published metrics, transparency reports | Continuous (public) | Public dashboard (`NF-08`), verifier, `docs/14-user-guide.md` |

---

## 11. Re-plan log (what production taught us)

| Date | Wave | What changed | Why (signal from gate / production) | By |
|------|------|--------------|-------------------------------------|----|
| 2026-08-23 | Delivery split | **v2.2.0 — ISS-H1/M1/M2/L1/L2 rework.** Cycle-1 business-mode document review (`artifacts/reviews/13-project-plan-v2.1.0-business-cycle1.md`): FAIL 84%, 0C/1H/2M/2L. Five surgical fixes applied: **ISS-H1** — RISK-22..RISK-30 recovered from Doc 02 §10 and inserted in §6 in ordinal position (were absent at v2.1.0 — register jumped RISK-21 → RISK-31); §6 header note updated to document provenance. **ISS-M1** — v1 Must-set arithmetic corrected in §3.5.1 and PR-10: the claim "106 IN-v1 + 19 PARTIAL + FR-131 = 112" was arithmetically impossible (126, not 112); correct derivation: 112 total Must (SRS v2.7.0 §11) minus 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = **108**. **ISS-M2** — MS-V1-09 (§3.5.2) and PR-7 (§3.5.4) honesty-register citation updated H-01..H-06 → H-01..H-14 (Doc 02 v2.7.0 §16.4 expanded register). **ISS-L1** — Header Source and §2.1 SRS pin updated v2.6.0 → v2.7.0 (Approved). **ISS-L2** — §13.1 document-review row updated: Doc 02 v2.7.0 Approved c2 PASS 98%; Doc 13 v2.1.0 FAIL c1 recorded; v2.2.0 pending c2. No other changes. | `artifacts/reviews/13-project-plan-v2.1.0-business-cycle1.md` (FAIL cycle-1, 0C/1H/2M/2L); Doc 02 v2.7.0 (Approved, c2 PASS 98%) | Ana-Maria Petrescu |
| 2026-08-23 | Delivery split | **v2.1.0 — v1/v2 delivery split.** Approver directive (Rathish, 2026-08-23): delivery splits into Definition A (v1 — conventional-auth transparent party platform, voting works, ZK deferred) and Definition B (v2 — same platform plus ZK/MACI guarantee layer, implementation swap via ADR-024 seams). Applied: header bumped 2.0.3 → 2.1.0; source list extended (SRS v2.6.0, ADR-024, DECISIONS-2026-08-23-V1-V2-SPLIT.md); §2.1 Must count corrected (110 → 112, SRS v2.6.0 §11/§16); §3.1 supersession annotation added (the "Why Phase 3 is the launch" argument now applies to Definition B only; Definition A launches with conventional-auth voting under FR-131 disclosure); §3.3 v1-gate annotation added (Definition A uses §3.5 bar, not the §3.3 12-item list); §3.5 v1 delivery plan added (MS-V1-01..MS-V1-09 build-order stages, 5–9 month reasoning-from-record effort range, production-readiness bar PR-1..PR-10, v2 re-entry disposition); §6 RISK-31..RISK-34 added (v1-specific risks: operator-trust concentration, auth-path compromise, v1 mistaken for guarantee product, seam ossification); §11 this entry prepended. Key items AWAITING APPROVER CONFIRMATION: v1 stack recommendation (DES-097), 16 contradiction-surface items + T-01..T-05, re-scoped Gate-2 (v1 gate date NOT SET; 2027-05-14 attaches to Definition B), NFR-009 v1 re-reading. Gate-2 date 2027-05-14: UNCHANGED. | Decision record `DECISIONS-2026-08-23-V1-V2-SPLIT.md`; Doc 03 v2.3.1 (Approved — ADR-024, DES-095..DES-098, §10.13 v1/v2 architecture, T-01..T-05); Doc 02 v2.6.0 (In Review — §16, FR-131, CON-007 correction); `artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md` (FAIL c1, ISS-01 resolved by DECISIONS-2026-08-23-V1-V2-SPLIT.md) | Ana-Maria Petrescu |
| 2026-08-21 | Next (P2) | **v2.0.3 — budget-appetite ruling + stale-L2 cascade correction.** Approver ruling (Rathish, 2026-08-21): appetite held at USD 4.2M (not reduced); ≈ USD 175K headroom on the accepted L2 basis held as an explicit audit-remediation contingency — not removed from the plan. Cascade correction applied: "≈ USD 4.13M with ~1.7% contingency" in §8.3 and §13.3 L2 row was computed off the pre-correction 4.55M total; corrected to ≈ USD 4,025,000 / ≈ USD 175K contingency. RISK-18 updated: explicit budget cover added for re-audit/re-ceremony event (previously schedule-only). RISK-19 updated: on accepted L2 basis now within appetite; residual exposures (pilot-count reversal; A-PLAN-01 rate sensitivity) stated. Ruling 2 (RISK-014 contradiction): HELD — no referent in repository (`RISK-014` nonexistent; `RISK-14` is regulatory reclassification; ADR-006 decides 5-of-7 with rationale and all downstream citations consistent; no undecided language anywhere). No dates changed. No other substantive changes. **Discrepancy:** approver's cited ~$3.836M and ~$294K match no artifact — record-derived figures applied; magnitude confirmation pending from approver. | Decision record `DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md`; `GATE1-DECISION-2026-08-09.md §5` (B-01); ADR-022 (ceremony-correction basis for cascade recalculation) | Ana-Maria Petrescu |
| 2026-08-21 | Next (P2) | **v2.0.2 — banner correction.** Cycle-2 review (`artifacts/reviews/13-project-plan-v2.0.1-business-cycle2.md`): FAIL 96%, 0C/0H/1M/0L. One fix: "Read this first" banner "~USD 0.35M shortfall" → "~USD 245,000 (~−5.8%) shortfall" — last remaining pre-correction figure. | `artifacts/reviews/13-project-plan-v2.0.1-business-cycle2.md` (FAIL cycle-2) | Ana-Maria Petrescu |
| 2026-08-21 | Next (P2) | **v2.0.1 — business review rework.** Cycle-1 document review (`artifacts/reviews/13-project-plan-v2.0.0-business-cycle1.md`): FAIL 84%, 0C/0H/4M/0L. Root cause: §8.3 ceremony-budget correction (~USD 120k → ~USD 15k) not cascaded to three downstream references. Four surgical fixes: ISS-01 — KC-P2 trigger restated in ADR-022 assurance terms (non-vacuous); ISS-02 — RISK-19 shortfall "~USD 0.35M" → "~USD 245,000 (~−5.8%)"; ISS-03 — §13.1 resourcing row corrected to same figure; ISS-04 — §13.3 L1 lever "−USD 0.35M" → "~−USD 245,000 (~−5.8%)". No other changes. | `artifacts/reviews/13-project-plan-v2.0.0-business-cycle1.md` (FAIL cycle-1) | Ana-Maria Petrescu |
| 2026-08-21 | Next (P2) | **v2.0.0 re-plan.** (1) Cryptography path corrected per ADR-022 / REC-1/REC-2: six-ceremony-at-≥500 critical-path assumption retired; corrected to one batched phase-2 campaign, six transcripts, 5–15 independent contributors per circuit, days not weeks. MS-08 date: 2027-03-05 → 2027-01-25 (ceremonies now off the critical path; audits govern). MS-07 revised: large-scale pledge campaign retired. Gate-2 date unchanged — 2027-05-14 — audits were already the binding constraint. (2) Scope re-baselined: SRS v2.4.0, 110 Must requirements (FR-001…FR-129), up from 42 Must FRs at Gate 1. (3) Budget: ceremony logistics line drops from USD 120,000 to ~USD 15,000 (near-zero; PPoT phase-1 at ~$0; outreach programme retired). Total ~USD 4,445,000; variance ~−USD 245,000 (~−5.8%), zero contingency. (4) Gate-2 line items added: CON-015 legal opinion (NOT STARTED), Doc 04 review debt, FR-121…129 RTM catch-up. (5) ADR-022 and DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md added to sources. RISK-17 revised (L4/I4 → L2/I4). DEP-02 corrected. WS-11, MS-04 updated. | ADR-022 (Accepted 2026-08-21); DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md (REC-1, REC-2; Rathish 2026-08-21); Doc 02 v2.4.0; Doc 08 v2.1.0 | Ana-Maria Petrescu |
| 2026-08-09 | Now | Plan created at v1.0.0. Four phases derived from `ADR-001`…`ADR-014`; Gate 2 re-based from 2027-02-15 to **2027-05-14**; `RISK-17`…`RISK-21` opened; governance exceptions `E-01`/`E-02` raised | Doc 02 + Doc 05 at v1.0.0; 14 ADRs Accepted; cryptography critical path costed against `CON-007` for the first time | Ana-Maria Petrescu |
| _(next entry at Gate 2)_ | | | | |

---

## 12. Approvals

Sign-off is at the **gates** (MS-01 / MS-13), not on every plan revision.

| Gate | Role | Name | Decision | Date |
|------|------|------|----------|------|
| Gate 1 | Product Owner (**A**) | Priya Raghunathan | _pending_ | |
| Gate 1 | Project Manager (**R**) | Ana-Maria Petrescu | Packet assembled, presented — **PM does not approve** | 2026-08-09 |
| Gate 1 | Architect (**C**) | Priya Raghunathan (⚠ `E-02`) | _pending_ | |
| Gate 1 | Engineering (**C**) | Samuel Oyelaran | _pending_ | |
| Gate 1 | reviewer-qa (**C**) | Rafael Duarte | _pending_ | |
| **Gate 1** | **Human approver** | _pending_ | **Approve / Rework / Reject** — must record `OI-01`…`OI-05`, `E-01`, `E-02`, and the appetite variance | |
| Gate 2 | Product Owner (**A**) | Priya Raghunathan | _pending_ | |
| Gate 2 | Project Manager (**R**) | Ana-Maria Petrescu | _pending_ | |
| **Gate 2** | **Human approver** | _pending_ | **Approve / Rework / Reject** — against the ten items in §3.3 | |

---

## 13. Gate-1 readiness packet

> Assembled by the project-manager for the **human approver**. The PM is **R**; the PO is **A**;
> **the PM does not approve this gate.**

### 13.1 What is ready, and what is not

| Gate-1 precondition | Status | Evidence |
|---|---|---|
| PR-FAQ complete — headline, problem, solution, FAQ, hard questions | ✅ Ready | `docs/01-press-release-prfaq.md` v1.0.0 |
| Measurable success metrics with baseline / target / guardrail | ✅ Ready | Doc 01 §C — 11 metrics, mirrored in §1 above |
| Explicit out-of-scope | ✅ Ready | Doc 01 §D — 10 non-goals; §2.2 above |
| Kill criteria | ✅ Ready | Doc 01 §E2 — 7 criteria; operationalised in §14 below |
| Every `BR`/`FR`/`NFR` indexed, never reused | ✅ Ready | Doc 02 §3/§4/§6 — 12 / 61 / 26 |
| MoSCoW prioritization applied | ✅ Ready | Doc 02 §11 — 42 Must / 16 Should / 3 Could |
| **Named individual owner on every requirement** | ✅ Ready | Doc 02 §3/§4/§6/§10 — 15 named people, no team names |
| Gherkin acceptance criteria on every Must requirement | ✅ Ready | Doc 02 §8 |
| Every `FR`/`NFR` traces up to a `BR` | ✅ Ready | Doc 02 `Traces to` column, 100% |
| Constraints, risks and trade-offs registered | ✅ Ready | Doc 02 §9 (12 `CON`, 6 `TD`), §10 (16 `RISK`) → carried to §6 above |
| Backlog seeded `EP` ▸ `FE` ▸ `US` with Gherkin, owner and `FR` trace | ✅ Ready | `docs/05-product-backlog.md` v1.0.0 — 10 / 28 / 70 |
| **Project plan with milestones, risk register of record, RACI, rollout/rollback** | ✅ Ready | **This document, v1.0.0** |
| Named owner per workstream | ✅ Ready | §4 — 13 workstreams, all owned |
| Resourcing costed against `CON-007` | ⚠ Ready **with a variance** | §8.3 — ~−USD 245,000 (~−5.8%), zero contingency (`RISK-19`) |
| Gate-2 date achievable as stated in `CON-007` | ❌ **Not achievable** | §3.4 — evidence-based Gate 2 is 2027-05-14, +13 weeks |
| **Passing `document-review` reports for Docs 01, 02, 05, 13** | ⚠ **Partially cleared** | **Doc 02 v2.7.0: ✅ PASS 98%** — business mode, cycle 2 (`artifacts/reviews/02-requirements-srs-v2.7.0-business-cycle2.md`; Approved 2026-08-23). **Doc 13 v2.1.0: ❌ FAIL 84%** — business mode, cycle 1 (`artifacts/reviews/13-project-plan-v2.1.0-business-cycle1.md`); 0C/1H/2M/2L — five issues; v2.2.0 rework applied 2026-08-23, pending cycle 2. _(Prior Doc 13 pass: v2.0.3 ✅ PASS 97%, cycle 1.)_ Docs 01, 05: ❌ passing business-mode review reports not yet produced. **Gate 1 cannot be presented until Docs 01, 02 and 05 are also reviewed and passed.** |
| Four declared non-Must backlog coverage gaps closed | ⚠ Declared, not closed | Doc 05 §12 — `FR-005`, `FR-049`, `FR-050`, `FR-052`, `FR-053`. Non-blocking; owned by the PO |

### 13.2 The five open items requiring a Gate-1 decision

Each requires **one recorded decision** from the human approver. The gate does not clear on
discussion.

| ID | Open item | Owner | What the approver must decide | Plan impact if deferred |
|----|-----------|-------|-------------------------------|-------------------------|
| **OI-01** | **Threshold calibration method.** The whole product hinges on the activation percentage and it is not set. Too high and no party ever activates (KC-4); too low and the network fills with noise. It must also survive denominator error (`RISK-12`). Proposal: a jurisdiction-specific range calibrated against month-3 enrolment, fixed publicly before any petition opens. **The decision is the *method*, not the number.** | Tomás Ferreira | Approve the calibration method, or name an alternative | Blocks WS-03 design; blocks `ADR-004` §4 confirmation; **blocks MS-02** |
| **OI-02** | **Must-set size / recall deferral.** Accept the 42-FR Must set (20 walking-skeleton + 22 guardrail), or defer recall (`FR-042`/`FR-043`/`FR-045`) to v1.1. Guardrails are **not** offered for deferral — deferring one produces a worse product, not a smaller one | Priya Raghunathan | Accept 42, or defer recall | Deferring recall frees ≈ 3 weeks and ≈ USD 0.10M — but on the **feature** path, **not** the critical path (§3.4). It does not move Gate 2 |
| **OI-03** | **Enrolment exclusion rate + the non-document attestation path.** `TD-05`: the people most likely to fail a document check are the people the product exists to serve. Needs an acceptable exclusion-rate target and a named non-document path per pilot | Marcus Adeyemi | Set the target rate; approve the non-document path(s) | Blocks `DEP-03`; blocks the civic-notary/peer-attestation tier design; blocks the field enrolment budget line |
| **OI-04** | **Which pilot jurisdictions.** Selection gates `CON-005`, `A-01`, `A-02`, `A-03` and the entire legal posture. No requirement can be finally validated until they are named | Sofia Marchetti | Name the jurisdictions — **and decide 3 vs 1 at launch** (§8.3 single-pilot lever) | Blocks `DEP-03`…`DEP-06`; legal review needs **8 weeks** from 2027-02-15, so a decision after **2026-12-11** puts `DEP-06` on the critical path |
| **OI-05** | **`NFR-002` k ≥ 1,000 anonymity floor vs `BR-004` ward-level representation.** A ward of 3,000 residents cannot produce a 1,000-strong anonymity set for a niche action, yet ward-level representation is objective 4. A direct conflict between `BR-004` and `BR-009` | Dr. Lena Kowalczyk | **Confirm or reject the architect's answer** (below) | If rejected, `ADR-004` and WS-01/WS-07 re-open; **blocks MS-02** |

**`OI-05` — the architect has already answered it. Recorded here for product confirmation.**

`ADR-004` §2 resolves the conflict in design: the `k ≥ 1000` floor is enforced as a **checked
precondition** before a region's credential tree may be used for any published action, and where a
region cannot meet it, the action's **anonymity scope escalates to the nearest ancestor region that
does** (a ward action falls back to its district, and so on up the hierarchy). In the architect's
words, *"a ward with 40 verified residents provides no anonymity, and pretending otherwise would be
a lie that gets someone hurt."*

Three things the approver should be clear about:

1. **This is a design answer, not a requirements change.** Neither `NFR-002` (k ≥ 1,000) nor `BR-004`
   (region-and-office-scoped representation) is weakened, and no requirement text changes. Ward-level
   *offices, nominations and eligibility* remain ward-scoped exactly as `BR-004` requires; it is the
   **anonymity set of the published action** that escalates, plus the disclosed publication delay
   already required by `NFR-002`.
2. **It still needs product confirmation**, because it carries a real product cost the architect
   cannot decide alone: in a sparse ward, a citizen's action is published against a district-sized
   anonymity set, and small-region governance is therefore *slower and coarser-grained in its public
   record* than a naive reading of objective 4 promises. The PO must confirm that this is the
   intended product behaviour and that Doc 01's ward-level promise is stated accordingly.
3. **`RISK-21` applies.** The PO and the Principal Architect are currently the same person, so this
   confirmation must be recorded explicitly *as the Product Owner*, distinct from the ADR that
   proposed it.

**PM recommendation on `OI-05`: confirm the architect's answer.** It is the only option on the table
that keeps both `BR-004` and `BR-009` intact; the alternatives (scope-dependent `k`, or deferring
small-region governance) either weaken a Must NFR or cut objective 4.

### 13.3 The appetite variance — three costed levers

`CON-007` targets Gate 2 on **2027-02-15** and launch on **2027-03-01**. The plan's evidence-based
Gate 2 is **2027-05-14**. The gap is **13 weeks**, and every week of it sits on the externally paced
cryptography path (§3.4): two independent audits, their remediation, MACI Phase-3, and a 30-day
on-chain registry timelock. _(Note 2026-08-21: the v1.0.0 text named "six ceremonies at ≥ 500
contributors" as a critical-path driver. Per `ADR-022` / REC-1, the ceremony burden has collapsed
to a batched campaign of days. The Gate-2 date does not move — the audits were already the binding
constraint before the correction, completing 2027-03-12 vs ceremonies completing 2027-03-05; see
§3.4.)_

| Lever | Effect on date | Effect on budget | PM assessment |
|---|---|---|---|
| **L1 — Move Gate 2 to 2027-05-14; hold 3 pilots** | Gate 2 +13 wks; 100% rollout 2027-07-09 | **~−USD 245,000 (~−5.8%) over** appetite, no contingency | Honest schedule, unfunded. Not viable without more money |
| **L2 — Move Gate 2 to 2027-05-14; launch in 1 pilot, roll the other 2 post-launch** _(B-01: accepted by Gate-1 approver 2026-08-09)_ | Gate 2 +13 wks | ≈ **USD 4.03M**; ≈ USD 175K (~4%) banked as an explicit audit-remediation contingency (approver ruling 2026-08-21) — _corrected from "≈ USD 4.13M, ~1.7%" which was computed off the pre-correction 4.55M total_ | **Recommended. Accepted (B-01 2026-08-09).** Keeps every Must requirement and every guardrail; defers only jurisdictional breadth, which is already `CON-005`-gated per jurisdiction. Note: B-01 already accepted this lever — the budget note now reflects the cascade-corrected figure (§8.3) |
| **L3 — Hold 2027-02-15; cut scope to fit** | Gate 2 on time | Within appetite | **Not offered.** The only scope that fits is Phase 2 — a mainnet launch with **MACI OFF**, i.e. voting without coercion resistance. That violates Must requirements `BR-011` and `NFR-003`. The PM will not present this as viable |

**Recommendation: L2.** The decision belongs to the human approver.

### 13.4 Governance exceptions requiring a recorded decision

| ID | Exception | Why it matters | Options for the approver |
|----|-----------|----------------|--------------------------|
| **E-01** | **Design was produced before Gate 1.** `ADR-001`…`ADR-014` are all `Status: Accepted`, dated **2026-08-08** — 14 days before the Gate-1 target. CLAUDE.md is explicit: *"Nothing is designed until this clears."* | The ADRs are strong work and this plan depends on them. But `OI-01` (threshold calibration) and `OI-04` (pilot jurisdictions) feed directly into `ADR-004`, and `OI-05` is answered *by* `ADR-004`. If Gate 1 decides differently from what the ADRs assumed, the ADRs must be re-baselined at MS-02 | (a) **Ratify** `ADR-001`…`ADR-014` retrospectively as Gate-1 inputs, with re-baselining at MS-02 against the five `OI` decisions; (b) require the ADRs to be re-issued after Gate 1; (c) reject |
| **E-02** | **The Product Owner and the Principal Architect are the same person.** Priya Raghunathan signs Doc 02 as Product Owner and all 14 ADRs as Principal Architect | The RACI (§7.2) makes the PO **A** on Gate 1 and the Architect **A** on architecture. One person holding both means the direction and the design that direction constrains have the same accountable owner — and `OI-05` is a case where the architect's answer must be confirmed by the PO. See `RISK-21` (exposure 15) | (a) **Appoint a distinct Principal Architect** before MS-02 (`DEP-09`); (b) accept the dual-hat with a recorded compensating control — `document-review` on Doc 03 run by a reviewer neutral to both hats, and `OI-05` confirmed explicitly *as PO*; (c) reject |

### 13.5 Go / no-go recommendation

**PM recommendation: GO — conditional.** The direction is sound, the requirements are unusually
disciplined (Gherkin on every Must row, a named individual on every requirement, six trade-offs
recorded rather than asserted away), and the architecture is genuinely responsive to the guardrails.

**Conditional on five things being recorded at the gate:**

1. Passing `document-review` reports for Docs 01, 02, 05 and 13 at their current versions — **these
   do not exist yet, and the gate cannot be presented without them.**
2. A recorded decision on each of `OI-01` … `OI-05` (§13.2), including confirmation of the
   architect's `OI-05` answer.
3. A recorded decision on the appetite variance (§13.3) — the PM recommends **L2**.
4. A recorded decision on `E-01` and `E-02` (§13.4).
5. Acknowledgement that `MS-04` (**2026-10-15**, audit firms contracted) is the first irreversible
   date after this gate. Missing it costs **10 weeks**, not two.

---

## 14. Kill criteria

> Taken seriously, stated in advance, and operationalised. Each criterion names the metric, the
> measurement owner, the decision owner and the **action** — so that stopping is a decision someone
> is already accountable for making, rather than a conversation nobody wants to start. Carried from
> Doc 01 §E2 and given owners and monitoring here. **The project-manager raises a kill criterion to
> the human approver within one business day of the trigger firing; the human decides.**

| ID | Criterion | Trigger | Measured by | Raised by → decided by | Action |
|----|-----------|---------|-------------|------------------------|--------|
| **KC-1** | **Privacy failure** | Any confirmed, reproducible deanonymisation of an ordinary member's party affiliation or ballot that cannot be remediated within **90 days** | Dr. Lena Kowalczyk (`NF-01`, `RISK-06`) | PM → human approver | **KILL.** This is the one promise whose breach cannot be compensated: the harm is to a real person's safety, and no feature offsets it |
| **KC-2** | **Coercion failure** | Evidence of a functioning vote-buying or coerced-voting market touching **> 1%** of ballots cast | Aisha Nkemdirim (`RISK-02`, `NFR-003`) | PM → human approver | **KILL, or pivot** to a non-voting deliberation product. A voting platform whose coercion defence does not hold is worse than no platform, because it launders the coercion |
| **KC-3** | **Adoption failure** | Fewer than **25,000** verified persons in the lead pilot jurisdiction by **month 6** post-launch | Yuki Sato / Grace Mbeki (`RISK-15`) | PM → human approver | **KILL, or re-scope** thresholds (`OI-01` calibration) and relaunch. No party can plausibly reach a threshold below this floor |
| **KC-4** | **Thesis failure** | At **month 12**: zero activated parties **and** median petition below **10%** of its threshold | Yuki Sato (`RISK-15`, O-2) | PM → human approver | **KILL.** The open-incubation thesis is simply wrong, and the honest response is to say so publicly rather than fund another year of it |
| **KC-5** | **Legal failure** | Rulings in **≥ 2** of the pilot jurisdictions that operating the platform is unlawful | Sofia Marchetti (`RISK-14`, `CON-005`) | PM → human approver | **Withdraw** from those jurisdictions. If **all** pilots rule against, **KILL** |
| **KC-6** | **Economic failure** | Platform cost per citizen action cannot be held below **USD 0.05** at 1M users | Hiroshi Tanaka (`NFR-005`, O-3) | PM → human approver | **PIVOT the cost model before scaling.** Do not scale into a cost curve that makes participation means-tested — that is the failure mode the product exists to eliminate |
| **KC-7** | **Capture failure** | Any **successful** governance takeover of an activated party by flash membership acquisition or a single funder | Rafael Duarte (`RISK-03`, `RISK-04`, `BR-012`) | PM → human approver | **Freeze and harden** on the first occurrence. **KILL on the second** — twice means the anti-capture design does not work, not that we were unlucky |

**Three plan-level stop conditions, added here.** These do not kill the product; they stop the
*plan* and force a re-plan or a return to the human approver.

| ID | Condition | Trigger | Action |
|----|-----------|---------|--------|
| **KC-P1** | **Audit gate cannot be met** | Any critical or high finding still open from either audit at **2027-04-16** (MS-10) | **Do not present Gate 2.** `NFR-009` is a Must with a zero-tolerance bar. Re-plan the wave; the launch date moves, the bar does not |
| **KC-P2** | **Ceremony integrity compromised** | Any phase-2 ceremony fails independent verification (`snarkjs zkey verify`), or a circuit's attested contributor set fails the `ADR-022` assurance criteria — fewer than 5 independent institutions represented, or contributor independence cannot be confirmed from published attestations | **Re-run that ceremony.** Consumes the 2-week critical-path contingency (`RISK-18`). A second occurrence re-plans Phase 2 and returns to the approver |
| **KC-P3** | **Appetite exhausted without a decision** | Burn reaches **90%** of the approved budget before MS-10 | **Freeze new scope**, harden what exists, and return to the human approver with a re-costed plan. Per CLAUDE.md's governance signal: *budget exhausted → freeze and harden* |

**A stop-the-line signal that is not a kill criterion but behaves like one:** any single identity
attestor exceeding **50%** of credentials in any one region (`FR-004`, O-8). Issuance to that
attestor halts automatically in code; the PM raises it to the approver the same day.

---

### Downstream

Objectives (§1) trace to the PR-FAQ promises (Doc 01) and requirements (Doc 02). Workstreams (§4)
decompose into the backlog (Doc 05) and are verified through the RTM (Doc 08). Milestones (§3.2) are
the gates. The risk register (§6) is the register of record — Doc 02 §10 and Doc 03 §13 reference
these IDs and keep no competing copy. Rollout (§9) executes via the Deployment Runbook (Doc 10) and
is operated per Doc 11. Production learnings return as `REF-##` entries in `docs/refine-log.md`,
which the product-owner promotes into new `BR`/`FR` — and any promoted bet re-enters the SOP at the
top and passes through **both** gates like any other bet.
