# Session memory — reviewer-qa, 2026-09-08T13:00 — Doc 02 v2.17.2 business review (cycle 1)

```
Role:       reviewer-qa (neutral reviewer for this dispatch — NOT a Gate-2 merge-signing act)
Date:       2026-09-08
Dispatched: project-manager (Ana-Maria Petrescu)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md — names reviewer-qa as
            the neutral reviewer of Doc 02 v2.17.2 (business), recorded BEFORE dispatch.
            Excluded: product-owner (owner), tester (Doc 08 rows).
Reviewed:   docs/02-requirements-srs.md v2.17.2 (In Review), business rubric, cycle 1 of 5
Wrote:      artifacts/reviews/02-requirements-srs-v2.17.2-business-cycle1.md
            this note
Wrote no code, no docs/ file, no other review report. Did not open artifacts/memory-index.json
(both paths pre-registered by the PM). Did not self-appoint for any other document.
```

## 1. Verdict

**FAIL — Score 92% — Critical 0 / High 0 / Medium 1 / Low 9.** Routed to the **product-owner**
(Priya Raghunathan) for rework as **v2.17.3 (PATCH)**, `Status: In Review`. Cycle 1 of 5; the cap
was not approached. The pass bar is missed on both limbs (score < 95% and one Medium).

## 2. What I verified, and how

The brief asked me to verify the change entry's claim that **no normative text is touched**. I
proved it mechanically rather than accepting it: reconstructed v2.17.2 from the committed baseline
(`git show HEAD:…` = v2.17.1) by applying the 4 Doc 02 operations of
`artifacts/product-owner-2026-09-08T1000-doc02-spec.md`, each `FIND` required to match exactly once.

```
4/4 FINDs matched exactly once
baseline 473,754 bytes -> reconstructed 480,660 bytes ; actual 480,660 bytes
BYTE-IDENTICAL: true
```

Byte-identity establishes in one assertion that **FR-131 (incl. clause (e)), FR-132 (incl.
§(b)/(d)/(e)), every §8 Gherkin scenario, every §16 row, §4.45, §4.6, §9 CON-015 and §12 are
unchanged**, that there are zero collateral edits and zero transcription residue, and that no ID was
minted, reused or renumbered. **The claim is TRUE.** Independent greps agree (`FIND:` 0,
`REPLACE WITH:` 0, conflict markers 0, 18 balanced fence lines).

I also checked every outward citation the new §13 (j)(3) makes against its source — FR-132 §(b),
DES-100, ADR-003, Doc 06 §7 / `StubIdDocumentChecker.IS_INSECURE_MOCK()`, H-15, H-17, H-18,
FR-132 §(e), OI-20 + Doc 14 §1.2, CON-015, the three quoted `en.ts` strings, and
DECISIONS-2026-09-08-VERIFY-PAGE.md §1/§2/§5 — **all accurate**. And I confirmed the enlarged
`Status:` header creates no gate hazard: `hooks/check_gates.py::doc_current_version` reads only the
first `Version:` line and never parses `Status:`, so the embedded "Prior status … Approved" cannot
spoof the hook.

## 3. The Medium (ISS-01)

§13 (j) item (3) records, as dated completed fact, an application that had **not** happened when the
version was authored: Status column "**CLOSED — ruled and applied 2026-09-08**", present-indicative
build claims ("the route **is** flag-gated", "the nav link **is** hidden", "the route **renders**…"),
and the pin "Applied by the engineer (**Doc 06 v2.8.0**)".

Evidence: at my first snapshot there was no `enrolment_ui` flag, no placeholder copy, no page or nav
conditional and no guard; `git status` showed no modified files under `apps/` or `packages/`; Doc 06
was v2.7.0. The **engineer's own note** says decision 1 is "pending … explicitly DEFERRED to a
second message", and the **owner's own note** §6 lists "Build remedy (a) … **Pending**". The
document therefore asserted as completed what its author recorded as pending.

