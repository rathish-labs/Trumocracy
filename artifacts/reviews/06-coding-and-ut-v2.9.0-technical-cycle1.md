# Document Review Report — Doc 06 Coding & Unit Testing v2.9.0 (technical, cycle 1 of 5)

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.9.0
Review mode: technical
Reviewer role: tester
Score: 96%
Critical: 0
High: 0
Medium: 0
Low: 5
Cycle: 1 of 5
Verdict: PASS
```

> Reviewer: **tester (Ji-woo Park, new instance)** — neutral, PM-assigned **before** dispatch per
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`, standing precedent for this
> document (v2.6.0, v2.7.0, v2.8.0, v2.8.1). The owning role (**engineer**, Samuel Oyelaran) is
> excluded. I authored none of Docs 03/04/06/07/08 in this session. **Scored and listed only —
> the document was not edited.**

---

## 1. Summary (BLUF)

Doc 06 v2.9.0 is the debt-closure session's **last** document, and its job — to make §7 and §3
tell the truth about what the session actually landed — is discharged. I verified **every**
load-bearing claim against the file on disk rather than against the assignment brief, including
the two code facts (`PrivacyStatus.tsx:251-252`; `PrivacyStatus.test.tsx:32` / `:208`), the
fourteen-vs-fifteen `TC` arithmetic, the four sibling document versions, both `SECURITY.md` pin
sites, the `run_gates.cjs` `log()` cap and its `.gitignore` line, the Arabic packet's 253 leaves,
and a fresh `npm test` run. **Nothing this version claims is overclaimed, and the one thing a
debt register is most tempted to do — report an owed thing as a fixed thing — it does not do
anywhere.** Item 26 records the `anon` ruling as **pre-mount** with two facts explicitly *owed,
not fixed*; item 17 says in terms that **preparing a packet is not the review**; item 28 closes
`TC` coverage while stating that **FR-131's Must row stays OPEN**. **PASS at 96%**, five Lows,
none blocking. The single sharpest thing this version does is carry a disclosure it was not
required to carry: it states the **fourteen**, not fifteen, FR-132-evidence count that Doc 08
spent three rework cycles establishing — voluntarily importing a downstream correction into an
upstream register.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | Correctly scopes what the drop touches: `FR-132 §(d)` as the governing requirement, `NFR-023 · DES-085` for the jargon scan, `FR-131` as **instrument only** on two cases. Keeps FR-131's Must row OPEN (G-PHASE3) and says why (unbuilt DES-098, item 26(d)) |
| T2 Soundness | 20 | 98 | 19.60 | The pre-mount framing, the "no single static `anon` subtitle can be honest across three contexts" reason, the `ISS-04` log-cap nuance carried *beside* the command rather than buried, and the correct-before-apply handling are all sound and correctly reasoned |
| T3 Traceability & IDs | 20 | 95 | 19.00 | Every ID checked resolves (below). Two currency defects: the header `Source:` SDD pin (ISS-02) and the §5.0 register hole (ISS-01) |
| T4 Security & failure modes | 15 | 98 | 14.70 | Item 29 gives the `SECURITY.md` staleness duty an owner, a recurring trigger and a command, and is honest about the `ISS-04` nuance. The green test pinning a non-compliant string is recorded as **owed**, not fixed |
| T5 Completeness & testability | 15 | 95 | 14.25 | 640/640 re-verified by me with the exact per-package breakdown. Three carried Lows folded. §5.0's hole is the one completeness gap |
| T6 Convention compliance | 10 | 96 | 9.60 | MINOR bump correct; annotate-don't-delete held; ISO-8601 throughout; owner named in the header. Item 29 names a role, not a person (ISS-04) |
| **Total** | **100** | — | **96.55 → 96%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T3 / T5 | §5.0 "Review history for this document" | **The register has no `v2.7.0 cycle 2` entry**, though `artifacts/reviews/06-coding-and-ut-v2.7.0-technical-cycle2.md` exists on disk and its verdict (PASS 96%, 0C/0H/0M/3L) is quoted in this document's own header `Status:` block. The list runs **v2.8.1 → v2.8.0 → v2.6.0** — a hole *between adjacent entries*, which is more visible than a truncated tail. The carried Low this version discharged was scoped as "two cycles stale" and those two entries **were** added, correctly and substantively; this is a **separate, pre-existing** omission, newly conspicuous because the fold ran through this very list one line above the gap. Graded Low on this document's own unbroken precedent: a missing §5.0 entry was graded Low at v2.6.0 (ISS-02, the v2.5.1 entry) and again in the v2.8.1 carried-Low set | Add the `v2.7.0 cycle 2` line at the next touch, between the v2.8.0 and v2.6.0 entries |
| ISS-02 | Low | T3 | Header, `Source:` line (line 41) | `Source: SDD-TRUMOCRACY **v2.13.0** §9 · ADR-011 · …` is one minor behind the Approved **Doc 03 v2.14.1**, while this version's body relies on **Doc 03 v2.14.1 §10.12.3 clause 10** at two sites (change history; §7 item 26) — a clause that **does not exist at v2.13.0**. I verified the pin is stale-but-harmless rather than wrong: every changed hunk in the v2.14.x delta lies **outside** §9's span (§9 runs 1807–1855 in the new file; the first changed hunk after it starts at old-file line 1742, ahead of §9's old position), so §9's content is unmoved and no published fact is wrong. Same shape as Doc 04's own carried `ISS-C2-03` (stale cite, figures re-verified correct), graded Low there | Advance the pin to `SDD-TRUMOCRACY v2.14.1 §9` at the next touch, or add one clause noting §9 is unchanged across v2.14.x |
| ISS-03 | Low | T3 | Change history, v2.9.0 entry — "`node hooks/run_gates.cjs --audit` reports **0 documents blocking**" | **False of the file that contains it, during its own review window.** I ran the command: it prints `BLOCK 06-coding-and-ut.md v2.9.0 - no report for this version` and `Documents blocking the review loop: 1`. Three things hold it at Low rather than Medium, and they are the difference between this and the sites Doc 08 FAILed on three times: (a) the clause is **explicitly timestamped** — "States observed on disk **at the moment of writing**, 2026-09-20" — where Doc 08's failing sites were live and present-tense with **no** annotation; (b) the one omitted fact is declared twenty-odd lines above, in the `Status:` line's "In Review … cycle 1 of 5"; (c) the falsity is **purely self-referential and transient** — the count returns to 0 the moment this report lands, which the assignment record itself predicts. The RTM figures in the same clause (138 Must / 16 COMPLETE / 122 OPEN, both signals agreeing) I re-derived and they are **exactly right** | Optional one-clause fix at the next touch: "…0 documents blocking **other than this version, whose own cycle-1 review was then in flight**" |
| ISS-04 | Low | T6 | §7 item 29, "**Owning role: technical-writer**" | The duty is given an **owning role** but **no named person**, where `CLAUDE.md`'s named-owner convention prefers a person, this document's own header names one (Samuel Oyelaran), the sibling artifact names one (Doc 07 `TC-3591`: "owed scope for the engineer (**Samuel Oyelaran**)"), and the assignment record names two candidates (technical-writer — **Nadia Hassan / Maya Lindqvist**). The duty is nonetheless unambiguous as written, and the trigger and command are exact, so this is polish — it does **not** reopen the `ISS-02` complaint it answers | Name the person alongside the role at the next touch |
| ISS-05 | Low | T2 | §7 item 26, v2.9.0 annotation — "because petition endorsement is public by design (Doc 14 §2.2)" | Renders Doc 03 FINDING 3 in the **present** tense, faithfully to FINDING 3's own wording, but without the tense reconciliation **Doc 03 v2.14.1 added at that exact citation** (cycle-1 ISS-04): Doc 14 §2.2 is written in the **future** tense — *"When backing ships, it **will be** a public act"* — and petition endorsement is **unshipped in v1**; clause 10(b)'s `'endorse'` string can render only on a shipped screen 2.3. Item 26's own **pre-mount** framing covers the practical consequence, so no reader of Doc 06 is misled about what ships, but the summary carries the uncorrected tense into a register that will be read on its own | Optional: add the half-clause "(unshipped in v1; §2.2 states the posture for when backing ships)" at the next touch |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. There are none.

---

## 5. Verification log — what I checked against disk, not against the brief

Every figure below was re-derived by me. Nothing in this section is taken from the assignment
record or from the engineer's note.

### 5.1 Item 28 — UT-0890's `TC` row, CLOSED and **not overclaimed**

| Claim in Doc 06 | Verified |
|---|---|
| Doc 07 **v2.9.0** Approved, PASS 97% 0C/0H/0M/4L, reviewer-qa | **TRUE** — `docs/07-test-cases-suites.md:5-6` |
| Doc 08 **v2.12.3** Approved, PASS 97% 0C/0H/0M/2L, reviewer-qa, after a five-cycle loop | **TRUE** — `docs/08-traceability-matrix.md:5-6` |
| Fifteen cases `TC-3577`..`TC-3591`, **one per `it`** of the UT-0890 block | **TRUE** — the `describe` at `apps/web/test/safety-surfaces.test.tsx:430` closes at `:584` and contains exactly **15** `it(` blocks, counted mechanically |
| Minted into **§5 `TS-ADV-01…16`** | **TRUE** — Doc 07 §5's heading (line 1384) names the range `TC-3577–TC-3591` |
| All fifteen verify **FR-132 §(d)**, not FR-131; clause (e) excludes enrolment/identity-verification copy | **TRUE, and faithful to its Approved source.** Doc 07 v2.9.0 line 219 says it in its own words — "§(d) … **is the requirement the fifteen new cases verify**" — and line 30 adds "**not one of the fifteen cases carries an FR-131 link**" |
| `TC-3585`, `TC-3591` apply FR-131's word list as an **instrument**, "and both rows say so" | **TRUE, verbatim.** `TC-3585`: *"The four-word list is FR-131's, used here as an **instrument**; the governing requirement is FR-132 §(d)"* + *"this row must NOT be read as FR-131 evidence"*. `TC-3591`: *"the four-word list used again as an instrument, not as an FR-131 obligation — see TC-3585"* |
| **FR-131's Must row stays OPEN (G-PHASE3)**, unmoved by the mint | **TRUE** — Doc 08 line 2392, row 117: `FR-131 | G-PHASE3` |
| Doc 08 records **fourteen**, not fifteen, as FR-132 evidence; `TC-3586` verifies `NFR-023 · DES-085` and names no FR | **TRUE** — Doc 07's `TC-3586` row (line 1423) reads *"Verifies US-0133 · NFR-023 · DES-085"* and names no FR; Doc 08 line 709 enumerates the fourteen as `TC-3577..TC-3585, TC-3587..TC-3591`, and line 2084's NFR-023 row is where `TC-3586` enters |

**This is the finding I most expected to have to raise, and it is not raisable.** Doc 06 uses
"all fifteen" in the same breath as the fourteen-count, which read in isolation is loose — but
(i) it is the **exact phrasing of its Approved source**, Doc 07, and (ii) Doc 06 then does what
Doc 07 does *not* do: it states the carve-out explicitly, **at both sites**, in the same
paragraph as the claim, in the words "**fourteen**, not fifteen". That is an upstream register
voluntarily importing a downstream correction that cost Doc 08 three rework cycles to establish.
The distinction it preserves is real and worth stating plainly: **which requirement governs the
copy** (FR-132 §(d), for all fifteen) is a different question from **which requirement each row
links to as RTM evidence** (fourteen; `TC-3586` links at NFR-023). No reader of this paragraph
can come away with the wrong number.

### 5.2 Item 26 — the ISS-05(i) flag, RESOLVED against the disposition, **owed not fixed**

I re-read the code myself rather than inheriting my own earlier Doc 03 review.

| Claim | Verified |
|---|---|
| `packages/ui/src/PrivacyStatus.tsx:251-252` — `title: 'Anonymous'`, `subtitle: 'Nothing you do here is linked to you'` | **TRUE at exactly those line numbers** |
| Doc 03 **§10.12.3 clause 10** minted, normative, Doc 03 **v2.14.1** Approved | **TRUE** — the ruling in force at `docs/03-architecture-design-sdd.md`, superseding both prior `anon` dispositions; v1 title **"Open tier"**, subtitle **context-selected** over `'browse' \| 'join' \| 'endorse'`, **fail-honest default** for absent/unrecognised/malformed context, express bar on **inferring** context |
| `OPEN-27` CLOSED; `OPEN-28`/`OPEN-29`/`OPEN-30` minted | **TRUE** — Doc 04 v1.7.1 §13, line 143: *"`OPEN-27` CLOSED; THREE SUCCESSORS MINTED"* |
| The load-bearing reason (no single static subtitle honest across three contexts; true on browse/join, **false on endorse**) | **TRUE** — Doc 03 FINDING 3, rendered faithfully (see ISS-05 for the one tense nuance) |
| **(i) PRE-MOUNT** — six non-render comments across five files; **no `PrivacyStatus` import anywhere in `apps/web`** | **TRUE, re-derived.** `grep -rn "PrivacyStatus" apps/web` returns exactly six hits, all in comments or JSX comments, at `ProvisionalStatus.tsx:11`, `PartyMembership.tsx:26`, `parties/page.tsx:19`, `proposals/page.tsx:22`, `petitions/new/page.tsx:13` and `:134` — **five files, six hits, zero imports, zero renders**. The line numbers Doc 06 publishes are each correct |
| **(ii) A green test pins the non-compliant string** — `PrivacyStatus.test.tsx:32` asserts `getByText('Anonymous')`; the banned-word regex at `:208` sits **inside** the `UT-0759` `ver` describe, so the `anon` case carries **no banned-word assertion at all** | **TRUE on all three counts.** Line 32 is the assertion, inside the `UT-0750` describe opened at line 29. `const BANNED = /\b(private\|anonymous\|receipt-free\|secure)\b/i` is at line **208**, inside the describe opened at line **198** (`UT-0759 … ver-state title`), and its only use is at line 216 — **within that same block**. The `anon` state is therefore asserted to contain "Anonymous" and never scanned for banned words |

**Honesty check — does the document claim a fix?** No, and it is emphatic about it: *"Owed
engineering work, recorded here and **NOT fixed** this documents-only session"*, *"product-code
scope, owed to the engineer"*, *"**This is a PRE-MOUNT ruling — nothing ships wrong today**"*.
The contrast it draws — against the `ver` title, which *shipped* wrong and had to be caught in
code (Doc 09 v1.3.0 `REL-LIM-18`) — is the right one and is the reason the pre-mount distinction
earns its place rather than reading as an excuse.

### 5.3 Item 17 — Arabic, OPEN and human-gated

`artifacts/status/ARABIC-NATIVE-REVIEW-2026-09-20.md` verified: **253 reviewable leaves**
(line 20: "228 plain strings + 25 template functions = 253"; the pairing table's last row is
numbered **253**); line 42: *"Every one of the 253 leaves in `ar.ts` has an English counterpart
in `en.ts` — **0 missing**"*; four risk-ordered tiers with **`banner.*` at Tier 1** (3 leaves,
the vote-surface coercion warning); the five Arabic number-agreement categories to English's two,
rendered at **1 / 2 / 3 / 11** (packet §(d), lines 81-84). Every figure Doc 06 publishes matches.

