# Session memory — architect — 2026-09-06T10:00 — FR-131 cascade into Docs 03 and 04

**Role:** architect (Ravi Deshmukh, Principal Architect) · **Phase:** Design (maintenance cascade)
**Product:** Trumocracy · **Documents owned:** Doc 03 (SDD), Doc 04 (Test Strategy)
**Deliverable:** `artifacts/architect-2026-09-06T1000-fr131-cascade-spec.md` — a 26-operation
anchored FIND/REPLACE spec for the project-manager to transcribe mechanically. **I wrote nothing
under `docs/`** (no Edit tool; whole-file Write on these documents truncates them — it destroyed
Doc 04 once). I did not open or write `artifacts/memory-index.json`.

---

## 1. What this session did

Doc 06 v2.5.1 §7 item 26(a) and `artifacts/engineer-2026-09-05T1700.md` (commit `0a5c542`, merged
to `main` in PR #19 as `84e2203`) routed an FR-131 cascade to me. The **code** and **Doc 09 v1.3.0**
now tell the v1 truth; the **SDD** and the **test strategy** still carried the retired framing —
"votes are anonymous but not receipt-free" — and the v2.7.0 architect ruling that the `ver` title
"Verified — private" is FR-131-compliant in v1. The approver (Rathish, 2026-09-06) made this the
highest priority: the SDD must not carry the claim the rest of the project killed.

**Sources read before writing (verified, not assumed):** `CLAUDE.md`; `.claude/agents/architect.md`;
`docs/02-requirements-srs.md` §4.45 (FR-131, lines 1107–1133, including the closing sentence banning
"private" / "anonymous" / "receipt-free" / "secure" for v1 voting behaviour);
`docs/adr/ADR-024-…md` §(d) and §"What v1 MUST NOT say or imply" (lines ~326–363);
`packages/ui/src/PrivacyStatus.tsx` (whole file); `packages/protocol/src/flags.js`
`MACI_VOTING.description`; the engineer's note; Doc 03 §10.12.3, §10.13.2/.3/.6/.7/.12, §13, §15,
§16 and its header/changelog; Doc 04 §0.5, §8 `TS-ADV-02`, §13 `OPEN-01`, §22 and its header.

**Code truth confirmed by reading `packages/ui/src/PrivacyStatus.tsx`:** the `ver` TITLE is
backing-aware by the same clause-7 rule as the subtitle — `VER_TITLE_V1 = 'Verified'` (fail-honest
default), `VER_TITLE_V2 = 'Verified — private'` rendering only when
`backingProperties?.unlinkable === true`, with `aria-label={title}` following the selected title.
UT-0759 covers the four paths. The SDD's v1 sub-table row was the last document still telling the
engineer to hardcode the banned word.

---

## 2. The 26 operations (file · intent)

**Doc 03 — `docs/03-architecture-design-sdd.md`, v2.11.2 → v2.12.0, `Status: In Review`,
`Last updated: 2026-09-06`:**

| OP | Intent |
|----|--------|
| 1 | Header — version bump, `Status: In Review`; the v2.11.2 five-carried-Lows Status text is replaced by a statement disposing of all five (the only op with an intentional deletion in Doc 03's header; nothing is lost — each Low is restated with its disposition and the prior Approved verdict is preserved) |
| 2 | Header — `Source:` re-pinned SRS v2.16.0 → **v2.16.3**; `Last updated:` → 2026-09-06 (**carried Low #2**) |
| 3 | Changelog — new **v2.12.0** entry: the reversal, the §13 correction, the DES-098 alignment, the code-alignment evidence, the five Lows, and the ADR sweep result |
| 4 | Changelog — annotate the v2.11.2 over-claim that Q17 was "corrected in both its title and body" (**carried Low #1**, half 2) |
| 5 | Changelog — annotate "Still routed … Doc 02 §13 (h)" as discharged at Doc 02 v2.16.3 (**carried Low #3**) |
| 6 | Changelog — mark the v2.7.0 entry **REVERSED IN PART**; historical text left standing |
| 7 | §10.12.3 — the v2.7.1 normative note's scope extended from the subtitle alone to the **title** as well |
| 8 | §10.12.3 three-state reference table — `ver` **title** cell annotated "(v2 ZK backing only …)", as the subtitle cell already was |
| 9 | §10.12.3 backing-aware sub-table — **v1 row title "Verified — private" → "Verified"** (the one intentional word deletion in the body; named in the op intent). The v2 row is untouched and still matches `VER_TITLE_V2` verbatim |
| 10 | §10.12.3 — the v2.7.0 FR-131 banned-words ruling marked **SUPERSEDED/OVERRULED**, its text retained verbatim, the new rule stated |
| 11 | §10.12.3 normative binding list — **clause 9 added**: backing-aware `ver` TITLE selection, including `aria-label` |
| 12 | §10.13.3 — the owed **DES-096 ballot-state accessor** clause added (**carried Low #5**) |
| 13 | §10.13.6 — DES-098 element clause (1) aligned to FR-131(a)'s three explicit denials |
| 14 | §10.13.6 — banned-words bullet extended to voting-adjacent **status** copy; overruling recorded; the negation exception explained |
| 15 | §10.13.12 `Traces:` — FR-107 annotated related-only, **not** a DES assignment (**carried Low #4**) |
| 16 | §13 debt row "Public tallies in Phase 1" — Repayment cell replaced with the FR-131 truth |
| 17 | §15 — FR-131 → DES-098 trace row gains the fourth banned word ("secure") and the badge rule |
| 18 | §15 — new **v2.12.0 amendment sub-table** (DES-094 title correction, DES-098 alignment) |
| 19 | §16 **Q17** body — "exercises neither" → "**exercises none of the three**" (**carried Low #1**, half 1) |

**Doc 04 — `docs/04-test-strategy-master-plan.md`, v1.2.0 → v1.3.0, `Status: In Review`,
`Last updated: 2026-09-06`:**

| OP | Intent |
|----|--------|
| 20 | Header — version bump, `Status: In Review`, ISS-10 recorded as discharged, prior verdict preserved |
| 21 | Header — `Source:` re-pins SDD → **v2.12.0 (In Review)** and Doc 06 → **v2.5.1 (Approved)**; Doc 09 v1.3.0 added as a source; `Last updated:` → 2026-09-06 |
| 22 | Changelog — new **v1.3.0** entry |
| 23 | §8 `TS-ADV-02` case **A-02.6** — pass criterion corrected to FR-131 (a)/(b)/(c) + the four-word ban, naming UT-0887 / UT-0888 / UT-0759; the "does not satisfy FR-031/FR-032/NFR-003 … OPEN-01" point kept verbatim |
| 24 | §13 **OPEN-01** — false premise corrected; impact, owners and Gate-2-blocker status unchanged |
| 25 | §22 Approvals — architect row now describes the v1.3.0 submission (**closes carried Low ISS-10**); v1.2.0/v1.1.0/v1.0.0 history folded into the row |
| 26 | Downstream note — Doc 06 re-pinned Approved v2.4.3 → **v2.5.1**, naming the three regression guards |

---

## 3. Decisions made, and why

1. **The v2.7.0 "status visibility" ruling is overruled, not softened.** FR-131's closing sentence
   bans the four words across *the v1 product — its UI, README, and all public-facing materials* —
   wherever they describe v1 voting behaviour, and carves out no exception for status copy. The
   `ver` badge is persistent on the same authenticated surfaces from which a member votes and sits
   directly above a subtitle whose subject is the member's vote. What a word "describes" in an
   architect's analysis cannot outrank what a member will understand from it. The new rule I wrote
   into the SDD is a single testable sentence: **"private" may appear on a voting-adjacent status
   badge only against a live backing that declares `getProperties().unlinkable === true`.**
2. **Annotate, never delete.** The v2.7.0 analysis paragraph, the v2.7.0 changelog entry, the
   retired §13 repayment wording, the retired A-02.6 and OPEN-01 clauses, and the v2.11.2 Status
   claims are all retained in quoted/annotated form. A reader must be able to see that the project
   changed its mind and why. The two intentional deletions (OP 1's Status block, OP 9's "— private"
   in one table cell) are named in their op intents, as the applier's boundary rule requires.
3. **Clause 9 rather than a rewrite of clause 7.** The code's JSDoc cites "the clause-7 rule" for
   the title. I considered editing clause 7 in place, but clause 7's body is a ~2,000-character
   single line and the applier refuses the **whole spec** if any one FIND mismatches; a
   character-perfect reproduction of that line is the single largest failure risk in this delivery
   for the smallest gain. Clause 7's text is also *correct as written* — it is subtitle-scoped and
   says so. So clause 9 states the title rule explicitly, says in terms that it is clause 7's rule
   applied to the title, and says clause 7's body is deliberately unchanged. The normative note
   (OP 7) now points at both clauses. **This is a deliberate, recorded trade-off, not an oversight**
   — if a future reviewer prefers one merged clause, that is a clean follow-up edit.
4. **DES-098 aligned to FR-131(a), not just de-conflicted.** §10.13.6's clause (1) said only "NOT
   the private receipt-free ballot", which under-states FR-131(a)'s three named denials and does
   not match the shipped `en.ts` copy. Design that under-specifies the requirement it backs is how
   a banned claim gets back in. Aligned, with FR-131 (not any string in code, and not this
   paraphrase) named as the normative wording.
5. **The negation exception is stated in the SDD.** FR-131(a) *mandates* "NOT anonymous, NOT
   receipt-free, NOT coercion-resistant", so a blanket substring ban would fail the mandated text.
   OP 14 records that the four words MAY appear negated, and why UT-0887 is negation-aware. Without
   this, the next reader of the SDD would write a scanner that fails the compliant copy.
6. **Doc 04's substantive findings were preserved exactly.** A-02.6 and OPEN-01 were corrected off
   a false premise, but `FR-031`/`FR-032`/`NFR-003` remain **Must** guardrails not delivered in v1,
   `TS-ADV-02` still cannot pass, and OPEN-01 remains a Definition-B Gate-2 blocker with the same
   owners. A finding does not need a false premise to stand — and weakening it while "fixing" it
   would have been the worse defect.
7. **Doc 04 §0.5 S4/S5 deliberately untouched.** They already state the correct doctrine (no v1
   string may claim anonymity/unlinkability/receipt-freeness…, build-failing). A-02.6 and OPEN-01
   were this plan failing its own S5; the standard needed no change, only its application.
8. **All five carried Lows fixed on this touch, per the header's own instruction.** Doc 03's Status
   block said "fix first on any future touch"; this was a touch. None was expensive. See §5.
9. **Scope held.** I did not renumber IDs, did not mint a DES, did not touch requirements, did not
   edit any ADR, and did not touch code. Doc 03's §12/§15 FR-131 rows were corrected only where they
   under-stated the ban.

---

## 4. ADR sweep — result (reported, NOT edited; ADRs are decision records)

Swept `docs/adr/` for `anonymous but`, `votes are anonymous`, `vote is anonymous`,
`Verified — private`, `PrivacyStatus`, `DES-094`.

| ADR | Finding | Verdict |
|---|---|---|
| **ADR-024** §"Relationship to existing Doc 03 §13 debt row" (line ~356) | Quotes the retired wording verbatim as its precedent pattern: *"Public tallies in Phase 1 — client MUST state plainly that Phase-1 votes are anonymous but not receipt-free."* | **CONTRADICTED by Doc 03 v2.12.0.** The quotation is a *quotation of Doc 03*, and Doc 03 no longer says it. Not edited. Doc 03 §13's replacement cell says so explicitly, so a reader arriving from the ADR is not misled. **Recommendation for the approver:** either an ADR-024 dated amendment note or leave it as an accurate record of what §13 said on 2026-08-23 — an ADR records a decision at a date, and this one is not the rule anywhere. My preference: a one-line dated amendment note, added by whoever owns ADR amendments, low priority. |
| **ADR-024** §(d) DES-098 notice requirements | Point 1 reads "It is NOT the private, receipt-free ballot"; the copy rule bans only "receipt-free" and "anonymous" (two of FR-131's four words). | **Narrower than FR-131 but not contradicted** — negated usage, and FR-131 (a later, approved requirement) is the superseding normative wording. §"What v1 MUST NOT say or imply" is fully consistent with the new title rule: it forbids "Your vote is private" outright. **The ADR actually supports the reversal.** No action. |
| **ADR-023** (design system / DES-094) | Defers to Doc 03 §10.12.3 for the DES-094 copy ("the three states … with their exact wireframe copy … in §10.12.3 are authoritative") rather than restating any title string. | **Follows the correction automatically.** No contradiction, no action. |
| **ADR-006** (coercion resistance) line 15 | "a naive private vote is **not** coercion-resistant even when it is anonymous" | A general statement about public-ledger voting systems, **not** a claim about v1 Trumocracy voting. Out of FR-131's scope. No action. |

**No other ADR asserts a v1 voting privacy property.** No ADR was edited in this session.

---

## 5. The five carried Lows — exactly what I did with each

| # | Carried Low (Doc 03 v2.11.2 Status) | What I did | Cheap? |
|---|---|---|---|
| 1 | §16 Q17's body still reads "exercises neither"; and the v2.11.2 changelog over-claims it was "corrected in both its title and body" | **Both halves fixed.** OP 19 changes the body to "exercises **none of the three**" and annotates the row; OP 4 annotates the changelog over-claim in place as the over-claim it was | Yes |
| 2 | `Source:` pin reads SRS v2.16.0, three versions stale | **Fixed.** OP 2 re-pins to SRS **v2.16.3** (Approved 2026-08-30) and records that no normative requirement text changed across the delta — verified: FR-131 §4.45 is unchanged | Yes |
| 3 | The changelog's "Still routed … Doc 02 §13 (h)" line is now wrong — discharged at Doc 02 v2.16.3 | **Fixed by annotation.** OP 5. Verified against Doc 02 v2.16.3's own changelog: the routed item was (h)'s ADR-024 mis-citation, corrected there. (h) itself remains OPEN as a PO requirement question, which the annotation states so the next reader does not over-read the discharge | Yes |
| 4 | §10.13.12's `Traces:` footer lists FR-107 among DES-097(b)'s related IDs | **Fixed by annotation** rather than deletion (OP 15): FR-107 stays in the list, marked **related only, expressly NOT a DES assignment**, citing Doc 08's OPEN row with DES = none and §15's disclaimer. Deleting it would have lost the true fact that the store's append-only rule *does* serve part of FR-107 | Yes |
| 5 | §10.13.3 did not receive the DES-096 accessor clause, though §13 carries the owned debt row | **Fixed.** OP 12 adds the clause to the seam spec itself: what is owed, the shape it must take (read-only, no set/force/skip), the v1/v2 backing symmetry, why it is not urgent, and the owner — cross-linked to the §13 row | Yes |

**None was carried forward.** All five are discharged in this version.

---

## 6. Open items (carried, with owners)

1. **`artifacts/reviews/` document-review cycle owed** for Doc 03 v2.12.0 and Doc 04 v1.3.0
   (technical mode, neutral reviewer) — PM to assign. Both documents are `In Review`; the hook
   blocks progression until each has a passing report at its current version.
2. **DES-098 acknowledge-to-proceed control is still not built** (US-0134, SCR-13): the banner is
   non-dismissable but has no acknowledgement step. FR-131 requires "the voter MUST acknowledge the
   notice to proceed". Owner: engineer. Recorded in the new §15 sub-table (OP 18).
3. **FR-131 has no `US` / `TC` / RTM row.** Owner: product-owner (US) and tester (TC/RTM). Doc 08's
   FR-131 Must row is a Gate-2 blocker as it stands.
4. **Doc 04 §0.5 S4 says the notice's "required clauses (a)–(e)"; FR-131 has clauses (a)–(d).**
   Spotted this session; **not fixed** — I could not determine from Doc 02 whether "(e)" refers to a
   fifth clause that was never minted or is a typo for (d), and inventing either reading is a
   requirement decision, not an architect's. Routed to the **product-owner** (Priya Raghunathan) to
   confirm; a one-character fix once confirmed. Deliberately left rather than guessed.
5. **ADR-024's quotation of the retired §13 wording** — see §4. Approver's call; low priority.
6. **Doc 04 `Source:` pins for Doc 05 (v2.3.0, In Review) and Doc 07 (v2.4.4)** were left as-is; I
   verified only the pins I had evidence for (Doc 02, Doc 03, Doc 06, Doc 09). PM should confirm
   Doc 05/Doc 07 currency at the next touch.
7. **Clause 7 vs clause 9** — see decision 3. If a reviewer prefers one merged clause covering both
   title and subtitle, that is a clean follow-up; the split is recorded and deliberate.
8. **Arabic banner strings** (`apps/web/src/i18n/ar.ts`) still need native-speaker review before any
   Arabic-locale deployment — Doc 06 §7 item 17. Not architect-owned; carried here so it is not
   lost.
9. **Petition-endorsement landing copy** ("name kept private", en + ar) is a product-owner decision,
   not an FR-131 v1-voting defect — the engineer routed it and I did not absorb it into the SDD.

---

## 7. IDs touched

**Requirements:** FR-131 (cascaded; not amended — I do not own Doc 02), FR-124, FR-091, FR-107,
FR-031, FR-032, NFR-003, H-15, H-16, T-01, T-02.
**Design:** **DES-094** (title made backing-aware; clause 9 minted in the normative binding list),
**DES-098** (element clause (1) aligned to FR-131(a); banned-words bullet extended),
**DES-096** (ballot-state-accessor clause added to §10.13.3), DES-095, DES-097(b), DES-063, DES-081.
**Decisions:** **ADR-024** (swept, contradicted-in-a-quotation, NOT edited), ADR-023, ADR-025,
ADR-006 (all swept, none edited). No new ADR minted — this reverses a ruling recorded in a
*changelog and section*, not in an ADR, so the reversal is recorded in the same places.
**Defects / releases:** **REL-LIM-18**, ISS-03 (Doc 09 v1.3.0).
**Tests referenced (not authored):** UT-0759, UT-0887, UT-0888, TS-ADV-02 / A-02.6, OPEN-01.
**Stories:** US-0134.
**Document versions:** Doc 03 **v2.11.2 → v2.12.0** (`In Review`); Doc 04 **v1.2.0 → v1.3.0**
(`In Review`). Carried Lows discharged: Doc 03 #1–#5; Doc 04 ISS-10.

---

## 8. Files written this session

- `artifacts/architect-2026-09-06T1000-fr131-cascade-spec.md` — the 26-op anchored FIND/REPLACE spec
- `artifacts/architect-2026-09-06T1000-fr131-cascade.md` — this note

Nothing else was written or edited. `artifacts/memory-index.json` was **not** opened (PM
pre-registered both files before dispatch). No file under `docs/` was modified by me.
