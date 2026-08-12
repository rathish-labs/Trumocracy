# ADR-019 — Three-layer amendment boundary and Guarded Layer super-process

```
Status:        Accepted
Date:          2026-08-11
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-021, BR-008, BR-003, FR-118, FR-119, FR-120, NFR-017, NFR-018,
               CON-001, CON-002, CON-008, CON-012, CON-013, BR-011, NFR-003, NFR-010,
               RISK-31, DES-087, DES-091
Source:        OI-18-DECISION-2026-08-11.md (Rathish, 2026-08-11);
               GATE1-DECISION-2026-08-11.md §4
```

## Context

Doc 02 v2.1.0 introduced the steward-organisation requirement area and crystallised a conflict
that had been latent since v1.0.0: the platform contained both an enumerated set of "absolutely
entrenched" charter rules (one human one vote; no transferable power; no privileged role over
outcomes; unconditional right to fork; no behavioural surveillance; anonymity by default with
disclosure only by voluntary role-taking) and a second class of rules described as "absolute"
throughout the text but lying outside the entrenched charter. These were: CON-001 (parties
only, never state elections); receipt-freeness and coercion resistance (BR-011, NFR-003); data
minimisation (CON-002, CON-008, NFR-010); no bespoke unaudited cryptography (CON-012); the
non-violence clause (CON-013).

FR-119 in its v2.1.0 form would make the second class amendable at the highest citizen-vote
tier. This created an unacceptable gap: a determined majority could vote away receipt-freeness
or coercion resistance, which would leave the minority most at risk of coercion with no remedy
other than forking.

Three options were presented to the human approver (Rathish):

- **(a) Extend the entrenched charter to all named absolutes** — the fork-only category grows;
  no legitimate path to adopt a better coercion-resistance mechanism.
- **(b) Accept all named absolutes as Open Layer (ordinary) amendable** — deliberate
  weakening; any majority can vote everyone coercible.
- **(c) Two-tier core** — the six existing entrenched rules remain fork-only (Charter Layer);
  the named absolutes become a Guarded Layer class amendable only via a stricter super-process
  that the architect specifies.

OI-18-DECISION-2026-08-11.md records option (c) with one modification: CON-001 is promoted
into the Charter Layer because it is a scope boundary, not an implementation commitment. A
platform that
could vote itself into running state elections becomes a categorically different and more
dangerous system.

The approver's rationale, preserved verbatim: "receipt-freeness is the case that makes the
layering necessary. It must survive an ordinary majority — a majority voting away
receipt-freeness is a majority voting to make everyone coercible, including the minority most
at risk. But it is still an implementation commitment: if a better coercion-resistance
technique emerges there must be a legitimate path to adopt it. The Charter Layer defines what
the system is; the Guarded Layer protects people from a majority while remaining evolvable."

NFR-017 requires a defined amendment process. The potential conflict with Charter Layer
entrenchment is resolved: NFR-017's process governs the Guarded Layer and Open Layer only.
The Charter Layer is unamendable by definition; the fork right (FR-120) is the only
legitimate path to change it. This is not a contradiction — it is the deliberate boundary
of the amendment process.

## Decision

### Three-layer amendment boundary

NOTE — naming disambiguation: "Charter Layer / Guarded Layer / Open Layer" are the platform
amendment boundary labels. Party governance tiers (T0 policy / T1 organisational / T2
structural / T3 constitutional) are a separate namespace defined in Doc 02 and the party
charter rules. These two systems are independent; the identical 60%/15% bar shared by the
Open Layer and party T2 structural tier is coincidental, not definitional. Doc 02 v2.2.0
uses "Tier 1/2/3" for the amendment boundary; those map to Charter Layer / Guarded Layer /
Open Layer respectively.

| Layer | Members | Amendment path |
|-------|---------|----------------|
| **Charter Layer — Entrenched charter (fork-only)** | Seven rules: (1) one human one vote; (2) no transferable power; (3) no privileged role over outcomes; (4) unconditional right to fork; (5) no behavioural surveillance; (6) anonymity by default with disclosure only by voluntary role-taking; (7) CON-001 — parties only, never state elections (promoted 2026-08-11, OI-18) | Unamendable by any vote at any layer. Changeable only by fork. `ProtocolGovernance.proposeAmendment()` checks `entrenched[ruleId]` at submission and reverts `EntrenchedRule` with no exception path. |
| **Guarded Layer — Named absolutes (super-process only)** | BR-011 / NFR-003 (receipt-freeness, coercion resistance); CON-002 / CON-008 / NFR-010 (data minimisation, no personal data on governance record); CON-012 (no bespoke unaudited cryptography); CON-013 (non-violence clause) | Super-process only — five properties enforced in code (see below). |
| **Open Layer — Everything else (ordinary citizen vote)** | All remaining protocol rules and governance parameters | Ordinary citizen vote per NFR-017 with Open Layer constants from DES-091 / §10.11 of the SDD. |

