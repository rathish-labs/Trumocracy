# Review assignment — TRUMO-P02 candidate selection (v1) + OPEN-27 PrivacyStatus clause-10 fix

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-20
Trigger:       Code drop TRUMO-P02 on branch build/v1-candidate-selection. Engineer role
               (Samuel Oyelaran). Bundled with the OPEN-27 fix (Doc 03 v2.14.1 §10.12.3
               clause 10), which the previous session ruled and this session implements.
Scope:         Product code across packages/protocol, packages/sdk, packages/ui, apps/web;
               Doc 06 v2.9.0 → v2.10.0 registers it. Enrolment STAYS STUBBED (the seam is
               called, never built); voting tally/MACI internals untouched (IBallotService is
               called); nothing on-chain. Docs 03/04/07/08 are NOT touched by the engineer:
               TC/RTM rows are the tester's on a later touch; DES for FR-081/FR-093 are the
               architect's — both routed, neither claimed.
Entry state:   npm test 640/640 (baseline confirmed at start) → 736/736 after the drop
               (+96: protocol 151→178, sdk 244→286, ui 18→25, web 116→136; contracts 95 and
               indexer 16 unchanged). typecheck clean (ui, web). lint:deps layering OK.
               gate --audit exit 0, 0 blocking, RTM 138 Must / 16 COMPLETE / 122 OPEN unmoved.
Rule:          Reviewer assignment is recorded HERE before dispatch. A role that hits the
               SubagentStop block ROUTES to the PM; it never authors the review whose absence
               is blocking it. Other documents In Review mid-session is EXPECTED — do not
               self-appoint.
```

## Ownership and rework

| Work | Owner | Target | Artifact |
|---|---|---|---|
| Protocol rules (`candidates.js`), SDK service (`candidates.js`), web surface (`CandidateSelection.tsx`, `/candidates/`), i18n en + ar (engineer drafts), type shims, UT-0871 extension, PrivacyStatus clause-10 fix + test flip, Doc 06 registration | engineer (Samuel Oyelaran) | Doc 06 v2.9.0 → **v2.10.0 In Review** | code + Doc 06 (engineer has Edit); `artifacts/engineer-2026-09-20T2200-candidate-selection.md` |
| TC rows for UT-0891..UT-0907 and RTM rows; the honest ruling on which Must rows (if any) move | tester (Ji-woo Park) — **later touch, not this session's review** | Doc 07 / Doc 08 | owed |
| DES for FR-081 and FR-093 (G-TRACE); whether DES-027/066/067/076 are amended so the SDK conventional backing is the Definition-A (v1) design, as DES-095/096 did for eligibility and ballots | architect (Ravi Deshmukh) | Doc 03 | **routed — the decision that determines whether any candidate row can close** |
| Ratification of NOMINATION_ENDORSEMENTS_MIN = 5 (**NOMINATION-MIN-01**) and NOMINATION_MATURATION_SECONDS = 30 days (**MATURATION-01**) | approver (Rathish Kumar) | Doc 02 / Doc 03 | **human decision** |

## Neutral reviewer (recorded BEFORE dispatch)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 06 v2.10.0 **+ the code drop** | technical | **tester** (Ji-woo Park, new instance) | Standing precedent for Doc 06 (v2.6.0..v2.9.0); has Bash to run the suite, typecheck, lint:deps and the audit rather than take them on assertion; the role that will later author the TC rows and so has the strongest interest in the UTs asserting what Doc 06 says they assert | engineer (owner, wrote the code); architect (ruled OPEN-27 and is a routed party) |

- General-purpose agents are never reviewers. Reviewers **score and list only**; they never edit
  the document or the code. Rework returns to the **engineer** as a new version. Cap 5, then
  ESCALATE.
- Note paths are pre-registered by the PM. **Roles never open `artifacts/memory-index.json`.**
- Any **critical or high** finding is fixed **this session** by the engineer before commit.

## What the reviewer is asked to test hardest

1. **The fairness properties are asserted as absences, and the absences are real.** No path to
   PUBLISHED except through DEBATES_COMPLETE → VOTE_OPEN; no method reads `officeHolder` on the
   nomination/publication path; no parameter overrides the tally; no `nominee` parameter. Each is
   claimed by spy or by prototype inspection — verify the spies are not vacuous.
2. **FR-065's refusal semantics.** A second feedback vote is REFUSED, not overwritten. The
   engineer says this is why feedback does not ride the ballot seam. Confirm the store's caster
   record is unreachable from every read.
3. **The one-way door.** Consent takes no verifier; disclosures are confidential-class until
   consent; withdrawal before the nomination window closes DESTROYS them (the store's only
   delete); after, they stand. Confirm the trail never contains them at any point.
4. **OPEN-27 is implemented verbatim** against Doc 03 v2.14.1 clause 10 — the four strings, the
   default, no inference, aria-label = selected title — and that UT-0750's pinned assertion is
   genuinely flipped, not merely supplemented.
5. **Doc 06 §7 item 30's honesty**: the drop closes **zero** RTM rows, says so first, and names
   the design decision that would change that. Check the engineer did not quietly claim more.
6. **Copy honesty**: every new string is v1-accurate, no banned word, no jargon, Grade-8; the
   Arabic is a draft and is not claimed reviewed; the FR-131 banner precedes the binding vote.

## Outcomes (recorded by the PM as each loop closes)

| Document | Cycle 1 | Cycle 2 | Final |
|---|---|---|---|
| Doc 06 v2.10.0 → v2.11.0 (+ code) | **FAIL 88% (0C/1H/4M/3L; tester)** — **ISS-01 HIGH:** `recordConsent()` and `withdraw()` bound to no actor — any caller with a candidacy id could publish another member’s legal name or destroy their disclosures (unreachable from the shipped surface, hence High not Critical). ISS-02 the `officeHolder` spy stopped one call short of publication; ISS-03 `JSON.stringify(store)` blind to Maps; ISS-04 the trail named the member pre-consent; ISS-05 `feedbackLead` said a thumbs-down “counts one” (it is −1). All six engineer judgement calls upheld. **Fixed this session by the engineer → v2.11.0**, all five + L1/L2 taken; **the L1 flag-off test caught a real page-load defect** (seed text under MIN_PILLAR_CHARS). Suite 736 → 739 | **FAIL 94% (0C/0H/1M/3L; tester)** — ISS-01’s failing input **verified refused by execution**; ISS-02/03/04/05/L1/L2 all verified fixed (ISS-03 mutation-tested). The endorser-trail extension **upheld** (FR-054 “no personal data”, cited alongside FR-037). The L1 page-load defect **real, but the stated cause false**: the proposals-page wording ×3 clears 280 — what fell short was the page’s FIRST wording. **ISS-06 Medium, doc-only:** §3’s accounting note grafted cross-package addends onto the web sentence. Routed to the engineer → **v2.11.1** (patch: no UT minted, no count moved, no normative change); L4/L5/L6 all taken | **Cycle 3: PASS 97% (0C/0H/0M/3L; tester)** — every §3 sum re-derived by hand; ISS-06 closed; L4 proven non-vacuous by positive control; L5 arithmetic reproduced to the character; nothing disturbed (ISS-01 replayed hostile). **Ruling: v2.11.1 should have been v2.12.0** (two test files changed — the v2.8.1 patch carve-out requires none); filed Low because the entry discloses both changes truthfully. Do not renumber; next version → v2.12.0. **Approved v2.11.1** (3 Lows carried: L7 bump, L8 §3 caption stale at v2.8.1, L9 trimmed/raw basis) |
