# Deployment Guide & Release Runbook — Trumocracy

```
Document ID:   DEPLOY-TRUMOCRACY
Version:       1.0.1
Status:        In Review
Owner:         Chen Wei — Reliability Lead (sre), Doc 13 §7.1
Source:        packages/contracts/src/core/* · packages/contracts/test/fixture.mjs ·
               packages/protocol/src/flags.js · Doc 03 §7 · Doc 13 §9 · ADR-001, ADR-010, ADR-014
Last updated:  2026-08-21
```

> **Based on:** Google SRE + AWS Well-Architected (Operational Excellence). **Produced in:** Launch.
> **Approved at:** Gate 2.
> _So any on-call engineer can run a release safely: pre-checks, deterministic deploy order, staged
> rollout, verification, and a rollback whose limits are stated honestly rather than assumed away._
> **Document history — v1.0.1 (2026-08-21):** Corrected Gate-2 checklist ceremony entry (§3.1) — replaced "≥500 contributors each" convention with "contributor sets meeting the ADR-022 assurance-based target each" per `DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` REC-1. No other content changed.

> **⚠ GATE STATUS — 2026-08-09.** **Gate 2 (MS-13, target 2027-05-14) is NOT approved.** This runbook
> is a Gate-2 *input*, not an authorisation. §3 lists the preconditions; several are **failing**, not
> merely pending. No production deployment may be initiated from this document until a human
> approver has cleared Gate 2. See Doc 09 §0 and §7.

---

## 1. Overview

### 1.1 Deployment architecture

Trumocracy has **three deployables and one immutable substrate**, and only one of them can be
rolled back in the ordinary sense.

```
              ┌──────────────────────────── IMMUTABLE, NOT ROLLBACK-ABLE ────────────────────────────┐
              │                                                                                       │
  citizen ──▶ │  core contracts on the L2  ── PersonhoodRegistry · RegionRegistry · PartyRegistry ·   │
   (PWA)      │                                Party · Governor  (no proxy, no admin, no pause)       │
              │                                                                                       │
              │  registries (timelocked)   ── VerifierRegistry · issuer set · attester set ·          │
              │                                region scheme · population oracle                      │
              │                                                                                       │
              │  FeatureFlags              ── enable: 30-day timelock  ·  disable: emergency, instant │
              └───────────────────────────────────────────────────────────────────────────────────────┘
                        ▲                         ▲                              ▲
                        │                         │                              │
              ┌─────────┴──────────┐   ┌──────────┴─────────┐        ┌───────────┴────────────┐
              │  CLIENT BUNDLE     │   │  RELAYER / BUNDLER │        │  INDEXER               │
              │  IPFS + Arweave    │   │  + ERC-4337        │        │  events → Postgres →   │
              │  + CDN, reproducible│  │  paymaster         │        │  GraphQL (cache only)  │
              │  ROLLBACK: re-pin  │   │  ROLLBACK: re-point│        │  ROLLBACK: re-point /  │
              │  previous CID      │   │  / drain           │        │  rebuild from chain    │
              └────────────────────┘   └────────────────────┘        └────────────────────────┘
```

Three properties follow from this shape and govern everything in this runbook:

1. **The contracts are the product; the services are conveniences.** No component in the lower row
   sits on a path where its absence prevents participation (Doc 03 §7.2, `NFR-025`). That is why the
   E2E suite runs with the indexer and relayer switched off.
2. **A deploy adds; it does not replace.** Deploying a new core version does not retire the old one.
   Parties opt in by a migration vote (`ADR-010`). There is no cutover.
3. **The only fast, protocol-level lever is subtractive.** `FeatureFlags.disable` turns a capability
   off for future calls. It cannot turn anything on, cannot stop an in-flight transaction, and
   cannot reverse anything already recorded (`FeatureFlags.sol` doc-comment; `CON-003`).

**CI/CD.** Trunk-based; every merge builds the reproducible client bundle and runs the full suite.
Contract deployment is a **deliberate, manual, witnessed operation** — not a CI step — because it is
irreversible. Client and services deploy continuously behind flags.

### 1.2 Release type & versioning

| Type | What changes | Contract deploy? | Rollback lever | Typical duration |
|---|---|---|---|---|
| **Core deployment** | new core contract version | **yes — irreversible** | none; migration only | days (rehearsed on testnet first) |
| **Registry change** | issuer / attester / verifier / region scheme / population source | no (timelocked call) | 48 h expedited **removal only** | 30 days (addition) / 48 h (removal) |
| **Flag change** | capability on/off | no | `disable` in one tx | minutes |
| **Standard** | client bundle + services | no | re-pin previous CID; re-point service | < 15 min (`NFR-020`) |
| **Hotfix** | client bundle only | no | re-pin previous CID | < 5 min |
| **Config-only** | flag defaults, endpoint list, paymaster policy | no | revert config | < 5 min |

Versioning is SemVer. **The contract deployment address, not the version string, is the identity of
a core release** — record both. Release `0.1.0` is the Phase-1 walking skeleton (Doc 09).

---

## 2. Prerequisites & dependencies

### 2.1 Access required (and who holds it)

| Capability | Held by | Control | Notes |
|---|---|---|---|
| Protocol **timelock** — enable flags, register verifiers, register/authorise issuers & attesters, create regions, submit population, freeze regions, slash | Protocol governance (`ADR-010`); **Trumocracy holds no unilateral key after Phase 4** | 30-day timelock; 48 h expedited for **removal only** | `timelock` is `immutable` in `FeatureFlags`, `VerifierRegistry`, `PersonhoodRegistry`, `RegionRegistry` — it cannot be rotated without redeploying |
| **Emergency disabler** — `FeatureFlags.disable(flag, reason)` | Named on-call SRE **and** a second holder in a different jurisdiction; 2 holders, either can act alone | Instant, single tx, **subtractive only** | `emergencyDisabler` is `immutable`. Loss of both keys = loss of the kill switch permanently. See §11.3 |
| Client bundle publish (IPFS pin + Arweave + ENS record) | Release engineer + SRE (two-person) | ENS content-hash update | Reproducible build hash must match before pinning |
| Relayer / paymaster config + treasury buffer | SRE + Hiroshi Tanaka (cost owner, `NFR-005`) | Change-controlled | 90-day buffer at p95 fees (`ADR-001`) |
| Indexer deploy + Postgres | SRE | Standard | Rebuildable from chain; holds no authoritative state |

> **Two-person rule.** No single individual may both author and execute a contract deployment or a
> flag enable. The emergency **disable** is deliberately exempt — a kill switch that needs a quorum
> is not a kill switch.

### 2.2 Upstream readiness

