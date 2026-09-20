# Session note — product-owner (Priya Raghunathan) — 2026-09-06T21:00

```
Role:          product-owner (owning role for Doc 01)
Session:       Doc 01 v2.2.0 → v2.3.0 — review-loop rework, cycle 3 of 5
Against:       artifacts/reviews/01-press-release-prfaq-v2.2.0-business-cycle2.md
               (business, cycle 2 — FAIL 96%, 0 Critical / 0 High / 1 Medium / 0 Low;
               reviewer: technical-writer, neutral, PM-assigned)
Ruling:        project-manager (Ana-Maria Petrescu), 2026-09-06, within approver ruling 5:
               the integrity / no-gatekeeper claim class IS in scope of the §0 banner's
               purpose. Resolution: the reviewer's option (a) — widen the banner and mark
               the class — not option (b) (an approver ruling that it is out of scope).
Deliverable:   artifacts/product-owner-2026-09-06T2100-doc01-cycle3-spec.md  (10 anchored OPs)
Wrote:         that spec + this note. NOTHING else. Doc 01 is not edited by me (Write, not
               Edit); the project-manager applies the spec mechanically.
Updated:       the Open items below were corrected at 21:40 after the stop-hook run — Doc 02
               v2.17.1 has since been applied, reviewed and APPROVED (see item 2).
```

## The finding, and how the loop worked here

Cycle 2 scored **96% with zero Critical, zero High and one Medium** and verified all six cycle-1
issues closed, with the marker counts independently recounted and matching. The single Medium is
the class I declined to settle alone at cycle 2 and referred upward with a named recommendation:
**the integrity / no-gatekeeper claims**.

The reviewer's diagnosis is exactly right and sharper than mine was. I had reasoned that §0's
override clause covered the class. It did not: **the override sentence was scoped to identity
linkage** — "link a person to a vote, to a party membership or to a petition they backed" — and
said nothing about altering a count. A reader stopping at tenet 1, the first and most quotable
tenet, immediately after the banner, would form a false belief that the banner's own stated
override does not correct. That is a drafting gap in a mechanism I wrote, not a scope question.

Referring it up was still the right call — it was a genuine scope decision about three tenets, and
the PM ruled it in scope inside a day. But the reviewer's point stands independently of the ruling:
an override clause that names only one claim class cannot be relied on to cover a second.

## The new banner sentence (§0, OP 3)

The existing identity-linkage override paragraph is kept **unchanged** — it is still correct — and a
second override paragraph is added after it:

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

The last sentence is deliberate: the honest v1 position is not "the no-gatekeeper promise is
false", it is "the *human-approval* half holds and the *unalterable-record* half does not". Saying
only the second would overstate the gap in the opposite direction — which is the failure mode the
tenet-8 handling below also guards against.

## Passages handled — 10 OPs

| OP | Passage | Annotation | Why |
|---|---|---|---|
| 1 | header `Status:` | — | cycle-3 record; corrected counts |
| 2 | change log | — | v2.3.0 entry |
| 3 | **§0 override** | — | the widening above |
| 4 | §A tenet 1 | `(v2 target)` | named by the reviewer |
| 5 | §A tenet 7 | `(v2 target)` | **sweep** — tenet 1's claim in operative form ("a machine executes it… no human stands between the result and its effect") |
| 6 | §A tenet 8 | `(v1 accuracy note)` | see below |
| 7 | §C preamble | `(v1 accuracy note)` | **sweep** — the "independently reproducible tallies" target and the deanonymisation kill-criterion row |
| 8 | §E1 "What happens if it goes wrong for me?" | `(v2 target)` | **sweep** — "there is no such button, by design" |
| 9 | §E3 "You say 'no gatekeepers'…" | `(v2 target)` | **sweep** — "no administrative override, pause key or privileged role in the governance path" |
| 10 | §E3 "Why blockchain at all?" | `(v2 target)` | named by the reviewer |

**Body counts after v2.3.0: 20 `(v2 target — see §0.)` + 3 `(v1 accuracy note — see §0.)` = 23**
inline annotations, stated once in the header and scoped to the body.

## Judgement calls

