# Document Review — Doc 03 Architecture / SDD v2.1.2 (Technical, Cycle 1)

```
Reviewed document: 03-architecture-design-sdd.md
Document version:  2.1.2
Review mode:       technical
document:       docs/03-architecture-design-sdd.md
version:        2.1.2
mode:           technical
cycle:          1
reviewer:       Samuel Oyelaran (engineer) — neutral reviewer assigned by coordinator
date:           2026-08-20
score:          95
critical:       0
high:           0
medium:         2
low:            2
verdict:        FAIL
```

---

## 1. Assignment scope

This cycle-1 review covers Doc 03 v2.1.2 and the newly registered ADR-021
(`docs/adr/ADR-021-verification-gates-counting.md`). ADRs are reviewed as part of the
Architecture document per CLAUDE.md's mode table. v2.1.2 claims to be a
registration-only patch with three hunks in Doc 03 and two header-note-only additions to
ADR-016 and ADR-017.

Reviewer constraint: score and list only; no edits to any document under review; no product
code.

---

## 2. Diff-scope check

The claimed scope was verified by running `git diff HEAD -- docs/03-architecture-design-sdd.md`
and `git diff HEAD -- docs/adr/ADR-016-enrolment-issuer-hierarchy.md` and
`git diff HEAD -- docs/adr/ADR-017-nullifier-derivation-and-adapters.md`.

**Doc 03 — three hunks only, confirmed:**

| Hunk | Location | Content |
|---|---|---|
| 1 | Header block | Version 2.1.1→2.1.2; Status Approved→In Review; Source SRS v2.2.0→v2.3.0; Last updated 2026-08-11→2026-08-20; changelog entry added |
| 2 | §12 first line | "twenty ADRs" → "twenty-one ADRs"; ADR-021 row appended |
| 3 | §16 next-increment note | Extended to include FR-121..FR-128 and OI-19/OI-20 as approver-pending inputs |

No other lines changed in Doc 03. ✓

**ADR-016 — header note only, confirmed:**

One `Amendment:` line added to the header block: "2026-08-20 — Phase-1 pilot rail now named:
India (Aadhaar offline paperless KYC), adapter class (c), per FR-121 and CON-015;
OI-04-PILOT closed (ADR-021)." No change to the Context, Decision, Relationship to ADR-003,
Consequences, or Alternatives rejected sections. ✓

**ADR-017 — header note only, confirmed:**

One `Amendment:` line added to the header block: "2026-08-20 — Phase-1 first-production
adapter named: India (Aadhaar offline paperless KYC), class (c) of §Per-class in-circuit
requirements, per FR-121 and CON-015; OI-04-PILOT closed (ADR-021)." No change to the
Context, Decision, Consequences, or Alternatives rejected sections. ✓

**ADR-021 — new file, entirely reviewed under §3 below.**

---

## 3. Scoring rubric

| Severity | Deduction |
|---|---|
| Critical | −10 |
| High | −7 |
| Medium | −2 |
| Low | −0.5 |

Starting score: 100. Deductions: 2×MEDIUM (−4) + 2×LOW (−1) → **95%**.

Pass bar: score ≥ 95% AND zero critical/high/medium issues.

---

## 4. ADR-021 substantive review

### 4a. Decision fidelity

Source used: `artifacts/status/DECISIONS-2026-08-20-PILOT-VERIFICATION.md` §4 (verbatim
approver quotes) and SRS v2.3.0 §4.40–§4.42 (FR-121..FR-128, CON-015, TD-12).

**Decision 1 — pilot jurisdiction sequence (FR-121, CON-015).**

ADR-021 records India/Aadhaar offline paperless KYC as Phase 1 (adapter class (c)); EU/eIDAS
2.0 as Phase 2 (France and Nordic countries); USA deferred to Phase 3 citing fragmented
state-by-state mDL landscape and the phone-home non-correlation conflict. CON-015 legal
opinion as a Gate-2 line item is recorded. OI-04-PILOT closure is noted. All match the
DECISIONS file verbatim. ✓

**Decision 2 — verification gates COUNTING, never joining (FR-122..FR-125).**

The architectural rule is stated verbatim. The two-tier structure (open tier, no
verification; counted actions requiring FR-069 enrolment nullifier) is correctly recorded.
OI-19 (invite-gating vs FR-020) is flagged as pending in the Decision 2 subsection AND in
the dedicated §"Open tensions" section; the ADR explicitly takes no position. ✓

**Decision 3 — on-device proof, nullifier-only, no stored identity (FR-126..FR-128).**

