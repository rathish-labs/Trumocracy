# Engineer session note — 2026-09-20T22:00 — TRUMO-P02 candidate selection (v1) + OPEN-27

```
Role:        engineer (Samuel Oyelaran — Engineering Lead; owning role for Doc 06 and product code)
Date:        2026-09-20
Branch:      build/v1-candidate-selection (off main at de77936, PR #21 merged)
Deliverable: Doc 06 v2.9.0 (Approved) → v2.10.0 (In Review); code drop TRUMO-P02.
Reviewer:    tester (Ji-woo Park, new instance), PM-assigned BEFORE dispatch per
             artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md.
Suite:       640/640 at entry (confirmed) → 736/736 at exit (+96). typecheck clean (ui, web);
             lint:deps layering OK; gate --audit exit 0, 0 blocking; RTM 138/16/122 unmoved.
Index:       my note path was pre-registered; I did not open artifacts/memory-index.json.
```

## 1. Phase 1 inventory — what was real, stubbed, missing (reported before building)

- **contracts:** no `Elections.sol`. DES-027/066/067/076 all name the on-chain Elections contract.
- **protocol:** `PARTICIPATION_TIER.CANDIDATE`, `votingWeightForTier()` = 1, `isWithin()`,
  `isEligible()`, `effectiveRules()`, the `ELECTIONS` flag (dev/staging on, prod off). No
  candidate rules module.
- **sdk:** `COUNTING_ACTION.CANDIDACY` already ratified as call site (c); `verifyEligibility` /
  `isUniqueInScope` (stub-backed, `IS_INSECURE_MOCK=true`); `ConventionalBallotService`
  (`castBallot` last-ballot-counts per `(electionId, memberId)`, `computeTally`);
  `ProposalService` pattern. No candidate service.
- **web:** FR-080 two-step consent in `ProposalsAndDebate.tsx`; `FLAG.ELECTIONS`; no candidate
  surface.
- **OPEN-27 state — with a correction to the brief:** the pinned non-compliant strings were the
  `anon` pair (`'Anonymous'` / `'Nothing you do here is linked to you'`, `PrivacyStatus.tsx:251-252`,
  pinned by `PrivacyStatus.test.tsx:32`), NOT "Verified — private" — the `ver` title was fixed
  at v2.5.0 (UT-0759). Reported; fixed the `anon` pair.
- **RTM:** FR-036/037/039/065/066/067/085 G-PHASE3 with DES; **FR-081 and FR-093 G-TRACE with
  NO DES**. No `TS-V1-*` election suite reserved.

## 2. What was built (Doc 06 v2.10.0 change history has the full inventory)

| Layer | File | Guard |
|---|---|---|
| protocol | `src/candidates.js` — lifecycle table (PUBLISHED only via DEBATES_COMPLETE → VOTE_OPEN), FR-066 topics, FEEDBACK_SCORE +3/−1, `isNetPositive` (strict), `inScopeForOffice`, `isMatured`, `validateConsent` | UT-0891..UT-0895 (27) |
| sdk | `src/candidates.js` — ICandidateStore / InMemoryCandidateStore / CandidateService: `openElection` (immutable timetable), `nominate` (self only; CANDIDACY gate; nullifier), `endorseNomination`, `recordConsent` (no verifier), `withdraw` (destroy-before-close), `scheduleDebates`, `recordDebate`, `openPostDebateVote` / `castPostDebateVote` (BINDING_VOTE gate → IBallotService) / `closePostDebateVote` (tally alone), `castFeedback` (refuse second), `feedbackTally` (aggregate only), reads, `officeHolder` unreachable from nomination | UT-0896..UT-0902 (42) |
| ui | `PrivacyStatus.tsx` — clause 10: `anonContext` prop, "Open tier", three verbatim subtitles, fail-honest default, no inference; UT-0750 flipped; `AnonContext` exported | UT-0903 (7) |
| web | `CandidateSelection.tsx` + `/candidates/` behind `elections`; consent crossing reusing the FR-080 pattern; FR-131(d) notice on refusal; `ReceiptFreedomBanner` before the vote; nav link; 66 `candidates.*` + `nav.candidates` strings en + ar drafts; sdk/protocol `.d.ts` shims incl. the previously undeclared `ConventionalBallotService`; UT-0871 extended to all three store seams | UT-0904..UT-0907 (18) + UT-0871 (+2) |

