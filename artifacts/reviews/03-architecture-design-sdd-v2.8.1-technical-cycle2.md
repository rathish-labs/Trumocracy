# Document Review Report — Doc 03 Architecture & Design SDD v2.8.1

> Produced by the **document-review** skill. Reviewer is NOT the document owner.
> Reviewer scores and lists issues only — no edits to the reviewed document.

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.8.1
Review mode: technical
Reviewer role: reviewer-qa (neutral — architect/Ravi Deshmukh owns Doc 03)
Score: 100%
Critical: 0
High: 0
Medium: 0
Low: 0
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

Doc 03 v2.8.1 (SDD-TRUMOCRACY, Status: In Review) was reviewed in technical mode as the cycle-1
rework of v2.8.0 (FAIL 95%, 1H). **Verdict: PASS.** ISS-01 (High) is fully resolved. The
architect identified and corrected all **five** sites — the three located in the cycle-1 report
(§10.13.10 rule 2, §6 Surfaces, failure-modes paragraph) plus two additionally found in the
§5.2 DES-101 table row and the header Change block. Option A was taken (correct the document to
the shipped, Approved code — correct choice, since the code is Approved at Doc 06 v2.3.3 and a
rename would need an engineer, a Doc 06 bump, and a re-review for zero functional gain). The
`git diff` (v2.7.1 committed → v2.8.1 working tree) was inspected; no collateral changes to
any v2.8.0 content beyond the ISS-01 corrections and the v2.8.1 changelog entry.

**ISS-01 resolution verified site by site:**

| Site | v2.8.0 text | v2.8.1 text | Code reality | Result |
|------|-------------|-------------|--------------|--------|
| Header Change block | (CLAUSE_MISSING / CLAUSE_ALTERED) | quotes the wrong names historically to record the defect fixed; `code: 'REQUIRED'` / `code: 'ALTERED'` stated as the correct pair | confirmed | PASS ✓ |
| §5.2 DES-101 row | `CLAUSE_MISSING` / `CLAUSE_ALTERED`; constant at `packages/protocol` (unspecified) | `field: 'charter.nonViolenceClause'` + `code: 'REQUIRED'` / `code: 'ALTERED'`; constant location corrected to `packages/protocol/src/constants.js` | `constants.js:165` confirmed; `clauses.js` does not exist | PASS ✓ |
| §10.13.10 rule 2 | "Absence refuses with `CLAUSE_MISSING`; presence-but-different refuses with `CLAUSE_ALTERED`" | Full (field, code) pair contract: absent/empty → `{ field: 'charter.nonViolenceClause', code: 'REQUIRED' }`; present-not-identical → `{ field: 'charter.nonViolenceClause', code: 'ALTERED' }`. Normative note: `REQUIRED` is platform-wide for missing mandatory fields (also at name:66, pillars.*:81, emblem:339); FIELD scopes it to this gate. `ALTERED` is unique to this gate. "Two MUST NOT be collapsed" preserved. | party.js:66/81/339/369 `code:'REQUIRED'`; party.js:375 `code:'ALTERED'` ✓ | PASS ✓ |
| §10.13.10 §6 Surfaces | "named `CLAUSE_MISSING` / `CLAUSE_ALTERED` refusal renders here" | "named `REQUIRED` / `ALTERED` refusal on `charter.nonViolenceClause` renders here" | consistent with code | PASS ✓ |
| §10.13.10 failure-modes | "is `CLAUSE_ALTERED`, correctly" | "is `ALTERED`, correctly" | party.js:375 `code:'ALTERED'` ✓ | PASS ✓ |

**Two `CLAUSE_*` strings confirmed to remain by design** — both inside the v2.8.1 changelog
entry, quoting the wrong names to record what the defect was and that the Doc 07 routing was
made. They appear nowhere else in the v2.8.1 document.

**REQUIRED as platform-wide code verified:**
`code: 'REQUIRED'` appears at party.js line 66 (`name` field), line 81 (`pillars.*` fields),
line 339 (a further mandatory field), and line 369 (`charter.nonViolenceClause` absent branch).
The DES's normative statement — "REQUIRED is the platform-wide code for a missing mandatory field;
the FIELD scopes it to this gate" — is accurate.

**`ALTERED` uniqueness verified:**
`code: 'ALTERED'` appears only at party.js line 375. No other validator in the protocol
package uses this code. The DES's claim — "ALTERED is unique to this gate" — is accurate.

**`clauses.js` non-existence verified:**
`packages/protocol/src/` contains only: constants.js, flags.js, governance.js, index.js,
party.js, regions.js. The file `clauses.js` does not exist. The §5.2 row's corrected constant
location `packages/protocol/src/constants.js` is accurate.

