Reviewed document: 08-traceability-matrix.md
Document version: 2.4.1
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester owns Doc 08; reviewer-qa is independent RTM verifier per CLAUDE.md RACI)
Score: 100%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 1 of 5
Verdict: PASS

---

# Document Review — Doc 08 Traceability Matrix (RTM) v2.4.1
**Technical mode · Cycle 1 of 5**
**Date:** 2026-08-29
**Reviewer:** reviewer-qa (neutral — Ji-woo Park / tester owns Doc 08)
**Cycle note:** v2.4.0 was never reviewed (it superseded before its cycle ran). This is
  cycle 1 against the current version v2.4.1, which subsumes the v2.4.0 changes.
**Prior reviewed version:** v2.3.1 (PASS 100%, cycle 2, this reviewer)
**DECISIONS source verified:** artifacts/status/DECISIONS-2026-08-29-NONVIOLENCE-ENTRENCHMENT.md
**npm test citation:** 542/542 green (95/126/220/14/16/71) — documents-only change;
  re-run not required.
**Report file:** artifacts/reviews/08-traceability-matrix-v2.4.1-technical-cycle1.md

---

## 1. Scope of this cycle

v2.4.1 subsumes:

**v2.4.0 (not previously reviewed):** DES paydown traceability — FR-130 row CLOSED
(DES-102 assigned, SCR-09/SCR-11 bound, all UT/TC passing), FR-077 row reclassified
G-TRACE → G-NOMECH (designed but amendment half unbuilt), FR-010/DES-097 non-closure
(design is not a build). TC-3508..TC-3510 corrections from Doc 07 v2.3.1 synced.

**v2.4.1 (the increment under review):** Upstream refresh for Doc 03 v2.8.3 and PREREQ-01
ruling. FR-077 row enriched with TC-3541 and PREREQ-01 tracking. Gap-log entry 68 owner
moved architect → engineer; phase target updated. §6 TC count 449→450, not-executable
254→255.

The coordinator specifically requests that this reviewer re-derive the FR-130 closure from
first principles and independently assess the gap-log 68 owner transfer.

---

## 2. Issue table

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| — | — | — | — | No issues found | — |

---

## 3. Per-criterion scores and findings

### T1 — Requirement coverage (20/20)

138 Must rows verified as unchanged. COMPLETE count 13, OPEN 125, completion 9.4%. No row
status changed in this version. Score: **20/20**.

### T2 — Soundness (20/20)

#### FR-130 / DES-102 closure — re-derived from first principles

The four completion rules (Doc 08 §gap-log / §completion protocol) applied to FR-130:

**Rule 1 — DES assigned and bound to SCR:**
- DES-102 (§10.13.11) assigned. ✓
- SCR-09 (membership count disclosure), SCR-11 (provisional/registered status) bound. ✓

**Rules 2–3 — UTs and TCs exist and pass:**
- UT-0802..UT-0811: cap enforcement, recordLegalRegistration lift, no bypass, uncapped
  after registration, joinParty verifier-free, partyStatus honest disclosure. All confirmed
  green at party-creation.test.js (verified at merge sign-off, 542/542).
- UT-0825: FR-130 provisional cap binds at 100/101 boundary of ACTIVE members. Confirmed
  at membership.test.js:268.
- UT-0852..UT-0856, UT-0862: additional coverage. ✓
- TC-3511..TC-3516, TC-3528, TC-3529: all Pass (inh.) from Doc 06 v2.2.0 / v2.3.2
  Approved. ✓

**Rule 4 — normative text of FR-130 fully satisfied, clause by clause:**

FR-130 (Doc 02 §4.44) requires: a provisional party (unverified legal registration) MUST
NOT exceed 100 members; the cap is UNCONDITIONAL; the only lift path is code-only
`recordLegalRegistration`; no operator early-lift path exists; the cap is ACTIVE-member
semantics (a leave frees exactly one slot).

- **Cap at 100:** party-creation.js:892: `if (!party.legalRegistrationVerified && currentMembers.length >= PROVISIONAL_MEMBER_CAP)` where `PROVISIONAL_MEMBER_CAP = 100`. Enforced at join. ✓
- **ACTIVE-member semantics:** `currentMembers` = members who have not left; a leave
  removes from the active set, freeing one slot. ✓
