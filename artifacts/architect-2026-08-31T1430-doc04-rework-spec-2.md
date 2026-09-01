# Doc 04 v1.1.0 — apply-verbatim change specification — **file 2 of 3**

> **Continuation of `artifacts/architect-2026-08-31T1430-doc04-rework-spec.md`.** That file holds
> the framing, the verification record, **Part A** (header, C-01) and **Part B** (the new §0 and the
> §1 track note, C-02). **This file** holds **Part C** (§1–§5 currency and track edits, C-03 … C-29)
> and **Part D** (§6–§9, C-30 … C-63). File 3
> (`artifacts/architect-2026-08-31T1430-doc04-rework-spec-3.md`) holds **Part E** (§10–§22,
> C-64 … C-78) and the session-memory note.
>
> Target: `docs/04-test-strategy-master-plan.md` — **one file, never split.** Apply C-01 → C-78 in
> order. Every `FIND:` must match byte-for-byte.

---

# PART C — §1 … §5 (currency + track notes)

## C-03 — §1.1: mark which promises are Definition-B promises

**INSERT AFTER:**

```
- *it costs you nothing and you never meet a wallet* (`FR-060`, `NFR-005`).
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ The first two of those four are **Definition-B** promises. Doc 02 §16.3 classifies
> `FR-031`/`NFR-003` DEFERRED-v2 and `FR-002`/`FR-030`/`NFR-001` PARTIAL. **v1 does not keep them
> and says so** (DES-098; Doc 02 §16.4 H-01/H-03/H-07). The v1 obligation is §0.5 S4/S5 — that the
> promise is **not made**. The v2 obligation is everything below.
```

## C-04 — §1.1 objective 1: the superseded Must-set figure

**FIND:**

```
1. **Prove the guarantees, not just the happy paths.** Most of the Must set (22 of 42 FRs, Doc 02
   §11) are *guardrails* — statements about what the system cannot do. §6 defines how absence is
   tested and, honestly, what that technique cannot establish.
```

**REPLACE WITH:**

```
1. **Prove the guarantees, not just the happy paths.** A large part of the Must set is *guardrails*
   — statements about what the system cannot do. §6 defines how absence is tested and, honestly,
   what that technique cannot establish. _(v1.1.0: the v1.0.0 figure "22 of 42 FRs" was drawn from
   SRS v1.0.0 §11 and is superseded — the Approved Must set is now **114 FR + 24 NFR**, Doc 02
   v2.16.3 §11. The v1 form of a guardrail assertion is §0.5 S1 property honesty.)_
```

## C-05 — §1.1 objective 2: no `TS-DIFF` in v1

**FIND:**

```
   (§5.4) exists solely for this and is the highest-value suite in the plan (ADR-011).
```

**REPLACE WITH:**

```
   (§5.4) exists solely for this and is the highest-value suite in the plan (ADR-011). _(v1.1.0: v1
   has no second oracle and therefore no `TS-DIFF` analogue — §0.3, **OPEN-23**.)_
```

## C-06 — §1.1 objective 3: the eleven added risks

**FIND:**

```
3. **Attack the system on purpose, once per named risk.** `RISK-01` … `RISK-16` each get a dedicated
   adversarial suite (§8), owned by a named person, with a stated quantitative pass criterion.
```

**REPLACE WITH:**

```
3. **Attack the system on purpose, once per named risk.** `RISK-01` … `RISK-16` each get a dedicated
   adversarial suite (§8), owned by a named person, with a stated quantitative pass criterion.
   _(v1.1.0: `RISK-22`…`RISK-32` get theirs at **§0.8**, with band assignments at §2.2.)_
```

## C-07 — §1.1 objective 5: point at §0.10 too

**FIND:**

```
5. **Surface what we are not testing, and what a passing suite does not prove.** §12 and §5.5.
```

**REPLACE WITH:**

```
5. **Surface what we are not testing, and what a passing suite does not prove.** §12, §5.5 and §0.10.
```

## C-08 — §1.2 lead-in: label the table as the 2026-08-09 Definition-B inventory

**FIND:**

```
### 1.2 Test items

| Item | Location | Version basis |
```

**REPLACE WITH:**

```
### 1.2 Test items

_(v1.1.0 — this table is the **2026-08-09 / Definition-B** inventory. The current v1 inventory,
verified 2026-08-31, is **§0.2**. Six rows are corrected in place below because leaving them as
written would assert something false about today's repository.)_

| Item | Location | Version basis |
```

## C-09 — §1.2 row: `packages/protocol` test count

**FIND:**

```
| Pure reference implementation | `packages/protocol/src/` (`constants.js`, `governance.js`, `party.js`, `regions.js`, `flags.js`, `index.js`) | trunk; 82 unit tests currently green (`UT-0001…`) |
```

**REPLACE WITH:**

```
| Pure reference implementation | `packages/protocol/src/` (`constants.js`, `governance.js`, `party.js`, `regions.js`, `flags.js`, `index.js`) | trunk; 82 unit tests green at 2026-08-09 (`UT-0001…`); **150 green at Doc 06 v2.4.3** _(v1.1.0)_ |
```

## C-10 — §1.2 row: contracts workspace now exists (closes `OPEN-17`)

Closes **ISS-05**.

**FIND:**

```
| Solidity core & registries | `packages/contracts/src/` (`core/PersonhoodRegistry.sol`, `core/RegionRegistry.sol`, `core/VerifierRegistry.sol`, `core/FeatureFlags.sol`, `interfaces/IProofVerifier.sol`) | trunk; **no test workspace exists yet** — `packages/contracts/package.json` is absent although the root `package.json` declares `test:contracts` |
```

**REPLACE WITH:**

```
| Solidity core & registries | `packages/contracts/src/` (`core/PersonhoodRegistry.sol`, `core/RegionRegistry.sol`, `core/VerifierRegistry.sol`, `core/FeatureFlags.sol`, `interfaces/IProofVerifier.sol`) | **CORRECTED v1.1.0:** the workspace now exists — `packages/contracts/package.json` and `vitest.config.mjs` are present and `test/` holds five suites (`adversarial`, `differential`, `governance`, `lifecycle`, `deployment-safety`) plus `fixture.mjs`; **95 contract tests green** (Doc 06 v2.4.3, Approved). The v1.0.x claim "no test workspace exists yet" is superseded and **`OPEN-17` is closed** |
```

## C-11 — §1.2 row: circuits

**FIND:**

```
| Circom circuits | `packages/circuits/` — **not yet created** (ADR-005 §"circuit set" defines six circuits) | n/a |
| TypeScript SDK | `packages/sdk/` — **not yet created** (ADR-011) | n/a |
| Design system / client | `packages/ui/`, `apps/web/` — **not yet created** (ADR-012) | n/a |
| Independent verifier | `apps/verifier/` — **not yet created** (ADR-010, `FR-055`) | n/a |
| Off-chain services | `services/indexer/`, `services/relayer/` — **not yet created** (ADR-014) | n/a |
```

**REPLACE WITH:**

```
| Circom circuits | `packages/circuits/circuits/` — **CORRECTED v1.1.0:** three `.circom` sources exist (`personhood_enrol`, `residency_member`, `tenure_member`) plus a `README.md`; there is still **no `package.json`, no test workspace and no ceremony artifact**. ADR-005 §"circuit set" defines six circuits, so three remain unwritten | sources only |
| TypeScript SDK | `packages/sdk/` — **CORRECTED v1.1.0:** created; 16 modules, 12 test files, 244 unit tests; ZK proof paths not wired (§0.2) | present |
| Design system / client | `packages/ui/`, `apps/web/` — **CORRECTED v1.1.0:** both created (§0.2) | present |
| Independent verifier | `apps/verifier/` — **not yet created** (ADR-010, `FR-055`); v2-only under DES-097, and its absence costs `NFR-019` its stated instrument — **OPEN-24** | n/a |
| Off-chain services | `services/indexer/` **created** (16 unit tests); `services/relayer/` — **not yet created** (ADR-014) | partial |
```

