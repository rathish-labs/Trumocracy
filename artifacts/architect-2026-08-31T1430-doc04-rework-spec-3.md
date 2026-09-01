# Doc 04 v1.1.0 — apply-verbatim change specification — **file 3 of 3** + session-memory note

> **Continuation of `artifacts/architect-2026-08-31T1430-doc04-rework-spec.md` (file 1: framing,
> verification record, Part A, Part B) and `…-doc04-rework-spec-2.md` (file 2: Parts C and D).**
> This file holds **Part E** (§10 … §22 + Downstream, C-64 … C-78) and the **session-memory note**.
>
> Target: `docs/04-test-strategy-master-plan.md` — **one file, never split.** Apply C-01 → C-78 in
> order. Every `FIND:` must match byte-for-byte.

---

# PART E — §10 … §22 + Downstream

## C-64 — §10.2: state that this is the Definition-B bar and MUST NOT be waived

**FIND:**

```
### 10.2 Exit criteria — release readiness (Gate 2)

| # | Criterion | Evidence |
```

**REPLACE WITH:**

```
### 10.2 Exit criteria — release readiness (Gate 2)

> **Track note _(v1.1.0)_ — read before using this table.** This is the **Definition-B (v2)** Gate-2
> bar. It is retained **whole and unrelaxed**. It MUST NOT be waived, reduced, or marked "N/A" row by
> row to fit a v1 release: several rows demand circuit evidence, on-chain capability-absence
> snapshots and `TS-DIFF` divergence counts for a system that, per Doc 02 §16.1.1, does not ship that
> way at v1. **A Gate-2 packet for the 2027-06-01 Definition-A release is assembled against §0.9
> instead** — an equally strict, separately enumerated table. Passing §0.9 says nothing whatsoever
> about this table. §0.1 rules 1 and 2 are normative.

| # | Criterion | Evidence |
```

## C-65 — §10.5: coverage targets for the v1 surfaces

**FIND:**

```
| SDK (`packages/sdk`) | ≥ 90% line; **100% of the fallback transport ladder** | ADR-014: an escape hatch that has never been exercised does not exist. |
| Client (`packages/ui`, `apps/web`) | ≥ 80% line; **100% of primary flows have an E2E case and an a11y case** | Line coverage is a poor proxy for UI correctness; flow and a11y coverage are the real metric. |
```

**REPLACE WITH:**

```
| SDK (`packages/sdk`) | ≥ 90% line; **100% of the fallback transport ladder**; **_(v1.1.0)_ 100% of the DES-095/DES-096 seam surface, including every `getProperties()` / `getTallyProperties()` field asserted at its Doc 03 §10.13.2/§10.13.3 value** | ADR-014: an escape hatch that has never been exercised does not exist. And a seam whose honesty is not asserted is a seam that can start lying between releases (§0.5 S1). |
| Client (`packages/ui`, `apps/web`) | ≥ 80% line; **100% of primary flows have an E2E case and an a11y case**; **_(v1.1.0)_ 100% of DES-098 honesty-notice surfaces have a verbatim-copy case, a non-dismissability case, an a11y case and a forbidden-vocabulary scan** | Line coverage is a poor proxy for UI correctness; flow and a11y coverage are the real metric. The notice is the one v1 surface where a rendering bug is a political harm, not a defect. |
| **_(v1.1.0)_ `IPartyStore` (22 methods, Doc 03 §10.13.12)** | **100% of interface methods exercised against every backing**, plus the three append-only controls (`INSERT`-only grant, `BEFORE UPDATE` refusal, projection-equals-replay) | The interface is the contract that makes the v2 backing swap a swap rather than a rewrite. An unexercised method is a method the production backing may implement differently. |
```

## C-66 — §11.1: environments in the Definition-A track

**FIND:**

```
**Promotion rule.** A suite that has never run against L2 semantics cannot gate a promotion that
depends on L2 semantics.
```

**REPLACE WITH:**

```
**Definition-A environment note _(v1.1.0)_.** The v1 stack is a conventional PWA + Postgres with a
lightweight audit contract, so the environment ladder collapses: **local → ci → staging (production
topology, synthetic population, real Postgres) → production (flagged)**, with a devnet/testnet leg
used **only** for the audit-record writes. The **promotion gate is not the environment, it is
`IS_INSECURE_MOCK()`**: while any component in the wired graph returns `true`, promotion past devnet
is blocked by `packages/contracts/test/deployment-safety.test.mjs` and no waiver is sought (§0.5 S3).
The in-memory `IPartyStore` returns `true` today, so **v1 cannot presently promote past devnet** —
**OPEN-19**. The `tests/e2e/` harness that level V5 needs does not exist and no driver has been
selected — **OPEN-24**, §11.2.

**Promotion rule.** A suite that has never run against L2 semantics cannot gate a promotion that
depends on L2 semantics.
```

## C-67 — §11.2: close the `packages/contracts` required-tooling row; add the v1 rows

Closes the §11.2 half of **ISS-05**.

**FIND:**

```
| Capability | Constraint it must satisfy | Owner | Basis |
|---|---|---|---|
| `packages/contracts/package.json` + test workspace | root `test:contracts` already references `@trumocracy/contracts`; `dep-guard` already allows it | Engineer (Doc 06) | ADR-011 |
| `storageLayout` in the harness `outputSelection` | one-line change; unblocks §6.3 | Engineer | this plan §6.3 |
```

**REPLACE WITH:**

```
| Capability | Constraint it must satisfy | Owner | Basis |
|---|---|---|---|
| ~~`packages/contracts/package.json` + test workspace~~ | **DELIVERED — v1.1.0.** `package.json`, `vitest.config.mjs` and five test suites are present; 95 tests green (Doc 06 v2.4.3, Approved); root `verify` = `lint:deps && compile:contracts && typecheck && test`. **`OPEN-17` closed.** | — | ADR-011 |
| `storageLayout` in the harness `outputSelection` | one-line change; unblocks §6.3 | Samuel Oyelaran | this plan §6.3 |
| **_(v1.1.0)_ `packages/contracts/test/absence/<Contract>.selectors.json` golden files** | the §6.1 allowlist-snapshot control is *"a human deliberately approved this new selector"*; today the assertion is in-code and there is no reviewable diff. No `.json` exists under `packages/contracts/test/` (verified 2026-08-31) | Samuel Oyelaran | this plan §6.1, **OPEN-25** |
| **_(v1.1.0)_ DES-097(b) Postgres backing of `IPartyStore`** | `NFR-028`'s named controls (`INSERT`-only grant, `BEFORE UPDATE` refusal, projection-equals-replay) cannot be asserted above the store; and `IS_INSECURE_MOCK()` cannot return `false` across the graph without it | Samuel Oyelaran | Doc 03 §10.13.12, **OPEN-19** |
| **_(v1.1.0)_ `tests/e2e/` + a headless driver for level V5** | the v1 citizen journey (create → petition → activate → join → propose → vote → tally → published hash) has no home and no runner; `NFR-019`'s "reproducible by the verifier" half also has no v1 instrument because `apps/verifier/` does not exist | Ji-woo Park (harness), Samuel Oyelaran (driver selection) | §0.3, **OPEN-24** |
| **_(v1.1.0)_ Repo-wide behavioural-event scanner (build-failing)** | `NFR-027`(b); `UT-0525` and `UT-0740` bound only two surfaces and the prohibition must bind every new surface as it lands | Dr. Lena Kowalczyk | §9 `NFR-027`, **OPEN-19** |
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it | Nadia Hassan | DES-085, DES-098 |
```

