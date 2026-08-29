# DECISIONS-2026-08-26 — Party-Creation Build Rulings (commit a18ef11)

```
Prepared by:  project-manager (Ana-Maria Petrescu)
Date:         2026-08-26
Approver:     Rathish Kumar
Commit scope: a18ef11 (party-creation build session)
Status:       CLOSED — all four rulings recorded; routing applied
Scope:        Four governance rulings on the party-creation build.
              No document text changed by this record; routing actions
              are assigned to owning roles.
```

---

## 1. Context

On 2026-08-26, the approver (Rathish Kumar) issued four rulings on open items
surfaced by the party-creation build session (commit a18ef11). The build session
closed with:

- Doc 06 v2.2.0 Approved
- Doc 07 v2.2.2 Approved
- Doc 08 v2.2.5 Approved (cycle-2 PASS, 98%, 0C/0H/0M/1L)
- Suite 491 green
- RTM: 12 of 138 Must rows COMPLETE; 126 open (8.7%)

Six items from that session required approver resolution before the next build
can proceed cleanly:

| Flag ID | Subject | Status entering this session |
|---------|---------|------------------------------|
| 60-DAY-GRACE | Whether FR-130's 100-member cap carries a 60-day grace window | Open |
| CLAUSE-TEXT-01 | Canonical non-violence clause text for ratification | Open |
| COOLDOWN-01 | Re-petition cooldown value (FR-013) — no Doc 02/03 figure found | Open |
| OI-04 | 5-region jurisdiction seed (pending registry service) | Open (tracked) |
| ARABIC-I18N | Arabic native-speaker string review | Open (tracked) |
| DES-EMBLEM | Image-emblem DES — v1 is text-only | Open (tracked) |

In addition, the build session exposed a v2 on-chain contract gap: DES-073's
collision check is implemented app-side in v1 but is absent from the v2 CONTRACT
path (`PartyRegistry.openPetition`).

Rulings 1 and 2 were finalised by the approver after reviewing the coordinator's
written recommendation; the approver chose the recommended option in each case.
That provenance is recorded here for audit completeness; it does not diminish
the rulings' authority — every ruling below is the approver's own decision.

---

## 2. Rulings — VERBATIM (Rathish Kumar, 2026-08-26)

### Ruling 1 — FR-130 Grace Period: UNCONDITIONAL

> "FR-130 GRACE PERIOD — RULED: UNCONDITIONAL. The 100-member cap is
> unconditional until legal registration is recorded, exactly as written and
> built. No grace. NO amendment needed. The '60-day grace' mentioned in scoping
> discussion was never adopted into the requirement and is explicitly NOT part of
> v1. Rationale on record: the cap is an anti-capture Must (C-02 ruling,
> 2026-08-22); a grace window would reopen the capture vector while provisional;
> 'registration verifiably in progress' would need a new legal-review-dependent
> evidence class (CON-015 territory); the cap does not freeze a legitimate party
> — the lift is automatic and instant on registration recording. Code already
> matches — no follow-up build session needed."

*Provenance:* coordinator recommended the unconditional reading; approver
adopted the recommendation.

### Ruling 2 — Non-Violence Clause: RATIFIED AS-IS

> "NON-VIOLENCE CLAUSE — RATIFIED AS-IS. The frozen text: 'This party will act
> through peaceful and lawful means only. No member may use, encourage, or
> support any form of violence in any activity connected to this party.' is the
> ratified, non-removable FR-077 clause text. It is frozen before
> first-party-adoption; any later change is a breaking amendment requiring its
> own process. Closes CLAUSE-TEXT-01. No code change (the constant already
> carries this text verbatim)."

*Provenance:* coordinator recommended ratifying the existing constant text;
approver adopted the recommendation.

### Ruling 3 — Re-Petition Cooldown: CONFIRMED 30 DAYS

