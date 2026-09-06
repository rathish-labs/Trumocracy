# CLAUDE.md — VEKTOR Org Handbook

Every agent reads this file first, then its own template(s), then the relevant prior
`artifacts/` notes. VEKTOR runs delivery **as a product, not a service queue**: front-load
clarity, govern only the two irreversible decisions with human gates, keep everything else
continuous and reversible. **Govern one-way doors only** — if a decision is reversible, it
flows without a gate.

## The two gates

Two — and only two — human approval gates exist. Everything between them is continuous flow.

- **Gate 1 — Direction approved:** after requirements, before design. Approves the
  PR-FAQ (Doc 01) + requirements (Doc 02). Nothing is designed until this clears.
- **Gate 2 — Launch readiness:** before release. Confirms tests green, the RTM (Doc 08)
  has **zero gaps** in Must rows, and rollback is proven.
- **Between the gates:** trunk-based development · ship dark behind feature flags · staged
  rollout · instant rollback. No extra approval boards.

**Principles:** outcome before feature · clarity is cheaper than rework (write it first) ·
named owner on every requirement · delete before you build · small reversible changes ·
reversibility is the risk strategy · learning in production is the deliverable.

## SOP order

```
Step 0 — compile the brief (recommended front door · NOT a gate · NOT mandatory):
     raw idea → prompt-architect skill (or /prompt-architect)
            → sharpened, complete brief (customer · measurable outcome · scope/out-of-scope
              · constraints) → handed to product-owner   (a crisp brief may skip this)

idea → product-owner (PR-FAQ + requirements + backlog) + project-manager (project plan)
     → [GATE 1] → architect (SDD incl. repo-structure design + test strategy)
     → engineer (build on trunk behind flags + unit tests)
     → tester (test cases + RTM)  ‖  reviewer-qa (review + security + RTM verify + sign merge)
     → technical-writer (user guide) → [GATE 2]
     → sre (release + operate → retro feeds the next bet)

  ↻ review loop:  around EACH major document version + the code drop (a quality loop, NOT a gate):
                  owning role produces doc vN → document-review skill (neutral reviewer, biz|tech)
                  scores it → PASS (≥95% AND zero critical/high/medium) advances · FAIL routes
                  back to the OWNING ROLE → new version vN+1 → re-review · cap 5 → ESCALATE:
                  manual human approval (recorded: approve-as-is / rework / reject)

  ↺ refine loop:  sre logs production learnings → routes refine-log to product-owner
                  → product-owner promotes worth-it learnings to new BR/FR (Doc 02)
                  → bet RE-ENTERS at the top → [GATE 1] → … → [GATE 2]   (never bypasses a gate)
```

**Step 0 — compile the brief (recommended, not a gate).** When a human hands in a *raw idea*,
first pass the brief through the shared **prompt-architect** skill (or `/prompt-architect`) to
produce a **sharpened, complete brief** — resolving the **customer**, the **measurable outcome**,
**scope / out-of-scope**, and **constraints** — then hand that to the **product-owner**. This is a
recommended *front-door* step to front-load clarity; it is **NOT a gate**, **NOT mandatory**, and
**adds no artifact or role**. A brief that is already crisp can **skip it** and go straight to the
product-owner. (prompt-architect owns no phase, gate, or artifact — see the Conventions/skills.)

The **project-manager** is the **active orchestrator**: it invokes each role's subagent in SOP
order (via the `Task` tool), verifies the produced artifact + memory note before advancing, and
**schedules/holds the two gates** — it assembles each role's gate-readiness summary and presents
it to the human approver but **cannot approve a gate**; it does not write or run product code
(no `Edit`/`Bash`). It is also **Accountable for executive status
reporting**: it generates **`artifacts/status/STATUS-DAILY-<date>.md`** (a Page Zero
one-pager) **on demand** and **`artifacts/status/STATUS-WBR-<week>.md`** (Page Zero + eight
detail sections) **weekly**. Both are sourced **only** from real repo artifacts and cite every
figure; any source not yet produced is marked `N/A — not yet produced`, never fabricated
(see the `status-reporter` capability in the `project-manager` skill). The **sre** owns Launch + Operate
execution (release, staged rollout, rollback, SLO watch). The **engineer** is the only role
that writes/edits **product code** and **never merges its own work**. **reviewer-qa** and
**tester** are read-only on product code (the tester writes only its test-case and RTM
documents); **reviewer-qa** signs the merge. The **memory protocol** is enforced for every
role by the SubagentStop hook regardless of who coordinates.