## C-12 — §1.3 "In scope": re-pin to the Approved SRS

Closes the §1.3 half of **ISS-01**.

**FIND:**

```
**In scope.** All 61 FRs, all 26 NFRs, all 16 RISKs, all 12 CONs from Doc 02; the six circuits of
ADR-005; the fallback transport ladder of ADR-014; the exit/export path of ADR-010; the client
guarantees of ADR-012.
```

**REPLACE WITH:**

```
**In scope.** _(v1.1.0 — re-pinned to the Approved SRS v2.16.3. The v1.0.x line read "All 61 FRs,
all 26 NFRs, all 16 RISKs, all 12 CONs" against the superseded SRS v1.0.0 and is corrected here per
review ISS-01.)_ The **current Approved requirement set of Doc 02 v2.16.3 §11**, across both tracks:

- **133 FR minted** — 131 active (`FR-046` and `FR-062` superseded), of which **114 are Must**;
- **28 NFR**, of which **24 are Must** (`NFR-008`, `NFR-018`, `NFR-019`, `NFR-026` are Should);
- **27 requirement-level RISK rows** — `RISK-01`…`RISK-16` plus `RISK-22`…`RISK-32`
  (`RISK-17`…`RISK-21` live in Doc 13 §6 and are the project-manager's register, not this plan's);
- **15 CON** — `CON-001` … `CON-015`.

The **Definition-B** portion — the six circuits of ADR-005, the fallback transport ladder of
ADR-014, the exit/export path of ADR-010, the client guarantees of ADR-012 — is scoped by §1–§22.
The **Definition-A** portion is scoped by **§0**, with delivery dispositions taken from Doc 02
§16.3 (FRs: IN-v1 107 · PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED 2. NFRs: IN-v1 24 · PARTIAL 3 ·
DEFERRED-v2 1).
```

## C-13 — §1.3 out-of-scope row: the v1 ID-check vendor

**FIND:**

```
| Correctness of an identity attestor's own document check | We consume an eligibility result and never see the document (`FR-003`, `CON-002`). We test our *handling* and the plurality invariant, not their KYC. |
```

**REPLACE WITH:**

```
| Correctness of an identity attestor's own document check | We consume an eligibility result and never see the document (`FR-003`, `CON-002`). We test our *handling* and the plurality invariant, not their KYC. _(v1.1.0: in v1 this extends to the ID-check **vendor** — the verify-and-discard contract is a legal and contractual control, not a technical one; Doc 02 H-17.)_ |
```

## C-14 — §1.3 "Features not to be tested at v1": re-derive from the current backlog

**FIND:**

```
**Features not to be tested at v1 (with reason).** `FR-005` (revocation/appeal), `FR-049`, `FR-050`,
`FR-052` (treasury), `FR-053` (fork) have **no backlog story** at Doc 05 v1.0.0 §12. All are
Should/Could. The tester MUST record them as **open non-Must RTM rows**, not as absent. Delegation
(`DELEGATION` flag, ADR-007 §5) ships off in all non-dev environments and is tested only to the
level of "the flag is off and the capability is unreachable".
```

**REPLACE WITH:**

```
**Features not to be tested at v1 (with reason).** `FR-005`, `FR-049`, `FR-050`, `FR-052`, `FR-053`
had **no backlog story** at Doc 05 v1.0.0 §12. All were Should/Could **except `FR-050`, which Doc 02
§11 has since raised to Must** (BR-019). The tester MUST record them as **open RTM rows**, not as
absent. Delegation (`DELEGATION` flag, ADR-007 §5) ships off in all non-dev environments and is
tested only to the level of "the flag is off and the capability is unreachable". _(v1.1.0: this
no-story list is derived from Doc 05 **v1.0.0** and Doc 05 is now at **v2.3.0 (In Review)**. The
list MUST be re-derived by the product owner at the next backlog version — **OPEN-21**. `FR-050`'s
promotion to Must is recorded here so it is not carried forward as a Should by inheritance.)_
```

## C-15 — §1.4 References: re-pin every cited document version

**FIND:**

```
Doc 01 PR-FAQ · Doc 02 SRS · Doc 03 SDD (§11 failure-mode analysis seeds `TS-EDGE`) · Doc 05 Backlog
(§8 non-functional backlog items `NF-01`…`NF-08`) · Doc 06 Coding & UT (unit-test standard, `UT-####`)
· Doc 07 Test Cases (`TC-####`) · Doc 08 RTM · ADR-001…ADR-014 · CLAUDE.md · ISO/IEC/IEEE 29119 ·
IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
```

**REPLACE WITH:**

```
Doc 01 PR-FAQ · Doc 02 SRS **v2.16.3** (incl. §16 delivery phasing and §16.4 honesty register) ·
Doc 03 SDD **v2.11.2** (§9 repo design, §10.13 v1/v2 split, §11 failure-mode analysis which seeds
`TS-EDGE`, §14 test hooks) · Doc 05 Backlog **v2.3.0** (§8 non-functional backlog items
`NF-01`…`NF-08`) · Doc 06 Coding & UT **v2.4.3** (unit-test standard, `UT-####`, §2.1
`IS_INSECURE_MOCK` discipline) · Doc 07 Test Cases **v2.4.4** (`TC-####`) · Doc 08 RTM ·
**ADR-001…ADR-025** · CLAUDE.md · ISO/IEC/IEEE 29119 · IEEE 829 · WCAG 2.2 Level AA · RFC 2119.
```

## C-16 — §2.1: three new quality objectives

Closes the §2.1 half of **ISS-01** (`NFR-027`, `NFR-028`).

**INSERT AFTER:**

```
| It keeps working when someone tries to switch it off | `NFR-007`, `NFR-014`, `NFR-020`, `NFR-025` | `TS-RES` + `TS-ADV-08` + `TS-ADV-09` + rollback drill |
```

**INSERT THIS TEXT (three new table rows, immediately after, no blank line):**

```
| **_(v1.1.0)_ No per-user behavioural event exists anywhere** | `NFR-027` | `UT-0525` + `UT-0740` + the repo-wide behavioural-event scan + store/log/export inspection (§9) |
| **_(v1.1.0)_ Nothing is ever deleted or overwritten** | `NFR-028` | Service-layer append-only assertions + `INSERT`-only grant and `BEFORE UPDATE` refusal at the store + projection-equals-replay (§9) |
| **_(v1.1.0)_ v1 claims nothing it cannot do** | `FR-131` + the PARTIAL / DEFERRED-v2 set | §0.5 seam-honesty doctrine S1–S6, build-failing |
```

## C-17 — §2.2: label the existing band table, add the `RISK-22…32` band table

Closes the §2.2 half of **ISS-01**.

**FIND:**

```
Effort is weighted by Doc 02 §10 `L × I`, then by *irreversibility of the harm*.

| Band | Risks | Share of test effort | Rationale |
```

**REPLACE WITH:**

```
Effort is weighted by Doc 02 §10 `L × I`, then by *irreversibility of the harm*.

**Band membership — `RISK-01` … `RISK-16` (Definition-B set, unchanged).**

| Band | Risks | Share of test effort | Rationale |
```

## C-18 — §2.2: insert the second band table and the re-weighting note

**FIND:**

```
Band A and Band B suites are **blocking at every promotion**, including local pre-push. Bands C and
D block promotion to staging and above.
```

**REPLACE WITH:**

```
**Band membership — `RISK-22` … `RISK-32`** _(new at v1.1.0; closes the §2.2 half of review ISS-01.
Suites at **§0.8**; `L × I` from Doc 02 v2.16.3 §10.)_