> "RE-PETITION COOLDOWN — CONFIRMED: 30 days. FR-013's re-petition cooldown is
> a decided policy value, 30 days, to be given an explicit home in Doc 02
> (routed to the PO). Closes COOLDOWN-01. Code already matches
> (REPETITION_COOLDOWN_SECONDS = 30 days)."

### Ruling 4 — Lesser Deferrals: TRACKED

> "LESSER DEFERRALS — TRACKED: (a) 5-region jurisdiction seed pending OI-04 /
> registry-service backing; (b) Arabic native-speaker string review owed (Doc 14
> / technical-writer territory before launch); (c) image-emblem DES owed —
> emblem is text-only for v1; (d) DES-073's collision check remains
> unimplemented in the v2 CONTRACT (PartyRegistry.openPetition — the on-chain
> path) while v1 now has it app-side — a tracked v2 gap routed to the
> architect's next Doc 03 increment."

---

## 3. Analysis

### 3.1 Ruling 1 — FR-130: unconditional cap

**Requirement as built.** FR-130 in Doc 02 (as of v2.x) reads: a party that is
platform-activated per FR-018 but whose legal registration has not been verified
per FR-075 MUST NOT exceed 100 members. The lift condition is `recordLegalRegistration()`
recording verified registration — automatic and code-only. No grace window
appears in any version of Doc 02 or Doc 03.

**Code constant.** `packages/protocol/src/constants.js` line 134:
`export const PROVISIONAL_MEMBER_CAP = 100;` The comment at lines 126-133
explicitly records: "D2 coordinator ruling 2026-08-25: no grace period; cap is
unconditional." This ruling (Ruling 1, 2026-08-26) re-affirms and supersedes
the coordinator-level note with approver-level authority.

**60-day grace origin.** The "60-day grace" arose in a scoping discussion. It
was never entered into Doc 02 as a requirement, never assigned an FR number, and
never built. It was a candidate option considered and not adopted. This ruling
formally closes the question: the 60-day grace is NOT part of v1 and is NOT
part of any current requirement.

**No follow-up build action.** The code already matches the unconditional ruling.
No engineer action required.

### 3.2 Ruling 2 — Non-violence clause: text verification

**Code constant.** `packages/protocol/src/constants.js` lines 165-168:

```
export const NON_VIOLENCE_CLAUSE =
  'This party will act through peaceful and lawful means only. ' +
  'No member may use, encourage, or support any form of violence in any ' +
  'activity connected to this party.';
```

**Assembled string:** "This party will act through peaceful and lawful means
only. No member may use, encourage, or support any form of violence in any
activity connected to this party."

**Ruling 2 verbatim text:** "This party will act through peaceful and lawful
means only. No member may use, encourage, or support any form of violence in any
activity connected to this party."

**Verification result: MATCH — the constant carries the ratified text verbatim.**

**Frozen status.** This ratification fixes the text before first-party-adoption.
Any subsequent change is a breaking amendment requiring its own process (ADR-010
protocol governance action and a new frozen constant). CLAUSE-TEXT-01 is CLOSED.

**No engineer action required.**

### 3.3 Ruling 3 — Re-petition cooldown: value verification

**Code constant.** `packages/protocol/src/constants.js` line 186:
`export const REPETITION_COOLDOWN_SECONDS = 30 * DAY;`
where `DAY = 86_400` (line 18), giving `REPETITION_COOLDOWN_SECONDS = 2,592,000`
seconds = **30 days**.

**Verification result: MATCH — code carries 30 days, consistent with the
confirmed policy value.**

**Doc 02 home.** No figure for this cooldown appears in Doc 02 or Doc 03 as of
the party-creation build session (the engineer noted this in the constant's
comment block: "No published figure found in Doc 02/03 (grepped: cooldown,
COOLDOWN, repetition, re-petition)"). This ruling directs the product-owner to
give it an explicit home in Doc 02. COOLDOWN-01 is CLOSED on the approver side;
Doc 02 annotation action remains open (see §5).

