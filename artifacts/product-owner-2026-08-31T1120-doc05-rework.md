# Session memory — product-owner — 2026-08-31T11:20Z

```
Role:      product-owner (Priya Raghunathan)
Phase:     Define — review-and-rework loop, Doc 05 cycle 1 → v2.4.0
Product:   Trumocracy
Task:      Rework docs/05-product-backlog.md v2.3.0 → v2.4.0 against
           artifacts/reviews/05-product-backlog-v2.3.0-business-cycle1.md
           (FAIL 69%, 1 Critical / 5 High / 4 Medium / 4 Low; reviewer: architect, neutral)
Outcome:   Verification COMPLETE. Document edit BLOCKED by a tool constraint (see §7).
```

---

## 1. What I did

Read the review report in full, then independently verified **every one of its fourteen findings**
against the Approved upstream documents rather than trusting the report. Sources read and pinned:

| Document | Version | Status | Sections read |
|---|---|---|---|
| `docs/02-requirements-srs.md` | **2.16.3** | Approved | header, §4.40–§4.47, §8 (FR-050, FR-064, FR-121, FR-125–FR-129, FR-133), §11, §12, §16.1–§16.3.1 |
| `docs/03-architecture-design-sdd.md` | **2.11.2** | Approved | header, §5.2, §15 |
| `docs/07-test-cases-suites.md` | **2.4.4** | Approved | header, §2 suite table, §5.2–§5.6 |
| `docs/08-traceability-matrix.md` | **2.7.0** | Approved | header, §3.1, §3.2, §3.3, §6, §7 (incl. entries 119–126) |
| `docs/05-product-backlog.md` | 2.3.0 | In Review | entire file, 3,219 lines |
| `docs/templates/05-product-backlog.template.md` | — | — | §6 story atom, §7 |

**Every finding in the review is CORRECT.** I found no finding I could refute. I additionally found
four defects the reviewer did not report (§5).

---

## 2. Decisions made

- **D-1. All fourteen issues are accepted.** No finding re-litigated.
- **D-2. The Must-FR population is 114** (SRS v2.16.3 §11), not 101. Independently recounted from
  the §11 Must ID list: 4+6+3+9+4+3+2+4+2+2+4+11+38+9+13 = **114**. Confirmed.
- **D-3. Exactly eight Must FRs have no story** in Doc 05 v2.3.0 — verified by walking all 114 Must
  IDs against every `Implements:` value and the §12 map: **FR-050, FR-121, FR-125, FR-126, FR-127,
  FR-128, FR-129, FR-133**. Coverage is therefore **106 of 114**, not "all 101".
- **D-4. Eight stories minted** (`US-0135`..`US-0142`) and **four features minted**
  (`FE-059`..`FE-062`); `FR-129` housed in existing `FE-056`. Full specifications in §4.
- **D-5. Honesty over coverage-theatre.** Six of the eight new stories are marked
  **`Not Ready pending DES`**, each citing its RTM v2.7.0 §7 gap-log entry number. I did **not**
  invent DES links to make the chain look closed.
- **D-6. The RTM is the authority on Definition of Done**; Doc 05 mirrors it with an explicit
  version pin, so this class of drift is visible on the next bump. Adopted as a stated convention
  in §6 and §11.
- **D-7. Doc 07 v2.4.4 is the authority on which `TC` belongs to which `US`** (its §5.x case
  register is per-case); the RTM's per-FR `TC` cell is used only where Doc 07 has no per-story
  heading. This resolves the one place they disagree (§5, F-4).
- **D-8. `SCR` provenance rule.** `SCR` taken from RTM §3.1/§3.2 where that table carries one;
  RTM §3.3 (Should/Could) has no SCR column, so for those stories the `SCR` is Doc 05 §7's own
  provisional inventory, labelled as such. `SCR: none` is a positive statement, not an omission.
- **D-9. I edited no document other than Doc 05.** Doc 02, 03, 07, 08 defects found are recorded
  as open items naming the owning role (§5), per the brief.
- **D-10. I authored no review report.** Re-review is a neutral reviewer's job (AL-CANDIDATE-3).

---

## 3. Verification results, finding by finding

