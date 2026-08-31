# Document Review — Doc 03 Architecture / SDD v2.1.1 (Technical, Cycle 2)

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.1.1
document:       docs/03-architecture-design-sdd.md
version:        2.1.1
mode:           technical
cycle:          2
reviewer:       Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:           2026-08-11
score:          100
critical:       0
high:           0
medium:         0
low:            0
verdict:        PASS
```

---

## 1. Assignment scope

This cycle-2 review covers Doc 03 v2.1.1 — the architect's rework addressing all five ISS
issues raised in cycle-1 (v2.1.0). Each fix is verified individually below. A spot-check for
new inconsistencies was also run.

Reviewer constraint: score and list only; no edits to any document under review; no product
code.

---

## 2. Scoring rubric

| Severity | Deduction |
|---|---|
| Critical | −10 |
| High | −7 |
| Medium | −2 |
| Low | −0.5 |

Starting score: 100. Deductions: 0 → **100%**.

Pass bar: score ≥ 95% AND zero critical/high/medium issues. Low issues are allowed.

---

## 3. Per-ISS verification

### ISS-01 (MEDIUM — REQUIRED) — §5.3 TrustAnchorLifecycle enum missing ROTATION_ABORTED

**Claimed fix:** ROTATION_ABORTED added to §5.3 enum.

**Verification:**

§5.3 TrustAnchorLifecycle enum now reads:
```
ACTIVE,
ROTATION_PENDING,   // newHash and effectiveAt known; overlapEnd = effectiveAt + overlapWindow
ROTATION_ABORTED,   // abort enacted via abortRotation(); incumbent hash restored; pending anchor
                    // rejected for new enrolments [DES-090, SC-18]
REVOCATION_PENDING, // effectiveAt known (ordinary or emergency path)
REVOKED
```

`ROTATION_ABORTED` is present at the correct position in the enum, with an accurate inline
annotation cross-referencing DES-090 and SC-18.

Consistency cross-check:
- §5.4 `abortRotation()` entry: "transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE
  (incumbent hash restored)" — consistent. ✓
- §5.6 TRUST_ANCHOR state machine: "ROTATION_PENDING ──abortRotation()──▶ ROTATION_ABORTED
  ──▶ ACTIVE" — consistent. ✓
- DES-090: references ROTATION_ABORTED — consistent. ✓
- ADR-020 amendment note (lines 255-256): "ROTATION_PENDING → ROTATION_ABORTED → ACTIVE" —
  consistent. ✓

**ISS-01: CONFIRMED FIXED. ✓**

### ISS-02 (LOW) — §11 sweep table row 4 references non-existent §5.4 function

**Claimed fix:** Corrected from "publishOperationalReport §5.4" to "FR-115(d)/NFR-019."

**Verification:**

§11 single-point-of-progress sweep table, row 4 now reads:
"Operational reports (FR-115(d) / NFR-019) — stewards publish platform transparency
reports | NO | A missing report delays public information but blocks no citizen transaction,
vote, or enrolment; the reporting obligation is transparency-only | N/A — reputational only;
addressed by Doc 11 SLO monitoring"

The phantom §5.4 function reference is removed. The row now cites the governing requirement
IDs (FR-115(d) / NFR-019) and correctly explains why this power is not a citizen-process
blocker. No §5.4 function is implied or referenced.

Confirmation: `publishOperationalReport` does not appear anywhere in Doc 03 v2.1.1 other than
the v2.1.1 changelog entry recording the fix. ✓

**ISS-02: CONFIRMED FIXED. ✓**

### ISS-03 (LOW) — DES-092 Tech column named submitCitizenAuditRef(); §5.4 and ADR-019 use publishAuditRef

**Claimed fix:** DES-092 Tech column updated to `publishAuditRef`; only remaining occurrence
of `submitCitizenAuditRef` is in the changelog documenting the rename (acceptable).

**Verification:**

Grep for `submitCitizenAuditRef` across Doc 03 v2.1.1: one match, on line 15 (the v2.1.1
changelog entry: "ISS-03 DES-092 Tech column submitCitizenAuditRef → publishAuditRef").

Grep for `submitCitizenAuditRef` across all ADR files: zero matches.

Confirming §5.4 publishAuditRef entry (line 500) now covers both paths under the single
function name:
"| publishAuditRef(proposalId, auditRefHash) | steward (primary); OR any enrolled citizen
after steward-inaction window (DES-092; SC-17); citizen fallback is IMMEDIATE if steward
vacancy | — | … audit substance requirements (independence, scope) UNCHANGED regardless of
who publishes |"

§5.6 GUARDED LAYER state machine: all three publishAuditRef transitions use the consistent
function name. ✓

ADR-019 amendment note (line 224): "any enrolled citizen MAY call `publishAuditRef(issuerId,
auditRef)`" — consistent. ✓

The changelog occurrence is a historical record of the rename, not a live design reference.
Acceptable per coordinator assignment.

**ISS-03: CONFIRMED FIXED. ✓**

### ISS-04 (LOW) — §12 ADR index does not note v2.1.0 amendments to ADR-019 and ADR-020

**Claimed fix:** Amendment notes added to §12 entries for ADR-019 and ADR-020.

**Verification:**

§12 ADR index entry for ADR-019 (line 984):
"| 019 | Three-layer amendment boundary: Charter Layer (Tier-1) — seven entrenched rules
fork-only; Guarded Layer (Tier-2) — named absolutes via five-property super-process
(80%/25%, 180-day window, audit); Open Layer (Tier-3) — ordinary citizen vote;
**amended 2026-08-11 (SC-17: citizen-inaction fallback for publishAuditRef)** | …"

Amendment note for SC-17 present. ✓

§12 ADR index entry for ADR-020 (line 985):
"| 020 | Trust-anchor lifecycle: rotation via 60-day dual-anchor overlap (SC-14 closed);
revocation ordinary 30-day / emergency 7-day timelock (SC-13 closed); both enacted only by
passed governance vote via Governor.execute();
**amended 2026-08-11 (SC-18: ROTATION_PENDING abort path — ROTATION_ABORTED state added)** |
…"

Amendment note for SC-18 present. ✓

Both now consistent with the convention applied to ADR-017 and ADR-003 in the same §12 table.

**ISS-04: CONFIRMED FIXED. ✓**

### ISS-05 (LOW) — ADR-020 body state machine diagram not updated to include ROTATION_ABORTED

**Claimed fix:** ADR-020 body state machine diagram updated to show abort path.

**Verification:**

ADR-020 Decision section state machine (lines 149-185) now reads:

```
[ROTATION_PENDING]
    │  old anchor accepted until anchorOverlapEnd (60 days)
    │  new anchor accepted immediately
    │
    ├─ block.timestamp >= anchorEffectiveAt ──────────▶ [ACTIVE] (new anchor …)
    │
    └─ abortRotation() via Governor.execute() (Open Layer bar; SC-18)
           │
           ▼
       [ROTATION_ABORTED]
           │  incumbent hash restored; pending anchor hash cleared
           │  pending-anchor credentials rejected for new enrolments from enactment
           │  no retroactive invalidation of enrolments completed during ROTATION_PENDING
           │
           └──────────────────────────────────────────▶ [ACTIVE] (incumbent/pre-rotation hash)
