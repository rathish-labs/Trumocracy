# Product Owner Session Memory — 2026-08-10T18:00

**Role:** product-owner (Priya Raghunathan)
**Phase:** Vision · Define — v2.0.0 vision re-entry, pass 4 of 4 (Gherkin, counts, traceability, glossary, consistency sweep)
**Document:** docs/02-requirements-srs.md (v2.0.0, Status: In Review)
**Timestamp:** 2026-08-10T18:00:00Z

---

## What was done

Pass 4 of 4 on Doc 02 v2.0.0 — completed all assigned tasks:

### §8 Gherkin — first block (FR blocks)
Added 41 Gherkin blocks before the closing ``` of the first gherkin block:
- FR-050 (newly Must — treasury record)
- FR-074..FR-113 (40 new Must FRs from passes 2–3)
Total: 41 FR blocks added.

Adversarial scenarios included as required:
- FR-077 (altered non-violence clause refused)
- FR-082 (no profile surface exists for Supporter)
- FR-086 (adversary with full logs cannot link pre-role activity)
- FR-088 (configuration granting outcome capability rejected)
- FR-089 (human renewal attempt — no path)
- FR-091 (stage-skip attempt refused)
- FR-096 (flag does not freeze funds)
- FR-098 (panel attempts binding ruling — no such capability)
- FR-104 (silence does not remove; surge influx cannot drive removal)
- FR-105 (expulsion bar strictly higher than removal bar)
- FR-107 (hard-delete/overwrite attempt fails)
- FR-108 (restricted-data write to public record refused)
- FR-111 (no behavioural event recorded; UT-0525/UT-0740 absence checks)
- FR-112 (operator revocation attempt — no path exists)
- FR-113 (compliant rotation never blocks enrolment beyond published window)

Governance-constant blocks include `(example — non-normative; value set at OI-17 closure)` per convention.

### §8 Gherkin — second block (NFR blocks)
- Added NFR-027 block (no per-user behavioural telemetry; UT-0525/UT-0740 pass)
- Added NFR-028 block (append-only lifecycle; hard-delete/overwrite fails; transition appended with cause)
- Appended v2.0.0 tier-scoping note to NFR-001, NFR-002, NFR-024 blocks

### §8 preamble
- Updated "22 of 22 Must NFRs" to "24 of 24 Must NFRs"
- Added NFR-027 and NFR-028 to the list
- Added governance-constants non-normative note (OI-17, parallel to OI-08 convention)

### §11 counts
- Updated from "Counts (v1.1.0)" to "Counts (v2.0.0)"
- Counts: 20 BR · 113 FR minted (111 active + 2 superseded: FR-046, FR-062) · 28 NFR · 14 CON · 25 RISK requirement-level rows in §10 · 10 recorded trade-offs
- Must: 94 (verified: 54 − 1 FR-062 + 1 FR-050 + 40 new = 94)
- Should: 14 (verified: 16 − 1 FR-050 − 1 FR-046 = 14)
- Could: 3 (unchanged: FR-052, FR-053, FR-057)
- Added convention note: superseded FRs excluded from active Must set, retained for traceability
- Updated NFR priorities: Must 24 (added NFR-027, NFR-028); Should 4 (unchanged)
- Updated "On the size of the Must set" paragraph for v2.0.0

### §12 traceability
Appended v2.0.0 paragraph:
- BR-013 (extended) → FR-081, FR-093
- BR-014 → FR-076, FR-077, FR-087, FR-091, FR-092, FR-094
- BR-015 → FR-087, FR-088, FR-089, FR-090, FR-098, FR-099, FR-101, FR-112, FR-113
- BR-016 → FR-079, FR-080, FR-081, FR-102
- BR-017 → FR-080, FR-082, FR-083, FR-084, FR-085, FR-086, FR-106, FR-111
- BR-018 → FR-097, FR-098, FR-100, FR-101, FR-103, FR-104, FR-105
- BR-019 → FR-076, FR-078, FR-092, FR-094, FR-095, FR-096, FR-097, FR-099, FR-107, FR-108, FR-109, FR-110
- BR-020 → FR-074, FR-075
- FR-050 (raised Must) → BR-005, BR-010
- Session scope note: downstream columns for v2.0.0 FRs OPEN by design until Docs 05/07 catch up

### §13 open issues
Verified complete from pass 3: OI-14, OI-15, OI-16, OI-17 all present. SC-13/SC-14 carry-forward and fork-initiation carry-forward rows present. No additions needed.

### §14 glossary
- Updated "Participation profile" entry to note supersession by "Participation record"
- Appended 16 new entries: Append-only lifecycle, Committee, Conduct vote, Constitution, Country selection, Decision trail, Disclosure schedule, Expulsion, Non-violence clause, Participation record, Removal, Scorecard, Sortition, Steering committee, Tier, Trust-anchor lifecycle

### Supersession pointers
- FR-046: replaced "exact FR pointers filled in the v2.0.0 consistency pass" with "superseded by FR-094 and FR-095"
- FR-062: updated note to explicitly cite "FR-082..FR-086"
- §4.19 banner: updated to cite "FR-082..FR-086"

### FR-102 editorial note
Appended: "_(The fork right listed here tracks FR-053's priority and flag status; fork initiation remains an open critical with the flag OFF above dev — see §13.)_"

### §1.4 fix
Updated Doc 01 reference from v1.0.0 to v2.0.0 (PR-TRUMOCRACY v2.0.0).

### Consistency sweep findings
1. v1.1.0 contexts: All remaining are in change-log history or §12 history — appropriate to retain.
2. v1.1.1 contexts: Change-log, the new OI-12 ✅ banner, one historical anchor in §8 preamble — all appropriate.
3. Stale ⚠ banner: Found and fixed "⚠ v1.1.0 ADR-003 RELATIONSHIP NOTE (FR-073)" at §4.13 — replaced with ✅ v1.1.1 RESOLUTION (OI-12) pointing to ADR-016.
4. §1.4 Doc 01 reference: Fixed (v1.0.0 → v2.0.0).
5. Doc 05 reference in §1.4 still shows v1.1.0 (Doc 05 is now at v1.1.2) — LOW finding, not fixed in this pass (outside specific task scope for §1.4). Note for next reviewer.
6. All 41 new FR Gherkin blocks confirmed present.
7. All 2 new NFR Gherkin blocks confirmed present (NFR-027, NFR-028).
8. No requirement references §4.24/§4.28 as a future section.
9. Zero remaining "⚠ v1.1.0 OPEN CONTRADICTION" banners.
10. §11 counts block heading now reads "Counts (v2.0.0)".

---

## IDs touched

- FR added (Gherkin only): FR-050 Gherkin block added
- NFR amended (Gherkin notes): NFR-001, NFR-002, NFR-024 (v2.0.0 tier-scoping comment added)
- NFR Gherkin added: NFR-027, NFR-028
- Sections updated: §8 preamble, §11, §12, §13 (verified), §14, §1.4

## High-water marks (unchanged — no new IDs minted)
- BR: BR-020
- FR: FR-113
- NFR: NFR-028
- CON: CON-014
- RISK: RISK-30
- TD: TD-10
- OI: OI-17

## Verified counts (§11)
| Priority | Count | Method |
|----------|-------|--------|
| Must | 94 | 54 (v1.1.0) − 1 (FR-062 superseded) + 1 (FR-050 raised) + 40 (FR-074..113) = 94 |
| Should | 14 | 16 (v1.1.0) − 1 (FR-050) − 1 (FR-046 superseded) = 14 |
| Could | 3 | unchanged |

Numbers reconcile. No discrepancy to report.

## Open items
- OI-14, OI-15, OI-16: Gate 1 decision required from Rathish before affected stories are Ready.
- OI-17: governance constants — Design phase (architect/Tomás Ferreira).
- SC-13/SC-14: Doc 03 design change owed after Gate 1 (architect).
- Fork initiation: flag OFF above dev; FR-053 and FR-102 fork entry inherit this status.
- Doc 05 §1.4 version label: LOW — shows v1.1.0, Doc 05 is at v1.1.2. Note for next reviewer.

## Gate status
Gate 1 re-entry: Doc 02 v2.0.0 passes 1–4 complete. Document ready for business-mode document-review by a neutral role. Awaiting Gate 1 re-entry decision from Rathish (OI-14, OI-15, OI-16).
