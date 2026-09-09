# DECISIONS-2026-09-08 — `/verify` page copy, two PM rulings confirmed, stop-hook wording

```
Recorded by:  project-manager (Ana-Maria Petrescu) — transcription of the approver's directive
Approver:     Rathish Kumar — decisions 1–3 below are APPROVER DECISIONS, recorded verbatim in substance
Date:         2026-09-08
Trigger:      README "What is actually built" inventory (commit 502f61b) listed the /verify page's
              copy as "an open, unruled question"; artifacts/project-manager-2026-09-06T2359-release-prep.md
              recorded two PM rulings made in the approver's absence.
Status:       RECORDED. Decision 1 delegates the (a)/(b) choice to the product-owner on engineering
              grounds; decisions 2 and 3 are final.
```

## 1. `/verify` page — RULING (approver)

The copy on `apps/web/src/app/verify/page.tsx` (`en.ts` `verify.*`, `ar.ts` mirror) — "The document never
leaves your phone", "What gets sent is a short proof … and nothing else", "A short code … which cannot be
traced back to you" — describes the **verify-and-discard enrolment design**. That design is **TRUE BY
DESIGN** (FR-132 §(b) verify-and-discard; ADR-003; DES-100) but **NOT YET TRUE IN CODE**: enrolment is
unbuilt (`StubIdDocumentChecker.IS_INSECURE_MOCK()` returns true; Doc 06 §7), and the Phase-1 adapter is
blocked on **CON-015** (legal opinion, not started). A public surface **MUST NOT state an unbuilt guarantee
as current fact.**

Remedy — the **product-owner chooses on engineering grounds and applies it** (via the engineer):

- **(a)** flag-gate the `/verify` page out of the public v1 build (an existing or new flag, off in `prod`),
  or
- **(b)** keep the page but label every guarantee clearly as **"planned — not yet implemented"** so no
  reader can mistake it for a working guarantee.

Whichever ships MUST be FR-131-honest (clause (e)'s Grade-8-reader test applied to enrolment claims, as
FR-132 §(d) already requires for anonymity and one-person-one-vote), in **both locales**, with a **unit test
guarding it** (engineer mints the `UT-####`; TC owed to the tester).

## 2. Two PM rulings-in-absence — CONFIRMED (approver)

| PM ruling (2026-09-06/07) | Approver decision |
|---|---|
| Doc 01 cycle 2: the integrity / no-gatekeeper class (in v1 the operator database is the source of truth for tallies; the on-chain hash is tamper-evidence, not tamper-prevention) was ruled inside approver ruling 5 and fixed by widening the §0 override sentence and marking tenets 1/8 and §E3 — Doc 01 v2.3.0 Approved | **CONFIRMED — approver-confirmed 2026-09-08.** |
| Public files cycle 2: the `/verify` citation in README/CONTRIBUTING was **qualified** ("same class as the two landing strings tracked at Doc 02 §13 (j); the page's own copy is in no register") rather than widening Doc 02 §13 (j) mid-loop | **CONFIRMED — approver-confirmed 2026-09-08.** Decision 1 now rules the page itself; §13 (j) is updated by the product-owner to record it. |

## 3. Stop-hook block wording — RULING (approver)

