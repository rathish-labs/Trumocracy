# Anchored FIND/REPLACE spec — FR-131 cascade into Doc 03 and Doc 04

**Author:** architect (Ravi Deshmukh, Principal Architect) · **Date:** 2026-09-06
**Applies to:** `docs/03-architecture-design-sdd.md` (v2.11.2 → **v2.12.0**, `Status: In Review`)
and `docs/04-test-strategy-master-plan.md` (v1.2.0 → **v1.3.0**, `Status: In Review`)
**Trigger:** Doc 06 v2.5.1 §7 item 26(a); `artifacts/engineer-2026-09-05T1700.md` (commit
`0a5c542`, merged to `main` in PR #19 as `84e2203`); Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`;
approver direction (Rathish) 2026-09-05 and 2026-09-06.
**Companion session note:** `artifacts/architect-2026-09-06T1000-fr131-cascade.md`

**Applier rules honoured:** four-backtick fences; every FIND matches EXACTLY ONCE (verified
against HEAD); every FIND starts at a line start and ends at the end of a whole line; every word a
FIND consumes reappears in its REPLACE **except** where the OP intent names the deletion (OP 1 and
OP 9 are the only two that delete, and both name it).

**Ops:** 1–19 → Doc 03. 20–26 → Doc 04.

---

### OP 1 — docs/03-architecture-design-sdd.md — header: version 2.11.2 → 2.12.0, Status → In Review; DELETES the v2.11.2 five-carried-Lows Status text and restates all five with their disposition (nothing lost — every one of the five is named and dispositioned in the replacement, and the prior Approved verdict is preserved)

FIND:
````
Version:       2.11.2
Status:        Approved — 03-architecture-design-sdd-v2.11.2-technical-cycle4.md (PASS 95%,
               0C/0H/0M/5L). Score sat AT the bar (95.05%), not above it — recorded because it
               matters to anyone reading this as comfortably passed. Five Lows accepted and
               carried, none warranting escalation alone or together; **fix first on any future
               touch:** (1) §16 Q17's body still reads "exercises neither" after its title was
               corrected to three representations — and the v2.11.2 changelog over-claims that
               this was "corrected in both its title and body", which it was not; (2) the
               `Source:` pin reads SRS v2.16.0 and is three versions stale (Doc 02 is Approved at
               v2.16.3 — no normative requirement text changed across the delta, verified by the
               reviewer); (3) the changelog's "Still routed … Doc 02 §13 (h)" line is now wrong —
               that routing was discharged at Doc 02 v2.16.3; (4) §10.13.12's `Traces:` footer
               lists FR-107 among DES-097(b)'s related IDs (not a §5.2 register link, and the next
               line says "Enables (does not close)"); (5) §10.13.3 did not receive the DES-096
               accessor clause, though §13 now carries the owned debt row.
