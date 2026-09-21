# Anchored FIND/REPLACE spec — Doc 04 MTP v1.7.0 → **v1.7.1** (cycle 2 of 5)

```
Author:        architect (Ravi Deshmukh) — owning role for Docs 03 and 04
Date:          2026-09-20
Target file:   docs/04-test-strategy-master-plan.md
Base on disk:  v1.7.0, Status: In Review  (the PM applied the v1.7.0 spec and nothing else)
Produces:      v1.7.1, Status: In Review, rework cycle 2 of 5
Answers:       artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md
               (FAIL 94%; 0C / 0H / 1 Medium / 2 Low; neutral reviewer: tester, Ji-woo Park)
Bump:          PATCH. No normative rule changes. The withdrawal, S5 rule 4's count, the
               `OPEN-27` closure, the three new `OPEN-##` items, the pin sweep, the retained
               lapse analysis and the mechanical scan instruction are carried into v1.7.1
               UNCHANGED. The §14 register reconciliation discharged here is a REGISTER
               CORRECTION — it records ids Doc 07 owns and narrows a reservation this document
               owns — and changes no test criterion, no rule and no status.
Ordering:      APPLY artifacts/architect-2026-09-20T1700-doc03-c2-spec.md FIRST.
               Doc 03's corrected six-site enumeration is the instruction; §11.2 is the site.
