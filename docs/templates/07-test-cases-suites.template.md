# Test Cases & Suites — TEMPLATE

```
Document ID:   TC-<product>
Version:       <semver>
Status:        Living
Owner:         <QA Lead — named>
Source:        MTP-<product>, BKLG-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** IEEE 829 test-case specification. **Produced in:** Coding & UT. **Approved at:** Gate 2.
> _Cases are grouped into the suites from Doc 04. Each has a stable `TC-####`, traces to the story/requirement it verifies, and is written so it can be automated._

---

## 1. Test case template (the reusable atom)
```
TC-####  <title>
Suite:        TS-<…>          Type: functional/edge/perf/sec/a11y/resilience
Priority:     P1 | P2 | P3
Verifies:     US-#### · FR-### / NFR-###
Preconditions:<state, fixtures, flag state>
Test data:    <inputs / fixture id>
Steps:        1. <…>  2. <…>
Expected:     <observable result, incl. timing/SLO where relevant>
Automation:   Automated | Manual   (link: <path/test id>)
Environment:  <CI/Staging/Prod-canary>
Status:       Not run | Pass | Fail | Blocked
```

## 2. Suite organization
| Suite ID | Group | Covers | Case range |
|----------|-------|--------|------------|
| TS-FUNC | Functional / E2E | FR-… | TC-…|
| TS-EDGE | Negative / edge / boundary | SDD §11 failure modes | TC-… |
| TS-PERF | Performance / load / soak | NFR-… | TC-… |
| TS-SEC | Security | NFR-… | TC-… |
| TS-A11Y | Accessibility | NFR-… | TC-… |
| TS-RES | Resilience / chaos / DR | NFR-…, RISK-… | TC-… |

## 3. Coverage checklist (don't skip)
- [ ] Every Must FR has ≥ 1 functional case
- [ ] Every NFR has a measuring case
- [ ] Every SDD §11 failure mode has a negative/edge case
- [ ] Boundary values covered (min, max, just-over, empty, null)
- [ ] Error & timeout paths covered
- [ ] Idempotency / retry / concurrency covered
- [ ] Security: authN, authZ/IDOR, injection, encryption
- [ ] Accessibility: automated scan + screen-reader/focus
- [ ] Rollback / kill-switch covered

## 4. Test data management (fixtures, masking, generation, refresh)
## 5. Automation mapping (case → automated test path)
## 6. Execution log (run, date, build, result, defect)
## 7. Exit summary (pass rate, open defects by severity, coverage vs RTM)
## 8. Traceability (case ↔ requirement/story — Doc 08)

---
### Downstream
Pass/fail rolls into release readiness (Doc 04 §5, Docs 09–10) and the RTM (Doc 08).
