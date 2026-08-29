# Test Cases & Suites — Trumocracy

```
Document ID:   TC-TRUMOCRACY
Version:       2.3.0
Status:        In Review
Owner:         Ji-woo Park — Test Lead (tester)
Source:        MTP-TRUMOCRACY v1.0.1 (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.3.0 (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.13.0 §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.7.1 §5.2, §11, §14 (docs/03-architecture-design-sdd.md)
               CODE-TRUMOCRACY v2.3.2 (docs/06-coding-and-ut.md) · SECURITY-RESCAN-SC15-21-2026-08-11.md
Last updated:  2026-08-29
Changelog:     v2.3.0 (2026-08-29) — TS-MEMBERSHIP suite added (TC-3517..TC-3540, 24 cases) covering the
               join/membership drop (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%): FR-020 join without
               approval at service + web and the structural no-verifier guarantee (TC-3517..TC-3520);
               FR-022 leave-at-will, immediate, no exit approval (TC-3521..TC-3522); FR-064
               one-active-party in the EXPLICIT-LEAVE form — ALREADY_MEMBER_ELSEWHERE naming the current
               party, and same-party ALREADY_MEMBER (TC-3523..TC-3525); append-only membership history,
               leaving is never deletion (TC-3526..TC-3527); FR-130 cap at join on ACTIVE members,
               100/101 boundary, a leave frees exactly one slot (TC-3528..TC-3529); FR-122/FR-123
               join is not counting — verified-members-only official strength, counted-member leave,
               seam called once with scope STRENGTH_CONTRIBUTION (TC-3530..TC-3533); FR-131(d)
               four-clause non-dismissable notice and FR-131(b) v1-honest join copy
               (TC-3534..TC-3535); clock determinism, ship-dark flag gating, jargon + absence scans
               (TC-3536..TC-3538); and the two seam guards — UT-0831 expirePetitions interface-only
               (FR-013 expiry path · DES-097) and UT-0871 .d.ts shim sync (DES-097)
               (TC-3539..TC-3540). All 24 cases Automated — Pass (inh.) from Doc 06 v2.3.2 Approved
               (sdk UT-0819..0830 membership 22 tests; sdk UT-0831 inside party-creation.test.js
               38 tests; web UT-0858..0870 27 tests; web UT-0871 1 test; all green). The tester ALSO
               executed the full suite on 2026-08-29 while running the Doc 06 cycle-3 review and
               observed 542/542 green — recorded in §0.2 and §9 (R-12) as corroboration; the TC status
               stays Pass (inh.) against the Doc 06 pin, per the TS-PARTY precedent. TC-3481 (FR-131
               clause (d) notice) status note AMENDED: the obligation is now met at the
               parties-directory counting surface (TC-3534), but TC-3481 stays **Blocked** for the
               SCR-13/SCR-14 ballot surfaces, which remain unbuilt (Doc 06 §7 #21). NOT extended:
               FR-021 (one-member-one-equal-vote) — this drop adds no vote-weight or tally evidence,
               so no TC claims it. §0.2 execution evidence: 5 rows added. §2 suite table:
               TS-MEMBERSHIP row added; Total 418→442, automated 187→211; Blocked/no-mechanism
               unchanged 231. §2 convention note: anchors 416→440, expanded 425→449. §8 automation
               mapping: 3 rows added, 1 updated (sdk party-creation.test.js → UT-0780..0818 + UT-0831,
               38 tests). §9 execution log: R-09..R-12 added. §10 exit summary updated. Source pin:
               CODE v2.2.0→v2.3.2.
               v2.2.2 (2026-08-25) — TS-PARTY suite added (TC-3489..TC-3516, 28 cases) covering the
               party-creation drop (Doc 06 v2.2.0 Approved): FR-010 collision + emblem UI
               (TC-3489..TC-3493); FR-011 eight-pillar refusal at protocol+sdk+web (TC-3494..TC-3496);
               FR-012 defaults+bounds (TC-3497..TC-3498); FR-013 expiry/archive/cooldown
               (TC-3499..TC-3503); FR-018 threshold gate (TC-3504..TC-3506); FR-020 join-no-verifier
               (TC-3507); FR-077 non-violence clause (TC-3508..TC-3510); FR-130 cap boundary+code-only
               lift (TC-3511..TC-3514); BR-020 disclosure (TC-3515..TC-3516). All 28 cases
               Automated — Pass (inh.) from Doc 06 v2.2.0 Approved (protocol UT-0060..0086:
               44 tests; sdk UT-0780..0818: 37 tests; web UT-0841..0857: 27 tests; all green).
               §0.2 execution evidence: 3 rows added (inherited). §2 suite table: TS-PARTY row
               added; Total 390→418, automated 159→187; Blocked/no-mechanism unchanged 231.
               §8 automation mapping: 3 rows added. §9 execution log: R-06/R-07/R-08 added.
               §10 exit summary updated. Source pins: BKLG v2.3.0, CODE v2.2.0.
               v2.2.1 (2026-08-25) — cycle-1 rework (07-test-cases-suites-v2.2.0-technical-cycle1.md). ISS-01 (Medium): TC-3488 minted for UT-0753 (packages/ui/test/PrivacyStatus.test.tsx — accessible-name check, US-0132 · NFR-011 · DES-094); orphan check re-run over UT-0750..0758 and UT-0760..0779 — 0 material orphans after TC-3488. §8 packages/ui cases mapped updated 6→7. §2 suite table: TS-SCAFFOLD row TC-3470–TC-3487→TC-3470–TC-3488, cases 18→19, automated 15→16; Total 389→390, automated 158→159. §10 exit summary updated (cases designed 389→390, automated 158→159, observed passing 87→88). ISS-02 (Low): §2 convention note "2-row counting difference" corrected to "7-row"; anchor count 387→388, expanded 396→397.
               v2.2.0 (2026-08-25) — TS-SCAFFOLD suite added (TC-3470..TC-3487, 18 cases): US-0132 PrivacyStatus tier display + self-view refusal + backing-aware 'ver' copy + absence/no-leak (FR-082..FR-086 · FR-124 · DES-093/DES-094 · UT-0750..UT-0758); US-0133 counting-gate pass/refuse + JOIN/LEAVE/account-creation allowlist throw + IS_INSECURE_MOCK delegation (FR-122 · FR-123 · FR-132 · DES-095/DES-100 · ADR-024/ADR-025 · UT-0760..UT-0769); US-0134 IBallotService cast/change/tally/refuse/embargo (FR-131 · DES-096 · ADR-024 · UT-0770..UT-0776). 15 of 18 cases automated Pass (obs.) — npm test -w @trumocracy/ui (14/14) and npm test -w @trumocracy/sdk (160/160 including seams) both green 2026-08-25. 3 cases Blocked: TC-3476 (enrolment disclosure affordance — screen wiring pending), TC-3481 (FR-131 clause (d) notice — seam refuses correctly but UI notice DES-098 not wired), TC-3487 (audit-contract publication — IS_INSECURE_MOCK=true; wiring pending). §2 suite table: TS-SCAFFOLD row added; Total 371→389, automated 143→158, Blocked/no-mech 228→231. §2 convention note updated (anchor count 369→387). §0.2 execution evidence updated. §8 automation mapping: UT-0750..UT-0758 packages/ui and UT-0760..UT-0779 packages/sdk seams rows added. §9 execution log R-04 and R-05 added. §10 exit summary updated. Source pins: BKLG v2.2.0, SRS v2.13.0, SDD v2.7.1, CODE v2.0.1.
               v2.1.0 (2026-08-12) — 2026-08-12 follow-up audit rework (source: SECURITY-RESCAN-SC15-21-2026-08-11.md §3/§4/§6; ADR-019 amendment; cycle-2 ISS-01 Low — 07-test-cases-suites-v2.0.1-technical-cycle2.md §6). Fix 1 (vacancy-immediate under-tested): TC-3451 amended — 60-day inaction window now tested with stewards SEATED but inactive, removing vacancy conflation; revokeTrustAnchor vacancy-immediate coverage preserved in TC-3451. TC-3453 amended — issuer-onboarding window path now tests stewards seated-but-inactive (corrects wrong "60-day vacancy" precondition). TC-3467 minted — publishAuditRef() citizen fallback immediate on steward vacancy (zero registered stewards; no STEWARD_INACTION_WINDOW wait; US-0127 · FR-117 · DES-092; ADR-019 amendment; rescan SC-17 re-attack #2; Blocked — Phase 3). TC-3468 minted — issuer-onboarding coordination citizen fallback immediate on steward vacancy (US-0127 · FR-117 · DES-092; rescan SC-19; Blocked — Phase 3). Fix 2 (cycle-2 ISS-01 Low — §10 arithmetic): total 368→371, Blocked 169→172; four-case automated-and-Blocked overlap stated explicitly with convention note; §2 TS-GOV2 suite-table row updated (67→70 cases, TC-3400–TC-3469, not-automated 67→70); §2 total row updated (368→371, 225→228); §5.1 heading range updated (TC-3400–TC-3466→TC-3400–TC-3469); §2 convention note updated (368/375→371/378). Fix 3 (anti-circularity direct attack): TC-3469 minted — Open Layer vote (60%/15%) attempts GovernanceConstants setter to lower Guarded Layer constant (Tier-2 quorum 25%→16%, supermajority 80%→61%); call reverts at onlyGovernor / permittedActionClass / Amendment Layer classification check (US-0129 · FR-119 · DES-091 · DES-087; rescan §3 re-attack #1; Blocked — Phase 3).
               v2.0.0 (2026-08-11) — TC-3400..TC-3466 minted (67 cases): TS-GOV2 suite added covering FR-074..FR-120 (SRS v2.2.0), NFR-027/NFR-028, mandatory SC-15..SC-21 security-closure cases (SECURITY-RESCAN-SC15-21-2026-08-11.md), Guarded Layer property tests P1..P5 (Doc 03 §14 named reverts), and FR-117 capability-absence suite (static dep-guard TC-3465 + dynamic vacancy simulation TC-3466). Source pins updated: SRS v2.2.0, BKLG v2.0.1, SDD v2.1.1. Header bumped to In Review pending document-review cycle.
               v2.0.1 (2026-08-12) — cycle-1 technical review rework (07-test-cases-suites-v2.0.0-technical-cycle1.md): ISS-01 Critical: TC-3456..TC-3464 Verifies corrected to US-0129 · FR-119 · DES-087 (DES-091 where GovernanceConstants exercised); ISS-02 High: TC-3454 Verifies corrected to US-0129 · FR-119 · DES-087; ISS-03 High: TC-3450 Verifies corrected to US-0129 · FR-119 · DES-091; ISS-04 Medium: Doc 04 source pin bumped to v1.0.1 (RESOLVED AT SOURCE — Doc 04 v1.0.1 reserves TS-CR1 and TS-GOV2 ranges); ISS-05 Medium: §10 exit summary counts updated (298→368, Blocked 140→169, No mechanism 10→48); ISS-06 Low: TC-3456 amended to match SDD §14 spec (firstVote at 75%); ISS-07 Low: TC-count convention note added to §2. Context paragraph for TC-3456..TC-3464 corrected from FR-109..FR-111 to FR-119.
               v1.1.2 (2026-08-10) — TC-3343..TC-3345 added (SC-01 trust-anchor binding negatives for FR-069/070); TC-3323 updated to 5-signal arity (Doc 03 v1.1.2 SC-01 fix).
               v1.1.1 (2026-08-10) — TC-3309 expected result updated to cite DES-068 party-switch exclusion (cycle-1 ISS-01); TS-CR1 Covers column corrected to include RISK-22..24 (ISS-02).
               v1.1.0 (2026-08-10) — TC-3300..TC-3342 minted for FR-062..073 (CR-v1.1.0); TS-CR1 suite added; RTM rows added in Doc 08.
```

> **Based on:** IEEE 829 test-case specification. **Produced in:** Verify. **Approved at:** Gate 2.
> Cases are grouped into the suites reserved in Doc 04 §14 and numbered inside the `TC` ranges that
> document reserved. Every case derives from a **Gherkin acceptance criterion** in Doc 02 §8 or
> Doc 05 §6, or from a **failure mode** in SDD §11. Traceability closes in the RTM (Doc 08).

---

## 0. Reading this document honestly

This is a **Phase-1 drop**. Three facts shape every status in it, and none of them is hidden:

1. **The ZK verifiers are mocks** (Doc 06 §7.1). Any guarantee whose strength comes from a proof —
   "this endorsement came from a resident", "this credential belongs to a unique human" — is
   currently enforced by `MockVerifierAlwaysTrue`. The *contract logic around* the proof is real and
   tested; the proof itself is not. Doc 04 §7.4 forbids presenting circuit or mock-verifier results
   as evidence of soundness, and this document obeys that.
2. **Circuits are written but not compiled** (Doc 06 §7.2). The whole `TS-ZK` suite is designed here
   and **cannot execute** until the Phase-2 `circom` CI job and the ceremonies exist.
3. **MACI, Elections, Recall, Treasury and the recovery/relayer services are not implemented**
   (Doc 06 §7.3). Cases against them are written, and marked **Blocked — Phase 3**.

### 0.1 Status vocabulary (used in every suite table)

| Status | Means exactly |
|---|---|
| **Pass (obs.)** | The implementing test was **executed by the tester in this session (2026-08-09 or 2026-08-25)**, and passed. 2026-08-09: `packages/protocol` (82 tests), `services/indexer` (16 tests), `packages/sdk` (124 tests). 2026-08-25: `packages/ui` (14 tests), `packages/sdk` full re-run (160 tests, 36 new seams). |
| **Pass (inh.)** | The implementing test exists and is recorded green in **Doc 06 §3/§5**. The contract suite (`packages/contracts`, in-process EVM harness) takes ~5 minutes and was **not executed in this session**; its result is inherited from Doc 06, not observed by the tester. |
| **Not run** | An automated test exists but was not executed by the tester this session (`apps/web`, `UT-0700…UT-0742`). |
| **Blocked** | The case is designed and cannot execute: the code, circuit, environment or instrument it needs does not exist. The blocking reason is stated in the row. |
| **No mechanism** | The case is designed and the **product has no implementation to test**. This is a defect against the requirement, not against the case. |
| **Manual — not run** | The case is by nature manual (audit, screen-reader pass, legal review, usability study) and has not been performed. |

**No case in this document is marked Pass on the strength of a mock verifier alone.** Where the
contract logic passes but the guarantee depends on a real proof, the row says so.

### 0.2 Execution evidence for this session

| Suite executed | Command | Result |
|---|---|---|
| `packages/protocol` (L0 reference rules) | `npx vitest run --root packages/protocol` | **82 passed / 82**, 2 files, 494 ms |
| `services/indexer` (projection) | `npx vitest run --root services/indexer` | **16 passed / 16**, 1 file, 467 ms |
| `packages/sdk` (client, proofs, transports, scopes) | `npx vitest run --root packages/sdk` | **124 passed / 124**, 8 files, 2.35 s |
| `packages/ui` (PrivacyStatus component, 2026-08-25) | `npm test -w @trumocracy/ui` | **14 passed / 14**, 1 file |
| `packages/sdk` (full suite incl. seams, 2026-08-25) | `npm test -w @trumocracy/sdk` | **160 passed / 160** (124 existing + 36 new seam tests) |
| `packages/sdk` `test/membership.test.js` (UT-0819..0830, 2026-08-29) | `npm test` (full suite, cycle-3 review run) | **22 passed / 22** — file-level result observed; TC status recorded Pass (inh.) against the Doc 06 v2.3.2 pin |
| `packages/sdk` `test/party-creation.test.js` (UT-0780..0818 + UT-0831, 2026-08-29) | `npm test` (full suite) | **38 passed / 38** — includes the UT-0831 interface-only seam guard |
| `apps/web` `test/join-membership.test.tsx` (UT-0858..0870, 2026-08-29) | `npm test` (full suite) | **27 passed / 27** |
| `apps/web` `test/sdk-types-sync.test.ts` (UT-0871, 2026-08-29) | `npm test` (full suite) | **1 passed / 1** — .d.ts shim drift guard |
| **Whole repository (2026-08-29, Doc 06 cycle-3 review run)** | `npm test` from the repo root | **542 passed / 542, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71 |
| `packages/contracts` (L1/L2/L3) | *not executed — ~5 min runtime* | Inherited from Doc 06 §3/§5 |
| `apps/web` (component) | *not executed* | Suite exists: `UT-0700…UT-0742` |

**Observed total (2026-08-09): 222** (protocol 82 + indexer 16 + sdk 124). **Additionally observed (2026-08-25): 50 new** (packages/ui 14 + packages/sdk seams 36). **Running unique total: 272 observed passing.** Inherited from Doc 06: 66 contract tests
(`UT-0100…0125`, `UT-0200…0230`, `UT-0300…0361`, `UT-0400…0420`) plus the deployment-safety
group (`UT-0600…0612`).

### 0.3 Two inventory defects found while writing this document

Recorded here, routed to the engineer; neither is fabricated coverage and neither is closed by me.

| # | Finding | Severity | Owner |
|---|---|---|---|
| TD-07-01 | **Doc 06 §3's `UT-####` inventory omits two real test groups.** `packages/contracts/test/deployment-safety.test.mjs` uses `UT-0600…UT-0612` (13 tests) and `apps/web/test/safety-surfaces.test.tsx` uses `UT-0700…UT-0742` (16 tests). Neither range appears in the Doc 06 §3 table, and the table's stated counts (e.g. "UT-0100..0125 … 25") therefore under-report the drop. | Medium — the RTM cites tests the inventory does not list | Engineer (Doc 06) |
| TD-07-02 | **Doc 06 §3 declares "UT-0001..0028 … 41" and "UT-0030..0055 … 41"**, i.e. 82 tests over two ranges of 28 and 26 identifiers. The identifiers are `describe`/`it` group anchors, not one-per-test. The count is right (82 observed); the range labelling implies a 1:1 mapping that does not hold. | Low — cosmetic, but it makes ID-level traceability ambiguous | Engineer (Doc 06) |

---

## 1. Test case template (the reusable atom)

Every row in §3–§5 expands to this atom. Preconditions and fixtures are stated **per suite** in
§3 where they are shared, and **per case** where they differ.

```
TC-####  <title>
Suite:        TS-<…>            Type: functional | edge | differential | perf | sec | a11y | resilience
Priority:     P1 | P2 | P3
Verifies:     US-#### · FR-### / NFR-###          Failure mode: SDD §11 row (where applicable)
Preconditions:<state, fixtures, flag state>
Test data:    <inputs / fixture id>
Steps:        1. <…>  2. <…>
Expected:     <observable result, incl. the named custom error where a revert is expected>
Automation:   Automated (path · UT-####) | Designed, not automatable yet (reason) | Manual
Environment:  Local CI (in-process EVM / vitest) | Devnet | Testnet | Staging | Prod-canary | Lab
Status:       Pass (obs.) | Pass (inh.) | Not run | Blocked | No mechanism | Manual — not run
```

**Worked example (the highest-value negative case in the drop):**

```
TC-2603  A nullifier cannot be burned by an unauthorised caller
Suite:        TS-SEC / TS-ADV-01      Type: sec
Priority:     P1
Verifies:     US-0006 · FR-002, NFR-004     Risk: RISK-01     Origin: Doc 04 OPEN-05 (Sev-1)
Preconditions:PersonhoodRegistry deployed by the harness; spenderAuthoriser set by the timelock;
              one enrolled identity with a known scope nullifier.
Test data:    scope = ENDORSE_SCOPE(petitionId), nullifier = poseidon2([secret, scope])
Steps:        1. From an EOA that is not a registry-deployed module, call
                 spendNullifier(scope, nullifier).
              2. From the legitimate party module, perform the citizen's endorsement.
Expected:     Step 1 reverts with the caller-restriction error; step 2 succeeds — the citizen is
              not disenfranchised. No de-authorisation path exists for an already-authorised module.
Automation:   Automated — packages/contracts/test/adversarial.test.mjs · UT-0325, UT-0326
Environment:  Local CI (in-process EVM harness)
Status:       Pass (inh.)  — regression test for Doc 06 §5 defect #1 (Critical)
```

---

## 2. Suite organization

TC ranges are the ones **reserved in Doc 04 §14**; the tester assigns the actual IDs below.

| Suite ID | Group | Level | Covers | Assigned range | Cases | Automated | Blocked / no mechanism |
|---|---|---|---|---|---|---|---|
| `TS-FUNC` | Functional / E2E (positive) | L0–L6 | Must FR happy paths | TC-0001–TC-0040 | 40 | 24 | 16 |
| `TS-EDGE` | Negative / edge / boundary | L0–L2 | SDD §11 failure modes; every custom error by name | TC-1001–TC-1048 | 48 | 41 | 7 |
| `TS-DIFF` | **Differential** | L3 | `@trumocracy/protocol` vs chain vs SDK vs indexer | TC-1200–TC-1209 | 10 | 10 | 0 |
| `TS-ZK` | Circuits | L4 | `residency_member`, `tenure_member` | TC-1400–TC-1406 | 7 | 1 | 6 |
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | CON-003, CON-006, FR-021/035/047/051/056, NFR-017 | TC-1600–TC-1614 | 15 | 12 | 3 |
| `TS-ABI` | Contract / API | L1/L5 | ABI allowlist, schema snapshot, SDK drift, size limit | TC-1800–TC-1803 | 4 | 2 | 2 |
| `TS-SEC` | Security / authZ / negative authority | L1–L6 | NFR-009, FR-056, verifier & deployment safety | TC-1850–TC-1863 | 14 | 12 | 2 |
| `TS-PRIV` | Privacy & anonymity | L1–L6 | NFR-001/002/010/024, FR-003 | TC-1950–TC-1963 | 14 | 11 | 3 |
| `TS-DATA` | Data inventory (build-failing) | CI | NFR-010, CON-002, FR-003 | TC-2050–TC-2053 | 4 | 1 | 3 |
| `TS-PERF` | Performance on the reference device | L6 | NFR-006, NFR-012 | TC-2080–TC-2084 | 5 | 0 | 5 |
| `TS-LOAD` | Load / stress / scalability | staging | NFR-007, NFR-008 | TC-2150–TC-2153 | 4 | 0 | 4 |
| `TS-COST` | Cost per action | testnet + prod | NFR-005 | TC-2200–TC-2203 | 4 | 1 | 3 |
| `TS-A11Y` | Accessibility | L5–L7 | NFR-011 | TC-2250–TC-2255 | 6 | 2 | 4 |
| `TS-I18N` | Localisation & plain language | L5/L6 | NFR-013, NFR-023 | TC-2330–TC-2333 | 4 | 0 | 4 |
| `TS-COMPAT` | Compatibility matrix | L6 | NFR-026 | TC-2380–TC-2382 | 3 | 0 | 3 |
| `TS-RES` | Resilience / chaos / DR | staging | NFR-007, NFR-020, RISK-09 | TC-2420–TC-2426 | 7 | 1 | 6 |
| `TS-EXIT` | Export / reconstitute | CI + devnet | NFR-018, FR-055 | TC-2480–TC-2482 | 3 | 0 | 3 |
| `TS-UPG` | Upgrade / migration | testnet | NFR-017, FR-007 | TC-2520–TC-2523 | 4 | 1 | 3 |
| `TS-SMOKE` | Post-deploy smoke | all envs | walking skeleton < 5 min | TC-2560–TC-2561 | 2 | 0 | 2 |
| `TS-ADV-01…16` | **Adversarial, one per RISK** | mixed | RISK-01…RISK-16 | TC-2600–TC-2752 | 43 | 24 | 19 |
| `TS-EXPL` | Exploratory charters | L7 | one per EP-01…EP-10 | TC-3200–TC-3209 | 10 | 0 | 10 |
| `TS-UAT` | User acceptance & usability | L7 | NFR-022, Doc 01 §B journey | TC-3250–TC-3253 | 4 | 0 | 4 |
| `TS-CR1` | CR-v1.1.0 — FR-062..073; RISK-22..24 | L3–L6 | FR-062..073 · BR-013 · RISK-22..24 | TC-3300–TC-3345 | 46 | 0 | 46 |
| `TS-GOV2` | Governance v2.0 — FR-074..FR-120 · NFR-027/028 · SC-15..21 security closure · Guarded Layer P1..P5 · FR-117 capability-absence · vacancy-immediate fallbacks · anti-circularity direct attack | L1–L6 | FR-074..FR-120 · NFR-027 · NFR-028 · SC-15..SC-21 · DES-087..DES-092 | TC-3400–TC-3469 | 70 | 0 | 70 |
| `TS-SCAFFOLD` | Scaffold seam & design-system seed | L1–L5 | FR-082..086 · FR-122..124 · FR-131..132 · DES-093..096 · DES-100 · ADR-023..025 | TC-3470–TC-3488 | 19 | 16 | 3 |
| `TS-PARTY` | Party creation protocol, service & web | L1–L5 | FR-010 · FR-011 · FR-012 · FR-013 · FR-018 · FR-020 · FR-077 · FR-130 · BR-020 · DES-073 · DES-074 · DES-097 | TC-3489–TC-3516 | 28 | 28 | 0 |
| `TS-MEMBERSHIP` | Join / leave / membership history & counting | L1–L5 | FR-020 · FR-022 · FR-064 · FR-122 · FR-123 · FR-130 · FR-131(b)(d) · FR-013 expiry seam · NFR-023 · DES-013 · DES-065 · DES-095 · DES-097 · ADR-007 · ADR-024/025 | TC-3517–TC-3540 | 24 | 24 | 0 |
| | | | **Total** | | **442** | **211** | **231** |

