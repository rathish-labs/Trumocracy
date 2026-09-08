# Anchored spec — Doc 02 v2.17.0 → v2.17.1 (review-loop rework, cycle 2 of 5)

```
Author:        product-owner (Priya Raghunathan) — the owning role for Doc 02
Date:          2026-09-06T20:30
Target file:   docs/02-requirements-srs.md   (ONE file — no other file is touched)
Applier:       project-manager (mechanical FIND/REPLACE; four-backtick fences)
Against:       artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md
               (business, cycle 1 — FAIL 86%, 0 Critical / 0 High / 3 Medium / 7 Low;
               reviewer: reviewer-qa (Rafael Duarte), neutral, PM-assigned)
Result:        docs/02-requirements-srs.md v2.17.1, Status: In Review, cycle 2 of 5.
               PATCH bump per the reviewer's routing (§1): no normative meaning changes —
               the fixes complete and correctly frame a ruling already made.
Ops:           12
Invariants:    NO new BR/FR/NFR minted. NO ID reused or renumbered. Must count unchanged
               (114). No normative text deleted — annotate-don't-delete is honoured
               throughout. Docs 01, 05, 13 and all product code are UNTOUCHED.
```

## Coverage of the review

| Issue | Severity | Op | Disposition |
|---|---|---|---|
| `ISS-01` no §8 Gherkin scenario for clause (e) | **Medium** | **OP 6, OP 7** | Fixed — block header de-scoped from the ballot; **Scenario 8** added |
| `ISS-02` §4.45 heading + rationale still ballot-scoped | **Medium** | **OP 3, OP 4** | Fixed — both widened; the existing ballot rationale is kept, not deleted (it remains correct for clauses (a)–(d)) |
| `ISS-03` clause (e)'s operative prohibition malformed under RFC 2119 | **Medium** | **OP 5 (C1, C2)** | Fixed — positive subject + `MUST NOT`; `grade-8` casing aligned to NFR-023 |
| `ISS-04` "presented for approver confirmation" is stale | Low | **OP 1, OP 2, OP 5 (C5, C6), OP 9** | Fixed at all five live sites, including the durable FR-131 Source annotation the reviewer flagged as the priority |
| `ISS-05` safe-harbour in tension with the reader test | Low | **OP 5 (C3)** | Fixed — safe-harbour subordinated to the test, with an explicit precedence sentence |
| `ISS-06` "are governed by" overstates FR-132 / §16.4 reach | Low | **OP 5 (C4)** | Fixed — softened to "addressed by", with the §13 (j) open question named |
| `ISS-07` no §12 session-scope entry | Low | **OP 8** | Fixed — entries for v2.17.0 **and** v2.17.1 added |
| `ISS-08` §16.3 FR-131 row under-describes the requirement | Low | **OP 11** | Fixed |
| `ISS-09` unqualified "§2.5" cross-reference in §13 (j) | Low | **OP 10** | Fixed — qualified to Doc 06 §2.5 |
| `ISS-10` §16.3 FR-132 row "clauses (d)/(e)" now ambiguous | Low | **OP 12** | Fixed — §16.3 is being touched by OP 11, so the reviewer's condition is met |
| `ISS-11` (§4.6 FR-064), `ISS-12` (v2.16.0 changelog echo), `ISS-13` (§13 (h) wording) | Low ×3 | — | **Carried again, deliberately.** v2.17.1 does not touch FR-064, the historical changelog narration, or §13 (h); the reviewer's own routing is "fold into the next version that touches them". Disclosed in the new `Status:` block (OP 1). |

Every Medium is fixed; the four Lows the reviewer routed to "the next version" are fixed because
this version touches their sections; the three genuinely unrelated Lows are carried and disclosed.

## Applier safety note for the long-line ops (OP 5, OP 10, OP 11, OP 12)

Four ops replace a **single very long line** in full, because the format requires a FIND to start at
a line start and end at a line end and these lines are single table rows. For each of them the
`REPLACE WITH` block differs from `FIND` **only at the numbered change points named in the
commentary above the op** (`C1`, `C2`, …). **Before applying, diff the two blocks and confirm the
only differences are those points.** If any other difference appears, stop and return the op to the
product-owner — do not apply it. A mistyped `FIND` fails loudly (no match); an unintended deviation
in `REPLACE` would not, which is why this check exists.

---

Commentary for OP 1: the `Status:` field is rewritten for cycle 2. It records the loop position, the
cycle-1 verdict, what each fix closed, the three carried Lows from v2.16.3 (re-verified present by
the reviewer at `ISS-11`/`ISS-12`/`ISS-13`), and — per `ISS-04` — states the approver confirmation
as recorded fact rather than as pending.

### OP 1 — docs/02-requirements-srs.md — header: version 2.17.1 and the cycle-2 Status field

