# Session memory — architect (neutral reviewer) · Doc 05 v2.4.0 · business cycle 2

```
Role:        architect (acting as PM-assigned NEUTRAL REVIEWER — not the owning role)
Date:        2026-09-01
Task:        document-review skill, business mode, cycle 2 of 5, on docs/05-product-backlog.md v2.4.0
Owning role: product-owner (Priya Raghunathan) — all rework is theirs
Artifact:    artifacts/reviews/05-product-backlog-v2.4.0-business-cycle2.md
Verdict:     FAIL — 88% · Critical 0 · High 2 · Medium 3 · Low 4
```

## What I did

Read `artifacts/reviews/05-product-backlog-v2.3.0-business-cycle1.md` (FAIL 69%, 1C/5H/4M/4L),
the `document-review` SKILL (business rubric B1–B6, pass bar ≥95% AND C=H=M=0), then
`docs/05-product-backlog.md` v2.4.0 end to end (3,793 lines, read in seven chunks). Re-verified
**every** cycle-1 finding against the Approved upstream sources rather than accepting the document's
own assertion, and checked for defects introduced by the 574-line growth and by the mechanical
transcription of the product-owner's anchored change spec.

Sources actually opened and checked (not cited from memory):
`docs/02-requirements-srs.md` v2.16.3 §11 (Must row counted: 114; FR-050 Must confirmed; 21 BR;
FR-005/049 Should, FR-052/053 Could; 24 Must NFRs) · `docs/03-architecture-design-sdd.md` v2.11.2
§5.2 (DES-033, DES-093, DES-094, DES-099, DES-101–DES-106 rows; the SCR-22/SCR-23 statement at
lines 848–849; and §10.12.2/§10.12.4 which contradict it) · `docs/07-test-cases-suites.md` v2.4.4
(suite table; §5.3 TS-SCAFFOLD per-story headings and row-level `Verifies` cells; §5.5 TS-MEMBERSHIP;
§5.6 TS-PROPOSALS) · `docs/08-traceability-matrix.md` v2.7.0 (§3.1 rows for FR-001, FR-010, FR-013,
FR-020, FR-064, FR-065, FR-066, FR-067, FR-079, FR-080, FR-082, FR-086, FR-128, FR-129, FR-130,
FR-131, FR-132, FR-133; §3.3 FR-050 line 773; §6 DoD checks; §7 gap-log entries 73–77, 119–126).

## Verdict and why

**FAIL at 88%** (up from 69%). The Critical is cleared. Thirteen of fourteen cycle-1 findings are
genuinely closed and I could evidence each one. Two blocking defects remain, plus three Mediums and
four Lows.

Per-criterion: B1 96 · B2 82 · B3 88 · B4 84 · B5 93 · B6 82 → 87.95 → **88%**.

## Findings carried forward (for cycle 3)

- **NEW-01 (High)** — raw change-spec block left in §6 at lines 1182–1206 (`## CH-23 …`, `FIND:`,
  a stray four-backtick fence). Orphans US-0087's `AC:` from its story atom and breaks §6's heading
  hierarchy. The underlying CH-23 edit **was** applied (US-0089 is correct) — pure transcription
  residue. Only occurrence in the file.
- **NEW-02 (High)** — US-0092..US-0096 carry `DES-093, DES-094` in `Implements:` while the Note
  beneath still reads "no DES assigned yet". Contradicts SDD §5.2, Doc 08 §3.1/§7 (entries 73–77
  reclassified G-TRACE → G-PHASE3 at RTM v2.2.0) **and** Doc 05's own §12 census, which only
  balances at 109+33=142 if these five count as having a DES. The ISS-07 sweep stopped five short.
- **NEW-03 (Medium)** — US-0134's `Verified by:` claims TC-3476 and TC-3481, which Doc 07 v2.4.4
  §5.3 heads to US-0132 and US-0133; violates §6's own "Doc 07 wins" provenance rule and contradicts
  §12's per-story split. Also SCR-13/SCR-14 claimed unqualified where the RTM records `none`.
- **NEW-04 (Medium)** — header says "78 carry an SCR"; actual is 75. And §6's "never blanks" rule is
  honoured on only 12 stories; 55 silently omit the SCR segment. (DES 109/33 and TC 132/10 are both
  exact — verified by count.)
- **NEW-05 (Medium)** — US-0021's Note attributes "17 of 142" to the RTM; Doc 08 v2.7.0 §6 says
  "17 of 134". §11 states it correctly, so §6 and §11 disagree about the pinned authority.
