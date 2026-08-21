# Budget Appetite & RISK-014 — Approver Rulings 2026-08-21

```
Date:            2026-08-21
Decisions:       Ruling 1 — Budget appetite (applied in substance on record-derived figures;
                            cited figures unverifiable — see §3)
                 Ruling 2 — RISK-014 contradiction (HELD — no referent in the repository;
                            see §4)
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Transmitted via: coordinator, 2026-08-21
Status:          Ruling 1: APPLIED on record-derived figures; approver confirmation of magnitude
                           and Gate-2-date referent requested
                 Ruling 2: HELD — no referent found; awaiting approver re-direction
Source:          docs/13-project-plan.md v2.0.2 (§8.3 budget table; §13.3 lever table;
                   RISK-18; RISK-19);
                 artifacts/status/GATE1-DECISION-2026-08-09.md §5 (B-01 lever acceptance);
                 docs/adr/ADR-006-coercion-resistance.md (5-of-7 threshold — DECIDED);
                 docs/03-architecture-design-sdd.md (DES-024; §5 diagram; failure-mode table);
                 docs/04-test-strategy-master-plan.md (4-of-7 insufficiency test);
                 docs/11-operations-runbook.md (PB-MACI 5-of-7);
                 docs/12-application-inventory.md (5-of-7)
```

---

## 1. Ruling 1 — verbatim (quoted exactly as transmitted)

> "BUDGET APPETITE. Accept the corrected cost estimate of ~$3.836M, but DO NOT reduce the
> appetite to match. Hold the appetite at ~$4.2M and reallocate the ~$294K difference to an
> explicit AUDIT-REMEDIATION CONTINGENCY line. Rationale to record: the re-plan itself flags
> the contingency as under-provisioned; this project's defect-discovery rate (eleven
> critical/high found in own work, a critical caught after a 98% review) makes an audit
> finding requiring a re-audit a live scenario, and a re-audit is the specific unbudgeted
> event. The saving is banked as headroom against that risk, not removed from the plan. Take
> the Gate 2 date move to 2027-03-15 as earned — it derives from audit sequencing and
> removing unnecessary critical-path events, not from cutting safety work."

---

## 2. Ruling 2 — verbatim (quoted exactly as transmitted)

> "RISK-014 CONTRADICTION. RISK-014 both states the MACI coordinator threshold is undecided
> and cites a chosen 5-of-7. Resolve the contradiction: confirm 5-of-7 as the decision (or
> state the real open question if it is genuinely undecided) and make the requirement
> internally consistent. If 5-of-7 stands, remove the 'undecided' language and record the
> decision with its rationale."

---

## 3. Ruling 1 — application note

**Ruling 1 is applied in substance on record-derived figures. The approver's cited figures
(~$3.836M and ~$294K) match no artifact in the repository. This discrepancy is surfaced
prominently here and requires the approver's confirmation before those magnitudes are treated
as authoritative.**

### 3.1 What the record shows

The relevant sources are **Doc 13 §8.3** (v2.0.2, approved 2026-08-21) and the **Gate-1
budget decision B-01** (`artifacts/status/GATE1-DECISION-2026-08-09.md §5`).

| Fact | Record value | Where |
|---|---|---|
| Three-pilot total cost (current) | USD 4,445,000 | Doc 13 §8.3 budget table |
| Appetite (`CON-007`) | USD 4,200,000 | Doc 13 §8.3; Doc 02 CON-007 |
| Variance (three-pilot basis) | ~−USD 245,000 (~−5.8%), zero contingency | Doc 13 §8.3 Variance row |
| L2 lever saving (one pilot, roll two post-launch) | saves ≈ USD 420,000 | Doc 13 §8.3 single-pilot-lever paragraph |
| L2 lever paragraph landing figure in v2.0.2 | "≈ USD 4.13M with ~1.7% contingency" | Doc 13 §8.3 — **stale figure** (see §3.2) |
| Gate-1 decision on budget | **L2 accepted** — "one pilot, roll two post-launch, ~USD 4.13M" | `GATE1-DECISION-2026-08-09.md §5` (B-01) |

### 3.2 The stale figure: why "≈ USD 4.13M" is wrong

The "≈ USD 4.13M with ~1.7% contingency" figure in the L2 lever paragraph was computed off
the **pre-correction three-pilot total of USD 4,550,000** (as of Gate 1, Doc 13 v1.0.0).
When the ADR-022/REC-1 ceremony correction landed in v2.0.0 (dropping the ceremony logistics
line from USD 120,000 to ~USD 15,000, a saving of **USD 105,000**), the three-pilot total
was corrected to **USD 4,445,000** but the downstream L2 lever calculation was **not
cascaded**. This is the same defect class flagged in the v2.0.0 cycle-1 review as
ISS-01..ISS-04 — a correction not propagated to all downstream references.

