# Session Memory — Product Owner (Priya Raghunathan)

```
Role:        product-owner
Timestamp:   2026-08-11T22:00:00Z
Phase:       Define — Doc 05 v2.0.0 Gate 1 re-entry backlog catch-up
Product:     Trumocracy
Session:     product-owner-2026-08-11T2200
```

---

## What was done

Brought `docs/05-product-backlog.md` from v1.1.2 to **v2.0.0** (Status: In Review) via
surgical Edit calls. All 47 new user stories (US-0084..US-0130) implementing FR-074..FR-120
from SRS v2.2.0 have been seeded. All required structural updates applied.

### Edits applied

1. **Header block**: Version → 2.0.0; Status → In Review; Source pin → SRS v2.2.0; Last
   updated → 2026-08-11; v2.0.0 change-log entry added citing GATE1-DECISION-2026-08-11.md
   and SRS v2.2.0.

2. **§2 counts**: Updated to "12 epics · 56 features · 130 user stories · 9 NF items";
   coverage assertion updated to "All 101 Must FRs in Doc 02 v2.2.0"; source pin updated
   to v2.2.0.

3. **§3 WSJF table**: Added EP-11 row (party institutional life, WSJF 1.85, sequence 11)
   and EP-12 row (platform governance & stewardship, WSJF 2.08, sequence 12).

4. **§4 epics**: Updated EP-09 in-scope to remove superseded FR-062 reference (replaced
   with three-tier participation records FR-082..FR-086 and data classification/append-only
   FR-106..FR-108 and behavioural-analytics prohibition FR-111); added EP-11 (Party
   institutional life & transparency) and EP-12 (Platform governance & stewardship) with
   full outcome hypothesis, business value, in/out scope, success metric, features list,
   owner and status.

5. **§5 features table**: Added FE-037..FE-056 (20 new features) with benefit hypothesis,
   FR mapping, story range, and owner.

6. **Supersession annotations**:
   - US-0054 (FE-023 · EP-08): annotated as "SOURCED FROM SUPERSEDED REQUIREMENT — FR-046
     superseded by FR-094/FR-095; successor stories are US-0104 and US-0105."
   - US-0071 (FE-029 · EP-09): annotated as "SOURCED FROM SUPERSEDED REQUIREMENT — FR-062
     superseded by FR-082..FR-086; successor stories are US-0092..US-0096."
   - US-0072 (FE-029 · EP-09): NOT annotated — FR-063 is not superseded. Correct.

7. **§6 story additions**: Added 47 new stories organized under their epics:
   - EP-01: US-0084 (FR-074), US-0085 (FR-075)
   - EP-02: US-0086 (FR-076), US-0087 (FR-077), US-0088 (FR-078)
   - EP-04: US-0089 (FR-079), US-0090 (FR-080), US-0091 (FR-081)
   - EP-05: US-0101 (FR-091), US-0102 (FR-092)
   - EP-07: US-0103 (FR-093)
   - EP-08: US-0104 (FR-094), US-0105 (FR-095)
   - EP-09: US-0092 (FR-082), US-0093 (FR-083), US-0094 (FR-084), US-0095 (FR-085),
             US-0096 (FR-086), US-0116 (FR-106), US-0117 (FR-107), US-0118 (FR-108),
             US-0121 (FR-111)
   - EP-11: US-0097 (FR-087), US-0098 (FR-088), US-0099 (FR-089), US-0100 (FR-090),
             US-0106 (FR-096), US-0107 (FR-097), US-0108 (FR-098), US-0109 (FR-099),
             US-0110 (FR-100), US-0111 (FR-101), US-0112 (FR-102), US-0113 (FR-103),
             US-0114 (FR-104), US-0115 (FR-105), US-0119 (FR-109), US-0120 (FR-110)
   - EP-12: US-0122 (FR-112), US-0123 (FR-113), US-0124 (FR-114), US-0125 (FR-115),
             US-0126 (FR-116), US-0127 (FR-117), US-0128 (FR-118), US-0129 (FR-119),
             US-0130 (FR-120)
   Each story follows Mike Cohn format with named owner (from FR Owner column in Doc 02),
   inherited Must priority, point estimate, Implements/Depends-on, Gherkin ACs with at
   least one adversarial or negative scenario, and a "Not Ready pending DES" note for
   FR-074..FR-111.

8. **§9 estimation**: Updated total to "130 stories, approximately 812 points" (47 new
   stories add approximately 313 points).

