# Document Review Report — Doc 03 Architecture & Design (SDD) v2.0.0

> Produced by the **document-review** skill. Reviewer: Samuel Oyelaran (engineer), acting as
> neutral reviewer. The document owner is the **architect** (Ravi Deshmukh). Samuel Oyelaran
> is NOT the document owner. This reviewer **scores and lists issues only — it never edits the
> reviewed document**. All rework is done by the owning role (architect).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.0.0
Review mode: technical
Reviewer role: engineer (Samuel Oyelaran — neutral reviewer; not the document owner)
Score: 84%
Critical: 0
High: 2
Medium: 2
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.0.0 covers four tightly scoped areas — the FR-118/FR-119 three-tier amendment boundary
and Tier-2 super-process, SC-13/SC-14 trust-anchor lifecycle closure, OI-17 governance constants,
and DES-087..DES-091 for the steward-organisation area FR-114..FR-120 — and it does all four with
substantive depth. The state machine (§5.6), DES table (§5.2), API contracts (§5.4), §10.11
constants, ADR-019, and ADR-020 are each internally coherent. ADR-017 carries the correct
amendment line. The enrol() five-signal arity is unchanged. The FR-112..FR-120 → DES mapping in
§15 is complete and accurate.

The document FAILS on two HIGH findings. **H-1:** §10.11 (emergency revocation timelock row) and
§10.1 (STRIDE DoS row) both describe the emergency revocation voting bar as "Tier-2 quorum and
supermajority"; in the same table "Tier-2" means the platform amendment Tier-2 bar (80%/25%),
but ADR-020 explicitly states the voting requirements are **UNCHANGED from the ordinary path**
(Tier-3: 60%/15%). The ADR wins over the SDD body text per the document's own rule; the body text
therefore creates a materially false impression of the voting bar. **H-2:** The OI-18 decision
binds five specific minimum super-process properties including "growth-surge defence active
throughout" (OI-18 property 4); ADR-019 instead numbers five different properties (swapping
growth-surge for a quorum requirement), and §14's five super-process property tests correspond
to ADR-019's five rather than OI-18's five. The one-to-one mapping OI-18 requires cannot be
demonstrated, and no Tier-2-specific test verifies the growth-surge property. Two MEDIUM findings
cover an incomplete STRIDE SC-13 residual expansion and a naming collision in §10.11. Three LOW
findings are stale counts and one missing SRE SLA.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`84%`)
- Critical = 0? **Yes** · High = 0? **No** (2 Highs) · Medium = 0? **No** (2 Mediums)
- **Verdict:** `FAIL` — two High and two Medium findings block the pass bar.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage (FR/NFR → DES; traceability) | 20 | 95 | 19.0 | FR-112..FR-120 all mapped to DES-087..DES-091 in §15; FR-117 capability-absence designed structurally and tested in §14; FR-114..FR-118 check passes. Minor: §1.1 FR Must count stale (L-1). |
| T2 Technical correctness (design decisions, numbers, state machine) | 25 | 73 | 18.25 | H-1 (emergency revocation voting bar wrong in §10.11 and §10.1) and H-2 (OI-18 five properties not faithfully implemented in ADR-019 five / §14 five tests) both land here. The state machine §5.6, DES-087..DES-091, §5.4 API contracts, and ADR-019/ADR-020 rationale are otherwise well-executed. |
| T3 Security properties / threat model (STRIDE, residuals, attack paths) | 20 | 87 | 17.4 | SC-13 and SC-14 closed at design level; RISK-30 correctly referenced; enrol() arity unchanged; ADR-017 amendment line correct. M-1: STRIDE §10.1 SC-01 Spoof row residual not updated to cover post-registration compromise (SC-13 explicitly required this expansion). |
| T4 Internal consistency (cross-section, DES↔ADR↔§5.x↔§10.x↔§14) | 15 | 78 | 11.7 | H-1 is the primary consistency break (§10.11/§10.1 vs ADR-020). M-2: naming collision in §10.11 between platform Tier-1/2/3 labels and party T0/T1/T2/T3 labels co-habitating the same table without disambiguation. All other cross-section checks pass: §5.6 state machine matches §5.4 API and DES-090; §14 tests match DES-087 and DES-089; ADR-020 state diagram matches §5.6. |
| T5 Testability (test hooks in §14, adversarial coverage, vacancy simulation) | 10 | 85 | 8.5 | FR-117 capability-absence suite (static dep-guard + dynamic vacancy simulation) is well-specified. Tier-2 super-process five tests are clearly enumerated. H-2: no Tier-2-specific test verifies growth-surge defence is active, and the five §14 tests correspond to ADR-019's five rather than OI-18's five. |
| T6 Honesty (deferred scope recorded, residuals named, no fabricated results) | 10 | 93 | 9.3 | §16 records next-increment scope explicitly. §18 records SC-13/SC-14 closure and OI-18 analysis. RISK-30 is an accepted, recorded residual. L-2: changelog still says "pass 1 of 2" despite ADRs being present. L-3: SC-14 SRE staleness SLA not specified. |
| **Total** | **100** | — | **84%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **High** | T2, T4 | §10.11 emergency revocation row; §10.1 STRIDE DoS row "trust-anchor revocation abuse" | Both entries say "requires a passed governance vote at **Tier-2** quorum and supermajority." In the same §10.11 table, "Tier-2" is defined as the platform amendment Tier-2 bar: 80% supermajority, 25% quorum. ADR-020 (§ "Trust-anchor revocation — emergency path") states explicitly: "The voting requirements (quorum, supermajority, tier) are **UNCHANGED** from the ordinary path," and the ordinary path is "Tier-3 governance (15% quorum, 60% supermajority)." Per the document's own rule ("where this document and an ADR disagree, the ADR wins and this document is the defect"), the §10.11 and §10.1 entries are defective. Any reader who reads §10.11 will believe emergency revocation requires 80%/25%; the actual bar is 60%/15%. This is also the structural cause of the M-2 naming collision. | In §10.11 emergency revocation row, replace "Tier-2 quorum and supermajority" with "Tier-3 governance voting bar (60% supermajority, 15% quorum — unchanged from the ordinary revocation path; only the timelock is shortened to 7 days)." Apply the same correction to the §10.1 STRIDE DoS row. Align both with ADR-020's explicit statement. |
| ISS-02 | **High** | T2, T5 | ADR-019 §"Tier-2 super-process — five required properties"; §14 "Tier-2 super-process property tests"; §5.6 state machine | OI-18 decision records five binding minimum super-process properties: (1) supermajority above ordinary tier; (2) timelock for fork exercisability; (3) two consecutive votes; **(4) growth-surge defence active throughout**; (5) audit before second vote. ADR-019 instead lists five differently composed properties: (1) supermajority; **(2) quorum** [not in OI-18]; (3) two consecutive votes; (4) inter-vote window; (5) audit. OI-18 property 4 (growth-surge defence) is not a numbered property in ADR-019 — it appears in a separate unnumbered section ("Growth-surge defence throughout"). §14's five Tier-2 super-process tests correspond to ADR-019's five, not OI-18's five; no test explicitly verifies that growth-surge defence is active during the Tier-2 super-process. The instruction for this review binds: "all FIVE super-process properties enforced in the DES-087 state machine and §5.6, no sixth invented, none dropped." Property 4 is dropped from the numbered five; quorum is an unnumbered sixth. (Growth-surge defence IS mechanically active via DES-019/DES-020 for all votes — the gap is in the explicit five-property mapping and test suite, not in the underlying mechanism.) | Revise ADR-019 and §14 to faithfully represent OI-18's five properties. Option A: replace ADR-019 Property 2 (quorum) with the growth-surge defence as Property 4, moving quorum as a sub-point of Property 1 (supermajority); add a sixth §14 test: "enact() completes with growth-surge defence active; verify DES-020 adaptive-quorum engagement is part of the firstVote and secondVote state transitions." Option B: retain quorum as Property 2 and add growth-surge as Property 5 (making it six), with explicit rationale explaining the extension of OI-18's five. Either option must achieve a demonstrable one-to-one mapping with OI-18's five. |
| ISS-03 | **Medium** | T3 | §10.1 STRIDE table, Spoof row (SC-01): "enrolment proof verified against an attacker-chosen trust anchor" | The SC-13 re-scan explicitly required: "Expand the STRIDE residual to cover post-registration compromise and name the emergency deactivation path and its governance tier as the mitigation." The SC-01 Spoof row's residual still reads only: "a compromised or mis-registered trust anchor at `registerIssuer` time — mitigated by the timelock-governed registration process." This covers only registration-time attacks. The post-registration compromise scenario (SC-13) — where a correctly-registered anchor key is later compromised and used to enrol Sybils — is not named in the STRIDE threat model, and the emergency revocation path is not cited as the mitigation. §18 documents the SC-13 closure correctly, but the STRIDE table is the primary security threat model and it does not reflect the closure. | Add a new sub-entry to the SC-01 Spoof row (or a separate Spoof row) covering: Threat: post-registration compromise of trustAnchorHash — attacker who obtains the compromised private key signs synthetic credentials and enrols Sybil identities. Mitigation: emergency revocation via `Governor.execute()` (7-day timelock, Tier-3 voting bar); per-issuer epoch cap (DES-003) throttles blast radius during the 7-day window. Residual: 7-day Sybil window (RISK-30, accepted). |
| ISS-04 | **Medium** | T4 | §10.11 governance constants table; §10.1 STRIDE DoS row | §10.11 uses both platform amendment boundary tier labels ("Tier-2 (named-absolutes super-process)," "Tier-3 (ordinary platform amendment)") and party governance tier labels ("T2 structural tier," "T3 constitutional tier") in the same table without visual separation, a disambiguation note, or a cross-reference to the glossary. The platform Tier-2 (80%/25%) and party T3 constitutional (80%/20%) share the same supermajority threshold with different quorums, creating near-collision. Platform Tier-3 (60%/15%) and party T2 structural (60%/15%) are numerically identical, so a reader cannot tell from numbers alone which framework applies. The emergency revocation row (ISS-01) is the most acute casualty of this collision, but the broader naming ambiguity persists throughout §10.11. The §17 Glossary defines "Tier" as "T0 operational · T1 policy · T2 structural · T3 constitutional" — the party-level framework — without noting the separate platform amendment boundary tier naming. | Add a disambiguation header or note to §10.11 that explicitly distinguishes the two tier namespaces: "Platform amendment boundary tiers (Tier-1/Tier-2/Tier-3) are defined in §5.2/DES-087/ADR-019 and govern protocol-level amendments. Party governance tiers (T0 operational / T1 policy / T2 structural / T3 constitutional) are defined in §5.2/DES-016/ADR-008 and govern intra-party decisions. The two frameworks are orthogonal and share no labels." In the §17 Glossary, add a note to "Tier" distinguishing the two usages. |
| ISS-05 | Low | T1 | §1.1, requirements overview table | SDD §1.1 states "SRS v2.2.0 defines … 120 FR (118 active + 2 superseded; **97 Must**)." Doc 02 v2.2.0 has 101 Must FRs: 94 that pre-existed v2.1.0 plus the 7 steward FRs FR-114..FR-120 added as Must in v2.1.0 (verified in technical-writer-2026-08-11T1300 cycle-1 review and product-owner-2026-08-11T1200 consistency sweep). The count 97 corresponds to no known checkpoint; it appears to have been taken from an intermediate version. | Update §1.1 FR Must count from 97 to 101. |
| ISS-06 | Low | T6 | §1.1 / document header, v2.0.0 changelog entry | The v2.0.0 changelog entry reads: "v2.0.0 (2026-08-11) — **Pass 1 of 2 (pass 2 adds ADR-019/ADR-020)**." However, the reviewed file already includes ADR-019 and ADR-020 in the §12 ADR index (both Status: Accepted) and the two ADR files exist at `docs/adr/ADR-019-...md` and `docs/adr/ADR-020-...md`. The pass-2 work has been completed but the changelog was not updated to reflect this. | Update the changelog to note that both passes are complete: e.g. "v2.0.0 (2026-08-11) — Two-pass increment: pass 1 (SDD body) + pass 2 (ADR-019, ADR-020) both complete." |
| ISS-07 | Low | T6 | §10.11 (Trust-anchor lifecycle section), ADR-020 §SC-14 | SC-14 recommendation (b) requested: "Specify maximum permissible staleness between issuing-authority rotation and on-chain update — this is an operational SLA for the SRE function." The design specifies a 60-day citizen-side enrolment overlap window (so no citizen is blocked) but does not specify how quickly the platform governance must process a rotation proposal from the point an issuing authority initiates a rotation. Without a staleness SLA, the SRE function has no operational target for the period during which old-anchor citizens are on the clock toward `anchorOverlapEnd`. | Add an operational SLA row to §10.11 (or an open item in §16): "Issuer rotation processing SLA — the platform governance process for a `rotateTrustAnchor()` proposal SHOULD complete within [N] days of the issuing authority's public rotation announcement, ensuring the 60-day citizen overlap window is not eroded by governance latency." Assign N with rationale, or record as an open item for the SRE to bound during operations design (Doc 11). |

