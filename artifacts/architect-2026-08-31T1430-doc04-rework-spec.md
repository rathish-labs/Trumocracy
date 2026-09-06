# Doc 04 v1.1.0 — apply-verbatim change specification (rework cycle 1)

```
Role:            architect (owning role for Doc 04)
Session:         2026-08-31
Target document: docs/04-test-strategy-master-plan.md  (currently v1.0.2, 1,227 lines)
Trigger:         artifacts/reviews/04-test-strategy-master-plan-v1.0.2-technical-cycle1.md
                 FAIL 46% · 2 Critical / 2 High / 2 Medium / 1 Low · reviewer: engineer (neutral)
Result version:  1.1.0  (two Criticals make a minor bump the floor)
Anchored changes: 78  (C-01 … C-78)
Files written by this session: THIS FILE ONLY. Nothing under docs/ was written or edited.
```

> **Why this file exists.** `Edit` was unavailable to this subagent and `docs/04-test-strategy-master-plan.md`
> is too large to re-emit safely with `Write` — a whole-file write truncates, and truncation of a
> governed document is silent data loss (that is exactly what happened on the first attempt). This
> specification therefore carries the authored rework as anchored edits for the project-manager to
> transcribe. **The document MUST remain one file.** Do not split it.
>
> **How to apply.** Each change gives a `FIND:` block that must match the current file byte-for-byte,
> and a `REPLACE WITH:` block (or `INSERT AFTER:` for pure insertions). Apply in order C-01 → C-78.
> If a `FIND:` block does not match, stop and route back — do not improvise.

---

## 0. Read this before applying

### 0.1 A stray file must be deleted first — `docs/04-test-strategy-master-plan-part2.md`

**Finding — the brief I was given is wrong on one point.** The brief states that
`-part2.md` and `-part3.md` "were never created." **`docs/04-test-strategy-master-plan-part2.md`
exists in the working tree**, 621 lines, headed `Version: 1.1.0`, `Status: In Review`,
`Part: 2 of 3`. `-part3.md` does not exist. Evidence: `Glob docs/04-*` returns exactly two files.

This is a live hazard. A governed-document scanner, a reviewer, or the SubagentStop hook could
read `-part2.md` as a second Doc 04 at a version that does not exist in the real document. It also
cross-references a `-part3.md` that does not exist.

**Required action, project-manager (not mine to do — I write nothing under `docs/`):**
**delete `docs/04-test-strategy-master-plan-part2.md`** after harvesting it, because its authored
content is fully transcribed into this specification (changes C-30 … C-63). Nothing is lost by
deleting it. Do this **before** applying C-01, so no window exists in which two files claim v1.1.0.

### 0.2 What I verified myself, and what I found the review got wrong

Every review finding was re-checked against the actual documents and the actual repository.

| Finding | Verdict | Evidence I checked |
|---|---|---|
| **ISS-01** (Critical) | **Confirmed** | Doc 02 v2.16.3 §11 line 2793: "21 BR · 133 FR minted (131 active + 2 superseded: FR-046, FR-062) · 28 NFR · 15 CON · 27 requirement-level RISK rows in §10 (RISK-01..16 + RISK-22..32; RISK-17..21 live in Doc 13) · 12 TDs." Must FR = **114** (§11 table); Must NFR = **24** (§11 line 2806: NFR-001…007, 009…017, 020…025, 027…028). `NFR-027`/`NFR-028` exist at Doc 02 lines 1253–1254, both Must, both IN-v1 (§16.3.2 lines 3294–3295). Doc 04 §9 stops at NFR-026 and §21 asserts "at v1.0.0". |
| **ISS-02** (Critical) | **Confirmed** | Doc 02 §16 (lines 3070–3325) splits delivery into Definition A / Definition B; §16.3 tallies FR **IN-v1 107 · PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED 2** and NFR **IN-v1 24 · PARTIAL 3 · DEFERRED-v2 1**. Doc 03 v2.11.2 §10.13 (Approved) specifies DES-095…DES-102 for the v1 stack. Doc 06 v2.4.3 is **Approved**. `packages/sdk/src/` holds 16 modules incl. `eligibility.js`, `ballot.js`, `party-creation.js`, `proposals.js`; `apps/web/test/` holds 4 suites; `packages/ui/` holds `PrivacyStatus.tsx` + `tokens.css`. Doc 04 v1.0.2 mentions none of it. |
| **ISS-03** (High) | **Confirmed, and it is worse than reported** | Doc 07 v2.4.4 §2 (lines 431–439): `TS-ADV-01…16` **TC-2600–TC-2752**; `TS-CR1` TC-3300–TC-3345; `TS-GOV2` **TC-3400–TC-3469**; `TS-SCAFFOLD` TC-3470–TC-3488; `TS-PARTY` TC-3489–TC-3516 **+ TC-3541**; `TS-MEMBERSHIP` TC-3517–TC-3540; `TS-PROPOSALS` TC-3542–TC-3563. Doc 04 §14 reserves TC-3400–TC-3499 to `TS-GOV2` alone and reserves nothing above TC-3499. **Additionally — not in the review — Doc 04 §14's `UT-####` reservation has failed completely**: it reserves UT-1000–1999 for contracts, UT-2500–2999 for SDK, UT-3000–3499 for ui/web, while Doc 06 v2.4.3 §3 actually uses contracts UT-0100…UT-0612, SDK UT-0760…UT-0848, ui UT-0750…UT-0758, web UT-0700…UT-0886, indexer UT-0500…UT-0525. Fixed at **C-66**, recorded as **OPEN-26**. |
| **ISS-04** (High) | **Confirmed** | Doc 02 v2.16.3 line 553: `\| Priya Raghunathan \| Product Owner \| Docs 01/02/05; Gate-1 direction \|`. Doc 03 v2.11.2 line 20: `Owner:         Ravi Deshmukh — Principal Architect`. |
| **ISS-05** (Medium) | **Confirmed — `OPEN-17` is closeable** | `packages/contracts/package.json` exists; `packages/contracts/test/` holds `adversarial.test.mjs`, `differential.test.mjs`, `governance.test.mjs`, `lifecycle.test.mjs`, `deployment-safety.test.mjs`, `fixture.mjs`; plus `vitest.config.mjs`, `src/promotion-gate.mjs`, `script/compile.mjs`, `script/deploy.mjs`. Root `package.json` line 28: `"verify": "npm run lint:deps && npm run compile:contracts && npm run typecheck && npm run test"`. Doc 06 v2.4.3 §3 records **95** contract tests of **610** total. |
| **ISS-06** (Low) | **Confirmed — `OPEN-16` is closeable, but the review's own framing is imprecise** | `docs/adr/` holds **ADR-001 … ADR-025** (25 files). The dangling citation is **already gone**: `Grep ADR-017` over `docs/adr/ADR-001-execution-layer.md` returns **no matches**, and `docs/adr/ADR-002-accounts-and-keys.md` line 49 now reads "rate-limited per personhood nullifier (**ADR-014**)". Doc 03 line 668 records "OPEN-16 (stray ADR-017 references) resolved by engineer before this version." So `OPEN-16` closes on *both* halves, not just the ADR count. |
| **ISS-07** (Medium) | **Confirmed** | Doc 02 v2.16.3 line 2810: "**Release shape.** One release at 2027-06-01 (following Gate 2 readiness 2027-05-14)". Doc 04 §16 says 2027-02-15 / 2027-03-01. |

