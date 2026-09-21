# DECISIONS-2026-09-21 — Candidate-selection constants ratified (NOMINATION-MIN-01, MATURATION-01)

```
Prepared by:  project-manager (Ana-Maria Petrescu)
Date:         2026-09-21
Approver:     Rathish Kumar
Session:      TRUMO-P03 (architect) — branch design/candidate-des-definition-a
Status:       CLOSED — both rulings recorded; Doc 03 §10.11 is the home; routing applied
Scope:        Two governance constants the TRUMO-P02 engineer chose and flagged for
              ratification (Doc 06 v2.10.0 §7 item 30(iii); artifacts/engineer-2026-09-20T2200-
              candidate-selection.md §3). No product code is changed by this record.
```

---

## 1. Context

TRUMO-P02 (Doc 06 v2.10.0 → v2.11.1 Approved; suite 739/739) built the v1 candidate-selection
flow. Two values it needed had no published figure in any FR or DES:

| Flag ID | Constant | Engineer's value | Where it lives | Status entering this session |
|---|---|---|---|---|
| NOMINATION-MIN-01 | `NOMINATION_ENDORSEMENTS_MIN` | 5 | `packages/protocol/src/candidates.js:178` | flagged for ratification |
| MATURATION-01 | `NOMINATION_MATURATION_SECONDS` | 30 × 86 400 s (30 days) | `packages/protocol/src/candidates.js:189` | flagged for ratification — Doc 02 OI-08 records the maturation period "published but unset" |

FR-036 requires "a published minimum number of nomination endorsements from matured members
resident in that region"; FR-023 withholds nominating and endorsing a nomination "until a
published maturation period has elapsed since joining". Neither document published the number.
The same pattern was closed for `REPETITION_COOLDOWN_SECONDS` by Ruling 3 of
`DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md` (COOLDOWN-01).

## 2. Rulings — VERBATIM (Rathish Kumar, 2026-09-21, TRUMO-P03 brief §"PHASE 2", item 3)

> "RATIFIED CONSTANTS: record NOMINATION_ENDORSEMENTS_MIN = 5 (NOMINATION-MIN-01) and
> NOMINATION_MATURATION = 30 days (MATURATION-01) as approver-ruled (Rathish), replacing the
> engineer-chosen 'flagged for ratification' markers. Give each a home and rationale."

### Ruling 1 — NOMINATION_ENDORSEMENTS_MIN: RATIFIED AT 5

Five matured members resident in the office region must endorse a nomination before its debates
are scheduled. Closes **NOMINATION-MIN-01**. Code already matches.

*Rationale (architect's, recorded in Doc 03 §10.11):* the value mirrors the founding-member
minimum (§10.11 "Founding member count minimum — 5 enrolled citizens: low enough not to exclude
small movements, high enough to prove non-trivial coordination"). A nomination is the same kind of
claim at a smaller scale — that a candidacy is not a solo act — and the endorsers are drawn from
the same population that will vote in the office (matured, resident in the region). Amendment
layer: **Open Layer** (an ordinary platform amendment can change it; it is not a named absolute).

### Ruling 2 — NOMINATION_MATURATION: RATIFIED AT 30 DAYS

A member may nominate themselves, or endorse a nomination, only when 30 days have elapsed since
joining the party. Closes **MATURATION-01**. Code already matches.

*Rationale (architect's, recorded in Doc 03 §10.11):* 30 days is the one-month tenure the
platform already uses at the vote (DES-068 waives "the one-month tenure check" for founding
cohorts; FR-068 names "the one-month tenure requirement"), the re-petition cooldown (COOLDOWN-01),
and the fork cooling-off (DES-034). One published figure for "matured" on the nomination path
keeps FR-023's rights aligned rather than giving nominating a different clock from voting.
Amendment layer: **Open Layer**.

## 3. Routing

| To | Action | Why it is theirs |
|---|---|---|
| **architect** (this session) | Doc 03 §10.11 gains a "Candidate selection" sub-table carrying both constants, their rationale and amendment layer; DES-027's amendment cites them as the published rules FR-081 refers to | Doc 03 is the constants' normative home (the `GovernanceConstants` pattern, DES-091) |
| **product-owner** | Annotate FR-036 ("published minimum … = 5") and FR-023 ("published maturation period … = 30 days for nominating and endorsing a nomination") in Doc 02, as FR-013 was annotated for COOLDOWN-01 | Doc 02 is the PO's; the FR text says "published" and should say where |
| **engineer** | On the next Doc 06 version, replace the "flagged for ratification" comments at `candidates.js:178/189` and Doc 06 §7 item 30(iii) with a citation of this record | Product code and Doc 06 are the engineer's; TRUMO-P03 is documents-only |
| **product-owner / architect** | Two questions this ruling does NOT settle, recorded as Doc 03 §16 **Q18**: **(a)** the candidate-selection schedule durations FR-093's Gherkin says were "set at OI-17 closure" — §10.11 never set them, and v1 publishes per-election dates with no floors; **(b)** whether DES-068's founding-cohort waiver applies to nomination/endorsement maturation (v1 does NOT apply it) _(lettering corrected 2026-09-21 to match Doc 03 §10.11/§16 — Doc 03 v2.15.0 review ISS-09; the earlier draft of this record had them the other way round)_ | Product decisions, not constants |

## 4. Status

| Flag | Status |
|---|---|
| NOMINATION-MIN-01 | **CLOSED** (approver side). Value 5 confirmed. Doc 02 annotation routed to the PO; code-comment update routed to the engineer. |
| MATURATION-01 | **CLOSED** (approver side). Value 30 days confirmed. Doc 02 annotation routed to the PO; code-comment update routed to the engineer. Q18(b) — the founding-cohort waiver — remains open. |
