# Gate 1 Re-affirmation Packet — CR-v1.1.0 (2026-08-10)

```
Packet type:   Gate 1 re-affirmation — required because the original Gate-1 approval
               (2026-08-09, by Rathish, against Doc 02 v1.0.0) was explicitly bound to
               v1.0.0. Doc 02 has since moved to v1.1.1 (nine-requirement change request
               CR-v1.1.0 directed by Rathish). Under VEKTOR SOP and the terms recorded
               in artifacts/status/GATE1-DECISION-2026-08-09.md §7, the Gate-1 approval
               must be re-affirmed at this version before any coding or implementation
               proceeds against the nine changed requirements.
Approver:      Rathish (human approver — the only person who may grant this gate)
Prepared by:   Ana-Maria Petrescu — project-manager (VEKTOR SOP role)
Status:        PENDING — awaiting human approver decision.
               The project-manager does not approve gates. This document is a readiness
               packet only; it stops here until the human decides.
Date:          2026-08-10
Source docs:   docs/02-requirements-srs.md v1.1.1
               docs/05-product-backlog.md v1.1.2
               docs/03-architecture-design-sdd.md v1.1.1
               docs/adr/ADR-015..ADR-018
               docs/07-test-cases-suites.md v1.1.1
               docs/08-traceability-matrix.md v1.1.2
               artifacts/reviews/SECURITY-SCAN-CR-v1.1.0-2026-08-10.md
```

---

## 0. BLUF — what the approver needs to know before reading further

Gate 1 re-affirmation is **PENDING** and **cannot be granted in this packet's current state.**
Two items block it:

- **SC-01 (CRITICAL):** The enrolment circuit's trust anchor is absent from the on-chain
  signal vector and issuer data model, and a single `CIRCUIT_ENROL` constant cannot serve
  three adapter classes. As the specification stands, Sybil resistance is defeasible. This
  is a design-spec defect; fixing it requires an architect rework session. It directly
  undermines FR-069, FR-070, FR-001, BR-006, and NFR-004.

- **OI-13 (open governance decision):** FR-062 (public participation profile) is in
  unresolvable conflict with NFR-001, NFR-002, NFR-024, and TD-02. The security scan
  (SC-02, SC-03, SC-04) makes the concrete deanonymisation consequence explicit. The
  approver must choose one of three options. Until that decision is recorded, DES-064 and
  the `participation_profile` feature flag must remain off above dev.

Everything else in this session's work is in order: five documents reviewed to PASS, all
IDs minted and traceable, OI-12 resolved, carry-forward items correctly governed.

---

## 1. Why re-affirmation is required

Gate 1 was approved on **2026-08-09** by **Rathish** against **Doc 02 v1.0.0**. The full
decision record is at `artifacts/status/GATE1-DECISION-2026-08-09.md`. That record (§7)
explicitly states:

> "Gate 1 approval is bound to v1.0.0. A nine-requirement change request will be driven
> in the next session; the project-manager must assemble a Gate-1 re-affirmation packet
> and present it to Rathish before work under the changed requirements proceeds."

The change request was driven in this session. The requirements document is now v1.1.1.
This packet is the required re-affirmation gate presentation.

---

## 2. What changed — the nine changes of CR-v1.1.0

All nine changes directed by Rathish. IDs minted across the following documents:

| Change | Summary | IDs minted | Owning doc |
|--------|---------|-----------|-----------|
| Change 1 | Public participation profile with attribution | BR-013; FR-062, FR-063; DES-064, DES-065, DES-086; SCR-21; FE-029; US-0071..US-0073 | Doc 02 §4.19–20; Doc 03 §5.3/DES list; Doc 05 §5/EP-09/FE-029 |
| Change 2 | Candidate / proposer feedback to their voters | FR-064; DES-066; ADR-015; FE-030; US-0074 | Doc 02 §4.21; Doc 03; ADR-015; Doc 05 |
| Change 3 | Proposal version history and diff view | FR-065; DES-067; FE-031; US-0075 | Doc 02 §4.22; Doc 03; Doc 05 |
| Change 4 | Party-switch waiting period | FR-066; DES-068; FE-032; US-0076 | Doc 02 §4.23; Doc 03; Doc 05 |
| Change 5 | Multi-jurisdiction campaign co-ordination | FR-067; DES-069 (partial); FE-033; US-0077 | Doc 02 §4.24; Doc 03; Doc 05 |
| Change 6 | Multi-adapter enrolment circuit (eIDAS/ICAO/Aadhaar) | FR-069, FR-070; DES-069, DES-070, DES-072; ADR-016, ADR-017; FE-034; US-0079..US-0081; SCR-22 | Doc 02 §4.25–26; Doc 03; ADR-016/017; Doc 05 |
| Change 7 | Nullifier-collision recovery flow | FR-071, FR-072; DES-071; ADR-018; RISK-22, RISK-23, RISK-24; FE-035; US-0082; SCR-23 | Doc 02 §4.27–28; Doc 03; ADR-018; Doc 05 |
| Change 8 | Governance glossary and definitions | FR-073; DES-073..DES-083 (15 DES elements closing prior RTM DES-gaps); FE-036; US-0083 | Doc 02 §4.29; Doc 03; Doc 05 |
| Change 9 | 15 tester-identified RTM DES-gap closures | DES-073..DES-086 (shared with Changes 6–8 numbering); additional: OI-12 resolution via ADR-016; OI-13 record | Doc 03 §5.3/DES list; Doc 08 |