**211 of 442 cases have an implementing automated test.** (43 new TC-3300..TC-3342 are all Blocked; 70 new TC-3400..TC-3469 are all Blocked or No mechanism — no implementing contracts for TS-GOV2 exist in this drop; 16 of 19 new TC-3470..TC-3488 have passing automated tests — see §9 R-04/R-05 and TC-3488 v2.2.1; 3 are Blocked; all 28 new TC-3489..TC-3516 TS-PARTY cases are inherited Pass from Doc 06 v2.2.0; all 24 new TC-3517..TC-3540 TS-MEMBERSHIP cases are inherited Pass from Doc 06 v2.3.2.) Of those 211, **88 were executed and
observed passing by the tester this session** under the Pass (obs.) convention; **107** are inherited-green cases (55 contract suite
+ 28 TS-PARTY + 24 TS-MEMBERSHIP); **16** are `apps/web` component
cases that exist but were not executed this session.

**Corroboration note (v2.3.0, and it cuts against the accounting above).** The tester executed `npm test` from the repo root on 2026-08-29 while running the Doc 06 v2.3.2 cycle-3 document review, and observed **542/542 green** including every file behind TS-PARTY and TS-MEMBERSHIP. Those 24 TS-MEMBERSHIP cases are therefore stronger than a bare inheritance — the tester saw the files pass. They are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.3.2 pin, because the observation was made at file granularity during a review run rather than case-by-case against each TC, and because it keeps the TS-PARTY precedent and the Doc 08 dashboard buckets consistent. The stronger evidence is recorded in §0.2 and §9 (R-12) rather than used to upgrade the status.

**TC-count conventions (ISS-07 resolution; updated v2.2.2).** This suite table uses the **expanded row count** (442 total): the TS-EXPL suite rows TC-3200..TC-3209 are listed as 10 individual cases here. Doc 08 §6 uses the **anchor count** (440 anchors = 299 pre-TS-GOV2 + 70 TS-GOV2 + 19 TS-SCAFFOLD + 28 TS-PARTY + 24 TS-MEMBERSHIP), treating TC-3200..TC-3209 as one collapsed anchor, then applies the expanded convention (440 − 1 + 10 = **449 designed test cases**). A 7-row counting difference between the two documents is expected and pre-existing (Doc 07 = 442 row-anchors; Doc 08 = 449 expanded TCs because the TS-EXPL collapsed range TC-3200–TC-3209 is expanded to 10 individual cells); the 449 expanded total is used in the Doc 08 §6 coverage dashboard.

---

## 3. Functional suites

### 3.1 `TS-FUNC` — Functional / E2E positive paths (TC-0001–TC-0040)

**Shared preconditions.** In-process EVM harness (`tools/evm-harness`, solc 0.8.28 / cancun),
deterministic genesis timestamp, fixed accounts, full protocol deployed by
`packages/contracts/test/fixture.mjs`; `petitions` and `party_governance` flags on;
`MockVerifierAlwaysTrue` wired (environment = devnet, where mocks are permitted by `UT-0602`).
Test data comes from the fixture's synthetic identities — **no real personal data in any
environment** (Doc 04 §11, CON-002).

| TC | Title | Verifies (US · FR/NFR) | Level | Expected result | Implementing test | Status |
|---|---|---|---|---|---|---|
| TC-0001 | First enrolment issues exactly one active credential | US-0001 · FR-001 | contract-integration | Credential issued; no key material shown to the citizen | `packages/contracts/test/lifecycle.test.mjs` · UT-0104 | Pass (inh.) — proof is a mock |
| TC-0002 | Enrolment through a deactivated issuer is refused | US-0004 · FR-004, FR-005 | contract-integration | Reverts with the deactivated-issuer error | lifecycle · UT-0106 | Pass (inh.) |
| TC-0003 | A region with ≥2 issuers including ≥1 non-state accepts enrolment | US-0004 · FR-004 | contract-integration | ADR-003 invariant satisfied; enrolment proceeds | lifecycle · UT-0102 | Pass (inh.) |
| TC-0004 | A residency scope is a region identifier no finer than a ward | US-0008 · FR-006, NFR-010 | unit | Region path accepted at ward granularity; finer path refused | `packages/protocol/test/party-and-regions.test.js` · UT-0044, UT-0045 | **Pass (obs.)** |
| TC-0005 | A boundary redraw creates a new registry version, not a rewrite | US-0010 · FR-007 | unit | `schemeVersion` advances; prior version retained | protocol · UT-0047 | **Pass (obs.)** |
| TC-0006 | Region ids agree between the reference implementation and the chain | US-0010 · FR-007, NFR-021 | differential | `regionIdOf == keccak256(regionPreimage(path, v))` | `packages/contracts/test/differential.test.mjs` · UT-0415 | Pass (inh.) |
| TC-0007 | A denominator is accepted only as the median of ≥5 sources after the dispute window | US-0019, US-0020 · FR-009 | contract-integration | Accepted; source identities recorded | lifecycle · UT-0101; adversarial · UT-0333 | Pass (inh.) |
| TC-0008 | The threshold equals the published percentage of the denominator and is reproducible | US-0019 · FR-016 | unit + differential | Identical value from protocol reference and chain | protocol · UT-0023; differential · UT-0410 | **Pass (obs.)** / Pass (inh.) |
| TC-0009 | A draft meeting the standard in all eight pillars publishes with no approval step | US-0014 · FR-011 | unit + component | Published; no human step anywhere in the path | protocol · UT-0033, UT-0034; `apps/web` · UT-0730 | **Pass (obs.)** / Not run |
| TC-0010 | A party draft is created pseudonymously with exactly one declared jurisdiction | US-0011 · FR-010 | contract-integration | Draft created; drafter shown pseudonymously | `PartyRegistry.openPetition` — no dedicated UT | **No mechanism** (partial): the contract has no emblem field and no name/emblem collision check — see TC-1041 |
| TC-0011 | A resident endorses once and the count increments by exactly one | US-0016 · FR-014 | contract-integration | Count +1; endorser identity not published | lifecycle · UT-0112 | Pass (inh.) — residency binding is a mock |
| TC-0012 | An endorser may withdraw before activation and the count decrements | US-0017 · FR-015 | contract-integration + indexer | Count −1; no identity revealed | lifecycle · UT-0114; indexer · UT-0503; sdk · UT-2598 | Pass (inh.) / **Pass (obs.)** |
| TC-0013 | A petition at or above threshold activates automatically with no approval step | US-0022 · FR-018 | contract-integration | Party activates; activation record holds charter version, count, denominator, sources | lifecycle · UT-0115 | Pass (inh.) — **partial: no dwell period exists**, see TC-1042 |
| TC-0014 | Activation is permissionless — any citizen, indexer or observer may call it | US-0022 · FR-018 | contract-integration | Call from an arbitrary EOA succeeds | lifecycle · UT-0115 | Pass (inh.) |
| TC-0015 | A verified citizen joins an active party immediately, with no approval | US-0024 · FR-020 | contract-integration | Membership effective; no sponsor/interview/fee path exists | lifecycle · UT-0120; protocol · UT-0039 | Pass (inh.) / **Pass (obs.)** |
| TC-0016 | A member leaves immediately and all rights in that party cease | US-0025 · FR-022 | contract-integration | `leftAt` set same block; nobody can block it | lifecycle · UT-0124 | Pass (inh.) |
| TC-0017 | Membership is public in aggregate and never individually | US-0026 · FR-020, NFR-001, NFR-024 | indexer | Totals and regional breakdown project; no roster exists | `services/indexer/test/projection.test.js` · UT-0520 | **Pass (obs.)** |
| TC-0018 | A matured member submits a proposal with a declared tier, unscreened | US-0031 · FR-024 | contract-integration | Accepted; no moderation hook exists | `packages/contracts/test/governance.test.mjs` · UT-0200 | Pass (inh.) |
| TC-0019 | A charter-tier proposal closing at 45% quorum / 70% approval passes into its timelock | US-0033 · FR-025 | contract-integration | Passes; timelock begins | governance · UT-0203, UT-0210 | Pass (inh.) |
| TC-0020 | A passed proposal executes only after the timelock, by any caller | US-0035 · FR-026 | contract-integration | Executes post-timelock from a non-privileged EOA | governance · UT-0203 | Pass (inh.) |
| TC-0021 | An entrenched clause takes the highest tier and the longest timelock | US-0036 · FR-027 | unit + contract | Highest tier applied; age-qualified quorum enforced | protocol · UT-0041, UT-0003; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-0022 | The eligible-voter set is fixed at proposal open and is reproducible | US-0037 · FR-028 | unit + contract | Snapshot root + tenure fixed at T; publicly reproducible | protocol · UT-0014; governance · UT-0200 | **Pass (obs.)** / Pass (inh.) |
| TC-0023 | Every member's vote counts exactly once with identical weight | US-0027 · FR-021 | unit + contract + indexer | 20-year founder == 181-day member; tally increments by 1 only | protocol · UT-0017; adversarial · UT-0302; indexer · UT-0521 | **Pass (obs.)** / Pass (inh.) |
| TC-0024 | A closed ballot's result is re-computable from public events alone | US-0044 · FR-033 | indexer | Deterministic re-projection reproduces the published result | indexer · UT-0500, UT-0515 | **Pass (obs.)** — **partial**: Phase-1 tallies expose individual votes (Doc 06 §7.5), so "learns no individual vote" fails |
| TC-0025 | Petition progress renders from the protocol's own arithmetic | US-0018 · FR-017 | component + indexer | Count/threshold/percentage/time remaining agree with the reference | `apps/web` · UT-0720, UT-0722, UT-0723; indexer · UT-0502 | Not run / **Pass (obs.)** |
| TC-0026 | Manifesto versions supersede and never overwrite | US-0055 · FR-047 | contract + indexer | Version N+1 appended; N retrievable unchanged | `Party.publishManifesto`; indexer · UT-0523 | **Pass (obs.)** — **partial**: no test proves prior **charter** versions stay retrievable, and no diff view exists |
| TC-0027 | Every governance action emits a public record sufficient to reconstruct the outcome | US-0061 · FR-054 | indexer | Event stream replays to identical state | indexer · UT-0500, UT-0510 | **Pass (obs.)** — **partial**: nomination, election, recall, treasury and filtering actions do not exist yet |
| TC-0028 | A matured member self-nominates for an office in their own region | US-0046 · FR-036 | E2E | Candidacy accepted pending endorsements | — | **Blocked — Phase 3** (Elections not implemented; `elections` flag off above dev) |
| TC-0029 | Candidate consent is separately recorded before any candidacy is published | US-0049 · FR-037, FR-038 | E2E | Nothing published until consent is recorded | — | **Blocked — Phase 3** |
| TC-0030 | An election assigns the office automatically in code on close | US-0053 · FR-040, FR-041 | E2E | Role assigned; no ratification step exists | — | **Blocked — Phase 3** |
| TC-0031 | A recall initiation opens without anyone's approval | US-0057 · FR-042 | E2E | Initiation opens; no veto path | — | **Blocked — Phase 3** (`recall` flag off above dev) |
| TC-0032 | A successful recall revokes the office and opens a by-election | US-0060 · FR-045 | E2E | Role revoked in code; by-election scheduled | — | **Blocked — Phase 3** |
| TC-0033 | A ballot is cast anonymously and counted exactly once | US-0038 · FR-030 | E2E | Encrypted ballot accepted; tally proves one-eligible-one-ballot | — | **Blocked — Phase 3** (MACI; `maci_voting` off in staging/prod) |
| TC-0034 | Recovery restores control after the published timelock, with notification and cancellation | US-0068 · FR-058, NFR-016 | E2E | Control restored; notification sent; cancel window honoured | — | **Blocked** — social-recovery/4337 path not implemented in this drop |
| TC-0035 | A full primary journey completes with no token, no wallet and no fee | US-0066 · FR-060, NFR-005 | E2E | Every flow completes; USD 0.00 charged | — | **Blocked** — no deployed environment; relayer/paymaster not built |
| TC-0036 | Sponsorship exhaustion queues the action with an explanation and an expected time | US-0067 · FR-061 | E2E | Queued, never rejected, never charged | — | **Blocked** — paymaster/relayer service not built |
| TC-0037 | A person holds exactly one active residency scope, with a 180-day change cooldown | US-0009 · FR-008 | contract-integration | Second change inside 180 days refused with the permitted date | — | **No mechanism** — no residency-change function or cooldown exists |
| TC-0038 | Endorsement is accepted only from a person resident inside the declared jurisdiction | US-0016 · FR-014 | contract-integration | Out-of-jurisdiction endorsement refused | region binding in public signals | **Blocked** — enforcement rests entirely on the mocked residency proof |
| TC-0039 | Display filtering is recorded in a public register with jurisdiction and legal basis | US-0065 · FR-056, FR-057 | E2E | Register entry created; underlying record unaltered | — | **No mechanism** — no filtering register exists |
| TC-0040 | A party's public-history export reconstitutes on an independent deployment | US-0063 · FR-055, NFR-018 | E2E | Identical roots, tallies and history | — | **Blocked** — `apps/verifier` and the export path do not exist |

### 3.2 `TS-EDGE` — Negative, edge and boundary cases (TC-1001–TC-1048)

Seeded from **SDD §11** (failure-mode analysis) and Doc 04 §5.2 (every custom error provoked **by
name**). Shared preconditions as §3.1. **Every case asserts the specific custom error**, never
merely "it reverted" (Doc 06 §2.2).