## C-68 — §12: three residual-risk rows for the v1 track

**INSERT AFTER:**

```
| **Off-chain censorship by gateway, DNS or app store** *as a capability-absence property* | We test that alternative paths exist (`TS-ADV-08`); we cannot assert absence of a capability that lives outside our code | `RISK-08` residual, accepted and disclosed |
```

**INSERT THIS TEXT (three new table rows, immediately after, no blank line):**

```
| **_(v1.1.0)_ Whether the v1 operator reads the database** | v1's member ↔ party mapping and ballot direction live in an operator-controlled Postgres. No test we can write bounds what a person with a database credential can see. `TS-ADV-07`'s first two rows are false in v1 and the suite says so rather than running (§8) | The whole of `NFR-001`/`NFR-002`/`NFR-024`'s "even from the operator" half. Disclosed at Doc 02 H-01…H-14 and at the point of action by DES-098. **This is not mitigated; it is disclosed and deferred to Definition B.** `RISK-25`, `RISK-28` residual |
| **_(v1.1.0)_ Whether a user understood the honesty notice** | We can test that the notice is present, verbatim, non-dismissable, accessible and translated. Whether it *lands* is a comprehension question, answered by a V6 study with real users, not by CI | A notice that is present and not understood satisfies the letter of `FR-131` and defeats its purpose. Instrumented at §9 `NFR-022`; **no automated substitute exists** |
| **_(v1.1.0)_ Two-oracle agreement in v1** | `TS-DIFF` compares two independent implementations. v1 has one. A narrow differential against the audit contract covers only the values that contract stores | v1 governance arithmetic has no independent cross-check. The compensating controls are `packages/protocol`'s 100% branch coverage and the `TS-V1-BALLOT` precision suite against the SQL path — both weaker than L3, and stated as such. **OPEN-23** |
```

## C-69 — §13 lead-in: re-state which items are Gate-2 blocking

**FIND:**

```
These arose from testing the requirements and ADRs against each other and against the code that
exists. Each names the owner who must close it. **`OPEN-01` … `OPEN-06` and `OPEN-11` are Gate-2
blocking as things stand.**
```

**REPLACE WITH:**

```
These arose from testing the requirements and ADRs against each other and against the code that
exists. Each names the owner who must close it.

**Which items block which gate _(v1.1.0)_.**

- **Blocking a Definition-A (v1) Gate 2 (§0.9 item 20):** `OPEN-18`, `OPEN-19`, `OPEN-20`, `OPEN-21`,
  `OPEN-24`, `OPEN-25`, `OPEN-26`, and — as *disclosure* rather than *satisfaction* — `OPEN-01`.
- **Blocking a Definition-B (v2) Gate 2 (§10.2 item 17):** `OPEN-01` … `OPEN-06`, `OPEN-11`,
  `OPEN-23`, plus every item above that is still open at that time.
- **Not gate-blocking, but owed:** `OPEN-07`, `OPEN-08`, `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`,
  `OPEN-22`.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`.