**Nothing in the review was found to be wrong on the merits.** The one correction is to the brief,
not the review (§0.1 above), plus the ISS-03 finding being broader than reported (UT ranges too),
and ISS-06's underlying question already being resolved rather than merely stale.

### 0.3 Two additional defects I found that the review did not

1. **Doc 07 v2.4.4 internal range disagreement.** §2's suite table says `TS-PROPOSALS` = TC-3542–TC-3563
   and `TS-SCAFFOLD` = TC-3470–TC-3488, while §5.6's heading reads "(TC-3542–TC-3561)" and §5.3's
   heading reads "(TC-3470–TC-3487)". Doc 04 §14 reserves the **§2** ranges (the ones the counts
   agree with). Routed to Ji-woo Park as **OPEN-20**. *Doc 07 is the tester's document — not fixed here.*
2. **Doc 06 v2.4.3 §3 `UT-####` overlap.** Line 507 assigns `UT-0841..0857` to **web**
   (party-creation web flow, 27 tests); line 511 assigns `UT-0832..0848` to **sdk**
   (ProposalService, 24 tests). `UT-0841`…`UT-0848` is claimed by both. CLAUDE.md's ID scheme says
   IDs are never reused. Routed to Samuel Oyelaran as **OPEN-26**. *Doc 06 is the engineer's
   document — not fixed here; Doc 04 records the observation and asks for a ruling.*

### 0.4 What is deliberately NOT changed

- **§5.4 `TS-DIFF`, §6 capability-absence, §7 the ZK doctrine, §8's sixteen suites, §10.2's Gate-2
  bar** are the document's strongest material and are the **Definition-B (v2) plan**. They are
  **retained whole**. Nothing is deleted, relaxed, waived or re-scoped. Every change to them is
  additive: a track note saying which release the statement governs.
- **§10.2 is not weakened for v1 convenience.** The v1 bar is a *new, separate, equally strict*
  table at §0.9. Passing §0.9 says nothing about §10.2, and §0.1 rule 2 says so normatively.
- **No coverage is manufactured.** Where a requirement has no viable verification method today,
  the spec says so and mints an open item with a named owner (§0.6, §0.8, §13, OPEN-18…OPEN-26).

---

# PART A — Header

## C-01 — Header block: `Version`, `Owner`, `Source`, `Last updated`, `Changelog`

Closes **ISS-01** (`Source:` re-pin), **ISS-04** (`Owner:`).

**FIND:**

```
Version:       1.0.2
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
Last updated:  2026-08-21
Changelog:     2026-08-21 v1.0.2 — §Z6 ceremony-burden line: replaced "Contributor count
               (≥ 500)" with assurance-based-target wording per ADR-022 (REC-1;
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md). Version bump only —
               no structural change.
```

**REPLACE WITH:**

```
Version:       1.1.0
Status:        In Review
Owner:         Ravi Deshmukh — Principal Architect
               (CLAUDE.md assigns Doc 04 to the architect. Doc 03 v2.11.2 (Approved) names
                Ravi Deshmukh as Principal Architect; Doc 02 v2.16.3 (Approved) §2.7 names
                Priya Raghunathan as Product Owner, accountable for Docs 01/02/05 — not 03/04.
                v1.0.x named Priya Raghunathan as "Principal Architect" and was wrong on both
                counts. Corrected at v1.1.0 per review ISS-04; OPEN-09 re-scoped. Per-suite
                owners below are named individuals drawn from the Doc 02 §2.7 stakeholder table.)
Approvers:     reviewer-qa · Engineering · SRE · Product Owner
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.16.3**, Approved 2026-08-30)
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.3.0**, In Review — OPEN-21)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.11.2**, Approved)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md **v2.4.3**, Approved)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.4.4**, Approved)
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
Last updated:  2026-08-31
Changelog:     2026-08-31 v1.1.0 — **Rework cycle 1 against
               `artifacts/reviews/04-test-strategy-master-plan-v1.0.2-technical-cycle1.md`
               (FAIL 46%; 2 Critical / 2 High / 2 Medium / 1 Low; reviewer: engineer,
               neutral).** Minor bump: two Criticals make a minor bump the floor. This
               document remains ONE file.
               **ISS-01 (Critical) CLOSED** — `Source:` re-pinned from the superseded SRS
               v1.0.0 (61 FR / 26 NFR / 16 RISK / 12 CON) to the Approved SRS v2.16.3
               (133 FR minted, 131 active, 114 Must · 28 NFR, 24 Must · 27 requirement-level
               RISK rows · 15 CON) and Backlog v2.3.0. §1.3 scope, §2.1 objectives, §2.2 risk
               banding, §8 lead-in, §9 (now NFR-001…NFR-028, with full method / instrument /
               threshold / owner rows for **NFR-027** and **NFR-028**), §14 and §21's coverage
               assertion all extended. Suite-level mapping for **FR-074…FR-133** added at
               §0.6; adversarial suites `TS-ADV-22`…`TS-ADV-32` for **RISK-22…RISK-32** added
               at §0.8 with band assignments at §2.2.
               **ISS-02 (Critical) CLOSED** — new **§0**, a Definition-A (v1) test-strategy
               track running parallel to the Definition-B material, which is retained whole,
               unaltered and unweakened. §0.1 states normatively which track governs which
               release, so a Gate-2 packet for v1 cannot be assembled against v2 evidence and
               §10.2 cannot be quietly waived.
               **ISS-03 (High) CLOSED** — §14's `TC`-range table reconciled against Doc 07
               v2.4.4 §2: `TS-ADV-01…16` narrowed to TC-2600–TC-2799 (actual high-water
               TC-2752) and TC-2800–TC-3199 reserved for `TS-ADV-22`…`TS-ADV-32`; `TS-GOV2`
               narrowed to its actual TC-3400–TC-3469; reservations added for `TS-SCAFFOLD`,
               `TS-PARTY` (incl. the out-of-block TC-3541), `TS-MEMBERSHIP` and
               `TS-PROPOSALS`; TC-3564–TC-3699 reserved for the six unminted v1 suites. The
               `UT-####` reservation block, which had also failed, is replaced with the actual
               Doc 06 v2.4.3 allocation (OPEN-26).
               **ISS-04 (High) CLOSED** — `Owner:` corrected to Ravi Deshmukh — Principal
               Architect; §22 Approvals row corrected; `OPEN-09` re-scoped (the ownership half
               closes; the no-named-QA-Lead half stays open and is re-assigned).
               **ISS-05 (Medium) CLOSED** — `OPEN-17` **closed** on verified evidence:
               `packages/contracts/package.json` exists with a `test` script, `test/` holds
               five suites (adversarial · differential · governance · lifecycle ·
               deployment-safety) plus `fixture.mjs`, root `verify` runs
               `lint:deps && compile:contracts && typecheck && test` across workspaces, and
               Doc 06 v2.4.3 (Approved) §3 records 95 passing contract tests of 610 total.
               §1.2, §3, §11.2 and §16 updated to match.
               **ISS-06 (Low) CLOSED** — `OPEN-16` **closed** on verified evidence: `docs/adr/`
               holds ADR-001…ADR-025, and the dangling "ADR-017" sponsorship citation is gone
               — ADR-001 contains no ADR-017 reference at all and ADR-002 now cites ADR-014.
               Doc 03 v2.11.2 records the resolution.
               **ISS-07 (Medium) CLOSED** — §16 re-anchored to Doc 02 v2.16.3 §11 / `CON-007`:
               **Gate-2 readiness 2027-05-14, launch 2027-06-01** (was 2027-02-15 /
               2027-03-01), and split into a Definition-A critical path and a Definition-B
               track that carries no committed date.
               Nine open items minted: **OPEN-18 … OPEN-26**.
               2026-08-21 v1.0.2 — §Z6 ceremony-burden line: replaced "Contributor count
               (≥ 500)" with assurance-based-target wording per ADR-022 (REC-1;
               DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md). Version bump only —
               no structural change.
