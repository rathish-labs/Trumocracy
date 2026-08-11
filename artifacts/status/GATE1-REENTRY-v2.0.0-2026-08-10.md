# Gate 1 Re-entry Readiness Packet — v2.0.0 Vision

```
Packet type:    Gate 1 re-entry — the approver's expanded vision re-enters the SOP at the
                top per the CLAUDE.md handbook (bet size → SOP top; never bypasses a gate).
Approver:       Rathish (human approver — Gate 1)
Prepared by:    Ana-Maria Petrescu — project-manager (VEKTOR SOP)
Status:         PENDING — awaiting human approval; the project-manager cannot approve gates
Date:           2026-08-10
Source docs:
  Doc 01 PR-FAQ      docs/01-press-release-prfaq.md        v2.0.0   Approved (cycle-1 PASS)
  Doc 02 Requirements docs/02-requirements-srs.md           v2.0.1   Approved (cycle-2 PASS)
Prior gate:     Gate 1 APPROVED 2026-08-09 by Rathish against Doc 02 v1.0.0
                (artifacts/status/GATE1-DECISION-2026-08-09.md)
Supersedes:     CR-v1.1.0 Gate-1 re-affirmation packet
                (artifacts/status/GATE1-REAFFIRMATION-CR-v1.1.0-2026-08-10.md)
```

---

## §0 BLUF — what the approver must decide

**Decision A — approve the v2.0.0 direction at Gate 1.**
The approver must ratify Doc 01 v2.0.0 (PR-FAQ) and Doc 02 v2.0.1 (Requirements) as the
governing direction for the Trumocracy bet. Both documents have passed the review loop.
Approval unlocks the design phase (Doc 03 v2, Doc 05 v2, Doc 13 re-plan); nothing listed in
§5 may start before the gate per the VEKTOR SOP.

**Decision B — three open items that the requirements deliberately surface.**
Doc 02 records three unresolved tensions as ⚠ OI banners. Each has a product-owner-recommended
default; none is decided here. Until each is decided, the affected stories are not Ready per the
Definition of Ready, and the corresponding design elements cannot be specified.

| OI | Tension | Options | PO default |
|----|---------|---------|------------|
| **OI-14** | Ruling 1 makes proposal authorship public (FR-090). Ruling 3 makes Supporters unconditionally anonymous (FR-082). A Supporter who authors a proposal cannot satisfy both simultaneously (§4.25, banner after FR-090). | (a) Proposing requires Worker tier or above — Supporters may vote but not author; authorship is thus always public. (b) Supporter authorship attributed to a stable per-party pseudonym — anonymous to the public but pseudonymous within the party. (c) Supporter proposals are fully unattributed — the platform publishes but does not attribute. | **(a) Worker-tier-and-above authorship** |
| **OI-15** | Expulsion of an anonymous Supporter requires deanonymisation to identify *who* is being expelled — which violates BR-017/FR-082's unconditional anonymity guarantee (§13 OI-15 banner after FR-105). | (a) Expulsion is scoped to public tiers (Workers, Candidates); Supporters who commit provable fraud are handled via the existing FR-005 fraud-revocation mechanism (credential revoke, not party-level expulsion). (b) A pseudonymous (nullifier-level) expulsion mechanism is designed — the member is expelled without learning their identity, but the design complexity and linkability risks are significant. | **(a) Public-tiers-only expulsion; FR-005 fraud-revocation for Supporters** |
| **OI-16** | FR-107 imposes an append-only governance record. FR-085 grants a Worker the right to withdraw pre-nomination with their data destroyed. The two requirements are directly in conflict for the record class that captures pre-nomination Worker disclosures (§4.24 banner before FR-086). | (a) Confidential-class carve-out — pre-nomination Worker disclosure data is classified as a confidential class (Doc 02 §4.35 data classification) that never enters the governance record; it is therefore outside the append-only boundary and is destroyable on withdrawal. (b) Weaken destruction to deactivation — the data is retained in an inert, de-indexed state; the Worker is treated as having withdrawn but the record persists. | **(a) Confidential-class carve-out** |

