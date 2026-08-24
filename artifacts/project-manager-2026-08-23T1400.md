# Session Note — project-manager (Ana-Maria Petrescu)

```
Role:      project-manager
Timestamp: 2026-08-23T1400
Phase:     Governance — v1/v2 delivery split recording + Doc 13 v2.1.0 re-plan
Product:   Trumocracy
```

---

## What was done this session

Executed three deliverables arising from the Rathish 2026-08-23 v1/v2 delivery-split directive
(transmitted via coordinator). No numbered documents in `docs/` other than `docs/13-project-plan.md`
were edited. No Docs 01, 02, 03, 05 were touched. No product code was written.

### Artifacts written / updated

| Artifact | Action | Description |
|----------|--------|-------------|
| `artifacts/status/DECISIONS-2026-08-23-V1-V2-SPLIT.md` | **Created** | Decision record for the v1/v2 delivery split: verbatim-in-substance directive (§2), what was applied with artifact citations (§3), what remains for the approver (§4: items a–f, including v1 stack ratification, 16 contradiction-surface confirmations, T-01..T-05, re-scoped Gate-2, NFR-009 v1 re-reading, 2027-05-14 referent confirmation), open items table (§5), sources (§6). Resolves ISS-01 (Medium) in the Doc 02 v2.6.0 c1 review — the dangling reference that blocked v2.7.0. |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | **Updated** (additive) | New section "v1/v2 delivery split (Definition A / Definition B) — 2026-08-23" appended: decision pointer, document-version table with review verdicts, Gate-2 posture change, pending items table P-1..P-11 (including pre-existing blockers unchanged by the split). No prior text altered. |
| `docs/13-project-plan.md` | **Updated** (surgical edits; **2.0.3 → v2.1.0**, Status: In Review) | Seven surgical edits: (1) header bump + sources; (2) "Read this first" banner v2.1.0 note; (3) §2.1 Must count 110 → 112, SRS v2.4.0 → v2.6.0; (4) §3.1 supersession annotation for "Why Phase 3 is the launch" paragraph; (5) §3.3 v1-gate annotation directing to §3.5; (6) §3.5 new section (v1 delivery plan: MS-V1-01..MS-V1-09 build-order stages, effort range 5–9 months, production-readiness bar PR-1..PR-10, v2 re-entry disposition); (7) §6 RISK-31..RISK-34 added; (8) §11 v2.1.0 re-plan log entry prepended (newest first). |
| `artifacts/project-manager-2026-08-23T1400.md` | **Created** | This session note. |
| `artifacts/memory-index.json` | **Updated** (surgical append) | One new entry appended. |

---

## Decisions recorded

| # | Decision | Disposition |
|---|----------|-------------|
| 1 | v1/v2 delivery split | DECIDED — Definition A (v1, conventional-auth) / Definition B (v2, ZK/MACI). Applied in Doc 03 v2.3.1, Doc 02 v2.6.0, Doc 13 v2.1.0. |
| 2 | Classification test | APPLIED — DEFERRED-v2 iff requirement exists ONLY for anonymity/private ballots/coercion-resistance/hostile-state safety. 4 FRs + 1 NFR deferred. |
| 3 | Honesty requirement | APPLIED — FR-131 minted (Must, Nadia Hassan) for v1 disclosure at every vote-cast surface; H-01..H-06 honesty register required in README. |
| 4 | Reuse guardrail | APPLIED — ADR-024 seams (DES-095/DES-096) committed; v2 is implementation swap, never rewrite. RISK-34 added as enforcement mechanism. |
| 5 | v1 production-readiness bar | PLAN RECOMMENDATION in Doc 13 §3.5 — PR-1..PR-10. AWAITING APPROVER CONFIRMATION on NFR-009 v1 re-reading (item e in §4 of decision record). |
| 6 | v2 re-entry / Gate-2 re-scoping | PLAN RECOMMENDATION — 2027-05-14 attaches to Definition B; v1 gate date NOT SET. AWAITING APPROVER CONFIRMATION (item d in §4 of decision record). |

---

## IDs minted / created this session

| Prefix | IDs | Notes |
|--------|-----|-------|
| RISK | RISK-31, RISK-32, RISK-33, RISK-34 | v1-specific risks; added to Doc 13 §6 |
| MS | MS-V1-01..MS-V1-09, MS-V1-LRG | v1 build-order milestones + launch-readiness gate (date NOT SET); added to Doc 13 §3.5 |
| PR | PR-1..PR-10 | v1 production-readiness bar items; added to Doc 13 §3.5.4 |