9. **§12 traceability**:
   - Coverage assertion updated to "All 101 Must FRs in Doc 02 v2.2.0".
   - Must-NFR coverage map: NFR-027→US-0121, NF-01 and NFR-028→US-0117 added (both new
     Must NFRs from Doc 02 v2.2.0 §6); count updated to 24 Must NFRs.
   - v1.1.0 FR-062 entry annotated "(superseded — see annotation)".
   - v2.0.0 additions block added: FR-074→US-0084 through FR-120→US-0130 (47 entries).
   - DES links available for FR-112..FR-120 (provisional, re-confirm with architect)
     noted in §12 map.
   - v2.0.0 DES readiness gap declared: FR-074..FR-111 have no DES (Doc 03 §16
     next-increment scope), stories marked "Not Ready pending DES".
   - FR-046 superseded entry annotated in Should/Could map.
   - Downstream note updated to reference Gate 1 direction (not v1.1.0 re-affirmation).

---

## Decisions made

None. This session seeds stories from requirements already approved at Gate 1 (Doc 02
v2.2.0, GATE1-DECISION-2026-08-11.md). No new IDs minted beyond the planned range.
No new requirements, BRs, NFRs, constraints, or risks created.

---

## FR→US allocation summary

| Feature | FRs | Stories | Notes |
|---------|-----|---------|-------|
| FE-037 | FR-074, FR-075 | US-0084, US-0085 | One story per FR |
| FE-038 | FR-076, FR-077, FR-078 | US-0086, US-0087, US-0088 | One story per FR |
| FE-039 | FR-079, FR-080, FR-081 | US-0089, US-0090, US-0091 | One story per FR |
| FE-040 | FR-082..FR-086 | US-0092..US-0096 | One story per FR |
| FE-041 | FR-087..FR-090 | US-0097..US-0100 | One story per FR |
| FE-042 | FR-091, FR-092 | US-0101, US-0102 | One story per FR |
| FE-043 | FR-093 | US-0103 | Single FR → single story |
| FE-044 | FR-094, FR-095 | US-0104, US-0105 | One story per FR |
| FE-045 | FR-096 | US-0106 | Single FR → single story |
| FE-046 | FR-097, FR-098 | US-0107, US-0108 | One story per FR |
| FE-047 | FR-099 | US-0109 | Single FR → single story |
| FE-048 | FR-100, FR-101 | US-0110, US-0111 | One story per FR |
| FE-049 | FR-102 | US-0112 | Single FR → single story |
| FE-050 | FR-103, FR-104, FR-105 | US-0113, US-0114, US-0115 | One story per FR |
| FE-051 | FR-106, FR-107, FR-108 | US-0116, US-0117, US-0118 | One story per FR |
| FE-052 | FR-109, FR-110 | US-0119, US-0120 | One story per FR |
| FE-053 | FR-111 | US-0121 | Single FR → single story |
| FE-054 | FR-112, FR-113 | US-0122, US-0123 | One story per FR |
| FE-055 | FR-114..FR-117 | US-0124..US-0127 | One story per FR |
| FE-056 | FR-118, FR-119, FR-120 | US-0128, US-0129, US-0130 | One story per FR |

No FRs combined (no two FRs were inseparable enough to warrant a single story). No FRs
split (no single FR was unshippably large). All 47 FRs → 47 stories: one-to-one.

---

## IDs touched

| Category | IDs |
|----------|-----|
| EP minted | EP-11, EP-12 |
| FE minted | FE-037..FE-056 (20 features) |
| US minted | US-0084..US-0130 (47 stories) |
| US annotated (superseded) | US-0054 (FR-046→FR-094/FR-095), US-0071 (FR-062→FR-082..FR-086) |
| NF items | unchanged (NF-01..NF-09) |

High-water marks updated: EP-12, FE-056, US-0130. All FR/NFR/BR/CON/RISK high-water marks
unchanged (BR-021, FR-120, NFR-028, CON-014, RISK-32, TD-11, OI-18 — no new requirements
minted in this session).

---

## Open items

- Doc 05 v2.0.0 requires a new **business-mode document-review** by a neutral reviewer
  before the SOP advances further. The document is Status: In Review.
- FR-074..FR-111 stories are marked "Not Ready pending DES" — they satisfy Definition of
  Ready only after the architect updates Doc 03 with DES for the next increment.
- FR-112..FR-120 stories carry provisional DES references (DES-087..DES-092, DES-034);
  re-confirm with architect after Doc 03 is updated.
- SC-15 (CRITICAL) and SC-16..SC-18 (HIGH) from the reviewer-qa security scan on Doc 03
  v2.0.3 remain open. The architect must resolve these before design advance. This session
  does not resolve those findings (product-owner role is not the fixer).
- Carry-forwards unchanged: OI-01-NUM, OI-04-PILOT, FORK-CRIT, SC-05, OI-08.

---

## Next role

Neutral reviewer (non-product-owner) to run **document-review skill in business mode** over
`docs/05-product-backlog.md` v2.0.0.
