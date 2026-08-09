# Test Strategy & Master Test Plan — Trumocracy

```
Document ID:   MTP-TRUMOCRACY
Version:       1.0.0
Status:        In Review
Owner:         Priya Raghunathan — Principal Architect
               (CLAUDE.md assigns Doc 04 to the architect; per-suite owners below are named individuals
                drawn from the Doc 02 §2.7 stakeholder table. There is no separately named QA Lead in
                the roster — recorded as OPEN-09.)
Approvers:     reviewer-qa · Engineering · SRE · Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md v1.0.0)
               BKLG-TRUMOCRACY (docs/05-product-backlog.md v1.0.0)
               ADR-001 … ADR-014 (docs/adr/)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md — authored concurrently; DES-###
               links are reconciled by the tester in Doc 08)
Last updated:  2026-08-09
```

> **Based on:** ISO/IEC/IEEE 29119 + IEEE 829. **Produced in:** Design (drafted before code).
> **Approved at:** Gate 2 (exit).
> This plan is written against the repository **as it actually exists on 2026-08-09**. Where a
> capability is required but not yet present, it is listed in §7.2 as *required, not yet present*
> with a named owner — never assumed into existence.

---

## 1. Introduction

### 1.1 Purpose & objectives

Trumocracy makes a small number of promises to a citizen that, if broken, are not bugs but harms:

- *your vote counted, exactly once, and nobody knows it was yours* (`FR-002`, `FR-030`, `NFR-001`);
- *nobody can prove how you voted, including you* (`FR-031`, `NFR-003`);
- *nobody — including us — can stop, edit or reverse what your party decided* (`FR-056`, `CON-003`);
- *it costs you nothing and you never meet a wallet* (`FR-060`, `NFR-005`).

The objective of testing is therefore narrower and harder than "the features work". It is:

1. **Prove the guarantees, not just the happy paths.** Most of the Must set (22 of 42 FRs, Doc 02
   §11) are *guardrails* — statements about what the system cannot do. §6 defines how absence is
   tested and, honestly, what that technique cannot establish.
2. **Prevent divergence between what the client predicts and what the chain does.** A citizen told
   "your proposal passed" who is then contradicted by the chain has been lied to by us. `TS-DIFF`
   (§5.4) exists solely for this and is the highest-value suite in the plan (ADR-011).
3. **Attack the system on purpose, once per named risk.** `RISK-01` … `RISK-16` each get a dedicated
   adversarial suite (§8), owned by a named person, with a stated quantitative pass criterion.
4. **Measure the non-functional promises rather than asserting them.** Cost, latency, accessibility
   and anonymity-set size are measured on the reference device profile and on real fee data (§9).
5. **Surface what we are not testing, and what a passing suite does not prove.** §12 and §5.5.

### 1.2 Test items

| Item | Location | Version basis |
|------|----------|---------------|
| Pure reference implementation | `packages/protocol/src/` (`constants.js`, `governance.js`, `party.js`, `regions.js`, `flags.js`, `index.js`) | trunk; 82 unit tests currently green (`UT-0001…`) |
| Solidity core & registries | `packages/contracts/src/` (`core/PersonhoodRegistry.sol`, `core/RegionRegistry.sol`, `core/VerifierRegistry.sol`, `core/FeatureFlags.sol`, `interfaces/IProofVerifier.sol`) | trunk; **no test workspace exists yet** — `packages/contracts/package.json` is absent although the root `package.json` declares `test:contracts` |
| Circom circuits | `packages/circuits/` — **not yet created** (ADR-005 §"circuit set" defines six circuits) | n/a |
| TypeScript SDK | `packages/sdk/` — **not yet created** (ADR-011) | n/a |
| Design system / client | `packages/ui/`, `apps/web/` — **not yet created** (ADR-012) | n/a |
| Independent verifier | `apps/verifier/` — **not yet created** (ADR-010, `FR-055`) | n/a |
| Off-chain services | `services/indexer/`, `services/relayer/` — **not yet created** (ADR-014) | n/a |
| Test harness | `tools/evm-harness/src/index.mjs` — in-process EVM: solc-js compile + EthereumJS execute, offline and deterministic | present, working |
| Layering guard | `tools/dep-guard/check.mjs` — enforces ADR-011 dependency direction; fails CI on violation | present, working |

**Build under test.** Every suite runs against a single trunk commit. There are no long-lived
branches (ADR-011). Incomplete capabilities ship dark behind the flags declared in
`packages/protocol/src/flags.js` and, where they touch the chain, behind `FeatureFlags.sol`.
**Every suite therefore runs in at least two flag configurations** — see §5.9.

### 1.3 Scope

**In scope.** All 61 FRs, all 26 NFRs, all 16 RISKs, all 12 CONs from Doc 02; the six circuits of
ADR-005; the fallback transport ladder of ADR-014; the exit/export path of ADR-010; the client
guarantees of ADR-012.

**Out of scope (not tested by us, with reason).**

| Not tested | Why |
|---|---|
| Correctness of an identity attestor's own document check | We consume an eligibility result and never see the document (`FR-003`, `CON-002`). We test our *handling* and the plurality invariant, not their KYC. |
| Correctness of national census / statistical sources | `CON-009` — we may not modify them. We test the median, the drift limit, the dispute window and the verified-resident floor (§8, `TS-ADV-12`). |
| The bn254 pairing precompiles, EthereumJS, solc, snarkjs, Circom internals | Third-party, independently audited. We pin versions and test our use of them. |
| Base / OP Stack L2 consensus and its upgrade keys | ADR-001 accepts this as inherited risk and re-opens it at Phase 4. We test our *fallbacks* (`TS-ADV-09`). |
| IPFS / Arweave durability | ADR-009. We test that a lapsed pin is recoverable from content addressing, not that pinning services stay up. |
| Passkey / secure-enclave implementations (Apple, Google, FIDO) | ADR-002. We test the fallback P-256 verifier path and the guardian path. |

**Features not to be tested at v1 (with reason).** `FR-005` (revocation/appeal), `FR-049`, `FR-050`,
`FR-052` (treasury), `FR-053` (fork) have **no backlog story** at Doc 05 v1.0.0 §12. All are
Should/Could. The tester MUST record them as **open non-Must RTM rows**, not as absent. Delegation
(`DELEGATION` flag, ADR-007 §5) ships off in all non-dev environments and is tested only to the
level of "the flag is off and the capability is unreachable".

### 1.4 References

Doc 01 PR-FAQ · Doc 02 SRS · Doc 03 SDD (§11 failure-mode analysis seeds `TS-EDGE`) · Doc 05 Backlog
(§8 non-functional backlog items `NF-01`…`NF-08`) · Doc 06 Coding & UT (unit-test standard, `UT-####`)
· Doc 07 Test Cases (`TC-####`) · Doc 08 RTM · ADR-001…ADR-014 · CLAUDE.md · ISO/IEC/IEEE 29119 ·
IEEE 829 · WCAG 2.2 Level AA · RFC 2119.

---

## 2. Test strategy

### 2.1 Quality objectives (tied to NFRs)

| Objective | NFRs | How we know it is met |
|---|---|---|
| A citizen is never told something the chain contradicts | `NFR-021` | `TS-DIFF` zero divergences across the full generated case space (§5.4) |
| A member cannot be identified or linked | `NFR-001`, `NFR-002`, `NFR-010`, `NFR-024` | `TS-PRIV` + `TS-ADV-06` + independent privacy audit `NF-01` |
| A vote cannot be sold or coerced | `NFR-003` | `TS-ADV-02` + independent adversarial audit; **see OPEN-01** |
| Nobody holds a lever | `NFR-009`, `NFR-017` | `TS-ABSENCE` (§6) + `TS-ADV-16` + security audit `NF-02` zero critical/high |
| It is free and fast on a cheap phone | `NFR-005`, `NFR-006`, `NFR-012`, `NFR-026` | `TS-COST` and `TS-PERF` measured on the reference profile, not modelled |
| Everyone can use it | `NFR-011`, `NFR-013`, `NFR-022`, `NFR-023` | `TS-A11Y` automated + manual screen-reader; `TS-I18N`; moderated usability at n≥200/locale |
| It keeps working when someone tries to switch it off | `NFR-007`, `NFR-014`, `NFR-020`, `NFR-025` | `TS-RES` + `TS-ADV-08` + `TS-ADV-09` + rollback drill |

### 2.2 Risk-based prioritisation

Effort is weighted by Doc 02 §10 `L × I`, then by *irreversibility of the harm*.

| Band | Risks | Share of test effort | Rationale |
|---|---|---|---|
| **Band A — irreversible harm to a person** | `RISK-02` (20), `RISK-06` (20), `RISK-07` (15) | ~35% | A deanonymised dissident cannot be un-deanonymised. No rollback exists for this class. |
| **Band B — irreversible harm to a party** | `RISK-01` (20), `RISK-04` (20), `RISK-03` (15), `RISK-10` (10) | ~30% | A captured charter or a forged electorate cannot be undone (`TD-04`: no override exists, by design). |
| **Band C — availability & access** | `RISK-08` (16), `RISK-09` (12), `RISK-11` (16), `RISK-05` (15) | ~20% | Recoverable, but disenfranchising while it lasts. |
| **Band D — institutional** | `RISK-12` (15), `RISK-16` (15), `RISK-13` (16), `RISK-14` (15), `RISK-15` (16) | ~15% | Slow-moving; mitigated more by design and disclosure than by test. |

Band A and Band B suites are **blocking at every promotion**, including local pre-push. Bands C and
D block promotion to staging and above.

### 2.3 Shift-left & automation approach

- **The rules are written as a testable reference implementation first.** `packages/protocol` is pure,
  dependency-free (enforced by `tools/dep-guard/check.mjs`) and runs in milliseconds. Every governance
  rule is expressed there, unit-tested there, and then differentially tested against Solidity. This
  is a deliberate inversion: the *specification executes*.
- **Acceptance criteria exist before code.** Doc 02 §8 already carries Gherkin for every Must
  requirement, and Doc 05 gives every story at least one adversarial scenario. Doc 07 converts these
  to `TC-####`; no `TC` may be invented that does not trace to a Gherkin block or an SDD §11
  failure mode.
- **Determinism over infrastructure.** The EVM harness compiles and executes in-process with a fixed
  genesis timestamp (`1_760_000_000n`), deterministic accounts, and no RPC. `npm test` on a fresh
  clone reproduces every contract result byte-identically, offline. This is why there is **no retry
  policy** for levels L0–L3 (§10.3).
- **Guardrails are automated first.** Doc 05 §10 sets a WIP limit of one guardrail story in review at
  a time. Correspondingly: a guardrail story is not Done until its capability-absence assertion
  (§6) exists, not merely its positive path.

### 2.4 Test design techniques

| Technique | Applied to | Example |
|---|---|---|
| **Equivalence partitioning** | tier rules, region depth, personhood tiers | `TIER.OPERATIONAL/POLICY/STRUCTURAL/CONSTITUTIONAL`; region depth 1–5 vs 0 vs 6 |
| **Boundary-value analysis** | every threshold constant in `constants.js` | quorum at `quorumBps-1 / = / +1`; tenure at `minTenureSeconds ∓1s`; surge at `GROWTH_TRIGGER_BPS` exactly 2000 vs 2001; `MIN_ANONYMITY_SET` 999/1000/1001; `ABSOLUTE_FLOOR_ENDORSEMENTS` 499/500/501; `SUPERSEDE_GRACE` at ±1s |
| **Decision tables** | `effectiveRules(tier, charter, surge)` — 4 tiers × {charter silent, stricter, weaker} × {surge, no surge} = 24 cells, all enumerated | `TS-UNIT`, mirrored in `TS-DIFF` |
| **State-transition testing** | `PARTY_STATE` (5 states, `TRANSITIONS` map) and `PROPOSAL_STATE` (8 states) | every legal transition asserted; **every illegal transition asserted to revert** — the illegal set is the larger and more important half |
| **Pairwise / combinatorial** | device × locale × network × flag-state matrix (§9, `NFR-026`) | reduces 8 locales × 6 device classes × 3 network profiles × 2 flag sets to a pairwise-covering set |
| **Property-based testing** | `tally()`, `petitionThreshold()`, `isSurgeActive()`, `resolveAnonymityScope()`, `isWithin()` | invariants: a tally never passes below its quorum; threshold is monotonic in population; `resolveAnonymityScope` never returns a scope smaller than `k`; `isWithin(x,x)` is true |
| **Metamorphic testing** | tallies and thresholds | relabelling options permutes the result identically; scaling all vote counts by n does not change pass/fail; adding an abstention never converts a pass to a fail via *approval* |
| **Adversarial / attack-tree** | `TS-ADV-01…16` (§8) | one tree per RISK, leaves become `TC-####` |
| **Capability-absence assertion** | every guardrail FR (§6) | ABI allowlist snapshot, bytecode selector scan, storage-layout snapshot |
| **Differential testing** | `packages/protocol` vs deployed contract (§5.4) | generated inputs replayed through both oracles |

---

## 3. Test levels

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
|---|---|---|---|---|---|---|
| **L0 — Pure unit** | governance rules, party/charter validation, region parsing, anonymity-scope resolution, flag resolution. No chain, no I/O, no mocks. | `packages/protocol/test/` | vitest 3.2.4 | Engineer (Doc 06) | Yes | pre-commit, pre-merge |
| **L1 — Contract unit** | one contract at a time, in the in-process EVM. Every custom error provoked. | `packages/contracts/test/unit/` *(to be created)* | vitest + `tools/evm-harness` | Engineer | Yes | pre-merge |
| **L2 — Contract integration** | multi-contract flows: `VerifierRegistry` → `PersonhoodRegistry` → party module; timelock-gated registry changes; `FeatureFlags` gating. | `packages/contracts/test/integration/` | vitest + harness | Engineer | Yes | pre-merge |
| **L3 — Differential** | `packages/protocol` reference vs deployed contract, over generated inputs. **The highest-value level in this system.** | `packages/contracts/test/differential/` | vitest + harness | Engineer + tester | Yes | pre-merge, blocking |
| **L4 — Circuit** | Circom circuits: positive, negative/malformed-witness, under-constraint probes, witness-generator differential, malleability, registry lifecycle. | `packages/circuits/test/` | circom + snarkjs + circomspect *(§7.2)* | Rafael Duarte | Yes | pre-merge (fast subset), nightly (full) |
| **L5 — SDK & client** | proof orchestration, transaction building, ERC-4337 UserOp assembly, the fallback transport ladder, artifact-hash verification, component a11y, i18n. | `packages/sdk/test/`, `packages/ui/test/`, `apps/web/test/` | vitest + headless browser *(§7.2)* | Engineer | Yes | pre-merge |
| **L6 — System / E2E** | whole citizen journeys against a real chain: devnet, then testnet. Includes the verifier, the indexer and the relayer. | `tests/e2e/` | headless browser driver *(§7.2)* | Tester | Yes | pre-release |
| **L7 — Manual & exploratory** | usability (`NFR-022`), screen-reader passes (`NFR-011`), locale review (`NFR-013`), plain-language review (`NFR-023`), red-team exercises (`NF-03`), external audits (`NF-01`, `NF-02`). | `docs/07-test-cases.md` + audit reports | — | Nadia Hassan / Grace Mbeki / Rafael Duarte | No | Gate 2 |

