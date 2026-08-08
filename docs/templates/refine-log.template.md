# Refine Log — TEMPLATE

```
Document ID:   REFINE-<product>
Version:       <semver>
Status:        Living (running register of production learnings)
Detector:      sre (captures entries + routes the log)
Decider:       product-owner (promotes worth-it learnings / closes the rest)
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Lean/Continuous — _"learning in production is the deliverable"_ — + Shape Up betting.
> **Produced in:** Operate & Refine (living). **Routed at:** the weekly cadence **or** a threshold breach.
> _A running register of what production taught us. The **sre** captures entries **continuously** and
> **routes** the log to the **product-owner** — it does **not** decide what to build. The
> **product-owner** decides which learnings are worth a next bet and **promotes** them into new
> `BR/FR` in Doc 02, tagged with the `REF-##` origin. A promoted refine bet **re-enters the SOP at the
> top and passes through BOTH gates** like any other bet — refine **never** bypasses governance._

This is a **living Operate-phase register**, a companion to the numbered 14-doc suite (not a 15th
governed document). It is instantiated per product as `docs/refine-log.md`.

---

## 1. How to read
- **`REF-##`** — stable ID for one production learning. Never reuse or renumber.
- **Detector = sre** (opens entries, sets severity, routes). **Decider = product-owner** (Promote / Close).
- A `Promote? = Yes` entry becomes a new `BR/FR` in Doc 02 whose **Source** cites this `REF-##` — that
  is the traceable link back to the production signal.

## 2. Learnings register
> _One row per learning. The sre fills everything except the PO decision columns._
| REF | Date | Signal source | What production taught us | Severity | Promote? | Decision (by PO) | Promoted to | Status |
|-----|------|---------------|---------------------------|----------|----------|------------------|-------------|--------|
| REF-01 | <YYYY-MM-DD> | SLO / incident / metric / user-behavior | <observation, grounded in the signal — no speculation> | High / Med / Low | Yes / No / TBD | <PO rationale> | BR-### / FR-### / — | Open / Promoted / Closed |

## 3. Routing log (sre → product-owner)
> _Each time the sre routes the log (weekly cadence **or** a threshold breach), record it here. The sre
> **routes**; it does not decide what to build._
| Date | Trigger (weekly · or threshold: which signal breached) | Entries routed (REF-##) | Routed to |
|------|--------------------------------------------------------|-------------------------|-----------|
| <YYYY-MM-DD> | weekly · or `SLO breach` / `error-budget exhausted` / `change-failure spike` … | REF-## … | product-owner |

## 4. Promotion decisions (product-owner)
> _The decider's record. **Worth-it → Promote:** new `BR/FR` in Doc 02 (Source = `REF-##`), re-enters
> Gate 1. **Not worth-it → Close:** logged with a reason; no requirement created._
| REF | Decision | New requirement(s) in Doc 02 | Re-enters at | Rationale |
|-----|----------|------------------------------|--------------|-----------|
| REF-## | Promote / Close | BR-### , FR-### / — | SOP top → **Gate 1** | <why this is / isn't a next bet> |

---
### Governance
A promoted refine bet is an **ordinary bet**: it **re-enters the SOP at the top**
(product-owner → … → **Gate 1** → design → coding → verify → **Gate 2** → launch). **Refine never
bypasses the two gates.** The detector (sre) and the decider (product-owner) are deliberately
**different roles** — the role that sees the signal does not get to skip governance to act on it.
