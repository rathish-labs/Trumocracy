# Session Memory — Product Owner

```
Role:       product-owner (Priya Raghunathan)
Timestamp:  2026-08-09T2200
Product:    Trumocracy
Phase:      Define (v1.1.0 — CR-v1.1.0 nine-requirement change request)
Session:    Continuation of 2026-08-09T1610 session; picked up after context compaction
```

## What was done

### Doc 02 — Requirements Specification (SRS-TRUMOCRACY v1.1.0)

Produced `docs/02-requirements-srs.md` v1.1.0, Status: In Review. Changes from v1.0.0:

1. **BR-013** added (§3) — mandatory pre-election debates; incumbent no auto-renomination.
   Source: CR-v1.1.0 Change 4. Owner: Aisha Nkemdirim.

2. **FR-062** added (§4.19) — public participation profile (ballot participation without direction,
   party memberships, endorsed petitions, authored proposals, debates attended).
   Source: CR-v1.1.0 Change 1. Owner: Erik Lindqvist.

3. **FR-063** added (§4.19) — ballot direction MUST NOT be disclosed through any path.
   UT-0700 and UT-0701 mandated. Source: CR-v1.1.0 Change 1. Owner: Dr. Lena Kowalczyk.

4. **FR-064** added (§4.6) — single party at a time; switching resets tenure clock.
   Source: CR-v1.1.0 Change 2. Owner: Rafael Duarte.

5. **FR-065** added (§4.9) — candidate feedback: upvote +3, downvote −1; individual votes
   private; aggregate tally public. Source: CR-v1.1.0 Change 3. Owner: Aisha Nkemdirim.

6. **FR-066** added (§4.20) — three debates per candidate per election; local conditions,
   local problems, work required; verifiable record. Source: CR-v1.1.0 Change 4.
   Owner: Aisha Nkemdirim.

7. **FR-067** added (§4.20) — candidacy from post-debate member vote; no auto-renomination.
   Source: CR-v1.1.0 Change 4. Owner: Aisha Nkemdirim.

8. **FR-068** added (§4.6) — tenure waiver for new party first 3 months; anti-capture
   controls (FR-023, FR-028) remain fully active; UT-0220 verification mandated.
   Source: CR-v1.1.0 Change 5. Owner: Rafael Duarte.

9. **FR-069** added (§4.1) — deterministic enrolment nullifier; stable personal identifier;
   only nullifier stored; verifies issuer sig, freshness, region, derivation.
   Source: CR-v1.1.0 Change 6. Owner: Marcus Adeyemi.

10. **FR-070** added (§4.1) — pluggable credential adapter; three CANDIDATE adapter types
    named explicitly (none hardcoded):
    - **(a) eIDAS 2.0 wallet adapters** — trust-anchor sig vs national/supra-national trust
      list; stable personal identifier (e.g. PID attestation natural-person identifier);
      residency attribute.
    - **(b) ICAO Doc 9303 NFC chip adapters** — SOD vs ICAO public key directory; stable
      identifier (MRZ DocumentNumber or chip pseudonym); attested residency.
    - **(c) Offline paper KYC adapters** (e.g. Aadhaar offline XML, Aadhaar paperless eKYC,
      or equivalent) — gov-signed assertion; stable identifier; residency attribute; no
      biometric retained.
    Region-level selection is a configuration decision; Doc 03 confirms final specs.
    Source: CR-v1.1.0 Change 6. Owner: Marcus Adeyemi.

11. **FR-071** added (§4.17) — nullifier-collision enrolment routes to recovery; keys rotate;
    membership, tenure, history survive; no second identity. Source: CR-v1.1.0 Change 7.
    Owner: Amara Diallo.

12. **FR-072** added (§4.17) — seven-day delay; active-key veto window ≥ delay; no voting
    during delay; notification at initiation. Source: CR-v1.1.0 Change 7. Owner: Rafael Duarte.

13. **FR-073** added (§4.1) — government eID sole enrolment-nullifier issuer class per region
    (Phase 1). Availability-only classes may not mint nullifiers. Source: CR-v1.1.0 Change 8.
    Owner: Marcus Adeyemi.

14. **RISK-22** added (§10) — stolen-credential takeover of recovery flow. Owner: Rafael Duarte.

15. **RISK-23** added (§10) — veto suppression via channel compromise. Owner: Rafael Duarte.

16. **RISK-24** added (§10) — recovery raced against a live ballot. Owner: Rafael Duarte.

17. **TD-07** added (§9.3) — deliberate asymmetry: upvote +3, downvote −1. Owner: Aisha Nkemdirim.

18. **OI-12** added (§13) — FR-073 vs ADR-003 issuer-plurality model; architect must resolve
    in Doc 03.

