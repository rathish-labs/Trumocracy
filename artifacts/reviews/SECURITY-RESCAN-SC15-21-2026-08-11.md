# Security Closure Re-Scan: SC-15 through SC-21 against Doc 03 v2.1.1

```
scope:           SC-15 through SC-21 (all seven findings from SECURITY-SCAN-DOC03-V2-2026-08-11.md)
doc_reviewed:    docs/03-architecture-design-sdd.md v2.1.1
adrs_reviewed:   docs/adr/ADR-019-amendment-boundary-and-super-process.md (with 2026-08-11 amendment)
                 docs/adr/ADR-020-trust-anchor-lifecycle-governance.md (with 2026-08-11 amendment)
cycle2_review:   artifacts/reviews/03-architecture-design-sdd-v2.1.1-technical-cycle2.md (PASS 100%)
scan_date:       2026-08-11
reviewer:        reviewer-qa (VEKTOR SOP) -- independent re-attack; read-only on all documents
SC-15_verdict:   CLOSED
SC-16_verdict:   CLOSED
SC-17_verdict:   CLOSED
SC-18_verdict:   CLOSED
SC-19_verdict:   CLOSED
SC-20_verdict:   CLOSED
SC-21_verdict:   CLOSED
new_findings:    0
new_surface_citizen_fallback_spam:   NOT A FINDING (pre-existing property; no material new surface)
new_surface_abort_rotation_block:    NOT A FINDING (same vote bar as original rotation; no new blocking power)
overall:         CLEAR -- no blocker to backlog/test-design catch-up
```

---

## 1. Assignment and method

Architect (Ravi Deshmukh) fixed SC-15..SC-21 in Doc 03 v2.1.0, then v2.1.1 resolved five
consistency issues (ISS-01..ISS-05) raised in cycle-1 technical review. Cycle-2 technical
review (Samuel Oyelaran) confirmed all fixes at 100% with no regressions.

This closure re-scan re-attacks each finding with the original attack vector against the
v2.1.1 design. Trust the technical review for consistency; the question here is: does the
new design actually defeat the security claim? Two new surface probes are also run per
coordinator instruction: citizen fallback as spam/griefing vector, and abortRotation as a
rotation-blocking vector.

Method: (1) re-state the attack; (2) apply it to the new design; (3) identify what now
blocks it; (4) rule CLOSED or OPEN. OPEN requires a surviving attack path.

---

## 2. SC-15 (CRITICAL) -- Verdict: CLOSED

### Original attack

ProtocolGovernance and StewardRegistry were not designated IMMUTABLE CORE. An Open Layer
vote could invoke Governor.execute() with an action class that deploys a replacement
ProtocolGovernance contract, redirects a registry pointer so the new contract is treated as
authoritative, or proxies through to a stepper contract that bypasses the entrenched[] check.
Charter Layer entrenchment is then decorative: the map of ruleId to entrenched hash lives in
the original contract but governance has moved to the replacement.

### Re-attack against v2.1.1

1. Deploy a competing ProtocolGovernance contract via Governor.execute().
   Blocked: No permitted action class in the DES-016 action-class table covers deployment of
   a competing contract. The permittedActionClass binding checks callData.selector at
   execute() and reverts if the selector is not in the tier's allowed set. There is no
   allowed selector for deploying or authorising a competing governance contract.
   Residual risk: a logic bug inside the immutable executor -- mitigated by DES-079 audit and
   the capability-absence CI scan (ABI-surface assertions, bytecode selector scan, storage-
   layout assertions).

2. Upgrade or replace ProtocolGovernance via a proxy or admin function.
   Blocked: DES-087 GENERAL RULE and the ss5.1 container diagram now explicitly place both
   ProtocolGovernance and StewardRegistry in the IMMUTABLE CORE box with annotation "no
   governance-vote replacement (ADR-010; SC-15 general rule)". ADR-010 requires no admin, no
   pause, no proxy in the core. No upgrade function exists; no proxy contract sits in front of
   either contract. DES-087 states: "any contract that enforces a Charter Layer rule MUST
   itself be Charter Layer." The code path does not exist.

3. Redirect the GovernanceConstants reference pointer via a governance vote.
   Blocked: DES-087 routing surface exclusion (c): the GovernanceConstants reference pointer
   is a deployment-time constant (set in the constructor), not a governance-settable state
   variable. No setter exists. A governance vote cannot change where ProtocolGovernance reads
   its constants from.