| Dependency | Must be true before deploy | Owner |
|---|---|---|
| L2 (Base) sequencer healthy; L1 force-inclusion path reachable | verified within 1 h of the window | Chen Wei |
| `PoseidonT3` library deployed and address recorded for linking | see §5 step 1 | Samuel Oyelaran |
| Ceremony transcripts published, `zkeyHash` values computed and independently reproducible | **Phase 2+** — `N/A` for release 0.1.0 (mocks) | Rafael Duarte |
| ≥2 personhood issuers registered, ≥1 non-state (`PersonhoodRegistry.issuerSetValid() == true`) — **seed 3, not 2** (see §5.2 issuer-removal warning) | before any real enrolment; `enrol()` **fails closed** on this invariant | Marcus Adeyemi |
| ≥2 residency attesters per launch region | before any real residency issuance | Marcus Adeyemi |
| ≥5 population sources registered per launch region | before any petition can activate | Yuki Sato |
| Legal sign-off for the jurisdiction (`CON-005`, `NFR-015`) | per pilot jurisdiction | Sofia Marchetti |
| Pinning cluster ≥3 geographically separate operators + Arweave mirror | before client publish | Chen Wei |
| Paymaster treasury ≥90 days at p95 fees | before enabling `sponsored_gas` | Hiroshi Tanaka |

---

## 3. Pre-deployment checklist (Gate 2 entry)

### 3.1 The VEKTOR checklist, with its actual state on 2026-08-09

- [ ] **RTM 0 gaps (Doc 08)** — **FAIL: `docs/08-traceability-matrix.md` does not exist.**
- [ ] **All suites green; 0 Sev-1/2 (Doc 07)** — **FAIL: `docs/07-test-cases-suites.md` does not exist.** Contract and protocol suites exist in-repo and Doc 06 records a `UT-####` inventory, but there is no `TC-####` result of record.
- [ ] Load test meets NFRs (`NFR-008`) — `N/A — not yet measured`
- [ ] Security + a11y scans clean (`NFR-009`, `NFR-011`) — **FAIL: audits not started** (MS-04 contracting target 2026-10-15)
- [ ] Dashboards + alerts live (Doc 11) — **FAIL: not yet built** (specified in Doc 11 §4)
- [ ] **Rollback drill executed** in staging — **FAIL: drill defined in §8.6, never run** (`NFR-020`, Doc 13 §3.3 item 5)
- [ ] On-call owner assigned for the window — Chen Wei (standing, Doc 13 §9)
- [ ] Release notes published (Doc 09) — drafted, `Status: In Review`
- [ ] Maintenance window / comms scheduled — see §10
- [ ] Two independent audits, 0 critical/high open (`NFR-009`, `CON-012`) — **FAIL**
- [ ] Six ceremony transcripts, contributor sets meeting the ADR-022 assurance-based target each, `zkeyHash` frozen — **FAIL**
- [ ] MACI 5-of-7 committee constituted and DKG rehearsed (`ADR-006`, MS-12) — **FAIL**
- [ ] Legal sign-off per pilot jurisdiction (`NFR-015`, `CON-005`) — **FAIL**
- [ ] Passing `document-review` report for each major doc — **FAIL: only Doc 01 cycle 1 exists in `artifacts/reviews/`**
- [ ] **Deployment-safety gate green** (§3.2) — **cannot pass by construction in Phase 1: the registry is wired to `MockVerifier`**
- [ ] Open Must-blocking code defects = 0 — **FAIL: Doc 09 `REL-LIM-03`, `REL-LIM-12`, `REL-LIM-15`, `REL-LIM-16` open.** (`REL-LIM-04` and `REL-LIM-07` were fixed in the current drop and re-verified against source on 2026-08-09.)

> **Rule.** If any box above is unchecked, the deployment is **not started** and the sre emits
> `<missing_information>` naming the blocker, routing it back through the project-manager. The sre
> does not have, and does not want, the authority to release on an unapproved gate.

### 3.2 ⭐ The deployment-safety gate — no environment promotes with an insecure mock

**Rule (normative).** *An environment MUST NOT be promoted past `devnet` if **any** contract
registered in its `VerifierRegistry` — current **or** within its `SUPERSEDE_GRACE` window —
responds to `IS_INSECURE_MOCK()`.*

Why this gate exists and why it is a *call*, not a policy: `MockVerifier.verifyProof` returns
`accept` for **any** input. A single mock left in a production registry silently voids every privacy
and Sybil guarantee in the protocol while every screen keeps saying the proof was verified. Nothing
about that failure is visible from the outside. The marker `bool public constant IS_INSECURE_MOCK`
exists on the mock and on nothing else, so the check is a positive identification of the dangerous
thing rather than a hopeful absence check.

**The check, as it must run in the promotion job:**

```
# Gate: deployment-safety — run against the target environment's VerifierRegistry.
# Exit non-zero on ANY hit. There is no override flag and there must never be one.

CIRCUITS="personhood_enrol residency_member tenure_member"   # + Phase-3 MACI circuits

for c in $CIRCUITS; do
  cid=$(cast keccak "$c")
  n=$(cast call "$VERIFIER_REGISTRY" "versionCount(bytes32)(uint256)" "$cid")

  # Every version, not just the current one: a superseded verifier keeps accepting
  # proofs for SUPERSEDE_GRACE = 30 days (VerifierRegistry.sol:33,107).
  i=0
  while [ "$i" -lt "$n" ]; do
    v=$(cast call "$VERIFIER_REGISTRY" "versionAt(bytes32,uint256)" "$cid" "$i")   # see NOTE
    if cast call "$v" "IS_INSECURE_MOCK()(bool)" 2>/dev/null | grep -q true; then
      echo "FATAL: circuit $c version $i is wired to an insecure mock at $v"
      exit 1
    fi
    zk=$(cast call "$VERIFIER_REGISTRY" "current(bytes32)" "$cid")
    echo "ok: $c v$i verifier=$v"
    i=$((i+1))
  done
done

# Second half of the same gate: the zkeyHash must match the published ceremony transcript,
# because a real verifier bound to an unpublished proving key is the same failure wearing a suit.
for c in $CIRCUITS; do
  onchain=$(cast call "$VERIFIER_REGISTRY" "current(bytes32)" "$(cast keccak "$c")" | jq -r .zkeyHash)
  published=$(sha256sum "ceremony/$c.zkey" | cut -d' ' -f1)
  [ "$onchain" = "$published" ] || { echo "FATAL: zkeyHash mismatch for $c"; exit 1; }
done
```

> **NOTE — a real gap.** `VerifierRegistry` exposes `current(bytes32)` and `versionCount(bytes32)`
> but **no** accessor for an arbitrary historical version, so the loop above cannot enumerate
> superseded verifiers on-chain today. Until the engineer adds a `versionAt(bytes32,uint256)` view,
> the promotion job MUST reconstruct the version list from `CircuitRegistered` /
> `CircuitSuperseded` events. Logged as `REF-06` in `docs/refine-log.md`.

**Where this is asserted today.** The same check is asserted in
`packages/contracts/test/adversarial.test.mjs:320-329`, deliberately inverted — the test asserts the
mock **is** present in the dev fixture, so the check itself cannot silently rot. That is a test, not
a promotion gate. Standing up the gate as a job that runs against the live target registry is
**`REL-LIM-12`, a Gate-2 blocker** (`packages/contracts/script/` currently contains only
`compile.mjs`).

