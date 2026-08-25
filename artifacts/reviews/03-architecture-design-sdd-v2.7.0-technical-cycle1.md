# Document Review Report — Doc 03 Architecture & Design (SDD) v2.7.0

> Produced by the **document-review** skill (shared capability — not a ninth agent).
> Reviewer: neutral role (not the architect, who owns Doc 03).
> This reviewer scored and listed issues only — it did not edit the reviewed document.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK ── -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.7.0
Review mode: technical
Reviewer role: document-reviewer (neutral — not the architect)
Score: 91%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 03 v2.7.0 delivers the DES-094 backing-aware copy amendment (clause 7, `ver`-state subtitle selection keyed to `IEligibilityVerifier.getProperties().unlinkable`), a recorded FR-131 banned-words analysis, `anon`/`pub` state analysis, the ISS-B source-pin correction (§1.1: SRS v2.12.0 → v2.13.0), and the ISS-A fix to ADR-025 §(e) Q-1 (`age_verified` purpose clarification). The increment is mechanically sound: clause 7's MUST-keyed trigger, fail-honest default, and FR-131/H-15/H-16/T-01/T-02 citations are all present and internally consistent. All three carried-debt fixes are confirmed applied. The document FAILS on one MEDIUM issue: the `anon`-state copy analysis that concludes "no v1 variant needed" for "Nothing you do here is linked to you" rests on a narrow, unstated interpretation of "publicly linked" that does not hold under internal operator access — and the analysis does not acknowledge that DES-098's disclosure (the mitigating mechanism cited) applies only at vote-casting time (SCR-13/14), leaving non-vote contexts (browsing, endorsing, joining) without an equivalent contextual disclosure at the point the `anon` pill is displayed. This session exists because a similar honesty stretch shipped once already; the same standard must apply here.

---

## 2. Pass-bar check