The gate may be approved with OI-14/15/16 recorded as decisions (the approver chooses an
option for each), or the approver may defer any of the three. A deferred OI is carried into
the design phase with its affected stories marked Not Ready; the design phase cannot produce
final specifications for those features until the OI is closed.

---

## §1 Why this packet supersedes the re-affirmation

The v2.0.0 vision re-entry is a **new bet**, not a patch. It is directed by Rathish on
2026-08-10 and adds:

- 7 new business requirements (BR-014..BR-020), expanding the product from enrol-vote-petition
  to full party self-governance including committees, proposal lifecycle, candidate selection,
  manifesto commitments, financial transparency, COI governance, internal audit, dispute
  resolution, member rights, conduct votes, data classification, and a transparency dashboard.
- 40 new Must FRs (FR-074..FR-113), growing the Must set from 54 to 94.
- 2 new NFRs, 2 new CONs, 6 new RISKs, 3 new TDs.

Under CLAUDE.md: "a promoted refine bet is an ordinary bet — it re-enters the SOP at the top."
A 40-FR Must expansion constitutes a direction change of the size that the gate exists to
ratify. The original Gate 1 decision (2026-08-09 against Doc 02 v1.0.0) is therefore
**superseded** by this packet; so is the CR-v1.1.0 re-affirmation packet
(`artifacts/status/GATE1-REAFFIRMATION-CR-v1.1.0-2026-08-10.md`).

**Disposition of the prior re-affirmation's two blockers:**

| Blocker | Prior status | Disposition at v2.0.0 |
|---------|-------------|----------------------|
| SC-01 (CRITICAL) — Enrolment circuit trust anchor absent from enrol() public signal vector; single CIRCUIT_ENROL constant cannot serve three adapter classes; Sybil resistance defeasible | Blocking CR-v1.1.0 re-affirmation | **CLOSED 2026-08-10.** Addressed architecturally; confirmed by re-scan at `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`. The re-scan found two residual issues (SC-13, SC-14) resolved at requirements level by FR-112/FR-113 (ruling 4); Doc 03 design change owed post-Gate-1. |
| OI-13 — FR-062 public participation profile conflicts with NFR-001/002/024 and TD-02; participation_profile flag must stay OFF above dev | Blocking CR-v1.1.0 re-affirmation | **RESOLVED at v2.0.0.** Ruling 3 (BR-017): Supporters have no public profile unconditionally. FR-062 superseded by FR-082..FR-086 (§4.24). OI-13 marked closed in Doc 02 §13. |

---

## §2 What changed at v2.0.0

**The vision (one paragraph).** Trumocracy v1.x was a walking skeleton: enrol → petition → vote.
The v2.0.0 direction, directed by Rathish on 2026-08-10, expands the bet to the full
self-governance layer that democratic parties need but have never had in code: three participation
tiers with differential privacy by design; committees that organise but cannot decide; a proposal
lifecycle with a permanent decision trail; candidate selection on a published schedule with
member questions; a measurable manifesto as a living commitment set; financial transparency with
anomaly detection; COI disclosure; an internal audit committee; a dispute resolution pathway;
formal member rights and conduct-vote procedures; a three-level data classification standard;
a transparency dashboard; and a factual scorecard tracking every measurable commitment from
Doc 01. Two prior FRs are superseded and absorbed by stronger replacements; the financial
transparency requirement is raised to Must.

**ID mint — v2.0.0 additions to Doc 02:**

| Category | IDs minted | Count |
|----------|-----------|-------|
| Business Requirements | BR-014..BR-020 | 7 |
| Functional Requirements (new Must) | FR-074..FR-113 | 40 |
| Non-functional Requirements | NFR-027..NFR-028 | 2 |
| Constraints | CON-013..CON-014 | 2 |
| Risks (requirements-level) | RISK-25..RISK-30 | 6 |
| Technical Debt items | TD-08..TD-10 | 3 |
| Open Items | OI-14..OI-17 | 4 |

