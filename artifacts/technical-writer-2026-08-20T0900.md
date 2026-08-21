# Session Memory — technical-writer (neutral reviewer) — 2026-08-20T0900

```
Role:      technical-writer (acting as NEUTRAL REVIEWER — document-review skill)
Timestamp: 2026-08-20T09:00:00Z
Phase:     Define (post-Gate-1 decision application) — business-mode document-review, cycle 1
Product:   Trumocracy
Scope:     REVIEWER role. Business-mode cycle-1 review of Doc 02 v2.3.0.
           Read-only on the document. No documents edited. No product code touched.
```

## What I did

Ran business-mode document-review (cycle 1) over `docs/02-requirements-srs.md` v2.3.0 per
coordinator instruction. Reviewed the four Pilot/Verification decision impact areas
(DECISIONS-2026-08-20-PILOT-VERIFICATION.md, Decisions 1–4, Rathish, 2026-08-20).

## Verdict

**PASS: 97%, 0C/0H/0M/3L.**

## Decisions made / confirmed

- All four decisions applied faithfully: pilot sequence (FR-121/CON-015), verification-gates-counting
  rule (FR-122..125), on-device/nullifier-only/subpoena posture (FR-126..128), rejected designs (TD-12).
- OI-04-PILOT correctly closed in §13 with full disposition.
- OI-19 and OI-20 correctly recorded as PENDING APPROVER DECISION — neither resolved in the document.
- FR-003, FR-004, FR-020, FR-021 carry annotations without normative-text amendment — confirmed.
- §11 arithmetic verified: Must 109 (101+8), FR minted 128 (120+8), CON 15 (14+1), TD 12 (11+1).
- §8 Gherkin confirmed for all eight new Must FRs with adversarial scenarios.
- Subpoena-test Gherkin confirmed falsifiable.
- FR-082 no-Supporter-profile-surface correctly composed in FR-124.
- Existing circuit (C-03/SC-01/ADR-017) confirmed as basis for FR-126..128, not a new component.

## Issues found (all Low — do not block pass)

- **ISS-01 (Low, B3, §2.5):** CON range reads "CON-001…CON-014"; should be "CON-001…CON-015"
  after CON-015 was added in v2.3.0.
- **ISS-02 (Low, B4, §15):** v2.1.0 approvals-table Notes still reads "OI-18 open (entrenched-charter
  scope)"; OI-18 was DECIDED at v2.2.0. Carry-forward from v2.2.0 cycle-1 ISS-02.
- **ISS-03 (Low, B4, §4.6 FR-020):** Annotation says "admission is no longer preconditioned on
  personhood verification" while normative text still begins "Admit any verified citizen"; closing
  phrase "stands in full for counted membership" implicitly narrows FR-020 scope without formally
  scoping the normative sentence. Intent is clear; OI-19 live. Clarity fix only.

## Open items

- OI-19 and OI-20: pending Rathish decision; FR-125 and Phase-1 adapter path not finalised until resolved.
- Architect: new ADR for on-device/nullifier-only posture and Decision 4 rejected designs (TD-12 note).
- Tester: RTM catch-up covers FR-121..128 after DES and US are available.
- Project-manager: GATE-STATUS record should reflect CON-015 Gate-2 line item and OI-04-PILOT closure.

## Artifacts written

- `artifacts/reviews/02-requirements-srs-v2.3.0-business-cycle1.md` (review report — PASS 97%)
- `artifacts/technical-writer-2026-08-20T0900.md` (this session-memory note)

## IDs touched (reviewed, not created or modified)

- FR-121..FR-128, CON-015, TD-12, OI-04, OI-19, OI-20
- FR-003, FR-004, FR-020, FR-021 (annotations confirmed present, normative text unchanged)
- FR-082, FR-083, FR-086 (composition with FR-124 confirmed)
- FR-069, FR-070, FR-073 (consistency with FR-121..128 confirmed)
- ADR-016, ADR-017 (cross-referenced in FR-121/FR-126/FR-127)

