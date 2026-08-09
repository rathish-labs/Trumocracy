# Coding & Unit Testing — Trumocracy

```
Document ID:   CODE-TRUMOCRACY
Version:       1.0.0
Status:        In Review
Owner:         Ravi Deshmukh — Principal Architect (acting engineer, Phase 0/1 drop)
Source:        SDD-TRUMOCRACY v1.0.0 §9 · ADR-011
Last updated:  2026-08-09
```

> Built from SDD §9 and ADR-011. Records what was physically built, the unit-testing
> standard, the `UT-####` inventory, the feature-flag ledger, and the defects the review loop
> found and what was done about them.

---

## 1. Repository build (from SDD §9 / ADR-011)

The structure was built **before feature code**, per the VEKTOR Coding & UT rule.

```
trumocracy/
├── packages/
│   ├── protocol/     pure reference rules — ZERO runtime dependencies, enforced by CI
│   ├── contracts/    Solidity core + tests (in-process EVM)
│   ├── circuits/     Circom sources for the ZK circuits
│   └── sdk/          TypeScript client (proofs, transports, verified reads)
├── apps/
│   └── web/          Next.js PWA
├── services/
│   └── indexer/      event-sourced read model — a cache, never an authority
├── tools/
│   ├── evm-harness/  solc-js + EthereumJS: offline, deterministic contract testing
│   └── dep-guard/    ADR-011 dependency-direction enforcement
└── docs/             the VEKTOR 14-doc suite + ADR-001..014
```

**Dependency direction is enforced, not documented.** `npm run lint:deps` fails the build on a
violation, and `@trumocracy/protocol` is held to zero runtime dependencies so it remains a
credible differential reference. A rule that lives only in a document is a rule that is
already broken somewhere.

### 1.1 Toolchain decision: why no Foundry or Hardhat

Both were rejected for this repository, and the reason is a product requirement rather than a
preference. `CON-004` requires reproducible, independently verifiable builds, and the audience
includes journalists, auditors and citizens — not only engineers with a working Rust
toolchain. Foundry needs a downloaded binary; Hardhat fetches a native `solc`. Both make
"clone and verify the tests pass" contingent on a network fetch succeeding.

`tools/evm-harness` uses `solc-js` (the compiler as a WASM npm package) and `@ethereumjs/vm`
(the EVM as an npm package). `npm install && npm test` on a clean clone reproduces every
result offline, byte-identically, on any machine. The cost is speed — the suite takes minutes,
not seconds — and that is an acceptable trade for a codebase whose verifiability is a
political property.

The harness provides: multi-file compilation with `node_modules` import resolution,
PoseidonT3 library linking and deployment, deploy/call/read with viem ABI encoding, event
decoding, **cross-contract custom-error decoding**, block-time control (`warp`) and state
snapshots.

### 1.2 Verified toolchain facts (measured, not assumed)

| Fact | Value | How established |
|---|---|---|
| Solidity | 0.8.28, `cancun` | `solc.version()` in the harness |
| On-chain/off-chain Merkle parity | identical roots | `LeanIMT` + `poseidon-solidity` on-chain vs `@zk-kit/lean-imt` + `poseidon-lite` off-chain |
| Merkle insert cost | 69,461 / 89,794 / 73,356 gas for leaves 1–3 | measured in the harness |
| Contract sizes | all under the 24,576-byte EIP-170 limit (largest: PartyDeployer 13,185) | compiler output, checked in `script/compile.mjs` |

Note on gas figures: the harness reports **execution gas only** — `runCall` excludes the
21,000 intrinsic cost and all calldata cost, and models no L1 blob fee. These numbers are a
**regression detector, not a price**. Cost per action against NFR-005 is measured on a real
L2 in the Doc 04 cost suite.

## 2. Unit-testing standard

1. **Test names state the guarantee, not the mechanism.** "refuses a second join from the
   same person" beats "test join revert". The suite doubles as the readable specification of
   what the protocol promises.