| TC | Title / provoked condition | Verifies | SDD §11 row | Expected | Implementing test | Status |
|---|---|---|---|---|---|---|
| TC-1001 | Duplicate enrolment nullifier from the same human | FR-001 · US-0001 | FR-001/DES-001 | Reject — nullifier already spent | lifecycle · UT-0105 | Pass (inh.) |
| TC-1002 | **Cross-issuer double enrolment** in one identifier namespace | FR-001 · US-0001 | FR-001/DES-001 | Reject — namespace collision (Doc 06 §5 defect #2 regression) | lifecycle · UT-0109 | Pass (inh.) |
| TC-1003 | Enrolment whose namespace does not match its issuer | FR-001 · US-0001 | — | Reject | lifecycle · UT-0109b | Pass (inh.) |
| TC-1004 | Region falls to a single state issuer, enrolment attempted | FR-004 · US-0004 | FR-004/DES-002 | **Fail closed** on `issuerSetValid()` (Doc 06 §5 defect #3 regression) | lifecycle · UT-0109c, UT-0103; protocol · UT-0052 | Pass (inh.) / **Pass (obs.)** |
| TC-1005 | Compromised issuer mass-issues within one epoch | FR-005 · US-0005 | FR-005/DES-003 | Per-epoch cap throttles it | lifecycle · UT-0107; adversarial · UT-0321 | Pass (inh.) |
| TC-1006 | Issuer is deactivated after issuing credentials | FR-005 · US-0005 | FR-005/DES-003 | Existing credentials survive — users are not punished for their issuer | adversarial · UT-0322 | Pass (inh.) |
| TC-1007 | **Endorsement replayed from another address** | FR-014 · US-0016 | FR-014/DES-011 | Reject — nullifier already spent, address is irrelevant | lifecycle · UT-0112 | Pass (inh.) |
| TC-1008 | Endorsement proof scoped to a different petition | FR-014 · US-0016 | FR-014/DES-011 | Reject — wrong scope | lifecycle · UT-0113 | Pass (inh.) |
| TC-1009 | Activation attempted below the threshold | FR-016, FR-018 · US-0022 | FR-016/DES-009 | `ThresholdNotMet(have, need)` — no override exists | lifecycle · UT-0111 | Pass (inh.) |
| TC-1010 | Denominator moves while a petition is open | FR-016 · US-0019 | FR-016/DES-009 | Requirement frozen at open — unaffected | protocol · UT-0023; differential · UT-0410 | **Pass (obs.)** / Pass (inh.) |
| TC-1011 | **Population oracle deflated toward zero** | FR-009, FR-016 · US-0019 | FR-009/DES-010 | Verified-resident and 500-endorsement floors bind — attacker gains nothing | protocol · UT-0024, UT-0025; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-1012 | **Denominator drift beyond ±5% per quarter** | FR-009 · US-0019 | FR-009/DES-007 | `DriftTooLarge` | adversarial · UT-0331 | Pass (inh.) |
| TC-1013 | Fewer than five population sources submitted | FR-009 · US-0019 | FR-009/DES-007 | `TooFewSources` | adversarial · UT-0333 | Pass (inh.) |
| TC-1014 | New denominator used while its dispute window is open | FR-009 · US-0020 | FR-009/DES-007 | `DisputeWindowOpen` | adversarial · UT-0332 | Pass (inh.) |
| TC-1015 | **Wrong-jurisdiction join** | FR-020 · US-0024 | FR-020/DES-013 | Reject — citizen's region outside the party's jurisdiction | lifecycle · UT-0123 | Pass (inh.) |
| TC-1016 | Second join from the same person (new device, new address) | FR-002, FR-020 · US-0006 | FR-020/DES-013 | `AlreadyMember` | lifecycle · UT-0122 | Pass (inh.) |
| TC-1017 | Join into a region below the k ≥ 1,000 anonymity floor | NFR-002 · US-0039 | FR-020/DES-013 | `AnonymitySetTooSmall(regionId, have, need)` — refuse to publish | lifecycle · UT-0116 | Pass (inh.) |
| TC-1018 | **A charter weaker than the protocol floor** | FR-012, FR-025 · US-0013 | FR-025/DES-016 | `CharterWeakerThanFloor` | protocol · UT-0002, UT-0037; differential · UT-0401 | **Pass (obs.)** / Pass (inh.) |
| TC-1019 | Constitutional tenure set below the 90-day absolute floor | FR-027 · US-0036 | FR-025/DES-016 | Reject | protocol · UT-0003, UT-0038 | **Pass (obs.)** |
| TC-1020 | A charter configuring gated membership | FR-020 · US-0024 | — | Reject — no party may re-invent the gatekeeper | protocol · UT-0039 | **Pass (obs.)** |
| TC-1021 | A configuration weighting a vote by any attribute | FR-021 · US-0027 | FR-021 | Reject — only 1p1v is expressible | protocol · UT-0040 | **Pass (obs.)** |
| TC-1022 | **A proposal targeting an immutable / entrenched clause** | FR-027 · US-0036 | FR-027/DES-022 | Revert **at proposal time**, not at execution | protocol · UT-0041; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-1023 | Proposer whose tenure is short of the tier minimum | FR-023, FR-024 · US-0029 | — | Reject with the tenure error | governance · UT-0201 | Pass (inh.) |
| TC-1024 | Vote cast during the discussion period | FR-026, FR-039 · US-0034 | — | Reject — discussion always precedes voting | governance · UT-0202; protocol · UT-0021 | Pass (inh.) / **Pass (obs.)** |
| TC-1025 | Double vote from the same person in one ballot | FR-002, FR-021 · US-0006 | — | Reject — scope nullifier already spent | governance · UT-0204 | Pass (inh.) |
| TC-1026 | **Quorum near-miss**: 39% quorum, 90% approval | FR-025 · US-0033 | — | Fails; the failing condition is published | protocol · UT-0011; governance · UT-0210 | **Pass (obs.)** / Pass (inh.) |
| TC-1027 | Supermajority near-miss: 45% quorum, 60% approval | FR-025 · US-0033 | — | Fails; the failing condition is published | governance · UT-0210 | Pass (inh.) |
| TC-1028 | **Exact tie** on approval | FR-025 · US-0033 | — | Fails — a strict majority is required | protocol · UT-0013 | **Pass (obs.)** |
| TC-1029 | Abstentions at the quorum boundary | FR-025 · US-0033 | — | Count toward quorum, not toward approval | protocol · UT-0012; governance · UT-0211 | **Pass (obs.)** / Pass (inh.) |
| TC-1030 | **Member joins after the snapshot instant** | FR-028 · US-0037 | FR-028/DES-019 | Excluded from that proposal; quorum measured on the snapshot | protocol · UT-0018, UT-0014 | **Pass (obs.)** |
| TC-1031 | Tenure one second short of the tier minimum | FR-023 · US-0029 | — | Excluded — boundary is exact | protocol · UT-0019 | **Pass (obs.)** |
| TC-1032 | **Execution attempted before the timelock elapses** | FR-026 · US-0035 | FR-026/DES-021 | Refused; the change stays publicly pending | governance · UT-0203 | Pass (inh.) |
| TC-1033 | The execution call itself reverts after the timelock | FR-026 · US-0035 | FR-026/DES-021 | Proposal stays executable; retryable, permissionless | — | **Blocked** — designed, no implementing test exists |
| TC-1034 | Attempt to skip the petition stage | FR-013, FR-018 · US-0022 | — | Reject | protocol · UT-0031 | **Pass (obs.)** |
| TC-1035 | Attempt to resurrect an expired or dissolved party | FR-013 · US-0021 | — | Reject | protocol · UT-0032 | **Pass (obs.)** |
| TC-1036 | Negative or fractional tally inputs | FR-025 · US-0033 | — | Refuse, never silently coerce | protocol · UT-0015 | **Pass (obs.)** |
| TC-1037 | Growth spread just beyond the surge window | BR-012 · US-0036 | — | No surge raised | protocol · UT-0007 | **Pass (obs.)** |
| TC-1038 | Surge decay after 90 days | BR-012 · US-0036 | — | Party is not frozen forever | protocol · UT-0008 | **Pass (obs.)** |
| TC-1039 | Voting window shorter than the coercion re-vote window | FR-032 · US-0042 | FR-032 | Refuse the schedule | protocol · UT-0022 | **Pass (obs.)** |
| TC-1040 | Region path finer than a ward, or carrying coordinates | FR-006, NFR-010 · US-0008 | FR-006/DES-005 | Refuse — the type cannot express an address | protocol · UT-0045, UT-0046 | **Pass (obs.)** |
| TC-1041 | **Name or emblem collides with an existing petition or party in the jurisdiction** | FR-010 · US-0011 | — | Publication refused, colliding entity named | — | **No mechanism** — `PartyRegistry` has no emblem field and no name-collision check |
| TC-1042 | **Petition drops below threshold during the dwell period** | FR-018 · US-0022 | — | Party does not activate; petition stays open | — | **No mechanism** — no dwell period is implemented (OI-08 unset) |
| TC-1043 | Residency change requested inside the 180-day cooldown | FR-008 · US-0009 | — | Refuse with the earliest permitted date | — | **No mechanism** |
| TC-1044 | Third join/leave transition inside the published churn window | FR-023 · US-0030 | — | Refuse with the earliest permitted date | — | **No mechanism** — `Party.join` permits unlimited rejoin |
| TC-1045 | Attempt to edit or delete charter version 3 | FR-047 · US-0055 | — | No capability exists; refused and logged | absence scan (TC-1600) | **Blocked** — no charter-version retrieval test exists |
| TC-1046 | Indexer receives an unknown event type from a newer contract | NFR-007 · US-0061 | — | Tolerated; older reader does not crash | indexer · UT-0517 | **Pass (obs.)** |
| TC-1047 | Duplicate delivery of the same log entry | FR-054 · US-0061 | — | Idempotent — rejected as a duplicate | indexer · UT-0511 | **Pass (obs.)** |
| TC-1048 | Event arrives from an address the indexer does not know | FR-054 · US-0061 | — | Refused | indexer · UT-0524 | **Pass (obs.)** |

---

## 4. Cross-cutting and quality suites

### 4.1 `TS-DIFF` — Differential (TC-1200–TC-1209) · **the load-bearing suite**

Doc 04 §5.4: a divergence between what the client predicts and what the chain does is how a citizen
gets falsely told their vote counted. **Any divergence is automatically Sev-1 and merge-blocking.**

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1200 | Tier rules: reference vs chain, all 4 tiers | FR-025, NFR-021 | Identical `Rules` tuple | differential · UT-0400 | Pass (inh.) |
| TC-1201 | Charter-floor ratchet agreement | FR-012, FR-025 | Both reject a weaker charter identically | differential · UT-0401 | Pass (inh.) |
| TC-1202 | Tally outcomes across a matrix of vote splits | FR-025 | Identical pass/fail and failing condition | differential · UT-0402 | Pass (inh.) |
| TC-1203 | Petition threshold: reference vs chain | FR-016 | Identical required count | differential · UT-0410 | Pass (inh.) |
| TC-1204 | Region ids: reference vs chain | FR-007 | `regionIdOf == keccak256(regionPreimage(path,v))` | differential · UT-0415 | Pass (inh.) |
| TC-1205 | Growth surge: reference vs chain | BR-012 | Identical surge state and adjusted bar | differential · UT-0420 | Pass (inh.) |
| TC-1206 | SDK outcome prediction vs protocol reference | NFR-021, FR-017 | SDK delegates; never re-implements | sdk · UT-2577, UT-2583 | **Pass (obs.)** |
| TC-1207 | Indexer projection determinism and divergence detection | FR-054 | Same events ⇒ same fingerprint; one changed event ⇒ different fingerprint | indexer · UT-0515, UT-0516 | **Pass (obs.)** |
| TC-1208 | On-chain vs off-chain Merkle root parity | FR-002, NFR-021 | Identical LeanIMT/Poseidon roots | harness fact, Doc 06 §1.2 | Pass (inh.) |
| TC-1209 | Web petition-progress component vs protocol arithmetic | FR-017 | UI performs no arithmetic of its own | `apps/web` · UT-0720 | Not run |

### 4.2 `TS-ZK` — Circuits (TC-1400–TC-1406)

**Doctrine (Doc 04 §7): positive tests prove nothing.** Six mandatory classes per circuit. The
`circom` binary is a Phase-2 CI job (Doc 06 §7.2); **nothing in this drop claims a proof has been
verified.**

| TC | Title | Verifies | Expected | Status |
|---|---|---|---|---|
| TC-1400 | `residency_member`: a valid witness produces an accepting proof | FR-006 | Proof verifies | **Blocked — circuits not compiled (Phase 2)** |
| TC-1401 | `residency_member`: malformed / out-of-range witness is rejected | FR-006, RISK-10 | Witness generation or verification fails | **Blocked — Phase 2** |
| TC-1402 | `tenure_member`: tenure below the tier floor produces no accepting proof | FR-023, FR-027 | Rejected | **Blocked — Phase 2** |
| TC-1403 | `circomspect` reports no finding at or above Warning | RISK-10, NFR-009 | Clean run; build fails otherwise | **Blocked — toolchain not stood up** |
| TC-1404 | Witness generation is differentially tested against `@trumocracy/protocol` | NFR-021 | Identical public signals | **Blocked — Phase 2** |
| TC-1405 | A proof against an unregistered circuit / proving key is refused on-chain | RISK-10 | `VerifierRegistry` rejects it | Pass (inh.) — adversarial · UT-0342, UT-0343 (**contract-level surrogate only**) |
| TC-1406 | Nullifier soundness: one witness cannot yield two distinct valid nullifiers in one scope | FR-002 | Impossible | **Blocked — Phase 2** |

### 4.3 `TS-ABSENCE` — Capability-absence (TC-1600–TC-1614)

Several guarantees here **are the absence of a function**. Doc 04 §6.5 and Doc 06 §4 both state the
limits of this technique: it proves no *named* capability exists at the ABI/bytecode boundary; it
does **not** prove there is no unnamed backdoor. These cases are written to claim only the former.

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1600 | No pause, admin, upgrade or ownership surface in the core ABI | FR-056, CON-003, NFR-017 | Denylist empty across all core ABIs | adversarial · UT-0310 | Pass (inh.) |
| TC-1601 | No proxy pattern and no `SELFDESTRUCT` in the core | FR-056, CON-003 | No `DELEGATECALL` (0xf4) outside the library link | adversarial · UT-0311 | Pass (inh.) |
| TC-1602 | The only delegatecall target is the immutable Poseidon library | CON-003 | Single, immutable target | adversarial · UT-0311c | Pass (inh.) |
| TC-1603 | **Control test:** the opcode scanner detects `DELEGATECALL` when it is present | NFR-009 | Scanner fails a deliberately-planted contract | adversarial · UT-0311b | Pass (inh.) |
| TC-1604 | No ERC-20/721 transfer selector in the deployed bytecode | FR-035, CON-006 | Selector scan empty | adversarial · UT-0301 | Pass (inh.) |
| TC-1605 | No transferable governance power exists to acquire | FR-035, BR-010 | Structurally impossible | adversarial · UT-0300 | Pass (inh.) |
| TC-1606 | Emergency flag control can only **disable**, never add power | NFR-017, CON-003 | `enable` unavailable to the disabler | adversarial · UT-0312 | Pass (inh.) |
| TC-1607 | **No function maps a nullifier back to a person** | FR-002, NFR-001, RISK-07 | No such selector exists | lifecycle · UT-0108 | Pass (inh.) |
| TC-1608 | No member weight field exists anywhere | FR-021, BR-010 | Struct carries no weight | lifecycle · UT-0121 | Pass (inh.) |
| TC-1609 | No type in the system can express coordinates or an address | FR-006, NFR-010 | Region path only | protocol · UT-0046 | **Pass (obs.)** |
| TC-1610 | Flags gate **starting** a capability, never **completing** one already under way | NFR-020, CON-003 | `propose` gated; `vote`/`finalize`/`execute` not | adversarial · UT-0360, UT-0361 | Pass (inh.) — Doc 06 §5 defect #4 regression |
| TC-1611 | `permanentFlags()` is empty — every flag carries a removal target | NFR-020 | Empty set asserted | protocol · UT-0053, UT-0055 | **Pass (obs.)** |
| TC-1612 | The censorship escape hatch and gas sponsorship cannot be switched off | NFR-014, FR-061 | Permanently on | protocol · UT-0054 | **Pass (obs.)** |
| TC-1613 | Storage-layout snapshot detects an unexpected slot | NFR-017 | Snapshot diff fails the build | — | **Blocked** — the harness `storageLayout` output selection (Doc 04 §6.3) was not added |
| TC-1614 | No deletion or edit path for any published record | FR-047, FR-056, RISK-13 | No selector, no bytecode path, no endpoint | adversarial · UT-0310, UT-0301 | Pass (inh.) — **partial**: the service-endpoint half has no test |

### 4.4 `TS-ABI` (TC-1800–TC-1803)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-1800 | Per-contract **ABI allowlist** snapshot (primary control, Doc 04 §6.1) | NFR-009 | **Blocked** — only the denylist (TC-1600) is implemented; no allowlist snapshot exists |
| TC-1801 | Indexer read-schema snapshot | FR-054, FR-055 | **Blocked** — not built |
| TC-1802 | SDK ↔ contract ABI drift check | NFR-021 | Pass (inh.) — partial, via sdk decode tests · UT-2613 |
| TC-1803 | Every contract is under the EIP-170 24,576-byte limit | NFR-021 | Pass (inh.) — `script/compile.mjs`, Doc 06 §1.2 (largest 13,185) |

### 4.5 `TS-SEC` — Security and negative authority (TC-1850–TC-1863)

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1850 | **A nullifier cannot be burned by an unauthorised caller** | FR-002, NFR-004 | Revert; the citizen keeps the action | adversarial · UT-0325 | Pass (inh.) — defect #1 regression |
| TC-1851 | Spender authority is exactly the modules the registry deployed, and nothing else | CON-003 | Set equality asserted; no de-authorisation path | adversarial · UT-0326 | Pass (inh.) |
| TC-1852 | **A rejecting verifier refuses the action** | RISK-10, NFR-009 | `InvalidProof` | adversarial · UT-0340 | Pass (inh.) |
| TC-1853 | Proof with the wrong number of public signals | RISK-10 | Refused | adversarial · UT-0341 | Pass (inh.) |
| TC-1854 | Unregistered circuit refused | RISK-10 | Refused | adversarial · UT-0342 | Pass (inh.) |
| TC-1855 | Circuit registered without a published ceremony URI | RISK-10 | Registration refused | adversarial · UT-0343 | Pass (inh.) |
| TC-1856 | A superseded verifier stays valid through its grace window | NFR-017 | In-flight proofs are not invalidated | adversarial · UT-0344 | Pass (inh.) |
| TC-1857 | **An insecure mock is detected in the verifier registry** | RISK-10 | `IS_INSECURE_MOCK()` found | adversarial · UT-0350 | Pass (inh.) |
| TC-1858 | **A mock verifier reaching a promoted environment is refused** | RISK-10, NFR-009 | Promotion to staging/prod fails | deployment-safety · UT-0601 | Pass (inh.) |
| TC-1859 | A mock is permitted on devnet and below | — | Allowed, so the governance layer can be built first | deployment-safety · UT-0602 | Pass (inh.) |
| TC-1860 | An unknown environment name is rejected, not defaulted to permissive | NFR-009 | Reject | deployment-safety · UT-0606 | Pass (inh.) |
| TC-1861 | Deployment wires the nullifier-spender authority, without which every action reverts | CON-003 | Wired at deploy time | deployment-safety · UT-0611 | Pass (inh.) |
| TC-1862 | Proposal flooding is rate-limited per person per period | FR-029 | `ProposalCooldown(until)` | — | **Blocked** — `PROPOSAL_COOLDOWN` exists in `Governor`; no test provokes it |
| TC-1863 | Independent penetration test and security/cryptography audit, zero critical/high open | NFR-009, CON-012 | 0 critical/high | NF-02 | **Manual — not run** (MS-09, 2027-03-12) |

### 4.6 `TS-PRIV` — Privacy and anonymity (TC-1950–TC-1963)

| TC | Title | Verifies | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-1950 | The anonymity-set guard refuses publication below k = 1,000 | NFR-002 · US-0039 | Withheld with a stated reason | protocol · UT-0048 | **Pass (obs.)** |
| TC-1951 | A thin ward escalates to the nearest safe ancestor region | NFR-002 · US-0039 | Escalation applied to publication | protocol · UT-0049 | **Pass (obs.)** |
| TC-1952 | Publication refused when even the country is too thin | NFR-002 | Refuse rather than expose | protocol · UT-0050 | **Pass (obs.)** |
| TC-1953 | **A region below the k ≥ 1,000 floor cannot host a published action on-chain** | NFR-002 | `AnonymitySetTooSmall` | lifecycle · UT-0116 | Pass (inh.) |
| TC-1954 | The SDK refuses to endorse in a region below the floor | NFR-002 | Client-side refusal with an explanation | sdk · UT-2607 | **Pass (obs.)** |
| TC-1955 | The SDK refuses to join a party whose region is too thin | NFR-002 | Refusal | sdk · UT-2608 | **Pass (obs.)** |
| TC-1956 | One person acting in N scopes produces N unrelated nullifiers | FR-002 · US-0007 | No shared structure between them | sdk · UT-2521 | **Pass (obs.)** |
| TC-1957 | The same person in the same scope is stable — that is what "once" means | FR-002 · US-0006 | Deterministic | sdk · UT-2522 | **Pass (obs.)** |
| TC-1958 | The private witness never enters the public signals | FR-030, NFR-001 | Public signal array excludes the secret | sdk · UT-2601 | **Pass (obs.)** |
| TC-1959 | The client collects nothing about its reader | NFR-001, NFR-010 | No beacon, analytics global or tracking attribute | `apps/web` · UT-0740 | Not run |
| TC-1960 | The indexer records no reader | NFR-001 | No reader identity persisted | indexer · UT-0525 | **Pass (obs.)** |
| TC-1961 | **Cross-scope correlation battery** over a production-scale synthetic dataset | FR-002, NFR-001 | Adversary advantage ≤ ε at a stated confidence | — | **Blocked — OPEN-08**: "better than chance" is not falsifiable by a finite suite as written; no pass line exists |
| TC-1962 | Anonymity escalation applies to **publication**, never to **eligibility** | NFR-002, BR-004 | A ward election's electorate never silently changes | — | **Blocked — OPEN-10 / OI-05** undecided |
| TC-1963 | Independent adversarial privacy audit | NFR-001 | 0 confirmed linkages, 0 critical/high | NF-01 | **Manual — not run** |

### 4.7 `TS-DATA` — Data inventory (TC-2050–TC-2053)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2050 | Full data-inventory scan of every store, log, backup, cache and message queue | FR-003, NFR-010, CON-002 | **Blocked** — no scanner exists in this drop |
| TC-2051 | A change that would persist a date of birth **fails the build** | FR-003, NFR-010 · US-0002 | **Blocked** — build-failing check not implemented |
| TC-2052 | No personal data is expressible on the public record | NFR-010 | Pass (inh.)/**Pass (obs.)** — partial, via TC-1607 (UT-0108) and TC-1609 (UT-0046) |
| TC-2053 | No real personal data exists in any environment, including a developer laptop | CON-002 | **Blocked** — the three CI scanners of Doc 04 §11 are not built |

### 4.8 `TS-PERF`, `TS-LOAD`, `TS-COST` (TC-2080–TC-2203)

Every case here needs an environment or an instrument that does not exist in this drop.

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2080 | Primary screen interactive ≤ 5 s p95 on the reference device (2 GB RAM, Android 9) at 64 kbit/s | NFR-006, NFR-012 | **Blocked** — no reference-device harness (NF-05) |
| TC-2081 | Action acknowledged ≤ 5 s p95, finalised on the record ≤ 120 s p95 | NFR-006 | **Blocked** — no testnet |
| TC-2082 | Full enrol → endorse journey completes in ≤ 10 minutes unaided | NFR-006, NFR-022 | **Blocked** |
| TC-2083 | Client install ≤ 15 MB | NFR-012 | **Blocked** — no build-size gate |
| TC-2084 | On-device proving completes on the reference device | NFR-006, NFR-012 | **Blocked** — circuits not compiled |
| TC-2150 | 5,000 governance actions/second sustained | NFR-008 | **Blocked** — no load rig |
| TC-2151 | LeanIMT insert cost measured to 50 M leaves | NFR-008 | **Blocked** |
| TC-2152 | Sponsorship-pool exhaustion and circuit-breaker trip | NFR-007, FR-061 | **Blocked** — relayer not built |
| TC-2153 | Soak: 72 h with no state divergence | NFR-007 | **Blocked** |
| TC-2200 | Gas-per-citizen-action regression detector (> 10% fails CI) | NFR-005 | Pass (inh.) — harness measures execution gas (Doc 06 §1.2); **this is a regression detector, not a price** |
| TC-2201 | Real price per action = execution + 21,000 intrinsic + calldata + ADR-001 blob fee, on testnet | NFR-005 | **Blocked** — no testnet |
| TC-2202 | Median < USD 0.01, p99 < USD 0.05 across the enumerated action set | NFR-005 | **Blocked — OPEN-15**: the action set is not enumerated, so the metric is unfalsifiable |
| TC-2203 | Citizen charged USD 0.00 in 100% of cases | NFR-005, FR-060 | **Blocked** — no production instrumentation (NF-04) |

### 4.9 `TS-A11Y`, `TS-I18N`, `TS-COMPAT` (TC-2250–TC-2382)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2250 | Automated WCAG 2.2 AA rule engine over **every** primary flow in CI | NFR-011 | **Blocked** — not built |
| TC-2251 | **Manual screen-reader pass** over every primary flow, per release candidate | NFR-011 | **Manual — not run** (by nature manual; no substitute exists) |
| TC-2252 | Every primary flow remains usable and completable at 200% text scale | NFR-011 | **Manual — not run** |
| TC-2253 | The vote confirmation has an accessible name and a heading | NFR-011 · US-0045 | Not run — `apps/web` · UT-0704 exists |
| TC-2254 | Petition progress is exposed to assistive technology, not only as a bar | NFR-011 · US-0018 | Not run — `apps/web` · UT-0721 exists |
| TC-2255 | Keyboard/switch operation of every primary flow | NFR-011 | **Manual — not run** |
| TC-2330 | 100% string coverage across 8 launch locales including ≥1 RTL | NFR-013 | **Blocked** — no locale files, no coverage gate |
| TC-2331 | **Jargon scan**: no wallet / seed phrase / private key / gas / token / mint / chain / block / hash in any primary flow | NFR-023, FR-060 · US-0066 | **Blocked** — scanner not built |
| TC-2332 | Grade-8 readability verified per locale | NFR-023 | **Manual — not run** |
| TC-2333 | RTL layout, date, number and name formatting | NFR-013 | **Blocked** |
| TC-2380 | Pairwise supported matrix: evergreen mobile browsers ≤ 24 months, Android 9+ | NFR-026 | **Blocked** — no device lab |
| TC-2381 | An unsupported device shows a clear, actionable message, not a broken screen | NFR-026 · US-0070 | **Blocked** |
| TC-2382 | Offline draft composition with deferred, exactly-once submission | NFR-012 · US-0012 | **Blocked** — no implementing code or test |

### 4.10 `TS-RES`, `TS-EXIT`, `TS-UPG`, `TS-SMOKE` (TC-2420–TC-2561)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-2420 | Sequencer stall — citizen action still lands via L1 force inclusion | NFR-025, NFR-014, RISK-09 | **Blocked** — testnet only; see TC-2680 and OPEN-11 |
| TC-2421 | The indexer lies; a client detects the divergence | FR-054, NFR-021 | **Pass (obs.)** — unit-level surrogate only: indexer · UT-0516, UT-0501 |
| TC-2422 | Relayer outage — the multi-transport client falls through to the next path | NFR-007 | Pass (obs.) — sdk transport tests only; no live failover test |
| TC-2423 | Gateway/domain block — an alternative access path succeeds | NFR-014 | **Blocked** — no isolated network lab |
| TC-2424 | IPFS pin loss — manifesto content still retrievable | FR-047 | **Blocked** |
| TC-2425 | **Rollback drill: previous version fully restored within 15 minutes** | NFR-020 | **Blocked** — no staging environment; drill not run (NF-07) |
| TC-2426 | **A flag governing an open ballot cannot be changed while that ballot is open** | NFR-020 · Doc 02 §8 | **No mechanism — OPEN-03**: `FeatureFlags` has no notion of an in-flight ballot. TC-1610 covers the adjacent guarantee (flags cannot stop a vote already under way) but not this one |
| TC-2480 | Complete party public-history export in an open, documented format | NFR-018, FR-055 | **Blocked** — export path not built |
| TC-2481 | The export reconstitutes on an independent deployment with identical roots and tallies | NFR-018 | **Blocked** |
| TC-2482 | The verifier re-computes every published count and reports agreement | FR-055 · US-0062 | **Blocked** — `apps/verifier` does not exist |
| TC-2520 | Core v1 → v2 party migration preserves meaning | NFR-017 | **Blocked** — no testnet |
| TC-2521 | Circuit supersede honours the 30-day grace window | NFR-017 | Pass (inh.) — adversarial · UT-0344 (contract level) |
| TC-2522 | A region `schemeVersion` advance does not alter a **closed** contest's eligibility, counts or result | FR-007 · US-0010 | **Blocked** — the reference rule is tested (UT-0047) but no contract/E2E case exercises a closed contest across a version bump |
| TC-2523 | Registry timelock ≥ the highest party tier (30 days) | NFR-017 | **Blocked** — assertion not written |
| TC-2560 | Post-deploy smoke: enrol → endorse → activate → join → propose → vote → tally in < 5 min | walking skeleton | **Blocked** — no devnet deployment |
| TC-2561 | Smoke runs after every deployment to every environment | NFR-020 | **Blocked** |

---

## 5. `TS-ADV-01…16` — Adversarial suites, one per RISK (TC-2600–TC-2752)

The attack trees are Doc 04 §8; each leaf below is a `TC`. **Any defect found here against a
guardrail FR is automatically Sev-1** (Doc 04), because TD-04 leaves no override to fix the
consequence.

| TC | Suite / RISK | Attack | Expected | Implementing test | Status |
|---|---|---|---|---|---|
| TC-2600 | ADV-01 · RISK-01 | **Same human enrols through two accepted issuers** reading the same document | Second enrolment collides on the namespace and is refused | lifecycle · UT-0109, UT-0109b | Pass (inh.) — defect #2 regression |
| TC-2601 | ADV-01 · RISK-01 | Same human enrols through two **different identifier types** (e-passport + social graph) | Exactly one active credential | — | **No mechanism** — ADR-003 bounds and documents this cross-*type* residual; `FR-001`/`BR-006` are not fully satisfied |
| TC-2602 | ADV-01 · RISK-01 | Attacker controls many addresses | Gains nothing — power is bound to nullifiers, not addresses | adversarial · UT-0320 | Pass (inh.) |
| TC-2603 | ADV-01 · RISK-01 | **Unauthorised nullifier burn** (targeted disenfranchisement) | Reverts; the citizen keeps the action | adversarial · UT-0325, UT-0326 | Pass (inh.) — defect #1 regression |
| TC-2604 | ADV-01 · RISK-01 | Endorsement inflation on a live petition | Threshold floors `max(byPopulation, byVerified, 500)` bind | protocol · UT-0025; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-2605 | ADV-01 · RISK-01 | Sybil economics: sell the resulting votes | No transferable instrument exists | adversarial · UT-0300, UT-0301 | Pass (inh.) |
| TC-2610 | ADV-02 · RISK-02 | **Receipt construction** from every function, export, screenshot and stored artefact | Nothing distinguishes the actual choice | — | **Blocked — Phase 3 (MACI)**; OPEN-01 |
| TC-2611 | ADV-02 · RISK-02 | Re-vote indistinguishability classifier | Advantage ≤ chance | — | **Blocked — Phase 3** |
| TC-2612 | ADV-02 · RISK-02 | Coercer is shown the confirmation screen | Screen renders identically for every choice and never names it | `apps/web` · UT-0700, UT-0701 | Not run |
| TC-2613 | ADV-02 · RISK-02 | Coercer checks whether a change-my-vote path exists | Path is offered for the whole window and hidden only after close | `apps/web` · UT-0702, UT-0703 | Not run |
| TC-2614 | ADV-02 · RISK-02 | Flag-state disclosure while MACI is off | The UI states votes are anonymous but **not** receipt-free, and defaults to the warning when the flag is unknown | `apps/web` · UT-0710, UT-0711, UT-0712 | Not run — **this is a disclosure, not a satisfaction of FR-031/032/NFR-003** |
| TC-2620 | ADV-03 · RISK-03 | **100,000 accounts join while a proposal is open** | Zero effect on that proposal | protocol · UT-0018, UT-0014 | **Pass (obs.)** |
| TC-2621 | ADV-03 · RISK-03 | Look for a transferable surface to buy voting power | None in ABI or bytecode | adversarial · UT-0300, UT-0301 | Pass (inh.) |
| TC-2622 | ADV-03 · RISK-03 | Mid-vote quorum grief by flooding | Quorum is measured on `snapshotMembers` — flood has no effect | protocol · UT-0014 | **Pass (obs.)** |
| TC-2630 | ADV-04 · RISK-04 | **Mob capture**: 9,000 of 10,000 members joined last week and vote to amend a founding clause | Quorum not met; amendment fails | protocol · UT-0041, UT-0003; governance · UT-0230 | **Pass (obs.)** / Pass (inh.) |
| TC-2631 | ADV-04 · RISK-04 | Growth surge during a constitutional vote | Surge raises the bar (+5 pts, ×2 window) on T2/T3 only | protocol · UT-0004; governance · UT-0220 | **Pass (obs.)** / Pass (inh.) |
| TC-2632 | ADV-04 · RISK-04 | Surge used to freeze ordinary party business | Everyday tiers untouched | protocol · UT-0005; governance · UT-0221 | **Pass (obs.)** / Pass (inh.) |
| TC-2633 | ADV-04 · RISK-04 | The captured minority forks | Fork proceeds; parent cannot block; lineage recorded | protocol · UT-0042, UT-0043 | **Pass (obs.)** — FR-053 has **no story** (Doc 05 §12 gap) |
| TC-2640 | ADV-05 · RISK-05 | Compromised issuer floods a region | Per-epoch cap throttles | adversarial · UT-0321 | Pass (inh.) |
| TC-2641 | ADV-05 · RISK-05 | Issuer set drops below the ADR-003 invariant | `enrol()` fails closed | lifecycle · UT-0109c | Pass (inh.) — defect #3 regression |
| TC-2642 | ADV-05 · RISK-05 | **One attestor exceeds 50% of a region's credentials** | Further issuance refused; share published | — | **No mechanism — OPEN-02**: `PersonhoodRegistry` has a per-issuer epoch cap and **no region dimension**. `FR-004` is untestable as written |
| TC-2650 | ADV-06 · RISK-06 | Colluding operator + attestor + party correlate all held data | Advantage ≤ ε | — | **Blocked — OPEN-08 / OPEN-13** (no adversary model, no collusion bound) |
| TC-2651 | ADV-06 · RISK-06 | Attempt to lower `MIN_ANONYMITY_SET` for one scope | No configuration, charter option, flag or privileged call can | protocol · UT-0048, UT-0049, UT-0050 + TC-1600 | **Pass (obs.)** |
| TC-2652 | ADV-06 · RISK-06 | Escalation changes a ward election's electorate | Escalation must touch publication only | — | **Blocked — OPEN-10 / OI-05** |
| TC-2653 | ADV-06 · RISK-06 | Timing/metadata correlation of submissions | Indistinguishable | — | **Blocked** — global passive adversary is explicitly out of scope (SDD §16 Q4) |
| TC-2660 | ADV-07 · RISK-07 | State orders disclosure of the member list or a voter's ballot | The data does not exist to disclose | lifecycle · UT-0108; protocol · UT-0046 | Pass (inh.) / **Pass (obs.)** |
| TC-2661 | ADV-07 · RISK-07 | "Take down party Y" | No pause, no admin, no deletion path in the core | adversarial · UT-0310, UT-0311 | Pass (inh.) |
| TC-2662 | ADV-07 · RISK-07 | Compel the attestor instead | Residual exposure — **accepted and disclosed**, not mitigated (Doc 01 §E3) | — | **Out of scope by decision**, recorded not tested |
| TC-2670 | ADV-08 · RISK-08 | Primary domain **and** app-store listing both blocked | ≥ 2 independent access paths succeed end to end | — | **Blocked** — no isolated network lab (NF-06) |
| TC-2671 | ADV-08 · RISK-08 | Served bundle is tampered with | Reproducible static bundle hash mismatch detected | — | **Blocked** — reproducible-build job not run by an independent party |
| TC-2680 | ADV-09 · RISK-09 | Sequencer censors one citizen's action | Included by an alternative path **within 60 minutes** | — | **Blocked — OPEN-11**: `NFR-025` says 60 min; ADR-001 says force inclusion is 12–24 h. The suite could only measure and report; it cannot pass a criterion the design contradicts |
| TC-2690 | ADV-10 · RISK-10 | A mock verifier reaches a promoted environment | Promotion refused | deployment-safety · UT-0601; adversarial · UT-0350 | Pass (inh.) |
| TC-2691 | ADV-10 · RISK-10 | A circuit is registered without a published ceremony | Registration refused; `zkeyHash` mandatory | adversarial · UT-0342, UT-0343 | Pass (inh.) |
| TC-2692 | ADV-10 · RISK-10 | Client is fed a swapped proving key | Client refuses to prove with an unregistered key (DES-052) | — | **Blocked** — no test evidences client-side zkey pinning |
| TC-2693 | ADV-10 · RISK-10 | Ceremony transcript is incomplete or unverifiable | Detected before promotion | — | **Blocked — Phase 2** |
| TC-2700 | ADV-11 · RISK-11 | Recovery at n = 1,000 synthetic subjects across guardian topologies | ≥ 99% succeed ≤ 14 days; ≤ 0.01% fraudulent | — | **Blocked** — recovery not implemented |
| TC-2701 | ADV-11 · RISK-11 | Guardians collude to seize an account | 7-day timelock + owner veto + public notice defeat it | — | **Blocked** |
| TC-2710 | ADV-12 · RISK-12 | One corrupt population source | Median absorbs it | adversarial · UT-0330 | Pass (inh.) |
| TC-2711 | ADV-12 · RISK-12 | **Denominator swung under a live petition** | Drift limit rejects it | adversarial · UT-0331 | Pass (inh.) |
| TC-2712 | ADV-12 · RISK-12 | New denominator pushed inside its dispute window | Refused | adversarial · UT-0332 | Pass (inh.) |
| TC-2713 | ADV-12 · RISK-12 | Fewer than five sources supplied | Refused | adversarial · UT-0333 | Pass (inh.) |
| TC-2714 | ADV-12 · RISK-12 | **Oracle deflated to zero** to make activation trivial | Verified-resident and 500 floors bind | protocol · UT-0024; adversarial · UT-0334 | **Pass (obs.)** / Pass (inh.) |
| TC-2715 | ADV-12 · RISK-12 | All "independent" sources are supplied by one authority | Independence enforced | — | **No mechanism — OPEN-12**: `submitPopulation` is `onlyTimelock`. Only source *identity recording* is testable |
| TC-2720 | ADV-13 · RISK-13 | Demand to delete a published record | No selector, no bytecode path, no endpoint deletes it | adversarial · UT-0310, UT-0301 | Pass (inh.) |
| TC-2721 | ADV-13 · RISK-13 | Content filtered without a public log entry | Refused | — | **No mechanism** — the filtering register does not exist |
| TC-2730 | ADV-14 · RISK-14 | Product presented as conducting a binding state election | CON-001 boundary stated on every public surface | — | **Manual — not run** |
| TC-2740 | ADV-15 · RISK-15 | Threshold set so high no party ever activates | Calibration reviewed against month-3 enrolment | — | **Blocked — OI-01** undecided (calibration method, not the number) |
| TC-2750 | ADV-16 · RISK-16 | **`FeatureFlags` blast radius**: disable a flag governing an open ballot / a passed proposal awaiting execution | Disable MUST NOT stop an in-flight ballot, block execution of a passed proposal, alter a result, or enable anything | adversarial · UT-0360, UT-0361 | Pass (inh.) — **partial**: (c) and (d) and the "cannot stop a vote already under way" half are covered; **the prevention `NFR-020` requires is still absent (OPEN-03)** |
| TC-2751 | ADV-16 · RISK-16 | Emergency control used to *add* power | Only `disable` exists | adversarial · UT-0312 | Pass (inh.) |
| TC-2752 | ADV-16 · RISK-16 | Exit works: full export → reconstitute → identical roots | Exit is a real path, exercised in CI | — | **Blocked** — not built |

### 5.1 `TS-EXPL` and `TS-UAT` (TC-3200–TC-3253)

| TC | Title | Verifies | Status |
|---|---|---|---|
| TC-3200–TC-3209 | One time-boxed exploratory charter per epic `EP-01`…`EP-10`, focused on interrupted flows, clock skew, back-button and multi-device state | all | **Blocked** — needs a deployed environment; no charter has been run |
| TC-3250 | ≥ 80% of first-time non-technical users complete enrol → endorse unaided in ≤ 10 min | NFR-022 | **Manual — not run** (n ≥ 200 per launch locale) |
| TC-3251 | System Usability Scale ≥ 75 | NFR-022 | **Manual — not run** |
| TC-3252 | Support-contact rate ≤ 5% of enrolments | NFR-022 | **Manual — not run** |
| TC-3253 | Doc 01 §B end-to-end citizen journey walkthrough | BR-007 | **Manual — not run** |

---

## 6. Coverage checklist (Doc 07 template §3)

| Check | Verdict |
|---|---|
| Every Must FR has ≥ 1 functional case | **Yes** — all 54 Must FRs have at least one `TC`. The 12 new Must FRs (FR-062..073) are covered by TC-3300..TC-3342 in `TS-CR1`; all are Blocked (capabilities not yet implemented in this drop). The original 14 Blocked/No-mechanism cases are unchanged. |
| Every NFR has a measuring case | **Yes for all 26** — but 22 of the 26 measuring cases cannot execute today. |
| Every SDD §11 failure mode has a negative/edge case | **Yes** — all 26 §11 rows map to a `TS-EDGE` or `TS-ADV` case (TC-1001…TC-1048, TC-2600…TC-2752). |
| Boundary values covered (min, max, just-over, empty, null) | **Yes** — exact tie (TC-1028), 999/1000 anonymity (TC-1950/1953), tenure ±1 s (TC-1031), ±5% drift (TC-1012), 5-source minimum (TC-1013), 100% overshoot (TC-0025). |
| Error & timeout paths covered | **Partial** — every contract custom error is provoked by name; network/timeout paths need an environment (Blocked). |
| Idempotency / retry / concurrency covered | **Partial** — TC-1047 (duplicate log), TC-1033 (execution retry) is Blocked, TC-2382 (exactly-once offline submit) is Blocked. |
| Security: authN, authZ/IDOR, injection, encryption | **Partial** — negative-authority and capability-absence are strong (TC-1600–1614, TC-1850–1861); penetration test not run (TC-1863). |
| Accessibility: automated scan + screen-reader/focus | **No** — TC-2250/2251/2252/2255 all Blocked or Manual-not-run. Two component-level cases exist and were not executed. |
| Rollback / kill-switch covered | **Partial** — the kill-switch *blast radius* is partly pinned (TC-1610, TC-2751); the rollback drill (TC-2425) and the open-ballot freeze (TC-2426) are not. |

---

## 7. Test data management

- **No real personal data in any environment, including a developer laptop** (CON-002, Doc 04 §11).
  All identities in every suite are synthetic and generated deterministically from a fixed seed.
- **Fixtures.** `packages/contracts/test/fixture.mjs` deploys the whole protocol in-process per test
  (a fresh `Chain` per test — Doc 04 does not rely on snapshot/revert for isolation).
  `packages/contracts/test/support/` holds the shared builders.
- **Determinism.** Fixed genesis timestamp, deterministic accounts, no wall clock, no randomness
  (Doc 06 §2.6). Time is advanced with `Chain.warp()`; assertions are on **timestamp**, never block
  number.
- **Generation.** Population, region and membership fixtures are generated from the ranges in
  `packages/protocol/src/constants.js`, so a change to a governance constant changes the fixtures
  rather than silently invalidating them.
- **Refresh.** Fixtures are rebuilt on every run; there is no persisted test database to drift.
- **Masking.** Not applicable — there is nothing to mask, which is the point of `FR-003`/`NFR-010`.

---

## 8. Automation mapping (case → implementing test)

| Package / app | File(s) | `UT` range | Cases mapped | Executed this session |
|---|---|---|---|---|
| `packages/protocol` | `test/governance.test.js`, `test/party-and-regions.test.js` | UT-0001…UT-0055 | 38 | **Yes — 82/82 pass** |
| `packages/contracts` | `test/lifecycle.test.mjs` | UT-0100…UT-0125 | 21 | No — inherited (Doc 06) |
| `packages/contracts` | `test/governance.test.mjs` | UT-0200…UT-0230 | 10 | No — inherited |
| `packages/contracts` | `test/adversarial.test.mjs` | UT-0300…UT-0361 | 27 | No — inherited |
| `packages/contracts` | `test/differential.test.mjs` | UT-0400…UT-0420 | 6 | No — inherited |
| `packages/contracts` | `test/deployment-safety.test.mjs` | UT-0600…UT-0612 | 6 | No — inherited (**absent from the Doc 06 §3 inventory — TD-07-01**) |
| `apps/web` | `test/safety-surfaces.test.tsx` | UT-0700…UT-0742 | 10 | No — not executed (**absent from the Doc 06 §3 inventory — TD-07-01**) |
| `services/indexer` | `test/projection.test.js` | UT-0500…UT-0525 | 12 | **Yes — 16/16 pass** |
| `packages/sdk` | 8 files | UT-2500…UT-2623 | 13 | **Yes — 124/124 pass** |
| `packages/ui` | `test/PrivacyStatus.test.tsx` | UT-0750…UT-0758 | 7 | **Yes — 14/14 pass** (2026-08-25) |
| `packages/sdk` | `test/seams.test.js` | UT-0760…UT-0779 | 9 | **Yes — 36/36 pass** (sdk total 160/160; 2026-08-25) |
| `packages/protocol` | `test/party-creation.test.js` | UT-0060…UT-0086 | 27 | **No — inherited from Doc 06 v2.2.0 Approved** (44 tests, all green) |
| `packages/sdk` | `test/party-creation.test.js` | UT-0780…UT-0818, UT-0831 | 29 | **Inherited from Doc 06 v2.3.2 Approved** (38 tests, all green); file observed 38/38 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/party-creation.test.tsx` | UT-0841…UT-0857 | 28 | **No — inherited from Doc 06 v2.2.0 Approved** (27 tests, all green) |
| `packages/sdk` | `test/membership.test.js` | UT-0819…UT-0830 | 12 | **Inherited from Doc 06 v2.3.2 Approved** (22 tests, all green); file observed 22/22 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/join-membership.test.tsx` | UT-0858…UT-0870 | 13 | **Inherited from Doc 06 v2.3.2 Approved** (27 tests, all green); file observed 27/27 in the 2026-08-29 full-suite run (R-12) |
| `apps/web` | `test/sdk-types-sync.test.ts` | UT-0871 | 1 | **Inherited from Doc 06 v2.3.2 Approved** (1 test, green); file observed 1/1 in the 2026-08-29 full-suite run (R-12) |
| `packages/circuits` | — | UT-2000…UT-2499 (reserved) | 0 | **No suite exists — circuits uncompiled** |

**Orphan check (v2.2.1 — re-run after 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01 rework).** The cycle-1 review found UT-0753 (`packages/ui/test/PrivacyStatus.test.tsx` — accessible-name check) was a material orphan: it executed in the 14/14 UI run but had no TC mapping. TC-3488 is added in this rework (v2.2.1) to close that gap. **Sweep result (UT-0750..0758 and UT-0760..0779):** after TC-3488 maps UT-0753, all UTs in UT-0750..0758 are covered: UT-0750→TC-3470, UT-0751→TC-3471, UT-0752→TC-3472, UT-0753→TC-3488, UT-0754/0755/0756→TC-3473, UT-0757→TC-3474, UT-0758→TC-3475. All UTs in UT-0760..0779 are covered by TC-3477..TC-3486 as a group (9 TCs, 36 seam tests). **Material orphan count after TC-3488: 0.**

**Orphan check (v2.3.0 — join/membership drop).** Sweep over the drop's full UT set. Every one is mapped: UT-0819→TC-3517, UT-0820→TC-3518, UT-0821→TC-3523, UT-0822→TC-3524, UT-0823→TC-3521, UT-0824→TC-3526, UT-0825→TC-3528, UT-0826→TC-3530, UT-0827→TC-3531, UT-0828→TC-3532, UT-0829→TC-3536, UT-0830→TC-3532, UT-0831→TC-3539, UT-0858→TC-3519, UT-0859→TC-3525, UT-0860→TC-3522, UT-0861→TC-3527, UT-0862→TC-3529, UT-0863→TC-3533, UT-0864→TC-3534, UT-0865→TC-3533, UT-0866→TC-3520, UT-0867→TC-3537, UT-0868→TC-3538, UT-0869→TC-3535, UT-0870→TC-3538, UT-0871→TC-3540. **Material orphan count for the join/membership drop: 0.** Every UT id above was read in its test file and its assertions checked against the TC text — none was taken from a summary. No `TC` in this document cites a `UT-####` that does not exist in the repository; every `UT` cited above was located by identifier in a real test file. Conversely, the `UT` inventory in Doc 06 §3 omits two real ranges — recorded as TD-07-01, not silently absorbed.

---

## 9. Execution log

| Run | Date | Build / commit ref | Suite | Result | Defects raised |
|---|---|---|---|---|---|
| R-01 | 2026-08-09 | trunk `claude/decentralized-political-party-fy8b1k` | `packages/protocol` (L0) | **82 / 82 pass**, 494 ms | none |
| R-02 | 2026-08-09 | same | `services/indexer` | **16 / 16 pass**, 467 ms | none |
| R-03 | 2026-08-09 | same | `packages/sdk` | **124 / 124 pass**, 2.35 s | none |
| R-04 | 2026-08-25 | trunk `design/formalize-design-system` | `packages/ui` | **14 / 14 pass** | none |
| R-05 | 2026-08-25 | same | `packages/sdk` | **160 / 160 pass** (124 existing + 36 new seam tests) | none |
| R-06 | 2026-08-25 | Doc 06 v2.2.0 Approved | `packages/protocol/test/party-creation.test.js` | **44 / 44 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-07 | 2026-08-25 | Doc 06 v2.2.0 Approved | `packages/sdk/test/party-creation.test.js` | **37 / 37 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-08 | 2026-08-25 | Doc 06 v2.2.0 Approved | `apps/web/test/party-creation.test.tsx` | **27 / 27 pass** — not executed this session; inherited from Doc 06 v2.2.0 Approved (all green) | — |
| R-09 | 2026-08-29 | Doc 06 v2.3.2 Approved (f70292a) | `packages/sdk/test/membership.test.js` | **22 / 22 pass** — observed in the full-suite run (R-12); TC status recorded Pass (inh.) against the Doc 06 pin | none |
| R-10 | 2026-08-29 | same | `apps/web/test/join-membership.test.tsx` | **27 / 27 pass** — observed in R-12 | none |
| R-11 | 2026-08-29 | same | `apps/web/test/sdk-types-sync.test.ts` (UT-0871 shim guard) | **1 / 1 pass** — observed in R-12 | none |
| **R-12** | 2026-08-29 | same | **whole repository — `npm test` from the repo root** | **542 / 542 pass, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71. Run by the tester while performing the Doc 06 v2.3.2 cycle-3 document review; dep-guard clean; `tsc --noEmit` exit 0 in `apps/web` and `packages/ui` | none |
| — | 2026-08-09 | same | `packages/contracts` (L1/L2/L3) | **not executed this session** (~5 min); result inherited from Doc 06 §3/§5 | — |
| — | 2026-08-09 | same | `apps/web` (non-party-creation suite) | **not executed this session** | — |
| — | — | — | `packages/circuits` (L4) | **no suite — circuits not compiled** | Blocked by Phase-2 ceremonies |
| — | — | — | every environment-dependent suite (`TS-PERF`, `TS-LOAD`, `TS-COST`, `TS-RES`, `TS-EXIT`, `TS-SMOKE`, `TS-ADV-08/09/11`) | **not run — no devnet, testnet or staging exists** | — |

**Prior defects, closed.** Doc 06 §5 records four defects found by the Doc 04 review of this code
drop — two Critical, two High — all fixed with a named regression test. Those regression tests are
carried here as first-class cases: TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641
(`UT-0109c`), TC-1610 (`UT-0360/0361`). **A regression test whose case is not in the suite is a
defect waiting to come back.**

---

## 10. Exit summary

| Measure | Value |
|---|---|
| Cases designed | **442** (row-anchor count; see §2 convention note for the 449 expanded total) |
| Cases with an implementing automated test | **211** (48%) — TS-CR1 and TS-GOV2 add zero automated tests; TS-SCAFFOLD adds 16 (R-04/R-05; TC-3488 added v2.2.1); TS-PARTY adds 28 (R-06/R-07/R-08; inherited from Doc 06 v2.2.0 Approved); TS-MEMBERSHIP adds 24 (R-09..R-12; inherited from Doc 06 v2.3.2 Approved, files observed green in R-12) |
| Cases executed and observed passing this session | **88** (72 from 2026-08-09 + 16 from TS-SCAFFOLD on 2026-08-25; TC-3488 maps UT-0753 already in the 14/14 run). TS-PARTY and TS-MEMBERSHIP are **not** counted here — see the §2 corroboration note: their files were observed green in R-12 (2026-08-29, 542/542) but their status is held at Pass (inh.) against the Doc 06 pin. |
| Cases inherited green from Doc 06 (contract suite, party-creation and membership suites) | **107** (55 from Doc 06 contract suite + 28 from TS-PARTY Doc 06 v2.2.0 Approved + 24 from TS-MEMBERSHIP Doc 06 v2.3.2 Approved) |
| Cases automated but not executed this session (`apps/web` non-party-creation suite) | **16** |
| Cases **Blocked** (code, circuit, environment or instrument absent) | **175** (140 pre-TS-GOV2 + 32 from TS-GOV2 + 3 from TS-SCAFFOLD: TC-3476 enrolment disclosure affordance, TC-3481 FR-131 clause (d) notice — **now partially delivered at the parties-directory surface (TC-3534) but still Blocked for the SCR-13/SCR-14 ballot surfaces**, TC-3487 audit-contract publication). TS-MEMBERSHIP adds **0** Blocked cases. |
| Cases **No mechanism** (the product has nothing to test) | **48** (10 pre-TS-GOV2 + 38 new from TS-GOV2: FR-074..FR-111 have no DES; Doc 03 §16 deliberate phasing) |
| Cases **Manual — not run** | **12** |
| Observed test failures | **0** |
| Open defects raised by this document | **2** (TD-07-01 Medium, TD-07-02 Low — both documentation) |

**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 187-case 'implementing automated test' count and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 187 (automated) + 171 (Blocked-only, i.e. 175 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 418.** Equivalently: 187 + 175 + 48 + 12 − 4 = 418.

**Forty-eight cases are "No mechanism". Each one is a requirement defect, not a testing defect**, and each
is carried into the RTM gap log (Doc 08 §7). The original 10 (pre-TS-GOV2): TC-0010/TC-1041 (`FR-010` name-collision), TC-0037/
TC-1043 (`FR-008` residency cooldown), TC-1042 (`FR-018` dwell period), TC-1044 (`FR-023` churn
limit), TC-0039/TC-2721 (`FR-056` filtering register), TC-2601 (`FR-001` cross-type residual),
TC-2642 (`FR-004` per-region attestor cap, OPEN-02), TC-2715 (`FR-009` source independence,
OPEN-12), TC-2426 (`NFR-020` open-ballot flag freeze, OPEN-03). The 38 new TS-GOV2 cases (TC-3400..TC-3437) cover FR-074..FR-111 — no DES has been assigned to any of these requirements (Doc 03 §16 deliberate next-increment phasing); there is nothing to test until the design is produced.

**What a green run of the executable subset does establish** (Doc 04 §5.5): the governance
arithmetic is right, the reference implementation and the chain agree, the named capabilities are
absent from the named surfaces, and the four defects Doc 04 found stay fixed. **What it does not
establish:** that a proof is sound, that a vote is receipt-free, that a member cannot be
de-anonymised, that the product is usable on a cheap phone, or that any of it survives contact with
a production environment. This document does not let a green check imply more than it earns.

---

## 11. Traceability

Every `TC` above names the `US` and the `FR`/`NFR` it verifies. The forward and backward chains —
`BR → FR/NFR → DES (+ADR) → SCR → EP/FE/US → UT/TC → Status` — are closed and audited in
**Doc 08, the RTM**. Doc 08 is the gate-blocking artifact; this document is its evidence base.

**Read Doc 08 before drawing any conclusion about Gate 2 from the pass counts above.** A high pass
rate over an executable subset is not coverage of the requirement set, and Doc 08 says so in
numbers.

---
### Downstream
Pass/fail rolls into release readiness (Doc 04 §10.2, Docs 09–10) and the RTM (Doc 08).
`reviewer-qa` independently verifies the RTM and signs the merge; the tester does not.


---

## 5.2 `TS-CR1` — CR-v1.1.0 cases: FR-062..073 (TC-3300–TC-3342)

**Context.** These 43 cases derive from the twelve new Must FRs introduced by the CR-v1.1.0 nine-requirement change request (Doc 02 v1.1.0) and their corresponding DES elements (DES-064..072, Doc 03 v1.1.0). **None of the underlying capabilities exists in deployed code in this Phase-1 drop.** Every case is Blocked with the phase and reason stated per row, consistent with the §0.1 vocabulary. The two approver-mandated composition cases are marked **[MANDATED]** in their titles.

**Shared preconditions.** Same fixture infrastructure as §3.1. Feature flags `participation_profile`, `single_party_membership`, `candidate_feedback`, `elections`, `debates`, `recovery` all off above dev (Doc 03 §15; DES-064..072 designed, not shipped).

### TC-3300..TC-3302 — FR-062 public participation profile (DES-064 · US-0071 · SCR-21)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3300 | Participation profile loads all five field groups: elections participated in (no direction), party memberships, endorsed petitions, authored proposals, attended debates | US-0071 · FR-062 | All five field groups present; ballot direction absent from every record | **Blocked — OI-13 unresolved; participation_profile flag off above dev (DES-064)** |
| TC-3301 | Profile for a contested-ballot voter reveals no ballot direction | US-0071 · FR-062, FR-063 | No direction field or inferred direction signal in any profile view | **Blocked — OI-13 unresolved (DES-064)** |
| TC-3302 | Elected representative office-capacity vote publicly attributed on their profile (FR-048 exception) | US-0071 · FR-062, FR-048 | Direction visible only for office-capacity votes; ordinary member ballot directions hidden | **Blocked — Phase 3 (Elections not implemented; DES-067 not shipped)** |

### TC-3303..TC-3306 — FR-063 ballot-direction MUST-NOT prohibition (DES-064 · US-0072)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3303 | Ballot direction not reachable through any client surface — consistent with UT-0700 | US-0072 · FR-063 | No ballot-direction field in any client-accessible endpoint or rendered view | **Not run** — apps/web · UT-0700 exists; suite not executed this session |
| TC-3304 | Ballot direction absent from any public-record export — consistent with UT-0701 | US-0072 · FR-063 | No ballot-direction field in any event log, export or indexed record | **Not run** — apps/web · UT-0701 exists; suite not executed this session |
| TC-3305 | Ballot direction not inferrable from any combination of public data (profile views, public records, derived datasets) | US-0072 · FR-063 | Adversarial union of all public fields yields no directional signal per the MUST-NOT prohibition | **Blocked — G-UI/G-PHASE3: full no-inference audit requires a deployed system with real ballots** |
| TC-3306 | Elected office-holder office-capacity vote is the sole permitted ballot-direction disclosure (FR-048 exception boundary) | US-0072 · FR-063, FR-048 | Office-capacity vote direction attributable; all ordinary member ballot directions hidden; boundary enforced | **Blocked — Phase 3 (Elections not implemented; exception boundary requires office-holder state)** |

### TC-3307..TC-3309 — FR-064 single party membership constraint (DES-065 · US-0073)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3307 | Joining party B voids party A membership automatically; tenure clock resets to zero | US-0073 · FR-064 | Party A membership-scope nullifier revoked; party B active; tenure = 0 | **Blocked — Phase 3 (DES-065 global membership-scope nullifier not yet coded)** |
| TC-3308 | Simultaneous membership in two parties via any mechanism (same session, different device, different address) fails | US-0073 · FR-064 | No dual-membership state; every bypass path rejected | **Blocked — Phase 3 (DES-065 not coded)** |
| TC-3309 | **[MANDATED (a)]** Leave party A, join party B, attempt to vote in party B before one month elapses: vote rejected as tenure not yet met; FR-068 waiver is inapplicable because the tenure clock reset to 0 on party switch | US-0073, US-0078 · FR-064, FR-068 | Join-B sets tenure = 0; vote at day 15 rejected with tenure-not-met; FR-068 waiver does NOT apply — DES-068 (Doc 03 v1.1.1) explicitly excludes party-switchers: a tenure clock reset by a party switch is not excused by the destination party's waiver; rejection holds unconditionally regardless of party B's age | **Blocked — Phase 3 (DES-065 + DES-068; cross-FR interaction; no implementing code in this drop)** |

### TC-3310..TC-3312 — FR-068 tenure waiver for new parties (DES-068 · US-0078)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3310 | Member who joined before party activation votes in the party first 3 calendar months; waiver applies; vote accepted without one-month tenure | US-0078 · FR-068 | Vote accepted; newPartyWaiverActive(partyId) = true; one-month tenure check bypassed | **Blocked — Phase 3 (DES-068 not coded)** |
| TC-3311 | **[MANDATED (b)]** Growth surge of 10,000 new members in month 2 while waiver is active; snapshot mechanism (FR-028) and churn-rate limits (FR-023) raise the quorum bar identically to a non-waivered party; UT-0220 growth-surge defence confirmed active | US-0078 · FR-068, FR-023, FR-028 | newPartyWaiverActive = true; proposal snapshot locked; surge-adjusted quorum bar raised per UT-0220 logic; waiver touches ONLY the tenure check, never anti-capture parameters | **Blocked — Phase 3 (DES-068 + DES-014/DES-019 anti-capture interaction; no cross-contract integration test in this drop)** |
| TC-3312 | Anti-capture controls (FR-023 churn limit, FR-028 eligibility snapshot) remain fully enforced while new-party tenure waiver is active | US-0078 · FR-068, FR-023, FR-028 | Waiver relaxes only the one-month tenure check; churn limits and snapshot eligibility rules apply identically to waivered and non-waivered parties | **Blocked — Phase 3** |

### TC-3313..TC-3316 — FR-065 candidate feedback scoring (DES-066 · US-0074, US-0075 · SCR-23)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3313 | Upvote on candidate C in election E: tally +3; scope nullifier keccak(feedback, electionId, candidateId) spent | US-0074 · FR-065 | Tally += 3; nullifier spent; member cannot cast another feedback vote on C in E | **Blocked — Phase 3 (DES-066 not implemented; Elections Phase 3, Doc 06 §7.3)** |
| TC-3314 | Downvote on candidate C in election E: tally -1; same nullifier spent | US-0074 · FR-065 | Tally -= 1; nullifier spent | **Blocked — Phase 3** |
| TC-3315 | Second feedback vote on same candidate C in same election E: nullifier already spent; attempt refused | US-0074 · FR-065 | Attempt refused; first vote unchanged | **Blocked — Phase 3** |
| TC-3316 | Individual feedback votes not linkable to caster; only aggregate tally publicly visible | US-0075 · FR-065 | No per-member vote record in public output; tally integer only | **Blocked — Phase 3** |

### TC-3317..TC-3322 — FR-066, FR-067 mandatory debates and candidacy (DES-067 · US-0076, US-0077 · SCR-22)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3317 | Three debates scheduled per candidate before major election; each covers one required topic (local conditions, local problems, work required) | US-0076 · FR-066 | Three debate records with distinct topic codes on verifiable record | **Blocked — Phase 3 (DES-067 debate lifecycle not implemented; Elections Phase 3)** |
| TC-3318 | Debate completion: attendance attestation and content CID recorded on-chain; off-chain pin loss does not erase on-chain attestation | US-0076 · FR-066 | On-chain CID and attestation present; record survives content-host failure | **Blocked — Phase 3** |
| TC-3319 | Candidate absence from scheduled debate recorded in their participation record | US-0076 · FR-066 | Absence entry present; no silent skip | **Blocked — Phase 3** |
| TC-3320 | Only net-positive post-debate member-vote candidates advance to the election ballot | US-0077 · FR-067 | Non-positive-score candidate excluded; on-chain guard rejects inclusion | **Blocked — Phase 3** |
| TC-3321 | Sitting incumbent receives no automatic candidacy; must complete full debate-and-post-debate-vote cycle | US-0077 · FR-067 | Incumbent not placed on ballot without completed cycle; no privileged path | **Blocked — Phase 3** |
| TC-3322 | Attempt to place incumbent on ballot without completed debate cycle: refused and logged | US-0077 · FR-067 | On-chain guard refuses; event logged with candidate ID and reason | **Blocked — Phase 3** |

### TC-3323..TC-3325 — FR-069 deterministic enrolment nullifier (DES-069 · US-0079)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3323 | First enrolment: Poseidon(stable_id_secret, enrolment_scope) derived in-circuit; five universal checks pass (issuer sig, freshness, region, correct derivation, trust-anchor hash: publicSignals[4] ≡ issuers[issuerId].trustAnchorHash per SC-01); only nullifier stored; identifier never leaves the circuit | US-0079 · FR-069 | Nullifier on record; no identifier in any store; all five in-circuit checks verified (including on-chain trust-anchor hash binding per DES-069 / SC-01) | **Blocked — Phase 2 (DES-069; personhood_enrol circuit not compiled, Doc 06 §7.2)** |
| TC-3324 | Same credential re-used in second enrolment: derived nullifier matches existing record; enrolment rejected as duplicate | US-0079 · FR-069 | Refused with duplicate-nullifier reason; first record intact; no second identity | **Blocked — Phase 2** |
| TC-3325 | Credential with tampered region attribute: in-circuit region check fails; rejected with region-attribute-invalid reason | US-0079 · FR-069 | Rejected; correct reason returned; no partial record created | **Blocked — Phase 2** |

### TC-3326..TC-3329 — FR-070 pluggable credential adapter (DES-070 · US-0080)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3326 | eIDAS 2.0 wallet adapter: QeAA trust-anchor signature verified vs national/supra-national trust list; stable personal identifier and residency attribute extracted and passed to FR-069 derivation | US-0080 · FR-070 | Adapter verifies QeAA; (stable_id, region) tuple passed to derivation; nullifier minted | **Blocked — Phase 2 (DES-070; circuit and adapter infrastructure not deployed)** |
| TC-3327 | ICAO Doc 9303 NFC chip adapter: Document Security Object verified vs ICAO public key directory; stable identifier (MRZ DocumentNumber or chip pseudonym) and attested residency extracted | US-0080 · FR-070 | Adapter verifies SOD; (stable_id, residency) passed to derivation; nullifier minted | **Blocked — Phase 2** |
| TC-3328 | Offline paper KYC adapter (e.g. Aadhaar offline XML or equivalent): government-signed assertion verified; stable identifier and residency extracted; no biometric retained after attestor check | US-0080 · FR-070 | Assertion processed; no biometric in any store; nullifier minted | **Blocked — Phase 2** |
| TC-3329 | Adapter interface enforces pluggable pattern: no single credential type hard-coded; region-level config governs adapter selection | US-0080 · FR-070 | ICredentialAdapter interface prevents bypass; region config governs | **Blocked — Phase 2** |

### TC-3330..TC-3332 — FR-073 government eID issuer hierarchy (DES-072 · US-0083)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3330 | Government eID credential in designated region: enrolment nullifier minted; record accepted | US-0083 · FR-073 | credentialClass == GOV_EID passes; nullifier minted and accepted | **Blocked — Phase 2 (DES-072; PersonhoodRegistry issuer-class enforcement not deployed)** |
| TC-3331 | Availability-only credential class attempts enrolment: no nullifier minted; refused with NotEnrolmentClass | US-0083 · FR-073, FR-069 | Revert NotEnrolmentClass; no nullifier created; event logged | **Blocked — Phase 2 (DES-072)** |
| TC-3332 | Availability-only credential used for liveness attestation only: no enrolment nullifier; no membership or governance rights granted | US-0083 · FR-073 | Liveness confirmed; no enrolment record; no party membership; no governance power | **Blocked — Phase 2 (DES-072)** |

### TC-3333..TC-3339 — FR-071, FR-072 nullifier-collision recovery and delay/veto guard (DES-071 · US-0081, US-0082)

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3333 | Nullifier collision on second enrolment: system routes to RECOVERY_PENDING state; does not reject as duplicate | US-0081 · FR-071 | State = RECOVERY_PENDING; user prompted for re-authentication | **Blocked — Phase 3 (DES-071 recovery state machine not implemented, Doc 06 §7.3)** |
| TC-3334 | Recovery completes: state to KEY_ROTATED; membership, tenure and governance history survive intact; no second identity | US-0081 · FR-071 | Same nullifier; tenure unchanged; history intact; no additional nullifier entry | **Blocked — Phase 3** |
| TC-3335 | Seven-day delay imposed before key rotation: KEY_ROTATED not reachable before delay elapses | US-0082 · FR-072 | rotationEffectiveAt = block.timestamp + 7 days; transition blocked | **Blocked — Phase 3** |
| TC-3336 | Active-key veto window equals the full seven-day delay; veto accepted throughout the entire window (veto window >= delay) | US-0082 · FR-072 | Veto at day 6 of 7-day delay results in RECOVERY_ABORTED; veto threshold = delay threshold | **Blocked — Phase 3** |
| TC-3337 | Recovering credential barred from casting any vote during the delay (isInRecovery check in vote()) | US-0082 · FR-072 | vote() reverts for recovering nullifier while state = RECOVERY_PENDING; active key votes normally | **Blocked — Phase 3** |
| TC-3338 | Notification sent to registered channel at recovery initiation | US-0082 · FR-072 | Notification event emitted on-chain at RECOVERY_PENDING entry | **Blocked — Phase 3** |
| TC-3339 | Active-key holder submits veto during delay: recovery aborted; existing key in full control | US-0082 · FR-072 | State to RECOVERY_ABORTED; original key operational; rotation cancelled | **Blocked — Phase 3** |

### TC-3340..TC-3342 — ADV-17..19 · RISK-22, RISK-23, RISK-24 recovery attack scenarios

| TC | Suite / RISK | Attack | Expected | Status |
|---|---|---|---|---|
| TC-3340 | ADV-17 · RISK-22 | Stolen credential: attacker initiates recovery to seize victim party membership; victim vetoes via on-chain active-key path within 7-day window | State to RECOVERY_ABORTED; victim key and membership preserved | **Blocked — Phase 3 (DES-071 not implemented)** |
| TC-3341 | ADV-18 · RISK-23 | Attacker suppresses victim notification channel; victim retains independent on-chain veto path via active key (no channel dependency) | On-chain veto succeeds even with channel suppressed; RECOVERY_ABORTED; accepted residual = complete device + channel compromise | **Blocked — Phase 3** |
| TC-3342 | ADV-19 · RISK-24 | Attacker initiates recovery during active ballot; recovering credential attempts to vote; isInRecovery(nullifier) in vote() blocks it; active key votes normally | Recovering credential vote() reverts; active-key vote proceeds; no double-counting; FR-032 last-valid-ballot rule applies | **Blocked — Phase 3** |

### TC-3343..TC-3345 — SC-01 trust-anchor binding negative cases (DES-069 · DES-070 · FR-069, FR-070)

**Context.** Doc 03 v1.1.2 (SC-01 fix) requires: (1) `trustAnchorHash` as the fifth public signal
in every enrolment proof, checked on-chain against `issuers[issuerId].trustAnchorHash`; (2) per-adapter-class
verifier dispatch via `issuers[issuerId].verifierAddress`. These three cases verify rejection of attack paths
identified in the security scan (SECURITY-SCAN-CR-v1.1.0-2026-08-10 §1 SC-01).

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3343 | **[SC-01 attack path A]** Enrolment proof carries a `trustAnchorHash` value that does not match `issuers[issuerId].trustAnchorHash`; prover substitutes an attacker-chosen key | US-0079 · FR-069 | `enrol()` reverts: `publicSignals[4] != issuers[issuerId].trustAnchorHash` check fails on-chain; no nullifier minted; no identity registered | **Blocked — Phase 2 (DES-069; personhood_enrol_[class] circuit not compiled; no on-chain contract in this drop)** |
| TC-3344 | **[SC-01 attack path B]** Proof generated for adapter class X (e.g. ICAO Doc 9303) submitted under an `issuerId` whose `credentialClass` is class Z (e.g. eIDAS 2.0); `verifierAddress` routes proof to class Z verifier | US-0080 · FR-070 | `enrol()` dispatches via `issuers[issuerId].verifierAddress`; proof generated for class X fails verification under class Z verifier; enrolment rejected; no nullifier minted | **Blocked — Phase 2 (DES-070; per-adapter-class verifier dispatch not deployed in this drop)** |
| TC-3345 | **[SC-01 arity]** Legacy 4-signal enrolment proof `[Nᵢ, C, issuerId, namespaceId]` submitted to upgraded `enrol()` expecting five signals; `publicSignals[4]` is absent or zero | US-0079 · FR-069 | `enrol()` reverts on arity mismatch or `trustAnchorHash` check against zero/missing fifth signal; proof rejected; no nullifier minted; consistent with C-03 arity discipline | **Blocked — Phase 2 (DES-069; no circuit or contract in this drop)** |

---

## 5. Governance v2.0 suite

### 5.1 `TS-GOV2` — FR-074..FR-120 · NFR-027/028 · SC-15..SC-21 · Guarded Layer properties · FR-117 capability-absence (TC-3400–TC-3469)

**Context.** This suite covers all requirements introduced in SRS v2.2.0 (Vision re-entry, Gate 1 re-entry 2026-08-11) and the security-closure rescan findings SC-15..SC-21 (SECURITY-RESCAN-SC15-21-2026-08-11.md). The trust-anchor lifecycle (FR-112/113, DES-090), StewardRegistry (FR-114, DES-088), steward powers boundary (FR-115..117, DES-089), ProtocolGovernance / GovernanceConstants (FR-118/119, DES-087/DES-091), and citizen fallback (DES-092) are all designed but **not deployed in this drop**. The 38 requirements FR-074..FR-111 have **no DES yet** (Doc 03 §16 records this as deliberate phasing — the chain link `FR → DES` is broken by design, not by error). **Nothing in this suite may be marked Pass.**

**Shared precondition.** `governance_v2` flag OFF. ProtocolGovernance, StewardRegistry, GovernanceConstants, TrustAnchorLifecycle contracts are not deployed. No Phase-3 capability is active above dev in this drop.

---

#### TC-3400..TC-3437 — FR-074..FR-111 (no DES assigned — Doc 03 §16 deliberate phasing)

Each row status: **No mechanism** — the FR has no DES in Doc 03 §5.2 (deliberate; see §16), and no implementation exists in this drop. The G-TRACE + G-PHASE3 gap is recorded in Doc 08 §3.1 and §7.

| TC | Title | Verifies (US · FR) | Expected result | Status |
|---|---|---|---|---|
| TC-3400 | Country selection scopes party-political participation to exactly one jurisdiction | US-0084 · FR-074 | Exactly one country record accepted; second country refused; region tree and all residency-derived rights scoped to selection; change governed by FR-008 discipline | **No mechanism** — country-selection module and per-country eligibility rules not designed (Doc 03 §16) |
| TC-3401 | Platform activation displayed as distinct from legal registration on every party-facing surface | US-0085 · FR-075 | Every party-facing surface states the distinction; no surface represents activation as legal registration; distinction displayed before any party action | **No mechanism** — legal-registration-status attestation and display surface not designed (Doc 03 §16) |
| TC-3402 | Party creation refused when any mandatory constitution section is missing; every missing section named | US-0086 · FR-076 | Publication refused; every missing section named; no partial party record created; follows FR-011 pattern | **No mechanism** — digital constitution upload and machine-checkable section validation not designed (Doc 03 §16) |
| TC-3403 | Non-violence clause verified by code; publication refused if absent or altered | US-0087 · FR-077 | Non-violence clause present and byte-identical to platform standard; alteration refused at submission; no human judgment in path | **No mechanism** — non-violence clause verifier not designed (Doc 03 §16) |
| TC-3404 | Party constitution amendable only through tiered proposal process; direct overwrite refused | US-0088 · FR-078 | Amendment accepted only via FR-025/FR-026 tiered process; direct overwrite reverts; entrenchment per FR-027 honoured | **No mechanism** — constitution-amendment integration not designed (Doc 03 §16) |
| TC-3405 | Exactly three participation tiers (Supporter, Worker, Candidate); none changes voting weight | US-0089 · FR-079 | Tier set on join; weight unchanged at all tiers; no tier carries extra vote, standing, or precedence | **No mechanism** — participation tier metadata model not designed (Doc 03 §16) |
| TC-3406 | Worker declaration accepted with no human approval; informed-consent event recorded append-only | US-0090 · FR-080 | Worker tier set without approval; consent event appended with timestamp; no approval path exists | **No mechanism** — Worker self-declaration and consent recording not designed (Doc 03 §16) |
| TC-3407 | Candidate tier determined solely by post-debate member vote; no auto-renomination of incumbents | US-0091 · FR-081 | Candidacy confirmed by vote result only; incumbency confers no automatic advancement; eligibility checked by code | **No mechanism** — candidacy-from-vote flow not designed (Doc 03 §16) |
| TC-3408 | Supporter tier: only nullifier stored; no profile surface; no attributable record; NFR-001/002/024 apply unconditionally | US-0092 · FR-082 | No profile surface for Supporter; no attributable record under any query path; unlinkability invariants hold | **No mechanism** — Supporter-tier anonymity enforcement not designed (Doc 03 §16) |
| TC-3409 | Worker/Candidate public participation record begins from consent event; ballot direction never disclosed for any tier | US-0093 · FR-083 | Role-relevant activity (work, proposals, debates, candidacies, committees) visible from consent event; ballot direction absent from every surface; FR-048 elected-representative exception applies | **No mechanism** — public participation record for public-tier roles not designed (Doc 03 §16) |
| TC-3410 | Full disclosure schedule published before declaration window; no post-declaration demand outside the schedule | US-0094 · FR-084 | Disclosure schedule available before any declaration or nomination window opens; no undeclared information category added after declaration | **No mechanism** — disclosure schedule publication surface not designed (Doc 03 §16) |
| TC-3411 | Informed consent covers full campaign and term; pre-nomination disclosures destroyed on withdrawal (OI-16 adopted) | US-0095 · FR-085 | Consent irrevocable for term; withdrawal before nomination-window close permitted; pre-nomination disclosure data (confidential-class) destroyed on withdrawal; no destruction of public governance records | **No mechanism** — consent lifecycle and confidential-class data destruction not designed (Doc 03 §16) |
| TC-3412 | Prior Supporter-period activity remains anonymous permanently after public role is taken; no linkage path through any data or combination | US-0096 · FR-086 | No linkage between anonymous Supporter identity and subsequent public Worker/Candidate identity detectable through any data the system holds or emits, or through any combination of public outputs | **No mechanism** — cross-tier unlinkability guarantee for role-changers not designed (Doc 03 §16) |
| TC-3413 | Committee output is proposals only; committee cannot directly change election, vote, or membership outcomes | US-0097 · FR-087 | Committee action produces only an ordinary-lifecycle proposal; no direct outcome effect; composition and minutes public | **No mechanism** — committee formation and capability-restriction model not designed (Doc 03 §16) |
| TC-3414 | Committee configuration granting election- or membership-touching capability rejected by code | US-0098 · FR-088 | Configuration rejected at submission; allowlist confined to event organisation, coordination, facilitation, vendor management, publishing | **No mechanism** — committee ABI allowlist and configuration-rejection not designed (Doc 03 §16) |
| TC-3415 | Committee membership expires at term end by code; continuation requires fresh member vote | US-0099 · FR-089 | Term expiry code-enforced; no human renewal path; continuation needs a new vote | **No mechanism** — committee term-expiry mechanics not designed (Doc 03 §16) |
| TC-3416 | Proposal authorship public; competing proposal accepted with equal standing in same decision window (Worker+ per OI-14) | US-0100 · FR-090 | Author identity published; competing proposal in same window; equal standing confirmed; Supporters retain full voting rights | **No mechanism** — competing-proposal equal-standing enforcement not designed (Doc 03 §16) |
| TC-3417 | Proposal advances through all lifecycle stages in sequence by code; no stage skipped or human-vetoed | US-0101 · FR-091 | Stage transitions code-enforced; no skip, reorder, or veto path; review/discussion/debate are deliberative only | **No mechanism** — proposal lifecycle stage machine not designed (Doc 03 §16) |
| TC-3418 | Permanent decision trail reconstructable end-to-end from public data alone; trail includes all competing proposals | US-0102 · FR-092 | Trail contains proposal(s), authorship, deliberation records, vote result, enacted consequence, implementation status, measured outcome; reproducible by any third party | **No mechanism** — permanent decision trail data model not designed (Doc 03 §16) |
| TC-3419 | Candidate selection runs on published code-enforced schedule; unanswered member questions visibly recorded | US-0103 · FR-093 | Nomination, question phase, debates (FR-066), post-debate vote (FR-067), and election on code-enforced clock; unanswered questions recorded as unanswered | **No mechanism** — candidate selection schedule and Q&A public record not designed (Doc 03 §16) |
| TC-3420 | Manifesto is structured and machine-readable; publication refused when any mandatory field is missing | US-0104 · FR-094 | Every sector plan has baseline, target, budget, timeline, method, and named owner; missing field named and publication refused; follows FR-011 pattern | **No mechanism** — structured manifesto schema and publication gate not designed (Doc 03 §16) |
| TC-3421 | Every manifesto commitment has a stable per-commitment ID; status updates are append-only; supersedes FR-046 | US-0105 · FR-095 | Commitment ID stable across versions; status transitions appended; history not rewritten; FR-046 traceability absorbed | **No mechanism** — manifesto commitment ID model and append-only status transitions not designed (Doc 03 §16) |
| TC-3422 | Mechanical anomaly detection flags published on transparency dashboard; flags do not freeze funds or block governance | US-0106 · FR-096 | Velocity, structuring, concentration, round-trip flags published; no fund freeze; no governance action blocked by a flag | **No mechanism** — treasury anomaly detection and transparency dashboard not designed (Doc 03 §16) |
| TC-3423 | Public-tier role-takers file COI disclosure on schedule; overdue disclosure flagged by code on participation record | US-0107 · FR-097 | Disclosure record created; overdue disclosure flagged visibly by code; no human discretion in flagging | **No mechanism** — COI disclosure filing and code-driven flag mechanism not designed (Doc 03 §16) |
| TC-3424 | COI review is investigation-and-recommendation only; no reviewer holds outcome power; recusal voluntary or code-ruled | US-0108 · FR-098 | Sortition-selected reviewers publish findings only; recusal takes effect by voluntary compliance, member vote, or charter code rule; no enforcement outcome from reviewers | **No mechanism** — COI review mechanics (sortition, publication, recusal path) not designed (Doc 03 §16) |
| TC-3425 | Independent internal audit by sortition; read-only access to all records; findings inform only; no enforcement power | US-0109 · FR-099 | Auditors drawn per-case from eligible members; read-only access confirmed; no standing body; reports on published schedule; no enforcement action path | **No mechanism** — sortition audit selection and record-access mechanism not designed (Doc 03 §16) |
| TC-3426 | Dispute stage transitions enforced by code within published maximum timelines; timeline breach recorded on decision trail | US-0110 · FR-100 | Stage transitions within maxima; breach appended to decision trail; no human hold on transitions | **No mechanism** — dispute timeline enforcement not designed (Doc 03 §16) |
| TC-3427 | Per-case appeal/review panels drawn by verifiable sortition from eligible members; no standing panel body; outputs are recommendations | US-0111 · FR-101 | Sortition selection reproducible by third party; no standing body; panel outputs go to member vote or code rules | **No mechanism** — verifiable sortition panel selection not designed (Doc 03 §16) |
| TC-3428 | Machine-readable member-rights charter published; party charter reducing any right below platform floor rejected by code | US-0112 · FR-102 | Rights machine-readable; every right maps to a code-enforced capability; configuration reducing any right below floor rejected | **No mechanism** — member-rights charter schema and floor-enforcement not designed (Doc 03 §16) |
| TC-3429 | Conduct votes use nullifier + privacy mechanics; individual votes private; Supporter-tier conduct vote impossible by construction | US-0113 · FR-103 | Conduct vote uses same nullifier scheme as policy votes; no individual vote revealed; Supporter has no addressable identity — conduct vote is impossible | **No mechanism** — conduct vote mechanics not designed (Doc 03 §16) |
| TC-3430 | Removal requires affirmative active-vote quorum; silence does not remove; subject's statement right honoured; surge defence active | US-0114 · FR-104 | Removal passes only on active-vote quorum at published bar; no removal by default or silence; statement recorded before window closes; FR-023/FR-028 surge defence applies | **No mechanism** — removal vote mechanics not designed (Doc 03 §16) |
| TC-3431 | Expulsion has strictly higher quorum+supermajority than removal; public-tier only (Supporter expulsion impossible); historical records unaltered | US-0115 · FR-105 | Expulsion bar higher than removal; Supporter expulsion impossible by construction (no addressable identity); membership state transitions appended, no overwrite; OI-15 adopted | **No mechanism** — expulsion mechanics not designed (Doc 03 §16) |
| TC-3432 | Every data entity carries exactly one classification (public/restricted/confidential); unclassified entity not storable | US-0116 · FR-106 | Public / restricted / confidential classification enforced at write; unclassified entity rejected; classification governs storage, access, and publication | **No mechanism** — data classification enforcement model not designed (Doc 03 §16) |
| TC-3433 | No hard-delete or overwrite in any governance store; state transitions appended with timestamp and cause; confidential-class carve-out honoured | US-0117 · FR-107 | Delete/overwrite reverts; every transition adds a record; pre-nomination disclosure data (confidential-class per OI-16) never enters the governance record; public records never overwritten | **No mechanism** — append-only governance store for v2.0 entities not designed (Doc 03 §16) |
| TC-3434 | Public verifiable record contains only proofs, timestamps, counts, governance events; no restricted or confidential data in any form | US-0118 · FR-108 | Write of restricted/confidential entity to public chain rejected; chain inspection reveals only permitted classes; CON-002/CON-008/NFR-010 discipline maintained | **No mechanism** — public-record write discipline for v2.0 entities not designed (Doc 03 §16) |
| TC-3435 | Transparency dashboard presents aggregate governance data with anomaly flags; no per-member drill-down | US-0119 · FR-109 | Dashboard shows governance activity, treasury summary with flags, participation aggregates, commitment progress, dispute-timeline compliance; no individual drill-down path exists | **No mechanism** — transparency dashboard aggregation not designed (Doc 03 §16) |
| TC-3436 | Performance scorecard presents commitments vs measured progress factually; no ranking or editorial conclusion | US-0120 · FR-110 | Baselines, targets, evidence links displayed; no party-vs-party ranking; no editorial score or conclusion; methodology published | **No mechanism** — performance scorecard display not designed (Doc 03 §16) |
| TC-3437 | Zero per-user behavioural events in any store or log for any v2.0 surface; UT-0525 and UT-0740 remain green on every release | US-0121 · FR-111 | No per-user click/view/dwell/session event in any log or export; UT-0525 (indexer) and UT-0740 (client beacon) pass on every release; guarantee extended to all v2.0 governance surfaces | **No mechanism** — extension of no-telemetry guarantee to v2.0 surfaces not yet implemented; UT-0525/UT-0740 cover existing surfaces only; new v2.0 surfaces (committee portal, proposal lifecycle, conduct vote UI, dashboard) not yet built (Doc 03 §16) |

---

#### TC-3438..TC-3446 — FR-112..FR-120 (DES assigned — not yet implemented in this drop)

Each row status: **Blocked — Phase 3** — DES assigned in Doc 03 §5.2 (see column), but the implementing contracts (ProtocolGovernance, StewardRegistry, GovernanceConstants, TrustAnchorLifecycle) are not deployed in this drop.

| TC | Title | Verifies (US · FR · DES) | Expected result | Status |
|---|---|---|---|---|
| TC-3438 | Trust-anchor revocation enacted through member vote at highest tier; no operator or unilateral path | US-0122 · FR-112 · DES-090 | Operator EOA call to revoke trust anchor reverts; revocation reachable only through an enacted highest-tier proposal; on enactment, new enrolments against revoked anchor suspended; already-enrolled credentials unaffected unless separately voted | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle contract not deployed in this drop) |
| TC-3439 | After `abortRotation()`, pending anchor rejected for new enrolments; TrustAnchorLifecycle enters ROTATION_ABORTED state; incumbent hash restored | US-0123 · FR-113 · DES-090 | `abortRotation()` sets state ROTATION_ABORTED; enrolment call citing the pending anchor reverts; incumbent anchor hash restored; no retroactive invalidation of existing enrolments | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle state machine not deployed in this drop) |
| TC-3440 | StewardRegistry IMMUTABLE CORE: ABI contains no upgrade proxy, no admin key, no self-destruct, no delegatecall to external address | US-0124 · FR-114 · DES-088 | ABI inspection finds no upgrade/proxy/self-destruct/external-delegatecall surface; CI build-fails on any such addition; SC-15 general rule satisfied for StewardRegistry | **Blocked — Phase 3** (DES-088; StewardRegistry not deployed; CI assertion not yet wired) |
| TC-3441 | Steward powers ABI-allowlisted to exactly four categories; configuration beyond the list rejected by code | US-0125 · FR-115 · DES-089 | ABI allowlist covers: (a) draft/publish proposals, (b) coordinate audits/ceremonies/issuer-onboarding, (c) hold funds/sign vendor contracts, (d) publish operational reports; any additional capability configuration rejected at submission | **Blocked — Phase 3** (DES-089; steward powers ABI allowlist not implemented) |
| TC-3442 | CI assertion build-fails when any new steward-facing function is added outside the ABI allowlist | US-0126 · FR-116 · DES-089 | CI dep-guard assertion triggers build failure on PR if steward ABI allowlist is violated; merge is blocked | **Blocked — Phase 3** (DES-089; CI assertion for steward ABI allowlist not yet wired) |
| TC-3443 | No citizen-path module imports or references any steward-facing symbol from StewardRegistry | US-0127 · FR-117 · DES-089 | Static analysis confirms: no module in enrol, join, endorse, vote, propose, or fork citizen flows imports or calls StewardRegistry by any import path | **Blocked — Phase 3** (DES-089; StewardRegistry and citizen-path dep-guard not implemented) |
| TC-3444 | GovernanceConstants per-constant Amendment Layer enforced; STEWARD_INACTION_WINDOW setter accessible only via `onlyGovernor`; no external setter | US-0128 · FR-118 · DES-087 | Call to `setGovernanceConstant(STEWARD_INACTION_WINDOW, …)` from non-Governor address reverts; constant change requires enacted proposal; each constant classified and floor/ceiling-guarded per DES-091 | **Blocked — Phase 3** (DES-087, DES-091; GovernanceConstants and ProtocolGovernance not deployed) |
| TC-3445 | No bespoke unaudited cryptographic primitive in any governance path; only reviewed standard-library primitives | US-0129 · FR-119 · DES-087 | Code inspection and CI linter confirm zero custom cryptographic functions; all crypto primitives are from reviewed standard libraries (CON-012 discipline) | **Blocked — Phase 3** (DES-087; governance contracts not deployed; bespoke-crypto linter not yet wired to CI) |
| TC-3446 | Fork right entrenched and exercisable regardless of steward action or protocol vote; full lineage preserved | US-0130 · FR-120 · DES-034 | Fork initiation succeeds; complete public history exported; fork right not removable by any proposal, vote, or steward action; entrenched by FR-118 | **Blocked — Phase 3** (DES-034; `fork` flag OFF above dev; FR-053 open critical; Phase-3 only) |

---

#### TC-3447..TC-3448 — NFR-027 and NFR-028

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3447 | Every v2.0 governance surface produces zero per-user behavioural events; UT-0525 and UT-0740 remain green | NFR-027 (BR-017, BR-009) | Zero per-user behavioural events in any store, log, or export for all v2.0 surfaces (committee, proposal lifecycle, conduct vote, transparency dashboard, scorecard); UT-0525 and UT-0740 pass on every release | **Blocked — Phase 3** — UT-0525/UT-0740 cover existing surfaces and remain green; v2.0 governance surfaces not yet built; full guarantee requires all v2.0 surfaces deployed and verified |
| TC-3448 | Zero hard-delete or overwrite operations in any v2.0 governance store; every state transition appended with timestamp and cause; verified by audit inspection | NFR-028 (BR-019, BR-008) | Audit inspection of every v2.0 governance store (committee records, dispute trail, COI disclosures, manifesto commitments, conduct votes) finds 0 hard-delete or overwrite operations; all transitions append-only | **Blocked — Phase 3** — v2.0 governance stores not yet implemented; no audit mechanism exists in this drop |

---

#### TC-3449..TC-3455 — SC-15..SC-21 mandatory security-closure cases

**Context.** Findings SC-15..SC-21 were identified in the directed security scan SECURITY-SCAN-DOC03-V2-2026-08-11.md and all closed by the architect in SECURITY-RESCAN-SC15-21-2026-08-11.md. Each case below verifies the specific closure described in that rescan. All are blocked because the implementing contracts are not deployed in this drop.

| TC | Title | SC finding (severity — status) | Verifies | Expected result | Status |
|---|---|---|---|---|---|
| TC-3449 | **[SC-15 closure]** ProtocolGovernance IMMUTABLE CORE enforced: no competitor governance contract accepted at any routing surface; no upgrade proxy; no admin setter | SC-15 (CRITICAL — CLOSED) | FR-118 · DES-087 | ABI contains no upgrade/proxy/admin-key/self-destruct surface; CI build-fails on any violation; routing surfaces (electSteward, recallSteward, proposeAmendment, publishAuditRef, enact) refuse any externally-supplied governance contract address | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed in this drop) |
| TC-3450 | **[SC-16 closure]** STEWARD_INACTION_WINDOW guarded by `onlyGovernor`; no external setter; constant guarded in both directions by Amendment Layer | SC-16 (HIGH — CLOSED) | US-0129 · FR-119 · DES-091 | `setGovernanceConstant(STEWARD_INACTION_WINDOW, …)` from non-Governor address reverts; `onlyGovernor` modifier present; constant classifiable under Amendment Layer; both floor- and ceiling-guarded | **Blocked — Phase 3** (DES-091, DES-087; GovernanceConstants and ProtocolGovernance not deployed) |
| TC-3451 | **[SC-17 closure]** Citizen fallback for `publishAuditRef` activates after STEWARD_INACTION_WINDOW (60 days) with stewards SEATED but inactive (rescan re-attack #1); vacancy-immediate fallback for `revokeTrustAnchor` | SC-17 (HIGH — CLOSED) | FR-117 · DES-092 | `publishAuditRef()` call from enrolled citizen succeeds after 60-day inaction window with at least one steward registered in StewardRegistry but none having acted within STEWARD_INACTION_WINDOW (stewards present, not absent); `revokeTrustAnchor()` citizen fallback activates immediately on vacancy; audit substance unchanged by who published | **Blocked — Phase 3** (DES-092; ProtocolGovernance citizen-fallback path not deployed) |
| TC-3452 | **[SC-18 closure]** `abortRotation()` passes at Open Layer bar; state transitions to ROTATION_ABORTED; incumbent hash restored; pending anchor rejected for NEW enrolments post-abort; no retroactive invalidation | SC-18 (HIGH — CLOSED) | FR-113 · DES-090 | `abortRotation()` meets Open Layer quorum/supermajority; TrustAnchorLifecycle state = ROTATION_ABORTED; incumbent hash restored; new enrolment citing the aborted pending anchor reverts; already-enrolled credentials unaffected | **Blocked — Phase 3** (DES-090; TrustAnchorLifecycle state machine not deployed) |
| TC-3453 | **[SC-19 closure]** Citizen fallback for issuer-onboarding coordination after 60-day steward INACTION with stewards seated but inactive (rescan SC-19); steward coordination is convenience, not a control point | SC-19 (MEDIUM — CLOSED) | FR-117 · DES-092 | Issuer-onboarding coordination call from enrolled citizen succeeds after STEWARD_INACTION_WINDOW with at least one steward registered in StewardRegistry but none having triggered the coordination step within the window (stewards present, not absent); steward action is convenience infrastructure, never a required control point | **Blocked — Phase 3** (DES-092; citizen fallback for issuer-onboarding not deployed) |
| TC-3454 | **[SC-20 closure]** Quorum denominator = enrolled-citizen count fixed at `snapshotRoot`; any update to `snapshotRoot` between `firstVote` and `enact()` reverts `SnapshotImmutable` | SC-20 (MEDIUM — CLOSED) | US-0129 · FR-119 · DES-087 | `proposeAmendment()` fixes `snapshotRoot` and enrolled count at that block; call attempting to update `snapshotRoot` between `firstVote` open and `enact()` reverts with `SnapshotImmutable`; quorum computed from original enrolled count throughout | **Blocked — Phase 3** (DES-087; ProtocolGovernance `proposeAmendment/firstVote/secondVote/enact` not deployed) |
| TC-3455 | **[SC-21 closure]** STRIDE general rule satisfied: no routing surface accepts an externally-supplied address that could act as an alternative governance contract | SC-21 (LOW — CLOSED) | FR-118 · DES-087 | ABI inspection and STRIDE review confirm SC-15 general rule covers all routing surfaces; no externally-supplied governance-contract address accepted at any surface | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed; STRIDE review is design-only in this drop) |

---

#### TC-3456..TC-3464 — Guarded Layer property tests P1..P5 (Doc 03 §14)

**Context.** Doc 03 §14 specifies these property-based test cases with named revert conditions. They verify the invariants of the Guarded Layer super-process (FR-119, DES-087, DES-091). All constants: STEWARD_INACTION_WINDOW = 60 days, AUDIT_LEAD_TIME = 30 days, inter-vote window = 180 days, Tier-2 quorum = 25% of enrolled citizens at snapshotRoot, Tier-2 supermajority = 80% of votes cast (Doc 03 §10.11). All cases blocked until ProtocolGovernance deploys.

| TC | Property | Title | Verifies (US · FR · DES) | Expected result (named revert) | Status |
|---|---|---|---|---|---|
| TC-3456 | **P1** | `firstVote` closed with 75% YES (below 80% Tier-2 supermajority bar); `enact()` reverts `SupermajorityNotMet` | US-0129 · FR-119 · DES-087, DES-091 | Vote tally = 75% YES at `firstVote` close; `enact()` reverts `SupermajorityNotMet`; confirms supermajority check fires at first-vote stage | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3457 | **P2** | `secondVote` called before 180-day inter-vote window elapses reverts `WindowNotElapsed` | US-0129 · FR-119 · DES-087, DES-091 | `secondVote()` submitted at day 179 since `firstVote` reverts `WindowNotElapsed` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3458 | **P3a** | `enact()` before `firstVote` closes reverts `VoteNotComplete` | US-0129 · FR-119 · DES-087 | `enact()` called before `firstVote` window closes reverts `VoteNotComplete` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3459 | **P3b** | `enact()` before `secondVote` closes reverts `VoteNotComplete` | US-0129 · FR-119 · DES-087 | `enact()` called before `secondVote` window closes reverts `VoteNotComplete` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3460 | **P4a** | Post-snapshot-join has zero effect on eligibility for the in-flight proposal | US-0129 · FR-119 · DES-087 | Citizen enrolled after `snapshotRoot` is set for the in-flight proposal has no voting rights in that proposal; existing eligible-voter set unchanged | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3461 | **P4b** | Any call updating `snapshotRoot` between `firstVote` and `enact()` reverts `SnapshotImmutable` | US-0129 · FR-119 · DES-087 | State-modifying call that would update `snapshotRoot` between `firstVote` open and `enact()` reverts `SnapshotImmutable` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3462 | **P4c** | Churn-rate violation between first and second vote causes `enact()` to revert | US-0129 · FR-119 · DES-087 | Voter-set churn beyond the published limit between first and second vote causes `enact()` to revert with the churn-violation error | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3463 | **P5a** | Tier-2 `enact()` without a published audit reference reverts `AuditNotPublished` | US-0129 · FR-119 · DES-087 | `enact()` on a Tier-2 amendment without a prior `publishAuditRef()` call reverts `AuditNotPublished` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |
| TC-3464 | **P5b** | `enact()` when `publishAuditRef` timestamp is within AUDIT_LEAD_TIME (30 days) of `secondVote` open reverts `AuditLeadTimeNotSatisfied` | US-0129 · FR-119 · DES-087, DES-091 | `enact()` called when audit reference was published within 30 days before `secondVote` opened reverts `AuditLeadTimeNotSatisfied` | **Blocked — Phase 3** (DES-087; ProtocolGovernance not deployed) |

---

#### TC-3465..TC-3466 — FR-117 capability-absence suite (Doc 03 §14 hooks)

**Context.** Doc 03 §14 mandates a two-part capability-absence test for FR-117: (a) a static dep-guard that CI build-fails if any citizen-path module imports StewardRegistry, and (b) a dynamic vacancy simulation running the full citizen E2E with all steward seats vacant and verifying zero citizen-facing degradation. Both are blocked because StewardRegistry is not deployed and the citizen E2E flows are not yet complete for a vacancy simulation.

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3465 | **[FR-117 static dep-guard]** CI build-fails if any citizen-path module imports or references StewardRegistry | US-0127 · FR-117 · DES-089 | CI dep-guard assertion confirms: enrol, join, endorse, vote, propose, and fork citizen-path modules import zero steward-facing symbols from StewardRegistry; any violation causes build failure before merge | **Blocked — Phase 3** (DES-089; StewardRegistry contract not yet implemented; dep-guard CI assertion not yet written; Doc 04 §9 capability-absence pattern) |
| TC-3466 | **[FR-117 dynamic vacancy simulation]** Full citizen E2E (enrol → join → endorse → vote → propose → fork-petition) with 0 of N steward seats filled; zero citizen-facing degradation | US-0127 · FR-117 · DES-089, DES-092 | All six citizen flows complete successfully with all steward seats vacant; no citizen-facing degradation; no action requires steward liveness; mirrors UT-0700/UT-0701 absence-verification pattern at E2E scope | **Blocked — Phase 3** (DES-089, DES-092; steward election, multi-seat vacancy simulation, and fork-petition citizen path not implemented; E2E harness for vacancy simulation not yet built) |

---

#### TC-3467..TC-3469 — Follow-up audit 2026-08-12: vacancy-immediate fallbacks and anti-circularity direct attack

**Context.** These three cases address defects identified in the 2026-08-12 follow-up audit of TC-3451, TC-3453, and TC-3450. TC-3467 and TC-3468 exercise the vacancy-immediate citizen-fallback path that TC-3451 and TC-3453 under-tested (DES-092 steward-vacancy clause; ADR-019 amendment 2026-08-11). TC-3469 exercises the anti-circularity rule attack path that TC-3450 proves only on the constant classification mechanism. All three cases are inside the TS-GOV2 reservation TC-3400–TC-3499 (Doc 04 §14 v1.0.1). All are Blocked — Phase 3 with the concrete missing mechanism named.

| TC | Title | Verifies | Expected result | Status |
|---|---|---|---|---|
| TC-3467 | **[FR-117 vacancy-immediate: publishAuditRef]** `publishAuditRef()` citizen fallback activates IMMEDIATELY with no STEWARD_INACTION_WINDOW wait when `StewardRegistry` has zero registered stewards | US-0127 · FR-117 · DES-092 (ADR-019 amendment 2026-08-11; rescan SC-17 re-attack #2) | `StewardRegistry.registeredStewardCount() == 0`; enrolled citizen calls `publishAuditRef()` with zero delay from `firstVoteClosedAt`; call succeeds immediately — no 60-day wait applied; `auditPublishedAt` recorded; audit substance requirements (independence, scope, 30-day lead time before `secondVote`) unchanged; asserts `STEWARD_INACTION_WINDOW` is NOT required when vacancy is detected | **Blocked — Phase 3** (DES-092 vacancy-immediate fallback; StewardRegistry and ProtocolGovernance `publishAuditRef()` citizen path not deployed; no vacancy-detection mechanism in this drop) |
| TC-3468 | **[FR-117 vacancy-immediate: issuer-onboarding coordination]** Issuer-onboarding coordination citizen fallback activates IMMEDIATELY with no STEWARD_INACTION_WINDOW wait when `StewardRegistry` has zero registered stewards | US-0127 · FR-117 · DES-092 (ADR-019 amendment 2026-08-11 — same vacancy-immediate rule as SC-17; rescan SC-19) | `StewardRegistry.registeredStewardCount() == 0`; enrolled citizen triggers the issuer-onboarding coordination step with zero delay; call succeeds immediately — no 60-day wait applied; steward coordination step is convenience infrastructure, not a control point; confirmed by rescan SC-19: "same vacancy-immediate rule as SC-17. No 60-day wait on vacancy" | **Blocked — Phase 3** (DES-092 vacancy-immediate fallback for issuer-onboarding coordination; StewardRegistry and citizen-onboarding-coordination path not deployed; no vacancy-detection mechanism in this drop) |
| TC-3469 | **[SC-16 anti-circularity direct attack]** Open Layer vote (60%/15%) attempts `GovernanceConstants` setter to LOWER a Guarded Layer constant — Tier-2 quorum 25%→16% and Tier-2 supermajority 80%→61% — and the call reverts | US-0129 · FR-119 · DES-091 · DES-087 (rescan §3 re-attack #1) | Open Layer vote passes (60% supermajority, 15% quorum); `Governor.execute()` invokes `GovernanceConstants` setter for `TIER2_QUORUM` with value 16 and `TIER2_SUPERMAJORITY` with value 61; call reverts at `onlyGovernor` guard / `permittedActionClass` / Amendment Layer classification check — the Governor recognises that the target constants are classified "Guarded Layer (anti-circularity: SC-16)" per DES-091 and refuses an Open Layer vote's setter call; no constant mutated; this is the attack the anti-circularity rule exists to stop, exercised directly | **Blocked — Phase 3** (DES-091 Amendment Layer classification; DES-087 `onlyGovernor` guard and `permittedActionClass` binding; `GovernanceConstants` and `ProtocolGovernance` not deployed in this drop) |

---

## 5.3 `TS-SCAFFOLD` — scaffold seam & design-system seed (TC-3470–TC-3487)

**Context.** This suite covers the three user stories minted in Doc 05 v2.2.0 that complete the v1 scaffold seam and design-system seed (DES-093 token set, DES-094 PrivacyStatus, DES-095 IEligibilityVerifier, DES-096 IBallotService, DES-100 allowlist-only shape; ADR-023/024/025). **15 of 18 cases are automated and observed passing** — `npm test -w @trumocracy/ui` (14/14, packages/ui, UT-0750..UT-0758) and `npm test -w @trumocracy/sdk` (160/160 including 36 seam tests, UT-0760..UT-0779) both green 2026-08-25. 3 cases are Blocked: screen wiring is pending for the enrolment disclosure affordance (TC-3476), the FR-131 clause (d) notice surface (TC-3481), and the audit-contract publication endpoint (TC-3487). The seam contracts are IS_INSECURE_MOCK=true in this drop (ADR-024 §3); the seam interface and its guard behaviour are real; the ZK-backed production implementation is Phase 3.

**Shared preconditions.** `design_system` flag ON (DES-093/DES-094 token set deployed to packages/ui); `sdk_seams` flag ON (DES-095/DES-096 stubs deployed to packages/sdk); IS_INSECURE_MOCK=true (stub-backed; ADR-024 §3).

---

### TC-3470..TC-3476 — US-0132 PrivacyStatus tier display, self-view refusal, backing-aware copy, absence (DES-093/DES-094 · FR-082..FR-086 · FR-124)

**Context.** PrivacyStatus is a pure display component (DES-094) built on the design-system token set (DES-093). It renders the anonymity tier (Supporter / Worker / Candidate) and, where applicable, a backing-aware 'ver' copy based on `backing.isVerified`. The component refuses to render verified-status for the viewing user themselves (self-view contract). TC-3470..TC-3475 are automated (UT-0750..UT-0758, packages/ui/test/PrivacyStatus.test.tsx); TC-3476 is Blocked pending enrolment-screen wiring.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3470 | Supporter-tier: component renders anonymous copy; no attributable record surface | US-0132 · FR-082 · DES-093/DES-094 | `tier = 'SUPPORTER'`; no profile prop | Component renders the Supporter-tier anonymous copy (no name, no participation record surface); no attribution signal in DOM | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0750 | **Pass (obs.)** — npm test -w @trumocracy/ui 14/14, 2026-08-25 |
| TC-3471 | Worker-tier: component renders public-from-consent copy | US-0132 · FR-083 · DES-093/DES-094 | `tier = 'WORKER'` | Component renders Worker-tier copy indicating participation record is public from consent event; ballot direction copy absent | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0751 | **Pass (obs.)** |
| TC-3472 | Candidate-tier: component renders permanent-disclosure copy | US-0132 · FR-084 · DES-093/DES-094 | `tier = 'CANDIDATE'` | Component renders Candidate-tier copy indicating full permanent disclosure schedule; disclosure schedule surface present | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0752 | **Pass (obs.)** |
| TC-3473 | Self-view refusal: component returns null for null holder token, wrong-holder token, and empty token | US-0132 · FR-124 · DES-094 | (a) `viewerToken = null`; (b) `viewerToken ≠ holderToken`; (c) `viewerToken = ''` | Component returns null for all three cases; no verified-status leaks to the viewing user's own surface | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0754, UT-0755, UT-0756 | **Pass (obs.)** |
| TC-3474 | DOM absence: only approved tier strings present; zero surveillance metadata in any DOM node | US-0132 · FR-082, FR-083, FR-084, FR-085, FR-086, FR-124 · DES-093/DES-094 | Rendered DOM of PrivacyStatus at each tier | DOM contains only the approved tier copy strings; zero tracking attributes, user-identifiable tokens, or surveillance metadata in any DOM node | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0757 | **Pass (obs.)** |
| TC-3475 | Backing-aware 'ver' copy: four-path coverage (absent / false / true / malformed `backing.isVerified`) | US-0132 · FR-124 clause 7 · DES-094 | (a) no backing prop; (b) `backing.isVerified = false`; (c) `backing.isVerified = true`; (d) `backing = { isVerified: null }` | (a)+(b)+(d) → fail-honest default copy (no upgrade claim); (c) → upgraded 'ver' claim in copy; malformed/partial prop treated as absent (Doc 06 §2 clause 7) | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0758 | **Pass (obs.)** |
| TC-3476 | Clause-8 disclosure affordance rendered at enrolment screen | US-0132 · FR-085 · FR-131 clause 8 · DES-094 | Enrolment screen wired with PrivacyStatus component | Disclosure affordance renders the full clause-8 disclosure text before any consent button is active; no consent is recordable before affordance is visible | Designed, not automatable yet — enrolment screen (DES-098) not yet wired with PrivacyStatus; component unit tests pass | **Blocked** — enrolment screen integration pending |

---

### TC-3477..TC-3481 — US-0133 counting-gate pass/refuse, allowlist-only shape, IS_INSECURE_MOCK delegation (DES-095/DES-100 · FR-122 · FR-123 · FR-132)

**Context.** IEligibilityVerifier (DES-095) gates all counting-tier actions. DES-100 defines the allowlist-only action-type shape: only counting actions are permitted; JOIN, LEAVE, and account-creation are NOT in the allowlist and MUST throw `IllegalActionType`. IS_INSECURE_MOCK=true delegates to the stub (ADR-024 §3, ADR-025). TC-3477..TC-3480 are automated (UT-0760..UT-0769, packages/sdk/test/seams.test.js); TC-3481 is Blocked (FR-131 clause (d) UI notice pending — the seam refuses correctly at the SDK layer but the client notice surface is not wired).

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3477 | Verified participant (verificationLevel=COUNTING) passes counting gate | US-0133 · FR-123 · DES-095 · ADR-025 | `participant.verificationLevel = 'COUNTING'`; IS_INSECURE_MOCK=true | `IEligibilityVerifier.verify()` returns true; counting action proceeds | Automated — `packages/sdk/test/seams.test.js` · UT-0760, UT-0761, UT-0762 | **Pass (obs.)** — npm test -w @trumocracy/sdk 160/160, 2026-08-25 |
| TC-3478 | Open-tier participant (verificationLevel=OPEN) refused at counting gate | US-0133 · FR-122 · DES-095 · ADR-025 | `participant.verificationLevel = 'OPEN'` | `IEligibilityVerifier.verify()` returns false; counting action refused; refusal reason emitted | Automated — `packages/sdk/test/seams.test.js` · UT-0763, UT-0764 | **Pass (obs.)** |
| TC-3479 | JOIN, LEAVE, and account-creation action types throw `IllegalActionType` (DES-100 allowlist-only shape) | US-0133 · FR-132 · DES-095, DES-100 · ADR-025 | Action types: JOIN, LEAVE, ACCOUNT_CREATION | Each call throws `IllegalActionType`; no silent pass; allowlist contains only counting actions | Automated — `packages/sdk/test/seams.test.js` · UT-0765 | **Pass (obs.)** |
| TC-3480 | IS_INSECURE_MOCK=false with no vendor bound → `VendorNotBound`; no silent pass for any verification level | US-0133 · FR-132 · DES-095 · ADR-024 | IS_INSECURE_MOCK=false; no vendor injected | `IEligibilityVerifier.verify()` throws `VendorNotBound`; no action proceeds; no silent pass for any verification level | Automated — `packages/sdk/test/seams.test.js` · UT-0766, UT-0767, UT-0768, UT-0769 | **Pass (obs.)** |
| TC-3481 | FR-131 clause (d) open-tier notice displayed on client surface before counting action is refused | US-0133 · FR-131 · DES-095 | Client surface with counting action gate; `participant.verificationLevel = 'OPEN'` | UI renders the clause (d) notice informing the open-tier participant that counting actions require verified status before refusing; seam refuses correctly at the SDK layer (TC-3478) | Designed, not automatable yet — UI notice surface DES-098 not wired; SDK refusal itself passes | **Blocked** — *(amended v2.3.0)* the clause (d) notice IS now built and tested at the **parties-directory counting surface** (TC-3534 · UT-0864: four clauses, rendered before the refusal, no dismiss control). TC-3481 nevertheless stays **Blocked**, because it is written against the **ballot** counting surfaces (SCR-13/SCR-14), which are not built in this drop (Doc 06 §7 #21). Partial delivery is recorded, not promoted to a pass. |

---

### TC-3482..TC-3487 — US-0134 IBallotService cast, ballot-change, tally, refusal, embargo, audit-contract publication (DES-096 · FR-131)

**Context.** IBallotService (DES-096) exposes cast, ballot-change, tally, and refusal-without-ref operations. IS_INSECURE_MOCK=true (ADR-024 §3). TC-3482..TC-3486 are automated (UT-0770..UT-0776, packages/sdk/test/seams.test.js); TC-3487 is Blocked (audit-contract publication endpoint not wired — the seam produces a tally-hash but no public audit endpoint exists in this drop).

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3482 | Cast recorded, receipt returned, ballot direction never revealed | US-0134 · FR-131 · DES-096 · ADR-024 | Valid `eligibilityRef` from IEligibilityVerifier; IS_INSECURE_MOCK=true | `IBallotService.cast()` returns a receipt; ballot recorded; no direction signal in any output; no party or candidate attribution observable from receipt | Automated — `packages/sdk/test/seams.test.js` · UT-0770, UT-0771 | **Pass (obs.)** — npm test -w @trumocracy/sdk 160/160, 2026-08-25 |
| TC-3483 | Silent ballot-change: only last cast counts; no distinguishing signal between first cast and subsequent change | US-0134 · FR-131 · DES-096 | Two sequential casts by same participant | Second cast silently supersedes first; tally reflects only second cast; no observable difference in receipt between first cast and change | Automated — `packages/sdk/test/seams.test.js` · UT-0772 | **Pass (obs.)** |
| TC-3484 | Tally emits deterministic tally-hash; hash matches independent re-computation from same inputs | US-0134 · FR-131 · DES-096 | Closed ballot with known cast set | `IBallotService.tally()` returns tally-hash; independent re-computation from same inputs reproduces identical hash; individual ballot directions not recoverable from hash | Automated — `packages/sdk/test/seams.test.js` · UT-0773, UT-0774 | **Pass (obs.)** |
| TC-3485 | Cast refused without valid eligibilityRef; clause (d) notice emitted; no ballot record created | US-0134 · FR-131 · DES-096 | `eligibilityRef` absent or invalid | `IBallotService.cast()` refuses; clause (d) notice emitted by seam; no ballot record persisted | Automated — `packages/sdk/test/seams.test.js` · UT-0775 | **Pass (obs.)** |
| TC-3486 | Tally refused while ballot open — results embargo maintained | US-0134 · FR-131 · DES-096 | Ballot state = OPEN | `IBallotService.tally()` refuses with embargo error; no results data emitted; embargo maintained until ballot state transitions to CLOSED | Automated — `packages/sdk/test/seams.test.js` · UT-0776 | **Pass (obs.)** |
| TC-3487 | Audit-contract publication: tally-hash endpoint wired and publicly accessible | US-0134 · FR-131, BR-005 · DES-096 | Closed ballot with published tally-hash; audit-contract endpoint configured | Tally-hash reachable at the declared audit-contract endpoint; any third party can independently retrieve and verify the hash | Designed, not automatable yet — IS_INSECURE_MOCK=true; audit-contract endpoint wiring pending; stub produces a hash (TC-3484) but no public endpoint exists in this drop | **Blocked** — audit-contract wiring pending |

---

### TC-3488 — US-0132 PrivacyStatus accessible name (NFR-011 · DES-094)

**Context (v2.2.1 rework — 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01).** UT-0753 (`it('UT-0753 the component carries an accessible name matching the state title', ...)` in `packages/ui/test/PrivacyStatus.test.tsx`) existed in the repository and executed in the 14-test UI suite at v2.2.0 but was not mapped to any TC, making it a material orphan. This row closes that gap. Type: a11y.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3488 | Accessible name: component root carries an accessible name matching the displayed tier state title | US-0132 · NFR-011 · DES-094 | `PrivacyStatus` rendered at each tier (Supporter, Worker, Candidate, and refused/null states); accessibility tree inspected | Component root element carries an accessible name that matches the displayed tier state title; assistive technology can identify the component's current tier state without visual inspection | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0753 | **Pass (obs.)** — npm test -w @trumocracy/ui 14/14, 2026-08-25 (UT-0753 was already in the 14/14 run at v2.2.0; TC mapping added v2.2.1) |

---

## 5.4 `TS-PARTY` — Party-creation flow: FR-010/011/012/013/018/020/077/130 · BR-020 (TC-3489–TC-3516)

**Context.** These 28 cases cover the party-creation drop delivered in Doc 06 v2.2.0 (Approved, PASS 97%, suite 491 tests green: 95/126/197/14/16/43). The protocol, service, and web layers implement all referenced FRs at `IS_INSECURE_MOCK=true` (in-memory store); production-persistent store is pending DES-097 wiring. All TCs inherit their green status from Doc 06 v2.2.0 Approved: `packages/protocol/test/party-creation.test.js` 44/44, `packages/sdk/test/party-creation.test.js` 37/37, `apps/web/test/party-creation.test.tsx` 27/27. **None of these TCs were executed by the tester this session.** FR-077 and FR-130 carry G-TRACE (no DES assigned in Doc 03 §5.2); the TC evidence is recorded honestly — the code exists, but the traceability chain is broken at the DES link.

**Shared preconditions.** `IS_INSECURE_MOCK=true`; `packages/protocol/src/` exports `validateDraft`, `applyCharterDefaults`, `normalizeCollisionKey`, `charterFingerprint`; `packages/sdk/src/party-creation/` exports `PartyCreationService` and `InMemoryPartyStore`; `apps/web/src/party-creation/` provides the party-creation web flow. All time-sensitive assertions use deterministic timestamps — no `Date.now()` randomness.

### TC-3489..TC-3493 — FR-010 draft creation / collision (DES-073 · US-0011)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3489 | Duplicate normalised party name rejected with COLLISION error | US-0011 · FR-010 · DES-073 | First party with name "Non-Violence Party" created; `normalizeCollisionKey` produces "nonviolenceparty"; second draft submitted with same normalised key; IS_INSECURE_MOCK=true | `PartyCreationService.submit()` returns `{ error: 'COLLISION' }` on second submission; membership count of first party unaffected; no duplicate record persisted | Automated — `packages/sdk/test/party-creation.test.js` · UT-0787, UT-0788, UT-0789 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3490 | Emblem URI exceeding maximum allowed length rejected at protocol validation | US-0011 · FR-010 · DES-073 | Draft with `charter.emblemUri` of length > `MAX_EMBLEM_URI_LENGTH` (constant from `packages/protocol/src/constants.js`); valid in all other fields | `validateDraft` returns error citing emblem-URI length violation; draft not persisted; exact error key matches the constant boundary | Automated — `packages/protocol/test/party-creation.test.js` · UT-0064, UT-0065 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3491 | Same normalised name in a different jurisdiction is not a collision — cross-jurisdiction boundary | US-0011 · FR-010 · DES-073 | Party "Labour Party" exists in jurisdiction "GB"; second draft "Labour Party" with jurisdiction "IE"; `normalizeCollisionKey` embeds jurisdiction | `normalizeCollisionKey` produces distinct keys; no COLLISION raised; both drafts accepted independently; collision key derivation verified by inspection | Automated — `packages/protocol/test/party-creation.test.js` · UT-0086 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3492 | Draft with all required fields present passes the protocol validation gate | US-0011 · FR-010 · DES-073 | Complete draft: name, emblem, jurisdiction, constituency, values, manifesto, charter, contact — all non-empty and within declared bounds | `validateDraft` returns no errors; all pillar checks pass; draft eligible for service submission | Automated — `packages/protocol/test/party-creation.test.js` · UT-0060 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3493 | TOCTOU collision re-check: second submission with same key refused after first commits | US-0011 · US-0131 · FR-010 · FR-130 · DES-073 | Two concurrent `PartyCreationService.submit()` calls with same normalised key; service acquires a per-key lock; first call commits; second call re-checks after acquiring lock | Second submission detects collision on TOCTOU re-check and returns `{ error: 'COLLISION' }`; no duplicate record written; lock released after second call | Automated — `packages/sdk/test/party-creation.test.js` · UT-0818 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3494..TC-3496 — FR-011 eight mandatory pillars gate (DES-074 · US-0014 · US-0015)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3494 | Draft missing any pillar rejected with INCOMPLETE_DRAFT naming absent fields | US-0014 · FR-011 · DES-074 | Seven separate drafts, each omitting exactly one of the eight required pillars (name, emblem, jurisdiction, constituency, values, manifesto, charter, contact) | Each single-pillar-absent draft returns `{ error: 'INCOMPLETE_DRAFT', missingPillars: [<pillarName>] }` naming the absent pillar; draft not persisted in any case | Automated — `packages/protocol/test/party-creation.test.js` · UT-0060, UT-0061, UT-0062, UT-0063 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3495 | Service layer enforces eight-pillar gate before persisting; all four SDK-level pillar checks pass | US-0014 · FR-011 · DES-074 | Parameterised drafts with one, two, and zero missing pillars submitted to `PartyCreationService`; IS_INSECURE_MOCK=true | Service refuses single- and multi-pillar-absent drafts; correct `missingPillars` array in each response; a complete draft proceeds to TOCTOU collision check | Automated — `packages/sdk/test/party-creation.test.js` · UT-0783, UT-0784, UT-0785, UT-0786 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3496 | Web form displays deficiency notice naming missing pillars; submission blocked | US-0015 · FR-011 · DES-074 | Party-creation web form rendered; user attempts submission with required fields missing; IS_INSECURE_MOCK=true | Form validation surfaces INCOMPLETE_DRAFT notice; each missing pillar named; submit button disabled or submission blocked; no draft reaches the service layer | Automated — `apps/web/test/party-creation.test.tsx` · UT-0845 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3497..TC-3498 — FR-012 charter bounds and defaults (DES-017 · US-0013)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3497 | `applyCharterDefaults` populates all missing optional charter fields from governance constants | US-0013 · FR-012 · DES-017 | Draft with charter object missing optional tier-bound fields; `CHARTER_DEFAULTS` constants defined in `packages/protocol/src/constants.js` | `applyCharterDefaults(draft)` returns draft with every charter field populated at its governance-constant default; no field left `undefined`; idempotent on a fully specified charter | Automated — `packages/protocol/test/party-creation.test.js` · UT-0076, UT-0077, UT-0078, UT-0079, UT-0080, UT-0081, UT-0082 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3498 | Charter tier bounds validated: min/max boundary values honoured; additive chain (Supporter ≤ Worker ≤ Candidate) enforced | US-0013 · FR-012 · DES-017 | Boundary-value sweep: tier bounds at exact min, exact max, min − 1, max + 1; additive-chain violations (e.g. Worker floor < Supporter floor); all within one parameterised `validateCharter` call set | Bounds at exact min and max accepted; bounds outside range yield `CHARTER_BOUNDS_VIOLATION`; additive-chain inversions yield `CHARTER_CHAIN_VIOLATION`; no edge case silently passes | Automated — `packages/protocol/test/party-creation.test.js` · UT-0066, UT-0067, UT-0068, UT-0069, UT-0070 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3499..TC-3503 — FR-013 petition expiry, immutable archive, cooldown (DES-009 · US-0021)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3499 | Petition expires at `expiresAt` timestamp; state transitions to EXPIRED; no further endorsements accepted | US-0021 · FR-013 · DES-009 | Petition created with `expiresAt = now + PETITION_EXPIRY_SECONDS`; `Chain.warp()` advances time past `expiresAt` | `partyStatus(partyId)` returns EXPIRED; subsequent `endorse()` call refused with `PETITION_EXPIRED`; expiry is deterministic on the `expiresAt` value, not wall clock | Automated — `packages/sdk/test/party-creation.test.js` · UT-0795, UT-0796 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3500 | Expired petition archived with immutable `archivedAt` timestamp; no endorsement mutation after archival | US-0021 · FR-013 · DES-009 | Petition in EXPIRED state; archive triggered; subsequent `endorse()` attempted | `archivedAt` field set and immutable (second archive call returns same value); `endorse()` post-archive refused; archive record contains deterministic fingerprint | Automated — `packages/sdk/test/party-creation.test.js` · UT-0797, UT-0800 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3501 | `charterFingerprint` is deterministic — identical charter inputs always produce the same hash; single-character change changes hash | US-0021 · FR-013 · DES-009 | Two independent calls to `charterFingerprint` with identical charter objects; then one field changed by a single character | Both identical-input calls return the same hash; changed-input call returns a different hash; field-ordering does not affect the hash value | Automated — `packages/protocol/test/party-creation.test.js` · UT-0083, UT-0084, UT-0085 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3502 | `archivedAt` is deterministic — same petition state always produces the same archive timestamp; no `Date.now()` in archive path | US-0021 · FR-013 · DES-009 | Petition archived with known state; `archivedAt` computation invoked twice on identical state inputs | Both calls return identical `archivedAt` value; grep confirms no `Date.now()` call in the `archive` code path | Automated — `packages/sdk/test/party-creation.test.js` · UT-0817 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3503 | Re-petition cooldown enforced: originator re-submits within `COOLDOWN_SECONDS` → refused; after cooldown → permitted | US-0021 · FR-013 · DES-009 | Petition archived (expired); originator submits new petition within `COOLDOWN_SECONDS` (`Chain.warp()` keeps time inside window); then `Chain.warp()` advances past cooldown for a third submission | Second petition returns `{ error: 'COOLDOWN_ACTIVE', unlocksAt: <timestamp> }`; third petition (past cooldown) accepted; cooldown boundary is inclusive on the unlock timestamp | Automated — `packages/sdk/test/party-creation.test.js` · UT-0798, UT-0799 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3504..TC-3506 — FR-018 automatic activation threshold gate (DES-009 · US-0022)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3504 | Activation refused when endorsement count is one below the configured threshold | US-0022 · FR-018 · DES-009 | Petition with endorsement count = `ACTIVATION_THRESHOLD − 1`; activation attempted | Activation refused; `partyStatus` remains PETITIONING; response includes `{ error: 'BELOW_THRESHOLD', required: <threshold>, current: <count> }` | Automated — `packages/sdk/test/party-creation.test.js` · UT-0814 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3505 | Activation passes when endorsement count meets the threshold exactly | US-0022 · FR-018 · DES-009 | Petition with endorsement count = `ACTIVATION_THRESHOLD` exactly; activation attempted | Activation succeeds; `partyStatus` transitions to PROVISIONAL (active but capped); no approval step required beyond the code threshold | Automated — `packages/sdk/test/party-creation.test.js` · UT-0815 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3506 | 500-member floor: `ACTIVATION_THRESHOLD` cannot be configured below 500 | US-0022 · FR-018 · DES-009 | Attempt to initialise `PartyCreationService` with `activationThreshold < 500` | Constructor or configuration validation throws `THRESHOLD_BELOW_FLOOR`; `MIN_ACTIVATION_THRESHOLD = 500` constant enforced in code; no runtime path bypasses this floor | Automated — `packages/sdk/test/party-creation.test.js` · UT-0816 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3507 — FR-020 join without approval (DES-013 · ADR-007 · US-0024)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3507 | Member joins a provisional party without any approval step, verifier, or invitation; join accepted on identity proof alone | US-0024 · FR-020 · DES-013 · ADR-007 | Active provisional party below cap; member with valid identity proof (`IS_INSECURE_MOCK=true`; mock eligibility reference) | `joinParty()` succeeds immediately; no approval, sponsorship, interview, invitation, fee, or veto path exists in the code; membership record created; `partyStatus` member count increments | Automated — `packages/sdk/test/party-creation.test.js` · UT-0807 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3508..TC-3510 — FR-077 non-violence clause verbatim / non-removable (no DES — G-TRACE · US-0087)

_Note: FR-077 has no DES assigned in Doc 03 §5.2 (G-TRACE); the chain is broken at the DES link. The code and tests exist; this TC evidence is recorded honestly. The Must row in Doc 08 stays OPEN until DES is assigned._

| TC | Title | Verifies (US · FR) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3508 | Non-violence clause verbatim text required — exact clause text accepted at protocol validation | US-0087 · FR-077 | Draft with `charter.clause_nonviolence` equal to the canonical verbatim text from `packages/protocol/src/clauses.js` | Clause validation passes; no `CLAUSE_MISSING` or `CLAUSE_ALTERED` error; draft eligible for service submission | Automated — `packages/protocol/test/party-creation.test.js` · UT-0071, UT-0072 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3509 | Non-violence clause altered — any modification to the verbatim text causes refusal | US-0087 · FR-077 | Draft with `charter.clause_nonviolence` differing from the canonical text by one character; second variant with whitespace difference | Both variants return `{ error: 'CLAUSE_ALTERED' }`; exact-match comparison enforced; no fuzzy or normalised comparison | Automated — `packages/protocol/test/party-creation.test.js` · UT-0073, UT-0074 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3510 | Non-violence clause absent — draft without clause field refused; web UI displays clause verbatim and marks it non-removable | US-0087 · FR-077 | Draft with `charter.clause_nonviolence` field absent or empty (protocol layer); party-creation web form rendered (web layer) | Protocol: `validateDraft` returns `{ error: 'CLAUSE_MISSING' }`; draft not persisted. Web: non-violence clause displayed verbatim (UT-0849); UI marks clause as non-removable / locked field (UT-0850, UT-0851); SDK enforces at service level (UT-0786) | Automated — `packages/protocol/test/party-creation.test.js` · UT-0075; `packages/sdk/test/party-creation.test.js` · UT-0786; `apps/web/test/party-creation.test.tsx` · UT-0849, UT-0850, UT-0851 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

### TC-3511..TC-3516 — FR-130 provisional membership cap · BR-020 disclosure (no DES — G-TRACE · US-0131)

_Note: FR-130 has no DES assigned in Doc 03 §5.2 (G-TRACE); the Must row stays OPEN until DES is assigned. BR-020 disclosure is verified at the web layer. TC-3493 and TC-3515 also verify cross-cutting aspects of FR-010 (collision / jurisdiction)._

| TC | Title | Verifies (US · FR / BR) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3511 | Provisional party capped at 100 members — 101st join attempt refused | US-0131 · FR-130 | Provisional party with exactly 100 existing members; IS_INSECURE_MOCK=true; 101st member attempts `joinParty()` | `joinParty()` returns `{ error: 'PROVISIONAL_CAP_REACHED', cap: 100 }`; member count remains 100; no membership record for the 101st member | Automated — `packages/sdk/test/party-creation.test.js` · UT-0802, UT-0803 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3512 | Provisional cap boundary: 100th join succeeds; 101st refused; exact boundary enforced | US-0131 · FR-130 | Provisional party with 99 existing members; two sequential `joinParty()` calls | First call (to 100) succeeds; second call (to 101) returns `PROVISIONAL_CAP_REACHED`; count remains 100; boundary is inclusive (100 is the last permitted member) | Automated — `packages/sdk/test/party-creation.test.js` · UT-0804, UT-0805 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3513 | `ProvisionalStatus` web component displays member count / cap in all membership states | US-0131 · FR-130 | Provisional party rendered at 0, 50, 99, and 100 members; `ProvisionalStatus` component mounted with each state | Component shows current count and cap; approaches-cap warning displayed at ≥ 90 members; cap-reached state displayed at 100; displayed count matches service state | Automated — `apps/web/test/party-creation.test.tsx` · UT-0852, UT-0853, UT-0854 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3514 | No operator or manual path exists to lift the provisional cap before verified legal registration | US-0131 · FR-130 | Provisional party at cap (100 members); no verified legal registration event; attempt to access any admin or configuration bypass path | No administrative API, configuration flag, environment variable, or code path raises the cap without the registration event; `partyStatus()` shows PROVISIONAL_CAPPED; the only cap-lift path is FR-075 registration verification (not implemented in this drop) | Automated — `packages/sdk/test/party-creation.test.js` · UT-0806 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3515 | Cap lifts automatically by code on verified legal registration — no operator action; anti-capture invariant C-02 confirmed | US-0011 · US-0131 · FR-010 · FR-130 | Provisional party at cap (100 members); verified legal registration event emitted (IS_INSECURE_MOCK=true; simulated oracle event); no operator action taken | `partyStatus()` transitions to REGISTERED; cap lifted automatically; member count now unconstrained; no admin call or manual step in the lift path; anti-capture invariant C-02 confirmed by code inspection | Automated — `packages/sdk/test/party-creation.test.js` · UT-0809, UT-0810, UT-0811 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |
| TC-3516 | BR-020 disclosure: party-creation form displays required disclosure; submission blocked until user acknowledges | US-0131 · BR-020 · FR-130 | Party-creation web form rendered (IS_INSECURE_MOCK=true); user attempts submission without acknowledging disclosure | Disclosure statement required under BR-020 displayed verbatim on form (UT-0848); form submission blocked until acknowledgement; `ProvisionalStatus` component displays disclosure badge in all provisional states (UT-0855, UT-0856); SDK `partyStatus` includes disclosure-required flag (UT-0808) | Automated — `apps/web/test/party-creation.test.tsx` · UT-0848, UT-0855, UT-0856; `packages/sdk/test/party-creation.test.js` · UT-0808 | **Pass (inh.)** — inherited from Doc 06 v2.2.0 Approved |

---

## 5.5 `TS-MEMBERSHIP` — Join / leave / membership history & counting: FR-020/022/064/122/123/130/131 · DES-097 seam guards (TC-3517–TC-3540)

**Context.** These 24 cases cover the join/membership drop delivered in Doc 06 **v2.3.2** (Approved, technical cycle-3 PASS 97%; suite 542 tests green: contracts 95 / protocol 126 / sdk 220 / ui 14 / indexer 16 / web 71). The service and web layers implement the referenced FRs at `IS_INSECURE_MOCK=true` (in-memory store); the production-persistent store is pending DES-097 wiring. All 24 TCs inherit their green status from Doc 06 v2.3.2 Approved: `packages/sdk/test/membership.test.js` 22/22, `packages/sdk/test/party-creation.test.js` 38/38 (includes UT-0831), `apps/web/test/join-membership.test.tsx` 27/27, `apps/web/test/sdk-types-sync.test.ts` 1/1.

**Two things this suite does not claim.**

1. **FR-064 is NOT closed by these cases.** The invariant is implemented in the **explicit-leave** form (a second join is *refused* until the member explicitly leaves), while FR-064's normative text in Doc 02 §4.6 reads **auto-void-on-join**. Doc 06 §7 #20 records this as a TRACKED DECISION (Flag: `FR-064-SEMANTICS`) awaiting a product-owner ruling, and the assigned design element **DES-065** is a v2/Phase-3 membership-scope nullifier that is not built. TC-3523..TC-3525 therefore evidence *the behaviour that exists*; the FR-064 Must row in Doc 08 stays **OPEN**. Testing the stricter form does not license closing a row whose requirement text says something else.
2. **FR-021 gets nothing from this drop.** One-member-one-equal-vote is about tally weight; this drop adds no vote-weight or tally evidence, so no case here cites FR-021 and its RTM row is left untouched.

**Shared preconditions.** `IS_INSECURE_MOCK=true`; `packages/sdk/src/party-creation.js` exports `PartyCreationService` and `InMemoryPartyStore`; the service is constructed with an **injected clock** (fixed `T0`) — no `Date.now()` on any asserted path (Doc 06 §2.6); the web cases render the parties directory at `apps/web/src/app/parties/page.tsx` behind the `party_governance` flag with a **stub-backed verifier over an EMPTY credential store**, so the demo visitor is honestly open-tier and no control can fake ID verification (Doc 06 §7 #22). Membership is an **append-only JOIN/LEAVE event log**; "leaving" is a recorded event, never a deletion.

### TC-3517..TC-3520 — FR-020 join without approval, and the structural no-verifier guarantee (DES-013 · ADR-007 · US-0024)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3517 | Any account joins an active party on request; membership is immediate and the API exposes no gatekeeping parameter | US-0024 · FR-020 · DES-013 · ADR-007 | Activated party; injected clock at `T0`; `IS_INSECURE_MOCK=true` | `joinParty(partyId, 'member-1')` returns `{ memberCount: 1, joinedAt: T0 }`; `activeMembership('member-1')` equals `{ partyId, joinedAt: T0 }`; **`joinParty.length === 2`** — the method arity *is* the contract, so no approval, sponsorship, fee or veto parameter can exist | Automated — `packages/sdk/test/membership.test.js` · UT-0819 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3518 | Join and leave never reach the eligibility seam — and the service structurally cannot reach one | US-0024 · FR-020 · DES-095 · ADR-025 | Activated party; a verifier constructed **in scope** with `vi.spyOn(verifier, 'verifyEligibility')`; the verifier is *not* passed to the service | After `joinParty` then `leaveParty`, the spy has **zero** calls; additionally `service.verifyEligibility`, `service._verifier` and `service._store.verifyEligibility` are all `undefined` — the guarantee is structural (the service never holds a verifier), not merely behavioural | Automated — `packages/sdk/test/membership.test.js` · UT-0820 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3519 | Web: one click joins; no approval, request, application or invitation control exists anywhere on the surface | US-0024 · FR-020 · DES-013 · SCR-10, SCR-11 | Parties directory rendered, `party_governance` flag on; demo visitor open-tier | Clicking the single join control produces immediate membership (`membership-joined` and the party's member badge render; `activeMembership(visitor)` is the joined party). Capability-absence sweep: **every** button on the surface is asserted not to match `/approve|request|apply|invite/i` | Automated — `apps/web/test/join-membership.test.tsx` · UT-0858 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3520 | Web seam spy across the whole flow: zero verifier calls on join/leave/rejoin; exactly one on the counting action, with the counting scope | US-0024 · US-0133 · FR-020, FR-123 · DES-095 · ADR-025 | Parties directory with a spied demo verifier; visitor open-tier | After join → leave → rejoin the spy has **zero** calls. After the counting action the spy has **exactly one** call, with `(visitor, 'IN/KA', 'STRENGTH_CONTRIBUTION')`. Joining is free; only counting touches the seam | Automated — `apps/web/test/join-membership.test.tsx` · UT-0866 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3521..TC-3522 — FR-022 leave at will (DES-013 · US-0025)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3521 | Leaving takes immediate effect with no exit approval; only a non-member is refused | US-0025 · FR-022 · DES-013 | Member joined at `T0`; clock advanced to `T0+100` | `leaveParty` returns `{ leftAt: T0+100, memberCount: 0 }`; `activeMembership` becomes `null`. **`leaveParty.length === 2`** — no approval parameter. A stranger's leave throws `NOT_A_MEMBER`; that is the *only* refusal path | Automated — `packages/sdk/test/membership.test.js` · UT-0823 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3522 | Web: leaving is one action, immediate, and the surface returns to the pre-join state | US-0025 · FR-022 · DES-013 · SCR-11 | Visitor joined to a party on the parties directory | One click on leave: `membership-left` renders; `activeMembership(visitor)` is `null`; the member badge is gone and the join panel is back. No confirmation-of-approval step, no pending state | Automated — `apps/web/test/join-membership.test.tsx` · UT-0860 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3523..TC-3525 — FR-064 one active party, EXPLICIT-LEAVE form (DES-065 · US-0073) — **row stays OPEN**

_Note: these cases evidence the behaviour that exists, not the requirement as written. FR-064's text reads auto-void-on-join; this drop refuses the second join instead. Both preserve at-most-one-active-membership, and the explicit-leave form is the stricter of the two — but they are different semantics, and Doc 02 is product-owner-owned. Doc 06 §7 #20 tracks the decision (Flag: `FR-064-SEMANTICS`); DES-065 (membership-scope nullifier) is v2/Phase-3 and unbuilt. **The FR-064 Must row in Doc 08 stays OPEN on both counts.**_

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3523 | Joining a second party while a member of the first is refused, naming the current party; after an explicit recorded leave the second join succeeds | US-0073 · FR-064 · DES-065 | Two activated parties A and B; member joined to A | The join to B throws with `code === 'ALREADY_MEMBER_ELSEWHERE'`, `currentPartyId === partyA`, and a message containing **"explicit, recorded action"** — the refusal names what the member must do. After `leaveParty(A)`, `joinParty(B)` succeeds and `activeMembership` points at B | Automated — `packages/sdk/test/membership.test.js` · UT-0821 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3524 | A double join of the *same* party is refused and does not inflate the member count | US-0073 · FR-064 · DES-065 | Activated party; member already joined | Second `joinParty` for the same member throws `code === 'ALREADY_MEMBER'` (distinct from `ALREADY_MEMBER_ELSEWHERE`); `partyStatus(partyId).memberCount` remains **1** — the refusal is not a silent no-op that leaves a duplicate row | Automated — `packages/sdk/test/membership.test.js` · UT-0822 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3525 | Web: the second-join refusal is surfaced honestly, naming the current party; leaving then joining succeeds | US-0073 · FR-064 · DES-065 · SCR-10 | Parties directory with two parties; visitor joined to the first ("Commons Forward") | The `membership-error` element text equals the localised `alreadyMemberElsewhere('Commons Forward')` string — the *name* of the blocking party is shown, not a generic error; the visitor remains a member of the first party only. After leave, joining the second succeeds and its member badge renders | Automated — `apps/web/test/join-membership.test.tsx` · UT-0859 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3526..TC-3527 — Append-only membership history: leaving is never deletion (DES-013 · US-0024, US-0025)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3526 | History is append-only across parties, and the store exposes no way to delete or rewrite an event | US-0024, US-0025 · FR-020, FR-022 · DES-013 | Join at `T0`, leave at `T0+100`, rejoin at `T0+200`; a second scenario joining party A then party B | `membershipHistory` returns exactly two rows: `{joinedAt: T0, leftAt: T0+100, active: false}` then `{joinedAt: T0+200, leftAt: null, active: true}`. Across parties, two rows survive with A inactive and B active — history is never trimmed by later actions. **Capability-absence:** the store prototype exposes **no** method matching `/delete\|remove\|clear\|rewrite/i` (asserted to be the empty list). **Immutability:** `getMembershipEvents` returns copies — mutating a returned event does not change the log | Automated — `packages/sdk/test/membership.test.js` · UT-0824 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3527 | Web: the history panel renders every join and leave, marked inactive then active | US-0024, US-0025 · FR-020, FR-022 · SCR-11 | Visitor performs join → leave → rejoin on the parties directory | The membership-history region renders with its lead copy; `history-state-0` reads the localised **inactive** label and `history-state-1` the **active** label — the past membership is shown, not erased | Automated — `apps/web/test/join-membership.test.tsx` · UT-0861 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3528..TC-3529 — FR-130 provisional cap at join, on ACTIVE members (no DES — G-TRACE · US-0131)

_Note: FR-130 has no DES assigned in Doc 03 §5.2 (G-TRACE). The code exists and is tested; the chain is broken at the DES link, so the Must row in Doc 08 stays OPEN. Recorded honestly, not closed._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3528 | The cap binds at the 100/101 boundary of **active** members, and a leave frees exactly one slot | US-0131 · FR-130 | Activated provisional party; members 1..99 joined; `PROVISIONAL_MEMBER_CAP = 100` | Member 100 joins and `memberCount === 100`. Member 101 throws `PROVISIONAL_CAP_REACHED` — unconditional, no grace (Ruling 1, 2026-08-26). After `leaveParty` for one existing member, member 101's join **succeeds** and the count returns to exactly 100: the cap counts ACTIVE membership, so departure frees a slot rather than permanently consuming it | Automated — `packages/sdk/test/membership.test.js` · UT-0825 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3529 | Web: the 100th member joins; the 101st is refused with the honest cap message at the join surface | US-0131 · FR-130 · SCR-10 | Parties directory demo seeded at 99 active members, then at 100 | The join at 99→100 succeeds. The join attempt at 100 is refused and the surface shows the localised cap message naming the cap — the refusal is explained, not a dead control | Automated — `apps/web/test/join-membership.test.tsx` · UT-0862 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3530..TC-3533 — FR-122 / FR-123 joining is not counting (DES-095 · ADR-025 · US-0133)

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3530 | Official strength counts verified members only — and a refused open-tier member remains a full member | US-0133 · FR-122, FR-123 · DES-095 · ADR-025 | Activated party; an open-tier member (empty credential store); separately a verified member (DES-100 allowlist credential injected) | Open tier: `contributeToStrength` throws `NOT_COUNTING_ELIGIBLE` with a `reason` naming **government-ID** verification; crucially the member is **still a member** — `countingStatus` is `{member: true, counted: false}`, `memberCount` 1, `officialStrength` 0. Verified: counted once (`officialStrength` 1), a repeat throws `ALREADY_COUNTED`. A verified **non-member** throws `NOT_A_MEMBER` — strength counts members. Divergence is honest: 3 joined / 1 counted | Automated — `packages/sdk/test/membership.test.js` · UT-0826 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3531 | A counted member who leaves stops counting; a rejoin does not silently restore the count; history survives both | US-0133 · FR-123 · DES-095 | Verified member joined and counted (`officialStrength` 1); then leaves at `T0+100`; then rejoins at `T0+200` | On leave `officialStrength` drops to **0**. On rejoin `countingStatus` is `{member: true, counted: false}` — rejoining restores membership, **not** counted status, so strength cannot be inflated by a leave/rejoin cycle. `membershipHistory` still has 2 rows | Automated — `packages/sdk/test/membership.test.js` · UT-0827 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3532 | The seam is called exactly once, with the normative counting scope; the status read never calls it | US-0133 · FR-122, FR-123 · DES-095 · ADR-025 | Verified member joined; spy on `verifyEligibility` | `contributeToStrength` calls the verifier **exactly once**, with `('member-1', 'IN/KA', COUNTING_ACTION.STRENGTH_CONTRIBUTION)` — the member id, the party's jurisdiction, and the normative scope (Doc 03 §10.13.2(a)). `countingStatus` reports non-member / open-tier member / counted member from recorded state only, and **`countingStatus.length === 2`** — it takes no verifier parameter, so a read can never trigger verification | Automated — `packages/sdk/test/membership.test.js` · UT-0828, UT-0830 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3533 | Web: a joined open-tier member is displayed as a real member who does not yet count; a verified member's counting action updates both figures | US-0133 · FR-122, FR-123 · DES-095 · SCR-10 | Parties directory; (a) demo visitor open-tier; (b) demo visitor with an injected DES-100 allowlist credential | (a) After joining: member count reads 1, official strength reads **0**, and the counting-status region shows the honest open-tier body copy — the two figures are shown side by side rather than conflated. (b) For a verified visitor the counting action succeeds: the counted body copy renders, official strength reads **1**, and **no** open-tier notice is present | Automated — `apps/web/test/join-membership.test.tsx` · UT-0863, UT-0865 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3534..TC-3535 — FR-131(d) four-clause notice · FR-131(b) v1-honest join copy (DES-096/DES-098 · US-0133, US-0134)

_Note: TC-3534 delivers, at the **parties-directory** counting surface, the clause (d) obligation that TC-3481 was Blocked on. TC-3481 remains Blocked for the **ballot** surfaces (SCR-13/SCR-14), which are not built in this drop (Doc 06 §7 #21). FR-131's Must row stays OPEN (G-PHASE3)._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3534 | FR-131(d): the open-tier notice carries all four clauses, precedes the refusal, and cannot be dismissed | US-0133 · FR-131 · DES-098 · DES-095 | Parties directory; open-tier visitor joined; visitor attempts the strength-contribution counting action | The notice region renders **all four clauses**: (i) current participation is open-tier only, (ii) the action requires government-ID verification, (iii) what specifically does not count, (iv) how to become a counting member. The refusal statement renders **after** the four clauses, inside the notice. **Non-dismissable:** `queryAllByRole('button')` inside the notice is the **empty list** — there is no close or dismiss control. The refused action changed nothing: official strength stays 0 and `countingStatus` stays `{member: true, counted: false}` | Automated — `apps/web/test/join-membership.test.tsx` · UT-0864 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3535 | FR-131(b): the join copy makes no v2 privacy claim against the v1 backing | US-0133 · FR-131 · BR-020 | Parties directory rendered; `en.parties.joinPrivate` string inspected and rendered | The copy **does not** contain the old v2-only claim *"Nobody gets that list"*; it **does** disclose that *"our own records can link your account"* and that membership is *"never published"*. The disclosure renders on **every** join panel, not just the first. This is a regression guard on an honesty defect: v1's platform database can link account↔party, and the copy must say so | Automated — `apps/web/test/join-membership.test.tsx` · UT-0869 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3536..TC-3538 — Determinism, ship-dark gating, jargon and absence scans (NFR-023 · DES-085 · §2.5, §2.6)

| TC | Title | Verifies (US · FR / NFR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3536 | `joinedAt` / `leftAt` come from the injected clock — the same clock produces byte-identical history | US-0024, US-0025 · FR-020, FR-022 | Two independent runs of the same join/leave scenario with the same injected clock | Both runs produce **deeply equal** `membershipHistory` output. No wall clock on any membership path (Doc 06 §2.6) — a flaky membership timestamp would be a governance bug, not a test nuisance | Automated — `packages/sdk/test/membership.test.js` · UT-0829 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3537 | Ship-dark: the parties directory is gated on the `party_governance` flag | US-0131 · FR-056 · NFR-020 | Page rendered with the flag off, then on | Flag **off**: only the flag-off message renders and the directory title is absent. Flag **on**: the directory renders. The capability is gated at the surface, not merely hidden by styling | Automated — `apps/web/test/join-membership.test.tsx` · UT-0867 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3538 | Jargon filter over every new membership string, and an absence test for surveillance metadata | US-0133 · NFR-023 · DES-085 · §2.5 | All new `en`/`ar` membership strings collected; then the full membership surface rendered through join and a counting attempt | **Jargon:** no new user-facing membership string contains banned blockchain vocabulary (DES-085). **Absence:** the rendered markup contains none of `gtag`, `analytics`, `data-track`, `beacon`, `pixel`, `sentry` — the absence *is* the privacy property, per the §2.5 absence-test pattern | Automated — `apps/web/test/join-membership.test.tsx` · UT-0868, UT-0870 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |

### TC-3539..TC-3540 — DES-097 persistence-seam integrity guards (FR-013 expiry path · US-0021)

_Note: both cases are **guards**, not feature tests. Each was minted from a defect the Doc 06 review loop found: TC-3539 from cycle-1 ISS-01 (the service reached into the store's private state, which would have silently no-op'd against any production store) and TC-3540 from cycle-2 ISS-C2-01 (the fix landed in the JS but not in the TypeScript shim `apps/web` compiles against). They protect the FR-013 petition-expiry path across the DES-097 seam. A regression test whose case is not in the suite is a defect waiting to come back._

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3539 | `expirePetitions` reaches only the declared `IPartyStore` interface — no private-state access | US-0021 · FR-013 · DES-097 | A facade exposing **exactly** the 22 methods declared on the `IPartyStore` JSDoc typedef, each delegating to a real `InMemoryPartyStore`, injected into `PartyCreationService`; a petition published and the clock advanced past `closesAt` | The past-close petition is still expired **through the facade**: the returned id list contains it, and the backing store shows `state === EXPIRED` with `archivedAt` equal to the injected expiry time. Any renewed reach into private state (e.g. `_petitions`) finds `undefined` on the facade and the case fails — so the seam break cannot silently return | Automated — `packages/sdk/test/party-creation.test.js` · UT-0831 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
| TC-3540 | The `trumocracy-sdk.d.ts` `IPartyStore` shim stays in sync with the SDK JSDoc typedef, both directions | US-0021 · FR-013 · DES-097 | The SDK source `IPartyStore` `@typedef` and the ambient shim `apps/web/types/trumocracy-sdk.d.ts` are parsed for member names | The member set of the **interface** and the member set of the **class** declaration each equal the JSDoc typedef member set **exactly** (set equality asserted both ways). A member missing from the shim is the silent-crash drift (a TS store typechecks clean, then throws at runtime); a member missing from the JSDoc means the shim promises an API the SDK does not have. Verified by the tester to fail under injected drift, per block and in both directions | Automated — `apps/web/test/sdk-types-sync.test.ts` · UT-0871 | **Pass (inh.)** — inherited from Doc 06 v2.3.2 Approved |
