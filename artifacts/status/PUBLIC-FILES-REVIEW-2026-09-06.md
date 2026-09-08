# Public-files review — README · CONTRIBUTING · SECURITY · CODE_OF_CONDUCT

> **This is NOT a governed-document review report.** These four files are public root files, not
> numbered documents in the 14-doc suite. This report deliberately lives in `artifacts/status/`
> and deliberately does **not** use the `document-review` machine-parseable field names, so it
> **cannot** enter the SubagentStop hook's cycle counter for any document. The `document-review`
> **business** rubric and severity scale are used here only as the scoring frame, by the
> project-manager's assignment.

```
Files reviewed:   README.md · CONTRIBUTING.md · SECURITY.md · CODE_OF_CONDUCT.md (repo root)
Authored by:      technical-writer (Maya Lindqvist), 2026-09-06
                  note: artifacts/technical-writer-2026-09-06T1530-public-files.md
Read at:          working tree, 2026-09-06 (no commit pinned; files uncommitted at read time)
Review date:      2026-09-06
Reviewer:         product-owner (Priya Raghunathan) — new instance; author excluded
Assignment:       artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md (last row)
Neutrality:       RACI — the product-owner is Accountable for public-facing claims
                  (DECISIONS-2026-09-06-ENDORSEMENT-COPY.md §4); owns none of the four files
Mode:             business rubric (B1–B6), adapted; severity C/H/M/L
Governing test:   FR-131 clause (e), Doc 02 §4.45, v2.17.0 (In Review) + approver directive
                  "nothing public may claim a guarantee v1 doesn't deliver"
Pass bar:         score ≥ 95% AND zero Critical/High/Medium
Score:            81%
Critical 0 · High 4 · Medium 7 · Low 9
VERDICT:          FAIL — rework required by the technical-writer
```

---

## 1. Summary (BLUF)

**The four files pass the test they were written to pass, and fail the one nobody was watching.**
I found **no FR-131 clause (e) violation in any of the four files** — no sentence in any of them
lets an ordinary Grade-8 reader conclude that a v1 participation act (vote, endorse/back,
join/belong, support) is unknowable to Trumocracy; every instance of "private / anonymous /
receipt-free / secure" is either negated or unmistakably v2-labelled; README §3's
"nobody outside Trumocracy can see it is a different, weaker promise than no member list exists"
is the `parties.joinPrivate` pattern applied correctly, and it is the best paragraph in the set.

The failure is **factual**. Four claims do not survive checking against the documents they cite:
a **deployment check that does not refuse anything** (README), a **honesty notice described as
live in the wrong place** (SECURITY, which quietly downgrades the one safety control that *is*
shipped), a **section pin that resolves to a different design element** and a **link to an ADR
filename that does not exist** (README), and **four register ids published bare when the same ids
mean something else in Doc 02 §16.4** (SECURITY). Plus one honest gap the whole set shares: the
public files never say that v1 verifies *a real person*, not *a unique one* — while the README's
third sentence promises one vote per member.

Honesty is not only "do not overclaim privacy". It is also "do not claim a control you do not
run", "do not tell a reader a warning is somewhere it is not", and "cite something that exists".

---

## 2. Pass-bar check

- Score ≥ 95%? **no** (81%)
- Critical = 0? **yes** · High = 0? **no** (4) · Medium = 0? **no** (7)
- **Verdict: FAIL.** Rework by the **technical-writer** (the owning role). I have scored and
  listed only; I edited none of the four files.

---

## 3. Per-criterion scores (business rubric, adapted)

B5 is adapted for non-governed public copy: "Gherkin / MoSCoW / kill criteria" does not apply, so
B5 is scored as **verifiability of claims** — can a reader resolve every factual assertion to a
cited, existing source?

