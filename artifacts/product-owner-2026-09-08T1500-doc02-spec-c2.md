# Anchored spec — product-owner, 2026-09-08T15:00 — Doc 02 v2.17.2 → v2.17.3 (cycle-2 rework)

```
Author:   Priya Raghunathan — Product Owner (owning role; the reviewer never edits)
Applies:  docs/02-requirements-srs.md ONLY  (v2.17.2 on disk → v2.17.3, Status In Review)
Against:  artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md
          (business, cycle 1 — FAIL 92%, 0C / 0H / 1M / 9L; reviewer: reviewer-qa, neutral,
          PM-assigned before dispatch)
Folds:    ISS-01 (Medium — the FAIL), ISS-02 (Low), ISS-03 (Low).
Carries:  ISS-04..ISS-10 (seven Lows) unchanged — NOT folded, per the dispatch.
Bump:     PATCH. Wording, status and citation corrections only; no normative meaning changes;
          no BR/FR/NFR/CON/RISK text, no §8 Gherkin, no §16 row is edited; no ID minted,
          reused or renumbered; Must count stays at 114.
Applier:  the role holding Edit. Every FIND is verbatim from the CURRENT file on disk
          (v2.17.2, re-read 2026-09-08T15:00) and matches EXACTLY ONCE.
Deletions: NONE. Every OP is annotate-in-place or insert; all prior text is re-emitted, and
          the two corrections inside dated narration (OP 3) are appended as marked
          corrections rather than rewrites, per annotate-don't-delete.
No OP for `Last updated:` — it already reads 2026-09-08 and the rework is the same day.
```

