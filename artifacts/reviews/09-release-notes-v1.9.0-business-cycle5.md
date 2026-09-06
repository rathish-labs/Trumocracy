# Document Review Report — Doc 09 Release Notes v1.9.0 (business, cycle 5 of 5 — the cap)

<!-- Produced by the document-review skill. Reviewer scores and lists issues only; it never edits
     the reviewed document. All rework is done by the owning role (sre, Chen Wei). -->

```
Reviewed document: 09-release-notes.md
Document version: 1.9.0
Review mode: business
Reviewer role: tester (neutral — sre Chen Wei owns Doc 09; PM-assigned)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 4
Cycle: 5 of 5
Verdict: PASS
```

Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (Doc 09 → business →
tester, new instance; sre / technical-writer / product-owner / engineer excluded). Per the
assignment's **Incident** section I reviewed **only** Doc 09 and self-appointed for nothing. Review
date **2026-09-06**. Predecessor report:
`artifacts/reviews/09-release-notes-v1.8.0-business-cycle4.md` (FAIL 94%, 0C/0H/2M/2L). Rework
spec: `artifacts/sre-2026-09-06T2100-doc09-cycle5-spec.md` (5 ops); sre note
`artifacts/sre-2026-09-06T2100-doc09-cycle5.md`.

---

## 1. Summary (BLUF)

I read `docs/09-release-notes.md` v1.9.0 end to end and re-derived every load-bearing claim in it at
`HEAD` = `84e2203`. **Both cycle-4 Mediums are closed at source, the cycle-4 Low is closed, and
nothing the previous four cycles verified has regressed.** `(exit 1)` is gone from §0 — the only two
survivors in the file are inside the v1.9.0 history entry, quoting the defect it repaired — and the
exit code is now stated exactly once, in the row's closing sentence. I ran the command: **exit 0**,
**0 documents blocking**, all ten governed documents PASS at exactly the versions §0 lists (01
v2.0.0, 02 v2.16.3, 03 v2.13.0, 04 v1.4.0, 05 v2.5.0, 06 v2.5.1, 07 v2.6.0, 08 v2.9.0, 13 v2.8.1,
14 v2.3.0), RTM **138 Must / 16 COMPLETE / 122 OPEN** with both signals agreeing and the Gate-2
traceability criterion **NOT MET**. The absolute "single place" claim is narrowed at **both** sites
that make it (the v1.8.0 history paragraph and the §0 row), and the exceptions are named at the
exact four rows plus the header `Source:` block — I opened every one of them and the disclosure is
accurate. The internal record's append-only history now carries v1.7.0 **FAIL 92%** and v1.8.0
**FAIL 94%** and opens v1.9.0.

**The sre chose to narrow the claim rather than convert the Doc 06/14 pins. Cycle 4 offered both
options and the narrowing is a legitimate close** — it is the option the cycle-4 report recommended
as the cheapest, and it produces a claim a reader can check by reading two tables. Where cycle 4
found an absolute assertion falsified four rows below it with no disclosure anywhere, v1.9.0 states
the narrowed rule and then names every exception with its location in the same cell. That is the
document's failing class finally answered rather than restated.

**I re-derived the rest of the record rather than trusting the previous cycles.**
`git rev-parse HEAD` = `84e2203`; `git log --no-merges --oneline HEAD -- packages apps` returns
exactly **14** commits and the two changelog tables hold **16** rows — those 14 plus the two
labelled branch-side rows (`c04b4f2`, `31b6df9`) the "Scope of the record" paragraph counts once. I
re-ran the full suite twice: contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95 =
**619 passed, `npm test` exit 0** — the figure the document publishes. Docs 10, 11 and 12 carry
**zero** review reports, which is what keeps §0's precondition unmet and is the sre's own owed item.
The `FR-131` word ban is clean for an **eighth** consecutive version, and clean in **every region
v1.9.0 wrote** (I scanned the five changed regions for `private` / `anonym*` / `receipt-free` /
`secure`: **zero hits**). `REL-LIM-18`'s closure is intact and unweakened, still stating the cleared
blocker and the still-unmounted component together, and still carrying the authored-2026-09-05 /
merged-as-`84e2203`-2026-09-06 distinction at every site. **HALTED** appears 12 times, **deployed
nowhere** 9; nothing anywhere is described as deployed.

