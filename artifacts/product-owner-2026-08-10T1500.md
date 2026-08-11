# Product Owner Session Memory — 2026-08-10T1500

```
Role:        product-owner (Priya Raghunathan)
Timestamp:   2026-08-10T15:00:00Z
Phase:       Vision · Define — v2.0.0 structural pass (pass 1 of 4)
Product:     Trumocracy
Document:    docs/02-requirements-srs.md v2.0.0 (structural pass only)
```

## What was done

Executed pass 1 of 4 (structural pass) on Doc 02 to bring it from v1.1.1 → v2.0.0. All 13
assigned edits completed as surgical Edit-tool calls; no whole-file Write used; no mojibake risk.

## Edits completed (item number → outcome)

1. **Header block** — DONE. Version changed 1.1.1 → 2.0.0; Approvers field updated to Gate 1
   re-entry; v2.0.0 Change entry prepended (kept v1.1.1 and v1.1.0 entries intact).

2. **§1.1 Purpose / §1.2 Scope** — DONE. Purpose reworked to self-governance-first framing
   (party demonstrates fitness to govern itself before seeking public power). In-scope list
   extended with: country selection, platform-creation vs legal-registration boundary, three
   participation tiers, three-tier privacy, committees without decisional power, eight-stage
   proposal lifecycle, measurable manifesto commitments, financial transparency + anomaly
   detection, COI disclosure + recusal, independent internal audit, sortition appeal panels,
   member rights, conduct votes/removal/expulsion, transparency dashboard, factual scorecard.
   Not-in-scope extended with: per-user behavioural tracking (any kind), reinforcing CON-001.

3. **§2.2 Product functions** — DONE. Items 11–21 added covering tiers, constitution, proposal
   lifecycle, manifesto commitments, finance + anomaly detection, COI/audit/disputes, conduct
   votes/removal, transparency dashboard/scorecard, country selection.

4. **§2.3 User classes** — DONE. Member row updated with three-tier privacy pointer. Added rows:
   Supporter (tier), Worker (tier), Committee member. Candidate row already existed; updated to
   include three-tier language (tier model, irrevocability, no retroactive linking).

5. **§2.7 Stakeholders** — DONE. Added Ingrid Bergqvist (Party Accountability Lead — internal
   audit, disputes, conduct votes).

6. **§3 Business Requirements** — DONE. Appended BR-014..BR-020 (seven rows, all Priority Must).

7. **§4.12 FR-046** — DONE. Superseded note appended in-cell; requirement retained for
   traceability; pointer to §4.28 (to be filled in pass 3).

8. **§4.19 FR-062 + banner** — DONE. Contradiction banner replaced with ✅ resolution note.
   Superseded note appended to FR-062 requirement cell. FR-063 left untouched.

9. **§6 NFR-001, NFR-002, NFR-024** — DONE. Tier-scoping note appended in-cell to each.
   Post-NFR-table contradiction banner replaced with ✅ v2.0.0 resolution one-liner.

10. **§9.3 TD-02** — DONE. Three-tier model extension appended to Decision-taken cell.
    TD-02-vs-FR-062 banner replaced with ✅ v2.0.0 resolution pointer.

11. **§7 data table** — DONE. "Participation profile (per FR-062)" row renamed to
    "Participation record (Worker/Candidate tiers only; §4.24)"; classification and PII column
    updated; ⚠ OI-13 warning replaced with ✅ tier-scoped per BR-017.

12. **§13 OI-13** — DONE. Open text struck (kept, ~~struck~~); RESOLVED note appended.
    "Needed by" changed to "Gate 1 re-entry ✓".

13. **§15 Approvals** — DONE. New row added: Human approver — Gate 1 (v2.0.0 re-entry) |
    Rathish | Pending | _pending_ | v2.0.0 supersedes the v1.1.0 re-affirmation; OI-13 resolved.

## IDs minted in this pass

BR-014, BR-015, BR-016, BR-017, BR-018, BR-019, BR-020

**No FR, NFR, CON, RISK, TD, or OI were minted in this pass** — confirmed.

High-water marks after this pass:
- BR: BR-020
- FR: FR-073 (unchanged — no FR minted)
- NFR: NFR-026 (unchanged)
- CON: CON-012 (unchanged)
- RISK: RISK-24 (unchanged)
- TD: TD-07 (unchanged)
- OI: OI-13 (unchanged)

## Decisions made

- FR-046 superseded by §4.28 (to be created in pass 3); retained for traceability.
- FR-062 superseded by §4.24 (to be created in pass 3); retained for traceability.
- OI-13 marked RESOLVED per the approver's three-tier privacy ruling (BR-017, 2026-08-10).
- NFR-001, NFR-002, NFR-024 tier-scoped: Supporter anonymous unconditionally; Worker/Candidate
  public by informed consent at role-taking; ballot direction protected in all tiers; prior
  Supporter-period activity never retroactively linked.
- TD-02 extended to three-tier model — consistent with the resolution.
- Per-user behavioural tracking added to §1.2 Explicitly not in scope.
- Ingrid Bergqvist added as Stakeholder (no prior entry existed for this v2 domain).

## Open items and deviations

- §4.24 and §4.28 are referenced by number in this pass but do NOT yet exist in the document —
  they will be created in pass 2 and pass 3 respectively (as directed: later passes add new FR
  sections and Gherkin). The orchestrator should note these forward references.
- §11 counts still read "v1.1.0 baseline" — count update deferred to the consistency pass (pass 4),
  as the FR/NFR counts will change materially in passes 2–3.
- §12 Traceability: v2.0.0 BR↔FR traces will be added in passes 2–4 after new FRs are minted.
- §14 Glossary: "Participation profile" entry still points to FR-062 — update deferred to pass 4.
- The §15 v1.1.0 re-affirmation row was not removed; it was retained alongside the new v2.0.0
  row to preserve the audit trail of prior Gate 1 actions.

## Gate status

Doc 02 v2.0.0 Status: In Review. This version stops at Gate 1.
Passes 2–4 of this session must complete before business-mode document-review is run.
```
