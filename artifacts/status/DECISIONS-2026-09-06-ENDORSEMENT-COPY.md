# DECISIONS-2026-09-06 — Petition-Endorsement Landing Copy (FR-131 class ruling)

```
Prepared by:  product-owner (Priya Raghunathan, Doc 02 owner; FR-131 requirement owner: Nadia Hassan)
Date:         2026-09-06
Approver:     Rathish Kumar — CONFIRMATION SOUGHT (this is a product-owner ruling, not yet approver-confirmed)
Trigger:      Doc 06 v2.5.1 §7 item 26 ("left in place" list) + artifacts/engineer-2026-09-05T1700.md
              (open item routed to product-owner), following the FR-131 sweep at commit 0a5c542.
Status:       RULED — Ruling B (overclaim; copy MUST change). Doc 02 amendment drafted.
              Awaiting approver confirmation.
Scope:        One question asked; one ruling given; two adjacent findings of the same class
              recorded; one Doc 02 amendment drafted; four routing actions assigned.
              This record changes no product code and no document text — the Doc 02 change is
              drafted as an anchored spec for the applier (see §6).
```

---

## 1. The question

Is **"anonymous endorsement"** — specifically, the landing-page claim that a citizen may back a
petition **"with your name kept private"** — a legitimate v1 property, or another overclaim of the
class the project already corrected once for party membership (`parties.joinPrivate`, UT-0869)?

The strings under judgement (read at HEAD; **not edited by this session** — they are product code,
engineer-owned):

| # | Site | String |
|---|------|--------|
| S-1 | `apps/web/src/i18n/en.ts` ~48-51 — `home.steps[1].body` | "Support a new party with your name kept private. When enough people in your area back it, the party starts. Nobody decides this. The count does." |
| S-2 | `apps/web/src/i18n/ar.ts` ~51-54 — the Arabic mirror | "ادعم حزبًا جديدًا مع بقاء اسمك سريًا. عندما يدعمه عدد كافٍ من الناس في منطقتك، يبدأ الحزب. لا أحد يقرر ذلك. العدد هو من يقرر." ("with your name kept secret") |

The engineer left both in place **correctly**: they describe petition **endorsement**, not voting,
and FR-131's closing sentence is scoped, literally, to "v1 **voting** behaviour". The engineer
routed rather than rewrote (engineer note, Decision 3). That was the right call — the question is
mine, and this record answers it.

---

## 2. Evidence weighed

### 2.1 What the platform promises about backing, in its own approved documents

| Source | What it says |
|--------|--------------|
| **Doc 14 §2.2** (User Guide, Approved) — "⚠️ Your support will be public by default in this version" | "When backing ships, it will be a **public act**, on purpose. It is closer to signing a public petition in the street than to casting a secret ballot. Public backing is what will give a petition its weight." · "**You will back it pseudonymously.** … Your real name will not be shown." · "**But the act itself will be on the public record**, and in a small area, or if people already know your made-up name, that could be enough for someone to work out who you are." · "A **fully private** way to back a petition is a planned design option for high-risk places. It is **not switched on in this version.**" · "**So: once this ships, only back a petition if you are comfortable being seen to support it.**" |
| **Doc 14 §2.6** ("What to do meanwhile", item 3) | "**Be careful what you back publicly.** Backing a petition is public by design (§2.2)." |
| **Doc 14 §0.1** ("Read this first") | "Please do not use this release to organise for real **if being known as a supporter** … could cost you your job, your safety or your family." |

**This is decisive on its own.** The approved, public-facing User Guide tells a citizen that backing
is public by design and that they should only do it if they are content to be seen doing it. The
landing page tells the same citizen the opposite — that their name is kept private. Two published
Trumocracy surfaces contradict each other on the one fact that determines whether a person in a
hostile jurisdiction is safe. The landing page is the one a citizen reads **first**, before they
ever reach Doc 14.

### 2.2 What the build actually does

