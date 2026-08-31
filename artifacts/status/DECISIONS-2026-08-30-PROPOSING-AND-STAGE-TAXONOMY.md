# Approver rulings — proposing is not counting-gated; FR-091 / `PROPOSAL_STATE` are layered

```
Date:        2026-08-30
Approver:    Rathish (Human Approver)
Subject:     The two open questions recorded by the proposals & debate drop
Origin:      Doc 03 v2.9.3 §10.13.13 "Two open questions this increment records rather than resolves"
             (architect, proposals build session 2026-08-29)
Status:      RULED — applied at Doc 02 v2.16.0 and Doc 03 v2.10.0
Scope:       Documents only. Neither ruling changes any shipped code; both confirm what is built.
```

---

## Ruling 1 — PROPOSING IS OPEN PARTICIPATION, NOT AN FR-123 COUNTING ACTION

### 1.1 What was asked

The commissioning brief for the proposals & debate drop stated that proposing, like voting, is a
counting action gated through `IEligibilityVerifier`. The engineer did not build that. It built the
FR-conformant reading instead — authorship gated on self-declared Worker tier, the eligibility seam
reached at exactly one call site (`admitToBallot()`, scope `BINDING_VOTE`) — and flagged the
divergence for a ruling rather than resolving it silently.

### 1.2 The ruling (verbatim, Rathish, 2026-08-30)

> "My original brief said proposing should be an FR-123 counting action; that was wrong and the
> engineer correctly built the FR-conformant reading instead. Gating authorship on verification
> status is a participation restriction, which FR-020 prohibits. Ruling: proposing/authoring is
> OPEN participation (any member, phone-verified, no ID gate); only VOTING on a proposal is the
> FR-123 counting action. Record this explicitly so no future session re-gates authorship. No
> FR-024/FR-090/DES-100 amendment to gate proposing — the opposite: confirm the non-gated reading
> is correct and note my original instruction was superseded by the FR-020 constraint."

**The built reading is CONFIRMED. The original instruction is SUPERSEDED by the FR-020 constraint.**

### 1.3 What the ruling does and does not change

This is the distinction on which the ruling turns, and the reason it does not contradict OI-14.
Two orthogonal axes govern participation (Doc 02 §4.41 TWO-AXIS NOTE). The ruling speaks to one of
them and leaves the other exactly as it stands:

| Axis | Question it answers | Gate on authoring | Changed by this ruling? |
|---|---|---|---|
| **Verification** (FR-122 / FR-123) | does this action COUNT? | **NONE.** Authoring is open participation: any member, phone-verified, no government-ID check, no verifier call | **CONFIRMED as none** — this is the ruling |
| **Privacy disclosure** (§4.24, OI-14) | how is the participant's identity revealed? | **Worker tier or above**, self-declared, no approval | **UNCHANGED** — OI-14 stands in full |

**Read the ruling precisely.** "Open participation … no ID gate" is a statement about the
*verification* axis. It does **NOT** remove the OI-14 requirement that an author hold Worker tier
or above. That requirement is not a permission gate and never was: Worker tier is **self-declared**
with nobody approving it (FR-080), and it exists for an **anonymity** reason, not a merit one —
authorship is public (FR-090) and a Supporter is anonymous unconditionally (FR-082), so a Supporter
cannot author without destroying their own anonymity. A member who wishes to author simply declares.
Nothing and nobody stands between a member and authorship.

Any future session reading "open participation" as licence to delete `canAuthorProposal()` would be
misreading this ruling. Any future session adding a verifier call to the authoring path would be
violating it.

### 1.4 Why the built reading is right

Four independent lines converge, and the ruling adopts the first as decisive:

1. **FR-020 (decisive).** Verification-status gating on authoring is a participation restriction,
   which FR-020 prohibits absolutely. reviewer-qa reached the same conclusion independently during
   the drop review, in its own words: gating authorship on verification status would be "a
   participation restriction based on verification status, which FR-020 explicitly prohibits."
