# v1 Scope Closure — Terminology, Gate-Date, and RISK-44 Rulings

```
Date:            2026-08-24
Decision:        (1) "Supporter level" in prior ruling = FR-122 open/unverified tier CONFIRMED;
                 two-axis note in Doc 02 v2.13.0 §4.41 retained;
                 (2) MS-V1-LRG = 2027-06-30 upgraded APPROVER-DELEGATED → APPROVER-CONFIRMED;
                 (3) RISK-44 CLOSED via option (a) — Definition-B Gate-2 date re-based to
                 "after the v1 gate (2027-06-30); specific offset to be planned when Definition B
                 re-enters design→build"; option (c) explicitly rejected; 2027-05-14 retired;
                 T-06 ACCEPTED reaffirmed; T-07 PENDING CON-015 reaffirmed;
                 CON-015 and DEP-11/12/13 are the binding critical path — must start now;
                 v1 scope CLOSED; branch ready to push and merge
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED — all three confirmations final; cascade debt routed to owning roles;
                 branch push/merge is the approver's action, not this session's
Source:          Transmitted via coordinator (2026-08-24). Applied session: 2026-08-24.
                 Fifth decision record of this sprint (after
                 DECISIONS-2026-08-23-V1-V2-SPLIT.md,
                 DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md,
                 DECISIONS-2026-08-23-V1-IDENTITY-VERIFICATION.md, and
                 DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md).
                 Second decision record of 2026-08-24 (the first is
                 DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md).
```

---

## 1. What was open

`DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §6 left three items open for the approver:

**Item A — Naming collision (§6, first row).** The prior ruling used "supporter level" to mean
the FR-122 open/unverified tier. "Supporter" is also a proper noun in the three-tier privacy
model (§4.24, FR-082..FR-086: Supporter / Worker / Candidate — the privacy-disclosure axis).
The two axes are orthogonal but were not stated as such in one place. The prior record
interpreted the ruling's "supporter level" as the FR-122 open/unverified tier — the only
reading consistent with FR-123 — and surfaced the naming collision for approver confirmation.
It also routed a two-axis cross-reference note to the product-owner (§5.1), and that note
was placed in `docs/02-requirements-srs.md` v2.13.0 §4.41. The approver needed to confirm
the interpretation and whether the note should stand.

**Item B — MS-V1-LRG gate date (§6, second row).** The prior record supplied 2027-06-30 as
the coordinator's date under the approver's explicit delegation ("YOU SUPPLY"), clearly
labelled APPROVER-DELEGATED and subject to the approver's correction. The approver needed
to confirm or correct it.

**Item C — RISK-44: Definition-B Gate-2 vs v1 gate date sequencing incoherence (§6, second
row / §4.2).** `docs/13-project-plan.md` §3.5.5 stated that Definition B re-enters design→build
after v1 launch. The Definition-B Gate-2 (MS-13) was dated 2027-05-14, confirmed per the
2026-08-23 V1/V2-split ruling. A v1 gate of 2027-06-30 falls six weeks after that date,
making Definition-B Gate-2 precede the v1 launch it was supposed to follow. The three options
offered to the approver were: (a) re-base the Definition-B Gate-2 date to after the v1 gate;
(b) pull the v1 gate earlier; (c) allow the two programmes to overlap. The prior record held
the 2027-05-14 figure unchanged pending this ruling.

In parallel, the reaffirmations of T-06 (ACCEPTED) and T-07 (PENDING CON-015) and the
operational urgency of CON-015 / DEP-11 / DEP-12 / DEP-13 were flagged for the approver's
attention.

---

## 2. The ruling — verbatim

No softening, no reinterpretation.

---

### Confirmation 1 — Terminology

> "1. TERMINOLOGY — CONFIRMED. My 'supporter level' meant the OPEN, UNVERIFIED tier on the
> verification axis (FR-122), not the Supporter privacy tier. The two-axis reading applied
> throughout (verification axis ⊥ privacy axis) is correct. Keep the two-axis note."

---

### Confirmation 2 — V1 gate date

> "2. V1 GATE DATE — CONFIRMED. MS-V1-LRG = 2027-06-30 stands."

---

### Confirmation 3 — RISK-44 ruling

> "3. RISK-44 — RULING: OPTION (a). Re-base the Definition-B Gate-2 date to fall AFTER the
> v1 gate, not before. Rationale to record: the strategy is sequential — v1 (Definition A)
> ships first, then Definition B re-enters and is built in the open with contributors. The
> 2027-05-14 date was a pre-split Definition-B artifact and must move to follow v1 launch.
> Do NOT overlap the programmes (option c) — capacity is single-track and A-first is
> deliberate. Set the new v2 Gate-2 as re-based-after-v1 with its offset to be planned when
> v2 re-enters, not fixed now."

---

### Operational headline and T-06 / T-07 reaffirmation

> "Record T-06 accepted (already ruled), T-07 pending CON-015. Also flag in the gate status,
> as the operational headline, that CON-015 and the three vendor procurements (esp. the
> ID-verification vendor's provider-side no-retention clause, RISK-41) are the binding
> critical path and must start now regardless of session work."

---

### v1 scope closure statement

> "Then this closes v1 scope — the branch is ready to push and merge."

---

## 3. Analysis

Each point verified against the named artifact before being recorded. No figure is invented;
any source not yet produced is marked `N/A — not yet produced`.

---

### 3.1 Confirmation 1 — naming-collision interpretation is correct and the note stands

**Source:** `docs/02-requirements-srs.md` v2.13.0 §4.41 (two-axis note); §4.24 (FR-082..
FR-086, three-tier privacy model); §4.41 (FR-122, open/unverified tier; FR-123,
COUNTING-tier gate).

The approver confirms that "supporter level" in the prior ruling referred to the
**verification axis** (FR-122 open/unverified tier), not to the privacy-disclosure axis
(§4.24 Supporter tier). The two axes are orthogonal:

| Axis | Tiers | Self-declared? | Controls what? |
|------|-------|---------------|----------------|
| Privacy-disclosure (§4.24) | Supporter / Worker / Candidate | Yes | What identity/role information is visible about the member |
| Verification (§4.41) | Open/unverified (FR-122) / Verified/COUNTING (FR-123) | No — gated by proof | Which actions count toward official strength, binding votes, candidacy |

A verified **Supporter**-privacy-tier member CAN take COUNTING actions (FR-123); an
**open/unverified** participant (FR-122) cannot, regardless of their privacy tier. The two
axes are independent. Conflating them would incorrectly grant COUNTING votes to unverified
participants, directly contradicting FR-123.

The two-axis note in `docs/02-requirements-srs.md` v2.13.0 §4.41 explicitly states this
orthogonality and is approver-directed to **stand unchanged**. No edit is required to Doc 02
for this confirmation — the note accurately captures the surface, and this record is the
closure. The interpretation applied throughout the suite (all prior document amendments,
routing decisions, and downstream instructions in §5.1 of the prior record) is
**approver-confirmed as of 2026-08-24**.

The naming-collision open item in `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §6 (first
row) is **CLOSED** by this confirmation.

---

### 3.2 Confirmation 2 — MS-V1-LRG 2027-06-30 is now APPROVER-CONFIRMED

