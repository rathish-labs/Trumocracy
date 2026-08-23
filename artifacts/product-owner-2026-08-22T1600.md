# Product-Owner Session Memory — 2026-08-22T16:00

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-22T16:00:00Z
Phase:      Define — C-01/C-02 wireframe conflict-register rulings applied
Product:    Trumocracy
Scope:      Documents only. No code, no design, no Doc 03 edit.
```

## What I did

Applied two approver rulings (Rathish, 2026-08-22) from the wireframe conflict register
(Doc 03 §10.12.6). Both rulings are recorded verbatim in
`artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md`.

**C-02 — Provisional-party membership cap (DECIDED: accept — mint FR):**
- FR-130 minted (Must, §4.44, Doc 02 v2.5.0). The cap is an anti-capture control, not
  display copy: a provisional party (platform-activated per FR-018 but legal registration
  not yet verified per FR-075) is capped at 100 members; the cap lifts automatically by
  code on verified legal registration; no operator or manual lift path.
- §8 Gherkin for FR-130 added (three scenarios: 101st join refused; cap lifts automatically
  on legal registration; no manual/operator lift path).
- §11 Must count: 110 → 111; FR-130 added to Must list.
- §12 traceability: BR-002, BR-012 → FR-130 → US-0131 added; session scope note updated.
- US-0131 minted (Doc 05 v2.1.0, FE-009 Automatic activation, EP-03). SCR: SCR-06
  (Petition browser & detail, wireframe screen 2.3). Owner: Sofia Marchetti. Priority:
  Must. Points: 3. Status: Backlog / Not Ready pending DES.
- Doc 05 §9 total: 130 stories/~812 pts → 131 stories/~815 pts.
- Doc 05 §12 FR-130→US-0131 trace added.

**C-01 — Adapter-driven string disposition (CONFIRMED, no requirement change):**
- No Doc 02 edit made. No Doc 03 edit made.
- The "Verify with Aadhaar" button is an adapter-driven string resolved at build time per
  the pilot region's rail (FR-004/OI-20 architecture-level plurality; DES-070). Confirmed
  on record in the decision record. No new FR.

## Documents produced / updated

| Document | From → To | Status |
|----------|-----------|--------|
| `docs/02-requirements-srs.md` | v2.4.0 → **v2.5.0** | In Review |
| `docs/05-product-backlog.md` | v2.0.1 → **v2.1.0** | In Review |
| `artifacts/status/DECISIONS-2026-08-22-WIREFRAME-C01-C02.md` | NEW | — |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | addendum appended | — |

## IDs minted

| Prefix | ID | Notes |
|--------|----|-------|
| FR | FR-130 | Must, §4.44, Doc 02 v2.5.0. BR: BR-002, BR-012. Owner: Sofia Marchetti. No DES. |
| US | US-0131 | Must, FE-009, Doc 05 v2.1.0. Implements FR-130. SCR-06. Not Ready pending DES. TC OPEN. |

## Key decisions

1. **BR trace for FR-130:** BR-002 (party gains full status only by demonstrated support —
   provisional party MUST NOT accumulate false strength before legal legitimacy) and BR-012
   (resist governance attacks — mob capture by sudden membership flood). Both directly address
   the "false strength" rationale. FR-014..018's BR traces (BR-002, BR-008, BR-012) guided
   this selection.

2. **Owner for FR-130 / US-0131:** Sofia Marchetti. She owns FR-075 (distinguishing platform
   activation from legal registration — the boundary within which FR-130 operates). This is
   the most directly adjacent requirement. Named-owner rule satisfied.

3. **FE for US-0131:** FE-009 (Automatic activation, EP-03). The provisional-party state
   begins at activation (FR-018). FR-019 (jurisdiction lock post-activation) is also in
   FE-009. FR-130 is the third post-activation constraint — a natural peer.

4. **SCR for US-0131:** SCR-06 (Petition browser & detail). Wireframe screen 2.3 maps to
   SCR-06 (partial), SCR-08 (partial), SCR-09 (partial) per Doc 03 §10.12.4. The cap notice
   appears on screen 2.3 ("petition/live-onboarding screen"); SCR-06 is the most direct
   match for the petition-detail context where the cap is displayed.

5. **DES:** OWED. No DES assigned for FR-130. Recorded honestly — same posture as FR-121..
   FR-129. US-0131 is Backlog / Not Ready pending DES per DoR.

6. **TC:** OPEN — Phase 3. No TC minted. Recorded honestly per house style.

7. **Doc 03 §18/§10.12.6 C-02 cascade:** The C-02 entry in Doc 03 still shows "PO must
   decide." No Doc 03 edit made (Doc 03 is architect-owned, freshly Approved v2.2.1). The
   decision record and this memory note are the bridge. Closure annotation owed at next
   Doc 03 version — explicitly surfaced, not silently skipped.

8. **Distinction from endorsement-floor constants:** FR-130 (100-member membership cap on
   provisional parties) is wholly distinct from DES-010's endorsement-floor constants
   (max(byPopulation, byVerified, 500)). Those govern petition legitimacy. This is stated
   explicitly in FR-130 text, the §4.44 preamble, and the decision record.

## Open items

| Item | Owner | Priority |
|------|-------|----------|
| DES for FR-130 | architect (Ravi Deshmukh) — next Doc 03 design increment | Before US-0131 can be Ready |
| Doc 03 §18/§10.12.6 C-02 closure annotation | architect (Ravi Deshmukh) | Next Doc 03 version |
| TC for FR-130/US-0131 | tester (Ji-woo Park) | Phase 3 |
| RTM row for FR-130 (Doc 08) | tester — after DES and TC available | Gate 2 blocker once minted |
| Doc 02 v2.5.0 business-mode document-review | neutral reviewer (PM to assign) | Before Status → Approved |
| Doc 05 v2.1.0 business-mode document-review | neutral reviewer (PM to assign) | Before Status → Approved |

## Gate status

Gate 1: APPROVED (2026-08-11, Rathish, unconditional). Direction remains approved.
Gate 2: NOT READY. Must count now 111. RTM: 125 rows / 12 COMPLETE / 113 OPEN
(FR-130 RTM row not yet added). Doc 02/05 both In Review — review loop outstanding.
