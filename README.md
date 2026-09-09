# Trumocracy

**Political parties that no godfather owns.**

Any verified citizen can draft a party programme, gather demonstrated public support, and — on
reaching a threshold that is computed in code — bring that party into existence. Anyone can
join it without permission. Every counting member has exactly one vote when voting ships — see
the Status block below for what "verified" and "counting" actually mean in this version.

This repository contains the whole system: the contracts, the circuits, the client, the
reference implementation of the rules, and the full design and decision record that explains
why every part is the way it is.

---

## Status — read this first

Trumocracy is a working **design** with a running reference implementation and three
application features built behind feature flags: **party creation**, **joining and
membership**, and **proposals and debate**. It is **not deployed anywhere** and has never been
used for a real vote. The zero-knowledge verifiers are development mocks that accept any proof
(`IS_INSECURE_MOCK`). A deployment-safety check that would refuse to promote any environment
still wired to one **is written and unit-tested (`UT-0600`–`UT-0612`) — but nothing that
actually deploys calls it yet, because nothing deploys** (Doc 09 `REL-LIM-12`). Treat it as a
control that is owed, not one you can currently rely on.

**Voting in this version (v1) is NOT anonymous, NOT receipt-free and NOT coercion-resistant:
the operator's own database can see how each account voted and which party it belongs to.**
The private ballot the rest of this README describes is the **v2 design** (MACI,
zero-knowledge enrolment) and **is not built**.

**v1's design also checks that you are a real, legal-age person — not that you are a *unique*
one.** That check is not built yet (see "What is actually built", below). When it is built,
someone who holds two legitimate government identity documents will be able to pass it twice
and hold two counting accounts. One-person-one-vote is a v2 property; v1 does not guarantee it
(`FR-132`(d), Doc 02 §4.46), and no public-facing material for this version should be read as
promising otherwise.

**Do not use this software to organise where being identified could hurt you.**

The eight named roles you will see credited throughout `docs/` and `artifacts/` — product-owner,
project-manager, architect, engineer, tester, reviewer-qa, technical-writer, sre — are **AI-agent
personas** run under the VEKTOR process described in [`CLAUDE.md`](CLAUDE.md), not real people.
The maintainer is the only human decision-maker on record for this repository.

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
3. **In the v2 design, there is no member list.** The on-chain contract skeleton holds only
   commitments and nullifiers — no field there can hold a name, an address, a document number
   or a biometric ([ADR-013](docs/adr/ADR-013-legal-and-data-protection.md)). **That is not yet
   what is deployed.** The shipped v1 application is a conventional database, authenticated the
   way ordinary apps are ([ADR-025](docs/adr/ADR-025-v1-phone-auth-spam-resistance.md)). For a
   **counting-verified** account, its design keeps **at least six operational fields**, per the
   `FR-132`(b) allowlist (Doc 02 [§4.46](docs/02-requirements-srs.md)): a one-way-hashed phone
   number (`phone_hash`), a one-way-hashed identity-document reference (`subject_id_hash`), an
   id-verified flag, an age-verified flag, the issuing region, and a verification timestamp —
   plus a link from each account to the party it joined. An **open-tier** account (phone-only,
   before the government-ID check) keeps the phone hash and the party link, plus the anti-abuse
   signals `FR-133` requires (Doc 02 §4.47) — none of the other five counting-tier fields exist
   until that check runs. (Doc 03 §10.13.9, `DES-100` — the v1 identity-verification and
   retention model; §10.13.5, `DES-097` — the v1 conventional-auth stack; Doc 02 §16.4 `H-02`.)
   The built demo you can run today **would** keep this in an in-memory store — but today its
   credential store is **empty by design**: nothing on the demo page can populate it, because
   that would mean faking the enrolment flow this repo has deliberately not built (Doc 06 §7
   item 22). Trumocracy itself can read the account↔party link. Nobody outside Trumocracy can —
   and it is never published — but "nobody outside Trumocracy can see it" is a different,
   weaker promise than "no member list exists," and this README will not blur the two.
4. **A party cannot be captured quickly, and can always be left.** Constitutional changes need
   tenure, snapshots, supermajorities and long timelocks; a membership flood raises the bar
   automatically and is announced on-chain; and any 10% of members can fork the party — charter,
   manifesto history and lineage intact — without anyone's permission
   ([ADR-008](docs/adr/ADR-008-anti-capture-governance.md)).