**Consolidated ID mint for CR-v1.1.0:**

| Namespace | IDs minted | Count |
|-----------|-----------|-------|
| BR | BR-013 | 1 |
| FR | FR-062..FR-073 | 12 |
| NFR | (none new; existing NFR-001/002/024 in tension — see OI-13) | 0 |
| RISK | RISK-22, RISK-23, RISK-24 | 3 |
| TD | TD-07 | 1 |
| OI (minted) | OI-12 (resolved), OI-13 (open) | 2 |
| DES | DES-064..DES-086 | 23 |
| ADR | ADR-015, ADR-016, ADR-017, ADR-018 | 4 |
| EP | EP-09 | 1 |
| FE | FE-029..FE-036 | 8 |
| US | US-0071..US-0083 | 13 |
| SCR | SCR-21, SCR-22, SCR-23 | 3 |

---

## 3. Review-loop outcome — all five documents at PASS

Each document's owning role produced rework versions as required by the review loop. No
document required escalation (none reached cycle 5). All five documents now carry a passing
review report in `artifacts/reviews/`.

| Document | Final version | Score | Cycles used | Verdict | Review report |
|----------|--------------|-------|-------------|---------|---------------|
| Doc 02 Requirements (SRS) | v1.1.1 | 96% | 2 of 5 | **PASS** | `02-requirements-srs-v1.1.1-business-cycle2.md` |
| Doc 05 Backlog | v1.1.2 | 97% | 3 of 5 | **PASS** | `05-product-backlog-v1.1.2-business-cycle3.md` |
| Doc 03 SDD | v1.1.1 | 98% | 2 of 5 | **PASS** | `03-architecture-design-sdd-v1.1.1-technical-cycle2.md` |
| Doc 07 Test Cases | v1.1.1 | 97% | 2 of 5 | **PASS** | `07-test-cases-suites-v1.1.1-technical-cycle2.md` |
| Doc 08 RTM | v1.1.2 | 99% | 3 of 5 | **PASS** | `08-traceability-matrix-v1.1.2-technical-cycle3.md` |

**Reviewer note on SDD review vs security scan:** The document-review (completeness rubric)
and the independent security scan are two independent lenses. Doc 03 v1.1.1 passed its
completeness review at 98% (zero critical/high/medium). SC-01 is a security-property
defect found by attack modelling — not a completeness defect — and it was found AFTER
the completeness review passed. Both verdicts are honest and correct; they are not in
conflict. The completeness review says the document is internally consistent and well-formed.
The security scan says one of the design elements it specifies has a defeasible attack.
Both are true simultaneously.

Rework history: Doc 02 took product-owner rework from v1.1.0 → v1.1.1 (cycle 1 FAIL:
4H/5M/4L; cycle 2 PASS). Doc 05 took two reworks: v1.1.0 → v1.1.1 (cycle 1 FAIL) →
v1.1.2 (cycle 2 FAIL: 3M/3L) → cycle 3 PASS. Doc 08 took two reworks similarly: v1.1.0
(cycle 1 FAIL) → v1.1.1 (cycle 2 FAIL) → v1.1.2 (cycle 3 PASS).

---

## 4. Decisions the approver must make

### Decision A — OI-13: FR-062 (public profile) vs anonymity Must requirements

