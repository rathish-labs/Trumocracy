# Application Inventory (Service Record) — Trumocracy

```
Document ID:   INV-TRUMOCRACY
Version:       1.0.1
Status:        In Review  (becomes Living, reviewed quarterly, at Gate 2)
Owner:         Chen Wei — Reliability Lead (sre), Doc 13 §7.1
Source:        Doc 03 §5.2, §7, §8 · packages/* · docs/adr/ADR-001…ADR-014 · package.json
Last updated:  2026-08-21
```

> **Based on:** CMDB / Common Service Data Model + Production Readiness. **Produced in:** Operate (living).
> _The authoritative inventory for audits, DR planning, cost and on-call routing._
> **Document history — v1.0.1 (2026-08-21):** Corrected ceremony contributor-count figures in §2.5 (lines ~149, ~173) — replaced "≥500 independent contributors each / per circuit" convention with "contributor sets meeting the ADR-022 assurance-based target" per `DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` REC-1. No other content changed.

> **⚠ Status.** No production deployment exists. Every **address**, **CID**, **endpoint** and
> **measured figure** below is `N/A — not yet deployed` or `N/A — not yet measured`. The **structure**
> — components, owners, criticality, dependencies, data classification, licence, recovery objective —
> is complete and is what this document is for. Populate the address book at first deployment
> (Doc 10 §5) and reconcile it against chain state quarterly.

---

## 0. How to read this inventory

**Criticality tiers**

| Tier | Meaning | Test |
|---|---|---|
| **T0 — Constitutional** | Its failure or compromise breaks a promise that cannot be compensated: privacy, one-person-one-vote, or operator powerlessness | Would a failure here trigger `KC-1`, `KC-2` or `KC-7`? |
| **T1 — Essential** | Its failure stops citizens acting, but no promise is broken | Would a failure here breach `NFR-007`? |
| **T2 — Degrading** | Its failure makes the product slower or more expensive; a fallback exists | Is there a tested fallback path? |
| **T3 — Supporting** | Its failure is invisible to citizens | — |

**Data classification** — deliberately unusual, because the interesting classification here is
**"cannot exist"**, not "confidential":

| Class | Meaning |
|---|---|
| **PUB** | Public by design — on-chain, or published permanently |
| **PUB-DERIV** | Public, derived from PUB; non-authoritative |
| **DEV** | Lives only on the citizen's device, under their sole control. We never see it |
| **THIRD** | Personal data held by a **third party** (issuer/attester) under **their** controller relationship — disclosed to citizens before enrolment |
| **MIN** | Minimal operational data we do hold: ≤30-day retention, E2E-encrypted where possible, crypto-shredded on erasure |
| **∅ — ABSENT BY CONSTRUCTION** | The system has **no field capable of holding this**. Not "protected" — **absent**. This is the classification that makes `ADR-013 §3` answerable |

**Recovery objective** — RTO/RPO. Note that most off-chain components have **RPO = 0** because they
hold no authoritative state; the chain does (Doc 03 §7.3–7.5, §10.5).

---

## 1. Service identity

| Field | Value |
|-------|-------|
| Service name / ID | **Trumocracy** — `INV-TRUMOCRACY` |
| Business capability | Decentralised political-party incubation, membership and governance — `BR-001`…`BR-012` |
| Tier / criticality | **T0 — Constitutional.** Users may be political dissidents; a privacy failure is a safety failure |
| Lifecycle status | **Planned** — Phase 0 → Phase 1 (Doc 13 §3.1). Not Active |
| Product owner | **Priya Raghunathan** |
| Service owner / on-call | **Chen Wei** (sre) — primary; Samuel Oyelaran secondary |
| Repository | public monorepo, npm workspaces (`ADR-011`); `packages/*`, `apps/*`, `tools/*`, `services/*` |
| Licence (whole repo) | **AGPL-3.0-or-later** — copyleft chosen deliberately so a captured fork cannot be closed-sourced (`CON-004`, Doc 03 §8) |
| Public commitments | Doc 01 PR-FAQ; kill criteria Doc 13 §14 |
| Hard boundary | **Organises parties. Never conducts a binding state election** (`CON-001`, `ADR-013 §1`) — absolute, not negotiable at any gate |

---

## 2. Components / assets

### 2.1 On-chain core — immutable, no admin, no pause (`ADR-010`, `CON-003`)