| ID | Sev | Verdict | Evidence I confirmed |
|---|---|---|---|
| ISS-01 | Critical | **CONFIRMED** | SRS v2.16.3 §11 = 114 Must. FR-121/125/126/127/128/129/133 appear in Doc 05 only in changelog prose, never as an `Implements:` value. RTM §3.1 rows for all seven show `US = none`; §7 entries 119–124 and 126 corroborate. |
| ISS-02 | High | **CONFIRMED** | SRS v2.16.3 §11 Must row contains `050`; §11 "On the size of the Must set" states "FR-050 is raised from Should to Must (financial transparency is now a business requirement, BR-019)". Doc 05 §12 calls it "Should or Could". Re-checked the other four named FRs: FR-005 Should, FR-049 Should, FR-052 Could, FR-053 Could — those four are correctly classified. |
| ISS-03 | High | **CONFIRMED** | SRS v2.16.3 §8 `# FR-064` now reads "the join is refused naming party A as the current membership, and membership in party A is unchanged", then leave-then-join. §16.3.1 FR-064 row: "switch only by explicit recorded leave, then join (v2.15.0 ruling (a))". Doc 05 US-0073 AC-1 still says "membership in party A is **voided**". |
| ISS-04 | High | **CONFIRMED** | RTM §6: "The current figure is **17 of 134**", path 13 → +US-0131 (v2.4.0) → +US-0089, US-0100 (v2.5.0) → +US-0090 (v2.5.1). US-0021 is in the 13-story baseline ("US-0021 newly meets DoD (v2.2.4)"). Doc 05 contradicts on all five. |
| ISS-05 | High | **CONFIRMED** | Doc 07 v2.4.4 §5.3 headings: TC-3470..TC-3476 → US-0132; TC-3477..TC-3481 → US-0133; TC-3482..TC-3487 → US-0134; TC-3488 → US-0132. 19 cases, 16 with Pass (obs.), 3 Blocked (TC-3476, TC-3481, TC-3487). Doc 05 asserts "no TC-#### minted" in four places. |
| ISS-06 | High | **CONFIRMED** | Template §6 mandates `Implements: FR-### · DES-### · SCR-##` and `Verified by: TC-####`. Counted in Doc 05 v2.3.0: **0 of 134** stories carry a `Verified by:` field; 5 carry a DES; 4 carry an `SCR:` line. The preamble's deferral ("attached after Design") has expired — SDD v2.11.2 and Doc 07 v2.4.4 are both Approved. |
| ISS-07 | Medium | **CONFIRMED, with one correction** | SDD v2.11.2 §5.2/§15 assign: FR-077→DES-101; FR-079→DES-103; FR-080→DES-103; FR-090→DES-104; FR-091→DES-105; FR-092→DES-106; FR-130→DES-102. **The review's shorthand "FR-079/FR-080 → DES-103/DES-104" is loose** — DES-103 covers *both* FR-079 and FR-080; DES-104 covers FR-090. I used §5.2 directly. Note also **FR-081 (US-0091) still has no DES** and stays "Not Ready pending DES". |
| ISS-08 | Medium | **CONFIRMED** | Header pins SRS v2.13.0; Approved SRS is v2.16.3 (2026-08-30). |
| ISS-09 | Medium | **CONFIRMED** | SRS v2.16.3 §11 counts 21 BR. Doc 05 §4 already cites BR-014/015/018/019/021. §1 says BR-001…BR-013. |
| ISS-10 | Medium | **CONFIRMED** | SRS §16.1.1/§16.1.2 define Definition A/B; §16.3.1 marks FR-030 and FR-031 `DEFERRED-v2` and FR-032/FR-033 `PARTIAL` with honesty flag `Y`. Doc 05 EP-06 promises those guarantees unqualified. FR-131 clause (a) requires the v1 UI to say voting is NOT anonymous, NOT receipt-free, NOT coercion-resistant. |
| ISS-11 | Low | **CONFIRMED** | §7 `Implements` column carries FR/NFR only. |
| ISS-12 | Low | **CONFIRMED** | US-0013 note asserts "DoD **not satisfied** (RTM Should row **now complete**)". |
| ISS-13 | Low | **CONFIRMED** | §12 label frozen at "v2.0.0". |
| ISS-14 | Low | **CONFIRMED** | `artifacts/reviews/05-product-backlog-v2.0.1-business-cycle2.md` is a PASS at 99%. |

---

## 4. The eight new stories (ready to apply verbatim)

New features: **FE-059** Pilot jurisdiction sequence & adapter schedule (EP-01, FR-121, owner Marcus
Adeyemi) · **FE-060** Open-tier entry spam control (EP-01, FR-125 + FR-133, owner Grace Mbeki) ·
**FE-061** On-device proof & nullifier-only identity posture (EP-01, FR-126/127/128, owner
Dr. Lena Kowalczyk) · **FE-062** Public treasury record (EP-11, FR-050, owner Erik Lindqvist).
`FR-129` is added to existing **FE-056** (EP-12) Maps-to.

Owners are the SRS §4 named requirement owners in every case. Points assigned on the
US-0024 = 3 reference scale: 0135=5, 0136=5, 0137=5, 0138=8, 0139=5, 0140=8, 0141=3, 0142=5
(+44 points; §9 total 134/~836 → **142 stories / ~880 points**).

```
US-0135  Enrol through the adapter my jurisdiction has actually reached      (FE-059 · EP-01)
As a citizen in the pilot jurisdiction, I want enrolment adapters deployed in a published,
technical-readiness-ordered sequence, so that I am never offered a rail that cannot yet prove
what it claims, and a deferred jurisdiction is told so plainly.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Depends on: US-0080
Implements: FR-121 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 119 records FR-121 as G-TRACE + G-PHASE3
  ("no DES assigned — Doc 03 §16 next-increment phasing"), owner Marcus Adeyemi, closes at
  "Design next increment". Hard dependency: CON-015 MUST be satisfied before the Phase-1
  adapter is marked implementation-ready (SRS §4.40).
AC:
  Scenario: Phase-1 India / Aadhaar offline paperless KYC enrols
    Given the Phase-1 India pilot with the FR-070 class (c) offline paper KYC adapter deployed
    When a citizen presents a valid Aadhaar offline XML credential
    Then the adapter verifies the government-signed document, derives the enrolment nullifier
      on-device per FR-126, and completes enrolment per FR-069
    And all four FR-069 universal in-circuit checks pass and no credential data is transmitted
  Scenario (negative): USA mDL credential presented while Phase 3 is deferred
    Given a USA mobile-driver's-licence credential presented to the Phase-1 enrolment system
    When the adapter checks the credential class and jurisdiction configuration
    Then the enrolment is refused because the Phase-3 USA adapter is not live
    And the refusal names the deferred Phase-3 status and exposes no identity data from the credential
  Scenario (adversarial): Phase-1 adapter marked ready before CON-015 clears
    Given CON-015 (the India legal opinion) is not recorded as satisfied
    When any actor attempts to mark the Phase-1 adapter implementation-ready
    Then the attempt is refused and the unmet CON-015 dependency is named
```