**Source:** `docs/13-project-plan.md` v2.7.2 §3.3 (milestone table / gate-conditions section);
`DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §4.1 (date supply reasoning on record).

The coordinator-supplied date of **2027-06-30** — entered in Doc 13 v2.7.2 as
APPROVER-DELEGATED, subject to correction, with reasoning cited in the prior decision record
§4.1 — is confirmed by the approver unchanged. The label upgrades from
**APPROVER-DELEGATED — subject to correction** to **APPROVER-CONFIRMED**.

Every statement in the active document suite that carries the "APPROVER-DELEGATED — subject
to correction" label against this date MUST have that label replaced with "APPROVER-CONFIRMED
(Rathish, 2026-08-24)". These sites are in Doc 13 only (the date was entered there under
delegation; other documents did not yet carry the delegated label). The Doc 13 update is
routed to the project-manager's Doc 13 v2.8.0 increment (§5).

---

### 3.3 Confirmation 3 — RISK-44 closed via option (a); 2027-05-14 retired as a Definition-B Gate-2 target

**Source:** `docs/13-project-plan.md` v2.7.2 §3.5.5 (Definition-B sequencing); RISK-44 entry
in the risk register.

The ruling selects **option (a)**: the Definition-B Gate-2 date is re-based to fall **after
the v1 gate (2027-06-30)**. Key rulings on record:

- The strategy is **sequential**: v1 (Definition A) ships first; then Definition B re-enters
  the SOP at the top and is built in the open with contributors.
- The 2027-05-14 date was a pre-split artifact that predated the Definition-A / Definition-B
  separation (established by the 2026-08-23 V1/V2-split ruling). It was never a valid
  post-split Definition-B Gate-2 target and is **retired** as such.
- The specific offset for the re-based Definition-B Gate-2 will be planned **when Definition B
  re-enters design→build**, not fixed now. The approver explicitly rejects fixing the date
  in this session.
- **Option (c) rejected explicitly**: capacity is single-track, A-first is deliberate. The
  two programmes MUST NOT overlap.

Consequence: **RISK-44 is CLOSED** by this ruling. The §3.5.5 "after v1 launch" sequencing
in Doc 13 is coherent and confirmed. The Definition-B Gate-2 milestone (MS-13) target becomes:
**"re-based after the v1 gate (2027-06-30); specific offset to be planned when Definition B
re-enters — deliberately not fixed now."** No fixed date replaces 2027-05-14 at this time.

---

### 3.4 T-06 / T-07 — reaffirmed, no change

**Source:** `docs/02-requirements-srs.md` v2.13.0 §16.5 T-06 / T-07 rows;
`DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §4.3 and §4.4.

- **T-06:** ACCEPTED — DEFERRED WITH DISCLOSURE (approver, 2026-08-24, already ruled).
  Reaffirmed with no change. `getProperties().onePersonOneVote = false` unchanged; H-15
  records the multiple-legitimate-IDs gap.
- **T-07:** PENDING CON-015 (no change from 2026-08-23). No enrolment sprint begins without
  CON-015 in hand.

---

### 3.5 Operational headline — CON-015 and vendor procurements are the binding critical path

**Source:** `docs/13-project-plan.md` v2.7.2 §3.3 (gate conditions / dependency table lines
303–306).

The approver directs this to be flagged as the **operational headline in the gate status**.
All four items are NOT STARTED as of 2026-08-24:

| Item | Latest start | Status | Owner |
|------|-------------|--------|-------|
| CON-015 (legal opinion — Aadhaar API; S-2b gate) | **2026-09-07** | NOT STARTED | Sofia Marchetti |
| DEP-11 (SMS delivery provider procurement) | **2026-09-19** | NOT STARTED | Rafael Duarte |
| DEP-12 (phone-intelligence API procurement) | **2026-09-19** | NOT STARTED | Rafael Duarte |
| DEP-13 (ID-verification provider procurement — no-retention clause required; RISK-41) | **2026-09-19** | NOT STARTED | Rafael Duarte |

DEP-13 is the hardest to contract: the provider-side no-retention contractual clause (RISK-41)
is a hard pre-condition for S-2b (ID integration track) and may require a longer procurement
cycle than DEP-11/DEP-12. CON-015's latest start is 2026-09-07 — **14 days from 2026-08-24**.
All four must start **immediately**, independently of any remaining session work.

Source: `docs/13-project-plan.md` §3.3 (gate conditions); lines 303–306 (latest-start
dependency table for DEP-11/12/13 and CON-015).

---

### 3.6 v1 scope closure

The approver confirms that with this record applied, all rulings on v1 scope are **closed**.
The remaining pre-push work is:

1. Doc 13 v2.8.0 increment (gate-date label upgrade, RISK-44 closure, 2027-05-14 sweep,
   §3.5.5 / §3.5.6 heading, operational headline in gate status) — routed to the
   project-manager.