No `FR`, `NFR`, `DES`, `ADR`, `BR`, `CON`, `OI`, `TD` IDs minted this session.

---

## Sources read this session

- `artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md` — house style reference
- `artifacts/status/GATE-STATUS-2026-08-09.md` — current gate status; read before appending
- `artifacts/memory-index.json` — read before updating
- `artifacts/project-manager-2026-08-20T1053.md` — house style reference for session note format
- `artifacts/product-owner-2026-08-23T0900.md` — PO session note; scope of v2.6.0 edits
- `artifacts/reviews/02-requirements-srs-v2.6.0-business-cycle1.md` — ISS-01 (Medium) details
- `docs/13-project-plan.md` v2.0.3 — read before all edits; structure confirmed
- Memory-index tail — confirmed latest entries and highest RISK-## (RISK-30 before this session)

---

## Open items — pending after this session

| Item | Owner | Priority |
|------|-------|----------|
| **IMMEDIATE:** Doc 02 v2.7.0 rework (ISS-01 now resolved; ISS-02 Low also pending) → c2 re-review | product-owner (Priya Raghunathan) | Immediate — unblocked by DECISIONS-2026-08-23-V1-V2-SPLIT.md |
| **IMMEDIATE:** Doc 13 v2.1.0 c1 business-mode review (assign neutral, non-owner reviewer) | PM (Ana-Maria Petrescu) to assign | Immediate — after this session |
| **IMMEDIATE:** Doc 05 v2.1.0 c1 business-mode review debt (carry-forward from 2026-08-22) | PM to assign neutral reviewer | Outstanding — no review report exists |
| Approver confirmations (a)–(f) per `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4` | Rathish (human approver) | Before v1 implementation begins |
| T-01..T-05 Charter-tension rulings (Doc 03 §10.13.7, ADR-024) | Rathish (human approver) | Before v1 implementation of affected requirements |
| Doc 03 cascade annotation: FR-131/DES-098 pre-allocation error (§12 references "FR-130" for DES-098) | architect (Ravi Deshmukh) — next Doc 03 increment | Before RTM can be complete for FR-131 |
| DES for FR-130, FR-131; FR-129 tier-determination | architect (Ravi Deshmukh) | Next Doc 03 DES increment |
| US for FR-131 | product-owner (Priya Raghunathan) | After DES assigned |
| TC/RTM for FR-121..FR-131 | tester (Ji-woo Park) | Gate-2 blocker (both Definitions) |
| CON-015 legal opinion (India/Aadhaar) | Sofia Marchetti | Gate-2 blocker; NOT STARTED |
| Doc 04 (Test Strategy) technical-mode review | PM to assign neutral reviewer | Gate-2 blocker (both Definitions) |

---

## Gate status (unchanged except Doc 13 version)

- **Gate 1:** APPROVED (2026-08-11, Rathish, unconditional).
- **Gate 2 (Definition B / v2):** NOT READY. Date 2027-05-14 UNCHANGED pending approver
  confirmation of re-scoping. RTM: 114+ open Must rows. Must count now 112. Legal-opinion: NOT STARTED.
- **v1 launch-readiness gate:** date NOT SET — plan recommendation AWAITING APPROVER CONFIRMATION.

---

*The project-manager does not approve gates and does not write product code. This note
reflects coordination, governance, and planning work only.*

---

## Rework section — Doc 13 v2.2.0 (appended 2026-08-23)

Executed Doc 13 v2.1.0 → v2.2.0 rework following cycle-1 business-mode review FAIL (84%,
0C/1H/2M/2L; `artifacts/reviews/13-project-plan-v2.1.0-business-cycle1.md` by sre acting
as neutral reviewer). Five surgical fixes applied.