## ID scheme (stable — never reuse or renumber)

| Prefix                          | Meaning                                            | Owned in   |
| ------------------------------- | -------------------------------------------------- | ---------- |
| `BR-###` / `FR-###` / `NFR-###` | business / functional / non-functional requirement | Doc 02     |
| `CON-###` / `RISK-##`           | constraint / risk                                  | Doc 02, 03 |
| `ADR-###` / `DES-###`           | architecture decision / design element             | Doc 03     |
| `SCR-##`                        | screen / UI surface                                | Doc 03, 05 |
| `EP-##` / `FE-###` / `US-####`  | epic / feature / user story                        | Doc 05     |
| `UT-####` / `TC-####`           | unit test / test case                              | Doc 06, 07 |
| `REF-##`                        | production learning (refine origin)                | refine-log |

**Traceability rule:** every `FR/NFR` traces **up** to a `BR` and **down** to a `DES`, a
`US`, and a `TC`. The RTM (Doc 08) verifies this. A gap in any Must row is a defect that
**blocks the gate**. A requirement born from a production learning cites its `REF-##` in its
**Source** column (Doc 02) — that is the traceable link back to the production signal.

## Conventions

- **RFC 2119** keywords — MUST / SHOULD / MAY.
- **ISO-8601** dates.
- **Gherkin** acceptance criteria.
- **Named-owner rule** — every requirement and story names a *person*, never a team.
- **Conventional Commits** referencing `US-####`.

## Roles & document ownership

Eight agents run the lifecycle. Each role owns specific documents in the 14-doc suite; every
document has exactly one owner (and, for the RTM, a separate verifier).

| Role                 | Phase            | Owns (writes)                                  | Code? |
| -------------------- | ---------------- | ---------------------------------------------- | ----- |
| **product-owner**    | Vision · Define  | 01 PR-FAQ · 02 Requirements · 05 Backlog       | no    |
| **project-manager**  | Define · all     | 13 Project Plan (+ coordination, gates, RACI)  | no    |
| **architect**        | Design           | 03 Architecture (SDD) · 04 Test Strategy       | no    |
| **engineer**         | Coding & UT      | 06 Coding & UT · product code · `UT-####`      | **yes** |
| **tester**           | Verify           | 07 Test Cases · 08 RTM (author) · runs suites  | tests only |
| **reviewer-qa**      | Verify           | — (read-only: review, security, RTM verify, **signs merge**) | no |
| **technical-writer** | Launch           | 14 User Guide                                  | no    |
| **sre**              | Launch · Operate | 09 Release · 10 Deployment · 11 Operations · 12 Inventory | no |

The **engineer** is the only role permitted to write/edit product code. The **tester** writes
only its own documents (07/08) and test artifacts. **reviewer-qa** writes nothing — it is the
independent approver.

## Decision rights (RACI)

Each decision has one **A** (Accountable) and one **R** (Responsible); others are **C**
(Consulted) or **I** (Informed). PM = project-manager, Test = tester, QA = reviewer-qa.

| Decision                       | PO  | PM  | Arch | Eng | Test | QA  | SRE | TechW |
| ------------------------------ | --- | --- | ---- | --- | ---- | --- | --- | ----- |
| Approve **Gate 1** (direction) | A   | R   | C    | C   | I    | C   | I   | I     |
| Backlog (EP/FE/US)             | A/R | C   | C    | C   | C    | I   | I   | I     |
| Architecture / ADR             | C   | I   | A    | C   | C    | I   | C   | I     |
| Merge to trunk                 | I   | I   | I    | R   | C    | A   | I   | I     |
| RTM complete (zero gaps)       | I   | C   | I    | C   | R    | A   | I   | I     |
| Approve **Gate 2** (launch)    | A   | R   | I    | C   | C    | C   | C   | C     |
| Staged rollout                 | C   | R   | I    | C   | I    | I   | A   | I     |
| Flag kill / rollback           | I   | C   | I    | C   | I    | I   | A   | I     |
| Status reporting (DAILY / WBR) | I   | A/R | I    | I   | I    | I   | I   | I     |
| Document review (≥95%, no C/H/M)| C  | A/R | C    | C   | C    | C   | I   | C     |
| User Guide published           | C   | I   | I    | I   | I    | C   | C   | A/R   |

