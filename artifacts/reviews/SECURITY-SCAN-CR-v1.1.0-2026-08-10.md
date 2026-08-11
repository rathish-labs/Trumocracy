# Independent Security Scan — CR-v1.1.0 Change Request (design/requirements phase)

```
Scan ID:       SEC-TRUMOCRACY-CR-2026-08-10
Scanner:       reviewer-qa (independent approver — read-only on all code and docs/)
Date:          2026-08-10
Scope:         Requirements/design phase only — no feature code exists yet for Changes 1, 6, 7.
               Targets: FR-062/FR-063/DES-064/SCR-21/OI-13 (Change 1 — public profiles)
                        FR-069/FR-070/DES-069/DES-070/ADR-017 (Change 6 — enrolment circuit)
                        FR-071/FR-072/DES-071/ADR-018/RISK-22..24 (Change 7 — recovery flow)
               Documents read: Doc 02 v1.1.1 · Doc 03 v1.1.1 · ADR-015..018 ·
                                Doc 05 v1.1.2 (US-0071..0083) · Doc 08 v1.1.2 ·
                                prior scan SECURITY-SCAN-2026-08-09.md · reviewer-qa-2026-08-09T0600.md
Method:        Requirements and design analysis — attack modelling against specification text;
               no code execution (no code exists for these changes yet).
Findings:      1 critical · 4 high · 5 medium · 2 low
Overall:       DO NOT RE-AFFIRM Gate 1 at Doc 02 v1.1.0/v1.1.1 without resolving SC-01
               and the OI-13 governance decision (SC-02/SC-03). Route all findings to the
               architect (SC-01, SC-04, SC-07, SC-08, SC-11) and product-owner (SC-02, SC-03,
               SC-06). Route SC-05, SC-09, SC-10, SC-12 to architect.
```

---

## 0. How to read this

This is a specification and design attack. I identify attack paths against the intended
guarantees using only the documents named in the scope above. A finding means: "if the
system is built as currently specified, this attack is possible." No fix is implemented
here; recommendations describe what the specification must say to close the finding.

Section 6 lists what I attacked and could not break — the absence of findings there is
evidence of scrutiny, not absence of scrutiny.

## 1. Critical

### SC-01 — Enrolment circuit trust anchor absent from public-signal vector and issuer data model; single CIRCUIT_ENROL constant incompatible with multi-adapter trust-anchor diversity; defeats Sybil resistance

**Affects:** Change 6 — FR-069, FR-070, DES-069, DES-070, ADR-017
**Affected requirement/design IDs:** FR-069, FR-070, FR-001, BR-006, NFR-004, DES-069, DES-070, ADR-017

**Attack in concrete steps.**

ADR-017 specifies that each adapter's enrolment circuit verifies the credential's signature
against the issuing trust anchor (eIDAS trust-list key, ICAO document-signer certificate,
Aadhaar attestor key). For this check to be meaningful, the chain must be able to verify
that the prover used the CORRECT trust anchor for the claimed issuer — not any key pair the
prover generated.

Step 1. SDD §5.4 specifies the enrol() API as:
  enrol(issuerId, proof, [Ni, C, issuerId, namespaceId]) — four public signals.
  The trust anchor public key (or its hash) is NOT in this signal vector.

Step 2. SDD §5.3 issuer data model:
  issuers: issuerId -> {active, credentialClass, stateOperated, tier, operator, epochCap, metadataURI}
  There is no trustAnchorHash, verifierAddress, or adapter-contract field. The trust anchor
  lives only in metadataURI, which is off-chain and unenforceable by the contract.

Step 3. SDD §5.4 calls VerifierRegistry.verify(CIRCUIT_ENROL, proof, ...) — a single circuit
  identifier for all enrolment proofs. ADR-017 specifies three adapter classes (eIDAS ECDSA/BLS,
  ICAO RSA-2048 SOD, Aadhaar RSA-2048), each requiring a DIFFERENT Circom circuit with a
  different proving key and ceremony. A single CIRCUIT_ENROL constant cannot simultaneously
  serve all three. DES-070's ICredentialAdapter.getVerifierAddress() implies per-adapter
  verifiers exist, but the issuer struct has no link from issuerId to a verifier address.
  The contract has no way to know which verifier to use for a given issuerId.

