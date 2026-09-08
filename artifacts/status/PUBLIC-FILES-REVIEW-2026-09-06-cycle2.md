# Public-files review — cycle 2 — README · CONTRIBUTING · SECURITY · CODE_OF_CONDUCT

> **Not a governed-document review.** These are public root files, not numbered documents. This
> report lives in `artifacts/status/` and deliberately avoids the `document-review` machine-parseable
> field names, so it cannot enter the SubagentStop hook's cycle counter for any document. The
> `document-review` **business** rubric and severity scale are the scoring frame only.

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md   (reworked, cycle 2)
                  CODE_OF_CONDUCT.md — unchanged this cycle, passed at cycle 1
Cycle:            2  (cycle 1: artifacts/status/PUBLIC-FILES-REVIEW-2026-09-06.md, FAIL 81%)
Rework note:      artifacts/technical-writer-2026-09-06T1900-public-files-cycle2.md
Read at:          working tree, 2026-09-06 (uncommitted)
Review date:      2026-09-06
Reviewer:         product-owner (Priya Raghunathan) — same assigned reviewer; author excluded
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   FR-131 clause (e), Doc 02 §4.45 — read at v2.17.1 (the document moved from
                  v2.17.0 during this cycle; see §6). Plus the approver directive
                  "nothing public may claim a guarantee v1 doesn't deliver".
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            93%   (cycle 1: 81%)
Critical 0 · High 0 · Medium 1 · Low 5      (cycle 1: 0 / 4 / 7 / 9)
VERDICT:          FAIL — narrowly, on one Medium. Half of that fix is mine, not the writer's.
```

---

## 1. Summary (BLUF)

**All twenty cycle-1 issues are closed, and closed properly — I re-derived every one against
source rather than taking the rework note's word for it.** The four Highs are gone: `REL-LIM-12`
is now stated truthfully and cited to `UT-0600`–`UT-0612` (which exist); the v1-data paragraph is
re-pinned to DES-100/DES-097/FR-132(b)/H-02 with all six allowlist fields named; the ADR-025
filename resolves; the SECURITY DES-098 paragraph now says the (a)–(c) banner **is** live at
`ProposalsAndDebate.tsx:489` and separates the clause (d) notice correctly; and the `H-0x`
collision is fixed with an explicit disambiguation note. Two fixes are better than what I asked
for: the writer re-sourced the `join`/`leave` parenthetical to **Doc 06 §7 item 5**, which does
name both and does link to scan finding H-02 — I had only asked for it to be dropped.

**One Medium remains, and it is a defect I introduced.** My cycle-1 ISS-08 told the writer to cite
**Doc 02 §13 tracked routing (j)** as the tracked home of the `/verify` copy question. The writer
did exactly that, in README and twice in CONTRIBUTING. Reading (j) in full this cycle, it is
titled "**Enrolment / verification landing copy**" and its scope is **two landing strings** —
`home.steps[0].body` and `home.promises[3]`. Doc 06 §7 item 26 names the same two. **The `/verify`
page's own copy is in no register at all.** Three public files now tell a reader that an open
honesty question is tracked, in a place that tracks different strings — and a navigable surface
making enrolment claims stays untracked, which is precisely the failure mode this project keeps
rediscovering.

I am not downgrading it to clear the bar. The text half is one qualifying clause; the document
half is a Doc 02 amendment **I owe as owner**.

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (93%)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict: FAIL.** Cycle 3 required, but it is a one-sentence rework plus a Doc 02 amendment
  routed to me. I scored and listed only; I edited none of the four files.

---

## 3. Per-criterion scores

| Criterion | Weight | C1 | C2 | Weighted | Notes |
|---|---|---|---|---|---|
| B1 Outcome & problem clarity | 20 | 88 | **96** | 19.2 | The Status block is now the strongest thing in the repo: v1/v2 split, the `REL-LIM-12` truth, and the new `FR-132`(d) real-person-not-unique-person paragraph. Line 7 correctly narrowed to "every **counting** member". |
| B2 Completeness | 15 | 85 | **95** | 14.25 | `/verify` inventoried in both places; six allowlist fields named; CONTRIBUTING's carve-out added in §1 **and** §6. |
| B3 Traceability & IDs | 20 | 70 | **88** | 17.6 | Every pin I flagged now resolves; guard table gives exact file:line for all five (all five re-verified this cycle). Docked for ISS-C2-01. |
| B4 Correctness & consistency | 15 | 72 | **91** | 13.65 | Both false statements gone. Three residual imprecisions, all erring toward **over**-disclosure (C2-02/03/05). |
| B5 Verifiability of claims (adapted) | 15 | 80 | **92** | 13.8 | Every new factual claim resolved to source. Docked for ISS-C2-01. |
| B6 Convention compliance | 15 | 94 | **96** | 14.4 | Still zero emails, zero personal names, personas correctly framed, licences correct. Duplication removed. |
| **Total** | **100** | 81% | — | **92.9 → 93%** | |

---

## 4. Cycle-1 issue closure — verified one by one, against source

| ID | Sev (C1) | Status | Evidence I checked this cycle |
|---|---|---|---|
| ISS-01 | High | **CLOSED** | `README:22-25` now: "written and unit-tested (`UT-0600`–`UT-0612`) — but nothing that actually deploys calls it yet, because nothing deploys… Treat it as a control that is owed, not one you can currently rely on." Matches Doc 09 `REL-LIM-12` exactly. **New claim verified:** `UT-0600`..`UT-0612` all exist in `packages/contracts/test/deployment-safety.test.mjs` (0600 :37, 0601 :73, 0602 :83, 0603 :95, 0604 :102, 0605 :113, 0606 :122, 0607 :44, 0608 :56, 0609 :65, 0610 :129, 0611 :143, 0612 :147), and the range matches `REL-LIM-12`'s own trace cell. |
| ISS-02 | High | **CLOSED** | `README:66-67` now cites Doc 03 §10.13.9 (`DES-100`), §10.13.5 (`DES-097`) and Doc 02 §16.4 `H-02` — all three verified to be the right sections. The dead §10.12.3 pin is gone. |
| ISS-03 | High | **CLOSED** | `SECURITY:40-47`. Re-verified every element: `ReceiptFreedomBanner` mounted at `ProposalsAndDebate.tsx:489`; `UT-0887` guards it; `party_governance` on in prod and `maci_voting` off, so it renders; clause (d) notice separately live at the parties directory per Doc 06 §7 **item 21**; item 26(d) is the acknowledge control; SCR-13/SCR-14 remain owed per item 21. All correct. |
| ISS-04 | High | **CLOSED** | `SECURITY:60-76`. New section "Open security-scan findings (Doc 06 §5.3)" with an explicit note that Doc 02 §16.4 reuses the same short ids for a different register, and "(Doc 06 §5.3)" on each of the four. "Governance gaps" now holds only `PREREQ-01` and `C-05`, which is the correct filing. |
| ISS-05 | Medium | **CLOSED** | `README:61` → `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md`, which exists. |
| ISS-06 | Medium | **CLOSED** | `README:62-69` — "at least six operational fields", all six named, matching the `FR-132`(b) allowlist exactly (`phone_hash`, `subject_id_hash`, id-verified flag, age-verified flag, issuing region, verification timestamp). Design-vs-demo clause added. (See ISS-C2-02/03 for two residual imprecisions in the same passage.) |
| ISS-07 | Medium | **CLOSED** | `README:32-36`, a full paragraph, plus line 7 narrowed to "Every **counting** member has exactly one vote when voting ships — see the Status block". Cites `FR-132`(d), Doc 02 §4.46. This is the fix I most wanted and it is better than what I specified. |
| ISS-08 | Medium | **CLOSED** (residue → ISS-C2-01) | `README:105-106` and `:124-130`. `/verify` now in both the layout block and the inventory, labelled "placeholder… not behind a feature flag and is wired to nothing". Verified: no flag in `app/verify/page.tsx`; linked at `SiteHeader.tsx:35`. Both quoted strings verified verbatim — `en.ts:79-80` "The document never leaves your phone", `en.ts:90` "…which cannot be traced back to you". The writer correctly did **not** rule on the copy. |
| ISS-09 | Medium | **CLOSED** | `README:187` — "**the v2 target vision, not what is built** (read its §0 first)". Matches Doc 01 v2.1.0's own §0 and Classification line. |
| ISS-10 | Medium | **CLOSED** | `SECURITY:8-12` — MS-09 restated as a "**placeholder offset only**… explicitly says not to use it for scheduling… Treat MS-09 as 'not yet planned'". Matches Doc 13's ⚠ block (lines 330-338). MS-04 correctly left as a real tracked date (Doc 13 excludes MS-04..MS-08 from the caveat). |
| ISS-11 | Medium | **CLOSED** (residue → ISS-C2-04) | `CONTRIBUTING:37-43` (§1 carve-out) and `:154-157` (§6 bullet). Both name the enrolment class, route it to the product-owner, and say it is unruled. |
| ISS-12 | Low | **CLOSED** | 619 → **624** at `README:151` and `CONTRIBUTING:105`. Matches Doc 06 v2.6.0's recorded suite (web 100, +5 for UT-0889). |
| ISS-13 | Low | **CLOSED** | `README:103-104` adds `packages/ui/`, with the true note that `PrivacyStatus` is not mounted on any shipped surface (matches Doc 09 `REL-LIM-18`'s closing paragraph). |
| ISS-14 | Low | **CLOSED** | `README:155, 162-165` and `CONTRIBUTING:109-110`. Verified against source: `verify` = `lint:deps && compile:contracts && typecheck && test` (`package.json:28`); CI has a separate `flag-debt` job and no typecheck step (`verify.yml`). |
| ISS-15 | Low | **CLOSED** | `README:201-203` now cross-references the Status block instead of restating the persona sentence. |
| ISS-16 | Low | **CLOSED** | `README:173-176` and `CONTRIBUTING:117-119` — "There is no `.npmrc` enforcing this strictly, so Node 20 is **unsupported and will warn** (`EBADENGINE`) rather than hard-fail". Accurate: there is no `.npmrc` in the tree. |
| ISS-17 | Low | **CLOSED — better than asked** | `SECURITY:67-69` re-sources the parenthetical to **Doc 06 §7 item 5**, which reads: "`surgeActive` is O(n²) over the 512-sample bound, **on a path that `join` and `leave` both take**… (scan finding H-02)". Names both, and links to H-02 explicitly. I had only asked for the unsourced claim to be dropped. |
| ISS-18 | Low | **Text half closed; setting still owed** | `SECURITY:121-123` adds a sensible fallback (open a normal issue asking for the feature to be enabled, without vulnerability detail). The repository **setting** remains a maintainer action before publication — not a file defect, carried as a routed action, not an issue. |
| ISS-19 | Low | **CLOSED** | `CONTRIBUTING:26-32` guard table. I re-verified all five file:line entries against source this cycle rather than accepting my own cycle-1 note: `UT-0869` join-membership.test.tsx:446 ✓ · `UT-0887` safety-surfaces.test.tsx:125 ✓ · `UT-0889` safety-surfaces.test.tsx:294 ✓ · `UT-0759` PrivacyStatus.test.tsx:198 ✓ · `UT-0888` party-and-regions.test.js:302 ✓. |
| ISS-20 | Low | **Carried** | `CODE_OF_CONDUCT.md` untouched this cycle by instruction. The Low stands; it did not block at cycle 1 and does not block now. |

---

## 5. New issues found this cycle

| ID | Sev | File : line | What | Why it is wrong | Required fix |
|---|---|---|---|---|---|
| **ISS-C2-01** | **Medium** | `README.md:128-130`; `CONTRIBUTING.md:41` and `:156-157` | The `/verify` copy question is cited as tracked at "Doc 02 §13 tracked routing (j); Doc 06 §7 item 26". | **Both cited items are scoped to different strings.** Doc 02 §13 (j) is titled "**Enrolment / verification landing copy** — not ruled" and its body names exactly two: `apps/web/src/i18n/en.ts` `home.steps[0].body` ("We never see your documents…", against §16.4 H-17) and `home.promises[3]` ("We do not count your visits…", routed to the sre). Doc 06 §7 item 26 names the same two. **The `/verify` page's own strings — `verify.lead` "it does not tell anyone who you are", `verify.onDeviceBody` "The document never leaves your phone", `verify.kept` "cannot be traced back to you" (`en.ts:72-97`) — appear in no tracked register at HEAD.** So three public files assert that an open question is tracked where it is not, and the actual surface stays untracked. **Origin: my own cycle-1 ISS-08 named (j); the writer applied it faithfully. This is a new finding from deeper verification, not a rework failure.** | **Two parts.** *(a) Text — technical-writer:* qualify the citation, e.g. "…is an **open, unruled question**. The closest tracked item, Doc 02 §13 (j), covers the **landing-page** enrolment strings; **this page's own copy is not yet in any register.**" *(b) Document — product-owner (me), via the PM:* widen §13 (j)'s scope to include the `/verify` strings, or mint a sibling tracked-routing item. Until (b) lands, (a) is what keeps the public files honest. |
| ISS-C2-02 | Low | `README.md:62-69` | "Its design keeps **at least six operational fields**, per the `FR-132`(b) allowlist… plus a link from each account to the party it joined." | The six-field allowlist attaches to a **counting-verified** account. An open-tier account (phone only, `FR-132`(a)) holds `phone_hash` and the party link — not `subject_id_hash`, `id_verified_flag`, `age_verified`, `issuing_region` or `verified_at`, none of which exist until the counting-tier ID check runs. Errs toward **over**-disclosure, so it breaks no honesty rule; it is simply not what the allowlist says. | Add four words: "…for a **counting-verified** account, per the `FR-132`(b) allowlist… An open-tier account keeps only the phone hash and the party link." |
| ISS-C2-03 | Low | `README.md:68-69` | "The built demo you can run today **keeps this** in an **in-memory** store." | The demo keeps **none** of it: the credential store is `new Map()` — **empty by design** (`app/proposals/page.tsx:48-53`), and Doc 06 §7 item 22 records that no page control can mark the visitor ID-verified, "because building that would fake the enrolment flow this repo has deliberately not built". Again the safe direction, but the sentence claims retention that does not happen. | "The built demo **would** keep this in an in-memory store; today its credential store is **empty by design** — nothing on the page can populate it (Doc 06 §7 item 22)." |
| ISS-C2-04 | Low | `CONTRIBUTING.md:37-39` | "…are a different class, **governed by** `FR-132`(d), not by the rule above." | Doc 02 **v2.17.1** (this session) deliberately softened exactly this phrasing — its change log records: "softens '**governed by**' to '**addressed by**' for enrolment claims and names §13 (j) as the open question" — because `FR-132`(d) prohibits a claim but does not settle the enrolment question. CONTRIBUTING now carries the wording the requirement just retired. The following sentence correctly says the question is open, so no reader is misled about the substance. | One word: "**addressed by** `FR-132`(d)". Track Doc 02 v2.17.1's phrasing. |
| ISS-C2-05 | Low | `SECURITY.md:40` | "**The FR-131 (a)–(c) honesty banner is already live** on the vote surface today". | True of the built demo; the file's own Status block says the project is "deployed nowhere" 35 lines earlier. "Live… today" is the kind of sentence that gets quoted on its own, and in a SECURITY file the distinction between "renders in the demo" and "running in production" is worth two words. | "…is already live **in the built demo** on the vote surface". |

**Observation, not an issue (routed, not scored):** `packages/contracts/test/deployment-safety.test.mjs:2` has a stale header docblock reading "UT-0600..UT-0610" while the file defines through `UT-0612`. README and Doc 09 are both right; the test file's own comment is the stale one. Engineer-side nit for the PM to route whenever that file is next touched.

---

## 6. FR-131 clause (e) — re-applied to every new sentence

**No violation, in any of the four files, including all new text.** Checked specifically:

- The new `/verify` paragraphs (`README:124-130`, `CONTRIBUTING:37-43`) **quote** "never leaves
  your phone" and "cannot be traced back to you" — but attribute them to the page and flag them as
  possibly an overclaim. They assert nothing. And enrolment claims are expressly outside clause (e)
  in any case.
- The new `FR-132`(d) paragraph (`README:32-36`) uses only negations about uniqueness.
- The new SECURITY banner paragraph (`:40-47`) describes the honesty notice, in the mandated
  negated vocabulary, on the surface where it renders.
- `README:70-72` — the `parties.joinPrivate` pattern paragraph — survives the rework intact.

**Version note.** I was directed to test against Doc 02 **v2.17.0**; the document moved to
**v2.17.1** during this cycle. I read the current text. Clause (e)'s substance is unchanged — the
reader test, the participation-act list and the enrolment carve-out all stand; v2.17.1 recast the
prohibition under RFC 2119, subordinated the safe-harbour to the reader test, and softened
"governed by" → "addressed by" for enrolment claims. **No conclusion in this review changes**, and
the only consequence for these files is ISS-C2-04.

---

## 7. Per-file ruling (one line each)

- **`README.md` — FAIL**, on the shared Medium only. All eleven of its cycle-1 issues closed;
  the Status block is now genuinely good. *(0 High · 1 Medium shared · 2 Low)*
- **`SECURITY.md` — PASS on severity** (0 Critical/High/Medium; 1 Low). Every one of its five
  cycle-1 issues closed, and the `join`/`leave` re-sourcing is better than what I asked for. It
  is held only by the aggregate score.
- **`CONTRIBUTING.md` — FAIL**, on the shared Medium. Its one cycle-1 Medium closed well; every
  id, path and number in it remains verified true. *(0 High · 1 Medium shared · 1 Low)*
- **`CODE_OF_CONDUCT.md` — PASS**, carried from cycle 1, untouched. *(1 Low carried)*

---

## 8. Routing

**Cycle 3 — and it is small.** Exactly one Medium and five Lows stand between this set and a PASS.

1. **technical-writer** — ISS-C2-01(a) (one qualifying clause, three sites), ISS-C2-02,
   ISS-C2-03, ISS-C2-04, ISS-C2-05. All five are sentence-level; the exact replacement wording is
   given in §5 for each.
2. **product-owner (me), via the project-manager** — **ISS-C2-01(b)**: widen Doc 02 §13 (j) to
   cover the `/verify` strings, or mint a sibling tracked-routing item. This is a **Doc 02
   amendment**, which means an anchored spec authored by me and transcribed by the PM (Edit is
   disabled for this role), and it re-enters Doc 02's own review loop. It is **not** the
   technical-writer's to make, and the public files should not wait on it — (a) is the honest
   interim statement.
3. **maintainer** — ISS-18's remaining half: confirm GitHub private vulnerability reporting is
   enabled before the repository is published.
4. **Not ruled here, deliberately:** whether the `/verify` copy is an honest placeholder or an
   overclaim. That is a product-owner ruling requiring a Doc 02 amendment, not a review finding,
   and it belongs in the session the PM schedules for item 2 — where the tracking gap and the
   ruling can be closed together.

**I edited none of the four files.** Scored and listed only.
