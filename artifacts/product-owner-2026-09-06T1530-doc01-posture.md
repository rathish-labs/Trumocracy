# Session note — product-owner (Priya Raghunathan) — 2026-09-06T15:30

```
Role:          product-owner
Session:       Doc 01 v2.0.0 → v2.1.0 public-release posture banner
Trigger:       Approver ruling 2026-09-06 (Rathish Kumar), ruling 5 —
               "Doc 01 must carry a clear banner that it describes the full v2 target vision,
               NOT the current v1 state" (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11;
               dispatch REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md)
Deliverable:   artifacts/product-owner-2026-09-06T1530-doc01-spec.md  (8 anchored OPs)
Wrote:         that spec + this note. NOTHING else. Doc 01 itself is NOT edited by me — the
               project-manager applies the spec mechanically (I hold Write, not Edit).
```

## What I did

Read CLAUDE.md, Doc 01 in full (v2.0.0), PUBLIC-RELEASE-READINESS-2026-09-06 §1 row E-8 + §6,
Doc 02 §4.45 `FR-131` (v2.17.0, including clause (e)) and §16.4/§16.5, Doc 14 §0.1 and §2.6,
Doc 09 §0, the Definition-A caveat pattern in Doc 05 (§2 scope note, EP-06, US-0038) and Doc 13,
DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §11, and the review assignment.

Authored an 8-operation anchored FIND/REPLACE spec taking Doc 01 to **v2.1.0, Status: In Review,
Classification: Public**:

| OP | Target | Intent |
|---|---|---|
| 1 | header code block | `Version: 2.1.0`; `Status: In Review` stating what changed + citing ruling 5 and the spec, and **carrying the v2.0.0 record** (Approved, cycle 1 PASS 97%, Gate 1 decision pending — unchanged); `Classification: Internal → Public`; `Last updated: 2026-09-06`; a v2.1.0 change-log entry above the surviving v2.0.0 / v1.0.0 entries |
| 2 | after the "Based on" note, before §A | **New §0 banner** — "⚠️ READ THIS FIRST — this document is the target vision (v2), not what exists today" |
| 3 | §A tenet 2 (anonymity) | inline `(v2 target — see §0.)` marker |
| 4 | §A tenet 4 (receipt-freeness / coercion) | inline marker |
| 5 | head of §B | one marker covering the entire press release |
| 6 | §E1 "How is my data used and kept private?" | inline marker |
| 7 | §E1 "Can someone force me to vote a certain way?" | inline marker |
| 8 | §E3 "What happens if a government orders you to hand over the member list?" | inline marker (my judgement — see below) |

## The banner (§0) — substance

Written at Grade-8 (NFR-023) in the FR-131 clause (e) pattern, reusing approved wording rather
than minting claims. It says: this PR-FAQ is written as if the finished product had launched on
2027-06-01 and describes the **Definition-B (v2)** design — anonymous membership, a private and
receipt-free ballot, zero-knowledge enrolment — and **none of that is built**; what exists is a
working design plus **three application features behind feature flags** (party creation; joining
and membership; proposals and debate) running against **development mocks** (`IS_INSECURE_MOCK`
verifiers that accept any proof), **deployed nowhere** and never used for a real vote; **in v1
voting is NOT anonymous, NOT receipt-free and NOT coercion-resistant, and Trumocracy's own
database can see how each account voted and which party each account belongs to**; casting a vote
is not yet a working screen in 0.1.0 (Doc 14 §2.6); **backing a petition is a public act, on
purpose** (Doc 14 §2.2); nobody outside Trumocracy sees this on a public page, but our own records
can and a government could order us to hand them over; **do not use this software to organise
where being identified could hurt you**. It then points the reader to `README.md`, Doc 14
§0.1/§2.6, Doc 09 §0 (release not approved, MUST NOT be promoted) and Doc 02 §16 (v1/v2 split,
§16.4 honesty register, §16.5 rulings), and closes with an override clause: if any sentence in the
document would leave an ordinary Grade-8 reader believing Trumocracy cannot today link a person to
a vote, a membership or a petition backing, **the banner overrides it**.

Every sentence is sourced; the spec carries a claim→source table. The four banned FR-131 words
appear only in the negated form clause (a) mandates, or explicitly attached to the v2 design.

## Judgement on inline markers (asked for explicitly)

**The banner is mandatory and sufficient for the document read front-to-back. Markers are for
sections that get read — or quoted — in isolation.** I applied the fewest-edits test: mark a
passage only where an isolated read would produce a false belief that clause (e) forbids.

- **Marked (6 sites).** §A tenet 2 (anonymity) and tenet 4 (receipt-freeness) — tenets are
  designed to be quoted standalone. §B — **one** marker at the head of the section rather than six
  inside it (sub-headline, summary, solution, journey are uniformly future-tense fiction; a single
  marker at the top covers the whole block and is cheaper and clearer). §E1 data-and-privacy and
  §E1 coercion — FAQ answers are the canonical isolated read, and these two are the strongest
  present-tense privacy claims in the document.
