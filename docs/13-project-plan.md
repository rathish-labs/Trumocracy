# Project Plan — Trumocracy

```
Document ID:   PLAN-TRUMOCRACY
Version:       2.8.1
Status:        Approved
Owner:         Ana-Maria Petrescu — Project Manager
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md),
               SRS-TRUMOCRACY v2.13.0 (docs/02-requirements-srs.md) — Approved (business c2 PASS 99%; `artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md`),
               BKLG-TRUMOCRACY (docs/05-product-backlog.md),
               SDD-TRUMOCRACY v2.6.1 (docs/03-architecture-design-sdd.md) — Approved (technical c2 PASS 97%; `artifacts/reviews/03-architecture-design-sdd-v2.6.1-technical-cycle2.md`),
               ADR-001 … ADR-025 (docs/adr/),
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md (REC-1, REC-2),
               DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md (Ruling 1 — budget appetite),
               DECISIONS-2026-08-23-V1-V2-SPLIT.md (v1/v2 delivery split, Definition A/B),
               DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md (Rulings 1–3 — v1 auth, spam resistance, blockchain ratification),
               DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md (v1 identity = phone + gov-ID verify-and-discard; five confirmations),
               DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (gov-ID gates COUNTING not joining; MS-V1-LRG 2027-06-30 APPROVER-DELEGATED; T-06 ACCEPTED; Gov-ID gate tension RESOLVED [mislabelled T-08 in v2.7.0 — corrected v2.7.1]; ADR-025 amended),
               DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md (three confirmations: terminology CLOSED; MS-V1-LRG 2027-06-30 APPROVER-CONFIRMED; RISK-44 CLOSED option (a) — Definition-B Gate-2 re-based after v1 gate, 2027-05-14 retired; v1 scope CLOSED)
Last updated:  2026-08-24
Change:        v2.8.1 — Rework cycle 1. Business-mode review FAIL 95% (0C/0H/1M/1L; `artifacts/reviews/13-project-plan-v2.8.0-business-cycle1.md`). Two surgical fixes: (ISS-01 Medium) §8.3 budget table header — retirement annotation added to 2027-05-14 (superseded: pre-split Definition-B referent, retired 2026-08-24 per RISK-44 option (a), SCOPE-CLOSURE §3.3; MS-13 re-based after the v1 gate, offset at v2 re-entry); 10-month figure and all cost totals unchanged (§13.3 confirms budget figure remains valid as planning basis). (ISS-02 Low) §3.1 Phase-3 row and §8.1 wave-appetite Later row — parenthetical annotation added to 2027-04-19 → 2027-07-09 dates identifying them as Definition-B placeholder dates derived from the retired 2027-05-14 referent, to be re-planned at v2 re-entry.
               v2.8.0 — v1 scope closure rulings applied (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md). (1) MS-V1-LRG 2027-06-30 label upgraded APPROVER-DELEGATED → APPROVER-CONFIRMED at all active sites. (2) RISK-44 CLOSED — Definition-B Gate-2 (MS-13) re-based to "after the v1 gate (2027-06-30); specific offset to be planned when Definition B re-enters design→build — deliberately not fixed now"; 2027-05-14 retired as a fixed Definition-B Gate-2 target at all active sites (superseded figure retained as annotated historical record per annotate-don't-delete convention). (3) CON-015 derived 2027-03-19 Gate-2 deadline retired with its base; S-2b latest-start 2026-09-07 stands as sole binding deadline. (4) §3.5.5 ⚠ DECISION REQUIRED callout resolved; coherent sequential sequencing stated. (5) §3.5.6 heading and preamble updated (T-01..T-05 CONFIRMED; T-06 ACCEPTED; T-07 PENDING CON-015; T-08 ARCHITECT-RESOLVED; naming collision CONFIRMED-CLOSED). (6) §13.1 Doc 13 self-row updated; cascade debt note added (Doc 01/02/03/09/10 per SCOPE-CLOSURE §4.4). (7) §6 RISK-44 closed; RISK-45/46 premises verified and updated.
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
> into a Gate 2 on **2027-02-15**. The plan's evidence-based Definition-B Gate-2 date was
> **2027-05-14** (+13 weeks, audit-paced, not ceremony-paced). **This figure has been retired as of
> 2026-08-24 (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3) via RISK-44 ruling option (a):** the
> Definition-B Gate-2 (MS-13) is re-based to follow the v1 gate (2027-06-30); the specific offset
> is deliberately not fixed now and will be planned when Definition B re-enters design→build.
> Superseded fixed date: **2027-05-14** (pre-split artifact, retired 2026-08-24). The 10-month
> run-rate at 18 FTE consumes the whole USD 4.2M with **no contingency and a ~USD 245,000
> (~−5.8%) shortfall**; the ceremony logistics budget line drops to near-zero (see §8.3). On the
> Gate-1-accepted L2 basis (decision B-01) the corrected budget is ≈ USD 4.03M against the
> unchanged USD 4.2M appetite, with the ≈ USD 175K difference held as an explicit audit-remediation
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
> Gate-2 date 2027-05-14 UNCHANGED — attaches to Definition B; v1 gate date set to **2027-06-30** (APPROVER-DELEGATED, 2026-08-24 — subject to approver correction; see §3.5.5 and `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.1`). See §11 re-plan log and `DECISIONS-2026-08-23-V1-V2-SPLIT.md`.
>
> **v2.2.0 re-plan (2026-08-23):** Cycle-1 business-mode review rework (FAIL 84%, 0C/1H/2M/2L). Five
> issues fixed: RISK-22..30 inserted in §6 (ISS-H1); v1 Must-set corrected to 108 (ISS-M1); honesty
> register updated H-01..H-14 in MS-V1-09 / PR-7 (ISS-M2); SRS pin updated to v2.7.0 Approved
> (ISS-L1); §13.1 review-status row updated (ISS-L2). See §11 re-plan log.
>
> **v2.5.0 re-plan (2026-08-23):** v1 identity verification ruling applied
> (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md): phone (SMS) + government-ID document
> check with verify-and-discard retention (DES-100; `id_verified_flag`/`age_verified`/
> `issuing_region`/`subject_id_hash`/`phone_hash`/`verified_at` stored; everything else
> discarded; HMAC-SHA-256 + KMS-held pepper for phone_hash and subject_id_hash). Five
> approver confirmations folded in: NFR-009 v1 CONFIRMED; 2027-05-14 CONFIRMED; T-01..T-05
> CONFIRMED; DEFERRED-v2 Musts CONFIRMED; v1 gate date set to **2027-06-30** (APPROVER-DELEGATED, 2026-08-24 — see §3.5.5 and `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.1`).
> **CON-015 now CRITICAL PATH** — no enrolment work begins until it clears; left end of effort
> range shifts right. MS-V1-02 extended (DES-100 + verify-and-discard). DEP-13 added.
> RISK-40..43 added. Honesty register H-01..H-19. See §11 re-plan log.
>
> **v2.7.0 re-plan (2026-08-24):** Government-ID gates COUNTING not joining (Rathish ruling, 2026-08-24, `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`). Key changes: (1) MS-V1-LRG gate date set to **2027-06-30** (APPROVER-DELEGATED; ~9.5 months from coding start; conservative end of the 6–10 month range to absorb vendor procurement and CON-015 lead times; §3.5.5). (2) Definition-B Gate-2 (2027-05-14) vs v1-gate (2027-06-30) incoherence surfaced — DECISION REQUIRED (§3.5.5, RISK-44). (3) Build-order: ID credential capture, DES-100 retention, subject_id_hash dedup, and vendor integration remain in S-2; counting-gate enforcement and FR-131 clause (d) non-counting disclosure land at S-4/S-5/S-6 FR-123 call sites; phone-only open-tier path (S-2 part a + S-3) can start before ID integration — genuine schedule benefit. (4) CON-015 still hard-gates ID integration in S-2 (DES-100 retention); phone-only account creation unblocked from CON-015. (5) Back-scheduled latest-start dates from 2027-06-30: DEP-11/12/13 procurement must start by 2026-09-19 at the latest (all three NOT STARTED — already late); CON-015 must start by 2027-03-10 for the Gate-2 line item but must clear for S-2 which needs to start by 2026-11 — **CON-015 is already late against the S-2 constraint**; security-review booking must occur by 2027-04-07. (6) T-06 ACCEPTED — DEFERRED WITH DISCLOSURE (Rathish, 2026-08-24). T-08 RESOLVED — BR-003/FR-020 intact (government-ID gates COUNTING only) [mislabelled T-08 in v2.7.0 — corrected v2.7.1]. T-07 RESHAPED — reaffirmed PENDING CON-015. (7) H-19 meaning corrected at all active-text sites: COUNTING exclusion, not platform exclusion. (8) §3.5.4 PR-6 updated; PR-11 added (FR-131 clause (d) non-counting disclosure + counting-gate enforcement). (9) RISK-44 (v1-gate vs Definition-B Gate-2 incoherence), RISK-45 (non-counting class depressing party strength), RISK-46 (counting-gate enforcement distributed across S-4/S-5/S-6) added. (10) Upstream pins updated: Doc 02 v2.12.0 (In Review), Doc 03 v2.6.0 (In Review). T-06..T-08 preamble updated.
>
> **v2.6.0 re-plan (2026-08-23):** Cycle-1 business-mode review rework (FAIL 91%, 0C/0H/2M/0L;
> `artifacts/reviews/13-project-plan-v2.5.0-business-cycle1.md`). Two surgical fixes: ISS-01 —
> RISK-31 and RISK-33 H-register range updated H-01..H-16 → H-01..H-19; RISK-33 narrative expanded
> with H-17 (vendor sees document), H-18 (derived identifier retained), H-19 (no gov-ID = no
> enrolment); maintenance note added to §6 header blockquote. ISS-02 — §13.1 document-review
> evidence updated: Doc 02 v2.10.0 PASS 100% c3 → v2.11.0 PASS 99% c1; Doc 13 v2.5.0 FAIL c1
> recorded; v2.6.0 In Review pending c2. See §11 re-plan log.
>
> **v2.4.0 re-plan (2026-08-23):** Cycle-1 business-mode review rework (FAIL 92%, 0C/0H/1M/1L;
> `artifacts/reviews/13-project-plan-v2.3.0-business-cycle1.md`). Two surgical fixes: ISS-01 —
> RISK-32 rewritten for SMS-OTP auth (was still password/OAuth/PKCE language from pre-Ruling-1
> era); ISS-02 — §2.1 ADR range updated ADR-001…ADR-024 → ADR-001…ADR-025. Auth-assumption sweep
> found no other pre-ruling auth language in active prose. See §11 re-plan log.
>
> **v2.3.0 re-plan (2026-08-23):** v1 auth & spam-resistance rulings applied
> (DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md): (1) phone-based SMS verification adopted for
> v1 auth (FR-132, ADR-025); (2) flag-don't-block spam-resistance layer added (FR-133, DES-099);
> (3) blockchain ratified as v1 transparent-audit foundation (Ruling 3, DES-097 — item (a) from
> V1-V2-SPLIT §4 CLOSED). v1 Must set re-derived: **110** (114 total Must − 4 DEFERRED-v2 Must FRs,
> SRS v2.10.0). Honesty register now H-01..H-16. Two new Charter tensions surfaced: T-06 (Charter
> Rule 1 vs phone auth) and T-07 (FR-003 vs phone-number storage) — both AWAITING APPROVER
> CONFIRMATION. RISK-35..39 added; DEP-11/12 added. Two carried Lows from c2 fixed (RISK-31/33
> H-register; RISK-22..30 bold-ID style). See §11 re-plan log.

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

The **114 Must** functional requirements (`FR-001`…`FR-133`, SRS v2.13.0 §11 — Approved (business c2 PASS 99%; `artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md`)) and the 22 **Must**
non-functional requirements, delivered across four phases (§3.1) as designed in `ADR-001`…`ADR-025`
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
| **Phase 3 — Coercion resistance & representation** | MACI with the **5-of-7 threshold coordinator committee** (`ADR-006`); elections; recall; treasury guardrail; fork. **This is the first phase real citizens use.** Staged **1 → 10 → 50 → 100%** | all five flags progressively **ON**, metric-gated | production (lead pilot) | 2027-04-19 → 2027-07-09 (Definition-B placeholder dates derived from retired 2027-05-14 referent — to be re-planned at v2 re-entry) |
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
| MS-13 | **Launch readiness** | **Gate** | **Gate 2** | **Re-based after the v1 gate (2027-06-30); specific offset to be planned when Definition B re-enters design→build — deliberately not fixed now (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3). Superseded fixed date: 2027-05-14 (pre-split artifact, retired 2026-08-24).** | See §3.3 | **Human approver** (Product **A** · QA **C** · SRE **C**) |
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

**Gate 2 — Launch readiness (MS-13 — Definition B; target re-based after the v1 gate (2027-06-30); specific offset to be planned at v2 re-entry — DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3; superseded fixed date: 2027-05-14, retired 2026-08-24), immediately before the Phase-3 production rollout.** The approver must be shown, and must be able to check, all of:

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
    **Binding deadline: S-2b latest start 2026-09-07** (sole binding deadline per
    DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md — S-2b must start 2026-11-01; 2026-11-01 − 56 days
    = 2026-09-07). The previously stated "≥ 8 weeks before Gate 2 (≥ 2027-03-19 absolute)" figure
    was derived from the now-retired 2027-05-14 Definition-B Gate-2 date and is **retired along
    with its base (2026-08-24)**. The S-2b gate stands as the sole operative deadline.
12. **Doc 04 (Test Strategy) `document-review` debt cleared** — a passing review report (≥ 95%, zero
    C/H/M) for the current Doc 04 version. Status: **OPEN**. Owner: PM to assign neutral reviewer.
13. **RTM (Doc 08) catch-up for `FR-121`…`FR-129`** — traceability rows (`FR/NFR → DES → US → TC`)
    for all nine pilot-and-charter requirements minted in SRS v2.3.0–v2.4.0. None have DES/US/TC
    rows as of 2026-08-21. Status: **NOT STARTED**. Unblocked after Architect assigns DES IDs and
    Backlog adds US rows.

If any one of these is missing, **the gate is not presented.** The project-manager emits
`<missing_information>` naming the blocker and routes the work back to the owning role.

> **⚠ v1/v2 split annotation — 2026-08-23; updated 2026-08-24.** The twelve conditions above describe the
> **Definition B (v2)** Gate-2 posture (audit-paced; Definition-B Gate-2 target re-based after the
> v1 gate per RISK-44 ruling — see §3.5.5; superseded fixed date: 2027-05-14, retired 2026-08-24).
> **Definition A (v1)** uses a lighter, separately stated production-readiness bar — see **§3.5**.
> The v1 bar replaces items 3 (two heavy ZK audits), 4 (six ceremony transcripts), and 9 (MACI
> 5-of-7 committee) for the v1 launch-readiness gate. All other items (RTM zero gaps for the v1
> Must set, suites green, rollback proven, a11y, legal, Doc 04 review debt, FR-121..FR-131 catch-up)
> apply to both Definitions.
> **MS-V1-LRG — v1 launch-readiness gate: 2027-06-30. APPROVER-CONFIRMED (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md).** Basis: coding start 2026-09-14; revised effort range 6–10 months (2027-03-14 … 2027-07-14); 2027-06-30 sits at ~9.5 months, deliberately toward the conservative end because DEP-11/DEP-12/DEP-13 are all un-contracted (4–8 week procurement lead times) and CON-015 is NOT STARTED while gating stage S-2. Previously APPROVER-DELEGATED per `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.1`; upgraded to APPROVER-CONFIRMED 2026-08-24.
>
> **Back-scheduled latest-start dates from 2027-06-30 (all figures as of 2026-08-24):**
>
> | Item | Latest start | Basis | Already late? |
> |------|-------------|-------|---------------|
> | DEP-11 (SMS delivery provider) procurement | **2026-09-19** (using 8-week upper lead; S-2 no later than 2026-11-14) | 4–8 week lead; must contract before MS-V1-02 starts | **No — NOT STARTED; latest start 2026-09-19 (26 days from 2026-08-24); initiation must begin immediately** |
> | DEP-12 (phone-intelligence API) procurement | **2026-09-19** (same basis as DEP-11) | 4–8 week lead; must contract before MS-V1-02 starts | **No — NOT STARTED; latest start 2026-09-19 (26 days from 2026-08-24); initiation must begin immediately** |
> | DEP-13 (ID-verification provider) procurement | **2026-09-19** (8-week upper lead; harder to contract — no-retention clause required) | 4–8 week lead; DEP-13 procurement may be longer than commodity | **No — NOT STARTED; latest start 2026-09-19 (26 days from 2026-08-24); initiation must begin immediately** |
> | CON-015 legal opinion (8-week lead; S-2b ID-integration hard gate) | **2026-09-07** for S-2b constraint (2026-11-01 − 56 days = 2026-09-06/07; binding; earlier than 2027-05-05 Gate-2 line item) | Legal opinion ~8 weeks; must be in hand before S-2b ID-integration starts (latest S-2b start 2026-11-01); Gate-2 line item due 2027-05-05 is the secondary deadline | **No — NOT STARTED; latest start 2026-09-07 for S-2b (14 days from 2026-08-24); must start immediately (Sofia Marchetti)** |
> | Lightweight security review (PR-1) — booking | **2027-04-07** | 4–8 week lead + 2–4 week duration; must complete before 2027-06-30 | Not yet late — book by 2027-04-07 |
>
> **Note: RISK-44 CLOSED 2026-08-24.** The incoherence between the Definition-B Gate-2 date
> (formerly 2027-05-14) and the v1 gate (2027-06-30) is resolved via option (a): the Definition-B
> Gate-2 (MS-13) is re-based to follow the v1 gate. The fixed date 2027-05-14 is retired. See §3.5.5
> and DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3.

### 3.4 Critical path

The critical path runs through **cryptography, not features**. Every long-lead item below is
externally paced — contributor recruitment, audit-firm capacity, and a 30-day on-chain registry
timelock are not things a team of 18 can work harder to shorten.

> **⚠ Definition-B programme dates — 2026-08-24 update.** The critical path and dates below
> describe the **Definition-B (v2) programme**. Per RISK-44 ruling option (a)
> (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3), all Definition-B milestone dates below that
> derive from the former fixed Gate-2 date of **2027-05-14** (retired 2026-08-24) are now
> placeholder offsets only. Specifically: MS-09 (2027-03-12), MS-10 (2027-04-16), MS-11
> (2027-04-19), MS-12 (2027-05-07), MS-13 (Gate 2), and the staged rollout window
> (2027-05-17→2027-07-09) will all be re-planned when Definition B re-enters design→build after
> the v1 gate (2027-06-30). Do not use these dates for scheduling until Definition B re-enters.
> MS-04..MS-08 (pre-audit milestones) and the v1 path (MS-V1-01..MS-V1-LRG) are unaffected.

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
                      → ▣ GATE 2 [Definition B — date re-based after v1 gate; superseded fixed date: 2027-05-14, retired 2026-08-24]
                        → staged rollout 1 → 10 → 50 → 100% [to be planned at v2 re-entry]
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

**The variance.** `CON-007` targets Gate 2 on 2027-02-15 and launch on 2027-03-01. The original
evidence-based Definition-B Gate-2 date was **2027-05-14** (superseded: retired 2026-08-24 per
RISK-44 ruling option (a)); the Definition-B Gate-2 is now re-based after the v1 gate (2027-06-30)
with the specific offset to be planned at v2 re-entry. The original 100% rollout date of
**2027-07-09** derived from 2027-05-14 and is likewise retired as a fixed date. See §13.3 and §3.5.5.

---

### 3.5 v1 Delivery Plan — Definition A

> **Authority:** Rathish (human approver), 2026-08-23, transmitted via coordinator.
> Full directive: `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md`.
> This section is the plan's recommendation. T-06 has been confirmed/resolved by the approver (2026-08-24; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`). The Gov-ID gate vs BR-003/FR-020 tension (mislabelled T-08 in v2.7.0; corrected v2.7.1) is also RESOLVED by the same ruling. The real T-08 (single-vendor ID-check concentration vs FR-004 plurality intent — Doc 03 §10.13.7) is ARCHITECT-RESOLVED independently. **RISK-44 is CLOSED (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md)** — the Definition-B Gate-2 vs v1-gate incoherence is resolved via option (a): Definition-B Gate-2 re-based after the v1 gate (2027-06-30); 2027-05-14 retired. All v1 scope rulings are now closed. The one remaining external dependency is T-07 (PENDING CON-015 legal opinion — a legal input, not an approver ruling).

