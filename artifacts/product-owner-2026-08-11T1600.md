# Session Memory — Product Owner (Priya Raghunathan)

```
Role:        product-owner
Timestamp:   2026-08-11T16:00:00Z
Phase:       Define — OI-18 decision applied to Doc 02
Product:     Trumocracy
Session:     product-owner-2026-08-11T1600
```

---

## What was done

Applied the OI-18 decision (Rathish, 2026-08-11, option (c) two-tier core) faithfully to
`docs/02-requirements-srs.md`, producing **v2.2.0** (Status: In Review). Nine surgical edits
made; no new IDs minted.

### Edits applied

1. **Header**: Version → 2.2.0; Status → In Review; v2.2.0 change-log entry prepended
   describing the two-tier core adoption, seven entrenched rules, Tier-2 named absolutes,
   and Tier-3 ordinary tier.

2. **FR-118 amended**: Requirement cell rewritten to name **seven** entrenched charter rules —
   adding CON-001 (parties only, never state elections) as rule 7, with the OI-18 rationale
   (scope boundary, not implementation commitment). Amendment proposals targeting any Tier-1
   rule (including a CON-001 proposal to permit state/municipal elections) rejected by code at
   submission. Source note appended: _(v2.2.0: amended per OI-18 decision, 2026-08-11.)_

3. **⚠ banner replaced**: The v2.1.0 DECISION REQUIRED banner after FR-118 was replaced with
   a DECIDED banner recording the two-tier core outcome, Tier-1 seven rules (fork-only),
   Tier-2 named absolutes with five-property super-process, Tier-3 ordinary tier, and the
   preserved OI-18 rationale (receipt-freeness — Tier 1 defines what the system is; Tier 2
   protects people while remaining evolvable). Reference to OI-18-DECISION-2026-08-11.md.

4. **FR-119 amended**: Requirement cell rewritten to describe a three-tier amendment structure:
   Tier 1 (FR-118, code-rejected), Tier 2 (named absolutes — BR-011/NFR-003, CON-002/CON-008/
   NFR-010, CON-012, CON-013 — super-process only with five minimum properties), Tier 3
   (everything else, ordinary citizen vote at its ordinary tier). Source note appended.

5. **§8 FR-118 Gherkin block**: Comment updated to "seven entrenched rules"; first Given
   scenario updated to include CON-001 example (permit platform to conduct state/municipal
   election); new adversarial scenario added for CON-001 (municipal election proposal rejected
   by code regardless of rationale or support).

6. **§8 FR-119 Gherkin block**: Comment updated to three-tier structure; two new Tier-2
   scenarios added (proposal to weaken receipt-freeness — full super-process required; missing
   audit → second vote does not proceed); Tier-3 ordinary scenario retained and labelled.
   v2.2.0 per OI-18 comment line added.

7. **§9.1 CON-001**: Appended: _(v2.2.0 per OI-18: promoted into the Tier-1 entrenched charter
   (FR-118) — unamendable by any vote, changeable only by fork.)_

8. **§13 OI-18 row**: Original text struck through; DECIDED notice appended: "option (c)
   two-tier core, CON-001 promoted to Tier 1. Recorded in OI-18-DECISION-2026-08-11.md; applied
   at v2.2.0 to FR-118, FR-119, CON-001. Doc 03 v2 specifies the super-process numbers with
   rationale (OI-17 family)." "Needed by" changed to "Gate 1 follow-up ✓".

9. **§14 Glossary**:
   - "Entrenched charter" updated to seven rules (incl. CON-001; fork-only).
   - "Named absolutes (Tier 2)" added: the four guarantee groups; super-process only (FR-119).
   - "Super-process" added: five-property Tier-2 amendment path; numbers in Doc 03.
   - "Amendable protocol" updated to reflect Tier-3 framing.

---

## Consistency sweep results

- Pattern `six unamendable|six rules|six charter rules|six entrenched` — **1 match found**,
  at line ~2000 in the OI-18 §13 row inside the struck-through historical text. Correctly
  preserved as history; **no live occurrence requires correction**.
- Pattern `⚠ v2.1.0 DECISION REQUIRED` — **0 matches found** in live text. Banner fully
  replaced.
- No contradictions found in the edits beyond what is already recorded.

---

## Decisions made

None. This session applies a human-approved decision faithfully. No new IDs minted. No new
requirements, risks, or constraints created.

---

## IDs touched

| Category | IDs |
|----------|-----|
| FR amended | FR-118, FR-119 |
| CON annotated | CON-001 |
| OI marked decided | OI-18 |
| Glossary entries updated/added | "Entrenched charter", "Named absolutes (Tier 2)", "Super-process", "Amendable protocol" |

High-water marks unchanged: BR-021, FR-120, NFR-028, CON-014, RISK-32, TD-11, OI-18.

---

## Open items

- Doc 02 v2.2.0 requires a new **business-mode document-review** (cycle N+1) by a neutral
  reviewer before the SOP advances further. The document is Status: In Review.
- Doc 03 v2 (architect — Ravi Deshmukh): must specify the Tier-2 super-process numbers with
  rationale (all five minimum properties), DES elements and an ADR (OI-17 family). SC-13/SC-14
  trust-anchor governance design and DES for FR-114..FR-120 also owed.
- Carry-forwards unchanged: OI-01-NUM, OI-04-PILOT, FORK-CRIT, SC-13/SC-14, SC-05, OI-17,
  OI-08.

---

## Next role

Neutral reviewer (non-product-owner) to run **document-review skill in business mode** over
`docs/02-requirements-srs.md` v2.2.0.

**Post-session update (2026-08-11):** Doc 02 v2.2.0 business-mode review cycle 1 PASSED (97%, 0C/0H/0M/3L; report: artifacts/reviews/02-requirements-srs-v2.2.0-business-cycle1.md). Status flipped from "In Review" → "Approved (review loop, cycle 1 PASS 97%; OI-18 applied — see OI-18-DECISION-2026-08-11.md)". Version unchanged at 2.2.0. Three accepted Lows stand as recorded.
