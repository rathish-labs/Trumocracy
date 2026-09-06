# Document Review Report — Doc 09 Release Notes v1.3.0 (business, cycle 3)

> Produced by the shared **document-review** skill. The reviewer **scores and lists issues only —
> it never edits the reviewed document**; the **owning role (sre, Chen Wei)** does every rework.
> Assignment of record: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-02-DOC-09.md`
> (PM Ana-Maria Petrescu, 2026-09-02 — reviewer: **tester (Ji-woo Park)**, mode **business**,
> recorded BEFORE dispatch per AL-CANDIDATE-3). The reviewer owns neither Doc 09 nor its outcome.
> Prior cycles: `…-v1.1.0-business-cycle1.md` (FAIL 77%) · `…-v1.2.0-business-cycle2.md` (FAIL 89%).

```
Reviewed document: 09-release-notes.md
Document version: 1.3.0
Review mode: business
Reviewer role: tester
Score: 94%
Critical: 0
High: 0
Medium: 1
Low: 3
Cycle: 3 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

**Every substantive defect from cycles 1 and 2 is now closed, and I could not find a new one.** The
cycle-2 High is fixed at all five sites I flagged, at a sixth the sre found itself (the `b8cf2ce`
changelog row), and with a replacement `Doc 06 §5.1 / §5.2` pointer that I verified is not merely
correct but *corroborated* — §5.1 is titled "Found by the Doc 04 **test strategy**" and `b8cf2ce` is
"security fixes from the **test-strategy review**"; §5.2 is "Found by the **independent security
scan**" and `c854c0a` is "six criticals and four highs from the **independent security scan**". I
re-derived both attributions with `git log -S` and they hold. The changelog's SHA set is **identical**
to `git log --no-merges -- packages/ apps/` at `HEAD` (`e039ff2`). The `FR-131` word ban is clean
document-wide for the third consecutive version, and the HALT is intact. **Trajectory: 77% → 89% →
94%.**

**One correction against my own cycle-2 report, recorded because the sre was right and I was not.**
My required-fix text told the sre to write "two commits **one day apart**". `git log --date=iso`
gives `b8cf2ce` at 2026-08-09 00:28:42Z and `c854c0a` at 2026-08-09 01:46:25Z — **78 minutes apart,
the same day**. The sre diverged from my wording and wrote "two commits, both on 2026-08-09", which
is the true statement. Scored on truth, not compliance: **the divergence is correct and the document
is better for it.**

It nonetheless **FAILS**, on a single Medium and three Lows, all mechanical. **The version that
fixed transcription damage introduced new transcription damage in two places** — an orphaned
duplicated fragment at **L762, inside §7**, and a five-word deletion at **L497–498** that destroys
the meaning of the re-pin note's closing sentence. That is the third consecutive version in which an
anchored FIND/REPLACE has damaged text at an edit boundary. Nothing false is asserted and no
commitment is lost; the document is **one clean transcription pass from PASS**.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`94%` — narrowly)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the Medium is independently disqualifying regardless of the score. Route to
  the **sre** for **v1.3.1** (a patch bump is the right increment: no Medium+ *content* defect
  remains, only mechanical repair), then cycle 4. Two cycles remain under the cap.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **B1** Outcome & problem clarity | 20 | 97 | 19.40 | §7 is now maximally precise: two independently sufficient HALT reasons, a correction of record for the withdrawn third, and a second correction of record for the commit-split error — each naming that a neutral review caught it rather than its author. This is what a release-decision document should look like. |