The ADR correctly confirms the existing C-03/SC-01 circuit as the mechanism ("not a new
component"), citing ADR-017 and `artifacts/reviews/SECURITY-RESCAN-SC-01-2026-08-10.md`.
The three normative additions are clearly separated:
- (a) Raw credential processed on-device and discarded, never transmitted — matches
  Decision 3's "never sent to the platform in any form" and FR-126. ✓
- (b) Duplicate detection by nullifier collision only — matches Decision 3's
  "NULLIFIER COLLISION" and FR-127. ✓
- (c) Subpoena test as a design invariant — states the test correctly, explains why
  encrypted storage fails it ("we promise not to"), matches Decision 3's exact language and
  FR-128. ✓

`stable_id_secret` correctly stated as a private in-circuit witness; trust-anchor
commitment correctly stated as a public input verified on-chain (ADR-017 SC-01 posture). ✓

**Decision 4 — two rejected designs (TD-12).**

Persistent referral graph rejected citing FR-105 (affirmative-quorum removal ruling), FR-111
(behavioural-analytics prohibition), and "sacred user space" principle. Verified: FR-105 and
FR-111 are real SRS v2.3.0 requirements with the cited semantics. The DECISIONS file cites
"standing rulings on affirmative-quorum removal, no behavioural surveillance, and sacred user
space" — ADR-021 maps these faithfully. ✓

Encrypted identity registry rejected citing subpoena risk, operator-override risk, and
platform-capture risk. The "we cannot deanonymise you" → "we promise not to" language
matches the DECISIONS file verbatim. ✓

The Decision 4 section correctly constrains: referral MAY gate open-tier entry; the
referral edge is verified then discarded, never stored. This is consistent with FR-125 and
OI-19's pending status. ✓

### 4b. On-device / nullifier-only posture (ADR-017 / SC-01 circuit, not a new component)

Verified in §Decision 3 "Confirmation of existing design":
- `stable_id_secret` is a private in-circuit witness that never leaves the device. ✓
- Trust-anchor commitment is a public input verified on-chain against the registered
  issuer's `trustAnchorHash`. ✓
- `prepareWitness` runs in the on-device WASM prover. ✓
- Per-adapter-class circuits and verifiers (`personhood_enrol_[class]`); no shared
  `CIRCUIT_ENROL` constant. ✓

All four points match ADR-017's SC-01 amendment and DES-069/DES-070 specifications. ✓

### 4c. Composition soundness

**FR-082 (Supporter tier):** ADR-021 states "no profile surface exists for a Supporter by
design. The verified status manifests **only** as the Supporter's nullifier being counted in
the aggregate strength number. No per-person public verified marker exists for a Supporter on
any surface." Verified against FR-082 ("no profile surface MUST exist for a Supporter") and
FR-124(b) in SRS v2.3.0. ✓

**FR-083 (Worker/Candidate tier):** ADR-021 states "verified marker is visible on the
member's own private account view and on the public participation record; that record already
exists by explicit informed consent at role-taking." Verified against FR-083 and FR-124(a)
in SRS v2.3.0. ✓

**FR-086 (no retroactive linkage):** ADR-021 states "no retroactive linkage between a
Supporter's verified status and any attributable record is permitted through any data the
system holds or emits." Verified against FR-086 in SRS v2.3.0 ("the system MUST NOT link
the anonymous Supporter identity to the public Worker or Candidate identity retroactively").
✓

**Strength number computable from nullifier-backed enrolments alone:** ADR-021 states
"Open-tier growth can never inflate it — open-tier participation has no path to any counted
total by construction, not by policy configuration." Consistent with FR-123 ("open-tier
(unverified) participation MUST NOT be added to or used to inflate the strength number by
any path or configuration"). ✓

### 4d. Neutrality on open tensions

**OI-19 (invite-gating vs FR-020):** ADR-021 explicitly states "This ADR takes no position
on OI-19 and records it as pending the approver" in §Decision 2, and records OI-19 as
"PENDING Rathish" in §Open tensions. ✓

**OI-20 (single-rail Phase-1 pilot vs FR-004 attestor plurality):** ADR-021 explicitly
states "This ADR takes no position and records OI-20 as live" in §Open tensions, marked
"PENDING Rathish." ✓

No position is taken on either open item. ✓

### 4e. Traceability

ADR-021 Traces field: `BR-006, BR-009, BR-017, FR-069, FR-070, FR-073, FR-082, FR-083,
FR-086, FR-121..FR-128, CON-015, TD-12`.

Each verified against SRS v2.3.0:
- BR-006 (one real unique human), BR-009 (identity must not expose identity), BR-017
  (Supporter anonymity unconditional): all real SRS requirements. ✓
- FR-069 (enrolment nullifier), FR-070 (adapter classes), FR-073 (GOV_EID restriction):
  all existing requirements referenced accurately. ✓
- FR-082, FR-083, FR-086: confirmed above in §4c. ✓
- FR-121..FR-128: all confirmed in SRS v2.3.0 §4.40–§4.42. ✓
- CON-015: confirmed in SRS v2.3.0 §9.1 as the legal-opinion Gate-2 dependency. ✓
- TD-12: referenced in SRS v2.3.0 §9.3 as "Decision 4 rejected designs." ✓

Doc 03 §12 ADR-021 row summary: "Verification gates COUNTING, never joining; on-device
nullifier-only identity posture; pilot sequence (Phase 1: India/Aadhaar offline KYC; Phase
2: EU/eIDAS 2.0; Phase 3: USA deferred); subpoena test as design invariant; two rejected
designs recorded..." Consistent with ADR-021 content. ✓

§16 posture: "directed by Rathish 2026-08-20; ADR-021 records the decision" and
OI-19/OI-20 flagged as pending. Consistent with ADR-021. ✓

No DES elements minted: ADR-021 §"DES coverage note" correctly defers DES elements for
FR-121..FR-128 to the next design increment. ✓

### 4f. ADR house style and convention

**Header fields:** Status, Date, Owner, Traces, Source present. ✓ The `Lineage` field is
an informational addition not in the standard template but consistent with the project's
practice of cross-referencing prior ADRs. Not a defect.

**Body sections:** Context, four numbered Decision sections, DES coverage note, Consequences
(Good / Bad accepted risk), Open tensions. ISO-8601 dates used throughout. No ID renumbered.

**Consequences section:** Comprehensive. Explicitly records Good consequences (manipulation-
resistant strength number, subpoena-test invariant, no identity storage required, Decision 3
confirms existing circuit, deterministic recovery). Explicitly records Bad / accepted risks
(open-tier account farms, CON-015 Gate-2 dependency, OI-19 and OI-20 live, Phase-3 mDL
requires a new ADR). ✓

**ADR-016 and ADR-017 header notes:** Both header notes are factually accurate — they record
the pilot rail naming and OI-04-PILOT closure, citing FR-121, CON-015, and ADR-021 as the
governing record. Neither note alters a decision body. ✓

---

## 5. Issues found

### ISS-01 (MEDIUM) — Preamble ADR count and range stale after ADR-021 registration

**Location:** Doc 03 preamble (immediately after the changelog block, before §1):
> "The **twenty** decision records in `docs/adr/ADR-001..ADR-020` are normative and are
> summarised in §12; where this document and an ADR disagree, the ADR wins and this document
> is the defect."

**Finding:** v2.1.2 added ADR-021 to §12 and updated the §12 lead sentence to "Status of
all **twenty-one** ADRs: **Accepted**." However the preamble was not updated; it still says
"twenty" and "ADR-001..ADR-020". This is an internal inconsistency between the preamble and
§12 introduced by v2.1.2. The same correction was applied in v2.0.2 (NI-03) when the count
moved from eighteen to twenty — the same fix was not applied here.

**Consequence:** A reader of the preamble is told ADR-021 is not normative; §12 says it is.
The preamble is the normative authority statement.

**Required fix:** Update the preamble to "twenty-one decision records in
`docs/adr/ADR-001..ADR-021`."

---

### ISS-02 (MEDIUM) — §1.1 body cites SRS v2.2.0 counts; Source field now says v2.3.0

**Location:** Doc 03 §1.1 Requirements overview:
> "The SRS **v2.2.0** defines 21 `BR`, 120 `FR` (118 active + 2 superseded; 101 Must), 28
> `NFR` (24 Must), 14 `CON`, and 27 `RISK`."

**Finding:** v2.1.2 updated the header Source field to "SRS-TRUMOCRACY v2.3.0" but left
the §1.1 body reference citing "SRS v2.2.0" with counts that predate v2.3.0. SRS v2.3.0
added FR-121..FR-128 (8 new Must FRs), BR-021 and BR-017 (already in v2.0.0 scope but
confirmed here), CON-015, and TD-12. The counts in §1.1 are now stale against the declared
source version. Before v2.1.2, Source said v2.2.0 and §1.1 said v2.2.0 — consistent.
v2.1.2 created this inconsistency by bumping the Source without updating the body citation.

**Consequence:** Readers are told the architecture is based on SRS v2.3.0 (header) but the
requirements overview gives v2.2.0 counts, understating the FR count and misrepresenting
the scope of Must requirements the architecture must satisfy.

**Required fix:** Update §1.1 to cite SRS v2.3.0 and revise the counts to match (including
the 8 new Must FRs from FR-121..FR-128 and the updated CON count with CON-015).

---

### ISS-03 (LOW) — §12 ADR-016 and ADR-017 rows not updated to note 2026-08-20 amendments

**Location:** Doc 03 §12 ADR index, rows for ADR-016 and ADR-017.

**Finding:** The 2026-08-20 amendments were added to the ADR-016 and ADR-017 header blocks
(pilot rail named, OI-04-PILOT closed), but the corresponding §12 summary rows were not
updated. This is inconsistent with the convention established by ISS-04 in v2.1.1, which
added amendment notes to the §12 rows for ADR-019 and ADR-020 (both received 2026-08-11
amendments and both §12 rows now carry "**amended 2026-08-11 (...)**" annotations). The
ADR-016 row carries no amendment annotation at all; the ADR-017 row notes only the
ADR-020 post-registration amendment (2026-08-11) but not the 2026-08-20 pilot rail naming.

**Consequence:** §12 is the single-source summary index for all ADRs. Readers consulting §12
will not learn that ADR-016 and ADR-017 had substantive amendments on 2026-08-20.

**Required fix:** Append "**amended 2026-08-20 (Phase-1 pilot rail named: India/Aadhaar
offline KYC; OI-04-PILOT closed — ADR-021)**" to the §12 rows for ADR-016 and ADR-017.