**What the Medium was, and what this spec does about it.** Doc 02 recorded, in a Status column,
that a remedy had been *applied* when the applying role had explicitly deferred that work. The
correction is not to update the claim with fresher news — it is to stop Doc 02 making the claim at
all. Doc 02 owns the **decision**; **Doc 06 §7 and the UT registry** own the **application**. Every
site below is corrected on that principle. Current fact, cited only where it belongs: Doc 06 is
**v2.8.0, Status In Review** (tester's technical review pending) and the engineer's note is
`artifacts/engineer-2026-09-08T1100-verify-and-hook.md`; the version is pinned only with its status
stated, and this document certifies nothing about the build.

---

### OP 1 — docs/02-requirements-srs.md — header: version 2.17.2 → 2.17.3, new Status block for cycle 2 (prior status retained verbatim below it; nothing deleted) — closes ISS-01 site 1, records ISS-02 and ISS-03

FIND:

````
Version:       2.17.2
Status:        In Review — v2.17.2, a **PATCH that touches the §13 tracked-routing block only**.
````

REPLACE WITH:

````
Version:       2.17.3
Status:        In Review — v2.17.3, **review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (business,
               cycle 1 — **FAIL 92%, 0 Critical / 0 High / 1 Medium / 9 Low**; reviewer:
               reviewer-qa, neutral, PM-assigned **before dispatch** per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md; the same neutral
               reviewer is assigned for cycle 2). The reviewer reconstructed v2.17.2
               byte-for-byte from v2.17.1 plus the rework spec and so verified the "no normative
               change" claim **mechanically** rather than by assertion; every outward citation in
               the new §13 (j)(3) resolved. What failed was a **build-state assertion**: (j)(3)
               recorded, as dated completed fact, an application that had not occurred when the
               version was authored, and pinned a Doc 06 version that did not then exist. A PATCH
               bump is correct: the fixes are wording, status and citation corrections with **no
               normative meaning change**.
               **Fixed, by issue id:** ISS-01 (Medium — the FAIL) — the **RULING** (approver
               decision 1 of 2026-09-08 plus the product-owner's remedy (a); closed) is separated
               from the **APPLICATION** (routed to the engineer; its status is reported in **Doc 06
               §7 and the UT registry** — Doc 06 v2.8.0, **Status: In Review**, the tester's
               technical review pending — and is **not** certified by this document); the
               present-indicative build claims in §13 (j)(3) are recast as the decided remedy;
               and the correction is mirrored at every site the reviewer named — this block, the
               v2.17.3 Change entry, the v2.17.2 Change entry, and the §13 (j) row. The governing
               convention, adopted here: **a document records the decision it owns and routes the
               application; only the applying role's document reports that the application
               happened.** ISS-02 (Low) — the H-set citations are distinguished: FR-131 clause
               (e)'s carve-out set is §16.4 **H-16/H-17/H-18**, and **H-15** is cited
               **additionally** for the one-person-one-vote point; corrected at all three
               occurrences including the spaced variant in the v2.17.2 Change entry, and H-16
               added to the (j)(3) evidence list, being the provision most directly answering the
               quoted string "a short code … which cannot be traced back to you". ISS-03 (Low) —
               §12 session-scope entries added for **both** v2.17.2 and v2.17.3.
               **Carried, not folded — the seven Lows (ISS-04..ISS-10 of the cycle-1 report):**
               all re-confirmed present, unchanged in severity, none raised above Low, and
               v2.17.3 touches none of their sites — §8 scenario numbering (1-5,8,9), the three
               "Scenario 8" pointers where Scenario 9 also applies, the two Scenario-8 steps that
               restate rules, the capitalised "Grade-8" in dated narration (record-only), §4.6
               FR-064's missing FR-023/FR-068 cross-reference, the v2.16.0 changelog echo, and
               the §13 (h) wording nit. Their routing is unchanged: ISS-05 remains the one worth
               doing first, on the next version that touches §8.
               **On dated narration:** the retained v2.17.2 text below is not rewritten. Where it,
               or the v2.17.2 Change entry, reads as asserting that the remedy was **applied**,
               this block, the v2.17.3 Change entry and §13 (j) govern.
               **Prior status, retained verbatim:**
               In Review — v2.17.2, a **PATCH that touches the §13 tracked-routing block only**.
````

---

### OP 2 — docs/02-requirements-srs.md — header: insert the v2.17.3 Change entry above the v2.17.2 entry (the v2.17.2 entry is re-emitted, not replaced) — closes ISS-01 site 2, records ISS-02 and ISS-03

FIND:

````
Change:        v2.17.2 (2026-09-08) — **PATCH; §13 tracked-routing block only; no normative
               change.** Records **approver decision 1** of 2026-09-08
````

REPLACE WITH:

````
Change:        v2.17.3 (2026-09-08) — **Review-loop rework, cycle 2 of 5**, against
               artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (FAIL 92%;
               **ISS-01 Medium, ISS-02/03 Low**). PATCH: wording, status and citation corrections
               only — **no normative meaning changes**, no BR/FR/NFR/CON/RISK text, no §8 Gherkin
               and no §16 row edited, no ID minted, reused or renumbered, Must count stays at 114.
               **ISS-01 (Medium — the FAIL).** §13 (j)(3) asserted a build state this document
               cannot verify: the Status column read "CLOSED — ruled and applied 2026-09-08", the
               body made present-indicative build claims ("the route **is** flag-gated…", "the nav
               link **is** hidden", "the route **renders**…"), and it pinned "Doc 06 v2.8.0",
               which did not exist when v2.17.2 was authored — while both role session notes
               recorded the application as **pending**. v2.17.3 **separates the RULING from the
               APPLICATION**: the ruling (approver decision 1, artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md
               §1, plus the product-owner's remedy (a), ibid. §5) is **CLOSED 2026-09-08**; the
               application is **routed to the engineer** and its status is reported in **Doc 06 §7
               and the UT registry** — Doc 06 v2.8.0, **Status: In Review** (the tester's
               technical review is pending), the artifact that reports whether and when the remedy
               landed. The build claims are recast as the decided remedy, and the correction is
               mirrored in the header Status block, in the v2.17.2 entry below, and in the §13 (j)
               row. **The convention this adopts:** a document records the decision it owns and
               routes the application; only the applying role's document reports that the
               application happened. **ISS-02 (Low).** The H-set citations are distinguished —
               FR-131 clause (e)'s carve-out set is §16.4 **H-16/H-17/H-18**, with **H-15** cited
               **additionally** for the one-person-one-vote point — at all three occurrences,
               including the spaced variant in the v2.17.2 entry below; and **H-16** is added to
               the (j)(3) evidence list, being the provision most directly answering the quoted
               string "a short code … which cannot be traced back to you" (the operator database
               holds `subject_id_hash` and `phone_hash` as derived identity data). **ISS-03
               (Low).** §12 session-scope entries added for **both** v2.17.2 and v2.17.3.
               **Carried:** the seven Lows ISS-04..ISS-10 remain open and are disclosed in the
               Status block; v2.17.3 touches none of §8, §4.6 or the dated changelog narration,
               except to append the two marked corrections named above.
               _Previous entry:_
               v2.17.2 (2026-09-08) — **PATCH; §13 tracked-routing block only; no normative
               change.** Records **approver decision 1** of 2026-09-08
````

---

### OP 3 — docs/02-requirements-srs.md — header, v2.17.2 Change entry: append the ISS-01 correction marker to "ruled and applied", and correct the spaced H-set citation (dated narration is annotated in place, never rewritten; no text is removed) — closes ISS-01 site 3 and ISS-02 site 3

FIND:

````
               its status: (1) `home.steps[0].body` OPEN — not ruled; (2) `home.promises[3]` OPEN
               — not ruled, sre consulted; (3) the `/verify` page copy **CLOSED — ruled and
               applied 2026-09-08**. Nothing else in this document is edited: FR-131 and FR-132
               are unamended, and the remedy discharges duties those requirements already impose
               (FR-132 §(d) honesty posture, §(e) vendor non-retention) together with the phasing
               truths already recorded at §16.4 H-15 / H-17 / H-18 — no new requirement is minted.
````

REPLACE WITH:

````
               its status: (1) `home.steps[0].body` OPEN — not ruled; (2) `home.promises[3]` OPEN
               — not ruled, sre consulted; (3) the `/verify` page copy **CLOSED — ruled and
               applied 2026-09-08**. _**Corrected at v2.17.3 (cycle-1 ISS-01, Medium):** "and
               applied" overstated the position when this entry was authored. The **ruling** was
               closed on 2026-09-08; the **application** was routed to the engineer and had not
               yet occurred — both role session notes recorded it as pending. Read (3) as
               **RULED 2026-09-08; application routed to the engineer and reported in Doc 06 §7
               and the UT registry**, per the v2.17.3 entry above and §13 (j). The original
               wording is retained per annotate-don't-delete._
               Nothing else in this document is edited: FR-131 and FR-132
               are unamended, and the remedy discharges duties those requirements already impose
               (FR-132 §(d) honesty posture, §(e) vendor non-retention) together with the phasing
               truths already recorded at §16.4 H-16 / H-17 / H-18 — the carve-out set FR-131
               clause (e) itself enumerates — with H-15 cited additionally for the
               one-person-one-vote point _(citation set corrected at v2.17.3, cycle-1 ISS-02; this
               entry as authored read "H-15 / H-17 / H-18", which dropped H-16)_ — no new
               requirement is minted.
````

---

### OP 4 — docs/02-requirements-srs.md — §12: add the v2.17.2 and v2.17.3 session-scope entries at the end of the section, before the section rule (insert only; the §12 v2.17.1 entry and the `## 13.` heading are untouched) — closes ISS-03

FIND:

````
---

## 13. Open issues / TBD
````

REPLACE WITH:

````
**v2.17.2 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative text touched — the header and the §13 tracked-routing block only, verified byte-for-byte by the cycle-1 reviewer. Records **approver decision 1** of 2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1: the `/verify` page states an unbuilt enrolment guarantee as current fact; a public surface MUST NOT do so; the (a)/(b) remedy choice delegated to the product-owner) and the **product-owner's choice** under that delegation (ibid. §5: remedy **(a)** — flag-gate `/verify` behind `enrolment_ui`, dev on / staging and prod off, with an honesty placeholder whose normative English text is fixed at §5.3 and Arabic draft at §5.4, the latter subject to §13 tracked deferral (b)). Widens **§13 tracked routing (j)** from the two landing strings to a three-item register that also carries the `/verify` page copy; items (1) and (2) remain **un-ruled** and are expressly not resolved by the (3) ruling. **No BR/FR is minted for (3):** the duty already exists at FR-132 §(d) (honesty posture) and §(e) (vendor non-retention), and the phasing truths are already recorded at §16.4 H-15/H-16/H-17/H-18 — the gap was routing, not requirements. The application of remedy (a) is routed to the engineer; the guard's TC row is owed to the tester at the next Doc 07/08 touch.

**v2.17.3 session scope:** No new FRs minted. No IDs minted, reused or renumbered. Must count stays at 114. No normative meaning changed — this is the **cycle-2 rework** of v2.17.2 against artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md (FAIL 92%, 0C/0H/1M/9L). **ISS-01 (Medium):** §13 (j)(3) is separated into the **RULING** (approver decision 1 + the product-owner's remedy (a); closed 2026-09-08) and the **APPLICATION** (routed to the engineer; status reported in Doc 06 §7 and the UT registry — Doc 06 v2.8.0, Status **In Review**, tester's technical review pending — and not certified here); the present-indicative build claims are recast as the decided remedy; the correction is mirrored in the header Status block, the v2.17.3 Change entry, the v2.17.2 Change entry and the (j) row. The convention adopted: a document records the decision it owns and routes the application; only the applying role's document reports that the application happened. **ISS-02 (Low):** the H-set citations are distinguished — clause (e)'s carve-out set is §16.4 H-16/H-17/H-18, with H-15 cited additionally for the one-person-one-vote point — at all three occurrences including the spaced variant in the v2.17.2 change entry, and H-16 is added to the (j)(3) evidence list. **ISS-03 (Low):** this entry and the v2.17.2 entry added. The seven Lows carried from the cycle-1 report (ISS-04..ISS-10) are carried again and remain open — v2.17.3 touches none of §8, §4.6 or the dated changelog narration beyond the two marked corrections.

---

## 13. Open issues / TBD
````

---

### OP 5 — docs/02-requirements-srs.md — §13 (j) row: separate the ruling from the application in the title cell, the body and the Status column; recast the build claims as the decided remedy; pin Doc 06 v2.8.0 only with its status; add H-16 to the (3) evidence list (items (1) and (2) are re-emitted verbatim; nothing is deleted) — closes ISS-01 sites 4-5 and ISS-02 site 1

FIND:

````
| (j) Enrolment / verification copy — **three items; (3) ruled 2026-09-08, (1) and (2) still un-ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the **Doc 06 §2.5** absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. **(3) Added 2026-09-08 — the `/verify` page copy:** `apps/web/src/app/verify/page.tsx` and the `verify.*` block of `en.ts` / `ar.ts` state the verify-and-discard enrolment design as **current fact** — "The document never leaves your phone", "a short proof … and nothing else", "a short code … which cannot be traced back to you", plus an issuer chooser offering a plural, at-least-one-non-government choice. The design is true by design (FR-132 §(b), DES-100, ADR-003) and **not yet true in code**: enrolment is unbuilt (`StubIdDocumentChecker.IS_INSECURE_MOCK()` = true, Doc 06 §7), the v1 check is a third-party vendor document check the vendor **does** see (H-17), non-retention is contractual not technical (FR-132 §(e)), same-document deduplication is not one-person-one-vote (H-15), `subject_id_hash` is a retained derived identifier (H-18), issuer plurality is **not in effect** in the single-rail Phase-1 pilot (OI-20, Doc 14 §1.2), and no enrolment sprint may begin until **CON-015** clears. **(3) is RULED and CLOSED:** approver decision 1 of 2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1) held that a public surface MUST NOT state an unbuilt guarantee as current fact and delegated the remedy choice to the product-owner; the product-owner chose **remedy (a)** (ibid. §5) — the route is flag-gated out of the public v1 build behind `enrolment_ui` (dev on; staging and prod off; `removeBy` = the enrolment sprint), the header nav link is hidden when the flag is off, and the route renders a short honesty placeholder whose **normative** English text is fixed at that record §5.3 (Arabic draft §5.4, subject to tracked deferral (b) native-speaker review). No string is deleted — the design copy is retained for the enrolment sprint and renders in `dev` only. Applied by the engineer (Doc 06 v2.8.0) with a UT guard specified at §5.5–§5.6 of that record; the TC row is owed to the tester at the next Doc 07 / Doc 08 touch. | product-owner (decision); sre (consulted on (2)); engineer (applies (3)) | **PARTIAL** — (1) OPEN, not ruled; (2) OPEN, not ruled, sre consulted; (3) **CLOSED — ruled and applied 2026-09-08**. None of the three is a v1 blocker. |
````

REPLACE WITH:

````
| (j) Enrolment / verification copy — **three items; (3) RULED 2026-09-08 and its application ROUTED, (1) and (2) still un-ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the **Doc 06 §2.5** absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. **(3) Added 2026-09-08 — the `/verify` page copy:** `apps/web/src/app/verify/page.tsx` and the `verify.*` block of `en.ts` / `ar.ts` state the verify-and-discard enrolment design as **current fact** — "The document never leaves your phone", "a short proof … and nothing else", "a short code … which cannot be traced back to you", plus an issuer chooser offering a plural, at-least-one-non-government choice. The design is true by design (FR-132 §(b), DES-100, ADR-003) and **not yet true in code**: enrolment is unbuilt (`StubIdDocumentChecker.IS_INSECURE_MOCK()` = true, Doc 06 §7), the v1 check is a third-party vendor document check the vendor **does** see (H-17), non-retention is contractual not technical (FR-132 §(e)), same-document deduplication is not one-person-one-vote (H-15), `subject_id_hash` is a retained derived identifier (H-18) and the operator database holds it and `phone_hash` as derived identity data — so "cannot be traced back to you" is not true of Trumocracy's own records (H-16), issuer plurality is **not in effect** in the single-rail Phase-1 pilot (OI-20, Doc 14 §1.2), and no enrolment sprint may begin until **CON-015** clears. **(3) — THE RULING (closed 2026-09-08):** approver decision 1 of 2026-09-08 (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1) held that a public surface MUST NOT state an unbuilt guarantee as current fact and delegated the remedy choice to the product-owner; the product-owner chose **remedy (a)** (ibid. §5). **The decided remedy is:** the route is flag-gated out of the public v1 build behind an `enrolment_ui` feature flag (dev on; staging and prod off; `removeBy` = the enrolment sprint); the header nav link is not rendered when the flag is off; and the route serves a short honesty placeholder whose **normative** English text is fixed at that record §5.3 (Arabic draft §5.4, subject to tracked deferral (b) native-speaker review). No string is deleted — the design copy is retained for the enrolment sprint and renders in `dev` only. **(3) — THE APPLICATION (routed, not certified here):** building the remedy is routed to the **engineer**, together with the 15-assertion guard specified at that record §5.5–§5.6; **its status is reported in Doc 06 §7 and the UT registry — Doc 06 v2.8.0, Status: In Review (the tester's technical review is pending) — and is not certified by this document.** Doc 02 records the decision it owns and routes the application; only the applying role's document reports that the application happened. The guard's TC row is owed to the tester at the next Doc 07 / Doc 08 touch. | product-owner (decision); sre (consulted on (2)); engineer (applies (3)) | **PARTIAL** — (1) OPEN, not ruled; (2) OPEN, not ruled, sre consulted; (3) **RULED 2026-09-08** (approver decision 1 + product-owner remedy (a)) — **application routed to the engineer; its status is recorded in Doc 06 §7 and the UT registry, not here**. None of the three is a v1 blocker. |
````

---

### OP 6 — docs/02-requirements-srs.md — §13 widening note: distinguish FR-131 clause (e)'s carve-out set (H-16/H-17/H-18) from the additional H-15 citation, at both occurrences (no text removed; the note's reasoning is unchanged) — closes ISS-02 sites 1-2

FIND:

````
> **Widening note (2026-09-08).** Item (j) was recorded on 2026-09-06 as "the two landing
> strings". It is widened here to a **three-item** register because the defect class is the same
> one — a v1 surface asserting an enrolment property that FR-131 clause (e) expressly does not
> reach and that FR-132 §(d)/(e) and §16.4 H-15/H-17/H-18 record as untrue in code — and because
> the 2026-09-06/07 qualification of the README/CONTRIBUTING `/verify` citation ("the page's own
> copy is in no register") was **confirmed** by the approver on 2026-09-08
> (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §2) with the direction that §13 (j) be
> updated by the product-owner to record the page ruling. This is that register entry.
> **No requirement is minted for (3):** the duty it discharges already exists (FR-132 §(d)
> honesty posture, §(e) vendor non-retention) and the phasing truths are already recorded
> (§16.4 H-15/H-17/H-18) — the gap was routing, not requirements. Items (1) and (2) remain open
> on the evidence available and are **not** resolved by the (3) ruling; a future ruling on either
> must be recorded here, not inferred from this one.
````

REPLACE WITH:

````
> **Widening note (2026-09-08).** Item (j) was recorded on 2026-09-06 as "the two landing
> strings". It is widened here to a **three-item** register because the defect class is the same
> one — a v1 surface asserting an enrolment property that FR-131 clause (e) expressly does not
> reach. **Clause (e) enumerates that carve-out set as FR-132 §(d) and §16.4 H-16/H-17/H-18**;
> **H-15** is cited **additionally** in this item, for the one-person-one-vote point, which
> clause (e)'s list does not carry. Those provisions, together with FR-132 §(d)/(e), record the
> claims in question as untrue in code. The register also widens because
> the 2026-09-06/07 qualification of the README/CONTRIBUTING `/verify` citation ("the page's own
> copy is in no register") was **confirmed** by the approver on 2026-09-08
> (artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §2) with the direction that §13 (j) be
> updated by the product-owner to record the page ruling. This is that register entry.
> **No requirement is minted for (3):** the duty it discharges already exists (FR-132 §(d)
> honesty posture, §(e) vendor non-retention) and the phasing truths are already recorded
> (§16.4 H-15/H-16/H-17/H-18 — the carve-out set plus the one-person-one-vote provision) — the
> gap was routing, not requirements. Items (1) and (2) remain open
> on the evidence available and are **not** resolved by the (3) ruling; a future ruling on either
> must be recorded here, not inferred from this one.
> **Recorded at v2.17.3 (cycle-1 ISS-01):** this item records a **ruling** and **routes** its
> application. The application's status belongs to the applying role's document (Doc 06 §7 and
> the UT registry), never to this register.
````

---

## Applier checklist

| # | OP | Site | Closes | Deletes anything? |
|---|----|------|--------|-------------------|
| 1 | Header `Version:` + `Status:` | lines 5-6 | ISS-01 (mirror site), records ISS-02 / ISS-03 | No — prior status re-emitted verbatim under an explicit label |
| 2 | Header `Change:` — new v2.17.3 entry | line 64-65 | ISS-01 (mirror site), records ISS-02 / ISS-03 | No — v2.17.2 entry re-emitted and continues |
| 3 | Header `Change:` — v2.17.2 entry corrections | 6 lines | ISS-01 (mirror site), ISS-02 (spaced variant) | No — original wording retained, corrections appended |
| 4 | §12 session scope | before `## 13.` | ISS-03 | No — insert only |
| 5 | §13 (j) row | 1 line | ISS-01 (primary) | No — items (1)/(2) re-emitted verbatim |
| 6 | §13 widening note | 13 lines | ISS-02 (2 occurrences) | No |

After application: `Version:` reads `2.17.3`, `Status:` begins `In Review`, `Last updated:` is
already `2026-09-08`. The gate reads only `Version:`, and the two embedded "retained verbatim"
blocks contain no live approval it could parse. Expect
`node hooks/run_gates.cjs --audit` to report Doc 02 v2.17.3 as blocking until reviewer-qa's
cycle-2 report exists — that is the loop working, not a defect.