> **Low** issues (ISS-05, ISS-06, ISS-07) do not block the pass bar. **ISS-01 and ISS-02 (High)** and **ISS-03 and ISS-04 (Medium)** each force FAIL.

---

## 5. What was verified for each session-scope area

### (A) FR-118 / FR-119 amendment boundary and super-process (OI-18 decision)

**Verified:**
- Tier-1 entrenched charter: seven rules, including CON-001, are present in ADR-019 Tier-1 table and in DES-087 ("immutable registry of the seven entrenched rules"). Count matches OI-18 exactly. ✓
- `ProtocolGovernance.proposeAmendment()` reverts `EntrenchedRule` at submission with no exception path. ✓
- Tier-2 named absolutes: BR-011/NFR-003, CON-002/CON-008/NFR-010, CON-012, CON-013 — all present in ADR-019 Tier-2 table. Matches OI-18. ✓
- Tier-3 ordinary path: correctly defined. ✓
- Supermajority materially above ordinary tier (OI-18 property 1): 80% vs 60% — 20 pp margin with rationale. ✓
- Inter-vote window for fork exercisability (OI-18 property 2): 180 days, sanity-checked against FR-053/NFR-018 mechanics (30d cooling-off + 30d petition + coalition time fits within 180d). ✓
- Two consecutive votes (OI-18 property 3): first/second vote structure in §5.6 state machine and §5.4 API. ✓
- Audit lead time (OI-18 property 5): 30 days, code-enforced via `auditPublishedAt + AUDIT_LEAD_TIME` precondition. ✓
- Growth-surge defence (OI-18 property 4): mechanically active via DES-019/DES-020 for all votes (cannot be disabled). ADR-019 covers this in an unnumbered section. **However:** not listed as one of ADR-019's five numbered properties; not one of §14's five tests. This is ISS-02 (High).
- Quorum (ADR-019 Property 2): 25% vs 15% (Tier-3). Added by architect beyond OI-18's five; constitutes a sixth property without an OI-18 basis. This is part of ISS-02 (High).
- Rationale preserved: OI-18 verbatim rationale for Tier-2 necessity (receipt-freeness / coercion resistance) is quoted in ADR-019 § Context. ✓
- `enact()` enforces all five ADR-019 preconditions; the sentence in §5.4 is consistent with the state machine. ✓

