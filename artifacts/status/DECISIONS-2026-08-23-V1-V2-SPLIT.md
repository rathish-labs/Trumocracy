# v1/v2 Delivery Split — Definition A / Definition B

```
Date:            2026-08-23
Decision:        v1/v2 delivery split (Definition A / Definition B)
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — directive applied by architect (Doc 03 v2.3.1) and product-owner
                 (Doc 02 v2.6.0) this session; Doc 13 re-plan v2.1.0 produced this session
                 (In Review — pending c1 business-mode review); further items AWAITING
                 APPROVER CONFIRMATION as listed in §4
Source:          Transmitted via coordinator (2026-08-23). Applied session: 2026-08-23.
```

---

## 1. What was open

The project had been planned end-to-end as a single programme: ZK anonymous enrolment, MACI
private receipt-free ballots, a trusted-setup ceremony, a 5-of-7 coordinator committee, and
two heavy independent cryptographic audits — all on the critical path before any production
rollout. This design was correct for the full-guarantee product (Definition B), but no
separate delivery option for a working, shareable, production-grade v1 existed.

The architect's Doc 03 v2.3.0 introduced `§10.13 v1/v2 delivery architecture`, `ADR-024`
(v1/v2 delivery split), and stable seam interfaces (`DES-095 IEligibilityVerifier`,
`DES-096 IBallotService`) that make a v1-to-v2 upgrade an implementation swap rather than
a rewrite. The product-owner's Doc 02 v2.6.0 added `§16 Delivery phasing`, classifying all
131 FRs and 28 NFRs against the split and minting `FR-131` (v1 honesty notice, Must).

The Doc 02 v2.6.0 cycle-1 business-mode review (`artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md`,
Verdict: FAIL 94%, 0C/0H/1M/1L) found that `§16` and `FR-131` cite this decision record
as their primary authority — but the record did not yet exist. ISS-01 (Medium, B3): the
dangling reference leaves the normative authority of the entire delivery-phasing section
resting on nothing on file. **This record is the artifact that resolves ISS-01.**

---

## 2. The directive — verbatim-in-substance

The approver's directive, transmitted via coordinator 2026-08-23, is recorded below.
No softening, no reinterpretation.

---

### Definition A (v1) — the transparent party platform

> The first delivery is a real, production-grade, shareable application: create a party (eight-pillar
> vision, constitution, non-violence clause); petition → threshold → activation; join freely with no
> approval (one party at a time); propose, discuss and debate; self-nominate and select candidates by
> member vote; manifesto with tracked commitments and evidence; public dashboards for finances, promises
> and performance.
>
> **Voting WORKS in v1** but uses conventional authentication, NOT the zero-knowledge private ballot.

### Definition B (v2) — the guarantee layer

> The same platform PLUS the hard cryptographic guarantees: ZK anonymous enrolment, private
> receipt-free ballots (MACI), the trusted-setup ceremony, the coordinator committee, and the heavy
> external audits. Deferred, built later, in the open, with the community.

### The goal

> A working v1 in months, shared on GitHub, that people can contribute to — v2 lands afterward as
> the guarantee layer. v2 is an implementation swap behind stable interfaces, never a rewrite.
> Nothing from the design phase is discarded.
>
> v1 does NOT require the ceremony, the coordinator committee, or the two heavy ZK audits — but the
> plan must state what lightweight review/testing v1 DOES need before it is production-grade and public.

---

### The classification test (normative)

A requirement is **DEFERRED-v2** if and only if it exists **ONLY** to provide anonymity, private
ballots, coercion-resistance, or hostile-state safety. A requirement that also serves other purposes
(verifiability, integrity, accountability) is **IN-v1** or **PARTIAL** — the v1 form satisfies the
non-ZK aspects; the v2 form adds the cryptographic guarantee.

### The honesty requirement

> v1 must state plainly at every vote-cast surface that it is not the private ballot. Deferrals
> that weaken assumed guarantees become README honesty items, never silent omissions.

### The reuse guardrail

> Nothing from the design phase is discarded. v2 is an implementation swap behind stable interfaces
> (DES-095 IEligibilityVerifier, DES-096 IBallotService). Never a rewrite.

