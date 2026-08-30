# Document Review — Doc 03 SDD v2.9.2 (technical, cycle 1)

```
Document:    Architecture Design — SDD (SDD-TRUMOCRACY)
Version:     2.9.2
Review mode: technical
Cycle:       1 of 5
Reviewer:    reviewer-qa (neutral — architect Ravi Deshmukh owns Doc 03)
Date:        2026-08-29
Score:       95%
Critical:    0
High:        0
Medium:      1
Low:         1
Verdict:     FAIL
```

---

## What was checked

1. DES-103 §5.2 row: updated content, traces, tech column.
2. DES-103 §10.13.13 normative specification: two-step consent, both required facts, SCR-15
   and SCR-12 binding, "forbidden by construction" claim.
3. SCR-15 entry in the SCR → Wireframe table (§10.12.4) to verify the binding is defensible.
4. §10.12.4 Wireframe → SCR table (3.6 row) for internal consistency.
5. §10.12.5 class (i) design-debt table for staleness.
6. Shipped code (`apps/web/src/components/ProposalsAndDebate.tsx` `TierDeclaration`,
   `apps/web/src/i18n/en.ts` consent strings) against DES-103's normative spec.
7. v2.9.1 baseline (PASS 100%) treated as confirmed — this cycle reviewed only DES-103 and
   the cross-reference tables that DES-103 affects.

---

## DES-103 §5.2 row

The §5.2 row reads (condensed from the full text verified):

> "participation tiers + Worker informed-consent event — Three tiers … Descriptive metadata
> ONLY … **The Worker declaration is a TWO-STEP informed-consent event (FR-080):** step 1
> explains why the tier exists; step 2 states, BEFORE confirmation, both required facts — the
> declaration is permanent for the term, and it makes the member's participation record public
> for the term (not merely the proposals they file) — plus that nobody reviews it. Declining
> leaves the member a Supporter. A one-click declaration is forbidden by construction …"

Traces: `FR-079, FR-080, FR-021, FR-082, SCR-12, SCR-15`. All traces verified as relevant.
Tech column: `packages/protocol (proposals.js); apps/web` — correct.

---

## DES-103 §10.13.13 normative specification

The "forbidden by construction" claim reads:

> "A one-click declaration is forbidden by construction: with no confirmation step there is no
> 'before' for the disclosure to precede, and the requirement becomes unsatisfiable rather than
> merely unmet."

This is structural, not rhetorical. FR-080 requires disclosure "before a Worker declaration is
confirmed." Without a confirmation step there is no confirmation event to precede; the
requirement is logically unsatisfiable, not merely violated. The claim is accurate.

Both required facts are normatively specified in §10.13.13:
1. "the declaration is **permanent for the term** and cannot be undone partway through"
2. "it makes the member's **participation record** public for the term — the record of what
   they take part in, not only the proposals they put forward"

The "not only the proposals they put forward" language mirrors the defect description in the
change header and directly addresses clause (ii) of FR-080. No softening.

Declining behaviour is specified: "declining MUST leave the member a Supporter with nothing
recorded." Code matches — `cancel-worker` sets `consenting = false`, `onDeclareWorker` is not
called, `participationTier` stays SUPPORTER.

---

## SCR-15 binding defensibility

SCR-15 in the SCR → Wireframe table (§10.12.4) reads:

> "Nomination & disclosure consent | 3.6 (partial) | Partial — Worker declaration shares the
> consent pattern; candidacy nomination is distinct"

The DES-103 §10.13.13 binding states:

> "Bound surfaces: **SCR-15** (the consent pattern — the §10.12.4 screen table already names
> the Worker declaration as sharing it) and **SCR-12** where it is reached."

The SCR-15 binding is defensible. SCR-15 covers disclosure consent; Worker self-declaration is
a consent event in the same semantic category. The binding is acknowledged as "sharing the
consent pattern" rather than claiming full coverage under candidacy nomination. This is an
honest and proportionate binding, not an overreach.

SCR-12 ("Proposal list & detail") is where the TierDeclaration component is reachable; its
inclusion is correct.