**Scope.** The gate runs at every promotion boundary — `devnet → testnet`, `testnet → staging`,
`staging → production` — and again as the **first** step of the post-deploy verification in §7, so a
verifier registered between promotion and cutover cannot slip through.

---

## 4. Environments & promotion path

| Env | Chain | Verifiers | Flags | Purpose | Promotion gate |
|---|---|---|---|---|---|
| `local` | in-process EthereumJS | mocks | all on | unit + integration, offline, deterministic | suite green |
| `CI` | in-process EthereumJS | mocks + rejecting mock | matrix | every PR | full suite + `tools/dep-guard` |
| `devnet` | L2 devnet | mocks | all on | integration, SDK, indexer | suite green |
| `testnet` | Base Sepolia | **real, ceremony-bound** | phase-appropriate | public dry run, audits, ceremony rehearsal | **§3.2 gate** |
| `staging` | Base mainnet | real | prod-minus | production config, invited cohort | §3.2 gate + §3.1 checklist |
| `production` | Base mainnet | real | staged 1→10→50→100% | live | §3.2 gate + §3.1 checklist + **Gate 2 human approval** |

Promotion is **one-directional**. There is no path that moves an artefact backwards, and no
"promote with override" flag.

> **Release 0.1.0 is a `testnet` target only** and cannot pass the §3.2 gate because it is wired to
> mocks by design (Doc 13 §3.1, Phase 1). This is the intended, honest state of a walking skeleton.

---

## 5. Deploy procedure

### 5.0 ⭐ Deterministic deploy order

The order below is **not stylistic**. Each contract takes its dependencies as constructor arguments
and stores them `immutable`, so a wrong order is not a misconfiguration you can fix — it is a
redeployment. It is derived from `packages/contracts/test/fixture.mjs:79-98`, which builds the whole
protocol in-process and is the executable reference for this section.

| # | Contract | Constructor args | Why here | Immutable wiring created |
|---|---|---|---|---|
| **1** | **`PoseidonT3`** | — | Hash library that `LeanIMT` links against. Every tree in the system needs it; nothing needs anything else first. | linked into all tree-bearing contracts at compile/deploy time |
| **2** | **`FeatureFlags`** | `timelock`, `emergencyDisabler`, `bytes32[] initiallyEnabled` | The kill switch must exist **before** anything it gates. Deploying it later leaves a window in which gated capabilities are live and unkillable. | `timelock`, `emergencyDisabler` — **both immutable, neither rotatable** |
| **3** | **`VerifierRegistry`** | `timelock` | `PersonhoodRegistry` takes it as a constructor arg. | `timelock` |
| **4** | **`PersonhoodRegistry`** | `timelock`, `VerifierRegistry` | Needs #3. Everything downstream burns nullifiers here. | `timelock`, `verifiers` |
| **5** | **`RegionRegistry`** | `timelock` | Independent of #3/#4, but must exist before `PartyRegistry`. | `timelock` |
| **6** | **`PartyDeployer`** | — | Stateless, ownerless. Holds `Party`'s creation bytecode so `PartyRegistry` stays under EIP-170. | none — no trust boundary |
| **7** | **`GovernorDeployer`** | — | Same rationale for `Governor`. | none |
| **8** | **`PartyRegistry`** | `PersonhoodRegistry`, `RegionRegistry`, `VerifierRegistry`, `FeatureFlags`, `PartyDeployer`, `GovernorDeployer` | Consumes everything above. Holds the deployer addresses **immutable**, so a malicious deployer cannot be swapped in without redeploying the registry — a visible, migrate-by-choice event, never a silent upgrade (`ADR-010`). | all six |

```
# ---- deterministic deploy, in order. Record every address as you go. ----
# 0. Pre-flight
node tools/dep-guard/check.mjs                     # dependency direction: protocol <- sdk <- web
npm run test -w @trumocracy/protocol               # pure reference implementation
npm run test -w @trumocracy/contracts              # in-process EVM suite
git rev-parse HEAD                    > deploy/COMMIT
solc --version                        > deploy/TOOLCHAIN     # must be 0.8.28, Cancun

# 1. PoseidonT3
POSEIDON=$(deploy PoseidonT3)                                 && echo "PoseidonT3=$POSEIDON"

# 2. FeatureFlags  — PHASE-1 PRODUCTION SET ONLY. See 5.1 before touching this array.
FLAGS_ON='["'$(cast keccak petitions)'","'$(cast keccak party_governance)'"]'
FEATURE_FLAGS=$(deploy FeatureFlags "$TIMELOCK" "$EMERGENCY_DISABLER" "$FLAGS_ON")

# 3. VerifierRegistry
VERIFIERS=$(deploy VerifierRegistry "$TIMELOCK")

# 4. PersonhoodRegistry
PERSONHOOD=$(deploy PersonhoodRegistry "$TIMELOCK" "$VERIFIERS")

# 5. RegionRegistry
REGIONS=$(deploy RegionRegistry "$TIMELOCK")

# 6. PartyDeployer      # 7. GovernorDeployer
PARTY_DEPLOYER=$(deploy PartyDeployer)
GOVERNOR_DEPLOYER=$(deploy GovernorDeployer)

# 8. PartyRegistry
PARTY_REGISTRY=$(deploy PartyRegistry \
    "$PERSONHOOD" "$REGIONS" "$VERIFIERS" "$FEATURE_FLAGS" "$PARTY_DEPLOYER" "$GOVERNOR_DEPLOYER")

# 9. Immediately assert the wiring you just created is the wiring you meant.
[ "$(cast call $PERSONHOOD 'verifiers()(address)')"      = "$VERIFIERS" ]      || exit 1
[ "$(cast call $PARTY_REGISTRY 'flags()(address)')"      = "$FEATURE_FLAGS" ]  || exit 1
[ "$(cast call $FEATURE_FLAGS 'timelock()(address)')"    = "$TIMELOCK" ]       || exit 1
[ "$(cast call $FEATURE_FLAGS 'emergencyDisabler()(address)')" = "$EMERGENCY_DISABLER" ] || exit 1

# 10. THE GATE — §3.2. Run before anything else touches this deployment.
./scripts/deployment-safety.sh "$VERIFIERS"     || { echo "HALT"; exit 1; }
```

> **Contracts deploy with every gated capability OFF except `petitions` and `party_governance`.**
> "Ship dark" applies on-chain, not only in the client: a frontend-only flag leaves the risky path
> live for anyone calling the contract directly (`ADR-011`, `DES-037`).

### 5.1 Configuration / feature-flag setup

**Single source of truth: `packages/protocol/src/flags.js`, `defaults.prod`.** Where any other
artefact disagrees, `flags.js` wins and the other artefact is the defect.

