# v1 Identity Verification Ruling & Open-Confirmation Closure

```
Date:            2026-08-23
Decision:        v1 identity verification — phone (SMS) + government-ID document check
                 with verify-and-discard retention; hashed phone storage; five confirmations
                 (T-01..T-05, DEFERRED-v2 Musts, NFR-009 v1 re-reading, 2027-05-14,
                 v1 gate mechanism); v1 gate DATE remains NOT SET
Decision-maker:  Rathish (human approver)
Recorded by:     project-manager (Ana-Maria Petrescu)
Status:          DECIDED (ruling) + CONFIRMED (five items) + NOT CLOSED (v1 gate date) —
                 application to Docs 03, 02, and 13 IN PROGRESS this session (architect
                 first; PO second; PM third); reviews to follow
Source:          Transmitted via coordinator (2026-08-23). Applied session: 2026-08-23.
                 Third decision record this date (after DECISIONS-2026-08-23-V1-V2-SPLIT.md
                 and DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md).
```

---

## 1. What was open

Following the auth & spam-resistance rulings
(`DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md`), the v1 identity stack read:
phone-based SMS OTP (Ruling 1) plus flag-don't-block spam layer (Ruling 2). That ruling
established the channel (SMS) but left the **identity-verification depth** unspecified —
specifically, whether v1 would rely on phone alone (a spam speed-bump with no identity
document check) or would add a document-based real-person check.

Five additional items also remained open after that record (all carried from
`DECISIONS-2026-08-23-V1-V2-SPLIT.md §4`):
- T-01..T-05 Charter tensions — awaiting approver confirmation of deferred-with-disclosure dispositions
- The four DEFERRED-v2 Must FRs (FR-030, FR-031, FR-082, FR-086) — classification to be confirmed
- NFR-009 v1 re-reading — audit bar for v1 vs v2
- 2027-05-14 — referent confirmation (Definition B Gate 2; also closed the 2026-08-21 budget-ruling "2027-03-15" carry-forward query)
- v1 gate date — mechanism confirmed in prior records; date not yet supplied

---

## 2. The ruling — verbatim-in-substance

No softening, no reinterpretation.

---

### v1 identity verification: phone + government-ID document check

> v1 uses conventional consumer-app identity verification, the model apps like dating
> platforms use: **phone (SMS) PLUS a government-ID document check at signup** to confirm a
> real, legal-age person. This is a v1 anti-fraud / anti-Sybil layer, **NOT** the v2
> anonymity guarantee.

### The retention rule (CRITICAL — verify-and-discard)

> - The government ID is verified (on-device or via a provider) to produce only a
>   "verified adult, region X" FLAG. The platform MUST NOT store the identity document
>   itself or any reversible copy of it. **Keep the result, discard the source.**
> - The phone number is stored **HASHED (one-way)**, sufficient to enforce
>   one-account-per-number, never as a reversible plaintext number.
> - Record that this improves v1 Sybil-resistance over phone-alone but does NOT provide
>   the v2 anonymity guarantee: **v1 is "real-person verified, not anonymous"; v2 is
>   "unique person proven without the platform ever seeing identity."** Honesty items
>   updated accordingly.

---

## 3. The architect's three deliverable questions

The approver directed three questions to the architect that must be **ANSWERED, not assumed**
before the FRs can be finalised. The architect's answers this session may change what the
FRs can promise. These are not PM conclusions.

| # | Question | Why the answer matters |
|---|----------|------------------------|
| **Q-1** | What does the ID-verification provider actually return, and what fields does the platform store from that response? | Determines the precise data-at-rest surface; governs what FR-003 (PARTIAL) actually covers in v1 and what the honesty register must say |
| **Q-2** | What is the brute-force residual on a hashed phone number, and what mitigation is sufficient — salt strategy, key-stretching, or rate-limiting on hash lookups? | Governs the security claim for the "one-account-per-number" enforcement and the NFR-010 / NFR-016 data posture |
| **Q-3** | Which retention rules are architect-decidable (protocol design) and which are legal-review-dependent (jurisdiction-specific data-retention law, Aadhaar-specific constraints)? | Determines what can be committed in ADR-025 and what must be deferred to CON-015 legal opinion |