2. **DES-100's ratified allowlist.** `COUNTING_ACTION` has exactly three members —
   `STRENGTH_CONTRIBUTION`, `BINDING_VOTE`, `CANDIDACY` — approver-ratified 2026-08-24; the seam
   throws `NotACountingAction` on anything else. Adding PROPOSING would extend a ratified allowlist.
3. **FR-024.** Proposal submission carries no pre-screening, moderation or approval by any member,
   office-holder or platform actor.
4. **The inversion test.** Gating authorship would mean an unverified member may join, deliberate
   and vote-but-not-count, yet may not *speak* by proposing. That inverts "verification gates
   counting, never participation" (Decision 2, 2026-08-20) — it would gate speech while leaving
   the count ungated, which is the opposite of the design rule's intent.

### 1.5 No amendment follows

**No amendment is made to FR-024, FR-090 or DES-100.** Each already says what the ruling confirms.
The ruling is recorded as a confirming annotation on FR-024, FR-090 and FR-123, plus this record.

The converse is worth stating because it was the live alternative: had the ruling gone the other
way, it would have required a **DES-100 allowlist amendment** and an **FR-024/FR-090 amendment** —
governance work through the SOP, not a code change. It did not go that way.

### 1.6 Confirmed against the shipped code

| Guarantee | Where it is enforced | Test |
|---|---|---|
| The service never holds a verifier, and authoring cannot reach one | `ProposalService` constructor — `this._verifier` deliberately absent; asserted `undefined`, and `fileProposal` asserted to take no verifier parameter (`packages/sdk/src/proposals.js`) | UT-0834 |
| Deliberation is open to every member including open-tier, and calls no seam | `postDeliberation()` | UT-0839, UT-0840 |
| The authoring rule takes no approver | `canAuthorProposal(participationTier)` — arity 1, so no approver can be passed | UT-0089 |
| Exactly one seam call site, scope `BINDING_VOTE` | `admitToBallot(windowId, member, verifier)` — the verifier arrives per-call, never held | UT-0843 |
| A refusal at the ballot gate states what the member keeps | refusal copy names membership, deliberation, reading the trail | UT-0844 (sdk), UT-0881 (web) |

No code change is required by this ruling, and none is made.

---

## Ruling 2 — FR-091 AND `PROPOSAL_STATE` ARE ONE DECISION SEEN AT TWO LAYERS

### 2.1 What was asked

The architect was asked to confirm whether FR-091's eight deliberative stages and ADR-008's
`PROPOSAL_STATE` are **(a)** the same model at two layers — user-facing vs on-chain — in which case
both are canonical at their own layer with the mapping as the bridge; or **(b)** genuinely
competing, in which case one must be named normative at the v2 seam. The approver's instruction was
explicit: *do not force a choice if they are complementary — record the layered relationship.*

### 2.2 The architect's finding: (a) — COMPLEMENTARY, NOT COMPETING

They are not two candidate models of one thing. They are **different kinds of thing about different
subjects**, and four structural properties settle it — any one would be sufficient:

1. **Different subjects, and the cardinality proves it.** FR-091's stage belongs to the **decision
   window**, which under DES-104 may hold several competing proposals answering one question; the
   stage is stored on the window and a proposal carries only its `windowId`. The ballot state
   belongs to **one proposal's ballot**. A window holding three competing proposals has **one**
   FR-091 stage and **three** independently-resolving ballot states. One-to-many cannot be a
   renaming.
2. **Total and monotone vs branching with terminal exits.** FR-091 is a sequence every decision
   walks in order, never skipping. The ballot machine branches to terminal outcomes — `Defeated`,
   `Cancelled` — which are not positions in any sequence.