**What it is:** FR-062 requires a public participation profile for each citizen, showing
ballot participation (direction withheld), party memberships, endorsed petitions, authored
proposals, and attended debates. This directly conflicts with:
- NFR-001 (MUST: no personal data on chain)
- NFR-002 (MUST: published actions indistinguishable among k≥1,000 eligible actors)
- NFR-024 (MUST: no feature exposes a member's activity pattern to another member)
- TD-02 (design tradeoff: anonymity of members, publicity of candidates, by informed consent)

The conflict is not a drafting error. FR-062 is designed to publish individual activity
histories; NFR-001/002/024 are designed to prevent that. They cannot both apply to the
same profile surface.

**The security scan's concrete consequence (SC-02, SC-03, SC-04):**
- SC-02: FR-062 profile, combined with the on-chain identityCommitment index, creates a
  political dossier oracle. A government eID issuer who retains stable identifiers can
  compute the identityCommitment of any enrolled credential-holder and then read their
  complete political activity from the public profile — without compulsion and without
  Trumocracy's cooperation. NFR-002's k=1,000 anonymity floor is voided for every profiled
  person. This conflict with NFR-002 is not acknowledged in the current OI-13 record; it
  must be added regardless of which resolution option is chosen.
- SC-03: Publishing per-individual ballot participation lists makes NFR-002 inapplicable by
  definition for every profiled action. A clustering attack over multiple proposals identifies
  political blocs, enabling pre-vote social pressure and violating NFR-024 anti-harassment.
- SC-04: GOV_EID issuers (not an adversary — the enrolled citizen's own credential issuer)
  can, from their retained stable identifier, independently compute the enrolment nullifier,
  find the identityCommitment in the Enrolled event, and trace the citizen's full on-chain
  activity. SDD §3.2's claim that external issuers "learn a region request, not a party" is
  incorrect as specified and must be corrected in either resolution option.

**Three resolution options (from the security scan):**

| Option | Description | Consequence |
|--------|------------|-------------|
| 1 | Remove FR-062 entirely | NFR-001, NFR-002, NFR-024 remain fully intact. No profile feature. |
| 2 | Approve FR-062; amend NFR-001/002/024 to carve out the profile surface | Must add a RISK-## entry documenting: (a) government eID issuers can reconstruct a complete political dossier without compulsion; (b) k=1,000 anonymity protection is voided for profiled persons; (c) NFR-002 is inapplicable to the profile surface by design. These are explicit accepted consequences. SDD §3.2 must be corrected. |
| 3 | Approve a redesigned FR-062 (authenticated-only or aggregate-only view) | Architect must redesign DES-064 so that the profile does not link the display identity to the identityCommitment. No such design element exists yet; this option requires a new architect session before coding can proceed on Change 1. |

**What this blocks:** Re-affirmation of FR-062, FR-063, DES-064, SCR-21 (all of Change 1)
cannot proceed until the approver records a decision. The `participation_profile` feature
flag is correctly set OFF above dev; it must remain so until this decision is recorded.

**Required decision:** Choose Option 1, 2, or 3, and record it here. If Option 2 or 3,
the architect must be reinvoked to implement the recorded design consequence before coding
on Change 1 proceeds.

---

### Decision B — SC-01 (CRITICAL): Enrolment circuit trust anchor defect

**What it is:** The security scan found that the enrolment circuit's trust anchor is absent
from two required places in the specification:
1. The `enrol()` public signal vector (SDD §5.4) does not include the trust anchor hash.
   Without it, a prover can substitute any private key as the "trust anchor" and the contract
   cannot detect the substitution. A malicious prover generates a fake credential, supplies a
   self-generated key as the private witness, and the circuit accepts it. Result: unlimited
   synthetic identities.
2. The issuer data model (SDD §5.3) has no `trustAnchorHash` field, `verifierAddress`, or
   adapter-contract link. The trust anchor lives only in `metadataURI`, which is off-chain and
   unenforceable by the contract.
3. A single `CIRCUIT_ENROL` constant cannot serve three adapter classes (eIDAS ECDSA/BLS,
   ICAO RSA-2048 SOD, Aadhaar RSA-2048), each requiring a different Circom circuit and proving
   key. DES-070's `ICredentialAdapter.getVerifierAddress()` implies per-adapter verifiers exist
   but the issuer struct has no link from `issuerId` to a verifier address.

**Why it is a design-spec defect, not a completeness defect:** The document-review rubric
checks whether every FR/NFR has a DES element and whether specified things are internally
consistent. Doc 03 passed at 98% on that basis. SC-01 is a different check: does the
specified design actually achieve the security property FR-069/FR-070 claims it achieves?
The answer is: as specified, it does not. A single-lens pass does not rule out a multi-lens
failure. Both verdicts are correct.

**The architect's recommended fix (from the scan):**
1. Add `trustAnchorHash` (bytes32) to the issuer struct in Doc 03 §5.3.
2. Change the `enrol()` signal vector to 5 signals: `[Ni, C, issuerId, namespaceId, trustAnchorHash]`.
   The contract checks `trustAnchorHash == issuers[issuerId].trustAnchorHash` on-chain.
3. Remove the single `CIRCUIT_ENROL` constant. Look up the verifier per adapter class from
   the issuer's `credentialClass` or via `adapters[issuerId].verifierAddress`.
4. Specify in ADR-017 that the trust anchor commitment is a public input to each adapter
   class's circuit.

**What this blocks:** Re-affirmation of FR-069, FR-070, DES-069, DES-070, ADR-017 (Change 6
enrolment circuit) cannot proceed until the architect produces a revised Doc 03 addressing
SC-01 and that revision passes the review loop. The change cannot be coded as currently
specified; building it now would require coding to an unsound specification.

**Required decision:** Direct the architect to produce Doc 03 v1.1.2 (or a dedicated SC-01
patch version) addressing SC-01 before any implementation of Change 6 proceeds. The
re-affirmation packet for that version should be presented when ready. The approver may
wish to note explicitly that this is not a rejection of the enrolment concept — it is a
rejection of the current specification of the trust anchor binding.

---

### Decision C — OI-12: FR-073 vs ADR-003 (RESOLVED — presented for awareness)

**Status: RESOLVED.** This item requires no approver decision. It is presented because it
was an open item at Gate 1 and is now closed.

FR-073 (governance glossary and definitions) was recorded as potentially conflicting with
ADR-003's 1-of-N plurality model. ADR-016 resolves this explicitly: it amends ADR-003 to
restrict Phase-1 enrolment to GOV_EID class only (1-of-1 per region), with the plurality
model resuming at Phase 3 under a new ADR with its own threat model and audit. ADR-003's
header now reads "Accepted — AMENDED by ADR-016." The OI-03 Gate-1 disposition (phased
enrolment) sanctioned exactly this resolution.

OI-12 is recorded as resolved in Doc 02 v1.1.1 §13, Doc 05, and the architect's session
note (`artifacts/architect-2026-08-10T0900.md`). No action required.

---

### Decision D — Carry-forward open items (still governing; no new decision needed)

These items remain open from the original Gate-1 decision. They are recorded here because
they govern the work that follows any re-affirmation.

| Item | Status | Governing deadline |
|------|--------|--------------------|
| OI-01 — activation threshold number (percentage and method) | Method decided at Gate 1; number still open | Must be published before the first petition opens above dev. Hard deadline; the whole product hinges on it. |
| OI-04 — pilot jurisdiction and eID credential rail | Open — jurisdiction not yet named | Blocks enrolment implementation (Change 6). Cannot implement FR-069/FR-070 against an unnamed jurisdiction's eID rail. |
| Fork-initiation critical | Open — `fork` flag OFF above dev | The fork-initiation threshold and cooling-off period are taken from calldata, making them currently decorative. The flag stays OFF everywhere above dev until this is fixed. See `GATE1-DECISION-2026-08-09.md §6`. |
| OI-08 — governance constants (threshold calibration parameters) | Open — marked non-normative | No implementation dependency at this stage; constants must be set before production. |

---

## 5. Security findings summary

Full scan: `artifacts/reviews/SECURITY-SCAN-CR-v1.1.0-2026-08-10.md`. Conducted by
reviewer-qa in read-only mode against requirements and design documents. No product code
was written or modified in this session; these are requirements/design-phase findings,
recorded not closed.

**Severity table:**

| Severity | Count | Finding IDs |
|----------|-------|-------------|
| Critical | 1 | SC-01 |
| High | 4 | SC-02, SC-03, SC-04, SC-05 |
| Medium | 5 | SC-06, SC-07, SC-08, SC-09, SC-10 |
| Low | 2 | SC-11, SC-12 |
| Total | 12 | SC-01..SC-12 |

**Critical and high findings (one sentence each):**

- **SC-01 (CRITICAL):** The trust anchor is not in the enrolment circuit's public signal
  vector or issuer struct, so any prover can substitute a self-generated key and the contract
  cannot detect it; a single `CIRCUIT_ENROL` constant cannot dispatch to three different
  adapter verifiers; Sybil resistance is defeasible as specified. Route: architect.

- **SC-02 (HIGH):** FR-062's public profile, combined with the on-chain identityCommitment
  index and SC-04's issuer-computation path, creates a political dossier oracle that government
  eID issuers can exploit without compulsion; NFR-002 is violated for every profiled person but
  this conflict is not acknowledged in OI-13 or SDD §18. Route: product-owner + human approver.

- **SC-03 (HIGH):** Publishing per-individual ballot participation lists violates NFR-002
  (k≥1,000 indistinguishability) for every profiled action and enables clustering attacks that
  identify political blocs, enabling pre-vote targeting in violation of NFR-024. Route:
  product-owner + architect.

- **SC-04 (HIGH):** A GOV_EID issuer who retains stable identifiers can independently compute
  the enrolment nullifier, find the identityCommitment in the Enrolled event, and trace the
  citizen's full on-chain political activity; SDD §3.2's trust-boundary claim ("external
  issuers learn a region request, not a party") is incorrect as specified. Route: architect.

- **SC-05 (HIGH):** There is no rate limit on recovery re-initiation after an ABORTED state,
  allowing an attacker with a stolen credential to mount a permanent voting-disruption grief
  campaign against a victim indefinitely at gas cost only; absent from ADR-018, FR-072, all
  three RISK entries, and SDD §11. Route: architect.

Medium and low findings (SC-06..SC-12) are documented in full in the scan file. Routes are
all to the architect (SC-06, SC-07, SC-08, SC-09, SC-10, SC-11, SC-12), with SC-08 also to
the product-owner. None block the gate independently but all must be resolved before
Gate 2 and before the affected requirements are coded.

**What the scan found sound (verified, not just unchecked):** The `participation_profile`
feature flag correctly gates FR-062 until OI-13 resolves. FR-063's direction-withheld
guarantee is unambiguous at the requirement level. The four universal in-circuit checks in
ADR-017 are well-specified. The enrolment scope prevents cross-deployment nullifier replay.
`stable_id_secret` is correctly specified as a private input. GOV_EID class restriction and
AVAILABILITY_ONLY exclusion from nullifier minting are correct. The RECOVERY_DELAY constant
is immutable. The independent on-chain veto path is correctly specified. The state machine
is mutually exclusive. No second identity is created on KEY_ROTATION_COMPLETE.

---

## 6. Bottom line — go / no-go recommendation

**Gate 1 re-affirmation: NOT READY to approve.**

The project-manager's recommendation is: **do not grant re-affirmation** until:

1. **SC-01 is resolved** — the architect produces a revised Doc 03 (trust anchor in signal
   vector and issuer struct; per-adapter verifier dispatch) and that revision passes the
   review loop. Only then can the enrolment requirements (FR-069, FR-070) be re-affirmed.

2. **OI-13 is decided** — the approver records one of the three options for FR-062/profile.
   Only then can the profile requirements (FR-062, FR-063) be re-affirmed.

Both items are genuine blockers. Granting re-affirmation with SC-01 open would authorise
coding to a specification under which Sybil resistance is defeasible. Granting it with
OI-13 open would authorise coding to a specification that violates NFR-001, NFR-002, and
NFR-024 as written.

**Gate 2: OPEN / NOT READY — unchanged.** The RTM (Doc 08 v1.1.2) has 64 open Must rows.
Gate 2 preconditions (suites green, RTM zero gaps, rollback proven) are not met. This is
the expected state for the current phase of the project.

**Path forward once the approver records decisions A and B:**
- If SC-01: architect reinvoked to produce Doc 03 patch → review loop → re-affirmation
  packet v2 (enrolment only).
- If OI-13 Option 1 (remove FR-062): product-owner updates Doc 02 to remove FR-062 → review
  loop → re-affirmation packet v2 (profile only).
- If OI-13 Option 2 (amend NFRs): product-owner updates Doc 02 + architect updates Doc 03
  §3.2 and risk register → review loop → re-affirmation packet v2.
- If OI-13 Option 3 (redesign): architect produces new DES-064 design → review loop →
  re-affirmation packet v2.
- Changes 2–5, Change 7, and Change 8 are not blocked by SC-01 or OI-13 independently
  (SC-05 blocks Change 7 from being coded safely, but not from being re-affirmed at the
  requirements level; the architect fix for SC-05 should be incorporated before coding).
- The carry-forward items (OI-01, OI-04, fork-initiation) are not re-affirmation blockers
  but remain governing constraints on implementation order.

---

*Prepared by: project-manager (Ana-Maria Petrescu) — 2026-08-10*
*The project-manager does not approve gates. This is a readiness packet only.*
*Decision recorded by the human approver — when made — should be appended here or to
`artifacts/status/GATE1-DECISION-2026-08-09.md` as a supplement.*