### Guarded Layer super-process — five required properties

All five properties are code-enforced in `ProtocolGovernance` (DES-087). `enact()` reverts
unless all five preconditions are satisfied. These five properties correspond verbatim-in-
substance to the five properties recorded in OI-18-DECISION-2026-08-11.md. The quorum
requirement (see "Additional design requirement" below) is an additional constraint beyond
the OI-18 minimum — OI-18 mandates it as a required characteristic but does not number it
among the five.

**Property 1 — Supermajority materially above the ordinary tier.**

The Guarded Layer supermajority is set at **80% of votes cast** (Open Layer: 60%). The 20
percentage-point margin ensures that no coalition comfortably capable of passing an ordinary
amendment can also pass a named-absolute amendment without recruiting a substantially larger,
broader coalition. An 80% threshold in a body with meaningful political diversity requires
near-consensus. At 60% a slim supermajority suffices; at 80% deep cross-faction agreement is
required, substantially reducing the risk of a transient or factional majority carrying a
change that weakens fundamental protections.

**Property 2 — Inter-vote window long enough that the fork right is genuinely exercisable.**

The inter-vote window is set at **180 days**. The reasoning ties directly to FR-053 and
NFR-018:

- FR-053 fork mechanics: fork initiation requires at least 10% of enrolled members as
  initiators (nullifier-proven) plus a 30-day cooling-off period. A fork petition after that
  must gather the activation threshold (FR-016) over its petition window.
- NFR-018 data-export guarantee: members have the right to export their party state at any
  time.
- Minimum realistic fork cycle: initiators gathered, 30-day cooling-off, activation petition
  window (minimum 30 days per FR-017) = approximately 60-90 days from decision to fork
  initiation, plus time to build a viable alternative.

180 days is selected as the window that gives a member who observes the first vote and decides
to fork a realistic time to: form a coalition, reach 10% initiator threshold, serve the 30-day
cooling-off period, run the activation petition, and reach the point of a viable alternative
before the second vote can open. A window shorter than 180 days would compress this cycle to
the point where the fork right exists in name but not in practice.

**Property 3 — Two consecutive affirmative votes separated by the inter-vote window.**

A single vote, even at 80%/25%, can represent a transient majority. Two votes separated by an
enforced gap ensure that the supermajority persists through the full window and cannot be a
momentary alignment. The first vote (`firstVote`) and second vote (`secondVote`) are tracked
in separate `superProcessState` slots; `enact()` requires both to have passed.

**Property 4 — Growth-surge defence active throughout both votes and the inter-vote window.**

The growth-surge defence (DES-020, FR-023/FR-028 mechanics) is active throughout both votes
and during the inter-vote window. Snapshot eligibility is frozen at `snapshotRoot` for each
vote. A post-snapshot surge cannot affect either vote's outcome. This property is
code-enforced: `snapshotRoot` is committed at `proposeAmendment()` and cannot be updated
between firstVote and secondVote.

**Property 5 — Independent audit of the proposed change published before the second vote.**

An audit of the proposed change (not of the platform generally) MUST be published at least
**30 days before the second vote can open**. The 30-day lead time gives members meaningful
time to read and respond to the audit before casting the deciding vote. Publishing a trivial or
incomplete audit ref does not bypass this property: the 30-day window begins at
`auditPublishedAt`, and the second vote cannot open until `block.timestamp >= auditPublishedAt
+ AUDIT_LEAD_TIME`. The audit is published by a steward via `publishAuditRef()` (within the
DES-089 enumerated-power allowlist).

**Additional design requirement (beyond OI-18 minimum) — Quorum materially above the ordinary tier.**

The Guarded Layer quorum is set at **25% of enrolled citizens** (Open Layer: 15%). The 10
percentage-point margin ensures that broad participation — not a high turnout among a
mobilised minority — is required. A Guarded Layer vote with only 15% turnout would be
indistinguishable from an ordinary amendment vote; the higher quorum demands a genuinely
platform-wide conversation.

### Open Layer constants (for completeness, normative in DES-091)

Quorum: 15% enrolled. Supermajority: 60% of votes cast. Timelock: 90 days.

## Security properties

| Property | Mechanism | Residual |
|---|---|---|
| Entrenched rules immune to any vote | Code rejects Charter Layer proposals at submission | None — the code path does not exist |
| Transient majority cannot carry Guarded Layer | Two-vote window, 180-day separation | A sustained 80%/25% majority over 180+ days CAN change a named absolute — this is by design |
| Fork right exercisable before Guarded Layer enactment | 180-day inter-vote window | Members in low-connectivity environments have less time to organise — accepted residual; export is always available (NFR-018) |
| Audit suppression cannot open second vote early | `auditPublishedAt + AUDIT_LEAD_TIME` enforced in code | A bad-faith audit can be published; the 30-day window is for member response, not audit quality — quality is a social/governance control |
| Surge cannot swing either vote | Snapshot eligibility frozen; surge defence active | None |