```

---

# PART B — The new §0 (Definition-A track) and the §1 track note

## C-02 — Replace the currency note; insert §0 before §1

Closes **ISS-02** (Critical) and the FR-121…133 / NFR-027 / NFR-028 / RISK-22…32 halves of
**ISS-01** (Critical).

**FIND:**

```
> **Based on:** ISO/IEC/IEEE 29119 + IEEE 829. **Produced in:** Design (drafted before code).
> **Approved at:** Gate 2 (exit).
> This plan is written against the repository **as it actually exists on 2026-08-09**. Where a
> capability is required but not yet present, it is listed in §7.2 as *required, not yet present*
> with a named owner — never assumed into existence.

---

## 1. Introduction
```

**REPLACE WITH:**

```
> **Based on:** ISO/IEC/IEEE 29119 + IEEE 829. **Produced in:** Design (drafted before code).
> **Approved at:** Gate 2 (exit).
> **Currency (v1.1.0).** **§0** is written against the repository as it actually exists on
> **2026-08-31** and against the Approved Doc 02 v2.16.3 / Doc 03 v2.11.2 / Doc 06 v2.4.3 /
> Doc 07 v2.4.4. **§1–§22** were written against the repository as it existed on **2026-08-09**
> and are the **Definition-B (v2)** plan; where they describe a capability as "not yet created"
> that statement is read as of that date and is corrected in place at §1.2 and §3 where the
> repository has since moved. Where a capability is required but not yet present, it is listed in
> §11.2 as *required, not yet present* with a named owner — never assumed into existence.
> **This document is one file.** It has never been split and MUST NOT be.

---

## 0. Delivery-track governance and the Definition-A (v1) test-strategy track

> **New at v1.1.0.** Closes review finding **ISS-02** (Critical) and the FR-121…FR-133 /
> NFR-027 / NFR-028 / RISK-22…RISK-32 halves of **ISS-01** (Critical).

### 0.1 Two tracks, and which one governs which release

Doc 02 §16 (Approved v2.16.3) splits delivery into two definitions. This plan now has a track for
each. **Neither replaces the other, and neither is partial credit toward the other.**

| Track | What actually ships | Identity backing | Ballot backing | Plan lives in | Governs |
|---|---|---|---|---|---|
| **Definition A — v1** | Conventional Next.js PWA + Postgres; the chain is a public **audit record only** (DES-097). Phone SMS for account creation and open-tier access; government-ID document check gating `FR-123` counting actions only (DES-100). **No ZK proof is verified anywhere.** | `IEligibilityVerifier` conventional backing — DES-095, ADR-024/ADR-025 | `IBallotService` conventional backing — DB `castBallot`, SQL `computeTally`, result hash to the audit contract — DES-096, DES-097 | **§0** | every release up to and including the **2027-06-01 v1 launch** (Doc 02 §11 / `CON-007`) |
| **Definition B — v2** | The same platform **plus** ZK anonymous enrolment, MACI receipt-free ballots, the trusted-setup ceremony, the coordinator committee, on-chain governance execution and the heavy external audits | ZK nullifier via `ICredentialAdapter` → `PersonhoodRegistry` (ADR-016/ADR-017) | MACI encrypted ballot + threshold coordinator; on-chain ZK tally proof (DES-023/024/025) | **§1–§22** | the deferred v2 release. **No committed date exists in Doc 02** — OPEN-22 |

**Normative track rules.**

1. A **Gate-2 packet for a Definition-A release MUST be assembled against §0.9**, not §10.2.
   §10.2 demands circuit evidence (`claims.json` Z2 coverage, `circomspect`), on-chain
   capability-absence snapshots and `TS-DIFF` divergence counts for a system that, per Doc 02
   §16.1.1, does not ship that way at v1. Presenting a v1 release against §10.2 would either block
   a correct release or — worse — invite someone to mark those criteria "N/A" and quietly lose the
   ones that *do* apply.
2. **§10.2 MUST NOT be relaxed, reduced or partially waived for v1 convenience.** It stays whole
   and stays the Definition-B bar. Passing §0.9 says nothing whatsoever about §10.2.
3. Where a §1–§22 statement is expressed against circuits, on-chain registries, MACI or `TS-DIFF`,
   it is a **v2** statement. Where it is expressed against `packages/protocol`, test-data discipline
   (§10.7), flake policy (§10.6), defect severity (§17) or the honest limits of capability-absence
   testing (§6.5), it applies to **both** tracks — §0.3 and §0.9 say which, explicitly, rather than
   leaving it to inference.
4. **A v1 suite MUST NOT be presented as evidence for a Definition-B requirement**, and a v1 surface
   MUST NOT claim a v2 property. §0.5 makes that a mechanical, build-failing test rather than a
   convention.
5. **Standing Musts.** Requirements classified PARTIAL or DEFERRED-v2 in Doc 02 §16.3 remain
   **Must for Definition B**. They are phased, not weakened (Doc 02 §16.5 standing statement). A v1
   Gate-2 packet MUST list them as *deferred with disclosure*, each carrying its Doc 02 §16.4
   honesty-register row (`H-01`…`H-19`) — never as *met*.

### 0.2 Definition-A test items — the repository as it exists on 2026-08-31

Verified by direct inspection on 2026-08-31. This replaces, **for the v1 track only**, the
2026-08-09 inventory at §1.2.