**Diff scope confirmed:** The working-tree diff (v2.7.1 → v2.8.1) covers everything in v2.8.0
plus the v2.8.1 rework. The v2.8.0 content (DES-101/102/097(b) normative specs, §13 debt rows,
§15 trace table, §16 Q12 closure) was verified in cycle-1 and is unchanged in v2.8.1 except
the five ISS-01 fix sites. No other regressions found.

---

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`100%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — both conditions met; no issues.

---

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 100 | 20.0 | No requirement changes from v2.8.0. DES-101/102/097(b) coverage unchanged and correct. |
| T2 Soundness | 20 | 100 | 20.0 | ISS-01 resolved. Rule 2 now accurately states the (field, code) pair contract verified against party.js lines 369 and 375. REQUIRED platform-wide claim verified (lines 66, 81, 339, 369). ALTERED uniqueness verified (line 375 only). "Two MUST NOT be collapsed" point preserved. No other soundness issues found. |
| T3 Traceability & IDs | 20 | 100 | 20.0 | §5.2 DES-101 row corrected (codes + constant location). All other traces from v2.8.0 unchanged. `clauses.js` non-existence confirmed; `constants.js:165` confirmed. |
| T4 Security & failure modes | 15 | 100 | 15.0 | SCR-05 rendering now correctly describes the (field, code) refusal. Failure-modes paragraph now says `ALTERED` (not CLAUSE_ALTERED). All other security claims from v2.8.0 unchanged and correct. |
| T5 Completeness & testability | 15 | 100 | 15.0 | DES now accurately describes what test code should check for the clause gate. A developer or tester reading the DES will now correctly look for `code: 'REQUIRED'` with `field: 'charter.nonViolenceClause'` for the absent case, and `code: 'ALTERED'` for byte-mismatch. No new incompleteness introduced. |
| T6 Convention compliance | 10 | 100 | 10.0 | Two `CLAUSE_*` strings remain — both confined to the v2.8.1 changelog as historical record of the defect and the Doc 07 routing note. Confirmed absent from all normative sections. Source pins, changelog, DES IDs all correct. |
| **Total** | **100** | — | **100%** | — |

---

## 4. Issues

None. ISS-01 (High) from cycle-1 is resolved. No new issues found.

---

## 5. Note on Doc 07 v2.3.0 and TC-3508..TC-3510

The architect's v2.8.1 changelog records that the ISS-01 sweep surfaced four additional
inaccuracies in Doc 07 v2.3.0 (Approved) TC-3508..TC-3510, beyond the error-code names found
in cycle-1: (1) non-existent path `packages/protocol/src/clauses.js` (confirmed: file does not
exist; constant is in `constants.js`); (2) wrong field name `charter.clause_nonviolence` (actual:
`charter.nonViolenceClause`); (3) wrong return shape `{ error: 'CLAUSE_ALTERED' }` (actual:
`{ valid: false, errors: [{field, code, message}] }`); (4) the wrong error-code names already
noted in cycle-1.

**Routing assessment.** The architect correctly routed this to the tester (not editing a
document it does not own) and recorded the routing in the v2.8.1 changelog. This is the right
procedure under the detector-≠-author and document-ownership rules.

**Standing on Doc 07 v2.3.0 Approved status.** My cycle-1 review scoped verification to the
v2.3.0 additions (TC-3517..TC-3540, TS-MEMBERSHIP). TC-3508..TC-3510 are TS-PARTY suite TCs,
not modified in v2.3.0, and were outside the incremental review focus. The PASS verdict on
Doc 07 v2.3.0 was correctly scoped. The four TC-3508..TC-3510 errors are real defects that
should be corrected, but they do not retroactively block the merge (the tests pass; the document
misdescribes) and do not invalidate the Approved status of the v2.3.0 increment. The tester's
v2.3.1 maintenance patch — already required for Doc 07 ISS-01/ISS-02 (Low) from my cycle-1
routing — should absorb the TC-3508..TC-3510 corrections as well. That patch will require
a cycle-1 document-review (business or technical, as appropriate) before Status: Approved can
be set on v2.3.1.

---

## 6. Routing instruction

**Verdict: PASS.** The owning role **Ravi Deshmukh (architect)** should:

1. Set `Status: Approved` on `docs/03-architecture-design-sdd.md` v2.8.1.
2. No further rework required on this document version.

The SOP may now advance for Doc 03. This completes the cycle-1/cycle-2 review loop.