- Score ≥ 95%? **No** (`91%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **No** (1 Medium)
- **Verdict:** `FAIL` — score below 95% AND 1 Medium issue present.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | FR-131 added to DES-094 element-table traces; clause 7 cites FR-131, H-15, H-16, T-01, T-02; §1.1 SRS pin corrected (ISS-B); ADR-025 `age_verified` corrected (ISS-A). All traced correctly. |
| T2 Internal correctness | 20 | 93 | 18.6 | Clause 7 trigger consistent with DES-095 `getProperties()` (v1: `unlinkable: false`; v2: all true). Fail-honest default normatively stated. Single-property trigger is a minor forward-looking gap (see ISS-02). No internal contradictions introduced. |
| T3 Honesty / accuracy of claims | 25 | 78 | 19.5 | v1 subtitle claim defensible in a narrow reading; FR-131 analysis recorded. The `anon`-state analysis is a stretch (see ISS-01 — the operative gap that forces the FAIL). |
| T4 Traceability | 15 | 97 | 14.55 | §15 DES-094 amendment row added correctly. FR-131 trace added. No IDs renumbered. Annotate-don't-delete convention followed. ISS-A and ISS-B traces both updated. |
| T5 Completeness | 10 | 93 | 9.3 | Clause 7 normatively bound. `anon`/`pub` analysis recorded. ISS-A and ISS-B addressed. §15 row present. Minor gap: `anon` analysis does not explicitly state the user class the state renders for (authenticated open-tier, phone-verified only). |
| T6 Format / style | 10 | 98 | 9.8 | RFC 2119 used correctly in clause 7. Version 2.7.0 / Status: In Review / Last updated: 2026-08-25. Header Change block describes the increment accurately. IDs stable. |
| **Total** | **100** | — | **91.15% → 91%** | — |

---

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-01 | **Medium** | T3 | §10.12.3 — `anon` state copy analysis | The verdict "no v1 variant needed" for "Nothing you do here is linked to you" rests on a narrow reading of "linked" — interpreted as "publicly linked to your real-world self" — but this interpretive basis is **not stated in the text**. In v1, an authenticated open-tier user (phone-verified, account in DB with `phone_hash`) has all their platform actions (party joins, endorsements, browsing history as recorded in indexer events) associated with their DB account. The operator, with the KMS pepper, can derive the phone number from `phone_hash`. In the India pilot (TRAI mandate: SIM cards registered to real people), a carrier query or subpoena makes this a concrete chain to a real-world person — not a theoretical capability. The analysis says the DES-098/FR-131 honesty notice "separately discloses the platform's broader data practices," which is accurate for vote-casting contexts (SCR-13/14 ballot booth). However: (a) the `anon` pill renders on browsing, endorsing, and joining screens (e.g., screen 1.2, 1.6, 2.3) where no DES-098-equivalent notice appears; a user seeing "Nothing you do here is linked to you" while browsing parties has no contextual disclosure that the platform DB holds their membership linked to their account; (b) the analysis does not explicitly state that `anon` renders for authenticated open-tier (phone-verified, not government-ID-verified) users, leaving the reader to infer from wireframe context; (c) the India/TRAI context, which makes the phone_hash linkage more concrete than a generic jurisdiction, is not acknowledged. The previous version of this document required rework when a honesty stretch shipped (the original "Your identity is not stored" in v1); the same standard applies to the `anon` pill analysis. | The architect must strengthen the `anon`-state analysis with three additions: **(1)** Explicitly state the interpretive basis — "Nothing you do here is linked to you" is sustained only in the sense of "publicly linked to your real-world self through any published record," not "unreadable by the operator." State this is the interpretive basis used. **(2)** Acknowledge the gap: DES-098's disclosure covers vote-direction and membership at vote time (SCR-13/14); no equivalent contextual disclosure exists at the `anon` pill in non-vote contexts (browsing, endorsing, party-joining). Either add a normative obligation for a data-practices notice in non-vote `anon` contexts (a new clause or extension to DES-098), or explicitly record this gap as design debt with an owner and a milestone. **(3)** Explicitly state that the `anon` state renders for authenticated open-tier users (phone-verified, not yet COUNTING-eligible via government-ID check) — this is the specific user class for which the claim is most consequential. |
| ISS-02 | Low | T2 | §10.12.3 clause 7 trigger condition | The v2 subtitle trigger is `getProperties().unlinkable = true` alone. For the current two-backing world (v1 returns `unlinkable: false`; v2 returns all properties true) this is safe. A future partial-property backing that declared `unlinkable: true` with other properties false (e.g., `subpoenaResistant: false`, `anonymityFloor: false`) could cause the stronger v2 subtitle ("Your identity is not stored") to render against a backing that does not fully satisfy the "no identity at rest" guarantee implicit in that claim. | Add a normative annotation to clause 7 stating: the `unlinkable` property is used as the subtitle-selection trigger because the current v2 ZK backing that declares `unlinkable: true` also guarantees "no identity data at rest" by construction (ZK enrolment; nullifier-only on-chain; no `phone_hash` or `subject_id_hash` retained). Any new backing declaring `unlinkable: true` MUST satisfy the same guarantee — the `unlinkable` flag is a proxy for the full "identity not stored" claim, not an independent test. This should be captured as a design-review invariant for future backing registrations. |
| ISS-03 | Low | T5 | §10.12.3 three-state table, `ver` row | The three-state table's `ver` row Subtitle column shows the v2 copy ("Your vote counts. Your identity is not stored.") as the reference entry, annotated "(v2 ZK backing only — see backing-aware copy below)." The v1 copy (the default/fail-honest subtitle) does not appear in the three-state table — only in the backing-aware sub-table. A quick-scanning engineer implementing `PrivacyStatus.tsx` might take the three-state table as the canonical component spec and miss the annotation. Clause 7 explicitly prohibits hardcoding the v2 subtitle (MUST NOT), which is the normative mitigation. | Add a prominent header note to the three-state table (or a caption on the `ver` row) stating: "The `ver` row subtitle is conditional — see backing-aware copy sub-table and clause 7 for normative implementation. The three-state table preserves the v2 reference copy per the annotate-don't-delete convention; the v1 copy ('Your vote counts. How you voted is never made public.') is the default rendering for v1 deployments." |

---

## 5. Independent judgements on checks 1–4

### Check 1 — Truth of the v1 subtitle

**Finding: COMPLIANT, with noted residual.**

"Your vote counts. How you voted is never made public." is truthful for v1 in the sense that no individual vote direction is ever published to any audience — FR-124(b) enforces aggregate-only publication. The operator's DB access (H-11: DB operator CAN read direction) does not constitute "making it public" — publication to a public audience is a higher standard than internal operator read access. The document correctly notes that the fuller disclosure lives in DES-098/FR-131, which is shown to users before ballot confirmation at SCR-13/SCR-14.

The FR-131 ban applies to words that "describe v1 voting behaviour" — the subtitle uses neither "private," "anonymous," "receipt-free," nor "secure." No banned words present.

**Residual acknowledged:** The claim does not warn the user, at the time the pill is displayed, that the operator can see their vote direction. This is handled by DES-098 at vote time, which is the right disclosure point (the user has not yet voted when the pill is displayed; they will see the disclosure before confirming). The cross-referencing is adequate.

**No defect on check 1.**

### Check 2 — FR-131 banned-words analysis

**Finding: Reasoning is recorded and defensible.**

The architect's reasoning distinguishes the TITLE element ("Verified — private" — where "private" describes *verified-status visibility*, i.e. the fact that the holder's verified status is never published per-individual per FR-124(b)) from the SUBTITLE element (which describes vote publication policy). This is a coherent distinction: the title is about whether others can discover that YOU are verified (they cannot — FR-124(b)); the subtitle is about whether vote direction is published (it is not — FR-124(b)). "Private" in the title modifies "Verified" as a compound status label, not as a description of voting behaviour.

FR-131's ban ("MUST NOT use 'private' to describe v1 voting behaviour") applies to vote-behaviour description, not to status-visibility description. The reasoning is on-record (§10.12.3 FR-131 banned-words analysis block).

**Independent assessment:** The reasoning is defensible. A user reading the combined pill might interpret "private" as extending to their voting behaviour — but this is mitigated by DES-098's explicit pre-vote disclosure. The analysis is recorded, which is the requirement. No defect identified.

**No defect on check 2.**

### Check 3 — `anon`-state analysis

**Finding: A STRETCH — flagged as ISS-01 (Medium).**

This is the most contested call in the increment, and my assessment is that the verdict "no v1 variant needed" represents a stretch that does not meet the honesty standard this project has applied to previous cases (including the case that prompted this review).

The specific failure: the phrase "Nothing you do here is linked to you" is false for a v1 operator with full system access. An authenticated open-tier user in the `anon` state has:
- a `phone_hash` in the operator's restricted-class DB
- all their platform actions (joins, endorsements, browsing events in the indexer) associated with their DB account
- in the India pilot (TRAI mandate), a phone number registered to a named real person — making the `phone_hash` → phone number → real person chain a concrete legal-subpoena-accessible path, not merely a theoretical capability

The architect's defence — "linked to you" means "linked to your publicly identifiable real-world self" through any published record — is a defensible narrow reading. But this interpretive basis is not stated in the analysis text. A user reading the `anon` pill during browsing (screen 1.2), party-joining (screen 1.6), or endorsing (screen 2.3) sees "Nothing you do here is linked to you" without any contextual disclosure that the platform DB does in fact hold their account linked to their actions. DES-098 provides this disclosure at vote time — but the `anon` pill appears in non-vote contexts that DES-098 does not cover.

**Does the `anon` state render for authenticated-but-unverified users?** Yes — the three `anon` pill instances on authenticated screens (confirmed in the leak-check table) and the wireframe context (screen 1.2 "Browse anonymously" with the `anon` pill, screen 1.6 showing an `anon` user considering joining a party) confirm this. But the analysis does not explicitly state this — it says "authenticated `anon`-state users" without clarifying these are open-tier phone-verified users who have not completed government-ID verification.

**The honesty gap:** This session exists because a similar stretch shipped (the v2 subtitle showing in v1 context). The same standard requires the analysis to either (a) explicitly state the narrow interpretive basis and add a disclosure mechanism for non-vote contexts, or (b) introduce a v1 variant. The current analysis does neither — it records the concern, concludes "no v1 variant needed," and points to DES-098 as the mitigation without acknowledging DES-098's scope limitation.

**Severity: Medium.** The claim is false under a reasonable reading; the disclosed mitigation (DES-098) does not cover all contexts where the pill renders; the interpretive basis is not stated. This is a honesty-critical defect for a document that explicitly tracks honesty as a first-class property.

### Check 4 — Clause 7 mechanics

**Finding: Mechanics are sound; one forward-looking gap noted (LOW).**

- v1 backing declares `unlinkable: false` ✓ (DES-095 `getProperties()` table, §10.13.2)
- v2 backing declares `unlinkable: true` ✓ ("Returns all true")
- Fail-honest default is stated normatively: "The v1 subtitle ... MUST render in all other cases — including when `getProperties()` returns `unlinkable = false`, when the call fails, or when backing information is absent. **Absence of backing information MUST fall back to the v1 (weaker-claim) subtitle — the fail-honest default; the v2 subtitle MUST never be assumed.**" MUST used correctly ✓
- Citations present: FR-131, H-15, H-16, T-01, T-02 ✓
- The fail-honest semantics are correct: absent/error → v1 copy ✓

**Single-property trigger (LOW concern, ISS-02):** The trigger uses `unlinkable` alone. For the current two-backing world this is safe — the only backing that declares `unlinkable: true` is v2, which also guarantees "no identity at rest" by construction. But `unlinkable` is not an independent "identity not stored" test; it is being used as a proxy. If a future partial-property backing declared `unlinkable: true` with other properties false, it could incorrectly trigger the stronger claim. This warrants an annotation, not a new normative requirement.

---

## 5. Consistency sweep results

| Item | Status |
|------|--------|
| Old subtitle "Your identity is not stored" — all occurrences | Line 1181: annotated "(v2 ZK backing only — see backing-aware copy below)"; line 1188: appears only in the v2 row of the backing-aware sub-table; changelog: marked "truthful only for the ZK backing." No unconditional occurrence found. ✓ |
| §10.12.3 leak-check table — old subtitle references | No reference to the old subtitle in the leak-check table. ✓ |
| §1.1 body prose SRS version (ISS-B) | "The SRS v2.13.0 defines..." ✓ Header Source pin: "SRS-TRUMOCRACY v2.13.0" ✓ |
| ADR-025 §(e) Q-1 allowlist `age_verified` (ISS-A) | ADR-025 line: "Confirms ≥ 18 at COUNTING-tier government-ID verification" ✓ DES-100 §10.13.9 allowlist row: same corrected wording ✓ |
| §15 DES-094 v2.7.0 amendment row | Present and complete: FR traces, DES description, approver reference ✓ |
| RFC 2119 in clause 7 | MUST / MUST NOT used correctly throughout ✓ |
| Annotate-don't-delete convention | Old subtitle preserved in three-state table with "(v2 ZK backing only)" annotation ✓ |
| Version / Status / Date headers | 2.7.0 / In Review / 2026-08-25 ✓ |
| No ID renumbering | No renumbering detected ✓ |
| ADR-025 status | Accepted; amendment blocks correctly appended; no structural change to earlier sections ✓ |

---

## 6. Routing instruction

**FAIL.** Route to the **architect** (Ravi Deshmukh — Doc 03 owner).

The architect must address ISS-01 (Medium) as follows:
1. Strengthen the `anon`-state copy analysis in §10.12.3 to explicitly state that "Nothing you do here is linked to you" is sustained only in the sense of "publicly linked through any published record" — not "unreadable by the operator."
2. Acknowledge that DES-098's disclosure covers vote contexts (SCR-13/14) and identify the gap for non-vote contexts (browsing, endorsing, joining). Either add a normative disclosure obligation for non-vote `anon` contexts, or explicitly record the gap as design debt with a named owner and milestone.
3. Explicitly state that the `anon` state renders for authenticated open-tier users (phone-verified, not yet government-ID-verified).

The architect should also address ISS-02 and ISS-03 (both Low) in the same rework pass.

Rework MUST produce a new version: bump the `Version:` semver to **2.7.1**, set `Status: In Review`. This review loop re-reviews at cycle 2.