These three questions are the architect's **primary deliverable this session** (Doc 03
v2.5.0, ADR-025 amendment). Answers gate the PO's Doc 02 v2.11.0 and the PM's Doc 13 update.

---

## 4. Confirmations — open items folded in by the approver

| Item | Disposition | Exact wording |
|------|-------------|---------------|
| **T-01..T-05 Charter tensions** | **CONFIRMED** | Deferred-with-disclosure dispositions accepted as recorded |
| **FR-030, FR-031, FR-082, FR-086 (DEFERRED-v2 Musts)** | **CONFIRMED** | Definition-B-only; remain Must for v2; not weakened or deleted |
| **NFR-009 v1 re-reading** | **CONFIRMED** | One OWASP-class pen test for v1; the two cryptographic audits stay for v2 |
| **2027-05-14** | **CONFIRMED** | Gate-2 referent for Definition B (also closes the "2027-03-15" carry-forward query from the 2026-08-21 budget ruling — that figure matched no artifact; 2027-05-14 is confirmed) |
| **v1 gate date** | **NOT CLOSED** | The existence of a separate v1 launch-readiness gate (MS-V1-LRG) is confirmed as the mechanism; **the date itself remains NOT SET** — the approver listed this among the items folded in but supplied no date. An explicit approver value is still required. |

---

## 5. What this changes downstream

### FR / NFR changes (PO deliverable — Doc 02 v2.11.0)

- **FR-132** (v1 auth — phone-based SMS): amended to add government-ID document check as
  co-required step; verify-and-discard rule added as a Must constraint; "MUST NOT claim
  one-person-one-vote" retained and clarified as "MUST NOT claim unique personhood — the
  check confirms real person, not unique person".
- **FR-133** (spam-resistance flag-don't-block): unchanged in behaviour; the ID-check
  provides stronger Sybil signal upstream of the spam layer.
- **FR-003** (no identity data at rest — currently PARTIAL): the hashed-phone storage and
  "verified adult, region X" FLAG storage must be reflected; architect Q-1 / Q-3 answers
  govern exact scope before the PO can finalise.
- **Honesty register (H-01..H-16)**: new or amended items needed to cover (a) government-ID
  check at signup (verify-and-discard stated), (b) hashed phone (not plaintext) stored,
  (c) "real-person verified, not anonymous" framing.
- **T-06** (Charter Rule 1 vs phone-auth): retained open — the ID check improves Sybil
  resistance but still does not enforce one-human-one-vote; the tension stands.
- **T-07** (FR-003 vs phone-number storage): reshaped — the retention rule (hashed, not
  plaintext) changes the data-at-rest surface; architect Q-1/Q-3 answers and CON-015 legal
  opinion govern finalisation.
- **New tensions likely** from architect's answers to Q-1/Q-2/Q-3 (data-retention law,
  Aadhaar-specific constraints, brute-force residual on hashed phone).

### Architecture changes (architect deliverable — Doc 03 v2.5.0, ADR-025 amendment)

- **ADR-025**: amended to include government-ID document check alongside phone SMS; verify-and-discard protocol specified; hashed-phone storage confirmed; Q-1/Q-2/Q-3 answered.
- **DES-095 (IEligibilityVerifier)**: v1 backing updated — provider returns "verified adult, region X" flag; what the backing stores specified per Q-1.
- **DES-099 (spam-resistance layer)**: upstream signal improved by ID-check; unchanged in behaviour.
- New DES element likely for the ID-document-check flow (provider integration, on-device vs provider model, flag-only return, discard confirmation).

### Composition points (for architect — not PM conclusions)

**(i) Doc 01 §E1 alignment:** The retention rule ("keep the result, discard the source")
**aligns with an existing PR-FAQ promise**: Doc 01 §E1 already states: *"We do not keep
your identity documents or biometric templates — they are checked and discarded, never
stored by us."* The ruling is a composition, not a contradiction. The architect should
confirm that the technical implementation delivers exactly the §E1 promise — if it cannot,
the discrepancy must be surfaced before v2.11.0 closes.

