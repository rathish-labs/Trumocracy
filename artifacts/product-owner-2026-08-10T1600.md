# Session Memory — Product Owner
**Session ID:** product-owner-2026-08-10T1600
**Role:** product-owner (Priya Raghunathan)
**Timestamp:** 2026-08-10T16:00:00Z
**Phase:** Vision · Define — v2.0.0 FR pass (pass 2 of 4)
**Product:** Trumocracy

---

## What I did

Executed pass 2 of 4 on docs/02-requirements-srs.md v2.0.0 (structural pass 1 was completed by a prior product-owner session). Appended eight new §4 subsections (§4.21–§4.28) containing FR-074..FR-095 — 22 new Must FRs — immediately after §4.20 (FR-066/FR-067) and before `## 5. External interface requirements`. Each FR row follows the existing table style with RFC 2119 wording and the mandated `_(Source: Vision re-entry v2.0.0; Rathish, 2026-08-10.)_` note.

## FR IDs minted (FR-074..FR-095)

| ID | One-line title |
|----|----------------|
| FR-074 | Country selection — exactly one legally eligible country, code-checked, scopes region tree and residency rights |
| FR-075 | Platform activation vs legal registration — distinct, displayed as externally attested fact, never granted or overridden by platform |
| FR-076 | Party creation requires founding-member set + public digital constitution with machine-checkable mandatory sections |
| FR-077 | Non-violence clause mandatory in every constitution; absence or alteration blocks publication and every amendment |
| FR-078 | Constitution versioned immutably (FR-047), amendable only via tiered proposal process (FR-025/FR-026); entrenchment per FR-027 |
| FR-079 | Exactly three tiers (Supporter/Worker/Candidate), descriptive only — no weight, no precedence, FR-021 unchanged |
| FR-080 | Worker tier self-declared, no human approval; informed-consent event before confirmation; permanent for term |
| FR-081 | Candidate tier self-nominated (FR-036), decided by member vote (FR-067), no human approval/ranking anywhere in path |
| FR-082 | Supporter unconditionally anonymous — nullifier only, no profile surface, NFR-001/002/024 without exception |
| FR-083 | Worker/Candidate public participation record from informed-consent event; ballot direction never disclosed (FR-063); office votes per FR-048 |
| FR-084 | Disclosure schedule published per role before any window opens; no undisclosed category may be demanded retroactively |
| FR-085 | Informed consent covers campaign + term, irrevocable for term; withdrawal before nomination close destroys submitted disclosure data |
| FR-086 | Prior Supporter-period activity stays anonymous permanently after tier upgrade; anonymous and public identities MUST NOT be linkable |
| FR-087 | Committees output only proposals (ordinary lifecycle, no special status); composition and minutes public; steering cap 30 |
| FR-088 | Committees hold only non-outcome capabilities; election/membership/vote-counting/eligibility/data-integrity always code-only |
| FR-089 | Committee membership expires mechanically at term end; continuation requires fresh member vote (FR-041 discipline) |
| FR-090 | Proposal authorship public; competing proposals allowed, equal standing, same decision window |
| FR-091 | Eight-stage proposal lifecycle executed by code; no stage may be skipped, reordered, or human-vetoed |
| FR-092 | Permanent decision trail (proposal, competing proposals, authorship, deliberation, vote, consequence, implementation, measurement) reconstructable from public data |
| FR-093 | Candidate selection on published schedule; question phase open to any matured member; unanswered questions visibly recorded |
| FR-094 | Manifesto: structured machine-readable, 1/3/5/10/30-year horizons, per-sector plans with all six fields; missing field blocks publication |
| FR-095 | Per-commitment stable ID + append-only progress + linked evidence; supersedes and absorbs FR-046 |

## ⚠ OI banners placed

- **OI-16** banner placed after FR-085 (§4.24): conflict between append-only rule and withdrawal-destroys-disclosure-data; product-owner proposed resolution (pre-nomination data held off governance record) NOT silently adopted; recorded for approver in §13.
- **OI-14** banner placed after FR-090 (§4.25): FR-090 public authorship vs FR-082 Supporter anonymity — three candidate resolutions listed; NOT reconciled; recorded for approver in §13; affected story held Not Ready.

## Deviations from assigned numbering

None. FR-074..FR-095 minted exactly as specified, in order, no gaps.

## Additional contradictions noticed while writing (not resolved — reported only)

1. **FR-079 vs FR-080 circularity on "tier = descriptive metadata":** FR-079 states tiers are descriptive metadata that MUST NOT confer precedence; FR-080 states becoming Worker "makes the participation record public." The public record is a consequential difference in treatment — not merely descriptive. The framing "descriptive, never permissive" in the heading is technically imprecise because disclosure scope does differ between tiers. This is not an error in the requirements per se (the tiers confer disclosure scope, not voting weight), but the heading is a potential confusion source. No reconciliation made; noted for the business-mode document-reviewer.

2. **FR-087 steering-committee cap of 30 vs FR-079 equal standing:** FR-087 caps the steering committee at 30 members. No equivalent size cap appears for working groups. If a steering committee has a hard cap but working groups do not, and both can produce proposals with equal standing, the cap may be seen as an arbitrary asymmetry. Noted; not resolved.

3. **FR-093 "matured member" — undefined term:** FR-093 allows "any matured member" to submit questions during the question phase. "Matured member" is not yet defined in §14 Glossary. Passes 3–4 or the consistency pass should define or replace this term.

## Document state after this pass

- **docs/02-requirements-srs.md** — v2.0.0, Status: In Review, passes 3–4 still outstanding (§6/§8/§9/§10/§11/§12/§13/§14 updates).
- **High-water marks after pass 2:**
  - BR: BR-020 (unchanged from pass 1)
  - FR: FR-095
  - NFR: NFR-026 (unchanged)
  - CON: CON-012 (unchanged)
  - RISK: RISK-24 (unchanged)
  - OI: OI-13 (the two new OI references — OI-14 and OI-16 — are referenced in banners but NOT yet minted as numbered rows in §13; that is the explicit task for the next pass)

## Open items

- §13 must receive OI-14 (FR-090 vs FR-082) and OI-16 (FR-085 vs append-only) as numbered rows — pass 3 or pass 4.
- "Matured member" needs a §14 glossary entry.
- §11 counts, §12 BR↔FR traces, §14 Glossary updates — deferred to pass 4 (consistency pass).
- Passes 3–4 must complete before business-mode document-review is run on v2.0.0.
- The three additional contradictions noted above are not blockers for this pass but should be reviewed at the business-mode document-review stage.

## Gate status

Gate 1 re-entry — Doc 02 v2.0.0 pass 2 complete; passes 3–4 outstanding before review.
