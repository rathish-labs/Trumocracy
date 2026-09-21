# Public-files review — SECURITY.md pin advance + `--audit` wording — cycle 2

> **Not a governed-document review.** `SECURITY.md` is a root public file, not one of the 14
> numbered documents. This report lives in `artifacts/status/` and is deliberately **outside** the
> SubagentStop hook's scan, which globs `artifacts/reviews/*.md` only (`hooks/check_gates.py`
> `audit()`, line 556). The metadata field names below are the canonical ones the assignment
> specified — safe here precisely because the hook never reads this directory. The business rubric
> and the severity scale are the scoring frame only; this review starts no hook cycle counter.
> (Same convention as cycle 1, `PUBLIC-FILES-REVIEW-2026-09-20-security-md.md`, and as
> `PUBLIC-FILES-REVIEW-2026-09-06*.md` / `PUBLIC-FILES-REVIEW-2026-09-08-verify.md`.)

```
Reviewed document: SECURITY.md
Document version: n/a (root public file — no semver)
Review mode: business
Reviewer role: product-owner
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

```
Reviewer:          product-owner (Priya Raghunathan) — RACI: Accountable for public-facing claims
Author excluded:   technical-writer (Nadia Hassan) — author of the spec
Applier:           project-manager (Ana-Maria Petrescu) — applied the two ops mechanically
Assignment record: artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md,
                   "Neutral reviewers" table, row "SECURITY.md delta"; owed-actions table
                   ("Owed actions carried out of the SECURITY.md review"), rows ISS-01 and ISS-03
Scope:             the 2026-09-20T2330 follow-up delta ONLY — the two ops in
                   artifacts/technical-writer-2026-09-20T2330-security-pin-spec.md, landing in
                   SECURITY.md:108-126. The cycle-1 delta is re-read for contradiction, not
                   re-reviewed; everything outside lines 106-126 is checked for movement only.
Read at:           working tree, 2026-09-20 (uncommitted; session-start `git status` shows
                   `M SECURITY.md` as the only modification to this file)
Sources of truth:  the authoring spec (above); docs/08-traceability-matrix.md v2.12.3 Approved
                   (front matter lines 5-19, §9 lines 2440-2448);
                   artifacts/reviews/08-traceability-matrix-v2.12.3-technical-cycle5.md;
                   hooks/check_gates.py (whole file); hooks/run_gates.cjs (whole file);
                   .claude/settings.json; .gitignore; .github/workflows/; docs/06-coding-and-ut.md
                   (front matter only, for ISS-02 status); .claude/gate-runs.log (line count only)
Governing test:    (1) is ISS-03 discharged, and discharged CORRECTLY (Approved source, figures
                   unmoved)? (2) are the TWO FRESH FALSIFIABLE CLAIMS the ISS-01 fix introduces —
                   "changes nothing", "stops nothing" — actually true? (3) FR-131(e) / FR-132(d)
                   honesty discipline; (4) nothing out of scope moved
Pass bar:          score ≥ 95% AND zero Critical/High/Medium
Score:             97%  (97.45 weighted, rounded down)
Critical 0 · High 0 · Medium 0 · Low 1
VERDICT:           PASS — no rework owed; no further SECURITY.md touch is required by this review
```

---

## 1. Summary (BLUF)

**PASS at 97%, zero Critical/High/Medium, one Low.** Both PM-routed items are discharged, and
discharged at the level they were raised rather than at the level of the sentence.

**`ISS-03` is fully discharged and can no longer re-raise as a Medium** (§3). The condition I
attached at cycle 1 was conjunctive — *if v2.12.0 Approves **and** the pin is not advanced before
the session closes*. The Doc 08 lineage Approved (as **v2.12.3**, not v2.12.0 — see §3.2, which is
the better outcome, not a deviation) **and** the pin is advanced at **both** sites. The second
conjunct is now false on disk, so the Medium condition is dead. It cannot fire at session close.

**`ISS-01`'s fix is correct, and it discharges all three of the sub-points I raised** — the
coverage overclaim, the unexplained jargon, and the lexical collision with the tool's own `BLOCK`
output (§4). **"Stops nothing" is TRUE, and I verified it harder than the writer did**: the writer
established that nothing *downstream* consumes the exit code; I additionally established *why it
cannot* — `run_gates.cjs:161` scopes the fail-closed block path to `args.length === 0`, and
`.claude/settings.json:8` wires the hook with **no arguments**, so `--audit` is structurally off the
decision path rather than merely unused. I also searched for a consumer and found none: no CI
workflow, no npm script, no settings entry runs `--audit`.

**"Changes nothing" is true of `audit()` and not quite true of the command the sentence names.**
`check_gates.py` contains **zero** write operations anywhere in the file — I checked mechanically,
not by reading `audit()` alone. But the sentence's subject is `node hooks/run_gates.cjs --audit`,
and the *launcher* appends a JSON line to `.claude/gate-runs.log` on every run (`run_gates.cjs`
`log()`, lines 62-78) — the very file my cycle-1 report used as evidence. That is **`ISS-04`, Low**:
the log is gitignored, so nothing in the repository changes and `git status` stays clean, which is
the sense a reader cares about — but "changes nothing" is an absolute, and an absolute that a
careful reader can falsify in one line of code is worth one sentence in the record. **No fix is
owed and I am not asking for another touch of this file.**

**Net: the delta makes the file more accurate than the handbook it inherited the error from.**
`CLAUDE.md:259` still says "`--audit` reports every invariant without blocking". SECURITY.md no
longer does. That inversion is worth naming (§7, Observation 3).

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`, 97.45 weighted)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