| Asset | Design ID | Owner | Tier | Data class | Licence | Recovery (RTO/RPO) | Notes |
|---|---|---|---|---|---|---|---|
| **`PoseidonT3`** (library) | — | Samuel Oyelaran | **T0** | PUB | AGPL-3.0-or-later (deps: `poseidon-solidity` 0.0.5) | **no recovery — immutable**; redeploy = new address = migration | Deployed **first**; every Merkle tree links against it |
| **`FeatureFlags`** | `DES-037` | Chen Wei | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | The kill switch. `timelock` and `emergencyDisabler` are **`immutable` and NOT rotatable**. `enable` = timelock only; `disable` = timelock **or** emergency disabler, instant, subtractive only |
| **`VerifierRegistry`** | `DES-038`, `DES-039` | Rafael Duarte | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | Binds circuit → verifier → `zkeyHash` → ceremony URI. `SUPERSEDE_GRACE = 30 days`. **No accessor for historical versions** (`REF-06`) |
| **`PersonhoodRegistry`** | `DES-001`, `DES-003` | Marcus Adeyemi | **T0** | PUB (commitments, nullifiers) / **∅** (identity) | AGPL-3.0-or-later | no recovery — immutable | Identity tree, enrolment + action nullifiers, issuer set, per-issuer epoch caps. **`spendNullifier` is unpermissioned — `REF-03`, Gate-2 blocker** |
| **`RegionRegistry`** | `DES-004`–`DES-007`, `DES-036` | Marcus Adeyemi / Yuki Sato | **T0** | PUB (roots, counts, population) / **∅** (addresses) | AGPL-3.0-or-later | no recovery — immutable | Regions, residency trees, attesters, population oracle, region freeze. **`issueResidency` unauthenticated — `REF-02`, Gate-2 blocker** |
| **`PartyDeployer`** | — | Samuel Oyelaran | T1 | PUB | AGPL-3.0-or-later | no recovery — immutable | Holds `Party` creation bytecode (EIP-170). Stateless, ownerless, no discretion — **a code-layout concern, not a trust boundary** |
| **`GovernorDeployer`** | — | Samuel Oyelaran | T1 | PUB | AGPL-3.0-or-later | no recovery — immutable | Same, for `Governor` |
| **`PartyRegistry`** | `DES-009`–`DES-012`, `DES-034` | Priya Raghunathan (arch) | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | Petitions, thresholds, activation, fork petitions. **No approve/reject/review/feature function exists anywhere in it** |
| **`Party`** (one per party) | `DES-013`–`DES-015`, `DES-022`, `DES-031` | party's own members | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | Member tree, tenure, growth sampler + `AnomalousGrowth`, manifesto chain, entrenched clauses. **No vote-weight field exists** |
| **`Governor`** (one per party) | `DES-016`, `DES-018`–`DES-021` | party's own members | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | Tiered proposals, snapshot eligibility, tallies, timelock, permissionless finalise/execute |
| **`GovernanceRules`** (library) | `DES-016` | Priya Raghunathan | **T0** | PUB | AGPL-3.0-or-later | no recovery — immutable | Tier table + decision arithmetic; differentially tested against `packages/protocol` |

**Deployed addresses:** `N/A — not yet deployed`. At first deployment record, per environment:
contract, address, deploying commit SHA, `solc` version (0.8.28, Cancun), constructor arguments, and
the two people who authored and executed the deployment (Doc 10 §9).

### 2.2 ⭐ VerifierRegistry entries — the assets people forget

Each **circuit → verifier → `zkeyHash` → ceremony** binding is an inventoried asset in its own right.
The `zkeyHash` is the load-bearing field: clients refuse to prove against a proving key whose hash is
not registered here, which is what stops a compromised frontend silently handing a citizen a
backdoored key (`RISK-10`, `DES-052`).

| Circuit id | Public signals | Verifier (Phase 1) | Verifier (Phase 2+) | `zkeyHash` | Ceremony URI | Tier | Owner |
|---|---|---|---|---|---|---|---|
| `personhood_enrol` | 3 — `[issuerNullifier, identityCommitment, issuerId]` | **`MockVerifier`** ⚠ | Groth16, ceremony-bound | `N/A — not yet produced` | `N/A — not yet produced` | **T0** | Rafael Duarte |
| `residency_member` | 6 | **`MockVerifier`** ⚠ | Groth16, ceremony-bound | `N/A — not yet produced` | `N/A — not yet produced` | **T0** | Rafael Duarte |
| `tenure_member` | 5 | **`MockVerifier`** ⚠ | Groth16, ceremony-bound | `N/A — not yet produced` | `N/A — not yet produced` | **T0** | Rafael Duarte |
| MACI circuits (Phase 3) | tbd | — | Groth16, ceremony-bound | `N/A — not yet produced` | `N/A — not yet produced` | **T0** | Aisha Nkemdirim |

> **⚠ `MockVerifier` accepts any proof** and carries the marker `bool public constant
> IS_INSECURE_MOCK = true`. **The deployment-safety gate (Doc 10 §3.2) refuses to promote any
> environment whose `VerifierRegistry` contains a contract exposing `IS_INSECURE_MOCK()`.** It is
> asserted in `packages/contracts/test/adversarial.test.mjs:320-329` so the check cannot rot, but it
> **does not yet exist as a promotion job** (`REL-LIM-12`, Gate-2 blocker).
>
> **Inventory rule:** a superseded verifier stays live for `SUPERSEDE_GRACE = 30 days` and therefore
> **remains an inventoried asset for 30 days after retirement.** Never delete a row here on
> supersession; set a `retiredAt` and keep it until the grace window closes.

Source circuits present today: `packages/circuits/circuits/residency_member.circom`,
`tenure_member.circom`. Six circuits are planned for the Phase-2 ceremony programme (Doc 13 MS-08).

### 2.3 Off-chain packages (the monorepo)

