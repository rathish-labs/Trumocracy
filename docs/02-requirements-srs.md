# Requirements Specification (BRD + SRS) — Trumocracy

```
Document ID:   SRS-TRUMOCRACY
Version:       2.4.0
Status:        Approved (review loop, cycle 1 PASS 100% — artifacts/reviews/02-requirements-srs-v2.4.0-business-cycle1.md)
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Priya Raghunathan (Product Owner), Ana-Maria Petrescu (Project Manager),
               Rathish (Human Approver — Gate 1 re-entry, v2.0.0)
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-08-20
Change:        v2.4.0 — OI-19 and OI-20 rulings applied (Rathish, 2026-08-20;
               artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md). OI-19 DECIDED: invite-gating
               is a spam-control rate-limiter, never an admission condition; FR-125 finalised (no
               longer draft) — mandatory non-invite fallback ALWAYS open, leads to full counted
               membership, no fee, no refusal for lack of invite; test obligation — "a determined
               real person can always join without an invite"; ✅ OI-19 DECIDED banner applied in
               §4.41; FR-020 unamended and absolute; OI-19 RESOLVED in §13. OI-20 DECIDED: FR-004
               satisfied at architecture level (Aadhaar is one implementation of the pluggable
               adapter interface, not a hardcoded dependency); Phase-1 single-rail deployment
               limitation recorded (person without Aadhaar cannot enrol in Phase-1 pilot region;
               FR-004's 50% attestor-share cap inoperative for Phase-1 duration; exit condition:
               Phase 2 adds eIDAS 2.0 per FR-121); FR-129 minted (Must, §4.43) — Charter-layer
               guard: making single-issuer operation permanent requires Charter-layer amendment
               process, never a deployment default; ✅ OI-20 DECIDED banner on FR-004; OI-20
               RESOLVED in §13. §11: Must count 109 → 110 (FR-129); FR-125 convention note
               updated (no longer draft). §12 traceability updated (FR-129 trace added; FR-125
               trace note updated).
               v2.3.1 — FR-124 verified-status visibility amendment (approver ruling, Rathish,
               2026-08-20, recorded in the FR-124 banner, §4.41): verified status is private to
               the holder, expressed as eligibility; every verified participant including Supporters
               sees their own status in their own authenticated session; the public sees only
               aggregate verified counts, never a per-Supporter badge; Worker/Candidate visible
               badge permitted (voluntary role-taking already crossed the disclosure line);
               MUST-NOT: no persistent public attribute may reveal a specific Supporter is verified;
               absence-test obligation added (UT-0700/UT-0701 style). Original v2.3.0 clause (b)
               annotated as superseded with pointer (retained for traceability). §8 FR-124 Gherkin
               updated: Supporter private self-view scenario added; absence and adversarial scenarios
               strengthened. §14 glossary 'Verified status' updated to match amended composition.
               Three Low issues from v2.3.0 cycle-1 review
               (artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md) fixed: ISS-01 §2.5
               CON range updated CON-001..CON-014 → CON-001..CON-015; ISS-02 §15 OI-18 note updated
               (OI-18 resolved at v2.2.0, stale note corrected); ISS-03 FR-020 annotation scoping
               sentence added (open-tier scope only; counted-membership normative text unchanged).
               v2.3.0 — Pilot jurisdiction decisions applied (Rathish, 2026-08-20;
               DECISIONS-2026-08-20-PILOT-VERIFICATION.md). Decision 1: pilot jurisdiction
               sequence recorded in §4.40 (FR-121); India/Aadhaar offline paperless KYC named as
               Phase-1 adapter; EU/eIDAS 2.0 Phase-2; USA Phase-3 deferred (fragmented mDL
               patchwork, non-correlation conflict); CON-015 legal-opinion Gate-2 line item minted;
               OI-04-PILOT closed (§13); §2.4 updated to name the pilot. Decision 2: verification
               as a separate, optional step — §4.41 minted (FR-122..125); verification gates
               COUNTING, never joining; FR-020 annotated (open-tier entry without precondition);
               FR-021 annotated (personhood-gated counted ballots); two tensions surfaced as OI-19
               (invite-gating vs FR-020 admission ban) and OI-20 (single-rail pilot vs FR-004
               attestor plurality) — both pending Rathish decision, not resolved here. Decision 3:
               on-device proof, nullifier-only, no stored identity — §4.42 minted (FR-126..128);
               FR-003 annotated with pointer to FR-126; subpoena test Gherkin added to §8. TD-12
               records Decision 4 rejected designs. New FRs (FR-121..128) have no DES or US yet —
               same recorded-phasing posture as FR-074..FR-111 (Doc 03 §16); tester's next RTM
               catch-up covers FR-121..128.
               v2.2.0 — OI-18 decision applied (2026-08-11, Rathish; OI-18-DECISION-2026-08-11.md):
               two-tier core adopted. Tier 1 entrenched charter now SEVEN rules (CON-001 promoted —
               scope boundary, not implementation commitment), unamendable by any vote, changeable
               only by fork (FR-118 amended). Tier 2 named absolutes (BR-011/NFR-003, CON-002/
               CON-008/NFR-010, CON-012, CON-013) amendable only via the Doc 03 super-process —
               five minimum properties recorded (FR-119 amended). Tier 3 everything else, ordinary
               tier. The FR-118 decision banner closed.
               v2.1.1 — Cycle-1 business-review rework (2026-08-11): FR-092 pending-OI-14 residue
               fixed (ISS-01); §2.5 CON range updated to CON-001..CON-014 (ISS-02); §15 Downstream
               paragraph updated to current gate state (ISS-03); §15 v1.1.0 re-affirmation row
               annotated as superseded (ISS-04); OI-16 Gherkin annotation comments added to
               FR-085 and FR-107 §8 blocks (ISS-05); adversarial negative scenarios added to
               FR-024 (Supporter blocked, Worker-declaration path offered) and FR-105 (Supporter
               expulsion attempt refused, FR-005 the only remedy) §8 blocks (ISS-06).
               v2.1.0 — Gate 1 v2.0.0 decision applied + steward-organisation requirement area
               (2026-08-11, directed by Rathish; GATE1-DECISION-2026-08-11.md). OI-14 decided:
               proposal authorship requires Worker tier or above (FR-024, FR-090 amended). OI-15
               decided: expulsion applies to public tiers only; supporter-tier fraud handled by
               FR-005 credential revocation (FR-105 amended). OI-16 decided: confidential-class
               carve-out adopted — pre-nomination disclosure data never enters the governance
               record and is destroyed on withdrawal (FR-085, FR-107 amended). BR-021 +
               FR-114..FR-120 steward organisation (passes 2–3); TD-11; RISK-31/32; OI-18.
               Gate 1 APPROVED conditional on this version landing before design.
               v2.0.1 — Cycle-1 business-review rework (2026-08-10): one-pilot correction
               applied to §2.4 (ISS-01); CON-007 schedule made consistent with S-01 — launch
               2027-06-01 (ISS-02); FR-062 §8 Gherkin marked superseded/do-not-test (ISS-03);
               L2 budget noted in CON-007 (ISS-04); §1.4 Doc 05 pin corrected (Low).
               v2.0.0 — Vision re-entry directed by the approver (Rathish), 2026-08-10. Party
               self-governance first; three participation tiers with three-tier privacy (resolves
               OI-13); committees without decisional power; proposal lifecycle; measurable manifesto
               commitments; financial transparency + anomaly detection; COI, internal audit,
               disputes, member rights; conduct votes, removal & expulsion; three-level data
               classification; transparency dashboard & factual scorecard; behavioural tracking
               excluded by approver decision; non-violence founding clause. BR-014..BR-020 minted;
               new FR/NFR/CON/RISK/TD/OI sections land in the same version (passes 2–4 of this
               session). FR-062 and FR-046 superseded, not deleted. Gate 1 re-entry: this version
               stops at Gate 1.
               v1.1.1 — Cycle-1 business-review rework (2026-08-10).
               Addresses ISS-01..ISS-13 from artifacts/reviews/02-requirements-srs-v1.1.0-business-cycle1.md.
               Key changes: §8 preamble corrected + 15 missing Must-NFR Gherkin blocks added (ISS-01);
               NFR-010 scoped to exclude two enumerated restricted stores (ISS-02); FR-002/FR-030/NFR-001/NFR-003
               restated with defined adversary-game parameters (ISS-03); BR-006/BR-011 success measures
               replaced with falsifiable, observable proxies (ISS-04); OI-08 constants marked non-normative
               in §8 (ISS-05); NFR-024 harassment metric defined and reconciled with FR-056 (ISS-06);
               "Major election" defined in §14 (ISS-07); §11 Won't→Could for three items aligned with
               Doc 01 §D (ISS-08); FR-055/NFR-018 vs BR-005 reconciled with honest narrowing (ISS-09);
               Change-9 trace added to §12/§13 (ISS-10); 5 RFC 2119 negation errors fixed (ISS-11);
               Approvers named individually (ISS-12); OI-12 marked resolved by ADR-016 (ISS-13).
               v1.1.0 — Nine-requirement change request (CR-v1.1.0) directed by Rathish
               2026-08-09; re-affirmation of Gate 1 required at this version.
               Source: artifacts/status/GATE1-DECISION-2026-08-09.md §7 (CR-v1.1.0).
```

> **Based on:** ISO/IEC/IEEE 29148:2018 + IEEE 830. **Produced in:** Define. **Approved at:** Gate 1.
> Every requirement is uniquely indexed, MoSCoW-prioritized, independently verifiable, owned by a
> **named person**, and traceable. This is the source of truth for scope.
> **RFC 2119** keywords MUST / MUST NOT / SHOULD / MAY are used with their normative meaning.
> **This document states WHAT and HOW WELL. It states no HOW.** No technology, protocol, chain,
> library, algorithm or schema is named anywhere in general; FR-070 names three regulatory-framework
> adapter categories by human-approver direction (CR-v1.1.0 Change 6) — this is a deliberate
> exception to the general rule.

---

## 1. Introduction

### 1.1 Purpose
To specify, at a level sufficient for architecture and test design, the business, functional and
non-functional requirements of **Trumocracy** — a platform that enables any group of verified
citizens to create, constitute, operate and hold to account a **self-governing political party**,
demonstrating fitness to govern publicly and transparently before seeking public power. Citizens
participate continuously: in creation, operation, decision-making, candidate selection, policy
development and performance evaluation. The platform is multi-country from the outset; v2.0.0
targets one pilot deployment. Every institutional operation is executed by code; human discretion
is voting alone.

### 1.2 Scope

**In scope.** Verified personhood and regional-residency enrolment; country selection and the
platform-creation vs legal-registration boundary; party constitution drafting and ratification;
eight mandatory policy pillars; a petition lifecycle with a population-proportional activation
threshold; three self-assigned descriptive participation tiers (Supporter / Worker / Candidate)
with three-tier privacy; committee formation that deliberates and drafts but holds no decisional
weight; the eight-stage proposal lifecycle with a permanent decision trail; measurable manifesto
commitments with 1/3/5/10/30-year horizons; financial transparency with anomaly detection;
conflict-of-interest disclosure and recusal; independent internal audit; dispute resolution with
per-case sortition appeal panels; explicit member rights; conduct votes, removal and expulsion by
affirmative quorum; three-level data classification; transparency dashboard and factual performance
scorecard; open, equal membership; tiered charter amendment with timelocks; anonymous, receipt-free
voting; region-and-office-scoped candidate nomination and internal party elections; mid-term recall;
public manifestos and immutable version history; public verifiability and audit; moderation-by-code
boundaries; account recovery; and platform-sponsored, zero-cost citizen actions.

**Explicitly not in scope.** Conducting, certifying, tabulating or replacing any binding **state**
election or referendum (`CON-001`); any transferable token or platform fundraising instrument
(`CON-006`); vote delegation, proxy or liquid democracy; cross-jurisdiction/federated parties;
social features (feeds, messaging, forums); staff-operated moderation of political speech;
integration with an official electoral roll as a system of record; and **per-user behavioural
tracking of any kind** — clicks, page views, section views, dwell time, reading trails or any
derivative thereof — excluded by approver decision (Rathish, 2026-08-10) on the grounds that
such data constitutes a political-intelligence database. See Doc 01 §D and §E.

### 1.3 Definitions, acronyms, abbreviations
See §14 Glossary.

### 1.4 References
- `docs/01-press-release-prfaq.md` — PR-FAQ (PR-TRUMOCRACY v2.0.0).
- `docs/05-product-backlog.md` — Backlog (BKLG-TRUMOCRACY v1.1.2).
- `CLAUDE.md` — VEKTOR org handbook (gates, ID scheme, traceability rule).
- RFC 2119; ISO 8601; ISO/IEC/IEEE 29148:2018; WCAG 2.2 Level AA.
- `artifacts/status/GATE1-DECISION-2026-08-09.md` — Gate 1 decision record (nine-requirement CR-v1.1.0).

### 1.5 Document overview
§2 context and constraints · §3 business requirements · §4 functional requirements · §5 external
interfaces · §6 non-functional requirements · §7 data · §8 Gherkin acceptance criteria for every
Must requirement · §9 constraints, assumptions and recorded trade-offs · §10 risks · §11 MoSCoW
release plan · §12 traceability · §13 open issues · §14 glossary · §15 approvals.

---

## 2. Overall description

### 2.1 Product perspective
Trumocracy sits between three external worlds and owns the governance logic in the middle.

```
  [ Identity attestors ]        [ Population-statistics sources ]     [ Region authorities ]
   (>=2 independent,             (>=2 independent per region,          (boundary definitions,
    per launch region)            reference data only)                  versioned)
            |                                |                                   |
            v                                v                                   v
  +---------------------------------------------------------------------------------------+
  |                              T R U M O C R A C Y                                       |
  |  personhood & residency  |  party incubation  |  membership  |  governance & ballots   |
  |  (no identity data at rest, no operator override anywhere in the governance path)      |
  +---------------------------------------------------------------------------------------+
            |                                |                                   |
            v                                v                                   v
   [ Citizen client:            [ Public verifiable record:         [ Independent verifier:
     mobile web + light          counts, rolls, tallies,              anyone may re-run and
     Android app ]               charters, version history ]          reproduce every result ]
```

Trumocracy is **not** an authority. It consumes attestations and statistics as reference data and
emits a publicly verifiable record. No external system, and no internal role, holds an override.

### 2.2 Product functions (high level)
1. Prove unique personhood and regional residency without revealing identity or address.
2. Draft, publish and petition for a party across eight mandatory policy pillars.
3. Compute an activation threshold from the declared jurisdiction's eligible population and activate
   the party automatically when it is met and sustained.
4. Admit any verified citizen to any active party with identical standing and exactly one vote.
5. Accept member proposals; enforce tiered quorums, supermajorities and timelocks for amendment.
6. Run anonymous, receipt-free ballots with an invisible re-vote override and a publicly
   reproducible tally.
7. Scope candidate nomination and voting to the region and office where the person resides.
8. Publish manifestos and commitments with immutable version history; attribute office-holders'
   governance votes; run mid-term recall.
9. Emit a publicly verifiable record of every governance action; ship an independent verifier.
10. Sponsor all citizen action costs so the citizen holds no token and pays nothing.
11. Assign verified citizens to a self-declared participation tier (Supporter / Worker / Candidate),
    apply three-tier privacy, and enforce tier-scoped eligibility without conferring voting weight.
12. Enable party constitution drafting, ratification and amendment under tiered member vote.
13. Run the eight-stage proposal lifecycle end-to-end with a permanent, append-only decision trail.
14. Track and publish measurable manifesto commitments across 1/3/5/10/30-year horizons.
15. Publish party finances in real time with anomaly detection; enforce contribution caps by code.
16. Record and publish conflict-of-interest disclosures; enforce recusal from affected decisions.
17. Produce independent internal-audit reports and publish them append-only.
18. Administer dispute resolution with per-case sortition appeal panels; publish records.
19. Run conduct votes and removal/expulsion ballots; require affirmative quorum to remove.
20. Publish a real-time transparency dashboard and a factual performance scorecard.
21. Support multi-country operation: verified identity → select legally eligible country →
    create or join a party; distinguish platform party-creation from legal registration.
22. Platform-level stewardship: an elected, recallable, powers-enumerated steward body that
    coordinates but cannot control (§4.39).

### 2.3 User classes & characteristics

| Class | Description | Expertise | Frequency | Privacy posture |
|-------|-------------|-----------|-----------|-----------------|
| **Citizen (unenrolled)** | Adult resident of a pilot jurisdiction, not yet verified | Low; non-technical | Once (enrolment) | Anonymous |
| **Verified Citizen** | Holds a personhood credential + residency scope | Low | Occasional | Anonymous |
| **Drafter** | Authors a party charter and its eight pillars | Low–medium; motivated | Bursty | Pseudonymous until they choose otherwise |
| **Endorser** | Backs a petition in their own jurisdiction | Low | Rare | Anonymous |
| **Member** | Belongs to an active party; proposes and votes | Low | Weekly–monthly | Tier-dependent — see three-tier model: Supporter-tier: anonymous, never disclosed; Worker/Candidate tiers: public by explicit informed consent at role-taking |
| **Supporter (tier)** | Self-declared entry tier; participates in ordinary member votes; anonymous unconditionally | Low | Weekly–monthly | **Anonymous — unconditionally; no participation record exists or is published; nullifier-only on the verifiable record** |
| **Worker (tier)** | Self-declared active contributor tier; may serve on committees (deliberative only); public by consent | Low–medium | Weekly | **Public by explicit informed consent given at self-declaration; prior Supporter-period activity never retroactively linked** |
| **Committee member** | Member (any tier) serving on a deliberative body; produces proposals and drafts only; holds no decisional power | Low–medium | Weekly | Public where the member is Worker- or Candidate-tier; **committee output goes to ordinary member vote — committee holds zero outcome power** |
| **Candidate (tier)** | Self-nominated, code-checked, member-voted; stands for a region+office | Medium | Seasonal | **Publicly identified by explicit informed consent at self-nomination; disclosure scaled to power sought; irrevocable for the term; prior Supporter-period activity never retroactively linked** |
| **Office-holder** | Elected representative of a region+office | Medium | Ongoing | Publicly identified; governance votes attributable |
| **Independent Auditor / Journalist / Researcher** | Runs the verifier, re-computes tallies | High | Ad hoc | External; no account required |
| **Trumocracy Operator (sre)** | Runs infrastructure | High | Continuous | **Holds no governance power by design** |
| **Steward** | Elected platform-level coordinator; powers enumerated and exhaustive; no outcome power | Medium | Ongoing | Publicly identified by explicit informed consent at candidacy (three-tier model; stewards are a public-tier role) |

### 2.4 Operating environment
Mobile web (evergreen mobile browsers) and a lightweight Android application; device floor **2 GB
RAM, Android 9**; network floor **2G-class (64 kbit/s), intermittent**; eight launch languages
including at least one right-to-left script; one pilot jurisdiction at launch (one additional
jurisdiction planned post-launch once month-6 metrics are confirmed, per Gate 1 Lever L2 decision;
Phase-1 pilot jurisdiction: **India** — Aadhaar offline paperless KYC; FR-070 adapter class (c);
OI-04-PILOT resolved 2026-08-20 — see DECISIONS-2026-08-20-PILOT-VERIFICATION.md and §4.40).

### 2.5 Design & implementation constraints
See §9 (`CON-001` … `CON-015`). _(v2.3.1 ISS-01: range updated to reflect CON-015 minted at v2.3.0.)_

### 2.6 Assumptions & dependencies
See §9.2.

### 2.7 Stakeholders & responsibilities

| Name | Role | Accountable for |
|------|------|-----------------|
| Priya Raghunathan | Product Owner | Docs 01/02/05; Gate-1 direction |
| Marcus Adeyemi | Principal PM, Identity & Personhood | Enrolment, nullifiers, attestor plurality |
| Dr. Lena Kowalczyk | Privacy Lead | Anonymity, unlinkability, data minimisation |
| Tomás Ferreira | PM, Party Formation & Governance | Drafting, petition, threshold, proposals, amendment |
| Aisha Nkemdirim | PM, Elections & Voting | Ballots, coercion resistance, nomination, election, recall |
| Erik Lindqvist | PM, Transparency & Treasury | Manifestos, version history, ledger, contribution rules |
| Hiroshi Tanaka | PM, Platform Economics & Access | Cost per action, fee sponsorship, performance |
| Nadia Hassan | Accessibility & Localisation Lead | WCAG 2.2 AA, i18n/RTL, low-bandwidth, plain language |
| Rafael Duarte | Head of Security | Sybil resistance, governance-attack resistance, audits |
| Sofia Marchetti | Head of Legal & Regulatory | Jurisdiction boundary, compliance posture, transparency reporting |
| Daniel Okonkwo | Head of Trust & Safety | Moderation-by-code boundary, abuse metrics, harassment |
| Grace Mbeki | Head of Community & Field Operations | Membership, onboarding, field enrolment |
| Amara Diallo | Support & Account Recovery Lead | Recovery, appeals, support |
| Yuki Sato | Data & Measurement Lead | Metrics, denominators, dispute process |
| Chen Wei | Reliability Lead | Availability, liveness, censorship resistance |
| Ingrid Bergqvist | Party Accountability Lead | Internal audit, disputes, conduct votes, removal & expulsion |

---

## 3. Business Requirements (BR)

| ID | Requirement | Priority | Success measure | Owner | Source |
|----|-------------|----------|-----------------|-------|--------|
| BR-001 | Any verified citizen MUST be able to originate a complete party programme covering all eight mandatory pillars without permission from any incumbent, elite or platform employee. | Must | ≥ 50 fully-pillared petitions drafted in month 1; 0 drafts requiring any human approval to publish | Tomás Ferreira | PR-FAQ §B, Obj. 1 |
| BR-002 | A proposed party MUST gain full party status only by demonstrated support from a defined percentage of the eligible population of its declared jurisdiction, computed and applied by code. | Must | ≥ 12 parties activated in 12 months; 100% of activations traceable to a reproducible threshold computation | Tomás Ferreira | PR-FAQ §B, Obj. 2 |
| BR-003 | Any verified citizen MUST be able to join any active party directly, with standing and voting rights identical to every other member. | Must | 0 joins requiring approval; 0 members holding >1 vote; ≥ 1 party where the founding drafter is outvoted by month 12 | Grace Mbeki | PR-FAQ §B, Obj. 3 |
| BR-004 | Candidate nomination and voting MUST be scoped to the geographic region and office where the person actually resides. | Must | 100% of nominations and internal-election ballots scope-checked; 0 out-of-region votes counted | Aisha Nkemdirim | PR-FAQ §B, Obj. 4 |
| BR-005 | Manifestos, commitments and office-holders' governance votes MUST be publicly verifiable, and members MUST be able to remove a non-performing representative mid-term. | Must | 100% of closed ballots independently reproducible from published raw data alone — any third party can re-compute the tally by hand without Trumocracy's cooperation (FR-033, FR-054); the open-source verifier tool that makes this convenient (FR-055) is a Should enhancement to the Must-level raw-data guarantee; ≥ 1 recall reaching a vote per 20 offices per year | Erik Lindqvist | PR-FAQ §B, Obj. 5 |
| BR-006 | Every participant MUST be a real, unique human eligible in a specific region, such that duplicate or synthetic accounts cannot profitably influence any count. | Must | Audited duplicate/synthetic-person rate ≤ 0.1% of credentials per region, measured by independent out-of-band sampling (consented random sample of ≥ 5,000 credentials per region per quarterly audit, 95% confidence interval; audit body and consent framework confirmed before Gate 2; methodology: independent auditor draws sample, matches against external reference cohort, publishes protocol and confidence interval). | Marcus Adeyemi | PR-FAQ §E2 |
| BR-007 | The platform MUST be usable by a non-technical citizen on a low-end phone at zero monetary cost and with no custodial or cryptographic concepts exposed in primary flows. | Must | ≥ 80% unaided enrol→endorse completion in ≤ 10 min; SUS ≥ 75; USD 0.00 charged to citizens; median platform cost < USD 0.01/action | Hiroshi Tanaka | PR-FAQ §B, §C |
| BR-008 | Governance logic — membership rights, thresholds, quorums, timelocks, office assignment and recall — MUST execute automatically in code, with no human discretion available to any actor including Trumocracy. | Must | 0 privileged override paths present at security audit; 100% of state transitions attributable to a published rule | Tomás Ferreira | PR-FAQ §A.1 |
| BR-009 | Proving personhood and residency MUST NOT expose a member's real-world identity or make them targetable; candidates for office publicly disclose identity by explicit choice. | Must | 0 confirmed deanonymisations of an ordinary member; 100% of candidate disclosures preceded by recorded informed consent | Dr. Lena Kowalczyk | PR-FAQ §A.2, §E3 |
| BR-010 | Wealth MUST NOT be convertible into governance influence: no transferable voting instrument, no token-weighted vote, no purchasable membership, no vote-inflating fake members. | Must | 0 transferable governance instruments in the system; 0 governance outcomes correlated with contribution volume at audit | Erik Lindqvist | PR-FAQ §A.3, §E3 |
| BR-011 | Voting MUST be receipt-free and coercion-resistant: a voter MUST be unable to prove to a third party how they voted, and MUST be able to invisibly override a coerced vote. | Must | (a) Adversarial audit (PPT adversary with λ ≥ 128 bits, N ≥ 10,000 ballot observations, 95% confidence) finds no receipt construction — no cryptographic or operational artefact enables a voter to prove their choice to a third party; (b) 0 externally detectable override events — an adversary holding full operator logs, public record and network timing data cannot detect that a re-vote occurred; (c) coercion incident rate published as an upper bound from independent incident reports with a stated methodology — not as an operational observation rate, since re-voting is by design invisible (TD-06, FR-032) | Aisha Nkemdirim | PR-FAQ §A.4, §E3 |
| BR-012 | The platform MUST resist governance attacks — instantaneous voting-power acquisition and mob capture of an existing party's founding charter by a sudden membership flood. | Must | 0 successful takeovers; simulated flash-flood and flood-capture attacks fail in red-team exercise before Gate 2 | Rafael Duarte | PR-FAQ §E2 |
| BR-013 | Every candidate seeking election to a party office MUST complete a structured, member-visible debate process before their name appears on an election ballot; candidacy MUST be determined by a member vote following those debates, and incumbency MUST NOT confer any automatic right to candidacy or renomination. | Must | 100% of major-election ballots preceded by three completed debates per candidate; 0 automatic renominations detected at launch audit | Aisha Nkemdirim | CR-v1.1.0; GATE1-DECISION-2026-08-09.md (Change 4) |
| BR-014 | A party MUST be able to conduct its entire institutional life — creation, constitution, operation, decision-making, candidate selection, policy development, performance evaluation — transparently on the platform, so that its fitness to govern itself is publicly demonstrable before it asks for public power. | Must | ≥ 1 party completes full lifecycle (constitution → operation → candidate selection → performance report) on-platform with 100% public auditability; 0 institutional actions requiring off-platform records | Tomás Ferreira | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-015 | No committee, working group or human role may hold any capability that can change who wins, who votes, or who is a member; deliberative bodies produce proposals only; election administration, membership verification, vote counting, eligibility determination and data integrity MUST be executed by code. | Must | 0 non-code outcome-determinative paths present at security audit; 100% of committee outputs confirmed as proposals awaiting member vote; 0 human-discretion overrides on any vote count or eligibility result | Rafael Duarte | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-016 | Participation tiers (Supporter / Worker / Candidate) MUST be self-assigned and descriptive, never permissive — no human approves entry to any tier; tiers MUST NOT confer voting weight; differentiated eligibility per vote type is permitted, differentiated weight is not. | Must | 0 human-approval steps on any tier entry flow; verified by inspection that no tier attribute is used as a weight multiplier; ≥ 10 test scenarios confirm equal vote weight across all tiers | Grace Mbeki | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-017 | Supporter-tier participants MUST remain anonymous unconditionally under the existing anonymity guarantees; Worker- and Candidate-tier participants are public by explicit informed consent given at role-taking, with disclosure scaled to the power sought and published in advance. | Must | 0 confirmed deanonymisations of any Supporter-tier participant; 100% of Worker/Candidate role-takings preceded by recorded explicit informed consent; prior Supporter-period activity confirmed never retroactively linked in 100% of role-transition audit samples | Dr. Lena Kowalczyk | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0; resolves OI-13 |
| BR-018 | All removal and expulsion outcomes MUST require an affirmative quorum of members actively voting for the outcome — never silence, absence of a defender, or a human official's finding; investigation and recommendation functions publish records but hold no outcome power. | Must | 0 removal or expulsion outcomes that do not satisfy an affirmative quorum threshold; 100% of investigation/recommendation records published; 0 human-official unilateral removal or expulsion events | Daniel Okonkwo | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-019 | A party's constitution, manifesto commitments, finances, conflict-of-interest disclosures, audit reports, dispute records and performance scorecard MUST be public, append-only, and factual — informing members rather than concluding for them. | Must | 100% of required institutional records confirmed public and append-only at launch audit; 0 concluded verdicts substituted for factual records; scorecard data independently reproducible from source events | Erik Lindqvist | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0 |
| BR-020 | The platform MUST support multiple countries from the outset (verified identity → select legally eligible country → create/join a party), deployed to one pilot jurisdiction first per the Gate-1 disposition; platform party-creation MUST be distinct from legal registration, which the platform cannot grant or override. | Must | Multi-country architecture confirmed in Doc 03; ≥ 1 test scenario validates country-eligibility scoping; platform registration flow confirmed to include explicit boundary statement that platform creation ≠ legal registration in 100% of country-creation flows | Sofia Marchetti | Vision re-entry v2.0.0 (Rathish, 2026-08-10); Doc 01 v2.0.0; OI-04 |
| BR-021 | The platform MAY have a steward organisation for coordination — and MUST NOT need one: every citizen-facing capability (enrolment, party creation, voting, proposal submission, forking) MUST operate with zero dependency on any steward action, signature or liveness, so that the total disappearance of the steward body leaves the protocol operating unchanged. Steward powers are enumerated and exhaustive, bounded by the same test as every other body: nothing that changes who wins, who votes, or who is a member. | Must | 0 steward-dependency paths found by capability-absence testing in any citizen flow; steward-body vacancy (simulated) causes zero citizen-facing degradation | Rafael Duarte | GATE1-DECISION-2026-08-11.md Part B; design intent: the Bitcoin Foundation lesson (see §4.39 preamble) |