FIND:
````
Version:       2.17.0
Status:        In Review — v2.17.0 amends FR-131 (§4.45): a new clause (e) (honesty-of-claim across
               every v1 participation act) and a widened closing sentence, plus a §13 tracked-routing
               block (j). Recorded by the product-owner ruling of 2026-09-06
               (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md), which is itself
               presented for approver confirmation. This version re-enters the document-review loop
               (business mode, neutral reviewer assigned by the project-manager) before returning
               to Approved; the product-owner does not fast-track its own amendment.
               Carried from v2.16.3 (Approved — 02-requirements-srs-v2.16.3-business-cycle4.md,
               PASS 96%, 0C/0H/0M/3L): three Lows, all non-blocking and all recommended by the
               reviewer for cleanup on the next version that touches §13 or FR-064 rather than a
               dedicated rework cycle: ISS-01 (§4.6 FR-064's "v2 (deferred)" clause lacks the
               FR-023/FR-068 cross-reference, open since v2.15.0); ISS-02 (the v2.16.0 changelog
               entry still carries an unquoted echo of the corrected mis-citation — confined to
               historical narration, not a live status field, which is why it is a Low here where
               the same defect class was a High in Doc 07/08); ISS-03 (a wording nit in §13 (h)).
               v2.17.0 touches §13 but adds a new block rather than editing (h), and does not touch
               FR-064; all three Lows are therefore carried again and remain open.
````
REPLACE WITH:
````
Version:       2.17.1
Status:        In Review — v2.17.1, review-loop rework **cycle 2 of 5** against
               artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (business,
               cycle 1 — **FAIL 86%, 0 Critical / 0 High / 3 Medium / 7 Low**; reviewer:
               reviewer-qa (Rafael Duarte), neutral, PM-assigned). The reviewer verified every
               factual claim in the v2.17.0 delta against primary sources and found no
               substantive error; what failed was the amendment's **cascade inside this
               document**. A PATCH bump is correct per the reviewer's routing: **no normative
               meaning changes** — v2.17.1 completes and correctly frames a ruling already made.
               **Fixed, by issue id:** ISS-01 (Medium) — §8 FR-131 Scenario 8 added for clause (e)
               and the block's header comment de-scoped from the ballot; ISS-02 (Medium) — §4.45's
               heading and rationale widened from ballot-only to the participation-act posture,
               with the existing ballot rationale retained because it remains correct for clauses
               (a)–(d); ISS-03 (Medium) — clause (e)'s operative prohibition recast under RFC 2119
               with a positive subject and MUST NOT (the negated-subject MUST was literally null),
               and "grade-8" aligned to NFR-023's casing; ISS-04 (Low) — the approver confirmation
               is now stated as recorded fact at all five live sites; ISS-05 (Low) — the clause (e)
               safe-harbour is subordinated to the reader test, which is stated to govern; ISS-06
               (Low) — "governed by" softened to "addressed by" with the §13 (j) open question
               named; ISS-07 (Low) — §12 session-scope entries added for v2.17.0 and v2.17.1;
               ISS-08 and ISS-10 (Low) — the §16.3 FR-131 and FR-132 rows corrected, §16.3 being
               touched by this version; ISS-09 (Low) — the bare "§2.5" cross-reference in §13 (j)
               qualified to Doc 06 §2.5.
               **The ruling behind clause (e) is approver-CONFIRMED:** Rathish Kumar, 2026-09-06,
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 (decisions 1–3).
               v2.17.0's "presented for approver confirmation" framing was true when authored at
               10:00 and is superseded by that record.
               Carried from v2.16.3 (Approved — 02-requirements-srs-v2.16.3-business-cycle4.md,
               PASS 96%, 0C/0H/0M/3L): three Lows, all non-blocking, all re-verified still present
               by the v2.17.0 reviewer (there ISS-11 / ISS-12 / ISS-13), and all recommended for
               cleanup on the next version that touches their sections rather than a dedicated
               rework cycle: ISS-01 (§4.6 FR-064's "v2 (deferred)" clause lacks the FR-023/FR-068
               cross-reference, open since v2.15.0); ISS-02 (the v2.16.0 changelog entry still
               carries an unquoted echo of the corrected mis-citation — confined to historical
               narration, not a live status field, which is why it is a Low here where the same
               defect class was a High in Doc 07/08); ISS-03 (a wording nit in §13 (h)).
               v2.17.1 touches §13 but edits only block (j), does not touch FR-064, and does not
               rewrite historical changelog narration; all three Lows are therefore carried again
               and remain open.
````

---

Commentary for OP 2: a `v2.17.1` entry is added to the `Change:` field and the v2.17.0 entry is
retained in full immediately below it. **Note for the applier:** line 1 of the FIND begins with the
field label `Change:` and is re-emitted in the REPLACE with the label moved to the new v2.17.1
entry, so the v2.17.0 entry's first line changes only its leading label-to-indent whitespace. That
is intentional and is the one whitespace-only change in this spec. `ISS-04`'s `Change:`-field
occurrence is fixed on the last line of this op.