## No documents edited

The reviewer does not edit the reviewed document. All rework is routed to the owning role
(product-owner, Priya Raghunathan) if required. Since verdict is PASS, no rework is required for
the three Low issues to advance the SOP; they are optional quality improvements.

---

## Addendum — v2.3.1 cycle-1 review (same session, new loop)

```
Scope:     Business-mode cycle-1 review of Doc 02 v2.3.1 (new review loop — v2.3.0 loop closed PASS).
           FR-124 verified-status visibility ruling (Rathish, 2026-08-20) + ISS-01/02/03 fixes.
           Read-only on the document. No documents edited. No product code touched.
```

### Verdict

**PASS: 100%, 0C/0H/0M/0L.**

### Decisions confirmed

- FR-124 amendment applies the approver ruling verbatim: six clauses (a)–(f) covering
  private self-view, aggregate-only public, Worker/Candidate badge, MUST-NOT persistent
  attribute, no retroactive linkage, and absence-test obligation.
- Original v2.3.0 FR-124 clause (b) retained with SUPERSEDED annotation and pointer — audit trail intact.
- Supporter anonymity NOT weakened: self-view explicitly scoped to "the member's own
  authenticated-session view only and MUST NOT be accessible to any other actor" — consistent with FR-082.
- All four scope guards intact:
  - FR-020 normative text UNCHANGED ✓
  - FR-004 normative text UNCHANGED ✓
  - OI-19 PENDING ("Do NOT mark OI-19 decided") ✓
  - OI-20 PENDING ("Do NOT mark OI-20 decided") ✓
  - FR-125 still draft "(pending OI-19 resolution)" ✓
- ISS-01 RESOLVED: §2.5 now reads "CON-001…CON-015" with inline v2.3.1 ISS-01 annotation.
- ISS-02 RESOLVED: §15 OI-18 stale note corrected with inline v2.3.1 ISS-02 annotation.
- ISS-03 RESOLVED: FR-020 annotation opens with explicit "Scope of this annotation: open-tier
  (non-counted) joining only" scoping sentence; counted-membership normative text confirmed unchanged.
- §8 FR-124 Gherkin updated with 4 scenarios including adversarial aggregate-inference test ✓
- §14 "Verified status" glossary entry updated to match amended FR-124 clauses ✓

### Issues found (v2.3.1)

None. Zero issues at any severity.

### Artifacts written (addendum)

- `artifacts/reviews/02-requirements-srs-v2.3.1-business-cycle1.md` (review report — PASS 100%)

---

## Addendum 2 — v2.4.0 cycle-1 review (same session, new loop)

```
Scope:     Business-mode cycle-1 review of Doc 02 v2.4.0 (new review loop).
           OI-19 and OI-20 rulings applied (Rathish, 2026-08-20;
           artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md).
           Read-only on the document. No documents edited. No product code touched.
```

### Verdict

**PASS: 100%, 0C/0H/0M/0L.**

### Decisions confirmed

- OI-19 DECIDED banner in §4.41 quotes ruling verbatim. FR-125 finalised with 6 invariant clauses:
  (a) rate-limiter only; (b) non-invite fallback ALWAYS available, not closeable by config/default,
  no fee, leads to full counted membership; (c) no refusal for lack of invite; (d) separating test
  recorded as mandatory AC — "a determined real person can always join without an invite";
  (e) referral edge verified-then-discarded intact; (f) counted-membership path ungated.
- FR-020 normative text UNCHANGED; v2.4.0 annotation confirms FR-125 composition.
- OI-20 DECIDED banner on FR-004 quotes ruling verbatim. FR-004 normative text UNCHANGED
  ("FR-004 normative text is NOT amended" stated explicitly).
- Phase-1 limitation stated honestly: (a) no-Aadhaar exclusion in pilot region; (b) 50% cap
  inoperative, sole rail carries 100% share — explicitly stated as "dated, accepted, findable
  limitation recorded not hidden."
