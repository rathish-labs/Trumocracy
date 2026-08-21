# Session Note — project-manager (Ana-Maria Petrescu)

```
Role:      project-manager
Timestamp: 2026-08-20T1053
Phase:     Governance — pilot jurisdiction & verification decision recording
Product:   Trumocracy
```

---

## What was done this session

Recorded four approver decisions (Rathish, 2026-08-20) as a formal decision record and
updated the running gate-status log. No numbered documents in `docs/` were written or
edited. No product code was written or reviewed.

### Artifacts written / updated

| Artifact | Action | Description |
|----------|--------|-------------|
| `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md` | **Created** | Decision record for four approver decisions; full verbatim quotes; what is closed (OI-04-PILOT), what is created (legal-opinion Gate-2 line item), and what is directed (Doc 02 v2.3.0 + new ADR). |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | **Updated** (additive) | New section "Pilot jurisdiction & verification decisions — 2026-08-20" appended: OI-04-PILOT closed; pilot-sequence table; new Gate-2 legal-opinion line item; decisions 2–4 pointer. No prior text altered. |
| `artifacts/project-manager-2026-08-20T1053.md` | **Created** | This session note. |
| `artifacts/memory-index.json` | **Updated** (surgical append) | One new entry appended to "notes" array. |

---

## Decisions recorded

| Decision | Item | Disposition |
|----------|------|-------------|
| 1 | Pilot jurisdiction sequence | India (Aadhaar offline KYC) Phase 1 · EU (eIDAS 2.0) Phase 2 · USA (mDL) Phase 3. OI-04-PILOT **CLOSED**. |
| 2 | Verification as separate, optional step | Verification gates COUNTING, never joining. Two tiers: open (no count), verified (counts). |
| 3 | On-device proof, nullifier-only, no stored identity | Existing C-03 circuit / SC-01 trust-anchor binding is the mechanism. Subpoena test is the acceptance criterion. |
| 4 | Two rejected designs | Persistent referral graph and encrypted identity registry — both rejected with rationale; to be recorded in ADR. |

---

## Sources read this session

- `artifacts/status/GATE1-DECISION-2026-08-11.md` — house style reference; source of OI-04-PILOT carry-forward wording
- `artifacts/status/OI-18-DECISION-2026-08-11.md` — house style reference for decision-record format
- `artifacts/status/GATE-STATUS-2026-08-09.md` — "Follow-up governance — 2026-08-12" section read for structural fit

---

## IDs touched

| ID | Action |
|----|--------|
| OI-04-PILOT | **Closed** by DECISIONS-2026-08-20-PILOT-VERIFICATION.md |

No new IDs minted by the project-manager this session.

---

## Open items — pending application this session

The following downstream work is directed by the four decisions recorded above and is
expected to be applied in this same session by the owning roles:

| Item | Owner | Target | Depends on |
|------|-------|--------|------------|
| Doc 02 v2.3.0 — apply decisions 1–3 (pilot sequence, verification tiers, nullifier-only posture, no-stored-identity requirement) | product-owner (Priya Raghunathan) | `docs/02-requirements-srs.md` | This decision record |
| New ADR — tiered verification-gates-counting; on-device nullifier-only; two rejected designs (referral graph + encrypted identity registry) | architect (Ravi Deshmukh) | `docs/adr/ADR-0NN-*.md` | This decision record; Doc 02 v2.3.0 |
| Legal opinion — India / Aadhaar: commission and track | product-owner to commission; project-manager to track | External legal review → Gate-2 artifact | Before FR-070 adapter class (c) finalised |

---

## Gate status (unchanged)

- **Gate 1:** APPROVED (2026-08-11, unconditional; OI-18 decided 2026-08-11; OI-04-PILOT now also closed).
- **Gate 2:** NOT READY. RTM (Doc 08 v2.1.0): 125 Must rows / 12 COMPLETE / 113 OPEN. Legal-opinion line item (India/Aadhaar) also now open (NOT STARTED).

---

*The project-manager does not approve gates and does not write product code. This note
reflects coordination and governance work only.*

---

## Outcomes addendum — applied 2026-08-20 (appended after session completion)

Decisions 1–4 were applied by the product-owner and architect in the same session. Outcomes
verified against artifacts before recording.

### Documents produced and approved

| Document | Version | Review outcome |
|----------|---------|---------------|
| Doc 02 Requirements | **v2.3.0** | business cycle-1 PASS 97%, 0C/0H/0M/3L — Approved |
| Doc 03 SDD | v2.1.2 | technical cycle-1 FAIL 95%, 0C/0H/2M/2L — reworked |
| Doc 03 SDD | **v2.1.3** | technical cycle-2 PASS 100%, 0C/0H/0M/0L — Approved |

ADR-021 registered (`docs/adr/ADR-021-verification-gates-counting.md`): verification
gates counting; on-device nullifier-only posture confirmed as the existing C-03/SC-01
circuit (not a new component); two rejected designs (persistent referral graph; encrypted
identity registry) recorded under Alternatives rejected. ADR-016/017 carry amendment notes
naming the Phase-1 Aadhaar rail.

### IDs minted this session