5. **v1 voting is not private, not receipt-free and not coercion-resistant, and we say so
   plainly rather than soften it.** Casting a vote uses ordinary account sign-in, the same as
   logging into any app — not a special anonymous proof. Concretely, in this version:
   - **your vote will not be anonymous** — Trumocracy can tell that you voted, and how;
   - **your vote will not be receipt-free** — if someone pressures you to prove how you voted,
     there will be a real record that could be shown;
   - **your vote will not be coercion-resistant** — there is no way to quietly change your vote
     afterwards so a threat becomes useless;
   - **the operator database can see vote direction and party membership.** Nobody outside
     Trumocracy sees this on any public page, but Trumocracy's own records can, and a government
     could order them to be produced.

   The private, receipt-free ballot — MACI with a 5-of-7 threshold coordinator — is the **v2
   design** ([ADR-006](docs/adr/ADR-006-coercion-resistance.md)) and is **not built**. Until it
   ships, the product tells every voter this in plain words at the point of voting
   ([FR-131](docs/02-requirements-srs.md), Doc 14
   [§2.6](docs/14-user-guide.md)). We would rather lose users than mislead one.

## Repository layout

```
packages/protocol/    pure reference implementation of the rules — zero dependencies
packages/contracts/   Solidity core: registries, petitions, parties, governance
packages/circuits/    Circom sources for the zero-knowledge circuits
packages/sdk/         TypeScript client: proofs, transports, verified reads
packages/ui/          shared React components (design tokens; e.g. PrivacyStatus, not yet
                      mounted on any shipped surface — see Doc 06 §7)
apps/web/             the citizen-facing PWA — three flagged demo features plus one
                      flag-gated route that shows a placeholder in the public build
                      (see "What is actually built", below)
services/indexer/     event-sourced read model — a cache, never an authority
tools/evm-harness/    solc-js + EthereumJS: offline, deterministic contract tests
tools/dep-guard/      enforces the dependency direction from ADR-011
docs/                 the full document suite + ADR-001..025
artifacts/            session notes and decision records from every VEKTOR agent role
```

## What is actually built, and what is a demo

Three application features are wired end to end behind feature flags, and a fourth route,
`/verify`, exists behind its own flag, off by default in the public build:

- **party creation** — write a charter, open it as a petition (`/petitions/new`);
- **join and membership** — join an open party with a phone number (`/parties`, carries the
  FR-131 clause (d) open-tier/counting-tier notice);
- **proposals and debate** — put an idea to the members, including the vote-surface honesty
  banner (`/proposals`);
- **`/verify`** — the planned identity-check screen. It sits behind the feature flag
  `enrolment_ui`, which is **on in dev and off in staging and production**. In the public build
  the link does not appear in the site's navigation, and the page itself shows a short notice:
  no check exists yet, and a plain description of what the planned check will and will not do.
  Enrolment is not built and cannot start until a legal opinion for the first pilot country is
  finished (`CON-015`). The fuller design copy — the enrolment sprint's starting point, not a
  promise of the words the finished page will use — stays in the code and renders only when the
  flag is on in `dev`. It must be checked and rewritten before that flag turns on: some of it is
  wrong even about the planned check — the outside company that will run it does see the
  document, this pilot has only one government-run check to offer (not the several the text
  describes), and a scrambled version of the document is kept, not nothing. See
  [Doc 14 §1.2](docs/14-user-guide.md) for the citizen-facing account of this plan, and Doc 02
  §13 (j)(3) — ruled and closed 2026-09-08 — for the decision, recorded in full at
  [`artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md`](artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md).

The three flagged features are **static-export demo pages** (`apps/web`, Next.js
`output: 'export'`). They use **in-memory stores** — nothing you do on them persists, and
nothing is verified cryptographically. The identity and residency checks behind them are
**mock implementations** (`IS_INSECURE_MOCK`), not real verifiers. Which features are switched
on is controlled by the `NEXT_PUBLIC_TRUMOCRACY_ENV` environment variable (default `prod`, the
strict end — `maci_voting` off, so the honesty banner shows; set it to `dev` to see everything
on).

**None of this is deployed anywhere. Do not use it for real voting or real political
organising.** See [Doc 06 §7](docs/06-coding-and-ut.md) for the full, numbered list of known
limitations, and [Doc 14](docs/14-user-guide.md) for the plain-language user guide, which
carries the same warning at the top.

