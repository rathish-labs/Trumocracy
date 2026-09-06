# Session memory — product-owner — 2026-09-06T10:00

**Role:** product-owner (Priya Raghunathan, Doc 02 owner; FR-131 requirement owner: Nadia Hassan) ·
**Phase:** Define (honesty ruling routed in from Coding & UT) · **Product:** Trumocracy ·
**Trigger:** Doc 06 v2.5.1 §7 item 26 + `artifacts/engineer-2026-09-05T1700.md` (open item routed to
product-owner) after the FR-131 sweep at commit 0a5c542 · **Approver:** Rathish, 2026-09-06 —
confirmation sought, not yet given.

**Two pieces of work this session:** (1) the endorsement-copy ruling (the task), and (2) two
`document-review` cycles run as a **neutral reviewer** on architect-owned Docs 03 and 04, demanded by
the SubagentStop review-loop hook (see §"Review-loop work" below).

## What this session did

Ruled one question the engineer correctly declined to decide: is **"anonymous endorsement"** a
legitimate v1 property, or another overclaim of the class corrected once already for party
membership (`joinPrivate`, UT-0869)?

**Ruling: B — overclaim; the copy MUST change.** Recorded in
`artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md`, in the house format of
`DECISIONS-2026-08-26-PARTY-CREATION-RULINGS.md`, and presented for approver confirmation.

**No product code was changed** (engineer-owned) and **no `docs/` file was written** — the Doc 02
amendment is drafted as an anchored FIND/REPLACE spec for the applier.

## The ruling and its rationale

The two strings (`en.ts` `home.steps[1].body` "…with your name kept private"; `ar.ts` mirror
"بقاء اسمك سريًا") are an overclaim on **two independent grounds**, and the endorsement case is
**worse** than the membership case it is modelled on:

1. **Operator ground (the `joinPrivate` class).** In Definition-A the operator DB links the account
   to the endorsement — **necessarily**, because FR-014 (at most one endorsement per person per
   petition; §16.3 v1 row: "DB-enforced") and FR-015 (withdraw *your own* endorsement) cannot be
   satisfied in v1 without that link. A Grade-8 reader takes "kept private" to mean *Trumocracy
   cannot connect me to this*. False, for exactly the reason FR-131(b) states for membership.
2. **Publication ground (unique to endorsement, and decisive).** `joinPrivate`'s surviving claim
   ("your membership is not made public") is **true** — Doc 02 data classification: "Membership
   records | Aggregate public, individual never disclosed". Backing has **no such surviving claim**:
   **Doc 14 §2.2 (Approved)** says backing "will be a **public act**, on purpose … closer to signing
   a public petition in the street than to casting a secret ballot", that "the act itself will be on
   the public record", that a fully private way to back "is **not switched on in this version**",
   and "**only back a petition if you are comfortable being seen to support it**"; **§2.6** repeats
   "Backing a petition is **public by design**"; **§0.1** warns about "being known as a supporter".
   The landing page told a citizen the **opposite of the approved User Guide**, on the one fact that
   determines whether someone in a hostile jurisdiction is safe — and the landing page is what they
   read first.

Corroborating: **`private_endorsement` is a Phase-4 flag, `prod: false`** (`packages/protocol/src/flags.js`
52-58; Doc 12 line 251; wired at `apps/web/src/config/flags.tsx:92`) — the copy sells the property a
flag would turn on. And §16.5 already CONFIRMS the governing posture (Rathish, 2026-08-23): FR-082
Definition-B-only, "a Supporter's party membership IS knowable by the operator", v1 accepted as a
**disclosed non-anonymous product**. The actor-table "Endorser … Anonymous" row and the
"Endorsement records | unlinkable individually" data-classification row are **v2 target properties**
phased by §16.3 — a v1 string may not quote them as shipped.