````
REPLACE WITH:
````
Version:       2.12.0
Status:        In Review — **FR-131 cascade (v2.12.0, 2026-09-06).** Routed in by Doc 06 v2.5.1
               §7 item 26(a) and artifacts/engineer-2026-09-05T1700.md (commit 0a5c542, merged to
               main in PR #19 as 84e2203), on the approver's direction (Rathish, 2026-09-06). The
               product code and Doc 09 v1.3.0 now state the FR-131 v1 truth; this document still
               carried the retired "votes are anonymous but not receipt-free" framing (§13) and
               the v2.7.0 ruling that the `ver` title "Verified — private" is FR-131-compliant in
               v1 (§10.12.3). Both are corrected here. Superseded text is retained and marked per
               the annotate-don't-delete convention, never silently deleted.
               **The five Lows carried from v2.11.2 ("fix first on any future touch") are ALL
               discharged on this touch:** (1) §16 **Q17**'s body no longer reads "exercises
               neither" — it reads "exercises none of the three" — and the v2.11.2 changelog's
               over-claim that Q17 was "corrected in both its title and body" is annotated in
               place as the over-claim it was; (2) the `Source:` pin is re-pinned from SRS
               v2.16.0 to **SRS v2.16.3** (Approved; no normative requirement text changed across
               the delta); (3) the changelog's "Still routed … Doc 02 §13 (h)" line is annotated
               as **discharged at Doc 02 v2.16.3**; (4) **§10.13.12**'s `Traces:` footer now
               annotates FR-107 as related-only and expressly **not** a DES assignment (Doc 08
               holds that Must row OPEN with DES = none); (5) **§10.13.3** now carries the
               DES-096 ballot-state-accessor clause that matches the §13 debt row already owning
               it. No Low is carried forward from v2.11.2.
               Prior verdict (superseded by this version, recorded for the trail): **Approved** —
               03-architecture-design-sdd-v2.11.2-technical-cycle4.md (PASS 95%, 0C/0H/0M/5L);
               the score sat AT the bar (95.05%), not above it.
````

---

### OP 2 — docs/03-architecture-design-sdd.md — header: re-pin Source to SRS v2.16.3 (carried Low #2) and set Last updated

FIND:
````
Source:        SRS-TRUMOCRACY v2.16.0
Last updated:  2026-08-30
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY v2.16.3 (Approved 2026-08-30) — re-pinned at v2.12.0 from the
               three-versions-stale v2.16.0 pin (carried Low #2). No normative requirement text
               changed across the v2.16.0 → v2.16.3 delta; FR-131 (§4.45) is unchanged and is the
               normative wording this version cascades.
Last updated:  2026-09-06
````

---

### OP 3 — docs/03-architecture-design-sdd.md — changelog: insert the v2.12.0 entry above the v2.11.2 entry

FIND:
````
Change:        v2.11.2 (2026-08-30) — Rework cycle 3 against
               artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md
````
REPLACE WITH:
````
Change:        v2.12.0 (2026-09-06) — **FR-131 cascade: this document stops asserting the claim
               the rest of the project has already retired.** Minor bump — normative copy in a
               DES table changes. Routed in by Doc 06 v2.5.1 §7 item 26(a) and
               artifacts/engineer-2026-09-05T1700.md; superseding authority is Doc 09 v1.3.0
               `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02) and the approver's
               direction of 2026-09-05 (Rathish), re-affirmed 2026-09-06 as the highest-priority
               cascade.
               **REVERSAL — the v2.7.0 FR-131 banned-words ruling on the `ver` TITLE is
               OVERRULED.** v2.7.0 ruled the title "Verified — private" COMPLIANT in v1 on the
               reading that "private" describes *status visibility*, not voting behaviour. That
               reading is overruled. **The rule that now governs, v1 and v2 alike:** the word
               "private" may appear on a voting-adjacent status badge **only** against a live
               `IEligibilityVerifier` backing that declares `getProperties().unlinkable === true`.
               FR-131's closing sentence bans "private", "anonymous", "receipt-free" and "secure"
               across the v1 product's UI, README and all public-facing materials where they
               describe v1 voting behaviour, and carves out no "status visibility" exception; the
               green `ver` badge sits on the same authenticated surfaces from which a member
               votes, so a reasonable member reads it as a claim about the ballot — in v1, a false
               one. Locations corrected: §10.12.3 backing-aware sub-table (v1 row title
               "Verified — private" → **"Verified"**; the v2 row keeps "Verified — private",
               verbatim-matching `VER_TITLE_V2`); §10.12.3 three-state reference table (`ver`
               title cell annotated v2-only, as the subtitle cell already was); §10.12.3 v2.7.1
               normative note (its warning was scoped to the *subtitle* alone — that scoping is
               precisely what left the title cell reading as normative, and it now covers the
               title too); §10.12.3 banned-words analysis (v2.7.0 ruling marked SUPERSEDED, text
               retained verbatim, new rule stated); §10.12.3 normative binding list — **clause 9
               added**, applying clause 7's fail-honest backing test to the TITLE, including the
               `aria-label`. Clause 7's own body is left untouched: it is subtitle-scoped and
               remains correct as written; clause 9 is its title-side twin and says so. The
               v2.7.0 changelog entry below is marked as reversed but is otherwise left standing
               as history.
               **§13 debt row "Public tallies in Phase 1" corrected.** Its Repayment cell told the
               client to "state plainly that Phase-1 votes are anonymous but not receipt-free" — a
               statement FR-131 forbids and the v1 build does not make. It now carries the FR-131
               truth: a v1 vote is cast through conventional authentication and is NOT anonymous,
               NOT receipt-free and NOT coercion-resistant; the platform database CAN see vote
               direction and party membership; the cryptographic private ballot arrives with the
               Definition-B (v2) privacy layer.
               **§10.13.6 DES-098 aligned to FR-131(a).** The element's clause (1) said only "NOT
               the private receipt-free ballot", under-stating FR-131(a)'s three explicit denials;
               it now states NOT anonymous, NOT receipt-free, NOT coercion-resistant. The
               banned-words bullet now states that the ban reaches voting-adjacent *status* copy,
               not only notice text, and records the overruling. §15's FR-131 → DES-098 trace row
               gains the fourth banned word ("secure") and the badge rule.
               **Alignment with built code (verified by reading at commit 84e2203, not assumed):**
               `packages/ui/src/PrivacyStatus.tsx` (`VER_TITLE_V1 = 'Verified'`,
               `VER_TITLE_V2 = 'Verified — private'`, selected by
               `backingProperties?.unlinkable === true`, `aria-label` following the selected
               title; UT-0759 four-path test), `packages/protocol/src/flags.js`
               `MACI_VOTING.description`, `apps/web/src/i18n/en.ts`
               `banner.notReceiptFreeTitle`/`Body` (UT-0887),
               `packages/contracts/src/core/Governor.sol` NatSpec,
               `packages/sdk/src/client.js` `#tenureSignals`.
               **All five v2.11.2 carried Lows discharged** (see the Status block): Q17 body;
               `Source:` re-pin to SRS v2.16.3; the "Still routed … Doc 02 §13 (h)" line; the
               §10.13.12 `Traces:` FR-107 annotation; the §10.13.3 DES-096 accessor clause.
               **ADR sweep (reported, not edited — ADRs are decision records):** `ADR-024`
               §"Relationship to existing Doc 03 §13 debt row" quotes the retired §13 wording as
               its precedent pattern; that quotation is now historical and is contradicted by this
               version. `ADR-023` defers to §10.12.3 for the DES-094 copy rather than restating
               it, so it follows this correction automatically. `ADR-006`'s "even when it is
               anonymous" is a general statement about public-ledger voting, not a claim about v1
               Trumocracy. No ADR was edited.
               v2.11.2 (2026-08-30) — Rework cycle 3 against
               artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md
````

---

### OP 4 — docs/03-architecture-design-sdd.md — changelog: annotate the v2.11.2 "corrected in both its title and body" over-claim (carried Low #1, half 2)

FIND:
````
               `G-TRACE + G-PHASE3`, matching Doc 08. (4) **Q17 still counted two** representations
               after the sub-table had established three; corrected in both its title and body.
````
REPLACE WITH:
````
               `G-TRACE + G-PHASE3`, matching Doc 08. (4) **Q17 still counted two** representations
               after the sub-table had established three; corrected in both its title and body.
               _(v2.12.0 correction to this historical entry: the **body was NOT corrected** at
               v2.11.2 — it still read "`differential.test.mjs` exercises neither". Only the title
               and the annotation were fixed. The v2.11.2 review carried this as Low #1; the body
               is corrected at v2.12.0.)_
````

---

### OP 5 — docs/03-architecture-design-sdd.md — changelog: annotate the "Still routed … Doc 02 §13 (h)" line as discharged (carried Low #3)

FIND:
````
               **Still routed elsewhere, unfixed here (not architect-owned):** Doc 02 §13 (h) and
               the two engineer-owned stale code comments at packages/sdk/src/proposals.js:295 and
               packages/protocol/src/proposals.js:103-108.
````
REPLACE WITH:
````
               **Still routed elsewhere, unfixed here (not architect-owned):** Doc 02 §13 (h) and
               the two engineer-owned stale code comments at packages/sdk/src/proposals.js:295 and
               packages/protocol/src/proposals.js:103-108.
               _(v2.12.0 correction to this historical entry, carried Low #3: the **Doc 02 §13 (h)
               routing was already discharged** when this line was written — Doc 02 v2.16.3
               (Approved 2026-08-30) corrected (h)'s ADR-024 mis-citation, which was the routed
               item. (h) itself remains OPEN as a product-owner requirement question, but nothing
               is routed from this document to it. The two engineer-owned code comments are not
               re-asserted here; their status is Doc 06's to record.)_
````

---

### OP 6 — docs/03-architecture-design-sdd.md — changelog: mark the v2.7.0 entry's FR-131 title ruling as reversed (history retained, not deleted)

FIND:
````
               v2.7.0 (2026-08-25) — DES-094 backing-aware copy + carried debt ISS-A/ISS-B
````
REPLACE WITH:
````
               v2.7.0 (2026-08-25) — **[REVERSED IN PART at v2.12.0: the FR-131 banned-words
               ruling recorded in this entry — that the `ver` title "Verified — private" is
               COMPLIANT in v1 — is OVERRULED (Doc 09 v1.3.0 REL-LIM-18 / ISS-03; approver
               2026-09-05). The v1 title is "Verified". The rest of this entry stands. Historical
               text retained per annotate-don't-delete.]**
               DES-094 backing-aware copy + carried debt ISS-A/ISS-B
````

---

### OP 7 — docs/03-architecture-design-sdd.md — §10.12.3: extend the v2.7.1 normative note from the subtitle alone to the title as well

FIND:
````
> **Normative note (v2.7.1 — ISS-03):** The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference subtitle annotated "(v2 ZK backing only — see backing-aware copy below)." **Clause 7 in the normative binding list below and the backing-aware sub-table are the normative implementation spec for the `ver` subtitle.** The v1 default `ver` subtitle ("Your vote counts. How you voted is never made public.") does not appear in this table — it appears in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clause 7 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 subtitle, which clause 7 expressly prohibits.
````
REPLACE WITH:
````
> **Normative note (v2.7.1 — ISS-03; scope extended from the subtitle to the TITLE at v2.12.0):** The table below is **informational reference copy** maintained per the annotate-don't-delete convention. The `ver` row preserves the v2 reference **title and** subtitle, each annotated "(v2 ZK backing only — see backing-aware copy below)." **Clause 7 (subtitle) and clause 9 (title) in the normative binding list below, together with the backing-aware sub-table, are the normative implementation spec for BOTH the `ver` title and the `ver` subtitle.** The v1 default `ver` title ("Verified") and the v1 default `ver` subtitle ("Your vote counts. How you voted is never made public.") do not appear in this table — they appear in the backing-aware sub-table. An engineer implementing `PrivacyStatus.tsx` MUST consult clauses 7 and 9 and the backing-aware sub-table; taking the `ver` row of this table as the implementation spec will produce an incorrect hardcoded v2 title and an incorrect hardcoded v2 subtitle, both of which those clauses expressly prohibit.
>
> _(v2.12.0: the v2.7.1 form of this note scoped its warning to the **subtitle alone**. That scoping is exactly what left the `ver` **title** cell reading as normative — and it is the defect Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` caught in shipped code, where `PrivacyStatus.tsx` hardcoded "Verified — private" as the v1 title. A note that guards one cell of a two-cell row does not guard the row.)_
````

---

### OP 8 — docs/03-architecture-design-sdd.md — §10.12.3: annotate the three-state reference table `ver` TITLE cell as v2-only reference copy

FIND:
````
| `ver` | `privacy ver` | `--green` (#2C7A5B) | `--green-soft` (#E7F1EC) | #1f5a42 | "Verified — private" | "Your vote counts. Your identity is not stored." *(v2 ZK backing only — see backing-aware copy below)* |
````
REPLACE WITH:
````
| `ver` | `privacy ver` | `--green` (#2C7A5B) | `--green-soft` (#E7F1EC) | #1f5a42 | "Verified — private" *(v2 ZK backing only — the v1 default title is "Verified"; see backing-aware copy below)* | "Your vote counts. Your identity is not stored." *(v2 ZK backing only — see backing-aware copy below)* |
````

---

### OP 9 — docs/03-architecture-design-sdd.md — §10.12.3 backing-aware sub-table: v1 (conventional) row title "Verified — private" → "Verified" (DELETES the words "— private" from that one cell; that deletion is the point of this op)

FIND:
````
| v1 (conventional): `getProperties().unlinkable = false`, or call absent/error — **fail-honest default** | "Verified — private" | "Your vote counts. How you voted is never made public." | All other cases, including getProperties() failure or absent backing information |
````
REPLACE WITH:
````
| v1 (conventional): `getProperties().unlinkable = false`, or call absent/error — **fail-honest default** | "Verified" *(v2.12.0 — this cell read "Verified — private"; overruled, see the banned-words analysis below)* | "Your vote counts. How you voted is never made public." | All other cases, including getProperties() failure or absent backing information |
````

---

### OP 10 — docs/03-architecture-design-sdd.md — §10.12.3: supersede the v2.7.0 FR-131 banned-words ruling on the title; retain the historical text verbatim; state the rule that replaces it

FIND:
````
**FR-131 banned-words analysis (v2.7.0, architect record):**

Title "Verified — private": the word "private" describes the **visibility of the holder's verified status** (private to the holder; never published per-individual; aggregate-only by FR-124(b)), NOT voting behaviour. FR-131's ban ("MUST NOT use 'private' to describe v1 voting behaviour" — §10.13.6 DES-098) does not apply to a title describing *status visibility*. The title is COMPLIANT in v1 and requires no change.
````
REPLACE WITH:
````
**FR-131 banned-words analysis (v2.7.0, architect record — the TITLE ruling is SUPERSEDED at v2.12.0):**

> **SUPERSEDED — OVERRULED at v2.12.0 (2026-09-06).** Superseding authority: **Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`** (pre-mount blocker raised 2026-09-02 against the shipped `PrivacyStatus.tsx` title) and the **approver's direction of 2026-09-05 (Rathish)**. **The rule that now governs, in v1 and in v2:** the word **"private" may appear on a voting-adjacent status badge only against a live `IEligibilityVerifier` backing that declares `getProperties().unlinkable === true`.** Against a v1 conventional backing the `ver` title is **"Verified"** — the fail-honest default, exactly as the subtitle already was under clause 7.
>
> **Why the v2.7.0 reading fails.** FR-131's closing sentence (Doc 02 §4.45) bans "private", "anonymous", "receipt-free" and "secure" across *the v1 product — its UI, README, and all public-facing materials* — wherever they describe v1 voting behaviour. It carves out no exception for "status visibility". The `ver` badge is a persistent element on the same authenticated surfaces from which a member votes, and it sits directly above a subtitle whose entire subject is the member's vote ("Your vote counts…"); a reasonable member reads the badge as a claim about the ballot. In v1 that claim is false: the platform database can see vote direction and party membership (FR-131(b)). An architect's reading of what a word "describes" cannot outrank what a member is likely to understand from it — that is the whole point of the honesty doctrine (§0.5 of Doc 04; DES-098).
>
> **Implemented and guarded, not merely written:** `packages/ui/src/PrivacyStatus.tsx` constants `VER_TITLE_V1 = 'Verified'` and `VER_TITLE_V2 = 'Verified — private'`, selected by `backingProperties?.unlinkable === true`, with `aria-label` following the selected title; **UT-0759** asserts all four paths (prop absent / `false` / `true` / malformed). The historical v2.7.0 text is retained verbatim below per annotate-don't-delete so the reversal is legible; it **MUST NOT** be relied on.

_(v2.7.0 text — SUPERSEDED, retained for the trail:)_ Title "Verified — private": the word "private" describes the **visibility of the holder's verified status** (private to the holder; never published per-individual; aggregate-only by FR-124(b)), NOT voting behaviour. FR-131's ban ("MUST NOT use 'private' to describe v1 voting behaviour" — §10.13.6 DES-098) does not apply to a title describing *status visibility*. The title is COMPLIANT in v1 and requires no change.

**v1 title "Verified" (v2.12.0, architect record — this is the ruling in force):** no banned word is present; the title makes no claim about the ballot at all. It is truthful for v1 — the holder's COUNTING-tier eligibility (FR-123) is real, and the fact of it is restricted-class and never published per-individual (FR-124(b)). Grade-8 reading level; one word. **COMPLIANT.** **v2 title "Verified — private"** renders only when the live backing declares `unlinkable === true`, the one case in which "private" is true of the ballot; clause 7's proxy annotation applies to the title exactly as it applies to the subtitle — any future backing declaring `unlinkable: true` MUST satisfy the full "no identity at rest" guarantee by design review before the v2 title may render behind it. **COMPLIANT in v2 only.**
````

---

### OP 11 — docs/03-architecture-design-sdd.md — §10.12.3: add normative binding clause 9 (backing-aware TITLE selection), inserted before the leak-check verdict

FIND:
````
**Leak-check verdict (FR-124 applied to entire wireframe):**
````
REPLACE WITH:
````
9. **Backing-aware `ver` TITLE selection (FR-131; v2.12.0 — clause 7's rule, applied to the title):** The title rendered in the `ver` state MUST be selected by the same live-backing test as clause 7 applies to the subtitle. The v2 title ("Verified — private") MUST render **ONLY** when the live `IEligibilityVerifier` backing declares `getProperties().unlinkable === true`. The v1 title ("Verified") MUST render in every other case — `unlinkable = false`, the call failing, the property malformed, or backing information absent. **Absence of backing information MUST fall back to the v1 title — the fail-honest default; the v2 title MUST never be assumed.** The component's accessible name (`aria-label`) MUST carry the *selected* title rather than a fixed string, so assistive technology never announces a claim the visual badge does not make. Clause 7's proxy annotation applies unchanged to the title: `getProperties().unlinkable` is a **proxy** for the full "no identity at rest" guarantee, and any future backing declaring `unlinkable: true` MUST satisfy that guarantee by design review before the v2 title may render behind it. **Why this clause exists, stated plainly:** v2.7.0 ruled the title compliant in v1 on a "status visibility" reading, and clause 7 was written for the subtitle alone — so the shipped badge read "Verified — private" against a conventional backing, on the same authenticated surfaces from which a member votes. Doc 09 v1.3.0 recorded that as `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02); the approver overruled the v2.7.0 reading on 2026-09-05; the banned-words analysis above records the reversal. **Clause 7's body is deliberately unchanged** — it is subtitle-scoped and remains correct as written; this clause is its title-side twin and the two MUST be read together. Implemented at `packages/ui/src/PrivacyStatus.tsx` (`VER_TITLE_V1` / `VER_TITLE_V2`); guarded by **UT-0759** (four paths: prop absent / `false` / `true` / malformed).

**Leak-check verdict (FR-124 applied to entire wireframe):**
````

---

### OP 12 — docs/03-architecture-design-sdd.md — §10.13.3: add the owed DES-096 ballot-state-accessor clause (carried Low #5)

FIND:
````
### 10.13.4 IS_INSECURE_MOCK() and the promotion gate
````
REPLACE WITH:
````
**Owed — ballot-state accessor (added v2.12.0; carried Low #5 from v2.11.2).** The interface above is `castBallot`, `changeBallot`, `computeTally`, `getTallyProperties` **and no more** — it never reports the ballot's state. §10.13.13(a) makes the ballot layer authoritative over the FR-091 `VOTE` / `DECISION` / `IMPLEMENTATION` stages in **both** versions, and that rule is unsatisfiable against an interface with nothing to derive FROM; the only way to render those stages without an accessor is to track them independently, which is precisely what the rule forbids. **DES-096 MUST gain a ballot-state accessor before the v1 ballot layer is built:** a read-only method returning the current ballot state for an election, with the same v1/v2 backing symmetry as the four methods above (v1 — database read; v2 — MACI/tally-layer state), and with **no** capability to set, force, skip or reorder a state. Not urgent today: the proposals and debate layer derives nothing and stops at `admitToBallot()`, so this blocks no current work. Owner: **Ravi Deshmukh (architect)**. Tracked as the owned §13 debt row "DES-096 exposes no ballot-state accessor…" entered at v2.11.2 — this clause is that row's design-side counterpart, whose absence was the fifth Low carried from v2.11.2 (the debt was owned in §13 but invisible to anyone reading the seam spec itself).

### 10.13.4 IS_INSECURE_MOCK() and the promotion gate
````

---

### OP 13 — docs/03-architecture-design-sdd.md — §10.13.6: align the DES-098 element's clause (1) with FR-131(a)'s three explicit denials

FIND:
````
**Element:** Wherever a vote is cast in v1, the UI MUST display a plain-language honesty notice before the ballot is confirmed. The notice MUST state: (1) this vote uses conventional authentication and is NOT the private receipt-free ballot; (2) the platform database CAN see vote direction and party membership; (3) the cryptographic private ballot — where the platform is technically unable to see it — is available when the platform upgrades to the v2 privacy layer; (4) the tally result IS publicly auditable and published to the blockchain.
````
REPLACE WITH:
````
**Element:** Wherever a vote is cast in v1, the UI MUST display a plain-language honesty notice before the ballot is confirmed. The notice MUST state: (1) this ballot uses conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; (2) the platform database CAN see vote direction and party membership; (3) the cryptographic private ballot — where the platform is technically unable to see it — is available when the platform upgrades to the Definition-B (v2) privacy layer; (4) the tally result IS publicly auditable and published to the blockchain.

_(v2.12.0: clause (1) previously read "this vote uses conventional authentication and is NOT the private receipt-free ballot". That under-stated **FR-131(a)**, which requires all three denials by name. FR-131 (Doc 02 §4.45) is the normative wording — not this paraphrase and not any string in code. The shipped copy is `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle` / `banner.notReceiptFreeBody` (and its `ar.ts` mirror, native-speaker review owed per Doc 06 §7 item 17), guarded by **UT-0887**, which bans each of the four FR-131 words unless immediately negated, bans "private"/"secure" outright, and separately asserts that clauses (a), (b) and (c) are present.)_
````

---

### OP 14 — docs/03-architecture-design-sdd.md — §10.13.6: extend the banned-words requirement bullet to voting-adjacent status copy and record the overruling

FIND:
````
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour
````
REPLACE WITH:
````
- MUST NOT use the words "private", "anonymous", "receipt-free", or "secure" to describe v1 voting behaviour — in the notice, in any other v1 UI string, in the README, or in any public-facing material (FR-131 closing sentence, Doc 02 §4.45). **v2.12.0 clarification (normative):** this ban reaches voting-adjacent **status** copy, not only notice text. "private" may appear on a status badge **only** against a backing declaring `getProperties().unlinkable === true` (§10.12.3 clauses 7 and 9). The v2.7.0 "status visibility" carve-out is **overruled** — Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`; approver 2026-09-05. The four words MAY appear **negated** ("NOT anonymous", "NOT receipt-free") because FR-131(a) mandates exactly that phrasing; a blanket substring ban would fail the mandated text, which is why UT-0887 is negation-aware
````

---

### OP 15 — docs/03-architecture-design-sdd.md — §10.13.12: annotate FR-107 in the Traces footer as related-only, not a DES assignment (carried Low #4)

FIND:
````
**Traces:** DES-097, DES-100 (retention), DES-102 (cap), DES-080 (schema guard), ADR-024 §(b),
ADR-013 §2, CON-002, CON-008, CON-015, FR-010, FR-013, FR-022, FR-064, FR-107, FR-130, NFR-010.
````
REPLACE WITH:
````
**Traces:** DES-097, DES-100 (retention), DES-102 (cap), DES-080 (schema guard), ADR-024 §(b),
ADR-013 §2, CON-002, CON-008, CON-015, FR-010, FR-013, FR-022, FR-064, FR-107 *(v2.12.0 — carried
Low #4 discharged: **related only, and expressly NOT a DES assignment.** The store's
recorded-not-erased rule serves FR-107's append-only property **for party and membership records
only**. FR-107 is platform-wide and its lifecycle is still undesigned; **Doc 08 holds the FR-107
Must row OPEN with DES = none** (`G-TRACE + G-PHASE3`, gap-log entry 98) and §15 disclaims the link
in terms. This footer is not the `FR/NFR → DES` register — §5.2 is — but it was listing FR-107
among DES-097(b)'s IDs with nothing marking the distinction, which is how a disclaimed link gets
published anyway)*, FR-130, NFR-010.
````

---

### OP 16 — docs/03-architecture-design-sdd.md — §13: replace the retired "anonymous but not receipt-free" repayment text with the FR-131 truth

FIND:
````
| Public tallies in Phase 1 | MACI is a Phase-3 deliverable | MACI flag; client MUST state plainly that Phase-1 votes are anonymous but not receipt-free | Medium (disclosed) |
````
REPLACE WITH:
````
| Public tallies in Phase 1 | MACI is a Phase-3 deliverable | MACI flag; the client MUST state plainly, **per FR-131 / DES-098 (§10.13.6)**, that a Phase-1 (v1) vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot — where the platform is technically unable to see either — arrives with the Definition-B (v2) privacy layer. _(v2.12.0: this cell read "client MUST state plainly that Phase-1 votes are anonymous but not receipt-free" — a claim **FR-131 forbids** and the v1 build does not make. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05. **ADR-024 §(d) quotes the retired wording** as the precedent pattern for DES-098; that quotation is historical and is not the rule — ADRs are decision records and are not edited here.)_ | Medium (disclosed) |
````

---

### OP 17 — docs/03-architecture-design-sdd.md — §15: add "secure" and the status-badge rule to the FR-131 → DES-098 trace row

FIND:
````
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" to describe v1 voting; ADR-024 §(d); WCAG 2.2 AA (DES-081). US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface. |
````
REPLACE WITH:
````
| FR-131 (v1 honesty notice MUST — minted by PO, Doc 02 v2.6.0, 2026-08-23; owner Nadia Hassan; traces BR-005/BR-009) | DES-098 (v1 honesty notice) | Non-dismissable plain-language notice on SCR-13 (ballot booth) and SCR-14 (post-vote confirmation); MUST NOT use "private", "anonymous", "receipt-free" **or "secure"** to describe v1 voting — all four words, per FR-131's closing sentence _(v2.12.0: this cell listed three of the four)_; the ban reaches voting-adjacent **status** copy as well as notice text (§10.12.3 clauses 7 and 9 — "private" on a status badge only against `unlinkable === true`); ADR-024 §(d); WCAG 2.2 AA (DES-081). US layer: owed — PO to mint US from FR-131 covering the SCR-13/SCR-14 notice surface. |
````

---

### OP 18 — docs/03-architecture-design-sdd.md — §15: add the v2.12.0 amendment sub-table (DES-094 title, DES-098 alignment)

FIND:
````
## 16. Open questions
````
REPLACE WITH:
````
**v2.12.0 DES-094 title correction + DES-098 alignment (§10.12.3, §10.13.6, §13, 2026-09-06):**

| Requirement | DES | Notes |
|---|---|---|
| FR-131 (v1 honesty — closing sentence: the v1 product MUST NOT use "private", "anonymous", "receipt-free" or "secure" to describe v1 voting behaviour); FR-124(b) (verified status restricted-class); H-15, H-16, T-01, T-02 | **DES-094 amended** — backing-aware `ver` **TITLE**: v1 conventional backing renders **"Verified"** (fail-honest default, all cases where `unlinkable !== true`); v2 ZK backing renders "Verified — private" (only when `getProperties().unlinkable === true`). **Clause 9** added to the normative binding list, applying clause 7's test to the title and to the `aria-label`; the v2.7.0 "status visibility" ruling is marked SUPERSEDED in place | **REVERSAL of a v2.7.0 architect ruling.** Superseding authority: Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03` (pre-mount blocker, 2026-09-02) + approver direction 2026-09-05 (Rathish), re-affirmed 2026-09-06. Already built and guarded: `packages/ui/src/PrivacyStatus.tsx` `VER_TITLE_V1`/`VER_TITLE_V2`, **UT-0759** (four paths). **US layer: no new US** — this is a copy-selection constraint on the existing DES-094 component, and the component ships with it |
| FR-131(a) (the notice MUST state NOT anonymous, NOT receipt-free, NOT coercion-resistant); FR-131 closing sentence | **DES-098 aligned** (§10.13.6) — element clause (1) now carries all three denials by name; the banned-words bullet now covers voting-adjacent status copy and records the overruling; §13's "Public tallies in Phase 1" repayment cell now states the FR-131 truth instead of "Phase-1 votes are anonymous but not receipt-free" | Shipped copy: `apps/web/src/i18n/en.ts` `banner.notReceiptFreeTitle`/`Body` (+ `ar.ts` mirror), `packages/protocol/src/flags.js` `MACI_VOTING.description`, `packages/contracts/src/core/Governor.sol` NatSpec, `packages/sdk/src/client.js` `#tenureSignals`; guarded by **UT-0887**, **UT-0888**. **Still owed against DES-098** (unchanged by this version, carried openly): the **acknowledge-to-proceed control** on SCR-13 is not built — the banner is non-dismissable but has no acknowledgement step (US-0134); and FR-131 has **no `US`/`TC`/RTM row** yet |

## 16. Open questions
````

---

### OP 19 — docs/03-architecture-design-sdd.md — §16 Q17: body "exercises neither" → "exercises none of the three" (carried Low #1, half 1)

FIND:
````
| Q17 | **None of the THREE ballot-state representations is covered by a differential test.** _(v2.11.2: this row said "neither … enum", counting two, after the reconciliation sub-table had established three.)_ `Governor.State` (Solidity, 7 values), `PROPOSAL_STATE` (JS mirror, 8 values) and `PROPOSAL_STATE_ENUM` (SDK ordinal-indexed decode array, 7 values) all express the same machine, differ by name in one state (`Timelocked` / `SUCCEEDED_TIMELOCK`), and differ by one **vestigial** value (`PROPOSAL_STATE.DRAFT` has no producer anywhere — `stateAt()` never returns it and no contract declares it). `differential.test.mjs` exercises neither. §10.13.13(a) now makes the ballot layer authoritative over derived stage positions, which raises the cost of an undetected divergence between the reference mirror and the chain. **Write the ordinal-indexing case first:** `PROPOSAL_STATE_ENUM` decodes by position, so a Solidity enum reorder silently remaps every state with nothing to raise an error. Also owed: a decision on whether to retire `PROPOSAL_STATE.DRAFT` or give it a producer. | Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead) | Before the v2 seam swap |
````
REPLACE WITH:
````
| Q17 | **None of the THREE ballot-state representations is covered by a differential test.** _(v2.11.2: this row said "neither … enum", counting two, after the reconciliation sub-table had established three. **v2.12.0:** the **body** still read "exercises neither" — v2.11.2 corrected the title and the annotation but not the body, and its changelog over-claimed otherwise. Corrected here; this was carried Low #1.)_ `Governor.State` (Solidity, 7 values), `PROPOSAL_STATE` (JS mirror, 8 values) and `PROPOSAL_STATE_ENUM` (SDK ordinal-indexed decode array, 7 values) all express the same machine, differ by name in one state (`Timelocked` / `SUCCEEDED_TIMELOCK`), and differ by one **vestigial** value (`PROPOSAL_STATE.DRAFT` has no producer anywhere — `stateAt()` never returns it and no contract declares it). `differential.test.mjs` exercises **none of the three**. §10.13.13(a) now makes the ballot layer authoritative over derived stage positions, which raises the cost of an undetected divergence between the reference mirror and the chain. **Write the ordinal-indexing case first:** `PROPOSAL_STATE_ENUM` decodes by position, so a Solidity enum reorder silently remaps every state with nothing to raise an error. Also owed: a decision on whether to retire `PROPOSAL_STATE.DRAFT` or give it a producer. | Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead) | Before the v2 seam swap |
````

---

### OP 20 — docs/04-test-strategy-master-plan.md — header: version 1.2.0 → 1.3.0, Status → In Review, ISS-10 recorded as discharged

FIND:
````
Version:       1.2.0
Status:        Approved — 04-test-strategy-master-plan-v1.2.0-technical-cycle3.md (PASS 98%,
               0C/0H/0M/1L; reviewer: engineer, neutral, PM-assigned). Loop trajectory
               46% → 94% → 98% across cycles 1–3. The surviving Low (ISS-10: §22's architect
               Approvals row still describes the v1.1.0 submission) is accepted on this
               version and owed on the next touch.
````
REPLACE WITH:
````
Version:       1.3.0
Status:        In Review — **FR-131 cascade (v1.3.0, 2026-09-06).** Two statements in this plan
               asserted the retired "votes are anonymous but not receipt-free" framing —
               §8 `TS-ADV-02` case **A-02.6** and §13 **OPEN-01** — and both were false on both
               counts: v1 votes are **not** anonymous, and the `MACI_VOTING` flag description no
               longer says they are. Corrected here to the FR-131 truth, with the substantive
               point of each preserved unchanged: `FR-031`, `FR-032` and `NFR-003` remain **Must**
               guardrails that v1 does not deliver, `TS-ADV-02` still cannot pass in v1, and
               `OPEN-01` remains a Definition-B Gate-2 blocker. **ISS-10 (the Low carried from
               v1.2.0 and owed on the next touch) is discharged:** §22's architect Approvals row
               now describes this submission. §0.5 S4/S5 needed no change — the honesty doctrine
               was already stated correctly there, and it is the standard this correction applies.
               Prior verdict (superseded, recorded for the trail): **Approved** —
               04-test-strategy-master-plan-v1.2.0-technical-cycle3.md (PASS 98%, 0C/0H/0M/1L;
               reviewer: engineer, neutral, PM-assigned; loop trajectory 46% → 94% → 98% across
               cycles 1–3).
````

---

### OP 21 — docs/04-test-strategy-master-plan.md — header: re-pin SDD and Doc 06 sources; set Last updated

FIND:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.16.3**, Approved 2026-08-30)
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.3.0**, In Review — OPEN-21)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.11.2**, Approved)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md **v2.4.3**, Approved)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.4.4**, Approved)
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
Last updated:  2026-09-01
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY (docs/02-requirements-srs.md **v2.16.3**, Approved 2026-08-30) —
               FR-131 §4.45 is the normative wording this plan tests against
               BKLG-TRUMOCRACY (docs/05-product-backlog.md **v2.3.0**, In Review — OPEN-21)
               SDD-TRUMOCRACY (docs/03-architecture-design-sdd.md **v2.12.0**, In Review — the
               matching half of this same FR-131 cascade; re-pinned from v2.11.2 at v1.3.0)
               CODE-TRUMOCRACY (docs/06-coding-and-ut.md **v2.5.1**, Approved — re-pinned from
               v2.4.3 at v1.3.0; v2.5.0/v2.5.1 carry the FR-131 code drop and UT-0759/0887/0888)
               TC-TRUMOCRACY (docs/07-test-cases-suites.md **v2.4.4**, Approved)
               REL-TRUMOCRACY (docs/09-release-notes.md **v1.3.0**) — `REL-LIM-18` / `ISS-03`,
               the defect this cascade closes
               ADR-001 … ADR-025 (docs/adr/ — 25 ADRs present, verified 2026-08-31)
Last updated:  2026-09-06
````

---

### OP 22 — docs/04-test-strategy-master-plan.md — changelog: insert the v1.3.0 entry above the v1.2.0 entry

FIND:
````
Changelog:     2026-09-01 v1.2.0 — **Rework cycle 2 against
````
REPLACE WITH:
````
Changelog:     2026-09-06 v1.3.0 — **FR-131 cascade.** Minor bump: normative test-criterion copy
               changes. Routed in with the Doc 03 v2.12.0 cascade from Doc 06 v2.5.1 §7 item
               26(a), `artifacts/engineer-2026-09-05T1700.md` (commit 0a5c542; merged to main in
               PR #19 as 84e2203), Doc 09 v1.3.0 `REL-LIM-18` / `ISS-03`, and the approver's
               direction of 2026-09-05 / 2026-09-06 (Rathish).
               **A-02.6 (§8, `TS-ADV-02`) CORRECTED — it was false on both counts.** The pass
               criterion read "The UI states that votes are anonymous but **not** receipt-free —
               the flag's own description requires it." v1 votes are **not anonymous**, and
               `packages/protocol/src/flags.js` `MACI_VOTING.description` now says exactly that.
               The case now asserts the FR-131(a)/(b)/(c) content and the four-word ban, and names
               the tests that already enforce it (`UT-0887`, `UT-0888`, `UT-0759`). Its
               substantive point is unchanged: this **still** does not satisfy `FR-031`/`FR-032`/
               `NFR-003`, which are **Must**, and it remains recorded as `OPEN-01`.
               **OPEN-01 (§13) CORRECTED** for the same false clause ("Without MACI, votes are
               anonymous but **not** receipt-free — the flag's own description says so"), with its
               impact, owners and Gate-2-blocker status unchanged. A finding that a Must guardrail
               is undelivered does not need a false premise to stand.
               **Why this is a cascade and not a new opinion:** §0.5 **S4** and **S5** already
               stated the correct rule — no v1 surface may claim anonymity, unlinkability,
               receipt-freeness, coercion resistance, one-person-one-vote or zero-knowledge except
               inside a DES-098 notice denying it, build-failing. A-02.6 and OPEN-01 were this
               plan failing its own S5. Neither S4 nor S5 is changed.
               **ISS-10 (the Low carried from v1.2.0, owed on the next touch) CLOSED** — §22's
               architect Approvals row described the v1.1.0 submission; it now describes v1.3.0.
               §22's "Downstream" note re-pins Doc 06 from Approved v2.4.3 to Approved v2.5.1.
               2026-09-01 v1.2.0 — **Rework cycle 2 against
````

---

### OP 23 — docs/04-test-strategy-master-plan.md — §8 TS-ADV-02: correct case A-02.6's pass criterion to the FR-131 truth

FIND:
````
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it. **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** |
````
REPLACE WITH:
````
| A-02.6 Flag-state disclosure | `MACI_VOTING` is off (its production default) | The UI states, before the ballot is confirmed, that the vote is cast through conventional authentication and is **NOT anonymous, NOT receipt-free and NOT coercion-resistant**; that the platform database **CAN** see vote direction and party membership; and that the cryptographic private ballot arrives with the Definition-B (v2) privacy layer — `FR-131`(a)/(b)/(c) via `DES-098`. The four banned words ("private", "anonymous", "receipt-free", "secure") appear **only negated**, never as a claim. Enforced today by `UT-0887` (rendered banner, negation-aware), `UT-0888` (flag description) and `UT-0759` (the `ver` badge title renders "Verified — private" only against `unlinkable === true`). **This does not satisfy `FR-031`/`FR-032`/`NFR-003`, which are Must. Recorded as OPEN-01.** _(v1.3.0: this cell read "The UI states that votes are anonymous but **not** receipt-free — the flag's own description requires it." False on both counts — v1 votes are not anonymous, and the flag description no longer says they are. FR-131's closing sentence forbids the claim outright. Corrected per Doc 09 v1.3.0 `REL-LIM-18`; approver 2026-09-05.)_ |
````

---

### OP 24 — docs/04-test-strategy-master-plan.md — §13 OPEN-01: correct the false premise, keeping the finding intact

FIND:
````
| **OPEN-01** | `MACI_VOTING` defaults to **off in staging and production** and ADR-006 defers MACI to Phase 3, but `FR-031`, `FR-032` and `NFR-003` (receipt-freeness, silent re-vote) are **Must** in Doc 02 and are guardrails, not walking-skeleton items. Without MACI, votes are anonymous but **not** receipt-free — the flag's own description says so | A Must guardrail is not delivered at v1. `TS-ADV-02` cannot pass. **Gate-2 blocker unless Doc 02 or the roadmap changes** | Aisha Nkemdirim / Priya Raghunathan |
````
REPLACE WITH:
````
| **OPEN-01** | `MACI_VOTING` defaults to **off in staging and production** and ADR-006 defers MACI to Phase 3, but `FR-031`, `FR-032` and `NFR-003` (receipt-freeness, silent re-vote) are **Must** in Doc 02 and are guardrails, not walking-skeleton items. Without MACI a vote is **not anonymous, not receipt-free and not coercion-resistant**, and the platform database **can** see vote direction and party membership — the flag's own description says exactly that, and `FR-131`/`DES-098` require the UI to say it before every ballot _(v1.3.0: this clause read "votes are anonymous but **not** receipt-free — the flag's own description says so", which was false on both counts and is the framing `FR-131` forbids; corrected per Doc 09 v1.3.0 `REL-LIM-18`. The finding itself is unchanged — it never depended on the premise)_ | A Must guardrail is not delivered at v1. `TS-ADV-02` cannot pass. **Gate-2 blocker unless Doc 02 or the roadmap changes** | Aisha Nkemdirim / Priya Raghunathan |
````

---

### OP 25 — docs/04-test-strategy-master-plan.md — §22: architect Approvals row now describes the v1.3.0 submission (closes carried Low ISS-10)

FIND:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-08-31 | **v1.1.0, Status: In Review.** Rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L). ISS-01…ISS-07 all addressed. _(v1.0.0 was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected here per ISS-04, `OPEN-09` re-scoped.)_ |
````
REPLACE WITH:
````
| Architect (Accountable, author) | **Ravi Deshmukh** | Submitted for review | 2026-09-06 | **v1.3.0, Status: In Review.** FR-131 cascade — `A-02.6` and `OPEN-01` corrected off the retired "votes are anonymous but not receipt-free" framing; `ISS-10` (carried from v1.2.0) closed by this row. _(Row history: **v1.2.0** was Approved on the cycle-3 review, PASS 98%, 0C/0H/0M/1L — the surviving Low being that this row still described v1.1.0, which is the defect this update closes. **v1.1.0** was submitted 2026-08-31, rework cycle 1 against the v1.0.2 technical review (FAIL 46%; 2C/2H/2M/1L), ISS-01…ISS-07 all addressed. **v1.0.0** was submitted 2026-08-09 under an incorrect `Owner:` line naming Priya Raghunathan as Principal Architect; Doc 02 §2.7 lists her as Product Owner and Doc 03 names Ravi Deshmukh as Principal Architect — corrected at v1.1.0 per ISS-04, `OPEN-09` re-scoped.)_ |
````

---

### OP 26 — docs/04-test-strategy-master-plan.md — Downstream note: re-pin Doc 06 from Approved v2.4.3 to Approved v2.5.1

FIND:
````
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure were built at the start of Coding in
**Doc 06** (Approved v2.4.3), before feature code — `packages/contracts`'s test workspace is now real
and **`OPEN-17` is closed**.
````
REPLACE WITH:
````
Suites defined here become cases in **Doc 07 (Test Cases)** and are mapped in **Doc 08 (RTM)**. The
unit-test standard and the physical repository structure were built at the start of Coding in
**Doc 06** (Approved **v2.5.1**; re-pinned at v1.3.0 from the stale v2.4.3 pin), before feature code
— `packages/contracts`'s test workspace is now real and **`OPEN-17` is closed**. Doc 06 v2.5.0/v2.5.1
carry the FR-131 code drop and the regression guards this plan cites at `A-02.6`: **UT-0887**
(rendered banner, negation-aware), **UT-0888** (flag description), **UT-0759** (`ver` title,
four paths). `TC` mints for these remain owed from Doc 07.
````

---

## End of spec — 26 operations (19 on Doc 03, 7 on Doc 04)