- **NEW-06..09 (Low)** — cross-cycle `ISS-` ID collisions; §9 total is 875 not ~880 (verified by
  summing the Points fields: 23×3 + 67×5 + 41×8 + 11×13, and 23+67+41+11 = 142); the SDD's internal
  SCR-22/SCR-23 inversion (§10.12.4 vs §5.2) left unflagged; US-0014/US-0015 still pinned to
  Doc 08 v1.1.0 while v2.7.0 §6 lists US-0015 as Partial.

## Decisions made (as reviewer)

- Scored the document in front of me, not the delta. Read-only: **edited nothing** in Doc 05.
- Rated NEW-01 and NEW-02 **High**, not Critical: no traceability chain is broken in either case
  (US-0087's `Implements`/`Verified by` line is intact; US-0092..0096 carry their DES links). Both
  are material correctness/completeness defects, contained and mechanically fixable.
- Recommended a **patch** bump (2.4.1) as sufficient — every surviving issue is a localised
  correction, not a change of substance.
- Confirmed **no fabricated DES or TC link exists** anywhere in v2.4.0. Every `none (G-TRACE)` marker
  I checked cites a real Doc 08 v2.7.0 §7 entry with the right number, owner and tag.
- Wrote **no report for any document but Doc 05** (AL-CANDIDATE-3 discipline).

## Open items / owed

1. **Registration of this note in `artifacts/memory-index.json` is OWED to the project-manager.**
   This session had no Bash and no Edit tool, and the index is ~6,100 lines — a whole-file `Write`
   would risk truncation, so I did not attempt it. PM: append one entry for
   `artifacts/architect-2026-09-01T1430-doc05-cycle2.md` via Node (read → parse → push → write →
   re-read to confirm).
2. **`node hooks/run_gates.cjs --audit` was NOT run** — no shell tool in this session. The metadata
   block uses the canonical `Reviewed document:` / `Document version:` spellings and the filename
   matches the mandated convention, so both the parser and the filename fallback should resolve, but
   the PM should run the audit and confirm it names this report for Doc 05.
3. **Five upstream defects routed out of Doc 05** (four found by the product-owner, one by me) —
   (a) Doc 08 §3.3 still classes FR-050 as Should; (b) Doc 08 §3.2 records NFR-007 as unbacked
   though NF-09 covers it; (c) TC-3555 double-assigned between Doc 07 §5.6 and Doc 08 §3.1;
   (d) SDD §5.2 lists FR-075 under DES-102 while Doc 08 §3.1 records `none`; (e) **new** — SDD
   §10.12.2/§10.12.4 carry SCR-22/SCR-23 inverted against its own §5.2. (a)–(c) → tester
   (Ji-woo Park); (d)–(e) → architect + tester. None of these blocks Doc 05 from passing.
4. **Doc 05 remains a Gate-1 blocker** until a passing business-mode review exists for its current
   version. Cycle 3 of 5 is next; two cycles remain before the escalation cap.

## IDs touched

**Documents:** 05 (reviewed) · 02 v2.16.3, 03 v2.11.2, 07 v2.4.4, 08 v2.7.0 (read as sources).
**FR:** 001, 010, 011, 012, 013, 020, 022, 024, 050, 064, 065, 066, 067, 075, 077, 079, 080, 081,
082–086, 090, 091, 092, 094, 095, 107, 121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132, 133.
**BR:** 001–021 (union check across all 12 epics).
**NFR:** 007, 011, 027, 028 (Must-NFR map re-count: 24 of 24 present).
**DES:** 013, 033, 065, 073, 093, 094, 095, 096, 097, 099, 100, 101, 102, 103, 104, 105, 106.
**SCR:** 09, 11, 12, 13, 14, 15, 19, 21, 22, 23.
**US:** 0011, 0013, 0014, 0015, 0021, 0024, 0025, 0073, 0074–0077, 0087, 0089, 0090, 0091, 0092–0096,
0100, 0101, 0102, 0117, 0131, 0132, 0133, 0134, 0135–0142.
**FE:** 039, 040, 056, 057, 058, 059, 060, 061, 062.
**TC:** 3307–3309, 3313–3322, 3405, 3406, 3470–3488, 3489–3516, 3517–3541, 3542–3563.
**Review IDs minted:** NEW-01 … NEW-09 (in the cycle-2 report).
