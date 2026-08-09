# Session memory — architect (test strategy only) — 2026-08-09T01:00Z

**Role:** architect · **Phase:** Design · **Product:** Trumocracy
**Scope of this session:** Doc 04 (Test Strategy & Master Test Plan) **only**. The SDD (Doc 03) and
the ADRs were being authored concurrently by the Principal Architect and were **not** written or
edited here. No product code was written or edited.

## What I did

Wrote `docs/04-test-strategy-master-plan.md` at **v1.0.0, Status: In Review**, from
`docs/templates/04-test-strategy-master-plan.template.md`, grounded in:

- `docs/02-requirements-srs.md` v1.0.0 (61 FR / 26 NFR / 12 CON / 16 RISK / 6 TD / 11 OI)
- `docs/05-product-backlog.md` v1.0.0 (10 EP / 28 FE / 70 US / 20 SCR / 8 NF items)
- `docs/adr/ADR-001` … `ADR-014` (all read in full)
- the **code that actually exists on 2026-08-09**: `tools/evm-harness/src/index.mjs`,
  `tools/dep-guard/check.mjs`, `packages/protocol/src/*` + its 82 passing unit tests,
  `packages/contracts/src/core/*.sol`, `packages/contracts/src/interfaces/IProofVerifier.sol`,
  root `package.json`.

The plan deliberately distinguishes **tooling present in the repo** (vitest 3.2.4, the in-process
solc-js + EthereumJS harness, dep-guard, tsc) from **tooling required but not yet present**
(contracts test workspace, circom/snarkjs/circomspect, headless browser driver, WCAG rule engine,
device lab, cost model, PII inventory checker, reproducible-build job) — each with a named owner and
an ADR basis. No toolchain was invented.

## Structure of the artifact

- §3 seven test levels L0–L7 mapped onto the ADR-011 monorepo topology.
- §5.4 `TS-DIFF` (`packages/protocol` reference vs deployed contract) named as the highest-value
  suite, with a 10-row generator table and an explicit IEEE-754-vs-uint256 precision suite.
- §5.5 an honest "what a green suite does and does not establish" table.
- §6 **capability-absence testing** as a first-class technique: ABI allowlist snapshot (primary),
  denylist + `PUSH4` bytecode selector scan + `DELEGATECALL`/`SELFDESTRUCT` opcode scan (secondary),
  storage-layout snapshot, negative-authority matrix, human review checklist — plus §6.5, six stated
  limits of the technique.
- §7 the **ZK doctrine**: mandatory classes Z1–Z7, a per-circuit `claims.json` whose negative-test
  coverage must be 100% or CI fails, `circomspect` gating at ≥ Warning with ADR-only waivers,
  witness-generator differential against `packages/protocol`, Groth16 re-randomisation /
  wrong-signal / cross-circuit / malformed-point battery, and §7.4 a Gate-2 rule that circuit results
  MUST NOT be presented as evidence of soundness.
- §8 **sixteen adversarial suites, `TS-ADV-01` … `TS-ADV-16`, exactly one per `RISK-01` … `RISK-16`**,
  each with named owner and quantitative pass criteria.
- §9 **NFR verification method for every `NFR-001` … `NFR-026`** — method, instrument, environment,
  threshold, owner; reference device profile fixed (2 GB / Android 9 / 64 kbit/s, physical lab
  authoritative over the CI proxy).
- §10 entry/exit criteria, DoD, coverage targets with justification, zero-flake policy at L0–L3, and
  the hard no-real-personal-data test-data rule (`CON-002`) with three build-failing CI scanners.
- §11 six environments (local · ci · devnet · testnet · staging · production-with-flags) and which
  suites gate which promotion, with the rule that harness-only suites cannot gate L2-dependent
  promotions.
- §12 **what we explicitly do NOT test**, with the residual risk stated (device-level coercion,
  attester social honesty, jurisdictional legal outcomes, proving-system soundness, off-chain
  censorship, pillar content quality).
- §13 seventeen `OPEN-##` findings (below), §14 suite table with reserved `TC`/`UT` ranges.

## Decisions made (test-strategy decisions, recorded for Doc 06/07)

1. **No Foundry / Hardhat / RPC.** The in-process EVM harness is the contract test runner, because an
   auditor who cannot reproduce our results offline on a fresh clone has no reason to believe them.
