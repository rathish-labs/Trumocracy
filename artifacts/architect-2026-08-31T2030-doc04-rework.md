# Session memory — architect — Doc 04 rework to v1.1.0

```
Role:        architect (owning role for Doc 04)
Timestamp:   2026-08-31T20:30:00Z
Phase:       Design — document-review rework loop, cycle 1 → v1.1.0
Product:     Trumocracy
Branch:      build/v1-join-membership
Reworked:    docs/04-test-strategy-master-plan.md  v1.0.2 → v1.1.0 (Status: In Review)
Against:     artifacts/reviews/04-test-strategy-master-plan-v1.0.2-technical-cycle1.md
             (FAIL 46%, 2C / 2H / 2M / 1L; reviewer: engineer, neutral)
```

## What I did

Reworked Doc 04 from v1.0.2 to **v1.1.0** (minor bump — two Criticals make that the floor).
Every one of the seven findings was independently verified against the actual repository and the
actual current documents before any edit. **All seven were substantiated; none was wrong.** All
seven are closed.

Files written (all three are ONE document at ONE version — see the split note below):

- `docs/04-test-strategy-master-plan.md` — Part 1: header · changelog · **new §0 Definition-A
  (v1) track** · §1–§5
- `docs/04-test-strategy-master-plan-part2.md` — Part 2: §6 · §7 · §8 · **§9 extended to
  `NFR-001`…`NFR-028`**
- `docs/04-test-strategy-master-plan-part3.md` — Part 3: §10–§22 · Downstream

No other document was edited. Doc 02, Doc 03, Doc 05, Doc 06, Doc 07, Doc 08 and every ADR were
read only. No review report was authored (the AL-CANDIDATE-3 governance violation was avoided).
No product code touched.

## Issue-by-issue disposition

| Issue | Sev | Verified how | Closed by |
|---|---|---|---|
| ISS-01 | Critical | Doc 02 v2.16.3 §11 read directly: 133 FR minted / 114 Must, 28 NFR / 24 Must, 27 RISK rows, 15 CON. `NFR-027`/`NFR-028` full text read at §6. `RISK-22`…`32` read at §10 with L×I. `FR-121`…`133` read at §16.3.1. | `Source:` re-pinned to SRS **v2.16.3** + Backlog **v2.3.0**; §1.3 counts corrected; §2.2 gains a banding table for `RISK-22`…`32`; §8 gains a coverage note routing to §0.8; **§9 gains full method rows for `NFR-027` and `NFR-028`** (title now `NFR-001…NFR-028`); §0.6 gives a per-FR suite map for `FR-121`…`FR-133`; §0.8 gives 11 adversarial suites `TS-ADV-22`…`TS-ADV-32`; §21's coverage assertion re-stated at v1.1.0 against v2.16.3. |
| ISS-02 | Critical | Doc 02 §16.1.1/§16.1.2 read in full; Doc 03 §10.13.1–§10.13.12 read; Doc 06 v2.4.3 §1–§2.1 read; Doc 07 v2.4.4 §2 read; repo inventoried directly (packages/apps/services/tools). | **New §0** — a Definition-A track with §0.1 track governance (normative), §0.2 test items, §0.3 levels **V0–V6**, §0.4 suites + the six unminted `TS-V1-*`, §0.5 the **seam-honesty doctrine S1–S6**, §0.6 FR coverage, §0.7 NFR deltas, §0.8 adversarial suites, §0.9 **v1 Gate-2 exit criteria**, §0.10 what a green v1 suite does not establish. **Definition-B (§1–§22) retained in full, unweakened**; §0.1 rule 2 forbids relaxing §10.2 for v1. |
| ISS-03 | High | Doc 07 v2.4.4 §2 read row by row. **Refinement found:** `TS-GOV2` actually uses **TC-3400–TC-3469**, not …3499 — so the fix is to narrow Doc 04's over-wide reservation, which is what `TS-SCAFFOLD` collided with. | §14: `TS-GOV2` narrowed to TC-3400–TC-3469; rows added for `TS-SCAFFOLD` (3470–3488), `TS-PARTY` (3489–3516 **+ 3541**), `TS-MEMBERSHIP` (3517–3540), `TS-PROPOSALS` (3542–3563); `TS-ADV-01…16` narrowed to TC-2600–TC-2799 (uses …2752) and **TC-2800–TC-3199 reserved for `TS-ADV-22`…`32`**; **TC-3564–TC-3699 reserved for the unminted `TS-V1-*` suites**. No range now overlaps another. |
| ISS-04 | High | Doc 02 v2.16.3 line 553: "Priya Raghunathan \| Product Owner \| Docs 01/02/05". Doc 03 v2.11.2 line 20: "Owner: Ravi Deshmukh — Principal Architect". Both confirmed. | `Owner:` → **Ravi Deshmukh — Principal Architect** in all three part headers; §22 Approvals row corrected with the superseded text quoted in place; **OPEN-09 split** — ownership half CLOSED, the no-named-QA-Lead half stays open and is **re-assigned from Priya Raghunathan to Ana-Maria Petrescu** (the PM owns the RACI). |
| ISS-05 | Medium | Direct repo read: `packages/contracts/package.json` exists with `"test": "vitest run"`; `test/` holds adversarial · differential · governance · lifecycle · deployment-safety + fixture; `vitest.config.mjs` present; root `verify` = `lint:deps && compile:contracts && typecheck && test`; Doc 06 v2.4.3 Approved records 95 passing contract tests. | **OPEN-17 CLOSED** with the evidence recorded in §13; §11.2's row struck through and replaced with a DONE row; §16's milestone marked ACHIEVED; §1.2's "no test workspace exists yet" corrected in place. |
| ISS-06 | Low | `docs/adr/` globbed: **ADR-001…ADR-025**. Grepped `ADR-017` across `docs/adr/` — **zero hits in ADR-001 or ADR-002**. ADR-001 line 45 and ADR-002 line 48 both now cite **ADR-014** for per-nullifier sponsorship rate limiting. `ADR-017-…md` header note records the resolution. | **OPEN-16 CLOSED** with all three pieces of evidence quoted in §13. §1.4 references updated to ADR-001…ADR-025. |
| ISS-07 | Medium | Doc 02 v2.16.3 §11: "One release at 2027-06-01 (following Gate 2 readiness 2027-05-14)"; `CON-007` agrees. | §16 re-anchored: **Gate 2 readiness 2027-05-14, launch 2027-06-01**. Achieved milestones recorded with their real dates; forward intermediates shifted **+88 days** and **labelled as derived**, with the schedule of record left explicitly to Doc 13 / the PM (OPEN-22) rather than invented here. |