| Source | Finding |
|--------|---------|
| `packages/protocol/src/flags.js` lines 52-58 | `PRIVATE_ENDORSEMENT: { key: 'private_endorsement', description: 'Charter option: fully private petition endorsement for high-risk jurisdictions.', defaults: { dev: true, staging: false, prod: false }, removeBy: 'Phase 4' }` |
| `docs/12-application-inventory.md` line 251 | `private_endorsement` — dev **on**, staging **off**, prod **off** — "Phase 4" |
| `apps/web/src/config/flags.tsx` line 92 | `PRIVATE_ENDORSEMENT: 'private_endorsement'` — the flag is wired into the web app and is off in prod |

**Private endorsement is a named, un-built, flag-dark Phase-4 capability.** The landing page is
selling the property that a Phase-4 flag turns on. That is not an interpretation question.

### 2.3 What v1 must record to satisfy its own Must requirements

- **FR-014 (Must):** "Accept **at most one endorsement per person per petition**…" — §16.3 v1 row:
  "**DB-enforced** one endorsement per petition scope"; the ZK nullifier is the **v2** column.
- **FR-015 (Should):** "Allow an endorser to **withdraw** an endorsement at any time before
  activation and decrement the count" — §16.3 v1 row: "DB decrement; no endorser identity revealed."

A conventional database cannot enforce "at most one per person" or honour "withdraw **your**
endorsement" without holding a link from the account to the endorsement. Under Definition-A
(ADR-024/ADR-025, conventional authentication) that link **exists and is readable by the operator**.
This is the same fact FR-131(b) states for party membership, applied to endorsement.

Note on what FR-015/FR-017 actually govern: they govern **disclosure** — what the platform
*publishes* or *reveals*. "Without revealing who withdrew" and "without revealing the identity of
any endorser" are constraints on the platform's output. **Neither is a statement that the platform
does not know.** They do not license the claim in S-1/S-2, and no requirement in Doc 02 today
governs the honesty of what the product *claims about itself* outside the ballot. That gap is §5.

### 2.4 Where the "unlinkable" language in Doc 02 comes from

- Actor table (§2.3, line 524): "Endorser … Privacy posture: **Anonymous**".
- Data classification (line 1289): "Endorsement records | **Public (aggregate); unlinkable
  individually**".

Both are **Definition-B target properties**, phased by §16.3 exactly as FR-082 is. §16.5 already
records the ruling that governs this whole family: **FR-082 CONFIRMED Definition-B-only** — "In v1,
the operator DB links member account to party. A Supporter's party membership IS knowable by the
operator and is NOT unconditionally anonymous" — and **Charter Rule 6 CONFIRMED**: "v1 accepted as a
**disclosed non-anonymous product** under FR-131 + §16.4" (all Rathish, 2026-08-23). A v1 UI string
may not quote a v2 target row as a shipped v1 property. That is precisely what the retired
`joinPrivate` copy did, and what S-1/S-2 do.

### 2.5 The precedent

`apps/web/src/i18n/en.ts` `parties.joinPrivate`, as corrected under FR-131(b) and guarded by
UT-0869 (`apps/web/test/join-membership.test.tsx` line 444):

> "Your membership is not made public. In this version of the platform, our own records can link
> your account to the party you join. That link is never published. We tell you this plainly
> instead of promising more than we can keep."

The pattern: **state what we do not publish; separately state what our own records can see; do not
merge the two into one comforting word.** Doc 14 §2.6 uses the same shape at length. It is the
approved house pattern for this class and it is the model for the replacements in §4.

---

## 3. RULING — **B. It is an overclaim of the `joinPrivate` class, and it MUST change.**

**Ruling B, on two independent grounds — and the endorsement case is *worse* than the membership
case it is modelled on, not merely equivalent.**

1. **The operator ground (the `joinPrivate` class).** In a Definition-A deployment the operator
   database links the account to the endorsement — necessarily, because FR-014 and FR-015 cannot be
   satisfied otherwise. A Grade-8 reader takes "your name kept private" to mean *Trumocracy cannot
   connect me to this*. That is false in v1, for exactly the reason FR-131(b) states for party
   membership. Same class, same falsehood, same correction owed.
