# Release Notes — TEMPLATE

```
Document ID:   REL-<product>-<x.y.z>
Version:       Release <x.y.z>   (SemVer)
Status:        Draft | Approved (Gate 2)
Owner:         <Release Manager — named>
Source:        CHANGELOG.md, RTM-<product>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Keep a Changelog + Semantic Versioning. **Produced in:** Launch. **Approved at:** Gate 2.
> _Customer-facing section is plain language; internal section carries the facts and traceability._

---

## Customer-facing notes
### ✨ Highlights
> _1–3 sentences on the headline value._

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security

### Known issues / limitations
### Upgrade / migration notes (if any)
### Breaking changes & compatibility (do not skip)

### Deprecation schedule
> _Anything announced-deprecated or being sunset: what, replacement, and the date it stops working. Give consumers runway — don't surprise-remove._
| Deprecated | Replacement | Deprecated in | Removed in (date) |
|------------|-------------|---------------|-------------------|
| <…> | <…> | <x.y.z> | <YYYY-MM-DD> |

### Developer / API changelog (if the product exposes an API)
> _Consumer-facing API surface only: endpoints/fields/contracts added, changed, deprecated, removed; version & compatibility. Mirrors the OpenAPI diff; links to the developer reference._

---

## Internal release record
| Field | Value |
|-------|-------|
| Release / SemVer | <x.y.z> |
| Date | <YYYY-MM-DD> |
| Feature flag(s) | <name> |
| Rollout plan | 1% → 10% → 50% → 100% |
| Requirements delivered | <BR/FR/NFR ids> (RTM link) |
| Epics / stories | <EP/US ids> |
| Test status | <pass/total; open Sev-1/2 = 0> |
| NFR verification | <perf p95, availability, …> |
| Security / a11y | <0 critical> |
| Dependencies | <services/vendors> |
| Rollback | <flag-off, < 1 min> |
| Approvals (Gate 2) | Product · Eng · QA · SRE · Security |

### Changelog (this release)
> _Pulled from Conventional Commits / CHANGELOG.md._

### Contributors
### Links (PR-FAQ, RTM, deployment runbook, dashboards)

---
### Downstream
Proceed to staged rollout per Doc 10; service record updated in Doc 12.