```

## C-70 — §13: re-scope `OPEN-09`, close `OPEN-16` and `OPEN-17`, add `OPEN-18` … `OPEN-26`

Closes **ISS-04** (`OPEN-09`), **ISS-06** (`OPEN-16`), **ISS-05** (`OPEN-17`).

### C-70a — `OPEN-09`

**FIND:**

```
| **OPEN-09** | The roster names no QA Lead; the Doc 04 template expects one. CLAUDE.md assigns Doc 04 to the architect and per-suite owners are named individuals | Ownership is covered, but the named-owner rule for the document itself resolves to the architect. Confirm at Gate 2 | Priya Raghunathan |
```

**REPLACE WITH:**

```
| **OPEN-09** _(re-scoped v1.1.0)_ | **The document-ownership half is CLOSED.** CLAUDE.md assigns Doc 04 to the architect; Doc 03 v2.11.2 (Approved) names **Ravi Deshmukh** as Principal Architect, and the `Owner:` line and §22 Approvals row are corrected accordingly at v1.1.0 (review ISS-04). v1.0.x named Priya Raghunathan as "Principal Architect", which contradicted Doc 02 §2.7 (Product Owner, Docs 01/02/05). **What remains open:** the roster still names no QA Lead, while the Doc 04 template expects one; Doc 07/Doc 08 are owned by **Ji-woo Park — Test Lead**, which is the nearest standing role | Ownership of this document is settled. The QA-Lead-vs-Test-Lead role question is a roster question for the project-manager, not a test-strategy question. Confirm at Gate 2 | Ana-Maria Petrescu (project-manager) |
```

### C-70b — `OPEN-16`

**FIND:**

```
| **OPEN-16** | ADR-002 and ADR-001 both cite **"ADR-017"** for per-nullifier sponsorship rate limiting. Only ADR-001…ADR-014 exist | Dangling reference; the sponsorship policy lives in ADR-014. Fix the citation | Principal Architect |
```

**REPLACE WITH:**

```
| **OPEN-16** — **CLOSED v1.1.0** | Both halves resolve on verified evidence (2026-08-31). (a) `docs/adr/` now holds **ADR-001 … ADR-025**, so the "only ADR-001…ADR-014 exist" premise is superseded — and a real `ADR-017-nullifier-derivation-and-adapters.md` exists, on an unrelated topic. (b) **The dangling citation is already gone:** a full-text search of `ADR-001-execution-layer.md` returns **no `ADR-017` reference at all**, and `ADR-002-accounts-and-keys.md` now reads "rate-limited per personhood nullifier (**ADR-014**)" — the correct home for the sponsorship policy. Doc 03 v2.11.2 records "OPEN-16 (stray ADR-017 references) resolved by engineer before this version" | No action outstanding. Closed on evidence, not on age | — (closed) |
```

### C-70c — `OPEN-17`

**FIND:**

```
| **OPEN-17** | `packages/contracts` has no `package.json` or test workspace, although root `package.json` declares `test:contracts` and `dep-guard` allows `@trumocracy/contracts` | `npm run verify` silently skips all contract tests today | Engineer (Doc 06) |
```

**REPLACE WITH:**

```
| **OPEN-17** — **CLOSED v1.1.0** | Resolved on verified evidence (2026-08-31): `packages/contracts/package.json` and `vitest.config.mjs` exist; `packages/contracts/test/` holds `adversarial.test.mjs`, `differential.test.mjs`, `governance.test.mjs`, `lifecycle.test.mjs`, `deployment-safety.test.mjs` and `fixture.mjs`; `src/promotion-gate.mjs`, `script/compile.mjs` and `script/deploy.mjs` are present; root `package.json` `verify` = `lint:deps && compile:contracts && typecheck && test` across workspaces. Doc 06 v2.4.3 (Approved) §3 records **95 passing contract tests** of 610 total. `npm run verify` no longer skips contract tests | No action outstanding. §1.2, §3, §11.2 and §16 updated to match | — (closed) |
| **OPEN-18** _(new v1.1.0)_ | **The largest coverage gap in the plan, and it is not a testing omission.** `FR-074`…`FR-120` (47 Must) are covered by `TS-GOV2`'s 70 cases, of which **0 are automated and all 70 are Blocked or No mechanism**; 38 are *No mechanism* because `FR-074`…`FR-111` have **no `DES` assigned at all** (Doc 03 §16 deliberate phasing). Of `FR-121`…`FR-133` (13 Must), **six have no suite anywhere**. Of `RISK-22`…`RISK-32` (11), **three have only Blocked cases, one has a single unbuilt case, and seven have no case at all** — zero have passing evidence. §0.6 and §0.8 carry the item-by-item detail | A Gate-2 packet must state that **47 + 6 Must FRs and 11 RISKs have declared cases and no passing evidence**. A suite that cannot run is coverage on paper. The unblocking sequence is design → build → test, in that order | Ravi Deshmukh (DES first), then Samuel Oyelaran (build), then Ji-woo Park (TC statuses) |
| **OPEN-19** _(new v1.1.0)_ | The **DES-097(b) Postgres backing of `IPartyStore` is unbuilt**; the v1 store is the in-memory implementation returning `IS_INSECURE_MOCK = true` (Doc 03 §10.13.12). Consequences: (a) `NFR-028`'s named controls — `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, projection-equals-replay — **cannot be asserted**, so v1's append-only claim is a claim about one writer; (b) the deployment-safety promotion gate correctly **blocks promotion past devnet**; (c) `NFR-027`'s repo-wide behavioural-event scanner does not exist and the two green tests bound only two surfaces | Blocks §0.9 items 4, 6 and 7 — three hard v1 Gate-2 conditions. **No waiver is sought and none should be granted:** the gate is behaving correctly | Samuel Oyelaran |
| **OPEN-20** _(new v1.1.0)_ | Doc 07 v2.4.4 disagrees with itself on two `TC` ranges: §2's suite table says `TS-PROPOSALS` = **TC-3542–TC-3563** and `TS-SCAFFOLD` = **TC-3470–TC-3488**, while §5.6's heading reads TC-3542–TC-3561 and §5.3's heading reads TC-3470–TC-3487 | §14 here reserves the **§2** ranges, because those are the ones the suite table and the case counts agree on. If the headings are authoritative instead, §14 must be re-cut. Doc 07 is the tester's document; this is recorded, not fixed here | Ji-woo Park |
| **OPEN-21** _(new v1.1.0)_ | §1.3's "features not to be tested at v1" list is derived from **Doc 05 v1.0.0** §12 and Doc 05 is now at **v2.3.0 (In Review)**. Separately, `FR-050` has since been raised from Should to **Must** (Doc 02 §11, BR-019) and must not be carried forward as a Should by inheritance | The no-story list must be re-derived at the next backlog version before it is used to justify an RTM row being non-Must | Priya Raghunathan |
| **OPEN-22** _(new v1.1.0)_ | Four related items that belong to the project-manager and product owner, not the architect. (a) **Definition B has no committed date** anywhere in Doc 02 — §16 defines it but §11 commits only to the 2027-06-01 v1 release. (b) §2.2's ~35/30/20/15 **effort re-weighting** was cut against 16 risks and is not re-derived across 27 here, because the budget is Doc 13's (`CON-007`; 18 people; USD 4.2M). (c) `TS-UPG` needs a **seam-swap rehearsal** (Definition A → B behind DES-095/DES-096) before any v2 release; it does not exist. (d) `NFR-018` (party export / exit) is a **Should** but is the only structural check on a v1 operator who holds everything else — §0.9 treats it as a Must for v1 and the formal re-prioritisation is owed. (e) `NFR-025`'s v1 question — can a single operator delay one citizen's action beyond 60 minutes? — is untested and has a worse answer in v1 than in v2 | None of the five is decidable by the architect. Band **membership** (which determines blocking behaviour) *is* decided, at §2.2 | Ana-Maria Petrescu (a, b, c); Priya Raghunathan (d); Chen Wei (e) |
| **OPEN-23** _(new v1.1.0)_ | **Definition A has no `TS-DIFF` analogue.** L3 is the highest-value level in the v2 plan because two independent implementations of the same rules can be compared. In v1 the rules run in `packages/protocol` and are consumed by one service; there is no second oracle. A narrow differential against the audit contract covers only the values that contract stores | **The single largest assurance difference between the two tracks, and it is not recoverable by effort.** The compensating controls are `packages/protocol` at 100% branch coverage and the `TS-V1-BALLOT` precision suite against the SQL `computeTally` path (§5.4, §0.4). Both are weaker than L3 and the Gate-2 packet must say so | Ravi Deshmukh |
| **OPEN-24** _(new v1.1.0)_ | Three absent surfaces, verified 2026-08-31: `tests/e2e/` **does not exist** and no headless driver is selected, so **level V5 has no home and no runner**; `apps/verifier/` **does not exist**, so `NFR-019`'s "every published metric reproducible by the verifier" has **no v1 instrument**; `services/relayer/` does not exist | V5 is a §0.9 precondition for the v1 journey evidence. `NFR-019`'s v1 form must be restated as reproducibility from the published audit-record data, or the NFR's instrument must be built | Ji-woo Park (E2E harness), Samuel Oyelaran (driver + verifier), Yuki Sato (`NFR-019` restatement) |
| **OPEN-25** _(new v1.1.0)_ | §6.1's **checked-in golden files do not exist**: there is no `.json` anywhere under `packages/contracts/test/`, so `test/absence/<Contract>.selectors.json` is unimplemented. The capability-absence *tests* do exist (`adversarial.test.mjs` performs selector and denylist scanning) but the control as specified — *"a human deliberately approved this new selector, and the diff is reviewable"* — is **not in force**; what is in force is an in-code assertion a reviewer must read the test to audit | §6.5 limit 2 already says the control is only as good as its review. Today there is nothing to review. Needed **before the `NF-02` audit freeze**, because the auditor's baseline is the snapshot | Samuel Oyelaran |
| **OPEN-26** _(new v1.1.0)_ | Two `UT-####` register defects, found while reconciling §14. (a) **Doc 04's own `UT` reservation had failed completely** — it reserved UT-1000–1999 for contracts, UT-2500–2999 for SDK and UT-3000–3499 for ui/web, while Doc 06 v2.4.3 §3 actually uses contracts UT-0100…UT-0612, indexer UT-0500…UT-0525, web UT-0700…UT-0886, ui UT-0750…UT-0758, SDK UT-0760…UT-0848. §14 is re-cut at v1.1.0 to record the **actual** allocation rather than a fiction. (b) **Doc 06 v2.4.3 §3 contains an ID overlap:** its table assigns `UT-0841..0857` to **web** (party-creation web flow) and `UT-0832..0848` to **sdk** (ProposalService) — `UT-0841`…`UT-0848` is claimed by both. CLAUDE.md's ID scheme says IDs are never reused | (a) is fixed here. (b) is Doc 06's to rule on — recorded, not fixed, because Doc 06 is the engineer's document. Until it is ruled on, an RTM row citing a `UT` in that band is ambiguous about which package it refers to | Samuel Oyelaran |
```

## C-71 — §14: replace the `TS-FUNC` row's superseded FR count

**FIND:**

```
| `TS-FUNC` | Functional / E2E | L0–L6 | all 61 FRs (positive paths) | TC-0001–TC-0999 | Tester |
```

**REPLACE WITH:**

```
| `TS-FUNC` | Functional / E2E | L0–L6 | positive paths for the active FR set (**131 active FRs, 114 Must** — Doc 02 v2.16.3 §11; the v1.0.x figure "61" was against the superseded SRS v1.0.0) | TC-0001–TC-0999 | Tester |
```

## C-72 — §14: narrow the `TS-ADV-01…16` reservation and add `TS-ADV-22…32`

Closes half of **ISS-03**.

**FIND:**

```
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-3199 | per §8 |
```

**REPLACE WITH:**

```
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752)* | per §8 |
| `TS-ADV-22` … `TS-ADV-32` | **Adversarial, one per RISK** (Definition-A set) | mixed | `RISK-22` … `RISK-32` (**§0.8**) | TC-2800–TC-3199 *(reserved at v1.1.0; none minted yet — OPEN-18)* | per §0.8 |
```

## C-73 — §14: narrow `TS-GOV2`; add the four live v1 suites and the v1 reserve block

Closes the rest of **ISS-03**.

**FIND:**

```
| `TS-GOV2` | v2 governance catch-up | L0–L7 | `FR-074`–`FR-120`, `NFR-027`, `NFR-028`, `SC-15`–`SC-21` closure, Guarded Layer property tests | TC-3400–TC-3499 | Ji-woo Park (tester) |
```

**REPLACE WITH:**

```
| `TS-GOV2` | v2 governance catch-up | L0–L7 | `FR-074`–`FR-120`, `NFR-027`, `NFR-028`, `SC-15`–`SC-21` closure, Guarded Layer property tests | TC-3400–TC-3469 *(narrowed at v1.1.0 from TC-3400–TC-3499 to its actual use in Doc 07 v2.4.4 §2 — it never used TC-3470–TC-3499; 70 cases, all Blocked or No mechanism, OPEN-18)* | Ji-woo Park (tester) |
| `TS-SCAFFOLD` | **Definition-A** — scaffold seam & design-system seed | V1/V3 | `FR-082`–`086`, `FR-122`–`124`, `FR-131`/`132`, DES-093…096, DES-100, ADR-023…025 | TC-3470–TC-3488 *(reserved retroactively at v1.1.0 — in use in Doc 07 since v2.2.1; 19 cases, 16 automated, 3 Blocked)* | Samuel Oyelaran |
| `TS-PARTY` | **Definition-A** — party creation: protocol, service & web | V0/V1/V3 | `FR-010`/`011`/`012`/`013`/`018`/`020`/`077`/`130`, `BR-020`, DES-073/074/097/101 | TC-3489–TC-3516 **and TC-3541** *(reserved retroactively at v1.1.0; the out-of-block TC-3541 is the FR-077 adversarial amendment case minted at Doc 07 v2.3.2 — 29 cases, 28 automated, 1 No mechanism)* | Ji-woo Park |
| `TS-MEMBERSHIP` | **Definition-A** — join / leave / membership history & counting | V1/V3 | `FR-020`/`022`/`064`/`122`/`123`/`130`/`131(b)(d)`, `NFR-023`, DES-013/065/095/097 | TC-3517–TC-3540 *(reserved retroactively at v1.1.0; 24 cases, 24 automated)* | Ji-woo Park |
| `TS-PROPOSALS` | **Definition-A** — proposals & debate: tiers, authorship, lifecycle, trail | V0/V1/V3 | `FR-024`/`079`/`080`/`090`/`091`/`092`, `FR-122`/`123`, `NFR-003`/`023`, DES-085/095/103…106 | TC-3542–TC-3563 *(reserved retroactively at v1.1.0 against Doc 07 §2; §5.6's heading disagrees — OPEN-20. 22 cases, 22 automated)* | Ji-woo Park |
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | TC-3564–TC-3699 *(reserved at v1.1.0; none minted — each is blocked on unbuilt capability or on `CON-015`. OPEN-18)* | per §0.4 |
```

## C-74 — §14: replace the failed `UT-####` reservation with the actual allocation

Closes the second, unreported half of **ISS-03**; mints **OPEN-26**.

**FIND:**

```
**`UT-####` ranges (engineer, Doc 06):** UT-0001–UT-0999 `packages/protocol` (UT-0001…UT-0040 already
in use) · UT-1000–UT-1999 contracts · UT-2000–UT-2499 circuits · UT-2500–UT-2999 SDK ·
UT-3000–UT-3499 ui/web · UT-3500–UT-3999 services.
```

**REPLACE WITH:**

```
**`UT-####` allocation (engineer, Doc 06) — re-cut at v1.1.0.** The v1.0.x reservation
(UT-1000–1999 contracts · UT-2500–2999 SDK · UT-3000–3499 ui/web · UT-3500–3999 services) **failed
in practice exactly as the `TC` table did**: none of those bands is in use. This table records the
**actual** allocation from Doc 06 v2.4.3 §3, verified 2026-08-31, so the reservation describes
reality rather than an intention.

