# Architecture & Design Document (SDD) — TEMPLATE

```
Document ID:   SDD-<product>
Version:       <semver>
Status:        Draft | In Review | Approved
Owner:         <Architect — named>
Approvers:     Eng, Security, SRE, QA
Source:        SRS-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** arc42 + C4 model + Google design doc + IEEE 1016. **Produced in:** Design. **Approved at:** post-Gate 1.
> _Covers **infrastructure + hardware + software**, all cross-cutting concerns, a **situation/failure-mode analysis per requirement**, the **repository build design**, and a decision log (ADRs). Every design element gets a `DES-###` and traces to the requirements it satisfies._

---

## 1. Introduction & goals
### 1.1 Requirements overview (link SRS; restate top FR/NFR)
### 1.2 Quality goals (the top 3–5 NFRs that shape the architecture)
### 1.3 Goals & **non-goals** (explicit)
### 1.4 Stakeholders & their concerns

## 2. Constraints
> _Technical, organizational, regulatory, and convention constraints (CON-###)._

## 3. Context & scope (C4 Level 1)
### 3.1 Business context (system context diagram; external actors & systems)
### 3.2 Technical context (interfaces, protocols, data crossing the boundary)

## 4. Solution strategy
> _The big decisions in one page: key patterns, tech choices, how quality goals are met._

## 5. Building-block view (C4 L2 Container & L3 Component)
### 5.1 Container diagram (apps, services, data stores, their responsibilities)
### 5.2 Component breakdown

| ID | Component | Responsibility | Satisfies (FR/NFR) | Tech |
|----|-----------|----------------|--------------------|------|
| DES-001 | <…> | <…> | FR-…, NFR-… | <…> |

### 5.3 Data model (entities, relationships, ownership; schema/ERD)
### 5.4 API contracts (endpoints, request/response, errors, versioning; OpenAPI link)
### 5.5 Key sequence / flow diagrams (happy path + critical alternates)
### 5.6 State models (where state machines matter)

## 6. Runtime view
> _How components collaborate at runtime for key scenarios._

## 7. Deployment view (Infrastructure)
### 7.1 Environments (dev/CI/staging/prod) & promotion path
### 7.2 Network topology (gateways, mesh, subnets, WAF, DNS, CDN)
### 7.3 Compute (orchestration, autoscaling, instance classes)
### 7.4 Storage & data services (DBs, caches, queues, object store; replication)
### 7.5 Regions / availability zones / failover
### 7.6 **Hardware / capacity & sizing model**
> _Do not skip — most "it fell over in prod" incidents trace here._
| Tier | Unit | Baseline | Peak (autoscale) | Basis (RPS/user) |
|------|------|----------|------------------|------------------|

## 8. Software & technology
### 8.1 Tech stack (languages, frameworks, runtimes, versions)
### 8.2 Third-party services & libraries (and licenses)
### 8.3 Configuration & feature-flag strategy

## 9. **Repository & Code-Structure Design**  ⭐ (decided here in Design)
> _The repo build is **designed now** and **built at the start of Coding** (see Doc 06)._
### 9.1 Monorepo vs polyrepo decision (→ ADR-###)
### 9.2 Module / package boundaries & layering (clean architecture, dependency rules)
### 9.3 High-level directory topology (apps/, services/, packages/, infra/, tests/, ops/)
### 9.4 Branching & integration model (trunk-based; flag strategy)
### 9.5 CI/CD topology (pipelines, gates, environments)
### 9.6 Build & dependency management approach
### 9.7 Test topology (where unit/integration/e2e live)

## 10. Cross-cutting concepts
> _State each explicitly; "N/A — reason" is acceptable, silence is not._
- **Security** — authN/Z model, secrets, key management, **threat model (STRIDE)** backed by a **data-flow diagram (DFD)** that shows processes, data stores, external entities, and **trust boundaries** with the data crossing them (Microsoft SDL deliverable, not just the STRIDE label)
- **Privacy & data protection** — classification, minimization, retention, residency, consent
- **Performance** — budgets, caching, hotspots
- **Scalability & elasticity**
- **Reliability / HA / DR** — failure domains, redundancy, **RTO/RPO**
- **Observability** — metrics, logs, traces, SLIs/SLOs (link Doc 11)
- **Error handling & resilience** — retries, timeouts, circuit breakers, idempotency
- **Internationalization & accessibility**
- **Cost / FinOps** — cost model, budget alerts
- **Compliance & auditability**

## 11. **Situation & failure-mode analysis (per requirement)**  ⭐
> _For each key requirement: normal → edge → failure behavior. These become negative/edge tests (Doc 07)._
| Requirement / DES | Normal | Edge case | Failure mode → behavior |
|-------------------|--------|-----------|-------------------------|
| FR-… / DES-… | <…> | <…> | <degrade / fail-closed / retry / …> |

## 12. Architecture Decision Records (ADR)
> _One per significant decision. Keep the rejected options._
**ADR-001 — <title>**
- **Context:** <forces, requirements>
- **Decision:** <what we chose>
- **Status:** Proposed | Accepted | Superseded
- **Consequences:** <good & bad>
- **Alternatives considered & why rejected:** <…>

## 13. Risks & technical debt
> _Capture **technical/architectural** risks and debt here, using shared `RISK-##` IDs. The **living risk register of record is Project Plan (13) §6** — reference IDs, don't maintain a competing register._
## 14. Test hooks designed in (for Doc 04/07)
## 15. Traceability (FR/NFR → DES/ADR/SCR — maintained in Doc 08)
## 16. Open questions
## 17. Glossary

---
### Downstream
DES/ADR/SCR are decomposed into stories (Doc 05), the repo is built from §9 (Doc 06), and everything is verified in the RTM (Doc 08).
