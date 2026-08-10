# Gate 1 Decision Record — Trumocracy

```
Date:          2026-08-09
Gate:          Gate 1 — Direction approved
Decision-maker: Rathish (human approver)
Recorded by:   project-manager (Ana-Maria Petrescu)
Status:        APPROVED — against Doc 02 v1.0.0
               Re-affirmation required at Doc 02 v1.1.0 (change request inbound)
Source packet: artifacts/status/GATE-STATUS-2026-08-09.md
               docs/13-project-plan.md §13
```

---

## 1. What Gate 1 approves

Per `CLAUDE.md`: Gate 1 — Direction approved approves the **PR-FAQ (Doc 01)** and the
**requirements specification (Doc 02)**. Nothing should be designed until it clears.

---

## 2. Approval

**Rathish approves Gate 1 against Doc 02 v1.0.0 on 2026-08-09.**

The direction is approved as it stands. Doc 02 is about to change: a **nine-requirement change
request** arrives next session. The approval is therefore bound to **Doc 02 v1.0.0** and must be
**re-affirmed at Doc 02 v1.1.0** once that change request lands. No aspect of the direction is
approved at v1.1.0 until the re-affirmation is recorded.

---

## 3. Dispositions — open items from the Gate 1 packet

Each item is quoted faithfully from the approver's recorded decision. No softening or
reinterpretation has been applied.

### OI-01 — Threshold calibration method

> "Method fixed now, number deferred. Percentage of regional population from the population
> oracle, calibrated per region, published before the first petition opens above dev. The
> percentage stays open with that hard deadline."

**Status:** Method DECIDED. Number open, with hard deadline: published before the first petition
opens above dev.

### OI-02 — Must-set size / recall deferral

> "Keep recall (FR-042/043/045). It is the accountability half of the product."

**Status:** 42-FR Must set accepted in full. Recall (FR-042, FR-043, FR-045) is confirmed in
scope for v1.0.

### OI-03 — Enrolment exclusion rate and non-document attestation path

> "Phased. Phase 1 uses government eID as the sole uniqueness anchor per region; persons without
> a government identity cannot enrol — an accepted, documented exclusion. A non-document
> attestation path is Phase 3 and needs its own ADR, threat model and audit before it can mint
> anything."

**Status:** DECIDED for Phase 1. The exclusion is accepted and documented. Non-document path
deferred to Phase 3 with mandatory ADR, threat model, and audit as preconditions.

### OI-04 — Pilot jurisdictions

> "One pilot, jurisdiction not yet named. The credential rail will be specified as a pluggable
> adapter. Record 'name the pilot jurisdiction and its eID rail' as an open item that must close
> before the enrolment requirement is implemented."

**Status:** Pilot count DECIDED (one). Jurisdiction name and eID rail: **OPEN — must close
before the enrolment requirement is implemented.** This is a tracked post-Gate-1 open item.

### OI-05 — k ≥ 1,000 anonymity floor vs ward-level governance

> "Confirmed as designed (ADR-004 §2)."

**Status:** CONFIRMED. ADR-004 §2 stands as the resolved design answer. No requirements change.
Ward-level offices, nominations and eligibility remain ward-scoped; a ward action's anonymity
scope escalates to the nearest ancestor region meeting the floor.

---

## 4. Dispositions — governance exceptions

### E-01 — Design produced before Gate 1

> "Accepted knowingly."

**Status:** ACCEPTED. ADR-001 through ADR-014 (dated 2026-08-08) are ratified retrospectively as
Gate 1 inputs, with re-baselining at MS-02 against the five OI decisions.

### E-02 — RACI defect (one person as Product Owner and Principal Architect)

> "Confirmed."

**Status:** CONFIRMED (fix accepted). Architecture ownership was reassigned to a distinct named
architect. The RACI defect is recorded as resolved.

---

## 5. Dispositions — appetite variance

### B-01 — Budget (USD 4.55M against USD 4.2M appetite)

> "Accept the PM's recommendation — one pilot, roll two post-launch, ~USD 4.13M against the
> 4.2M appetite."

**Status:** ACCEPTED. Lever L2 from Doc 13 §13.3 is approved: launch in one pilot, roll the
other two post-launch, approximately USD 4.13M with approximately 1.7% contingency against the
USD 4.2M appetite.

### S-01 — Schedule (Gate 2 moves 2027-02-15 → 2027-05-14)

> "Accepted, Gate 2 moves to 2027-05-14. Ceremony- and audit-paced."

**Status:** ACCEPTED. Gate 2 milestone MS-13 is set at 2027-05-14. The 13-week extension is
acknowledged as driven by the externally-paced cryptography programme: six phase-2 ceremonies at
≥ 500 contributors each and two independent audits.

---

## 6. Disposition — open critical (fork initiation)

### Fork initiation — calldata vulnerability (from security scan findings)

> "Defer. Flag stays off above dev. Remains an open critical, not closed."

**Status:** DEFERRED. Fork initiation remains an open critical defect. The `fork` feature flag
stays off in every environment above dev until the defect is fixed. This item is **not closed**
by this gate decision; it is carried forward as an open critical on the Gate 2 path.

---

## 7. Post-Gate-1 open items

The following items were explicitly identified as remaining open after this approval. Each must
close before the affected work can proceed:

| # | Open item | Must close before |
|---|-----------|-------------------|
| **OI-01-NUM** | Threshold percentage (calibrated per region) | First petition opens above dev |
| **OI-04-PILOT** | Name the pilot jurisdiction and its eID rail | Enrolment requirement is implemented |
| **CR-v1.1.0** | Nine-requirement change request (inbound next session) | Re-affirmation of Gate 1 at Doc 02 v1.1.0 |
| **FORK-CRIT** | Fork initiation calldata vulnerability (open critical) | Gate 2 / fork flag enabled above dev |

---

## 8. Source references

- **Gate 1 readiness packet:** `artifacts/status/GATE-STATUS-2026-08-09.md`
- **Doc 13 §13 (Gate-1 readiness packet):** `docs/13-project-plan.md` — §13.1 through §13.5
- **Doc 13 §13.2** — five open items (OI-01…OI-05)
- **Doc 13 §13.3** — appetite variance (L1/L2/L3 levers)
- **Doc 13 §13.4** — governance exceptions (E-01, E-02)
- **PR-FAQ:** `docs/01-press-release-prfaq.md` v1.0.0
- **Requirements:** `docs/02-requirements-srs.md` v1.0.0
- **ADR-004 §2** (OI-05 resolution): `docs/adr/ADR-004-anonymity-set-floor.md`

---

*This record is written by the project-manager and reflects the decision of the human approver
verbatim. The project-manager does not approve gates. Only the human approver — Rathish — is
the decision-maker.*
