# Session memory — product-owner, 2026-09-08T10:00 — `/verify` page ruling (decision 1)

```
Role:     product-owner (Priya Raghunathan)
Date:     2026-09-08
Trigger:  artifacts/status/DECISIONS-2026-09-08-VERIFY-PAGE.md §1 (approver Rathish Kumar)
          delegated the (a)/(b) remedy choice for the /verify page to the product-owner, on
          engineering grounds, with the applying role being the engineer.
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md
Wrote:    artifacts/product-owner-2026-09-08T1000-doc02-spec.md (anchored spec, 5 OPs)
          this note
Wrote no code, no DES, no ADR, no review report. Did not open artifacts/memory-index.json
(both paths pre-registered by the PM). Other documents blocking in the audit mid-session is
expected and was not acted on; no self-appointed review.
```

## 1. What I decided

**Remedy (a): flag-gate `/verify` out of the public v1 build**, behind a new `enrolment_ui`
feature flag (dev **on**; staging **off**; prod **off**; `removeBy` = the enrolment sprint,
blocked on CON-015). The nav link is hidden when the flag is off. The route renders a short,
**honest placeholder** — not a blank page and not "coming soon" — whose English text is
normative and fixed in the decision record. No `verify.*` string is deleted; the design copy is
retained and renders in `dev` only, as the enrolment sprint's input.

Not (b), and not a straddle: no guarantee string is relabelled, because none of them ships.

## 2. Why (engineering grounds, in the order weighed)

1. **Smaller and more reversible.** (a) = one flag-registry entry, one page conditional, one nav
   conditional, four new string keys per locale. (b) = a sentence-by-sentence rewrite of eleven
   live strings in two locales, one of which (Arabic) is a working draft with an **open**
   pre-launch native-speaker-review deferral (Doc 02 §13 tracked deferrals (b)). A duty
   discharged "sentence by sentence" cannot be discharged in a language nobody on the team
   reads. Undoing (a) is a flag flip; undoing (b) is another two-locale rewrite.
2. **The page is false well beyond the three strings the approver quoted.** `onDeviceBody`
   asserts an on-device read (v1 is a third-party vendor document check the vendor **does** see —
   H-17); `chooseIssuerHelp` asserts a plural, at-least-one-non-government issuer choice that
   Doc 14 §1.2 records as **not in effect** in the single-rail Phase-1 pilot (OI-20), from a
   hardcoded `ISSUERS` array; `kept` asserts an untraceable code while v1 retains
   `subject_id_hash` (H-18) and the operator DB can link the account (H-16); the `Start` button
   is inert. An honest (b) page collapses into "nothing here works, here is the plan" — a
   placeholder — reached via eleven more chances to get a sentence wrong.
3. **Nothing depends on it and it cannot become true soon.** The three shipped features do not
   touch `/verify`; no test in `apps/web/test` renders the page or the nav. Enrolment is unbuilt
   (Doc 06 §7) and **no enrolment sprint begins until CON-015 clears** (§9, CRITICAL PATH). A
   flag with a `removeBy` records that debt in the register built for it; CI already fails any
   flag without one (`permanentFlags()` must stay `[]`).
4. **Doc 14 §1.2 is already correct** and already carries the "not fully available yet" callout.
   Gating the page removes a contradiction between the guide and the product, and leaves one
   account of the plan rather than two.

The counter-argument I accepted: a gated route that says *nothing* would itself mislead, because
the home CTA "Get started" links to `/verify/`. Hence the placeholder is **normative**, states
what is true today (nobody is checked at all), and states three things the planned check will
**not** do (vendor sees the document; non-retention is a contract not maths; it does not prove
one account per person). It also links to `/parties/` so the CTA lands somewhere actionable.

## 3. Copy (summary — the exact text is in the decision record §5.3 / §5.4)

Four new keys in the `verify` block of `en.ts` (normative) and `ar.ts` (draft, subject to
tracked deferral (b)): `unavailableTitle`, `unavailableBody`, `unavailablePlannedTitle`,
`unavailablePlanned` (four items). Each planned item carries exactly one recorded truth:
FR-132 §(b) scope · H-17 vendor sees the document · FR-132 §(e) contractual non-retention ·
H-15 not one-person-one-vote · Doc 06 §7 unbuilt · CON-015 blocks the sprint. No FR-131 banned
word (`private` / `anonymous` / `receipt-free` / `secure`), no DES-085 jargon, Grade-8 per
NFR-023, and no claim about a participation act at all.

