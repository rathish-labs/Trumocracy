# Session memory — project-manager — 2026-08-09T01:00

```
Role:        project-manager
Product:     Trumocracy
Session:     2026-08-09T01:00 (ISO-8601)
Phase:       Define
Outcome:     Doc 13 written at v1.0.0 / Status: In Review. Gate-1 packet assembled inside it.
             STOPPED at Gate 1 — the human approver decides. I do not approve gates.
```

## 1. What I did

Wrote **one** document: `/home/user/Trumocracy/docs/13-project-plan.md` (PLAN-TRUMOCRACY v1.0.0)
from `docs/templates/13-project-plan.template.md`, anchored to Doc 01 §C (metrics), Doc 02
(requirements, `CON-007` appetite, `RISK-01`..`RISK-16`, `OI-01`..`OI-05`), Doc 05 (`EP-01`..`EP-10`,
`NF-01`..`NF-08`) and `ADR-001`..`ADR-014`.

No other document, no code, no ADR touched. No `Edit`, no `Bash` used. Sub-agents **not** invoked
this session — the task was scoped to authoring Doc 13.

## 2. Decisions made (and why)

1. **Gate 2 re-based from 2027-02-15 to 2027-05-14 (+13 weeks).** The critical path is
   cryptographic, not featural: six phase-2 ceremonies at ≥500 contributors each (`ADR-005`), two
   independent audits in parallel, 5 weeks of remediation to zero critical/high (`NFR-009`), and a
   **30-day on-chain registry timelock** (`ADR-003`/`ADR-010`). None of these compress with effort.
2. **Phase 3 is the launch, not Phase 2.** A production rollout with MACI OFF is voting without
   coercion resistance, which violates Must requirements `BR-011`/`NFR-003`. Phase 2 is a **dark**
   mainnet phase. This is why Gate 2 sits immediately before the Phase-3 rollout.
3. **Budget costed honestly: USD 4.55M against a USD 4.2M appetite** — −USD 0.35M with zero
   contingency (`RISK-19`). Three costed levers presented; **L2 recommended** (launch in 1 pilot,
   roll the other 2 post-launch → ≈USD 4.13M, ~1.7% contingency). L3 (hold the date, cut scope) is
   **refused** as non-viable because the only scope that fits drops a Must guardrail.
4. **Cutting features does not buy time.** Recall deferral (`OI-02`) frees ~3 weeks on the *feature*
   path, which is not the critical path. Stated explicitly so the approver does not mistake the
   money lever for the time lever.
5. **Added `RISK-17`..`RISK-21`** to §6 (register of record) — delivery/schedule risks the PM owns
   and that did not belong in a requirements doc. No ID reused; `RISK-01`..`RISK-16` carried across
   unchanged in meaning, with `L`/`I` from Doc 02, exposure = L×I, and the ADR carrying each
   mitigation named.
6. **Named three previously unnamed role holders** (PM Ana-Maria Petrescu, Eng Lead Samuel Oyelaran,
   Test Lead Ji-woo Park). All other names **reused verbatim** from Doc 02 §2.7 — no conflicting
   names invented. 15 named in Doc 02 + 3 = exactly the 18 of `CON-007`, which surfaced the ~4.5 FTE
   structural engineering gap in §8.3.
7. **Recorded `OI-05` as resolved-in-design, pending product confirmation** — `ADR-004` §2 escalates
   an action's anonymity scope to the nearest ancestor region meeting `k ≥ 1000`. Neither `NFR-002`
   nor `BR-004` is weakened; no requirement text changes. PM recommendation: confirm.
8. **Raised two governance exceptions** the approver must record (§13.4).

## 3. Governance exceptions raised (need a human decision at Gate 1)

- **`E-01` — design produced before Gate 1.** `ADR-001`..`ADR-014` are all `Status: Accepted`, dated
  2026-08-08, i.e. **14 days before the Gate-1 target**. CLAUDE.md: *"Nothing is designed until this
  clears."* Options offered: ratify retrospectively with re-baselining at MS-02 / re-issue after
  Gate 1 / reject.
- **`E-02` — PO and Principal Architect are the same person.** Priya Raghunathan signs Doc 02 as
  Product Owner and all 14 ADRs as Principal Architect. Breaks RACI separation (PO is **A** on
  Gate 1; Architect is **A** on ADRs) and matters specifically for `OI-05`, where the PO must
  confirm the architect's answer. Logged as `RISK-21` (exposure 15) and `DEP-09`.