| Flag key | `onChain` | prod default | Phase-1 posture | `removeBy` |
|---|---|---|---|---|
| `petitions` | yes | **true** | **ON** | GA — retires at v1.0.0 |
| `party_governance` | yes | **true** | **ON** | GA — retires at v1.0.0 |
| `elections` | yes | false | **OFF** | Phase 3 rollout complete |
| `recall` | yes | false | **OFF** | Phase 3 rollout complete |
| `maci_voting` | yes | false | **OFF** — see the warning below | Phase 3 — becomes mandatory |
| `private_endorsement` | yes | false | **OFF** | Phase 4 |
| `delegation` | yes | false | **OFF** | Phase 4 — pending capture analysis |
| `treasury` | yes | false | **OFF** | Phase 3 — pending per-jurisdiction legal review |
| `fork` | yes | false | **OFF** | Phase 3 |
| `l1_force_inclusion` | **no** (client) | true | **ON** | never — permanent escape hatch |
| `sponsored_gas` | **no** (client) | true | **ON** | never — degrades to self-pay, never to denial |

**Known conflict — resolve in favour of `flags.js`.** `packages/contracts/test/fixture.mjs:62`
defines `PHASE1_FLAGS = ['petitions','party_governance','fork','treasury']`, enabling two
capabilities that `flags.js` prod defaults and Doc 13 §9 both hold OFF. **A deployment MUST NOT take
its flag array from the test fixture.** Logged as `REF-07`.

> **⚠ NEVER enable `maci_voting` before the MACI module ships.** `Governor.vote` reverts with
> `MaciPathRequired` the moment the flag is on (`Governor.sol:266`) and release 0.1.0 contains **no
> alternative vote path**. Enabling it would make every party ungovernable network-wide. The
> emergency disabler can undo it in one transaction — but any ballot open at that moment has already
> been damaged. Sequence is always **client first, flag second** (Doc 09 `REL-LIM-08`).

**Enable path:** protocol timelock only, 30 days (`FeatureFlags.enable`, `ADR-010`).
**Disable path:** timelock **or** emergency disabler, instant, `reason` string required and
published as `FlagDisabled(flag, by, reason)`. This asymmetry is the whole design: the dangerous
direction is slow and public; the safe direction is instant.

### 5.2 Registry seeding — issuers, regions, attesters

All calls in this section are `onlyTimelock` and therefore carry the **30-day** timelock for
additions. Plan backwards from the launch date; this is a design property, not a queue to jump
(`ADR-010`, Doc 13 §3.4 long-lead table).

```
# --- 5.2.1 Circuits: bind each circuit to its verifier and its ceremony -------------
# zkeyHash is the load-bearing field: clients refuse to prove against an unregistered
# proving key, which is what stops a compromised frontend handing out a backdoored one.
timelock VerifierRegistry.register $(cast keccak personhood_enrol) $ENROL_VERIFIER     $ZKEY_ENROL     "ipfs://<ceremony-enrol>"
timelock VerifierRegistry.register $(cast keccak residency_member) $RESIDENCY_VERIFIER $ZKEY_RESIDENCY "ipfs://<ceremony-residency>"
timelock VerifierRegistry.register $(cast keccak tenure_member)    $TENURE_VERIFIER    $ZKEY_TENURE    "ipfs://<ceremony-tenure>"
# ceremonyURI MUST be non-empty (contract enforces) AND must resolve on IPFS *and* Arweave.

# --- 5.2.2 Personhood issuers -------------------------------------------------------
# ADR-003 invariant: >=2 active issuers, >=1 NOT state-operated. Enforced by issuerSetValid().
timelock PersonhoodRegistry.registerIssuer $(cast keccak epassport-nfc)  2 false 5000  "ipfs://<assessment>"
timelock PersonhoodRegistry.registerIssuer $(cast keccak civil-registry) 3 true  20000 "ipfs://<assessment>"
timelock PersonhoodRegistry.registerIssuer $(cast keccak civic-notary)   1 false 500   "ipfs://<assessment>"

# maxEnrolmentsPerEpoch (EPOCH = 1 day) is the flood limiter: it bounds how many people a
# compromised issuer can mint before the 48h expedited-removal path reacts. Size it as
#   ceil(expected daily enrolments x 3), never "unlimited" (0 disables the cap entirely).

[ "$(cast call $PERSONHOOD 'issuerSetValid()(bool)')" = "true" ] || { echo "HALT: ADR-003 invariant"; exit 1; }

# --- 5.2.3 Regions ------------------------------------------------------------------
# regionId = keccak256("v<schemeVersion>:<path>"); path is an ADMINISTRATIVE LABEL ONLY.
# depth 1=country .. 5=ward. Parent must already exist for depth > 1. Create top-down.
timelock RegionRegistry.createRegion "IN"        1 0x00 1
timelock RegionRegistry.createRegion "IN/KA"     1 $(regionId IN)     2
timelock RegionRegistry.createRegion "IN/KA/BLR" 1 $(regionId IN/KA)  3

# --- 5.2.4 Residency attesters ------------------------------------------------------
timelock RegionRegistry.registerAttester  $(cast keccak civic-notary-blr) 2 $STAKE "ipfs://<attester-policy>"
timelock RegionRegistry.authoriseAttester $(regionId IN/KA/BLR) $(cast keccak civic-notary-blr)
# Minimum TWO authorised attesters per launch region (RISK-05, A-01): a region that can
# only be attested by one party has a single point of capture. Verified by inspection --
# the contract does not enforce a minimum.
```

> **⚠ `issueResidency` does not authenticate its caller — STILL OPEN as of 2026-08-09.**
> `RegionRegistry.issueResidency` checks that `attesterId` is authorised and active but never checks
> `msg.sender` (`RegionRegistry.sol:169-181`). **Any address can insert residency leaves under any
> authorised attester's identity**, inflating the verified-resident term of the petition threshold
> and manufacturing endorsement eligibility. This is Doc 09 `REL-LIM-03` / `REF-02` and is a **hard
> blocker for any deployment carrying real political consequence.** Two sibling defects of the same
> class — an unpermissioned `spendNullifier` and flag-gated voting — were fixed in the current drop
> (Doc 06 §5); **this one was not.** Watch `ResidencyIssued` volume per attester (Doc 11 §5,
> PB-ATTEST) as the only compensating control available today, and note it is detection *after* the
> fact, not prevention.

> **⚠ Issuer removal is a global lever.** `PersonhoodRegistry.enrol` now fails closed on
> `issuerSetValid()` (`PersonhoodRegistry.sol:209`). Deactivating a compromised issuer that tips a
> region below "≥2 active, ≥1 non-state" halts **all** enrolment network-wide, and adding a
> replacement takes **30 days**. Seed **three** issuers per launch region, not two, so the
> containment action in Doc 11 PB-ISSUER has headroom (Doc 09 `REL-LIM-16` / `REF-09`).

### 5.3 ⭐ Population-oracle bootstrap

The population denominator decides how many endorsements a party needs. Get it wrong and activation
is either trivial or impossible (`RISK-12`). The contract therefore refuses to produce a number
until it has enough independent inputs, and refuses to *apply* it until a dispute window has passed.

