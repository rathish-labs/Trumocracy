# Document Review Report — Doc 02 Requirements Specification v2.15.0 — business, cycle 1

> Produced by the **document-review** skill (a shared capability — not a ninth agent).
> Reviewer: **tester**, acting as neutral reviewer — **NOT** the document owner (the product-owner
> owns Doc 02). The reviewer scores and lists issues only; it never edits the document.
> All rework is done by the **owning role** (product-owner) as a new version.

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->

```
Reviewed document: 02-requirements-srs.md
Document version: 2.15.0
Review mode: business
Reviewer role: tester (neutral — product-owner owns Doc 02)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 1 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 02 v2.15.0 amends FR-064 to the v1 **EXPLICIT-LEAVE** posture per the FR-064-SEMANTICS ruling
(option (a); Rathish, Human Approver, 2026-08-29). I verified every declared change site against
the file, the amendment against the recorded ruling, and the Gherkin against the **built code** —
not against the document's description of the code.

**The amendment matches the ruling exactly, on all three of the things that were easy to get
wrong:**

- **Explicit-leave, stated normatively.** §4.6 FR-064 now reads: a join request while any active
  membership exists **MUST be refused, naming the current party**; membership ends **ONLY** by the
  member's explicit, recorded leave (FR-022), after which a new join proceeds. The tenure-clock
  reset on switching is retained unchanged.
- **Auto-void deferred, not abandoned.** Automatic voidance *and* the bypass-proof nullifier
  enforcement are explicitly **DEFERRED to DES-065** at the v2 seam swap, with the reasoning that
  the v1 explicit-leave behaviour is the *subset* the v2 mechanism formalises. This is the
  distinction that matters: a deferral with a named destination is a plan; a deletion would have
  been a silent scope cut.
- **Supersede, don't delete.** The original auto-void wording is quoted verbatim inside the FR-064
  cell, labelled SUPERSEDED and retained for the record, with both the original source
  (CR-v1.1.0 / GATE1-DECISION-2026-08-09.md Change 2) and the amendment source preserved.

**The rationale is a product argument, not a technical one**, which is what this rubric wants: the
platform's affirmative-action pattern — *nothing consequential happens by silence* — and the
observation that auto-void would be a silent, costly state change to a membership the member cares
about. That reasoning is stated in the Change block, the §4.6 cell, and §12 consistently.

**Full-file sweep result: clean.** I grepped every occurrence of `auto-void` / `automatically
void` / `FR-064` / `DES-065` / `membership-scope nullifier` / `single party` / `one active party`.
**No site states unqualified auto-void as v1 behaviour.** Every remaining mention is one of: the
v2.15.0 Change block describing the amendment; the SUPERSEDED annotation inside FR-064 itself; the
§12 amendment record; or §16.3's **v2** column ("auto-void deferred there"). §11's scope prose
("one party at a time") is agnostic between the two forms and remains correct.

**The Gherkin agrees with both the amended normative text and the built behaviour.** I read the
implementing tests rather than trusting a summary: UT-0821 asserts
`code === 'ALREADY_MEMBER_ELSEWHERE'`, `currentPartyId === partyA`, and a message containing
"explicit, recorded action"; UT-0859 (web) asserts the visitor is **still a member of the first
party only** after the refusal, which is exactly the Gherkin's "membership in party A is
unchanged"; UT-0824 shows a fresh `joinedAt` on rejoin, evidencing the tenure reset; UT-0822 covers
the dual-membership impossibility clause. The retained fourth scenario (tenure gate) is unchanged.

Housekeeping verified independently: `artifacts/reviews/02-requirements-srs-v2.14.1-business-cycle2.md`
does read **PASS, 97%, 0C/0H/0M/0L** (reviewer: sre), so the Change block's record of it is accurate.
Must count **114** verified against the §11 MoSCoW table, with FR-064 present in the Must set.
**No IDs minted** — the routing item (e) is a lettered routing row, not an ID.

One **Low** issue: the deferral drops a named anti-abuse property without naming what covers it in
v1. Low issues do not block the pass bar.

**Verdict: PASS** — 97%, zero Critical/High/Medium. The product-owner should set
`Status: Approved`; the SOP advances.

---

## 2. Pass-bar check

- Score ≥ 95%? **Yes** (`97%`)
- Critical = 0? **Yes** · High = 0? **Yes** · Medium = 0? **Yes**
- **Verdict:** `PASS` — both rows are all "yes".

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| B1 Outcome & problem clarity | 20 | 98 | 19.60 | The amendment leads with *why*, in product terms: the affirmative-action pattern, "nothing consequential happens by silence", and auto-void framed as a silent costly state change to something the member cares about. A reader who never sees the code understands what changed for the member and why. Consistent across the Change block, §4.6 and §12. |
| B2 Completeness | 15 | 98 | 14.70 | All seven declared change sites present and filled, verified individually: header version/date/Change block; §4.6 FR-064 row; §8 Gherkin; §11 Counts label → v2.15.0; §12 amendment + session-scope blocks; §13 tracked routing (e); §16.3 disposition row. No placeholders. §13(e) is genuinely useful new content — the product-owner picking up the FR-130 DES gap the RTM surfaced and routing it to the architect with the correct diagnosis ("no test can close it"). |
| B3 Traceability & IDs | 20 | 98 | 19.60 | Ruling provenance is complete and checkable: which option (a), who (Rathish, Human Approver), when (2026-08-29), where the flag was raised (Doc 06 v2.3.0 §7 #20) and closed (Doc 06 v2.3.3). DES-065 named as the v2 destination. **No IDs minted**; Must count **114** verified against the §11 table, FR-064 still in the Must set. §16.3 disposition updated on both the v1 and v2 sides. The RTM note is correct and important: the ruling resolves the semantics, **not** the row — FR-064 stays open pending DES-065, which is exactly what Doc 08 gap-log entry 55 records. |
| B4 Correctness & consistency | 15 | 94 | 14.10 | Amendment matches the recorded ruling exactly; supersede-don't-delete honoured; full-file sweep found no site stating unqualified auto-void as v1 behaviour; agrees with Doc 06 v2.3.3 and with the built code. Deduction for **ISS-B1 (Low)**: the superseded wording carried a distinct anti-bypass property ("cannot be bypassed by leaving and re-joining within the same session") which is deferred to v2 without naming the v1 compensating control. |
| B5 Testability | 15 | 97 | 14.55 | Four Gherkin scenarios, each observably testable, and each actually matched by a real assertion in the drop (UT-0821, UT-0859, UT-0824, UT-0822) — including the subtle "membership in party A is unchanged", which is asserted at the web layer. The bare `When`/`Then` continuation after the second scenario follows this document's pre-existing Gherkin house style (the superseded block had the same shape), so it is consistency, not drift. |
| B6 Convention compliance | 15 | 98 | 14.70 | RFC 2119 used correctly and meaningfully (MUST be refused / MUST reset / MUST NOT be bypassed in the deferred clause). ISO-8601 dates throughout. Named-owner rule honoured — FR-064 owner **Rafael Duarte**, a person; the approver is named. The SUPERSEDED-annotation style matches the document's own established precedent for FR-046/FR-062. |
| **Total** | **100** | — | **97.25% ≈ 97%** | — |

---

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-B1 | **Low** | B4 | §4.6 FR-064, the "**v2 (deferred):**" clause (line 576) | The superseded wording carried a **distinct anti-abuse property** beyond auto-void: the nullifier "cannot be bypassed by **leaving and re-joining within the same session**". The amendment correctly defers that property to DES-065 — but the v1 explicit-leave mechanism *depends on* leave-and-rejoin being a permitted, ordinary flow (it is the only way to switch parties, and the drop tests it as a supported path: UT-0824 join→leave→rejoin, UT-0827 rejoin-does-not-re-count). So a reader of FR-064 alone cannot tell whether v1 leaves the tenure-gaming vector open or whether something else bounds it. It **is** bounded elsewhere — **FR-023** rate-limits "each person's join/leave transitions per party and in aggregate per period", and **FR-068** imposes the one-month maturation gate, which FR-064's own retained fourth Gherkin scenario exercises ("left party A less than one month ago … the vote is rejected as tenure not yet met"). The controls exist; the cross-reference does not. When a Must requirement defers a named anti-abuse property, the residual risk should be visible at the point of deferral rather than reconstructed by the reader. | In the "**v2 (deferred):**" clause, add a short v1 cross-reference — e.g. "in v1 the leave/rejoin vector is bounded by FR-023 (join/leave rate limiting) and FR-068 (one-month maturation at the eligibility snapshot); DES-065 replaces these with cryptographic enforcement in v2." One clause; no normative change; no ID change. **Non-blocking** — may be folded into the next Doc 02 version rather than triggering one. |

> **Low** issues do not block the pass bar. There are **no** Critical, High, or Medium issues.

### 4.1 Verification performed (what I checked, and how)

| Claim in the hand-off / document | How I verified it | Result |
|---|---|---|
| Header version/date/Change block updated to v2.15.0 | Read header; `Version: 2.15.0`, `Last updated: 2026-08-29`, Change block entry present | ✅ |
| v2.14.1 business cycle-2 PASSED 97% | Read `artifacts/reviews/02-requirements-srs-v2.14.1-business-cycle2.md` metadata block myself — Score 97%, 0C/0H/0M/0L, Verdict PASS, reviewer sre | ✅ accurate |
| §4.6 FR-064 amended to explicit-leave | Read line 576 in full; confirmed the section heading above it is **§4.6 Membership: open onboarding and equal standing** | ✅ |
| Superseded wording annotated in place, not deleted | Original auto-void text quoted verbatim inside the cell under "SUPERSEDED wording, retained for the record, not deleted" | ✅ |
| Auto-void + nullifier deferred to DES-065 at the v2 seam swap | Present in §4.6, the Change block, §12 and §16.3's v2 column | ✅ |
| Ruling provenance recorded | Option (a), Rathish (Human Approver), 2026-08-29, flag raised Doc 06 v2.3.0 §7 #20, closed Doc 06 v2.3.3 | ✅ |
| §8 Gherkin replaced with explicit-leave scenarios | Read the block; 4 scenarios — refusal naming party A, leave-then-join with tenure reset, dual-membership impossibility, tenure gate | ✅ |
| Gherkin agrees with built behaviour | Read `packages/sdk/test/membership.test.js` UT-0821/UT-0822/UT-0824 and `apps/web/test/join-membership.test.tsx` UT-0859 | ✅ all four scenarios matched by real assertions |
| §11 Counts label → v2.15.0 | Read §11; label reads `Counts (v2.15.0)` per the maintenance rule | ✅ |
| §12 amendment + session-scope blocks | Both present, itemised by change site | ✅ |
| §13 tracked routing (e) — FR-130 DES gap to architect | Present; diagnosis matches Doc 08 gap-log entry 125 (chain broken at DES, not at evidence) | ✅ |
| §16.3 FR-064 disposition row updated | v1 cell: "switch only by explicit recorded leave, then join (v2.15.0 ruling (a))"; v2 cell names DES-065 | ✅ |
| No other site states unqualified auto-void as v1 | Full-file grep on `auto-void` / `automatically void` / `FR-064` / `DES-065` / `membership-scope nullifier` / `single party` / `one active party` | ✅ 0 offending sites |
| Must count unchanged at 114 | §11 MoSCoW table Must row reads **114**; FR-064 present in the Must ID list | ✅ |
| No IDs minted | Diff introduces no new BR/FR/NFR/CON/RISK/TD identifier | ✅ |

**On historical changelog entries.** Two mentions of auto-void sit in the v2.15.0 Change block and
one in §12 — all describing *the amendment itself*, not asserting v1 behaviour. This document's own
v2.14.1 precedent (recorded in §12) establishes that contextually-labelled historical entries
describing a past state are exempt from retroactive amendment. That precedent is correctly applied
here and I did not score against it.

---

## 5. Routing instruction (to the owning role)

**PASS — the product-owner sets Doc 02 `Status: Approved` and the SOP advances.** No new version is
required. Cycle 1 of 5; the loop closes here.

**ISS-B1 is Low and non-blocking** — fold the FR-023/FR-068 cross-reference into the next Doc 02
version rather than cutting one for it.

**Downstream consequences of this ruling (not defects in this document):**

- **Tester (me), Doc 08:** the FR-064 Must row **stays OPEN**, and my next Doc 08 version records
  that the *semantics* half of gap-log entry 55 is now **closed by ruling** while the **DES-065**
  half remains. Doc 02 states this correctly and I will match it. The row does not close on this
  ruling.
- **Architect:** two items now routed — **DES-065** (the v2 membership-scope nullifier that FR-064's
  Must row waits on) and **§13(e) FR-130's missing DES** in Doc 03 §5.2.
- **Gate 2:** unaffected. This ruling removes an *ambiguity*, not a gap.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — verdict is PASS at cycle 1 of 5. The cap was not reached and no human decision is
required or recorded here. (The FR-064-SEMANTICS approver ruling this document implements is a
separate, upstream decision, recorded in the document itself.)
