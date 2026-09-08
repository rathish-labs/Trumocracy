# Session note — product-owner (Priya Raghunathan) — 2026-09-06T19:00

```
Role:          product-owner (owning role for Doc 01 and Doc 02)
Session:       (1) Doc 01 v2.1.0 → v2.2.0 — review-loop rework, cycle 2 of 5
               (2) Doc 02 v2.17.0 → v2.17.1 — review-loop rework, cycle 2 of 5
                   (picked up at 20:30 when the stop-hook surfaced the FAIL; see §B)
Deliverables:  artifacts/product-owner-2026-09-06T1900-doc01-cycle2-spec.md   (12 anchored OPs)
               artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md    (12 anchored OPs)
Wrote:         those two specs + this note. NOTHING else. Neither document is edited by me
               (Write, not Edit); the project-manager applies both specs mechanically.
Index:         this note's path is the one pre-registered by the PM. The Doc 02 spec is recorded
               HERE rather than in a second note file, because I must not open
               artifacts/memory-index.json and an unregistered note would break index hygiene.
               **PM: please register the Doc 02 spec path.**
```

---

# A. Doc 01 v2.1.0 → v2.2.0

```
Against:       artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md
               (business, cycle 1 — FAIL 87%, 1 Critical / 2 High / 3 Medium / 0 Low;
               reviewer: technical-writer, neutral, PM-assigned)
```

## The finding, and what I got wrong

Cycle 1 confirmed §0 and the six v2.1.0 markers as accurate and well-sourced, and failed the
version on one class: **unmarked present-tense "anonymous / no link to identity" claims about v1
participation acts still standing elsewhere in §D and §E** — the exact class `FR-131` clause (e)
exists to prohibit.

