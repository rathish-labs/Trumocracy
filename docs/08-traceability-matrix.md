# Requirements Traceability Matrix (RTM) — Trumocracy

```
Document ID:   RTM-TRUMOCRACY
Version:       2.1.0
Status:        Approved (review loop, cycle 1 PASS 100% — artifacts/reviews/08-traceability-matrix-v2.1.0-technical-cycle1.md)
Owner:         Ji-woo Park — Test Lead (tester, author)
Verifier:      reviewer-qa (independent) — Accountable for "RTM complete (zero gaps)" per CLAUDE.md RACI
Source:        SRS-TRUMOCRACY v2.2.0 · SDD-TRUMOCRACY v2.1.1 §5.2 · BKLG-TRUMOCRACY v2.0.1 ·
               CODE-TRUMOCRACY v1.0.0 · MTP-TRUMOCRACY v1.0.1 · TC-TRUMOCRACY v2.1.0
Last updated:  2026-08-12
Changelog:     v2.1.0 (2026-08-12) — TC-TRUMOCRACY v2.1.0 sync: FR-117 TC column += TC-3467 (publishAuditRef vacancy-immediate citizen fallback) and TC-3468 (issuer-onboarding coordination vacancy-immediate citizen fallback); FR-119 TC column += TC-3469 (Open Layer vote attempts GovernanceConstants setter to lower Guarded Layer constant; reverts at anti-circularity classification check). §6 coverage dashboard TC total 375→378 (127 passing-evidence unchanged; 248→251 not executed or not executable). Source pin TC-TRUMOCRACY v2.0.1→v2.1.0.
               v2.0.0 (2026-08-11) — 47 new Must FR rows added (FR-074..FR-120, SRS v2.2.0) to §3.1; 2 new Must NFR rows (NFR-027, NFR-028) added to §3.2; FR-062 row annotated as superseded by FR-082..FR-086 per SRS v2.2.0; FR-046 row annotated as superseded by FR-094/FR-095 per SRS v2.2.0; summary totals recomputed (125 Must rows, 12 COMPLETE, 113 OPEN — 9.6%); §6 coverage dashboard updated; §7 gap log extended to 113 entries; Gate-2 verdict updated; source pins bumped to SRS v2.2.0, SDD v2.1.1, BKLG v2.0.1, TC v2.0.0.
               v2.0.1 (2026-08-12) — cycle-1 technical review rework (08-traceability-matrix-v2.0.0-technical-cycle1.md): ISS-01 Critical: TC-3460..TC-3464 added to FR-119 TC column; ISS-02 High: TC-3454 moved from FR-109 row to FR-119 row; TC-3456 removed from FR-110 row (now FR-119 only); ISS-03 Medium: §9 gate verdict table updated to 125/12/113; stale sentence fixed; ISS-04 Medium: §6 passing-evidence count corrected to 127 (55 inh. + 72 obs.) per Doc 07 §2 footer; §6 TC count convention note updated; ISS-05 Low: subsumed by ISS-03. Source pins: Doc 04 → v1.0.1, Doc 07 → v2.0.1.
               v1.1.4 (2026-08-10) — §6 Test cases dashboard corrected to expanded-convention total 308 (pre-existing drift; 299 row anchors + 9 from collapsed TC-3200–TC-3209 range); breakdown corrected to 148 with evidence / 160 not executable; TC-count note added; SRS source pin bumped to v1.1.1; BKLG source pin bumped to v1.1.2.
               v1.1.3 (2026-08-10) — FR-069/FR-070 rows updated with TC-3343..TC-3345 (SC-01 trust-anchor negatives); FR-069 description updated to 5 in-circuit checks; Doc 03 source pin bumped to v1.1.2; TC count dashboard 298→301.
               v1.1.2 (2026-08-10) — Screens dashboard corrected 20→23 (SCR-21/22/23 from CR-v1.1.0; cycle-2 NEW-ISS-01); TC source pin bumped to v1.1.1 (NEW-ISS-02).
               v1.1.1 (2026-08-10) — FR-063 evidence corrected (obs. → not run; cycle-1 ISS-01); Risks dashboard updated 16→19 total, 12→15 gaps (ISS-02); §7 preamble documents gap-log renumbering (ISS-03); Doc 03 source pin bumped to v1.1.1.
               v1.1.0 (2026-08-10) — FR-062..073 rows added; DES-064..086 cells filled; FR-011, FR-035 converted to COMPLETE; Change-9 coverage note added; gap log updated to 64 entries.
```

> **Based on:** Bidirectional RTM (ISO/IEC/IEEE 29148 traceability). **Living.** **Verified at each gate.**
> **Chain:** `BR → FR/NFR → DES (+ADR) → SCR → EP ▸ FE ▸ US → UT/TC → Status`
> _A blank cell in a Must row is a documentation defect that **blocks the gate**._

---

# SUMMARY — read this first

| Measure | Count |
|---|---|
| Requirement rows in this matrix | **148** (125 Must + 23 Should/Could) |
| **Must rows (gating)** | **125** — 101 Must FR + 24 Must NFR |
| **Must rows COMPLETE** | **12** |
| **Must rows OPEN (gap)** | **113** |
| Must-row completion | **9.6%** |
| Non-Must rows complete / gap | 3 / 20 |
| Total rows complete / gap | 15 / 133 |

### Must-row gaps by primary reason

| Code | Reason | Must rows | Closes in |
|---|---|---|---|
| `G-PHASE3` | The capability is **not implemented** in this drop — MACI, Elections, Recall, Treasury, recovery, relayer, feedback scorer, debate lifecycle, membership nullifier; 8 new Must FRs from CR-v1.1.0; 9 Must FRs with DES from v2.2.0 (FR-112..FR-120); NFR-027 and NFR-028 | **36** | Phase 3 |
| `G-NOMECH` | The design has **no mechanism** for the stated guarantee — the requirement cannot be tested because nothing implements it | **10** | Design fix required first |
| `G-NOENV` | Needs an **environment or instrument that does not exist** — devnet/testnet/staging, CI scanner, device lab | **9** | Phase 2–3 |
| `G-EXTERNAL` | Needs **external evidence** — independent audit, legal review, usability study, reproducible-build attestation | **5** | Phase 2–3 (MS-09/MS-10) |
| `G-UI` | Needs the **client surface** built and verified — accessibility, localisation, plain language, jargon scan, ballot-direction audit (FR-063) | **6** | Phase 3 |
| `G-UNMEASURABLE` | **Not falsifiable or not measurable as written** — needs a requirement restatement, not more testing | **4** | Requires a product/architecture decision |
| `G-CIRCUIT` | Depends on **compiled circuits and real verifiers**; today enforced by `MockVerifierAlwaysTrue` (Doc 06 §7.1–7.2); FR-069/FR-070 also need compiled circuits | **5** | Phase 2 ceremonies |
| `G-TRACE` | The **chain itself is broken** — no `DES` in Doc 03 §5.2 (or no `US` in Doc 05), independently of any test result. **v1.1.0: All 15 pre-existing DES gaps closed (DES-064..086).** v2.0.0: FR-074..FR-111 (38 rows) have no DES — Doc 03 §16 records this as deliberate next-increment phasing, not an error. NFR-007 (no story/NF-backlog item) retains G-TRACE aspect. | **39** (1 NFR-007 + 38 FR-074..FR-111) | Immediate: NFR-007; Design phase (next increment): FR-074..FR-111 |
| | **Total** | **114** | |

_Note: Total by-reason count (114) exceeds Must-rows OPEN (113) by 1 because NFR-007 carries both G-NOENV (environment) and G-TRACE (no story) — it is counted in G-TRACE above and appears in the G-NOENV 9-count as well. This pre-existing compound classification does not affect the row count (113 distinct open Must rows)._

### Chain-integrity findings (independent of test status)

- ~~**6 Must FRs have no `DES` in SDD §5.2:** `FR-010`, `FR-011`, `FR-035`, `FR-039`, `FR-056`, `FR-060`.~~ **v1.1.0: ALL CLOSED** — DES-073..077 assigned and DES-040 Satisfies column extended by architect. FR-011 and FR-035 now COMPLETE; others remain open for non-trace reasons.
- ~~**9 Must NFRs have no `DES` in SDD §5.2:** `NFR-006`, `NFR-009`, `NFR-010`, `NFR-011`, `NFR-012`, `NFR-013`, `NFR-015`, `NFR-023`, `NFR-024`.~~ **v1.1.0: ALL CLOSED** — DES-078..086 assigned by architect. Rows remain open for their non-trace reasons.
- **1 Must NFR has no story and no backlog item:** `NFR-007` (reliability/availability).
- **FR-011 and FR-035 are now COMPLETE (v1.1.0).** DES-074 and DES-075 assigned by architect; their tests already passed; the full chain now closes. Recorded as 2 rows converted from open to complete this session.
- **v2.0.0: 38 new Must FRs (FR-074..FR-111) have no `DES` in SDD §5.2.** This is a recorded, deliberate decision (Doc 03 §16 "Next-increment scope") — full DES coverage of FR-074..FR-111 is the next-increment design work. The 38 rows carry G-TRACE as the primary gap code. They are not a documentation error; they are a phasing record.

### Gate-2 verdict — one paragraph, blunt

