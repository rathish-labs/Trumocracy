# Document Review Report — Doc 03 Architecture & Design (SDD) v2.7.1

> Produced by the **document-review** skill (shared capability — not a ninth agent).
> Reviewer: neutral role (not the architect, who owns Doc 03).
> This reviewer scored and listed issues only — it did not edit the reviewed document.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.7.1
Review mode: technical
Reviewer role: document-reviewer (neutral — not the architect)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 03 v2.7.1 fully addresses all three cycle-1 issues from the v2.7.0 FAIL (91%, 0C/0H/1M/2L). ISS-01 (Medium) is resolved: the `anon`-state copy analysis now states the interpretive basis explicitly, acknowledges the v1 DB-linkage truth in plain language (phone_hash, KMS-pepper derivability, TRAI SIM-registration chain, subpoena path), and closes the DES-098 scope gap normatively via clause 8 — a MUST-keyed obligation for a data-practices disclosure adjacent to the `anon` pill in every non-vote context (screens 1.2, 1.6, 2.3), with a named owner and concrete implementation trigger. ISS-02 (Low) is resolved: clause 7 carries an explicit proxy annotation for `getProperties().unlinkable` as a design-review invariant for future backings. ISS-03 (Low) is resolved: the three-state table has a prominent normative header note redirecting engineers to clause 7 and the backing-aware sub-table. All cycle-1 verified items (v1 ver subtitle, clause 7 fail-honest default, ISS-A age_verified correction, ISS-B §1.1 SRS pin) are confirmed intact and undisturbed. Citations in clause 8 verified against source documents: ADR-025 §(c-ii), H-16, H-18, and T-01/T-02 all exist and say what is claimed. One new LOW issue is identified: clause 8's "component or its host screen" phrasing distributes the disclosure obligation ambiguously across the component and every future host screen, creating a fragmentation risk. This is a robustness concern, not a normative gap. The document **PASSES**.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`97%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — score meets threshold and zero critical/high/medium issues.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | FR-131 traces updated in DES-094 element table. Clause 8 cites FR-131, ADR-025 §(c-ii), Doc 02 H-16, H-18, T-01 — all verified against source documents. §15 v2.7.1 amendment row present with correct requirement and DES references. ISS-A/ISS-B carry-forward traces intact. |
| T2 Internal correctness | 20 | 95 | 19.0 | Clause 7 trigger (getProperties().unlinkable) consistent with DES-095 backing declarations. Clause 8 orthogonal to clause 7 and the table note (which governs `ver` subtitle; clause 8 governs `anon` disclosure). No contradiction between any of the three normalised bodies. One LOW discoverability/robustness concern around "component or its host screen" ambiguity (ISS-NEW-01). |
| T3 Honesty / accuracy of claims | 25 | 97 | 24.25 | Interpretive basis stated explicitly and plainly. The v1 truth (DB association, phone_hash, KMS-pepper derivability, operator access, TRAI chain) is stated without euphemism. DES-098 scope gap acknowledged and addressed normatively — not deferred. Rendering scope (authenticated open-tier, phone-verified, not government-ID-verified) stated. All citations verified. `anon` subtitle defensible under the stated framework and adjacent clause-8 disclosure. |
| T4 Traceability | 15 | 97 | 14.55 | §15 has a correct v2.7.1 DES-094 amendment row. No IDs renumbered or deleted. Annotate-don't-delete convention followed (v2 subtitle preserved in three-state table with annotation). §15 v2.7.0 row also preserved. |
| T5 Completeness | 10 | 97 | 9.7 | All three cycle-1 ISS items addressed. User class stated. Clause 8 complete: content requirements (three mandatory disclosure items), mechanism (adjacent affordance), owner (engineer, enrolment sprint), trigger (before non-vote anon screen ships), cites. ISS-A/ISS-B carry-forwards verified intact. |
| T6 Format / style | 10 | 97 | 9.7 | RFC 2119 (MUST / MUST NOT) used correctly throughout clauses 7 and 8. Version 2.7.1 / Status: In Review / Last updated: 2026-08-25. Change block describes all three ISS fixes accurately. No new IDs minted (correct — no new DES or ADR required for this rework). |
| **Total** | **100** | — | **96.6% → 97%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-NEW-01 | **Low** | T2 | §10.12.3, clause 8 — implementation assignment | Clause 8 states the data-practices disclosure obligation falls on "the component or its host screen." This dual-track phrasing distributes responsibility across two implementation surfaces without a definitive assignment. In practice: if the obligation lives in the host screen, every new screen that renders the `anon` pill in a non-vote context requires its author to know about and independently implement clause 8. A developer building a new screen from scratch, reading the PrivacyStatus component docs in isolation, could miss the obligation entirely. A component-level implementation (where `PrivacyStatus.tsx` itself renders or injects the disclosure affordance whenever `state === "anon"` and `context !== "vote"`) is more robust — it enforces the obligation automatically for any screen that uses the component, without requiring each host-screen author to read clause 8 separately. The minimum mechanism ("'?' or 'Learn more' affordance adjacent to the pill") is itself stated at the component-render level, which implies component ownership. The "or its host screen" safety valve is useful for edge cases but could be read as the primary implementation path. | Add a clarifying sentence to clause 8 preferring component-level implementation: "Preferred implementation: the `PrivacyStatus` component itself renders the disclosure affordance when state is `anon` and the rendering context is non-vote, so that any host screen automatically satisfies this obligation. Host-screen implementation is permitted only where the component-level mechanism is technically impractical for a specific surface, and must be documented in the engineer's implementation note." This does not require a new clause or DES — it is a clarifying addition to clause 8's implementation guidance. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