**Corrected accepted-basis (L2) calculation:**

| | |
|---|---|
| Corrected three-pilot total | USD 4,445,000 |
| L2 lever saving (two pilots deferred) | − USD 420,000 |
| **Corrected L2 cost** | **≈ USD 4,025,000** |
| Appetite (CON-007, unchanged) | USD 4,200,000 |
| **Headroom vs appetite** | **≈ USD 175,000 (~4.2% of appetite)** |

Cross-check: the prior "~1.7% contingency" figure corresponded to approximately USD 70,000
of headroom (on the pre-correction 4.13M figure); the uncascaded ceremony saving of USD
105,000 adds to that: 70,000 + 105,000 = **175,000** — arithmetically consistent.

### 3.3 Discrepancy: cited ~$3.836M and ~$294K are not in the repository

A repo-wide search finds **no figure of ~$3.836M or ~$294K** anywhere in any artifact. No
formal L2 re-estimate has been produced (Doc 13 §8.3 notes explicitly: "formal re-estimate
not yet produced"). The closest plausible derivation — subtracting a different ceremony saving
from a different base — does not reproduce either figure with the records available.

**These figures are recorded verbatim from the ruling as transmitted. The project-manager
does not reconcile silently.** The approver's confirmation of the intended magnitude is
requested. Until confirmed, the decision record and all corrections applied to Doc 13 v2.0.3
use the record-derived figures: cost ≈ **USD 4,025,000** and audit-remediation contingency
≈ **USD 175,000**.

### 3.4 What is applied in Doc 13 v2.0.3

Ruling 1 is applied in substance as follows:

| Action | Record-derived value applied |
|---|---|
| Appetite held at USD 4.2M (not reduced) | USD 4,200,000 — unchanged (`CON-007`) |
| L2 corrected cost basis (cascade correction) | ≈ USD 4,025,000 |
| Explicit named audit-remediation contingency | **≈ USD 175,000** — pending approver confirmation of magnitude |
| Approver's rationale | Recorded verbatim from the ruling (§8.3 and RISK-18/RISK-19 in Doc 13) |
| Cross-references updated | RISK-18 (budget cover added); RISK-19 (L2 basis stated; residual exposures noted) |
| §13.3 L2 row corrected | "≈ USD 4.03M; ≈ USD 175K (~4%) banked as audit-remediation contingency" |
| §11 re-plan log entry | v2.0.3 entry added |

### 3.5 Gate-2 date — no date changed; discrepancy recorded

The ruling states "Take the Gate 2 date move to 2027-03-15 as earned." **No such move exists
in the repository, and no date has been changed as a result of this ruling.**

Specifically:

- **Gate 2 (MS-13) is and remains 2027-05-14.** It moved from `CON-007`'s 2027-02-15 target
  at Doc 13 v1.0.0 (Gate-1 decision S-01, accepted 2026-08-09) and was explicitly held
  unchanged in the v2.0.x re-plan. The audits, completing 2027-03-12, were already the
  binding constraint before the ceremony correction.
- **2027-03-15 is the audit-remediation + registry-timelock start** (Doc 13 §3.4 critical
  path — the earliest point at which audit-remediation work and the 30-day registry timelock
  can begin after audits complete 2027-03-12). This date has **never been recorded as a
  Gate-2 date** in any artifact.
- No milestone date in Doc 13 or any other document has been changed as a result of Ruling 1.

The endorsement "earned — it derives from audit sequencing and removing unnecessary
critical-path events, not from cutting safety work" is recorded as applying to the
evidence-based **2027-05-14 Gate-2 date** — the date already in the plan and earned by
exactly the logic the ruling describes (audit-paced, not ceremony-paced; ceremonies removed
from the critical path per ADR-022/REC-1 but audits remain the binding constraint at
2027-03-12).

**The approver's confirmation that 2027-05-14 (not 2027-03-15) was the intended Gate-2
referent is requested.** If the approver intended 2027-03-15 as a Gate-2 date, that would
represent a 9-week advance on the evidence-based date, which conflicts with the audit
sequence (audits complete 2027-03-12 → remediation → re-review → registry timelock → MS-12
DKG rehearsal) and would require a re-plan for the approver's review before any date changes.

---

## 4. Ruling 2 — HELD: no referent

**Ruling 2 is HELD. No document was edited. No architect was dispatched. No technical-rubric
document review was run.** The reasons are set out below.

### 4.1 The ID does not exist in the scheme used by this repository

The repository uses **two-digit RISK IDs** (`RISK-##`). The register of record is Doc 13 §6
and Doc 02 §10; the live range is `RISK-01`..`RISK-30`. There is no `RISK-014` (four digits).

### 4.2 RISK-14 is regulatory reclassification — no MACI content

The closest match by number, **RISK-14**, reads:

> "**Regulatory reclassification** — a regulator deems the platform an electoral body, a
> political-finance vehicle, or a controller of political-opinion data." — Owner: Sofia Marchetti.

RISK-14 contains no MACI coordinator threshold language, no 5-of-7 reference, and no
"undecided" language anywhere.

### 4.3 The MACI coordinator threshold is decided — ADR-006

The MACI coordinator threshold is decided in **`docs/adr/ADR-006-coercion-resistance.md`**:

> "Decision: an n-of-m threshold coordinator committee ... with a **5-of-7 threshold**
> required to compute the tally"

Rationale recorded in ADR-006: ≥ 7 independent operators across different legal
jurisdictions and competing parties; per-election resampling; slashable liveness.
The ADR further records the over-provision reasoning: "over-provision (m=7, t=5)".

### 4.4 Every downstream citation is consistent at 5-of-7 with no undecided language

| Site | Reference |
|---|---|
| Doc 03 DES-024 | 5-of-7 threshold coordinator committee |
| Doc 03 §5 architecture diagram | 5-of-7 |
| Doc 03 failure-mode table | 5-of-7 |
| Doc 04 | 4-of-7 insufficiency test (references 5-of-7 as the decided baseline) |
| Doc 11 PB-MACI | 5-of-7 |
| Doc 12 | 5-of-7 |
| Doc 13 MS-12 | "MACI 5-of-7 committee constituted" |
| Doc 13 RISK-07 | "threshold committee spanning jurisdictions so no single court order reaches 5-of-7" |
| Doc 13 RISK-20 | MACI Phase-3 engineering complexity |
| ADR-013 | 5-of-7 |

A repo-wide sweep for "undecided", "TBD", and "open" near MACI threshold language found
**no matches**. The only open items in the vicinity (OI-01/OI-05/OI-08/OI-10) concern
unrelated governance constants, not the committee threshold.

### 4.5 There is no contradiction to resolve

Because `RISK-014` does not exist, `RISK-14` contains no MACI content, and the threshold is
consistently decided at 5-of-7 with recorded rationale across all documents, **there is no
contradiction to resolve and no document to edit.**

### 4.6 Awaiting approver re-direction

This ruling is recorded as HELD pending a re-direction with a specific referent. Possible
re-directions that could make the ruling actionable:

- A **different risk ID** (e.g., RISK-07 mentions the 5-of-7 threshold in its state-compulsion
  mitigation; RISK-20 concerns MACI Phase-3 complexity — if either carries language the
  approver read as "undecided", the PM will investigate on re-direction)
- A **different document or section** (e.g., a backlog story, a Doc 02 FR, a Doc 03 section)
- A **different threshold or coordinator construct** (if the approver was referring to something
  other than the n-of-m voting-committee threshold)

No action will be taken on Ruling 2 until the approver re-directs with a specific, identifiable
referent.

---

## 5. Sources

| Source | Role in this record |
|---|---|
| `docs/13-project-plan.md` v2.0.2 | Budget table; L2 lever paragraph; RISK-18; RISK-19; §3.4 critical path dates |
| `artifacts/status/GATE1-DECISION-2026-08-09.md §5` | B-01 lever acceptance; "~USD 4.13M / ~1.7%" (stale, now corrected in Doc 13 v2.0.3) |
| `docs/adr/ADR-006-coercion-resistance.md` | MACI threshold: 5-of-7 DECIDED with rationale and over-provision reasoning |
| `docs/03-architecture-design-sdd.md` | DES-024; §5 diagram; failure-mode table — all at 5-of-7 |
| `docs/04-test-strategy-master-plan.md` | 4-of-7 insufficiency test (references 5-of-7 baseline) |
| `docs/11-operations-runbook.md` | PB-MACI 5-of-7 |
| `docs/12-application-inventory.md` | 5-of-7 |
| Repo-wide sweep for "undecided"/"TBD"/"open" near threshold language | No matches for MACI committee threshold |
| `DECISIONS-2026-08-21-CEREMONY-PROOFSYSTEM.md` | Format reference |

---

*This record is written by the project-manager (Ana-Maria Petrescu) and reflects the
decisions of the human approver (Rathish) verbatim. The project-manager does not decide
open items. Only Rathish is the decision-maker.*

*DISCREPANCY TO SURFACE: The cited figures in Ruling 1 (~$3.836M and ~$294K) match no
artifact in the repository. Record-derived figures (≈ USD 4,025,000 cost / ≈ USD 175,000
contingency) have been applied. The approver's confirmation of (a) the intended magnitude
and (b) that 2027-05-14 (not 2027-03-15) is the intended Gate-2 referent is requested
before these can be treated as authoritative.*