**Transcription: one finding, and it is cosmetic.** All 5 ops parse, each `REPLACE` appears in the
file exactly once, each `FIND` is consumed, and a whole-file scan finds **zero** adjacent duplicate
lines, **zero** leaked fences or `FIND:` / `REPLACE WITH:` markers, **zero** `(routed` fragments,
**zero** trailing whitespace, and the template `> **Based on:**` line intact at line 37. The one
piece of residue is `ISS-C5-01`: `OP 2` consumed the bare `>` that separated the v1.8.0 history
entry from the entry above it and re-emitted it *before* the new v1.9.0 entry instead of restoring
it, so lines 76–77 now run the v1.9.0 entry's closing sentence straight into the v1.8.0 entry's
header with no blank quote line. The builder's boundary rule passed — both consumed lines do
reappear verbatim — which is precisely why this class slips through: a relocated separator satisfies
`REPLACE[0]==FIND[0]` and `REPLACE[-1]==FIND[-1]`. No content is lost or falsified, and the same
deviation already exists, unrelated to this loop, before the v1.0.1 entry (present at `HEAD`).

**The verdict is PASS at 97%: score ≥ 95 and zero Critical, High and Medium.** Four Lows remain —
the relocated separator, a topic sentence looser than the exceptions it then discloses, an
exception list that is shorter than the duplication it confesses to, and the carried `REF-##`
citations. None is a false statement about the code, the commit, the tests, the word ban, the halt
or the release verdict, and I looked for one at every load-bearing claim in the document.

**What I deliberately did not do.** I did not manufacture a Medium to avoid passing a document at
the cap, and I did not wave anything through to avoid an escalation. The two Mediums that were open
are closed by text I quoted and commands I re-ran; the three things still imperfect are imprecision
and formatting, which the severity taxonomy calls Low, and Lows do not block the bar.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes** (0)
- **Verdict:** `PASS` — both rows are all "yes". The cap is not reached; no escalation, no human
  decision required.

---

## 3. Cycle-4 issue closure

