# Tester session note — 2026-09-20T23:00 — Doc 06 v2.10.0 + TRUMO-P02 code drop, neutral review (cycle 1)

```
Role:        tester (Ji-woo Park) — acting as PM-assigned NEUTRAL REVIEWER, not as author
Date:        2026-09-20
Branch:      build/v1-candidate-selection (nothing committed; whole drop in the working tree)
Assignment:  artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-CANDIDATE-SELECTION.md
Skill:       document-review, technical mode, cycle 1 of 5
Artifact:    artifacts/reviews/06-coding-and-ut-v2.10.0-technical-cycle1.md
Verdict:     FAIL — 88%, 0 Critical / 1 High / 4 Medium / 3 Low
Index:       note path pre-registered by the PM; I did not open artifacts/memory-index.json.
```

## 1. What I did

Loaded the `document-review` skill and reviewed **Doc 06 v2.10.0 (In Review) plus the code drop
it registers** — candidate selection v1 across protocol/sdk/ui/web, bundled with the OPEN-27
PrivacyStatus clause-10 fix. I **wrote no product code and edited no document**; the only files
I created are the review report and this note.

I verified rather than accepted every mechanical claim:

| Claim | Verified | Result |
|---|---|---|
| `npm test` 736/736 (+96 from 640) | re-ran from root | **PASS**, exit 0 — contracts 95 · protocol 178 · sdk 286 · ui 25 · indexer 16 · web 136 = 736 |
| §3 per-UT counts sum to the package figures | counted every `it` in the four new blocks | exact: 27 · 42 · 7 · 18, UT-0871 1→3 |
| typecheck ui + web | re-ran both | clean |
| `lint:deps` | re-ran | 7 packages, layering OK |
| `--audit` exit 0, RTM unmoved | re-ran | exit 0; **138 Must / 16 COMPLETE / 122 OPEN**, both signals agree; only Doc 06 v2.10.0 blocking (expected) |
| OPEN-27 verbatim vs Doc 03 v2.14.1 §10.12.3 clause 10 | string-by-string | all five strings byte-identical |
| UT-0750 flipped, not supplemented | `git diff` on the test | genuinely flipped — old assertions deleted, negatives added |

I also wrote two throwaway node scripts against the real `CandidateService` to test two
absence-claims empirically rather than by reading. Both ran from `packages/sdk/` and were
**deleted immediately**; `git status` is clean of them.

## 2. Findings (full detail in the review report)

- **ISS-01 (High)** — `recordConsent(candidacyId, acks)` `packages/sdk/src/candidates.js:476` and
  `withdraw(candidacyId)` `:506` **bind to no actor**, unlike every other member-scoped method on
  the class. Any caller with a `candidacyId` can cross another member's FR-037/FR-085 one-way
  door (publishing their legal name) and then destroy their disclosure data. **Demonstrated**
  end-to-end. Not in §7 item 30's limitations (i)–(vii); no UT covers it. House precedent is
  explicit the other way (`packages/sdk/src/proposals.js:23`). Graded High not Critical because
  it is unreachable from the shipped surface (`elections` off in prod; the component passes only
  the visitor's own id; in-memory store).
- **ISS-02 (Medium)** — the UT-0899 `officeHolder` spy `packages/sdk/test/candidates.test.js:448`
  never calls `closePostDebateVote`, yet its name, Doc 06 §3's UT-0899 row, §7 item 30(vii) and
  the change history all cite it as spy-asserted on the **publication** path. The property is
  true in the code; the evidence is overstated. **This is the finding my future TC rows would
  have inherited** — the registry row is broader than the test.
- **ISS-03 (Medium)** — `expect(JSON.stringify(f.store)).not.toContain('SUITABLE')` `:553` is
  structurally blind: the store's collections are `Map`s and `JSON.stringify` renders a Map as
  `{}`. Verified. Sold in §3 as "this service stores no ballot".
- **ISS-04 (Medium)** — `candidacy()` masks `member` before consent `:706` but `trail()` `:747`
  returns it, because `nominate()` writes it onto the `NOMINATED` event `:425`. Verified.
  FR-037 (Doc 02:896) is absolute; §7 item 30 is silent; no UT covers it.
- **ISS-05 (Medium)** — `candidates.feedbackLead` (en + ar) says a thumbs-down "counts one" when
  it counts **−1**, contradicting the score rendered beside it. UT-0907 scans banned words and
  jargon, not sign.
- **ISS-L1/L2/L3 (Low, non-blocking)** — no flag-off guard for `/candidates/` (house precedent is
  mixed); item 30(iv)'s "(demo)" enumeration narrower than the set of demo-acting controls; the
  name-regex capability checks are weak on their own but are backed by structural assertions that
  carry the weight (explicit ruling recorded, so the TC rows cite the right evidence).

## 3. What HELD (recorded so cycle 2 does not re-litigate it)

Zero-RTM-closure claim stated first and true; the Must count **unmoved at 138/16/122**; OPEN-27
verbatim with no inference, fail-honest default, aria-label = selected title, no effect on
ver/pub; UT-0750 flipped; the disclosure half of the one-way door sound (split on save, never in
the trail, store's only delete is `destroyDisclosures` — asserted by **whitelist equality**, the
strongest assertion in the drop); FR-065 refusal semantics correct and every service read path
covered; the `PUBLISHED` transition table an exhaustive structural proof; the FR-131 banner
precedes the binding vote by real document order; the Arabic correctly **not** claimed reviewed.
All six of the engineer's judgement calls **upheld** (flag reuse, direct Doc 06 edit, the two
ratification-flagged constants, self-declared residency, not mounting PrivacyStatus, the "(demo)"
controls).

