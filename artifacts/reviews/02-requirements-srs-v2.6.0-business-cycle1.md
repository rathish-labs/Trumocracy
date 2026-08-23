# Document Review Report — 02-requirements-srs.md v2.6.0 · Business · Cycle 1

> Reviewer: **technical-writer** (neutral — not the document owner; product-owner owns Doc 02).
> Independence maintained: scorer ≠ author; no edits made to the reviewed document.
> Scope note: this is the Cycle 1 business-mode review of v2.6.0, which also covers the
> v2.5.0-added content (FR-130, §4.44, its §8 Gherkin, §11/§12 updates) as that version
> was superseded without its own review. The v2.6.0 increment added §16 (delivery-phasing
> classification for all 131 FRs and 28 NFRs, honesty register H-01..H-06, 16-item
> contradiction surface), FR-131 (v1 honesty notice, §4.45, Must, Nadia Hassan, DES-098),
> and a CON-007 budget-parenthetical correction. All changed and catch-up areas reviewed
> in full; remainder of document spot-checked against prior PASS verdicts.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.6.0
Review mode: business
Reviewer role: technical-writer (neutral — not the document owner)
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Cycle-1 business review of `docs/02-requirements-srs.md` v2.6.0, covering the §16
delivery-phasing section (the primary increment), FR-131 (v1 honesty notice), CON-007
budget correction, and the v2.5.0 FR-130 catch-up content. The document is substantively
strong: §16's classification table covers all 131 FRs and 28 NFRs with correct tallies
(IN-v1 106/PARTIAL 19/DEFERRED-v2 4/SUPERSEDED 2; NFR IN-v1 24/PARTIAL 3/DEFERRED-v2 1);
classifications spot-checked are defensible; the honesty register (H-01..H-06) surfaces
the most material v1 limitations plainly; the 16-item contradiction surface is not
silently reconciled; FR-130 and FR-131 are normatively correct, fully Gherkin-tested,
and correctly traced; CON-007 figures (≈ USD 4.03M, ≈ USD 175K) are verified against
`DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2`.

