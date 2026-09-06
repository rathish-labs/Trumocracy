# Document Review Report — TEMPLATE

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** does every rework as a new version.
> Independence: the reviewer is **not** the document's owner (author ≠ reviewer), exactly like
> `reviewer-qa`. This loop **complements** reviewer-qa (the Gate-2 merge signer); it adds no new
> gate or role.
>
> **Save as:** `artifacts/reviews/<NN>-<slug>-v<version>-<mode>-cycle<k>.md`
> (e.g. `artifacts/reviews/02-requirements-specification-v0.3.0-business-cycle1.md`).

<!-- ── MACHINE-PARSEABLE METADATA BLOCK (the SubagentStop hook reads these exact fields) ── -->
<!-- Keep the field names and order. Verdict is exactly one of: PASS | FAIL | ESCALATED.    -->
<!-- Emit PASS only when Score ≥ 95 AND Critical = High = Medium = 0.                        -->
<!-- On ESCALATED (cycle 5 cap reached) add the recorded human-decision fields below; only  -->
<!-- "Human decision: approve-as-is" with a named "Approved by:" lets the SOP advance.       -->
<!--                                                                                        -->
<!-- ⚠ THE FIRST TWO FIELDS ARE THE ONES THAT DRIFT. Write them EXACTLY as:                 -->
<!--     Reviewed document:  (NOT "Document:")   — value is the FILENAME, not a title or ID -->
<!--     Document version:   (NOT "Version:")    — value is a bare semver, e.g. 2.4.3        -->
<!-- Ten reports across four documents used "Document:"/"Version:" with a TITLE as the value.-->
<!-- The hook could not identify any of them, so the automated gate silently did nothing for -->
<!-- those versions. hooks/check_gates.py now tolerates the aliases and falls back to the    -->
<!-- report's filename, but tolerance is a safety net, not a licence: a report that needs    -->
<!-- the fallback is flagged in the hook's diagnostics as needing canonicalising.            -->
<!-- Self-check before saving:  node hooks/run_gates.cjs --audit                              -->

```
Reviewed document: <NN-document-filename>.md
Document version: <semver of the version reviewed>
Review mode: business | technical
Reviewer role: <neutral role that ran the skill — MUST NOT be the document owner>
Score: <NN>%
Critical: <n>
High: <n>
Medium: <n>
Low: <n>
Cycle: <k> of 5
Verdict: PASS | FAIL | ESCALATED
```

> **ESCALATED only** — append the recorded human decision (omit for PASS/FAIL):
>
> ```
> Human decision: approve-as-is | rework | reject
> Approved by: <human approver's name>
> Accepted issues: <ISS-ids accepted as-is, or "none">
> Decision date: <YYYY-MM-DD>
> Decision rationale: <one line>
> ```

---

## 1. Summary (BLUF)

> One paragraph: what was reviewed, the verdict, and the single most important reason.

## 2. Pass-bar check

- Score ≥ 95%? **<yes/no>** (`<NN>%`)
- Critical = 0? **<yes/no>** · High = 0? **<yes/no>** · Medium = 0? **<yes/no>**
- **Verdict:** `<PASS | FAIL | ESCALATED>` — PASS only when both rows above are all "yes".

## 3. Per-criterion scores

> Business mode = B1–B6; technical mode = T1–T6 (see the `document-review` skill for weights).

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| <e.g. T1 Requirement coverage> | 20 | <…> | <…> | <…> |
| … | … | … | … | … |
| **Total** | **100** | — | **<NN>%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Critical / High / Medium / Low | <e.g. T3> | <e.g. §5.2, DES-004> | <what's wrong> | <what must change> |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Routing instruction (to the owning role)

> If FAIL: name the **owning role**, the fixes required, and that the rework MUST produce a **new
> version** (bump the `Version:` semver, set `Status: In Review`), after which this loop re-reviews.
> If PASS: instruct the owning role to set `Status: Approved`; the SOP advances.
> If ESCALATED (cycle 5 cap reached): the document **requires manual human approval**. Hand the
> surviving issues to the **human**, who records a decision — **approve-as-is** (accept the open
> issues), **rework** (new version → re-review), or **reject**. Record **who approved, which issues
> were accepted, and the date** in the metadata block above. Only **approve-as-is** advances the SOP.

## 6. Human decision at the cap (ESCALATED only)

> Fill this in only when `Verdict: ESCALATED`. This is the **recorded human approval** — the audit
> trail of who decided what, when, and why. (Mirror the values into the metadata block above so the
> SubagentStop hook can read them.)

| Field | Value |
|-------|-------|
| Decision | approve-as-is / rework / reject |
| Approved by (human) | <name> |
| Accepted issues (open issues accepted as-is) | <ISS-ids, or "none"> |
| Decision date | <YYYY-MM-DD> |
| Rationale | <why this decision> |
