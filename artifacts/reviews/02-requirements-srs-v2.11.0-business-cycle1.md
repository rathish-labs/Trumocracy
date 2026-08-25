# Document Review Report
## Doc 02 — Requirements Specification (SRS-TRUMOCRACY v2.11.0)
### Business Mode · Cycle 1

---

<!-- MACHINE-PARSEABLE METADATA -->
```
document:       docs/02-requirements-srs.md
document_id:    SRS-TRUMOCRACY
version:        2.11.0
status_at_review: In Review
review_mode:    business
cycle:          1
reviewer_role:  technical-writer (neutral; not the document owner)
review_date:    2026-08-23
score:          99
critical:       0
high:           0
medium:         0
low:            1
verdict:        PASS
```
<!-- END METADATA -->

---

## 1. Document & Review Context

| Field | Value |
|-------|-------|
| Document | docs/02-requirements-srs.md |
| Version reviewed | SRS-TRUMOCRACY v2.11.0 |
| Status at review | In Review |
| Mode | Business |
| Cycle | 1 (new cycle; v2.10.0 Cycle 3 was PASS) |
| Reviewer | technical-writer (neutral reviewer — not the product-owner who owns Doc 02) |
| Review date | 2026-08-23 |
| Decision records consulted | `artifacts/status/DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md` |
| Architect source | Doc 03 SDD-TRUMOCRACY v2.5.1 (Approved) |