3. **Stored vs derived.** FR-091's stage is stored and advanced explicitly by `advanceStage(windowId)`.
   `stateAt(sched, now, { executed, cancelled, outcome })` in
   `packages/protocol/src/governance.js:210` is a **pure function** of schedule, tally and flags —
   nothing stores it. A stored position and a derived value are not one variable.
4. **Different spans.** FR-091 covers *review*, *debate* (before a ballot exists) and *measurement*
   (after enactment) — none of which the chain models. `PROPOSAL_STATE` covers *tallying* and the
   *timelock* — neither of which FR-091 names.

**Ruling: (a). Both are canonical at their own layer.** FR-091 is normative for the **public
process** — where a decision stands in its public life. `PROPOSAL_STATE` is normative for the
**ballot** — what the chain enforces about a vote. Neither is normative over the other, because
neither answers the other's question.

### 2.3 The bridge — the mapping, recorded

_(Corrected at Doc 03 v2.11.0 after review — the version first recorded here mapped `PROPOSAL` and
`REVIEW` to a `DRAFT` state that has no producer anywhere in the repository, and described
`CANCELLED` as reachable from any pre-execution state, which the contract contradicts. The
authoritative mapping is Doc 03 §10.13.13(a); it is reproduced here as corrected.)_

| FR-091 public-process stage | Ballot state (`Governor.State`) | Relationship |
|---|---|---|
| `PROPOSAL` | `Discussion` | the ballot machine has **no pre-discussion state**; it begins here |
| `REVIEW` | `Discussion` | " |
| `DISCUSSION` | `Discussion` | **name collision, not identity** — see note below |
| `DEBATE` | `Discussion` | the single pre-vote period spans **all four** |
| `VOTE` | `Voting` | 1:1 |
| `DECISION` | `Tallying` → `Defeated` \| `Timelocked` | one process stage contains the ballot's outcome branch |
| `IMPLEMENTATION` | `Executed` | FR-026's timelock elapses inside `Timelocked`; enactment lands in `Executed` |
| `MEASUREMENT` | *(none)* | no post-enactment outcome state; FR-092's measured outcome is off-chain |
| *(none — window ends)* | `Cancelled` | **only during the discussion period** — `cancelDuringDiscussion` is the sole entrypoint (FR-029: withdraw before voting opens, not after) |

**The `discussion` name collision is the trap in this mapping and is called out deliberately.** The
two `discussion`s are not the same span. ADR-008 §6's pre-vote period (T2: 7 days, T3: 14 days) is a
**single** ballot state covering FR-091's **proposal + review + discussion + debate**. An
implementer who equates them by name builds a stage machine that skips **three** stages.

### 2.4 The rule that governs the v2 seam — derivation direction

The seam question is not "which taxonomy wins" but "which layer owns each fact". The normative rule:

> **The ballot layer is the sole authority on ballot state.** The citizen-facing FR-091 stages
> `VOTE`, `DECISION` and `IMPLEMENTATION` MUST be **derived** from the state held by whatever
> backing `IBallotService` (DES-096) is bound to, and MUST NOT be tracked independently of it. In
> **v1** that is the **database backing**; at the **v2 seam swap** it becomes the **chain**
> (`Governor.State`). The stages `PROPOSAL`, `REVIEW`, `DISCUSSION`, `DEBATE` and `MEASUREMENT`
> have no ballot-layer counterpart and remain owned by the application layer in both versions.

This is the rule that matters in practice. The failure mode a "pick one taxonomy" answer would have
invited is **two stored copies of one fact drifting apart** — a window displaying `IMPLEMENTATION`
while the ballot layer says `Defeated`. Derivation makes that unrepresentable rather than merely
discouraged.

_(Corrected at Doc 03 v2.11.0 after review. This rule was first scoped to the v2 seam alone, on the
ground that "v1 holds no ballot (ADR-024 §(b))" — a mis-citation: ADR-024 §(b) removes on-chain
**execution** in v1 and puts votes in Postgres, while **DES-096 specifies a v1 ballot backing
outright**. So scoped, the rule left the drift failure mode unbound exactly where v1 first holds a
vote. The narrower true claim is that **the proposals and debate layer built in this drop** holds no
vote — it stops at `admitToBallot()` and hands off — so nothing in the shipped code derives anything
yet.)_