**Two supersessions (retained for traceability, excluded from active Must set):**

| Superseded | Reason | Superseded by |
|------------|--------|---------------|
| FR-046 — public manifesto and dated commitments (Should) | Absorbed and strengthened by the measurable manifesto requirements | FR-094 and FR-095 (§4.28) |
| FR-062 — public participation profile (Must, per CR-v1.1.0) | Universal public profile contradicted BR-017 (Supporter anonymity); tier-scoped model supersedes | FR-082..FR-086 (§4.24) |

**FR-050 raised Should → Must:** financial transparency (publish every inflow and outflow as
an itemised, independently verifiable record) is now a business requirement (BR-019); priority
raised from Should to Must (§4.1 note, §11 table).

**The four governance rulings and where each landed:**

| Ruling | Decision | Doc 01 section | Doc 02 section |
|--------|----------|----------------|----------------|
| Ruling 1 — Proposal authorship is public | The agenda-setting counterweight to an anonymous member body. FR-090: proposal authorship MUST be public; any member may submit a competing proposal. Creates OI-14 (see §0). | §B (Worker tier description), §E3 (committee FAQ) | §4.25, FR-090, OI-14 banner |
| Ruling 2 — Committees are advisory, never decisional | Committee outputs enter the ordinary proposal lifecycle with no special status or weight; the boundary is code-enforced. | §A.1 (No gatekeeper tenet), §E3 (committee FAQ) | §4.25, FR-087..FR-089 (BR-015) |
| Ruling 3 — Supporters are unconditionally anonymous | Nothing attributable to a Supporter appears anywhere; anonymity is not weakened by any other platform action. Resolves OI-13. | §B (Supporter tier description), §D (per-user tracking exclusion), §E1 (privacy FAQ) | §4.24, FR-082..FR-086 (BR-017); OI-13 closed |
| Ruling 4 — Trust-anchor lifecycle governance is a member-vote action executed by code | Revocation, emergency update, and rotation of trust anchors follow the same governance discipline as office terms — no operator path. Addresses SC-13/SC-14. | §A.1 (No gatekeeper tenet) | §4.38, FR-112..FR-113 (BR-015, BR-006, BR-012); SC-13/SC-14 resolved in principle |

---

## §3 Review-loop outcomes

| Document | Version reviewed | Mode | Cycle | Score | Severity | Verdict | Report path |
|----------|-----------------|------|-------|-------|----------|---------|-------------|
| Doc 01 PR-FAQ | 2.0.0 | business | 1 of 5 | 97% | 0C/0H/0M/2L | **PASS** | `artifacts/reviews/01-press-release-prfaq-v2.0.0-business-cycle1.md` |
| Doc 02 Requirements | 2.0.0 | business | 1 of 5 | 92% | 0C/2H/1M/2L | **FAIL** | `artifacts/reviews/02-requirements-srs-v2.0.0-business-cycle1.md` |
| Doc 02 Requirements | 2.0.1 | business | 2 of 5 | 98% | 0C/0H/0M/1L | **PASS** | `artifacts/reviews/02-requirements-srs-v2.0.1-business-cycle2.md` |

**Doc 02 cycle-1 HIGHs (fixed at v2.0.1):**
- ISS-01 (HIGH): §2.4 still read "three pilot jurisdictions at launch" — the one-pilot correction
  listed in the v2.0.0 change log was not applied to the body text. Fixed: §2.4 corrected.
- ISS-02 (HIGH): CON-007 and §11 stated launch 2027-03-01, which predates Gate 2 (2027-05-14)
  by approximately ten weeks — structurally impossible under the VEKTOR governance model. This
  was a carryover from the pre-S-01 schedule. Fixed: launch date corrected to 2027-06-01.
- ISS-03 (MEDIUM): §8 Gherkin block for superseded FR-062 carried no superseded/do-not-test
  marker; would have misled the tester seeding Doc 07. Fixed: marker appended to FR-062 Gherkin.