**(ii) Doc 01 §E3 and FR-004 plurality:** Doc 01 §E3 already records the residual that a
determined state can compel an identity attestor to reveal who enrolled, which is why
FR-004 requires ≥2 independent attestors with a concentration cap. **Whether the v1
ID-verification provider is subject to FR-004 plurality — and how that interacts with
OI-20 (Phase-1 single-rail dated limitation) and FR-129 — is an architect question, not
a PM conclusion.** Register it as an architect deliverable alongside Q-1/Q-2/Q-3.

---

## 6. What remains open after this ruling

| Item | Status | Owner |
|------|--------|-------|
| Architect Q-1 / Q-2 / Q-3 answers | **REQUIRED before Doc 02 v2.11.0** | architect (Ravi Deshmukh) |
| FR-004 plurality question re: v1 ID-verification provider | **ARCHITECT QUESTION** — not a PM conclusion | architect (Ravi Deshmukh) |
| **v1 gate date** | **NOT SET — explicit approver value required** | Rathish (human approver) |
| DEP-11 (SMS delivery provider) — vendor selection | Not started | Rafael Duarte |
| DEP-12 (phone-intelligence API) — vendor selection | Not started | Rafael Duarte |
| DEP-new (ID-document verification provider) — vendor selection | Not started | Rafael Duarte / architect to define |
| **CON-015 legal opinion (India/Aadhaar)** | **MORE LOAD-BEARING** — this ruling adds government-ID document verification to v1; document verification in the India/Aadhaar pilot is precisely the legally sensitive area CON-015 covers. Must be in hand ≥ 8 weeks before Gate 2. | Sofia Marchetti |
| T-06 (Charter Rule 1 vs phone+ID auth) | Open — improved but not closed | Rathish (approver confirmation after architect answers) |
| T-07 (FR-003 vs identity data at rest) | Reshaped — architect Q-1/Q-3 and CON-015 govern | architect + PO + approver |
| New tensions from architect Q-1/Q-2/Q-3 answers | TBD | architect (Ravi Deshmukh) |

---

## 7. Application plan

| Step | Role | Deliverable | Dependency |
|------|------|-------------|------------|
| 1 | **architect** | Doc 03 v2.5.0: ADR-025 amended (ID check + retention rule + Q-1/Q-2/Q-3 answered + FR-004 plurality addressed); DES-095 updated; new DES for ID-check flow; §10.13 v1 identity updated | **First — architect answers gate everything** |
| 2 | **product-owner** | Doc 02 v2.11.0: FR-132 amended (ID check co-required, verify-and-discard, honesty update); FR-003 PARTIAL scope updated; H-register amended (items for ID check, hashed phone, real-person framing); T-06/T-07 updated | After Doc 03 v2.5.0 |
| 3 | **project-manager** | Doc 13 v2.5.0: MS-V1-02 updated (ID-check flow, new DEP); RISK-32/36/38 updated; new risks for ID-check vendor | After Doc 02 v2.11.0 |
| 4 | **Review loop** | Doc 03 v2.5.0 technical-mode c1; Doc 02 v2.11.0 business-mode c1; Doc 13 v2.5.0 business-mode c1 | Sequential per VEKTOR review loop |

---

## 8. Sources

- Ruling transmitted via coordinator (2026-08-23); decision-maker Rathish (human approver).
- Prior decision records this date: `DECISIONS-2026-08-23-V1-V2-SPLIT.md`;
  `DECISIONS-2026-08-23-V1-AUTH-SPAM-RESISTANCE.md`.
- `docs/01-press-release-prfaq.md` §E1 (verify-and-discard promise) and §E3 (attestor
  compulsion residual + FR-004 plurality rationale) — read for composition alignment.
- `docs/02-requirements-srs.md` v2.10.0 — FR-132, FR-133, FR-003 PARTIAL, FR-004, FR-129,
  H-01..H-16, NFR-009, NFR-010, NFR-016, CON-015, T-01..T-07.
- `docs/03-architecture-design-sdd.md` v2.4.1 — ADR-025, DES-095, DES-099, OI-20.
- `docs/13-project-plan.md` v2.4.0 — DEP-11, DEP-12, RISK-32, RISK-36, RISK-38, MS-V1-02,
  §3.5.3 assumption (a).
