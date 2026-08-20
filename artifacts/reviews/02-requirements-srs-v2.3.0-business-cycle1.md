# Document Review Report — 02-requirements-srs.md v2.3.0 · Business · Cycle 1

> Reviewer: **technical-writer** (neutral — not the document owner; product-owner owns Doc 02).
> Independence maintained: scorer ≠ author; no edits made to the reviewed document.
> Scope note: this is a decision-application version. Review is focused on the four Pilot/Verification
> decision impact areas (Decisions 1–4, Rathish, 2026-08-20; DECISIONS-2026-08-20-PILOT-VERIFICATION.md)
> per coordinator instruction. Changed areas reviewed in full; unchanged areas spot-checked for
> consistency with new content.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.3.0
Review mode: business
Reviewer role: technical-writer (neutral — not the document owner)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Cycle-1 business review of `docs/02-requirements-srs.md` v2.3.0, focused on the four Pilot/Verification
decisions applied from DECISIONS-2026-08-20-PILOT-VERIFICATION.md (Rathish, 2026-08-20). All twelve focus
checks pass. Decisions 1–4 are applied faithfully and completely: FR-121 records the pilot jurisdiction
sequence with its technical-readiness rationale and the CON-015 hard dependency; FR-122..125 implement the
"verification gates COUNTING, never joining" rule with OI-19 correctly recorded as PENDING and FR-125 as a
draft; FR-126..128 record the on-device proof / nullifier-only / subpoena-test posture with normative
language matching the decision record verbatim; TD-12 records the two rejected designs; OI-04-PILOT is
closed and OI-19/OI-20 are minted as open tensions with explicit "Do NOT mark decided" guards; FR-003,
FR-004, FR-020, and FR-021 carry annotations without normative-text amendment; §8 Gherkin is present for
all eight new Must FRs with adversarial scenarios throughout; §11 arithmetic is correct (Must 109, CON 15,
FR minted 128, TD 12). Three Low issues are recorded: §2.5 CON range not updated to include CON-015 (ISS-01);
§15 approvals table Notes column for the v2.1.0 row still reads "OI-18 open" when OI-18 was decided at
v2.2.0 (ISS-02 — carry-forward from the v2.2.0 cycle-1 review); FR-020 annotation implicitly narrows the
normative subject from "any verified citizen" to "counted-membership" scope without formally scoping the
normative text (ISS-03). No Critical, High, or Medium issues found. **Verdict: PASS.**

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — all rows above are "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 100 | 20.0 | All four decision rationales preserved; ordering criterion "technical readiness, not market size" stated; open tensions OI-19/OI-20 clearly framed as requiring approver decision |
| B2 Completeness | 15 | 100 | 15.0 | All eight decision elements land: pilot phases + rationale (FR-121/§4.40), legal-opinion hard dependency (CON-015), counting rule (FR-122/123), visible status + privacy composition (FR-124), on-device/discard (FR-126), nullifier-collision-only (FR-127), subpoena test with test obligation (FR-128), referral-edge discard (FR-125/TD-12); OI-19/OI-20 minted PENDING; OI-04-PILOT closed |
| B3 Traceability & IDs | 20 | 97 | 19.4 | §12 traces for FR-121..128 present and consistent with "Traces to" columns; §11 arithmetic verified correct (128 FR, 15 CON, 12 TD, 109 Must, 126 active); no duplicate or renumbered IDs; ISS-01 Low: §2.5 CON range still shows CON-014 |
| B4 Correctness & consistency | 15 | 80 | 12.0 | ISS-02 (§15 Notes "OI-18 open" stale — carry-forward from v2.2.0 cycle-1) + ISS-03 (FR-020 annotation scope ambiguity) — 2 Low deductions |
| B5 Testability | 15 | 100 | 15.0 | All eight new Must FRs have ≥1 positive + ≥1 adversarial/negative scenario; FR-128 subpoena-test Gherkin is falsifiable (technically capable actor with full platform access attempts to assemble identity mapping; enforcement architectural not policy); FR-125 Gherkin correctly marked design-intent pending OI-19 |
| B6 Convention compliance | 15 | 100 | 15.0 | Header: v2.3.0 ✓; Status: In Review ✓; Last updated: 2026-08-20 ✓; Change entry newest-first ✓; named owners on all new FRs ✓; RFC 2119 compliant ✓; ISO-8601 dates ✓ |
| **Total** | **100** | — | **97%** | — |