**Gate 2 cannot be approved today, and it is further from approval than it was at v1.1.4.** Of 125 gating Must rows, **12 close and 113
do not** — a 9.6% completion rate against a gate criterion that requires **zero** open Must rows.
The picture did not worsen because of regressions; it worsened because 49 new Must rows from SRS v2.2.0 were honestly added, all of them open, none of them fabricated as complete.
The 113 open rows break down as follows: **38 rows carry G-TRACE** (FR-074..FR-111 have no DES yet — Doc 03 §16 deliberate phasing — and no implementation); **36 rows carry G-PHASE3** (capability designed or planned but not built — MACI, Elections, Recall, Treasury, recovery, steward organisation, trust-anchor lifecycle governance, v2.0 governance stores); **10 rows carry G-NOMECH** (no mechanism for the guarantee at all — per-region attestor cap, dwell period, residency cooldown, churn limit, open-ballot flag freeze, source independence, display-filtering register); **4 rows carry G-UNMEASURABLE** (requirements not falsifiable as written — `FR-002`'s "better than chance", `NFR-001`'s unset collusion bound, `NFR-004`'s duplicate rate); **9 rows carry G-NOENV**, **6 carry G-UI**, **5 carry G-EXTERNAL**, and **5 carry G-CIRCUIT**. Nothing has been audited, no environment exists, no rollback has been drilled, every proof is produced by a mock verifier, and the entire v2.0 governance architecture (three-tier amendment, steward organisation, trust-anchor lifecycle, transparency dashboard) exists only in design documents. Doc 04's Gate-2 blockers `OPEN-01`, `OPEN-02`, `OPEN-03`, and `OPEN-11` remain open. **The correct reading of this matrix is that Trumocracy is at the end of Phase 1 and Gate 2 belongs after Phase 3, exactly where Doc 13 put it (MS-13, 2027-05-14).** Anyone presenting this drop as launch-ready would be presenting a false green light.

---

## 1. Purpose & how to read

This is the single place the whole chain is verified. One row per requirement. A row is **COMPLETE**
only when **all four** of the following hold; otherwise it is **OPEN (gap)** and the reason is named.

| # | Completion rule |
|---|---|
| 1 | **Every link exists** — the row has a `BR`, a `DES` in Doc 03 §5.2 (and `SCR` where the requirement has UI), a `US` in Doc 05, and at least one `TC` in Doc 07. |
| 2 | **The `TC` has a real implementing test** against real product code — a file path and a `UT-####` that exist in the repository. |
| 3 | **That test passes**, either observed by the tester on 2026-08-09 or recorded green in Doc 06 §3/§5 (the contract suite; see §1.1). |
| 4 | **The test verifies the requirement's whole stated guarantee**, not a fragment of it. Where a mock verifier stands in for a circuit, the row may still complete **only if** the guarantee does not depend on proof soundness — "no approval step exists" is independent of the proof; "one credential per human" is not. |

**Nothing in this matrix has been marked complete to make a number look better.** Where a link is
missing, the cell says **none**. Where a mechanism is absent, the status says **No mechanism**. A
recorded gap is this document working correctly; a fabricated link would put a false green light in
front of a Gate-2 approver, which is the worst outcome available here.

### 1.1 Evidence basis

| Source of "passes" | Scope | Basis |
|---|---|---|
| **Observed 2026-08-09** | `packages/protocol` 82/82 · `services/indexer` 16/16 · `packages/sdk` 124/124 = **222 tests** | Executed by the tester this session (Doc 07 §0.2) |
| **Inherited** | `packages/contracts` (`UT-0100…0125`, `UT-0200…0230`, `UT-0300…0361`, `UT-0400…0420`, `UT-0600…0612`) | Recorded green in Doc 06 §3/§5; the suite takes ~5 min and was **not executed this session** |
| **Not executed** | `apps/web` (`UT-0700…0742`) | Suite exists; not run this session; **no row is marked complete on its strength alone** |
| **Absent** | `packages/circuits` | No suite — circuits are not compiled (Doc 06 §7.2) |

## 2. ID scheme (restated)

`BR-###` business · `FR-###` functional · `NFR-###` non-functional (Doc 02) · `CON-###` constraint ·
`RISK-##` risk (Doc 02 §10, register of record Doc 13 §6) · `ADR-###` / `DES-###` design (Doc 03) ·
`SCR-##` screen · `EP-##` / `FE-###` / `US-####` backlog (Doc 05) · `UT-####` unit test (Doc 06) ·
`TC-####` test case (Doc 07) · `REF-##` production learning (none exist at v1.0.0).

---

## 3. Forward trace (requirement → everything)

### 3.1 Must FRs — the 101 gating functional rows

Legend: **✅ COMPLETE** · **☐ OPEN** (reason code in the last column). `DES` cells reading **none** indicate either a Doc 03 §5.2 gap (existing rows, now all closed per v1.1.0) or deliberate next-increment phasing (FR-074..FR-111, per Doc 03 §16).

| BR | FR | DES (+ADR) | SCR | EP ▸ FE ▸ US | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|---|
| BR-006 | **FR-001** one credential per human | DES-001 · ADR-003 | SCR-02 | EP-01 ▸ FE-001 ▸ US-0001 | TC-0001, TC-1001, TC-1002, TC-1003, TC-2600, TC-2601 | UT-0104, UT-0105, UT-0109, UT-0109b | ☐ **G-CIRCUIT** — namespace collision passes, but the personhood proof is a mock and ADR-003's cross-*identifier-type* residual leaves a second enrolment possible (TC-2601, No mechanism) |
| BR-006, BR-009 | **FR-002** one action per scope · cross-scope unlinkability | DES-001, DES-011 · ADR-003 | — | EP-01 ▸ FE-003 ▸ US-0006, US-0007 | TC-1016, TC-1025, TC-1607, TC-1956, TC-1957, TC-1961 | UT-0122, UT-0204, UT-0108, UT-2521, UT-2522 | ☐ **G-UNMEASURABLE** — the single-action half passes; "cannot determine better than chance" has no pass line (OPEN-08) |
| BR-009 | **FR-003** no identity data at rest | DES-001 · ADR-013 | SCR-01 | EP-01 ▸ FE-001 ▸ US-0002, US-0003 | TC-2050, TC-2051, TC-2052 | UT-0046, UT-0108 (partial) | ☐ **G-NOENV** — no data-inventory scanner exists; the build-failing check of US-0002 is not implemented |
| BR-006, BR-012 | **FR-004** attestor plurality + 50%-per-region cap | DES-001, DES-002 · ADR-003 | SCR-02 | EP-01 ▸ FE-002 ▸ US-0004, US-0005 | TC-0002, TC-0003, TC-1004, TC-2640, TC-2641, **TC-2642** | UT-0102, UT-0103, UT-0106, UT-0109c, UT-0321, UT-0052 | ☐ **G-NOMECH — OPEN-02** the per-region share cap has no implementing mechanism at all |
| BR-004, BR-009 | **FR-006** residency without an address | DES-005, DES-006 · ADR-004 | SCR-03 | EP-01 ▸ FE-004 ▸ US-0008 | TC-0004, TC-1040, TC-1400, TC-1609 | UT-0044, UT-0045, UT-0046 | ☐ **G-CIRCUIT** — "no address anywhere" is proven; "proves residency" rests on the uncompiled `residency_member` circuit |
| BR-004, BR-002 | **FR-007** versioned, non-retroactive region registry | DES-004 · ADR-004 | — | EP-01 ▸ FE-004 ▸ US-0010 | TC-0005, TC-0006, TC-1204, **TC-2522** | UT-0044, UT-0047, UT-0415 | ☐ **G-NOENV** — the reference rule passes; no case exercises a **closed contest** across a version bump |
| BR-004, BR-012 | **FR-008** one residency scope, 180-day cooldown | DES-005 | SCR-03 | EP-01 ▸ FE-004 ▸ US-0009 | TC-0037, TC-1043 | none | ☐ **G-NOMECH** — no residency-change function and no cooldown exist |
| BR-002, BR-012 | **FR-009** denominator from independent sources | DES-007 · ADR-004 | SCR-08 | EP-03 ▸ FE-008 ▸ US-0019, US-0020 | TC-0007, TC-1011–TC-1014, TC-2710–TC-2714, **TC-2715** | UT-0101, UT-0330–UT-0334, UT-0024 | ☐ **G-NOMECH — OPEN-12** `submitPopulation` is `onlyTimelock`; source independence is not enforceable on-chain |
| BR-001 | **FR-010** draft creation, jurisdiction, name/emblem collision | DES-073 | SCR-04 | EP-02 ▸ FE-005 ▸ US-0011, US-0012 | TC-0010, TC-1041 | none | ☐ **G-NOMECH** — no emblem field, no name-collision check (DES-073 assigned in v1.1.0, closing G-TRACE) |
| BR-001 | **FR-011** eight mandatory pillars | DES-074 | SCR-04, SCR-05 | EP-02 ▸ FE-006 ▸ US-0014, US-0015 | TC-0009 | UT-0033, UT-0034, UT-0035, UT-0036 (**obs. pass**), UT-0730, UT-0732 | ✅ **COMPLETE** — DES-074 assigned (v1.1.0); tests pass (obs. + inh.); eight-pillar gate verified. _(OPEN-07/OI-09: minimum-substance standard is a 280-char floor; the qualitative question is open but does not break the chain.)_ |
| BR-002, BR-006, BR-010 | **FR-014** one endorsement, resident-only, non-transferable | DES-011 | SCR-06, SCR-07 | EP-03 ▸ FE-007 ▸ US-0016 | TC-0011, TC-0038, TC-1007, TC-1008 | UT-0112, UT-0113 | ☐ **G-CIRCUIT** — one-per-person and scope binding pass; the *resident-only* half is enforced only by the mocked residency proof |
| BR-002, BR-008 | **FR-016** threshold in code, no override | DES-009, DES-010 · ADR-004 | SCR-08 | EP-03 ▸ FE-008 ▸ US-0019 | TC-0008, TC-1009, TC-1010, TC-1203, TC-2604 | UT-0023, UT-0025 (**obs.**), UT-0410, UT-0111 | ✅ **COMPLETE** — reproducible from the reference and the chain; no waiver path exists. *(OI-01, the percentage value, is a product decision that does not affect this guarantee.)* |
| BR-002, BR-008 | **FR-018** automatic activation after a dwell period | DES-009 | SCR-09 | EP-03 ▸ FE-009 ▸ US-0022 | TC-0013, TC-0014, **TC-1042** | UT-0115, UT-0026, UT-0027 | ☐ **G-NOMECH** — activation is automatic and permissionless, but **no dwell period is implemented** (OI-08 unset), so the "met and *sustained*" guarantee and its negative AC cannot hold |
| BR-003, BR-008 | **FR-020** join without approval | DES-013 · ADR-007 | SCR-10, SCR-11 | EP-04 ▸ FE-010 ▸ US-0024, US-0026 | TC-0015, TC-0017, TC-1015, TC-1020 | UT-0120, UT-0123, UT-0039 (**obs.**), UT-0520 (**obs.**) | ✅ **COMPLETE** — no approval, sponsorship, interview, invitation, fee or veto path exists |
| BR-003, BR-010 | **FR-021** one member, one equal vote | DES-013, DES-014 · ADR-007 | SCR-10 | EP-04 ▸ FE-011 ▸ US-0027 | TC-0023, TC-1021, TC-1608 | UT-0017, UT-0040 (**obs.**), UT-0121, UT-0302, UT-0521 (**obs.**) | ✅ **COMPLETE** — no weight field exists; a tally can only ever increment by one |
| BR-003 | **FR-022** leave at will | DES-013 | SCR-11 | EP-04 ▸ FE-010 ▸ US-0025 | TC-0016 | UT-0124 | ✅ **COMPLETE** — immediate, unblockable, no penalty path |
| BR-012 | **FR-023** maturation + churn rate limit | DES-013, DES-014 · ADR-008 | — | EP-04 ▸ FE-012 ▸ US-0029, US-0030 | TC-1023, TC-1031, **TC-1044** | UT-0016, UT-0019, UT-0020 (**obs.**), UT-0201 | ☐ **G-NOMECH** — maturation passes to the second; **the join/leave churn rate limit does not exist** (`Party.join` permits unlimited rejoin) |
| BR-003, BR-008 | **FR-024** unscreened proposals | DES-018 | SCR-12 | EP-05 ▸ FE-013 ▸ US-0031 | TC-0018 | UT-0200, UT-0310 | ✅ **COMPLETE** — no pre-screening, moderation or approval hook exists |
| BR-008, BR-012 | **FR-025** tiered quorum + supermajority | DES-016 · ADR-008 | SCR-12 | EP-05 ▸ FE-014 ▸ US-0033, US-0034 | TC-0019, TC-1026–TC-1029, TC-1036, TC-1200, TC-1202 | UT-0010–UT-0013 (**obs.**), UT-0210, UT-0211, UT-0400, UT-0402 | ✅ **COMPLETE** — quorum miss, supermajority miss, exact tie and abstention handling all provoked, and reference and chain agree |
| BR-008, BR-012 | **FR-026** tier-proportional timelock | DES-016, DES-021 · ADR-008 | SCR-12 | EP-05 ▸ FE-015 ▸ US-0035 | TC-0020, TC-1024, TC-1032 | UT-0203, UT-0021 (**obs.**), UT-0202, UT-0310 | ✅ **COMPLETE** — execution before expiry refused; execution permissionless; no shorten/waive/bypass capability |
| BR-012 | **FR-027** entrenched founding clauses | DES-022 · ADR-008 | SCR-12 | EP-05 ▸ FE-015 ▸ US-0036 | TC-0021, TC-1019, TC-1022, TC-2630 | UT-0041, UT-0003, UT-0038 (**obs.**), UT-0230 | ✅ **COMPLETE** — highest tier, longest timelock, age-qualified quorum; mob-capture scenario fails as required |
| BR-012 | **FR-028** eligibility snapshot at open | DES-018, DES-019 · ADR-008 | — | EP-05 ▸ FE-016 ▸ US-0037 | TC-0022, TC-1030, TC-2620, TC-2622 | UT-0014, UT-0018 (**obs.**), UT-0200 | ✅ **COMPLETE** — post-snapshot joins have zero effect, including the 100,000-account flood |
| BR-009, BR-011 | **FR-030** ballot unlinkability | DES-023, DES-024 · ADR-006 | SCR-13 | EP-06 ▸ FE-017 ▸ US-0038 | TC-0033, TC-1958 | UT-2601 (public-signal hygiene only) | ☐ **G-PHASE3** — MACI is not implemented; `maci_voting` is off in staging and production |
| BR-011 | **FR-031** receipt-freeness | DES-023, DES-063 · ADR-006 | SCR-13 | EP-06 ▸ FE-018 ▸ US-0041 | TC-2610, TC-2612, TC-2614 | UT-0700, UT-0701, UT-0710–UT-0712 (client disclosure only) | ☐ **G-PHASE3 — OPEN-01** the client *discloses* that votes are not receipt-free; disclosure is not satisfaction |
| BR-011 | **FR-032** invisible coerced-vote override | DES-023, DES-063 · ADR-006 | SCR-13 | EP-06 ▸ FE-018 ▸ US-0042 | TC-2611, TC-2613, TC-1039 | UT-0022 (**obs.**), UT-0702, UT-0703 | ☐ **G-PHASE3 — OPEN-01** the re-vote window is protected in the schedule rules; the invisible override needs MACI |
| BR-005, BR-008 | **FR-033** independently reproducible tally | DES-025 | SCR-14 | EP-06 ▸ FE-019 ▸ US-0044, US-0045 | TC-0024, TC-2482 | UT-0500, UT-0515 (**obs.**) | ☐ **G-PHASE3** — re-computation works, but Phase-1 tallies expose individual votes (Doc 06 §7.5), so "learns no individual vote" fails; `apps/verifier` does not exist |
| BR-010, BR-011 | **FR-035** no transfer, delegation or proxy | DES-075 | — | EP-04/EP-06 ▸ FE-011/FE-017 ▸ US-0028, US-0040 | TC-1604, TC-1605, TC-2605, TC-2621 | UT-0300, UT-0301, UT-0040 (**obs.**) | ✅ **COMPLETE** — DES-075 assigned (v1.1.0); no transferable surface in ABI or bytecode; capability-absence is real, mechanical and build-failing |
| BR-004 | **FR-036** self-nomination, region-scoped | DES-027 | SCR-15 | EP-07 ▸ FE-020 ▸ US-0046, US-0047, US-0048 | TC-0028 | none | ☐ **G-PHASE3** — Elections not implemented; `elections` flag off above dev |
| BR-009 | **FR-037** informed consent; non-candidates never disclosed | DES-028 | SCR-15 | EP-07 ▸ FE-021 ▸ US-0049, US-0050 | TC-0029 | none | ☐ **G-PHASE3** |
| BR-004, BR-008 | **FR-039** election scoped, timetable immutable | DES-076 | SCR-16 | EP-07 ▸ FE-022 ▸ US-0051, US-0052 | TC-0030, TC-1024 | UT-0021, UT-0202 (schedule half only) | ☐ **G-PHASE3** (DES-076 assigned in v1.1.0, closing G-TRACE) |
| BR-004, BR-008 | **FR-040** automatic office assignment | DES-029 | SCR-16 | EP-07 ▸ FE-022 ▸ US-0053 | TC-0030 | none | ☐ **G-PHASE3** |
| BR-005 | **FR-042** member-initiated recall | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0057 | TC-0031 | none | ☐ **G-PHASE3** — `recall` flag off above dev |
| BR-005, BR-012 | **FR-043** two-stage recall, higher bar | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0058 | TC-0031, TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-045** automatic revocation + by-election | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0060 | TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-047** immutable version history | DES-031 · ADR-009 | SCR-17 | EP-08 ▸ FE-023 ▸ US-0055 | TC-0026, TC-1045, TC-1614 | UT-0523 (**obs.**) | ☐ **G-NOENV** — manifesto versions are append-only; **no test proves prior charter versions stay retrievable**, and no diff view exists |
| BR-010 | **FR-051** money buys no governance advantage | DES-033 · ADR-007 | — | EP-04 ▸ FE-011 ▸ US-0028 | TC-1021, TC-1604, TC-1605, TC-1608 | UT-0040 (**obs.**), UT-0300, UT-0301, UT-0302, UT-0121 | ✅ **COMPLETE (conditional)** — no payment surface and no weighting surface exist. **MUST be re-verified when the `treasury` flag ships in Phase 3**; this row does not carry forward unexamined |
| BR-005, BR-008, BR-009 | **FR-054** public record of every governance action | DES-035 | SCR-20 | EP-09 ▸ FE-025 ▸ US-0061 | TC-0027, TC-1047, TC-1048, TC-1207 | UT-0500, UT-0510, UT-0511, UT-0524 (**obs.**) | ☐ **G-NOENV** — replay works for what exists; **"every" is unverifiable** while nomination, election, recall, treasury and filtering actions do not exist, and there is no event-schema no-personal-data assertion |
| BR-008, BR-009 | **FR-056** no operator discretion; logged display filtering | DES-077 | SCR-20 | EP-09 ▸ FE-026 ▸ US-0064, US-0065 | TC-0039, TC-1600, TC-1601, TC-1614, TC-2661, TC-2720, **TC-2721** | UT-0310, UT-0311, UT-0311b, UT-0311c, UT-0301 | ☐ **G-NOMECH** — (DES-077 assigned in v1.1.0, closing G-TRACE); the absence half is strongly proven; **the display-filtering register does not exist**, so the only permitted intervention has no public log |
| BR-007 | **FR-058** recovery without seed phrases | DES-040, DES-042 · ADR-002 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0068 | TC-0034, TC-2700, TC-2701 | UT-2513–UT-2519 (key derivation only) | ☐ **G-PHASE3** — the social-recovery / 4337 path is not implemented |
| BR-009 | **FR-059** recovery reveals nothing | DES-042 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0069 | TC-2700 | none | ☐ **G-PHASE3** |
| BR-007 | **FR-060** no token, no gas, no jargon | DES-040 | all primary | EP-10 ▸ FE-027 ▸ US-0066 | TC-0035, TC-2203, TC-2331 | none | ☐ **G-UI** — no jargon scanner, no deployed journey (DES-040 Satisfies extended to FR-060 in v1.1.0, closing G-TRACE) |
| BR-007, BR-012 | **FR-061** sponsorship degrades, never denies | DES-043 · ADR-014 | — | EP-10 ▸ FE-027 ▸ US-0067 | TC-0036, TC-2152 | UT-0054 (**obs.**, flag permanence only) | ☐ **G-PHASE3** — the paymaster/relayer service is not built; queue-with-explanation cannot be exercised |

| BR-008, BR-009 | **FR-062** public participation profile (ballot participation, party memberships, endorsed petitions, authored proposals, debates attended) _(v2.0.0: SUPERSEDED by FR-082..FR-086; see SRS v2.2.0 §4.19 and OI-13 resolution. Retained for traceability; do not implement. Successor rows appear below.)_ | DES-064 | SCR-21 | EP-02 ▸ FE-029 ▸ US-0071 | TC-3300, TC-3301, TC-3302 | none | ☐ **G-NOMECH** — OI-13 resolved via three-tier privacy model (SRS v2.2.0 §4.24); FR-082..FR-086 carry the live requirements; this row is a retained-for-traceability historical record |
| BR-008, BR-009 | **FR-063** ballot direction MUST NOT be disclosed through any path (FR-048 elected-representative exception) | DES-064 | SCR-21 | EP-02 ▸ FE-029 ▸ US-0072 | TC-3303, TC-3304, TC-3305, TC-3306 | UT-0700, UT-0701 (capability-absence, **not run** — apps/web suite not executed this session; see §1.1) | ☐ **G-UI** — ballot-direction audit requires deployed client system; UT-0700/UT-0701 prove protocol-level absence but no front-end deployment |
| BR-003 | **FR-064** single party at a time; switch resets tenure clock | DES-065 | — | EP-03 ▸ FE-030 ▸ US-0073 | TC-3307, TC-3308, TC-3309 | none | ☐ **G-PHASE3** — single-party membership nullifier (DES-065) designed but not implemented; party operations not live |
| BR-013 | **FR-065** candidate feedback +3/−1; individual votes private; aggregate tally public | DES-066 · ADR-015 | SCR-23 | EP-07 ▸ FE-031 ▸ US-0074, US-0075 | TC-3313, TC-3314, TC-3315, TC-3316 | none | ☐ **G-PHASE3** — candidate feedback scorer (DES-066, ADR-015) not implemented; depends on Elections (Phase 3) |
| BR-013 | **FR-066** three mandatory pre-election debates per candidate; local conditions, problems, work required; verifiable on-chain record | DES-067 | SCR-22 | EP-07 ▸ FE-032 ▸ US-0076 | TC-3317, TC-3318, TC-3319 | none | ☐ **G-PHASE3** — debate lifecycle (DES-067) not implemented; Elections Phase 3 |
| BR-013 | **FR-067** candidacy only from net-positive post-debate member vote; no auto-renomination of incumbents | DES-067 | SCR-22 | EP-07 ▸ FE-032 ▸ US-0077 | TC-3320, TC-3321, TC-3322 | none | ☐ **G-PHASE3** — post-debate candidacy vote flow (DES-067) not implemented; Elections Phase 3 |
| BR-003 | **FR-068** tenure waiver first 3 months for newly chartered parties; FR-023/FR-028 anti-capture controls fully active | DES-068 | — | EP-03 ▸ FE-030 ▸ US-0078 | TC-3310, TC-3311, TC-3312 | UT-0220 (mandated; anti-capture defence) | ☐ **G-PHASE3** — tenure-waiver flag (DES-068) not implemented; depends on FR-064 single-party membership |
| BR-002 | **FR-069** deterministic enrolment nullifier Poseidon(stable_id_secret, enrolment_scope); five in-circuit checks (trust-anchor hash is public signal[4]; on-chain binding check per SC-01/DES-069) | DES-069 · ADR-017 | — | EP-01 ▸ FE-033 ▸ US-0079 | TC-3323, TC-3324, TC-3325, TC-3343, TC-3345 | none | ☐ **G-CIRCUIT** — in-circuit enrolment nullifier (DES-069); personhood_enrol circuit not compiled; MockVerifierAlwaysTrue in place |
| BR-002 | **FR-070** pluggable credential adapter; three candidate types: eIDAS 2.0, ICAO Doc 9303 NFC, offline paper KYC (e.g. Aadhaar) | DES-070 · ADR-017 | — | EP-01 ▸ FE-034 ▸ US-0080 | TC-3326, TC-3327, TC-3328, TC-3329, TC-3344 | none | ☐ **G-CIRCUIT** — credential adapter interface (DES-070); circuits + adapter infrastructure not deployed |
| BR-002 | **FR-071** nullifier collision routes to recovery state machine; key rotates; membership, tenure, history survive; no second identity | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0081 | TC-3333, TC-3334 | none | ☐ **G-PHASE3** — nullifier-collision recovery state machine (DES-071, ADR-018) not implemented |
| BR-002 | **FR-072** seven-day recovery delay; active-key veto window ≥ delay; no voting during delay; notification at initiation | DES-071 · ADR-018 | — | EP-05 ▸ FE-035 ▸ US-0082 | TC-3335, TC-3336, TC-3337, TC-3338, TC-3339 | none | ☐ **G-PHASE3** — recovery 7-day delay and veto guard (DES-071, ADR-018) not implemented |
| BR-002 | **FR-073** government eID sole enrolment-nullifier-minting class per region (Phase 1); availability-only classes MUST NOT mint | DES-072 · ADR-016 | — | EP-01 ▸ FE-036 ▸ US-0083 | TC-3330, TC-3331, TC-3332 | none | ☐ **G-PHASE3** — government-eID class enforcement (DES-072, ADR-016) not deployed to PersonhoodRegistry |

**Must FR subtotal (pre-v2.0.0 rows): 54 rows · 12 complete · 42 open.**

---

#### v2.0.0 Must FR additions — FR-074..FR-120 (SRS v2.2.0)

Legend for new rows: `DES` = **none** for FR-074..FR-111 (Doc 03 §16 deliberate phasing; G-TRACE); `DES` = specific element for FR-112..FR-120. All 47 new rows are **OPEN**. `SCR` = **none** (no screen assignments for v2.0.0 FRs yet). `UT evidence` = **none** (no implementing contracts in this drop).

| BR | FR | DES (+ADR) | SCR | EP ▸ FE ▸ US | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|---|
| BR-020, BR-006 | **FR-074** country selection scopes party-political participation to exactly one jurisdiction; second selection refused; change governed by FR-008 | none | none | EP-01 ▸ FE-037 ▸ US-0084 | TC-3400 | none | ☐ **G-TRACE + G-PHASE3** — no DES in Doc 03 §5.2 (Doc 03 §16 deliberate next-increment phasing); no implementation in this drop |
| BR-020 | **FR-075** platform party creation distinct from legal registration; platform MUST NOT represent activation as legal registration | none | none | EP-01 ▸ FE-037 ▸ US-0085 | TC-3401 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014, BR-019 | **FR-076** party creation requires published founding-member set and public digital constitution with machine-checkable mandatory sections; missing sections named | none | none | EP-02 ▸ FE-038 ▸ US-0086 | TC-3402 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014 | **FR-077** non-violence clause verified by code; publication refused if absent or altered | none | none | EP-02 ▸ FE-038 ▸ US-0087 | TC-3403 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-008 | **FR-078** party constitution versioned immutably; amendable only through tiered proposal process; sections may be entrenched per FR-027 | none | none | EP-02 ▸ FE-038 ▸ US-0088 | TC-3404 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016 | **FR-079** exactly three participation tiers (Supporter, Worker, Candidate); tiers are descriptive only; tiers MUST NOT confer voting weight, standing, or precedence | none | none | EP-04 ▸ FE-039 ▸ US-0089 | TC-3405 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016, BR-017 | **FR-080** Worker tier self-declared with no approval; recorded work is sole credential; informed-consent event recorded before declaration confirmed | none | none | EP-04 ▸ FE-039 ▸ US-0090 | TC-3406 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016, BR-013 | **FR-081** Candidate tier from post-debate member vote per FR-067; eligibility by code; no human approval or auto-renomination | none | none | EP-04 ▸ FE-039 ▸ US-0091 | TC-3407 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-082** Supporter-tier: only nullifier stored; no attributable record; no profile surface; NFR-001/002/024 apply unconditionally | none | none | EP-09 ▸ FE-040 ▸ US-0092 | TC-3408 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-005 | **FR-083** Worker/Candidate-tier: public participation record from consent event; ballot direction never disclosed in any tier; FR-048 elected-rep exception | none | none | EP-09 ▸ FE-040 ▸ US-0093 | TC-3409 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017 | **FR-084** full disclosure schedule published before any declaration window; no post-declaration demand outside schedule | none | none | EP-09 ▸ FE-040 ▸ US-0094 | TC-3410 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-085** informed consent irrevocable for term; withdrawal before nomination window closes permitted; pre-nomination disclosure data (confidential-class) destroyed on withdrawal (OI-16 adopted) | none | none | EP-09 ▸ FE-040 ▸ US-0095 | TC-3411 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-086** prior Supporter-period activity remains anonymous permanently after public role taken; no linkage through any data or combination of public outputs | none | none | EP-09 ▸ FE-040 ▸ US-0096 | TC-3412 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-014 | **FR-087** committees formed; sole permitted output is proposals entering ordinary lifecycle; no special precedence; composition and minutes public | none | none | EP-11 ▸ FE-041 ▸ US-0097 | TC-3413 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-008 | **FR-088** committees MUST NOT hold capabilities that can change who wins, who votes, or who is a member; non-permitted configuration rejected by code | none | none | EP-11 ▸ FE-041 ▸ US-0098 | TC-3414 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015 | **FR-089** committee membership expires at term end by code; continuation requires fresh member vote; FR-041 discipline | none | none | EP-11 ▸ FE-041 ▸ US-0099 | TC-3415 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-015, BR-003 | **FR-090** proposal authorship public; any Worker-or-above member may submit a competing proposal with equal standing in the same decision window (OI-14 adopted) | none | none | EP-11 ▸ FE-041 ▸ US-0100 | TC-3416 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014, BR-008 | **FR-091** proposal lifecycle stages (proposal → review → discussion → debate → vote → decision → implementation → measurement) code-enforced in sequence; no stage skipped or human-vetoed | none | none | EP-05 ▸ FE-042 ▸ US-0101 | TC-3417 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-014, BR-019 | **FR-092** permanent decision trail for every decision (proposal(s), authorship, deliberation, vote result, enacted consequence, implementation status, measured outcome); reconstructable from public data alone | none | none | EP-05 ▸ FE-042 ▸ US-0102 | TC-3418 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-013, BR-004 | **FR-093** candidate selection on published schedule (nomination, question phase, debates per FR-066, post-debate vote per FR-067, election); unanswered member questions visibly recorded | none | none | EP-07 ▸ FE-043 ▸ US-0103 | TC-3419 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-014 | **FR-094** manifesto is structured machine-readable commitment set with time horizons (1/3/5/10/30 yr) and per-sector baseline/target/budget/timeline/method/owner; missing field named and publication refused | none | none | EP-08 ▸ FE-044 ▸ US-0104 | TC-3420 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-095** every manifesto commitment carries a stable per-commitment ID with progress status and linked evidence; status updates append-only; supersedes FR-046 | none | none | EP-08 ▸ FE-044 ▸ US-0105 | TC-3421 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-010 | **FR-096** mechanical anomaly detection over treasury public record (velocity, structuring, concentration, round-trip); every flag published on transparency dashboard; flags MUST NOT freeze funds or block governance | none | none | EP-11 ▸ FE-045 ▸ US-0106 | TC-3422 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-019 | **FR-097** every public-tier role-taker files COI disclosure on schedule and on material change; disclosures public-class; missing/overdue disclosure flagged by code on participation record | none | none | EP-11 ▸ FE-046 ▸ US-0107 | TC-3423 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-015 | **FR-098** COI review is investigation-and-recommendation only via sortition reviewers; recusal by voluntary compliance, member vote, or charter code rule; no reviewer holds outcome power | none | none | EP-11 ▸ FE-046 ▸ US-0108 | TC-3424 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-015 | **FR-099** independent internal audit by per-case sortition from eligible members; read-only access to all party records; reports on published schedule; no enforcement power | none | none | EP-11 ▸ FE-047 ▸ US-0109 | TC-3425 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018 | **FR-100** published maximum timelines per dispute stage; code-enforced; stage transitions recorded; timeline breach itself recorded on decision trail | none | none | EP-11 ▸ FE-048 ▸ US-0110 | TC-3426 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-015 | **FR-101** per-case appeal/review panels drawn by verifiable sortition from eligible members; no standing panel body; outputs are recommendations to membership or inputs to code rules | none | none | EP-11 ▸ FE-048 ▸ US-0111 | TC-3427 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-016, BR-003 | **FR-102** machine-readable member-rights charter published; every right maps to a code-enforced capability; no party charter may reduce any right below platform floor | none | none | EP-11 ▸ FE-049 ▸ US-0112 | TC-3428 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-103** conduct votes using nullifier+privacy mechanics on public-tier participants; individual votes private, aggregates public; Supporter-tier conduct vote impossible by construction | none | none | EP-11 ▸ FE-050 ▸ US-0113 | TC-3429 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-104** removal from role requires affirmative active-vote quorum; silence MUST NOT remove; subject's statement right honoured; FR-023/FR-028 surge defence applies | none | none | EP-11 ▸ FE-050 ▸ US-0114 | TC-3430 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-018, BR-012 | **FR-105** expulsion from party at strictly higher bar than removal; public-tier only (Supporter expulsion impossible by construction); historical records unaltered (OI-15 adopted) | none | none | EP-11 ▸ FE-050 ▸ US-0115 | TC-3431 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-106** every data entity carries exactly one classification (public/restricted/confidential); unclassified entity MUST NOT be storable | none | none | EP-09 ▸ FE-051 ▸ US-0116 | TC-3432 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-008 | **FR-107** nothing deleted — every governed entity is active or inactive; state transitions appended with timestamp and cause; history MUST NOT be rewritten; confidential-class carve-out for pre-nomination disclosures (FR-085, OI-16) | none | none | EP-09 ▸ FE-051 ▸ US-0117 | TC-3433 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-009 | **FR-108** public verifiable record carries only proofs, timestamps, counts, governance events; restricted- and confidential-class data MUST NOT be written to any public chain (CON-002/CON-008/NFR-010) | none | none | EP-09 ▸ FE-051 ▸ US-0118 | TC-3434 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-109** public transparency dashboard per party: governance activity, treasury summary with anomaly flags, participation aggregates, commitment progress, dispute-timeline compliance; aggregate-only, no per-member drill-down | none | none | EP-11 ▸ FE-052 ▸ US-0119 | TC-3435 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-019, BR-005 | **FR-110** performance scorecard: commitments vs measured progress factually, with methodology, baselines, and evidence links; MUST NOT rank parties or emit editorial conclusions | none | none | EP-11 ▸ FE-052 ▸ US-0120 | TC-3436 | none | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no implementation |
| BR-017, BR-009 | **FR-111** zero per-user behavioural tracking; analytics aggregate-only; personalisation client-side and user-held only; UT-0525 and UT-0740 preserved and extended to all v2.0 surfaces | none | none | EP-09 ▸ FE-053 ▸ US-0121 | TC-3437, TC-3447 | UT-0525 (**obs.**), UT-0740 (existing surfaces only — **not run** this session; see §0.2) | ☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); UT-0525/UT-0740 cover existing surfaces only; v2.0 surfaces not yet built |
| BR-015, BR-006, BR-012 | **FR-112** trust-anchor revocation is a member-voted platform-governance action at highest tier with published expedited emergency variant; no operator/funder/employee path | DES-090 | none | EP-12 ▸ FE-054 ▸ US-0122 | TC-3438, TC-3449 | none | ☐ **G-PHASE3** — DES-090 assigned; TrustAnchorLifecycle contract not deployed in this drop |
| BR-015, BR-006 | **FR-113** trust-anchor rotation follows member-vote governance at published tier; outgoing anchor enrolments remain valid; ROTATION_ABORTED state on abortRotation(); pending anchor rejected post-abort | DES-090 | none | EP-12 ▸ FE-054 ▸ US-0123 | TC-3439, TC-3452 | none | ☐ **G-PHASE3** — DES-090 assigned; TrustAnchorLifecycle state machine not deployed |
| BR-021, BR-015 | **FR-114** steward body elected by all enrolled citizens via FR-030..035 mechanics; fixed terms; recallable mid-term by affirmative-quorum mechanism (FR-104 discipline); candidacy is public-tier role-taking | DES-088 | none | EP-12 ▸ FE-055 ▸ US-0124 | TC-3440 | none | ☐ **G-PHASE3** — DES-088; StewardRegistry not deployed; IMMUTABLE CORE contract not implemented |
| BR-021, BR-015 | **FR-115** steward powers enumerated and exhaustive: (a) draft/publish proposals, (b) coordinate audits/ceremonies/issuer-onboarding, (c) hold funds/sign vendor contracts, (d) publish operational reports; list is exhaustive | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0125 | TC-3441 | none | ☐ **G-PHASE3** — DES-089; steward powers ABI allowlist not implemented |
| BR-021, BR-015, BR-008 | **FR-116** stewards MUST NOT exercise power that can change who wins, who votes, or who is a member; no emergency override; issuer onboarding coordination only, not enactment | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0126 | TC-3442 | none | ☐ **G-PHASE3** — DES-089; steward prohibition and CI assertion not yet implemented |
| BR-021 | **FR-117** protocol survives its stewards: no steward signature, action, approval, or liveness required for any citizen-facing capability; capability-absence suite mandated (static dep-guard + dynamic vacancy simulation) | DES-089 | none | EP-12 ▸ FE-055 ▸ US-0127 | TC-3443, TC-3451, TC-3453, TC-3465, TC-3466, TC-3467, TC-3468 | none | ☐ **G-PHASE3** — DES-089; StewardRegistry and dep-guard CI check not implemented; vacancy simulation not built; TC-3467/3468 test vacancy-immediate citizen fallback (DES-092; not deployed) |
| BR-021, BR-015 | **FR-118** seven charter rules entrenched as unamendable by any vote at any tier; amendment proposals targeting Tier-1 rules rejected by code at submission | DES-087 | none | EP-12 ▸ FE-056 ▸ US-0128 | TC-3444, TC-3449, TC-3455 | none | ☐ **G-PHASE3** — DES-087; ProtocolGovernance entrenched-rule enforcement not deployed |
| BR-021, BR-008 | **FR-119** three-tier amendment structure: Tier-1 fork-only; Tier-2 named absolutes via super-process (DES-087 constants); Tier-3 ordinary citizen vote with published constants | DES-087, DES-091 | none | EP-12 ▸ FE-056 ▸ US-0129 | TC-3445, TC-3450, TC-3454, TC-3456, TC-3457, TC-3458, TC-3459, TC-3460, TC-3461, TC-3462, TC-3463, TC-3464, TC-3469 | none | ☐ **G-PHASE3** — DES-087, DES-091; ProtocolGovernance and GovernanceConstants not deployed; TC-3469 tests anti-circularity direct attack (Open Layer vote attempting to lower Guarded Layer constant) |
| BR-021, BR-003 | **FR-120** unconditional right to fork (FR-053 mechanics; NFR-018 full-history export) entrenched in Tier-1; fork right available regardless of any steward action or protocol vote | DES-034 | none | EP-12 ▸ FE-056 ▸ US-0130 | TC-3446 | none | ☐ **G-PHASE3** — DES-034; `fork` flag OFF above dev; FR-053 open critical; Phase-3 only |

