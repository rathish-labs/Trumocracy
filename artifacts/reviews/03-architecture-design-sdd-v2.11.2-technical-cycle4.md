# Document Review — Doc 03 SDD v2.11.2 (technical, cycle 4)

<!-- MACHINE-PARSEABLE METADATA BLOCK — the SubagentStop hook reads these exact fields -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.11.2
Review mode: technical
Reviewer role: sre (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 95%
Critical: 0
High: 0
Medium: 0
Low: 5
Cycle: 4 of 5
Verdict: PASS
```

```
Date:          2026-08-30
Owning role:   architect (Ravi Deshmukh)
Prior cycles:  artifacts/reviews/03-architecture-design-sdd-v2.10.0-technical-cycle1.md (FAIL 80%, 0C/2H/4M/3L)
               artifacts/reviews/03-architecture-design-sdd-v2.11.0-technical-cycle2.md (FAIL 84%, 0C/0H/5M/4L)
               artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md (FAIL 90%, 0C/0H/1M/5L)
               — cycle 3 re-read in full before this review
Cross-checked: docs/08-traceability-matrix.md **v2.6.1** (moved since cycle 3) ·
               docs/02-requirements-srs.md **v2.16.3** (moved since cycle 3) ·
               packages/contracts/src/core/Governor.sol · packages/contracts/test/differential.test.mjs ·
               packages/protocol/src/governance.js · packages/protocol/src/proposals.js ·
               packages/sdk/src/constants.js · packages/sdk/src/proposals.js
```

---

## 1. Summary (BLUF)

**PASS — the first in four cycles. The single Medium is genuinely and completely fixed, and the
full-document sweep confirms it this time.** §5.2's DES-106 row no longer lists FR-107 in its
`Satisfies` column and §10.13.13's heading now reads "(FR-092)"; both carry a `_(v2.11.2: …)_`
note stating *why*, rather than deleting the link silently. I then swept every occurrence of
`FR-107` in the document — §5.2, §10.13.13, §12, §13, §15, §16, §18, every trace table and every
changelog block — and **no register asserts an `FR-107 → DES` link any more**. Five of the six
cycle-3 findings are fixed or substantially fixed, and I verified each against source rather than
against the changelog: the SDK decode array's hazard is now correctly stated as latent
(`PROPOSAL_STATE_ENUM` has **exactly one occurrence repo-wide**, its own declaration at
`constants.js:43` — re-confirmed by a repo-wide sweep); the owed DES-096 ballot-state accessor is
now a **§13 debt-register row owned by Ravi Deshmukh** with a needed-by, consistent word-for-word
with the §10.13.13(a) prose; FR-107's gap class reads `G-TRACE + G-PHASE3` in both §15 and §5.2,
matching Doc 08; and §15's DES-104 row now records Doc 08's Q16 revisit flag on FR-090 in terms
that match Doc 08 v2.6.1's row almost verbatim.

**Cross-document consistency re-verified against two documents that both moved after cycle 3.** All
six §15 sub-table rows now agree **exactly** with **Doc 08 v2.6.1** — where cycle 3 found five of
six. The Q16 revisit flag Doc 03 now cites is still live in Doc 08 v2.6.1 (it is a *different*
flag from the PROPOSING one discharged at v2.5.3, and Doc 03 cites the right one). Both documents
now track the owed DES-096 accessor as architect-owed, which is a genuine two-document closure.

**Five Lows are carried and none warrants escalation on its own** — each is a one-word or
one-clause edit that changes no obligation, owner, date, ID or link. The score sits **at** the
95% bar, not above it; had any one of the five been a Medium the verdict would be FAIL. The item
I would raise first on any future touch is **ISS-01**: Q17's coverage sentence still reads
"exercises **neither**" two sentences after the row itself enumerates **three** representations,
and the v2.11.2 changelog claims it was "corrected in **both its title and body**". The word
misleads nobody — the title, the enumeration and §10.13.13 all say three — but an over-claimed
fix is exactly what lets an item slip past the next reader.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.2 | All three cycle-3 T1 deductions are discharged. **Six of six** §15 rows re-verified exactly against **Doc 08 v2.6.1**: FR-079 CLOSED v2.5.0 ✓, FR-080 CLOSED v2.5.1 ✓, FR-090 CLOSED v2.5.0 + FR-024 extended + the Q16 revisit flag now recorded ✓, FR-091 OPEN (G-NOMECH) on the one unwired clause ✓, FR-092 OPEN (G-NOMECH) on two grounds ✓, FR-107 `G-TRACE + G-PHASE3` / DES = none ✓. Q15/Q16/Q17 all carry named owners and needed-by. Deductions: the FR-107 contrast prose still omits the build half (ISS-03); the SRS pin is three versions stale (ISS-05). |
| T2 Soundness | 20 | 96 | 19.2 | The FR-107 contradiction is resolved at both locations **with the reasoning stated in both**, not deleted. The hazard paragraph is now correctly tensed and its zero-call-site claim is exactly true. Re-verified against source this cycle: `Governor.State` (7 members, `Governor.sol:41-49`), `PROPOSAL_STATE` (8 values in the listed order, `governance.js:19-28`), `PROPOSAL_STATE_ENUM` (7 lowercase strings, positionally aligned, `constants.js:42`/`:43`), `stateAt()` at `governance.js:210`, `cancelDuringDiscussion` at `Governor.sol:397`, and `differential.test.mjs` (imports no state enum). Deductions: the §10.13.12 `Traces:` residual (ISS-04); §10.13.3 still presents a four-method interface the derivation rule cannot use (ISS-02). |
| T3 Traceability & IDs | 20 | 95 | 19.0 | The register of record (§5.2) is clean of the disclaimed link; §10.13.13's heading agrees; §15's lead-in ("§5.2 provides the `FR/NFR → DES` half") is now consistent with what §5.2 actually publishes. Gap-log entry 98 and owner Erik Lindqvist re-verified in Doc 08 v2.6.1 (line 926). Deduction: one residual FR-107 association survives in §10.13.12's `Traces:` footer (ISS-04) — weak, but it is the same defect class this document has spent four cycles on. |
| T4 Security & failure modes | 15 | 95 | 14.25 | Cycle 3's sole T4 deduction is discharged: the owed DES-096 accessor is now a §13 debt-register row with a named owner (**Ravi Deshmukh, architect**), a needed-by ("before the v1 ballot layer is built"), an honest "blocks no current work", and a provenance note ("Recorded at v2.11.1 in §10.13.13(a) prose only; entered here at v2.11.2"). Consistent with the §10.13.13(a) warning. The ordinal-decode hazard is now correctly ranked *and* correctly tensed — latent, arming at the seam swap. Deduction: the §10.13.3 half of the fix was not applied and §10.13.13(a) carries no forward pointer to §13 (ISS-02). |
| T5 Completeness & testability | 15 | 94 | 14.1 | Every code citation re-verified exact. Q17 now names all three representations, gives their value counts correctly, identifies the vestigial value correctly, names the case to write first, and carries two named owners; its `differential.test.mjs` claim is still true (the file imports `effectiveRules`, `tally`, `petitionThreshold`, `isSurgeActive`, `regionPreimage`, `TIER`, `BPS` and touches no state enum). Deduction: the coverage sentence still counts two, and the changelog reports that as fixed (ISS-01). |
| T6 Convention compliance | 10 | 93 | 9.3 | A clean run this version: **all six** corrections are recorded in place with `_(v2.11.2: …)_` notes (§5.2 cell, §10.13.13 heading, divergence (iii), Q17, §15 DES-104, §13 row) — better than v2.11.1's eight-of-nine. `Version: 2.11.2`, `Status: In Review`, `Last updated: 2026-08-30`; ISO-8601 throughout; RFC 2119 used precisely; named-owner rule honoured. Deductions: three accuracy slips in the header block — the "corrected in both its title and body" over-claim (ISS-01), the "Still routed … Doc 02 §13 (h)" line that Doc 02 v2.16.3 discharged, and the stale `Source:` pin (both ISS-05). |
| **Total** | **100** | — | **95.05 → 95%** | — |

## 4. Issues (summary — full findings in §5)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T5 / T6 | §16 Q17 (line 2868) + header changelog (lines 33–34) | The coverage sentence still reads "`differential.test.mjs` exercises **neither**" two sentences after the row enumerates **three** representations; the changelog claims Q17 was "corrected in both its title and body". Carried from cycle-3 ISS-05, now with an over-claimed fix beside it. | "exercises **none of the three**", matching §10.13.13's own correct form (line 2488); and drop "and body" from the changelog, or state that only the title and the enumeration were widened. |
| ISS-02 | Low | T4 / T2 | §10.13.3 (lines 1788–1795) + §10.13.13(a) warning (2546–2554) | Half of cycle-3 ISS-03's fix landed. §13 now owns and tracks the debt (the substantive half — **fixed well**), but §10.13.3's four-method interface table still reads as complete with no note that a fifth is owed, and §10.13.13(a)'s warning carries no forward pointer to the §13 row that now registers it. | One clause in §10.13.3's DES-096 subsection ("a ballot-state accessor is owed — §13") and one clause in the §10.13.13(a) warning pointing at §13. |
| ISS-03 | Low | T1 | §15 FR-107 row (2846) + §10.13.13 DES-106 heading note (2397) | The gap-class **string** is corrected to `G-TRACE + G-PHASE3` in §15 and §5.2, but the prose built on the old half was not adjusted: §15 still contrasts "a DES is owed *from the architect*, which is a stronger claim than **a build being owed**" when Doc 08 records both, and the §10.13.13 heading note says the row is held open "for want of **a DES**" alone. Carried from cycle-3 ISS-04, narrowed. | "…owed from the architect **in addition to** the build"; and "for want of a DES **and an implementation**" in the heading note. |
| ISS-04 | Low | T3 / T2 | §10.13.12, `Traces:` footer (line 2327); supporting prose at 2266 | The one surviving association of FR-107 with a design element: DES-097(b)'s `Traces:` footer lists `… FR-064, **FR-107**, FR-130, NFR-010`, while §15 states flatly that Doc 08 "correctly records FR-107 … with **DES = none**". Not a `Satisfies` claim — the footer is a mixed related-ID list that includes DES-097 itself, and the next line says "**Enables (does not close)**" — but a tester sweeping the SDD for FR-107 will hit it. | Qualify in place, e.g. `FR-107 (append-only property of the membership log only — see §15; not a DES assignment)`, exactly as §5.2's DES-106 cell now does. |
| ISS-05 | Low | T6 / T1 | Header `Source:` line (10) + changelog (lines 37–39) | `Source: SRS-TRUMOCRACY v2.16.0` while Doc 02 is at **v2.16.3**, and the changelog lists "Doc 02 §13 (h)" as **"Still routed elsewhere, unfixed here"** — but Doc 02 **v2.16.3** corrected §13 (h) on 2026-08-30, explicitly crediting the Doc 03 v2.11.1 review that routed it. I verified the v2.16.1–v2.16.3 delta bears on no Doc 03 claim; the two engineer-owned items in the same sentence **are** still accurate. | Advance the pin to **v2.16.3** with a one-line delta note (Doc 08 treats pin advancement as a first-class discipline), and move §13 (h) from "still routed" to "discharged at Doc 02 v2.16.3". |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.
> **All five Lows above are carried into the Approved version.** None warrants escalation on its
> own, and none does in combination: every one is a one-word or one-clause edit that changes no
> obligation, owner, date, ID or traceability link. See §7 for the explicit carried-Low statement.

## 5. Full findings

### ISS-01 (Low) — Q17's coverage sentence still counts two, and the changelog says it was fixed

**Location.** §16, Q17 (line 2868); header changelog (lines 33–34).

**Verified first — most of the fix landed, and the row is materially better.** The bolded title now
reads *"**None of the THREE ballot-state representations is covered by a differential test.**"* and
carries its own in-place correction note. The body now **enumerates all three explicitly** —
`Governor.State` (Solidity, 7 values), `PROPOSAL_STATE` (JS mirror, 8 values) and
`PROPOSAL_STATE_ENUM` (SDK ordinal-indexed decode array, 7 values) — and I re-verified every count
and characterisation against source: 7 members at `Governor.sol:41-49`; 8 values at
`governance.js:19-28`; 7 lowercase strings at `constants.js:43`. The vestigial claim is exact
(`PROPOSAL_STATE.DRAFT` has no producer; `stateAt()` never returns it; no contract declares a
`Draft`). The naming divergence (`Timelocked` / `SUCCEEDED_TIMELOCK`) is right. The
`differential.test.mjs` claim is still true — re-checked this cycle: it imports `effectiveRules`,
`tally`, `petitionThreshold`, `isSurgeActive`, `regionPreimage`, `TIER` and `BPS`, and references no
state enum at all.

**What is wrong.** One word: *"`differential.test.mjs` exercises **neither**."* "Neither" takes two,
and it now sits two sentences after an explicit list of three. §10.13.13 has the correct form four
hundred lines earlier: *"**No differential test pins any of the three to another** —
`differential.test.mjs` exercises **none of them**"* (line 2488).

**And the changelog reports it fixed.** Lines 33–34: *"(4) **Q17 still counted two** representations
after the sub-table had established three; corrected in **both its title and body**."* The title was
corrected and the enumeration was widened; the body's *coverage sentence* was not.

**Why it stays Low.** The substantive risk is lower than at cycle 3, not higher. At cycle 3 a reader
of §16 alone took away a two-item obligation; now the same reader is handed three named
representations before reaching the word, so "neither" reads as a grammatical slip against the row's
own bolded title rather than as a scoping claim. No obligation, owner, date, ID or link is
misstated. Classifying a one-word residue as Medium — and thereby forcing the fifth and final cycle
before mandatory human escalation — would be disproportionate to what it costs a reader.

**Why it is still worth naming.** This is the fourth consecutive cycle in which a correction reached
all but one location, and it is the **first** in which the changelog asserts the location was
reached. An over-claimed fix is worse than an uncorrected Low, because it removes the item from the
next reader's attention. If this document is reworked for any other reason, fix this first.

---

### ISS-02 (Low) — the DES-096 debt is now owned and tracked; the interface spec is still silent

**Location.** §10.13.3 (lines 1788–1795); §10.13.13(a) warning (lines 2546–2554); §13 (line 2735).

**Verified first — the substantive half of cycle-3 ISS-03 is fixed, and fixed well.** §13 now
carries a debt row that names the problem exactly ("**DES-096 exposes no ballot-state accessor, so
the v1 half of the derivation rule has nothing to derive FROM**"), states the four methods, explains
why now, records its own provenance ("Recorded at v2.11.1 in §10.13.13(a) prose only; entered here
at v2.11.2 so it is **owned and tracked** rather than discoverable only by the implementer who hits
it"), gives the repayment condition ("**DES-096 MUST gain a ballot-state accessor before the v1
ballot layer is built**"), states honestly that it "blocks no current work", and assigns
**Ravi Deshmukh (architect)** with a needed-by. That is consistent with §10.13.13(a)'s prose on both
the obligation and the reason it is not urgent. Doc 08 v2.6.1 independently carries the same item in
its Principal Architect sign-off cell, so both documents now track it as architect-owed — a genuine
two-document closure.

**The residual.** My cycle-3 required fix had two parts joined by "and": a §13 row *and* "one clause
in §10.13.3's DES-096 subsection noting the fifth method is owed". The second part was not applied.
§10.13.3's design-level interface table still lists exactly `castBallot`, `changeBallot`,
`computeTally`, `getTallyProperties` and reads as complete. §5.2's DES-105 row still publishes the
both-versions MUST with no hint that its v1 half is presently unsatisfiable. And §10.13.13(a)'s
warning still ends *"Recorded here rather than left for the implementer to discover at the point of
use"* with no forward pointer to §13 — so the cross-reference is one-directional: §13 → §10.13.13,
never back.

An implementer reading §5.2 + §10.13.3 — the two element registers, without §10.13.13 or §13 — still
meets a normative derivation rule and an interface that cannot serve it. That is the
discovery-at-point-of-use the warning exists to prevent. But it is now **tracked, owned and dated**,
which was the substance of the finding, so the residual is genuinely Low and materially smaller than
what cycle 3 raised.

---

### ISS-03 (Low) — FR-107's gap class is corrected; the prose built on the old half was not

**Locations.** §15 FR-107 row (line 2846); §10.13.13 DES-106 heading note (line 2397).

**Verified first.** The correction landed where it counts. §15 now reads *"**Doc 08 correctly
records FR-107 as `G-TRACE + G-PHASE3` with DES = none** (§3.1; gap-log entry 98, owner Erik
Lindqvist)"*, and §5.2's new DES-106 parenthetical independently states *"Doc 08 holds its Must row
OPEN as `G-TRACE + G-PHASE3` with DES = none, owner Erik Lindqvist"*. Both check out against **Doc
08 v2.6.1**: §3.1 line 622 records the row as `G-TRACE + G-PHASE3 — no DES (Doc 03 §16); no
implementation` with `DES: none`, and gap-log entry 98 (line 926) names Erik Lindqvist. So the
gap-class **string** is now right in two places, where cycle 3 found it right in none.

**What is wrong.** The prose written around the old half-form was not adjusted with it, so two
sentences still describe a single-part gap:

- §15, immediately after the corrected string: *"a DES is owed from the architect, which is a
  stronger claim than **a build being owed**."* Doc 08 records **both** — no DES *and* no
  implementation — so the contrast now sits beside a string that contradicts it.
- §10.13.13's new heading note (2397): *"…whose Must row Doc 08 holds OPEN **for want of a DES**"*.
  True but partial, in text minted this version.

Nothing here misleads a reader into thinking FR-107 is built — the §15 row says the lifecycle is
"still undesigned" and the §5.2 cell says "platform-wide and undesigned" — which is why this stays
Low, narrowed from cycle-3 ISS-04.

---

### ISS-04 (Low) — one FR-107 → design-element association survives, in §10.13.12's `Traces:` footer

**Location.** §10.13.12 (DES-097(b)), `Traces:` footer at line 2327; supporting prose at line 2266.

**The sweep.** I checked every occurrence of `FR-107` in the document. Live text:

| Location | Status |
|---|---|
| §5.2 DES-106 `Satisfies` column (936) | **Clean** — FR-107 removed, with a bolded `NOT FR-107` note explaining why |
| §10.13.13 DES-106 heading (2397) | **Clean** — reads "(FR-092)", with an in-place correction note |
| §15 FR-107 row (2846) | **Correct** — "Do not read this as a DES assignment", agrees with Doc 08 |
| §12, §13, §16, §18, every other trace table | **No occurrence** |
| Changelog blocks (17–23, 32, 69–72, 237) | **Historical only** — line 237 is the v2.9.0 mint record; the v2.11.1 and v2.11.2 entries above it correct the relationship by name. Consistent with the cycle-3 treatment of the mis-citation sweep |
| **§10.13.12 `Traces:` footer (2327)** | **The residual** — see below |

**The finding.** DES-097(b)'s footer reads *"**Traces:** DES-097, DES-100 (retention), DES-102
(cap), DES-080 (schema guard), ADR-024 §(b), ADR-013 §2, CON-002, CON-008, CON-015, FR-010, FR-013,
FR-022, **FR-107**, FR-130, NFR-010."* It is there for a true reason — §10.13.12's rule 3 states
that the append-only membership log means *"Leaving is recorded, not erased (FR-022, FR-107)"* — and
that is exactly the same partial-service relationship §15 describes for DES-106: the element honours
FR-107's append-only property *for one store*, without discharging a platform-wide requirement.

**Why it is Low and not a reprise of the cycle-3 Medium.** Three things separate it from cycle-3
ISS-01, and they are the things that made that one Medium:

1. **It is not in the register §15 names.** §15's lead-in (line 2754) makes **§5.2** the source of
   the `FR/NFR → DES` half, and §5.2 is now clean. A tester doing the documented rule-1 chain check
   finds nothing.
2. **It is not a `Satisfies` claim.** The footer is a mixed related-ID list that includes DES-097
   itself alongside ADRs, CONs and NFRs — it records what the section touches, not what it
   discharges.
3. **The section disclaims closure explicitly**, on the very next line: *"**Enables (does not
   close):** the FR-010 production-store build and every row whose gap reads production-store-pending
   DES-097."*

It is worth naming only because §15 now makes an **absolute** statement ("DES = none") and this is
the one place left in the document that associates FR-107 with a design element. The one-clause
qualification §5.2's DES-106 cell now models would close it. Note that this text predates the
proposals family and was not raised in cycles 1–3; I am recording it because cycle 4's brief asked
for the full sweep, not as a regression introduced by this rework.

---

### ISS-05 (Low) — the SRS pin is three versions stale, and it conceals a routing item now discharged

**Locations.** Header `Source:` line (10); changelog (lines 37–39).

**Finding.** The header reads `Source: SRS-TRUMOCRACY v2.16.0`; **Doc 02 is at v2.16.3**. In the same
header, the changelog closes with *"**Still routed elsewhere, unfixed here (not architect-owned):**
Doc 02 §13 (h) and the two engineer-owned stale code comments…"*.

**Doc 02 §13 (h) is fixed.** Doc 02 **v2.16.3** (2026-08-30) is a one-line correction whose changelog
says it was *"routed in from the Doc 03 v2.11.1 review (cycle 3)"* — my own report. I read the row:
§13 (h) now reads *"**Not a defect in what is built:** the **proposals and debate layer** holds no
vote — it stops at `admitToBallot()` and hands off to `IBallotService`"*, with the superseded wording
quoted in place per the annotate-don't-delete convention. The split cycle 3 flagged is closed. Doc
03's routing line still lists it as outstanding.

**The two engineer-owned items in the same sentence are still accurate**, and I re-verified both:
`packages/sdk/src/proposals.js:293-296` still says *"Admitting a new option after the **ballot**
opens…"* when the rule is **debate**; `packages/protocol/src/proposals.js:103-108` still calls the
taxonomy question *"the **open** reconciliation question"* — ruled 2026-08-30. So the sentence is
two-thirds right; only the Doc 02 clause is stale.

**I verified the pin delta bears on no Doc 03 claim**, which is why this is Low rather than higher:
v2.16.1 added §13 (i) (the Q16 counterpart — Doc 03 §16 Q16 matches it), v2.16.2 named §13 (i) on
FR-090's row and its Gherkin and reordered §13's rows, and v2.16.3 corrected §13 (h). **No normative
requirement text changed** across all three, and every Doc 03 statement about FR-090, FR-091 and
FR-092 still holds against v2.16.3. Recorded because Doc 08's own review loop treats pin advancement
as a first-class discipline (its v2.6.1 fixed exactly this, as a Medium), and because a stale pin is
what let the §13 (h) line go stale beside it.

---

## 6. What was verified and PASSED

Checked against source and against **Doc 08 v2.6.1** / **Doc 02 v2.16.3**, not accepted as asserted.

| Claim under review | Verdict | Evidence |
|---|---|---|
| **Cycle-3 ISS-01 (the Medium) FIXED — §5.2** | **PASS** | Line 936's `Satisfies` column now reads `FR-092, BR-014, BR-019` followed by a bolded *"**NOT FR-107** — v2.11.2: this column listed FR-107, publishing the very `FR → DES` link §15 disclaims"*, plus the correct substantive relationship, the correct Doc 08 status and the reason §5.2 is the register that matters. The link is removed **and** the reasoning is preserved — the better of the two remedies I offered. |
| **Cycle-3 ISS-01 FIXED — §10.13.13 heading** | **PASS** | Line 2397 now reads *"**DES-106 — the permanent decision trail (FR-092).**"* with an in-place note recording the prior "(FR-092, FR-107)" and why it went. |
| **Full-document FR-107 sweep** | **PASS** | Every occurrence checked (see the ISS-04 table). No register — §5.2, §12, §13, §15, §16, §18 or any trace table — asserts an `FR-107 → DES` link. The v2.9.0 mint record at line 237 is historical and corrected by name in two later entries, consistent with the cycle-3 precedent. Sole residual: §10.13.12's `Traces:` footer (ISS-04, Low). |
| **Cycle-3 ISS-02 FIXED — the SDK hazard is now latent** | **PASS, independently re-verified** | Divergence (iii) now reads *"the fragile one — **latent today, live at the seam swap**"*, *"**It has zero call sites repo-wide** (`packages/sdk/src/constants.js:43` is its only occurrence), so nothing is mis-decoding anything today; it is declared ahead of the consumer"*, and *"this array is how the chain's answer **would** reach the application"*. I re-ran the repo-wide sweep: `PROPOSAL_STATE_ENUM` has **exactly one** occurrence, its declaration at `constants.js:43`. Both the tense fix and the added clause are what the finding asked for, and the argument is stronger for it. |
| **Cycle-3 ISS-03 — the §13 debt row** | **PASS on the substance** | The row exists, is owned by a named person (**Ravi Deshmukh, architect**), carries a needed-by ("before the v1 ballot layer is built"), states the four-method interface correctly, is honest about urgency, and matches §10.13.13(a)'s obligation. Doc 08 v2.6.1 tracks the same item in its architect sign-off cell. (Residual = ISS-02.) |
| **Cycle-3 ISS-04 — FR-107 gap class** | **PASS on the string** | `G-TRACE + G-PHASE3` in §15 (2846) **and** §5.2 (936); both match Doc 08 v2.6.1 §3.1 line 622 exactly. (Residual prose = ISS-03.) |
| **Cycle-3 ISS-06 FIXED — §15 DES-104 / Q16 revisit flag** | **PASS, verified against the moved document** | Doc 03: *"**Doc 08 v2.6.0 added a REVISIT FLAG to that row**… **Q16** names FR-090 and is open, so if the rule answering it alters what 'the same decision window' guarantees, the row and TC-3548/TC-3549 must be re-derived. The row stays COMPLETE — Q16 concerns post-vote resolution, outside FR-090's stated guarantee."* Doc 08 v2.6.1's FR-090 row: *"**NEW REVISIT FLAG (v2.6.0)**… This row stays COMPLETE and that is the correct call — Q16 concerns post-vote window resolution, which FR-090's stated guarantee does not require… if the resolution rule that answers Q16 alters what 'the same decision window' guarantees, this row and TC-3548/TC-3549 must be re-derived."* Match on the flag, the status, the reason and both TC ids. **Doc 03 also cites the right flag**: the FR-090 row carries two, and the older PROPOSING one was DISCHARGED at Doc 08 v2.5.3 — Doc 03 does not confuse them. |
| **§15 sub-table vs Doc 08 v2.6.1 — full re-verification** | **PASS on 6 of 6 rows, exactly** (was 5 of 6) | FR-079 COMPLETE, was G-TRACE + G-PHASE3, closed v2.5.0 ✓. FR-080 COMPLETE, was G-NOMECH at v2.5.0, closed v2.5.1 ✓. FR-090 COMPLETE, closed v2.5.0, FR-024 extended ✓. FR-091 G-NOMECH, rule 4 fails on one clause — Doc 03's "on the unwired 'per published timelines' clause **only**" ✓. FR-092 G-NOMECH, rule 4 fails on two independent grounds — same two, same order ✓. FR-107 G-TRACE + G-PHASE3, DES none ✓. |
| **Cycle-2 fix holds — the three-representation sub-table** | **PASS, all values re-derived from source** | `Governor.State` = 7 members, no `Draft` (`Governor.sol:41-49`) ✓. `PROPOSAL_STATE` = the 8 listed values **in the listed order** (`governance.js:19-28`) ✓. `PROPOSAL_STATE_ENUM` = the 7 listed lowercase strings, positionally aligned member-for-member to `Governor.State` (`constants.js:43`) ✓. Divergence (i) three spellings ✓; (ii) `DRAFT` producerless and correctly identified as the reason for 8-vs-7-and-7 ✓; (iii) now correctly tensed. |
| **Cycle-2 fix holds — the `Cancelled` row** | **PASS** | Line 2502 still reads *"(no stage — and the window does NOT end)"* … *"it cancels **one proposal**, not the window"*, and both warning blocks (2512–2528) are intact, including the one-to-many cardinality argument and the `cancelDuringDiscussion(proposalId, …)` citation. `Governor.sol:397` and its FR-029 contract comment re-verified. |
| **Cycle-2 fix holds — the both-versions seam rule** | **PASS, in both locations** | §10.13.13 (2533–2539): *"**The ballot layer is the sole authority on ballot state.** … In **v1** that authority is the **database backing** (DES-096…); at the **v2 seam swap** it becomes the **chain**"*. §5.2 DES-105 row (935): the same MUST at the same scope, with DES-096 in the trace column. No live contradiction. |
| **Cycle-2 fix holds — §16 Q15's corrected wording** | **PASS** | Q15 (2866) still carries the narrow true claim — *"the **proposals and debate layer** holds no vote — it stops at `admitToBallot()` and hands off to `IBallotService`"* — with the correction recorded in place. Full-document sweep of "holds no vote" / "holds no ballot": every live instance (2563, 2582, 2866) is the corrected narrow form; broad forms survive only in historical changelog entries that later entries correct by name. |
| **The mapping table (nine rows)** | **PASS, untouched and still correct** | Re-checked against `Governor.state()` and `stateAt()`. The four-stage pre-vote span, the "skips **three**" warning, the DECISION branch to Tallying then Defeated or Timelocked, and the MEASUREMENT-to-none row all hold. |
| **§10.13.13(b) — ruling (b)** | **PASS, untouched** | Carried forward unchanged as cycles 1–3 instructed. `COUNTING_ACTION` is still the ratified three-value allowlist and the directional warning still names both failure modes with their guarding tests. |
| **Engineer routing still valid** | **PASS** | Both stale comments verbatim intact: `packages/sdk/src/proposals.js:293-296` ("after the **ballot** opens") and `packages/protocol/src/proposals.js:103-108` ("the **open** reconciliation question"). Doc 03's routing line is correct on both. |
| **Changelog honesty** | **PASS with two exceptions** | The v2.11.2 entry names the cycle-3 ISS ids, reports the prior verdict and report filename correctly (FAIL 90%, 0C/0H/1M/5L), states the lesson candidly ("it is the same defect v2.11.1's changelog had just named as the lesson of its own cycle"), and every fix it claims is real — **except** "corrected in both its title and body" for Q17 (ISS-01) and "Still routed … Doc 02 §13 (h)" (ISS-05). |
| **Header hygiene** | **PASS** | `Version: 2.11.2`, `Status: In Review`, `Last updated: 2026-08-30`. ISO-8601 dates; RFC 2119 keywords used precisely; every owner a named person. (`Source:` pin = ISS-05.) |

## 7. Carried Lows — explicit statement

**Five Lows are carried into the Approved version: ISS-01 through ISS-05 above.** The pass bar
permits carried Lows; they are recorded explicitly so the next reader inherits them rather than
rediscovering them.

- **None warrants escalation on its own**, and none does in combination. Each is a one-word or
  one-clause edit. None misstates an obligation, an owner, a date, an ID or a traceability link;
  none would cause a wrong build or a wrongly-closed RTM row.
- **Provenance:** ISS-01 and ISS-03 are narrowed carry-overs of cycle-3 ISS-05 and ISS-04; ISS-02 is
  the unapplied second half of cycle-3 ISS-03; ISS-04 and ISS-05 are new this cycle, both surfaced
  by the full-document sweep and the cross-document check the cycle-4 brief asked for.
- **Priority if the document is touched again:** ISS-01 first (it is the one the changelog reports
  as already fixed), then ISS-05 (a stale pin is what let a routing line go stale beside it), then
  ISS-02, ISS-04, ISS-03.
- **The score sits at the bar, not above it** — 95.05%. Had any one of these five been a Medium the
  verdict would be FAIL. Recorded so nobody reads this PASS as comfortable.

## 8. Observations (no issue raised — for the architect's and the PM's awareness)

- **The version bump was a patch, and I authorised it.** The `document-review` skill says a
  Medium-or-worse FAIL warrants at least a **minor** bump; v2.11.1 → v2.11.2 is a patch. My cycle-3
  routing instruction explicitly directed "bump `Version:` to **2.11.2**", so the architect complied
  with a written instruction and **no deduction is taken**. Flagging it because the Doc 08 reviewer
  applied the rule strictly in the same round ("Minor bump, as the loop requires after a
  Medium-or-worse FAIL — v2.5.4 took a patch bump it was not entitled to"), so two documents were
  reviewed under different readings of one rule. **PM: worth a consistent house ruling.** The
  standard rule should apply to any future Doc 03 version.
- **The `constants.js:42` vs `:43` citation.** The sub-table's "Where" column cites `:42` (the
  `/** Governor.State. */` doc comment) while divergence (iii) cites `:43` (the declaration) and
  calls it "its only occurrence". Both statements are individually true and both were accepted in
  cycles 2 and 3, but a reader comparing them may pause. A half-clause would settle it.
- **`FR-107` still greps inside §5.2's DES-106 cell.** The correction note sits *inside* the
  `Satisfies` column, so the cell contains the string "FR-107" while explicitly disclaiming it. A
  human reads it correctly — the disclaimer is bolded and leads the parenthetical — but a naive
  automated trace extraction over §5.2 would produce a false positive. Not an issue: the house
  convention is to record corrections in place, and a footnote below the table would trade one risk
  for another. Worth knowing if anyone ever machine-parses §5.2.
- **§11 (Situation & failure-mode analysis) still has no row for DES-101..DES-106.** Unchanged from
  cycle 3 and still not raised as an issue, since it is a long-standing curation pattern rather than
  a regression. The section is titled "per requirement" and the proposals family is what four review
  cycles have been about; worth a decision at the next feature-complete pass.
- **All three ballot-state mirrors still have zero call sites**, which the document now says
  explicitly and correctly. Q17 remains cheap to satisfy now and gets more expensive the moment the
  ballot layer wires one in.
- **Cross-document, for the PM.** Doc 08 v2.6.1 fixed the FR-091 seam-scope defect I raised as a
  cycle-3 observation, and Doc 02 v2.16.3 fixed §13 (h). **Both cross-document routings from my
  cycle-3 report are discharged.** The only routing still open from this loop is the engineer's two
  stale code comments.

## 9. Routing instruction (to the owning role)

**PASS → the architect (Ravi Deshmukh) sets `Status: Approved` on Doc 03 v2.11.2. The SOP advances.**

No rework version is required and the loop closes at cycle 4 of 5. The five carried Lows (§7) may be
folded into whatever version next touches this document; they do not justify a version of their own
and **must not be used to re-open a passing document**.

**Route onward via the project-manager (not fixable from Doc 03):**

1. **engineer (Samuel Oyelaran)** — **unrouted since cycle 2; the last open routing from this loop.**
   Both stale comments are verbatim intact: `packages/sdk/src/proposals.js:293-296` says entry closes
   "after the **ballot** opens" when the rule is **debate**, and
   `packages/protocol/src/proposals.js:103-108` calls the taxonomy question "the **open**
   reconciliation question" — it was **ruled** 2026-08-30. The SDD changelog has listed both as
   engineer-owned since v2.11.0. Two comment edits.
2. **project-manager (Ana-Maria Petrescu)** — a house ruling on patch-vs-minor bumps after a
   Medium FAIL (§8, first bullet), so Doc 03 and Doc 08 are held to one reading of the rule.
3. **product-owner (Priya Raghunathan) and tester (Ji-woo Park)** — **nothing owed.** Both cycle-3
   routings are discharged (Doc 02 v2.16.3 and Doc 08 v2.6.1 respectively); recorded here so neither
   is chased twice.

## 10. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 4 of 5 and the verdict is **PASS**. The cap was not reached, and no
human decision is required by this loop.
