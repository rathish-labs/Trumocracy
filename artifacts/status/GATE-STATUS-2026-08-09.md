# Gate status — Trumocracy, 2026-08-09

```
Prepared by:   project pipeline (VEKTOR SOP run end-to-end)
Status:        GATE 1 APPROVED 2026-08-09 by Rathish against Doc 02 v1.0.0 —
               re-affirmation pending at v1.1.0 (change request inbound).
               GATE 2 OPEN — not yet ready.
Audience:      the human approver
```

> **Read this first.** Gate 1 was approved by **Rathish** on **2026-08-09** against Doc 02
> v1.0.0. The full decision record is at
> `artifacts/status/GATE1-DECISION-2026-08-09.md`. **A nine-requirement change request arrives
> next session**; the approval is bound to v1.0.0 and must be re-affirmed at v1.1.0 before
> work under those changed requirements can proceed.
>
> Gate 2 **has not been approved.** The system is not launch-ready: the RTM (Doc 08) has 54
> open Must rows, rollback has not been drilled, audits have not started, and circuits are
> uncompiled. Both of these states are the correct states for the current phase of the project
> — one gate is now behind us; the other sits at MS-13 (2027-05-14).
>
> Everything produced between the gate points is, by VEKTOR's own design, reversible: trunk
> based, shipped dark behind flags, staged rollout, instant rollback. Nothing irreversible has
> been done. No contract has been deployed to any network. No ceremony has been run.

---

## Gate 1 — Direction approved

**What it approves:** the PR-FAQ (Doc 01) and the requirements (Doc 02). Nothing should be
designed until it clears.

**APPROVED 2026-08-09 by Rathish against Doc 02 v1.0.0.**
Full decision record: `artifacts/status/GATE1-DECISION-2026-08-09.md`.
Re-affirmation required at Doc 02 v1.1.0 (nine-requirement change request inbound next session).

**Deviation to record honestly:** design *was* produced before this gate cleared. The ADRs are
dated 2026-08-08 and the SDD 2026-08-09, both ahead of any Gate-1 decision. This was a direct
consequence of the "build end to end" instruction and is recorded here rather than
back-dated or hidden. If the approver rejects the direction, the design and code produced
under it are sunk cost — that is precisely the cost the gate exists to avoid, and it was
knowingly incurred on instruction.

**Ready:** Docs 01, 02, 05, 13 at v1.0.0. 12 BR · 61 FR (42 Must) · 26 NFR (22 Must) ·
12 CON · 16 RISK, each with a named individual owner. 10 epics, 28 features, 70 stories with
Gherkin acceptance criteria.

**Open items — dispositions recorded 2026-08-09:**

