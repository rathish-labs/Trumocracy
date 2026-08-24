# Architecture & Design Document (SDD) — Trumocracy

```
Document ID:   SDD-TRUMOCRACY
Version:       2.4.1
Status:        Approved
Owner:         Ravi Deshmukh — Principal Architect
Approvers:     Rafael Duarte (Security), Chen Wei (Reliability), Dr. Lena Kowalczyk (Privacy),
               Aisha Nkemdirim (Elections & Voting)
Source:        SRS-TRUMOCRACY v2.8.0
Last updated:  2026-08-23
Changelog:     v2.4.1 (2026-08-23) — Rework (review cycle 1 FAIL, 94%/0C/0H/1M/0L;
               artifacts/reviews/03-architecture-design-sdd-v2.4.0-technical-cycle1.md):
               ISS-01 (Medium) §10.13.2 invariants corrected — "one-person-one-vote per scope"
               overclaim replaced with "one-vote-per-account per scope (v1) /
               one-vote-per-person per scope (v2)" with correct backing descriptions
               (`getProperties().onePersonOneVote = false` for v1; T-06, ADR-025 §(a));
               ADR-024 invariants table row corrected (same distinction); ADR-024
               `isUniqueInScope` semantics row corrected (same distinction). No other changes.
               v2.4.0 (2026-08-23) — v1 identity backing + spam-resistance layer (approver
               directives Rathish, 2026-08-23, Rulings 1–3,
               DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md): §10.13.2 DES-095 v1-backing
               amended — phone-based SMS auth named (FR-132, ADR-025); §10.13.8 added —
               DES-099 spam-resistance layer (phone-intelligence VoIP detection + velocity/
               device anti-fraud; flag-don't-block; FR-133; ADR-025 §(b)); §10.13.7 T-06
               (Charter Rule 1 vs phone-auth) and T-07 (FR-003 PARTIAL vs phone-number
               storage) rows added; §10.13.5 DES-097 ratification note added (Ruling 3 —
               blockchain-as-audit-record RATIFIED; transparency-now/privacy-later); ADR-024
               §(b) amendment note added. ADR-025 registered in §12 (ADR count twenty-four →
               twenty-five; ADR-001..ADR-024 → ADR-001..ADR-025). §15 DES-095 amendment row
               (FR-132) + DES-099 row (FR-133) added. §1.1 counts updated to SRS v2.8.0 (133
               FR / 131 active / 114 Must). Source updated to SRS-TRUMOCRACY v2.8.0.
               v2.3.1 (2026-08-23) — Rework (review cycle 1 FAIL, 90%/0C/1H/1M/1L;
               artifacts/reviews/03-architecture-design-sdd-v2.3.0-technical-cycle1.md):
               ISS-01 (High) §15 DES-098 row corrected — FR-130 was wrong (FR-130 = provisional-
               party membership cap; FR-131 = v1 honesty notice MUST, minted by PO, Doc 02
               v2.6.0, 2026-08-23); §15 DES-095 row FR range corrected (FR-121..130 →
               FR-121..129; FR-130 has no logical connection to IEligibilityVerifier seam);
               ADR-024 Traces section corrected (FR-121..FR-129, FR-131 in place of
               FR-121..FR-130); ISS-02 (Medium) §10.13.6 DES-098 "Backs" placeholder replaced
               with actual FR-131 reference; §18 C-02 closure note corrected — removed incorrect
               claim that "FR-130 backs the SCR-13/SCR-14 disclosure obligation" (FR-130 = cap,
               FR-131 = honesty notice, separate mintings); ISS-03 (Low) §10.13.7 legend added
               defining (i)/(ii)/(iii) notation. Source-pin: v2.5.0 → v2.6.0; §1.1 counts
               updated to SRS v2.6.0 (131 FR / 129 active / 112 Must). No other content changed.
               v2.3.0 (2026-08-23) — v1/v2 delivery-architecture split (approver directive
               Rathish, 2026-08-23): §10.13 added — v1/v2 architecture split, abstraction
               seams (IEligibilityVerifier DES-095, IBallotService DES-096), v1 conventional-
               auth backing (DES-097), v1 package disposition table, v1 honesty notice
               (DES-098, backs "FR — to be minted by PO this session"); Charter-layer conflict
               table (T-01..T-05, for approver's decision); ADR-024 registered in §12 (ADR
               count twenty-three → twenty-four; ADR-001..ADR-023 → ADR-001..ADR-024); §15
               DES-095..DES-098 traceability rows added. Two cascade items: (i) §18 C-02
               closure annotation applied — PO decided: accept, FR-130 minted (Doc 02 v2.5.0,
               DECISIONS-2026-08-22-WIREFRAME-C01-C02.md); (ii) ADR-016 amendment-block item
               (c) citizen-exclusion sentence added (ISS-01 from v2.1.4 deferred review
               cycle). §1.1 counts updated to SRS v2.5.0 (130 FR / 128 active / 111 Must).
               Source updated to SRS-TRUMOCRACY v2.5.0. No DES additions beyond DES-095..DES-098.
               v2.2.1 (2026-08-22) — Rework (review cycle 1 FAIL, 84%/0C/0H/2M/3L):
               ISS-01 §10.12.1(b) SCR coverage corrected (16 of 23 covered / 7
               uncovered, not 8/8); ISS-02 §10.12.4 Wireframe→SCR row for screen 3.4
               corrected to SCR-14 (partial) and §10.12.5 class (i) row revised (SCR-14
               partial coverage; remaining DES-063/FR-055 debt noted); ISS-03 changelog
               §18 entry count corrected to three (C-01..C-03); ISS-04 §10.12.3
               leak-check extended with 14th inline `.privacy pub` element on screen 3.6
               (wireframe line 450; self-view preview, not a component instance); ISS-05
               DES-094 normative binding clause 6 added (FR-124(e) no retroactive
               linkage, FR-086). No DES/ADR additions; no §15/§16/§18 structural changes.
               v2.2.0 (2026-08-22) — Design-system formalisation (approver directive
               Rathish, 2026-08-22; wireframe design/wireframes/index.html): §10.12
               added — assessment verdict, design token set (DES-093), privacy-status
               component (DES-094, three states, normative FR-124 privacy binding +
               leak-check PASS), SCR↔wireframe mapping table (15 screens × 23 SCRs),
               design-debt register (class i: 5 screens; class ii: 3 required absent
               screens), conflict register (C-01..C-04). ADR-023 registered in §12
               (design system & privacy-status signature element for packages/ui). §15
               DES-093/DES-094 traceability rows added. §16 Q11–Q14 open questions
               added. §18 three new entries (C-01 Aadhaar button hardcoding; C-02
               100-member cap unbacked; C-03 finance ledger screen absent); C-04
               ("illustrative threshold") is a confirmed-no-conflict disposition in
               §10.12.6 only, not a §18 contradiction. Referent correction applied: approver attributed
               verified-status-privacy ruling to "OI-19" — corrected to FR-124 ruling
               (Doc 02 v2.3.1, Rathish, 2026-08-20); OI-19 is the invite-gating ruling
               (FR-125); mislabel noted in architect memory note. §12 preamble ADR count
               twenty-two → twenty-three; ADR-001..ADR-022 → ADR-001..ADR-023. No
               changes to §1.1 counts; no changes to §9 repository structure.
               v2.1.5 (2026-08-21) — Ceremony-burden correction per REC-1/REC-2
               (DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md): ADR-022
               (Groth16-Phase-1 commitment — near-irreversible Charter-adjacent;
               PPoT Hermez reused at ~$0; assurance-based per-circuit phase-2; Gate-2
               six-circuit set) registered in §12; ADR-005 §12 row amended (Decision-2
               "≥ 500 contributors" convention superseded by assurance-based sizing per
               ADR-022; ceremony transparency/transcripts/beacon unchanged). §12 preamble
               ADR count twenty-one → twenty-two; ADR-001..ADR-021 → ADR-001..ADR-022.
               Doc 04 §Z6 ceremony-burden line corrected (v1.0.1 → v1.0.2). No DES
               additions; no §1.1 count change (already SRS v2.4.0; 129 FR / 127 active /
               110 Must).
               v2.1.4 (2026-08-20) — Registration-only: OI-19 and OI-20 closed (Rathish,
               2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md). ADR-016 amended (OI-20
               ruling: FR-004 satisfied at architecture level; Phase-1 single-rail dated
               deployment limitation with Phase-2/eIDAS exit; 50% cap inoperative Phase-1;
               permanence requires Charter-layer re-entry — FR-129). ADR-021 amended (OI-19
               closed: FR-125 finalised, non-invite fallback mandatory; OI-20 closed:
               FR-004 architecture-level satisfaction, FR-129). §12 ADR-016 and ADR-021
               rows updated with dated amendment notes. §16 next-increment scope extended
               to FR-121..FR-129; tier-determination debt for FR-129 registered. §1.1
               counts updated to SRS v2.4.0 (129 FR / 127 active / 110 Must). No DES
               additions.
               v2.1.3 (2026-08-20) — Cycle-1 review rework
               (03-architecture-design-sdd-v2.1.2-technical-cycle1.md): ISS-01 preamble ADR
               count twenty/ADR-001..ADR-020 → twenty-one/ADR-001..ADR-021; ISS-02 §1.1 SRS
               citation updated to v2.3.0 counts (128 FR / 126 active / 109 Must / 15 CON);
               ISS-03 §12 ADR-016 and ADR-017 rows annotated with 2026-08-20 amendment notes
               (Phase-1 pilot rail named: India/Aadhaar offline KYC; OI-04-PILOT closed —
               ADR-021); ISS-04 ADR-021 "Decision 4" section retitled "Alternatives rejected"
               per ADR-016/017 house style (content unchanged). No DES additions.
               v2.1.2 (2026-08-20) — ADR-021 (verification-gates-counting) registered in §12;
               §16 next-increment scope note extended to include FR-121..FR-128 (DES coverage
               owed) and OI-19/OI-20 (approver-pending inputs to that increment); Source
               updated to SRS-TRUMOCRACY v2.3.0. No DES additions; no design content changed.
               v2.1.1 (2026-08-11) — Cycle-1 rework: ISS-01 §5.3 TrustAnchorLifecycle enum
               adds ROTATION_ABORTED state; ISS-02 sweep table row 4 citation corrected from
               publishOperationalReport §5.4 to FR-115(d)/NFR-019; ISS-03 DES-092 Tech column
               submitCitizenAuditRef → publishAuditRef (single entry point); ISS-04 §12
               ADR-019/020 rows note 2026-08-11 amendments; ISS-05 ADR-020 body state-machine
               diagram adds ROTATION_PENDING → ROTATION_ABORTED → ACTIVE path.
               v2.1.0 (2026-08-11) — Security-scan rework (SECURITY-SCAN-DOC03-V2-2026-08-11.md;
               approver directives Rathish 2026-08-11): SC-15 ProtocolGovernance + StewardRegistry
               designated IMMUTABLE CORE (§5.1, DES-087 general rule + routing surface exclusions);
               SC-16 per-constant Amendment Layer column + anti-circularity rule + setter mechanism
               (§10.11, DES-091); SC-17 citizen-initiated publishAuditRef fallback after
               STEWARD_INACTION_WINDOW=60 days/vacancy-immediate (DES-092, §5.4, §5.6, ADR-019
               amended); SC-18 abortRotation() + ROTATION_ABORTED state (DES-090, §5.4, §5.6,
               ADR-020 amended); SC-19 issuer-onboarding coordination citizen fallback (DES-092);
               SC-20 Guarded Layer quorum denominator = snapshotRoot enrolled count (DES-087,
               §10.11); SC-21 STRIDE undiscovered-bypass residual updated with SC-15 general-rule
               mitigation (§10.1); STEWARD_INACTION_WINDOW constant added to §10.11; single-
               point-of-progress sweep table added (§11); §18 SC-15..SC-21 scan-response entries.
               DES-092 minted.
               v2.0.3 (2026-08-11) — Cycle-3 rework: NN-01 §10.11 ordinary-revocation-timelock
               row corrected (enrol() continues until anchorEffectiveAt; not blocked at
               enactment); exhaustive sweep — 12 hits reviewed, 1 non-conforming fixed.
               v2.0.2 (2026-08-11) — Cycle-2 rework: NI-01 revocation-timing contradiction
               fixed at §5.2 DES-090 and §11 FR-112 row (REVOCATION_PENDING at enactment is
               on-chain signal; enrol() continues until anchorEffectiveAt; that window is
               RISK-30 residual); NI-02 §14 P4-growth-surge sub-case (a) "token transfer"
               corrected to "membership join/enrolment" (no tokens — ADR-007); NI-03 preamble
               ADR count eighteen/ADR-001..018 → twenty/ADR-001..020.
               v2.0.1 (2026-08-11) — Cycle-1 review rework (7 fixes): ISS-01 corrected
               emergency revocation voting bar from Guarded Layer (80%/25%) to Open Layer
               governance bar (60%/15%) in §10.1 DoS row and §10.11 emergency revocation row,
               with ACTIONS-vs-AMENDMENTS disambiguation note; ISS-02 ADR-019 property list
               renumbered to match OI-18's five verbatim-in-substance (growth-surge = P4,
               inter-vote window = P2), quorum explicitly marked as additional design
               requirement beyond OI-18 minimum, §14 growth-surge test hook added; ISS-03
               added SC-13 post-registration compromise sub-entry to §10.1 STRIDE Spoof
               (emergency revocation as mitigation, RISK-30 as residual); ISS-04 layer-naming
               rename throughout: Charter Layer / Guarded Layer / Open Layer replaces bare
               Tier-1/2/3 amendment-boundary labels across §5.2/5.3/5.4/5.6/10.1/10.11/
               11/14/15/16/17/18 and both ADRs, with §10.11 disambiguation note and §17
               Glossary entry distinguishing party T0..T3 tiers from platform amendment layers;
               ISS-05 §1.1 Must count corrected 97 → 101; ISS-06 changelog stale phrasing
               removed; ISS-07 anchor-rotation staleness SLA row added to §10.11 (30-day
               maximum from issuing authority announcement to on-chain vote open).
               v2.0.0 (2026-08-11) — Four-area increment directed by OI-18-DECISION-2026-08-11
               and GATE1-DECISION-2026-08-11: (A) FR-118/FR-119 amendment boundary — Charter
               Layer entrenched charter (seven rules, fork-only), Guarded Layer named-absolutes
               super-process, Open Layer ordinary path; (B) SC-13/SC-14 trust-anchor lifecycle
               — revocation and rotation specified, both findings closed at design level;
               (C) OI-17 governance constants table (§10.11) — values set with rationale,
               normative for Design; (D) DES elements for steward area FR-114..FR-120;
               DES-087..DES-091 minted; ADR-019 and ADR-020 written. Next-increment scope
               (recorded not hidden): full DES coverage of remaining v2.x requirement areas
               (FR-074..FR-111 beyond existing DES-064..DES-086) is the next design increment.
               v1.1.0 (2026-08-10) — CR-v1.1.0 nine-requirement update; DES-064..086 minted
               for FR-062..073 and 15 tester-identified RTM gaps; ADR-015..018 minted;
               ADR-003 amended by ADR-016 (cross-referenced in both files); §5.3 data model
               completed (proposal snapshotRoot, fork-initiation state, attester operator
               field); §5.4 signal arity corrected and missing entrypoints added; §10.1
               STRIDE extended (Governor.execute EoP row, attester-impersonation row);
               §10.2 identityCommitment cross-context linkability stated explicitly;
               §11 RISK-22/23/24 failure modes added; §9 CI topology added; §13 growth-sample
               liveness consequence corrected; §18 contradiction record added (OI-13 design
               consequence). Addresses all critical/high/medium findings from review cycle 1
               (artifacts/reviews/03-architecture-design-sdd-v1.0.0-technical-cycle1.md).
               OPEN-16 (stray ADR-017 references) resolved by engineer before this version.
               v1.1.1 (2026-08-10) — ISS-01/02/03/04 from cycle-1 technical review
               (artifacts/reviews/03-architecture-design-sdd-v1.1.0-technical-cycle1.md):
               added `snapshotAt` to vote() public signals (5-signal arity: index 0 =
               snapshotRoot, index 1 = snapshotAt); MUST checks rewritten in indexed form;
               §10.3 aligned to DES-078 (p95 interactive ≤ 5 s, removes contradicting 3 s
               figure); DES-068 party-switch exclusion stated explicitly (FR-064 clock reset
               not excused by destination-party waiver); RFC 2119 keywords added throughout
               §10.3–§10.9.
               v1.1.2 (2026-08-10) — SC-01 (critical; SEC-TRUMOCRACY-CR-2026-08-10): added
               `trustAnchorHash` (bytes32) and `verifierAddress` (address) to issuer struct
               (§5.3); enrol() signal vector expanded to 5 signals [Nᵢ, C, issuerId,
               namespaceId, trustAnchorHash]; on-chain MUST check added:
               `publicSignals[4] == issuers[issuerId].trustAnchorHash`; per-adapter-class
               verifier dispatch via `issuers[issuerId].verifierAddress` replaces single
               CIRCUIT_ENROL constant (`personhood_enrol_[class]`); DES-069 updated (trust-
               anchor commitment is a public input, checked on-chain); DES-070 updated
               (`verifierAddress` is the dispatch target for `enrol()`); Spoofing STRIDE row
               added (enrolment proof with attacker-chosen trust anchor); ADR-017 amended
               (per-class circuits/verifiers; trust anchor as public input to each adapter
               class's circuit).
```

> **Based on:** arc42 + C4 + Google design doc + IEEE 1016. **Produced in:** Design.
> The twenty-five decision records in `docs/adr/ADR-001..ADR-025` are normative and are
> summarised in §12; where this document and an ADR disagree, the ADR wins and this document
> is the defect.

---

## 1. Introduction & goals

### 1.1 Requirements overview

Trumocracy lets any verified citizen originate a political party, gather demonstrated public
support, and — on reaching a coded threshold — operate that party under rules that no
founder, financier or platform operator can override. The SRS v2.8.0 defines 21 `BR`, 133 `FR`
(131 active + 2 superseded; 114 Must), 28 `NFR` (24 Must), 15 `CON`, and 27 `RISK`. The
requirements that shape this architecture more than any others:

| ID | Requirement | Architectural consequence |
|---|---|---|
| BR-006 / NFR-004 | one real, unique human per participant | personhood is the **security boundary**, not a feature (ADR-003, ADR-016, ADR-017) |
| BR-009 / NFR-001, NFR-002 | proving identity must not expose identity | everything citizen-facing terminates in a ZK proof; k ≥ 1000 anonymity floor is checked on-chain (ADR-004, ADR-005) |
| BR-011 / NFR-003 | receipt-free, coercion-resistant voting | MACI with a threshold coordinator committee (ADR-006) |
| BR-010 | wealth must not buy influence | **no transferable instrument of any kind exists** (ADR-007) |
| BR-012 | resist flash takeover and mob charter capture | tiered decisions, snapshot eligibility, adaptive quorum, entrenchment, fork rights (ADR-008) |
| BR-008 | governance executes in code, not by discretion | immutable core; no admin, no pause, no proxy (ADR-010) |
| NFR-005 | median citizen action < USD 0.01 | Ethereum L2 + sponsored ERC-4337 (ADR-001, ADR-002) |
| NFR-022 / NFR-011 / NFR-012 | usable by a non-technical citizen on a 2 GB Android | passkeys, no seed phrase, no gas token, PWA, in-browser proving (ADR-002, ADR-012) |
| CON-003 | no single trusted operator, admin key or pause switch | the capability is *absent*, and its absence is tested (§10.1, §14) |

### 1.2 Quality goals (the five that shaped the architecture)

1. **Unlinkable participation** (NFR-001/002) — the system must be unable to answer "what is
   this person's politics", including under legal compulsion, including to us.
2. **Receipt-freeness** (NFR-003) — a voter who *wants* to prove their vote must fail.
3. **Non-purchasability** (BR-010) — no path converts money into governance power.
4. **Sub-cent participation** (NFR-005) — cost is a legitimacy property, not a performance one.
5. **Operator powerlessness** (CON-003, NFR-025) — no actor, ourselves included, can stop,
   alter or reverse a party's decision.

Where these conflict, the resolution order is: **1 and 2 before 3 and 5 before 4**. Privacy
and coercion resistance are never traded for cost or convenience.

### 1.3 Goals and non-goals

**Goals.** Party incubation and petitioning; equal, unapproved membership; tiered internal
governance with real anti-capture properties; region-scoped internal candidate selection and
recall; immutable public manifesto history; a fully transparent, non-influence-conferring
treasury; and an exit path for every party.

**Non-goals — stated so nobody builds them by accident.**
- **Not a state ballot system.** "Election" in this codebase always means an internal party election (CON-001).
- **Not a content moderator.** No political content rule (ADR-013 §4).
- **Not a social network.** No feeds, follows, DMs or engagement metrics.
- **Not a token.** No coin, no NFT membership, no points (ADR-007).
- **Not an identity provider.** We consume attestations; we never issue them (ADR-003).

### 1.4 Stakeholders & concerns
Per SRS §2.7. Dr. Kowalczyk (privacy) holds veto over anything that widens the linkability
surface; Rafael Duarte (security) owns the threat model in §10.1; Nadia Hassan (accessibility)
owns the device and bandwidth floor; Sofia Marchetti (legal) owns the jurisdiction boundary.

## 2. Constraints

| ID | Constraint | Where it binds |
|---|---|---|
| CON-001 | parties only, never state elections | §1.3, ADR-013 |
| CON-002 | no custody of documents, biometrics or addresses | §5.3 deliberately-absent list |
| CON-003 | no admin key, pause switch or privileged role | §5.1 core contracts; capability-absence tests §14 |
| CON-004 | open source, reproducible builds | ADR-011, ADR-012 §4 |
| CON-005 | electoral/political-finance law varies per jurisdiction | treasury jurisdiction-configurable; launch per-region gated |
| CON-006 | no token or fundraising instrument | ADR-007 |
| CON-007 | USD 4.2M / 18 people through launch | phasing in Doc 13 |
| CON-008 | immutability vs erasure rights | ADR-013 §2 |
| CON-009 | third-party population statistics | median + drift limit + verified-resident floor (ADR-004 §4) |
| CON-010 | app-store political restrictions | PWA-first, IPFS/Arweave mirrors (ADR-012 §4) |
| CON-011 | 2 GB RAM / Android 9 / 64 kbit/s floor | caps circuit size at ≤2^17 constraints; caps initial JS at 200 KB |
| CON-012 | no bespoke unaudited cryptography | Circom/Groth16, Semaphore-family, MACI — existing, audited primitives |

## 3. Context & scope (C4 L1)

### 3.1 Business context

```
                    ┌───────────────────────┐
   citizen ────────▶│                       │◀──── personhood issuers (GOV_EID class, Phase 1)
   (phone/PWA)      │      TRUMOCRACY       │      (eIDAS 2.0 wallets · ICAO 9303 NFC chips
                    │                       │       · offline paper KYC adapters — ADR-016/017)
   journalist ─────▶│  petitions · parties  │
   auditor          │  membership · votes   │◀──── residency attesters
   (public read)    │  manifestos · treasury│      (civil registry, utility/KYC, NGOs)
                    │                       │
   election  ◀──────│  (evidence only, via  │◀──── population statistics sources
   commission       │   a human officer)    │      (census, electoral roll, UN, World Bank)
                    └───────────┬───────────┘
                                │
                    Ethereum L2 (settlement) · IPFS + Arweave (content) · L1 (escape hatch)
```

