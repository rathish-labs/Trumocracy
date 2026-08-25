# Session Memory — technical-writer (neutral reviewer) 2026-08-23T12:00

```
Role:       technical-writer (acting as neutral document reviewer — not the author)
Timestamp:  2026-08-23T12:00:00Z
Phase:      Define (post-Gate-1, active Design phase)
Product:    Trumocracy
Scope:      Business-mode document-review of docs/02-requirements-srs.md v2.6.0 (Cycle 1 of 5)
```

## What I did

Ran a Cycle-1 business-mode document-review of `docs/02-requirements-srs.md` v2.6.0
per the document-review skill, acting as the PM-assigned neutral reviewer. The
product-owner (Priya Raghunathan) is the document owner; I am NOT the owner and made
no edits to the document.

Coverage: header, changelog, §4.44 (FR-130), §4.45 (FR-131), §8 Gherkin for
FR-130 and FR-131, §11 Must count and totals, §12 traceability (v2.5.0 and v2.6.0
additions), §13 session-scope notes, §15 approvals, full §16 (delivery phasing — all
131 FR rows, all 28 NFR rows, honesty register H-01..H-06, 16-item contradiction
surface), CON-007 budget figures (verified against
DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2).

## Verdict and findings

**Verdict: FAIL**
**Score: 94%**
**Critical: 0 | High: 0 | Medium: 1 | Low: 1**

### ISS-01 (Medium — B3 Traceability)
`artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` — cited as the decision record
and primary authority for §16 (all 131 FR + 28 NFR classifications) and FR-131 (v1
honesty notice) — does not exist in the repository. The document acknowledges the file
was "being written by the project-manager this session" but it was never created. All
other major rulings in this document have backing artifacts on file. The artifact-bus
rule requires decisions to be written down to exist.

### ISS-02 (Low — B2 Completeness)
Six FRs marked H? = Y in §16.3.1 (meaning "the absence MUST be disclosed") have no
corresponding entry in the §16.4 honesty register: FR-002 (cross-scope unlinkability),
FR-034 (interim tallies technically preventable only in v2), FR-048 (office-holder vote
separation), FR-059 (recovery reveals nothing), FR-103 (conduct votes individual
private), FR-124 (verified status private). H-01 and H-02 partially cover as umbrella
items but do not list these sub-properties explicitly.

## Artifacts written

- `artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md` — full review report
- `artifacts/technical-writer-2026-08-23T1200.md` — this session memory note

## IDs touched

- Reviewed: Doc 02 v2.6.0 (FR-001..FR-131, NFR-001..NFR-028, CON-007, §16 entire)
- New IDs minted: none (reviewer is read-only on the document)
- Review report filed: 02-requirements-srs-v2.6.0-business-cycle1.md

## Routing instruction

FAIL → route to **product-owner** (Priya Raghunathan) for rework. Rework must:
1. Resolve ISS-01 (Medium): coordinate with PM to create the missing decision artifact,
   or update §16.1 and FR-131 rationale to cite the available bridging artifact
   (`artifacts/product-owner-2026-08-23T0900.md`).
2. Resolve ISS-02 (Low): add H-07..H-12 entries in §16.4, or cross-reference note
   under H-01/H-02 listing the six sub-property FRs.
3. Bump `Version:` to at least **v2.7.0** and set `Status: In Review`.

After rework: neutral reviewer runs Cycle 2.

## Open items inherited

- 16 items in §16.5 AWAITING APPROVER CONFIRMATION (Rathish) — pre-existing
- Doc 03 cascade annotation for FR-131/DES-098 pre-allocation error — architect, next increment
- US for FR-131 — product-owner, next session
- TC for FR-131 — tester (Ji-woo Park), Phase 3
- PM to re-plan Doc 13 §3.1 (MACI OFF / v1 scope statement)
- PM to CREATE `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` (ISS-01 root cause)

## Gate status (Cycle 1)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.6.0 review: FAIL (Cycle 1).
Doc 02 requires rework to v2.7.0 before Cycle 2 review.

---

## Cycle 2 — Doc 02 v2.7.0 (2026-08-23)

**Verdict: PASS**
**Score: 98%**
**Critical: 0 | High: 0 | Medium: 0 | Low: 0**

