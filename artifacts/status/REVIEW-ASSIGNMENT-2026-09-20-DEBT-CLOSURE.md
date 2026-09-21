# Review assignment — debt-closure session (UT-0890 trace · SECURITY.md currency · OPEN-27 · accepted Lows)

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-20
Trigger:       Debt-closure session against the carried-debt register, docs/06-coding-and-ut.md
               v2.8.1 §7 (28 items), Doc 08's TD-RTM-01..04, Doc 04 §13 OPEN-27, and the
               accepted Lows carried in the Approved status lines of Docs 02, 06 and 08.
               Entry state, verified before dispatch: gate --audit exit 0 (10/10 PASS,
               0 blocking); npm test 640/640 green on a CLEAN tree; RTM 138 Must / 16
               COMPLETE / 122 OPEN, both hook signals agreeing.
Scope:         DOCUMENTS ONLY. No product code is written or edited this session. The one
               exception the brief allows — a trivial code/test touch where a fix needs it —
               is NOT taken: every item below closes in documentation.
Rule:          Reviewer assignment is recorded HERE before dispatch. A role that hits the
               SubagentStop block ROUTES to the PM; it never authors the review whose absence
               is blocking it. Other documents being In Review mid-session is EXPECTED — do
               not self-appoint.
```

## What this session closes, and what it explicitly does not

| # | Debt item | Recorded at | Disposition |
|---|---|---|---|
| 1 | **UT-0890's `TC` + RTM rows** — the sole `TC` row owed at entry | Doc 06 §7 item 28, §3; `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` | **CLOSE** — Doc 07 v2.9.0 + Doc 08 v2.12.0 |
| 2 | **SECURITY.md "16 of 138"** currency + an anti-staleness maintenance note | SECURITY.md:109-113 | **CLOSE** — figure re-verified against Doc 08 (it is correct); a maintenance note is added so it cannot silently go stale |
| 3 | **`OPEN-27`** — PrivacyStatus `anon` **title and subtitle** re-examined against FR-131 clause (e) | Doc 04 §13 `OPEN-27` (line 2360); `artifacts/architect-2026-09-06T1900-doc04-cycle2.md` §5 item 4; Doc 06 §7 item 26 ISS-05(i) | **CLOSE** — Doc 03 v2.14.0 (the copy authority rules) + Doc 04 v1.7.0 (the register records the outcome) |
| 4a | Doc 08's one carried Low — `Last updated` | Doc 08 status line | **CLOSE** — folded into v2.12.0 |
| 4b | Doc 06's three carried Lows | Doc 06 status line | **CLOSE** — folded into v2.9.0, after 1 and 3 land |
| 4c | Doc 02's `ISS-C2-03` — the cycle-2 assignment claim outruns its cited source | `02-requirements-srs-v2.17.3-business-cycle2.md` §4 | **CLOSE BY THE PM ROUTE** — see §"Doc 02 ISS-C2-03" below. **No Doc 02 version is opened.** |
| P1 | **Arabic native-speaker review** (`ARABIC-I18N`) | Doc 06 §7 item 17 | **PREPARED, NOT CLOSED** — human-gated. A complete ar↔en pairing packet is produced so one native speaker can verify in a single pass |
| P2 | `NON_VIOLENCE_CLAUSE` ratification (`CLAUSE-TEXT-01`) | Doc 06 §7 item 15 | **NOT CLOSEABLE** — approver ratification, before Gate 2 |
| P3 | `REPETITION_COOLDOWN_SECONDS` ratification (`COOLDOWN-01`) | Doc 06 §7 item 16 | **NOT CLOSEABLE** — no published figure exists; needs a ruling |
| P4 | `home.steps[0].body` / `home.promises[3]` enrolment copy | Doc 02 §13 (j) | **NOT CLOSEABLE** — expressly unruled; `DECISIONS-2026-09-08-VERIFY-PAGE.md` §5.7 declines to rule it |

**Deliberately out of scope, and why — these are bigger than debt and are named rather than
half-done:** `TD-RTM-01` (`UT-0841`..`UT-0848` each defined twice; renumbering is a two-file
engineer code touch), `TD-RTM-02` (three irreconcilable test-case denominators across Docs 07
and 08), `TD-RTM-04` (`US-0135`..`US-0142` traced nowhere; needs a backlog re-read, not a
rework cycle), Doc 06 §7 item **26(d)** (the DES-098 acknowledge-to-proceed control — SCR-13
story scope, and the reason FR-131's Must row stays OPEN), item **10** (clause-8 disclosure
affordance), item **23** (UT-0871 type-shim coverage for the proposals surfaces).

## Ownership and rework

| Work | Owner | Target version | Artifact |
|---|---|---|---|
| `TC` rows for UT-0890's 15 `it`s, continuing from **TC-3576**; §2 suite anchors; §8/§9/§10 counts | tester (Ji-woo Park) | Doc 07 v2.8.1 → **v2.9.0 In Review** | `artifacts/tester-2026-09-20T1000-doc07-spec.md` + note |
| RTM rows for the same cases; fold the carried Low (`Last updated`); record the clean-tree run **R-20 (640/640)** | tester (Ji-woo Park) | Doc 08 v2.11.3 → **v2.12.0 In Review** | `artifacts/tester-2026-09-20T1000-doc08-spec.md` + note |
| `OPEN-27` fresh look — rule the `anon` **title and subtitle** against FR-131 clause (e) in §10.12.3, the copy authority | architect (Ravi Deshmukh) | Doc 03 v2.13.0 → **v2.14.0 In Review** | `artifacts/architect-2026-09-20T1000-doc03-spec.md` + note |
| Record the `OPEN-27` outcome where the item is registered; re-state §0.5 S5's carve-out to match | architect (Ravi Deshmukh) | Doc 04 v1.6.0 → **v1.7.0 In Review** | `artifacts/architect-2026-09-20T1000-doc04-spec.md` (same note) |
| SECURITY.md figure currency + maintenance note | technical-writer (Nadia Hassan / Maya Lindqvist) | root file (not a numbered doc) | `artifacts/technical-writer-2026-09-20T1000-security-spec.md` + note |
| **Arabic review packet** — every `ar.ts` string with its `en` counterpart, marked human-gated | technical-writer | `artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md` | same note |
| Register what landed: §7 items 17/26/28, §3, §5.0, the three carried Lows | engineer (Samuel Oyelaran) | Doc 06 v2.8.1 → **v2.9.0 In Review** | `artifacts/engineer-2026-09-20T1600-doc06-spec.md` + note |

**Sequencing is load-bearing.** Doc 06 is authored **last**, after Docs 03/04/07/08 have landed
and been reviewed. A document that asserts another document's state before that state exists is
the exact defect Doc 02 v2.17.2 FAILed on (cycle-1 ISS-01, 2026-09-08). Doc 06 v2.9.0 reports
only what is true on disk when it is written.

## Neutral reviewers (recorded BEFORE dispatch)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 07 v2.9.0 · Doc 08 v2.12.0 | technical | **reviewer-qa** (Rafael Duarte, new instance) | Unbroken precedent for both documents (Doc 07 v2.8.1; Doc 08 v2.10.0..v2.11.3) and **Accountable for "RTM complete (zero gaps)"** under the RACI | tester (owner of both) |
| Doc 03 v2.14.0 · Doc 04 v1.7.0 | technical | **tester** (Ji-woo Park, new instance) | Owns neither document; has Bash to verify the `PrivacyStatus.tsx` claims against the code at HEAD rather than taking them on assertion; precedent as a neutral technical reviewer (Doc 06 v2.6.0..v2.8.1). **Noted for the record:** Doc 04 §13 assigns the tester `OPEN-20` as an action item — being assigned an item is not authorship, and `OPEN-20` is untouched by this session | architect (owner of both); engineer (built `PrivacyStatus.tsx`, the subject of the ruling) |
| SECURITY.md delta | business, FR-131(e)/FR-132(d) discipline | **product-owner** (new instance) — report to `artifacts/status/PUBLIC-FILES-REVIEW-2026-09-20-security-md.md`, **NOT** under `artifacts/reviews/` | RACI: Accountable for public-facing claims; the 2026-09-06 and 2026-09-08 precedent for root public files | technical-writer (author) |
| Doc 06 v2.9.0 | technical | **tester** (new instance) | Standing precedent for Doc 06 (v2.6.0, v2.7.0, v2.8.0, v2.8.1) | engineer (owner) |

- General-purpose agents are never reviewers. Reviewers **score and list only**; they never edit
  the document. Rework returns to the **owning role** as a new version. Cap 5, then ESCALATE.
- Note paths are pre-registered by the PM. **Roles never open `artifacts/memory-index.json`.**
- SECURITY.md is a root public file, not one of the 14 governed documents; its review is recorded
  under `artifacts/status/` and is deliberately outside the hook's `artifacts/reviews/` scan.

### A note on the cap, because Doc 08 closed on it

Doc 08 v2.11.3 closed **on the cap** (cycle 5 of 5) with a **PASS**, not an ESCALATION. The cap
governs the rework loop of a single version lineage; a PASS closes that loop. **Doc 08 v2.12.0 is
a new version and opens a fresh loop at cycle 1.** The 2026-09-08 instruction "Doc 08 closed on
the cap and is not reopened for it mid-session" was a *mid-session* scheduling ruling by the PM,
not a permanent bar — and it named UT-0890's row as owed to "the next Doc 07/08 touch". This is
that touch.

## Doc 02 `ISS-C2-03` — closed by the PM route, no version opened

The cycle-2 reviewer offered two remedies for `ISS-C2-03` and named the PM's as sufficient on its
own: *"alternatively the project-manager extends the assignment record's Doc 02 row to name the
cycle-2 reviewer, which makes the citation resolve."* The defect was that Doc 02's `Status:` block
cited `REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` for a **cycle-2** assignment that the record
scoped to **v2.17.2** only — the claim was true in fact but unverifiable at the cited source, and
**the PM's assignment is the PM's fact to record, not the owner's**.

**Recorded here, as the PM, 2026-09-20:** the project-manager assigned **reviewer-qa** as the
neutral reviewer for **Doc 02 v2.17.3, cycle 2** — the same neutral reviewer as cycle 1, dispatched
after the v2.17.2 FAIL. That assignment is now also written into the 2026-09-08 record's own
Outcomes table so the citation Doc 02 makes resolves **at the document it cites**. Doc 02's text is
correct as it stands and **is not reopened**; opening a governed document to fix a citation that
the citing role cannot verify — when the role that owns the fact can simply record it — would
invert the very convention v2.17.3 adopted.

## Outcomes (recorded by the PM as each loop closes)

| Document | Cycle 1 | Cycle 2 | Final |
|---|---|---|---|
| Doc 07 v2.9.0 | **PASS 97% (0C/0H/0M/4L; reviewer-qa)** — mint verified one-to-one against the 15 `it`s; suite re-run 640/640 | — | **Approved v2.9.0** (4 Lows carried) |
| Doc 08 — full loop, v2.12.0 → v2.12.3 | See the cycle table below | | **At the cap — cycle 5 verdict pending** |

### Doc 08's loop in full (the longest of the session)

| Cycle | Version | Verdict | The finding |
|---|---|---|---|
| 1 | v2.12.0 | **FAIL 92%** (3M/2L) | ISS-01 an `FR-132 → TC-3586` link Doc 07 does not support — the contiguous range `TC-3577..TC-3591` **silently absorbed** a case Doc 07 records as `NFR-023 · DES-085` with no FR, **creating a fresh instance of the `TD-RTM-03` class in the version disclosing it**; ISS-02 §9 stated its denominator twice and differently, stale **by this version's own edit**; ISS-03 FR-132's Requirement cell never stated §(d) |
| 2 | v2.12.1 | **FAIL 93%** (1M/2L) | A **sixth** ISS-01 site the sweep missed — the `Source:` block, line 247, live and present-tense, **two lines above the pin this version edited**. The reviewer's diagnosis of the pattern: the document "published a **count of sites FIXED** as if it were a **count of sites CHECKED**" |
| 3 | v2.12.2 | **FAIL 94%** (1M/2L) | "**§6 is not edited at all**" — false; OP 8 edits line 2055, inside §6. **The reviewer recorded that the `§6`/`§8` mislabel originated in its own cycle-2 report**, which the tester's OP heading inherited, and graded it Medium anyway: *"severity is a property of the defect, not of whose mistake seeded it."* The aggravating half: the tester's dry run recorded the claim as **verified**, so the verification ran against the wrong boundary — the **method**, not just the sentence |
| 4 | v2.12.3 | _rework_ | Boundary derivation **replaced with a file-derived method** (`grep -n '^## '`), published as a three-state table reproducible by the reader; the `§8` label corrected at all three sites; the symmetry-as-cause framing withdrawn; the published greps bridged to the version a reader actually holds |
| 5 | v2.12.3 | **pending — THE CAP** | A FAIL here becomes **ESCALATED** and requires a recorded human decision (approve-as-is / rework / reject) |

**What went right in this loop, and is worth keeping:** at cycle 3 the tester **re-derived the
reviewer's own pattern enumeration from the file rather than taking it on faith, and corrected
it** — the reviewer's line list was wrong (410/1930/1862 carry the claim *in words*, not as the
range; 68/2077/2133 carry the range), and its "14 hits on 12 lines" should have read 13. Both
classifications nonetheless disposed of every hit identically and found the same single live
defect. At cycle 4 the tester's **own dry run caught a defect in its own draft** — unescaped pipes
in the §9 sign-off that would have added three columns, the same class this document fixed at
v2.9.0. Neither the reviewer nor the tester deferred to the other, and both corrected themselves
on the record.
| Doc 03 v2.14.1 | **PASS 97% (0C/0H/0M/1L; tester)** — both files reconstructed from pre-session HEAD through both specs and diffed: **byte-identical, zero diff, all 56 FINDs matched once**, so the verbatim-carry claim is proved mechanically. ISS-01 cured (banner above + note below, nothing load-bearing superseded by accident); ISS-02's **correction-by-annotation ruled the RIGHT CALL** — the live "five" is **not** a defect, because the under-count is the evidence for the document's own diagnosis and it demonstrably **worked** (Doc 04 swept site 6 citing it) | — | **Approved v2.14.1** (1 Low carried) |
| Doc 04 v1.7.1 | **PASS 97% (0C/0H/0M/3L; tester)** — **all six `OPEN-27` sites clean; no seventh.** `OPEN-30` **CLOSED**: every §14 figure re-verified against Doc 07 v2.9.0 §2 (`TS-ADV-01…16` 69/49/20; 22 drawn; **108 free**; `TS-ABSENCE` and `TS-SCAFFOLD` unchanged) | — | **Approved v1.7.1** (3 Lows carried) |
| SECURITY.md delta | **PASS 96% (0C/0H/0M/3L; product-owner)** — figure re-verified correct; pin and maintenance note accepted; two Lows routed to the PM | **PASS 97% (0C/0H/0M/1L)** — pin advanced **v2.11.3 → v2.12.3**, `ISS-01`'s `--audit` overclaim removed. **`ISS-03` DISCHARGED**: its condition was conjunctive (Doc 08 Approves **and** the pin is not advanced) and the second conjunct is now false, so **it cannot re-raise as a Medium**. New `ISS-04` (Low, no fix owed): "changes nothing" is not strictly true — `run_gates.cjs`'s `log()` writes `.claude/gate-runs.log` every run — but the log is **gitignored**, so `git status` stays clean | **PASS cycle 2** (1 Low, no action owed) |
| Doc 06 v2.9.0 | _in review — tester dispatched_ | | |

### PM errors in this session, recorded rather than quietly fixed

| # | Error | Caught by | Disposition |
|---|---|---|---|
| 1 | **Two spec paths in this record did not match the pre-registered ones** (`…doc07-09-spec.md` / `…doc08-12-spec.md` against the actual `…doc07-spec.md` / `…doc08-spec.md`), plus `…security-md-spec.md` for `…security-spec.md` | tester | **Fixed** — every `artifacts/` path cited in this record now resolves on disk |
| 2 | **Cycle off-by-one on Doc 08.** I dispatched the v2.12.3 review as "**cycle 5 of 5, the cap**". The document's own counter reads "rework cycle 4 of 5", consistent with all three predecessors (v2.12.1 "cycle 2", v2.12.2 "cycle 3"). **The cycle index is the PM's to set, and I set it wrong** — there was a cycle in hand that I described as the last one. Moot in outcome (it PASSed), but I told a neutral reviewer it was at the cap when it was not, which could have pressured the judgement toward a pass. The reviewer flagged it as `ISS-02` and routed it to me | reviewer-qa | **Recorded, not relabelled.** The report file and its `Cycle:` field stay as issued — revising them after the fact would be worse than the error. **The convention needs reconciling before the next lineage**: fix whether "rework cycle N" on the document and "cycle N" on its review are the same index |
| 3 | **A race I created between two parallel agents.** The engineer checked SECURITY.md and correctly recorded the pin as "not yet landed"; the technical-writer's pin spec landed minutes later, making it stale | (self, on reading the hand-back) | **Corrected at the source before application** — the Doc 06 spec was revised to record the landed state, framed in the document as a correction rather than a silent edit. The engineer's original observation was right for what was on disk when it looked; the sequencing was mine |

### Routed to the human — not the PM's to decide

1. **`CLAUDE.md:259` is inaccurate.** It reads *"`--audit` reports every invariant without
   blocking."* `audit()` reports invariants **(b)** and **(c)** only — never **(a)**, the memory
   protocol. This is the source of the SECURITY.md `ISS-01` overclaim: the writer copied the
   handbook faithfully. **SECURITY.md is now more accurate than the handbook it inherited the error
   from.** Agent definitions and the handbook are never self-modified — a human edits and commits.
2. **Patch-vs-minor divergence.** The `document-review` skill says a Medium-or-worse FAIL takes "at
   least a **minor**" bump. **Three documents took patch bumps this session on reviewer
   instruction** (Docs 03/04 by the tester, Doc 08 by reviewer-qa) because no normative content
   changed. Practice has now diverged consistently from the handbook wording; raised by the tester
   as worth a human look rather than a per-document deviation each time.
3. **The memory index is incomplete, pre-existing.** `artifacts/memory-index.json` holds **137**
   keys against **318** `artifacts/*.md` notes — roughly 190 historical notes from earlier sessions
   were never registered. **Nothing is blocked**: the hook requires only that *fresh* notes are
   registered, and all of this session's are. Not repaired here because bulk-registering would mean
   fabricating summaries for sessions nobody observed.

### Owed actions carried out of the SECURITY.md review — recorded, not left as session intent

The reviewer routed two of its three Lows to the **project-manager**. Recording them here is the
point: the debt this session closed was created by exactly the shape of absence these describe —
a correct figure with nothing durable attached to it.

| Id | Sev | Owed action | Owner | Status |
|---|---|---|---|---|
| `ISS-01` | Low | `SECURITY.md:122-123` "(`--audit` reports every invariant; it does not block anything)" **overclaims the tool's coverage**: `hooks/check_gates.py` defines three invariants — (a) memory protocol, (b) RTM zero-gap, (c) review loop — and `audit()` reports **(b) and (c) only**, never (a). Also: `audit()` returns `1 if blocked else 0` and prints `BLOCK <doc>` lines, so a reader running it mid-rework meets the word "BLOCK" beside a sentence saying it does not block. **Provenance is in the writer's favour — `CLAUDE.md` itself says "`--audit` reports every invariant without blocking", so the drift originates in the handbook, not in this delta.** | technical-writer (SECURITY.md wording, next touch); **and separately the handbook's own phrasing is worth a human look** | OPEN — accepted Low, polish for the next SECURITY.md touch. **Not owed before the PASS.** |
| `ISS-02` | Low | The new maintenance duty ("Re-check this figure on every Doc 08 version bump, and before any public release") has a **trigger and a command but no owner**. The reviewer's stated preference, which the PM adopts: do **not** edit SECURITY.md to name a role — keep the public file lay-readable — and instead **register the recurring re-check in the internal debt register (Doc 06 §7)**, so it is carried by the same machinery as every other owed item. | project-manager → folded into the **engineer's Doc 06 v2.9.0** brief | **ACTIONED this session** — carried into the Doc 06 increment |
| `ISS-03` | Low | The `v2.11.3` pin **will be superseded within this session** by Doc 08 v2.12.0. The reviewer ruled the pin **correct as written** (Doc 08 on disk was v2.11.3 Approved; pinning an In-Review version would be worse) and ruled that the delta **prescribes its own follow-up**. The condition attached: advance the pin **only after** Doc 08 v2.12.0 reaches `Approved` — and **"if v2.12.0 Approves and the pin is not advanced before the session closes, re-raise as Medium."** | project-manager | **OPEN — blocking on Doc 08 v2.12.0's PASS.** Must be executed before this session closes or it becomes a Medium |
