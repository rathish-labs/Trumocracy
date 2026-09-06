# Anchored spec — Doc 02 v2.16.3 → v2.17.0 (FR-131 clause (e), endorsement-copy ruling)

**Author:** product-owner (Priya Raghunathan, Doc 02 owner) · **Date:** 2026-09-06
**Source ruling:** `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` (Ruling B)
**Target file:** `docs/02-requirements-srs.md` — **4 operations**

## Applier instructions

- Apply operations **in order**. Each `FIND` block MUST match **exactly once**.
- Every `FIND` starts at a line start and ends at a line end. Do **not** trim, reflow or normalise
  whitespace; the file uses a 15-column label gutter in the header block.
- **If any `FIND` fails to match, STOP and report back to the product-owner. Do NOT attempt a fuzzy
  or partial match, and do NOT apply the remaining operations.** OP 3 in particular is a single
  very long line; a mismatch means my transcription is wrong, not that the file is wrong.
- Do **not** whole-file `Write` `docs/02-requirements-srs.md` — it truncates.
- After applying: Doc 02 is **v2.17.0, Status In Review**. It re-enters the document-review loop
  (business mode, neutral reviewer assigned by the project-manager) before returning to Approved.

---

### OP 1 — docs/02-requirements-srs.md — bump Version to 2.17.0 and set Status to In Review

FIND:

````
Version:       2.16.3
Status:        Approved — 02-requirements-srs-v2.16.3-business-cycle4.md (PASS 96%, 0C/0H/0M/3L).
               Three Lows carried, all non-blocking and all recommended by the reviewer for
               cleanup on the next version that touches §13 or FR-064 rather than a dedicated
               rework cycle: ISS-01 (§4.6 FR-064's "v2 (deferred)" clause lacks the FR-023/FR-068
               cross-reference, open since v2.15.0); ISS-02 (the v2.16.0 changelog entry still
               carries an unquoted echo of the corrected mis-citation — confined to historical
               narration, not a live status field, which is why it is a Low here where the same
               defect class was a High in Doc 07/08); ISS-03 (a wording nit in §13 (h)).
````

REPLACE WITH:

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

---

### OP 2 — docs/02-requirements-srs.md — new change-history entry for v2.17.0

FIND:

````
Last updated:  2026-08-30
Change:        v2.16.3 (2026-08-30) — **One-line factual correction, routed in from the Doc 03
````

REPLACE WITH:

````
Last updated:  2026-09-06
Change:        v2.17.0 (2026-09-06) — **FR-131 (§4.45) amended: the honesty duty is extended from
               "v1 voting behaviour" to every v1 participation act.** Recorded by the product-owner
               ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md,
               Ruling B), presented for approver confirmation. **Why:** the 2026-09-05 FR-131 sweep
               (commit 0a5c542) correctly left the landing-page string "Support a new party with
               your name kept private" (and its Arabic mirror "بقاء اسمك سريًا") in place, because
               it describes petition **endorsement**, not voting, and FR-131's closing sentence was
               scoped literally to "v1 voting behaviour". The claim is nevertheless false twice
               over: the v1 operator database CAN link the account to the endorsement (necessarily
               so — FR-014's one-per-person rule and FR-015's withdraw-your-own rule cannot be
               satisfied in v1 without that link), and backing is **public by design** (Doc 14 §2.2:
               "a public act, on purpose"; "only back a petition if you are comfortable being seen
               to support it"; the fully private alternative is the `private_endorsement` charter
               option, a Phase-4 flag OFF in every v1 deployment). The landing page and the approved
               User Guide contradicted each other on the one fact that determines whether a citizen
               in a hostile jurisdiction is safe. **What changed:** new **clause (e)** — the duty is
               about **claims**, not a word list, and covers voting, endorsing/backing, joining or
               belonging to a party, and supporting a party, **in every language**, with the test
               being what an ordinary Grade-8 reader would take the claim to mean; and the closing
               sentence widened from "v1 voting behaviour" to "or any other v1 participation act",
               with an explicit carve-out preserving clause (a)'s mandated negated forms so the
               FR-131(a) ballot banner and UT-0887 are unaffected. The superseded closing-sentence
               wording is quoted verbatim in the requirement's Source annotation per the
               annotate-don't-delete convention. **What did NOT change:** no requirement is added or
               removed; FR-014, FR-015, FR-017, FR-082 and §16.3/§16.4/§16.5 are untouched; no ID is
               reused or renumbered; `private_endorsement` stays Phase 4; the endorsement design is
               not altered — this is a truth-in-copy amendment, not a policy change. **Also:** §13
               gains a tracked-routing block **(j)** for the enrolment/verification landing copy,
               which is explicitly **outside** clause (e) and **not ruled** on this evidence (H-17:
               the ID-check vendor does see the document; FR-132 §(e) is a contractual, not
               technical, control). Product-code corrections are routed to the engineer by the
               decision record (§8 R-1..R-4) and are not made by this document.
               v2.16.3 (2026-08-30) — **One-line factual correction, routed in from the Doc 03