- Exit condition: Phase 2/eIDAS 2.0 (FR-121). Charter guard: FR-129 minted (Must, §4.43).
- WHICH-tier question (FR-118 vs FR-119) explicitly deferred to architect, not invented.
- §13 OI-19 RESOLVED, §13 OI-20 RESOLVED — both entries retained with struck-through PENDING text.
- §8 FR-125 Gherkin: 5 scenarios incl. separating test (Scenario 3) and adversarial
  fallback-closure attempt (Scenario 4, rejected). §8 FR-129 Gherkin: 2 scenarios incl.
  adversarial config-extension (rejected). All falsifiable.
- §11 Must 110, FR minted 129 — verified correct; convention note updated (FR-125 no longer draft).
- §12 traces: FR-125 updated, FR-129 added. TD-12 updated noting FR-125 finalised at v2.4.0.
- No softening, no scope creep, no silent reconciliation.

### Issues found (v2.4.0)

None. Zero issues at any severity.

### Artifacts written (addendum 2)

- `artifacts/reviews/02-requirements-srs-v2.4.0-business-cycle1.md` (review report — PASS 100%)

---

## Addendum 3 — Doc 13 v2.0.0 cycle-1 review (same session, new document, new loop)

```
Scope:     Business-mode cycle-1 review of docs/13-project-plan.md v2.0.0.
           FIRST-EVER document review for Doc 13 — clears standing hook-noise item.
           Ceremony-correction re-plan (ADR-022 / REC-1 / REC-2; Rathish, 2026-08-21).
           Scope re-baselined to SRS v2.4.0 (110 Must FRs).
           Read-only on the document. No documents edited. No product code touched.
```

### Verdict

**FAIL: 84%, 0C/0H/4M/0L.**

### Decisions confirmed

- MS-08 corrected 2027-03-05 → 2027-01-25 ✓
- Ceremonies off critical path; audits binding constraint (MS-09 2027-03-12) ✓
- Gate-2 / MS-13 2027-05-14 UNCHANGED ✓ (derivation confirmed against v1.0.0:
  audits completed 2027-03-12 vs ceremonies 2027-03-05 in v1.0.0 — audits were
  already the binding constraint; ceremony correction does not move Gate 2)
- Six transcripts / six circuits, one batched campaign ✓
- 5–15 independent contributors per circuit (ADR-022) ✓
- Scope: SRS v2.4.0, 110 Must FRs, §2.1 ✓
- Budget §8.3: ceremony line ~USD 15,000 (from ~USD 120,000); total ~USD 4,445,000;
  variance ~−USD 245,000 (~−5.8%); zero contingency ✓
- Gate-2 items 11/12/13 (CON-015 NOT STARTED; Doc 04 review OPEN; RTM catch-up NOT STARTED) ✓
- §11 re-plan log: complete, well-structured, five sub-items ✓
- Endorsement-floor 500 (governance constant) UNTOUCHED ✓
- UT-05xx IDs UNTOUCHED ✓
- Historical records not rewritten (correction pointer added at §3.3 note) ✓

### Issues found (Doc 13 v2.0.0)

- **ISS-01 (Medium, B4, §14 KC-P2):** Kill criterion KC-P2 trigger still reads "contributor
  count falls below 500" — ceremony threshold not updated per REC-1; 5-15 < 500, so KC-P2
  would fire perpetually, making it operationally vacuous.
- **ISS-02 (Medium, B4, §6 RISK-19):** RISK-19 description still references "~USD 0.35M
  shortfall" — §8.3 corrected to ~−245,000 (~−5.8%); cascade not applied to the risk register.
- **ISS-03 (Medium, B4, §13.1):** Gate-1 readiness packet cross-reference still reads
  "§8.3 — −USD 0.35M" — stale after §8.3 corrected shortfall to ~−USD 245,000.