### (B) SC-13 / SC-14 trust-anchor lifecycle design

**Verified:**
- `rotateTrustAnchor()` specified with 60-day dual-anchor overlap window: both old and new anchor accepted during `ROTATION_PENDING`; no citizen blocked by a compliant rotation. Closes SC-14. ✓
- `revokeTrustAnchor()` specified with ordinary (30-day) and emergency (7-day) paths, both enacted only via `Governor.execute()` with `permittedActionClass = TRUST_ANCHOR_MGMT`. No operator or steward direct call path. Ruling 4 preserved. ✓
- Emergency path requires a passed governance vote (same quorum and supermajority as ordinary path — Tier-3 per ADR-020); only the timelock is shortened. ✓ (ADR-020 is correct; §10.11/§10.1 entries are the defect — ISS-01.)
- Rotation liveness gap closed: 60-day overlap means no enrolment is blocked for a compliant rotation. SC-14 closed. ✓
- Post-registration Sybil window (SC-13 residual): 7-day emergency window is an accepted residual (RISK-30), documented in §18 and ADR-020. ✓
- Already-enrolled credentials unaffected by either rotation or revocation. ✓
- STRIDE Spoof row (SC-01): residual not updated to include post-registration compromise sub-entry. This is ISS-03 (Medium). The §18 closure section IS correct.
- enrol() arity: five signals [Nᵢ, C, issuerId, namespaceId, trustAnchorHash] UNCHANGED from v1.1.2. SC-01 five-signal vector stands. ✓
- ADR-017 amendment line (2026-08-11) present in the ADR-017 file. ✓
- ADR-020 state machine (§ "Trust-anchor lifecycle state machine" in ADR-020) consistent with §5.6 TRUST_ANCHOR state machine. ✓