---

## 5. Per-issue closure confirmation (cycle-1 items)

### ISS-01 (Medium) — RESOLVED

**Claim:** `anon`-state copy analysis fully reworked per cycle-1 required fix.

**Verification against each required element:**

1. **Interpretive basis stated explicitly?** YES. The text says directly: "This claim is sustained only in the sense of 'publicly linked to your real-world self through any published record.' It does NOT mean 'unreadable by the operator.'" This is the first sentence of the interpretive-basis paragraph — not buried, not implied.

2. **v1 truth stated plainly (DB association, phone_hash, KMS-pepper derivability, TRAI chain)?** YES.
   - DB association: "an authenticated open-tier user's platform actions — party joins, endorsements, and browsing-event records captured by the indexer — ARE associated with their DB account."
   - phone_hash: "The `phone_hash` (HMAC-SHA-256/KMS-pepper of the verified phone number; Doc 02 H-16) is held in the operator's restricted-class credential store."
   - KMS-pepper derivability: "An operator holding the KMS pepper CAN derive the original phone number from `phone_hash`."
   - subject_id_hash (H-18): "If a government-ID verification has been completed, `subject_id_hash` (HMAC-SHA-256/KMS-pepper of the document subject ID; Doc 02 H-18) is also retained."
   - TRAI chain: "In the India pilot: the TRAI SIM-registration mandate requires SIM cards to be registered to a named real person (ADR-025, 'Why phone over email'). This makes the chain `platform account → phone_hash → phone number → TRAI-registered real-world identity` a concrete, subpoena-accessible path to a real-world person."
   - None of this is euphemized. The v1 posture is stated as "disclosed v1 posture accepted under the deferred-with-disclosure model."

3. **DES-098 scope gap acknowledged and RESOLVED normatively (clause 8)?** YES.
   - Gap acknowledged: "DES-098 (the FR-131 honesty notice) applies at vote-casting time (SCR-13/14 — ballot booth and vote-confirmation screen only). The `anon` pill renders on browsing (screen 1.2), party-joining (screen 1.6), and endorsing (screen 2.3) with no equivalent contextual disclosure..."
   - Resolved normatively: Clause 8 added to the normative binding list with MUST-keyed language. Not recorded as design debt — recorded as a binding implementation obligation.
   - Rationale for option (a) over (b) stated: "recording the gap as named debt with a milestone would allow the component to ship in the enrolment sprint without any disclosure mechanism in browsing, joining, and endorsing contexts — exactly the contexts where the `anon` pill appears with no other disclosure currently present."

4. **Rendering scope stated (authenticated open-tier users)?** YES. "The `anon` state renders for **authenticated open-tier users** — phone-verified accounts that have NOT completed government-ID verification and therefore do not hold COUNTING-tier eligibility." This is the first paragraph of the reworked analysis, before the interpretive basis.

5. **Clause 8 RFC 2119 correct?** YES. MUST used throughout clause 8 for obligations. No incorrect use of SHOULD where MUST is warranted.