| Band | Package | In use at Doc 06 v2.4.3 | Headroom |
|---|---|---|---|
| UT-0001–UT-0099 | `packages/protocol` | UT-0001…UT-0055 (82 tests), UT-0060…UT-0086 (44), UT-0087…UT-0095 (24) — **150 total** | UT-0096–UT-0099 |
| UT-0100–UT-0499 | `packages/contracts` | UT-0100…0125 (25), UT-0200…0230 (11), UT-0300…0361 + `SEC-*` (34), UT-0400…0420 (12) | the gaps between blocks |
| UT-0500–UT-0599 | `services/indexer` | UT-0500…UT-0525 (16) | UT-0526–UT-0599 |
| UT-0600–UT-0699 | `packages/contracts` (deployment promotion gate) | UT-0600…UT-0612 (13) — **contracts total 95** | UT-0613–UT-0699 |
| UT-0700–UT-0749 | `apps/web` (safety surfaces) | UT-0700…UT-0742 (16) | UT-0743–UT-0749 |
| UT-0750–UT-0759 | `packages/ui` | UT-0750…UT-0758 (14) | UT-0759 |
| UT-0760–UT-0849 | `packages/sdk` | UT-0760…0779 (36), UT-0780…0818 + UT-0831 (38), UT-0819…0830 (22), UT-0832…0848 (24) — **sdk total 244 incl. 124 core** | UT-0849 |
| UT-0850–UT-0899 | `apps/web` (feature flows) | UT-0841…0857, UT-0858…0870, UT-0871, UT-0872…0884, UT-0885…0886 | UT-0887–UT-0899 |
| **UT-0900–UT-1499** | **reserved — next `apps/web` / `packages/sdk` increments** | — | full band |
| **UT-1500–UT-1999** | **reserved — `packages/circuits`** (unwritten; the workspace does not exist) | — | full band |
| **UT-2000–UT-2499** | **reserved — `tests/e2e`** (does not exist — OPEN-24) | — | full band |
| **UT-2500–UT-2999** | **reserved — `services/relayer`, `apps/verifier`** (neither exists) | — | full band |