### (C) OI-17 governance constants (§10.11)

**Verified:**
- §10.11 Status: CLOSED. ✓
- Tier-3: 15%/60%/90d. ✓
- Tier-2: 25%/80%. 10 pp quorum margin, 20 pp supermajority margin. Both materially above Tier-3. ✓
- Inter-vote window: 180 days. ✓ (rationale tied to FR-053/NFR-018 mechanics)
- Audit lead time: 30 days. ✓
- Steward: 2-year term, annual staggered, 5 seats. ✓
- Steward recall bar: 20% affirmative quorum + 60% turnout. Affirmative-quorum discipline ensures silence cannot recall; consistent with DES-088's "affirmative-quorum recall" requirement. ✓
- Expulsion bar (T3 constitutional: 80%/20%) strictly higher than removal bar (T2 structural: 60%/15%). FR-105 satisfied. ✓
- Anchor rotation overlap window: 60 days. Consistent with ADR-020. ✓
- Ordinary revocation timelock: 30 days. Consistent with ADR-020. ✓
- Emergency revocation timelock: 7 days. Value consistent with ADR-020. **Voting bar label in this row is wrong** (says "Tier-2 quorum and supermajority" when ADR-020 says unchanged from Tier-3). ISS-01 (High).
- Naming collision: platform Tier-1/2/3 and party T0/T1/T2/T3 co-habit §10.11 without disambiguation. ISS-04 (Medium).
- All §10.11 constants internally self-consistent (no circular dependency, no value that contradicts another). ✓

