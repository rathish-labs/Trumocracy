# Test Strategy & Master Test Plan — TEMPLATE

```
Document ID:   MTP-<product>
Version:       <semver>
Status:        Draft | In Review | Approved
Owner:         <QA Lead — named>
Approvers:     QA, Eng, SRE, Product
Source:        SRS-<product>, SDD-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** ISO/IEC/IEEE 29119 + IEEE 829. **Produced in:** Design (drafted early). **Approved at:** Gate 2 (exit).
> _The test plan is a **design-time** artifact, not an afterthought. Acceptance criteria are written before code and automated._

---

## 1. Introduction
### 1.1 Purpose & objectives
### 1.2 Test items (what is being tested; versions/builds)
### 1.3 Scope — **in scope** / **out of scope** / **features not to be tested** (with reason)
### 1.4 References

## 2. Test strategy
### 2.1 Quality objectives (tie to NFRs)
### 2.2 Risk-based prioritization (weight effort to highest impact/likelihood)
### 2.3 Shift-left & automation approach
### 2.4 Test design techniques (equivalence partitioning, boundary, decision tables, state transition, pairwise)

## 3. Test levels
| Level | Scope | Owner | Automated? | Gate |
|-------|-------|-------|------------|------|
| Unit (UT) | <…> | Eng | Yes | pre-merge |
| Integration | <…> | Eng/QA | Yes | pre-merge |
| System | <…> | QA | Yes | pre-release |
| End-to-end | <…> | QA | Yes | pre-release |
| UAT | <…> | Product | Manual | Gate 2 |

## 4. Test types (state each; "N/A — reason" if not used)
> _Functional · Regression · Smoke/sanity · Exploratory · Performance · Load · Stress · Soak/Endurance · Scalability · Security (authZ, IDOR, pen) · Privacy/data · Accessibility (WCAG) · Compatibility/cross-device · Localization/i18n · Resilience/chaos · Disaster-recovery · Usability · Compliance · Upgrade/migration · Contract/API._

## 5. Entry & exit criteria
### 5.1 Entry (per build)
### 5.2 Exit / **release readiness (Gate 2)**
> _100% Must FR/NFR have a passing test (via RTM) · 0 open Sev-1/Sev-2 · perf/security/a11y green · rollback drill done._
### 5.3 Suspension & resumption criteria

## 6. Test environments & data
| Env | Purpose | Data | Flag state |
|-----|---------|------|-----------|
### 6.1 Test data management (synthetic, masking, refresh, fixtures)

## 7. Tooling & automation framework
## 8. Roles & responsibilities (RACI)
## 9. Schedule & milestones (tied to phases/gates)
## 10. Test groups / suites (created during Coding & UT)
| Suite ID | Group | Covers | Cases |
|----------|-------|--------|-------|
| TS-FUNC | Functional/E2E | FR-… | TC-… |
| TS-EDGE | Negative/edge | SDD §11 | TC-… |
| TS-PERF | Performance/load | NFR-… | TC-… |
| TS-SEC | Security | NFR-… | TC-… |
| TS-A11Y | Accessibility | NFR-… | TC-… |
| TS-RES | Resilience/chaos | NFR-…, RISK-… | TC-… |

## 11. Defect management
> _Severity Sev-1…4; SLAs; defect links to failing TC + the requirement._

## 12. Metrics & reporting (coverage, pass rate, escape rate, MTTR, flake rate)
## 13. Risks & contingencies
## 14. Deliverables (this plan · cases (Doc 07) · automated suites · execution report · RTM view · readiness summary)
## 15. Traceability (requirements → tests — Doc 08)
## 16. Approvals

---
### Downstream
Suites here become cases in Doc 07 and are mapped in the RTM (Doc 08).