> **Two register defects recorded here, not fixed here — OPEN-26.** (a) The old reservation was
> fiction and is replaced above. (b) **Doc 06 v2.4.3 §3 assigns `UT-0841..0857` to `apps/web` and
> `UT-0832..0848` to `packages/sdk`** — `UT-0841`…`UT-0848` is claimed by both, and CLAUDE.md's ID
> scheme says an ID is never reused. Until the engineer rules, an RTM row citing a `UT` in that band
> is ambiguous about which package it refers to. Owner: Samuel Oyelaran.
```

## C-75 — §16: re-anchor the schedule to Doc 02 §11

Closes **ISS-07**.

**FIND:**

```
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
```

**REPLACE WITH:**

```
Anchored to `CON-007` and **Doc 02 v2.16.3 §11 "Release shape"**: Gate 1 target **2026-08-22**
(passed), **Gate-2 readiness 2027-05-14**, launch **2027-06-01**, staged 1 → 10 → 50 → 100% in the
one approved pilot jurisdiction. _(v1.1.0 — corrected per review ISS-07; v1.0.x carried
2027-02-15 / 2027-03-01 against a superseded plan.)_

**Definition-A (v1) track — this is the critical path to 2027-06-01.**

| Milestone | Target | Exit signal |
|---|---|---|
| Repo structure + unit-test standard built (Doc 06) | **2026-08-29 — done** | `npm run verify` green across workspaces including a real `packages/contracts` workspace, 95 tests (**`OPEN-17` closed**) |
| `DES` produced for `FR-074`…`FR-111` (Doc 03) | 2026-10-30 | `TS-GOV2`'s 38 *No mechanism* cases become testable (**OPEN-18**) |
| `TS-ABSENCE` golden files checked in | 2026-10-30 | `test/absence/<Contract>.selectors.json` reviewable; the §6.1 control is in force (**OPEN-25**) |
| DES-097(b) Postgres store built; V2 store-contract suite green | 2026-11-27 | `IS_INSECURE_MOCK()` false across the wired graph; `NFR-028`'s store controls in force; promotion past devnet unblocked (**OPEN-19**) |
| v1 ballot layer + DES-098 notice at SCR-13/SCR-14; `TS-V1-BALLOT` and `TS-V1-NOTICE` minted and green | 2027-01-15 | `TC-3481` unblocked; §0.5 S4/S5 forbidden-vocabulary scans clean; the §5.4 precision suite runs against the SQL path |
| **`CON-015` legal opinion obtained** (Phase-1 jurisdiction, all eight government-ID questions) | 2027-01-29 | **Critical path** — `TS-V1-ID` cannot be scoped without it (§0.9 item 16) |
| ID-check + spam layers built; `TS-V1-ID`, `TS-V1-SPAM`, `TS-V1-ENROL`, `TS-V1-AUDIT` green | 2027-02-26 | `FR-121`/`125`/`126`/`128`/`129`/`132`/`133` have passing evidence (**OPEN-18**) |
| `tests/e2e` + V5 driver selected; the v1 journey runs end to end | 2027-03-12 | V5 green on staging (**OPEN-24**) |
| `TS-ADV-22`…`TS-ADV-32` executed once, verdicts recorded | 2027-03-26 | Band A (`22`, `23`, `25`, `28`) and Band B (`24`, `27`, `30`, `31`) green |
| `NF-01` privacy + `NF-02` security audits start (**v1 scope**) | 2027-04-02 | Auditors have a frozen commit and a reproducible build; the packet states that v1 scope excludes ZK circuits and the ceremony |
| RDP performance + accessibility on the release candidate, including the honesty notice | 2027-04-16 | `NFR-006`, `NFR-011`, `NFR-012` green; V6 notice-comprehension study reported |
| Rollback drill + censorship simulation (`NF-06`, `NF-07`) | 2027-04-30 | < 15 min rollback proven; ≥ 2 access paths verified against the v1 hosting topology |
| **Gate-2 packet assembled against §0.9** | 2027-05-07 | Every §0.9 item evidenced; Doc 02 §16.4 honesty register (`H-01`…`H-19`) reproduced **in full**; every v1-relevant `OPEN-##` closed or accepted in writing |
| **Gate-2 readiness** | **2027-05-14** | RTM zero gaps in the IN-v1 Must rows; PARTIAL and DEFERRED-v2 rows recorded as *deferred with disclosure*; audits zero critical/high |
| **Launch, staged 1 → 10 → 50 → 100%** | **2027-06-01** | `TS-SMOKE` green at each stage; SLOs within budget |

**Definition-B (v2) track — does not gate the 2027-06-01 release, and carries no committed date.**

| Milestone | Target | Exit signal |
|---|---|---|
| Circuit toolchain in CI with `circomspect` gating | **no committed date** (**OPEN-22**) | `claims.json` mechanism enforcing Z2 coverage |
| `TS-DIFF` full rule-pair coverage incl. the 2⁵³ precision suite | **no committed date** | Zero divergences on the release commit |
| `TS-ADV-01`…`TS-ADV-16` Band A/B executed once | **no committed date** | Verdicts recorded; `OPEN-01`…`OPEN-06`, `OPEN-11` resolved or escalated |
| Two independent audits per circuit (ADR-005) | **no committed date** | Zero critical/high open |
| `TS-UPG` seam-swap rehearsal (Definition A → B behind DES-095/DES-096) | **no committed date** (**OPEN-22**) | A v1 party migrates to the v2 backing with identical membership, history and tallies |
| **Definition-B Gate 2 against §10.2** | **no committed date** | Doc 02 §11 commits only to the v1 release; the v2 date is Ana-Maria Petrescu's to set (**OPEN-22**) |