```
US-0136  Join without an invite, always      (FE-060 · EP-01)
As a citizen who knows nobody on the platform, I want a non-invite door that is permanently open,
so that spam control never becomes an admission condition and no one can shut me out by holding
back a referral.
Owner: Grace Mbeki   Priority: Must   Points: 5   Depends on: US-0024
Implements: FR-125 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4); tester owed a TC at the next increment
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 120 (G-TRACE + G-PHASE3), owner Grace Mbeki.
  OI-19 RESOLVED at SRS v2.4.0; the requirement is finalised, not draft. FR-020 stays absolute.
AC:
  Scenario: Determined person with no invite reaches full counted membership (the separating test)
    Given a citizen who holds no referral token from any existing participant
    When they register through the non-invite fallback path and continue to counted membership
    Then the fallback is available and open, may be slower or higher-friction, and charges no fee
    And they complete enrolment (FR-069 nullifier minted) and gain FR-123 counted-action eligibility
  Scenario: Invite fast path verifies the referral edge and then discards it
    Given open-tier registration with invite-gating enabled for spam control
    When a new citizen submits a valid referral token
    Then the token is verified for authenticity and the referral edge is discarded immediately
    And no referral relationship, referrer identity or token is retrievable from any store, log,
      cache or export after the gate-check completes
  Scenario (adversarial): Operator attempts to close the non-invite fallback
    Given an operator who configures the platform so the non-invite fallback is disabled, closed
      or redirected to a dead end
    When the configuration is applied
    Then the system rejects it; the fallback cannot be closed by any operator configuration,
      deployment flag or default; only the Charter-layer amendment process (FR-129) can change this
  Scenario (negative): Refusal for lack of an invite
    When any registration or membership path refuses a person because they hold no invite token
    Then no such refusal exists; FR-020 is absolute and unamended
```

```
US-0137  Be rate-limited, never shut out, when my number looks unusual      (FE-060 · EP-01)
As a legitimate citizen using a VoIP number or an eSIM, I want spam-resistance signals to slow me
down rather than exclude me, so that an anti-fraud heuristic can never disenfranchise a real person.
Owner: Rafael Duarte   Priority: Must   Points: 5   Depends on: US-0136
Implements: FR-133 · DES-099 · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4; Doc 08 v2.7.0 §3.1 records "no US or TC yet")
Note: DES-099 IS assigned (Doc 03 v2.11.2 §15, from v2.4.1). Doc 08 §7 entry 126 is G-PHASE3 only —
  this story is Ready on the DES link and open on implementation and test. Scope asymmetry is
  normative: flag-don't-block governs the spam layer ONLY; the FR-132 §(b) government-ID check is
  a hard gate on FR-123 counting actions and is NOT subject to it.
AC:
  Scenario: Flagged number is rate-limited, not hard-blocked
    Given a v1 deployment and an enrolment attempt with a number flagged as VoIP or virtual
    When the spam-resistance layer processes the request
    Then the enrolment is rate-limited or queued for additional verification, is not hard-blocked,
      and the response never states a permanent denial based on the flag
  Scenario: Flagged legitimate user completes every primary flow
    Given a member whose number triggered a flag but whose enrolment completed
    When they attempt to join a party, sign a petition or cast a vote
    Then every governance action is available subject only to rate-limiting
    And no governance action is denied solely on the basis of the flag
  Scenario (negative): Flag events on a public or governance-path surface
    When the public verifiable record, any governance-path surface and any member-facing data
      are inspected
    Then zero flag events, VoIP indicators, device scores or spam-resistance signals appear
  Scenario (adversarial): Hard-block path sought
    When any v1 code path is tested for a route that permanently denies a flagged number
    Then no such path exists; every flagged number is rate-limited or queued
```

```
US-0138  Have my credential read only on my own device      (FE-061 · EP-01)
As a citizen enrolling, I want the raw credential to be read and proven on my phone and then
discarded, so that nothing the platform receives could ever identify me.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Depends on: US-0079
Implements: FR-126 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4)
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 121 (G-TRACE + G-PHASE3): "on-device
  credential-processing boundary not separately designed (ADR-017 covers prover concept; formal
  DES owed)", owner Dr. Lena Kowalczyk. v1/v2: SRS §16.3.1 classes FR-126 PARTIAL — v1 enforces
  the discard by app design and API contract; v2 by cryptographic construction.
AC:
  Scenario: Raw credential discarded on-device before anything leaves the phone
    Given a citizen enrolling with an Aadhaar offline XML credential
    When the on-device prover generates the ZK proof and derives the enrolment nullifier
    Then the raw XML, the stable identifier and all intermediate material are discarded on-device
      before any data leaves the device
  Scenario (adversarial): Full network interception
    Given an adversary intercepting all traffic during and after enrolment
    When the captured traffic is fully inspected
    Then only the ZK proof and the derived nullifier are present; no Aadhaar XML, eIDAS attribute,
      ICAO chip datum, mDL datum or stable identifier appears in any payload
  Scenario (negative): Credential material anywhere in the estate
    When every store, log, cache, queue and backup is inspected during and after enrolment
    Then no raw credential material is present in any form; only the derived nullifier appears
```