| Item | Location | State on 2026-08-31 | v1 disposition (DES-097) |
|---|---|---|---|
| Pure reference implementation | `packages/protocol/src/` | present; zero runtime dependencies, CI-enforced by `tools/dep-guard`; **150 unit tests** (Doc 06 v2.4.3 §3) | **As-is** — valid and load-bearing in both tracks |
| Conventional SDK seams | `packages/sdk/src/` — 16 modules including `eligibility.js` (DES-095), `ballot.js` (DES-096), `party-creation.js`, `proposals.js`, `identity.js`, `readmodel.js`, `transport.js`, `predict.js` | present; 12 test files under `packages/sdk/test/`; **244 unit tests** | **Adapt** — the v2 swap is seam-local by construction |
| Design system | `packages/ui/src/PrivacyStatus.tsx` (DES-094), `packages/ui/tokens.css` (DES-093) | present + `packages/ui/test/PrivacyStatus.test.tsx`; 14 unit tests | **As-is** — independent of the backing |
| Citizen client | `apps/web/` (Next.js PWA); tests `safety-surfaces`, `party-creation`, `join-membership`, `proposals` | present, 4 test files | **As-is with flags**; the DES-098 honesty notice is a v1 addition |
| Contracts (audit-record subset) | `packages/contracts/` — `package.json`, `vitest.config.mjs`, `test/` (adversarial · differential · governance · lifecycle · deployment-safety · fixture), `script/compile.mjs`, `script/deploy.mjs`, `src/promotion-gate.mjs` | **present and working — 95 passing tests** (Doc 06 v2.4.3, Approved). *This closes `OPEN-17`.* | **Adapt** — v1 deploys only the lightweight audit-record subset |
| Read model | `services/indexer/` | present; 16 unit tests including `UT-0525` (records no reader, query or IP) | **As-is** — a cache, never an authority |
| Test harness | `tools/evm-harness/src/index.mjs` | present, working, offline, deterministic | **As-is** |
| Layering guard | `tools/dep-guard/check.mjs` | present, working, build-failing | **As-is** |
| Circom circuits | `packages/circuits/circuits/` — three `.circom` sources (`personhood_enrol`, `residency_member`, `tenure_member`) + `README.md`; **no `package.json`, no test workspace, no ceremony artifact** | sources only; three of ADR-005's six circuits unwritten | **Untouched for v1** — v1 never calls a circuit |
| Independent verifier | `apps/verifier/` — **does not exist** | absent | **Untouched for v1** — meaningful only for MACI ZK tally proofs. Costs `NFR-019` its stated instrument — OPEN-24 |
| Relayer | `services/relayer/` — **does not exist** | absent | **Adapt (v2)**; v1 sponsorship of audit-record writes is not built |
| Production party store | Postgres backing of `IPartyStore` (DES-097(b), Doc 03 §10.13.12) — **does not exist**; the in-memory implementation returns `IS_INSECURE_MOCK = true` | absent | **Required for v1** — blocks `NFR-028`'s real control and the promotion gate. **OPEN-19** |
| E2E harness | `tests/e2e/` — **does not exist**; no headless driver selected | absent | **Required for v1 level V5** (§0.3) — §11.2, **OPEN-24** |

**Build under test.** Unchanged from §1.2: a single trunk commit, no long-lived branches (ADR-011),
incomplete capabilities dark behind flags. In v1 the flag surface is
`packages/protocol/src/flags.js` **only** — `FeatureFlags.sol` governs the on-chain governance
core, which v1 does not deploy. Every v1 suite therefore runs in at least two **software** flag
configurations.

### 0.3 Definition-A test levels (V0–V6)

Levels are numbered `V#` so they never collide with the Definition-B `L#` levels of §3. Where a
V-level *is* an L-level, that is stated rather than duplicated.