| # | Decision | Why it cannot be deferred | Disposition (2026-08-09) |
|---|---|---|---|
| OI-01 | The activation threshold percentage, and the **method** used to calibrate it per region | The whole product hinges on this number. Too high and nothing ever activates; too low and the network fills with noise. It must be fixed and published before the first petition opens. | **Method DECIDED.** Percentage of regional population from the population oracle, calibrated per region, published before the first petition opens above dev. Number stays open with that hard deadline. See `GATE1-DECISION-2026-08-09.md §3`. |
| OI-02 | Accept the 42-FR Must set, or defer recall (FR-042/043/045) to v1.1 | The product-owner declined to shrink the guardrail set and offered recall as the only coherent cut. Deferring frees ~3 weeks on the feature path only. | **Keep recall (FR-042/043/045).** It is the accountability half of the product. 42-FR Must set accepted in full. See `GATE1-DECISION-2026-08-09.md §3`. |
| OI-03 | The acceptable enrolment **exclusion rate**, and the non-document attestation path per pilot | The people most likely to fail a document check are the people this product claims to serve. | **Phased.** Phase 1: government eID sole uniqueness anchor; persons without a government identity cannot enrol — accepted, documented exclusion. Non-document path is Phase 3; needs its own ADR, threat model and audit before it can mint anything. See `GATE1-DECISION-2026-08-09.md §3`. |
| OI-04 | The pilot jurisdictions — and whether to launch in 1 or 3 | Gates the legal review, the issuer/attester recruitment, and the budget variance below. | **One pilot, jurisdiction not yet named.** Credential rail specified as a pluggable adapter. **OPEN:** name the pilot jurisdiction and its eID rail before the enrolment requirement is implemented. See `GATE1-DECISION-2026-08-09.md §3`. |
| OI-05 | Confirm the design answer to the k≥1000 anonymity floor vs ward-level governance | **Resolved in design** (ADR-004 §2: an action's anonymity scope escalates to the nearest ancestor region meeting the floor, while an *office* stays ward-scoped). Needs product confirmation, not a requirements change. | **Confirmed as designed (ADR-004 §2).** Ward-level offices, nominations and eligibility remain ward-scoped. See `GATE1-DECISION-2026-08-09.md §3`. |
| E-01 | Accept or reject the design-before-gate deviation above | Governance integrity. | **Accepted knowingly.** ADR-001…ADR-014 ratified retrospectively as Gate 1 inputs; re-baselining at MS-02 against the five OI decisions. See `GATE1-DECISION-2026-08-09.md §4`. |
| E-02 | RACI defect: one named individual originally owned both Doc 02 and all fourteen ADRs | **Fixed** — architecture ownership was reassigned to a distinct named architect. Confirm the fix. | **Confirmed.** Fix accepted. See `GATE1-DECISION-2026-08-09.md §4`. |
| B-01 | Budget: **USD 4.55M against a USD 4.2M appetite**, zero contingency | The project-manager offers three costed levers and recommends launching in one pilot, rolling the other two post-launch (≈USD 4.13M). | **L2 accepted** — one pilot, roll two post-launch, ~USD 4.13M against the 4.2M appetite (~1.7% contingency). See `GATE1-DECISION-2026-08-09.md §5`. |
| S-01 | Schedule: Gate 2 moves **2027-02-15 → 2027-05-14** | Every week of the slip sits on externally-paced cryptography: six phase-2 ceremonies at ≥500 contributors each, and two independent audits. Cutting features does not buy this time back. | **Accepted.** Gate 2 (MS-13) set at 2027-05-14. Ceremony- and audit-paced. See `GATE1-DECISION-2026-08-09.md §5`. |

---

## Gate 2 — Launch readiness

**Verdict: NOT READY, and not close.** This is the correct state for a system at this phase,
and the specifics matter more than the verdict:

| Condition | Status |
|---|---|
| Tests green | Partially. The reference rules, the contract suites, the adversarial suites, the differential suites and the indexer all pass. The circuits are **written but not compiled**, so no proof has ever been verified. |
| RTM (Doc 08) has zero gaps in Must rows | **No.** Receipt-freeness (FR-030/031/032, NFR-003) cannot close before MACI lands in Phase 3; anything needing compiled circuits cannot close before the Phase-2 ceremonies; NFR-004's duplicate rate is **not internally measurable by design**, since the system refuses to link a nullifier to a person. |
| Rollback proven | **No.** Not drilled. And the drill is unusual here: the core is immutable with no pause switch, so rollback means disabling flags, reverting the client and re-pointing off-chain services — it explicitly **cannot** halt a running vote or reverse an on-chain decision. Doc 10 says so plainly. |
| Independent audits | **Not started.** Two are on the critical path (protocol + circuits). |
| Ceremonies | **Not started.** Six phase-2 ceremonies at ≥500 contributors each. |
| Verifiers | **Development mocks.** A mock accepts every proof. The promotion gate in `script/deploy.mjs` refuses testnet/staging/production while any circuit is wired to one, and a test asserts the gate itself works. |

**The honest one-line summary:** what exists is a complete, tested Phase-1 walking skeleton
with every dangerous capability shipped dark, plus the full design and decision record for
what has to happen before a single real citizen touches it.

---

## What was built between the gate points

| Layer | State |
|---|---|
| Governance rules (reference implementation) | complete, 82 unit tests |
| Contracts (registries, petitions, parties, tiered governance) | complete for Phase 1, tested on a real EVM in-process |
| Circuits | Circom sources written; **not compiled**, no ceremony |
| Indexer | complete, 16 tests, deterministic and divergence-detectable |
| SDK + web client | built in this run |
| Elections, recall, treasury, fork, MACI | **not implemented** — Phase 3, flags off everywhere above dev |

## What the review loop found

Two independent reviews ran against this code and found, between them, **ten critical or high
defects** — every one of which was written by the same person who wrote the tests that passed
over them. That is the finding a reader should take most seriously, and it is the argument for
the two independent audits on the critical path.

**From the test strategy (Doc 04):** an unrestricted nullifier burn (a one-call
disenfranchisement of any citizen); per-issuer enrolment nullifiers that silently turned
one-person-one-vote into one-person-N-votes under 1-of-N acceptance; an issuer-plurality
invariant exposed as a view that nothing enforced; and feature flags that could freeze a
ballot already in progress.

**From the security scan (reviewer-qa, which scored the code drop 48% and withheld merge
sign-off):** residency credentials mintable by anyone holding a public id; votes never bound
to the proposal's snapshot root, making the entire anti-capture design decorative;
circuit/contract signal-count mismatches plus a missing enrolment circuit; an arithmetic
underflow that bricked a party permanently when one member left; a proposal tier that the
proposer chose independently of what their call did, so a zero-timelock proposal could
dissolve a party in three days; a re-pointable nullifier-spender authority; a basis-point
truncation that defeated a passing proposal; and an endorsement withdrawal that required no
prior endorsement — a one-call veto on whether a party may exist.

All ten are fixed with named regression tests (Doc 06 §5). One critical remains open and is
recorded rather than closed: **fork initiation is taken from calldata**, so the 10% threshold
and 30-day cooling-off are currently decorative. The `fork` flag is off in every environment
above dev and must stay off until it is fixed. **Gate 1 disposition: deferred — remains an open
critical, not closed** (see `GATE1-DECISION-2026-08-09.md §6`).

Also fixed: the contract suite was running **one of five test files and still exiting zero**,
because its worker timed out at six minutes. It now runs all five in about a minute.

**Build-and-CI integrity findings (added 2026-08-09, surfaced by the Windows checkout):**

1. **The contracts compile / EIP-170 CI step had never passed on any runner.**
   `packages/contracts/script/compile.mjs` hardcoded the absolute path
   `/home/user/Trumocracy/...`, so the step could only succeed on the original dev machine —
   a GitHub runner checks out to `/home/runner/work/...` and a Windows checkout resolves it
   to a non-existent drive path. The EIP-170 size check it exists to enforce was therefore
   non-functional in CI. **Fixed:** the script now resolves every path from its own module
   location; verified on a Windows checkout compiling all 14 units, largest 16,466 bytes,
   all under the 24,576-byte limit.

2. **Watch item — two compile paths, different source sets.** The build script and the
   vitest fixture (`packages/contracts/test/fixture.mjs`) compile overlapping but different
   inputs: the fixture additionally compiles `test/support/`. This is by design, but it
   means the size check and the test suite measure different artifacts — a green build and
   a green suite are not evidence about the same compilation, and the two paths can drift
   without either noticing.

3. **Two-OS matrix added; Windows-only failures now detectable in CI.** CI previously ran on
   `ubuntu-latest` alone, which is why a Windows-only failure reached a clean clone undetected
   — the vitest contract-suite parse failure caused by a shebang in a CLI file imported by a
   test on a CRLF checkout, fixed by extracting the promotion gate into
   `packages/contracts/src/promotion-gate.mjs` (commit `29c059a`). A two-OS matrix
   (`ubuntu-latest` + `windows-latest`) was added in commit `a08d8c6` and first executed on
   PR #1, per the approver. Note for the record: as of this entry the matrix commit is on the
   PR branch; it lands on `main` when that PR merges. PR #1 execution is per the approver's
   statement; the `gh` CLI was unavailable to verify independently.

These sit alongside the one-of-five-files finding above. The shared class is verification
that reports success without verifying, which is the standing argument for the two
independent audits on the critical path.

---

## CR-v1.1.0 update — 2026-08-10

> This section records the state of the nine-requirement change request driven in the
> 2026-08-10 session. The Gate-1 approval above (against Doc 02 v1.0.0) is unchanged and
> intact. This section is additive only.

**Doc 02 is now v1.1.1** (Status: In Review; passing business-mode review at cycle 2, score
96%). Doc 05 is now v1.1.2 (Status: In Review; passing business-mode review at cycle 3,
score 97%). Gate-1 re-affirmation at these versions is **PENDING**.

**Gate-1 re-affirmation packet:** `artifacts/status/GATE1-REAFFIRMATION-CR-v1.1.0-2026-08-10.md`
Prepared by: project-manager (Ana-Maria Petrescu). Awaiting Rathish's decision.

**Blocking items — re-affirmation cannot be granted until both are resolved:**

| Blocker | Description | Blocks |
|---------|------------|--------|
| SC-01 (CRITICAL) | Enrolment circuit trust anchor absent from `enrol()` public signal vector and issuer struct; single `CIRCUIT_ENROL` constant cannot serve three adapter classes; Sybil resistance is defeasible as specified. Architect must produce a revised Doc 03 addressing the trust anchor binding before Change 6 can be re-affirmed or coded. | FR-069, FR-070, DES-069, DES-070, ADR-017 (Change 6) |
| OI-13 (open governance decision) | FR-062 (public participation profile) conflicts with NFR-001, NFR-002, NFR-024, TD-02. Security scan SC-02/SC-03/SC-04 make the deanonymisation consequence concrete. Three resolution options require a human decision. `participation_profile` flag must remain OFF above dev. | FR-062, FR-063, DES-064, SCR-21 (Change 1) |

**Security scan findings summary** (`artifacts/reviews/SECURITY-SCAN-CR-v1.1.0-2026-08-10.md`):
1C / 4H / 5M / 2L (SC-01..SC-12). Conducted by reviewer-qa in design/requirements phase.
No product code was written to fix these this session; they are recorded, not closed.

**Gate 2:** Unchanged — NOT READY. RTM (Doc 08 v1.1.2) shows 64 open Must rows. The gate
conditions (suites green, RTM zero gaps, rollback proven) are not met. Expected state for
the current phase.

**Changes not blocked by SC-01 or OI-13 at requirements level:**
Changes 2–5 (FR-064..FR-068), Change 8 (FR-073), and their DES/FE/US elements are not
independently blocked by SC-01 or OI-13. Change 7 (FR-071, FR-072, recovery flow) is not
a re-affirmation blocker but SC-05 (no rate limit on recovery re-initiation) must be
addressed in the specification before Change 7 is coded.

---

## v2.0.0 VISION RE-ENTRY (2026-08-10)

> This section records the state of the v2.0.0 expanded-vision re-entry directed by Rathish
> on 2026-08-10. The CR-v1.1.0 re-affirmation question above is **superseded** by this packet
> — OI-13 is now resolved and SC-01 is now closed. Gate 1 re-entry requires a fresh human
> approval against the v2.0.0 direction.

**Doc 01 PR-FAQ is now v2.0.0** (Status: Approved — business-mode review cycle 1, 97%,
0C/0H/0M/2L, PASS). **Doc 02 Requirements is now v2.0.1** (Status: Approved — business-mode
review cycle 2, 98%, 0C/0H/0M/1L, PASS; cycle 1 at v2.0.0 was FAIL 92%, 0C/2H/1M/2L —
fixed: §2.4 one-pilot correction, CON-007 launch date 2027-03-01 → 2027-06-01, §8 FR-062
superseded marker).

**Gate-1 re-entry packet:** `artifacts/status/GATE1-REENTRY-v2.0.0-2026-08-10.md`
Prepared by: project-manager (Ana-Maria Petrescu). **Status: PENDING Rathish's decision.**

**The CR-v1.1.0 re-affirmation question is superseded:**
- SC-01 (CRITICAL blocker) — CLOSED 2026-08-10; confirmed by re-scan at
  `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`.
- OI-13 (open governance decision) — RESOLVED at v2.0.0 by ruling 3 (BR-017): Supporters
  have no public profile unconditionally; FR-062 superseded by FR-082..FR-086 (§4.24).

**Three new decisions surfaced by v2.0.0 (pending Rathish at Gate 1):**

| OI | Tension | PO default |
|----|---------|-----------|
| **OI-14** | Ruling 1 (authorship public, FR-090) vs Ruling 3 (Supporter anonymous, FR-082): Supporter cannot simultaneously author and be anonymous | (a) Worker-tier-and-above only |
| **OI-15** | Anonymous Supporter expulsion is impossible without deanonymisation | (a) Expulsion scoped to public tiers; FR-005 fraud-revocation for Supporters |
| **OI-16** | FR-107 append-only record vs FR-085 withdrawal-destroys-data: conflict for pre-nomination Worker disclosures | (a) Confidential-class carve-out |

Until OI-14/15/16 are decided, the affected stories are not Ready.

**Suite state (verified by orchestrating session, 2026-08-10):** npm test green — contracts 95,
protocol 82, sdk 124, indexer 16, web 16, exit 0. **No product code, tests, or workflows
were touched during the v2.0.0 re-entry session** — documents and artifacts only.

**Gate 2:** Unchanged — NOT READY. RTM (Doc 08 v1.1.2) shows 64 open Must rows. Doc 07/08
cover v1.1.x FRs only; v2.0.0 FRs (FR-074..FR-113) have no test cases yet. The gate
conditions (suites green, RTM zero gaps, rollback proven) are not met. Expected state.

---

## GATE 1 APPROVED at v2.0.0/v2.0.1 (2026-08-11)

**Rathish approved Gate 1 on 2026-08-11** against Doc 01 v2.0.0 and Doc 02 v2.0.1, conditional
on the steward-organisation requirements (Part B) landing as Doc 02 v2.1.0 with a passing
business-mode review before the design phase begins. Full decision record:
`artifacts/status/GATE1-DECISION-2026-08-11.md`.

**OI dispositions decided (2026-08-11):**
- **OI-14 DECIDED** — Worker tier and above; Supporters retain full voting rights but may not author unless they self-declare as Workers.
- **OI-15 DECIDED** — Public tiers only; Supporters handled via FR-005 credential revocation, not expulsion.
- **OI-16 DECIDED** — Confidential-class carve-out adopted; pre-nomination Worker disclosure data is destroyable on withdrawal; public records of completed actions remain append-only.

**Carry-forwards unchanged:** OI-01 number open; OI-04 pilot jurisdiction open; fork initiation
open critical (flag OFF above dev); SC-13/SC-14 Doc 03 design change owed to architect; OI-08/OI-17
governance constants to Design phase.

**Condition to satisfy this session (pre-design):** product-owner produces Doc 02 v2.1.0
(steward requirements, Part B) → business-mode review → PASS → project-manager records
condition satisfied → design phase (Doc 03 v2, Doc 05 v2, Doc 13 re-plan) may begin.

**Condition satisfied — 2026-08-11.** Doc 02 v2.1.0 → v2.1.1: cycle-1 FAIL 91% reworked;
cycle-2 PASS 99%, 0C/0H/0M/1L (report: `artifacts/reviews/02-requirements-srs-v2.1.1-business-cycle2.md`).
Gate 1 approval is now unconditional. Design phase (Doc 03 v2, Doc 05 v2, Doc 13 re-plan) may
begin. One new open item: **OI-18** (entrenched-charter scope vs previously-absolute guarantees)
— a decision for the approver before the architect fixes the amendment boundary in Doc 03.

**Gate 2:** Unchanged — OPEN / NOT READY.

---

## OI-18 DECIDED — 2026-08-11

**OI-18 DECIDED (2026-08-11, Rathish): option (c) two-tier core, with CON-001 promoted into
the Tier-1 entrenched charter (fork-only).** Tier 1 now comprises the six existing charter rules
plus CON-001 (parties only, never state elections), unamendable by any vote at any tier and
changeable only by fork. Tier 2 (BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013)
is amendable only via a super-process the architect specifies in Doc 03 — minimum requirements:
supermajority materially above the ordinary structural tier; timelock long enough the fork right
is genuinely exercisable; two consecutive affirmative votes separated by that window; growth-surge
defence active throughout; independent audit published before the second vote. Full record:
`artifacts/status/OI-18-DECISION-2026-08-11.md`. The architect proceeds to Doc 03 v2 covering
the FR-118/FR-119 amendment boundary and super-process numbers with rationale, the SC-13/SC-14
trust-anchor governance design (FR-112/FR-113), the OI-17 governance constants (Tomás Ferreira),
and DES elements for FR-114..FR-120 including FR-117's capability-absence obligation. Gate 2
unchanged — OPEN / NOT READY.

---

## Follow-up governance — 2026-08-12

> This section records two governance items directed by Rathish on 2026-08-12 following the
> audit of commit e116e15. All prior gate decisions and their wording are unchanged and intact.
> This section is additive only.

### Doc 07 / 08 follow-up fixes and v2.1.0 review outcomes

The tester applied audit-directed fixes and produced Doc 07 v2.1.0 and Doc 08 v2.1.0:
**TC-3451 and TC-3453 amended** (seated-but-inactive precondition added);
**TC-3467, TC-3468, TC-3469 minted** (TC-3467: vacancy-immediate citizen fallback for
publishAuditRef; TC-3468: vacancy-immediate fallback for issuer-onboarding; TC-3469:
SC-16 anti-circularity direct-attack case).

The architect ran a technical-mode cycle-1 review over both documents:

| Document | Version | Score | Findings | Verdict |
|----------|---------|-------|----------|---------|
| Doc 07 — Test Cases & Suites | v2.1.0 | 99% | 0C/0H/0M/1L | **PASS** |
| Doc 08 — Traceability Matrix | v2.1.0 | 100% | 0C/0H/0M/0L | **PASS** |

Reports: `artifacts/reviews/07-test-cases-suites-v2.1.0-technical-cycle1.md` and
`artifacts/reviews/08-traceability-matrix-v2.1.0-technical-cycle1.md`.
Doc 07 Low issue (ISS-01: §2 convention note '2-row' vs '7-case') does not block.

The **tester (as owner)** flipped both Status lines to **Approved** on 2026-08-12, consistent
with CLAUDE.md's review-and-rework loop ("On PASS the owner sets `Status: Approved`").

**Gate 2:** NOT READY. RTM (Doc 08 v2.1.0): 125 Must rows / 12 COMPLETE / **113 OPEN** — unchanged.

---

### Governance item 1 — Doc 04 review debt (Gate-2 blocker)

`docs/04-test-strategy-master-plan.md` has **never received a document-review report at any
version** — neither v1.0.0 nor the current v1.0.1. Confirmed: no `04-*` file exists in
`artifacts/reviews/`. The v1.0.0 was written before the review loop was established;
the v1.0.1 surgical patch (2026-08-12, §14 TC-range reservation rows added for TS-CR1
TC-3300–3399 and TS-GOV2 TC-3400–3499) was legitimate architect work but also went
unreviewed. Both Doc 07 v2.1.0 and Doc 08 v2.1.0 cite Doc 04 v1.0.1 as a source document.

**Required before Gate 2:** a **technical-rubric document-review of Doc 04 (current version
v1.0.1)** must be completed and produce a passing (or human-approved ESCALATED) report in
`artifacts/reviews/`. This is a **Gate-2 blocker** — the SubagentStop hook will flag the
absence of a passing Doc 04 review report until one exists.

This item is recorded alongside — and does not supersede — the open item for a full Doc 04
v2.x refresh and first-ever review-loop pass at the next design increment (see
`artifacts/project-manager-2026-08-12T0130.md`, open item 1). The v1.0.1 technical review
satisfies the minimum Gate-2 requirement; the v2.x refresh is the structural catch-up owed
when the next design increment runs (also fixes stale SRS v1.0.0 pins and the
"Priya Raghunathan — Principal Architect" owner-line).

**Owner:** architect (Ravi Deshmukh). **Trigger:** before Gate 2. **Rubric:** technical.

---

### Governance item 2 — Status-flip authorship deviation (accepted, noted)

During the 2026-08-11/12 catch-up (commit e116e15), the project-manager set `Status: Approved`
on Docs 05, 07, and 08 immediately after PASS verdicts, as review-loop bookkeeping. This was
recorded in `artifacts/project-manager-2026-08-12T0130.md` (key decision 2) as a RACI-grounded
call: PM is A/R for document review in the RACI table. CLAUDE.md's review-and-rework loop text
assigns the status flip to the **owning role** ("On PASS the owner sets `Status: Approved`").

**Disposition: accepted deviation, noted.** Accepted by **Rathish** (human approver) per the
2026-08-12 follow-up directive. The already-flipped `Status: Approved` lines on Docs 05, 07,
and 08 (versions produced during the catch-up) stand unchanged. The practice is corrected from
this session forward: the tester, as owner of Docs 07 and 08, performed the v2.1.0 Status
flips on 2026-08-12 (see `artifacts/tester-2026-08-12T1600.md`). Future owning roles will
perform their own flips on PASS.
