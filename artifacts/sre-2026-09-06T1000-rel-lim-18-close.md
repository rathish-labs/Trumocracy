# SRE session note — 2026-09-06T10:00 — close `REL-LIM-18` in Doc 09

```
Role:      sre (Chen Wei — Reliability Lead)
Date:      2026-09-06
Trigger:   Doc 06 v2.5.1 §7 item 26(b); artifacts/engineer-2026-09-05T1700.md
Artifacts: artifacts/sre-2026-09-06T1000-rel-lim-18-spec.md   (anchored FIND/REPLACE spec, 11 ops)
           artifacts/sre-2026-09-06T1000-rel-lim-18-close.md  (this note)
Target:    docs/09-release-notes.md   v1.4.0 Approved -> v1.5.0 In Review
Index:     pre-registered by the project-manager; NOT modified by this session
```

## 1. What I did

Doc 06 v2.5.1 §7 item 26(b) routed the `REL-LIM-18` closure to the sre. I verified the closure
against `HEAD` myself, then authored an **11-op anchored FIND/REPLACE spec** for Doc 09 v1.5.0. I
did **not** edit `docs/` — the project-manager transcribes the spec mechanically.

I released nothing and deployed nothing. **Gate 2 is not approved**, and Doc 09's own verdict on
release `0.1.0` remains **HALTED** for the two reasons that each block it on their own (RTM Must-row
gaps; undrilled rollback). This session changes the state of one limitation row; it does not change
the release decision.

## 2. What I verified at `HEAD` (nothing taken on the commit message)

Commit **`0a5c542`** — "fix(honesty): state the FR-131 v1 truth in code, closing REL-LIM-18
(US-0134)", authored 2026-09-05, merged to `main` in **PR #19** (merge commit **`84e2203`**),
17 files, +1290/-52. Confirmed with `git show --stat 0a5c542` and `git log --oneline`.

All six sites read at `HEAD`, and all six are fixed:

| # | Site | State at `HEAD` |
|---|---|---|
| 1 | `packages/protocol/src/flags.js:42-47` (`MACI_VOTING.description`) | States NOT anonymous / NOT receipt-free / NOT coercion-resistant, platform DB CAN see direction, and that the normative wording is FR-131 not the string |
| 2 | `packages/contracts/src/core/Governor.sol:25-32` (NatSpec) | Both sentences replaced; adds an explicit "do not describe a v1 vote as anonymous, private, receipt-free or secure" instruction |
| 3 | `apps/web/src/i18n/en.ts:400-408` (`banner.notReceiptFreeTitle` / `notReceiptFreeBody`) | Title and body carry no banned word except negated; state (a)/(b)/(c) |
| 3b | `apps/web/src/i18n/ar.ts:359-366` (Arabic mirror) | Mirrors the same truth |
| 4 | `packages/sdk/src/client.js:450-459` (`#tenureSignals` comment) | Distinguishes the signal-array property from v1 voting; ends "Do not describe a v1 vote as anonymous." |
| 5 | `apps/web/src/components/ReceiptFreedomBanner.tsx:3-17` (doc comment) | Names the retired framing as retired; enumerates the (a)/(b)/(c) truth; forbids copying warning text out of the file |
| 6 | `packages/ui/src/PrivacyStatus.tsx:205,212,323-326` | `VER_TITLE_V1 = 'Verified'` is the fail-honest v1 default; the v2 title renders only when `backingProperties.unlinkable === true`, by the same clause-7 rule as the subtitle |

Regression guards present: `UT-0887` (`apps/web/test/safety-surfaces.test.tsx:112`), `UT-0759`
(`packages/ui/test/PrivacyStatus.test.tsx:198`), `UT-0888`
(`packages/protocol/test/party-and-regions.test.js:302`).

Suite: I ran `npm test` twice at `HEAD`. **Exit 0 both times; 619 tests** — contracts 95 /
protocol 151 / sdk 244 / ui 18 / indexer 16 / web 95 — matching Doc 06 v2.5.1's UT-inventory total
of 619. `apps/web/tsconfig.tsbuildinfo` was **not** left modified; the only dirty file in the tree
is `artifacts/memory-index.json`, which the project-manager pre-modified and which I did not touch.