---

## DES matches the shipped code

The code (`TierDeclaration`) implements exactly the two-step flow DES-103 specifies:
- Step 1 (gate panel `data-testid="worker-gate"`): explains why the tier exists.
- Step 2 (consent panel `data-testid="worker-consent"`): states permanence, participation-
  record publicity, no-approval, and offers confirm/cancel.
- `confirm-worker` calls `onDeclareWorker()`; `cancel-worker` returns to step 1.

DES-103 and the code are in alignment.

---

## Issues

### ISS-01 (Medium) — §10.12.5 class (i) design-debt table lists the FR-080 DES gap as still open

**Location:** `docs/03-architecture-design-sdd.md` §10.12.5 class (i) table, "3.6 One-way
door (Worker self-declaration)" row.

**Text (as found):**
> "SCR-15 covers candidacy nomination disclosure (FR-037..038). Worker self-declaration
> (FR-080) has **no dedicated SCR, no DES surface element**, and no US explicitly covering the
> 'permanent / public from here on' UI treatment. | DES and SCR gap: Worker self-declaration
> informed-consent UI (FR-080) needs a dedicated surface element and SCR."

**What is wrong:** DES-103 (added in v2.9.2) IS the dedicated DES surface element for FR-080,
and SCR-15 is now bound to it. The design-debt table was not updated. Any downstream reader —
a tester building the RTM, a PM reviewing design debt, or a future reviewer — will read this
row and treat the gap as still open, reopening what has been closed.

**Severity rationale:** the §10.12.5 class (i) table is an operationally active tracker used
by the tester (Doc 07/08) and PM to identify missing design elements. A stale "open" entry for
a gap that has been closed causes incorrect work: the tester may log an RTM gap that does not
exist; the PM may flag outstanding design debt that has been resolved. This is not a minor
cosmetic inconsistency.

**Required fix:** update the §10.12.5 class (i) row to reflect that DES-103 now provides the
dedicated DES surface element and that SCR-15 is bound; reclassify this item as resolved or
remove the row.

---

### ISS-02 (Low) — Wireframe → SCR table (3.6 row) contradicts SCR → Wireframe (SCR-15 row)

**Location:** §10.12.4 Wireframe → SCR table, row for "3.6 The one-way door".

**Text (as found):**
> "SCR-15 (partial) | SCR-15 covers candidacy nomination disclosure; Worker self-declaration
> (FR-080) is **related but distinct**. Design debt — see §10.12.5 class (i)."

**What is wrong:** the SCR → Wireframe table for SCR-15 was updated in v2.9.2 to say "Worker
declaration shares the consent pattern" — the opposite relationship from "related but
distinct". The two tables are now directly contradictory on whether Worker self-declaration is
within SCR-15's scope. The Wireframe → SCR row also points to §10.12.5 class (i) as the
authority on this being design debt (ISS-01 above).

**Severity rationale:** Low (not Medium) because the operationally active tracker is ISS-01;
this cross-reference inconsistency is secondary but should be corrected along with it.

**Required fix:** update the Wireframe → SCR table 3.6 row to reflect that the Worker
declaration shares the consent pattern of SCR-15, consistent with the SCR → Wireframe table
and DES-103, and remove the design-debt pointer since the gap is now closed.

---

## Verdict

**FAIL — 95% / 0 Critical / 0 High / 1 Medium / 1 Low**

The primary change — DES-103 normative specification in §5.2 and §10.13.13 — is accurate,
complete, and consistent with the shipped code. The "forbidden by construction" claim is
substantiated. The SCR-15 binding is defensible. Both FR-080 clauses are correctly captured.

The fail is caused by two cross-reference entries not updated alongside DES-103: the
§10.12.5 class (i) design-debt table still lists the FR-080 DES-and-SCR gap as open (Medium),
and the Wireframe → SCR 3.6 row contradicts the SCR → Wireframe SCR-15 row (Low). Both omit
a closure that v2.9.2 effects, and the Medium entry will mislead downstream work unless
corrected. Route to Ravi Deshmukh for rework into v2.9.3.
