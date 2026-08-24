# Document Review Report — Project Plan v2.3.0 (Business Mode, Cycle 1)

> Produced by the **document-review** skill. Reviewer: sre (PM-assigned neutral reviewer — owner
> is project-manager). Read-only: the reviewer scores and lists issues only; the owning role
> does every rework. This is a new cycle-1 review for v2.3.0 — a fresh loop, not a continuation
> of the v2.1.0/v2.2.0 cycle. Doc 13 v2.2.0 was Approved (PASS 95%, c2, 2026-08-23).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK ── -->

```
Reviewed document: 13-project-plan.md
Document version: 2.3.0
Review mode: business
Reviewer role: sre
Score: 92%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

`docs/13-project-plan.md` v2.3.0 (Status: In Review, Ana-Maria Petrescu, 2026-08-23) applies
the three approver rulings from `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md`: phone-based
SMS as the v1 auth mechanism (FR-132, ADR-025), the flag-don't-block spam-resistance layer
(FR-133, DES-099), and the ratification of the blockchain-as-audit-record stack (DES-097). It
also fixes both Low issues carried from the v2.2.0 c2 PASS.

The document is substantively well-executed: the 110 arithmetic is independently verified
correct (114 − 4 = 110 ✓), the H-01..H-16 sweep finds no stale references, RISK-35..39 are
complete with named owners and mitigations, the two c2 Lows are genuinely fixed, the T-06/T-07
tension table aligns with the decision record, gate dates are unchanged, and the effort-range
reasoning is honest. One material correctness defect prevents a PASS: RISK-32 (the auth-path
compromise risk, minted at v2.1.0) was not updated for the v2.3.0 auth-mechanism decision — it
still describes v1 as using "password, passkey, or OAuth" and cites "PKCE for OAuth" in its
mitigation, both of which are now factually wrong (v1 uses phone-based SMS per FR-132/ADR-025).

**Verdict: FAIL — 92%, 0C/0H/1M/1L.**
Route to project-manager for surgical rework of RISK-32.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (92%)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No (1 Medium)**
- **Verdict: `FAIL`**

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1 Outcome & problem clarity** | 20 | 93 | 18.60 | §1 outcome metrics unchanged. §3.5 v1 plan is coherent: phone-auth + spam-resistance add concrete scope. T-06/T-07 AWAITING items correctly disclosed. Effort range framed as honest first-principles estimate. AWAITING APPROVER CONFIRMATION items (v1 gate date, NFR-009 re-reading) properly flagged. Slight deduction: v1 launch target remains a date range, not a committed date. |
| **B2 Completeness** | 15 | 96 | 14.40 | All required sections present. §3.5.6 T-06/T-07 table is a well-placed new section. §13.1 review row accurately updated. RISK-35..39 all present with owners, mitigations, and triggers. DEP-11/DEP-12 entries complete (line 530–531). §11 re-plan log entry is detailed and accurate. Minor deduction: §13.1 Gate-1 packet still shows stale v1.0.0-era BR/FR/NFR counts (12/61/26, 42 Must) — pre-existing issue, accepted at v2.0.3 review; not re-flagged. |
| **B3 Traceability & IDs** | 20 | 97 | 19.40 | 110 arithmetic independently verified: Doc 02 v2.10.0 §11 Must = 114 ✓; FR-132 Must/IN-v1 ✓; FR-133 Must/IN-v1 ✓; FR-030/031/082/086 all in Must list ✓; 114 − 4 = 110 ✓. RISK-35..39 no ID collision (register ran to RISK-34) ✓. H-01..H-16 sweep: all references consistent (MS-V1-09, PR-7, RISK-31, RISK-33, §3.5.6, RISK-39 all cite H-16 or H-01..H-16) ✓. FR-003 reclassified as PARTIAL in Doc 02 v2.10.0 and reflected in §3.5.1 ("IN-v1 or PARTIAL") ✓. Slight deduction for RISK-32 ID integrity (description references wrong FR/mechanism). |
| **B4 Correctness & consistency** | 15 | 78 | 11.70 | Major deduction: ISS-01 (Medium) — RISK-32 describes the wrong auth mechanism ("password, passkey, or OAuth") and cites an inapplicable mitigation ("PKCE for OAuth"); v1 auth is phone SMS per Ruling 1/FR-132/ADR-025. All other correctness checks pass: T-06/T-07 align with decision record §5 ✓; PR-1/PR-6 extensions cover OTP, SIM-swap, and flag-don't-block invariant ✓; effort-range reasoning correct (phone auth was the blank placeholder, net neutral, vendor procurement lead time noted) ✓; gate dates unchanged ✓; H-register sweep clean ✓. |
| **B5 Testability** | 15 | 92 | 13.80 | v1 production-readiness bar PR-1..PR-10 provides clear, testable readiness conditions with named owners. PR-1 and PR-6 extensions provide concrete, observable test targets (OTP flow, SIM-swap scenarios, no-hard-block invariant, FR-132 caveat in notice). Effort range framed with explicit assumptions. AWAITING APPROVER CONFIRMATION items reduce certainty on gate timing. |
| **B6 Convention compliance** | 15 | 95 | 14.25 | ISS-02 (Low) — §2.1 "ADR-001…ADR-024" should now include ADR-025 (Accepted 2026-08-23; correctly listed in the source block at line 12 but omitted from the §2.1 design reference). ISO-8601 dates throughout ✓. Named owners on all new risks and dependencies ✓. Decision record sourced and cited correctly ✓. |
| **Total** | **100** | — | **91.75% ≈ 92%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | B4 | §6 RISK-32 (line 592) — description and mitigation columns | RISK-32 ("Credential / auth-path compromise in v1") was written at v2.1.0 when auth was generically "conventional auth." Its description states "v1 uses conventional authentication (password, passkey, or OAuth)" and its mitigation cites "PKCE for OAuth." Both are now factually incorrect: Ruling 1 (2026-08-23) decided v1 auth is phone-based SMS verification (FR-132, ADR-025). PKCE is an OAuth-specific mechanism that does not apply to SMS OTP auth. The description inaccurately characterises the v1 auth-path risk profile to anyone reading the risk register. Note: RISK-36 (newly minted) correctly covers SIM-swap specifically; but RISK-32 itself must be updated to describe the actual v1 auth mechanism. | Update RISK-32: (1) change the description from "password, passkey, or OAuth" to "phone-based SMS verification (FR-132, ADR-025)"; (2) update the mitigation to remove "PKCE for OAuth" and replace with SMS-specific hardening (OTP replay prevention, rate limiting on OTP requests, session expiry); (3) add a cross-reference to RISK-36 (SIM-swap) as the primary SMS-specific takeover vector; (4) update the "Carried by" column to include FR-132 and ADR-025. |
| ISS-02 | **Low** | B6 | §2.1 line 104 — "as designed in `ADR-001`…`ADR-024`" | The §2.1 scope paragraph cites "ADR-001…ADR-024" as the design basis for the full programme. ADR-025 (v1 identity: phone auth + spam-resistance layer) was Accepted 2026-08-23 and is correctly listed in the document source block (line 12: "ADR-001 … ADR-025"). The §2.1 reference is stale and no longer accurate now that ADR-025 is part of the approved design set. Low severity: the source block is correct; this is a cosmetic citation lag. | Update §2.1 to read "ADR-001…ADR-025". |

> ISS-01 (Medium) blocks the pass bar. ISS-02 (Low) does not.

---

## 5. Spot-checks passed (positive evidence)

| Item | Finding |
|------|---------|
| **110 arithmetic** — Doc 02 v2.10.0 §11 | Must = 114 ✓; FR-132 Must/IN-v1 ✓; FR-133 Must/IN-v1 ✓; FR-030/031/082/086 all Must ✓; 114 − 4 = 110 ✓. Arithmetic verified. |
| **H-01..H-16 sweep** — all references in Doc 13 | MS-V1-09 (line 369), PR-7 (line 442), RISK-31 (line 591), RISK-33 (line 593), §3.5.6 T-06 (H-15), §3.5.6 T-07 (H-16), RISK-39 (H-16) — all cite H-16 or H-01..H-16. No stale H-01..H-14 or H-01..H-06 references found. ✓ |
| **RISK-35..39 ID collision** | Register ran to RISK-34 at v2.2.0. RISK-35..39 are new at v2.3.0 ✓; no collision. Owners: RISK-35=Chen Wei, RISK-36=Rafael Duarte, RISK-37=Rafael Duarte, RISK-38=Marcus Adeyemi, RISK-39=Grace Mbeki. All five have mitigations and triggers. ✓ |
| **c2 Low ISS-01 fix (RISK-31/33 H-register)** | RISK-31 (line 591): "H-01..H-16" ✓. RISK-33 (line 593): "H-01..H-16" ✓. Fixed. |
| **c2 Low ISS-02 fix (RISK-22..30 bold-ID)** | RISK-22 through RISK-30 (lines 581–589): all plain IDs — no bold. Fixed. ✓ |
| **T-06/T-07 vs decision record §5** | §3.5.6 T-06: Charter Rule 1 vs phone-auth — "phone verification is a spam speed-bump only; FR-132 and H-15 state this explicitly" — consistent with decision record §5 T-06 wording ✓. §3.5.6 T-07: FR-003 vs phone-number storage — "PO reclassified FR-003 as PARTIAL in Doc 02 v2.10.0" — consistent with decision record §5 T-07 and Doc 02 v2.10.0 §16.3.1 FR-003 row ✓. Both statuses "AWAITING architect update + approver confirmation" ✓. |
| **Effort-range reasoning (§3.5.3)** | HOLDS at 5–9 months ✓. Reasoning: phone auth replaces the blank "conventional auth" placeholder — net neutral scope ✓. DEP-11/12 procurement (4–8 week lead time) correctly identified as new scheduling constraint ✓. DB vendor still open — acknowledged ✓. Range is honest, assumption-sourced, not a commitment ✓. Assumption (a) correctly says "Auth mechanism DECIDED... vendors open" ✓. |
| **Gate dates** | 2027-05-14 attaches to Definition B (§3.5.5 line 469) ✓; unchanged ✓. v1 gate date "NOT SET — AWAITING APPROVER CONFIRMATION" (§3.5.5 line 473) ✓. No silent change to either date. ✓ |
| **PR-1/PR-6 extensions** | PR-1 extended to cover: phone-auth OTP flow and session lifecycle; SIM-swap and number-recycling (RISK-36); spam-resistance false-positive path (FR-133 flag-don't-block invariant, RISK-37); vendor API security posture (DEP-12 — NFR-010 tension, RISK-38) ✓. PR-6 extended to cover: FR-131 one-account-per-phone caveat (FR-132); no "one-person-one-vote" claim in any product material; no hard-block on a fraud flag (FR-133) ✓. |
| **§13.1 review-status row** | Shows: Doc 02 v2.10.0 PASS 100% ✓; Doc 13 v2.2.0 PASS 95% (Approved, two Lows carried) ✓; Doc 13 v2.3.0 In Review cycle 1 pending ✓. Accurate. |
| **§11 re-plan log v2.3.0 entry** | Present, detailed, and accurately describes all changes made in v2.3.0. Cites the correct decision record and upstream Approved versions (Doc 02 v2.10.0, Doc 03 v2.4.1). ✓ |

---

## 6. Routing instruction

**FAIL — route to owning role: project-manager (Ana-Maria Petrescu).**

Rework required to produce **v2.4.0** (at minimum a minor bump for the Medium issue), Status: In Review.

**Mandatory fix (ISS-01 Medium):** Update RISK-32 in §6 to reflect v1 auth = phone-based SMS (FR-132, ADR-025): correct the description from "password, passkey, or OAuth" to "phone-based SMS verification"; remove "PKCE for OAuth" from the mitigation and replace with SMS-specific hardening; add a cross-reference to RISK-36; update the Carried-by column to include FR-132 and ADR-025.

**Recommended fix (ISS-02 Low):** Update §2.1 "ADR-001…ADR-024" → "ADR-001…ADR-025".

After rework, set `Status: In Review` on v2.4.0. PM to schedule cycle-2 neutral reviewer.

---

_Report produced: 2026-08-23. Reviewer: sre (neutral; PM-assigned). Document owner: project-manager._