| Band | Risks | Why this band |
|---|---|---|
| **Band A — irreversible harm to a person** | `RISK-22` (15) stolen-credential takeover · `RISK-23` (10) veto suppression · `RISK-25` (12) public-tier targeting & harassment · `RISK-28` (12) conduct votes weaponised | A seized political identity, a suppressed veto, a targeted worker and a harassment campaign all land on **one named human**, and none of the four is undone by a rollback. `RISK-25` and `RISK-28` reach the physical world, which is why they sit with `RISK-02`/`RISK-06` rather than a tier lower. |
| **Band B — irreversible harm to a party** | `RISK-24` (10) recovery raced against a live ballot · `RISK-27` (9) committee agenda capture · `RISK-30` (10) trust-anchor governance latency · `RISK-31` (12) steward soft-power accretion | Each ends in a **decision the party did not actually make** — a mis-decided ballot, a steered agenda, a forged electorate minted during a timelock, or a proposal treated as canonical because of who wrote it. `TD-04` applies: there is no override, so there is no repair. |
| **Band C — availability & access** | *(none)* | None of the eleven is primarily an availability risk. |
| **Band D — institutional** | `RISK-26` (8) analytics prohibition masks funnel failure · `RISK-29` (8) non-violence clause drags toward content judgment · `RISK-32` (6) steward-body collapse | Slow-moving; mitigated more by design, disclosure and recorded trade-off (`TD-08`, `TD-10`, `TD-11`) than by test. `RISK-32` is deliberately low-impact **by design** (`FR-117`); the suite proves the design rather than preventing the event. |

Band A and Band B suites are **blocking at every promotion**, including local pre-push — and that
rule now covers `TS-ADV-22`, `23`, `25`, `28` (A) and `TS-ADV-24`, `27`, `30`, `31` (B). Bands C and
D block promotion to staging and above.

> **Effort re-weighting is owed and is not this document's to invent.** The ~35/30/20/15 split above
> was set against 16 risks. It is deliberately **not** re-derived here across 27, because the effort
> budget is Doc 13's (`CON-007`; 18 people; USD 4.2M) and re-cutting it is the project-manager's
> decision, not the architect's. What **is** decided here, and is the load-bearing half, is **band
> membership** — because band membership is what determines blocking behaviour at a promotion.
> Re-weighting is routed to Ana-Maria Petrescu as part of **OPEN-22**.
```

## C-19 — §2.3 first bullet: the differential half is v2-only

**FIND:**

```
  rule is expressed there, unit-tested there, and then differentially tested against Solidity. This
  is a deliberate inversion: the *specification executes*.
```

**REPLACE WITH:**

```
  rule is expressed there, unit-tested there, and then differentially tested against Solidity. This
  is a deliberate inversion: the *specification executes*. _(v1.1.0: the first half holds in both
  tracks; the differential half is v2-only — §0.3, **OPEN-23**.)_
```

## C-20 — §2.3 last bullet: the v1 form of a guardrail assertion

**FIND:**

```
  a time. Correspondingly: a guardrail story is not Done until its capability-absence assertion
  (§6) exists, not merely its positive path.
```

**REPLACE WITH:**

```
  a time. Correspondingly: a guardrail story is not Done until its capability-absence assertion
  (§6) exists, not merely its positive path. _(v1.1.0: in v1 the guardrail assertion is often a
  §0.5 S1 property-honesty assertion — the same discipline, one layer up.)_
```

## C-21 — §2.4: boundary-value row gains the `FR-130` cap

**FIND:**

```
| **Boundary-value analysis** | every threshold constant in `constants.js` | quorum at `quorumBps-1 / = / +1`; tenure at `minTenureSeconds ∓1s`; surge at `GROWTH_TRIGGER_BPS` exactly 2000 vs 2001; `MIN_ANONYMITY_SET` 999/1000/1001; `ABSOLUTE_FLOOR_ENDORSEMENTS` 499/500/501; `SUPERSEDE_GRACE` at ±1s |
```

**REPLACE WITH:**

```
| **Boundary-value analysis** | every threshold constant in `constants.js` | quorum at `quorumBps-1 / = / +1`; tenure at `minTenureSeconds ∓1s`; surge at `GROWTH_TRIGGER_BPS` exactly 2000 vs 2001; `MIN_ANONYMITY_SET` 999/1000/1001; `ABSOLUTE_FLOOR_ENDORSEMENTS` 499/500/501; `SUPERSEDE_GRACE` at ±1s; **_(v1.1.0)_ the `FR-130` provisional-party cap at 99/100/101** |
```

## C-22 — §2.4: adversarial and capability-absence rows point at the v1 forms

**FIND:**

```
| **Adversarial / attack-tree** | `TS-ADV-01…16` (§8) | one tree per RISK, leaves become `TC-####` |
| **Capability-absence assertion** | every guardrail FR (§6) | ABI allowlist snapshot, bytecode selector scan, storage-layout snapshot |
| **Differential testing** | `packages/protocol` vs deployed contract (§5.4) | generated inputs replayed through both oracles |
```

**REPLACE WITH:**

```
| **Adversarial / attack-tree** | `TS-ADV-01…16` (§8); **_(v1.1.0)_ `TS-ADV-22…32` (§0.8)** | one tree per RISK, leaves become `TC-####` |
| **Capability-absence assertion** | every guardrail FR (§6); **_(v1.1.0)_ every v1 backing property (§0.5 S1)** | ABI allowlist snapshot, bytecode selector scan, storage-layout snapshot; `getProperties()` asserted `false` |
| **Differential testing** | `packages/protocol` vs deployed contract (§5.4) | generated inputs replayed through both oracles |
| **_(v1.1.0)_ Interface-parity assertion** | the 22-method `IPartyStore` and its app-side type shim | `UT-0871` asserts the two member sets are equal, which is what makes "implement the interface" checkable rather than aspirational (Doc 03 §10.13.12) |
| **_(v1.1.0)_ Call-site census** | `verifyEligibility()` placement | repo-wide scan: exactly the three `FR-123` counting sites, nothing at account creation or party-join (§0.5 S6) |
```

## C-23 — §3: label the level table as Definition-B; correct the L1 "to be created" note

**FIND:**

```
## 3. Test levels

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
```

**REPLACE WITH:**

```
## 3. Test levels

