# Requirements Traceability Matrix (RTM) — Trumocracy

```
Document ID:   RTM-TRUMOCRACY
Version:       1.0.0
Status:        In Review
Owner:         Ji-woo Park — Test Lead (tester, author)
Verifier:      reviewer-qa (independent) — Accountable for "RTM complete (zero gaps)" per CLAUDE.md RACI
Source:        SRS-TRUMOCRACY v1.0.0 · SDD-TRUMOCRACY v1.0.0 §5.2 · BKLG-TRUMOCRACY v1.0.0 ·
               CODE-TRUMOCRACY v1.0.0 · MTP-TRUMOCRACY v1.0.0 · TC-TRUMOCRACY v1.0.0
Last updated:  2026-08-09
```

> **Based on:** Bidirectional RTM (ISO/IEC/IEEE 29148 traceability). **Living.** **Verified at each gate.**
> **Chain:** `BR → FR/NFR → DES (+ADR) → SCR → EP ▸ FE ▸ US → UT/TC → Status`
> _A blank cell in a Must row is a documentation defect that **blocks the gate**._

---

# SUMMARY — read this first

| Measure | Count |
|---|---|
| Requirement rows in this matrix | **87** (64 Must + 23 Should/Could) |
| **Must rows (gating)** | **64** — 42 Must FR + 22 Must NFR |
| **Must rows COMPLETE** | **10** |
| **Must rows OPEN (gap)** | **54** |
| Must-row completion | **15.6%** |
| Non-Must rows complete / gap | 3 / 20 |
| Total rows complete / gap | 13 / 74 |

### Must-row gaps by primary reason

| Code | Reason | Must rows | Closes in |
|---|---|---|---|
| `G-PHASE3` | The capability is **not implemented** in this drop — MACI, Elections, Recall, Treasury, recovery, relayer (Doc 06 §7.3) | **17** | Phase 3 |
| `G-NOMECH` | The design has **no mechanism** for the stated guarantee — the requirement cannot be tested because nothing implements it | **9** | Design fix required first |
| `G-NOENV` | Needs an **environment or instrument that does not exist** — devnet/testnet/staging, CI scanner, device lab | **9** | Phase 2–3 |
| `G-EXTERNAL` | Needs **external evidence** — independent audit, legal review, usability study, reproducible-build attestation | **5** | Phase 2–3 (MS-09/MS-10) |
| `G-UI` | Needs the **client surface** built and verified — accessibility, localisation, plain language, jargon scan | **5** | Phase 3 |
| `G-UNMEASURABLE` | **Not falsifiable or not measurable as written** — needs a requirement restatement, not more testing | **4** | Requires a product/architecture decision |
| `G-CIRCUIT` | Depends on **compiled circuits and real verifiers**; today enforced by `MockVerifierAlwaysTrue` (Doc 06 §7.1–7.2) | **3** | Phase 2 ceremonies |
| `G-TRACE` | The **chain itself is broken** — no `DES` in Doc 03 §5.2, or no `US` in Doc 05 — independently of any test result | **2** primary · **16** affected | Immediate (documentation) |
| | **Total** | **54** | |

### Chain-integrity findings (independent of test status)

- **6 Must FRs have no `DES` in SDD §5.2:** `FR-010`, `FR-011`, `FR-035`, `FR-039`, `FR-056`, `FR-060`.
- **9 Must NFRs have no `DES` in SDD §5.2:** `NFR-006`, `NFR-009`, `NFR-010`, `NFR-011`, `NFR-012`, `NFR-013`, `NFR-015`, `NFR-023`, `NFR-024`.
- **1 Must NFR has no story and no backlog item:** `NFR-007` (reliability/availability).
- **Two of these — `FR-011` and `FR-035` — would otherwise be complete.** Their tests pass; their
  design link does not exist. That is a Doc 03 defect, owner **Principal Architect**, and it is
  cheap to fix. It is recorded, not papered over.

### Gate-2 verdict — one paragraph, blunt