### 3.2 Technical context

| Interface | Direction | Data crossing | Protection |
|---|---|---|---|
| citizen ↔ client | both | identity secret, witness data, proofs | **never leaves the device except as a proof**; enclave-held signing key |
| client → chain | out | proofs, nullifiers, commitments, roots, content hashes | public by design; contains nothing personal |
| issuer → client | in | signed credential | consumed on-device; only a nullifier is ever published |
| attester → chain | out | residency leaf (a Poseidon commitment) | components never transmitted |
| client ↔ indexer | both | public state queries | no logging of reader identity or IP (ADR-014) |
| client → IPFS/Arweave | out | manifesto/proposal/debate-content documents | public, content-addressed |
| stats sources → chain | out | population integers | median of ≥5, 7-day dispute window, ±5%/quarter drift cap |

## 4. Solution strategy

Six decisions carry the design; everything else follows from them.

1. **Put only commitments on-chain.** Roots, nullifiers, tallies and content hashes (ADR-009).
2. **Make personhood pluggable and plural.** GOV_EID class in Phase 1; 1-of-N resumes at Phase 3+ (ADR-003, ADR-016, ADR-017).
3. **Scope every nullifier.** Uniqueness per action, unlinkability across actions (ADR-003, ADR-017).
4. **Remove transferable power entirely.** Not "mitigate flash loans" — *delete the asset* (ADR-007).
5. **Defend the charter with time, thresholds, transparency and exit** — never with privilege (ADR-008).
6. **Build the core with no way to intervene.** No admin, no pause, no proxy (ADR-010, ADR-013 §3).

## 5. Building-block view

### 5.1 Container diagram (C4 L2)

```
┌── apps/web (Next.js PWA) ───────────────────────────────────────────────┐
│  passkey account · WASM prover (Web Worker) · local-first cache          │
│  refuses unknown zkeyHash · verifies indexer claims against chain        │
└───────┬──────────────────────────┬──────────────────────┬───────────────┘
        │ @trumocracy/sdk          │ read                 │ fallback
        ▼                          ▼                      ▼
┌── services/relayer ────┐  ┌── services/indexer ──┐  ┌── L1 force-inclusion ──┐
│ ERC-4337 bundler +     │  │ events → read model  │  │ censorship escape      │
│ paymaster (per-        │  │ NON-AUTHORITATIVE    │  │ hatch, always on       │
│ nullifier rate limit)  │  │ no reader logging    │  └────────────────────────┘
└───────┬────────────────┘  └──────────┬───────────┘
        │                              │
        ▼                              │
┌── Ethereum L2 ─────────────────────────────────────────────────────────┐
│  IMMUTABLE CORE            │  TIMELOCKED REGISTRIES   │  MODULES        │
│  PersonhoodRegistry        │  VerifierRegistry        │  Governor       │
│  RegionRegistry            │  (issuer set)            │  Elections      │
│  PartyRegistry             │  (attester set)          │  Recall         │
│  Party                     │  (population oracle)     │  Treasury       │
│  ProtocolGovernance (SC-15)│                          │  FeatureFlags   │
│  StewardRegistry  (SC-15)  │                          │                 │
│  no admin · no pause · no proxy · no governance-vote replacement (ADR-010; SC-15 general rule) │
└────────────────────────────────────────────────────────────────────────┘
        │ content hashes
        ▼
┌── IPFS (hot, pinned) ──┐   ┌── Arweave (permanent mirror) ──┐
```

### 5.2 Component breakdown

> **SCR assignments (provisional; architect confirms, splits or merges per SRS §5.1):**
> SCR-21 = Participation profile surface (FR-062, FR-063); SCR-22 = Debate scheduling and
> attendance surface (FR-066, FR-067); SCR-23 = Candidate feedback voting surface (FR-065).

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-001 | `PersonhoodRegistry` | issuer set, enrolment nullifiers, scope nullifiers, identity tree | FR-001..005, NFR-004 | Solidity, LeanIMT/Poseidon |
| DES-002 | issuer adapter interface | 1-of-N pluggable personhood proof (ADR-017) | FR-004, FR-070, RISK-05 | `ICredentialAdapter` |
| DES-003 | per-issuer epoch cap | limits blast radius of a compromised issuer | FR-005, RISK-05 | on-chain counter |
| DES-004 | `RegionRegistry` regions | versioned hierarchical codes, ≤ ward granularity | FR-007, NFR-001 | Solidity |
| DES-005 | per-region residency tree | membership-provable residency without addresses | FR-006, FR-008 | LeanIMT/Poseidon |
| DES-006 | attester federation + operator binding | plural, disputable residency issuance; `issueResidency()` requires `caller == attester.operator` (ISS-C3 fix) | FR-006, RISK-05 | stake + slash + operator field |
| DES-007 | population oracle | median of ≥5 sources, 7-day dispute, ±5%/quarter drift cap | FR-009, RISK-12 | Solidity |
| DES-008 | anonymity-set guard (k ≥ 1000) | refuses to publish an action that would identify by elimination | NFR-002 | on-chain check + client escalation |
| DES-009 | `PartyRegistry` petitions | draft → petition → threshold → activation, no human step; name+emblem collision check | FR-010, FR-013..018 | Solidity |
| DES-010 | threshold formula w/ floor | `max(pct×pop, pct×verified, 500)` | FR-016, RISK-12 | Solidity |
| DES-011 | endorsement nullifier scope | one endorsement per person per petition | FR-014, NFR-004 | scoped nullifier |
| DES-012 | endorsement withdrawal | reversible before activation, separately scoped | FR-015 | Solidity |
| DES-013 | `Party` membership tree | join/leave, unconditional, non-transferable | FR-020..023, BR-003 | LeanIMT/Poseidon |
| DES-014 | tenure record | eligibility input only — never a weight | FR-021, ADR-007 §2 | `joinedAt`/`leftAt` |
| DES-015 | growth sampler + `AnomalousGrowth` | detects membership surges | BR-012, RISK-04 | Solidity |
| DES-016 | `GovernanceRules` tier table + tier↔action binding | quorum/approval/tenure/timelock/discussion per tier; `execute()` binds tier to permitted action class (ISS-H1 fix) | FR-025, FR-026 | Solidity library |
| DES-017 | charter ratchet | a charter may be stricter, never weaker | FR-012, RISK-04 | validation on read |
| DES-018 | `Governor` proposals | tiered, snapshotted, discussion-then-voting | FR-024, FR-028 | Solidity |
| DES-019 | snapshot eligibility + root binding | joining after open confers no power; `proposal.snapshotRoot` MUST equal voter's `partyRootAtSnapshot` (ISS-C1 fix) | FR-028, RISK-03/04 | root + tenure at snapshot |
| DES-020 | adaptive quorum | surge ⇒ +5 pts approval, ×2 window (T2/T3 only) | BR-012, RISK-04 | Solidity |
| DES-021 | timelock + permissionless execute | delay proportional to tier; no privileged executor | FR-026 | Solidity |
| DES-022 | entrenched/immutable clauses | a party can bind its future self | FR-027 | founding-time only |
| DES-023 | MACI message queue | encrypted ballots, key-change override | FR-030..032, NFR-003 | MACI + Groth16 |
| DES-024 | threshold coordinator (5-of-7) | no single party can decrypt a ballot | NFR-003, RISK-07 | DKG across jurisdictions |
| DES-025 | tally proof + public verifier | anyone can re-compute the result | FR-033, FR-055 | `apps/verifier` |
| DES-026 | interim-tally suppression | no partial counts before close | FR-034 | client + indexer policy |
| DES-027 | self-nomination only, region-scoped | you may stand only where you live | FR-036 | Solidity |
| DES-028 | candidate consent record | explicit, separate, irreversible-for-term disclosure | FR-037, FR-038 | Solidity + client copy |
| DES-029 | office assignment on close | automatic, no confirmation step | FR-040, FR-041 | Solidity |
| DES-030 | two-stage recall | signature threshold then ballot | FR-042..045 | Solidity |
| DES-031 | manifesto version chain | append-only, diffable, permanently public | FR-046, FR-047 | on-chain hash + IPFS/Arweave |
| DES-032 | attributed office-holder votes | officials vote publicly; citizens vote secretly | FR-048 | Solidity |
| DES-033 | treasury caps + ledger | per-person cap by nullifier, itemised public record | FR-049..052 | Solidity |
| DES-034 | fork with lineage | ≥10% initiators (on-chain counted, ZK-proven), 30-day cooling-off, permanent lineage (ISS-C2 fix) | FR-053, RISK-04 | Solidity |
| DES-035 | event schema for auditors | every governance action emits a public event | FR-054 | Solidity events |
| DES-036 | region freeze on issuance anomaly | quorum freeze pending review | RISK-05, RISK-01 | timelock action |
| DES-037 | `FeatureFlags` on-chain | ship dark applies on-chain, not only in the client | NFR-020 | Solidity |
| DES-038 | `VerifierRegistry` + `zkeyHash` | binds circuits to their published ceremony | RISK-10 | Solidity |
| DES-039 | supersede grace window | an upgrade never invalidates in-flight proofs | NFR-017 | 30-day dual-accept |
| DES-040 | passkey + 4337 smart account | no seed phrase, no gas token, no cryptocurrency concept | FR-058, FR-060, NFR-022 | ERC-4337, RIP-7212 |
| DES-041 | L1 force-inclusion transport | sequencer censorship fallback, wired into the SDK | NFR-014, NFR-025, RISK-09 | `OptimismPortal` |
| DES-042 | social recovery, 7-day timelocked | recover without a recovery company | FR-058, FR-059, NFR-016 | guardians + owner veto |
| DES-043 | paymaster per-nullifier budget | sponsorship cannot be drained by Sybils; exhaustion queues at zero cost | FR-061, NFR-005, RISK-15 | relayer policy |
| DES-044 | party state export | exit right, tested in CI | NFR-018 | SDK + `apps/verifier` |
| DES-045 | pure `@trumocracy/protocol` | reference rules, differentially tested vs chain | NFR-021 | JS, zero deps |
| DES-050 | reproducible static bundle | anyone can verify the served client | NFR-014, RISK-08 | pinned toolchain + hash job |
| DES-051 | multi-transport client | bundler → alt bundler → queue → self-pay (censorship only) → L1 | NFR-007, NFR-014 | SDK |
| DES-052 | client zkey pinning | refuses to prove with an unregistered proving key | RISK-10 | client |
| DES-063 | safe confirmation + panic re-vote | screen safe to show a coercer | NFR-003, RISK-02 | client |
| DES-064 | participation profile surface | per-person public page: ballot participation (direction withheld), party memberships, endorsed petitions, authored proposals, attended debates; MUST NOT ship until OI-13 resolved | FR-062, FR-063, SCR-21 | apps/web; indexer |
| DES-065 | single-party membership nullifier | global scope nullifier `keccak("membership", personhood)` enforces one-party-at-a-time; join-B burns join-A nullifier automatically; tenure clock resets on switch | FR-064 | PersonhoodRegistry |
| DES-066 | candidate feedback scorer | per-candidate-per-election nullifier; upvote +3, downvote −1 (ADR-015); private votes; public tally | FR-065, ADR-015, SCR-23 | Elections; Solidity |
| DES-067 | debate lifecycle | Elections contract: schedule 3 debates per candidate; off-chain content CID on-chain; attendance attestation; post-debate member vote determines candidacy | FR-066, FR-067, SCR-22 | Elections; IPFS |
| DES-068 | tenure waiver flag for new parties | `newPartyWaiverActive(partyId)` = party age < 3 calendar months; waives one-month tenure check only; FR-023 surge defence + FR-028 snapshot remain active. **Party-switch exclusion (FR-064):** a tenure clock reset by a party switch is NOT excused by the destination party's waiver — the waiver covers a party's founding cohort only, not members arriving by switch; a member who leaves party A and joins party B MUST be rejected at `vote()` if fewer than one month has elapsed since joining, unconditionally regardless of party B's age. | FR-068 | Governor |
| DES-069 | in-circuit enrolment nullifier | `Poseidon(stable_id_secret, enrolment_scope)`; universal in-circuit checks: issuer authenticity, freshness, region, correct derivation; trust-anchor commitment is a **public input** to the enrolment circuit and MUST be checked on-chain against `issuers[issuerId].trustAnchorHash` (SC-01); no identifier leaves circuit (ADR-017) | FR-069, ADR-017 | circuits/personhood_enrol_[class] |
| DES-070 | credential adapter interface + registry | `ICredentialAdapter`: credentialClass, namespaceId, verifierAddress; `verifierAddress` is the dispatch target for `enrol()` — per-adapter-class verifier, not a shared CIRCUIT_ENROL constant (SC-01); per-class in-circuit requirements (ADR-017); region-level config, not hardcoded | FR-070, ADR-017 | ICredentialAdapter; PersonhoodRegistry |
| DES-071 | nullifier-collision recovery state machine | RECOVERY_PENDING → veto or 7-day delay → KEY_ROTATED / ABORTED; `isInRecovery` blocks `vote()`; independent on-chain veto path; notification on initiation (ADR-018) | FR-071, FR-072, ADR-018 | PersonhoodRegistry |
| DES-072 | government-eID class enforcement | `credentialClass == GOV_EID` checked at `enrol()`; AVAILABILITY_ONLY issuers reverted with `NotEnrolmentClass` (ADR-016) | FR-073, ADR-016 | PersonhoodRegistry |
| DES-073 | name + emblem collision guard | `PartyRegistry.createPetition` rejects a name or emblem that collides (case-normalised) with any open petition or active party in the same jurisdiction; on-chain name registry | FR-010 | PartyRegistry |
| DES-074 | eight-pillar minimum-substance gate | `PartyRegistry.publishDraft` checks: all 8 pillars present, each ≥ published character floor; named rejection per deficient pillar | FR-011 | PartyRegistry |
| DES-075 | no-transfer invariant (capability absence) | no `transfer`, `approve`, `delegate` or `assign` function exists on Party, Governor, or Elections; ABI-surface assertion enforced in CI | FR-035, ADR-007 | Solidity; CI |
| DES-076 | election scope guard + immutable timetable | Elections contract: `vote()` restricted to members with active residency in the election's region; timetable, candidate set and tie-break rule immutable after `openElection()` | FR-039 | Elections |
| DES-077 | operator-capability absence: no delete/edit/suspend/alter/reorder | no function with those semantics exists in any core contract; verified by ABI-surface assertion (first-class CI test) | FR-056, ADR-010 | Solidity; CI |
| DES-078 | performance budget constraints | initial JS ≤ 200 KB; p95 interactive ≤ 5 s on 4× throttled mid-range Android over Slow 4G; proof ≤ 10 s worst-case on reference device; finalisation on-chain ≤ 120 s p95 | NFR-006 | apps/web; circuits |
| DES-079 | audited-primitive policy + independent pre-Gate-2 audit | CON-012: all privacy/personhood/ballot properties rest on audited constructions; independent security audit with 0 critical/high required before Gate 2 | NFR-009 | all layers |
| DES-080 | data-minimisation schema guard | §5.3 deliberate-absence list is the normative schema; CI checks the on-chain ABI and storage layout for forbidden field names/types | NFR-010 | Solidity; CI |
| DES-081 | WCAG 2.2 AA design constraints | all primary flows meet WCAG 2.2 AA; fully operable by screen reader and keyboard/switch; 200% text scaling | NFR-011 | apps/web |
| DES-082 | device/bandwidth floor constraints | ≤ 15 MB install; every primary flow completable at 64 kbit/s intermittent; offline draft composition with deferred submission | NFR-012 | apps/web; SDK |
| DES-083 | i18n / RTL design constraints | ≥ 8 launch languages; ≥ 1 RTL script; zero untranslated primary-flow strings; date/number/name format localisation | NFR-013 | apps/web; packages/ui |
| DES-084 | legal compliance posture | erasure by non-collection (ADR-013 §2); per-jurisdiction feature gating + legal review before enablement (CON-005); transparency report (FR-057) | NFR-015 | ADR-013; legal review |
| DES-085 | UX writing + jargon filter | grade-8 reading level; no primary-flow occurrence of wallet/seed phrase/private key/gas/token/mint/chain/block/hash; CI scan enforces | NFR-023 | apps/web; packages/ui |
| DES-086 | anti-harassment capability-absence | no identity/contact-detail/location-below-region/activity-pattern surface per member; recall and nomination flows designed without targeted individual notification; absence tested as first-class CI control | NFR-024 | apps/web; Solidity |

**Platform governance & stewardship (v2.0.0 — OI-18 / FR-114..FR-120 / SC-13 / SC-14)**

| ID | Component | Responsibility | Satisfies | Tech |
|---|---|---|---|---|
| DES-087 | `ProtocolGovernance` contract | Three-layer amendment boundary: (Charter Layer / Tier 1) immutable registry of the seven entrenched rules — code rejects any proposal targeting them at submission with no exception path; (Guarded Layer / Tier 2) super-process state machine (five-property enforcement — see §5.6); (Open Layer / Tier 3) ordinary citizen-vote path per NFR-017 and §10.11 constants. GENERAL RULE (SC-15): any contract that enforces a Charter Layer rule MUST itself be Charter Layer — otherwise the entrenchment is decorative. Accordingly, `ProtocolGovernance` and `StewardRegistry` are deployed as IMMUTABLE CORE (no admin, no pause, no proxy, non-upgradeable); they are listed in the §5.1 IMMUTABLE CORE box and inherit the ADR-010 guarantees. The `permittedActionClass` table for Open Layer and Guarded Layer MUST NOT include any selector that: (a) deploys a competing governance contract, (b) upgrades or replaces `ProtocolGovernance` or `StewardRegistry`, (c) redirects the `GovernanceConstants` reference pointer, or (d) calls any setter on `GovernanceConstants` without the layer-appropriate passed vote (see DES-091). No routing surface (proxy/upgrade path, registry pointer, `Governor.execute` action class) may circumvent these contracts. An unamendable contract that can be routed around is no better than an amendable one. QUORUM DENOMINATOR (SC-20): the Guarded Layer quorum denominator for BOTH votes is the enrolled citizen count at `snapshotRoot` time (fixed at `proposeAmendment()`), consistent with the P4 snapshot-immutability property; an organic enrolment surge during the 180-day inter-vote window does NOT raise the quorum target for the second vote. | FR-118, FR-119, BR-021, BR-008 | Solidity; state machine per §5.6 |
| DES-088 | `StewardRegistry` contract | Steward election via existing ballot mechanics, platform-scoped; fixed terms and expiry per §10.11; affirmative-quorum recall per §10.11; term record (holder commitment, term start/expiry, recall state); no issuer-class function — the registry is platform-level only | FR-114, BR-021 | Solidity; Governor ballot |
| DES-089 | `StewardPowers` boundary | The FR-115 enumerated-power allowlist is the ONLY set of functions the registry exposes on behalf of stewards: (a) draft/publish a protocol proposal; (b) coordinate an independent audit, trusted-setup ceremony, or credential-issuer onboarding; (c) hold funds and sign a vendor contract; (d) publish an operational report. No citizen-path contract imports or references `StewardRegistry` — the FR-117 capability-absence property is achieved BY CONSTRUCTION: zero citizen flow can be blocked by steward vacancy because no citizen flow calls the registry. CITIZEN-FALLBACK CAVEAT (SC-17 / SC-19): stewards COORDINATE, never gatekeep; the citizen-inaction fallback mechanism (DES-092) applies to power (b) for audit publication and issuer-onboarding initiation — steward inaction or vacancy cannot permanently block a citizen-entitled process. | FR-115, FR-116, FR-117, BR-021, CON-003 | Solidity ABI allowlist; CI capability-absence assertion |
| DES-092 | Citizen-inaction fallback mechanism | Shared pattern applied in two contexts: (1) AUDIT PUBLICATION (SC-17) — after a steward-inaction window (value: §10.11) following a passed Guarded Layer first vote, ANY enrolled citizen may call `publishAuditRef(proposalId, auditRefHash)` to publish the audit reference; steward VACANCY triggers the fallback IMMEDIATELY (no window); the audit substance requirements (independence, scope, 30-day lead time) are UNCHANGED — the fallback changes who may publish, never what qualifies; (2) ISSUER ONBOARDING (SC-19) — after a steward-inaction window following a citizen petition for issuer-onboarding review (threshold: Open Layer quorum, 15%), a citizen-run coordination panel may open the onboarding technical review; stewards coordinate normally but cannot use inaction to suppress issuers serving specific demographic groups. Both fallbacks require a passed governance vote for final enactment (via `Governor.execute()`); the fallback changes only the coordination/publishing step. | FR-115, FR-116, BR-021 | Solidity; `ProtocolGovernance.publishAuditRef()`; citizen-petition tracking |
| DES-090 | `TrustAnchorLifecycle` | Rotation: `rotateTrustAnchor(issuerId, newAnchorHash)` enacted only by a passed governance vote executed by code (ruling 4); activates a dual-anchor overlap window (old + new both accepted until `overlapEnd`) so a compliant rotation never blocks enrolment beyond the published window (closes SC-14). ROTATION ABORT (SC-18): `abortRotation(issuerId)` enacted by a passed governance vote at the same Open Layer bar (60%/15%) as the original rotation; transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE (incumbent/pre-rotation hash restored as sole-accepted anchor); credentials signed with the pending anchor during the overlap window are rejected for new enrolments after abort enactment (no retroactive invalidation of already-completed enrolments). Rationale: without this path the only safe undo of a malicious rotation was full issuer revocation (REVOCATION_PENDING), which blocks ALL enrolments for 30+ days — a self-inflicted denial of service against legitimate users; ROTATION_ABORTED returns to ACTIVE with zero enrolment blocking. Revocation: `revokeTrustAnchor(issuerId)` enacted only by a passed governance vote executed by code; entering `REVOCATION_PENDING` at enactment is the public on-chain signal; `enrol()` against the affected anchor continues until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on; the window between enactment and `anchorEffectiveAt` is the accepted RISK-30 residual (mitigated by per-issuer epoch cap); already-enrolled credentials untouched (closes SC-13). No operator or steward may call any lifecycle function directly — callable only from `Governor.execute()` with a validated `permittedActionClass` | FR-112, FR-113, DES-016, ADR-017, ADR-008 | Solidity; `Governor.execute()`; `permittedActionClass` binding |
| DES-091 | `GovernanceConstants` module | OI-17 closure: publishes the full governance-constant table (§10.11 values). CLASSIFICATION (SC-16): each constant is normatively classified as Guarded Layer (requires Guarded Layer amendment to change) or Open Layer (requires Open Layer amendment to change); classification is listed in the §10.11 table's Amendment layer column. ANTI-CIRCULARITY RULE: the Guarded Layer super-process constants themselves (Tier-2 quorum, Tier-2 supermajority, inter-vote window, audit lead time, steward audit-inaction window) MUST be Guarded Layer minimum — an Open Layer coalition MUST NOT be able to lower the Guarded Layer bar by amending these constants at the Open Layer threshold; if the Guarded Layer quorum constant were lowered by an Open Layer vote, the Guarded Layer protection would be undermined at its foundation. SETTER MECHANISM (SC-16): "immutable-at-deployment" means the initial deployment values cannot be overridden by a constructor argument; the values are revisable post-deployment only by a `Governor.execute()` call carrying a passed vote at the constant's governing layer; the contract exposes a governance-controlled setter guarded by `onlyGovernor` — any call not routed through `Governor.execute()` reverts; this resolves the apparent tension between "immutable" and "revisable." | FR-119, NFR-017, BR-021 | Solidity; `onlyGovernor` setter guard; layer-keyed permittedActionClass |