### The v1 production-readiness bar

> v1 is exempt from the ceremony, the coordinator committee, and the two heavy ZK audits. But the
> plan must state what v1 DOES need before it is production-grade and public.

### On surfacing contradictions

> Contradictions with existing Musts/ADRs must be surfaced for the approver's decision. They are not
> to be silently reconciled. An agent that discovers a tension records it and flags it AWAITING
> APPROVER CONFIRMATION.

---

## 3. What was applied — with artifact citations

### Applied by architect (Doc 03 v2.3.1, Status: Approved)

| Item | Artifact |
|------|----------|
| §10.13 v1/v2 delivery architecture — v1 package disposition, seam definitions, Charter-tension table T-01..T-05 | `docs/03-architecture-design-sdd.md` v2.3.1 |
| **ADR-024** — v1/v2 delivery split: voting and identity seams | `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md` |
| **DES-095** — `IEligibilityVerifier` seam (v1: conventional auth/DB; v2: ZK nullifier circuit) | Doc 03 §10.13 / ADR-024 |
| **DES-096** — `IBallotService` seam (v1: DB-backed ballot; v2: MACI message queue + tally) | Doc 03 §10.13 / ADR-024 |
| **DES-097** — v1 package disposition: blockchain serves ONLY as the public transparent-audit record; conventional app + database on top | Doc 03 §10.13 / ADR-024 |
| **DES-098** — v1 honesty notice (the disclosure mandated by FR-131 at every vote-cast surface) | Doc 03 §10.13 |
| Charter-layer conflict table **T-01..T-05** — tensions surfaced for the approver, not reconciled | Doc 03 §10.13.7 / ADR-024 |
| ADR-016 cascade fix (Phase-1 citizen-exclusion sentence correction) | Doc 03 v2.3.1 |
| §18 C-02 closure annotation ("PO decided: accept — FR-130 minted") | Doc 03 v2.3.1 |
| Technical review: Cycle 1 FAIL 90% (v2.3.0, 0C/1H/1M/1L) → Cycle 2 PASS 97% (v2.3.1, 0C/0H/0M/0L) | `artifacts/reviews/03-architecture-design-sdd-v2.3.0-technical-cycle1.md`; `artifacts/reviews/03-architecture-design-sdd-v2.3.1-technical-cycle2.md` |

### Applied by product-owner (Doc 02 v2.6.0, Status: In Review, FAIL c1 — rework to v2.7.0 owed)

| Item | Artifact |
|------|----------|
| **§16 Delivery Phasing** — classification of all 131 FRs and 28 NFRs: IN-v1 106 / PARTIAL 19 / DEFERRED-v2 4 (FR-030, FR-031, FR-082, FR-086) / SUPERSEDED 2; NFR IN-v1 24 / PARTIAL 3 / DEFERRED-v2 1 (NFR-003) | `docs/02-requirements-srs.md` v2.6.0 §16 |
| **Honesty register H-01..H-06** — six items the v1 README MUST disclose | Doc 02 v2.6.0 §16.4 |
| **16-item contradiction surface** — all AWAITING APPROVER CONFIRMATION; none silently reconciled | Doc 02 v2.6.0 §16.5 |
| **FR-131** minted (Must, §4.45, owner Nadia Hassan, traces BR-005/BR-009, design DES-098, SCR-13/SCR-14, 4 Gherkin scenarios) | Doc 02 v2.6.0 §4.45 |
| §11 Must count: 111 → 112 | Doc 02 v2.6.0 §11 |
| CON-007 budget parenthetical corrected (stale "~USD 4.13M" → record-derived "≈ USD 4.03M on accepted L2 basis / ≈ USD 175K contingency") | Doc 02 v2.6.0 §9.1 |
| Business-mode Cycle-1 review: FAIL (94%, 0C/0H/1M/1L). ISS-01 Medium: DECISIONS-2026-08-23-V1-V2-SPLIT.md cited but absent (resolved by this record). ISS-02 Low: six H=Y FRs without §16.4 entries. Rework to v2.7.0 owed. | `artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md` |

### Applied by project-manager (Doc 13 v2.1.0, Status: In Review — pending c1 review)