| Cycle-4 ID | Severity | Subject | Status at v1.9.0 | Evidence |
|---|---|---|---|---|
| `ISS-C4-01` | Medium | §0's snapshot stated the audit's exit code twice and the two disagreed — "`--audit` **(exit 1)**" beside "The audit exits **0**" | **CLOSED** | `grep -n "(exit 1)"` returns **exactly two** hits, both at lines 48 and 51 **inside the v1.9.0 history entry**, quoting the defect and announcing its deletion — the only permitted survivors. The §0 row (line 539) now reads *"As re-derived on **2026-09-06** by `node hooks/run_gates.cjs --audit`:* **0 documents blocking**…"* with no parenthetical, and states the code once, at the end: *"The audit exits **0**."* I ran it at review time: **exit code 0**, `Documents blocking the review loop: 0`, all ten documents PASS. The remedy chosen is the one `ISS-C2-01` and `ISS-C3-03` were closed on — state it in exactly one place — rather than a re-synchronised second copy. |
| `ISS-C4-02` | Medium | The "single place … another document's current version is pinned" claim was true for Docs 07/08 and false for Docs 06/14, with no disclosure | **CLOSED at both sites, by narrowing + naming the exceptions** | `grep -n "single"` returns the claim at **line 132** (v1.8.0 history, narrowed in place with a dated `v1.9.0 narrows this paragraph` parenthetical) and **line 539** (§0 row); line 57 is the v1.9.0 history quoting the old wording, which is correct provenance. Both now scope the rule to *"a document whose review state was in motion this week — Docs 03, 04, 07 and 08"* and both name the exceptions. **I verified every site the disclosure lists exists and is exact:** §0 line 533 `Coding & UT record (Doc 06)` → *"present at **v2.5.1, `Status: Approved`**"*; §0 line 534 `User Guide published (Doc 14)` → *"present at **v2.3.0, `Status: Approved`**"*; §Links line 1119 → *"(v2.5.1, Approved)"*; §Links line 1126 → *"(v2.3.0, Approved…)"*; header `Source:` lines 25–26. And §7 line 1202 does name Doc 03 v2.13.0 inside a dated withdrawal that instructs the reader to re-derive with `--audit`. **Doc 04's current version (v1.4.0) appears nowhere else in the document** — I grepped; the other `v1.4.0` hits are Doc 09's own v1.4.0. So of the four documents the narrowed claim enumerates, three hold without exception and the fourth is excepted in the same cell. All four pins are exact at review time (06 v2.5.1 Approved, 14 v2.3.0 Approved PASS 96%, 03 v2.13.0 PASS 97%, 04 v1.4.0 PASS 96% — checked against each document's header and each report's metadata block). Residual wording imprecision is raised as `ISS-C5-02` / `ISS-C5-03`, **Low**. |
| `ISS-C4-03` | Low | The internal record's append-only review-loop history omitted v1.7.0's verdict | **CLOSED** | Line 1014 now ends: *"…v1.7.0 rework cycle 3, 2026-09-06, **FAIL 92%** cycle 3 · v1.8.0 rework cycle 4, 2026-09-06, **FAIL 94%** cycle 4 · v1.9.0 rework cycle 5, 2026-09-06 — cycle 5 is the cap"*. Both closed facts appended, the current entry opened without a verdict it does not yet have. The cell's own "closed facts, append-only" description now holds. |
| `ISS-L1` | Low | `REF-02`, `REF-04`…`REF-10` do not resolve | **CARRIED (eighth cycle), correctly disclosed** | `docs/refine-log.md` is still the unfilled template — `grep -c "REF-0"` = **0**. Disclosed in the header `Status:`, in the v1.9.0 history and in §7 owed-item 2, with the right reasoning (no `REF-##` was opened for `REL-LIM-18`; it was a pre-release honesty defect caught by document review, not a production signal). PM-accepted; non-gating; still owed by the sre at the next Operate cycle. |

### Transcription check (residue is a finding — this version has one, cosmetic)

I checked the 5 ops mechanically against the produced file rather than trusting the spec's
self-check:

| Check | Result |
|---|---|
| Ops parsed from `sre-2026-09-06T2100-doc09-cycle5-spec.md` | **5**, all with well-formed `FIND:` / `REPLACE WITH:` four-backtick blocks |
| Every op's `REPLACE` present in the file | **exactly once** for all 5 (`Version: 1.9.0` ×1, v1.9.0 history header ×1, narrowed claim ×2 — one per site, history cell ×1) |
| Every op's `FIND` consumed | yes — `Version: 1.8.0` header: **0** hits; `(exit 1):` in §0: **0** hits; the old absolute claim survives only as a labelled quotation at line 57 |
| Lines dropped that the op did not declare | **none** |
| Adjacent duplicate lines, whole file | **0** |
| Leaked `` ```` `` fences, `FIND:` / `REPLACE WITH:` markers | **0** |
| `(routed` fragments | **0** — line 1194's sentence is whole and both recovered facts survive; line 96 is the v1.8.0 history describing the old truncation |
| `> **Based on:**` template line | present, line 37, byte-identical to `docs/templates/09-release-notes.template.md:12` |
| Trailing whitespace | **0** |
| Blockquote separators between history entries | **one lost** — the v1.8.0 entry (line 77) no longer has its bare `>` separator. `ISS-C5-01`, Low |

### Independently re-verified and NOT regressed

