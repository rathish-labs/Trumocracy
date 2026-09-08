# product-owner session note — 2026-09-06T22:00 — public root-files review, cycle 3

```
Role:      product-owner (Priya Raghunathan) — acting ONLY as the PM-assigned neutral reviewer
Task:      Cycle-3 review of README.md, CONTRIBUTING.md, SECURITY.md (+ CODE_OF_CONDUCT.md,
           changed this cycle by the writer under a coordinator "close if cheap" authorisation).
Rework:    artifacts/technical-writer-2026-09-06T2130-public-files-cycle3.md
History:   cycle 1 FAIL 81% (0C/4H/7M/9L) → cycle 2 FAIL 93% (0/0/1/5) → cycle 3 FAIL 95% (0/0/1/0)
Report:    artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06-cycle3.md
           — NOT in artifacts/reviews/, no hook field names, cannot enter any cycle counter.
Verdict:   FAIL — 95% (94.7 weighted); Critical 0 · High 0 · Medium 1 · Low 0
Status:    Complete. Cycle 4 is a one-word edit in one file. Three of four files now PASS clean.
```

## What I did

Read the writer's cycle-3 note, then re-read every changed passage in all four files and verified
each closure against source. Also re-read **FR-131 clause (e) at v2.17.1 in full** — it changed
under me mid-session — and re-ran the clause (e) test rather than carrying cycle 2's verdict.
Checked this cycle at source: Doc 02 §13 (j) scope; Doc 02 §4.46 `FR-132`(a)/(b)/(c); **Doc 02
§4.47 `FR-133`** (new this cycle — the spam-screening layer and its restricted-class flag events);
Doc 06 §7 items 21/22/26; `app/proposals/page.tsx:48-53`; `ProposalsAndDebate.tsx:489`;
`en.ts:72-97`; Covenant 2.1 Enforcement text.

Scored, listed, routed. **Edited none of the four files.** Wrote nothing under
`artifacts/reviews/`, and self-appointed for nothing.

## Decisions made (as reviewer)

1. **All six cycle-2 items CLOSED**, each verified: ISS-C2-01(a) (three sites), C2-02, C2-03,
   C2-04, C2-05, and ISS-20 (CoC, which the writer closed this cycle — no email added, Covenant
   text intact).
2. **PM ruling honoured on ISS-C2-01.** I judged the qualified wording on its truth alone and did
   not reopen Doc 02. The wording is true — and I found **independent corroboration**: FR-131
   clause (e) at v2.17.1 now itself says the §13 (j) open question concerns "the enrolment
   **landing** copy". Requirement and public files now agree on scope.
3. **The score bar is met for the first time (95%, 94.7 weighted)** — and the set still FAILS,
   on one Medium. I recorded that distinction explicitly rather than letting a good score imply a
   pass.
4. **New Medium, ISS-C3-01 — a regression from a fix I asked for.** My ISS-C2-02 asked for the
   counting-verified / open-tier distinction. The new sentence adds "**only**": an open-tier
   account "keeps only the phone hash and the party link". `FR-133` mandates VoIP screening,
   velocity checks by IP and **device fingerprint**, and device anti-fraud signals, and states
   that "flag events are restricted-class data (NFR-027)". So retained state exists for a
   phone-only user that the sentence excludes.
5. **I applied the honesty directive in both directions.** "Nothing public may claim a guarantee
   v1 doesn't deliver" also forbids **under-stating retention**: telling a citizen we keep less
   than we do is the same failure wearing the opposite mask. This is the same class as cycle-1
   ISS-06, which I graded Medium; grading it lower now — because it is small, late, and traceable
   to my own instruction — would be a moving standard applied to the one paragraph a cautious
   reader relies on.
6. **Not a clause (e) violation**, and I said so: ISS-C3-01 concerns enrolment-tier retention, not
   a participation act. It fails the approver's directive, not FR-131 clause (e).