- **ISS-04 (Medium, B4, §13.3 L1):** Lever table L1 still states "−USD 0.35M over appetite"
  — decision-support table stale; correct figure is ~−USD 245,000 per §8.3.

Root cause: ceremony budget correction applied correctly in §8.3 but not cascaded to
RISK-19, §13.1, and §13.3; KC-P2 was also missed in the "correct everywhere" sweep.

### Open items (Doc 13 loop)

- Project-manager to produce v2.0.1: fix ISS-01 (KC-P2 threshold), ISS-02 (RISK-19),
  ISS-03 (§13.1 cross-ref), ISS-04 (§13.3 L1 lever amount).
- Cycle-2 review required before Doc 13 can advance.

### Artifacts written (addendum 3)

- `artifacts/reviews/13-project-plan-v2.0.0-business-cycle1.md` (review report — FAIL 84%)

---

## Addendum 4 — Doc 13 v2.0.1 cycle-2 review

```
Scope:     Business-mode cycle-2 review of docs/13-project-plan.md v2.0.1.
           PM reworked the four cycle-1 Mediums (ISS-01..04). Verify each fix + regression check.
           Read-only on the document. No documents edited. No product code touched.
```

### Verdict

**FAIL: 96%, 0C/0H/1M/0L.**

### Cycle-1 fix verification (all four confirmed resolved)

- ISS-01 (KC-P2): RESOLVED — trigger restated with three real ADR-022 assurance conditions
  (`snarkjs zkey verify` failure; fewer than 5 independent institutions; independence
  unconfirmable). Non-vacuous; cites ADR-022.
- ISS-02 (RISK-19): RESOLVED — now "~USD 245,000 (~−5.8%) shortfall."
- ISS-03 (§13.1): RESOLVED — now "~−USD 245,000 (~−5.8%), zero contingency (RISK-19)."
- ISS-04 (§13.3 L1): RESOLVED — now "~−USD 245,000 (~−5.8%) over appetite."

### New finding (cycle-1 reviewer oversight)

- **ISS-01 (Medium, B4, exec banner line 30):** "~USD 0.35M shortfall" — the only remaining
  instance of the pre-correction figure. All four corrected sections (RISK-19, §13.1, §13.3 L1,
  §11 v2.0.1 entry) now state ~245k; exec banner is the last holdout. This was present in
  v2.0.0 and was NOT caught in cycle-1 (reviewer oversight). PM followed cycle-1 routing
  correctly. Single-line fix: change to "~USD 245,000 (~−5.8%) shortfall."

### Diff-scope

Confirmed: v2.0.1 changes limited to four fix sites + header (v2.0.1, 2026-08-21) + §11
changelog entry. No other content changed vs v2.0.0. Exec banner inconsistency is pre-existing
from v2.0.0 (not introduced by v2.0.1).

### Artifacts written (addendum 4)

- `artifacts/reviews/13-project-plan-v2.0.1-business-cycle2.md` (review report — FAIL 96%)

---

## Addendum 5 — Doc 13 v2.0.2 cycle-3 review

```
Scope:     Business-mode cycle-3 review of docs/13-project-plan.md v2.0.2.
           PM applied single-line exec-banner fix. Verify + grep confirmation.
           Read-only. No documents edited. No product code touched.
```

### Verdict

**PASS: 100%, 0C/0H/0M/0L.**

### Fix confirmed

- Exec banner line 30: "~USD 0.35M shortfall" → "~USD 245,000 (~−5.8%) shortfall" ✓
- Grep "0.35M|USD 0.35": one match — §11 v2.0.2 changelog row only (historical; legitimate). Zero normative instances. ✓
- Diff scope: exec banner line + header (v2.0.2) + §11 changelog entry. No other changes. ✓

### Artifacts written (addendum 5)

- `artifacts/reviews/13-project-plan-v2.0.2-business-cycle3.md` (review report — PASS 100%)