| Claim in Doc 09 | Verification at review time (2026-09-06) | Result |
|---|---|---|
| `HEAD` = `84e2203` | `git rev-parse HEAD` → `84e22033c0f9c6bd7d64b09aa838c8b0fc05b499` | ✓ |
| The record is the 14 non-merge commits on `main` touching `packages`/`apps` | `git log --no-merges --oneline HEAD -- packages apps` = **14**; the two tables hold **16** commit rows = those 14 + `c04b4f2` + `31b6df9`, labelled branch-side and counted once at line 1091 | ✓ exact |
| "619 tests, `npm test` exit 0" | Re-ran the full suite: contracts **95** · protocol **151** · sdk **244** · ui **18** · indexer **16** · web **95** = **619 passed**, exit **0** | ✓ exact |
| §0 snapshot matches the audit | `node hooks/run_gates.cjs --audit` → **exit 0**, **0 documents blocking**, ten PASS at 01 v2.0.0, 02 v2.16.3, 03 v2.13.0, 04 v1.4.0, 05 v2.5.0, 06 v2.5.1, 07 v2.6.0, 08 v2.9.0, 13 v2.8.1, 14 v2.3.0 — the snapshot's list, document for document | ✓ exact |
| RTM figures and Gate-2 state | Audit: **138 Must rows, 16 COMPLETE, 122 OPEN**, row-marker and RTM §9 signals **agree**; **Gate-2 traceability criterion NOT MET**. §0 row 531 and §7 reason 1 state exactly this | ✓ exact |
| Cross-document pins and their scores | Headers: 01 v2.0.0 · 02 v2.16.3 · 03 v2.13.0 · 04 v1.4.0 · 05 v2.5.0 · 06 v2.5.1 · 07 v2.6.0 · 08 v2.9.0 · 13 v2.8.1 · 14 v2.3.0, all `Approved`. Report metadata: 03 PASS 97%, 04 PASS 96%, 06 PASS 98%, 07 PASS 97%, 08 PASS 98%, 14 PASS 96% — every percentage the document quotes | ✓ all exact |
| Docs 10/11/12 carry no report at all | `ls artifacts/reviews \| grep -cE "^(10\|11\|12)-"` = **0**; they are outside the hook's ten, so no audit surfaces them — exactly as §0 (c) says, and (c) alone keeps the precondition unmet | ✓ |
| `FR-131` word ban | Whole-document scan of `private` / `anonym*` / `receipt-free`: every occurrence negated, quoted as code, historical, or scoped to Definition-B (v2). **Zero** hits in all five regions v1.9.0 wrote (header `Status:`, the v1.9.0 history, the narrowed paragraph at 132–147, §0 row 539, history cell 1014) | ✓ **eighth consecutive version** |
| `REL-LIM-18` closure not regressed | Register row 901, §7 line 1155–1160, the customer bullet and the internal record all still state the closure **and** the still-unmounted component together; the pre-fix row text is still kept verbatim inside the closed row; the authored-2026-09-05 / merged-as-`84e2203`-2026-09-06 distinction survives at every site | ✓ |
| HALTED; Gate 2 not approved; deployed nowhere | "HALTED" ×**12**, "deployed nowhere" ×**9**; the only `production` hits are `fork` **OFF** in production and "MUST NOT be promoted to production". Nothing is described as deployed | ✓ |
| §7's two sufficient reasons, and §7 owed-item 1 | Both reasons intact and each labelled sufficient alone; `docs/10-deployment-runbook.md` and `docs/11-operations-runbook.md` still publish the withdrawn `REL-LIM-03` claim, so owed-item 1 is honestly owed | ✓ |
| Structure | All sections present; **6** explicit `N/A — not yet measured/produced` placeholders, no silent blanks | ✓ |

---

