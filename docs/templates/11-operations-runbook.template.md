# Operations Runbook — TEMPLATE

```
Document ID:   OPS-<product>
Version:       <semver>
Status:        Living
Owner:         <SRE / Service Owner — named>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Google SRE Workbook + Production Readiness Review. **Produced in:** Operate (authored before launch). 
> _SLOs, monitoring, alert→action playbooks, incident response, on-call, and routine maintenance._

---

## 1. Service summary
| Field | Value |
|-------|-------|
| Service / ID | <…> |
| Criticality / tier | <Tier-1/2/3> |
| Owner / on-call | <named / rotation> |
| Dependencies | <upstream/downstream> |
| Kill switch | <flag → 0%> |

## 2. Architecture refresher (1 diagram + link to SDD)

## 3. SLIs / SLOs / error budget
| SLI | SLO | Window | Error budget |
|-----|-----|--------|--------------|
> _Error-budget policy: when exhausted → freeze changes, prioritize reliability._
### 3.1 Burn-rate alerting
> _Alert on **how fast** the error budget is being consumed, not just threshold breaches — fast-burn (page now) vs slow-burn (ticket). State the windows & multipliers._
| Burn-rate alert | Window(s) | Threshold | Action |
|-----------------|-----------|-----------|--------|
| Fast burn | <e.g. 1h & 5m> | <14.4×> | page on-call |
| Slow burn | <e.g. 6h & 30m> | <3×> | open ticket |

## 4. Monitoring & dashboards (links: health, SLO, business, traces)

## 5. **Alert → action playbooks**  ⭐ (one per alert)
```
Alert:       <name / condition>
Symptom:     <what users/systems see>
Likely cause:<…>
Diagnosis:   <steps / queries>
Mitigation:  <first action — often "flag → 0%">
Escalate if: <condition> → <who>
```

## 6. Incident response
### 6.1 Severity definitions (Sev-1…4) & response SLAs
### 6.2 Process: detect → mitigate → assess → comms → resolve → **blameless postmortem**
### 6.3 Incident Commander & roles
### 6.4 Communication templates & stakeholders
> _Golden rule: for any customer-impacting Sev, mitigate (flag → 0%) first, diagnose after._

## 7. On-call & escalation (rotation, paths, contacts)

## 8. Common operational tasks (with commands)
```
# disable feature / scale / rebuild cache / check lag / rotate secret
```

## 9. Capacity & scaling (signals, limits, autoscale config)
## 10. Backup & recovery (what, cadence, **RTO / RPO**, restore test)
## 11. Disaster recovery (failover steps, DR drill cadence)
## 12. Routine maintenance schedule (patching, audits, drills)
### 12.1 Toil tracking & reduction
> _Log recurring manual operational work; cap toil (e.g. < 50% of on-call time) and convert the top items into automation backlog items (Doc 05)._
| Toil task | Frequency | Time/occurrence | Automation candidate? |
|-----------|-----------|-----------------|-----------------------|
## 13. Security operations (secret rotation, access review, audit logs)
## 14. Dependencies & their failure handling
## 15. Known issues & workarounds
## 16. Contacts & links (Doc 10, Doc 12, dashboards)

---
### Related
Deploy/rollback → Doc 10; service record → Doc 12.
