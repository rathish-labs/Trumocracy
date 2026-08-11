# Document Review — Cycle 2

```
document:       SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md)
version:        2.0.1
mode:           technical
cycle:          2 of 5
reviewer:       Samuel Oyelaran (Engineer — neutral reviewer; not the document owner)
date:           2026-08-11
score:          97%
critical:       0
high:           0
medium:         1
low:            2
verdict:        FAIL
routing:        → Ravi Deshmukh (Architect) for v2.0.2 rework
```

---

## Scope (coordinator-approved, unchanged from cycle-1)

Session scope covers four areas of the v2.0.x increment:
- **(A)** FR-118/FR-119 three-tier amendment boundary + Guarded Layer super-process (OI-18)
- **(B)** SC-13/SC-14 trust-anchor lifecycle design (ADR-020)
- **(C)** OI-17 governance constants §10.11
- **(D)** DES-087..DES-091 steward area FR-114..FR-120

---

## Per-ISS verification (cycle-1 seven issues)

| ISS | Claimed fix | Verified? | Notes |
|-----|-------------|-----------|-------|
| ISS-01 | §10.11 emergency revocation row and §10.1 DoS row corrected to Open Layer bar (60%/15%) with ACTIONS-vs-AMENDMENTS note | **CONFIRMED** | §10.11 emergency row explicitly states "60% supermajority / 15% quorum — UNCHANGED from the ordinary revocation path per ADR-020; only the timelock is shortened". §10.1 last DoS row states the same bar and includes "Guarded Layer super-process applies only to AMENDMENTS of named absolutes, NOT to governance actions such as revocation". Both ADR-020-aligned. |
| ISS-02 | ADR-019 properties renumbered to match OI-18 verbatim-in-substance (P1–P5); quorum marked "Additional design requirement (beyond OI-18 minimum)"; §14 growth-surge test hook (P4) added | **CONFIRMED** | ADR-019 properties: P1=supermajority, P2=inter-vote window, P3=two consecutive votes, P4=growth-surge defence active throughout, P5=independent audit. Exactly matches OI-18-DECISION-2026-08-11.md five properties by number and substance. Quorum correctly flagged "Additional design requirement (beyond OI-18 minimum)". §14 P4-growth-surge hook present with three sub-cases: (a) eligibility unchanged by post-snapshot join, (b) SnapshotImmutable revert if snapshotRoot update attempted, (c) churn-limit enforced throughout inter-vote window. See NI-02 for minor phrasing error in (a). |
| ISS-03 | STRIDE Spoof row added for SC-13 post-registration compromise, naming ADR-020 revocation as mitigation | **CONFIRMED** | §10.1 has a new Spoof row: "post-registration trust-anchor compromise (SC-13) — attacker obtains private key of a CORRECTLY registered issuer…" with `revokeTrustAnchor(issuerId, emergencyPath=true)` via `Governor.execute()` (DES-090, ADR-020) as mitigation, 7-day emergency timelock at 60%/15%, epoch cap (DES-003) as throttle, RISK-30 as residual. |
| ISS-04 | Charter/Guarded/Open Layer naming applied (~78 occurrences); §10.11 disambiguation note added; §17 Glossary entry for party T0..T3 vs platform layers | **CONFIRMED** | §10.11 opens with an explicit naming disambiguation paragraph distinguishing Charter/Guarded/Open Layer (SDD labels) from Doc 02 Tier-1/2/3 (storage-layout labels), and separating party T0..T3 as a distinct namespace. §17 has two new glossary entries: "Tier (party governance)" and "Tier (platform amendment boundary, legacy label)" with clear distinction. DES-087 uses dual naming (Charter Layer / Tier 1, Guarded Layer / Tier 2, Open Layer / Tier 3). ADR-019 Decision section has a "NOTE — naming disambiguation" block. §5.4 API, §5.6 state machine, §10.1, §11, §12, §15 all use the new layer names consistently. Renaming sweep spot-checked — consistent throughout. |
| ISS-05 | §1.1 Must count corrected 97 → 101 | **CONFIRMED** | §1.1 reads "101 Must" as required. |
| ISS-06 | Changelog stale phrasing removed | **CONFIRMED** | v2.0.1 changelog enumerates seven fixes clearly and concisely; v2.0.0 entry describes four-area scope without "forthcoming" placeholders. No stale phrasing observed. |
| ISS-07 | Anchor rotation staleness SLA row (30 days) added to §10.11 | **CONFIRMED** | §10.11 "Trust-anchor lifecycle" section has row: "Anchor rotation staleness SLA (SRE) | 30 days from issuing authority's public rotation announcement to on-chain enactment-vote open" with rationale tying to SRE SLO (Doc 11) and credential-renewal cycle. |

**All seven cycle-1 issues confirmed fixed.**

---

## Renaming sweep spot-check