## 4. Per-criterion scores (business rubric)

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The release verdict (**HALTED**, Gate 2 not approved) is unmissable, stated 12 times and never softened; §7's two preconditions are each labelled sufficient alone; "closing a blocker ≠ lifting the halt" survives in four places. §0 — the section headed "read this before acting on this document" — no longer contradicts itself in either of the two ways cycle 4 found. Deducted 2 for `ISS-C5-02`: the narrowed rule's topic sentence is still looser than the exceptions it discloses three sentences later, in that same section. |
| B2 Completeness | 15 | 97 | 14.55 | Every section present, no unfilled placeholders (six explicit `N/A — not yet measured`), the append-only review-loop history now current through v1.8.0 with v1.9.0 opened (`ISS-C4-03` closed), the template provenance line intact, and the exceptions to the narrowed claim disclosed by name and location rather than dropped. Deducted for `ISS-C5-03` — the exception list names five sites where Doc 06's and Doc 14's versions are restated, and there are more. |
| B3 Traceability & IDs | 20 | 95 | 19.00 | Every `REL-LIM`, `FR`, `NFR`, `UT`, `DES`, `ADR`, commit SHA, report filename and cross-document pin I opened resolves and is exact: ten document headers, six review-report scores, the 14-commit log, the 16-row tables, the RTM figures from two independent signals. Deducted for the carried `ISS-L1` (`REF-##` citations that do not resolve, eighth cycle, disclosed and PM-accepted) and for the residual duplication the document now discloses rather than removes — it is honest, but it is still the structural precondition for a future drift. |
| B4 Correctness & consistency | 15 | 96 | 14.40 | **No false claim about the code, the commit, the tests, the word ban, the halt or the release verdict — and no internal contradiction of the class that failed this document four cycles running.** I re-executed every command it quotes and reproduced every figure, including the two that were wrong last cycle. Deducted for `ISS-C5-02`: an enumeration of four documents introduced by the word "single", one of which is then excepted. It is disclosed in the same cell, so no reader is misled — that is why it is Low and not the Medium its predecessor was. |
| B5 Testability | 15 | 98 | 14.70 | The document's strongest property and it held: every claim it makes is attached to a command a reader can run, and I ran all of them — `--audit` (exit 0, ten PASS, RTM 138/16/122), `git rev-parse HEAD`, `git log --no-merges --oneline HEAD -- packages apps` (14), `grep -c "REF-0"` on the refine-log (0), the `^(10\|11\|12)-` report count (0), `npm test` (**619 green, exit 0**, twice). The halt's exit criteria stay falsifiable and named. |
| B6 Convention compliance | 15 | 96 | 14.40 | ISO-8601 throughout; RFC 2119 correct; named-owner rule held (§Contributors names a person per role); 1.8.0 → **1.9.0** is the correct minor floor for a two-Medium FAIL; the header `Status:` states the loop position and the cap accurately, discloses the carried Low, and disclaims that any PASS here is a Gate-2 sign-off or a release authorisation. Deducted for `ISS-C5-01`, the one piece of transcription residue this version introduced — a lost blockquote separator that welds two document-history entries into one rendered paragraph. |
| **Total** | **100** | — | **96.65 → 97%** | — |

---

