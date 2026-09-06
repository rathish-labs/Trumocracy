# Document Review — Doc 06 Coding & UT v2.4.3 (technical, cycle 1)

```
Reviewed document: 06-coding-and-ut.md
Document version: 2.4.3
Document:    Coding & Unit Testing — Trumocracy (CODE-TRUMOCRACY)
Version:     2.4.3
Review mode: technical
Cycle:       1 of 5
Reviewer:    reviewer-qa (neutral — engineer Samuel Oyelaran owns Doc 06 and the code)
Date:        2026-08-29
Score:       100%
Critical:    0
High:        0
Medium:      0
Low:         0
Verdict:     PASS
```

---

## What was checked

1. EN `workerGateHow` — both FR-080 facts now stated.
2. AR `workerGateHow` — mirrors EN, both facts present.
3. UT-0872 extended assertions — meaningful, not tautological.
4. Doc 06 v2.4.3 changelog — accuracy.
5. Suite count — unchanged at 610.
6. Jargon filter and grade-8 reading level on the updated string.
7. v2.4.2-passing content — spot-confirmed unchanged (UT-0885/UT-0886, consent panel
   strings, consent panel structure).

---

## ISS-01 (Low) — `workerGateHow` updated in EN and AR

**What was required:** both `workerGateHow` strings (EN and AR) must state both FR-080 facts
at the gate, so the gate is consistent with the consent panel and so existing Workers see an
accurate standing reminder.

**EN (read verbatim):**

> "You can say you are a Worker at any time. Nobody approves it — you decide. It lasts for
> the term, and it makes your record of taking part in this party public for that time."

Clause (i) permanence: "It lasts for the term" — explicit. ✅  
Clause (ii) participation-record publicity: "your record of taking part in this party public
for that time" — explicit, using the same "record of taking part" phrasing as the consent
panel. ✅  
No-approval: "Nobody approves it — you decide" — retained from v2.4.2. ✅  
Grade-8 reading level: all short sentences, everyday vocabulary. ✅  
Jargon filter: no wallet / seed phrase / private key / gas / token / mint / chain /
blockchain / crypto. ✅

**AR (read verbatim):**

> "يمكنك أن تعلن أنك عامل في أي وقت. لا أحد يوافق على ذلك — أنت من يقرر. وهو يستمر
> طوال المدة، ويجعل سجل مشاركتك في هذا الحزب علنيًا طوال تلك المدة."

Translated segment by segment:
- "يمكنك أن تعلن أنك عامل في أي وقت." = "You can declare you are a Worker at any time." ✅
- "لا أحد يوافق على ذلك — أنت من يقرر." = "Nobody approves that — you are the one who decides." ✅
- "وهو يستمر طوال المدة" = "And it lasts for the whole term" — permanence. ✅
- "ويجعل سجل مشاركتك في هذا الحزب علنيًا طوال تلك المدة." = "and makes your record of participation in this party public for that period." — participation-record publicity. ✅

Both FR-080 facts present in AR. The AR draft flag at §7 #17 is still in place (native-speaker
review owed before launch). ✅

ISS-01 resolved. ✅

---

## UT-0872 extended assertions — meaningful not tautological

**What was required:** extended assertions must test both facts are present at the gate and be
genuine guards (failing if the string reverts to the old narrower framing).

**Assertions added (read verbatim):**

```javascript
const gateText = gate.textContent ?? '';
expect(gateText).toMatch(/lasts for the term/i);
expect(gateText).toMatch(/record of taking part.*public/i);
```

**Assessment:**

`/lasts for the term/i` — tests for the permanence fact. The old `workerGateHow` ("makes what
you put forward public for the term") does NOT contain "lasts for the term"; it would fail
this assertion if reverted. ✅

`/record of taking part.*public/i` — tests for the participation-record publicity fact using
the "record of taking part" phrasing, not merely the word "public" (which appeared in the old
string in a different context). The old string would fail this assertion on reversion. ✅

Both are genuine guards: they test the right properties, they would fail on reversion to the
old copy, and they test the rendered gate element specifically (via `gate.textContent`) rather
than a global text scan. Not tautological.

The comment above the assertions reads: "The gate is step 1 of the consent event, so it must
not understate what step 2 asks the member to accept — an initial impression narrower than the
truth still misleads." This correctly states the ISS-01 rationale and will help future
reviewers understand why the gate is asserted here in addition to the consent panel. ✅

---

## Suite count and Doc 06 counts

Change header states "Suite unchanged at 610" — correct (the fix is copy and test logic within
the existing UT-0872 describe block; no new test IDs were added). §3 breakdown note is
unchanged at web 91. ✅

---

## Unchanged content from v2.4.2

UT-0885 and UT-0886 unchanged. EN and AR consent panel strings unchanged. TierDeclaration
component structure (two-step, consent panel before confirmation) unchanged — the `workerGateHow`
fix is purely a string update; the component rendering logic was not touched. ✅

---

## Verdict

**PASS — 100% / 0 Critical / 0 High / 0 Medium / 0 Low**

Both EN and AR `workerGateHow` now state the full scope of FR-080's disclosure at the gate,
consistent with the consent panel and with what existing Workers see as their standing
reminder. UT-0872's extended assertions are genuine guards. Suite is still 610. Nothing else
changed.