```
US-0139  Be de-duplicated by mathematics, never by comparing me to a record      (FE-061 · EP-01)
As a citizen, I want duplicate enrolment caught only by nullifier collision, so that no name,
face or document number is ever compared to detect me.
Owner: Marcus Adeyemi   Priority: Must   Points: 5   Depends on: US-0079, US-0138
Implements: FR-127 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4)
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 122 (G-TRACE + G-PHASE3): the
  nullifier-collision-only posture is recorded normative (ADR-017 / C-03) but a formal DES is owed.
AC:
  Scenario: Second enrolment with the same credential collides and is rejected
    Given a person who has already enrolled and whose nullifier N exists on the verifiable record
    When they attempt a second enrolment with the same physical credential
    Then the same deterministic nullifier N is derived on-device, the collision is detected against
      the existing record, and the enrolment is rejected as a duplicate
  Scenario (negative): Any identity-comparison path in duplicate detection
    When every duplicate-detection code path is inspected
    Then no name-matching, biometric comparison, document-number lookup, administrative review or
      identity-record comparison exists in any path under any configuration
  Scenario (adversarial): Operator configures a fallback identity match
    When an operator attempts to enable an identity-record comparison as a duplicate-detection
      fallback
    Then no such capability exists and the attempt is refused and logged
```

```
US-0140  Be un-disclosable, not merely undisclosed      (FE-061 · EP-01)
As a member of a political party, I want the platform to be technically unable to say who belongs
to it, so that a court order cannot do what a promise merely declines to do.
Owner: Dr. Lena Kowalczyk   Priority: Must   Points: 8   Depends on: US-0138, US-0139
Implements: FR-128 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4)
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 123 (G-TRACE + G-PHASE3); formal DES owed.
  **v1 honesty (SRS §16.3.1, honesty flag Y): the subpoena test is NOT met in v1** — the operator
  database can be compelled to disclose member↔party mapping and vote direction. FR-131 carries
  the disclosure. The guarantee is a Definition-B (v2) commitment; this story MUST NOT be reported
  as satisfied by a v1 deployment.
AC:
  Scenario (adversarial): The subpoena test
    Given a court order requiring disclosure of who belongs to a named political party
    When a technically capable actor with full platform access attempts to comply
    Then the platform is technically unable to produce any identity-to-member mapping, and no such
      mapping can be assembled from any combination of stored data
  Scenario (negative): Reversible identity data anywhere
    When the complete data inventory of every store, cache, log, queue, backup and ephemeral store
      is inspected
    Then zero identity documents, raw stable identifiers, biometric templates, date-of-birth or
      address fields — and nothing from which a stable identifier could be recovered — are present,
      in plaintext or encrypted form
  Scenario (adversarial): Encrypted-but-decryptable identity store proposed
    Given a configuration that stores identity data in encrypted form
    When the subpoena test is applied to it
    Then that configuration FAILS the test and is rejected, because a decryptable store can be
      produced under legal compulsion
  Scenario: v1 posture is disclosed rather than overclaimed
    Given a Definition-A (v1) deployment
    When any surface describes what the platform can and cannot see
    Then it states plainly that v1 does not meet the subpoena test (FR-131), and it does not use
      "private", "anonymous", "receipt-free" or "secure" of v1 behaviour
```

```
US-0141  Keep single-issuer operation temporary by construction      (FE-056 · EP-12)
As any enrolled citizen, I want the Phase-1 single-rail limitation to be un-extendable by a
configuration flag, so that a dated pilot compromise cannot quietly become the permanent design.
Owner: Marcus Adeyemi   Priority: Must   Points: 3   Depends on: US-0128, US-0135
Implements: FR-129 · DES: none · SCR: none
Verified by: none yet — no TC minted (Doc 07 v2.4.4)
Note: Not Ready pending DES — Doc 08 v2.7.0 §7 entry 124 (G-TRACE + G-PHASE3). **Which amendment
  tier governs (FR-118 Tier 1 or FR-119 Tier 2) is deliberately unanswered and MUST NOT be assumed**
  — SRS §4.43 owes that determination to the architect at the next Doc 03 increment. What is
  normative regardless of tier is tested below.
AC:
  Scenario (adversarial): Configuration flag attempts to extend the single-rail deployment
    Given an operator or maintainer who applies a configuration flag, environment variable or
      deployment default to extend Phase-1 single-rail operation beyond its published dated scope
    When the configuration is applied
    Then the system rejects it; no deployment flag or default may make single-issuer operation
      permanent or extend it
  Scenario: Only the Charter-layer amendment path can change the scope
    Given a Charter-layer amendment that has re-entered through Gate 1 and Gate 2 per CLAUDE.md,
      whose approved scope includes modifying the Phase-1 issuer-plurality limitation
    When the amendment is applied
    Then the issuer-plurality scope restriction may be extended or modified per that outcome
  Scenario (negative): Phase-1 limitation presented as permanent
    When any surface or configuration describes the single-rail deployment
    Then it is presented as a dated Phase-1 pilot limitation with Phase 2 (eIDAS 2.0) as the exit
      condition, and the accepted exclusion (a person without Aadhaar cannot enrol in the pilot
      region) is stated rather than hidden
```

