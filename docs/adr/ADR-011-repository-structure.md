# ADR-011 — Repository & build: a single monorepo with enforced dependency direction

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect)
Traces:        SDD §9, CON-OPENSOURCE, NFR-AUDIT-01
```

## Context

The system spans Solidity, Circom, TypeScript SDK, an indexer, a web client, and ops tooling. A
protocol change (a new field in a proof's public inputs) must land atomically across contracts,
circuits, SDK and client, or the platform breaks in production for real voters. Polyrepo makes that
change a five-PR choreography with a window in which the deployed pieces disagree.

Additionally: this codebase must be **auditable by outsiders**. A citizen, journalist or security
researcher should be able to clone one repository and see the entire system. Splitting the trust
story across six repos is itself an accessibility failure.

## Decision

**One public monorepo**, npm workspaces, with dependency direction enforced in CI.

```
trumocracy/
├── packages/
│   ├── contracts/      Solidity: core (immutable) + registries + party modules
│   ├── circuits/       Circom sources, ceremony scripts, generated verifiers
│   ├── protocol/       chain-agnostic domain logic: IDs, encoding, state machines, thresholds
│   ├── sdk/            TypeScript client: proofs, tx building, 4337, force-inclusion fallback
│   └── ui/             design system (accessible components, i18n primitives)
├── apps/
│   ├── web/            Next.js PWA — the citizen-facing client
│   └── verifier/       standalone tally/root verifier a citizen can run locally
├── services/
│   ├── indexer/        event → read model
│   └── relayer/        4337 bundler adapter + paymaster policy
├── infra/              IaC, deployment topology
├── tools/              evm test harness, codegen, invariant runners
└── docs/               the VEKTOR 14-doc suite + ADRs
```

**Dependency rule (enforced by a CI check, not by convention):**

```
contracts ← (nothing)
circuits  ← (nothing)
protocol  ← (nothing)                    ← pure, no I/O, no chain, no framework
sdk       ← protocol, contracts(ABI), circuits(artifacts)
ui        ← protocol
web       ← sdk, ui, protocol
indexer   ← protocol, contracts(ABI)
```

`packages/protocol` is deliberately pure and dependency-free: threshold maths, tier rules, state
transitions and ID derivation live there and are unit-testable in milliseconds with no chain, no
mocks and no network. It is the same logic the contracts implement, which lets us run
**differential tests** (`protocol` vs deployed contract) as a class of test — the single highest-value
test type in this system, because a divergence between what the UI predicts and what the chain does
is how citizens get told their vote counted when it did not.

**Trunk-based, flags-first.** One long-lived branch. Every incomplete capability ships dark behind a
flag registered in `packages/protocol/flags.ts`, with the flag name recorded in Doc 06 and its
removal tracked as debt. Contracts get the same treatment through a `FeatureFlags` registry contract
read by the modules — because "ship dark" must apply on-chain too, or the flag strategy stops at the
frontend and the risky part ships un-flagged.

## Consequences

**Good** — atomic cross-layer changes; one clone for auditors; fast pure-logic tests; differential
testing across the layer boundary.

**Bad / accepted risk**
- CI runtime grows with the repo; mitigated by workspace-aware affected-target selection.
- A monorepo makes it easy to violate layering by accident; hence the CI dependency check rather
  than a documented rule nobody reads.