| Criterion | Weight | Score | Weighted | Notes |
|---|---|---|---|---|
| B1 Outcome & problem clarity | 20 | 88 | 17.6 | The "Status — read this first" block is exemplary and the v1/v2 split is stated without softening. Docked for the missing one-person-one-vote caveat (ISS-07) and the omitted `/verify` surface (ISS-08). |
| B2 Completeness | 15 | 85 | 12.75 | All four files present, every section filled, no placeholders. Docked for the incomplete retained-field list (ISS-06), `/verify` (ISS-08) and the missing clause (e) carve-out in CONTRIBUTING (ISS-11). |
| B3 Traceability & IDs | 20 | 70 | 14.0 | Weakest area. Wrong section pin (ISS-02), non-existent ADR filename (ISS-05), ambiguous `H-##` ids with no owning document (ISS-04), guard ids with no locations (ISS-19). |
| B4 Correctness & consistency | 15 | 72 | 10.8 | Two statements are false against their own cited sources (ISS-01, ISS-03); one plan date is presented without its "placeholder only" caveat (ISS-10); the test count is stale (ISS-12). |
| B5 Verifiability of claims (adapted) | 15 | 80 | 12.0 | Most claims resolve. Those that do not are concentrated in the two most safety-relevant paragraphs. |
| B6 Convention compliance | 15 | 94 | 14.1 | No email addresses anywhere; no personal GitHub URLs; no real-person name other than "the maintainer"; persona names appear only with the AI-agent note; licence naming (AGPL-3.0-or-later / CC BY-SA 4.0 / DCO) exactly matches the files on disk. Docked only for duplicated copy (ISS-15). |
| **Total** | **100** | — | **81.25 → 81%** | |

---

## 4. Issues

Every issue is located, and every "why" names the source I checked it against.