Method:        Annotation only. Nothing is deleted. 14 operations.
```

**Applier notes.** Fences are 4 backticks. Every FIND begins at a line start and ends at the end of
a block-level unit, and matches **exactly once**. **Lines 2615, 2718, 2748 and 2758 are very long
single-line table rows and are reproduced WHOLE AND VERBATIM** — a prefix matches zero times. No
operation overlaps another.

---

### OP 1 — Version bump to v1.7.1

FIND:
````
Version:       1.7.0
````
REPLACE WITH:
````
Version:       1.7.1
````

---

### OP 2 — Status block: v1.7.1 header, the Medium, both Lows, and `OPEN-30` discharged

FIND:
````
Status:        In Review — v1.7.0 (2026-09-20). **`OPEN-27` is CLOSED, and this document records
               the outcome at every site that carried it.** Neutral reviewer assigned by the
               project-manager **before dispatch**: **tester** (Ji-woo Park, new instance), per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — which records the
               grounds (owns neither Doc 03 nor Doc 04; holds Bash and can verify the
               `PrivacyStatus.tsx` claims against the code at HEAD) and the exclusions (architect
               — owner; engineer — built the component under ruling). It also records, for the
               avoidance of doubt, that §13 assigns the tester `OPEN-20` as an action item and
               that **being assigned an item is not authorship**; `OPEN-20` is untouched by this
               session. Cycle 1 of a fresh loop; the v1.6.0 lineage closed PASS at 96%.
               Minor bump: a normative test-criterion scope change — a **build-failing** carve-out
               is withdrawn.
````
REPLACE WITH:
````
Status:        In Review — v1.7.1 (2026-09-20). **Rework cycle 2 of 5** against
               artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md
               (**FAIL 94%; 0 Critical / 0 High / 1 Medium / 2 Low**). Neutral reviewer:
               **tester** (Ji-woo Park, new instance), assigned by the project-manager **before
               dispatch** per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — the same reviewer
               and the same recorded grounds and exclusions as cycle 1.
               **PATCH bump, and the claim is stated exactly.** **No normative rule changes.**
               The withdrawal of the `anon`-badge carve-out, S5 rule 4's count of **ONE**, S4's
               unchanged count, the `OPEN-27` closure, the `OPEN-28` / `OPEN-29` / `OPEN-30`
               mints, the pin sweep, the retained lapse analysis and the four-step mechanical
               scan instruction are carried into v1.7.1 **unchanged** — the reviewer verified
               each against HEAD and wrote *"Nothing else needs reworking."* **The ruling is Doc
               03's and is untouched:** this plan still **cites** and does not reason it.
               **THE MEDIUM — ISS-01 — FIXED. §11.2's tooling-register row, the eighth site,
               which was never named.** The live row for the **build-failing S5 denylist control**
               (owner **Nadia Hassan**; controls `DES-085`, `DES-098`, **`FR-131(e)`**) still
               ended *"Two carve-outs only: clause (a)'s mandated negated forms, and the named
               `anon`-badge exception. See §0.5 S5."* It is not inside any retained or superseded
               block — it is a **current row in a current section, describing the very control the
               withdrawal changes**. It contradicted **S5 rule 4** on a count ("ONE carve-out, and
               only one"), and, worse, it recorded as an **exception** exactly what rule 4 says
               MUST NOT be one — because **an exception asserts compliance and a failure asserts
               work**. It is now swept in the same annotate-don't-delete form used at the other
               five sites: the v1.5.0 annotation is retained verbatim as the record, and a
               **v1.7.1** annotation is appended withdrawing the named exception, restating the
               control's carve-out count as **one**, and recording the two `PrivacyStatus` `anon`
               strings as **in scope and failing**, tracked as **`OPEN-28`**, never as an
               exception. **Seven of the eight sites v1.7.0 named were clean; this was the eighth,
               and the reason it was missed is upstream:** Doc 03 v2.14.0's Downstream instruction
               enumerated **five** sites when there are **six**, which was Doc 03's own cycle-1
               **ISS-02 (Medium)**. **That instruction is corrected first, at Doc 03 v2.14.1**,
               and this sweep answers the corrected six-site enumeration — the instruction, then
               the site, in that order. **The "every site" claims are corrected with it:** this
               block and the changelog now enumerate **six**.
               **BOTH LOWS TAKEN. ISS-03 — the bump rationale.** The v1.7.0 rationale a reader met
               first read *"a **build-failing** carve-out is withdrawn"*, which alone implies a
               control that fails builds **today**; the qualification arrived forty lines later.
               The v1.7.0 sentence is a retained historical record below and is **not edited**;
               the true position is stated here instead, as the cycle-1 reviewer of Doc 03
               v2.13.0 accepted for a verbatim-retained block: **what v1.7.0 withdrew was a
               carve-out to a specified-but-unimplemented build-failing control.** The
               `packages/ui` string scan S5 specifies **is not implemented** (the guards that
               exist — `UT-0869`, `UT-0887`, `UT-0889`, `UT-0759` — are scoped to `apps/web` i18n
               strings and to the `ver` state), and `PrivacyStatus` is mounted on **no shipped
               surface**, so **no build is failing and no citizen sees either string**.
               **ISS-02 — `OPEN-30`'s trigger. It has FIRED, and this version DISCHARGES the item
               rather than only recording the firing.** **Doc 07 is now v2.9.0 (Approved)** — it
               PASSed its cycle-1 technical review at 97% (0C/0H/0M/4L; reviewer-qa) on
               2026-09-20 — which is precisely the trigger `OPEN-30` names: *"the first touch of
               this document after Doc 07 v2.9.0 is Approved."* **Why this version does the
               reconciliation rather than deferring it again, stated because the cycle-1 report
               advised against attempting it:** the report's instruction was *"do not attempt the
               reconciliation in a **Low-only** rework"* — this is **not** a Low-only rework, it
               carries a Medium; the deferral's own stated reason ("a register reconciled today is
               stale before the session closes, because Doc 07 is mid-rework") **has expired**,
               Doc 07 having closed its loop at **Approved**; the **project-manager's dispatch for
               this cycle directs the discharge**; and Doc 07 v2.9.0's own cycle-1 review raised
               the staleness as its **ISS-01 (Low)** and routed it *"to Ravi Deshmukh now, while
               Doc 04 v1.7.1 is open."* **This version is therefore no longer pinning a number it
               cannot see.** **§14's standing instruction is honoured in full and in the same
               touch:** the Doc 07 **bibliographic** pin is advanced to **v2.9.0 (Approved)** and
               §14 is **re-read against Doc 07 v2.9.0 §2** in the same touch, exactly as the
               instruction requires. **What §14 now records, from Doc 07 v2.9.0 §2:**
               `TS-ADV-01…16` = TC-2600–TC-2752, **TC-3564–TC-3567**, **TC-3570–TC-3576** and
               **TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked), and the six `TS-V1-*`
               suites' reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — the
               **22** ids in between having been drawn by Doc 07 into `TS-ADV-01…16`, not into any
               `TS-V1-*` suite. **108 of the band's ids remain free, and none of the six `TS-V1-*`
               suites has minted an id.** The two echoes are re-cut with the rows, as the v1.6.0
               remedy required: **§0.4**'s "reserved for them at §14" sentence and **Downstream**'s
               reserved-band sentence. The free-band disclosure now **names the suite** drawing on
               the band (`TS-ADV-01…16`) and no longer needs the "cannot see" wording, because the
               version it declined to rely on is now **Approved**. **`OPEN-30` is CLOSED at
               v1.7.1, on a reconciliation and not on age.** **This is a register correction, not
               a normative change:** it mints no `TC`, re-statuses none, records ids the tester
               owns, and narrows a reservation this document owns — which is why the bump stays a
               **patch**. `TS-ABSENCE` and `TS-SCAFFOLD` were re-read against Doc 07 v2.9.0 §2 in
               the same pass and are **unchanged** (TC-1600–TC-1614 + TC-3569; TC-3470–TC-3488 +
               TC-3568).
               **Sites touched by this version, enumerated rather than claimed:** §11.2's
               tooling-register row (the Medium); §13's `OPEN-30` row and §13's not-gate-blocking
               and closed-item bullets; §1.4's roll-call; the `Source:` block's Doc 07 and Doc 08
               pins; §14's `TS-ADV-01…16` row, its `TS-V1-*` row and its standing-instruction
               note; §0.4's free-band sentence; Downstream's reserved-band sentence; this block,
               the changelog and §22's Approvals table. **No Low is carried forward.**
               **Doc 08 is NOT read as settled here.** It is at **v2.12.1 (In Review)** on disk,
               last **Approved v2.11.3**, and is mid-rework in the tester's hands; its status is
               re-pinned bibliographically and **nothing in this version depends on its content or
               comments on it**. **`OPEN-20` is untouched**, as in v1.7.0.
               **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status
               is upgraded; no product code is written or edited.**
               _(v1.7.0 record, retained verbatim per annotate-don't-delete — its Medium and its
               two Lows are taken above:)_
               In Review — v1.7.0 (2026-09-20). **`OPEN-27` is CLOSED, and this document records
               the outcome at every site that carried it.** Neutral reviewer assigned by the
               project-manager **before dispatch**: **tester** (Ji-woo Park, new instance), per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md — which records the
               grounds (owns neither Doc 03 nor Doc 04; holds Bash and can verify the
               `PrivacyStatus.tsx` claims against the code at HEAD) and the exclusions (architect
               — owner; engineer — built the component under ruling). It also records, for the
               avoidance of doubt, that §13 assigns the tester `OPEN-20` as an action item and
               that **being assigned an item is not authorship**; `OPEN-20` is untouched by this
               session. Cycle 1 of a fresh loop; the v1.6.0 lineage closed PASS at 96%.
               Minor bump: a normative test-criterion scope change — a **build-failing** carve-out
               is withdrawn.
````

---

### OP 3 — `Source:` block: Doc 07 pin advanced to v2.9.0 Approved; Doc 08 re-pinned as in flight

FIND:
````
               REL-TRUMOCRACY (docs/09-release-notes.md — **Approved v1.9.0**, the version in
````
REPLACE WITH:
````
               _(v1.7.1 — **the Doc 07 and Doc 08 pins are re-cut; the v1.7.0 text above is
               retained verbatim and annotated, not deleted.** **Doc 07 is now v2.9.0
               (Approved)** — 07-test-cases-suites-v2.9.0-technical-cycle1.md, **PASS 97%**
               (0C/0H/0M/4L; reviewer: reviewer-qa), 2026-09-20 — having minted
               **TC-3577..TC-3591**, one case per `it` of the `UT-0890` block, into
               `TS-ADV-01…16`. **Doc 08 is now v2.12.1 (In Review)**, last **Approved v2.11.3**;
               it is mid-rework in the tester's hands, is **not read as settled here**, and
               **nothing in this version depends on its content**.
               **THE RECONCILIATION PIN IS ADVANCED WITH THE BIBLIOGRAPHIC ONE, IN THIS SAME
               TOUCH — which is the whole of §14's standing instruction and the whole of
               `OPEN-30`.** v1.7.0 kept the two pins apart deliberately and said why: Doc 07 was
               mid-rework, so a register reconciled that day would have been stale before the
               session closed. **That reason has expired.** §14's `TC`-range **reconciliation**
               pin therefore moves **Doc 07 v2.6.0 → Doc 07 v2.9.0 (Approved)**, §14 is re-read
               against **Doc 07 v2.9.0 §2** in the same touch as the instruction requires, and
               **`OPEN-30` is CLOSED**. **The distinction between the two kinds of pin is not
               abandoned — it is discharged:** it existed so that a bibliographic pin could never
               silently imply a content re-read, and here the content re-read is done and named.
               See §14, §0.4, Downstream and `OPEN-30`.)_
               REL-TRUMOCRACY (docs/09-release-notes.md — **Approved v1.9.0**, the version in
````

---

### OP 4 — `Changelog:` new v1.7.1 entry above the retained v1.7.0 entry

FIND:
````
Changelog:     2026-09-20 v1.7.0 — **`OPEN-27` CLOSED. Doc 03 v2.14.0 ruled; this plan records
````
REPLACE WITH:
````
Changelog:     2026-09-20 v1.7.1 — **Rework cycle 2 of 5 against
               artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md**
               (FAIL 94%; 0C / 0H / 1 Medium / 2 Low; neutral reviewer: **tester**, Ji-woo Park,
               PM-assigned). **PATCH bump: one missed site swept, two Lows taken, and one
               register reconciled. No normative rule changes.** This entry describes only what
               changed.
               **ISS-01 (Medium) FIXED — §11.2's tooling-register row, the sixth carve-out site.**
               The live row for the build-failing S5 denylist control still read *"Two carve-outs
               only: clause (a)'s mandated negated forms, and the named `anon`-badge exception"* —
               a current row in a current section, contradicting S5 rule 4's **ONE** on a count
               and recording as an **exception** what rule 4 says MUST NOT be one. Swept in the
               annotate-don't-delete form used at the other five sites. **The "every site" claim
               is corrected with it: there are SIX sites carrying the carve-out**, and they are
               enumerated in the Status block and in Doc 03 v2.14.1's corrected Downstream
               instruction. The omission was upstream — Doc 03 v2.14.0 enumerated five — and the
               instruction was corrected **first**, at Doc 03 v2.14.1, before this sweep.
               **ISS-03 (Low) TAKEN** — the bump rationale a reader meets first is restated with
               the qualification it lacked: **a carve-out to a specified-but-unimplemented
               build-failing control was withdrawn**. The v1.7.0 sentence is a retained historical
               record and is not edited.
               **ISS-02 (Low) TAKEN — and its item, `OPEN-30`, is CLOSED rather than merely
               annotated.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 (PASS 97%,
               0C/0H/0M/4L, reviewer-qa), which **fires `OPEN-30`'s trigger** by name. The Doc 07
               bibliographic pin is advanced **and §14 is re-read against Doc 07 v2.9.0 §2 in the
               same touch**, exactly as §14's standing instruction requires. **§14 re-cut:**
               `TS-ADV-01…16` now records **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576,
               TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked), and the six `TS-V1-*`
               suites' reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — 22
               ids having gone to `TS-ADV-01…16` rather than to any `TS-V1-*` suite, leaving
               **108 free**, with **none of the six suites having minted an id**. The **two
               echoes** are re-cut with the rows (**§0.4** and **Downstream**), as the v1.6.0
               remedy for the same register established, and the free-band disclosure now
               **names the suite** drawing on the band. `TS-ABSENCE` and `TS-SCAFFOLD` were
               re-read in the same pass and are **unchanged**. **This is a register correction,
               not a normative change:** no `TC` is minted, none is re-statused, ids the tester
               owns are recorded and a reservation this document owns is narrowed — the same
               operation, and the same reasoning, as the v1.1.0 and v1.6.0 re-cuts of this table.
               **Pins:** Doc 07 → **v2.9.0 (Approved)**; Doc 08 → **v2.12.1 (In Review)**, last
               Approved v2.11.3, **mid-rework and not read as settled**, with no statement here
               depending on its content. All other pins unchanged.
               **Untouched, deliberately:** the ruling (Doc 03's, cited not reasoned); S5's four
               rules and the claims test; S4's (a)–(d) notice range; `OPEN-20`; `OPEN-28` and
               `OPEN-29`; §0.6's buckets; `A-02.6`; every test status. **No `TC`, `UT`, `US` or
               `OPEN-##` is minted, renumbered or reused; no product code is written or edited.**
               2026-09-20 v1.7.0 — **`OPEN-27` CLOSED. Doc 03 v2.14.0 ruled; this plan records
