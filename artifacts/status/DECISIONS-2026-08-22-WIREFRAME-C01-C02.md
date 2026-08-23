# Wireframe Conflict-Register Rulings C-01 and C-02

```
Date:            2026-08-22
Decisions:       C-01 — "Verify with Aadhaar" button adapter-driven disposition (CONFIRMED)
                 C-02 — Provisional-party membership cap (DECIDED: accept — mint FR)
Decision-maker:  Rathish (human approver)
Recorded by:     product-owner (Priya Raghunathan)
Status:          DECIDED — C-01 CONFIRMED; C-02 ACCEPTED (FR-130/US-0131 minted);
                 applied in Doc 02 v2.5.0 + Doc 05 v2.1.0 this session
Source:          C-01 and C-02 surfaced by architect in Doc 03 §10.12.6 (conflict register,
                 v2.2.0 → v2.2.1 Approved). C-02 was recorded in Doc 03 §18 as a
                 requirement gap: "PO must decide: accept (mint FR) or reject (revise copy)".
                 C-01 was recorded in Doc 03 §18 and §10.12.6 as an adapter-driven disposition
                 requiring build-time resolution.
```

---

## 1. What was open

**C-01** surfaced when the architect reviewed wireframe screen 1.3 ("Verify with Aadhaar"
primary button) and 1.4 ("Your Aadhaar data is being read and proven right here on your phone")
during the Doc 03 v2.2.0 design-system formalisation. The wireframe treats "Aadhaar" as a
hardcoded design constant. The normative record requires adapter-driven UI: FR-004 (≥ 2
independent attestation paths), OI-20 ruling (Aadhaar is one implementation of the pluggable
adapter interface, not a hardcoded dependency), DES-070 (region-level config, not hardcoded).
Doc 03 §10.12.6 recorded the disposition: "The button label and on-device copy strings MUST be
adapter-driven — fetched from region-level config or an i18n string resolved at deployment
time… No requirement change needed." The approver is CONFIRMING this disposition on the record.

**C-02** surfaced when the architect reviewed wireframe screen 2.3 (Petition — live onboarding),
warning note: "Membership caps at 100 until legal verification completes — so an unverified party
can't gather false strength." Doc 03 §10.12.6 recorded that no backing FR, DES, or US exists
and required the product-owner to decide: accept (mint FR) or reject (revise copy). The approver
directed the product-owner's decision: **accept — mint the FR**.

---

## 2. The rulings — quoted verbatim

The approver's words are quoted exactly below. No softening, no reinterpretation.

---

### C-02 — Provisional-party membership cap

> "One requirement to mint, one disposition to record. Documents only.
>
> C-02 — MINT THE PROVISIONAL-PARTY MEMBERSHIP CAP. The 'membership caps at 100 until legal
> verification' rule shown on the petition screen has no backing requirement. Mint it as a MUST:
> a provisional party (before legal verification completes) is capped at 100 members; the cap
> lifts automatically on verified legal registration. Rationale to record: it prevents an
> unverified party accumulating false strength before it is legally real — an anti-capture
> control, not display copy. Give it a proper FR ID continuing the sequence, an owner, Gherkin
> criteria, and traceability up to its BR and down to a US and TC (TC honestly OPEN — Phase 3)."

---

### C-01 — Adapter-driven string disposition (CONFIRMATION)

> "C-01 — RECORD THE ADAPTER DISPOSITION. Confirm on the record that the 'Verify with Aadhaar'
> button is an adapter-driven string resolved at build time per the pilot region's rail
> (FR-004/OI-20), not a hardcoded dependency and not a requirement change. No new requirement."

---

## 3. What each ruling closes

### C-02

| Item | Disposition |
|------|-------------|
| **Wireframe screen 2.3 cap notice** | BACKED by FR-130 (minted Doc 02 v2.5.0 §4.44). The cap is normative, not copy. |
| **FR-130** | Minted (Must, §4.44, Doc 02 v2.5.0). A provisional party — platform-activated per FR-018 but legal registration not yet verified per FR-075 — MUST be capped at 100 members. Cap lifts automatically by code on verified legal registration. No operator or manual lift path. |
| **BR trace** | BR-002 (party gains full status only by demonstrated support; provisional party MUST NOT accumulate disproportionate strength before legal legitimacy established), BR-012 (platform MUST resist governance attacks — mob capture by sudden membership flood). |
| **Owner** | Sofia Marchetti (owns FR-075 — legal-registration boundary; the cap operates within that boundary). |
| **US-0131** | Minted (Doc 05 v2.1.0), under FE-009 (Automatic activation, EP-03). SCR: SCR-06 (Petition browser & detail — wireframe screen 2.3). Status: Backlog / Not Ready pending DES. |
| **DES** | OWED — same recorded-phasing posture as FR-121..FR-129. Doc 03 design increment owed. US-0131 is NOT Ready per DoR until DES is assigned. |
| **TC** | OPEN — Phase 3. No TC minted. |
| **Doc 03 §18/§10.12.6 C-02** | Still shows "PO must decide" — closure annotation is owed at the NEXT Doc 03 version. Doc 03 is architect-owned and freshly Approved v2.2.1; no edit made to Doc 03 in this session per the approver's directive. This record is the authoritative bridge until that annotation lands. |
| **Distinction from endorsement floor** | FR-130 is a MEMBERSHIP cap on a provisional party (post-activation, pre-legal-registration). It is wholly distinct from the endorsement threshold (FR-014, FR-016) and from the endorsement-floor constants in DES-010 (max(byPopulation, byVerified, 500)) — those govern petition legitimacy. The two MUST NOT be conflated; FR-130 text includes an explicit non-conflation note. |