| Issue | Fix Applied |
|-------|------------|
| ISS-H1 (High) §6 RISK register | RISK-22..RISK-30 recovered from Doc 02 §10 and inserted in §6 in ordinal position between RISK-21 and RISK-31. §6 header note updated to document provenance of RISK-22..30 (Doc 02 §10, minted v1.1.0 / v2.0.0 era) and add RISK-31..34 annotation. |
| ISS-M1 (Medium) §3.5.1 + PR-10 | v1 Must-set arithmetic corrected: "106 IN-v1 + 19 PARTIAL + FR-131 = 112" was arithmetically wrong (= 126). Correct derivation: 112 total Must (SRS v2.7.0 §11) − 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = **108**. Applied in both §3.5.1 body text and §3.5.4 PR-10 table row. |
| ISS-M2 (Medium) MS-V1-09 + PR-7 | Honesty-register citation updated H-01..H-06 → H-01..H-14 in the §3.5.2 stage table (MS-V1-09 row) and the §3.5.4 PR-7 row. Doc 02 v2.7.0 §16.4 expanded the register from 6 to 14 entries when ISS-02 was resolved. |
| ISS-L1 (Low) Header + §2.1 | SRS source pin updated v2.6.0 → v2.7.0 in the header `Source:` field and the §2.1 opening sentence. |
| ISS-L2 (Low) §13.1 | Document-review precondition row updated: Doc 02 v2.7.0 Approved (c2 PASS 98%); Doc 13 v2.1.0 FAIL c1 recorded with report cite; v2.2.0 rework pending c2; prior Doc 13 v2.0.3 PASS noted for context. |

Additional changes made:
- Header: version 2.1.0 → 2.2.0; Status: In Review (pending c2)
- Banner: v2.2.0 re-plan note appended after v2.1.0 note
- §11 re-plan log: v2.2.0 entry prepended (newest-first order)
- `artifacts/status/GATE-STATUS-2026-08-09.md`: one-line dated correction appended — Doc 02 v2.7.0 Approved c2 PASS 98%; Doc 13 v2.2.0 In Review pending c2
- `artifacts/memory-index.json`: new entry appended for this rework

### RISK-22..30 recovery sources

| RISK | Source in Doc 02 | Minting session |
|------|-----------------|----------------|
| RISK-22..24 | §10 lines 2313–2315 | `product-owner-2026-08-09T2200` (CR-v1.1.0 Change 7) |
| RISK-25..30 | §10 lines 2316–2321 | `product-owner-2026-08-10T1700` (v2.0.0 pass 3) |

### v1 Must-set derivation (corrected)

112 total Must (Doc 02 v2.7.0 §11) − 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) = **108** Must FRs in the v1 Must set.

### Next actions after this rework

| Action | Owner | Priority |
|--------|-------|----------|
| Doc 13 v2.2.0 c2 business-mode review | PM (Ana-Maria Petrescu) | **DONE** — PASS 95%, 0C/0H/0M/2L; `artifacts/reviews/13-project-plan-v2.2.0-business-cycle2.md`; 2026-08-23 |
| Doc 05 v2.1.0 c1 business-mode review (overdue carry-forward) | PM to assign neutral reviewer | Outstanding |
| Approver confirmations (a)–(f) per `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4` | Rathish (human approver) | Before v1 implementation |

**Doc 13 v2.2.0 APPROVED 2026-08-23** (`artifacts/reviews/13-project-plan-v2.2.0-business-cycle2.md`).

Two surviving Low issues carried into the next substantive re-plan (matching v2.0.3 precedent — Low issues do not block Approved status):
- **ISS-01 (Low):** RISK-31 and RISK-33 rows in §6 cite `H-01..H-06` instead of `H-01..H-14` (same stale reference as ISS-M2 but in the risk-table mitigation text, not MS-V1-09/PR-7). Fix in next substantive re-plan.
- **ISS-02 (Low):** RISK-22..30 rows lack bold-ID formatting (`**RISK-##**`) used by RISK-17..21 and RISK-31..34. Fix in next substantive re-plan.

---

## v1 auth & spam-resistance rulings — decision record (appended 2026-08-23)

Three approver rulings received (Rathish, 2026-08-23, transmitted via coordinator). Decision
record written; gate-status additive section appended. Docs 02/03/13 not yet updated by PM —
PO and architect are applying rulings this session; Doc 13 v2.3.0 will follow.

| Ruling | Decision | Key constraint |
|--------|----------|----------------|
| 1 — v1 auth | Phone-based SMS verification | Spam speed-bump only; NOT one-person-one-vote proof; v1 must never claim uniqueness |
| 2 — v1 spam resistance | Flag-don't-block (VoIP detection + velocity/device checks) | Rate-limit suspicious numbers; MUST NOT hard-block; false-positive risk disclosed |
| 3 — blockchain in v1 | RATIFIED: blockchain as transparent-audit foundation from day one | Transparency-now (chain); privacy-later (ZK in v2); DES-097 / ADR-024 §(b) ratified |