### ISS-01 fix verified
`artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` now exists. File contains the
verbatim approver directive (Definition A / Definition B), recorded by PM Ana-Maria
Petrescu, explicitly resolves ISS-01, cites cycle-1 review. §16.1 Source block:
provisional qualifier removed; decision record cited directly; Doc 03 reference updated
to v2.3.1 (Approved). ✓

### ISS-02 fix verified
H-07..H-14 added to §16.4. Independent H? sweep confirmed all 17 H=Y items (13 FRs +
4 NFRs) are now covered by named register entries H-01..H-14, with zero remaining gaps.
Product-owner also found two additional H=Y items (FR-063 → H-11; NFR-024 → H-14) beyond
the cycle-1 six. ✓

### No regressions
Classification tables, tallies, §11 counts, §12 traces, §16.5 contradiction surface,
CON-007 figures, FR-130/FR-131 normative text and Gherkin: all unchanged.

### Artifact
`artifacts/reviews/02-requirements-srs-v2.7.0-business-cycle2.md` — full cycle-2 report.

### Routing
PASS → product-owner (Priya Raghunathan) sets `Status: Approved` on v2.7.0. SOP advances.

## Gate status (Cycle 2)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.7.0 review: PASS (Cycle 2).
Review loop complete. Product-owner sets Status: Approved; SOP advances to next phase.

---

## Cycle 1 of new loop — Doc 02 v2.8.0 (2026-08-23)

**Verdict: FAIL**
**Score: 97%**
**Critical: 0 | High: 0 | Medium: 1 | Low: 2**

### What I read
Header and changelog (v2.8.0 additions); §4.46 (FR-132); §4.47 (FR-133); §8 Gherkin for
FR-132 (3 scenarios) and FR-133 (4 scenarios); §11 Must count table; §12 FR-132/FR-133 trace
rows; §16.1 Source block; §16.3.1 classification table and tally line; §16.4 H-01..H-16;
§16.5 full T-01..T-07 contradiction surface. Also read:
`artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` (three rulings, §5 tensions);
`docs/03-architecture-design-sdd.md` v2.4.1 header and changelog, §10.13.2 DES-095 amendment,
§10.13.8 DES-099, §15 FR-132/FR-133 rows.

### Obligation checks — all passed
Decision record exists with three rulings. FR-132 honest (spam speed-bump, not personhood
proof). FR-133 flag-don't-block with first-class false-positive path. FR-133 Gherkin Scenario
2 is the false-positive path. H? sweep: 19 H=Y items at v2.8.0, all covered by H-01..H-16.
H-15 and H-16 wording honest and complete. T-06/T-07 in §16.5 aligned with decision record
§5 and Doc 03 §10.13.7. §11 Must count = 114. FR-132 traces DES-095 (amended) + ADR-025
in Doc 03 v2.4.1. FR-133 traces DES-099 in Doc 03 v2.4.1. Catch-up posture recorded for both.
No regressions in v2.7.0-approved content.

### ISS-01 (Medium — B4 Correctness)
§16.3.1 FR tally line not updated for v2.8.0. Still reads "FR-001..FR-131, 129 active:
IN-v1 106 · PARTIAL 19." Correct at v2.8.0: "FR-001..FR-133, 131 active: IN-v1 107 ·
PARTIAL 20" (FR-132 and FR-133 both IN-v1; FR-003 reclassified IN-v1 → PARTIAL). The stale
tally gives downstream roles wrong counts, contradicting the table above it.

### ISS-02 (Low — B6 Convention compliance)
§11 heading label reads "Counts (v2.6.0)" in a v2.8.0 document. Pre-existing issue not
caught in v2.6.0 or v2.7.0 review cycles (confirmed by tester note 2026-08-23T1045 observation).
Counts in the table are correct; only the label is stale.

### ISS-03 (Low — B3 Traceability)
§16 Source block cites "Doc 03 v2.4.0" for DES-095 amended / DES-099 / ADR-025. Doc 03 is
now at v2.4.1 (Approved). Should cite "Doc 03 v2.4.1 (Approved)".

### Artifact
`artifacts/reviews/02-requirements-srs-v2.8.0-business-cycle1.md` — full cycle-1 report.