**Verdict: FAIL.** One Medium issue blocks the pass bar: the primary decision record
cited for the entire §16 section and for FR-131 — `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md`
— does not exist in the repository. This leaves §16's normative authority resting on a
dangling reference, inconsistent with the artifact-bus rule and with the standard set by
all other rulings in this document (each of which has a backing artifact on file). One
Low issue: six H=Y-flagged FRs (FR-002, FR-034, FR-048, FR-059, FR-103, FR-124) have
no explicit honesty-register entry in §16.4, creating a gap between the H? column
semantics and the register coverage.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1 Medium)
- **Verdict:** `FAIL` — score below threshold and 1 Medium issue open.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | §16.1 v1/v2 definitions are precise; classification test is normative and machine-applicable; contradiction surface is explicit; honesty register names the gaps plainly; FR-131 outcome anchored to voter informed consent |
| B2 Completeness | 15 | 87 | 13.05 | §16 tables cover all 131 FRs and 28 NFRs; §4.44/§4.45 fully populated; §8 Gherkin complete; §11/§12/§13 updated; CON-007 corrected. Deduction: six H=Y FRs (FR-002, FR-034, FR-048, FR-059, FR-103, FR-124) have no §16.4 register entry (ISS-02). |
| B3 Traceability & IDs | 20 | 88 | 17.60 | FR-130 and FR-131 IDs correctly sequenced; §11 Must count 112 verified; §12 BR traces (FR-130 → BR-002/BR-012; FR-131 → BR-005/BR-009) correct; classification tallies correct; no ID reuse. Deduction: primary source artifact for §16 and FR-131 (DECISIONS-2026-08-23-V1-V2-SPLIT.md) missing from repository (ISS-01). |
| B4 Correctness & consistency | 15 | 96 | 14.40 | CON-007 figures (≈ USD 4.03M L2 basis, ≈ USD 175K contingency, USD 4.2M appetite) verified against ruling document; classification tally arithmetic verified (106+19+4+2=131; 24+3+1=28); §11 count arithmetic verified; Doc 03 pre-allocation error (DES-098 cited as FR-130 in Doc 03 §12) correctly flagged as a Doc 03 cascade annotation owed — not a Doc 02 deficiency; FR-131 IN-v1 classification correct (UI disclosure, no ZK required). |
| B5 Testability | 15 | 97 | 14.55 | FR-130: 3 Gherkin scenarios — cap enforcement at 101st join (falsifiable), automatic lift on verified registration (falsifiable), no-override-path (falsifiable). FR-131: 4 scenarios — SCR-13 non-dismissable notice, SCR-14 post-vote notice, no-false-claims across all surfaces, absence test covering every ballot submission code path. All scenarios mechanically testable. |
| B6 Convention compliance | 15 | 97 | 14.55 | Header: Version 2.6.0 ✓; Status: In Review ✓; Last updated: 2026-08-23 ✓; Owner: Priya Raghunathan ✓; changelog newest-first ✓; FR-130 owner Sofia Marchetti ✓; FR-131 owner Nadia Hassan ✓; RFC 2119 MUST/MUST NOT correctly used throughout §16; ISO-8601 dates ✓; Gherkin format correct. |
| **Total** | **100** | — | **94%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | B3 Traceability & IDs | §16.1 Source block; §4.45 FR-131 rationale; §12 v2.6.0 trace note | `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` is cited as the decision record and primary authority for the entire §16 section and for FR-131. The file does not exist in the repository (confirmed by filesystem search). The document acknowledges it was "being written by the project-manager this session" but it was never created. All other major rulings in this document (OI-19/OI-20 → DECISIONS-2026-08-20-OI19-OI20.md ✓; C-01/C-02 → DECISIONS-2026-08-22-WIREFRAME-C01-C02.md ✓; budget ruling → DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md ✓; pilot → DECISIONS-2026-08-20-PILOT-VERIFICATION.md ✓) have backing artifacts on file. The artifact-bus rule states "if it isn't written down, it doesn't exist." §16 and FR-131 are the largest normative additions in this version; their authority rests on a dangling reference. | PM must create `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` recording the approver's v1/v2 delivery-split directive. Until the artifact exists, the product-owner should update §16.1 to reference the actual basis for the decision (e.g., a session note or interim record) and revise FR-131's rationale block to cite whatever artifact IS on file as the interim bridge. The rework must produce v2.7.0. |
| ISS-02 | **Low** | B2 Completeness | §16.3.1 classification table (H? column); §16.4 honesty register | Six FRs are marked H? = Y in §16.3.1 — meaning "a v1 user might assume the v2 guarantee; the absence MUST be disclosed" — but have no corresponding entry in the §16.4 honesty register: **FR-002** (cross-scope unlinkability NOT prevented in v1), **FR-034** (interim-tally protection policy-only in v1; operator sees ballot DB), **FR-048** (office-holder vote separation: DB-separated but not ZK-separated), **FR-059** (recovery reveals nothing: policy constraint in v1 only), **FR-103** (conduct votes: API-private but DB operator can see individual votes), **FR-124** (verified status: API-private but DB operator can see it). H-01 ("votes are secret ballots") and H-02 ("party membership is anonymous") serve as umbrella entries that partially cover these sub-properties, but a README author using §16.4 as the disclosure checklist would not know to call out these specific guarantees explicitly. The H? = Y flag implies an affirmative disclosure obligation. | Either (a) add §16.4 entries H-07..H-12 for the six unlisted H=Y items, or (b) add an explicit note in §16.4 stating that H-01 and H-02 serve as umbrella entries covering FR-002, FR-034, FR-048, FR-059, FR-103, FR-124 as sub-properties — with each sub-item listed under its umbrella entry so a README author can find them. Option (b) is lower-effort and still satisfies the disclosure obligation. |

> **Low** issues do not block the pass bar. **Medium** forces a FAIL.

---

## 5. Critical-scope checks