## Honest consequence — the negative

A determined supermajority that sustains 80% approval AND 25% turnout across 180+ days, that
tolerates a published independent audit, and that faces a fork attempt that does not reach
critical mass CAN amend a named absolute. This is the deliberate design choice. Option (a)
would prevent this but at the cost of freezing implementation commitments permanently —
including the cryptographic and coercion-resistance mechanisms that may legitimately need to
evolve as better techniques emerge. The fork right is the residual protection: any member who
considers the change intolerable can exit with full party history intact (NFR-018, DES-044).

## Alternatives rejected

**Option (a) — extend entrenched charter to all named absolutes.** Rejected. If receipt-
freeness or data-minimisation techniques improve, there must be a legitimate way to adopt the
improvement. Locking implementation commitments into the fork-only category forces a full fork
to adopt a better privacy technique, which is disproportionate and discourages improvement.
CON-001 was promoted to the Charter Layer specifically because it is a SCOPE boundary (the
kind of system this is), not an implementation commitment.

**Option (b) — accept all named absolutes as ordinary Open Layer votes.** Rejected by the
approver with the receipt-freeness rationale above. A 60% supermajority that can vote away
coercion resistance is voting to make everyone coercible. The majority capable of doing so is
also the majority least at risk; the minority most at risk has no recourse except forking.

**Lower Guarded Layer thresholds (e.g., 70%/20%).** Rejected at design. The 80%/25% values
are chosen because the ordinary Open Layer already sits at 60%/15%. A Guarded Layer threshold
below 80% would be too close to the Open Layer to constitute a materially higher barrier.
The 20pp supermajority margin and 10pp quorum margin are the minimum that make the layers
functionally distinct in a realistic political environment.

**Shorter inter-vote window (e.g., 90 days).** Rejected. 90 days compresses the fork cycle
to the point where the 30-day cooling-off + activation petition alone consume the window. A
member who observes the first vote has less than 60 days to organise a fork before the second
vote can open. That is not genuinely exercisable. 180 days is the minimum that gives a
plausible fork cycle including coalition-building time.

## Consequences

**Good**
- Charter Layer rules are tamper-proof by construction: the code path to amend them does not exist.
- Guarded Layer named absolutes can evolve (legitimate improvements to coercion-resistance
  techniques are possible) but only with a near-supermajority sustained across a multi-month
  deliberation.
- The fork right is a genuine backstop: the 180-day window is calibrated to make it
  exercisable, not decorative.
- NFR-017's amendment process is fully satisfied for the Guarded Layer and Open Layer; the
  absence of a process for the Charter Layer is the intended design, not a gap.

**Accepted**
- The system accepts that a sufficiently large, sustained, audit-surviving majority CAN weaken
  a named absolute. This is the cost of keeping implementation commitments evolvable.
- The 30-day audit lead time is a process constraint, not a quality guarantee. Community
  diligence is the quality control; the design provides time, not judgment.

## Amendment — 2026-08-11 (SC-17: citizen-initiated fallback for publishAuditRef)

**Security scan finding:** SC-17 (HIGH) — a single steward vacancy or coordinated inaction could permanently stall the Guarded Layer super-process at Property 5 (audit publication before second vote), making the amendment pathway inaccessible to citizens.

**Amendment to Property 5.** Property 5 as stated in this ADR assigns the audit publication step exclusively to a steward via `publishAuditRef()`. This creates a single point of progress that the citizen body cannot bypass. The amendment introduces a citizen-initiated fallback that preserves the audit substance guarantee while eliminating the single point of control:

- After **STEWARD_INACTION_WINDOW** (60 days from `firstVoteClosedAt`, normative value set in Doc 03 §10.11) any enrolled citizen MAY call `publishAuditRef(issuerId, auditRef)`. The 30-day audit lead time before the second vote (`AUDIT_LEAD_TIME`) is UNCHANGED — it runs from the timestamp of the publication, regardless of who published.
- **Steward vacancy** (no registered steward in `StewardRegistry`) triggers the citizen fallback IMMEDIATELY — no 60-day window applies. A vacant steward layer is a known operational condition, not an attack, and citizens must not be locked out of the amendment pathway indefinitely because of it.
- Audit SUBSTANCE is unchanged: a citizen who publishes a trivial or bad-faith audit ref does not bypass the 30-day community-review window; the social/governance quality control described in this ADR applies equally to citizen-published refs.

**Design element:** DES-092 (Doc 03 §5.2). The citizen-fallback pattern is also applied to the issuer-onboarding coordination trigger (SC-19, same inaction window and vacancy rule — Doc 03 §5.2 DES-092).

**No other properties changed.** The two-vote requirement, 80%/25% thresholds, 180-day inter-vote window, growth-surge defence, and 30-day audit lead time are all unchanged by this amendment.