---

## 3. `ISS-03` — the conditional Medium, and whether it is discharged

### 3.1 The condition, restated exactly

From cycle 1, §6 and the ISS-03 row: *"If the pin is still v2.11.3 after v2.12.0 is Approved and the
session closes, that becomes a **Medium** at that point."* Two conjuncts. Checked one at a time.

| Conjunct | Check | Evidence | Result |
|---|---|---|---|
| Doc 08 reached `Approved` | `docs/08-traceability-matrix.md:5-6` — `Version: 2.12.3`, `Status: Approved — 08-traceability-matrix-v2.12.3-technical-cycle5.md (PASS 97%, 0C/0H/0M/2L; reviewer: reviewer-qa)`. The report itself exists and its metadata block reads `Score: 97% / Critical: 0 / High: 0 / Medium: 0 / Low: 2 / Cycle: 5 of 5 / Verdict: PASS` | **TRUE** — trigger fired |
| The pin was **not** advanced | `SECURITY.md:110` reads `**v2.12.3**`; `SECURITY.md:124-125` reads `against **Doc 08 v2.12.3**`. **Both** sites moved | **FALSE** — the Medium cannot fire |

**`ISS-03` is DISCHARGED.** The remedy was executed before the session closed, against an
`Approved` source, with the figures unmoved. Recorded here so the discharge is durable rather than
remembered — which was the entire substance of the issue.

### 3.2 v2.12.3, not v2.12.0 — right, and better

The condition named v2.12.0 because that was the version in flight when I wrote it. The lineage
Approved at **v2.12.3** after a four-rework loop (v2.12.0 FAIL → v2.12.1 FAIL → v2.12.2 FAIL →
v2.12.3, passed at cycle 5, the cap). Pinning v2.12.3 rather than v2.12.0 is **strictly more
correct**, for the same reason the original pin was correct: v2.12.0, v2.12.1 and v2.12.2 are
superseded FAILed versions that never held `Approved` status. Pinning the version that actually
carries `Status: Approved` is the rule I ruled by at cycle 1, applied to the version that now
satisfies it. No deviation; the condition's *intent* — cite the Approved source — is met exactly.

Worth recording: the loop closed **on the cap with a PASS**, not an escalation. The pin therefore
cites a version ratified by a completed review loop, not one rescued by a human override.

### 3.3 The figures did not move — verified at source, not accepted

My cycle-1 reason 3 was that the number would not change at the bump, only the label. That
prediction is now testable, and it holds:

| Figure | Claimed in SECURITY.md | Doc 08 v2.12.3 on disk | Result |
|---|---|---|---|
| Must rows | `138 Must-priority requirement rows` (line 110-111); `138 Must rows` (line 125) | §9 line 2447: `Must rows with a complete chain \| 138 / 138 \| **16 / 138** \| **FAIL**` | ✓ |
| COMPLETE | `16 are complete` (line 111); `16 COMPLETE` (line 125) | §9 line 2447, the `16 / 138` cell | ✓ |
| OPEN | `122 remain open` (line 111); `122 OPEN` (line 126) | §9 line 2448: `Open Must rows \| 0 \| **122** \| **FAIL**` | ✓ |
| Section citation | `Doc 08 §9 ("Gate verdict & sign-off")` (lines 117-118, 126) | `docs/08-traceability-matrix.md:2440` — `## 9. Gate verdict & sign-off` | ✓ section number **and** title both still resolve, at a line that moved from 1834 to 2440 across the lineage |