## 3. Decisions made (and where recorded)

- **Gate behind the existing `elections` flag**, not a new one — its description already names
  candidate nomination; dev/staging on, prod off. Doc 06 §6 row annotated; §7 item 4 corrected.
- **Feedback does not ride the ballot seam**: FR-065 requires the second vote be REFUSED; the
  ballot seam is last-ballot-counts. The caster is kept only as a nullifier and no read returns
  it; FR-131(b) truth stated on the surface. Doc 06 §7 item 30(ii).
- **v1 residency is self-declared** — checked within the party jurisdiction and the office
  region; no attestation exists (DES-007/v2). Stated in copy (`residencyHelp`) and §7 item 30(i).
- **Two constants engineer-chosen, flagged for ratification** — NOMINATION_ENDORSEMENTS_MIN = 5
  (**NOMINATION-MIN-01**), NOMINATION_MATURATION_SECONDS = 30 days (**MATURATION-01**). Same
  pattern as COOLDOWN-01. §7 item 30(iii).
- **PrivacyStatus NOT mounted on `/candidates/`** — no authenticated session (clause 1), same as
  every other page. Clause 10 is implemented in the component for whichever surface mounts first.
- **Doc 06 edited directly** (engineer has Edit; build-session precedent) via a CRLF-aware
  anchored node script; residue scan clean.

## 4. Routed, not claimed

| To | What | Why it is theirs |
|---|---|---|
| **architect** | DES for FR-081 and FR-093 (G-TRACE); whether DES-027/066/067/076 are amended so the SDK conventional backing is the Definition-A (v1) design (as DES-095/096 did) | **This is the decision that determines whether any candidate RTM row can ever close.** Design, not engineering. |
| **tester** | TC rows for UT-0891..UT-0907 and RTM rows | Doc 07/08 are the tester's; a later touch |
| **approver** | NOMINATION-MIN-01, MATURATION-01 | Governance constants |
| **human (Arabic)** | 66 + 1 new ar strings are engineer drafts; the packet needs regenerating (`pair2.mjs`) | ARABIC-I18N, human-gated; NOT claimed reviewed |
| **engineer, next** | clause 10(d) Arabic mirrors need a locale input on PrivacyStatus (§7 item 31); FR-093 question phase; FR-039 office ballot | Out of this drop's fence |

## 5. What this drop does NOT close — stated plainly

**Zero RTM Must rows.** Every candidate DES names the on-chain Elections contract; both counting
gates run through the stub verifier; FR-081/FR-093 have no DES. The rows move from "not
implemented" to "SDK-layer v1 built, on-chain and production enforcement pending" — the posture
FR-122/123/131/132 already hold. Reported in the Phase 1 inventory **before** building, and
recorded first in §7 item 30 so nobody reads the drop as closures.

## 6. IDs touched

- **Minted:** UT-0891..UT-0907; §7 items 30, 31; flags NOMINATION-MIN-01, MATURATION-01.
- **Closed:** §7 item 23 (UT-0871 coverage); §7 item 26 ISS-05(i) (OPEN-27 in code).
- **Annotated:** §7 items 4, 17, 26; §6 `elections` row; UT-0871 registry row (1 → 3).
- **Cited:** FR-023, FR-035, FR-036, FR-037, FR-038, FR-039, FR-054, FR-065, FR-066, FR-067,
  FR-081, FR-083, FR-085, FR-107, FR-122, FR-123, FR-131(b)(d)(e), DES-027, DES-028, DES-066,
  DES-067, DES-076, DES-094 (clause 10), DES-095, DES-096, DES-098, DES-100, ADR-015, ADR-024,
  BR-013, BR-016, OI-08, OI-16, OPEN-27, OPEN-28, CON-015.
- **Reused/renumbered: none.**

## 7. Scope discipline

Enrolment internals not built (seam called); tally/MACI internals not built (IBallotService
called); nothing on-chain; no dashboards or manifesto tracking; no v2 ZK. I authored no review
report and did not self-appoint; Docs 03/04/07/08 untouched. Commit pending the review verdict;
no push.
