# Document Review Report — Doc 03 Architecture & Design (SDD) v2.6.0

> Produced by the **document-review** skill (shared capability, neutral reviewer — not the document owner).
> Reviewer: **neutral role** (document-review skill; NOT the architect who owns Doc 03).

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.6.0
Review mode: technical
Reviewer role: neutral (document-review skill — not the architect; not the product-owner)
Score: 84%
Critical: 0
High: 0
Medium: 3
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.6.0 applies the 2026-08-24 ruling (DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md)
correctly in its key normative locations — §10.13.2 (DES-095 call-site placement), §10.13.6
(DES-098 FR-131 clause (d) extension), §10.13.7 (T-06 ACCEPTED, BR-003/FR-020 RESOLVED),
§10.13.9 (DES-100 exclusion residual rewritten), and ADR-025 §(c-viii) (heading and body
amended, pre-amendment text superseded in strikethrough). Honesty is preserved: the permanent
non-counting class is stated plainly, the populations affected are named, and the two
exclusions (phone gate vs ID gate) are unambiguously distinguished.

Three Medium defects block the pass bar. The most load-bearing is ISS-01: the field-level
disposition table in §10.13.9 DES-100 retains a pre-ruling label ("used to gate account
creation") for the `status` field, directly contradicting the call-site placement ruling
that is the purpose of v2.6.0. ISS-02 extends this contradiction into the §10.13.7 conflict
table (T-06 row), where the `subject_id_hash` improvement is described as "cannot create two
accounts from one government ID in one session" — both the "create two accounts" framing and
the spurious "in one session" qualifier imply account-creation gating and are technically
wrong post-ruling. ISS-03 is the ADR-024 "no change needed" claim: the architect is correct
that the method signature is scoped, but ADR-024 lacks the explicit "MUST NOT gate account
creation or party-join" invariant that Doc 03 §10.13.2 v2.6.0 added, and the §12 ADR-024
row has no 2026-08-24 annotation (while ADR-025 received one). All three Medium issues are
concrete and independently verified.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`84%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (3 Medium: ISS-01, ISS-02, ISS-03)
- **Verdict:** `FAIL` — three Medium issues and score below the 95% floor both independently force FAIL.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 85 | 17.0 | FR-131(d), FR-132 (counting-gate scope), FR-123, FR-020, FR-124 all traced correctly in the prose. §15 trace table lacks v2.6.0 amendment rows for DES-095 (amendment 3) and DES-100 (counting-gate correction + FR-124 composition check); DES-098 §15 row not updated to include FR-131(d). |
| T2 Technical accuracy | 20 | 80 | 16.0 | Three inaccurate claims post-ruling: `status` field "gates account creation" (ISS-01); T-06 "cannot create two accounts from one government ID in one session" (ISS-02); `age_verified` "Confirms ≥ 18 at signup" (ISS-04). All contradict the call-site placement ruling. Seam method signatures and invariants are otherwise correct. |
| T3 Traceability completeness | 15 | 82 | 12.3 | §12 ADR-024 row missing 2026-08-24 annotation (ISS-03); §15 missing v2.6.0 trace rows (ISS-06); source pin stale at v2.12.0 In Review (ISS-05). ADR-024 invariants table and v1 backing description lack the explicit call-site placement invariant (ISS-03). |
| T4 Internal consistency | 20 | 85 | 17.0 | §10.13.9 field table (ISS-01) contradicts the preceding corrected exclusion-residual prose and the §10.13.2 call-site placement rule. T-06 row (ISS-02) contradicts the COUNTING-gate ruling recorded in §10.13.7's own resolved items. ADR-024 (ISS-03) lacks the invariant Doc 03 §10.13.2 requires both backings to satisfy. |
| T5 Implementation guidance adequacy | 15 | 85 | 12.75 | §10.13.2 normative call-site placement is well-specified and unambiguous. §10.13.9 field table (ISS-01) would misdirect an implementer to call the ID check at account creation. ADR-024 (ISS-03) would misdirect an engineer who reads the ADR for seam placement guidance without also reading Doc 03 §10.13.2. |
| T6 Risk and limitation disclosure | 10 | 93 | 9.3 | Exclusion residual in §10.13.9 is honest and names the target populations. ADR-025 §(c-viii) superseded text in strikethrough. DES-100 pre-amendment markers describe what changed but do not reproduce the full old text in strikethrough (unlike ADR-025). Two exclusions ((c-vi) phone gate, (c-viii) counting gate) are clearly distinguished in ADR-025 and in §10.13.2. |
| **Total** | **100** | — | **84.35% → 84%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location (section / line) | Finding | Required fix |
|----|----------|-----------|--------------------------|---------|--------------|
| ISS-01 | **Medium** | T2, T4, T5 | §10.13.9 DES-100 field-level disposition table, `status` row (line 1430) | The `status` field description reads "Read; **used to gate account creation**; not persisted." This is a residual pre-ruling label. The 2026-08-24 ruling moved the ID check from account creation to the COUNTING-action call site. The field table's purpose column still implies the `status` field gates account creation, directly contradicting (a) the §10.13.2 normative call-site placement rule ("MUST NOT be called as a precondition of account creation or party-join"); (b) the §10.13.9 exclusion-residual rewrite above it ("citizen without an accepted government-ID document CAN create an account"); (c) the §10.13.9 "Why this element exists" paragraph which states "account creation itself does NOT require this check." The pre-amendment correction note at line 1422 explicitly says this element "previously described the check as 'before account creation'; that scoping was wrong" — yet the `status` row in the very same table retains that wrong scoping. | Change the `status` row purpose cell from "Read; used to gate account creation; not persisted" to "Read; used to determine COUNTING-tier eligibility (FR-123 actions); not persisted." |
| ISS-02 | **Medium** | T2, T4 | §10.13.7 T-06 row, "Decision owed" column (line 1393) | The T-06 ACCEPTED disposition states: "Same-document deduplication (`subject_id_hash`) IMPROVES Charter Rule 1 enforcement (**cannot create two accounts from one government ID in one session**)." This contains two errors. (a) "Cannot create two accounts": under the ruling, account creation is phone-only; two phone-verified accounts with different phone numbers CAN be created. What `subject_id_hash` prevents is the same government ID providing COUNTING-tier eligibility in two accounts. Saying "create two accounts" implies the deduplication runs at account creation, which contradicts the call-site placement ruling. (b) "In one session": `subject_id_hash` is a persistent database field that deduplicates across all sessions; it is not a within-session check. The phrase "in one session" is not in the source DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3 table; it appears to have been added by the architect. Both errors would mislead an implementer into placing the `subject_id_hash` check at account creation rather than at COUNTING-action verification time. | Rewrite the parenthetical to: "cannot gain COUNTING-tier eligibility (FR-123) in two accounts using one government ID — the `subject_id_hash` check runs at COUNTING-tier verification time across all sessions, not at account creation." |
| ISS-03 | **Medium** | T3, T5 | §12 ADR-024 row (line 1611); ADR-024 body (docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md invariants table + v1 backing description) | Two related defects: (a) **§12 ADR-024 row missing 2026-08-24 annotation.** The v2.6.0 changelog states "§12 ADR-025 row annotated with 2026-08-24 amendment." The §12 ADR-024 row received no parallel annotation, though the ruling directly reshapes ADR-024's v1 backing semantics (IEligibilityVerifier MUST NOT be called at account creation or party-join). The ADR-025 row correctly shows its 2026-08-24 amendment block; ADR-024 shows only the 2026-08-23 amendment. (b) **ADR-024 body lacks the explicit "MUST NOT gate account creation or party-join" invariant.** Doc 03 §10.13.2 v2.6.0 added: "Both backings MUST NOT gate account creation or party-join on verifyEligibility — the seam gates COUNTING actions only (FR-020, FR-122, FR-123)." ADR-024's invariants table does not contain this rule. An engineer reading ADR-024 for seam placement guidance (a reasonable practice for an ADR) encounters no explicit prohibition on calling verifyEligibility at account creation. The ADR-024 v1 backing description ("account lookup in database with conventional session authentication") is ambiguous — a "live session" check could be read as an authentication check at login, not a COUNTING-action call. The architect's claim that "no change needed" because the method is described "for the given action scope" relies on the `scope` parameter being self-explanatory, which is insufficient as normative guidance. | (a) Annotate the §12 ADR-024 row with the 2026-08-24 call-site placement amendment (mirroring the ADR-025 annotation pattern). (b) Amend ADR-024 to add the explicit invariant to its invariants table: "Both backings MUST NOT be called as a precondition of account creation or party-join; verifyEligibility is invoked only at FR-123 COUNTING-action call sites (strength contribution, binding-ballot admission, candidacy nomination) — identical call-site placement in v1 and v2 (per DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md)." Record a dated [AMENDMENT 2026-08-24] block in ADR-024 body. |
| ISS-04 | Low | T2 | §10.13.9 DES-100 allowlist table, `age_verified` row (line 1447) | The `age_verified` field description reads "Confirms ≥ 18 **at signup**." Under the ruling, the government-ID document check is performed when a participant first attempts a COUNTING action, not at signup/account creation. "At signup" retains the pre-ruling temporal reference. The field is populated when the COUNTING-tier verification completes, not when an account is created. | Change "Confirms ≥ 18 at signup" to "Confirms ≥ 18 at COUNTING-tier government-ID verification." |
| ISS-05 | Low | T3 | §1.1, header (line 10) | The document header and §1.1 read `Source: SRS-TRUMOCRACY v2.12.0 (In Review)`. Doc 02 v2.12.0 is no longer "In Review" — its cycle-1 review failed (87%, 1H/3M/1L; artifacts/reviews/02-requirements-srs-v2.12.0-business-cycle1.md), it was reworked into v2.13.0, and that version passed cycle 2 at 99% (artifacts/reviews/02-requirements-srs-v2.13.0-business-cycle2.md; confirmed in review assignment brief). The current approved normative baseline is Doc 02 v2.13.0. The v2.13.0 changes (Gherkin scenarios for FR-131 clause (d) and FR-132 post-ruling paths; §4.24 cross-reference note) add no new FR IDs, so the counts (21 BR · 133 FR / 131 active / 114 Must · 28 NFR · 15 CON · 27 RISK) are unchanged. This is a recurring defect class in this project (raised as ISS-02 Low in the v2.5.1 review cycle). | Update source pin to `SRS-TRUMOCRACY v2.13.0` (no count change required). |
| ISS-06 | Low | T1, T3 | §15 Traceability, v2.6.0 additions absent | The v2.6.0 increment made two substantive normative amendments to existing DES elements: (a) DES-095 — normative call-site placement statement added; seam invariants table updated to add the "MUST NOT gate account creation or party-join" rule. Prior amendments (v2.4.0, v2.5.0) each received a separate §15 trace row. The v2.6.0 DES-095 amendment has no corresponding trace row. (b) DES-100 — exclusion residual rewritten (platform-exclusion → COUNTING-gate); FR-124 composition check added; ADR-016 precedent corrected. The v2.6.0 DES-100 amendment has no corresponding trace row. (c) DES-098 — FR-131 clause (d) cross-reference added; the existing §15 DES-098 row (line 1680) does not mention clause (d). The changelog says "No new DES or ADR minted" — which is correct — but substantive amendments to existing DES elements have been recorded as §15 trace rows in prior cycles. The pattern should be consistent. | Add v2.6.0 trace rows to §15 for: (a) DES-095 amendment 3 — call-site placement (FR-020, FR-122, FR-123, DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md); (b) DES-100 amendment — exclusion residual corrected (FR-020, FR-122, FR-123, FR-124 composition); (c) DES-098 FR-131(d) extension. |

> **Low** issues (ISS-04, ISS-05, ISS-06) do not individually block the pass bar, but the three
> Medium issues (ISS-01, ISS-02, ISS-03) each independently force FAIL.

---

## 5. Independent finding on the ADR-024 "no change needed" claim

The architect asserted ADR-024 needs no amendment because `verifyEligibility` is already described "for the given action scope." This claim is **partially correct but insufficient**.

**What supports the claim:** The method signature `verifyEligibility(memberId, regionId, scope, proof)` includes a `scope` parameter, and the semantics table says "for the given action scope." An engineer who reads the interface definition carefully will infer that the method is called in the context of a specific action scope, not at account creation (which has no "scope" in this model). The ADR therefore does not explicitly say the check is at account creation.

**What does not support the claim:**

1. **The v1 backing description is ambiguous about call-site.** ADR-024's v1 backing says: "A member is 'eligible' if they have a live session, their account is associated with the correct region, and they have not already exercised the given scope (conventional nullifier record)." The phrase "live session" is naturally read as a session-authentication check performed at request time (i.e., at login), not specifically at COUNTING-action call sites. An engineer implementing the v1 backing from this description could plausibly call `verifyEligibility` at the point of authentication (login / session establishment) rather than at the three FR-123 COUNTING-action call sites. The old design had the ID check at account creation, so the ambiguity is in the direction of the pre-ruling error.

2. **The explicit "MUST NOT gate account creation or party-join" invariant is absent from ADR-024.** Doc 03 §10.13.2 v2.6.0 added this as an explicit normative invariant: "Both backings MUST NOT gate account creation or party-join on verifyEligibility — the seam gates COUNTING actions only (FR-020, FR-122, FR-123)." This is load-bearing normative guidance. It exists in Doc 03 but not in ADR-024. A reader of ADR-024 who does not also read Doc 03 §10.13.2 receives no prohibition against calling verifyEligibility at account creation.

3. **The §12 ADR-024 row carries no 2026-08-24 annotation.** ADR-025 was annotated in §12 with its 2026-08-24 amendment (correctly). ADR-024 received no annotation, even though the ruling ("the government-ID check gates COUNTING, never joining") is the primary change to how IEligibilityVerifier (ADR-024's core seam) is placed in the architecture. This asymmetry means the §12 audit trail for ADR-024 is incomplete.

**Finding:** The "no change needed" call is not upheld. ADR-024 MUST be amended with the normative call-site placement statement and the explicit "MUST NOT gate account creation or party-join" invariant, and §12 ADR-024 must be annotated with the 2026-08-24 ruling. This is captured as ISS-03 (Medium).

---

## 6. Routing instruction

**FAIL — route to the owning role: architect (Ravi Deshmukh).**

The architect MUST address all three Medium issues before this document can advance:

1. **ISS-01 (Medium):** Update the `status` field row in the §10.13.9 DES-100 field-level disposition table — "gate account creation" → "COUNTING-tier eligibility (FR-123 actions)."

2. **ISS-02 (Medium):** Rewrite the T-06 parenthetical in §10.13.7 — "cannot create two accounts from one government ID in one session" → accurate COUNTING-tier deduplication description that does not imply account-creation gating and does not introduce the spurious "in one session" qualifier.

3. **ISS-03 (Medium):** (a) Annotate §12 ADR-024 row with a 2026-08-24 call-site placement amendment note; (b) amend ADR-024 to add the "MUST NOT gate account creation or party-join" invariant to the seam specification; record a [AMENDMENT 2026-08-24] block in ADR-024.

The three Low issues (ISS-04, ISS-05, ISS-06) SHOULD also be fixed in the same rework cycle for document quality.

**Rework obligation:** The architect MUST produce a new version (bump `Version:` semver, set `Status: In Review`), after which this review loop re-reviews. The new version should be **v2.6.1** unless the architect determines a minor-version bump is more appropriate.

---

## Appendix A — Verification notes

### A.1 Residual pre-ruling scan (per assignment failure mode 1)

Grep terms checked across full Doc 03 and both ADRs:
- `account creation`: ISS-01 confirmed (line 1430 `status` field). Other hits are in the changelog (historical) or in the corrected normative text (positive — the corrected text says "CAN create an account"). No other normative occurrences of pre-ruling account-creation gating found.
- `signup`: Line 1447 `age_verified` — ISS-04. Line 1447 is the only normative hit outside the changelog.
- `enrol` (Doc 03): All hits are in the correct context — v2 ZK enrolment path (ADR-016, PersonhoodRegistry), spam-resistance enrolment service path (phone verification, which IS at account creation — correct), or historical changelog text. No normative use of `cannot enrol` as a current exclusion outside historical changelog entries.
- `hard gate`, `eligibility gate`: No hits in Doc 03 body. Doc 02 §4.47 rationale uses "hard gate on COUNTING-tier eligibility only" — this is Doc 02, correct, and read-only for this review.
- ADR-024: No `cannot enrol`, `account creation gate`, `hard gate` normative hits.
- ADR-025 §(c-viii): Pre-amendment text in strikethrough confirmed present. `[Pre-amendment text — superseded 2026-08-24]` marker confirmed. ✓

### A.2 Seam correctness (per assignment failure mode 2)

- §10.13.2 call-site placement: Explicit, unambiguous, normative. "MUST be invoked at the three FR-123 COUNTING-action call sites" and "MUST NOT be called as a precondition of account creation or party-join." ✓
- Invariants table: "Both backings MUST NOT gate account creation or party-join on verifyEligibility" present. ✓
- `getProperties()` semantics: "describe COUNTING-eligibility properties, not account-admission properties" — correctly updated. ✓
- `onePersonOneVote = false` survived intact in both §10.13.2 and §10.13.7 T-06. ✓
- The v2 design's placement: v2 calls `verifyEligibility` via `ICredentialAdapter` → `PersonhoodRegistry` at COUNTING-action scope. This is established in DES-069/DES-070/ADR-017 and is consistent with the call-site placement. ✓
- ADR-024 "isUniqueInScope" semantics: "nullifierUsed[keccak(scope, N)]" for v2 — this is a per-scope-per-nullifier check, correctly placed at action time, not at account creation. ✓

### A.3 Traceability integrity (per assignment failure mode 3)

Verified the following IDs cited in the changed passages exist and match the citing text:
- **FR-020**: Doc 02 §4.6 — absolute right to join. Cited correctly as unchanged and absolute. ✓
- **FR-122**: Doc 02 §4.41 — open-tier access with phone verification alone. Cited correctly. ✓
- **FR-123**: Doc 02 §4.41 — proof of unique personhood for COUNTING actions (a/b/c). Cited correctly. ✓
- **FR-124**: Doc 02 §4.41 (FR-124 row) — verified status private to holder, no public badge. The composition check in §10.13.9 is accurate. ✓
- **FR-131 clause (d)**: Doc 02 §4.45 FR-131 text — clause (d) added at v2.12.0 requiring open-tier disclosure at the point of a blocked COUNTING action. The §10.13.6 extension correctly describes this. ✓
- **FR-132**: Doc 02 §4.46 FR-132 text (v2.12.0 rewrite) — two-layer gating (phone for account creation; government-ID for FR-123 counting actions). The Doc 03 descriptions are consistent with Doc 02 v2.12.0 (and v2.13.0 which adds Gherkin only). ✓
- **FR-133**: Doc 02 §4.47 FR-133 text — flag-don't-block for spam layer only; ID check is hard gate on COUNTING-tier eligibility, not on joining. Consistent with Doc 03 §10.13.8. ✓
- **DES-095**: Correctly referenced as amended; call-site placement note added in v2.6.0. ✓
- **DES-096**: Not changed in this increment; no issues found. ✓
- **DES-098**: FR-131 clause (d) cross-reference added in §10.13.6. The §15 DES-098 row not updated (ISS-06 Low). ✓ (prose correct; trace row stale)
- **DES-100**: Exclusion residual rewritten. FR-124 composition check added. Field table has one residual pre-ruling label (ISS-01). ✓ minus ISS-01.
- **ADR-016**: Corrected house precedent: cited as "no Aadhaar → no nullifier → no COUNTING actions" for v2 ZK path. ✓
- **ADR-024**: Cited as the seam ADR. v1 backing described at §10.13.2. Issue: §12 row missing 2026-08-24 annotation (ISS-03). ✓ minus ISS-03.
- **ADR-025**: §12 row annotated with 2026-08-24 amendment. ADR-025 §(c-viii) amended correctly. ✓
- **T-06**: ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish, 2026-08-24). Consistent with DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.3. T-06 description has ISS-02 defect. ✓ minus ISS-02.
- **T-07**: PENDING CON-015 — unchanged and correct. ✓
- **T-08**: ARCHITECT-RESOLVED — single-vendor concentration risk as Phase-1 dated limitation. Unchanged and correct. ✓
- **§12**: ADR-025 row annotated with 2026-08-24 amendment. ADR-024 row not annotated (ISS-03). ✓ minus ISS-03.
- **§15**: Missing v2.6.0 amendment trace rows (ISS-06). Historical rows correct.
- **§18**: No entries added or modified in v2.6.0. No stale entries related to the BR-003/FR-020 contradiction — this was resolved in §10.13.7 "Resolved items" but §18 was not updated (no §18 entry was needed; the BR-003/FR-020 item was a tension-table item, not a §18 contradiction entry). ✓

### A.4 Version-pin accuracy (per assignment failure mode 4)

Doc 03 §1.1 pin: `Source: SRS-TRUMOCRACY v2.12.0 (In Review)`. Doc 02 v2.12.0 was reviewed (cycle 1 FAIL, 87%) and reworked into v2.13.0, which passed cycle 2 at 99%. The pin is stale (ISS-05). Counts are unchanged between v2.12.0 and v2.13.0, so §1.1 count row requires no update, only the version label.

### A.5 ADR-024 claim (per assignment failure mode 5)

Independently verified: ADR-024 does NOT explicitly imply account-creation gating anywhere. The method signature's `scope` parameter and the "for the given action scope" semantics description weakly support the architect's position. However, ADR-024 also does NOT explicitly prohibit account-creation gating, and the v1 backing description ("live session" + "account lookup") is ambiguous in the direction of the pre-ruling error. The explicit "MUST NOT gate account creation or party-join" invariant exists in Doc 03 §10.13.2 but not in ADR-024. Full finding: see §5 above. Verdict on "no change needed": **not upheld** — ADR-024 requires amendment (ISS-03 Medium).

### A.6 Superseded-text convention (per assignment failure mode 6)

- **ADR-025 §(c-viii):** Full pre-amendment text shown in strikethrough (`~~text~~`) with [Pre-amendment text — superseded 2026-08-24] marker. Clearly marked. ✓
- **Doc 03 §10.13.9 DES-100:** Two [Pre-amendment text — superseded 2026-08-24] inline markers present (lines 1422, 1507). Both describe what was superseded but do not reproduce the full old text in strikethrough. ADR-025 uses more rigorous strikethrough notation; DES-100 uses descriptive annotation. The annotation is present and clear ("previously stated 'a citizen without an accepted government-ID document cannot enrol in v1'"), so implementers are warned. Not blocking, but the house style is more rigorous in ADR-025. Low note (not a separate issue — within ISS-06 scope).

### A.7 Two distinct exclusions (per assignment failure mode 7)

- **§(c-vi) phone-number exclusion:** LEFT UNCHANGED by 2026-08-24 ruling. Clarifying distinguishing note added: "(c-vi) bars account creation entirely (no phone = no account, no open-tier access); §(c-viii) bars only COUNTING actions." ✓
- **§(c-viii) government-ID exclusion:** AMENDED — from "cannot enrol in v1" to "cannot take COUNTING actions." Two exclusions are unambiguously distinguished in ADR-025 final [AMENDMENT 2026-08-24] block. ✓
- **Doc 03 §10.13.2:** Both exclusions not named explicitly in §10.13.2, but the call-site placement rule ("MUST NOT be called as a precondition of account creation or party-join") implicitly embeds the phone-gate/ID-gate distinction. The distinct treatment is clear across ADR-025 and §10.13.2 together. ✓

### A.8 Honesty preserved (per assignment failure mode 8)

Doc 03 §10.13.9 exclusion residual (post-rewrite): "**This is still a real and sharp limitation.** The populations most likely to lack accepted government-issued ID documents — migrants, people in poverty, youth below document-issuance age, and those already marginalised from formal institutions — are the populations Trumocracy's mission specifically targets. A permanent non-counting class that disproportionately includes these populations is a genuine cost, not a hidden one." ✓

ADR-025 §(c-viii): "What the government-ID gate does is create a permanent non-COUNTING class: a citizen without accepted ID can join, organise, discuss, and endorse, but cannot have their voice counted in binding decisions or official strength numbers. The populations most likely to lack accepted government-issued ID — migrants, people in poverty, youth below document-issuance age, and others already marginalised from formal institutions — disproportionately fall into this non-COUNTING class. This is a real, sharp limitation on the platform's equity promise." ✓

Honesty is fully preserved. The rewrite did not soften the exclusion into a non-item.

### A.9 §10.13.7 conflict table internal consistency (per assignment failure mode 9)

- Legend: (i) SATISFIED / (ii) DEFERRED / (iii) TENSION FOR APPROVER'S DECISION — defined in the section preamble. ✓
- T-01..T-05: All carry "CONFIRMED 2026-08-23" in the "Decision owed" column with correct decision-record citations. ✓
- T-06: v1 status "(ii) DEFERRED with honest disclosure — IMPROVED (2026-08-23)." Decision owed: "ACCEPTED — DEFERRED WITH DISCLOSURE (approver, Rathish, 2026-08-24)." Internally consistent with legend. Defect ISS-02 is in the supporting parenthetical only, not in the status/decision classification.
- T-07: "(ii) DEFERRED / PARTIAL — RESHAPED (2026-08-23)." Decision: "RESHAPED — PENDING CON-015." Consistent with legend and DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md §4.4. ✓
- T-08: "(iii) TENSION RECORDED — ARCHITECT-RESOLVED." Consistent with legend. ✓
- Resolved items row: BR-003/FR-020 RESOLVED — correctly references the ruling and confirms H-19 amended in Doc 02 v2.12.0. ✓
- Doc 02 §16.5 consistency: The §10.13.7 conflict table resolution of the BR-003/FR-020 row matches Doc 02 v2.12.0 §16.5 (RESOLVED row) and Doc 02 v2.13.0 (confirmed at 99% cycle-2 review). ✓