The last row matters more than it looks: Doc 08 grew ~600 lines across this loop, and the citation
SECURITY.md makes is by **section number and title**, not by line — so it survived the growth. That
is the citation style holding up under exactly the stress it exists for.

### 3.4 The re-verification the last-verified line claims

SECURITY.md:124-126 claims that on 2026-09-20, against Doc 08 v2.12.3, `--audit` reported
138/16/122 agreeing with §9. **Bash is unavailable to me (§6), so I did not re-execute it.** Four
independent corroborations, none of them the writer's own assertion:

1. **Doc 08 v2.12.3's own front matter**, lines 12-14, states it verbatim: *"re-verified with the
   hook's own parser after the edit rather than asserted: `node hooks/run_gates.cjs --audit` reads
   **138 Must rows · 16 COMPLETE · 122 OPEN, and the two independent signals AGREE**."* That claim
   sits inside an **Approved** document that a neutral reviewer (reviewer-qa) passed at cycle 5.
2. **The published half is determined outright by the file on disk**: `read_rtm_must_rows()` parses
   §9's two rows (`check_gates.py:93-95`), and those rows read 16 and 122 right now (§3.3).
3. **The PM's own run after the Doc 08 flip**, reported in my brief: 0 documents blocking,
   138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing.
4. **Doc 06 in flight does not falsify the claim.** Doc 06 v2.9.0 is being authored in parallel;
   when it lands, `--audit` will print a `BLOCK` line for it until the tester reviews it, and exit
   1. SECURITY.md's sentence claims **only the triple**, not a blocking count — so it stays true
   through that window. (Doc 06 on disk at my read is still `2.8.1`, `Approved`.) I record this
   because it is the obvious way a reader might think they had falsified the line, and they would
   not have.

---

## 4. `ISS-01` — is the new sentence true? (the load-bearing verification)

Old: *"(`--audit` reports every invariant; it does not block anything)"*
New: *"(`--audit` only prints this report — it changes nothing and stops nothing)"* — my cycle-1
suggested wording, used verbatim.

### 4.1 Does it discharge what I actually raised?

