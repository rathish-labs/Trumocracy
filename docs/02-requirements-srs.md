# Requirements Specification (BRD + SRS) — Trumocracy

```
Document ID:   SRS-TRUMOCRACY
Version:       1.1.0
Status:        In Review
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Product, Engineering, Design, QA
Source:        PR-TRUMOCRACY (docs/01-press-release-prfaq.md)
Last updated:  2026-08-09
Change:        v1.1.0 — Nine-requirement change request (CR-v1.1.0) directed by Rathish
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
non-functional requirements of **Trumocracy** — a platform that lets verified citizens create,
incubate, join, govern and hold to account political parties without gatekeepers, party elites or a
privileged platform operator.

### 1.2 Scope

**In scope.** Verified personhood and regional-residency enrolment; party drafting across eight
mandatory policy pillars; a petition lifecycle with a population-proportional activation threshold;
open, equal membership; member proposals and tiered charter amendment with timelocks; anonymous,
receipt-free voting; region-and-office-scoped candidate nomination and internal party elections;
mid-term recall; public manifestos and immutable version history; public verifiability and audit;
moderation-by-code boundaries; account recovery; and platform-sponsored, zero-cost citizen actions.

**Explicitly not in scope.** Conducting, certifying, tabulating or replacing any binding **state**
election or referendum (`CON-001`); any transferable token or platform fundraising instrument
(`CON-006`); vote delegation, proxy or liquid democracy; cross-jurisdiction/federated parties;
social features (feeds, messaging, forums); staff-operated moderation of political speech; and
integration with an official electoral roll as a system of record. See Doc 01 §D.

### 1.3 Definitions, acronyms, abbreviations
See §14 Glossary.

### 1.4 References
- `docs/01-press-release-prfaq.md` — PR-FAQ (PR-TRUMOCRACY v1.0.0).
- `docs/05-product-backlog.md` — Backlog (BKLG-TRUMOCRACY v1.1.0).
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

### 2.3 User classes & characteristics

| Class | Description | Expertise | Frequency | Privacy posture |
|-------|-------------|-----------|-----------|-----------------|
| **Citizen (unenrolled)** | Adult resident of a pilot jurisdiction, not yet verified | Low; non-technical | Once (enrolment) | Anonymous |
| **Verified Citizen** | Holds a personhood credential + residency scope | Low | Occasional | Anonymous |
| **Drafter** | Authors a party charter and its eight pillars | Low–medium; motivated | Bursty | Pseudonymous until they choose otherwise |
| **Endorser** | Backs a petition in their own jurisdiction | Low | Rare | Anonymous |
| **Member** | Belongs to an active party; proposes and votes | Low | Weekly–monthly | **Anonymous — never disclosed** |
| **Candidate** | Stands for a specific region+office | Medium | Seasonal | **Publicly identified by explicit informed consent** |
| **Office-holder** | Elected representative of a region+office | Medium | Ongoing | Publicly identified; governance votes attributable |
| **Independent Auditor / Journalist / Researcher** | Runs the verifier, re-computes tallies | High | Ad hoc | External; no account required |
| **Trumocracy Operator (sre)** | Runs infrastructure | High | Continuous | **Holds no governance power by design** |

### 2.4 Operating environment
Mobile web (evergreen mobile browsers) and a lightweight Android application; device floor **2 GB
RAM, Android 9**; network floor **2G-class (64 kbit/s), intermittent**; eight launch languages
including at least one right-to-left script; three pilot jurisdictions at launch.

### 2.5 Design & implementation constraints
See §9 (`CON-001` … `CON-012`).

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

---

## 3. Business Requirements (BR)

| ID | Requirement | Priority | Success measure | Owner | Source |
|----|-------------|----------|-----------------|-------|--------|
| BR-001 | Any verified citizen MUST be able to originate a complete party programme covering all eight mandatory pillars without permission from any incumbent, elite or platform employee. | Must | ≥ 50 fully-pillared petitions drafted in month 1; 0 drafts requiring any human approval to publish | Tomás Ferreira | PR-FAQ §B, Obj. 1 |
| BR-002 | A proposed party MUST gain full party status only by demonstrated support from a defined percentage of the eligible population of its declared jurisdiction, computed and applied by code. | Must | ≥ 12 parties activated in 12 months; 100% of activations traceable to a reproducible threshold computation | Tomás Ferreira | PR-FAQ §B, Obj. 2 |
| BR-003 | Any verified citizen MUST be able to join any active party directly, with standing and voting rights identical to every other member. | Must | 0 joins requiring approval; 0 members holding >1 vote; ≥ 1 party where the founding drafter is outvoted by month 12 | Grace Mbeki | PR-FAQ §B, Obj. 3 |
| BR-004 | Candidate nomination and voting MUST be scoped to the geographic region and office where the person actually resides. | Must | 100% of nominations and internal-election ballots scope-checked; 0 out-of-region votes counted | Aisha Nkemdirim | PR-FAQ §B, Obj. 4 |
| BR-005 | Manifestos, commitments and office-holders' governance votes MUST be publicly verifiable, and members MUST be able to remove a non-performing representative mid-term. | Must | 100% of closed ballots independently reproducible; ≥ 1 recall reaching a vote per 20 offices per year | Erik Lindqvist | PR-FAQ §B, Obj. 5 |
| BR-006 | Every participant MUST be a real, unique human eligible in a specific region, such that duplicate or synthetic accounts cannot profitably influence any count. | Must | Audited duplicate/synthetic-person rate ≤ 0.1% of credentials | Marcus Adeyemi | PR-FAQ §E2 |
| BR-007 | The platform MUST be usable by a non-technical citizen on a low-end phone at zero monetary cost and with no custodial or cryptographic concepts exposed in primary flows. | Must | ≥ 80% unaided enrol→endorse completion in ≤ 10 min; SUS ≥ 75; USD 0.00 charged to citizens; median platform cost < USD 0.01/action | Hiroshi Tanaka | PR-FAQ §B, §C |
| BR-008 | Governance logic — membership rights, thresholds, quorums, timelocks, office assignment and recall — MUST execute automatically in code, with no human discretion available to any actor including Trumocracy. | Must | 0 privileged override paths present at security audit; 100% of state transitions attributable to a published rule | Tomás Ferreira | PR-FAQ §A.1 |
| BR-009 | Proving personhood and residency MUST NOT expose a member's real-world identity or make them targetable; candidates for office publicly disclose identity by explicit choice. | Must | 0 confirmed deanonymisations of an ordinary member; 100% of candidate disclosures preceded by recorded informed consent | Dr. Lena Kowalczyk | PR-FAQ §A.2, §E3 |
| BR-010 | Wealth MUST NOT be convertible into governance influence: no transferable voting instrument, no token-weighted vote, no purchasable membership, no vote-inflating fake members. | Must | 0 transferable governance instruments in the system; 0 governance outcomes correlated with contribution volume at audit | Erik Lindqvist | PR-FAQ §A.3, §E3 |
| BR-011 | Voting MUST be receipt-free and coercion-resistant: a voter MUST be unable to prove to a third party how they voted, and MUST be able to invisibly override a coerced vote. | Must | ≥ 95% of reported coercion cases successfully overridden; 0 externally detectable overrides; adversarial audit finds no receipt construction | Aisha Nkemdirim | PR-FAQ §A.4, §E3 |
| BR-012 | The platform MUST resist governance attacks — instantaneous voting-power acquisition and mob capture of an existing party's founding charter by a sudden membership flood. | Must | 0 successful takeovers; simulated flash-flood and flood-capture attacks fail in red-team exercise before Gate 2 | Rafael Duarte | PR-FAQ §E2 |
| BR-013 | Every candidate seeking election to a party office MUST complete a structured, member-visible debate process before their name appears on an election ballot; candidacy MUST be determined by a member vote following those debates, and incumbency MUST NOT confer any automatic right to candidacy or renomination. | Must | 100% of major-election ballots preceded by three completed debates per candidate; 0 automatic renominations detected at launch audit | Aisha Nkemdirim | CR-v1.1.0; GATE1-DECISION-2026-08-09.md (Change 4) |

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
| FR-003 | MUST NOT persist, transmit onward, or make retrievable any identity document image, document number, biometric template, date of birth, or residential address after an enrolment check completes; only a non-identifying eligibility result may be retained. | BR-009 | Must | Dr. Lena Kowalczyk | I, A |
| FR-004 | Support at least two mutually independent identity-attestation paths per launch region, publish each attestor's share of credentials issued per region, and refuse further issuance from any attestor whose share would exceed 50% in that region. | BR-006, BR-012 | Must | Marcus Adeyemi | T, I |
| FR-005 | Revoke a personhood credential proven fraudulent, invalidate its future actions without altering the historical record, and provide a rejected or revoked applicant an appeal that requires no more personal data than the original check. | BR-006 | Should | Amara Diallo | T, D |
| FR-069 | Derive a deterministic nullifier from a stable personal identifier within the enrolment credential using a published derivation, such that the nullifier is computed without revealing the underlying identifier; store only the derived nullifier on the verifiable record; and MUST reject any enrolment attempt whose derived nullifier matches an existing record. The derivation MUST verify: (a) the credential was signed by a recognised issuer, (b) the credential has not expired, (c) the region attribute establishes the person's residency in the claimed region tree, (d) the nullifier was correctly derived. No name matching, biometric data storage, or administrative review is used for duplicate detection. _(Extends the enrolment circuit addressed in the C-03 security finding. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, BR-009 | Must | Marcus Adeyemi | T, A |
| FR-070 | Present the credential source as a pluggable adapter interface with no single implementation hardcoded. The platform MUST support at minimum the following three CANDIDATE adapter types (non-exhaustive; none is hardcoded as the only supported path; region-level adapter selection is a configuration decision; Doc 03 confirms final specifications): **(a) eIDAS 2.0 wallet adapters** — government-issued digital-identity wallets conforming to the eIDAS 2.0 EUDI wallet framework or any equivalent national digital-identity regulation. The adapter MUST supply to the FR-069 derivation: (i) a qualified electronic attestation of attributes bearing a valid qualified trust-anchor signature, verified against the issuing member-state's trust anchor published in the applicable national or supra-national trust list; (ii) the stable personal identifier designated by the issuing state (e.g. the natural-person identifier in the Personal Identification Data attestation); (iii) a residency attribute placing the person in the claimed region tree. The derivation operates on field (ii). **(b) ICAO Doc 9303 NFC chip adapters** — biometric passports and NFC-enabled identity cards conforming to ICAO Doc 9303. The adapter MUST supply to the FR-069 derivation: (i) the Document Security Object (SOD) verifiable against the issuing state's Document Signer Certificate obtained from the ICAO public key directory; (ii) the stable identifier field — MRZ DocumentNumber or chip-resident pseudonymous identifier as designated by the issuing state; (iii) an attested residency claim from a recognised attestor. The derivation operates on field (ii). **(c) Offline paper KYC adapters** — government-signed offline identity verification flows for jurisdictions where digital wallets are not yet available (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or any equivalent government-signed offline assertion scheme). The adapter MUST supply to the FR-069 derivation: (i) a digitally signed or verifier-attested assertion carrying a government-assigned stable identifier; (ii) a residency attribute established by the attestor; (iii) evidence of the attestor's authorisation to operate in the region. The derivation operates on the stable identifier in field (i); no biometric data is retained after the attestor check. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 6.)_ | BR-006, CON-005 | Must | Marcus Adeyemi | I, A |
| FR-073 | Designate, within each region, the government eID credential rail as the sole issuer class permitted to mint enrolment nullifiers; all other credential classes (liveness attestors, alternative identity providers) MUST be availability-only and MUST NOT create enrolment nullifiers; availability-only classes MAY attest liveness or authorise slow recovery as permitted by FR-071 and FR-072, but any such action MUST NOT grant membership or governance rights. _(Aligns with OI-03 Gate 1 disposition: government eID as sole Phase-1 uniqueness anchor per region. Relationship with ADR-003 issuer-plurality model requires architect review in Doc 03 — see §13 OI-12. Accepted exclusion per TD-05. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 8.)_ | BR-006, BR-012 | Must | Marcus Adeyemi | I, A |

> **⚠ v1.1.0 ADR-003 RELATIONSHIP NOTE (FR-073):** FR-073 mandates government eID as the sole enrolment-nullifier issuer per region (Phase 1, per OI-03). ADR-003 describes an issuer-plurality model. The architect MUST confirm in Doc 03 whether Phase-1 single-issuer-class policy is reconcilable with ADR-003 or requires an ADR amendment. This is recorded as OI-12.

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
| FR-020 | Admit any verified citizen to any active party on request, with no approval, sponsorship, interview, invitation, fee or veto available to any existing member, office-holder, drafter or platform actor. | BR-003, BR-008 | Must | Grace Mbeki | T, D |
| FR-021 | Grant every member of a party exactly one vote of identical weight in every party ballot, and MUST NOT expose any mechanism by which standing, weight, precedence or privilege can differ between members on grounds of seniority, office, tenure, contribution or any other attribute. | BR-003, BR-010 | Must | Grace Mbeki | T, I, A |
| FR-022 | Allow a member to leave a party at any time, taking immediate effect on their rights, with no exit approval, penalty or notice period. | BR-003 | Must | Grace Mbeki | T |
| FR-023 | Withhold governance rights (proposing, voting, nominating, endorsing a nomination, initiating or signing a recall) from a new member until a published maturation period has elapsed since joining; and rate-limit each person's join/leave transitions per party and in aggregate per period. | BR-012 | Must | Rafael Duarte | T, A |
| FR-064 | Enforce that a verified person holds active membership in at most one party at a time; joining a new party MUST automatically void membership in the current party; switching parties MUST reset the membership tenure clock to zero. This constraint MUST be enforced by a global membership-scope nullifier that cannot be bypassed by leaving and re-joining within the same session. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 2.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |
| FR-068 | Apply a maturation requirement of at least one month of continuous membership at the eligibility snapshot for any vote or governance action; MUST waive this requirement for all members of a party during that party's first three calendar months of active status; during any such waiver the growth-surge defence controls mandated by FR-023 and FR-028 MUST remain fully active — the waiver relaxes tenure only and MUST NOT relax anti-capture mechanisms. _(Growth-surge defence verified by UT-0220. Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 5.)_ | BR-003, BR-012 | Must | Rafael Duarte | T, A |

### 4.7 Proposals, charter amendment, tiers and timelocks

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-024 | Allow any matured member to submit a proposal, declaring its tier, with no pre-screening, moderation or approval by any member, office-holder or platform actor. | BR-003, BR-008 | Must | Tomás Ferreira | T, D |
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
| FR-046 | Publish, for every active party, a public, machine-readable manifesto and a set of dated commitments, each carrying a status (in progress / met / not met) and links to supporting evidence. | BR-005 | Should | Erik Lindqvist | T, D |
| FR-047 | Preserve every published charter, pillar and manifesto version immutably: an edit MUST create a new version that supersedes but never overwrites, every prior version MUST remain publicly retrievable, and a diff between any two versions MUST be viewable. | BR-005, BR-008 | Must | Erik Lindqvist | T, I |
| FR-048 | Attribute publicly to the office-holder every governance vote they cast in their capacity as office-holder, while continuing to keep their votes as an ordinary member anonymous. | BR-005, BR-009 | Should | Erik Lindqvist | T, A |

### 4.13 Treasury: transparency and anti-corruption

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-049 | Enforce in code a per-person cap on contributions to any one party within a rolling period, and reject a contribution that would exceed it. | BR-010 | Should | Erik Lindqvist | T |
| FR-050 | Publish every treasury inflow and outflow as an itemised, publicly readable, independently verifiable record. | BR-005, BR-010 | Should | Erik Lindqvist | T, D |
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

> **⚠ v1.1.0 OPEN CONTRADICTION — FR-062 vs NFR-001, NFR-024, TD-02:** Making party membership and participation publicly visible on a profile directly contradicts NFR-001 ("no actor MUST be able to determine which party a given person belongs to") and NFR-024 ("no feature MUST expose a member's activity pattern"). TD-02 records the existing asymmetry as "members anonymous always." Resolution is required at Gate 1 re-affirmation (CR-v1.1.0). The requirement is written as directed by the approver; the conflict is not silently reconciled. See OI-13.

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-062 | Expose on each verified-citizen profile the following participation record, visible to any actor: (a) the list of ballots and elections in which they participated, without revealing their ballot direction on any contested vote; (b) their current and historical party memberships; (c) the petitions they have endorsed; (d) the proposals they have authored; (e) the debates they have attended (per FR-066). Exception: votes cast by an elected representative in their official office capacity MUST be publicly attributed per FR-048. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ | BR-005, BR-009 | Must | Erik Lindqvist | T, I, A |
| FR-063 | MUST NOT disclose a member's ballot direction on any contested vote through any interface, export, log, inference or combination of public data; the prohibition applies to profile views, public records, and any derived dataset. Exception: the direction of a vote cast by an elected representative in their office capacity is public as required by FR-048. **Test obligation: UT-0700 and UT-0701 MUST verify the absence of any ballot-direction disclosure path.** _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 1.)_ | BR-009, BR-011 | Must | Dr. Lena Kowalczyk | T, I, A |

### 4.20 Mandatory pre-election debates

| ID | Requirement (the system MUST…) | Traces to | Priority | Owner | Verify by |
|----|-------------------------------|-----------|----------|-------|-----------|
| FR-066 | Schedule and require three debates per candidate before every major election; each debate MUST cover one of the following topic areas: (a) local conditions, (b) local problems, and (c) the work required for the office; debate content MUST be stored via a publicly verifiable external reference address recorded on the verifiable record; scheduling, attendance attestation, and the post-debate member vote on each candidate MUST be recorded on the verifiable record. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004 | Must | Aisha Nkemdirim | T, I, A |
| FR-067 | Determine candidacy from the post-debate member vote on each candidate's suitability; incumbency MUST NOT confer any automatic advancement to a ballot; no candidate MUST be renominated automatically without completing the full debate and post-debate vote process for the current election cycle. _(Source: CR-v1.1.0; GATE1-DECISION-2026-08-09.md, Change 4.)_ | BR-013, BR-004, BR-012 | Must | Aisha Nkemdirim | T, I |

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
| NFR-001 | Privacy | No actor — Trumocracy, an operator, an attestor, a party, an office-holder, or any colluding subset short of the published collusion bound — MUST be able to determine which party a given person belongs to, or how they voted, from any data the system holds, emits or logs. | 0 confirmed linkages under adversarial audit; independent privacy audit passes with 0 critical/high findings | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-002 | Privacy — anonymity set | Every published action MUST be indistinguishable among at least **k = 1,000** eligible actors in the same scope; where fewer than k eligible actors exist or have acted, the action MUST be withheld from publication or aggregated until k is reached, with the delay disclosed to the user. | k ≥ 1,000 for 100% of published actions | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-003 | Coercion resistance | Voting MUST be receipt-free: no computationally bounded adversary, even with the voter's full voluntary cooperation and device access after the fact, can distinguish the voter's actual choice from any other admissible choice; and re-voting MUST be indistinguishable from not re-voting. | Formal argument reviewed + independent adversarial audit finds no receipt construction | BR-011 | Must | Aisha Nkemdirim |
| NFR-004 | Sybil resistance | Duplicate or synthetic persons MUST NOT exceed 0.1% of issued credentials in any region, and no single attestor MUST hold > 50% of credentials in a region. | ≤ 0.1% duplicates (audited quarterly); attestor share ≤ 50% enforced, ≤ 40% targeted | BR-006, BR-012 | Must | Marcus Adeyemi |
| NFR-005 | Cost / Efficiency | Platform-borne cost of a median citizen governance action MUST be under **USD 0.01**, p99 under USD 0.05; the citizen MUST be charged **USD 0.00** in all cases. | median < USD 0.01; p99 < USD 0.05; citizen cost = 0 | BR-007 | Must | Hiroshi Tanaka |
| NFR-006 | Performance | On the reference device (2 GB RAM, Android 9) over a 64 kbit/s link: primary screen interactive ≤ 5 s p95; an action acknowledged ≤ 5 s p95 and finalised on the verifiable record ≤ 120 s p95; full enrol→endorse journey completable in ≤ 10 minutes. | as stated | BR-007 | Must | Hiroshi Tanaka |
| NFR-007 | Reliability / Availability | Citizen write path ≥ 99.5% monthly; public read/verification path ≥ 99.9% monthly; no single operator failure MUST block a citizen governance action for more than 60 minutes. | as stated | BR-007, BR-008 | Must | Chen Wei |
| NFR-008 | Scalability / Capacity | Sustain 50,000,000 enrolled persons, 10,000,000 eligible voters within a single ballot window, and a peak of 5,000 governance actions per second without violating NFR-006. | verified by load test before Gate 2 | BR-002 | Should | Chen Wei |
| NFR-009 | Security | Independent third-party security and cryptography audit completed before launch with **zero** critical or high findings open at Gate 2; no privileged administrative override present in any governance path. | 0 critical/high open | BR-008, BR-012 | Must | Rafael Duarte |
| NFR-010 | Privacy & Data protection | Data minimisation by construction: no identity document, biometric template, address, date of birth or other direct identifier at rest anywhere in the system; no personal data on any immutable public record. | 0 such fields present at data-inventory inspection | BR-009 | Must | Dr. Lena Kowalczyk |
| NFR-011 | Accessibility | All primary flows MUST conform to **WCAG 2.2 Level AA**, be fully operable by screen reader and keyboard/switch, and remain usable at 200% text scaling. | 0 Level A/AA failures at Gate 2 | BR-007 | Must | Nadia Hassan |
| NFR-012 | Portability / device & bandwidth floor | The client MUST function on 2 GB RAM / Android 9 and equivalent mobile browsers, install in ≤ 15 MB, and complete every primary flow at 64 kbit/s with intermittent connectivity, including offline draft composition with deferred submission. | 100% of primary flows pass on the reference device profile | BR-007 | Must | Nadia Hassan |
| NFR-013 | Localization / i18n | At least 8 launch languages including at least one right-to-left script; no primary flow may present untranslated strings; date, number and name formats localised. | 100% primary-flow string coverage in all 8 locales | BR-007 | Must | Nadia Hassan |
| NFR-014 | Censorship resistance | A citizen MUST be able to reach and use the platform when the primary domain or application distribution channel is blocked, and no single operator, host, domain or app store MUST be able to prevent governance actions network-wide. | ≥ 2 independent access paths verified in a blocking simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-015 | Compliance / Legal / Regulatory | The system MUST satisfy erasure and rectification rights **by holding no personal data** rather than by deleting from an immutable record; where a user requests erasure, the system MUST demonstrate that no personal data exists to erase and MUST provide credential deactivation instead. The residual conflict between immutability and erasure MUST be documented, legally reviewed per jurisdiction, and disclosed to users before enrolment. | Legal sign-off per pilot jurisdiction before launch; disclosure present in enrolment flow | BR-009 | Must | Sofia Marchetti |
| NFR-016 | Key recovery | ≥ 99% of legitimate recovery attempts MUST succeed within 14 days; recovery MUST NOT be usable to silently impersonate (notification + cancellation window mandatory); ≤ 0.01% of recoveries may be fraudulent. | as stated | BR-007 | Must | Amara Diallo |
| NFR-017 | Upgradeability | Any change to platform-wide governance rules, thresholds or bounds MUST itself pass a tiered-threshold process with a timelock at least as long as the highest party tier, and MUST NOT be enactable unilaterally by Trumocracy, a funder or an operator. | 0 unilateral rule-change paths at audit | BR-008 | Must | Rafael Duarte |
| NFR-018 | Exit rights | Any party MUST be able to export its complete public history in an open, documented format sufficient to reconstitute it on an independent deployment; any member MUST be able to leave and deactivate their credential at any time. | export verified to reconstitute on an independent deployment before Gate 2 | BR-003, BR-008 | Should | Erik Lindqvist |
| NFR-019 | Observability | Governance health metrics (activation counts, turnout, quorum near-misses, recall rates, attestor concentration, duplicate rate, sponsorship exhaustion, anonymity-set delays) MUST be published publicly, and MUST NOT expose any individual's activity. | dashboard live at launch; 0 individually identifying fields | BR-005 | Should | Yuki Sato |
| NFR-020 | Operability (deploy / rollback) | Any release MUST be reversible within 15 minutes; feature flags MUST be kill-switchable independently; a flag governing an open ballot's rules MUST NOT be changeable while that ballot is open. | rollback < 15 min proven before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-021 | Maintainability / openness | 100% of governance-critical logic MUST be published under an OSI-approved licence with reproducible builds, so a third party can verify that the running system corresponds to the published source. | build reproducibility verified by ≥ 1 independent party | BR-008 | Must | Rafael Duarte |
| NFR-022 | Usability | ≥ 80% of first-time, non-technical users MUST complete enrol→endorse unaided within 10 minutes; System Usability Scale ≥ 75; support-contact rate ≤ 5% of enrolments. | as stated, measured on ≥ 200 users per launch locale | BR-007 | Must | Grace Mbeki |
| NFR-023 | Content / UX writing & notifications | Primary flows MUST be written at or below a grade-8 reading level and MUST NOT contain the terms wallet, seed phrase, private key, gas, token, mint, chain, block, hash or equivalent jargon; error messages MUST state cause and next action; notifications MUST NOT reveal party membership or governance activity. | 0 jargon occurrences in primary flows; readability verified per locale | BR-007, BR-009 | Must | Nadia Hassan |
| NFR-024 | Safety / anti-harassment | No feature MUST expose a member's identity, contact details, location precision below their declared region, or activity pattern to another member; recall and nomination flows MUST NOT enable targeted harassment of an individual member. | 0 identity-exposing surfaces at inspection; harassment-rate metric published | BR-009 | Must | Daniel Okonkwo |
| NFR-025 | Liveness / operator independence | No single operator, sequencer, host or ordering service MUST be able to censor or indefinitely delay an individual citizen's governance action; a delayed action MUST be includable through an alternative path within 60 minutes. | verified in an operator-censorship simulation before Gate 2 | BR-008 | Must | Chen Wei |
| NFR-026 | Compatibility | Supported: evergreen mobile browsers ≤ 24 months old and Android 9+. Unsupported combinations MUST fail with a clear, actionable message rather than a broken screen. | 100% of the supported matrix passes primary flows | BR-007 | Should | Nadia Hassan |

> **⚠ v1.1.0 OPEN CONTRADICTION — NFR-001 & NFR-024 vs FR-062 (Change 1, CR-v1.1.0):** FR-062 makes party membership and participation participation records publicly visible on a user profile. NFR-001 states that no actor may determine which party a given person belongs to. NFR-024 prohibits exposing a member's activity pattern. These are directly in conflict. The requirement FR-062 is written as directed by the human approver; the contradiction is not silently reconciled. Resolution required at Gate 1 re-affirmation. See OI-13.

### 6.1 Regulatory & standards applicability

| Standard / regulation | Applies? | Why / scope | Owner |
|-----------------------|----------|-------------|-------|
| GDPR / equivalent data-protection law | **Partial** | Applies to the minimal operational data we hold (notification channel, support records). Deliberately does **not** bite on the public record because that record contains no personal data (`NFR-010`). Erasure is satisfied by holding nothing (`NFR-015`) — this is a legal posture, not a solved problem; see `TD-03`. | Sofia Marchetti |
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
| Participation profile (per FR-062) | Public (per-person, as directed) | Verifiable public record | Permanent | Global | **⚠ See OI-13 — conflicts with NFR-001/NFR-024** |
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

> These seed the test cases in Doc 07. Every Must FR and every Must NFR below has at least one
> positive and, where the requirement is a guardrail, at least one adversarial scenario.

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
When an observer with full access to all published records analyses both actions
Then the observer cannot determine, better than chance, whether the two actions came from one person or two

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
Given a matured member
When they submit a proposal with a declared tier
Then it is accepted with no pre-screening, moderation or approval by any actor

# FR-025 — tiered quorum and supermajority
Given a charter-tier proposal requiring 40% quorum and 66% approval
When it closes with 39% quorum and 90% approval
Then it does not pass and the failing condition is published
When it closes with 45% quorum and 60% approval
Then it does not pass and the failing condition is published
When it closes with 45% quorum and 70% approval
Then it passes and enters its timelock

# FR-026 — timelock
Given a passed charter-tier proposal with a 14-day timelock
When 13 days have elapsed
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
When Trumocracy, an operator, an attestor and a party jointly analyse all data they hold
Then they cannot link any cast ballot to the person who cast it better than chance
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
Given an office-holder elected with 55% approval and a published recall bar of 60%
When a recall initiation reaches its signature threshold and the recall ballot closes at 58% approval
Then the recall fails and the office-holder remains
When a subsequent valid recall ballot closes at 62% approval
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

# FR-062 — public participation profile
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
```

