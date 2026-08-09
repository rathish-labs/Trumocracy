# Gate status — Trumocracy, 2026-08-09

```
Prepared by:   project pipeline (VEKTOR SOP run end-to-end)
Status:        BOTH GATES OPEN — neither has been approved
Audience:      the human approver
```

> **Read this first.** VEKTOR has exactly two human approval gates, and **neither has been
> approved.** The requesting human's instruction was to build the platform end to end "with
> least gates", which was taken as a direction to *keep building through* the gate points
> rather than stopping at them — not as an approval of either gate. No approval has been
> given, recorded, or implied by anyone. Both packets below are open decisions.
>
> Everything produced between the gate points is, by VEKTOR's own design, reversible: trunk
> based, shipped dark behind flags, staged rollout, instant rollback. Nothing irreversible has
> been done. No contract has been deployed to any network. No ceremony has been run.

---

## Gate 1 — Direction approved

**What it approves:** the PR-FAQ (Doc 01) and the requirements (Doc 02). Nothing should be
designed until it clears.

**Deviation to record honestly:** design *was* produced before this gate cleared. The ADRs are
dated 2026-08-08 and the SDD 2026-08-09, both ahead of any Gate-1 decision. This was a direct
consequence of the "build end to end" instruction and is recorded here rather than
back-dated or hidden. If the approver rejects the direction, the design and code produced
under it are sunk cost — that is precisely the cost the gate exists to avoid, and it was
knowingly incurred on instruction.

**Ready:** Docs 01, 02, 05, 13 at v1.0.0. 12 BR · 61 FR (42 Must) · 26 NFR (22 Must) ·
12 CON · 16 RISK, each with a named individual owner. 10 epics, 28 features, 70 stories with
Gherkin acceptance criteria.

**Open items the approver must decide:**

| # | Decision | Why it cannot be deferred |
|---|---|---|
| OI-01 | The activation threshold percentage, and the **method** used to calibrate it per region | The whole product hinges on this number. Too high and nothing ever activates; too low and the network fills with noise. It must be fixed and published before the first petition opens. |
| OI-02 | Accept the 42-FR Must set, or defer recall (FR-042/043/045) to v1.1 | The product-owner declined to shrink the guardrail set and offered recall as the only coherent cut. Deferring frees ~3 weeks on the feature path only. |
| OI-03 | The acceptable enrolment **exclusion rate**, and the non-document attestation path per pilot | The people most likely to fail a document check are the people this product claims to serve. |
| OI-04 | The pilot jurisdictions — and whether to launch in 1 or 3 | Gates the legal review, the issuer/attester recruitment, and the budget variance below. |
| OI-05 | Confirm the design answer to the k≥1000 anonymity floor vs ward-level governance | **Resolved in design** (ADR-004 §2: an action's anonymity scope escalates to the nearest ancestor region meeting the floor, while an *office* stays ward-scoped). Needs product confirmation, not a requirements change. |
| E-01 | Accept or reject the design-before-gate deviation above | Governance integrity. |
| E-02 | RACI defect: one named individual originally owned both Doc 02 and all fourteen ADRs | **Fixed** — architecture ownership was reassigned to a distinct named architect. Confirm the fix. |
| B-01 | Budget: **USD 4.55M against a USD 4.2M appetite**, zero contingency | The project-manager offers three costed levers and recommends launching in one pilot, rolling the other two post-launch (≈USD 4.13M). |
| S-01 | Schedule: Gate 2 moves **2027-02-15 → 2027-05-14** | Every week of the slip sits on externally-paced cryptography: six phase-2 ceremonies at ≥500 contributors each, and two independent audits. Cutting features does not buy this time back. |

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

Four security defects were found by the review loop and fixed with regression tests before
any of this was committed: an unrestricted nullifier burn (one-call disenfranchisement),
per-issuer enrolment nullifiers that silently turned one-person-one-vote into one-person-N-votes,
an unenforced issuer-plurality invariant, and feature flags that could freeze a ballot already
in progress. Doc 06 §5 records each with its regression test.
