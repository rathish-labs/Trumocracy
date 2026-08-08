# Coding & UT (Code Structure & Unit Testing) — TEMPLATE

```
Document ID:   CODE-<product>
Version:       <semver>
Status:        Living
Owner:         <Engineering Lead — named>
Source:        SDD-<product> §9 (Repository & Code-Structure Design)
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Google Engineering Practices + Trunk-Based Development + Conventional Commits + Clean Architecture. **Produced in:** Coding (built at Coding start, from the Design-phase decision).
> _The repository **topology is decided in Design** (SDD §9 + an ADR). This document is where it is **physically built** at the start of Coding, together with the **unit-testing standard**, before feature code begins._

---

## 1. Repository build (from Design)
### 1.1 Reference to design decision
> _Link SDD §9 + ADR-### (monorepo vs polyrepo, module boundaries, branch model, CI topology)._
### 1.2 Scaffolding — how the repo is created
```
scripts/scaffold --name <product> --service <svc> --with-docs
# regenerates the standard tree, pre-fills /docs, wires CI
```
### 1.3 Repository layout (as built)
```
<product>/
├── README.md  CHANGELOG.md  CONTRIBUTING.md  CODEOWNERS  LICENSE
├── docs/                 # the 14-doc suite + adr/
├── apps/<service>/       # api · domain · adapters · telemetry
├── packages/             # shared libs
├── infra/                # IaC
├── tests/                # unit · integration · e2e · perf · security · a11y · fixtures
├── ops/                  # runbooks · dashboards · alerts
├── scripts/              # scaffold · seed · release
└── ci/ (or .github/workflows)
```

## 2. Branching & integration model
> _Trunk-based: short-lived branches → PR → trunk; ship dark behind flags. Define naming, lifetime, protection rules._

## 3. Commit conventions
> _Conventional Commits: `type(scope): subject` (feat, fix, docs, refactor, test, chore, perf, build, ci). Commits reference `US-####`. Drives the CHANGELOG/Release Notes._

## 4. Code structure & standards
### 4.1 Layering & dependency rules (domain pure & I/O-free; dependencies point inward)
### 4.2 Language style guides (link per-language: formatting, linting, naming)
### 4.3 Configuration & secrets (externalized config; no secrets in code; vault/SM)
### 4.4 Error handling, logging, and telemetry conventions
### 4.5 API & interface conventions (versioning, error shapes)
### 4.6 Infrastructure-as-Code (IaC) standards (tooling, module structure, state management, plan/review before apply, drift detection)

## 5. **Unit Testing (UT) standard**  ⭐
### 5.1 Frameworks & runners (per language)
### 5.2 Coverage targets (e.g. ≥ 80% lines on domain; 100% on critical logic) & enforcement in CI
### 5.3 Test structure: **Arrange–Act–Assert**; one behavior per test
### 5.4 Naming: `unit_underTest_scenario_expected`
### 5.5 What to unit-test (pure logic, edge/boundary, error paths) vs. push to integration
### 5.6 Test doubles policy (mocks/stubs/fakes; don't over-mock)
### 5.7 Determinism (no real time/network/random; seed & freeze)
### 5.8 UT id mapping: `UT-####` link to `FR/DES` (feeds Doc 07/08)
### 5.9 TDD expectation (write the failing test first where practical)
### 5.10 Mutation testing / flake policy (optional but recommended)

## 6. Code review policy
> _Author never merges own code. Reviewer is not the author. What reviewers check: correctness, tests, security, readability, traceable IDs. SLA for review turnaround._

## 7. Pull-request template (enforced)
```
## What & why
## Linked: US-#### · FR-### · TC-#### · UT-####
## Flag: <name> (default off)
## Checklist
- [ ] Unit tests added/updated; coverage met
- [ ] Lint/format/security scan green
- [ ] Behind a feature flag
- [ ] Docs/ADR updated if needed
- [ ] RTM row updated
```

## 8. CI gates (deterministic, pre-merge)
> _Build · format · lint (incl. **accessibility lint** on UI) · **unit tests + coverage** · contract tests · SAST/dependency scan · **secret scan** · IaC scan. Merge blocked if any fail._

## 9. Dependency & supply-chain management (pinning, SBOM, vuln policy, license policy)
## 10. In-repo documentation set (mandatory)
| File | Purpose |
|------|---------|
| README / CONTRIBUTING / CODEOWNERS | orientation, rules, owners |
| docs/01–14 + docs/adr/* | the suite |
| Generated API reference (OpenAPI) | contracts |

## 11. Definition of Done — for code
> _Merged behind flag · UT + contract green & coverage met · linked TC passing · telemetry emitting · docs updated · RTM row complete._

## 12. Environments & local setup (how to run, seed, test locally)

---
### Downstream
Unit tests here (`UT-####`) and the suites feed Doc 07 and the RTM (Doc 08); the running service is deployed via Doc 10.