_(v1.1.0 — these are the **Definition-B** levels. The Definition-A levels are **V0–V6** at §0.3.)_

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
```

## C-24 — §3: L1 row

**FIND:**

```
| **L1 — Contract unit** | one contract at a time, in the in-process EVM. Every custom error provoked. | `packages/contracts/test/unit/` *(to be created)* | vitest + `tools/evm-harness` | Engineer | Yes | pre-merge |
```

**REPLACE WITH:**

```
| **L1 — Contract unit** | one contract at a time, in the in-process EVM. Every custom error provoked. | `packages/contracts/test/` *(the workspace now exists — v1.1.0; 95 tests green, `OPEN-17` closed)* | vitest + `tools/evm-harness` | Engineer | Yes | pre-merge |
```

## C-25 — §4: `TS-DIFF` is v2-only

**FIND:**

```
| **Differential** | Yes | `TS-DIFF`, L3. §5.4. |
```

**REPLACE WITH:**

```
| **Differential** | Yes | `TS-DIFF`, L3. §5.4. **v2 only** — v1 has no second oracle (§0.3, OPEN-23). |
```

## C-26 — §4: compliance, upgrade/migration and contract/API rows gain v1 notes; add the seam-honesty type

**FIND:**

```
| **Compliance** | Partial | `NFR-015` legal sign-off per jurisdiction is an *attestation*, not a test. What we test: the pre-enrolment disclosure is present and acknowledged (`SCR-01`), and an erasure request produces the "no personal data exists" demonstration plus credential deactivation. |
```

**REPLACE WITH:**

```
| **Compliance** | Partial | `NFR-015` legal sign-off per jurisdiction is an *attestation*, not a test. What we test: the pre-enrolment disclosure is present and acknowledged (`SCR-01`), and an erasure request produces the "no personal data exists" demonstration plus credential deactivation. _(v1.1.0: in v1 that demonstration is narrower — `phone_hash` and `subject_id_hash` **do** exist as restricted-class fields; Doc 02 H-16/H-18, `CON-015`.)_ |
```

## C-27 — §4: upgrade/migration + contract/API

**FIND:**

```
| **Upgrade / migration** | Yes | `TS-UPG`: core v1 → v2 party migration rehearsed on testnet (ADR-010); circuit supersede + `SUPERSEDE_GRACE` window; region `schemeVersion` advance with non-retroactivity (`FR-007`). |
| **Contract / API** | Yes | `TS-ABI`: ABI allowlist snapshot (§6), indexer GraphQL schema snapshot, SDK↔contract ABI drift check, public read-interface contract tests. |
```

**REPLACE WITH:**

```
| **Upgrade / migration** | Yes | `TS-UPG`: core v1 → v2 party migration rehearsed on testnet (ADR-010); circuit supersede + `SUPERSEDE_GRACE` window; region `schemeVersion` advance with non-retroactivity (`FR-007`). _(v1.1.0: the **backing swap** — Definition A → Definition B behind DES-095/DES-096 — is the migration that matters most and is untested because Definition B is unbuilt. `TS-UPG` MUST gain a seam-swap rehearsal before any v2 release; **OPEN-22**.)_ |
| **Contract / API** | Yes | `TS-ABI`: ABI allowlist snapshot (§6), indexer GraphQL schema snapshot, SDK↔contract ABI drift check, public read-interface contract tests. _(v1.1.0: in v1 the analogous control is the `IPartyStore` interface-parity assertion, §2.4.)_ |
```

## C-28 — §4: append the seam-honesty row

**INSERT AFTER:**

```
| **Formal verification** | Deferred — stated | ADR-010 says the core is "formally specified for its critical invariants". At v1 we express those invariants as executable property tests, not as machine-checked proofs. Recorded honestly in §12: this is weaker than formal verification and we do not claim otherwise. |
```

**INSERT THIS TEXT (one new table row, immediately after, no blank line):**

```
| **_(v1.1.0)_ Seam-honesty / claim-absence** | Yes | §0.5 S1–S6. The v1 track's load-bearing type: it tests that the product does not claim a guarantee it lacks. **Build-failing.** |
```

## C-29 — §5.1, §5.2, §5.3, §5.4, §5.5 currency and track notes

Five small edits, applied in order.

### C-29a — §5.1 test count

**FIND:**

```
Runner: `vitest run` (`npm run test:protocol`). Currently 82 passing assertions across
`test/governance.test.js` and `test/party-and-regions.test.js`, numbered `UT-0001…`.
```

**REPLACE WITH:**

```
Runner: `vitest run` (`npm run test:protocol`). 82 passing assertions at 2026-08-09 across
`test/governance.test.js` and `test/party-and-regions.test.js`, numbered `UT-0001…`;
**150 passing at Doc 06 v2.4.3 (Approved)** — v1.1.0 currency note.
```

### C-29b — §5.1 last bullet: the v1 form of flag surfacing

**FIND:**

```
  `MACI_VOTING.defaults.prod === false` is **surfaced to the user**, per its own description
  ("the UI must say so"). See OPEN-01.
```

**REPLACE WITH:**

```
  `MACI_VOTING.defaults.prod === false` is **surfaced to the user**, per its own description
  ("the UI must say so"). See OPEN-01. _(v1.1.0: in v1 that surfacing is DES-098 / `FR-131` and is
  tested at §0.5 S4.)_
```

### C-29c — §5.2 harness rule 5: extend the mock/honest distinction to the v1 seams

**FIND:**

```
   `PersonhoodRegistry` suite against `MockVerifierAlwaysTrue` proves the registry's bookkeeping and
   nothing whatsoever about proof soundness. This distinction is restated in every affected `TC`.
```

**REPLACE WITH:**

```
   `PersonhoodRegistry` suite against `MockVerifierAlwaysTrue` proves the registry's bookkeeping and
   nothing whatsoever about proof soundness. This distinction is restated in every affected `TC`.
   _(v1.1.0: Doc 06 §2.1 extends this to the v1 seams — a **stub** lies and returns
   `IS_INSECURE_MOCK() = true`; the honest conventional backing returns `false` and is **not** a
   mock (Doc 03 §10.13.4). The two must never be conflated, and §0.5 S2/S3 makes the distinction a
   test rather than a convention.)_
```

### C-29d — §5.3 L4 is v2-only

**FIND:**

```
Covered in full by §7 (the ZK doctrine). Circuits are not tested by line coverage; that metric is
meaningless for a constraint system.
```

**REPLACE WITH:**

```
Covered in full by §7 (the ZK doctrine). Circuits are not tested by line coverage; that metric is
meaningless for a constraint system. _(v1.1.0: **v2 only** — v1 verifies no proof. §0.3.)_
```

### C-29e — §5.4 track note

**INSERT AFTER:**

```
the drift before a citizen does.
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0 track note.)_ This suite has **no Definition-A analogue**, and its absence is the largest
> assurance gap between the two tracks. In v1 the rules run in `packages/protocol` and are consumed
> by one service; there is no second oracle. A narrow differential against the *audit contract* —
> for the values that contract actually stores — is worth building, and it is a fraction of the case
> space below. **OPEN-23.**
```

### C-29f — §5.4: the rounding hazard is not v2-only

**INSERT AFTER:**

```
or an explicit, tested refusal. A silent disagreement here mis-decides an election.
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ **The rounding hazard is not v2-only.** v1's `computeTally()` is a SQL aggregate whose
> integer semantics must agree with `packages/protocol`'s `tally()` — the same class of silent
> disagreement, one layer down. `TS-V1-BALLOT` (§0.4) MUST carry the same precision suite against
> the SQL path.
```

### C-29g — §5.5 lead-in points at §0.10

**FIND:**

```
Stated here so it is not overclaimed at Gate 2.

| Green suite | Establishes | Does **not** establish |
```

**REPLACE WITH:**

```
Stated here so it is not overclaimed at Gate 2. _(The Definition-A counterpart is **§0.10**.)_

| Green suite | Establishes | Does **not** establish |
```

---

# PART D — §6 … §9

> These changes transcribe authored content from the orphan file
> `docs/04-test-strategy-master-plan-part2.md`, which the project-manager **must delete** once these
> changes are applied (see file 1, §0.1). Nothing in §6–§9 is removed or weakened; every change is
> additive.

## C-30 — §6 lead-in: the v1 form of capability absence

**INSERT AFTER:**

```
They are tested by *proving a surface is empty* — which is a fundamentally weaker kind of evidence,
and we treat it as such.
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0 track note.)_ Techniques 1–3 below are **artifact scans over compiled Solidity** and
> therefore bind the on-chain core, which **v1 does not deploy** (v1 deploys only the lightweight
> audit-record subset, DES-097). Technique 4 (negative-authority matrix) and Technique 5 (review
> checklist) apply to both tracks unchanged. The v1 form of "a capability is absent" is **§0.5 S1**
> — every `getProperties()` / `getTallyProperties()` field that Doc 03 §10.13.2/§10.13.3 declares
> `false` is asserted `false`, so that a silent upgrade of a claim fails the build. The honest
> limits at §6.5 apply, with full force, to that form too.
```

## C-31 — §6.1: record that the golden files do not exist (mints `OPEN-25`)

**INSERT AFTER:**

```
`spendNullifier(bytes32,uint256)` **with no caller restriction** — the snapshot pins that fact and
`TS-ADV-01` tests its consequences (see OPEN-05).
```

**INSERT THIS TEXT (blank line, then the block):**

```