Per `CON-007`, **scope absorbs overrun, not the date**. If a Band A or Band B suite is not green, the
correct lever is deferring a v1 capability, never deferring a guardrail suite — and never re-labelling
a Definition-B requirement as met.
```

## C-76 — §18: three new metrics

**INSERT AFTER:**

```
| MTTR for Sev-1 | < 24h | Guardrail breach dwell time |
```

**INSERT THIS TEXT (three new table rows, immediately after, no blank line):**

```
| **_(v1.1.0)_ Seam-honesty assertion count, and property fields asserted `false`** | monotonically rising; **0 fields flipped to `true` without a backing swap** | §0.5 S1. The day a v1 build reports `onePersonOneVote: true` is the day it starts lying. A drop in this count is a Sev-1 signal, not a refactor |
| **_(v1.1.0)_ `IS_INSECURE_MOCK()` true-count across the wired production graph** | **0 before any promotion past devnet** | §0.5 S3. This is a single number that answers "is the thing we are about to ship honest about what it checks?" |
| **_(v1.1.0)_ Must rows with declared cases but no passing evidence** | falling every sprint; **0 at Gate 2 for IN-v1 Musts** | OPEN-18. Today this is 47 + 6 FRs and 11 RISKs. Reporting *cases declared* without this denominator is how coverage-on-paper is mistaken for coverage |
```

## C-77 — §19: two new risks to the test effort

**INSERT AFTER:**

```
| Test data discipline erodes under deadline pressure | The three CI scanners (§10.7 item 5) are build-failing and have no bypass. Removing them requires an ADR |
```

**INSERT THIS TEXT (two new table rows, immediately after, no blank line):**

```
| **_(v1.1.0)_ A v1 suite is presented as evidence for a Definition-B requirement** | The failure mode this whole track exists to prevent, and it is a *reporting* failure rather than a testing one. Controls: §0.1 rules 1–5; the requirement that §0.9 (not §10.2) governs a v1 packet; §0.9 item 21 (the honesty register reproduced in full, signed against); and the §8 track notes that say, per suite, which release a verdict belongs to. If a Gate-2 packet ever shows a green `TS-ADV-07` or `TS-ADV-16` for a v1 release without the accompanying paragraph, the control has failed |
| **_(v1.1.0)_ Pressure to waive the `IS_INSECURE_MOCK` promotion gate to hit 2027-06-01** | The gate is currently **blocking correctly** — the in-memory store returns `true` (OPEN-19). The temptation at 2027-04 will be to waive it "just for staging". §0.9 item 4 makes it a hard gate with no waiver, and `CON-007` says scope absorbs overrun, not the date. The correct lever is deferring a v1 capability, never shipping on a store that declares itself insecure |
```

## C-78 — §20, §21, §22 and the Downstream note

Four edits, applied in order.

### C-78a — §20 Deliverables

**FIND:**

```
6. Adversarial suite verdict reports, one per `RISK-01`…`RISK-16`.
```

**REPLACE WITH:**

```
6. Adversarial suite verdict reports, one per `RISK-01`…`RISK-16` **and, for the Definition-A track,
   one per `RISK-22`…`RISK-32` (§0.8)**.
6a. _(v1.1.0)_ **Seam-honesty evidence pack (§0.5 S1–S6):** the property-honesty assertions, the
   stub/composite/honest triple per seam component, the `IS_INSECURE_MOCK` graph report, the
   verbatim DES-098 copy assertions, the forbidden-vocabulary scan output, and the
   `verifyEligibility()` call-site census.
6b. _(v1.1.0)_ **The Doc 02 §16.4 honesty register (`H-01`…`H-19`), reproduced in full** in the v1
   Gate-2 packet, signed against by the approver (§0.9 item 21).
```

### C-78b — §21 Traceability: replace the coverage assertion

Closes the §21 half of **ISS-01**.

**FIND:**

```
**Coverage assertion at v1.0.0 of this plan:**

- **All 61 FRs** have a named suite. Must FRs (42) are covered by `TS-FUNC` + `TS-EDGE` and, where
  the FR is a guardrail, additionally by `TS-ABSENCE` and/or a `TS-ADV-*` suite.
- **All 26 NFRs** have a verification method, instrument, environment, threshold and owner (§9).
- **All 16 RISKs** have exactly one dedicated adversarial suite (§8), each with a named owner and a
  quantitative pass criterion.
```

**REPLACE WITH:**

```
**Coverage assertion at v1.1.0 of this plan, against the Approved SRS v2.16.3.** _(The v1.0.x
assertion was made "at v1.0.0" against SRS v1.0.0 — 61 FR / 26 NFR / 16 RISK / 12 CON — and is
superseded per review ISS-01. This assertion distinguishes **a suite exists** from **passing evidence
exists**, because conflating the two is how coverage-on-paper reaches a gate.)_

- **All 131 active FRs have a named suite.** `FR-001`…`FR-061` by `TS-FUNC` + `TS-EDGE` and, where
  the FR is a guardrail, additionally by `TS-ABSENCE` and/or a `TS-ADV-*` suite; `FR-062`…`FR-073` by
  `TS-CR1`; `FR-074`…`FR-120` by `TS-GOV2`; `FR-121`…`FR-133` by the Definition-A suites mapped
  item-by-item at **§0.6**. `FR-046` and `FR-062` are superseded and excluded.
  **Honest qualifier — this is a suite assertion, not an evidence assertion.** `TS-GOV2`'s 70 cases
  are **all Blocked or No mechanism** and six of `FR-121`…`FR-133` have **no suite at all**. See
  **OPEN-18**; §0.6 carries the detail.
- **All 28 NFRs have a verification method, instrument, environment, threshold and owner (§9)** —
  extended at v1.1.0 from `NFR-001`…`NFR-026` to include **`NFR-027`** (no per-user behavioural
  telemetry) and **`NFR-028`** (append-only data lifecycle), both Must, both IN-v1, both previously
  absent. The six NFRs whose verification differs between tracks are enumerated at **§0.7**, each
  carrying its Doc 02 §16.4 `H-##` row.
- **All 27 requirement-level RISKs have exactly one dedicated adversarial suite**, each with a named
  owner and a quantitative pass criterion: `RISK-01`…`RISK-16` at **§8**, `RISK-22`…`RISK-32` at
  **§0.8**, with band assignments for both sets at §2.2. `RISK-17`…`RISK-21` live in Doc 13 §6 and
  are the project-manager's register, not this plan's.
  **Honest qualifier:** **zero of the eleven new suites have passing evidence today** — three have
  only Blocked cases, one has a single unbuilt case, seven have no case anywhere. **OPEN-18.**
