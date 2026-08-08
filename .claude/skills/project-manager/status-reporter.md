# Status-Reporter Capability (project-manager)

The project-manager owns **executive status reporting**. This capability produces two
artifacts on a **fixed structure**, every time, sourced **only** from real repo artifacts.

- **`artifacts/status/STATUS-DAILY-<YYYY-MM-DD>.md`** — a single **Page Zero** one-pager,
  on demand.
- **`artifacts/status/STATUS-WBR-<YYYY-Www>.md`** — the **Weekly Business Review**: Page Zero
  (slide 1) + eight detail sections. `<YYYY-Www>` is the ISO-8601 week (e.g. `2026-W25`).

## Format DNA (consolidated, non-negotiable)

1. **Page Zero first (Amazon WBR).** The one-pager leads. In the WBR it is literally slide 1;
   the detail sections only exist to support a number already on Page Zero.
2. **BLUF (conclusion first).** State the verdict — overall RAG + the one-sentence so-what —
   before any evidence. A reader who stops after the BLUF still has the headline.
3. **Variance-based (report the delta, not the plan).** Surface only what is **off-plan** or
   **changed**. Do not re-read the plan back to the reader. On-track items get one line; ink
   goes to exceptions.
4. **Same fixed structure every time.** Identical headings, identical order, identical metric
   rows — so a reader compares this report to the last one at a glance. Never reorder or drop
   a section; an empty section says "nothing off-plan" or "N/A — not yet produced."

## Cardinal rules (these override everything)

- **Cite every figure.** Each number/state ends with its source: `(src: docs/08 §6)`,
  `(src: docs/07 §7)`, `(src: docs/13 §6)`, `(src: git log)`, `(src: artifacts/<note>)`.
- **Never fabricate.** If a source document does not exist yet (normal in early phases), the
  field is exactly **`N/A — not yet produced`**. Do not estimate, infer a plausible value, or
  carry a number forward without its source. A missing source is itself a reportable fact.
- **Real artifacts only.** Every value traces to a file under `docs/`, `artifacts/`,
  `hooks/`, or to `git`. Nothing comes from the PM's own reasoning or from another role's
  context (artifact-bus rule).
- **No new gate authority.** Reporting is informational. The report never approves a gate; it
  states readiness against the gate's documented preconditions.

## Source map — where every field comes from

Read these (selective recall), never invent them. Canonical output filenames:

| Field on the report | Source artifact + location |
|---|---|
| Product name | `docs/01-press-release.md` header `Document ID: PR-<product>`, else `docs/13-project-plan.md` `PLAN-<product>` |
| Date | the run date (ISO-8601); for WBR also the ISO week |
| Current phase | `docs/13-project-plan.md` §3 (which milestone/gate is the live one); cross-checked against which `docs/0N-*.md` exist |
| Gate state | `docs/13` §3 milestones + `docs/08-traceability-matrix.md` §9 gate verdict + PM gate-packet notes in `artifacts/` |
| PR-FAQ success metrics (target vs actual) | **Target:** `docs/01-press-release.md` §C. **Actual:** Operate signals (`docs/11-operations-runbook.md` / `docs/12-application-inventory.md`) once launched — pre-launch = `N/A — not yet produced` |
| Requirements done / total | **Total:** `docs/02-requirements-specification.md` §3 (BR) + §4 (FR) + §6 (NFR) counts. **Done:** rows with passing status in `docs/08` §3 |
| RTM coverage % + gaps | `docs/08-traceability-matrix.md` §6 coverage dashboard (Traced/Total) and §7 gap log (open gaps + owner + due) |
| Test pass rate + open Sev-1/2 | `docs/07-test-cases.md` §7 exit summary (pass rate, open defects by severity) and §6 execution log |
| Top-3 risks | `docs/13-project-plan.md` §6 risk register — **register of record** — ranked by Exposure, Open first |
| Top-3 blockers + owners | `docs/13` §5 dependencies with Status = blocked/slipped (owner + needed-by) ∪ realized §6 risks ∪ `docs/08` §7 gap-log owners |
| What changed since yesterday / last week | diff vs the previous `artifacts/status/STATUS-*` file + `git log` since that file's date + new entries in `artifacts/memory-index.json` |
| Next gate + ETA | `docs/13` §3 target window for the next `Gate?` milestone; gate preconditions from `CLAUDE.md` "The two gates" |
| Design / Build detail | `docs/03-architecture-and-design.md`, `docs/04-test-strategy.md`, `docs/05-backlog.md`, `docs/06-coding-and-ut.md`, `git log` |
| Timeline vs appetite | `docs/13` §8 appetite per wave + §3 target windows + §11 re-plan log |
| Decisions needed | open items flagged in role `artifacts/` notes, `docs/13` §5/§6, and unmet gate preconditions that require a human/PO call |

## RAG derivation (deterministic — show the rule, not a vibe)

Compute, do not feel. Evaluate top-down; first match wins:

- **🔴 RED** — a one-way door is blocked: a gate precondition due in the current/past wave is
  unmet; **or** `docs/08` shows any **Must-row gap** at or past Verify; **or** an open
  **Sev-1** defect (`docs/07` §7); **or** a **realized** High-exposure risk with no live
  mitigation (`docs/13` §6); **or** a blocker past its needed-by with no fallback (`docs/13` §5).