### C-01

| Item | Disposition |
|------|-------------|
| **"Verify with Aadhaar" button label** | CONFIRMED ADAPTER-DRIVEN. The button label and on-device copy strings are resolved at build time from the pilot region's rail configuration (FR-004/OI-20 architecture-level plurality; DES-070 region-level config). |
| **Phase-1 India deployment** | "Verify with Aadhaar" is the correct Phase-1 India deployment string. It is not a fixed design constant. The button element and interaction pattern are sound. |
| **Requirement change** | None. FR-004 (plural-pluggable-issuer) is unamended and satisfied at the architecture level (OI-20 CLOSED 2026-08-20). No new FR, no Doc 02 edit. |
| **Doc 02 edit** | NONE. No Doc 02 edit required or made. |
| **Doc 03 §10.12.6 C-01** | The recorded disposition ("The button label… MUST be adapter-driven… This must not be built as a literal string") stands. The approver's confirmation of this disposition is recorded in this decision record; no Doc 03 edit made. |
| **Build-time obligation** | The engineer MUST NOT build "Verify with Aadhaar" as a literal string in any component. It MUST be fetched from region-level config or an i18n string resolved at deployment time, per DES-070. |

---

## 4. What this record directs

| Role | Deliverable | This session |
|------|-------------|-------------|
| **product-owner** (Priya Raghunathan) | Doc 02 v2.5.0: FR-130 minted (§4.44, Must, §8 Gherkin, §11 Must count 110→111, §12 trace); Doc 05 v2.1.0: US-0131 minted (FE-009, SCR-06, Not Ready pending DES) | Yes (this session) |
| **architect** (Ravi Deshmukh) | Doc 03 §18/§10.12.6 C-02: closure annotation ("PO decided: accept — FR-130 minted") at next Doc 03 version; DES for FR-130 at next Doc 03 design increment | Next Doc 03 increment |
| **engineer** | C-01 build-time obligation: "Verify with Aadhaar" MUST be adapter-driven, not a literal string | Before building SCR-02 surfaces |
| **tester** (Ji-woo Park) | TC for FR-130/US-0131 at Phase 3; RTM row when DES and TC are available | Phase 3 |

---

## 5. Open items surfaced

| Item | Owner | Trigger |
|------|-------|---------|
| DES for FR-130 | architect (Ravi Deshmukh) | Next Doc 03 design increment |
| Doc 03 §18/§10.12.6 C-02 closure annotation | architect (Ravi Deshmukh) | Next Doc 03 version |
| TC for FR-130/US-0131 | tester (Ji-woo Park) | Phase 3 |
| RTM row for FR-130 | tester (Ji-woo Park) | After DES and TC available |
| US-0131 DoR status | product-owner (Priya Raghunathan) to confirm | After architect assigns DES |

---

## 6. Sources

| Source | Role in this record |
|--------|---------------------|
| `docs/03-architecture-design-sdd.md` §10.12.6 (v2.2.1 Approved) | Conflict register origin — C-01 and C-02 surfaced here; C-02 recorded as requirement gap requiring PO decision |
| `docs/03-architecture-design-sdd.md` §18 (v2.2.1 Approved) | C-01, C-02, C-03 recorded as §18 contradiction entries; C-04 in §10.12.6 only |
| `design/wireframes/index.html` screen 2.3 | Membership cap notice "Membership caps at 100 until legal verification completes — so an unverified party can't gather false strength" |
| `design/wireframes/index.html` screens 1.3, 1.4 | "Verify with Aadhaar" button and on-device copy |
| `docs/02-requirements-srs.md` §4.21 FR-075 | Legal-registration boundary; FR-130 cap operates within this boundary |
| `docs/02-requirements-srs.md` §4.5 FR-018 | Automatic activation — provisional-party state begins here |
| `artifacts/status/DECISIONS-2026-08-20-OI19-OI20.md` | OI-20 ruling (Rathish, 2026-08-20): Aadhaar is one implementation of the pluggable adapter interface (C-01 basis) |
| `artifacts/status/GATE-STATUS-2026-08-09.md` | Gate status record; addendum appended in this session |

---

*This record is written by the product-owner (Priya Raghunathan) and reflects the decisions of
the human approver (Rathish) verbatim. The product-owner does not decide open items. Only Rathish
is the decision-maker.*