Spot-checked for consistency of the ~78-occurrence rename:

| Location | New naming | Result |
|----------|-----------|--------|
| DES-087 Responsibility column | "Charter Layer / Tier 1 … Guarded Layer / Tier 2 … Open Layer / Tier 3" | ✓ |
| DES-091 Responsibility column | "Guarded Layer (Tier-2) or Open Layer (Tier-3)" | ✓ |
| §5.4 `proposeAmendment` | "Charter Layer (Tier 1) … Guarded Layer (Tier 2) … Open Layer (Tier 3)" | ✓ |
| §5.4 `enact()` | "Guarded Layer (Tier-2) … Open Layer (Tier-3)" | ✓ |
| §5.6 state machine header | "GUARDED LAYER (TIER-2) SUPER-PROCESS" | ✓ |
| §10.1 STRIDE EoP (super-process bypass) | "Guarded Layer (Tier-2) super-process bypass attempt" | ✓ |
| §10.1 DoS (revocation) | "Guarded Layer super-process (80%/25%/180-day two-vote) applies only to AMENDMENTS" | ✓ |
| §10.11 header | "Charter Layer / Guarded Layer / Open Layer" | ✓ |
| §10.11 table section headers | "Open Layer — ordinary platform amendment (Doc 02 'Tier 3')" / "Guarded Layer — named-absolutes super-process (Doc 02 'Tier 2')" | ✓ |
| §11 failure-mode rows | "Charter Layer (Tier-1) entrenched rule" / "Guarded Layer (Tier-2) super-process" | ✓ |
| §12 ADR-019 summary | "Charter Layer (Tier-1) — seven entrenched rules fork-only; Guarded Layer (Tier-2) … Open Layer (Tier-3)" | ✓ |
| §15 FR-119 | "Guarded Layer / Tier-2 super-process" | ✓ |
| §18 OI-18 entry | "Guarded Layer (Tier-2)" / "Open Layer (Tier-3)" | ✓ |
| ADR-019 Decision table | "Charter Layer — Entrenched charter" / "Guarded Layer — Named absolutes" / "Open Layer — Everything else" | ✓ |
| ADR-019 body (properties) | "Guarded Layer" / "Open Layer" throughout | ✓ |

No bare "Tier-1/2/3" (without a layer name) found in the reviewed scope areas. Rename sweep is consistent.

---

## enrol() arity check

§5.4 API table entry: `enrol(issuerId, π, [Nᵢ, C, issuerId, namespaceId, trustAnchorHash])`

Five signals — unchanged from the SC-01 fix (v1.1.2). Arity verified intact.

---

## New issues found in v2.0.1

### NI-01 — MEDIUM: §11 (and DES-090 in §5.2) contradict ADR-020 and §5.4/§5.6 on when `enrol()` blocking starts after a revocation vote

**Location:** §11 failure-mode row FR-112/DES-090 (line 892); DES-090 Responsibility column (line 312)

**§11 text (verbatim):**
> "new enrolments from the affected issuer are suspended at vote enactment (the `REVOCATION_PENDING` state blocks `enrol()` immediately, not only at timelock expiry); the 7-day timelock is the residual window; accepted residual RISK-30"

**DES-090 text (verbatim, paraphrased):**
> "published expedited emergency variant (shortened but non-zero timelock, see §10.11) suspends new enrolments against the revoked anchor at enactment"

**What ADR-020 (normative) says:**
- Ordinary path: "After `anchorEffectiveAt`, `enrol()` reverts with `AnchorRevoked`" where `anchorEffectiveAt = block.timestamp + 30 days`.
- Emergency path: "On `anchorEffectiveAt` (7 days after enactment), `enrol()` reverts with `AnchorRevoked`."

**What §5.4 says:**
> "on timelock expiry suspends new enrolments (issuer.active remains true, enrolment reverts with `AnchorRevoked`)"

**What §5.6 state machine says:**
> "REVOCATION_PENDING ──timelock elapsed──▶ REVOKED (new enrolments suspended; enrolled credentials unaffected)"

**What §10.11 and §18 say:**
Both state the 7-day window is a Sybil enrolment opportunity ("RISK-30 accepted residual: 7-day window is a Sybil enrolment opportunity"), which is only coherent if enrolments are NOT blocked during the 7-day window.

