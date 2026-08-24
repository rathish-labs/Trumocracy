# Document Review Report — Doc 03 Architecture & Design SDD v2.5.0 — Technical — Cycle 1

> Produced by the **document-review** skill. Reviewer: **tester (Ji-woo Park)** — PM-assigned
> neutral reviewer. The architect (Ravi Deshmukh) is the document owner and was excluded from
> reviewing their own work. This reviewer scores and lists issues only — it does not edit the
> reviewed document.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.5.0
Review mode: technical
Reviewer role: tester
Score: 93%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.5.0 (Trumocracy Architecture & Design SDD, author: Ravi Deshmukh, 2026-08-23)
applies the government-ID document check ruling (DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md):
DES-100 minted (v1 ID-document verification and retention model); DES-095 amended a second time
(verifyEligibility now includes document check + verify-and-discard + phone_hash + subject_id_hash);
§10.13.7 conflict table extended (T-01..T-05 CONFIRMED, T-06 reshaped, T-07 reshaped, T-08 minted);
ADR-025 §(e) amendment (Q-1/Q-2/Q-3 architect answers); §15 three DES-100 traceability rows; §16
five-confirmations table from decision record §4.

The increment is architecturally excellent in the substantive areas this review was directed to
scrutinise: the three Q answers (Q-1 provider field mapping, Q-2 HMAC brute-force residual, Q-3
legal routing) are technically sound and internally consistent; DES-100 allowlist matches FR-132
v2.11.0 field-for-field; the verify-and-discard-vs-uniqueness tension is resolved honestly and the
`subject_id_hash` rationale is compelling; T-06/T-07/T-08 wording is word-for-word consistent
across the decision record, Doc 02 §16.5, and Doc 03 §10.13.7; T-01..T-05 CONFIRMED markings
cite the correct decision record reference (§4) without overclaiming; the v1 gate date is
correctly recorded as NOT SET; ADR count remains "twenty-five" (ADR-025 amended, not replaced);
vendor-contract constraint is explicitly named as a correctness condition of DES-100; no
regressions in v2.4.1-approved content are observed.

One Medium defect is found: ADR-025 §(e) enumerates amended consequences (c-i, c-ii) and a new
consequence (c-vii), but does not include an explicit consequence for the government-ID exclusion
residual — citizens without an accepted government-ID document cannot enrol in v1. Doc 02 v2.11.0
records this as H-19 (AWAITING APPROVER CONFIRMATION, tension vs BR-003/FR-020); ADR-016's
Aadhaar-exclusion sentence is the house precedent for naming this consequence explicitly in the
architectural decision record. Its absence from ADR-025 §(e) is a completeness gap.

One Low defect is found: the Doc 03 v2.5.0 header source pin reads "SRS-TRUMOCRACY v2.10.0."
The government-ID amendment to FR-132 (which DES-100 implements) was formally captured in Doc 02
v2.11.0. Now that v2.11.0 exists, the source pin should be updated to v2.11.0.

**Verdict: FAIL. Score 93% / 0 Critical / 0 High / 1 Medium / 1 Low. Rework required.**

---

## 2. Scope and method