| Item | Artifact |
|------|----------|
| Header bump 2.0.3 → 2.1.0; Status: In Review; Last updated: 2026-08-23; sources updated | `docs/13-project-plan.md` v2.1.0 |
| "Read this first" banner updated with v2.1.0 re-plan note | Doc 13 v2.1.0 |
| §2.1 scope: Must count corrected (110 → 112); v1/v2 split note added | Doc 13 v2.1.0 §2.1 |
| §3.1 "Why Phase 3 is the launch, not Phase 2" — dated supersession annotation added | Doc 13 v2.1.0 §3.1 |
| §3.3 Gate-2 conditions — annotation added directing readers to §3.5 for v1-scoped conditions | Doc 13 v2.1.0 §3.3 |
| **§3.5 v1 delivery plan** — build-order stages MS-V1-01..MS-V1-08; effort range; production-readiness bar; v2 re-entry; where existing Phase 2/3 programme becomes Definition B | Doc 13 v2.1.0 §3.5 |
| §6 risk register — RISK-31..RISK-34 added (v1-specific risks) | Doc 13 v2.1.0 §6 |
| §11 re-plan log — v2.1.0 entry prepended | Doc 13 v2.1.0 §11 |

### This record

| Item | Artifact |
|------|----------|
| This decision record | `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` |
| Gate-status additive section appended | `artifacts/status/GATE-STATUS-2026-08-09.md` |
| PM memory note | `artifacts/project-manager-2026-08-23T1400.md` |
| Memory index updated | `artifacts/memory-index.json` |

---

## 4. What remains for the approver — explicitly not decided by any agent

The following items are **AWAITING APPROVER CONFIRMATION**. No agent has resolved or may
resolve these. The project-manager records and surfaces; only Rathish decides.

| # | Item | Where surfaced |
|---|------|---------------|
| (a) | **v1 stack recommendation ratification.** DES-097 recommends: blockchain serves ONLY as the public transparent-audit record; conventional app + database sits on top. The architect has designed this; the approver has not yet ratified it as the v1 build direction. | Doc 03 §10.13, ADR-024, Doc 13 §3.5 |
| (b) | **16-item contradiction surface (Doc 02 §16.5).** All 16 items are AWAITING APPROVER CONFIRMATION. Key items: Charter Rule 6 (anonymity by default — T-01); FR-128 subpoena test (T-02); BR-009/FR-082 anonymity guarantee (T-03); NFR-003 Guarded Layer (T-04); Charter Rule 3 non-violence reading for v1 (T-05); BR-011/NFR-003 receipt-freeness as Must in v1; FR-030/FR-031 DEFERRED-v2 classification; FR-082 Supporter anonymity DEFERRED-v2; Doc 01 §C kill-criteria reading for v1; Doc 13 §3.1 "Why Phase 3 is the launch" argument (superseded for v1 by the 2026-08-23 directive — see §3.1 annotation). | Doc 02 v2.6.0 §16.5; Doc 03 §10.13.7; Doc 13 §3.1 supersession annotation |
| (c) | **T-01..T-05 Charter-layer tensions** (Doc 03 §10.13.7, ADR-024). Five tensions surfaced by the architect between the v1 delivery scope and Charter-layer requirements. The architect surfaced these; they are not reconciled. Each requires an explicit Rathish ruling. | Doc 03 v2.3.1 §10.13.7; ADR-024 |
| (d) | **Re-scoped Gate-2 reading.** The plan recommends: (i) v1 has its own earlier launch-readiness gate against the v1-scoped Must set (replacing the ceremony/committee/two-ZK-audit path for v1); (ii) the existing 2027-05-14 audit-paced Gate-2 date attaches to Definition B. The specific v1 gate date and the Definition-B Gate-2 date shift are PLAN RECOMMENDATIONS AWAITING APPROVER CONFIRMATION. No gate date has been changed. | Doc 13 §3.5, §3.3 annotation |
| (e) | **NFR-009 re-reading for v1.** The v1 production-readiness bar (Doc 13 §3.5) proposes a different, lighter bar than NFR-009's two heavy audits. This is a re-reading of what NFR-009's Gate-2 conditions mean for Definition A. It is stated as a recommendation; only the approver can ratify the re-reading. | Doc 13 §3.5 |
| (f) | **Approver confirmation of 2027-05-14 referent** (carry-forward from 2026-08-21). The approver's budget ruling cited "Gate 2 date move to 2027-03-15" but the record shows the Gate-2 date is and remains 2027-05-14; 2027-03-15 is the audit-remediation + registry-timelock start. Confirmation that 2027-05-14 is the correct Gate-2 date for Definition B is still pending. | `DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.5`; GATE-STATUS §Budget-appetite-ruling |