```gherkin
# NFR-002 — anonymity set floor
Given a scope in which only 40 eligible actors exist
When a person acts in that scope
Then the action is withheld from publication or aggregated until at least 1,000 indistinguishable actors are present
And the user is told that publication is delayed and why

# NFR-005 — cost ceiling
Given a representative month of production traffic
When platform-borne cost per citizen governance action is measured
Then the median is below USD 0.01 and the 99th percentile is below USD 0.05
And the amount charged to citizens is USD 0.00 in 100% of cases

# NFR-011 — accessibility
Given each primary flow
When it is audited against WCAG 2.2 Level AA and operated by screen reader and keyboard/switch at 200% text scale
Then zero Level A or Level AA failures are found and every task is completable

# NFR-014 — censorship resistance
Given the primary domain and the app store listing are both blocked in a region
When a citizen attempts a governance action
Then at least one alternative access path succeeds

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

# NFR-025 — operator cannot censor an individual
Given an operator deliberately withholding one citizen's governance action
When 60 minutes have elapsed
Then the action has been included through an alternative path
```

---

## 9. Constraints (CON) & Assumptions

### 9.1 Constraints

| ID | Constraint | Type | Owner |
|----|-----------|------|-------|
| CON-001 | Trumocracy organises **political parties only**. It MUST NOT conduct, tabulate, certify, replace or hold itself out as conducting any binding state election, referendum or plebiscite. Every public surface MUST state this boundary. **This is absolute and not negotiable at any gate.** | Legal / product | Sofia Marchetti |
| CON-002 | Trumocracy MUST NOT take custody of personal identity documents, biometric templates, or residential addresses at any point in any flow. | Legal / privacy | Dr. Lena Kowalczyk |
| CON-003 | There MUST be no single trusted operator, administrative key, privileged role, pause switch or emergency override in any governance path — including for Trumocracy itself. | Architectural | Rafael Duarte |
| CON-004 | All governance-critical logic MUST be open source under an OSI-approved licence with reproducible builds. | Openness | Rafael Duarte |
| CON-005 | Electoral, party-registration, political-finance and association law differ per jurisdiction. Each launch jurisdiction MUST pass legal review before enablement, and features MUST be independently gateable per jurisdiction. | Legal | Sofia Marchetti |
| CON-006 | No transferable token, coin, security, membership sale, subscription or fundraising instrument for the platform may exist. Governance rights MUST NOT be represented by anything transferable. | Anti-corruption | Erik Lindqvist |
| CON-007 | Appetite: **USD 4.2M** and a team of **18** through launch. Gate 1 target 2026-08-22; Gate 2 target 2027-05-14 (revised per B-01/S-01 Gate 1 decisions); launch **2027-03-01**. Scope, not date, absorbs overrun. | Budget / schedule | Priya Raghunathan |
| CON-008 | The public record is immutable, which is irreconcilable with an unrestricted right of erasure. The constraint therefore is: **no personal data may ever be written to it.** | Legal / architectural | Sofia Marchetti |
| CON-009 | Threshold denominators depend on third-party population statistics whose accuracy, granularity and update cadence Trumocracy does not control and MUST NOT modify. | External dependency | Yuki Sato |
| CON-010 | Mobile application-store policies restrict political and election-related applications; distribution MUST NOT depend on a single store or domain. | Distribution | Hiroshi Tanaka |
| CON-011 | Device floor 2 GB RAM / Android 9; bandwidth floor 64 kbit/s intermittent. Any feature that cannot meet this floor MUST be cut, not degraded silently. | Product | Nadia Hassan |
| CON-012 | No bespoke, unaudited cryptographic construction may be used for any privacy, personhood or ballot property; every such property MUST rest on independently audited work. | Security | Rafael Duarte |

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
| TD-02 | **Accountability vs anonymity.** You cannot hold someone accountable for a vote you cannot attribute. | Deliberate asymmetry: ordinary members anonymous; candidates and office-holders publicly identified **by their own informed consent**, with their office-capacity governance votes attributable. | Office-holders lose privacy permanently for the term — irreversibly. Some good people will not stand because of it. Members' *ordinary* votes remain unaccountable, so a member cannot be praised or blamed for them. | Erik Lindqvist |
| TD-03 | **Immutability vs erasure rights.** An immutable record cannot honour "delete my data". | Hold no personal data anywhere, so erasure has nothing to bite on; offer credential deactivation instead of deletion; disclose the limitation *before* enrolment. | This is a legal posture, not a legal certainty. A regulator may disagree, and pseudonymous-but-immutable records may still be deemed personal data in some jurisdictions. Legal review per jurisdiction is a launch condition (`NFR-015`). | Sofia Marchetti |
| TD-04 | **Code-only governance vs no recourse.** No override means no fix when something goes genuinely wrong. | Accept it. No override button exists, including for demonstrable error. Recourse is limited to what the charter's own tiered amendment process and the right to leave/fork provide. | A party can make a decision that is stupid, self-harming or the result of a bug, and nobody can undo it outside the charter's own process. Every operational instinct will push against this; the tenets say hold. | Tomás Ferreira |
| TD-05 | **Sybil resistance vs inclusion.** Strong personhood proof excludes people without documents. | Require plural attestation paths including at least one non-document-based path per region, and publish exclusion rates as a launch metric. Phase 1 (per OI-03) uses government eID as the sole uniqueness anchor; FR-070 adds a pluggable adapter interface and FR-073 codifies the Phase-1 hierarchy. | Some eligible people will still be excluded — disproportionately the marginalised, which is precisely the population the product claims to serve. We measure it and publish it rather than claim it away. Open item `OI-03`. | Marcus Adeyemi |
| TD-06 | **Coercion resistance vs verifiability and usability.** Letting a voter verify their own vote gives them a receipt; hiding it costs confidence and adds friction. | Choose receipt-freeness. The voter verifies that the *tally* is correct, not that *their* ballot is in it. | Voters cannot personally confirm their vote was counted, which is a genuine loss of individual confidence, and re-voting adds UX complexity. Mitigated by universal verifiability (`FR-033`), not eliminated. | Aisha Nkemdirim |
| TD-07 | **Candidate feedback asymmetry.** Simple +1/−1 scoring treats upvotes and downvotes symmetrically; but casting a visible downvote against a local incumbent creates a retaliation risk that an upvote does not. | Accept deliberate asymmetry: upvote = +3, downvote = −1 (FR-065). Individual votes private; only aggregate tally public. An ADR (architect's, Doc 03) will document the full rationale and the equilibrium (net positive above ~25% of feedback casters). | Critics will note the scoring flatters incumbents by demanding more upvotes than downvotes to show a negative result; the asymmetry is the deliberate risk accepted to protect downvoters. | Aisha Nkemdirim |

> **⚠ v1.1.0 OPEN CONTRADICTION — TD-02 vs FR-062 (Change 1, CR-v1.1.0):** TD-02 records the existing asymmetry as "ordinary members anonymous always." FR-062 (Change 1) makes party membership and participation publicly visible on each member's profile. These are directly in conflict. The requirement is written as directed by the approver; TD-02 is not silently revised. Resolution required at Gate 1 re-affirmation. See OI-13.

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

---

## 11. Requirements prioritization & release plan (MoSCoW)

**Counts (v1.1.0).** 13 BR · 73 FR · 26 NFR · 12 CON · 19 RISK · 7 recorded trade-offs.
_(v1.0.0 baseline: 12 BR · 61 FR · 26 NFR · 12 CON · 16 RISK · 6 TDs. Added by CR-v1.1.0: 1 BR, 12 FR, 3 RISK, 1 TD.)_

| Priority | FR count | FR IDs |
|----------|----------|--------|
| **Must** | **54** | FR-001, 002, 003, 004, 006, 007, 008, 009, 010, 011, 014, 016, 018, 020, 021, 022, 023, 024, 025, 026, 027, 028, 030, 031, 032, 033, 035, 036, 037, 039, 040, 042, 043, 045, 047, 051, 054, 056, 058, 059, 060, 061, 062, 063, 064, 065, 066, 067, 068, 069, 070, 071, 072, 073 |
| **Should** | 16 | FR-005, 012, 013, 015, 017, 019, 029, 034, 038, 041, 044, 046, 048, 049, 050, 055 |
| **Could** | 3 | FR-052, 053, 057 |
| **Won't (this release)** | — | Vote delegation; state elections; cross-jurisdiction parties; social features; staff moderation of political speech; party dormancy lifecycle; treasury splitting on fork; personal blocklists (Doc 01 §D) |

NFR priorities: **Must** — NFR-001…007, 009…017, 020…025 (22). **Should** — NFR-008, 018, 019, 026 (4).

**On the size of the Must set.** The Must set grows from 42 to 54 with the nine changes in CR-v1.1.0. The 12 new Must FRs are a mix of walking-skeleton extensions (FR-066, FR-067, FR-069, FR-070, FR-071, FR-073) and guardrails (FR-062, FR-063, FR-064, FR-065, FR-068, FR-072). None of the new FRs is a Should or Could: the approver's direction sets them as Must. The two gates still govern direction and launch readiness respectively.

**Release shape.** One release at 2027-03-01, delivered on trunk behind flags, rolled out
1 → 10 → 50 → 100% in one pilot jurisdiction first, then the remaining two. Should items land inside
the same release window where they fit; Could items are explicitly post-launch.

---

## 12. Traceability

Every FR and NFR in this document traces **up** to at least one BR (see the `Traces to` column) and
will trace **down** to a `DES` (Doc 03), a `US` (Doc 05) and a `TC` (Doc 07). The RTM (Doc 08),
authored by the tester and verified by reviewer-qa, is the system of record for that chain. **A gap
in any Must row blocks Gate 2.** Backlog stories are seeded in `docs/05-product-backlog.md` and each
declares its `FR`/`NFR`; `DES` and `SCR` links are attached after Design and reconciled in the RTM.

**v1.1.0 additions (CR-v1.1.0):** BR-013 → FR-066, FR-067. FR-062, FR-063 → BR-005, BR-009. FR-064, FR-068 → BR-003, BR-012. FR-065 → BR-004, BR-005. FR-069, FR-070, FR-073 → BR-006 (FR-070 also CON-005; FR-073 also BR-012). FR-071, FR-072 → BR-006/007/009/012. All 12 new Must FRs have been seeded with at least one US in Doc 05 v1.1.0.

Requirements arising from production learnings will carry a `Source = REF-##` value in §3/§4
per the refine loop; none exist at v1.0.0 or v1.1.0 (all v1.1.0 requirements source from CR-v1.1.0).

---

## 13. Open issues / TBD

| ID | Open issue | Needed by | Owner |
|----|-----------|-----------|-------|
| **OI-01** | **What activation threshold percentage is right?** The whole product hinges on this number and we do not have it. Too high and no party ever activates (kill criterion 4); too low and the network fills with noise. It must also survive `RISK-12` denominator error. Proposal: a jurisdiction-specific range calibrated against month-3 enrolment, fixed publicly before any petition opens. **Requires a Gate-1 decision on the calibration method, not the number.** | Gate 1 | Tomás Ferreira |
| **OI-02** | **Is the Must set of 42 FRs accepted, or must a walking-skeleton capability be deferred?** See §11. Recall (FR-042/043/045) is the only coherent deferral candidate. Guardrails are not offered for deferral. _(Decided at Gate 1: Must set accepted in full; recall kept.)_ | Gate 1 ✓ | Priya Raghunathan |
| **OI-03** | **What exclusion rate from personhood enrolment is acceptable, and what is the non-document-based attestation path?** `TD-05` — the people most likely to fail a document check are the people the product exists to serve. Needs a target and a named alternative path per pilot jurisdiction. _(Decided at Gate 1: Phase 1 = government eID sole anchor, exclusion accepted and documented. Phase 3 = non-document path needs own ADR, threat model, and audit.)_ | Gate 1 ✓ | Marcus Adeyemi |
| **OI-04** | **Which three pilot jurisdictions?** Selection gates `CON-005`, `A-01`, `A-02`, `A-03` and the whole legal posture. No requirement below can be finally validated until they are named. _(Decided at Gate 1: one pilot; jurisdiction not yet named; eID rail as pluggable adapter. OPEN: name jurisdiction and eID rail before enrolment implemented.)_ | Gate 1 / enrolment | Sofia Marchetti |
| **OI-05** | **Does `NFR-002` (k ≥ 1,000 anonymity floor) make small-region governance impossible?** _(Resolved at Gate 1: confirmed as designed per ADR-004 §2.)_ | Gate 1 ✓ | Dr. Lena Kowalczyk |
| OI-06 | Funding sustainability beyond month 18, given `NFR-005` (citizen pays nothing) and `CON-006` (no fundraising instrument). | Gate 2 | Priya Raghunathan |
| OI-07 | Whether ISO 27001 / SOC 2 certification is required by any pilot jurisdiction or major partner, or whether the independent audit suffices. | Design | Rafael Duarte |
| OI-08 | Maturation period, dwell period, timelock durations, recall bars, grace windows and cooldown values — all currently "published" but unset. Each is a governance-sensitive constant. | Design | Tomás Ferreira |
| OI-09 | Definition of the "published minimum-substance standard" for a policy pillar (`FR-011`) that is machine-checkable without becoming editorial judgement — dangerously close to the gatekeeping we forbid. | Design | Tomás Ferreira |
| OI-10 | The published collusion bound referenced in `NFR-001` — how many colluding parties must privacy survive? | Design | Dr. Lena Kowalczyk |
| OI-11 | Whether office-holders' *ordinary member* votes must be separable in practice from their office-capacity votes (`FR-048`) without leaking either. | Design | Erik Lindqvist |
| **OI-12** | **FR-073 vs ADR-003 issuer-plurality model.** FR-073 mandates the government eID credential rail as the sole enrolment-nullifier-issuing class per region (aligning with OI-03 Phase-1 decision). ADR-003 describes an issuer-plurality model. The architect MUST confirm in Doc 03 whether these are reconcilable or whether ADR-003 requires amendment. This is flagged inline in §4.1. | Design | Marcus Adeyemi |
| **OI-13** | **FR-062 (public participation profile) vs NFR-001, NFR-024, TD-02 (anonymity-always for ordinary members).** FR-062 makes party membership and participation records publicly visible on a user profile. NFR-001 and NFR-024 prohibit exactly this. TD-02 records the asymmetry as "members anonymous always." The conflict is flagged inline in §4.19 and §6. Resolution required at Gate 1 re-affirmation by the human approver (Rathish). | Gate 1 re-affirmation | Priya Raghunathan |

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
| **Maturation period** | The delay between joining a party and acquiring governance rights (`FR-023`). |
| **Nullifier** | A deterministic, non-reversible token derived from a stable personal identifier; stored on the verifiable record instead of the identifier (`FR-069`). |
| **Office** | An elected position within a party, bound to exactly one region. |
| **Participation profile** | A public per-citizen record of elections participated in (without ballot direction), party memberships, petitions endorsed, proposals authored, and debates attended (`FR-062`). |
| **Personhood credential** | Non-transferable proof that the holder is a unique, eligible human — not an identity. |
| **Petition** | The state a published party draft occupies while gathering endorsements. |
| **Pillar** | One of the eight mandatory policy areas: Finance, Society, Governance, Law, Education, Healthcare, Security, Regional Plans. |
| **Pluggable adapter** | An interchangeable credential-source integration conforming to a published interface (`FR-070`). Candidate types: eIDAS 2.0 wallet, ICAO Doc 9303 NFC chip, offline paper KYC (e.g. Aadhaar). |
| **Receipt-freeness** | The property that a voter cannot prove their choice to a third party (`NFR-003`). |
| **Recall** | Member-initiated removal of an office-holder mid-term (`FR-042`–`FR-045`). |
| **Scope** | A context in which a person may act at most once (a petition, a ballot, an election). |
| **Threshold** | The published percentage of a jurisdiction's denominator required for activation (`FR-016`). |
| **Verifiable record** | The tamper-evident public record any third party can independently re-compute (`FR-054`, `FR-055`). |

---

## 15. Approvals (Gate 1 sign-off)

| Role | Name | Decision | Date | Notes |
|------|------|----------|------|-------|
| Product Owner (Accountable) | Priya Raghunathan | Approved v1.0.0; v1.1.0 submitted for re-affirmation | 2026-08-09 | v1.1.0 CR-v1.1.0 nine changes, Status: In Review |
| Project Manager (Responsible) | Ana-Maria Petrescu | Approved v1.0.0 at Gate 1 | 2026-08-09 | Re-affirmation packet to be assembled for v1.1.0 |
| **Human approver — Gate 1 re-affirmation** | Rathish | **Pending re-affirmation at v1.1.0** | _pending_ | Must confirm or revise OI-13 (profile vs anonymity) |

---

### Downstream
Design (Doc 03) MUST address **every** FR and NFR and **every** RISK in this document. Coverage is
verified in the RTM (Doc 08). Nothing is designed until Gate 1 re-affirmation clears for v1.1.0.