**Gate 2 cannot be approved today, and it is not close.** Of 64 gating Must rows, **10 close and 54
do not** — a 15.6% completion rate against a gate criterion that requires **zero** open Must rows.
The failure is not a testing shortfall to be caught up on: **17 rows are open because the feature
does not exist yet** (receipt-free voting, elections, recall, recovery, sponsorship degradation),
**9 because the design has no mechanism at all** for a guarantee Doc 02 states as MUST (the
per-region attestor cap, the activation dwell period, the residency cooldown, the churn limit, the
open-ballot flag freeze, on-chain source independence), and **4 because the requirement as written
cannot be falsified by any suite** (`FR-002`'s "better than chance", `NFR-001`'s unset collusion
bound, `NFR-004`'s duplicate rate which the system is deliberately built to make unmeasurable).
Nothing has been audited, no environment exists, no rollback has been drilled, and every proof in
the system is currently produced by a mock verifier. Doc 04's own Gate-2 blockers `OPEN-01`…
`OPEN-06` and `OPEN-11` are **partially** closed — Doc 06 §5 genuinely fixed `OPEN-04`, `OPEN-05`
and `OPEN-06` with named regression tests, which is real progress — but `OPEN-01`, `OPEN-02`,
`OPEN-03` and `OPEN-11` remain open and each blocks a Must row. **The correct reading of this matrix
is that Trumocracy is at the end of Phase 1 and Gate 2 belongs after Phase 3, exactly where Doc 13
put it (MS-13, 2027-05-14).** Anyone presenting this drop as launch-ready would be presenting a
false green light.

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

### 3.1 Must FRs — the 42 gating functional rows

Legend: **✅ COMPLETE** · **☐ OPEN** (reason code in the last column). `DES` cells reading **none**
are a Doc 03 §5.2 defect.

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
| BR-001 | **FR-010** draft creation, jurisdiction, name/emblem collision | **none** | SCR-04 | EP-02 ▸ FE-005 ▸ US-0011, US-0012 | TC-0010, TC-1041 | none | ☐ **G-NOMECH + G-TRACE** — no emblem field, no collision check; and no `DES` in Doc 03 §5.2 |
| BR-001 | **FR-011** eight mandatory pillars | **none** | SCR-04, SCR-05 | EP-02 ▸ FE-006 ▸ US-0014, US-0015 | TC-0009 | UT-0033, UT-0034, UT-0035, UT-0036 (**obs. pass**), UT-0730, UT-0732 | ☐ **G-TRACE** — **tests pass**; the row fails only because Doc 03 §5.2 assigns no `DES`. Also carries OPEN-07 (the standard is a 280-char length floor, not substance; OI-09 open) |
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
| BR-010, BR-011 | **FR-035** no transfer, delegation or proxy | **none** | — | EP-04/EP-06 ▸ FE-011/FE-017 ▸ US-0028, US-0040 | TC-1604, TC-1605, TC-2605, TC-2621 | UT-0300, UT-0301, UT-0040 (**obs.**) | ☐ **G-TRACE** — **tests pass** (no transferable surface in ABI or bytecode); the row fails only because Doc 03 §5.2 assigns no `DES` |
| BR-004 | **FR-036** self-nomination, region-scoped | DES-027 | SCR-15 | EP-07 ▸ FE-020 ▸ US-0046, US-0047, US-0048 | TC-0028 | none | ☐ **G-PHASE3** — Elections not implemented; `elections` flag off above dev |
| BR-009 | **FR-037** informed consent; non-candidates never disclosed | DES-028 | SCR-15 | EP-07 ▸ FE-021 ▸ US-0049, US-0050 | TC-0029 | none | ☐ **G-PHASE3** |
| BR-004, BR-008 | **FR-039** election scoped, timetable immutable | **none** | SCR-16 | EP-07 ▸ FE-022 ▸ US-0051, US-0052 | TC-0030, TC-1024 | UT-0021, UT-0202 (schedule half only) | ☐ **G-PHASE3 + G-TRACE** |
| BR-004, BR-008 | **FR-040** automatic office assignment | DES-029 | SCR-16 | EP-07 ▸ FE-022 ▸ US-0053 | TC-0030 | none | ☐ **G-PHASE3** |
| BR-005 | **FR-042** member-initiated recall | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0057 | TC-0031 | none | ☐ **G-PHASE3** — `recall` flag off above dev |
| BR-005, BR-012 | **FR-043** two-stage recall, higher bar | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0058 | TC-0031, TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-045** automatic revocation + by-election | DES-030 | SCR-18 | EP-08 ▸ FE-024 ▸ US-0060 | TC-0032 | none | ☐ **G-PHASE3** |
| BR-005, BR-008 | **FR-047** immutable version history | DES-031 · ADR-009 | SCR-17 | EP-08 ▸ FE-023 ▸ US-0055 | TC-0026, TC-1045, TC-1614 | UT-0523 (**obs.**) | ☐ **G-NOENV** — manifesto versions are append-only; **no test proves prior charter versions stay retrievable**, and no diff view exists |
| BR-010 | **FR-051** money buys no governance advantage | DES-033 · ADR-007 | — | EP-04 ▸ FE-011 ▸ US-0028 | TC-1021, TC-1604, TC-1605, TC-1608 | UT-0040 (**obs.**), UT-0300, UT-0301, UT-0302, UT-0121 | ✅ **COMPLETE (conditional)** — no payment surface and no weighting surface exist. **MUST be re-verified when the `treasury` flag ships in Phase 3**; this row does not carry forward unexamined |
| BR-005, BR-008, BR-009 | **FR-054** public record of every governance action | DES-035 | SCR-20 | EP-09 ▸ FE-025 ▸ US-0061 | TC-0027, TC-1047, TC-1048, TC-1207 | UT-0500, UT-0510, UT-0511, UT-0524 (**obs.**) | ☐ **G-NOENV** — replay works for what exists; **"every" is unverifiable** while nomination, election, recall, treasury and filtering actions do not exist, and there is no event-schema no-personal-data assertion |
| BR-008, BR-009 | **FR-056** no operator discretion; logged display filtering | **none** | SCR-20 | EP-09 ▸ FE-026 ▸ US-0064, US-0065 | TC-0039, TC-1600, TC-1601, TC-1614, TC-2661, TC-2720, **TC-2721** | UT-0310, UT-0311, UT-0311b, UT-0311c, UT-0301 | ☐ **G-NOMECH + G-TRACE** — the *absence* half is strongly proven; **the display-filtering register does not exist**, so the only permitted intervention has no public log |
| BR-007 | **FR-058** recovery without seed phrases | DES-040, DES-042 · ADR-002 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0068 | TC-0034, TC-2700, TC-2701 | UT-2513–UT-2519 (key derivation only) | ☐ **G-PHASE3** — the social-recovery / 4337 path is not implemented |
| BR-009 | **FR-059** recovery reveals nothing | DES-042 | SCR-19 | EP-10 ▸ FE-028 ▸ US-0069 | TC-2700 | none | ☐ **G-PHASE3** |
| BR-007 | **FR-060** no token, no gas, no jargon | **none** | all primary | EP-10 ▸ FE-027 ▸ US-0066 | TC-0035, TC-2203, TC-2331 | none | ☐ **G-UI + G-TRACE** — no jargon scanner, no deployed journey; and no `DES` in Doc 03 §5.2 |
| BR-007, BR-012 | **FR-061** sponsorship degrades, never denies | DES-043 · ADR-014 | — | EP-10 ▸ FE-027 ▸ US-0067 | TC-0036, TC-2152 | UT-0054 (**obs.**, flag permanence only) | ☐ **G-PHASE3** — the paymaster/relayer service is not built; queue-with-explanation cannot be exercised |

**Must FR subtotal: 42 rows · 10 complete · 32 open.**

### 3.2 Must NFRs — the 22 gating quality rows

| BR | NFR | DES (+ADR) | US / NF item | TC (Doc 07) | UT evidence | Status |
|---|---|---|---|---|---|---|
| BR-009 | **NFR-001** no linkage by any actor | DES-004, DES-008 | US-0007, US-0026, US-0038 · NF-01 | TC-1607, TC-1959–TC-1961, TC-1963, TC-2650 | UT-0108, UT-0525 (**obs.**), UT-0740 | ☐ **G-UNMEASURABLE — OPEN-13** the collusion bound (`OI-10`) is unset, so the adversary model and the pass threshold do not exist |
| BR-009 | **NFR-002** anonymity set k ≥ 1,000 | DES-008 · ADR-004 | US-0007, US-0039 · NF-01 | TC-1950–TC-1955, TC-1962, TC-2651, TC-2652 | UT-0048–UT-0050 (**obs.**), UT-0116, UT-2607, UT-2608 (**obs.**) | ☐ **G-UNMEASURABLE — OPEN-10 / OI-05** the enforcement mechanism is the strongest evidence in the drop, but "escalation touches publication, never eligibility" has no pass line while `OI-05` is undecided, and there is no runtime invariant over published actions |
| BR-011 | **NFR-003** coercion resistance | DES-023, DES-024, DES-063 · ADR-006 | US-0041 | TC-2610, TC-2611, TC-2614 | UT-0710–UT-0712 (disclosure only) | ☐ **G-PHASE3 — OPEN-01** MACI is Phase 3; a formal argument and an independent adversarial audit are also required and have not begun |
| BR-006, BR-012 | **NFR-004** Sybil resistance ≤ 0.1% | DES-001, DES-011 · ADR-003 | US-0005 | TC-2600–TC-2603, TC-2642, TC-1850 | UT-0109, UT-0320, UT-0321, UT-0325, UT-0326 | ☐ **G-UNMEASURABLE — OPEN-14 + OPEN-02** the duplicate rate **is not internally measurable by design**: the system refuses to link a nullifier to a person, so measurement requires a consented out-of-band audited sample at the attestors. The 50%-per-region cap additionally has no mechanism |
| BR-007 | **NFR-005** cost < USD 0.01 median, citizen pays 0 | DES-043 · ADR-014 | US-0066 · NF-04 | TC-2200–TC-2203 | harness gas (regression detector only) | ☐ **G-NOENV — OPEN-15** harness gas excludes intrinsic, calldata and blob fee, so it is not a price; and the action denominator is not enumerated |
| BR-007 | **NFR-006** performance on the reference device | **none** | US-0070 · NF-05 | TC-2080–TC-2084 | none | ☐ **G-NOENV + G-TRACE** — no reference-device harness exists |
| BR-007, BR-008 | **NFR-007** availability 99.5% / 99.9% | DES-051 | **none** | TC-1046, TC-2150, TC-2153, TC-2422 | UT-0517 (**obs.**, tolerance only) | ☐ **G-NOENV + G-TRACE** — **no story and no backlog item implements this NFR**, and no environment exists to measure it |
| BR-008, BR-012 | **NFR-009** independent security audit, 0 critical/high | **none** | NF-02, NF-03 | TC-1863, TC-1600–TC-1614 | capability-absence suite (partial) | ☐ **G-EXTERNAL** — neither audit firm has reported (MS-09, 2027-03-12); the red team (NF-03) has not run |
| BR-009 | **NFR-010** no personal data at rest or on the record | **none** | US-0002 | TC-2050–TC-2053 | UT-0046 (**obs.**), UT-0108 | ☐ **G-NOENV + G-TRACE** — the three build-failing scanners of Doc 04 §11 do not exist |
| BR-007 | **NFR-011** WCAG 2.2 AA | **none** | US-0045, US-0070 | TC-2250–TC-2255 | UT-0704, UT-0721 (two components, not executed) | ☐ **G-UI + G-TRACE** — no automated a11y gate; no manual screen-reader pass has been performed |
| BR-007 | **NFR-012** device & bandwidth floor | **none** | US-0012, US-0070 · NF-05 | TC-2080, TC-2083, TC-2084, TC-2382 | none | ☐ **G-UI + G-TRACE** — offline draft composition (US-0012) has no implementing code or test |
| BR-007 | **NFR-013** 8 locales incl. RTL | **none** | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI + G-TRACE** — no locale files, no string-coverage gate |
| BR-008 | **NFR-014** censorship resistance | DES-041, DES-050, DES-051 · ADR-001 | NF-06 | TC-2423, TC-2670, TC-2671 | UT-0054 (**obs.**, escape hatch cannot be disabled) | ☐ **G-NOENV** — the blocking simulation needs an isolated network lab that does not exist |
| BR-009 | **NFR-015** legal / regulatory posture | **none** | US-0003 | TC-2730, TC-3253 | none | ☐ **G-EXTERNAL + G-TRACE** — per-jurisdiction legal review is a launch condition; the three pilots are still unnamed (`OI-04`) |
| BR-007 | **NFR-016** key recovery ≥ 99% in 14 days | DES-042 · ADR-002 | US-0068 | TC-0034, TC-2700, TC-2701 | none | ☐ **G-PHASE3** — recovery is not implemented |
| BR-008 | **NFR-017** governed upgradeability, 0 unilateral paths | DES-039 · ADR-010 | US-0064 | TC-1600, TC-1606, TC-1613, TC-2521, TC-2523, TC-2750 | UT-0310, UT-0312, UT-0344 | ☐ **G-EXTERNAL** — "0 unilateral paths **at audit**" needs the audit; the storage-layout control (TC-1613) and the registry-timelock assertion (TC-2523) are also unwritten |
| BR-008 | **NFR-020** rollback < 15 min; flags kill-switchable; **open-ballot freeze** | DES-037 | NF-07 | TC-1610, TC-1611, TC-2425, **TC-2426** | UT-0053, UT-0055 (**obs.**), UT-0360, UT-0361 | ☐ **G-NOMECH — OPEN-03** the rollback drill has never run, and **`FeatureFlags` has no notion of an in-flight ballot**, so the second clause has no mechanism |
| BR-008 | **NFR-021** open source + reproducible builds | DES-045 · ADR-011 | US-0062 | TC-1206–TC-1208, TC-2671, TC-1803 | UT-2577, UT-2583, UT-0515 (**obs.**), UT-0415 | ☐ **G-EXTERNAL** — differential agreement is strong, but reproducibility has not been verified by an independent party |
| BR-007 | **NFR-022** usability, SUS ≥ 75 | DES-040 | US-0015, US-0070 | TC-3250–TC-3253 | none | ☐ **G-EXTERNAL** — no moderated study (n ≥ 200 per locale) has been run |
| BR-007, BR-009 | **NFR-023** plain language, no jargon, safe notifications | **none** | US-0003, US-0015, US-0034, US-0045, US-0066 | TC-2331, TC-2332 | none | ☐ **G-UI + G-TRACE** — no jargon scanner and no readability check exist |
| BR-009 | **NFR-024** anti-harassment | **none** | US-0026, US-0050, US-0059 | TC-0017, TC-1959, TC-2652 | UT-0520, UT-0525 (**obs.**) | ☐ **G-PHASE3 + G-TRACE** — the nomination and recall surfaces that create the harassment risk do not exist yet |
| BR-008 | **NFR-025** operator cannot censor an individual (≤ 60 min) | DES-041 · ADR-001 | NF-06 | TC-2420, TC-2680 | none | ☐ **G-NOMECH — OPEN-11** `NFR-025` demands ≤ 60 min; ADR-001 states force inclusion is 12–24 h. **Irreconcilable as written** — no suite can pass a criterion the design contradicts |

**Must NFR subtotal: 22 rows · 0 complete · 22 open.**

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
| FR-046 manifesto & commitments | Should | DES-031 | US-0054 | TC-0026 | ☐ versions exist; status/evidence model not evidenced |
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

## 6. Coverage dashboard

| Dimension | Total | Traced (chain links all present) | Complete (chain closes with a passing TC) | Gaps |
|---|---|---|---|---|
| BR | 12 | 12 | **0** — every BR depends on ≥1 open Must FR | 12 |
| FR — Must | 42 | 36 (6 lack a `DES`) | **10** | **32** |
| FR — Should/Could | 19 | 14 (5 lack a `US`) | 3 | 16 |
| NFR — Must | 22 | 12 (9 lack a `DES`, 1 lacks a `US`) | **0** | **22** |
| NFR — Should | 4 | 2 | 0 | 4 |
| Risks | 16 | 16 | 4 fully mitigated & proven | 12 |
| Stories | 70 | 70 (all carry Gherkin AC) | 12 meet the Definition of Done | 58 |
| Test cases | 255 | 255 | 143 automated · 72 observed passing | 112 not executable |
| Screens | 20 | 20 mapped | 0 verified (no UI suite executed) | 20 |

**Definition of Done check (CLAUDE.md).** A story is done only when its RTM row is complete.
**12 of 70 stories** meet that bar: US-0019, US-0024, US-0025, US-0026, US-0027, US-0031, US-0033,
US-0034, US-0035, US-0036, US-0037, US-0028. Every other story is **not done**.

## 7. Gap log — all 54 open Must rows

Owners are the named requirement owners from Doc 02; phase targets are Doc 13 milestones.

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
| 9 | FR-010 | G-NOMECH + G-TRACE | No emblem field, no name-collision check; no `DES` | Tomás Ferreira | Design fix |
| 10 | FR-011 | **G-TRACE** | Tests pass; **Doc 03 §5.2 assigns no `DES`** (also OPEN-07 / OI-09) | Principal Architect | Immediate |
| 11 | FR-014 | G-CIRCUIT | Resident-only enforcement rests on the mocked residency proof | Tomás Ferreira | MS-08 |
| 12 | FR-018 | G-NOMECH | **No dwell period is implemented** (OI-08 unset) | Tomás Ferreira | Design fix |
| 13 | FR-023 | G-NOMECH | No join/leave churn rate limit | Rafael Duarte | Design fix |
| 14 | FR-030 | G-PHASE3 | MACI not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 15 | FR-031 | G-PHASE3 | **OPEN-01** — receipt-freeness needs MACI | Aisha Nkemdirim | Phase 3 |
| 16 | FR-032 | G-PHASE3 | **OPEN-01** — invisible override needs MACI | Aisha Nkemdirim | Phase 3 |
| 17 | FR-033 | G-PHASE3 | Phase-1 tallies expose individual votes; no verifier app | Erik Lindqvist | Phase 3 |
| 18 | FR-035 | **G-TRACE** | Tests pass; **Doc 03 §5.2 assigns no `DES`** | Principal Architect | Immediate |
| 19 | FR-036 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 20 | FR-037 | G-PHASE3 | Candidacy/consent not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 21 | FR-039 | G-PHASE3 + G-TRACE | Elections not implemented; no `DES` | Aisha Nkemdirim | Phase 3 |
| 22 | FR-040 | G-PHASE3 | Elections not implemented | Aisha Nkemdirim | Phase 3 |
| 23 | FR-042 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 24 | FR-043 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 25 | FR-045 | G-PHASE3 | Recall not implemented | Aisha Nkemdirim | Phase 3 |
| 26 | FR-047 | G-NOENV | Charter-version retrievability and the diff view are untested/unbuilt | Erik Lindqvist | Phase 2 |
| 27 | FR-054 | G-NOENV | "Every action" unverifiable while five action types do not exist; no event-schema assertion | Erik Lindqvist | Phase 3 |
| 28 | FR-056 | G-NOMECH + G-TRACE | Display-filtering register does not exist; no `DES` | Daniel Okonkwo | Design fix |
| 29 | FR-058 | G-PHASE3 | Social recovery / 4337 path not implemented | Amara Diallo | Phase 3 |
| 30 | FR-059 | G-PHASE3 | Recovery not implemented | Dr. Lena Kowalczyk | Phase 3 |
| 31 | FR-060 | G-UI + G-TRACE | No jargon scanner, no deployed journey; no `DES` | Hiroshi Tanaka | Phase 3 |
| 32 | FR-061 | G-PHASE3 | Paymaster/relayer not built | Hiroshi Tanaka | Phase 3 |
| 33 | NFR-001 | G-UNMEASURABLE | **OPEN-13** — collusion bound (`OI-10`) unset | Dr. Lena Kowalczyk | Product decision |
| 34 | NFR-002 | G-UNMEASURABLE | **OPEN-10 / OI-05** — publication vs eligibility escalation undecided | Dr. Lena Kowalczyk | Product decision |
| 35 | NFR-003 | G-PHASE3 | **OPEN-01** — MACI + formal argument + adversarial audit | Aisha Nkemdirim | Phase 3 |
| 36 | NFR-004 | G-UNMEASURABLE | **OPEN-14** — duplicate rate is **not internally measurable by design**; needs a consented out-of-band audited sample. Plus **OPEN-02** | Marcus Adeyemi | Out-of-band instrument + design fix |
| 37 | NFR-005 | G-NOENV | **OPEN-15** — no price instrument, no enumerated action set | Hiroshi Tanaka | Phase 2 testnet |
| 38 | NFR-006 | G-NOENV + G-TRACE | No reference-device harness; no `DES` | Hiroshi Tanaka | Phase 2 (NF-05) |
| 39 | NFR-007 | G-NOENV + G-TRACE | **No story and no backlog item implements it**; no environment | Chen Wei | Immediate (backlog) + Phase 3 |
| 40 | NFR-009 | G-EXTERNAL + G-TRACE | Audits not reported; no `DES` | Rafael Duarte | MS-09 / MS-10 |
| 41 | NFR-010 | G-NOENV + G-TRACE | Data-inventory scanners not built; no `DES` | Dr. Lena Kowalczyk | Phase 2 |
| 42 | NFR-011 | G-UI + G-TRACE | No a11y gate; no manual screen-reader pass; no `DES` | Nadia Hassan | Phase 3 |
| 43 | NFR-012 | G-UI + G-TRACE | No device lab; offline drafting unimplemented; no `DES` | Nadia Hassan | Phase 3 |
| 44 | NFR-013 | G-UI + G-TRACE | No locales, no coverage gate; no `DES` | Nadia Hassan | Phase 3 |
| 45 | NFR-014 | G-NOENV | No isolated network lab (NF-06) | Chen Wei | Phase 2 |
| 46 | NFR-015 | G-EXTERNAL + G-TRACE | Legal review per jurisdiction; pilots unnamed (`OI-04`); no `DES` | Sofia Marchetti | Before launch |
| 47 | NFR-016 | G-PHASE3 | Recovery not implemented | Amara Diallo | Phase 3 |
| 48 | NFR-017 | G-EXTERNAL | "0 unilateral paths at audit" needs the audit; TC-1613/TC-2523 unwritten | Rafael Duarte | MS-09 |
| 49 | NFR-020 | G-NOMECH | **OPEN-03** — no open-ballot flag freeze; rollback drill never run | Chen Wei | Design fix + NF-07 |
| 50 | NFR-021 | G-EXTERNAL | Reproducibility not verified by an independent party | Rafael Duarte | Phase 2 |
| 51 | NFR-022 | G-EXTERNAL | No moderated usability study | Grace Mbeki | Phase 3 |
| 52 | NFR-023 | G-UI + G-TRACE | No jargon or readability check; no `DES` | Nadia Hassan | Phase 3 |
| 53 | NFR-024 | G-PHASE3 + G-TRACE | Nomination/recall surfaces do not exist; no `DES` | Daniel Okonkwo | Phase 3 |
| 54 | NFR-025 | G-NOMECH | **OPEN-11** — 60 min vs ADR-001's 12–24 h is irreconcilable as written | Chen Wei | Requirement or design restatement |

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
| Must rows with a complete chain | 64 / 64 | **10 / 64** | **FAIL** |
| Open Must rows | 0 | **54** | **FAIL** |
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
| Tester (author, **R**) | Ji-woo Park | **Submitted — 54 open Must rows recorded** | 2026-08-09 | v1.0.0, Status In Review |
| reviewer-qa (**A**, independent verifier) | _pending_ | | | Must independently verify these 54 gaps and the two `G-TRACE` rows before any merge sign-off |
| Principal Architect | _pending_ | | | Owns the 15 missing `DES` links (Doc 03 §5.2) and OPEN-02/03/11 |
| Product Owner (**A** for Gate 2) | _pending_ | | | Owns `OI-01`…`OI-05`, the `FR-005`/`FR-049`/`FR-050`/`FR-052`/`FR-053` story gap, and the OPEN-01 receipt-freeness decision |
| Project Manager (**R** for Gate 2) | _pending_ | | | Gate-2 packet: this matrix is the traceability evidence, and it fails the criterion |
| **Human approver — Gate 2** | _pending_ | **Approve / Rework / Reject** | | Recommendation from the tester: **do not schedule Gate 2 until the Must-row count closes** |

---
### Gate rule
**0 gaps in Must rows = traceability criterion met. There are 54. The gate stays shut.**