| ID | Sev | File : line | What | Why it is wrong | Required fix |
|---|---|---|---|---|---|
| ISS-01 | **High** | `README.md:21-22` | "The zero-knowledge verifiers are development mocks… **and a deployment check refuses to promote any environment still wired to one.**" | Present tense, active control. Doc 09 `REL-LIM-12` says the opposite: `assertSafeToPromote()` "is real, throwing code with real coverage — but it is exercised only against injected test readers", `deploy.mjs` "**prints** the plan and executes nothing", and "**No environment can actually be promoted through the gate**, because nothing runs it against a live deployment. The gate is proven as a function and unproven as a control." A reader — especially a forker who deploys — is told a safety net exists that has never been wired to anything. This is a claim of a guarantee v1 does not deliver. | Replace with the true form, e.g.: "…and a deployment-safety check for exactly this is written and unit-tested (`UT-0600`–`UT-0612`) — but nothing that deploys calls it yet, because nothing deploys (Doc 09 `REL-LIM-12`). Treat it as owed, not as protection you have." |
| ISS-02 | **High** | `README.md:53` | The v1 data-retention sentence cites "(Doc 03 [§10.12.3](docs/03-architecture-design-sdd.md); [ADR-025](…))". | Doc 03 **§10.12.3 is "Privacy-status component — DES-094"** (line 1741) — the copy analysis for a component that is **not mounted on any shipped surface**. It says nothing about what v1 stores. The claim itself is **true** and I verified it, but against different sources: **Doc 03 §10.13.9 (DES-100 — v1 ID-document verification and retention model)**, **§10.13.5 (DES-097 — v1 conventional-auth stack)**, **Doc 02 §4.46 `FR-132`(a)/(b)** (the `phone_hash` / `subject_id_hash` allowlist) and **Doc 02 §16.4 `H-02`** (the operator database links member accounts to parties). The single most safety-relevant paragraph in the public README points a checking reader at the wrong section. | Repin to Doc 03 §10.13.9 (DES-100) and §10.13.5 (DES-097), plus Doc 02 §4.46 `FR-132`(b) and §16.4 `H-02`. Doc 01 §111 already uses the `H-02` pin correctly — match it. |
| ISS-03 | **High** | `SECURITY.md:39-43` | "The honesty notice text itself is shown at **the one place it is live today (the open-tier/counting-tier notice at the parties directory)**." | False on two counts, against SECURITY's own cited source. (1) Doc 06 §7 **item 21** says "The FR-131 **clause (d)** notice surface is built at the parties directory" — clause (d) is the *open-tier/counting* notice, a different clause from the (a)–(c) honesty notice this paragraph is about. (2) The FR-131 (a)–(c) honesty banner **is live on the vote surface today**: `ReceiptFreedomBanner.tsx` is mounted at `ProposalsAndDebate.tsx:489`, on the vote step of `/proposals`, guarded by `UT-0887`, with `party_governance` defaulting **on** in `prod` (`packages/protocol/src/flags.js:22`) and `maci_voting` **off** (`:48`) so the banner renders. Doc 06 §7 item 26(d) — the line this paragraph cites — itself says "**the banner is non-dismissable but has no acknowledge control**". SECURITY tells the public that the coercion warning is not where it is, and understates the one shipped safety control. | Rewrite as: "The FR-131 (a)–(c) honesty banner **is** live on the vote surface (`ReceiptFreedomBanner`, mounted at `ProposalsAndDebate.tsx:489` on `/proposals`; guard `UT-0887`). The FR-131 clause (d) open-tier notice is live at the parties directory (Doc 06 §7 item 21). What is **not** built is the DES-098 acknowledge-to-proceed control and the SCR-13/SCR-14 ballot surfaces (Doc 06 §7 items 21 and 26(d))." |
| ISS-04 | **High** | `SECURITY.md:55-63` (heading `:45`) | `H-02`, `H-05`, `H-06`, `H-07` published as bare ids under "Governance gaps", with no owning document. | These ids **collide across two registers**, and the file cites neither. In **Doc 06 §5.3** (which is where these four descriptions come from — I checked each, all four are accurate) they are security-scan findings. In **Doc 02 §16.4** the *same ids* are honesty-register rows: `H-02` = "**Party membership is anonymous**" (the v1 disclosure that it is not), `H-05` = tally verifiability, `H-06` = anonymity-set floor, `H-07` = cross-scope unlinkability. Doc 01 and Doc 04 both cite `H-0x` meaning the **Doc 02 §16.4** sense. A public reader — or a future document — following `H-02` lands on the wrong item, in a privacy-relevant register. Separately, three of the four are not governance gaps at all (`H-02` is a liveness ceiling; `H-05`/`H-06`/`H-07` are cryptographic/protocol findings), and every other id in this file (`REL-LIM-*`, `PREREQ-01`, `C-05`, `TD-RTM-01`) *does* carry its source. | Cite the register inline on every one — "`H-02` (Doc 06 §5.3)" etc. — and rename the heading to something true, e.g. "Open security-scan findings (Doc 06 §5.3)" with `PREREQ-01` and `C-05` kept under a separate "Governance gaps". Consider disambiguating as `Doc06-H-02` if bare ids are kept. |
| ISS-05 | Medium | `README.md:54` | Link `docs/adr/ADR-025-conventional-authentication-seams.md`. | **The file does not exist.** The actual ADR-025 is `docs/adr/ADR-025-v1-phone-auth-spam-resistance.md`. Every other ADR link in the README resolves (007, 010, 013, 008, 006 — all checked). Combined with ISS-02, **both** citations on the v1-data-retention sentence are unresolvable. | Fix the filename. |
| ISS-06 | Medium | `README.md:53-55` | "it stores a one-way-hashed phone number, a one-way-hashed identity-document reference, and a link from each account to the party it joined". | Reads as a complete enumeration; it is not. `FR-132`(b) (Doc 02 §4.46) allows **six** retained fields: `phone_hash`, `subject_id_hash`, `id_verified_flag`, `age_verified`, `issuing_region` (country code), `verified_at`. Under-enumerating retained personal data in the public README is a data-minimisation claim v1 does not deliver. (It also sits in tension with `README:106-108`, which says the built demo uses in-memory stores where nothing persists — worth one clause to distinguish the v1 *design* from the built *demo*.) | Say "at least" and either list the six `FR-132`(b) allowlist fields or point at `FR-132`(b) / DES-100 for the full list; clarify design-vs-demo. |
| ISS-07 | Medium | `README.md:7` (and absent from all four files) | "Every member has exactly one vote when voting ships." | True about *members*; an ordinary Grade-8 reader reads it as **one person, one vote**. `FR-132`(d) is explicit and names this file: "v1 MUST NOT claim, **in its UI, README, or any public-facing material**, that one-person-one-vote is guaranteed", because v1's ID check establishes "a real, legal-age person" — same-document dedup via `subject_id_hash` does **not** stop a person with two legitimate government IDs holding two counting accounts. No file in this set carries that caveat. (Note for scope: this is `FR-132`, expressly **outside** clause (e) — but it is squarely inside the approver's directive.) | Add one sentence to the Status block or "five things" item 5: "v1 checks that you are a real, legal-age person — not that you are a *unique* one. Someone with two legitimate government IDs can hold two counting accounts. One-person-one-vote is a v2 property (`FR-132`(d))." |
| ISS-08 | Medium | `README.md:96-116` and `:88` | "What is actually built, and what is a demo" lists three pages; the layout block says "three demo pages behind feature flags". | There is a **fourth navigable page**: `/verify`, routed at `apps/web/src/app/verify/page.tsx` and linked from the primary navigation (`SiteHeader.tsx:35`, "Prove you are a real person"). It is **not** behind a feature flag, it is a static placeholder wired to nothing, and its shipped copy (`en.ts:72-97`) asserts "The document never leaves your phone", "What gets sent is a short proof… and nothing else", and a code "which cannot be traced back to you" — the v2 enrolment design, not v1. The section whose entire job is the honest inventory omits the one page whose copy is furthest from v1. **Scope note:** the enrolment copy itself is a **tracked, not-yet-ruled** question (Doc 02 §13 (j); Doc 06 §7 item 26; DECISIONS-2026-09-06 §7.1) and is expressly outside FR-131 clause (e) — so this is a **README completeness** finding, not a copy ruling, and I am not making one here. | List `/verify` in both places and label it honestly, e.g. "`/verify` — a placeholder enrolment screen in the navigation. It is wired to nothing, and its copy describes the v2 enrolment design, not v1. The v1 enrolment copy question is open (Doc 02 §13 (j))." |
| ISS-09 | Medium | `README.md:154` | "Where to start reading" row: "what this is for, and the hard questions answered honestly → Doc 01 — PR-FAQ". | Doc 01 v2.1.0 was *just* re-badged by approver ruling 5 (2026-09-06) with a mandatory §0 banner stating it is "the **Definition-B (v2) target vision** and none of it is built", and its Classification line says so. The README row invites a reader to take it as a description of the current product; the adjacent Doc 14 row does carry its caveat ("with the v1 truth up front"). This is precisely the misread ruling 5 exists to prevent. | Retag the row: "what this is for — **the v2 target vision, not what is built** (read its §0 first)". |
| ISS-10 | Medium | `SECURITY.md:6-10` | "both audit reports are targeted for **2027-03-12** (milestone MS-09)". | The date matches Doc 13 line 222, but Doc 13's own ⚠ block (lines 330-338) says every Definition-B date derived from the retired 2027-05-14 Gate-2 date — **naming MS-09 (2027-03-12) first** — is a "**placeholder offset only**… **Do not use these dates for scheduling** until Definition B re-enters." Publishing it as an audit-report target, in the file people read to decide whether to trust the project's security posture, presents a placeholder as a plan. (MS-04 2026-10-15 is **not** affected — Doc 13 line 338 excludes MS-04..MS-08 — and is accurate as written.) | Keep MS-04 as is; restate MS-09 as "a placeholder offset, explicitly not a schedule (Doc 13, Definition-B date caveat) — it will be re-planned when Definition B re-enters design". |
| ISS-11 | Medium | `CONTRIBUTING.md:16-26` and `:126-133` | The honesty rule states the clause (e) participation-act list but not its **carve-out**. | FR-131 clause (e) ends: "claims about **personhood enrolment and identity verification** are governed by `FR-132` and by §16.4 H-16/H-17/H-18 and are **expressly outside** it (see §13 tracked routing (j))." A contributor reading §1 sees enrolment absent from the participation-act list and can reasonably conclude enrolment copy is unregulated — while the live, unruled `/verify` copy (ISS-08) is exactly that class. §6 "Where NOT to start" repeats the same omission. | Add one sentence to §1 and one clause to §6: enrolment / identity-verification copy is **not** covered by clause (e) but is governed by `FR-132`(d) and is an **open, unruled question** (Doc 02 §13 (j)) — route it to the product-owner too. |
| ISS-12 | Low | `README.md:124` | "619 tests at the time of writing (2026-09-06)". | Stale within the same day: Doc 06 **v2.6.0** records "Suite: **624** tests (contracts 95 / protocol 151 / sdk 244 / ui 18 / indexer 16 / web 100, **+5 over v2.5.1's 619 — UT-0889**)". **Not scored as a failure** — the PM re-verifies the count per the assignment. Flagged so the number moves with the guard. | Update to 624 once the PM re-verifies, or drop the number and cite `npm test`. |
| ISS-13 | Low | `README.md:84-94` | Repository-layout block. | Omits `packages/ui`, a real workspace (`packages/ui/package.json`) that the README's own line 123 names ("`npm run typecheck` # packages/ui, apps/web") and that holds `PrivacyStatus`. Every other workspace is listed. | Add the `packages/ui/` line. |
| ISS-14 | Low | `README.md:128`; `CONTRIBUTING.md:91` | "`npm run verify` — the whole CI sequence, locally". | Not exactly: `verify` = `lint:deps && compile:contracts && typecheck && test` (`package.json:28`), while CI (`.github/workflows/verify.yml`) runs `lint:deps`, a contracts **build**, the five test suites **and a separate `flag-debt` job** — and runs **no typecheck**. Local `verify` is a superset in one direction and a subset in another. | "most of what CI runs, locally" — or name the difference in one clause. |
| ISS-15 | Low | `README.md:31-34` and `:168-172` | The AI-agent-personas + "the maintainer is the only human decision-maker" sentence appears twice, near-verbatim. | Correct in both places (and required in at least one), but duplicated copy drifts on the next edit. | Keep it in "Status — read this first"; in "How this repository is run", cross-reference instead of restating. |
| ISS-16 | Low | `README.md:141-142`; `CONTRIBUTING.md:98-99` | "Node 20 will **fail** at `npm ci`." | **Could not verify, and probably overstated.** There is no `.npmrc` in the repo, so `engine-strict` is not set; npm's default behaviour for an unsatisfied `engines` range is an `EBADENGINE` **warning**, not a failure. I have no shell in this session and could not test it. | Soften to "Node 20 is unsupported and will warn at `npm ci` (`engines` in `package.json`); expect failures later", or set `engine-strict=true` and make the sentence true. |
| ISS-17 | Low | `SECURITY.md:55-56` | "`H-02` — the surge-detection scan is O(n²) over its sample bound on a state-changing path **(`join`/`leave`)**". | Doc 06 §5.3 line 784 says "`surgeActive` is O(n²) over up to 512 storage samples **on a state-changing path**" and does **not** name `join`/`leave`. The parenthetical is an addition I could not source. | Drop the parenthetical or source it to the scan finding. |
| ISS-18 | Low | `SECURITY.md:105-108`; `CODE_OF_CONDUCT.md:61-64` | Both files route reports to "GitHub's private vulnerability reporting". | **Could not verify** — whether private vulnerability reporting is enabled is a repository setting, not a file in the tree. If it is off when the repo goes public, both files name a channel that does not exist, and the CoC has no other contact at all. | The PM/maintainer must confirm the setting is **on** before publication, and the CoC should carry a fallback that does not depend on it. |
| ISS-19 | Low | `CONTRIBUTING.md:24` | "Regression guards… are named `UT-0869`, `UT-0887`, `UT-0759`, `UT-0888`, and `UT-0889`". | **All five verified to exist** — `UT-0869` `apps/web/test/join-membership.test.tsx:446`; `UT-0887` `apps/web/test/safety-surfaces.test.tsx:125`; `UT-0889` `…safety-surfaces.test.tsx:294` (**minted this session — accepted, not pending**); `UT-0759` `packages/ui/test/PrivacyStatus.test.tsx:198`; `UT-0888` `packages/protocol/test/party-and-regions.test.js:302`. But three of the five live outside `apps/web/test`, and a contributor told to "expect one of these tests to fail" is given no path. | Add the file for each id. |
| ISS-20 | Low | `CODE_OF_CONDUCT.md:61-64` | Enforcement routes conduct complaints through the **security** vulnerability channel. | Covenant 2.1 text is otherwise **intact and verbatim** (pledge incl. "caste", standards, the four Enforcement Guidelines, Scope) and the attribution block with the v2.1 / Mozilla / FAQ / translations links is **present and correct**; no email address anywhere. But a harassment reporter being sent to a form labelled "Report a vulnerability" is a real usability barrier, and CoC reports have no stated response expectation while SECURITY's do. | Keep it (it needs no email) but name it in conduct language and add "expect a best-effort response from a single maintainer". |