```

### C-78c — §21: extend the CON list and close out the `DES` deferral

**FIND:**

```
- **All 12 CONs** are covered: `CON-001` → `TS-ADV-14`; `CON-002` → §10.7 + `TS-DATA`; `CON-003` →
  `TS-ABSENCE` + `TS-ADV-16`; `CON-004` → `TS-ADV-16/A-16.6`; `CON-005` → `TS-ADV-14/A-14.3`;
  `CON-006` → `TS-ADV-03/A-03.2`; `CON-007` → §16; `CON-008` → `TS-DATA`; `CON-009` →
  `TS-ADV-12`; `CON-010` → `TS-ADV-08`; `CON-011` → `TS-PERF` (RDP); `CON-012` → `TS-ZK` §7.4 +
  `NF-02`.
- `DES-###` links: **pending Doc 03.** The ADRs already name `DES-036` (region quorum-freeze),
  `DES-041` (force-inclusion fallback in the SDK), `DES-052` (client refuses unregistered
  `zkeyHash`) and `DES-063` (panic re-vote); those four are referenced directly. The tester
  reconciles the complete `DES` mapping in Doc 08 once Doc 03 lands.
```

**REPLACE WITH:**

```
- **All 15 CONs** are covered: `CON-001` → `TS-ADV-14`; `CON-002` → §10.7 + `TS-DATA`; `CON-003` →
  `TS-ABSENCE` + `TS-ADV-16` (**and its honest v1 answer at the §8 `TS-ADV-16` track note**);
  `CON-004` → `TS-ADV-16/A-16.6`; `CON-005` → `TS-ADV-14/A-14.3`; `CON-006` → `TS-ADV-03/A-03.2`;
  `CON-007` → §16; `CON-008` → `TS-DATA`; `CON-009` → `TS-ADV-12`; `CON-010` → `TS-ADV-08`;
  `CON-011` → `TS-PERF` (RDP); `CON-012` → `TS-ZK` §7.4 + `NF-02`; **_(v1.1.0)_ `CON-013` → §0.5 S4
  and the `NFR-023` jargon scan; `CON-014` → `TS-ADV-14/A-14.2` (the platform-vs-legal boundary on
  every surface, `FR-075`); `CON-015` → `TS-V1-ID` scope plus §0.9 item 16, which makes the legal
  opinion a Gate-2 critical-path line item rather than a test.**
- `DES-###` links: **Doc 03 is now Approved at v2.11.2** _(v1.1.0 — the v1.0.x "pending Doc 03" is
  superseded)_. This plan references directly: `DES-036` (region quorum-freeze), `DES-041`
  (force-inclusion fallback in the SDK), `DES-052` (client refuses an unregistered `zkeyHash`),
  `DES-063` (panic re-vote), and — for the Definition-A track — **`DES-093`** (design tokens),
  **`DES-094`** (privacy-status component), **`DES-095`** (`IEligibilityVerifier` seam),
  **`DES-096`** (`IBallotService` seam), **`DES-097`** and **`DES-097(b)`** (v1 stack and the
  `IPartyStore` → Postgres wiring), **`DES-098`** (honesty notice), **`DES-099`** (spam-resistance
  layer), **`DES-100`** (ID-document verification and retention), **`DES-101`** (non-violence clause
  gate), **`DES-102`** (provisional-party cap) and **`DES-103`…`DES-106`** (proposals & debate). The
  tester reconciles the complete `DES` mapping in Doc 08. **`FR-074`…`FR-111` have no `DES` at all**
  (Doc 03 §16 deliberate phasing) and therefore cannot be traced down — **OPEN-18**.
```

### C-78d — §22 Approvals: correct the author row

Closes the §22 half of **ISS-04**.

**FIND:**

```
| Architect (Accountable, author) | Priya Raghunathan | Submitted for review | 2026-08-09 | v1.0.0, Status: In Review |
```

**REPLACE WITH:**

```
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-08-31 | **v1.1.0, Status: In Review.** Rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L). ISS-01…ISS-07 all addressed. _(v1.0.0 was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected here per ISS-04, `OPEN-09` re-scoped.)_ |
```

### C-78e — Downstream note

**FIND:**

```
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure are built at the start of Coding in
**Doc 06**, before any feature code — including `packages/contracts`'s missing test workspace
(`OPEN-17`) and the harness `storageLayout` extension that `TS-ABSENCE` depends on.
```

**REPLACE WITH:**

```
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure were built at the start of Coding in
**Doc 06** (Approved v2.4.3), before feature code — `packages/contracts`'s test workspace is now real
and **`OPEN-17` is closed**.

_(v1.1.0.)_ What Doc 06 and Doc 07 still owe this plan: the harness `storageLayout` extension that
§6.3 depends on; the `TS-ABSENCE` golden files that §6.1 specifies and that do not exist
(**OPEN-25**); the DES-097(b) Postgres backing without which `NFR-028`'s named controls cannot be
asserted and the promotion gate cannot pass (**OPEN-19**); the `tests/e2e` harness and driver that
level V5 needs (**OPEN-24**); and `TC` mints for the six Definition-A suites reserved at
TC-3564–TC-3699 and the eleven adversarial suites reserved at TC-2800–TC-3199 (**OPEN-18**).