| Cycle-1 sub-point | Status in the new wording |
|---|---|
| **The coverage overclaim.** `check_gates.py`'s docstring names three invariants — (a) memory protocol, (b) RTM zero-gap, (c) review loop; `audit()` reports (b) and (c) only, never (a) | **Discharged by deletion.** The new sentence makes **no coverage claim at all**. It cannot overclaim coverage because it no longer describes coverage — it describes *effects*. That is the right repair: the reader never needed the coverage fact, only the safety fact |
| **(i) "invariant" is unexplained jargon** in a file otherwise pitched at a lay reader | **Discharged.** The word is gone from SECURITY.md. No glossary needed; "prints", "changes", "stops" are all Grade-8 |
| **(ii) the reader meets the word `BLOCK`** (audit's own output token, `check_gates.py:581`) beside a sentence saying "it does not block anything" | **Discharged, and this is the subtlest gain.** The old wording used the *exact token the tool prints*, so a reader mid-rework saw `BLOCK  06-coding-and-ut.md …` directly contradicting the prose on its face. "Stops nothing" shares no token with the output, so the collision is gone — and it remains true while `BLOCK` lines are printing, because a `BLOCK` line is a *finding*, not an *action* |

### 4.2 "Stops nothing" — **TRUE**, and structurally so

I verified the writer's reasoning and then went one step further than it. The writer established
that nothing downstream consumes the exit code. I establish *why it structurally cannot reach the
hook's decision path*, and separately that no consumer exists:

| # | Link in the chain | Source | Finding |
|---|---|---|---|
| 1 | `audit()` never emits the block contract | `check_gates.py:548-603` — the function body is `print()` calls only; the `block()` helper is called from `check_memory_protocol` and `check_review_reports`, never from `audit()` | ✓ the JSON `{"decision":"block"}` contract is unreachable from `--audit` |
| 2 | `--audit` short-circuits `main()` before any enforcement runs | `check_gates.py:606-608` — `if "--audit" in sys.argv: sys.exit(audit(project_dir()))`, *above* `read_hook_input()`, `check_memory_protocol()` and `check_review_reports()` | ✓ the enforcement path is not merely skipped, it is never entered |
| 3 | The launcher's fail-closed path is scoped **away** from argument modes | `run_gates.cjs:161` — `if (run.status !== 0 && args.length === 0)`, with the comment at 158-160: *"`--audit` exits 1 when documents block, which is a report, not a hook decision"* | ✓ a non-zero `--audit` exit **cannot** be converted into `blockAndExit()`. This is deliberate and documented, not incidental |
| 4 | The hook is wired with **no arguments** | `.claude/settings.json:8` — `node "$CLAUDE_PROJECT_DIR/hooks/run_gates.cjs"` | ✓ `--audit` is never on the SubagentStop path at all. The only way to run it is for a human or agent to type it |
| 5 | The exit code **does** escape the launcher… | `run_gates.cjs:185` — `process.exit(args.length ? run.status : 0)` | the honest half: in `--audit` mode the launcher *propagates* `audit()`'s `1 if blocked else 0` (`check_gates.py:603`) to the caller's `$?` |
| 6 | …but nothing in this repository consumes it | Repo-wide search for `run_gates`/`check_gates` outside prose: the only hits are `.claude/settings.json:8` (no args), the launcher and gate scripts themselves, and documentation (`CLAUDE.md`, `CONTRIBUTING.md`, the `document-review` skill, `artifacts/`). **Neither `.github/workflows/verify.yml` nor `.github/workflows/dco.yml` references either script**, and no npm script does | ✓ the exit code sets `$?` and nothing else. **Nothing gates, halts or fails on it** |

**Answer to the question I was asked to test:** I looked for a place where `--audit`'s exit code
gates something, and **there is none**. The one nuance worth stating plainly rather than burying:
the code *is* propagated (step 5), so an operator who writes `node hooks/run_gates.cjs --audit &&
<something>` would find the second command skipped while documents block. That is a property of the
operator's `&&`, not of the tool — the tool stops nothing; a shell conjunction the operator writes
stops the operator's own chain. I do not count that against the sentence, and I record it so the
claim's boundary is on file rather than rediscovered later.

### 4.3 "Changes nothing" — true of `audit()`, imprecise for the command named → `ISS-04`, Low

| Layer | Check | Finding |
|---|---|---|
| `check_gates.py` — the whole file, not just `audit()` | Mechanical search for `open(`, `.write(`, `write_text`, `mkdir`, `unlink`, `rename`, `shutil`: **zero matches anywhere in the file** | ✓ **stronger than the writer's claim.** The gate script is read-only by construction, not merely on the audit path. No file is created, modified or deleted |
| `run_gates.cjs` — the command the sentence actually names | `log()` at lines 62-78, called unconditionally at line 184 on every run including `--audit` (`outcome = 'REPORT'`, line 180): `fs.mkdirSync(path.dirname(LOG), {recursive:true})` then `fs.writeFileSync(LOG, prior.concat(line).join('\n'))`, where `prior` is `slice(-499)` | ✗ **the command writes.** One JSON line is appended to `.claude/gate-runs.log` per run; the file is rewritten, not appended-to, and is capped at 500 lines — so once it reaches the cap each further run **discards the oldest record**. It stands at **364 lines** today (311 at my cycle-1 read), so nothing is being discarded yet, but the truncation is real |
| Does it matter to a reader? | `.gitignore:21` — `.claude/gate-runs.log` | mitigating: the write is **invisible to the repository**. `git status` stays clean; no document, no code, no tracked file changes |

**Ruling: `ISS-04`, Low — and no fix is owed.** In the sense a reader of a security file cares
about — *will running this alter the project?* — "changes nothing" is true and the delta is safe.
But it is an absolute, in a file whose whole register is precision about its own machinery, and it
is falsified by one gitignored log line. I grade it Low, not Medium, because: no reader is exposed
to any risk by the inaccuracy; the changed file is untracked and self-bounded; and it is a
*narrower* miss than the one it replaces (that one misdescribed a governance tool's coverage; this
one omits a journal write). **I note for the record that the wording is mine**, from cycle 1, so
this Low is at least as much my authorship as the writer's — which is the reason to record it
rather than quietly let it pass. Severity is a property of the defect, not of whose pen seeded it.

**If — and only if — SECURITY.md is ever touched again for another reason**, a one-word repair
carries no cost: *"it changes nothing in this repository and stops nothing"*, or *"it only reads and
prints — it changes no file you track and stops nothing"*. **Do not open this file to make that
edit alone.** A third delta to refine a parenthetical would cost more review than the imprecision
costs a reader.

---

## 5. Did anything out of scope move?

`git diff` was unavailable to me (§6), so — as at cycle 1 — this is positional and content proof,
not a byte-level diff. It is unusually strong this time, because **both ops are line-count-neutral**:
OP 1 replaces 8 lines with 8, OP 2 replaces 10 with 10. Every line number below the delta must
therefore be **identical to the post-cycle-1 file**, and every one of them is:

| Item | Cycle-1 post-change position (recorded 2026-09-20) | Position now | Result |
|---|---|---|---|
| `REL-LIM-17` | 90-92 | **90-92** | ✓ unmoved, text intact ("irrevocable and only ever grows… inventoried and monitored") |
| `REL-LIM-18` | 93-97, SHAs `0a5c542` / `84e2203` | **93-97**, SHAs `0a5c542` / `84e2203` at line 95 | ✓ unmoved, both SHAs intact, still marked **closed** |
| `TD-RTM-01` (`UT-0841`..`UT-0848`) | 101-104 | **101-104** | ✓ unmoved, text intact — and correctly **still open**, since the assignment record names its renumbering as deliberately out of scope |
| "Reporting a vulnerability" | 128-139 | **128-139** | ✓ unmoved, both paragraphs intact (private-reporting route; best-effort/no-SLA/`ADR-010` no-silent-hotfix) |
| "What not to report" | 141-146 | **141-146** | ✓ unmoved, intact |
| 138 / 16 / 122 | three sites | **three sites**, all 138/16/122 | ✓ no figure moved, exactly as the spec promised |

Everything **above** line 106 is likewise unmoved, since `REL-LIM-17` at line 90 and `TD-RTM-01` at
line 101 both hold their exact prior line numbers — an unchanged line number at 90 means every line
above it is positionally identical. The spec authorises two ops, the writer's note records two ops,
and `git status` shows one modified file.

**Finding: no evidence of any out-of-scope change, and positive evidence against one.**

---

## 6. Limits of this verification (stated, not implied)

**Bash is again unavailable to this session** — it is not in this instance's tool set. As at cycle
1, I did not treat that as a reason to accept anything on assertion, and **I claim no run I did not
make**:

- **`node hooks/run_gates.cjs --audit` — NOT executed by me.** For the claim actually at issue in
  §4 this is not a weakness: the claims are about what the command *does to the filesystem and to
  the process*, and that is settled by reading `check_gates.py` and `run_gates.cjs` in full, which
  covers **every** run rather than one. For the *numbers* in §3.4 I relied on four independent
  corroborations, three of them documents a neutral reviewer has already passed, and I say so there.
- **`git diff SECURITY.md` — NOT executed by me.** §5 substitutes a positional proof made unusually
  tight by both ops being line-count-neutral. I renew my cycle-1 request to the **PM**, who has the
  tooling: one `git diff SECURITY.md` confirming the diff touches only lines 110 and 122-125. I
  expect it to, and the PASS does not depend on it.
- **What I did read in full**: `hooks/check_gates.py` (both the docstring's three-invariant
  definition and `audit()`), `hooks/run_gates.cjs`, `.claude/settings.json`, `.gitignore`, both
  GitHub workflow filenames, Doc 08's front matter and §9, the Doc 08 v2.12.3 review report's
  metadata block, and SECURITY.md end to end.

---

## 7. Ruling — the unchanged date beside a moved version

**The question:** the last-verified line now reads *"Last verified: **2026-09-20**, against **Doc 08
v2.12.3**"*. The version moved; the date did not. Is that honest, or must the line distinguish
"first verified" from "re-verified"?

**Ruling: it is honest, and the line needs no such distinction. No change owed.** Four reasons, in
descending weight.

**1. The compound claim is true, and that is the whole test.** The sentence asserts: *on
2026-09-20, against v2.12.3, the command reported 138/16/122*. For that to be true a verification
must have occurred **today against v2.12.3** — and it did: today **is** 2026-09-20, and Doc 08's own
front matter dates v2.12.3 to `(2026-09-20)`. The version could not have been verified on any
earlier date, because it did not exist on any earlier date. The date is not a field that failed to
move; it is a field that **correctly records a same-day event**. There is no false statement here to
repair.

**2. "Last verified" is by construction a *latest* timestamp, and a latest timestamp that legitimately
repeats is behaving correctly.** A field that had to *change* to prove work was done would be a
field that rewards date-bumping — and date-bumping is the precise dishonesty this register exists to
prevent. **The dangerous failure mode is the opposite one: a date that moves while nothing was
re-checked.** Requiring the line to visibly distinguish a re-verification would invite exactly that.
I will not ask a file to adopt a convention whose main effect is to make an unverified refresh look
diligent.

**3. The load-bearing token is the version, not the date, because the maintenance trigger is a
version bump.** The file's own rule is *"Re-check this figure on every Doc 08 version bump, and
before any public release"* — event-driven, not calendar-driven. Under that rule the pair
`(date, version)` must move **where the trigger moved it**: the subject moved, the citation moved
with it, and the date stayed true. The pair is internally consistent and consistent with its own
stated trigger. A reader auditing this file checks the pin against Doc 08's front matter — which
resolves exactly (§3.3) — not the date against a clock.

**4. Day granularity is the right resolution for this file.** A public security file re-checked at
version-bump cadence has no use for a finer timestamp, and adding one would imply a precision of
maintenance the file has been careful *not* to claim (it discloses, in bold, that the figure is
hand-copied rather than generated). **Sub-day precision would be a small overclaim of rigour** — the
exact failure mode my brief asks me to hunt. The line is better as it stands.

**The one residual, unchanged from cycle 1 and still not an issue.** My cycle-1 Observation 2 noted
that the line *"names a date but no verifier"*. The same-day repeat makes that marginally more
visible: with neither a moved date nor a named verifier, the file itself carries no trace that a
*second* verification happened at all — a reader has to go to Doc 08's front matter to find it (and
it is there, quoted verbatim, §3.4). **If anyone ever wants to close that residual, the remedy is
verifier attribution, not a first-vs-re-verified split** — one clause, e.g. *"Last verified
2026-09-20 by the technical-writer against Doc 08 v2.12.3"*. Recorded as an observation, not owed,
and explicitly **not** worth its own delta.

