# Requirements Specification (BRD + SRS) — TEMPLATE

```
Document ID:   SRS-<product>
Version:       <semver>
Status:        Draft | In Review | Approved (Gate 1)
Owner:         <Product Owner — named>
Approvers:     Gate 1 — Product, Engineering, Design, QA
Source:        PR-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** ISO/IEC/IEEE 29148:2018 + IEEE 830. **Produced in:** Define. **Approved at:** Gate 1.
> _Every requirement is uniquely indexed, prioritized (MoSCoW), verifiable, and traceable. This is the source of truth for scope._

---

## 1. Introduction
### 1.1 Purpose
### 1.2 Scope (product name, what it does / does not do)
### 1.3 Definitions, acronyms, abbreviations
### 1.4 References (PR-FAQ, standards, related docs)
### 1.5 Document overview

## 2. Overall description
### 2.1 Product perspective (context, systems it fits into; system context diagram)
### 2.2 Product functions (high-level summary)
### 2.3 User classes & characteristics (personas, expertise, frequency)
### 2.4 Operating environment (platforms, browsers, devices, networks)
### 2.5 Design & implementation constraints (CON-###)
### 2.6 Assumptions & dependencies (CON-###)
### 2.7 Stakeholders & responsibilities

## 3. Business Requirements (BR)
> _Why we're doing this. Each has a measurable success outcome from the PR-FAQ._

| ID | Requirement | Priority | Success measure | Source |
|----|-------------|----------|-----------------|--------|
| BR-001 | <…> | Must | <metric> | PR-FAQ |

## 4. Functional Requirements (FR)
> _What the system must do. Each FR: traces up to a BR; has a verification method; is atomic and testable._

| ID | Requirement (system MUST…) | Traces to BR | Priority | Verify by |
|----|-----------------------------|--------------|----------|-----------|
| FR-001 | <…> | BR-001 | Must | Test / Demo / Inspection / Analysis |

## 5. External interface requirements
### 5.1 User interfaces (screens SCR-##, style/brand, states)
### 5.2 Hardware interfaces
### 5.3 Software interfaces (APIs, services, contracts)
### 5.4 Communications interfaces (protocols, ports, formats)

## 6. Non-Functional / Quality Requirements (NFR)
> _Do not skip a category just because it "doesn't apply" — state "N/A — reason"._

| ID | Category | Requirement | Target | Traces to |
|----|----------|-------------|--------|-----------|
| NFR-001 | Performance | <latency/throughput> | <p95/…> | BR-… |
| NFR-002 | Reliability / Availability | <uptime> | <99.9%> | |
| NFR-003 | Scalability / Capacity | <load> | <RPS/users> | |
| NFR-004 | Security | <authN/Z, data> | <…> | |
| NFR-005 | Privacy & Data protection | <PII, consent, retention> | <…> | |
| NFR-006 | Usability | <task success/time> | <…> | |
| NFR-007 | Accessibility | <WCAG level> | <2.1 AA> | |
| NFR-008 | Maintainability | <…> | <…> | |
| NFR-009 | Portability / Compatibility | <…> | <…> | |
| NFR-010 | Observability | <metrics/logs/traces> | <…> | |
| NFR-011 | Operability (deploy/rollback) | <…> | <rollback <1min> | |
| NFR-012 | Localization / i18n | <locales> | <…> | |
| NFR-013 | Compliance / Legal / Regulatory | <standards> | <…> | |
| NFR-014 | Cost / Efficiency | <cost ceiling> | <…> | |
| NFR-015 | Safety (if applicable) | <…> | <…> | |
| NFR-016 | Content / UX writing & notifications | <voice & tone, error-message style, email/push/in-app copy, empty states> | <…> | |

### 6.1 Regulatory & standards applicability
> _State which external standards actually apply and which do not — "N/A — reason" is required, silence is not. Drives the compliance evidence for Gate 2. **Complements NFR-013** (Compliance/Legal): NFR-013 states the binding *requirement*; this matrix states *which standards apply and why* — read them together, not as duplicates._
| Standard / regulation | Applies? | Why / scope | Owner |
|-----------------------|----------|-------------|-------|
| <e.g. GDPR / WCAG 2.1 AA / SOC 2 / HIPAA / PCI-DSS> | Yes / No / Partial | <…> | <name> |

## 7. Data requirements
> _Entities, ownership, classification, retention, residency, lineage, migration._
| Data entity | Classification | System of record | Retention | Residency | PII? |
|-------------|----------------|------------------|-----------|-----------|------|

## 8. Acceptance criteria (per Must requirement)
> _Gherkin. These seed the test cases (Doc 07)._
```
Given <context>
When <action>
Then <observable outcome>
```

## 9. Constraints (CON) & Assumptions
## 10. Risks (RISK)
> _The **living risk register of record is Project Plan (13) §6.** List here only requirement-level risks, using the shared `RISK-##` IDs — reference them, don't maintain a competing copy._
| ID | Risk | Likelihood | Impact | Mitigation | Owner |
|----|------|-----------|--------|------------|-------|

## 11. Requirements prioritization & release plan (MoSCoW; what's in this release)
## 12. Traceability (forward to design/test — maintained in Doc 08)
## 13. Open issues / TBD
## 14. Glossary
## 15. Approvals (Gate 1 sign-off table)

---
### Downstream
Design (Doc 03) must address **every** FR/NFR and each RISK. Coverage is verified in the RTM (Doc 08).