---

## 5. What I checked and found **true** (recorded, so it is not re-litigated)

**FR-131 clause (e) — the governing test.** No violation in any of the four files. Every use of
"private / anonymous / receipt-free / secure" is negated or unmistakably v2-labelled
(`README:24-28`, `:63-79`; `SECURITY:14-16`, `:34-37`; `CONTRIBUTING:12-21`). `README:50-57` uses
the approved `parties.joinPrivate` pattern — states what is not published, then states separately
what Trumocracy's own records can see, and refuses to blur them. `README` describes backing as
"demonstrated public support" and nowhere claims endorsement is private, which is the defect this
week's ruling was about.

**Cross-file hard rules.** No email addresses in any of the four files (the two in
`CODE_OF_CONDUCT` are Covenant 2.1's own examples — "physical or email address", "official e-mail
address" — not contacts). No personal GitHub URLs (`github.com/mozilla/diversity` is the
Covenant's own attribution). No real-person name other than "the maintainer". Persona role names
appear only with the AI-agent note (`README:31-34`, `:168-172`; `CONTRIBUTING:47-50`).

**README, verified true.** All three demo routes exist (`apps/web/src/app/petitions/new/`,
`/parties/`, `/proposals/`); `/parties` does carry the clause (d) open-tier strings
(`en.ts:158-170`); `NEXT_PUBLIC_TRUMOCRACY_ENV` behaves exactly as described — default `prod`
(`flags.tsx:24-27`), `maci_voting` off in prod so the banner shows (`flags.js:48`), all flags on
in `dev`; `IS_INSECURE_MOCK` is real and pervasive incl. `MockVerifier.sol`; static export,
in-memory stores; Node `>=22.0.0 <25.0.0` matches `package.json:9`; `npm run dev -w
@trumocracy/web` exists (`apps/web/package.json:9`) and the "not verified this session" caveat is
honest; licence section matches disk exactly — `LICENSE` is AGPL-3.0 v3 verbatim, `docs/LICENSE`
is CC BY-SA 4.0, `design/LICENSE` points at it, `DCO` exists; `ADR-001..025` all present; every
other doc link resolves; Doc 14 §2.6 is indeed the voting-privacy warning.

**SECURITY, verified true.** `REL-LIM-01` (MockVerifier + path), `REL-LIM-02`, `REL-LIM-12`
(described **correctly** here — the contrast with ISS-01 is the point), `REL-LIM-15`,
`REL-LIM-16`, `REL-LIM-17`, `REL-LIM-18` (closed; commit `0a5c542`, on `main` as `84e2203`,
guards `UT-0887`/`UT-0759`/`UT-0888`) — all match Doc 09's register row for row. `PREREQ-01`
matches Doc 03 §10.13.10.1 lines 2330-2348 including "it does not expose v1, because v1 runs no
on-chain governance". `C-05` and the four `H-##` descriptions match Doc 06 §5.3 word for word
(their *ids* are ISS-04, their content is right). Circuits-not-compiled matches Doc 06 §7 item 2.
`TD-RTM-01` is real. **MS-04 = 2026-10-15** matches Doc 13:217. **16 of 138 Must rows complete,
122 open** matches Doc 08 v2.9.0's header (**Approved**, so "current approved version" is
accurate). Gate-2 claims all check out: rollback drill never run (Doc 08 row 47, Doc 09 §NFR
table), MACI committee "Not started" (Doc 13 DEP-07), audits not started.

