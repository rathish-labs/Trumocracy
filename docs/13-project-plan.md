# Project Plan — Trumocracy

```
Document ID:   PLAN-TRUMOCRACY
Version:       2.0.2
Status:        Approved (review loop, cycle 3 PASS 100% — artifacts/reviews/13-project-plan-v2.0.2-business-cycle3.md)
Owner:         Ana-Maria Petrescu — Project Manager
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md),
               SRS-TRUMOCRACY v2.4.0 (docs/02-requirements-srs.md),
               BKLG-TRUMOCRACY (docs/05-product-backlog.md),
               ADR-001 … ADR-022 (docs/adr/),
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md (REC-1, REC-2)
Last updated:  2026-08-21
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
> (see §8.3). The scope has re-baselined to **SRS v2.4.0 (110 Must requirements)**. Sections §3.4
> (critical path), §8.3 (resourcing) and §13 (Gate-1 packet) set out the three levers. **The
> project-manager does not decide this. The Gate-1 approver does.**
>
> **v2.0.0 re-plan (2026-08-21):** cryptography path corrected per REC-1 / REC-2 (`ADR-022`);
> scope re-baselined to SRS v2.4.0; ceremony logistics budget to near-zero; Gate-2 date unchanged.
> See §11 re-plan log for the full entry.

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

The 110 **Must** functional requirements (`FR-001`…`FR-129`, SRS v2.4.0 §11) and the 22 **Must**
non-functional requirements, delivered across four phases (§3.1) as designed in `ADR-001`…`ADR-022`
_(scope re-baselined 2026-08-21: was 42 Must FRs per Doc 02 v1.0.0 at Gate 1; grown by v2.0.0
through v2.4.0 additions including FR-118 charter promotion, FR-121…FR-129 pilot and charter-guard
requirements — see SRS v2.4.0 §11)_:

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
> `RISK-17`…`RISK-21` are **new at Doc 13 v1.0.0** — delivery and schedule risks that are the
> project-manager's to own and did not belong in a requirements document. No ID is reused.

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
| **RISK-18** | **Audit capacity slip** — audit firms are not contracted by 2026-10-15, or a finding forces a circuit change and a **re-run ceremony** | 3 | 5 | 15 | Both engagements signed at MS-04 with January starts; audits run in parallel (`A-PLAN-02`); **2 weeks of critical-path contingency** (a re-ceremony for a single circuit now takes days per `ADR-022` — contingency absorbs the re-run overhead and leaves a buffer for audit remediation overshoot). **Trigger:** either engagement unsigned at 2026-10-15 → escalate to the human approver same week | `ADR-005`, `ADR-022` | Rafael Duarte | **Open** |
| **RISK-19** | **Appetite overrun** — `CON-007` (USD 4.2M / 18 FTE) is insufficient for a Gate 2 on the evidence-based date; §8.3 shows a ~USD 245,000 (~−5.8%) shortfall with zero contingency | 4 | 4 | 16 | Presented to the Gate-1 approver as a decision with three costed levers (§13.3); monthly burn tracked in the WBR against a published plan line; the pilot-count lever is reversible up to 2027-02-15 | — (plan) | Ana-Maria Petrescu | **Open — new** |
| **RISK-20** | **MACI Phase-3 complexity underestimated** — circuits, message queue, batched tally and a per-election committee ceremony are, in the architect's own words, "the single largest engineering cost in this design" | 4 | 5 | **20** | Phase-1 ships public-tally governance behind a flag so the governance surface is proven before MACI lands; MACI integration is scheduled **after** audits so it is built against frozen, audited circuits; committee DKG rehearsed on testnet at MS-12; documented last-resort fallback is re-run under a fresh committee, **never** a plaintext tally | `ADR-006` | Aisha Nkemdirim | **Open — new** |
| **RISK-21** | **Role-separation defect** — the Product Owner and the Principal Architect are the same person (Priya Raghunathan signs Doc 02 as PO and `ADR-001`…`ADR-014` as Principal Architect), so the role **Accountable** for direction is also the role **Accountable** for the design that direction is meant to constrain | 5 | 3 | 15 | Raised as governance exception `E-02` for a Gate-1 decision (§13.4); until resolved, `document-review` on Doc 03 MUST be run by a reviewer neutral to **both** hats, and Gate-1 `OI-05` confirmation must be recorded by the PO explicitly *as PO* | — (plan) | Ana-Maria Petrescu | **Open — new** |

**Top 5 by exposure:** `RISK-01`, `RISK-02`, `RISK-04`, `RISK-06`, `RISK-20` (all at 20). Four of the
five are adversarial-integrity risks and one is delivery. Every one of them has at least one
mitigation that is **verified at Gate 2 by evidence, not by assertion** (§3.3).

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
eight locales deferred −80k, issuer/attester onboarding −40k), landing at ≈ **USD 4.13M with ~1.7%
contingency**. It buys **no time** — the critical path is cryptographic, not jurisdictional. This is
the plan's recommended lever, and it is the Gate-1 approver's decision, not the PM's.

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
| **Passing `document-review` reports for Docs 01, 02, 05, 13** | ⚠ **Partially cleared** | **Doc 13 v2.0.2: ✅ PASS 100%** — business mode, technical-writer (neutral), cycle 3 (`artifacts/reviews/13-project-plan-v2.0.2-business-cycle3.md`). Docs 01, 02, 05: ❌ passing business-mode review reports not yet produced. **Gate 1 cannot be presented until Docs 01, 02 and 05 are also reviewed and passed.** |
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
| **L2 — Move Gate 2 to 2027-05-14; launch in 1 pilot, roll the other 2 post-launch** | Gate 2 +13 wks | ≈ **USD 4.13M**, ~1.7% contingency | **Recommended.** Keeps every Must requirement and every guardrail; defers only jurisdictional breadth, which is already `CON-005`-gated per jurisdiction |
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
