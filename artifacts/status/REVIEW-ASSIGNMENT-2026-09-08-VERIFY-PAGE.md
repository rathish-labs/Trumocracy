# Review assignment — `/verify` page honesty ruling, confirmations, stop-hook wording

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-08
Trigger:       artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md (approver, Rathish Kumar):
               1. /verify page — product-owner chooses (a) flag-gate or (b) "planned — not yet
                  implemented" labelling; engineer applies; UT guard; FR-131-honest in both locales.
               2. Two PM rulings-in-absence CONFIRMED (Doc 01 integrity class; /verify citation).
               3. Stop-hook block wording must not invite the blocked agent to author the report.
Scope:         Product code limited to the /verify page, its copy (en + ar), its guard and any
               flag wiring the PO's choice needs. hooks/check_gates.py wording (framework, not
               product). Doc 06 registers the change; Doc 02 §13 (j) records the ruling; README's
               /verify inventory line is brought current. TC rows for the new UT are OWED to the
               tester at the next Doc 07/08 touch (Doc 08 just closed on the cap — not reopened
               for a TC row).
Rule:          Reviewer assignment is recorded HERE before dispatch. A role that hits the
               SubagentStop block ROUTES to the PM; it never authors the review whose absence is
               blocking it. (The hook text itself is being fixed this session to say so.)
```

## Ownership and rework

| Work | Owner | Target | Artifact |
|---|---|---|---|
| (a)/(b) choice on engineering grounds; decision record | product-owner (Priya Raghunathan) | `artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md` §5 (PO's choice appended by the PO's own record) | `artifacts/product-owner-2026-09-08T1000-verify-ruling.md` |
| Doc 02 §13 (j): record decision 1 and the PO's choice; widen (j) to the `/verify` page | product-owner | v2.17.1 → **v2.17.2 In Review** (patch — tracked-routing block only, no normative change) | `artifacts/product-owner-2026-09-08T1000-doc02-spec.md` |
| `/verify` page per the PO's choice (en + ar), UT guard, Doc 06 §7 + UT registry; `hooks/check_gates.py` block wording | engineer (Samuel Oyelaran) | Doc 06 v2.7.0 → **v2.8.0 In Review** | code + Doc 06 (engineer has Edit) |
| README `/verify` inventory line (and CONTRIBUTING if it repeats the "unruled" claim) brought current | technical-writer (Maya Lindqvist) | root files | — |

## Neutral reviewers (recorded BEFORE dispatch)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 06 v2.8.0 (+ the code drop, incl. the hook wording change) | technical | **tester** (new instance) | Precedent (Doc 06 v2.6.0/v2.7.0); has Bash to run the suite and the audit; the tester is the role that raised the hook-wording evidence and is the natural verifier that the new text routes correctly | engineer (owner); product-owner (chose the remedy) |
| Doc 02 v2.17.2 | business | **reviewer-qa** (new instance) | Precedent (v2.17.0/v2.17.1) | product-owner (owner); tester (Doc 08 rows) |
| README / CONTRIBUTING delta | business, FR-131(e)/FR-132(d) discipline | **product-owner** (new instance) — report `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-08-verify.md`, NOT under artifacts/reviews/ | RACI: Accountable for public-facing claims | technical-writer (author) |

- General-purpose agents are never reviewers. Reviewers score and list only. Rework returns to the
  owning role as a new version. Cap 5, then ESCALATE.
- Note paths are pre-registered by the PM; roles never open `artifacts/memory-index.json`.
- Other documents blocking mid-session is expected; do not self-appoint.

## Outcomes (recorded by the PM as each loop closed)

| Document | Cycle 1 | Cycle 2 | Final |
|---|---|---|---|
| Doc 06 | v2.8.0 FAIL 95% (0C/0H/1M/3L; tester) — ISS-01 Medium: §3 note and §7 item 26(c) still state UT-0889 TC rows owed (Doc 07 v2.8.1 / Doc 08 v2.11.3 carry TC-3570..3576); routed to the engineer → v2.8.1 | v2.8.1 PASS 97% (0C/0H/0M/3L; tester; code byte-identical to cycle 1 by MD5; npm test 640/640) | **Approved v2.8.1** (3 Lows carried) |
| Doc 02 | v2.17.2 FAIL 92% (0C/0H/1M/9L; reviewer-qa) — ISS-01 Medium: (j)(3) asserted "applied" + dangling Doc 06 v2.8.0 pin; routed to the product-owner → v2.17.3 | v2.17.3 PASS 96% (0C/0H/0M/10L; reviewer-qa) | **Approved v2.17.3** (10 Lows carried) |
| README/CONTRIBUTING delta | FAIL 92% (0C/0H/2M/5L; product-owner reviewer; PUBLIC-FILES-REVIEW-2026-09-08-verify.md) — ISS-01 README:133-134 presents retained design copy as the future promise; ISS-02 README:32-33 present-tense unbuilt legal-age check. PM ruling: ISS-02 is IN SCOPE for cycle 2 (same public-surface honesty class the approver directed closed; not carried). Routed to the technical-writer | PASS 97% (0C/0H/0M/3L; product-owner reviewer; PUBLIC-FILES-REVIEW-2026-09-08-verify-cycle2.md); W-1 (640 figure) re-checked against Doc 06 v2.8.1 and holds | **PASS cycle 2** (3 Lows: README:139-140 "document" → "document number"; long sentence README:137-140; CONTRIBUTING (1)/(2) pinned twice) |
