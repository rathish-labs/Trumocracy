# Session memory — architect — 2026-09-06T15:00 — Doc 03 + Doc 04 rework cycle 2

**Role:** architect (Ravi Deshmukh, Principal Architect) · **Phase:** Design (review-loop rework)
**Documents owned:** Doc 03 (SDD) v2.12.0 → **v2.13.0**; Doc 04 (Test Strategy) v1.3.0 → **v1.4.0**
**Deliverable:** `artifacts/architect-2026-09-06T1500-doc03-04-cycle2-spec.md` — an 18-operation
anchored FIND/REPLACE spec for the project-manager to transcribe. **I wrote nothing under `docs/`**
(no Edit tool; whole-file Write truncates these documents). I did not open
`artifacts/memory-index.json`. I did not touch Docs 07, 08 or 09.

---

## 1. What this session did

Cycle-1 reviews (reviewer-qa, Rafael Duarte, neutral, PM-assigned) FAILed both documents at 89%:

- **Doc 03 v2.12.0** — 0C / **1H** / **2M** / 2L — `artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md`
- **Doc 04 v1.3.0** — 0C / 0H / **2M** / 6L — `artifacts/reviews/04-test-strategy-master-plan-v1.3.0-technical-cycle1.md`

Both reports were read in full, including their "Verified NOT defects" sections, so cycle 2 does not
re-litigate settled ground. **The FR-131 title/notice copy work of v2.12.0/v1.3.0 is NOT re-opened**
— cycle 1 verified it byte for byte against the shipped constants and both reviews say so
explicitly. Every finding is elsewhere: three of the four Doc 03 findings are traceability or
scope-of-a-new-rule defects, and the Doc 04 Medium is an over-claim about a section.

Every cross-document fact I assert in the spec was read from source this session, not taken from
the review's summary: Doc 08's FR-131 row (line 825 — `EP-06 ▸ FE-058 ▸ US-0134`, sixteen TCs, OPEN
`G-PHASE3`, TC-3476/3481/3487 Blocked, DES `DES-096 · ADR-024`) and its header (v2.8.0 In Review,
v2.7.0 Approved); Doc 05 header (v2.5.0 **Approved**); Doc 09 header (**v1.5.0 In Review**, not the
v1.4.0 the review cited — the coordinator's fresher account, cycle-1 FAIL 93% with rework to v1.6.0
in progress, is what I wrote); Doc 02 §4.45 (FR-131 clauses (a)–(d), no (e)); the current text of
every anchor in both documents.

---

## 2. Operations, per document

**Doc 03 — `docs/03-architecture-design-sdd.md`, v2.12.0 → v2.13.0, `Status: In Review`:**

| OP | Intent | Closes |
|----|--------|--------|
| 1 | Header — version bump + Status rewritten for the rework cycle (the only Doc 03 deletion: the v2.12.0 Status narration, which survives in full in the v2.12.0 changelog entry) | — |
| 2 | Changelog — new **v2.13.0** entry describing exactly what changed, nothing more | — |
| 3 | §10.11 conduct-vote quorum rationale — "individual votes are private" → "**not published individually**"; standing sweep widened to a bare-word scan | ISS-04 (Low) |
| 4 | §10.12.3 normative note — both cell annotations now quoted as they actually read | ISS-05 (Low) |
| 5 | §10.12.3 — new **`anon` TITLE banned-word disposition** + revised two-cell verdict | **ISS-03 (Medium)** |
| 6 | §10.13.6 — the status-copy rule now names its own scope (`ver` + `anon` = the whole set) | **ISS-03 (Medium)** |
| 7 | §15 v2.4.0 sub-table — "US layer: owed — PO to mint US" → US-0134 exists; residue named | **ISS-02 (Medium)** |
| 8 | §15 v2.12.0 sub-table — "FR-131 has no US/TC/RTM row yet" → the true OPEN state + intended DES assignment routed to the tester | **ISS-01 (High)** |

**Doc 04 — `docs/04-test-strategy-master-plan.md`, v1.3.0 → v1.4.0, `Status: In Review`:**

| OP | Intent | Closes |
|----|--------|--------|
| 9 | Header — version bump + Status rewritten (the only Doc 04 deletion: the "§0.5 S4/S5 needed no change" sentence, which is the over-claim itself; it is quoted back in the replacement and in OP 13) | **ISS-01 (Medium)** |
| 10 | `Owner:` block — Doc 03 citation marked as historical provenance and re-pinned | ISS-07 (Low) |
| 11 | `Source:` block — Doc 05 → v2.5.0 Approved; Doc 09 pin corrected; Doc 03 → v2.13.0; FR-131 clause count stated | ISS-05, ISS-06 (Low) |
| 12 | Changelog — new **v1.4.0** entry | — |
| 13 | Changelog — annotate the v1.3.0 entry's "Neither S4 nor S5 is changed" over-claim in place | **ISS-01 (Medium)** |
| 14 | §0.5 **S4** — range corrected to **(a)–(d)**, annotated with the PO routing and a tester note; *secret* labelled this plan's own extension | **ISS-02 (Medium)** + ISS-03 (Low) |
| 15 | §0.5 **S5** — named `anon`-title carve-out **citing Doc 03 v2.13.0 §10.12.3** | ISS-08 (Low) |
| 16 | §8 `A-02.6` — enforced-today split from the owed placement half | ISS-04 (Low) |
| 17 | §13 `OPEN-21` — Doc 05 re-pinned in the finding body | ISS-05 (Low) |
| 18 | §22 Approvals — architect row describes the v1.4.0 submission | keeps ISS-10 discharged |