### OP 2 — docs/02-requirements-srs.md — header: add the v2.17.1 change entry, fix ISS-04

FIND:
````
Change:        v2.17.0 (2026-09-06) — **FR-131 (§4.45) amended: the honesty duty is extended from
               "v1 voting behaviour" to every v1 participation act.** Recorded by the product-owner
               ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md,
               Ruling B), presented for approver confirmation. **Why:** the 2026-09-05 FR-131 sweep
````
REPLACE WITH:
````
Change:        v2.17.1 (2026-09-06) — **Review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (FAIL 86%;
               0C / 0H / 3M / 7L). No normative meaning changes — a PATCH bump that completes
               v2.17.0's cascade inside this document. Adds §8 FR-131 **Scenario 8** (clause (e))
               and de-scopes that block's header comment from the ballot; widens §4.45's heading
               and rationale to the participation-act posture without deleting the ballot
               rationale; recasts clause (e)'s operative prohibition under RFC 2119 ("public-facing
               strings … MUST NOT assert", replacing a negated-subject MUST that obliged nothing);
               subordinates clause (e)'s safe-harbour to its reader test; softens "governed by" to
               "addressed by" for enrolment claims and names §13 (j) as the open question; adds §12
               session-scope entries for v2.17.0 and v2.17.1; corrects the §16.3 FR-131 and FR-132
               rows; qualifies §13 (j)'s bare "§2.5" to **Doc 06 §2.5**; and records the approver's
               confirmation of the underlying ruling at every live site. No new BR/FR/NFR minted;
               no ID reused or renumbered; Must count unchanged. Spec
               artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md.
               v2.17.0 (2026-09-06) — **FR-131 (§4.45) amended: the honesty duty is extended from
               "v1 voting behaviour" to every v1 participation act.** Recorded by the product-owner
               ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md,
               Ruling B), **CONFIRMED by the approver (Rathish Kumar) 2026-09-06 —
               DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11**. **Why:** the 2026-09-05 FR-131 sweep
````

---

Commentary for OP 3 (`ISS-02`, site 1): the section heading is widened. `DES-098` stays in the
heading because the design element is unchanged; "voting authentication posture" becomes the
participation-act posture, which is what §4.45 now houses.

### OP 3 — docs/02-requirements-srs.md — §4.45 heading (ISS-02, site 1)

FIND:
````
### 4.45 v1 honesty notice — voting authentication posture (DES-098)
````
REPLACE WITH:
````
### 4.45 v1 honesty notice and honesty-of-claim duty — participation-act posture (DES-098)
````

---

Commentary for OP 4 (`ISS-02`, site 2): the existing ballot rationale is re-emitted **unchanged** —
it remains correct for clauses (a)–(d) and the reviewer explicitly asked that it not be deleted. One
sentence is appended recording the v2.17.0 widening, so §4.45's scope statement can no longer be
read literally as ballot-only. That literal reading is the mechanism that shipped two false strings.

### OP 4 — docs/02-requirements-srs.md — §4.45 rationale (ISS-02, site 2)

FIND:
````
> **Rationale:** The Definition-A (v1) deployment uses conventional database-backed
> authentication for ballot casting. The Definition-B (v2) private receipt-free ballot
> (MACI, FR-030, FR-031, NFR-003) is deferred. A member voting in v1 cannot be assumed
> to know this; the UI MUST state it plainly before they vote. This requirement follows
> the disclosed-limitation pattern established in Doc 03 §13 ("Public tallies in Phase 1")
> and DES-063 (the v2 coercion-safe confirmation surface is its successor). DES-098 was
> minted by the architect in Doc 03 v2.3.0 §10.13.6 and awaited its backing FR — that FR
> is FR-131.
````
REPLACE WITH:
````
> **Rationale:** The Definition-A (v1) deployment uses conventional database-backed
> authentication for ballot casting. The Definition-B (v2) private receipt-free ballot
> (MACI, FR-030, FR-031, NFR-003) is deferred. A member voting in v1 cannot be assumed
> to know this; the UI MUST state it plainly before they vote. This requirement follows
> the disclosed-limitation pattern established in Doc 03 §13 ("Public tallies in Phase 1")
> and DES-063 (the v2 coercion-safe confirmation surface is its successor). DES-098 was
> minted by the architect in Doc 03 v2.3.0 §10.13.6 and awaited its backing FR — that FR
> is FR-131.
>
> **Scope, from v2.17.0 (do not read this section as ballot-only).** The paragraph above
> states the origin of FR-131 and remains correct for clauses (a)–(d), which govern the
> pre-ballot and open-tier notices. From v2.17.0 FR-131 **also** governs the honesty of
> **claims** about **any** v1 participation act — casting a vote, endorsing or backing a
> petition, joining or belonging to a party, or supporting a party — across every
> public-facing surface in every language, and is **not confined to the ballot**: see
> clause (e) and §8 FR-131 Scenario 8. This widening exists because a ballot-scoped scope
> statement, read literally, is precisely what allowed two false landing strings to ship on
> 2026-09-05 (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §1, §6); a reader who stops at the
> paragraph above would repeat that reasoning.
````

