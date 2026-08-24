# Product-Owner Session Memory Note

```
Role:        product-owner (Priya Raghunathan)
Timestamp:   2026-08-24T15:30:00Z
Phase:       Define — Doc 02 rework cycle 1
Product:     Trumocracy
```

## What was done

Rework cycle 1 of the business-mode document-review loop for `docs/02-requirements-srs.md`
v2.12.0 (FAIL: 87%, 0C/1H/3M/1L;
`artifacts/reviews/02-requirements-srs-v2.12.0-business-cycle1.md`). Produced **v2.13.0**
(`Status: In Review`, `Last updated: 2026-08-24`).

All five issues from the FAIL report addressed by surgical Edit calls (no Write/full-rewrite).
Document is ~301 KB; navigated entirely via Grep + targeted Read; no full-file read.

## Edits made (in order)

### Header / version bump
- `Version: 2.12.0` → `Version: 2.13.0`
- `Change:` block: v2.13.0 entry prepended (house style matching surrounding entries); v2.12.0
  entry retained below.

### §11 Counts label (maintenance rule)
- `**Counts (v2.12.0).**` → `**Counts (v2.13.0).**`

### ISS-02 (Medium) — §4.24 cross-reference added
Added a blockquote NOTE at the top of §4.24 (before the FR-082 table) stating:
> The Supporter / Worker / Candidate tiers in this section are the **privacy-disclosure axis**,
> orthogonal to the **verification axis** in §4.41 (FR-122 open tier vs FR-123 counting tier).
> A verified Supporter-tier member holds COUNTING-action eligibility; an unverified open-tier
> participant cannot take COUNTING actions regardless of privacy-tier self-declaration.
> See §4.41 TWO-AXIS NOTE.

### ISS-02 (Medium) — TWO-AXIS NOTE closing line corrected
- Old: `Cross-referenced from §4.46 and §4.24.`
- New: `Cross-referenced to §4.24 and §4.46.`

Rationale: §4.46 already contained a reference to §4.41 ("participation model established in
§4.41") — the §4.46 cross-reference was present. §4.24 was missing; the NOTE was added there.
After the §4.24 note is added, the directional phrasing "Cross-referenced to" (the TWO-AXIS NOTE
references those sections in its body) is accurate. "Cross-referenced from" had been factually
incorrect.

### ISS-03 (Medium) — FR-131 Scenario 5 added (§8 Gherkin)
Added Scenario 5 to the FR-131 Gherkin block (before the closing fence), covering FR-131
clause (d): open-tier participant attempts a FR-123 counting action; clause (d) notice
displayed (non-dismissable, all four plain-language elements); counting action refused; account
and open-tier access unaffected.

### ISS-01 (High) + ISS-04 (Medium) — FR-132 Scenario 6 replaced (§8 Gherkin)
Stale Scenario 6 ("No government ID — enrolment denied") deleted and replaced with:
- **Scenario 6** (ISS-04 positive path): phone-only registration succeeds with no
  government-ID document; open-tier access granted; no ID required or requested at account
  creation. Comment block includes the pre-ruling text reference and DECISIONS link.
- **Scenario 7** (ISS-01 counting-blocked path): open-tier member attempts FR-123 counting
  action; FR-131 clause (d) notice displayed (non-dismissable, all four elements); counting
  action refused; account and open-tier access unaffected.

ISS-04 is addressed via integration with ISS-01 (as explicitly permitted by the review's
"e.g. Scenario 7 or integrated with ISS-01 fix" language).

### ISS-05 (Low) — §12 scope note updated
- Old: `Doc 03 v2.5.1 (Approved) is the current architect baseline`
- New: `Doc 03 v2.5.1 (Approved) is the current APPROVED architect baseline; Doc 03 v2.6.0
  (In Review) exists and carries the 2026-08-24 counting-gate architecture increment
  (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md) — it may supersede some references on
  approval`

### §12 v2.13.0 amendment and session scope entries added
Added two new entries at the end of §12 (before the `---` separator):
- `**v2.13.0 rework:**` — bullet list of all five issue fixes
- `**v2.13.0 session scope:**` — confirms no new FRs minted, Must count stays at 114, §8
  sweep findings, and recorded-phasing posture

## §8 Gherkin sweep results

Grep sweep for `denied`, `enrol`, `refus`, `government ID` across §8 (lines 1141–2490)
confirmed:

- **Only Scenario 6 was stale.** All other hits relate to:
  - FR-001 personhood enrolment (ZK-based, phase 1; separately accepted limitation per
    TD-05/ADR-016 — NOT affected by the 2026-08-24 ruling)
  - Correct post-ruling FR-132 behaviours (verify-and-discard, subject_id_hash
    deduplication, real-person-verified posture)
  - Correct FR-133 flag-don't-block behaviour
  - General requirement refusals (field missing, duplicate threshold, etc.) unrelated to
    government-ID gating

No additional stale Gherkin survivors found beyond the replaced Scenario 6.

## Decisions made

- ISS-04 integrated with ISS-01 replacement (review permitted integration; no standalone
  Scenario 7 needed in addition to the two ISS-01 scenarios — three total scenarios provide
  adequate coverage).
- §4.46 cross-reference to §4.41 confirmed present ("participation model established in §4.41"
  at line ~969); only phrasing correction needed in the TWO-AXIS NOTE, not a new §4.46 entry.

## IDs touched

- No new IDs minted.
- `FR-131`, `FR-132`, `FR-133` Gherkin updated.
- `§4.24`, `§4.41`, `§11`, `§12` prose updated.

## Counts verification

- Must count: **114** (unchanged — no new FRs minted per scope note).
- §11 label: `Counts (v2.13.0)` — matches document version.
- FR minted: 133 (131 active + 2 superseded: FR-046, FR-062) — unchanged.

## Open items

- Doc 02 v2.13.0 `Status: In Review` — awaiting cycle-2 business-mode document-review by a
  neutral role (not product-owner).
- US/TC/RTM rows for FR-131..FR-133 remain OPEN — same recorded-phasing posture as v2.12.0.
- ADR-025 §(c-viii) update owed to architect
  (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §5.2) — unchanged from v2.12.0 scope note.
- Doc 03 v2.6.0 (In Review) — if approved, downstream references may need updating.

## Gate status

Gate 1 APPROVED (2026-08-11, Rathish). Gate 2 NOT READY.