**Does it read as though the debt closed? No.** The document says it in bold and in terms:
*"**Preparing the packet is not the review** — this item stays OPEN and human-gated; it closes
only when a named human Arabic speaker completes the pass and any findings are applied."* The
item is not moved out of §7, the change history repeats the same qualification, and the v2.8.1
"not done" annotation lists ARABIC-I18N among the **three that are genuinely still open**. The
carried caveat that `UT-0889`/`TC-3573` guards the Arabic copy **by absence only** — proving the
retired phrasing is gone, not that the required facts are present — is the kind of detail that
stops a future reader mistaking a passing test for coverage. Correct on every count.

### 5.4 New item 29 — the recurring `SECURITY.md` re-check duty

| Required element | Present? |
|---|---|
| **Owner** | **Yes** — "**Owning role: technical-writer**" (author of `SECURITY.md`), with the project-manager named as the role that *triggers* the re-check when certifying a Gate-2 packet or a Doc 08 bump. Owner + trigger is a well-formed pair, not a diffusion of responsibility. **Role, not person — see ISS-04** |
| **Recurring trigger** | **Yes, and explicitly standing** — "**This is a standing, RECURRING duty, not a one-off:** on every Doc 08 version bump, and before any public release" |
| **Command** | **Yes** — `node hooks/run_gates.cjs --audit`, with the instruction to update both the pinned figure **and** the "Last verified" line. I confirmed `SECURITY.md` carries a "Last verified" line for this to bind to (`:124-125`) |
| **Honest about the `ISS-04` nuance** | **Yes, and accurately.** `run_gates.cjs:62-78` is `log()`, called on every run; it writes one JSON line to `.claude/gate-runs.log`; `prior.slice(-499)` + the new line = a **500-record cap**, past which each run discards the oldest — exactly as described. `.gitignore:21` is `.claude/gate-runs.log`, so `git status` stays clean. The cycle-2 reviewer's own words at its §4.3: *"**Ruling: `ISS-04`, Low — and no fix is owed**"* |

