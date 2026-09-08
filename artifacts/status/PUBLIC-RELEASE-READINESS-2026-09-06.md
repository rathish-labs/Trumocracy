# Public-release readiness assessment — Trumocracy, "v1 in progress" (2026-09-06)

```
Prepared by:  project-manager (Ana-Maria Petrescu)
For:          Rathish Kumar (approver) — decisions marked ▶ are yours
Basis:        the repository at branch build/v1-cascade-and-release-prep (HEAD 84e2203 + this
              session's document changes); a FRESH CLONE exercised end to end (see §4);
              Doc 02 §4.45 (FR-131) applied to every public-facing surface exactly as it is
              applied to the product
Scope:        ASSESSMENT. No README, LICENSE, CONTRIBUTING or SECURITY file was written this
              session — the approver asked to decide first.
```

## 0. Bottom line

The repository is **technically ready** to be cloned, installed and tested by a stranger
(18-second install, 619 tests green, contracts compile, typecheck and dependency guard clean,
no network needed). It is **not yet honestly ready** to be read by a stranger: the README, the
landing-page copy in the web client, and Doc 01 all still describe the *v2* product as if it
were what is built. Those are the same lie the project just spent two sessions removing from
the code and the governed documents, sitting on the three surfaces a newcomer reads first.
Fix those, add the four missing repo files, and it can go public as an honest design-stage
project.

## 1. Would embarrass or mislead if the repo went public tomorrow