#### 3.5.1 What ships in v1 (Definition A)

**In scope for v1:**
- **110 Must FRs in the v1 Must set** — derived as: 114 total Must (SRS v2.13.0 §11 — Approved (business c2 PASS 99%; `artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md`); includes FR-132 (phone SMS + government-ID document check, verify-and-discard) and FR-133 spam-resistance layer, both Must and IN-v1) minus 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = **110**.
  The four deferred FRs exist solely for ZK anonymity / private-ballot / coercion-resistance and
  are structurally excluded from v1. **CONFIRMED by approver (2026-08-23)** — Definition-B-only;
  remain Must for v2; not weakened or deleted. All remaining 110 Must FRs are IN-v1 or have a
  defined PARTIAL v1 form (including FR-131, FR-132, and FR-133).
- **24 IN-v1 NFRs** + **3 PARTIAL NFRs** (NFR-001, NFR-002, NFR-024 in v1 policy-enforcement forms).
- **Wireframes and design system** per `ADR-023` (DES-093/DES-094); all SCR screens remain in scope.
- **DES-097 package disposition (RATIFIED by Ruling 3, 2026-08-23):** blockchain serves ONLY as
  the public transparent-audit record (hash publication to audit contract for verifiable
  transparency) — **transparency-now, privacy-later**; conventional application + database sits
  on top. Composition with existing blockchain-as-audit-layer design confirmed by architect
  in Doc 03 v2.4.1 §10.13.5. v1 reuses: `packages/protocol` (governance rules, threshold maths, tier
  rules — no change); `packages/contracts` (audit-anchoring subset — hash publication only; registry
  contracts remain but no ZK verifier calls); `apps/web` + `packages/ui` (wireframe components,
  design system). **New in v1:** conventional auth + user account layer; relational database for
  membership, ballot, and manifesto data; `IEligibilityVerifier` v1 implementation (phone SMS +
  government-ID document check backing per DES-095, ADR-025); `IBallotService` v1 implementation
  (DB-backed ballot per DES-096); field-level retention discipline per DES-100 (HMAC-SHA-256 +
  KMS-held pepper; allowlist/denylist; `subject_id_hash` dedup path).

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
| **S-2 Identity & eligibility (v1)** | MS-V1-02 | `IEligibilityVerifier` v1 implementation. **S-2 is split into two independent tracks:** **(S-2a — phone-only, no CON-015 dependency) Phone-based SMS verification** (`FR-132`, `ADR-025`) — SMS OTP flow with session management; `phone_hash` (HMAC-SHA-256 + KMS-held pepper) enforces one-account-per-number without storing plaintext; DES-100 five operational MUST requirements applied (allowlist/denylist, pepper rotation, audit log, data-retention schedule, legal hold). S-2a can start as soon as DEP-11 and DEP-12 are contracted. **(S-2b — ID integration; CON-015 hard-gates this track) Government-ID document check** (`FR-132`, `ADR-025 §(e)`) — credential capture, producing only a "verified adult, region X" FLAG; stored fields: `id_verified_flag`, `age_verified`, `issuing_region`, `subject_id_hash` (HMAC-SHA-256 + KMS-held pepper; dedup path), `verified_at`; everything else DISCARDED — MUST NOT store the document or any reversible copy. Vendor contractual no-retention clause required before S-2b can begin (Doc 01 §E1 delivery condition). `DES-100` field-level disposition governs the full allowlist/denylist. **Ruling 2026-08-24:** the government-ID check is the v1 backing for FR-123's COUNTING-tier eligibility gate — it does NOT gate account creation or joining. S-2b builds only the credential-capture, DES-100 retention, and `subject_id_hash` dedup infrastructure. The `IEligibilityVerifier` call that blocks a COUNTING action for an un-verified user is wired at the FR-123 call sites in **S-4 (strength contribution), S-5 (binding vote), and S-6 (candidacy)** — not here. **Schedule benefit:** S-2a + S-3 (party lifecycle) can proceed before S-2b is unblocked by CON-015. **(c) Spam-resistance layer** (`FR-133`, `DES-099`) — VoIP/virtual-number detection via phone-intelligence API (DEP-12), velocity + device anti-fraud checks; flag-and-rate-limit only (MUST NOT hard-block — first-class false-positive path mandatory). FR-133 flag-don't-block governs the spam layer; it is independent of the FR-123 counting-gate. **(d) Residency / region code assignment; Phase-1 Aadhaar adapter stub** (`DES-070`) behind a flag. `FR-131` honesty notice MUST carry the one-account-per-phone caveat AND the government-ID check disclosures (H-17, H-18). H-19 (no COUNTING-tier eligibility without government ID) is displayed at first COUNTING action attempt (S-4/S-5/S-6), not at account creation. **Delivery dependencies for S-2b:** DEP-13 contracted; CON-015 cleared (CRITICAL PATH — see §3.5.3). | `FR-001`..`FR-005` (v1 forms), `FR-121`..`FR-128` (v1 PARTIAL forms), `FR-132`, `FR-133`, `DES-095`, `DES-099`, `DES-100`, `ADR-016`, `ADR-021`, `ADR-025`, DEP-11, DEP-12, DEP-13 | New (S-2a): phone-auth backend, SMS OTP, spam-resistance layer. New (S-2b): gov-ID credential capture, DES-100 retention discipline, vendor integration. Reuse: protocol eligibility rules |
| **S-3 Party lifecycle** | MS-V1-03 | Party draft across eight mandatory pillars (`FR-006`..`FR-012`); digital constitution (`FR-074`..`FR-080`); non-violence clause (`FR-009`); petition → threshold → automatic activation (`FR-014`..`FR-018`); provisional-party membership cap (`FR-130`); DES-097 audit-record anchor on activation | `EP-02`, `EP-03`, `FR-006`..`FR-018`, `FR-074`..`FR-080`, `FR-130`, `DES-097` | Reuse: protocol threshold/activation rules, contracts (petition + party registries). New: DB party store |
| **S-4 Membership & proposals** | MS-V1-04 | Open membership join/leave (`FR-019`..`FR-025`); participation tiers (`FR-083`..`FR-089`); tiered proposals and supermajorities (`FR-035`..`FR-041`); timelocks (`FR-042`..`FR-044`). **FR-123 counting-gate enforcement (2026-08-24 ruling):** strength-contribution actions MUST call `IEligibilityVerifier.isEligible()` at the call site — users with `id_verified_flag = false` receive the FR-131 clause (d) non-counting disclosure and are directed to ID verification; they are NOT blocked from joining or organising. S-2b (ID integration) must be complete before this gate can be wired. | `EP-03`, `EP-04`, `FR-019`..`FR-025`, `FR-035`..`FR-044`, `FR-083`..`FR-089`, `FR-122`, `FR-123`, `DES-095` | Reuse: protocol tier/timelock rules, contracts. New: DB membership store; IEligibilityVerifier counting-gate at strength-contribution call sites |
| **S-5 Voting (v1) + FR-131** | MS-V1-05 | `IBallotService` v1 implementation (DB-backed ballot — vote stored and counted in DB, last-ballot-counts logic, public tally); **`FR-131` honesty notice** displayed at every vote-cast surface (SCR-13 non-dismissable pre-vote notice, SCR-14 post-vote notice) per DES-098; no MACI, no ZK — fully disclosed per FR-131. **FR-123 counting-gate enforcement (2026-08-24 ruling):** binding-vote actions MUST call `IEligibilityVerifier.isEligible()` at the call site — users with `id_verified_flag = false` receive the FR-131 clause (d) non-counting disclosure and are directed to ID verification; open-tier users cannot cast a vote that counts. S-2b must be complete before this gate can be wired. | `FR-026`..`FR-034` (v1 PARTIAL/IN-v1 forms), `FR-122`, `FR-123`, `FR-131`, `DES-095`, `DES-096`, `DES-098`, `SCR-13`, `SCR-14` | Reuse: protocol tally rules. New: DB ballot store, IBallotService v1; IEligibilityVerifier counting-gate at vote-cast call sites |
| **S-6 Candidate selection, debates & recall** | MS-V1-06 | Self-nomination and candidate profiles (`FR-059`..`FR-061`, `FR-096`..`FR-102`); member-vote candidate selection (`FR-103`..`FR-110`); committee proposals (`FR-091`..`FR-095`); recall (`FR-042`/`FR-043`/`FR-045`); debate moderation boundary (`FR-056`). **FR-123 counting-gate enforcement (2026-08-24 ruling):** candidacy actions MUST call `IEligibilityVerifier.isEligible()` at the call site — users with `id_verified_flag = false` receive the FR-131 clause (d) non-counting disclosure and cannot stand; open-tier users may still participate in debate and discussion. S-2b must be complete before this gate can be wired. | `EP-05`, `EP-06`, `EP-07`, `FR-056`, `FR-059`..`FR-061`, `FR-091`..`FR-110`, `FR-122`, `FR-123`, `DES-095` | Reuse: protocol recall rules. New: DB candidate store; IEligibilityVerifier counting-gate at candidacy call sites |
| **S-7 Manifesto commitments + dashboards** | MS-V1-07 | Measurable manifesto commitments with tracked evidence (`FR-111`..`FR-115`); public finance dashboards (FR-049..FR-052 v1 forms); promise-vs-performance dashboard; DES-097 audit-record anchoring for manifesto entries and financial summaries | `EP-08`, `EP-09`, `FR-049`..`FR-052`, `FR-111`..`FR-115`, `DES-097` | New: manifesto DB, dashboard backend |
| **S-8 Public audit-record anchoring** | MS-V1-08 | Hash publication to the audit contract for all major state transitions (party activation, ballot close, manifesto update) per DES-097; standalone verifier integration for audit-record verification; IPFS/Arweave mirror of audit hashes | `FR-054`, `FR-055`, `DES-097`, `ADR-009` | Reuse: contracts (audit-anchoring subset), verifier |
| **S-9 Hardening & beta** | MS-V1-09 | v1 production-readiness bar (§3.5.4); open-source readiness items (README honesty register H-01..H-19 — includes H-17 vendor sees the document during signup, H-18 derived identifier retained, H-19 citizens without a government ID cannot take COUNTING actions in v1 (open-tier participation remains available); contribution docs, licence); staged rollout infrastructure (1→10→50→100%) | NFR-006, NFR-007, NFR-011, NFR-020, `FR-131`, H-01..H-19 | — |

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
| **Auth mechanism DECIDED** (Ruling 1, 2026-08-23): phone-based SMS verification behind DES-095; spam-resistance via phone-intelligence API (DES-099, FR-133). Stack ratified (Ruling 3): blockchain as audit record, conventional app + DB on top (DES-097 — confirmed in Doc 03 v2.4.1). | `ADR-025`, `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` |
| **Identity check DECIDED** (v1 identity ruling, 2026-08-23): phone SMS + government-ID document check; verify-and-discard; DES-100 field-level retention discipline; `subject_id_hash` dedup; HMAC-SHA-256 + KMS-held pepper. | `ADR-025 §(e)`, `DES-100`, `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` |
| Database vendor (relational DB) — not yet decided; vendor selection remains open | N/A — not yet produced |
| SMS delivery provider (DEP-11) — not yet contracted; 4–8 week procurement lead time | N/A — procurement pending |
| Phone-intelligence API vendor (DEP-12) — not yet contracted; 4–8 week procurement lead time | N/A — procurement pending |
| **ID-verification provider (DEP-13)** — not yet contracted; 4–8 week procurement lead time; **vendor contractual no-retention clause is a hard pre-condition for S-2b (ID integration track)** | N/A — procurement pending; vendor selection REQUIRED before MS-V1-02 S-2b |
| **CON-015 legal opinion — CRITICAL PATH for S-2b (ID integration)** (2026-08-23 identity ruling; 8 weeks before Gate 2): no government-ID check integration work (MS-V1-02 S-2b) begins until CON-015 clears. CON-015 covers document-verification data flows in the India/Aadhaar pilot. **2026-08-24 ruling update:** the phone-only account-creation path (S-2a) and party-lifecycle stage (S-3) are NOT blocked by CON-015 — they can proceed before CON-015 clears. This is a genuine schedule benefit. CON-015 still hard-gates S-2b because the DES-100 field-level retention discipline, HMAC + KMS pepper provisioning, and audit-log wiring for `subject_id_hash` require legal clearance before any identity data is stored. | `CON-015`; Sofia Marchetti; status: NOT STARTED — must start **immediately** (see back-schedule in §3.3) |
| **Government-ID check enforcement point (2026-08-24 ruling):** the ID check no longer gates account creation or joining. The `IEligibilityVerifier.isEligible()` call that enforces counting-tier eligibility is wired at the FR-123 call sites in S-4, S-5, and S-6 (not in S-2). S-2b builds only the credential-capture and DES-100 retention infrastructure that those call sites consume. | `FR-123`, `DES-095`, `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §3.1` |
| Lightweight security review scheduling: typically 4–8 weeks lead time; duration 2–4 weeks | N/A — not yet produced; analogous to audit-firm booking precedent |