7. **Re-ran clause (e) against its tightened v2.17.1 form** (safe-harbour now requires "no
   contrary claim elsewhere in the same string"; the reader test governs on conflict).
   `README:73-76` satisfies the tightened form. No violation anywhere in the four files.

## Open items

- **technical-writer (cycle 4):** ISS-C3-01, `README.md:66-68` — delete "only", or add the
  `FR-133` clause. Exact wording supplied in the report §5. **Nothing else in any of the four
  files requires a change**; on that edit the set passes.
- **product-owner (me), via PM — unchanged, and now unblocking:** widen Doc 02 §13 (j) to reach
  the `/verify` strings (or mint a sibling tracked-routing item), and rule the `/verify` copy.
  The public files now describe the gap accurately, so nothing waits on it.
- **maintainer:** confirm GitHub private vulnerability reporting is enabled before publication —
  it is now cited in two files (SECURITY and CODE_OF_CONDUCT).
- **engineer, opportunistic:** `packages/contracts/test/deployment-safety.test.mjs:2` docblock
  reads "UT-0600..UT-0610"; the file defines through `UT-0612`. README and Doc 09 are correct.

## SubagentStop block at exit — recorded, NOT acted on (AL-CANDIDATE-3 discipline)

Third block of this session, on a set that has refreshed again. No `artifacts/reviews/` report
authored, no self-appointment. **This is the first block in which I own nothing on the list, and
in which every listed document is technical mode** — I am the business-mode reviewer assigned to
the public files. Supersedes the block snapshots in the 18:00 and 20:00 notes:

| Blocked | State now | Change since 20:00 | Owning role (reworks) | Assigned neutral reviewer | Action |
|---|---|---|---|---|---|
| `01-press-release-prfaq.md` | **no longer listed** | was v2.2.0, FAIL 96% 0C/0H/1M | — | — | Cleared while I was reviewing; a passing report now exists for its current version. **My owner-side rework of Doc 01 is therefore no longer owed** unless the PM says otherwise. |
| `04-test-strategy-master-plan.md` v1.5.0 | report exists — **FAIL 92% · 0C/0H/1M** | unchanged since 20:00 | architect (Ravi Deshmukh) | reviewer-qa, **technical** (recorded pre-dispatch) | Architect reworks → v1.5.1 → reviewer-qa cycle 2. **Not mine, and not my mode.** |
| `06-coding-and-ut.md` v2.7.0 | **no report** | unchanged since 20:00 | engineer (Samuel Oyelaran) | tester, **technical** (recorded pre-dispatch) | PM dispatches the tester. Not mine. |
| `07-test-cases-suites.md` **v2.7.0** | **no report** | **new** — was Approved at v2.6.0; the tester has since shipped v2.7.0 | tester (Ji-woo Park) | reviewer-qa, **technical** (recorded pre-dispatch) | PM dispatches reviewer-qa. Not mine. |
| `08-traceability-matrix.md` **v2.10.0** | **no report** | **new** — was Approved at v2.9.0; the FR-131 chain re-cut has landed | tester (Ji-woo Park) | reviewer-qa, **technical** — RACI **A** for "RTM complete (zero gaps)" | PM dispatches reviewer-qa. Not mine. |

**Note for the PM on Doc 08 v2.10.0.** My SECURITY.md review passed the public "16 of 138 Must
rows complete, 122 open" figure against Doc 08 **v2.9.0 (Approved)**, and SECURITY is worded "as
of the traceability matrix's current **approved** version", which was correct when written and
remains correct while v2.10.0 is In Review. **If v2.10.0 moves that figure when it passes, the
public SECURITY.md sentence needs re-checking** — it is a published number. Flagging it now so it
is not discovered after the repository goes public. That is a routing note, not a review finding,
and not a reason to hold the public files.

I wrote no passing report for any of the five to clear my own exit, in this session or the two
before it. Detector ≠ decider, and reviewer ≠ owner, both hold even when the block is what stands
between me and stopping.

## IDs / documents touched or cited

Cited, none amended: `FR-131` clause (a)–(e) at **v2.17.1**, `FR-132`(a)/(b)/(c)/(d), **`FR-133`**,
`NFR-027`, `NFR-023`, `DES-097`, `DES-098`, `DES-100`, `CON-015`, `REL-LIM-02`/`-12`, `UT-0887`,
`UT-0869`, `UT-0759`, `UT-0888`, `UT-0889`, `UT-0600`–`UT-0612`, `H-02` (Doc 02 §16.4),
`H-16`/`H-17`/`H-18`, `SCR-13`/`SCR-14`, `ADR-025`, Doc 02 §4.45/§4.46/§4.47/§13 (j)/§16.4,
Doc 03 §10.13.5/§10.13.9, Doc 06 §7 items 21/22/26, Doc 08 header (v2.9.0 Approved; v2.10.0 In
Review), Contributor Covenant v2.1 Enforcement.

**No BR/FR/NFR/EP/FE/US minted, amended, retired or renumbered in this session.**