```
STEP 1 — submit >= 5 sources        RegionRegistry.submitPopulation(regionId, sourceId, value)
         Contract constant: MIN_POPULATION_SOURCES = 5. Fewer -> proposePopulation reverts
         with TooFewSources(have, need). Sources must be genuinely independent and each
         one's provenance published: national census, electoral roll, UN WPP, World Bank,
         national statistics office. Record the vintage year of every figure -- five
         sources all copying the same census is one source wearing five hats.

STEP 2 — propose                    RegionRegistry.proposePopulation(regionId)   [permissionless]
         Computes the MEDIAN of all submitted sources, so a single corrupted source moves
         nothing. Emits PopulationPending(regionId, median, effectiveAt).
         Drift guard: if a value is already effective and less than POPULATION_DRIFT_PERIOD
         (90 days) has passed, a move greater than POPULATION_MAX_DRIFT_BPS (500 = +-5%)
         REVERTS with DriftTooLarge. A denominator cannot be swung underneath a live petition.

STEP 3 — 7-day dispute window       POPULATION_DISPUTE_WINDOW = 7 days
         Nothing to execute. Publish the pending value, the median, every source value and
         every source's provenance on the public dashboard the moment PopulationPending
         fires. Anyone may object. An objection is handled by submitting a corrected source
         value and re-proposing -- there is no privileged "cancel", and there must not be.
         SRE duty: page Yuki Sato (population owner) on every PopulationPending event.

STEP 4 — activate                   RegionRegistry.activatePopulation(regionId) [permissionless]
         Reverts with DisputeWindowOpen(until) if called early, NoPending if nothing is
         pending. Emits PopulationEffective(regionId, value).

STEP 5 — verify
         cast call $REGIONS "population(bytes32)" $(regionId ...)
         Assert value != 0, effectiveFrom is recent, pendingSince == 0.
         Then assert the derived requirement is sane:
         cast call $PARTY_REGISTRY "requiredEndorsements(bytes32,uint16)(uint64)" $REGION 200
         = max(2% x population, 2% x verifiedResidents, 500). The 500 floor
         (ABSOLUTE_FLOOR_ENDORSEMENTS) is what makes an oracle deflated to zero worthless
         to an attacker -- SDD §11, FR-009/DES-010.
```

**Timeline: a region needs ≥7 days of oracle bootstrap before its first petition can activate.**
Sequence it before, not after, the enrolment campaign.

> **Operational caveat.** `submitPopulation` is `onlyTimelock`, so all five "independent" sources
> submit through one governance path (Doc 09 `REL-LIM-05` / `REF-04`). The median, the drift cap and
> the dispute window still bind, but the independence is procedural rather than structural. Publish
> each source's raw submission so the procedure is at least auditable.

### 5.4 Database / schema migration

The chain holds all authoritative state; the indexer's Postgres is a **derived read model**
(`ADR-014`). Therefore:

- Migrations are **forward-only and reversible by rebuild**, never by down-migration.
- Rollback of an indexer schema = deploy the previous indexer image and **rebuild from chain**.
  Target < 6 h for a year of history (Doc 03 §7.3).
- **RPO = 0** because there is nothing to lose; **RTO = 15 min** for the service, plus rebuild time
  for full history. Serve reads from the standby index while the rebuild runs.
- **No migration may block writes.** A citizen action never touches Postgres.

### 5.5 Data backfill / migration dry-run

Before any indexer schema change reaches production:

1. Restore a production-shaped snapshot to a scratch instance.
2. Run the migration; record duration and peak lock time.
3. **Diff the read model against a fresh from-chain rebuild** — the rebuild is the oracle, the
   migration is the thing under test. Any divergence in petition counts, endorsement counts,
   membership counts or tallies is a **stop**.
4. Verify the client's re-verification path still passes when the indexer is deliberately made to
   lie (`ADR-014` rule 1) — this is the property that makes the indexer safe to exist.
5. Record row counts before/after and attach to the change record.

---

## 6. Staged rollout plan (metric-gated)

### 6.1 What "staged" can and cannot mean here — stated up front

`FeatureFlags` stores `mapping(bytes32 => bool)`. There is **no cohort, percentage or bucketing
concept on-chain**. So:

- **On-chain gating is binary and network-wide.** A capability is on for everyone or off for
  everyone.
- **The 1 → 10 → 50 → 100% stages are therefore a *client-cohort* control**: the percentage of
  citizens whose client *surfaces* the capability, applied via `isEnabled(flagKey, env, overrides)`
  in `packages/protocol/src/flags.js` and the cohort assignment in the client.
- A citizen outside the cohort who calls the contract directly is **not** blocked by the staging —
  only by the on-chain flag.

This is an honest limitation, not a workaround (Doc 09 `REL-LIM-06` / `REF-05`). It is acceptable
because the on-chain flag remains the **safety** control and the cohort is the **exposure** control;
it would not be acceptable if the cohort were load-bearing for safety. **Sequence every capability
as: on-chain flag ON (dark — no client surfaces it) → cohort 1% → 10% → 50% → 100%.**

### 6.2 The stages

| Stage | Cohort | Minimum hold | Promote only if — all of |
|---|---|---|---|
| **Dark** | 0% | ≥24 h | on-chain flag ON; **zero** client surfaces it; contract-level smoke passes; no unexpected events on the gated entrypoints |
| **Canary** | **1%** | **≥5 days** (Doc 13 §9) | citizen write-path success ≥99.5%; public read/verify ≥99.9%; **median cost/action < USD 0.01**, p99 < USD 0.05 (`NFR-005`); action-ack p95 ≤5 s, finalisation p95 ≤120 s (`NFR-006`); proof-failure rate ≤ baseline; **zero** privacy findings; no Sev-1/2; force-inclusion usage = 0 unexpected; recovery success ≥99% (`NFR-016`) |
| **Early** | **10%** | **≥5 days** | all canary gates hold at 10× volume; sponsorship burn within 90-day buffer; indexer lag p95 < 30 s; anonymity-set withholding rate not rising; **operator diversity ≥3** for pinning, ≥2 for indexer/relayer |
| **Half** | **50%** | **≥5 days** | all above; error budget consumed < 25% of the month's; no kill criterion (Doc 13 §14) tripped; no `AnomalousGrowth` cluster suggesting coordinated capture |
| **Full** | **100%** | — | all gates passed; PO (Priya Raghunathan) and SRE (Chen Wei) both concur; recorded |

**Remaining pilot jurisdictions follow only after the lead pilot holds 100% for 4 weeks**
(Doc 13 §9). Rollout is per-jurisdiction because launch is legally gated per jurisdiction
(`CON-005`).

**Any stage may be held or reversed by the SRE alone** (RACI: staged rollout — SRE is **A**;
flag kill / rollback — SRE is **A**). Promotion between stages requires the metric gate to be
**measured**, not asserted. A stage with a metric marked `N/A — not yet measured` does not promote.

### 6.3 What to watch, per stage