**What resolved:** V1-V2-SPLIT §4 item (a) (stack ratification) — NOW DECIDED (Ruling 3). Doc 13 §3.5 effort-assumption (a) auth mechanism — PARTIALLY RESOLVED (mechanism: phone; vendor: still open).

**Two new tensions surfaced (not in T-01..T-05):**
- T-06: Charter Rule 1 (one human one vote) vs v1 phone-auth — v1 cannot enforce it; honesty register must cover the gap. AWAITING architect conflict-table update + approver confirmation.
- T-07: FR-003 (no identity data at rest) vs v1 phone-number storage — current IN-v1 classification in §16 requires PO reassessment. AWAITING PO + architect + approver.

**Artifacts written this step:**
- `artifacts/status/DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` — created
- `artifacts/status/GATE-STATUS-2026-08-09.md` — additive section appended
- `artifacts/memory-index.json` — new entry appended

---

## Doc 13 v2.3.0 — auth & spam-resistance rulings applied (appended 2026-08-23)

Executed Doc 13 v2.2.0 (Approved) → v2.3.0 following upstream approval of Doc 02 v2.10.0
(PASS 100%, c3) and Doc 03 v2.4.1 (PASS 97%, c2). Applied the three auth/spam rulings from
`DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md` surgically across Doc 13.

### Edits applied (summary)

| Section | Change |
|---------|--------|
| Header | v2.2.0 → v2.3.0; Approved → In Review; SRS v2.7.0 → v2.10.0; added Doc 03 v2.4.1, ADR-025, DECISIONS file to Sources |
| Banner | v2.3.0 re-plan note added |
| §2.1 | 112 Must → **114 Must**; FR-001..FR-131 → FR-001..FR-133; SRS v2.7.0 → v2.10.0 |
| §3.5.1 | v1 Must-set **108 → 110** (114 − 4 DEFERRED-v2); DES-097 RATIFIED noted |
| MS-V1-02 | Full rewrite — phone-based SMS (FR-132, ADR-025), spam layer (FR-133, DES-099), DEP-11/DEP-12, flag-don't-block, false-positive path, FR-131 one-account-per-phone caveat |
| MS-V1-09 | H-01..H-14 → H-01..H-16 |
| §3.5.3 assumption (a) | Auth DECIDED (phone); stack ratified; vendors open; DEP-11/12 procurement lead time noted as new scheduling constraint |
| §3.5.3 effort range | **HOLDS at 5–9 months** — phone auth was the blank placeholder (net neutral scope); DEP-11/12 procurement may shift left end if not initiated immediately |
| §3.5.3 reuse table | New rows: phone-auth (FR-132) and spam-resistance (FR-133) |
| PR-1 | Extended scope: OTP delivery, SIM-swap/recycling, spam-layer false-positive, vendor API security |
| PR-6 | Extended: FR-132 one-account-per-phone caveat; FR-133 hard-block prohibition |
| PR-7 | H-01..H-14 → H-01..H-16 |
| PR-10 | "110 = 114 total Must − 4 DEFERRED-v2" |
| §3.5.6 (new) | T-06/T-07 tension table — Charter Rule 1 vs phone-auth; FR-003 vs phone-number storage; both AWAITING APPROVER |
| §5 DEP-11/DEP-12 | New rows: SMS delivery provider; phone-intelligence API vendor |
| §6 RISK-35..RISK-39 | New rows: SMS deliverability/cost (RISK-35); SIM-swap account takeover (RISK-36); phone-intelligence false-positive (RISK-37); vendor privacy exposure — phone numbers to DEP-12 (RISK-38); no-phone exclusion residual (RISK-39) |
| §6 RISK-31/RISK-33 | H-01..H-02/H-06 → H-01..H-16 (carried Low ISS-01 from c2 — now fixed) |
| §6 RISK-22..30 | Bold-ID `**RISK-##**` → plain `RISK-##` (carried Low ISS-02 from c2 — now fixed) |
| §13.1 | Document-review row updated: Doc 02 v2.10.0 PASS 100% (c3 Approved); Doc 13 v2.2.0 PASS 95% (c2 Approved, 2L carried); Doc 13 v2.3.0 In Review pending c1 |
| §11 | v2.3.0 re-plan log entry prepended (newest first) |

### Verified figures