6. **Owner named?** YES. "Owner: engineer (enrolment sprint)."

7. **Trigger named?** YES. "MUST be implemented before any screen rendering the `anon` pill in a non-vote context is shipped to production."

8. **Citations verified:**
   - FR-131: Exists in Doc 02 (minted v2.6.0; v1 honesty notice MUST) ✓
   - ADR-025 §(c-ii): Exists in `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md`, heading "Phone numbers at rest: identity data in v1, eliminated in v2 (FR-003 PARTIAL, T-07)" ✓
   - Doc 02 H-16: Exists; references phone_hash as derived identity data held in operator DB ✓
   - Doc 02 H-18: Exists; references subject_id_hash retained as derived identifier ✓
   - T-01: Exists in §10.13.7 — "CONFIRMED 2026-08-23 — v1 accepted as a disclosed non-anonymous product" ✓
   - TRAI point: Exists at ADR-025 "Why phone over email" — "Obtaining a genuine SIM-card phone number requires a name-registered SIM (TRAI mandate, India)" ✓

**ISS-01 closure: CONFIRMED.**

---

### ISS-02 (Low) — RESOLVED

**Claim:** Clause 7 annotated with proxy semantics as a design-review invariant for future backings.

**Verification:** Clause 7 ends with an explicit annotation tagged "(v2.7.1 — ISS-02 annotation)":

> "The `unlinkable` property is a **proxy** for the full 'no identity at rest' guarantee, not an independent test. Any future backing declaring `unlinkable: true` MUST satisfy the same guarantee by design review before the v2 subtitle may render behind it. This is a design-review invariant for future backing registrations."

- "proxy" named: YES ✓
- Normative for future backings: YES — "MUST satisfy the same guarantee by design review" ✓
- Framing as design-review invariant: YES ✓

**ISS-02 closure: CONFIRMED.**

---

### ISS-03 (Low) — RESOLVED

**Claim:** Prominent normative note added at three-state table header redirecting engineers to clause 7 and the backing-aware sub-table.

**Verification:** The note appears immediately before the three-state table, tagged "Normative note (v2.7.1 — ISS-03)":

> "The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference subtitle annotated '(v2 ZK backing only — see backing-aware copy below).' **Clause 7 in the normative binding list below and the backing-aware sub-table are the normative implementation spec for the `ver` subtitle.** The v1 default `ver` subtitle ('Your vote counts. How you voted is never made public.') does not appear in this table — it appears in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clause 7 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 subtitle, which clause 7 expressly prohibits."

- Note present: YES ✓
- Note accurate (clause 7 + backing-aware sub-table are normative): YES ✓
- v1 default subtitle named explicitly in the note: YES ✓
- `ver` row carries "(v2 ZK backing only — see backing-aware copy below)" annotation: YES ✓

**ISS-03 closure: CONFIRMED.**

---

### Cycle-1 verified items (ISS-A, ISS-B, v1 ver subtitle, clause 7 fail-honest default) — INTACT

| Item | Status |
|------|--------|
| v1 ver subtitle ("Your vote counts. How you voted is never made public.") — clause 7 fail-honest default | Intact and normative. Clause 7 states: "MUST render in all other cases — including when `getProperties()` returns `unlinkable = false`, when the call fails, or when backing information is absent. **Absence of backing information MUST fall back to the v1 (weaker-claim) subtitle — the fail-honest default; the v2 subtitle MUST never be assumed.**" Undisturbed by v2.7.1 rework. ✓ |
| ISS-A: ADR-025 §(e) Q-1 age_verified "at COUNTING-tier government-ID verification" | Verified at §10.13.9 DES-100 allowlist row: "Confirms ≥ 18 at COUNTING-tier government-ID verification." Undisturbed. ✓ |
| ISS-B: §1.1 SRS v2.13.0 pin | Verified at §1.1 body prose: "The SRS v2.13.0 defines 21 `BR`, 133 `FR`..." Undisturbed. ✓ |
| v2.7.0 §15 DES-094 amendment row | Present and intact at §15 "v2.7.0 DES-094 backing-aware copy amendment" block. ✓ |
| Three-state table old subtitle annotation "(v2 ZK backing only — see backing-aware copy below)" | Present in `ver` row subtitle column. ✓ |
| Backing-aware sub-table with both v1 and v2 rows | Present and unchanged. ✓ |

---

## 6. Independent judgment — retained anon subtitle