### Routing
FAIL → product-owner (Priya Raghunathan) for rework. Must fix ISS-01 (Medium). Should fix
ISS-02 and ISS-03 (both Low). Bump to at minimum v2.9.0 (Medium issue requires minor bump);
set Status: In Review. After rework: neutral reviewer runs Cycle 2 of the v2.8.0 loop.

## Gate status (v2.8.0 Cycle 1)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.8.0 review: FAIL (Cycle 1 of new
loop). Routes to product-owner for rework to v2.9.0.

---

## Cycle 2 — Doc 02 v2.9.0 (2026-08-23)

**Verdict: FAIL**
**Score: 98%**
**Critical: 0 | High: 0 | Medium: 1 | Low: 1**

### Fix verification

ISS-01 fix (§16.3.1 tally): RESOLVED — tally line now "FR-001..FR-133, 131 active: IN-v1 107
· PARTIAL 20 · DEFERRED-v2 4 · SUPERSEDED-n/a 2". Independently verified by row count:
IN-v1 107 ✓, PARTIAL 20 ✓, DEFERRED-v2 4 ✓.

ISS-02 fix (§11 label): RESOLVED — label now "Counts (v2.9.0)" ✓.

ISS-03 fix (§16 Source block): RESOLVED — §16 Source block now cites "Doc 03 v2.4.1
(Approved)" ✓.

### ISS-A (Medium — B4 Correctness)
§11 header still reads "131 FR minted (129 active + 2 superseded: FR-046, FR-062)". Correct
count at v2.9.0: 133 FR minted (131 active + 2 superseded). The ISS-01 fix correctly set the
§16.3.1 tally to 131 active = 133 minted; §11 header contradicts this. The header was not
updated when FR-132 and FR-133 were added at v2.8.0, and the v2.9.0 rework corrected only
the version label. Fix: update to "133 FR minted (131 active + 2 superseded)".

### ISS-B (Low — B3 Traceability)
§4.46 and §4.47 rationale source annotations still cite "Doc 03 v2.4.0" — not covered by
ISS-03 fix (which was limited to §16 Source block). Fix: update both to "Doc 03 v2.4.1 (Approved)".

### Artifact
`artifacts/reviews/02-requirements-srs-v2.9.0-business-cycle2.md` — full cycle-2 report.

### Routing
FAIL → product-owner (Priya Raghunathan). Fix ISS-A (Medium). Fix ISS-B (Low). Bump to
minimum v2.10.0 (Medium issue requires minor bump); set Status: In Review.

## Gate status (v2.9.0 Cycle 2)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.9.0 review: FAIL (Cycle 2 of
loop). Routes to product-owner for rework to v2.10.0.

---

## Cycle 3 — Doc 02 v2.10.0 (2026-08-23)

**Verdict: PASS**
**Score: 100%**
**Critical: 0 | High: 0 | Medium: 0 | Low: 0**

### Fix verification

ISS-A fix (§11 minted count): RESOLVED — §11 now reads "133 FR minted (131 active + 2
superseded: FR-046, FR-062)". Independently verified by row count: IN-v1 107, PARTIAL 20,
DEFERRED-v2 4; active = 131; minted = 133. ✓

ISS-A co-fix (§11 label): "Counts (v2.10.0)" with maintenance rule "(update this label on
every version bump — it MUST match the document version number)". ✓

ISS-B fix (§4.46/§4.47 annotations): Both now read "Doc 03 v2.4.1 (Approved)". ✓

Pre-review fixes: §12 v2.8.0 scope-note citation updated to "Doc 03 v2.4.1 (Approved)".
Active-prose sweep for "Doc 03 v2.4.0" — zero hits in active prose; only changelog entries
(correct as historical record). ✓

### Internal consistency — all clear
§11 Counts line (133 minted / 131 active) now matches §16.3.1 tally (131 active / IN-v1 107
/ PARTIAL 20 / DEFERRED-v2 4 / SUPERSEDED-n/a 2). Must = 114 with FR-132/FR-133 in the
Must ID list. No internal contradictions.

### No regressions
All v2.9.0 content intact: §16.4 H-01..H-16, §16.5 T-01..T-07, §16.1 Source block,
FR-132/FR-133 normative text and Gherkin, §12 trace rows.