```

The ROTATION_ABORTED branch is now present in the primary body diagram with full annotation:
incumbent hash restored, pending anchor cleared, no retroactive invalidation, Open Layer bar
noted. The original amendment note at the end of the ADR is now redundant with the body
diagram (both are correct and consistent).

**ISS-05: CONFIRMED FIXED. ✓**

---

## 4. Spot-check for new inconsistencies

### 4a. §5.3 / §5.4 / §5.6 / DES-090 / ADR-020 ROTATION_ABORTED consistency

All five loci now consistently carry ROTATION_ABORTED with matching semantics (incumbent hash
restored, no retroactive invalidation, Open Layer bar, pending-anchor rejected for new
enrolments). No internal inconsistency introduced by the enum addition.

### 4b. Revocation-timing regression

§10.11 ordinary revocation row (line 891): "`REVOCATION_PENDING` is entered at enactment
(public on-chain signal); `enrol()` against the affected anchor CONTINUES until
`anchorEffectiveAt` (30 days after enactment) and reverts `AnchorRevoked` from then on;
the enactment-to-effectiveAt window is the accepted RISK-30 residual; existing enrolled
credentials unaffected." Consistent with all prior cycles. ✓

**NO REGRESSION.**

### 4c. enrol() five-signal vector

§5.4 `enrol()` entry (line 487): `[Nᵢ, C, issuerId, namespaceId, trustAnchorHash]` — arity
and signal order unchanged. ✓

**NO REGRESSION.**

### 4d. publishAuditRef citizen-fallback consistency across §5.4 / §5.6 / DES-092 / ADR-019

- §5.4: single function, both paths explicit, inaction window + vacancy-immediate stated. ✓
- §5.6 state machine: all three WINDOW_OPEN → AUDIT_PUBLISHED transitions use `publishAuditRef`. ✓
- DES-092: no remaining reference to submitCitizenAuditRef. ✓
- ADR-019 amendment note: "any enrolled citizen MAY call `publishAuditRef`". ✓

**Fully consistent. No new inconsistency.**

### 4e. submitCitizenAuditRef residual

One occurrence in Doc 03 (changelog line 15); zero in ADR files. The changelog reference is
a historical record of the rename and does not constitute a live design specification.
Acceptable.

---

## 5. Summary

| ISS | Severity | Description | Status |
|---|---|---|---|
| ISS-01 | MEDIUM | §5.3 enum missing ROTATION_ABORTED | CONFIRMED FIXED ✓ |
| ISS-02 | LOW | §11 sweep row 4 phantom §5.4 reference | CONFIRMED FIXED ✓ |
| ISS-03 | LOW | DES-092 submitCitizenAuditRef → publishAuditRef | CONFIRMED FIXED ✓ |
| ISS-04 | LOW | §12 missing ADR-019/ADR-020 amendment notes | CONFIRMED FIXED ✓ |
| ISS-05 | LOW | ADR-020 body state machine stale | CONFIRMED FIXED ✓ |
| Revocation timing | — | Regression check | NO REGRESSION ✓ |
| enrol() vector | — | Regression check | NO REGRESSION ✓ |
| publishAuditRef consistency | — | Spot-check | NO INCONSISTENCY ✓ |
| New issues found | — | — | NONE |

---

## 6. Verdict

**Score: 100% — PASS**

All five cycle-1 issues are confirmed fixed. No new issues were introduced. The document is
internally consistent across all five fix locations and shows no regression against the
prior-cycle baselines. Per the review-and-rework loop protocol, the owning role (Ravi
Deshmukh, Principal Architect) may set `Status: Approved` on Doc 03 v2.1.1 and the SOP
advances.
