# Document Review — Doc 08 Traceability Matrix v2.5.2 (technical, cycle 1)

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.5.2
Document:    Traceability Matrix — Trumocracy (RTM-TRUMOCRACY)
Version:     2.5.2
Review mode: technical
Cycle:       1 of 5
Reviewer:    reviewer-qa (neutral — tester owns Docs 07/08; reviewer-qa is independent RTM verifier per RACI)
Date:        2026-08-29
Score:       97%
Critical:    0
High:        0
Medium:      0
Low:         1
Verdict:     PASS
```

---

## What was checked

1. Re-derived FR-079, FR-080, FR-090 closures against the four RTM completion rules.
2. Re-derived FR-091, FR-092 non-closures; verified the gap classifications are correct.
3. Count arithmetic: Must total, COMPLETE, OPEN, percentage; G-TRACE/G-NOMECH; by-reason sum.
4. Stories DoD progression to 17/134.
5. §6 dashboard tables and convention note.
6. §7 gap log — overclaim sweep.
7. §9 gate verdict and sign-off block.
8. Open questions (Doc 03 §10.13.13) recorded where they bear.
9. §10.12.5 routing discharged.
10. FR-024, FR-122, FR-123 extension (not re-derived in full; spot-checked for overclaim).

The four RTM completion rules applied throughout:
1. DES row exists naming the design element.
2. US row exists (or FR has no user-facing story component and is a protocol-level requirement).
3. Tested by at least one TC that is passing or inherited.
4. The evidence is correct — the UT actually asserts what the TC claims.

---

## FR-079 (COMPLETE) — independent re-derivation

**Claim:** COMPLETE. DES-103. No SCR needed. UT-0087/UT-0088 via TC-3542.

**Re-derivation:**

Rule 1 — DES-103 (§5.2, Doc 03 v2.9.3) names participation tiers as the design element. ✅

Rule 2 — FR-079 has no user-facing UI clause ("the application MUST enforce exactly three
participation tiers"). Protocol-level enforcement. No US needed; no SCR needed. The tester's
parenthetical "no UI clause → no SCR needed" is correct and coherent. ✅

Rule 3 — TC-3542 is Pass (inh.) from Doc 06 v2.4.3 Approved (R-15 confirmed 608/608 green). ✅

Rule 4 — UT-0087 asserts `DEFAULT_PARTICIPATION_TIER === 'SUPPORTER'`, that votingWeightForTier
returns 1 for SUPPORTER/WORKER/CANDIDATE, and that an unknown tier throws a named error.
UT-0088 asserts `Object.values(PARTICIPATION_TIER).length === 3` and the exact three string
values. TC-3542 claims "exactly 3 tiers, auto-Supporter on join, weight = 1 for every tier,
unknown tier refused loudly." Every claim is directly tested. ✅

**Verdict: AGREE — COMPLETE.**

---

## FR-080 (COMPLETE) — independent re-derivation

**Claim:** COMPLETE, closed v2.5.1. DES-103. SCR-15 (partial) / SCR-12 (display). UT-0872,
UT-0873, UT-0885, UT-0886, UT-0832 via TC-3544, TC-3562, TC-3563.

**Normative text (Doc 02 §4.23):** "before a Worker declaration is confirmed the user interface
MUST state plainly that becoming a Worker is permanent for the term and makes the user's
participation record public for the duration of the term."

Two clauses:
(i) Permanence for the term.
(ii) Participation record public for the term.

**Re-derivation:**

Rule 1 — DES-103 (§10.13.13, Doc 03 v2.9.3) specifies the two-step TierDeclaration and
names SCR-15 as binding. The row in §5.2 binds SCR-15 (partial) and SCR-12 (display). ✅

Rule 2 — No user story governs the consent gate itself (the gate is a structural consequence
of FR-080 + DES-103); UT-0832 covers the SDK-level response. US-0090 (candidacy) shares the
tier declaration path but FR-080's consent specifics are tested directly. This is an honest
edge case: the requirement is fully tested without a dedicated US because the consent gate is
a structural check, not a user-initiated scenario that requires a story. ✅

Rule 3 — TC-3562 (both facts stated before confirmation) and TC-3563 (declining leaves member
Supporter) are both Pass (inh.) from Doc 06 v2.4.3 Approved. TC-3544 (gate step 1) is Pass
(inh.) from Doc 06 v2.4.1 and evidence is strengthened (not altered) at v2.4.3. ✅

Rule 4 — independent verification performed in prior review cycles:

Clause (i): `workerConsentPermanent` = "This lasts for the whole term. You cannot undo it
partway through." UT-0885 asserts consent-permanent matches `/lasts for the whole term|cannot undo/i`. ✅

Clause (ii): `workerConsentPublicRecord` = "Your record of taking part in this party becomes
public for the term — not only the proposals you put forward, but what you take part in."
UT-0885 asserts consent-public-record matches `/record of taking part.*public/i`. The
"not only the proposals you put forward" phrase prevents a narrow reading; the regex tests the
right property. ✅

Clause (i) confirmed NOT present on confirmation route without consent-panel intermediate:
`onDeclareWorker` is called only from `confirm-worker` inside `data-testid="worker-consent"`.
UT-0885 confirms file-proposal is absent while the consent panel is showing. This is the
structural "before" in the requirement. ✅

Clause (ii) — participation record, not just proposal record: the string explicitly says "not
only the proposals you put forward, but what you take part in." This goes beyond a narrow
"your proposals are visible" reading. The FR says "participation record public." The copy
matches. ✅

**Basis for closure — consent panel, not gate panel.** The tester closed on the consent panel
(TC-3562) as the clause-bearing surface. The gate panel (`workerGateHow`) was widened at
v2.4.3 to also state both facts, but that is a below-the-closure-line improvement. Even if
the gate had retained the narrower v2.4.0 copy, the closure basis would be identical: the
normative "before … confirmed" requirement is structurally satisfied by the consent panel,
and UT-0885 directly asserts both facts in that panel. ✅

"Forbidden by construction" (DES-103 §10.13.13): "A one-click declaration is forbidden by
construction: with no confirmation step there is no 'before' for the disclosure to precede,
and the requirement becomes unsatisfiable rather than merely unmet." This is a structural
impossibility claim, not a rhetorical one. The TierDeclaration component's `useState(false)`
for `consenting` means the consent panel only renders when `consenting === true`, which only
becomes true after the user clicks through the gate. There is no code path from Supporter to
Worker that bypasses the consent-panel render. The claim is accurate. ✅

§10.12.5 routing discharged: the FR-080 row records "Routed to the architect — and
DISCHARGED at Doc 03 v2.9.3 (2026-08-29). DES-103 is the surface element; SCR-15 is bound.
Residual (not a gap)..." — this is consistent with §10.12.5 being CLOSED in Doc 03 v2.9.3.
Verified. ✅

**Verdict: AGREE — COMPLETE. Consent panel is the correct clause-bearing surface. Closure
basis is sound.**

---

## FR-090 (COMPLETE) — independent re-derivation

**Claim:** COMPLETE. DES-104. SCR-12. TCs covering equal standing, isOriginal provenance,
entry-point closes at ballot, no capabilities.

**Re-derivation:**

Rule 1 — DES-104 (§5.2, Doc 03) names competing proposals as the design element. SCR-12
(Proposal list & detail) bound. ✅

Rule 2 — US-0089 (Worker may file a competing proposal) and US-0100 (both appear in proposal
list) exist and meet DoD. ✅

Rule 3 — TC-3548..TC-3551 all Pass (inh.) from Doc 06 v2.4.3. ✅

Rule 4 — UT-0835 asserts that the second proposal has equal standing (no rank differential).
UT-0836 asserts no withdraw/reject/reorder/demote path via capability-absence. UT-0837 asserts
isOriginal is [true, false] — provenance only, not a decision factor. UT-0838 asserts entry
closes at BINDING_VOTE (UT-0843 confirms gate). UT-0874..UT-0877 render both proposals
side-by-side. Every FR-090 sub-clause has a directly asserting test. ✅

Open question (b) on FR-123 PROPOSING counting: the RTM correctly records "revisit flag for
open question (b) from Doc 03 §10.13.13." FR-090 is complete independent of that open
question. ✅

**Verdict: AGREE — COMPLETE.**

---

## FR-091 (OPEN, G-NOMECH) — non-closure verification

**Claim:** OPEN. G-NOMECH. Order guarantees complete; schedule() is unwired.

**Basis for non-closure:**

Rule 3 fails on rule 4: TC-3552..TC-3554 assert that the stage machine refuses out-of-order
transitions (UT-0090..UT-0092). TC-3555 asserts deliberative stages produce records not
outcomes. But TC-3552..TC-3555 are "Pass (inh.)" from the stage machine's protocol layer
only. The normative text of FR-091 also requires that stages "proceed according to a
published schedule" — and `schedule()` is unimplemented (UT-0093 asserts that `advanceStage`
takes no target parameter, which means timing is external; the external timing mechanism does
not exist). This is G-NOMECH: the order-preservation mechanism is built; the scheduling
mechanism is not.

Rule 4 cross-check: TC-3555 correctly notes "timelines are out of scope at this cycle." ✅

Open question (a) — FR-091 stage taxonomy vs ADR-008 PROPOSAL_STATE: the RTM records this
correctly against FR-091, deferring resolution to the architect. Appropriate. ✅

**Verdict: AGREE — OPEN (G-NOMECH). Correct and honest non-closure.**

---

## FR-092 (OPEN, G-NOMECH) — non-closure verification

**Claim:** OPEN. G-NOMECH. Trail append-only proven; rule 4 fails on two independent grounds.

**Basis for non-closure:**

TC-3559..TC-3560 are Pass (inh.) from UT-0846..UT-0848. UT-0846 asserts the trail is
append-only. UT-0847 asserts no delete path. UT-0848 asserts timestamps from an injected
clock (IS_INSECURE_MOCK pattern). These pass rule 3 for the append-only / no-delete claim.

Rule 4 fails on two independent grounds:
1. Trail completeness: FR-092 requires the trail to record "every significant action." The
   test suite does not assert that every action the requirement considers significant actually
   produces a trail entry — the coverage is limited to the cases explicitly exercised.
2. Third-party reconstruction: FR-092 mentions that the trail be "reconstructible from
   independently verifiable records." No test addresses this; the mechanism is unbuilt.

G-NOMECH on (2) is correct. On (1) it is arguably G-TRACE (the trail structure exists but
some entries may not exist); the tester's G-NOMECH classification is defensible because the
completeness rule is not testable until the full set of "significant actions" is defined — a
mechanism question, not a test gap. ✅

**Verdict: AGREE — OPEN (G-NOMECH). Both stated grounds for rule-4 failure are genuine.**

---

## Count arithmetic

| Metric | Claimed | Independent derivation | Result |
|--------|---------|----------------------|--------|
| Must rows total | 138 | FR-Must 114 + NFR-Must 24 = 138 | ✅ |
| COMPLETE | 16 | Prior 13 + FR-079 (new) + FR-080 (v2.5.1) + FR-090 (new) = 16 | ✅ |
| OPEN | 122 | 138 - 16 = 122 | ✅ |
| Completion rate | 11.6% | 16/138 = 11.59% → 11.6% | ✅ |
| G-TRACE | 34 | Verified against gap-log entries | ✅ |
| G-NOMECH | 13 | Verified (FR-077 + FR-091 + FR-092 + others; FR-080 closed same v2.5.1 day) | ✅ |

**By-reason reconciliation:**

G-PHASE3: 47 · G-NOMECH: 13 · G-NOENV: 9 · G-DEPS: 5 · G-OUTSC: 6 · G-EARLY: 4 ·
G-OOS: 5 · G-TRACE: 34 → sum = 123.

123 vs 122 distinct: NFR-007 carries both G-TRACE (no DES chain to the requirement) and
G-NOENV (no test environment for non-functional constraints); it appears in two buckets,
accounting for the +1 over distinct rows. ✅

**Stories DoD:**

Baseline 13 → v2.4.0 +1 (US-0131 parties-directory counting) → v2.5.0 +2 (US-0089 Worker
authorship, US-0100 competing proposals in list) → v2.5.1 +1 (US-0090 Candidate authorship) =
17/134. ✅

**TC evidence summary (from §6 dashboard):**

472 designed · 217 with passing evidence (129 inh. · 88 obs.) · 255 not executed or not
executable. Arithmetic: 217 + 255 = 472. ✅ Inherited: 129 = 107 (pre-proposals) + 22
(TC-3542..TC-3563 at v2.5.0) = 129 (with TC-3562/3563 inh. from v2.4.1). ✅

---

## Overclaim sweep

**Summary (§1/§2):** v2.5.2 summary says "three Must rows newly COMPLETE (FR-079, FR-080,
FR-090)." FR-080 was actually closed at v2.5.1; v2.5.2 says "Closed v2.5.1." No overclaim —
the row history is consistent. ✅

**§7 gap log:** FR-079, FR-080, FR-090 do not appear in the gap log (closed). FR-091 and
FR-092 remain in the gap log with honest G-NOMECH classification. No row is marked COMPLETE
in the gap log while remaining open in the RTM rows. ✅

**§9 gate verdict (lines 292-300 approx):** "16 close and 122 do not. 11.6% completion rate."
Matches derived counts. The paragraph records FR-080's "joined and left the same day" history
correctly. Open questions (a) and (b) from Doc 03 §10.13.13 recorded at FR-091 and FR-090
respectively. Sign-off for reviewer-qa shows "pending" — correct, since this is the current
review. ✅

**FR-024, FR-122, FR-123 extension (EXTENDS ONLY, not re-derived in full):**
FR-024 extension: US-0089 / US-0100 stories referenced; not a new closure. ✅
FR-122 extension: TC-3556/3557 (admission gate) and TC-3558 (ballot gate) recorded as
additional evidence. The FR-122 row remains OPEN (G-PHASE3 — ballot phase not built). No
overclaim. ✅
FR-123 extension: TC-3556 (counting gate guard) added; row remains OPEN (G-PHASE3). Open
question (b) recorded. No overclaim. ✅

---

## Issues

### ISS-01 (Low) — §6 convention note stale inherited count

**Location:** §6 TC count convention footnote (line approx 619), labeled "v2.4.1
reconciliation."

**Observation:** The convention note's opening line reads: "The 195 'with passing evidence' =
107 Pass (inh.) + 88 Pass (obs.) per Doc 07 §2 footer; the inherited bucket is 55 contract
suite + 28 TS-PARTY + 24 TS-MEMBERSHIP."

The current dashboard table (lines 615-616) correctly shows 217 with passing evidence
(129 inh. · 88 obs.). The convention note's "195 = 107+88" is from a prior version and was
never updated when TS-PROPOSALS added 22 inherited cases. The same note's later line reads
"472 - 217 = 255" — which uses the current correct number (217), creating an internal
inconsistency within a single paragraph.

**Severity:** Low. The dashboard table is the authoritative statement; it is correct. The
convention note is explicitly labeled as a "v2.4.1 reconciliation" audit trail, so "107 inh."
is the v2.4.1 baseline — not an assertion about the current state. However, the note's own
later line uses current numbers (217), making the paragraph internally inconsistent. A quick
reader could read "195" and doubt the dashboard table's "217."

**Recommendation (to tester on rework):** Update the convention note's first line to reflect
the current inherited bucket: "The 217 'with passing evidence' = 129 Pass (inh.) + 88 Pass
(obs.)." The inherited bucket enumeration becomes: 55 contract suite + 28 TS-PARTY + 24
TS-MEMBERSHIP + 22 TS-PROPOSALS = 129. Keep the 472 - 217 = 255 line as is.

---

## Verdict

**PASS — 97% / 0 Critical / 0 High / 0 Medium / 1 Low**

FR-079 COMPLETE: agree. FR-080 COMPLETE: agree — consent panel is the correct
clause-bearing surface; "forbidden by construction" is structural, not rhetorical; §10.12.5
routing discharged at Doc 03 v2.9.3. FR-090 COMPLETE: agree — equal standing proven
positively and by capability absence. FR-091 OPEN (G-NOMECH): agree — schedule() is the
missing mechanism; open question (a) correctly recorded. FR-092 OPEN (G-NOMECH): agree —
trail append-only proven; rule 4 fails on two independent grounds (completeness and
reconstruction). All count arithmetic verified. No overclaim found in summary, §6 dashboard
table, §7 gap log, or §9 gate verdict. One Low (§6 convention note stale 195/107 vs current
217/129) — dashboard table is correct; note is internally inconsistent.
