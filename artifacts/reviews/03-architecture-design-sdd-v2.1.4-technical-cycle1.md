# Doc 03 — Architecture Design (SDD) v2.1.4 — Technical Review — Cycle 1

```
Reviewed document: 03-architecture-design-sdd.md
Document version:  2.1.4
Review mode:       technical
document:          docs/03-architecture-design-sdd.md
version:           2.1.4
mode:              technical
cycle:             1
reviewer:          Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:              2026-08-20
score:             99.5
critical:          0
high:              0
medium:            0
low:               1
verdict:           PASS
```

---

## Scope of this review

Doc 03 v2.1.4 is declared a **registration-only patch** applying the OI-19 and OI-20 rulings
(Rathish, 2026-08-20; `artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md`) to the ADR layer.
The declared touch-points are:

1. Header (version bump 2.1.3 → 2.1.4, Status → In Review, Source → SRS v2.4.0, changelog entry)
2. §1.1 — SRS v2.4.0 counts
3. §12 — ADR-016 row: OI-20 amendment note
4. §12 — ADR-021 row: OI-19 and OI-20 amendment notes
5. §16 — scope note extended to FR-129; OI-19/OI-20 marked closed; tier-determination debt
   registered

Included in scope per assignment: amended ADR-016 and ADR-021 headers (fidelity against
DECISIONS-2026-08-20-OI19-OI20.md verbatim).

---

## Diff-scope verification

Diff confirmed via `git diff HEAD -- docs/03-architecture-design-sdd.md`. Five and only five
change locations found — exactly the five declared above. No DES elements were added, no design
content was changed, no other sections were touched. **Scope is registration-only as claimed.**

---

## §1.1 count verification

SDD §1.1 (v2.1.4) states: **21 BR, 129 FR (127 active + 2 superseded; 110 Must), 28 NFR
(24 Must), 15 CON, and 27 RISK.**

Independently verified against SRS v2.4.0 §11:
- SRS §11 count line: "21 BR · 129 FR minted (127 active + 2 superseded: FR-046, FR-062)
  · 28 NFR · 15 CON · 27 requirement-level RISK rows"
- SRS §11 Must table: Must row lists 110 FRs including FR-129 (Charter-layer guard, Must per
  OI-20 ruling). 
- v2.4.0 changelog confirms: "§11: Must count 109 → 110 (FR-129); FR-125 convention note
  updated (no longer draft)."

All five count dimensions match. **§1.1 counts: VERIFIED CORRECT.**

---

## ADR-016 amendment block fidelity

Source: DECISIONS-2026-08-20-OI19-OI20.md §2 (OI-20 ruling, 4 bullets).

| Ruling bullet | ADR-016 amendment sub-item | Match |
|---|---|---|
| FR-004's plural-pluggable-issuer requirement is satisfied at the ARCHITECTURE LEVEL — Aadhaar is one implementation of the pluggable adapter interface, not a hardcoded dependency. | (a) "FR-004's plural-issuer requirement is satisfied at the ARCHITECTURE LEVEL — Aadhaar is one implementation of the pluggable IPersonhoodAdapter interface (ADR-017 lineage), not a hardcoded dependency; the interface itself is plural and the Phase-1 deployment exercises one implementation of it." | ✓ (faithful + usefully specific) |
| Record the single-rail pilot as a Phase-1 DEPLOYMENT limitation with an explicit exit condition: Phase 2 adds eIDAS. No Charter guarantee is amended. | (b) "Phase-1 single-rail deployment is a dated DEPLOYMENT limitation, exit condition Phase 2/eIDAS 2.0 per FR-121 — a deployment fact, not an architecture property, and never a Charter amendment." | ✓ (verbatim match on all elements) |
| State honestly, as an accepted pilot limitation: in Phase 1 a person without Aadhaar cannot enrol in the pilot region. | (c) "FR-004's 50% attestor-share cap is inoperative for the Phase-1 single-rail duration (sole rail carries 100% share) — accepted, recorded explicitly." | PARTIAL — see ISS-01 |
| MUST: making single-issuer operation permanent would be a Charter-layer change requiring re-entry, never a deployment default. Record it. | (d) "Permanence guard: extending single-issuer operation beyond the published Phase-1 scope requires the Charter-layer amendment process with Gate-1 re-entry, never a deployment default (FR-129). OI-20 CLOSED." | ✓ (exact intent, correctly cites FR-129) |

The decision body (§Context, Gate-1 disposition) remains unaltered and already states
"persons without a government identity cannot enrol — an accepted, documented exclusion."
The §12 ADR-016 row Consequences column also carries "accepted exclusion: no-doc citizens
cannot enrol Phase 1." The exclusion fact is present in the document — see ISS-01 for
the amendment-block-level gap.

---

## ADR-021 amendment note fidelity

Source: DECISIONS-2026-08-20-OI19-OI20.md §2 (OI-19 and OI-20 rulings).

**OI-19 elements in amendment note:**
- Invite-gating = spam-control rate-limiter with mandatory always-open non-invite fallback. ✓
- FR-125 finalised, no longer draft. ✓
- FR-020 unamended and absolute. ✓
- Test obligation: "a determined real person can always join without an invite." ✓

**OI-20 elements in amendment note:**
- Phase-1 single-rail = dated limitation with Phase-2/eIDAS 2.0 exit (FR-121). ✓
- FR-004 satisfied at architecture level (Aadhaar = one implementation of pluggable adapter
  interface, not a hardcoded dependency). ✓
- Making single-issuer operation permanent requires Charter-layer amendment process with Gate-1
  re-entry, never a deployment default (FR-129). ✓