| # | Check | Status | Evidence |
|---|-------|--------|----------|
| C-1 | §16 classification table covers all FR-001..FR-131 with no gaps | CONFIRMED | All 131 FRs classified. Verified row-by-row; tally: IN-v1 106 + PARTIAL 19 + DEFERRED-v2 4 + SUPERSEDED 2 = 131. |
| C-2 | §16 NFR classification covers all NFR-001..NFR-028 with no gaps | CONFIRMED | All 28 NFRs classified. Tally: IN-v1 24 + PARTIAL 3 + DEFERRED-v2 1 = 28. |
| C-3 | DEFERRED-v2 rows tested against classification test ("exists ONLY to provide anonymity/coercion-resistance/hostile-state safety") | CONFIRMED | FR-030 (ballot unlinkability), FR-031 (receipt-freeness), FR-082 (Supporter unconditional anonymity), FR-086 (prior Supporter-period activity permanently anonymous): all exist solely for anonymity or coercion-resistance. NFR-003 (coercion resistance): exists solely for coercion-resistance. Classifications defensible. |
| C-4 | PARTIAL rows given meaningful v1 form and v2 form | CONFIRMED | Spot-checked FR-001, FR-002, FR-021, FR-032, FR-033, FR-063, FR-069, FR-071, FR-103, FR-114, FR-123, FR-124, FR-126, FR-127, FR-128, NFR-001, NFR-002, NFR-024: all have specific v1 forms that describe conventional enforcement. v2 forms name the ZK/MACI mechanism that provides the full guarantee. |
| C-5 | No IN-v1 rows misclassified (cannot be satisfied without ZK) | CONFIRMED | Spot-checked FR-004, FR-026, FR-054, FR-111, FR-118. FR-004 is IN-v1 with the OI-20 ruling correctly applied (plural adapter interface satisfied at architecture level; Phase-1 single-rail limitation dated). FR-054 (publicly verifiable record) is IN-v1 because hash publication to audit contract satisfies the requirement; FR-033 (PARTIAL) correctly captures the weakened verification guarantee. |
| C-6 | FR-082 DEFERRED-v2 classification is consistent with §16.5 contradiction surface row for FR-082 | CONFIRMED | §16.3.1 FR-082: DEFERRED-v2; v1 note "FR-082 cannot be technically satisfied in v1 where DB holds member↔party mapping." §16.5 rows 8 and 15 surface this as AWAITING APPROVER CONFIRMATION from both the requirement-conflict and Charter-tension (T-03) angles. Consistent. |
| C-7 | §16.5 contradiction surface: 16 items, all AWAITING APPROVER CONFIRMATION, none silently reconciled | CONFIRMED | 16 table rows confirmed: BR-009, BR-011, NFR-001, NFR-002, NFR-003, FR-030, FR-031, FR-082, FR-128 (first instance), Doc 01 §C kill criteria, Doc 13 §3.1 argument, Charter Rule 6 (T-01), Charter Rule 3 (T-05), FR-128 subpoena test (T-02), BR-009/FR-082 (T-03), NFR-003 Guarded Layer (T-04). All marked AWAITING APPROVER CONFIRMATION. None reconciled. |
| C-8 | §11 Must count arithmetic: 111 → 112 with FR-131 | CONFIRMED | Must FR list manually counted: 112 FRs listed (FR-001..FR-004, FR-006..FR-011, FR-014, FR-016, FR-018, FR-020..FR-028, FR-030..FR-033, FR-035..FR-037, FR-039..FR-040, FR-042..FR-043, FR-045, FR-047, FR-050..FR-051, FR-054, FR-056, FR-058..FR-061, FR-063..FR-131 active Musts). FR-131 present in list. Superseded FRs (FR-046, FR-062) correctly absent from Must list. |
| C-9 | CON-007 budget figures verified | CONFIRMED | CON-007 reads "accepted budget ≈ USD 4.03M on the accepted L2 basis." DECISIONS-2026-08-21-BUDGET-APPETITE-AND-RISK014.md §3.2: corrected L2 cost = USD 4,025,000 ≈ USD 4.03M ✓. Contingency ≈ USD 175K matches ruling §3.2 line "≈ USD 175,000" ✓. Appetite USD 4.2M unchanged ✓. Stale figure "~USD 4.13M" correctly removed. |
| C-10 | FR-130 normative text and Gherkin (v2.5.0 catch-up) | CONFIRMED | Normative text: cap at 100 members for provisional party (post-activation per FR-018, pre-legal-registration per FR-075); automatic code-lift on verified registration; no operator or manual lift path. 3 Gherkin scenarios test: (1) 101st join refused with reason; (2) cap lifts automatically on verified registration; (3) no operator lift path. BR traces: BR-002, BR-012 (verified against DECISIONS-2026-08-22-WIREFRAME-C01-C02.md §3.C-02 table). Owner: Sofia Marchetti ✓. |
| C-11 | FR-131 normative text fully binds at every vote-cast surface | CONFIRMED | FR-131: "Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice… before the ballot is confirmed." Scope is universal ("wherever"). Gherkin Scenario 4 (absence test) confirms "every ballot submission code path requires prior notice acknowledgement." Named surfaces SCR-13 (ballot booth) and SCR-14 (post-vote confirmation) are explicitly required. FR-131 also binds materials scope: "MUST NOT use the words 'private', 'anonymous', 'receipt-free', or 'secure' to describe v1 voting behaviour." |
| C-12 | FR-131 BR trace rationale is present and well-argued | CONFIRMED | Rationale block at §4.45 (after the table row): BR-005 connection — platform honesty about voting mechanism properties is the complement of verifiability; BR-009 connection — informed disclosure enables members to make an informed decision about their exposure in v1. Both traces grounded in the BRs' normative text. |
| C-13 | DECISIONS-2026-08-23-V1-V2-SPLIT.md exists in repository | FAILED | File not found. Cited in §16.1 source block, FR-131 rationale, §12 v2.6.0 trace. Recorded as "being written by the project-manager this session" in the source block — but never created. This is ISS-01 (Medium). |
| C-14 | §16.4 honesty register: all H=Y-flagged FRs have an entry | PARTIAL | H-01..H-06 cover 6 major categories. Of 12 H=Y FRs in §16.3.1, 6 have explicit or clear register mappings (FR-030→H-01, FR-031→H-01/H-03, FR-032→H-03, FR-063→H-01, FR-082→H-02, FR-086→H-02, FR-128→H-04, NFR-001→H-02, NFR-002→H-06, NFR-003→H-03). Six H=Y FRs (FR-002, FR-034, FR-048, FR-059, FR-103, FR-124) have no direct or umbrella register entry. This is ISS-02 (Low). |