| # | Surface | What it says | Why it is a problem | Owner |
|---|---|---|---|---|
| E-1 | `README.md` line 8 | "Nobody, including the people who wrote this software, can … reveal who a member is." | False for v1: the operator database can link accounts to membership and votes (FR-131(b); Doc 14 §0.1/§2.6). FR-131's closing sentence names the README explicitly. | technical-writer drafts, product-owner approves |
| E-2 | `README.md` item 5 (line 35-38) | "In this phase your vote is anonymous but you can still prove how you voted" | The exact retired framing (Doc 09 REL-LIM-18) — the last survivor of it in a customer-facing surface. | same |
| E-3 | `README.md` item 3 | "There is no member list … no field anywhere in the data model capable of holding a name" | True of the v2 design only; v1 keeps `phone_hash`/`subject_id_hash` and account↔party links (Doc 03 §10.12.3 clause 7 note; ADR-025). | same |
| E-4 | `README.md` §Status | "Phase 1 — the walking skeleton — with … receipt-free voting shipped dark behind flags" | Omits the v1 truth the approver requires: working design + 3 features (party creation, join/membership, proposals & debate); NOT deployed anywhere; verifiers mocked; **voting is not private in v1**; do not use for real voting. | same |
| E-5 | `apps/web/src/i18n/en.ts` `home.steps[1]` + `ar.ts` mirror | "Support a new party with your name kept private" | Ruled an overclaim by the product-owner today (`DECISIONS-2026-09-06-ENDORSEMENT-COPY.md`, Ruling B): backing is a public act on the record (Doc 14 §2.2) and the v1 database links it to the account. Replacement copy specified; **product code — routed to the engineer, not changed this session.** | engineer |
| E-6 | `en.ts` `home.promises[0]` + `ar.ts` | "We never learn which party you support." | Flatly false under FR-131(b). Found by the product-owner today; missed by the 2026-09-05 sweep because it contains none of the four banned words. Same routing as E-5. | engineer |
| E-7 | `en.ts` `home.steps[0]` | "We never see your documents, your name or your address, and we do not keep them." | Unverified for v1's government-ID check (FR-132; `IdDocumentChecker` seam). Needs the product-owner's ruling before publication — same class as E-5/E-6. | product-owner → engineer |
| E-8 | `docs/01-press-release-prfaq.md` v2.0.0 | "Classification: Internal"; Supporters are "anonymous", "the vote is receipt-free" — with no v1 posture note anywhere | The README points a newcomer to Doc 01 first ("the hard questions answered honestly"). It predates the 2026-08-23 v1/v2 split and never received the Definition-A caveat Docs 05, 13, 14 carry. A survivor of the FR-131 class in a governed document — reported in the cascade sweep; a Doc 01 v2.1.0 posture note is the product-owner's call (business review cycle). Also "Internal" cannot stay on a public document. | product-owner |
| E-9 | `artifacts/` (390 tracked files, 6 MB) and the persona names throughout | Session notes, review reports, decision records signed by named "people" (Ravi Deshmukh, Ji-woo Park, Chen Wei…) | These are VEKTOR role personas, not real contributors. A newcomer will assume they are people to contact. Needs one sentence in the README/CONTRIBUTING saying the roles are AI-agent personas operated under the VEKTOR SOP, and that the approver (you) is the only human decision-maker on record. Publishing the artifacts is a strength (the decision record is the product's proof of honesty) as long as that is said. | approver ▶ (publish artifacts/ or not) |
| E-10 | `scripts/contribute-learning`, `artifacts/status/AGENT-LEARNINGS-CANDIDATES-2026-08-30.md` | Default remote was a personal GitHub URL | A personal GitHub URL; dead link if the vektor org repo is private. **Resolved 2026-09-06 (approver ruling 4):** the script now takes `--vektor` or `VEKTOR_ORG_REPO` and has no default; the URL was removed from this record and from the 2026-08-30 candidates file. | resolved |
| E-11 | Doc 03 v2.13.0 / Doc 04 v1.4.0 / Doc 07 v2.6.0 / Doc 08 v2.9.0 / Doc 09 v1.9.0 | **All Approved** at session end (cycle-2 PASSes 97/96/97/98; Doc 09 PASS 97% on cycle 5, the cap) with 13 Lows carried across them; `--audit` exit 0, 0 blocking | Resolved this session. The FR-131 cascade is closed in every governed document except Doc 01 (E-8). | — |

Nothing secret was found: no keys, tokens, `.env`, or personal paths in tracked files;
`.claude/settings.local.json` and `gate-runs.log` are untracked; the build cache was untracked
in b6be070.

## 2. What exists today, and what is missing

| Item | State | Gap |
|---|---|---|
| `README.md` | Exists; good structure (layout, running it, where to start, status, licence) | Tells the v2 story as present tense (E-1..E-4). Needs a "What this is, today" block: working design + 3 features behind flags; not deployed; crypto mocked (`IS_INSECURE_MOCK`); **v1 voting is NOT anonymous, NOT receipt-free, NOT coercion-resistant and the operator database can see vote direction**; do not use for real voting; plus a one-line persona disclosure (E-9). Draft wording in §6. |
| `LICENSE` | **Missing.** `package.json` (root and every workspace) already declares `AGPL-3.0-or-later`; README §Licence says the same and gives the rationale | Without the file GitHub shows "no license" and the declaration is legally hollow. Options in §3. |
| `CONTRIBUTING.md` | Missing | Contents in §5. |
| `SECURITY.md` | Missing | Contents in §7. |
| `CODE_OF_CONDUCT.md` | Missing | Standard for a political-organising project; Contributor Covenant 2.1 is the default choice. ▶ |
| `.github/workflows/verify.yml` | Exists; Linux + Windows matrix; `npm ci`, dep-guard, contracts build, all suites, flag-debt check | Good. It does **not** run `hooks/run_gates.cjs` (correct — that gate is for the agent workflow, not CI). Consider a PR template and issue templates (`.github/PULL_REQUEST_TEMPLATE.md`, `ISSUE_TEMPLATE/`) that ask for the `US-####` and the honesty check. |
| `CLAUDE.md`, `.claude/agents/*`, `.claude/skills/*`, `hooks/` | Tracked | Publishable and, for this project, a feature: it is the governance process. Needs the persona sentence (E-9) and a short "how this repo is operated" section in CONTRIBUTING so a human contributor knows the SOP applies to them too (branch → PR → reviewer-qa signs merge). |
| `docs/` (14 documents + 25 ADRs, 2.8 MB) | Tracked; the product's main asset | Doc 01 needs the v1 posture note and its `Classification:` changed (E-8). Everything else carries FR-131-correct language after this session's cascade (subject to the reviews). |
| `design/wireframes/` | Tracked, 32 KB | Fine. |
| Root `package.json` `"private": true` | Correct for a workspace root (prevents accidental `npm publish`) | Keep. |

## 3. Licensing — options for your decision ▶

The repo has **already declared** AGPL-3.0-or-later in every `package.json` and in the README,
with a stated rationale ("a fork of a political platform must not be able to close its source").
Adding the `LICENSE` file for that choice is the zero-surprise path; switching now is possible
(there are no outside contributors yet) but should be a deliberate decision.

| Option | What it does | Fits this project because | Cost |
|---|---|---|---|
| **A. AGPL-3.0-or-later for all code (recommended default — it is what is declared)** + **CC BY-SA 4.0 for `docs/` and `design/`** | Strong copyleft; the network clause means anyone *running* a modified Trumocracy for the public must publish their changes. CC BY-SA keeps the design record forkable but attributable. | The threat model is capture: a hostile operator forking and closing the platform. AGPL is the only mainstream licence whose network clause bites that. Matches ADR-010/ADR-013 posture and the README's own rationale. | Some institutions (and some Ethereum tooling) avoid AGPL dependencies; contributors from those orgs need employer sign-off. Solidity contracts on a public chain are public anyway, so the practical bite is on the client/indexer/services. |
| B. Apache-2.0 for all code | Permissive with an explicit patent grant. | Maximises contributor and integrator uptake; standard for web3 client tooling. | A fork can close its source — the exact failure the README says it is designed to prevent. Would contradict the stated rationale and require rewriting it. |
| C. MPL-2.0 | File-level copyleft: modified files stay open, new files can be closed. | Middle ground; friendly to embedding. | No network clause: a closed hosted fork with unmodified files is allowed. Weak against the capture threat. |
| D. Split: AGPL for `packages/contracts`, `packages/circuits`, `packages/protocol` (governance-critical) + Apache-2.0 for `packages/sdk`, `apps/web`, `services/indexer`, `tools/` | Copyleft where capture matters, permissive where adoption matters. | Lets third-party clients and indexers integrate without AGPL obligations while the rules stay copyleft. | Two licences to explain; the client is where the honesty copy lives, and a permissive client licence lets a fork ship a *dishonest* client on the copyleft rules. Weakens FR-131's reach into forks. |

Also decide: **DCO sign-off vs CLA.** Recommendation: **DCO** (`Signed-off-by:` on every commit,
enforced by a GitHub app) — no paperwork, no copyright assignment, consistent with "no admin".
A CLA would give one party relicensing power, which is the kind of concentrated discretion the
design refuses elsewhere.

## 4. The runnable path — verified on a fresh clone today

Executed from a clean directory (Windows 11, Node 24.18.0, npm 11.16.0; CI also runs Node 22 on
Ubuntu and Windows):

```bash
git clone <repo> trumocracy && cd trumocracy
npm ci                     # 18 s; no network calls beyond the registry; two packages (esbuild, sharp)
                           # have install scripts npm now warns about — expected, harmless
npm run lint:deps          # "7 workspace package(s) checked — layering OK"
npm run typecheck          # 0 errors (packages/ui, apps/web)
npm test                   # 619 tests, 0 failures: contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95
npm run compile:contracts  # solc-js compile; three solc "future keyword" warnings, no errors
npm run verify             # the whole CI sequence locally
```

Seeing the three features behind their flags: the web client is a static-export Next.js app
(`apps/web`, `output: 'export'`). `npm run dev -w @trumocracy/web` starts it; the demo pages are
`/parties` (join/membership, FR-131 clause (d) notice), `/petitions/new` (party creation) and
`/proposals` (proposals & debate incl. the vote-surface honesty banner). Flags resolve from
`NEXT_PUBLIC_TRUMOCRACY_ENV` (default `prod`, the strict end — `maci_voting` off, so the honesty
banner shows); set `NEXT_PUBLIC_TRUMOCRACY_ENV=dev` to see everything on. **Not verified this
session:** `next dev` / `next build` on the fresh clone (no server was started; the tests cover
the components). The README must say the demos use in-memory stores and `IS_INSECURE_MOCK` seams
— nothing persists and nothing is verified cryptographically.

**What would bite a contributor:**
- **The Python gate — no, for ordinary contributors.** `hooks/run_gates.cjs` needs a Python 3
  interpreter, but it is only invoked by the Claude Code `SubagentStop` hook in `.claude/settings.json`.
  A contributor who clones, edits and opens a PR never runs it, and CI does not run it. It **does**
  bite anyone operating the VEKTOR agents (Claude Code) without Python 3 on PATH: every subagent
  stop is blocked with a clear message. CONTRIBUTING must say: "if you use the agent workflow,
  install Python 3 or set `VEKTOR_PYTHON`; `node hooks/run_gates.cjs --audit` checks it."
- **Line endings:** `.gitattributes` forces LF; Windows checkouts with `core.autocrlf=true` see
  CRLF in the working copy and git normalises on commit — harmless, but the first `git status`
  after editing shows the "CRLF will be replaced by LF" warning. Say so.
- **Node version:** `engines` demands Node ≥22 <25. Node 20 users fail at `npm ci`. Say so.
- **`npm test` runtime:** the contracts suite deploys the protocol on an in-process EVM; ~3 minutes
  total on a laptop. Say so, and point at `npm run test:protocol` for a millisecond loop.
- **Arabic locale:** the `ar.ts` strings are engineer drafts flagged for native-speaker review
  (Doc 06 §7 item 17) — a good first-contribution ticket, and an honest label to carry.

## 5. CONTRIBUTING.md — what it must contain

1. **What this is, today** (the same v1-truth block as the README) and the rule that no
   public-facing copy, README line, or docstring may describe v1 voting as private, anonymous,
   receipt-free or secure (FR-131, Doc 02 §4.45) — with the UT-0887/UT-0759/UT-0888 guards named
   so a contributor knows the words are tested.
2. **How the repo is run:** the VEKTOR SOP in one page — two human gates only (Gate 1 direction,
   Gate 2 launch), everything between is trunk-based behind flags; the 14-document suite and
   the ID scheme (`BR/FR/NFR/DES/US/TC/UT`, never renumbered); the review-and-rework loop
   (≥95 % and zero critical/high/medium, cap 5, then human escalation); the eight roles are
   AI-agent personas operated by the maintainer (E-9). Link `CLAUDE.md`.
3. **Branch and PR flow:** feature branches `build/v1-<slug>`, Conventional Commits referencing
   a `US-####` (or `chore(infra)` / `feat(scaffold)`), small reversible commits, DCO sign-off,
   the engineer never merges — reviewer-qa signs; CI (`verify.yml`) must be green; a PR
   template asking: which `US-####`, which `UT-####` added, does the honesty check pass.
4. **Running tests** (§4 above), what each suite is, and the review bar a code drop must meet
   before review (Doc 06 §4a: suite green, dep-guard, typecheck, IS_INSECURE_MOCK discipline,
   jargon filter, capability-absence tests, honesty copy matches DES).
5. **Where to start:** good first issues — Arabic native-speaker review; TD-RTM-01 (duplicate
   `UT-0841..0848` ids); the `.d.ts` shim sync; docs typos — and where NOT to start (contracts
   under audit scope, anything touching FR-131 copy without the product-owner).
6. **Agent workflow (optional):** Claude Code, Python 3 for the gate, `node hooks/run_gates.cjs
   --audit`, the memory protocol; state that using the agents is optional for contributors.

## 6. README — the v1-truth block to add (draft for your approval; not applied)

> **Status — read this first.** Trumocracy is a working *design* with a running reference
> implementation and three application features built behind feature flags: party creation,
> joining and membership, and proposals and debate. It is **not deployed anywhere** and has
> never been used for a real vote. The zero-knowledge verifiers are development mocks that
> accept any proof (`IS_INSECURE_MOCK`), and a deployment check refuses to promote any
> environment still wired to one. **Voting in this version (v1) is NOT anonymous, NOT
> receipt-free and NOT coercion-resistant: the operator's own database can see how each
> account voted and which party it belongs to.** The private ballot the rest of this README
> describes is the v2 design (MACI, zero-knowledge enrolment) and is not built. **Do not use
> this software to organise where being identified could hurt you.** The eight named roles in
> `docs/` and `artifacts/` are AI-agent personas run under the VEKTOR process in `CLAUDE.md`;
> the maintainer is the only human decision-maker on record.

Then: delete "or reveal who a member is" from line 8; rewrite item 3 to say "in the v2 design";
rewrite item 5 to FR-131 (a)–(c) in plain words (Doc 14 §2.6 has approved language to reuse);
keep §Running it and §Where to start; rewrite §Status to match the block.

## 7. SECURITY.md — how to label the open findings honestly

Recommended shape (a status section, not a bug-bounty page — there is no bounty and nothing
deployed):

1. **Status banner:** design-stage; not deployed; no audit has started (MS-04 contracting target
   2026-10-15; audits reported MS-09 2027-03-12); do not run this against real users.
2. **Known open findings, by class, with their register ids** so a reader cannot mistake this
   for deployable — all already public in the docs, so listing them costs nothing and buys trust:
   - Mocked cryptography: every verifier is `MockVerifier` (REL-LIM-01; Doc 06 §7 #1); circuits
     written, not compiled (#2).
   - v1 voting posture: REL-LIM-02 (NOT anonymous / receipt-free / coercion-resistant; database
     sees vote direction); the DES-098 acknowledge-to-proceed control not yet built (Doc 06 §7
     item 26(d)).
   - Governance gaps: `PREREQ-01` non-violence-amendment refusal rules 1–3 unbuilt (Doc 03
     §10.13.10.1, approver ruling 2026-08-29); C-05 fork initiation from calldata — fork flag
     must stay off (Doc 06 §5.3); H-02 O(n²) growth scan (liveness ceiling at cap); H-05 no
     expedited circuit retirement; H-06 stable pseudonym; H-07 root-history eviction.
   - Release-safety gaps: REL-LIM-12 (deployment-safety gate wired to nothing that deploys),
     REL-LIM-15/16/17 (activation flag hazard, issuer removal, irrevocable spender auth);
     REL-LIM-18 **closed** at 0a5c542 (worth showing as an example of the loop working).
   - Traceability debt: TD-RTM-01 duplicate `UT-0841..0848` ids.
3. **Reporting a vulnerability:** a private channel (GitHub private vulnerability reporting is
   free and needs no email), expected response time, and the explicit statement that fixes
   ship through the same two-gate process — no silent hotfix path exists by design (ADR-010).
4. **What not to report:** the mocks, the unbuilt phases, and anything in the registers above.

## 8. Recommended sequence to go public

1. Approver decisions (▶): licence option (§3), DCO, publish `artifacts/` or not, the vektor org
   URL, CODE_OF_CONDUCT, and confirmation of the product-owner's Ruling B and the Doc 01 note.
2. Engineer build session: E-5/E-6/E-7 landing copy (en + ar) with UT guards, TD-RTM-01.
3. technical-writer: README rewrite (§6) + CONTRIBUTING + SECURITY, reviewed in business mode
   under FR-131 discipline; product-owner: Doc 01 v2.1.0 posture note + classification.
4. Add LICENSE, CODE_OF_CONDUCT, PR/issue templates, DCO check.
5. Final sweep (`grep -rniE "anonymous|private|receipt-free|secure"` over README, CONTRIBUTING,
   SECURITY, docs/01, `apps/web/src/i18n`), `npm run verify` green on a fresh clone, then flip
   the repository to public.