**Why the levels sit where they do.** ADR-011 makes `packages/protocol` pure precisely so L0 can be
fast and L3 can be meaningful. If `protocol` ever grows a dependency on a chain client, L3 stops
being a comparison of two independent implementations and becomes a comparison of one implementation
with itself. `tools/dep-guard/check.mjs` fails CI on exactly that, and its `PURE` set is therefore a
**test-strategy control, not a lint rule**.

---

## 4. Test types

| Type | Used? | How, and where |
|---|---|---|
| **Functional** | Yes | `TS-FUNC`, L0–L6. Every FR has at least one positive `TC` traced from Doc 02 §8 Gherkin. |
| **Negative / edge** | Yes | `TS-EDGE`, seeded from SDD §11 failure-mode analysis. Every custom error in every contract must be provoked by name. |
| **Differential** | Yes | `TS-DIFF`, L3. §5.4. |
| **Regression** | Yes | Full L0–L3 on every commit (they are seconds, not minutes). L4–L6 affected-target selection per ADR-011 §Consequences, full suite nightly and on release candidates. |
| **Smoke / sanity** | Yes | `TS-SMOKE`: enrol → endorse → activate → join → propose → vote → tally, on devnet, in under 5 minutes. Runs after every deployment to any environment. |
| **Exploratory** | Yes | `TS-EXPL`: time-boxed charters, one per epic, focused on state combinations the automated suites do not reach (interrupted flows, clock skew, back-button, multi-device). Session notes are artifacts; defects found here must produce a new automated `TC`. |
| **Performance (client)** | Yes | `TS-PERF`, `NFR-006`, `NFR-012`. Reference device profile. §9. |
| **Load** | Yes | `TS-LOAD`, `NFR-008`. Indexer and relayer under 5,000 governance actions/s; tree-insert benchmark to 50M leaves. |
| **Stress** | Yes | `TS-LOAD` group S: sponsorship-pool exhaustion, circuit-breaker trip (ADR-014, 3× p99), proving-queue saturation on the reference device. |
| **Soak / endurance** | Yes | 72-hour staging soak covering a complete T3 proposal lifecycle (14d discussion compressed under a test clock + real 30d timelock simulated by chain time-warp on devnet). Memory-growth ceiling on the client: < 10% RSS drift over the soak. |
| **Scalability** | Yes | `TS-LOAD`, `NFR-008` (Should). LeanIMT depth-32 insert cost measured, not extrapolated. |
| **Security (authZ, IDOR, pen)** | Yes | `TS-SEC` + `TS-ABSENCE` + `TS-ADV-*`. Every privileged entrypoint gets a negative-authority test for every non-authorised caller class. Independent penetration test as part of `NF-02`. |
| **Privacy / data** | Yes | `TS-PRIV` + `TS-DATA`. Data-inventory check fails the build (Doc 05 US-0002 AC). §10.6. |
| **Accessibility (WCAG 2.2 AA)** | Yes | `TS-A11Y`. Automated rule engine in CI on every primary flow + manual screen-reader passes per release candidate. §9 `NFR-011`. |
| **Compatibility / cross-device** | Yes | `TS-COMPAT`, `NFR-026`. Pairwise matrix. |
| **Localisation / i18n** | Yes | `TS-I18N`, `NFR-013`. 8 locales incl. ≥1 RTL; pseudo-localisation; string-coverage gate at 100%. |
| **Resilience / chaos** | Yes | `TS-RES`. Sequencer stall, indexer lie, relayer outage, gateway block, IPFS pin loss, coordinator-committee member loss (3 of 7). |
| **Disaster recovery** | Yes | `TS-EXIT` (ADR-010 `TC-EXIT-*`): full party export → reconstitute on an independent deployment → verify identical roots and tallies. Run in CI, not documented as theoretical. |
| **Usability** | Yes | `NFR-022`, L7, n ≥ 200 per launch locale, moderated + unmoderated. |
| **Compliance** | Partial | `NFR-015` legal sign-off per jurisdiction is an *attestation*, not a test. What we test: the pre-enrolment disclosure is present and acknowledged (`SCR-01`), and an erasure request produces the "no personal data exists" demonstration plus credential deactivation. |
| **Upgrade / migration** | Yes | `TS-UPG`: core v1 → v2 party migration rehearsed on testnet (ADR-010); circuit supersede + `SUPERSEDE_GRACE` window; region `schemeVersion` advance with non-retroactivity (`FR-007`). |
| **Contract / API** | Yes | `TS-ABI`: ABI allowlist snapshot (§6), indexer GraphQL schema snapshot, SDK↔contract ABI drift check, public read-interface contract tests. |
| **Mutation testing** | Partial — manual drill | No mutation tool is present and none is mandated. Instead: a **quarterly seeded-defect drill** — 20 defects are injected into `packages/protocol` and the core contracts by a person who did not write the tests; ≥ 90% must be caught by one CI run. Misses become new `TC`s. This is cheaper than a tool and directly measures the thing a tool proxies. |
| **Fuzzing (property)** | Yes | Generator-driven inputs in L0 and L3 (§5.4). No separate fuzzing binary is required. |
| **Formal verification** | Deferred — stated | ADR-010 says the core is "formally specified for its critical invariants". At v1 we express those invariants as executable property tests, not as machine-checked proofs. Recorded honestly in §12: this is weaker than formal verification and we do not claim otherwise. |

---

## 5. Test levels in detail

### 5.1 L0 — Pure unit (`packages/protocol`)

Runner: `vitest run` (`npm run test:protocol`). Currently 82 passing assertions across
`test/governance.test.js` and `test/party-and-regions.test.js`, numbered `UT-0001…`.

Required coverage of behaviour (not merely of lines):

- `effectiveRules` — all 24 decision-table cells, including `CHARTER_WEAKER_THAN_FLOOR` and
  `TENURE_BELOW_FLOOR` on the exact boundary. The **ratchet-up-only** rule is a `RISK-04` defence and
  gets boundary tests at `floor-1`, `floor`, `floor+1` for every parameter.
- `isSurgeActive` — the window/decay double loop, including the `memberCount === 0` founding case and
  the exactly-`GROWTH_TRIGGER_BPS` boundary (currently `>`, so 20.00% does **not** trigger — this
  asymmetry must be asserted deliberately so a later refactor cannot flip it silently).
- `tally` — abstention semantics (counts toward quorum, not toward approval), integer-floor rounding
  at every threshold boundary, `snapshotMembers === 0`, and rejection of non-integer/negative inputs.
- `isEligible` — all five outcome reasons; the `leftAt <= snapshotAt` boundary.
- `schedule` / `stateAt` — every `PROPOSAL_STATE` reachable, and the currently-degenerate branch in
  `stateAt` where both arms of the final ternary return `SUCCEEDED_TIMELOCK` (recorded as a
  low-severity finding for Doc 06; the test must pin observed behaviour and flag the redundancy).
- `petitionThreshold` — the `max(byPopulation, byVerified, absoluteFloor)` floor is the `RISK-12`
  deflation defence; tested with `eligiblePopulation = 0`, `1`, and a value below `verifiedResidents`.
- `validateVision` / `validateCharter` — all eight `PILLARS` mandatory; `MIN_PILLAR_CHARS = 280`
  boundary at 279/280/281 (see OPEN-07 on what this does and does not test); `FORBIDDEN` rejections
  of `membershipRequiresApproval` and non-1p1v `voteWeighting`.
- `parseRegion` / `isWithin` / `ancestors` / `resolveAnonymityScope` — malformed paths, depth 6,
  non-ISO country, and the escalation ladder including the "even the country is too small → return
  null → the action must not publish" terminal case.
- `validateIssuerSet` — `TOO_FEW_ISSUERS`, `NO_NON_STATE_ISSUER` (the ADR-003 invariant).
- `isEnabled` / `permanentFlags` — every flag × every environment; and an assertion that
  `MACI_VOTING.defaults.prod === false` is **surfaced to the user**, per its own description
  ("the UI must say so"). See OPEN-01.

### 5.2 L1/L2 — Contract unit & integration (EVM harness)

The harness (`tools/evm-harness/src/index.mjs`) gives: multi-file solc compilation with
`node_modules` import resolution, PoseidonT3 library linking at the deterministic address
`0x3333333C0A88F9BE4fd23ed0536F9B6c427e3B93`, deploy/call/read with viem ABI encoding, event
decoding, revert-reason and custom-error decoding, `warp()`/`mine()` block-time control, `etch()`
for standing up mocks at fixed addresses, and `snapshot()`/`revertTo()`.

**Harness rules, adopted to keep L1–L3 deterministic (these are flake-prevention controls, §10.3):**

1. **Construct a fresh `Chain` per test.** Do not rely on `snapshot()`/`revertTo()` for isolation.
   `snapshot()` restores a state root and the clock but is not a general-purpose journal, and a test
   suite whose isolation depends on it will fail in ways that look like flakes.
2. **Assert on `chain.timestamp`, never on `chain.blockNumber`.** `warp(seconds)` advances the block
   number by an approximation (`seconds/2`); block-number assertions are brittle by construction.
   Every governance rule in this system is expressed in seconds, so this costs nothing.
3. **`gasUsed` from the harness is execution gas only.** `Chain._call` goes through `vm.evm.runCall`,
   which excludes the 21,000 intrinsic cost and all calldata cost, and models no L1 data fee.
   `TS-COST` (§9, `NFR-005`) MUST add calldata cost and the ADR-001 blob-fee model on top, and MUST
   be confirmed against real fees on testnet. Harness gas is a **regression detector**, not a price.
4. **The harness runs `Mainnet`/`Cancun`, not an OP Stack L2.** L2-specific behaviour — the L1 fee
   component, `OptimismPortal.depositTransaction` force-inclusion, sequencer ordering — is **not**
   covered here and is only exercised at L6 on devnet/testnet. `TS-ADV-09` therefore cannot run in
   CI at L1/L2, and the plan does not pretend it can.
5. **Mock verifiers must be explicit.** `IProofVerifier` mocks used to drive `PersonhoodRegistry`
   tests are named `MockVerifierAlwaysTrue` / `MockVerifierAlwaysFalse` / `MockVerifierSignalCount(n)`
   and are **forbidden** in any suite that claims to test a ZK property. A green
   `PersonhoodRegistry` suite against `MockVerifierAlwaysTrue` proves the registry's bookkeeping and
   nothing whatsoever about proof soundness. This distinction is restated in every affected `TC`.

**Required L1 coverage per contract.**

| Contract | Must be provoked by name |
|---|---|
| `PersonhoodRegistry` | `NotTimelock`, `UnknownIssuer`, `IssuerInactive`, `AlreadyEnrolled`, `NullifierAlreadyUsed`, `InvalidProof` (all three causes: wrong signal count, `publicSignals[2] != issuerId`, verifier false), `UnknownRoot`, `IssuerEpochCapReached`, `ZeroAddress`, `BadTier`. Plus: epoch rollover resets `u.count`; `maxEnrolmentsPerEpoch == 0` means unlimited; `_recordRoot` eviction at exactly `ROOT_HISTORY = 64` inserts, and that the 65th insert un-knows the 1st root; `issuerSetValid()` true/false around the ADR-003 invariant. |
| `RegionRegistry` | `NotTimelock`, `NotAuthorisedAttester`, `RegionExists`, `UnknownRegion`, `RegionIsFrozen`, `TooFewSources`, `DriftTooLarge`, `DisputeWindowOpen`, `NoPending`, `ZeroAddress`, `BadPath`. Plus: `regionIdOf` **must equal** `keccak256(regionPreimage(path, v))` from `packages/protocol/src/regions.js` — a `TS-DIFF` case, not a unit case, because it is a cross-implementation agreement; median with odd and even source counts; drift limit at exactly ±5%; `MIN_POPULATION_SOURCES = 5` boundary; dispute window at `±1s`; `anonymitySetSufficient` at 999/1000. |
| `VerifierRegistry` | `NotTimelock`, `UnknownCircuit`, `ZeroAddress`, `EmptyCeremony`, `DuplicateZkey`. Plus: `verify()` walks versions newest-first, skips retired versions, skips on `publicSignalCount()` mismatch; a proof against a superseded key verifies at `retiredAt - 1s` and fails at `retiredAt`; registering a third version retires only the second. |
| `FeatureFlags` | `NotTimelock`, `NotEmergencyDisabler`, `FlagDisabledError`, `ZeroAddress`. Plus the **blast-radius pin** — see OPEN-03 and `TS-ADV-16`. |

### 5.3 L4 — Circuits

Covered in full by §7 (the ZK doctrine). Circuits are not tested by line coverage; that metric is
meaningless for a constraint system.

### 5.4 L3 — Differential testing (`TS-DIFF`) — the load-bearing suite

**Why it exists.** ADR-011 states it plainly: a divergence between what the client predicts and what
the chain does is how a citizen gets told their vote counted when it did not. `packages/protocol` is
what the UI, the indexer and the verifier all compute from; the Solidity contracts are what actually
decides. Two implementations of the same rules will drift. This suite is the only thing that catches
the drift before a citizen does.

**Construction.** For each rule pair, a generator produces inputs across the boundary space; both
oracles are evaluated; results must be **bit-identical**, including the *reason* for a rejection, not
merely the pass/fail bit.