2. **Harness discipline as flake control:** fresh `Chain` per test (do not rely on
   `snapshot()`/`revertTo()`); assert on `timestamp`, never `blockNumber` (`warp` approximates block
   number as `seconds/2`); harness `gasUsed` is execution gas only (no intrinsic 21k, no calldata,
   no L1 blob fee) so it is a **regression detector, not a price**; the harness runs Mainnet/Cancun,
   so all L2 behaviour is testnet-or-above.
3. **Zero flake tolerance and no retries at L0–L3**; max one logged retry at L4–L6.
4. **Coverage: 100% line+branch on `packages/protocol` and on the immutable core** (the core is
   unfixable in place per ADR-010; `protocol` is the `TS-DIFF` oracle and an unverified oracle
   silently blesses a wrong contract). Circuits are **not** measured by line coverage.
5. **Quarterly seeded-defect drill** (20 injected defects, ≥90% caught) replaces a mutation-testing
   tool — no such tool is in the repo and none is invented.
6. **Guardrail escalation rule:** any defect against a guardrail FR or a capability-absence assertion
   is automatically Sev-1 regardless of estimated user impact, because `TD-04` means there is no
   override to fix the consequence afterwards.
7. **Mock verifiers are banned from any suite claiming a ZK property**; a green `PersonhoodRegistry`
   suite against `MockVerifierAlwaysTrue` proves bookkeeping and nothing about soundness.

## Open items raised (OPEN-01 … OPEN-18) — OPEN-01…06 and OPEN-11 are Gate-2 blocking

- **OPEN-01** `MACI_VOTING` is off in staging/prod and ADR-006 defers MACI to Phase 3, but `FR-031`,
  `FR-032`, `NFR-003` (receipt-freeness, silent re-vote) are **Must guardrails**. Not delivered at v1.
  *(Independently reached by the project-manager in Doc 13 — see OPEN-18.)*
- **OPEN-02** `FR-004`'s 50%-per-region attestor share cap has **no implementing mechanism**
  (`PersonhoodRegistry` has a per-epoch count cap and no region dimension).
- **OPEN-03** `FeatureFlags.disable()` is unconditional and unilateral; nothing stops disabling a
  flag governing an **open ballot** or blocking execution of a passed proposal — which is exactly
  what `NFR-020` requires and `CON-003` forbids having.
- **OPEN-04** ADR-003 scopes `Nᵢ` **per issuer** under 1-of-N acceptance, so one human with two
  accepted credentials enrols twice and votes twice — contradicting `FR-001`/`BR-006`.
- **OPEN-05** `PersonhoodRegistry.spendNullifier` is `external` with **no caller restriction** — any
  address can burn any nullifier and deny a citizen an action.
- **OPEN-06** `issuerSetValid()` is advisory; `enrol()` never consults it, so a region can fall to a
  single state issuer and keep enrolling.
- **OPEN-07** `FR-011`'s "minimum-substance standard" is a 280-character floor — a length check, not
  a substance check (`OI-09` open).
- **OPEN-08** `FR-002`/`NFR-001` "better than chance" is not falsifiable as written; needs a concrete
  adversary game with ε and sample size (`OI-10` open).
- **OPEN-09** No named QA Lead in the roster; Doc 04 ownership resolves to the architect per CLAUDE.md.
  *(Doc 13 subsequently names Ji-woo Park as Test Lead — reconcile at Doc 04 v1.0.1.)*