## 5. Issues (all severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| `ISS-C5-01` | Low | B6 | **Header blockquote, lines 76–77** — the boundary between the v1.9.0 and v1.8.0 document-history entries | **Transcription residue: a lost blockquote separator.** Every other document-history entry in the file is preceded by a bare `>` line (verified at the v1.9.0, v1.7.0, v1.6.0, v1.5.0, v1.4.0, v1.3.0, v1.2.0 and v1.1.0 entries). The v1.8.0 entry is not: line 76 ends *"…(`artifacts/sre-2026-09-06T2100-doc09-cycle5-spec.md`)."* and line 77 begins *"**Document history — v1.8.0 (2026-09-06).**"* with nothing between them, so in rendered Markdown the v1.8.0 entry's header runs on as part of the v1.9.0 entry's closing sentence. Cause: `OP 2`'s `FIND` consumed the bare `>` plus the v1.8.0 header, and its `REPLACE` re-emitted the `>` **before** the inserted v1.9.0 entry rather than restoring it after. **The builder's boundary rule passed** — both consumed lines do reappear verbatim, and `REPLACE[0]==FIND[0]`, `REPLACE[-1]==FIND[-1]` both hold — which is exactly why this class survives the check: a *relocated* line satisfies every rule the spec enforces. **No content is lost and no claim is falsified**, and the same deviation already exists, unrelated to this loop, before the v1.0.1 entry (present at `HEAD`, so it predates the whole v1.5.0–v1.9.0 loop). | At the next version, insert a `>` line between the v1.9.0 entry's last line and the v1.8.0 header (and, if desired, before the v1.0.1 entry, which has the same defect from an earlier era). Add to the builder's rule set: for a pure insertion, the inserted block must be **delimited on both sides** — a separator consumed from the `FIND` must be re-emitted on **both** sides of the insertion, not moved to one. Non-gating. |
| `ISS-C5-02` | Low | B4 / B1 | **§0, `Passing document-review reports` row — line 539**, and the same construction in the v1.8.0 history paragraph, **line 132** | **The narrowed claim's topic sentence is looser than the exceptions it then discloses.** It reads: *"This row is the single place where the current version of a document **whose review state was in motion this week** — Docs 03, 04, 07 and 08 — is pinned."* Three sentences later the same cell says *"For Docs 07 and 08 that holds without exception"* and *"§7 names Doc 03 v2.13.0 inside a dated withdrawal"*. So the enumeration introduced by "single" contains a member that is immediately excepted. I verified the underlying facts: Doc 04's current version appears **only** in the snapshot; Doc 07's and Doc 08's appear in §0/§Links/§7 as dated "Approved at vN" durable facts pointing back at the snapshot (the treatment cycle 4 verified and accepted); Doc 03 v2.13.0 appears in the snapshot **and** at §7 line 1202, exactly as disclosed. **This is materially weaker than its predecessor `ISS-C4-02` and that is why it is Low, not Medium:** cycle 4's defect was an absolute claim falsified elsewhere in the document with no disclosure anywhere; here every exception is named, with its location, in the same cell, so a reader is not misled — only the topic sentence, read alone, overstates. | Enumerate the set the rule actually holds for — *"Docs 04, 07 and 08"* — and mention Doc 03 only where it is excepted; **or** keep the four and write *"is pinned once, except where §7 names Doc 03 v2.13.0 inside a dated withdrawal"*. Whichever is chosen, keep line 132 and line 539 saying the same thing, as they now do. Non-gating. |
| `ISS-C5-03` | Low | B2 | **§0, line 539** — the "Two exceptions, disclosed rather than claimed away" sentence | **The exception list is shorter than the duplication it confesses to.** The cell discloses that Docs 06 and 14 *"are stated where they are used — §0's own `Coding & UT record (Doc 06)` and `User Guide published (Doc 14)` rows, the §Links `Coding & UT` and `User guide` rows, and the header `Source:` block — as well as here"*. All five named sites exist and are exact; I opened each. But **Doc 06's current version is asserted with its `Approved` status at four further sites** the list does not name — the `REL-LIM-18` register row (line 901, twice: *"Doc 06 v2.5.1, Approved"*), the internal record's `Test status` row (line 1026, *"Doc 06 **v2.5.1** (Approved)"*), and §7 (line 1158, *"Doc 06 v2.5.1, Approved"*) — besides several `Doc 06 v2.5.1 §7 item 26` section citations, which are ordinary versioned citations and not pins. The general claim *"stated where they are used"* is **true**, and every one of those pins is **accurate today**; the flaw is that the em-dash list reads as the enumeration and is incomplete, in a sentence whose entire job is to state the remaining duplication honestly. Cycle 4's own finding counted the same five sites, so the spec faithfully mirrored the report — the under-count is inherited, not invented. | Either mark the list as illustrative (*"principally §0's own rows, §Links and the header `Source:` block"*) and add *"and wherever Doc 06 or Doc 14 is cited"*, or extend it to name the `REL-LIM-18` row, the internal record's `Test status` row and §7. Non-gating. |
| `ISS-L1` | Low | B3 | Header `Status:`; v1.9.0 history; §7 owed-item 2 | **Carried, correctly disclosed, eighth cycle.** `REF-02` and `REF-04`…`REF-10` do not resolve — `docs/refine-log.md` is the unfilled template with **zero** `REF-` entries (re-verified: `grep -c "REF-0"` = 0). Stated in three places with the right reasoning: no `REF-##` was opened for `REL-LIM-18` because it was a pre-release honesty defect caught by document review, not a production signal, and the refine-log registers production learnings only. PM-accepted; owed by the sre at the next Operate cycle. | No action this cycle. Non-gating. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. This version
> carries **zero** Critical, High and Medium issues.

### Notes on what I did *not* raise

- **The §0 dated volatile snapshot remains fair practice.** It leads with three durable claims,
  carries an as-of date, tells the reader not to quote it forward, and names the command that
  re-derives it — and every figure in it is exact at review time. Cycle 4 declined to manufacture a
  finding from it; so do I.