| Rule pair | Reference (`packages/protocol`) | On-chain | Generator space |
|---|---|---|---|
| Region identity | `regionPreimage()` + keccak | `RegionRegistry.regionIdOf()` | all depths 1–5, every segment shape accepted by `SEGMENT_RE`, scheme versions 1…10⁴ (exercises `_u32ToString`) |
| Anonymity scope | `resolveAnonymityScope()` | `RegionRegistry.anonymitySetSufficient()` + the escalation performed by the party module | resident counts 0…5,000 across a 5-level tree |
| Petition threshold | `petitionThreshold()` | petition module | population 0…10⁹, verified 0…10⁷, bps 50…2000, incl. `absoluteFloor` domination |
| Tier rules | `effectiveRules()` | party governance module | 4 tiers × charter {silent, stricter, weaker} × surge {on, off} |
| Tally | `tally()` | party governance module | for/against/abstain 0…10⁶, snapshotMembers 0…10⁷, every quorum/approval boundary ±1 |
| Eligibility | `isEligible()` | `tenure_member` circuit public-input construction + module check | joinedAt/leftAt/snapshotAt orderings, tenure ±1s |
| Surge detection | `isSurgeActive()` | party growth accounting | membership histories with 2…200 samples, growth −50%…+500% |
| Schedule | `schedule()` | proposal module | createdAt across epoch boundaries, requestedVotingSeconds below and above `minVotingSeconds` |
| Party state machine | `canTransition()` | party module | all 25 (from,to) pairs including all 20 illegal ones |
| Charter validation | `validateCharter()` | charter module | every `FORBIDDEN` and `BELOW_FLOOR` case |

**Rounding is a first-class hazard.** JavaScript `Math.floor((participation * BPS) / snapshotMembers)`
on IEEE-754 doubles and Solidity integer division on `uint256` agree only while values stay below
2⁵³. `NFR-008` targets 50,000,000 enrolled and 10,000,000 in a ballot window; products like
`participation * BPS` reach 10¹¹ — safe — but `eligiblePopulation * thresholdBps` at 10⁹ × 2000 =
2×10¹² is also safe, while a future denominator or a bps widening is not. **Mandatory:** `TS-DIFF`
includes an explicit precision suite that drives both oracles to 2⁵³ ± 1 and asserts either agreement
or an explicit, tested refusal. A silent disagreement here mis-decides an election.

**Pass criterion.** Zero divergences. A single divergence is Sev-1 and blocks merge — it is not
triaged for user impact, because the user impact is "a citizen was told the wrong thing about
democracy".

### 5.5 What a green suite does and does not establish

Stated here so it is not overclaimed at Gate 2.

| Green suite | Establishes | Does **not** establish |
|---|---|---|
| L0 pure unit | the rules, as written in JS, behave as specified over the tested domain | that the contracts agree; that the rules are the right rules |
| L1/L2 contract | the contract's bookkeeping, authorisation and error paths behave as specified in a deterministic EVM | anything about ZK soundness (mocked verifiers), anything about L2 behaviour, anything about real gas cost |
| L3 differential | the two implementations agree over the generated domain | that both are correct — two implementations can share a misreading of the requirement. Mitigated by Doc 07 tracing every `TC` to a Doc 02 Gherkin block written by the product owner, not by the engineer |
| L4 circuit | the circuit is satisfiable honestly; enumerated dishonest witnesses are rejected; static analysis is clean | **soundness** or **zero-knowledge**. See §7.4 |
| L5/L6 client & E2E | the journeys complete and the guarantees hold in the tested configurations | behaviour under an adversary who controls the device, the network operator, or the user's social environment |
| `TS-ABSENCE` | the enumerated capabilities are absent from the enumerated surfaces | that no capability exists. See §6.4 |

---

## 6. Capability-absence testing

Several of Trumocracy's central guarantees are **the absence of a function**: `FR-021` (no weighting
mechanism), `FR-035` (no transfer/delegation), `FR-056` (no operator discretion), `NFR-017` (no
unilateral rule change), `CON-003` (no pause, no admin, no override), `CON-006` (no transferable
instrument), and the four ADR-013 §3 compulsion rows. These cannot be tested by exercising a feature.
They are tested by *proving a surface is empty* — which is a fundamentally weaker kind of evidence,
and we treat it as such.

### 6.1 Technique 1 — ABI allowlist snapshot (primary control)

For each contract, the harness's `compile()` returns `.abi`. `TS-ABSENCE` computes the **exact set of
external/public function selectors** and compares it against a checked-in snapshot
(`packages/contracts/test/absence/<Contract>.selectors.json`). Any addition, removal or signature
change fails CI and requires a reviewed snapshot update.

This is an **allowlist**, deliberately, because a denylist can only catch capabilities we thought of.
The snapshot file is a governance artifact: changing it is a reviewable event, and for the immutable
core (ADR-010) it is a one-way door.

Snapshot for `FeatureFlags` today, as an illustration of the granularity required:
`timelock()`, `emergencyDisabler()`, `isEnabled(bytes32)`, `requireEnabled(bytes32)`,
`enable(bytes32)`, `disable(bytes32,string)`. Nothing else. `PersonhoodRegistry` today exposes
`spendNullifier(bytes32,uint256)` **with no caller restriction** — the snapshot pins that fact and
`TS-ADV-01` tests its consequences (see OPEN-05).

### 6.2 Technique 2 — Denylist scan over ABI *and* deployed bytecode (secondary control)

- **ABI name scan.** Fails on any function whose name matches a forbidden fragment:
  `transfer`, `approve`, `permit`, `delegate`, `proxy`, `pause`, `unpause`, `upgrade`, `setOwner`,
  `setAdmin`, `mint`, `burn`, `blacklist`, `ban`, `suspend`, `expel`, `remove*Member`, `force*`,
  `setTally`, `adjustCount`, `setThreshold`, `waive`, `override`, `emergency*` (excluding the single
  reviewed `emergencyDisabler` reader), `renounce` (excluding the intentional `renounceProtocolKeys`
  of ADR-010, which is asserted to be irreversible rather than absent).
- **Bytecode selector scan.** Compute `keccak256` of a list of forbidden signatures, take the 4-byte
  selectors, and scan `deployedBytecode` (already returned by the harness) for `PUSH4` occurrences.
  This catches a function reachable through a `fallback` or an assembly dispatcher that never appears
  in the ABI — the most common way an "absent" capability is actually present.
- **Opcode scan.** Assert the immutable core's `deployedBytecode` contains no `DELEGATECALL` (`0xF4`),
  no `SELFDESTRUCT` (`0xFF`), and no `CALLCODE` (`0xF2`). A core with no `DELEGATECALL` cannot be a
  proxy, which is the mechanical form of "no upgrade key" (`CON-003`, `RISK-16`).

### 6.3 Technique 3 — Storage-layout snapshot

solc can emit `storageLayout`; the harness currently requests only
`['abi','evm.bytecode.object','evm.deployedBytecode.object']` in `outputSelection`. **Required harness
extension (Doc 06, engineer):** add `storageLayout` to the output selection so `TS-ABSENCE` can:

- snapshot each core contract's slot layout and fail on any change;
- assert that no slot is typed as an owner/admin/pauser address;
- assert that `immutable` fields (`timelock`, `verifiers`, `emergencyDisabler`) are genuinely
  immutable — i.e. occupy no storage slot at all;
- support the `TS-UPG` migration suite, which must prove a v1→v2 core migration preserves meaning.

### 6.4 Technique 4 — Negative-authority matrix, and Technique 5 — review checklist

For every privileged entrypoint (`onlyTimelock` on `RegionRegistry`; the `msg.sender != timelock`
guards on `PersonhoodRegistry.registerIssuer` / `deactivateIssuer`, `VerifierRegistry.register`,
`FeatureFlags.enable`; the dual guard on `FeatureFlags.disable`), a matrix test asserts that **every**
non-authorised caller class reverts: deployer, a party founder, an office-holder, an attester, an
issuer, a paymaster, the emergency disabler (where not authorised), and an arbitrary EOA.

Technique 5 is a **human review checklist**, run by reviewer-qa at merge and by the external auditor
at `NF-02`, because the absence claims that matter most are about code nobody has written yet. Its
questions are fixed: *does this change add a caller who can decide something? does it add a field
that could hold a person? does it add a path that reaches a result after that result was published?*

### 6.5 The honest limits of this technique

**This must be stated at Gate 2 alongside the green result, not instead of it.**

1. **Absence in the ABI is not absence in the system.** Capability-absence tests bound the *on-chain
   core*. They say nothing about the gateway, the indexer, the relayer, DNS, the app store, or the
   hosting provider — all of which can censor a citizen without touching a contract. ADR-014's
   "the indexer is a cache, never an authority" is enforced by client-side re-verification, which is
   an L5/L6 test, not an absence test.
2. **An allowlist snapshot is only as good as its review.** The control is *"a human deliberately
   approved this new selector"*. If review degrades, the control degrades silently.
3. **A denylist catches shapes, not intents.** `function reconcile(bytes32,uint256)` can do anything.
   This is exactly why the allowlist is primary and the denylist secondary.
4. **Bytecode scanning cannot see across a call boundary.** A capability implemented in a contract
   added later through a timelocked registry is invisible to a scan of today's bytecode. The control
   there is the 30-day timelock and the published diff (ADR-010) — governance, not test.
5. **A storage-layout snapshot binds one compiled artifact.** The production control is different and
   stronger: the deployed bytecode hash at the pinned address must equal the hash of the audited
   artifact, verified by anyone (`NFR-021` reproducible builds). Include that check in `TS-ABSENCE`
   against devnet/testnet/production deployments, not only against local compilation.
6. **No test can prove the absence of a legal or social capability.** A court can order a sequencer;
   a state can compel an attester; an employer can stand behind a voter. ADR-013 §3 answers the first
   by making us genuinely powerless; §12 of this plan records the rest as residual risk we do not
   test and do not claim to have solved.

---

## 7. The zero-knowledge test doctrine

ADR-005 states the problem exactly: *"an under-constrained circuit passes all positive tests, so
positive tests prove nothing."* This section makes that a mandatory test contract, not a suggestion.

### 7.1 Mandatory test classes (all six are required for every circuit)

The circuit set from ADR-005: `personhood_enrol`, `residency_member`, `party_member`,
`tenure_member`, `vote_message` (MACI), `tally` (MACI).

**Z1 — Positive.** An honest witness produces a proof that verifies both off-chain (`snarkjs`) and
on-chain (through `VerifierRegistry.verify`). *Establishes satisfiability and correct wiring. Nothing
more.*

**Z2 — Negative / malformed witness (the required class).** Each circuit ships a
`claims.json` enumerating every constraint it asserts (e.g. *"`Nₐ = Poseidon(s, actionScope)`"*,
*"`leaf ∈ tree(regionId)`"*, *"`validUntil > now`"*, *"`tier ≥ minTier`"*). For **every claim**, at
least one test constructs a witness that violates it and asserts the result is either a
witness-generation failure or a proof that fails verification. **CI fails when a claim in
`claims.json` has no corresponding negative test.** This coverage metric — *claims with a negative
test / total claims = 100%* — replaces line coverage for L4.

**Z3 — Under-constraint probes.**
- `circomspect` runs in CI over every `.circom` source. **Any finding at severity ≥ Warning fails the
  build.** A waiver requires a recorded architect decision in an ADR, not a code comment.
- `snarkjs r1cs info` output (constraint count, public/private signal counts) is snapshotted; an
  unexplained drop in constraint count is the classic signature of a removed constraint and fails CI.
- Targeted probes on every signal assigned with `<--` and not subsequently constrained with `===`:
  attempt to produce two distinct witnesses satisfying identical public signals. If a second witness
  is found, the circuit is under-constrained and the finding is Sev-1.

**Z4 — Differential witness generation.** The WASM witness generator is run against an independent
reference implementation of the same computation living in `packages/protocol` (pure JS
Poseidon/LeanIMT path, no snarkjs dependency — preserving the `PURE` guarantee of
`tools/dep-guard/check.mjs`). Any divergence in a computed signal is a defect. This is the L4 analogue
of `TS-DIFF` and it is the only class here that can catch a *correct-looking but wrong* circuit.

**Z5 — Proof malleability and wrong-public-signal.**
- **Wrong signals:** a valid proof re-submitted with any altered public signal must fail.
- **Cross-circuit:** a proof for circuit A submitted to circuit B's verifier must fail — including
  the case where both have the same `publicSignalCount`, since `VerifierRegistry.verify` currently
  uses signal count as its only pre-filter (`if (v.verifier.publicSignalCount() != publicSignals.length) continue;`).
- **Groth16 re-randomisation:** a proof can be re-encoded into a different byte string proving the
  same statement. **Therefore replay protection MUST rest on the nullifier, never on proof bytes.**
  Test: re-randomise a proof, resubmit with the same nullifier, assert `NullifierAlreadyUsed` /
  `AlreadyEnrolled`. Test the converse too: a fresh nullifier with a re-randomised proof must
  succeed, so that re-randomisation is not accidentally used as a soundness barrier.
- **Malformed group elements:** points not on the bn254 curve, points not in the correct subgroup,
  the point at infinity, and public signals ≥ the bn254 scalar field modulus. All must be rejected,
  not merely produce `false` by accident.
- **Zero/identity witness:** `identityCommitment = 0`, `nullifier = 0`. Note that
  `PersonhoodRegistry._recordRoot` uses `evicted != 0` as a sentinel, so a zero root would corrupt
  the rolling window — assert a zero root is unreachable.

**Z6 — Ceremony binding.** `snarkjs zkey verify` against the published `.r1cs`; the on-chain
`VerifierRegistry.current(circuitId).zkeyHash` must equal the hash of the published zkey; the client
must **refuse to prove** against an artifact whose hash is not the registered one (ADR-012 §3,
`DES-052`). Contributor count (≥ 500) and beacon presence are verified by **transcript inspection**,
which is an audit activity, not a test.

**Z7 — Verifier lifecycle.** `SUPERSEDE_GRACE = 30 days`: a proof against a superseded key verifies at
`retiredAt − 1s` and fails at `retiredAt`; `DuplicateZkey` is rejected; `UnknownCircuit` reverts;
registering a third version does not resurrect the first.

### 7.2 Circuit tooling

`circom`, `snarkjs` and `circomspect` are mandated by ADR-005 §"Bad / accepted risk" but are **not
present in the repository today**. See §11.2 (required, not yet present). Their CI invocation must be
offline and pinned, consistent with the harness's design philosophy: `npm test` on a fresh clone
reproduces every result.

### 7.3 Test data for circuits

Witnesses are generated from a deterministic synthetic-identity generator seeded from a fixed value.
**No real document hash, no real eID, no real biometric derivative may ever be used as circuit test
input, in any environment, including a developer's laptop** (`CON-002`, §10.6).

### 7.4 What a passing circuit suite establishes — and what it does not

**Does establish:**
- the circuit is satisfiable by an honest witness and its on-chain verifier is correctly wired and
  correctly registered;
