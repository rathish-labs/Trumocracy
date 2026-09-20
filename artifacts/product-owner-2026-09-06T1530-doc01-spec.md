# Anchored spec — Doc 01 v2.0.0 → v2.1.0 (public-release posture banner + Classification)

```
Author:        product-owner (Priya Raghunathan)
Date:          2026-09-06T15:30
Target file:   docs/01-press-release-prfaq.md   (ONE file — no other file is touched)
Applier:       project-manager (mechanical FIND/REPLACE; four-backtick fences)
Trigger:       Approver ruling 2026-09-06 (Rathish Kumar), ruling 5 —
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11 and
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md:
               "Doc 01 gets a banner: full v2 target vision, NOT the current v1 state."
               Finding of record: artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md
               §1 row E-8 and §6.
Result:        docs/01-press-release-prfaq.md v2.1.0, Status: In Review,
               Classification: Public. Neutral reviewer: technical-writer, business mode.
Ops:           8
Invariants:    NO requirement, tenet, metric, FAQ, scope item or open item is added, removed,
               reworded or renumbered. Docs 02, 05, 13 and all product code are UNTOUCHED.
```

## Reading order for the applier

Apply OP 1 … OP 8 in order. Every `FIND` block below is copied verbatim from
`docs/01-press-release-prfaq.md` at v2.0.0 and matches **exactly once**. Every non-blank `FIND`
line reappears in its `REPLACE` block — no operation deletes a line. Existing lines are never
reflowed.

## Source of every factual claim in the new text

| New claim | Source (approved wording reused, not invented) |
|---|---|
| Written as if launched 2027-06-01; describes the Definition-B (v2) design | Doc 01 §B dateline (unchanged); Doc 02 §16.1 / §16.3 |
| anonymous membership · private receipt-free ballot · zero-knowledge enrolment are v2 and **not built** | Doc 02 §16.3 (FR-030, FR-031, FR-082, FR-086 `DEFERRED-v2`), §16.4 H-01…H-04, §16.5 (rulings of 2026-08-23) |
| working design + three features behind flags: party creation; joining and membership; proposals and debate | PUBLIC-RELEASE-READINESS-2026-09-06 §4 and §6; Doc 09 §0 "What this document covers" |
| development mocks — `IS_INSECURE_MOCK` verifiers accept any proof | PUBLIC-RELEASE-READINESS §6; Doc 09 §0 / REL-LIM-01 |
| deployed nowhere; never used for a real vote | Doc 09 §0 ("merged to trunk and deployed nowhere"; release HALTED, MUST NOT be promoted) |
| v1 voting is NOT anonymous, NOT receipt-free, NOT coercion-resistant; the database can see vote direction and party membership | Doc 02 §4.45 FR-131 clause (a)+(b); Doc 14 §2.6 (approved plain language) |
| casting a vote is not yet a working screen in 0.1.0 | Doc 14 §0.1, §2.4, §2.6, §3.1 |
| backing a petition is a public act, on purpose | Doc 14 §2.2, quoted in Doc 02 FR-131 clause (e) |
| nobody outside Trumocracy sees it on a public page, but our own records can, and a government could order us to hand them over | Doc 14 §0.1 and §2.6 (verbatim sense) |
| "Do not use this software to organise where being identified could hurt you." | PUBLIC-RELEASE-READINESS §6 (approver-facing draft); Doc 14 §0.1 ("Please do not use this release to organise for real…") |
| Grade-8-reader test, claims not words | Doc 02 FR-131 clause (e); NFR-023 |

---

Commentary for OP 1: the header must carry the v2.0.0 approval record forward (that approval and
the pending Gate-1 decision are unchanged), state what v2.1.0 changed, cite the ruling and this
spec, and flip `Classification` — "Internal" cannot stay on a document published with the
repository (E-8). The v2.0.0 and v1.0.0 change-log entries sit below the `Change log:` line and
are outside the FIND, so they survive untouched.

### OP 1 — docs/01-press-release-prfaq.md — header: version, status, classification, date, change-log entry

FIND:
````
Version:       2.0.0
Status:        Approved (review loop, cycle 1 PASS 97%; Gate 1 decision pending)
Classification:Internal
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Product, Engineering, Design
Last updated:  2026-08-10
Change log:
````
REPLACE WITH:
````
Version:       2.1.0
Status:        In Review — v2.1.0. Public-release posture rework of 2026-09-06: adds §0, the
               mandatory "read this first" banner stating that this PR-FAQ describes the
               Definition-B (v2) target vision and that none of it is built; adds four
               "(v2 target — see §0)" markers to the passages most likely to be read in
               isolation; changes Classification from Internal to Public ahead of the
               repository going public. Directed by the approver ruling of 2026-09-06
               (Rathish Kumar, ruling 5) recorded in
               artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11; finding of
               record artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md §1 row E-8;
               changes specified in artifacts/product-owner-2026-09-06T1530-doc01-spec.md.
               Neutral reviewer: technical-writer, business mode, per
               artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md.
               **v2.0.0 record, carried forward:** Approved (review loop, cycle 1 PASS 97%;
               Gate 1 decision pending). That approval and that pending Gate-1 decision are
               unchanged by this version, which adds no requirement, tenet, metric, FAQ or
               scope item and removes none.