---

### ISS-04 (LOW) — ADR-021 lacks a standalone "Alternatives rejected" section

**Location:** ADR-021 body structure.

**Finding:** The ADR house style in this project uses a dedicated "## Alternatives rejected"
section (seen in ADR-016 and ADR-017). ADR-021 records two rejected designs — persistent
referral graph and encrypted identity registry — but embeds them within "Decision 4 — Two
rejected designs, recorded with rationale" rather than in a standalone section. The content
is present and complete; only the structural convention is not followed.

**Consequence:** Minor consistency gap; the content of alternatives-rejected is fully
recoverable from Decision 4. No design information is missing.

**Required fix:** Extract the two rejected-design subsections from Decision 4 into a
standalone "## Alternatives rejected" section (the Decision 4 section may retain a brief
pointer: "see Alternatives rejected below").

---

## 6. Summary

| ISS | Severity | Location | Finding |
|---|---|---|---|
| ISS-01 | MEDIUM | Doc 03 preamble | "twenty…ADR-001..ADR-020" stale; §12 correctly says twenty-one |
| ISS-02 | MEDIUM | Doc 03 §1.1 | Body cites SRS v2.2.0 counts; Source header now says v2.3.0 |
| ISS-03 | LOW | Doc 03 §12 rows 016 / 017 | 2026-08-20 amendment notes absent; inconsistent with ISS-04 precedent |
| ISS-04 | LOW | ADR-021 body | Missing standalone "## Alternatives rejected" section per house style |
| ADR-021 decision fidelity | — | ADR-021 §§Decision 1–4 | All four decisions faithfully recorded ✓ |
| ADR-021 on-device posture | — | ADR-021 §Decision 3 | C-03/SC-01 confirmed as existing mechanism; no new component ✓ |
| ADR-021 subpoena test | — | ADR-021 §Decision 3(c) | Invariant correctly stated; encrypted storage failure explained ✓ |
| ADR-021 composition soundness | — | ADR-021 §Decision 2 | FR-082/FR-083/FR-086 composition correct; strength number ✓ |
| ADR-021 OI-19/OI-20 neutrality | — | ADR-021 §Open tensions | Both PENDING, no position taken ✓ |
| ADR-021 traceability | — | ADR-021 Traces; §12 row; §16 | All IDs verified real; no DES minted ✓ |
| Diff-scope check | — | All three files | Three Doc 03 hunks + two ADR header notes only; bodies unchanged ✓ |
| New issues not listed above | — | — | None |

---

## 7. Verdict

**Score: 95% — FAIL**

The score of 95% meets the ≥95% bar. The zero-critical/high/medium condition fails: two
medium issues are found (ISS-01 preamble count stale; ISS-02 §1.1 SRS version/count
inconsistency), both introduced by v2.1.2's registration-only changes. Two low issues
are also found (ISS-03 §12 amendment-note gaps for ADR-016/ADR-017; ISS-04 ADR-021
style gap). The substantive content of ADR-021 is sound: all four decisions are faithfully
recorded, the on-device/nullifier-only posture correctly maps to the existing C-03/SC-01
circuit, the subpoena test is correctly stated, the composition of verified status onto
FR-082/FR-083/FR-086 is correct, and OI-19/OI-20 are held as PENDING with no position taken.
The failures are mechanical consistency errors in the Doc 03 wrapper, not design errors in
ADR-021 itself.

Per the review-and-rework loop protocol, this report is routed to the owning role (Ravi
Deshmukh, Principal Architect) for a rework to v2.1.3. The two medium issues are the
minimum required fixes; the two low issues SHOULD also be addressed in the same pass.