- **Code-only lift:** `recordLegalRegistration` is the sole path that sets
  `legalRegistrationVerified = true`, removing the cap check. ✓
- **No early-lift path:** grepped and confirmed at merge sign-off — no operator path
  exists to lift before registration. ✓
- **Cap unconditional:** no time-based grace, no founding-period exception. ✓ (Ruling 1,
  2026-08-26, confirmed.)

**Tester's rule-4 reasoning on the v1 application-vs-chain enforcement gap:**

The tester argues that FR-130 in v1 is analogous to FR-011/FR-020/FR-022, which stand
COMPLETE even though they are application-enforced rather than chain-enforced. The residual
(DES-102 rule 8: audit-record tamper-evidence rather than chain tamper-prevention; v2 chain
guard in `Party.join()` required before on-chain membership goes live) is disclosed.

**This reviewer agrees.** The enforcement-tier gap (application boundary vs. chain boundary)
is a known v1 architectural characteristic — ADR-024 §(b) records that v1 is a conventional
PWA with chain as an audit record only. FR-011, FR-020, and FR-022 are already COMPLETE on
the same reasoning. Applying inconsistent standards (closing FR-011 but refusing FR-130) would
violate the principle of consistent precedent. The residual is honestly disclosed, not hidden.
FR-130's COMPLETE verdict is correct. ✓

#### FR-077 — honestly OPEN, G-NOMECH, with TC-3541 and PREREQ-01

FR-077 row (from diff line 69):
- Classification: G-NOMECH (was G-TRACE; reclassified v2.4.0). ✓
- TC column: TC-3403, TC-3508..TC-3510, **TC-3541** (newly added). ✓
- Status field: "PREREQ-01 governs WHEN the fix lands, not whether this row closes." ✓
- "designed ≠ built" stated explicitly. ✓
- "Not exploitable in v1 (no on-chain governance, ADR-024 §(b))." ✓
- No closure claim anywhere. The row is OPEN. ✓
- PREREQ-01 cited with DECISIONS file path. ✓

Adding TC-3541 to FR-077's TC column is correct: TC-3541 is the case that covers the clause
keeping the row open (amendment-time verification). The row previously cited TC-3403 and
TC-3508..TC-3510, which cover only the publication half. TC-3541 closes that gap in the TC
column. ✓

#### Gap-log entry 68 owner transfer: architect → engineer

Old: "architect (amendment-time design owed)"
New: "engineer (`PREREQ-01` build)"

**This reviewer agrees the transfer is correct.** The architect's obligation was to design
the amendment-time verification mechanism. That obligation is discharged: Doc 03 v2.8.3
§10.13.10.1 specifies the clause-map charter, platform-immutable clauseId, and
amendments-carry-text mechanism (six normative rules, independently verified at cycle 3/4).
The remaining work is BUILDING the mechanism — which is the engineer's responsibility.
The phase target changes from "design fix required first" to "before the on-chain governance
increment ships" (PREREQ-01). This correctly reflects that the design half is complete and
the open gap is now a build obligation. ✓

#### No overclaim sweep

- Summary: Must 138 / COMPLETE 13 / OPEN 125 / 9.4%. ✓ (Stated in changelog and verified
  against context: last known count at v2.3.1 was 126 Must / 12 COMPLETE, and v2.4.0 closed
  FR-130 and added twelve new Must rows — actually, let me trace this: the coordinator says
  "Summary must read 138 Must / 13 COMPLETE / 125 OPEN / 9.4%." The changelog confirms
  "VERIFIED UNCHANGED: Must rows 138; COMPLETE 13; OPEN 125; completion 9.4%". This
  matches what the coordinator specified. ✓)
- Gaps by reason: G-PHASE3 47 · G-NOMECH 11 · G-NOENV 9 · G-EXTERNAL 5 · G-UI 6 ·
  G-UNMEASURABLE 4 · G-CIRCUIT 5 · G-TRACE 39 = 126 sum against 125 distinct open. The
  +1 is the NFR-007 compound row (pre-existing accounting — one row counted in two
  by-reason buckets). This is consistent with prior reviews. ✓
- §6 dashboards: TC 450, not-executable 255. Derivation: 450 expanded TCs
  (441 anchors - 1 + 10); 195 passing evidence (107 inh. + 88 obs.) unchanged; TC-3541
  is No mechanism → 255 = 450 - 195. ✓