---

## 4. Twelve focus checks (decision-application verification)

| # | Focus | Status | Evidence |
|---|-------|--------|----------|
| 1 | FR-121 pilot sequence — three phases named with technical-readiness rationale, India/Aadhaar Phase-1, EU/eIDAS 2.0 Phase-2, USA Phase-3 deferred with reasons | CONFIRMED | §4.40 FR-121: "Deploy enrolment adapters in the following sequence, determined by technical readiness of the identity rail and not by market size"; Phase-1 India: "single national issuer, near-universal coverage, and a government-signed XML that is provable in-circuit"; Phase-3 USA: "fragmented... low activation... optional 'phone-home' privacy default conflicts with the non-correlation guarantee (FR-002, FR-069)" — matches Decision 1 verbatim |
| 2 | CON-015 legal-opinion Gate-2 line item — hard dependency on record, blocks Phase-1 implementation-ready | CONFIRMED | CON-015 in §9.1: "A **legal opinion** for the Phase-1 lead jurisdiction (India) MUST be obtained and recorded before the enrolment requirement (FR-069/FR-070/FR-121) is finalised against the Aadhaar rail... This is a **Gate-2 line item** — no Gate-2 checklist may show the Phase-1 enrolment adapter as ready without a recorded legal sign-off"; matches Decision 1 verbatim requirement |
| 3 | OI-04-PILOT closed — §13 row struck through and resolved, §2.4 updated to name India pilot | CONFIRMED | §13 OI-04 row: "~~Which pilot jurisdictions?~~ ✅ OI-04-PILOT RESOLVED (Rathish, 2026-08-20)" with full disposition; §2.4: "Phase-1 pilot jurisdiction: **India** — Aadhaar offline paperless KYC; FR-070 adapter class (c); OI-04-PILOT resolved 2026-08-20" |
| 4 | "Verification gates COUNTING, never joining" — normative rule applied in §4.41; open tier does not count toward anything; Decision 2 verbatim preserved | CONFIRMED | §4.41 preamble: "**Verification gates COUNTING, never joining.**"; FR-122: open tier not counted in any official total; FR-123: "Require proof of unique personhood...for every action that COUNTS"; FR-123 closes with "This is the normative boundary of Decision 2: verification gates COUNTING, never joining" — Decision 2 phrase preserved verbatim |
| 5 | OI-19 and OI-20 recorded as PENDING tensions, not resolved — normative text of FR-020 and FR-004 not amended | CONFIRMED (1 Low) | OI-19: "**PENDING APPROVER DECISION (Rathish)**" in §13, with "Do NOT mark OI-19 decided" guard ✓; OI-20: "**PENDING APPROVER DECISION (Rathish)**" in §13, with "Do NOT amend FR-004's normative text" + "Do NOT mark OI-20 decided" guards ✓; FR-004 annotation explicitly says "FR-004 normative text is NOT amended here" ✓; FR-020 normative text unchanged ✓; but FR-020 annotation implicitly narrows scope to "counted membership" — ISS-03 Low |
| 6 | FR-124 verified-status composition with three-tier privacy — Supporter only in aggregate, no per-person marker, FR-082 cited | CONFIRMED | FR-124(b): "for Supporter-tier participants (FR-082), no profile surface exists for a Supporter by design — the verified status exists ONLY as the Supporter's nullifier being counted in the aggregate strength number; no per-person public verified marker MUST exist for a Supporter on any surface" — faithful to Decision 2; FR-082 cited; FR-086 (no retroactive linkage) cited |
| 7 | FR-125 drafted with invite-gating invite-discard rule, OI-19 banner, "design-intent record" status | CONFIRMED | FR-125 text: "the referral edge MUST be verified for authenticity and MUST be discarded immediately after the gate-check completes — it MUST NOT be stored, recorded, or associated with either the referrer or the new entrant in any form"; OI-19 banner in §4.41 and inline in FR-125; §11 convention note: "FR-125 is a draft Must requirement pending OI-19 resolution; it is included in the Must count as a design-intent record but is not implementation-ready until OI-19 closes" |
| 8 | FR-126..128 on-device / nullifier-only / subpoena posture — existing circuit confirmed (C-03/SC-01/ADR-017), not a new component | CONFIRMED | §4.42 preamble: "This is the EXISTING enrolment circuit (C-03 design with the SC-01 trust-anchor binding, per ADR-017; confirmed by artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md) — not a new component"; FR-127: "This is the existing enrolment circuit — the C-03 design with the SC-01 trust-anchor binding confirmed by ADR-017... this FR records the confirmed design posture as a normative requirement" — matches Decision 3 confirmation requirement |
| 9 | Subpoena test — falsifiable, with test obligation, adversarial Gherkin | CONFIRMED | FR-128: "The acceptance test is the **subpoena test**"; Gherkin: "Given a court order requiring the platform to disclose who belongs to a named political party... When a technically capable actor with full platform access attempts to comply... Then the platform is technically unable to produce any identity-to-member mapping"; adversarial encrypted-storage scenario present; Verify-by includes A (independent audit) and T (automated absence-of-data test) — test obligation on record |
| 10 | TD-12 — both rejected designs recorded with rationale | CONFIRMED | TD-12 in §9.3: "(1) Persistent referral graph / referrer-liability / association-based tracing — rejected because..."; "(2) Encrypted identity registry for later comparison — rejected because..." — matches Decision 4 verbatim; FR-125 and FR-128 cross-referenced as the normative implementing requirements |
| 11 | §8 Gherkin present for all eight new Must FRs with adversarial/negative scenarios | CONFIRMED | FR-121: USA mDL refused (adversarial) ✓; FR-122: open-tier not counted (negative/guardrail) ✓; FR-123: unverified refused + 10,000 accounts not counted (adversarial) ✓; FR-124: Supporter identity-derivation attempt (adversarial) ✓; FR-125: full data inventory shows no referral data (adversarial) + no gate on counted path (negative) ✓; FR-126: traffic interception shows only proof+nullifier + data inventory shows no raw credential (both adversarial) ✓; FR-127: code-path inspection shows no identity comparison (adversarial) ✓; FR-128: subpoena test + encrypted-storage fails-test (both adversarial) ✓ |
| 12 | §11 arithmetic consistent; §12 updated; supersession/amendment annotations preserve originals | CONFIRMED | §11: Must 109 (101+8) ✓; FR minted 128 (120+8) ✓; active 126 (128−2 superseded) ✓; CON 15 (14+1) ✓; TD 12 (11+1) ✓; BR 21 (unchanged) ✓; NFR 28 (unchanged) ✓; §12 v2.3.0 traces for FR-121..128 present and internally consistent with FR table "Traces to" columns; FR-003/004/020/021 annotations preserve normative text verbatim |