- **v1 Must-set:** 110 = 114 total Must (SRS v2.10.0 §11) − 4 DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086). FR-132 and FR-133 are both IN-v1 Must — included in the 114 total, not deferred.
- **Effort range:** 5–9 months — HOLDS. Reasoning: phone auth fills the blank auth placeholder (net neutral); DEP-11/12 vendor procurement is a new scheduling risk, not a scope addition; database vendor still open.
- **Carried Lows from c2 (ISS-01 and ISS-02):** BOTH FIXED in v2.3.0.

### New IDs minted in v2.3.0

| Prefix | IDs | Notes |
|--------|-----|-------|
| RISK | RISK-35..RISK-39 | Phone-auth and spam-resistance vendor risks |
| DEP | DEP-11, DEP-12 | SMS delivery provider; phone-intelligence API vendor |

### Open items after v2.3.0

| Item | Owner | Priority |
|------|-------|----------|
| Doc 13 v2.3.0 c1 business-mode review (assign neutral reviewer) | PM (Ana-Maria Petrescu) | Immediate |
| Doc 05 v2.1.0 c1 business-mode review (overdue carry-forward) | PM to assign neutral reviewer | Outstanding |
| T-06 ruling (Charter Rule 1 vs v1 phone-auth) | Rathish (human approver) | Before v1 auth implementation |
| T-07 ruling (FR-003 vs phone-number storage) | Rathish (human approver) | Before v1 auth implementation |
| Approver confirmations (b)–(f) per `DECISIONS-2026-08-23-V1-V2-SPLIT.md §4` | Rathish (human approver) | Before v1 implementation begins |
| DEP-11/DEP-12 vendor procurement initiated | Rafael Duarte | Before MS-V1-02 — new scheduling constraint |
| v1 launch-readiness gate date | Rathish (human approver) | NOT SET — awaiting confirmation |

---

## Doc 13 v2.4.0 — c1 review rework (appended 2026-08-23)

Executed Doc 13 v2.3.0 (In Review) → v2.4.0 following cycle-1 business-mode review FAIL (92%,
0C/0H/1M/1L; `artifacts/reviews/13-project-plan-v2.3.0-business-cycle1.md`). Two surgical fixes.

| Issue | Fix Applied |
|-------|------------|
| ISS-01 (Medium) §6 RISK-32 | RISK-32 title, description, and mitigation fully rewritten for phone-based SMS OTP authentication. Old text described "password, passkey, or OAuth" / "PKCE for OAuth" — pre-Ruling-1 language that survived the v2.3.0 re-plan. New text covers OTP interception (SS7 hijack), replay in OTP grace window, session-fixation in the SMS auth context. New mitigation: strict OTP expiry (≤ 60 s), single-use enforcement, rate limiting via DES-099, session expiry; ADR-025 §(c-iv) residual accepted; RISK-36 cross-referenced. Carried-by updated: added ADR-025 and FR-132. |
| ISS-02 (Low) §2.1 ADR range | "ADR-001…ADR-024" → "ADR-001…ADR-025" (ADR-025 Accepted 2026-08-23). |

Auth-assumption sweep (password/passkey/OAuth/PKCE/email-verification across all active prose): RISK-32 was the only instance — no other pre-ruling auth language found.

ADR-range sweep (citations stopping at ADR-023/ADR-024): no other instances found.

Additional changes:
- Header: v2.3.0 → v2.4.0; Status: In Review (pending c2)
- Banner: v2.4.0 re-plan note prepended
- §13.1 document-review row updated: Doc 13 v2.3.0 FAIL c1 92% recorded; v2.4.0 rework pending c2
- §11 re-plan log: v2.4.0 entry prepended (newest first)
- `artifacts/memory-index.json`: new entry appended

---

## Doc 13 v2.4.0 APPROVED — session close (appended 2026-08-23)

Cycle-2 business-mode review PASS (96%, 0C/0H/0M/0L; `artifacts/reviews/13-project-plan-v2.4.0-business-cycle2.md`).

- `docs/13-project-plan.md`: Status set to Approved (c2 report cited in header).
- §13.1 gate-readiness row updated: Doc 13 v2.4.0 PASS 96% Approved 2026-08-23.
- `artifacts/status/GATE-STATUS-2026-08-09.md`: closing state entry appended to the auth-rulings section — all three upstream documents Approved, test suites green, outstanding approver-confirmation set listed.
- `artifacts/memory-index.json`: closing entry appended.