The "already exercised once this session, and now **demonstrable** rather than pending" claim is
true and checkable: `SECURITY.md:110` and `SECURITY.md:124-125` both cite **Doc 08 v2.12.3**,
figures unchanged at 138/16/122, and the cycle-2 public-files review exists with the metadata
Doc 06 quotes — `Score: 97% / Critical: 0 / High: 0 / Medium: 0 / Low: 1`, reviewer-role
`product-owner`, `Verdict: PASS` — and does rule `ISS-03` **DISCHARGED** on the conjunctive
reasoning Doc 06 reproduces. **A register entry whose first exercise is already evidenced is a
materially stronger answer to "this duty has no owner" than a promise would have been.**

### 5.5 The three carried Lows — discharged, or restated?

| # | The carried Low | Ruling |
|---|---|---|
| 1 | §5.0 review history, **two cycles stale** | **DISCHARGED** — the v2.8.1 cycle-2 and v2.8.0 cycle-1 entries are present, in correct descending order, and are **substantive** (each names the reviewer, the verdict, the severity counts and every ISS with its disposition) rather than stub lines. Separately, the register is missing v2.7.0 — **ISS-01**, a different defect |
| 2 | The v2.8.1 "not done" list, overtaken | **DISCHARGED, and the convention held.** The original six-item sentence is **retained verbatim**; the correction is **appended** as a dated parenthetical that closes three (README/CONTRIBUTING inventory line — verified present at `README.md:123`ff and `CONTRIBUTING.md:41`ff; UT-0890's `TC` row; Doc 02's review loop — verified `v2.17.3` **Approved**) and names the three that are **genuinely still open**. Nothing was deleted |
| 3 | §3's sentence pointing at item 26 where item 28 tracks the row | **DISCHARGED.** It now reads "…**closed at v2.9.0** (§7 item **28** — not item 26, corrected below)" and a full dated v2.9.0 correction block follows |