### 2.5 Newly surfaced by doing the mapping — routed, not ruled

Performing the mapping honestly surfaced a gap in **FR-091's text** that neither taxonomy causes:

FR-091 says every proposal MUST move through all eight stages in sequence and **no stage MAY be
skipped**. A **defeated** or **cancelled** decision cannot be implemented or measured. Under the
mapping, such a window **terminates at `DECISION`** and does not advance — and *terminating is not
skipping* — but FR-091's text does not say so, so a future implementer could read the requirement as
obliging an implementation stage for a proposal the members rejected.

This is a **requirement clarification owed to the product-owner**, not an architect's ruling to make
and not a defect in what is built (v1 holds no vote, so no window can yet be defeated). Recorded in
Doc 02 §13 tracked routing **(h)** and Doc 03 §16 **Q15**.

### 2.6 Does FR-091's text need to name the mapping?

**No.** FR-091 is a requirement about the public process and is complete as written for that
subject. The mapping is a *design* artifact — it belongs in Doc 03 §10.13.13, where it now sits.
Requiring FR-091 to name an on-chain enum would bind a requirement to an implementation detail that
ADR-024 has already scheduled to change.

---

## 3. Tracked, with no ruling sought

Both recorded as honestly OPEN; neither is affected by the rulings above.

| Row | Status | Why it stays open |
|---|---|---|
| **FR-091** | ☐ **OPEN — G-NOMECH** | Order guarantees are complete and fully tested. The clause "stage transitions executed by code **per published timelines**" is unwired: `schedule()` exists in `governance.js` but the proposal service never calls it, and the demo advances by a button. The anti-capture half is done; the automation half is not. Ruling 2 does **not** change the published stage set, so it changes nothing about what this row must test. |
| **FR-092** | ☐ **OPEN — G-NOMECH** | Fails on two counts. (1) The trail records none of the vote result, enacted consequence, implementation status or measured outcome the requirement enumerates — correctly, because this layer holds no vote; the ballot layer is owed. (2) "Reconstructable end-to-end by any third party from public data alone" additionally needs the DES-097 audit-record anchoring (Doc 13 stage S-8), which is not built. |

---

## 4. Application

| Document | Change |
|---|---|
| Doc 02 v2.16.0 | FR-024, FR-090, FR-123 confirming annotations (no normative text amended); §13 tracked routing (f), (g) and (h); (e) closed |
| Doc 03 v2.10.0 → **v2.11.0** | §10.13.13 both open questions closed with the mapping and the derivation rule; §5.2 DES-104/DES-105 rows; §16 Q15 minted. **v2.11.0 rework after a FAIL review** corrected the mapping table (no `DRAFT` producer; `Cancelled` only during discussion), rebound the derivation rule to the v1 ballot backing as well as v2, withdrew an unsupported winner-selection illustration, fixed the `stateAt()` name, and minted **Q16** (two competing proposals can both pass; nothing says what then happens) and **Q17** (neither ballot enum is differentially tested) |
| Doc 07 v2.4.3 → **v2.4.4** (Approved) | stale "ruling owed" cross-references corrected. **v2.4.4 after a FAIL review** fixed TC-3545's own row, which still said a ruling was pending while three notes *about* it said otherwise |
| Doc 08 v2.5.3 → **v2.5.4** | FR-090 revisit flag discharged; FR-091 taxonomy note corrected; both rows otherwise unchanged. **v2.5.4 after a FAIL review** closed two contradicting gap-log entries, recorded Q15 against FR-091, and fixed five carried count errors |

**Recorded by:** Rathish (Human Approver), 2026-08-30.
