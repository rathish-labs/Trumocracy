# Document Review — Doc 03 Architecture / SDD v2.1.0 (Technical, Cycle 1)

```
document:       docs/03-architecture-design-sdd.md
version:        2.1.0
mode:           technical
cycle:          1
reviewer:       Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:           2026-08-11
score:          96
critical:       0
high:           0
medium:         1
low:            4
verdict:        FAIL
```

---

## 1. Assignment scope

This cycle-1 review covers Doc 03 v2.1.0 (+ dated amendments in ADR-019 and ADR-020)
following a security-fix session that addressed SC-15..SC-21 from
`artifacts/reviews/SECURITY-SCAN-DOC03-V2-2026-08-11.md`.

Eight directed checks were assigned (see §3). Two explicit probes were assigned (items 1 and 7
of the original directed checks — answered in §4). The regression suite from prior cycles
(revocation timing, enrol() 5-signal vector, §18 entries, changelog, counts) was rerun (§5).

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

Starting score: 100. Deductions: 1 medium (−2) + 4 low (−2.0) = −4.0 → **96%**.

Pass bar: score ≥ 95% **AND** zero critical/high/medium issues. Low issues are allowed.

---

## 3. Per-finding verification — SC-15 through SC-21

### SC-15 (CRITICAL) — ProtocolGovernance + StewardRegistry in IMMUTABLE CORE

**Finding:** Both contracts must sit in the IMMUTABLE CORE container; the GENERAL RULE must be
stated (any contract that enforces a Charter Layer rule must itself be Charter Layer); routing
surfaces must be explicitly excluded.

**Verification:**

- §5.1 container diagram: `ProtocolGovernance` and `StewardRegistry` both appear inside the
  IMMUTABLE CORE box. ✓
- DES-087: GENERAL RULE is stated verbatim: "any contract that enforces a Charter Layer rule
  MUST itself be immutable (IMMUTABLE CORE)." ✓
- Routing surface exclusions explicitly enumerated in DES-087: proxy/upgrade contracts,
  registry pointer contracts, `Governor.execute` action-class routing, `GovernanceConstants`
  setter function. ✓
- §18 SC-15 entry: "CLOSED at design level — DES-087 + §5.1." ✓

**Verdict: ADDRESSED.**

Coherence probe (Probe 1) answered in §4.

### SC-16 (HIGH) — §10.11 Amendment Layer column; anti-circularity; setter contradiction

**Finding:** All §10.11 rows must carry an Amendment Layer column; the anti-circularity rule
must be explicit (Open Layer coalition cannot lower Guarded Layer constants); setter
contradiction (GovernanceConstants classified at multiple layers) must be resolved.

**Verification:**

- §10.11: "Amendment Layer" column present on all rows of the governance-constants table. ✓
- Anti-circularity preamble: explicit note that Guarded Layer constants (Tier-2 quorum,
  supermajority, inter-vote window, audit lead time, STEWARD_INACTION_WINDOW) are Guarded
  Layer and cannot be lowered by an Open Layer coalition. ✓
- STEWARD_INACTION_WINDOW = 60 days, classified "Guarded Layer (anti-circularity: SC-16)". ✓
- Tier-2 quorum row: "25% of enrolled citizens (denominator = enrolled count at snapshotRoot,
  SC-20)" classified "Guarded Layer (anti-circularity: SC-16)". ✓
- GovernanceConstants setter: classified and the contradiction note (setter is Open Layer
  mechanism, not itself a Guarded Layer constant) is resolved in DES-091. ✓
- §18 SC-16 entry: "CLOSED at design level." ✓

**Verdict: ADDRESSED.**

### SC-17 (HIGH) — DES-092 citizen-inaction fallback for publishAuditRef

**Finding:** 60-day STEWARD_INACTION_WINDOW from `firstVoteClosedAt`; vacancy triggers
immediately; audit substance unchanged; ADR-019 amendment note; §5.4/§5.6 consistent; fallback
must be ADOPTED (not merely a recorded trade-off).

**Verification:**

- DES-092 (§5.2): First-class design element, not in a trade-offs section. ADOPTED. ✓
- STEWARD_INACTION_WINDOW: 60 days from `firstVoteClosedAt`. ✓
- Vacancy-immediate: steward vacancy triggers citizen fallback immediately (no 60-day wait). ✓
- Audit substance: 30-day `AUDIT_LEAD_TIME` runs from publication timestamp regardless of
  publisher identity; unchanged by the fallback. ✓