**CONTRIBUTING, verified true.** All five guard ids exist (see ISS-19). `TD-RTM-01`'s two paths
are exactly right — `UT-0841`..`UT-0848` are each defined twice, in
`apps/web/test/party-creation.test.tsx` and `packages/sdk/test/proposals.test.js`. The
review-loop numbers match CLAUDE.md (≥95%, zero C/H/M, neutral reviewer ≠ owner, five cycles then
recorded human decision). The Python / `VEKTOR_PYTHON` claim matches `hooks/run_gates.cjs:94,
122-129` including "blocked rather than waved through", and `--audit` is real. DCO is enforced on
every PR (`.github/workflows/dco.yml`). CI does run on Linux **and** Windows
(`verify.yml:22-24`). `parties.joinPrivate` is the right pattern to point at. "Two corrected
overclaims" matches FR-131's own source note (party membership 2026-09-05; endorsement
2026-09-06). The self-review prohibition in §7 is stated correctly and is the AL-CANDIDATE-3 rule.

**CODE_OF_CONDUCT, verified true.** Contributor Covenant 2.1 text intact; attribution present and
correctly linked; no email; no personal name.

---

## 6. Per-file ruling (one line each)

- **`README.md` — FAIL.** Right posture, wrong facts: it claims a promotion control that runs
  nowhere, pins its most important honesty paragraph to the wrong section and a non-existent ADR
  file, and promises one vote per member without the caveat that v1 cannot tell two accounts of
  one person apart. *(2 High, 5 Medium, 4 Low)*