2. Review of Doc 13 v2.8.0 (document-review loop, neutral reviewer, business mode).
3. Passing review confirmed.
4. Commit.

The branch push and merge are the **approver's action** (human gate; not this session's
action). The coordinator does not push or merge.

---

## 4. Consequences and cascade — verified against real files

### 4.1 Confirmation 1 closes the naming-collision open item

The naming-collision open item from `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §6 (first
row) is **CLOSED**. The two-axis note in `docs/02-requirements-srs.md` v2.13.0 §4.41 **stays**
as directed. Doc 02 itself needs **no edit** for this confirmation — the note accurately records
the surfacing and this record is the closure. The interpretation applied throughout the suite is
approver-confirmed.

### 4.2 Confirmation 2 — MS-V1-LRG label upgrade required in Doc 13

MS-V1-LRG 2027-06-30 is upgraded from APPROVER-DELEGATED to **APPROVER-CONFIRMED**. Every
Doc 13 site carrying the "APPROVER-DELEGATED — subject to correction" label MUST be updated
in the Doc 13 v2.8.0 increment. Routed to the project-manager (§5).

### 4.3 Confirmation 3 — RISK-44 closed; Definition-B Gate-2 date re-based

The Definition-B Gate-2 (MS-13) target ceases to be the fixed date **2027-05-14** and becomes
**"re-based after the v1 gate (2027-06-30); specific offset to be planned when Definition B
re-enters design→build — deliberately not fixed now."**

The "after v1 launch" sequencing in Doc 13 §3.5.5 is thereby coherent and confirmed. Option
(c) (overlap) is explicitly rejected. Routed to the project-manager for the Doc 13 v2.8.0
increment (§5).

### 4.4 Cross-document cascade — routed, NOT edited this session

The approver commissioned PM / Doc 13 only. The retired 2027-05-14 fixed date survives in
ACTIVE statements owned by other roles. Each is recorded debt routed to its owner's next
increment; each owner MUST cite this record when making the edit.

| Site | Owner | Line | Active statement | Debt note |
|------|-------|------|-----------------|-----------|
| `docs/01-press-release-prfaq.md` | product-owner | **420** | "Gate 2 target 2027-05-14 (moved from 2027-02-15 per S-01…)" | Replace 2027-05-14 with the re-based Definition-B Gate-2 description (no fixed date yet). Note: Doc 01 already lacks a passing business-mode review and is a recorded Gate-1 presentation blocker; this edit folds into its owed review cycle. |
| `docs/02-requirements-srs.md` | product-owner | **2656** | "One release at 2027-06-01 (following Gate 2 readiness 2027-05-14), delivered on trunk…" | The sentence predates the v1/v2 split and is stale on two axes: (a) the single-release shape (v1 and v2 are now sequential separate releases) and (b) the 2027-05-14 date (retired). Both require correction at the product-owner's next Doc 02 increment. |
| `docs/03-architecture-design-sdd.md` | architect | **1761** | "2027-05-14 \| Gate-2 referent for Definition B confirmed…" | Both the 1761 row (2027-05-14 confirmed) and the 1762 row ("v1 gate date … NOT SET") are superseded by this record. Row 1761: 2027-05-14 is retired as a Definition-B Gate-2 referent. Row 1762: v1 gate date is now APPROVER-CONFIRMED at 2027-06-30. Architect to update at next Doc 03 increment. |
| `docs/03-architecture-design-sdd.md` | architect | **1762** | "v1 gate date \| The existence of MS-V1-LRG as a separate v1 launch-readiness gate is confirmed as the mechanism; the date is NOT SET…" | Superseded — the date is now APPROVER-CONFIRMED 2027-06-30 (Rathish, 2026-08-24). See row 1761 note above. |
| `docs/09-release-notes.md` | sre | **35** | "Gate 2 is milestone **MS-13**, target **2027-05-14**, and it gates the **Phase-3** production rollout" | The target-date figure 2027-05-14 is retired. The operative claim "NOT approved" (see line 341) remains factually true. The sre MUST update the target-date reference to reflect the re-based-after-v1 description (no fixed date yet) at next Doc 09 increment. |
| `docs/09-release-notes.md` | sre | **341** | "Gate \| **Gate 2 is MS-13, target 2027-05-14 — NOT approved, NOT applicable to this release**" | Target-date figure 2027-05-14 is retired; "NOT approved" remains correct. sre to update at next increment (same as line 35). |
| `docs/10-deployment-runbook.md` | sre | **19** | "**Gate 2 (MS-13, target 2027-05-14) is NOT approved.**" | Target-date figure 2027-05-14 is retired; "NOT approved" remains correct. sre to update at next increment. |

**Historical changelog / Change-block mentions** across the suite are records of what earlier
versions said and are **NOT** cascade debt — do not amend them.

### 4.5 T-06 / T-07 — reaffirmed, no new cascade

T-06 ACCEPTED (already ruled, no new cascade). T-07 PENDING CON-015 (no change). These
reaffirmations are recorded here for completeness; no document edits result from this point.

### 4.6 Operational headline — CON-015 and DEP-11/12/13

The approver directs this to be flagged in the gate status as the operational headline. The
project-manager MUST include this in the gate status update at the Doc 13 v2.8.0 increment.
All four items (CON-015, DEP-11, DEP-12, DEP-13) are NOT STARTED as of 2026-08-24.
DEP-13's provider-side no-retention clause (RISK-41) is especially critical given the
harder-to-contract nature of the requirement. Source: `docs/13-project-plan.md` §3.3.

---

## 5. Routing to owning roles

### 5.1 project-manager — Doc 13 v2.8.0 (sole commissioned document this session)

| Item | Change required |
|------|----------------|
| **MS-V1-LRG label** | Upgrade every "APPROVER-DELEGATED — subject to correction" label on the 2027-06-30 date to "APPROVER-CONFIRMED (Rathish, 2026-08-24)". |
| **RISK-44 entry** | Close RISK-44: ruling = option (a); 2027-05-14 retired; Definition-B Gate-2 re-based to "after the v1 gate (2027-06-30); offset to be planned when Definition B re-enters"; option (c) rejected. Cite this record. |
| **2027-05-14 sweep** | Replace any remaining active references to 2027-05-14 as the Definition-B Gate-2 fixed date with the re-based description. Historical Change-block mentions are not touched. |
| **§3.5.5 / §3.5.6** | Update the Definition-B sequencing paragraph and heading to reflect the confirmed post-v1-launch sequencing and the retirement of the fixed 2027-05-14 date. |
| **Operational headline in gate status** | Add the CON-015 / DEP-11 / DEP-12 / DEP-13 NOT-STARTED operational urgency as the gate-status operational headline (approver-directed). |

### 5.2 product-owner — at next Doc 01 and Doc 02 increment

| Item | Document | Line | Change required |
|------|----------|------|----------------|
| 2027-05-14 date reference | `docs/01-press-release-prfaq.md` | 420 | Update to reflect re-based Definition-B Gate-2 (no fixed date yet); cite this record. Folds into the owed review cycle (Doc 01 lacks a passing business-mode review). |
| Release-shape sentence | `docs/02-requirements-srs.md` | 2656 | Correct both the single-release shape and the 2027-05-14 date; cite this record. |

### 5.3 architect — at next Doc 03 increment

| Item | Document | Lines | Change required |
|------|----------|-------|----------------|
| Confirmed-dispositions table | `docs/03-architecture-design-sdd.md` | 1761–1762 | Row 1761: retire 2027-05-14 as Definition-B Gate-2 referent; cite this record. Row 1762: replace "NOT SET" with APPROVER-CONFIRMED 2027-06-30 (Rathish, 2026-08-24); cite this record. |

### 5.4 sre — at next Doc 09 and Doc 10 increment

| Item | Document | Lines | Change required |
|------|----------|-------|----------------|
| MS-13 target-date reference | `docs/09-release-notes.md` | 35 | Replace 2027-05-14 target-date with re-based description; "NOT approved" operative claim remains correct. Cite this record. |
| Gate table row | `docs/09-release-notes.md` | 341 | Same as above. |
| Gate status banner | `docs/10-deployment-runbook.md` | 19 | Replace 2027-05-14 target-date with re-based description; "NOT approved" operative claim remains correct. Cite this record. |

---

## 6. What is NOT decided here — open items remaining

| Item | Why it is open | Owner |
|------|----------------|-------|
| **T-07 — FR-003 vs `phone_hash` / `subject_id_hash` storage** | PENDING CON-015 legal opinion. No enrolment sprint begins without it. Latest start 2026-09-07. | Sofia Marchetti (CON-015 scope); approver after legal opinion delivered |
| **DEP-13 — ID-verification provider selection and contractual no-retention clause** | Vendor not yet contracted; provider-side no-retention clause is a hard pre-condition for S-2b; 4–8 week (or longer) procurement lead. | Rafael Duarte (owner); procurement must begin immediately |
| **DEP-11 / DEP-12 — SMS delivery provider and phone-intelligence API procurement** | Not yet contracted; 4–8 week lead; latest start 2026-09-19. | Rafael Duarte; procurement must begin immediately |
| **Definition-B Gate-2 specific offset** | Deliberately not fixed here. To be planned when Definition B re-enters design→build (after v1 launch). | project-manager; product-owner (when v2 re-enters the SOP) |
| **Doc 01 and Doc 05 passing business-mode reviews** | Gate-1 presentation still blocked on these two documents lacking passing reviews. | project-manager to assign neutral reviewer |
| **Doc 03 Lows ISS-A / ISS-B** | Carried from prior review; design backlog debt. | Ravi Deshmukh at next DES increment |

---

## 7. Sources

| Source | Role in this record |
|--------|---------------------|
| `docs/02-requirements-srs.md` v2.13.0 §4.41 | Two-axis note (approver-directed to stand); FR-122 open/unverified tier; FR-123 COUNTING-tier gate |
| `docs/02-requirements-srs.md` v2.13.0 §4.24 | Three-tier privacy model (FR-082..FR-086: Supporter / Worker / Candidate — privacy-disclosure axis) |
| `docs/02-requirements-srs.md` v2.13.0 §16.5 | T-06 (ACCEPTED) and T-07 (PENDING CON-015) |
| `docs/02-requirements-srs.md` line 2656 | Release-shape sentence "One release at 2027-06-01 (following Gate 2 readiness 2027-05-14)" — stale; cascade debt to product-owner |
| `docs/01-press-release-prfaq.md` line 420 | "Gate 2 target 2027-05-14" — cascade debt to product-owner |
| `docs/03-architecture-design-sdd.md` v2.6.1 lines 1761–1762 | Confirmed-dispositions table — both rows superseded; cascade debt to architect |
| `docs/09-release-notes.md` lines 35, 341 | MS-13 target 2027-05-14 references — target date retired; cascade debt to sre |
| `docs/10-deployment-runbook.md` line 19 | Gate-2 MS-13 target 2027-05-14 reference — target date retired; cascade debt to sre |
| `docs/13-project-plan.md` v2.7.2 §3.3 | Gate conditions; CON-015 / DEP-11/12/13 latest-start dependency table (lines 303–306) |
| `docs/13-project-plan.md` v2.7.2 §3.5.5 | Definition-B re-enters after v1 launch; RISK-44 entry |
| `DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md` §3.4, §4.1, §4.2, §6 | Prior open items closed here (naming collision, MS-V1-LRG delegation, RISK-44 options) |
| `DECISIONS-2026-08-23-V1-V2-SPLIT.md` | Definition-A / Definition-B split; 2027-05-14 origin as a pre-split Gate-2 referent |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the decisions
of the human approver (Rathish) verbatim in §2. Analysis in §3 and the cascade verification in
§4 are coordinator work. The branch push and merge are the approver's action. Only Rathish is
the decision-maker.*