**Every issue in both reports is addressed on this touch. No Low is carried forward from either
document.**

---

## 3. Decisions, and why

1. **ISS-01 (High) — I stated the true chain state AND the intended DES assignment, but edited
   nothing in Doc 08.** The false clause was "FR-131 has no `US`/`TC`/RTM row yet". The replacement
   reads the row from Doc 08 and states it: OPEN `G-PHASE3` at v2.7.0 (Approved), still OPEN at
   v2.8.0 (In Review), TC-3476/3481/3487 Blocked, TC-3481 because SCR-13/SCR-14 are unbuilt. The
   reviewer also asked me to reconcile the DES half rather than leave the tester guessing, so the
   cell now states the architect's intended assignment — **DES-098** primary (the notice),
   **DES-094** (the status-badge reach that FR-131's closing sentence creates), **DES-096** retained
   (the ballot seam the cast path runs through) — and routes it to Ji-woo Park, with an explicit
   sentence that Doc 08 is the tester's document and is not edited from here. Stating an intended
   assignment is design work; changing the RTM is not mine.
2. **ISS-03 — the `anon` title is dispositioned COMPLIANT, on a deliberately narrower basis than the
   reading I just overruled.** The reviewer's own ruling on the merits was that the title survives;
   the defect was silence. The basis I wrote is not "status visibility" (the overruled reading) but
   the **voter**: the `anon` state renders only for open-tier users who cannot cast a binding vote
   under FR-122/FR-123, so the badge cannot describe that user's voting behaviour. I wrote that
   distinction out explicitly — *"the distinction is the voter, not the word"* — because a
   compliance finding that looks like the one just reversed will otherwise be read as backsliding.
3. **I refused to let the disposition be tidier than the record.** Clause 8 already concedes that
   "Nothing you do here is linked to you" is not literally true in v1 (`phone_hash` → phone number →
   in the India pilot a TRAI-registered person). The disposition says so in a paragraph headed
   "**What this disposition does NOT claim**", and records that clause 8's disclosure link is still
   unbuilt. Both reviews penalise summaries tidier than the records beneath them; a
   banned-word "COMPLIANT" with no concession attached would have been exactly that.
4. **Four re-open triggers, in the form the `anon` subtitle decision already uses.** A compliance
   ruling that rests on a contingent fact (open-tier users cannot vote) must say what falsifies it.
5. **Sequencing honoured, and stated in both documents.** Doc 03 rules the `anon` title (OP 5);
   Doc 04 S5's carve-out (OP 15) **cites** that ruling and says in terms that it does not make one.
   Writing a carve-out into the test plan that the design authority had not ruled would repeat, in
   Doc 04, the v2.7.0 mistake of a copy ruling living somewhere other than the copy authority.
   The carve-out is narrow (two strings, one component), keyed to Doc 03's re-open triggers, and
   explicitly leaves the `ver` title in scope in both directions.
6. **ISS-02 (Doc 04) — I corrected S4's range to (a)–(d) rather than leaving it open.** Last cycle I
   routed the question and left the text alone; the reviewer was right that routing a question does
   not license leaving a criterion asserting a range that does not exist. The annotation names the
   discrepancy, the authority (Doc 02 §4.45, Approved v2.16.3), the owner (Priya Raghunathan), and
   what governs meanwhile. **Per the coordinator's instruction I did NOT assume the product-owner's
   proposed clause (e)** — the spec says in terms that a proposal exists, is **not applied**, awaits
   the approver, and that this note must not be read as pre-committing to it. A tester note is
   attached because the very next task in the queue is minting FR-131 TCs off this criterion.
7. **ISS-01 (Doc 04) — the over-claim is withdrawn from the live status field and annotated in the
   historical one.** The Status sentence "§0.5 S4/S5 needed no change" is deleted (named in the OP
   intent) and replaced with the true split: S5 unchanged and correct; S4 unchanged in substance but
   carrying a known, now-annotated discrepancy. The v1.3.0 **changelog** sentence "Neither S4 nor S5
   is changed" is left standing as history with a correction annotation that concedes the sharpest
   version of the finding — the author knew when he wrote it, and the session note proves it. That
   is the honest form, and hiding it would repeat the defect.
8. **Doc 09's pin follows the coordinator, not the review.** The cycle-1 report pinned Doc 09 at
   v1.4.0 Approved; Doc 09's header at the time of writing reads **v1.5.0, In Review**, and the
   coordinator reports its cycle-1 FAIL at 93% with rework to v1.6.0 under way. The `Source:` line
   states last-Approved v1.4.0, v1.5.0 In Review with that status, and identifies v1.3.0 as *where
   `REL-LIM-18` / `ISS-03` was recorded* rather than as a pin — which also explains every v1.3.0
   citation elsewhere in the document, so they do not read as stale pins.
9. **ISS-04 (Doc 03, Low) fixed even though FR-131 does not bind it.** §10.11's "individual votes are
   private" is internal design rationale, not product copy, so the requirement's ban does not reach
   it. I corrected it anyway, on this document's own diagnosis of the v2.7.0 failure — a reader does
   not parse "private means unpublished, not unseen" — and widened the standing sweep from the five
   routed phrases to a bare-word scan so the next cascade does not rediscover the class.
10. **Both changelog entries describe only what changed.** Both reviews penalised over-claims, and
    Doc 03's cycle-1 report specifically credited the v2.12.0 changelog for not over-claiming. Each
    new entry names the finding, quotes the false text, states the corrected text, and cites the
    source read. Neither claims a verification I did not perform.

---

## 4. Deliberately not done

- **No edit to Docs 07, 08 or 09**, and none implied. Doc 03 OP 8 says so in the cell itself.
- **No ADR edited.** The ADR-024 §(d) quotation question remains the approver's, as cycle 1 agreed.
- **Clause 7 still untouched** in Doc 03; clause 9 remains its title-side twin. Cycle 1 examined the
  split and recorded it as sound — "merging the two clauses would be a matter of taste, not
  correctness" — so re-opening it would be churn.
- **The engineer's stale `PrivacyStatus.tsx` citation** ("Doc 03 §10.12.3 v2.7.1", attributing the
  title rule to clause 7) is not mine to fix; it is carried into the v2.13.0 changelog's routing
  paragraph so it is not lost.