- the specific dishonest witnesses enumerated in `claims.json` are rejected;
- static analysis found no *known* under-constraint pattern;
- the WASM witness generator agrees with an independent implementation on the tested domain;
- proofs are not accepted for the wrong statement, the wrong circuit, or a spent nullifier.

**Does not establish:**
- **Soundness.** No finite suite proves that *no* malicious witness exists. Only the two independent
  audits per circuit required by ADR-005 approach this, and an audit is not a proof either.
- **Zero-knowledge.** Every test in §7.1 could pass while the proof leaks the witness. Privacy is
  established by the cryptographic argument and by `NF-01`/`NF-02`, never by L4.
- **Setup integrity.** A compromised phase-2 ceremony produces forged proofs that verify perfectly.
  This is undetectable by test, by construction. ADR-005 bounds the blast radius (forgery, not
  deanonymisation); `TS-ADV-10` tests the *containment and response*, not the *detection*.
- **That the circuit computes the right thing.** Z4 catches disagreement between two implementations
  of the same intent; it cannot catch a shared misreading of `FR-002`.

**Gate-2 rule:** circuit test results MUST NOT be presented as evidence of soundness. The evidence for
soundness is `NF-02` (two independent audits per circuit, zero critical/high open) and `CON-012` (no
bespoke unaudited constructions). This is written here so that a green dashboard cannot be mistaken
for a security argument.

---

## 8. Adversarial & security suites — one per RISK

Sixteen suites, one per `RISK-01`…`RISK-16`. Each has a named owner from Doc 02 §2.7 and a
quantitative pass criterion. Where a suite is expected to *fail* against the design as currently
recorded, that is stated — an adversarial suite that is written to pass is not an adversarial suite.

### TS-ADV-01 — Sybil flood (`RISK-01`) · Owner: Marcus Adeyemi

| Case | What it does | Pass criterion |
|---|---|---|
| A-01.1 Issuer flood | A compromised tier-1 issuer mints to and past `maxEnrolmentsPerEpoch` (`EPOCH = 1 days`) | `IssuerEpochCapReached`. **Quantitative:** credentials mintable in the 48-hour expedited-removal window (ADR-003) MUST be < `PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS` (500) and < the threshold of the smallest launch region. If it is not, the epoch cap is set wrong and the finding is Sev-1. |
| A-01.2 Same human, same issuer | Re-enrol with the same `issuerNullifier` | `AlreadyEnrolled` |
| **A-01.3 Same human, two issuers** | One human enrols via an e-passport issuer *and* a social-graph issuer | **Exactly one active credential (`FR-001`, `BR-006`).** On the ADR record as it stands, `Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)` is scoped **per issuer**, so this produces two independent identity commitments and two votes. **This case is expected to fail today. It is the single highest-value test in the plan. Recorded as OPEN-04 — a Gate-2 blocker for the architect to close in Doc 03.** |
| A-01.4 Nullifier reuse across scopes | Same `Nₐ` submitted for scopes S and T | Both succeed (scopes are independent) and neither reveals the other — this is the *correct* behaviour and is asserted so a later "fix" cannot break unlinkability |
| A-01.5 Unauthorised nullifier burn | Any EOA calls `PersonhoodRegistry.spendNullifier(scope, n)` directly, pre-burning a nullifier a legitimate citizen would need | Currently **unrestricted** — see OPEN-05. A griefer who can predict or observe a nullifier can deny that citizen the action. Expected to fail today; Sev-1. |
| A-01.6 Sybil economics | Simulated attacker acquires N synthetic credentials and attempts to sell the resulting votes | Zero transferable instruments exist (`TS-ABSENCE` cross-reference, ADR-007 §6) |
| A-01.7 Endorsement inflation | Flood endorsements on a live petition | Threshold floor (`max(byPopulation, byVerified, 500)`) plus the activation dwell period defeat it; `TS-ADV-12` covers the denominator half |

### TS-ADV-02 — Vote-buying & coercion, receipt construction (`RISK-02`) · Owner: Aisha Nkemdirim

| Case | What it does | Pass criterion |
|---|---|---|
| A-02.1 Fully cooperating voter | The voter *wants* to prove their choice and is given every artefact they possess: transaction hash, UserOp hash, IndexedDB contents, the encrypted message ciphertext and its salt, the session key, the passkey assertion, every screenshot, every notification, the client's local cache | Nothing distinguishes the actual choice from any other admissible choice (`FR-031`, `NFR-003`) |
| A-02.2 Key-change indistinguishability | A classifier with the full public message queue tries to separate key-change messages from vote messages | Advantage ≤ chance (ADR-006 §3). Measured over ≥ 10⁴ synthetic ballots |
| A-02.3 Device seized after voting | Adversary has the unlocked device post-vote | Cannot determine the choice; the confirmation screen is identical for every option (ADR-012 §7) |
| A-02.4 Coercer watches, voter defects | Coerced vote, then a panic re-vote (`DES-063`) | Only the last ballot counts; nothing in the public record, the device or any notification indicates a replacement occurred or how many were cast (`FR-032`) |
| A-02.5 Buy the account, not the vote | Adversary purchases the phone + passkey + guardian set | This is the acknowledged residual (ADR-006). Test the *detection* half: bulk device-transfer anomaly patterns are surfaced. We do **not** claim to prevent it (§12) |
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it. **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** |

### TS-ADV-03 — Flash-governance takeover (`RISK-03`) · Owner: Rafael Duarte

The assertion here is **structural impossibility**, not resistance. ADR-007 removes the attack
surface rather than raising its cost, so the suite is written to prove *there is nothing to acquire*.

| Case | Pass criterion |
|---|---|
| A-03.1 Unlimited capital, one block | An attacker with unbounded synthetic funds executes every acquisition attempt reachable in a single transaction and a single block. **Voting power acquired = exactly 0.** |
| A-03.2 No transferable surface | `TS-ABSENCE` allowlist proves membership has no `transfer`, `approve`, `permit`, `delegate`, `assign` or `inherit` selector anywhere in the ABI or the deployed bytecode |
| A-03.3 Snapshot integrity | Joining, maturing or changing residency after the proposal's snapshot confers zero power (`FR-028`, `isEligible` reasons `JOINED_AFTER_SNAPSHOT`, `TENURE_TOO_SHORT`) |
| A-03.4 Mid-vote quorum grief | Flooding a party *during* a vote to fail quorum. Quorum is measured against `snapshotMembers`, so the flood has no effect — asserted in both oracles via `TS-DIFF` |
| A-03.5 Delegation disabled | With `DELEGATION` off (all non-dev defaults), no delegation path is reachable. With it on (dev), `MAX_HOPS = 1` and `MAX_SHARE_BPS = 100` are enforced at the boundary |

### TS-ADV-04 — Mob charter capture under a growth surge (`RISK-04`) · Owner: Rafael Duarte

| Case | Pass criterion |
|---|---|
| A-04.1 The Doc 02 scenario | 10,000-member party, 9,000 joined last week, T3 amendment of an entrenched clause → quorum not met, amendment fails (`FR-027`) |
| A-04.2 Surge detection | `isSurgeActive` true; approval bar +5pp (`SURGE.APPROVAL_PENALTY_BPS`); voting window ×2; `AnomalousGrowth` event emitted; client surfaces it prominently to every member (ADR-008 §3) |
| A-04.3 Surge boundary | Growth of exactly 20.00% does **not** trigger (`>` not `>=`); 20.01% does. Asserted deliberately in both oracles |
| A-04.4 Immutable clause | A clause marked `immutableClauses` cannot be amended by **any** majority, including 100% (`canAmendClause` → `CLAUSE_IMMUTABLE`) |
| A-04.5 Surge weaponisation | An attacker deliberately triggers a surge to freeze a party's legitimate T3 change. ADR-008 promises an override via a T3 vote under the *pre-surge* snapshot. **If that path is not present in the build, this case fails and the ADR mitigation is fictional.** |
| A-04.6 Charter self-weakening | A T3 proposal that would set a tier parameter below the protocol floor → `CHARTER_WEAKER_THAN_FLOOR`. A party cannot vote away its own anti-capture protection |
| A-04.7 Slow, legitimate growth | A year-long real membership build followed by a 75% constitutional win → **succeeds**. This is democracy, not an attack, and the suite must not block it |

### TS-ADV-05 — Issuer compromise & expedited removal (`RISK-05`) · Owner: Marcus Adeyemi

| Case | Pass criterion |
|---|---|
| A-05.1 48-hour expedited removal | `deactivateIssuer` executes within the expedited window; future enrolments revert `IssuerInactive` |
| A-05.2 No mass revocation | Credentials already issued by the removed issuer continue to work — removing an issuer must not disenfranchise its legitimate users (ADR-003) |
| A-05.3 Invariant enforcement | After removal, `issuerSetValid()` may become false (< 2 active, or no non-state issuer). **`issuerSetValid()` is currently a view that nothing enforces — `enrol()` never consults it.** A region can therefore fall to a single state issuer and keep enrolling. Expected to fail today; **OPEN-06**, Sev-1 |
| A-05.4 State-issuer monoculture | Attempt to configure a region with state issuers only | Must be refused, per the ADR-003 protocol invariant `acceptedIssuers(region).length >= 2` with ≥1 non-state |
| A-05.5 Per-region attestor concentration | `FR-004` requires refusing issuance from an attestor whose share would exceed 50% **in that region**. `PersonhoodRegistry` has a per-issuer *epoch count* cap and **no region dimension at all**; `RegionRegistry.issuanceCount` tracks residency attesters, not personhood issuers. **`FR-004`'s share cap has no implementing mechanism and is untestable as written — OPEN-02**, Gate-2 blocker |

### TS-ADV-06 — Deanonymisation by correlation and by small anonymity set (`RISK-06`) · Owner: Dr. Lena Kowalczyk

*Group A — correlation.*

| Case | Pass criterion |
|---|---|
| A-06.1 Timing correlation | Enrolment-to-first-action timing across a synthetic population; adversary advantage ≤ the published collusion bound. ADR-003 mandates a random delay between enrolment and first action — its distribution is asserted, not assumed |
| A-06.2 Root-version fingerprinting | A proof cites the tree root it used. With `ROOT_HISTORY = 64`, a rare root can narrow the anonymity set to a handful. **Test: for every published action, compute the anonymity set implied by the `(root, regionId, epoch)` tuple and assert it is ≥ `MIN_ANONYMITY_SET`.** This is a real leak that no other test catches |
| A-06.3 Fee / gas fingerprinting | Paymaster metadata, UserOp shape, gas amounts and sponsorship-budget state must not distinguish individuals |
| A-06.4 Indexer read logs | ADR-014 forbids IP logs, per-user query history and browsing analytics. Assert by inspection of the deployed configuration and by an active probe that produces no retrievable read record |
| A-06.5 Notification metadata | `NFR-023`: content **and metadata** reveal no party or governance activity |
| A-06.6 Gateway logs | IPFS gateway request patterns for manifesto/proposal CIDs reveal what a reader is interested in. Assert multi-gateway rotation + client-side cache defeats the naive form |
| A-06.7 Cross-scope linkage | The `FR-002` game: an observer with all published records decides whether two actions came from one person or two. Advantage ≤ chance. **Note: "better than chance" is not falsifiable by a finite suite — see OPEN-08 for the restatement this suite actually implements** |

*Group B — small anonymity sets.*

| Case | Pass criterion |
|---|---|
| A-06.8 Ward of 40 | `resolveAnonymityScope` escalates to the nearest ancestor with ≥ 1,000, or returns `null` and the action does **not** publish |
| A-06.9 Floor cannot be lowered | No configuration, charter option, flag or privileged call lowers `MIN_ANONYMITY_SET` for any scope (`TS-ABSENCE` cross-reference) |
| A-06.10 Escalation semantics | **Escalating a ward election's scope to its parent changes the electorate.** Assert that escalation is applied to *publication*, never to *eligibility*. This is the mechanical face of `OI-05` (`NFR-002` k≥1000 vs `BR-004` ward-level representation), which Doc 02 leaves open. **Untestable to a pass/fail until `OI-05` is decided — OPEN-10** |
| A-06.11 Withholding is disclosed | The user is told publication is delayed and why (`NFR-002`, US-0039) |

### TS-ADV-07 — State compulsion: capability-absence (`RISK-07`) · Owner: Sofia Marchetti

Each row of ADR-013 §3 becomes an executable assertion. **These are capability-absence tests and
carry the §6.5 limits.**

| Order | Executable assertion |
|---|---|
| "Give us party X's member list" | Enumerate **every** contract function, **every** emitted event field, **every** indexer table and column, and **every** off-chain store. Assert none yields an individual membership. The strongest available on-chain form: membership is a Merkle leaf and there is no function that enumerates leaves or maps a leaf to anything |
| "Tell us who cast vote N" | Assert no contract and no service holds a decryption key. Assert the 5-of-7 threshold cryptographically: **4 of 7 committee shares must be demonstrated insufficient to decrypt a real ciphertext** — an executed test, not a claim. Assert committee members span ≥ 5 legal jurisdictions and competing parties (composition inspection) |
| "Take down party Y" | No pause on the core (`TS-ABSENCE` opcode + selector scan). The one unilateral power in the system is `FeatureFlags.disable` — its blast radius is pinned by `TS-ADV-16` and **OPEN-03** |
| "Stop citizen Z participating" | No account-level authority anywhere in the core. Negative-authority matrix over every entrypoint |
| Residual disclosure | The pre-enrolment screen (`SCR-01`) states that an attester still learns the citizen enrolled — assert the disclosure is present, plain-language, and acknowledged before proceeding (`FR-003`, `NFR-015`) |

### TS-ADV-08 — State-level blocking (`RISK-08`, `NFR-014`) · Owner: Chen Wei

Blocking simulation: primary domain blocked at DNS and IP, and the app-store listing removed
(`CON-010`). Assert **≥ 2 independent access paths** still complete a governance action end to end:
(1) the IPFS-published static bundle via ENS; (2) the Arweave mirror; (3) the signed offline bundle;
(4) an already-installed PWA continuing to function after the block. Assert the reproducible-build
hash of the served bundle matches the public source — the defence against a compelled
"just this one user gets different JavaScript" attack (ADR-012 §4).

### TS-ADV-09 — Sequencer censorship & L1 force-inclusion (`RISK-09`, `NFR-025`) · Owner: Chen Wei