> **Status, verified 2026-08-31 _(v1.1.0)_.** The capability-absence *tests* exist —
> `packages/contracts/test/adversarial.test.mjs` performs selector and denylist scanning, and Doc 06
> §4 records the three techniques as implemented. The **checked-in golden files this section
> specifies (`packages/contracts/test/absence/<Contract>.selectors.json`) do not exist**: there is
> no `.json` file anywhere under `packages/contracts/test/`. The control as written — *"a human
> deliberately approved this new selector, and the diff is reviewable"* — is therefore **not yet in
> force**; what is in force is an in-code assertion that a reviewer must read the test to audit.
> Recorded as **OPEN-25**, owner Samuel Oyelaran, needed before the `NF-02` audit freeze.
```

## C-32 — §6.4: the negative-authority matrix is not v2-only

**INSERT AFTER:**

```
non-authorised caller class reverts: deployer, a party founder, an office-holder, an attester, an
issuer, a paymaster, the emergency disabler (where not authorised), and an arbitrary EOA.
```

**INSERT THIS TEXT (blank line, then the block):**

```

_(v1.1.0.)_ **The matrix is not v2-only.** Its Definition-A form is the same question asked of the
conventional stack: for every privileged *service* operation (activate a party, record a counting
contribution, publish a tally hash, archive a petition), assert that every non-authorised caller
class is refused — an unauthenticated caller, an open-tier account, a member of a different party, a
member who has left, and an account whose ID verification has not completed. `TS-MEMBERSHIP` and
`TS-PROPOSALS` already carry part of this; the full matrix is owed with `TS-V1-BALLOT` (§0.4).
```

## C-33 — §6.4: a fourth review-checklist question for the v1 track

**FIND:**

```
questions are fixed: *does this change add a caller who can decide something? does it add a field
that could hold a person? does it add a path that reaches a result after that result was published?*
```

**REPLACE WITH:**

```
questions are fixed: *does this change add a caller who can decide something? does it add a field
that could hold a person? does it add a path that reaches a result after that result was published?*
_(v1.1.0 adds a fourth, for the v1 track: **does this change make the product claim something it
cannot do?** — §0.5.)_
```

## C-34 — §6.5 limit 1: the v1 limit is far larger

**FIND:**

```
   "the indexer is a cache, never an authority" is enforced by client-side re-verification, which is
   an L5/L6 test, not an absence test.
```

**REPLACE WITH:**

```
   "the indexer is a cache, never an authority" is enforced by client-side re-verification, which is
   an L5/L6 test, not an absence test. _(v1.1.0: in v1 this limit is far larger, because the
   application store **is** the authority. Nothing on-chain bounds what the operator database can do;
   Doc 02 H-01…H-14 is the disclosure, not the mitigation.)_
```

## C-35 — §6.5 limit 2: the control is not yet in force

**FIND:**

```
2. **An allowlist snapshot is only as good as its review.** The control is *"a human deliberately
   approved this new selector"*. If review degrades, the control degrades silently.
```

**REPLACE WITH:**

```
2. **An allowlist snapshot is only as good as its review.** The control is *"a human deliberately
   approved this new selector"*. If review degrades, the control degrades silently. _(And it is not
   yet in force at all — **OPEN-25**.)_
```

## C-36 — §6.5 limit 6: v1 is not powerless, and must not say it is

**FIND:**

```
   by making us genuinely powerless; §12 of this plan records the rest as residual risk we do not
   test and do not claim to have solved.