**Effort range: LEFT END SHIFTS RIGHT — revised to 6–10 months from coding start (2026-09-14).** Reasoning:

- **Government-ID document check is genuinely new scope** (unlike phone SMS, which replaced an
  existing blank): a second vendor integration (DEP-13), the DES-100 retention/KMS discipline
  (HMAC + KMS pepper provisioning, allowlist/denylist enforcement, audit-log wiring, data-retention
  schedule), and the `subject_id_hash` dedup path. Conservative estimate: +3–6 weeks of
  engineering in S-2 compared with phone-SMS-only. This widens the range at both ends by one
  month; best-case compresses less than before.
- **CON-015 is a hard gate on S-2b (MS-V1-02 ID integration track).** CON-015 carries a "≥ 8 weeks before Gate 2" deadline (2027-05-05 against the 2027-06-30 v1 gate; legal opinion ~8 weeks → must start by **2027-03-10** for the Gate-2 line item) with status NOT STARTED. But the tighter constraint is S-2b itself: the ID-credential capture and DES-100 retention work must be complete before S-4/S-5/S-6 can wire the counting gates. S-2b should start by 2026-11 at the latest to maintain the schedule. A legal opinion of 8 weeks means CON-015 must start by 2026-09-07 to clear for a 2026-11 S-2b start. **CON-015 is NOT yet late as of 2026-08-24 (latest start 2026-09-07 for S-2b — 14 days away; basis: S-2b must start by 2026-11-01; 2026-11-01 − 56 days = 2026-09-07), but the window is critically short. It must start immediately. Sofia Marchetti owns this.** If CON-015 slips, S-2b slips, and S-4/S-5/S-6 counting gates slip with it — but S-2a, S-3 are not blocked. **2026-08-24 ruling update:** the phone-only path (S-2a) is NOT a CON-015 dependency. This partially decouples the schedule: S-2a + S-3 can proceed while CON-015 is being obtained, protecting the joining and party-lifecycle functionality from the legal delay. If CON-015 slips, the left end of the COUNTING-gate build slips but the platform can still open for open-tier participants.
- **Three vendor dependencies** (DEP-11, DEP-12, DEP-13): DEP-11 and DEP-12 must be contracted before S-2a (phone-only track) begins; DEP-13 must be contracted before S-2b (ID integration track) begins. Each carries a 4–8 week procurement lead time. The critical item is DEP-13 (ID-verification provider) which requires a no-retention contractual clause — this is not a commodity procurement and may take longer. All three procurement processes must be initiated immediately (see back-schedule in §3.3 — DEP-11/12/13 latest start 2026-09-19, 26 days from 2026-08-24; basis: S-2 no later than 2026-11-14 minus 56 days = 2026-09-19; none contracted yet).
- **Auth mechanism (phone/SMS + spam layer):** net neutral as assessed at v2.3.0 — reasoning unchanged.
- **Database vendor** still open — no change to range.
- **Phase-1 reuse** still valid at the lower end.
- No structured v1 re-estimate artifact exists; this range revision is first-principles; it is not a plan commitment. Any appetite change is for the approver.

**What is reused vs new:**

| Component | Status |
|-----------|--------|
| `packages/protocol` (governance rules, threshold maths, tier rules) | **Reused unchanged** |
| `packages/contracts` — petition, party, registry contracts | **Reused** (audit-anchoring subset) |
| `apps/web` + `packages/ui` (wireframe components, design system ADR-023) | **Reused** |
| Phase-1 testnet walking skeleton (party lifecycle, proposals, public tally) | **Reused as base** |
| Circom circuits, ZK verifier, MACI, ceremony tooling | **Not built in v1** |
| Conventional auth + account layer — phone-based SMS + government-ID doc check (FR-132, ADR-025) | **New** |
| DES-100 field-level retention discipline (HMAC + KMS pepper, allowlist/denylist, subject_id_hash) | **New** |
| Spam-resistance layer — VoIP detection + velocity/device checks (FR-133, DES-099) | **New** (vendor integration) |
| Relational database schema (membership, ballot, manifesto) | **New** |
| `IEligibilityVerifier` v1 implementation (phone auth backing, DES-095) | **New** |
| `IBallotService` v1 implementation | **New** |
| FR-131 honesty-notice component (DES-098, SCR-13/SCR-14) | **New** |

#### 3.5.4 v1 production-readiness bar

v1 is exempt from the ceremony, the coordinator committee, and the two heavy ZK audits (NFR-009
Definition B path). v1 DOES need the following before it is production-grade and public:

| # | Item | Standard | Owner | Status |
|---|------|----------|-------|--------|
| PR-1 | **Lightweight independent security review / penetration test** — OWASP-class web / API / authn / authz scope. NOT circuit cryptography. Covers: session management, CSRF/XSS/injection, broken access control, authentication bypass, API authorisation. **v2.3.0 scope (auth rulings):** phone-auth OTP flow and session lifecycle; SIM-swap and number-recycling account-takeover scenarios (RISK-36); spam-resistance layer false-positive path (verify no legitimate citizen is hard-blocked, RISK-37); vendor API security posture (DEP-12, RISK-38). **v2.5.0 scope (identity ruling):** government-ID check flow and provider integration (DEP-13); verify-and-discard field discipline — assert that the DES-100 denylist fields are genuinely absent from all stores (field-level audit, not just policy assertion); pepper and KMS handling — confirm pepper is KMS-held and not co-located with the hash store (RISK-43); confirm vendor contractual no-retention clause is in force before launch (Doc 01 §E1 delivery condition — RISK-41); no-ID exclusion user path does not expose internal decision data. | OWASP Top 10 + API Security Top 10; FR-132; FR-133; ADR-025; DES-100 | Head of Security (Rafael Duarte) to engage external firm | NOT STARTED |
| PR-2 | **Accessibility audit** — WCAG 2.2 AA conformance on all primary flows (`NFR-011`, Must; not DEFERRED). Zero Level A or AA failures at v1 launch. | `NFR-011` | Nadia Hassan | NOT STARTED |
| PR-3 | **Load / performance verification** — p95 write-path latency < 2s (`NFR-006`); availability 99.5% monthly (`NFR-007`); test at v1-applicable `NFR-008` user volume (scaled for v1 pilot scope — no formal v1 target yet) | `NFR-006`, `NFR-007`, `NFR-008` (v1-scoped) | Chen Wei (SRE) | NOT STARTED |
| PR-4 | **Rollback drill** — v1 conventional infrastructure rollback (previous version restored in < 15 min, `NFR-020`); evidenced before v1 gate. Note: v1 does not have an immutable core; rollback is a standard deployment rollback. | `NFR-020` | Chen Wei (SRE) | NOT STARTED |
| PR-5 | **Staged rollout** — 1 → 10 → 50 → 100% in the lead pilot jurisdiction, each stage metric-gated. Minimum 5 days at each stage. | Doc 13 §9 | Chen Wei (SRE) | NOT STARTED |
| PR-6 | **Honesty-notice + flag-don't-block verification in the release checklist** — (a) confirm that every ballot submission code path triggers the SCR-13 non-dismissable notice and the SCR-14 post-vote notice (`FR-131`); (b) confirm that the `FR-131` honesty notice carries the one-account-per-phone caveat (`FR-132`) and the government-ID check disclosures (H-17/H-18) — H-19 (no COUNTING-tier eligibility without government ID) is surfaced at the COUNTING-action entry points in S-4/S-5/S-6, not at account creation; (c) confirm no product material uses the words "private", "anonymous", "receipt-free", "secure", or "one-person-one-vote" to describe v1 voting or v1 eligibility; (d) confirm **no code path hard-blocks** a user solely on a fraud flag (`FR-133` flag-don't-block invariant) — rate-limit only, with a clear user-facing path for legitimate citizens to appeal or bypass (RISK-37); (e) confirm the H-19 disclosure (citizens without a government ID cannot take COUNTING actions in v1; open-tier participation remains available with phone only) is prominent at the COUNTING-action entry point (first attempt at strength contribution, binding vote, or candidacy), not buried or absent; (f) **FR-131 clause (d) open-tier non-counting disclosure (2026-08-24 ruling):** confirm that every code path where an open-tier user (phone-only, no ID check) attempts a COUNTING action (FR-123: strength contribution, binding vote, candidacy) displays a clear non-dismissable disclosure stating that the action requires COUNTING-tier eligibility and directing the user to the ID verification flow; confirm that the open-tier participation path (reading, following, discussing, organising) is clearly available without the ID check; **evidenced by a documented code-path trace for each of the three COUNTING actions before the v1 gate.** | `FR-122`, `FR-123`, `FR-131`, `FR-132`, `FR-133`, `DES-095`, `DES-098`, Doc 02 §16.4 H-01..H-19 | Nadia Hassan (notice + FR-132 caveat + H-17/18/19 + FR-131 clause (d) disclosure); Ji-woo Park (checklist + FR-133 hard-block scan + counting-gate code-path trace) | NOT STARTED |
| PR-7 | **Open-source readiness** — README honesty register (`H-01`..`H-19` from Doc 02 §16.4 — includes H-15 no one-person-one-vote guarantee, H-16 phone number stored (hashed), H-17 vendor sees the document during signup, H-18 derived identifier retained, H-19 citizens without a government ID cannot take COUNTING actions in v1 (open-tier participation remains available)); contribution docs (CONTRIBUTING.md, CODE_OF_CONDUCT.md); LICENCE file; GitHub issue templates. | Doc 02 §16.4 H-01..H-19 | product-owner (Priya Raghunathan) + engineer (Samuel Oyelaran) | NOT STARTED |
| PR-8 | **Legal review** — `CON-015` (independent legal opinion on Aadhaar API usage within the data-minimisation posture) remains a Gate-2 line item; it applies to both Definitions. Per-jurisdiction legal review required for any jurisdiction where v1 is deployed (`CON-005`, `NFR-015`). | `CON-015`, `CON-005`, `NFR-015` | Sofia Marchetti | NOT STARTED — Gate-2 blocker |
| PR-9 | **Doc 04 (Test Strategy) review debt** — a passing technical-mode document-review of Doc 04 v1.0.2. Applies to both Definitions. | VEKTOR review loop | PM to assign neutral reviewer | OPEN — Gate-2 blocker |
| PR-10 | **RTM zero gaps in v1-scoped Must rows** — `BR → FR/NFR → DES → US → TC` closed for all Must FRs in the v1 Must set (110 = 114 total Must − 4 DEFERRED-v2 Must FRs: FR-030, FR-031, FR-082, FR-086; includes FR-132 and FR-133); verified independently by reviewer-qa. | Doc 08 / VEKTOR DoD | Ji-woo Park (tester); Rafael Duarte (reviewer-qa) | NOT STARTED — 114 open Must rows currently |
| PR-11 | **FR-131 clause (d) non-counting disclosure and counting-gate enforcement — evidenced before the v1 gate (2026-08-24 ruling).** Confirm and evidence: (a) every COUNTING-action call site (strength contribution in S-4, binding vote in S-5, candidacy in S-6) calls `IEligibilityVerifier.isEligible()` and — when the user is open-tier (no government ID) — displays a non-dismissable FR-131 clause (d) disclosure stating that the action requires COUNTING-tier eligibility with a clear path to ID verification; (b) no COUNTING action is silently permitted for an open-tier user; (c) all three counting-action entry points have been covered by the code-path trace (PR-6(f)); (d) the open-tier participation path (reading, following, discussing, supporting, organising) is confirmed accessible without any ID check. Evidence: documented test traces (`TC-####` covering each of the three FR-123 call sites) showing the correct routing for verified vs open-tier users; confirmed in the RTM (Doc 08). | `FR-122`, `FR-123`, `FR-131`, `DES-095`, RISK-46 | **Ji-woo Park** (test traces, TC-#### for all three FR-123 call sites); Rafael Duarte (reviewer-qa sign-off on counting-gate coverage) | NOT STARTED |

**On NFR-009 re-reading for v1: CONFIRMED by approver (2026-08-23).** NFR-009 specifies two
independent audits (protocol + circuits) as Must requirements for Definition B. For Definition A
(v1), the approver has confirmed: **one OWASP-class pen test** (PR-1) suffices; the two
cryptographic audits remain binding for Definition B and are not weakened. This is a ratified
re-reading, not a plan recommendation. See `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4`.

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
- **Definition-B Gate-2 (MS-13) — re-based after the v1 gate (2027-06-30); specific offset
  to be planned when Definition B re-enters design→build — deliberately not fixed now
  (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3).** The strategy is **sequential**: v1
  (Definition A) ships first; Definition B then re-enters the SOP at the top and is built in the
  open with contributors. Option (c) (overlap) is **explicitly rejected by the approver**: capacity
  is single-track and A-first is deliberate. **Superseded fixed date: 2027-05-14** — a pre-split
  artifact that predated the Definition-A / Definition-B separation; never a valid post-split
  Definition-B Gate-2 target; **retired 2026-08-24** (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md
  §3.3; RISK-44 closed via option (a)). The prior "2027-03-15" carry-forward from the 2026-08-21
  budget ruling matched no artifact and was already closed when 2027-05-14 was confirmed as the
  Definition-B Gate-2 referent; both figures are now superseded and retired. The existing critical
  path structure (MS-06 circuit freeze → MS-07 ceremony logistics → MS-08 batched ceremony →
  MS-09/MS-10 audits → MS-11/MS-12 MACI integration → MS-13 Gate 2) is the **Definition-B
  programme** unchanged; its absolute dates will be set when Definition B re-enters.
- **v1 launch-readiness gate (MS-V1-LRG): 2027-06-30. APPROVER-CONFIRMED (Rathish, 2026-08-24;
  DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md).** The existence of a separate v1 launch-readiness
  gate is confirmed by the approver. Basis: coding start 2026-09-14; revised effort range 6–10
  months (2027-03-14 … 2027-07-14); 2027-06-30 sits at ~9.5 months, deliberately toward the
  conservative end because DEP-11/DEP-12/DEP-13 are all un-contracted (4–8 week procurement lead
  times) and CON-015 is NOT STARTED while gating stage S-2b. Previously APPROVER-DELEGATED per
  `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.1`; upgraded to APPROVER-CONFIRMED 2026-08-24.
  The back-scheduled latest-start dates are given in §3.3. See also
  `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4`.

> ✅ **RESOLVED — RISK-44 CLOSED (Rathish, 2026-08-24).** The incoherence between the
> Definition-B Gate-2 (formerly 2027-05-14) and the v1 gate (2027-06-30) is resolved via
> **option (a)**: the Definition-B Gate-2 date is re-based to fall after the v1 gate. The strategy
> is sequential — v1 ships first, then Definition B re-enters the SOP and is built in the open
> with contributors. Option (c) (overlap) is explicitly rejected. The specific offset for the
> re-based Definition-B Gate-2 will be planned when Definition B re-enters design→build — it is
> **deliberately not fixed now**. Source: DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3.
- **T-01..T-05 Charter tensions: CONFIRMED** by approver (2026-08-23) — deferred-with-disclosure dispositions accepted as recorded in Doc 03 §10.13.7. No further action required on T-01..T-05.

#### 3.5.6 Charter tensions — dispositions (v1 scope; all ruled)

Charter tensions surfaced by the auth rulings and identity ruling (2026-08-23). All tensions now have a final disposition. **T-01..T-05: CONFIRMED** by approver (deferred-with-disclosure accepted; Doc 03 §10.13.7). **T-06: ACCEPTED — DEFERRED WITH DISCLOSURE** (Rathish, 2026-08-24; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3`). **T-07: RESHAPED — PENDING CON-015** legal opinion (the legal input is outstanding; approver confirmation follows when CON-015 clears; unchanged from 2026-08-23). **Gov-ID gate vs BR-003/FR-020 (formerly unlabelled, mislabelled T-08 in v2.7.0): RESOLVED** (Rathish, 2026-08-24; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §3.2/§4.5`) — government-ID check gates COUNTING only (not joining); BR-003/FR-020 intact absolutely. **T-08 (FR-004 concentration vs single-vendor ID-check): ARCHITECT-RESOLVED** (Doc 03 §10.13.7; 2026-08-23). **Naming collision ("supporter level" = FR-122 open/unverified tier): CONFIRMED-CLOSED** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.1) — "supporter level" confirmed as the human-readable label for the FR-122 open/unverified membership tier; no structural ambiguity survives.