**Reviewed artifacts:**
- `docs/03-architecture-design-sdd.md` v2.5.0 (Status: In Review; 2026-08-23)
- `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(e) amendment
- `docs/02-requirements-srs.md` v2.11.0 (FR-132 normative text, FR-132 Gherkin, H-19)
- `artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` (decision record)

**Rubric applied (technical, 100 points):**
- T1 Requirement coverage (20) — does the design address all relevant FR/NFR/CON?
- T2 Soundness (20) — are the three Q answers correct and internally consistent?
- T3 Traceability & IDs (20) — are §15 rows, DES/ADR IDs, and cross-references accurate?
- T4 Security & failure modes (15) — Q-2 residual, operational MUSTs, vendor-contract constraint
- T5 Completeness & testability (15) — all design-element consequences enumerated; no gaps
- T6 Convention compliance (10) — IDs, source pin, RFC 2119 keywords, ISO-8601 dates

**Review obligations from coordinator (six checks):**

1. Three Q answers substantive/internally consistent (Q-1 allowlist/denylist, Q-2 HMAC+KMS brute-force residual, Q-3 legal-routing list)
2. DES-100 allowlist/denylist matches FR-132 normative text in Doc 02 v2.11.0 field-for-field
3. Verify-and-discard-vs-uniqueness tension honestly resolved
4. Exclusion residual (no government ID = no v1 enrolment) addressed in Doc 03/ADR-025
5. T-01..T-05 CONFIRMED markings do not overclaim; v1 gate date recorded as NOT SET
6. T-06/T-07/T-08 wording aligned across decision record, Doc 02 §16.5, Doc 03 §10.13.7; T-08 reasoning vs FR-004/ADR-021/OI-20/FR-129

---

## 3. Rubric scores

| Dimension | Max | Awarded | Notes |
|---|---|---|---|
| T1 Requirement coverage | 20 | 18 | FR-132/FR-003/NFR-016/CON-015 fully covered; H-19 tension has no Doc 03 counterpart (-2) |
| T2 Soundness | 20 | 20 | All three Q answers correct; HMAC design sound; T-08 reasoning holds against FR-004/ADR-021/OI-20/FR-129 |
| T3 Traceability & IDs | 20 | 19 | §15 three DES-100 rows complete; Traces line correct; source pin stale (-1) |
| T4 Security & failure modes | 15 | 15 | Q-2 residual for all three attacker scenarios; 5 operational MUSTs; vendor-contract named as correctness condition |
| T5 Completeness & testability | 15 | 12 | Q-1/Q-2/Q-3 complete; verify-and-discard tension resolved; exclusion consequence absent from ADR-025 §(e) (-3) |
| T6 Convention compliance | 10 | 9 | Source pin stale (-1); all other conventions satisfied |
| **Total** | **100** | **93** | |

---

## 4. Findings

### ISS-01 — Medium (T1, T5): No-ID exclusion consequence absent from ADR-025 §(e)

**Location:** `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md` §(e) "Updated consequences
(amendment additions)" — consequences (c-i), (c-ii), (c-vii).

**Observation:** ADR-025 §(e) enumerates three updated/new consequences from the government-ID
ruling:

- (c-i) Sybil ceiling improved but not closed — a bad actor needs both a new SIM card AND a
  new/stolen government ID per fake account; `subject_id_hash` closes same-document-different-phone
  vector; same-person-multiple-IDs vector remains.
- (c-ii) FR-003 PARTIAL posture reshaped — stored surface now includes `phone_hash` +
  `subject_id_hash` + `id_verified_flag` + `age_verified` + `issuing_region` + `verified_at`;
  no PII fields; legal classification routed to CON-015.
- (c-vii) ID-verification vendor dependency — vendor receives document images (deeper trust
  than phone-intelligence call); vendor-contract must include verify-and-discard terms; residual
  accepted for v1; eliminated in v2.

None of these consequences addresses the government-ID exclusion residual: **citizens without an
accepted government-ID document cannot enrol in v1.** This is a direct effect of the ruling — the
ID check is an eligibility gate (FR-133 §(b), FR-132 amended §(b)) — and it has material civil
participation implications (exclusion of the undocumented, the marginalised, those whose IDs are
not on the allowlist for Phase 1).

**House precedent:** ADR-016 includes an explicit Aadhaar-exclusion sentence: "Phase-1 restricts
enrolment to citizens whose identity credential is Aadhaar; citizens without Aadhaar face
exclusion in Phase 1." The same pattern is required for the government-ID-document check.

**Counterpart in Doc 02:** Doc 02 v2.11.0 records this consequence as H-19 ("no government ID =
no enrolment in v1; political platform exclusion") with status AWAITING APPROVER CONFIRMATION and
an open tension row vs BR-003/FR-020 in §16.5. The FR-132 Gherkin Scenario 6 also specifies the
"no-ID denial with disclosure" path. Neither document in the architectural record (Doc 03 or
ADR-025) names this consequence explicitly.

**Required fix:** Add a new consequence paragraph to ADR-025 §(e) — e.g., "(c-viii) Government-ID
exclusion residual:" — explicitly stating that citizens without an accepted government-ID document
(or whose document type is not on the Phase-1 allowlist) cannot enrol in v1, citing H-19 and the
open BR-003/FR-020 tension (AWAITING APPROVER CONFIRMATION), and noting the ADR-016 Aadhaar
analogue. Optionally, add a parallel note in DES-100 §10.13.9 "Honest consequences" if one
exists there; at minimum the ADR-025 §(e) gap is the required fix.

---

### ISS-02 — Low (T3, T6): Source pin stale — v2.10.0 should be updated to v2.11.0

**Location:** `docs/03-architecture-design-sdd.md` header, line ~10: `Source: SRS-TRUMOCRACY v2.10.0`

**Observation:** The Doc 03 v2.5.0 header reads `Source: SRS-TRUMOCRACY v2.10.0`. The government-
ID document check requirement that DES-100 implements was formally captured as an amendment to
FR-132 in **Doc 02 v2.11.0** — after the architect produced this increment. The architect correctly
acknowledges this sequencing in the v2.5.0 changelog: "(PO increment to SRS-TRUMOCRACY v2.11.0
owed — architect answers gate PO's next version.)" and in DES-100's Backs section: "FR-132 (Doc 02
v2.10.0, amended in v2.11.0 — PO)."

Now that Doc 02 v2.11.0 exists and contains FR-132 amended with the allowlist/denylist enumerated
(DES-100), the source pin should be updated to v2.11.0 so that downstream reviewers checking
FR-132 look at the correct version. The mismatch does not affect correctness of the design, but
creates a traceability friction point.

**Required fix:** Update the Doc 03 header `Source:` field from `SRS-TRUMOCRACY v2.10.0` to
`SRS-TRUMOCRACY v2.11.0`. Correspondingly update §1.1 counts if the v2.11.0 counts differ from
v2.10.0 counts used in the current §1.1.

---

## 5. Positive findings (for the record)

The following review obligations are confirmed clean — recorded here so the rework cycle need not
re-examine them unless the rework itself touches these areas.

**Q-1 (provider field mapping and allowlist/denylist):** DES-100 §10.13.9 provider-field
disposition table correctly maps every provider response field to either a stored allowlist field
or an immediate discard. The DES-100 allowlist (id_verified_flag, age_verified, issuing_region,
subject_id_hash, phone_hash, verified_at) matches FR-132 v2.11.0 Gherkin scenario 4 and the
v2.11.0 changelog summary field-for-field. The denylist (document images, biometric templates,
selfie frames, name, date_of_birth, document_number, expiry_date, raw subject_id,
verification_id) is complete and consistent across ADR-025 §(e) and DES-100 §10.13.9.

**Q-2 (HMAC design and brute-force residual):** HMAC-SHA-256/KMS-pepper is the correct design for
deterministic duplicate-detection lookups. The slow-KDF rejection rationale is technically sound
(per-record random salt defeats deterministic lookup). The brute-force residual is stated precisely
for all three attacker scenarios: DB-dump only (infeasible without pepper), DB-dump + pepper
(hours on commodity GPU — correctly named as the accepted residual), insider KMS+DB (full
reconstruction — dual-auth is the primary mitigation). Five operational MUST requirements are
complete and unambiguous. Two separate peppers (pepper_phone, pepper_id) are maintained
separately in KMS. ✓

**Q-3 (legal-review routing):** The Q-3 legal-routing table correctly separates architect-
decidable items (denylist, allowlist, HMAC design, fail-closed mode) from CON-015/GDPR-counsel
items (DPDP compliance, Aadhaar Act authorisation, personal-data classification of hashes,
retention period, cross-border transfer, erasure rights, GDPR Article 9). CON-015 is declared
critical-path: "No enrolment sprint begins without CON-015 cleared for the government-ID check
path." ✓

**Verify-and-discard-vs-uniqueness tension:** Honestly resolved. Boolean-only storage (strict
verify-and-discard) would NOT prevent same-document-different-phone reuse because the boolean
`id_verified_flag` carries no per-document identity. `subject_id_hash` resolves this: stable
pseudonymous provider token → same document → same hash → duplicate detected. Recommendation
to retain `subject_id_hash` is explicitly made and the cost (deeper FR-003 PARTIAL surface;
T-07 reshaped; CON-015 governs legal classification) is named honestly. ✓

**T-01..T-05 CONFIRMED markings:** All five rows in §10.13.7 cite
"DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4" as the decision authority. None overclaims;
each disposition is consistent with what §4 of the decision record records. §16 five-confirmations
table reproduces the same five items with compatible wording. ✓

**v1 gate date NOT SET:** §16 confirmations table row reads: "The existence of MS-V1-LRG as a
separate v1 launch-readiness gate is confirmed as the mechanism; the date is NOT SET — an explicit
approver value is still required." No invented date appears anywhere in the reviewed content. ✓

**T-06/T-07/T-08 alignment across sources:** All three tension rows are word-for-word consistent
across the decision record, Doc 02 v2.11.0 §16.5, and Doc 03 §10.13.7. T-06: "IMPROVED (not
closed) — same-document deduplication added; same-person-multiple-IDs not prevented;
onePersonOneVote=false unchanged." T-07: "RESHAPED — hashed surface (phone_hash +
subject_id_hash) vs plaintext; no PII; CON-015 governs." T-08: "ARCHITECT-RESOLVED — Phase-1
dated limitation, FR-129 guard." ✓

**T-08 reasoning vs FR-004/ADR-021/OI-20/FR-129:** FR-004's ≥2 independent attestors requirement
is defined for the v2 protocol-level attestor stack (entities issuing credentials into
`PersonhoodRegistry`). The v1 ID-verification vendor is an application-layer component; it does
NOT issue ZK-verifiable personhood credentials and does NOT plug into `PersonhoodRegistry`. FR-004
is satisfied at the architecture level by OI-20/ADR-021 (Phase-1 single-rail Aadhaar). The
single-vendor concentration risk is real and correctly named as T-08; the Phase-1 dated-limitation
analogy to OI-20 is sound; FR-129 as the entrenchment guard is correctly cited. ✓

**ADR count "twenty-five":** ADR-025 was amended (§(e) added), not replaced by a new ADR.
The count is internally consistent across all §12 references and the changelog. ✓

**§15 DES-100 traceability rows:** Three rows present (lines 1635-1637):
- FR-132 amended → DES-095 amendment 2 (second amendment to IEligibilityVerifier v1 backing)
- FR-003 PARTIAL reshaped → DES-100 (allowlist, denylist, HMAC, CON-015 routing)
- NFR-016 + CON-015 + CON-008 → DES-100 (data-at-rest posture; critical-path legal opinion)
All three rows are accurate and complete. ✓

**Vendor-contract constraint:** DES-100 §10.13.9 explicitly states: "The vendor-contract
constraint is not optional — it is part of this design element's correctness condition." This
is confirmed by Doc 01 §E1 alignment note and Doc 02 v2.11.0 FR-132 amended ("vendor no-retention
contract required"). ✓

**No regressions:** Content approved in v2.4.1 (invariant table, ADR-024 isUniqueInScope semantics,
one-vote-per-account-per-scope wording) is unchanged in v2.5.0. ✓

---

## 6. Required rework for cycle 2

The following issues MUST be addressed before cycle 2 can pass:

| # | Severity | Location | Required fix |
|---|---|---|---|
| ISS-01 | Medium | ADR-025 §(e) consequences | Add explicit consequence paragraph for government-ID exclusion residual (c-viii or equivalent): citizens without an accepted government ID cannot enrol in v1; cite H-19; cite BR-003/FR-020 tension (AWAITING APPROVER CONFIRMATION); reference ADR-016 Aadhaar-exclusion precedent |
| ISS-02 | Low | Doc 03 header `Source:` | Update from `SRS-TRUMOCRACY v2.10.0` to `SRS-TRUMOCRACY v2.11.0`; update §1.1 counts to match v2.11.0 if they differ |

The confirmed-clean positive findings above do NOT need to be re-reviewed in cycle 2 unless the
rework itself touches those areas.

---

## 7. Recommendation

FAIL. Route to owning role (architect — Ravi Deshmukh) for rework. Bump version to v2.5.1
(or v2.6.0 if any substantive additions are made beyond the two listed fixes). Re-submit for
cycle 2 technical review.