```

**REPLACE WITH:**

```
   by making us genuinely powerless; §12 of this plan records the rest as residual risk we do not
   test and do not claim to have solved. _(v1.1.0: in v1 we are **not** powerless — `FR-128`'s
   subpoena test is explicitly not met (Doc 02 H-04), and the honest v1 statement is "we hold it and
   can be compelled", not "we cannot comply".)_
```

## C-37 — §7 lead-in: mark the whole section Definition-B only

**FIND:**

```
## 7. The zero-knowledge test doctrine

ADR-005 states the problem exactly:
```

**REPLACE WITH:**

```
## 7. The zero-knowledge test doctrine

> **Definition-B only _(v1.1.0)_.** v1 verifies no proof and deploys no circuit. This section
> governs the deferred v2 release **in full and unchanged**. Its v1 counterpart is **§0.5**, which
> does not weaken this doctrine but tests the opposite proposition: that v1 **claims nothing** a
> circuit would be needed to justify.

ADR-005 states the problem exactly:
```

## C-38 — §7.1: circuit-set currency

**FIND:**

```
The circuit set from ADR-005: `personhood_enrol`, `residency_member`, `party_member`,
`tenure_member`, `vote_message` (MACI), `tally` (MACI).
```

**REPLACE WITH:**

```
The circuit set from ADR-005: `personhood_enrol`, `residency_member`, `party_member`,
`tenure_member`, `vote_message` (MACI), `tally` (MACI). _(v1.1.0 currency: three `.circom` sources
exist in `packages/circuits/circuits/` — `personhood_enrol`, `residency_member`, `tenure_member` —
with no test workspace and no ceremony artifacts. Three of the six are unwritten.)_
```

## C-39 — §7.2: re-verified tooling absence

**FIND:**

```
`circom`, `snarkjs` and `circomspect` are mandated by ADR-005 §"Bad / accepted risk" but are **not
present in the repository today**. See §11.2 (required, not yet present).
```

**REPLACE WITH:**

```
`circom`, `snarkjs` and `circomspect` are mandated by ADR-005 §"Bad / accepted risk" but are **not
present in the repository today** (re-verified 2026-08-31: `packages/circuits/` holds three
`.circom` sources and a README, with no `package.json` and no test workspace). See §11.2 (required,
not yet present).
```

## C-40 — §8 lead-in: the coverage note that closes the §8 half of ISS-01

**INSERT AFTER:**

```
quantitative pass criterion. Where a suite is expected to *fail* against the design as currently
recorded, that is stated — an adversarial suite that is written to pass is not an adversarial suite.
```

**INSERT THIS TEXT (blank line, then the block):**

```

> **Coverage note _(v1.1.0)_ — closes the §8 half of review ISS-01.** Doc 02 v2.16.3 §10 carries
> **27** requirement-level RISK rows, not 16: `RISK-01`…`RISK-16` plus `RISK-22`…`RISK-32`
> (`RISK-17`…`RISK-21` live in Doc 13 §6 and are the project-manager's register, not this plan's).
> The eleven added since v1.0.0 have their own suites — **`TS-ADV-22` … `TS-ADV-32` at §0.8** — and
> their band assignments at §2.2. They are placed in the Definition-A track because **eight of the
> eleven attack the conventional v1 surface** (a phone number, a database, an ID-check vendor, a
> standing steward body) rather than the cryptographic one, and `RISK-22` in particular is the single
> highest-value adversarial suite for a v1 release. The sixteen below are unchanged and remain the
> Definition-B set. **Neither set is a substitute for the other, and a Gate-2 packet must carry a
> recorded verdict for every risk in the track it is gating.**
```

## C-41 — `TS-ADV-01` track note

**INSERT AFTER:**

```
| A-01.7 Endorsement inflation | Flood endorsements on a live petition | Threshold floor (`max(byPopulation, byVerified, 500)`) plus the activation dwell period defeat it; `TS-ADV-12` covers the denominator half |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ **The v1 form of `RISK-01` is different and is not covered by this suite.** In v1 there
> is no nullifier and no issuer; Sybil resistance rests on one account per verified phone number plus
> `subject_id_hash` same-document deduplication at the counting gate (`FR-132`, DES-100). Doc 02 H-15
> records plainly that **one-person-one-vote is not guaranteed in v1** — a person with multiple
> legitimate government IDs can hold multiple counting accounts. The v1 adversarial work sits in
> `TS-V1-ID` and `TS-V1-SPAM` (§0.4) and must not be reported as `TS-ADV-01`.
```

## C-42 — `TS-ADV-02` track note

**INSERT AFTER:**

```
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it. **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ **This suite cannot pass in v1 and MUST NOT be run as if a fail were a defect.** Doc 02
> §16.3 classifies `NFR-003` and `FR-031` **DEFERRED-v2**; `FR-032` is PARTIAL (last-ballot-counts by
> DB overwrite, visible in logs). The v1 obligation is not to achieve receipt-freeness but to **state
> that it is absent**, at every ballot, non-dismissably (DES-098 / `FR-131`), tested at §0.5 S4.
> `OPEN-01` remains the standing record that a Must guardrail is phased.
```

## C-43 — `TS-ADV-05` track note

**INSERT AFTER:**

```
| A-05.5 Per-region attestor concentration | `FR-004` requires refusing issuance from an attestor whose share would exceed 50% **in that region**. `PersonhoodRegistry` has a per-issuer *epoch count* cap and **no region dimension at all**; `RegionRegistry.issuanceCount` tracks residency attesters, not personhood issuers. **`FR-004`'s share cap has no implementing mechanism and is untestable as written — OPEN-02**, Gate-2 blocker |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ The v1 analogue of "issuer compromise" is **ID-check-vendor compromise**, and it is
> covered by `TS-ADV-30` (§0.8), not here — the mechanism, the blast radius and the removal path are
> all different. Doc 02 `FR-129` makes single-issuer permanence a **Charter-level** re-entry rather
> than a configuration default, and Phase-1's single-rail limitation is recorded and dated
> (`FR-121`, ADR-016).
```

## C-44 — `TS-ADV-06` track note

**INSERT AFTER:**

```
| A-06.11 Withholding is disclosed | The user is told publication is delayed and why (`NFR-002`, US-0039) |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ Group B's **publication** half — aggregate-only publication with a `k` threshold and a
> disclosed delay — is genuinely testable in v1 and MUST be tested there. Group A is **not**: v1's
> database links account ↔ party ↔ activity directly, so a correlation battery measures the API
> surface and nothing more. The v1 verdict is the disclosed posture at Doc 02 H-06/H-07/H-14, never
> "no linkage found". §0.7 states the rule.
```

## C-45 — `TS-ADV-07` track note (the most important one in §8)

**INSERT AFTER:**

```
| Residual disclosure | The pre-enrolment screen (`SCR-01`) states that an attester still learns the citizen enrolled — assert the disclosure is present, plain-language, and acknowledged before proceeding (`FR-003`, `NFR-015`) |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0 — the most important track note in this section.)_ **The first two rows are false in v1
> and the suite MUST say so rather than run.** In Definition A the operator database holds the
> member ↔ party mapping and the ballot direction; `FR-128`'s subpoena test is explicitly **deferred
> to v2** (Doc 02 T-02 CONFIRMED 2026-08-23; H-04). Running `TS-ADV-07` against v1 and recording a
> fail would misrepresent a phasing decision as a defect; running it and recording a pass would be a
> lie. **The v1 obligation is the disclosure**: the enrolment and ballot surfaces state that the
> operator holds this data and can be compelled (DES-098 clauses; §0.5 S4). The third and fourth rows
> do apply in v1, in their conventional form, via §6.4's negative-authority matrix.
```

## C-46 — `TS-ADV-08` track note

**FIND:**

```
hash of the served bundle matches the public source — the defence against a compelled
"just this one user gets different JavaScript" attack (ADR-012 §4).
```

**REPLACE WITH:**

```
hash of the served bundle matches the public source — the defence against a compelled
"just this one user gets different JavaScript" attack (ADR-012 §4). _(v1.1.0: `NFR-014` is IN-v1 and
this suite applies to both tracks; in v1 the "governance action" completed under a block is a
conventional API write, and the path set MUST be re-verified against the v1 hosting topology.)_
```

## C-47 — `TS-ADV-09` track note

**INSERT AFTER:**

```
| A-09.5 Degrade, never deny | Sponsorship circuit-breaker trips (3× p99, ADR-014) → self-pay path works; the action is queued with an explanation, never rejected (`FR-061`) |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ `NFR-025` is IN-v1, but the **mechanism** differs completely: v1 governance actions are
> conventional API writes, not UserOps, and the only chain interaction is the audit-record write.
> `OPEN-11`'s conflict is therefore a **v2** conflict; the v1 question — *can a single operator delay
> one citizen's action beyond 60 minutes?* — has a different and, in v1, **worse** answer, because
> the operator is the write path. It is untested and is folded into **OPEN-22**.
```

## C-48 — `TS-ADV-10` is v2-only

**FIND:**

```
Detection is impossible by test (§7.4). This suite tests **containment and response**.
```

**REPLACE WITH:**

```
Detection is impossible by test (§7.4). This suite tests **containment and response**.
_(v1.1.0: **v2 only** — v1 runs no ceremony.)_
```

## C-49 — `TS-ADV-11` track note

**INSERT AFTER:**

```
| A-11.6 Multi-device first | Assert the common "broke my phone" case is served by a second registered passkey and never reaches the recovery path at all |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ `NFR-016` and `FR-058` are IN-v1, so this suite applies to both tracks — but **A-11.5
> is an `FR-059` PARTIAL in v1** (Doc 02 H-10): the recovery event is associated with the account in
> the database and can be correlated with membership. Assert the channel constraints; do not assert
> "reveals nothing". `TS-ADV-22`/`TS-ADV-23` (§0.8) carry the v1 adversarial half.
```

## C-50 — `TS-ADV-12` track note

**INSERT AFTER:**

```
| A-12.6 Source independence | `MIN_POPULATION_SOURCES = 5`. **`submitPopulation` is `onlyTimelock`, so every "independent" source value is supplied through one authority. On-chain independence is therefore not enforceable as designed — OPEN-12.** The suite asserts what *is* checkable: source identity is recorded, published, and reproducible from the activation record (`FR-018`) |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ `FR-009`/`FR-016`/`FR-018` are IN-v1 and the threshold arithmetic is the same
> `packages/protocol` code, so A-12.1/2/3/5 apply to both tracks. **OPEN-12 changes shape in v1**:
> the "single authority" is no longer a timelock but the operator, which is strictly weaker. The v1
> form of `FR-009` is a two-source oracle with disagreement tolerance and a dispute window — a lower
> bar than `MIN_POPULATION_SOURCES = 5`. The v1 suite MUST assert the v1 bar **and report it as the
> v1 bar**.
```

## C-51 — `TS-ADV-13` track note

**INSERT AFTER:**

```
| A-13.5 Denylist auditability | The jurisdiction-scoped gateway denylist is signed, published and diffable; a silent addition is detectable |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ A-13.3 is the `NFR-028`/`FR-107` question in another form and **is** testable in v1 —
> see §9 `NFR-028`. In v1 the "no deletion path" claim must be proven at the **store**, not only at
> the service: an `INSERT`-only grant on `membership_event` and a `BEFORE UPDATE` refusal on archived
> rows (Doc 03 §10.13.12). Until the Postgres backing exists, v1's no-deletion claim is a claim about
> one writer. **OPEN-19.**
```

## C-52 — `TS-ADV-14` track note

**INSERT AFTER:**

```
| A-14.4 Officer-filing evidence | The protocol produces the *evidence* a human officer files (candidate-selection record, treasury ledger) and never files anything itself (ADR-013 §1) |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ Fully applicable to v1. `CON-001` is entrenched at Tier 1 (`FR-118`) and
> `FR-075`/`CON-014` require the platform-vs-legal boundary on every surface — both IN-v1. A-14.3's
> second clause ("and the on-chain flag agrees") has no v1 counterpart, because v1 has one flag
> surface; assert the software flag only, and say so.
```

## C-53 — `TS-ADV-15` track note

**INSERT AFTER:**

```
| A-15.3 Kill-criteria instrumentation | The Doc 01 §E2 kill criteria 3 and 4 have live, published metrics with defined denominators (`NFR-019`), with **zero individually identifying fields** |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0.)_ Fully applicable to v1 and arguably **more** so: v1 is the release that finds out
> whether anyone shows up. A-15.3's metrics must be built under the `NFR-027` prohibition —
> aggregate-only, no per-user attribution path — which is exactly the tension `RISK-26` names
> (`TS-ADV-26`, §0.8).
```

## C-54 — `TS-ADV-16` track note (the honest v1 answer)

**INSERT AFTER:**

```
| A-16.8 Key sunset | `renounceProtocolKeys()` is timelocked, published and **irreversible** — assert irreversibility by attempting to re-acquire after renouncement |
```

**INSERT THIS TEXT (blank line, then the block):**

```