Step 4 — Attack path A (no trust anchor on chain): If the trust anchor is a private witness
  rather than a public signal, any prover can substitute any private key of their choice
  (K_attack) as the "trust anchor." They produce a fake credential signed with K_attack,
  supply K_attack as the private witness, and the circuit verifies "credential signature is
  valid against supplied trust anchor." The contract sees a valid proof against a registered
  circuit. It cannot distinguish "correct trust anchor for this issuer" from "attacker-chosen
  key." Result: unlimited synthetic identities enrolled with no real credential.

Step 4 — Attack path B (single CIRCUIT_ENROL, multiple adapters): If one adapter's circuit
  has a completeness bug, a prover can submit a proof generated for adapter class X while
  claiming issuerId Y (which uses adapter class Z). Because the verifier lookup does not key
  off the adapter class (the issuer struct has no verifierAddress), the chain cannot enforce
  "this issuerId must use this specific circuit." A forged proof from one adapter class is
  accepted under any issuerId.

Consequence: every Sybil-resistance guarantee in the platform (BR-006, NFR-004, FR-001,
FR-002) rests on the enrolment circuit being unforgeable. Path A voids that guarantee
entirely. Path B allows cross-adapter confusion that weakens it structurally. Neither attack
requires breaking Poseidon or Groth16.