The `hooks/check_gates.py` review-loop block text ("Run the `document-review` skill with a NEUTRAL
(non-owner) reviewer …") reads, to whichever agent stops last, as an instruction to author the missing
report — the root cause of the recurring self-appointment (AL-CANDIDATE-3, tester's evidence
2026-09-06). **Reword it so it does NOT suggest the blocked agent author the missing artifact**: direct to
the project-manager and the assignment record (`artifacts/status/REVIEW-ASSIGNMENT-*.md`); state that a
report written to clear one's own stop does not count; keep the bar, the owner-reworks rule and the cap.
This is the framework fix that stops the self-dealing at source. The engineer applies it (the only role
with Edit); `node hooks/run_gates.cjs --audit` must still exit 0 and the audit output format is unchanged.

## 4. Governance

Reviews per rubric with neutral reviewers, assignment-record enforced
(`artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md`). Gate `--audit` exit 0; `npm test` green
(625 at the start of this session; the new guard adds to it). Commit; do not push. After this the
approver's stated position is: **the repository is ready to publish.**

---

## 5. Product-owner's choice (delegated by decision 1)

```
Decided by:  Priya Raghunathan — Product Owner (Accountable for public-facing claims)
Date:        2026-09-08
Under:       §1 of this record (approver Rathish Kumar delegated the (a)/(b) choice on
             engineering grounds and directed the product-owner to apply it via the engineer)
Recorded in: docs/02-requirements-srs.md v2.17.2 §13 tracked routing (j)
Note:        Doc 02 §13 (j) is widened by the same session; this §5 is the normative copy source.
```

### 5.1 The choice

**(a) — flag-gate `/verify` out of the public v1 build.** The route is placed behind a new
feature flag `enrolment_ui` (dev **on**; staging **off**; prod **off**). When the flag is off the
page renders a short, honest **placeholder** and the header nav link to `/verify/` is not
rendered. The existing `verify.*` strings are **kept, not deleted** — they are the enrolment
sprint's starting copy and they render in `dev`.

Not (b). The choice is not a straddle: no guarantee string is relabelled, because none of them
ships.

**(a) is chosen with a condition that answers the objection to it:** a gated route that says
*nothing* is not acceptable either, because `/verify/` is a static route a citizen still reaches
(the home CTA "Get started" links to it) and a blank or "coming soon" surface implies the check
is imminent and benign. The placeholder in §5.3 is therefore **normative**, not decorative: it
states what exists today (no check at all), what is planned, and the three things the planned
check will **not** do.

### 5.2 The grounds (engineering, in the order weighed)

1. **Smaller and more reversible.** (a) is one registry entry, one conditional in one page, one
   conditional in the nav, and four new string keys per locale. (b) is a sentence-by-sentence
   rewrite of **eleven** live strings in **two** locales, of which one — Arabic — is a working
   draft with an **open** pre-launch deferral for native-speaker review (Doc 02 §13 tracked
   deferrals (b)). A duty that is enforced "sentence by sentence" cannot be discharged in a
   language nobody on the team can read; (b) would have us write **new normative honesty claims**
   in exactly that language. Reversing (a) is a one-line flag flip; reversing (b) is another
   two-locale rewrite.
2. **The page is false well beyond the three strings §1 quotes.** `verify.onDeviceBody` describes
   an on-device document read — the v1 check is a **third-party vendor document check and the
   vendor sees the document** (§16.4 H-17). `chooseIssuerHelp` ("you can pick any of these … at
   least one of them is never run by a government") presents issuer plurality as a live choice;
   Doc 14 §1.2 records that rule as **not in effect in this pilot** (single-rail Aadhaar, OI-20),
   and the three issuers in `ISSUERS` are a hardcoded placeholder. `kept` claims a code "which
   cannot be traced back to you" — v1 retains `subject_id_hash`, a stable derived identifier
   (H-18), and the operator database CAN link the account (H-16). The `start-verification` button
   is inert. An honest (b) page therefore collapses into "nothing here works, here is what is
   planned" — i.e. a placeholder — reached by eleven more chances to get a sentence wrong, in two
   languages, on a surface no shipped feature uses.
3. **Nothing depends on it, and it cannot become true on a near date.** The three shipped
   features (party creation, join/membership, proposals) do not touch `/verify`; no test in
   `apps/web/test` renders the page or the nav links, so the blast radius is the page itself.
   Enrolment is unbuilt (`StubIdDocumentChecker.IS_INSECURE_MOCK()` = true, Doc 06 §7) and **no
   enrolment sprint begins until CON-015 clears** (§9, CRITICAL PATH). A labelled dead page would
   sit there drifting for the whole of that period; a flag with a `removeBy` records the debt in
   the register that exists to record exactly this debt, and CI already fails any flag without one
   (`permanentFlags()` must stay empty).
4. **Doc 14 already tells the citizen the truth.** §1.2 opens "Not fully available yet in version
   0.1.0 … There is no working screen you complete today", then gives the two-step model, the
   vendor, the discard, the multiple-IDs gap and the Aadhaar exclusion. The guide and the page
   currently contradict each other; gating the page removes the contradiction and leaves the
   guide as the single account of the plan. The placeholder is deliberately a compressed,
   Grade-8 echo of Doc 14 §1.2 — not a second, competing account.

### 5.3 Placeholder copy — English, NORMATIVE

Added to the `verify` block of `apps/web/src/i18n/en.ts`. Exact text; the guard asserts it.

```ts
    unavailableTitle: 'This step is not built yet',
    unavailableBody:
      'There is nothing to do on this page. Today anyone can make an account, join a party, ' +
      'read, discuss and support one, and nobody is checked at all.',
    unavailablePlannedTitle: 'What is planned, and what it will and will not do',
    unavailablePlanned: [
      'Later, one check will be added. You will be asked once for a government ID document, and ' +
        'only if you want your membership counted in a party’s official size, to cast a vote ' +
        'that decides something, or to stand as a candidate.',
      'An outside company will do that check, and that company will see your document. It is ' +
        'meant to delete it afterwards. That is a promise written into a contract, not ' +
        'something the maths makes impossible.',
      'Even then, the check will not prove that each person has only one account. Someone with ' +
        'two valid ID documents could have two.',
      'None of this is built. It cannot start until a legal opinion for the first pilot country ' +
        'is finished.',
    ],
```

Why each line is there, so a later editor cannot quietly drop one:

| Line | Carries |
|---|---|
| `unavailableBody` | What is true **today**: no check exists; open-tier participation is the whole product (FR-122, Doc 06 §7). |
| planned[0] | FR-132 §(b) — one check, once, gating only the three FR-123 counting actions. Never account creation or joining (FR-020/FR-122 absolute). |
| planned[1] | §16.4 **H-17** — the vendor sees the document; FR-132 §(e) non-retention is **contractual, not technical**. |
| planned[2] | §16.4 **H-15** — same-document dedup is not one-person-one-vote; FR-132 §(d) forbids claiming it. |
| planned[3] | Doc 06 §7 (unbuilt) and **CON-015** (no enrolment sprint until the legal opinion clears). |

Constraints the copy satisfies: no word from the FR-131 banned set (`private`, `anonymous`,
`receipt-free`, `secure`); no DES-085/§2.2 jargon (`wallet`, `hash`, `on-chain`, `token`, …); no
claim about a **participation act** at all, so FR-131 clause (e)'s reader test has nothing to
catch; Grade-8 register per NFR-023.

### 5.4 Placeholder copy — Arabic, DRAFT

Mirror added to `apps/web/src/i18n/ar.ts`. **Draft**, in the same status as the rest of `ar.ts`:
subject to Doc 02 §13 tracked deferral (b), native-speaker review, pre-Gate-2. It is a translation
of §5.3 and introduces no claim the English does not make.

```ts
    unavailableTitle: 'هذه الخطوة غير مُنجزة بعد',
    unavailableBody:
      'لا يوجد ما تفعله في هذه الصفحة. اليوم يستطيع أي شخص إنشاء حساب والانضمام إلى حزب والقراءة ' +
      'والنقاش والدعم، ولا يخضع أحد لأي تحقق.',
    unavailablePlannedTitle: 'ما هو مخطط له، وما الذي سيفعله وما لن يفعله',
    unavailablePlanned: [
      'لاحقًا ستُضاف خطوة تحقق واحدة. سيُطلب منك مرة واحدة وثيقة هوية حكومية، وذلك فقط إذا أردت أن ' +
        'تُحتسب عضويتك في العدد الرسمي لحزب، أو أن تصوّت تصويتًا يقرّر شيئًا، أو أن ترشّح نفسك.',
      'ستقوم شركة خارجية بهذا التحقق، وسترى تلك الشركة وثيقتك. ومن المفترض أن تحذفها بعد ذلك. هذا ' +
        'وعد مكتوب في عقد، وليس أمرًا تمنعه الرياضيات.',
      'وحتى عندئذ، لن يثبت هذا التحقق أن لكل شخص حسابًا واحدًا فقط. ومن يملك وثيقتَي هوية صالحتين ' +
        'يمكن أن يملك حسابين.',
      'لا شيء من هذا مُنجز، ولا يمكن أن يبدأ قبل اكتمال رأي قانوني في أول بلد تجريبي.',
    ],
```

### 5.5 What the engineer builds

Owner: **Samuel Oyelaran** (engineer). Registered in Doc 06 v2.8.0 (§7 and the UT registry).

1. **Flag — `packages/protocol/src/flags.js`.** New entry, keys sorted where the file already
   groups them:

```js
  ENROLMENT_UI: {
    key: 'enrolment_ui',
    description:
      'The /verify enrolment screen. OFF above dev: the screen describes the verify-and-discard ' +
      'enrolment design (FR-132 §(b), DES-100, ADR-003) as current fact, and enrolment is ' +
      'unbuilt (StubIdDocumentChecker.IS_INSECURE_MOCK() = true, Doc 06 §7) and blocked on ' +
      'CON-015. With the flag off the route renders the honesty placeholder fixed at ' +
      'DECISIONS-2026-09-08-VERIFY-PAGE.md §5.3. The normative wording is that record, not ' +
      'this string.',
    defaults: { dev: true, staging: false, prod: false },
    onChain: false,
    removeBy: 'Enrolment sprint — retires when FR-132 §(b) ships behind a real ' +
      'IEligibilityVerifier backing; blocked on CON-015',
  },
```

   `onChain: false` is correct and precedented (`l1_force_inclusion`, `sponsored_gas`): there is
   no contract path to leave live — the flag gates a screen, and the enrolment backing does not
   exist. UT-0055 enumerates the on-chain-relevant flags by name and is unaffected.

2. **Client flag key — `apps/web/src/config/flags.tsx`.** Add `ENROLMENT_UI: 'enrolment_ui'` to
   the `FLAG` map.

3. **Page — `apps/web/src/app/verify/page.tsx`.** `useFlag(FLAG.ENROLMENT_UI)`; when off, return
   the placeholder and nothing else. The placeholder renders: `unavailableTitle` as `h1`;
   `unavailableBody` as `p.lead`; `unavailablePlannedTitle` as `h2`; `unavailablePlanned` as a
   `ul` with `data-testid="verify-unavailable-planned"`; and a link to `/parties/` labelled with
   the existing `t.nav.parties` string, so the home CTA still lands somewhere a citizen can act.
   Wrapper carries `data-testid="verify-unavailable"`. When on, the existing screen renders
   unchanged.

4. **Nav — `apps/web/src/components/SiteHeader.tsx`.** The `/verify/` `li` renders only when the
   flag is on.

5. **Module comments are public-facing material too** (FR-131 clause (e) closing sentence;
   FR-132 §(d) — "its UI, README, or any public-facing material"; this repository is published).
   The `verify/page.tsx` docstring currently asserts "Nothing on this page uploads anything. The
   document is read by the device … and only the proof leaves it." That is the same unbuilt
   guarantee in prose. It MUST be rewritten to say that the file implements the **designed**
   enrolment screen (FR-132 §(b), DES-100, ADR-003), that the design is not built, and that the
   screen is gated behind `enrolment_ui` for that reason. A matching comment MUST head the
   `verify.*` blocks in `en.ts` and `ar.ts`: these strings describe the design, render in `dev`
   only, and are not a v1 claim.

6. **No string is deleted.** `verify.title`, `lead`, `onDeviceTitle`, `onDeviceBody`,
   `chooseIssuer`, `chooseIssuerHelp`, `issuerRunByState`, `issuerIndependent`, `start`,
   `keptTitle`, `kept`, `notKept` stay in both locales. They are the enrolment sprint's input and
   they must be re-litigated **before** the flag turns on, not rediscovered.

### 5.6 The guard — assertions the unit test MUST make

The engineer mints the `UT-####` (next free id in `apps/web/test/safety-surfaces.test.tsx`) and
registers it in Doc 06. The TC row is owed to the tester at the next Doc 07/08 touch, per the
review assignment. Pattern: **UT-0869 / UT-0889** — assert the source string, then assert the
string is what actually renders, then assert the retired claim is gone from the rendered DOM.

**A. The flag ships dark and carries its debt**
1. `isEnabled('enrolment_ui', 'prod')` is `false`; `isEnabled('enrolment_ui', 'staging')` is
   `false`; `isEnabled('enrolment_ui', 'dev')` is `true`.
2. `permanentFlags()` still equals `[]` — i.e. the new flag has a `removeBy`.
3. `FLAGS.ENROLMENT_UI.description` cites `CON-015` and `FR-132`.

**B. With the flag off, no unbuilt guarantee reaches the DOM**
4. Rendering `<VerifyPage/>` with the flag off shows `en.verify.unavailableTitle`,
   `en.verify.unavailableBody`, `en.verify.unavailablePlannedTitle`, and all four
   `en.verify.unavailablePlanned` items.
5. The rendered container's `textContent` contains **none** of these retired claims — asserted
   against the DOM, not against the source strings, so a future re-wiring cannot pass the guard:
   `never leaves your phone` · `and nothing else` · `cannot be traced back to you` ·
   `never run by a government` · `Everything happens on your phone`.
6. `queryByTestId('start-verification')`, `queryByTestId('kept-list')` and
   `queryByTestId('not-kept-list')` are all null with the flag off.
7. `<SiteHeader/>` with the flag off renders no anchor whose `href` is `/verify/`.

**C. With the flag on (explicit override, the dev posture), the screen is intact**
8. `<VerifyPage/>` with the flag on renders `en.verify.onDeviceBody` and
   `queryByTestId('start-verification')` is non-null, and `<SiteHeader/>` renders the `/verify/`
   link — proving the copy is gated, not deleted, and that the gate is the only thing between the
   reader and it.

**D. The new copy is itself honest**
9. None of the four new `en.verify.*` values contains, case-insensitively, `private`,
   `anonymous`, `receipt-free` or `secure` (FR-131 closing sentence).
10. None contains DES-085/§2.2 jargon: `wallet`, `seed phrase`, `private key`, `gas`, `token`,
    `mint`, `on-chain`, `blockchain`, `crypto`, `nullifier`, `hash`.
11. `en.verify.unavailablePlanned` joined: contains `will see your document` (H-17); contains
    `promise written into a contract` (FR-132 §(e) is contractual, not technical); contains
    `will not prove that each person has only one account` (H-15, FR-132 §(d)); contains
    `None of this is built` (Doc 06 §7); contains `legal opinion` (CON-015).
12. `en.verify.unavailableBody` contains `nobody is checked at all` — the v1 truth, stated
    positively rather than only implied by absence.

**E. The Arabic mirror exists and is a translation**
13. `Object.keys(ar.verify)` and `Object.keys(en.verify)` are equal as sets (the mirror is
    complete — the failure mode here is a missing key rendering `undefined` to an Arabic reader).
14. `ar.verify.unavailablePlanned.length === 4`; every Arabic value is a non-empty string and is
    **not identical** to its English counterpart (catches a copy-paste that would ship English
    text to an Arabic reader).
15. No Arabic value contains a Latin-script banned word from assertion 9.

The test file header comment MUST cite this record (§1 approver ruling, §5 product-owner choice),
FR-131 clause (e), FR-132 §(d)/(e), §16.4 H-15/H-17/H-18, Doc 06 §7 and CON-015 — so the next
reader knows why the page is dark without needing this file open.

### 5.7 What this decision does NOT do

- It does **not** rule §13 (j) items (1) `home.steps[0].body` or (2) `home.promises[3]`. Both stay
  OPEN and unruled on the evidence available; (2) still needs the sre.
- It does **not** amend FR-131 or FR-132. No new BR/FR/NFR is minted: the honesty duty that this
  remedy discharges already exists in FR-132 §(d) and §(e), and the phasing truth already exists
  in §16.4 H-15/H-17/H-18. **Delete before you build** applies to requirements too.
- It does **not** change what Doc 14 §1.2 tells citizens. §1.2 is already correct and already
  carries the "not fully available yet" callout; the technical-writer's README/CONTRIBUTING delta
  should point at it and record `/verify` as **flag-gated off in the public build**, replacing the
  "unruled question" line.
- It does **not** clear CON-015, and it MUST NOT be cited as progress on enrolment. It removes a
  false surface; it builds nothing.
