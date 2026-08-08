# Refine Log — <product>

```
Document ID:   REFINE-<product>
Version:       0.1.0
Status:        Living (running register of production learnings)
Detector:      sre (captures entries + routes the log)
Decider:       product-owner (promotes worth-it learnings / closes the rest)
Last updated:  <YYYY-MM-DD>
```

> Running register of what production taught us. The **sre** captures `REF-##` entries continuously
> and **routes** the log to the **product-owner** — it does **not** decide what to build. The
> **product-owner** promotes worth-it learnings into new `BR/FR` in Doc 02 (Source = `REF-##`) and
> closes the rest. A promoted refine bet **re-enters the SOP at the top and passes through BOTH
> gates** — refine never bypasses governance. See `docs/templates/refine-log.template.md` for the
> full field guidance.

## 1. Learnings register
| REF | Date | Signal source | What production taught us | Severity | Promote? | Decision (by PO) | Promoted to | Status |
|-----|------|---------------|---------------------------|----------|----------|------------------|-------------|--------|

## 2. Routing log (sre → product-owner)
| Date | Trigger (weekly · or threshold: which signal breached) | Entries routed (REF-##) | Routed to |
|------|--------------------------------------------------------|-------------------------|-----------|

## 3. Promotion decisions (product-owner)
| REF | Decision | New requirement(s) in Doc 02 | Re-enters at | Rationale |
|-----|----------|------------------------------|--------------|-----------|