## Definition of Ready / Definition of Done

- **Definition of Ready (story-level entry):** a `US-####` is ready only when it traces to an
  `FR`, a `DES`, and (if UI) a `SCR`, and carries Gherkin acceptance criteria.
- **Definition of Done:** a story is done only when its **RTM row (Doc 08) is complete** — its
  `TC` passes and the chain `BR → FR/NFR → DES → US → TC` closes. An open Must row blocks
  Gate 2.

## Review-and-rework loop (document & code quality — a loop, not a gate)

After **every major document version is created** and **after the code drop**, the work passes a
strict independent review before the SOP advances. This is a **continuous quality loop, not a third
gate**, and it is run by a **shared `document-review` skill — not a ninth agent** (the roster stays
**eight**). It **complements** `reviewer-qa` (which remains the independent Gate-2 merge signer:
security scan + RTM zero-gaps + merge sign-off); it does not replace it.

- **Detector ≠ author.** The reviewer **MUST NOT be the document's owning role** — the
  project-manager assigns a neutral role to load the `document-review` skill. The reviewer **scores
  and lists issues only; it never edits the document.** All rework is done by the **owning role**.
- **Mode by document type.** **business** rubric → 01 PR-FAQ · 02 Requirements · 05 Backlog ·
  13 Project Plan · 14 User Guide. **technical** rubric → 03 SDD · 04 Test Strategy · 06 Coding & UT
  (**+ the code**) · 07 Test Cases · 08 RTM. Code generation is reviewed in **technical** mode and
  the verdict is recorded against **Doc 06**'s current version.
- **Severity & pass bar.** Every issue is classified **critical / high / medium / low**. A version
  **PASSES** only when **score ≥ 95%** **and** there are **zero critical, high, and medium** issues
  (low issues are allowed). Anything else is a **FAIL**.
- **The loop.** FAIL → route to the **owning role** → rework into a **new version** (bump the
  `Version:` semver, `Status: In Review`) → re-review. **Cap = 5 rework cycles**; if cycle 5 still
  fails, **ESCALATE to the human** with the surviving issues — never loop infinitely. On PASS the
  owner sets `Status: Approved` and the SOP advances.
- **Manual human approval at the cap (recorded).** When the loop hits 5 failed cycles the verdict
  becomes **ESCALATED** and the document **requires manual human approval**: the project-manager
  presents the surviving issues and the human records exactly one decision — **approve-as-is**
  (accept the open issues), **rework** (send back for another version), or **reject**. The decision
  is a **recorded decision** captured in the ESCALATED report — **who approved**, **which issues
  were accepted**, and the **date** (+ rationale). Only **approve-as-is** advances the SOP; the hook
  requires it.
- **Artifact.** Each cycle writes a scored report to **`artifacts/reviews/`**
  (`<NN>-<slug>-v<version>-<mode>-cycle<k>.md`, from `docs/templates/document-review.template.md`)
  with a machine-parseable metadata block (document, version, score, severity counts, verdict).
- **Enforcement.** The project-manager orchestrates the loop **and** the SubagentStop hook
  (`hooks/check_gates.py`) mechanically blocks progression until a **passing** (or **human-approved
  ESCALATED**) review report exists for the **current version** of each major document — the same
  belt-and-braces pattern as the memory-note and RTM checks.

## Governance signals (Operate)

Between and after the gates the sre watches: **SLOs**, **error budget**,
**change-failure rate**, **rollback time**, and **promise-vs-actual**. **Budget exhausted →
freeze and harden.** Roll out staged (**1 → 10 → 50 → 100%**); retro feeds the next bet.

## Refine loop (Operate & Refine → next bet)

The retro-to-next-bet loop is closed across **three** roles, and it **never bypasses the two
gates**:

- **Artifact — `docs/refine-log.md`** (from `docs/templates/refine-log.template.md`): the living
  register of production learnings. Each entry: `REF-##`, date, **signal source**
  (SLO / incident / metric / user-behavior), what production taught us, **severity**, and a
  **Promote? (Yes/No/TBD)** decision field. A living Operate-phase register — a companion to the
  numbered 14-doc suite, not a 15th governed document.