`PrivacyStatus` mount check: exported at `packages/ui/src/index.ts:12`; every reference outside
`packages/ui` is an explicit **non-render** comment (`app/parties/page.tsx:19`,
`app/petitions/new/page.tsx:13,134`, `app/proposals/page.tsx:22`, `components/PartyMembership.tsx:26`,
`components/ProvisionalStatus.tsx:11`). **The component is still not mounted on any shipped surface.**

Doc 06 header confirmed at **v2.5.1, `Status: Approved`**; reviews
`artifacts/reviews/06-coding-and-ut-v2.5.0-technical-cycle1.md` (PASS 96%) and
`artifacts/reviews/06-coding-and-ut-v2.5.1-technical-cycle2.md` (PASS 98%) both present.

## 3. Decisions

1. **Closure is real; the halt is not lifted.** `REL-LIM-18` moves to Closed, but the spec says
   explicitly in three places that the fix is **merged to trunk and deployed nowhere**, and that
   closing it removes a blocker on a customer-facing v1 deployment without touching either of the
   two sufficient halt reasons. Doc 09 keeps its testnet-rehearsal posture.
2. **Two facts, both stated, on the `PrivacyStatus.tsx` blocker.** The pre-mount blocker is
   **cleared** (title backing-aware, v1 default `Verified`, `UT-0759`) **and** the component is
   **still unmounted**. The row says both in one sentence, because clearing the blocker removed the
   pre-mount *condition*, not the unmounted *state*.
3. **Annotate, do not delete.** The `REL-LIM-18` row keeps all four original cells **verbatim**
   inside the new ones, so a reader can still see what the five strings were and where. The only
   original token changed is the ID, which gains strikethrough — the register's house style for a
   closed row (`REL-LIM-03`, `-04`, `-07`).
4. **History is history.** No op edits the v1.1.0 to v1.4.0 document-history blockquotes. A new
   v1.5.0 entry is inserted ahead of the v1.4.0 entry in the house format.
5. **Minor bump, not patch.** A limitation row changing state is a content change: **v1.4.0 to
   v1.5.0**, `Status: In Review`, `Last updated: 2026-09-06`.
6. **No `REF-##` was opened.** The sre skill scopes `docs/refine-log.md` to *production* learnings
   (signal source: SLO / incident / metric / user-behavior). `REL-LIM-18` was a pre-release honesty
   defect found by document review on a product that is deployed nowhere, so it is not a production
   learning and the refine-log was left untouched. `docs/refine-log.md` is still the unfilled
   template; filling it remains sre debt (Doc 09 §7 owed-item 2).
7. **Two stale facts corrected in passing**, both falsified by the same commit: §0 and the internal
   record pinned Doc 06 at v2.4.3 (now v2.5.1), and the internal record "Document version" cell had
   been stuck at 1.2.0. Doc 07's own 610 figure was **left standing and explained**, not
   overwritten — 610 is what Doc 07 records, and correcting it is the tester's.

## 4. Sweep result (Doc 09, whole file)

Grepped `REL-LIM-18`, `PrivacyStatus`, `anonymous but`, `flags.js:44`, `normative warning`,
`warning text`, `ReceiptFreedomBanner`, `client.js:455`, `Governor.sol:25`, `en.ts:400`, `retired`,
`routed to the engineer`, `violating`, `violations in code` — and read every hit in context.

- **Live assertions found and fixed (5):** the customer-facing bullet (~L444), the `REL-LIM-18`
  register row (~L555), the Security/a11y internal-record cell (~L682), the §7 "beyond those two"
  paragraph (~L772), the §7 routing paragraph (~L800). All five are in the spec.
- **Left deliberately (history):** four hits inside the v1.1.0 to v1.4.0 document-history
  blockquotes (~L72, L130-131, L178, and the `ISS-03` / `ISS-05` entries). These are the record of
  past review cycles.