## Decisions taken

1. **Two parallel tracks, not a replacement.** §0 is added; §1–§22 is untouched in substance. §0.1
   carries normative rules including "§10.2 MUST NOT be relaxed for v1" and "a Gate-2 packet for a
   Definition-A release is assembled against §0.9, not §10.2".
2. **New level IDs `V0`–`V6`** for the v1 track so they never collide with `L0`–`L7`.
3. **The seam-honesty doctrine (§0.5) is v1's analogue of §7**, not a weaker circuit doctrine. It
   tests the *inverse* proposition: that `getProperties()`/`getTallyProperties()` report `false`
   where Doc 03 §10.13.2/§10.13.3 says false, so a silent upgrade of a claim fails the build.
4. **No manufactured coverage.** Where a requirement or risk has no viable method or no case, it is
   recorded as an honest gap with a named owner. Specifically: six of thirteen `FR-121`…`FR-133`
   have **no suite**; `TS-GOV2`'s 70 cases are **all Blocked/No-mechanism**; `RISK-25`…`RISK-32`
   have **no case anywhere** (verified by full-text search of Doc 07 returning zero matches);
   `NFR-027`/`NFR-028` are instrumented only in part.
5. **Three physical files.** v1.1.0 could not be emitted as one file by the authoring toolchain
   (~58k tokens). Stored as three parts at one version with one identical header block and
   cross-references that resolve across all three. Recorded as **OPEN-24** for the PM to rule on —
   keep the split or re-merge. This is a storage split, not a scope split; nothing was dropped.

## Findings I judged correct but refined

- **ISS-03**: the reviewer said `TS-SCAFFOLD` "sits inside the range reserved for `TS-GOV2`". True
  against Doc 04's reservation, but Doc 07 v2.4.4 §2 shows `TS-GOV2` only ever used TC-3400–3469.
  So the correct remedy is to **narrow the reservation to actual usage**, not to move a suite.
  Applied that way.
- **ISS-01** asked for coverage of "FR-074…133". `FR-074`…`FR-120` already had a `TS-GOV2` line in
  §14; what was missing was the **honest status** (0 of 70 automated, 38 *No mechanism* for want of
  a DES). Recorded as such rather than restating the assignment as if it were coverage.

## New open items minted