### (D) DES elements for steward area FR-114..FR-120

**Verified:**
- §15 traceability table: all seven steward FRs (FR-112 through FR-120 inclusive) mapped to DES elements. ✓
- FR-114 (steward election, fixed terms, affirmative-quorum recall) → DES-088 (StewardRegistry). Term record, recall state, platform-scoped ballot. ✓
- FR-115 (enumerated-power allowlist) → DES-089 (StewardPowers boundary). Four powers listed: (a) draft/publish protocol proposal; (b) coordinate audit/ceremony/onboarding; (c) hold funds, sign vendor contract; (d) publish operational report. Allowlist is the ONLY set exposed. ✓
- FR-116 (stewards propose, citizens decide, no steward override) → DES-089 + DES-087. StewardRegistry has no enact path. ✓
- FR-117 (zero citizen-path dependency; vacancy causes zero degradation) → DES-089 BY CONSTRUCTION: no citizen-path contract imports or references StewardRegistry. §14 suite: (a) static dep-guard assertion, (b) dynamic vacancy simulation (full E2E suite with all seats vacant). ✓
- FR-118 (seven entrenched rules, code rejection at submission) → DES-087. `entrenched[ruleId]` checked at `proposeAmendment()`; reverts `EntrenchedRule`. ✓
- FR-119 (three-tier amendment, Tier-2 super-process) → DES-087 + DES-091. Five-property state machine; constants from §10.11. ✓
- FR-120 (unconditional fork right) → DES-034. Existing DES. No steward path blocks fork. ✓
- BR-015 / CON-003 consistency: DES-089 and DES-090 both enforce no-operator-path. DES-090 functions callable only from `Governor.execute()` with validated `permittedActionClass`. ✓
- Ruling 4: both `rotateTrustAnchor()` and `revokeTrustAnchor()` are code-only, enacted by passed governance vote. ✓

---

## 6. Routing instruction

**FAIL → route to the architect (Ravi Deshmukh).**

The required rework addresses four issues ranked by priority:

1. **ISS-01 (High):** Correct the emergency revocation voting bar label in §10.11 (emergency revocation row) and §10.1 (STRIDE DoS row) from "Tier-2 quorum and supermajority" to the actual Tier-3 bar (60% supermajority, 15% quorum, unchanged from ordinary path per ADR-020).

2. **ISS-02 (High):** Revise ADR-019 and §14 to faithfully represent OI-18's five binding minimum super-process properties, ensuring one-to-one mapping: specifically, incorporate "growth-surge defence active throughout" as a numbered property and add a corresponding §14 test, and relocate or integrate the quorum requirement appropriately.

3. **ISS-03 (Medium):** Add a post-registration-compromise sub-entry to the §10.1 STRIDE Spoof row (SC-01), naming the emergency revocation path and its 7-day timelock as the mitigation, and RISK-30 as the accepted residual.

4. **ISS-04 (Medium):** Add a disambiguation note or header to §10.11 distinguishing the platform amendment boundary Tier-1/Tier-2/Tier-3 from the party governance T0/T1/T2/T3 framework; update §17 Glossary accordingly.

Low issues (ISS-05, ISS-06, ISS-07) should be fixed in the same rework pass but do not independently block.

The rework MUST produce **version 2.0.1** (bump semver), set `Status: In Review`, and present for cycle-2 technical review.