- §5.4 `publishAuditRef` entry: extended to cover citizen-fallback invocation path. ✓
- §5.6 GUARDED LAYER state machine: citizen-fallback transitions shown. ✓
- ADR-019 amendment note (lines 218-231): present, accurate. Confirms 60-day window from
  `firstVoteClosedAt`; vacancy-immediate; audit substance unchanged; DES-092 cited; SC-19
  issuer-onboarding pattern also covered. ✓
- §18 SC-17 entry: "CLOSED at design level." ✓

**Verdict: ADDRESSED.**

Note: ISS-03 (LOW) flags an ABI naming inconsistency between DES-092 and §5.4/ADR-019 —
see §6.

### SC-18 (HIGH) — abortRotation at Open Layer bar; ROTATION_ABORTED state in all loci

**Finding:** `abortRotation()` must be at Open Layer bar; ROTATION_PENDING → ROTATION_ABORTED
→ ACTIVE must appear in §5.6, DES-090, §5.4, and ADR-020; no retroactive invalidation.

**Verification:**

- DES-090 (§5.2): ROTATION ABORT section added; Open Layer bar stated; no retroactive
  invalidation. ✓
- §5.4 API contracts: `abortRotation(issuerId)` entry present; "Open Layer bar (60%/15%)";
  transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE; incumbent/pre-rotation hash
  restored; no retroactive invalidation. ✓
- §5.6 TRUST_ANCHOR state machine: "ROTATION_PENDING ──abortRotation() via Governor.execute()
  (Open Layer bar)──▶ ROTATION_ABORTED──▶ ACTIVE (incumbent/pre-rotation hash; pending-anchor
  credentials rejected for new enrolments from abort; no retroactive invalidation)." ✓
- ADR-020 amendment note (lines 247-263): present, accurate. Confirms Open Layer bar; state
  machine addition `ROTATION_PENDING → ROTATION_ABORTED → ACTIVE`; no retroactive
  invalidation; no other lifecycle paths changed. ✓
- §18 SC-18 entry: "CLOSED at design level." ✓

**Gap found: ISS-01 (MEDIUM).** §5.3 TrustAnchorLifecycle data model enum does not include
ROTATION_ABORTED — see §6.

**Verdict: PARTIALLY ADDRESSED** (ISS-01 is the remaining gap).

### SC-19 (MEDIUM) — DES-092 issuer-onboarding citizen fallback

**Finding:** Same inaction window and vacancy rule applied to issuer-onboarding coordination
trigger; ADR-019 amendment note covers SC-19.

**Verification:**

- DES-092 (§5.2): explicitly covers both publishAuditRef (SC-17) and issuer-onboarding
  coordination trigger (SC-19) with the same 60-day inaction window and vacancy-immediate
  rule. ✓
- ADR-019 amendment note (line 228): "The citizen-fallback pattern is also applied to the
  issuer-onboarding coordination trigger (SC-19, same inaction window and vacancy rule —
  Doc 03 §5.2 DES-092)." ✓
- §18 SC-19 entry: "CLOSED at design level." ✓

**Verdict: ADDRESSED.**

### SC-20 (MEDIUM) — quorum denominator = enrolled at snapshotRoot

**Finding:** DES-087, §10.11 preamble, and Tier-2 quorum row must all specify enrolled-at-
snapshotRoot as the quorum denominator (not live enrolled count at vote time).

**Verification:**

- DES-087: "quorum denominator = enrolled citizen count at `snapshotRoot` (committed at
  `proposeAmendment()`; not live enrolled count at vote time)." ✓
- §10.11 preamble: quorum-denominator note states enrolled at snapshotRoot. ✓
- §10.11 Tier-2 quorum row: "25% of enrolled citizens (denominator = enrolled count at
  snapshotRoot, SC-20) — Guarded Layer (anti-circularity: SC-16)." ✓
- §18 SC-20 entry: "CLOSED at design level." ✓

**Verdict: ADDRESSED.**

### SC-21 (LOW) — STRIDE EoP residual updated

**Finding:** STRIDE EoP Governor.execute row must state that SC-15 GENERAL RULE closes the
contract-substitution / proxy-redirection bypass class; remaining residual is a logic bug
inside the immutable code.

**Verification:**