- **`SECURITY.md` — FAIL.** An accurate register that is wrong exactly where it matters most —
  it tells the public the coercion warning is somewhere it is not, and understates the one
  safety control that actually ships. *(2 High, 1 Medium, 2 Low)*
- **`CONTRIBUTING.md` — FAIL (narrowly).** Every id, path, number and hook claim in it is true —
  I could not break it on facts — but it teaches the honesty rule without its carve-out, which is
  the one thing a contributor will get wrong. *(0 High, 1 Medium, 3 Low)*
- **`CODE_OF_CONDUCT.md` — PASS.** Covenant 2.1 verbatim, attribution present, no email, no
  personal names; two Lows only, neither blocking. *(0 High, 0 Medium, 2 Low)*

---

## 7. Routing

**FAIL → the owning role, the technical-writer (Maya Lindqvist)**, who reworks all four files (or
the three that failed) and returns them for a cycle-2 review. These are **not** governed
documents: there is **no `Version:`/`Status:` header to bump**, **no report in
`artifacts/reviews/`**, and **no entry in the hook's cycle counter**. Cycle 2 of this review, if
needed, is written to a sibling file under `artifacts/status/`.

Three items are **not** the technical-writer's to fix and are routed by the project-manager:

1. **ISS-12** (test count 619 → 624) — the **project-manager** re-verifies the number, per the
   assignment; the writer applies whatever the PM certifies.
2. **ISS-18** (GitHub private vulnerability reporting enabled?) — a repository **setting**; the
   **maintainer** must confirm it is on before the repo is published, or both files name a
   channel that does not exist.
3. **ISS-08's code half** — the `/verify` page copy (`en.ts:72-97`) describes v2 enrolment
   behaviour on a shipped, navigable surface. That is an **enrolment-class** copy question,
   expressly outside FR-131 clause (e), already tracked and **unruled** at Doc 02 §13 (j) /
   Doc 06 §7 item 26 / DECISIONS-2026-09-06 §7.1. **I am not ruling it in this review** — a
   ruling is a Doc 02 amendment, not a review finding, and it belongs in a product-owner session
   the PM schedules. The README fix here is only to **list and label the page**.

**I edited none of the four files.** Scored and listed only.