| Asset | Design ID | Owner | Tier | Data class | Licence | Recovery | Notes |
|---|---|---|---|---|---|---|---|
| `@trumocracy/protocol` (`packages/protocol`) | `DES-045` | Priya Raghunathan | **T0** | PUB | AGPL-3.0-or-later | rebuild from source | Pure reference rules — thresholds, tier table, ID derivation, **the flag registry** (`src/flags.js`). **Zero runtime dependencies**, enforced, so it can serve as the differential oracle against the chain (`NFR-021`) |
| `@trumocracy/contracts` (`packages/contracts`) | — | Samuel Oyelaran | **T0** | PUB | AGPL-3.0-or-later | rebuild from source | Solidity sources, mocks, in-process EVM suites. Note: **no production deploy script exists** (`script/` holds only `compile.mjs`) — `REL-LIM-12` |
| `@trumocracy/circuits` (`packages/circuits`) | `ADR-005` | Rafael Duarte | **T0** | PUB | AGPL-3.0-or-later | rebuild from source; **`.zkey` from the published ceremony** | Circom sources. The proving keys are **not** rebuildable from source alone — they are ceremony outputs (§2.5) |
| `@trumocracy/sdk` | `DES-041`, `DES-051` | Samuel Oyelaran | T1 | PUB | AGPL-3.0-or-later | rebuild | Transport ladder: bundler → alternate → self-pay → **L1 force-inclusion**. All three fallbacks tested in CI |
| `apps/web` (PWA client) | `DES-050`, `DES-052`, `DES-063` | Nadia Hassan | T1 | **DEV** (identity secret, witness) | AGPL-3.0-or-later | re-pin previous CID, **< 5 min** / RPO 0 | Next.js PWA, viem, WASM prover, <200 KB initial JS. **Reproducible bundle.** Enforces zkey pinning, the safe confirmation screen and panic re-vote |
| `apps/verifier` | `DES-025`, `DES-044` | Rafael Duarte | **T0** | PUB | AGPL-3.0-or-later | rebuild | Independent tally re-computation and party-state export/verify. **The thing that makes "verifiable" true rather than claimed** |
| `tools/dep-guard` | `ADR-011` | Samuel Oyelaran | T3 | PUB | AGPL-3.0-or-later | rebuild | Enforces `protocol ← sdk ← web` in CI |
| `tools/evm-harness` | Doc 03 §14 | Ji-woo Park | T3 | PUB | AGPL-3.0-or-later | rebuild | solc-js + EthereumJS in-process; no RPC, no node, no network |

### 2.4 Operated services

| Asset | Design ID | Owner | Tier | Data class | Licence | Recovery (RTO / RPO) | Notes |
|---|---|---|---|---|---|---|---|
| **Indexer** (events → Postgres → GraphQL) | `ADR-014` | Chen Wei | **T2** | PUB-DERIV | AGPL-3.0-or-later | **15 min** service / **< 6 h** full rebuild · **RPO 0** | **A cache, never an authority.** Client re-verifies every decision-relevant value against chain. Logs nothing identifying a reader. ≥2 independent operators; client accepts user-supplied URLs |
| **Indexer Postgres** | `ADR-014` | Chen Wei | T2 | PUB-DERIV | PostgreSQL Licence | **not backed up — re-derived** · RPO 0 | Backup strategy is "re-derive from chain". Forward-only migrations |
| **Relayer / ERC-4337 bundler** | `DES-051` | Chen Wei | T2 | **∅** (no user record) | AGPL-3.0-or-later | **< 5 min** · RPO 0 | Stateless, horizontally scaled, replaceable. Client falls back automatically |
| **Paymaster + sponsorship treasury** | `DES-043` | Hiroshi Tanaka | T2 | PUB (on-chain spend) | AGPL-3.0-or-later | < 5 min · RPO 0 | Budget bound to the **personhood nullifier**, not an address. Per-tier caps (social 10/day, document 50, registry 50). Circuit-breaker at 3× p99 daily spend. **90-day buffer at p95 fees.** Degrades to self-pay — **never to denial** |
| **Gateways / CDN** | `ADR-013 §3` | Chen Wei | T2 | **∅** — **no access logging, by decision** | — | < 5 min · RPO 0 | Replaceable and blockable; blocking them does not stop the protocol |
| **Notification relay** (optional) | Doc 03 §5.3 | Amara Diallo | T3 | **MIN** — E2E-encrypted, ≤30 d, crypto-shredded | AGPL-3.0-or-later | 1 h / 24 h | **MUST NOT reveal party membership or governance activity** (`NFR-023`) |
| **Support desk** | — | Grace Mbeki | T3 | **MIN** — ≤30 d | vendor | 4 h / 24 h | Conventional storage, real deletion |
| **Sentry** (error monitoring) | — | Chen Wei | T3 | **MIN** | commercial | 4 h / 24 h | PII scrubbing on; **no IP capture, no user context, no breadcrumbs from governance code paths** — an error report carrying a session is a deanonymisation surface |

### 2.5 ⭐ Content, permanence and ceremony assets — the ones people forget