| Stage | Primary dashboard | The one number that stops the rollout |
|---|---|---|
| Dark | Contract event stream | any event on a gated entrypoint = the flag is not actually dark |
| 1% | Citizen write path | write-path success < 99.5% over 1 h |
| 10% | Cost & sponsorship | median cost/action ≥ USD 0.01, or sponsorship burn > 3× p99 daily baseline |
| 50% | Governance health (Doc 11 §3.2) | quorum near-miss rate rising, or `AnomalousGrowth` on >1% of parties |
| 100% | Error budget | budget burn rate ≥ 14.4× (fast burn) |

---

## 7. Verification

Run in this order. Stop at the first failure and go to §8.

```
# 7.1 THE GATE FIRST — re-run §3.2 against the live registry, post-deploy.
./scripts/deployment-safety.sh "$VERIFIERS"  || { echo "HALT — ROLLBACK"; exit 1; }

# 7.2 Invariants that must hold before a single citizen touches this deployment
cast call $PERSONHOOD    "issuerSetValid()(bool)"                       # MUST be true  (ADR-003)
cast call $REGIONS       "anonymitySetSufficient(bytes32)(bool)" $REGION # MUST be true  (NFR-002, k>=1000)
cast call $REGIONS       "population(bytes32)" $REGION                   # value != 0, pendingSince == 0
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak maci_voting)        # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak elections)          # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak recall)             # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak delegation)         # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak private_endorsement) # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak treasury)           # MUST be false
cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak fork)               # MUST be false

# 7.3 Capability-ABSENCE tests -- the ones that prove what the system CANNOT do (CON-003).
#     A pause function that does not exist cannot be demanded of us.
#     Assert: no pause(), no upgradeTo(), no setOwner(), no adminMint() on any core contract;
#     FeatureFlags.enable from the emergencyDisabler REVERTS with NotTimelock.

# 7.4 Smoke -- synthetic citizen, test region, full journey
#   enrol -> issueResidency -> openPetition -> endorse -> withdrawEndorsement -> endorse
#   -> activate -> join -> propose -> (discussion) -> vote -> finalize -> execute
#   Assert at each step: correct event emitted; nullifier spent exactly once; a REPLAY of the
#   same action REVERTS (NullifierAlreadyUsed) -- idempotency comes free from nullifiers.

# 7.5 Degraded-mode verification -- run the journey with each dependency removed in turn
#   (a) indexer OFF        -> client falls back to direct chain reads; journey completes
#   (b) relayer/bundler OFF-> alternate bundler -> self-pay; journey completes
#   (c) sponsorship exhausted -> self-pay; journey completes; UI explains rather than fails
#   (d) sequencer censoring -> L1 force-inclusion; action included within 60 min (NFR-025)
#   Any of these failing to complete is a Sev-1 and blocks the release. NFR-025 is not a
#   property you can assert; it is one you demonstrate by removing the component.

# 7.6 SLO check -- 30 minutes of steady state against Doc 11 §3 targets before promoting.
```

---

## 8. ⭐ Rollback / backout plan

### 8.1 The honest frame

**Rollback reverses *our deployment*. It never reverses *a party's decision*.**

The core is immutable: no proxy, no admin, **no pause button** (`ADR-010`, `CON-003`). This is not
an oversight to be worked around — it is the single most load-bearing decision in the product. The
ability to stop a political process on request is the first thing a hostile state demands, and the
safest design for the operator is one where the operator is genuinely powerless (`ADR-013 §3`).

So this section is written in two halves, and the second half matters more than the first.

### 8.2 Triggers — roll back first, diagnose after

| Trigger | Threshold | Action |
|---|---|---|
| Any Sev-1 | immediate | full rollback (§8.4) |
| Confirmed privacy finding | any | full rollback **and** raise kill criterion `KC-1` to the PM within 1 business day |
| Citizen write-path success | < 99.5% over 1 h | flag-off the affected capability |
| Public read/verify | < 99.9% over 1 h | re-point indexer; revert bundle |
| Median cost per action | ≥ USD 0.01 sustained 1 h | degrade sponsorship to self-pay; hold rollout |
| Proof-failure rate | > 3× baseline over 30 min | flag-off the affected capability; suspect verifier/zkey mismatch |
| Sponsorship spend | > 3× p99 daily baseline | circuit-breaker to self-pay (`ADR-014`), page on-call |
| Force-inclusion usage | > 0 unexpected | investigate sequencer censorship (Doc 11 PB-CENSOR); do **not** roll back the client |
| Indexer divergence from chain | any | de-list the indexer immediately; clients fall back to chain reads |
| `IS_INSECURE_MOCK` found post-deploy | any | **HALT everything.** Flag-off every gated capability, revert the bundle, and treat as Sev-1 privacy incident |
| Deployment-safety gate red | any | do not promote; if already promoted, full rollback |

### 8.3 What is reversible, and what is not — the table to read before you promise anyone anything

| Thing | Reversible? | How | Time |
|---|---|---|---|
| Client bundle | **Yes** | Re-point ENS content-hash to the previous CID; the previous bundle is still pinned on ≥3 operators and permanent on Arweave | **< 5 min** |
| Indexer version / schema | **Yes** | Deploy previous image; rebuild read model from chain | < 15 min (service); < 6 h full history |
| Relayer / bundler | **Yes** | Re-point to alternate bundler; drain in flight; client falls back automatically | < 5 min |
| Paymaster policy / sponsorship | **Yes** | Config revert; worst case degrade to self-pay — **degradation, never denial** (`FR-061`) | < 5 min |
| A capability, going forward | **Yes — subtractive only** | `FeatureFlags.disable(flag, reason)` from the emergency disabler | **1 tx, < 2 min** |
| A capability, going back on | **No, not quickly** | `enable` is timelock-only: **30 days** | 30 days |
| A registry entry (issuer, attester, verifier) — **removal** | **Yes** | 48 h expedited removal path (`ADR-010`) | 48 h |
| A registry entry — **addition** | n/a | 30-day timelock | 30 days |
| A region accepting new residency credentials | **Yes** | `RegionRegistry.freezeRegion(regionId, reason)` — timelock | timelock |
| **A running vote** | ❌ **NO** | There is no pause. `Governor` has no halt. A ballot in its window will close on schedule | — |
| **A recorded vote or tally** | ❌ **NO** | Immutable. `finalize`/`execute` are permissionless; nobody can withhold a result | — |
| **A party activation** | ❌ **NO** | `PartyActivated` is final. There is no dissolve-by-operator | — |
| **A spent nullifier** | ❌ **NO** | Once burned, that person cannot act again in that scope, ever | — |
| **An enrolment** | ❌ **NO** | `enrolled[issuerNullifier]` is write-once. Deactivating the issuer does **not** revoke issued credentials — by decision (`ADR-003`) | — |
| **A tree insertion** (identity, residency, membership) | ❌ **NO** | Append-only Merkle trees | — |
| **A published manifesto version** | ❌ **NO** | Append-only. "A political record that can be rewritten is not a political record" (`ADR-013 §2`) | — |
| **A deployed core contract** | ❌ **NO** | No proxy, no admin. Response is **migration**, not suspension | days–weeks |

