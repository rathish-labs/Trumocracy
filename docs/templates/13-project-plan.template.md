# Project Plan — TEMPLATE

```
Document ID:   PLAN-<product>
Version:       <semver>
Status:        Living (re-planned at each gate)
Owner:         <Project Manager — named>
Source:        PR-<product>, SRS-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Shape Up (appetite, fixed-time/flex-scope) + Rolling-wave planning + the VEKTOR two-gate governance model. **Produced in:** Define (drafted), **living** (re-planned at each gate).
> _Plans are anchored to **outcomes, not date theatre**. Fix the time, flex the scope. Plan the next wave in detail and the rest coarse. Milestones are gates, not arbitrary dates. A living risk register — not a Gantt — drives the plan. Re-plan at each gate with what production taught you._

---

## 1. Objective & success metrics
> _Lifted from the PR-FAQ. The plan exists to move these numbers — every workstream below must trace to one._
| Outcome | Metric | Baseline | Target | Guardrail | Source |
|---------|--------|----------|--------|-----------|--------|
| <…> | <…> | <x> | <y> | <z> | PR-FAQ / BR-### |

## 2. Scope & explicit out-of-scope
> _What this plan commits to delivering, and — just as important — what it deliberately does not. Mirrors PR-FAQ §D and SRS §1.2 / §11._
### 2.1 In scope (this release)
### 2.2 Explicit out-of-scope (and when, if ever, later)

## 3. Milestones & the two gates
> _Milestones are **decision points**, not calendar filler. The two governance gates are the only hard stops._
| ID | Milestone | Type | Gate? | Target window | Entry evidence | Exit decision by |
|----|-----------|------|-------|---------------|----------------|------------------|
| MS-01 | Direction approved | Gate | **Gate 1** | <wave> | PR-FAQ + indexed requirements; named owner per req | Product · Eng · Design |
| MS-02 | <design baselined> | Checkpoint | — | <wave> | SDD + Test Strategy drafted | Architect |
| MS-02b | Repo scaffolded · coding starts | Checkpoint | — | <wave> | Repo built from SDD §9; UT standard live; CI gates green (Doc 06) | Eng Lead |
| MS-03 | Launch readiness | Gate | **Gate 2** | <wave> | RTM 0 gaps; suites green; rollback proven | Product · QA · SRE |

## 4. Workstreams mapped to epics
> _Each workstream is a swimlane of delivery that maps to backlog epics (Doc 05). No workstream without an epic; no epic without an owner._
| ID | Workstream | Maps to (EP-##) | Owner (named) | Wave | Status |
|----|-----------|------------------|---------------|------|--------|
| WS-01 | <…> | EP-## | <name> | Now / Next / Later | <…> |

## 5. Dependencies & assumptions
> _Cross-team, vendor, infra, and data dependencies that can block a wave. Each has an owner and a needed-by date. Assumptions are stated so they can be invalidated._
| ID | Dependency / assumption | Type | On whom | Needed by | Status | Fallback if it slips |
|----|-------------------------|------|---------|-----------|--------|----------------------|
| DEP-01 | <…> | Team / Vendor / Infra / Data | <name> | <YYYY-MM-DD> | <…> | <…> |

## 6. Risk register (living) — **register of record**
> _This is the **single living risk register of record** for the product, and the engine of the plan — not an appendix. Reviewed every wave; a realized risk re-plans the wave. SRS §10 and SDD §13 **reference** these `RISK-##` IDs; they do not keep competing copies._
| ID | Risk | Likelihood | Impact | Exposure | Mitigation / trigger | Owner | Status |
|----|------|-----------|--------|----------|----------------------|-------|--------|
| RISK-## | <…> | H/M/L | H/M/L | <score> | <…> | <name> | Open / Mitigated / Closed |

## 7. Roles & decision rights (RACI) — **canonical for the suite**
> _Who is **A**ccountable, **R**esponsible, **C**onsulted, **I**nformed — per decision, not per person. **This is the canonical RACI**; the methodology deck mirrors it and other docs reference it — none redefine it. Roles: PO · Arch(itect) · Eng · QA · SRE · Orch(estrator) · **TW** (Tech Writer / Docs)._
| Decision | PO | Arch | Eng | QA | SRE | Orch | TW |
|----------|----|----|-----|----|-----|------|----|
| Approve Gate 1 | A | C | C | C | I | R | I |
| Architecture / ADR | C | A | C | I | C | I | I |
| Approve Gate 2 | A | I | C | C | C | R | C |
| Staged rollout / rollback | C | I | C | I | A | R | I |
| Author User Guide (Doc 14) | A | I | C | I | I | I | R |

## 8. Appetite, timeline & cadence
> _**Appetite, not estimate** — fix the time-box, flex the scope to fit. Plan the current wave in detail; later waves stay coarse (rolling-wave)._
### 8.1 Appetite per wave (the time-box you are willing to spend)
| Wave | Appetite (time-box) | Detail level | Re-plan trigger |
|------|---------------------|--------------|-----------------|
| Now | <e.g. 6 weeks> | Detailed | At Gate / wave end |
| Next | <…> | Coarse | <…> |
| Later | <…> | Headline only | <…> |
### 8.2 Cadence (ceremonies kept deliberately light)
> _Trunk/iteration cadence, backlog refinement, demo, retro → refine loop._
### 8.3 Capacity & flow (track throughput and WIP — **not** utilization)

## 9. Rollout & rollback plan (high level)
> _The release-level view; the executable detail lives in the Deployment Runbook (Doc 10)._
- **Rollout shape:** <staged 1% → 10% → 50% → 100%, metric-gated>
- **Rollback posture:** <flag → 0%; time target; "rollback first, diagnose after">
- **Owner on call for the window:** <named>

## 10. Communications & stakeholders
> _Who is told what, when, and through which channel — for gates, launches, and incidents._
| Stakeholder | Interest | Cadence | Channel |
|-------------|----------|---------|---------|

## 11. Re-plan log (what production taught us)
> _Every gate and every realized risk produces a re-plan entry. The plan is a record of learning, not a frozen forecast._
| Date | Wave | What changed | Why (signal from production / gate) | By |
|------|------|--------------|-------------------------------------|----|

## 12. Approvals
> _Sign-off is at the **gates** (MS-01 / MS-03), not on every plan revision._

---
### Downstream
Objectives seed the PR-FAQ promises (Doc 01) and requirements (Doc 02); workstreams decompose into the backlog (Doc 05); milestones are the gates governed via the RTM (Doc 08); rollout executes via Doc 10.