| Level | Scope | Lives in | Runner | Owner | Automated | Gate |
|---|---|---|---|---|---|---|
| **V0 — Pure unit** | `packages/protocol` governance rules, thresholds, state machines, region parsing, flags. **Identical to L0** — the module and its suite are shared by both tracks. | `packages/protocol/test/` | vitest 3.2.4 | Samuel Oyelaran (Engineering Lead) | Yes | pre-commit, pre-merge |
| **V1 — Seam unit** | The conventional seams: `IEligibilityVerifier` (DES-095) call-site placement and property honesty, `IBallotService` (DES-096) cast / change / tally, party creation, membership join / leave / history, proposals and the decision trail. Carries the §0.5 seam-honesty doctrine. | `packages/sdk/test/` | vitest | Samuel Oyelaran | Yes | pre-merge |
| **V2 — Store contract** | The 22-method `IPartyStore` interface (Doc 03 §10.13.12) as a **contract test run against every backing**: the in-memory implementation today, the Postgres backing when it lands. `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, unique partial index on the active-membership projection, and projection-equals-replay on a seeded fixture. | `packages/sdk/test/` + store integration *(Postgres half not yet runnable — **OPEN-19**)* | vitest | Samuel Oyelaran | Yes (in-memory) / not yet (Postgres) | pre-merge |
| **V3 — Component, copy & a11y** | `packages/ui` and `apps/web` components; the DES-098 honesty notice asserted **verbatim** against the SDD copy table; the DES-085 jargon filter; WCAG 2.2 AA component rules; the DES-094 backing-aware four-path test (absent / false / true / malformed). | `packages/ui/test/`, `apps/web/test/` | vitest + jsdom | Nadia Hassan | Yes | pre-merge |
| **V4 — Audit-record contract** | **Strict subset of L1/L2**: only the lightweight audit-record contract v1 actually deploys (petition milestones, tally result hashes, manifesto version hashes, activation events — DES-097), plus the `IS_INSECURE_MOCK` promotion gate. The full on-chain governance core that L1/L2/L3 target is **not deployed in v1** and its suites do not gate a v1 release. | `packages/contracts/test/` | vitest + `tools/evm-harness` | Samuel Oyelaran | Yes | pre-merge |
| **V5 — System / E2E** | Whole v1 citizen journeys against the deployed PWA + Postgres + audit contract: create party → petition → activate → join → propose → discuss → vote → tally → published hash. Includes the honesty notice at the point of the ballot. | `tests/e2e/` — **not yet created** (§11.2) | headless browser driver — **not yet selected** (§11.2) | Ji-woo Park (Test Lead) | Yes | pre-release |
| **V6 — Manual & exploratory** | Usability (`NFR-022`), screen-reader passes (`NFR-011`), locale review (`NFR-013`), plain-language review (`NFR-023`), **honesty-notice comprehension testing** (does a real user understand that this ballot is not private?), red-team, external audits. | Doc 07 + report artifacts | — | Nadia Hassan / Grace Mbeki / Rafael Duarte | No | Gate 2 |

**The two levels v1 does not have, stated rather than glossed.**

- **No `TS-DIFF` analogue.** L3 is the highest-value level in the Definition-B plan because two
  independent implementations of the same rules can be compared. In v1 the governance rules run in
  `packages/protocol` and are consumed by one service; there is no second oracle to differ from.
  `packages/protocol` remains differentially testable against the *audit contract* for the narrow
  set of values that contract stores, and that is worth building — but it is a fraction of the L3
  case space. **Recorded as OPEN-23. This is the single largest assurance difference between the
  two tracks and it is not recoverable by effort.**
- **No L4.** v1 verifies no proof, so there is no circuit to test. §7 in full is a v2 section. The
  v1 replacement is not a weaker circuit doctrine — it is §0.5, which tests that v1 **claims
  nothing a circuit would be needed to justify**.

### 0.4 Definition-A suites and their `TC` ranges

Live suites, as they exist in **Doc 07 v2.4.4 §2** (Approved). Ranges verified against that table
on 2026-08-31 and reserved at §14.

| Suite | `TC` range (Doc 07 v2.4.4 §2) | Cases | Automated | Covers | Level | Owner |
|---|---|---|---|---|---|---|
| `TS-SCAFFOLD` | TC-3470–TC-3488 | 19 | 16 (3 Blocked) | `FR-082`…`086` · `FR-122`…`124` · `FR-131`/`132` · DES-093…096 · DES-100 · ADR-023…025 | V1/V3 | Samuel Oyelaran |
| `TS-PARTY` | TC-3489–TC-3516, **TC-3541** | 29 | 28 (1 No mechanism) | `FR-010`/`011`/`012`/`013`/`018`/`020`/`077`/`130` · `BR-020` · DES-073/074/097/101 | V0/V1/V3 | Ji-woo Park |
| `TS-MEMBERSHIP` | TC-3517–TC-3540 | 24 | 24 | `FR-020`/`022`/`064`/`122`/`123`/`130`/`131(b)(d)` · `NFR-023` · DES-013/065/095/097 | V1/V3 | Ji-woo Park |
| `TS-PROPOSALS` | TC-3542–TC-3563 | 22 | 22 | `FR-024`/`079`/`080`/`090`/`091`/`092` · `FR-122`/`123` · `NFR-003`/`023` · DES-085/095/103…106 | V0/V1/V3 | Ji-woo Park |

> **Note for the tester (recorded, not acted on here — Doc 07 is the tester's document).** Doc 07
> v2.4.4 §2's `TS-PROPOSALS` row reads **TC-3542–TC-3563** while its own §5.6 heading reads
> **TC-3542–TC-3561**; likewise §2's `TS-SCAFFOLD` row reads **TC-3470–TC-3488** while §5.3's
> heading reads **TC-3470–TC-3487**. §14 here reserves the **§2** ranges, because those are the
> ones the suite table and the case counts agree on. Routed to Ji-woo Park as **OPEN-20**.

**v1 capabilities with no suite at all.** Named here rather than left to be discovered at Gate 2.
`TC-3564–TC-3699` is reserved for them at §14; the tester mints the IDs.

| Planned suite | Would cover | Blocked on | Owner |
|---|---|---|---|
| `TS-V1-BALLOT` | `IBallotService` v1 backing (DES-096): `castBallot`, `changeBallot` last-ballot-counts, `computeTally` SQL aggregate **including the §5.4 precision suite against the SQL path**, result-hash publication to the audit contract, `getTallyProperties()` honesty, and the §6.4 negative-authority matrix in its conventional form | ballot layer unbuilt; DES-096 must first gain the ballot-state accessor Doc 03 §10.13.13 records as owed | Aisha Nkemdirim |
| `TS-V1-NOTICE` | `FR-131`/DES-098 honesty notice at **SCR-13** (ballot booth) and **SCR-14** (post-vote confirmation) — non-dismissable, pre-confirmation, WCAG 2.2 AA (DES-081), screen-reader operable, forbidden-vocabulary scan. Doc 07 `TC-3481` is Blocked for exactly these two surfaces; clause (d) is partially delivered at the parties directory (`TC-3534`) | ballot surfaces unbuilt | Nadia Hassan |
| `TS-V1-ID` | `FR-126`/`FR-128`/`FR-132` and DES-100: on-device processing, **verify-and-discard** (allowlist `id_verified_flag`, `age_verified`, `issuing_region`, `subject_id_hash`, `phone_hash`, `verified_at`; everything else discarded), `subject_id_hash` deduplication at the counting gate, vendor no-retention posture | ID-check integration unbuilt; `CON-015` legal opinion outstanding (critical path) | Marcus Adeyemi |
| `TS-V1-SPAM` | `FR-133`/DES-099: VoIP/virtual-number intelligence, velocity and device signals, **flag-don't-block**, a first-class false-positive path, and the scope guard that the spam layer never excludes anyone from platform membership | spam layer unbuilt | Marcus Adeyemi |
| `TS-V1-AUDIT` | `FR-054`/`FR-092`/`FR-108` and DES-097: what the audit contract publishes and — as a capability-absence assertion — what it MUST NOT (no restricted or confidential-class field ever reaches the chain) | audit-record publication unbuilt; Doc 07 `TC-3487` Blocked | Rafael Duarte |
| `TS-V1-ENROL` | `FR-121` pilot-jurisdiction adapter schedule; `FR-125` non-invite fallback always open; `FR-129` attestor-plurality Charter guard | adapters unbuilt; `CON-015` | Marcus Adeyemi |

### 0.5 The seam-honesty doctrine — v1's analogue of §7

§7 exists because an under-constrained circuit passes every positive test. v1 has the mirror
hazard: **a conventional backing passes every positive test while silently claiming a guarantee it
does not provide.** The whole of v1's political safety rests on it never doing that. These six
classes are mandatory for every seam component and every user-facing surface.

**S1 — Property honesty is asserted as an absence, and the assertion is inverted.**
`IEligibilityVerifier.getProperties()` MUST return
`{ onePersonOneVote: false, subpoenaResistant: false, unlinkable: false, anonymityFloor: false }`
and `IBallotService.getTallyProperties()` MUST return
`{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }`
(Doc 03 §10.13.2 / §10.13.3). A test asserting these are **`false`** is a capability-absence test
in the sense of §6: it fails the day someone flips one to `true` without swapping the backing.
That inversion is deliberate and MUST NOT be "fixed" — the day a v1 build reports
`onePersonOneVote: true` is the day the platform starts lying to a citizen about the one thing it
exists to be honest about.

**S2 — Mock / composite / honest-backing tiers (Doc 06 §2.1).** Stubs return `true`
(`StubPhoneVerifier`, `StubIdDocumentChecker` — they accept input without checking, so they lie).
Composites **delegate**: `ConventionalEligibilityVerifier.IS_INSECURE_MOCK()` returns
`this._phoneVerifier.IS_INSECURE_MOCK() || this._idDocumentChecker.IS_INSECURE_MOCK()`, and
`ConventionalBallotService` delegates to its eligibility verifier. The honest conventional backing
returns `false` — it is **not** a mock (Doc 03 §10.13.4). **Every new seam component ships the test
triple**: stub → `true`; real → `false`; composed-with-a-stub → `true`. A composite that returns
`false` while a dependency lies is a **Sev-1** defect (§17): it defeats the promotion gate.

**S3 — The promotion gate is a test, not a policy.**
`packages/contracts/test/deployment-safety.test.mjs` and `packages/contracts/src/promotion-gate.mjs`
block promotion past devnet while `IS_INSECURE_MOCK()` is true anywhere in the wired graph. **The
in-memory `IPartyStore` returns `true` today** (Doc 03 §10.13.12), so v1 cannot promote past devnet
until the DES-097(b) Postgres backing lands. That is the correct behaviour and this plan does not
seek a waiver for it. **OPEN-19.**

**S4 — Disclosure copy is asserted verbatim, not paraphrased.** The DES-098 notice (`FR-131`) MUST
be tested for: presence before confirmation; non-dismissability; WCAG 2.2 AA (DES-081);
screen-reader operability; the required clauses (a)–(e); and a **forbidden-word scan** — the notice
and every v1 voting surface MUST NOT use *private*, *anonymous*, *receipt-free*, *secret* or
*secure* to describe v1 voting behaviour. Clause (d) (the blocked-counting-action disclosure for
open-tier participants, Doc 02 H-19) is tested at **every** surface that can block a counting
action, not only the first one built.

**S5 — No v1 surface may claim a v2 property.** Extends the DES-085 jargon filter with a second
denylist over `apps/web` and `packages/ui` user-facing strings: no v1 string may assert anonymity,
unlinkability, receipt-freeness, coercion resistance, one-person-one-vote, zero-knowledge or "we
cannot see it", except inside a DES-098 notice that is explicitly denying it. **Build-failing.**

**S6 — Call-site census.** `verifyEligibility()` MUST be invoked at exactly the three `FR-123`
counting call sites — strength contribution, binding-ballot admission, candidacy nomination — and
MUST NOT be invoked as a precondition of account creation or party-join (`FR-020`/`FR-122` are
absolute; Doc 03 §10.13.2). This is testable as a repo-wide census of production call sites, and it
is the mechanical form of the guarantee that *verification gates counting, never joining*. Current
state: **exactly two production call sites** (strength contribution and binding vote); the proposal
service holds no verifier — correct; the third (candidacy nomination) is unbuilt.

**What a green seam-honesty suite establishes — and what it does not.** It establishes that v1
**declares** its limits at the seam boundary and in its copy, and that a change which quietly
upgrades a claim fails the build. It establishes **nothing whatsoever** about the underlying
property: `receiptFree: false` asserted a thousand times still means votes are not receipt-free.
The honesty doctrine makes the absence *legible*; only Definition B makes it *absent*.

### 0.6 Definition-A functional coverage — `FR-074` … `FR-133`

Closes the "suite-level mapping" half of ISS-01. Statuses are as recorded in Doc 07 v2.4.4;
**nothing here upgrades a status**.

**`FR-074`…`FR-120` (47 Must FRs).** Covered by `TS-GOV2`, TC-3400–TC-3469, **70 cases — 0
automated, all 70 Blocked or No mechanism** (Doc 07 v2.4.4 §2). Of those, 38 are *No mechanism*
because `FR-074`…`FR-111` have **no `DES` assigned at all** (Doc 03 §16 records this as deliberate
next-increment phasing). This is a design gap upstream of testing. **A suite that cannot run is
coverage on paper.** The honest position for a Gate-2 packet is: these 47 Must FRs have declared
cases and **no passing evidence**. Owner of the unblocking action: **Ravi Deshmukh** (DES first),
then Ji-woo Park (TC statuses). Recorded as **OPEN-18**.

**`FR-121`…`FR-133` (13 Must FRs, added Doc 02 v2.3.0–v2.8.0).**

| FR | Short name | v1 disposition (Doc 02 §16.3.1) | Suite | Status on 2026-08-31 |
|---|---|---|---|---|
| `FR-121` | Pilot jurisdiction & adapter schedule | IN-v1 | **none** → `TS-V1-ENROL` (§0.4) | **No suite.** Blocked on adapters + `CON-015`. Owner Marcus Adeyemi |
| `FR-122` | Open-tier access without verification | IN-v1 | `TS-SCAFFOLD`, `TS-MEMBERSHIP`, `TS-PROPOSALS` | Covered; automated |
| `FR-123` | Verified personhood required for counted actions | PARTIAL | `TS-SCAFFOLD`, `TS-MEMBERSHIP`, `TS-PROPOSALS` | Covered for the two built call sites; candidacy nomination unbuilt (§0.5 S6) |
| `FR-124` | Verified status private to holder; aggregate-only public | PARTIAL | `TS-SCAFFOLD` | Covered at the seam/component layer; the DB-operator exposure is disclosed, not tested away (H-13) |
| `FR-125` | Non-invite fallback always open | IN-v1 | **none** → `TS-V1-ENROL` | **No suite.** Owner Marcus Adeyemi |
| `FR-126` | On-device credential processing; raw credential discarded | PARTIAL | **none** → `TS-V1-ID` | **No suite.** Owner Marcus Adeyemi |
| `FR-127` | Nullifier-collision duplicate detection only | PARTIAL | **none** (`TS-CR1` covers the v2 `FR-069`/`FR-071` form; all 46 cases Blocked) | **No v1 suite.** Owner Marcus Adeyemi |
| `FR-128` | No stored identity; subpoena test | PARTIAL | **none** → `TS-V1-ID` | **No suite.** The subpoena test itself is **not met in v1 by design** (H-04) — the testable v1 half is "no identity documents stored in any form". Owner Dr. Lena Kowalczyk |
| `FR-129` | Attestor-plurality Charter guard | IN-v1 | **none** → `TS-V1-ENROL` | **No suite.** Owner Marcus Adeyemi |
| `FR-130` | Provisional-party membership cap (100) | IN-v1 | `TS-PARTY`, `TS-MEMBERSHIP` | Covered; automated (100/101 boundary) |
| `FR-131` | v1 honesty notice (DES-098) | IN-v1 | `TS-SCAFFOLD` (`TC-3481`), `TS-MEMBERSHIP` (`TC-3534`) | **Partial.** Clause (d) delivered at the parties directory; **Blocked** at SCR-13/SCR-14 — the ballot surfaces, which are the surfaces `FR-131` exists for. Owner Nadia Hassan |
| `FR-132` | v1 two-layer identity verification (DES-095 amended, DES-100) | IN-v1 | `TS-SCAFFOLD` | Partial — the DES-100 allowlist is asserted; the ID-check integration is unbuilt |
| `FR-133` | v1 spam-resistance, flag-don't-block (DES-099) | IN-v1 | **none** → `TS-V1-SPAM` | **No suite.** Owner Marcus Adeyemi |

**Summary, stated plainly for the Gate-2 packet.** Of the 13, **five are covered**, **two are
partial**, and **six have no suite at all**. All 13 are Must. None of the six is a testing omission
that testing alone can close — each is blocked on unbuilt capability or on `CON-015`. **OPEN-18.**

### 0.7 NFR verification in Definition A

Twenty-two of the twenty-eight NFRs use the §9 method unchanged in v1 — the reference device
profile, the instruments and the thresholds do not depend on the backing. **Six differ**, and the
difference is the whole point.

| NFR | Doc 02 §16.3.2 disposition | What the v1 method can and cannot establish |
|---|---|---|
| `NFR-001` Privacy — no linkage | **PARTIAL** | §9's `TS-ADV-06` correlation battery bounds *the platform API*. It cannot bound the DB operator, who can read the member↔party mapping directly. The v1 verdict is therefore **"API does not expose; operator can" — a disclosed posture (H-01/H-04), not a met NFR.** `TS-PRIV` MUST report it that way |
| `NFR-002` Anonymity set k ≥ 1,000 | **PARTIAL** | v1 enforces aggregate-only publication with a k threshold — that half is genuinely testable and MUST be tested. Indistinguishability *within* the set is not achievable while individual-level rows exist (H-06). Report the enforced half; do not report the guarantee |
| `NFR-003` Coercion resistance | **DEFERRED-v2** | **No v1 method exists and none is proposed.** MACI is not in v1. `TS-ADV-02` cannot pass and MUST NOT be run-and-reported as if a fail were a defect — it is a phasing fact. The v1 obligation is the DES-098 disclosure, tested at §0.5 S4. `OPEN-01` is the standing record |
| `NFR-024` Anti-harassment | **PARTIAL** | The surface inspection (no identity-exposing surface) is testable in v1, as is the mechanical harassment-rate metric. "No individual-level data exists" is **false in v1** (H-14) and MUST NOT be claimed |
| `NFR-027` No behavioural telemetry | **IN-v1** | Fully in scope for v1 — method row added at §9. Real instruments exist today (`UT-0525`, `UT-0740`) but bound only the two surfaces they cover |
| `NFR-028` Append-only data lifecycle | **IN-v1** | Fully in scope for v1 — method row added at §9. The service-layer half is real today; the store-layer control the requirement actually names is unbuilt (**OPEN-19**) |

**Rule.** For every PARTIAL or DEFERRED-v2 NFR, the v1 Gate-2 packet MUST carry the Doc 02 §16.4
honesty-register row (`H-01`…`H-19`) **alongside** the measurement, on the same page. A measurement
without its disposition is how a phasing decision turns into a false claim.

### 0.8 Adversarial suites for `RISK-22` … `RISK-32`

Eleven suites, one per risk, on the same contract as §8: a named owner from Doc 02 §10, a
quantitative pass criterion, and — where the suite is expected to fail or cannot yet run — that
stated rather than hidden. **Eight of the eleven attack the conventional v1 surface**, which is
precisely why they belong to the v1 track. `TC-2800–TC-3199` is reserved for them at §14.

| Suite | RISK | L×I | Band (§2.2) | v1 attack surface | Pass criterion | Current evidence | Owner |
|---|---|---|---|---|---|---|---|
| `TS-ADV-22` | `RISK-22` Stolen-credential takeover | 3×5=15 | **A** | **The highest-value v1 adversarial suite.** v1 identity is a phone number plus an ID-check flag in a database. A stolen or SIM-swapped phone *is* the stolen credential; there is no nullifier and no device-bound key to fall back on | Recovery initiated with a stolen credential is defeated by the `FR-072` 7-day delay + active-key veto in ≥ 99.99% of attempts (`NFR-016` ≤ 0.01% fraudulent); a takeover **cannot** silently transfer party membership or an in-flight ballot | Doc 07 `TS-CR1` (TC-3300–TC-3345) cites `RISK-22`…`24`; **all 46 cases Blocked** — `FR-071`/`FR-072` recovery is unbuilt. **No passing evidence exists** | Rafael Duarte |
| `TS-ADV-23` | `RISK-23` Veto suppression | 2×5=10 | **A** | v1's veto notification rides the *same* phone number that was compromised. In v2 the active key is independent of the channel; in v1 it may not be | A recovery veto MUST be exercisable through a path independent of the compromised notification channel; a secondary out-of-band notification is required. **If no independent path exists in the v1 build, this suite fails and the `FR-072` mitigation is fictional for v1** — state it, do not pass it | `TS-CR1`, Blocked | Rafael Duarte |
| `TS-ADV-24` | `RISK-24` Recovery raced against a live ballot | 2×5=10 | **B** | Dual control of a v1 account during a ballot window | Voting barred for a credential in recovery for the whole delay; only the last valid ballot counts; no double-count. Assert against the v1 DB ballot path (DES-096), not the v2 nullifier path | `TS-CR1`, Blocked | Rafael Duarte |
| `TS-ADV-25` | `RISK-25` Public-tier disclosure enables targeting | 3×4=12 | **A** | Worker/Candidate identities are public **by consent** and, in v1, sit in a database alongside activity | 0 surfaces expose contact detail, location below the declared region, or activity pattern beyond the `FR-084` schedule; ballot direction never disclosed (`FR-063`); conduct votes individually private (`FR-103`) at the API | **No test case exists anywhere in Doc 07 v2.4.4** (verified 2026-08-31) | Daniel Okonkwo |
| `TS-ADV-26` | `RISK-26` Analytics prohibition masks funnel failure | 4×2=8 | **D** | Pressure to add "just one" per-user event | The suite is **inverted**: it asserts the prohibition *holds* under product pressure (`NFR-027`, §9) and that the permitted substitutes exist — aggregate dashboards and consenting-panel studies. `TD-08` is the accepted cost | No dedicated case; `TS-GOV2`'s `NFR-027` case is Blocked | Yuki Sato |
| `TS-ADV-27` | `RISK-27` Committee agenda capture (soft power) | 3×3=9 | **B** | A body with no formal power steering outcomes through facilitation | Competing proposals carry **equal standing** and equal presentation (`FR-090` — built, covered by `TS-PROPOSALS`); committee composition and minutes public (`FR-087`); membership expires mechanically with no renewal path (`FR-089`) | `FR-090` covered by `TS-PROPOSALS`; `FR-087`/`FR-089` in `TS-GOV2`, Blocked. **No adversarial case exists** | Tomás Ferreira |
| `TS-ADV-28` | `RISK-28` Conduct/removal votes weaponised for harassment | 3×4=12 | **A** | Coordinated flooding of conduct or removal votes against one member | Affirmative quorum required — **silence never removes** (`FR-104`); statement right mandatory before the window closes; growth-surge defence active; harassment-rate metric published | `TS-GOV2`, Blocked. No adversarial case | Daniel Okonkwo |
| `TS-ADV-29` | `RISK-29` Non-violence clause drags toward content judgment | 2×4=8 | **D** | Scope creep from presence-check to content-check | **Presence and integrity only.** `TS-PARTY`/`TC-3541` is the adversarial amendment case (an amendment MUST NOT strip the clause); assert additionally that **no code path evaluates the political content** of any pillar or proposal | `TC-3541` exists — **No mechanism** (designed at Doc 03 §10.13.10.1, unbuilt) | Sofia Marchetti |
| `TS-ADV-30` | `RISK-30` Trust-anchor governance latency | 2×5=10 | **B** | A compromised anchor mints Sybils during the emergency-variant timelock. **In v1 the "anchor" is the ID-check vendor and the phone rail — a compromised vendor mints counting-tier accounts** | **Quantitative:** credentials mintable inside the published expedited-variant window MUST be < the smallest launch region's activation threshold and < `ABSOLUTE_FLOOR_ENDORSEMENTS` (500). If they are not, the published duration is set wrong and the finding is Sev-1 | `TS-GOV2` (`FR-112`/`FR-113`), Blocked. No v1 vendor-compromise case exists | Rafael Duarte |
| `TS-ADV-31` | `RISK-31` Steward soft-power accretion | 3×4=12 | **B** | Steward proposals treated as canonical | `FR-115` exhaustive powers (an unlisted action is refused); `FR-116` competing proposals equal standing; **`FR-117` zero-dependency proven by the vacancy simulation**; `FR-114` recall + term expiry; `FR-120` fork backstop | `TS-GOV2`, Blocked | Rafael Duarte |
| `TS-ADV-32` | `RISK-32` Steward-body collapse | 3×2=6 | **D** | Funding collapse / mass vacancy | The `FR-117` vacancy simulation runs the full citizen journey with **every** steward seat vacant; **zero citizen-facing degradation** is the pass criterion. Low impact **by design** — the suite exists to prove the design, not to prevent the collapse | `TS-GOV2`, Blocked | Chen Wei |

**Honest headline for the Gate-2 packet.** Of the eleven, **three** (`RISK-22`…`24`) have declared
cases that are all Blocked, **one** (`RISK-29`) has a single designed-and-unbuilt case, and **seven
have no case anywhere**. **Zero of the eleven have passing evidence today.** Minting the cases is
Ji-woo Park's; unblocking most of them requires design (Ravi Deshmukh) and build (Samuel Oyelaran)
first. **OPEN-18.**

### 0.9 Definition-A exit criteria — Gate 2 for a v1 release

The v1 counterpart to §10.2, and **not a relaxation of it**. A Gate-2 packet for the 2027-06-01
release is assembled against **this** table.

| # | Criterion | Evidence |
|---|---|---|
| 1 | **100% of Must FR/NFR that are IN-v1 have a passing test**, and the RTM (Doc 08) shows **zero gaps in those Must rows**. PARTIAL and DEFERRED-v2 rows are recorded as *deferred with disclosure*, each carrying its Doc 02 §16.4 `H-##` row — never as met | Doc 08, verified by reviewer-qa |
| 2 | 0 open Sev-1 / Sev-2 defects (§17 severities apply to both tracks) | defect register |
| 3 | **Seam-honesty suite green (§0.5 S1–S6):** every `getProperties()` / `getTallyProperties()` field asserted `false` where Doc 03 §10.13.2/§10.13.3 says false; the stub / composite / honest triple present for every seam component; the call-site census returns exactly the `FR-123` counting sites and nothing at account creation or party-join | CI |
| 4 | **`IS_INSECURE_MOCK()` returns `false` across the entire wired production graph** and the deployment-safety promotion gate passes **without a waiver**. This is a hard gate: **no v1 release ships on the in-memory store** | `packages/contracts/test/deployment-safety.test.mjs` |
| 5 | **DES-098 honesty notice present, non-dismissable and verbatim** at SCR-13 and SCR-14 and at every blocked-counting-action surface; forbidden-vocabulary scan clean (S4/S5); notice comprehension tested with real users at V6 | CI + V6 report |
| 6 | `NFR-027` green: `UT-0525` and `UT-0740` pass, the repo-wide behavioural-event scan is clean, and store/log/export inspection finds zero per-user events | CI + Gate-2 inspection |
| 7 | `NFR-028` green **at the store, not only at the service**: `INSERT`-only grant on `membership_event`, the `archived_at` `BEFORE UPDATE` refusal, and projection-equals-replay on a seeded fixture | V2 integration against the production store |
| 8 | All eleven `TS-ADV-22`…`TS-ADV-32` suites **executed with a recorded verdict**; **Band A and Band B suites green** — `TS-ADV-22`, `23`, `25`, `28` (A) and `24`, `27`, `30`, `31` (B) | suite reports |
| 9 | `NF-02` independent security audit complete, **0 critical/high open** (`NFR-009`). The v1 audit scope **excludes** ZK circuits and the ceremony (Doc 02 §16.3.2) and the packet MUST say so rather than let a green audit imply the v2 scope was covered | audit report |
| 10 | `NF-01` privacy audit complete, reported **against the v1 posture**: the auditor is asked whether the disclosed limitations are correctly and completely disclosed, **not** whether anonymity holds | audit report |
| 11 | Performance green on the **physical RDP**, not only the CI proxy (`NFR-006`, `NFR-012`) | RDP lab report |
| 12 | Accessibility: 0 Level A/AA failures, automated **and** manual screen-reader passes (`NFR-011`), including the honesty notice | a11y report |
| 13 | Cost measured with real fees for the audit-record writes v1 actually makes (`NFR-005`); citizen charged USD 0.00 in 100% of cases | `NF-04` instrumentation |
| 14 | **Rollback drill proven < 15 min** (`NFR-020`), and the open-ballot flag freeze demonstrated in the v1 service | `NF-07` drill record |
| 15 | Censorship simulation executed (`NFR-014`, ≥ 2 access paths verified against the v1 hosting topology) | `NF-06` |
| 16 | `CON-015` legal opinion **obtained and recorded** for the Phase-1 jurisdiction, covering all eight government-ID questions. **Critical path — no Gate-2 checklist may show the Phase-1 enrolment adapter ready without it** | legal record |
| 17 | Per-jurisdiction legal sign-off obtained (`NFR-015`, `CON-005`) | legal record |
| 18 | `TS-EXIT` reconstitutes a party on an independent deployment (`NFR-018`) — **treated as a Must for v1** (see §9 `NFR-018`) | CI artifact |
| 19 | Reproducible build verified by ≥ 1 independent party (`NFR-021`) | third-party attestation |
| 20 | **Every `OPEN-##` in §13 marked v1-relevant is closed, or explicitly accepted in writing by the Gate-2 approver.** None may be closed by silence | Gate-2 packet |
| 21 | **The honesty register (Doc 02 §16.4, `H-01`…`H-19`) is reproduced in the packet in full**, and the approver signs against it. A v1 launch that does not state what v1 is not is the failure mode this whole track exists to prevent | Gate-2 packet |