My v2.1.0 marker judgement was right about *which* claims are dangerous and wrong about *where
they live*. I reasoned by section ("§D is commitments and trade-offs"; "§E2 is stakeholder
material"; the tier detail is in the §E1 privacy answer, which I marked) instead of scanning
sentence by sentence for the claim itself. The Critical (`ISS-01`) is the clearest case: the tier
summary I had treated as covered by the marked privacy answer is **restated in full in the first
customer FAQ answer**, three entries earlier, where a reader meets it first. Section-level
reasoning cannot find that; only a sentence-level sweep can. The remedy in this version is a
sentence-level sweep of §D and all of §E, and the three passages it found beyond the reviewer's
six confirm the point.

## What v2.2.0 does — 12 OPs

| OP | Target | Fixes |
|---|---|---|
| 1 | header `Status:` field, rewritten for cycle 2 | `ISS-06` (marker count) + the cycle-2 record |
| 2 | change log | v2.2.0 entry above the surviving v2.1.0 / v2.0.0 / v1.0.0 entries |
| 3 | §D final bullet | `ISS-04` |
| 4 | §E1 "Who is this for?" | `ISS-01` (Critical) + the `H-15` personhood caveat |
| 5 | §E1 "Do I need to understand crypto?" | `ISS-05` site 1 |
| 6 | §E2 "top 3 risks and mitigations" | sweep |
| 7 | §E2 "legal, privacy, security and compliance" | sweep — `(v1 accuracy note)` |
| 8 | §E3 "Why no analytics" | `ISS-02` (High) |
| 9 | §E3 "right to be forgotten" | `ISS-03` (High) |
| 10 | §E3 "extremists" | sweep |
| 11 | §E3 "billionaire" | sweep |
| 12 | §E3 "What if someone loses their phone?" | `ISS-05` site 2 |

## Passages marked (the complete list after v2.2.0)

**Body total: 15 `(v2 target — see §0.)` markers + 1 `(v1 accuracy note — see §0.)`.**

Carried from v2.1.0 (6, unchanged): §A tenet 2 · §A tenet 4 · head of §B · §E1 "How is my data
used and kept private?" · §E1 "Can someone force me to vote a certain way?" · §E3 "What happens if
a government orders you to hand over the member list?"

Added at v2.2.0 (9 markers + 1 note):

| # | Passage | Claim marked | Grounded in |
|---|---|---|---|
| 1 | §D final bullet | "unconditional anonymity for Supporters" | `H-02`, `FR-082`/`FR-086` DEFERRED-v2 |
| 2 | §E1 "Who is this for?" | "a **Supporter** by default — anonymous" **and** "a real, **unique** person" | `H-01`, `H-02`, `H-15`, `FR-132` §(d) |
| 3 | §E1 "Do I need to understand crypto?" | recovery helpers "cannot see how you voted" | `FR-059` PARTIAL, `H-10` |
| 4 | §E2 "top 3 risks" | `RISK-02` receipt-freeness + invisible override; `RISK-06` anonymity-set floor; `RISK-01` plural attestors | `H-03`, `H-06`, `FR-129`/`OI-20`, §16.5 T-08, Doc 09 §0 |
| 5 | §E2 "legal, privacy, security" *(v1 accuracy note)* | "data protection is handled by *not holding the data*" | `H-16`, `H-18`, `FR-003` PARTIAL, `CON-015` |
| 6 | §E3 "Why no analytics" | "Supporters are anonymous by unconditional guarantee" | `H-02`, `FR-082` |
| 7 | §E3 "right to be forgotten" | "no link between your identity and any action" — v1 reality stated alongside | `H-01`, `H-02`, `FR-082`/`FR-086`, `NFR-015` |
| 8 | §E3 "extremists" | "cannot keep a membership list" | `H-02` |
| 9 | §E3 "billionaire" | "because the vote is receipt-free … no way for the payer to check" | `H-03`, `FR-131`(a) |
| 10 | §E3 "loses their phone" | "never reveals your past votes … to whoever helped you recover" | `FR-059` PARTIAL, `H-10` |

Three of these (4, 8, 9) and the note (5) are **beyond the review report** — found by the sweep the
coordinator asked for. Every marker preserves what *is* true in v1 in an explicit closing sentence,
so qualifying a claim never reads as retracting a commitment that still holds (no behavioural
tracking; no purchasable membership; no seed phrase; days-not-minutes recovery; the governance
rules in the extremists answer).

## Resolutions I made as the decider

- **`ISS-05` (recovery helpers) — grounded, not deleted.** The reviewer offered "ground it or
  soften/delete". It **is** grounded: `FR-059` is classed PARTIAL and Doc 02 §16.4 `H-10` states
  the v1 position exactly ("the recovery event is associated with the account in the DB and can be
  correlated with membership"). So it is a real v2 property, marked as such at both sites, with the
  v1 truth stated: in v1 it is a policy and access control, not something the design makes
  impossible. Deleting it would have removed a genuine v2 commitment to fix a labelling problem.
- **A second annotation label.** The §E2 data-protection claim is *partly* true in v1, so calling
  it a "v2 target" would itself be inaccurate. It gets `(v1 accuracy note — see §0.)`. The header
  states both counts separately so `ISS-06` cannot recur through my own doing.
- **`ISS-06` fixed by replacement, not by patching "four" → "six".** The whole `Status:` field is
  rewritten for cycle 2 anyway; the new field states the v2.1.0 count (six), the v2.2.0 count
  (nine), the total (fifteen) and the one accuracy note, and scopes all of them to **the body
  (§A–§F)** — because the same phrase necessarily appears in the header prose and change-log, and
  a bare grep count would disagree with an unscoped claim.
- **The `H-15` personhood caveat added inside `ISS-01`'s fix.** §E1's opening phrase is "a real,
  **unique** person". `FR-132` §(d) and §16.4 `H-15` require the improved-but-not-closed
  personhood status to be stated "in the UI **and all product materials**" — this PR-FAQ is a
  product material, so that obligation lands here. This is an enrolment-class claim (outside clause
  (e)) that carries its own explicit stating duty; I did not leave it to the ENROL-COPY item.

## Deliberately left (considered, not missed)

1. **§A tenets 1 and 8, and §E3 "Why blockchain at all?"** — the *integrity / no-gatekeeper* class,
   not the anonymity class: in v1 the operator's database is the source of truth for tallies and
   tamper-evidence replaces tamper-prevention (Doc 02 §16.5, Charter Rule 3 / T-05, v2-only). §0's
   override clause covers it, and §E3's "You say 'no gatekeepers' — but you write the code" answer
   already concedes the tension in its first line ("Today, partly yes"). Marking this class means
   re-litigating three tenets and would widen a rework aimed at one defect class. **Recommend it be
   ruled on explicitly** — by the reviewer at cycle 2 or by the approver — rather than settled by
   me in a rework: it is a scope decision, not a defect fix.
2. **§C metric table** — every row is baseline / target / guardrail by construction, and Doc 02
   §16.5 already records that in v1 the "zero deanonymisation" kill criterion applies to
   platform-initiated exposure only. Unmarked, as at v2.1.0.
3. **§E2 "measurable success criterion"** — explicitly dated "by 2027-12-01"; a future target, not
   a present-tense capability claim.
4. **§F appendix** — "no legal prohibition on anonymous political association" is a
   pilot-jurisdiction *selection criterion*, not a claim about what the product does.
5. **Remaining enrolment-storage claims beyond `H-15`** (`H-16`–`H-18`) — pointed at, not
   individually marked: §E1's privacy answer already carries that pointer from v2.1.0 and §E2 now
   carries the accuracy note. The full public-surface enrolment pass remains open item
   **`ENROL-COPY (j)`** in Doc 02 §13; it is not closed by this version.

---

# B. Doc 02 v2.17.0 → v2.17.1 (picked up at 20:30)

```
Against:       artifacts/reviews/02-requirements-srs-v2.17.0-business-cycle1.md
               (business, cycle 1 — FAIL 86%, 0 Critical / 0 High / 3 Medium / 7 Low;
               reviewer: reviewer-qa (Rafael Duarte), neutral, PM-assigned)
Spec:          artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md  (12 anchored OPs)
Bump:          PATCH (2.17.1) — the reviewer's own routing; no normative meaning changes.
```

**Why I did this unprompted.** The stop-hook surfaced Doc 02 v2.17.0 as FAILED. That is not a
review I may write — I own the document and authored the amendment — but the **rework** is
unambiguously mine as the owning role, and no other role can do it. This is the opposite of the
AL-CANDIDATE-3 failure mode: the loop's rule is that a FAIL routes to the owning role, and it did.

**The finding.** The reviewer verified every factual claim in the v2.17.0 delta against primary
sources and could not falsify any of it; application quality was clean (four verbatim hunks, no
residue, no ID churn). What failed was the **cascade inside Doc 02** — v2.17.0 changed FR-131's
scope and stopped at the requirement row. Three Mediums, each with in-document precedent at the
same severity: no §8 Gherkin for clause (e) (`ISS-01`; the identical gap for clause (d) was a
Medium at v2.13.0), §4.45's heading and rationale still ballot-scoped (`ISS-02`; the same failure
was a Medium at v2.14.1), and clause (e)'s operative prohibition malformed under RFC 2119
(`ISS-03`).

**`ISS-03` is the one worth naming.** I wrote "*no public-facing string … MUST assert…*". Negating
the **subject** of a MUST inverts it: read literally it says only that no material is *required* to
assert the claim — which obliges nothing. In an amendment whose entire rationale is that literal
readings of imprecise normative text let false claims ship, I shipped a literally-null prohibition.
Recast with a positive subject and `MUST NOT`. The duty was carried redundantly by two other
well-formed sentences, which is why nothing built from it is wrong — but that is luck, not drafting.

**What v2.17.1 does — 12 OPs.** All three Mediums fixed (OPs 3–7); the four Lows the reviewer
routed to "the next version that touches these sections" fixed because this version touches them
(`ISS-04` approver-confirmation staleness at five sites; `ISS-05` safe-harbour subordinated to the
reader test, which is now stated to govern; `ISS-06` "governed by" → "addressed by" with §13 (j)
named; `ISS-07` §12 session-scope entries for both v2.17.0 and v2.17.1; `ISS-08`/`ISS-10` the two
§16.3 rows; `ISS-09` the bare "§2.5" qualified to **Doc 06 §2.5**). `ISS-01`'s fix adds **two**
Gherkin scenarios, not one: Scenario 8 for the clause-(e) reader test, public-by-design rule and
safe-harbour, and Scenario 9 as the absence test — including the case that matters most, that a
claim containing **none** of the four banned words still fails if a grade-8 reader would take it to
mean the act is unknowable to Trumocracy. That is the criterion the tester had nothing to trace to.

**Carried, deliberately:** `ISS-11` (§4.6 FR-064 cross-reference), `ISS-12` (v2.16.0 changelog
echo), `ISS-13` (§13 (h) wording) — v2.17.1 touches none of those sites and the reviewer routed all
three to the next version that does. Disclosed in the new `Status:` block.

**Applier safety.** Four ops (5, 10, 11, 12) replace a single very long table row in full, because
a FIND must begin and end at line boundaries. Each op's commentary numbers the change points
(`C1`…`C6`) and the spec instructs the applier to **diff FIND against REPLACE and stop if any other
difference appears** — a mistyped FIND fails loudly, but an unintended deviation in REPLACE would
not.

---

## IDs touched (whole session)

- **Documents:** `docs/01-press-release-prfaq.md` v2.1.0 → **v2.2.0, In Review**;
  `docs/02-requirements-srs.md` v2.17.0 → **v2.17.1, In Review**. Both via spec only.
- **Doc 02 amended in place:** `FR-131` §4.45 (heading, rationale, clause (e) wording, Source
  annotation), §8 FR-131 Gherkin block (**Scenarios 8 and 9 added**), §12 (v2.17.0 + v2.17.1
  session scope), §13 tracked routing (j), §16.3 rows FR-131 and FR-132.
- **Cited, not modified:** `FR-131`(a)/(d)/(e), `FR-132`(d)/(e), `FR-082`, `FR-086`, `FR-059`,
  `FR-003`, `FR-014`, `FR-015`, `FR-129`, `NFR-015`, `NFR-023`, `CON-015`, `OI-20`, `UT-0869`,
  `UT-0870`, `UT-0887`, `DES-098`, `DES-063`, `ADR-024`, `ADR-025`; Doc 02 §16.4 `H-01`, `H-02`,
  `H-03`, `H-06`, `H-10`, `H-15`, `H-16`, `H-17`, `H-18`, §16.5 (T-05, T-08); Doc 06 §2.5;
  Doc 09 §0; Doc 14 §0.1/§2.2/§2.6.
- **Minted / removed / renumbered:** **nothing**, in either document. Doc 02's Must count stays
  114; Doc 01 keeps nine tenets and the same §C/§D/§E sets. Docs 05, 13 and all product code
  untouched.

## Open items

1. **Doc 01 v2.2.0 cycle-2 review** — technical-writer, business mode (loop position: cycle 2 of 5).
2. **Doc 02 v2.17.1 cycle-2 review** — reviewer-qa, business mode (loop position: cycle 2 of 5).
   I did **not** self-appoint to either and authored no review report (AL-CANDIDATE-3 discipline).
3. **Ruling wanted on the integrity / no-gatekeeper class** in Doc 01 (§A tenets 1 and 8, §E3
   "Why blockchain at all?") — so it is closed at cycle 2 or explicitly accepted, rather than
   surfacing as a cycle-3 finding.
4. **`ENROL-COPY (j)`** remains OPEN in Doc 02 §13 — unchanged by v2.17.1, which only qualifies its
   cross-reference. The two enrolment landing strings are still un-ruled; the sre is consulted on
   `home.promises[3]` before I rule.
5. **Clause (e) TC still owed** — the UT-0869-pattern guard on the landing copy is routed to the
   engineer; §8 Scenario 8 now gives the tester the acceptance criterion to cut it from.
6. **Docs 04 v1.5.0 and 06 v2.6.0** are blocking the hook with no report for their current version.
   Those are the architect's and engineer's documents and their reviewers are recorded in
   `REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` (reviewer-qa and tester respectively). **Not
   mine — routed to the PM.** I cannot clear the stop hook; two of its four items are other roles'.
7. **Gate 1 remains undecided.** Neither rework moves it; Doc 01's v2.0.0 approval record and the
   pending Gate-1 decision are carried forward verbatim.