- §10.1 STRIDE EoP Governor.execute row: "SC-15 general rule (ProtocolGovernance IMMUTABLE
  CORE — no upgrade, no proxy, no governance-vote replacement) closes the bypass class of
  contract substitution or proxy redirection (SC-21); remaining residual is a logic bug inside
  the immutable code." ✓
- §18 SC-21 entry: "CLOSED at design level." ✓

**Verdict: ADDRESSED.**

---

## 4. Probe answers

### Probe 1 — Is StewardRegistry being IMMUTABLE CORE coherent with amendable steward constants in GovernanceConstants?

**Answer: COHERENT — no contradiction.**

StewardRegistry holds enforcement logic (who is currently a registered steward; enforcement
of the registered-steward list). GovernanceConstants holds mutable governance parameters
(steward term length, steward seat count), both classified Open Layer in §10.11. An Open
Layer governance vote can amend steward seat count or term length via GovernanceConstants;
StewardRegistry enforces whoever is currently registered, reading parameters from the
mutable constants contract.

The immutable registry's enforcement code does not change. The constants it consults (and
the registered entries it enforces) change via governance. The pattern is analogous to an
immutable constitutional enforcement mechanism whose governing thresholds can be amended by
the constitutional process — the enforcement logic is untouched while the parameters change.
No contradiction.

### Probe 7 — Is the single-point-of-progress sweep table (§11) complete against §5.4 steward-touching calls?

**Answer: SUBSTANTIALLY COMPLETE, with one stale reference.**

The six-row sweep (publishAuditRef, issuer-onboarding, fund custody, operational reports,
electSteward, recallSteward) covers all steward-exclusively-callable functions discoverable
from §5.4. `proposeAmendment` is correctly excluded (citizen-callable, not steward-only).
`abortRotation` is correctly excluded (citizen governance vote → Governor.execute();
not steward-only).

**ISS-02 (LOW):** Row 4 (operational reports) references "publishOperationalReport §5.4" but
this function does not appear in the §5.4 API contracts table (21 calls listed;
`publishOperationalReport` absent). The reference is stale. Either the function is missing
from §5.4, or the sweep table row references a non-existent function. This must be resolved
before implementation.

No additional steward-exclusive functions visible in §5.4 are missing from the sweep.

---

## 5. Regression checks

### 5a. Revocation-timing consistency

Grep target: `at enactment|suspend|block|REVOCATION_PENDING|anchorEffectiveAt|AnchorRevoked`
across Doc 03 v2.1.0 and ADR-020.

Result (carried from v2.0.3 cycle-4 sweep, confirmed unchanged in v2.1.0):

- §10.11 ordinary revocation row: "REVOCATION_PENDING is entered at enactment (public on-chain
  signal); `enrol()` against the affected anchor CONTINUES until `anchorEffectiveAt`
  (30 days after enactment); blocking only from `anchorEffectiveAt`; window is RISK-30
  residual." ✓
- §11 FR-112 row: consistent with above. ✓
- DES-090 §5.2: consistent. ✓
- ADR-020 normative text (lines 99-104): `REVOCATION_PENDING` at enactment; `enrol()` reverts
  `AnchorRevoked` only after `anchorEffectiveAt`. ✓
- All ten sources from cycle-4 continue to agree in v2.1.0. ✓

**Revocation timing: NO REGRESSION.**

### 5b. enrol() five-signal vector

§5.4 enrol() entry: `[Nᵢ, C, issuerId, namespaceId, trustAnchorHash]` — arity and signal
order unchanged from v2.0.3. ✓

**enrol() vector: NO REGRESSION.**

### 5c. §18 scan response entries

SC-15 through SC-21: all seven entries present in §18, all marked "CLOSED at design level."
No entries from prior scans (SC-01..SC-14) were disturbed. ✓

**§18 entries: NO REGRESSION.**

### 5d. Changelog and version header

Version header: 2.1.0. Changelog entry for v2.1.0 present and covers SC-15..SC-21 closures,
DES-092 addition, ROTATION_ABORTED introduction (DES-090), §10.11 Amendment Layer column,
STRIDE update. ✓

Note: the changelog records the addition of ROTATION_ABORTED in §5.4 and §5.6 / DES-090, but
the data model enum in §5.3 is not mentioned — consistent with ISS-01 (the enum was not
updated). This confirms ISS-01 is a genuine omission, not an intentional divergence.

**Changelog: NO REGRESSION; ISS-01 confirmed.**

---

## 6. Issue list