- **Tenet 8 gets an accuracy note, not a v2-target marker.** The reviewer explicitly weighted it
  lower than tenet 1 because its core claim — append-only, nothing deleted, permanent trail — is
  **materially true in v1** under `NFR-028` (Must, IN-v1). Marking it "(v2 target)" would be
  inaccurate in the opposite direction: it would tell a reader that a guarantee which *does* hold
  today does not. Only the last clause ("an actor who wants to… disappear inconvenient votes finds
  the mechanism missing") needs qualifying, and only against an actor writing to the operator's
  database directly. The note says exactly that, and closes by affirming that against everyone else
  — including anyone acting through the product — the mechanism is as described.
- **§C gets one note on the section, not markers on rows.** Every §C row is a target by
  construction; marking a target column would suggest the targets themselves are deferred, which is
  false. The note states the fact that governs all of them (nothing has been measured; the software
  is deployed nowhere) and names the two rows that additionally depend on v2 guarantees.
- **§B needed no new marker.** Its v2.1.0 section-head marker already states that *no sentence in
  §B describes software that exists today*, which reaches "the party switches on automatically",
  "Trumocracy has no override button, because we did not build one" and the leader quote. Adding a
  second marker inside §B would duplicate a mechanism that already works — and the cycle-2 reviewer
  confirmed the §B marker is doing its job.
- **Every marker preserves what is true in v1.** No admin approval step exists in the governance
  flow in either version; the execution step is automatic in v1 too; the append-only record holds;
  no reversal button exists in the product. The gap is precisely one thing — the operator's database
  is the source of truth and the hash is evidence, not prevention — and each marker says that and
  only that.
- **One correction of fact while marking §E1.** That answer offers a minority "fork the charter"
  path. The fork initiation path sits behind a feature flag that is **off** in v1 (Doc 06 §5.3), so
  I did not claim the rest of the answer holds wholesale; the marker names the flag state and
  affirms only the recovery path and the appeal route.

## Deliberately left (considered, named so it is not re-found as a miss)

1. **§E2 "the funding entity holds no governance privilege in code"** — a claim about **funders**,
   not the operator. True in v1: no funder role exists in the code. Not this claim class.
2. **§E2 "Governance-affecting flags are one-way… you cannot flip a rule mid-vote"** — a property of
   the flag system, not of the record. The register that tracks flag hazards in the shipped drop is
   Doc 09's release-limitation list, not this document; qualifying it here would import a
   release-note concern into a vision document without a Doc 02 citation to ground it.
3. **§E1 "cross it and the party exists, with no one to appeal to"** — the claim is that no human
   approval step exists, which holds in v1. The alterability question behind it is now covered by
   tenet 1's marker and by §0's widened override.
4. **§F appendix and §D** — no integrity claims; §D's only capability claim (behavioural tracking)
   was handled at v2.2.0.

## IDs touched

- **Document:** `docs/01-press-release-prfaq.md` v2.2.0 → **v2.3.0, In Review** — via spec only.
- **Cited, not modified:** Doc 02 §16.5 (Charter Rule 3, tension **T-05**, approver-confirmed
  2026-08-23), §16.4 `H-05`; `NFR-028`; `FR-131` clause (e); Doc 06 §5.3.
- **Minted / removed / renumbered:** nothing. Nine tenets unrenumbered; §C's 17 rows, the §D
  bullets and the §E question sets unchanged in number and wording. Docs 02, 05, 13 and all
  product code untouched.

## Open items (corrected 21:40 against the stop-hook run)

1. **Doc 01 v2.3.0 cycle-3 review** — technical-writer, business mode. The spec is delivered and
   awaits application by the PM; loop position will be **cycle 3 of 5**, two cycles before the cap.
   I did **not** self-appoint and authored no review report.
2. **Doc 02 — CLOSED.** v2.17.1 was applied, reviewed by reviewer-qa and **PASSED at 96%
   (0C/0H/0M/7L)** — `artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md`. The
   document header already reads `Status: Approved`, so no owner action is outstanding; the
   supersedes-my-earlier-note item "awaiting application / needs index registration" is resolved.
   **Seven Lows are carried** on Doc 02 for the next version that touches their sections, four of
   them introduced by my own v2.17.1 rework and worth naming so they are not lost: ISS-01 (§8 FR-131
   scenario numbering now runs 1-5, 8, 9 — Scenarios 6 and 7 belong to the FR-132 block, so the
   FR-131 block has a numbering discontinuity); ISS-02 (three pointers cite Scenario 8 alone where
   Scenario 9 also applies); ISS-03 (two Scenario-8 steps restate rules rather than assert
   outcomes — a Gherkin style defect in scenarios I wrote); ISS-04 (one capitalised "Grade-8"
   surviving in the v2.17.0 change entry, the same casing nit ISS-03 of cycle 1 fixed in the
   clause). ISS-05/06/07 are the three long-carried items (FR-064, the v2.16.0 changelog entry,
   §13 (h)). **Owner: me, at the next Doc 02 touch.**
3. **`ENROL-COPY (j)`** remains OPEN in Doc 02 §13; the sre is consulted on `home.promises[3]`
   before I rule.
4. **Docs 04 v1.5.0 (FAIL 92%, 1 Medium) and 06 v2.7.0 (no report for the current version)** —
   the architect's and the engineer's documents. **Not mine**; their reworks route to those owning
   roles and their reviewers are recorded in
   `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Routed to the PM. I cannot
   clear the stop hook: every remaining item is either awaiting application of a spec I have already
   delivered, or belongs to another role.
5. **Gate 1 remains undecided.** v2.3.0 is a posture/accuracy rework; the v2.0.0 approval record and
   the pending Gate-1 decision are carried forward.