> _(v1.1.0 — the honest v1 answer to this suite.)_ **In Definition A, Trumocracy *is* the gatekeeper
> of the application store**, and no test changes that. The operator runs the database, the write
> path and the API. `CON-003`'s "no single trusted operator" is met by the *on-chain core* — which v1
> does not deploy — and is **not** met by the v1 application layer. What v1 can and MUST prove:
> A-16.4 (funder holds nothing), A-16.5 (reproducible builds), A-16.6 (licence), A-16.7 (exit and
> export actually work — the most important of the eight for v1, because the right to leave with your
> history intact is the only structural check on an operator who holds everything else), and the
> code-only governance path with no override in the v1 service (`FR-056`, IN-v1). A-16.1/2/3/8 are v2
> assertions about a core that is not deployed. **A v1 Gate-2 packet that presents `TS-ADV-16` as
> green without this paragraph is misleading, and §0.9 item 21 exists to prevent it.**
```

## C-55 — §9 heading and lead-in: extend the range to `NFR-028`

Closes the §9 half of **ISS-01**.

**FIND:**

```
## 9. NFR verification methods — `NFR-001` … `NFR-026`

Every NFR gets: a method, a measurement instrument, a reference environment, a threshold, and an
owner. The reference device profile is fixed for the whole plan.
```

**REPLACE WITH:**

```
## 9. NFR verification methods — `NFR-001` … `NFR-028`

_(v1.1.0: extended from `NFR-001`…`NFR-026` to the full Approved set of Doc 02 v2.16.3 §6.
**`NFR-027` and `NFR-028` — both Must, both IN-v1 — had no verification method at all in v1.0.x.**
This closes that half of review ISS-01. The v1-specific deltas for the six NFRs whose verification
changes between the tracks are at **§0.7**.)_