---

Commentary for OP 5: this replaces the single FR-131 table row (one very long line) in full. **The
REPLACE differs from the FIND at exactly six points — diff before applying:**
- **C1** (`ISS-03`) — "no public-facing string, screen, README or other material — **in any
  language** — MUST assert" → "public-facing strings, screens, READMEs and other materials — **in
  any language** — MUST NOT assert". A negated subject with MUST obliges nothing; RFC 2119
  prohibition takes a positive subject with MUST NOT.
- **C2** (`ISS-03`, casing) — "Grade-8 reading level" → "grade-8 reading level", matching NFR-023.
- **C3** (`ISS-05`) — the safe-harbour gains "**and makes no contrary claim elsewhere in the same
  string**" and a closing sentence stating that the reader test governs if the two ever disagree.
- **C4** (`ISS-06`) — "are governed by FR-132 and by §16.4 … and are expressly outside it" → "are
  addressed by FR-132 §(d) and by §16.4 … and are expressly outside this clause; whether those
  provisions fully reach the enrolment landing copy is the open question tracked at §13 (j)".
- **C5** (`ISS-04`, clause-(e) label) — "product-owner ruling 2026-09-06, presented for approver
  confirmation" → "product-owner ruling 2026-09-06, CONFIRMED by the approver 2026-09-06".
- **C6** (`ISS-04` + `ISS-01`, Source annotation) — the same confirmation fix, and "Clause (e) TC
  owed …" is updated to name the acceptance criterion that now exists (§8 Scenario 8) while keeping
  the routed UT guard.

Nothing else in the row changes: clauses (a)–(d), the FAILS test, the public-by-design rule, the
widened closing sentence, the quoted SUPERSEDED wording, the traces (`BR-005, BR-009`), MoSCoW
(`Must`), the owner (`Nadia Hassan`) and Verify-by (`T, I`) are all re-emitted verbatim.

### OP 5 — docs/02-requirements-srs.md — §4.45 FR-131 row: ISS-03, ISS-05, ISS-06, ISS-04, ISS-01 anchor