---

## 8. `ISS-02` — confirming the decision not to fix it here was right

**It was right, and I reaffirm it: `ISS-02` must NOT be closed by a SECURITY.md edit.** My cycle-1
remedy named the internal route as my preference on its merits — *"keep the public file
lay-readable… register the recurring re-check in the internal debt register (Doc 06 §7), so it is
carried by the same machinery as every other owed item"* — and the reasoning is unchanged by
anything in this delta. Naming a role inside a public security file would add an internal-process
detail that serves no external reader, and would put a maintenance duty somewhere no maintenance
process looks. **The spec's decision to leave it untouched is correct, and I require no edit for
it.**

**Has routing it internally actually given the duty an owner? At my read: not yet on disk, and that
is expected.** `docs/06-coding-and-ut.md` is still `Version: 2.8.1`, `Status: Approved`, and a
search of it for `SECURITY.md` returns **no matches** — so as the repository stands at the moment I
write this, the recurring re-check is registered nowhere and the duty still has no owner. The
engineer is authoring v2.9.0 in parallel, so this is a statement about *timing*, not a finding.

I state it because the alternative is to assume it: the assignment record marks `ISS-02`
**"ACTIONED this session"**, and at my read time the artifact that would make that true does not yet
exist on disk. **That is the one thing that could still leave this Low un-discharged when the
session closes** — not through anyone's fault, but through the same mechanism the whole session was
convened to fix: a duty carried by intent rather than by a record. **Doc 06 is the tester's to
review and not mine to rule on**, so I raise no issue and score nothing against it. I simply ask the
**PM** to confirm, before the session closes, that Doc 06 v2.9.0 as landed actually contains the
entry — and if it does not, to carry `ISS-02` forward rather than mark it closed.