**On annotate-don't-delete, since Low 3 required editing a sentence in place.** I checked this
specifically. The lead sentence's status words *were* replaced rather than struck — but the
convention held in substance, for two reasons a reader can verify: the correction marker is **in
the replaced sentence itself** ("— not item 26, corrected below"), and the superseded wording
**survives verbatim three lines below**, inside the retained v2.7.0 ISS-01 correction block
(*"The only `TC` row owed to the tester is **UT-0890's** … Doc 08 closed on the cap and is not
reopened for it mid-session"*). Nothing is recoverable only from git. This is the same
annotate-in-place pattern Doc 03 v2.14.1 used and that I ruled correct when reviewing it. **Not
an issue.**

### 5.6 The environment claims

- **No product code, test or config changed.** `git status --porcelain` shows modifications to
  `SECURITY.md`, `artifacts/memory-index.json`, `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`
  and `docs/03,04,06,07,08` only, plus untracked `artifacts/`. **Zero files under `apps/`,
  `packages/`, `services/`, `contracts/`, or any config.** Confirmed.
- **`npm test` = 640/640.** Re-run by me this session: contracts **95** · protocol **151** ·
  sdk **244** · ui **18** · indexer **16** · web **116** = **640 passed, 0 failed**, every
  package green. This is the exact breakdown Doc 06 publishes, component by component.
- **`--audit`.** 138 Must / 16 COMPLETE / 122 OPEN, derived and published signals **agreeing**;
  the Must count did not move this session, as a documents-only drop requires. Before this
  report landed, **Doc 06 v2.9.0 was the only blocking document** — see ISS-03.
- **MINOR bump correct.** v2.8.1 → **v2.9.0** is right: §7 item 29 is genuinely **new register
  content**, not polish. _(Context only, deliberately **not** scored against this document: the
  `document-review` skill's "a Medium+ FAIL takes at least a minor" and the three **patch** bumps
  taken elsewhere this session on reviewer instruction are a skill-level divergence already
  routed to the human. It has no bearing on this version, which bumps minor for the correct
  reason — added content, not a FAIL response.)_

---

## 6. Ruling — the correction made *before* application

**The handling was right, the framing is honest, and carrying the stale claim would have been
the worse choice. No issue is raised.** My reasoning, since the question was put squarely:

1. **The alternative was to knowingly publish a false claim.** The engineer's original
   "SECURITY.md pin not yet landed" was true when written and false by the time the spec would be
   applied. Applying it anyway would have put on disk a statement its author *knew* to be wrong,
   in order to preserve a record — and then relied on me to catch it. The review loop exists to
   find defects an author **could not** see; feeding it one the author **could** see inverts it.
2. **It is the session's own stated design.** The assignment record makes Doc 06's last-authored
   position load-bearing precisely so it "reports only what is true on disk when it is written",
   because *"a document that asserts another document's state before that state exists is the
   exact defect Doc 02 v2.17.2 FAILed on."* A claim that a state has **not** yet been reached
   fails in the identical way once it has. Correcting at the source is that rule applied, not an
   exception to it.
3. **Nothing was lost, because the correction is recorded at two granularities.** The *document*
   carries the one-clause disclosure in the change history; the engineer's note carries the full
   mechanics in a headed "Post-handback correction" section (who flagged it, what was re-verified,
   which spec operations changed, what was deliberately left untouched, and a re-run of the
   exactly-once check). That is the correct split — the document records the fact, the note
   records the process.
4. **The framing does not launder the earlier text.** It does not say the earlier record was
   wrong; it says it was *"correctly reflecting what was on disk when this document was first
   authored (the pin advance was a parallel, in-flight action at that moment)"*. That is
   accurate, and notably the document makes **no claim about elapsed time** — it says "parallel,
   in-flight", not "minutes". A document that declined to characterise timing it could not
   verify is a document behaving well.
5. **The boundary was respected.** The convention is *"a document records the decision it owns
   and routes the application; only the applying role's document reports that the application
   happened."* Doc 06 does not claim to have advanced the pin — the technical-writer's delta did,
   and Doc 06 cites that delta and its independent cycle-2 review. What Doc 06 reports is an
   **observed disk state** plus a duty it now **owns** in its own register (item 29). Correct
   side of the line.

The one thing I would not want generalised: correcting-before-apply is right **because the spec
was not yet applied and the correction was disclosed**. Silently amending an applied document, or
amending without the "an earlier draft recorded…" clause, would be a different act with a
different answer.

## 7. Routing instruction (to the owning role)

**PASS.** The **engineer** (Samuel Oyelaran) sets `Status: Approved` on
`docs/06-coding-and-ut.md` v2.9.0 and carries the five Lows on the status line as non-blocking,
to fold at the next touch: **ISS-01** (§5.0 missing the v2.7.0 cycle-2 entry), **ISS-02** (header
`Source:` SDD pin one minor stale), **ISS-03** (the "0 documents blocking" clause, true as
timestamped, false inside its own review window), **ISS-04** (item 29 names a role, not a
person), **ISS-05** (the Doc 14 §2.2 tense nuance). **None of the five requires a new version on
its own account**, and none touches product code. The SOP advances; the review loop for this
lineage closes at cycle 1.

## 8. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is PASS.