Classification: Public — published with the repository. This document is the v2 target vision,
               not a description of what is built today; read §0 first.
Owner:         Priya Raghunathan — Product Owner
Approvers:     Gate 1 — Product, Engineering, Design
Last updated:  2026-09-06
Change log:
  v2.1.0 — 2026-09-06 — Public-release posture. Adds §0 "Read this first" (this PR-FAQ is the
             Definition-B (v2) target vision, written as if launched 2027-06-01; none of it is
             built; what exists is a working design plus three features behind flags against
             development mocks, deployed nowhere; v1 voting is NOT anonymous, NOT receipt-free
             and NOT coercion-resistant). Adds "(v2 target — see §0)" markers at §A tenet 2,
             §A tenet 4, the head of §B, the §E1 data-and-privacy answer, the §E1 coercion
             answer and the §E3 member-list answer. Changes Classification Internal → Public.
             No requirement, tenet, metric, FAQ, scope item or open item is added, removed,
             reworded or renumbered. Approver ruling 2026-09-06 (ruling 5); spec
             artifacts/product-owner-2026-09-06T1530-doc01-spec.md; FR-131 clause (e)
             (Doc 02 §4.45, v2.17.0) is the standard applied.
````

---

Commentary for OP 2: the banner is placed as **§0**, immediately after the "Based on" note and
before §A, so it is the first thing read after the header and precedes every claim it qualifies.
The `---` separator and the `## A. Tenets` heading are re-emitted unchanged; nothing between them
is disturbed. Language is Grade-8 (NFR-023) and reuses the approved wording of Doc 14 §0.1/§2.6,
Doc 09 §0 and the README draft in PUBLIC-RELEASE-READINESS §6. The banned words appear only in the
negated form FR-131 clause (a) mandates, or attached explicitly to the v2 design.

### OP 2 — docs/01-press-release-prfaq.md — insert §0, the "read this first" v1/v2 posture banner

FIND:
````
> Every promise below becomes an indexed requirement in `docs/02-requirements-srs.md`.

---

## A. Tenets (the principles for this product)
````
REPLACE WITH:
````
> Every promise below becomes an indexed requirement in `docs/02-requirements-srs.md`.

---

## 0. Read this first — this document is the target vision (v2), not what exists today