### 0.10 What a green Definition-A suite establishes — and what it does not

Stated here so it cannot be overclaimed at Gate 2, in the same form as §5.5.

| Green v1 suite | Establishes | Does **not** establish |
|---|---|---|
| V0 pure unit | the governance rules behave as specified over the tested domain | that any implementation *above* them agrees; that the rules are the right rules |
| V1 seam unit | the seams behave as specified and **declare their limits honestly** | any privacy, anonymity, unlinkability or coercion property. `receiptFree: false` asserted correctly is still `false` |
| V2 store contract | the store honours the interface and, when the Postgres backing exists, that append-only is enforced by grant and trigger | that the operator cannot read the data. **In v1 the operator can read everything** — that is the design, disclosed (H-01…H-14) |
| V3 component & copy | the surfaces render, are accessible, and say exactly what the SDD says they must | that a user *understood* the honesty notice. That is a V6 comprehension study, and it is the one that matters |
| V4 audit-record contract | what the chain publishes, and that it publishes nothing else | anything about the *correctness* of the tally that produced the hash. In v1 the SQL count is the source of truth and the hash only proves that what was counted was published (H-05) |
| V5 E2E | the v1 journeys complete under the tested configurations | behaviour under an adversary with the device, the network, the database or a subpoena |
| §0.5 seam honesty | that v1 claims nothing it cannot do, and that a silent upgrade of a claim fails the build | that the missing guarantees are anywhere close to present |
| **The track as a whole** | that a **transparent** party platform works, end to end, and is honest about being transparent rather than private | **any** of Definition B. v1 is *transparency now, privacy later* (Doc 03 §10.13.5). A green v1 suite is not partial credit toward v2; it is a different exam |

---

## 1. Introduction

> **Track scope (v1.1.0).** §1–§22 are the **Definition-B (v2)** plan and are retained whole,
> unaltered except for the currency corrections marked `_(v1.1.0)_` and the track notes that say
> which release a statement governs. The **Definition-A (v1)** track is **§0**. §0.1 states
> normatively which track governs which release. Where a statement below is expressed against
> circuits, on-chain registries, MACI or `TS-DIFF`, it is a v2 statement and MUST NOT be used to
> gate a v1 release.
```

---

*(Specification continues in the sections below — Part C onward.)*
