# Session Note — project-manager (Ana-Maria Petrescu)

```
Role:      project-manager
Timestamp: 2026-08-21T0734
Phase:     Governance — ceremony contributor-count correction + proving-system decision
Product:   Trumocracy
```

---

## What was done this session

Recorded two approver decisions (Rathish, 2026-08-21) arising from the architect's
Powers-of-Tau ceremony analysis delivered in-session. Decision record written first (before
this note) for resilience against interruption. No numbered documents in `docs/` were
written or edited. No product code was written.

Note: a prior invocation of this assignment was terminated by a session usage limit before
writing anything — no partial artifacts exist; this note is the clean first record.

### Artifacts written / updated

| Artifact | Action | Description |
|----------|--------|-------------|
| `artifacts/status/DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` | **Created** | Decision record for REC-1 (contributor-count correction) and REC-2 (Groth16 Phase-1); verbatim quotes; clarification recorded/not-reconciled (one-vs-six circuit reading); correction sites; what this directs. |
| `artifacts/project-manager-2026-08-21T0734.md` | **Created** | This session note. |
| `artifacts/memory-index.json` | **Updated** (surgical append) | One new entry appended to "notes" array. |

---

## Decisions recorded

| Decision | Item | Disposition |
|----------|------|-------------|
| REC-1 | Contributor-count error | DECIDED — "six ceremonies at ≥500 contributors" was never a security requirement; Groth16 phase-2 is secure with a single honest contributor. PPoT Hermez reused at ~$0; contributor counts set by assurance with rationale, never by convention. Applies to all six Gate-2 circuits. |
| REC-2 | Proving system: Groth16 for Phase 1 | DECIDED — stay with Groth16; rationale: PPoT reuse collapses ceremony burden; cheapest on-chain verification; most auditor availability; existing SC-01 binding already Groth16-shaped. Accepted trade-off recorded: per-circuit phase-2 vs universal-setup amortisation; revisit trigger: Phase 2+ circuit-count growth. Near-irreversible, Charter-adjacent — to be recorded as ADR-022. |

### Clarification recorded, not reconciled

REC-1's "Phase 1 needs one circuit (Aadhaar enrolment)" is exact for the enrolment family
(FR-121 dividend: one class not three). The Gate-2 transcript set is six circuits (Aadhaar
enrolment + residency_member + party_member + tenure_member + two MACI circuits), all bound
to Must requirements (FR-006, FR-002, FR-023/027, FR-030..035) via Doc 08 G-CIRCUIT rows.
The five non-enrolment circuits are NOT cancelled. The practical difference is immaterial
post-correction (six small phase-2s batch into one campaign of days). The one-vs-six reading
is surfaced to Rathish for confirmation.

---

## Correction sites named

- ADR-005 Decision-2 (normative source of "≥ 500" figure)
- Doc 04 §Z6 ~line 508
- Doc 13 MS-08 row / WS-11 / §3.4 / comms row
- Doc 10 gate checklist ceremony entry
- Doc 09 release-readiness row
- GATE-STATUS current-state rows (additive correction pointer only)

Historical records (GATE1-DECISION-2026-08-09 S-01 row) never rewritten — dated correction
pointer only.

CAUTION: endorsement-floor `max(...,500)` constants and `UT-05xx` test IDs are unrelated;
not to be touched.

---

## Open items — pending application this session

| Item | Owner | Target |
|------|-------|--------|
| ADR-005 Decision-2 amendment (assurance-based contributor count) | architect (Ravi Deshmukh) | `docs/adr/ADR-005-zk-stack.md` |
| New ADR-022 (Groth16 Phase-1, near-irreversible/Charter-adjacent) | architect (Ravi Deshmukh) | `docs/adr/ADR-022-*.md` |
| Doc 03 ceremony-burden correction | architect (Ravi Deshmukh) | `docs/03-architecture-design-sdd.md` |
| Doc 04 §Z6 ~line 508 correction | architect (Ravi Deshmukh) | `docs/04-test-strategy-master-plan.md` |
| Doc 13 re-plan (waiting on REC-1 answer) | project-manager | `docs/13-project-plan.md` — next assignment |
| Gate-status additive correction | project-manager | `artifacts/status/GATE-STATUS-2026-08-09.md` — with Doc 13 re-plan |
| Doc 09 / Doc 10 exec-figure alignment | sre | `docs/09-release-notes.md`, `docs/10-deployment-runbook.md` |
| One-vs-six circuit clarification | Rathish (approver) | Confirmation pending — surfaced in decision record §3 |

---

## Gate status

