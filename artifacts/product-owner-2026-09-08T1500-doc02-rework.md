# Session memory — product-owner, 2026-09-08T15:00 — Doc 02 v2.17.3 (cycle-2 rework)

```
Role:     product-owner (Priya Raghunathan) — owning role for Doc 02; the reviewer never edits
Date:     2026-09-08
Trigger:  artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md — business, cycle 1,
          reviewer-qa (neutral, PM-assigned before dispatch): FAIL 92%, 0C / 0H / 1M / 9L.
Wrote:    artifacts/product-owner-2026-09-08T1500-doc02-spec-c2.md  (anchored spec, 6 OPs)
          this note
Did not:  edit Doc 02 (the PM transcribes the spec); touch the decision record; author or
          self-appoint any review; open artifacts/memory-index.json (both paths pre-registered).
```

## 1. What the reviewer found, and whether I accept it

**I accept ISS-01 without qualification.** It is the sharpest finding I have had against this
document, and it is right on the merits and on the severity. §13 (j)(3) said "CLOSED — **ruled and
applied** 2026-09-08" in a Status column, used the present indicative for build facts ("the route
**is** flag-gated", "the nav link **is** hidden", "the route **renders**"), and pinned Doc 06
v2.8.0 — an artifact that did not exist when I authored it. My own session note of 10:00 listed
"Build remedy (a) … **Pending**" in its open-items table, and the engineer's note said the work was
"explicitly DEFERRED to a second message". So the document asserted as dated fact something its
author had recorded as pending four hours earlier.

The reviewer's reflexive point lands and I want it recorded in my own words: **the version whose
entire purpose was to record "a public surface MUST NOT state an unbuilt guarantee as current
fact" stated an unbuilt remedy as applied fact.** That the engineer then applied it during the
review does not cure it — a register is not made true by later events; it is either verifiable when
read or it is not.

**Root cause: sequencing, not carelessness.** I wrote the decision record (which I own) and the
Doc 02 row (which I own) in the same breath as the remedy's build description, because I had just
specified the build in detail. The specification was correct; putting its *completion* in a
governed Status column was not. The durable fix is the convention the reviewer proposes and which
v2.17.3 now writes into the document at four sites:

> **A document records the decision it owns and routes the application; only the applying role's
> document reports that the application happened.**

Doc 02 owns the ruling. **Doc 06 §7 and the UT registry** own the application. That is the split
this rework enforces everywhere the two were blurred.

I also accept ISS-02 and ISS-03. ISS-02 is a genuine citation-set drift with a real consequence:
by substituting H-15 for H-16 I dropped the provision most directly answering the very string the
row quotes — "a short code … which cannot be traced back to you" — which is precisely the H-16
point (the operator database holds `subject_id_hash` and `phone_hash` as derived identity data).
My own 10:00 note cited H-16 for that string; the Doc 02 row was weaker than my analysis. v2.17.3
states the two sets distinctly **and** adds H-16 to the (j)(3) evidence list. ISS-03 is the §12
continuity break; I scoped §12 out at v2.17.2 on a "nothing else is edited" principle, which was
defensible but wrong on the balance — the entry costs a paragraph and the series should not stop
one version behind the header.

## 2. What v2.17.3 does (6 OPs, all in Doc 02, no deletions)

