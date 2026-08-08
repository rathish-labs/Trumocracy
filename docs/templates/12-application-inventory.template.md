# Application Inventory (Service Record) — TEMPLATE

```
Document ID:   INV-<product>
Version:       <semver>
Status:        Living (reviewed quarterly)
Owner:         <Service Owner — named>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** CMDB / Common Service Data Model + Production Readiness. **Produced in:** Operate (living).
> _The authoritative inventory for audits, DR planning, cost, and on-call routing._

---

## 1. Service identity
| Field | Value |
|-------|-------|
| Service name / ID | <…> |
| Business capability | <BR link> |
| Tier / criticality | <…> |
| Lifecycle status | Planned / Active / Deprecated / Retired |
| Owner / Product owner | <named> |
| On-call rotation | <…> |
| Repository | <link> |

## 2. Components / assets
| Asset | Type | Design ID | Env | Notes |
|-------|------|-----------|-----|-------|

## 3. Dependencies (upstream/downstream + failure handling)
| Dependency | Direction | Type | Failure handling |
|------------|-----------|------|------------------|

## 4. Data
| Data | Classification | Store | Retention | Residency | PII? |
|------|----------------|-------|-----------|-----------|------|

## 5. Environments & endpoints
| Env | Endpoint | Flag default | Access |
|-----|----------|--------------|--------|

## 6. Infrastructure footprint (compute, storage, network, regions)
## 7. Security & compliance controls (authN/Z, encryption, audits, standards)
## 8. SLAs / SLOs (link Doc 11) & support hours
## 9. Cost & capacity (run cost, budget owner, scaling limits)
## 10. Licenses & third-party agreements
## 11. Recovery
| Aspect | Value |
|--------|-------|
| RTO / RPO | <…> |
| Kill switch | <…> |
| Backup location | <…> |
| DR drill cadence | <…> |

## 12. Change history (version, date, change, by)
## 13. Links to all suite docs (01–14) & dashboards

---
### Related
Operate → Doc 11; deploy → Doc 10; design → Doc 03.