- **Gate 1:** APPROVED (unconditional). All OIs through OI-20 closed.
- **Gate 2:** NOT READY. RTM (Doc 08 v2.1.0): 125 Must rows / 12 COMPLETE / 113 OPEN. Legal-opinion line item (India/Aadhaar): NOT STARTED. Ceremony-burden figures being corrected this session (gate-status correction additive, lands with Doc 13 re-plan).

---

*The project-manager does not approve gates and does not write product code. This note
reflects coordination and governance work only.*

---

## Addendum — Doc 13 re-plan + gate-status corrections (2026-08-21)

This addendum records the completion of the Doc 13 v2.0.0 re-plan and gate-status additive
corrections, which were listed as pending application in §"Open items" above. Written in the
same session; decision record (DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md) was already
in place before this addendum.

### Artifacts written / updated (addendum)

| Artifact | Action | Description |
|----------|--------|-------------|
| `docs/13-project-plan.md` | **Updated → v2.0.0** | Full re-plan against REC-1/REC-2 and SRS v2.4.0. Status: In Review. See below for changes. |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | **Updated** (additive only) | S-01 correction pointer row; Ceremonies corrected-posture row; new section "Ceremony correction & proving-system commitment — 2026-08-21." No prior text altered. |

### Doc 13 v2.0.0 — what changed

| Category | Change |
|----------|--------|
| Header | Version 1.0.0 → 2.0.0; Source updated to SRS v2.4.0, ADR-001…ADR-022, DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md; Last updated 2026-08-21 |
| "Read this first" banner | Ceremony language corrected; slip rationale: audit-paced, not ceremony-paced; scope re-baselined to SRS v2.4.0 (110 Must); budget note (near-zero ceremony line) |
| §2.1 Scope | 42 Must FRs → 110 Must (FR-001…FR-129, SRS v2.4.0); ADR-001…ADR-014 → ADR-001…ADR-022; Phase 2 description corrected |
| MS-04 | "ceremony programme opened" → "ceremony coordinator appointed"; no large-scale outreach |
| MS-07 | "≥500 contributors pledged" → "Ceremony logistics confirmed"; date 2027-01-08 → 2027-01-15 |
| MS-08 | "All six phase-2 ceremonies complete" → "Batched phase-2 ceremony campaign complete"; date 2027-03-05 → **2027-01-25**; marked OFF THE CRITICAL PATH |
| MS-13 (Gate 2) | **UNCHANGED — 2027-05-14.** Audits were already the binding constraint. |
| §3.3 Gate-2 item 4 | "≥500 independent contributors" → assurance-sized (5–15 per circuit); attestation/beacon obligations unchanged |
| §3.3 items 11–13 | NEW: CON-015 legal opinion (NOT STARTED); Doc 04 review debt; RTM catch-up FR-121…FR-129 |
| §3.4 Critical path | Ceremony line: 7 weeks → ~1 week; marked OFF THE CRITICAL PATH; audits marked BINDING CONSTRAINT; float note updated |
| §3.4 Long-lead table | Ceremony contributor row: 11 wks/2026-11-02 → 2 wks/2027-01-04; ceremony row: 7 wks → ~1 wk |
| WS-11 | "six ceremonies" → "one batched phase-2 campaign (six transcripts)"; "audit-paced" noted |
| DEP-02 | "≥500 contributors" → "5–15 contributors from mutually-independent institutions"; date 2027-01-08 → 2027-01-15 |
| RISK-10 | Mitigation: "≥500 contributors" → assurance-based language; ADR-022 added |
| RISK-17 | Completely revised: L4/I4/16 → L2/I4/8; "recruitment shortfall at ≥500" → "insufficient institutional independence"; ADR-022 added |
| RISK-18 | Mitigation: 2-week contingency note updated for days-not-weeks ceremony re-runs |
| §8.3 Budget | Ceremony line: USD 120,000 → ~USD 15,000 (near-zero; formal re-estimate N/A); Total: ~USD 4,445,000; Variance: ~−USD 245,000 (~−5.8%); appetite unchanged |
| §10 Comms | Ceremony contributors row: outreach start 2026-11-02 → engagement start 2027-01-04; headcount corrected |
| §13.3 Appetite variance | "six ceremonies at ≥500" removed; audit-paced rationale; dated correction note |
| §11 Re-plan log | v2.0.0 entry added (most-recent first); "next entry at Gate 1" → "next entry at Gate 2" |

### Gate-status additions summary

1. **S-01 correction pointer row** (additive): "ceremony-and-audit-paced" rationale corrected;
   Gate-2 date 2027-05-14 unchanged; audits were binding constraint. Historical row preserved.
