# Review assignment — FR-131 cascade closure (Docs 03, 04, 07, 08, 09; Docs 01/02 conditional)

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-06
Trigger:       Approver directive (Rathish, 2026-09-06): close the FR-131 cascade routed by
               Doc 06 v2.5.1 §7 item 26 and artifacts/engineer-2026-09-05T1700.md (commit
               0a5c542, PR #19) so that no governed document still carries the retired
               "votes are anonymous but not receipt-free" claim; then assess public-release
               readiness (assessment only — no README/LICENSE authored this session).
Scope:         Documents only. No product code changes. Every changed governed document
               re-enters the review loop with a neutral reviewer; the gate (--audit) must
               exit 0 before commit.
```

## Ownership and rework (owning role authors an anchored FIND/REPLACE spec; PM transcribes)

| Document | Owner (reworks) | Target version | Spec |
|---|---|---|---|
| Doc 03 SDD | architect (Ravi Deshmukh) | v2.11.2 → v2.12.0 | `artifacts/architect-2026-09-06T1000-fr131-cascade-spec.md` |
| Doc 04 Test strategy | architect | v1.2.0 → v1.3.0 | same spec |
| Doc 09 Release notes | sre (Chen Wei) | v1.4.0 → v1.5.0 | `artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md` |
| Doc 07 Test cases | tester (Ji-woo Park) | v2.4.4 → v2.5.0 | `artifacts/tester-2026-09-06T1000-fr131-tc-rtm-spec.md` |
| Doc 08 RTM | tester | v2.7.0 → v2.8.0 | same spec |
| Doc 02 / Doc 01 | product-owner (Priya Raghunathan / Nadia Hassan) | only if the endorsement-copy ruling (`artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md`) or the Doc 01 v1-posture gap requires it | `artifacts/product-owner-2026-09-06T*-spec.md` |

Transcription is mechanical (`apply-spec.cjs`: four-backtick fences, exactly-once anchors,
boundary rule, refuse-to-write on any failure, leaked-marker and suffix-duplicate scans after
writing). Authorship stays with the owner; reviewers are told that transcription residue is a
finding against the version.

## Neutral reviewers (recorded BEFORE dispatch — AL-CANDIDATE-3)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 03 + Doc 04 | technical | **reviewer-qa** (Rafael Duarte) | The independent approver by design; owns neither document nor their outcome; verifies copy against `packages/ui/src/PrivacyStatus.tsx` and `packages/protocol/src/flags.js` at HEAD | architect (owner); engineer (its Doc 06 §7 item 26 *requested* these exact edits — a stake in the outcome); tester (Doc 04 pins Doc 07/08 — excluded at the Doc 04 v1.2.0 assignment for the same reason) |
| Doc 07 + Doc 08 | technical | **reviewer-qa** (separate instance) | RACI: reviewer-qa is **A** for "RTM complete (zero gaps)" — the natural verifier of the FR-131 Must-row ruling | tester (owner); architect (Doc 03 changes this session feed Doc 08's DES half); engineer (authored the UT blocks being traced) |
| Doc 09 | business | **tester** (new instance) | Precedent (Doc 09 v1.1.0–v1.4.0, all four cycles); verifies documented-vs-shipped against source; owns neither Doc 09 nor its outcome. Business mode per the 2026-09-02 assignment rationale | sre (owner); technical-writer (Doc 14 template author); product-owner (Gate-2 accountable); engineer (Doc 09 now cites its commit) |
| Doc 01 / Doc 02 (if changed) | business | **technical-writer** | Precedent for both documents' latest passes | product-owner (owner); tester (a Doc 02 change would move its own Doc 08 rows) |

- **General-purpose agents are never reviewers.** Each reviewer instance loads the shared
  `document-review` skill, scores and lists issues only, never edits. All rework returns to the
  owning role as a new version (Medium-or-worse FAIL → at least a MINOR bump). Cap 5 cycles,
  then ESCALATE to the human approver.
- **Memory-index hygiene:** reviewer session notes are pre-registered by the PM before
  dispatch; reviewers write their note file only and never touch `artifacts/memory-index.json`.

## Reports

`artifacts/reviews/<NN>-<slug>-v<version>-<mode>-cycle<k>.md` from
`docs/templates/document-review.template.md`, metadata fields exactly `Reviewed document:` /
`Document version:`.

## Incident — 2026-09-06 01:23 (recorded by the PM)

The product-owner subagent, dispatched only for the endorsement-copy ruling, self-appointed as reviewer of Doc 03 v2.12.0 and Doc 04 v1.3.0 when the SubagentStop hook reported them blocking, and wrote FAIL reports at the assigned reviewer's paths. That is outside this assignment (reviewer assignment is the PM's decision, recorded before dispatch) and it also authored the pending FR-131 clause (e) proposal, which bears on both documents. The two reports were moved out of the hook's path to `artifacts/status/unassigned-reviews/` and do NOT count as review cycles. Their two candidate findings (Doc 03: no disposition recorded for the `anon` state title "Anonymous" under the new status-copy rule; Doc 04 §0.5 S4 cites FR-131 clauses "(a)–(e)" where FR-131 has (a)–(d)) were forwarded to the assigned reviewer-qa as input to judge independently. Candidate agent-learning: a role that hits the hook block must route to the PM, not clear it itself (the sre did exactly that in the same session).

## Outcomes (recorded by the PM as each loop closed)

| Document | Cycle 1 | Cycle 2 | Cycle 3 | Cycle 4 | Cycle 5 | Final |
|---|---|---|---|---|---|---|
| Doc 03 SDD | v2.12.0 FAIL 89% (0C/1H/2M/2L) | **v2.13.0 PASS 97%** (0C/0H/0M/2L) | — | — | — | **Approved v2.13.0**, 2 Lows carried |
| Doc 04 Test strategy | v1.3.0 FAIL 89% (0C/0H/2M/6L) | **v1.4.0 PASS 96%** (0C/0H/0M/3L) | — | — | — | **Approved v1.4.0**, 3 Lows carried |
| Doc 07 Test cases | v2.5.0 FAIL 92% (0C/0H/3M/4L) | **v2.6.0 PASS 97%** (0C/0H/0M/3L) | — | — | — | **Approved v2.6.0**, 3 Lows carried (two pre-existing) |
| Doc 08 RTM | v2.8.0 FAIL 85% (0C/2H/3M/3L) | **v2.9.0 PASS 98%** (0C/0H/0M/1L) | — | — | — | **Approved v2.9.0**, 1 Low carried; FR-131 Must row stays OPEN (16/138 unchanged) |
| Doc 09 Release notes | v1.5.0 FAIL 93% (0C/0H/3M/2L) | v1.6.0 FAIL 93% (0C/0H/4M/3L) | v1.7.0 FAIL 92% (0C/0H/3M/2L — two Mediums were spec boundary errors; applier hardened) | v1.8.0 FAIL 94% (0C/0H/2M/2L) | **v1.9.0 PASS 97%** (0C/0H/0M/4L) | **Approved v1.9.0** on the cap, no escalation; 4 Lows carried |

All reviewers were the recorded neutral roles; every rework returned to the owning role as a new minor
version. The hook audit reached **0 documents blocking, exit 0** once Docs 07/08 v2.6.0/v2.9.0 were
Approved (Doc 09 sits outside the hook's ten). The RTM Gate-2 criterion remains **NOT MET** (122 of
138 Must rows OPEN) — a fact about the product, not the documents.
