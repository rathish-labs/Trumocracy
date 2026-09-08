# Architect session note — 2026-09-06T19:00 — Doc 04 v1.6.0, rework cycle 2 of 5

```
Role:        architect (Ravi Deshmukh — Principal Architect; owning role for Docs 03 and 04)
Date:        2026-09-06
Session:     Rework of docs/04-test-strategy-master-plan.md after its v1.5.0 cycle-1 technical
             review FAILED (92%; 0 Critical / 0 High / 1 Medium / 5 Low; reviewer: reviewer-qa,
             Rafael Duarte — neutral, PM-assigned).
Deliverable: artifacts/architect-2026-09-06T1900-doc04-cycle2-spec.md — an ANCHORED SPEC of
             21 operations (19 as first written, + OP 20 and OP 21 added under Revision 2)
             taking Doc 04 from v1.5.0 (In Review, FAILED) to v1.6.0 (In Review, rework
             cycle 2 of 5). Applied mechanically by the project-manager's applier; I hold
             Write but not Edit and did not touch Doc 04 directly.
Wrote:       2 files, both under artifacts/ — this note and the spec above (the spec was
             revised three times before application, see §1, §7 and §8).
Edited:      no document, no code.
```

## 1. What happened first — OP 19 was defective and is fixed

The 19-OP spec landed, but the applier **refused the whole spec**: **OP 19's `FIND` matched 0
times.** Its `FIND` had been truncated to the first ~394 characters of the §22 architect Approvals
row — it stopped after "…re-cut to the amended closing sentence." — while the actual row at
`docs/04-test-strategy-master-plan.md` **line 2407** is a single markdown table line of **2,174
characters**. An anchored `FIND` is **whole lines, start to end**; a prefix of a line is not a
match, and correctly so, because a partial-line match would silently split a table row.

**Fixed.** OP 19 is rewritten: its `FIND` is the entire line 2407, re-read from the file and
reproduced verbatim, and its `REPLACE` carries the **whole** v1.5.0 body forward into the
`_(Row history: …)_` parenthetical ahead of the existing v1.4.0 → v1.0.0 history, so not one word
of the row is dropped. **OPs 1–18 are untouched** — the applier confirmed each already matched
exactly once — and the spec's header now carries a `Revision:` line recording the correction, plus
a new "a `FIND` is always whole lines" rule in *How to apply* naming the three OPs (9, 10, 19) that
anchor on very long single-line table rows.

**The lesson, recorded because it is the transcription-discipline class this repo keeps paying
for:** when an anchor is a markdown **table row**, the unit of transcription is the *line*, not the
*sentence*. Two of the three long-row OPs (9 and 10) were transcribed whole and matched; the third
was abbreviated because its opening sentence looked sufficient. It was not. **§8 records the same
class recurring at OP 20 in a second form — a sentence that wraps across lines.**

## 2. The operations, by finding

| Finding | Sev | OPs | What the fix does |
|---|---|---|---|
| **ISS-01** | **Medium** | 5, 11, 12, 13, 14, 15, 17 | Reconciles §14's `TC`-range reservation register against **Doc 07 v2.6.0 §2**, plus its three echoes |
| **ISS-02** | Low | 4, 9, 17 | Narrows `OPEN-20`'s basis to the surviving `TS-PROPOSALS` half; the item stays **open** |
| **ISS-03** | Low | 3, 7, 16 | `UT-0889` re-stated from "owed-and-in-progress, not green" to **landed and green** |
| **ISS-04** | Low | 8, 10 | Disposes of Doc 03 re-open trigger **(iv)** by name, in both places |
| **ISS-05** | Low | 6 | Scopes S4's carve-out count so it cannot be read against S5's |
| **ISS-06** | Low | 18 | Re-wraps §1.4's ragged mid-sentence breaks; no word changed by the re-wrap |
| version apparatus | — | 1, 2, 19 | Version 1.6.0 · cycle-2 `Status:` · v1.6.0 changelog entry · §22 Approvals row |
| **pin currency** | — | 20, 21 (+ REPLACE text in 1, 2, 3, 7, 8, 16, 18, 19) | Revision 2 — Doc 02 → **v2.17.1 Approved**, Doc 06 → **v2.7.0 In Review** (see §7) |

### ISS-01 (Medium) — the register drift, and why it is v1.5.0's defect

`§14`'s stated purpose is "so numbering does not collide". It still reserved **TC-3564–TC-3699**
for the six unminted `TS-V1-*` suites, annotated "none minted", after **Doc 07 v2.5.0** had minted
**TC-3564..TC-3569** into three *other* suites — verified by me against Doc 07 v2.6.0 §2 rows and
its §4.3 / §5 / §5.3 headings:

- **TC-3564–TC-3567** → `TS-ADV-01…16`, mapping `UT-0887` (the rendered, negation-aware FR-131(a)
  banner); Doc 07 reads "TC-2600–TC-2752, TC-3564–TC-3567" — 47 cases.