FIND:
````
| FR-131 | Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice (designed as DES-098) before the ballot is confirmed. The notice MUST state: **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot — where the platform is technically unable to see vote direction or party membership — is available when the platform upgrades to the Definition-B (v2) privacy layer. **(d) Open-tier non-counting disclosure (v2.12.0, Rathish, 2026-08-24):** in any v1 deployment using the FR-132/FR-123 counting-gate model, wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action — contributing to official party strength, casting a binding vote, or standing as a candidate — the UI MUST display a plain-language notice stating: (i) their current participation is open-tier only; (ii) that specific action requires government-ID verification (FR-123); (iii) what specifically does not count for them (official strength contribution, binding vote, candidacy); and (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)). This notice MUST be shown before the action is refused and MUST be non-dismissable. The notice MUST be: visible before confirmation; non-dismissable (the voter MUST acknowledge the notice to proceed); WCAG 2.2 AA compliant (DES-081); screen-reader accessible. The notice MUST appear on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation). **(e) Honesty-of-claim across every v1 participation act (v2.17.0; product-owner ruling 2026-09-06, presented for approver confirmation; DECISIONS-2026-09-06-ENDORSEMENT-COPY.md):** the disclosure duty in this requirement is a duty about **claims**, not about a list of words, and it is **not confined to the ballot**. In a Definition-A (v1) deployment, no public-facing string, screen, README or other material — **in any language** — MUST assert that a **participation act** is unknowable to Trumocracy, where a *participation act* means casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party. **The test is what an ordinary reader at the Grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears:** a claim FAILS this clause if such a reader would conclude from it that Trumocracy itself cannot link them to the act, because under conventional authentication (ADR-024, ADR-025) the v1 operator database CAN — and for endorsement necessarily does, since FR-014 ("at most one endorsement per person per petition") and FR-015 (withdrawing one's own endorsement) cannot be satisfied in v1 without that link. Where a v1 participation act is additionally **public by design** — petition endorsement is (Doc 14 §2.2: "a public act, on purpose"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag that is OFF in every v1 deployment) — the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden. Copy that states what the platform does **not publish**, and separately states what the platform's **own records can see**, SATISFIES this clause; the approved pattern is `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869. This clause governs **participation acts only**: claims about personhood enrolment and identity verification are governed by FR-132 and by §16.4 H-16/H-17/H-18 and are expressly outside it (see §13 tracked routing (j)). The v1 product — its UI, README, and all public-facing materials, in every language — MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour **or any other v1 participation act as defined in clause (e)**, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees; where clause (a) mandates those words, they MUST appear only in the negated form clause (a) requires. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-V2-SPLIT.md; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (clause (d) added — open-tier non-counting disclosure obligation). **Clause (e) and the widened closing sentence added at v2.17.0** by the product-owner ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md, Ruling B), presented for approver confirmation; the class had by then been litigated twice string-by-string (party membership, 2026-09-05, UT-0869; petition endorsement, 2026-09-06) and clause (e) exists so it need not be litigated a third time. **SUPERSEDED closing-sentence wording, retained for the record, not deleted:** "The v1 product — its UI, README, and all public-facing materials — MUST NOT use the words 'private', 'anonymous', 'receipt-free', or 'secure' to describe v1 voting behaviour, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees." Clause (e) does not weaken clause (a): the mandated "NOT anonymous / NOT receipt-free / NOT coercion-resistant" text and its UT-0887 negation-aware guard are preserved by the carve-out. Follows the disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure; DES-063 (v2 coercion-safe confirmation surface is the v2 successor to DES-098). DES-098 minted; US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129. Clause (e) TC owed: a UT-0869-pattern guard on the landing copy is routed to the engineer (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4, R-3); the clause is otherwise verified by inspection (I).)_ | BR-005, BR-009 | Must | Nadia Hassan | T, I |
````
REPLACE WITH:
````
| FR-131 | Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice (designed as DES-098) before the ballot is confirmed. The notice MUST state: **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot — where the platform is technically unable to see vote direction or party membership — is available when the platform upgrades to the Definition-B (v2) privacy layer. **(d) Open-tier non-counting disclosure (v2.12.0, Rathish, 2026-08-24):** in any v1 deployment using the FR-132/FR-123 counting-gate model, wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action — contributing to official party strength, casting a binding vote, or standing as a candidate — the UI MUST display a plain-language notice stating: (i) their current participation is open-tier only; (ii) that specific action requires government-ID verification (FR-123); (iii) what specifically does not count for them (official strength contribution, binding vote, candidacy); and (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)). This notice MUST be shown before the action is refused and MUST be non-dismissable. The notice MUST be: visible before confirmation; non-dismissable (the voter MUST acknowledge the notice to proceed); WCAG 2.2 AA compliant (DES-081); screen-reader accessible. The notice MUST appear on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation). **(e) Honesty-of-claim across every v1 participation act (v2.17.0; product-owner ruling 2026-09-06, CONFIRMED by the approver (Rathish Kumar) 2026-09-06; DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11):** the disclosure duty in this requirement is a duty about **claims**, not about a list of words, and it is **not confined to the ballot**. In a Definition-A (v1) deployment, public-facing strings, screens, READMEs and other materials — **in any language** — MUST NOT assert that a **participation act** is unknowable to Trumocracy, where a *participation act* means casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party. **The test is what an ordinary reader at the grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears:** a claim FAILS this clause if such a reader would conclude from it that Trumocracy itself cannot link them to the act, because under conventional authentication (ADR-024, ADR-025) the v1 operator database CAN — and for endorsement necessarily does, since FR-014 ("at most one endorsement per person per petition") and FR-015 (withdrawing one's own endorsement) cannot be satisfied in v1 without that link. Where a v1 participation act is additionally **public by design** — petition endorsement is (Doc 14 §2.2: "a public act, on purpose"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag that is OFF in every v1 deployment) — the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden. Copy that states what the platform does **not publish**, and separately states what the platform's **own records can see**, **and makes no contrary claim elsewhere in the same string**, SATISFIES this clause; the approved pattern is `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869. **Where the safe-harbour and the reader test above appear to disagree, the reader test governs.** This clause governs **participation acts only**: claims about personhood enrolment and identity verification are addressed by FR-132 §(d) and by §16.4 H-16/H-17/H-18 and are expressly outside this clause; whether those provisions fully reach the enrolment landing copy is the open question tracked at §13 tracked routing (j). The v1 product — its UI, README, and all public-facing materials, in every language — MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour **or any other v1 participation act as defined in clause (e)**, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees; where clause (a) mandates those words, they MUST appear only in the negated form clause (a) requires. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-V2-SPLIT.md; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (clause (d) added — open-tier non-counting disclosure obligation). **Clause (e) and the widened closing sentence added at v2.17.0** by the product-owner ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md, Ruling B), **CONFIRMED by the approver (Rathish Kumar) on 2026-09-06 — DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11**; the class had by then been litigated twice string-by-string (party membership, 2026-09-05, UT-0869; petition endorsement, 2026-09-06) and clause (e) exists so it need not be litigated a third time. **SUPERSEDED closing-sentence wording, retained for the record, not deleted:** "The v1 product — its UI, README, and all public-facing materials — MUST NOT use the words 'private', 'anonymous', 'receipt-free', or 'secure' to describe v1 voting behaviour, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees." Clause (e) does not weaken clause (a): the mandated "NOT anonymous / NOT receipt-free / NOT coercion-resistant" text and its UT-0887 negation-aware guard are preserved by the carve-out. Follows the disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure; DES-063 (v2 coercion-safe confirmation surface is the v2 successor to DES-098). DES-098 minted; US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129. **Clause (e) acceptance criterion: §8 FR-131 Scenario 8 (added at v2.17.1 per the cycle-1 review, ISS-01).** Clause (e) TC still owed: a UT-0869-pattern guard on the landing copy is routed to the engineer (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4, R-3); until that TC lands the clause is additionally verified by inspection (I).)_ | BR-005, BR-009 | Must | Nadia Hassan | T, I |
````