### 5.3 Data model

**Normative on-chain fields.** The fields below are the protocol's authoritative schema. A
field not listed here is absent from the protocol unless specified in an ADR. **The absence of
a field is a security control in many cases** — this list is the specification of both what is
present and what is deliberately excluded.

```
PersonhoodRegistry
  identityTree            LeanIMT<Poseidon>      // leaves: identityCommitment = Poseidon(secret)
  enrolled                issuerNullifier → bool // one human, one enrolment per namespace
  nullifierUsed           keccak(scope,n) → bool // one action per human per scope
  commitmentTier          commitment → uint8     // 1..3 credential strength
  issuers                 issuerId → {active, credentialClass, stateOperated, tier,
                                      operator, epochCap, metadataURI,
                                      trustAnchorHash, verifierAddress}
                                      //         ^^ GOV_EID | AVAILABILITY_ONLY (ADR-016)
                                      //                            ^^ authenticated caller for enrol()
                                      //         trustAnchorHash: bytes32 — on-chain commitment to the issuer class's signing trust anchor (eIDAS trust-list key set / ICAO CSCA root / Aadhaar attestor key); populated at registerIssuer via the timelock-governed process (SC-01)
                                      //         verifierAddress: address — per-adapter-class enrolment verifier contract for this issuer; dispatch target for enrol() (SC-01; DES-070)
  recoveries              enrolmentNullifier → {initiatedAt, completesAt, newKey, state}
                                      // state: PENDING | COMPLETE | ABORTED (ADR-018)
  isInRecovery            enrolmentNullifier → bool  // true when recovery.state == PENDING
  authorisedSpender       nullifier → address    // ERC-4337 paymaster integration
  spenderAuthoriser       address → bool         // MUST be strictly controlled (H-01)
  knownRoot               root-history ring      // accepted identity roots; kept per-namespace

RegionRegistry
  regions                 regionId → {schemeVersion, parent, depth, path}
  residencyTrees          regionId → LeanIMT<Poseidon>
  attesters               attesterId → {active, tier, stake, operator, metadataURI}
                                                      // ^^ ISS-C3 fix: operator address required
  attesterAuthorised      operator → bool            // only authorised operators may call issueResidency()
  issuanceCount           attesterId → regionId → uint256
  population              regionId → {value, effectiveFrom, pending, pendingSince}
  frozen                  regionId → bool            // freeze on anomaly (DES-036)
  rootHistory             regionId → ring[64]        // residency roots; MUST stay valid ≥ 15 min
                                                      // (ISS-M4 fix: sizing policy, not buffer logic)

PartyRegistry
  petitions               petitionId → {jurisdiction, charterHash, cid, name, emblem,
                                        thresholdBps, requiredEndorsements, endorsements,
                                        opensAt, closesAt, state, party, parentPartyId}
                                                  // ^^ name/emblem collision checked (DES-073)
  nameRegistry            jurisdiction → normalised_name → petitionId  // collision guard
  forkPetitions           forkPetitionId → {sourcePartyId, initiatedAt, coolsAt,
                                            initiatorCount, initiatorBps, state}
                                        // ISS-C2 fix: on-chain fork-initiation state
  forkInitiators          forkPetitionId → nullifier → bool  // one initiator per person

Party
  memberTree              LeanIMT<Poseidon>
  joinedAt / leftAt       commitment → uint64
  memberCount             uint64
  growthSamples           ring[64]  // {timestamp, memberCount} — ring, not unbounded array (ISS-M3)
  manifestoVersions       [{contentHash, cid, publishedAt, changeSummary}]
  immutableClause         clauseId → bool
  entrenched              clauseId → {approvalBps, timelockSeconds}
  governor                address         // Governor contract for this party
  dissolved               bool
  charter                 bytes32         // current charter content hash
  parentPartyId           bytes32         // non-zero for forks
  forkBlock               uint64
  knownRoot               root-history ring  // accepted member roots

Governor
  proposals               [{tier, clauseId, contentHash, cid, createdAt, snapshotRoot,
                            snapshotMembers, surgeAtCreation, discussionEndsAt, votingEndsAt,
                            executableAt, quorumBps, approvalBps, minTenureSeconds,
                            for/against/abstain, finalized, succeeded, executed, cancelled,
                            target, callData, permittedActionClass}]
                    //                         ^^ snapshotRoot (publicSignals[0]): ISS-C1 fix —
                    //                            MUST equal voter's partyRootAtSnapshot;
                    //                            snapshotAt (publicSignals[1]): ISS-01 fix —
                    //                            MUST equal proposal.createdAt
                    //                         permittedActionClass: ISS-H1 fix — tier↔action binding
  lastProposalAt    author → uint64  // rate limiting
```

ProtocolGovernance
  entrenched              ruleId → bytes32   // Charter Layer (Tier-1): hash-committed registry of seven rules;
                                              //   populated at genesis; never mutable by any vote
  superProcessState       proposalId → {
                            firstVoteResult,        // passed | failed | pending
                            firstVoteSnapshotAt,
                            windowStart,            // Guarded Layer (Tier-2): inter-vote window start (block ts)
                            windowEnd,              // windowStart + interVoteWindow (see §10.11)
                            auditRefHash,           // bytes32 audit report hash
                            auditPublishedAt,       // must satisfy: windowEnd - auditPublishedAt >= auditLeadTime
                            secondVoteResult,       // passed | failed | pending
                            enactedAt               // non-zero once enacted
                          }

StewardRegistry
  seats                   seatId → {
                            holderCommitment,   // bytes32 — Poseidon commitment of elected holder
                            termStart,          // uint64
                            termExpiry,         // uint64; termStart + STEWARD_TERM (§10.11)
                            recallState         // NONE | RECALL_PENDING | RECALLED
                          }
  recallVotes             seatId → {initiatedAt, affirmativeCount, totalEligible, threshold}

TrustAnchorLifecycle (fields added to PersonhoodRegistry issuer struct)
  trustAnchorState        issuerId → enum { ACTIVE,
                            ROTATION_PENDING,   // newHash and effectiveAt known; overlapEnd = effectiveAt + overlapWindow
                            ROTATION_ABORTED,   // abort enacted via abortRotation(); incumbent hash restored; pending anchor rejected for new enrolments [DES-090, SC-18]
                            REVOCATION_PENDING, // effectiveAt known (ordinary or emergency path)
                            REVOKED }
  pendingAnchorHash       issuerId → bytes32    // non-zero during ROTATION_PENDING
  anchorEffectiveAt       issuerId → uint64     // block timestamp when new state takes effect
  anchorOverlapEnd        issuerId → uint64     // ROTATION_PENDING only: old anchor accepted until this ts

**Deliberately absent, everywhere:** name, address, postcode, coordinate, document number,
document image, biometric template or hash, email, phone, IP, device id, and any mapping from
a nullifier or commitment to any of the above. **A hashed address is still an address** — the
search space is small enough to enumerate — which is why no hash of any personal datum appears
either (ADR-004, CON-002). The `authorisedSpender`/`spenderAuthoriser` pair is present but is
the only disenfranchisement-capable authority in the protocol; its access control is tested as
a first-class security invariant.

**Participation profile data (FR-062, OI-13):** The participation profile is an indexer-side
read model aggregated from public events (Enrolled, Joined, Proposed, DebateAttended, etc.).
No per-member activity field is stored on-chain as a named personal index. **The profile
MUST NOT be served until OI-13 is resolved at Gate 1 re-affirmation** (see §18 for the
design-side contradiction). The feature flag `participation_profile` is off above dev.

**Off-chain.** Manifestos, proposal bodies, charters, debate content, region maps and
ceremony transcripts on IPFS (CIDv1) mirrored to Arweave, integrity-bound by the on-chain
`contentHash`. Notification preferences live only on the citizen's device or in an optional
E2E-encrypted relay the protocol cannot read.

### 5.4 API contracts

The protocol's public API is the contract ABI plus the event log. `@trumocracy/sdk` wraps it.
The indexer exposes a **read-only, non-authoritative** GraphQL API; every value it serves that
could change a citizen's decision is re-verified against chain state by the client (ADR-014).

Key entrypoints, with their proof requirements:

| Call | Proof | Scope | Effect |
|---|---|---|---|
| `enrol(issuerId, π, [Nᵢ, C, issuerId, namespaceId, trustAnchorHash])` | `personhood_enrol_[class]` (resolved via `issuers[issuerId].verifierAddress`; see DES-070) | — | inserts `C`, burns `Nᵢ`; checks `credentialClass == GOV_EID`; MUST check `publicSignals[4] == issuers[issuerId].trustAnchorHash` (SC-01) |
| `endorse(petitionId, π, [root, R, tier, scope, Nₐ, C])` | `residency_member` | `keccak("endorse",petitionId)` | +1 endorsement |
| `withdrawEndorsement(petitionId, π, [root, R, tier, scope, Nₐ, C])` | `residency_member` | `keccak("withdraw_endorse",petitionId)` | −1 endorsement; requires prior endorsement, jurisdiction match |
| `activate(petitionId, charter)` | — | — | deploys Party+Governor iff count ≥ required |
| `join(π, signals)` | `residency_member` | `keccak("join",partyId)` | membership leaf + `joinedAt` |
| `leave(π, signals)` | `tenure_member` | `keccak("leave",partyId)` | removes membership leaf + `leftAt` |
| `propose(input, π, signals)` | `tenure_member` | `keccak("propose",partyId)` | snapshotted proposal; records `snapshotRoot` |
| `vote(id, choice, π, [snapshotRoot, snapshotAt, tenure, scope, Nₐ])` | `tenure_member` | `keccak("vote",partyId,id)` | one vote; MUST check `publicSignals[0] == proposal.snapshotRoot` AND `publicSignals[1] == proposal.createdAt` |
| `finalize(id)` / `execute(id)` | — | — | permissionless; `execute` checks `permittedActionClass` for the proposal's tier |
| `openForkPetition(sourcePartyId, π, signals)` | `tenure_member` | `keccak("fork",sourcePartyId)` | records initiator; threshold ≥ 10% members; GUARDED by `fork` feature flag (off above dev) |
| `vetoRecovery(enrolmentNullifier, proof)` | active-key signature | — | sets recovery.state = ABORTED |
| `proposeAmendment(ruleId, callData, tier)` | `tenure_member` (Worker+) | `keccak("propose_amendment",ruleId)` | Charter Layer (Tier 1): revert `EntrenchedRule` at submission; Guarded Layer (Tier 2): opens super-process (firstVote scheduled); Open Layer (Tier 3): ordinary proposal path |
| `firstVote(proposalId, choice, π, signals)` | `tenure_member` | `keccak("sp_first_vote",proposalId)` | Guarded Layer (Tier-2) only; precondition: `superProcessState[proposalId].firstVoteResult == pending`; records vote; on close checks Tier-2 quorum + supermajority |
| `publishAuditRef(proposalId, auditRefHash)` | steward (primary); OR any enrolled citizen after steward-inaction window (DES-092; SC-17); citizen fallback is IMMEDIATE if steward vacancy | — | Guarded Layer (Tier-2) only; precondition: firstVote passed AND `block.timestamp >= windowStart`; for citizen fallback additionally requires `block.timestamp >= firstVoteClosedAt + STEWARD_INACTION_WINDOW` (or vacancy); records `auditRefHash` and `auditPublishedAt`; second vote cannot open until `auditPublishedAt + AUDIT_LEAD_TIME <= windowEnd`; audit substance requirements (independence, scope) UNCHANGED regardless of who publishes |
| `abortRotation(issuerId)` | Governor.execute() only | `keccak("abort_rotation",issuerId)` | Open Layer bar (60%/15%); precondition: `trustAnchorState[issuerId] == ROTATION_PENDING`; transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE (incumbent hash restored); pending-anchor credentials rejected for new enrolments from abort enactment; no retroactive invalidation of already-enrolled |
| `secondVote(proposalId, choice, π, signals)` | `tenure_member` | `keccak("sp_second_vote",proposalId)` | Guarded Layer (Tier-2) only; precondition: auditRef published AND `block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME`; records vote; on close checks Tier-2 quorum + supermajority |
| `enact(proposalId)` | permissionless | — | Guarded Layer (Tier-2): precondition: secondVote passed AND timelock elapsed; all five super-process properties enforced — missing any single one causes revert; Open Layer (Tier-3): ordinary timelock path |
| `electSteward(seatId, π, signals)` | `tenure_member` | `keccak("steward_elect",seatId)` | opens platform-wide ballot for a vacant or expiring seat via Governor ballot mechanics |
| `recallSteward(seatId, π, signals)` | `tenure_member` | `keccak("steward_recall",seatId)` | affirmative-quorum recall vote per §10.11; surge defence active; silence does not recall |
| `rotateTrustAnchor(issuerId, newAnchorHash)` | code only — callable ONLY from `Governor.execute()` with `permittedActionClass` = TRUST_ANCHOR_MGMT | — | sets `trustAnchorState = ROTATION_PENDING`; records `pendingAnchorHash`, `anchorEffectiveAt` (block.ts + ordinary governance timelock), `anchorOverlapEnd` (effectiveAt + ANCHOR_OVERLAP_WINDOW); old anchor remains accepted until `anchorOverlapEnd`; enrol() checks: if ROTATION_PENDING AND `block.timestamp < anchorOverlapEnd`, accepts EITHER old OR new hash |
| `revokeTrustAnchor(issuerId)` | code only — callable ONLY from `Governor.execute()` with `permittedActionClass` = TRUST_ANCHOR_MGMT | — | ordinary path: sets `REVOCATION_PENDING` with timelock per §10.11; emergency path: same call with `emergencyPath=true` flag validated by `permittedActionClass`, uses EMERGENCY_REVOCATION_TIMELOCK (§10.11); on timelock expiry suspends new enrolments (issuer.active remains true, enrolment reverts with `AnchorRevoked`); already-enrolled credentials unaffected |

**Residency-root freshness (ISS-M4 fix):** A residency root MUST remain acceptable for at
least **15 minutes** after insertion. The `rootHistory` ring size in `RegionRegistry` MUST be
set such that at the §7.6 capacity ceiling (50 M enrolled, 10 M eligible), the 64-insert ring
does not rotate a root out within 15 minutes of its insertion at peak enrolment rate. If it
would, the ring size MUST be increased before mainnet scale. This is a design constraint on
the sizing policy, not on the ring logic itself.

### 5.5 Key sequences

**Enrol → endorse → activate**

```
citizen        client           issuer      PersonhoodRegistry  RegionRegistry  PartyRegistry
   │ tap "verify" │                │                │                │              │
   │─────────────▶│ NFC on device  │                │                │              │
   │              │───────────────▶│ signed cred    │                │              │
   │              │◀───────────────│                │                │              │
   │              │ prove in WASM; stable_id_secret never leaves     │              │
   │              │───────────────────────────────▶│ enrol(π)        │              │
   │              │                                │ check GOV_EID   │              │
   │              │                                │ burn Nᵢ, insert C              │
   │ tap "support" │                               │                 │              │
   │─────────────▶│ prove residency ∈ tree(R)       │                 │              │
   │              │──────────────────────────────────────────────────────────────────▶│
   │              │                                │ spendNullifier  │  endorse(π)   │
   │ anyone       │──────────────────────────────────────────────────────────────────▶│ activate()
```

No arrow terminates at a human approver, and none can be added without changing FR-018.

**Coercion-resistant vote (Phase 3, MACI)**

```
voter  ──register voting key──▶ MACI state tree
voter  ──encrypted ballot─────▶ message queue
voter  ──key-change + re-vote─▶ message queue (indistinguishable from above)
                coordinator committee (5-of-7 DKG) ──▶ tally + ZK proof ──▶ on-chain result
```

**Nullifier-collision recovery (FR-071/072, ADR-018)**

```
citizen        client           PersonhoodRegistry     RegisteredChannel
   │ re-enrols  │                       │                      │
   │───────────▶│ nullifier collision detected                 │
   │            │──────────────────────▶│ → RECOVERY_PENDING   │
   │            │                       │──────────────────────▶│ notification sent
   │            │   7-day delay elapses │                      │
   │            │   (or active-key veto signals)               │
   │            │───────────── vetoRecovery() ────────────────▶│ → RECOVERY_ABORTED
   │            │   OR after 7 days, no veto:
   │            │                       │ KEY_ROTATION_COMPLETE; membership/tenure preserved
```

### 5.6 State models

```
PARTY:     draft ──publish──▶ petition ──threshold met──▶ active ──T3 vote──▶ dissolved
                                  └──window closed──▶ expired
           fork: active party + ≥10% initiators (nullifier-proven) ──30d cooling──▶ fork draft ──petition──▶ new party

PROPOSAL:  discussion ──▶ voting ──▶ tallying ──▶ {defeated | timelocked ──▶ executed}
                └──proposer withdraws (discussion only)──▶ cancelled

CANDIDACY: nominated(self) ──3 debates completed──▶ post-debate member vote ──passes──▶ published
           (no debates = candidacy not published; no automatic renomination of incumbents)
           published ──election──▶ {elected | not elected}
           elected ──term end──▶ expired
           elected ──recall stage 1 + stage 2──▶ removed ──▶ by-election

RECOVERY:  ACTIVE ──nullifier collision──▶ PENDING ──veto──▶ ABORTED
                                                └──7 days, no veto──▶ KEY_ROTATED → ACTIVE (new key)

GUARDED LAYER (TIER-2) SUPER-PROCESS (ProtocolGovernance — DES-087):
  OPEN ──proposeAmendment(GuardedLayer)──▶ FIRST_VOTE_OPEN
  FIRST_VOTE_OPEN ──firstVote closes; quorum+supermajority met──▶ WINDOW_OPEN (windowStart recorded)
  FIRST_VOTE_OPEN ──firstVote closes; quorum or supermajority not met──▶ DEFEATED
  WINDOW_OPEN ──publishAuditRef() by steward [primary path]──▶ AUDIT_PUBLISHED (auditPublishedAt recorded)
  WINDOW_OPEN ──block.timestamp >= firstVoteClosedAt + STEWARD_INACTION_WINDOW; any enrolled citizen calls publishAuditRef() [fallback, DES-092/SC-17]──▶ AUDIT_PUBLISHED
  WINDOW_OPEN ──steward vacancy detected; any enrolled citizen calls publishAuditRef() immediately [vacancy fallback, DES-092/SC-17]──▶ AUDIT_PUBLISHED
  AUDIT_PUBLISHED ──block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME
                   AND block.timestamp >= windowEnd──▶ SECOND_VOTE_OPEN
  SECOND_VOTE_OPEN ──secondVote closes; quorum+supermajority met──▶ SECOND_PASSED (timelock begins)
  SECOND_VOTE_OPEN ──secondVote closes; quorum or supermajority not met──▶ DEFEATED
  SECOND_PASSED ──timelock elapsed──▶ ENACTABLE
  ENACTABLE ──enact() called (permissionless)──▶ ENACTED
  Any state ──Charter Layer (Tier-1) target detected at proposeAmendment()──▶ revert(EntrenchedRule) [no state created]

TRUST_ANCHOR (DES-090):
  ACTIVE ──rotateTrustAnchor() via Governor.execute()──▶ ROTATION_PENDING (newHash, effectiveAt, overlapEnd set)
  ROTATION_PENDING ──block.timestamp >= effectiveAt──▶ ACTIVE (new hash; old accepted until overlapEnd)
  ROTATION_PENDING ──abortRotation() via Governor.execute() (Open Layer bar)──▶ ROTATION_ABORTED──▶ ACTIVE (incumbent/pre-rotation hash; pending-anchor credentials rejected for new enrolments from abort; no retroactive invalidation) [SC-18]
  ACTIVE ──revokeTrustAnchor() via Governor.execute() [ordinary]──▶ REVOCATION_PENDING (30d timelock)
  ACTIVE ──revokeTrustAnchor() via Governor.execute() [emergency]──▶ REVOCATION_PENDING (7d timelock)
  REVOCATION_PENDING ──timelock elapsed──▶ REVOKED (new enrolments suspended; enrolled credentials unaffected)
```

## 6. Runtime view

**Cold start (first-time citizen).** PWA loads (< 200 KB JS) → passkey created → identity
secret derived and stored wrapped by the passkey → issuer flow → proof generated in WASM
(1–4 s on reference device) → UserOperation sponsored by paymaster → enrolment event. No seed
phrase, no gas token, no cryptocurrency concept exposed.

**Voting.** Client pulls proposal + `snapshotRoot`, verifies both against the chain (not the
indexer), generates tenure proof locally with `snapshotRoot` as public input, submits.

**Degraded modes.** Bundler down → alternate bundler → queue → (censorship only) self-pay →
L1 force-inclusion. Indexer down → direct chain reads. Sponsorship exhausted → queued at
zero cost with explanation and expected time, never a charge and never a denial (FR-061).

## 7. Deployment view

### 7.1 Environments

| Env | Chain | Verifiers | Flags | Purpose |
|---|---|---|---|---|
| local | in-process EthereumJS | mocks | all on | unit + integration |
| CI | in-process EthereumJS | mocks + rejecting mock | matrix | every PR |
| devnet | L2 devnet | mocks | all on | integration, SDK, indexer |
| testnet | Base Sepolia | **real, ceremony-bound** | Phase-appropriate | audits, ceremony rehearsal |
| staging | Base mainnet | real | prod-minus | production config, invited cohort |
| production | Base mainnet | real | staged 1→10→50→100% | live |

A deployment whose `VerifierRegistry` contains a `MockVerifier` cannot be promoted past devnet.

### 7.2 Network topology
Static client on IPFS (ENS-named) + Arweave mirror + conventional CDN, all serving a
byte-identical reproducible bundle. Indexer and relayer behind independent operators; the
client accepts user-supplied endpoints for both. No component sits on a path where its
absence prevents participation — tested by running the E2E suite with indexer and relayer off.

### 7.3–7.5 Compute, storage, availability
Indexer: stateless API + Postgres read model, rebuildable from chain (target < 6 h for a year
of history). Relayer: stateless, horizontally scaled, paymaster buffer 90 days at p95 fees.
Pinning: ≥3 geographically separate operators + Arweave permanence. **RTO 15 min / RPO 0**
for off-chain services.

### 7.6 Capacity & sizing (NFR-008)

| Tier | Unit | Baseline | Peak | Basis |
|---|---|---|---|---|
| Merkle depth | tree | 32 | 32 | 4.29 B leaves — 85× headroom over 50 M |
| On-chain insert | gas | ~70–90 k | ~90 k | measured in EVM harness |
| Proof verification | gas | ~250 k | ~290 k | Groth16, 3 pairings, constant |
| Enrolment | tx/day | 50 k | 500 k | per-issuer epoch caps bound peak |
| Vote burst | tx/hour | 100 k | 1 M | voting windows ≥ 72 h; closes staggered per region |
| Indexer | events/s | 200 | 2 000 | derived from above |
| Client proving | seconds | 1–4 | 10 | 2 GB Android 9, ≤ 2^17 constraints |