- **TC-3568** → `TS-SCAFFOLD`, mapping `UT-0759` (backing-aware `ver` title, four paths); Doc 07
  reads "TC-3470–TC-3488, TC-3568" — 20 cases.
- **TC-3569** → `TS-ABSENCE`, mapping `UT-0888` (the `MACI_VOTING` flag description); Doc 07 reads
  "TC-1600–TC-1614, TC-3569" — 16 cases.

Four rows re-cut to record the **actual** allocation (OPs 11–14) and the `TS-V1-*` reservation
narrowed to the band that is genuinely free, **TC-3570–TC-3699**; three echoes corrected (§0.4 —
OP 5; the v1.1.0 changelog entry — OP 15; Downstream — OP 17), each annotated rather than rewritten.
The band's floor is described as "**Doc 07 v2.7.0 in progress**" because the tester is minting the
clause-(e) rows in this same session — **I do not pin a number I cannot see**. §14 also gains a
standing instruction: *any future version that advances the Doc 07 pin MUST re-read this table
against Doc 07 §2 in the same touch.*

**I own this defect and recorded it as mine, not as inherited debt.** The drift pre-dates v1.5.0,
but v1.5.0 is the version that advanced the Doc 07 pin **v2.4.4 → v2.6.0** and published "the three
v1.4.0 Lows are DISCHARGED… No Low is carried forward" — while never re-reading the body statements
that depend on Doc 07's *content*. **A pin advanced without its dependent statements re-read is the
same defect class in a new costume.** It is the register's **second** drift into fiction; the first
closed at v1.1.0 as a **High** (`OPEN-26`(a)), and this closure follows that remedy exactly: record
the actual allocation, not the intended one.

**This document mints no `TC`.** It records ids the tester owns and narrows a reservation it owns
itself.

### ISS-02 (Low) — OPEN-20 narrowed, not closed

At Doc 07 v2.6.0 the `TS-SCAFFOLD` half of the range disagreement is **resolved** (§5.3's heading
now reads "TC-3470–TC-3488, TC-3568", matching §2). Only the **`TS-PROPOSALS`** half survives — §2's
TC-3542–TC-3563 against §5.6's heading TC-3542–TC-3561, both verified in Doc 07 at HEAD. The item is
annotated at both locations (§0.4's tester note, the §13 row) and **stays open and gate-blocking**,
per the reviewer's explicit instruction. §13's Definition-A Gate-2 blocker bullet is therefore
**correct as it stands and deliberately not edited** — recorded in the spec commentary so cycle 2
need not re-check it.

### ISS-03 (Low) — UT-0889 is green, on evidence I did not have

v1.5.0 called it "owed-and-in-progress, not green", which was true when written earlier in the same
session. The cycle-1 reviewer **executed the file independently — 25/25 pass, 2026-09-06** — and it
was **registered in Doc 06 at v2.6.0** §3/§7 and is **unchanged at v2.7.0**. All three mentions
re-pinned. The discipline that produced the under-claim is unchanged and is stated in the
annotations: **this plan upgrades no test status it has not seen pass**; here the evidence is a
named, dated, independently executed run.

### ISS-04 (Low) — the lapse analysis is now complete

v1.5.0 disposed of Doc 03 §10.12.3's re-open trigger **(iii)** correctly (clause (e) is scoped, not
unconditional) but `OPEN-27`'s body simultaneously argued the 2026-09-06 ruling "is such a review"
for the `anon` subtitle's standing condition — and Doc 03 states in terms that "**Trigger (iv) is
the same standing condition the `anon` subtitle decision already carries**". The document therefore
held the materials for the opposite conclusion without disposing of it. Now disposed of on trigger
(iv)'s own evidence standard: (iv) fires where research or an honesty review "**shows**" open-tier
members read the badge as a claim about how their vote is handled; the 2026-09-06 ruling examined
**landing-page copy** (`home.steps[1]`, `home.promises[0]`) and the FR-082 supporter strings and
took **no evidence about the badge**. It *raises* the question; it does not *show* the reading.
Triggers (i) and (ii) are untouched. **None of the four has fired**, in §0.5 S5 and in `OPEN-27`
alike. The conclusion is unchanged; only its completeness was defective.

### ISS-05 / ISS-06 (Low)

S4's "one carve-out" and S5's "two carve-outs" are both correct in their own scope; S4's sentence now
names its scope before its count and points at S5's second exception. **Neither count changed.**
§1.4's ragged breaks — an authoring defect in *my* v1.5.0 spec text, not an application defect — are
re-flowed; **no word, pin or citation is added or removed by the re-wrap** (two version numbers in
the same paragraph advance under Revision 2, and the OP header names that).

## 3. Not re-opened