---

## 5. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | Low | B3 | §2.5, line 231 | "See §9 (`CON-001` … `CON-014`)" — stale range; CON-015 was added in v2.3.0, so the upper bound should be CON-015. Same pattern as ISS-02 Low in the v2.1.0 cycle-1 review (which was fixed for v2.1.1); not repeated at v2.2.0 (no new CON added); reappears at v2.3.0 (CON-015 added). | Update to "See §9 (`CON-001` … `CON-015`)". |
| ISS-02 | Low | B4 | §15 approvals table, v2.1.0 row Notes column | Notes reads "OI-18 open (entrenched-charter scope)" — stale in any version ≥ v2.2.0. OI-18 was DECIDED at v2.2.0 (§13 line records "**DECIDED (Rathish, 2026-08-11)...**"; OI-18-DECISION-2026-08-11.md is the decision record). This was ISS-02 Low in the v2.2.0 cycle-1 review and was not addressed before v2.3.0 was produced — it is now a two-version carry-forward. | Update Notes to "OI-18 DECIDED at v2.2.0 (OI-18-DECISION-2026-08-11.md)" or add a dated update annotation on the v2.1.0 row. |
| ISS-03 | Low | B4 | §4.6, FR-020 annotation | The FR-020 normative text begins "Admit any **verified** citizen to any active party on request" (unchanged). The v2.3.0 annotation states "admission is no longer preconditioned on personhood verification" and closes with "The original FR-020 text stands in full for counted membership" — the phrase "for counted membership" implicitly narrows the normative subject from "any verified citizen" (the full original scope) to "counted membership" without a formal scoping clause in the normative text itself. Intent is clear (FR-122 governs unverified/open-tier access; FR-020 governs counted-membership admission properties), OI-19 is correctly flagged PENDING, and no normative weakening occurred. However, an implementer reading FR-020's normative sentence in isolation will see "Admit any verified citizen" as the complete, unqualified gate — not understanding that FR-122 extends the platform entry to unverified citizens. | In a future revision, consider adding a parenthetical scope clause to the normative text — e.g., "_for counted membership_: Admit any verified citizen..." — or restructure the annotation to make explicit that FR-020 governs the counted-membership admission properties, while FR-122 governs open-tier entry. This is a clarity fix, not a normative change. |

