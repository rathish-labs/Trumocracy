# Candidate agent-learnings for the vektor org repo — 2026-08-30

```
Date:        2026-08-30
Raised by:   Rathish (Human Approver) — instruction issued with the gate-infrastructure fix
Source:      Trumocracy, build/v1-proposals merge sign-off + the governance-infrastructure
             investigation it triggered
Target:      vektor org repo → learnings/agent-learnings.md (status: proposed)
Status:      PREPARED, NOT SUBMITTED — see "Why these were not submitted from this session"
```

Both are **cross-project tooling/process issues, not Trumocracy-specific**. Neither is a product
learning: neither belongs in `docs/refine-log.md`, and neither becomes a `BR`/`FR`. Per CLAUDE.md's
two-tier learning model, an *agent* learning goes to the org repo, where **a human** reviews it and,
if adopted, edits the role definition by hand. `contribute-learning` only proposes; it never edits
an agent definition.

---

## Why these were not submitted from this session

`scripts/contribute-learning` clones the org repo and **opens a pull request** against
`https://github.com/rrathishk/vektor.git`. That is an outward-facing action on a different
repository, and this session's instruction was **"Commit; do not push."** Firing two PRs at an
external repo would contradict that instruction, so both rows are prepared here and the exact
commands are given below for whoever chooses to send them.

Both were validated with `--dry-run`; the rows below are the script's own output.

---

## AL-CANDIDATE-1 — the silent gate (role: `reviewer-qa`)

**What happened.** A SubagentStop gate hook silently enforced nothing for the life of a project.
**Three independent causes compounded**, each sufficient on its own:

1. The hook command named **`python3`** on a Windows host where the interpreter is `python.exe`
   and not on `PATH` → **exit 127, command not found**. This one fails **OPEN**.
2. **10 review reports across 4 documents** used non-canonical metadata field names
   (`Document:` / `Version:`) with a document **title** where a **filename** was required, so the
   parser could not identify them. Fails **CLOSED** — noise, not a hole.
3. The hook called `read_text()` with **no `encoding=`**, crashing with `UnicodeDecodeError`
   under Windows cp1252 on its own UTF-8 documents.

**A silent hook is indistinguishable from an absent one.** 138 reports accumulated and nobody
noticed. The failure was found only because a merge sign-off ported the parser by hand.

**Proposed change to the role definition / tooling standard:**
- Every gate or hook script **MUST** ship an `--audit` (or `--dry-run`) mode that prints its
  verdict **without blocking**, and roles **MUST** run it before relying on the gate.
- Hook scripts **MUST** pass an explicit `encoding=` to every file read. A default-encoding read is
  a latent crash on any non-POSIX host.
- Any parser reading **agent-authored** metadata **MUST** tolerate near-miss field names **and
  report when tolerance was used**. Authoring drift is certain even when the template and the skill
  are both correct — in this case **both were correct and drift happened anyway, ten times, across
  several reviewer roles**. Strictness converts a cosmetic slip into a silent governance failure.

**The generalisable point:** a mechanical check that cannot be observed is not a check. Prefer a
gate that can be *asked* its verdict over one that only speaks when it blocks.

**Row (validated by `--dry-run`):**

```
| <AL-id> | 2026-08-30 | Trumocracy | reviewer-qa | A SubagentStop gate hook silently enforced nothing for the life of a project. Three independent causes compounded: the hook command named python3 on a Windows host where the interpreter is python.exe and not on PATH (exit 127, fails OPEN); 10 review reports across 4 documents used non-canonical metadata field names with a title where a filename was required, so the parser could not identify them; and the hook called read_text() with no encoding, crashing with UnicodeDecodeError on its own UTF-8 documents. A silent hook is indistinguishable from an absent one, and nobody noticed for 138 reports. | Every gate/hook script MUST ship an --audit (or --dry-run) mode that prints its verdict without blocking, and roles MUST run it before relying on the gate. Hook scripts MUST pass explicit encoding= to every file read. Any parser reading agent-authored metadata MUST tolerate near-miss field names AND report when tolerance was used, because authoring drift is certain even when the template and skill are both correct. | proposed |
```

---

## AL-CANDIDATE-2 — commit debris nobody looked at (role: `engineer`)

