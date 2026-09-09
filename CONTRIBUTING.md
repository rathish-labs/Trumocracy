# Contributing to Trumocracy

Thank you for considering a contribution. This document tells you what this project is today,
how it is run, how to get a change merged, and where a first contribution is welcome.

## 1. What this is, today

Read the [README "Status" section](README.md#status--read-this-first) before anything else.
In short: Trumocracy is a working design with three application features (party creation,
join/membership, proposals and debate) built behind feature flags, on a static-export demo
client with in-memory stores and mocked verifiers. It is **not deployed anywhere** and has
never been used for a real vote. **v1 voting is NOT anonymous, NOT receipt-free and NOT
coercion-resistant, and the operator database can see vote direction and party membership.**

**The honesty rule that governs every contribution.** No public-facing string, screen,
docstring, README line, or comment you write — in any language — may describe a v1
**participation act** (casting a vote, endorsing or backing a petition, joining or belonging to
a party, or supporting a party) as private, anonymous, receipt-free, or secure, unless it is
unmistakably describing the **v2 design** or using the words in their **negated** form ("NOT
anonymous," "not receipt-free"). This is [FR-131](docs/02-requirements-srs.md) clause (e)
(Doc 02 §4.45), and the test is not a list of banned words — it is what an ordinary reader
would conclude the claim means. If you are unsure whether your copy passes, look at the
pattern it must follow: `apps/web/src/i18n/en.ts` `parties.joinPrivate`. Regression guards
enforcing this in code, and where to find each one, are:

| Guard | File |
|---|---|
| `UT-0869` | `apps/web/test/join-membership.test.tsx:446` |
| `UT-0887` | `apps/web/test/safety-surfaces.test.tsx:125` |
| `UT-0889` | `apps/web/test/safety-surfaces.test.tsx:294` |
| `UT-0759` | `packages/ui/test/PrivacyStatus.test.tsx:198` |
| `UT-0888` | `packages/protocol/test/party-and-regions.test.js:302` |

If your change touches user-facing copy about a participation act, expect one of these tests
to fail if the copy is wrong, and check whether a new guard is owed.

**What this rule does *not* cover.** Claims about **personhood enrolment or identity
verification** — for example, what the government-ID check does or does not see or keep — are
a different class, **addressed by** `FR-132`(d), not by the rule above. Two landing strings,
`home.steps[0].body` and `home.promises[3]`, make this kind of claim and remain an **open,
unruled question** — Doc 02 §13 (j) items (1) and (2). The `/verify` page's own copy was the
same class of claim; that question is now **ruled and closed** (Doc 02 §13 (j)(3);
[decision record](artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md)): the page sits behind
the `enrolment_ui` flag, off in the public build because enrolment is not built and cannot
start until `CON-015` (a legal opinion) clears, where it shows a short honesty notice instead
of the design copy — see [Doc 14 §1.2](docs/14-user-guide.md) for the citizen-facing account.
The placeholder's exact text is pinned by `UT-0890`
(`apps/web/test/safety-surfaces.test.tsx`); changing it will fail the suite. If your change
touches enrolment or identity-verification copy, route it through the product-owner role too —
the same caution as for a participation-act claim. Two of these questions are still unsettled —
Doc 02 §13 (j) items (1) and (2).

## 2. How the repo is run

This project is built with the **VEKTOR** process, documented in full in
[`CLAUDE.md`](CLAUDE.md). The short version:

- **Two human approval gates only** — Gate 1 (direction: requirements approved, before design)
  and Gate 2 (launch: tests green, zero gaps in Must-priority traceability rows, rollback
  proven). Everything between the gates flows on trunk behind feature flags; there is no third
  approval board.
- **A fourteen-document suite** (`docs/01`–`docs/14`) with a stable ID scheme that is never
  reused or renumbered: `BR-###`/`FR-###`/`NFR-###` (requirements), `ADR-###`/`DES-###`
  (architecture/design), `SCR-##` (screens), `EP-##`/`FE-###`/`US-####` (backlog),
  `UT-####`/`TC-####` (tests). If your change touches behaviour, look for the requirement or
  story it traces to before you write code.
- **A review-and-rework loop** on every major document version: a neutral reviewer (never the
  document's own owning role) scores it against a rubric. A version **passes** only at **≥95%
  score and zero critical/high/medium issues**. A failing version goes back to the owning role
  for rework, up to five cycles, after which it is escalated for a recorded human decision.
  Anyone proposing a change to a `docs/` document should expect this loop.
- **Eight named roles** appear throughout `docs/` and `artifacts/` — product-owner,
  project-manager, architect, engineer, tester, reviewer-qa, technical-writer, sre. These are
  **AI-agent personas** operated under the VEKTOR process, not real people. The maintainer is
  the only human decision-maker on record for this repository.

## 3. Branch and PR flow

- **Branch naming:** `build/v1-<slug>` for feature work.
- **Commit messages:** [Conventional Commits](https://www.conventionalcommits.org/), referencing
  a `US-####` story where one exists (e.g. `feat(parties): join flow (US-0042)`), or
  `chore(infra): ...` / `feat(scaffold): ...` for work with no story yet.
- **Small, reversible commits.** Prefer several small commits to one large one.
- **DCO sign-off is required on every commit.** See §4.
- **The engineer role never merges its own work** — merges are signed off by an independent
  reviewer. As a human contributor, this means: open a pull request, keep CI green, and expect
  a review before merge — do not self-merge.
- **CI (`.github/workflows/verify.yml`) must be green**: dependency-direction check, contracts
  build, and every test suite, on both Linux and Windows.
- When opening a PR, say which `US-####` (if any) it addresses, which `UT-####` tests you
  added, and confirm the honesty check in §1 passes for any user-facing copy you touched.

## 4. Developer Certificate of Origin (DCO)

Every commit must carry a `Signed-off-by:` trailer certifying you wrote it or otherwise have
the right to submit it under the project's licence (see the [`DCO`](DCO) file for the exact
text). Add it automatically with:

```bash
git commit -s
```

This is checked on every pull request. We use DCO rather than a Contributor License Agreement
deliberately: no paperwork, no copyright assignment to a single party — consistent with a
project that has no admin key anywhere else, either.

## 5. Running tests

```bash
npm ci                     # not npm install — installs exactly what package-lock.json pins
npm run lint:deps          # dependency-direction check (ADR-011)
npm run typecheck          # packages/ui, apps/web
npm test                   # 640 tests at the time of writing (2026-09-08); ~3 minutes —
                            # the contracts suite runs on an in-process EVM (solc-js +
                            # EthereumJS), no network needed
npm run test:protocol      # just the reference implementation, in milliseconds — the fast loop
npm run verify              # most of what CI runs, locally — see the README's note on the
                            # difference (a separate flag-debt job in CI; no CI typecheck step)
```

**Windows note:** `.gitattributes` normalises line endings to LF; a Windows checkout with
`core.autocrlf=true` will show a "CRLF will be replaced by LF" notice on the first `git status`
after an edit. This is harmless.

**Node version note:** `engines` in `package.json` requires Node **≥22 and <25**. Node 20 is
unsupported and will warn (`EBADENGINE`) at `npm ci` rather than hard-fail there — but expect
real failures further on, since this project is not tested against older Node.

### The code-drop review bar (Doc 06 §4a)

Before a code change is considered ready for review, it should meet the same bar the project
holds its own drops to: the suite is green, `npm run lint:deps` and `typecheck` are clean, any
new mock/stub component follows the `IS_INSECURE_MOCK` discipline (§2.1 of
[Doc 06](docs/06-coding-and-ut.md)), no new user-facing string trips the jargon filter, no
feature ships outside the story that commissioned it, and any user-facing copy matches its
approved design element verbatim. Where a guarantee is the *absence* of something (for example,
"we do not retain your document"), add a test that asserts the absence — a passing test suite
with no such test is not evidence the absence holds.

## 6. Where to start — good first issues

- **Arabic native-speaker review.** The strings in `apps/web/src/i18n/ar.ts` are engineer
  working drafts, not reviewed by a native speaker — including the vote-surface coercion
  warning. A mistranslation of a safety warning is a real defect, not a polish item
  (Doc 06 §7 item 17).
- **`TD-RTM-01`** — the ids `UT-0841`..`UT-0848` are each defined twice, in
  `apps/web/test/party-creation.test.tsx` and `packages/sdk/test/proposals.test.js`. This
  breaks the automated orphan/duplicate check in the traceability matrix (Doc 08). Renumbering
  one set closes it.
- **`.d.ts` shim sync** — the TypeScript store interface shims under `apps/web/types/` have
  drifted from their JS interfaces before; keeping them in sync is an easy, valuable check.
- **Documentation typos and clarity fixes** in `docs/`.

**Where NOT to start:**

- Anything inside `packages/contracts` or `packages/circuits` that is in scope for the planned
  third-party security audits — check [SECURITY.md](SECURITY.md) before touching these.
- Any user-facing copy describing voting, endorsing, joining, or supporting a party, without
  routing the change through the product-owner role first — this is exactly the class of defect
  §1 exists to prevent, and it has already been the source of two corrected overclaims in this
  project's history.
- Enrolment or identity-verification copy (what the government-ID check does or does not see,
  keep, or discard) — including the retained `/verify` design strings, which render only in
  `dev` behind the `enrolment_ui` flag and must be re-litigated before that flag is turned on —
  without routing through the product-owner first. Doc 02 §13 (j) items (1) and (2), the two
  landing-page strings, remain a separate, currently **open and unruled** question.

## 7. Agent workflow (optional)

This project is built using [Claude Code](https://claude.com/claude-code) running the VEKTOR
agent roles. **Using the agent workflow is entirely optional for contributors** — you are
welcome to read, fork, and submit pull requests without ever touching it.

If you do use it: the `SubagentStop` hook (`hooks/run_gates.cjs` → `hooks/check_gates.py`)
needs a Python 3 interpreter on `PATH`, or the `VEKTOR_PYTHON` environment variable set to one.
Without it, every agent session stop is blocked with an explanatory message rather than
silently passing. Run `node hooks/run_gates.cjs --audit` at any time to see the gate's current
view of the repository without it blocking anything.

Every agent session ends by writing a memory note under `artifacts/<role>-<timestamp>.md` and
registering it in `artifacts/memory-index.json`. If you are operating an agent role and its
own review is what would unblock it, **do not write that review yourself** — route the
situation to the project-manager role instead. An agent never appoints itself the neutral
reviewer of its own work.

## 8. Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you are
expected to uphold it.