````

---

### OP 3 — docs/02-requirements-srs.md — FR-131: add clause (e) and widen the closing sentence

> **This FIND is the entire single-line FR-131 table row (currently line 1131). It is very long.
> If it does not match exactly once, STOP and report — do not fuzzy-match.**

FIND:

````
| FR-131 | Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice (designed as DES-098) before the ballot is confirmed. The notice MUST state: **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot — where the platform is technically unable to see vote direction or party membership — is available when the platform upgrades to the Definition-B (v2) privacy layer. **(d) Open-tier non-counting disclosure (v2.12.0, Rathish, 2026-08-24):** in any v1 deployment using the FR-132/FR-123 counting-gate model, wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action — contributing to official party strength, casting a binding vote, or standing as a candidate — the UI MUST display a plain-language notice stating: (i) their current participation is open-tier only; (ii) that specific action requires government-ID verification (FR-123); (iii) what specifically does not count for them (official strength contribution, binding vote, candidacy); and (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)). This notice MUST be shown before the action is refused and MUST be non-dismissable. The notice MUST be: visible before confirmation; non-dismissable (the voter MUST acknowledge the notice to proceed); WCAG 2.2 AA compliant (DES-081); screen-reader accessible. The notice MUST appear on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation). The v1 product — its UI, README, and all public-facing materials — MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-V2-SPLIT.md; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (clause (d) added — open-tier non-counting disclosure obligation). Follows the disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure; DES-063 (v2 coercion-safe confirmation surface is the v2 successor to DES-098). DES-098 minted; US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129.)_ | BR-005, BR-009 | Must | Nadia Hassan | T, I |
````

REPLACE WITH:

````
| FR-131 | Wherever a vote is cast in a Definition-A (v1) deployment, the UI MUST display a plain-language honesty notice (designed as DES-098) before the ballot is confirmed. The notice MUST state: **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, and NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot — where the platform is technically unable to see vote direction or party membership — is available when the platform upgrades to the Definition-B (v2) privacy layer. **(d) Open-tier non-counting disclosure (v2.12.0, Rathish, 2026-08-24):** in any v1 deployment using the FR-132/FR-123 counting-gate model, wherever an open-tier (phone-verified but not ID-verified) participant attempts a FR-123 counting action — contributing to official party strength, casting a binding vote, or standing as a candidate — the UI MUST display a plain-language notice stating: (i) their current participation is open-tier only; (ii) that specific action requires government-ID verification (FR-123); (iii) what specifically does not count for them (official strength contribution, binding vote, candidacy); and (iv) how to become a counting member by completing the government-ID check (FR-132 §(b)). This notice MUST be shown before the action is refused and MUST be non-dismissable. The notice MUST be: visible before confirmation; non-dismissable (the voter MUST acknowledge the notice to proceed); WCAG 2.2 AA compliant (DES-081); screen-reader accessible. The notice MUST appear on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation). **(e) Honesty-of-claim across every v1 participation act (v2.17.0; product-owner ruling 2026-09-06, presented for approver confirmation; DECISIONS-2026-09-06-ENDORSEMENT-COPY.md):** the disclosure duty in this requirement is a duty about **claims**, not about a list of words, and it is **not confined to the ballot**. In a Definition-A (v1) deployment, no public-facing string, screen, README or other material — **in any language** — MUST assert that a **participation act** is unknowable to Trumocracy, where a *participation act* means casting a vote, endorsing or backing a petition, joining or belonging to a party, or supporting a party. **The test is what an ordinary reader at the Grade-8 reading level (NFR-023) would take the claim to mean, not whether a banned word appears:** a claim FAILS this clause if such a reader would conclude from it that Trumocracy itself cannot link them to the act, because under conventional authentication (ADR-024, ADR-025) the v1 operator database CAN — and for endorsement necessarily does, since FR-014 ("at most one endorsement per person per petition") and FR-015 (withdrawing one's own endorsement) cannot be satisfied in v1 without that link. Where a v1 participation act is additionally **public by design** — petition endorsement is (Doc 14 §2.2: "a public act, on purpose"; the fully private alternative is the `private_endorsement` charter option, a Phase-4 flag that is OFF in every v1 deployment) — the copy MUST say so plainly and MUST NOT describe that act as kept private, secret or hidden. Copy that states what the platform does **not publish**, and separately states what the platform's **own records can see**, SATISFIES this clause; the approved pattern is `apps/web/src/i18n/en.ts` `parties.joinPrivate`, guarded by UT-0869. This clause governs **participation acts only**: claims about personhood enrolment and identity verification are governed by FR-132 and by §16.4 H-16/H-17/H-18 and are expressly outside it (see §13 tracked routing (j)). The v1 product — its UI, README, and all public-facing materials, in every language — MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour **or any other v1 participation act as defined in clause (e)**, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees; where clause (a) mandates those words, they MUST appear only in the negated form clause (a) requires. _(Source: approver directive 2026-08-23, Rathish; DECISIONS-2026-08-23-V1-V2-SPLIT.md; approver ruling 2026-08-24, Rathish; DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md (clause (d) added — open-tier non-counting disclosure obligation). **Clause (e) and the widened closing sentence added at v2.17.0** by the product-owner ruling of 2026-09-06 (artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md, Ruling B), presented for approver confirmation; the class had by then been litigated twice string-by-string (party membership, 2026-09-05, UT-0869; petition endorsement, 2026-09-06) and clause (e) exists so it need not be litigated a third time. **SUPERSEDED closing-sentence wording, retained for the record, not deleted:** "The v1 product — its UI, README, and all public-facing materials — MUST NOT use the words 'private', 'anonymous', 'receipt-free', or 'secure' to describe v1 voting behaviour, and MUST NOT present itself as providing the Definition-B (v2) cryptographic guarantees." Clause (e) does not weaken clause (a): the mandated "NOT anonymous / NOT receipt-free / NOT coercion-resistant" text and its UT-0887 negation-aware guard are preserved by the carve-out. Follows the disclosed-limitation pattern: Doc 03 §13 Phase-1 public-tally disclosure; DES-063 (v2 coercion-safe confirmation surface is the v2 successor to DES-098). DES-098 minted; US/TC/RTM owed at next catch-up — same recorded-phasing posture as FR-121..FR-130 (FR-130 exception: TC-3511..TC-3516 now pass per Doc 07 v2.2.2 Approved; FR-130 RTM Must row remains OPEN for G-TRACE — no DES assigned in Doc 03 §5.2). TC OPEN — Phase 3 applies to FR-121..FR-129. Clause (e) TC owed: a UT-0869-pattern guard on the landing copy is routed to the engineer (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §5.4, R-3); the clause is otherwise verified by inspection (I).)_ | BR-005, BR-009 | Must | Nadia Hassan | T, I |
````

---

### OP 4 — docs/02-requirements-srs.md — §13: new tracked-routing block (j)

FIND:

````
---

## 14. Glossary
````

REPLACE WITH:

````
**Tracked routing (2026-09-06; recorded with the ENDORSEMENT-COPY ruling, product-owner, presented for approver confirmation; artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md):**

| Item | Description | Owner | Status |
|------|-------------|-------|--------|
| (j) Enrolment / verification landing copy — **not ruled** | The 2026-09-06 endorsement-copy ruling amended FR-131 with clause (e), which is scoped to **participation acts** (vote, endorse/back, join/belong, support) and expressly **not** to enrolment or identity-verification claims. Two landing strings make enrolment claims and are left **un-ruled on the evidence available**, rather than swept in silently. **(1)** `apps/web/src/i18n/en.ts` `home.steps[0].body` — "We never see your documents, your name or your address, and we do not keep them" — against **§16.4 H-17**: the third-party ID-check vendor **does** see the government-ID document, and FR-132 §(e)'s non-retention clause is a **legal and contractual** control, not a technical guarantee. Whether "we" honestly excludes a vendor the citizen never chose is a genuine question; the answer may be a wording change, a Doc 14 cross-reference, or nothing. **(2)** `home.promises[3]` — "We do not count your visits, and we do not keep a record of what you read here" — believed true (the §2.5 absence-test pattern; UT-0870) but **not verified against a deployed build**; it asserts a fact about production, so the **sre** is consulted before it is ruled. Neither is a v1 blocker and neither is part of the endorsement ruling. | product-owner (decision); sre (consulted on (2)) | OPEN — not ruled; non-blocking |

---

## 14. Glossary
````