| ID | Tension | Impact on v1 | Status |
|----|---------|--------------|--------|
| **T-06** | Charter Rule 1 (one human, one vote) vs v1 phone-auth — v1 ships with Charter Rule 1 visible but without a mechanism to enforce it. The government-ID check improves Sybil-resistance (`subject_id_hash` dedup prevents one person from registering twice from the same document) but does not enforce one-human-one-vote (multiple legitimate IDs vector remains). | H-15 covers the disclosure; `getProperties().onePersonOneVote = false` — unchanged. FR-131 honesty notice must carry the caveat (PR-6). Formalised by architect in Doc 03 v2.6.0. | **ACCEPTED — DEFERRED WITH DISCLOSURE** (Rathish, 2026-08-24; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3`). Multiple-legitimate-IDs vector remains; not closed. |
| **T-07** | FR-003 (no identity data at rest) vs v1 identity data storage — v1 stores phone_hash, subject_id_hash, id_verified_flag, age_verified, issuing_region, verified_at. DES-100 governs field-level retention; HMAC + KMS pepper makes these non-reversible without the pepper. FR-003 reclassified PARTIAL. NFR-010 tension (data sent to DEP-12 and DEP-13 vendors) remains. | DES-100 and ADR-025 §(e) govern. CON-015 legal opinion governs final disposition for the India/Aadhaar context. H-16/H-17/H-18 cover disclosure. Architect formalised in Doc 03 v2.6.0. | **RESHAPED — PENDING CON-015 legal opinion** (unchanged from 2026-08-23; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.4`). Approver confirmation after CON-015 clears. |
| **Gov-ID gate vs BR-003/FR-020 (Doc 02 §16.5 row)** | Government-ID vs BR-003 / FR-020 — the 2026-08-23 identity-verification ruling was read as adding a hard document-gate at enrolment. BR-003 specifies open, equal membership without discrimination. FR-020 governs membership requirements. Whether requiring a government-issued ID is compatible with the no-discrimination posture was an open policy question. *(Note: mislabelled T-08 in v2.7.0; this tension is not T-numbered — see real T-08 row below. Corrected v2.7.1.)* | The 2026-08-24 ruling resolves the tension: the government-ID check does NOT gate joining (BR-003/FR-020 intact and absolute); it gates COUNTING-tier eligibility (FR-123) only. An undocumented person is not excluded from the platform — they participate fully at the open tier (FR-122). H-19 corrected to reflect COUNTING exclusion, not platform exclusion. | **RESOLVED** (Rathish, 2026-08-24; `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §3.2/§4.5`). The government-ID vs BR-003/FR-020 tension is closed. Doc 02 §16.5 AWAITING-CONFIRMATION row also RESOLVED. |
| **T-08** | FR-004 plurality intent (attestor concentration risk) vs v1 single-vendor ID-verification provider — FR-004 requires ≥ 2 independent attestors; v1 uses a single DEP-13 vendor for government-ID document check. Whether this conflicts with FR-004's concentration cap was an open design question. | FR-004's ≥ 2 independent attestors requirement applies to the v2 protocol-level attestor stack; it does NOT apply literally to the v1 application-layer ID-verification vendor. `IEligibilityVerifier` (DES-095) provides the abstraction boundary. Concentration risk recorded as design debt (ADR-025 §(e)). | **ARCHITECT-RESOLVED** (Doc 03 §10.13.7; 2026-08-23). Single-vendor accepted as Phase-1 dated limitation by analogy to OI-20; FR-004 literal requirement satisfied at protocol level (ADR-021); Phase-2 multi-vendor option to be assessed (ADR-025 §(e)). |

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
| DEP-11 | **SMS delivery provider** — third-party OTP delivery for the `FR-132` / `ADR-025` phone-based authentication flow; must support the pilot jurisdictions before MS-V1-02 | Vendor | Rafael Duarte | Before MS-V1-02 | **Not started** | Without a contracted provider, the v1 OTP flow cannot be built; provider selection must account for coverage in pilot regions, deliverability SLAs, and cost-per-message against `NFR-005` (see `RISK-35`). Fallback: a secondary provider for redundancy; no fallback for the flow itself — SMS OTP is the only v1 auth mechanism |
| DEP-12 | **Phone-intelligence API vendor** — third-party service for VoIP/virtual-number detection and device/velocity fraud signals, backing the `FR-133` / `DES-099` spam-resistance layer; must be contracted before MS-V1-02 | Vendor | Rafael Duarte | Before MS-V1-02 | **Not started** | Without a contracted vendor, the spam-resistance layer cannot be implemented; vendor must provide a data-processing agreement (`RISK-38`), a published false-positive rate (`RISK-37`), and a dispute/appeal mechanism. Fallback: if vendor is unavailable, the spam layer runs on device/velocity signals only (no VoIP detection) — accepted residual for the pilot subject to approver confirmation |
| DEP-13 | **ID-verification provider** — third-party service for government-ID document check, backing the `FR-132` / `ADR-025 §(e)` verify-and-discard identity flow; must be contracted (with a **contractual no-retention clause**) before MS-V1-02 S-2b (ID integration track). This is the hard pre-condition for the Doc 01 §E1 promise ("We do not keep your identity documents — they are checked and discarded"). **2026-08-24 ruling update:** the ID check is no longer run at account creation; it runs at the FR-123 COUNTING-action call sites (S-4/S-5/S-6). DEP-13 is still required to build the credential-capture and DES-100 retention infrastructure in S-2b. | Vendor | Rafael Duarte | Before MS-V1-02 S-2b | **Not started — CRITICAL** | Without a contracted provider, the government-ID credential-capture flow (S-2b) cannot be built, which means COUNTING-tier eligibility (S-4/S-5/S-6) cannot be wired. Open-tier participation (S-2a, S-3) is not blocked. Provider must: (a) agree contractually not to retain the identity document or biometric data beyond the lookup transaction (`RISK-41`); (b) support the pilot jurisdictions' document types; (c) provide a data-processing agreement covering `ADR-025 §(e)`; (d) be assessed for state-compulsion risk (`RISK-40`, Doc 01 §E3). No fallback for the COUNTING-gate path — without DEP-13, users cannot achieve COUNTING-tier eligibility in v1. |

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
> `RISK-35`…`RISK-39` are **new at Doc 13 v2.3.0** — v1 phone-auth and spam-resistance vendor
> risks (SMS deliverability, SIM-swap/account-takeover, phone-intelligence false-positive,
> vendor privacy exposure, no-phone exclusion residual).
> `RISK-40`…`RISK-43` are **new at Doc 13 v2.5.0** — v1 government-ID check risks (vendor
> concentration/state-compulsion, no-retention clause failure, no-ID exclusion adoption impact,
> pepper/KMS brute-force residual).
> `RISK-44`…`RISK-46` are **new at Doc 13 v2.7.0** — v1-gate vs Definition-B Gate-2 scheduling
> incoherence (DECISION REQUIRED); non-counting participant class depressing measured party
> strength; counting-gate enforcement distributed across S-4/S-5/S-6 (consistency/regression risk
> against DES-095 seam). Source: `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`. Moved into main
> table at v2.7.1 (ISS-03 rework — rows were misplaced before the table header at v2.7.0).
>
> **Maintenance note — H-register range:** The honesty-register range `H-01`..`H-NN` appears in
> **two** places in this document: (1) the stage/PR narrative rows (banner, MS-V1-09, PR-6, PR-7)
> and (2) the §6 risk rows for RISK-31 and RISK-33. Both sites must be swept together on every
> Doc 02 §16.4 register expansion — updating only the stage/PR rows will silently leave the risk
> mitigations citing a stale range (this has occurred at v2.3.0, v2.4.0, and v2.5.0 in error).

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
| RISK-22 | **Stolen-credential takeover (Change 7)** — an attacker who obtains a victim's credential (e.g., a stolen document or cloned eID) initiates the nullifier-collision recovery flow (`FR-071`) to seize the victim's party membership and voting rights | 3 | 5 | 15 | `FR-072` seven-day delay + active-key veto; `NFR-016` ≥ 99% legitimate recovery success within 14 days; notification to registered channel at initiation; veto window equal to delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| RISK-23 | **Veto suppression (Change 7)** — an attacker simultaneously compromises the victim's registered notification channel to suppress the recovery veto notification, preventing the legitimate holder from cancelling before key rotation completes | 2 | 5 | 10 | `FR-072` active-key veto independent of notification channel where feasible; secondary out-of-band notification required; `NFR-016` fraud rate ≤ 0.01%. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| RISK-24 | **Recovery raced against a live ballot (Change 7)** — an attacker initiates recovery during an active ballot window, briefly holding dual control of an active credential, and attempts to cast a replacement ballot under the original key before rotation completes | 2 | 5 | 10 | `FR-072` voting barred for the recovering credential during the seven-day delay; active-key veto; `FR-032` only the last valid ballot counted; ballot-scope nullifiers prevent double-counting. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | `ADR-018`, `DES-071` | Rafael Duarte | Open |
| RISK-25 | **Public-tier disclosure enables targeting and harassment** — workers, candidates, and office-holders whose identities are public may be targeted in the physical world | 3 | 4 | 12 | `FR-084` disclosure schedule limits what is demanded; `FR-063` ballot direction never disclosed; `NFR-024` harassment-rate metric (mechanical, no human discretion); `FR-103` individual conduct votes private | `FR-084`, `FR-063`, `NFR-024` | Daniel Okonkwo | Open |
| RISK-26 | **Analytics prohibition slows UX iteration and masks funnel failures** — with no per-user telemetry, product teams cannot detect individual drop-off points or run A/B tests | 4 | 2 | 8 | `NFR-019` aggregate-only governance dashboards; `NFR-022` usability studies on consenting panels; TD-08 records the deliberate trade-off | `NFR-019`, `NFR-022` | Yuki Sato | Open |
| RISK-27 | **Committee soft power — agenda capture despite no formal power** — a steering committee that sets meeting agendas and controls facilitation can steer outcomes without holding decisional power | 3 | 3 | 9 | `FR-090` public proposal authorship with equal standing for competing proposals; `FR-087` public committee composition and minutes; `FR-089` mechanical expiry with no standing renewal path | `FR-090`, `FR-087`, `FR-089` | Tomás Ferreira | Open |
| RISK-28 | **Conduct and removal votes weaponised for harassment campaigns** — coordinated members flood conduct votes or removal votes against a targeted individual | 3 | 4 | 12 | `FR-104` affirmative quorum with UT-0220 growth-surge defence; statement right mandatory before window closes; `NFR-024` harassment-rate metric; `FR-044`-style cooldowns as governance constants | `FR-104`, `NFR-024` | Daniel Okonkwo | Open |
| RISK-29 | **Non-violence clause drags the platform toward content judgment** — enforcing one mandatory political value creates pressure to enforce others | 2 | 4 | 8 | Code enforces presence-check only (`FR-077`); enforcement beyond presence belongs to members and law; `FR-056` jurisdiction-scoped display filtering boundary unchanged; TD-10 records the accepted tension | `FR-077`, `FR-056` | Sofia Marchetti | Open |
| RISK-30 | **Trust-anchor governance latency** — member-vote revocation is slower than an operator kill-switch; a compromised anchor can mint Sybils during the emergency-variant timelock | 2 | 5 | 10 | `FR-112` expedited emergency variant with published (shortened but non-zero) duration; `FR-004` attestor concentration cap limits Sybil yield per compromised anchor; `NFR-004` quarterly audit; residual accepted — cites SC-13/SC-14 from `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`. _(ADR-020 §4: epoch cap bounds blast radius.)_ | `FR-112`, `ADR-020` | Rafael Duarte | Open — accepted |