2. **The publication ground (unique to endorsement, and more serious).** `joinPrivate`'s surviving
   claim — "your membership is not made public" — is **true**: individual membership records are
   never disclosed (Doc 02 data classification: "Membership records | Aggregate public, individual
   never disclosed"). **Backing has no such surviving claim.** Backing is a **public act by design**
   (Doc 14 §2.2), pseudonymous rather than private, and the User Guide explicitly warns that in a
   small area the pseudonym can be unmasked. So S-1/S-2 are not "true-but-incomplete" like the
   membership case; on this ground they are **simply the opposite of what the product does**.

**Why FR-131's discipline "not reaching it" is not a defence.** The engineer's literal reading was
correct and the routing was correct. But a rule that is literally about voting, applied to a product
whose *first* privacy-relevant act is not voting, under-specifies. The scope limit is an artefact of
how FR-131 was drafted (as a ballot-screen notice), not a judgement that endorsement claims may be
loose. Reading the ban as permission would produce the absurd result that the platform must be
scrupulous about the ballot and free to mislead on the landing page — where more citizens will
decide whether to trust it. Ruled: the ban is a duty about **claims**, not about a place.

**Severity.** This is the highest-consequence copy defect in the product. A person in a hostile
jurisdiction who reads "your name kept private" and backs a petition has taken a **public,
permanent, on-the-record political act** believing they were safe. Doc 14 §0.1 names the cost:
"your job, your safety or your family." Nothing about the correction is cosmetic.

**What this ruling does NOT decide** — see §7.

---

## 4. The replacement copy (normative content; exact strings specified)

The engineer implements. **This session changes no product code.**

**The four facts that MUST survive any wording change** (the normative floor — if the engineer or a
designer needs different length or phrasing, all four must remain, and any variant must satisfy the
UT-0869-pattern guard in §5.4):

- (i) backing is a **public act, on purpose** — it is the point of a petition;
- (ii) the citizen's **real name is not shown**;
- (iii) **Trumocracy's own records can link the backing to the account** (FR-131(b) applied);
- (iv) the existing, keep-able promise: **nobody approves a party; the count does.**

### 4.1 S-1 — `apps/web/src/i18n/en.ts` · `home.steps[1].body` — REPLACE

> Backing a party is a public act, on purpose. Your name is not shown, but the backing goes on the
> public record, and our own records can link it to your account. Only back a party you are content
> to be seen supporting. When enough people in your area back it, the party starts. Nobody decides
> this. The count does.

Banned words absent ("private", "anonymous", "receipt-free", "secure"). Jargon list absent (wallet,
seed phrase, private key, gas, token, mint, on-chain, blockchain, crypto, nullifier, hash).
Grade-8; short sentences. The step **title** ("Back the parties you believe in") makes no claim and
is unchanged. This body is ~58 words against ~30-word siblings; the length is the cost of the four
facts and is accepted deliberately — Doc 14 §2.2 needs four bullets to say the same thing.

### 4.2 S-2 — `apps/web/src/i18n/ar.ts` · the Arabic mirror — REPLACE (engineer draft)

> دعم حزب فعل علني، وهذا مقصود. لا يُعرض اسمك، لكن الدعم نفسه يُسجَّل في السجل العلني، ويمكن لسجلاتنا
> نحن أن تربطه بحسابك. لا تدعم حزبًا إلا إذا كنت مرتاحًا لأن يعرف الناس دعمك له. وعندما يدعمه عدد كافٍ
> من الناس في منطقتك، يبدأ الحزب. لا أحد يقرر ذلك. العدد هو من يقرر.

Mirrors the approved `ar.ts` `joinPrivate` phrasing ("يمكن لسجلاتنا نحن أن تربط…"). **Engineer
working draft — native-speaker review owed** (Doc 06 §7 item 17; Doc 02 §13 tracked deferral (b);
ARABIC-I18N). Both locales MUST land in the same commit: a fix that leaves one locale lying does not
close the defect (engineer note, Decision 4).

---

## 5. Second finding, same class, same page — `home.promises[0]` (en + ar)

Found while reading S-1 in context, four lines below it, in the **"What we promise"** list:

- `en.ts` line 62: **"We never learn which party you support."**
- `ar.ts` line 65: **"لا نعرف أبدًا أي حزب تدعم."** ("We never know which party you support.")

This is **flatly false in v1** and is the single most direct contradiction of FR-131(b) anywhere in
the product: FR-131(b) states "the platform database **CAN see** vote direction and party membership
in v1"; Doc 14 §0.1 states "Trumocracy's own database can see how you voted **and which party you
belong to**". The 2026-09-05 sweep did not find it **because it contains none of the four banned
words** — which is itself the argument for §6: a word-list rule cannot catch a false claim written
in plain English.

### 5.1 `en.ts` · `home.promises[0]` — REPLACE

> We never publish which party you belong to. In this version of the platform, our own records can
> see it, and we say so plainly rather than promise more.

("belong to", not "support", so it cannot be misread as covering backing — which §4 now correctly
describes as public. The surviving promise is true: Doc 02 data classification, "Membership records
| Aggregate public, individual never disclosed".)

### 5.2 `ar.ts` · `home.promises[0]` — REPLACE (engineer draft)

> لا ننشر أبدًا الحزب الذي تنتمي إليه. في هذه النسخة من المنصة، يمكن لسجلاتنا نحن أن ترى ذلك، ونقول
> هذا بوضوح بدل أن نعد بأكثر مما نستطيع الوفاء به.

### 5.3 Third finding — carried, not silently swept: the FR-082 "Supporters are anonymous" strings

Doc 06 §7 item 26 lists these as deliberately left in place. Under the FR-131 clause (e) drafted in
§6 they **are** reached, and I say so here rather than let a future sweep rediscover them:

- `packages/sdk/src/proposals.js` line 233 (a **user-facing** refusal message):
  "authoring a proposal requires Worker tier or above, because authorship is public and **Supporters
  are anonymous**. Worker tier is self-declared — no one approves it."
  §16.5 CONFIRMS FR-082 is Definition-B-only and that a Supporter's membership **is** knowable by
  the v1 operator. **REPLACE with:** "authoring a proposal requires Worker tier or above, because
  authorship is public and a Supporter's participation is never published. Worker tier is
  self-declared — no one approves it." (True in v1: "Participation record … Supporters: no such
  record exists"; and it preserves the actual reason for the gate.)
- `apps/web/src/components/ProposalsAndDebate.tsx` line 18 — a doc comment paraphrasing that copy;
  follow the message.
- `packages/protocol/src/proposals.js` ~23, ~67 — **doc comments describing FR-082 as a
  requirement**. These are **not** overclaims and need no rewrite; they SHOULD gain a
  "(FR-082 — Definition-B property; §16.3 DEFERRED-v2)" marker so a reader does not mistake a
  requirement for shipped v1 behaviour. **SHOULD, not MUST.**
- `packages/sdk/src/ballot.js` (`choice` typedef, "absent in v2 for receipt-freeness") and the
  `private_endorsement` flag description: **both stand.** They describe v2/Phase-4 behaviour
  explicitly, which clause (e) does not touch.

This third finding is a **consequence** of clause (e), not part of the question asked. The approver
may confirm it with the ruling or sever it into its own item; if severed, clause (e) still stands
and the strings simply fail their next sweep.

### 5.4 Regression guard (engineer to assign the `UT-####` ID — I do not mint test IDs)

One guard in the **UT-0869 pattern**, asserting against the **en source strings and the rendered
landing page**, and asserting the Arabic mirror is honest:

- `home.steps[1].body` does **not** contain "kept private"; **does** contain "public act",
  "your name is not shown" (or equivalent), and "our own records can link";
- `home.promises[0]` does **not** contain "never learn"; **does** contain "never publish";
- neither string contains "private", "anonymous", "receipt-free" or "secure" — here a plain
  substring ban is safe, because unlike the FR-131(a) banner **no mandated negated form applies to
  this copy** (engineer note, Decision 2 — the negation-aware exception exists only for the ballot
  banner);
- the Arabic mirror does not contain "سريًا"/"سري" (secret) in the endorsement step, and does not
  claim "لا نعرف" (we never know) about party membership.

**No feature flag.** A correction of a false statement is not a feature; it ships on trunk in the
next build session, exactly as the `joinPrivate` correction did.

### 5.5 Story home

This work lands under **US-0134 (FR-131 · DES-098)**, the honesty-notice story already open. **No
new `US-####` is minted** — this is a copy correction under an existing Must, matching the UT-0869
precedent. If the engineer prefers a discrete story for commit hygiene, tell me and I will mint one
at the next Doc 05 increment.

---

## 6. Doc 02 — **YES, it changes.** FR-131 is amended, not re-litigated per string.

**Ruled: amend.** The rule is extended so this class is decided once.

**Why amend rather than rely on what exists:**

- **FR-131(b) does not cover it.** (b) is a statement *inside a ballot-screen notice* about what the
  database can see; it is not a duty on landing-page copy. The closing sentence, which *is* such a
  duty, is scoped to "v1 **voting** behaviour". The gap is real, and the engineer's literal reading
  proved it by leaving two false strings shipped and correct in doing so.
- **FR-015/FR-017 do not cover it.** They govern what the platform **discloses**, not what the
  platform **claims about itself**. Nothing in Doc 02 today makes a marketing claim about
  endorsement or membership testable.
- **The class has now cost two litigations** (membership 2026-09-05; endorsement 2026-09-06) and a
  third is already visible (§5.3). A per-string ruling cadence is a governance smell: it makes
  honesty depend on whoever next runs a grep for four words — and §5 shows the two worst strings
  contained none of them.
- **Amending FR-131 beats minting a new FR.** No new ID, no new open RTM Must row, and — decisively
  — the engineer, the sre (REL-LIM-18), Doc 09 and Doc 14 all already cite **FR-131 as *the* honesty
  rule**. One address for the whole class is worth more than taxonomic tidiness about the section
  title.

**The amendment** (drafted verbatim in the anchored spec, `artifacts/product-owner-2026-09-06T1000-endorsement-copy-spec.md`):

- **New clause (e) — Honesty-of-claim across every v1 participation act.** The duty is about
  **claims**, not a word list, and is not confined to the ballot. "Participation act" = casting a
  vote, endorsing/backing a petition, joining or belonging to a party, or supporting a party. **The
  test is what an ordinary Grade-8 reader would take the claim to mean**, not whether a banned word
  appears. Where an act is additionally **public by design** — endorsement is (Doc 14 §2.2;
  `private_endorsement` is a Phase-4 flag, off in every v1 deployment) — the copy MUST say so and
  MUST NOT describe it as kept private, secret or hidden. The approved satisfying pattern is named:
  `parties.joinPrivate` (UT-0869). Applies in **every language**.
- **The closing sentence is widened** from "to describe v1 voting behaviour" to "…**or any other v1
  participation act**", with an explicit carve-out preserving clause (a)'s mandated negated forms
  (so the amendment cannot break the FR-131(a) banner or UT-0887).
- **Version:** 2.16.3 → **2.17.0** (a normative scope extension — minor, not patch).
  **Status: In Review.** It **re-enters the document-review loop** (business mode, neutral
  reviewer assigned by the project-manager) before it is Approved. I am not fast-tracking my own
  amendment.
- **Doc 02 §13 gains a tracked-routing block (j)** for the un-ruled enrolment-copy question in §7.1.

**Clause (e) is deliberately scoped to participation acts and NOT to enrolment/verification
claims** — those need their own evidence review (H-16, H-17, H-18, FR-132, CON-015) and are §7.1.

---

## 7. What this ruling does **NOT** decide

### 7.1 The enrolment / verification copy — NOT ruled, routed as an open question

Two landing strings make claims about the **identity check**, not about a participation act. They
are outside clause (e) by design and I decline to rule them on this session's evidence:

- `en.ts` `home.steps[0].body`: "We never see your **documents**, your **name** or your **address**,
  and we do not keep them." — against **H-17**: "The ID-check provider (third-party vendor) **sees
  the government-ID document** … The vendor non-retention clause (FR-132 §(e)) is a legal and
  contractual control, **not a technical guarantee**." Whether "we" honestly excludes a vendor the
  citizen never chose is a real question, and the answer may be a wording change, a Doc 14
  cross-reference, or nothing.
- `en.ts` `home.promises[3]`: "We do not count your visits, and we do not keep a record of what you
  read here." — believed true (the absence-test pattern, UT-0870) but **not verified against the
  deployed build in this session**. It states a fact about production, so it needs the sre's
  confirmation, not mine.

Routed to me (product-owner) as **Doc 02 §13 tracked routing (j)**, with the sre consulted on the
second. **Not a v1 blocker; not part of Ruling B.**

### 7.2 Everything else

- **It does not decide FR-015 or FR-017.** Both stand unamended. Endorser identity is still never
  revealed and never published — the correction is that "not published" and "not knowable" are
  different promises, and only one of them is ours to make in v1.
- **It does not decide whether endorsement *should* be public.** That is settled design
  (Doc 14 §2.2; `private_endorsement` Phase 4). This is a truth-in-copy ruling, not a policy change.
- **It does not pull `private_endorsement` forward.** Phase 4 is unchanged.
- **It does not touch the FR-131(a) ballot banner, DES-098, UT-0887 or REL-LIM-18** — all closed at
  commit 0a5c542 and unaffected.
- **It does not edit any product code.** The strings are engineer-owned; §4 and §5 are a
  specification handed across the artifact bus.
- **It does not reopen Gate 1 or Gate 2.** Doc 02 v2.17.0 re-enters the **document-review loop**
  (which is a quality loop, not a gate). No requirement is added or removed; one is widened.
- **It does not close the DES-098 acknowledge-to-proceed gap** (Doc 06 §7 item 26(d)) — still owed
  under US-0134.

---

## 8. Routing

| # | Action | Owner | When |
|---|--------|-------|------|
| R-1 | Apply the §4 replacements to `apps/web/src/i18n/en.ts` and `ar.ts` (endorsement step, both locales, one commit) | **engineer** (Samuel Oyelaran) | Next build session |
| R-2 | Apply the §5.1/§5.2 replacements to `home.promises[0]` (en + ar) — second finding, same class | **engineer** | Same commit as R-1 |
| R-3 | Add the §5.4 regression guard (UT-0869 pattern; engineer assigns the `UT-####`); register it in Doc 06 §7 and close item 26's "left in place" entry for these strings | **engineer** | Same commit |
| R-4 | §5.3 FR-082 strings: MUST rewrite `packages/sdk/src/proposals.js:233` + the `ProposalsAndDebate.tsx:18` comment; SHOULD add the "(Definition-B; §16.3 DEFERRED-v2)" marker to `packages/protocol/src/proposals.js` ~23/~67. `ballot.js` and the `private_endorsement` flag description stand | **engineer** | Same commit, **if the approver confirms §5.3**; otherwise its own item |
| R-5 | Apply the anchored Doc 02 spec (v2.16.3 → **v2.17.0**, Status **In Review**): FR-131 clause (e) + widened closing sentence + §13 tracked routing (j) | **applier** (per the anchored-spec protocol) | This session's follow-up |
| R-6 | Assign a **neutral** reviewer for Doc 02 **v2.17.0**, business mode, and run the review loop to PASS before Status returns to Approved | **project-manager** (Ana-Maria Petrescu) | Next PM cycle |
| R-7 | Native-speaker review of the two new Arabic strings (adds to ARABIC-I18N / §13 tracked deferral (b)) | **technical-writer** | Pre-launch, pre-Gate 2 |
| R-8 | Confirm Doc 14 §2.2/§2.6 need no change — the guide was already right; the landing page was wrong. Consider a landing-page → §2.2 "learn more" link | **technical-writer** | Next Doc 14 increment |
| R-9 | Rule the §7.1 enrolment-copy question (H-17 / FR-132 §(e) / UT-0870), sre consulted on `promises[3]` | **product-owner** | Next PO session — tracked as §13 (j) |

---

## 9. Approver confirmation sought

This is a **product-owner ruling presented for the approver's confirmation**, in the pattern of
DECISIONS-2026-08-26. Three things are put to Rathish:

1. **Confirm Ruling B** and the §4 replacement copy (en normative; ar as engineer draft).
2. **Confirm or sever the second and third findings** — §5 (`home.promises[0]`, en + ar: I recommend
   confirm; it is a flat falsehood on the same page) and §5.3 (the FR-082 strings: I recommend
   confirm, as clause (e) reaches them and leaving them re-creates the exact re-litigation the
   clause exists to end).
3. **Confirm the Doc 02 amendment** — FR-131 clause (e) + widened closing sentence at v2.17.0,
   re-entering the review loop.

If the approver rules **A** instead — that "kept private" honestly means "not published" and stands
— then Doc 14 §2.2 and §2.6 must change to match, because the two surfaces cannot both be right.
That consequence is stated so it is not discovered later.

---

## 10. Open items after this record

| OI | Description | Owner | Status |
|----|-------------|-------|--------|
| ENDORSE-COPY | Ruling B applied in code (R-1..R-3) | engineer | OPEN — next build session |
| FR-082-COPY | §5.3 FR-082 strings (R-4) | engineer | OPEN — pending approver confirmation of §5.3 |
| DOC02-v2.17.0 | Amendment applied and re-reviewed (R-5, R-6) | product-owner / project-manager | OPEN — In Review |
| ENROL-COPY (j) | §7.1 enrolment/verification claims — not ruled | product-owner (sre consulted) | OPEN — tracked, non-blocking |
| ARABIC-I18N | Two new Arabic strings added to the pre-launch review set | technical-writer | OPEN — pre-Gate 2 |
| US-0134 | DES-098 acknowledge-to-proceed control still unbuilt | engineer | OPEN — unchanged by this record |

---

## 11. Approver decision — RECORDED 2026-09-06 (Rathish Kumar, approver; transcribed by the project-manager)

| Put to the approver (§9) | Decision | Consequence |
|---|---|---|
| 1. Ruling B and the §4 replacement copy | **CONFIRMED** — "name kept private" is an overclaim | R-1 applied by the engineer this session (en + ar, one commit) |
| 2. Second finding §5 (`home.promises[0]`) | **CONFIRMED** — "the same class of FR-131 violation"; a known anonymity falsehood on the public landing page must not survive the repo going public | R-2 applied by the engineer this session |
| 2. Third finding §5.3 (FR-082 "Supporters are anonymous" strings) | **Reached by the approved clause (e)** — not severed by the approver; applied under clause (e) rather than left to fail the next sweep | R-4 applied by the engineer this session (MUST sites; SHOULD markers at the engineer's judgement) |
| 3. Doc 02 amendment — FR-131 clause (e) + widened closing sentence | **APPROVED** — "Draft and apply FR-131 clause (e) in Doc 02; let Doc 08 reopen and re-close through its loop" | Anchored spec applied → Doc 02 **v2.17.0, In Review**; business review by a neutral reviewer per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`; Doc 07/08 re-cut by the tester |

Status of this record: **RULED and APPROVER-CONFIRMED.** Open items ENDORSE-COPY, FR-082-COPY and
DOC02-v2.17.0 (§10) move to the engineer / project-manager for execution in the same session.
ENROL-COPY (j) and ARABIC-I18N remain OPEN as recorded.