**Reviewer (both cycles):** technical-writer (neutral — not the document owner; product-owner
owns Doc 01 and Doc 02).

---

## §4 Carry-forward register

### Resolved by this vision

| Item | Prior status | Resolution |
|------|-------------|------------|
| OI-13 — FR-062 vs NFR-001/002/024/TD-02 | Open — blocked CR-v1.1.0 re-affirmation | **RESOLVED.** Ruling 3 / BR-017: Supporter tier has NO public profile unconditionally. FR-062 superseded by FR-082..FR-086 (§4.24). OI-13 marked closed in Doc 02 §13. Workers and Candidates carry a public participation record by explicit informed consent on role-taking. |
| SC-01 (CRITICAL) — trust anchor absent from enrol() signal vector | Blocking — CRv1.1.0 re-affirmation | **CLOSED 2026-08-10.** Confirmed by re-scan `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`. |
| SC-13 (HIGH) — no trust-anchor revocation/emergency-update path | Raised by SC-01 re-scan | **Resolved IN PRINCIPLE** at requirements level. FR-112/FR-113 under ruling 4 specify that trust-anchor lifecycle events are member-vote actions executed by code. Doc 03 design change implementing FR-112/FR-113 is owed post-Gate-1 against the architect; not yet closed at design level. |
| SC-14 (MEDIUM) — unspecified governance tier for trust-anchor rotation | Raised by SC-01 re-scan | **Resolved IN PRINCIPLE** at requirements level (same as SC-13 above, FR-112/FR-113, ruling 4). Doc 03 design change owed post-Gate-1. |
| SC-02 (HIGH) — FR-062 public profile + identityCommitment linkage creates a political dossier oracle; NFR-002 conflict | Routed to product-owner | **Mitigated at requirements level.** SC-02 attacked the universal FR-062 profile that applied to every user. The v2.0.0 three-tier model means Supporters have NO profile at all (FR-082); the attack surface does not exist for the anonymous majority. The residual public-tier record (Workers and Candidates) is established by explicit informed consent at role-taking (FR-083..FR-084). This is the requirements-level position; a full security re-scan of the tier model is owed at the next design pass. |
| SC-03 (HIGH) — participation records across proposals expose voter-set membership; harassment targeting; NFR-002/NFR-024 conflict | Routed to product-owner/architect | **Mitigated at requirements level.** Same structural mitigant as SC-02: the universal profile that enabled cross-proposal linkage is superseded; Supporter actions appear only as "one eligible person in this region acted." Re-scan owed at next design pass. |
| SC-04 (HIGH) — GOV_EID issuers can compute enrolment nullifiers from their own records, reconstructing political activity history | Routed to architect | **Partially mitigated at requirements level.** The history reconstruction attack requires a profile to link against. Supporters have no profile (FR-082), so the reconstruction has no destination for the anonymous majority. Workers/Candidates carry a public record by consent — for them the issuer-nullifier linkage risk remains; this is an architectural concern for the Doc 03 design pass. Re-scan owed. |

### Still open — unchanged from CR-v1.1.0 re-affirmation packet