- **A dangling pointer accepted, disclosed:** the v2.12.0 changelog entry's phrase "(see the Status
  block)" now points at a v2.13.0 Status block that summarises rather than enumerates the five
  v2.11.2 Lows — the entry lists all five itself, and the new Status records that they were
  re-verified and stand, so the reference still resolves. Not worth a nineteenth op.

---

## 5. Open items (carried, with owners)

1. **Cycle-2 reviews owed** for Doc 03 v2.13.0 and Doc 04 v1.4.0 — PM to assign a neutral reviewer.
2. **Product-owner (Priya Raghunathan):** rule on FR-131 clause **(e)** — never minted, or a typo
   for (d)? The proposal in flight is **not applied** and awaits the approver. Doc 04 S4 carries the
   annotation and tests (a)–(d) meanwhile.
3. **Tester (Ji-woo Park):** TC mints for UT-0759 / UT-0887 / UT-0888 (Doc 06 v2.5.1 §7 item 26(c));
   and the FR-131 **DES-half alignment** in Doc 08 against the assignment Doc 03 §15 now states
   (DES-098 primary · DES-094 status-badge reach · DES-096 seam). Do **not** derive FR-131 TC rows
   from a five-clause reading of S4.
4. **Engineer:** DES-098's **acknowledge-to-proceed control** (US-0134, SCR-13) is still unbuilt —
   it alone keeps the FR-131 RTM row open even if every surface existed; the **clause-8
   data-practices disclosure link** for non-vote `anon` contexts is still unbuilt; and
   `PrivacyStatus.tsx`'s normative-reference citation is stale (v2.7.1 → v2.13.0; title rule is
   clause 9, not clause 7).
5. **Approver:** ADR-024 §(d)'s quotation of the retired §13 wording — one-line dated amendment, or
   leave as an accurate 2026-08-23 record.
6. **Project-manager:** a standing **pin-currency sweep**, as the Doc 04 report recommends. Doc 05,
   Doc 08 and Doc 09 all moved during this cascade.

---

## 6. IDs touched

**Requirements:** FR-131 (cascaded, not amended), FR-122, FR-123, FR-124(b), FR-103, FR-031,
FR-032, NFR-003, H-16, H-18, T-01, T-02.
**Design:** **DES-094** (`anon` TITLE banned-word disposition added; clauses 7/9 unchanged),
**DES-098** (status-copy rule's scope named), DES-096, DES-085, DES-081.
**Traceability:** US-0134, EP-06, FE-058, TC-3476, TC-3481, TC-3487, TC-3564…TC-3569, UT-0759,
UT-0887, UT-0888, OPEN-01, OPEN-21, TS-ADV-02 / A-02.6, S4, S5.
**Review issues closed:** Doc 03 ISS-01 (High), ISS-02, ISS-03 (Medium), ISS-04, ISS-05 (Low);
Doc 04 ISS-01, ISS-02 (Medium), ISS-03…ISS-08 (Low).
**Document versions:** Doc 03 **v2.12.0 → v2.13.0** (In Review); Doc 04 **v1.3.0 → v1.4.0**
(In Review).

---

## 7. Files written this session

- `artifacts/architect-2026-09-06T1500-doc03-04-cycle2-spec.md` — the 18-op anchored spec
- `artifacts/architect-2026-09-06T1500-doc03-04-cycle2.md` — this note

Nothing else was written or edited.