## 8. Software & technology

| Layer | Choice | Version | ADR |
|---|---|---|---|
| Settlement | OP Stack L2 (Base), Ethereum blobs | — | ADR-001 |
| Contracts | Solidity | 0.8.28, Cancun | ADR-011 |
| Merkle | `@zk-kit/lean-imt.sol` + `poseidon-solidity` | 2.0.1 / 0.0.5 | ADR-005 |
| Proving | Circom + Groth16 (bn254), snarkjs | — | ADR-005 |
| Coercion resistance | MACI + threshold DKG coordinator | — | ADR-006 |
| Accounts | ERC-4337, passkeys (RIP-7212), EIP-7702 | — | ADR-002 |
| Client | Next.js PWA, viem, WASM prover | Node 22 | ADR-012 |
| Indexer | event-sourced read model → Postgres → GraphQL | — | ADR-014 |
| Storage | IPFS CIDv1 + Arweave | — | ADR-009 |
| Test | solc-js + EthereumJS in-process harness, vitest | — | §14 |

**Licensing:** AGPL-3.0-or-later for governance-critical code (CON-004).

**Configuration & flags (§8.3).** `packages/protocol/flags.js` is the registry; every flag
exercisable on-chain is ALSO enforced by the `FeatureFlags` contract. Flags without a removal
target are reported as debt by CI.

## 9. Repository & code-structure design

Per **ADR-011** (normative). Summary reproduced here to satisfy the handbook's §9 requirement:

**Monorepo, npm workspaces, CI-enforced dependency direction.**
```
trumocracy/
├── packages/contracts/   Solidity core + registries + party modules
├── packages/circuits/    Circom sources, ceremony scripts, generated verifiers
├── packages/protocol/    domain logic: IDs, encoding, state machines, thresholds (zero runtime deps)
├── packages/sdk/         TypeScript client: proofs, tx building, 4337, force-inclusion fallback
├── packages/ui/          design system (accessible components, i18n primitives)
├── apps/web/             Next.js PWA — citizen-facing client
├── apps/verifier/        standalone tally/root verifier
├── services/indexer/     event → read model
├── services/relayer/     4337 bundler adapter + paymaster policy
├── infra/                IaC, deployment topology
├── tools/                evm test harness, dep-guard, codegen
└── docs/                 VEKTOR 14-doc suite + ADRs
```

**Dependency rule (CI-enforced by `tools/dep-guard`):**
`contracts ← (none)` · `circuits ← (none)` · `protocol ← (none)` ·
`sdk ← protocol, contracts(ABI), circuits(artifacts)` · `ui ← protocol` ·
`web ← sdk, ui, protocol` · `indexer ← protocol, contracts(ABI)`.

**Branch model:** Trunk-based development; one long-lived branch (`main`). Every incomplete
capability ships dark behind a flag in `packages/protocol/flags.js` and the corresponding
`FeatureFlags` on-chain contract.

**CI topology:**
```
PR merge → CI pipeline:
  lint + type-check (packages/protocol, sdk, web, indexer)
  dep-guard check (tools/dep-guard)
  unit tests: vitest (packages/protocol — 82+ tests; sdk; web)
  contract tests: solc-js + EthereumJS in-process harness (packages/contracts)
  differential test: protocol reference vs deployed contract ABI
  ZK doctrine: claims.json negative-test coverage scan; circomspect (when circuits exist)
  capability-absence: ABI allowlist snapshot + bytecode selector scan
  data-minimisation: forbidden-field-name scan over ABI + storage layout
  jargon filter: forbidden-term scan over apps/web string files
  deployment-safety: IS_INSECURE_MOCK() scan — blocks promotion past devnet
  → testnet promotion gate (env-based; requires passing deployment-safety test)
```

The dependency guard and deployment-safety test are mechanical, not conventional — a violation
fails the build.

## 10. Cross-cutting concepts

### 10.1 Security — DFD and STRIDE

**Trust boundaries (data-flow diagram).**

```
 ╔═ B1 DEVICE (citizen-trusted) ══════════╗
 ║ identity secret · witness · passkey    ║   ← the only place plaintext identity exists
 ╚════════════════╤═══════════════════════╝
                  │ proof + nullifier ONLY        ── B1→B2: the critical boundary
 ╔═ B2 PUBLIC CHAIN (trustless, world-readable) ══╗
 ║ roots · nullifiers · tallies · hashes          ║
 ╚═══╤════════════════════════════════════╤═══════╝
     │                                    │
 ╔═ B3 OFF-CHAIN SERVICES ═════╗  ╔═ B4 EXTERNAL ISSUERS/ATTESTERS ═══╗
 ║ indexer · relayer · pinning ║  ║ know a real identity already;      ║
 ║ non-authoritative           ║  ║ learn a region request, not a party║
 ╚═════════════════════════════╝  ╚════════════════════════════════════╝
```

| STRIDE | Threat | Mitigation | Residual |
|---|---|---|---|
| **S**poof | fake person endorses/votes | ZK personhood, per-namespace nullifier, tiering, epoch caps (DES-001/002/003) | as strong as the weakest GOV_EID issuer — bounded by tiering (RISK-01/05) |
| **S**poof | malicious frontend serves backdoored proving key | `zkeyHash` pinning + reproducible builds (DES-052, DES-050) | a user who ignores a warning |
| **S**poof | attester impersonates a legitimate attestor; calls `issueResidency()` | `attesterAuthorised[caller]` check; `attester.operator` binding (DES-006; ISS-C3 fix) | an attester whose operator key is compromised |
| **S**poof | enrolment proof verified against an attacker-chosen trust anchor; prover substitutes K_attack for the issuer's real trust anchor, enrolling unlimited synthetic identities (SC-01) | `trustAnchorHash` is a public signal (`publicSignals[4]`) bound on-chain to `issuers[issuerId].trustAnchorHash`; per-adapter verifier dispatch via `issuers[issuerId].verifierAddress` prevents cross-adapter-class proof substitution | a compromised or mis-registered trust anchor at `registerIssuer` time — mitigated by the timelock-governed registration process |
| **S**poof | post-registration trust-anchor compromise (SC-13) — attacker obtains private key of a CORRECTLY registered issuer and uses it to sign synthetic credentials, enrolling Sybil identities with valid on-chain proofs | `revokeTrustAnchor(issuerId, emergencyPath=true)` via `Governor.execute()` (DES-090, ADR-020); 7-day emergency timelock at Open Layer governance bar (60% supermajority / 15% quorum); per-issuer epoch cap (DES-003) throttles enrolment during the revocation window; public governance vote creates an on-chain signal observable by parties and citizens | 7-day Sybil enrolment window before revocation takes effect — accepted residual RISK-30; epoch-cap-bounded; post-enrolment adjudication possible via NFR-004 audit |
| **T**amper | alter a tally | on-chain nullifier-gated votes; MACI tally proof | circuit bug (RISK-10) → two audits + negative tests |
| **T**amper | rewrite a manifesto quietly | append-only version chain + content addressing (DES-031) | none material |
| **R**epudiate | party denies a commitment | permanent public version history with timestamps | none material |
| **I**nfo | deanonymise by elimination in a small region | k ≥ 1000 guard + scope escalation (DES-008) | correlation over time (RISK-06) |
| **I**nfo | deanonymise by timing/traffic | no reader logging, random submission delay, sponsored ops indistinguishable | a global passive adversary — **not defended**, stated in §16 |
| **I**nfo | compelled disclosure of the member list | the list does not exist (§5.3) | attester-side data, outside our boundary |
| **I**nfo | cross-context linkage via stable `identityCommitment` | commitment is the tree leaf and must be public; client uses random delay and bundler pool; see §10.2 | stable pseudonym linkage (RISK-06) — see §18 for OI-13 consequence |
| **D**oS | drain gas sponsorship | per-nullifier budgets + circuit breaker (DES-043) | actions queue at zero cost; delay, never charge or denial |
| **D**oS | sequencer censors a party | L1 force-inclusion (DES-041), ≥ 72 h windows | delay within the window |
| **E**oP | flash-loan governance takeover | **no transferable power exists** (ADR-007) | none — attack class removed |
| **E**oP | mob rewrites a charter | tiers + snapshot + adaptive quorum + entrenchment + fork (ADR-008) | a genuinely persuaded majority over a year |
| **E**oP | operator/admin intervention | no admin, pause or proxy in the core (ADR-010) | registry governance capture → exit right |
| **E**oP | `Governor.execute` calls arbitrary `target.call(callData)`; tier-0 proposal invokes high-authority action | `permittedActionClass` binding in proposal struct (DES-016); `execute()` reverts if `callData.selector` not in the tier's allowed set; CI assertion over the allowed-action table (ISS-H1 fix) | undiscovered logic bypass within the immutable contract; SC-15 general rule (ProtocolGovernance IMMUTABLE CORE — no upgrade, no proxy, no governance-vote replacement) closes the bypass class of contract substitution or proxy redirection (SC-21); remaining residual is a logic bug inside the immutable code — mitigated by audit (DES-079) and the capability-absence CI scan |
| **E**oP | stolen credential initiates recovery to seize account (RISK-22) | 7-day delay + active-key veto + independent on-chain veto path (DES-071, ADR-018) | complete device + channel compromise (RISK-23 accepted residual) |
| **E**oP | steward soft-power elevation — community defers to steward proposals as if they have canonical authority; vendors treat steward signature as an operational override (RISK-31) | power allowlist DES-089 (only four enumerated functions exposed); citizen proposals have equal standing per FR-116; zero-dependency property FR-117 means steward vacancy causes no citizen-facing degradation, eliminating leverage; term expiry + recall (DES-088) cycles authority | perception gap between formal and informal power — accepted residual; mitigated by public operational reports (NFR-019) and fork backstop (FR-120) |
| **T**amper | Guarded Layer (Tier-2) super-process bypass attempt — actor tries to call `enact()` on a Guarded Layer proposal without completing all five super-process properties (skips first vote, audit ref, or second vote) | `ProtocolGovernance.enact()` enforces all five preconditions in code; any missing property causes revert; the state machine in DES-087 and §5.6 is the single gate; there is no out-of-band execution path (CON-003; ADR-010) | undiscovered logic bypass in the state machine — mitigated by audit (DES-079) and capability-absence CI assertions |
| **D**oS | trust-anchor revocation abuse — attacker obtains a governance seat or corrupts a vote to pass an emergency revocation of a major issuer, blocking new enrolments | emergency revocation still requires a passed governance vote at the ordinary platform governance voting bar (60% supermajority / 15% quorum — UNCHANGED from ordinary path; only the timelock is shortened per ADR-020); the Guarded Layer super-process (80%/25%/180-day two-vote) applies only to AMENDMENTS of named absolutes, NOT to governance actions such as revocation; growth-surge defence (DES-020) active throughout; ordinary enrolled citizens unaffected | a genuine coordinated-majority attack passes the vote — accepted residual bounded by the quorum bar and the fork backstop (RISK-30) |

**Capability-absence is a security control here**, so it is tested as one: ABI-surface
assertions, selector scans of deployed bytecode, and storage-layout assertions.

### 10.2 Privacy & data protection

Minimisation by construction (§5.3). Unlinkability by **scoped action nullifiers** (`Nₐ`).
Anonymity-set floor enforced on-chain. Erasure honoured by non-collection (ADR-013 §2).

**IdentityCommitment linkage — stated explicitly (ISS-H3):** The `identityCommitment`
`C = Poseidon(secret)` is published at enrolment and indexed in `Enrolled`, `Joined`, and
similar events. It is **not** a scope-bound nullifier: a party, indexer, or analyst who
observes two events carrying the same `C` knows they came from the same person. The
unlinkability claim for **action nullifiers** (`Nₐ = Poseidon(secret, actionScope)`) holds:
different scopes produce different nullifiers with no derivable relationship. The
`identityCommitment` does not share this property. Mitigation: the client SHOULD introduce
random delay between enrolment and first action and submit through the ERC-4337 bundler pool.
This reduces but does not eliminate the correlation window. The `identityCommitment` linkage
is a **known, accepted design residual** pending further protocol evolution. For the OI-13
consequence, see §18.

### 10.3 Performance
Systems MUST meet the budgets defined in DES-078: initial JS ≤ 200 KB; p95 interactive
≤ 5 s on 4× throttled mid-range Android over Slow 4G; proof ≤ 10 s worst-case on reference
device; finalisation on-chain ≤ 120 s p95. Median citizen action MUST remain < USD 0.01.

### 10.4 Scalability
The system MUST use depth-32 Merkle trees (4.29 B leaves) with constant-cost on-chain
verification. MACI tallying MUST be batched. Off-chain services SHOULD be stateless and
horizontally scalable; residency trees MUST be sharded per region.

### 10.5 Reliability / HA / DR
Off-chain services MUST achieve RTO ≤ 15 min and RPO = 0. Chain liveness is the minimum
liveness floor; the L1 force-inclusion path MUST serve as the backstop. Party state MUST be
exportable at any time by anyone (DES-044).

### 10.6 Observability
Systems MUST expose governance-health SLIs covering: activation counts, turnout, quorum
near-misses, recall rates, growth anomalies, sponsorship burn, proof-failure rate,
force-inclusion usage, and operator diversity. **No SLI MAY be derived from an individual's
behaviour.** Detail in Doc 11.

### 10.7 Error handling & resilience
The system MUST fail *closed* on anything security-relevant (bad proof, unknown root, spent
nullifier, thin anonymity set, wrong `snapshotRoot`). It SHOULD fail *open* on convenience
faults (indexer, sponsorship, notifications). A replayed action MUST be rejected by
construction via nullifier idempotency.

### 10.8 i18n & accessibility
Apps MUST pass WCAG 2.2 AA (tested in CI, DES-081); MUST ship ≥ 8 launch languages including
≥ 1 RTL (DES-083); MUST support icon+audio assisted mode; MUST maintain grade-8 reading level
in all primary copy (DES-085); MUST operate fully by keyboard and screen reader; MUST enforce
the 2 GB RAM / Android 9 / 64 kbit/s floor (DES-082).

### 10.9 Cost / FinOps
Cost per citizen action is a **product metric with an alert**. The sponsorship buffer MUST
remain ≥ 90 days at p95 fees; a circuit breaker MUST engage at 3× p99 daily spend.

### 10.10 Compliance & auditability
Every governance action emits an event; independent verifier binary reproduces every tally;
transparency report covers filtering actions and compulsion attempts (ADR-013 §4, DES-084).

### 10.11 Governance constants (OI-17 closure)

**Naming disambiguation.** This section uses "Charter Layer / Guarded Layer / Open Layer" for
the platform amendment boundary. Doc 02 v2.2.0 calls these "Tier 1 / Tier 2 / Tier 3" — the
labels map 1:1 (Charter Layer = Doc 02 Tier 1, Guarded Layer = Doc 02 Tier 2, Open Layer =
Doc 02 Tier 3). The constant NAMES in the table below (e.g. "Tier-3 quorum", "Tier-2 quorum")
are GovernanceConstants module identifiers that match the on-chain storage layout; they keep
their names for code-level stability. Party-level governance tiers (T0 policy / T1
organisational / T2 structural / T3 constitutional) are a SEPARATE namespace defined in the
party charter rules and Doc 02 FR-103..FR-105; the identical 60%/15% bar shared by Open Layer
and party T2 structural tier is coincidental, not definitional.

**Status: CLOSED.** These values are the OI-17 closure, normative for Design and for the
`GovernanceConstants` module (DES-091). They are revisable only through the amendment
boundary itself (Guarded Layer for named-absolute-adjacent constants; Open Layer for all
others).

**Anti-circularity rule (SC-16).** A constant classified "Amendment Layer = Guarded Layer" in the table below MUST NOT be lowerable by an Open Layer (ordinary) vote. Any Open Layer proposal targeting a Guarded Layer constant MUST revert. This rule prevents an Open Layer coalition from eroding the Guarded Layer amendment bar by reducing the constants that define it.

**Quorum denominator (SC-20).** The Guarded Layer quorum for both votes (proposeAmendment and castSecondVote) is computed over the enrolled citizen count at snapshotRoot time — the count fixed when proposeAmendment() is called — NOT the live enrolled count at vote time. This prevents an organic enrolment surge from raising the absolute headcount threshold mid-vote and stalling a legitimate amendment. The growth-surge defence (FR-023) applies to party-level votes only and does NOT override the snapshotRoot quorum denominator for Guarded Layer votes (DES-087).

| Constant | Value | Rationale | Amendment Layer |
|---|---|---|---|
| **Open Layer — ordinary platform amendment (Doc 02 'Tier 3')** | | | |
| Tier-3 quorum | 15% of enrolled citizens | Matches the highest party-tier quorum (FR-119 reference); sets the floor for platform-wide legitimacy without requiring a supermajority of all citizens to participate | Open Layer |
| Tier-3 supermajority | 60% of votes cast | Materially above a simple majority; comparable to constitutional-amendment thresholds in small deliberative bodies; protects against narrow-majority swings | Open Layer |
| Tier-3 timelock | 90 days | Long enough for a fork petition to reach threshold (10% + 30-day cooling-off) and for community scrutiny; proportional to the structural tier (ADR-008) | Open Layer |
| **Guarded Layer — named-absolutes super-process (Doc 02 'Tier 2')** | | | |
| Tier-2 quorum | 25% of enrolled citizens (denominator = enrolled count at snapshotRoot, SC-20) | Materially above Open Layer (10 percentage-point margin); requires broad platform participation before a fundamental protection can change | **Guarded Layer** (anti-circularity: SC-16) |
| Tier-2 supermajority | 80% of votes cast | Materially above Open Layer (20 percentage-point margin); ensures no transient majority can carry a change that weakens receipt-freeness, data minimisation, cryptographic standards, or the non-violence clause | **Guarded Layer** (anti-circularity: SC-16) |
| Inter-vote window | 180 days | The fork right (FR-120) requires 10% initiators + 30-day cooling-off + an activation petition (30-day minimum). A citizen who observes the first vote and wishes to fork before the second can complete the petition cycle within 180 days; this satisfies NFR-018's export guarantee and FR-053 petition mechanics. The window is the enforced gap between firstVote close and secondVote open | **Guarded Layer** (anti-circularity: SC-16) |
| Audit publication lead time | 30 days before second-vote open | Gives the community at least 30 days to read and respond to the audit of the proposed change before the second vote; the second vote cannot open unless `windowEnd - auditPublishedAt >= 30 days` | **Guarded Layer** (anti-circularity: SC-16) |
| Steward audit-publication inaction window (STEWARD_INACTION_WINDOW) | 60 days from firstVoteClosedAt; steward vacancy triggers citizen fallback immediately (no window) | One-third of the 180-day inter-vote window; long enough for stewards to coordinate and publish the audit reference after the first vote closes; short enough that steward inaction cannot stall the second vote past the halfway mark. Vacancy (no registered steward) triggers the DES-092 citizen fallback immediately with no delay. Same pattern applies to issuer-onboarding coordination trigger (SC-19). | **Guarded Layer** (anti-circularity: SC-16; extension via Open Layer vote would enable indefinite blocking of the super-process) |
| **Steward organisation** | | | |
| Steward term length | 2 years | Long enough to develop institutional competence; short enough that elections are a real check; staggered so the platform is never without experienced stewards | Open Layer |
| Election cadence | Annual (staggered) | One cohort elected per year; at seat count 5, at most 3 seats turn over in any one election cycle, preserving continuity | Open Layer |
| Seat count | 5 | Enough for coordination diversity; small enough that elections are meaningful; a single steward's absence never blocks a quorum for any listed power | Open Layer |
| Steward recall bar | 20% affirmative quorum of enrolled citizens + 60% of recall-vote turnout | Affirmative-quorum recall ensures silence cannot remove a steward; 60% of turnout means a motivated minority cannot remove without a real majority; growth-surge defence (FR-023 mechanics) applies throughout | Open Layer |
| **Conduct, removal, expulsion (FR-103..105)** | | | |
| Conduct-vote minimum quorum | 10% of eligible party members | Sets a floor that prevents a tiny faction from stigmatising a member; individual votes are private, aggregate public (FR-103) | Open Layer |
| Removal vote bar | T2 structural tier approval (60% of votes cast, 15% quorum) | Removal is more consequential than an ordinary policy vote and MUST require the structural tier with its adaptive quorum and surge defence (FR-104) | Open Layer |
| Expulsion vote bar | T3 constitutional tier (80% of votes cast, 20% quorum) | Expulsion is the most severe action; the bar MUST exceed removal; the 20 pp supermajority margin ensures near-consensus is required (FR-105) | Open Layer |
| Failed-recall cooldown | 6 months | Prevents harassment-campaign cycles; mirrors the recall-cooldown precedent from FR-044/FR-042 party-level recall mechanics | Open Layer |
| **Founding parameters** | | | |
| Founding member count minimum | 5 enrolled citizens | FR-076: five named co-founders must sign the founding constitution; low enough not to exclude small movements, high enough to prove non-trivial coordination | Open Layer |
| Disclosure schedule lead time | 21 days before Worker declaration deadline | FR-084: published 3 weeks in advance; enough time for a prospective Worker to make an informed decision; no extra demands permitted after the deadline | Open Layer |
| **Dispute stage timelines (FR-100)** | | | |
| Intake acknowledgment | 48 hours from submission | Rapid enough to prevent strategic delay; automated on-chain acknowledgment | Open Layer |
| Evidence window | 14 days | Time-bounded; ensures the dispute does not drag; panel receives all evidence before formation | Open Layer |
| Panel formation | 7 days after evidence window closes | Sortition panel formed within one week; breach is recorded on the decision trail | Open Layer |
| Recommendation publication | 14 days after panel formation | Panel must publish; breach recorded; no standing panel means no indefinite deferral | Open Layer |
| Deciding member vote or code execution | 30 days after recommendation publication | Ensures members have time to read and vote; code executes automatically on window close | Open Layer |
| **Trust-anchor lifecycle** | | | |
| Anchor rotation staleness SLA (SRE) | 30 days from issuing authority's public rotation announcement to on-chain enactment-vote open | Bounds the window between an issuing authority announcing a new trust-anchor key and the community initiating the governance vote; the SRE MUST alert (Doc 11 SLO) if 30 days elapse without an open vote; 30 days is long enough for community awareness and proposal drafting, short enough that the on-chain record does not diverge from reality for more than one credential-renewal cycle before a vote is in progress | Open Layer |
| Anchor rotation overlap window | 60 days | Both old and new anchor accepted for 60 days after rotation enactment; large enough to accommodate citizens who renew credentials at normal refresh cadence; Sybil window risk mitigated because both anchors MUST be registered via governance and enrol() deduplication by nullifier still applies | Open Layer |
| Ordinary revocation timelock | 30 days | Enough time for the community to identify false alarms; `REVOCATION_PENDING` is entered at enactment (public on-chain signal); `enrol()` against the affected anchor CONTINUES until `anchorEffectiveAt` (30 days after enactment) and reverts `AnchorRevoked` from then on; the enactment-to-effectiveAt window is the accepted RISK-30 residual; existing enrolled credentials unaffected | Open Layer |
| Emergency revocation timelock | 7 days | Shortened but non-zero; requires a passed governance vote at the ordinary platform governance voting bar (60% supermajority / 15% quorum — UNCHANGED from the ordinary revocation path per ADR-020); only the timelock is shortened, not the voting requirement; seven days allows false-alarm veto without enabling unilateral operator action. NOTE: revocation and rotation are governance ACTIONS governed at the ordinary platform governance bar; the Guarded Layer super-process (80% / 25% / 180-day two-vote) applies only to AMENDMENTS of named absolutes — it does not apply here. RISK-30 accepted residual: 7-day window is a Sybil enrolment opportunity if private key is compromised between enactment and emergency vote. | Open Layer |