| **RISK-31** | **Operator-trust concentration in the v1 conventional database** — v1 stores member↔party mapping, vote direction, and ballot data in a conventional database; a database administrator or any sufficiently privileged operator can see individual member affiliations and votes at the application layer. In ZK designs (Definition B), this data does not exist to query; in v1 it does. | 4 | 4 | 16 | `FR-131` requires a non-dismissable honesty notice at every vote-cast surface stating the DB can see vote direction and membership; the full honesty register `H-01`..`H-19` (Doc 02 §16.4) is required in the public README — H-18 explicitly covers the `subject_id_hash` and `phone_hash` derived-identifier at-rest surface. Organisational access controls (least privilege on DB credentials). The `IBallotService`/`IEligibilityVerifier` seams (`ADR-024`) ensure v2 removes this data from the DB path without a rewrite. **Trigger:** any confirmed DB-level access to vote or membership data by an unauthorised party → stop-the-line escalation | `ADR-024`, `DES-095`, `DES-096`, `FR-131` | Rafael Duarte | **Open — new (v1)** |
| **RISK-32** | **OTP / auth-path compromise in v1** — v1 uses phone-based SMS OTP authentication (`FR-132`, `ADR-025`) rather than ZK nullifiers; an OTP interception (via SS7 hijack), SIM-swap at the network layer (see `RISK-36`), OTP replay in the grace window, or session-fixation vulnerability could allow an attacker to authenticate as a legitimate citizen and cast votes or enrol without their knowledge; ZK nullifiers structurally prevent this class of attack in Definition B | 3 | 5 | 15 | OWASP auth hardening applied to the OTP flow: strict OTP expiry (≤ 60 s), single-use enforcement, rate limiting on OTP requests (backed by `DES-099` spam layer), session expiry; `ADR-025 §(c-iv)` records the SS7/SIM-swap residual as accepted for v1. `RISK-36` covers the SIM-swap / number-recycling vector specifically. PR-1 lightweight security review / pen test explicitly covers the SMS OTP auth path. `NFR-016` secure coding standard applied throughout. **Trigger:** any confirmed OTP interception or session compromise → immediate flag kill on the affected ballot surface, incident escalation, and PR-1 re-audit | `ADR-024`, `ADR-025`, `DES-095`, `FR-132`, `NFR-016` | Rafael Duarte | **Open — new (v1)** |
| **RISK-33** | **v1 mistaken for the guarantee product** — v1 lacks ZK anonymity, receipt-freeness, and coercion-resistance; if press, partners, or users describe v1 as providing these guarantees, trust in the political process and the brand is damaged, and the platform may attract use-cases it cannot safely serve | 4 | 4 | 16 | `FR-131` (Must): non-dismissable plain-language honesty notice at every vote-cast surface, stating "NOT anonymous, NOT receipt-free, NOT coercion-resistant"; MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting in any product material. `H-01`..`H-19` honesty register in the public README (PR-7) — H-15 explicitly states no one-person-one-vote guarantee in v1; H-16 states phone number is stored (hashed); H-17 states the identity-verification vendor sees the government-issued document during signup; H-18 states derived identifiers (`subject_id_hash`, `phone_hash`) are retained at rest; H-19 states that citizens without a government-issued ID cannot take COUNTING actions in v1 (contribute to official strength, vote in binding decisions, stand as a candidate) — open-tier participation (FR-122) remains available with phone verification alone. All partner onboarding materials must repeat the disclosure. PR-6 release checklist verifies no false claims in shipped materials. **Trigger:** any confirmed false representation of v1 as providing ZK guarantees or one-person-one-vote → immediate public correction and PR-6 re-audit | `FR-122`, `FR-123`, `FR-131`, `FR-132`, `DES-098`, Doc 02 §16.4 H-01..H-19 | Nadia Hassan | **Open — updated v2.7.0 (H-19 meaning corrected)** |
| **RISK-34** | **v1 conventional code ossifying against the v2 swap** — if the engineer builds v1 auth/ballot logic directly into components, bypassing the `IEligibilityVerifier` and `IBallotService` seam interfaces (`DES-095`/`DES-096`), v2 ceases to be an implementation swap and becomes a rewrite; the approver's reuse guardrail is violated and the v2 programme cost and risk increase materially | 3 | 5 | 15 | `ADR-024` mandates the seam interfaces as the stable contracts; no auth or ballot logic may bypass them. CI coverage of the interface contracts (integration tests verifying that only the seam interface is called, never the concrete implementation directly). MS-V1-01 commit of the interface definitions before any v1 implementation code is merged. **Trigger:** any pull request adding auth or ballot logic that calls a concrete implementation class directly (bypassing the seam interface) is a merge blocker — reviewer-qa must catch this at code review | `ADR-024`, `DES-095`, `DES-096` | Samuel Oyelaran | **Open — new (v1)** |
| **RISK-35** | **SMS deliverability / cost risk against NFR-005** — the SMS OTP flow (`FR-132`, `DEP-11`) incurs per-message costs; bulk enrolment spikes, retries, and delivery failures in low-coverage regions could push the cost-per-action above the `NFR-005` envelope or create enrolment friction that disenfranchises citizens | 3 | 3 | 9 | Cost modelling against `NFR-005` envelope before vendor selection; choose a provider with coverage in the pilot jurisdictions; implement retry caps and exponential back-off; monitor cost-per-OTP in staging before rollout. `FR-132` allows only one OTP per session attempt. **Trigger:** staging OTP cost > 1.2× modelled per-action budget → re-evaluate provider or flow | `FR-132`, `NFR-005`, DEP-11 | Chen Wei | **Open — new (v1)** |
| **RISK-36** | **SIM-swap / number-recycling account takeover** — an attacker obtains a new SIM mapped to a victim's phone number (via SIM-swap fraud or number recycling by the carrier) and receives OTPs intended for the victim, gaining control of their party membership and voting rights; interacts with the nullifier-collision recovery flow (`FR-071`) if the victim later attempts recovery | 3 | 4 | 12 | `DES-099` spam-resistance layer flags velocity anomalies around OTP requests; out-of-band account-recovery channel (`FR-071`, `FR-072`) allows the legitimate holder to reclaim the account with a seven-day delay and active-key veto. `ADR-025` §(c-iv): SIM-swap is an accepted residual for v1 — ZK nullifiers in v2 structurally eliminate it. `NFR-016` fraud rate ≤ 0.01%. **Trigger:** any confirmed SIM-swap compromise → stop-the-line incident; PR-1 scope includes this scenario | `FR-071`, `FR-072`, `FR-132`, `ADR-025`, `DES-099`, `NFR-016` | Rafael Duarte | **Open — new (v1)** |
| **RISK-37** | **Phone-intelligence vendor false-positive rate driving wrongful rate-limiting of legitimate citizens** — VoIP users (including eSIM users, citizens in low-connectivity regions using VoIP apps, and dual-SIM travellers) may be flagged as suspicious by the phone-intelligence API (`DEP-12`, `DES-099`); being wrongly rate-limited from a political platform is a serious civil harm | 4 | 4 | 16 | `FR-133` flag-don't-block invariant: the system MUST NOT hard-block on a fraud flag — rate-limit only, with a clear first-class path for a legitimate citizen to proceed or appeal; PR-1 and PR-6 verify no code path hard-blocks. Vendor selection criteria (`DEP-12`) must include published false-positive rate and a dispute / appeal mechanism. **Trigger:** any false-positive complaint from a legitimate citizen → incident review; any confirmed hard-block on a fraud flag → stop-the-line escalation | `FR-133`, `DES-099`, DEP-12, `ADR-025` | Rafael Duarte | **Open — new (v1)** |
| **RISK-38** | **Vendor privacy exposure — phone numbers sent to third-party phone-intelligence API** — v1 enrolment phone numbers are transmitted to the spam-resistance vendor (`DEP-12`) for VoIP/fraud detection; this creates a third-party record of platform enrolment that conflicts with `NFR-010` (no data shared with third-party ad networks or analytics) and the `FR-003 PARTIAL` posture (phone number as identity data at rest) | 3 | 4 | 12 | `ADR-025 §(c-iii)`: vendor data-processing agreement required; vendor MUST NOT retain phone numbers beyond the lookup transaction; response is a risk score only (not the number). Vendor privacy posture assessed in `DEP-12` procurement. `PR-1` security scope includes vendor API posture. Residual: any vendor breach leaks enrolment phone numbers. **Trigger:** any evidence of vendor retaining phone-number data → immediate vendor suspension and incident report | `FR-003` (PARTIAL), `NFR-010`, `FR-132`, `ADR-025`, DEP-12 | Marcus Adeyemi | **Open — new (v1)** |
| **RISK-39** | **No-phone exclusion residual** — a citizen without a mobile phone number (including elderly citizens, those in low-connectivity regions, and those who choose not to hold a phone) cannot enrol in v1, creating a class of excluded citizens on a platform that claims democratic participation; this parallels the ADR-016 Aadhaar-exclusion precedent for the Phase-1 pilot | 3 | 3 | 9 | The exclusion is an accepted v1 limitation: `ADR-025 §(c-v)` records it explicitly. `H-16` (Doc 02 §16.4) discloses phone-number requirement in the README. v2 ZK enrolment does not require a phone. `ADR-016` precedent: the Aadhaar-exclusion risk was accepted for the Phase-1 pilot under `CON-001` (pilot scope); the same rationale applies here — v1 is a pilot-scope product, not a universal-access product. **Trigger:** any pilot jurisdiction in which phone penetration < 70% of adult population → flag to approver before pilot launch | `FR-132`, `ADR-025`, `CON-001`, H-16 | Grace Mbeki | **Open — new (v1)** |
| **RISK-40** | **ID-vendor concentration / state-compulsion** — the government-ID document check relies on a single third-party provider (DEP-13); a determined state can compel that provider to reveal who used the ID-check flow, or to deny service to specific individuals. **2026-08-24 ruling update:** denial of DEP-13 service now means a citizen cannot achieve COUNTING-tier eligibility (FR-123) — not that they cannot join the platform (FR-122 open tier remains available). The compulsion risk is now specifically: (a) forced disclosure of who holds COUNTING-tier eligibility, and (b) targeted denial of COUNTING-tier eligibility to specific individuals or groups. This composes with the attestor-compulsion residual in Doc 01 §E3. Whether FR-004's plurality requirement applies to DEP-13 in v1 (OI-20 / FR-129 interaction) is an architect deliverable. | 3 | 5 | 15 | `ADR-025 §(e)`: vendor state-compulsion posture assessed in DEP-13 procurement; provider must be selected considering jurisdictional compulsion exposure. `FR-004` concentration cap — architect to determine applicability to DEP-13. `H-17` discloses vendor involvement. If concentration risk is unacceptable in a specific jurisdiction, gate the pilot in that jurisdiction before launch. **Trigger:** any confirmed state-compelled data disclosure by DEP-13 → stop-the-line incident; CON-015 legal opinion must assess compulsion risk | `FR-004`, `FR-122`, `FR-123`, `FR-132`, `ADR-025`, DEP-13, `CON-015` | Marcus Adeyemi | **Open — updated v2.7.0** |
| **RISK-41** | **No-retention clause failure — vendor retains identity documents contrary to contract** — the Doc 01 §E1 promise ("we do not keep your identity documents") is only delivered if the DEP-13 provider's contractual no-retention clause holds. If the vendor retains the document (or a hash of it) in breach of contract, the platform is in breach of its publicly stated privacy promise and potentially of data-protection law. | 3 | 5 | 15 | `ADR-025 §(e)`: contractual no-retention clause is a hard pre-condition for DEP-13 contract execution — no workaround. PR-1 scope includes confirming the clause is in force before launch. Vendor audit rights (DPA) required. Residual: contract breach is possible; the platform's remedy is termination and incident disclosure. **Trigger:** any evidence of vendor retaining documents → immediate vendor suspension, incident report, and public disclosure | `FR-132`, `ADR-025`, DEP-13, `NFR-010` | Sofia Marchetti | **Open — new (v1)** |
| **RISK-42** | **No-COUNTING-tier exclusion's adoption impact** — `H-19` discloses that citizens without a government ID cannot take COUNTING actions in v1 (contribute to official strength, vote in binding decisions, stand as a candidate). Open-tier participation remains available (FR-122). **2026-08-24 ruling update:** citizens without a government ID are no longer excluded from the platform — they can join, read, discuss, support, and organise. However, the O-1 target (250,000 enrolled members) and party-strength metrics (FR-123: contributing to official strength) still depend on COUNTING-tier enrolment. In pilot jurisdictions with low government-ID penetration (stateless persons, undocumented residents, displaced populations), the fraction of participants who can take COUNTING actions may be substantially below the registered-user base, suppressing official party strength numbers and potentially making party activation harder (FR-014 threshold is based on counted strength). This could interact with KC-3 if activation thresholds are never reached. | 3 | 4 | 12 | `H-19` (corrected meaning: COUNTING exclusion, not platform exclusion) required in README and at the COUNTING-action entry point (PR-6 item (e)). Pilot-jurisdiction ID-penetration rate assessed before pilot launch — a low rate depresses the COUNTING participant pool, not the total user base. Gov-ID gate vs BR-003/FR-020 tension RESOLVED (BR-003/FR-020 intact) [v2.7.0 mislabelled this as `T-08`; not a T-numbered tension — corrected v2.7.1]; RISK-42 now concerns COUNTING-tier adoption specifically. Confirm that party-activation thresholds are calibrated against the estimated COUNTING-tier base, not the total enrolled base, in the pilot jurisdictions. Also see RISK-45 (non-counting class depressing measured party strength). O-1 tracking against KC-3 should distinguish total enrolled vs COUNTING-enrolled. **Trigger:** pre-launch estimate of COUNTING-tier participation < 70% of enrolled users in the lead pilot → re-present strength metrics and activation thresholds to approver before launch commitment | `FR-122`, `FR-123`, `FR-132`, `ADR-025`, `CON-001`, H-19, O-1, KC-3 | Marcus Adeyemi | **Open — updated v2.7.0 (premise corrected: COUNTING exclusion, not platform exclusion)** |
| **RISK-43** | **Pepper / KMS compromise enabling phone-hash and subject_id_hash brute-force** — the DES-100 retention scheme stores HMAC-SHA-256 hashes with a KMS-held pepper. If an attacker obtains the DB dump AND the pepper (e.g. via a KMS misconfiguration or insider threat), the hashes become brute-forceable: phone numbers are low-entropy (~10 billion possibilities), and subject_id_hash is similarly bounded. The architect's stated residual in Doc 03 v2.6.0 (In Review). | 3 | 5 | 15 | `DES-100` operational MUST: pepper MUST be KMS-held and not co-located with the hash store; KMS access is separately permissioned, logged, and audited. PR-1 pen test explicitly covers pepper and KMS handling (confirm physical separation and access controls). Pepper rotation cadence defined in the data-retention schedule (DES-100). DB dump alone without the pepper is insufficient for brute-force. Residual: a full KMS compromise + DB dump breaks the scheme; accepted as a platform-level trust anchor. **Trigger:** any evidence of KMS access anomaly or unauthorised DB export → incident response and pepper rotation | `DES-100`, `ADR-025`, `NFR-016`, DEP-13 | Rafael Duarte | **Open — new (v1)** |

| **RISK-44** | **v1-gate vs Definition-B Gate-2 scheduling incoherence — CLOSED — RULED option (a)** — the v1 launch-readiness gate (MS-V1-LRG) was 2027-06-30; the former Definition-B Gate-2 date was 2027-05-14. §3.5.5 had stated that Definition B "re-enters design→build after v1 launch", making a Gate-2 date of 2027-05-14 (47 days before the v1 gate) structurally incoherent. Three resolution options were presented: (a) re-base Definition-B Gate-2 after v1 gate; (b) pull the v1 gate earlier; (c) allow overlap. **Resolved via option (a)** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3): Definition-B Gate-2 (MS-13) re-based to follow the v1 gate (2027-06-30); option (c) explicitly rejected; specific offset to be planned at v2 re-entry — deliberately not fixed now. Superseded fixed date: **2027-05-14** (pre-split artifact, retired 2026-08-24). | — | — | — | **CLOSED — RULED option (a)** (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3). No further trigger or mitigation required — the incoherence is resolved. | `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.2`; `DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3` | Ana-Maria Petrescu | **CLOSED — RULED option (a) (Rathish, 2026-08-24)** |
| **RISK-45** | **Non-counting participant class depressing measured party strength** — under the 2026-08-24 ruling, a potentially large class of participants (phone-only, no government ID) can join parties but their membership does not count toward official party strength (FR-123). If this class is large in the pilot jurisdictions, the measured party strength number — which drives petition thresholds, activation, and the denominator oracle (FR-014/FR-015, ADR-004) — could be substantially lower than total enrolled membership, making it harder to activate parties and potentially discouraging participation. Participants who invest effort but find their contributions do not count toward official strength may disengage or lose trust in the platform's fairness claim. | 3 | 4 | 12 | FR-131 clause (d) and H-19 disclosures must be clear that open-tier participation does not contribute to official strength numbers — so participants understand the distinction upfront, not after investing effort. Threshold calibration (OI-01) MUST account for the expected split between COUNTING and open-tier participants in the pilot jurisdictions. Activation thresholds calibrated against the COUNTING-tier base only (not total enrolled). Monitor COUNTING-tier participation rate as a leading indicator in staging before rollout. **Trigger:** COUNTING-tier enrolment rate < 60% of total enrolled users in the pilot → re-evaluate threshold calibration and present revised targets to approver before launch. | `FR-014`, `FR-015`, `FR-122`, `FR-123`, `FR-131`, `ADR-004`, OI-01 | Marcus Adeyemi | **Open — new (v2.7.0)** |
| **RISK-46** | **Counting-gate enforcement distributed across S-4/S-5/S-6 — regression and consistency risk against DES-095 seam** — the 2026-08-24 ruling moves the FR-123 counting-gate enforcement point from a single location (account creation in S-2) to three separate build stages (S-4: strength contribution; S-5: binding vote; S-6: candidacy). Each stage must independently wire `IEligibilityVerifier.isEligible()` at its COUNTING-action call sites. A missed call site would silently permit an open-tier user to take a COUNTING action without eligibility verification — a correctness and integrity defect. The risk of partial coverage increases as the number of wiring points increases. | 3 | 5 | 15 | `ADR-024` mandates that no auth or ballot logic may bypass the `IEligibilityVerifier` seam (DES-095). CI integration tests MUST verify that each FR-123 call site (strength contribution, binding vote, candidacy) routes through `IEligibilityVerifier.isEligible()` — no direct call to implementation. PR-11 (§3.5.4) requires test traces (`TC-####`) documenting the code-path for each of the three call sites. reviewer-qa checks each S-4/S-5/S-6 merge for counting-gate wiring coverage. **Trigger:** any pull request adding a COUNTING-action path that does not call `IEligibilityVerifier.isEligible()` is a merge blocker — reviewer-qa must catch at code review. | `ADR-024`, `DES-095`, `FR-123`, PR-11 | Samuel Oyelaran (engineer); Rafael Duarte (reviewer-qa sign-off) | **Open — new (v2.7.0)** |

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
| **Later** | Phase 3 | **12 weeks** (2027-04-19 → 2027-07-09; Definition-B placeholder dates derived from retired 2027-05-14 referent — to be re-planned at v2 re-entry) | Headline only | Gate 2; each rollout stage gate |
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