---

## 9. Per-criterion scores

Business rubric (B1–B6), adapted to a root public file exactly as at cycle 1: B3 "Traceability &
IDs" is read as *do the citations resolve at the source they name*; B5 "Testability" as *is the
claim falsifiable by a reader who does not trust us*.

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The delta does the two things owed and **nothing else** — no opportunistic edits, no figure "freshening", no scope creep into `ISS-02` or `TD-RTM-01`. A follow-up delta that stays inside its warrant is the hard case, and this one does. |
| B2 Completeness | 15 | 96 | 14.40 | Both PM-routed items discharged; both pin sites moved, not one (the single most likely failure of a two-site edit). The residual — no named verifier on the last-verified line (§7) — is unchanged from cycle 1 and not owed. |
| B3 Traceability & citations | 20 | 99 | 19.80 | Every citation resolves **at the source it names**: version, status, section number, section title and all three figures, against a document that grew ~600 lines and moved §9 from line 1834 to 2440. Section-and-title citation surviving that growth is the convention proving itself. |
| B4 Correctness & consistency | 15 | 94 | 14.10 | "Stops nothing" verified true through six links (§4.2), including two the writer did not cite. "Changes nothing" verified true of the gate script — which contains **zero** write calls of any kind — but imprecise for the launcher named in the sentence (`ISS-04`). No contradiction anywhere else in the file. |
| B5 Testability / falsifiability | 15 | 99 | 14.85 | Strictly improved on cycle 1. The old parenthetical asserted a coverage fact a lay reader had no way to check; the new one asserts two effect claims checkable by reading one 185-line file — and one of them **is** falsifiable, which is how I found `ISS-04`. A claim that can be tested and mostly survives is worth more than a claim that cannot be tested at all. |
| B6 Convention compliance | 15 | 98 | 14.70 | ISO-8601 (`2026-09-20`) ✓. **Unexplained jargon removed** ("invariant" no longer appears), which was half of cycle-1 ISS-01 and is a real gain for a file pitched at a non-engineer. Register plain and consistent with the rest of the file. |
| **Total** | **100** | — | **97.45 → 97%** | — |