## Running it

```bash
npm ci                     # ~18s on a clean clone; no network calls beyond the registry
npm run lint:deps          # dependency-direction check (ADR-011)
npm run typecheck          # packages/ui, apps/web
npm test                   # 640 tests at the time of writing (2026-09-08); ~3 minutes —
                            # the contracts suite deploys the protocol on an in-process EVM
npm run test:protocol      # just the reference implementation, in milliseconds — the fast loop
npm run compile:contracts  # solc-js compile
npm run verify             # most of what CI runs, locally (see note below)
```

Use `npm ci`, not `npm install` — it installs exactly what `package-lock.json` pins, which is
what CI does. Two packages (`esbuild`, `sharp`) have install scripts npm will warn about; that
is expected and harmless.

`npm run verify` is `lint:deps && compile:contracts && typecheck && test` — a useful local
proxy for CI, but not identical to it: CI (`.github/workflows/verify.yml`) additionally runs a
separate `flag-debt` job (every feature flag must carry a removal target) and does **not** run
a repo-wide typecheck step. Run both if you want the exact CI picture.

**No network, no binary downloads, no RPC.** Solidity is compiled by `solc-js` and executed by
EthereumJS, both plain npm packages, so a fresh clone reproduces every result byte-identically
on any machine. That is a deliberate choice: this codebase has to be verifiable by
journalists, auditors and citizens, not only by engineers with a working Rust toolchain
([Doc 06 §1.1](docs/06-coding-and-ut.md)).

Requires **Node ≥22 and <25** (see `engines` in `package.json`). There is no `.npmrc` enforcing
this strictly, so Node 20 is **unsupported and will warn** (`EBADENGINE`) rather than hard-fail
at `npm ci` — expect real failures further on, in code paths this project does not test against
older Node. Windows users: `.gitattributes` normalises line endings to LF, so the first
`git status` after an edit may show a "CRLF will be replaced by LF" notice — this is harmless.

To see the demo pages, start the web app (`npm run dev -w @trumocracy/web`) — this has not been
verified on a fresh clone this session; the automated tests cover the components, not the dev
server.

## Where to start reading

| If you want to know… | Read |
|---|---|
| what this is for — **the v2 target vision, not what is built** (read its §0 first) | [Doc 01 — PR-FAQ](docs/01-press-release-prfaq.md) |
| exactly what it must do | [Doc 02 — Requirements](docs/02-requirements-srs.md) |
| how it works and why | [Doc 03 — Architecture](docs/03-architecture-design-sdd.md) |
| the decisions that shaped it, with what each one costs | [docs/adr/](docs/adr/) |
| how it is tested, including what testing cannot establish | [Doc 04 — Test strategy](docs/04-test-strategy-master-plan.md) |
| what is actually built, and what is not | [Doc 06 — Coding & UT, §7](docs/06-coding-and-ut.md) |
| how to use it, as a citizen — with the v1 truth up front | [Doc 14 — User guide](docs/14-user-guide.md) |
| what is open, unresolved, and known-insecure right now | [SECURITY.md](SECURITY.md) |
| how to contribute | [CONTRIBUTING.md](CONTRIBUTING.md) |

## How this repository is run

This project is built with the **VEKTOR** delivery process, documented in full in
[`CLAUDE.md`](CLAUDE.md): a fourteen-document suite, two human approval gates (direction, then
launch), and everything between them shipped on trunk behind feature flags. The eight role
names you will see throughout `docs/` and `artifacts/` are **AI-agent personas, not real
contributors** — see the Status block above. The full decision record, including every ruling,
review, and disagreement, is published in `docs/` and `artifacts/` on purpose: the same honesty
standard applied to the product ([FR-131](docs/02-requirements-srs.md)) is applied to how the
product was built.

## Licence

- **Code:** [AGPL-3.0-or-later](LICENSE). Copyleft is chosen deliberately: a fork of a
  political platform must not be able to close its source; the network clause means anyone
  running a modified Trumocracy for the public must publish their changes.
- **`docs/` and `design/`:** [CC BY-SA 4.0](docs/LICENSE). The design record stays forkable and
  attributable.
- **Contributions:** sign off with the [Developer Certificate of Origin](DCO) —
  `git commit -s` — rather than a Contributor License Agreement. No paperwork, no copyright
  assignment.

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to propose a change, and
[SECURITY.md](SECURITY.md) for how to report a vulnerability.
