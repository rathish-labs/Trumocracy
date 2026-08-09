# Trumocracy

**Political parties that no godfather owns.**

Any verified citizen can draft a party programme, gather demonstrated public support, and — on
reaching a threshold that is computed in code — bring that party into existence. Anyone can
join it without permission. Every member has exactly one vote. Nobody, including the people
who wrote this software, can stop a party, alter a vote, or reveal who a member is.

This repository contains the whole system: the contracts, the circuits, the client, the
reference implementation of the rules, and the full design and decision record that explains
why every part is the way it is.

---

## The five things worth knowing before you read the code

1. **There is no token.** Not a governance token, not a sellable membership, not delegated
   weight for rent. Voting power is not an asset, so it cannot be bought, borrowed or
   flash-loaned. The classic governance attack is not mitigated here — it is *absent*
   ([ADR-007](docs/adr/ADR-007-no-transferable-power.md)).
2. **There is no admin.** No pause switch, no proxy, no upgrade key, no privileged role in the
   core. This is deliberate: the ability to stop a political process on request is the first
   thing a hostile state would demand, so we did not build it
   ([ADR-010](docs/adr/ADR-010-protocol-governance.md)).
3. **There is no member list.** The chain holds commitments and nullifiers. There is no field
   anywhere in the data model capable of holding a name, an address, a document number or a
   biometric — so the honest answer to a subpoena is "we do not have it, and here is the code
   proving it" ([ADR-013](docs/adr/ADR-013-legal-and-data-protection.md)).
4. **A party cannot be captured quickly, and can always be left.** Constitutional changes need
   tenure, snapshots, supermajorities and long timelocks; a membership flood raises the bar
   automatically and is announced on-chain; and any 10% of members can fork the party — charter,
   manifesto history and lineage intact — without anyone's permission
   ([ADR-008](docs/adr/ADR-008-anti-capture-governance.md)).
5. **Voting is not yet coercion-resistant, and we say so.** In this phase your vote is
   anonymous but you can still *prove* how you voted to someone pressuring you. MACI with a
   5-of-7 threshold coordinator closes that in Phase 3
   ([ADR-006](docs/adr/ADR-006-coercion-resistance.md)). Until it lands, the client tells every
   voter this in plain words. We would rather lose users than mislead one.

## Repository layout

```
packages/protocol/    pure reference implementation of the rules — zero dependencies
packages/contracts/   Solidity core: registries, petitions, parties, governance
packages/circuits/    Circom sources for the zero-knowledge circuits
packages/sdk/         TypeScript client: proofs, transports, verified reads
apps/web/             the citizen-facing PWA
services/indexer/     event-sourced read model — a cache, never an authority
tools/evm-harness/    solc-js + EthereumJS: offline, deterministic contract tests
tools/dep-guard/      enforces the dependency direction from ADR-011
docs/                 the full document suite + ADR-001..014
```

## Running it

```bash
npm install
npm run verify          # dependency guard + typecheck + every test suite
npm run test:protocol   # the rules, in milliseconds
npm run test:contracts  # the whole protocol on a real EVM, in-process (takes minutes)
```

**No network, no binary downloads, no RPC.** Solidity is compiled by `solc-js` and executed by
EthereumJS, both plain npm packages, so a fresh clone reproduces every result byte-identically
on any machine. That is a deliberate choice: this codebase has to be verifiable by
journalists, auditors and citizens, not only by engineers with a working Rust toolchain
([Doc 06 §1.1](docs/06-coding-and-ut.md)).

## Where to start reading

| If you want to know… | Read |
|---|---|
| what this is for, and the hard questions answered honestly | [Doc 01 — PR-FAQ](docs/01-press-release-prfaq.md) |
| exactly what it must do | [Doc 02 — Requirements](docs/02-requirements-srs.md) |
| how it works and why | [Doc 03 — Architecture](docs/03-architecture-design-sdd.md) |
| the fourteen decisions that shaped it, with what each one costs | [docs/adr/](docs/adr/) |
| how it is tested, including what testing cannot establish | [Doc 04 — Test strategy](docs/04-test-strategy-master-plan.md) |
| what is actually built, and what is not | [Doc 06 — Coding & UT](docs/06-coding-and-ut.md) |
| how to use it, as a citizen | [Doc 14 — User guide](docs/14-user-guide.md) |

## Status

Phase 1 — the walking skeleton — with elections, recall, treasury, fork and receipt-free
voting shipped dark behind flags. The ZK verifiers are development mocks; the real ones
require the public ceremonies in Phase 2, and a deployment check refuses to promote any
environment still wired to a mock. [Doc 06 §7](docs/06-coding-and-ut.md) lists every known
limitation of this drop, and [Doc 13](docs/13-project-plan.md) has the phased plan and the
conditions under which this product should be stopped rather than continued.

## Licence

AGPL-3.0-or-later for governance-critical code. Copyleft is chosen deliberately: a fork of a
political platform must not be able to close its source.