````

---

### OP 5 — ISS-01 (Medium): sweep §11.2's tooling-register row — **reproduce the row whole**

FIND:
````
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it. _(v1.5.0: **widened by FR-131 clause (e)** — the scan now covers **any v1 participation act**, not only voting, applies **in every language**, and is a **claims** test as well as a word list: a string fails if a Grade-8 reader would take it to mean Trumocracy cannot link them to the act, even with none of the banned words present. Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception. See §0.5 S5.)_ | Nadia Hassan | DES-085, DES-098, **FR-131(e)** |
````
REPLACE WITH:
````
| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** | §0.5 S5 — no v1 string may claim anonymity, unlinkability, receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge, except inside a DES-098 notice denying it. _(v1.5.0: **widened by FR-131 clause (e)** — the scan now covers **any v1 participation act**, not only voting, applies **in every language**, and is a **claims** test as well as a word list: a string fails if a Grade-8 reader would take it to mean Trumocracy cannot link them to the act, even with none of the banned words present. Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception. See §0.5 S5.)_ _(v1.7.1, cycle-1 **ISS-01**, Medium — **THE NAMED `anon`-BADGE CARVE-OUT IS WITHDRAWN.** The v1.5.0 annotation above is retained verbatim as the record; its closing sentence, "Two carve-outs only … and the named `anon`-badge exception", is **SUPERSEDED**. **This control now carries ONE carve-out, and only one: clause (a)'s mandated negated forms** — inside a DES-098 notice the banned words appear only as "NOT anonymous / NOT receipt-free / NOT coercion-resistant", which is a denial and not a claim, which is why `UT-0887` is negation-aware, and which the widening does not touch. **The second carve-out is gone, not narrowed.** Doc 03 **v2.14.0 §10.12.3** — the copy authority — ruled both the `anon` title "Anonymous" and the `anon` subtitle "Nothing you do here is linked to you" **NOT COMPLIANT in Definition-A (v1)** under FR-131 clause (e), so **there is nothing left to except**. **The two strings at `packages/ui/src/PrivacyStatus.tsx:251-252` are INSIDE this control's scope and FAILING it**, recorded as a **ruled, remediation-pending failure** tracked as **`OPEN-28`**, and they **MUST NOT** be recorded here or anywhere as an exception — **because an exception asserts compliance and a failure asserts work** (§0.5 S5 rule 4). **No build fails on this today, and none should be made to:** the `packages/ui` string scan this row specifies **is not implemented** — the guards that exist, `UT-0869`, `UT-0887`, `UT-0889` and `UT-0759`, are scoped to `apps/web` i18n strings and to the `ver` state — and the component is mounted on **no shipped surface**, so **no citizen sees either string**. When the scan is built, both strings MUST be in its scope with `OPEN-28` as the reference. **Why this row survived the v1.7.0 sweep, recorded rather than excused:** Doc 03 v2.14.0's Downstream instruction enumerated **five** sites carrying the carve-out when there are **six**, and this is the sixth — a **known** S5 site, last edited at **v1.5.0 for this very scan**, and the row that describes the control the withdrawal changes. Doc 03 **v2.14.1** corrects that enumeration to six and re-issues the instruction; this sweep answers it. See §0.5 S5 rule 4, §13 `OPEN-28`, and Doc 03 v2.14.1 §10.12.3 Downstream.)_ | Nadia Hassan | DES-085, DES-098, **FR-131(e)** |
````

---

### OP 6 — §1.4: v1.7.1 roll-call appended after the retained v1.7.0 roll-call

FIND:
````
**Bibliographic pins and reconciliation pins are different statements and are kept apart** — the
same discipline this document already applies to clause (e)'s **origin** (v2.17.0) versus its
**currency** (v2.17.3).
````
REPLACE WITH:
````
**Bibliographic pins and reconciliation pins are different statements and are kept apart** — the
same discipline this document already applies to clause (e)'s **origin** (v2.17.0) versus its
**currency** (v2.17.3).

**_(v1.7.1 roll-call — 2026-09-20. It supersedes the v1.7.0 roll-call immediately above, which is
retained verbatim, and it discharges the cycle-1 carried Low ISS-02 by closing the item behind
it.)_**
**Approved at HEAD:** Doc 02 **v2.17.3** (ten Lows carried there), Doc 05 **v2.5.0**, Doc 06
**v2.8.1** (three Lows carried there), **Doc 07 v2.9.0** — advanced this touch from v2.8.1, PASS
97% (0C/0H/0M/4L; reviewer-qa), 2026-09-20 — and Doc 09 **v1.9.0**.
**In Review:** Doc 03 **v2.14.1** — the matching half of this rework, last Approved v2.13.0 — Doc 08
**v2.12.1** (last Approved **v2.11.3**; mid-rework in the tester's hands and **not read as settled
here**), Doc 06 → **v2.9.0** (engineer), and **this document at v1.7.1**. **No statement in v1.7.1
depends on the content of Doc 06 or Doc 08.**
**§14 IS TOUCHED AT v1.7.1, and this is the change from v1.7.0.** Its `TC`-range **reconciliation**
pin is advanced **Doc 07 v2.6.0 → Doc 07 v2.9.0 (Approved)** and §14 is **re-read against Doc 07
v2.9.0 §2 in this same touch**, which is exactly what §14's standing instruction requires of any
version that advances the Doc 07 pin. The carried cycle-2 Low **ISS-08**, tracked as **`OPEN-30`**,
is therefore **CLOSED**: `TS-ADV-01…16` records **TC-2600–TC-2752, TC-3564–TC-3567,
TC-3570–TC-3576, TC-3577–TC-3591**, and the six `TS-V1-*` suites' reservation is narrowed
**TC-3570–TC-3699 → TC-3592–TC-3699** (**108** ids free; **none of the six suites has minted an
id**). **Bibliographic and reconciliation pins remain different statements** — the distinction is
not abandoned, it is **discharged**: it exists so a bibliographic advance can never silently imply a
content re-read, and here the content re-read is done, dated and named.
````

---

### OP 7 — §13: the gate-blocking bullets — `OPEN-30` closed

FIND:
````
  increment. **`OPEN-30`** is a register-currency item with a named trigger (the first touch of
  this document after Doc 07 v2.9.0 is Approved) and blocks nothing.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`. **Closed at v1.7.0:** **`OPEN-27`** — closed **on a
  ruling, not on age**: Doc 03 v2.14.0 §10.12.3 delivered the fresh look the item demanded, and
  the work it created is carried forward as `OPEN-28` rather than left inside a closed item.
````
REPLACE WITH:
````
  increment. **`OPEN-30`** is a register-currency item with a named trigger (the first touch of
  this document after Doc 07 v2.9.0 is Approved) and blocks nothing.
- **Not gate-blocking, but owed — re-cut again at v1.7.1.** The bullet above is retained;
  **`OPEN-30` is CLOSED** and leaves this list. The list in force is: `OPEN-07`, `OPEN-08`,
  `OPEN-09`, `OPEN-10`, `OPEN-12` … `OPEN-15`, `OPEN-22`, **`OPEN-28`**, **`OPEN-29`**.
  **`OPEN-28` and `OPEN-29` are unchanged in substance and posture** — neither is reopened, and
  `OPEN-28` still inherits `OPEN-27`'s gate posture verbatim.
- **Closed at v1.1.0:** `OPEN-16`, `OPEN-17`. **Closed at v1.7.0:** **`OPEN-27`** — closed **on a
  ruling, not on age**: Doc 03 v2.14.0 §10.12.3 delivered the fresh look the item demanded, and
  the work it created is carried forward as `OPEN-28` rather than left inside a closed item.
  **Closed at v1.7.1:** **`OPEN-30`** — closed **on a reconciliation, not on age**: its trigger
  ("the first touch of this document after Doc 07 v2.9.0 is Approved") **fired on 2026-09-20**
  when Doc 07 v2.9.0 was Approved, and §14 was re-read against Doc 07 v2.9.0 §2 in the same touch
  that advanced the pin, as §14's standing instruction requires. It created no successor item.
````

---

### OP 8 — §13: the `OPEN-30` row — **reproduce the row whole** and annotate it CLOSED

FIND:
````
| **OPEN-30** _(new v1.7.0 — the v1.6.0 cycle-2 carried Low ISS-08, converted to a tracked item with a trigger)_ | **§14's `TC`-range register is owed one reconciliation, and it is deferred on purpose rather than done badly.** The v1.6.0 cycle-2 review asked that, once the Doc 07 pin advances to an **Approved** version, §14 record **TC-3570–TC-3575** under `TS-ADV-01…16` (Doc 07 v2.7.0 §2 assigned them there — again **not** to any of the six `TS-V1-*` suites the band is reserved for) and re-narrow the `TS-V1-*` floor accordingly; and that the free-band disclosure **name the suite** drawing on it and re-word "cannot see" to "declines to rely on an unreviewed version". Doc 07 is now **v2.8.1 Approved** — but is being incremented to **v2.9.0 in this same session, minting from TC-3577**, so a register reconciled today is stale before the session closes. **v1.7.0 therefore does not touch §14 and does not advance §14's reconciliation pin, which stays at Doc 07 v2.6.0**; §14's standing re-read instruction is consequently **not tripped** by this touch, and the deferral is consistent with the instruction rather than an evasion of it | **Blocks nothing.** A register-currency item, graded Low twice before on the same ground: it changes no conclusion drawn from it. **Trigger: the first touch of this document after Doc 07 v2.9.0 is Approved** — which the §14 standing instruction will itself force when the bibliographic and reconciliation pins are next brought together | Ravi Deshmukh |
````
REPLACE WITH:
````
| **OPEN-30** — **CLOSED v1.7.1** _(new v1.7.0 — the v1.6.0 cycle-2 carried Low ISS-08, converted to a tracked item with a trigger; trigger **FIRED 2026-09-20** and the item **closed on a reconciliation the same day**)_ | **CLOSED — the trigger fired and the reconciliation was done in the touch that advanced the pin, which is what this item and §14's standing instruction both asked for.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 — 07-test-cases-suites-v2.9.0-technical-cycle1.md, **PASS 97%** (0C/0H/0M/4L; reviewer-qa) — which is this item's trigger by name. v1.7.1 advances the Doc 07 **bibliographic** pin to v2.9.0 **and** advances §14's **reconciliation** pin with it, re-reading §14 against **Doc 07 v2.9.0 §2** in the same touch. **What the re-read found and recorded, id for id:** Doc 07 has drawn **TC-3570..TC-3576** (the `UT-0889` FR-131 / FR-132 honesty family, minted at v2.7.0 and v2.8.0) and **TC-3577..TC-3591** (fifteen cases, one per `it` of the `UT-0890` block, minted at v2.9.0) — **all into `TS-ADV-01…16`**, and **none into any of the six `TS-V1-*` suites the band is reserved for**, which is the same pattern this item was raised about. §14's `TS-ADV-01…16` row now reads **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** (69 cases / 49 automated / 20 Blocked, per Doc 07 v2.9.0 §2), and the `TS-V1-*` reservation is **narrowed from TC-3570–TC-3699 to TC-3592–TC-3699** — **22 ids drawn, 108 free, and none of the six suites has minted an id.** **Both operative halves of the original ISS-08 ask are discharged:** the ids are recorded where they actually live, and the free-band disclosure now **names the suite** drawing on the band (`TS-ADV-01…16`). The third half — re-wording "cannot see" to "declines to rely on an unreviewed version" — is **moot rather than skipped**: there is no longer an unreviewed version to decline, so the disclosure states a **verified** allocation against an **Approved** source. **The two echoes are re-cut with the rows** (§0.4's "reserved for them at §14" sentence and Downstream's reserved-band sentence), as the v1.6.0 remedy for this same register established; **`TS-ABSENCE` and `TS-SCAFFOLD` were re-read in the same pass and are unchanged.** **Why v1.7.1 did this and v1.7.0 did not, stated rather than left as an unexplained reversal:** v1.7.0's deferral reason was that Doc 07 was mid-rework, so a register reconciled that day would be stale before the session closed — **and that reason expired when Doc 07 closed its loop at Approved.** Doc 07 v2.9.0's own cycle-1 review independently raised the staleness as its **ISS-01 (Low)** and routed it to the architect *"now, while Doc 04 v1.7.1 is open"*. The cycle-1 reviewer of this document advised against attempting the reconciliation **in a Low-only rework**; this rework is not Low-only, and the project-manager's cycle-2 dispatch directs the discharge. _(v1.7.0 body, retained verbatim per annotate-don't-delete:)_ **§14's `TC`-range register is owed one reconciliation, and it is deferred on purpose rather than done badly.** The v1.6.0 cycle-2 review asked that, once the Doc 07 pin advances to an **Approved** version, §14 record **TC-3570–TC-3575** under `TS-ADV-01…16` (Doc 07 v2.7.0 §2 assigned them there — again **not** to any of the six `TS-V1-*` suites the band is reserved for) and re-narrow the `TS-V1-*` floor accordingly; and that the free-band disclosure **name the suite** drawing on it and re-word "cannot see" to "declines to rely on an unreviewed version". Doc 07 is now **v2.8.1 Approved** — but is being incremented to **v2.9.0 in this same session, minting from TC-3577**, so a register reconciled today is stale before the session closes. **v1.7.0 therefore does not touch §14 and does not advance §14's reconciliation pin, which stays at Doc 07 v2.6.0**; §14's standing re-read instruction is consequently **not tripped** by this touch, and the deferral is consistent with the instruction rather than an evasion of it | **Blocked nothing, and blocks nothing now.** A register-currency item, graded Low twice on the same ground: it changed no conclusion drawn from it. **Closed on a reconciliation, not on age.** **It mints no `TC` and re-statuses none** — it records ids the tester owns and narrows a reservation this document owns, which is why v1.7.1 remains a **patch** bump. **No successor item is created.** _(v1.7.0 Impact cell, retained verbatim:)_ **Blocks nothing.** A register-currency item, graded Low twice before on the same ground: it changes no conclusion drawn from it. **Trigger: the first touch of this document after Doc 07 v2.9.0 is Approved** — which the §14 standing instruction will itself force when the bibliographic and reconciliation pins are next brought together | Ravi Deshmukh (**DONE, v1.7.1**) |
````

---

### OP 9 — §14: the `TS-ADV-01…16` row re-cut against Doc 07 v2.9.0 §2 — **reproduce the row whole**

FIND:
````
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 **and TC-3564–TC-3567** *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752. **v1.6.0:** the four out-of-block ids **TC-3564–TC-3567** map `UT-0887` (the rendered, negation-aware FR-131(a) banner) and were minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567" — 47 cases)* | per §8 |
````
REPLACE WITH:
````
| `TS-ADV-01` … `TS-ADV-16` | **Adversarial, one per RISK** (Definition-B set) | mixed | `RISK-01` … `RISK-16` (§8) | TC-2600–TC-2799 **and TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** *(narrowed at v1.1.0 from TC-2600–TC-3199; Doc 07 v2.4.4 §2's actual high-water mark is TC-2752. **v1.6.0:** the four out-of-block ids **TC-3564–TC-3567** map `UT-0887` (the rendered, negation-aware FR-131(a) banner) and were minted at Doc 07 v2.5.0; Doc 07 v2.6.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567" — 47 cases)* *(v1.7.1, **`OPEN-30`** — re-read against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)** in the same touch that advanced the Doc 07 pin, as §14's standing instruction requires. **Two further out-of-block groups have landed in this suite since v1.6.0, and neither went to a `TS-V1-*` suite.** **TC-3570–TC-3576** — the `UT-0889` FR-131 / FR-132 honesty family, minted at Doc 07 v2.7.0 (TC-3570..TC-3575) and v2.8.0 (TC-3576, the DES-085 jargon scan). **TC-3577–TC-3591** — fifteen cases mapping one `it` each of the `UT-0890` block, minted at Doc 07 **v2.9.0**. Doc 07 v2.9.0 §2 and its §5 heading both read "TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591" — **69 cases, 49 automated, 20 Blocked**. **This document mints no `TC` and re-statuses none:** it records ids the tester owns. The `TS-V1-*` reservation is narrowed to match, below.)* | per §8 |
````

---

### OP 10 — §14: the six `TS-V1-*` suites' reservation narrowed to TC-3592–TC-3699 — **reproduce the row whole**

FIND:
````
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | **TC-3570–TC-3699** *(v1.6.0, cycle-1 ISS-01: **narrowed from TC-3564–TC-3699**, which was reserved at v1.1.0 and annotated "none minted" — true of these six suites, false of the band, because Doc 07 v2.5.0 minted **TC-3564..TC-3569** into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`. **None of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`. **OPEN-18.** The floor of the free band is **TC-3570** and is itself being drawn on by **Doc 07 v2.7.0, in progress** for the clause-(e) rows — this register states the floor it can verify and does not pin an id it cannot see)* | per §0.4 |
````
REPLACE WITH:
````
| `TS-V1-BALLOT` · `TS-V1-NOTICE` · `TS-V1-ID` · `TS-V1-SPAM` · `TS-V1-AUDIT` · `TS-V1-ENROL` | **Definition-A** — the six unminted v1 suites (**§0.4**) | V1–V6 | `FR-121`/`125`/`126`/`128`/`129`/`131`/`132`/`133`, `FR-054`/`092`/`108`, DES-096/098/099/100, and the §6.4 negative-authority matrix in its conventional form | **TC-3592–TC-3699** *(v1.6.0, cycle-1 ISS-01: **narrowed from TC-3564–TC-3699**, which was reserved at v1.1.0 and annotated "none minted" — true of these six suites, false of the band, because Doc 07 v2.5.0 minted **TC-3564..TC-3569** into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`. **None of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`. **OPEN-18.** The floor of the free band is **TC-3570** and is itself being drawn on by **Doc 07 v2.7.0, in progress** for the clause-(e) rows — this register states the floor it can verify and does not pin an id it cannot see)* *(v1.7.1, **`OPEN-30`** — **narrowed again, from TC-3570–TC-3699 to TC-3592–TC-3699**, against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)**, in the same touch that advanced the Doc 07 pin. The superseded floor is quoted above and is not deleted. **Twenty-two ids of the reserved band have been drawn, and every one went to `TS-ADV-01…16`, not to a `TS-V1-*` suite:** **TC-3570..TC-3576** (`UT-0889`; Doc 07 v2.7.0 and v2.8.0) and **TC-3577..TC-3591** (`UT-0890`, fifteen cases; Doc 07 v2.9.0). **108 of the band's ids remain free — TC-3592–TC-3699 — and none of these six suites has minted an id**; each is still blocked on unbuilt capability or on `CON-015`, and **OPEN-18** is unchanged. **The suite drawing on the band is now named, which is what the v1.6.0 cycle-2 Low asked for**, and the v1.6.0 "does not pin an id it cannot see" caveat is **discharged rather than repeated**: Doc 07 v2.9.0 is **Approved**, so this register now states a **verified** allocation against a settled source instead of a floor it declined to rely on. **This document mints no `TC` and re-statuses none.**)* | per §0.4 |
````

---

### OP 11 — §14: the standing-instruction blockquote — record that the instruction was honoured

FIND:
````
> applied then: record the **actual** allocation, not the intended one. **Standing instruction:**
> any future version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2 in the
> same touch.
````
REPLACE WITH:
````
> applied then: record the **actual** allocation, not the intended one. **Standing instruction:**
> any future version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2 in the
> same touch.

> **_(v1.7.1 — the standing instruction above is OBSERVED, and this note records how, because an
> instruction honoured silently is indistinguishable from one forgotten.)_** v1.7.1 advances the
> Doc 07 **bibliographic** pin **v2.8.1 → v2.9.0 (Approved**, PASS 97%, 0C/0H/0M/4L, reviewer-qa,
> 2026-09-20**)** and re-reads **this table against Doc 07 v2.9.0 §2 in the same touch**. **Two rows
> moved:** `TS-ADV-01…16` gains **TC-3570–TC-3576** (`UT-0889`) and **TC-3577–TC-3591** (`UT-0890`,
> fifteen cases) — 69 cases / 49 automated / 20 Blocked — and the six `TS-V1-*` suites' reservation
> is narrowed **TC-3570–TC-3699 → TC-3592–TC-3699**. **Two rows were re-read and did not move:**
> `TS-ABSENCE` (TC-1600–TC-1614, TC-3569) and `TS-SCAFFOLD` (TC-3470–TC-3488, TC-3568) agree with
> Doc 07 v2.9.0 §2 exactly. **This closes `OPEN-30`** (the v1.6.0 cycle-2 carried Low ISS-08),
> whose trigger — *"the first touch of this document after Doc 07 v2.9.0 is Approved"* — **fired on
> 2026-09-20**. **This is the register's third reconciliation and the first that was not a
> correction of fiction:** v1.1.0 fixed a `UT`/`TC` reservation that described an intention rather
> than reality (`OPEN-26`(a), a **High**), v1.6.0 fixed a band the table had already lost (cycle-1
> ISS-01, a **Medium**), and v1.7.1 records a drawdown **in the same session it happened** — which
> is what the standing instruction was written to produce. **The remedy is unchanged and still
> standing: record the ACTUAL allocation, not the intended one, in the touch that moves the pin.**
````

---

### OP 12 — §0.4: the free-band echo re-cut

FIND:
````
The band from TC-3570 is itself being drawn on by **Doc 07 v2.7.0, in progress** for the
clause-(e) rows; this plan states the floor it can verify and does not pin a number it cannot
see. **None of the six `TS-V1-*` suites has minted an id.**)_
````
REPLACE WITH:
````
The band from TC-3570 is itself being drawn on by **Doc 07 v2.7.0, in progress** for the
clause-(e) rows; this plan states the floor it can verify and does not pin a number it cannot
see. **None of the six `TS-V1-*` suites has minted an id.**)_
_(v1.7.1, `OPEN-30`: **the reserved band is now `TC-3592–TC-3699`** — the sentence above reads
"`TC-3570–TC-3699`", which was true when written and is superseded here rather than rewritten.
Re-read against **Doc 07 v2.9.0 §2 (Approved 2026-09-20)** in the same touch that advanced the
Doc 07 pin, as §14's standing instruction requires. **Twenty-two ids have been drawn from the band
and all twenty-two went to `TS-ADV-01…16`** — **TC-3570..TC-3576** (`UT-0889`) and
**TC-3577..TC-3591** (`UT-0890`, fifteen cases) — **not to any of these six suites**. **108 ids
remain free, and none of the six suites has minted an id.** The suite drawing on the band is now
**named**, and the "does not pin a number it cannot see" caveat is **discharged**: Doc 07 v2.9.0 is
Approved, so this is a verified allocation rather than a declined reliance. See §14.)_
````

---

### OP 13 — Downstream: the reserved-band echo re-cut

FIND:
````
_(v1.6.0, cycle-1 ISS-01: this read "reserved at TC-3564–TC-3699"; Doc 07 v2.5.0 minted
TC-3564..TC-3569 into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, so the free band begins at
TC-3570 — see §14.)_
````
REPLACE WITH:
````
_(v1.6.0, cycle-1 ISS-01: this read "reserved at TC-3564–TC-3699"; Doc 07 v2.5.0 minted
TC-3564..TC-3569 into `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, so the free band begins at
TC-3570 — see §14.)_
_(v1.7.1, `OPEN-30`: **the band is now `TC-3592–TC-3699`.** Re-read against **Doc 07 v2.9.0 §2
(Approved 2026-09-20)** in the same touch that advanced the Doc 07 pin. Doc 07 has since drawn
**TC-3570..TC-3576** (`UT-0889`) and **TC-3577..TC-3591** (`UT-0890`, fifteen cases) — **all into
`TS-ADV-01…16`, none into a `TS-V1-*` suite** — so the free floor moves from TC-3570 to
**TC-3592**, leaving **108** ids. The sentence above is superseded on its band only; **`OPEN-18`
and the eleven adversarial suites reserved at TC-2800–TC-3199 are unchanged**. See §14.)_
````