---

Commentary for OP 6 (`ISS-01`, part 1): the Gherkin block's header comment is de-scoped from the
ballot. The `Design:` line is re-emitted unchanged.

### OP 6 — docs/02-requirements-srs.md — §8 FR-131 block header comment (ISS-01, part 1)

FIND:
````
# FR-131 — v1 honesty notice: UI MUST state voting is NOT anonymous/receipt-free/coercion-resistant before ballot confirmation
# Design: DES-098 (Doc 03 §10.13.6). Follows disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure.
````
REPLACE WITH:
````
# FR-131 — v1 honesty notice AND honesty-of-claim duty. Clauses (a)-(c): UI MUST state voting is NOT anonymous/receipt-free/coercion-resistant before ballot confirmation. Clause (d): open-tier non-counting disclosure. Clause (e), from v2.17.0: honesty of claims about EVERY v1 participation act, on every public-facing surface, in every language — not confined to the ballot.
# Design: DES-098 (Doc 03 §10.13.6). Follows disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure.
````

---

Commentary for OP 7 (`ISS-01`, part 2): Scenario 8 is appended after Scenario 5 and before the
block's closing fence. It is derived from what clause (e) already names as the approved pattern
(`parties.joinPrivate` / UT-0869) so the tester has something executable to trace, and it encodes
all three limbs of the clause: the reader test, the public-by-design rule, and the safe-harbour as
now subordinated by OP 5. The FIND includes Scenario 5's non-dismissable line, which is unique to
that scenario — Scenario 7 of the FR-132 block ends with two identical lines, so the shorter anchor
would not be unique.

### OP 7 — docs/02-requirements-srs.md — §8: add FR-131 Scenario 8 for clause (e) (ISS-01, part 2)

FIND:
````
And the notice is non-dismissable: the participant cannot proceed with the counting action without the notice being presented
And the counting action is refused
And the participant's account and all open-tier access are unaffected by the refusal of the counting action
```
````
REPLACE WITH:
````
And the notice is non-dismissable: the participant cannot proceed with the counting action without the notice being presented
And the counting action is refused
And the participant's account and all open-tier access are unaffected by the refusal of the counting action

# Scenario 8: FR-131 clause (e) — honesty of claims about any v1 participation act (v2.17.1, cycle-1 ISS-01)
Given a Definition-A (v1) deployment of Trumocracy
And any public-facing string, screen, README or other material, in any language, that describes a participation act — casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party
When an ordinary reader at the grade-8 reading level (NFR-023) reads it
Then the material does not lead that reader to conclude that Trumocracy itself cannot link them to the act
And where the participation act is public by design — petition endorsement is, per Doc 14 §2.2, while the private_endorsement charter option is OFF in every v1 deployment — the material says so plainly and does not describe the act as kept private, secret or hidden
And the material does not use "private", "anonymous", "receipt-free" or "secure" of any v1 participation act, except in the negated form clause (a) requires
And material that instead states separately what the platform does not publish and what the platform's own records can see, and makes no contrary claim elsewhere in the same string, passes — the approved pattern being apps/web/src/i18n/en.ts parties.joinPrivate, guarded by UT-0869
And where the safe-harbour and the reader test disagree, the reader test governs

# Scenario 9: Absence test — the claim class does not survive anywhere in a v1 surface (clause (e), UT-0869 pattern)
Given every public-facing surface of a v1 deployment, in every language, including the README and the landing copy
When each surface is read against the clause (e) reader test rather than searched for a list of banned words
Then zero materials assert or imply that a v1 participation act is unknowable to Trumocracy
And a claim that contains none of the four banned words still FAILS if an ordinary grade-8 reader would take it to mean the act is unknowable to Trumocracy
```
````

---

Commentary for OP 8 (`ISS-07`): §12's last entry is v2.15.0's; entries for **both** v2.17.0 and
v2.17.1 are added, following the v2.12.0/v2.13.0 template the reviewer named. The `---` separator
and the `## 13.` heading are re-emitted unchanged.

### OP 8 — docs/02-requirements-srs.md — §12: add the v2.17.0 and v2.17.1 session-scope entries

FIND:
````
---