---

## 4. Functional Requirements (FR)

> Every FR traces up to a BR, carries a MoSCoW priority, a **named individual owner**, and a
> verification method. **Must** rows are the RTM's gating rows (Doc 08). `Verify by` values:
> **T** = Test, **D** = Demo, **I** = Inspection, **A** = Analysis (incl. independent audit).

### 4.1 Personhood & enrolment

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-001 | Issue at most one active personhood credential per real human being, and reject a second enrolment attempt by the same human with an explanatory, non-identifying result. | BR-006 | Must | Marcus Adeyemi | T, A |
| FR-002 | Enforce, for every action scope (petition, membership, proposal, ballot, nomination, recall), that a given person may act at most once, while making two actions by the same person in two different scopes indistinguishable from actions by two different people. | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-003 | MUST NOT persist, transmit onward, or make retrievable any identity document image, document number, biometric template, date of birth, or residential address after an enrolment check completes; only a non-identifying eligibility result may be retained. _(v2.3.0: FR-126 (§4.42) strengthens this requirement by specifying that raw credential material MUST be processed exclusively on the user's device and discarded before any network transmission — see §4.42 for the on-device posture; FR-003 continues to govern the prohibition on persistent storage.)_ | BR-009 | Must | Dr. Lena Kowalczyk | I, A |
| FR-004 | Support at least two mutually independent identity-attestation paths per launch region, publish each attestor's share of credentials issued per region, and refuse further issuance from any attestor whose share would exceed 50% in that region. _(✅ OI-20 DECIDED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md). Ruling verbatim: "the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment. FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level — Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency. Record the single-rail pilot as a Phase-1 DEPLOYMENT limitation with an explicit exit condition: Phase 2 adds eIDAS. No Charter guarantee is amended. State honestly, as an accepted pilot limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region. MUST: making single-issuer operation permanent would be a Charter-layer change requiring re-entry, never a deployment default. Record it. Close OI-20." **FR-004 normative text is NOT amended.** Phase-1 deployment limitation recorded honestly: (a) in Phase 1 a person without Aadhaar cannot enrol in the pilot region — accepted exclusion per TD-05/ADR-016; (b) FR-004's 50% attestor-share cap is inoperative during the Phase-1 single-rail deployment — the sole rail carries 100% share for the pilot's duration; this is a dated, accepted, findable limitation recorded not hidden. Exit condition: Phase 2 adds eIDAS 2.0 as the second rail (FR-121). Charter guard: making single-issuer operation permanent requires Charter-layer amendment process — see FR-129 (§4.43) and OI-20 resolution in §13.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | T, I |
| FR-005 | Revoke a personhood credential proven fraudulent, invalidate its future actions without altering the historical record, and provide a rejected or revoked applicant an appeal that requires no more personal data than the original check. | BR-006 | Should | Amara Diallo | T, D |
| FR-069 | Derive a deterministic nullifier from a stable personal identifier within the enrolment credential using a published derivation, such that the nullifier is computed without revealing the underlying identifier; store only the derived nullifier on the verifiable record; and MUST reject any enrolment attempt whose derived nullifier matches an existing record. The derivation MUST verify: (a) the credential was signed by a recognised issuer, (b) the credential has not expired, (c) the region attribute establishes the person's residency in the claimed region tree, (d) the nullifier was correctly derived. No name matching, biometric data storage, or administrative review is used for duplicate detection. _(Extends the enrolment circuit addressed in the C-03 security finding. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-070 | Present the credential source as a pluggable adapter interface with no single implementation hardcoded. The platform MUST support at minimum the following three CANDIDATE adapter types (non-exhaustive; none is hardcoded as the only supported path; region-level adapter selection is a configuration decision; Doc 03 confirms final specifications): **(a) eIDAS 2.0 wallet adapters** — government-issued digital-identity wallets conforming to the eIDAS 2.0 EUDI wallet framework or any equivalent national digital-identity regulation. The adapter MUST supply to the FR-069 derivation: (i) a qualified electronic attestation of attributes bearing a valid qualified trust-anchor signature, verified against the issuing member-state's trust anchor published in the applicable national or supra-national trust list; (ii) the stable personal identifier designated by the issuing state (e.g. the natural-person identifier in the Personal Identification Data attestation); (iii) a residency attribute placing the person in the claimed region tree. The derivation operates on field (ii). **(b) ICAO Doc 9303 NFC chip adapters** — biometric passports and NFC-enabled identity cards conforming to ICAO Doc 9303. The adapter MUST supply to the FR-069 derivation: (i) the Document Security Object (SOD) verifiable against the issuing state's Document Signer Certificate obtained from the ICAO public key directory; (ii) the stable identifier field — MRZ DocumentNumber or chip-resident pseudonymous identifier as designated by the issuing state; (iii) an attested residency claim from a recognised attestor. The derivation operates on field (ii). **(c) Offline paper KYC adapters** — government-signed offline identity verification flows for jurisdictions where digital wallets are not yet available (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or any equivalent government-signed offline assertion scheme). The adapter MUST supply to the FR-069 derivation: (i) a digitally signed or verifier-attested assertion carrying a government-assigned stable identifier; (ii) a residency attribute established by the attestor; (iii) evidence of the attestor's authorisation to operate in the region. The derivation operates on the stable identifier in field (i); no biometric data is retained after the attestor check. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, CON-005 | Must | Marcus Adeyemi | I, A |
| FR-073 | Designate, within each region, the government eID credential rail as the sole issuer class permitted to mint enrolment nullifiers; all other credential classes (liveness attestors, alternative identity providers) MUST be availability-only and MUST NOT create enrolment nullifiers; availability-only classes MAY attest liveness or authorise slow recovery as permitted by FR-071 and FR-072, but any such action MUST NOT grant membership or governance rights. _(Aligns with OI-03 Gate 1 disposition: government eID as sole Phase-1 uniqueness anchor per region. Relationship with ADR-003 issuer-plurality model requires architect review in Doc 03 — see §13 OI-12. Accepted exclusion per TD-05. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 8.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | I, A |

> ✅ v1.1.1 RESOLUTION (OI-12) — Resolved by ADR-016 (docs/adr/ADR-016-enrolment-issuer-hierarchy.md; Doc 03 §16): ADR-003 is amended for Phase 1; the Phase-1 single-issuer-class policy is reconcilable with the issuer-plurality model. OI-12 is closed.

### 4.2 Residency attestation & geographic hierarchy

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-006 | Establish that a person is resident in a named region without revealing their residential address to Trumocracy, to any party, or to any other member. | BR-004, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-007 | Maintain a versioned hierarchical region registry (nation ▸ state/province ▸ district ▸ ward) with stable region identifiers, such that a boundary change creates a new registry version and MUST NOT retroactively alter the eligibility, counts or results of any ballot, petition or election already closed. | BR-004, BR-002 | Must | Yuki Sato | T, I |
| FR-008 | Permit each person exactly one active residency scope at a time, derive every scope-restricted right from it, and require a minimum of 180 days between residency changes. | BR-004, BR-012 | Must | Marcus Adeyemi | T |
| FR-009 | Derive each region's eligible-population denominator from at least two mutually independent published sources, refuse to compute a threshold when those sources disagree by more than a published tolerance, and expose a dispute window during which a denominator may be challenged before it is used. | BR-002, BR-012 | Must | Yuki Sato | T, A |

### 4.3 Party drafting and the eight mandatory pillars

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-010 | Allow any verified citizen to create a party draft comprising a name, an emblem, exactly one declared jurisdiction (a region identifier from the registry), and a charter, with the drafter identified only pseudonymously; and reject a name or emblem that collides with an existing petition or active party in the same jurisdiction. | BR-001 | Must | Tomás Ferreira | T, D |
| FR-011 | Require content meeting a published minimum-substance standard in **all eight** pillars — Finance, Society, Governance, Law, Education, Healthcare, Security, Regional Plans — and MUST refuse publication of a draft in which any pillar is absent or below that standard, naming each deficient pillar. | BR-001 | Must | Tomás Ferreira | T, D |
| FR-012 | Allow a charter to declare its own amendment tiers, thresholds and timelocks, accept them only within published platform-wide bounds, and apply platform default values where the charter is silent. | BR-001, BR-008 | Should | Tomás Ferreira | T |

### 4.4 Petition lifecycle & threshold computation

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-013 | Place a published draft into a Petition state with a fixed expiry, archive an expired petition immutably, and impose a cooldown before the same drafter may re-petition with a substantially identical charter in the same jurisdiction. | BR-002 | Should | Tomás Ferreira | T |
| FR-014 | Accept at most one endorsement per person per petition, accept it only from a person whose active residency scope lies within the petition's declared jurisdiction, and make endorsements non-transferable, non-purchasable and non-delegable. | BR-002, BR-006, BR-010 | Must | Tomás Ferreira | T, A |
| FR-015 | Allow an endorser to withdraw an endorsement at any time before activation and decrement the count accordingly, without revealing who withdrew. | BR-002 | Should | Tomás Ferreira | T |
| FR-016 | Compute the activation threshold entirely in code as a published percentage of the declared jurisdiction's eligible-population denominator, and MUST NOT permit any actor to set, waive, lower or override a threshold for an individual party. | BR-002, BR-008 | Must | Tomás Ferreira | T, I |
| FR-017 | Display live petition progress (current count, threshold, percentage, time remaining) publicly, without revealing the identity of any endorser and without revealing which persons have not endorsed. | BR-002, BR-009 | Should | Erik Lindqvist | T, D |

### 4.5 Party activation

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-018 | Activate a party automatically, with no human approval step available to anyone, when its endorsement count has met or exceeded the threshold continuously for a published dwell period; and record immutably at activation the charter version, the endorsement count, the denominator value and the identity of the denominator sources used. | BR-002, BR-008 | Must | Tomás Ferreira | T, I, A |
| FR-019 | Prevent any change to a party's declared jurisdiction after activation; expansion into another jurisdiction MUST require a fresh petition meeting that jurisdiction's own threshold. | BR-002, BR-012 | Should | Tomás Ferreira | T |

### 4.6 Membership: open onboarding and equal standing

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-020 | Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto available to any existing member, office-holder, drafter or platform actor. _(v2.3.0 per Decision 2 (DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Rathish, 2026-08-20); v2.3.1 ISS-03: scoping sentence added. **Scope of this annotation: open-tier (non-counted) joining only.** The normative text of FR-020 — 'Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto' — applies in full and without amendment to COUNTED membership. This annotation records the Decision 2 extension to open-tier joining only: a citizen may join the platform for non-counted (open-tier) participation (FR-122) without first completing personhood verification. The no-approval / no-sponsorship / no-interview / no-invitation / no-fee / no-veto properties are retained in full and extended to open-tier entry; these admission properties apply without exception to COUNTED membership. Verified personhood is required only for counted actions (FR-123); it is not a gate on open-tier joining. _(v2.4.0 per OI-19 ruling (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md): composition confirmed — invite-gating in FR-125 is a rate-limiter on the default open-tier path, never an admission condition; FR-020's admission guarantee is discharged by the always-open non-invite fallback mandated in FR-125; FR-020 is unamended and absolute.)_ | BR-003, BR-008 | Must | Grace Mbeki | T, D |
| FR-021 | Grant every member of a party exactly one vote of identical weight in every party ballot, and MUST NOT expose any mechanism by which standing, weight, precedence or privilege can differ between members on grounds of seniority, office, tenure, contribution or any other attribute. _(v2.3.0 per Decision 2 (DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Rathish, 2026-08-20): one-member-one-vote applies to binding ballots, which are personhood-gated under FR-123 (counted actions require verified personhood, also FR-002 per-scope nullifier). Verification gates whether an action COUNTS; it does NOT create weight differences among verified members. FR-021 applies in full to all verified (counted) members — no tier multiplier, no seniority weight, no other differentiation.)_ | BR-003, BR-010 | Must | Grace Mbeki | T, I, A |
| FR-022 | Allow a member to leave a party at any time, taking immediate effect on their rights, with no exit approval, penalty or notice period. | BR-003 | Must | Grace Mbeki | T |
| FR-023 | Withhold governance rights (proposing, voting, nominating, endorsing a nomination, initiating or signing a recall) from a new member until a published maturation period has elapsed since joining; and rate-limit each person's join/leave transitions per party and in aggregate per period. | BR-012 | Must | Rafael Duarte | T, A |
| FR-064 | Enforce that a verified person holds active membership in at most one party at a time; joining a new party MUST automatically void membership in the current party; switching parties MUST reset the membership tenure clock to zero. This constraint MUST be enforced by a global membership-scope nullifier that cannot be bypassed by leaving and re-joining within the same session. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 2.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |
| FR-068 | Apply a maturation requirement of at least one month of continuous membership at the eligibility snapshot for any vote or governance action; MUST waive this requirement for all members of a party during that party's first three calendar months of active status; during any such waiver the growth-surge defence controls mandated by FR-023 and FR-028 MUST remain fully active — the waiver relaxes tenure only and MUST NOT relax anti-capture mechanisms. _(Growth-surge defence verified by UT-0220. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 5.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |

### 4.7 Proposals, charter amendment, tiers and timelocks

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-024 | Allow any matured member to submit a proposal, declaring its tier, with no pre-screening, moderation or approval by any member, office-holder or platform actor. _(v2.1.0 per OI-14 decision: submitting a proposal — original or competing — requires Worker tier or above, because authorship is public (FR-090) and an anonymous Supporter cannot author without breaking their own anonymity. This is not a gate: Worker tier is self-declared (FR-080), so any member who wishes to author simply declares. Supporters retain full voting rights.)_ | BR-003, BR-008 | Must | Tomás Ferreira | T, D |
| FR-025 | Enforce distinct, monotonically escalating quorum and supermajority requirements across at least four proposal tiers — ordinary, policy, charter, entrenched — and MUST reject the enactment of any proposal that fails either the quorum or the supermajority for its declared tier. | BR-008, BR-012 | Must | Tomás Ferreira | T |
| FR-026 | Impose a mandatory timelock between a proposal passing and taking effect, of a duration that increases with tier, during which the pending change is public and no actor can shorten, waive or bypass it. | BR-008, BR-012 | Must | Tomás Ferreira | T, I |
| FR-027 | Permit a charter to designate specific founding clauses as **entrenched**, and enforce for those clauses the highest tier, the longest timelock, and a quorum satisfiable only by members whose membership predates the proposal by a published minimum age. | BR-012 | Must | Rafael Duarte | T, A |
| FR-028 | Fix the set of eligible voters for a proposal at the instant the proposal opens, and exclude from that proposal every person who joins, matures into rights, or changes residency after that instant. | BR-012 | Must | Rafael Duarte | T |
| FR-029 | Allow a proposer to withdraw or amend a proposal before voting opens (and not after), and rate-limit proposal submission per person per period to prevent flooding. | BR-008 | Should | Tomás Ferreira | T |

### 4.8 Anonymous, receipt-free voting

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-030 | Record each ballot such that no actor — including Trumocracy, an infrastructure operator, a party, an office-holder, or a colluding subset of them — can link a cast ballot to the person who cast it, while still proving that the ballot came from exactly one eligible, not-yet-counted voter. | BR-009, BR-011 | Must | Dr. Lena Kowalczyk | T, A |
| FR-031 | Ensure a voter cannot produce, export, screenshot, reconstruct or be issued any artefact that proves to a third party how they voted, including under voluntary cooperation by the voter. | BR-011 | Must | Aisha Nkemdirim | T, A |
| FR-032 | Allow a voter to cast a replacement ballot at any time before the ballot closes, count only the last ballot cast, and ensure that neither the public record, the client device, nor any notification reveals that a replacement occurred or how many were cast. | BR-011 | Must | Aisha Nkemdirim | T, A |
| FR-033 | Produce for every closed ballot a publicly published result that any third party can independently re-compute from public data and confirm to be correct, without trusting Trumocracy or any operator, and without learning any individual vote. | BR-005, BR-008 | Must | Erik Lindqvist | T, D, A |
| FR-034 | Withhold all interim tallies, partial counts, turnout-by-option figures and exit-style projections until a ballot closes. | BR-011 | Should | Aisha Nkemdirim | T |
| FR-035 | MUST NOT provide any mechanism to transfer, sell, lend, delegate, proxy, assign or inherit a vote, an endorsement or a nomination right, and MUST reject any attempt to do so. | BR-010, BR-011 | Must | Erik Lindqvist | T, I, A |

### 4.9 Candidate nomination scoped to region and office

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-036 | Allow a matured member to nominate **only themselves**, only for an office whose region equals or contains the member's active residency scope, subject to a published minimum number of nomination endorsements from matured members resident in that region; and allow withdrawal of a candidacy at any time before the ballot locks. | BR-004 | Must | Aisha Nkemdirim | T, D |
| FR-037 | Require, before a candidacy is published, an explicit, separately recorded, informed consent in which the member acknowledges that their real-world identity becomes public; and MUST NOT disclose the identity of any person who is not a consenting candidate or office-holder under any circumstance. | BR-009 | Must | Dr. Lena Kowalczyk | T, I, A |
| FR-038 | State in that consent, before it is given, that disclosure is irreversible for the duration of the candidacy and any resulting term of office, and that consent may be revoked only by withdrawing the candidacy before the ballot locks. | BR-009 | Should | Sofia Marchetti | I, D |
| FR-065 | Allow each matured party member to cast at most one feedback vote per candidate per election, where an upvote scores +3 and a downvote scores −1; the one-vote-per-member constraint MUST be enforced by the same nullifier mechanism as scope-action limits; individual votes MUST remain private and unlinkable to their caster; only the aggregate tally MUST be publicly visible. An ADR (architect's responsibility, Doc 03) will record the deliberate asymmetry rationale; this requirement states only the scoring rule, privacy asymmetry, and single-vote enforcement. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 3.)_ | BR-004, BR-005 | Must | Aisha Nkemdirim | T, A |

### 4.10 Internal party elections

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-039 | Run each internal election for one (region, office) pair, admit as voters only matured members whose active residency scope lies within that region, publish the full timetable before opening, and prevent any change to the timetable, candidate set or tie-break rule after opening. | BR-004, BR-008 | Must | Aisha Nkemdirim | T, I |
| FR-040 | Publish the election result and assign the office role automatically in code on close, with no confirmation, ratification, veto or appointment step available to any member, drafter, office-holder or platform actor. | BR-004, BR-008 | Must | Aisha Nkemdirim | T, D |
| FR-041 | Enforce the fixed term length declared in the charter, expiring the office automatically at term end and requiring a fresh election to continue. | BR-005 | Should | Aisha Nkemdirim | T |

### 4.11 Recall of representatives

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-042 | Allow any matured member resident in an office's region to initiate a recall of that office's holder at any point during the term, without approval from the office-holder, any other office-holder, the drafter, or any platform actor. | BR-005 | Must | Aisha Nkemdirim | T, D |
| FR-043 | Require recall to pass two stages — an initiation-signature threshold followed by a recall ballot whose approval bar is strictly higher than the bar that elected the office-holder — with both bars published before initiation opens. | BR-005, BR-012 | Must | Aisha Nkemdirim | T |
| FR-044 | Impose a published grace window after an election during which no recall may be initiated, and a cooldown after a failed recall before the same office may be targeted again. | BR-005, BR-012 | Should | Daniel Okonkwo | T |
| FR-045 | Revoke the office role automatically in code upon a successful recall, and open a by-election for that (region, office) pair within a published number of days. | BR-005, BR-008 | Must | Aisha Nkemdirim | T, D |

### 4.12 Manifestos, commitments and immutable version history

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-046 | Publish, for every active party, a public, machine-readable manifesto and a set of dated commitments, each carrying a status (in progress / met / not met) and links to supporting evidence. _(v2.0.0: SUPERSEDED — absorbed and strengthened by the manifesto-commitment requirements in §4.28; superseded by FR-094 and FR-095. Retained for traceability; do not implement separately.)_ | BR-005 | Should | Erik Lindqvist | T, D |
| FR-047 | Preserve every published charter, pillar and manifesto version immutably: an edit MUST create a new version that supersedes but never overwrites, every prior version MUST remain publicly retrievable, and a diff between any two versions MUST be viewable. | BR-005, BR-008 | Must | Erik Lindqvist | T, I |
| FR-048 | Attribute publicly to the office-holder every governance vote they cast in their capacity as office-holder, while continuing to keep their votes as an ordinary member anonymous. | BR-005, BR-009 | Should | Erik Lindqvist | T, A |

### 4.13 Treasury: transparency and anti-corruption

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-049 | Enforce in code a per-person cap on contributions to any one party within a rolling period, and reject a contribution that would exceed it. | BR-010 | Should | Erik Lindqvist | T |
| FR-050 | Publish every treasury inflow and outflow as an itemised, publicly readable, independently verifiable record. _(v2.0.0: raised to Must per BR-019 — financial transparency is now a business requirement, not an enhancement.)_ | BR-005, BR-010 | **Must** | Erik Lindqvist | T, D |
| FR-051 | Ensure that no payment, contribution, donation, sponsorship or in-kind transfer of any size grants or influences membership, standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering, visibility or any other governance advantage; and MUST reject any configuration that would create such a link. | BR-010 | Must | Erik Lindqvist | T, I, A |
| FR-052 | Require an approved member proposal for any outflow above a charter-declared amount, and rate-cap outflows below it. | BR-005, BR-010 | Could | Erik Lindqvist | T |

### 4.14 Party fork and split

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-053 | Allow any member to fork an active party's charter and manifesto into a new draft that records its lineage (source party and exact source versions), and require the fork to enter the Petition state and meet the full activation threshold on its own. | BR-001, BR-003 | Could | Tomás Ferreira | T, D |

### 4.15 Audit and public verifiability

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-054 | Emit for every governance action — enrolment issuance count, endorsement, activation, join, leave, proposal, ballot cast, tally, nomination, election result, recall, charter amendment, treasury movement, display-filtering action — a publicly readable, tamper-evident record sufficient to reconstruct the outcome, and containing no personal data. | BR-005, BR-008, BR-009 | Must | Erik Lindqvist | T, I, A |
| FR-055 | Provide an open-source verifier that any third party can obtain and run without an account or Trumocracy cooperation, which re-computes every published count, threshold and tally from public data and reports agreement or disagreement; and provide a complete public-history export for any party. | BR-005, BR-008 | Should | Erik Lindqvist | T, D |

### 4.16 Moderation-by-code boundaries

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-056 | MUST NOT expose to any Trumocracy employee, operator, funder, office-holder, drafter or other privileged actor any capability to delete or edit published party content, remove or suspend a member, alter a count or tally, block a lawful governance action, or reorder a candidate set. The **only** permitted intervention is jurisdiction-scoped filtering of the *display* of content unlawful in the jurisdiction where it is displayed, which MUST be recorded in a public log identifying the jurisdiction, the legal basis and the affected item, and MUST NOT remove or alter the underlying record. | BR-008, BR-009 | Must | Daniel Okonkwo | I, A, T |
| FR-057 | Provide a public register of every display-filtering action with an appeal route, and publish a periodic transparency report of all legal demands received and the response given. | BR-005 | Could | Sofia Marchetti | I, D |

### 4.17 Account recovery

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-058 | Allow a citizen who has lost access to regain control of their personhood credential and residency scope without ever having been shown, stored or required to memorise a seed phrase or key material, subject to a published timelock, a notification to the account's registered channel, and a cancellation window during which the legitimate holder can abort the recovery. | BR-007 | Must | Amara Diallo | T, D |
| FR-059 | Ensure that recovery re-keys access only, and that no participant in a recovery — helper, guardian, attestor, support agent or operator — can thereby learn the subject's party memberships, past ballots, endorsements or governance history. | BR-009 | Must | Dr. Lena Kowalczyk | T, A |
| FR-071 | When an enrolment attempt produces a nullifier that matches an existing record, treat it as a recovery flow: the user MUST re-authenticate with their credential, re-derive the same nullifier, prove current key ownership, and rotate keys; membership, tenure and governance history MUST survive intact; no second identity MUST be created. This is the exclusive path for a person who has lost key material but retains their credential. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | BR-006, BR-007, BR-009 | Must | Amara Diallo | T, A |
| FR-072 | The nullifier-collision recovery flow (FR-071) MUST impose a minimum seven-day delay before key rotation completes; during the delay the active key MUST be able to veto the recovery by submitting a veto signal; the recovering credential MUST be barred from casting any vote during the delay; a notification MUST be sent to the registered channel at recovery initiation; and the veto window MUST be at least equal to the full seven-day delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | BR-007, BR-009, BR-012 | Must | Rafael Duarte | T, A |

### 4.18 Cost abstraction and fee sponsorship

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-060 | Complete every primary citizen flow (enrol, draft, endorse, join, propose, vote, nominate, stand, recall, recover) without the citizen holding, acquiring, funding or spending any token, cryptocurrency, balance or payment instrument, and without exposing the words for such concepts in any primary flow. | BR-007 | Must | Hiroshi Tanaka | T, D, I |
| FR-061 | Meter each person's platform-sponsored actions against a published per-person periodic budget, and when a budget or the global sponsorship pool is exhausted, degrade by delaying or queueing the action with a clear explanation and an expected time — and MUST NOT reject, charge for, or permanently deny a legitimate governance action. | BR-007, BR-012 | Must | Hiroshi Tanaka | T |

### 4.19 Public participation profile

> ✅ v2.0.0 RESOLUTION — OI-13 is resolved by the three-tier privacy ruling (BR-017): FR-062's universal public profile is SUPERSEDED by FR-082..FR-086 (the tier-scoped participation-record requirements in §4.24). Supporters have no public profile, unconditionally; Workers and Candidates have a public participation record by explicit informed consent at role-taking. FR-063 (ballot-direction MUST NOT) continues to apply to every tier and is NOT superseded.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-062 | Expose on each verified-citizen profile the following participation record, visible to any actor: (a) the list of ballots and elections in which they participated, without revealing their ballot direction on any contested vote; (b) their current and historical party memberships; (c) the petitions they have endorsed; (d) the proposals they have authored; (e) the debates they have attended (per FR-066). Exception: votes cast by an elected representative in their official office capacity MUST be publicly attributed per FR-048. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ _(v2.0.0: SUPERSEDED by FR-082..FR-086 (three-tier participation-record requirements in §4.24) per BR-017; see OI-13 resolution. Retained for traceability; do not implement.)_ | BR-005, BR-009 | Must | Erik Lindqvist | T, I, A |
| FR-063 | MUST NOT disclose a member's ballot direction on any contested vote through any interface, export, log, inference or combination of public data; the prohibition applies to profile views, public records, and any derived dataset. Exception: the direction of a vote cast by an elected representative in their office capacity is public as required by FR-048. **Test obligation: UT-0700 and UT-0701 MUST verify the absence of any ballot-direction disclosure path.** _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ | BR-009, BR-011 | Must | Dr. Lena Kowalczyk | T, I, A |

### 4.20 Mandatory pre-election debates

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-066 | Schedule and require three debates per candidate before every major election; each debate MUST cover one of the following topic areas: (a) local conditions, (b) local problems, and (c) the work required for the office; debate content MUST be stored via a publicly verifiable external reference address recorded on the verifiable record; scheduling, attendance attestation, and the post-debate member vote on each candidate MUST be recorded on the verifiable record. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004 | Must | Aisha Nkemdirim | T, I, A |
| FR-067 | Determine candidacy from the post-debate member vote on each candidate's suitability; incumbency MUST NOT confer any automatic advancement to a ballot; no candidate MUST be renominated automatically without completing the full debate and post-debate vote process for the current election cycle. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004, BR-012 | Must | Aisha Nkemdirim | T, I |

### 4.21 Country selection & the legal-registration boundary

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-074 | After personhood enrolment, the system MUST require the user to select exactly one country in which they are legally eligible to participate in party politics; legal eligibility MUST be checked by code against published per-country rules; the selected country scopes the region tree (FR-007) and all residency-derived rights; a user MUST NOT hold more than one active country selection at a time; any change of country selection MUST be governed by the residency-change discipline in FR-008. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-020, BR-006 | Must | Marcus Adeyemi | T, I |
| FR-075 | The system MUST distinguish platform party creation from legal party registration; the system MUST record and display a party's legal-registration status per jurisdiction as an externally attested fact; the system MUST NOT represent platform activation as legal registration; the system MUST NOT grant, deny, or override a party's legal registration in any jurisdiction; every party-facing surface MUST state the distinction between platform activation and legal registration in terms visible to the user. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-020 | Must | Sofia Marchetti | I, D |

### 4.22 Party founding & the public digital constitution

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-076 | Party creation requires a published founding-member set meeting the count set in the published platform rule for the relevant jurisdiction and a public digital constitution; the constitution MUST contain all mandatory sections with machine-checkable presence — governance rules, membership rules, financial rules, conflict-of-interest rules, candidate-selection rules, leadership and term rules, and the manifesto; the system MUST refuse publication and MUST name every missing section before party creation may proceed, following the same pattern as FR-011's mandatory policy pillars. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-019 | Must | Tomás Ferreira | T, D |
| FR-077 | Every party constitution MUST contain the platform's standard non-violence clause (the text published by the platform); the system MUST refuse publication of any new constitution and MUST refuse every subsequent amendment if the non-violence clause is absent or has been altered from the standard text; the presence and integrity of the non-violence clause MUST be verified by code with no human judgment in the path. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014 | Must | Daniel Okonkwo | I, T |
| FR-078 | Every party constitution MUST be versioned immutably following the discipline of FR-047 and MUST be amendable only through the tiered proposal process defined in FR-025 and FR-026; any section of the constitution MAY declare entrenchment per FR-027. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-008 | Must | Tomás Ferreira | T, I |

### 4.23 Participation tiers — self-assigned, descriptive, never permissive

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-079 | The system MUST define exactly three participation tiers per party: Supporter, Worker, and Candidate; a user MUST be automatically assigned to the Supporter tier upon joining a party; tier assignment is descriptive metadata only; tiers MUST NOT confer voting weight, standing, or precedence (FR-021 is unchanged and applies in full); differentiated eligibility per vote type is permitted only where a published, code-checked rule defines it; differentiated weight between tiers MUST NOT exist under any configuration. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016 | Must | Grace Mbeki | T, I, A |
| FR-080 | Worker tier MUST be self-declared with no approval required from any human; the recorded work is the sole credential for the tier; before a Worker declaration is confirmed the user interface MUST state plainly that becoming a Worker is permanent for the term and makes the user's participation record public for the duration of the term; the act of declaration constitutes the informed-consent event referenced in §4.24. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016, BR-017 | Must | Grace Mbeki | T, D, I |
| FR-081 | Candidate tier MUST be self-nominated following FR-036, with eligibility checked by code against published rules; candidacy MUST be decided by the post-debate member vote per FR-067; no human MAY approve, reject, or rank a candidacy at any point in the path; every tier transition MUST be recorded append-only with its state (active/inactive) and MUST NOT be deleted. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-016, BR-013 | Must | Aisha Nkemdirim | T, I |

### 4.24 Three-tier privacy & the tier-scoped participation record _(supersedes FR-062)_

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-082 | Supporter-tier participants MUST be anonymous unconditionally: the system MUST store only a nullifier for a Supporter; no attributable record MUST exist for them; no profile surface MUST exist for a Supporter; NFR-001, NFR-002, and NFR-024 apply to the Supporter tier without exception. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | T, I, A |
| FR-083 | Worker- and Candidate-tier participants MUST have a public participation record beginning from the informed-consent event: the record MUST include role-relevant activity (work recorded, proposals authored in role, debates attended, candidacies held, and committee memberships); the record MUST NOT disclose ballot direction on any contested vote (FR-063 applies to every tier); votes cast by a holder of elected office in their office capacity MUST be attributed per FR-048. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-005 | Must | Erik Lindqvist | T, I, A |
| FR-084 | The system MUST ensure that disclosure scales with the power sought; the platform MUST publish, before any declaration or nomination window opens, the exact disclosure schedule per role (Worker, Candidate, and Office-holder in ascending disclosure scope); no category of information not listed in the published disclosure schedule for a role MAY be demanded of a person in that role after their declaration or nomination event. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017 | Must | Dr. Lena Kowalczyk | I, D |
| FR-085 | The informed-consent event MUST cover the entire campaign and any resulting term and is irrevocable for that term; withdrawal from candidacy before the nomination window closes is permitted and MUST cause the system to destroy the disclosure data submitted for that withdrawn candidacy. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-16 decision: the confidential-class carve-out is ADOPTED — pre-nomination disclosure data is confidential-class (FR-106), never enters the append-only governance record, and is destroyed on withdrawal; the withdrawal right is honoured rather than excepted. Public records of completed actions remain append-only without exception (FR-107).)_ | BR-017, BR-009 | Must | Sofia Marchetti | I, T |

> **✅ v2.1.0 — OI-16 DECIDED (Rathish, 2026-08-11):** confidential-class carve-out adopted. A withdrawn candidate's disclosures were submitted under a consent that never completed; destroying them honours the withdrawal right rather than excepting the append-only rule. See GATE1-DECISION-2026-08-11.md §3.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-086 | A Supporter who subsequently takes a public role (Worker or Candidate) MUST have their prior supporter-period activity remain anonymous permanently; the system MUST NOT link the anonymous Supporter identity to the public Worker or Candidate identity retroactively through any data the system holds or emits, or through any combination of public data outputs; the test obligation is in the style of UT-0700/UT-0701 (absence-of-path verification). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | T, A |

### 4.25 Committees — deliberation without decisional power

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-087 | Parties MAY form committees, including a steering committee capped at 30 members and working groups; a committee's only permitted output is a proposal that enters the ordinary proposal lifecycle defined in §4.26 with no special status, precedence, or extra weight; committee composition and meeting minutes MUST be public. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-014 | Must | Tomás Ferreira | T, I |
| FR-088 | Committees MAY hold only capabilities that cannot change who wins, who votes, or who is a member — specifically: event organisation, campaign coordination, facilitation, vendor management, and publishing; election administration, membership verification, vote counting, eligibility determination, and data-integrity operations MUST be executed by code with no committee or human path available; any configuration that grants a committee a capability that touches an election or membership outcome MUST be rejected by the system. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-008 | Must | Rafael Duarte | I, A, T |
| FR-089 | Committee membership MUST expire mechanically at term end (contract expiry) with no human renewal path; continuation of a committee into a new term requires a fresh member vote; expiry MUST be code-enforced following the same discipline as office terms in FR-041. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015 | Must | Rafael Duarte | T, I |
| FR-090 | Proposal authorship MUST be public; any member MAY submit a competing proposal on the same question; every competing proposal MUST be presented with equal standing and voted in the same decision window as the original proposal. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-14 decision: authorship is public; authoring — original or competing — requires Worker tier or above; the right to submit a competing proposal is unchanged for any Worker-tier-or-above member; Supporters retain full voting rights on every proposal and may self-declare Worker at any time to author.)_ | BR-015, BR-003 | Must | Tomás Ferreira | T, D |

> **✅ v2.1.0 — OI-14 DECIDED (Rathish, 2026-08-11):** Worker tier and above may author; authorship stays public; Supporters retain full voting rights and may self-declare Worker at any time to author. See GATE1-DECISION-2026-08-11.md §3.

### 4.26 Proposal lifecycle & the permanent decision trail

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-091 | Every proposal MUST move through the published lifecycle stages in sequence — proposal → review → discussion → debate → vote → decision → implementation → measurement — with stage transitions executed by code per published timelines; no stage MAY be skipped, reordered, or human-vetoed; the review, discussion, and debate stages are deliberative and produce records, never outcomes. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-008 | Must | Tomás Ferreira | T, I |
| FR-092 | The system MUST maintain a permanent decision trail for every decision, comprising: the proposal and any competing proposals, authorship (per FR-090; OI-14 decided 2026-08-11 — Worker tier and above), deliberation records, the vote result, the enacted consequence, implementation status, and measured outcome; the complete trail MUST be reconstructable end-to-end by any third party from public data alone. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-014, BR-019 | Must | Erik Lindqvist | T, I, A |

### 4.27 Candidate selection — schedule and member questions

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-093 | Candidate selection MUST run on a published schedule comprising: nomination window, question phase, debates per FR-066, post-debate member vote per FR-067, and election; during the question phase any matured member MAY submit questions to any candidate; questions and answers MUST be placed on the public record; unanswered questions MUST be visibly recorded as unanswered. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-013, BR-004 | Must | Aisha Nkemdirim | T, D, I |

### 4.28 The manifesto as a living, measurable commitment set

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-094 | The manifesto MUST be a structured, machine-readable commitment set with explicit time horizons of 1, 3, 5, 10, and 30 years and per-sector plans; every sector plan MUST carry a baseline, target, budget, timeline, measurement method, and a named owner; the system MUST refuse publication and MUST name every missing field, following the same pattern as FR-011. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-014 | Must | Erik Lindqvist | T, I |
| FR-095 | Every manifesto commitment MUST carry a stable per-commitment ID with a progress status and linked evidence; status updates MUST be append-only (status transitions recorded, history never rewritten); the manifesto commitment set supersedes and absorbs FR-046 (already marked superseded). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Erik Lindqvist | T, I, A |

### 4.29 Financial transparency & anomaly detection

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-096 | Run mechanical anomaly detection over the public treasury record against a published rule set comprising at minimum: velocity anomalies, structuring and threshold-splitting patterns, counterparty concentration, and round-tripping patterns; publish every flag on the party's transparency dashboard; a flag is information for members and auditors — it MUST NOT freeze funds, block any governance action, or trigger any human enforcement pathway; consequences of a flag flow only from member votes or code rules the charter declares in advance. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-010 | Must | Erik Lindqvist | T, A |

### 4.30 Conflict-of-interest disclosure & recusal

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-097 | Require every public-tier role-taker (Worker, Candidate, Office-holder, committee member) to file a conflict-of-interest disclosure on the published schedule and on any material change; disclosures are public-class data; a missing or overdue disclosure MUST be visibly flagged by code on the participation record. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-019 | Must | Ingrid Bergqvist | I, T |
| FR-098 | Ensure COI review is investigation-and-recommendation only: per-case sortition reviewers (per FR-101 mechanics) publish findings and MAY recommend recusal; a recusal takes effect only by the subject's recorded voluntary compliance, a member vote, or a code rule declared in the charter; no reviewer, panel or investigation body holds any outcome power. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-015 | Must | Ingrid Bergqvist | I, D |

### 4.31 Independent internal audit

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-099 | Provide every active party with an independent internal audit function — auditors selected per-case by sortition from eligible members, never forming a standing body; auditors MUST have read-only access to all party records including restricted-class; reports MUST be published on a published schedule; audit findings inform but carry no enforcement power. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-015 | Must | Ingrid Bergqvist | I, A |

### 4.32 Dispute resolution with defined timelines

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-100 | Enforce published maximum timelines per dispute stage — intake acknowledgment, evidence window, panel formation, recommendation publication, and the deciding member vote or code execution; MUST record every stage transition on the decision trail; a breached timeline MUST itself be visibly recorded on the decision trail. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018 | Must | Ingrid Bergqvist | T, I |
| FR-101 | Draw appeal and review panels per case by verifiable random selection (sortition) from the eligible member set, with published eligibility criteria and a selection proof reproducible by any third party; no standing panel body may exist anywhere; panel outputs are recommendations to the membership or inputs to code rules — never binding rulings. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-015 | Must | Rafael Duarte | T, A |

### 4.33 Explicit member rights

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-102 | Publish a machine-readable member-rights charter comprising at minimum: join/leave at will (FR-020/FR-022), equal vote (FR-021), propose (FR-024), compete (FR-090), stand (FR-036), appeal (FR-100/FR-101), fork (FR-053), records access (FR-054/FR-055), anonymity per tier (BR-017); every right MUST map to a code-enforced capability; no party charter may reduce any right below the platform floor and any such configuration MUST be rejected by the system. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(The fork right listed here tracks FR-053's priority and flag status; fork initiation remains an open critical with the flag OFF above dev — see §13.)_ | BR-016, BR-003 | Must | Grace Mbeki | I, T |

### 4.34 Conduct votes, removal from role, and expulsion from party

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-103 | Allow matured members to cast conduct votes (up/down) on public-tier participants using the same nullifier, privacy, and anti-capture mechanics as policy votes; individual conduct votes MUST be private, aggregates public; conduct votes on Supporter-tier participants MUST be impossible by construction — no addressable identity exists in that tier. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, A |
| FR-104 | Require removal from a role, team or committee to pass an affirmative quorum of members actively voting to remove, at a published bar; silence or absence MUST NOT remove; the accused MUST have a published statement on the record before the vote window closes — or the expiry with no statement MUST itself be recorded; the growth-surge defence (FR-023/FR-028 discipline; UT-0220) MUST apply to removal votes so that an influx cannot drive one. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, I, A |
| FR-105 | Treat expulsion from a party as a distinct action with a strictly higher bar than removal from any role, requiring its own published affirmative quorum and supermajority; the same statement right and surge defence MUST apply; expulsion MUST revoke membership with a state transition recorded, but MUST NOT alter any historical records. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ _(v2.1.0 per OI-15 decision: expulsion applies to public-tier participants (Worker, Candidate, Office-holder, committee member) ONLY. Supporters are anonymous by design and cannot be expelled — building that capability would require deanonymising them, which is refused. Supporter-tier fraudulent enrolment is addressed by FR-005 credential revocation, which acts on the credential rather than the person.)_ | BR-018, BR-012 | Must | Daniel Okonkwo | T, I, A |

> **✅ v2.1.0 — OI-15 DECIDED (Rathish, 2026-08-11):** public-tiers-only expulsion; FR-005 credential revocation for supporter-tier fraud. See GATE1-DECISION-2026-08-11.md §3.

### 4.35 Data classification & the append-only lifecycle

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-106 | Ensure every data entity carries exactly one of three classifications — public, restricted, or confidential — assigned in the §7 inventory; classification governs storage, access, and publication; an unclassified entity MUST NOT be storable. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | I, A |
| FR-107 | Ensure nothing is deleted — every governed entity is active or inactive; state transitions MUST be appended with timestamp and cause; history MUST NOT be rewritten; the sole recorded exception is pre-nomination disclosure data (FR-085), which is confidential-class and never enters the governance record — carve-out ADOPTED per OI-16 (2026-08-11). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-008 | Must | Erik Lindqvist | T, I |
| FR-108 | Ensure the public verifiable record carries only proofs, timestamps, counts, and governance events; it MUST NOT be used as the application data store; restricted- and confidential-class data MUST NOT be written to any public chain in any form (CON-002/CON-008/NFR-010 discipline). _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-009 | Must | Rafael Duarte | I, A |

### 4.36 Transparency dashboard & performance scorecard

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-109 | Provide each party with a public transparency dashboard presenting: governance activity, treasury summary with anomaly flags (FR-096), participation aggregates, commitment progress (FR-095), and dispute-timeline compliance — aggregate-only, no per-member drill-down anywhere. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Yuki Sato | T, D |
| FR-110 | Present the performance scorecard with commitments versus measured progress factually, with published methodology, baselines, and evidence links; it MUST NOT rank parties, score them against each other, or emit editorial conclusions; the scorecard informs, it does not conclude. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-019, BR-005 | Must | Yuki Sato | I, D, A |

### 4.37 Behavioural-analytics prohibition (approver decision)

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-111 | NOT implement per-user behavioural tracking of any kind — clicks, page views, section views, dwell time, reading trails, or any equivalent event tied to a person, credential, nullifier, session, or device; analytics MUST be aggregate-only with no per-user attribution path; personalisation MUST be client-side and user-held, never transmitted or stored server-side; the existing guarantees UT-0525 (indexer records no reader, query or IP) and UT-0740 (client carries no beacon, analytics global or tracking attribute) are preserved and extended to every new v2 surface. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-017, BR-009 | Must | Dr. Lena Kowalczyk | I, T, A |

### 4.38 Trust-anchor lifecycle governance (ruling 4 applied to SC-13/SC-14)

> The SC-01 re-scan (artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md) raised SC-13 (HIGH — no trust-anchor revocation/emergency-update path) and SC-14 (MEDIUM — unspecified governance tier for rotation). Ruling 4 answers both in principle: these are governance actions decided by member vote and executed by code — never by an operator. FR-112/FR-113 specify the requirement; the design change in Doc 03 is owed after Gate 1.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-112 | Treat revocation of a compromised trust anchor as a platform-governance action decided by member vote through the platform-wide tiered process (NFR-017) at its highest tier, with a published expedited emergency variant (shortened but non-zero timelock, published duration); on enactment, code MUST suspend new enrolments against the revoked anchor; no operator, funder or employee path MUST exist for revocation; already-enrolled credentials are unaffected except as a separately voted decision. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-006, BR-012 | Must | Rafael Duarte | T, I, A |
| FR-113 | Require legitimate rotation of a trust anchor (issuer key lifecycle) to follow the same member-vote governance at a published tier; the platform MUST publish the rotation schedule constraint such that a compliant rotation never blocks new enrolments beyond a published maximum window; enrolments under the outgoing anchor MUST remain valid; tier values and windows are governance constants recorded in OI-17. _(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_ | BR-015, BR-006 | Must | Rafael Duarte | T, I |

---

### 4.39 The steward organisation — coordination without control

> **Design intent — the Bitcoin Foundation lesson (recorded per the approver's direction, 2026-08-11):** The Bitcoin Foundation was founded in 2012 to be Bitcoin's official face and was effectively defunct within a few years — funding collapse, board departures, and a community that never accepted its authority. Bitcoin was unaffected, because the Foundation never controlled the protocol. The lesson is not 'have a foundation'; it is that Bitcoin survived because its foundation did not matter. The steward organisation below is designed to not matter in exactly that sense: it coordinates audits, ceremonies, funds and proposals because somebody must, and it is convenience infrastructure rather than a control point because the protocol MUST NOT need it (BR-021, FR-117). If the steward body collapses tomorrow, the record of that collapse will read like the Foundation's: the protocol did not notice.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-114 | Elect a standing platform-level steward body by all enrolled citizens (platform scope, not party scope) using the existing anonymous one-person-one-vote ballot mechanics (FR-030..FR-035 discipline; scope-bound nullifiers); enforce fixed terms by contract expiry with no renewal path except a fresh election (FR-089/FR-041 discipline); make the body recallable mid-term by the same affirmative-quorum mechanism that governs any other removal (FR-104 discipline: published bar, active votes to remove, never silence; statement right; surge defence); treat steward candidacy as a public-tier role-taking event (BR-017, FR-084/FR-085 consent mechanics). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015 | Must | Aisha Nkemdirim | T, I, A |
| FR-115 | Grant stewards ONLY the following enumerated and exhaustive powers: (a) draft and publish protocol proposals with rationale; (b) coordinate independent audits, trusted-setup ceremonies, and credential-issuer onboarding; (c) hold funds and sign vendor contracts; (d) publish operational reports. The list is EXHAUSTIVE: anything not listed is not a steward capability, and any configuration granting a steward capability beyond the list MUST be rejected (FR-088 pattern at platform level). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015 | Must | Rafael Duarte | I, A, T |
| FR-116 | Prohibit stewards from exercising any power that can change who wins, who votes, or who is a member (the same test as every other body, BR-015); stewards MUST NOT approve, enact or veto a protocol change — they propose, and every enrolled citizen votes (FR-119); any citizen may submit a competing proposal on the same question with equal standing (FR-090 discipline at platform level), so stewards never hold a monopoly on the ballot; there is NO emergency override for stewards or anyone else (CON-003 reaffirmed; issuer onboarding they coordinate still executes only through the timelocked governance path — coordination is not enactment). _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-015, BR-008 | Must | Rafael Duarte | I, A, T |
| FR-117 | Guarantee that the protocol survives its stewards: no steward signature, action, approval or liveness MAY be required for enrolment, party creation, voting, proposal submission, or forking; the total absence of every steward MUST leave protocol operation unchanged for every citizen-facing capability. A dedicated capability-absence suite MUST verify zero steward-dependency paths in every citizen flow (the UT-0700/UT-0701 absence-verification pattern; TC seeded in Doc 07 at catch-up, UT IDs assigned by the engineer), and a steward-vacancy simulation MUST show zero citizen-facing degradation before Gate 2. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021 | Must | Chen Wei | T, A, I |
| FR-118 | Entrench the following **seven** charter rules as unamendable by ANY vote at ANY tier and changeable only by fork: (1) one human one vote; (2) no transferable power; (3) no privileged role over outcomes; (4) the unconditional right to fork; (5) no behavioural surveillance; (6) anonymity by default with disclosure only by voluntary role-taking; (7) **CON-001 — parties only, never state elections** (promoted into the Tier-1 charter per OI-18: this is a scope boundary rather than an implementation commitment — a platform that could vote itself into running state elections becomes a categorically different and more dangerous system). Entrenchment reuses the existing mechanism (FR-027 discipline elevated to the platform charter; NFR-017 governs the process) — cited, not restated. Amendment proposals targeting ANY Tier-1 entrenched charter rule — including a proposal to permit the platform to conduct a state, municipal, or any binding government election — MUST be rejected by code at submission, regardless of the proposer's tier or the level of claimed support. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ _(v2.2.0: amended per OI-18 decision, 2026-08-11.)_ | BR-021, BR-015 | Must | Rafael Duarte | I, A |

> **✅ v2.2.0 — OI-18 DECIDED (Rathish, 2026-08-11): two-tier core.** Tier 1 (FR-118): seven entrenched rules incl. the promoted CON-001 — fork-only. Tier 2 (FR-119): the named absolutes — receipt-freeness & coercion resistance (BR-011, NFR-003), data minimisation (CON-002, CON-008, NFR-010), no bespoke unaudited cryptography (CON-012), non-violence (CON-013) — amendable only via the Doc 03 super-process (supermajority materially above the structural tier; fork-exercisable timelock; two consecutive affirmative votes separated by that window; growth-surge defence active throughout; independent audit published before the second vote; numbers set by the architect with rationale). Tier 3: everything else at its ordinary tier. Rationale preserved in OI-18-DECISION-2026-08-11.md: receipt-freeness must survive an ordinary majority — a majority voting it away votes to make everyone coercible — yet remain evolvable if a better coercion-resistance technique emerges. Tier 1 defines what the system is; Tier 2 protects people from a majority while remaining evolvable.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-119 | Implement a three-tier amendment structure. **Tier 1** (FR-118 entrenched charter): not amendable by this or any process — code rejects proposals at submission. **Tier 2 — named absolutes**: receipt-freeness & coercion resistance (BR-011, NFR-003); data minimisation (CON-002, CON-008, NFR-010); no bespoke unaudited cryptography (CON-012); non-violence clause (CON-013) — amendable ONLY via the super-process specified in Doc 03, which MUST require at minimum: (a) a supermajority materially above the ordinary structural tier; (b) a timelock long enough that the fork right is genuinely exercisable before the change takes effect; (c) two consecutive affirmative votes separated by that window so no transient majority can carry it; (d) the growth-surge defence active throughout; (e) an independent audit of the proposed change published before the second vote — specific numbers set by the architect with rationale (OI-17 family). **Tier 3** — every other platform rule NOT enumerated in Tier 1 or Tier 2 — amendable by platform-wide citizen vote at its ordinary tier: quorum and supermajority per published constants (OI-08/OI-17 family), timelock at least as long as the highest party tier (NFR-017), the proposal channel open equally to stewards and any enrolled citizen; enactment is by code on close of the timelock, with no ratification step. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ _(v2.2.0: amended per OI-18 decision, 2026-08-11.)_ | BR-021, BR-008 | Must | Tomás Ferreira | T, I |
| FR-120 | Preserve the unconditional right to fork (FR-053 lineage mechanics; NFR-018 full-history export) as the capture backstop: even a captured citizen vote cannot trap anyone, because leaving is free and carries history intact; the fork right is entrenched (FR-118) and MUST remain available regardless of any steward action or protocol vote. Note: fork initiation is currently an open critical with the `fork` flag OFF above dev (§13); this requirement records the design posture, not a new capability. _(Source: GATE1-DECISION-2026-08-11.md Part B; Rathish, 2026-08-11.)_ | BR-021, BR-003 | Must | Erik Lindqvist | I, D |

---

### 4.40 Pilot jurisdiction sequence and enrolment adapter schedule

> **Ordering criterion: technical readiness of the identity rail, not market size.**
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1 (Rathish, 2026-08-20).
> OI-04-PILOT is closed by this section — see §13.
> **Hard dependency:** CON-015 must be satisfied before the Phase-1 adapter is marked implementation-ready.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-121 | Deploy enrolment adapters in the following sequence, determined by technical readiness of the identity rail and not by market size. **Phase 1 — India (Aadhaar offline paperless KYC):** the FR-070 adapter class (c) (offline paper KYC) is the first and only enrolment adapter at Gate 2; Aadhaar provides a single national issuer, near-universal coverage, and a government-signed XML that is provable in-circuit, satisfying all four FR-069 universal in-circuit checks (issuer authenticity, credential freshness, region membership, correct derivation); Phase-1 uses ADR-016's single-issuer-class posture (GOV_EID class only) and ADR-017's on-device derivation. **Phase 2 — EU (eIDAS 2.0 wallets):** the FR-070 adapter class (a) (eIDAS 2.0 wallet adapters); first targets France and the Nordic countries, whose national implementations are privacy-preserving by design; Phase 2 does not require a separate Gate 2 and follows the adapter-certification process governed by CON-005. **Phase 3 — USA (deferred):** the USA has no national digital identity; the state-by-state mobile-driver's-licence (mDL) landscape is fragmented, activation is low, and an optional "phone-home" privacy default conflicts with the non-correlation guarantee (FR-002, FR-069); the USA is deferred to Phase 3 and requires its own ADR with a threat model and independent audit before any mDL adapter mints enrolment nullifiers. **Hard dependency:** CON-015 must be satisfied (legal opinion obtained and recorded) before the Phase-1 adapter is marked implementation-ready. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1; Rathish, 2026-08-20.)_ | BR-020, BR-006 | Must | Marcus Adeyemi | I, A |

---

### 4.41 Tiered participation — verification gates counting, never joining

> **Design rule (Decision 2, Rathish, 2026-08-20):** Verification is a distinct optional step,
> not a precondition for joining. **Verification gates COUNTING, never joining.** This
> reconciles open participation with a truthful strength number — the open (unverified) tier
> cannot inflate any count because it does not count toward anything that matters.
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2.
> FR-020 is annotated (not superseded) to record the open-tier extension — see §4.6.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-122 | Allow any citizen — without completing personhood verification — to access the platform for open-tier participation: reading, following, watching, and other low-stakes actions that do not count toward any official total; no verification requirement may be imposed as a condition of open-tier access; the open tier MUST NOT be counted toward any party's official strength number, any binding ballot eligibility, or any candidacy eligibility under any configuration. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2; Rathish, 2026-08-20.)_ | BR-003, BR-016 | Must | Grace Mbeki | T, I |
| FR-123 | Require proof of unique personhood (the FR-069 enrolment nullifier) for every action that COUNTS: (a) contributing to a party's official strength number; (b) voting in a binding decision; (c) standing as a candidate. A party's published strength number MUST count verified persons only; open-tier (unverified) participation MUST NOT be added to or used to inflate the strength number by any path or configuration. This is the normative boundary of Decision 2: verification gates COUNTING, never joining. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2; Rathish, 2026-08-20.)_ | BR-006, BR-010, BR-016 | Must | Marcus Adeyemi | T, A |

> ✅ **FR-124 RULING — Verified-status visibility (Rathish, 2026-08-20; recorded here per approver ruling transmitted via coordinator, 2026-08-20):**
> "RULING: verified status is PRIVATE TO THE HOLDER, expressed as eligibility, never a public marker on a supporter.
> - A verified user sees their own verified status and knows their counting/voting eligibility.
> - The public sees only AGGREGATE verified counts (e.g. 'N verified members'), never a per-supporter badge.
> - For workers and candidates — already public by voluntary role-taking — a visible verified badge is permitted, because they have already crossed the disclosure line.
> - MUST-NOT: no persistent public attribute may reveal that a specific supporter is verified. This is consistent with NFR-001/002 and TD-02, and with the rule that disclosure follows voluntary role-taking, which verification is not."
>
> **Composition check (v2.3.1):** consistent with FR-082 (no public Supporter profile surface — the self-view is the member's own authenticated-session view, not a public profile; FR-082 prohibits public surfaces, not the holder's own session view), FR-083 (Worker/Candidate public participation record begins at the FR-080 informed-consent event; role-taking already crosses the disclosure line), FR-086 (no retroactive linkage — the self-view is visible only to the authenticated session holder and does not expose any Supporter to any other actor), NFR-001 (no actor other than the holder can determine a Supporter's verified status from any data the system holds, emits, or logs), NFR-002 (Supporter-tier anonymity set floor holds unconditionally; no per-participant signal is derivable from aggregate counts), TD-02 (members anonymous publicly; disclosure follows voluntary role-taking; verification is not role-taking and therefore does not cross the disclosure line for public visibility). **No genuine conflict found.** FR-124 normative text amended at v2.3.1 — original v2.3.0 clause (b) annotated as superseded in the row below with pointer; remaining clauses retained and restated.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-124 | Completing personhood verification (FR-069 nullifier enrolment) grants a **"verified" status** that is PRIVATE TO THE HOLDER and expressed as eligibility — never a persistent public marker on a Supporter. _(v2.3.1 per approver ruling, Rathish, 2026-08-20, quoted verbatim in banner above; original v2.3.0 clause (b) superseded — see supersession note below.)_ The composition of verified status with the three-tier privacy model (§4.24) is as follows and MUST be enforced without exception: **(a) Private self-view for all verified participants including Supporters:** every verified participant — Supporter, Worker, and Candidate — MUST be able to see their own verified status and know their counting/voting eligibility in their own authenticated session; this self-view is the member's own authenticated-session view only and MUST NOT be accessible to any other actor; it is NOT a public profile surface and is consistent with FR-082 (which prohibits public Supporter profile surfaces, not the authenticated holder's own session view); **(b) Public sees only aggregate verified counts:** the public MUST see only aggregate verified counts for a party (e.g. 'N verified members'); no per-participant 'verified' badge, field, or derivable signal MUST appear on any public surface, log, or export that would reveal whether a specific Supporter is verified; **(c) Worker/Candidate visible badge permitted:** for Worker- and Candidate-tier participants (FR-083), a visible verified marker is permitted on the public participation record and on their own private account view — they have already crossed the disclosure line by voluntary role-taking (FR-080 informed-consent event; FR-083); **(d) MUST-NOT — no persistent public attribute:** no persistent public attribute, field, tag, or derivable signal MUST reveal that a specific Supporter is verified; **(e) No retroactive linkage:** no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits (FR-086 applies); **(f) Absence-test obligation:** a test in the style of UT-0700/UT-0701 (absence-of-path verification per FR-086) MUST verify that a verified Supporter's verified status is absent from every public view, log, export, and derivable system output with no path available to any actor other than the authenticated holder. Rationale: disclosure follows voluntary role-taking; verification is not role-taking (NFR-001, NFR-002, TD-02). _(v2.3.0 ORIGINAL TEXT — clause (b) SUPERSEDED at v2.3.1: the v2.3.0 formulation 'the verified status exists ONLY as the Supporter's nullifier being counted in the aggregate strength number' is replaced by clause (a) above, which grants every verified participant including Supporters a private self-view in their own authenticated session. Clauses (c) and (d) of the original are retained and restated as points (e) and (f). Original v2.3.0 clause (b) verbatim for traceability: 'for Supporter-tier participants (FR-082), no profile surface exists for a Supporter by design — the verified status exists ONLY as the Supporter's nullifier being counted in the aggregate strength number; no per-person public verified marker MUST exist for a Supporter on any surface.' Original v2.3.0 clause (c): 'no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits (FR-086 applies).' Original v2.3.0 clause (d): 'no verified-status marker MUST appear on any public surface that would allow association of a Supporter's nullifier with any attributable record.' Retained per CLAUDE.md ID-scheme rule — do not delete.)_ _(Sources: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 2 (v2.3.0 basis); approver ruling, Rathish, 2026-08-20 (v2.3.1 amendment).)_ | BR-009, BR-017, BR-006 | Must | Dr. Lena Kowalczyk | T, I, A |

> ✅ **OI-19 DECIDED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).**
> Ruling verbatim: "invite-gating is a spam-control RATE-LIMITER, never an admission condition,
> and the two compose only if a non-invite path always remains open.
> - FR-020 stays absolute: no person may be refused membership for lack of an invite.
> - Finalise FR-125 so invite-based onboarding is the fast default path, with a non-invite
>   fallback that is ALWAYS available — slower and higher-friction is fine, closed is not.
> - MUST: the non-invite fallback exists. Without it FR-125 violates FR-020. Add a test
>   obligation that a person with no invite can still complete membership.
> - The test that separates the two: a determined real person can always join without an
>   invite. Record it. Close OI-19."
> FR-020 unamended and absolute. FR-125 finalised below (no longer draft). OI-19 RESOLVED in §13.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-125 | Permit spam-control invite-gating **only** at the open (unverified) tier entry, with the following invariants: **(a) Rate-limiter, never admission condition:** invite-based onboarding MAY be the default fast path for open-tier entry; a referral token from an existing participant MAY be required on the fast path; invite-gating is a spam-control RATE-LIMITER only — never an admission condition and never the sole door; **(b) Non-invite fallback ALWAYS available:** a non-invite fallback path MUST ALWAYS be available for open-tier registration; the fallback MAY be slower or higher-friction than the invite path and MAY impose additional verification steps; the fallback MUST remain permanently open and MUST NOT be closeable by any operator configuration or deployment default; the fallback MUST charge no fee (FR-020's no-fee admission property is absolute and applies to this fallback without exception); **(c) No refusal for lack of invite:** a person MUST NOT be refused open-tier or counted membership for lack of an invite token — FR-020 stays absolute and unamended; **(d) Test obligation — the separating test:** a determined real person can always join without an invite; this is the mandatory acceptance criterion: the non-invite fallback MUST successfully lead to full counted membership (FR-069 enrolment nullifier + FR-123 counted-action eligibility) for any person who completes it; **(e) Referral edge verified and discarded:** the referral edge MUST be verified for authenticity and MUST be discarded immediately after the gate-check completes — it MUST NOT be stored, recorded, or associated with either the referrer or the new entrant in any form; the referral relationship MUST NOT be available to any actor at any time after gate-check completes (Decision 4 persistent-referral-graph rejection; TD-12); **(f) Counted-membership path ungated:** invite-gating MUST apply only to open-tier (unverified) entry fast path and MUST NOT apply to any path toward counted membership (counted actions under FR-123); the admissions properties of FR-020 — no approval, sponsorship, interview, invitation, fee or veto — apply in full to counted membership regardless of this open-tier spam-control mechanism. _(Sources: OI-19 ruling, Rathish, 2026-08-20, DECISIONS-2026-08-20-OI19-OI20.md §2; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decisions 2 and 4, Rathish, 2026-08-20.)_ | BR-003, BR-006 | Must | Grace Mbeki | T, I |

---

### 4.42 On-device proof, nullifier-only identity posture (Decision 3)

> **Design principle (Decision 3, Rathish, 2026-08-20):** The credential is read and proven ON
> THE USER'S DEVICE. Only a zero-knowledge proof and a one-way uniqueness nullifier are
> transmitted. This is the EXISTING enrolment circuit (C-03 design with the SC-01 trust-anchor
> binding, per ADR-017; confirmed by artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md) —
> not a new component. FR-126..128 record the confirmed design posture as normative requirements
> and add the subpoena test as a verifiable acceptance criterion.
> Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-126 | Read and prove the enrolment credential exclusively ON the user's device: raw credential material — Aadhaar offline XML, eIDAS 2.0 wallet attributes, ICAO Doc 9303 chip data, mDL data — MUST be used locally on the device to generate the zero-knowledge proof and to derive the enrolment nullifier (per ADR-017: `prepareWitness` runs in the on-device WASM prover; the `stable_id_secret` is a private input that never crosses the device boundary); the raw credential material MUST then be discarded; it MUST NOT be transmitted to the platform or to any intermediary, in any encoding, at any point in the enrolment flow; only the generated ZK proof and the derived nullifier are transmitted. This requirement strengthens FR-003 (pointer: §4.1) without superseding it; FR-003 governs the prohibition on persistent storage and FR-126 governs the on-device-only processing boundary. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-009, BR-006 | Must | Dr. Lena Kowalczyk | I, A |
| FR-127 | Detect duplicate enrolment by NULLIFIER COLLISION ONLY: a second enrolment attempt by the same person produces the same deterministic nullifier (FR-069), which collides with the existing on-chain record and is rejected; the platform MUST NOT compare, store, or process identity records to detect duplicates; no name-matching, biometric comparison, document-number lookup, or administrative review MUST exist in any duplicate-detection path under any configuration. This is the existing enrolment circuit — the C-03 design with the SC-01 trust-anchor binding confirmed by ADR-017 and by artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md — not a new component; this FR records the confirmed design posture as a normative requirement. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-128 | MUST NOT store any raw or reversible identity data in any form — not in any database, cache, log, message queue, backup, or ephemeral store, and not even in encrypted form. The acceptance test is the **subpoena test**: if a court orders the platform to disclose who belongs to a party, the platform MUST be technically unable to comply — not merely legally entitled to decline. Encrypted-but-decryptable identity storage FAILS this test because it creates a data-set that can be produced under sufficient legal compulsion, converting "we cannot deanonymise you" into "we promise not to" (this is the second rejected design in Decision 4; see TD-12 in §9.3). The Gherkin block in §8 for this requirement includes an adversarial subpoena scenario. **Verify-by includes A (independent audit) and T (automated absence-of-data test).** _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 3; Rathish, 2026-08-20.)_ | BR-009, BR-006 | Must | Dr. Lena Kowalczyk | T, I, A |

---

### 4.43 Attestor-plurality Charter guard (OI-20 ruling)

> **Context (OI-20 DECIDED, Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md):**
> FR-004's plural-pluggable-issuer requirement is satisfied at the architecture level — Aadhaar is
> one implementation of the pluggable adapter interface (FR-070), not a hardcoded dependency. The
> Phase-1 single-rail deployment is a dated, explicit pilot limitation (Phase-1 limitation recorded
> on FR-004 annotation in §4.1 and in FR-121 in §4.40); the exit condition is Phase 2 (eIDAS 2.0).
> FR-129 closes the governance loop against normalising the Phase-1 limitation without re-entry.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-129 | Making single-issuer operation permanent — or extending it beyond the published, dated Phase-1 scope (FR-121) — MUST NOT be achievable as a deployment or configuration default; it MUST require the Charter-layer amendment process with re-entry through the two human gates (CLAUDE.md re-entry rule). Amendment machinery reference: FR-118 (entrenched-charter Tier 1, unamendable by any vote, changeable only by fork) and FR-119 (named-absolutes Tier 2, amendable only via the Doc 03 super-process) define the two-tier amendment system; the question of WHICH tier governs issuer-plurality requirements is not answered in this version and MUST NOT be assumed — that determination is owed to the architect in the next Doc 03 increment and MUST be recorded in the RTM when settled. What is normative here regardless of tier: (a) any path that makes single-rail operation permanent without going through the Charter-level amendment process and the two gates MUST be rejected by the system; (b) an attempt to extend the single-issuer deployment via configuration flag or deployment default MUST be blocked; (c) only the Amendment path (re-entry through Gate 1 and Gate 2 per CLAUDE.md) can modify the scope of the Phase-1 deployment limitation. Phase-1 accepted limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region (accepted exclusion per TD-05/ADR-016; FR-004's 50% attestor-share cap is inoperative for the Phase-1 single-rail duration); exit condition is Phase 2 / eIDAS 2.0 (FR-121). _(Source: OI-20 ruling, Rathish, 2026-08-20, DECISIONS-2026-08-20-OI19-OI20.md §2.)_ | BR-006, BR-012, BR-021 | Must | Marcus Adeyemi | T, A |

---

## 5. External interface requirements

### 5.1 User interfaces
Primary surfaces are provisionally inventoried in Doc 05 §7 as `SCR-01` … `SCR-23`. **The screen
inventory is provisional and non-binding**; the architect confirms, splits or merges surfaces in
Doc 03, and the tester reconciles the `SCR` links in the RTM (Doc 08). All surfaces MUST meet
`NFR-011` (WCAG 2.2 AA), `NFR-012` (device/bandwidth floor), `NFR-013` (i18n/RTL) and `NFR-023`
(plain language, no jargon). Every surface MUST have defined empty, loading, offline, degraded
(sponsorship-queued), error and success states.

### 5.2 Hardware interfaces
Camera and secure local storage may be used by the client during enrolment. Trumocracy MUST NOT
require any dedicated hardware token, and MUST NOT make possession of a specific device a
precondition for retaining rights (see `FR-058`).

### 5.3 Software interfaces
- **Identity attestation providers** — at least two independent per launch region; interface returns
  a non-identifying eligibility result only (`FR-003`, `FR-004`).
- **Population-statistics sources** — at least two independent published sources per region,
  consumed as versioned reference data with provenance recorded (`FR-009`).
- **Region boundary sources** — versioned registry input (`FR-007`).
- **Public read interface** — an unauthenticated, rate-limited public interface exposing all
  verifiable records for third-party verification and export (`FR-054`, `FR-055`).
All external content MUST be treated as untrusted data and MUST NOT be able to alter platform
behaviour. Contracts, protocols and formats are the architect's to define in Doc 03.

### 5.4 Communications interfaces
All communication MUST be encrypted in transit. The client MUST function over intermittent,
high-latency, low-bandwidth links (`NFR-012`) and MUST remain usable where the primary domain is
blocked (`NFR-014`). Notification channels used for recovery MUST NOT reveal party membership or
governance activity in their content or metadata (`NFR-001`).

---

## 6. Non-Functional / Quality Requirements (NFR)

| ID | Category | Requirement | Target | Traces to | Priority | Owner |
|----|----------|-------------|--------|-----------|----------|-------|
| NFR-001 | Privacy | The system MUST ensure that no actor — Trumocracy, an operator, an attestor, a party, an office-holder, or any colluding subset short of the published collusion bound — can determine which party a given person belongs to, or how they voted, from any data the system holds, emits or logs. The adversary model for audit purposes is: an adversary holding all operator logs, all attestor-issued credential hashes, the full public verifiable record, and network timing data at one-second granularity. The maximum advantage bound ε and the collusion bound (how many colluding parties privacy must survive) are set when OI-10 closes (Design phase, owner: Dr. Lena Kowalczyk). _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | 0 confirmed linkages at advantage > ε over random guessing (ε and collusion bound set at OI-10 closure; provisional test value ε = 0.02) across N ≥ 10,000 independently drawn action pairs at 95% confidence in an independent adversarial audit; independent privacy audit passes with 0 critical/high findings | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-002 | Privacy — anonymity set | Every published action MUST be indistinguishable among at least **k = 1,000** eligible actors in the same scope; where fewer than k eligible actors exist or have acted, the action MUST be withheld from publication or aggregated until k is reached, with the delay disclosed to the user. _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | k ≥ 1,000 for 100% of published actions | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-003 | Coercion resistance | Voting MUST be receipt-free: no probabilistic polynomial-time (PPT) adversary with security parameter λ ≥ 128 bits, even with the voter's full voluntary cooperation and device access after the fact, can distinguish the voter's actual choice from any other admissible choice with advantage greater than negligible in λ; and re-voting MUST be indistinguishable from not re-voting. | Formal security argument reviewed by independent cryptographer; independent adversarial audit (PPT adversary, λ ≥ 128 bits) finds no receipt construction and no re-vote distinguisher | BR-011 | Must | Aisha Nkemdirim |
| NFR-004 | Sybil resistance | Duplicate or synthetic persons MUST NOT exceed 0.1% of issued credentials in any region; the system MUST ensure that no single attestor holds > 50% of credentials in a region. | ≤ 0.1% duplicates (audited quarterly); attestor share ≤ 50% enforced, ≤ 40% targeted | BR-006, BR-012 | Must | Marcus Adeyemi |
| NFR-005 | Cost / Efficiency | Platform-borne cost of a median citizen governance action MUST be under **USD 0.01**, p99 under USD 0.05; the citizen MUST be charged **USD 0.00** in all cases. | median < USD 0.01; p99 < USD 0.05; citizen cost = 0 | BR-007 | Must | Hiroshi Tanaka |
| NFR-006 | Performance | On the reference device (2 GB RAM, Android 9) over a 64 kbit/s link: primary screen interactive ≤ 5 s p95; an action acknowledged ≤ 5 s p95 and finalised on the verifiable record ≤ 120 s p95; full enrol→endorse journey completable in ≤ 10 minutes. | as stated | BR-007 | Must | Hiroshi Tanaka |
| NFR-007 | Reliability / Availability | Citizen write path ≥ 99.5% monthly; public read/verification path ≥ 99.9% monthly; the system MUST ensure that no single operator failure blocks a citizen governance action for more than 60 minutes. | as stated | BR-007, BR-008 | Must | Chen Wei |
| NFR-008 | Scalability / Capacity | Sustain 50,000,000 enrolled persons, 10,000,000 eligible voters within a single ballot window, and a peak of 5,000 governance actions per second without violating NFR-006. | verified by load test before Gate 2 | BR-002 | Should | Chen Wei |
| NFR-009 | Security | Independent third-party security and cryptography audit completed before launch with **zero** critical or high findings open at Gate 2; no privileged administrative override present in any governance path. | 0 critical/high open | BR-008, BR-012 | Must | Rafael Duarte |
| NFR-010 | Privacy & Data protection | Data minimisation by construction: no identity document, biometric template, address, date of birth or other direct identifier at rest on the verifiable public record or in any governance-path store; no personal data on any immutable public record. Restricted operational stores enumerated in §7 — (a) Recovery requests & notification channel (90-day retention, access-controlled, region-local) and (b) Support & appeal records (24-month retention, access-controlled, region-local) — are outside the scope of this requirement; each holds only the minimal personal data necessary for its stated operational purpose, subject to the controls and retention windows in §7. | 0 direct-identifier fields present on the verifiable public record or in governance-path stores at data-inventory inspection; the two enumerated restricted stores hold only the fields and retention durations stated in §7 | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-011 | Accessibility | All primary flows MUST conform to **WCAG 2.2 Level AA**, be fully operable by screen reader and keyboard/switch, and remain usable at 200% text scaling. | 0 Level A/AA failures at Gate 2 | BR-007 | Must | Nadia Hassan |
| NFR-012 | Portability / device & bandwidth floor | The client MUST function on 2 GB RAM / Android 9 and equivalent mobile browsers, install in ≤ 15 MB, and complete every primary flow at 64 kbit/s with intermittent connectivity, including offline draft composition with deferred submission. | 100% of primary flows pass on the reference device profile | BR-007 | Must | Nadia Hassan |
| NFR-013 | Localization / i18n | At least 8 launch languages including at least one right-to-left script; no primary flow may present untranslated strings; date, number and name formats localised. | 100% primary-flow string coverage in all 8 locales | BR-007 | Must | Nadia Hassan |
| NFR-014 | Censorship resistance | A citizen MUST be able to reach and use the platform when the primary domain or application distribution channel is blocked; the system MUST ensure that no single operator, host, domain or app store can prevent governance actions network-wide. | ≥ 2 independent access paths verified in a blocking simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-015 | Compliance / Legal / Regulatory | The system MUST satisfy erasure and rectification rights **by holding no personal data** rather than by deleting from an immutable record; where a user requests erasure, the system MUST demonstrate that no personal data exists to erase and MUST provide credential deactivation instead. The residual conflict between immutability and erasure MUST be documented, legally reviewed per jurisdiction, and disclosed to users before enrolment. | Legal sign-off per pilot jurisdiction before launch; disclosure present in enrolment flow | BR-009 | Must | Sofia Marchetti |
| NFR-016 | Key recovery | ≥ 99% of legitimate recovery attempts MUST succeed within 14 days; recovery MUST NOT be usable to silently impersonate (notification + cancellation window mandatory); ≤ 0.01% of recoveries may be fraudulent. | as stated | BR-007 | Must | Amara Diallo |
| NFR-017 | Upgradeability | Any change to platform-wide governance rules, thresholds or bounds MUST itself pass a tiered-threshold process with a timelock at least as long as the highest party tier, and MUST NOT be enactable unilaterally by Trumocracy, a funder or an operator. | 0 unilateral rule-change paths at audit | BR-008 | Must | Rafael Duarte |
| NFR-018 | Exit rights | Any party MUST be able to export its complete public history in an open, documented format sufficient to reconstitute it on an independent deployment; any member MUST be able to leave and deactivate their credential at any time. | export verified to reconstitute on an independent deployment before Gate 2 | BR-003, BR-008 | Should | Erik Lindqvist |
| NFR-019 | Observability | Governance health metrics (activation counts, turnout, quorum near-misses, recall rates, attestor concentration, duplicate rate, sponsorship exhaustion, anonymity-set delays) MUST be published publicly, and MUST NOT expose any individual's activity. | dashboard live at launch; 0 individually identifying fields | BR-005 | Should | Yuki Sato |
| NFR-020 | Operability (deploy / rollback) | Any release MUST be reversible within 15 minutes; feature flags MUST be kill-switchable independently; a flag governing an open ballot's rules MUST NOT be changeable while that ballot is open. | rollback < 15 min proven before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-021 | Maintainability / openness | 100% of governance-critical logic MUST be published under an OSI-approved licence with reproducible builds, so a third party can verify that the running system corresponds to the published source. | build reproducibility verified by ≥ 1 independent party | BR-008 | Must | Rafael Duarte |
| NFR-022 | Usability | ≥ 80% of first-time, non-technical users MUST complete enrol→endorse unaided within 10 minutes; System Usability Scale ≥ 75; support-contact rate ≤ 5% of enrolments. | as stated, measured on ≥ 200 users per launch locale | BR-007 | Must | Grace Mbeki |
| NFR-023 | Content / UX writing & notifications | Primary flows MUST be written at or below a grade-8 reading level and MUST NOT contain the terms wallet, seed phrase, private key, gas, token, mint, chain, block, hash or equivalent jargon; error messages MUST state cause and next action; notifications MUST NOT reveal party membership or governance activity. | 0 jargon occurrences in primary flows; readability verified per locale | BR-007, BR-009 | Must | Nadia Hassan |
| NFR-024 | Safety / anti-harassment | The system MUST ensure that no feature exposes a member's identity, contact details, location precision below their declared region, or activity pattern to another member; recall and nomination flows MUST NOT enable targeted harassment of an individual member. The **harassment-rate metric** is defined as: the count of recall-initiation or nomination-initiation events directed at a single office-holder from distinct member nullifiers within any rolling 90-day window, normalised per 1,000 active members of that party, computed mechanically with no Trumocracy employee exercising discretion over political speech content. Where jurisdiction-scoped display filtering under FR-056/FR-057 is the applicable lever, its use is governed exclusively by FR-056 (legal basis, public log, no discretionary content judgement by Trumocracy). _(v2.0.0 tier scoping per BR-017: this guarantee holds unconditionally for Supporter-tier participants and for every member's ballot content and ballot direction in every tier. Worker- and Candidate-tier participants' role-relevant participation records are public by the explicit informed consent given at role-taking (§4.24) and are excluded from this guarantee to exactly that extent — and no further. Prior supporter-period activity of a person who later takes a public role remains under this guarantee permanently.)_ | 0 identity-exposing surfaces at inspection (I); harassment-rate metric computed mechanically and published monthly on the governance dashboard (NFR-019) within 72 hours of each month close | BR-009 | Must | Daniel Okonkwo |
| NFR-025 | Liveness / operator independence | The system MUST ensure that no single operator, sequencer, host or ordering service can censor or indefinitely delay an individual citizen's governance action; a delayed action MUST be includable through an alternative path within 60 minutes. | verified in an operator-censorship simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-026 | Compatibility | Supported: evergreen mobile browsers ≤ 24 months old and Android 9+. Unsupported combinations MUST fail with a clear, actionable message rather than a broken screen. | 100% of the supported matrix passes primary flows | BR-007 | Should | Nadia Hassan |
| NFR-027 | Privacy — no behavioural telemetry | The system MUST produce zero per-user behavioural events in any store, log, or export; analytics MUST be aggregate-only with no per-user attribution path; UT-0525 and UT-0740 MUST remain green on every release; mirrors FR-111 as a quality attribute. | 0 per-user behavioural events confirmed by inspection and automated test on every release | BR-017, BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-028 | Data lifecycle — append-only | No hard-delete or overwrite path MUST exist in any governance-path store; every state transition MUST be appended with timestamp and cause; verified by audit inspection. | 0 hard-delete or overwrite operations detectable in any governance-path store at audit | BR-019, BR-008 | Must | Erik Lindqvist |

> ✅ v2.0.0: the FR-062 contradiction is resolved by tier scoping per BR-017 — see §4.19 and §4.24.

### 6.1 Regulatory & standards applicability

| Standard / regulation | Applies? | Why / scope | Owner |
|-----------------------|----------|-------------|-------|
| GDPR / equivalent data-protection law | **Partial** | Applies to the minimal operational data we hold: (a) the notification channel in Recovery requests (90-day retention) and (b) Support & appeal records (24-month retention), both enumerated in §7 (`NFR-010`). Does **not** bite on the public governance record, which contains no personal data. Erasure for those two restricted stores is satisfied by the stated retention windows and access controls; erasure for the public record is satisfied by holding no personal data there at all (`NFR-010`, `NFR-015`). The claim "erasure is satisfied by holding nothing" applies to the public record only; the two restricted stores are the exception — this is a legal posture, not a certainty; see `TD-03`. | Sofia Marchetti |
| WCAG 2.2 Level AA | **Yes** | Binding on all primary flows (`NFR-011`). | Nadia Hassan |
| National electoral law (per pilot jurisdiction) | **Partial** | Applies to party formation, registration and internal-democracy rules. Does **not** apply to us as an electoral authority because `CON-001` forbids conducting binding state elections. | Sofia Marchetti |
| Political-finance / party-funding law | **Partial** | Applies only where treasury features are enabled (`FR-049`–`FR-052`); features are jurisdiction-gated and off by default. | Sofia Marchetti |
| EU Digital Services Act (or local intermediary-liability regime) | **Partial** | Applies to hosting user-published political content; drives `FR-056`/`FR-057` display-filtering and transparency-reporting posture. | Sofia Marchetti |
| eIDAS / national digital-identity regulation | **Partial** | Applies to identity attestors we consume from, not to Trumocracy as an issuer — we issue no identity, only a non-identifying eligibility result. | Marcus Adeyemi |
| AML / KYC regulation | **No — N/A** | We move no funds in v1 and hold no customer accounts; if treasury features are enabled in a jurisdiction, this MUST be re-assessed before that feature flag is turned on. | Sofia Marchetti |
| PCI-DSS | **No — N/A** | No cardholder data is processed, stored or transmitted; the citizen is never charged (`NFR-005`). | Hiroshi Tanaka |
| HIPAA | **No — N/A** | No health data is processed. The Healthcare *policy pillar* contains political programme text, not patient data. | Dr. Lena Kowalczyk |
| ISO/IEC 27001 / SOC 2 | **Partial** | Not certified for v1 (cost/appetite). Controls mapped and gaps documented; independent security audit (`NFR-009`) substitutes for launch. Open item `OI-07`. | Rafael Duarte |
| Accessibility procurement law (e.g. EN 301 549 / Section 508) | **Partial** | Satisfied by `NFR-011` conformance; formal statements published per jurisdiction. | Nadia Hassan |

---

## 7. Data requirements

| Data entity | Classification | System of record | Retention | Residency | PII? |
|-------------|----------------|------------------|-----------|-----------|------|
| Enrolment check result (eligibility, region, pass/fail) | Restricted | Trumocracy (non-identifying) | Until credential revoked | Region-local | **No** (by `FR-003`) |
| Identity documents / biometric templates | **Never stored** | Attestor only, transiently | **0 — not persisted** | n/a | Would be — hence prohibited |
| Personhood credential (holder-held) | Restricted | Holder's device + recovery mechanism | Life of credential | Holder | No |
| Enrolment nullifier (derived, not reversible) | Public (verifiable record) | Verifiable public record | Permanent | Global | No (non-reversible derivation per FR-069) |
| Per-scope action markers ("this scope already acted") | Restricted | Verifiable public record | Permanent | Global | No (unlinkable by `FR-002`) |
| Residency scope (region identifier only) | Restricted | Trumocracy | Until changed (min 180 days) | Region-local | No — region, never address |
| Region registry (versioned) | Public | Trumocracy, from external sources | Permanent, versioned | Global | No |
| Population denominator + provenance | Public | Trumocracy, from ≥2 external sources | Permanent, versioned | Global | No |
| Party draft / charter / eight pillars | Public (after publication) | Verifiable public record | Permanent, versioned | Global | Author pseudonymous |
| Endorsement records | Public (aggregate); unlinkable individually | Verifiable public record | Permanent | Global | No |
| Membership records | **Aggregate public, individual never disclosed** | Verifiable public record | Permanent (aggregate) | Global | No |
| Participation record (Worker/Candidate tiers only; §4.24) | Public by explicit informed consent — Worker/Candidate tiers only; Supporters: no such record exists | Verifiable public record | Permanent | Global | ✅ tier-scoped per BR-017 |
| Proposals & eligibility snapshots | Public | Verifiable public record | Permanent | Global | No |
| Ballots | Unlinkable; content secret until close; direction never disclosed (FR-063) | Verifiable public record | Permanent | Global | No |
| Tallies & results | Public | Verifiable public record | Permanent | Global | No |
| Candidate feedback votes (FR-065) | Individual votes private; aggregate tally public | Verifiable public record | Permanent | Global | No |
| Candidacies & consent records | **Public by explicit consent** | Verifiable public record | Permanent | Global | **Yes — by informed consent only** |
| Office-holder governance votes | Public | Verifiable public record | Permanent | Global | **Yes — by consent, office-scoped** |
| Manifestos, commitments, version history | Public | Verifiable public record | Permanent, versioned | Global | No |
| Debate attendance records (FR-066) | Public | Verifiable public record | Permanent | Global | No |
| Treasury entries | Public | Verifiable public record | Permanent | Region-gated | Contributor identity only where law requires |
| Display-filtering log | Public | Trumocracy | Permanent | Global | No |
| Recovery requests & notification channel | Restricted | Trumocracy | 90 days after completion | Region-local | **Yes — minimal, off the public record** |
| Sponsorship budget counters | Internal | Trumocracy | 12 months | Global | No (per-credential, unlinkable) |
| Support & appeal records | Restricted | Trumocracy | 24 months | Region-local | Minimal |

**Data rule (binding):** no entity classified as containing personal data may ever be written to the
immutable public record. Enforcement is verified at Gate 2 by data-inventory inspection (`NFR-010`).

---

## 8. Acceptance criteria (Gherkin) — one block per Must requirement

> These seed the test cases in Doc 07. Every Must FR has at least one positive and, where the
> requirement is a guardrail, at least one adversarial scenario. Must NFRs with Gherkin blocks in
> the second code block below (24 of 24 Must NFRs): NFR-001, NFR-002, NFR-003, NFR-004, NFR-005,
> NFR-006, NFR-007, NFR-009, NFR-010, NFR-011, NFR-012, NFR-013, NFR-014, NFR-015, NFR-016,
> NFR-017, NFR-020, NFR-021, NFR-022, NFR-023, NFR-024, NFR-025, NFR-027, NFR-028. NFR-001 and
> NFR-003 Gherkin references the adversary-game parameters defined in §6; the collusion bound
> (OI-10) and the ε value are provisional until OI-10 closes in Design. Governance-constant values
> used in several Must-FR Gherkin blocks are illustrative examples only — see the
> `(example — non-normative)` markers; normative values are set when OI-08 closes (Design phase,
> owner: Tomás Ferreira). v2.0.0 governance constants introduced in §4.29–§4.38 (trust-anchor
> lifecycle tiers and windows, conduct-vote/removal/expulsion bars, founding-member count,
> disclosure schedule per role, dispute stage timelines) are likewise non-normative until OI-17
> closes (Design phase, owner: Tomás Ferreira) — parallel to the OI-08 convention established at
> v1.1.1.

```gherkin
# FR-001 — one credential per human
Given a human who already holds an active personhood credential
When that same human completes enrolment again through any attestor
Then no second active credential is issued
And the result explains the refusal without revealing which existing credential matched

# FR-002 — per-scope single action, cross-scope unlinkability
Given a verified person who has already acted in scope S
When they attempt a second action in scope S
Then the action is rejected as already-acted
Given the same person acts once in scope S and once in scope T
When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} analyses both actions across N ≥ 10,000 independently drawn same-person action pairs
Then the adversary's advantage in correctly identifying that any given pair came from one person rather than two is ≤ ε over 1/2 at 95% confidence (ε set at OI-10 closure; provisional test value ε = 0.02)

# FR-003 — no identity data at rest
Given an enrolment check that has completed
When the complete data inventory of every Trumocracy store, log, backup and message queue is inspected
Then no identity document image, document number, biometric template, date of birth or residential address is present
And only a non-identifying eligibility result is retained

# FR-004 — attestor plurality and concentration cap
Given a launch region served by two independent attestors
When one attestor has issued 50% of the credentials in that region
Then further issuance requests to that attestor in that region are refused
And each attestor's share is published

# FR-006 — residency without address
Given a citizen resident at a specific street address
When they complete residency attestation for their region
Then the system holds the region identifier and no address, postcode or coordinate
And no party, member or operator can retrieve an address for that person

# FR-007 — versioned registry, non-retroactive boundaries
Given a closed election held under region registry version N
When the registry advances to version N+1 with changed boundaries
Then the closed election's eligibility set, counts and result are unchanged
And the election records which registry version it used

# FR-008 — one residency, change cooldown
Given a person who changed residency scope 30 days ago
When they request another residency change
Then the request is refused with the date the change becomes permitted
And their scope-restricted rights remain bound to the current region

# FR-009 — denominator from independent sources
Given two independent population sources for a region that disagree by more than the published tolerance
When a threshold computation is attempted for that region
Then the computation is refused and the discrepancy is published
Given the sources agree within tolerance and the dispute window has closed
When a threshold is computed
Then the denominator value and both source identities are recorded with the computation

# FR-010 — party draft creation and name collision
Given a verified citizen
When they create a draft with a name, emblem, one declared jurisdiction and a charter
Then the draft is created and the drafter is shown only pseudonymously
When they attempt a name or emblem that collides with an existing petition or active party in that jurisdiction
Then publication is refused and the colliding entity is named

# FR-011 — eight mandatory pillars
Given a draft in which the Healthcare and Security pillars are empty
When the drafter attempts to publish
Then publication is refused and both Healthcare and Security are named as deficient
Given a draft in which all eight pillars meet the published minimum-substance standard
When the drafter publishes
Then the draft is published with no human approval step

# FR-014 — one endorsement per person, resident-only, non-transferable
Given a verified person resident outside a petition's declared jurisdiction
When they attempt to endorse it
Then the endorsement is refused as out-of-jurisdiction
Given a resident person who has already endorsed the petition
When they endorse again
Then the count does not increase
When any actor attempts to transfer, sell or assign an endorsement
Then no such operation exists and the attempt fails

# FR-016 — code-computed threshold, no override
Given an active petition
When the threshold is computed
Then it equals the published percentage of the declared jurisdiction's denominator, reproducible by a third party
When any operator, employee or office-holder attempts to set, waive or lower that party's threshold
Then no such capability exists and the attempt is refused and logged

# FR-018 — automatic activation
Given a petition whose count has met or exceeded its threshold continuously for the published dwell period
When the dwell period elapses
Then the party activates automatically with no human approval step anywhere in the path
And the activation record immutably contains the charter version, the count, the denominator and its sources
Given a petition that met the threshold but dropped below it during the dwell period
When the dwell period elapses
Then the party does not activate

# FR-020 — join without approval
Given an active party and a verified citizen who is not a member
When the citizen requests to join
Then membership takes effect without approval, sponsorship, interview, invitation or fee
When a drafter, office-holder or operator attempts to reject, veto or expel that member
Then no such capability exists and the attempt is refused

# FR-021 — one member, one equal vote
Given a party with members of differing tenure, office and contribution history
When any party ballot is tallied
Then every member's vote counted exactly once with identical weight
When a configuration is attempted that would weight a vote by any attribute
Then the configuration is rejected

# FR-022 — leave at will
Given a member of an active party
When they choose to leave
Then membership ends immediately with no approval, penalty or notice period
And their governance rights in that party cease immediately

# FR-023 — maturation and churn rate limit
Given a citizen who joined a party 1 hour ago and the maturation period is not yet elapsed
When they attempt to vote, propose, nominate or sign a recall
Then the action is refused with the date rights begin
Given 100,000 accounts joining a party within one hour
When an open proposal is tallied
Then none of those accounts is counted, because none had matured before the proposal's snapshot

# FR-024 — any matured member may propose
# v2.1.0 per OI-14: submitting requires Worker tier or above; a Supporter attempting to submit is prompted to self-declare Worker (public) first — voting rights unaffected
Given a matured member
When they submit a proposal with a declared tier
Then it is accepted with no pre-screening, moderation or approval by any actor

Given a Supporter-tier matured member who has not declared Worker tier
When they attempt to submit a proposal
Then the submission is refused and they are prompted to self-declare Worker tier (public) first; their voting rights are unaffected

# FR-025 — tiered quorum and supermajority
# (example — non-normative; quorum and supermajority values unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given a charter-tier proposal requiring a published quorum Q% and supermajority S% (example values used below: Q=40%, S=66%; normative values set at OI-08 closure)
When it closes with turnout below Q% regardless of approval
Then it does not pass and the failing condition is published
When it closes with turnout meeting Q% but approval below S%
Then it does not pass and the failing condition is published
When it closes with turnout meeting Q% and approval meeting S%
Then it passes and enters its timelock

# FR-026 — timelock
# (example — non-normative; timelock durations unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given a passed charter-tier proposal with the published timelock duration for its tier (example: 14 days — not normative; normative value set at OI-08 closure)
When one day less than the full timelock has elapsed
Then the change has not taken effect and is publicly visible as pending
When any actor attempts to shorten, waive or bypass the timelock
Then no such capability exists and the attempt is refused

# FR-027 — entrenched founding clauses
Given a charter clause designated entrenched
When a proposal to amend it is opened
Then it is assigned the highest tier and the longest timelock
And only members whose membership predates the proposal by the published minimum age count toward its quorum
Given a party of 10,000 members of whom 9,000 joined last week
When they vote to amend an entrenched founding clause
Then the quorum is not met and the amendment fails

# FR-028 — eligibility snapshot
Given a proposal opened at time T
When a person joins the party, matures, or changes residency after T
Then that person is not eligible to vote on that proposal
And the eligible set for that proposal is published and reproducible

# FR-030 — ballot unlinkability
Given a closed ballot with 5,000 cast votes
When an adversary holding {all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity} attempts to link any cast ballot to the person who cast it, across N ≥ 10,000 independently drawn ballot-person pairs
Then the adversary's advantage in correctly linking any ballot to its voter is ≤ ε over 1/2 at 95% confidence (ε set at OI-10 closure; provisional test value ε = 0.02)
And the tally still proves every counted ballot came from exactly one eligible, not-yet-counted voter

# FR-031 — receipt-freeness
Given a voter who has cast a ballot and wishes to prove their choice to a buyer
When they use every function, export, screenshot and stored artefact available to them
Then they cannot produce anything that distinguishes their actual choice from any other admissible choice

# FR-032 — invisible coerced-vote override
Given a voter who cast a ballot under coercion while observed
When they later cast a replacement ballot before the ballot closes
Then only the last ballot is counted
And neither the public record, the device, nor any notification indicates that a replacement occurred or how many ballots were cast

# FR-033 — independently reproducible tally
Given a closed ballot
When an independent third party re-computes the result from public data alone, with no cooperation from Trumocracy
Then their result matches the published result exactly
And they learn no individual vote in the process

# FR-035 — no transfer or delegation of a vote
Given any member, ballot, endorsement or nomination right
When any actor attempts to transfer, sell, lend, delegate, proxy, assign or inherit it
Then no such operation exists in the system and the attempt fails
And an inspection of the system finds no delegation, proxy or transfer capability

# FR-036 — self-nomination scoped to region and office
Given a matured member resident in ward W
When they nominate themselves for an office whose region is ward W and obtain the required nomination endorsements from matured members resident in W
Then the candidacy is accepted
When they nominate themselves for an office in ward X where they do not reside
Then the nomination is refused as out-of-scope
When any member attempts to nominate a different person
Then the action is refused

# FR-037 — informed consent to public identity; members never disclosed
Given a member about to publish a candidacy
When they proceed
Then they must give an explicit, separately recorded consent acknowledging that their real-world identity becomes public
And the candidacy is not published until that consent is recorded
Given any person who is not a consenting candidate or office-holder
When any interface, export, log or public record is examined
Then their real-world identity is not disclosed by any path

# FR-039 — election scoped, timetable immutable
Given an internal election for (region R, office O) that has opened
When a member resident outside R attempts to vote
Then the vote is refused as out-of-scope
When any actor attempts to change the timetable, candidate set or tie-break rule after opening
Then the change is refused and the attempt is logged

# FR-040 — automatic office assignment
Given an internal election that has closed with a determined winner
When the close is processed
Then the result is published and the office role is assigned automatically in code
And no confirmation, ratification, veto or appointment step is available to any actor

# FR-042 — member-initiated recall
Given a matured member resident in the region of an office
When they initiate a recall of that office's holder during the term
Then the recall initiation opens without approval from the office-holder, any other office-holder, the drafter or any platform actor

# FR-043 — two-stage recall with a higher bar
# (example — non-normative; recall bar and election-approval values unset; story not Ready until OI-08 closes; owner: Tomás Ferreira)
Given an office-holder elected with some approval share and a published recall bar R% (example: elected at 55%, recall bar 60% — not normative; normative value set at OI-08 closure)
When a recall initiation reaches its signature threshold and the recall ballot closes below R%
Then the recall fails and the office-holder remains
When a subsequent valid recall ballot closes at or above R%
Then the recall succeeds

# FR-045 — automatic revocation and by-election
Given a successful recall
When the recall ballot closes
Then the office role is revoked automatically in code with no ratification step
And a by-election for that (region, office) pair opens within the published number of days

# FR-047 — immutable version history
Given a published charter at version 3
When the party amends it
Then version 4 is created, version 3 remains publicly retrievable unchanged, and a diff between 3 and 4 is viewable
When any actor attempts to edit or delete version 3
Then no such capability exists and the attempt is refused

# FR-051 — money buys no governance advantage
Given a contributor who has given the maximum permitted amount to a party
When they act in any governance capacity
Then their membership, standing, vote weight, proposal precedence, candidacy eligibility, ballot ordering and visibility are identical to a member who has contributed nothing
When a configuration is attempted that links any payment to any governance advantage
Then the configuration is rejected

# FR-054 — publicly verifiable record of every governance action
Given any governance action of any listed type
When it completes
Then a tamper-evident, publicly readable record is emitted that is sufficient to reconstruct the outcome
And that record contains no personal data
When the record is altered after emission
Then the alteration is detectable by any third party

# FR-056 — no operator discretion
Given a Trumocracy employee, operator, funder, office-holder or drafter with maximum available privilege
When they attempt to delete or edit published content, remove or suspend a member, alter a count or tally, block a lawful governance action, or reorder a candidate set
Then no such capability exists and the attempt is refused and logged
Given content unlawful in jurisdiction J
When display filtering is applied for J
Then the filtering is recorded publicly with jurisdiction, legal basis and affected item
And the underlying record is unaltered and remains retrievable outside J

# FR-058 — recovery without seed phrases
Given a citizen who has lost their device and was never shown a seed phrase or key material
When they complete the recovery process
Then control of their credential and residency scope is restored after the published timelock
And a notification is sent to the registered channel with a cancellation window
Given a thief attempting recovery
When the legitimate holder cancels during the window
Then the recovery is aborted and access is not transferred

# FR-059 — recovery reveals nothing
Given a completed recovery
When every participant in it (helper, guardian, attestor, support agent, operator) examines everything they observed
Then none of them can determine the subject's party memberships, past ballots, endorsements or governance history

# FR-060 — no token, no gas, no jargon
Given a non-technical citizen with no cryptocurrency, wallet or balance
When they complete each primary flow end to end
Then every flow completes without acquiring, holding or spending any token or payment instrument
And no primary-flow screen contains the words wallet, seed phrase, private key, gas, token, mint, chain, block or hash

# FR-061 — sponsorship degrades, never denies
Given a person who has exhausted their periodic sponsored-action budget
When they attempt a legitimate governance action
Then the action is queued with a clear explanation and an expected time
And the action is neither rejected, charged for, nor permanently denied

# FR-062 — public participation profile (v2.0.0: SUPERSEDED by FR-082..FR-086 — retained for history; DO NOT derive test cases from this block; see §4.24)
# ⚠ FR-062 SUPERSEDED — do not seed test cases from this block. The three-tier model in
# FR-082..FR-086 governs participation records. This block is retained for traceability only.
Given a verified citizen's profile viewed by any actor (authenticated or not)
When the profile loads
Then it shows: the list of elections and ballots in which they participated (without ballot direction), their current and past party memberships, petitions they endorsed, proposals they authored, and debates they attended
And it does not reveal the direction of any ballot cast in a contested vote
Given an elected representative whose office-capacity governance vote is examined on their profile
When the vote record is displayed
Then the direction is publicly attributed to them per FR-048

# FR-063 — ballot-direction prohibition (MUST NOT; test obligation UT-0700, UT-0701)
Given any member's ballot direction on any contested vote
When any interface, log, export, public record, profile view or combination of them is examined by any actor
Then no ballot direction for that member is discoverable
And UT-0700 confirms no ballot-direction field is reachable through any client surface
And UT-0701 confirms no ballot-direction field is present in any public-record export
Given an elected office-holder who voted in their official office capacity
When that specific vote is examined
Then the direction is publicly attributed — this is the sole permitted exception, governed by FR-048

# FR-064 — single party membership constraint
Given a member of party A who requests to join party B
When the join request is processed
Then membership in party A is voided, membership in party B takes effect, and the tenure clock resets to zero
When a member attempts to hold membership in two parties simultaneously through any mechanism
Then no such dual-membership state exists and the attempt fails
Given a member who left party A less than one month ago and joins party B
When they attempt to vote in party B before one month of membership has elapsed
Then the vote is rejected as tenure not yet met

# FR-065 — candidate feedback scoring
Given a matured party member who has not yet voted on candidate C in election E
When they cast an upvote on candidate C
Then C's tally increases by 3 and the member cannot vote on C again in E
When they cast a downvote on candidate C
Then C's tally decreases by 1 and the member cannot vote on C again in E
When any actor inspects individual feedback votes
Then no vote is linkable to its caster; only the aggregate tally is visible
Given a member who has already cast a feedback vote on candidate C in election E
When they attempt another feedback vote on C in E
Then the attempt is refused

# FR-066 — mandatory pre-election debates
Given a major election is approaching for office O
When the debate schedule is confirmed
Then three debates are scheduled per candidate, covering local conditions, local problems, and the work required respectively
When a debate is completed
Then attendance attestation and any post-debate content reference are recorded on the verifiable record
When a candidate fails to attend a scheduled debate
Then their absence is recorded and visible in their participation record

# FR-067 — candidacy from member vote; no automatic renomination
Given three debates have been completed per candidate
When the post-debate member vote closes
Then only candidates who receive a net positive member-vote result advance to the election ballot
Given a sitting office-holder whose term is expiring
When the next election cycle opens
Then they receive no automatic candidacy; they must complete the full debate and post-debate vote process
When any actor attempts to place an incumbent on a ballot without a completed debate cycle
Then the attempt is refused and logged

# FR-068 — tenure waiver for new parties (growth-surge defence remains active)
Given a party in its first three calendar months of active status
When a member who joined before the party activated attempts to vote
Then the one-month tenure requirement is waived and the vote is accepted
And UT-0220 confirms that growth-surge defence controls remain fully enforced during the waiver
Given a party in its first three calendar months and a sudden flood of 10,000 new members
When a proposal snapshot is taken
Then the snapshot mechanism (FR-028) and churn rate limits (FR-023) apply unchanged
And no waiver of any anti-capture control is in effect

# FR-069 — deterministic enrolment nullifier
Given a credential with a stable personal identifier and a valid issuer signature
When an enrolment attempt is submitted
Then the system derives the nullifier without storing the underlying identifier, verifies the issuer signature, credential freshness, region attribute, and correct derivation, and stores only the nullifier
Given the same credential re-used in a second enrolment attempt
When the nullifier derivation is completed
Then the derived nullifier matches the existing record and the enrolment is rejected as a duplicate
Given a credential with a tampered region attribute
When the derivation verification runs
Then the enrolment is rejected and the reason (region-attribute invalid) is returned

# FR-070 — pluggable credential adapter (eIDAS 2.0 wallet · ICAO Doc 9303 NFC chip · offline paper KYC e.g. Aadhaar)
Given a region where an eIDAS 2.0 wallet adapter is configured
When a citizen presents a qualified eID wallet attestation
Then the adapter verifies the trust-anchor signature against the applicable national or supra-national trust list, extracts the designated stable personal identifier field and the residency attribute, and passes them to the FR-069 derivation
Given a region where an ICAO Doc 9303 NFC chip adapter is configured
When a citizen presents a biometric passport or NFC identity card
Then the adapter verifies the Document Security Object against the ICAO public key directory, extracts the stable identifier field (MRZ DocumentNumber or chip pseudonym) and an attested residency claim, and passes them to the FR-069 derivation
Given a region where an offline paper KYC adapter is configured (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or equivalent)
When a citizen presents a verifier-attested identity assertion
Then the adapter extracts the government-assigned stable identifier, the residency attribute, and attestor-authorisation evidence, and passes them to the FR-069 derivation; no biometric data is retained
When any actor attempts to hard-code a single credential type as the only supported path
Then the adapter interface prevents it; the platform architecture enforces the pluggable pattern

# FR-071 — enrolment-collision recovery
Given a citizen who has lost their key material but still holds their original credential
When they attempt enrolment and the derived nullifier matches an existing record
Then the system routes them to the recovery flow rather than rejecting them as a duplicate
When the citizen re-authenticates, re-derives the same nullifier, and proves current key ownership
Then their keys are scheduled for rotation, and membership, tenure and history are confirmed intact
And no second identity is created

# FR-072 — recovery delay and veto guard
Given a nullifier-collision recovery initiated by a citizen
When the recovery is submitted
Then a seven-day delay is imposed before key rotation completes
And the active key receives a veto window equal to the full seven-day delay
And the recovering credential is barred from casting any vote during the delay
And a notification is sent to the registered channel at initiation
Given the active-key holder submitting a veto signal during the delay
When the veto is received
Then the recovery is aborted and the existing key remains in control

# FR-073 — government eID issuer hierarchy
Given an enrolment attempt using a government eID credential in a region where that rail is designated
When the credential is verified
Then the enrolment nullifier is minted and the record is accepted
Given an enrolment attempt using an availability-only credential class (liveness attestor or non-eID provider)
When the attempt is submitted
Then no enrolment nullifier is minted and the attempt is refused with the reason (non-eID class, availability-only)
And the availability-only credential may only be used for liveness attestation or slow recovery, not enrolment

# FR-050 — treasury record: every inflow and outflow published
Given any treasury inflow or outflow for an active party
When the event completes
Then an itemised, publicly readable, independently verifiable record is published for it
And any third party can independently reproduce the treasury state from the public record alone

# FR-074 — country selection: single active selection; FR-008 governs changes
Given a user who already holds one active country selection
When they attempt to add a second active country selection by any mechanism
Then no dual-selection state exists and the attempt fails
Given a user who requests a change of country selection
When the request is processed
Then the residency-change discipline of FR-008 is applied; legal eligibility is checked by code

# FR-075 — platform activation ≠ legal registration; boundary stated on every surface
Given a party that has reached platform activation status
When any surface, notification, export, or log is examined
Then no surface represents platform activation as legal registration in any jurisdiction
When an operator attempts to configure the platform to grant, deny, or override a party's legal registration
Then no such capability exists and the attempt is refused and logged

# FR-076 — party founding: complete digital constitution required; missing sections named
Given a party founding attempt where the financial-rules mandatory section is absent
When publication is attempted
Then publication is refused and the financial-rules section is named as the missing element
Given a founding attempt where all mandatory sections are present
When publication proceeds
Then the party is created with no human approval step

# FR-077 — non-violence clause: mandatory, integrity-checked; altered clause refused
Given a new or amended constitution where the non-violence clause has been altered from the platform-standard text
When publication is attempted
Then publication is refused and the altered clause is named as the cause
Given a valid constitution where the non-violence clause is intact and unaltered
When clause integrity is verified by code
Then the check passes with no human judgment in the path

# FR-078 — constitution versioned immutably; amendable only through tiered process
Given a party constitution at version N
When a passed proposal completes its timelock per FR-026
Then version N+1 is created; version N remains publicly retrievable unchanged
When any actor attempts to amend the constitution outside the tiered process
Then no such path exists and the attempt is refused

# FR-079 — participation tiers: self-assigned, no weight differential under any configuration
Given a party with members across all three tiers
When any ballot is tallied
Then every member's vote is counted with identical weight regardless of tier
When a configuration is attempted that grants any governance weight advantage to a higher tier
Then the configuration is rejected

# FR-080 — Worker tier: self-declared; no human approval; informed consent required first
Given a Supporter about to declare Worker tier
When the declaration flow opens
Then the interface states plainly that Worker status is permanent for the term and makes the participation record public for its duration
When the user confirms
Then Worker tier is recorded as the informed-consent event; no human approval step is required or available

# FR-081 — Candidate tier: self-nominated, code-checked, no human approval or ranking
Given a matured member who meets published candidacy eligibility
When they self-nominate
Then eligibility is checked by code; no human actor may approve, reject, or rank the candidacy at any point
Given the post-debate member vote
When the result is processed
Then candidacy is decided by the vote; every tier transition is recorded append-only

# FR-082 — Supporter: unconditionally anonymous; no profile surface exists for a Supporter
Given any Supporter-tier participant
When any interface, log, export, or public record is examined by any actor
Then no attributable record exists for that Supporter; only a nullifier appears on any record
When any actor attempts to construct or view a profile surface for a Supporter
Then no such surface exists; the attempt finds nothing by design

# FR-083 — Worker/Candidate participation record: starts at consent; no ballot direction disclosed
Given a Worker-tier participant whose consent event was recorded at declaration
When their participation record is viewed
Then it shows role-relevant activity from the consent event onward; it does not disclose ballot direction on any contested vote
Given the same participant's prior Supporter-period activity
When any record or export is examined
Then no prior Supporter-period activity appears or is attributable to them

# FR-084 — disclosure schedule published before window opens; no extra demands after role-taking
Given a published disclosure schedule for the Worker role
When a Worker declaration is confirmed
Then only information categories listed in the published schedule may be demanded from that person
When any actor or system attempts to demand a category not listed in the disclosure schedule for a role
Then the demand is refused

# FR-085 — consent irrevocable for the term; withdrawal before close destroys pre-nomination data
# v2.1.0 per OI-16: confidential-class carve-out adopted — pre-nomination disclosure data never enters the governance record; destroyed on withdrawal; completed-action records append-only without exception
Given a candidate who withdraws before the nomination window closes
When the withdrawal is processed
Then the system destroys the disclosure data submitted for that withdrawn candidacy
Given a candidate who remains past the nomination window close and later seeks to revoke consent during the term
When the revocation is attempted
Then no revocation path exists for the term in progress

# FR-086 — prior Supporter-period activity permanently anonymous after role transition
Given a person who held Supporter tier and subsequently takes Worker tier with consent
When an adversary holding all operator logs, all public data outputs, and network timing analyses all available combinations
Then no linkage between the anonymous Supporter identity and the public Worker identity is derivable from any system output
And absence-of-path verification in the style of UT-0700/UT-0701 confirms zero linkage paths exist

# FR-087 — committees: deliberative only; composition and minutes public
Given a committee that has produced a proposal
When the proposal enters the lifecycle
Then it enters with no special status or precedence over other proposals on the same question
Given committee composition and meeting minutes
When any member or third party requests them
Then they are publicly accessible

# FR-088 — committee capability limits; configuration granting outcome capability rejected
Given a configuration that would grant a committee the ability to affect election outcomes, membership status, or eligibility determination
When the configuration is submitted
Then the system rejects it with the reason (committee capability limit exceeded)
Given a committee exercising only permitted capabilities (event organisation, campaign coordination, facilitation, vendor management, publishing)
When it acts
Then no election, membership, or eligibility outcome is touched

# FR-089 — committee membership expires mechanically at term end; human renewal attempt has no path
Given a committee whose term has elapsed
When the expiry event is processed
Then committee membership is revoked by code with no human renewal step available
Given the party wishing to continue the committee into a new term without a member vote
When a direct renewal is attempted
Then no such path exists; continuation requires a fresh member vote

# FR-090 — proposal authorship public; competing proposals have equal standing
# v2.1.0 per OI-14: submitting requires Worker tier or above; a Supporter attempting to submit is prompted to self-declare Worker (public) first — voting rights unaffected
Given two proposals on the same question submitted by different members
When both are presented in the decision window
Then both appear with equal standing and are voted in the same window
When any actor attempts to suppress, delay, or deprioritise a competing proposal
Then no such capability exists and the attempt is refused

# FR-091 — eight-stage proposal lifecycle; stage-skip attempt refused
Given a proposal at the review stage
When any actor attempts to move it directly to the vote stage skipping discussion and debate
Then the transition is refused; the proposal stays at its current stage
Given a proposal that has completed all prior stages correctly
When each stage transition is executed by code per published timelines
Then the transition is recorded append-only with a timestamp and cause

# FR-092 — permanent decision trail reconstructable from public data alone
Given any completed decision
When an independent third party attempts to reconstruct the full decision trail from public data alone
Then they can reproduce the proposal, deliberation records, vote result, enacted consequence, implementation status, and measured outcome
And no cooperation from Trumocracy is required for reconstruction

# FR-093 — candidate selection schedule; unanswered questions visibly recorded
# (example — non-normative; schedule durations set at OI-17 closure)
Given a candidate selection process with an open question phase
When a matured member submits a question to a candidate
Then the question is placed on the public record
When the candidate does not answer before the question phase closes
Then the question is visibly recorded as unanswered on the candidate's public record

# FR-094 — manifesto: structured, machine-readable, complete-or-refused
Given a manifesto commitment where the measurement-method field is absent
When publication is attempted
Then publication is refused and the missing field is named
Given a manifesto with all mandatory fields present for all time-horizon entries
When it is published
Then it is accepted with no human approval step

# FR-095 — manifesto commitment: stable ID, append-only status history
Given a manifesto commitment whose status transitions from on-track to delayed
When the transition is recorded
Then the new status is appended; the prior status remains in history unchanged
When any actor attempts to overwrite or delete a prior status entry
Then no such capability exists and the attempt is refused

# FR-096 — financial anomaly flag is information only; flag does not freeze funds
Given a treasury event that matches a published anomaly rule (e.g., velocity threshold exceeded)
When mechanical detection runs
Then a flag is published on the party's transparency dashboard
And the flag does not freeze funds, block any governance action, or trigger any enforcement pathway
When any actor attempts to configure an anomaly flag to freeze funds automatically
Then the configuration is rejected

# FR-097 — COI disclosure: mandatory for public-tier roles; overdue flag by code
# (example — non-normative; schedule constants set at OI-17 closure)
Given a Worker-tier participant whose COI disclosure is overdue on the published schedule
When the overdue threshold is crossed
Then the system flags the disclosure as overdue visibly on the participant's participation record by code with no human decision in the path

# FR-098 — COI review: investigation-and-recommendation only; panel attempts binding ruling — no such capability
Given a sortition-selected review panel that has completed a COI investigation
When the panel publishes its findings
Then the findings are a recommendation only; no recusal takes effect automatically from a panel finding alone
When the panel attempts to impose a binding ruling on any actor
Then no such capability exists in the panel interface

# FR-099 — internal audit: sortition-selected, read-only access, no enforcement power
Given an active party requesting an internal audit
When auditors are selected
Then they are drawn per-case by verifiable sortition from eligible members; no standing audit body exists
Given an audit report published
When the report's powers are examined
Then findings inform but carry no enforcement capability

# FR-100 — dispute timelines: stage maximum enforced; breach recorded on decision trail
# (example — non-normative; stage timelines set at OI-17 closure)
Given a dispute where the panel formation stage has exceeded the published maximum timeline
When the breach event is detected
Then the breach is visibly recorded on the decision trail
And the dispute process continues; the breach does not void the stage

# FR-101 — sortition panels: verifiable random selection; no standing body; output is recommendation only
Given a dispute requiring an appeal panel
When the panel is formed
Then members are drawn by verifiable random selection with a publicly reproducible selection proof
When any actor attempts to form a standing panel body persisting across cases
Then no such configuration exists and the attempt is refused

# FR-102 — member rights charter: machine-readable, code-enforced; charter may not reduce platform floor
Given a party charter that attempts to reduce a member's propose right below the platform floor
When the charter is submitted
Then the system rejects it with the reason (charter may not reduce platform-floor rights)
Given the member-rights charter
When any member or third party examines it
Then every listed right maps to a code-enforced capability with no human discretion gap

# FR-103 — conduct votes: individual private, aggregate public; Supporter unconditionally excluded by construction
Given a matured member casting a conduct vote on a public-tier participant
When the window closes
Then only the aggregate is public; the individual vote is not linkable to its caster
When any actor attempts to cast a conduct vote on a Supporter-tier participant
Then no such action exists by construction — no addressable Supporter identity is present

# FR-104 — removal: affirmative quorum; silence does not remove; surge influx cannot drive removal
Given a removal vote where active-votes-to-remove is below the published affirmative bar
When the vote closes
Then the removal does not succeed; silence and abstention are not counted as votes to remove
Given a surge of members joining during an active removal window
When the removal vote closes
Then the growth-surge defence (FR-023/FR-028; UT-0220) is applied; the influx cannot drive the removal outcome

# FR-105 — expulsion bar strictly higher than removal bar; separate vote required
# v2.1.0 per OI-15: expulsion targets public-tier participants only; no expulsion path exists for a Supporter — supporter-tier fraud is handled by FR-005 credential revocation
Given a removal vote that passed its published bar
When an expulsion vote on the same person is opened
Then the expulsion requires its own affirmative quorum and supermajority strictly higher than the removal bar
Given an expulsion vote that passes
When the result is processed
Then membership is revoked with a state transition recorded; no historical records are altered

Given a Supporter-tier member accused of misconduct
When any actor attempts to open an expulsion vote against them
Then no expulsion path exists for a Supporter and the attempt is refused; FR-005 credential revocation is the only fraud remedy available

# FR-106 — every data entity classified; unclassified entity not storable
Given an entity with no assigned data classification
When the system attempts to store it
Then the store operation is refused and the reason (missing classification) is logged
Given an entity with a valid classification
When it is stored
Then only operations permitted by that classification succeed

# FR-107 — append-only: hard-delete and overwrite attempts fail; transition appended with cause
# v2.1.0 per OI-16: confidential-class carve-out adopted — pre-nomination disclosure data never enters the governance record; destroyed on withdrawal; completed-action records append-only without exception
Given any governed entity whose state changes
When the transition is processed
Then the new state is appended with timestamp and cause; the prior state remains retrievable unchanged
When any actor attempts to hard-delete or overwrite any governance-path entity
Then no such capability exists and the attempt is refused and logged

# FR-108 — public record: proofs, timestamps, counts only; restricted-class write refused
Given a write operation that would place restricted-class data onto the public verifiable record
When the write is submitted
Then it is refused with the reason (restricted-class data not permitted on public record)
Given a write of a governance event (count, tally, proof, or timestamp)
When submitted
Then it is accepted and placed on the public record

# FR-109 — transparency dashboard: aggregate-only, no per-member drill-down
Given a transparency dashboard view
When any member or third party loads it
Then it presents aggregate data only; no query or path yields individual member activity
When every interface and export is tested for per-member drill-down capability
Then zero per-member drill-down paths exist

# FR-110 — scorecard: factual, informs but never concludes; rankings and verdicts refused
Given a performance scorecard view
When it is displayed
Then it presents factual commitment progress with published methodology, baselines, and evidence links
And it does not rank parties against each other or emit editorial conclusions
When any actor configures the scorecard to produce a ranking or a verdict
Then the configuration is rejected

# FR-111 — no per-user behavioural event recorded anywhere; UT-0525 and UT-0740 pass
Given any user interaction with the platform
When all stores, logs, and exports are inspected
Then zero per-user behavioural events (click, page view, dwell, reading trail, or equivalent) are present anywhere
And UT-0525 (indexer records no reader, query, or IP) and UT-0740 (client carries no beacon or tracking attribute) pass on every release

# FR-112 — trust-anchor revocation: member-vote only; operator revocation attempt — no path exists
Given a compromised trust anchor requiring revocation
When an operator, funder, or employee attempts to revoke the anchor directly
Then no operator revocation path exists; the attempt is refused and logged
Given a member vote at the highest governance tier enacting revocation
When the vote result is processed
Then code suspends new enrolments against the revoked anchor; already-enrolled credentials are unaffected unless separately voted

# FR-113 — trust-anchor rotation: compliant rotation never blocks enrolment beyond published window
# (example — non-normative; window duration set at OI-17 closure)
Given a legitimate trust-anchor rotation following member-vote governance at the published tier
When the rotation completes
Then new enrolments are unblocked within the published maximum window; credentials under the outgoing anchor remain valid
Given a rotation attempt that would block new enrolments beyond the published maximum window
When submitted
Then the system refuses the configuration until the window constraint is satisfied

# FR-114 — steward body elected by all-enrolled ballot; fixed terms; recall by affirmative quorum
# (term length, election cadence, recall bar are governance constants; values set at OI-17 closure)
Given all enrolled citizens are eligible to vote in a platform-wide steward election
When a steward election ballot closes with valid quorum and a candidate reaches the winning threshold
Then the candidate is elected to the steward body with a fixed-term contract recorded on the verifiable record

Given a steward seat whose published term has elapsed
When the term-expiry event is processed by code
Then the office is vacated automatically; no action by any actor is required; no renewal or extension path exists
When any actor attempts to extend or renew a steward term without holding a fresh election
Then no such capability exists and the attempt is refused

Given an active recall petition against a sitting steward that closes with approval meeting the published affirmative quorum and supermajority
When the result is processed
Then the steward is recalled and the seat is vacated; a fresh election opens per the published schedule
Given an active recall petition that closes below the published affirmative quorum
When the result is processed
Then the steward remains in office; the failing condition (quorum not met) is published

Given any actor who attempts to renew or extend a steward term by direct action outside the election process
When the attempt is submitted
Then no such capability exists and no renewal is recorded

# FR-115 — steward powers enumerated and exhaustive; unlisted action refused; extra capability configuration rejected
Given a steward who performs one of the four listed powers: (a) drafting and publishing a protocol proposal; (b) coordinating an independent audit, trusted-setup ceremony, or credential-issuer onboarding; (c) holding funds and signing a vendor contract; (d) publishing an operational report
When the action is submitted
Then it is accepted and recorded

Given a steward who attempts an action outside the four listed powers — for example flagging a ballot, reordering candidates on a live ballot, touching a vote count, or modifying any governance record
When the attempt is submitted
Then no such capability exists; the attempt is refused with the reason (action not in enumerated steward power list)

Given a configuration that would grant a steward a capability beyond the four listed powers
When the configuration is submitted for application
Then it is rejected and the rejection is logged with the reason (steward capability configuration beyond enumerated list not permitted)

# FR-116 — stewards propose; citizens decide; no emergency override; competing citizen proposals have equal standing
Given a steward who attempts to directly enact a protocol change without a citizen vote — for example by writing the change to the governance record or activating a protocol-change transaction
When the attempt is submitted
Then no such capability exists; the attempt is refused; no protocol change is recorded

Given a protocol-change proposal published by the steward body
When it enters the governance process
Then it is placed on the platform-wide citizen ballot with no special priority or pre-clearance; all enrolled citizens vote

Given a citizen (non-steward) who submits a competing protocol-change proposal on the same question in the same decision window
When both proposals are placed on the ballot
Then both appear with equal standing; both are voted in the same window; neither receives priority over the other

Given any actor — steward, operator, or Trumocracy staff — who attempts to invoke an emergency override to enact a protocol change without a citizen vote
When the attempt is submitted
Then no such path exists; CON-003 is reaffirmed; the attempt is refused and logged

# FR-117 — zero steward dependency; all citizen-facing flows succeed with every steward seat vacant
Given a platform simulation in which every steward seat is vacant (no steward holds office)
When a citizen completes the enrolment flow
Then enrolment succeeds with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen creates a new party, submits a petition endorsement, and activates a party
Then the flow succeeds with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen casts a vote in any open ballot
Then the vote is recorded and tallied with no steward action, signature, or liveness required

Given the same steward-vacancy simulation
When a citizen submits a proposal (Worker tier or above per FR-024)
Then the proposal is accepted and enters the lifecycle with no steward action, signature, or liveness required

Given the capability-absence test suite (UT-0700/UT-0701 pattern) run against all citizen flows in the steward-vacancy simulation
When the suite completes
Then zero steward-dependency paths are found in any citizen flow; the suite passes with zero violations; citizen-facing degradation is zero

# FR-118 — entrenched charter rules (seven) unamendable; amendment proposals rejected by code at submission
# v2.2.0 per OI-18: seven entrenched rules (CON-001 added); adversarial scenario for CON-001 added
Given an enrolled citizen who submits a proposal to amend one of the seven entrenched charter rules — for example introducing vote weighting (violates one human one vote), making ballot direction transferable (violates no transferable power), restricting the unconditional right to fork, or permitting the platform to conduct a municipal or state election (violates CON-001 — parties only, never state elections)
When the proposal is submitted regardless of the proposer's tier or the level of claimed support
Then the system rejects the proposal at submission with the reason (targets an entrenched charter rule — not amendable); no governance record for this proposal is created

Given an enrolled citizen who submits a proposal to amend a non-entrenched protocol rule
When the proposal is submitted
Then it is accepted and enters the amendment process per FR-119

Given any actor — steward, operator, or citizen with supermajority support — who submits an amendment targeting an entrenched charter rule
When the attempt is submitted
Then it is rejected by code at submission; no path exists to place an entrenched-rule amendment on any ballot

Given an adversarial actor who submits a proposal worded as "permit the platform to conduct a municipal election" (a CON-001 Tier-1 rule — scope boundary)
When the proposal is submitted regardless of the claimed rationale or level of support
Then the system recognises it as targeting the CON-001 entrenched charter rule and rejects it at submission; no ballot is opened; the proposer receives the reason (targets an entrenched charter rule — not amendable)

# FR-119 — three-tier amendment structure: Tier-1 fork-only; Tier-2 named-absolutes super-process; Tier-3 ordinary citizen vote
# v2.2.0 per OI-18: Tier-2 scenario added; Tier-3 ordinary scenario retained; Tier-1 handled by FR-118 block above
# (example — non-normative; quorum Q%, supermajority S%, timelock T, super-supermajority SS% are governance constants set at OI-17 / Doc 03)

# Tier-2: proposal to weaken a named absolute (receipt-freeness) — requires full super-process
Given a proposal to weaken receipt-freeness (a Tier-2 named absolute, BR-011/NFR-003)
When the proposal is submitted and the first vote closes with the required super-supermajority SS% and quorum
Then the proposal enters the fork-exercisable timelock of duration T_super (set in Doc 03 with rationale)
And during T_super the fork right remains fully available to every citizen
And an independent audit of the proposed change must be published before the second vote window opens
And the growth-surge defence is active throughout both votes and the timelock window
When the second affirmative vote closes with the required super-supermajority SS%
Then the change is enacted by code; if ANY of the five properties (super-supermajority on either vote, fork-exercisable timelock, published independent audit before second vote, growth-surge defence throughout) is absent, the change is NOT enacted

Given a proposal to weaken receipt-freeness where the first vote closes above SS% but the independent audit is not published before the second vote window opens
When the second vote window opens without the audit published
Then the second vote does not proceed; the proposal lapses; no enactment occurs

# Tier-3: ordinary citizen vote on a non-entrenched, non-named-absolute platform rule
# (example — non-normative; quorum Q%, supermajority S%, and timelock T are governance constants set at OI-17 closure)
Given a proposed platform rule change that is not in the FR-118 entrenched charter and not a Tier-2 named absolute
When the proposal closes with turnout meeting the published highest-tier quorum Q% and approval meeting the published supermajority S%
Then the proposal enters a timelock of duration at least as long as the highest party-tier timelock T
And on timelock expiry the change is enacted by code with no ratification step required from any actor

Given the same Tier-3 proposal type that closes below the published quorum Q% or below the supermajority S%
When the result is processed
Then the proposal fails; the specific failing condition (quorum shortfall or supermajority shortfall) is published on the governance record

Given any actor who attempts to ratify, approve, block, or modify the enactment of a passed and timelocked Tier-3 protocol change
When the attempt is submitted
Then no such capability exists; enactment is by code on timelock close with no human ratification step

# FR-120 — unconditional fork right regardless of steward action or protocol vote; fork flag OFF above dev (open critical)
# Note: fork initiation is an open critical with the fork flag OFF above dev (§13); this Gherkin block records the design obligation.
# When the flag is ON in the test environment the scenarios below must pass; in staging/production the flag status is the blocking item.
Given any enrolled citizen or party in the test environment (fork flag ON)
When they initiate a fork
Then the fork proceeds with full history export regardless of any steward action or any outcome of any protocol vote; no steward consent or signature is required

Given a scenario in which every steward opposes a fork initiated by a citizen (fork flag ON in the test environment)
When the fork initiation is submitted
Then it succeeds; steward opposition has no effect; the unconditional right to fork is preserved

Given a scenario in which a passed protocol vote purports to restrict fork rights (an entrenched-rule violation per FR-118)
When a citizen attempts to initiate a fork after that vote (fork flag ON in the test environment)
Then the fork proceeds; the fork-restriction enactment is refused by code at the vote-closure step because the fork right is entrenched (FR-118) and cannot be amended

# FR-121 — pilot jurisdiction sequence; Phase-1 India/Aadhaar; Phase-3 USA deferred
Given the Phase-1 India pilot with the Aadhaar offline paperless KYC adapter (FR-070 class (c)) deployed
When a citizen presents a valid Aadhaar offline XML credential
Then the adapter verifies the government-signed document, derives the enrolment nullifier on-device (FR-126), and processes enrolment per FR-069; all four universal in-circuit checks pass; no credential data is transmitted

Given a USA mDL credential presented to the Phase-1 enrolment system
When the adapter checks the credential class and jurisdiction configuration
Then the enrolment is refused; the Phase-3 USA mDL adapter is not live; the refusal message cites the deferred Phase-3 status and exposes no identity data from the credential

# FR-122 — open-tier access without verification; open tier never counted in strength number
Given a citizen who has not completed personhood verification (no nullifier enrolled)
When they access the platform for open-tier participation — reading party information, following a petition, watching governance updates
Then access is granted; no verification gate is in the path; no count, ballot eligibility, or candidacy right is acquired

Given the same citizen's open-tier activity recorded in any store or log
When the party's official strength number is computed
Then the open-tier citizen is not counted; only verified (nullifier-enrolled) members contribute to the strength number; no open-tier activity inflates any official count by any path

# FR-123 — verified personhood required for counted actions; party strength counts verified persons only; adversarial inflation attempt refused
Given a citizen who has not completed personhood verification (no nullifier enrolled)
When they attempt to contribute to a party's official strength number, cast a ballot in a binding decision, or stand as a candidate
Then the action is refused with the reason (verification required for counted actions); no counted-action record is created

Given a party with 500 verified members and 200 open-tier (unverified) participants
When the party's official strength number is published
Then the strength number is 500; the 200 open-tier participants are not added to the total by any path or configuration

Given an adversary who attempts to inflate a party's strength number by registering 10,000 open-tier (unverified) accounts
When the strength computation runs
Then the 10,000 open-tier accounts are not counted; the strength number reflects only verified (nullifier-enrolled) members; the attack produces zero numerical benefit

# FR-124 (v2.3.1) — verified status private to holder; Supporter self-view in authenticated session only; aggregate-only public; absence-test obligation
# Scenario 1: Supporter private self-view (new in v2.3.1 per ruling clause (a))
Given a Supporter-tier participant who has completed personhood verification (nullifier enrolled)
When that Supporter views their own authenticated-session account view
Then they see their own verified status and know their counting/voting eligibility; the verified status is visible to that participant in their own authenticated session only; no other actor has access to this view

# Scenario 2: absence from all public surfaces and other-actor views (FR-082, FR-124 clause (b) and (d))
Given a Supporter-tier participant who has completed personhood verification (nullifier enrolled)
When any interface, log, export, or public record is examined by any actor OTHER THAN the authenticated Supporter themselves
Then no per-person "verified" marker is visible for that Supporter on any public surface; the absence-of-path test passes: no path exists for any actor to determine this Supporter's verified status; the verification manifests only as the Supporter's nullifier being counted in the aggregate strength number; no retroactive linkage to their identity exists (FR-086 applies)

# Scenario 3: Worker/Candidate verified badge permitted (FR-124 clause (c))
Given a Worker-tier participant who has completed personhood verification and whose participation record is public by consent (FR-080 role-taking event)
When their public participation record is viewed by any actor
Then a "verified" marker is visible on their participation record and on their own private account view; no ballot direction is disclosed on any contested vote (FR-063 applies)

# Scenario 4: adversarial aggregate-inference attempt (FR-124 clause (b), NFR-001, NFR-002)
Given an adversary attempting to derive a Supporter's identity from the "verified" count change in the aggregate strength number
When the strength number is examined before and after a Supporter completes verification
Then the aggregation provides no per-person marker; the adversary cannot determine which Supporter verified nor link the verification event to any identity, pseudonym, or nullifier; the aggregate count changes but no Supporter-to-count association is derivable by any actor from any system output

# FR-125 (v2.4.0 FINALISED — OI-19 DECIDED, Rathish, 2026-08-20) — open-tier invite-gating; rate-limiter only; non-invite fallback ALWAYS open; referral edge verified then discarded
# Scenario 1: invite fast-path — referral edge verified and discarded
Given an open-tier registration flow where invite-gating is enabled for spam control
When a new citizen submits a valid referral token from an existing participant
Then the token is verified for authenticity, the gate-check passes, and the referral edge is immediately discarded with no record retained
When the complete store, log, cache, and export are inspected after gate-check completes
Then no referral relationship data exists anywhere; no referrer identity is associated with the new entrant; no referral graph node is persisted

# Scenario 2: adversarial referral-data persistence attempt
Given an adversary who requests all stored data after the gate-check
When the platform responds
Then no referral relationship, referrer identity, or referral token is retrievable; the discard is architectural, not a deletion from a store

# Scenario 3: person with no invite completes full path to counted membership via non-invite fallback (the separating test — OI-19 ruling)
Given a citizen who has no referral token from any existing participant
When they attempt to register for the platform and proceed through the non-invite fallback path to full counted membership
Then the non-invite fallback path is available and open; it may be slower or higher-friction than the invite path but is not closed or refused; no fee is charged at any step on the fallback path (FR-020 no-fee property applies without exception); the citizen successfully completes enrolment (FR-069 nullifier minted) and gains counted-action eligibility (FR-123); they are not refused membership for lack of an invite

# Scenario 4: adversarial — operator attempts to close the non-invite fallback
Given an operator who attempts to configure the platform so that the non-invite fallback path is disabled, closed, or redirected to a dead end
When the configuration is applied
Then the system rejects the configuration; the non-invite fallback path cannot be closed by any operator configuration, deployment flag, or default; only the Charter-layer amendment process (FR-129; FR-118/FR-119; re-entry through both gates) can modify this requirement

# Scenario 5: counted-membership path is ungated — no invite required
Given a citizen attempting to register for COUNTED membership (verified personhood path) who does not have a referral token
When the path toward counted membership is examined
Then no invite-gate applies to the counted-membership path; FR-020 and FR-123 govern that path without exception; the referral token fast-path requirement applies only to the open-tier entry gate

# FR-126 — on-device credential processing; raw credential never transmitted to platform
Given a citizen completing the enrolment flow using an Aadhaar offline XML credential (Phase-1 adapter)
When the WASM prover generates the ZK proof and derives the enrolment nullifier on-device
Then the raw Aadhaar XML, stable identifier, and all intermediate credential material are discarded on-device before any data leaves the device

Given an adversary intercepting all network traffic during and after the enrolment flow
When the intercepted traffic is fully inspected
Then only the ZK proof and the derived nullifier are transmitted; no Aadhaar XML, eIDAS attribute, ICAO chip data, mDL data, or stable identifier is present in any network payload

Given the complete data inventory of every Trumocracy store, log, cache, queue, and backup inspected at any point during or after enrolment
When every field is examined
Then no raw credential material — Aadhaar XML, eIDAS attributes, ICAO chip data, mDL data — is present in any form; only the derived nullifier appears on any record

# FR-127 — duplicate detection by nullifier collision only; no identity record comparison
Given a person who has already enrolled (nullifier N exists on the verifiable record)
When they attempt a second enrolment using the same physical credential
Then the same nullifier N is derived on-device, the collision is detected on-chain by matching against the existing record, and the enrolment is rejected as duplicate

Given an inspection of all duplicate-detection code paths in the system
When every path is examined
Then no name-matching, biometric comparison, document-number lookup, administrative review, or identity-record comparison exists in any path; all duplicate detection operates exclusively by nullifier collision

# FR-128 — no stored identity data in any form; subpoena test as the acceptance criterion
Given the complete data inventory of every Trumocracy store, log, cache, message queue, backup, and ephemeral store
When inspected for raw or reversible identity data
Then zero identity documents, raw stable identifiers, biometric templates, date-of-birth fields, address fields, or any data from which the underlying stable identifier could be recovered are present — whether in plaintext or in encrypted form

Given a court order requiring the platform to disclose who belongs to a named political party (the subpoena test)
When a technically capable actor with full platform access attempts to comply with the order
Then the platform is technically unable to produce any identity-to-member mapping; no such mapping can be assembled from any combination of stored data; the enforcement is architectural and not a policy promise

Given an adversarial scenario in which an operator has stored identity data in encrypted form (a rejected design per Decision 4 / TD-12)
When the subpoena test is applied to that configuration
Then the encrypted store can be produced in response to legal compulsion; this configuration FAILS the subpoena test; the system MUST reject any configuration that stores raw or reversible identity data, even in encrypted form
```

```gherkin
# FR-129 — Charter-layer guard: making single-issuer operation permanent requires Charter-level amendment process, not a deployment default
# Adversarial: attempt to extend single-rail deployment via configuration flag
Given an operator or maintainer who attempts to extend the Phase-1 single-rail (Aadhaar-only) deployment beyond the published dated Phase-1 scope by applying a configuration flag, environment variable, or deployment default
When the configuration is applied
Then the system rejects the configuration; no deployment flag or default may make single-issuer operation permanent or extend it beyond Phase-1 scope; only the Charter-layer amendment process (FR-118/FR-119 — tier determination owed to the architect; re-entry through Gate 1 and Gate 2 per CLAUDE.md) can do so

Given a valid Charter-layer amendment that has re-entered through Gate 1 (direction approved) and Gate 2 (launch readiness confirmed) per CLAUDE.md, and whose approved scope includes modifying the Phase-1 issuer-plurality limitation
When the amendment is applied
Then the issuer-plurality scope restriction may be extended or modified per the amendment's approved outcome
```

```gherkin
# NFR-001 — privacy: no actor determines party membership or vote from system data
# Adversary model per §6 NFR-001: holds all operator logs, all attestor credential hashes, full public verifiable record, network timing at 1-second granularity
# ε and collusion bound provisional until OI-10 closes (Design, owner: Dr. Lena Kowalczyk)
Given an adversary with the capability set defined in NFR-001
And the adversary selects N ≥ 10,000 independently drawn target members
When the adversary attempts to determine which party each member belongs to or how they voted
Then the adversary's advantage over random guessing is ≤ ε (provisional: 0.02) at 95% confidence across the N trials
And an independent privacy audit finds zero critical or high linkage findings
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-002 — anonymity set floor
Given a scope in which only 40 eligible actors exist
When a person acts in that scope
Then the action is withheld from publication or aggregated until at least 1,000 indistinguishable actors are present
And the user is told that publication is delayed and why
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-003 — coercion resistance: receipt-freeness with PPT security parameter λ ≥ 128 bits
Given a voter who has cast a ballot
And the voter cooperates fully with a coercer, sharing device, credentials, and all stored artefacts after the fact
When the coercer (modelled as a PPT adversary with security parameter λ ≥ 128 bits) attempts to determine the voter's actual choice
Then the coercer's advantage over random guessing across the candidate set is negligible in λ
Given a voter who cast a ballot at time T1 and cast a replacement ballot at time T2 before close
When any observer examines the full public record, operator logs and network timing data
Then the observer cannot distinguish "this voter re-voted" from "this voter voted exactly once at T1"

# NFR-004 — sybil resistance: duplicate rate and attestor concentration cap
Given an independent quarterly audit using a consented random sample of ≥ 5,000 credentials per region
When the audit tests for duplicate or synthetic persons
Then the detected duplicate/synthetic rate is ≤ 0.1% at 95% confidence
Given an attestor that would reach 50% of credentials in a region with a new issuance
When they attempt to issue that credential
Then further issuance in that region is refused and the current share of each attestor is published

# NFR-005 — cost ceiling
Given a representative month of production traffic
When platform-borne cost per citizen governance action is measured
Then the median is below USD 0.01 and the 99th percentile is below USD 0.05
And the amount charged to citizens is USD 0.00 in 100% of cases

# NFR-006 — performance on the reference device profile
Given the reference device (2 GB RAM, Android 9) connected at 64 kbit/s with intermittent connectivity
When a user navigates to any primary screen
Then the screen is interactive within 5 seconds at the 95th percentile
When a user submits any governance action
Then it is acknowledged within 5 seconds p95 and finalised on the verifiable record within 120 seconds p95
When a new citizen completes the full enrol→endorse journey
Then the journey is completable within 10 minutes

# NFR-007 — reliability and availability SLOs
Given a representative calendar month of production traffic
When the citizen write-path availability is measured
Then it is ≥ 99.5% across the month
When the public read and verification path availability is measured
Then it is ≥ 99.9% across the month
Given a single operator node taken offline (single-operator failure)
When a citizen attempts a governance action within 60 minutes of the failure
Then the action completes through an alternative path and no governance action is permanently blocked

# NFR-009 — security audit: zero open critical/high at Gate 2
Given an independent third-party security and cryptography audit completed before launch
When the audit report is examined at Gate 2
Then zero critical or high findings remain open
And no privileged administrative override is present in any governance path, confirmed by audit inspection

# NFR-010 — data minimisation: no direct identifier in public or governance-path stores
Given a complete data-inventory inspection of the verifiable public record and all governance-path stores
When every field of every stored entity is examined
Then no identity document, biometric template, address, date of birth or other direct identifier is present
And no personal data is present on any immutable public record
Given the two restricted operational stores enumerated in §7 (Recovery requests & notification channel; Support & appeal records)
When those stores are inspected
Then each holds only the minimal personal data fields and retention durations stated in §7 (90 days; 24 months)

# NFR-011 — accessibility
Given each primary flow
When it is audited against WCAG 2.2 Level AA and operated by screen reader and keyboard/switch at 200% text scale
Then zero Level A or Level AA failures are found and every task is completable

# NFR-012 — portability: reference device and bandwidth floor
Given the reference device profile (2 GB RAM, Android 9 or equivalent mobile browser) at 64 kbit/s
When the client is installed
Then the install package is ≤ 15 MB
When a user completes any primary flow including offline draft composition with deferred submission
Then the flow completes successfully on the reference device profile

# NFR-013 — localisation: 8 launch languages, no untranslated strings
Given the platform deployed with all 8 launch languages configured, including at least one right-to-left locale
When any primary flow is exercised in each language
Then zero untranslated strings are displayed
And dates, numbers and names are formatted according to each locale's conventions

# NFR-014 — censorship resistance
Given the primary domain and the app store listing are both blocked in a region
When a citizen attempts a governance action
Then at least one alternative access path succeeds

# NFR-015 — compliance: erasure by design, legal review, pre-enrolment disclosure
Given a user who requests erasure of their personal data
When the system processes the request
Then it demonstrates that no personal data exists to erase in the governance-path stores or on the public record
And it offers credential deactivation as the available alternative
And the enrolment flow has disclosed this limitation before the user enrolled
Given a pilot jurisdiction before enablement
When legal review is conducted
Then legal sign-off is obtained per that jurisdiction before launch

# NFR-016 — key recovery: success rate and fraud rate
Given ≥ 500 legitimate recovery attempts measured
When recovery outcomes are assessed
Then ≥ 99% succeed within 14 days
Given a completed recovery
When the system is inspected for silent impersonation risk
Then the registered channel received a notification with a cancellation window active during the recovery delay
Given ≥ 10,000 recovery events audited
When fraudulent recoveries are counted (attacker rotates a key without the legitimate holder's knowledge or veto)
Then the fraud rate is ≤ 0.01%

# NFR-017 — upgradeability without unilateral control
Given a proposed change to a platform-wide governance rule
When Trumocracy, a funder or an operator attempts to enact it unilaterally
Then no such path exists and the change can only proceed through the tiered process and its timelock

# NFR-020 — rollback
Given a release in production
When a rollback is initiated
Then the previous version is fully restored within 15 minutes
Given a ballot that is currently open
When a flag governing that ballot's rules is changed
Then the change is refused until the ballot closes

# NFR-021 — open source and reproducible builds
Given the platform's governance-critical logic
When any third party obtains the published source repository
Then 100% of governance-critical logic is present under an OSI-approved licence
When that third party builds from source and compares the result to the running system
Then the build is byte-for-byte reproducible and matches the published artefact
And ≥ 1 independent party has verified build reproducibility before Gate 2

# NFR-022 — usability: unaided completion, SUS score, support rate
Given a usability study of ≥ 200 first-time non-technical users per launch locale
When they attempt the enrol→endorse journey unaided
Then ≥ 80% complete it within 10 minutes
And the System Usability Scale score is ≥ 75
And the support-contact rate for enrolment is ≤ 5%

# NFR-023 — content: grade-8 reading level, no jargon, notifications reveal nothing
Given any primary flow in any of the 8 launch locales
When the text is analysed for reading level
Then it is at or below grade-8 reading level per the locale's equivalent measure
When the text is searched for: wallet, seed phrase, private key, gas, token, mint, chain, block, hash, or equivalent jargon
Then zero occurrences are found in primary flows
Given a notification generated by any governance action
When the notification content is examined
Then it does not reveal party membership, party name, governance action type, or voting behaviour of the recipient

# NFR-024 — anti-harassment: no identity exposure, mechanical harassment metric
Given any member's profile or activity as viewable by any other member or unauthenticated actor
When all surfaces, exports and logs are examined
Then no identity, contact details, location precision below the member's declared region, or individual activity pattern is exposed
Given the harassment-rate metric computed per NFR-024 (repeat recall/nomination initiations against a single office-holder per 1,000 members in 90 days)
When this metric is computed for a production month
Then it is published on the governance dashboard (NFR-019) within 72 hours of month close
And the computation is performed mechanically, with no Trumocracy employee exercising discretion over political speech content
# v2.0.0: this guarantee is tier-scoped per BR-017 — unconditional for Supporter-tier and for ballot content/direction in every tier; Worker/Candidate role-relevant records are public by consent (§4.24)

# NFR-025 — operator cannot censor an individual
Given an operator deliberately withholding one citizen's governance action
When 60 minutes have elapsed
Then the action has been included through an alternative path

# NFR-027 — no per-user behavioural telemetry; inspection of every store/log/export finds zero events; UT-0525/UT-0740 pass
Given the full data inventory of every store, log, and export in the system
When inspected for per-user behavioural events
Then zero per-user behavioural events (clicks, page views, dwell time, reading trails, or equivalents tied to a person, credential, nullifier, session, or device) are present anywhere
And UT-0525 and UT-0740 pass on every release, confirming absence of tracking

# NFR-028 — append-only data lifecycle; hard-delete and overwrite attempts fail; state transition appended with cause
Given any governance-path entity in any state
When any actor attempts to hard-delete or overwrite it
Then the operation is refused; no hard-delete or overwrite path exists in any governance-path store
Given any state transition for any governance-path entity
When it is processed
Then the transition is appended with timestamp and cause; the prior state is preserved unchanged
```

---

## 9. Constraints (CON) & Assumptions

### 9.1 Constraints

| ID | Constraint | Type | Owner |
|----|-----------|------|-------|
| CON-001 | Trumocracy organises **political parties only**. It MUST NOT conduct, tabulate, certify, replace or hold itself out as conducting any binding state election, referendum or plebiscite. Every public surface MUST state this boundary. **This is absolute and not negotiable at any gate.** _(v2.2.0 per OI-18: promoted into the Tier-1 entrenched charter (FR-118) — unamendable by any vote, changeable only by fork.)_ | Legal / product | Sofia Marchetti |
| CON-002 | Trumocracy MUST NOT take custody of personal identity documents, biometric templates, or residential addresses at any point in any flow. | Legal / privacy | Dr. Lena Kowalczyk |
| CON-003 | There MUST be no single trusted operator, administrative key, privileged role, pause switch or emergency override in any governance path — including for Trumocracy itself. | Architectural | Rafael Duarte |
| CON-004 | All governance-critical logic MUST be open source under an OSI-approved licence with reproducible builds. | Openness | Rafael Duarte |
| CON-005 | Electoral, party-registration, political-finance and association law differ per jurisdiction. Each launch jurisdiction MUST pass legal review before enablement, and features MUST be independently gateable per jurisdiction. | Legal | Sofia Marchetti |
| CON-006 | No transferable token, coin, security, membership sale, subscription or fundraising instrument for the platform may exist. Governance rights MUST NOT be represented by anything transferable. | Anti-corruption | Erik Lindqvist |
| CON-007 | Appetite: **USD 4.2M** (accepted budget ~USD 4.13M — Lever L2: one pilot at launch; see Gate 1 decision B-01 and Doc 01 §E2) and a team of **18** through launch. Gate 1 re-entry target 2026-08-15 (this packet); Gate 2 target 2027-05-14 (per S-01); launch **2027-06-01** (fictional press-release dateline per Doc 01 v2.0.0; actual launch follows Gate 2 readiness 2027-05-14). Scope, not date, absorbs overrun. _(v2.0.1: launch re-dated per S-01; v2 scope schedule/appetite re-estimated in Doc 13 after Gate 1 — open item.)_ | Budget / schedule | Priya Raghunathan |
| CON-008 | The public record is immutable, which is irreconcilable with an unrestricted right of erasure. The constraint therefore is: **no personal data may ever be written to it.** | Legal / architectural | Sofia Marchetti |
| CON-009 | Threshold denominators depend on third-party population statistics whose accuracy, granularity and update cadence Trumocracy does not control and MUST NOT modify. | External dependency | Yuki Sato |
| CON-010 | Mobile application-store policies restrict political and election-related applications; distribution MUST NOT depend on a single store or domain. | Distribution | Hiroshi Tanaka |
| CON-011 | Device floor 2 GB RAM / Android 9; bandwidth floor 64 kbit/s intermittent. Any feature that cannot meet this floor MUST be cut, not degraded silently. | Product | Nadia Hassan |
| CON-012 | No bespoke, unaudited cryptographic construction may be used for any privacy, personhood or ballot property; every such property MUST rest on independently audited work. | Security | Rafael Duarte |
| CON-013 | Non-violence is a founding principle of the platform: the standard non-violence clause is mandatory in every party constitution (FR-077); this is the platform's single deliberate exception to political-content neutrality, recorded as such. | Values / product | Daniel Okonkwo |
| CON-014 | The platform cannot grant, deny or override legal party registration; platform status and legal status are distinct on every surface (FR-075). | Legal | Sofia Marchetti |
| CON-015 | A **legal opinion** for the Phase-1 lead jurisdiction (India) MUST be obtained and recorded before the enrolment requirement (FR-069/FR-070/FR-121) is finalised against the Aadhaar rail and before the Phase-1 adapter is marked implementation-ready. Aadhaar's use for anything resembling political or voter identification is legally sensitive in India; the legal opinion MUST address this specifically and MUST be on record before Gate 2. This is a **Gate-2 line item** — no Gate-2 checklist may show the Phase-1 enrolment adapter as ready without a recorded legal sign-off. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1; Rathish, 2026-08-20.)_ | Legal / regulatory | Sofia Marchetti |

### 9.2 Assumptions & dependencies

| ID | Assumption / dependency | If false |
|----|------------------------|----------|
| A-01 | At least two mutually independent identity attestors are available and willing in each pilot jurisdiction. | `RISK-05` materialises; that jurisdiction cannot launch. |
| A-02 | At least two independent published population sources exist per region at the required granularity. | `RISK-12`; thresholds cannot be computed; re-scope to coarser regions. |
| A-03 | Anonymous political association is lawful in each pilot jurisdiction. | `CON-005` blocks that jurisdiction. |
| A-04 | Citizens will accept a slower, less convenient voting experience in exchange for coercion resistance. | `TD-06` must be re-decided; usability targets at risk. |
| A-05 | Grant funding of USD 4.2M is committed through launch, with no governance strings attached. | `CON-007` and `BR-008` conflict; escalate to Gate 1. |
| A-06 | Infrastructure exists that provides tamper-evident, independently verifiable records without a single controlling operator, at the cost target. | `NFR-005` or `CON-003` is unachievable; the product thesis is at risk. |

### 9.3 Recorded trade-offs (tensions we are NOT pretending we resolved)

| ID | Tension | Decision taken | What we give up | Owner |
|----|---------|----------------|-----------------|-------|
| TD-01 | **Transparency vs privacy.** Total verifiability implies a public record; privacy implies publishing nothing about a person. | Publish *outcomes, counts, charters and tallies* in full; publish *nothing* that identifies a person. Verifiability is achieved over aggregates and proofs, never over identified individuals. | Researchers cannot study individual-level participation; some legitimate audit questions ("did person X vote twice?") are unanswerable by anyone, including us. We accept that. | Dr. Lena Kowalczyk |
| TD-02 | **Accountability vs anonymity.** You cannot hold someone accountable for a vote you cannot attribute. | Deliberate asymmetry: ordinary members anonymous; candidates and office-holders publicly identified **by their own informed consent**, with their office-capacity governance votes attributable. _(v2.0.0: extended to the three-tier model — Supporters anonymous unconditionally; Workers AND Candidates public by explicit informed consent at role-taking; disclosure scales with power sought; consent irrevocable for the term; prior supporter-period activity never retroactively linked.)_ | Office-holders lose privacy permanently for the term — irreversibly. Some good people will not stand because of it. Members' *ordinary* votes remain unaccountable, so a member cannot be praised or blamed for them. | Erik Lindqvist |
| TD-03 | **Immutability vs erasure rights.** An immutable record cannot honour "delete my data". | Hold no personal data anywhere, so erasure has nothing to bite on; offer credential deactivation instead of deletion; disclose the limitation *before* enrolment. | This is a legal posture, not a legal certainty. A regulator may disagree, and pseudonymous-but-immutable records may still be deemed personal data in some jurisdictions. Legal review per jurisdiction is a launch condition (`NFR-015`). | Sofia Marchetti |
| TD-04 | **Code-only governance vs no recourse.** No override means no fix when something goes genuinely wrong. | Accept it. No override button exists, including for demonstrable error. Recourse is limited to what the charter's own tiered amendment process and the right to leave/fork provide. | A party can make a decision that is stupid, self-harming or the result of a bug, and nobody can undo it outside the charter's own process. Every operational instinct will push against this; the tenets say hold. | Tomás Ferreira |
| TD-05 | **Sybil resistance vs inclusion.** Strong personhood proof excludes people without documents. | Require plural attestation paths including at least one non-document-based path per region, and publish exclusion rates as a launch metric. Phase 1 (per OI-03) uses government eID as the sole uniqueness anchor; FR-070 adds a pluggable adapter interface and FR-073 codifies the Phase-1 hierarchy. | Some eligible people will still be excluded — disproportionately the marginalised, which is precisely the population the product claims to serve. We measure it and publish it rather than claim it away. Open item `OI-03`. | Marcus Adeyemi |
| TD-06 | **Coercion resistance vs verifiability and usability.** Letting a voter verify their own vote gives them a receipt; hiding it costs confidence and adds friction. | Choose receipt-freeness. The voter verifies that the *tally* is correct, not that *their* ballot is in it. | Voters cannot personally confirm their vote was counted, which is a genuine loss of individual confidence, and re-voting adds UX complexity. Mitigated by universal verifiability (`FR-033`), not eliminated. | Aisha Nkemdirim |
| TD-07 | **Candidate feedback asymmetry.** Simple +1/−1 scoring treats upvotes and downvotes symmetrically; but casting a visible downvote against a local incumbent creates a retaliation risk that an upvote does not. | Accept deliberate asymmetry: upvote = +3, downvote = −1 (FR-065). Individual votes private; only aggregate tally public. An ADR (architect's, Doc 03) will document the full rationale and the equilibrium (net positive above ~25% of feedback casters). | Critics will note the scoring flatters incumbents by demanding more upvotes than downvotes to show a negative result; the asymmetry is the deliberate risk accepted to protect downvoters. | Aisha Nkemdirim |
| TD-08 | **No behavioural telemetry vs product observability.** Aggregate-only analytics forfeits funnel visibility, individual A/B testing, and per-user UX research. | Accept: behavioural data deanonymises supporters and is a ready-made political-intelligence database for a hostile actor; aggregate-only analytics accepted as strictly worse for product iteration (FR-111, NFR-027). | We give up funnel analytics, individual A/B testing, and per-user UX research. Aggregate dashboards and consenting-panel usability studies (NFR-022) are the only permitted substitutes. | Dr. Lena Kowalczyk |
| TD-09 | **Worker permanence vs recruitment.** Irrevocable-for-term public identity will deter some capable people from the Worker tier. | Accept: the alternative, revocable disclosure, would allow power to be sought without accountability; the deterrent effect is the deliberate price (FR-080/FR-084). | Some good people will not take the Worker tier because of it. We accept that and publish the participation rate rather than claim it away. | Grace Mbeki |
| TD-10 | **Political neutrality vs the non-violence clause.** The platform imposes exactly one substantive political value on every party constitution. | Accept knowingly as a founding principle; code enforces presence-check only (FR-077); enforcement beyond presence is for members and law; disclosed on every party-creation surface (CON-013). | Critics will assert any mandatory clause is a political position; we accept this characterisation and defend it as the narrowest possible exception, disclosed in full. | Daniel Okonkwo |
| TD-11 | **Standing steward body vs the no-standing-body instinct.** | Ruling 4 and FR-099/FR-101 deliberately use per-case sortition and forbid standing panels wherever a body could touch outcomes. The steward organisation IS a standing body — accepted because coordination work (audits, ceremonies, vendor contracts, fund custody) needs continuity and a legal counterparty, and because the body is stripped of outcome power (FR-115/FR-116), mechanically term-limited and recallable (FR-114), and structurally unnecessary (FR-117). | A standing body accretes soft authority even without formal power (RISK-31); the mitigation is that its irrelevance is a tested property, not a promise. | Rafael Duarte |
| TD-12 | **Two rejected identity-posture designs (Decision 4, Rathish, 2026-08-20).** Two designs were considered and explicitly rejected: (1) **Persistent referral graph / referrer-liability / association-based tracing** — rejected because it deanonymises Supporters through the social graph, enables guilt-by-association purges, and contradicts the non-behavioural-surveillance and sacred-user-space guarantees (FR-111, NFR-027). Referral MAY gate open-tier entry, but the referral edge is verified and then discarded, never stored (FR-125 — finalised at v2.4.0; OI-19 RESOLVED). (2) **Encrypted identity registry for later comparison** — rejected because a decryptable identity registry recreates the subpoena, operator-override, and capture risks the platform exists to eliminate; it converts "we cannot deanonymise you" into "we promise not to" (FR-128, subpoena test). Both rejected designs are the architect's to record in a new ADR as considered-and-rejected with rationale; this note provides the Doc 02 reference trail. _(Source: DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 4; Rathish, 2026-08-20.)_ | Decision 2/3 preserve the guarantee while accepting that referral-edge spam control and on-device-only processing impose UX and operational costs. | Dr. Lena Kowalczyk |

> ✅ v2.0.0: the TD-02 vs FR-062 contradiction is resolved by the three-tier privacy ruling per BR-017 — see §4.19 and §4.24.

---

## 10. Risks (RISK)

> The **living risk register of record is Project Plan (Doc 13) §6**. Listed here are the
> requirement-level risks using the shared `RISK-##` IDs. L/I scale: 1 (low) – 5 (high).

| ID | Risk | L | I | Mitigation (requirement refs) | Owner |
|----|------|---|---|-------------------------------|-------|
| RISK-01 | **Sybil inflation of a threshold** — fake or duplicated persons manufacture endorsements to activate a party or carry a vote. | 4 | 5 | `FR-001`, `FR-002`, `FR-004`, `FR-014`, `NFR-004`; published duplicate-rate audit; attestor concentration cap; activation dwell period (`FR-018`). | Marcus Adeyemi |
| RISK-02 | **Coercion and vote-buying** — an employer, spouse, clan leader or broker compels or purchases votes. | 4 | 5 | `FR-031`, `FR-032`, `FR-034`, `FR-035`, `NFR-003`; no interim results; adversarial audit; user education in-flow. | Aisha Nkemdirim |
| RISK-03 | **Flash governance takeover** — voting power acquired instantaneously immediately before or during a vote. | 3 | 5 | `FR-023` maturation, `FR-028` open-time snapshot, `FR-026` timelock, `FR-035` non-transferability; red-team simulation before Gate 2. | Rafael Duarte |
| RISK-04 | **Mob capture of a founding charter** — a coordinated flood of new members rewrites the party's founding clauses. | 4 | 5 | `FR-027` entrenched clauses with membership-age quorum, `FR-023`, `FR-025` escalating tiers, `FR-026` long timelock, `FR-053` fork as the minority's exit. | Rafael Duarte |
| RISK-05 | **Identity-provider single point of failure or compromise** — one attestor fails, is captured, is compelled, or mass-issues credentials. | 3 | 5 | `FR-004` ≥2 independent attestors + 50% cap + published shares; `FR-005` revocation; jurisdiction cannot launch with one attestor (`A-01`). | Marcus Adeyemi |
| RISK-06 | **Deanonymisation via correlation or timing** — traffic patterns, action timing or small scopes re-identify a member. | 4 | 5 | `NFR-001`, `NFR-002` k≥1000 anonymity floor with withholding, `NFR-010` no personal data, `NFR-023` notification metadata rules; adversarial privacy audit at Gate 2. | Dr. Lena Kowalczyk |
| RISK-07 | **State compulsion** — a government orders disclosure of the member list or a voter's ballot. | 3 | 5 | `FR-003`, `NFR-010`, `FR-030` — the data does not exist to disclose; `FR-057` transparency reporting; pre-enrolment disclosure of residual exposure via attestors. **Residual risk accepted and disclosed** (Doc 01 §E3). | Sofia Marchetti |
| RISK-08 | **State-level blocking** — the platform is blocked at the network or app-store level. | 4 | 4 | `NFR-014` ≥2 independent access paths verified under blocking simulation; `CON-010` no single-store dependency. | Chen Wei |
| RISK-09 | **Ordering/settlement infrastructure liveness failure** — the infrastructure that finalises the verifiable record stalls or censors. | 3 | 4 | `NFR-025` alternative inclusion path within 60 min; `NFR-007` availability; `FR-061` degrade-by-delay not denial. | Chen Wei |
| RISK-10 | **Compromise of the privacy-proving system or its setup ceremony** — a flaw or a compromised setup silently breaks anonymity or allows forged eligibility. | 2 | 5 | `CON-012` no bespoke unaudited constructions; `NFR-009` independent cryptography audit with 0 critical/high; `NFR-021` reproducible open-source builds; ceremony transparency requirements set by the architect in Doc 03. | Rafael Duarte |
| RISK-11 | **Key loss at population scale** — hundreds of thousands of citizens lose access and cannot participate. | 4 | 4 | `FR-058` seedless recovery with timelock/notify/cancel, `FR-059` privacy-preserving recovery, `NFR-016` ≥99% success within 14 days; recovery-rate monitoring as a launch SLO. | Amara Diallo |
| RISK-12 | **Oracle manipulation of the population denominator** — the number thresholds are computed against is wrong, stale or manipulated, making activation trivially easy or impossible. | 3 | 5 | `FR-009` ≥2 independent sources + disagreement tolerance + dispute window; `FR-018` denominator and sources recorded immutably at activation; public denominator dashboard (`NFR-019`). | Yuki Sato |
| RISK-13 | **Reputational and misuse risk** — parties formed for unlawful, violent or extremist purposes are hosted on the platform and attributed to us. | 4 | 4 | `FR-056` display filtering scoped strictly to the jurisdiction where content is unlawful, publicly logged, never a deletion; `FR-057` transparency register; explicit public position (Doc 01 §E3); residency-scoped thresholds prevent manufactured distributed support. **Residual risk accepted.** | Daniel Okonkwo |
| RISK-14 | **Regulatory reclassification** — a regulator deems the platform an electoral body, a political-finance vehicle, or a data controller of political-opinion data. | 3 | 5 | `CON-001` absolute boundary stated on every public surface; `CON-005` per-jurisdiction legal review and feature gating; treasury features off by default; `NFR-015` documented posture. | Sofia Marchetti |
| RISK-15 | **Adoption failure** — thresholds are never reached because too few citizens enrol, and the platform looks like a graveyard of dead petitions. | 4 | 4 | Field enrolment programme; threshold calibration reviewed against month-3 enrolment; petition expiry and archiving (`FR-013`) to avoid a visible graveyard; kill criteria 3 and 4 in Doc 01 §E2. | Grace Mbeki |
| RISK-16 | **Trumocracy itself becomes the gatekeeper** — through code authorship, funding conditions, or an operational lever added under pressure. | 3 | 5 | `CON-003` no override, `CON-004` open source, `NFR-017` governed upgrades with timelock, `NFR-018` party exit/export rights, `NFR-021` reproducible builds; Gate-2 audit assertion that zero privileged governance paths exist. | Rafael Duarte |
| RISK-22 | **Stolen-credential takeover (Change 7)** — an attacker who obtains a victim's credential (e.g., a stolen document or cloned eID) initiates the nullifier-collision recovery flow (FR-071) to seize the victim's party membership and voting rights. | 3 | 5 | `FR-072` seven-day delay + active-key veto; `NFR-016` ≥99% legitimate recovery success within 14 days; notification to registered channel at initiation; veto window equal to delay. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-23 | **Veto suppression (Change 7)** — an attacker simultaneously compromises the victim's registered notification channel (e.g., email or phone) to suppress the recovery veto notification, preventing the legitimate holder from cancelling before key rotation completes. | 2 | 5 | `FR-072` active-key veto independent of notification channel where feasible; secondary out-of-band notification required; `NFR-016` fraud rate ≤ 0.01%. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-24 | **Recovery raced against a live ballot (Change 7)** — an attacker initiates recovery during an active ballot window, briefly holding dual control of an active credential, and attempts to cast a replacement ballot under the original key before rotation completes. | 2 | 5 | `FR-072` voting barred for the recovering credential during the seven-day delay; active-key veto; `FR-032` only the last valid ballot counted; ballot-scope nullifiers prevent double-counting. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 7.)_ | Rafael Duarte |
| RISK-25 | **Public-tier disclosure enables targeting and harassment** — workers, candidates, and office-holders whose identities are public may be targeted in the physical world. | 3 | 4 | `FR-084` disclosure schedule limits what is demanded; `FR-063` ballot direction never disclosed; `NFR-024` harassment-rate metric (mechanical, no human discretion); `FR-103` individual conduct votes private. | Daniel Okonkwo |
| RISK-26 | **Analytics prohibition slows UX iteration and masks funnel failures** — with no per-user telemetry, product teams cannot detect individual drop-off points or run A/B tests. | 4 | 2 | `NFR-019` aggregate-only governance dashboards; `NFR-022` usability studies on consenting panels; TD-08 records the deliberate trade-off. | Yuki Sato |
| RISK-27 | **Committee soft power — agenda capture despite no formal power** — a steering committee that sets meeting agendas and controls facilitation can steer outcomes without holding decisional power. | 3 | 3 | `FR-090` public proposal authorship with equal standing for competing proposals; `FR-087` public committee composition and minutes; `FR-089` mechanical expiry with no standing renewal path. | Tomás Ferreira |
| RISK-28 | **Conduct and removal votes weaponised for harassment campaigns** — coordinated members flood conduct votes or removal votes against a targeted individual. | 3 | 4 | `FR-104` affirmative quorum with UT-0220 growth-surge defence; statement right mandatory before window closes; `NFR-024` harassment-rate metric; `FR-044`-style cooldowns as governance constants (OI-17). | Daniel Okonkwo |
| RISK-29 | **Non-violence clause drags the platform toward content judgment** — enforcing one mandatory political value creates pressure to enforce others. | 2 | 4 | Code enforces presence-check only (`FR-077`); enforcement beyond presence belongs to members and law; `FR-056` jurisdiction-scoped display filtering boundary unchanged; TD-10 records the accepted tension. | Sofia Marchetti |
| RISK-30 | **Trust-anchor governance latency** — member-vote revocation is slower than an operator kill-switch; a compromised anchor can mint Sybils during the emergency-variant timelock. | 2 | 5 | `FR-112` expedited emergency variant with published (shortened but non-zero) duration; `FR-004` attestor concentration cap limits Sybil yield per compromised anchor; `NFR-004` quarterly audit; residual accepted — cites SC-13/SC-14 from artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md. | Rafael Duarte |
| RISK-31 | **Steward soft-power accretion** — the community treats steward proposals as canonical, vendors treat steward signatures as authority, and de facto control accretes without any formal power changing. | 3 | 4 | `FR-115` exhaustive powers; `FR-116` competing proposals with equal standing; `FR-117` zero-dependency property tested; `FR-114` recall + term expiry; `FR-120` fork backstop; `NFR-019` operational reports public. | Rafael Duarte |
| RISK-32 | **Steward-body collapse** — funding collapse, mass resignation or vacancy (the Bitcoin Foundation scenario) degrades coordination: audits and ceremonies slow, vendor contracts lapse. | 3 | 2 | `FR-117` guarantees zero citizen-facing impact; fresh election per `FR-114`; operational reports expose runway early. Residual accepted: coordination latency during vacancy — deliberately low impact BY DESIGN. | Chen Wei |

---

## 11. Requirements prioritization & release plan (MoSCoW)

**Counts (v2.4.0).** 21 BR · 129 FR minted (127 active + 2 superseded: FR-046, FR-062) · 28 NFR · 15 CON · 27 requirement-level RISK rows in §10 (RISK-01..16 + RISK-22..32; RISK-17..21 live in Doc 13) · 12 TDs.
_(v1.1.0 baseline: 13 BR · 73 FR · 26 NFR · 12 CON · 19 RISK · 7 TDs. v1.0.0 baseline: 12 BR · 61 FR · 26 NFR · 12 CON · 16 RISK · 6 TDs. Added by CR-v1.1.0: 1 BR, 12 FR, 3 RISK, 1 TD. Added by v2.0.0 re-entry: 7 BR, 40 FR, 2 NFR, 2 CON, 9 RISK, 3 TDs; 2 FRs superseded. Added by v2.1.0: 1 BR (BR-021), 7 FR (FR-114..FR-120), 2 RISK (RISK-31..32), 1 TD (TD-11). Added by v2.3.0: 8 FR (FR-121..FR-128, all Must), 1 CON (CON-015), 1 TD (TD-12); OI-19/OI-20 minted. No new BR or NFR. Added by v2.4.0: 1 FR (FR-129, Must — Charter-layer guard); OI-19 and OI-20 CLOSED; FR-125 finalised (no longer draft). New FRs have no DES/US yet — recorded-phasing posture, RTM catches up.)_

| Priority | FR count | FR IDs |
|----------|----------|--------|
| **Must** | **110** | FR-001, 002, 003, 004, 006, 007, 008, 009, 010, 011, 014, 016, 018, 020, 021, 022, 023, 024, 025, 026, 027, 028, 030, 031, 032, 033, 035, 036, 037, 039, 040, 042, 043, 045, 047, 050, 051, 054, 056, 058, 059, 060, 061, 063, 064, 065, 066, 067, 068, 069, 070, 071, 072, 073, 074, 075, 076, 077, 078, 079, 080, 081, 082, 083, 084, 085, 086, 087, 088, 089, 090, 091, 092, 093, 094, 095, 096, 097, 098, 099, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129 |
| **Should** | 14 | FR-005, 012, 013, 015, 017, 019, 029, 034, 038, 041, 044, 048, 049, 055 |
| **Could** | 3 | FR-052, 053, 057 |
| **Won't (this release)** | — | Vote delegation; state elections; cross-jurisdiction parties; social features; staff moderation of political speech |
| **Could (non-FR features, v2 candidates)** | — | Party dormancy/deactivation lifecycle; treasury splitting on fork; personal blocklists — deferred to v2, contingent on month-6 metrics per Doc 01 §D and FAQ §E3. Classified as Could in Doc 01 §D; not permanently excluded. _(ISS-08: aligned with Doc 01 §D.)_ |

_Convention: superseded rows (FR-046, FR-062) are excluded from the active Must set and from implementation; they are retained for traceability only. FR-125 is a finalised Must requirement (OI-19 RESOLVED at v2.4.0; no longer draft; implementation-ready)._

NFR priorities: **Must** — NFR-001…007, 009…017, 020…025, 027…028 (24). **Should** — NFR-008, 018, 019, 026 (4).

**On the size of the Must set.** The Must set grows from 54 to 94 with the v2.0.0 vision re-entry directed by the approver (Rathish, 2026-08-10). The 40 new Must FRs (FR-074..FR-113) cover party self-governance, participation tiers and privacy, committees, proposal lifecycle, candidate selection, manifesto, financial transparency, COI, audit, disputes, member rights, conduct votes, data classification, transparency dashboard, scorecard, and trust-anchor lifecycle governance. FR-050 is raised from Should to Must (financial transparency is now a business requirement, BR-019). FR-062 is superseded by §4.24 (FR-082..FR-086) and excluded from the active Must count. All v2.0.0 FRs are Must per the approver's direction. Gate 1 re-entry approves direction; Gate 2 still governs launch readiness. _v2.1.0: the Must set grows from 94 to 101 with seven steward-organisation FRs (FR-114..FR-120), all Must per the conditional Gate-1 approval directed by Rathish (2026-08-11); the condition is fulfilled by this version landing before Design. v2.3.0: the Must set grows from 101 to 109 with eight FRs (FR-121..FR-128) covering pilot jurisdiction sequence, tiered participation (verification gates counting, never joining), and on-device proof / nullifier-only identity posture — all Must per Decision 1–3 (Rathish, 2026-08-20). New FRs have no DES/US yet — same recorded-phasing posture as FR-074..FR-111; tester's next RTM catch-up covers FR-121..128. v2.4.0: the Must set grows from 109 to 110 with FR-129 (Charter-layer guard — making single-issuer operation permanent requires Charter-level re-entry, never a deployment default; OI-20 ruling, Rathish, 2026-08-20). FR-125 finalised (OI-19 RESOLVED). FR-129 has no DES/US yet — same recorded-phasing posture._

**Release shape.** One release at 2027-06-01 (following Gate 2 readiness 2027-05-14), delivered
on trunk behind flags, rolled out 1 → 10 → 50 → 100% in the one approved pilot jurisdiction; a
second jurisdiction is planned post-launch once month-6 metrics are confirmed (Lever L2). Should
items land inside the same release window where they fit; Could items are explicitly post-launch.

---

## 12. Traceability

Every FR and NFR in this document traces **up** to at least one BR (see the `Traces to` column) and
will trace **down** to a `DES` (Doc 03), a `US` (Doc 05) and a `TC` (Doc 07). The RTM (Doc 08),
authored by the tester and verified by reviewer-qa, is the system of record for that chain. **A gap
in any Must row blocks Gate 2.** Backlog stories are seeded in `docs/05-product-backlog.md` and each
declares its `FR`/`NFR`; `DES` and `SCR` links are attached after Design and reconciled in the RTM.

**v1.1.0 additions (CR-v1.1.0):** BR-013 → FR-066, FR-067. FR-062, FR-063 → BR-005, BR-009. FR-064, FR-068 → BR-003, BR-012. FR-065 → BR-004, BR-005. FR-069, FR-070, FR-073 → BR-006 (FR-070 also CON-005; FR-073 also BR-012). FR-071, FR-072 → BR-006/007/009/012. All 12 new Must FRs have been seeded with at least one US in Doc 05 v1.1.0.

**CR-v1.1.0 Change 9 ('party operation / no boss roles'):** No new requirement minted. Analysis confirms coverage by FR-020 (join without approval), FR-021 (equal standing, no weight advantage by office), FR-024 (any matured member may propose), FR-056 (no operator override in governance path), BR-003 (equal standing). Detail: artifacts/product-owner-2026-08-09T2200.md. _(ISS-10.)_

Requirements arising from production learnings will carry a `Source = REF-##` value in §3/§4
per the refine loop; none exist at v1.0.0 or v1.1.0 (all v1.1.0 requirements source from CR-v1.1.0).

**v2.0.0 additions (BR-014..BR-020; vision re-entry directed by Rathish, 2026-08-10):**
- BR-013 (extended) → FR-081, FR-093 _(adds to existing FR-066, FR-067)_
- BR-014 → FR-076, FR-077, FR-087, FR-091, FR-092, FR-094
- BR-015 → FR-087, FR-088, FR-089, FR-090, FR-098, FR-099, FR-101, FR-112, FR-113
- BR-016 → FR-079, FR-080, FR-081, FR-102
- BR-017 → FR-080, FR-082, FR-083, FR-084, FR-085, FR-086, FR-106, FR-111
- BR-018 → FR-097, FR-098, FR-100, FR-101, FR-103, FR-104, FR-105
- BR-019 → FR-076, FR-078, FR-092, FR-094, FR-095, FR-096, FR-097, FR-099, FR-107, FR-108, FR-109, FR-110
- BR-020 → FR-074, FR-075
- FR-050 _(raised Must)_ → BR-005, BR-010 _(existing traces; priority change only)_

**Session scope (approver instruction, 2026-08-10):** this session produces Docs 01 and 02 only and stops at Gate 1. US seeding (Doc 05) and TC design (Doc 07) for FR-074..FR-113 follow after the Gate 1 re-entry decision; until then the downstream columns for v2.0.0 FRs are OPEN by design — recorded here, not hidden. The RTM (Doc 08) closes the chains when Docs 05/07 catch up.

**v2.1.0 additions (BR-021; steward organisation; Rathish, 2026-08-11):**
- BR-021 → FR-114, FR-115, FR-116, FR-117, FR-118, FR-119, FR-120
- BR-015 (equal standing, no outcome power) → FR-114, FR-115, FR-116, FR-118 _(existing BR; steward FRs add to its downstream set)_
- BR-008 (no unilateral protocol change) → FR-116, FR-119 _(existing BR; steward FRs add to its downstream set)_
- BR-003 (unconditional exit) → FR-120 _(existing BR; fork backstop adds to its downstream set)_

**Part B requirement-7 check (non-violence, v2.1.0):** Part B item 7 (non-violence) minted no new requirement — confirmed already covered by CON-013 and FR-077 (v2.0.0); recorded here per the Change-9 precedent.

**Session scope (v2.1.0 extension):** US (Doc 05) and TC (Doc 07) seeding for FR-114..FR-120 joins the existing v2.0.0 catch-up owed after this version lands (the RTM closes the chains); downstream columns are OPEN by design — recorded not hidden. The RTM will close the full chain BR-021 → FR-114..FR-120 → DES → US → TC when Docs 03/05/07 catch up post-Gate-1.

**v2.3.0 additions (Decision 1–3, Rathish, 2026-08-20; DECISIONS-2026-08-20-PILOT-VERIFICATION.md):**
- BR-020 (multi-country, pilot jurisdiction) → FR-121 _(pilot sequence; extends existing BR-020 downstream set)_
- BR-003 (open membership), BR-016 (tiers self-assigned) → FR-122 _(open-tier access without verification)_
- BR-006 (unique personhood), BR-010 (wealth not convertible to influence), BR-016 → FR-123 _(personhood required for counted actions)_
- BR-009 (no identity exposure), BR-017 (tier-scoped anonymity), BR-006 → FR-124 _(verified status and privacy composition)_
- BR-003, BR-006 → FR-125 _(open-tier invite-gating; finalised at v2.4.0 — OI-19 RESOLVED; story now Ready per DoR once DES/US assigned)_
- BR-009, BR-006 → FR-126 _(on-device credential processing; strengthens FR-003)_
- BR-006, BR-009 → FR-127 _(nullifier-collision duplicate detection only)_
- BR-009, BR-006 → FR-128 _(no stored identity data; subpoena test)_

**Session scope (v2.3.0/v2.4.0):** DES (Doc 03) and US (Doc 05) seeding for FR-121..FR-129 is owed after the next Design/Backlog catch-up. Downstream columns are OPEN by design — recorded not hidden. The RTM will close the chains when Docs 03/05/07 catch up. FR-125 is now implementation-ready (OI-19 RESOLVED at v2.4.0); its story may be marked Ready in Doc 05 once DES/US are assigned. FR-129 joins the recorded-phasing set awaiting DES/US; the architect MUST determine which amendment tier (FR-118 Tier 1 or FR-119 Tier 2) governs issuer-plurality requirements in the next Doc 03 increment.

- BR-006, BR-012, BR-021 → FR-129 _(Charter-layer guard — single-issuer permanence requires Charter-level re-entry; OI-20 ruling, Rathish, 2026-08-20; DES/US owed at next Design increment)_

---

## 13. Open issues / TBD

| ID | Open issue | Needed by | Owner |
|----|-----------|-----------|-------|
| **OI-01** | **What activation threshold percentage is right?** The whole product hinges on this number and we do not have it. Too high and no party ever activates (kill criterion 4); too low and the network fills with noise. It must also survive `RISK-12` denominator error. Proposal: a jurisdiction-specific range calibrated against month-3 enrolment, fixed publicly before any petition opens. **Requires a Gate-1 decision on the calibration method, not the number.** | Gate 1 | Tomás Ferreira |
| **OI-02** | **Is the Must set of 42 FRs accepted, or must a walking-skeleton capability be deferred?** See §11. Recall (FR-042/043/045) is the only coherent deferral candidate. Guardrails are not offered for deferral. _(Decided at Gate 1: Must set accepted in full; recall kept.)_ | Gate 1 ✓ | Priya Raghunathan |
| **OI-03** | **What exclusion rate from personhood enrolment is acceptable, and what is the non-document-based attestation path?** `TD-05` — the people most likely to fail a document check are the people the product exists to serve. Needs a target and a named alternative path per pilot jurisdiction. _(Decided at Gate 1: Phase 1 = government eID sole anchor, exclusion accepted and documented. Phase 3 = non-document path needs own ADR, threat model, and audit.)_ | Gate 1 ✓ | Marcus Adeyemi |
| **OI-04** | ~~**Which pilot jurisdictions?**~~ **✅ OI-04-PILOT RESOLVED (Rathish, 2026-08-20; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decision 1).** Phase-1 pilot: **India** — Aadhaar offline paperless KYC; FR-070 adapter class (c); first and only enrolment adapter at Gate 2. Phase-2: EU — eIDAS 2.0 wallets; first targets France and the Nordic countries. Phase-3: USA — deferred; fragmented state-by-state mDL patchwork; low activation; optional phone-home privacy default conflicts with the non-correlation guarantee (FR-002, FR-069); requires own ADR, threat model and audit. Pilot sequence recorded in §4.40 (FR-121). Hard dependency: **CON-015** — legal-opinion Gate-2 line item; Phase-1 adapter not implementation-ready until legal opinion obtained and recorded. §2.4 updated to name the pilot. _(Decision applied at v2.3.0.)_ | ✓ Resolved 2026-08-20 | Sofia Marchetti |
| **OI-05** | **Does `NFR-002` (k ≥ 1,000 anonymity floor) make small-region governance impossible?** _(Resolved at Gate 1: confirmed as designed per ADR-004 §2.)_ | Gate 1 ✓ | Dr. Lena Kowalczyk |
| OI-06 | Funding sustainability beyond month 18, given `NFR-005` (citizen pays nothing) and `CON-006` (no fundraising instrument). | Gate 2 | Priya Raghunathan |
| OI-07 | Whether ISO 27001 / SOC 2 certification is required by any pilot jurisdiction or major partner, or whether the independent audit suffices. | Design | Rafael Duarte |
| OI-08 | Maturation period, dwell period, timelock durations, recall bars, grace windows and cooldown values — all currently "published" but unset. Each is a governance-sensitive constant. | Design | Tomás Ferreira |
| OI-09 | Definition of the "published minimum-substance standard" for a policy pillar (`FR-011`) that is machine-checkable without becoming editorial judgement — dangerously close to the gatekeeping we forbid. | Design | Tomás Ferreira |
| OI-10 | The published collusion bound referenced in `NFR-001` and the advantage bound ε — how many colluding parties must privacy survive, and what is the maximum acceptable advantage over random guessing? These values are required to make the §8 NFR-001/FR-002/FR-030 Gherkin normative. The provisional test value ε = 0.02 is used in §8 Gherkin blocks until OI-10 closes. **Escalated for Gate 1 re-affirmation confirmation: the approver should record agreement that the provisional value ε = 0.02 is acceptable for the test-design phase, with the final bound to close no later than Doc 03 baseline.** | Gate 1 re-affirmation (escalated) / Design | Dr. Lena Kowalczyk |
| OI-11 | Whether office-holders' *ordinary member* votes must be separable in practice from their office-capacity votes (`FR-048`) without leaking either. | Design | Erik Lindqvist |
| **OI-12** | **FR-073 vs ADR-003 issuer-plurality model.** ~~FR-073 mandates the government eID credential rail as the sole enrolment-nullifier-issuing class per region (aligning with OI-03 Phase-1 decision). ADR-003 describes an issuer-plurality model. The architect MUST confirm in Doc 03 whether these are reconcilable or whether ADR-003 requires amendment.~~ **Resolved by ADR-016 (amends ADR-003 for Phase 1; see Doc 03 §16 and docs/adr/ADR-016-enrolment-issuer-hierarchy.md). OI-12 is closed.** _(ISS-13.)_ | Design ✓ | Marcus Adeyemi |
| **OI-13** | ~~**FR-062 (public participation profile) vs NFR-001, NFR-024, TD-02 (anonymity-always for ordinary members).** FR-062 makes party membership and participation records publicly visible on a user profile. NFR-001 and NFR-024 prohibit exactly this. TD-02 records the asymmetry as "members anonymous always." The conflict is flagged inline in §4.19 and §6. Resolution required at Gate 1 re-affirmation by the human approver (Rathish).~~ **RESOLVED at v2.0.0 by the approver's three-tier privacy ruling (BR-017, 2026-08-10): supporters anonymous unconditionally; workers/candidates public by informed consent at role-taking. FR-062 superseded by §4.24 requirements; NFR-001/002/024 tier-scoped; TD-02 extended. Decision recorded in the Gate 1 re-entry packet.** | Gate 1 re-entry ✓ | Priya Raghunathan |
| **OI-14** | ~~**Proposal authorship (FR-090, ruling 1) vs Supporter anonymity (BR-017/FR-082):** ruling 1 makes proposal authorship public as the agenda-setting counterweight; ruling 3 makes Supporters anonymous with nothing attributable. A Supporter who authors a proposal cannot satisfy both. Candidate resolutions — (a) proposing requires Worker tier or above; (b) supporter authorship is attributed to a stable per-party pseudonym; (c) supporter proposals are unattributed — each sacrifices something different. DECISION for the approver at Gate 1; story not Ready until decided. See ⚠ banner at §4.25.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): Worker tier and above may author; authorship stays public; Supporters retain full voting rights and may self-declare Worker at any time to author. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-024, FR-090.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-15** | ~~**Expulsion of an anonymous Supporter is impossible without deanonymisation (FR-105 banner):** expulsion requires an addressable subject; a Supporter is anonymous by construction. Candidate resolutions — (a) scope expulsion to public-tier participants only, with FR-005 fraud-revocation as the sole mechanism for Supporters; (b) build a pseudonymous expulsion mechanism (expels a nullifier, no identity revealed). Each has different consequences for accountability and for privacy. DECISION for the approver at Gate 1; story not Ready until decided. See ⚠ banner at §4.34.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): expulsion scoped to public-tier participants only; FR-005 credential revocation handles supporter-tier fraudulent enrolment. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-105.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-16** | ~~**Append-only rule (FR-107) vs withdrawal-destroys-data (FR-085):** the vision states both 'nothing is ever deleted; history is append-only' and 'withdrawal before nomination closes destroys submitted disclosure data.' The proposed resolution — pre-nomination disclosure data is confidential-class, held off the governance record, and destroyable precisely because it never entered the append-only record — is NOT adopted silently. Candidate resolutions — (a) adopt the confidential-class carve-out; (b) weaken destruction to deactivation (data retained confidential, never published). DECISION for the approver at Gate 1. See ⚠ banner at §4.24.~~ **DECIDED at Gate 1 (Rathish, 2026-08-11): confidential-class carve-out adopted — pre-nomination disclosure data is confidential-class and never enters the governance record; destroyed on withdrawal; public records of completed actions remain append-only without exception. Recorded in GATE1-DECISION-2026-08-11.md §3; applied at v2.1.0 to FR-085, FR-107.** | Gate 1 ✓ | Priya Raghunathan |
| **OI-17** | **Governance constants minted by v2.0.0:** trust-anchor revocation and rotation governance tiers and maximum blocking windows (FR-112/FR-113); conduct-vote, removal, and expulsion affirmative quorum bars, supermajority thresholds, and cooldowns (FR-103..FR-105); founding-member count (FR-076); disclosure schedule per role (FR-084); dispute stage maximum timelines (FR-100) — all to be set in Design, analogous to OI-08. _(v2.1.0: + steward term length, election cadence and recall bar (FR-114); protocol-tier quorum, supermajority and timelock (FR-119).)_ | Design | Tomás Ferreira |
| **OI-18** | ~~**Entrenched-charter scope vs previously-absolute guarantees (FR-118/FR-119).** The approver's entrenched list has six rules; CON-001 (party-only boundary), BR-011/NFR-003 (receipt-freeness, coercion resistance), CON-002/CON-008/NFR-010 (data minimisation, no personal data on the record), CON-012 (no unaudited crypto) and CON-013 (non-violence) are not on it, and FR-119 makes everything off-list votable. Options: (a) extend the entrenched charter to include these named absolutes; (b) accept that they become amendable at the highest tier (a recorded weakening of guarantees this document currently states as absolute); (c) a two-tier core: the six charter rules unamendable, the named absolutes amendable only by a stricter super-process defined in Design. DECISION for the approver before the architect fixes the amendment boundary in Doc 03. See ⚠ banner at §4.39.~~ **DECIDED (Rathish, 2026-08-11): option (c) two-tier core, CON-001 promoted to Tier 1. Recorded in OI-18-DECISION-2026-08-11.md; applied at v2.2.0 to FR-118, FR-119, CON-001. Doc 03 v2 specifies the super-process numbers with rationale (OI-17 family).** | Gate 1 follow-up ✓ | Priya Raghunathan |

| **OI-19** | ~~**Invite-gating vs FR-020 admission ban — PENDING APPROVER DECISION (Rathish).**~~ **✅ OI-19 RESOLVED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).** Ruling: invite-gating is a spam-control RATE-LIMITER, never an admission condition; the two compose only if a non-invite path always remains open. FR-020 stays absolute: no person may be refused membership for lack of an invite. FR-125 finalised: invite-based onboarding is the fast default path; a non-invite fallback is ALWAYS available — slower and higher-friction is fine, closed is not; test obligation recorded — "a determined real person can always join without an invite." FR-020 unamended. See ✅ banner at §4.41. _(Decision applied at v2.4.0.)_ | ✓ Resolved 2026-08-20 | Grace Mbeki |
| **OI-20** | ~~**Single-rail pilot vs FR-004 attestor-plurality requirement — PENDING APPROVER DECISION (Rathish).**~~ **✅ OI-20 RESOLVED (Rathish, 2026-08-20; artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).** Ruling: the design stays plural; the pilot deploys one rail (Aadhaar); the gap is a dated Phase-1 limitation, never a Charter amendment. FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE level (Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency). Phase-1 deployment limitation recorded honestly: in Phase 1 a person without Aadhaar cannot enrol in the pilot region (TD-05/ADR-016); FR-004's 50% attestor-share cap is inoperative during the single-rail Phase-1 deployment. Exit condition: Phase 2 adds eIDAS 2.0 (FR-121). FR-129 minted (§4.43) — Charter-layer guard: making single-issuer operation permanent requires Charter-level re-entry, never a deployment default. FR-004 unamended. See ✅ banner on FR-004 in §4.1. _(Decision applied at v2.4.0.)_ | ✓ Resolved 2026-08-20 | Marcus Adeyemi |

**SC-13/SC-14 carry-forward status:** SC-13 (HIGH) and SC-14 (MEDIUM) from the SC-01 re-scan (artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md §4): resolved IN PRINCIPLE at requirements level by FR-112/FR-113 under ruling 4 (trust-anchor lifecycle governance is a member-vote action executed by code). The Doc 03 design change implementing FR-112/FR-113 is owed after Gate 1 and remains open against the architect until then.

**Fork-initiation carry-forward status:** Fork initiation calldata vulnerability is still open; `fork` flag is OFF above dev (Gate 1 decision §6). Unchanged by v2.0.0; FR-053 and the member-rights fork entry in FR-102 inherit this status.

---

## 14. Glossary

| Term | Meaning in this document |
|------|--------------------------|
| **Activation** | The automatic transition of a petition to an active party when the threshold is met and sustained (`FR-018`). |
| **Anonymity set** | The number of eligible actors among whom a published action is indistinguishable (`NFR-002`). |
| **Charter** | A party's founding document, containing the eight pillars and its amendment rules. |
| **Debate** | A structured public event in which a candidate addresses members on one of three topic areas (local conditions, local problems, work required), required three times per candidate before a major election (`FR-066`). |
| **Denominator** | The eligible-population figure of a region used to compute a threshold (`FR-009`). |
| **Dwell period** | The continuous time a petition must remain at or above threshold before activating. |
| **Entrenched clause** | A charter clause requiring the highest amendment tier, longest timelock and an age-qualified quorum (`FR-027`). |
| **Jurisdiction** | The single region identifier a party declares and within which its threshold is computed. |
| **Major election** | An election filling an office or position within a party — including by-elections (mid-term vacancies), elections following a successful recall (`FR-042`–`FR-045`), and scheduled end-of-term elections. Excludes internal non-office administrative votes (e.g., procedural motions, informal straw polls, and internal rule confirmations that do not place a named person in an office). The three-debate requirement (`FR-066`) and the post-debate candidacy-vote requirement (`FR-067`) apply to every major election; the scope of "major election" does not extend to sub-party administrative resolutions that do not fill a defined office. _(Added v1.1.1 — ISS-07.)_ |
| **Maturation period** | The delay between joining a party and acquiring governance rights (`FR-023`). |
| **Nullifier** | A deterministic, non-reversible token derived from a stable personal identifier; stored on the verifiable record instead of the identifier (`FR-069`). |
| **Office** | An elected position within a party, bound to exactly one region. |
| **Participation profile** | _(Superseded at v2.0.0 by **Participation record** below; the undifferentiated public-profile concept in `FR-062` is superseded by the three-tier model in §4.24.)_ |
| **Personhood credential** | Non-transferable proof that the holder is a unique, eligible human — not an identity. |
| **Petition** | The state a published party draft occupies while gathering endorsements. |
| **Pillar** | One of the eight mandatory policy areas: Finance, Society, Governance, Law, Education, Healthcare, Security, Regional Plans. |
| **Pluggable adapter** | An interchangeable credential-source integration conforming to a published interface (`FR-070`). Candidate types: eIDAS 2.0 wallet, ICAO Doc 9303 NFC chip, offline paper KYC (e.g. Aadhaar). |
| **Receipt-freeness** | The property that a voter cannot prove their choice to a third party (`NFR-003`). |
| **Recall** | Member-initiated removal of an office-holder mid-term (`FR-042`–`FR-045`). |
| **Scope** | A context in which a person may act at most once (a petition, a ballot, an election). |
| **Threshold** | The published percentage of a jurisdiction's denominator required for activation (`FR-016`). |
| **Verifiable record** | The tamper-evident public record any third party can independently re-compute (`FR-054`, `FR-055`). |
| **Append-only lifecycle** | The rule that no governance-path entity is ever hard-deleted or overwritten; state transitions are appended with timestamp and cause; history is never rewritten (`FR-107`, `NFR-028`). |
| **Committee** | A deliberative body formed by a party; its only permitted output is a proposal entering the ordinary lifecycle with no special status; holds zero decisional, eligibility, or vote-counting power (`FR-087`, `FR-088`). |
| **Conduct vote** | A member vote (up/down) on a public-tier participant using the same nullifier, privacy, and anti-capture mechanics as policy votes; individual votes private, aggregates public; not available against Supporter-tier participants by construction (`FR-103`). |
| **Constitution** | A party's public digital founding document; must contain all mandatory sections and the unaltered non-violence clause; completeness and clause integrity verified by code (`FR-076`, `FR-077`). |
| **Country selection** | The single country in which a verified citizen declares legal eligibility to participate in party politics; scopes the region tree and all residency-derived rights; governed by the residency-change discipline of FR-008 (`FR-074`). |
| **Decision trail** | The permanent, publicly reconstructable record comprising: the proposal(s), authorship, deliberation records, vote result, enacted consequence, implementation status, and measured outcome for every decision (`FR-092`). |
| **Disclosure schedule** | The platform-published list of information categories that may be demanded of a Worker, Candidate, or Office-holder at or after their declaration or nomination event; no unlisted category may be demanded after role-taking (`FR-084`). |
| **Expulsion** | Removal from party membership entirely; requires a distinct, strictly higher affirmative quorum and supermajority than removal from any role; does not alter historical records (`FR-105`). Contrast: **Removal**. |
| **Non-violence clause** | The platform's standard text that must appear verbatim in every party constitution; the single deliberate exception to political-content neutrality; presence and integrity verified by code, never by human judgment (`CON-013`, `FR-077`). |
| **Participation record** | The tier-scoped per-citizen record of role-relevant activity: for Worker/Candidate tiers, begins at the informed-consent event and includes work recorded, proposals authored, debates attended, candidacies held, and committee memberships — never ballot direction; for Supporter tier, no such record exists (`FR-083`). _Replaces the v1.1.x "Participation profile" concept (`FR-062` superseded)._ |
| **Removal** | Removal from a role, team, or committee only — not from party membership; requires an affirmative quorum of actively voting members at a published bar; silence does not remove (`FR-104`). Contrast: **Expulsion**. |
| **Scorecard** | A public, factual presentation of a party's manifesto commitment progress versus its own baselines with published methodology and evidence links; informs members and the public — does not rank parties or emit editorial conclusions (`FR-110`). |
| **Sortition** | Verifiable random selection of members to serve on a per-case appeal, review, or audit panel; no standing panel body exists; selection proof is publicly reproducible (`FR-101`). |
| **Steering committee** | A party committee capped at 30 members operating under the same deliberative-only constraints as all committees — no decisional power (`FR-087`). |
| **Tier** | One of three self-assigned, descriptive participation labels per party — Supporter, Worker, Candidate — that record contribution context but confer no voting weight (`FR-079`). |
| **Trust-anchor lifecycle** | The governance process for revoking or rotating an identity-issuer key; decided by member vote through the tiered process, with a published expedited emergency variant for revocation and a rotation-schedule constraint preventing enrolment blocking (`FR-112`, `FR-113`). |
| **Steward** | Elected platform-level coordinator; powers are enumerated and exhaustive (four listed powers only); holds no outcome power — cannot change who wins, who votes, or who is a member (`FR-114`, `FR-115`). |
| **Entrenched charter** | The **seven** platform rules that are unamendable by any vote at any tier and changeable only by fork: one human one vote; no transferable power; no privileged role over outcomes; the unconditional right to fork; no behavioural surveillance; anonymity by default with disclosure only by voluntary role-taking; and CON-001 (parties only, never state elections — promoted at v2.2.0 per OI-18 as a scope boundary rather than an implementation commitment). Amendment proposals targeting any of these seven rules are rejected by code at submission (`FR-118`). |
| **Named absolutes (Tier 2)** | The four groups of platform guarantees that are amendable only via the Doc 03 super-process — not by ordinary citizen vote: receipt-freeness & coercion resistance (`BR-011`, `NFR-003`); data minimisation (`CON-002`, `CON-008`, `NFR-010`); no bespoke unaudited cryptography (`CON-012`); non-violence clause (`CON-013`). Distinct from the Tier-1 entrenched charter (fork-only) and from Tier-3 ordinary rules (`FR-119`). |
| **Super-process** | The five-property amendment path required to change a Tier-2 named absolute. Must include at minimum: (1) a supermajority materially above the ordinary structural tier; (2) a timelock long enough that the fork right is genuinely exercisable before the change takes effect; (3) two consecutive affirmative votes separated by that window; (4) the growth-surge defence active throughout; (5) an independent audit of the proposed change published before the second vote. Specific numbers are set by the architect in Doc 03 with rationale (`FR-119`). |
| **Amendable protocol** | Every platform rule that is NOT in the Tier-1 entrenched charter or the Tier-2 named absolutes (Tier 3); amendable by platform-wide citizen vote at the highest governance tier with published quorum, supermajority, and timelock — and enacted by code with no ratification step (`FR-119`). |
| **Steward vacancy** | The tested state in which no steward holds office; the platform guarantee is that a complete steward vacancy causes zero citizen-facing degradation — enrolment, party creation, voting, proposal submission, and forking all proceed unchanged (`FR-117`). |
| **Counted action** | An action that contributes to an official count or eligibility outcome: contributing to a party's strength number, voting in a binding decision, or standing as a candidate. Requires proof of unique personhood (the FR-069 enrolment nullifier) per `FR-123`. Contrast: open-tier participation. |
| **mDL** | Mobile Driver's Licence; a state-issued digital driving licence in mobile-credential format (ISO 18013-5). Referenced in `FR-121` as the fragmented credential landscape that defers the USA to Phase 3 of the pilot sequence; an optional "phone-home" privacy default in current mDL specifications conflicts with the platform's non-correlation guarantee (`FR-002`, `FR-069`). |
| **Open tier** | The unverified participation tier available to any citizen without completing personhood verification; permits reading, following, watching, and other low-stakes actions but excludes all counted actions (`FR-122`). Contrast: counted action. |
| **Subpoena test** | The acceptance criterion for `FR-128`: if a court orders the platform to disclose who belongs to a party, the platform must be technically unable to comply — not merely legally entitled to decline. Encrypted-but-decryptable identity storage fails this test. The test is the architecturally enforced form of the non-correlation guarantee. |
| **Verified status** | The marker indicating that a participant has completed personhood verification (FR-069 nullifier enrolment). Verified status is PRIVATE TO THE HOLDER, expressed as eligibility (`FR-124` v2.3.1 per approver ruling, Rathish, 2026-08-20): **(a)** every verified participant — including Supporters — sees their own verified status and knows their counting/voting eligibility in their own authenticated session only; **(b)** the public sees only aggregate verified counts (e.g. 'N verified members'), never a per-participant badge for Supporters; **(c)** Worker/Candidate verified badge is visible on the public participation record — voluntary role-taking (FR-080) already crossed the disclosure line (`FR-083`); **(d)** MUST-NOT: no persistent public attribute may reveal that a specific Supporter is verified; absence-test obligation applies (UT-0700/UT-0701 style). No retroactive linkage is permitted (`FR-086`). Rationale: disclosure follows voluntary role-taking; verification is not role-taking (NFR-001, NFR-002, TD-02). |

---

## 15. Approvals (Gate 1 sign-off)

| Role | Name | Decision | Date | Notes |
|------|------|----------|------|-------|
| Product Owner (Accountable) | Priya Raghunathan | Approved v1.0.0; v1.1.0 submitted for re-affirmation | 2026-08-09 | v1.1.0 CR-v1.1.0 nine changes, Status: In Review |
| Project Manager (Responsible) | Ana-Maria Petrescu | Approved v1.0.0 at Gate 1 | 2026-08-09 | Re-affirmation packet to be assembled for v1.1.0 |
| **Human approver — Gate 1 re-affirmation** | Rathish | ~~**Pending re-affirmation at v1.1.0**~~ _(superseded)_ | 2026-08-11 | ~~Must confirm or revise OI-13 (profile vs anonymity)~~ Superseded by the v2.0.0 re-entry (Gate 1 approved 2026-08-11; OI-13 resolved at v2.0.0) |
| Human approver — Gate 1 (v2.0.0 re-entry) | Rathish | **Gate 1 APPROVED** | 2026-08-11 | Approved Doc 01 v2.0.0 + Doc 02 v2.0.1; conditional on steward requirements (Doc 02 v2.1.0) landing before Design; condition fulfilled by this version |
| Human approver — v2.1.0 condition | Rathish | Steward requirements landed this version; review loop pending | 2026-08-11 | ~~OI-18 open~~ **OI-18 RESOLVED at v2.2.0** (two-tier entrenched-charter scope decided; OI-18-DECISION-2026-08-11.md applied at v2.2.0). _(v2.3.1 ISS-02: stale 'OI-18 open' note corrected.)_ |

---

### Downstream
Design (Doc 03) MUST address **every** FR and NFR and **every** RISK in this document. Coverage is
verified in the RTM (Doc 08). Gate 1 was approved 2026-08-11 at Doc 01 v2.0.0 + Doc 02 v2.0.1, conditional on Doc 02 v2.1.0 (steward requirements) passing its business-mode review. Nothing is designed until the project-manager records that condition satisfied (GATE1-DECISION-2026-08-11.md §2). Once recorded, design proceeds per GATE1-DECISION-2026-08-11.md §5.