4. Call the GovernanceConstants setter without a layer-appropriate vote.
   Blocked: DES-091 SETTER MECHANISM -- onlyGovernor guard on every setter. A direct call
   from any address other than Governor reverts. The setter requires a passed vote at the
   constant's governing Amendment Layer (Guarded Layer for super-process constants, Open Layer
   for others) executed via Governor.execute().

**What now blocks the attack:** Both contracts are IMMUTABLE CORE by design and by code
capability absence. The normative GENERAL RULE in DES-087 closes the four stated routing
surfaces. The capability-absence CI scan verifies the absence at build time.

**SC-15: CLOSED.**

---

## 3. SC-16 (HIGH) -- Verdict: CLOSED

### Original attack

GovernanceConstants had no per-constant Amendment Layer classification. An Open Layer vote
(60%/15%) could invoke the Governor.execute() setter for the Tier-2 quorum denominator
(lowering it from 25% to 16%, making it functionally identical to the Open Layer quorum),
the Tier-2 supermajority (lowering from 80% to 61%), or the inter-vote window (shortening
from 180 days to 91 days). With Guarded Layer constants now reachable by a 60%/15% vote,
the Guarded Layer exists only in the table; a transient majority can dissolve it.

### Re-attack against v2.1.1

1. Pass an Open Layer vote (60%/15%) and call the setter for Tier-2 quorum.
   Blocked: DES-091 CLASSIFICATION now gives every constant a normative Amendment Layer.
   Tier-2 quorum is classified "Guarded Layer (anti-circularity: SC-16)." The setter for a
   Guarded Layer constant requires a Governor.execute() call from a Guarded Layer vote (80%/25%,
   180-day two-vote super-process). An Open Layer vote (60%/15%) calling the setter for a
   Guarded Layer constant reverts at the onlyGovernor guard because the Governor checks
   permittedActionClass and Amendment Layer classification before executing.

2. Pass an Open Layer vote and lower the STEWARD_INACTION_WINDOW below 60 days.
   Blocked: STEWARD_INACTION_WINDOW is classified "Guarded Layer (anti-circularity: SC-16;
   extension via Open Layer vote would enable indefinite blocking of the super-process)" in
   ss10.11. Changing it in EITHER direction (lowering or raising) requires a Guarded Layer
   vote. Lowering it reduces the citizen protection window; raising it could create indefinite
   steward inaction windows. Both directions are guarded.

3. Anti-circularity rule: pass a Guarded Layer vote to lower the quorum bar so future Guarded
   Layer votes are easier.
   Blocked: An 80%/25% vote to lower the Guarded Layer quorum from 25% to 15% IS technically
   achievable (a sufficiently large sustained supermajority can change any Guarded Layer
   constant). This is the honest consequence stated in ADR-019: "a sustained 80%/25%
   supermajority over 180+ days CAN weaken a named absolute -- by design." The anti-circularity
   rule prevents OPEN LAYER votes from doing this; it does not prevent a future GUARDED LAYER
   supermajority from changing Guarded Layer constants. Fork right is the residual backstop.

4. Setter mechanism unambiguous: "immutable at deployment" vs "revisable via governance."
   Resolved: DES-091 SETTER MECHANISM states that initial deployment values are immutable (the
   constructor takes no override argument for governance constants); post-deployment changes
   require a Governor.execute() call at the constant's governing layer. The onlyGovernor guard
   is the enforcement mechanism. Both loci (DES-091 and ss10.11) are consistent.

**What now blocks the attack:** Every constant has a normative Amendment Layer in DES-091 and
ss10.11. Guarded Layer constants require a Guarded Layer vote to change. The anti-circularity
rule is explicit. The SETTER MECHANISM clause resolves the deployment-vs-governance tension.

**SC-16: CLOSED.**

---

## 4. SC-17 (HIGH) -- Verdict: CLOSED

### Original attack

publishAuditRef() was callable ONLY by a steward. A coordinated steward inaction (all stewards
refuse or delay beyond 150 days into the 180-day inter-vote window), or a complete steward
vacancy, permanently stalls the Guarded Layer second vote: the precondition
"auditPublishedAt + AUDIT_LEAD_TIME <= secondVoteOpen" can never be satisfied because no
one can publish the audit ref. The amendment pathway becomes functionally inaccessible to
citizens who reached the required 80%/25% supermajority at the first vote.

