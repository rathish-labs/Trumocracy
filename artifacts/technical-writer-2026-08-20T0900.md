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