| Asset | Design ID | Owner | Tier | Data class | Licence | Recovery | Notes |
|---|---|---|---|---|---|---|---|
| **IPFS pinning cluster** | `ADR-009` | Chen Wei | **T1** | PUB | infra (Kubo, Apache-2.0/MIT) | **RTO 15 min · RPO 0** (content is content-addressed and mirrored) | **≥3 geographically separate, independent operators.** Falling to **2 = Sev-2; 1 = Sev-1** (S-13). Pins: client bundles (all historical), manifestos, charters, proposal bodies, region maps, **ceremony transcripts**. Pins are **additive — never unpinned**, which is precisely why client rollback is fast and certain |
| **Arweave mirror** | `ADR-009` | Chen Wei | **T1** | PUB | Arweave network | **permanent by construction** · RPO 0 | The durability backstop for everything in the pinning cluster. Records the transaction id per artefact. Survives us: if Trumocracy ceases to exist, the client and the ceremony evidence remain retrievable |
| **⭐ Ceremony transcripts (phase-2 trusted setup)** | `ADR-005 §5–6` | Rafael Duarte | **T0** | PUB | published transcript | **irreplaceable — permanence IS the control** | **Six ceremonies, contributor sets meeting the ADR-022 assurance-based target each**, on Perpetual Powers of Tau (Doc 13 MS-07/MS-08). Each produces a `.zkey` whose hash is frozen on-chain in `VerifierRegistry.zkeyHash` and whose transcript URI is published. **Any third party must be able to run `snarkjs zkey verify` and reproduce the binding.** Losing a transcript does not break the running system, but it **destroys the ability to prove the setup was honest** — which is the entire value of the ceremony. Store on IPFS **and** Arweave **and** with ≥2 independent external archivists. Status: `N/A — not yet produced` |
| **Proving keys (`.zkey`) served to clients** | `DES-052` | Rafael Duarte | **T0** | PUB | ceremony output | re-fetch from IPFS/Arweave; hash-checked | The client **refuses to prove against a key whose hash is not the one registered on-chain**. A mismatch is a Sev-1, not a cache miss |
| **Client bundle CIDs (all historical)** | `DES-050` | Nadia Hassan | T1 | PUB | AGPL-3.0-or-later | permanent | The rollback inventory. **Never unpin a previous bundle** — the previous CID *is* the rollback |
| **ENS name + content-hash record** | Doc 03 §7.2 | Chen Wei | T1 | PUB | ENS | minutes | The pointer that rollback moves. Multi-sig controlled; two-person change |
| **⭐ Reproducible-build verification job** | `DES-050`, `NFR-021` | Rafael Duarte | **T0** | PUB | AGPL-3.0-or-later | rebuild from pinned toolchain | Rebuilds `apps/web` from a tagged commit with a **pinned toolchain** and asserts the artefact hash equals the served bundle hash. Runs **every deploy and hourly** (SLI **S-16**, zero tolerance). **`NFR-021` requires verification by ≥1 independent party**, so the job's inputs, toolchain pins and expected hashes are **published** so anyone can re-run it. Without this job, "open source" is a claim about a repository, not about the software a citizen is actually running. Status: `N/A — not yet produced` |
| **Transparency register** | `FR-057`, `ADR-013 §4` | Sofia Marchetti | **T0** | PUB | — | permanent | Compulsion requests received, what was produced, and every jurisdiction-scoped display-filtering action. Structured so that **silence is visible**: a gagged request still increments the aggregate count |
| **Public governance-health dashboard** | `NFR-019`, Doc 11 §3.2 | Yuki Sato | T1 | PUB (k ≥ 1000 enforced) | AGPL-3.0-or-later | 1 h / RPO 0 | Must be live at launch with **zero individually identifying fields**. Status: `N/A — not yet produced` |
| **Deployment address book** | Doc 10 §5 | Chen Wei | **T0** | PUB | — | in-repo | Every contract address per environment + commit SHA + toolchain. Reconciled against chain quarterly |

### 2.6 ⭐ Human and institutional assets

These are inventoried because a failure in any of them is an outage of a protocol property, and none
of them appears in a conventional CMDB.

| Asset | Design ID | Owner | Tier | Composition rule | Recovery | Notes |
|---|---|---|---|---|---|---|
| **⭐ MACI coordinator committee (5-of-7)** | `DES-024`, `ADR-006` | Aisha Nkemdirim | **T0** | **7 operators**, drawn from **≥5 distinct legal jurisdictions** (so no single court order reaches a threshold) and from **competing parties** (so no single political interest does). **Sampled fresh per election** — there is no standing committee to capture | **<5 available → re-run the election under a fresh committee with the encrypted queue intact. NEVER a plaintext tally** — that would retroactively strip privacy from people who already voted | Members publish **liveness attestations**; failure to participate is **slashable** and triggers automatic replacement before the tally. Key generated by DKG. **No member, and no minority coalition, can decrypt anything.** Status: `N/A — not yet constituted` (MS-12, 2027-05-07) |
| **Personhood issuers** | `DES-002` | Marcus Adeyemi | **T0** | **≥2 active, ≥1 NOT state-operated** — enforced on-chain by `issuerSetValid()` | 48 h expedited removal; **addition takes 30 days** | Each has a tier (1 social / 2 document / 3 registry), a per-day epoch cap and a **published security assessment** at a content-addressed URI. Removing one **never revokes credentials already issued** |
| **Residency attesters** | `DES-006` | Marcus Adeyemi | **T0** | **≥2 per launch region** (a region attestable by one party has a single point of capture). Staked and slashable. **>50% of a region's issuance halts issuance automatically** | region freeze; slash; 30-day onboarding for a replacement | `issuanceCount[attester][region]` is **public on-chain by design — spikes are visible to everyone**, not only to us |
| **⭐ Population-oracle sources** | `DES-007` | Yuki Sato | **T0** | **≥5 independent sources per region** (`MIN_POPULATION_SOURCES`). Effective value = **median**; **7-day dispute window**; **±5%/quarter drift cap** | re-submit a corrected value and re-propose. **There is no privileged cancel, and there must not be** | Typical sources: national census, electoral roll, UN WPP, World Bank, national statistics office. **Record every source's vintage year and provenance** — five sources copying one census is one source wearing five hats. Caveat: all submit via the timelock (`REF-04`). Status: `N/A — not yet registered` |
| **Protocol timelock** | `ADR-010` | protocol governance | **T0** | 30-day for additions; 48 h expedited for **removals only** | **`immutable` in every core contract — NOT rotatable.** Rotation = redeploy = migration | The only way to *add* anything. Trumocracy holds **no** special key after Phase 4 (`renounceProtocolKeys()`) |
| **Emergency disabler** | `ADR-010`, `DES-037` | Chen Wei | **T0** | **2 holders in different jurisdictions**, hardware-backed, either can act alone | **`immutable` — NOT rotatable.** Losing both = the kill switch is gone permanently; response is migration | Quarterly proof-of-possession. Power is **purely subtractive** — a compromise is annoying, not catastrophic |
| **Independent auditors (×2)** | `NFR-009`, `CON-012` | Rafael Duarte | **T0** | One protocol audit, one circuits audit, independent firms | re-engage | **Zero critical and zero high open at Gate 2**, plus a signed remediation re-review. `KC-P1`: if not met, **the gate is not presented** |
| **Per-jurisdiction legal counsel** | `CON-005`, `NFR-015` | Sofia Marchetti | **T0** | One per pilot jurisdiction, before enablement | re-engage | Features are independently gateable per jurisdiction |
| **Ceremony contributors** | `ADR-005` | Rafael Duarte | **T0** | **contributor sets meeting the ADR-022 assurance-based target per circuit**, including named public figures | **re-run the ceremony** (`KC-P2`) | An outreach programme, not a script run — 11 weeks of recruitment (Doc 13 §3.4) |

