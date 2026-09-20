# Public-files review — cycle 3 — README · CONTRIBUTING · SECURITY · CODE_OF_CONDUCT

> **Not a governed-document review.** Public root files, not numbered documents. This report
> lives in `artifacts/status/` and avoids the `document-review` machine-parseable field names, so
> it cannot enter the SubagentStop hook's cycle counter. The business rubric and severity scale
> are the scoring frame only.

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md · CODE_OF_CONDUCT.md
Cycle:            3   (c1: FAIL 81% 0/4/7/9 · c2: FAIL 93% 0/0/1/5)
Rework note:      artifacts/technical-writer-2026-09-06T2130-public-files-cycle3.md
Read at:          working tree, 2026-09-06 (uncommitted)
Review date:      2026-09-06
Reviewer:         product-owner (Priya Raghunathan) — same assigned reviewer; author excluded
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   FR-131 clause (e), Doc 02 §4.45 at v2.17.1 — including the tightened
                  safe-harbour ("makes no contrary claim elsewhere in the same string") and the
                  new precedence rule ("where the safe-harbour and the reader test disagree, the
                  reader test governs"). Plus "nothing public may claim a guarantee v1 doesn't
                  deliver" — applied in both directions: no overclaimed guarantee, and no
                  under-stated retention.
PM ruling honoured: ISS-C2-01 judged on the truth of the qualified wording only. Doc 02 not
                  reopened; §13 (j) widening stays a routed action, not a bar on these files.
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            95%  (94.7 weighted)   ← meets the score bar for the first time
Critical 0 · High 0 · Medium 1 · Low 0
VERDICT:          FAIL — on the Medium alone. The score bar is met; one word is not.
```

---

## 1. Summary (BLUF)

**All six cycle-2 items are closed, correctly, and the score bar is met for the first time.**
Three of the four files now carry **zero** issues at any severity: SECURITY, CONTRIBUTING and
CODE_OF_CONDUCT are done. The ISS-C2-01(a) qualified wording is not merely acceptable — it is
**independently corroborated** by Doc 02 v2.17.1's own new text, which says the open question at
§13 (j) concerns "the enrolment **landing** copy". The public files and the requirement now say
the same thing about the same scope.

**One Medium, and it is a regression introduced by a fix I asked for.** ISS-C2-02 asked the writer
to distinguish counting-verified from open-tier retention. The new sentence does that, and adds a
word I did not ask for: an open-tier account "keeps **only** the phone hash and the party link."
`FR-133` (Doc 02 §4.47) mandates a v1 spam-screening layer — VoIP detection, velocity checks by IP
and **device fingerprint**, device anti-fraud signals — and states that "**flag events are
restricted-class data** (NFR-027)". So a phone-only user may have screening signals and flag
events held about them, and the README's one paragraph about what v1 keeps now tells them
otherwise.

This is the **same defect class as cycle-1 ISS-06** (an exhaustive-sounding enumeration that is
not exhaustive), which I graded Medium and which was closed. Grading it lower now, because it is
small and late and I asked for the change that caused it, would mean applying a moving standard to
a retention claim in the one paragraph a cautious citizen reads. **The fix is deleting one word.**

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (95%, 94.7 weighted) — first cycle to clear it
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict: FAIL.** Cycle 4 is a one-word edit to one sentence in one file. I scored and listed
  only; I edited none of the four files.

---

## 3. Per-criterion scores

| Criterion | Weight | c1 | c2 | **c3** | Weighted | Notes |
|---|---|---|---|---|---|---|
| B1 Outcome & problem clarity | 20 | 88 | 96 | **96** | 19.2 | Status block, `FR-132`(d) caveat and the `/verify` inventory all hold. |
| B2 Completeness | 15 | 85 | 95 | **90** | 13.5 | Down: the open-tier retention list is now stated exclusively and omits `FR-133`. |
| B3 Traceability & IDs | 20 | 70 | 88 | **97** | 19.4 | Every pin in all four files now resolves, at the right scope. The `/verify` citation is correct **and** matches Doc 02 v2.17.1's own wording. |
| B4 Correctness & consistency | 15 | 72 | 91 | **92** | 13.8 | Three cycle-2 imprecisions fixed; one new under-statement. |
| B5 Verifiability of claims | 15 | 80 | 92 | **94** | 14.1 | Every new sentence resolved to source except the one in §5. |
| B6 Convention compliance | 15 | 94 | 96 | **98** | 14.7 | Still zero emails, personas framed correctly, licences correct; CoC fix added no contact channel. |
| **Total** | **100** | 81% | 93% | — | **94.7 → 95%** | |

---

## 4. Cycle-2 issue closure — verified against source

| ID | Sev | Status | Evidence checked this cycle |
|---|---|---|---|
| **ISS-C2-01(a)** | Medium | **CLOSED — and corroborated** | All three sites now carry the qualified form. `README:131-136`: "an **open, unruled question.** The closest tracked item, Doc 02 §13 (j), covers the **landing-page** enrolment strings (`home.steps[0].body`, `home.promises[3]`; Doc 06 §7 item 26) — **this page's own copy is not yet in any register.**" `CONTRIBUTING:39-45` (§1) and `:156-159` (§6) match. **Every element is true:** (j) is titled "Enrolment / verification landing copy" and names exactly those two strings; Doc 06 §7 item 26 names the same two; `/verify`'s own strings (`en.ts:72-97`) are in no register at HEAD. **Independent corroboration found this cycle:** FR-131 clause (e) at **v2.17.1** now itself reads "whether those provisions fully reach the enrolment **landing** copy is the open question tracked at §13 tracked routing (j)" — the requirement and the public files now agree on scope. Per the PM ruling I judged the wording's truth only; §13 (j) widening remains routed to me, unblocked and unblocking. |
| ISS-C2-02 | Low | **CLOSED** (regression → ISS-C3-01) | `README:61-68` — "For a **counting-verified** account…" then the open-tier sentence. The six fields match the `FR-132`(b) allowlist; "none of the other five" is arithmetically right (six minus `phone_hash`). The distinction I asked for is correctly drawn; see §5 for the word that came with it. |
| ISS-C2-03 | Low | **CLOSED** | `README:70-73` — "**would** keep this in an in-memory store — but today its credential store is **empty by design**: nothing on the demo page can populate it, because that would mean faking the enrolment flow this repo has deliberately not built (Doc 06 §7 item 22)." A faithful paraphrase of item 22, which reads "No page control can mark the visitor ID-verified — building that would fake the enrolment flow this repo has deliberately not built (CON-015)". Matches `app/proposals/page.tsx:48-53` (`credentialStore: new Map()`). |
| ISS-C2-04 | Low | **CLOSED** | `CONTRIBUTING:39` — "**addressed by** `FR-132`(d)". Now matches the operative text of FR-131 clause (e) at v2.17.1 verbatim ("are **addressed by** FR-132 §(d)"), not just its change log. |
| ISS-C2-05 | Low | **CLOSED** | `SECURITY:40` — "is already live **in the built demo** on the vote surface today". The pin, the mount point and the `UT-0887` guard all re-verified and unchanged. |
| **ISS-20** | Low (carried from c1) | **CLOSED** | `CODE_OF_CONDUCT:61-68` — the security channel is now named as "used here simply as a private contact form, **not because a conduct report is a security issue**", with "expect a **best-effort response from a single maintainer** — there is no dedicated conduct team and no service-level agreement". **No email address added**; Covenant 2.1 text and attribution otherwise intact. Both usability and expectation gaps closed. |

**Observation, not an issue.** The CoC now holds Covenant 2.1's "All complaints will be reviewed
and investigated **promptly** and fairly" beside a new "no service-level agreement". That is a mild
tension, but it resolves in the honest direction — the added sentence *reduces* a promise rather
than inflating one — so it stays an observation.

---

## 5. New issue

| ID | Sev | File : line | What | Why it is wrong | Required fix |
|---|---|---|---|---|---|
| **ISS-C3-01** | **Medium** | `README.md:66-68` | "An **open-tier** account (phone-only, before the government-ID check) keeps **only** the phone hash and the party link — none of the other five fields exist until that check runs." | The clause after the dash is **true** and is exactly the distinction I asked for. The word **"only"** is not. `FR-133` (Doc 02 §4.47, Must, Rafael Duarte) requires every v1 enrolment phone number to be screened by **(a)** a phone-intelligence API for VoIP/virtual-number detection, **(b)** velocity checks "per IP, **device fingerprint**, and network segment within configurable windows", and **(c)** device anti-fraud signals — and states plainly that "**Flag events are restricted-class data (NFR-027)** and MUST NOT be exposed on any public record". Velocity windows and flag events are retained state about a phone-only participant. So the paragraph whose entire job is to enumerate what v1 keeps now tells an open-tier reader that essentially nothing but a phone hash is kept — an **under-statement of retention**, which is the same direction of error as an overstated guarantee and is caught by the same directive. **This is a regression introduced by the ISS-C2-02 fix, not a missed one** — cycle 2's text made no exclusive claim. It is also the same class as cycle-1 **ISS-06**, which I graded Medium: an exhaustive-sounding enumeration that is not exhaustive. | **Cheapest honest fix — delete one word:** "…keeps **the phone hash and the party link** — none of the other five fields exist until that check runs." The sentence is then true and still draws the distinction. **Better, if a sentence is affordable:** add "…plus any spam-screening flag events the `FR-133` layer records about the enrolment attempt — restricted-class, never published (Doc 02 §4.47)." |

---

## 6. FR-131 clause (e) — re-applied at v2.17.1, including the tightened safe-harbour

**No violation in any of the four files.** Clause (e) changed under me this session, so I re-ran
the test rather than carrying cycle 2's verdict:

- The safe-harbour now requires that qualifying copy "**makes no contrary claim elsewhere in the
  same string**". `README:73-76` — the `parties.joinPrivate`-pattern paragraph — states our own
  records can read the account↔party link, states what is not published, names the difference,
  and makes **no** contrary claim anywhere in the passage. It satisfies the tightened form.
- The new precedence rule ("where the safe-harbour and the reader test disagree, **the reader test
  governs**") changes nothing here: on a grade-8 reading, no sentence in these files suggests a
  participation act is unknowable to Trumocracy.
- The `/verify` paragraphs quote enrolment copy and **question** it; they assert nothing, and
  enrolment is expressly outside clause (e) in any case.
- ISS-C3-01 is **not** a clause (e) violation — it concerns enrolment-tier retention, not a
  participation act. It fails the approver's directive, not this clause.

---

## 7. Per-file ruling

- **`README.md` — FAIL.** One Medium, one word. Everything else in it is now verified true.
- **`SECURITY.md` — PASS.** Zero issues at any severity. All six of its issues across three
  cycles are closed and independently re-derived.
- **`CONTRIBUTING.md` — PASS.** Zero issues at any severity. Every id, path, number, hook claim
  and scope statement in it is verified true.
- **`CODE_OF_CONDUCT.md` — PASS.** Zero issues. Covenant 2.1 intact, attribution present, no
  email, no personal names, and the enforcement channel now honestly described.

---

## 8. Routing

1. **technical-writer — cycle 4, one edit:** ISS-C3-01, `README.md:66-68`. Delete "only", or add
   the `FR-133` clause. Nothing else in any of the four files requires a change. On that edit the
   set passes.
2. **product-owner (me), via the PM — unchanged and unblocking:** widen Doc 02 §13 (j) to reach
   the `/verify` strings (or mint a sibling item), and rule the `/verify` copy. The public files
   now describe this gap accurately, so it constrains nothing here.
3. **maintainer — unchanged:** confirm GitHub private vulnerability reporting is enabled before
   publication (it is now cited in two files).
4. **engineer, opportunistic:** `packages/contracts/test/deployment-safety.test.mjs:2` docblock
   still reads "UT-0600..UT-0610" while the file defines through `UT-0612`.

**I edited none of the four files.** Scored and listed only.
