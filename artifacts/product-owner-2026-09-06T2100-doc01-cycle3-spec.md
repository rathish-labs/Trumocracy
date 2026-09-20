# Anchored spec — Doc 01 v2.2.0 → v2.3.0 (review-loop rework, cycle 3 of 5)

```
Author:        product-owner (Priya Raghunathan) — the owning role for Doc 01
Date:          2026-09-06T21:00
Target file:   docs/01-press-release-prfaq.md   (ONE file — no other file is touched)
Applier:       project-manager (mechanical FIND/REPLACE; four-backtick fences)
Against:       artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md
               (business, cycle 2 — FAIL 96%, 0 Critical / 0 High / 1 Medium / 0 Low;
               reviewer: technical-writer, neutral, PM-assigned). All six cycle-1 issues
               verified CLOSED; one new finding, ISS-01.
Ruling:        project-manager (Ana-Maria Petrescu), 2026-09-06, within approver ruling 5
               ("so a public reader cannot mistake it for what ships today"): the
               integrity / no-gatekeeper claim class IS in scope of the §0 banner's purpose.
               Resolution taken: the reviewer's option (a) — mark the class — plus the
               banner widening the PM specified.
Result:        docs/01-press-release-prfaq.md v2.3.0, Status: In Review, cycle 3 of 5.
Ops:           10
Invariants:    NO requirement, tenet, metric, FAQ, scope item or open item is added, removed,
               reworded or renumbered. Nine tenets; §C's 17 rows; the §D bullets and the §E
               question sets unchanged. Docs 02, 05, 13 and all product code UNTOUCHED.
```

## What this version does

| Work | Op |
|---|---|
| `ISS-01` part 1 — **widen §0's override sentence to cover integrity** (counts, rolls, tallies) | **OP 3** |
| `ISS-01` part 2 — mark **§A tenet 1** and **§E3 "Why blockchain at all?"** (the two the reviewer named directly) | **OP 4, OP 10** |
| `ISS-01` part 3 — **§A tenet 8**, which the reviewer rated a *weaker* instance because its core append-only claim is materially true in v1 under `NFR-028` | **OP 6** — takes a `(v1 accuracy note)`, not a `(v2 target)` marker, precisely because it is mostly true |
| Sweep of §B, §C and §E for other present-tense integrity claims, as the PM directed | **OP 5** (§A tenet 7), **OP 7** (§C preamble), **OP 8** (§E1 "goes wrong"), **OP 9** (§E3 "no gatekeepers") |
| Header: version, cycle-3 status, corrected marker counts | **OP 1, OP 2** |

## The integrity sweep — what it found, and what it did not

Grepped the body for the claim class: *alter · reverse · override · admin · immutable · permanent ·
automatically · source of truth · verify · reproducible · no such button · nobody can*.

| Passage | Claim | Disposition |
|---|---|---|
| §A tenet 1 | "Governance runs in code or it does not run" | **Marked** (OP 4) — named by the reviewer |
| §A tenet 7 | "a machine executes it… No human, committee or Trumocracy employee stands between the result and its effect" | **Marked** (OP 5) — sweep; the same claim as tenet 1 in operative form |
| §A tenet 8 | "appended to an immutable record… an actor who wants to… disappear inconvenient votes finds the mechanism missing" | **`(v1 accuracy note)`** (OP 6) — `NFR-028` makes the append-only record true in v1; only the last clause needs qualifying |
| §C preamble | "independently reproducible tallies… 100%" and the deanonymisation kill-criterion row | **`(v1 accuracy note)`** (OP 7) — sweep; §C rows are targets, so the honest fix is one note on the section, not markers on rows |
| §E1 "What happens if it goes wrong for me?" | "there is no such button, by design" | **Marked** (OP 8) — sweep |
| §E3 "You say 'no gatekeepers'…" | "there is no administrative override, pause key or privileged role in the governance path" | **Marked** (OP 9) — sweep; the answer concedes the tension for *writing the code* but not for the *database* |
| §E3 "Why blockchain at all?" | "nobody, including Trumocracy, may be able to alter a threshold count, a membership roll or a tally" | **Marked** (OP 10) — named by the reviewer |
| **§B** (whole section) | "the party switches on automatically", "no override button, because we did not build one", the leader quote | **Already covered** — the v2.1.0 section-head marker states that *no sentence in §B describes software that exists today*. No new op; re-marking inside §B would duplicate a marker that already reaches these sentences. |
| §E2 "business model" — "the funding entity holds **no** governance privilege in code" | About **funders**, not the operator; true in v1 (no funder role exists in the code) | **Left** — not the claim class |
| §E2 "rollout & rollback" — "Governance-affecting flags are one-way… you cannot flip a rule mid-vote" | A flag-system design property, not a record-integrity claim; the release-limitation register that tracks flag hazards is Doc 09's, not this document's | **Left** — named in the note |
| §E1 "What's different from a petition site" — "cross it and the party exists, with no one to appeal to" | A claim that no *human approval step* exists, which holds in v1; the alterability question is covered by tenet 1's marker and §0 | **Left** — named in the note |