## 4. Guard routed to the engineer (mints the UT id)

Fifteen assertions in five groups, UT-0869/UT-0889 pattern, specified in the decision record
§5.6: (A) flag off in prod and staging, on in dev, `permanentFlags()` still `[]`; (B) with the
flag off the placeholder renders and the **rendered DOM** contains none of five retired claims,
the three testids are absent, and the nav has no `/verify/` anchor; (C) with the flag on the
original screen is intact — proving the copy is gated, not deleted; (D) the new English copy
passes the banned-word and jargon scans and positively contains the five recorded truths;
(E) the Arabic key set mirrors English exactly, has four planned items, and is not a
copy-paste of the English.

The engineer must also correct the `verify/page.tsx` module docstring, which asserts the same
unbuilt guarantee in prose — a published repository's comments are public-facing material under
FR-131 clause (e) and FR-132 §(d).

## 5. What I deliberately did not do

- Did **not** rule §13 (j) items (1) `home.steps[0].body` or (2) `home.promises[3]`. Both stay
  OPEN, un-ruled on the evidence available; (2) still needs the sre.
- Did **not** mint a BR/FR/NFR. The duty already exists (FR-132 §(d), §(e)) and the phasing
  truths already exist (§16.4 H-15/H-17/H-18) — the gap was routing, not requirements. Delete
  before you build applies to requirements too.
- Did **not** amend FR-131, FR-132, §8, §16 or any other Doc 02 section: v2.17.2 is a patch that
  touches the §13 tracked-routing block and the header only.
- Did **not** clear CON-015 and this must not be cited as enrolment progress. It removes a false
  surface; it builds nothing.

## 6. Open items

| Item | Owner | State |
|---|---|---|
| §13 (j)(1) `home.steps[0].body` vs H-17 "we" / vendor | product-owner | OPEN — un-ruled |
| §13 (j)(2) `home.promises[3]` unverified against a deployed build | product-owner (sre consulted) | OPEN — un-ruled |
| Apply the spec (Doc 02 v2.17.2 + DECISIONS §5) | engineer (Edit holder) | Pending |
| Build remedy (a): flag, page, nav, copy, comments, UT guard; Doc 06 v2.8.0 | engineer (Samuel Oyelaran) | Pending |
| TC row for the new UT | tester | Owed at the next Doc 07/08 touch |
| Doc 02 v2.17.2 business review | reviewer-qa (neutral, PM-assigned) | Pending |
| README/CONTRIBUTING `/verify` line: "unruled question" → flag-gated off, cite Doc 14 §1.2 | technical-writer | Pending |
| Arabic placeholder native-speaker review | technical-writer | Folded into tracked deferral (b), pre-Gate-2 |
| `enrolment_ui` flag retirement | engineer/architect at the enrolment sprint | Blocked on CON-015 |

## 7. IDs touched

- **Documents:** Doc 02 (v2.17.1 → v2.17.2, In Review — header + §13 tracked routing (j) only).
- **Requirements read and cited, none amended:** FR-131 (§4.45, clause (d)/(e)), FR-132 (§4.46,
  clauses (b)/(d)/(e)), FR-020, FR-122, FR-123, CON-015, §16.4 H-15, H-16, H-17, H-18, H-19,
  OI-04, OI-20, §13 tracked deferrals (b), §13 tracked routing (j).
- **Design read, not authored:** DES-095, DES-098, DES-100, ADR-003, ADR-024, ADR-025.
- **Code surfaces named for the engineer:** `apps/web/src/app/verify/page.tsx`,
  `apps/web/src/i18n/en.ts` + `ar.ts` (`verify.*`), `apps/web/src/components/SiteHeader.tsx`,
  `apps/web/src/config/flags.tsx` (`FLAG.ENROLMENT_UI`),
  `packages/protocol/src/flags.js` (`ENROLMENT_UI` / `enrolment_ui`),
  `apps/web/test/safety-surfaces.test.tsx` (new UT, id minted by the engineer).
- **New flag key:** `enrolment_ui`.
- **No new BR / FR / NFR / DES / ADR / SCR / US / TC / UT id was minted by this session.**