### 10.12 Design system & screen inventory

**Source:** Approver directive, Rathish, 2026-08-22. Wireframe input: `design/wireframes/index.html` (15 phone screens, 3 flows). **Referent correction (applied):** The approver attributed the verified-status-privacy ruling to "OI-19"; that is a mislabel. OI-19 is the invite-gating ruling (FR-125; DECISIONS-2026-08-20-OI19-OI20.md). The verified-status-privacy ruling is the **FR-124 ruling** (Doc 02 v2.3.1, Rathish, 2026-08-20; FR-124 normative text and ruling banner near line 694 of Doc 02). All citations in this section use FR-124. The mislabel is noted in the architect memory note (artifacts/architect-2026-08-22T1120.md) and does not affect any requirement; no silent referent swap was made.

---

#### 10.12.1 Assessment verdict

**(a) Against the three-tier privacy model (FR-082..086, FR-124): SOUND.** The wireframe's privacy-status element renders in three states corresponding exactly to the three participation tiers (anonymous / verified-private / public). Every instance of the element in the wireframe appears in an authenticated self-view context — the holder's own screen — consistent with FR-124(a) (private self-view for all verified participants) and FR-082 (Supporter anonymous unconditionally). Other-actor views in the wireframe show only aggregate member counts (e.g. "12,480 verified members") or Worker/Candidate public-tier data ("Public" pill on candidate rows), consistent with FR-124(b) (aggregate-only public counts) and FR-124(c) (Worker/Candidate badge permitted). Full leak-check results are in §10.12.3.

**One normative invariant required (not a current wireframe defect — a design constraint on the built component):** The privacy-status component's `ver` state MUST NOT render on any screen or route accessible without authentication, or on any surface displaying another actor's data. The wireframe as-drawn satisfies this; the component spec in §10.12.3 makes it normative.

**(b) Against the SCR stubs (SCR-01..SCR-23): PARTIALLY SOUND.** The 15 wireframe screens cover 16 of the 23 SCRs with full or partial coverage. 7 SCRs have no wireframe screen at all. The full mapping is tabulated in §10.12.4. Gaps are design debt, not conflicts.

**(c) Against ADR-011 (packages/ui designation): SOUND.** ADR-011 designates `packages/ui` as "design system (accessible components, i18n primitives)". The token set and privacy-status component formalised here are precisely the design-system foundation ADR-011 anticipated. ADR-023 (registered in §12) records the adoption decision.

**Caveats and conflicts:** Four items in §10.12.6 require attention before build. Three are clear conflicts; one is an illustrative value that must not become a constant.

---

#### 10.12.2 Design tokens — DES-093

| DES | Element | Purpose | Traces | Implementation location |
|---|---|---|---|---|
| DES-093 | Design token set for `packages/ui` | Formalises the visual language for all citizen-facing surfaces | FR-082..086, FR-124, NFR-011, NFR-013, DES-081, DES-083, DES-085 | `packages/ui/tokens.css` (not yet created — Coding phase) |

**Colour tokens (verbatim from wireframe `:root`):**

| Token | Hex | Semantic role |
|---|---|---|
| `--navy` | `#1E2761` | Primary public/party territory fill |
| `--navy2` | `#2E3D7E` | Card fill on navy surfaces |
| `--navy3` | `#3F4E96` | Avatar fill; accent on navy surfaces |
| `--amber` | `#F2B134` | Primary CTA; petition/active pill; amber privacy-dot (pub state) |
| `--amber-deep` | `#D9971C` | Eyebrow text on navy; amber hover |
| `--ice` | `#CADCFC` | Secondary text on navy surfaces |
| `--ice-deep` | `#AEC0E8` | Sub-text on navy surfaces |
| `--paper` | `#F7F5EF` | Primary private/user territory fill |
| `--paper2` | `#EFEBE0` | Progress bar track; secondary fills on paper surfaces |
| `--ink` | `#1B2440` | Primary text on all surfaces |
| `--grey` | `#5A6685` | Secondary text on paper surfaces |
| `--grey-soft` | `#8892AE` | Tertiary text; anonymous privacy-dot |
| `--green` | `#2C7A5B` | Verified state; "on track" pill; success icons |
| `--green-soft` | `#E7F1EC` | Verified privacy-status background; "good" note fill |
| `--red` | `#B4483C` | Against-vote bar in tally; error states |
| `--line` | `#E4E1D6` | Borders; dividers; progress track on paper |

**Typography:**
- `--serif: 'Fraunces', Georgia, serif` — display and title text (h1, h2, card headings, avatar initials)
- `--sans: 'Inter', system-ui, sans-serif` — body, labels, buttons, captions

**Radii and shadow conventions (from wireframe CSS, no separate token):** Phone shell 42 px; screen 32 px; card 16 px; button 14 px; pill 20 px; privacy-status element 12 px; avatar 11 px. Card shadow: `0 2px 6px rgba(30,39,97,.05)`. Button active: `scale(0.98)`.

**Note — typeface bundle risk:** Fraunces is a variable font with significant GSUB tables. The engineer MUST verify the combined font bundle (Fraunces + Inter) meets the 15 MB install floor (DES-082) and evaluate self-hosting versus Google Fonts CDN. The Google Fonts CDN is blocked by the strict CSP in the PWA shell (ADR-012); self-hosting is the default requirement.

**Territory rule (normative):** Surfaces representing public party territory (readable by any citizen, anonymous or authenticated) use the `body.navy` class. Surfaces representing a private authenticated user session use the `body.paper` class. This rule is semantic, not stylistic:
- **Navy territory:** 1.1 Welcome (public promise screen), 3.5 Accountability dashboard (public party performance), and any future public-party overview or discovery surface.
- **Paper territory:** 1.2 Browse (authenticated personal context), 1.3..1.6 (enrolment and join flows), 2.1..2.3 (creation and petition flows), 3.1..3.4 (personal governance), 3.6 (one-way door to public role).
- A screen that violates this assignment (e.g. a private authenticated flow rendered on a navy surface) is a design defect detectable at review.

---

#### 10.12.3 Privacy-status component — DES-094

| DES | Element | Purpose | Traces | Implementation location |
|---|---|---|---|---|
| DES-094 | Privacy-status component | Persistent authenticated-holder self-view element; renders one of three states; normatively binds FR-124 at the component level | FR-082..086, FR-124, NFR-001, NFR-002, NFR-024 | `packages/ui/PrivacyStatus` (not yet created — Coding phase) |

**Three states — exact wireframe copy and colour bindings:**