> **The sentence to use with stakeholders, verbatim:** *"We can stop the system offering a
> capability from this moment forward, and we can put our own software back the way it was. We
> cannot stop a vote that is already running, and we cannot change or undo a decision a party has
> already made. That is deliberate — if we could, we would be asked to, and eventually made to."*

### 8.4 The rollback procedure — target < 15 minutes (`NFR-020`)

Run steps (a), (b) and (c) **in parallel** where staffing allows; (a) first if a capability is
actively harmful.

```
T+00:00  DECLARE. On-call SRE declares rollback in the incident channel. No debate, no
         approval needed -- flag kill / rollback: SRE is Accountable (Doc 13 §7.2).
         Start the clock. Announce the target: 15 minutes.

(a) T+00:30  DISABLE THE CAPABILITY  -- the only protocol-level lever, and it only subtracts
         cast send $FEATURE_FLAGS "disable(bytes32,string)" \
              $(cast keccak <flag>) "<incident-id>: <one-line reason>" \
              --from $EMERGENCY_DISABLER
         * Single transaction. Takes effect for the next call after inclusion.
         * The reason string is PUBLISHED as FlagDisabled(flag, by, reason). Write it for a
           journalist, not for a colleague. This event is the transparency record.
         * DOES NOT stop transactions already in the mempool or in flight.
         * DOES NOT stop an open ballot from closing on schedule -- BUT SEE THE WARNING BELOW.
         Verify: cast call $FEATURE_FLAGS "isEnabled(bytes32)(bool)" $(cast keccak <flag>) == false

    OK -- open ballots are SAFE from `party_governance`. `vote`, `finalize` and `execute`
       are deliberately NOT flag-gated (Governor.sol:262, explicit NOTE); only `propose` is.
       Flags gate STARTING a capability, never COMPLETING one already under way. A ballot in
       its window runs to its close and executes regardless of the flag. This is the design
       principle -- verified against source 2026-08-09.

    !! WARNING -- disabling `petitions` STRANDS SUCCESSFUL PETITIONS.
       PartyRegistry.activate still calls flags.requireEnabled(FLAG_PETITIONS)
       (PartyRegistry.sol:241). A petition that has ALREADY MET ITS THRESHOLD cannot be
       activated while the flag is off, and re-enabling takes 30 DAYS through the timelock.
       The same principle the voting path now honours is violated one step later
       (Doc 09 REL-LIM-15 / REF-08).
       PROCEDURE UNTIL FIXED: before disabling `petitions`, enumerate petitions where
       endorsements >= requiredEndorsements and state == Gathering. If ANY exists, disabling
       requires an explicit, recorded decision by the SRE (A) with the PO (Priya Raghunathan)
       consulted, plus a public notice naming every stranded petition and the 30-day
       re-enable path. Prefer reverting the client bundle, which removes the surface without
       stranding anyone -- `activate` is permissionless, so a stranded petition's supporters
       cannot route around the flag themselves.
       This is an operational control standing in for a missing code control.

(b) T+02:00  REVERT THE CLIENT BUNDLE
         1. Identify the last-known-good CID:      cat deploy/CID_HISTORY | tail -2
         2. Confirm it is still pinned on >=3 operators AND present on Arweave.
         3. Re-point the ENS content-hash record to that CID.
         4. Purge the CDN edge cache.
         5. Verify the served bundle hash matches the reproducible-build hash for that commit
            (NFR-021, DES-050). If it does not match, you have a second incident.
         * The previous bundle is never deleted -- IPFS pins are additive and Arweave is
           permanent, which is exactly why bundle rollback is fast and certain.

(c) T+05:00  RE-POINT THE INDEXER / RELAYER
         Indexer:  deploy previous image; start rebuild from chain; serve reads from the
                   standby index meanwhile; remove the bad indexer from the client's shipped
                   endpoint list and publish the updated list.
         Relayer:  re-point to the alternate bundler; drain in-flight UserOperations; if
                   sponsorship is implicated, set the paymaster to self-pay mode.
         * Neither holds authoritative state (RPO = 0). Neither can make the product WRONG,
           only SLOW -- the client re-verifies every decision-relevant value against chain
           state before acting on it (ADR-014).

T+10:00  VERIFY   -- re-run §7.2 invariants and §7.4 smoke on the rolled-back stack.
T+12:00  COMMUNICATE -- §10. Public status note within 30 min of declaring, whatever the
         cause, including plainly what could NOT be rolled back.
T+15:00  CLOSE THE CLOCK. Record actual elapsed time as the `rollback time` governance signal.
         Then diagnose. Not before.
```

### 8.5 When rollback is not the answer: migration

For a defect in the **immutable core**, there is no rollback. The response is **migration**
(`ADR-010`): deploy a corrected core version and let each party vote to move to it.

- Slower, louder, and **impossible to do quietly** — which is the intent.
- Every party's migration path is designed, tested and **rehearsed on testnet before mainnet**, so
  it is a drilled operation rather than a crisis improvisation.
- Exit is the citizen's backstop: any party can export its complete verifiable state and reconstitute
  it on an independent deployment **with no permission from anyone** (`NFR-018`, `DES-044`,
  `TC-EXIT-*`).
- During a migration the old deployment keeps running. Nobody is forced to move, and nobody can be
  prevented from moving. There is no cutover and no deadline we can impose.

### 8.6 ⭐ The rollback drill — how rollback is *proven* before Gate 2

`NFR-020` and Doc 13 §3.3 item 5 require rollback to be **drilled and evidenced**, not asserted. The
drill below is the evidence artefact. **It has not yet been executed** (2026-08-09).

**Environment:** `staging` (Base mainnet, real verifiers, production configuration, invited cohort).
Not devnet — a drill on mocks proves nothing about the real thing.

**Preconditions:** a real ballot open in a real party in its voting window; a real petition mid-gather;
synthetic citizens acting continuously throughout so the drill measures a live system, not a quiet one.

**Roles:** Incident Commander — Chen Wei (sre). Independent timekeeper and witness — Rafael Duarte
(reviewer-qa), who signs the evidence. Observer — Ana-Maria Petrescu (project-manager).
**The person running the drill does not record the time.**