2. **Every negative path gets a test**, and it asserts the *specific* custom error. A test
   that only asserts "it reverted" passes for the wrong reason forever.
3. **Capability-absence is tested as a control** (§4).
4. **Differential tests are mandatory** wherever the reference implementation and a contract
   implement the same rule. A divergence between what the client predicts and what the chain
   does is how a citizen gets falsely told their vote counted.
5. **No mock where a real component fits.** The whole protocol is deployed in-process for
   integration tests; only the ZK verifiers are mocked, because the real ones require the
   Phase-2 ceremonies.
6. **Determinism.** Fixed genesis timestamp, deterministic accounts, no wall clock, no
   randomness. A flaky governance test is a governance bug you have not found yet.
7. **Coverage target:** 100% of branches in `packages/protocol` and in the governance-critical
   contract paths (membership, thresholds, tallies, nullifiers, eligibility). Elsewhere,
   coverage is a diagnostic, not a target — chasing a number produces tests that assert
   nothing.

## 3. `UT-####` inventory

| Range | Area | Package | Count |
|---|---|---|---|
| UT-0001..0028 | governance rules: tiers, surge, tally, eligibility, schedule, thresholds | protocol | 41 |
| UT-0030..0055 | party lifecycle, vision/charter validation, regions, anonymity guard, issuer invariant, flags | protocol | 41 |
| UT-0100..0125 | deployment, enrolment, petitions, activation, membership | contracts | 25 |
| UT-0200..0230 | proposals, quorum, supermajority, surge, entrenchment, timelock | contracts | 11 |
| UT-0300..0361 | adversarial, one suite per RISK; capability-absence; deployment safety; ship-dark | contracts | 18 |
| UT-0400..0420 | differential: reference vs chain | contracts | 12 |
| UT-0500..0525 | indexer projection: determinism, ordering, divergence, reader-blindness | indexer | 16 |

Every `UT-####` maps to an `FR`/`NFR`/`RISK` in the RTM (Doc 08).

## 4. Capability-absence testing

Several guarantees in this system are the **absence of a function**: no admin, no pause, no
transfer, no way to resolve a nullifier to a person. These are tested three ways:

1. **ABI-surface assertions** — the compiled ABI must not contain `pause`, `transfer`,
   `approve`, `setAdmin`, `upgradeTo`, `grantRole`, `forceRemoveMember`, `overrideResult`, …
2. **Selector scanning of deployed bytecode** — the ERC-20/721 selectors must not appear.
3. **Opcode scanning** — no `DELEGATECALL` (`0xf4`) in the core, so no proxy pattern can hide
   behind it.

**What this does and does not prove.** It proves no *named* capability exists at the ABI
boundary, and it fails the build the day someone adds one — which is strictly better than a
review convention that a tired reviewer can miss. It does **not** prove the absence of an
unnamed backdoor reachable through a `fallback`, nor that an authorised caller cannot do
something surprising. Those remain the job of the two independent audits (Doc 13 MS-09), and
Doc 04 records the limitation rather than letting the green check imply more than it earns.

## 5. Defects found by the review loop, and what was done

The Doc 04 test strategy reviewed this code drop and found four real defects. All four are
fixed in this drop, each with a regression test named for the guarantee it protects.

| # | Defect | Severity | Fix | Regression test |
|---|---|---|---|---|
| 1 | `spendNullifier` was `external` with no caller restriction. Anyone could burn any nullifier and permanently deny that citizen the action — a one-call disenfranchisement. | **Critical** | Restricted to modules the registry deployed; `spenderAuthoriser` set by the timelock; no de-authorisation path, since revoking a live party's ability to record votes would be a pause button by another name. | UT-0325, UT-0326 |
| 2 | Enrolment nullifiers were scoped **per issuer**, so under 1-of-N acceptance one human could enrol once per accepted issuer and vote once per enrolment — silently turning 1p1v into 1pNv. | **Critical** | Nullifiers are now scoped per identifier **namespace**: every issuer reading the same underlying document shares a namespace, so the second enrolment collides and is refused. The cross-*type* residual is bounded and documented in ADR-003 rather than papered over. | UT-0109, UT-0109b |
| 3 | `issuerSetValid()` (≥2 issuers, ≥1 non-state) was a view that nothing enforced; `enrol()` never consulted it, so a region could fall to a single state issuer and keep enrolling. | **High** | `enrol()` now fails closed on the invariant. | UT-0109c |
| 4 | `vote`, `finalize` and `execute` were gated on the governance feature flag, so the emergency disabler could freeze a ballot that was already open — exactly the pause-a-live-vote capability CON-003 forbids. | **High** | Flags now gate *starting* a capability, never *completing* one already under way. `propose` is gated; `vote`/`finalize`/`execute` are not. | UT-0360, UT-0361 |