---

## 6. Classification spot-checks

| FR | Classified | Defensible? | Notes |
|----|-----------|-------------|-------|
| FR-001 | PARTIAL | Yes | v1: conventional identity check + DB duplicate prevention; v2: ZK nullifier; the H?=N is debatable (many users won't know about ZK nullifiers) but within editorial latitude |
| FR-032 | PARTIAL, H=Y | Yes | v1 last-ballot-counts (DB overwrite, visible in logs) vs v2 MACI indistinguishable re-vote; PARTIAL correct; H=Y correct |
| FR-063 | PARTIAL, H=Y | Yes | API never exposes direction but DB operator can see it; v2 MACI makes direction technically unavailable to any actor; PARTIAL + H=Y correct |
| FR-082 | DEFERRED-v2, H=Y | Yes | Exists solely for unconditional Supporter anonymity; technically unachievable with a DB holding member↔party mapping; DEFERRED-v2 correct |
| FR-128 | PARTIAL, H=Y | Yes | "No stored identity documents" holds in v1; "technically unable to comply with subpoena" does not; PARTIAL correctly distinguishes the satisfied part |
| FR-004 | IN-v1 | Yes | Plural adapter interface satisfied at architecture level per OI-20 ruling; Phase-1 single-rail limitation is a dated deployment constraint, not a requirement-level gap; IN-v1 correct |
| FR-131 | IN-v1 | Yes | FR-131 is a UI disclosure requirement; purely deliverable without ZK; correctly treated as v1-only (v2 form: "—"; v2 replaces via actual cryptographic guarantees) |
| FR-130 | IN-v1 | Yes | Code-enforced membership cap; no ZK required; same guarantee in v2; IN-v1 correct |
| NFR-003 | DEFERRED-v2, H=Y | Yes | PPT security parameter λ≥128 bits receipt-freeness requires MACI; technically unachievable in v1; correctly DEFERRED-v2 |
| NFR-001 | PARTIAL, H=Y | Yes | API-level policy in v1 (does not expose); ε-advantage guarantee NOT met; PARTIAL correct |

---

## 7. Routing instruction

**Verdict: FAIL.** Route to the **product-owner** (Priya Raghunathan) for rework.

**Required before re-review:**

1. **(Medium — ISS-01, blocking)** Coordinate with the project-manager to create `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md`. Until that artifact is created, update §16.1 Source block and the FR-131 rationale / §12 note to replace the dangling reference with whatever bridging artifact IS on file (e.g., the product-owner session memory note `artifacts/product-owner-2026-08-23T0900.md` which documents the directive). The rework version MUST bump `Version:` to at least **v2.7.0** and set `Status: In Review`.

2. **(Low — ISS-02, non-blocking)** Either add register entries H-07..H-12 in §16.4 for FR-002, FR-034, FR-048, FR-059, FR-103, FR-124, OR add an explicit cross-reference note under H-01 and H-02 listing these FR IDs as sub-properties covered by the respective umbrella entry. A patch bump (v2.7.0) covers both fixes.

After the rework, this loop runs a Cycle 2 review against the new version.