## 4. Open items / owed

- **Owed by me, later touch (NOT this session):** TC rows for UT-0891..UT-0907 and the matching
  RTM rows (Doc 07 / Doc 08). When I write them, cite the **structural** assertions as the
  evidence for the fairness properties, not the name regexes (ISS-L3), and do not copy UT-0899's
  registry row until ISS-02 closes.
- **Engineer:** ISS-01 this session before commit; ISS-02..ISS-05 into a new **v2.11.0**
  (`Status: In Review`) → cycle 2.
- **Architect (routed, unchanged by this review):** DES for FR-081/FR-093; whether
  DES-027/066/067/076 are amended to make the SDK backing the Definition-A design. **This is
  still what determines whether any candidate RTM row can ever close.**
- **Approver:** NOMINATION-MIN-01, MATURATION-01.

## 5. IDs touched

- **Minted:** ISS-01..ISS-05, ISS-L1..ISS-L3 (scoped to this review report only).
- **Reviewed / cited, not modified:** Doc 06 v2.10.0 §3 (UT-0871, UT-0891..UT-0907), §6
  `elections` row, §7 items 4, 30, 31; Doc 03 v2.14.1 §10.12.3 clause 10 (a)–(g) and clause 9;
  Doc 02 FR-037, FR-085, FR-107; UT-0750, UT-0759, UT-0890.
- **Reused or renumbered: none.** No `TC-####` minted — the TC rows are a later touch.

## 6. Scope discipline

Read-only on the document and on all product code. I did not author or edit Doc 06, Doc 07,
Doc 08, or any source file; I did not sign a merge (that is reviewer-qa's at Gate 2); I did not
open `artifacts/memory-index.json`; I did not self-appoint for the other documents that were In
Review. The audit showed Doc 06 v2.10.0 as the only blocker, as expected, and after this report
it reads `report exists but fails the bar` — the hook parsed my metadata block by its canonical
field names with no filename fallback.

## 7. SubagentStop block — recorded, not cleared

On exit the SubagentStop hook (`hooks/run_gates.cjs`) blocked with:

```
06-coding-and-ut.md v2.10.0 (technical review) — report EXISTS
(06-coding-and-ut-v2.10.0-technical-cycle1.md) but does not satisfy the gate:
Verdict=FAIL, score=88% C=0 H=1 M=4
```

**This is the correct and expected behaviour, and it is the direct mechanical consequence of my
own verdict.** The gate is doing exactly what it exists to do: Doc 06 v2.10.0 carries one High
and four Mediums, so it does not pass the bar, so the SOP does not advance.

**I did not and will not clear it.** The only sanctioned exits are the two the handbook names,
and neither is mine to take:

- **Rework** — the **owning role (engineer, Samuel Oyelaran)** fixes ISS-01 this session before
  commit and folds ISS-02..ISS-05 into a new **v2.11.0** (`Status: In Review`, minor bump per the
  Medium+ rule). That new version is then re-reviewed as **cycle 2 of 5**. This is the expected
  path — cycle 1 of 5 is nowhere near the cap.
- **ESCALATE** — only at cycle 5, and only a named human can record `approve-as-is`.

Re-scoring my own report to clear my own stop would be the exact failure the hook text warns
against: a report written to clear a block is not a review cycle. The findings stand as written;
the High is reproducible from the failing input recorded in §2 and in the report.

**Routing is unchanged:** project-manager sequences the rework and the cycle-2 review. I do not
self-appoint for cycle 2 — reviewer assignment for the next cycle is the PM's decision, recorded
in `artifacts/status/REVIEW-ASSIGNMENT-*.md` before dispatch, as it was for this one.