| # | Step | Pass criterion | Evidence captured |
|---|---|---|---|
| D1 | Start clock; declare rollback of a **non-governance** capability (`petitions`) | clock starts | timestamp, channel log |
| D2 | `FeatureFlags.disable(keccak("petitions"), "DRILL-<id>")` from the emergency disabler | tx included; `FlagDisabled` emitted with the reason string | tx hash, event log |
| D3 | Attempt `openPetition` **directly against the contract**, bypassing the client | reverts `FlagDisabledError` | revert trace |
| D4 | Re-point ENS content-hash to the previous CID; purge CDN | previous bundle served from ≥3 pinning operators **and** Arweave | CID, served-bundle hash |
| D5 | Verify served bundle hash == reproducible-build hash for that commit | exact match (`NFR-021`, `DES-050`) | both hashes |
| D6 | Deploy previous indexer image; begin from-chain rebuild | service healthy < 15 min; rebuild completes < 6 h | timings |
| D7 | Re-point relayer to alternate bundler; drain in flight | zero dropped UserOperations | drain log |
| D8 | Complete a citizen journey on the rolled-back stack | journey completes end to end | smoke output |
| D9 | Stop clock | **< 15 min** from D1 to D8 (`NFR-020`) | elapsed time, witnessed |
| D10 | **The open-ballot proof.** With a ballot open, demonstrate that (i) it continued through the whole drill and closed on schedule, and (ii) a flag governing its rules was **not** changed while it was open | ballot unaffected; `NFR-020` sentence 3 demonstrated | proposal state before/after, tally |
| D11 | **The absence proof.** Attempt to halt the open ballot by every means available to the operator: look for `pause`, `halt`, `cancel`, `setOwner`, `upgradeTo` on `Governor`, `Party`, `PartyRegistry` | **every attempt fails; no such function exists** (`CON-003`) | ABI dump + failed-call traces |
| D12 | **The irreversibility proof.** Attempt to reverse a recorded vote and to un-spend a nullifier | both impossible | failed-call traces |
| D13 | Re-enable `petitions` via the timelock | takes **30 days** — record it, do not shortcut it | timelock tx + eventual `FlagEnabled` |
| D14 | Migration rehearsal (separate session): export a party's full state and reconstitute it on an independent deployment | byte-identical governance state; tallies re-verify | export archive + verifier output |

**Failure of any of D1–D12 blocks Gate 2.** D13 documents the asymmetry rather than gating on it.
Evidence lands in `artifacts/` and is cited in the Gate-2 packet.

**Drill cadence after launch:** quarterly, plus after any change to the flag set, the emergency
disabler holders, or the pinning-operator set.

---

## 9. Post-deployment validation & sign-off

- [ ] 100% stable for **≥24 h**, then **≥4 weeks** in the lead pilot before any second jurisdiction
- [ ] `NFR-005` median cost/action, `NFR-006` p95 latency, `NFR-007` availability captured and
      compared against the PR-FAQ promises — **promise-vs-actual** is a governance signal, so record
      the gap, not just the value (feeds the refine loop)
- [ ] Governance-health dashboard live and publicly reachable (`NFR-019`); **zero individually
      identifying fields** verified by inspection
- [ ] Application inventory (Doc 12) updated with every deployed address, CID and operator
- [ ] `docs/refine-log.md` opened for this release; first weekly routing to the product-owner
      scheduled
- [ ] **Feature-flag cleanup scheduled.** Every flag past its `removeBy` target gets a removal
      ticket. Run `permanentFlags()` from `flags.js` in CI: it lists flags with **no** removal
      target, and that list must stay empty. `l1_force_inclusion` and `sponsored_gas` carry
      `removeBy: 'never'` — **declared** permanent, not forgotten. Ticket: `N/A — not yet raised`
- [ ] Rollback drill (§8.6) evidence attached and witnessed
- [ ] Two-person deployment record signed: who authored, who executed, every address, the commit
      SHA and the toolchain version

---

## 10. Communications plan

| When | Who is told | Channel | Content |
|---|---|---|---|
| T-7 days | pilot-jurisdiction civil-society partners, issuer/attester operators, pinning + indexer operators | direct | window, what changes, what to watch |
| T-24 h | all citizens in the cohort | in-product notice | plain language; **must not reveal any individual's party membership or activity** (`NFR-023`, `NFR-024`) |
| T-0 | on-call, IC, PM, PO | incident channel | deploy started |
| Each stage promotion | PM, PO, human approver | status note | metric gate results, measured not asserted |
| **Any rollback** | everyone, **within 30 min of declaring** | public status page + in-product | what happened, what we rolled back, **and explicitly what could not be rolled back** |
| Any flag disable | public | `FlagDisabled` event `reason` string is itself the record | one line, written for a journalist |
| Any compulsion request | public | transparency report (`ADR-013 §4`, `FR-057`) | per Doc 11 PB-COMPEL |
| T+7 days | all stakeholders | WBR (`artifacts/status/STATUS-WBR-*`) | promise-vs-actual; `REF-##` entries opened |

**Never announce, in any channel:** which parties a citizen belongs to, which citizens acted, or any
per-individual metric. Notification metadata is itself a deanonymisation surface (`NFR-023`).

---

## 11. Roles & on-call (RACI for the window)

| Activity | A | R | C | I |
|---|---|---|---|---|
| Go / no-go to start the deploy | human approver (Gate 2) | project-manager | SRE, QA | all |
| Staged rollout promotion | **SRE — Chen Wei** | project-manager | PO, Eng | all |
| Flag kill / rollback | **SRE — Chen Wei** | SRE on-call | Eng | PO, PM |
| Contract deployment execution | SRE | Eng Lead — Samuel Oyelaran | QA | PM |
| Timelock proposal (enable / register) | protocol governance | project-manager | Architect, QA | all |
| Declaring an incident | SRE on-call | SRE on-call | — | all |
| Kill-criterion escalation (Doc 13 §14) | human approver | project-manager | SRE | all |

**11.1 On-call for the window.** Chen Wei (sre) is on call for every rollout window (Doc 13 §9).
Secondary: Samuel Oyelaran (Eng Lead). Escalation: Rafael Duarte (Head of Security) for anything
privacy- or compulsion-adjacent; Sofia Marchetti (Legal) for anything jurisdictional.

**11.2 Two-person rule.** Contract deployments and flag *enables* require two named people, one of
whom did not author the change. Emergency *disable* is single-person by design.

**11.3 Key-holder risk, recorded.** `timelock` and `emergencyDisabler` are `immutable` in every core
contract. **They cannot be rotated.** Losing the emergency-disabler keys permanently removes the only
fast kill switch; compromising them lets an attacker disable capabilities network-wide (annoying, not
catastrophic — the power is purely subtractive). Two holders, different jurisdictions, hardware-backed,
quarterly proof-of-possession. Rotation = redeploy the core = migration.

---

## 12. Maintenance window & customer impact

**There is no maintenance window, because there is no maintenance mode.** The protocol cannot be
paused (`CON-003`), so a "window" would be a fiction. Client and service deployments are rolling and
zero-downtime; a citizen mid-action during a client deploy completes against the previous bundle,
which stays pinned.

**Expected impact of a standard release:** none to the citizen. **Expected impact of a rollback:**
the rolled-back capability stops being offered; in-flight actions already submitted still settle;
open ballots continue (with the `party_governance` caveat in §8.4).

**Timing.** Deploy outside any open constitutional or structural ballot in the target jurisdiction
where possible, and never in the final 24 h of a voting window.

---
### Downstream
Ongoing operation → **Doc 11** (SLOs, alerts, incident playbooks). Service record → **Doc 12**.
Release content → **Doc 09**. Production learnings → `docs/refine-log.md` as `REF-##`, routed to the
product-owner weekly or on a threshold breach.