Prior context: H-08 ("enrolment circuit does not exist") and C-03 ("circuit/contract arity
disagreement") from the 2026-08-09 scan are still open and are distinct from this finding.
SDD §10.1 STRIDE has no row for "enrolment proof uses wrong trust anchor."

**Recommendation.**
1. Add trustAnchorHash (bytes32) to the issuer struct in Doc 03 §5.3. Populate at
   registerIssuer time via the timelock-governed process.
2. Change the enrol() signal vector to include the trust anchor commitment as a public
   signal: [Ni, C, issuerId, namespaceId, trustAnchorHash]. The contract checks
   trustAnchorHash == issuers[issuerId].trustAnchorHash on-chain.
3. Remove the single CIRCUIT_ENROL constant. Resolve the verifier per adapter: either
   (a) CIRCUIT_ENROL_[CLASS] per adapter class, looked up from the issuer's credentialClass
   field, or (b) look up adapters[issuerId].verifierAddress and call that verifier directly.
   DES-070's ICredentialAdapter.getVerifierAddress() is the right shape — wire it through
   to the enrol() dispatch logic in the specification.
4. Specify in ADR-017 that the trust anchor's public key commitment is a public input to
   each adapter class's circuit, and that the ceremony is conducted against the then-current
   trust anchor for that issuer class.

---
## 2. High

### SC-02 — FR-062 public profile + H-06 identityCommitment linkage creates a full political dossier oracle; NFR-002 conflict unacknowledged in OI-13 or SDD §18; no RISK-## entry covers this attack

**Affects:** Change 1 — FR-062, DES-064, SCR-21, OI-13
**Affected IDs:** FR-062, FR-063, NFR-001, NFR-002, NFR-024, BR-009, DES-064, OI-13

**Attack in concrete steps.**

Step 1. FR-062 requires a per-citizen public profile showing: ballot participation (direction
  withheld), current and historical party memberships, endorsed petitions, authored proposals,
  and attended debates. The profile is keyed to a per-person identifier.

Step 2. Any profile implementation must associate a public profile address or URL with the
  person's identityCommitment, because identityCommitment is the key by which participation
  events are indexed on-chain.

Step 3. Finding H-06 (prior scan, acknowledged in SDD §10.2 as "known, accepted design
  residual"): identityCommitment = Poseidon(identitySecret) is published at enrolment AND
  indexed in every Joined/Proposed/Enrolled event.

Step 4. When OI-13 resolves in favour of shipping FR-062 (option 2: amend NFR-001/NFR-024
  to carve out the profile), the profile page will explicitly link:
  (a) the person's display identity (the profile URL or handle)
  (b) their identityCommitment (the indexer must use it as the key)
  (c) every Joined event for that identityCommitment -> all party memberships, past and present
  (d) every Proposed, Endorsed, DebateAttended event -> complete political activity history

Step 5. A GOV_EID issuer who can compute the person's identityCommitment (via SC-04 below)
  now has a direct lookup into the public profile. The issuer can, without any compulsion or
  cooperation from Trumocracy, build a complete political profile of every enrolled credential-
  holder: which party they belong to, which petitions they endorsed, which elections they voted in.

Step 6. NFR-002 conflict (not acknowledged in OI-13 or SDD §18): NFR-002 requires "every
  published action MUST be indistinguishable among at least k=1,000 eligible actors in the
  same scope." A profile that says "this person participated in ballot X" makes that person's
  action distinguishable — not among 1,000 people but from exactly one named profile. NFR-002
  is violated for every action on the profile. OI-13 acknowledges conflicts with NFR-001 and
  NFR-024 but not with NFR-002. SDD §18 also omits the NFR-002 conflict.

Step 7. No RISK-## entry covers the "profile enables political dossier construction" attack.
  RISK-06 (deanonymisation via correlation) lists the k=1000 floor as the mitigation. The
  k=1000 floor is precisely what the profile makes irrelevant for any profiled person.

**Recommendation.** Before Gate 1 re-affirmation on v1.1.0/v1.1.1, present the human approver
with the explicit security consequence of each resolution option:
- Option 1 (remove FR-062): NFR-001, NFR-002, NFR-024 remain intact.
- Option 2 (approve FR-062, amend NFRs): add a RISK-## entry documenting: (a) government eID
  issuers can reconstruct a complete political dossier of enrolled credential-holders without
  compulsion; (b) k=1000 anonymity protection is voided for profiled persons; (c) NFR-002 is
  inapplicable to the profile surface by design. These must be explicit accepted consequences.
- Option 3 (authenticated-only view): specify in FR-062 and DES-064 how the profile prevents
  linkage of the display identity to identityCommitment (no such design element exists yet).
Until the approver records a decision, DES-064 and the participation_profile flag MUST remain
off above dev (the gate is already working — this finding confirms it is necessary).

---

### SC-03 — Participation records across multiple proposals expose voter-set membership, violating NFR-002 anonymity floor; enables harassment targeting in violation of NFR-024

**Affects:** Change 1 — FR-062, NFR-002, NFR-024
**Affected IDs:** FR-062, NFR-002, NFR-024, BR-009, DES-064, DES-086

**Attack in concrete steps.**

Step 1. FR-062(a): the profile shows "the list of ballots and elections in which they
  participated, without revealing their ballot direction."

Step 2. NFR-002: "Every published action MUST be indistinguishable among at least k=1,000
  eligible actors in the same scope." Without a profile, each voter's participation is
  indistinguishable — one cannot know if a specific member voted on a specific proposal.

Step 3. With FR-062: the profile for member A explicitly states "A participated in ballot Y."
  A's action is now distinguishable — from one named profile, not indistinguishable among
  1,000 eligible actors. NFR-002 is violated for every profiled action.

Step 4 — Clustering attack: Over many proposals, an observer builds a matrix of "who voted
  when." Members who consistently co-vote (both participate in the same subset of ballots) are
  identifiable as a political bloc. This enables:
  (a) Identification of political blocs within a party
  (b) Pre-vote social pressure targeting: known bloc members can be identified before future votes
  (c) NFR-024 anti-harassment violation: "no feature MUST expose a member's activity pattern to
      another member." A participation history IS an activity pattern by definition. SDD §18
      states this explicitly — it is listed as a governance question, not a security finding.

Step 5 — Absence as information: if the profile shows "person X participated in Y and Z," it
  implies "X did NOT participate in the others." In small parties with published membership
  counts, absence can be as identifying as presence in some ballot configurations.

**Recommendation.** If the human approver approves FR-062 under any option: require the
architect to redesign DES-064 so that "participated in ballot X" is not published per
individual. An aggregate such as "this person voted in N of M ballots in the last 12 months"
satisfies accountability without enabling activity-pattern attacks. If per-ballot participation
must be disclosed, add a RISK-## entry documenting that NFR-002 is waived for this surface and
extend DES-086's harassment metric to cover profile-based targeting.

---
### SC-04 — GOV_EID issuers can compute enrolment nullifiers from their own records, reconstructing the complete political activity history of any enrolled credential-holder; SDD §3.2 trust-boundary claim is incorrect

**Affects:** Change 6 — FR-069, FR-070, ADR-017, DES-069
**Affected IDs:** FR-069, FR-070, NFR-001, BR-009, ADR-017, DES-069, SDD §3.2, RISK-07

**Attack in concrete steps.**

Step 1. ADR-017: enrolmentNullifier = Poseidon(stable_id_secret, enrolment_scope)
  where enrolment_scope = keccak256("enrol", chainId, PersonhoodRegistryAddress).
  The enrolment_scope is a public constant visible to anyone.

Step 2. A GOV_EID issuer retains stable_id for each credential holder — that is the purpose
  of a stable personal identifier. The issuer has this value.

Step 3. The issuer computes Poseidon(stable_id_of_person_P, enrolment_scope) for each
  credential-holder P in their database. This is a single hash computation per person.

Step 4. The issuer looks up each computed value against the on-chain set of enrolled
  nullifiers. A match means "person P enrolled in Trumocracy."

Step 5. For each matched person, the issuer reads the on-chain enrolment event:
  Enrolled(enrolmentNullifier, identityCommitment, issuerId, tier).
  The identityCommitment is in the same event.

Step 6. The identityCommitment is indexed in every Joined, Proposed, Endorsed, DebateAttended
  event (per H-06, acknowledged in SDD §10.2). The issuer now has:
  person P -> enrolmentNullifier -> identityCommitment -> complete on-chain activity history.

Step 7. The issuer has built, without Trumocracy's cooperation and without any legal compulsion,
  a complete political dossier of every enrolled credential-holder: party memberships (past and
  present), every petition endorsed, every proposal authored, every election voted in.

Step 8. SDD §3.2: "B4 EXTERNAL ISSUERS/ATTESTERS... learn a region request, not a party."
  This claim is incorrect. An issuer who retains stable identifiers learns exactly the party
  and full political history of every enrolled user. The STRIDE table's "compelled disclosure
  of the member list -> the list does not exist" mitigation is also weakened: the issuer does
  not need the list; they construct it themselves from their own records.

Step 9. RISK-07 ("State compulsion — a government orders disclosure of the member list")
  partially acknowledges this via "pre-enrolment disclosure of residual exposure via attestors"
  but frames this as compulsion risk. SC-04 is different: the issuer constructs the political
  profile INDEPENDENTLY, with no interaction with Trumocracy at all, and with no compulsion.

**Recommendation.**
1. Correct SDD §3.2: "B4 EXTERNAL ISSUERS/ATTESTERS... know a real identity already; CAN
   compute the enrolment nullifier from their retained stable identifier, derive the
   identityCommitment, and trace the full on-chain activity of any enrolled credential-holder."
   State this as a known residual, not buried in RISK-07's compulsion framing.
2. Add a new RISK-## entry: "GOV_EID issuer self-deanonymization — without compulsion, an
   issuer who retains stable identifiers can reconstruct the complete political activity of
   enrolled credential-holders." Mitigation options for the approver: (a) accept as Phase-1
   residual with pre-enrolment disclosure (lowest cost); (b) require user device to mix a
   device-held secret into stable_id_secret before the Poseidon input, so the issuer's
   stable_id alone does not suffice to compute the nullifier; (c) use a blinded nullifier
   derivation that requires user cooperation to verify (highest security, highest cost).
3. Doc 01 §E3 and the pre-enrolment disclosure MUST explicitly state: "If you enrolled using
   [national eID], the authority that issues that credential can determine that you enrolled in
   Trumocracy and can trace your full participation history from public on-chain records."

---

### SC-05 — No rate limit on recovery re-initiation after ABORTED state; attacker with a stolen credential can mount a permanent voting-disruption grief attack; absent from ADR-018, FR-072, RISK-22/23/24, SDD §11

**Affects:** Change 7 — FR-071, FR-072, ADR-018, DES-071, RISK-22
**Affected IDs:** FR-071, FR-072, ADR-018, DES-071, RISK-22, RISK-23, RISK-24

**Attack in concrete steps.**

Step 1. ADR-018 state machine: PENDING -> ABORTED (active key vetoes) or PENDING ->
  KEY_ROTATED (7 days elapse). Neither FR-071, FR-072, ADR-018, nor DES-071 mentions any
  rate limit, cooldown, or proof-of-work requirement on initiating recovery after a prior
  recovery was ABORTED.

Step 2. An attacker retains access to a victim's government credential (passport, cloned eID,
  database breach). Any of these suffice to compute a ZK proof satisfying the enrolment
  circuit for recovery initiation.

Step 3. Attack loop:
  T=0:    Attacker initiates recovery. System enters RECOVERY_PENDING.
  T=0+:   Victim receives notification. Victim submits RecoveryVeto. System enters ABORTED.
  T=0++:  Attacker immediately re-initiates recovery. System re-enters RECOVERY_PENDING.
          (No rate limit — nothing prevents this.)
  T=7d-d: Victim vetoes again. ABORTED.
  T=7d-d: Attacker re-initiates again.
  -> Indefinitely.

Step 4. Operational consequences:
  (a) Cognitive burden: the victim must permanently monitor for recovery events and veto each
      one within 7 days. With high-frequency re-initiation, this becomes a continuous
      harassment campaign with no protocol-level remedy.
  (b) If the victim is briefly incommunicado (travel, illness, connectivity outage) during any
      re-initiation cycle, they may miss a veto window and lose the account.
  (c) No increasing cost for the attacker: only the gas cost of submitting the recovery proof.
      No attestor review, no cooldown, no proof-of-work.

Step 5. Failure mode absent from:
  - ADR-018 (threat analysis covers only RISK-22/23/24; no grief/rate-limit vector)
  - FR-072 (lists five guards: delay, veto, voting bar, notification, veto window; rate limit
    is not listed)
  - RISK-22/23/24 (no mention of repeated initiation after ABORTED)
  - SDD §11 (no failure-mode row for "attacker re-initiates after ABORTED")

**Recommendation.** Add to FR-072 a sixth guard: "After a recovery attempt is ABORTED, a
minimum cooldown period MUST elapse before the same enrolment nullifier's recovery may be
re-initiated. The cooldown MUST be at least equal to the standard seven-day RECOVERY_DELAY."
Add the corresponding state transition and rate-limit counter to DES-071's state machine in
ADR-018 and SDD §5.3 data model additions. Add a RISK-22 sub-entry or a new RISK-## for the
grief vector. A cooldown of 14 days (2x the delay) makes continuous griefing substantially
more costly and gives any victim a 14-day window between forced veto events.

---
## 3. Medium

### SC-06 -- Timing/ordering/tally-delta side channels; SDD s10.2 bundler-pool SHOULD not MUST

**Affects:** Change 1 -- FR-062, FR-063, NFR-001, DES-064, SDD s10.2

FR-063 prohibits ballot direction disclosure through any interface. However the on-chain record
exposes the TIMING of nullifier spending. If a profile associates a person with a ballot, and the
log shows one scope-nullifier spent for keccak(vote,partyId,proposalId) at time T, the association
is observable. SDD s10.2 says the client SHOULD submit through the ERC-4337 bundler pool -- SHOULD
is insufficient when FR-063 states a MUST guarantee. In low-traffic windows, even a bundler batch
of 2-5 transactions provides weak anonymity. On-chain tally deltas are observable: after each batch
the tally counter increments. Combined with profile participation disclosure, direction can sometimes
be inferred by subtraction in small proposals.
Recommendation: Change SDD s10.2 bundler-pool submission to MUST for all ballot-related actions.
Add a minimum batch size requirement (at least 50 transactions per batch) or a fixed delay window.
State in FR-063 that the direction-withheld guarantee depends on this MUST mitigation.

---

### SC-07 -- ICAO MRZ DocumentNumber low entropy enables targeted pre-image; ADR-017 no entropy floor

**Affects:** Change 6 -- FR-070, ADR-017, DES-069, NFR-004

For ICAO Doc 9303 adapters, many states use 9-character alphanumeric document numbers with format
constraints: effective search space as low as 10^6 to 3x10^9 values per issuing state. An entity
that already knows a specific document number (government authority, database-breach holder, or an
issuer per SC-04) can compute Poseidon(known_doc_num, enrolment_scope) in microseconds and look up
the result against the enrolled nullifier set. ADR-017 specifies no minimum entropy floor, no
device-secret mixing, and no pre-processing step before Poseidon for adapters with constrained
stable-identifier spaces.
Recommendation: ADR-017 and FR-070 must specify that where the document number has constrained
format, the circuit MUST mix in a device-held random secret before hashing:
  stable_id_effective = H(document_number || device_secret)
The device_secret recovery dependency must be accounted for in ADR-018.

---

### SC-08 -- Post-enrolment credential revocation leaves nullifier permanently valid; no revocation-propagation mechanism specified

**Affects:** Change 6 -- FR-069, ADR-017, DES-069, FR-001

FR-069 checks credential freshness at enrolment time only. Post-enrolment revocation leaves the
nullifier in the enrolled mapping permanently. Scenario (a): new credential with the SAME stable
identifier routes correctly through FR-071 recovery. Scenario (b): new credential with a DIFFERENT
stable identifier (possible in some national ID renewal jurisdictions) derives a different nullifier
-- the person appears as a new identity. Scenario (c): ADR-017 specifies no revocation-staleness
limit for the in-circuit freshness check, so a revoked credential may still satisfy the circuit if
the trust list has not been updated.
Recommendation: ADR-017 must specify: (a) revocation-status checking is part of the circuit
freshness check, not just expiry; (b) maximum permissible trust-list staleness; (c) the
different-stable-id renewal case must be handled explicitly -- either as a migration ADR or as a
new-person path with explicit double-enrolment prevention.

---

### SC-09 -- FR-072 notification channel lacks specified security properties; weak channel enables RISK-23 veto suppression at low attacker cost

**Affects:** Change 7 -- FR-072, ADR-018, RISK-23, NFR-016

FR-072 states a notification MUST be sent to the registered channel at recovery initiation.
ADR-018 identifies notification channel compromise as RISK-23. The specification does not define
what a registered channel is, what security properties it must have (E2E encrypted? SIM-swap
resistant?), or whether the channel is set at enrolment time. A channel that is solely an SMS
number can be redirected by a SIM-swap attack costing under USD 20 in many markets. Channel
suppression alone does not defeat the independent veto path, but a victim who does not know a
recovery is in progress must discover it through other means within 7 days.
Recommendation: FR-072 must specify channel security properties: MUST support delivery independent
of the primary device, MUST NOT be solely an SMS number. An alternative is a publicly queryable
on-chain recovery index that any secondary device can poll.

---

### SC-10 -- Sequencer censorship of RecoveryVeto not in RISK-23; NFR-025/ADR-001 liveness conflict (SDD s16 Q7) applies to veto timeliness

**Affects:** Change 7 -- ADR-018, RISK-23, NFR-025, ADR-001, SDD s16 Q7

SDD s16 Q7 acknowledges NFR-025 requires alternative inclusion within 60 min but L1 force-inclusion
takes 12-24 h. A sequencer that censors a RecoveryVeto can delay it by 12-24 hours. A victim who
discovers a recovery on day 6 of the 7-day window and submits a veto that is censored for 24 hours
may miss the mitigation window. RISK-23 discusses notification channel suppression but not sequencer
censorship of the veto transaction itself. ADR-018 independent veto path assumes the transaction
reaches the chain.
Recommendation: ADR-018 must address sequencer censorship of RecoveryVeto explicitly. Either extend
RECOVERY_DELAY to accommodate worst-case L1 force-inclusion latency once Q7 is resolved, or require
SRE monitoring to alert if a submitted RecoveryVeto has not been included within 30 minutes. Add a
RISK-23 sub-entry for this attack vector.

---

## 4. Low

### SC-11 -- Phase-1 adapter circuit audit preconditions unspecified; ADR-017 audit obligation applies only to future adapter classes

**Affects:** Change 6 -- ADR-017, FR-070, DES-070, NFR-009, CON-012

ADR-017 states additional classes require a new ADR with a threat model and audit -- applying to
FUTURE adapters only. The three named Phase-1 adapter circuits (eIDAS ECDSA/BLS, ICAO RSA-2048
SOD, Aadhaar RSA-2048) are each non-trivial ZK circuits implementing different signature schemes.
CON-012 prohibits bespoke unaudited cryptography. NFR-009 (0 critical/high open at Gate 2) likely
covers this implicitly, but the audit obligation is not stated for Phase-1 circuits in ADR-017.
Recommendation: Add to ADR-017: Each adapter-class circuit MUST undergo an independent
cryptographic audit covering signature-verification soundness before the corresponding adapter is
activated in testnet or above. This applies to the three named Phase-1 classes and to all future
classes.

---

### SC-12 -- Post-KEY_ROTATED eligibility and governance rights underspecified; no accepted-residual row in SDD s11

**Affects:** Change 7 -- ADR-018, FR-028, DES-071, SDD s11

After KEY_ROTATION_COMPLETE, the attacker controls the account. The new key can vote in any
proposal for which the member was eligible (snapshot includes identityCommitment) and can join new
parties immediately -- no post-recovery cooldown. This is the accepted residual for RISK-22
succeeding, but SDD s11 has no explicit failure-mode row documenting it.
Recommendation: Add to SDD s11 a row: RISK-22 succeeds -> KEY_ROTATED -> attacker has full
governance rights immediately. Mark as ACCEPTED RESIDUAL -- complete device + channel compromise is
outside the protocol threat boundary.

---

## 5. What I attacked and could not break -- verified sound

The following items are stated explicitly because absence of a finding is evidence of scrutiny.

**Target 1 -- Public profiles:**
- Feature flag participation_profile=off above dev is correctly specified in DES-064 and SDD s5.3;
  the feature cannot ship until OI-13 resolves. The gate is working.
- FR-063 prohibition on ballot-direction disclosure is correctly specified and backed by mandatory
  test obligations (UT-0700, UT-0701). Direction withheld at requirement level is unambiguous.
- The office-holder attribution exception (FR-062/FR-048) is correctly scoped: only office-CAPACITY
  votes are attributed; ordinary-member votes remain anonymous. The boundary is clear.
- SCR-21 is correctly tagged as provisional pending OI-13 resolution.

**Target 2 -- Enrolment circuit:**
- The four universal in-circuit checks in ADR-017 (issuer authenticity, credential freshness,
  region membership, correct derivation) are well-specified and cover the right properties.
- enrolment_scope = keccak256(enrol, chainId, PersonhoodRegistryAddress) correctly prevents
  cross-deployment nullifier replay.
- The stable_id_secret as PRIVATE input requirement is correctly specified: the identifier never
  appears in the public signal vector; only the derived nullifier is published. CON-002 respected.
- ADR-016 GOV_EID class restriction correctly eliminates cross-class double enrolment in Phase 1.
- The deterministic nullifier derivation correctly enables the FR-071 recovery flow.
- ADR-016 credentialClass enforcement (GOV_EID vs AVAILABILITY_ONLY) correctly prevents liveness-
  only attestors from minting enrolment nullifiers (DES-072).

**Target 3 -- Recovery flow:**
- RECOVERY_DELAY = 7 x 86400 seconds is a protocol constant, not configurable. No actor can shorten.
- isInRecovery voting bar is correctly applied to the RECOVERING CREDENTIAL, not the active key.
  The active-key holder retains full voting rights during the delay.
- FR-032 last-ballot-counts correctly applies to the active key during the delay.
- Independent on-chain veto path (RecoveryVeto directly from any device with the active key) is
  correctly specified in ADR-018. Channel suppression alone cannot prevent a veto.
- State machine transitions are mutually exclusive: PENDING->ABORTED and PENDING->KEY_ROTATED
  cannot both occur for the same initiation event.
- No second identity is created on KEY_ROTATION_COMPLETE. FR-071 no-second-identity guarantee is sound.
- RISK-24 (recovery raced against live ballot) is correctly mitigated by the voting bar.
- Membership, tenure, and governance history survive recovery intact. No replay surface is created.

**RISK register -- what the register covers correctly:**
- RISK-22: 7-day economics and veto mechanism correctly analysed.
- RISK-23: notification channel suppression acknowledged; independent veto path correctly stated.
- RISK-24: voting bar as complete mitigation is correct; double-counting cannot occur.

---

## 6. RISK-22..24 register and SDD s11 threat-coverage assessment

**What the register covers adequately:**
RISK-22: stolen-credential takeover with 7-day delay. RISK-23: notification channel suppression
with independent veto path. RISK-24: voting-bar mitigation for ballot-window overlap.
All three core attacks are acknowledged and mitigated at the design level.

**Specific gaps:**

Gap 1 (RISK-22 / SC-05): No entry for repeated recovery re-initiation after ABORTED. The 7-day
economics in RISK-22 assume a single attempt. A persistent attacker can cycle indefinitely.
Neither ADR-018 threat analysis nor SDD s11 includes this failure mode.

Gap 2 (RISK-23 / SC-09): The register identifies notification channel compromise as RISK-23 but
does not specify security properties the registered channel must have. A channel suppressible by
SIM-swap for under USD 20 is not equivalent to an E2E-encrypted channel.

Gap 3 (RISK-23 / SC-10): Sequencer censorship of the RecoveryVeto transaction is not in RISK-23.
The NFR-025/ADR-001 conflict (Q7 in SDD s16) is acknowledged generically but not applied to the
recovery veto specifically.

Gap 4 (SC-01 / SC-04): No RISK-## entry covers (a) the trust-anchor binding gap in the enrolment
circuit or (b) the issuer self-deanonymization attack. The SDD s3.2 trust boundary claim is
actively misleading for the issuer case.

Gap 5 (SC-02 / SC-03): No RISK-## entry covers profile-enabled political dossier construction or
the NFR-002 violation from participation-record disclosure. OI-13 is tracked as a governance
decision but not as a security finding with likelihood/impact scores.

---

## 7. Severity totals

| Severity | Count | Finding IDs                       |
|----------|-------|-----------------------------------|
| Critical |   1   | SC-01                             |
| High     |   4   | SC-02, SC-03, SC-04, SC-05        |
| Medium   |   5   | SC-06, SC-07, SC-08, SC-09, SC-10 |
| Low      |   2   | SC-11, SC-12                      |
| Total    |  12   |                                   |

---

## 8. Routing

| Finding      | Route to                                                                        |
|--------------|---------------------------------------------------------------------------------|
| SC-01 (crit) | Architect: Doc 03 issuer struct trustAnchorHash; signal vector; verifier dispatch|
| SC-02 (high) | Product-owner + Human approver: OI-13 resolution; risk register entry           |
| SC-03 (high) | Product-owner + Architect: NFR-002 conflict; DES-064 redesign if FR-062 proceeds|
| SC-04 (high) | Architect: SDD s3.2 correction; new RISK; ADR-017 amendment; disclosure update  |
| SC-05 (high) | Architect: FR-072 sixth guard; ADR-018 state machine; RISK-22 sub-entry         |
| SC-06 (med)  | Architect: SDD s10.2 SHOULD->MUST; batch-size spec; FR-063 dependency           |
| SC-07 (med)  | Architect: ADR-017 entropy floor; device-secret mixing specification             |
| SC-08 (med)  | Architect + Product-owner: ADR-017 revocation propagation; renewal case          |
| SC-09 (med)  | Architect: FR-072 channel security properties; ADR-018 channel spec              |
| SC-10 (med)  | Architect + SRE: ADR-018 censorship handling; Q7 resolution applied to veto      |
| SC-11 (low)  | Architect: ADR-017 per-Phase-1-adapter audit obligation                          |
| SC-12 (low)  | Architect: SDD s11 accepted-residual row for post-KEY_ROTATED governance         |

---

*reviewer-qa -- independent read-only approver -- 2026-08-10*
*No file under docs/ was written or edited in the production of this report.*