2. **Ceremonies corrected-posture row** (additive): old "Six phase-2 ceremonies at ≥500"
   superseded by "one batched campaign, six transcripts, 5–15 per circuit, days not months."
3. **New section** "Ceremony correction & proving-system commitment — 2026-08-21": verbatim
   REC-1/REC-2; applied-2026-08-21 summary; Gate-2 line items table; caution note.

### Arithmetic — Gate-2 date (MS-13: 2027-05-14)

From Doc 13 v1.0.0 §3.4:
- Ceremonies (old): 2027-01-18 → 2027-03-05 (7 weeks)
- Audits: 2027-01-25 → 2027-03-12 (7 weeks, already ending 1 week after ceremonies)
- After correction, ceremonies compress to ~1 week (2027-01-18 → ~2027-01-25)
- Audits remain unchanged: 2027-01-25 → 2027-03-12
- Audits were already the binding constraint before the correction
- Downstream items unchanged: remediation 2027-03-15→2027-04-16, timelock clears 2027-04-19,
  MACI 2027-04-19→2027-05-07, final checks 2027-05-07→2027-05-13, Gate 2 2027-05-14
- **Conclusion: MS-13 does not move. The critical path is now correctly described as audit-paced.**

### Remaining open items (updated)

| Item | Owner | Status |
|------|-------|--------|
| Doc 04 §Z6 ceremony-burden correction | architect (Ravi Deshmukh) | Still open |
| Doc 09 / Doc 10 exec-figure alignment | sre | Still open — Doc 09/10 not yet written |
| One-vs-six circuit clarification | Rathish (approver) | Still open — surfaced in decision record §3 |
| Doc 04 document-review (review debt) | PM (assign neutral reviewer) | Gate-2 line item; open |
| FR-121…129 DES/US/TC catch-up | Architect + PO + Tester | Gate-2 line item; open |
| CON-015 legal opinion | Sofia Marchetti | Gate-2 line item; NOT STARTED |

---

## Addendum — Doc 13 v2.0.1 rework (2026-08-21)

Cycle-1 business document review of Doc 13 v2.0.0 returned FAIL: 84%, 0C/0H/4M/0L.
Report: `artifacts/reviews/13-project-plan-v2.0.0-business-cycle1.md`.
Root cause: §8.3 ceremony-budget correction (~USD 120k → ~USD 15k) not cascaded to three
downstream references. Four surgical fixes applied; no other changes.

### Artifacts updated (addendum)

| Artifact | Action |
|----------|--------|
| `docs/13-project-plan.md` | Updated to v2.0.1 (Status: In Review). Four surgical fixes only. |
| `artifacts/project-manager-2026-08-21T0734.md` | This addendum appended. |
| `artifacts/memory-index.json` | Entry updated in-place. |

### Four fixes applied

| ID | Location | Fix |
|----|----------|-----|
| ISS-01 | §14 KC-P2 | Kill criterion trigger restated in ADR-022 assurance terms: "ceremony fails independent verification OR attested contributor set fails ADR-022 assurance criteria — fewer than 5 independent institutions represented, or independence unverifiable from published attestations." Non-vacuous; cites ADR-022. |
| ISS-02 | §6 RISK-19 | "~USD 0.35M shortfall" → "~USD 245,000 (~−5.8%) shortfall" |
| ISS-03 | §13.1 resourcing row | "−USD 0.35M, zero contingency" → "~−USD 245,000 (~−5.8%), zero contingency" |
| ISS-04 | §13.3 lever L1 | "−USD 0.35M over appetite" → "~−USD 245,000 (~−5.8%) over appetite" |

**Addendum — Doc 13 v2.0.2 (2026-08-21):** Cycle-2 FAIL 96%, 0C/0H/1M/0L (`artifacts/reviews/13-project-plan-v2.0.1-business-cycle2.md`). One fix: banner "~USD 0.35M shortfall" → "~USD 245,000 (~−5.8%) shortfall". Header → 2.0.2. Index updated in-place.

**Addendum — Doc 13 v2.0.2 Approved + gate-status outcomes (2026-08-21):** Cycle-3 PASS 100% (`artifacts/reviews/13-project-plan-v2.0.2-business-cycle3.md`). Status flipped to Approved; §13.1 review-pending row updated. Doc 03 v2.1.5 Approved (verified). Doc 04 v1.0.2 In Review (verified). Gate-status "Outcomes — applied 2026-08-21" subsection added under ceremony-correction section (additive). Index updated in-place.