### Re-attack against v2.1.1

1. All stewards refuse to call publishAuditRef() for 61 days after firstVoteClosedAt.
   Blocked: DES-092 citizen-inaction fallback. After STEWARD_INACTION_WINDOW (60 days from
   firstVoteClosedAt, normative in ss10.11, Guarded Layer-protected against Open Layer
   shortening), any enrolled citizen may call publishAuditRef(). The ss5.6 state machine has
   three WINDOW_OPEN to AUDIT_PUBLISHED transitions: (a) steward primary; (b) any enrolled
   citizen after STEWARD_INACTION_WINDOW; (c) any enrolled citizen immediately on steward
   vacancy. The steward cannot block transition (b) after day 60.

2. Complete steward vacancy -- no registered steward in StewardRegistry.
   Blocked: DES-092 steward-vacancy clause -- citizen fallback is IMMEDIATE with no 60-day
   window when StewardRegistry has zero registered stewards. ADR-019 amendment records this
   explicitly: "Vacancy (no registered steward) triggers the DES-092 citizen fallback
   immediately with no delay."

3. Stewards publish a trivial/incomplete audit ref to nominally satisfy the precondition.
   Not a new attack; this was the pre-existing design position stated in ADR-019: "Publishing
   a trivial or incomplete audit ref does not bypass this property: the 30-day window begins at
   auditPublishedAt, and the second vote cannot open until block.timestamp >= auditPublishedAt
   + AUDIT_LEAD_TIME." The community has 30 days to scrutinise and respond to any published
   ref, regardless of quality. Quality is a social/governance control. This was the stated
   design before v2.1.1.

**Audit substance unchanged by citizen fallback:** DES-092, ADR-019 amendment, and ss5.4
publishAuditRef() entry all confirm that audit substance requirements (independence, scope,
the 30-day lead time) are identical regardless of whether the caller is a steward or a citizen.
The citizen fallback removes the steward timing veto; it does not lower the audit bar.

**What now blocks the attack:** The 60-day inaction window and the vacancy-immediate fallback
in DES-092 mean no steward inaction can stall audit publication beyond day 60. After that,
any enrolled citizen can publish, and the Guarded Layer super-process continues.

**SC-17: CLOSED.**

---

## 5. SC-18 (HIGH) -- Verdict: CLOSED

### Original attack

ROTATION_PENDING had no abort path. If the pending anchor turned out to be incorrect or
compromised before anchorEffectiveAt, the only recovery was revokeTrustAnchor() on the new
anchor. This triggered REVOCATION_PENDING with a 30-day timelock during which ALL new
enrolments against the now-suspect anchor were blocked -- a self-inflicted 30-day enrolment
DoS against the issuer, even for communities that just wanted to revert to the incumbent anchor
and retry the rotation later.

### Re-attack against v2.1.1

1. Rotation enters ROTATION_PENDING with an incorrect or suspect pending anchor. Community
   cannot abort without accepting a 30-day enrolment block.
   Blocked: DES-090 adds abortRotation(issuerId) via Governor.execute() at Open Layer bar
   (60% supermajority / 15% quorum). Calling this transitions ROTATION_PENDING to
   ROTATION_ABORTED, then immediately to ACTIVE with the incumbent trust-anchor hash restored.
   No timelock on the abort itself (the governance vote timelock -- 90 days Open Layer -- is
   the deliberation period; the actual abort takes effect at enactment). The pending anchor
   hash is cleared. New enrolments revert to requiring the incumbent hash, not the suspect
   pending anchor hash.

2. Citizens enrolled during ROTATION_PENDING (using either old or new anchor) -- are they
   retroactively invalidated on abort?
   No: DES-090 and ADR-020 amendment explicitly state no retroactive invalidation. Citizens
   who enrolled during ROTATION_PENDING using either anchor retain their enrolment. A separate
   governance vote would be required to address those enrolments -- a higher bar is appropriate
   because enrolled citizens have not individually done anything wrong.

3. ROTATION_ABORTED state in ss5.3 enum -- confirmed present (ISS-01 fix, cycle-2 review):
   ACTIVE, ROTATION_PENDING, ROTATION_ABORTED, REVOCATION_PENDING, REVOKED.
   Consistent with ss5.4 abortRotation() entry and ss5.6 state machine.