**Scope of v2.11.0 changes.** FR-132 amended (5-part: phone hash + government-ID verify-and-discard + DES-100 allowlist/denylist + subject_id_hash dedup + honesty posture + vendor non-retention); FR-133 amended (scope-asymmetry clarification: flag-don't-block = spam layer only, ID check = hard eligibility gate); §8 Gherkin scenarios 3–6 for FR-132 and scenarios 3–4 for FR-133 added; §16.4 H-15/H-16 updated; H-17/H-18/H-19 minted; §16.5 tensions T-01..T-05 CONFIRMED, T-06 IMPROVED, T-07 RESHAPED, T-08 ARCHITECT-RESOLVED, new BR-003/FR-020 row AWAITING APPROVER CONFIRMATION; §11 label updated to v2.11.0; §16 Source block updated.

---

## 2. Rubric & Scoring

| Rubric area | Weight | Raw | Weighted |
|-------------|--------|-----|----------|
| B1 — Outcome & problem clarity | 20% | 20 | 20.0 |
| B2 — Completeness | 15% | 96.7 | 14.5 |
| B3 — Traceability & IDs | 20% | 100 | 20.0 |
| B4 — Correctness & consistency | 15% | 96.7 | 14.5 |
| B5 — Testability | 15% | 100 | 15.0 |
| B6 — Convention compliance | 15% | 100 | 15.0 |
| **Total** | **100%** | | **99.0** |

**Verdict: PASS — 99% · 0C · 0H · 0M · 1L**

---

## 3. Issues

### ISS-01 · Low — Doc 03 version pin stale across multiple §16 and §4.46 locations

**Location:** §16 Source block (lines ~2722–2725); §4.46 rationale (line ~910); §16.4 H-17 entry; §16.5 tensions rows T-01..T-08 and footer note.

**What the document says:** All of the above cite `"Doc 03 v2.5.0 (In Review)"` (for §10.13.7, §10.13.9, and the Source block header).

**What is correct:** Doc 03 is at **v2.5.1 (Approved)** as of 2026-08-23. Doc 03 v2.5.1 is the version that contains DES-100 (§10.13.9) and the T-01..T-08 confirmed tensions (§10.13.7) in their final approved form.

**Specific occurrences:**
- §16 Source block: `"Doc 03 v2.5.0 (In Review) §10.13.7 (T-01..T-05 CONFIRMED...) + §10.13.9 (DES-100...)"`
- §4.46 rationale: `"DES-100 (field-level disposition — Doc 03 v2.5.0 §10.13.9)"`
- H-17: `"see DES-100 §Q-2 (Doc 03 v2.5.0 §10.13.9)"`
- §16.5 T-01..T-05 confirmed rows: `"Doc 03 v2.5.0 §10.13.7 T-01 CONFIRMED"` (and T-02..T-05 similarly)
- §16.5 T-06, T-07, T-08 rows: `"Doc 03 v2.5.0 §10.13.7"`, `"Doc 03 v2.5.0 §10.13.9 Q-3"`
- §16.5 footer note: `"the architect's analysis in Doc 03 v2.5.0 §10.13.7 is the primary source"`

**Fix:** Replace all occurrences of `"Doc 03 v2.5.0 (In Review)"` and `"Doc 03 v2.5.0"` (where referring to §10.13.7 and §10.13.9) with `"Doc 03 v2.5.1 (Approved)"`. This is a sweep across §16 Source block, §4.46 rationale, H-17, and the entire §16.5 tension table and footer note.

**Severity rationale:** This is a Low. The normative content is correct; only the version label is stale. It does not create a consistency failure in the requirement text or the honesty register. The coordinator explicitly classified this as Low.

---

## 4. Detailed Findings by Review Obligation

### Obligation 1 — FR-132 normative text matches DES-100 field-for-field

**Result: PASS**

Compared FR-132(b) against DES-100 §10.13.9 (Doc 03 v2.5.1) field-for-field.

**Allowlist (6 fields):**

| Field | FR-132(b) | DES-100 | Match |
|-------|-----------|---------|-------|
| `id_verified_flag` | boolean | boolean (gate: true iff authentic + age + region) | ✓ |
| `age_verified` | boolean — legal-age threshold, not precise age | boolean (confirms ≥ 18) | ✓ |
| `issuing_region` | country-code only | ISO 3166-1 alpha-2 | ✓ |
| `subject_id_hash` | HMAC-SHA-256/KMS-pepper of issuing authority subject ID — one-account-per-document dedup | HMAC-SHA-256(provider_subject_id, pepper_id) — same-document deduplication | ✓ |
| `phone_hash` | HMAC-SHA-256/KMS-pepper | HMAC-SHA-256(E.164-normalized(phone), pepper_phone) | ✓ |
| `verified_at` | timestamp | ISO-8601 timestamp | ✓ |

**Denylist (9 items):**

| FR-132 denylist term | DES-100 denylist term | Match |
|----------------------|-----------------------|-------|
| document image | document images | ✓ |
| biometric template | biometric templates | ✓ |
| selfie | selfie frames | ✓ |
| name | `name` | ✓ |
| date of birth | `date_of_birth` | ✓ |
| document number | `document_number` | ✓ |
| expiry date | `expiry_date` | ✓ |
| raw subject ID | raw `subject_id` | ✓ |
| verification session ID | `verification_id` | ✓ |

All 6 allowlist fields and all 9 denylist items match exactly. FR-132 normative text is field-for-field consistent with DES-100.

---

### Obligation 2 — H? sweep both directions; H-17/H-18/H-19 honest and sufficient

**Result: PASS**

**Direction 1 — Every H=Y row maps to at least one H-01..H-19 entry:**

Verified that each PARTIAL or DEFERRED-v2 row with H=Y traces to an H entry. Representative checks:
- FR-003 (PARTIAL) → H-16 (identity data at rest — phone_hash, subject_id_hash) and H-18 (subject_id_hash retained identifier) ✓
- FR-030/FR-031 (DEFERRED-v2) → H-01 (votes are secret ballots), H-03 (no receipt-freeness) ✓
- FR-082/FR-086 (DEFERRED-v2) → H-02 (party membership is anonymous) ✓
- FR-128 (PARTIAL) → H-04 (cryptographic subpoena-proofness) ✓
- FR-132 → H-15 (v1 guarantees one-person-one-vote), H-17 (vendor sees document), H-18 (subject_id_hash retained), H-19 (no-ID exclusion) ✓
- FR-133 → H-19 (scope note: flag-don't-block does not apply to ID gate) ✓
- NFR-001/NFR-002 (PARTIAL) → H-02, H-06 ✓
- NFR-003 (DEFERRED-v2) → H-01, H-03 ✓
- NFR-024 (PARTIAL) → H-14 ✓

**Direction 2 — Every H-01..H-19 entry references an FR/NFR in the §16.3 table:**

All 19 H entries verified as referencing FRs or NFRs that appear in §16.3 as PARTIAL or DEFERRED-v2 (H=Y). No orphaned H entries found.

**H-17 assessment (vendor sees document):**
The entry accurately states: the third-party ID-check provider sees the government-ID document during verification; even with verify-and-discard and a contractual no-retention clause, this is a legal/contractual control, not a technical guarantee; a breaching vendor may retain data the platform intended to be discarded. The vendor-contract constraint (FR-132 §(e)) is correctly cited. This disclosure is honest and sufficient. The citation "Doc 03 v2.5.0 §10.13.9" is stale (the Low issue in ISS-01) but the substance is correct.

**H-18 assessment (subject_id_hash retained):**
The entry accurately states: `subject_id_hash` is retained as the deduplication key; it is a derived identifier (not raw subject ID, but a stable hash); it cannot be reversed without the KMS-managed pepper but IS linkable across enrolment attempts for the same document; CON-015 governs whether this constitutes personal data under India's DPDP Act, Aadhaar Act 2016, and GDPR. This disclosure is honest and sufficient.

**H-19 assessment (no-ID exclusion):**
The entry accurately states: a person who cannot or does not have a valid government ID cannot create an account in v1; the government-ID document check (FR-132 §(b)) is a hard eligibility gate; persons most underserved by the existing political system (refugees, stateless persons, those with expired documents) are the same population most likely to lack a valid government ID; this constitutes a direct tension with BR-003/FR-020 and with the platform's stated mission; it is NOT resolved — see §16.5 new tension row. This disclosure is honest, complete, and correctly points to the AWAITING row. It does not soft-pedal the exclusion.

---

### Obligation 3 — FR-133 scope asymmetry unambiguous

**Result: PASS**

The scope asymmetry is stated twice — in the rationale box and in the normative FR text — creating no ambiguity.

**In the rationale box (§4.47):** "Critical asymmetry (v2.11.0 clarification): The flag-don't-block rule in FR-133 governs the spam-resistance layer only — VoIP/virtual-number signals, velocity checks, and device anti-fraud. It does NOT apply to the government-ID document check (FR-132 §(b)). The ID check is a genuine eligibility gate: a person who cannot or does not present a valid government ID at signup CANNOT enrol in v1."

**In the normative FR-133 text:** "Scope of flag-don't-block: the flag-don't-block rule in this requirement applies ONLY to the spam-resistance layer signals enumerated above; it does NOT apply to the government-ID eligibility gate (FR-132 §(b)). The ID check is a hard eligibility gate — a person who cannot present a valid government ID is excluded by FR-132, not rate-limited by this requirement."

Both statements are consistent, explicit, and unambiguous. The false-positive path (FR-133) handles a legitimate VoIP/eSIM user — it does not handle a person without a government ID (who is excluded by FR-132). No ambiguity found.

---

### Obligation 4 — CONFIRMED markings match decision record §4; v1 gate date presented as NOT SET

**Result: PASS**

CONFIRMED markings verified against `DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md §4`:

| Tension | §16.5 marking | Decision record §4 | Match |
|---------|--------------|---------------------|-------|
| T-01 (Charter Rule 6 — anonymity) | CONFIRMED | T-01..T-05: "deferred-with-disclosure dispositions accepted as recorded" | ✓ |
| T-02 (FR-128 subpoena test) | CONFIRMED | Same group CONFIRMED | ✓ |
| T-03 (BR-009/FR-082 anonymity) | CONFIRMED | Same group CONFIRMED | ✓ |
| T-04 (NFR-003 receipt-freeness Guarded Layer) | CONFIRMED | Same group CONFIRMED | ✓ |
| T-05 (Charter Rule 3 — no privileged role) | CONFIRMED | Same group CONFIRMED | ✓ |
| T-06 (Charter Rule 1 — one-person-one-vote) | "T-06 IMPROVED — gap acknowledged" | Not plain CONFIRMED — IMPROVED status, tension stands | ✓ |
| T-07 (FR-003 identity data at rest) | "T-07 RESHAPED — CON-015 governs" | Not plain CONFIRMED — RESHAPED, legal classification open | ✓ |
| T-08 (FR-004 plurality vs single-vendor) | "T-08 ARCHITECT-RESOLVED" | Architect-resolved Phase-1 operational limitation | ✓ |

No overclaim found. T-06/T-07/T-08 are correctly distinguished from the T-01..T-05 CONFIRMED group.

**V1 gate date:** No v1 gate date appears anywhere in the document. The §11 release shape cites "2027-06-01" (Definition-B launch) and "2027-05-14" (Definition-B Gate-2 readiness) only. The decision record §6 explicitly states "the date itself remains NOT SET — the approver listed this among the items folded in but supplied no date." The document does not present a v1 gate date — consistent with NOT SET. ✓

---

### Obligation 5 — BR-003/FR-020 contradiction row genuinely surfaced

**Result: PASS**

The §16.5 new row reads verbatim: "**Government-ID eligibility gate vs BR-003 / FR-020** | ... The government-ID document check (FR-132 §(b)) is a hard eligibility gate: a person without a valid government ID cannot enrol in v1. This is a real-world exclusion from a political platform. People without government IDs (refugees, stateless persons, those with expired documents) are often the same population the platform's mission targets. The flag-don't-block rule in FR-133 does NOT apply to this gate. The analogous exclusion for Phase-1 (Aadhaar-only, OI-20/ADR-016) is already recorded; the government-ID gate is a broader version of the same tension. | AWAITING APPROVER CONFIRMATION — Does the approver accept the government-ID eligibility gate as a v1 limitation disclosed under FR-131 + §16.4 (H-19), with v2 commitment to a more inclusive enrolment model? Or must a non-document fallback path be specified for v1?"

The row names the affected requirements (BR-003, FR-020), accurately characterises the tension (frictionless join vs hard eligibility gate), names the affected population (refugees, stateless persons, etc.), draws the correct analogy to ADR-016, and is marked AWAITING (not CONFIRMED, not softened). It is not hedged or minimised. ✓

---

### Obligation 6 — Standard checks

**§11 label:** "Counts (v2.11.0)" — correct. ✓

**§11 Must count:** 114 — confirmed by direct read of the §11 MoSCoW table. ✓

**§11 FR minted count:** "133 FR minted (131 active + 2 superseded: FR-046, FR-062)" — correct. ✓

**§16.3.1 tally:** "131 active FRs classified: **IN-v1 107** · **PARTIAL 20** · **DEFERRED-v2 4** · **SUPERSEDED-n/a 2** (FR-046, FR-062)" — correct; consistent with v2.10.0 (FR-132/FR-133 amended, not minted). ✓

**Doc 03 version pin:** v2.11.0 pins Doc 03 as "v2.5.0 (In Review)" across multiple locations. Doc 03 is at v2.5.1 (Approved). This is ISS-01 (Low) as noted above. ✓ (flagged)

**Traceability FR-132 → design:** FR-132 traces to DES-095 (v1 backing amended), DES-100 (field-level disposition), ADR-025 §(e) (government-ID check amendment). All three design elements exist in Doc 03 v2.5.1. The traceability chain is complete. ✓

**FR-132 → BR-006, BR-012:** BR-006 (one-person-one-vote as foundational rule) and BR-012 (resist governance attacks / Sybil resistance) are correct parent BRs for the government-ID check. The BR trace rationale in §4.46 explains both traces. ✓

**Catch-up posture:** FR-132 and FR-133 are correctly maintained in the recorded-phasing posture ("US/TC/RTM owed at next catch-up. TC OPEN — Phase 3"). This is consistent with the posture established for FR-131 and maintained through v2.10.0. ✓

**Changelog accuracy (v2.11.0 entry):** The changelog correctly describes: FR-132 amended (not minted) to add government-ID document check, verify-and-discard, DES-100 allowlist/denylist normative text, subject_id_hash deduplication; FR-133 amended to clarify scope asymmetry; §8 Gherkin scenarios added; H-15/H-16 updated; H-17/H-18/H-19 minted; tensions T-01..T-08 confirmed/improved/reshaped/resolved; new BR-003/FR-020 AWAITING row; §11 label updated; §16 Source block updated. No changelog inaccuracies found. ✓

**Gherkin scenarios §8:** Scenarios 3–6 for FR-132 cover: (3) honesty notice carries "real-person-verified-not-unique-personhood" caveat; (4) verify-and-discard — only allowlist fields persist after ID check; (5) duplicate government ID refused via subject_id_hash; (6) no government ID — enrolment denied with disclosure. Scenarios 3–4 for FR-133 cover: (3) flag events do not appear on public record or governance-path surface; (4) hard-block path does not exist (absence test). All scenarios provide testable Given/When/Then structure. ✓

**No regressions from v2.10.0:** §11 label updated correctly per maintenance rule; Must count 114 unchanged (no new mints); IN-v1 107 / PARTIAL 20 / DEFERRED-v2 4 tally unchanged; all v2.10.0 fixes (minted count, §4.46/§4.47 annotations, §11 maintenance rule) are preserved in v2.11.0. ✓

---

## 5. Verdict

**PASS — 99% · 0 Critical · 0 High · 0 Medium · 1 Low**

Doc 02 v2.11.0 is **approved** to advance in the SOP. The product-owner sets `Status: Approved`. The single Low issue (ISS-01: stale Doc 03 version pin across §16 Source block, §4.46 rationale, H-17, and §16.5 tension rows and footer note) may be fixed in the next version without re-review — it does not affect the normative content.

**Review loop status for Doc 02:**
- v2.10.0 Cycle 3: PASS (carried forward)
- v2.11.0 Cycle 1: PASS (this report)
- SOP advances.

---

_Reviewer: technical-writer (neutral) — not the document's owning role (product-owner)_
_Review date: 2026-08-23_
_Source document read end-to-end before scoring: confirmed._