- **OPEN-10** `OI-05` (k≥1000 vs ward-level representation) undecided; escalating a ward election's
  scope would change its electorate. *(Doc 13 records `OI-05` as design-resolved by ADR-004 §2
  — escalate to the nearest ancestor meeting k≥1000. That resolves the **publication** scope; the
  distinction this plan raises is that escalation must never be applied to **eligibility**, or a ward
  election's electorate silently changes. `TS-ADV-06/A-06.10` tests exactly that boundary.)*
- **OPEN-11** `NFR-025` demands alternative inclusion ≤ 60 min; ADR-001 states force-inclusion is
  12–24 h. Irreconcilable as written.
- **OPEN-12** `RegionRegistry.submitPopulation` is `onlyTimelock`, so "independent" population sources
  all arrive through one authority — independence is not enforceable on-chain.
- **OPEN-13** `OI-10` collusion bound unset, so `NFR-001` has no pass threshold.
- **OPEN-14** `NFR-004`'s ≤0.1% duplicate rate is not internally measurable by design; needs an
  out-of-band consented audited sample with a stated confidence interval.
- **OPEN-15** `NFR-005`'s "median cost per citizen governance action" has no enumerated denominator.
- **OPEN-16** ADR-001 and ADR-002 both cite a non-existent **"ADR-017"** (only ADR-001…014 exist);
  the sponsorship policy actually lives in ADR-014.
- **OPEN-17** `packages/contracts` has no `package.json`/test workspace although root
  `package.json` declares `test:contracts` — `npm run verify` silently skips all contract tests today.
- **OPEN-18 (schedule conflict — documentation defect in Doc 04 §16, not a design defect).**
  `docs/13-project-plan.md` v1.0.0 was written concurrently and **re-bases Gate 2 from `CON-007`'s
  2027-02-15 to 2027-05-14** (`MS-13`), placing the launch rollout in Phase 3 because a production
  rollout with MACI off violates `BR-011`/`NFR-003` — the same finding as OPEN-01, reached
  independently. **Doc 04 §16 still carries the `CON-007` dates.** Doc 13 is the schedule of record;
  Doc 04 §16 MUST be re-based against `MS-01`…`MS-13` at v1.0.1. The *ordering and exit signals* in
  §16 are unaffected by the re-basing and remain valid. Not corrected in this session because no
  in-place edit tool was available and a full rewrite of the document to change one table risked
  unrelated drift.

## IDs touched

- **Read/covered:** `BR-001`–`BR-012`, `FR-001`–`FR-061`, `NFR-001`–`NFR-026`, `CON-001`–`CON-012`,
  `RISK-01`–`RISK-16`, `TD-01`–`TD-06`, `OI-01`–`OI-11`, `A-01`–`A-06`, `EP-01`–`EP-10`,
  `FE-001`–`FE-028`, `US-0001`–`US-0070`, `NF-01`–`NF-08`, `SCR-01`–`SCR-20`,
  `ADR-001`–`ADR-014`.
- **Referenced (from ADRs; not minted here):** `DES-036`, `DES-041`, `DES-052`, `DES-063`.
- **Created:** suite IDs `TS-FUNC`, `TS-EDGE`, `TS-DIFF`, `TS-ZK`, `TS-ABSENCE`, `TS-ABI`, `TS-SEC`,
  `TS-PRIV`, `TS-DATA`, `TS-PERF`, `TS-LOAD`, `TS-COST`, `TS-A11Y`, `TS-I18N`, `TS-COMPAT`,
  `TS-RES`, `TS-EXIT`, `TS-UPG`, `TS-SMOKE`, `TS-EXPL`, `TS-UAT`, `TS-ADV-01`…`TS-ADV-16`; and
  findings `OPEN-01`…`OPEN-18`.
- **Reserved (not assigned):** `TC-0001`–`TC-3299` ranges per Doc 04 §14; `UT-0001`–`UT-3999` ranges
  (`UT-0001`…`UT-0040` already in use in `packages/protocol/test/`).
- **No `DES-###` minted** — Doc 03 was authored concurrently; the tester reconciles the full `DES`
  mapping in Doc 08.

## Not done / next

- Doc 03 (SDD) and `docs/adr/` were **out of scope for this session by instruction** and untouched.
- Doc 04 needs a `document-review` pass in **technical** mode by a neutral role (not the architect)
  before the SOP advances; report goes to
  `artifacts/reviews/04-test-strategy-master-plan-v1.0.0-technical-cycle1.md`.
- Doc 04 v1.0.1 owes: the §16 schedule re-base against Doc 13 `MS-01`…`MS-13` (OPEN-18), and the
  Test Lead name from Doc 13 (OPEN-09).
- Next role: **engineer** (Doc 06) — must physically build the `packages/contracts` test workspace
  (OPEN-17), add `storageLayout` to the harness `outputSelection` (a hard dependency of `TS-ABSENCE`
  §6.3), and stand up the circuit toolchain. Then **tester** (Docs 07/08).
- `OPEN-01`…`OPEN-06` and `OPEN-11` should be routed to the Principal Architect / product owner
  before coding starts on the affected areas — several are design defects, not test gaps.