**Why FR-131's literal scope was not a defence:** the engineer's narrow reading ("v1 voting
behaviour") was correct and routing rather than rewriting was correct. The scope limit is an artefact
of FR-131 having been drafted as a ballot-screen notice — not a judgement that endorsement claims may
be loose. Reading the ban as permission yields the absurd result that the product must be scrupulous
at the ballot and free to mislead on the landing page.

## Decisions made

1. **Ruling B** on the two endorsement strings; exact replacement copy specified (en normative; ar as
   engineer draft, native-speaker review owed). Four facts are the normative floor: backing is public
   on purpose · the name is not shown · our own records can link it · nobody approves a party, the
   count does.
2. **Second finding, same page, same class:** `home.promises[0]` — en "**We never learn which party
   you support**" / ar "لا نعرف أبدًا أي حزب تدعم" — is **flatly false** under FR-131(b) and Doc 14
   §0.1. The 2026-09-05 sweep missed it **because it contains none of the four banned words**, which
   is itself the argument for the Doc 02 amendment. Replacement specified ("We never publish which
   party you **belong to**…"). Recommended for confirmation with the ruling.
3. **Third finding, carried not swept:** the FR-082 "Supporters are anonymous" strings
   (`packages/sdk/src/proposals.js:233` user-facing message; `ProposalsAndDebate.tsx:18` comment) are
   reached by the new clause (e); replacement specified. `packages/protocol/src/proposals.js` ~23/~67
   are requirement-describing comments — a "(Definition-B; §16.3 DEFERRED-v2)" marker is a SHOULD, not
   a MUST. `packages/sdk/src/ballot.js` and the `private_endorsement` flag description **stand** (they
   describe v2/Phase-4 behaviour explicitly). Approver may confirm or sever this finding.
4. **Doc 02 DOES change — amend FR-131 rather than mint a new FR.** New **clause (e)**: the duty is
   about **claims**, not a word list, covering vote / endorse-back / join-belong / support, **in every
   language**, with the test being what an ordinary Grade-8 reader would take the claim to mean; plus
   the closing sentence widened from "v1 voting behaviour" to "or any other v1 participation act",
   with a carve-out preserving clause (a)'s mandated negated forms (FR-131(a) banner and UT-0887
   unaffected). Superseded wording quoted verbatim per annotate-don't-delete. **v2.16.3 → v2.17.0,
   Status In Review** — it re-enters the document-review loop; I do not fast-track my own amendment.
   Amending beat minting FR-133 because: no new ID, no new open RTM Must row, and the engineer, sre
   (REL-LIM-18), Doc 09 and Doc 14 all already cite FR-131 as *the* honesty rule — one address for the
   class is worth more than section-title tidiness.
5. **Clause (e) scoped to participation acts only** — enrolment/verification claims are expressly
   outside it and become §13 tracked routing **(j)**, un-ruled.
6. **No new `US-####`.** The fix lands under **US-0134** (FR-131 · DES-098), matching the UT-0869
   precedent for a copy correction under an existing Must. **No feature flag** — correcting a false
   statement is not a feature.
7. **Regression guard requested, ID not minted** (engineer owns `UT-####`): UT-0869 pattern, en source
   + rendered page + Arabic mirror. A **plain** substring ban on the four words is safe here, unlike
   the FR-131(a) banner, because no mandated negated form applies to landing copy.

## Review-loop work (second half of the session)

The SubagentStop hook blocked on two documents with **no review report for their current version**.
Both are **architect-owned** (Ravi Deshmukh), so the product-owner is a **valid neutral reviewer**
under the detector≠author rule. I ran the `document-review` skill in **technical** mode on both,
scored and listed issues only, and **edited neither document**.

| Document | Version | Cycle | Score | C/H/M/L | Verdict |
|---|---|---|---|---|---|
| `03-architecture-design-sdd.md` | 2.12.0 | 1 of 5 | **97%** | 0/0/**1**/0 | **FAIL** |
| `04-test-strategy-master-plan.md` | 1.3.0 | 1 of 5 | **96%** | 0/0/**1**/1 | **FAIL** |

Both are high-quality FR-131 cascades — every other claim each version makes was verified at its
location, including against built code — but each carries **one Medium**, and a Medium is an
automatic FAIL regardless of score. **I did not soften either finding to clear the hook.**

- **Doc 03 ISS-01 (Medium)** — v2.12.0 mints a new normative rule at §10.13.6 ("this ban reaches
  voting-adjacent **status** copy, not only notice text"), applies it to the `ver` title via the new
  clause 9, and records **no disposition for the `anon` state**, whose Title is the banned word
  "**Anonymous**" and whose Subtitle is "**Nothing you do here is linked to you**" (§10.12.3 line
  1666). The `ver` row is now annotated in both cells; the `anon` row is bare. DES-094's `Satisfies`
  column names FR-131, and clause 8 (line 1720) concedes in the document's own words that open-tier
  actions **are** associated with the account in the platform DB. The failure mode is already
  realised: `packages/ui/src/PrivacyStatus.tsx` 246–253 hardcodes both `anon` strings with no backing
  test — exactly what the document's own note says a bare cell produces. Fix: **record the
  disposition** (in scope → annotate + fail-honest clause; or out of scope → say so and point at
  clause 8). Not necessarily a copy change.
- **Doc 04 ISS-11 (Medium)** — §0.5 **S4** (line 314) requires testing the DES-098 notice for "the
  required clauses **(a)–(e)**". **FR-131 has (a)–(d)** (verified at Doc 02 line 1131). Doc 09 line
  163 and Doc 14 line 49 both cite the range correctly; likely origin is ADR-025, which does have
  (a)–(e). Aggravated by v1.3.0's Status block asserting "§0.5 S4/S5 needed no change — already
  stated correctly there". **ISS-12 (Low)** — S4 lists five banned words (adds *secret*) where
  FR-131 bans four and A-02.6 correctly says "the four banned words"; harmless superset, but stated
  as if it were the requirement.
- **Conflict disclosed at the head of both reports:** I authored the pending FR-131 clause (e)
  amendment in this same session. **Neither Medium depends on it.** Doc 04's stands against the
  currently-Approved v2.16.3 *and* would survive v2.17.0 (clause (e) is a product-wide copy duty, not
  a clause of the DES-098 notice, so "(a)–(d)" is right either way). Doc 03's stands on that
  document's own internal consistency. If the PM judges the conflict material, another neutral role
  (engineer/tester/sre) should re-run both cycles — the findings are located to the line.

**Consequence for the hook:** both verdicts are FAIL, so the review-loop hook stays blocked until the
architect reworks (Doc 04 → v1.3.1; Doc 03 → v2.12.1 or v2.13.0) and those versions are re-reviewed
to PASS. That is the loop working as designed. **Fabricating a PASS to clear a hook would be the one
unrecoverable error available here, and was not done.**

## Artifacts written

- `artifacts/status/DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` — the decision record.
- `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md` — anchored FIND/REPLACE spec,
  4 ops on `docs/02-requirements-srs.md` (header version/status · change history · the FR-131 row ·
  §13 block (j)). OP 3 is a single ~4,000-character line: the spec instructs the applier to **STOP
  and report** rather than fuzzy-match if any FIND misses.
- `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md` — FAIL 97%, 0C/0H/1M/0L.
- `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md` — FAIL 96%, 0C/0H/1M/1L.
- This note.

## Open items — routed

- **engineer** (R-1..R-4): apply §4 endorsement copy (en + ar, one commit — a fix that leaves one
  locale lying does not close the defect); apply §5.1/§5.2 `promises[0]`; add the §5.4 guard and close
  Doc 06 §7 item 26's "left in place" entries; §5.3 FR-082 strings **if the approver confirms**.
- **applier** (R-5): apply the anchored spec → Doc 02 v2.17.0, In Review.
- **architect (Ravi Deshmukh)** — **NEW, from the review loop:** rework Doc 04 v1.3.0 → v1.3.1
  (ISS-11 Medium + ISS-12 Low) and Doc 03 v2.12.0 → v2.12.1/v2.13.0 (ISS-01 Medium); both re-enter as
  cycle 2. Nothing else in either version needs rework.
- **project-manager** (R-6, + review loop): assign a **neutral** reviewer for Doc 02 v2.17.0
  (business mode); shepherd the Doc 03/Doc 04 cycle-2 re-reviews; decide whether the disclosed
  reviewer conflict warrants re-running cycle 1 with a different neutral role.
- **technical-writer** (R-7, R-8): the two new Arabic strings join ARABIC-I18N / §13 deferral (b);
  Doc 14 §2.2/§2.6 need **no** change (the guide was right, the landing page was wrong) — consider a
  landing → §2.2 "learn more" link.
- **product-owner (me)** (R-9): rule §13 (j), the enrolment-copy question — `home.steps[0].body`
  against H-17 (the vendor **does** see the document; FR-132 §(e) is contractual, not technical) and
  `home.promises[3]` (needs sre confirmation against a deployed build). Deliberately **not** ruled on
  this session's evidence.
- **Unchanged and still open:** US-0134's DES-098 acknowledge-to-proceed control; §13 (h) and (i)
  product-owner clarifications; ISS-01/ISS-02/ISS-03 Lows carried from Doc 02 v2.16.3.

## What this ruling does NOT decide

FR-015/FR-017 stand unamended (they govern **disclosure**, not self-description). Endorsement stays
public by design; `private_endorsement` stays Phase 4. No gate is reopened — v2.17.0 re-enters the
**review loop**, which is a quality loop, not a gate. No product code changed. If the approver rules
**A** instead, Doc 14 §2.2/§2.6 must change to match, because the two surfaces cannot both be right —
stated so it is not discovered later.

## IDs touched

**Ruled/amended:** FR-131 (clause (e) added; closing sentence widened) · Doc 02 v2.16.3 → **v2.17.0**
(In Review) · Doc 02 §13 tracked routing **(j)** (new).
**Reviewed (neutral reviewer, no edits):** Doc 03 **v2.12.0** (ISS-01 Medium) · Doc 04 **v1.3.0**
(ISS-11 Medium, ISS-12 Low) · DES-094 clauses 7/8/9 · DES-096 · DES-098 · Q17 · OPEN-01 · A-02.6 ·
S4/S5 · UT-0759 · UT-0887 · UT-0888.
**Cited as evidence, unamended:** BR-005 · BR-009 · BR-011 · BR-017 · FR-003 · FR-014 · FR-015 ·
FR-016 · FR-017 · FR-020 · FR-082 · FR-083..FR-086 · FR-123 · FR-130 · FR-132 · NFR-001 · NFR-002 ·
NFR-003 · NFR-023 · NFR-024 · CON-015 · ADR-024 · ADR-025 · DES-095 · DES-100 · US-0134 · UT-0869 ·
UT-0870 · REL-LIM-18 · T-01 · T-03 · H-15..H-19 · §16.3 / §16.4 / §16.5.
**Doc references:** Doc 06 v2.5.1 §7 item 26 · Doc 09 v1.3.0 · Doc 12 §flag ledger · Doc 14 §0.1,
§2.2, §2.6.
**Flags:** `private_endorsement` (Phase 4, prod off) · `maci_voting` (off).
**No ID was reused or renumbered. No `UT-####`, `TC-####`, `DES-###` or `US-####` was minted by this
session.**

_Note: this note is pre-registered in `artifacts/memory-index.json` by the project-manager; this
session did not open or write that file._
