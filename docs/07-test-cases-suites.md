# Test Cases & Suites — Trumocracy

```
Document ID:   TC-TRUMOCRACY
Version:       1.1.1
Status:        In Review
Owner:         Ji-woo Park — Test Lead (tester)
Source:        MTP-TRUMOCRACY (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY (docs/05-product-backlog.md)
               SRS-TRUMOCRACY §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY §5.2, §11 (docs/03-architecture-design-sdd.md)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md)
Last updated:  2026-08-10
Changelog:     v1.1.1 (2026-08-10) — TC-3309 expected result updated to cite DES-068 party-switch exclusion (cycle-1 ISS-01); TS-CR1 Covers column corrected to include RISK-22..24 (ISS-02).
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
| **Pass (obs.)** | The implementing test was **executed by the tester in this session, 2026-08-09**, and passed. Applies to `packages/protocol` (82 tests), `services/indexer` (16 tests), `packages/sdk` (124 tests). |
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
| `packages/contracts` (L1/L2/L3) | *not executed — ~5 min runtime* | Inherited from Doc 06 §3/§5 |
| `apps/web` (component) | *not executed* | Suite exists: `UT-0700…UT-0742` |

**Observed total: 222 unit/component tests passing.** Inherited from Doc 06: 66 contract tests
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
| `TS-CR1` | CR-v1.1.0 — FR-062..073; RISK-22..24 | L3–L6 | FR-062..073 · BR-013 · RISK-22..24 | TC-3300–TC-3342 | 43 | 0 | 43 |
| | | | **Total** | | **298** | **143** | **155** |

**143 of 298 cases have an implementing automated test.** (43 new TC-3300..TC-3342 are all Blocked — no implementing code in this drop.) Of those 143, **72 were executed and
observed passing by the tester this session**; **55** are inherited-green contract cases; **16** are
`apps/web` component cases that exist but were not executed this session.

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
| `packages/circuits` | — | UT-2000…UT-2499 (reserved) | 0 | **No suite exists — circuits uncompiled** |

**Orphan check.** No `TC` in this document cites a `UT-####` that does not exist in the repository;
every `UT` cited above was located by identifier in a real test file. Conversely, the `UT` inventory
in Doc 06 §3 omits two real ranges — recorded as TD-07-01, not silently absorbed.

---

## 9. Execution log

| Run | Date | Build / commit ref | Suite | Result | Defects raised |
|---|---|---|---|---|---|
| R-01 | 2026-08-09 | trunk `claude/decentralized-political-party-fy8b1k` | `packages/protocol` (L0) | **82 / 82 pass**, 494 ms | none |
| R-02 | 2026-08-09 | same | `services/indexer` | **16 / 16 pass**, 467 ms | none |
| R-03 | 2026-08-09 | same | `packages/sdk` | **124 / 124 pass**, 2.35 s | none |
| — | 2026-08-09 | same | `packages/contracts` (L1/L2/L3) | **not executed this session** (~5 min); result inherited from Doc 06 §3/§5 | — |
| — | 2026-08-09 | same | `apps/web` | **not executed this session** | — |
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
| Cases designed | **298** |
| Cases with an implementing automated test | **143** (56%) |
| Cases executed and observed passing this session | **72** |
| Cases inherited green from Doc 06 (contract suite) | **55** |
| Cases automated but not executed this session (`apps/web`) | **16** |
| Cases **Blocked** (code, circuit, environment or instrument absent) | **140** |
| Cases **No mechanism** (the product has nothing to test) | **10** |
| Cases **Manual — not run** | **12** |
| Observed test failures | **0** |
| Open defects raised by this document | **2** (TD-07-01 Medium, TD-07-02 Low — both documentation) |

**Ten cases are "No mechanism". Each one is a requirement defect, not a testing defect**, and each
is carried into the RTM gap log (Doc 08 §7): TC-0010/TC-1041 (`FR-010` name-collision), TC-0037/
TC-1043 (`FR-008` residency cooldown), TC-1042 (`FR-018` dwell period), TC-1044 (`FR-023` churn
limit), TC-0039/TC-2721 (`FR-056` filtering register), TC-2601 (`FR-001` cross-type residual),
TC-2642 (`FR-004` per-region attestor cap, OPEN-02), TC-2715 (`FR-009` source independence,
OPEN-12), TC-2426 (`NFR-020` open-ballot flag freeze, OPEN-03).

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
| TC-3323 | First enrolment: Poseidon(stable_id_secret, enrolment_scope) derived in-circuit; four universal checks pass (issuer sig, freshness, region, correct derivation); only nullifier stored; identifier never leaves the circuit | US-0079 · FR-069 | Nullifier on record; no identifier in any store; all four in-circuit checks verified | **Blocked — Phase 2 (DES-069; personhood_enrol circuit not compiled, Doc 06 §7.2)** |
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