---

### OP 14 — §22 Approvals: a v1.7.1 row above the retained v1.7.0 row

FIND:
````
| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
````
REPLACE WITH:
````
| Role | Name | Decision | Date | Notes |
|---|---|---|---|---|
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-20 | **v1.7.1, Status: In Review — rework cycle 2 of 5** against `artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md` (**FAIL 94%; 0C / 0H / 1 Medium / 2 Low**; neutral reviewer: **tester**, Ji-woo Park, PM-assigned before dispatch). **The v1.7.0 row below is retained verbatim as the record of that submission and is not edited.** **PATCH bump: no normative rule changes.** The withdrawal, S5 rule 4's count of ONE, S4's unchanged count, the `OPEN-27` closure, `OPEN-28` / `OPEN-29`, the pin sweep, the retained lapse analysis and the mechanical scan instruction are all carried forward **unchanged** — *"Nothing else needs reworking"* — and **the ruling remains Doc 03's, cited and not reasoned here**. **ISS-01 (Medium) FIXED — §11.2's tooling-register row, the sixth carve-out site and the eighth site overall.** The live row for the build-failing S5 denylist control still read *"Two carve-outs only: clause (a)'s mandated negated forms, and the named `anon`-badge exception"* — a current row in a current section, contradicting **S5 rule 4** ("ONE carve-out, and only one") on a count and recording as an **exception** precisely what rule 4 says MUST NOT be one, *because an exception asserts compliance and a failure asserts work*. Swept in the same annotate-don't-delete form as the other five sites; the two `PrivacyStatus` `anon` strings are recorded as a **ruled, remediation-pending FAILURE** tracked as **`OPEN-28`**. **The "every site" claim is corrected: there are SIX sites**, not five — §0.5 S5's exception, S5 rule 4's count, S4's scope-before-count sentence, §1.4's roll-call, §13's `OPEN-27` row, and **§11.2's tooling-register row**. The omission was **upstream**: Doc 03 v2.14.0's Downstream instruction enumerated five, which was its own cycle-1 **ISS-02 (Medium)**; **Doc 03 v2.14.1 corrected the instruction first**, and this version then swept the site — the instruction, then the site, in that order. **ISS-03 (Low) TAKEN** — the bump rationale is restated with the qualification it lacked: what v1.7.0 withdrew was **a carve-out to a specified-but-unimplemented build-failing control**; the `packages/ui` scan is **not implemented** and `PrivacyStatus` is mounted on **no shipped surface**, so **no build fails and no citizen sees either string**. **ISS-02 (Low) TAKEN — and `OPEN-30` is CLOSED rather than merely annotated.** **Doc 07 reached v2.9.0 (Approved)** on 2026-09-20 (PASS 97%, 0C/0H/0M/4L, reviewer-qa), which **fires `OPEN-30`'s trigger by name**. v1.7.1 advances the Doc 07 **bibliographic** pin **and** §14's **reconciliation** pin together, re-reading §14 against **Doc 07 v2.9.0 §2 in the same touch**, exactly as §14's standing instruction requires. **§14 re-cut:** `TS-ADV-01…16` = **TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, TC-3577–TC-3591** (69 / 49 automated / 20 Blocked); the six `TS-V1-*` suites' reservation narrowed **TC-3570–TC-3699 → TC-3592–TC-3699** (**22** ids drawn, all into `TS-ADV-01…16`; **108** free; **none of the six suites has minted an id**). `TS-ABSENCE` and `TS-SCAFFOLD` were re-read in the same pass and are **unchanged**. The **two echoes** (§0.4, Downstream) are re-cut with the rows. **This is a register correction, not a normative change** — it mints no `TC`, re-statuses none, records ids the tester owns and narrows a reservation this document owns — **which is why the bump stays a patch**. **Why this version did the reconciliation when the cycle-1 report advised against attempting it:** the report's advice was scoped to a **Low-only** rework and this rework carries a Medium; v1.7.0's stated deferral reason (Doc 07 mid-rework) **expired** when Doc 07 closed its loop at Approved; Doc 07 v2.9.0's own review raised the staleness as its ISS-01 and routed it to the architect *"now, while Doc 04 v1.7.1 is open"*; and the project-manager's cycle-2 dispatch directs the discharge. **Pins:** Doc 07 → **v2.9.0 (Approved)**; **Doc 08 → v2.12.1 (In Review)**, last Approved v2.11.3, **mid-rework in the tester's hands, not read as settled, and nothing here depends on its content or comments on it**; Doc 03 → **v2.14.1 (In Review)**, the matching half of this rework; Doc 02 v2.17.3, Doc 05 v2.5.0, Doc 06 v2.8.1, Doc 09 v1.9.0 unchanged. **No `TC`, `UT`, `US` or `OPEN-##` is minted, renumbered or reused; no test status is upgraded; no product code is written or edited.** **Not re-opened:** `OPEN-20`, `OPEN-28`, `OPEN-29`, §13's Definition-A blocker bullet, S5's four rules and the claims test, S4's (a)–(d) range, and the clause-(e) substance. **No Low is carried forward.** _(The v1.7.0 row immediately below is the record of the v1.7.0 submission, retained verbatim.)_ |
````