- Pointer to §"Open tensions" for resolved-status. ✓

**Open tensions section:**
- Resolution header: "Resolved 2026-08-20 — see header amendment." ✓
- OI-19 paragraph title: "RESOLVED 2026-08-20" marker present. ✓
- OI-20 paragraph title: "RESOLVED 2026-08-20" marker present. ✓
- Original tension text retained for traceability (as directed). ✓
- Decision body otherwise unaltered (as directed — registration-only scope). ✓

**ADR-021 amendment: FIDELITY CONFIRMED. No issues.**

---

## §12 ADR row checks

**ADR-016 row:** Amendment note present: "(Phase-1 pilot rail named: India/Aadhaar offline KYC;
OI-04-PILOT closed — ADR-021)" from prior version retained; new note added: "(OI-20 CLOSED:
FR-004 satisfied at architecture level; Phase-1 single-rail is dated deployment limitation,
exit Phase 2/eIDAS 2.0; 50% cap inoperative Phase-1 duration; permanence requires
Charter-layer re-entry — FR-129)". Correctly reflects the ADR-016 amendment block. ✓

**ADR-021 row:** Amendment note added: "(OI-19 CLOSED: FR-125 finalised, non-invite fallback
mandatory, FR-020 unamended; OI-20 CLOSED: FR-004 satisfied at architecture level, Phase-1
dated limitation, Charter-layer guard FR-129)". Captures both ruling closures. ✓

---

## §16 scope note

- Scope extended to FR-121..FR-129 (was FR-121..FR-128). ✓
- OI-19 and OI-20 explicitly marked CLOSED 2026-08-20. ✓
- Tier-determination debt paragraph present: FR-129's amendment-tier question (FR-118 Tier-1
  vs FR-119 Tier-2 for issuer-plurality permanence) registered as owed in the next DES
  increment and NOT decided in this version. ✓ (matches FR-129 normative text in SRS v2.4.0
  which also explicitly defers this determination to the architect.)

---

## Issue log

### ISS-01 — LOW — ADR-016 amendment block, item (c)

**Location:** `docs/adr/ADR-016-enrolment-issuer-hierarchy.md`, Amendment block item (c).

**Finding:** OI-20 ruling bullet 3 says: "State honestly, as an accepted pilot limitation: in
Phase 1 a person without Aadhaar cannot enrol in the pilot region." The amendment block's
corresponding item (c) records the related but distinct fact that "FR-004's 50% attestor-share
cap is inoperative for the Phase-1 single-rail duration (sole rail carries 100% share)."
The attestor-cap-inoperative statement and the citizen-exclusion statement are related (sole
rail implies exclusion of those without that credential) but are not identical expressions.
The ruling's explicit personhood-exclusion sentence does not appear in the amendment block.

**Severity rationale:** LOW. The exclusion fact is present in the ADR body (§Context, Gate-1
disposition quote: "persons without a government identity cannot enrol — an accepted, documented
exclusion") and in the §12 row Consequences column ("accepted exclusion: no-doc citizens cannot
enrol Phase 1"). The document is not misleading. The gap is that the amendment block's 4-item
summary substitutes the cap-aspect for the exclusion-sentence in item (c), leaving the
amendment block's fidelity to bullet 3 partial rather than verbatim.

**Fix (SHOULD):** In ADR-016 amendment block, replace or supplement item (c) so that the
exclusion statement appears explicitly alongside (or instead of) the cap-inoperative statement,
e.g.: "(c) Accepted pilot limitation, stated honestly: in Phase 1 a person without Aadhaar
cannot enrol in the pilot region; FR-004's 50% attestor-share cap is inoperative for the
Phase-1 single-rail duration (sole rail carries 100% share) — both accepted and recorded
explicitly." The document body needs no change.

---

## Regression check

No regressions from v2.1.3. The cycle-2 PASS base is preserved:
- Preamble "twenty-one decision records" count is correct and unchanged. ✓
- §1.1 updated from v2.3.0 to v2.4.0 counts — no regression, intentional change. ✓
- §12 ADR-016 and ADR-017 2026-08-20 amendment notes (fixed in v2.1.3) still present. ✓
- ADR-021 standalone "## Alternatives rejected" section (fixed in v2.1.3) still present. ✓

---

## Summary

| Category | Result |
|---|---|
| Score | 99.5% |
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 1 |
| Verdict | **PASS** |
| Diff scope | Registration-only — confirmed |
| §1.1 counts | Verified correct against SRS v2.4.0 §11 |
| ADR-016 fidelity | 3 of 4 ruling bullets verbatim; item (c) partial — see ISS-01 (LOW) |
| ADR-021 fidelity | All elements confirmed; open-tensions section correctly resolved |
| §12 ADR rows | Both amendment notes present and accurate |
| §16 scope | FR-129 added; OI-19/OI-20 closed; tier-determination debt registered |

**PASS. The SOP advances.** The single LOW issue (ISS-01) does not block advancement. The
architect SHOULD address it in the next Doc 03 increment's DES pass for ADR-016; it does not
require a v2.1.5 registration patch.

---

## Pre-existing stop-hook tokens (unchanged)

The following blocks from prior sessions remain active and are not affected by this review:

- RTM gap: Doc 08 has open Must rows (FR-121..FR-129 and others with no TC yet). Gate 2 is
  blocked until the RTM shows zero gaps.
- Doc 04 review: the test strategy (Doc 04) has no passing document-review report. Gate 2
  is additionally blocked on this.

This review clears only Doc 03 v2.1.4. It does not affect the RTM or Doc 04 blocks.