---

## 10. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-04 | **Low** | B4 | `SECURITY.md:122-123`, the clause "it changes nothing and stops nothing" | **"Stops nothing" is true (verified six ways, §4.2). "Changes nothing" is true of `hooks/check_gates.py` — which contains zero write operations anywhere in the file — but not of the command the sentence names.** `node hooks/run_gates.cjs --audit` runs the launcher's `log()` (`run_gates.cjs:62-78`, called at 184 on every run), which `mkdirSync`s `.claude/` and rewrites `.claude/gate-runs.log` with one appended JSON line, capped at 500 lines — so past the cap each run **discards the oldest record**. Currently 364 lines, so nothing is being discarded today. **Mitigating and decisive for severity:** the log is gitignored (`.gitignore:21`), so no tracked file changes and `git status` stays clean — "changes nothing" holds in the sense a reader cares about. **Provenance: the wording is mine**, suggested at cycle 1 and used verbatim; recorded here rather than passed over for that reason, not despite it. | **None owed. Do not open SECURITY.md for this.** A third delta to refine a parenthetical would cost more than the imprecision costs any reader. **If and only if the file is touched again for another reason**, prefer "it changes nothing in this repository and stops nothing" or "it only reads and prints — it changes no file you track and stops nothing". |

> **Low** issues do not block the pass bar. Zero Critical/High/Medium were found.

### Status of the cycle-1 issues

| Cycle-1 ID | Status after this delta |
|---|---|
| `ISS-01` (`--audit` overclaim + jargon + `BLOCK` collision) | **DISCHARGED** — all three sub-points (§4.1). Superseded by `ISS-04`, a narrower Low on the replacement wording, with no fix owed |
| `ISS-02` (maintenance duty has no owner) | **NOT an issue against this file** — correctly routed internally and correctly not fixed here (§8). Its landing in Doc 06 v2.9.0 is not yet on disk at my read; the PM should confirm before closing the session |
| `ISS-03` (pin will be superseded this session) | **DISCHARGED — the conditional Medium is dead and cannot re-raise at session close** (§3) |

### Observations (not issues — no fix owed, recorded for the next toucher)

1. **The delta is line-count-neutral**, which is what made §5's out-of-scope proof tight without
   `git diff`. Worth keeping as a habit for public-file deltas: an edit that preserves line counts
   is an edit whose blast radius a reviewer can bound without a diff tool.
2. **The last-verified line still names no verifier** (§7, residual). Carried forward from cycle-1
   Observation 2, unchanged, still not owed — and if ever addressed, addressed by attribution, not
   by splitting "first verified" from "re-verified".