```
US-0142  Follow every rupee in and out of a party treasury      (FE-062 · EP-11)
As a member or auditor, I want every treasury inflow and outflow published as an itemised,
independently verifiable record, so that financial transparency is a property of the record
rather than a claim by the party.
Owner: Erik Lindqvist   Priority: Must   Points: 5   Depends on: US-0061
Implements: FR-050 · DES-033 · SCR: none
Verified by: none yet — Doc 08 v2.7.0 §3.3 records no TC for FR-050; tester owed a TC
Note: **FR-050 is Must** (SRS v2.16.3 §11 Must row; "FR-050 is raised from Should to Must —
  financial transparency is now a business requirement, BR-019"). DES-033 (treasury caps + ledger)
  is assigned in Doc 03 §5.2. Open item routed to the tester: Doc 08 v2.7.0 §3.3 still classes
  FR-050 as **Should** and lists it under non-Must rows — a stale classification that must move to
  §3.1 as a gating Must row. Upstream of FR-096 (US-0106), which detects anomalies over this record.
AC:
  Scenario: Every movement is published itemised and reproducible
    Given any treasury inflow or outflow for an active party
    When the event completes
    Then an itemised, publicly readable, independently verifiable record is published for it
    And any third party can reproduce the treasury state from the public record alone
  Scenario (negative): Unpublished or aggregated-away movement
    Given a treasury movement that is recorded internally but not published
    When the public treasury record is reconciled against the internal ledger
    Then the discrepancy is detectable by any third party
  Scenario (adversarial): Party or operator attempts to redact a published entry
    When any actor attempts to edit, delete or suppress a published treasury entry
    Then no such capability exists and the attempt is refused and logged
```

---

## 5. Defects found that the review did NOT report (routed, not fixed — I own only Doc 05)

- **F-1 — SCR-22 / SCR-23 are inverted in Doc 05 §7 against two Approved documents.** SDD v2.11.2
  §5.2 preamble: "SCR-22 = Debate scheduling and attendance surface (FR-066, FR-067); SCR-23 =
  Candidate feedback voting surface (FR-065)". RTM v2.7.0 §3.1 agrees (FR-065→SCR-23,
  FR-066/FR-067→SCR-22). Doc 05 §7 has SCR-22 = candidate feedback and SCR-23 = debate schedule.
  **Mine to fix, in Doc 05 §7** — included in the rework plan; stories US-0074/0075 take SCR-23 and
  US-0076/0077 take SCR-22.
- **F-2 — NF-09 vs NFR-007.** Doc 08 v2.7.0 §3.2 records NFR-007 as `G-NOENV + G-TRACE — no story
  and no backlog item implements this NFR`. That is **wrong**: Doc 05 §8 **NF-09** has implemented
  NFR-007 since v1.1.1 (added to close ISS-01 of the v1.1.0 review). **Routed to the tester
  (Ji-woo Park):** the NFR-007 row should read `NF-09`, and its G-TRACE tag should retire.
- **F-3 — FR-075 DES disagreement between Doc 03 and Doc 08.** SDD v2.11.2 §5.2 lists DES-102's
  `Satisfies` as `FR-130, FR-075, BR-002, BR-012`, but RTM v2.7.0 §3.1 records FR-075's DES as
  `none` (G-TRACE). One of the two is wrong. **Routed to the architect (Doc 03 owner) and the
  tester (Doc 08 owner).** I kept US-0085 at "Not Ready pending DES" — the conservative reading —
  rather than claiming a link the RTM denies.
- **F-4 — TC-3555 is double-assigned.** Doc 07 v2.4.4 §5.6 heads `TC-3552..TC-3555` as
  "FR-091 … US-0101", but RTM v2.7.0 §3.1 also lists TC-3555 in FR-122's TC cell (US-0133).
  **Routed to the tester.** I followed Doc 07's per-case register (D-7): TC-3555 → US-0101.

Also noted, already known and recorded upstream: RTM §3.3 line 773 carries FR-050 as **Should**
(the propagated form of ISS-02) — routed to the tester with F-2 and F-4.

---

## 6. The complete link mapping (apply verbatim to §6 story atoms)

Sources: DES/SCR from RTM v2.7.0 §3.1–§3.2 and SDD v2.11.2 §5.2/§15; TC from Doc 07 v2.4.4 §5.x
where a per-story heading exists, else RTM. `—` = the approved sources record none.