**Medium, not Low** — this is a build-state assertion in the Status column of a governed register
(the field downstream roles consult for closure), not merely a stale version pin, which is the
Low-precedent class here (Doc 06 v2.7.0's ISS-C2-01/02). The propagation is named and imminent: the
technical-writer is directed to rewrite the **public README** to say `/verify` is "flag-gated off in
the public build", sourcing it from this row. And it is the exact defect class the version exists to
record — approver decision 1 held a public surface MUST NOT state an unbuilt guarantee as current
fact. **Medium, not High** — contained to one row plus two header echoes; no requirement, ID or
trace chain is corrupted; fixable by wording alone.

**Required fix:** separate the **ruling** (closed, correct) from the **application** (state its real
status; cite an artifact that exists), at all three sites.

## 4. Moving repo state, and the addendum

The engineer applied remedy (a) **in parallel with my review**. Timeline recorded in the report
§4.1: nothing at first snapshot → flags + i18n at 18:06:44Z → page + nav + UT-0890 at 18:10:41Z →
**Doc 06 v2.8.0 cut (In Review) at ~18:18Z**, after I had scored. I appended a dated **§7 addendum**
to the report rather than rewriting §1–§6 (annotate-don't-delete). The verdict is unchanged: an
assertion false when made is not cured by a later event, and Doc 06 v2.8.0 is **In Review**, not
Approved — a row citing an unreviewed document as proof a remedy "was applied" cites a claim, not a
verification.

## 5. The two new Lows and the seven carried

- **ISS-02 (Low)** — the widening note paraphrases clause (e)'s carve-out but substitutes
  **H-15 for H-16**; clause (e)'s own set is H-16/H-17/H-18. Dropping H-16 loses the provision that
  most directly answers the quoted "cannot be traced back to you" string — the owner's own note
  cites H-16 for exactly that. Fix: cite H-15/H-16/H-17/H-18, or distinguish the two sets.
- **ISS-03 (Low)** — no **§12** session-scope entry for v2.17.2; §12 stops at v2.17.1. The same
  omission was raised as cycle-1 ISS-07 against v2.17.0 and fixed at v2.17.1.
- **ISS-04..ISS-10** — the seven Lows carried from v2.17.1 (that report's ISS-01..ISS-07), all
  re-confirmed present (byte-identity proves none of their sites moved) and all correctly disclosed
  in the header. Per the dispatch they are recorded, not re-argued, and none is raised above Low.

## 6. Scope discipline observed

- Reviewed **only** Doc 02 v2.17.2. Authored **only** the one assigned report.
- `node hooks/run_gates.cjs --audit` exits **0**. It showed Doc 02 v2.17.2 as the sole blocker at
  the start; by the end **Doc 06 v2.8.0** also blocks ("no report for this version"). That is
  **expected and is the tester's assignment** — I did **not** self-appoint and authored no report
  for it. Recorded here per the dispatch rule.
- After my report landed the audit reads it correctly:
  `BLOCK 02-requirements-srs.md v2.17.2 (business) - report exists but fails the bar` — the metadata
  block is machine-parseable and needed no filename fallback.
- **No Gate-2 finding and no merge signed.** Those are separate acts on separate evidence; the audit
  still reports "Gate 2 traceability criterion: NOT MET" (138 Must rows, 16 COMPLETE, 122 OPEN). I
  did not run the product test suite — the code drop belongs to the tester's technical review.
- I was not blocked by the stop hook on anything I did not author.

## 7. Open items

| Item | Owner | State |
|---|---|---|
| Doc 02 v2.17.3 — fix ISS-01 (Medium), fold ISS-02 + ISS-03 | product-owner | Routed; PATCH bump |
| Re-review of Doc 02 v2.17.3 (business, cycle 2 of 5) | PM assigns a neutral reviewer | Pending |
| Doc 06 v2.8.0 + code drop review (technical) | **tester** (per the assignment record) | Blocking in the audit; not mine |
| TC row for UT-0890 | tester | Owed at the next Doc 07/08 touch |
| §13 (j)(1) and (j)(2) | product-owner (sre consulted on (2)) | Remain OPEN — correctly not resolved by the (3) ruling |
| Convention proposal: a document records the decision it owns and routes the application | project-manager | Suggested as an AL-CANDIDATE in the report §5 |

## 8. IDs touched

- **Documents reviewed:** Doc 02 v2.17.2 (read end to end; scored; **not edited** — reviewer-qa
  writes nothing to `docs/`).
- **Requirements/records read and cited, none amended:** FR-131 (clause (e)), FR-132 (§(b)/(d)/(e)),
  FR-004, FR-020, FR-121, FR-122, FR-123, FR-129, CON-015, §16.4 H-15/H-16/H-17/H-18/H-19, §16.5
  T-06/T-07, OI-04, OI-20, §13 tracked routing (h)/(i)/(j), §13 tracked deferrals (b), §12.
- **Design read, not authored:** DES-098, DES-100, ADR-003, ADR-024, ADR-025.
- **Other documents read for verification only:** Doc 03, Doc 06 (§7 and header), Doc 14 §1.2.
- **Code read as evidence only (read-only role):** `apps/web/src/i18n/en.ts` / `ar.ts` (`verify.*`),
  `apps/web/src/app/verify/page.tsx`, `apps/web/src/components/SiteHeader.tsx`,
  `apps/web/src/config/flags.tsx`, `packages/protocol/src/flags.js`,
  `packages/sdk/src/eligibility.js`, `apps/web/test/safety-surfaces.test.tsx` (UT-0890),
  `hooks/check_gates.py`.
- **Issue ids minted (this report's local scheme):** ISS-01 (Medium), ISS-02..ISS-10 (Low).
- **No BR / FR / NFR / DES / ADR / SCR / US / TC / UT id was minted, reused or renumbered by this
  session.**

## 9. SubagentStop block — recorded, not acted on (2026-09-08)

The SubagentStop hook blocked my exit on two documents. **Neither is mine to clear**, and I changed
nothing to clear it. Recorded here per the hook's own instruction ("record this block in your
session note and stop") and per the review-assignment rule.

```
- 02-requirements-srs.md v2.17.2 (business review) — report EXISTS
  (02-requirements-srs-v2.17.2-business-cycle1.md) but does not satisfy the gate:
  Verdict=FAIL, score=92% C=0 H=0 M=1
- 06-coding-and-ut.md v2.8.0 (technical review) — NO report found for this version
```

**Block 1 — Doc 02 v2.17.2: this is the gate working, not a defect.** My assigned report exists,
is correctly formatted, and the hook parsed it exactly as intended. It blocks because the verdict is
**FAIL** — and a FAIL is *supposed* to hold the SOP until the **owning role** (product-owner) cuts
**v2.17.3** and a neutral reviewer passes it. The only ways I could clear this block myself would be
to raise the score above 95% or to reclassify ISS-01 below Medium. **Both would be falsifying a
review to clear my own stop, which is the exact self-dealing the reworded hook text (approver
decision 3, this same session) exists to prevent.** I did neither. The verdict stands: **FAIL, 92%,
0C / 0H / 1M / 9L.** The block clears when the product-owner reworks, not when I relent.

**Block 2 — Doc 06 v2.8.0: not my assignment.** The assignment record
(`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`) names the **tester** (new instance)
as the neutral reviewer for Doc 06 v2.8.0 and the code drop, and excludes the engineer (owner) and
the product-owner (chose the remedy). I am not its assigned reviewer. I did **not** self-appoint and
authored no report for it. Doc 06 v2.8.0 was cut by the engineer *during* my review (see §4), which
is why it appeared in the audit mid-session — expected, and flagged in the dispatch as expected.

**Routing:** both blocks go to the **project-manager**, who sequences the review — Doc 02 v2.17.3
rework to the product-owner, Doc 06 v2.8.0 review to the tester. **Stopping here.**