### ISS-01 — §5.3 TrustAnchorLifecycle enum missing ROTATION_ABORTED (MEDIUM)

**Location:** Doc 03 §5.3 — TrustAnchorLifecycle data model enum.

**Observation:** The §5.3 enum is declared as:
`{ ACTIVE, ROTATION_PENDING, REVOCATION_PENDING, REVOKED }`

`ROTATION_ABORTED` is absent. However, this state is referenced as a first-class lifecycle
value in three other locations in the same document:

- §5.4 `abortRotation()` API entry: "transitions ROTATION_PENDING → ROTATION_ABORTED → ACTIVE"
- §5.6 TRUST_ANCHOR state machine: "ROTATION_PENDING ──abortRotation()──▶ ROTATION_ABORTED
  ──▶ ACTIVE"
- DES-090 (§5.2): ROTATION ABORT section describes the ROTATION_ABORTED state and its
  transitions

ADR-020 amendment (lines 255-256) also specifies:
`ROTATION_PENDING → ROTATION_ABORTED → ACTIVE (restored to incumbent/pre-rotation hash)`

The changelog notes the addition of ROTATION_ABORTED in §5.4/§5.6/DES-090 but not in §5.3.

**Impact:** The §5.3 enum is the canonical data model from which the Solidity contract's
`enum TrustAnchorLifecycle` is derived. A Solidity enum missing a variant prevents the
`abortRotation()` function from transitioning to that state. Any implementation that reads
§5.3 as authoritative will produce inconsistent code. Engineers must resolve this without
guidance from the document.

**Severity:** MEDIUM (internal inconsistency that creates an implementation ambiguity;
the correct fix is clear, but the document does not resolve it).

**Required fix:** Add `ROTATION_ABORTED` to the §5.3 TrustAnchorLifecycle enum. Ordering
should be consistent with the state machine narrative (e.g.,
`{ ACTIVE, ROTATION_PENDING, ROTATION_ABORTED, REVOCATION_PENDING, REVOKED }`).

---

### ISS-02 — §11 sweep table row 4 references non-existent §5.4 function (LOW)

**Location:** Doc 03 §11 — Single-point-of-progress sweep table, row 4 (Operational reports).

**Observation:** Row 4 reads (paraphrased): "Steward publishes operational reports;
`publishOperationalReport §5.4`; single point: NO [mitigated by citizen/system alternative]."
The function `publishOperationalReport` does not appear in the §5.4 API contracts table
(21 calls listed; this name is absent).

**Impact:** Either (a) `publishOperationalReport` belongs in §5.4 and was omitted, or (b)
the sweep table references a function that does not exist in the design. Stale reference
creates an unresolved implementation question.

**Severity:** LOW (stale cross-reference; does not affect any security property; correction
is straightforward once the architect determines which resolution applies).

---

### ISS-03 — DES-092 Tech column names submitCitizenAuditRef(); §5.4 and ADR-019 say publishAuditRef (LOW)

**Location:** Doc 03 §5.2 DES-092 (Tech column) vs §5.4 `publishAuditRef` entry and
ADR-019 amendment.

**Observation:** DES-092's Tech implementation column names
`ProtocolGovernance.submitCitizenAuditRef()` as the citizen-fallback entry point. However:

- §5.4 `publishAuditRef` API entry is extended to cover both primary (steward) and citizen-
  fallback invocations in a single function entry — no separate `submitCitizenAuditRef` appears.