**Must FR subtotal (v2.0.0): 101 rows · 12 complete · 89 open.**

### 3.2 Must NFRs — the 24 gating quality rows

| BR | NFR | DES (+ADR) | US / NF item | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|
| BR-009 | **NFR-001** no linkage by any actor | DES-004, DES-008 | US-0007, US-0026, US-0038 · NF-01 | TC-1607, TC-1959–TC-1961, TC-1963, TC-2650 | UT-0108, UT-0525 (**obs.**), UT-0740 | ☐ **G-UNMEASURABLE — OPEN-13** the collusion bound (`OI-10`) is unset, so the adversary model and the pass threshold do not exist |
| BR-009 | **NFR-002** anonymity set k ≥ 1,000 | DES-008 · ADR-004 | US-0007, US-0039 · NF-01 | TC-1950–TC-1955, TC-1962, TC-2651, TC-2652 | UT-0048–UT-0050 (**obs.**), UT-0116, UT-2607, UT-2608 (**obs.**) | ☐ **G-UNMEASURABLE — OPEN-10 / OI-05** the enforcement mechanism is the strongest evidence in the drop, but "escalation touches publication, never eligibility" has no pass line while `OI-05` is undecided, and there is no runtime invariant over published actions |
| BR-011 | **NFR-003** coercion resistance | DES-023, DES-024, DES-063 · ADR-006 | US-0041 | TC-2610, TC-2611, TC-2614 | UT-0710–UT-0712 (disclosure only) | ☐ **G-PHASE3 — OPEN-01** MACI is Phase 3; a formal argument and an independent adversarial audit are also required and have not begun |
| BR-006, BR-012 | **NFR-004** Sybil resistance ≤ 0.1% | DES-001, DES-011 · ADR-003 | US-0005 | TC-2600–TC-2603, TC-2642, TC-1850 | UT-0109, UT-0320, UT-0321, UT-0325, UT-0326 | ☐ **G-UNMEASURABLE — OPEN-14 + OPEN-02** the duplicate rate **is not internally measurable by design**: the system refuses to link a nullifier to a person, so measurement requires a consented out-of-band audited sample at the attestors. The 50%-per-region cap additionally has no mechanism |
| BR-007 | **NFR-005** cost < USD 0.01 median, citizen pays 0 | DES-043 · ADR-014 | US-0066 · NF-04 | TC-2200–TC-2203 | harness gas (regression detector only) | ☐ **G-NOENV — OPEN-15** harness gas excludes intrinsic, calldata and blob fee, so it is not a price; and the action denominator is not enumerated |
| BR-007 | **NFR-006** performance on the reference device | DES-078 | US-0070 · NF-05 | TC-2080–TC-2084 | none | ☐ **G-NOENV** — no reference-device harness exists (DES-078 assigned in v1.1.0, closing G-TRACE) |
| BR-007, BR-008 | **NFR-007** availability 99.5% / 99.9% | DES-051 | **none** | TC-1046, TC-2150, TC-2153, TC-2422 | UT-0517 (**obs.**, tolerance only) | ☐ **G-NOENV + G-TRACE** — **no story and no backlog item implements this NFR**, and no environment exists to measure it |
| BR-008, BR-012 | **NFR-009** independent security audit, 0 critical/high | DES-079 | NF-02, NF-03 | TC-1863, TC-1600–TC-1614 | capability-absence suite (partial) | ☐ **G-EXTERNAL** — neither audit firm has reported (MS-09, 2027-03-12); the red team (NF-03) has not run |
| BR-009 | **NFR-010** no personal data at rest or on the record | DES-080 | US-0002 | TC-2050–TC-2053 | UT-0046 (**obs.**), UT-0108 | ☐ **G-NOENV** — the three build-failing scanners of Doc 04 §11 do not exist (DES-080 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070 | TC-2250–TC-2255 | UT-0704, UT-0721 (two components, not executed) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-012** device & bandwidth floor | DES-082 | US-0012, US-0070 · NF-05 | TC-2080, TC-2083, TC-2084, TC-2382 | none | ☐ **G-UI** — offline draft composition (US-0012) has no implementing code or test (DES-082 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-013** 8 locales incl. RTL | DES-083 | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI** — no locale files, no string-coverage gate (DES-083 assigned in v1.1.0, closing G-TRACE) |
| BR-008 | **NFR-014** censorship resistance | DES-041, DES-050, DES-051 · ADR-001 | NF-06 | TC-2423, TC-2670, TC-2671 | UT-0054 (**obs.**, escape hatch cannot be disabled) | ☐ **G-NOENV** — the blocking simulation needs an isolated network lab that does not exist |
| BR-009 | **NFR-015** legal / regulatory posture | DES-084 | US-0003 | TC-2730, TC-3253 | none | ☐ **G-EXTERNAL** — per-jurisdiction legal review is a launch condition; the three pilots are still unnamed (`OI-04`) (DES-084 assigned in v1.1.0, closing G-TRACE) |
| BR-007 | **NFR-016** key recovery ≥ 99% in 14 days | DES-042 · ADR-002 | US-0068 | TC-0034, TC-2700, TC-2701 | none | ☐ **G-PHASE3** — recovery is not implemented |
| BR-008 | **NFR-017** governed upgradeability, 0 unilateral paths | DES-039 · ADR-010 | US-0064 | TC-1600, TC-1606, TC-1613, TC-2521, TC-2523, TC-2750 | UT-0310, UT-0312, UT-0344 | ☐ **G-EXTERNAL** — "0 unilateral paths **at audit**" needs the audit; the storage-layout control (TC-1613) and the registry-timelock assertion (TC-2523) are also unwritten |
| BR-008 | **NFR-020** rollback < 15 min; flags kill-switchable; **open-ballot freeze** | DES-037 | NF-07 | TC-1610, TC-1611, TC-2425, **TC-2426** | UT-0053, UT-0055 (**obs.**), UT-0360, UT-0361 | ☐ **G-NOMECH — OPEN-03** the rollback drill has never run, and **`FeatureFlags` has no notion of an in-flight ballot**, so the second clause has no mechanism |
| BR-008 | **NFR-021** open source + reproducible builds | DES-045 · ADR-011 | US-0062 | TC-1206–TC-1208, TC-2671, TC-1803 | UT-2577, UT-2583, UT-0515 (**obs.**), UT-0415 | ☐ **G-EXTERNAL** — differential agreement is strong, but reproducibility has not been verified by an independent party |
| BR-007 | **NFR-022** usability, SUS ≥ 75 | DES-040 | US-0015, US-0070 | TC-3250–TC-3253 | none | ☐ **G-EXTERNAL** — no moderated study (n ≥ 200 per locale) has been run |
| BR-007, BR-009 | **NFR-023** plain language, no jargon, safe notifications | DES-085 | US-0003, US-0015, US-0034, US-0045, US-0066 | TC-2331, TC-2332 | none | ☐ **G-UI** — no jargon scanner and no readability check exist (DES-085 assigned in v1.1.0, closing G-TRACE) |
| BR-009 | **NFR-024** anti-harassment | DES-086 | US-0026, US-0050, US-0059 | TC-0017, TC-1959, TC-2652 | UT-0520, UT-0525 (**obs.**) | ☐ **G-PHASE3** — the nomination and recall surfaces that create the harassment risk do not exist yet (DES-086 assigned in v1.1.0, closing G-TRACE) |
| BR-008 | **NFR-025** operator cannot censor an individual (≤ 60 min) | DES-041 · ADR-001 | NF-06 | TC-2420, TC-2680 | none | ☐ **G-NOMECH — OPEN-11** `NFR-025` demands ≤ 60 min; ADR-001 states force inclusion is 12–24 h. **Irreconcilable as written** — no suite can pass a criterion the design contradicts |

| BR-017, BR-009 | **NFR-027** zero per-user behavioural events in any store, log, or export; analytics aggregate-only; UT-0525 and UT-0740 green on every release; mirrors FR-111 as a quality attribute | none | US-0121 | TC-3447 | UT-0525 (**obs.**), UT-0740 (not run — apps/web suite not executed this session) | ☐ **G-PHASE3** — UT-0525/UT-0740 cover existing surfaces and remain green; v2.0 governance surfaces not yet built; full guarantee requires all v2.0 surfaces deployed and verified |
| BR-019, BR-008 | **NFR-028** zero hard-delete or overwrite paths in any governance-path store; every state transition appended with timestamp and cause; verified by audit inspection | none | US-0117 | TC-3448 | none | ☐ **G-PHASE3** — v2.0 governance stores (committee records, dispute trail, COI disclosures, manifesto commitments, conduct votes) not yet implemented; no audit mechanism exists in this drop |

**Must NFR subtotal (v2.0.0): 24 rows · 0 complete · 24 open.**

### 3.3 Non-Must rows (Should / Could) — recorded, not gating

| FR/NFR | Priority | DES | US | TC | Status |
|---|---|---|---|---|---|
| FR-005 revocation & appeal | Should | DES-003 | **none** | TC-1005, TC-1006 | ☐ **no story** — Doc 05 §12 declared gap, owner Priya Raghunathan |
| FR-012 charter declares its own rules | Should | DES-017 | US-0013 | TC-1018, TC-1201 | ✅ complete (UT-0002, UT-0037 **obs.**; UT-0401) |
| FR-013 petition expiry & cooldown | Should | DES-009 | US-0021 | TC-1034, TC-1035 | ☐ expiry/archive pass; the re-petition cooldown has no test |
| FR-015 endorsement withdrawal | Should | DES-012 | US-0017 | TC-0012 | ✅ complete (UT-0114; UT-0503, UT-2598 **obs.**) |
| FR-017 live petition progress | Should | DES-009 | US-0018 | TC-0025, TC-1209 | ✅ complete (UT-0502 **obs.**; UT-0720–UT-0723 not executed) |
| FR-019 jurisdiction fixed after activation | Should | DES-009 | US-0023 | — | ☐ no case automated |
| FR-029 proposal withdraw/amend + flood limit | Should | DES-018 | US-0032 | TC-1862 | ☐ `PROPOSAL_COOLDOWN` exists; nothing provokes it |
| FR-034 no interim tallies | Should | DES-026 | US-0043 | TC-0024 | ☐ client/indexer suppress; **chain state is public** (Doc 06 §7.5) |
| FR-038 consent wording | Should | DES-028 | US-0048, US-0049 | TC-0029 | ☐ Phase 3 |
| FR-041 fixed term expiry | Should | DES-029 | US-0053 | TC-0030 | ☐ Phase 3 |
| FR-044 recall grace & cooldown | Should | DES-030 | US-0059 | TC-0031 | ☐ Phase 3 |
| FR-046 manifesto & commitments _(v2.0.0: SUPERSEDED by FR-094 and FR-095; retained for traceability — see SRS v2.2.0 §4.28 and US-0054 supersession annotation in BKLG v2.0.1)_ | Should | DES-031 | US-0054 | TC-0026 | ☐ versions exist; status/evidence model not evidenced; successor requirements FR-094/FR-095 carry the live traceability |
| FR-048 attributed office-holder votes | Should | DES-032 | US-0056 | — | ☐ Phase 3 |
| FR-049 contribution cap | Should | DES-033 | **none** | — | ☐ no story, no code |
| FR-050 treasury ledger | Should | DES-033 | **none** | — | ☐ no story, no code |
| FR-052 outflow approval | Could | DES-033 | **none** | — | ☐ no story, no code |
| FR-053 fork with lineage | Could | DES-034 | **none** | TC-2633 | ☐ **no story**, though UT-0042/UT-0043 pass (**obs.**) |
| FR-055 open-source verifier & export | Should | DES-025, DES-044 | US-0062, US-0063 | TC-2480–TC-2482 | ☐ `apps/verifier` does not exist |
| FR-057 filtering register & transparency report | Could | **none** | US-0065 | TC-2721 | ☐ no mechanism |
| NFR-008 scalability | Should | — | NF-— | TC-2150, TC-2151 | ☐ no load rig |
| NFR-018 exit rights | Should | DES-044 | US-0063 | TC-2480, TC-2481 | ☐ export path not built |
| NFR-019 observability dashboard | Should | — | NF-08 | — | ☐ not built |
| NFR-026 compatibility matrix | Should | — | US-0070 | TC-2380–TC-2382 | ☐ no device lab |

**Non-Must subtotal: 23 rows · 3 complete · 20 open.** Five FRs (`FR-005`, `FR-049`, `FR-050`,
`FR-052`, `FR-053`) still have **no story**, exactly as Doc 05 §12 declared. They are recorded here
as open non-Must rows rather than silently absent, per that declaration.

---


---

### 3.4 Change-9 coverage record — party operation / no boss-privileged roles

**Product-owner determination (2026-08-09T2200, `artifacts/product-owner-2026-08-09T2200.md`):**
Change 9 of CR-v1.1.0 specified "party operation with no boss-privileged roles". The product owner
confirmed full coverage by existing requirements; **no new FR was minted**.

| Change-9 concern | Covered by |
|---|---|
| No party owner with special admin rights | FR-020 (any member joins without approval) |
| Every active member has one equal vote | FR-021 (one-member-one-vote) |
| Any matured member may propose | FR-024 (proposal without seniority gate) |
| No operator can override display or remove content | FR-056 (no operator discretion; logged display filtering) |
| No special standing above ordinary member | BR-003 (equal standing for all participants) |

This record closes the traceable link between Change-9 and the RTM. No new test cases are required
beyond those already associated with FR-020, FR-021, FR-024, FR-056.

## 4. Backward trace (test → requirement) — orphan check

Every `TC` in Doc 07 names the `US` and the `FR`/`NFR` it verifies; every `UT` cited in this matrix
was located by identifier in a real test file. Result of the reverse sweep:

| Check | Result |
|---|---|
| `TC` with no requirement | **0** |
| `TC` citing a non-existent `UT` | **0** |
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group |
| `UT` ranges present in code but **missing from the Doc 06 §3 inventory** | **2** — `UT-0600…0612` (deployment safety, 13 tests) and `UT-0700…0742` (`apps/web`, 16 tests). Raised as **TD-07-01** (Medium), owner engineer |
| `UT` ranges reserved but empty | `UT-2000…2499` circuits — **no suite exists**, circuits uncompiled |
| Regression tests for the four Doc 06 §5 defects, all carried as first-class cases | **Yes** — TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641 (`UT-0109c`), TC-1610 (`UT-0360/0361`) |

## 5. Risk → control → test

| RISK | Control (design) | Verified by | Verdict |
|---|---|---|---|
| RISK-01 Sybil inflation | DES-001, DES-002, DES-010, DES-011 | TC-2600–TC-2605, TC-1001–TC-1004 | **Partial** — namespace collision and nullifier-burn defences pass; cross-type residual (TC-2601) and the per-region cap (TC-2642) are open |
| RISK-02 Coercion & vote-buying | DES-023, DES-024, DES-063 | TC-2610–TC-2614 | **Not mitigated at v1** — MACI is Phase 3 (OPEN-01); the client discloses the limitation |
| RISK-03 Flash takeover | DES-019, DES-021, snapshot + maturation | TC-2620–TC-2622, TC-1030, TC-1031 | **Mitigated and proven** |
| RISK-04 Mob charter capture | DES-020, DES-022, DES-034 | TC-2630–TC-2633 | **Mitigated and proven** (fork exit has no story) |
| RISK-05 Issuer compromise | DES-002, DES-003, DES-036 | TC-2640–TC-2642 | **Partial** — epoch cap and fail-closed invariant pass; the 50% region cap has no mechanism |
| RISK-06 Deanonymisation | DES-008, ADR-004 | TC-2650–TC-2653, TC-1950–TC-1962 | **Partial** — the k-floor is enforced at three layers; the correlation battery has no pass line (OPEN-08/10/13) |
| RISK-07 State compulsion | DES-001 (no linkage), ADR-013 | TC-2660–TC-2662 | **Mitigated by non-collection**; attestor-side residual accepted and disclosed |
| RISK-08 State-level blocking | DES-041, DES-050, DES-051 | TC-2670, TC-2671, TC-2423 | **Untested** — no network lab |
| RISK-09 Sequencer censorship | DES-041 | TC-2680, TC-2420 | **Untested and contradicted** — OPEN-11 |
| RISK-10 Ceremony / circuit compromise | DES-038, DES-052 | TC-2690–TC-2693, TC-1852–TC-1859 | **Partial** — registry, ceremony binding and mock-detection pass; the circuits themselves are uncompiled |
| RISK-11 Key loss at scale | DES-042 | TC-2700, TC-2701 | **Untested** — recovery not built |
| RISK-12 Oracle manipulation | DES-007, DES-010 | TC-2710–TC-2715 | **Strongly mitigated** — median, drift cap, dispute window, ≥5 sources and the deflation floors all pass; source *independence* is not enforceable (OPEN-12) |
| RISK-13 Misuse / unlawful content | DES-035, filtering boundary | TC-2720, TC-2721 | **Partial** — no deletion path exists; the filtering register does not exist |
| RISK-14 Regulatory reclassification | CON-001 boundary | TC-2730 | **Untested** — manual |
| RISK-15 Adoption failure | threshold calibration | TC-2740 | **Blocked** — OI-01 undecided |
| RISK-16 Trumocracy becomes the gatekeeper | DES-037, DES-039, DES-044, DES-045 | TC-2750–TC-2752, TC-1600–TC-1612 | **Partial** — capability absence is proven at the ABI/bytecode boundary; the flag blast radius (OPEN-03) and the exit path are open |
| RISK-22 Stolen credential: attacker initiates recovery to seize victim party membership | Active-key holder veto path (7-day delay + independent on-chain veto, DES-071/ADR-018); notification at initiation (FR-072) | TC-3340 | ☐ **G-PHASE3** — recovery state machine not implemented |
| RISK-23 Veto suppression via notification-channel compromise | Independent on-chain veto path (attacker cannot block an on-chain transaction); veto window ≥ delay (FR-072); ADR-018 | TC-3341 | ☐ **G-PHASE3** — recovery state machine not implemented |
| RISK-24 Recovery raced against a live ballot | `isInRecovery` check in `vote()` bars any vote cast while recovery is RECOVERY_PENDING (FR-072, DES-071) | TC-3342 | ☐ **G-PHASE3** — recovery state machine and Elections not implemented |

## 6. Coverage dashboard

| Dimension | Total | Traced (chain links all present) | Complete (chain closes with a passing TC) | Gaps |
|---|---|---|---|---|
| BR | 21 | 21 | **0** — every BR depends on ≥1 open Must FR | 21 |
| FR — Must | 101 | 101 | **12** | **89** |
| FR — Should/Could | 19 | 14 (5 lack a `US`) | 3 | 16 |
| NFR — Must | 24 | 23 (1 lacks a `US`: NFR-007) | **0** | **24** |
| NFR — Should | 4 | 2 | 0 | 4 |
| Risks | 19 | 19 | 4 fully mitigated & proven | 15 |
| Stories | 130 | 130 (all carry Gherkin AC) | 12 meet the Definition of Done | 118 |
| Test cases | 378 | 378 | 127 with passing evidence (55 inh. · 72 obs.) | 251 not executed or not executable |
| Screens | 23 | 23 mapped | 0 verified (no UI suite executed) | 23 |

**TC count convention (Test cases row — v2.1.0 reconciliation):** Doc 07 at v2.1.0 uses 369 TC row anchors (299 original + 70 TS-GOV2, including TC-3467..TC-3469 minted 2026-08-12). This dashboard uses the **expanded** convention: 369 - 1 + 10 = **378 designed test cases** (one anchor TC-3200-TC-3209 expands to 10 exploratory charters; see Doc 07 §2 convention note). The 127 'with passing evidence' = 55 Pass (inh.) + 72 Pass (obs.) per Doc 07 §2 footer; unchanged from v2.0.1 (TC-3467..TC-3469 add no automated tests). The 251 'not executed or not executable' = 378 - 127 = 251 (includes Blocked, No mechanism, Manual, Not run, and automated-not-executed-this-session cases).


**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
**12 of 130 stories** meet that bar: US-0019, US-0024, US-0025, US-0026, US-0027, US-0031, US-0033,
US-0034, US-0035, US-0036, US-0037, US-0028. The 47 new stories (US-0084..US-0130) and the 13 pre-v2 stories (US-0071..US-0083) are not done (capabilities not yet implemented). Every other story is **not done**.

## 7. Gap log — all 113 open Must rows

Owners are the named requirement owners from Doc 02; phase targets are Doc 13 milestones.
**v1.1.0 update (2026-08-10):** FR-011 and FR-035 removed (now COMPLETE after DES-074/075 assigned);
12 new Must FR rows added for FR-062..073 (entries 53–64); G-TRACE secondary tags removed from 13
rows whose DES gaps are now closed by DES-073..086. NFR-007 retains G-TRACE (no story/backlog item
— not a DES gap).
Gap-log entry numbers are internal sequence only; no externally referenced ID (FR, NFR, BR, US, TC) was renumbered. Prior references to old entry numbers should be resolved by FR/NFR ID, not by entry number.

| # | Row | Reason | Blocking cause (one line) | Owner | Closes at |
|---|---|---|---|---|---|
| 1 | FR-001 | G-CIRCUIT | Mock verifier; ADR-003 cross-identifier-type residual permits a second enrolment | Marcus Adeyemi | MS-08 + ADR-003 decision |
| 2 | FR-002 | G-UNMEASURABLE | "Better than chance" not falsifiable (OPEN-08); needs an adversary game with ε | Dr. Lena Kowalczyk | Requirement restatement |
| 3 | FR-003 | G-NOENV | No data-inventory scanner; the US-0002 build-failing check is unimplemented | Dr. Lena Kowalczyk | Phase 2 |
| 4 | FR-004 | G-NOMECH | **OPEN-02** — no per-region attestor share cap exists | Marcus Adeyemi | Design fix, then Phase 2 |
| 5 | FR-006 | G-CIRCUIT | `residency_member` uncompiled | Marcus Adeyemi | MS-08 |
| 6 | FR-007 | G-NOENV | No case exercises a closed contest across a registry version bump | Yuki Sato | Phase 2 |
| 7 | FR-008 | G-NOMECH | No residency-change function, no 180-day cooldown | Marcus Adeyemi | Design fix |
| 8 | FR-009 | G-NOMECH | **OPEN-12** — `submitPopulation` is `onlyTimelock`; independence unenforceable | Yuki Sato | Design fix |
| 9 | FR-010 | G-NOMECH | No emblem field, no name-collision check (DES-073 assigned in v1.1.0, G-TRACE closed) | Tomás Ferreira | Design fix |
| 10 | FR-014 | G-CIRCUIT | Resident-only enforcement rests on the mocked residency proof | Tomás Ferreira | MS-08 |
| 11 | FR-018 | G-NOMECH | **No dwell period is implemented** (OI-08 unset) | Tomás Ferreira | Design fix |
| 12 | FR-023 | G-NOMECH | No join/leave churn rate limit | Rafael Duarte | Design fix |
| 13 | FR-030 | G-PHASE3 | MACI not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 14 | FR-031 | G-PHASE3 | **OPEN-01** — receipt-freeness needs MACI | Aisha Nkemdirim | Phase 3 |
| 15 | FR-032 | G-PHASE3 | **OPEN-01** — invisible override needs MACI | Aisha Nkemdirim | Phase 3 |
| 16 | FR-033 | G-PHASE3 | Phase-1 tallies expose individual votes; no verifier app | Erik Lindqvist | Phase 3 |
| 17 | FR-036 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 18 | FR-037 | G-PHASE3 | Candidacy/consent not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 19 | FR-039 | G-PHASE3 | Elections not implemented (DES-076 assigned in v1.1.0, G-TRACE closed) | Aisha Nkemdirim | Phase 3 |
| 20 | FR-040 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 21 | FR-042 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 22 | FR-043 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 23 | FR-045 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 24 | FR-047 | G-NOENV | Charter-version retrievability and the diff view are untested/unbuilt | Erik Lindqvist | Phase 2 |
| 25 | FR-054 | G-NOENV | "Every action" unverifiable while five action types do not exist; no event-schema assertion | Erik Lindqvist | Phase 3 |
| 26 | FR-056 | G-NOMECH | Display-filtering register does not exist (DES-077 assigned in v1.1.0, G-TRACE closed) | Daniel Okonkwo | Design fix |
| 27 | FR-058 | G-PHASE3 | Social recovery / 4337 path not implemented | Amara Diallo | Phase 3 |
| 28 | FR-059 | G-PHASE3 | Recovery not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 29 | FR-060 | G-UI | No jargon scanner, no deployed journey (DES-040 Satisfies extended in v1.1.0, G-TRACE closed) | Hiroshi Tanaka | Phase 3 |
| 30 | FR-061 | G-PHASE3 | Paymaster/relayer not built | Hiroshi Tanaka | Phase 3 |
| 31 | NFR-001 | G-UNMEASURABLE | **OPEN-13** — collusion bound (`OI-10`) unset | Dr. Lena Kowalczyk | Product decision |
| 32 | NFR-002 | G-UNMEASURABLE | **OPEN-10 / OI-05** — publication vs eligibility escalation undecided | Dr. Lena Kowalczyk | Product decision |
| 33 | NFR-003 | G-PHASE3 | **OPEN-01** — MACI + formal argument + adversarial audit | Aisha Nkemdirim | Phase 3 |
| 34 | NFR-004 | G-UNMEASURABLE | **OPEN-14** — duplicate rate is **not internally measurable by design**; needs a consented out-of-band audited sample. Plus **OPEN-02** | Marcus Adeyemi | Out-of-band instrument + design fix |
| 35 | NFR-005 | G-NOENV | **OPEN-15** — no price instrument, no enumerated action set | Hiroshi Tanaka | Phase 2 testnet |
| 36 | NFR-006 | G-NOENV | No reference-device harness (DES-078 assigned in v1.1.0, G-TRACE closed) | Hiroshi Tanaka | Phase 2 (NF-05) |
| 37 | NFR-007 | G-NOENV + G-TRACE | **No story and no backlog item implements it**; no environment | Chen Wei | Immediate (backlog) + Phase 3 |
| 38 | NFR-009 | G-EXTERNAL | Audits not reported (DES-079 assigned in v1.1.0, G-TRACE closed) | Rafael Duarte | MS-09 / MS-10 |
| 39 | NFR-010 | G-NOENV | Data-inventory scanners not built (DES-080 assigned in v1.1.0, G-TRACE closed) | Dr. Lena Kowalczyk | Phase 2 |
| 40 | NFR-011 | G-UI | No a11y gate; no manual screen-reader pass (DES-081 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 41 | NFR-012 | G-UI | No device lab; offline drafting unimplemented (DES-082 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 42 | NFR-013 | G-UI | No locales, no coverage gate (DES-083 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 43 | NFR-014 | G-NOENV | No isolated network lab (NF-06) | Chen Wei | Phase 2 |
| 44 | NFR-015 | G-EXTERNAL | Legal review per jurisdiction; pilots unnamed (`OI-04`) (DES-084 assigned in v1.1.0, G-TRACE closed) | Sofia Marchetti | Before launch |
| 45 | NFR-016 | G-PHASE3 | Recovery not implemented | Amara Diallo | Phase 3 |
| 46 | NFR-017 | G-EXTERNAL | "0 unilateral paths at audit" needs the audit; TC-1613/TC-2523 unwritten | Rafael Duarte | MS-09 |
| 47 | NFR-020 | G-NOMECH | **OPEN-03** — no open-ballot flag freeze; rollback drill never run | Chen Wei | Design fix + NF-07 |
| 48 | NFR-021 | G-EXTERNAL | Reproducibility not verified by an independent party | Rafael Duarte | Phase 2 |
| 49 | NFR-022 | G-EXTERNAL | No moderated usability study | Grace Mbeki | Phase 3 |
| 50 | NFR-023 | G-UI | No jargon or readability check (DES-085 assigned in v1.1.0, G-TRACE closed) | Nadia Hassan | Phase 3 |
| 51 | NFR-024 | G-PHASE3 | Nomination/recall surfaces do not exist (DES-086 assigned in v1.1.0, G-TRACE closed) | Daniel Okonkwo | Phase 3 |
| 52 | NFR-025 | G-NOMECH | **OPEN-11** — 60 min vs ADR-001's 12–24 h is irreconcilable as written | Chen Wei | Requirement or design restatement |
| 53 | FR-062 | G-NOMECH | OI-13 unresolved; participation_profile flag off above dev until Gate 1 re-affirmation (DES-064 designed) | Erik Lindqvist | Gate 1 re-affirmation + design fix |
| 54 | FR-063 | G-UI | Ballot-direction audit requires deployed client system; UT-0700/UT-0701 exist but apps/web suite not run | Dr. Lena Kowalczyk | Phase 3 |
| 55 | FR-064 | G-PHASE3 | Single-party membership nullifier (DES-065) designed but not implemented | Rafael Duarte | Phase 3 |
| 56 | FR-065 | G-PHASE3 | Candidate feedback scorer (DES-066) not implemented; depends on Elections (Phase 3) | Aisha Nkemdirim | Phase 3 |
| 57 | FR-066 | G-PHASE3 | Debate lifecycle and scheduling (DES-067) not implemented; Elections Phase 3 | Aisha Nkemdirim | Phase 3 |
| 58 | FR-067 | G-PHASE3 | Post-debate candidacy vote flow (DES-067) not implemented; Elections Phase 3 | Aisha Nkemdirim | Phase 3 |
| 59 | FR-068 | G-PHASE3 | Tenure-waiver flag (DES-068) not implemented; depends on FR-064 party membership | Rafael Duarte | Phase 3 |
| 60 | FR-069 | G-CIRCUIT | In-circuit enrolment nullifier (DES-069, ADR-017); personhood_enrol circuit not compiled | Marcus Adeyemi | Phase 2 ceremonies |
| 61 | FR-070 | G-CIRCUIT | Credential adapter interface (DES-070, ADR-017); circuits + adapter infrastructure not deployed | Marcus Adeyemi | Phase 2 ceremonies |
| 62 | FR-071 | G-PHASE3 | Nullifier-collision recovery state machine (DES-071, ADR-018) not implemented | Amara Diallo | Phase 3 |
| 63 | FR-072 | G-PHASE3 | Recovery 7-day delay and active-key veto guard (DES-071, ADR-018) not implemented | Rafael Duarte | Phase 3 |
| 64 | FR-073 | G-PHASE3 | Government-eID class enforcement (DES-072, ADR-016) not deployed to PersonhoodRegistry | Marcus Adeyemi | Phase 3 |
**v2.0.0 update (2026-08-11):** 49 new Must rows added — FR-074..FR-111 (38 entries, G-TRACE: no DES assigned, Doc 03 §16 next-increment scope); FR-112..FR-120 (9 entries, G-PHASE3: DES assigned but not deployed); NFR-027/028 (2 entries, G-PHASE3). Total open Must rows: 113.
| 65 | FR-074 | G-TRACE | No DES assigned — Doc 03 §16 next-increment scope; country-selection eligibility rule not designed | Marcus Adeyemi | Design next increment |
| 66 | FR-075 | G-TRACE | No DES assigned — Doc 03 §16; platform-vs-legal-registration distinction not designed | Sofia Marchetti | Design next increment |
| 67 | FR-076 | G-TRACE | No DES assigned — Doc 03 §16; party founding mandatory-sections checker not designed | Tomas Ferreira | Design next increment |
| 68 | FR-077 | G-TRACE | No DES assigned — Doc 03 §16; non-violence clause code-verifier not designed | Daniel Okonkwo | Design next increment |
| 69 | FR-078 | G-TRACE | No DES assigned — Doc 03 §16; constitution versioning + entrenchment mechanics not designed | Tomas Ferreira | Design next increment |
| 70 | FR-079 | G-TRACE | No DES assigned — Doc 03 §16; three participation-tier descriptive metadata model not designed | Grace Mbeki | Design next increment |
| 71 | FR-080 | G-TRACE | No DES assigned — Doc 03 §16; Worker self-declaration + informed-consent UI flow not designed | Grace Mbeki | Design next increment |
| 72 | FR-081 | G-TRACE | No DES assigned — Doc 03 §16; Candidate self-nomination + eligibility check not designed | Aisha Nkemdirim | Design next increment |
| 73 | FR-082 | G-TRACE | No DES assigned — Doc 03 §16; Supporter nullifier-only storage (no profile) not designed | Dr. Lena Kowalczyk | Design next increment |
| 74 | FR-083 | G-TRACE | No DES assigned — Doc 03 §16; Worker/Candidate public participation-record model not designed | Erik Lindqvist | Design next increment |
| 75 | FR-084 | G-TRACE | No DES assigned — Doc 03 §16; disclosure-schedule publication + enforcement not designed | Dr. Lena Kowalczyk | Design next increment |
| 76 | FR-085 | G-TRACE | No DES assigned — Doc 03 §16; informed-consent irrevocability + withdrawal-destroy flow not designed | Sofia Marchetti | Design next increment |
| 77 | FR-086 | G-TRACE | No DES assigned — Doc 03 §16; Supporter-period anonymity retention across tier transitions not designed | Dr. Lena Kowalczyk | Design next increment |
| 78 | FR-087 | G-TRACE | No DES assigned — Doc 03 §16; committee formation + minute publication not designed | Tomas Ferreira | Design next increment |
| 79 | FR-088 | G-TRACE | No DES assigned — Doc 03 §16; committee capability boundary enforcement not designed | Rafael Duarte | Design next increment |
| 80 | FR-089 | G-TRACE | No DES assigned — Doc 03 §16; committee mechanical term expiry not designed | Rafael Duarte | Design next increment |
| 81 | FR-090 | G-TRACE | No DES assigned — Doc 03 §16; competing-proposal equal-standing enforcement not designed | Tomas Ferreira | Design next increment |
| 82 | FR-091 | G-TRACE | No DES assigned — Doc 03 §16; eight-stage proposal lifecycle state machine not designed | Tomas Ferreira | Design next increment |
| 83 | FR-092 | G-TRACE | No DES assigned — Doc 03 §16; permanent decision trail + third-party reconstruction not designed | Erik Lindqvist | Design next increment |
| 84 | FR-093 | G-TRACE | No DES assigned — Doc 03 §16; candidate-selection published-schedule flow not designed | Aisha Nkemdirim | Design next increment |
| 85 | FR-094 | G-TRACE | No DES assigned — Doc 03 §16; manifesto structured-commitment schema not designed | Erik Lindqvist | Design next increment |
| 86 | FR-095 | G-TRACE | No DES assigned — Doc 03 §16; per-commitment ID + append-only status not designed | Erik Lindqvist | Design next increment |
| 87 | FR-096 | G-TRACE | No DES assigned — Doc 03 §16; treasury anomaly-detection rule engine not designed | Erik Lindqvist | Design next increment |
| 88 | FR-097 | G-TRACE | No DES assigned — Doc 03 §16; COI disclosure filing + overdue flag not designed | Ingrid Bergqvist | Design next increment |
| 89 | FR-098 | G-TRACE | No DES assigned — Doc 03 §16; COI review recommendation-only enforcement not designed | Ingrid Bergqvist | Design next increment |
| 90 | FR-099 | G-TRACE | No DES assigned — Doc 03 §16; independent audit function (sortition, read-only access) not designed | Ingrid Bergqvist | Design next increment |
| 91 | FR-100 | G-TRACE | No DES assigned — Doc 03 §16; dispute stage timeline enforcement not designed | Ingrid Bergqvist | Design next increment |
| 92 | FR-101 | G-TRACE | No DES assigned — Doc 03 §16; per-case sortition panel selection proof not designed | Rafael Duarte | Design next increment |
| 93 | FR-102 | G-TRACE | No DES assigned — Doc 03 §16; machine-readable member-rights charter + floor enforcement not designed | Grace Mbeki | Design next increment |
| 94 | FR-103 | G-TRACE | No DES assigned — Doc 03 §16; conduct-vote mechanics (nullifier + Supporter impossibility) not designed | Daniel Okonkwo | Design next increment |
| 95 | FR-104 | G-TRACE | No DES assigned — Doc 03 §16; removal affirmative-quorum + surge-defence mechanics not designed | Daniel Okonkwo | Design next increment |
| 96 | FR-105 | G-TRACE | No DES assigned — Doc 03 §16; expulsion higher-bar + public-tier-only restriction not designed | Daniel Okonkwo | Design next increment |
| 97 | FR-106 | G-TRACE | No DES assigned — Doc 03 §16; three-class data classification assignment enforcement not designed | Dr. Lena Kowalczyk | Design next increment |
| 98 | FR-107 | G-TRACE | No DES assigned — Doc 03 §16; append-only state-transition lifecycle not designed (FR-085 carve-out pending too) | Erik Lindqvist | Design next increment |
| 99 | FR-108 | G-TRACE | No DES assigned — Doc 03 §16; public-chain proofs-only discipline not designed | Rafael Duarte | Design next increment |
| 100 | FR-109 | G-TRACE | No DES assigned — Doc 03 §16; transparency dashboard (aggregate-only, no drill-down) not designed | Yuki Sato | Design next increment |
| 101 | FR-110 | G-TRACE | No DES assigned — Doc 03 §16; factual performance scorecard (no ranking, no editorial) not designed | Yuki Sato | Design next increment |
| 102 | FR-111 | G-TRACE | No DES assigned — Doc 03 §16; behavioural-analytics prohibition enforcement not designed | Dr. Lena Kowalczyk | Design next increment |
| 103 | FR-112 | G-PHASE3 | TrustAnchorLifecycle (DES-090) designed — ProtocolGovernance/emergency-revocation path not deployed | Rafael Duarte | Phase 3 |
| 104 | FR-113 | G-PHASE3 | TrustAnchorLifecycle (DES-090) designed — legitimate rotation governance path not deployed | Rafael Duarte | Phase 3 |
| 105 | FR-114 | G-PHASE3 | StewardRegistry (DES-088) designed — steward election + recall contract not deployed | Aisha Nkemdirim | Phase 3 |
| 106 | FR-115 | G-PHASE3 | StewardPowers (DES-089) designed — enumerated-capability enforcement not deployed | Rafael Duarte | Phase 3 |
| 107 | FR-116 | G-PHASE3 | StewardPowers (DES-089) designed — veto-prohibition + competing-proposal parity not deployed | Rafael Duarte | Phase 3 |
| 108 | FR-117 | G-PHASE3 | StewardPowers (DES-089) designed — capability-absence suite seeded (TC-3465/TC-3466); steward-vacancy simulation not run; no UT IDs yet | Chen Wei | Phase 3 |
| 109 | FR-118 | G-PHASE3 | ProtocolGovernance IMMUTABLE CORE (DES-087) designed — seven-rule entrenchment + Tier-1 rejection not deployed | Rafael Duarte | Phase 3 |
| 110 | FR-119 | G-PHASE3 | ProtocolGovernance (DES-087) + GovernanceConstants (DES-091) designed — three-tier super-process not deployed | Tomas Ferreira | Phase 3 |
| 111 | FR-120 | G-PHASE3 | Fork-right preservation (DES-034 lineage) — fork flag OFF above dev; no Phase-3 deployment yet | Erik Lindqvist | Phase 3 |
| 112 | NFR-027 | G-PHASE3 | No inspection harness for v2 surfaces; UT-0525/UT-0740 pass but v2 aggregate-analytics discipline not verified | Dr. Lena Kowalczyk | Phase 3 |
| 113 | NFR-028 | G-PHASE3 | No governance-path audit scan for v2 stores; append-only discipline unverified beyond existing UT scope | Erik Lindqvist | Phase 3 |

### 7.1 The four gaps that will not close by building harder

Called out because they are qualitatively different from "not built yet", and a Gate-2 approver
should not be allowed to mistake them for schedule:

1. **`NFR-004` duplicate rate is not internally measurable — by design.** The system refuses to link
   a nullifier to a person (proven by `TC-1607` / `UT-0108`). That is the privacy property working.
   It also means Trumocracy **cannot count its own duplicates**. Measurement requires a consented,
   out-of-band audited sample at the attestors, reported with its confidence interval. The
   requirement's ≤ 0.1% target must be re-worded to name that instrument, or it stays unverifiable
   forever (OPEN-14).
2. **`FR-002` / `NFR-001` "better than chance" is not falsifiable by a finite suite.** No amount of
   testing produces a pass verdict against an unbounded adversary with an unset collusion bound
   (OPEN-08, OPEN-13, OI-10). This needs a restatement into a concrete adversary game with a
   maximum advantage ε at a stated confidence — a product and architecture decision, not a test.
3. **`NFR-025` contradicts ADR-001.** 60 minutes versus 12–24 hours. The suite can measure and
   report; it cannot pass a criterion the design contradicts (OPEN-11).
4. **`FR-031` / `FR-032` / `NFR-003` need MACI, which is Phase 3.** No test, environment or
   documentation change makes receipt-freeness true at v1. The honest option is the one already
   taken in the client (`UT-0710`–`UT-0712`): say so, loudly, in the product.

## 8. Change-impact view

| If this changes | These rows must be re-verified |
|---|---|
| `ADR-003` nullifier scoping | FR-001, FR-002, NFR-004 + TC-2600, TC-2601, TC-1001–TC-1003 |
| `ADR-006` MACI design | FR-030, FR-031, FR-032, FR-033, FR-034, NFR-003 + all of TS-ADV-02 |
| `GovernanceRules` tier table | FR-025, FR-026, FR-027, FR-023 + TC-1200, TC-1202 and every `TS-DIFF` case |
| `RegionRegistry` population logic | FR-009, FR-016, FR-018, NFR-002 + TC-2710–TC-2715 |
| `MIN_ANONYMITY_SET` | NFR-002, NFR-001, FR-020 + TC-1950–TC-1955, TC-2651 |
| `FeatureFlags` semantics | NFR-020, NFR-017, FR-056 + TC-1610, TC-1611, TC-2750, TC-2426 |
| The `treasury` flag turning on | **FR-051 loses its conditional completion** and must be re-tested in full, plus FR-049, FR-050, FR-052 |
| Any `OI-01`…`OI-11` decision | Re-check every row citing that OI; `OI-05` alone gates NFR-002 and BR-004 |

## 9. Gate verdict & sign-off

**Gate rule (CLAUDE.md): 0 gaps in Must rows = traceability criterion met. Any open row → the gate
stays shut.**

| Criterion | Required | Actual | Verdict |
|---|---|---|---|
| Must rows with a complete chain | 125 / 125 | **12 / 125** | **FAIL** |
| Open Must rows | 0 | **113** | **FAIL** |
| Tests green across the requirement set | all | 222 observed green over ~35% of the codebase's guarantees; 112 cases cannot execute | **FAIL** |
| Rollback proven | yes | never drilled (TC-2425) | **FAIL** |
| Doc 04 Gate-2 blockers closed | OPEN-01…06, OPEN-11 | OPEN-04, OPEN-05, OPEN-06 **closed with regression tests**; OPEN-01, OPEN-02, OPEN-03, OPEN-11 **open** | **FAIL** |
| Independent security/crypto audit, 0 critical/high | yes | not started | **FAIL** |

**Tester's recorded verdict: Gate 2 is NOT ready. Do not present this drop as launch-ready.**

What is genuinely good here, and should not be lost in the gap count: the governance arithmetic is
correct and **differentially proven against an independent reference implementation**; the
capability-absence controls are real, mechanical and build-failing; the four defects Doc 04's review
found — two Critical — are fixed with regression tests that are now first-class cases in Doc 07; and
the anti-capture machinery (snapshot, maturation, entrenchment, surge quorum) defeats every takeover
scenario the risk register describes. That is a strong Phase-1 foundation. It is not a launch.

| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
| Tester (author, **R**) | Ji-woo Park | **Submitted — 113 open Must rows recorded** | 2026-08-12 | v2.0.1, Status In Review. 49 new Must rows added (FR-074..FR-120, NFR-027/028). Traceability defects from cycle-1 review corrected. FR-011 and FR-035 remain COMPLETE. |
| reviewer-qa (**A**, independent verifier) | _pending_ | | | Must independently verify these 113 gaps (including 38 G-TRACE rows FR-074..FR-111 and NFR-007) before any merge sign-off |
| Principal Architect | _pending_ | | | Owns the 15 missing `DES` links (Doc 03 §5.2) and OPEN-02/03/11 |
| Product Owner (**A** for Gate 2) | _pending_ | | | Owns `OI-01`…`OI-05`, the `FR-005`/`FR-049`/`FR-050`/`FR-052`/`FR-053` story gap, and the OPEN-01 receipt-freeness decision |
| Project Manager (**R** for Gate 2) | _pending_ | | | Gate-2 packet: this matrix is the traceability evidence, and it fails the criterion |
| **Human approver — Gate 2** | _pending_ | **Approve / Rework / Reject** | | Recommendation from the tester: **do not schedule Gate 2 until the Must-row count closes** |

---
### Gate rule
**0 gaps in Must rows = traceability criterion met. There are 113 open Must rows. The gate stays shut.**
