# Requirements Traceability Matrix (RTM) — TEMPLATE

```
Document ID:   RTM-<product>
Version:       <semver>
Status:        Living (verified each gate)
Owner:         <Tester (author) / Reviewer-QA (verify) — named>
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Bidirectional RTM (ISO/IEC/IEEE 29148 traceability). **Produced in:** All phases (living). **Verified at:** each gate.
> _The single place the whole chain is verified. A blank cell in a Must row is a documentation defect that **blocks the gate**._

**Chain:** `BR → FR/NFR → DES (+ADR) → SCR → EP/FE/US → UT/TC → Status`

---

## 1. Purpose & how to read
## 2. ID scheme (restate prefixes)

## 3. Forward trace (requirement → everything)
| BR | FR/NFR | Design (DES/ADR) | Screen | Epic ▸ Feature ▸ Story | Test (UT/TC) | Status |
|----|--------|------------------|--------|------------------------|--------------|--------|
| BR-001 | FR-001 | DES-001 | SCR-01 | EP-01 ▸ FE-001 ▸ US-0001 | UT-…, TC-0001 | ☐ / ✅ |

## 4. Backward trace (test → requirement)
> _Spot-check: every TC/UT lists the US/FR it verifies. No orphan tests._

## 5. Risk → control → test
| RISK | Control (design) | Verified by |
|------|------------------|-------------|

## 6. Coverage dashboard
| Dimension | Total | Traced | Gaps |
|-----------|-------|--------|------|
| BR | | | |
| FR | | | |
| NFR | | | |
| Risks | | | |
| Stories | | | |
| Tests | | | |

## 7. Gap log (open traceability gaps + owner + due)
## 8. Change-impact view (when a requirement changes, what's affected)
## 9. Gate verdict & sign-off

---
### Gate rule
**0 gaps in Must rows = traceability criterion met.** Any open row → the gate stays shut.
