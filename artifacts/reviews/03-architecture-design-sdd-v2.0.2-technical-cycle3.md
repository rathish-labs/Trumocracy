# Document Review — Cycle 3

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.0.2
document:       SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md)
version:        2.0.2
mode:           technical
cycle:          3 of 5
reviewer:       Samuel Oyelaran (Engineer — neutral reviewer; not the document owner)
date:           2026-08-11
score:          98%
critical:       0
high:           0
medium:         1
low:            0
verdict:        FAIL
routing:        → Ravi Deshmukh (Architect) for v2.0.3 rework
```

---

## Scope (coordinator-approved, unchanged)

Session scope covers four areas of the v2.0.x increment:
- **(A)** FR-118/FR-119 three-tier amendment boundary + Guarded Layer super-process (OI-18)
- **(B)** SC-13/SC-14 trust-anchor lifecycle design (ADR-020)
- **(C)** OI-17 governance constants §10.11
- **(D)** DES-087..DES-091 steward area FR-114..FR-120

---

## Per-NI verification (cycle-2 three issues)

| NI | Claimed fix | Verified? | Notes |
|----|-------------|-----------|-------|
| NI-01 | §5.2 DES-090 row and §11 FR-112 row corrected: REVOCATION_PENDING entered at enactment (public signal); enrol() continues until anchorEffectiveAt; that window is RISK-30 residual | **PARTIALLY CONFIRMED — new residual found (see NN-01)** | Both explicitly flagged locations are correctly fixed. §5.2 DES-090 now reads "entering REVOCATION_PENDING at enactment is the public on-chain signal; enrol() against the affected anchor continues until anchorEffectiveAt (timelock expiry) and reverts AnchorRevoked from then on; the window between enactment and anchorEffectiveAt is the accepted RISK-30 residual." §11 FR-112 row reads "REVOCATION_PENDING is entered at vote enactment (public on-chain signal); enrol() against the affected anchor CONTINUES until anchorEffectiveAt (timelock expiry) and reverts AnchorRevoked from then on." Both match ADR-020 exactly. However, §10.11 ordinary revocation timelock row still says "new enrolments…suspended at enactment" — see NN-01. |
| NI-02 | §14 P4-growth-surge sub-case (a) changed from "token transfer" to "membership join/enrolment post-snapshot" | **CONFIRMED** | §14 reads: "(a) membership join/enrolment post-snapshot MUST NOT affect vote eligibility at firstVote or secondVote." Correct. |
| NI-03 | Preamble ADR count updated: "eighteen…ADR-001..ADR-018" → "twenty…ADR-001..ADR-020" | **CONFIRMED** | Preamble reads: "The twenty decision records in `docs/adr/ADR-001..ADR-020` are normative and are summarised in §12." Correct. |

---

## Seven-source consistency audit (NI-01 follow-up, coordinator-directed)

The coordinator required verification that all seven sources now agree on blocking timing. Results:

| Source | Expected: blocking at anchorEffectiveAt | Status |
|--------|-----------------------------------------|--------|
| **ADR-020** (normative) | "On `anchorEffectiveAt` (7 days after enactment), `enrol()` reverts with `AnchorRevoked`" | ✓ unchanged |
| **§5.2 DES-090** | "enrol() against the affected anchor continues until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on" | ✓ FIXED in v2.0.2 |
| **§5.4 `revokeTrustAnchor()`** | "on timelock expiry suspends new enrolments (issuer.active remains true, enrolment reverts with `AnchorRevoked`)" | ✓ consistent |
| **§5.6 TRUST_ANCHOR state machine** | "REVOCATION_PENDING ──timelock elapsed──▶ REVOKED (new enrolments suspended; enrolled credentials unaffected)" | ✓ consistent |
| **§10.11 ordinary revocation timelock** | "new enrolments under the affected issuer are suspended at enactment" | **✗ WRONG — see NN-01** |
| **§10.11 emergency revocation timelock** | "RISK-30 accepted residual: 7-day window is a Sybil enrolment opportunity if private key is compromised between enactment and emergency vote" (implies enrolments continue during the window) | ✓ consistent |
| **§11 FR-112 row** | "enrol() against the affected anchor CONTINUES until `anchorEffectiveAt` (timelock expiry) and reverts `AnchorRevoked` from then on" | ✓ FIXED in v2.0.2 |
| **§18 SC-13/SC-14 closure** | "an anchor compromised during the 7-day emergency timelock window allows Sybil enrolments for that window" (implies enrolments continue during the window) | ✓ consistent |

**Result: 7 of 8 sources consistent (counting §10.11 ordinary and emergency rows separately). The §10.11 ordinary revocation row is the sole remaining disagreement.**

---

## New issue found in v2.0.2

### NN-01 — MEDIUM: §10.11 ordinary revocation timelock row says "suspended at enactment" — blocking is at anchorEffectiveAt, not at enactment

**Location:** §10.11 "Trust-anchor lifecycle" section, ordinary revocation timelock row

**Text (verbatim):**
> "Ordinary revocation timelock | 30 days | Enough time for the community to identify false alarms; new enrolments under the affected issuer are **suspended at enactment**; existing credentials unaffected"

**What the normative sources say:**
- **ADR-020:** "On enactment, `trustAnchorState` transitions to `REVOCATION_PENDING` with `anchorEffectiveAt = block.timestamp + 30 days`… After `anchorEffectiveAt`, `enrol()` reverts with `AnchorRevoked`." Blocking = 30 days after enactment.
- **§5.4:** "on timelock expiry suspends new enrolments." Blocking = at timelock expiry.
- **§5.6 state machine:** "REVOCATION_PENDING ──timelock elapsed──▶ REVOKED (new enrolments suspended)." Blocking = at state transition to REVOKED.
- **§5.2 DES-090 (fixed in v2.0.2):** "enrol() against the affected anchor continues until `anchorEffectiveAt` (timelock expiry)." Explicitly says continuing, not suspended, during the timelock.
- **§11 FR-112 (fixed in v2.0.2):** "enrol() against the affected anchor CONTINUES until `anchorEffectiveAt`." Same.
- **§18 SC-13/SC-14:** "an anchor compromised during the 7-day emergency timelock window allows Sybil enrolments for that window." Confirms enrolments continue during the window.

**Internal inconsistency:** §10.11 ordinary row says "suspended at enactment," but §10.11 emergency row correctly implies enrolments continue during the 7-day window ("7-day window is a Sybil enrolment opportunity"). The two rows in the same §10.11 table disagree with each other.

**Root cause:** This is the same error type as NI-01 (blocking timing stated as "at enactment" instead of "at anchorEffectiveAt"), persisting in a fourth location that was not included in the NI-01 fix scope (NI-01 targeted §5.2 and §11 only).

**Risk:** §10.11 is the governance constants section — it is the primary reference for SRE runbooks, community coordinators, and parties monitoring a revocation. "Suspended at enactment" implies the community and SRE can treat a passed revocation vote as an immediate enrolment block; in reality, the issuer's anchor remains valid for 30 days (ordinary) or 7 days (emergency). An SRE runbook written from §10.11 ordinary row would set incorrect alarm thresholds and post-enactment verification steps.

**Required fix:** Correct §10.11 ordinary revocation timelock row to: "new enrolments under the affected issuer are suspended at `anchorEffectiveAt` (30 days after enactment); the REVOCATION_PENDING state is entered at enactment and is the public on-chain signal; existing credentials unaffected."

---

## Per-criterion scores (cycle 3)

| Criterion | Score | Basis |
|-----------|-------|-------|
| Technical accuracy (ADR alignment, constants, security model) | 98% | NN-01 is a technical accuracy error in §10.11 (one of eight checked locations still wrong) |
| Completeness (session-scope areas covered) | 100% | All three NI fixes confirmed or partially confirmed; four session-scope areas covered |
| Internal consistency | 97% | §10.11 ordinary row contradicts §10.11 emergency row and five other sources |
| Traceability (FR → DES mappings) | 100% | No regression; §15 table unchanged and correct |
| Security model (STRIDE, residuals) | 100% | No new security gaps; NN-01 is a documentation error, not a missing mitigation |
| Testability (§14 test hooks) | 100% | NI-02 fully corrected; no regression |
| Fix verification (3 cycle-2 NI issues) | 100% | NI-02 and NI-03 fully confirmed; NI-01 partially confirmed (2 of 2 targeted locations fixed; 1 new residual in §10.11) |

**Composite score: 98%**

---

## Verdict

**FAIL** — Score 98% meets the ≥95% threshold, but the zero-critical/high/medium bar is not met (1 medium: NN-01). The document must be routed to the architect for v2.0.3 rework.

**Summary for routing:** §10.11 ordinary revocation timelock row says "suspended at enactment" — this contradicts ADR-020, §5.2, §5.4, §5.6, §11, §18, and §10.11's own emergency row. The fix is a single-sentence correction to the ordinary revocation row rationale column: state that REVOCATION_PENDING is entered at enactment (public signal) but enrol() blocking starts at anchorEffectiveAt (30 days later). All other cycle-2 issues are resolved. No new LOW issues. This is a minimal, targeted change.

**Cycle progress:** 3 cycles used, 2 remaining before escalation cap.

---

_Reviewer: Samuel Oyelaran (Engineer), acting as neutral reviewer by assignment of the project-manager. Reviewer role: score and list issues only. All rework is the architect's responsibility._