**No engineer action required.**

### 3.4 Ruling 4 — Lesser deferrals: gap register

| Deferral | Scope | Ruling disposition |
|----------|-------|--------------------|
| (a) 5-region jurisdiction seed | OI-04, pending registry-service backing | Tracked open; no build action this session |
| (b) Arabic native-speaker string review | Doc 14 territory, pre-launch | Tracked open; routed to technical-writer |
| (c) Image-emblem DES | v1 is text-only (1-8 chars, EMBLEM constant); image path needs dedicated DES | Tracked open; routed to architect (next Doc 03 increment) |
| (d) DES-073 v2 contract collision gap | App-side only in v1; `PartyRegistry.openPetition` (on-chain path) unimplemented | Tracked open v2 gap; routed to architect |

Note on (c): `packages/protocol/src/constants.js` lines 144-147 already
encode the text-emblem bounds (`EMBLEM = { MIN_CHARS: 1, MAX_CHARS: 8 }`),
consistent with the "text-only for v1" ruling.

**No engineer action required by any ruling in this session.**

---

## 4. Consequences

### Immediate — items CLOSED by these rulings

| Item | Resolution |
|------|-----------|
| 60-DAY-GRACE | CLOSED. Grace window never adopted; FR-130 is unconditional. No amendment. |
| CLAUSE-TEXT-01 | CLOSED. Non-violence clause ratified as-is. Text frozen. |
| COOLDOWN-01 | CLOSED (approver side). 30-day value confirmed. Doc 02 annotation action remains (routed). |

### Open items carried forward

| Item | Owner | Notes |
|------|-------|-------|
| Doc 02 increment (FR-130 annotation, FR-077 clause, FR-013 cooldown home, deferral notes) | product-owner | Business review + approval to follow |
| DES-073 v2 contract collision gap; image-emblem DES | architect | Next Doc 03 increment, not this session |
| Arabic native-speaker string review | technical-writer | Pre-launch, pre-Gate 2 |
| OI-04 jurisdiction seed (5 regions) | product-owner / architect | Pending registry-service backing |
| Gate 2 NOT READY | all | 126 of 138 Must rows open (8.7%) |

### Engineer follow-up

**No engineer work is required by any ruling in this session.** All four rulings
either confirm code as-is (Rulings 1, 2, 3) or route design/documentation
actions to non-engineer roles (Ruling 4).

---

## 5. Routing

| Action | Owner | Timeline / Status |
|--------|-------|-------------------|
| Doc 02 increment — FR-130 unconditional annotation (60-day grace never adopted); FR-077 ratified clause text with frozen/breaking-amendment note; FR-013 cooldown-value home (30 days); deferral notes where Doc 02 has a natural home | product-owner | Next PO session; business review + approval to follow |
| DES-073 v2-contract collision check (on-chain path `PartyRegistry.openPetition`) | architect | Next Doc 03 increment (not this session) |
| Image-emblem DES (v2 scope) | architect | Next Doc 03 increment (not this session) |
| Arabic native-speaker string review (Doc 14 content) | technical-writer | Pre-launch, before Gate 2 |
| OI-04 jurisdiction seed (5 regions) | product-owner / architect | Pending registry-service backing decision |
| No engineer work required | — | Explicitly confirmed by all four rulings |

---

## 6. Open Items

| OI | Description | Owner | Status |
|----|-------------|-------|--------|
| OI-04 | 5-region jurisdiction seed pending registry-service backing | product-owner / architect | OPEN |
| ARABIC-I18N | Arabic native-speaker review of UI strings | technical-writer | OPEN (pre-launch) |
| DES-EMBLEM (image) | Image-emblem DES for v2 | architect | OPEN |
| DES-073-v2-gap | Collision check absent from `PartyRegistry.openPetition` (v2 contract) | architect | OPEN v2 gap |
| Gate 2 | RTM 126/138 Must rows open | all | NOT READY |