- **Doc 07's and Doc 08's "Approved at vN (date)" statements in §Links and §7 are not raised.**
  Cycle 4 inspected all five of those sites and accepted them as durable dated facts that point back
  at the snapshot. Nothing about them changed in v1.9.0, and re-opening settled content at the cap
  would be relitigation, not review.
- **The internal record's `Requirements delivered` row cites Doc 08 at v2.7.0 (Approved).** Not
  raised, for the third cycle running and for the same reason: the row frames it explicitly as what
  the **v2.7.0** matrix records, the figures are unchanged through v2.9.0, and the distinction
  between the last-approved figure and the current one is drawn deliberately in the same table.
- **Doc 03 v2.13.0 appearing inside the v1.5.0 and v1.6.0 history entries** (lines 355, 195) is not
  a pin. Those are dated, closed narrative records of past review cycles inside the document-history
  archive, not current-version assertions; `ISS-C5-02` covers the one live site, §7.
- **The "eighth cycle" count for `ISS-L1`** increments the convention cycle 4 accepted at "seventh".
  Inherently soft, disclosed, PM-accepted, non-gating. Not raised.
- **The `Last updated: 2026-09-06` header field** is correct and no op needed to touch it.

### Gate audit at review time

`node hooks/run_gates.cjs --audit` → **exit code 0**. **0 documents blocking** the review loop — all
ten governed documents carry a passing report for their current version: 01 v2.0.0, 02 v2.16.3, 03
v2.13.0, 04 v1.4.0, 05 v2.5.0, 06 v2.5.1, 07 v2.6.0, 08 v2.9.0, 13 v2.8.1, 14 v2.3.0. RTM: 138 Must
rows, **16 COMPLETE, 122 OPEN**; the row-marker and RTM §9 signals **agree**; **Gate-2 traceability
criterion NOT MET** — a Gate-2 readiness condition, not a per-stop or merge condition (rulings
2026-08-25 and 2026-08-30; certify with `node hooks/run_gates.cjs --gate2`). **Doc 09 is not one of
the hook's ten documents**, so this exit code is not a signal about Doc 09 and this report does not
change it. It is quoted here because §0 quotes it, and it matches.

---

## 6. Routing instruction (to the owning role)

**PASS — the sre (Chen Wei) sets `Status: Approved` on v1.9.0 and the SOP advances.** The loop
closes at cycle 5 without escalation; no human decision is required, and none is recorded below.

Carried into the Operate phase, all non-gating:

1. **`ISS-L1`** — open `REF-##` entries in `docs/refine-log.md` (or drop the citations), eighth
   cycle, owed by the sre.
2. **`ISS-C5-01`, `ISS-C5-02`, `ISS-C5-03`** — a lost blockquote separator, a topic sentence looser
   than its own disclosed exceptions, and an exception list shorter than the duplication it
   confesses to. Fold into the next version whenever Doc 09 is next touched; none justifies a
   version on its own.
3. **The sre's own owed items in §7 stand and are unaffected by this verdict** — the `REL-LIM-03`
   correction has not yet cascaded to Docs 10 and 11, and Docs 10, 11 and 12 still carry **no**
   `document-review` report at all. The second of those is claim (c) in §0, which is what keeps the
   `Passing document-review reports` precondition **Not met** regardless of anything in this
   document.
4. **This PASS is not a Gate-2 sign-off and not a release authorisation** — the document says so
   itself, in the header `Status:` block. Release `0.1.0` remains **HALTED** on two independently
   sufficient reasons, and the Gate-2 traceability criterion remains **NOT MET** at 122 of 138 Must
   rows OPEN. Gate-2 readiness is certified by the project-manager with
   `node hooks/run_gates.cjs --gate2` and signed by no reviewer here.

## 7. Human decision at the cap (ESCALATED only)

**Not applicable — `Verdict: PASS`.** Cycle 5 cleared the bar (97%, 0 Critical / 0 High / 0 Medium),
so the cap's escalation path is not entered, no surviving Critical/High/Medium issues are handed to
the approver, and no recorded human decision is required for this document to advance.