**Budget against USD 4.2M** (Gate 1 2026-08-22 → Gate 2 2027-05-14 ~~(superseded: pre-split Definition-B referent, retired 2026-08-24 per RISK-44 option (a), SCOPE-CLOSURE §3.3; MS-13 re-based after the v1 gate, offset at v2 re-entry; budget figure valid as planning basis — see §13.3)~~ ≈ **10 months** (Definition-B programme placeholder); blended rate per
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
| 2026-08-24 | Delivery split | **v2.8.1 — Rework cycle 1.** Business-mode review FAIL 95% (0C/0H/1M/1L; `artifacts/reviews/13-project-plan-v2.8.0-business-cycle1.md`). Two surgical fixes. **(ISS-01 Medium)** §8.3 budget table header: retirement annotation added to 2027-05-14 (superseded: pre-split Definition-B referent, retired 2026-08-24 per RISK-44 option (a), SCOPE-CLOSURE §3.3; MS-13 re-based after the v1 gate, offset at v2 re-entry; budget figure valid as planning basis — see §13.3); 10-month figure and all cost totals unchanged. **(ISS-02 Low)** §3.1 Phase-3 row and §8.1 wave-appetite Later row: parenthetical added to 2027-04-19 → 2027-07-09 identifying these as Definition-B placeholder dates derived from the retired 2027-05-14 referent, to be re-planned at v2 re-entry. | `artifacts/reviews/13-project-plan-v2.8.0-business-cycle1.md` (FAIL cycle-1, 0C/0H/1M/1L) | Ana-Maria Petrescu |
| 2026-08-24 | Delivery split | **v2.8.0 — v1 scope closure rulings applied (Rathish, 2026-08-24; DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md).** Three approver confirmations applied surgically: (1) **Terminology CONFIRMED-CLOSED:** "supporter level" = FR-122 open/unverified tier; naming collision closed. §3.5.6 preamble updated. (2) **MS-V1-LRG 2027-06-30 APPROVER-CONFIRMED:** all active APPROVER-DELEGATED / "subject to approver's correction" sites for 2027-06-30 upgraded to APPROVER-CONFIRMED (Rathish, 2026-08-24). Sites updated: §3.3 v1/v2 annotation; §3.5.5 MS-V1-LRG bullet. Banner historical entries (v2.1.0, v2.5.0) left unchanged (historical record). (3) **RISK-44 CLOSED — option (a):** Definition-B Gate-2 (MS-13) re-based to follow the v1 gate (2027-06-30); option (c) (overlap) explicitly rejected; single-track capacity confirmed deliberate; specific offset not fixed — to be planned at v2 re-entry. The fixed date 2027-05-14 is retired at all active sites (annotate-don't-delete: superseded date kept visible). Sections updated: banner Read-this-first paragraph; MS-13 milestone row; §3.3 Gate-2 header; §3.3 CON-015 item 11 (2027-03-19 derived deadline retired; S-2b 2026-09-07 sole binding deadline); §3.3 v1/v2 annotation; §3.3 incoherence note (resolved); §3.4 critical path diagram (MS-13 annotated, rollout annotated); §3.4 variance paragraph; §3.5 preamble (RISK-44 CLOSED noted); §3.5.5 (DECISION REQUIRED callout replaced with RESOLVED; sequential strategy stated plainly; option (c) rejected; 2027-05-14 retired); §3.5.6 heading retitled and preamble updated (all tensions ruled; naming collision CONFIRMED-CLOSED). §6 RISK-44 row: CLOSED — RULED option (a) (Rathish, 2026-08-24). RISK-45/46 premises verified — unchanged (both remain Open; premises hold after the ruling). §13.1 Doc 13 self-row updated to v2.8.0 In Review — cycle pending. Cascade debt note added (§13.1): Doc 01/02/03/09/10 cascade debt routed to owners per DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §4.4. §13.3 lever table: 2027-05-14 references annotated as retired. | `DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md`; Doc 02 v2.13.0 (Approved); Doc 03 v2.6.1 (Approved) | Ana-Maria Petrescu |
| 2026-08-24 | Delivery split | **v2.7.2 — Rework cycle 2.** Business-mode review FAIL 95% (0C/0H/1M/1L; `artifacts/reviews/13-project-plan-v2.7.1-business-cycle2.md`). Two surgical fixes. (ISS-C2-01 Medium) Doc 02 v2.13.0 and Doc 03 v2.6.1 "Approved" pins confirmed accurate: both document owners flipped `Status: In Review` → `Status: Approved` on 2026-08-24 (after v2.7.1 submission). Six citation sites (header Source block ×2, §2.1, §3.5.1, §13.1 ×2) strengthened to record the PASS verdict + review-report citation alongside the Approved status in house style. Note: v2.7.1 pins predated the owner flips; the "Approved" label is accurate as of v2.7.2 — timeline honest, not retrofitted. (ISS-C2-02 Low) v2.7.0 banner entry item (6) annotated [mislabelled T-08 in v2.7.0 — corrected v2.7.1] to mirror the §11 v2.7.0 log-entry correction applied in v2.7.1. | `artifacts/reviews/13-project-plan-v2.7.1-business-cycle2.md`; Doc 02 v2.13.0 (Status: Approved, owner flip 2026-08-24); Doc 03 v2.6.1 (Status: Approved, owner flip 2026-08-24) | Ana-Maria Petrescu |
| 2026-08-24 | Delivery split | **v2.7.1 — Rework cycle 1.** Business-mode review FAIL 90% (0C/1H/2M/1L; `artifacts/reviews/13-project-plan-v2.7.0-business-cycle1.md`). Four surgical fixes: (ISS-01 High) T-08 label collision corrected throughout — the §3.5.6 row previously labelled T-08 for the Gov-ID gate vs BR-003/FR-020 tension is relabelled to "Gov-ID gate vs BR-003/FR-020 (Doc 02 §16.5 row)"; real T-08 (single-vendor concentration vs FR-004 — Doc 03 §10.13.7; ARCHITECT-RESOLVED) added to §3.5.6; §3.5 preamble, RISK-42 mitigation, and this log's v2.7.0 entry annotated. (ISS-02 Medium) Upstream pins corrected to Doc 02 v2.13.0 (Approved, PASS 99%; `artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md`) and Doc 03 v2.6.1 (Approved, PASS 97%; `artifacts/reviews/03-architecture-design-sdd-v2.6.1-technical-cycle2.md`) at header Source, §2.1, §3.5.1, and §13.1; §13.1 gate-readiness evidence updated to PASS verdict, v2.12.0 gate-blocker claim removed. (ISS-03 Medium) RISK-44/45/46 rows moved inside main §6 table after RISK-43; duplicate pre-table provenance blockquote removed; §6 header blockquote extended to include RISK-40..46 provenance and maintenance note. (ISS-04 Low) "Already late" imprecision corrected: CON-015 latest start 2026-09-07 for S-2b (14 days away — NOT yet late; must start immediately); DEP-11/12/13 latest start 2026-09-19 (26 days away — NOT yet late; initiation must begin immediately). §3.3 back-schedule table and §3.5.3 prose updated. | `artifacts/reviews/13-project-plan-v2.7.0-business-cycle1.md`; Doc 02 v2.13.0 (Approved); Doc 03 v2.6.1 (Approved) | Ana-Maria Petrescu |
| 2026-08-24 | Delivery split | **v2.7.0 — Government-ID gates COUNTING not joining; MS-V1-LRG 2027-06-30 set; incoherence surfaced; build-order updated; T-06 ACCEPTED; T-08 RESOLVED [v2.7.1 correction: "T-08 RESOLVED" in this entry referred to the Gov-ID gate vs BR-003/FR-020 tension, which was mislabelled T-08 in v2.7.0; the real T-08 (single-vendor concentration vs FR-004) is ARCHITECT-RESOLVED per Doc 03 §10.13.7; see v2.7.1 entry above].** Source: `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` (Rathish, 2026-08-24). Upstream pins: Doc 02 v2.12.0 (In Review), Doc 03 v2.6.0 (In Review). Changes by section: (1) **Header** — version 2.6.0 → 2.7.0; Status Approved → In Review; Last updated 2026-08-24; Change block added; upstream pins updated; DECISIONS-2026-08-24 added to Source. (2) **Banner** — v2.1.0 and v2.5.0 re-plan entries updated (NOT SET → 2027-06-30 APPROVER-DELEGATED). (3) **§3.3** — v1 gate date annotation replaced with MS-V1-LRG 2027-06-30, back-scheduled latest-start dates table (DEP-11/12/13 already late; CON-015 already late vs S-2b constraint; security review book by 2027-04-07), incoherence note pointing to §3.5.5. (4) **§3.5.2** — MS-V1-02 split into S-2a (phone-only, no CON-015 dependency) and S-2b (ID integration, CON-015 hard-gates); S-2b note clarifying ID check enforcement is at S-4/S-5/S-6 call sites; S-4, S-5, S-6 rows updated with FR-123 IEligibilityVerifier counting-gate wiring notes; MS-V1-09 H-19 meaning corrected. (5) **§3.5.3** — DEP-13 and CON-015 assumption rows updated (S-2b framing); government-ID enforcement-point assumption row added; CON-015 critical-path text updated (5-month reference removed; S-2a/S-3 unblocked from CON-015 explained). (6) **§3.5.4** — PR-6 updated: items (b) and (e) corrected for H-19 COUNTING meaning; clause (f) added (FR-131 clause (d) non-counting disclosure + counting-gate enforcement evidenced before v1 gate; Ji-woo Park owner); PR-7 H-19 corrected; PR-11 added (FR-131 clause (d) open-tier non-counting disclosure + counting-gate enforcement bar item; Ji-woo Park owner). (7) **§3.5.5** — MS-V1-LRG date set (APPROVER-DELEGATED); ⚠ DECISION REQUIRED callout added for Definition-B Gate-2 vs v1-gate incoherence with three options. (8) **§3.5.6** — preamble updated (T-06 ACCEPTED, Gov-ID gate tension RESOLVED [mislabelled T-08 in v2.7.0 — corrected v2.7.1]); T-06 status ACCEPTED — DEFERRED WITH DISCLOSURE; T-07 RESHAPED reaffirmed; Gov-ID gate vs BR-003/FR-020 status RESOLVED [mislabelled T-08 in v2.7.0 — corrected v2.7.1]. (9) **§5** — DEP-13 fallback updated (S-2b framing; no longer "hard eligibility gate at account creation"). (10) **§6** — §6 header provenance note updated (RISK-44..46 at v2.7.0); RISK-33 H-19 corrected (COUNTING exclusion); RISK-40 description updated (denial of service = no COUNTING, not no enrolment); RISK-42 premise corrected (COUNTING exclusion; Gov-ID gate tension RESOLVED noted [mislabelled T-08 in v2.7.0 — corrected v2.7.1]); RISK-44 added (v1-gate vs Definition-B Gate-2 incoherence, DECISION REQUIRED, L4/I4/Exposure 16); RISK-45 added (non-counting class depressing party strength, L3/I4/Exposure 12); RISK-46 added (counting-gate distributed across S-4/S-5/S-6 regression risk, L3/I5/Exposure 15). | `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md`; Doc 02 v2.12.0 (In Review); Doc 03 v2.6.0 (In Review) | Ana-Maria Petrescu |
| 2026-08-23 | Delivery split | **v2.6.0 — ISS-01/ISS-02 rework.** Cycle-1 business-mode document review (`artifacts/reviews/13-project-plan-v2.5.0-business-cycle1.md`): FAIL 91%, 0C/0H/2M/0L. Two surgical fixes applied. **ISS-01 (Medium):** RISK-31 mitigation H-register updated H-01..H-16 → H-01..H-19 (note added that H-18 covers `subject_id_hash`/`phone_hash` at-rest surface). RISK-33 mitigation H-register updated H-01..H-16 → H-01..H-19; narrative expanded: H-17 (vendor sees government document during signup), H-18 (derived identifiers `subject_id_hash`/`phone_hash` retained at rest), H-19 (no government-issued ID = no enrolment). RISK-33 Carried-by updated H-01..H-16 → H-01..H-19. Maintenance note added to §6 header blockquote documenting that H-register range appears in stage/PR sections AND §6 risk rows and both sites must be swept together on any Doc 02 register change. **ISS-02 (Medium):** §13.1 document-review evidence row updated: Doc 02 v2.10.0 PASS 100% c3 → v2.11.0 PASS 99% c1 (Approved 2026-08-23); Doc 13 v2.5.0 FAIL 91% c1 recorded; v2.6.0 In Review pending c2. Gate-1-cannot-be-presented line updated (v2.5.0 → v2.6.0). No other changes. | `artifacts/reviews/13-project-plan-v2.5.0-business-cycle1.md` (FAIL cycle-1, 0C/0H/2M/0L) | Ana-Maria Petrescu |
| 2026-08-23 | Delivery split | **v2.5.0 — v1 identity verification ruling + approver confirmations applied.** Upstream Approved: Doc 02 v2.11.0 (business c1 PASS 99%); Doc 03 v2.5.1 (technical c2 PASS 97%). Ruling applied: v1 identity = phone SMS + government-ID document check with verify-and-discard (DES-100 field-level retention; allowlist: `id_verified_flag`/`age_verified`/`issuing_region`/`subject_id_hash`/`phone_hash`/`verified_at`; everything else discarded; HMAC-SHA-256 + KMS-held pepper; vendor no-retention clause required). Approver confirmations: NFR-009 v1 = one OWASP pen test CONFIRMED; 2027-05-14 Gate-2 referent CONFIRMED + 2027-03-15 carry-forward CLOSED; T-01..T-05 CONFIRMED; DEFERRED-v2 Musts CONFIRMED; v1 gate date NOT SET (still no date supplied). Changes: header sources updated; §2.1 SRS pin → v2.11.0; §3.5.1 DEFERRED CONFIRMED noted; §3.5.1 "New in v1" updated (DES-100); MS-V1-02 extended (ID check + DES-100 + DEP-13); MS-V1-09 H-01..H-19; §3.5.3 effort range revised 5–9 → 6–10 months (ID check genuinely new scope; CON-015 now hard gate on MS-V1-02 — must start immediately); §3.5.3 reuse table updated; NFR-009 CONFIRMED paragraph updated; PR-1 extended (ID-check flow, verify-and-discard field audit, pepper/KMS); PR-6 updated (H-17/18/19 disclosures, H-19 prominence); PR-7 H-01..H-19; §3.5.5 Gate-2/MS-V1-LRG CONFIRMED paragraphs; T-01..T-05 CONFIRMED; §3.5.6 tensions updated (T-06 IMPROVED-not-closed; T-07 reshaped pending CON-015; T-08 AWAITING APPROVER); §5 DEP-13 added; §6 RISK-40..43 added; §13.1 review row updated. | `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md`; Doc 02 v2.11.0 (Approved, c1 PASS 99%); Doc 03 v2.5.1 (Approved, c2 PASS 97%); `ADR-025 §(e)`; `DES-100` | Ana-Maria Petrescu |
| 2026-08-23 | Delivery split | **v2.4.0 — ISS-01/ISS-02 rework.** Cycle-1 business-mode document review (`artifacts/reviews/13-project-plan-v2.3.0-business-cycle1.md`): FAIL 92%, 0C/0H/1M/1L. Two surgical fixes applied. **ISS-01 (Medium):** RISK-32 description and mitigation rewritten for phone-based SMS OTP authentication (was still "password, passkey, or OAuth" / "PKCE for OAuth" language from the pre-Ruling-1 era that survived the v2.3.0 re-plan unnoticed). New description: OTP interception (SS7 hijack), replay in OTP grace window, session-fixation in the SMS auth context. New mitigation: strict OTP expiry (≤ 60 s), single-use enforcement, rate limiting via DES-099, session expiry; ADR-025 §(c-iv) residual accepted; cross-reference to RISK-36 (SIM-swap). Carried-by updated to include ADR-025 and FR-132. Auth-assumption sweep (password/passkey/OAuth/PKCE/email-verification in active prose) found no other pre-ruling auth language. **ISS-02 (Low):** §2.1 ADR range "ADR-001…ADR-024" → "ADR-001…ADR-025" (ADR-025 Accepted 2026-08-23). ADR-range sweep found no other citations stopping at ADR-023 or ADR-024. §13.1 review row updated. No other changes. | `artifacts/reviews/13-project-plan-v2.3.0-business-cycle1.md` (FAIL cycle-1, 0C/0H/1M/1L) | Ana-Maria Petrescu |
| 2026-08-23 | Delivery split | **v2.3.0 — v1 auth & spam-resistance rulings applied.** Approver rulings (Rathish, 2026-08-23, via DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md): (1) v1 auth = phone-based SMS verification (FR-132, ADR-025) backing DES-095 IEligibilityVerifier; (2) spam-resistance = flag-don't-block VoIP/velocity layer (FR-133, DES-099); (3) blockchain ratified as v1 transparent-audit record (DES-097 RATIFIED). Upstream sources now Approved: Doc 02 v2.10.0 (PASS 100%, c3; Must count 114 = FR-001..FR-133; H-01..H-16; T-01..T-07); Doc 03 v2.4.1 (PASS 97%, c2; ADR-025, DES-099). Surgical fixes applied to Doc 13: §2.1 Must 112 → 114 (FR-132/FR-133 added); §3.5.1 v1 Must-set 108 → **110** (114 − 4 DEFERRED-v2); DES-097 RATIFIED noted; MS-V1-02 rewritten (phone auth + spam layer, DEP-11/DEP-12, flag-don't-block, false-positive path, FR-131 caveat); MS-V1-09 H-01..H-14 → H-01..H-16; assumption (a) updated (auth DECIDED, stack ratified, vendors open); effort range HOLDS 5–9 months (phone auth was the blank placeholder — net neutral scope; DEP-11/12 procurement lead time is new scheduling constraint); PR-1 extended (OTP, SIM-swap, spam false-positive, vendor API security); PR-6 extended (FR-132 caveat, FR-133 hard-block prohibition); PR-7/PR-10 updated; §3.5.6 added (T-06/T-07 tension table, awaiting approver); §5 DEP-11/DEP-12 added; §6 RISK-35..RISK-39 added; §6 RISK-31/RISK-33 H-register updated to H-01..H-16; §6 ISS-02 bold-ID formatting on RISK-22..30 fixed (plain house style); §13.1 review row updated. | Decision record `artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md`; Doc 02 v2.10.0 (Approved, c3 PASS 100%); Doc 03 v2.4.1 (Approved, c2 PASS 97%); ADR-025 (Accepted); `artifacts/reviews/13-project-plan-v2.2.0-business-cycle2.md` (PASS 95%, c2 — v2.2.0 Approved; two Lows carried) | Ana-Maria Petrescu |
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
| Gate-2 date achievable as stated in `CON-007` | ❌ **Not achievable (Definition B; Definition A v1 gate: 2027-06-30 APPROVER-CONFIRMED)** | §3.4 — CON-007 targets Definition-B Gate 2 on 2027-02-15; the former evidence-based figure was **2027-05-14** (+13 weeks), retired 2026-08-24 (RISK-44 closed via option (a)). Definition-B Gate-2 (MS-13) is now re-based after the v1 gate (2027-06-30); specific offset to be planned at v2 re-entry — the gap vs CON-007's 2027-02-15 target is structurally larger; Definition B will require its own plan at v2 re-entry. The v1 gate (MS-V1-LRG 2027-06-30) is a separate bar; its achievability is assessed at §3.5. |
| **Passing `document-review` reports for Docs 01, 02, 05, 13** | ⚠ **Partially cleared** | **Doc 02 v2.13.0: ✅ PASS 99%** — business mode, cycle 2 (Status: Approved 2026-08-24; business c2 PASS 99%; `artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md`). **Doc 03 v2.6.1: ✅ PASS 97%** — technical mode, cycle 2 (Status: Approved 2026-08-24; technical c2 PASS 97%; `artifacts/reviews/03-architecture-design-sdd-v2.6.1-technical-cycle2.md`). **Doc 13 v2.2.0: ✅ PASS 95%** — business mode, cycle 2 (Approved 2026-08-23). **Doc 13 v2.4.0: ✅ PASS 96%** — business mode, cycle 2 (Approved 2026-08-23). **Doc 13 v2.5.0: ❌ FAIL 91%** — business mode, cycle 1 (2026-08-23); 0C/0H/2M/0L. **Doc 13 v2.6.0: ✅ PASS 95%** — business mode, cycle 2 (Approved 2026-08-24). **Doc 13 v2.7.0: ❌ FAIL 90%** — business mode, cycle 1 (2026-08-24; `artifacts/reviews/13-project-plan-v2.7.0-business-cycle1.md`); 0C/1H/2M/1L. **Doc 13 v2.7.1: ❌ FAIL 95%** — business mode, cycle 2 (2026-08-24; `artifacts/reviews/13-project-plan-v2.7.1-business-cycle2.md`); 0C/0H/1M/1L. **Doc 13 v2.7.2: ✅ PASS 98%** — business mode, cycle 3 (Status: Approved 2026-08-24; `artifacts/reviews/13-project-plan-v2.7.2-business-cycle3.md`); 0C/0H/0M/1L. **Doc 13 v2.8.0: ❌ FAIL 95%** — business c1 (`artifacts/reviews/13-project-plan-v2.8.0-business-cycle1.md`); **Doc 13 v2.8.1: ✅ PASS 100%** — business c2 (Status: Approved 2026-08-24; `artifacts/reviews/13-project-plan-v2.8.1-business-cycle2.md`). Docs 01, 05: ❌ passing business-mode review reports not yet produced. **Gate 1 cannot be presented until Docs 01 and 05 have passing business-mode reviews.** |
| Four declared non-Must backlog coverage gaps closed | ⚠ Declared, not closed | Doc 05 §12 — `FR-005`, `FR-049`, `FR-050`, `FR-052`, `FR-053`. Non-blocking; owned by the PO |

> **Cross-document cascade debt — routed to owners (2026-08-24).** The v1 scope closure
> rulings (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §4.4) create downstream update debt in five
> other documents. Doc 13 v2.8.0 is the sole document commissioned this session
> (DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §5.1); the cascade is deferred and routed:
> - **Doc 01** (line 420) — update warranted; **routed to product-owner (PO: Priya Raghunathan)**.
> - **Doc 02** (line 2656) — update warranted; **routed to product-owner (PO: Priya Raghunathan)**.
> - **Doc 03** (lines 1761–1762) — update warranted; **routed to architect (Priya Raghunathan)**.
> - **Doc 09** (lines 35 and 341) — update warranted; **routed to sre (Chen Wei)**.
> - **Doc 10** (line 19) — update warranted; **routed to sre (Chen Wei)**.
>
> Each owner must apply the RISK-44 ruling (Definition-B Gate-2 re-based after v1 gate; 2027-05-14
> retired) in their document before their next version increment. These are not Gate-1 blockers in
> themselves but must be cleared before the relevant document's next passing review.

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

> **2026-08-24 update.** The lever analysis below was developed against the former Definition-B
> Gate-2 date of **2027-05-14** (now retired — RISK-44 closed via option (a);
> DECISIONS-2026-08-24-V1-SCOPE-CLOSURE.md §3.3). The B-01 lever (L2) was accepted by the
> approver at Gate 1 on 2026-08-09 and its budget figure and the §8.3 line it references remain
> valid. The specific Gate-2 date cited (2027-05-14) is a superseded pre-split figure. The
> Definition-B Gate-2 (MS-13) is now re-based after the v1 gate (2027-06-30); Definition B's lever
> analysis will be re-issued when Definition B re-enters design→build. The v1-specific timeline and
> cost posture is in §3.5.

`CON-007` targets Gate 2 on **2027-02-15** and launch on **2027-03-01**. The plan's evidence-based
Definition-B Gate 2 was **2027-05-14** (superseded: retired 2026-08-24 per RISK-44 ruling — see
§3.5.5). The gap vs CON-007 was **13 weeks**, driven by the externally paced cryptography path
(§3.4): two independent audits, their remediation, MACI Phase-3, and a 30-day on-chain registry
timelock. _(Note 2026-08-21: the v1.0.0 text named "six ceremonies at ≥ 500 contributors" as a
critical-path driver. Per `ADR-022` / REC-1, the ceremony burden has collapsed to a batched campaign
of days. The Gate-2 date did not move under that correction — the audits were already the binding
constraint before the correction, completing 2027-03-12 vs ceremonies completing 2027-03-05; see
§3.4.)_

| Lever | Effect on date | Effect on budget | PM assessment |
|---|---|---|---|
| **L1 — Move Gate 2 to 2027-05-14; hold 3 pilots** _(2027-05-14 is the pre-split Definition-B referent, retired 2026-08-24 — see §3.5.5 and §3.4)_ | Gate 2 +13 wks vs CON-007 target; 100% rollout 2027-07-09 (derived from retired 2027-05-14 — retired 2026-08-24) | **~−USD 245,000 (~−5.8%) over** appetite, no contingency | Honest schedule, unfunded. Not viable without more money. Definition-B lever; to be re-issued at v2 re-entry |
| **L2 — Move Gate 2 to 2027-05-14; launch in 1 pilot, roll the other 2 post-launch** _(2027-05-14 is the pre-split Definition-B referent, retired 2026-08-24)_ _(B-01: accepted by Gate-1 approver 2026-08-09)_ | Gate 2 +13 wks vs CON-007 target | ≈ **USD 4.03M**; ≈ USD 175K (~4%) banked as an explicit audit-remediation contingency (approver ruling 2026-08-21) — _corrected from "≈ USD 4.13M, ~1.7%" which was computed off the pre-correction 4.55M total_ | **Recommended. Accepted (B-01 2026-08-09).** The budget figure and single-pilot lever remain valid. The date reference (2027-05-14) is superseded — Definition-B Gate-2 is re-based after the v1 gate (2027-06-30) per RISK-44 ruling. Keeps every Must requirement and every guardrail; defers only jurisdictional breadth (`CON-005`-gated per jurisdiction). |
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
