# Product Owner Session Memory — Doc 02 v2.1.0 Pass 2 of 3

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-11T11:00:00Z
Phase:      Define — Doc 02 v2.1.0 pass 2 of 3 (steward-organisation FR body)
Product:    Trumocracy
Branch:     feat/doc02-gate1-change-request
```

---

## What this pass did

Pass 2 of 3 on Doc 02 v2.1.0. Four surgical edits to `docs/02-requirements-srs.md`:

1. **§4.39 inserted** (after §4.38, before `## 5.`): new subsection "The steward organisation — coordination without control" with the Bitcoin Foundation design-intent preamble blockquote (verbatim per approver's direction), followed by FR-114..FR-118 in a table, the OI-18 ⚠ decision-required banner, then FR-119..FR-120 in a continuation table. Section ends with `---` separator.

2. **§9.3 TD-11 appended**: "Standing steward body vs the no-standing-body instinct" — rationale for accepting a standing body in the steward org despite Ruling 4/FR-099/FR-101; owner Rafael Duarte.

3. **§10 RISK-31 and RISK-32 appended**: RISK-31 (steward soft-power accretion, L3/I4, Rafael Duarte) and RISK-32 (steward-body collapse, L3/I2, deliberately low impact by design, Chen Wei).

4. **§13 OI-17 extended and OI-18 appended**: OI-17 row extended with v2.1.0 annotation (steward term length, election cadence and recall bar FR-114; protocol-tier quorum/supermajority/timelock FR-119). OI-18 minted: entrenched-charter scope vs previously-absolute guarantees (FR-118/FR-119); decision required from approver before Design; owner Priya Raghunathan.

---

## IDs minted this pass

| Namespace | Range | Count |
|-----------|-------|-------|
| FR | FR-114..FR-120 | 7 |
| TD | TD-11 | 1 |
| RISK | RISK-31..RISK-32 | 2 |
| OI | OI-18 | 1 |

**High-water marks after this pass:**

| Prefix | High-water mark |
|--------|----------------|
| BR | BR-021 |
| FR | FR-120 |
| NFR | NFR-028 |
| CON | CON-014 |
| RISK | RISK-32 |
| TD | TD-11 |
| OI | OI-18 |

---

## OI-18 banner placement

The ⚠ banner was placed AFTER FR-118's table row and BEFORE the continuation table containing FR-119 and FR-120. This required splitting the FR-114..FR-120 table into two tables with the banner between them (Markdown cannot embed blockquotes inside table rows). Position confirmed: §4.39, between FR-118 row and the table header row for FR-119..FR-120.

---

## Contradiction noticed during writing (not resolved)

**FR-116 vs FR-119 loop tension:** FR-116 prohibits stewards from approving, enacting or vetoing a protocol change ("they propose, and every enrolled citizen votes — FR-119"). FR-119 then defines the amendable-protocol mechanism and lists "the proposal channel open equally to stewards and any enrolled citizen." The circularity is benign (FR-116 defines the prohibition; FR-119 defines the mechanism), but FR-116 contains a forward reference to FR-119 before FR-119 is stated. This is a within-table forward reference only, not a substantive contradiction, and matches the existing pattern in the document (e.g. FR-104 forward-references FR-089). No action required; noted for document reviewer's awareness.

---

## Outstanding items after this pass

- **Pass 3 outstanding (scope excluded from this pass):** §8 Gherkin blocks for FR-114..FR-120; §11 count updates; §12 BR-021 → FR-114..FR-120 trace; §14 Glossary entry for "Steward" and "Entrenched charter".
- **OI-18 decision required** from the approver before the architect fixes the amendment boundary in Doc 03.
- **Carry-forwards unchanged:** OI-01-NUM, OI-04-PILOT, FORK-CRIT, SC-13/SC-14, SC-05, OI-08/OI-17.
- **Business-mode review of v2.1.0** requires pass 3 to complete first; reviewer is a neutral role assigned by the project-manager.

---

## Artifacts written

- `docs/02-requirements-srs.md` (v2.1.0, pass 2 of 3 — four surgical edits)
- `artifacts/product-owner-2026-08-11T1100.md` (this file)
- `artifacts/memory-index.json` (entry 27 appended)

---

## Gate status

Gate 1 APPROVED (conditional) 2026-08-11 by Rathish. Condition: Doc 02 v2.1.0 must pass business-mode review before design begins. Condition **not yet satisfied** — pass 3 outstanding. Pass 2 complete.

## Next role

product-owner — Doc 02 v2.1.0 pass 3 of 3 (§8 Gherkin for FR-114..FR-120, §11 counts, §12 BR-021 trace, §14 Glossary).