**What happened.** A **21KB junk file** — a byte-identical duplicate of an i18n catalogue, produced
by a mangled shell redirect whose *filename was a fragment of the redirected content* — was
committed to the repository root. It survived **four document-review cycles** plus the engineer,
tester and architect roles. It was caught only by **reviewer-qa at merge sign-off**, and raised as a
**condition precedent** to the signature.

**Why every review missed it.** Reviews read *documents* and *code*. Nobody looked at **what the
commit actually added**. The file was not in any document, not imported by any module, not covered
by any test, and not in the diff anyone was reading — it was simply *present*.

**Proposed change to the role definition:**
- Roles that commit **MUST** inspect the **full file list of their own commit**
  (`git show --stat`, or `git status` before staging) — not only the files they intended to touch.
- Add an explicit **"no unintended files"** item to the engineer checklist and to reviewer-qa's
  merge scan.
- Shell-redirect output is a known debris source on Windows; **prefer the Edit/Write tools over
  shell redirects** for file mutation. (The same session had already lost characters to a
  PowerShell UTF-8 round-trip, which is what produced the mangled name.)

**The generalisable point:** review scope is defined by what reviewers are pointed at. A file that
belongs to no document and no module is invisible to every content review by construction, so the
only control that catches it is a mechanical one over the commit's own file list.

**Row (validated by `--dry-run`):**

```
| <AL-id> | 2026-08-30 | Trumocracy | engineer | A 21KB junk file (byte-identical duplicate of an i18n catalogue, produced by a mangled shell redirect whose filename was a fragment of the redirected content) was committed to the repo root and survived four document-review cycles plus the engineer, tester and architect roles. It was caught only by reviewer-qa at merge sign-off, as a condition precedent. Reviews read documents and code; nobody looked at what the commit actually added. | Roles that commit MUST inspect the full file list of their own commit (git show --stat / git status before staging), not only the files they intended to touch. Add an explicit 'no unintended files' item to the engineer checklist and to reviewer-qa's merge scan. Shell-redirect output on Windows is a known source of debris; prefer the Edit/Write tools over redirects for file mutation. | proposed |
```

---

## To submit (run from the Trumocracy repo root)

Each command clones the org repo and opens **one PR**. Drop `--dry-run` to send. Add `--fork` if
you lack push access to the org repo.

```bash
scripts/contribute-learning --role reviewer-qa \
  --what "A SubagentStop gate hook silently enforced nothing for the life of a project. Three independent causes compounded: the hook command named python3 on a Windows host where the interpreter is python.exe and not on PATH (exit 127, fails OPEN); 10 review reports across 4 documents used non-canonical metadata field names with a title where a filename was required, so the parser could not identify them; and the hook called read_text() with no encoding, crashing with UnicodeDecodeError on its own UTF-8 documents. A silent hook is indistinguishable from an absent one, and nobody noticed for 138 reports." \
  --change "Every gate/hook script MUST ship an --audit (or --dry-run) mode that prints its verdict without blocking, and roles MUST run it before relying on the gate. Hook scripts MUST pass explicit encoding= to every file read. Any parser reading agent-authored metadata MUST tolerate near-miss field names AND report when tolerance was used, because authoring drift is certain even when the template and skill are both correct."

scripts/contribute-learning --role engineer \
  --what "A 21KB junk file (byte-identical duplicate of an i18n catalogue, produced by a mangled shell redirect whose filename was a fragment of the redirected content) was committed to the repo root and survived four document-review cycles plus the engineer, tester and architect roles. It was caught only by reviewer-qa at merge sign-off, as a condition precedent. Reviews read documents and code; nobody looked at what the commit actually added." \
  --change "Roles that commit MUST inspect the full file list of their own commit (git show --stat / git status before staging), not only the files they intended to touch. Add an explicit 'no unintended files' item to the engineer checklist and to reviewer-qa's merge scan. Shell-redirect output on Windows is a known source of debris; prefer the Edit/Write tools over redirects for file mutation."
```

**Adoption is a human's decision, in the org repo.** `contribute-learning` proposes only; agent
definitions are never self-modified. If adopted, the human edits the role `.md`, records it in
`learnings/adopted.md` with the commit SHA, and re-scaffolds so the change propagates to every
product.