Two further findings were accepted as **documentation defects** and fixed: dangling `ADR-017`
references (the ADR set ends at 014), and a RACI conflict where the same named individual
owned both the requirements and the architecture. Three findings were escalated to Doc 03 §16
as open questions rather than silently closed: the NFR-025 / force-inclusion timing conflict,
the un-measurability of NFR-004's duplicate rate, and the Phase-1 public-tally exposure.

## 6. Feature-flag ledger (ship dark)

| Flag | dev | staging | prod | On-chain | Removal target |
|---|---|---|---|---|---|
| `petitions` | on | on | on | yes | GA v1.0.0 |
| `party_governance` | on | on | on | yes | GA v1.0.0 |
| `elections` | on | on | **off** | yes | Phase 3 complete |
| `recall` | on | on | **off** | yes | Phase 3 complete |
| `maci_voting` | on | **off** | **off** | yes | Phase 3 — becomes mandatory |
| `private_endorsement` | on | off | off | yes | Phase 4 |
| `delegation` | on | off | off | yes | Phase 4 — pending capture analysis |
| `treasury` | on | on | **off** | yes | Phase 3 — pending per-jurisdiction legal review |
| `fork` | on | on | **off** | yes | Phase 3 |
| `l1_force_inclusion` | on | on | on | no | never — permanent escape hatch |
| `sponsored_gas` | on | on | on | no | never — degrades to self-pay, never to denial |

Every flag carries a removal target; `permanentFlags()` returns empty and a test asserts it,
so a flag cannot quietly become permanent configuration. Every flag that can be exercised
on-chain is *also* enforced by the `FeatureFlags` contract — a frontend-only flag would leave
the risky path live for a direct caller.

## 7. Known limitations of this drop

1. **Verifiers are mocks.** Real Groth16 verifiers require the Phase-2 ceremonies. The
   deployment-safety check refuses to promote any environment whose registry contains a
   contract exposing `IS_INSECURE_MOCK()`, and a test asserts the check itself works.
2. **Circuits are written but not compiled.** `packages/circuits` holds the Circom sources for
   `residency_member` and `tenure_member`; compiling them needs the `circom` binary, which is
   a Phase-2 CI job. Nothing in this drop claims a proof has been verified.
3. **Elections, Recall, Treasury and the MACI adapter are not implemented.** They are Phase-3
   scope, and their flags are off in every environment above dev. The `Governor` already
   refuses the public-tally path when `maci_voting` is on, so the switchover cannot leave both
   paths open.
4. **`Party.growthSamples` trims by array shift**, which is O(n) at the 512-sample bound.
   Correct but wasteful; a ring buffer is queued as debt before mainnet scale.
5. **Phase-1 tallies are publicly readable on-chain.** The client and indexer suppress interim
   counts, but chain state is chain state. This is a real limitation, stated plainly in the
   release notes and closed by MACI in Phase 3 — not hidden behind a UI that implies more
   privacy than the protocol currently delivers.

## 8. Commit and branch conventions

Trunk-based on `claude/decentralized-political-party-fy8b1k`. Conventional Commits
referencing `US-####` where a commit implements a story. Small, reversible commits. The
engineer never merges their own work: `reviewer-qa` signs the merge (Doc 08 verification).