---

## Verification checklist for the applier

| # | Op | FIND anchor | Notes | Expected matches |
|---|---|---|---|---|
| 1 | Version bump | `Version:       1.7.0` | | 1 |
| 2 | Status block | 12 lines, `Status:        In Review — v1.7.0 …` → `… is withdrawn.` | | 1 |
| 3 | `Source:` pins | `               REL-TRUMOCRACY (docs/09-release-notes.md — **Approved v1.9.0**, the version in` | 15-space indent | 1 |
| 4 | Changelog | `Changelog:     2026-09-20 v1.7.0 — **\`OPEN-27\` CLOSED. …` | | 1 |
| 5 | **§11.2 row (the Medium)** | the `\| **_(v1.1.0)_ Second denylist over user-facing strings (build-failing)** \| …` row | **very long single line — whole and verbatim** | 1 |
| 6 | §1.4 roll-call | 3 lines ending `**currency** (v2.17.3).` | | 1 |
| 7 | §13 bullets | 5 lines, `  increment. **\`OPEN-30\`** …` → `… left inside a closed item.` | | 1 |
| 8 | **§13 `OPEN-30` row** | the `\| **OPEN-30** _(new v1.7.0 …)_ \| …` row | **very long single line — whole and verbatim** | 1 |
| 9 | **§14 `TS-ADV-01…16` row** | the `\| \`TS-ADV-01\` … \`TS-ADV-16\` \| …` row | **very long single line — whole and verbatim** | 1 |
| 10 | **§14 `TS-V1-*` row** | the `\| \`TS-V1-BALLOT\` · … \| …` row | **very long single line — whole and verbatim** | 1 |
| 11 | §14 standing instruction | 3 blockquote lines ending `> same touch.` | | 1 |
| 12 | §0.4 echo | 3 lines ending `**None of the six \`TS-V1-*\` suites has minted an id.**)_` | | 1 |
| 13 | Downstream echo | 3 lines ending `TC-3570 — see §14.)_` | | 1 |
| 14 | §22 Approvals | `\| Role \| Name \| Decision \| Date \| Notes \|` + separator | unique in the file | 1 |

**After applying:** the document is **v1.7.1, Status: In Review**, rework cycle 2 of 5, answering
`artifacts/reviews/04-test-strategy-master-plan-v1.7.0-technical-cycle1.md`. **Zero Lows carried.**
**`OPEN-30` is CLOSED.** `OPEN-20`, `OPEN-28` and `OPEN-29` remain open and untouched.