3. **SECURITY.md is now more accurate than the handbook it inherited the error from.**
   `CLAUDE.md:259` still reads *"`--audit` reports every invariant without blocking"* — the
   provenance I recorded in the writer's favour at cycle 1. That sentence is now wrong in exactly
   the way SECURITY.md's no longer is. **`CLAUDE.md` is not mine to edit and is out of this
   review's scope**, and nothing here is blocked by it; I record it once more so the drift has a
   second entry in the record rather than only the cycle-1 one. It is a fix for whoever next opens
   the handbook, with human approval, not for this session.
4. **The best sentence in the delta survived rework**, as I asked at cycle 1: the "derived copy …
   copied here by hand rather than generated automatically … can go silently stale" disclosure is
   byte-unchanged. A delta that improves a paragraph without eroding its strongest disclosure is
   doing rework correctly.

---

## 11. FR-131 clause (e) / FR-132 §(d) honesty check

Read as a Grade-8 reader, and read adversarially — looking for anything quotable out of context as a
promise.

- **No guarantee is stated or implied.** Both ops are about provenance and tooling. The delta
  introduces **no claim about what the product does, protects, or will do**. Nothing here can be
  mistaken for a safety property.
- **No enrolment, identity or privacy claim is introduced** — FR-132 §(d)'s territory is untouched.
  `REL-LIM-02` and the FR-131 (a)–(d) honesty paragraph at lines 36-47 are byte-unchanged, including
  the disclosure that the `DES-098` acknowledge-to-proceed control is **not built**.
- **The section's honest register is preserved and not softened.** "Gate 2 has not been reached",
  "122 remain open", "Independent audits have not started", "a rollback drill has not been
  executed", "the MACI committee … does not exist yet" all survive verbatim. Advancing the pin to a
  **newer** Approved version did **not** improve the picture — 122 Must rows are still open after a
  full four-version RTM rework loop, and the file says so in the same words. **A version bump that
  makes a public file's bad news no better is a version bump reported honestly.**
- **The delta does not overclaim its own rigour** — the specific risk I test. It claims a
  verification it can support (§3.4, corroborated four ways), on a date that is true (§7), against a
  version that is genuinely `Approved` (§3.1). It did not quietly pin the newer number to look
  current, and it did not touch a figure.
- **On the delta's one imprecision**: `ISS-04` understates a *write to a gitignored log*, not the
  figure's rigour or any product property. It makes the tool sound marginally safer than it is by
  one untracked line; it makes **no** product claim safer than it is. Net effect on the file's
  honesty: **positive**, and larger than cycle 1's, because a false coverage claim about a
  governance tool has been removed from a public file entirely.

---

## 12. Routing instruction

**PASS at cycle 2 of 5.** `SECURITY.md` carries no `Version:`/`Status:` block, so there is nothing
for the owning role to set to `Approved` and **no rework is owed**. The technical-writer (Nadia
Hassan) is clear. **I am not asking for a cycle 3 and I am not asking for another touch of this
file.**

To the **project-manager**, four things, none of which gate anything:

1. **Record the outcome** — `SECURITY.md delta | Cycle 1: PASS 96% (0C/0H/0M/3L) | Cycle 2: PASS
   97% (0C/0H/0M/1L) | Final: PASS` — in the assignment record's Outcomes table.
2. **Mark `ISS-03` DISCHARGED** in the owed-actions table, citing this report. The conditional
   Medium **cannot fire at session close**: the pin reads v2.12.3 at both sites against a Doc 08
   that is v2.12.3 `Approved`. **Mark `ISS-01` DISCHARGED** likewise. `ISS-04` supersedes it as an
   accepted Low with **no owed action**.
3. **Before the session closes, confirm `ISS-02` actually landed** — that Doc 06 v2.9.0 as written
   contains the recurring SECURITY.md re-check entry in §7. At my read, Doc 06 on disk is v2.8.1 and
   contains no mention of `SECURITY.md` (§8). If it does not land, carry `ISS-02` forward rather
   than close it.
4. **Run `git diff SECURITY.md` once** to confirm byte-wise what §5 establishes positionally — I
   could not (§6). Expected: changes at line 110 and lines 122-125 only.

I raise nothing against Docs 03, 04, 06, 07 or 08. Doc 06 v2.9.0 is being authored in parallel and
is the **tester's** to review; where I read Doc 08 and the Doc 08 v2.12.3 review report above, I read
them **as sources**, not as documents under review, and I have neither edited nor ruled on them.
`CLAUDE.md:259` is noted as an observation only and is out of scope for this or any product-owner
edit.