---

## 5. Open items — work owed after this record

| Item | Owner | Trigger |
|------|-------|---------|
| Doc 02 v2.7.0 — rework ISS-01 (now resolved: cite this record) and ISS-02 (H-07..H-12 or umbrella note); re-review c2 | product-owner (Priya Raghunathan) | This record now exists; rework may proceed |
| Doc 13 v2.1.0 — c1 business-mode document-review | PM to assign neutral (non-owner) reviewer | After this record is committed |
| T-01..T-05 Charter-tension rulings | Rathish (human approver) | Before v1 implementation of affected requirements |
| 16 contradiction-surface confirmations (Doc 02 §16.5) | Rathish (human approver) | Before v1 launch |
| v1 stack recommendation ratification (DES-097) | Rathish (human approver) | Before engineer builds v1 auth/data layer |
| Doc 03 cascade annotation: FR-131/DES-098 pre-allocation error (§12 references "FR-130" for DES-098) | architect (Ravi Deshmukh) — next Doc 03 increment | Before RTM can be complete for FR-131 |
| DES for FR-130 (provisional-party cap, minted v2.5.0) | architect (Ravi Deshmukh) | Next Doc 03 DES increment |
| FR-129 tier-determination (FR-118 Tier-1 vs FR-119 Tier-2) | architect (Ravi Deshmukh) | Next Doc 03 DES increment |
| US for FR-131 (honesty notice) | product-owner (Priya Raghunathan) | After DES assigned by architect |
| TC for FR-130, FR-131 | tester (Ji-woo Park) | Phase 3 (v2) / v1 launch prep |
| RTM rows for FR-130, FR-131, FR-121..FR-129 | tester (Ji-woo Park) | After DES + US available |
| CON-015 legal opinion — India/Aadhaar | Sofia Marchetti | Gate-2 blocker; ≥ 8 wks before Gate 2 |
| Doc 04 (Test Strategy) technical-mode review debt | PM to assign neutral reviewer | Gate-2 blocker (both Definitions) |
| Doc 05 v2.1.0 — c1 business-mode review debt (carry-forward from 2026-08-22) | PM to assign neutral reviewer | Outstanding since 2026-08-22 |

---

## 6. Sources

| Source | Role in this record |
|--------|---------------------|
| Coordinator transmission (2026-08-23) | Approver's directive (verbatim-in-substance, §2) |
| `docs/03-architecture-design-sdd.md` v2.3.1 (Approved) | Applied — §10.13 v1/v2 architecture; ADR-024; DES-095..DES-098; T-01..T-05 |
| `docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md` | Applied — v1/v2 seam definitions |
| `artifacts/reviews/03-architecture-design-sdd-v2.3.0-technical-cycle1.md` | Doc 03 review history (FAIL c1 90%) |
| `artifacts/reviews/03-architecture-design-sdd-v2.3.1-technical-cycle2.md` | Doc 03 review history (PASS c2 97%) |
| `docs/02-requirements-srs.md` v2.6.0 (In Review) | Applied — §16, FR-131, CON-007 correction |
| `artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md` | Doc 02 review FAIL c1 (ISS-01 resolved by this record) |
| `artifacts/product-owner-2026-08-23T0900.md` | PO session note confirming scope of v2.6.0 edits |
| `docs/13-project-plan.md` v2.1.0 (In Review) | Applied — §3.5 v1 plan, §3.1 annotation, §6 RISK-31..RISK-34, §11 re-plan log |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | Updated with additive section (this session) |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the decisions
of the human approver (Rathish) verbatim-in-substance. The project-manager does not approve
gates and does not decide open items. Only Rathish is the decision-maker.*