19. **OI-13** added (§13) — FR-062 vs NFR-001, NFR-024, TD-02 (anonymity-always conflict);
    resolution required at Gate 1 re-affirmation.

20. Three inline contradiction flags added: §4.1 (FR-073 / ADR-003), §4.19 (FR-062 / NFR-001
    / NFR-024 / TD-02), §6 (NFR-001/NFR-024 / FR-062), §9.3 (TD-02 / FR-062).

21. **Change 9 (party operation / no boss roles):** Analysis confirmed full coverage by existing
    FRs: FR-020 (join without approval), FR-021 (one equal vote), FR-024 (any matured member
    proposes), FR-056 (no operator override), BR-003 (equal standing). No new requirement minted.

22. **FR-070 deviation fix:** Prior session named only anonymous adapter categories. This session
    replaced FR-070 table row and Gherkin block with the canonical CR-v1.1.0 Change 6 text naming
    all three adapter types with their in-circuit requirements. This deliberately violates the
    Doc 02 header rule "no technology named" — the human approver's direction takes precedence;
    the three are regulatory/governmental frameworks (eIDAS 2.0 regulation, ICAO Doc 9303
    international standard, Aadhaar government programme), not software technology choices.

### Doc 05 — Product Backlog (BKLG-TRUMOCRACY v1.1.0)

Produced `docs/05-product-backlog.md` v1.1.0, Status: In Review (written in prior session).

- 10 epics (EP-01..EP-10), 36 features (FE-001..FE-036), 83 user stories (US-0001..US-0083)
- New features added: FE-029..FE-036 (8 new features)
- New stories added: US-0071..US-0083 (13 new stories)
- New screens added: SCR-21..SCR-23 (3 new screens)
- All 54 Must FRs covered by at least one story

## IDs minted

| Prefix | Range minted in v1.1.0 | Prior high-water |
|--------|------------------------|-----------------|
| BR     | BR-013                 | BR-012          |
| FR     | FR-062..073 (12 new)   | FR-061          |
| NFR    | none (26 unchanged)    | NFR-026         |
| CON    | none (12 unchanged)    | CON-012         |
| RISK   | RISK-22..24 (3 new)    | RISK-16 (Doc 02); RISK-17..21 in Doc 13 |
| TD     | TD-07 (1 new)          | TD-06           |
| OI     | OI-12, OI-13 (2 new)   | OI-11           |
| EP     | none (EP-01..EP-10 unchanged) | EP-10     |
| FE     | FE-029..FE-036 (8 new) | FE-028          |
| US     | US-0071..US-0083 (13 new) | US-0070      |
| SCR    | SCR-21..SCR-23 (3 new) | SCR-20          |

## Key decisions

1. FR-070 names eIDAS 2.0, ICAO Doc 9303, and Aadhaar (offline paper KYC) as three CANDIDATE
   adapter types with specific in-circuit requirements — none hardcoded. This overrides the
   general "no technology named" header rule by human-approver direction (CR-v1.1.0 Change 6).

2. Change 9 ("party operation / no boss roles") does not produce new FRs — covered by FR-020,
   FR-021, FR-024, FR-056, BR-003.

3. OI-13 conflict (FR-062 vs NFR-001/NFR-024/TD-02) is written as directed and not silently
   resolved. Resolution required at Gate 1 re-affirmation (Rathish).

4. OI-12 conflict (FR-073 vs ADR-003) routed to architect for Doc 03 resolution.

5. Gate 1 was approved against v1.0.0 on 2026-08-09. Re-affirmation at v1.1.0 is required before
   design proceeds. Gating human: Rathish.

## Contradiction register (full)

| Ref | Conflict | Filed as | Status |
|-----|----------|----------|--------|
| OI-13 | FR-062 (public participation profile) vs NFR-001 (no-one can determine which party a person belongs to) and NFR-024 (no member activity pattern exposed) and TD-02 (ordinary members anonymous always) | OI-13 in §13; inline flags in §4.19, §6, §9.3 | Open — resolution required at Gate 1 re-affirmation |
| OI-12 | FR-073 (government eID sole enrolment-nullifier issuer per region, Phase 1) vs ADR-003 (issuer-plurality model) | OI-12 in §13; inline flag in §4.1 note | Open — architect must resolve in Doc 03 |

## Open items

- OI-13 must be resolved at Gate 1 re-affirmation (Rathish to decide).
- OI-12 must be resolved by architect in Doc 03.
- OI-04 (pilot jurisdiction not yet named) blocks final enrolment implementation.
- OI-08 (governance constants unset) is a Design-phase dependency.
- Gate 1 re-affirmation packet must be assembled by project-manager before design proceeds.