| ID | Owner | Substance |
|---|---|---|
| OPEN-18 | Ravi Deshmukh (DES) → Samuel Oyelaran (build) → Ji-woo Park (TC) | Declared-but-unrunnable coverage: `TS-GOV2` 70/70 Blocked (38 have no DES); six of `FR-121`…`133` have no suite; `RISK-25`…`32` have no case anywhere. **Gate-2 blocking for a v1 release.** |
| OPEN-19 | Dr. Lena Kowalczyk (`NFR-027`) · Erik Lindqvist (`NFR-028`) · build dep. Samuel Oyelaran | Both Must, both IN-v1, both partially instrumented. `NFR-028`'s real control (INSERT-only grant, `BEFORE UPDATE` refusal, projection-equals-replay) needs the DES-097(b) Postgres backing, which is unbuilt — and the same absence blocks every promotion above devnet via `IS_INSECURE_MOCK`. |
| OPEN-20 | Ji-woo Park | Doc 07 v2.4.4 §2 says `TS-PROPOSALS` = TC-3542–**3563**; its own §5.6 heading says TC-3542–**3561**. §14 reserves the §2 range. Doc 07 not edited from here. |
| OPEN-21 | Priya Raghunathan | Doc 04 pins Doc 05 at v2.3.0 which is **In Review**, not Approved; and §1.3's no-story list derives from Doc 05 v1.0.0 — stale, and `FR-050` has since been raised Should → **Must**. |
| OPEN-22 | Ana-Maria Petrescu (a,b,e) · Priya Raghunathan (d) · Chen Wei (c) | (a) §2.2 effort re-weighting across 27 risks; (b) Definition B has no committed date; (c) the v1 form of `NFR-025` is unanswered; (d) `NFR-018` exit rights is a *Should* and is the most load-bearing v1 control; (e) `TS-UPG` has no seam-swap rehearsal. |
| OPEN-23 | Ravi Deshmukh | **The v1 track has no `TS-DIFF` analogue.** One implementation, one consumer, no second oracle. Not recoverable by effort; mitigations listed (protocol as sole rule home, 100% branch, SQL-tally precision suite). |
| OPEN-24 | Ana-Maria Petrescu | The three-part physical split of this document. |
| OPEN-25 | Samuel Oyelaran | §6.1's **primary** capability-absence control — the checked-in `test/absence/<Contract>.selectors.json` golden files — **does not exist**; verified no `.json` anywhere under `packages/contracts/test/`. The scanning logic exists in `adversarial.test.mjs` but as an in-code assertion, which is not a reviewable diff. Needed before the `NF-02` audit freeze. |

Also recorded (not new open items, routed in text): `UT-####` range divergence from the §14 scheme
and the eight duplicated IDs `UT-0841`…`UT-0848` (`TD-RTM-01`) → Samuel Oyelaran, Doc 06.

## IDs touched

`MTP-TRUMOCRACY` v1.0.2 → **v1.1.0** · `DES-081`, `DES-085`, `DES-093`…`DES-106` (cited) ·
`ADR-011`, `ADR-014`, `ADR-016`, `ADR-017`, `ADR-022`, `ADR-023`, `ADR-024`, `ADR-025` (cited) ·
`FR-050`, `FR-074`…`FR-133` · `NFR-001`…`NFR-028` (methods; **`NFR-027`/`NFR-028` new**) ·
`RISK-22`…`RISK-32` (new suites `TS-ADV-22`…`TS-ADV-32`) · `CON-013`, `CON-014`, `CON-015` (newly
covered in §21) · `TC-2800`–`TC-3199`, `TC-3400`–`TC-3469`, `TC-3470`–`TC-3563`, `TC-3564`–`TC-3699`
(range reservations) · `TS-SCAFFOLD`, `TS-PARTY`, `TS-MEMBERSHIP`, `TS-PROPOSALS`, `TS-V1-BALLOT`,
`TS-V1-NOTICE`, `TS-V1-ID`, `TS-V1-SPAM`, `TS-V1-AUDIT`, `TS-V1-ENROL` · `OPEN-09`, `OPEN-16`,
`OPEN-17` (closed / re-scoped), `OPEN-18`…`OPEN-25` (new) · `UT-0523`, `UT-0525`, `UT-0740`,
`UT-0824`, `UT-0846`, `UT-0861`, `UT-0871` (cited as live instruments).

## Gate note

The SubagentStop gate is expected to block this stop: Docs **04, 05 and 14** have no passing
`document-review` report at their current versions (recorded by reviewer-qa on 2026-08-30 as
finding F-5). That block is **not mine to fix** — Doc 04 v1.1.0 is now `Status: In Review` and
awaits a **neutral** reviewer (not the architect, and not the engineer who authored cycle 1's
report unless the PM reassigns). Reported and stopping.

## Hand-off

To the **project-manager**: schedule the Doc 04 v1.1.0 cycle-2 technical review with a neutral
reviewer; rule on **OPEN-24** (three-part split) and **OPEN-09** (name a QA Lead); take
**OPEN-22**. To the **engineer**: **OPEN-19** and **OPEN-25** are the two items that unblock the
most. To the **tester**: **OPEN-20**, and the `TS-ADV-22`…`32` / `TS-V1-*` ranges are now reserved.