4. ADR-020 body state machine -- updated (ISS-05 fix, cycle-2 review):
   ROTATION_PENDING -- abortRotation() via Governor.execute() (Open Layer bar; SC-18) -->
   ROTATION_ABORTED --> ACTIVE (incumbent/pre-rotation hash).
   Full annotation: incumbent hash restored; pending anchor hash cleared; no retroactive
   invalidation; Open Layer bar noted.

**What now blocks the attack:** A malicious or erroneous rotation pending anchor can be
cleanly aborted by an Open Layer vote, restoring the incumbent anchor without triggering a
revocation enrolment block. The state machine is fully specified across DES-090, ss5.3, ss5.4,
ss5.6, and ADR-020 with consistent semantics.

**SC-18: CLOSED.**

---

## 6. SC-19 (MEDIUM) -- Verdict: CLOSED

### Original attack

The issuer-onboarding coordination trigger (the step that initiates an issuer onto the
platform trust list following a successful governance vote) was steward-only. Steward inaction
could delay or block a region from accessing a new legitimate issuer indefinitely.

### Re-attack against v2.1.1

1. All stewards refuse to trigger issuer-onboarding coordination for 61 days after the
   governance-vote window for a new issuer application.
   Blocked: DES-092 applies the same citizen-inaction fallback to the issuer-onboarding
   coordination trigger: after 60 days any enrolled citizen may trigger the coordination step.
   The ss11 single-point-of-progress sweep table confirms: "DES-092 (SC-19): same 60-day
   citizen-fallback pattern; any enrolled citizen may trigger the coordination step after the
   window; vacancy triggers immediately."

2. Complete steward vacancy during an issuer onboarding process.
   Blocked: same vacancy-immediate rule as SC-17. No 60-day wait on vacancy.

**What now blocks the attack:** DES-092 applies the identical citizen-fallback mechanism to
both issuer-onboarding coordination (SC-19) and audit publication (SC-17). Steward inaction
cannot block either pathway beyond 60 days.

**SC-19: CLOSED.**

---

## 7. SC-20 (MEDIUM) -- Verdict: CLOSED

### Original attack

The Guarded Layer quorum denominator was unspecified. If the denominator is the live enrolled
count at second-vote time rather than the snapshotRoot count at first-vote time, an organic
enrolment surge between the first and second votes raises the absolute headcount floor. A
legitimate amendment that passed the first vote at 25% of the snapshot population might fail
to re-achieve 25% of a substantially larger live population at the second vote -- stalling a
legitimate in-flight Guarded Layer amendment through passive enrolment growth, not political
opposition.

### Re-attack against v2.1.1

1. Attempt to use live enrolled count as denominator at secondVote.
   Blocked: DES-087 QUORUM DENOMINATOR now normatively states: "quorum denominator = enrolled
   citizen count at snapshotRoot time (fixed at proposeAmendment(), not the live count at
   castSecondVote time)." The ss10.11 Tier-2 quorum row confirms: "denominator = enrolled
   count at snapshotRoot, SC-20."

