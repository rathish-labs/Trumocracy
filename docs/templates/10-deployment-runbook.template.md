# Deployment Guide & Release Runbook — TEMPLATE

```
Document ID:   DEPLOY-<product>
Version:       <semver>
Status:        Approved (Gate 2)
Owner:         <Release Manager / SRE — named>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Google SRE + AWS Well-Architected (Operational Excellence). **Produced in:** Launch. **Approved at:** Gate 2.
> _So any on-call engineer can run a release safely: pre-checks, staged rollout, verification, and rollback._

---

## 1. Overview
### 1.1 Deployment architecture (CI/CD, environments, exposure control)
### 1.2 Release type (standard / hotfix / config-only) & versioning

## 2. Prerequisites & dependencies (access, infra, upstream readiness)

## 3. Pre-deployment checklist (Gate 2 entry)
- [ ] RTM 0 gaps (Doc 08)
- [ ] All suites green; 0 Sev-1/2 (Doc 07)
- [ ] Load test meets NFRs
- [ ] Security + a11y scans clean
- [ ] Dashboards + alerts live (Doc 11)
- [ ] **Rollback drill executed** in staging
- [ ] On-call owner assigned for the window
- [ ] Release notes published (Doc 09)
- [ ] Maintenance window / comms scheduled

## 4. Environments & promotion path (dev → CI → staging → prod)

## 5. Deploy procedure (step-by-step, copy-paste commands)
```
# 1. Tag & build
# 2. Deploy artifacts with flag OFF (dark)
# 3. Smoke test (synthetic, test account)
```
### 5.1 Configuration / feature-flag setup
### 5.2 Database / schema migration steps (forward + reversible)
### 5.3 Data backfill / migration **dry-run** (rehearse on a prod-like copy; verify row counts & integrity before the real run)

## 6. Staged rollout plan (metric-gated)
| Stage | Cohort | Hold | Promote only if |
|-------|--------|------|-----------------|
| Canary | 1% | <time> | error ≤ baseline; p95 < target; no Sev |
| Early | 10% | | metric ≥ control |
| Half | 50% | | stable |
| Full | 100% | — | all gates passed |
### 6.1 What to watch (the dashboards/metrics per stage)

## 7. Verification (smoke + key journeys + SLO check)

## 8. **Rollback / backout plan**  ⭐
> _Target time; triggers; exact steps; data considerations._
- **Triggers:** <Sev-1; p95 > X; error spike; data concern>
- **Procedure:** <flag → 0%; or redeploy previous tag; or reverse migration>
- **Time target:** <e.g. < 1 min via flag>
- **Rule:** rollback first, diagnose after.

## 9. Post-deployment validation & sign-off
- [ ] 100% stable for <24 h>
- [ ] Metrics vs PR-FAQ targets captured (refine loop)
- [ ] Application inventory updated (Doc 12)
- [ ] **Feature-flag cleanup scheduled** — fully-rolled-out flag and its dead branch removed (ticket: <…>) so the flag doesn't become permanent debt

## 10. Communications plan (who is told, when, channels)
## 11. Roles & on-call (RACI for the window)
## 12. Maintenance window & customer impact notice

---
### Downstream
Ongoing operation → Doc 11; service record → Doc 12.
