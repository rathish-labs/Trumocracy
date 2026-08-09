# Session memory — product-owner — 2026-08-08T16:10

```
Role:        product-owner
Product:     Trumocracy
Session:     2026-08-08T16:10 (ISO-8601)
Phase:       Vision · Define
Outcome:     Docs 01, 02, 05 written at v1.0.0 / Status: In Review. Stopped for Gate 1.
```

## 1. What I did

Turned the raw bet ("a decentralized, transparent platform that democratizes political party
creation, incubation and internal governance") into an approvable direction. No design, no code.

**Artifacts written (all self-contained, artifact-bus rule):**
- `/home/user/Trumocracy/docs/01-press-release-prfaq.md` — PR-FAQ, PR-TRUMOCRACY v1.0.0.
- `/home/user/Trumocracy/docs/02-requirements-srs.md` — SRS, SRS-TRUMOCRACY v1.0.0.
- `/home/user/Trumocracy/docs/05-product-backlog.md` — Backlog, BKLG-TRUMOCRACY v1.0.0.

**Step 0 (prompt-architect front door):** skipped deliberately. The incoming brief already named the
customer (verified citizens in a jurisdiction), the problem (political gatekeeping) and measurable
outcomes (cost per action, threshold activation, coercion resistance). No `<clarifying_questions>` or
`<missing_information>` was warranted; residual gaps were captured as open items `OI-01`…`OI-11`
rather than guessed.

**Refine intake:** not invoked. `docs/refine-log.md` is the empty template — no `REF-##` entries
exist, so no promotion/closure decisions were made. No requirement in Doc 02 carries a `Source =
REF-##` value at v1.0.0.

## 2. Counts

| Artefact | Count |
|----------|-------|
| Business requirements `BR` | 12 (BR-001 … BR-012) |
| Functional requirements `FR` | 61 (FR-001 … FR-061) |
| — of which **Must** | **42** |
| — Should | 16 · — Could | 3 |
| Non-functional `NFR` | 26 (NFR-001 … NFR-026); 22 Must, 4 Should |
| Constraints `CON` | 12 (CON-001 … CON-012) |
| Risks `RISK` | 16 (RISK-01 … RISK-16) |
| Recorded trade-offs `TD` | 6 (TD-01 … TD-06) |
| Open issues `OI` | 11 (OI-01 … OI-11); 5 are Gate-1 blocking |
| Epics `EP` | 10 (EP-01 … EP-10) |
| Features `FE` | 28 (FE-001 … FE-028) |
| User stories `US` | 70 (US-0001 … US-0070), 396 points |
| Provisional screens `SCR` | 20 (SCR-01 … SCR-20) — non-binding, architect confirms |
| Non-functional backlog items `NF` | 8 (NF-01 … NF-08) |

## 3. Decisions made (and why)

1. **Must set is 42 FRs, not the ~30-35 the brief suggested.** Decomposed and justified in Doc 02
   §11: 20 walking-skeleton FRs + 22 guardrail FRs. Deferring a guardrail produces a *worse*
   product, not a smaller one. The only coherent deferral offered to Gate 1 is recall
   (FR-042/043/045). Recorded as `OI-02`.
2. **Deliberate disclosure asymmetry** (`TD-02`): ordinary members anonymous and never disclosable;
   candidates and office-holders public by explicit, separately recorded, irreversible-for-the-term
   informed consent (FR-037, FR-038, FR-048).
3. **Erasure vs immutability resolved by holding nothing** (`TD-03`, `CON-008`, `NFR-015`): no
   personal data may ever reach the public record, so erasure has nothing to bite on. Flagged
   honestly as a *legal posture*, not a legal certainty; per-jurisdiction review is a launch
   condition.
4. **Receipt-freeness chosen over individual vote verification** (`TD-06`): voters verify the tally,
   not their own ballot. The confidence cost is recorded, not hidden.
5. **No override button anywhere** (`CON-003`, `FR-056`, `TD-04`): accepted that a party can make an
   unfixable decision. Only permitted intervention is jurisdiction-scoped *display* filtering,
   publicly logged, never a record mutation.
6. **`CON-001` is absolute:** the platform organises parties and never runs binding state elections.
   Stated as non-negotiable at any gate.
7. **Hard PR-FAQ questions answered with losses named**, not spun — extremist organising, billionaire
   influence via advertising, residual attestor/state exposure, the real cost of verifiability, and
   "aren't you the gatekeeper?" (Doc 01 §E3).
8. **Backlog ordered as a walking skeleton**; guardrail stories (US-0061 verifiable record, US-0066
   no-token, US-0070 access) pulled forward to be true of the first production action.
9. **Named individual owners on every BR/FR/NFR/RISK/story** — 15 invented but plausible people
   (Doc 02 §2.7). No team names anywhere.
10. **Four declared coverage gaps** in Doc 05 §12 (FR-005, FR-049, FR-050, FR-052, FR-053 have no
    story yet — all Should/Could). Declared rather than hidden; I own closing them before their
    target sprint.

## 4. Gate-1 readiness summary (hand to project-manager)

**Status: READY to be packeted for Gate 1, with 5 decisions required from the human approver.**

| Gate-1 check | Status |
|--------------|--------|
| PR-FAQ complete (headline, problem, solution, customer + stakeholder FAQ, hard questions) | ✅ Doc 01 |
| Measurable success metrics with baseline, target, guardrail | ✅ Doc 01 §C (11 metrics) |
| Explicit out-of-scope | ✅ Doc 01 §D (10 non-goals) |
| Kill criteria | ✅ Doc 01 §E2 (7 criteria) |
| Every BR/FR/NFR indexed, never reused | ✅ Doc 02 §3/§4/§6 |
| MoSCoW prioritization applied | ✅ Doc 02 §11 |
| Named **individual** owner on every requirement | ✅ Doc 02 §3/§4/§6/§10 |
| Gherkin AC for every Must requirement | ✅ Doc 02 §8 (42 Must FRs + 7 Must NFRs) |
| Every FR/NFR traces up to a BR | ✅ `Traces to` column, 100% |
| Constraints and risks registered | ✅ 12 CON, 16 RISK with L/I/mitigation/owner |
| Trade-offs recorded rather than resolved-by-assertion | ✅ Doc 02 §9.3 (6 recorded) |
| Backlog seeded EP ▸ FE ▸ US with Gherkin + owner + FR trace | ✅ Doc 05 (10/28/70) |
| Adversarial/negative scenario on every story | ✅ Doc 05 §6 |
| No design, no ADR, no code produced | ✅ |

**Open items the Gate-1 approver MUST decide (blocking):** `OI-01` threshold calibration method ·
`OI-02` accept 42-FR Must set or defer recall · `OI-03` acceptable enrolment exclusion rate and the
non-document attestation path · `OI-04` the three pilot jurisdictions · `OI-05` the `NFR-002` k≥1000
anonymity floor vs `BR-004` ward-level representation conflict.

**Non-blocking, deferred to Design/Gate 2:** `OI-06` … `OI-11`.

**Next in SOP:** project-manager consolidates the Gate-1 packet (with Doc 13) and assigns a *neutral*
role to run the `document-review` skill in **business** mode over Docs 01, 02 and 05 v1.0.0 → reports
into `artifacts/reviews/`. I am the owning role for all rework; a FAIL routes back to me for v1.0.1+.

## 5. Open items I own

- Close the four declared backlog coverage gaps (FR-005, FR-049/050/052, FR-053) with stories.
- Rework Docs 01/02/05 on any `document-review` FAIL (cap 5 cycles, then ESCALATE).
- Re-baseline `OI-08` governance constants (maturation, dwell, timelock, recall bars, cooldowns)
  once the architect returns feasibility in Doc 03 — these are product decisions, not design ones.
- Own `OI-06` funding sustainability beyond month 18.

## 6. IDs touched (created at v1.0.0 — none reused, none renumbered)

- `BR-001` … `BR-012`
- `FR-001` … `FR-061`
- `NFR-001` … `NFR-026`
- `CON-001` … `CON-012`
- `RISK-01` … `RISK-16`
- `EP-01` … `EP-10`
- `FE-001` … `FE-028`
- `US-0001` … `US-0070`
- `SCR-01` … `SCR-20` (**provisional only** — architect owns final SCR assignment in Doc 03)
- Local, non-global IDs: `TD-01`…`TD-06`, `OI-01`…`OI-11`, `A-01`…`A-06`, `NF-01`…`NF-08`
- **Not touched:** no `ADR`, no `DES`, no `UT`, no `TC`, no `REF`.

## 7. Notes for downstream roles (selective recall hints)

- **architect:** read Doc 02 §6 (NFR-002 k≥1000, NFR-005 cost, NFR-014 censorship, NFR-025 liveness),
  §9.1 (`CON-003` no override, `CON-012` no bespoke crypto) and §10 (`RISK-09`, `RISK-10`) first —
  these four bound the whole design space. `OI-05` is a genuine requirements conflict you may need
  to bounce back to me, not design around.
- **tester:** every Must FR already has Gherkin in Doc 02 §8; build `TC-####` directly from it.
  Doc 05 §12 lists four **declared** non-Must coverage gaps — record them as open non-Must RTM rows.
- **project-manager:** `CON-007` sets the appetite (USD 4.2M / 18 people / launch 2027-03-01);
  Gate 1 target 2026-08-22.