**Two documents carry an item back from this rework.** Doc 07 v2.4.4's §2-vs-§5.3/§5.6 range
disagreement is **OPEN-20** (Ji-woo Park). Doc 06 v2.4.3 §3's `UT-0841`…`UT-0848` overlap between
`apps/web` and `packages/sdk` is **OPEN-26** (Samuel Oyelaran). Neither is fixed here — each is the
owning role's to rule on.
```

---

# Session-memory note — architect, 2026-08-31

> This note is the memory-protocol record for the session. It is **not registered in
> `artifacts/memory-index.json` by me** — the index is 367 KB / 5,858 lines and cannot be rewritten
> with `Write` without destroying 175 other roles' entries. **Registration is owed to the
> project-manager**, and should cover all three spec files as one logical artifact.

## What I did

Reworked **Doc 04 (Test Strategy & Master Test Plan)** from v1.0.2 to **v1.1.0** in response to
`artifacts/reviews/04-test-strategy-master-plan-v1.0.2-technical-cycle1.md` (FAIL, 46%,
2 Critical / 2 High / 2 Medium / 1 Low; reviewer: engineer, neutral, PM-assigned).

Because `Edit` was unavailable and a whole-file `Write` would truncate a 1,227-line governed
document, the rework is delivered as an **apply-verbatim change specification of 78 anchored
changes** across three artifact files rather than as a direct edit:

- `artifacts/architect-2026-08-31T1430-doc04-rework-spec.md` — framing, verification record,
  Part A (header, C-01), Part B (the new §0 Definition-A track and the §1 track note, C-02).
- `artifacts/architect-2026-08-31T1430-doc04-rework-spec-2.md` — Part C (§1–§5, C-03…C-29),
  Part D (§6–§9, C-30…C-63).
- `artifacts/architect-2026-08-31T1430-doc04-rework-spec-3.md` — Part E (§10–§22 + Downstream,
  C-64…C-78) and this note.

**I wrote nothing under `docs/`.** I read Doc 02 v2.16.3, Doc 03 v2.11.2, Doc 05 v2.3.0,
Doc 06 v2.4.3, Doc 07 v2.4.4, Doc 08 v2.7.0, the ADR set, and the repository itself, and verified
every claim in the brief and in the review against them before writing a line of the spec.

## Decisions made

1. **Both tracks, neither weakened.** The Definition-B (v2) material — §5.4 `TS-DIFF`, §6
   capability-absence, §7 the ZK doctrine, §8's sixteen suites, §10.2's Gate-2 bar — is retained
   whole. The Definition-A (v1) track is a **new §0** with its own levels (V0–V6), its own doctrine
   (§0.5 seam honesty, the mirror of §7), its own adversarial suites (§0.8, `TS-ADV-22`…`32`), and
   its own exit criteria (§0.9). §0.1 makes it normative which track governs which release, so a v1
   packet cannot be assembled against §10.2 and §10.2 cannot be quietly waived row by row.
2. **§0.5 is the v1 analogue of §7, and it is inverted on purpose.** §7 exists because an
   under-constrained circuit passes every positive test. v1's mirror hazard is a conventional
   backing that passes every positive test while claiming a guarantee it lacks. So the v1 doctrine
   asserts `getProperties()` fields are **`false`** — a test that fails the day someone flips one to
   `true` without swapping the backing. That inversion must never be "fixed".
3. **Suite existence and passing evidence are reported separately.** §21's coverage assertion now
   states both, with the honest qualifier that `TS-GOV2`'s 70 cases are all Blocked or No mechanism,
   six of `FR-121`…`FR-133` have no suite, and **zero of the eleven new adversarial suites have
   passing evidence**. Conflating the two is how coverage-on-paper reaches a gate.
4. **No coverage was manufactured.** Every requirement without a viable verification method today is
   named, with a named owner, in §0.6, §0.8 and §13 — not papered over.
5. **Effort re-weighting was deliberately NOT invented.** §2.2's ~35/30/20/15 split was cut against
   16 risks. Band **membership** across all 27 is decided here (it determines blocking behaviour);
   the effort budget is Doc 13's and re-cutting it is the project-manager's call — **OPEN-22**.
6. **The `UT-####` reservation was re-cut to reality.** Doc 04's UT bands were fiction; §14 now
   records the actual Doc 06 v2.4.3 allocation.

## Findings I judged, with evidence

- **The brief is wrong on one point.** `docs/04-test-strategy-master-plan-part2.md` **exists**
  (621 lines, `Version: 1.1.0`, `Part: 2 of 3`). Only `-part3.md` was never created. It must be
  **deleted by the project-manager** before C-01 is applied; all of its authored content is
  transcribed into C-30…C-63.
- **ISS-03 is broader than reported:** Doc 04's `UT-####` reservation had failed as completely as the
  `TC` reservation. Fixed at C-74, recorded as **OPEN-26**.
- **ISS-06's underlying question is already resolved,** not merely stale: `ADR-001` contains no
  `ADR-017` reference at all and `ADR-002` now cites `ADR-014`. `OPEN-16` closes on both halves.
- **Two defects in other roles' documents,** recorded and routed, not fixed: Doc 07 v2.4.4's
  §2-vs-§5.3/§5.6 range disagreement (**OPEN-20**, Ji-woo Park), and Doc 06 v2.4.3 §3's
  `UT-0841`…`UT-0848` overlap between `apps/web` and `packages/sdk` (**OPEN-26**, Samuel Oyelaran).
- **Nothing in the review was found to be wrong on the merits.**

## Open items

**Owed by the project-manager before this rework is complete:**

1. Delete `docs/04-test-strategy-master-plan-part2.md`.
2. Apply C-01 → C-78 to `docs/04-test-strategy-master-plan.md`, keeping it **one file**.
3. Register this note (all three spec files) in `artifacts/memory-index.json`.
4. Route Doc 04 v1.1.0 to a **neutral** reviewer for cycle 2 of 5. **I did not write or edit any
   review report.**

**Minted in Doc 04 §13 by this rework:** `OPEN-18` (Ravi Deshmukh → Samuel Oyelaran → Ji-woo Park),
`OPEN-19` (Samuel Oyelaran), `OPEN-20` (Ji-woo Park), `OPEN-21` (Priya Raghunathan), `OPEN-22`
(Ana-Maria Petrescu / Priya Raghunathan / Chen Wei), `OPEN-23` (Ravi Deshmukh), `OPEN-24` (Ji-woo
Park / Samuel Oyelaran / Yuki Sato), `OPEN-25` (Samuel Oyelaran), `OPEN-26` (Samuel Oyelaran).

**Closed:** `OPEN-16`, `OPEN-17`. **Re-scoped:** `OPEN-09`.

## IDs touched

- **Document:** Doc 04 (MTP-TRUMOCRACY) v1.0.2 → **v1.1.0**, Status `In Review`.
- **Requirements referenced (not authored):** `FR-001`…`FR-133`; `NFR-001`…`NFR-028`, with new
  verification methods authored for **`NFR-027`** and **`NFR-028`**; `RISK-01`…`RISK-16`,
  `RISK-22`…`RISK-32`; `CON-001`…`CON-015`; `BR-003`, `BR-006`, `BR-009`, `BR-011`, `BR-017`,
  `BR-019`, `BR-020`.
- **Design elements referenced:** `DES-036`, `DES-041`, `DES-052`, `DES-063`, `DES-065`, `DES-073`,
  `DES-074`, `DES-081`, `DES-085`, `DES-093`…`DES-106` (incl. `DES-097(b)`).
- **ADRs referenced:** `ADR-001`…`ADR-025`.
- **Suites defined or reserved:** existing `TS-*` set unchanged; **new** — `TS-ADV-22`…`TS-ADV-32`
  (TC-2800–TC-3199), `TS-V1-BALLOT`, `TS-V1-NOTICE`, `TS-V1-ID`, `TS-V1-SPAM`, `TS-V1-AUDIT`,
  `TS-V1-ENROL` (TC-3564–TC-3699); **retroactively reserved** — `TS-SCAFFOLD` (TC-3470–3488),
  `TS-PARTY` (TC-3489–3516 + TC-3541), `TS-MEMBERSHIP` (TC-3517–3540), `TS-PROPOSALS`
  (TC-3542–3563); **narrowed** — `TS-ADV-01…16` (→ TC-2600–2799), `TS-GOV2` (→ TC-3400–3469).
- **Levels defined:** `V0`…`V6` (Definition-A), alongside the unchanged `L0`…`L7` (Definition-B).
- **Open items:** `OPEN-09` re-scoped; `OPEN-16`, `OPEN-17` closed; `OPEN-18`…`OPEN-26` minted.
- **Unit tests cited as evidence (not authored):** `UT-0523`, `UT-0525`, `UT-0740`, `UT-0818`,
  `UT-0824`, `UT-0846`, `UT-0861`, `UT-0871`.