| Item | Status | Owner | Note |
|------|--------|-------|------|
| SC-05 — no rate limit on recovery re-initiation after ABORTED state | **OPEN** | Architect | Unchanged — v2.0.0 adds no recovery-flow requirements. Must be addressed in Doc 03 v2 specification before Change 7 (FR-071/FR-072) is coded. |
| Fork initiation (critical open defect) — 10% threshold and 30-day cooling-off period are currently decorative because the fork initiates from calldata | **OPEN** | Engineer (post Gate 1) | `fork` flag is OFF in every environment above dev. Must remain OFF until fixed. Gate 1 disposition: deferred — remains an open critical (see `GATE1-DECISION-2026-08-09.md §6`). |
| OI-01 — activation threshold percentage | **OPEN** | Priya Raghunathan (PO) | Hard deadline: must close before the first petition opens above dev. Method decided at Gate 1 (2026-08-09). |
| OI-04 — pilot jurisdiction + eID rail | **OPEN** | Priya Raghunathan (PO) | Must close before enrolment requirement is implemented. Lever L2 (one pilot) accepted. |
| OI-06, OI-07, OI-10, OI-11 | **OPEN** | Various (as recorded in Doc 02 §13) | Unchanged from v1.1.x. |
| OI-08 / OI-17 — governance constants (quorums, timelocks, thresholds) | **OPEN — Design** | Design phase — OI-17 owner Tomás Ferreira; closed by the architect in Doc 03 | OI-17 explicitly defers these constants to the Design phase. No number may be invented here. |
| SC-13/SC-14 carry-forward — Doc 03 design change for FR-112/FR-113 | **OPEN — Design** | Architect | Requirements-level resolution confirmed (FR-112/FR-113, ruling 4). Design implementation owed post-Gate-1. |
| SC-02/SC-03/SC-04 residual — security re-scan of three-tier model | **OPEN — Design** | Reviewer-QA (next design pass) | Requirements-level position stated above. Full security re-scan owed after Doc 03 v2 is produced. |

---

## §5 What follows Gate 1 approval

None of the following may start before Gate 1 is approved, per the VEKTOR SOP.

| Step | Role | Deliverable | Dependencies |
|------|------|-------------|-------------|
| 1 | product-owner | Doc 05 Backlog v2 — add epics, features, stories for all 40 new Must FRs (FR-074..FR-113); seed from OI-14/15/16 decisions | Gate 1 approval; OI-14/15/16 decisions (affected stories not Ready until decided) |
| 2 | project-manager | Doc 13 Project Plan re-plan — re-estimate schedule and appetite for v2.0.0 scope per CON-007 flag; the existing envelope (~USD 4.13M, Gate 2 2027-05-14) applies but v2 scope has not been re-estimated | Gate 1 approval |
| 3 | architect | Doc 03 Architecture v2 — address SC-13/SC-14 (FR-112/FR-113 design), OI-17 governance constants, updated FR coverage for all 40 new Must FRs, SC-04 nullifier-linkage architectural treatment, SC-05 rate-limit specification | Gate 1 approval; OI-14/15/16 decisions for affected design elements |
| 4 | tester | Docs 07/08 catch-up — new TCs for FR-074..FR-113, RTM rows for new Must FRs; current RTM (v1.1.2) covers v1.1.x only; 64 open Must rows pre-date v2.0.0 | Doc 03 v2 available (Architecture must precede test case design) |

---

## §6 Go/no-go recommendation

**The project-manager recommends the approver may approve Gate 1 direction** for the v2.0.0
vision as expressed in Doc 01 v2.0.0 and Doc 02 v2.0.1. Both documents have passed the
review loop. The ID mint is confirmed. The active Must set (94 FRs) and the gate-blocking
items from the prior re-affirmation (SC-01, OI-13) are resolved. No test suite was touched
this session; the suite remains green (contracts 95, protocol 82, sdk 124, indexer 16, web 16,
exit 0 — verified by the orchestrating session, 2026-08-10). No product code was modified.

**On OI-14/15/16:** the product-owner has recorded a preferred option for each. The
project-manager recommends the approver decide all three at this gate to maximise the
surface available to the architect in Doc 03 v2. Deferring any OI is permitted; the affected
stories will be marked Not Ready and the corresponding design elements will carry a placeholder
pending the decision.

**The gate is the approver's alone.**

The packet records whichever of the following occurs:

- **(A) Approve direction + decide OI-14/15/16** — full unlock; design phase starts immediately
  on all 94 Must FRs.
- **(B) Approve direction + defer one or more OIs** — partial unlock; affected stories remain
  Not Ready; design phase starts on the unaffected FRs.
- **(C) Defer the entire gate** — no phase advance; open items remain as listed.

_Prepared by: Ana-Maria Petrescu, project-manager. 2026-08-10._
_This packet is sourced from verified artifacts only. No figure is invented._