| **B2** Completeness | 15 | 92 | 13.80 | All cycle-2 findings closed plus two self-found fixes (`CH-05`, `CH-08`), both verified as real improvements. Deduction: residue (b) removes the re-pin note's operative clause, so the instruction it exists to give can no longer be read. |
| **B3** Traceability & IDs | 20 | 96 | 19.20 | Now excellent. Seven commit-attribution sites all verified correct; the `Doc 06 §5.1`/`§5.2` pointer verified against the actual table structure and corroborated by section titles; changelog SHA set **identical** to git; re-pin enumeration accurate (nine corrected + `REL-LIM-09` augmented); `:88`/`:144`/`:167-168` relabelled exactly right. Deduction: `ISS-02` (the "six consuming surfaces" miscount). |
| **B4** Correctness & consistency | 15 | 95 | 14.25 | The cycle-2 High is completely closed, and closed **more accurately than my own required-fix text**. I re-tested every generalisation I could reach and found none false. Deduction: `ISS-03` (stale "Version 1.2.0" self-reference, contradicting L175's "This version") and the duplicated text at L762. |
| **B5** Testability | 15 | 95 | 14.25 | Unchanged and strong: claims pinned and resolving, `REL-LIM-12`'s clearing condition specific and checkable, `TC-EXIT-*` honestly withdrawn as "none of record". |
| **B6** Convention compliance | 15 | 86 | 12.90 | RFC 2119, ISO-8601, named-owner rule, Keep a Changelog and the **`FR-131` word ban** all hold cleanly. Deduction is entirely `ISS-01`: two transcription-residue sites in a public-facing document being considered for `Approved`, one of them literal duplicated text inside the release-decision section. |
| **Total** | **100** | — | **93.8 → 94%** | — |

## 4. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| **ISS-01** | **Medium** | B6 / B2 | **(a)** §7, **L762**. **(b)** §Known issues, re-pin blockquote, **L497–498** | **Transcription residue at two sites, introduced by v1.3.0.** **(a)** L760–761 complete the sentence *"**Still open from the same readiness pass:** `REL-LIM-15` (activation still flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set)."* — and then **L762 repeats a tail of the pre-edit line**: `flag-gated), `REL-LIM-16` (issuer-removal enrolment cliff), `REL-LIM-17` (irrevocable spender set).` The `CH-` operation that rewrote the "Verified fixed" paragraph did not consume the remainder of the line it replaced. The result is a dangling, meaningless fragment inside §7, the release-decision section. **(b)** The `CH-05` operation that replaced *"Eight were stale: code had moved under them since 2026-08-09 and the pins had not followed"* with the row enumeration **also ate five words from the following line**. v1.2.0 read *"If a pin below does not resolve to what **its row describes, it moved** after 2026-09-02 — that is the difference this line exists to let you tell."* v1.3.0 reads *"If a pin below does not resolve to what / **after** 2026-09-02 — that is the difference this line exists to let you tell."* The sentence is now ungrammatical and its meaning destroyed — and this note exists precisely to tell a reader how to interpret a pin that does not resolve, which is the one instruction it can no longer give. **Neither site asserts anything false and neither loses a commitment**, which is why this is Medium and not the High that cycle 1's destroyed item 4 was. | **(a)** Delete L762 outright; L760–761 are complete and correct. **(b)** Restore the five words: *"…does not resolve to what **its row describes, it moved** after 2026-09-02…"*. **Then, before publishing: this is the third consecutive version damaged at a FIND/REPLACE boundary** (v1.1.0 destroyed §Upgrade item 4 — cycle-1 `ISS-04`; v1.3.0 has these two). The pattern is not the replaced text, it is always the **line the anchor ends inside**. Read the two lines *after* every replacement, and run a suffix-duplicate scan, not just a whole-line duplicate scan — my cycle-2 exact-line scanner missed L762 because the fragment is not a whole-line match. |
| **ISS-02** | Low | B3 | `REL-LIM-18`, PrivacyStatus exclusion clause (**L519**) | *"all **six** consuming surfaces carry an explicit non-render comment"* — there are **five** consuming files (`app/parties/page.tsx`, `app/petitions/new/page.tsx`, `app/proposals/page.tsx`, `components/PartyMembership.tsx`, `components/ProvisionalStatus.tsx`) carrying **six** comments, because `petitions/new/page.tsx` has two (`:13` file header and `:134` inline). The six citations listed are all correct and the underlying claim — that **every** consuming surface carries one — is **true**; only the count of surfaces is wrong. A set-level miscount of exactly the class this version's own generalisation audit was built to catch. | "all five consuming surfaces, at six sites" — or drop the count and keep "every consuming surface carries an explicit non-render comment", which is true and is the load-bearing claim. |
| **ISS-03** | Low | B4 | §7 owed-item 3 (**L781**) | *"**Version 1.2.0** corrects the v1 position wherever this document already asserted it"* — a stale self-reference in a v1.3.0 document, and inconsistent with the §0 coverage note at **L175**, which was correctly updated to *"**This version** does not re-scope the release"*. | "This version corrects the v1 position…" (or "Versions 1.2.0–1.3.0"), matching L175. |
| **ISS-04** | Low | B3 | `REL-LIM-05`, `-06`, `-08`…`-10`, `-15`…`-17` "Cleared by"; §7 owed-item 2 | `REF-02` and `REF-04`…`REF-10` remain unresolvable — `docs/refine-log.md` still holds no register entries. **PM-accepted; held at Low per the standing ruling and not re-scored.** §7 owed-item 2 continues to name the debt explicitly. | Owed at the next Operate cycle. Not a pass-bar item. |

> **Low** issues do not block the pass bar. The single **Medium** forces the FAIL.

## 5. Cycle-2 findings — verification of closure

| Cycle-2 ID | Sev | Status | Evidence |
|---|---|---|---|
| ISS-01 | High | **CLOSED — verified at seven sites, one more than I flagged** | I re-derived both attributions independently: `git log -S "authorisedSpender[msg.sender]" -- PersonhoodRegistry.sol` → **`b8cf2ce`**; `git log -S "deliberately NOT gated on FLAG_GOVERNANCE" -- Governor.sol` → **`b8cf2ce`**; the `issueResidency` guard → **`c854c0a`**. All seven document sites now attribute correctly: history L28–35, §Known-issues preamble **L488–492** (*"there is no single remediation that covers all three, and an earlier version of this document was wrong to say there was"*), `REL-LIM-03` row L504, internal record L646, §7 L751–759, and **both** changelog rows. **The `b8cf2ce` changelog row (L664) is the site I did not flag** — the sre found it and it now reads *"closes `REL-LIM-04` … **and `REL-LIM-07`** …; Doc 06 §5.1 numbered defects 1 and 4"*. The `c854c0a` row (L669) is more precise still: *"It also hardens the `REL-LIM-04` family with `H-01` (`setSpenderAuthoriser` made set-once, four lines) but does **not** close `REL-LIM-04` itself, which `b8cf2ce` had already done"* — and `git show --stat c854c0a` does show `PersonhoodRegistry.sol \| 4 +`. **Doc 06 pointer verified:** §5 has §5.0/§5.1/§5.2/§5.3; the numbered table (defect 1 = `spendNullifier`) is in **§5.1** (L597–612) and `C-01` is in **§5.2** (L613–625). The sre's observations that §5.2 has no `C-05` and that a `C-01`–`C-06` range silently dropped the `H-` rows are both correct. **Date divergence adjudicated in the sre's favour — see §1.** |
| ISS-02 | Medium | **CLOSED — and improved beyond the fix** | L408–412 now reads *"**Five** shipped code strings…"* and, rather than leaving a bare number, summarises their character: *"a feature-flag description, contract documentation, an SDK comment, a component comment — and, the one that matters most, **the banner copy a citizen actually reads on the vote screen**."* Swept the document: every occurrence of the count is now five, and the only surviving "three" is inside quoted corrections of record. |
| ISS-03 | Medium | **CLOSED — accurate and complete** | `REL-LIM-18` now states the exclusion on its true basis: *"`packages/ui/src/PrivacyStatus.tsx` is **not rendered on any shipped surface** … **That, and only that, is why it is excluded.** It is *not* compliant by construction, and an earlier version of this row wrongly said it was: `PrivacyStatus.tsx:236` sets `title: 'Verified — private'` for the `ver` state and renders it at `:333-335`, directly above the clause-7 fail-honest v1 subtitle — a banned word on a voting-adjacent status badge."* Re-routed as I recommended: *"**Routed to the engineer as a pre-mount blocker, not a watch item:** the `ver`-state title MUST be re-copy-reviewed against `FR-131` **before** this component is first mounted anywhere."* I re-verified `:236` and `:333-335` at `HEAD`. **The treatment is now accurate and complete** — the only residue is the surface count (`ISS-02` above). |
| ISS-L1 | Low | **CLOSED — verified** | `REL-LIM-12` Trace now reads *"`:88` and `:144` (the two throws), `:167-168` (the gate's published description)"*. Verified: `promotion-gate.mjs:88` is `if (!env) throw new UnsafeDeploymentError(…)` ✓ and `:144` is the findings throw ✓. |
| ISS-L2 | Low | **Open — PM-accepted** | Now `ISS-04` above. Unchanged and correctly disclosed. |

### The two self-found fixes — both verified genuine

- **`CH-05` (the re-pin blockquote).** "Eight were stale" is replaced by an enumeration: *"`REL-LIM-03`, `-05`, `-07`, `-08`, `-10`, `-12`, `-13`, `-15` and `-16`; `REL-LIM-09` gained a pin it had been missing."* **Verified accurate.** Nine rows, and it reconciles exactly with my cycle-1 record: seven rows I listed under `ISS-06` (`-05`, `-07`, `-08`, `-10`, `-13`, `-15`, `-16`) plus the two I had subsumed elsewhere (`-03`'s pin under `ISS-01`, `-12`'s `adversarial.test.mjs:320-329` pin under `ISS-02`). And `REL-LIM-09` is right to be excluded from "corrected": its `:33` and `:65` pins were already correct at v1.1.0 — v1.2.0 *added* `:53`/`:57`. The sre found a genuine ambiguity in its own count and resolved it by enumerating. Correct instinct. *(The operation nonetheless caused residue (b) — `ISS-01`.)*
- **`CH-08` (customer-facing characterisation).** *"(3) and (5) are customer-facing"* is tightened to *"**(3) is the only one a citizen reads** … **(5) is a comment inside that same component** instructing that the copy be kept, so it is the reason (3) would come back; it is not itself seen by anyone outside the codebase."* **Verified correct** — `ReceiptFreedomBanner.tsx:6-10` is the file's doc comment and `:41-44` is the render of `t.banner.notReceiptFreeTitle`/`Body`. The tightened statement is true and the causal framing (the comment is why the copy would return) is the more useful one.

## 6. Generalisation audit — kept assertions spot-checked

The sre reports fourteen set-level assertions audited, four false (fixed) and ten kept. I sampled
the kept ones I could test independently:

| Kept assertion | Verdict |
|---|---|
| `Governor.sol:199` — `requireEnabled(FLAG_GOVERNANCE)` "on `propose`, **and nowhere else**" | **True** — `grep -n requireEnabled Governor.sol` returns only line 199. |
| "there is **no single remediation** that covers all three" (L491) | **True** — two commits, verified by `git log -S`. |
| "every consuming surface carries an explicit non-render comment" (PrivacyStatus) | **True** for all five files; the *count* of surfaces is wrong (`ISS-02`). |
| "**(3) is the only one a citizen reads**" (`REL-LIM-18`) | **True** — (1) flag metadata, (2) Solidity NatSpec, (4) SDK comment, (5) component comment; only (3) renders. |
| "Three are struck through and marked closed" | **True** — `REL-LIM-03`, `-04`, `-07`. |
| "the record above is the release record, and it is **complete as of `HEAD`**" (§Changelog) | **True** — 14 rows; the SHA set is **identical** to `git log --format=%h --no-merges -- packages/ apps/`; `HEAD` still `e039ff2`. |
| "`c854c0a`… does **not** close `REL-LIM-04` itself" | **True** — `git log -S` places it in `b8cf2ce`; `c854c0a` touches `PersonhoodRegistry.sol` by four lines (`H-01`). |

**No kept generalisation tested false.** The audit was real work and it held.

## 7. Other verification recorded clean

1. **`FR-131` word ban — re-swept document-wide at v1.3.0: still clean**, third consecutive version.
   Every hit is a negation, the named v2 capability, a cannot-column entry, a flag or copy-key
   identifier, an accurately quoted defective string, or the ban's own restatement. **The two
   withdrawn errors quoted verbatim in the v1.3.0 history (L28, L41) are quotation inside a
   correction of record, not live claims** — the surrounding text refutes each in the same sentence.
   That is the correct handling and it does not breach the ban.
2. **The HALT is intact.** §0's opening line (*"MUST NOT be promoted to production"*), all nine
   precondition rows, the Gate row (L636) and *"Approvals (Gate 2): **None.**"* (L649) are unchanged.
   §7 still rests on two reasons each labelled *"Sufficient alone"*, with *"it does not depend on any
   code defect"* and *"Removing it does not change the decision"*. **No softening anywhere.**
3. **§0 coverage note (L175)** correctly updated to "This version" — which is what makes `ISS-03`
   an inconsistency rather than a house convention.
4. Internal-record flag ON/OFF lists still match `flags.js` prod defaults exactly.

## 8. Routing instruction (to the owning role)

**FAIL → route to the sre (Chen Wei).** Zero Critical, zero High, one Medium, three Lows. The rework
MUST produce a new version — **v1.3.1** is the right increment, since no Medium+ *content* defect
remains and the repair is mechanical — with `Status: In Review`, after which this loop re-reviews as
**cycle 4 of 5**.

The entire remaining fix list is four edits:

1. **`ISS-01`(a)** — delete L762.
2. **`ISS-01`(b)** — restore *"its row describes, it moved"* at L497.
3. **`ISS-02`** — "six consuming surfaces" → "five consuming surfaces, at six sites" (or drop the count).
4. **`ISS-03`** — L781 "Version 1.2.0" → "This version".

**Do not re-open anything else.** I re-tested the document's factual claims end to end this cycle and
found none false. `ISS-04` (`REF-##`) stays PM-accepted.

**One thing worth saying plainly, since three cycles of this review have been adversarial by design:**
the content of this document is now in good order, and §7's willingness to record its own two
withdrawn errors — naming in each case that a neutral review caught them rather than its author — is
the strongest part of it. The remaining defect is not a thinking failure, it is a mechanical one, and
it has now recurred in three consecutive versions at the same structural point: the line an anchor
ends inside. A post-transcription read of the two lines *after* every replacement would have caught
all three.

**Independence note.** This report scores and lists issues only; the reviewer made no edit to
`docs/09-release-notes.md` or to any other product or owned document. This is a review-loop verdict
only — it is **not** a Gate-2 sign-off, which remains with `reviewer-qa` and the human approver.