> **⚠️ READ THIS FIRST — this document is the target vision (v2), not what exists today.**
>
> This PR-FAQ is written **as if the finished product had already launched on 2027-06-01**. It
> describes the **Definition-B (v2)** design: anonymous membership, a private and receipt-free
> ballot, and zero-knowledge enrolment. **None of that is built.** Read every promise below —
> every tenet, every line of the press release, every metric, every FAQ answer — as a target we
> intend to reach, not as a description of the software in this repository.
>
> **What exists today** is a working design plus **three application features built behind
> feature flags**: party creation; joining and membership; and proposals and debate. They run
> against **development mocks** — the zero-knowledge verifiers are `IS_INSECURE_MOCK` stubs that
> accept any proof. The software is **deployed nowhere** and has **never been used for a real
> vote**.
>
> **In the current version (v1), voting is NOT anonymous, NOT receipt-free and NOT
> coercion-resistant. Trumocracy's own database can see how each account voted and which party
> each account belongs to.** Casting a vote is not yet a working screen in release 0.1.0; this is
> what will be true the day it ships (Doc 14 §2.6). **Backing a petition is a public act, on
> purpose** (Doc 14 §2.2). Nobody outside Trumocracy sees any of this on a public page — but our
> own records can, and a government could order us to hand them over.
>
> **Do not use this software to organise where being identified could hurt you.**
>
> **Where to read what is true today, instead of this document:**
> `README.md`; **Doc 14 §0.1 and §2.6** (`docs/14-user-guide.md`) for the plain-language warning;
> and **Doc 09 §0** (`docs/09-release-notes.md`), which records that release 0.1.0 has **not**
> been approved and **MUST NOT** be promoted to production. The full v1 / v2 split, requirement
> by requirement, is **Doc 02 §16** (`docs/02-requirements-srs.md`) — §16.4 is an honesty
> register listing every guarantee a reader might assume and what v1 actually does, and §16.5
> records the approver's rulings of 2026-08-23 that accepted v1 as a **disclosed non-anonymous
> product**.
>
> The rule this banner exists to satisfy is **`FR-131`** (Doc 02 §4.45), and in particular
> **clause (e)**: the test is **what an ordinary Grade-8 reader would take a claim to mean**, not
> whether a banned word appears. If any sentence in this document would leave such a reader
> believing that Trumocracy cannot today link a person to a vote, to a party membership or to a
> petition they backed, **this banner overrides it**.
>
> _(Added at v2.1.0 by the approver ruling of 2026-09-06, Rathish Kumar — ruling 5, recorded in
> `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11; finding of record
> `artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md` §1 row E-8 and §6. Every sentence
> above reuses wording already approved in Doc 14 §0.1/§2.6, Doc 09 §0 or Doc 02 §16; it makes no
> new claim.)_

---

## A. Tenets (the principles for this product)
````

---

Commentary for OP 3: tenet 2 is the anonymity tenet and is quotable on its own. The marker is
appended as a new line; the three existing lines are re-emitted byte-for-byte and are not
reflowed. `H-02` is the matching row of the Doc 02 §16.4 honesty register.

### OP 3 — docs/01-press-release-prfaq.md — §A tenet 2: inline v2-target marker

FIND:
````
2. **An ordinary member is invisible; a candidate for office is not.** Anonymity protects the
   powerless; disclosure binds the powerful. We will accept a worse product experience before we
   accept a design that lets anyone build a list of who belongs to which party.
````
REPLACE WITH:
````
2. **An ordinary member is invisible; a candidate for office is not.** Anonymity protects the
   powerless; disclosure binds the powerful. We will accept a worse product experience before we
   accept a design that lets anyone build a list of who belongs to which party.
   **(v2 target — see §0.)** In v1 that list exists: the operator's own database links each
   account to the party it joined (Doc 02 §16.4 `H-02`; `FR-082` is classed `DEFERRED-v2`).
````

---

Commentary for OP 4: tenet 4 is the receipt-freeness / coercion tenet — the second passage a
reader is most likely to quote in isolation. Marker appended; existing lines untouched.

### OP 4 — docs/01-press-release-prfaq.md — §A tenet 4: inline v2-target marker

FIND:
````
4. **A vote you can prove is a vote you can sell — or be beaten for.** Receipt-freeness and the
   ability to silently override a coerced vote are not features to be traded away for convenience.
````
REPLACE WITH:
````
4. **A vote you can prove is a vote you can sell — or be beaten for.** Receipt-freeness and the
   ability to silently override a coerced vote are not features to be traded away for convenience.
   **(v2 target — see §0.)** Neither exists in v1: v1 voting is **NOT receipt-free and NOT
   coercion-resistant**, and there is no silent override (Doc 02 §4.45 `FR-131` clause (a);
   §16.4 `H-03`; Doc 14 §2.6).
````

---

Commentary for OP 5: one marker at the head of §B covers the entire press release — sub-headline,
summary, problem, solution, quotes and the ten-step customer journey — instead of six separate
markers inside it. This is the fewest-edits choice that still makes a misreading impossible: §B is
the section most likely to be lifted whole by a reader or a journalist, and it is uniformly
future-tense fiction.

### OP 5 — docs/01-press-release-prfaq.md — §B: one marker covering the whole press release

FIND:
````
## B. Press Release

**FOR IMMEDIATE RELEASE — Geneva, Switzerland — 2027-06-01**
````
REPLACE WITH:
````
## B. Press Release

> **(v2 target — see §0.)** Everything in section B is a **dated-in-the-future press release**
> for the Definition-B (v2) product, written as if it had already shipped. No sentence in this
> section describes software that exists today, and the launch, the pilot jurisdiction, the
> quotes and the customer journey are all illustrative. What exists today is in §0.

**FOR IMMEDIATE RELEASE — Geneva, Switzerland — 2027-06-01**
````

---

Commentary for OP 6: this FAQ answer is the single most-quoted privacy claim in the document and
is read on its own by anyone scanning the FAQ. The marker is inserted directly under the question
so it cannot be missed, and it scopes itself to the Supporter / Worker / Candidate blocks that
follow. Note the deliberate boundary: claims about **identity enrolment and what is stored at
enrolment** are governed by `FR-132` and Doc 02 §16.4 `H-16`…`H-18`, expressly **outside** FR-131
clause (e) — so the marker points at that register rather than restating it.

### OP 6 — docs/01-press-release-prfaq.md — §E1 data-and-privacy answer: inline v2-target marker

FIND:
````
- **How is my data used and kept private?**
  We do not keep your identity documents or biometric templates — they are checked and discarded,
  never stored by us. We never learn your home address, only that you are eligible in a region. The
  system is built so that no one — including Trumocracy — can produce a list of who belongs to which
  party. The privacy level you get depends on the tier you choose, and those terms are shown to you
  plainly before you confirm:
````
REPLACE WITH:
````
- **How is my data used and kept private?**
  **(v2 target — see §0.)** This answer — including the Supporter, Worker and Candidate terms
  below — describes the **v2** design. In **v1**, Trumocracy's own database **can** produce a list
  of who belongs to which party and **can** see how each account voted (Doc 02 §16.4 `H-01`,
  `H-02`; `FR-082` and `FR-086` are classed `DEFERRED-v2`). What v1 stores at enrolment is a
  separate question, governed by `FR-132` and recorded in Doc 02 §16.4 `H-16`–`H-18`.
  We do not keep your identity documents or biometric templates — they are checked and discarded,
  never stored by us. We never learn your home address, only that you are eligible in a region. The
  system is built so that no one — including Trumocracy — can produce a list of who belongs to which
  party. The privacy level you get depends on the tier you choose, and those terms are shown to you
  plainly before you confirm:
````

---

Commentary for OP 7: the coercion answer states receipt-freeness and the silent re-vote as present
facts and ends with "this is the single most important thing we built" — the strongest
present-tense claim in the document. Marker inserted under the question.

### OP 7 — docs/01-press-release-prfaq.md — §E1 coercion answer: inline v2-target marker

FIND:
````
- **Can someone force me to vote a certain way?**
  They can try. They cannot verify it. You cannot produce a receipt or a screenshot that proves how
````
REPLACE WITH:
````
- **Can someone force me to vote a certain way?**
  **(v2 target — see §0.)** This answer describes the **v2** ballot. In **v1** it is not true:
  v1 voting is **NOT receipt-free and NOT coercion-resistant**, there is no silent re-vote, and
  Trumocracy's database can see how each account voted (`FR-131` clause (a); Doc 02 §16.4 `H-03`;
  Doc 14 §2.6).
  They can try. They cannot verify it. You cannot produce a receipt or a screenshot that proves how
````

---

Commentary for OP 8: added on the product-owner's judgement, beyond the passages the ruling named.
"We hand over what we have, and what we have is not a member list" is the most dangerous sentence
in the document to read in isolation — it is a direct answer to a state, it invites quotation, and
it is **false for v1**: Doc 02 §16.4 `H-04` and §16.5 record `FR-128`'s subpoena test as PARTIAL,
deferred in full to v2, because the v1 operator holds the member↔party mapping and vote direction
in a conventional database and can be compelled to produce them. Marker inserted under the
question; the honest limits the answer already lists are untouched.

### OP 8 — docs/01-press-release-prfaq.md — §E3 member-list / subpoena answer: inline v2-target marker

FIND:
````
- **"What happens if a government orders you to hand over the member list?"**
  We hand over what we have, and what we have is not a member list. There is no database mapping
````
REPLACE WITH:
````
- **"What happens if a government orders you to hand over the member list?"**
  **(v2 target — see §0.)** This answer describes the **v2** design and is **not true of v1**. In
  v1 the operator holds the member↔party mapping and vote direction in an ordinary database and
  **can be compelled to produce them**: `FR-128`'s "we do not have it" subpoena test is classed
  PARTIAL and deferred in full to v2 (Doc 02 §16.4 `H-04`; §16.5, approver ruling 2026-08-23).
  v1's honest posture is "we do not store identity documents" — **not** "we cannot disclose
  membership or vote direction".
  We hand over what we have, and what we have is not a member list. There is no database mapping
````

---

## Applier checklist

1. Apply OP 1 … OP 8 in order; each FIND must match exactly once before replacement.
2. After applying, confirm: `Version: 2.1.0`, `Status: In Review`, `Classification: Public`,
   `Last updated: 2026-09-06`, a `v2.1.0` change-log entry above the surviving `v2.0.0` and
   `v1.0.0` entries, one `## 0.` section, and six `(v2 target — see §0` markers (OPs 3–8).
3. Confirm the document still contains **nine** tenets, the same §C metric table rows, the same
   §D bullets and the same §E questions — no count changes.
4. Suffix scan for transcription residue: no orphaned `>` separator lines, no duplicated
   `## A. Tenets` or `## B. Press Release` heading, no stray `2.0.0` in the `Version:` field.
5. Route to the **technical-writer** (business mode, new instance) for the v2.1.0 cycle-1 review
   per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`.