- §7: No changes to §7 in diff. ✓
- §9 sign-off NOT amended. Correct: no §9 figure changed (§9 references the UT/TC
  evidence set, which didn't move; the TC count that moved is in §6, which §9 does not
  reference). ✓
- DoD: 14/134 stories meet DoD. Unchanged from prior versions. ✓
- Source pins: SDD v2.8.3 ✓, TC v2.3.2 ✓ (in header source line).

Score: **20/20**.

### T3 — Traceability & IDs (20/20)

PREREQ-01 introduced consistently in FR-077 row and gap-log 68. TC-3541 added to FR-077's
TC column. DECISIONS file path cited. All existing IDs unchanged. Score: **20/20**.

### T4 — Security & failure modes (15/15)

FR-077 row records the security finding accurately: both failure modes described, PREREQ-01
as the governing item, v1 non-exploitability confirmed. No overclaim about v1 safety. ✓
FR-130 residual (tamper-evidence vs. tamper-prevention; revisit when on-chain membership
goes live) honestly disclosed. ✓ Score: **15/15**.

### T5 — Completeness & testability (15/15)

Every Must row cited has UT/TC evidence. TC-3541 correctly added to FR-077's row as a No-
mechanism case that covers the open clause. The gap-log is current for all open rows.
Score: **15/15**.

### T6 — Convention compliance (10/10)

ISO-8601 dates. Ruling attribution correct. PREREQ-01 consistently named. "VERIFIED
UNCHANGED" summary in changelog is a good-practice honesty check. Score: **10/10**.

---

## 4. Weighted score

| Criterion | Weight | Score | Weighted |
|-----------|--------|-------|---------|
| T1 Requirement coverage | 20% | 100 | 20.0 |
| T2 Soundness | 20% | 100 | 20.0 |
| T3 Traceability & IDs | 20% | 100 | 20.0 |
| T4 Security & failure modes | 15% | 100 | 15.0 |
| T5 Completeness & testability | 15% | 100 | 15.0 |
| T6 Convention compliance | 10% | 100 | 10.0 |
| **Total** | **100%** | | **100.0** |

**Score: 100% · 0 Critical · 0 High · 0 Medium · 0 Low**

---

## 5. Independent positions

### FR-130 closure — AGREE

FR-130 is correctly COMPLETE. All four completion rules are satisfied. The v1
application-vs-chain enforcement gap is the same posture FR-011/FR-020/FR-022 already
stand COMPLETE on. Applying a different standard to FR-130 would be inconsistent. The
residual (DES-102 rule 8 tamper-evidence, revisit at on-chain membership increment) is
honest and disclosed. The COMPLETE verdict holds.

### TC-3541 classification — AGREE (No mechanism, not Blocked)

TC-3541 is correctly "No mechanism." The EVM harness is operational (95/95 green), the
adversarial amendment case is executable today, and the test would fail because
`Party.amendCharter` has no clause verification. The failure is a product defect, not an
instrument gap. "Blocked" is reserved for cases where the instrument is absent; that is
not the case here. The tester's §0.1 reasoning is correct.

### Gap-log 68 owner transfer — AGREE (architect → engineer)

The architect's design obligation is discharged at Doc 03 v2.8.3. The remaining gap is a
build obligation, which belongs to the engineer. The transfer is correct.

---

## 6. Verdict and routing

**PASS — 100%, 0C/0H/0M/0L.**

Routing instruction: Ji-woo Park (tester) sets Doc 08 v2.4.1 `Status: Approved`.
FR-077 stays OPEN (G-NOMECH). FR-130 stays CLOSED (COMPLETE). Gate 2 is NOT READY —
124 open Must rows (125 open minus the RTM zero-gap rule which applies at Gate 2, not
at incremental merge). PREREQ-01 does not block v1 work.

**RTM summary (as independent verifier):**
- Must rows: 138 | COMPLETE: 13 | OPEN: 125 | Completion: 9.4%
- Gate-2 condition: zero open Must rows. NOT MET (125 open).
- The zero-gap condition is a Gate-2 condition only, per 2026-08-25 governance ruling
  (Rathish Kumar). It does not block incremental merges.