### Artifact
`artifacts/reviews/02-requirements-srs-v2.10.0-business-cycle3.md` — full cycle-3 report.

### Routing
PASS → product-owner (Priya Raghunathan) sets `Status: Approved` on v2.10.0.
Review loop complete. SOP advances.

## Gate status (v2.10.0 Cycle 3)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.10.0 review: PASS (Cycle 3).
Review loop complete. Product-owner sets Status: Approved; SOP advances.

---

## Cycle 1 of new loop — Doc 02 v2.11.0 (2026-08-23)

**Verdict: PASS**
**Score: 99%**
**Critical: 0 | High: 0 | Medium: 0 | Low: 1**

### What I read

Header and changelog (v2.11.0 additions); §4.46 FR-132 full 5-part normative text and
rationale; §4.47 FR-133 normative text and rationale (scope-asymmetry clarification);
§8 Gherkin scenarios 3–6 for FR-132 and scenarios 3–4 for FR-133; §11 Must count table
and label; §16 Source block (lines 2712–2727); §16.4 H-01..H-19 (full register); §16.5
T-01..T-08 plus new BR-003/FR-020 AWAITING row. Also read:
`artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` (ruling, retention
rule, five confirmations §4, open items §6); `docs/03-architecture-design-sdd.md`
§10.13.9 DES-100 (allowlist, denylist, HMAC design) for field-for-field comparison.

### Review obligations — all passed

1. **FR-132 vs DES-100 field-for-field:** Allowlist 6 fields match exactly; denylist 9
   items match exactly. No gaps or extra fields on either side. ✓
2. **H? sweep both directions:** All 19 H entries (H-01..H-19) map to PARTIAL/DEFERRED-v2
   FR/NFR rows; no H=Y row without an H entry; no orphaned H entry. H-17 (vendor sees
   document), H-18 (subject_id_hash retained), H-19 (no-ID exclusion) all honest and
   sufficient. ✓
3. **FR-133 scope asymmetry:** Stated unambiguously in both rationale box and normative
   text. Flag-don't-block governs spam layer only; ID check is a hard eligibility gate.
   False-positive path (FR-133) and ID exclusion (FR-132) are separate mechanisms. ✓
4. **CONFIRMED markings:** T-01..T-05 CONFIRMED; T-06 IMPROVED; T-07 RESHAPED; T-08
   ARCHITECT-RESOLVED. All match decision record §4 exactly. No overclaim. V1 gate date
   is NOT SET — no date appears in the document. ✓
5. **BR-003/FR-020 contradiction row:** Genuinely surfaced as AWAITING APPROVER
   CONFIRMATION. Full tension stated; affected population (refugees, stateless persons)
   named; not softened. ✓
6. **Standard checks:** §11 label "Counts (v2.11.0)" ✓; Must 114 ✓; FR minted 133 (131
   active + 2 superseded) ✓; tally IN-v1 107 / PARTIAL 20 / DEFERRED-v2 4 unchanged ✓;
   FR-132 traces DES-095/DES-100/ADR-025 ✓; catch-up posture recorded ✓; §8 Gherkin
   scenarios present ✓; changelog accurate ✓; no regressions from v2.10.0 ✓.

### ISS-01 (Low — B2/B4 Documentation accuracy)

Doc 03 version pin stale. Multiple locations cite "Doc 03 v2.5.0 (In Review)" but Doc 03
is at v2.5.1 (Approved). Locations: §16 Source block, §4.46 rationale, H-17 entry,
§16.5 T-01..T-08 rows and footer note. Fix: sweep all occurrences, replace with
"Doc 03 v2.5.1 (Approved)". Normative content correct; only the version label is stale.

### Artifact

`artifacts/reviews/02-requirements-srs-v2.11.0-business-cycle1.md` — full cycle-1 report.

### Routing

PASS → product-owner (Priya Raghunathan) sets `Status: Approved` on v2.11.0. The Low
issue (ISS-01) may be fixed in the next version without re-review. SOP advances.

## Gate status (v2.11.0 Cycle 1)

Gate 1 APPROVED (2026-08-11). Gate 2 NOT READY. Doc 02 v2.11.0 review: PASS (Cycle 1).
Review loop complete. Product-owner sets Status: Approved; SOP advances.