| Prefix | IDs | Notes |
|--------|-----|-------|
| FR | FR-121..FR-128 (8 Must) | No DES, US, TC, or RTM rows yet — recorded-phasing posture |
| CON | CON-015 | Legal-opinion hard dependency (India/Aadhaar) |
| TD | TD-12 | Two rejected designs (Decision 4) |
| OI | OI-19, OI-20 | Both PENDING APPROVER DECISION — not resolved |
| ADR | ADR-021 | Verification gates counting |
| OI closed | OI-04-PILOT | Closed by DECISIONS-2026-08-20-PILOT-VERIFICATION.md |

### Two open tensions — pending Rathish

**OI-19 — Invite-gating vs FR-020 admission ban.** Decision 2 permits "invite-gating for
spam control only" on the open tier; FR-020 (Must) bans invitation as an admission
condition. FR-125 is DRAFT, not implementation-ready until OI-19 closes. NOT DECIDED.

**OI-20 — Single-rail pilot vs FR-004 ≥ 2 independent attestation paths.** Phase-1 names
one rail (Aadhaar). FR-004's normative text (≥ 2 mutually independent attestation paths per
launch region, ≤ 50% attestor cap) has not been amended. NOT DECIDED.

### Catch-up debt open items (updated)

| Owner | Deliverable | Condition |
|-------|-------------|-----------|
| product-owner (Priya Raghunathan) | Doc 05 stories for FR-121..FR-128 | Next backlog catch-up; FR-125 stories not Ready until OI-19 closes |
| tester (Ji-woo Park) | Doc 07 test cases + Doc 08 RTM rows for FR-121..FR-128 | After Doc 05 stories land; FR-125 and FR-121 Gherkin gate on OI-19/OI-20 resolution |
| product-owner / project-manager | Legal opinion — India/Aadhaar commissioned and recorded | Gate-2 blocker; status NOT STARTED |

### Gate status (updated)

- **Gate 1:** APPROVED (unconditional; OI-04-PILOT now closed; OI-18 decided 2026-08-11).
- **Gate 2:** NOT READY. RTM (Doc 08 v2.1.0): 125 Must rows / 12 COMPLETE / 113 OPEN (FR-121..FR-128 rows not yet added). Legal-opinion line item: NOT STARTED. OI-19 / OI-20: NOT DECIDED.

---

## OI-19 / OI-20 addendum — decided 2026-08-20 (appended after ruling)

Rathish ruled on both open tensions in the same session. Decision record:
`artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md`.

### OI-19 — CLOSED

Invite-gating is a spam-control rate-limiter, never an admission condition. FR-125
finalised: invite-based onboarding is the fast default path; a non-invite fallback is
mandatory and must always remain open (slower/higher-friction is acceptable, closed is not).
FR-020 is unamended and absolute. Test obligation minted: a determined real person must
always be able to complete membership without an invite. Applied in Doc 02 v2.4.0 and
ADR-021 amendment note.

### OI-20 — CLOSED

Design stays plural; Phase-1 deploys one rail (Aadhaar). FR-004 unamended — satisfied at
architecture level (Aadhaar is one implementation of the pluggable adapter interface).
Phase-1 single-rail recorded as a dated deployment limitation with explicit exit condition:
Phase 2 adds eIDAS. New Charter-layer-guard requirement minted in Doc 02 v2.4.0: making
single-issuer operation permanent requires Gate-1 re-entry, never a deployment default.
Applied in Doc 02 v2.4.0 and ADR-016 amendment block.

### Artifact

- `artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md` — created this addendum

### Gate status (final for 2026-08-20)

- **Gate 1:** APPROVED (unconditional). OI-04-PILOT CLOSED. OI-18 CLOSED 2026-08-11. OI-19 CLOSED 2026-08-20. OI-20 CLOSED 2026-08-20.
- **Gate 2:** NOT READY. RTM (Doc 08 v2.1.0): 125 Must rows / 12 COMPLETE / 113 OPEN (FR-121..FR-128 rows not yet added). Legal-opinion line item (India/Aadhaar): NOT STARTED.

---

## v2.4.0 / v2.1.4 outcomes addendum — applied 2026-08-20/21 (appended after completion)

Facts verified against review reports before recording.

| Document | Version | Review outcome |
|----------|---------|---------------|
| Doc 02 Requirements | **v2.4.0** | business cycle-1 PASS 100%, 0C/0H/0M/0L — Approved |
| Doc 03 SDD | **v2.1.4** | technical cycle-1 PASS 99.5%, 0C/0H/0M/1L — Approved |

**IDs minted / changed:** FR-125 finalised (no longer DRAFT); FR-129 minted (Must —
Charter-layer permanence guard); OI-19 and OI-20 marked RESOLVED in Doc 02 §13. Must count
109 → 110. FR-020 and FR-004 normative text unamended.

**Catch-up debt extended:** FR-129 joins FR-121..FR-128 in recorded-phasing posture (no
DES/US/TC/RTM rows). FR-129 tier-determination (FR-118 Tier-1 vs FR-119 Tier-2) registered
in Doc 03 §16 for next DES increment. ADR-016 ISS-01 Low (citizen-exclusion sentence
missing from amendment block item (c)) — owner: architect, next DES increment.

**Process note:** one reviewer invocation terminated by session usage limit before writing
anything; cleanly re-run; no partial artifacts.

**Gate 2 (final):** NOT READY. RTM 125 Must rows / 12 COMPLETE / 113 OPEN (FR-121..FR-129
rows not yet added). Legal-opinion (India/Aadhaar): NOT STARTED.