| OP | Site | Closes |
|---|---|---|
| 1 | Header `Version:` 2.17.2 → 2.17.3 and a new `Status:` block (cycle 2 of 5); prior status retained verbatim beneath an explicit label | ISS-01 mirror; records ISS-02, ISS-03 |
| 2 | Header `Change:` — new v2.17.3 entry inserted above the v2.17.2 entry, which is re-emitted | ISS-01 mirror; records ISS-02, ISS-03 |
| 3 | Header `Change:` — v2.17.2 entry: a marked correction appended to "ruled and applied", and the spaced `H-15 / H-17 / H-18` corrected | ISS-01 mirror; ISS-02 (3rd occurrence) |
| 4 | §12 — session-scope entries added for **both** v2.17.2 and v2.17.3 | ISS-03 |
| 5 | §13 (j) row — title cell, body and Status column split into **THE RULING** (closed) and **THE APPLICATION** (routed); build claims recast as "the decided remedy is"; Doc 06 v2.8.0 pinned **only with its status** (In Review, tester's review pending); H-16 added to the evidence list | ISS-01 (primary); ISS-02 |
| 6 | §13 widening note — clause (e)'s carve-out set (H-16/H-17/H-18) distinguished from the additional H-15 citation, at both occurrences; a closing line recording the ruling/application split | ISS-02 |

Handling of dated narration: the v2.17.2 Change entry is **not rewritten**. The original wording
stays and a marked correction is appended in place (annotate-don't-delete), with the new entry and
the Status block stated to govern. That keeps the document's own convention — the same one that
holds ISS-07 and ISS-09 as record-only carried Lows — while making the three sites agree.

On the Doc 06 pin: the reviewer allowed a pin only if the version exists and its status is stated.
It now exists — **Doc 06 v2.8.0, Status In Review**, tester's technical review pending
(`artifacts/engineer-2026-09-08T1100-verify-and-hook.md` records the engineer's application: flag,
placeholder, page and nav gating, guard `UT-0890` with 15 assertions, `npm test` 625 → 640). I pin
it **with** that status and state explicitly that Doc 02 does not certify it. I did not import the
625 → 640 figure or the UT id into Doc 02: those are the applying role's facts, reported in the
applying role's document, and importing them would repeat the defect in a politer register.

## 3. Carried, not folded

ISS-04..ISS-10 (seven Lows) are carried unchanged and disclosed in the new Status block, with
routing unchanged: ISS-04/05/06 ride with the next version that touches §8 (**ISS-05 first** — the
three "Scenario 8" pointers where Scenario 9 also applies, on the tester's natural path); ISS-07 is
record-only; ISS-08/09/10 ride with FR-064, the v2.16.0 changelog narration and §13 (h). v2.17.3
touches none of those sites.

## 4. Open items

| Item | Owner | State |
|---|---|---|
| Transcribe the 6-OP spec into Doc 02 (v2.17.3, In Review) | project-manager / applier | Pending |
| Doc 02 v2.17.3 business review, cycle 2 of 5 | reviewer-qa (neutral, already recorded in the assignment record) | Pending |
| Doc 06 v2.8.0 + code drop, technical review | tester (neutral, per the assignment record) | Pending — not mine |
| §13 (j)(1) `home.steps[0].body` vs H-17 | product-owner | OPEN — un-ruled |
| §13 (j)(2) `home.promises[3]` unverified against a deployed build | product-owner (sre consulted) | OPEN — un-ruled |
| TC row for `UT-0890` | tester | Owed at the next Doc 07/08 touch |
| README/CONTRIBUTING `/verify` delta | technical-writer | Pending — must source the ruling, not a build claim |
| Seven carried Lows ISS-04..ISS-10 | product-owner | Carried; ride with the sections they touch |

## 5. Stop-hook block — recorded, not acted on

The SubagentStop hook blocked at the end of this session with two entries. Both are expected, and
**I authored no review and self-appointed for none.** Recorded here per the hook's own instruction
and the assignment record's standing rule ("a role that hits the SubagentStop block ROUTES to the
PM; it never authors the review whose absence is blocking it").

| Blocked document | Why it is blocking | Why it is not mine to clear |
|---|---|---|
| `02-requirements-srs.md` **v2.17.2** (business) — report exists (`02-requirements-srs-v2.17.2-business-cycle1.md`) but Verdict=FAIL, 92%, M=1 | The file on disk is still **v2.17.2**, whose cycle-1 verdict is FAIL. The rework that answers it is written but **not yet transcribed** — it sits in `artifacts/product-owner-2026-09-08T1500-doc02-spec-c2.md`, and I hold no Edit on Doc 02. | I am the **owning role**. The block clears when the PM/applier transcribes v2.17.3 and **reviewer-qa** — the neutral reviewer already recorded before dispatch in `artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md` — scores cycle 2. The owner reworks; the owner never reviews. Cycle 2 of 5; the cap is not near. |
| `06-coding-and-ut.md` **v2.8.0** (technical) — no report for this version | The engineer cut v2.8.0 to register the `/verify` remedy, the `enrolment_ui` flag and `UT-0890`. Its review has not run yet. | Assigned to the **tester** (technical mode) by the same assignment record. I am **excluded** from it by name — I chose the remedy, so I am not neutral on the document that records its application. I made and make no finding on the code, the flag, the guard or Doc 06. |

Sequencing note for the project-manager: v2.17.3 must be transcribed **before** reviewer-qa is
dispatched for cycle 2 — a reviewer cannot score a version that is not on disk. The two blocks are
independent and can be cleared in either order.

**Candidate agent learning (for the PM, not adopted by me).** The cycle-1 reviewer proposes an
`AL-CANDIDATE`: the same shape produced Doc 06 v2.7.0's stale-pin Lows. My contribution to the
wording, if it is taken up: *a role's document may record only facts that role can verify from the
artifacts it owns; anything else is routed with a named owner and a named reporting artifact.*
I do not adopt it — agent definitions change only by human approval.

## 6. IDs touched

- **Document:** Doc 02 v2.17.2 → **v2.17.3, Status In Review** (header `Version`/`Status`/`Change`,
  §12 two new session-scope entries, §13 (j) row and widening note) — **specified, not yet
  transcribed**. `Last updated:` unchanged at 2026-09-08 — same-day rework.
- **Requirements cited, none amended:** FR-131 (clause (e) and its carve-out enumeration), FR-132
  §(b)/(d)/(e), CON-015, §16.4 **H-15, H-16, H-17, H-18**, OI-20, §13 tracked deferral (b), §13
  tracked routing (j).
- **Cross-document pins:** Doc 06 v2.8.0 (In Review) — pinned with status only; Doc 14 §1.2;
  DES-100, ADR-003; `UT-0890` referenced in this note only, **not** imported into Doc 02.
- **No BR / FR / NFR / CON / RISK / DES / ADR / SCR / US / TC / UT id was minted, reused or
  renumbered. Must count stays at 114.**