**Question:** With clause 8 added and the interpretive basis stated, is "Nothing you do here is linked to you" now defensible, or still a stretch?

**Assessment: DEFENSIBLE — substantially improved over v2.7.0.**

In v2.7.0, the claim was a stretch for three reasons: (1) the interpretive basis was not stated; (2) the DES-098 scope gap left non-vote contexts without any disclosure mechanism; (3) the user class for whom the claim was most consequential was not identified. All three are now addressed.

The subtitle is truthful under the "publicly linked through any published record" reading: FR-124(b) enforces aggregate-only publication, so no action of an `anon`-state user is ever published linked to any individual identity in either v1 or v2. The phrase "linked to you" — understood as "publicly linked to your real-world self" — is accurate as a statement about published records.

The operator-side linkage is real in v1, but this is now handled by the mandatory adjacent disclosure in clause 8, which requires a "?" or "Learn more" affordance that explicitly informs the user (in plain language, Grade-8 level) of: (i) the hashed account identifier associated with their phone number; (ii) their open-tier actions being associated with that account in the platform DB; and (iii) the account's subjection to legal compulsion in the jurisdiction of operation. This is not deferred design debt — it is a normative MUST with a named owner and a trigger that blocks production shipping until it is implemented.

**One residual acknowledged:** The disclosure reaches only users who engage the affordance. A user who sees "Nothing you do here is linked to you" and does not click "?" could still form a false impression. This is the same residual that applies to DES-098's pre-vote honesty notice — a user who doesn't read it could be misled. The architecture consistently applies disclosure-adjacent-to-claim as the mitigation mechanism, and this document applies the same standard here. It is an architectural design choice, not an unmitigated gap.

**Reconsideration trigger is recorded:** "if a future honesty review or user-research finding establishes that 'publicly linked' is not the reading a reasonable user in the India pilot context applies to the claim, a subtitle variant MUST be considered before that deployment." This is the appropriate governance mechanism for a decision where the right reading depends on user context and research.

**My call: The retained subtitle is now adequate.** It was not adequate in v2.7.0. The combined effect of (1) an explicit interpretive basis, (2) a normative adjacent disclosure obligation, and (3) a recorded reconsideration trigger brings it within the honesty standard this project applies. The disclosure mechanism must be implemented as specified in clause 8 before the component ships to any non-vote context — if it is not, the subtitle reverts to being a stretch.

---

## 7. Rework-introduced defects check

| Check | Status |
|-------|--------|
| Clause numbering coherent (1–8 in sequence) | PASS ✓ — clauses 1–7 from v2.7.0 + clause 8 from v2.7.1 form a coherent numbered list |
| No contradiction: clause 7 ↔ clause 8 | PASS ✓ — clause 7 governs `ver` subtitle selection; clause 8 governs `anon` pill disclosure in non-vote contexts; orthogonal obligations, no overlap |
| No contradiction: clause 8 ↔ normative note at three-state table | PASS ✓ — table note governs `ver` subtitle (clause 7 + backing-aware sub-table); clause 8 governs `anon` behaviour; the note does not claim exclusivity over all normative content |
| Header/Change block accurate for v2.7.1 | PASS ✓ — Change block correctly identifies all three ISS items and their resolution; correct cycle-1 review artifact cited |
| §15 v2.7.1 amendment row | PASS ✓ — row present; requirement and DES entries correct; notes accurately describe rework scope |
| Version / Status / Date | PASS ✓ — 2.7.1 / In Review / 2026-08-25 |
| Annotate-don't-delete convention | PASS ✓ — v2 subtitle preserved in three-state table with annotation; v2.7.0 §15 row preserved |
| No ID renumbering | PASS ✓ — no DES or ADR renumbered or deleted |
| No new DES or ADR minted (correct — rework is copy/analysis correction, not new design) | PASS ✓ — §15 notes confirm no new DES or ADR minted |

---

## 8. Routing instruction

**PASS.** The architect (Ravi Deshmukh — Doc 03 owner) MUST set `Status: Approved` in the document header.

One LOW issue (ISS-NEW-01) is present and does not block the pass bar. The owning architect is encouraged to address it in the next increment: adding a preference for component-level implementation of the clause 8 disclosure obligation. It does not require a new version before the SOP advances.

The SOP advances. The document-review loop for Doc 03 v2.7.1 is complete.