---

## 3. Dependencies

| Dependency | Direction | Type | Tier | Failure handling | Owner |
|---|---|---|---|---|---|
| **OP Stack L2 (Base)** — sequencer, ordering | upstream | blockchain | **T0** | Sequencer is a **liveness and ordering trust only** — it can delay, never forge. Fallback: **L1 force-inclusion** (`DES-041`), ≤60 min (`NFR-025`) | Chen Wei |
| **Ethereum L1** — settlement, blobs, force-inclusion | upstream | blockchain | **T0** | No fallback — this is the floor. Accepted (`ADR-001`) | Chen Wei |
| **Blob fee market (EIP-4844)** | upstream | economic | T1 | Cost is a **distribution, not a constant**. 90-day buffer at p95; degrade to self-pay | Hiroshi Tanaka |
| Personhood issuers | upstream | institutional | **T0** | ≥2, ≥1 non-state; epoch caps; 48 h expedited removal; **existing credentials survive removal** | Marcus Adeyemi |
| Residency attesters | upstream | institutional | **T0** | ≥2/region; public issuance counts; slashing; region freeze | Marcus Adeyemi |
| Population sources | upstream | data | **T0** | ≥5, median, 7-day dispute, ±5% drift cap, **500-endorsement absolute floor** so a deflated oracle gains an attacker nothing | Yuki Sato |
| ERC-4337 bundler | upstream | service | T2 | alternate bundler → self-pay → L1 | Chen Wei |
| IPFS network + pinning cluster | both | infra | T1 | ≥3 operators + Arweave; content-addressed so any copy is verifiable | Chen Wei |
| Arweave | upstream | infra | T1 | permanence backstop; IPFS + CDN as the fast path | Chen Wei |
| App stores / registrars / DNS / ENS | upstream | distribution | T1 | **PWA-first, ≥2 independent access paths** (`NFR-014`, `CON-010`); no single-store dependency | Nadia Hassan |
| `@zk-kit/lean-imt.sol` 2.0.1 | upstream | library | **T0** | pinned, audited, vendored in the lockfile | Samuel Oyelaran |
| `poseidon-solidity` 0.0.5 | upstream | library | **T0** | pinned | Samuel Oyelaran |
| Circom / snarkjs / circomspect | upstream | toolchain | **T0** | pinned; `circomspect` mandatory in CI (`ADR-005`) | Rafael Duarte |
| Solidity 0.8.28 (Cancun) | upstream | toolchain | **T0** | pinned; recorded per deployment | Samuel Oyelaran |
| Node 22, vitest 3.2.4, TypeScript 5.9.3 | upstream | toolchain | T3 | pinned in `package.json` | Samuel Oyelaran |
| MACI coordinator committee | both | institutional | **T0** | 5-of-7; automatic replacement; re-run with the queue intact; **never a plaintext tally** | Aisha Nkemdirim |
| Independent indexer operators | downstream | community | T2 | ≥2; deterministic and open source, so anyone can run one and diff it | Chen Wei |
| Journalists / auditors (`apps/verifier`) | downstream | community | T1 | read-only; their ability to verify **is** a control, not a courtesy | Yuki Sato |
| Election commissions | downstream | institutional | — | **evidence only, filed by a named human officer.** Nothing flows the other way; no state system can write into Trumocracy (`ADR-013 §1`) | Sofia Marchetti |

---

## 4. Data