> All three issues are Low and do **not** block the pass bar.

---

## 6. Decision faithfulness — detailed cross-check

The review compared each decision element in DECISIONS-2026-08-20-PILOT-VERIFICATION.md against the
corresponding normative text in Doc 02 v2.3.0.

### Decision 1 cross-check

| Decision record §4 phrase | Location in Doc 02 v2.3.0 | Match |
|---------------------------|---------------------------|-------|
| "Phase 1 pilot: INDIA — Aadhaar offline paperless KYC. One national issuer, near-universal coverage, signed XML that is provable in-circuit." | FR-121: "single national issuer, near-universal coverage, and a government-signed XML that is provable in-circuit" | ✓ (verbatim) |
| "Phase 2: EU — eIDAS 2.0 wallets, privacy-preserving by design; first targets France and the Nordic countries." | FR-121: "first targets France and the Nordic countries, whose national implementations are privacy-preserving by design" | ✓ (verbatim) |
| "Phase 3: USA — deferred because the US has no national digital identity... fragmented, state-by-state mobile-driver's-licence patchwork with low activation and an optional 'phone-home' privacy default that conflicts with our non-correlation guarantee." | FR-121: "state-by-state mobile-driver's-licence (mDL) landscape is fragmented, activation is low, and an optional 'phone-home' privacy default conflicts with the non-correlation guarantee (FR-002, FR-069)" | ✓ (verbatim) |
| "Record explicitly, as a hard dependency, that a LEGAL opinion is required... The legal review is a Gate-2 line item, not an afterthought." | CON-015: "MUST be obtained and recorded before... This is a **Gate-2 line item**" | ✓ (verbatim) |
| "By technical readiness of the identity rail (not market size)" | §4.40 preamble: "**Ordering criterion: technical readiness of the identity rail, not market size.**" | ✓ |

### Decision 2 cross-check

| Decision record §4 phrase | Location in Doc 02 v2.3.0 | Match |
|---------------------------|---------------------------|-------|
| "verification gates COUNTING, never joining" | FR-123 closing: "This is the normative boundary of Decision 2: verification gates COUNTING, never joining" | ✓ (verbatim) |
| "Open to everyone, no verification: read, follow, watch, low-stakes participation (invite-gating for spam control only)" | FR-122: "any citizen — without completing personhood verification — to access the platform for open-tier participation: reading, following, watching, and other low-stakes actions" | ✓ |
| "Requires proof of unique personhood to COUNT: contributing to a party's official strength number, voting in a binding decision, standing as a candidate" | FR-123(a)(b)(c): lists exactly these three counted actions | ✓ (verbatim) |

### Decision 3 cross-check