- **Added beyond the passages the ruling named:** §E3 "What happens if a government orders you to
  hand over the member list?" — *"We hand over what we have, and what we have is not a member
  list."* This is the most dangerous sentence in Doc 01 to read alone: it is addressed to a state,
  it invites quotation, and it is **false for v1** (Doc 02 §16.4 `H-04`, §16.5 — `FR-128`'s
  subpoena test is PARTIAL, deferred in full to v2; the v1 operator holds member↔party and vote
  direction and can be compelled). I judged the banner alone insufficient here.
- **Considered and deliberately NOT marked**, to keep the edit small and avoid diluting the
  markers that matter:
  - §A tenet 1 ("No gatekeeper, ever — not even us") and tenet 8. In v1 the operator database is
    the source of truth for tallies (Charter Rule 3 / T-05, a v2-only property per Doc 02 §16.5).
    This is a *governance* claim, not a participation-act claim, so it is outside FR-131 clause
    (e); the banner's override sentence covers it. **Flagged as an open item below.**
  - §C metric table — every row is baseline/target/guardrail by construction and the section
    preamble already says the numbers become tracked requirements; no reader takes a target column
    for present state.
  - §D out-of-scope, §E2 stakeholder FAQ, §E3's other answers — these are commitments and
    trade-offs, not present-tense capability claims.
  - §E1 "We do not keep your identity documents or biometric templates". This is an **enrolment**
    claim, expressly outside clause (e) (governed by `FR-132` and Doc 02 §16.4 `H-16`–`H-18`,
    where the v1 truth is `phone_hash` / `subject_id_hash` retained and the vendor seeing the
    document). Rather than mark it, OP 6's marker **points at that register by name** so a reader
    following the trail lands on the right honesty rows. A full enrolment-claim pass on Doc 01 is
    the open item `ENROL-COPY (j)`, still OPEN in Doc 02 §13 tracked routing.

## IDs touched

- **Documents:** `docs/01-press-release-prfaq.md` (v2.0.0 → v2.1.0, In Review) — via spec only.
- **Cited, not modified:** `FR-131` (clauses (a), (b), (e)), `FR-132`, `FR-082`, `FR-086`,
  `FR-128`, `NFR-023`; Doc 02 §16.3, §16.4 rows `H-01`–`H-04`, `H-16`–`H-18`, §16.5; Doc 14 §0.1,
  §2.2, §2.6; Doc 09 §0; `REL-LIM-01`.
- **Minted:** nothing. **Renumbered:** nothing. **Removed:** nothing. No requirement, tenet,
  metric, FAQ, scope item or open item changed. Docs 02, 05, 13 and all product code untouched.

## Open items

1. **Doc 01 v2.1.0 review.** Neutral reviewer is the **technical-writer** (business mode, new
   instance) per REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md. I did **not** self-appoint and
   authored no review report — the SubagentStop audit showing Docs 02/04/06/07/08 in review
   mid-session is expected and was left alone (AL-CANDIDATE-3 discipline).
2. **§A tenets 1 and 8 vs the v1 operator-as-source-of-truth position** (Charter Rule 3 / T-05).
   Not marked this session — outside clause (e), covered by the banner override. If the reviewer
   or the approver disagrees, it is a two-line OP in the next version, not a rework.
3. **`ENROL-COPY (j)`** — the identity/enrolment claim class across public surfaces (Doc 01 §E1,
   README, landing copy) remains OPEN in Doc 02 §13 and is not closed by this session.
4. **Doc 01 §C kill-criterion metrics** are already annotated in Doc 02 §16.5 as applying, in v1,
   to platform-initiated exposure only. Doc 01 itself does not restate that; the banner and the
   §16 pointer carry it. A future version could add a one-line note under §C — deliberately not
   done now (fewest edits).
5. **Gate 1 remains undecided.** v2.1.0 changes posture and classification only; it does not move
   the Gate-1 decision, and the v2.0.0 approval record is carried forward verbatim in the header.

## Stop-hook block at session end — ROUTED to the PM, deliberately not cleared by me

On exit the SubagentStop hook (`hooks/run_gates.cjs`) blocked with:

```
Review loop blocked: ... no PASSING (or human-approved ESCALATED) document-review report
  - 02-requirements-srs.md v2.17.0 (business review) — NO report found for this version
```

**I did not clear it and I authored no review report.** Doc 02 is the document I own, and v2.17.0
is the `FR-131` clause (e) amendment **I authored** (spec
`artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md`, applied by the PM earlier this
session). Reviewing it myself would be the detector-≠-author violation recorded as
**AL-CANDIDATE-3**, now at three occurrences — the third being the product-owner's own 2026-09-06
01:23 self-appointment, recorded in
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`.

**Routing.** `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` already records the
neutral reviewer for **Doc 02 v2.17.0, business mode: reviewer-qa (Rafael Duarte)**, with the
product-owner listed under *Excluded* ("owner and author of the amendment"), and notes that the
Doc 02 cycle counter restarts at 1 for the new minor version. **Action owed by the
project-manager: dispatch that review.** The block is a sequencing artefact of five documents
(02, 04, 06, 07, 08) being In Review at once — the standing note in that assignment says exactly
this is expected and that a blocked role routes rather than self-appoints. It has no bearing on
the Doc 01 v2.1.0 spec delivered here, which is a different document with a different recorded
reviewer (technical-writer, business mode).