| Data | Classification | Store | Retention | Residency | PII? |
|---|---|---|---|---|---|
| Identity commitments (Poseidon of a device-only secret) | **PUB** | chain (LeanIMT) | permanent | global | **No** — no re-identification path exists because the linking data exists nowhere |
| Enrolment nullifiers (per issuer) | **PUB** | chain | permanent | global | No |
| Action nullifiers (per scope) | **PUB** | chain | permanent | global | No — scoping makes actions **unlinkable** across scopes |
| Residency tree leaves `Poseidon(C, regionId, validUntil, tier)` | **PUB** | chain | permanent | global | No |
| Region paths (`"IN/KA/BLR"`) | **PUB** | chain | permanent | global | No — **administrative labels only**; no street, postcode or coordinate field exists |
| Population values + sources | **PUB** | chain | permanent | global | No |
| Party membership commitments, `joinedAt`/`leftAt` | **PUB** | chain | permanent | global | No — proves membership, cannot list members |
| Proposals, tallies, timelocks | **PUB** | chain | permanent | global | No |
| Manifestos, charters, proposal bodies | **PUB** | IPFS + Arweave, hash-bound on-chain | permanent | global | Pseudonymous authorship. **A member cannot erase their contribution to a public manifesto** — a political record that can be rewritten is not a political record (`ADR-013 §2`, stated plainly in Doc 01) |
| Ceremony transcripts | **PUB** | IPFS + Arweave + ≥2 external archivists | permanent | global | No |
| Identity secret, witness data, voting key | **DEV** | citizen's device, wrapped by a passkey in the secure enclave | citizen-controlled | device | Yes — **and we never see it.** Erasure is uninstalling |
| Identity documents, biometrics, addresses | **THIRD** | at the issuer/attester, under **their** controller relationship | their obligation | their jurisdiction | Yes — **disclosed to the citizen before enrolment.** Residual risk accepted and stated (`RISK-07`, Doc 01 §E3) |
| Notification channel / preferences | **MIN** | citizen's device, or an optional **E2E-encrypted** relay the protocol cannot read | ≤30 days | operator | Minimal; **crypto-shredded** on erasure |
| Support records | **MIN** | support system | ≤30 days | operator | Minimal; real deletion |
| Indexer read model | **PUB-DERIV** | Postgres | rebuildable | multi-region | No |
| Metrics / logs / traces | **PUB-DERIV**, pre-aggregated | metrics store | 13 months (aggregates only) | multi-region | **No** — Doc 11 §3.0 rules R1–R5 forbid any individual identifier; quarterly re-identification review, **zero linkages** is the pass bar |
| Gateway access logs | **∅ — ABSENT BY CONSTRUCTION** | — | — | — | **No — gateways run with no logging** (`ADR-013 §3`) |
| Reader / browsing history | **∅ — ABSENT BY CONSTRUCTION** | — | — | — | **No.** The reading record would be as dangerous as the membership record we refused to build |
| Name, address, postcode, coordinate, DOB, document number, document image, biometric template **or any hash of them**, email, phone, IP, device id | **∅ — ABSENT BY CONSTRUCTION** | **nowhere** | — | — | **No field exists that could hold them.** A hashed address is still an address — the search space is small enough to enumerate — which is why no hash of any personal datum appears either (`CON-002`, `NFR-010`, `ADR-004`) |
| Any mapping nullifier/commitment → person | **∅ — ABSENT BY CONSTRUCTION** | **nowhere** | — | — | **No.** This is the row that makes `ADR-013 §3` answerable: we cannot produce it because it does not exist, on-chain or off it |

---

## 5. Environments & endpoints

| Env | Chain | Verifiers | Flag defaults (`flags.js`) | Endpoint | Access | Status |
|---|---|---|---|---|---|---|
| `local` | in-process EthereumJS | mocks | all on | — | developer | active |
| `CI` | in-process EthereumJS | mocks + rejecting mock | matrix | — | CI | active |
| `devnet` | L2 devnet | mocks | all on | `N/A — not yet deployed` | team | planned |
| `testnet` | Base Sepolia | **real, ceremony-bound** | phase-appropriate | `N/A — not yet deployed` | public | planned — Phase 1 target |
| `staging` | Base mainnet | real | prod-minus | `N/A — not yet deployed` | invited cohort | planned |
| `production` | Base mainnet | real | staged 1→10→50→100% | `N/A — not yet deployed` | public | **planned — Gate 2 not approved** |

**Flag defaults (`packages/protocol/src/flags.js` — the single source of truth):**

| Flag | onChain | dev | staging | **prod** | `removeBy` |
|---|---|---|---|---|---|
| `petitions` | yes | on | on | **on** | GA — v1.0.0 |
| `party_governance` | yes | on | on | **on** | GA — v1.0.0 |
| `elections` | yes | on | on | **off** | Phase 3 rollout complete |
| `recall` | yes | on | on | **off** | Phase 3 rollout complete |
| `maci_voting` | yes | on | off | **off** | Phase 3 — becomes mandatory |
| `private_endorsement` | yes | on | off | **off** | Phase 4 |
| `delegation` | yes | on | off | **off** | Phase 4 — pending capture analysis |
| `treasury` | yes | on | on | **off** | Phase 3 — pending per-jurisdiction legal review |
| `fork` | yes | on | on | **off** | Phase 3 |
| `l1_force_inclusion` | **no** | on | on | **on** | **never** — permanent escape hatch |
| `sponsored_gas` | **no** | on | on | **on** | **never** — degrades to self-pay, never to denial |

> Known conflict: `packages/contracts/test/fixture.mjs` `PHASE1_FLAGS` enables `fork` and `treasury`.
> **`flags.js` wins; a deployment must never take its flag array from the test fixture** (`REF-07`).

---

## 6. Infrastructure footprint

| Layer | Footprint | Notes |
|---|---|---|
| Settlement | OP Stack L2 (Base) + Ethereum blobs | Only commitments, roots, nullifiers and tallies go on-chain; documents go to content-addressed storage |
| Compute | Stateless indexer API + Postgres read model; stateless horizontally-scaled relayer | **Multi-region active-active for read paths** |
| Storage | IPFS CIDv1 across **≥3 geographically separate** pinning operators + **Arweave** permanence | Content-addressed: any copy is self-verifying |
| Network | Static client via IPFS (ENS-named) + Arweave mirror + conventional CDN, **all serving a byte-identical reproducible bundle** | **No component sits on a path where its absence prevents participation** — tested by running the E2E suite with the indexer and relayer switched off |
| Client | PWA; <200 KB initial JS; WASM prover in a Web Worker | Floor: **2 GB RAM / Android 9 / 64 kbit/s** (`CON-011`) |
| Capacity | Doc 03 §7.6 | Binding constraint is the **vote burst** (1 M tx/h peak); mitigation is **scheduling** — ≥72 h windows, staggered regional closes — **not scaling** |

---

## 7. Security & compliance controls

