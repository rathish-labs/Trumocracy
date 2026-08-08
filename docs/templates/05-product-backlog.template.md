# Product Backlog — Epics / Features / Stories — TEMPLATE

```
Document ID:   BKLG-<product>
Version:       <semver>
Status:        Living
Owner:         <Product Owner — named>
Source:        SRS-<product>, SDD-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** SAFe (Epic→Capability→Feature→Story) + Atlassian + Mike Cohn user-story standard. **Produced in:** Coding & UT (living). 
> _Every story maps to the requirement(s), design element(s), screen(s), and test(s) that prove it._

---

## 1. Product goal & link to vision (PR-FAQ)
## 2. Backlog structure & hierarchy
> _Theme → Epic (EP) → Feature (FE) → User Story (US) → Task. NFRs appear as explicit backlog items, not assumptions._

## 3. Prioritization framework
> _Pick one and state it: WSJF (SAFe) / RICE / MoSCoW / Kano. Show the scoring._

## 4. Epic template
```
EP-##  <title>
Outcome hypothesis:  We believe <capability> will achieve <outcome>; we'll know when <metric>.
Business value / link: BR-###
In scope / Out of scope:
Success metric:
Features: FE-###, FE-###
Status: Funnel | Analyzing | Backlog | Implementing | Done
```

## 5. Feature template
```
FE-###  <title>   (Epic: EP-##)
Benefit hypothesis:
Acceptance (feature-level):
Maps to: FR-###, DES-###, SCR-##
Stories: US-####, US-####
```

## 6. User Story template (the reusable atom)
```
US-####  <title>   (Feature: FE-###)
As a <persona>, I want <capability>, so that <benefit>.

Acceptance criteria (Gherkin):
  Given <…> When <…> Then <…>

Implements:   FR-### · DES-### · SCR-##
Verified by:  TC-#### (+ UT-#### )
Size/estimate: <points>          Priority: <…>
Dependencies:  <US/external>
INVEST check:  Independent · Negotiable · Valuable · Estimable · Small · Testable
Definition of Ready: [ ] linked req+design  [ ] AC written  [ ] test IDs assigned  [ ] owner named
Definition of Done:  [ ] merged behind flag  [ ] UT+contract green  [ ] TC passing  [ ] telemetry  [ ] a11y  [ ] RTM row complete
```

## 7. Screen / UX inventory (categorized under features)
| Screen | Name | Feature | Implements |
|--------|------|---------|-----------|
| SCR-## | <…> | FE-### | FR-…, DES-… |

## 8. Non-functional backlog items (perf, security, a11y, observability work)
## 9. Estimation approach (points/relative; reference stories)
## 10. Backlog refinement cadence & WIP limits
## 11. Definition of Ready / Definition of Done (team-wide)
## 12. Traceability (story ↔ requirement ↔ design ↔ test — Doc 08)

---
### Downstream
Stories are built per Doc 06 (Coding & UT), verified by Doc 07, reconciled in Doc 08.