## Counting, stated once

After this version the **body** (§A–§F) contains **20** `**(v2 target — see §0.)**` markers (15 from
v2.2.0 + 5 here) and **3** `**(v1 accuracy note — see §0.)**` (1 from v2.2.0 + 2 here) — **23**
inline annotations. The header states exactly these figures, scoped to the body, because the same
phrases necessarily appear in the header prose and change-log.

---

Commentary for OP 1: the `Status:` field is rewritten for cycle 3. It records the loop position, the
cycle-2 verdict (a 96% FAIL capped by one Medium, with all six cycle-1 issues closed), the PM's
ruling that put the integrity class in scope, and the corrected counts.

### OP 1 — docs/01-press-release-prfaq.md — header: version 2.3.0 and the cycle-3 Status field

FIND:
````
Version:       2.2.0
Status:        In Review — v2.2.0, review-loop rework **cycle 2 of 5** against
               artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md (business,
               cycle 1 — **FAIL 87%, 1 Critical / 2 High / 3 Medium / 0 Low**; reviewer:
               technical-writer, neutral, PM-assigned). The cycle-1 finding was a single class:
               §0 and the six v2.1.0 markers were accurate, but unmarked present-tense
               "anonymous / no link to identity" claims about v1 participation acts survived
               elsewhere in §D and §E. **Fixed, by issue id:** ISS-01 (Critical) §E1 "Who is
               this for?"; ISS-02 (High) §E3 "Why no analytics"; ISS-03 (High) §E3 "right to be
               forgotten" — v1 reality now stated alongside the v2 claim; ISS-04 (Medium) §D
               final bullet; ISS-05 (Medium) the recovery-helper claim in §E1 "Do I need to
               understand crypto?" and §E3 "What if someone loses their phone?", now grounded in
               `FR-059` (classed PARTIAL) and Doc 02 §16.4 `H-10` and marked at both sites;
               ISS-06 (Medium) the marker count, corrected and stated exactly below. **Beyond
               the report,** a full sweep of §D and §E for the same claim class found **three**
               further passages, all marked here: §E2 "top 3 risks", §E3 "extremists" ("cannot
               keep a membership list"), and §E3 "billionaire" ("because the vote is
               receipt-free"). **Marker count, stated once and scoped to the body (§A–§F):**
               **fifteen** `(v2 target — see §0.)` markers — **six** added at v2.1.0 (§A tenet 2,
               §A tenet 4, head of §B, §E1 data-and-privacy, §E1 coercion, §E3 member-list) and
               **nine** added at v2.2.0 — plus **one** `(v1 accuracy note — see §0.)` at the §E2
               data-protection answer, where the claim is partly true in v1 rather than a pure v2
               target. v2.1.0's own account of "four" markers was wrong and is superseded.
               Changes specified in
               artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md. Unchanged by this
               version: §0, the six v2.1.0 markers, Classification: Public, and every
               requirement, tenet, metric, FAQ, scope item and open item.
````
REPLACE WITH:
````
Version:       2.3.0
Status:        In Review — v2.3.0, review-loop rework **cycle 3 of 5** against
               artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md (business,
               cycle 2 — **FAIL 96%, 0 Critical / 0 High / 1 Medium / 0 Low**; reviewer:
               technical-writer, neutral, PM-assigned). All six cycle-1 issues were verified
               **closed** at v2.2.0 and none is reopened. The single cycle-2 Medium (ISS-01) is
               the **integrity / no-gatekeeper** claim class, which v2.2.0 deliberately left
               un-ruled and referred upward: §A tenet 1 ("Governance runs in code or it does not
               run") and §E3 "Why blockchain at all?" ("nobody, including Trumocracy, may be able
               to alter a threshold count, a membership roll or a tally") are present-tense
               integrity claims that Doc 02 §16.5 contradicts for v1 — Charter Rule 3 / tension
               **T-05**, approver-**CONFIRMED** 2026-08-23: the operator's own database **is** the
               source of truth for tallies, and the published hash gives tamper-**evidence**, not
               tamper-**prevention**. The reviewer found the §0 override sentence scoped only to
               identity linkage, so it did not reach this class.
               **Ruling applied:** the **project-manager** (Ana-Maria Petrescu) ruled on
               2026-09-06, within approver ruling 5 ("so a public reader cannot mistake it for
               what ships today"), that the integrity class is **in scope** of the banner's
               purpose. This version takes the reviewer's option (a): **§0's override is widened
               to cover counts, rolls and tallies**, and the class is marked.
               **Fixed:** §0 override widened (integrity added, grounded in §16.5 T-05 and §16.4
               `H-05`); §A tenet 1 and §E3 "Why blockchain at all?" marked; §A tenet 8 given a
               `(v1 accuracy note)` rather than a v2-target marker, because its core append-only
               claim is **materially true in v1** under `NFR-028` and only its last clause needs
               qualifying — the reviewer's own weighting. **Beyond the report,** the integrity
               sweep of §B, §C and §E that the PM directed found three further passages, all
               handled here: §A tenet 7 ("a machine executes it… no human stands between the
               result and its effect"), §E1 "What happens if it goes wrong for me?" ("there is no
               such button, by design"), and §E3 "You say 'no gatekeepers'…" ("no administrative
               override, pause key or privileged role in the governance path"), plus a
               `(v1 accuracy note)` on the §C preamble covering the "independently reproducible
               tallies" target and the deanonymisation kill-criterion row. **§B needed no new
               marker:** its v2.1.0 section-head marker already states that no sentence in §B
               describes software that exists today, which reaches "switches on automatically"
               and "no override button".
               **Marker count, stated once and scoped to the body (§A–§F):** **twenty**
               `(v2 target — see §0.)` markers — six from v2.1.0, nine from v2.2.0, **five** added
               here (§A tenet 1, §A tenet 7, §E1 "goes wrong", §E3 "no gatekeepers", §E3 "Why
               blockchain") — plus **three** `(v1 accuracy note — see §0.)` (§E2 data-protection
               from v2.2.0; §A tenet 8 and the §C preamble added here). Twenty-three inline
               annotations in total.
               Changes specified in
               artifacts/product-owner-2026-09-06T2100-doc01-cycle3-spec.md. Unchanged by this
               version: the fifteen v2.2.0 markers, Classification: Public, and every
               requirement, tenet, metric, FAQ, scope item and open item.
               **v2.2.0 record, carried forward:** cycle-2 rework against the cycle-1 report
               (FAIL 87%, 1C/2H/3M), which closed all six cycle-1 issues in the identity-linkage
               claim class and added nine markers and one accuracy note; spec
               artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md.
````

---

Commentary for OP 2: the v2.3.0 change-log entry is inserted above the surviving v2.2.0, v2.1.0,
v2.0.0 and v1.0.0 entries. The v2.2.0 entry is re-emitted byte-for-byte.

### OP 2 — docs/01-press-release-prfaq.md — change log: add the v2.3.0 entry

FIND:
````
Change log:
  v2.2.0 — 2026-09-06 — Review-loop rework, cycle 2 of 5, against
````
REPLACE WITH:
````
Change log:
  v2.3.0 — 2026-09-06 — Review-loop rework, cycle 3 of 5, against
             artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md (FAIL 96%;
             0 Critical / 0 High / 1 Medium). Closes the integrity / no-gatekeeper claim class
             (ISS-01), ruled in scope by the project-manager on 2026-09-06 within approver
             ruling 5. **Widens §0's override sentence** to cover counts, rolls and tallies: in
             v1 the operator's database is the source of truth and the published hash is
             tamper-evidence, not tamper-prevention (Doc 02 §16.5 Charter Rule 3 / T-05,
             approver-confirmed; §16.4 H-05). Adds five "(v2 target — see §0.)" markers — §A
             tenet 1; §A tenet 7; §E1 "What happens if it goes wrong for me?"; §E3 "You say 'no
             gatekeepers'…"; §E3 "Why blockchain at all?" — bringing the body total to twenty,
             and two "(v1 accuracy note — see §0.)" at §A tenet 8 (whose append-only claim is
             materially true in v1 under NFR-028) and the §C preamble, bringing that total to
             three. §B needed no new marker: its section-head marker already covers it. No
             requirement, tenet, metric, FAQ, scope item or open item is added, removed,
             reworded or renumbered; Classification: Public and the fifteen v2.2.0 markers are
             unchanged. Spec artifacts/product-owner-2026-09-06T2100-doc01-cycle3-spec.md;
             standard applied: FR-131 clause (e) (Doc 02 §4.45) and Doc 02 §16.5.
  v2.2.0 — 2026-09-06 — Review-loop rework, cycle 2 of 5, against
````

---

Commentary for OP 3 (`ISS-01`, the banner widening the PM specified): the existing override
paragraph is re-emitted **unchanged** — it remains correct for the identity-linkage class — and a
second override paragraph is added for the integrity class. The provenance note is extended to
record the v2.3.0 widening and who ruled it. Grounded in Doc 02 §16.5 (Charter Rule 3 / T-05,
approver-confirmed 2026-08-23) and §16.4 `H-05`; no new claim is made.

### OP 3 — docs/01-press-release-prfaq.md — §0: widen the override to cover counts, rolls and tallies

FIND:
````
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
````
REPLACE WITH:
````
> The rule this banner exists to satisfy is **`FR-131`** (Doc 02 §4.45), and in particular
> **clause (e)**: the test is **what an ordinary Grade-8 reader would take a claim to mean**, not
> whether a banned word appears. If any sentence in this document would leave such a reader
> believing that Trumocracy cannot today link a person to a vote, to a party membership or to a
> petition they backed, **this banner overrides it**.
>
> **The same override covers who can change the numbers.** If any sentence in this document would
> leave an ordinary Grade-8 reader believing that Trumocracy itself cannot today alter a count, a
> membership roll or a tally, **this banner overrides that too**. In the current version (v1), the
> operator's own database **is the source of truth** for counts, rolls and tallies. Publishing a
> hash of a result makes a later change **detectable** — that is tamper-**evidence**, not
> tamper-**prevention** — and the operator can in principle alter the database before the hash is
> published. A design in which nobody, including Trumocracy, **can** alter a count is the **v2**
> design (Doc 02 §16.5, Charter Rule 3 / tension **T-05**, approver-confirmed 2026-08-23; §16.4
> `H-05`). No administrative approval, reversal or override step exists in the governance flow in
> either version — that part of the promise holds today; what v1 does not yet have is a record the
> operator is technically unable to change.
>
> _(Added at v2.1.0 by the approver ruling of 2026-09-06, Rathish Kumar — ruling 5, recorded in
> `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §11; finding of record
> `artifacts/status/PUBLIC-RELEASE-READINESS-2026-09-06.md` §1 row E-8 and §6. **The
> counts-rolls-tallies paragraph was added at v2.3.0** by the project-manager's ruling of
> 2026-09-06 within the same approver ruling 5, closing `ISS-01` of
> `artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md`. Every sentence above
> reuses wording already approved in Doc 14 §0.1/§2.6, Doc 09 §0 or Doc 02 §16/§16.5; it makes no
> new claim.)_
````

---

Commentary for OP 4 (`ISS-01`, the tenet the reviewer named first): the marker is appended; the
three tenet lines are re-emitted unchanged and not reflowed. It preserves the half of the tenet that
**is** true in v1 — no admin approval step exists in the governance flow — so the marker qualifies
the claim without retracting a commitment that holds.

### OP 4 — docs/01-press-release-prfaq.md — §A tenet 1: integrity marker

FIND:
````
1. **No gatekeeper, ever — not even us.** If a human being at Trumocracy can approve, reject,
   promote, demote, delete or reorder anything inside a party, we have rebuilt the thing we set out
   to abolish. Governance runs in code or it does not run.
````
REPLACE WITH:
````
1. **No gatekeeper, ever — not even us.** If a human being at Trumocracy can approve, reject,
   promote, demote, delete or reorder anything inside a party, we have rebuilt the thing we set out
   to abolish. Governance runs in code or it does not run.
   **(v2 target — see §0.)** "Governance runs in code or it does not run" is the **v2** design.
   What holds in **v1**: there is no approval, rejection, promotion or reordering step for a
   Trumocracy employee anywhere in the governance flow. What does not: the operator's own database
   is the **source of truth** for counts, rolls and tallies, so a result can in principle be altered
   at the database before its hash is published — tamper-evidence, not tamper-prevention (Doc 02
   §16.5, Charter Rule 3 / **T-05**, approver-confirmed; §16.4 `H-05`). The §E3 answer "You say 'no
   gatekeepers' — but you write the code" states the same tension.
````

---

Commentary for OP 5 (sweep): tenet 7 is tenet 1's claim in operative form — it is the sentence that
says a machine, not a person, produces the effect of a result. Same grounding, same preservation of
the half that holds.

### OP 5 — docs/01-press-release-prfaq.md — §A tenet 7: integrity marker (sweep)

FIND:
````
7. **Humans express preference; code executes consequence.** Humans deliberate, draft, propose,
   debate and vote. The moment a vote closes, a count is confirmed, a threshold is crossed, a term
   expires or a removal bar is met — a machine executes it, immediately and identically for everyone.
   No human, committee or Trumocracy employee stands between the result and its effect.
````
REPLACE WITH:
````
7. **Humans express preference; code executes consequence.** Humans deliberate, draft, propose,
   debate and vote. The moment a vote closes, a count is confirmed, a threshold is crossed, a term
   expires or a removal bar is met — a machine executes it, immediately and identically for everyone.
   No human, committee or Trumocracy employee stands between the result and its effect.
   **(v2 target — see §0.)** The execution step is automatic in v1 too — no person approves or
   releases a result. What is **v2** is the guarantee that the result the machine acts on cannot be
   changed by us: in v1 the operator's database is the source of truth, and the published hash makes
   an alteration detectable rather than impossible (Doc 02 §16.5 **T-05**; §16.4 `H-05`).
````

---

Commentary for OP 6 (`ISS-01`, tenet 8): the reviewer explicitly rated this a **weaker** instance
because the append-only record is materially true in v1 under `NFR-028` (Must, IN-v1). Marking it
"(v2 target)" would therefore be inaccurate in the other direction. It takes a `(v1 accuracy note)`
— the established pattern for a claim that is mostly true — qualifying only the final clause.

### OP 6 — docs/01-press-release-prfaq.md — §A tenet 8: v1 accuracy note

FIND:
````
8. **Nothing is deleted; transparency is the anti-hijack mechanism.** Every entity is active or
   inactive; every action is appended to an immutable record; every decision carries a permanent
   trail. An actor who wants to capture a party, rewrite its history or disappear inconvenient votes
   finds the mechanism missing. History is the immune system.
````
REPLACE WITH:
````
8. **Nothing is deleted; transparency is the anti-hijack mechanism.** Every entity is active or
   inactive; every action is appended to an immutable record; every decision carries a permanent
   trail. An actor who wants to capture a party, rewrite its history or disappear inconvenient votes
   finds the mechanism missing. History is the immune system.
   **(v1 accuracy note — see §0.)** This tenet is **materially true in v1**: the append-only,
   nothing-is-deleted record is a v1 requirement (`NFR-028`, Must, IN-v1), not a deferred one. One
   clause is narrower than it reads. An actor who can write to the operator's database directly is
   not stopped by the record itself, because in v1 that database is the source of truth and the
   published hash makes such a change **detectable** rather than impossible (Doc 02 §16.5 **T-05**;
   §16.4 `H-05`). Against everyone else — including anyone acting through the product — the
   mechanism is exactly as described.
````

---

Commentary for OP 7 (sweep, §C): §C's rows are targets by construction, so the honest fix is one
note on the section rather than markers on individual rows — marking a target column would suggest
the targets themselves are deferred, which is not the case. The note names the two rows that
additionally depend on v2 guarantees and states the fact that governs all of them: nothing here has
been measured, because the software is deployed nowhere.

### OP 7 — docs/01-press-release-prfaq.md — §C preamble: v1 accuracy note (sweep)

FIND:
````
> Every number here becomes a tracked requirement in Doc 02. Measurement owner: **Yuki Sato**
> (Data & Measurement Lead). Time-box: first 12 months post-launch unless stated.
````
REPLACE WITH:
````
> Every number here becomes a tracked requirement in Doc 02. Measurement owner: **Yuki Sato**
> (Data & Measurement Lead). Time-box: first 12 months post-launch unless stated.
>
> **(v1 accuracy note — see §0.)** Every row below is a **target for the v2 product, measured after
> launch**. None has been measured, because the software is deployed nowhere and has never been
> used for a real vote (§0). Two rows additionally depend on guarantees v1 does not have.
> **"Independently reproducible tallies"**: in v1 a third party re-running the count must still
> trust that the operator's database says what it says — the operator is the source of truth, and
> the published hash is tamper-evidence (Doc 02 §16.4 `H-05`; §16.5 **T-05**). **"Confirmed
> deanonymisation… 0"**: in v1 that kill criterion reads against **platform-initiated** exposure
> only, not against operator-side database access (Doc 02 §16.5).
````

---

Commentary for OP 8 (sweep, §E1): "there is no such button, by design" is the integrity class in
customer-facing form. The marker preserves what holds — no reversal button exists in the product —
and names the accurate v1 limit. The fork clause is stated carefully: that path sits behind a
feature flag that is off in v1 (Doc 06 §5.3), so the answer's remainder is not claimed wholesale.

### OP 8 — docs/01-press-release-prfaq.md — §E1 "What happens if it goes wrong for me?": integrity marker

FIND:
````
- **What happens if it goes wrong for me?**
  Lost access: a recovery path that takes days, not minutes, with a cancel window so a thief cannot
````
REPLACE WITH:
````
- **What happens if it goes wrong for me?**
  **(v2 target — see §0.)** "A Trumocracy employee reversing a governance result — there is no such
  button, by design" is the **v2** guarantee. In **v1** no such button exists in the product either,
  but the operator's database is the source of truth, so a result can be altered at the database and
  the published hash makes that **detectable**, not impossible (Doc 02 §16.5 **T-05**; §16.4
  `H-05`). Note also that the minority-fork path mentioned below sits behind a feature flag that is
  **off** in v1 (Doc 06 §5.3); the recovery path and the appeal route are as described.
  Lost access: a recovery path that takes days, not minutes, with a cancel window so a thief cannot
````

---

Commentary for OP 9 (sweep, §E3): this answer already concedes the gatekeeper tension for the code
we write — the reviewer noted it does so "partly". It does **not** concede it for the database,
which is where the v1 gap actually is, and its mitigation list states the no-privileged-role claim
flatly. The marker closes exactly that gap and cross-references the two tenets.

### OP 9 — docs/01-press-release-prfaq.md — §E3 "You say 'no gatekeepers'": integrity marker (sweep)

FIND:
````
- **"You say 'no gatekeepers' — but you write the code. Aren't you the gatekeeper?"**
  Today, partly yes, and that is the most serious unresolved tension in the product. Our mitigations:
````
REPLACE WITH:
````
- **"You say 'no gatekeepers' — but you write the code. Aren't you the gatekeeper?"**
  **(v2 target — see §0.)** This answer concedes the tension for the **code we write**. It
  understates it for **v1** in one specific way: "there is no administrative override, pause key or
  privileged role in the governance path" is true of the governance logic, but in v1 the operator's
  **database** is the source of truth for counts, rolls and tallies, and the published hash makes an
  alteration detectable rather than impossible (Doc 02 §16.5, Charter Rule 3 / **T-05**,
  approver-confirmed; §16.4 `H-05`). See §A tenets 1 and 7, which carry the same qualification.
  Today, partly yes, and that is the most serious unresolved tension in the product. Our mitigations:
````

---

Commentary for OP 10 (`ISS-01`, the answer the reviewer named second): this is the most explicit
statement of the integrity requirement in the document, and the one a technical reader is most
likely to quote. The marker says plainly that the property is not met in v1, and — importantly —
that the **requirement stands as written for v2**: this is a phasing disclosure, not a retraction.

### OP 10 — docs/01-press-release-prfaq.md — §E3 "Why blockchain at all?": integrity marker

FIND:
````
- **"Why blockchain at all? Isn't this just a database?"**
  The requirement is not "use a blockchain" — this document deliberately specifies **no** technology,
````
REPLACE WITH:
````
- **"Why blockchain at all? Isn't this just a database?"**
  **(v2 target — see §0.)** The property this answer states as the requirement — that *nobody,
  including Trumocracy, may be able to alter a threshold count, a membership roll or a tally, and
  anyone must be able to verify the result themselves without trusting us* — is **not met in v1**.
  In v1 the operator's database is the source of truth; tally result hashes are published to the
  on-chain audit record, so a change is **detectable**, but verifying a tally still means trusting
  that the database says what it says (Doc 02 §16.4 `H-05`; §16.5 Charter Rule 3 / **T-05**,
  approver-confirmed). The answer's own line that "a conventional database cannot supply that,
  because someone administers it" is therefore a description of v1's real position. **The
  requirement stands unchanged for v2** — this is a phasing disclosure, not a retraction.
  The requirement is not "use a blockchain" — this document deliberately specifies **no** technology,
````

---

## Applier checklist

1. Apply OP 1 … OP 10 in order; each FIND must match exactly once before replacement.
2. After applying, confirm in the **body** (§A–§F): **20** occurrences of
   `**(v2 target — see §0.)**` and **3** of `**(v1 accuracy note — see §0.)**`. If either count
   differs, stop and return to the product-owner — the header states both figures.
3. Confirm `Version: 2.3.0`, `Status: In Review … cycle 3 of 5`, `Classification: Public`
   unchanged, `Last updated: 2026-09-06`, and change-log entries in order
   v2.3.0 / v2.2.0 / v2.1.0 / v2.0.0 / v1.0.0.
4. Confirm §0 now contains **two** override paragraphs — the identity-linkage one (unchanged) and
   the counts-rolls-tallies one — and that the provenance note names the v2.3.0 widening.
5. Confirm the invariants: **nine** tenets, unrenumbered; §C's 17 table rows unchanged; §D bullets
   and the §E question sets unchanged in number and wording; the fifteen v2.2.0 markers unchanged.
6. Suffix scan at all 10 boundaries: no orphaned `FIND:`/fence lines, no duplicated tenet number,
   question line, `Change log:` or `Version:` line.
7. Route to the **technical-writer** (business mode) for the **cycle-3** review.