**Inconsistency:** §11 says blocking is immediate (at `REVOCATION_PENDING` entry, i.e., at vote enactment). All other sources — ADR-020 (normative), §5.4, §5.6, §10.11, §18 — agree blocking occurs at `anchorEffectiveAt` (after the timelock elapses, when the state transitions to `REVOKED`). The §11 "immediately" claim also contradicts the §11 row's own conclusion that "the 7-day timelock is the residual window" (there is no Sybil residual window if blocking is immediate). Per the document's own rule, the ADR wins and §11 (and DES-090's ambiguous "at enactment" phrasing) are the defects.

**Risk:** A test author using §11 as the implementation specification would write test cases expecting `enrol()` to revert immediately after the `revokeTrustAnchor` enactment call — that test would contradict the ADR-compliant implementation and produce false positives or negatives.

**Required fix:** Correct §11 FR-112/DES-090 row to state that `REVOCATION_PENDING` is entered immediately at vote enactment but `enrol()` is NOT blocked until `anchorEffectiveAt` (timelock expiry); the timelock window is when Sybil enrolment remains possible (RISK-30). Correct DES-090 Responsibility column to remove the "at enactment" phrase (or clarify "enactment of the state transition, not the enrolment block").

---

### NI-02 — LOW: §14 P4-growth-surge test description uses "token transfer" — a concept that does not exist in a token-free protocol

**Location:** §14, "(P4-growth-surge)" test sub-case (a)

**Text (verbatim):**
> "(a) token transfer post-snapshot MUST NOT affect vote eligibility at firstVote or secondVote"

**Issue:** "Token transfer" has no meaning in this protocol. BR-010, ADR-007, and DES-075 collectively delete the concept of transferable tokens; no `transfer`, `approve`, or `assign` function exists. The intended test is "membership join/enrolment post-snapshot MUST NOT affect vote eligibility" — i.e., the snapshot eligibility is frozen and post-snapshot new members cannot vote. The phrasing appears to be a copy from a generic governance framework template.

**Risk:** Low — the design intent is unambiguous from context; the phrasing error does not create a design inconsistency. An engineer writing the test would recognise the error. However, a literal read of the test specification produces a test that cannot be executed (no token transfer exists to test).

**Required fix:** Replace "token transfer post-snapshot" with "membership join/enrolment post-snapshot" in sub-case (a).

---

### NI-03 — LOW: Document preamble states "eighteen decision records in `docs/adr/ADR-001..ADR-018`" but there are now twenty

**Location:** Document preamble block (line immediately after the document-header block, "Based on:" section)

**Text (verbatim):**
> "The eighteen decision records in `docs/adr/ADR-001..ADR-018` are normative and are summarised in §12"

**Issue:** ADR-019 and ADR-020 were added in v2.0.0. There are now twenty ADRs. §12 correctly states "Full records in `docs/adr/`. Status of all twenty ADRs: Accepted." The preamble count is stale. This was present in v2.0.0 but not flagged in cycle-1.

**Risk:** Low — §12 is authoritative; no design correctness impact. Auditors reading only the preamble would be misled about the ADR count and range.

**Required fix:** Update preamble to "The twenty decision records in `docs/adr/ADR-001..ADR-020`."

---

## Per-criterion scores

| Criterion | Score | Basis |
|-----------|-------|-------|
| Technical accuracy (ADR alignment, security model, constants correctness) | 96% | NI-01 is a direct technical accuracy error in §11 and DES-090 on blocking timing |
| Completeness (session-scope areas fully covered) | 100% | All 7 ISS confirmed fixed; all four session-scope areas verified |
| Internal consistency (no intra-document contradictions) | 96% | NI-01 creates §11 vs ADR-020 / §5.4 / §5.6 / §10.11 / §18 contradiction |
| Traceability (FR-112..FR-120 → DES mappings) | 100% | §15 table maps all nine requirements to DES elements correctly |
| Security model (STRIDE complete, residuals stated) | 99% | NI-02 is a low phrasing issue in a test hook, not a missing threat |
| Testability (§14 test hooks adequate) | 99% | P4-growth-surge hook present; NI-02 minor phrasing error in sub-case (a) |
| Fix verification (7 cycle-1 issues) | 100% | All 7 confirmed resolved |

**Composite score: 97%**

---

## Verdict

**FAIL** — Score 97% meets the ≥95% threshold, but the zero-critical/high/medium bar is not met (1 medium: NI-01). The document must be routed to the architect for v2.0.2 rework.

**Summary for routing:** Two sections (DES-090 in §5.2 and the §11 FR-112 failure-mode row) incorrectly state that `enrol()` is blocked immediately when `REVOCATION_PENDING` is entered. All normative sources (ADR-020, §5.4, §5.6, §10.11, §18) agree blocking occurs at `anchorEffectiveAt` (after the timelock). Fix DES-090 and §11 to match ADR-020. Additionally fix two low issues: §14 P4 phrasing ("token transfer") and the preamble ADR count (18 → 20).

**Cycle-1 ISS rework quality:** All seven fixes are correct and complete. No regression introduced by the renaming sweep. `enrol()` arity unchanged. The ADR-019 property renumbering is exact. The §10.11 and §17 disambiguation notes are clear and comprehensive.

---

_Reviewer: Samuel Oyelaran (Engineer), acting as neutral reviewer by assignment of the project-manager. Reviewer role: score and list issues only. All rework is the architect's responsibility._