- **🟡 AMBER** — moving but off-plan: a success metric off-target yet within appetite; **or**
  open **Sev-2**; **or** RTM gaps with owner + due still in the future; **or** next-gate ETA
  slipping inside the current wave; **or** a High/Med risk trending worse.
- **🟢 GREEN** — on plan: no open Must-row gaps, suites green (or the phase does not yet
  require them), no overdue blockers, no metric breaching its guardrail.
- **⚪ N/A — insufficient data** — the artifacts needed to judge do not exist yet (e.g. no
  `docs/13` plan, no `docs/01` PR-FAQ). State this honestly; do **not** default to Green.

Always print the **one driver** behind the colour, e.g. `🔴 RED — RTM has 2 open Must rows
(src: docs/08 §7)`.

---

## Template A — STATUS-DAILY (Page Zero one-pager)

Write to `artifacts/status/STATUS-DAILY-<YYYY-MM-DD>.md`. This block IS Page Zero; the WBR
reuses it verbatim as slide 1.

```markdown
# STATUS — DAILY · <Product or "N/A — not yet produced"> · <YYYY-MM-DD>

**Overall:** <🟢/🟡/🔴/⚪ + one-driver>   **Phase:** <phase (src)>   **Gate:** <gate state (src)>

**BLUF:** <one sentence: the verdict and the single so-what. Conclusion first.>

### Key metrics (variance — ✅ on-plan · ⚠ off-plan)
| Metric | Target | Actual | Var | Source |
|---|---|---|---|---|
| PR-FAQ success metric(s) | <target / N/A> | <actual / N/A> | <✅/⚠/—> | docs/01 §C |
| Requirements done / total | <n> | <m> | <✅/⚠> | docs/02 · docs/08 §3 |
| RTM coverage % (gaps) | 100% (0) | <% (k gaps)> | <✅/⚠> | docs/08 §6–7 |
| Test pass rate (open Sev-1/2) | 100% (0/0) | <% (a/b)> | <✅/⚠> | docs/07 §7 |

### Top 3 risks (by exposure)
1. <RISK-## · risk · exposure · owner> (src: docs/13 §6)
2. …
3. …

### Top 3 blockers (named owner each)
1. <what · owner · needed-by> (src: docs/13 §5 / docs/08 §7)
2. …
3. …

### What changed since yesterday
- <delta with citation> (src: git log / artifacts/…)   — or "No change since <prev file>."

### Next gate + ETA
<Gate N — precondition status — target window> (src: docs/13 §3)
```

Any field whose source is absent → literally `N/A — not yet produced`. If **no** product
artifacts exist, every data field is N/A, Overall = `⚪`, Phase = `Vision (pre-Gate-1)`, and the
BLUF says the product has not started producing artifacts.

---

## Template B — STATUS-WBR (weekly full report)

Write to `artifacts/status/STATUS-WBR-<YYYY-Www>.md`. **Slide 1 is Page Zero, byte-for-byte
the same structure as Template A** (for the week, not the day). Then exactly eight detail
sections, fixed order. Each section is **variance-only**: lead with what is off-plan/changed;
one line for "on track"; `N/A — not yet produced` where the source is absent.

```markdown
# STATUS — WBR · <Product or "N/A — not yet produced"> · <YYYY-Www>

## Page Zero
<the entire Template A block, scoped to the week>

---

## 1. Scope & Requirements
> Variance vs committed scope. (src: docs/02 §3/§4/§6, docs/01 §D, docs/13 §2)
- Requirements done/total, new/changed/deleted this week, scope added/cut, MoSCoW movement.

## 2. Design
> (src: docs/03, docs/04) — ADRs landed, design elements (DES) added/changed, open design questions.

## 3. Build
> (src: docs/06, docs/05 backlog status, git log) — stories merged vs in-flight, flags live, UT count, trunk health.

## 4. Quality
> (src: docs/07 §6–7, docs/08 §6) — pass rate trend, open defects by severity, RTM coverage trend, suites red/green.

## 5. Risks & Blockers
> (src: docs/13 §5–6) — new/realized/closed risks this week; blockers with owner + needed-by + fallback.

## 6. Gate Readiness
> (src: CLAUDE.md gates, docs/08 §9, docs/13 §3) — each precondition for the next gate: met / not-met + the evidence artifact.

## 7. Timeline vs Appetite
> (src: docs/13 §8, §3, §11) — wave appetite vs burn, milestone windows vs today, re-plan entries this week. Appetite, not estimate — flag scope flexed, not time slipped.

## 8. Decisions Needed
> (src: artifacts/ notes, docs/13, unmet preconditions) — each: the decision, the owner who must make it, the by-when, and what it blocks. Empty = "None open."
```

## Procedure (every run)

1. Read `CLAUDE.md` (gates, RACI), `docs/13` (plan), then each source doc in the map **that
   exists** — glob `docs/0*.md` and `docs/1*.md`; absent files become `N/A — not yet produced`.
2. Read the previous `artifacts/status/STATUS-*` (if any) and `git log` since its date to
   compute the "what changed" deltas.
3. Compute RAG by the rule above; record the single driver.
4. Render the fixed template; cite every figure; do not fabricate.
5. Write the file under `artifacts/status/`, then file the PM session-memory note to
   `artifacts/project-manager-<ISO8601>.md` and register it in `artifacts/memory-index.json`
   (the SubagentStop hook enforces this).