| US | Implements FR/NFR | DES | SCR | Verified by (TC) |
|---|---|---|---|---|
| 0001 | FR-001 | DES-001 (ADR-003) | SCR-02 | 0001, 1001–1003, 2600, 2601 |
| 0002 | FR-003, NFR-010 | DES-001, DES-080 | SCR-01 | 2050–2053 |
| 0003 | FR-003, NFR-015, NFR-023 | DES-001, DES-084, DES-085 | SCR-01 | 2050–2052, 2331, 2332, 2730, 3253 |
| 0004 | FR-004 | DES-001, DES-002 | SCR-02 | 0002, 0003, 1004, 2640–2642 |
| 0005 | FR-004, NFR-004 | DES-001, DES-002, DES-011 | SCR-02 | 0002, 0003, 1004, 1850, 2600–2603, 2640–2642 |
| 0006 | FR-002 | DES-001, DES-011 | — | 1016, 1025, 1607, 1956, 1957, 1961 |
| 0007 | FR-002, NFR-001, NFR-002 | DES-001, DES-004, DES-008, DES-011 | — | 1016, 1025, 1607, 1950–1957, 1959–1963, 2650–2652 |
| 0008 | FR-006 | DES-005, DES-006 | SCR-03 | 0004, 1040, 1400, 1609 |
| 0009 | FR-008 | DES-005 | SCR-03 | 0037, 1043 |
| 0010 | FR-007 | DES-004 | — | 0005, 0006, 1204, 2522 |
| 0011 | FR-010 | DES-073, DES-097(b) | SCR-04 | 0010, 1041, 3489–3493, 3515 |
| 0012 | FR-010, NFR-012 | DES-073, DES-082 | SCR-04 | 0010, 1041, 2080, 2083, 2084, 2382 |
| 0013 | FR-012 | DES-017 | SCR-04 | 1018, 1201, 3497, 3498 |
| 0014 | FR-011 | DES-074 | SCR-04, SCR-05 | 0009, 3494–3496 |
| 0015 | FR-011, NFR-022, NFR-023 | DES-074, DES-040, DES-085 | SCR-04, SCR-05 | 0009, 2331, 2332, 3250–3253, 3494–3496 |
| 0016 | FR-014 | DES-011 | SCR-06, SCR-07 | 0011, 0038, 1007, 1008 |
| 0017 | FR-015 | DES-012 | SCR-07 | 0012 |
| 0018 | FR-017 | DES-009 | SCR-06 | 0025, 1209 |
| 0019 | FR-009, FR-016 | DES-007, DES-009, DES-010 | SCR-08 | 0007, 0008, 1009–1014, 1203, 2604, 2710–2715 |
| 0020 | FR-009 | DES-007 | SCR-08 | 0007, 1011–1014, 2710–2715 |
| 0021 | FR-013 | DES-009, DES-097 | SCR-06 | 1034, 1035, 3499–3503, 3539, 3540 |
| 0022 | FR-018 | DES-009 | SCR-09 | 0013, 0014, 1042, 3504–3506 |
| 0023 | FR-019 | DES-009 | SCR-09 | — |
| 0024 | FR-020 | DES-013 (ADR-007) | SCR-10, SCR-11 | 0015, 0017, 1015, 1020, 3507, 3517–3520, 3526, 3527 |
| 0025 | FR-022 | DES-013 | SCR-11 | 0016, 3521, 3522, 3526, 3527, 3536 |
| 0026 | FR-020, NFR-001, NFR-024 | DES-013, DES-004, DES-008, DES-086 | SCR-10 | 0015, 0017, 1015, 1020, 1607, 1959–1961, 1963, 2650, 2652 |
| 0027 | FR-021 | DES-013, DES-014 | SCR-10 | 0023, 1021, 1608 |
| 0028 | FR-051, FR-035 | DES-033, DES-075 | — | 1021, 1604, 1605, 1608, 2605, 2621 |
| 0029 | FR-023 | DES-013, DES-014 | — | 1023, 1031, 1044 |
| 0030 | FR-023 | DES-013, DES-014 | — | 1023, 1031, 1044 |
| 0031 | FR-024 | DES-018, DES-104 | SCR-12 | 0018, 3543, 3544, 3547 |
| 0032 | FR-029 | DES-018 | SCR-12 | 1862 |
| 0033 | FR-025 | DES-016 | SCR-12 | 0019, 1026–1029, 1036, 1200, 1202 |
| 0034 | FR-025, NFR-023 | DES-016, DES-085 | SCR-12 | 0019, 1026–1029, 1036, 1200, 1202, 2331, 2332 |
| 0035 | FR-026 | DES-016, DES-021 | SCR-12 | 0020, 1024, 1032 |
| 0036 | FR-027 | DES-022 | SCR-12 | 0021, 1019, 1022, 2630 |
| 0037 | FR-028 | DES-018, DES-019 | — | 0022, 1030, 2620, 2622 |
| 0038 | FR-030, NFR-001 | DES-023, DES-024, DES-004, DES-008 | SCR-13 | 0033, 1607, 1958–1961, 1963, 2650 |
| 0039 | NFR-002 | DES-008 | SCR-13 | 1950–1955, 1962, 2651, 2652 |
| 0040 | FR-035 | DES-075 | — | 1604, 1605, 2605, 2621 |
| 0041 | FR-031, NFR-003 | DES-023, DES-024, DES-063 | SCR-13 | 2610–2612, 2614 |
| 0042 | FR-032 | DES-023, DES-063 | SCR-13 | 1039, 2611, 2613 |
| 0043 | FR-034 | DES-026 | SCR-13 | 0024 |
| 0044 | FR-033 | DES-025 | SCR-14 | 0024, 2482 |
| 0045 | FR-033, NFR-023, NFR-011 | DES-025, DES-085, DES-081 | SCR-14 | 0024, 2250–2255, 2331, 2332, 2482 |
| 0046 | FR-036 | DES-027 | SCR-15 | 0028 |
| 0047 | FR-036 | DES-027 | SCR-15 | 0028 |
| 0048 | FR-036, FR-038 | DES-027, DES-028 | SCR-15 | 0028, 0029 |
| 0049 | FR-037, FR-038 | DES-028 | SCR-15 | 0029 |
| 0050 | FR-037, NFR-024 | DES-028, DES-086 | SCR-15 | 0017, 0029, 1959, 2652 |
| 0051 | FR-039 | DES-076 | SCR-16 | 0030, 1024 |
| 0052 | FR-039 | DES-076 | SCR-16 | 0030, 1024 |
| 0053 | FR-040, FR-041 | DES-029 | SCR-16 | 0030 |
| 0054 | FR-046 (superseded) | DES-031 | SCR-17 | 0026 |
| 0055 | FR-047 | DES-031 | SCR-17 | 0026, 1045, 1614 |
| 0056 | FR-048 | DES-032 | SCR-17 | — |
| 0057 | FR-042 | DES-030 | SCR-18 | 0031 |
| 0058 | FR-043 | DES-030 | SCR-18 | 0031, 0032 |
| 0059 | FR-044, NFR-024 | DES-030, DES-086 | SCR-18 | 0017, 0031, 1959, 2652 |
| 0060 | FR-045 | DES-030 | SCR-18 | 0032 |
| 0061 | FR-054 | DES-035 | SCR-20 | 0027, 1047, 1048, 1207 |
| 0062 | FR-055, NFR-021 | DES-025, DES-044, DES-045 | SCR-14, SCR-20 | 1206–1208, 1803, 2480–2482, 2671 |
| 0063 | FR-055, NFR-018 | DES-025, DES-044 | SCR-14 | 2480–2482 |
| 0064 | FR-056, NFR-017 | DES-077, DES-039 | SCR-20 | 0039, 1600, 1601, 1606, 1613, 1614, 2521, 2523, 2661, 2720, 2721, 2750 |
| 0065 | FR-056, FR-057 | DES-077 | SCR-20 | 0039, 1600, 1601, 1614, 2661, 2720, 2721 |
| 0066 | FR-060, NFR-005, NFR-023 | DES-040, DES-043, DES-085 | all primary | 0035, 2200–2203, 2331, 2332 |
| 0067 | FR-061 | DES-043 | — | 0036, 2152 |
| 0068 | FR-058, NFR-016 | DES-040, DES-042 | SCR-19 | 0034, 2700, 2701 |
| 0069 | FR-059 | DES-042 | SCR-19 | 2700 |
| 0070 | NFR-006, 011, 012, 013, 022 | DES-078, 081, 082, 083, 040 | all primary | 2080–2084, 2250–2255, 2330, 2333, 2380–2382, 3250–3253 |
| 0071 | FR-062 (superseded) | DES-064 | SCR-21 | 3300–3302 |
| 0072 | FR-063 | DES-064 | SCR-21 | 3303–3306 |
| 0073 | FR-064 | DES-065 | SCR-11 (§7 prov.) | 3307–3309, 3523–3525 |
| 0074 | FR-065 | DES-066 (ADR-015) | **SCR-23** | 3313–3316 |
| 0075 | FR-065 | DES-066 | **SCR-23** | 3313–3316 |
| 0076 | FR-066 | DES-067 | **SCR-22** | 3317–3319 |
| 0077 | FR-067 | DES-067 | **SCR-22** | 3320–3322 |
| 0078 | FR-068 | DES-068 | — | 3310–3312 |
| 0079 | FR-069 | DES-069 (ADR-017) | — | 3323–3325, 3343, 3345 |
| 0080 | FR-070 | DES-070 (ADR-017) | — | 3326–3329, 3344 |
| 0081 | FR-071, FR-072 | DES-071 (ADR-018) | SCR-19 | 3333–3339 |
| 0082 | FR-072 | DES-071 (ADR-018) | SCR-19 | 3335–3339 |
| 0083 | FR-073 | DES-072 (ADR-016) | — | 3330–3332 |
| 0084 | FR-074 | none (G-TRACE) | — | 3400 |
| 0085 | FR-075 | none (G-TRACE; see F-3) | — | 3401 |
| 0086 | FR-076 | none (G-TRACE) | — | 3402 |
| 0087 | FR-077 | **DES-101** | SCR-04, SCR-05 | 3403, 3508–3510, 3541 |
| 0088 | FR-078 | none (G-TRACE) | — | 3404 |
| 0089 | FR-079 | **DES-103** | — (no UI clause) | 3405, 3542 |
| 0090 | FR-080 | **DES-103** | SCR-15, SCR-12 | 3406, 3544, 3562, 3563 |
| 0091 | FR-081 | none (G-TRACE) | — | 3407 |
| 0092 | FR-082 | DES-093, DES-094 | — | 3408, 3470, 3474 |
| 0093 | FR-083 | DES-093, DES-094 | — | 3409, 3471, 3474 |
| 0094 | FR-084 | DES-093, DES-094 | — | 3410, 3472, 3474 |
| 0095 | FR-085 | DES-093, DES-094 | — | 3411, 3474, 3476 |
| 0096 | FR-086 | DES-093, DES-094 | — | 3412, 3474 |
| 0097 | FR-087 | none (G-TRACE) | — | 3413 |
| 0098 | FR-088 | none (G-TRACE) | — | 3414 |
| 0099 | FR-089 | none (G-TRACE) | — | 3415 |
| 0100 | FR-090 | **DES-104** | SCR-12 | 3416, 3543, 3545, 3546, 3548–3551 |
| 0101 | FR-091 | **DES-105** | SCR-12 | 3417, 3552–3555 |
| 0102 | FR-092 | **DES-106** | SCR-12 | 3418, 3559, 3560 |
| 0103 | FR-093 | none (G-TRACE) | — | 3419 |
| 0104 | FR-094 | none (G-TRACE) | — | 3420 |
| 0105 | FR-095 | none (G-TRACE) | — | 3421 |
| 0106 | FR-096 | none (G-TRACE) | — | 3422 |
| 0107 | FR-097 | none (G-TRACE) | — | 3423 |
| 0108 | FR-098 | none (G-TRACE) | — | 3424 |
| 0109 | FR-099 | none (G-TRACE) | — | 3425 |
| 0110 | FR-100 | none (G-TRACE) | — | 3426 |
| 0111 | FR-101 | none (G-TRACE) | — | 3427 |
| 0112 | FR-102 | none (G-TRACE) | — | 3428 |
| 0113 | FR-103 | none (G-TRACE) | — | 3429 |
| 0114 | FR-104 | none (G-TRACE) | — | 3430 |
| 0115 | FR-105 | none (G-TRACE) | — | 3431 |
| 0116 | FR-106 | none (G-TRACE) | — | 3432 |
| 0117 | FR-107, NFR-028 | none (G-TRACE; DES-106 does NOT discharge FR-107 — SDD §15) | — | 3433, 3448 |
| 0118 | FR-108 | none (G-TRACE) | — | 3434 |
| 0119 | FR-109 | none (G-TRACE) | — | 3435 |
| 0120 | FR-110 | none (G-TRACE) | — | 3436 |
| 0121 | FR-111, NFR-027 | none (G-TRACE) | — | 3437, 3447 |
| 0122 | FR-112 | DES-090 (ADR-020) | — | 3438, 3449 |
| 0123 | FR-113 | DES-090 (ADR-020) | — | 3439, 3452 |
| 0124 | FR-114 | DES-088 | — | 3440 |
| 0125 | FR-115 | DES-089 | — | 3441 |
| 0126 | FR-116 | DES-089, DES-087, DES-092 | — | 3442 |
| 0127 | FR-117 | DES-089, DES-092 | — | 3443, 3451, 3453, 3465–3468 |
| 0128 | FR-118 | DES-087 (ADR-019) | — | 3444, 3449, 3455 |
| 0129 | FR-119 | DES-087, DES-091 (ADR-019) | — | 3445, 3450, 3454, 3456–3464, 3469 |
| 0130 | FR-120 | DES-034 | — | 3446 |
| 0131 | FR-130 | **DES-102** | SCR-09, SCR-11 | 3511–3516, 3528, 3529 |
| 0132 | FR-082–086, FR-124, FR-131 | DES-093, DES-094 (ADR-023) | none (deliberate) | 3470–3476, 3488 |
| 0133 | FR-122, FR-123, FR-132 | DES-095, DES-100 (ADR-024/025) | — | 3477–3481, 3520, 3530–3534, 3556–3558 |
| 0134 | FR-131 | DES-096, DES-098 (ADR-024) | SCR-13, SCR-14 | 3476, 3481–3487, 3534, 3535 |