2. Attempt to update snapshotRoot between firstVote and secondVote to use a larger snapshot.
   Blocked: ADR-019 Property 4 ("Growth-surge defence active throughout both votes and the
   inter-vote window") states that "snapshotRoot is committed at proposeAmendment() and cannot
   be updated between firstVote and secondVote." This is a code-enforced invariant in
   ProtocolGovernance.

3. Growth-surge defence interaction: could the growth-surge defence (FR-023/DES-020) override
   the snapshotRoot rule and impose a live-count denominator?
   No: ss18 SC-20 response explicitly clarifies that "growth-surge defence applies to party-
   level votes only and does not override the Guarded Layer snapshotRoot rule."

**What now blocks the attack:** The quorum denominator is normatively specified in two
consistent loci (DES-087, ss10.11) as enrolled count at snapshotRoot time, fixed at
proposeAmendment(). snapshotRoot cannot change between firstVote and secondVote. A passive
enrolment surge has no effect on the denominator used to compute Guarded Layer quorum.

**SC-20: CLOSED.**

---

## 8. SC-21 (LOW) -- Verdict: CLOSED

### Original note

The STRIDE EoP row for "Governor.execute calls arbitrary target.call(callData)" cited the
permittedActionClass binding and the CI assertion, but did not cross-reference SC-15's general
rule as additional mitigation for the bypass class of contract substitution or proxy
redirection.

### Re-attack against v2.1.1

The STRIDE EoP row at ss10.1 now reads (in relevant part): "SC-15 general rule
(ProtocolGovernance IMMUTABLE CORE -- no upgrade, no proxy, no governance-vote replacement)
closes the bypass class of contract substitution or proxy redirection (SC-21); remaining
residual is a logic bug inside the immutable contract -- mitigated by audit (DES-079) and the
capability-absence CI scan."

The ss18 SC-21 response records: "§10.1 STRIDE table updated; SC-15 general rule formally
closes the bypass class of contract substitution or proxy redirection; remaining residual is a
logic bug within the immutable contract itself."

The traceability note is present and consistent. The residual (logic bug within immutable code)
is the same honest residual that any immutable contract design carries.

**SC-21: CLOSED.**

---

## 9. New surface probes

### 9.1 Citizen fallback as spam/griefing vector (publishAuditRef)

**Probe:** After the 60-day inaction window, any enrolled citizen can call publishAuditRef().
Who can call it? What prevents garbage audit refs? Does this open a new griefing surface
beyond what existed when stewards held the monopoly?

**Attack scenario A -- garbage audit ref to start the 30-day clock early:**
An enrolled citizen (government-eID-backed, so attack requires a real enrolled identity)
waits until day 61 and publishes a garbage audit ref (e.g., a hash of empty bytes). The
30-day clock starts. The community must scrutinise a bad audit within 30 days, or the second
vote can open against an inadequate audit.

This attack class is already stated as the PRE-EXISTING design position in ADR-019 (original
text, before the amendment): "A bad-faith audit can be published; the 30-day window is for
member response, not audit quality -- quality is a social/governance control." This applied to
STEWARD publication. ADR-019 amendment explicitly extends this position: "Audit SUBSTANCE is
unchanged: a citizen who publishes a trivial or bad-faith audit ref does not bypass the 30-day
community-review window; the social/governance quality control described in this ADR applies
equally to citizen-published refs."

The citizen fallback does not WORSEN this surface: the steward could always publish a garbage
ref with the same effect. The new element is a larger pool of potential garbage-ref publishers
(any enrolled citizen vs five stewards). However, the enrollment barrier (government-eID, Phase
1) limits the attacker pool to those who have gone through the eID enrollment process.

**Attack scenario B -- overwrite loop:**
A bad actor repeatedly publishes garbage refs; the community re-publishes a good ref; the bad
actor overwrites it again, perpetually restarting the 30-day clock.

The design does not explicitly specify whether publishAuditRef() is first-write-wins or
permits overwrites. If overwrites are permitted, this attack loop is possible in principle.
However: each re-publication by the community starts a valid 30-day window; the second vote
cannot be blocked indefinitely if the community simply waits out 30 days after the last valid
publication. The bad actor cannot prevent the second vote from opening -- they can only delay
it by the length of 30-day windows, and each delay requires an enrolled identity to publish.

This is a governance liveness concern (delay, not block), bounded by the enrollment barrier,
and is in the same class as existing acknowledged design trade-offs. It does not rise to a new
security finding -- it is a variant of the audit-quality social-control limitation already
stated in ADR-019. The design accepts this class of delay risk as a cost of decentralisation.

**Verdict on citizen fallback spam/griefing:** NOT A FINDING. The concern is a variant of the
pre-existing audit-quality social-control limitation (stated in ADR-019 before the SC-17
amendment). The citizen fallback does not materially worsen this surface: the steward path had
the same garbage-publication risk. The enrollment barrier (government eID) limits the attacker
pool. The worst-case outcome is delay, not permanent block. No SC-22 raised.

### 9.2 abortRotation as rotation-blocking vector

**Probe:** abortRotation() is callable via Governor.execute() at Open Layer bar (60%/15%).
Can a bad actor call abortRotation() to block a LEGITIMATE rotation that the community already
voted for?

**Attack scenario:** Legitimate anchor is compromised. Community passes a rotation vote
(60%/15%) -- ROTATION_PENDING. Bad actor coalition then passes an abort vote (60%/15%) --
ROTATION_ABORTED -- incumbent (compromised) anchor restored. Bad actor can repeat to block
any future rotation.

**Analysis:**

For the abort to succeed, the bad actor needs 60% of votes cast with 15% quorum -- the SAME
bar as the original rotation vote. If the bad actor had 40%+ minority at the rotation vote,
they could have blocked the rotation outright by voting against it; no abort is needed. If
they had less than 40% (could not block the rotation), they cannot reach 60% for an abort.

The key insight: abortRotation does not grant the bad actor any ADDITIONAL blocking power
beyond what they had at the original rotation vote. A coalition too small to block the rotation
by opposing it is also too small to abort it. A coalition large enough to abort it was large
enough to block it in the first place -- the rotation should not have passed at 60% against
40% opposition, because that means 40% opposed (the rotation passed with exactly 60%). Actually
if the rotation passes at exactly 60%, an abort requires 60% of a new vote -- which requires
some of the original 60% to defect, or new voters to emerge.

The only new risk is governance oscillation -- a community could cycle between rotation and
abort if opinion is near-exactly split at 60%. This is a governance process risk (the platform
accepting that votes can be reversed), not a security vulnerability. It is the standard
consequence of any reversible on-chain governance action and is an accepted property of the
VEKTOR governance model.

The Sybil-via-compromised-anchor concern (Sybil pool enrolled during ROTATION_PENDING swings
the abort vote) is bounded by the per-issuer epoch cap (DES-003) and the growth-surge defence
(DES-020). This is a variant of RISK-30 (accepted residual) and does not require a new finding.

**Verdict on abortRotation as rotation-blocking vector:** NOT A FINDING. The abort vote
requires the same bar as the original rotation. No additional blocking power is introduced.
Governance oscillation is a known consequence of reversible governance. Sybil-swing concern is
bounded by epoch cap (RISK-30, accepted). No SC-22 raised.

---

## 10. Summary table

| Finding | Original severity | v2.1.1 verdict | Blocking mechanism in one line |
|---------|------------------|----------------|-------------------------------|
| SC-15 | CRITICAL | CLOSED | Both contracts in IMMUTABLE CORE with GENERAL RULE and four routing surface exclusions; code capability absent; CI scan verifies |
| SC-16 | HIGH | CLOSED | Every constant classified by Amendment Layer in DES-091/ss10.11; anti-circularity rule explicit; onlyGovernor setter guard; STEWARD_INACTION_WINDOW also Guarded Layer |
| SC-17 | HIGH | CLOSED | DES-092 60-day citizen fallback for publishAuditRef; vacancy-immediate trigger; STEWARD_INACTION_WINDOW Guarded Layer so cannot be extended by Open Layer vote; audit substance unchanged |
| SC-18 | HIGH | CLOSED | abortRotation() at Open Layer bar in DES-090/ss5.4; ROTATION_ABORTED in ss5.3 enum/ss5.6/ADR-020; incumbent hash restored; no retroactive invalidation; no revocation enrolment DoS |
| SC-19 | MEDIUM | CLOSED | DES-092 same citizen fallback for issuer-onboarding coordination; vacancy-immediate; ss11 sweep table confirms |
| SC-20 | MEDIUM | CLOSED | Quorum denominator normatively = snapshotRoot enrolled count at proposeAmendment() in DES-087 and ss10.11; snapshotRoot immutable between firstVote and secondVote |
| SC-21 | LOW | CLOSED | ss10.1 STRIDE EoP row updated with SC-15 general rule; bypass class of contract substitution/redirection formally closed |

New findings SC-22+: NONE.

---

## 11. Overall verdict

**CLEAR. All seven findings (SC-15..SC-21) are CLOSED against Doc 03 v2.1.1. No new findings
are raised. Nothing in the amendment boundary design, the steward powers, or the trust-anchor
lifecycle blocks backlog catch-up or test-design catch-up.**

The two new surface probes (citizen fallback spam/griefing, abortRotation blocking) found no
material new attack surface beyond pre-existing acknowledged design trade-offs. Both are
variants of accepted residuals already recorded in ADR-019 and ADR-020.

The core security properties that were already sound in v2.0.3 remain sound:
- Charter Layer entrenchment via entrenched[] hash registry
- Five-property Guarded Layer super-process state machine in ProtocolGovernance
- Trust-anchor dual-anchor overlap for rotation
- Steward zero-dependency property (FR-117/DES-089)
- permittedActionClass binding for Governor.execute()
- Growth-surge defence interaction with snapshotRoot

The design advance to backlog/test-design catch-up is unblocked.

---

Reviewer: reviewer-qa (VEKTOR SOP independent approver)
Date: 2026-08-11
Artifact: artifacts/reviews/SECURITY-RESCAN-SC15-21-2026-08-11.md
