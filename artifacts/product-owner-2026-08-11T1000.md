# Session Memory — product-owner — 2026-08-11T10:00

```
Role:      product-owner (Priya Raghunathan)
Timestamp: 2026-08-11T10:00:00Z
Phase:     Define — Doc 02 v2.1.0 pass 1 of 3 (Gate 1 decision application)
Product:   Trumocracy
Session:   Pass 1 of 3 on docs/02-requirements-srs.md → v2.1.0
Source:    GATE1-DECISION-2026-08-11.md (Rathish, 2026-08-11)
```

## What was done

Applied all dispositions from GATE1-DECISION-2026-08-11.md §3 to Doc 02, bumping
the document from v2.0.1 to v2.1.0 (Status: In Review). This is pass 1 of 3;
steward-org FRs (FR-114..FR-120) and Gherkin land in passes 2–3.

### Edits applied (all surgical, no deletions)

1. **Header** — Version: 2.1.0 · Status: In Review · Last updated: 2026-08-11 · v2.1.0
   Change entry prepended to the Change log.

2. **FR-024 (§4.7)** — OI-14 disposition appended: Worker tier or above required to
   author; self-declared so not a gate; Supporters retain full voting rights.

3. **FR-090 (§4.25)** — OI-14 disposition appended (authorship public; Worker-or-above
   required; competing-proposal right unchanged for Worker-or-above; Supporters vote on
   every proposal). OI-14 ⚠ banner replaced with ✅ DECIDED block.

4. **FR-085 (§4.24)** — OI-16 disposition appended: confidential-class carve-out
   adopted; pre-nomination disclosure data never enters governance record; destroyed on
   withdrawal; completed-action records remain append-only. OI-16 ⚠ banner replaced with
   ✅ DECIDED block.

5. **FR-105 (§4.34)** — OI-15 disposition appended: expulsion applies to public tiers
   only; Supporter-tier fraud handled by FR-005 credential revocation. OI-15 ⚠ banner
   replaced with ✅ DECIDED block.

6. **FR-107 (§4.35)** — "pending OI-16" tail clause replaced with "carve-out ADOPTED
   per OI-16 (2026-08-11)".

7. **§13 OI-14** — strikethrough applied to open text; DECIDED annotation appended
   (Worker tier and above; FR-024, FR-090 affected). "Needed by" → "Gate 1 ✓".

8. **§13 OI-15** — strikethrough applied to open text; DECIDED annotation appended
   (public tiers only; FR-005 for Supporters; FR-105 affected). "Needed by" → "Gate 1 ✓".

9. **§13 OI-16** — strikethrough applied to open text; DECIDED annotation appended
   (confidential-class carve-out; FR-085, FR-107 affected). "Needed by" → "Gate 1 ✓".

10. **§3 Business Requirements** — BR-021 appended: steward organisation MAY exist and
    MUST NOT be needed; citizen flows operate with zero steward dependency; enumerated
    powers only; bounded by the same test as every other body.

11. **§2.2 Product functions** — item 22 appended: platform-level stewardship (§4.39).

12. **§2.3 User classes** — Steward row appended: elected platform-level coordinator;
    powers enumerated and exhaustive; no outcome power; public-tier privacy posture.

## ID discipline

- **BR minted this pass:** BR-021 (one, as directed)
- **FR minted this pass:** none (FR-114..FR-120 land in passes 2–3)
- **IDs amended (no new mint):** FR-024, FR-085, FR-090, FR-105, FR-107
- **OIs resolved:** OI-14, OI-15, OI-16

## High-water marks after this pass

| Prefix | Mark |
|--------|------|
| BR | BR-021 |
| FR | FR-113 (unchanged; FR-114..FR-120 pending passes 2–3) |
| NFR | NFR-028 (unchanged) |
| CON | CON-014 (unchanged) |
| RISK | RISK-30 (unchanged; RISK-31/32 pending passes 2–3) |
| TD | TD-10 (unchanged; TD-11 pending passes 2–3) |
| OI | OI-17 (OI-18 pending passes 2–3) |

## Open items

- **Passes 2–3 outstanding:** BR-021 FR body (FR-114..FR-120); §4.39 steward-org
  section; §8 Gherkin for all new FRs; §11 counts update; §12 BR-021 trace; §14 Glossary
  Steward entry; TD-11; RISK-31/32; OI-18.
- **Document-review:** business-mode review of v2.1.0 can only run after passes 2–3
  complete and §8 Gherkin is present.
- **Carry-forwards from Gate 1:** OI-01-NUM (threshold number), OI-04-PILOT (pilot
  jurisdiction), FORK-CRIT (flag OFF above dev), SC-13/SC-14 (architect post-Gate-1),
  SC-05 (recovery rate-limit in Doc 03), OI-08/OI-17 (constants to Design).

## Gate status

Gate 1 APPROVED (conditional) 2026-08-11. Condition: Doc 02 v2.1.0 must pass
business-mode review before design. Condition not yet satisfied — passes 2–3 outstanding.