Resulting counts: **142 stories · 109 carry a DES · 33 marked "Not Ready pending DES"** (matching
the 33 live FR-level G-TRACE chains; the RTM's 34th is NFR-007, see F-2) · **78 carry an SCR** ·
**132 carry at least one TC**; 10 carry none (US-0023, US-0056 and the eight new stories).

---

## 7. Open items

- **OI-A (BLOCKING, tooling — not a content defect).** The `Edit` tool is disabled for this session
  ("Edit is disabled for this session, in subagents as well as here"), leaving only whole-file
  `Write`. `docs/05-product-backlog.md` is 3,219 lines (~60k output tokens) and
  `artifacts/memory-index.json` is ~5,350 lines; neither can be re-emitted inside one message
  output limit, and `Write` cannot append. **Doc 05 therefore remains at v2.3.0 and this note was
  NOT registered in `artifacts/memory-index.json`.** Both writes need a session with `Edit`
  enabled, or a coordinator applying §4/§6 above. Route to the **project-manager**.
- **OI-B.** F-2, F-3, F-4 and the stale FR-050 "Should" in RTM §3.3 → **tester (Ji-woo Park)**;
  F-3 also → **architect**.
- **OI-C.** SRS §13 (h) and Doc 03 §16 Q15 — what becomes of a DEFEATED or CANCELLED decision under
  FR-091 — is a **requirement clarification owed by me** (product-owner). Not touched this session
  (out of scope: Doc 02 is not mine to edit under this brief).
- **OI-D.** Doc 03 §16 Q16 — two competing proposals can both pass under FR-090 and no rule says
  what the party gets. Product-owner-owned; the answer MUST NOT introduce a window-closing
  capability (that absence is the anti-capture control FR-090 certifies).
- **OI-E.** Gate-1 remains blocked: Docs 04, 05 and 14 have no passing review at their current
  versions. Expected and not mine to clear.

---

## 8. IDs touched

- **Minted (specified, not yet written to Doc 05):** `US-0135`, `US-0136`, `US-0137`, `US-0138`,
  `US-0139`, `US-0140`, `US-0141`, `US-0142`; `FE-059`, `FE-060`, `FE-061`, `FE-062`.
- **Requirements covered by the new stories:** `FR-050`, `FR-121`, `FR-125`, `FR-126`, `FR-127`,
  `FR-128`, `FR-129`, `FR-133`.
- **Stories whose status/links change:** US-0011, US-0013, US-0014, US-0015, US-0021, US-0022,
  US-0038, US-0041, US-0042, US-0044, US-0073, US-0074, US-0075, US-0076, US-0077, US-0087,
  US-0089, US-0090, US-0100, US-0101, US-0102, US-0131, US-0132, US-0133, US-0134 — plus every
  one of the 134 for the `Implements` / `Verified by` fields.
- **Design elements cited:** DES-001..DES-106 as tabulated in §6; ADR-003, 006, 007, 008, 009,
  010, 011, 014, 015, 016, 017, 018, 019, 020, 023, 024, 025.
- **Epics/features amended:** EP-01, EP-06, EP-09, EP-11, EP-12; FE-056.
- **Read, not edited:** Doc 01, 02, 03, 06, 07, 08.
</content>
</invoke>