- **False positive:** `REL-LIM-09`, "cannot be promptly **retired**".
- **Nothing else** in Doc 09 asserts the retired framing, and nothing else claims the five strings
  are live. No affirmative "private" / "anonymous" / "receipt-free" / "secure" description of v1
  voting was introduced by any op; every occurrence in new text is negated, or quotes the retired
  framing as retired.
- **Two residuals outside Doc 09 — found open at `HEAD`, then closed by the architect while this
  session was running.** At `HEAD` (`84e2203`), `docs/03-architecture-design-sdd.md:2739` (§13,
  "Public tallies in Phase 1") still instructed the client to state that "Phase-1 votes are
  anonymous but not receipt-free", and `:1583` / `:1575` / `:1587` / `:393` (§10.12.3) still gave
  the v2 `ver` title as the v1 spec and ruled it compliant — the reading Doc 09 v1.3.0 `ISS-03`
  and the approver overruled. **Re-checked before finishing:** the architect delivered that
  cascade in parallel on 2026-09-06 as **Doc 03 v2.12.0**, `Status: In Review` (working tree,
  uncommitted; `artifacts/architect-2026-09-06T1000-fr131-cascade.md`). §13 now states the FR-131
  truth and §10.12.3 gives "Verified" as the v1 title. I rewrote **OP 11 and the OP 2 sweep
  paragraph** to say *delivered, pending its document-review* rather than *still owed* — Doc 09
  itself was untouched by that work, so all 11 FIND blocks remained valid and were re-verified
  after the rewrite.
- One residual is deliberately left: **ADR-024 §(d) quotes the retired wording** as the precedent
  pattern for `DES-098`. Doc 03 v2.12.0 records that as historical and not the rule — ADRs are
  decision records and are not edited. Noted here so the next sweep does not rediscover it.
- `REL-LIM-18` appears in **no other** `docs/` file, so no Doc 10 / 11 / 12 cascade is owed.

## 5. Verification of the spec itself

Every FIND block was **sliced out of the live file by line number**, not retyped, so it is
character-for-character identical (em dashes, backticks, trailing pipes). Each was counted with an
exact non-regex substring match over the whole document: **all 11 returned 1**. I then ran a
simulated applier over a copy: all 11 ops parsed and applied, 824 to 899 lines, the `REL-LIM-18` row
still carries exactly 6 pipes / 5 cells, and the applied result was re-swept for the retired framing
and for the FR-131 banned words.

## 6. Open items

| # | Item | Owner |
|---|---|---|
| 1 | Transcribe the 11-op spec into `docs/09-release-notes.md`; route v1.5.0 to a neutral `document-review` (business mode) | project-manager |
| 2 | `TC` rows for `UT-0887`, `UT-0759`, `UT-0888` plus the `FR-131` RTM row; refresh Doc 07 from 610 to 619 | tester |
| 3 | Doc 03 cascade **delivered** 2026-09-06 at v2.12.0 (`In Review`) — it still needs its `document-review` cycle before Doc 09 can cite it as settled | architect / project-manager |
| 4 | `REL-LIM-03` correction cascade into Doc 10 §3.1 / §6 and Doc 11 PB-ATTEST (carried since 2026-09-02) | sre |
| 5 | Fill `docs/refine-log.md` and register the `REF-02`, `REF-04` to `REF-10` routings Doc 09 cites in prose | sre |
| 6 | `REL-LIM-12`, `-15`, `-16` remain open; the two sufficient halt reasons are untouched | engineer / architect |

## 7. IDs touched

`REL-LIM-18` (Open to Closed) · `REL-LIM-02` (referenced, unchanged, still open) ·
`REL-LIM-12`, `-15`, `-16` (referenced, unchanged) · `FR-131` · `FR-132`(d) · `DES-094` · `DES-098` ·
`ADR-006` · `ADR-023` · `NFR-003` · `US-0134` · `UT-0887`, `UT-0759`, `UT-0888` ·
Doc 09 v1.4.0 to v1.5.0 · Doc 06 v2.5.1 · Doc 03 §10.12.3, §13 (routed, not edited) ·
commit `0a5c542`, PR #19, merge commit `84e2203`.