| Case | Pass criterion |
|---|---|
| A-09.1 Fallback ladder | The sequencer withholds one citizen's UserOp. Assert the ADR-014 ladder executes in order: alternate public bundler → self-paid direct submission → **L1 force-inclusion** (`OptimismPortal.depositTransaction`). All three are **implemented and tested in CI** (ADR-014), not documented as theoretical |
| A-09.2 Time to inclusion | Measure wall-clock time to inclusion via the force-inclusion path on testnet | **`NFR-025` states 60 minutes. ADR-001 states the force-inclusion round trip is typically 12–24 hours and mitigates by requiring ≥ 72h voting windows. These are irreconcilable as written. OPEN-11 — the architect must either restate `NFR-025`'s bound or name a sub-60-minute path.** The suite measures and reports; it cannot pass a criterion the design contradicts |
| A-09.3 Voting-window safety | Assert every voting window is ≥ 72h so a force-inclusion round trip cannot silently disenfranchise (`TIER_RULES[*].minVotingSeconds` is ≥ 3 days for every tier — asserted at L0 and again on-chain) |
| A-09.4 Sequencer stall | Full stall for 6 hours during an open ballot → no ballot closes incorrectly; no result is finalised on partial data |
| A-09.5 Degrade, never deny | Sponsorship circuit-breaker trips (3× p99, ADR-014) → self-pay path works; the action is queued with an explanation, never rejected (`FR-061`) |

### TS-ADV-10 — Ceremony & circuit compromise (`RISK-10`) · Owner: Rafael Duarte

Detection is impossible by test (§7.4). This suite tests **containment and response**.

| Case | Pass criterion |
|---|---|
| A-10.1 Backdoored artifact refused | The client refuses to prove against a zkey whose hash is not the registered `zkeyHash` (ADR-012 §3) |
| A-10.2 Response drill | Rehearsed on testnet: new ceremony → register new verifier → old verifier enters `SUPERSEDE_GRACE` → in-flight proofs still verify → grace expires → old proofs rejected. Timed; must complete inside the ADR-010 timelock windows |
| A-10.3 Blast-radius bound | A forged residency proof still requires an unspent `Nₐ` and a valid personhood layer. Assert forgery in one layer does not compose into unlimited action volume |
| A-10.4 Setup-compromise honesty | A test that **documents** (does not assert) that a compromised phase-2 ceremony is undetectable, so the Gate-2 packet cannot imply otherwise |

### TS-ADV-11 — Key loss at population scale (`RISK-11`) · Owner: Amara Diallo

| Case | Pass criterion |
|---|---|
| A-11.1 Recovery at scale | 1,000 synthetic subjects lose devices across guardian topologies (3-of-5, 5-of-7, hardware key, printed card) | **≥ 99% succeed within 14 days** (`NFR-016`) |
| A-11.2 Thief-initiated | Thief starts recovery; legitimate holder cancels in the window → recovery aborted, access not transferred (`FR-058`) |
| A-11.3 Guardian collusion | 5 of 7 guardians collude during the 7-day timelock → the owner vetoes with any surviving key (ADR-002 §3) |
| A-11.4 Fraud rate | Red-team fraudulent recovery attempts | ≤ 0.01% succeed (`NFR-016`) |
| A-11.5 Recovery leaks nothing | Every participant (helper, guardian, attester, support agent, operator) pools what they observed → none can determine memberships, ballots, endorsements or history (`FR-059`) |
| A-11.6 Multi-device first | Assert the common "broke my phone" case is served by a second registered passkey and never reaches the recovery path at all |

### TS-ADV-12 — Population-oracle manipulation, deflation and inflation (`RISK-12`) · Owner: Yuki Sato

| Case | Pass criterion |
|---|---|
| A-12.1 Median robustness | 5 sources, corrupt 1 then 2 → effective denominator unmoved. Corrupt 3 of 5 → it moves; assert the drift limit still bounds the damage |
| A-12.2 **Deflation** | Denominator driven toward zero to make activation trivial | Gains nothing: `petitionThreshold` returns `max(byPopulation, byVerified, 500)`. Assert with `eligiblePopulation = 0` that the floor dominates and a party still needs 500 real verified endorsers |
| A-12.3 **Inflation** | Denominator inflated to make activation impossible | Bounded by `POPULATION_MAX_DRIFT_BPS = 500` per `POPULATION_DRIFT_PERIOD = 90 days`. Assert at exactly ±5% and ±5.01% |
| A-12.4 Mid-petition swing | Attempt to change the denominator under a live petition | The petition's denominator is snapshotted at creation (ADR-004 §4). **`RegionRegistry` provides no snapshot primitive today; the petition module must implement it. Assert it, and fail if it is absent.** |
| A-12.5 Dispute window | `POPULATION_DISPUTE_WINDOW = 7 days` — activation refused at `until − 1s` (`DisputeWindowOpen`), permitted at `until` |
| A-12.6 Source independence | `MIN_POPULATION_SOURCES = 5`. **`submitPopulation` is `onlyTimelock`, so every "independent" source value is supplied through one authority. On-chain independence is therefore not enforceable as designed — OPEN-12.** The suite asserts what *is* checkable: source identity is recorded, published, and reproducible from the activation record (`FR-018`) |

### TS-ADV-13 — Misuse, unlawful content and the filtering boundary (`RISK-13`) · Owner: Daniel Okonkwo

| Case | Pass criterion |
|---|---|
| A-13.1 Filtering is display-only | Jurisdiction-scoped display filtering leaves the underlying record unaltered and retrievable outside that jurisdiction (`FR-056`) |
| A-13.2 Filtering is logged | Every filtering action appears in the public register with jurisdiction, legal basis and affected item, **before or atomically with** the filtering taking effect. A filter without a log entry must be refused |
| A-13.3 No deletion path | `TS-ABSENCE`: no selector, no bytecode path, no service endpoint deletes or edits a published record |
| A-13.4 Member retraction | The member-vote retraction flag (ADR-009) sets `retracted` on-chain; conforming clients honour it; the content remains retrievable. Assert the distinction between *retracted* and *deleted* is visible to a user |
| A-13.5 Denylist auditability | The jurisdiction-scoped gateway denylist is signed, published and diffable; a silent addition is detectable |

### TS-ADV-14 — Regulatory reclassification (`RISK-14`, `CON-001`) · Owner: Sofia Marchetti

| Case | Pass criterion |
|---|---|
| A-14.1 No state-binding output | **Assert no code path produces a state-binding electoral result.** Mechanically: a lexical + ABI audit that the word "election" in the codebase always denotes an *internal party* election (ADR-013 §1), and that no artifact is emitted in a format that a state tabulator consumes |
| A-14.2 Boundary statement present | Every public surface states the `CON-001` boundary (`SCR-*` inspection, all 8 locales) |
| A-14.3 Per-jurisdiction feature gating | `CON-005`: treasury and other regulated features are independently gateable per jurisdiction and **off by default** — assert `TREASURY.defaults.prod === false` and that the on-chain flag agrees |
| A-14.4 Officer-filing evidence | The protocol produces the *evidence* a human officer files (candidate-selection record, treasury ledger) and never files anything itself (ADR-013 §1) |

### TS-ADV-15 — Adoption failure (`RISK-15`) · Owner: Grace Mbeki

Not an attack; an instrumentation and calibration suite, because `OI-01` (threshold calibration) is
undecided and the product dies at either extreme.

| Case | Pass criterion |
|---|---|
| A-15.1 Threshold sensitivity harness | Sweep `thresholdBps` over `[MIN_THRESHOLD_BPS=50, MAX_THRESHOLD_BPS=2000]` against modelled enrolment curves; report the activation rate. Feeds the `OI-01` Gate-1 decision on the calibration *method* |
| A-15.2 Graveyard behaviour | Expired petitions archive immutably and leave active listings (`FR-013`), so the front page is live politics |
| A-15.3 Kill-criteria instrumentation | The Doc 01 §E2 kill criteria 3 and 4 have live, published metrics with defined denominators (`NFR-019`), with **zero individually identifying fields** |

### TS-ADV-16 — Trumocracy becomes the gatekeeper (`RISK-16`) · Owner: Rafael Duarte

The whole-stack capability-absence suite. This is the one an auditor and a journalist will read.