The review recorded ten items as verified and instructed that the clause-(e) substance MUST NOT be
re-opened. Untouched by the spec: §0.5 S4's widened criterion and its **(a)–(d)** notice range; the
five refusals of a fifth notice clause; S5's four rules and the claims test; the verification path
(UT-0889 / UT-0869 / inspection); the pin **reasoning**; `OPEN-27`'s mint and its route-don't-rule
disposition — which the reviewer called "the strongest judgement in the version"; `OPEN-01`; §0.6's
4 / 2 / 7 buckets; every test status; `A-02.6`; §11.2. Pin **values** move under Revision 2; pin
**reasoning** does not.

## 4. IDs touched

- **Recorded, not minted:** `TC-3564`, `TC-3565`, `TC-3566`, `TC-3567`, `TC-3568`, `TC-3569` — all
  six are **Doc 07's mints** (v2.5.0), written into Doc 04's register where they actually live.
- **Reservation narrowed (Doc 04 owns it):** `TC-3564–TC-3699` → **`TC-3570–TC-3699`**.
- **Annotated:** `OPEN-20` (scope narrowed, stays open), `OPEN-27` (lapse analysis completed),
  `OPEN-18`, `OPEN-26`(a) cited as precedent.
- **Cited:** `UT-0759`, `UT-0869`, `UT-0887`, `UT-0888`, **`UT-0889`** (status upgraded on the
  reviewer's executed evidence), `FR-131`(a)–(e), `FR-082`, `FR-122`, `FR-123`, `NFR-023`,
  `DES-094`, `DES-098`, `TS-ADV-01…16`, `TS-SCAFFOLD`, `TS-ABSENCE`, `TS-PROPOSALS`, `TS-V1-*`.
- **Minted, renumbered or reused: none.** `OPEN-27` remains the high-water mark. No `TC`, `UT` or
  `US` is minted by this document, and no test status is upgraded beyond the one the reviewer ran.

## 5. Open items leaving this session

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Apply the **corrected, re-pinned** 21-OP spec → Doc 04 **v1.6.0, In Review** | applier | OPEN — immediate |
| 2 | Cycle-2 technical review of Doc 04 v1.6.0 by a neutral reviewer (cap is 5 cycles; this is 2) | project-manager (Ana-Maria Petrescu) | OPEN |
| 3 | `OPEN-20` — `TS-PROPOSALS` §2-vs-§5.6 heading disagreement in Doc 07 | tester (Ji-woo Park) | OPEN — v1 Gate-2 blocker |
| 4 | `OPEN-27` — re-examine Doc 03 §10.12.3's `anon` title **and** subtitle against FR-131 clause (e) | **Ravi Deshmukh** | OPEN — owed, not blocking today |
| 5 | Clause-(e) `TC` rows at **Doc 07 v2.7.0** / **Doc 08 v2.10.0** under US-0134, from **TC-3570**, tracing to **Doc 02 v2.17.1 §8 Scenarios 8 and 9** | tester (Ji-woo Park) | OPEN — in progress |
| 6 | Standing: any version that advances the Doc 07 pin re-reads §14 against Doc 07 §2 in the same touch | architect | ADOPTED — written into §14 |

## 6. Scope discipline

Design only. No product code written or edited; no document other than my two `artifacts/` files
written. I authored **no review report** and did not self-appoint as a reviewer for any document —
other documents being In Review mid-session is expected and is the project-manager's to schedule
with a neutral reviewer. Both artifact paths were pre-registered by the coordinator; I did not open
or edit `artifacts/memory-index.json`.

## 7. Re-pinned 2026-09-06

**Re-pinned 2026-09-06 (spec Revision 2, on the project-manager's direction, before application):
Doc 02 → v2.17.1 (Approved; clause (e) unchanged, + §8 Scenarios 8 and 9) and Doc 06 → v2.7.0
(In Review; last Approved v2.5.1; UT-0889 registered at v2.6.0 and unchanged) across the spec —
REPLACE text only in OPs 1, 2, 3, 7, 8, 16, 18 and 19, plus two new separately-anchored operations,
OP 20 (the `Source:` Doc 02 pin) and OP 21 (§1.4's status roll-call), which no existing operation
covered; no `FIND` was altered and Doc 07 v2.6.0 / Doc 08 v2.9.0 remain Approved.**

Recorded rather than done quietly, because it is the cycle-1 Medium's own lesson applied to this
version's header: submitting a rework whose pins were already stale would have been the same defect
in its next costume. Clause (e)'s **origin** (v2.17.0) and its **currency** (v2.17.1) are kept as
distinct statements throughout — collapsing them would trade one inaccuracy for another.

## 8. OP 20 rewritten 2026-09-06

**OP 20 rewritten 2026-09-06 (spec Revision 3) after it matched 0 times: its FIND had "…(d) and (e).**" where the file reads "…(d) and (e)**," — period moved inside the bold, trailing comma dropped — and that comma is load-bearing because the sentence wraps onto the next line, so the anchor now runs from the `Source:` label through the end of the retained v1.5.0 annotation, re-emits the sentence whole and unaltered, and places the new v1.6.0 annotation after it rather than inside it; no other operation was touched.**