## 4. Blocking the Gate-1 presentation (not yet satisfiable)

**`artifacts/reviews/` is empty.** Per CLAUDE.md and the SubagentStop hook, Gate 1 cannot be
presented until a **passing `document-review` report exists for the current version of Docs 01, 02,
05 and 13** — business mode, ≥95% and zero critical/high/medium, run by a **neutral (non-owning)**
role. **Doc 13 must be reviewed by a role that is not the project-manager** (never self-review).
Marked `N/A — not yet produced` in the packet; never fabricated.

## 5. Open items I own

- Assign a neutral role to run `document-review` (business mode) over Docs 01/02/05/13 v1.0.0;
  route FAILs to the **owning** role for a new version; cap 5 cycles then ESCALATE for recorded
  human approval.
- Present the Gate-1 packet (Doc 13 §13) to the human approver. **I do not approve it.**
- Begin weekly `artifacts/status/STATUS-WBR-<YYYY-Www>.md`; daily only on demand.
- Track `MS-04` (**2026-10-15**, both audit firms contracted) as the first irreversible date after
  Gate 1 — missing it costs ~10 weeks, not two.
- Re-plan Doc 13 at Gate 1 with the five `OI` decisions, `E-01`/`E-02` and the appetite decision.

## 6. IDs touched

- **Created:** `MS-01`..`MS-15`, `WS-01`..`WS-13`, `DEP-01`..`DEP-10`, `A-PLAN-01`/`A-PLAN-02`,
  `O-1`..`O-11`, `KC-1`..`KC-7`, `KC-P1`..`KC-P3`, `E-01`/`E-02`, **`RISK-17`..`RISK-21`** (new).
- **Referenced, not modified:** `BR-001`..`BR-012`, `FR-001`..`FR-061`, `NFR-001`..`NFR-026`,
  `CON-001`..`CON-012`, `RISK-01`..`RISK-16`, `TD-01`..`TD-06`, `OI-01`..`OI-11`, `A-01`..`A-06`,
  `EP-01`..`EP-10`, `NF-01`..`NF-08`, `ADR-001`..`ADR-014`.
- **Not touched:** no `DES`, no `US`, no `UT`, no `TC`, no `REF`. No `SCR` assignment.

## 7. Notes for downstream roles (selective recall hints)

- **Neutral reviewer (document-review):** Doc 13 §13.1 self-declares two ⚠ and two ❌ rows — the
  appetite variance and the missing review reports are known, not hidden. Doc 13 §6 is the risk
  **register of record**; Doc 02 §10 and Doc 03 §13 reference it and must not keep competing copies.
- **architect (post-Gate-1):** `OI-01` and `OI-04` feed `ADR-004` directly; if Gate 1 decides
  differently, re-baseline at `MS-02` (2026-09-11). `MS-06` circuit spec freeze is **2026-12-11** and
  is a hard freeze — the ceremony and audit dates hang off it.
- **engineer:** `MS-03` (2026-09-14) is repo scaffold + UT standard + CI dependency check + on-chain
  `FeatureFlags` registry, **before** feature code (`ADR-011`, Coding & UT rule). Phase-1 flag
  posture: elections/recall/treasury/fork/MACI all **OFF**, and proven OFF at `MS-05`.
- **tester:** Gate 2 needs the `ADR-005` mandatory ZK test classes — `circomspect` in CI,
  differential tests (`packages/protocol` vs deployed contract), and **negative tests asserting a
  malformed witness fails**. Positive tests alone prove nothing against an under-constrained circuit.
  `TC-EXIT-*` (party export/reconstitute, `NFR-018`) is a first-class CI flow.
- **reviewer-qa:** Gate 2 bar is zero critical **and** zero high open across **both** audits, plus
  RTM zero gaps in all 42 Must FR and 22 Must NFR rows.
- **sre:** rollback drill < 15 min (`NFR-020`, `NF-07`) incl. proof that an open ballot's flag cannot
  be changed mid-ballot; staged 1→10→50→100% in the lead pilot only, min 5 days per stage.
- **Everyone:** the ten items in Doc 13 §3.3 are exactly what the Gate-2 approver will be shown.