| State | CSS class | Dot colour | Background | Text colour | Title | Subtitle |
|---|---|---|---|---|---|---|
| `anon` | `privacy anon` | `--grey-soft` (#8892AE) | #ECEEF5 | #41496b | "Anonymous" | "Nothing you do here is linked to you" |
| `ver` | `privacy ver` | `--green` (#2C7A5B) | `--green-soft` (#E7F1EC) | #1f5a42 | "Verified — private" | "Your vote counts. Your identity is not stored" |
| `pub` | `privacy pub` | `--amber` (#F2B134) | #FDF3E0 | #8a5b10 | "Public" | "You chose a public role. Your record is visible" |

**Normative privacy binding (FR-124 — these constraints are component-level requirements, not just policies):**

1. **Self-view only (FR-124(a)):** The component MUST render only the authenticated holder's own state in their own authenticated session. It MUST NOT render on any route accessible without authentication, and MUST NOT render on any surface displaying data belonging to another actor.
2. **No other-actor render (FR-082, FR-124(a)/(b)):** The component MUST NOT render on a Supporter's public profile (no public Supporter profile exists by design — FR-082), on any other party member's page, or on any aggregate-only public view.
3. **Supporter `ver` state absence (FR-124(b)/(d)/(f)):** A Supporter's verified state MUST be absent from all public surfaces, all other-actor views, all logs, and all exports with no path available to any actor other than the authenticated holder. The `ver` state is never rendered in a context visible to anyone other than the authenticated holder. The FR-124(f) absence-test obligation applies: a test in the style of UT-0700/UT-0701 MUST verify this absence.
4. **Worker/Candidate `pub` state (FR-124(c)):** The `pub` state corresponds to voluntary role-taking. A separate static "Public" badge on the Worker/Candidate public participation record is permitted by FR-124(c). That badge is NOT a PrivacyStatus component instance; it is a distinct static label on the public-tier participation record.
5. **Aggregate counts (FR-124(b)):** Aggregate verified counts (e.g. "12,480 verified members") on public party pages are plain text derived from on-chain aggregate data. They are not PrivacyStatus component instances and do not reveal any individual's state.
6. **No retroactive linkage (FR-124(e), FR-086):** The PrivacyStatus component MUST NOT write, emit, or trigger any log entry or export that associates the holder's rendered state with any persistent record accessible to any other actor. FR-086 applies: no retroactive linkage between an anonymous Supporter's verified status and their identity is permitted through any data the system holds or emits. This obligation is particularly relevant at screen 3.6, whose copy ("What you've done as an anonymous supporter stays anonymous forever. It is never linked to your new public identity") makes the no-retroactive-linkage guarantee explicit to the user — the component rendering MUST be consistent with that guarantee.

**Leak-check verdict (FR-124 applied to entire wireframe):**

Review scope: all 15 wireframe screens examined for (a) every `privacy(...)` component instance and (b) every place another person or aggregate is rendered.

| Category | Instances | Finding |
|---|---|---|
| Privacy pill on authenticated self-view screens | 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 3.4, 3.6 | All self-view; holder sees their own state only. SAFE. |
| Privacy pill on unauthenticated or public screen | 1.1 (Welcome — no pill), 3.5 (Accountability dashboard — no pill) | No pill on public surfaces. SAFE. |
| Other-actor aggregate counts | 1.2 "12,480 verified members"; 2.3 "6,120 endorsements" | Aggregate-only, consistent with FR-124(b). SAFE. |
| Other-actor named data | 3.1 "Proposed by a Worker" (avatar "R") | Worker role is public by FR-124(c). SAFE. |
| Other-actor with Public pill | 3.2 Candidates "Ayesha K." / "Daniel M." with "Public" pill | Candidate tier; voluntary role-taking per FR-124(c). SAFE. |
| Party-level performance data | 3.5 Accountability dashboard | Aggregate party promises/progress; no per-member data. SAFE. |
| Screen 1.5 "Only you see this" pill | 1.5 `pill green` "Only you see this" on the Verified confirmation card | Explicit confirmation that the mark is private; self-view; consistent with FR-124(a). SAFE. |
| Screen 3.6 inline `privacy pub` element (wireframe line 450) | One `<div class="privacy pub">` in the one-way door screen body — not a `privacy()` function call; a static one-off holder self-view preview of the future `pub` state after crossing to a public role. | Self-view; holder's own future state; not a component instance; not a privacy leak. SAFE. The engineer MUST NOT implement this as a PrivacyStatus component call — it is a one-off static preview element. |

**LEAK-CHECK VERDICT: PASS.** 13 `privacy()` component function calls (3 `anon`, 10 `ver`, 0 `pub`-via-function) — all authenticated-holder self-view. One additional inline `<div class="privacy pub">` on screen 3.6 (wireframe line 450) is a holder self-view preview and not a component instance (noted in table above). No Supporter verified-status leak found in the wireframe as-drawn. The normative invariant in clause 1 above (no `ver` pill on unauthenticated routes or other-actor views) must be enforced at the component level to maintain this pass through build.

---

#### 10.12.4 SCR ↔ Wireframe mapping

**Wireframe → SCR (15 screens):**

| Wireframe screen | SCR | Coverage / notes |
|---|---|---|
| 1.1 Welcome | None | Pre-consent unauthenticated landing. No SCR. Design debt — see §10.12.5 class (i). |
| 1.2 Browse anonymously | SCR-06 (partial), SCR-10 (partial) | Shows petitions (SCR-06) and party listing with aggregate membership (SCR-10); no single-screen exact match. |
| 1.3 Verify — the offer | SCR-01 (partial), SCR-02 (partial) | Pre-enrolment disclosure (SCR-01) combined with attestor intro (SCR-02); no dedicated "offer" screen in SCR set. **Conflict C-01 — button hardcodes "Aadhaar"; see §10.12.6.** |
| 1.4 Verify — on your device | SCR-02 (partial) | On-device ZK proof generation step is part of the SCR-02 enrolment flow. |
| 1.5 Verified | None | No SCR covers post-enrolment confirmation. Design debt — see §10.12.5 class (i). |
| 1.6 Join a party | SCR-10 (partial), SCR-11 | Party home join context (SCR-10) + join action (SCR-11). **Conflict C-03 — "Finances" row links to undesigned screen; see §10.12.6.** |
| 2.1 Create a party — vision | SCR-04 | Full coverage — eight-pillar editor. |
| 2.2 Create — constitution | None | No SCR covers constitution authoring as a distinct step. SCR-04 is eight pillars only. Design debt — see §10.12.5 class (i). |
| 2.3 Petition — live onboarding | SCR-06 (partial), SCR-08 (partial), SCR-09 (partial) | Petition detail + threshold explainer + activation status combined in one screen. **Conflict C-02 — "caps at 100" unbacked; see §10.12.6.** |
| 3.1 Proposal lifecycle | SCR-12 | Full coverage — proposal detail with lifecycle stages. |
| 3.2 Candidate selection | SCR-22 (partial), SCR-23 (partial) | Candidate rows with scores (SCR-22) + debate schedule context (SCR-23); neither SCR is fully covered. |
| 3.3 Cast a vote | SCR-13 | Full coverage — ballot booth. |
| 3.4 Vote confirmed | SCR-14 (partial) | Post-vote tally present (consistent with SCR-14 result surface); independent-verifier flow (verify-it-yourself) absent. DES-063 confirmation treatment and FR-055 independent-verifier aspect absent from wireframe. See §10.12.5 class (i). |
| 3.5 Accountability dashboard | SCR-20 (partial), SCR-17 (partial) | Transparency dashboard (SCR-20) + commitment tracking (SCR-17) combined; filtering log and manifesto version history absent. |
| 3.6 The one-way door | SCR-15 (partial) | SCR-15 covers candidacy nomination disclosure; Worker self-declaration (FR-080) is related but distinct. Design debt — see §10.12.5 class (i). |

**SCR → Wireframe (23 SCRs):**

| SCR | Name | Wireframe screen | Coverage |
|---|---|---|---|
| SCR-01 | Pre-enrolment disclosure & consent | 1.3 (partial) | Partial — disclosure present; combined with attestor offer |
| SCR-02 | Attestor choice & enrolment | 1.3 (partial), 1.4 (partial) | Partial — two screens cover different sub-steps; no dedicated choice step |
| SCR-03 | Residency attestation | None | No wireframe screen |
| SCR-04 | Party draft editor (eight pillars) | 2.1 | Full |
| SCR-05 | Publish check & deficiency report | None | No wireframe screen |
| SCR-06 | Petition browser & detail | 1.2 (partial), 2.3 (partial) | Partial — browse in 1.2; petition detail in 2.3 |
| SCR-07 | Endorse / withdraw | None | No wireframe screen |
| SCR-08 | Threshold & denominator explainer | 2.3 (partial) | Partial — threshold inline in 2.3 only |
| SCR-09 | Activation record | 2.3 (partial) | Partial — onboarding status inline in 2.3 only |
| SCR-10 | Party home & aggregate membership | 1.2 (partial), 1.6 (partial) | Partial — aggregate data in 1.2; join context in 1.6 |
| SCR-11 | Join / leave (single-party enforcement) | 1.6 | Full |
| SCR-12 | Proposal list & detail | 3.1 | Full |
| SCR-13 | Ballot booth (cast / re-cast) | 3.3 | Full |
| SCR-14 | Result & verify-it-yourself | 3.4 (partial) | Partial — post-vote tally shown; independent-verifier flow absent |
| SCR-15 | Nomination & disclosure consent | 3.6 (partial) | Partial — Worker declaration shares the consent pattern; candidacy nomination is distinct |
| SCR-16 | Election & office record | None | No wireframe screen |
| SCR-17 | Manifesto, commitments & version history | 3.5 (partial) | Partial — commitment progress bars present; manifesto and version history absent |
| SCR-18 | Recall initiation & ballot | None | No wireframe screen — see design-debt §10.12.5 class (ii) |
| SCR-19 | Account recovery (seedless + collision) | None | No wireframe screen |
| SCR-20 | Public transparency dashboard & filtering log | 3.5 (partial) | Partial — dashboard present; filtering log absent |
| SCR-21 | Public participation profile | None | No wireframe screen (DES-064 dormant pending OI-13 resolution — §18) |
| SCR-22 | Candidate feedback widget | 3.2 (partial) | Partial — feedback scores shown; widget interaction mechanics absent |
| SCR-23 | Debate schedule, attendance & post-debate vote | 3.2 (partial) | Partial — debate list shown; schedule/attendance/voting mechanics absent |

---

#### 10.12.5 Design-debt register

Kept in two distinct classes per the approver directive; the classes capture different kinds of debt.

**Class (i) — Wireframe screens lacking a backing DES and/or US row:**

| Screen | Missing layers | Required action before build |
|---|---|---|
| 1.1 Welcome | No SCR, no DES, no US. | Requirement gap: the welcome screen UX has no backing FR/DES/US. Must be specified (FR, DES, SCR, US) before engineering can build it. |
| 1.5 Verified (post-enrolment confirmation) | No SCR; no dedicated DES for the confirmation UI state. DES-001 covers enrolment mechanics; the "Verified · private / Only you see this" confirmation screen is not designed. | DES gap: mint a DES for the post-enrolment success-state UI, including the FR-124(a) self-view copy obligation. |
| 2.2 Create — constitution | No SCR, no DES. FR-076 (mandatory constitution sections) and FR-077 (non-violence clause presence check) are backed requirements but no screen-level design exists. SCR-04 covers eight pillars only. | SCR and DES gap: constitution-authoring screen needs its own SCR (with FR-076 + FR-077 traces) and DES element. |
| 3.4 Vote confirmed | SCR-14 partial coverage exists (post-vote tally present). DES-063 covers coercion-safe confirmation at architecture level. FR-055 independent-verifier flow absent from wireframe. | Remaining design debt: confirmation-screen coercion-safe treatment (DES-063 UX detail) and the independent-verifier flow (FR-055) are not wireframed. Note as DES gap under SCR-14. |
| 3.6 One-way door (Worker self-declaration) | SCR-15 covers candidacy nomination disclosure (FR-037..038). Worker self-declaration (FR-080) has no dedicated SCR, no DES surface element, and no US explicitly covering the "permanent / public from here on" UI treatment. | DES and SCR gap: Worker self-declaration informed-consent UI (FR-080) needs a dedicated surface element and SCR. |

**Class (ii) — Required screens absent from the wireframe entirely:**

**Recall / removal (affirmative quorum):**
- WHAT EXISTS: SCR-18 stub (FE-024, FR-042..045); US-0057..US-0060 (two-stage recall); DES-030 (two-stage recall at architecture level); US-0114 (FR-104 affirmative-quorum role removal); US-0124 scenario (mid-term steward recall at FR-114 / DES-088). The wireframe constitution screen (2.2) includes "Removal of a representative — Recall by affirmative member vote" as a pre-filled constitution clause but no recall-flow screen exists anywhere in the wireframe.
- WHAT IS MISSING: No wireframe screen for recall initiation. No wireframe screen for the recall ballot. No DES for FR-104 (conduct-vote removal — Doc 05 US-0114 notes "Not Ready pending DES"). The affirmative-quorum semantics from the v2 ruling (FR-104, Rathish, 2026-08-10) are not yet designed at screen level for the party-level removal vote UI. The two-stage recall flow (SCR-18) has a stub but no design.

**FR-125 non-invite fallback join path:**
- WHAT EXISTS: FR-125 finalised per OI-19 ruling (Rathish, 2026-08-20); the non-invite fallback is a MUST; FR-020 unamended and absolute; mandate that "a determined real person can always join without an invite."
- WHAT IS MISSING: The wireframe 1.1 Welcome screen shows only "Explore — no account needed" and "I have an invite". The non-invite fallback path is entirely absent from the wireframe. No US rows exist for FR-121..FR-129 (catch-up debt recorded in Doc 05 and in §16 of this document). No SCR for the fallback join path. No DES covering the FR-125 non-invite fallback UI flow. All four design layers (DES, SCR, US, wireframe screen) are open for this mandatory path.

**Party public finance ledger:**
- WHAT EXISTS: FR-050 (Must — itemised, publicly readable, independently verifiable treasury record); FR-051 (Must — no governance advantage from payments); FR-096 (Must — mechanical anomaly detection with public flags); DES-033 (treasury caps + ledger — on-chain mechanism: per-person cap by nullifier, itemised public record); SCR-20 (Public transparency dashboard includes "treasury summary with anomaly flags"). The wireframe 1.6 Join a party screen lists "Finances — every rupee in and out" as a navigation row.
- WHAT IS MISSING: No wireframe screen for the itemised finance ledger. DES-033 covers the on-chain mechanism; the UI for browsing the itemised inflow/outflow record (FR-050) is not designed. The 1.6 "Finances" navigation row links to an undesigned screen. No dedicated FE, US, or SCR for the ledger UI. SCR-20 is a dashboard summary view, not the itemised ledger. Required additions: ledger SCR (building on DES-033), DES surface element, FE, US.

---

#### 10.12.6 Conflict register

Conflicts are surfaced, not reconciled. Dispositions are recommendations; resolution requires Product Owner (C-02) or engineer build-time decision (C-01, C-04). No silent edits were made to Doc 02 or to the wireframe.

**C-01 — "Verify with Aadhaar" hardcoded button vs adapter-driven design (SCR-02 / FR-004 / OI-20 / DES-070)**

- Screens: 1.3 ("Verify with Aadhaar" primary button), 1.4 (copy "Your Aadhaar data is being read and proven right here on your phone").
- Conflict: The wireframe treats "Aadhaar" as a hardcoded design constant. The normative record requires adapter-driven UI: SCR-02 is titled "Attestor choice & enrolment" (a choice surface, not a hardcoded single option); FR-004 requires ≥ 2 mutually independent attestation paths at architecture level; OI-20 ruling (Rathish, 2026-08-20): "Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency"; DES-070: "region-level config, not hardcoded"; ADR-016 (amended) and ADR-021 confirm Aadhaar as the Phase-1 deployment rail string, not a design constant.
- Required disposition (wireframe-copy fix at build time): The button label and on-device copy strings MUST be adapter-driven — fetched from region-level config or an i18n string resolved at deployment time. "Verify with Aadhaar" is the correct Phase-1 India deployment string; it is not a fixed design constant. The button element and interaction pattern are sound. No requirement change needed. This must not be built as a literal string.

**C-02 — "Membership caps at 100 until legal verification completes" — unbacked requirement**

- Screen: 2.3 (Petition — live onboarding), warning note: "Membership caps at 100 until legal verification completes — so an unverified party can't gather false strength."
- Conflict: No backing FR, DES, or US exists for a "cap at 100 members" during the pre-legal-registration petition phase. FR-013 (petition state), FR-075 (distinguish platform vs legal registration), FR-076 (founding member count ≥ 5), FR-016 (activation threshold by formula) — none authorise a provisional membership cap. The 100-member cap is a new design concept with no normative footing.
- Required disposition (requirement gap): This screen element MUST NOT be built until a FR is minted, reviewed, and approved through the SOP. The Product Owner must decide: accept and mint an FR, or reject (and the wireframe copy is revised). The architect does not resolve this silently. Both the conflict register and the design-debt register (class ii is the correct class once confirmed as a required capability; class i applies if subsequently scoped out) record the gap.

**C-03 — Wireframe finance ledger screen absent; 1.6 "Finances" row links to undesigned surface**

- Screen: 1.6 (Join a party), "Finances — every rupee in and out" navigation row.
- Conflict: FR-050 (Must) requires an itemised, publicly readable, independently verifiable treasury record. The wireframe's 1.6 screen implies a "Finances" screen exists as a navigation target but no finance-ledger wireframe screen is provided. The design of the linked screen is entirely absent. DES-033 covers the on-chain mechanism; no UI-level design exists.
- Required disposition (wireframe-scope gap): The finance ledger screen must be designed (SCR, DES surface element, FE, US) before the 1.6 navigation row can be implemented. The navigation row itself is sound; the target is not. Recorded in design-debt class (ii) above and as a conflict here because the wireframe implies completeness while the design is incomplete.

**C-04 — "9,000 to activate" — illustrative threshold must not become an implementation constant**

- Screens: 1.2 ("Threshold: 9,000"), 2.3 ("9,000 endorsements", "9,000 to activate").
- Potential conflict: The wireframe shows a concrete threshold number. FR-016 (Must) requires the threshold computed entirely in code as a published percentage of the jurisdiction's eligible-population denominator. DES-010 specifies `max(pct×pop, pct×verified, 500)`.
- Disposition (illustrative placeholder — no normative conflict): "9,000" is a plausible concrete example for a mid-size ward in the prototype. It does not contradict the formula. Per the approver directive: "is illustrative but MUST NOT be read as contradicting the endorsement-floor rule." Confirmed no conflict. The UI MUST compute and display the value from DES-010 at runtime; "9,000" MUST NOT appear as a constant in any implementation. No requirement change needed.

---

## 10.13 v1/v2 delivery-architecture split

**Approver directive:** Rathish, 2026-08-23. Full governance record: ADR-024.

### 10.13.1 Two delivery definitions

| | Definition A — v1 | Definition B — v2 |
|---|---|---|
| Identity/personhood | Conventional auth (database account + WebAuthn passkey) | ZK anonymous enrolment via `ICredentialAdapter` → `PersonhoodRegistry` (ADR-016, ADR-017) |
| Ballot casting | Conventional authenticated database write; chain audit log | MACI encrypted ballot + 5-of-7 threshold coordinator (ADR-006, DES-023) |
| Tally | Conventional SQL aggregate; result hash published to audit contract | On-chain ZK tally proof (DES-024, DES-025); independently verifiable |
| Cryptographic ceremonies | None | Groth16 Phase-1 + per-circuit Phase-2 (ADR-005, ADR-022) |
| Blockchain role | Audit-record only (petition milestones, tally hashes, manifesto hashes, party activation events) | Audit record + full governance execution (PersonhoodRegistry, PartyRegistry, Governor, MACI, ProtocolGovernance) |
| Receipt-freeness | NO — disclosed limitation | YES — MACI key-change override |
| Anonymity floor | NO — conventional DB linkage present | YES — k ≥ 1000 (DES-008) |

**Guardrail (approver-stated):** Nothing built in the Design phase is discarded. v1 reuses requirements, flows, design system, and wireframes. v2 is a swap behind stable interfaces, never a rewrite.

### 10.13.2 DES-095 — IEligibilityVerifier seam

**Purpose:** A stable design-level interface decoupling the application layer from the identity/personhood proof mechanism. The application calls this interface; the backing is swapped between v1 (conventional) and v2 (ZK) without any change above the seam boundary.

**Design-level interface (methods and semantics — not implementation code):**

| Method | v1 backing behaviour | v2 backing behaviour |
|--------|---------------------|---------------------|
| `verifyEligibility(memberId, regionId, scope, proof)` | Phone-verified account lookup + conventional session auth (one account per SMS-verified phone number; FR-132, ADR-025); DES-099 spam-resistance guard in the enrolment service path; no ZK proof verified; MUST NOT claim one-person-one-vote | ZK proof verified through `ICredentialAdapter` → `enrol()` → `PersonhoodRegistry` (ADR-017, DES-069, DES-070) |
| `isUniqueInScope(memberId, scope)` | Database nullifier record (atomic write on first action) | On-chain `nullifierUsed[keccak(scope, N)]` (DES-001) |
| `getProperties()` | Returns `{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }` | Returns all true |
| `IS_INSECURE_MOCK()` | Returns `false` — v1 is an honest conventional backing, NOT a mock (see §10.13.4) | Returns `false` |

**Invariants both backings MUST satisfy:** one-vote-per-account per scope (v1) / one-vote-per-person per scope (v2) — v1: conventional nullifier record prevents double-voting from the same account; does NOT provide one-person-one-vote (`getProperties().onePersonOneVote = false`; T-06, ADR-025 §(a)). v2: on-chain nullifier derived from unique personhood proof — DES-001; genuine one-person-one-vote guarantee; eligibility scoping (membership record + snapshot v1; `vote()` snapshotRoot v2); verifiable tally output; no retrospective result change after tally closes.

**Properties ONLY v2 provides:** unlinkability, receipt-freeness, coercion-override, no identity at rest, anonymity floor (k ≥ 1000).

**Composes with:** `ICredentialAdapter` (ADR-017, DES-070) — v2 routes through it; v1 bypasses it honestly (declared in `getProperties()`). `IProofVerifier` seam (ADR-022) — used by `IBallotService` v2 tally path; not used by `IEligibilityVerifier` directly.

### 10.13.3 DES-096 — IBallotService seam

**Purpose:** A stable design-level interface decoupling the application layer from the ballot-casting and tally mechanism.

**Design-level interface (methods and semantics):**

| Method | v1 backing behaviour | v2 backing behaviour |
|--------|---------------------|---------------------|
| `castBallot(electionId, choice, memberId, eligibilityRef)` | Authenticated write to database; `BallotReceipt` includes choice + timestamp + member reference | MACI encrypted ballot to message queue (DES-023); `BallotReceipt` includes only the message hash |
| `changeBallot(electionId, newChoice, memberId)` | Database UPDATE with atomic overwrite; audit log records change | MACI key-change + re-vote; indistinguishable from original ballot at tally layer (FR-032, DES-023) |
| `computeTally(electionId)` | SQL COUNT aggregate; result hash published to on-chain audit contract | MACI threshold coordinator DKG → on-chain ZK tally proof (DES-024, DES-025); independently verifiable by anyone |
| `getTallyProperties()` | Returns `{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }` | Returns all true |

**Composes with:** `IProofVerifier` seam (ADR-022) — v2 `computeTally()` produces a ZK proof verified through `IProofVerifier`; v1 `computeTally()` produces a conventional aggregate and does not call `IProofVerifier` (honest bypass, not hidden).

### 10.13.4 IS_INSECURE_MOCK() and the promotion gate

The CI deployment-safety scan (§14, §7.1) blocks any deployment to testnet, staging, or production that has a MockVerifier in the VerifierRegistry (`IS_INSECURE_MOCK()` returning true). The distinction between a mock and the v1 conventional backing is critical:

| Entity | Lies about verification? | `IS_INSECURE_MOCK()` | Promotion past devnet? |
|--------|------------------------|---------------------|----------------------|
| `MockVerifier` | YES — accepts any proof without checking | `true` | Blocked by CI gate |
| v1 conventional backing | NO — checks by conventional means honestly | `false` | Permitted (honest, disclosed) |
| v2 ZK backing | NO — verifies ZK proof on-chain | `false` | Permitted (real verifier) |

The v1 conventional backing MUST NOT be labelled or implemented as a mock. It honestly performs what it claims. `IS_INSECURE_MOCK()` returns false because it is NOT an insecure mock: it is a functioning conventional implementation, honest about what it is and what it is not. The CI gate checks for lying; it does not check for genuine ZK-property absence. The latter is governed by the conflict table in ADR-024 §(c) and is a decision for the approver.

### 10.13.5 DES-097 — v1 conventional-auth stack and package disposition

**v1 recommendation (from ADR-024 §(b)):** Blockchain as public transparent-audit record only. The v1 application is a conventional Next.js PWA + Postgres database. A small, auditable on-chain audit contract on Base publishes petition milestones, tally result hashes, manifesto version hashes, and party activation events. No on-chain governance execution in v1.

| Package / service | v1 disposition | Rationale summary |
|---|---|---|
| `packages/contracts` | **Adapt** — deploy only the lightweight audit-record contract subset; full on-chain governance contracts are v2-only | Satisfies FR-108 (blockchain as audit record); CI gate passes honestly |
| `packages/circuits` | **Untouched for v2** — no circuits in v1 | v1 backings never call a circuit |
| `packages/protocol` | **As-is** — pure rules, zero deps; governance state machines, threshold formula, encoding | Strongest reuse candidate; valid in both v1 and v2; differentially tested against chain in v2 |
| `packages/sdk` | **Adapt** — strip ZK proof generation + on-chain PersonhoodRegistry/PartyRegistry paths; expose IEligibilityVerifier and IBallotService interfaces | v2 is a seam-local swap |
| `packages/ui` | **As-is** — DES-093 token set, DES-094 privacy-status component apply unchanged; design system is independent of identity/ballot backing | ADR-023; independent of ZK/conventional split |
| `apps/web` | **As-is with feature flags** — v2-only features flag-off (existing ADR-037 discipline); DES-098 honesty notice is v1 addition | Flag discipline already designed |
| `apps/verifier` | **Untouched for v2** — meaningful only for MACI ZK tally proofs; not built in v1 | Activates when IBallotService v2 backing wired |
| `services/indexer` | **As-is** — indexes whatever on-chain events exist; event set grows in v2 | Architecture unchanged |
| `services/relayer` | **Adapt** — sponsors audit-record writes in v1; ZK proof submission relaying is v2 | Sponsorship model applies in both |
| `infra` | **As-is** — same Base L2, IPFS/Arweave, Postgres topology | |
| `tools` | **As-is** — dep-guard, codegen, test harness; IS_INSECURE_MOCK CI scan unchanged | |

**Ratification note (2026-08-23):** Ruling 3 (Rathish, 2026-08-23; DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §2) RATIFIES the ADR-024 §(b)/DES-097 stack recommendation. The blockchain-as-public-transparent-audit-record design is the v1 foundation. v1's story is **transparency-now, privacy-later**: the chain delivers the transparency guarantee in v1; the ZK layer delivers the privacy guarantee in v2. Composition confirmed: this is identical to the blockchain-as-audit-layer design in §5.1/ADR-009/FR-108 — the chain remains commitments and audit-record only; the conventional DB is the application store; no restricted data appears on-chain; the boundary is unchanged. ADR-024 §(b) dated amendment note records this ratification.

### 10.13.6 DES-098 — v1 honesty notice

**Element:** Wherever a vote is cast in v1, the UI MUST display a plain-language honesty notice before the ballot is confirmed. The notice MUST state: (1) this vote uses conventional authentication and is NOT the private receipt-free ballot; (2) the platform database CAN see vote direction and party membership; (3) the cryptographic private ballot — where the platform is technically unable to see it — is available when the platform upgrades to the v2 privacy layer; (4) the tally result IS publicly auditable and published to the blockchain.

**Requirements:**
- Visible before confirmation; non-dismissable (voter must acknowledge to proceed); WCAG 2.2 AA (DES-081); screen-reader accessible
- Displayed on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation)
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour
- Backs: **FR-131** (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009)

**Relationship to existing design:** DES-063 (coercion-safe confirmation surface, v2) is the v2 successor; DES-098 is the v1 disclosure surface. §13 "Public tallies in Phase 1" debt row's disclosure discipline is the precedent pattern.

### 10.13.7 Charter-layer conflict check (ADR-024 §(c))

The following tensions between v1 conventional auth and the Charter/Guarded layers are recorded FOR THE APPROVER'S DECISION. They are surfaced, not reconciled. Full analysis in ADR-024.

**Legend — "v1 status" column notation:**
- **(i) SATISFIED** — v1 meets this rule fully by application design; no approver decision required.
- **(ii) DEFERRED** — the property is absent in v1; v1 makes no claim to it; honest disclosure via DES-098 (FR-131) applies; no approver decision on the claim itself (only on whether deferral with disclosure is acceptable scope).
- **(iii) TENSION — FOR THE APPROVER'S DECISION** — the v1 implementation and the Charter or Guarded layer rule are in active tension; an explicit approver ruling is required before v1 implementation begins.

| ID | Tension | v1 status | Decision owed |
|----|---------|-----------|--------------|
| T-01 | Charter Rule 6 — anonymity by default | **(ii)/(iii)** Conventional DB links account↔party; operator can comply with subpoena | Does the approver accept v1 as a disclosed non-anonymous product? |
| T-02 | FR-128 — subpoena test | **(iii)** Conventional DB operator CAN disclose; FR-128 requires technical inability to comply | Is the subpoena test deferred in full to v2? |
| T-03 | BR-009 / FR-082 — anonymity guarantee | **(ii) DEFERRED** | Are FR-082 and BR-009 accepted as v2-only properties? |
| T-04 | NFR-003 — receipt-freeness (Guarded Layer named absolute) | **(ii) DEFERRED with honest disclosure** | Is deferral-with-disclosure acceptable? |
| T-05 | Charter Rule 3 — no privileged role over outcomes | **(ii) DEFERRED** Tamper-evidence (detectable) not tamper-prevention | Is Charter Rule 3 accepted as v2-only (immutable core contracts)? |
| T-06 | Charter Rule 1 — one human one vote vs v1 phone-auth | **(ii) DEFERRED with honest disclosure** — phone auth is a spam speed-bump, NOT a personhood proof; multiple accounts per person remain possible if a person holds multiple numbers; `getProperties().onePersonOneVote = false`; FR-131/FR-132/H-15 carry the caveat; v1 MUST NEVER claim one-person-one-vote | Does the approver accept the deferral-with-disclosure model for Charter Rule 1 in v1? AWAITING APPROVER CONFIRMATION (surfaced in DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5; Doc 02 v2.8.0 H-15/T-06) |
| T-07 | FR-003 (no identity data at rest) vs v1 phone-number storage | **(ii) DEFERRED / PARTIAL** — verified phone number is identity data and is stored as the v1 account credential; Doc 02 v2.8.0 reclassifies FR-003 from IN-v1 to PARTIAL; restricted-class posture: not on public record, not in governance-path stores, NFR-010 §7 carve-out; FR-133 rate-limiting may require retention deepening the tension; v2 eliminates by construction (nullifier-only on-chain) | Is the PARTIAL classification with restricted-class posture for FR-003 acceptable in v1? AWAITING APPROVER CONFIRMATION (surfaced in DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md §5; Doc 02 v2.8.0 H-16/T-07; ADR-025 §(c-ii)) |

**Resolved items (for completeness):** Charter Rule 2 (no transferable power) — SATISFIED. Charter Rule 5 (no behavioural surveillance) — SATISFIED. Charter Rule 7 (CON-001, parties only) — SATISFIED. CON-012 (no bespoke unaudited crypto) — SATISFIED. CON-013 (non-violence clause) — SATISFIED.

### 10.13.8 DES-099 — v1 spam-resistance layer

**Element:** A conventional fraud-detection service in the enrolment service path. It is NOT in any governance-path data store; flag records are restricted-class operational data.

**Components and normative semantics (FR-133, ADR-025 §(b)):**

| Component | Purpose | Tech |
|-----------|---------|------|
| Phone-intelligence API | Classify the registering phone number: real mobile, eSIM, VoIP, virtual/cloud-farm, recently recycled, blocked-carrier MSISDN | Third-party phone-intelligence vendor (vendor TBD; Doc 13 assumption (a) partially resolved — mechanism set, vendor open) |
| Velocity / device anti-fraud | Detect high-frequency registration patterns, device-fingerprint clustering, IP/ASN clustering, registration-attempt surge | Application-layer rate-limiting and device-signal checks; no persistent cross-session device ID stored outside the restricted audit log |

**Normative flag-don't-block rule (FR-133, Ruling 2 — non-negotiable):**
- A suspicious classification MUST result in rate-limiting or queue-slowing, NOT a hard block.
- A governance action (petition endorsement, membership join, proposal vote) MUST NEVER be denied solely on a fraud flag (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute).
- A first-class false-positive dispute path is mandatory — a legitimate citizen using VoIP or eSIM MUST be able to dispute without explaining their phone-number choice.
- Flag events are restricted-class: not queryable by members, not published to any public record, not written to any on-chain store. Stored only in the restricted operational audit log with the enrolment service.

**Privacy residual (recorded, not hidden):** The enrolment phone number is transmitted to the phone-intelligence vendor for scoring. Mitigation posture: minimal payload (phone number only; no party context, no political context); vendor contract must include no-retention/no-resale/no-profiling terms; vendor failure mode is fail-open (enrolment proceeds; spam layer is advisory). Residual accepted for v1; eliminated in v2 by ZK enrolment making the spam layer unnecessary at the uniqueness level. Full analysis in ADR-025 §(c-iii).

---

## 11. Situation & failure-mode analysis (per requirement)

| Requirement / DES | Normal | Edge | Failure → behaviour |
|---|---|---|---|
| FR-001 / DES-001 | one credential per human | issuer re-issues after device loss | duplicate `Nᵢ` → recovery flow (FR-071, DES-071), not rejection as duplicate |
| FR-004 / DES-002 | ≥2 issuers per region | one issuer offline | others still serve; **fail closed** if set would drop below 2 |
| FR-005 / DES-003 | issuer honest | issuer compromised | epoch cap throttles; 48 h expedited removal; existing credentials survive |
| FR-006 / DES-005 | resident proves region | credential expired | proof fails `validUntil` → prompt re-attestation |
| FR-009 / DES-007 | 5 sources agree | one corrupt | median absorbs it; > ±5%/quarter → **revert** |
| FR-009 / DES-010 | population known | oracle deflated | verified-resident floor and 500-endorsement floor bind |
| FR-014 / DES-011 | one endorsement each | replay from another address | nullifier already spent → **reject** |
| FR-016 / DES-009 | threshold met → activate | denominator moves mid-petition | requirement frozen at open → unaffected |
| FR-018 | activation automatic | nobody calls `activate()` | permissionless — any citizen, any indexer, any observer can |
| FR-020 / DES-013 | anyone joins | thin region (k < 1000) | refuse to publish; client escalates scope to nearest ancestor region |
| FR-021 | one member, one vote | member leaves mid-vote | snapshot governs; vote stands |
| FR-025 / DES-016 | tier rules apply | charter tries to weaken | **revert** `CharterWeakerThanFloor` |
| FR-026 / DES-021 | timelock elapses → execute | execution call reverts | proposal stays executable; retryable, permissionless |
| FR-027 / DES-022 | entrenched clause needs 90% | proposal targets immutable clause | **revert** at proposal time, not at execution |
| FR-028 / DES-019 | snapshot eligibility | 10 000 accounts join after open | zero effect on this proposal; `AnomalousGrowth` raised for the next |
| FR-030 / DES-023 | ballot encrypted | coordinator member offline | 5-of-7 tolerates 2; below threshold → re-run, **never** a plaintext tally |
| FR-031 | receipt-free | user screenshots confirmation | screen is choice-independent; re-vote remains possible → receipt is worthless |
| FR-032 | last ballot counts | re-vote at deadline | last message in the queue wins; window ≥ 72 h |
| FR-034 / DES-026 | no interim tallies | chain state read directly | **we state plainly: on-chain Phase-1 tallies are observable** — closed by MACI in Phase 3 |
| FR-036 / DES-027 | self-nomination in own region | member moves region | candidacy invalid for new region; term in old one runs to expiry |
| FR-042 / DES-030 | recall in two stages | recall spam | grace window after election + cooldown after failed recall |
| FR-049 / DES-033 | contribution under cap | whale splits into 100 donations | cap is per **nullifier**, not per address |
| FR-053 / DES-034 | fork proceeds | parent tries to block | no blocking function exists; initiators counted on-chain via ZK proofs |
| FR-058 / DES-042 | recovery via guardians | guardians collude | 7-day timelock + owner veto + public notice |
| FR-061 / DES-043 | sponsored action | budget exhausted | **queue with explanation and expected time**; never charge, never deny |
| FR-062 / DES-064 | participation profile viewed | OI-13 unresolved | profile not served until OI-13 resolved at Gate 1 re-affirmation; flag `participation_profile` off above dev |
| FR-064 / DES-065 | member joins party B | party A membership scope nullifier spent | join B burns the global membership-scope nullifier; tenure clock resets to zero |
| FR-065 / DES-066 | candidate receives feedback votes | member attempts second vote on same candidate | per-(election, candidate) scope nullifier already spent → **reject** |
| FR-066 / DES-067 | three debates scheduled per candidate | off-chain content host fails | CID still on-chain; attendance attestation preserved; content is lost unless IPFS/Arweave pin survives |
| FR-067 / DES-067 | candidacy from post-debate vote | incumbent skips debate cycle | no automated candidacy without completed debate cycle; on-chain guard rejects ballot inclusion |
| FR-068 / DES-068 | tenure waiver active (party age < 3 months) | new-member surge during waiver | FR-023 churn limits and FR-028 snapshot remain active — waiver relaxes tenure only |
| FR-069 / DES-069 | nullifier derived and stored | credential expired during enrolment | derivation circuit check 2 fails (`validUntil > blockTimestamp`) → **reject** with reason |
| FR-071 / DES-071 | legitimate recovery via collision | nullifier already exists | → RECOVERY_PENDING; 7-day delay; notification; active-key veto window opens |
| FR-072 / DES-071 | recovery pending | active key submits veto | → RECOVERY_ABORTED; existing key in control; recovery.state = ABORTED on-chain |
| FR-073 / DES-072 | GOV_EID issuer enrols | AVAILABILITY_ONLY issuer calls `enrol()` | → **revert** `NotEnrolmentClass`; no nullifier minted |
| FR-112 / DES-090 | trust-anchor revocation enacted by governance vote | anchor compromised during emergency timelock window (7 days) — attacker enrolls synthetic identities before `anchorEffectiveAt` | `REVOCATION_PENDING` is entered at vote enactment (public on-chain signal); `enrol()` against the affected anchor CONTINUES until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on; the window between enactment and `anchorEffectiveAt` is precisely the accepted RISK-30 residual — mitigated by the per-issuer epoch cap (DES-003); accepted residual per §18 SC-13/SC-14 closure entry |
| FR-113 / DES-090 | trust-anchor rotation with overlap window | rotation enacted; old-anchor credentials renewed after `anchorOverlapEnd` | enrol() rejects old-anchor proofs after `anchorOverlapEnd`; the 60-day window (§10.11) is the SLA the issuer must meet; no citizen locked out who renews within the window |
| FR-114 / DES-088 | steward election with quorum | election-capture attempt: surge of new enrolments before the snapshot in order to dilute or capture the steward ballot | growth-surge defence (FR-023/FR-028; DES-015/DES-019) applies to the steward election ballot; snapshot eligibility frozen at `snapshotRoot`; post-snapshot enrolments confer no vote in that election |
| FR-117 / DES-089 | all steward seats vacant | any citizen-facing flow attempted during complete steward vacancy | zero degradation BY CONSTRUCTION — no citizen-path contract imports or calls `StewardRegistry`; enrolment, party creation, voting, proposal submission, and forking all proceed independently of steward liveness; the vacancy simulation test (§14) verifies this |
| FR-118 / DES-087 | Charter Layer (Tier-1) entrenched rule proposal submitted | actor submits a proposal targeting one of the seven entrenched rules with majority support or any governance layer | `ProtocolGovernance.proposeAmendment()` checks `entrenched[ruleId]` at submission and reverts `EntrenchedRule` regardless of layer, quorum, or claimed support; no ballot is opened; the check is pre-execution, not post-tally |
| FR-119 / DES-087 | Guarded Layer (Tier-2) super-process — transient-majority attack | a majority forms transiently and tries to carry a named-absolute change before the fork window is realistically exercisable | defeated by two-vote window separated by 180-day inter-vote gap; a transient majority at first vote must persist through the full window to reach second vote; fork petition (FR-120, FR-053) is exercisable during the 180-day window |
| FR-119 / DES-087 | Guarded Layer (Tier-2) super-process — audit suppression | steward or actor publishes a trivial or incomplete audit ref to open the second vote early | `secondVote()` precondition checks `publishAuditRef` was called AND `block.timestamp >= auditPublishedAt + AUDIT_LEAD_TIME`; the 30-day lead time is enforced in code; publishing a ref does not immediately allow the second vote |
| NFR-014 / DES-041 | normal submission | sequencer censors | L1 force-inclusion; tested in CI |
| RISK-22 / DES-071 | stolen credential; attacker initiates recovery | victim receives notification | victim vetoes via active key (on-chain) within 7-day window → ABORTED |
| RISK-23 / DES-071 | attacker suppresses notification channel | victim cannot see veto alert | independent on-chain veto path available via active key WITHOUT notification channel; complete device + channel compromise is accepted residual |
| RISK-24 / DES-071 | recovery initiated during live ballot | recovering credential attempts to vote | `isInRecovery(nullifier)` check in `vote()` → **reject**; active key still votes normally |

### Single-point-of-progress sweep — steward powers (FR-115) and steward-touching §5.4 calls

Directive from approver (Rathish, 2026-08-11): sweep all four FR-115 steward powers and all steward-touching §5.4 calls for citizen-entitled process stall risks (SC-15 consequence sweep). A power is a concern ONLY when its absence or inaction can prevent a citizen from exercising a right they are entitled to by a FR/NFR. Transparency obligations and administrative functions are noted but are not citizen-process blockers.

| Power / Call | Citizen-entitled process at risk? | Risk before fix | Fix applied |
|---|---|---|---|
| publishAuditRef (FR-115; §5.4) — steward publishes the audit reference required before the Guarded Layer second vote | YES | Steward inaction or vacancy could stall the second vote and hence any Guarded Layer amendment indefinitely | DES-092 (SC-17): after STEWARD_INACTION_WINDOW (60 days from firstVoteClosedAt) ANY enrolled citizen may call publishAuditRef(); steward vacancy triggers the fallback immediately with no window; audit substance unchanged |
| Issuer-onboarding coordination trigger (FR-115; §5.4) — steward performs the coordination step that initiates issuer onboarding into the trust list | YES | Steward inaction could delay or block the ability of a region's citizens to use a new legitimate issuer for enrolment | DES-092 (SC-19): same 60-day citizen-fallback pattern; any enrolled citizen may trigger the coordination step after the window; vacancy triggers immediately |
| Fund custody / treasury operations (FR-115) — stewards administer the platform treasury | NO | Treasury spend or release is a steward-delegated administrative function; no citizen is entitled to require a specific treasury disbursement; enrolment, voting, party creation, forking, and all citizen-facing flows are independent of treasury operations | N/A — not a citizen-process blocker; zero-dependency property (FR-117, DES-089) verified by vacancy simulation test (§14) |
| Operational reports (FR-115(d) / NFR-019) — stewards publish platform transparency reports | NO | A missing report delays public information but blocks no citizen transaction, vote, or enrolment; the reporting obligation is transparency-only | N/A — reputational only; addressed by Doc 11 SLO monitoring |
| electSteward (§5.4) — initiates a steward election | NO — citizen-initiated | Any enrolled citizen or coalition meeting the petition bar may trigger an election; the outgoing steward cannot block their own replacement ballot | N/A — citizen-initiated; steward absence accelerates, not blocks |
| recallSteward (§5.4) — initiates a steward recall ballot | NO — citizen-initiated | Any enrolled citizen coalition meeting the 20% affirmative quorum bar may trigger a recall; the steward cannot veto the ballot | N/A — citizen-initiated |

**Sweep verdict:** two citizen-entitled stall risks found and fixed (publishAuditRef, issuer-onboarding coordination). The remaining four powers are either citizen-initiated (elections, recall) or non-blocking transparency/administrative functions. No further single-point-of-progress risk remains in the steward layer after DES-092 (SC-17 + SC-19).

## 12. Architecture Decision Records

Full records in `docs/adr/`. Status of all twenty-five ADRs: **Accepted**.

| ADR | Decision | Chief consequence accepted |
|---|---|---|
| 001 | OP Stack L2 (Base); sovereign rollup deferred to Phase 4 | sequencer liveness/ordering trust; mitigated by force-inclusion |
| 002 | ERC-4337 + passkeys + social recovery; no platform key | passkey vendor dependency; mitigated by multi-device, hardware keys, recovery |
| 003 | Issuer-agnostic personhood, 1-of-N, tiered, scope-bound nullifiers; **amended by ADR-016 for Phase 1** | Sybil resistance equals weakest accepted issuer; Phase-1 class restriction per ADR-016 |
| 004 | Hierarchical regions, per-region credential trees, median population oracle with floors | attesters learn a region request; boundary redraws are a governance surface |
| 005 | Circom + Groth16 on bn254, Poseidon LeanIMT; **amended 2026-08-21 (REC-1: Decision-2 "≥ 500 contributors" convention superseded — contributor count now set by assurance-based sizing per ADR-022; ceremony transparency/transcripts/beacon unchanged — DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md)** | trusted setup exists — failure mode is forgery, **not** deanonymisation |
| 006 | MACI + 5-of-7 threshold coordinator | large engineering cost; tally latency; committee liveness dependency |
| 007 | No transferable power; 1p1v; capped, influence-free treasury | no token-funded growth; 1p1v makes personhood load-bearing |
| 008 | Tiers, snapshots, adaptive quorum, entrenchment, fork rights | tenure gates constitutional votes for new members; forks can fragment movements |
| 009 | Commitments on-chain, content on IPFS + Arweave, nothing personal anywhere | permanence cuts both ways; illegal content cannot be deleted, only filtered |
| 010 | Immutable core, timelocked registries, guaranteed exit, no pause | a core bug is unfixable in place — mitigated by size, audits, rehearsed migration |
| 011 | Monorepo with CI-enforced dependency direction | CI cost; needs the guard, not a convention |
| 012 | Local-first PWA, on-device proving, reproducible bundle | browser sandbox is weaker than native; proving heavy on low-end devices |
| 013 | Parties not elections; erasure by non-collection; powerlessness by design | "you can't stop bad actors" is a permanent, accepted criticism |
| 014 | Non-authoritative indexer, replaceable relayer, Sybil-resistant sponsorship | our own services become a convenience monoculture unless diversity is funded |
| 015 | Asymmetric candidate feedback (upvote +3, downvote −1; 25% approval floor) | critics note scoring flatters incumbents; asymmetry is the deliberate risk accepted to protect downvoters (ADR-015) |
| 016 | Government eID sole enrolment-nullifier class per region (Phase 1); amends ADR-003; **amended 2026-08-20 (Phase-1 pilot rail named: India/Aadhaar offline KYC; OI-04-PILOT closed — ADR-021)**; **amended 2026-08-20 (OI-20 CLOSED: FR-004 satisfied at architecture level; Phase-1 single-rail is dated deployment limitation, exit Phase 2/eIDAS 2.0; 50% cap inoperative Phase-1 duration; permanence requires Charter-layer re-entry — FR-129)** | accepted exclusion: no-doc citizens cannot enrol Phase 1; state compulsion risk concentrated (ADR-016) |
| 017 | Deterministic in-circuit nullifier derivation + pluggable credential adapter interface; **amended by ADR-020 (post-registration lifecycle)**; **amended 2026-08-20 (Phase-1 first-production adapter named: India/Aadhaar offline KYC, class (c); OI-04-PILOT closed — ADR-021)** | per-class circuit development cost; trust-list freshness operational dependency (ADR-017) |
| 018 | Nullifier-collision recovery: 7-day delay, active-key veto, voting bar | complete device + channel compromise is accepted residual (ADR-018) |
| 019 | Three-layer amendment boundary: Charter Layer (Tier-1) — seven entrenched rules fork-only; Guarded Layer (Tier-2) — named absolutes via five-property super-process (80%/25%, 180-day window, audit); Open Layer (Tier-3) — ordinary citizen vote; **amended 2026-08-11 (SC-17: citizen-inaction fallback for publishAuditRef)** | a sustained 80%/25% supermajority over 180+ days CAN weaken a named absolute — by design; fork right is the residual protection (ADR-019) |
| 020 | Trust-anchor lifecycle: rotation via 60-day dual-anchor overlap (SC-14 closed); revocation ordinary 30-day / emergency 7-day timelock (SC-13 closed); both enacted only by passed governance vote via Governor.execute(); **amended 2026-08-11 (SC-18: ROTATION_PENDING abort path — ROTATION_ABORTED state added)** | 7-day emergency window remains a Sybil window — RISK-30 accepted; epoch cap bounds blast radius (ADR-020) |
| 021 | Verification gates COUNTING, never joining; on-device nullifier-only identity posture; pilot sequence (Phase 1: India/Aadhaar offline KYC; Phase 2: EU/eIDAS 2.0; Phase 3: USA deferred); subpoena test as design invariant; two rejected designs recorded — persistent referral graph and encrypted identity registry (2026-08-20, directed by Rathish; DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decisions 1–4); **amended 2026-08-20 (OI-19 CLOSED: FR-125 finalised, non-invite fallback mandatory, FR-020 unamended; OI-20 CLOSED: FR-004 satisfied at architecture level, Phase-1 dated limitation, Charter-layer guard FR-129)** | CON-015 Gate-2 legal-opinion dependency; OI-19 and OI-20 both CLOSED 2026-08-20 (DECISIONS-2026-08-20-OI19-OI20.md); open-tier account farms accepted (zero counted impact) |
| 022 | Groth16 stays for Phase 1; near-irreversible Charter-adjacent commitment; PPoT Hermez reused at ~$0 for phase-1 setup; assurance-based per-circuit phase-2 (not convention count); Gate-2 six-circuit transcript set batchable into a campaign of days; accepted trade-off over universal-setup; revisit trigger: Phase 2+ circuit-count dominance; NFR-009 (two independent audits before Gate 2) unchanged (2026-08-21, directed by Rathish; DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md REC-2) | per-circuit phase-2 cost grows with circuit count — growth is the revisit trigger; migration is a verifier swap by design (`IProofVerifier` seam) but a full re-audit in practice |
| 023 | Design system token set (DES-093) + privacy-status signature element (DES-094) adopted as the normative foundation for `packages/ui`; territory rule (navy = public-party / paper = private-user) is normative; PrivacyStatus component's normative privacy binding enforces FR-124 at component level; four wireframe conflicts recorded (§10.12.6) as engineer and PO disposition guidance; ADR-011 packages/ui designation is now concretely specified (2026-08-22, directed by Rathish; design/wireframes/index.html) | Fraunces font bundle risk: engineer must verify 15 MB install floor and self-host (Google Fonts CDN blocked by CSP); token values are specific hex, not a semantic system — any brand change is a DES amendment; three open conflicts (C-01 adapter-driven strings; C-02 unbacked 100-member cap; C-03 missing finance ledger screen) require PO/engineer action before build |
| 024 | v1/v2 delivery-architecture split: IEligibilityVerifier seam (DES-095) and IBallotService seam (DES-096) as the stable abstraction boundary between conventional-auth v1 and ZK/MACI v2; v1 stack = blockchain as audit-record only (not full on-chain governance); v1 package disposition; honesty notice DES-098; Charter-layer conflict table T-01..T-05 for approver's decision (2026-08-23, directed by Rathish); **amended 2026-08-23 (Ruling 3 RATIFIED: blockchain-as-audit-record stack recommendation confirmed by approver; §(b)/DES-097 ratification note added)** | Migration cost accepted: v1→v2 migrates identity and ballot backings; application logic, design system, and package topology above the seams are unchanged; Charter-layer tensions T-01..T-07 require approver decision (§10.13.7, ADR-024 §(c), ADR-025 §(d)) before v1 implementation begins |
| 025 | v1 identity backing: phone-based SMS verification (one account per verified phone number; FR-132; spam speed-bump NOT personhood proof; v1 MUST NOT claim one-person-one-vote); DES-099 spam-resistance layer (phone-intelligence VoIP/virtual-number detection + velocity/device anti-fraud; flag-don't-block; first-class false-positive path; FR-133); T-06 and T-07 conflict-table extensions for approver's decision (2026-08-23, directed by Rathish, Rulings 1–2) | Multi-phone multi-account Sybil ceiling accepted for v1 (c-i); phone number at rest is identity data — FR-003 PARTIAL (c-ii, T-07); third-party SMS provider and phone-intelligence vendor dependencies with privacy residuals (c-iii); SIM-swap/number-recycling attacks exist (c-iv); SMS cost must fit NFR-005 (c-v); no-phone exclusion parallel to ADR-016 Aadhaar exclusion (c-vi) |

## 13. Risks & technical debt

The **living risk register of record is Doc 13 §6**; RISK-01..RISK-24 are owned there and are
not duplicated here. Architectural debt carried knowingly:

| Debt | Why now | Repayment | Severity |
|---|---|---|---|
| Mock verifiers in Phase 1 | circuits depend on ceremonies (Phase 2) | replaced at Phase 2; a mock in a promoted environment fails CI today | Medium (blocked by CI) |
| Public tallies in Phase 1 | MACI is a Phase-3 deliverable | MACI flag; client MUST state plainly that Phase-1 votes are anonymous but not receipt-free | Medium (disclosed) |
| Growth-sample array O(n²) scan in `Party` | 512 samples × state-changing path = liveness ceiling, not just a cost: joins become impossible at the cap | move to ring buffer (DES-015 ref) before mainnet scale | **High — liveness blocker at cap** |
| No Elections/Recall/Treasury contracts yet | Phase-3 scope, flags off | built behind their flags | Medium |
| Region path stored as a string on-chain | readability for auditors | acceptable; measured, small | Low |
| Participation profile (DES-064) off above dev | OI-13 unresolved | ship after Gate 1 re-affirmation resolves OI-13 | Open (governance) |
| Fork feature flag off above dev | calldata vulnerability deferred at Gate 1 (FORK-CRIT) | design now finalised in DES-034; engineering fix required before flag is enabled | **High — security blocker** |

## 14. Test hooks designed in

- `@trumocracy/protocol` is a dependency-free reference implementation for differential testing.
- Deterministic in-process EVM harness (solc-js + EthereumJS): no RPC, no downloads.
- `MockVerifier.IS_INSECURE_MOCK()` exists so the deployment-safety test can detect it.
- Every governance action emits an event, making the system replayable from chain data.
- `Chain.warp()` for time-dependent governance; snapshots for adversarial branch testing.
- Capability-absence assertions over ABIs and deployed bytecode (DES-075, DES-077, DES-080, DES-086).
- `snapshotRoot` binding in `vote()` must be tested with an adversarial tree root (ISS-C1 fix).
- `isInRecovery` gate in `vote()` must be tested with a recovery-pending nullifier.
- **FR-117 capability-absence suite (DES-089):** (a) *static* — `tools/dep-guard` asserts that no citizen-path module (`packages/contracts` core, `packages/sdk`, `apps/web`) imports or references `StewardRegistry`; the ABI allowlist snapshot includes no `StewardRegistry` selector in any citizen-path entrypoint; (b) *dynamic* — the vacancy simulation runs the full citizen E2E suite (enrol, join, endorse, vote, propose, fork-petition) with every steward seat in `StewardRegistry` explicitly set to vacant; every flow MUST complete without error; zero degradation is the pass criterion.
- **Guarded Layer super-process property tests (DES-087):** Six tests corresponding to the five OI-18 properties (Property 3 and Property 5 each have two sub-cases) plus the additional quorum requirement; `enact()` MUST revert in each case. Property numbering matches ADR-019 and OI-18: (P1-supermajority) firstVote cast at 75% approval — enact() MUST revert `SupermajorityNotMet`; (P2-window) enact() called before `windowEnd` — MUST revert `WindowNotElapsed`; (P3-two-votes-a) enact() called before firstVote closes — MUST revert `VoteNotComplete`; (P3-two-votes-b) enact() called with secondVote not yet closed — MUST revert `VoteNotComplete`; (P4-growth-surge) snapshot committed at `proposeAmendment()` — (a) membership join/enrolment post-snapshot MUST NOT affect vote eligibility at firstVote or secondVote, (b) attempt to update `snapshotRoot` between firstVote and secondVote MUST revert `SnapshotImmutable`, (c) churn-limit check enforced during the entire inter-vote window — `enact()` MUST revert if churn limits were violated at any point; (P5-audit-a) enact() called with no audit ref published — MUST revert `AuditNotPublished`; (P5-audit-b) enact() called with audit published but `auditPublishedAt + AUDIT_LEAD_TIME > block.timestamp` — MUST revert `AuditLeadTimeNotSatisfied`. Each test confirms the specific revert reason from the `ProtocolGovernance` state machine.

## 15. Traceability

Maintained in the RTM (Doc 08). Every `FR/NFR` traces up to a `BR` and down to a `DES`, a
`US` and a `TC`. §5.2 provides the `FR/NFR → DES` half; Doc 05 provides `FR → US`; Doc 07
provides `US → TC`. **This is a forward-looking statement**: Doc 08 v1.0.0 recorded 54 open
Must rows; the DES additions in v1.1.0 close the 15 tester-identified DES-gap rows immediately
(FR-010, FR-011, FR-035, FR-039, FR-056, FR-060, NFR-006, NFR-009, NFR-010, NFR-011, NFR-012,
NFR-013, NFR-015, NFR-023, NFR-024) once the tester updates Doc 08. The remaining gaps are
pre-existing Phase-3, environment, external, or mechanism gaps per Doc 08 §gap-by-reason.

**v2.0.0 FR/NFR → DES additions (FR-112..FR-120):**

| Requirement | DES | Notes |
|---|---|---|
| FR-112 (trust-anchor revocation; member-vote only) | DES-090 (TrustAnchorLifecycle) | Ordinary + expedited emergency revocation paths; code-only enactment via `Governor.execute()`; normative design in ADR-020 |
| FR-113 (trust-anchor rotation; overlap window) | DES-090 (TrustAnchorLifecycle) | 60-day dual-anchor overlap window; enrol() accepts old OR new during window; normative design in ADR-020 |
| FR-114 (steward election; fixed terms; affirmative-quorum recall) | DES-088 (StewardRegistry) | Platform-scoped ballot; term record; recall with growth-surge defence |
| FR-115 (steward powers enumerated; unlisted action refused) | DES-089 (StewardPowers boundary) | ABI allowlist; four enumerated powers; CI assertion |
| FR-116 (stewards propose; citizens decide; no override) | DES-089 (StewardPowers boundary); DES-087 (ProtocolGovernance) | StewardRegistry has no enact path; only `Governor.execute()` can change protocol state |
| FR-117 (zero steward dependency; vacancy causes zero degradation) | DES-089 (StewardPowers boundary) | No citizen-path contract references StewardRegistry BY CONSTRUCTION; vacancy simulation test (§14) |
| FR-118 (seven entrenched rules; code rejection at submission) | DES-087 (ProtocolGovernance) | `entrenched` registry checked at `proposeAmendment()`; reverts `EntrenchedRule`; normative design in ADR-019 |
| FR-119 (three-layer amendment structure; Guarded Layer / Tier-2 super-process) | DES-087 (ProtocolGovernance); DES-091 (GovernanceConstants) | Five-property state machine; constants from §10.11; normative design in ADR-019 |
| FR-120 (unconditional fork right; fork flag off above dev) | DES-034 (fork with lineage) | Existing DES; no steward can block; fork flag status unchanged |

**v2.2.0 design-system additions (§10.12, 2026-08-22):**

| Requirement | DES | Notes |
|---|---|---|
| FR-082..086 (three-tier privacy), FR-124 (verified-status privacy, v2.3.1 ruling), NFR-001, NFR-002, NFR-011, NFR-013 | DES-093 (design token set) | 16 colour tokens + 2 typefaces + territory rule; normative foundation for `packages/ui/tokens.css`; ADR-023. US layer: owed — in the FR-121..FR-129 next-increment and in the design-debt items (§10.12.5). |
| FR-082..086, FR-124, NFR-001, NFR-002, NFR-024 | DES-094 (privacy-status component) | Three states (anon / ver / pub); normative FR-124 privacy binding (self-view only; no Supporter badge; absence-test obligation); normative for `packages/ui/PrivacyStatus`; ADR-023. US layer: owed — no US yet; the component underpins every flow that shows a privacy state, which spans US-0001..US-0130 range once built. Leak-check PASS recorded (§10.12.3). |

**v2.3.0 v1/v2 split additions (§10.13, 2026-08-23):**

| Requirement | DES | Notes |
|---|---|---|
| BR-006, BR-009, FR-030..035, FR-069, FR-070, FR-082..086, FR-106..108, FR-121..129, NFR-001..004, NFR-009, NFR-027, CON-002, CON-008, CON-012, CON-013 | DES-095 (IEligibilityVerifier seam) | Design-level interface decoupling the application from the identity/personhood proof mechanism; v1 backing: conventional DB auth; v2 backing: `ICredentialAdapter` → `PersonhoodRegistry` (ADR-017); IS_INSECURE_MOCK() = false in both honest backings; ADR-024. US layer: owed — PO to derive US from this design element. |
| BR-011, FR-030..035, FR-082..086, NFR-001..004, NFR-009 | DES-096 (IBallotService seam) | Design-level interface decoupling the application from the ballot-casting and tally mechanism; v1 backing: conventional DB write + audit chain log; v2 backing: MACI + 5-of-7 DKG + ZK tally proof (ADR-006, DES-023..025); `IProofVerifier` seam (ADR-022) is the upgrade path at the tally-proof layer; ADR-024. US layer: owed — flows through existing US once backings are wired. |
| FR-108 (blockchain as trust layer not database), CON-012, CON-013 | DES-097 (v1 conventional-auth stack and package disposition) | Blockchain as audit-record only in v1; `packages/contracts` audit subset deployed; `packages/circuits` / `apps/verifier` untouched for v2; `packages/protocol` as-is; disposition table in §10.13.5; ADR-024 §(b). US layer: no new US — package disposition is a build-time decision, not a story-level deliverable. |
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" to describe v1 voting; ADR-024 §(d); WCAG 2.2 AA (DES-081). US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface. |

**v2.4.0 v1 phone-auth + spam-resistance additions (§10.13, 2026-08-23):**

| Requirement | DES | Notes |
|---|---|---|
| FR-132 (v1 phone-based authentication; Must; owner Marcus Adeyemi; traces BR-006/BR-012; Doc 02 v2.8.0) | DES-095 amended (IEligibilityVerifier seam — v1 backing named) | v1 backing of IEligibilityVerifier now specified: phone-verified account, one per SMS-verified phone number; seam interface and method signatures unchanged; v1 MUST NOT claim one-person-one-vote; IS_INSECURE_MOCK() = false; ADR-025 §(a). US layer: owed — PO to derive US from FR-132 at next catch-up. |
| FR-133 (v1 spam-resistance layer — flag-don't-block; Must; owner Rafael Duarte; traces BR-012/BR-003; Doc 02 v2.8.0) | DES-099 (v1 spam-resistance layer) | Phone-intelligence VoIP/virtual-number detection + velocity/device anti-fraud; flag-don't-block semantics (FR-061 degrade-never-deny; FR-125/OI-19 rate-limiter-never-admission-condition; FR-020 absolute); false-positive dispute path mandatory; flag data restricted-class (not on public record, not in governance-path stores); ADR-025 §(b). US layer: owed — PO to derive US from FR-133 at next catch-up. |

## 16. Open questions

| # | Question | Owner | Needed by |
|---|---|---|---|
| Q1 | Threshold calibration **method** (OI-01) — percentage, derived how, published when? | Priya Raghunathan | before first petition opens above dev |
| Q2 | Pilot jurisdictions (OI-04); each needs local counsel and ≥2 GOV_EID issuers | Sofia Marchetti | Phase 2 start |
| Q3 | Acceptable enrolment exclusion rate and the non-document path per pilot (OI-03) | Grace Mbeki | Phase 2 start |
| Q4 | Global passive adversary is not defended. Tor/mixnet transport for high-risk jurisdictions? | Dr. Lena Kowalczyk | Phase 4 |
| Q5 | Coordinator committee selection: how are 7 diverse operators recruited and resampled per election? | Aisha Nkemdirim | Phase 3 |
| Q6 | Phase-1 public tallies conflict with FR-034's spirit. Confirm phased acceptance with client disclosure. | Priya Raghunathan | Phase 1 rollout |
| Q7 | **NFR-025 vs ADR-001 conflict.** NFR-025 requires alternative inclusion within 60 min; L1 force-inclusion takes 12–24 h. Needs product restatement or Phase-4 sovereign rollup as a launch dependency. | Chen Wei | before Gate 2 |
| Q8 | **Cross-namespace double enrolment.** Now bounded by Phase-1 GOV_EID-class restriction (ADR-016). Re-assess at Phase 3 when 1-of-N resumes, with a new ADR and threat model. | Marcus Adeyemi | Phase 3 |
| Q9 | **NFR-004's 0.1% duplicate rate is not internally measurable** by design. Requires out-of-band consented audited sample. | Yuki Sato | before Gate 2 |
| Q10 | **OI-13: FR-062 vs NFR-001/NFR-024/TD-02.** Participation profiles making party membership public directly conflicts with the no-linkage guarantee. Resolution required from Rathish at Gate 1 re-affirmation. See §18 for design-side consequence. | Priya Raghunathan | Gate 1 re-affirmation |
| Q11 | **Welcome screen (1.1) design specification needed.** The wireframe 1.1 Welcome screen has no backing FR, DES, SCR, or US. It is a pre-consent unauthenticated landing screen. Before engineering, a requirement and design element must be minted. What is the normative UX obligation for the landing screen, and who owns it? | Priya Raghunathan (PO) | Before Coding sprint 1 |
| Q12 | **100-member provisional cap (wireframe 2.3) — accept or reject?** The wireframe note "Membership caps at 100 until legal verification completes" has no backing FR. The Product Owner must decide: mint a new FR defining the provisional cap (and its enforcement mechanism, relation to the petition lifecycle, and the "legal verification" trigger), or reject the concept and revise the wireframe copy. This must not be built without a decision. | Priya Raghunathan (PO) | Before design of petition-live screen |
| Q13 | **FR-125 non-invite fallback — design all four layers.** The mandatory non-invite fallback path (OI-19 ruling; FR-125(b) non-invite fallback ALWAYS available) has no wireframe screen, no DES, no SCR, no US. The Welcome screen (1.1) shows only "Explore" and "I have an invite". The fallback flow must be designed end-to-end. Owner of the DES and SCR: architect (next increment). Owner of the US: product-owner. | Ravi Deshmukh (architect) + Priya Raghunathan (PO) | Before Coding sprint covering FR-125 |
| Q14 | **Party finance ledger screen — design owed.** The wireframe 1.6 "Finances — every rupee in and out" navigation row links to an undesigned screen. FR-050 (Must) requires the itemised public treasury record. DES-033 covers the on-chain mechanism; the UI is not designed. A ledger SCR, DES surface element, FE, and US are all owed. | Ravi Deshmukh (architect) + Priya Raghunathan (PO) | Before Coding sprint covering FR-050 |

**Resolved during design:** OI-05 (k ≥ 1000 vs ward-level governance) — ADR-004 §2 escalates
scope to the nearest ancestor region meeting the floor. OI-12 (FR-073 vs ADR-003) — resolved
by ADR-016 explicitly amending ADR-003 for Phase 1. **OI-17 (governance constants)** —
CLOSED in §10.11 (v2.0.0, 2026-08-11); values normative for Design; revisable only through
the amendment boundary. **OI-18 (entrenched-charter scope)** — CLOSED by Rathish
2026-08-11, option (c) two-tier core (OI-18-DECISION-2026-08-11.md); amendment boundary
designed in DES-087 and the Guarded Layer (Tier-2) super-process state machine.

**Next-increment scope (recorded not hidden):** Full DES coverage of remaining v2.x
requirement areas — FR-074..FR-111 beyond existing DES-064..DES-086, **and FR-121..FR-129
(pilot sequence, tiered verification, on-device nullifier-only posture, subpoena-test
invariant, Charter-layer guard for issuer-plurality permanence; ADR-021 records Decisions
1–4; OI-19 and OI-20 CLOSED 2026-08-20)** — is the next design increment. Until that
increment is complete, those FR rows carry an open DES gap in the RTM. This is a deliberate
phasing decision consistent with the session scope in GATE1-DECISION-2026-08-11.md §5.
OI-19 and OI-20 are closed (Rathish, 2026-08-20; DECISIONS-2026-08-20-OI19-OI20.md);
FR-125 is finalised (non-invite fallback mandatory) and FR-004 is satisfied at architecture
level. **One tier-determination question is owed for the FR-121..FR-129 DES increment:**
FR-129 (Charter-layer guard — making single-issuer operation permanent) defers to the
architect the determination of WHICH amendment tier (FR-118 Tier-1 entrenched charter /
FR-119 Tier-2 named absolutes) governs issuer-plurality permanence; this question must be
resolved and recorded in the DES element for FR-129 before that DES row can close.

## 17. Glossary

**Identity commitment** `Poseidon(secret)` — a public leaf; not a person; **a stable cross-context pseudonym** (see §10.2).
**Nullifier (action, Nₐ)** a one-time token derived from a secret and a scope; proves "once", reveals nothing; unlinkable across scopes.
**Nullifier (enrolment, Nᵢ)** derived in-circuit from the stable personal identifier and enrolment scope; deduplicated per namespace (ADR-017).
**Scope** a domain string (petition id, proposal id) that makes action nullifiers unlinkable across actions.
**credentialClass** `GOV_EID` (enrolment-nullifier-minting) or `AVAILABILITY_ONLY` (liveness/recovery only) — per ADR-016.
**Anonymity set** the number of credential holders a prover could be; the protocol floor is k ≥ 1000.
**LeanIMT** gas-efficient incremental Merkle tree, Poseidon-hashed.
**Groth16** succinct proof system; constant, cheap on-chain verification; needs a per-circuit ceremony.
**MACI** Minimal Anti-Collusion Infrastructure; encrypted ballots + key-change ⇒ receipt-freeness.
**Receipt-freeness** a voter *cannot* prove how they voted, even if they want to.
**Entrenched clause** a charter clause requiring a higher bar than its tier; **immutable clause** one that no majority can ever amend.
**Fork** a new party inheriting a parent's charter, manifesto history and lineage, requiring nobody's permission.
**Tier (party governance)** T0 operational · T1 policy · T2 structural · T3 constitutional — the four party-level charter tiers defined in Doc 02 FR-025..FR-029 and enforced by the party charter contracts. DISTINCT from platform amendment boundary layers.
**Tier (platform amendment boundary, legacy label)** Doc 02 v2.2.0 uses "Tier 1 / Tier 2 / Tier 3" for the platform amendment boundary; this SDD uses "Charter Layer / Guarded Layer / Open Layer" (see §10.11 disambiguation note). The two usages share the word "tier" but are INDEPENDENT namespaces: the coincidental identity of Open Layer (60%/15%) and party T2 structural bar (60%/15%) is not definitional.
**permittedActionClass** the set of `callData` selectors a given proposal tier may invoke via `Governor.execute()`.

---

## 18. Contradiction record

### OI-13 — FR-062 (public participation profile) vs NFR-001, NFR-024, TD-02

**Status:** Open — resolution required from Rathish at Gate 1 re-affirmation (per Doc 02 §13 OI-13).
This section records the DESIGN-SIDE consequence only. The architect does not pick the winner.

**The conflict, stated plainly:**

FR-062 requires a public per-citizen profile showing: ballot participation (direction withheld),
current and historical party memberships, endorsed petitions, authored proposals, and attended
debates.

NFR-001 requires that no actor — Trumocracy, an operator, an attestor, a party, any
colluding subset — can determine which party a given person belongs to from any data the
system holds, emits or logs.

NFR-024 requires that no feature expose a member's activity pattern to another member.

TD-02 records "ordinary members anonymous always" as a deliberate architectural trade-off.

**Design-side consequence:**

The `identityCommitment` `C = Poseidon(secret)` is the only durable per-person identifier in
the protocol (§10.2). It is published at enrolment and appears in the `Joined` event whenever
a member joins a party. A participation profile that associates a person's profile address with
their `identityCommitment` — which any participation profile must, because the indexer derives
participation from commitment-linked events — creates an explicit, public link between:
- the person's displayed profile
- the `identityCommitment` that appears in every `Joined` event for that person
- and therefore the party or parties that `identityCommitment` has joined

This is the exact linkage NFR-001 is designed to prevent.

Additionally, a profile listing ballot participation, proposal authorship, and debate attendance
is by definition an activity pattern, violating NFR-024.

**What DES-064 does today:**
DES-064 is designed but flagged off above dev (`participation_profile` flag = off). The
indexer read model that would populate the profile is not built. The feature MUST NOT ship
until OI-13 is resolved.

**How this cannot be "threaded through" the existing privacy architecture without a trade-off:**
There is no privacy-preserving mechanism that simultaneously lets any viewer see a person's
party membership (FR-062) and prevents any actor from determining which party that person
belongs to (NFR-001). These requirements are contradictory. A zero-knowledge proof cannot
prove a party membership is real (satisfying FR-062) to a viewer and simultaneously hide the
party identity from the same viewer (NFR-001). The contradiction is structural.

The resolution choices are (for the human approver):
1. Remove FR-062 (preserve NFR-001/NFR-024/TD-02 intact).
2. Approve FR-062 and amend NFR-001/NFR-024/TD-02 to carve out the profile surface.
3. Approve FR-062 but scope the profile to be visible only to the person themselves
   (authenticated view only) — this partially preserves NFR-001 but changes FR-062's scope.

**Until the human approver decides, the architecture holds FR-062 as a designed-but-dormant
feature and treats NFR-001/NFR-024/TD-02 as the live privacy contract.**

---

### SC-13 / SC-14 — trust-anchor lifecycle (CLOSED at design level, v2.0.0)

**Status:** CLOSED at design level. Both findings from SECURITY-RESCAN-SC-01-2026-08-10.md §4
are addressed in this version. The design change was owed to the architect after Gate 1
(GATE1-DECISION-2026-08-11.md §4).

**SC-13 (HIGH) — No trust-anchor revocation/emergency-update path specified.**
Design response: `rotateTrustAnchor()` and `revokeTrustAnchor()` are now specified in DES-090
and §5.4. Both are callable ONLY from `Governor.execute()` (code executes; humans vote; ruling
4 preserved). The STRIDE DoS row in §10.1 and the failure-mode row FR-112/DES-090 in §11 state
the residual: an anchor compromised during the 7-day emergency timelock window allows Sybil
enrolments for that window. This is accepted residual RISK-30 (recorded in Doc 13 §6). The
window is non-zero by design — it is the false-alarm veto window — and its governance cost
is the price of maintaining rule-4 (no operator action, humans vote).

**SC-14 (MEDIUM) — Governance tier for trustAnchorHash UPDATE unspecified; enrolment blocked
during rotation window.**
Design response: the 60-day dual-anchor overlap window in DES-090 and §10.11 ensures a
compliant rotation never blocks enrolment beyond the published window. The governance bar for
rotation is Open Layer (Tier-3 ordinary citizen vote) with the 90-day timelock (§10.11),
giving the issuer at least 90 days advance notice. Already-enrolled credentials are unaffected.

**Residual (recorded, not hidden):** The 7-day emergency revocation window is an accepted design
trade-off between operational response speed and the no-unilateral-operator-action guarantee
(CON-003). It is recorded in the RISK register (RISK-30) in Doc 13.

---

### OI-18 applied — no contradiction between FR-118 (fork-only Charter Layer / Tier 1) and NFR-017 (amendment process)

**Status:** Applied. OI-18-DECISION-2026-08-11.md (Rathish, 2026-08-11) resolved the potential
conflict before design began.

**The apparent conflict:** FR-118 declares seven charter rules unamendable by any vote.
NFR-017 requires a defined amendment process. A strict reading could treat NFR-017 as
requiring a path for every rule, which would conflict with FR-118's fork-only category.

**Resolution (recorded):** NFR-017's "amendment process" governs the Guarded Layer (Tier 2)
and Open Layer (Tier 3) only. The Charter Layer (Tier 1) is explicitly outside any process —
it is unamendable by definition, and the fork right (FR-120) is the only legitimate path to
change it. This is not a contradiction: NFR-017 defines how the AMENDABLE parts of the
protocol change; FR-118 defines which parts are not amendable. The OI-18 decision records this
as a deliberate three-layer structure, not an accidental gap. The design reflects this split
cleanly: `ProtocolGovernance.proposeAmendment()` rejects Charter Layer (Tier-1) targets at
submission; the super-process state machine governs the Guarded Layer (Tier-2); ordinary
governance governs the Open Layer (Tier-3). The architect found no real contradiction here —
this entry records the analysis so it is not re-litigated.

---

### SC-15..SC-21 — security scan responses (SECURITY-SCAN-DOC03-V2-2026-08-11.md; CLOSED at design level, v2.1.0)

**Status:** All seven findings CLOSED at design level in v2.1.0. Each design response is normative and traced to its DES/ADR; no finding is open.

**SC-15 (CRITICAL) — ProtocolGovernance and StewardRegistry not designated IMMUTABLE CORE; a governance vote could replace or redirect them, making Charter Layer entrenchment decorative.**
Design response: Both contracts designated IMMUTABLE CORE in §5.1 and DES-087 (no admin, no pause, no proxy, non-upgradeable). GENERAL RULE in DES-087: any contract that enforces a Charter Layer rule MUST itself be Charter Layer. Routing surface exclusions stated: proxy/upgrade patterns, registry pointers, Governor.execute action classes, and GovernanceConstants setter are explicitly excluded from the immutable-core guarantee by their nature as non-enforcement-logic.

**SC-16 (HIGH) — GovernanceConstants lacked per-constant Amendment Layer classification; no anti-circularity rule prevented an Open Layer vote from lowering Guarded Layer super-process constants.**
Design response: DES-091 and §10.11 now classify every constant by Amendment Layer; Guarded Layer super-process constants (Tier-2 quorum, supermajority, inter-vote window, audit lead time, STEWARD_INACTION_WINDOW) are classified Guarded Layer minimum and cannot be lowered by an Open Layer vote; anti-circularity rule stated explicitly in §10.11 preamble; setter mechanism (Governor.execute() with onlyGovernor guard, initial values immutable at deployment) resolves the "immutable-at-deployment vs post-deployment revisability" tension.

**SC-17 (HIGH) — publishAuditRef was steward-only; steward inaction or vacancy could stall the Guarded Layer second vote indefinitely.**
Design response: DES-092 introduces citizen-initiated fallback: after STEWARD_INACTION_WINDOW (60 days from firstVoteClosedAt, set in §10.11) any enrolled citizen may call publishAuditRef(); steward vacancy triggers the fallback immediately with no window; audit substance and 30-day lead time unchanged; ADR-019 amended with dated note.

**SC-18 (HIGH) — ROTATION_PENDING state had no abort path; the only recovery from a suspected-bad rotation was a full revocation, causing 30+ days of new-enrolment block.**
Design response: DES-090 adds abortRotation(issuerId) via Governor.execute() at Open Layer bar (60%/15%); ROTATION_PENDING → ROTATION_ABORTED → ACTIVE with incumbent trust-anchor hash restored; pending-anchor credentials rejected for new enrolments from abort onward; no retroactive invalidation of already-enrolled citizens; ADR-020 amended with dated note.

**SC-19 (MEDIUM) — Issuer-onboarding coordination trigger was steward-only; steward inaction could block a region from accessing a new legitimate issuer.**
Design response: DES-092 applies the same citizen-fallback pattern (60-day inaction window from coordination trigger; immediate on steward vacancy) to the issuer-onboarding coordination step; both SC-17 and SC-19 are covered under the same DES-092 design element.

**SC-20 (MEDIUM) — Guarded Layer quorum denominator was ambiguous; an organic enrolment surge between firstVote and secondVote could raise the absolute headcount floor and stall a legitimate in-flight amendment.**
Design response: DES-087 and §10.11 now specify the quorum denominator as enrolled citizen count at snapshotRoot time (fixed at proposeAmendment(), not the live count at castSecondVote time); normative quorum denominator statement added to §10.11 preamble; growth-surge defence interaction clarified (growth-surge defence applies to party-level votes only and does not override the Guarded Layer snapshotRoot rule).

**SC-21 (LOW) — "Undiscovered bypass" STRIDE residual for Governor.execute() action-class table did not reference SC-15's general rule as a mitigation.**
Design response: §10.1 STRIDE table updated; SC-15 general rule (ProtocolGovernance IMMUTABLE CORE, no upgrade/proxy path) formally closes the bypass class of contract substitution or proxy redirection; remaining residual is a logic bug within the immutable contract itself, mitigated by audit (DES-079) and capability-absence CI scan.

---

### C-01 — Wireframe hardcodes "Verify with Aadhaar" vs adapter-driven design (v2.2.0)

**Status:** Open — wireframe-copy fix required at build time. Not a design defect; a build-time parameterisation obligation.

**The conflict:** The wireframe screens 1.3 ("Verify with Aadhaar" button) and 1.4 ("Your Aadhaar data is being read and proven right here on your phone") treat "Aadhaar" as a hardcoded design constant. The normative record requires adapter-driven UI strings: SCR-02 is "Attestor choice & enrolment" (implying a choice surface); FR-004 requires ≥ 2 attestation paths at architecture level; OI-20 ruling designates Aadhaar as the Phase-1 deployment rail string, not a design constant; DES-070 requires "region-level config, not hardcoded"; ADR-016 (amended) and ADR-021 confirm the Phase-1 deployment limitation posture.

**Required disposition:** Button label and on-device copy MUST be adapter-driven at build time — resolved from region-level config or i18n string. "Verify with Aadhaar" is the correct Phase-1 India string and is factually accurate; it is not a fixed design constant. The wireframe element and interaction pattern are sound. No requirement change needed. The engineer must not use the literal string.

---

### C-02 — Wireframe "caps at 100 until legal verification" has no backing requirement (v2.2.0)

**Status:** CLOSED — PO decided: accept. FR-130 minted (Doc 02 v2.5.0; DECISIONS-2026-08-22-WIREFRAME-C01-C02.md). 2026-08-22, Rathish.

**The conflict:** Wireframe 2.3 note: "Membership caps at 100 until legal verification completes — so an unverified party can't gather false strength." No backing FR, DES, or US exists. FR-013 (petition state), FR-075 (platform vs legal registration distinction), FR-076 (founding member count ≥ 5), FR-016 (activation threshold by formula) — none authorise a provisional membership cap of any kind. This is a new design concept with no normative footing.

**Required disposition:** This screen element MUST NOT be built until a FR is minted, reviewed, and approved. The Product Owner must decide whether the concept is accepted (mint FR) or rejected (revise wireframe copy). The architect does not determine this; it is a product decision. Recorded in §10.12.5 class (ii) as design debt and here as a conflict.

**Closure note (2026-08-23):** PO accepted the concept and minted FR-130 (Doc 02 v2.5.0) — FR-130 is the provisional-party membership cap (anti-capture control); it closes C-02 by providing the normative footing for the wireframe 2.3 note. The 100-member provisional cap and its enforcement mechanism are now the engineer's build-time obligation per FR-130. Separately, DES-098 (v1 honesty notice, §10.13.6) is backed by FR-131 (Doc 02 v2.6.0, 2026-08-23) — the v1 honesty notice MUST minted by PO; FR-131 and FR-130 are separate requirements with separate obligations. No further architect action required on C-02 itself.

---

### C-03 — Wireframe 1.6 "Finances" row links to undesigned screen; FR-050 (Must) requires it (v2.2.0)

**Status:** Open — design owed before the 1.6 navigation row can be built.

**The conflict:** The wireframe 1.6 Join a party screen presents "Finances — every rupee in and out" as a navigation target. No wireframe finance-ledger screen exists. FR-050 (Must) requires an itemised, publicly readable, independently verifiable treasury record. DES-033 covers the on-chain mechanism. The UI screen is entirely undesigned (no SCR, no DES surface element, no FE, no US).

**Required disposition:** Design the finance ledger screen (SCR, DES, FE, US) before implementing the 1.6 navigation row. The navigation row itself is sound; the target is not. The absence of the ledger screen is a design-completeness defect in the wireframe scope, not an architectural conflict with the token set or privacy model.

---

### Downstream

DES/ADR decompose into stories (Doc 05), the repo is built from §9 + ADR-011 (Doc 06),
tests are designed from §11 and §14 (Doc 04, Doc 07), and everything is verified in the RTM
(Doc 08).