- ADR-019 amendment (line 224): "any enrolled citizen MAY call `publishAuditRef(issuerId,
  auditRef)`" — explicitly states citizens call `publishAuditRef`, not a separate function.

**Impact:** ABI naming inconsistency. If DES-092 is authoritative, there should be a separate
`submitCitizenAuditRef()` function absent from §5.4. If §5.4 and ADR-019 are authoritative,
DES-092's function name is wrong. Developer cannot determine the correct ABI from the document
alone.

**Severity:** LOW (one of the two loci is clearly authoritative — ADR-019 + §5.4 are
consistent with each other; DES-092 is the outlier — but the architect must confirm and
correct).

---

### ISS-04 — §12 ADR index does not note v2.1.0 amendments to ADR-019 and ADR-020 (LOW)

**Location:** Doc 03 §12 (ADR index / decision record summary).

**Observation:** The §12 ADR index entries for ADR-017 include the note "amended by ADR-020
(2026-08-11: trust-anchor lifecycle)"; ADR-003 similarly notes "amended by ADR-016." However,
the ADR-019 and ADR-020 summary entries in §12 do not note their own v2.1.0 amendments (ADR-019
amended for SC-17 citizen fallback; ADR-020 amended for SC-18 ROTATION_ABORTED). The
convention established in the same section is not applied consistently.

**Impact:** A reader who discovers SC-17 or SC-18 context via §12 will see no indicator that
the ADRs were amended in this version. Navigability risk.

**Severity:** LOW (no semantic gap; the amendments are fully present in the ADR files
themselves; only the §12 index is incomplete).

---

### ISS-05 — ADR-020 body state machine diagram not updated to include ROTATION_ABORTED (LOW)

**Location:** ADR-020 Decision section, trust-anchor lifecycle state machine diagram
(approximately lines 151-178).

**Observation:** The original body state machine in ADR-020 shows:
```
[ROTATION_PENDING] → [ACTIVE] (new anchor after anchorOverlapEnd)
```
It does not show the ROTATION_ABORTED path. The 2026-08-11 amendment note (lines 247-263)
correctly adds `ROTATION_PENDING → ROTATION_ABORTED → ACTIVE` and references DES-090, but
the original diagram in the Decision section was not updated in place.

**Impact:** A reader encountering the ADR's Decision section before reaching the amendment
section at the end of the document will see an incomplete state machine — ROTATION_ABORTED
is effectively invisible in the primary diagram. The amendment is informative text; the
diagram is typically the authoritative visual summary.

**Severity:** LOW (the amendment note is clear and present; the correct state machine
appears in §5.6 of Doc 03; no security property is affected; but the ADR's own diagram is
now stale).

---

## 7. Summary

| Item | Status |
|---|---|
| SC-15: ProtocolGovernance + StewardRegistry in IMMUTABLE CORE | ADDRESSED ✓ |
| SC-15: GENERAL RULE stated; routing surfaces excluded | ADDRESSED ✓ |
| SC-16: §10.11 Amendment Layer column on all rows | ADDRESSED ✓ |
| SC-16: Anti-circularity rule explicit | ADDRESSED ✓ |
| SC-16: Setter contradiction resolved (DES-091) | ADDRESSED ✓ |
| SC-17: DES-092 citizen fallback ADOPTED (not trade-off) | ADDRESSED ✓ |
| SC-17: 60-day inaction window; vacancy-immediate; substance unchanged | ADDRESSED ✓ |
| SC-17: ADR-019 amendment note present and accurate | ADDRESSED ✓ |
| SC-17/SC-19: §5.4 and §5.6 consistent | ADDRESSED ✓ |
| SC-18: abortRotation at Open Layer bar | ADDRESSED ✓ |
| SC-18: ROTATION_PENDING → ROTATION_ABORTED → ACTIVE in §5.6 + DES-090 + §5.4 + ADR-020 | ADDRESSED ✓ |
| SC-18: No retroactive invalidation | ADDRESSED ✓ |
| SC-18: ADR-020 amendment note present and accurate | ADDRESSED ✓ |
| SC-18: ROTATION_ABORTED in §5.3 data model enum | **MISSING — ISS-01 (MEDIUM)** |
| SC-19: DES-092 issuer-onboarding pattern; ADR-019 note covers SC-19 | ADDRESSED ✓ |
| SC-20: Quorum denominator = enrolled at snapshotRoot (DES-087 + §10.11 + Tier-2 row) | ADDRESSED ✓ |
| SC-21: STRIDE EoP residual updated | ADDRESSED ✓ |
| Probe 1: StewardRegistry immutable vs amendable constants coherent | COHERENT ✓ |
| Probe 7: Sweep table complete vs §5.4 steward-touching calls | SUBSTANTIALLY COMPLETE (ISS-02) |
| Regression: revocation timing | NO REGRESSION ✓ |
| Regression: enrol() 5-signal vector | NO REGRESSION ✓ |
| Regression: §18 entries | NO REGRESSION ✓ |
| Regression: changelog | NO REGRESSION (confirms ISS-01 was omitted) ✓ |

---

## 8. Verdict

**Score: 96% — FAIL**

The score (96%) clears the 95% floor, but the PASS bar requires **zero critical, high, and
medium** issues. ISS-01 is rated MEDIUM. The document must return to the architect for
rework into v2.1.1 addressing ISS-01 at minimum. The four LOW issues (ISS-02 through ISS-05)
should be corrected in the same rework pass.