- **Detector — `sre`:** captures learnings as `REF-##` entries **continuously** while operating,
  and on a **threshold breach** (e.g. SLO breach / error-budget exhausted) or the **weekly
  cadence**, **routes** the refine-log to the **product-owner**. The sre **does not decide what to
  build** — it detects and routes.
- **Decider — `product-owner`:** reviews the refine-log, **promotes** worth-it learnings into new
  `BR/FR` in Doc 02 (Source = `REF-##`), and **closes** the rest with a logged reason. Only the
  product-owner turns a learning into a requirement.
- **Governance — re-enters at the top:** a promoted refine bet is an ordinary bet. It **re-enters
  the SOP at the top** (product-owner → … → **Gate 1** → design → … → **Gate 2** → launch) and
  passes through **both** human gates like any other bet. Detector ≠ decider on purpose: the role
  that sees the signal cannot skip governance to act on it.

## Two-tier learning (product vs agent) — and the agent-improvement loop

VEKTOR learns at **two** levels; keep them separate.

- **Product learning** (what to build next *for one product*) → that product's
  **`docs/refine-log.md`** → new `BR/FR` → ships through the **two gates** (the Refine loop above).
- **Agent learning** (how a *VEKTOR role itself* should behave better, across all products) →
  the **vektor org** repo's **`learnings/`** register → a **human-approved** edit to the role's
  `.claude/agents/<role>.md` (and/or its skill) → **re-scaffold** (or pull the org layer) to
  propagate to every product.

The cross-project agent-improvement loop, in the **vektor org repo only**:

- **Artifact — `learnings/agent-learnings.md`** (from `learnings/templates/agent-learnings.template.md`):
  an append-only register; each entry `AL-##` has date, **source project**, **role**, what happened,
  the **proposed change** to that role's definition, and **status** (proposed / adopted / rejected).
  **`learnings/adopted.md`** logs each adopted learning → the agent-definition edit + **commit SHA**.
- **Detector — the field:** a product team sends a learning back with
  **`scripts/contribute-learning`** (opens a PR appending an `AL-##` row), or a role/human files one.
- **Drafter — the `meta-reviewer` skill** (a skill, **not** a ninth agent): reads the register,
  groups by role, and uses **`prompt-architect`** to **draft** proposed edits to the agent `.md`
  files into `learnings/proposals/`. The **project-manager** invokes it on a **cadence** (monthly /
  gate retro) and presents the drafts to the human like a gate packet.
- **Decider — a human:** approves, **edits the definition by hand, and commits**; records it in
  `adopted.md`; then re-scaffolds. **Agent definitions never self-modify without human approval** —
  the meta-reviewer only proposes; the PM cannot adopt; only a human commits a definition change.

## Artifact-bus rule

Agents do **not** share memory. Each role communicates only by writing a **self-contained
file** under `docs/` (the numbered document suite) or `artifacts/` (session notes). A
downstream role reads the file, not the upstream agent's context. Every artifact must stand
on its own — if it isn't written down, it doesn't exist.

## Memory protocol

- On exit, every subagent writes a session-memory note to
  `artifacts/<role>-<timestamp>.md` recording: what it did, decisions made, open items, and
  the IDs it touched.
- It then registers that note in `artifacts/memory-index.json` (starts as `{}`).
- Later agents practice **selective recall** — they load only the relevant notes, not
  everything.
- A **SubagentStop** hook (`hooks/check_gates.py`, launched by `hooks/run_gates.cjs`) fails the
  stop if the note is missing or the index was not updated, and blocks progression until each
  major document's current version has a **passing (or human-approved ESCALATED)
  `document-review` report** in `artifacts/reviews/`. **The RTM (Doc 08) zero-gap check is a
  Gate-2 readiness condition, not a per-stop or merge condition** (approver rulings 2026-08-25
  and 2026-08-30) — the project-manager certifies it when assembling the Gate-2 packet with
  `node hooks/run_gates.cjs --gate2`. `--audit` reports every invariant without blocking.

## Coding & UT rule

The repository structure is **designed in the Design phase** (SDD §9 + a corresponding ADR:
monorepo vs polyrepo, module boundaries, branch model, CI topology) and **physically built
at the start of Coding** (Doc 06, "Coding & UT") — together with the unit-testing standard —
**before any feature code is written**. Implement stories on trunk behind feature flags;
keep commits small and reversible; write `UT-####` unit tests as you go.