| Control | Implementation | Trace |
|---|---|---|
| Authentication | **Passkey** in the device secure enclave (RIP-7212); **no seed phrase, no password, no gas token** | `ADR-002`, `DES-040`, `NFR-022` |
| Authorisation | **ZK proof of a property**, never an identity check. Membership, residency and tenure are *proven*, never looked up | `ADR-003`, `ADR-005` |
| **Absence of privileged roles** | **No pause, no proxy, no admin, no upgrade key on the core.** Verified by **capability-absence tests** — the tests assert the functions do not exist (Doc 03 §14, Doc 10 §7.3) | `CON-003`, `ADR-010`, `NFR-017` |
| Kill switch | `FeatureFlags.disable` — **subtractive only**, reason string published on-chain | `DES-037`, `NFR-020` |
| Sybil resistance | Per-issuer enrolment nullifiers; per-scope action nullifiers; issuer epoch caps; ≤50% attester share | `NFR-004`, `RISK-01` |
| Anonymity floor | **k ≥ 1,000** enforced on-chain (`MIN_ANONYMITY_SET`) and re-applied to every published metric | `NFR-002`, `DES-008` |
| Coercion resistance | MACI + **5-of-7 threshold committee**; ≥72 h windows; safe confirmation screen; panic re-vote | `NFR-003`, `ADR-006`, `DES-063` — **Phase 3** |
| Circuit integrity | `zkeyHash` frozen on-chain; ceremony URI published; **client refuses unregistered proving keys** | `RISK-10`, `DES-038`, `DES-052` |
| **Deployment safety** | **Promotion refused if any registered verifier exposes `IS_INSECURE_MOCK()`** | Doc 10 §3.2 — **job not yet built** |
| Reproducible builds | Pinned toolchain; hourly hash verification; **independently verifiable by ≥1 outside party** | `NFR-021`, `DES-050` |
| Data minimisation | **By construction** — the fields do not exist (§4) | `NFR-010`, `CON-002`, `CON-008` |
| Erasure | Honoured by **never collecting**; crypto-shredding for residual off-chain content | `NFR-015`, `ADR-013 §2` |
| Transparency | Every governance action emits an event; every tally independently re-computable; compulsion + filtering register published | `FR-054`, `FR-057`, `ADR-013 §4` |
| Exit rights | Full party-state export, **no permission required from anyone**; tested in CI as `TC-EXIT-*` | `NFR-018`, `DES-044` |
| Accessibility | WCAG 2.2 AA in CI; ≥8 launch languages incl. ≥1 RTL; 200% text scaling; full keyboard + screen reader | `NFR-011`, `NFR-013` |
| Audits | **Two independent** — protocol + circuits — **zero critical/high open at Gate 2** | `NFR-009`, `CON-012` |
| **Standards applicability** | GDPR **partial** (bites only on the minimal operational data, not on the public record, which holds no personal data) · WCAG 2.2 AA **yes** · National electoral law **partial** (party formation, not us as an authority) · **PCI-DSS N/A** — no cardholder data ever; the citizen is never charged | Doc 02 §6.1 |

---

## 8. SLAs / SLOs & support hours

Full definitions in **Doc 11 §3**. Headlines:

| SLI | SLO | Observed |
|---|---|---|
| Citizen write path | **≥ 99.5%** monthly | `N/A — not yet measured` |
| Public read / verify | **≥ 99.9%** monthly | `N/A — not yet measured` |
| Cost per citizen action | **median < USD 0.01**, p99 < USD 0.05, **citizen pays USD 0.00 always** | `N/A — not yet measured` |
| Action ack / finalisation | p95 ≤ 5 s / ≤ 120 s | `N/A — not yet measured` |
| Alternative-path inclusion | ≤ 60 min | `N/A — not yet measured` |
| Rollback | **< 15 min** | `N/A — not yet measured` (drill not executed) |
| Recovery success | ≥ 99% within 14 days | `N/A — not yet measured` |

**Support hours.** On-call 24×7 during rollout windows and for Sev-1 (Chen Wei primary).
Business-hours for Sev-3/4. **Support contact rate target ≤5% of enrolments** (`NFR-022`).
**No SLA is offered to any single citizen**, because no citizen depends on us: every path has an
operator-independent fallback, and that is the actual guarantee.

---

## 9. Cost & capacity

| Item | Value | Owner |
|---|---|---|
| Programme appetite through launch | **USD 4.2M**, team of **18** (`CON-007`) | Priya Raghunathan |
| Cost per citizen action | **median < USD 0.01** — a **product metric with an alert**, not an infrastructure line item | Hiroshi Tanaka |
| Sponsorship buffer | **≥90 days at p95 fees**; circuit-breaker at **3× p99** daily spend | Hiroshi Tanaka |
| Citizen cost | **USD 0.00, always** — non-negotiable (`NFR-005`) | Hiroshi Tanaka |
| Run cost (indexer, relayer, pinning, CDN) | `N/A — not yet measured` | Chen Wei |
| Scaling limits | 50 M enrolled · 10 M eligible in one ballot window · 5 000 actions/s peak (`NFR-008`) | Chen Wei |
| Binding constraint | **Vote burst** — L2 throughput + blob capacity. Mitigated by **scheduling** (≥72 h windows, staggered regional closes), not by scaling | Chen Wei |
| Economic kill criterion | **`KC-6`** — cost cannot be held below **USD 0.05/action at 1M users** → pivot the cost model **before** scaling | Hiroshi Tanaka → PM → human approver |

---

## 10. Licences & third-party agreements