| Case | Pass criterion |
|---|---|
| A-16.1 No admin, no pause, no upgrade in the core | ABI allowlist + bytecode `DELEGATECALL`/`SELFDESTRUCT` scan + storage-layout snapshot show no owner, admin, pauser or proxy in the immutable core (`CON-003`, ADR-010) |
| A-16.2 **`FeatureFlags` blast radius** | `emergencyDisabler` can `disable` unilaterally. Pin exactly what that can and cannot do. **Required assertions:** disabling a flag MUST NOT (a) stop or invalidate an in-flight ballot, (b) prevent tallying or execution of a proposal that already passed, (c) alter any published result, (d) enable anything. **As written, `disable()` is unconditional and `FeatureFlags` has no notion of an in-flight ballot; assertions (a) and (b) are expected to fail — OPEN-03, and it is also the mechanism `NFR-020`'s second clause requires and does not have.** Sev-1 |
| A-16.3 No unilateral rule change | `NFR-017`: every registry mutation is `onlyTimelock`; the timelock is ≥ the highest party tier (T3 = 30 days; ADR-010's registry timelock is 30 days — assert equality or better) |
| A-16.4 Funder holds nothing | No governance right, weight, precedence or visibility attaches to any contribution (`FR-051`, ADR-007 §"funding") |
| A-16.5 Reproducible builds | Build twice on different machines → identical artifact hashes; ≥ 1 independent party reproduces (`NFR-021`); deployed bytecode hash equals the audited artifact hash at every pinned address |
| A-16.6 Licence | Every governance-critical source carries an OSI-approved SPDX header (`CON-004`; the contracts currently declare `AGPL-3.0-or-later`) — lint-enforced |
| A-16.7 Exit works | `TS-EXIT` (`NFR-018`): full party export → reconstitute on an independent deployment → identical roots, tallies and history. **In CI**, because an exit path never executed is not an exit path (ADR-010) |
| A-16.8 Key sunset | `renounceProtocolKeys()` is timelocked, published and **irreversible** — assert irreversibility by attempting to re-acquire after renouncement |

---

## 9. NFR verification methods — `NFR-001` … `NFR-026`

Every NFR gets: a method, a measurement instrument, a reference environment, a threshold, and an
owner. The reference device profile is fixed for the whole plan.

**Reference device profile (RDP).** 2 GB RAM · Android 9 · a physical mid-range handset of that class
· network shaped to **64 kbit/s with intermittent loss** · cold cache. CI uses a *proxy* profile
(4× CPU throttle + 64 kbit/s shaping in a headless browser) for every commit; **the physical RDP lab
is authoritative and runs on every release candidate.** Where CI proxy and RDP disagree, RDP wins and
the CI budget is re-calibrated.

| NFR | Method | Instrument / environment | Pass threshold | Owner |
|---|---|---|---|---|
| **NFR-001** Privacy — no linkage | (a) event-schema assertion: no emitted field is a linkable identifier; (b) `TS-ADV-06` correlation battery over a synthetic production-scale dataset; (c) independent privacy audit `NF-01` | Devnet + offline dataset; audit external | 0 confirmed linkages; audit 0 critical/high. **The collusion bound is unset (`OI-10`) so the adversary model is not fully specified — OPEN-13** | Dr. Lena Kowalczyk |
| **NFR-002** k ≥ 1,000 | L0 `resolveAnonymityScope` + L1 `anonymitySetSufficient` + L3 differential + L6 withheld-publication E2E + a standing indexer invariant that recomputes k for every published action | Local, CI, devnet, testnet, production | k ≥ 1,000 for 100% of published actions, or withheld with a user-visible reason. See OPEN-10 (`OI-05`) | Dr. Lena Kowalczyk |
| **NFR-003** Coercion resistance | `TS-ADV-02` (A-02.1…A-02.4) + key-change indistinguishability classifier + formal-argument review + independent adversarial audit | Devnet + external audit | 0 receipt constructions found; classifier advantage ≤ chance. **Blocked by OPEN-01: MACI is Phase 3 and off in production** | Aisha Nkemdirim |
| **NFR-004** Sybil resistance | Duplicate rate: out-of-band audited sample (see the honesty note below); attestor share: per-region concentration check | Production sampling + on-chain check | ≤ 0.1% duplicates; issuer share ≤ 50% (≤ 40% targeted). **The 50%-per-region cap has no mechanism — OPEN-02.** *Honesty note: the system is designed so that a nullifier cannot be linked to a person, therefore we cannot count duplicates internally. Measurement requires a consented, out-of-band audited sample run by the attestors, at a stated confidence interval. This is a weaker instrument than the requirement implies and must be reported as such — OPEN-14* | Marcus Adeyemi |
| **NFR-005** Cost | (1) harness `gasUsed` per action as a CI regression detector; (2) **+ intrinsic 21,000 + calldata cost + ADR-001 blob-fee model** to reach a price; (3) testnet measurement against real fee oracles; (4) production instrumentation `NF-04` | CI (regression), testnet (price), production (truth) | median < USD 0.01; p99 < USD 0.05; citizen charged USD 0.00 in 100% of cases. CI fails on a > 10% gas regression on any citizen action. **The denominator ("a citizen governance action") must be enumerated before this is measurable — OPEN-15** | Hiroshi Tanaka |
| **NFR-006** Performance | Scripted journeys on the RDP; client proving time measured separately (ADR-005 budget) | CI proxy every commit; physical RDP per RC | primary screen interactive ≤ 5s p95; action acknowledged ≤ 5s p95; finalised on the verifiable record ≤ 120s p95; enrol→endorse ≤ 10 min; ADR-012 budget: < 200KB initial JS | Hiroshi Tanaka |
| **NFR-007** Availability | Staging 72h soak + production SLO measurement; single-operator-failure drill | Staging, production | write path ≥ 99.5%/month; read/verify ≥ 99.9%/month; no single operator failure blocks an action > 60 min | Chen Wei |
| **NFR-008** Scalability (Should) | LeanIMT insert benchmark to depth 32 (measured, not extrapolated); indexer/relayer load test | Devnet + load rig | 50M enrolled; 10M eligible in one ballot window; 5,000 actions/s without violating `NFR-006` | Chen Wei |
| **NFR-009** Security | Independent third-party security **and cryptography** audit (`NF-02`), two independent audits per circuit (ADR-005), penetration test | External | 0 critical/high open at Gate 2; 0 privileged administrative overrides in any governance path | Rafael Duarte |
| **NFR-010** Data minimisation | Automated **data-inventory check that fails the build**: scans contract storage layouts, event field names/types, indexer schema columns, log formats and message-queue payloads against a PII denylist and a mandatory per-field annotation | CI (blocking) + manual inventory inspection at Gate 2 | 0 identity-document, biometric, address, DOB or direct-identifier fields anywhere | Dr. Lena Kowalczyk |
| **NFR-011** Accessibility | **Automated:** an offline-capable WCAG rule engine over every primary flow, every locale, in CI. **Manual (mandatory):** full task completion by screen reader — TalkBack on the Android 9 RDP, plus NVDA and VoiceOver — keyboard-only, switch-control, and 200% text scale, on every release candidate. Automated tooling detects only a minority of WCAG failures; the manual pass is the real gate | CI + RDP lab + assistive-technology lab | 0 Level A and Level AA failures; every task completable by every modality; 44px minimum touch targets (ADR-012) | Nadia Hassan |
| **NFR-012** Portability | Install-size gate in CI; offline draft composition with deferred submission; every primary flow at 64 kbit/s intermittent | CI proxy + RDP | install ≤ 15 MB; 100% of primary flows pass on the RDP; offline compose + exactly-once deferred submit (US-0012) | Nadia Hassan |
| **NFR-013** Localisation | String-key coverage gate at 100%; pseudo-localisation build; RTL layout snapshots; hardcoded-string lint; native-speaker review per locale | CI + review | 8 locales incl. ≥ 1 RTL; 0 untranslated strings in any primary flow; dates/numbers/names localised | Nadia Hassan |
| **NFR-014** Censorship resistance | `TS-ADV-08` blocking simulation | Isolated network lab + testnet | ≥ 2 independent access paths verified end to end under a full block | Chen Wei |
| **NFR-015** Compliance | Per-jurisdiction legal sign-off (**attestation, not test**); tested parts: pre-enrolment disclosure present and acknowledged; an erasure request produces the "no personal data exists" demonstration plus credential deactivation | Legal review + E2E | sign-off per pilot jurisdiction before launch; disclosure present in the enrolment flow in all 8 locales | Sofia Marchetti |
| **NFR-016** Key recovery | `TS-ADV-11` at n = 1,000 synthetic subjects across guardian topologies | Devnet + staging | ≥ 99% succeed ≤ 14 days; ≤ 0.01% fraudulent; notification + cancellation window mandatory on 100% of recoveries | Amara Diallo |
| **NFR-017** Upgradeability | `TS-ABSENCE` negative-authority matrix + timelock-duration assertion + `TS-UPG` | CI + testnet | 0 unilateral rule-change paths; registry timelock ≥ highest party tier (30 days) | Rafael Duarte |
| **NFR-018** Exit rights (Should) | `TS-EXIT` in CI: export → reconstitute on an independent deployment → verify | CI + devnet | export reconstitutes with identical roots, tallies and version history; a member can deactivate at any time | Erik Lindqvist |
| **NFR-019** Observability (Should) | Dashboard field audit + metric-correctness diff against the independent verifier | Staging + production | dashboard live at launch; 0 individually identifying fields; every published metric reproducible by the verifier | Yuki Sato |
| **NFR-020** Operability | Timed rollback drill; per-flag independent kill test; **open-ballot flag freeze test** | Staging (drill) + production (proven once before Gate 2) | rollback < 15 min; flags independently kill-switchable; **a flag governing an open ballot's rules cannot change while that ballot is open — no mechanism exists in `FeatureFlags.sol`; OPEN-03**, Gate-2 blocker | Chen Wei |
| **NFR-021** Openness | Double-build hash comparison across machines; independent third-party reproduction; SPDX licence lint | CI + external | bit-identical artifacts; ≥ 1 independent party reproduces; 100% of governance-critical logic under an OSI licence | Rafael Duarte |
| **NFR-022** Usability | Moderated + unmoderated studies, first-time non-technical users, per launch locale | Field / research lab | ≥ 80% complete enrol→endorse unaided ≤ 10 min; SUS ≥ 75; support-contact ≤ 5% of enrolments; **n ≥ 200 per launch locale** | Grace Mbeki |
| **NFR-023** Content & notifications | Jargon denylist token-scan across every primary-flow string in all 8 locales (automatable, blocking); readability scoring per locale where an instrument exists, else native-speaker review; notification content **and metadata** leak test | CI + review | 0 occurrences of wallet, seed phrase, private key, gas, token, mint, chain, block, hash (or locale equivalents) in primary flows; ≤ grade-8 reading level; every error states cause **and** next action | Nadia Hassan |
| **NFR-024** Anti-harassment | Surface inspection for identity, contact, location-below-region and activity-pattern exposure; recall/nomination flow harassment review | Inspection + L7 review | 0 identity-exposing surfaces; harassment-rate metric published | Daniel Okonkwo |
| **NFR-025** Liveness | `TS-ADV-09` operator-censorship simulation | Testnet | **Stated: alternative inclusion ≤ 60 min. Conflicts with ADR-001's 12–24h force-inclusion window — OPEN-11.** The suite measures and reports the real number | Chen Wei |
| **NFR-026** Compatibility (Should) | Pairwise matrix over evergreen mobile browsers ≤ 24 months old × Android 9+ × 8 locales × 3 network profiles | Device lab + CI | 100% of the supported matrix passes primary flows; unsupported combinations show a clear actionable message, never a broken screen | Nadia Hassan |

---

## 10. Entry & exit criteria, coverage, flake and data

### 10.1 Entry criteria (per build)

A build enters test only when **all** hold:

1. `npm run verify` is green locally: `lint:deps` (ADR-011 layering) → `typecheck` → `test`.
2. Every new or changed governance rule exists in `packages/protocol` **and** has a `TS-DIFF` case.
3. Every new contract entrypoint has a negative-authority test and appears in the `TS-ABSENCE` ABI
   allowlist snapshot with a reviewed diff.
4. Every new circuit claim appears in `claims.json` with a Z2 negative test.
5. Every new capability is behind a flag with a `removeBy` value (`permanentFlags()` must stay empty
   except for the two deliberate permanents, `L1_FORCE_INCLUSION` and `SPONSORED_GAS`).
6. No new personal-data field: the `NFR-010` data-inventory check is green.
7. The story's `TC-####` exist in Doc 07 and its RTM row (Doc 08) is open with `BR → FR/NFR → DES →
   US → TC` populated.

### 10.2 Exit criteria — release readiness (Gate 2)

| # | Criterion | Evidence |
|---|---|---|
| 1 | **100% of Must FR/NFR have a passing test** and the RTM (Doc 08) shows **zero gaps in Must rows** | Doc 08, verified by reviewer-qa |
| 2 | 0 open Sev-1 / Sev-2 defects | defect register |
| 3 | `TS-DIFF`: **zero divergences** | CI run on the release commit |
| 4 | `TS-ABSENCE`: allowlist snapshots unchanged since audit; opcode and storage-layout scans clean | CI + audit artifact |
| 5 | L4: 100% of `claims.json` entries have a passing Z2 negative test; `circomspect` clean at ≥ Warning; Z5 malleability battery green | CI |
| 6 | All 16 `TS-ADV-*` suites executed with a recorded verdict; **Band A and Band B suites green** | suite reports |
| 7 | `NF-01` privacy audit and `NF-02` security & cryptography audit complete, **0 critical/high open** (`NFR-009`) | audit reports |
| 8 | `NF-03` red-team: flash-takeover and mob-capture simulations failed to succeed | red-team report |
| 9 | Performance green on the **physical RDP**, not only the CI proxy (`NFR-006`, `NFR-012`) | RDP lab report |
| 10 | Accessibility: 0 Level A/AA failures, automated **and** manual screen-reader passes (`NFR-011`) | a11y report |
| 11 | Cost measured on testnet with real fees: median < USD 0.01, p99 < USD 0.05, citizen USD 0.00 (`NFR-005`) | `NF-04` instrumentation |
| 12 | **Rollback drill proven < 15 min** and the open-ballot flag freeze demonstrated (`NFR-020`) | `NF-07` drill record |
| 13 | Censorship (`NFR-014`) and operator-censorship (`NFR-025`) simulations executed with recorded results | `NF-06` |
| 14 | `TS-EXIT` reconstitutes a party on an independent deployment (`NFR-018`) | CI artifact |
| 15 | Reproducible build verified by ≥ 1 independent party (`NFR-021`) | third-party attestation |
| 16 | Per-jurisdiction legal sign-off obtained (`NFR-015`, `CON-005`) | legal record |
| 17 | **Every `OPEN-##` in §13 is closed, or explicitly accepted in writing by the Gate-2 approver** | Gate-2 packet |

### 10.3 Suspension & resumption

**Suspend** testing of an area when: the `TS-DIFF` suite is red (the oracle is untrustworthy, so all
downstream results are meaningless); the data-inventory check is red (we may be persisting personal
data — stop and remediate before any further test data is created); an ABI allowlist diff is
unreviewed; or a `circomspect` finding at ≥ Warning is open.

**Resume** when the blocking condition is cleared and a full L0–L3 run is green on the fixed commit.

### 10.4 Definition of Done (inherited and sharpened)

Doc 05 §11 plus: the story's guardrail assertion exists (not only its positive path); its `TS-DIFF`
case exists if it touches a rule; its `TS-ABSENCE` snapshot entry is reviewed if it touches an ABI;
and its Z2 negative tests exist if it touches a circuit.

### 10.5 Coverage targets

| Area | Target | Justification |
|---|---|---|
| `packages/protocol` (`governance.js`, `party.js`, `regions.js`, `constants.js`, `flags.js`) | **100% line and 100% branch** | This is the reference implementation **and the oracle for `TS-DIFF`**. An untested branch here is a rule nobody checked, and worse, an unverified oracle silently blesses whatever the contract does. The module is small, pure and fast; 100% is cheap and the alternative is an oracle we cannot trust. |
| Immutable core contracts (ADR-010) | **100% line, 100% branch, and every custom error provoked by name** | The core has no proxy, no admin and no pause. A bug is **unfixable in place** — the only remedy is deploy-v2-and-migrate. There is no patch path to fall back on, so there is no coverage gap we can afford. |
| Registries (`PersonhoodRegistry`, `RegionRegistry`, `VerifierRegistry`, `FeatureFlags`) | ≥ 95% branch; 100% of authorisation branches | Mutable behind a 30-day timelock, so a defect is recoverable — but every authorisation branch is a `CON-003` surface and gets no discount. |
| SDK (`packages/sdk`) | ≥ 90% line; **100% of the fallback transport ladder** | ADR-014: an escape hatch that has never been exercised does not exist. |
| Client (`packages/ui`, `apps/web`) | ≥ 80% line; **100% of primary flows have an E2E case and an a11y case** | Line coverage is a poor proxy for UI correctness; flow and a11y coverage are the real metric. |
| Circuits | **Not measured by line coverage.** Measured by: `claims.json` negative-test coverage = 100%; `circomspect` clean; constraint-count snapshot stable | Line coverage of a constraint system is meaningless — a fully "covered" circuit can be entirely under-constrained. |
| Indexer / relayer | ≥ 85% line; 100% of the client-side re-verification path | ADR-014: the indexer may make the UI fast, never wrong. |
| **Seeded-defect drill** | ≥ 90% of 20 injected defects caught in one CI run, quarterly | Measures whether the tests *assert* rather than merely *execute*. Cheaper and more honest than a coverage percentage. |

### 10.6 Flake policy

**Levels L0–L3 have zero flake tolerance and no retries.** They are deterministic by construction:
in-process EVM, fixed genesis timestamp `1_760_000_000n`, deterministic accounts, no RPC, no network,
no wall-clock, no unseeded randomness. A non-deterministic result at these levels is a **real defect**
— usually shared state between tests or a hidden dependency on block number — and is triaged as such,
never quarantined.

**L4–L6 may retry at most once**, and every retry is logged and counted toward the flake metric.

| Rule | Detail |
|---|---|
| Determinism rules | fresh `Chain` per test; assert on `timestamp` not `blockNumber`; seed every generator; no `Date.now()`; no network in L0–L4 |
| Quarantine | max **48 hours**, named owner, linked defect. A quarantined test that blocks a guardrail (`TS-ABSENCE`, `TS-DIFF`, any Band A/B `TS-ADV`) **cannot be quarantined at all** — it blocks the pipeline until fixed |
| Flake budget | > 0.5% flake rate on any suite over a rolling 200 runs freezes new feature work in that area until it is back under budget |
| "It passed on retry" | Not an outcome. Three failures in 200 runs is a defect, not a flake |

### 10.7 Test data management — **no real personal data, ever**

`CON-002` is absolute and this is its testing expression.

1. **Hard rule.** No real identity document, document image, document number, biometric template,
   biometric derivative, date of birth, residential address, phone number, email address or real
   name may enter **any** environment — local, CI, devnet, testnet, staging or production. This
   includes consenting employees and includes a developer's laptop. There is no "just for debugging"
   exception and no approval that grants one.
2. **Synthetic only.** A deterministic seeded generator produces synthetic personas: fake document
   hashes, fake issuer signatures, fake region assignments, fake guardian sets. Seeds are checked in
   so every run is reproducible.
3. **Production has nothing to copy.** By `NFR-010` the public record holds no personal data. The
   *only* stores that hold anything personal are the recovery notification channel and support
   records (Doc 02 §7). **These MUST NOT be copied to any lower environment under any circumstance**;
   lower environments use synthetic notification channels.
4. **Attestor integration** uses each vendor's sandbox with synthetic documents. Production attestor
   credentials are never used in a test.
5. **Enforcement, not policy.** CI runs (a) a secret scanner, (b) the `NFR-010` PII field-denylist
   check over schemas, ABIs, events and fixtures, and (c) a fixture scanner that fails on anything
   resembling a real document number, national ID pattern, email or E.164 phone number. All three
   are **build-failing**.
6. **Usability and a11y research** (`NFR-022`, `NFR-011`) is run by a research vendor under its own
   consent regime; participants use throwaway accounts created through test attestors, **never their
   own credentials**, and research data is never joined to any platform record.
7. **Refresh & retention.** Devnet is reset from genesis on every deployment. Testnet retains history
   for `TS-UPG` and audit reproduction. No environment retains a fixture beyond the release that used
   it unless it is checked into the repository as a golden file.
8. **Golden files.** ABI allowlist snapshots, storage-layout snapshots, constraint-count snapshots and
   `TS-DIFF` regression corpora are checked in and reviewed like code.

---

## 11. Environments & tooling

### 11.1 Environments and what gates promotion

| Env | Purpose | Chain / data | Flag state | Suites that must pass to **enter** it |
|---|---|---|---|---|
| **local** | developer inner loop | in-process EVM harness; synthetic fixtures | dev defaults (everything on) | — |
| **ci** | every commit on trunk | in-process EVM harness; synthetic fixtures; no network egress | dev **and** prod flag sets, both run | L0, L1, L2, **L3 `TS-DIFF`**, `TS-ABSENCE`, `TS-EDGE`, L4 fast subset, L5 unit + a11y unit, `lint:deps`, `typecheck`, data-inventory, jargon scan, i18n coverage |
| **devnet** | ephemeral full-stack chain, reset per deployment | disposable L2 devnet + local IPFS + indexer + relayer | prod flag set + per-test overrides | everything CI runs, plus `TS-SMOKE` |
| **testnet** | public L2 testnet — the only place L2 behaviour is real | public testnet; real blob fees; real force-inclusion | prod flag set | devnet gates + `TS-E2E` + `TS-ADV-09` + `TS-COST` (real fees) + `TS-UPG` + `TS-EXIT` |
| **staging** | production-shaped, production topology, synthetic population | testnet-backed; production-equivalent services | prod flag set | testnet gates + `TS-LOAD` + 72h soak + `TS-RES` + `TS-ADV-08` + rollback drill (`NF-07`) + RDP performance + manual a11y |
| **production (flagged)** | real citizens, staged rollout 1 → 10 → 50 → 100% | mainnet L2 | prod flag set; new capability dark | staging gates + Gate-2 exit criteria (§10.2) |

**Promotion rule.** A suite that has never run against L2 semantics cannot gate a promotion that
depends on L2 semantics. Concretely: `TS-ADV-09` (force-inclusion) and `TS-COST` (real fees) are
**testnet-or-above only**, because the harness runs `Mainnet`/`Cancun` and knows nothing about
sequencers or blob fees. Saying otherwise in a report would be a lie the harness cannot detect.

### 11.2 Tooling — what exists, and what must be added

**Present in the repository today (use these; do not replace them without an ADR):**

| Tool | Version / location | Used for |
|---|---|---|
| Node | ≥ 22 (`package.json` `engines`) | everything |
| npm workspaces | `packages/*`, `services/*`, `apps/*`, `tools/*` | monorepo (ADR-011) |
| **vitest** | ^3.2.4 | L0, L1, L2, L3, L5 unit |
| **`tools/evm-harness`** | solc ^0.8.28 (solc-js), `@ethereumjs/vm` ^10, `@ethereumjs/common`, `@ethereumjs/util`, `viem` ^2.40, `poseidon-solidity` ^0.0.5 | all contract testing — offline, deterministic, no Foundry, no Hardhat, no RPC |
| `@zk-kit/lean-imt.sol` | via contract imports | LeanIMT under test |
| **`tools/dep-guard/check.mjs`** | present | ADR-011 layering; **and it is the control that keeps `TS-DIFF` meaningful** |
| TypeScript | ^5.9.3, `tsc -b` | typecheck gate |
| Root scripts | `verify` = `lint:deps && typecheck && test` | the local and CI entry gate |

**Required, not yet present — owner and ADR basis stated. None of these may be assumed green until
they exist.**

| Capability | Constraint it must satisfy | Owner | Basis |
|---|---|---|---|
| `packages/contracts/package.json` + test workspace | root `test:contracts` already references `@trumocracy/contracts`; `dep-guard` already allows it | Engineer (Doc 06) | ADR-011 |
| `storageLayout` in the harness `outputSelection` | one-line change; unblocks §6.3 | Engineer | this plan §6.3 |
| circom + snarkjs + **circomspect**, pinned and offline in CI | `circomspect` finding ≥ Warning fails the build | Rafael Duarte | ADR-005 |
| Headless browser driver with CPU throttling, 64 kbit/s network shaping and offline mode | `NFR-006`, `NFR-012` are *measured through it*; selection is Doc 06's | Nadia Hassan | ADR-012 |
| Offline-capable automated WCAG 2.2 rule engine, runnable in CI with no egress | `NFR-011`; automated coverage is partial, so it never replaces the manual pass | Nadia Hassan | ADR-012 §6 |
| Physical reference-device lab (2 GB / Android 9) + assistive-technology lab | RDP is authoritative over the CI proxy | Nadia Hassan | `CON-011` |
| Load rig for indexer/relayer | `NFR-008` | Chen Wei | ADR-014 |
| Cost model: gas → calldata → blob fee → USD, checked into the repo as data | `NFR-005` is *measured*, not asserted | Hiroshi Tanaka | ADR-001 |
| Data-inventory / PII denylist checker (build-failing) | `NFR-010`, US-0002 AC | Dr. Lena Kowalczyk | `CON-002` |
| Reproducible-build verification job | `NFR-021` | Rafael Duarte | ADR-012 §4 |

**Explicitly not used:** Foundry, Hardhat, Anvil, Ganache, or any RPC-dependent contract test runner.
The harness's docstring states the reason and it is a test-strategy decision, not a preference:
contract behaviour here is a civic guarantee, so the tests must run everywhere, offline,
byte-identically, on a fresh clone, with no external binary download. An auditor who cannot reproduce
our test results has no reason to believe them.

---

## 12. What we explicitly do NOT test — and the residual risk

Stated plainly, because a Gate-2 packet that lists only what we tested is misleading.

| Not tested | Why not | Residual risk we are accepting |
|---|---|---|
| **Real-world coercion at the device level** | Someone holding your phone and your finger can cast a vote. No test we can write changes that. ADR-002 says so; ADR-006 answers it at the voting layer with re-voting, not at the device layer | A coercer with continuous physical control over a citizen for the whole voting window defeats receipt-freeness. Mitigated by ≥ 72h windows and the panic gesture; **not eliminated**. `RISK-02` residual |
| **The social layer of attester and issuer honesty** | We can test that an attester's stake is slashable and its issuance volume is public. We cannot test whether a bank's local branch manager attests honestly, or whether three peer attesters are the same person's cousins | ADR-004 says it: *"we cannot prevent a citizen from lying to a weak attester; we can only make it expensive, visible and slashable."* `RISK-01`, `RISK-05` residual |
| **Jurisdictional legal outcomes** | Whether a regulator deems us an electoral body, whether pseudonymous-but-immutable records are "personal data" in jurisdiction J, whether anonymous political association is lawful — these are `TD-03`, `CON-005`, `A-03`. Legal review is an attestation, not a test | `NFR-015` is a legal *posture*, not a legal certainty. `RISK-14` residual |
| **Whether the requirements are the right requirements** | Testing proves conformance to Doc 02, never that Doc 02 describes a good democracy. `OI-01` (threshold %), `OI-08` (all the governance constants) are undecided numbers that testing cannot decide | A perfectly tested system with a badly calibrated threshold is a graveyard of petitions (kill criterion 4) or a swamp of noise |
| **Soundness of the proving system** | §7.4. No finite suite establishes it | Bounded by two independent audits per circuit and `CON-012`. A ceremony compromise is undetectable. `RISK-10` residual |
| **Formal verification of core invariants** | ADR-010 aspires to it; at v1 we express invariants as executable property tests instead | Property tests sample; proofs do not. We are claiming the weaker thing and saying so |
| **Third-party infrastructure we depend on** | Base/OP Stack consensus and its upgrade keys, IPFS/Arweave durability, Apple/Google keychain behaviour, attestor uptime | ADR-001 accepts the L2 upgrade-key risk for v1 and re-opens it at Phase 4. ADR-002 accepts vendor keychain centralisation |
| **Content quality of a party's eight pillars** | `FR-011`'s "minimum-substance standard" is implemented today as a 280-character floor. That is a length check, not a substance check — deliberately, because ADR-013 forbids the protocol from judging political content | A well-padded empty programme passes. `OI-09` is open and this is the honest current state — **OPEN-07** |
| **Whether an emergency disable is ever used well** | `FeatureFlags.disable` is the one unilateral power. We can pin its blast radius; we cannot test the judgement of the person holding it | `CON-003` says there should be no such power at all. See **OPEN-03** |
| **Off-chain censorship by gateway, DNS or app store** *as a capability-absence property* | We test that alternative paths exist (`TS-ADV-08`); we cannot assert absence of a capability that lives outside our code | `RISK-08` residual, accepted and disclosed |

---

## 13. Open items — findings from writing this plan

These arose from testing the requirements and ADRs against each other and against the code that
exists. Each names the owner who must close it. **`OPEN-01` … `OPEN-06` and `OPEN-11` are Gate-2
blocking as things stand.**

| ID | Finding | Impact | Owner |
|---|---|---|---|
| **OPEN-01** | `MACI_VOTING` defaults to **off in staging and production** and ADR-006 defers MACI to Phase 3, but `FR-031`, `FR-032` and `NFR-003` (receipt-freeness, silent re-vote) are **Must** in Doc 02 and are guardrails, not walking-skeleton items. Without MACI, votes are anonymous but **not** receipt-free — the flag's own description says so | A Must guardrail is not delivered at v1. `TS-ADV-02` cannot pass. **Gate-2 blocker unless Doc 02 or the roadmap changes** | Aisha Nkemdirim / Priya Raghunathan |
| **OPEN-02** | `FR-004` requires refusing issuance from an attestor whose share would exceed **50% in a region**. `PersonhoodRegistry` has a per-issuer *per-epoch count* cap and **no region dimension**; `RegionRegistry.issuanceCount` covers residency attesters, not personhood issuers | `FR-004` and half of `NFR-004` are untestable as written | Marcus Adeyemi |
| **OPEN-03** | `FeatureFlags.disable()` is unconditional and callable unilaterally by `emergencyDisabler`. Nothing prevents disabling a flag that governs an **open ballot** or blocks execution of an already-passed proposal. `NFR-020` requires exactly that prevention, and `CON-003` forbids any capability to halt a governance process | The one unilateral power in the protocol has an unbounded and untested blast radius | Rafael Duarte |
| **OPEN-04** | ADR-003's `Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)` is scoped **per issuer** under a 1-of-N acceptance model. One human holding two accepted credentials therefore enrols twice and votes twice. `FR-001`/`BR-006` require **at most one active credential per human** | The foundational "one person, one vote" property does not hold across issuers as recorded. `TS-ADV-01/A-01.3` | Principal Architect (Doc 03) |
| **OPEN-05** | `PersonhoodRegistry.spendNullifier(bytes32,uint256)` is `external` with **no caller restriction**. Any address can burn any nullifier for any scope, denying a citizen an action | Griefing / targeted disenfranchisement. `TS-ADV-01/A-01.5` | Principal Architect |
| **OPEN-06** | `issuerSetValid()` is a `view` that nothing enforces; `enrol()` never consults it. A region can fall to a single state issuer and keep enrolling, contradicting the ADR-003 protocol invariant | The stated invariant is advisory. `TS-ADV-05/A-05.3` | Marcus Adeyemi |
| **OPEN-07** | `FR-011`'s "published minimum-substance standard" is implemented as `MIN_PILLAR_CHARS = 280`. Testable, but it tests length, not substance (`OI-09` is open) | We can only claim what we measure. Doc 14 and the UI must not imply more | Tomás Ferreira |
| **OPEN-08** | `FR-002`'s "cannot determine better than chance" and `NFR-001`'s "no colluding subset short of the published collusion bound" are **not falsifiable by a finite suite** as written. `OI-10` (the collusion bound) is undecided | Needs restatement as a concrete adversary game: adversary capabilities, sample size, and a maximum advantage ε at a stated confidence. Until then `TS-ADV-06` reports a measurement without a pass line | Dr. Lena Kowalczyk |
| **OPEN-09** | The roster names no QA Lead; the Doc 04 template expects one. CLAUDE.md assigns Doc 04 to the architect and per-suite owners are named individuals | Ownership is covered, but the named-owner rule for the document itself resolves to the architect. Confirm at Gate 2 | Priya Raghunathan |
| **OPEN-10** | `OI-05` (`NFR-002` k ≥ 1,000 vs `BR-004` ward-level representation) is undecided. `resolveAnonymityScope` escalates publication to a parent region — but escalating a *ward election's* scope would change its electorate | `TS-ADV-06/A-06.10` has no pass line until `OI-05` is decided | Dr. Lena Kowalczyk |
| **OPEN-11** | `NFR-025` requires alternative inclusion **within 60 minutes**. ADR-001 states force-inclusion is typically **12–24 hours** and mitigates with ≥ 72h voting windows | The stated NFR cannot be met by the designed mechanism. Restate `NFR-025` or name a sub-60-minute path | Chen Wei |
| **OPEN-12** | `RegionRegistry.submitPopulation` is `onlyTimelock`, so all "independent" source values reach the median through a single authority. Source independence is not enforceable on-chain as designed | `FR-009`/`RISK-12` mitigation is weaker than it reads. `TS-ADV-12/A-12.6` | Yuki Sato |
| **OPEN-13** | `OI-10` (the published collusion bound) is unset, so `NFR-001`'s adversary model — and therefore its pass threshold — is unspecified | Blocks a definitive `NFR-001` verdict | Dr. Lena Kowalczyk |
| **OPEN-14** | `NFR-004`'s ≤ 0.1% duplicate rate cannot be measured internally: the system is designed so a nullifier cannot be linked to a person. Measurement requires a consented, out-of-band audited sample at the attestors | Report the instrument and its confidence interval; do not present it as a system measurement | Marcus Adeyemi |
| **OPEN-15** | `NFR-005`'s "median cost of a citizen governance action" has no enumerated denominator (which actions count, weighted how) | Define the action set before Gate 2 or the metric is unfalsifiable | Hiroshi Tanaka |
| **OPEN-16** | ADR-002 and ADR-001 both cite **"ADR-017"** for per-nullifier sponsorship rate limiting. Only ADR-001…ADR-014 exist | Dangling reference; the sponsorship policy lives in ADR-014. Fix the citation | Principal Architect |
| **OPEN-17** | `packages/contracts` has no `package.json` or test workspace, although root `package.json` declares `test:contracts` and `dep-guard` allows `@trumocracy/contracts` | `npm run verify` silently skips all contract tests today | Engineer (Doc 06) |

---

## 14. Test groups / suites

Suites are created during Coding & UT (Doc 06) and become cases in Doc 07. `TC` ranges are **reserved
here** so numbering does not collide; the tester assigns the actual IDs.

| Suite ID | Group | Level | Covers | Reserved `TC` range | Owner |
|---|---|---|---|---|---|
| `TS-FUNC` | Functional / E2E | L0–L6 | all 61 FRs (positive paths) | TC-0001–TC-0999 | Tester |
| `TS-EDGE` | Negative / edge | L0–L2 | SDD §11 failure modes; every custom error by name | TC-1000–TC-1199 | Engineer |
| `TS-DIFF` | **Differential** | L3 | `protocol` vs contracts; `NFR-021`; every governance rule | TC-1200–TC-1399 | Engineer + Tester |
| `TS-ZK` | Circuits (Z1–Z7) | L4 | `FR-001`–`FR-005`, `FR-030`–`FR-035`, `NFR-001`, `RISK-10` | TC-1400–TC-1599 | Rafael Duarte |
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | `FR-021`, `FR-035`, `FR-047`, `FR-051`, `FR-056`, `NFR-017`, `CON-003`, `CON-006` | TC-1600–TC-1799 | Rafael Duarte |
| `TS-ABI` | Contract / API | L1/L5 | ABI allowlist, indexer schema, SDK drift, public read interface | TC-1800–TC-1849 | Engineer |
| `TS-SEC` | Security (authZ, negative-authority, pen) | L1–L6 | `NFR-009`, `FR-056` | TC-1850–TC-1949 | Rafael Duarte |
| `TS-PRIV` | Privacy & data | L1–L6 | `NFR-001`, `NFR-002`, `NFR-010`, `NFR-024`, `FR-003` | TC-1950–TC-2049 | Dr. Lena Kowalczyk |
| `TS-DATA` | Data inventory (build-failing) | CI | `NFR-010`, `CON-002` | TC-2050–TC-2079 | Dr. Lena Kowalczyk |
| `TS-PERF` | Performance (RDP) | L6 | `NFR-006`, `NFR-012` | TC-2080–TC-2149 | Hiroshi Tanaka |
| `TS-LOAD` | Load / stress / soak / scalability | staging | `NFR-007`, `NFR-008` | TC-2150–TC-2199 | Chen Wei |
| `TS-COST` | Cost per action | testnet + prod | `NFR-005` | TC-2200–TC-2249 | Hiroshi Tanaka |
| `TS-A11Y` | Accessibility (automated + manual) | L5/L6/L7 | `NFR-011` | TC-2250–TC-2329 | Nadia Hassan |
| `TS-I18N` | Localisation | L5/L6 | `NFR-013`, `NFR-023` | TC-2330–TC-2379 | Nadia Hassan |
| `TS-COMPAT` | Compatibility matrix | L6 | `NFR-026` | TC-2380–TC-2419 | Nadia Hassan |
| `TS-RES` | Resilience / chaos | staging | `NFR-007`, `NFR-020`, `RISK-09` | TC-2420–TC-2479 | Chen Wei |
| `TS-EXIT` | Export / reconstitute (DR) | CI + devnet | `NFR-018`, `FR-055` | TC-2480–TC-2519 | Erik Lindqvist |
| `TS-UPG` | Upgrade / migration | testnet | `NFR-017`, `FR-007`, ADR-010 | TC-2520–TC-2559 | Rafael Duarte |
| `TS-SMOKE` | Post-deploy smoke | all envs | walking skeleton in < 5 min | TC-2560–TC-2579 | Tester |
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-3199 | per §8 |
| `TS-EXPL` | Exploratory charters | L7 | one charter per epic `EP-01`…`EP-10` | TC-3200–TC-3249 | Tester |
| `TS-UAT` | User acceptance & usability | L7 | `NFR-022`, Doc 01 §B journey | TC-3250–TC-3299 | Grace Mbeki |

**`UT-####` ranges (engineer, Doc 06):** UT-0001–UT-0999 `packages/protocol` (UT-0001…UT-0040 already
in use) · UT-1000–UT-1999 contracts · UT-2000–UT-2499 circuits · UT-2500–UT-2999 SDK ·
UT-3000–UT-3499 ui/web · UT-3500–UT-3999 services.

---

## 15. Roles & responsibilities (RACI)

| Activity | Arch | Eng | Test | QA | SRE | PO | PM |
|---|---|---|---|---|---|---|---|
| This test strategy (Doc 04) | **A/R** | C | C | C | C | C | I |
| Unit tests `UT-####`, `TS-DIFF`, `TS-ABSENCE` | C | **A/R** | C | C | I | I | I |
| Test cases `TC-####` (Doc 07) | C | C | **A/R** | C | I | C | I |
| RTM (Doc 08) authorship | I | C | **R** | **A** | I | I | C |
| Adversarial suites `TS-ADV-*` | C | C | R | **A** | C | I | I |
| Red team `NF-03`, audits `NF-01`/`NF-02` | C | C | C | **A** | I | I | R |
| Performance / cost measurement | C | R | C | I | **A** | I | I |
| Accessibility (automated + manual) | C | R | **A/R** | C | I | C | I |
| Release readiness (Gate 2 packet) | I | C | R | **A** | C | **A** | R |
| Merge sign-off | I | R | C | **A** | I | I | I |
| Environment provisioning | C | C | C | I | **A/R** | I | I |

The engineer **never merges their own work**; reviewer-qa signs the merge. The tester writes only
Docs 07/08 and test artifacts. reviewer-qa writes nothing and verifies everything.

---

## 16. Schedule & milestones

Anchored to `CON-007`: Gate 1 target **2026-08-22**, Gate 2 target **2027-02-15**, launch
**2027-03-01**.

| Milestone | Target | Exit signal |
|---|---|---|
| Repo structure + unit-test standard built (Doc 06) | 2026-08-29 | `npm run verify` green including a real `packages/contracts` workspace (**OPEN-17**) |
| `TS-ABSENCE` + `TS-DIFF` skeletons live | 2026-09-12 | First allowlist snapshots checked in; first differential rule pair green |
| Circuit toolchain in CI with `circomspect` gating | 2026-09-26 | `claims.json` mechanism enforcing Z2 coverage |
| Walking skeleton E2E on devnet | 2026-11-07 | `TS-SMOKE` green end to end |
| Band A + Band B adversarial suites executed once | 2026-12-05 | Verdicts recorded; `OPEN-01`…`OPEN-06` resolved or escalated |
| `NF-01` privacy audit + `NF-02` security audit start | 2026-12-12 | Auditors have a frozen commit and a reproducible build |
| RDP performance + accessibility on release candidate | 2027-01-16 | `NFR-006`, `NFR-011`, `NFR-012` green |
| Rollback drill + censorship simulations (`NF-06`, `NF-07`) | 2027-01-30 | < 15 min rollback proven; ≥ 2 access paths verified |
| **Gate 2 packet assembled** | 2027-02-08 | §10.2 criteria evidenced; every `OPEN-##` closed or accepted in writing |
| **Gate 2** | 2027-02-15 | RTM zero gaps in Must rows; audits zero critical/high |
| Launch, staged 1 → 10 → 50 → 100% | 2027-03-01 | `TS-SMOKE` green at each stage; SLOs within budget |

Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a walking-skeleton capability (Doc 02 §11, `OI-02`), never deferring a
guardrail suite.

---

## 17. Defect management

| Severity | Definition | SLA (triage → fix) |
|---|---|---|
| **Sev-1** | A guardrail is breached, or a citizen could be misinformed about a governance outcome. Includes: **any** `TS-DIFF` divergence; any `TS-ABSENCE` failure; any privacy linkage; any Z3 under-constraint finding; any capability that can alter or halt a published or in-flight governance process | 1h → 24h; blocks merge and blocks the pipeline |
| **Sev-2** | A Must FR/NFR fails, without a guardrail breach | 4h → 3 days; blocks the release |
| **Sev-3** | A Should requirement fails, or a Must requirement degrades | 1 day → next release |
| **Sev-4** | Cosmetic, or a Could requirement | best effort |

**Guardrail escalation rule.** Any defect against a guardrail FR (Doc 02 §11's 22) or a
capability-absence assertion is **automatically Sev-1 regardless of estimated user impact**. The
reason is `TD-04`: there is no override, so there is no way to fix the consequence afterwards.

Every defect links to (a) the failing `TC-####`, (b) the requirement `FR/NFR`, (c) the `RISK` if any,
and (d) the `US-####`. A defect with no requirement link is a requirements gap and routes to the
product owner, not to the engineer.

---

## 18. Metrics & reporting

| Metric | Target | Why this one |
|---|---|---|
| **`TS-DIFF` divergences** | **0** | The single most predictive signal of a citizen being misinformed |
| Must-row RTM completeness | 100% at Gate 2 | Gate-2 condition |
| `claims.json` negative-test coverage (circuits) | 100% | Replaces line coverage where line coverage lies |
| `TS-ABSENCE` assertion count, and unreviewed snapshot diffs | monotonically rising; 0 unreviewed | Guardrails should accumulate, never shrink |
| Branch coverage — `packages/protocol` and immutable core | 100% | §10.5 |
| Seeded-defect drill catch rate | ≥ 90% quarterly | Measures assertion quality, not execution |
| Flake rate per suite (rolling 200 runs) | < 0.5%; **0 at L0–L3** | L0–L3 are deterministic; a flake there is a defect |
| Escape rate (defects found after the gate that a suite should have caught) | < 5% | Measures the plan, not the code |
| Cost per citizen action (median, p99) | < USD 0.01 / < USD 0.05 | `NFR-005`, measured on testnet then production |
| p95 TTI and action-ack on the physical RDP | ≤ 5s / ≤ 5s | `NFR-006`, RDP is authoritative |
| Anonymity-set floor violations | 0 | `NFR-002`; computed per published action including the `(root, region, epoch)` form |
| Adversarial suite execution recency | every Band A/B suite run within 7 days | An attack suite that has not run recently is documentation |
| MTTR for Sev-1 | < 24h | Guardrail breach dwell time |

Reported into the project-manager's `STATUS-DAILY` / `STATUS-WBR` (CLAUDE.md), sourced only from real
artifacts and cited; anything not yet produced is marked `N/A — not yet produced`, never estimated.

---

## 19. Risks to the test effort & contingencies

| Risk to testing | Contingency |
|---|---|
| The physical reference-device lab is not procured in time | CI proxy profile becomes the interim gate, **and the Gate-2 packet must state that `NFR-006`/`NFR-012` were verified on a proxy, not on the RDP.** No silent substitution |
| Circuit toolchain lands late, so `TS-ZK` compresses | Do **not** compress Z2/Z3. Compress Z1 instead — positive tests are the least informative class. If Z2/Z3 cannot be completed, `NFR-009` cannot pass |
| External audits (`NF-01`, `NF-02`) slip | They are Gate-2 exit criteria with no substitute. Scope absorbs the delay (`CON-007`), the gate does not move first |
| `TS-DIFF` becomes a maintenance burden as rules change | This is the intended cost of ADR-011. Reducing it is a scope decision, not a test decision, and requires an ADR |
| The `OPEN-##` list is not closed before Gate 2 | Each open item is presented individually to the Gate-2 approver for explicit written acceptance. None may be closed by silence |
| Test data discipline erodes under deadline pressure | The three CI scanners (§10.7 item 5) are build-failing and have no bypass. Removing them requires an ADR |

---

## 20. Deliverables

1. This plan (`docs/04-test-strategy-master-plan.md`).
2. Test cases — `docs/07-test-cases.md`, `TC-####` (tester).
3. Automated suites in-repo, per §14.
4. Golden files: ABI allowlist snapshots, storage-layout snapshots, constraint-count snapshots,
   `TS-DIFF` regression corpora, `claims.json` per circuit.
5. Execution reports per environment per release candidate.
6. Adversarial suite verdict reports, one per `RISK-01`…`RISK-16`.
7. External audit reports: `NF-01` (privacy), `NF-02` (security & cryptography), circuit audits.
8. RDP performance report, accessibility report (automated + manual), cost report.
9. RTM view — `docs/08-rtm.md` (tester authors, reviewer-qa verifies).
10. Gate-2 release-readiness summary against §10.2, including the `OPEN-##` disposition.

---

## 21. Traceability

Every `TC-####` traces to a Doc 02 requirement, a Doc 03 `DES-###`, a Doc 05 `US-####`, and — where
adversarial — a `RISK-##`. The RTM (Doc 08) is the system of record; **a gap in any Must row blocks
Gate 2.**

**Coverage assertion at v1.0.0 of this plan:**

- **All 61 FRs** have a named suite. Must FRs (42) are covered by `TS-FUNC` + `TS-EDGE` and, where
  the FR is a guardrail, additionally by `TS-ABSENCE` and/or a `TS-ADV-*` suite.
- **All 26 NFRs** have a verification method, instrument, environment, threshold and owner (§9).
- **All 16 RISKs** have exactly one dedicated adversarial suite (§8), each with a named owner and a
  quantitative pass criterion.
- **All 12 CONs** are covered: `CON-001` → `TS-ADV-14`; `CON-002` → §10.7 + `TS-DATA`; `CON-003` →
  `TS-ABSENCE` + `TS-ADV-16`; `CON-004` → `TS-ADV-16/A-16.6`; `CON-005` → `TS-ADV-14/A-14.3`;
  `CON-006` → `TS-ADV-03/A-03.2`; `CON-007` → §16; `CON-008` → `TS-DATA`; `CON-009` →
  `TS-ADV-12`; `CON-010` → `TS-ADV-08`; `CON-011` → `TS-PERF` (RDP); `CON-012` → `TS-ZK` §7.4 +
  `NF-02`.
- `DES-###` links: **pending Doc 03.** The ADRs already name `DES-036` (region quorum-freeze),
  `DES-041` (force-inclusion fallback in the SDK), `DES-052` (client refuses unregistered
  `zkeyHash`) and `DES-063` (panic re-vote); those four are referenced directly. The tester
  reconciles the complete `DES` mapping in Doc 08 once Doc 03 lands.
- **Declared coverage gaps** (inherited from Doc 05 §12, not hidden): `FR-005`, `FR-049`, `FR-050`,
  `FR-052`, `FR-053` have no story and therefore no `TC`. All are Should/Could. The tester MUST
  record them as **open non-Must RTM rows**.

---

## 22. Approvals

| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
| Architect (Accountable, author) | Priya Raghunathan | Submitted for review | 2026-08-09 | v1.0.0, Status: In Review |
| reviewer-qa (independent) | _pending_ | | | Testability of all Must rows; the `OPEN-##` list |
| Engineering | _pending_ | | | §11.2 required-tooling ownership; `OPEN-17` |
| SRE | _pending_ | | | Environments §11.1; `NF-06`, `NF-07` |
| Product Owner | _pending_ | | | `OPEN-01` (receipt-freeness at v1), `OPEN-02`, `OPEN-04` |
| Security | _pending_ | | | §7 ZK doctrine, §8 adversarial suites, §6 absence limits |

---

### Downstream

Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure are built at the start of Coding in
**Doc 06**, before any feature code — including `packages/contracts`'s missing test workspace
(`OPEN-17`) and the harness `storageLayout` extension that `TS-ABSENCE` depends on.
