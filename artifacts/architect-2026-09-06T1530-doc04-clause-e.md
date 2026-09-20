# Architect session note — 2026-09-06T15:30 — Doc 04 v1.5.0 cascade for FR-131 clause (e)

```
Role:        architect (Ravi Deshmukh — Principal Architect; owner of Doc 03 and Doc 04)
Date:        2026-09-06
Session:     Doc 04 cascade for the approved FR-131 clause (e)
Deliverable: artifacts/architect-2026-09-06T1530-doc04-spec.md — an ANCHORED SPEC of 14
             operations taking docs/04-test-strategy-master-plan.md from v1.4.0 (Approved)
             to v1.5.0 (In Review). The spec is applied mechanically by the project-manager's
             applier; I hold Write but not Edit and did not touch Doc 04 directly.
Wrote:       2 files, both under artifacts/ — this note and the spec above.
Edited:      no document, no code. Doc 04 is NOT modified by me; the applier applies the spec.
```

## 1. What I was asked and what I did

The approver (Rathish Kumar) confirmed **FR-131 clause (e)** on 2026-09-06
(`artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11 item 3 — "**APPROVED** — Draft and
apply FR-131 clause (e) in Doc 02"). It is applied as **Doc 02 v2.17.0 (In Review)** §4.45.

Doc 04 v1.4.0 §0.5 **S4** carried a dated note saying, pinned to Doc 02 v2.16.3, that "**There is no
(e)**", that a product-owner proposal "is **NOT applied and awaits the approver**", and — the
sentence that made this session mandatory — "**If a clause (e) is later ruled in, this criterion and
the TCs derived from it are re-cut together.**" That condition has occurred. I wrote the criterion
half of the re-cut as an anchored spec; the `TC` half is the tester's.

**14 operations**, all against `docs/04-test-strategy-master-plan.md` and nothing else:

| OP | Where | Intent |
|---|---|---|
| 1 | header | Version 1.4.0 → **1.5.0**; new `Status: In Review — v1.5.0`; v1.4.0 status record retained verbatim |
| 2 | `Source:` | re-pin Doc 02 → **v2.17.0**, Doc 03 → v2.13.0 **Approved**, Doc 06 → v2.6.0 in flight, Doc 07 → **v2.6.0**, Doc 09 → **v1.9.0**; annotate the superseded "four, not five" statement |
| 3 | `Changelog:` | new v1.5.0 entry above the retained v1.4.0 entry |
| 4 | §0.5 **S4** criterion | forbidden-word scan widened to "…**or any other v1 participation act**"; clause-(a) negated-form carve-out stated; **notice range stays (a)–(d)** |
| 5 | §0.5 **S4** note | dated v1.5.0 note **prepended above** the retained v1.4.0 note: clause (e) ruled in, routing discharged, tester note superseded on one point |
| 6 | §0.5 **S5** | denylist widened; four numbered rules — words · **claims test** · the satisfying pattern that PASSES · exactly two carve-outs; enrolment/verification copy expressly out of scope (Doc 02 §13 (j)) |
| 7 | §0.5 **S5** carve-out | dated annotation: the `anon` carve-out does **not** lapse; the question it raises is routed as **OPEN-27** |
| 8 | §1.3 | ISS-C2-02 — Doc 05 re-pinned v2.3.0 (In Review) → **v2.5.0 (Approved)** |
| 9 | §1.4 References | ISS-C2-01 (second named location) — Doc 07 → v2.6.0, with the stale neighbours swept |
| 10 | §13 bullets | OPEN-27 classified *not gate-blocking, but owed* (with the condition that makes it blocking) |
| 11 | §13 table | **OPEN-27** minted (high-water was OPEN-26; no ID reused) |
| 12 | §22 Approvals | architect row brought current at v1.5.0, v1.4.0 folded into row history |
| 13 | §11.2 | the S5 tooling row records that the scan is a claims test, not only a word list |
| 14 | Downstream | Doc 06 re-pin + **UT-0889** cited as owed-and-in-progress; Doc 07 v2.7.0 / Doc 08 v2.10.0 re-cut recorded as owed |

## 2. The distinction I was careful to get right

**Clause (e) is not a fifth clause of the DES-098 notice.** S4's "required clauses **(a)–(d)**" is
the *notice content* range and stays (a)–(d). Clause (e) is a **claims duty on every public-facing
string about any v1 participation act** — vote, endorse/back a petition, join or belong to a party,
support a party — **in any language**, tested by what an ordinary Grade-8 reader (`NFR-023`) would
take the claim to mean. It is verified by **UT-0889 (Doc 06 v2.6.0)**, the UT-0869-pattern guard the
engineer is minting this session in `apps/web/test/safety-surfaces.test.tsx`, by **UT-0869** on the
party copy, and otherwise by **inspection (I)** — FR-131's own recorded Verify-by. The spec says this
three times, in S4, S5 and the changelog, because it is the single most likely thing for a downstream
reader to get wrong, and getting it wrong would mint a fabricated fifth notice `TC`.

The widened closing sentence bans the four words for "v1 voting behaviour **or any other v1
participation act**", with a carve-out for clause (a)'s mandated negated forms — so **UT-0887** and
the FR-131(a) ballot banner are untouched. This plan's own fifth word ***secret*** survives, still
labelled as this plan's deliberate extension beyond FR-131's four.

## 3. Doc 03 judgement — has anything become FALSE under clause (e)?

**Judgement: NO. No normative statement in Doc 03 is falsified by FR-131 clause (e). I specced no
Doc 03 change this session.** What I checked, and the reasoning:

- **§10.13.6 DES-098 (the honesty notice).** Content is clauses (a)–(d) at SCR-13/SCR-14,
  non-dismissable, WCAG 2.2 AA. Clause (e) adds no notice content and changes no placement.
  **Unaffected and true.**
- **§10.12.3 DES-094 clause 7 (`ver` subtitle) and clause 9 (`ver` title).** Both gate the v2
  claim on a live `getProperties().unlinkable === true`, with a fail-honest v1 default
  ("Verified", "Your vote counts. How you voted is never made public."). Clause (e) **reinforces**
  these: the v1 subtitle is precisely the pattern Doc 02 names as SATISFYING clause (e) — it states
  what the platform does not *publish*, not what the platform cannot *know*. **True, and
  strengthened.**
- **§13 (the disclosed-limitation pattern, Phase-1 public tallies).** Clause (e) is an instance of
  that pattern, not a contradiction of it. **Unaffected.**
- **§10.12.3 clause 8 (non-vote `anon` disclosure).** Already concedes the `anon` subtitle is "not
  literally true in v1" and imposes a disclosure obligation. Clause (e) makes that concession more
  consequential; it does not make the clause false. **Unaffected.**

**The one place where the ground moved, recorded honestly rather than waved through.** Doc 03
v2.13.0 §10.12.3's **`anon` TITLE banned-word disposition** rules `STATE_CONFIG.anon.title`
("Anonymous") COMPLIANT in v1 because "FR-131's closing sentence bans the four words where they
**describe v1 voting behaviour**" and the badge renders only for open-tier users who cannot cast a
binding vote. That premise quotes FR-131 as it stood at v2.16.3. At v2.17.0 the closing sentence
also reaches **any other v1 participation act**, and the `anon` pill's own clause-8 contexts include
**party-joining (screen 1.6)** and **endorsing (screen 2.3)** — two acts clause (e) names.

Why I still say nothing is *false*, and why I nonetheless routed it:

1. The disposition's sentences remain individually true (the badge does not describe voting
   behaviour; the user cannot vote). What has narrowed is the *sufficiency* of that basis, not the
   truth of the statements.
2. Doc 03's **re-open trigger (iii)** is worded for an amendment that bans the four words
   "**unconditionally** rather than 'to describe v1 voting behaviour'". Clause (e) widens the scope
   but keeps the ban conditional. **Trigger (iii) does not fire on its literal wording**, so the
   disposition has not lapsed and Doc 04's S5 carve-out — which lapses with it — does not lapse
   either. Reading the trigger as fired would have silently voided a carve-out the design authority
   deliberately narrowed, on my own reading of a requirement I do not own.
3. Whether "Anonymous" + "Nothing you do here is linked to you" now fails clause (e) on the join and
   endorse surfaces is a **copy ruling**, and the copy authority is **Doc 03**, made at a Doc 03
   increment with the evidence in front of it. Ruling it inside the test plan would repeat the
   **v2.7.0 mistake** — a copy ruling living somewhere other than the copy authority — which is the
   exact defect Doc 04 v1.4.0's ISS-08 fix was written to avoid. So Doc 04 **cites and routes**; it
   does not rule.
4. **It is not a shipped-copy defect today.** `PrivacyStatus` has no authenticated host surface in
   `apps/web` (the component's own header records that it is not rendered), so no citizen currently
   sees the string. `packages/ui` is nevertheless inside S5's scan scope, and Doc 03 clause 8's own
   trigger is "before any screen rendering the `anon` pill in a non-vote context ships to
   production" — at which point this becomes a v1 Gate-2 blocker.

**Routed as `OPEN-27`** (minted in this spec, §13), owner **Ravi Deshmukh** for the next Doc 03
increment, with Nadia Hassan on the scan once ruled. I will re-open §10.12.3's `anon` analysis then —
title *and* subtitle, since the subtitle decision carries its own standing condition ("if a future
honesty review … establishes that 'publicly linked' is not the reading a reasonable user applies, a
subtitle variant MUST be considered") and the 2026-09-06 ruling is such a review.

## 4. The three carried v1.4.0 Lows — all DISCHARGED

The v1.4.0 PASS (96%, 0C/0H/0M/3L) carried three pin-currency Lows marked "fix first on any future
touch". All three are one-token header edits, so all three are taken:

- **ISS-C2-01** — Doc 07 pinned v2.4.4 in the `Source:` block **and** at §1.4 → re-pinned **v2.6.0
  (Approved)** at both named locations (OP 2, OP 9).
- **ISS-C2-02** — §1.3's no-story annotation pinned Doc 05 v1.0.0/**v2.3.0 (In Review)**, the third
  and last location of cycle-1 ISS-05 → re-pinned **v2.5.0 (Approved)** (OP 8).
- **ISS-C2-03** — the Doc 09 line pinned an in-flight v1.5.0 → now states the version in force,
  **Approved v1.9.0** (OP 2).

Two further stale pins found on this touch and swept rather than left to age: **Doc 03 v2.13.0 is
Approved** (the block said In Review) and the **Doc 06** pin now carries the **v2.6.0** cut and
**UT-0889**. **No Low is carried forward.**

## 5. Verified-and-NOT-a-defect (recorded so a reviewer need not re-litigate)

- **§8 `A-02.6`** ("the four banned words appear **only negated**, never as a claim") — re-read
  against clause (e). It describes the **ballot banner** under the clause-(a) carve-out, which the
  amendment explicitly preserves. Unchanged, and not touched by the spec.
- **`OPEN-01`, `TS-ADV-02`, `TS-V1-NOTICE`, §0.6's 4 / 2 / 7 buckets, §14's reservations** — clause
  (e) adds no suite and upgrades no status. Untouched.
- **§0.1 line "Doc 02 §16 (Approved v2.16.3)"** — v2.17.0 does not touch §16; the citation names the
  version in which the cited section was approved and remains accurate. Not changed.
- **§0.2 / §0.4 / §0.6 / `OPEN-20` / the Downstream carry-back "Doc 07 v2.4.4" hits** — dated
  provenance statements ("as they exist in Doc 07 v2.4.4 §2", verified 2026-08-31), not live pins.
  The cycle-2 review named only the `Source:` and §1.4 locations; the discharge is scoped to those.
- **Doc 02 §13 tracked routing (j)** — enrolment/verification copy (H-16/H-17/H-18, FR-132) is
  expressly **outside** clause (e) and un-ruled. S5's rule 4 says so, so the widened scan is not
  used to decide a question the product-owner has reserved.

## 6. IDs touched

- **Read / cited, not modified:** `FR-131` (clauses (a)–(e)), `FR-014`, `FR-015`, `FR-082`,
  `FR-122`, `FR-123`, `FR-124`, `FR-132`, `NFR-003`, `NFR-023`, `BR-005`, `BR-009`, `DES-085`,
  `DES-093`, `DES-094` (clauses 7, 8, 9), `DES-095`, `DES-096`, `DES-098`, `DES-081`, `ADR-024`,
  `ADR-025`, `SCR-13`, `SCR-14`, `US-0134`, `UT-0759`, `UT-0869`, `UT-0887`, `UT-0888`,
  **`UT-0889`** (engineer's, Doc 06 v2.6.0 — cited as owed-and-in-progress), `TC-3481`, `TC-3534`,
  `TS-SCAFFOLD`, `TS-V1-NOTICE`, `TS-ADV-02`, `REL-LIM-18`, `H-16`…`H-19`, `CON-015`.
- **Minted (one):** **`OPEN-27`** — the `anon`-badge disposition question routed to Doc 03.
- **Discharged:** `ISS-C2-01`, `ISS-C2-02`, `ISS-C2-03` (Doc 04 v1.4.0 carried Lows).
- **Renumbered or reused: none.**

## 7. Open items leaving this session

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Apply the 14-OP spec to Doc 04 → **v1.5.0, In Review** | applier (per the anchored-spec protocol) | OPEN — this session's follow-up |
| 2 | Assign a **neutral** reviewer for Doc 04 **v1.5.0**, technical mode; run to PASS before Status returns to Approved | project-manager (Ana-Maria Petrescu) | OPEN |
| 3 | **OPEN-27** — re-examine Doc 03 §10.12.3's `anon` title **and** subtitle against FR-131 clause (e) at the next Doc 03 increment | **Ravi Deshmukh** (architect) | OPEN — owed, not gate-blocking today |
| 4 | Clause-(e) `TC` re-cut at **Doc 07 v2.7.0** / **Doc 08 v2.10.0** under US-0134; FR-131's Doc 08 Must row stays OPEN until it closes | tester (Ji-woo Park) | OPEN — owed |
| 5 | **UT-0889** green in `apps/web/test/safety-surfaces.test.tsx`, registered in Doc 06 v2.6.0 | engineer (Samuel Oyelaran) | IN PROGRESS — same session |
| 6 | Doc 02 §13 (j) — enrolment/verification copy (H-17, FR-132 §(e), UT-0870), sre consulted | product-owner (Priya Raghunathan) | OPEN — outside clause (e) by design |

## 8. Scope discipline

I stayed in lane: **design only**. No product code was written or edited; no document other than my
two `artifacts/` files was written. I did not act as a reviewer for any document and authored no
review report — Docs 01/02/06/07/08 being In Review mid-session is expected and is the
project-manager's to schedule with a neutral reviewer. The memory-index registration for both this
note and the spec was pre-arranged by the caller; I did not open or edit
`artifacts/memory-index.json`.