Every NFR gets: a method, a measurement instrument, a reference environment, a threshold, and an
owner. The reference device profile is fixed for the whole plan.
```

## C-56 … C-62 — §9 table: v1 notes on nineteen existing rows

Each is a **tail-anchored** replacement. The `FIND:` text is the end of the row (unique in the
file); replace it with the given text. Apply all nineteen.

| # | FIND (end of row — must match exactly) | REPLACE WITH |
|---|---|---|
| C-56a | ``the adversary model is not fully specified — OPEN-13** \| Dr. Lena Kowalczyk \|`` | ``the adversary model is not fully specified — OPEN-13.** _(v1.1.0: PARTIAL in v1 — the battery bounds the API, not the operator; report as the disclosed posture H-01/H-04, never as met. §0.7)_ \| Dr. Lena Kowalczyk \|`` |
| C-56b | ``withheld with a user-visible reason. See OPEN-10 (`OI-05`) \| Dr. Lena Kowalczyk \|`` | ``withheld with a user-visible reason. See OPEN-10 (`OI-05`). _(v1.1.0: PARTIAL in v1 — the aggregate-only publication threshold is testable and MUST be tested; indistinguishability within the set is not achievable while individual-level rows exist, H-06. §0.7)_ \| Dr. Lena Kowalczyk \|`` |
| C-56c | ``**Blocked by OPEN-01: MACI is Phase 3 and off in production** \| Aisha Nkemdirim \|`` | ``**Blocked by OPEN-01: MACI is Phase 3 and off in production.** _(v1.1.0: **DEFERRED-v2**. No v1 method exists and none is proposed; the v1 obligation is the DES-098 disclosure, tested at §0.5 S4. §0.7)_ \| Aisha Nkemdirim \|`` |
| C-57a | ``must be reported as such — OPEN-14* \| Marcus Adeyemi \|`` | ``must be reported as such — OPEN-14.* _(v1.1.0: in v1 the instrument is different again — `subject_id_hash` same-document deduplication at the counting gate closes the same-document vector and leaves the multiple-legitimate-IDs vector open, H-15/H-18.)_ \| Marcus Adeyemi \|`` |
| C-57b | ``must be enumerated before this is measurable — OPEN-15** \| Hiroshi Tanaka \|`` | ``must be enumerated before this is measurable — OPEN-15.** _(v1.1.0: in v1 the only chain cost is the audit-record write; the dominant cost is conventional hosting. The USD 0.00-to-the-citizen half is unchanged and absolute.)_ \| Hiroshi Tanaka \|`` |
| C-57c | ``ADR-012 budget: < 200KB initial JS \| Hiroshi Tanaka \|`` | ``ADR-012 budget: < 200KB initial JS. _(v1.1.0: v1 omits ZK proving latency entirely — the budget is easier to hit and the target does not move.)_ \| Hiroshi Tanaka \|`` |
| C-58a | ``0 privileged administrative overrides in any governance path \| Rafael Duarte \|`` | ``0 privileged administrative overrides in any governance path. _(v1.1.0: the **v1 audit scope excludes ZK circuits and the ceremony** — Doc 02 §16.3.2 — and the Gate-2 packet MUST say so rather than let a green audit imply the v2 scope was covered.)_ \| Rafael Duarte \|`` |
| C-58b | ``0 identity-document, biometric, address, DOB or direct-identifier fields anywhere \| Dr. Lena Kowalczyk \|`` | ``0 identity-document, biometric, address, DOB or direct-identifier fields anywhere. _(v1.1.0: the v1 carve-out is explicit and MUST be encoded in the checker rather than waived by hand — `phone_hash` and `subject_id_hash` are **permitted restricted-class credential fields** under the DES-100 allowlist, completed by `id_verified_flag`, `age_verified`, `issuing_region` and `verified_at`. Anything outside that allowlist fails the build. `CON-015` governs their legal classification.)_ \| Dr. Lena Kowalczyk \|`` |
| C-58c | ``44px minimum touch targets (ADR-012) \| Nadia Hassan \|`` | ``44px minimum touch targets (ADR-012). _(v1.1.0: the DES-098 honesty notice is in scope — it is a blocking, non-dismissable interstitial in front of a ballot, which is the worst possible thing to get wrong for a screen-reader user. DES-081.)_ \| Nadia Hassan \|`` |
| C-59a | ``dates/numbers/names localised \| Nadia Hassan \|`` | ``dates/numbers/names localised. _(v1.1.0: the honesty notice must be translated **and** reviewed by a native speaker for whether it still reads as a warning — a mistranslated disclosure is worse than none.)_ \| Nadia Hassan \|`` |
| C-59b | ``disclosure present in the enrolment flow in all 8 locales \| Sofia Marchetti \|`` | ``disclosure present in the enrolment flow in all 8 locales. _(v1.1.0: **the "no personal data exists" demonstration is narrower in v1** — `phone_hash` and `subject_id_hash` exist. `CON-015` is a **Gate-2 critical-path line item** covering all eight government-ID questions; §0.9 item 16.)_ \| Sofia Marchetti \|`` |
| C-59c | ``notification + cancellation window mandatory on 100% of recoveries \| Amara Diallo \|`` | ``notification + cancellation window mandatory on 100% of recoveries. _(v1.1.0: the v1 adversarial half is `TS-ADV-22`/`TS-ADV-23` — §0.8; both are currently Blocked because `FR-071`/`FR-072` are unbuilt.)_ \| Amara Diallo \|`` |
| C-60a | ``a member can deactivate at any time \| Erik Lindqvist \|`` | ``a member can deactivate at any time. _(v1.1.0: **this is the most load-bearing NFR in the v1 track** — see the `TS-ADV-16` note at §8. In v1 the operator holds everything, so the right to leave with an intact, reconstitutable history is the only structural check that does not depend on the operator's goodwill. It is a **Should** and it is **treated as a Must for v1** at §0.9 item 18; the formal re-prioritisation is routed to the product owner as part of OPEN-22.)_ \| Erik Lindqvist \|`` |
| C-60b | ``every published metric reproducible by the verifier \| Yuki Sato \|`` | ``every published metric reproducible by the verifier. _(v1.1.0: `apps/verifier/` does not exist and is v2-only (DES-097), so the "reproducible by the verifier" half has **no v1 instrument** — OPEN-24. The v1 form is reproducibility from the published audit-record data.)_ \| Yuki Sato \|`` |
| C-60c | ``no mechanism exists in `FeatureFlags.sol`; OPEN-03**, Gate-2 blocker \| Chen Wei \|`` | ``no mechanism exists in `FeatureFlags.sol`; OPEN-03**, Gate-2 blocker. _(v1.1.0: in v1 the flag surface is software-only (`packages/protocol/src/flags.js`), so the open-ballot freeze must be enforced in the v1 service and tested there — the same requirement, a different and easier mechanism, and it is not built.)_ \| Chen Wei \|`` |
| C-61a | ``**n ≥ 200 per launch locale** \| Grace Mbeki \|`` | ``**n ≥ 200 per launch locale**. _(v1.1.0: the v1 study MUST include an **honesty-notice comprehension task** — can a first-time user, unprompted, state that this ballot is not private? A notice that is present and not understood satisfies the letter of `FR-131` and defeats its purpose.)_ \| Grace Mbeki \|`` |
| C-61b | ``every error states cause **and** next action \| Nadia Hassan \|`` | ``every error states cause **and** next action. _(v1.1.0: extended by the §0.5 S5 second denylist — no v1 string may claim a v2 property.)_ \| Nadia Hassan \|`` |
| C-62a | ``0 identity-exposing surfaces; harassment-rate metric published \| Daniel Okonkwo \|`` | ``0 identity-exposing surfaces; harassment-rate metric published monthly within 72h of month close. _(v1.1.0: PARTIAL in v1 — "no individual-level data exists" is **false** (H-14); assert the surface and the metric, disclose the rest. `TS-ADV-25`/`TS-ADV-28` (§0.8) carry the adversarial half. §0.7)_ \| Daniel Okonkwo \|`` |
| C-62b | ``The suite measures and reports the real number \| Chen Wei \|`` | ``The suite measures and reports the real number. _(v1.1.0: the v1 question is different and currently unanswered — the operator **is** the write path; see the `TS-ADV-09` note at §8. Folded into OPEN-22.)_ \| Chen Wei \|`` |

## C-63 — §9: append the `NFR-027` and `NFR-028` rows

This is the load-bearing half of the ISS-01 §9 fix.

**INSERT AFTER:**

```
| **NFR-026** Compatibility (Should) | Pairwise matrix over evergreen mobile browsers ≤ 24 months old × Android 9+ × 8 locales × 3 network profiles | Device lab + CI | 100% of the supported matrix passes primary flows; unsupported combinations show a clear actionable message, never a broken screen | Nadia Hassan |
```

**INSERT THIS TEXT (two new table rows, immediately after, no blank line):**

```
| **NFR-027** Privacy — no behavioural telemetry _(NEW at v1.1.0; Must; IN-v1)_ | (a) **Existing and green today:** `UT-0525` (`services/indexer` — the read model records no reader, no query and no IP anywhere in the state shape) and `UT-0740` (`apps/web` safety surfaces — the client carries no beacon, no analytics global and no tracking attribute). (b) **Build-failing repo-wide scan**, extended to every new surface as it lands: no analytics global, no `sendBeacon`, no fetch to an analytics origin, no tracking attribute, no per-user event name, no dwell/scroll/section-view instrumentation. (c) **Store, log and export inspection** at Gate 2: no table, column, log line or export row keyed to a person, credential, session or device. (d) Aggregate-only substitutes are asserted to exist, so the prohibition does not silently become "no measurement at all" (`NFR-019`, `TD-08`). Extends `TS-DATA`, which today covers `NFR-010` only | CI (a, b — blocking) + Gate-2 inspection (c, d) | 0 per-user behavioural events in any store, log or export; `UT-0525` and `UT-0740` green on **every** release. **Current state, verified 2026-08-31: (a) is green but bounds only the two surfaces those two tests cover; (b) does not exist; (c) has no v2.0 governance surfaces to inspect. The `TS-GOV2` case for `NFR-027` is Blocked. Recorded as OPEN-19.** | Dr. Lena Kowalczyk |
| **NFR-028** Data lifecycle — append-only _(NEW at v1.1.0; Must; IN-v1)_ | (a) **Service layer, green today:** `UT-0523` (indexer keeps manifesto history append-only), `UT-0824` (SDK membership history — leaving is never deletion), `UT-0846` (SDK decision trail is append-only and records the whole deliberation), `UT-0861` (`apps/web` membership history shown active/inactive) — each asserts that a state change **appends** and that the interface exposes no update or delete method. (b) **Interface-absence assertion:** the 22-method `IPartyStore` member set contains no `delete*`, `purge*` or `overwrite*` method, guarded by the `UT-0871` interface-parity test against the app-side shim. (c) **The control the requirement actually names**, at the store: the application role holds an **`INSERT`-only grant** on `membership_event`; a `BEFORE UPDATE` trigger refuses every mutation of a row with `archived_at IS NOT NULL`; and **projection-equals-replay** is asserted on a seeded fixture so a materialised view cannot silently diverge from its log (Doc 03 §10.13.12, DES-097(b)). (d) Audit inspection of every governance-path store at Gate 2. The `FR-085`/`OI-16` pre-nomination confidential-class carve-out is the **only** recorded exception and MUST be asserted as bounded to that class | CI (a, b) + integration against the production store (c) + audit (d) | 0 hard-delete or overwrite paths detectable in any governance-path store. **Current state, verified 2026-08-31: (a) and (b) are real and green; (c) cannot run — the DES-097(b) Postgres backing is unbuilt and the v1 store is the in-memory implementation with `IS_INSECURE_MOCK = true`. The `TS-GOV2` case for `NFR-028` is Blocked. An append-only guarantee asserted only above the store is a guarantee about one writer, not about the data. Recorded as OPEN-19.** | Erik Lindqvist |
```

---

*(Parts E–G continue in `artifacts/architect-2026-08-31T1430-doc04-rework-spec-3.md`.)*