## 13. Open issues / TBD
````
REPLACE WITH:
````
**v2.17.0 session scope:** No new FRs minted (FR-131 clause (e) carries the honesty-of-claim duty across every v1 participation act; no normative gap requiring a new ID). No IDs minted, reused or renumbered. Must count stays at 114. FR-131 amended with clause (e) and a widened closing sentence; §13 tracked routing (j) added (enrolment / verification landing copy — not ruled). The superseded closing sentence is quoted in place per annotate-don't-delete. US/TC/RTM rows for FR-131 remain OPEN — same recorded-phasing posture as v2.12.0/v2.13.0; the clause (e) TC (a UT-0869-pattern guard on the landing copy) is routed to the engineer, and Doc 07/08 re-cut FR-131's chain in the same session.

**v2.17.1 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative meaning changed — this is the cycle-2 rework of v2.17.0 against artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md (FAIL 86%, 0C/0H/3M/7L), completing the cascade the amendment obliged: §8 FR-131 Scenarios 8 and 9 added for clause (e) and the block header de-scoped from the ballot (ISS-01); §4.45's heading and rationale widened to the participation-act posture with the ballot rationale retained (ISS-02); clause (e)'s operative prohibition recast under RFC 2119 with a positive subject and MUST NOT (ISS-03); the approver confirmation of 2026-09-06 recorded at all live sites (ISS-04); the clause (e) safe-harbour subordinated to its reader test (ISS-05); "governed by" softened to "addressed by" for enrolment claims (ISS-06); this entry and the v2.17.0 entry added (ISS-07); §16.3's FR-131 and FR-132 rows corrected (ISS-08, ISS-10); §13 (j)'s bare "§2.5" qualified to Doc 06 §2.5 (ISS-09). The three Lows carried from v2.16.3 (FR-064's missing cross-reference; the v2.16.0 changelog echo; the §13 (h) wording nit) are carried again — v2.17.1 touches none of those sites.

---

## 13. Open issues / TBD
````

---

Commentary for OP 9 (`ISS-04`, §13 site): the tracked-routing block header still frames the ruling
as pending. Same fix as elsewhere; the block's date and citation are unchanged.

### OP 9 — docs/02-requirements-srs.md — §13 tracked-routing header (ISS-04, fifth site)

FIND:
````
**Tracked routing (2026-09-06; recorded with the ENDORSEMENT-COPY ruling, product-owner, presented for approver confirmation; artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md):**
````
REPLACE WITH:
````
**Tracked routing (2026-09-06; recorded with the ENDORSEMENT-COPY ruling, product-owner, CONFIRMED by the approver (Rathish Kumar) 2026-09-06; artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11):**
````

---

Commentary for OP 10 (`ISS-09`): a single-line table row replaced in full. **The REPLACE differs
from the FIND at exactly one point — diff before applying:** `C1` — "the §2.5 absence-test pattern"
→ "the **Doc 06 §2.5** absence-test pattern". The bare "§2.5" resolves, on the naive reading, to
§2.5 of the decision record cited in the same block, which is a different thing entirely. Nothing
else in the row changes.

### OP 10 — docs/02-requirements-srs.md — §13 tracked routing (j): qualify the cross-reference (ISS-09)

FIND:
````
| (j) Enrolment / verification landing copy — **not ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the §2.5 absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. | product-owner (decision); sre (consulted on (2)) | OPEN — not ruled; non-blocking |
````
REPLACE WITH:
````
| (j) Enrolment / verification landing copy — **not ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the **Doc 06 §2.5** absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. | product-owner (decision); sre (consulted on (2)) | OPEN — not ruled; non-blocking |
````

---

Commentary for OP 11 (`ISS-08`): a single-line table row replaced in full. **The REPLACE differs
from the FIND at exactly one point — diff before applying:** `C1` — a clause-(e) phrase is appended
to the v1 mechanism column. The v2 column, the Must, the IN-v1 classification and the honesty flag
are unchanged.

### OP 11 — docs/02-requirements-srs.md — §16.3 FR-131 row (ISS-08)

FIND:
````
| FR-131 | v1 honesty notice (DES-098) | Must | IN-v1 | Non-dismissable plain-language UI notice before each ballot in v1; states NOT anonymous, NOT receipt-free, NOT coercion-resistant; carries one-account-per-phone caveat (FR-132) | — (v1-only requirement; v2 replaces with FR-030/031/NFR-003 cryptographic guarantees + DES-063 coercion-safe confirmation surface) | N |
````
REPLACE WITH:
````
| FR-131 | v1 honesty notice and honesty-of-claim duty (DES-098) | Must | IN-v1 | Non-dismissable plain-language UI notice before each ballot in v1; states NOT anonymous, NOT receipt-free, NOT coercion-resistant; carries one-account-per-phone caveat (FR-132); from v2.17.0 also the honesty-of-claim duty across every v1 participation act on every public-facing surface in every language (clause (e); §8 Scenarios 8-9) | — (v1-only requirement; v2 replaces with FR-030/031/NFR-003 cryptographic guarantees + DES-063 coercion-safe confirmation surface) | N |
````

---

Commentary for OP 12 (`ISS-10`): a single-line table row replaced in full. **The REPLACE differs
from the FIND at exactly one point — diff before applying:** `C1` — "honesty caveat carried by
FR-131 notice (DES-098) clauses (d)/(e)" → "honesty caveat carried by the FR-131 notice (DES-098)
clause (d), and by FR-132 §(d)/§(e)". Before v2.17.0 the phrase could only mean FR-132's own
clauses; now that FR-131 has a clause (e) — which expressly disclaims enrolment and
identity-verification claims — the loose phrasing points the caveat at a clause that excludes it.
Nothing else in the row changes.

### OP 12 — docs/02-requirements-srs.md — §16.3 FR-132 row (ISS-10)

FIND:
````
| FR-132 | v1 identity verification — two-layer gating: phone for account creation/open-tier; government-ID check for FR-123 counting actions only (DES-095 amended, DES-100, ADR-025) | Must | IN-v1 | Phone SMS for account creation and open-tier access (FR-020/FR-122 absolute; MUST NOT refuse membership for absence of ID); government-ID document check required only for FR-123 counting actions (official strength contribution, binding vote, candidacy); verify-and-discard (allowlist: id_verified_flag, age_verified, issuing_region, subject_id_hash, phone_hash, verified_at; all else discarded); subject_id_hash deduplication at counting-verification (not account creation); "real-person verified" posture for counting tier; MUST NOT claim anonymity or one-person-one-vote; honesty caveat carried by FR-131 notice (DES-098) clauses (d)/(e); vendor no-retention contract required; CON-015 governs legal classification | RETIRED on v2 ZK-enrolment swap-in (DES-095 backing switches to ZK nullifier per ADR-024/ADR-025; one-person-one-vote guarantee becomes true by construction; phone_hash and subject_id_hash storage eliminated) | Y |
````
REPLACE WITH:
````
| FR-132 | v1 identity verification — two-layer gating: phone for account creation/open-tier; government-ID check for FR-123 counting actions only (DES-095 amended, DES-100, ADR-025) | Must | IN-v1 | Phone SMS for account creation and open-tier access (FR-020/FR-122 absolute; MUST NOT refuse membership for absence of ID); government-ID document check required only for FR-123 counting actions (official strength contribution, binding vote, candidacy); verify-and-discard (allowlist: id_verified_flag, age_verified, issuing_region, subject_id_hash, phone_hash, verified_at; all else discarded); subject_id_hash deduplication at counting-verification (not account creation); "real-person verified" posture for counting tier; MUST NOT claim anonymity or one-person-one-vote; honesty caveat carried by the FR-131 notice (DES-098) clause (d), and by FR-132 §(d)/§(e); vendor no-retention contract required; CON-015 governs legal classification | RETIRED on v2 ZK-enrolment swap-in (DES-095 backing switches to ZK nullifier per ADR-024/ADR-025; one-person-one-vote guarantee becomes true by construction; phone_hash and subject_id_hash storage eliminated) | Y |
````

---

## Applier checklist

1. Apply OP 1 … OP 12 in order; each FIND must match exactly once before replacement.
2. **For OP 5, OP 10, OP 11 and OP 12, diff FIND against REPLACE first** and confirm the only
   differences are the change points named in each op's commentary. Stop on any other difference.
3. After applying, confirm: `Version: 2.17.1`; `Status: In Review … cycle 2 of 5`; `Change:` field
   opens with the v2.17.1 entry followed by the v2.17.0 entry; §4.45's heading reads
   "…participation-act posture (DES-098)"; the §8 FR-131 block contains **Scenarios 1–9**; §12 ends
   with the v2.17.1 session-scope entry; §13 (j) reads "Doc 06 §2.5".
4. Confirm the invariants: **no** new `BR`/`FR`/`NFR` ID anywhere in the diff; Must count still
   **114**; the FR-131 row still traces to `BR-005, BR-009`, priority `Must`, owner
   `Nadia Hassan`, verify-by `T, I`; the quoted SUPERSEDED closing sentence still present exactly
   once; zero live occurrences of the un-widened closing sentence.
5. Grep check for `ISS-04`: **zero** remaining occurrences of "presented for approver confirmation"
   in the file.
6. Grep check for `ISS-03`: **zero** occurrences of "no public-facing string" and at least one of
   "MUST NOT assert that a **participation act** is unknowable".
7. Suffix scan at all 12 boundaries: no orphaned `FIND:`/fence lines, no duplicated table row, no
   duplicated `Change:` or `Version:` line, Gherkin fences still balanced.
8. Route to **reviewer-qa** (business mode) for the **cycle-2** review of v2.17.1.