| Item | Licence / agreement | Note |
|---|---|---|
| **All Trumocracy code** | **AGPL-3.0-or-later** | Copyleft **chosen deliberately** so a captured fork cannot be closed-sourced (`CON-004`, Doc 03 §8). Every `.sol` file carries `SPDX-License-Identifier: AGPL-3.0-or-later` |
| `@zk-kit/lean-imt.sol` 2.0.1 | MIT | pinned |
| `poseidon-solidity` 0.0.5 | MIT | pinned |
| Circom / snarkjs | GPL-3.0 / Apache-2.0 | toolchain |
| circomspect | Apache-2.0 | mandatory in CI |
| viem | MIT | client |
| Next.js | MIT | client |
| EthereumJS | MPL-2.0 | test harness only |
| vitest, TypeScript | MIT / Apache-2.0 | dev |
| PostgreSQL | PostgreSQL Licence | indexer read model |
| IPFS (Kubo) | Apache-2.0 / MIT | pinning |
| Arweave | protocol; storage purchased per artefact | permanence |
| Base / OP Stack | MIT (OP Stack); L2 usage | `ADR-001`; **inherits the L2's upgrade-key risk — accepted for v1, re-opened in Phase 4** |
| Ceremony transcripts | published, unencumbered | must be third-party verifiable |
| **Audit engagements (×2)** | commercial | **must be contracted by 2026-10-15 (MS-04)** or the January slot is lost — a 10-week slip |
| Per-jurisdiction legal counsel | commercial | one per pilot jurisdiction, before enablement |
| MACI committee participation | agreements with civil-society orgs, universities, party-nominated observers | **≥5 legal jurisdictions, competing parties, sampled per election** |
| Pinning operators (≥3) | agreements | geographic separation required |
| Sentry, support desk | commercial | PII-scrubbed / minimal-retention configurations are contractual, not just configured |

**No commercial agreement may grant any counterparty a capability the protocol denies us** — no
privileged read, no pause, no takedown, no user identification. If a vendor requires one, the vendor
is not usable.

---

## 11. Recovery

| Aspect | Value |
|---|---|
| **RTO / RPO — off-chain services** | **15 min / 0.** RPO is zero because they hold **no authoritative state**; the chain does |
| **RTO / RPO — client bundle** | **< 5 min / 0** — re-point ENS to the previous CID, which is still pinned and permanently on Arweave |
| **RTO / RPO — indexer** | **15 min** service, **< 6 h** full history rebuild / **0** — re-derived, never restored |
| **RTO / RPO — on-chain core** | **N/A — no recovery exists.** Immutable. Response to a core defect is **migration**, not restoration (`ADR-010`) |
| **Kill switch** | `FeatureFlags.disable(flag, reason)` — 1 tx from the emergency disabler, **subtractive only**. **Cannot** halt a running vote or reverse a recorded decision |
| **Backup location** | Chain (authoritative) · IPFS ≥3 operators · Arweave (permanent) · public monorepo · ≥2 external archivists for ceremony transcripts |
| **What can never be recovered** | A spent nullifier · a recorded vote · a party activation · a tree insertion · a published manifesto version · a deployed core contract. **See Doc 10 §8.3 before promising anyone anything** |
| **DR drill cadence** | Rollback drill **quarterly** (Doc 10 §8.6) · censorship simulation quarterly · indexer rebuild-and-diff monthly · migration rehearsal on testnet before every core deployment · emergency-disabler proof-of-possession quarterly |
| **Survivability of the organisation** | **The protocol survives us.** Contracts immutable and permissionless; client reproducible and permanently mirrored; anyone can run an indexer and a relayer; every party can export and reconstitute elsewhere with no permission. This is a designed property, not a consolation |

---

## 12. Change history

| Version | Date | Change | By |
|---|---|---|---|
| 1.0.0 | 2026-08-09 | Initial inventory. Structure complete; all addresses, CIDs, endpoints and measured figures `N/A — not yet deployed / measured`. Records the Gate-2 blockers carried from Doc 09 and the `REF-01`…`REF-07` learnings staged in Doc 11 §10.4 | Chen Wei (sre) |

**Review cadence:** quarterly once Living, and **immediately** on any of: a contract deployment, a
registry change, an operator joining or leaving any diversity class, a licence change, a committee
constitution or resampling, or a ceremony completing.

---

## 13. Links to the suite

| Doc | Path | Status |
|---|---|---|
| 01 PR-FAQ | `docs/01-press-release-prfaq.md` | present |
| 02 Requirements (SRS) | `docs/02-requirements-srs.md` | present |
| 03 Architecture (SDD) | `docs/03-architecture-design-sdd.md` | present |
| 04 Test strategy | `docs/04-test-strategy-master-plan.md` | present |
| 05 Backlog | `docs/05-product-backlog.md` | present |
| 06 Coding & UT | `docs/06-coding-and-ut.md` | **`N/A — not yet produced`** |
| 07 Test cases | `docs/07-test-cases-suites.md` | **`N/A — not yet produced`** |
| **08 RTM** | `docs/08-traceability-matrix.md` | **`N/A — not yet produced` — Gate-2 blocker** |
| 09 Release notes | `docs/09-release-notes.md` | present (In Review) |
| 10 Deployment runbook | `docs/10-deployment-runbook.md` | present (In Review) |
| 11 Operations runbook | `docs/11-operations-runbook.md` | present (In Review) |
| 12 Application inventory | `docs/12-application-inventory.md` | this document |
| 13 Project plan | `docs/13-project-plan.md` | present |
| 14 User guide | `docs/14-user-guide.md` | **`N/A — not yet produced`** |
| Refine log | `docs/refine-log.md` | present (empty register) — `REF-01`…`REF-07` **staged in Doc 11 §10.4, not yet appended** |
| ADRs | `docs/adr/ADR-001` … `ADR-014` | present |
| Reviews | `artifacts/reviews/` | **empty — Gate-2 blocker** |
| Dashboards | — | **`N/A — not yet produced`** |

---
### Related
Operate → **Doc 11**; deploy → **Doc 10**; release content → **Doc 09**; design → **Doc 03**;
plan, RACI and kill criteria → **Doc 13**.