| Decision record §4 phrase | Location in Doc 02 v2.3.0 | Match |
|---------------------------|---------------------------|-------|
| "The credential is read and proven ON THE USER'S DEVICE." | FR-126: "Read and prove the enrolment credential exclusively ON the user's device" | ✓ (verbatim) |
| "Only a zero-knowledge proof and a one-way uniqueness nullifier are transmitted." | FR-126: "only the generated ZK proof and the derived nullifier are transmitted" | ✓ (verbatim) |
| "used locally to generate the proof and then discarded" | FR-126: "MUST then be discarded; it MUST NOT be transmitted" | ✓ |
| "prevented by NULLIFIER COLLISION — a second verification by the same person yields the same nullifier and is rejected" | FR-127: "same deterministic nullifier...which collides with the existing on-chain record and is rejected" | ✓ (verbatim) |
| "Confirm this is the existing enrolment circuit (the C-03 design with the SC-01 trust-anchor binding), not a new component" | §4.42 preamble: "the EXISTING enrolment circuit (C-03 design with the SC-01 trust-anchor binding, per ADR-017)... not a new component" | ✓ (verbatim) |
| "MUST-NOT, with a test obligation: the platform stores no raw or reversible identity data, not even encrypted" | FR-128: "MUST NOT store any raw or reversible identity data in any form...and not even in encrypted form" | ✓ (verbatim) |
| "The acceptance test is the subpoena test — if a court ordered the platform to disclose who belongs to a party, it must be technically unable to comply." | FR-128: "The acceptance test is the **subpoena test**: if a court orders the platform to disclose who belongs to a party, the platform MUST be technically unable to comply" | ✓ (verbatim) |
| "Encrypted-but-decryptable storage fails this test." | FR-128: "Encrypted-but-decryptable identity storage FAILS this test" | ✓ (verbatim) |

### Decision 4 cross-check

| Decision record §4 phrase | Location in Doc 02 v2.3.0 | Match |
|---------------------------|---------------------------|-------|
| "Persistent referral graph / referrer-liability / association-based 'troublemaker' tracing. Rejected: it deanonymises supporters..." | TD-12(1): "Persistent referral graph / referrer-liability / association-based tracing — rejected because it deanonymises Supporters through the social graph" | ✓ |
| "Referral may GATE entry, but the referral edge is verified and discarded, never stored." | TD-12(1) and FR-125: "the referral edge MUST be verified for authenticity and MUST be discarded immediately" | ✓ (verbatim) |
| "Storing identity data (even encrypted) for later comparison. Rejected: a decryptable identity registry recreates the subpoena, operator-override and capture risks..." | TD-12(2): "Encrypted identity registry for later comparison — rejected because a decryptable identity registry recreates the subpoena, operator-override, and capture risks the platform exists to eliminate" | ✓ (verbatim) |

---

## 7. Routing instruction

**Verdict: PASS.** The owning role (**product-owner**, Priya Raghunathan) MUST:

1. Set `Status: Approved` in the document header.
2. Optionally address ISS-01, ISS-02, ISS-03 (all Low) at the next touch — none blocks a gate.
   - ISS-01: one-line §2.5 range update (CON-014 → CON-015).
   - ISS-02: one-line §15 Notes update ("OI-18 DECIDED at v2.2.0").
   - ISS-03: clarify FR-020 annotation scope wording (no normative change required; clarity only).

**Open items for downstream roles:**

- **Architect:** New ADR owed for on-device/nullifier-only posture and two rejected designs (TD-12 references "architect to record in a new ADR as considered-and-rejected with rationale"). FR-126..128 have no DES yet — same recorded-phasing posture as FR-074..FR-111.
- **Product-owner (deferred):** OI-19 and OI-20 both require approver (Rathish) decision before FR-125 and the Phase-1 adapter path respectively can be finalised. Neither blocks the current PASS.
- **Tester:** RTM catch-up covers FR-121..128 (all eight new Must FRs plus FR-125 as a design-intent record pending OI-19; TC seeding deferred until DES and US exist).
- **Project-manager:** GATE-STATUS record should be updated with CON-015 Gate-2 line item and OI-04-PILOT closure.
