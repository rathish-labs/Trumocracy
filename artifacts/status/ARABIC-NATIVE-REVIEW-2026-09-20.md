# Arabic native-speaker review packet — 2026-09-20

> ## STATUS: HUMAN-GATED. NOT CLOSEABLE IN THIS SESSION.
>
> **This document does not contain a translation review. No native Arabic speaker has looked at
> `apps/web/src/i18n/ar.ts` yet.** It is a *packet* — a complete, risk-ordered pairing of every
> Arabic string against its English source, built so that one native Arabic speaker can do the
> actual review in a single pass. Nothing below should be read as evidence that the Arabic is
> correct, fluent, or safe to ship. Doc 06 §7 item 17 records `ar.ts` as "a working-draft engineer
> translation" and requires a native-speaker review before any Arabic-locale customer deployment;
> that requirement is **ARABIC-I18N** in the debt register, and it stays open until a named human
> reviewer completes the pass this packet is built for and the findings are applied. This session
> **prepares** the packet; it does not and cannot **close** the debt item.

```
Author:        technical-writer (Nadia Hassan)
Date:          2026-09-20
Session:       Debt-closure — REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md, item P1
Source data:   Mechanically generated pairing (import both dictionaries, walk every leaf; not
               sampled): 228 plain strings + 25 template functions = 253 reviewable leaves,
               0 missing an English counterpart, 13 sections (meta, common, nav, home, verify,
               parties, debate, petitions, proposals, vote, banner, errors, a11y).
Register:      Doc 06 §7 item 17 (ARABIC-I18N) is the closing register. A finding here is
               discharged by an engineer copy change + a Doc 06 §7 item 17 update, not by this
               file.
```

## 1. What this packet is, and is not

- **Is:** every Arabic string in `apps/web/src/i18n/ar.ts` reproduced next to its English source
  string, ordered by *risk to a citizen* rather than by file order, with the test a reviewer
  should apply to each row and a return path for findings.
- **Is not:** a translation review, a quality signal, a sign-off, or evidence usable at Gate 2 for
  Arabic-locale readiness. It is evidence of **structural completeness only** (see §2).
- **Does not close** `ARABIC-I18N` (Doc 06 §7 item 17). Only a native Arabic speaker's completed
  review, applied back into `ar.ts` and recorded in that register, closes it.

## 2. What is known at dispatch — and what that knowledge does and does not prove

Known, mechanically, before any human review:

- Every one of the 253 leaves in `ar.ts` has an English counterpart in `en.ts` — **0 missing**.
- The two dictionaries are in structural sync: same keys, same shape.
- `ar.verify` and `en.verify` have **identical key sets** — `UT-0890` asserts this specifically
  (the debt item this same session closes into Doc 07/08).
- The Arabic text is confirmed **not** a copy-paste of the English (it is Arabic script
  throughout, not English left untranslated under an Arabic key).

**None of that is evidence of translation quality.** Structural completeness and translation
correctness are different properties, tested by different instruments:

- The mechanical guards (`UT-0890` and the dictionary-import walk that built this packet) test
  **shape**: does every key exist, does every key have *some* string in both languages.
- Only a native Arabic reader can test **substance**: does the Arabic *say* what the English says,
  no stronger and no weaker, in natural, Grade-8-level Arabic, without smuggling back a claim the
  product does not make.

A dictionary that passed every mechanical guard above could still contain a mistranslation on
every single line. The guards were never designed to catch that, and this packet exists because
nothing else in the pipeline does either.

## 3. The test to apply, per row

For every row below, a reviewer is asked to judge five things, not just "does this look like a
translation":

- **(a) Fidelity.** Does the Arabic say what the English says — no stronger, no weaker? A
  translation that reads more confidently than the English (e.g. turning a hedge into a flat
  promise) is a defect even if every word is "correct" in isolation.
- **(b) Grade-8 reader test (NFR-023).** Would an ordinary Arabic-speaking adult reader, not a
  specialist, understand this on first read? Formal/legal Arabic that is technically accurate but
  hard to parse fails this test the same way English legalese would.
- **(c) The four FR-131 banned concepts, and their Arabic equivalents.** FR-131 bans English
  claims of *privacy*, *anonymity*, *secrecy* or *security* about v1 voting (v1 is none of these
  things — see `banner.*` below). **The automated FR-131 guard (`UT-0869`, `UT-0887`,
  `UT-0889`) only scans for Latin-script banned words.** It cannot see an Arabic-script overclaim
  at all — a string that used a word like سري ("secret") or آمن ("secure") to describe v1 voting
  would ship invisibly to every existing mechanical check. This reading is, in a real sense, the
  **only** instrument that can catch that failure mode in Arabic. See §5 for a worked example of
  why a *substring* ban cannot be that instrument either.
- **(d) Number agreement.** English marks singular/plural with two forms. **Arabic marks five** —
  singular (1), dual (2), paucal/few (3–10), plural (11–99), and a further form at 100+. A
  template that is correct at 3 can be wrong at 1, 2, or 11. Every template row below is rendered
  at four sample inputs (**1, 2, 3, 11**) specifically to surface this — check agreement at
  **every** sample, not just one. This matters most where a citizen reads a count and acts on it:
  **`petitions.supporters`, `petitions.needed`, `petitions.timeLeft`, `parties.memberCount`** are
  called out individually in Tier 4 below for this reason, but the same check applies to all 25
  templates.
- **(e) Natural register.** Does this read like something an Arabic speaker would actually write,
  or like a word-for-word calque of the English sentence structure? A literal rendering can be
  "correct" and still feel foreign enough to undermine trust in the platform's voice.

Mark the **OK?** column: a check if the row passes all five; otherwise leave it blank and record
the issue per §6 (return path).

## 4. Risk-ordered structure of this packet

The 253 leaves are grouped into four tiers, most consequential first, not by file order:

| Tier | Section(s) | Leaves | Why this rank |
|---|---|---|---|
| 1 | `banner.*` | 3 | The vote-surface coercion warning. Doc 06 calls a mistranslation here a **safety defect, not a polish item**. |
| 2 | `home.*` | 15 | Front-page endorsement/promise copy, two rows of which were rewritten under FR-131 clause (e) after the *English* versions overclaimed; the Arabic mirror has not had the same scrutiny applied to it. |
| 3 | `verify.*` | 23 | Mostly not live today (flag-gated), but the honesty-placeholder strings that DO render matter, and this is the enrolment sprint's starting copy. |
| 4 | everything else, by section | 212 | meta, common, nav, parties, debate, petitions, proposals, vote, errors, a11y. |

The `#` column below reproduces the numbering from the mechanically generated source pairing (not
reading order) — use it or the dotted key to cross-reference.

---

## Tier 1 — `banner.*` (3 leaves): the vote-surface coercion warning

**Why this is Tier 1, in terms:** this is the text a voter reads at the point of casting a v1
vote, telling them the vote is *not* anonymous, *not* receipt-free, and *not* coercion-resistant,
and warning them not to vote in front of someone pressuring them. `UT-0887` guards this string's
**substance** — it asserts that the retired "your vote is secret" framing is absent and that the
platform-can-see statement is present — but **`UT-0887` says nothing about fluency**. A
technically-passing string that reads confusingly, or that an Arabic reader would parse
differently than intended, defeats the entire purpose of the banner while every automated check
stays green. **A finding on any row in this tier is a safety defect. It blocks Arabic-locale
deployment; it does not queue** (see §6).

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 242 | `banner.notReceiptFreeTitle` | In this version, your vote is not anonymous and not coercion-proof | في هذه النسخة، صوتك ليس مجهول الهوية وليس محميًا من الإكراه |  |
| 243 | `banner.notReceiptFreeBody` | This version signs you in the ordinary way. Your vote is not anonymous, not receipt-free and not coercion-resistant. Trumocracy's own records can see how you voted and which party you belong to. Nobody outside Trumocracy sees this on any public page. But the record exists, and it could be shown if somebody pressures you to prove how you voted. A ballot that hides how you voted even from Trumocracy is coming in a later privacy upgrade. It is not switched on yet. Do not vote in front of somebody who is pressuring you. | هذه النسخة تسجّل دخولك بالطريقة العادية. صوتك ليس مجهول الهوية، وليس خاليًا من الإيصال، وليس مقاومًا للإكراه. سجلات ترومقراطية نفسها تستطيع أن ترى كيف صوّتّ وإلى أي حزب تنتمي. لا أحد خارج ترومقراطية يرى ذلك في أي صفحة عامة. لكن السجل موجود، ويمكن إظهاره إذا ضغط عليك أحد لتثبت كيف صوّتّ. ورقة اقتراع تُخفي كيف صوّتّ حتى عن ترومقراطية قادمة في ترقية الخصوصية لاحقًا. وهي غير مُفعَّلة بعد. لا تصوّت أمام من يضغط عليك. |  |
| 244 | `banner.notReceiptFreeMore` | What is missing | ما الذي ينقص |  |

---

## Tier 2 — `home.*` (15 leaves): endorsement and promise copy

**Why this is Tier 2:** two of these strings — `home.steps[1].body` (#23) and `home.promises[0]`
(#27) — were **rewritten in the English at Doc 06 v2.6.0 under FR-131 clause (e)**, because the
earlier English wording made claims the product does not deliver (see
`DECISIONS-2026-09-06-ENDORSEMENT-COPY.md` §4.2/§5.2). The **same engineer mirrored the fix into
Arabic** at the same time. The regression guard for this, **`UT-0889` / `TC-3573`, asserts
ABSENCE only** — that the retired Arabic phrasing is gone — and makes **no positive assertion**
that the current Arabic actually states the three facts the rewrite exists to state: that backing
a party is a **public act**, that the citizen's **name is not shown**, and that **the platform's
own records can link** the act to the account. A test that only checks that a bad sentence is
gone cannot tell you whether a *different* bad sentence, or no clear statement at all, took its
place. **Closing that gap — confirming the Arabic affirmatively states all three facts, in those
terms, at Grade-8 level — is the single most valuable thing a native speaker can do in this
packet.** Say explicitly, for #23 and #27, whether all three facts are present and correctly
scoped (not overclaimed, not underclaimed).

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 17 | `home.title` | Start a political party. Or join one. | ابدأ حزبًا سياسيًا. أو انضم إلى حزب. |  |
| 18 | `home.lead` | Trumocracy lets ordinary people start a political party, gather public support, and run it by rules that nobody can bend. No owner. No head office. No approval from us. | تتيح ترومقراطية للناس العاديين بدء حزب سياسي، وجمع الدعم العام، وإدارته بقواعد لا يستطيع أحد تغييرها. لا مالك. لا مكتب رئيسي. ولا حاجة إلى موافقتنا. |  |
| 19 | `home.howTitle` | How it works | كيف تعمل |  |
| 20 | `home.steps[0].title` | Show you are one real person | أثبت أنك شخص حقيقي واحد |  |
| 21 | `home.steps[0].body` | You prove you are a real person, once. You choose who checks this. We never see your documents, your name or your address, and we do not keep them. | تثبت أنك شخص حقيقي مرة واحدة. أنت تختار من يتحقق من ذلك. لا نرى أوراقك ولا اسمك ولا عنوانك، ولا نحتفظ بها. |  |
| 22 | `home.steps[1].title` | Back the parties you believe in | ادعم الأحزاب التي تؤمن بها |  |
| **23** | **`home.steps[1].body`** ⚠ rewritten under FR-131 clause (e); UT-0889/TC-3573 asserts absence of the retired phrasing ONLY, not presence of the three required facts | Backing a party is a public act, on purpose. Your name is not shown, but the backing goes on the public record, and our own records can link it to your account. Only back a party you are content to be seen supporting. When enough people in your area back it, the party starts. Nobody decides this. The count does. | دعم حزب فعل علني، وهذا مقصود. لا يُعرض اسمك، لكن الدعم نفسه يُسجَّل في السجل العلني، ويمكن لسجلاتنا نحن أن تربطه بحسابك. لا تدعم حزبًا إلا إذا كنت مرتاحًا لأن يعرف الناس دعمك له. وعندما يدعمه عدد كافٍ من الناس في منطقتك، يبدأ الحزب. لا أحد يقرر ذلك. العدد هو من يقرر. | **Check: are all 3 facts (public act / name not shown / our records can link) present and correctly scoped?** |
| 24 | `home.steps[2].title` | Have an equal say | صوتك مساوٍ لصوت غيرك |  |
| 25 | `home.steps[2].body` | Every member gets one vote. Money buys nothing. There is no way to give your vote away, and no way to buy anybody else's. | لكل عضو صوت واحد. المال لا يشتري شيئًا. لا يمكنك إعطاء صوتك لأحد، ولا يمكن لأحد شراء صوت غيره. |  |
| 26 | `home.promisesTitle` | What we promise | ما نعد به |  |
| **27** | **`home.promises[0]`** ⚠ rewritten under FR-131 clause (e); UT-0889/TC-3573 asserts absence of the retired phrasing ONLY, not presence of the three required facts | We never publish which party you belong to. In this version of the platform, our own records can see it, and we say so plainly rather than promise more. | لا ننشر أبدًا الحزب الذي تنتمي إليه. في هذه النسخة من المنصة، يمكن لسجلاتنا نحن أن ترى ذلك، ونقول هذا بوضوح بدل أن نعد بأكثر مما نستطيع الوفاء به. | **Check: does this state the platform's own records CAN see the party, correctly, without overclaiming secrecy?** |
| 28 | `home.promises[1]` | Nobody can remove you, block you, or stop your party. | لا يستطيع أحد إبعادك أو منعك أو إيقاف حزبك. |  |
| 29 | `home.promises[2]` | Every rule is written down, and the same rules apply to everyone. | كل قاعدة مكتوبة، وتنطبق القواعد نفسها على الجميع. |  |
| 30 | `home.promises[3]` | We do not count your visits, and we do not keep a record of what you read here. | لا نحصي زياراتك، ولا نحتفظ بسجل لما تقرأه هنا. |  |
| 31 | `home.cta` | Get started | ابدأ |  |

---

## Tier 3 — `verify.*` (23 leaves): enrolment copy — mostly not shipping today

**Unusual status, be precise about it:** the `/verify` route is **flag-gated off above `dev`**
(Doc 06 §7 item 28), so **16 of these 23 leaves render nowhere in any environment a real user can
reach today**. They are still worth reviewing now — they are the enrolment sprint's starting
copy, and reviewing them once is cheaper than reviewing them twice — but **do not rank them as a
live shipping claim**, and a finding here does not block anything currently deployed.

**The 7 leaves that DO render today**, because they are the honesty placeholder shown in place of
the (not yet built) real enrolment flow: `verify.unavailableTitle`, `verify.unavailableBody`,
`verify.unavailablePlannedTitle`, and the four `verify.unavailablePlanned[0..3]` array items —
four named keys, one of which (`unavailablePlanned`) is an array of four strings, seven leaves in
total. These are the honesty-placeholder strings a real user sees if they land on `/verify`
outside `dev` today, and they carry more weight than the rest of this tier for that reason.

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? | Renders today? |
|---|---|---|---|---|---|
| 32 | `verify.title` | Show that you are a real person | أثبت أنك شخص حقيقي |  | No (flag off above `dev`) |
| 33 | `verify.lead` | This happens once. It proves that you are one real person, and it does not tell anyone who you are. | يحدث هذا مرة واحدة. يثبت أنك شخص حقيقي واحد، ولا يخبر أحدًا بهويتك. |  | No |
| 34 | `verify.onDeviceTitle` | Everything happens on your phone | كل شيء يحدث على هاتفك |  | No |
| 35 | `verify.onDeviceBody` | Your phone reads your document and does the maths itself. The document never leaves your phone. What gets sent is a short proof that says "this is one real person" and nothing else. | يقرأ هاتفك وثيقتك ويجري الحساب بنفسه. لا تغادر الوثيقة هاتفك أبدًا. ما يُرسل هو إثبات قصير يقول «هذا شخص حقيقي واحد» ولا شيء غير ذلك. |  | No |
| 36 | `verify.chooseIssuer` | Choose who checks you | اختر من يتحقق منك |  | No |
| 37 | `verify.chooseIssuerHelp` | You can pick any of these. If you do not trust one of them, pick another. At least one of them is never run by a government. | يمكنك اختيار أي منها. إن كنت لا تثق بأحدها فاختر غيره. واحد منها على الأقل لا تديره الحكومة. |  | No |
| 38 | `verify.issuerRunByState` | Run by a government body | تديره جهة حكومية |  | No |
| 39 | `verify.issuerIndependent` | Independent of government | مستقل عن الحكومة |  | No |
| 40 | `verify.start` | Start | ابدأ |  | No |
| 41 | `verify.keptTitle` | What is kept, and what is not | ما يُحفظ وما لا يُحفظ |  | No |
| 42 | `verify.kept[0]` | A short code that means "one real person", which cannot be traced back to you. | رمز قصير يعني «شخص حقيقي واحد»، ولا يمكن تتبعه إليك. |  | No |
| 43 | `verify.notKept[0]` | Your name | اسمك |  | No |
| 44 | `verify.notKept[1]` | Your address | عنوانك |  | No |
| 45 | `verify.notKept[2]` | Your date of birth | تاريخ ميلادك |  | No |
| 46 | `verify.notKept[3]` | A photo, a scan, or a fingerprint | صورة أو مسح أو بصمة |  | No |
| 47 | `verify.notKept[4]` | Your phone number or email | رقم هاتفك أو بريدك |  | No |
| **48** | **`verify.unavailableTitle`** | This step is not built yet | هذه الخطوة غير مُنجزة بعد |  | **YES — the honesty placeholder** |
| **49** | **`verify.unavailableBody`** | There is nothing to do on this page. Today anyone can make an account, join a party, read, discuss and support one, and nobody is checked at all. | لا يوجد ما تفعله في هذه الصفحة. اليوم يستطيع أي شخص إنشاء حساب والانضمام إلى حزب والقراءة والنقاش والدعم، ولا يخضع أحد لأي تحقق. |  | **YES** |
| **50** | **`verify.unavailablePlannedTitle`** | What is planned, and what it will and will not do | ما هو مخطط له، وما الذي سيفعله وما لن يفعله |  | **YES** |
| **51** | **`verify.unavailablePlanned[0]`** | Later, one check will be added. You will be asked once for a government ID document, and only if you want your membership counted in a party's official size, to cast a vote that decides something, or to stand as a candidate. | لاحقًا ستُضاف خطوة تحقق واحدة. سيُطلب منك مرة واحدة وثيقة هوية حكومية، وذلك فقط إذا أردت أن تُحتسب عضويتك في العدد الرسمي لحزب، أو أن تصوّت تصويتًا يقرّر شيئًا، أو أن ترشّح نفسك. |  | **YES** |
| **52** | **`verify.unavailablePlanned[1]`** | An outside company will do that check, and that company will see your document. It is meant to delete it afterwards. That is a promise written into a contract, not something the maths makes impossible. | ستقوم شركة خارجية بهذا التحقق، وسترى تلك الشركة وثيقتك. ومن المفترض أن تحذفها بعد ذلك. هذا وعد مكتوب في عقد، وليس أمرًا تمنعه الرياضيات. |  | **YES** |
| **53** | **`verify.unavailablePlanned[2]`** | Even then, the check will not prove that each person has only one account. Someone with two valid ID documents could have two. | وحتى عندئذ، لن يثبت هذا التحقق أن لكل شخص حسابًا واحدًا فقط. ومن يملك وثيقتَي هوية صالحتين يمكن أن يملك حسابين. |  | **YES** |
| **54** | **`verify.unavailablePlanned[3]`** | None of this is built. It cannot start until a legal opinion for the first pilot country is finished. | لا شيء من هذا مُنجز، ولا يمكن أن يبدأ قبل اكتمال رأي قانوني في أول بلد تجريبي. |  | **YES** |

---

## Tier 4 — everything else, by section (212 leaves)

Ordinary risk: no live safety warning, no rewritten-under-FR-131 copy, and not blocked behind an
off flag. Still worth a careful pass, and **four rows carry a specific number-agreement flag**
because a citizen reads the number and acts on it directly: `petitions.supporters` (#183),
`petitions.needed` (#184), `petitions.timeLeft` (#187), `parties.memberCount` (#89) — check
agreement at all four samples (1, 2, 3, 11) on these with particular care.

### `meta` — 2 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 1 | `meta.name` | English | العربية |  |
| 2 | `meta.dir` | ltr | rtl |  |

### `common` — 10 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 3 | `common.appName` | Trumocracy | ترومقراطية |  |
| 4 | `common.skipToContent` | Skip to main content | انتقل إلى المحتوى |  |
| 5 | `common.loading` | Loading… | جارٍ التحميل… |  |
| 6 | `common.back` | Back | رجوع |  |
| 7 | `common.cancel` | Cancel | إلغاء |  |
| 8 | `common.close` | Close | إغلاق |  |
| 9 | `common.learnMore` | Learn more | اعرف المزيد |  |
| 10 | `common.required` | Required | مطلوب |  |
| 11 | `common.charactersSoFar` _(template, arity 2 — number agreement)_ | **(1, 1)** 1 of 1 characters so far<br>**(2, 2)** 2 of 2 characters so far<br>**(3, 5)** 3 of 5 characters so far<br>**(11, 11)** 11 of 11 characters so far | **(1, 1)** 1 من 1 حرفًا حتى الآن<br>**(2, 2)** 2 من 2 حرفًا حتى الآن<br>**(3, 5)** 3 من 5 حرفًا حتى الآن<br>**(11, 11)** 11 من 11 حرفًا حتى الآن |  |
| 12 | `common.language` | Language | اللغة |  |

### `nav` — 4 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 13 | `nav.home` | Home | الرئيسية |  |
| 14 | `nav.parties` | Parties | الأحزاب |  |
| 15 | `nav.startAParty` | Start a party | ابدأ حزبًا |  |
| 16 | `nav.verify` | Prove you are a real person | أثبت أنك شخص حقيقي |  |

### `parties` — 45 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 55 | `parties.title` | Parties | الأحزاب |  |
| 56 | `parties.lead` | Every party here was started by people, not by us. | كل حزب هنا بدأه الناس، لا نحن. |  |
| 57 | `parties.members` | members | عضوًا |  |
| 58 | `parties.founded` | Started | بدأ في |  |
| 59 | `parties.readManifesto` | Read what they stand for | اقرأ ما يدعون إليه |  |
| 60 | `parties.join` | Join | انضم |  |
| 61 | `parties.empty` | No parties yet. Somebody has to be first. | لا توجد أحزاب بعد. لا بد أن يكون أحدهم الأول. |  |
| 62 | `parties.manifestoTitle` | What this party stands for | ما يدعو إليه هذا الحزب |  |
| 63 | `parties.historyTitle` | Every version, kept forever | كل نسخة، محفوظة إلى الأبد |  |
| 64 | `parties.historyLead` | A party can change what it says, but it can never hide what it said before. Here is every version, oldest last. | يمكن للحزب أن يغيّر ما يقوله، لكنه لا يستطيع إخفاء ما قاله سابقًا. هذه كل النسخ، الأقدم في الأسفل. |  |
| 65 | `parties.versionLabel` _(template, arity 1 — number agreement)_ | **(1)** Version 1<br>**(2)** Version 2<br>**(3)** Version 3<br>**(11)** Version 11 | **(1)** النسخة 1<br>**(2)** النسخة 2<br>**(3)** النسخة 3<br>**(11)** النسخة 11 |  |
| 66 | `parties.changeSummary` | What changed | ما الذي تغيّر |  |
| 67 | `parties.diffAdded` | Added | أُضيف |  |
| 68 | `parties.diffRemoved` | Removed | حُذف |  |
| 69 | `parties.diffUnchanged` | Unchanged | دون تغيير |  |
| 70 | `parties.joinTitle` | Join this party | انضم إلى هذا الحزب |  |
| 71 | `parties.joinLead` | Nobody has to approve this. You join, and you are a member. You can leave at any time and nobody can stop you. | لا يحتاج هذا إلى موافقة أحد. تنضم فتصبح عضوًا. ويمكنك المغادرة متى شئت ولا يستطيع أحد منعك. |  |
| 72 | `parties.joinEqual` | Every member has exactly one vote, including you, from your first day. | لكل عضو صوت واحد بالضبط، وأنت منهم، من يومك الأول. |  |
| 73 | `parties.joinPrivate` | Your membership is not made public. In this version of the platform, our own records can link your account to the party you join. That link is never published. We tell you this plainly instead of promising more than we can keep. | عضويتك لا تُنشر للعموم. في هذه النسخة من المنصة، يمكن لسجلاتنا نحن أن تربط حسابك بالحزب الذي تنضم إليه. هذا الربط لا يُنشر أبدًا. نقول هذا بوضوح بدل أن نعد بأكثر مما نستطيع الوفاء به. |  |
| 74 | `parties.joinConfirm` | Join now | انضم الآن |  |
| 75 | `parties.memberBadge` | You are a member | أنت عضو |  |
| 76 | `parties.joined` | You are now a member of this party. | أصبحت الآن عضوًا في هذا الحزب. |  |
| 77 | `parties.leave` | Leave this party | غادر هذا الحزب |  |
| 78 | `parties.leaveHelp` | Leaving takes effect at once. There is no approval step and no penalty. | المغادرة تسري فورًا. لا خطوة موافقة ولا عقوبة. |  |
| 79 | `parties.left` | You have left this party. | لقد غادرت هذا الحزب. |  |
| 80 | `parties.onePartyRule` | You can belong to one party at a time. Leaving one and joining another is always your choice. | يمكنك الانتماء إلى حزب واحد في كل مرة. مغادرة حزب والانضمام إلى آخر خيارك دائمًا. |  |
| 81 | `parties.alreadyMemberElsewhere` _(template, arity 1 — number agreement)_ | **(1)** You are already a member of 1. You can belong to one party at a time. Leave 1 first, then join this one.<br>**(2)** You are already a member of 2. You can belong to one party at a time. Leave 2 first, then join this one.<br>**(3)** You are already a member of 3. You can belong to one party at a time. Leave 3 first, then join this one.<br>**(11)** You are already a member of 11. You can belong to one party at a time. Leave 11 first, then join this one. | **(1)** أنت عضو بالفعل في 1. يمكنك الانتماء إلى حزب واحد في كل مرة. غادر 1 أولًا، ثم انضم إلى هذا الحزب.<br>**(2)** أنت عضو بالفعل في 2. يمكنك الانتماء إلى حزب واحد في كل مرة. غادر 2 أولًا، ثم انضم إلى هذا الحزب.<br>**(3)** أنت عضو بالفعل في 3. يمكنك الانتماء إلى حزب واحد في كل مرة. غادر 3 أولًا، ثم انضم إلى هذا الحزب.<br>**(11)** أنت عضو بالفعل في 11. يمكنك الانتماء إلى حزب واحد في كل مرة. غادر 11 أولًا، ثم انضم إلى هذا الحزب. |  |
| 82 | `parties.membershipHistoryTitle` | Your membership history | سجل عضويتك |  |
| 83 | `parties.membershipHistoryLead` | Joining and leaving are both recorded. Nothing here is ever deleted. | الانضمام والمغادرة كلاهما يُسجَّل. لا شيء هنا يُحذف أبدًا. |  |
| 84 | `parties.historyJoined` _(template, arity 1 — number agreement)_ | **(1)** Joined 1<br>**(2)** Joined 2<br>**(3)** Joined 3<br>**(11)** Joined 11 | **(1)** انضممت في 1<br>**(2)** انضممت في 2<br>**(3)** انضممت في 3<br>**(11)** انضممت في 11 |  |
| 85 | `parties.historyLeft` _(template, arity 1 — number agreement)_ | **(1)** Left 1<br>**(2)** Left 2<br>**(3)** Left 3<br>**(11)** Left 11 | **(1)** غادرت في 1<br>**(2)** غادرت في 2<br>**(3)** غادرت في 3<br>**(11)** غادرت في 11 |  |
| 86 | `parties.historyActive` | Member now | عضو الآن |  |
| 87 | `parties.historyInactive` | No longer a member | لم تعد عضوًا |  |
| 88 | `parties.officialStrength` _(template, arity 1 — number agreement)_ | **(1)** 1 counted members<br>**(2)** 2 counted members<br>**(3)** 3 counted members<br>**(11)** 11 counted members | **(1)** 1 من الأعضاء المحسوبين<br>**(2)** 2 من الأعضاء المحسوبين<br>**(3)** 3 من الأعضاء المحسوبين<br>**(11)** 11 من الأعضاء المحسوبين |  |
| **89** | **`parties.memberCount`** ⚠ a citizen-actionable count | _(template, arity 1 — number agreement)_ **(1)** 1 members<br>**(2)** 2 members<br>**(3)** 3 members<br>**(11)** 11 members | **(1)** 1 عضوًا<br>**(2)** 2 عضوًا<br>**(3)** 3 عضوًا<br>**(11)** 11 عضوًا | **Check agreement at all 4 samples** |
| 90 | `parties.countingTitle` | Does my membership count? | هل تُحسب عضويتي؟ |  |
| 91 | `parties.countingOpenBody` | You are a real member of this party. You can read, discuss, support and organise. But joining is not the same as counting. Until you pass a government ID check, you are not part of this party's official strength number. | أنت عضو حقيقي في هذا الحزب. يمكنك القراءة والنقاش والدعم والتنظيم. لكن الانضمام ليس هو الاحتساب. حتى تجتاز فحص هوية حكومية، لست جزءًا من رقم القوة الرسمي لهذا الحزب. |  |
| 92 | `parties.countingCountedBody` | You are counted in this party's official strength number. | أنت محسوب في رقم القوة الرسمي لهذا الحزب. |  |
| 93 | `parties.countMe` | Count me in the official strength | احسبني في القوة الرسمية |  |
| 94 | `parties.openTierNoticeTitle` | This action needs one more step | هذا الإجراء يحتاج خطوة إضافية |  |
| 95 | `parties.openTierNoticeCurrent` | Right now you take part in the open tier. You joined with a phone number only. | أنت الآن تشارك في المستوى المفتوح. انضممت برقم هاتف فقط. |  |
| 96 | `parties.openTierNoticeNeedsId` | Being counted needs a government ID check first. | الاحتساب يحتاج أولًا إلى فحص هوية حكومية. |  |
| 97 | `parties.openTierNoticeWhatDoesNotCount` | Until then, three things do not count for you: you are not part of the party's official strength number, your vote does not decide a binding decision, and you cannot stand as a candidate. | حتى ذلك الحين، ثلاثة أشياء لا تُحسب لك: لست جزءًا من رقم القوة الرسمي للحزب، وصوتك لا يقرر في القرارات الملزمة، ولا يمكنك الترشح. |  |
| 98 | `parties.openTierNoticeHowTo` | To be counted, complete the government ID check. That check is not switched on yet in this version. Everything else about your membership works now. | لكي تُحسب، أكمل فحص الهوية الحكومية. هذا الفحص غير مفعّل بعد في هذه النسخة. كل شيء آخر في عضويتك يعمل الآن. |  |
| 99 | `parties.openTierNoticeRefused` | Your request was not counted. Nothing else has changed. | طلبك لم يُحسب. لا شيء آخر تغيّر. |  |

### `debate` — 63 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 100 | `debate.title` | Proposals | المقترحات |  |
| 101 | `debate.lead` | Anyone in a party can put a question to the members. Anyone else can answer it with a different proposal. Nobody decides on their own which answer people get to choose from. | يمكن لأي عضو في حزب أن يطرح سؤالًا على الأعضاء. ويمكن لأي عضو آخر أن يجيب عليه بمقترح مختلف. لا أحد يقرر وحده ما هي الخيارات المتاحة أمام الناس. |  |
| 102 | `debate.empty` | No questions have been put to this party yet. | لم يُطرح أي سؤال على هذا الحزب بعد. |  |
| 103 | `debate.questionLabel` | The question | السؤال |  |
| 104 | `debate.windowStage` | Stage now | المرحلة الآن |  |
| 105 | `debate.proposalCount` _(template, arity 1 — number agreement)_ | **(1)** 1 proposal<br>**(2)** 2 proposals<br>**(3)** 3 proposals<br>**(11)** 11 proposals | **(1)** مقترح واحد<br>**(2)** 2 مقترحات<br>**(3)** 3 مقترحات<br>**(11)** 11 مقترحات |  |
| 106 | `debate.competingLead` | These proposals all answer the same question. They stand equally. The person who asked first has no say over the others. | هذه المقترحات كلها تجيب على السؤال نفسه، وهي متساوية في المكانة. ومن طرح السؤال أولًا ليس له أي سلطة على البقية. |  |
| 107 | `debate.byAuthor` _(template, arity 1 — number agreement)_ | **(1)** Put forward by 1<br>**(2)** Put forward by 2<br>**(3)** Put forward by 3<br>**(11)** Put forward by 11 | **(1)** تقدّم به 1<br>**(2)** تقدّم به 2<br>**(3)** تقدّم به 3<br>**(11)** تقدّم به 11 |  |
| 108 | `debate.originalTag` | Asked the question | طرح السؤال |  |
| 109 | `debate.competingTag` | Answering the same question | يجيب على السؤال نفسه |  |
| 110 | `debate.fileTitle` | Put a proposal to the members | اطرح مقترحًا على الأعضاء |  |
| 111 | `debate.fileLead` | Say what question you are answering and what you would do. Nobody screens this. It goes to the members as written. | اذكر السؤال الذي تجيب عليه وما ستفعله. لا أحد يراجع هذا مسبقًا. يصل إلى الأعضاء كما كتبته. |  |
| 112 | `debate.questionField` | The question you are answering | السؤال الذي تجيب عليه |  |
| 113 | `debate.questionHelp` | If someone has already asked this question, your proposal joins theirs and members choose between them. | إذا كان أحد قد طرح هذا السؤال، ينضم مقترحك إلى مقترحه ويختار الأعضاء بينهما. |  |
| 114 | `debate.titleField` | A short name for your proposal | اسم مختصر لمقترحك |  |
| 115 | `debate.bodyField` | What you would do, and why | ما ستفعله، ولماذا |  |
| 116 | `debate.tierField` | How big a decision is this? | ما حجم هذا القرار؟ |  |
| 117 | `debate.fileConfirm` | Put this to the members | اطرح هذا على الأعضاء |  |
| 118 | `debate.filed` | Your proposal is now with the members. | مقترحك الآن بين يدي الأعضاء. |  |
| 119 | `debate.workerGateTitle` | Putting a proposal forward is public | طرح المقترحات يكون علنًا |  |
| 120 | `debate.workerGateBody` | Members who put proposals forward do so in the open, under a name other members can see. Supporters take part without a public name, so a Supporter cannot be the author of a proposal. | الأعضاء الذين يطرحون المقترحات يفعلون ذلك علنًا، باسم يراه بقية الأعضاء. أما المناصرون فيشاركون دون اسم علني، ولذلك لا يمكن أن يكون المناصر صاحب مقترح. |  |
| 121 | `debate.workerGateHow` | You can say you are a Worker at any time. Nobody approves it — you decide. It lasts for the term, and it makes your record of taking part in this party public for that time. | يمكنك أن تعلن أنك عامل في أي وقت. لا أحد يوافق على ذلك — أنت من يقرر. وهو يستمر طوال المدة، ويجعل سجل مشاركتك في هذا الحزب علنيًا طوال تلك المدة. |  |
| 122 | `debate.workerGateAction` | Say I am a Worker | أعلن أنني عامل |  |
| 123 | `debate.workerConsentTitle` | Before you say you are a Worker | قبل أن تعلن أنك عامل |  |
| 124 | `debate.workerConsentPermanent` | This lasts for the whole term. You cannot undo it partway through. | هذا يستمر طوال المدة كلها. لا يمكنك التراجع عنه في منتصفها. |  |
| 125 | `debate.workerConsentPublicRecord` | Your record of taking part in this party becomes public for the term — not only the proposals you put forward, but what you take part in. | يصبح سجل مشاركتك في هذا الحزب علنيًا طوال المدة — ليس فقط المقترحات التي تطرحها، بل ما تشارك فيه أيضًا. |  |
| 126 | `debate.workerConsentNoApproval` | Nobody reviews this. When you confirm, it is done. | لا أحد يراجع هذا. عندما تؤكد، يتم الأمر. |  |
| 127 | `debate.workerConsentConfirm` | I understand — make me a Worker | أفهم ذلك — اجعلني عاملًا |  |
| 128 | `debate.workerConsentCancel` | Not now | ليس الآن |  |
| 129 | `debate.workerGateNotJudgement` | This is not about whether your idea is good. It is only about whether your name is public. | هذا لا يتعلق بجودة فكرتك، بل فقط بما إذا كان اسمك علنيًا. |  |
| 130 | `debate.stageNames.PROPOSAL` | Put forward | طُرح |  |
| 131 | `debate.stageNames.REVIEW` | First read | قراءة أولى |  |
| 132 | `debate.stageNames.DISCUSSION` | Discussion | نقاش |  |
| 133 | `debate.stageNames.DEBATE` | Debate | مناظرة |  |
| 134 | `debate.stageNames.VOTE` | Vote | تصويت |  |
| 135 | `debate.stageNames.DECISION` | Decision | قرار |  |
| 136 | `debate.stageNames.IMPLEMENTATION` | Being carried out | قيد التنفيذ |  |
| 137 | `debate.stageNames.MEASUREMENT` | Checking what happened | قياس ما حدث |  |
| 138 | `debate.stageLead` | Every question goes through the same steps in the same order. No step is skipped and nobody can jump one. | كل سؤال يمر بالخطوات نفسها وبالترتيب نفسه. لا تُتخطى أي خطوة ولا يستطيع أحد القفز فوق واحدة. |  |
| 139 | `debate.stageDone` | Done | انتهت |  |
| 140 | `debate.stageNow` | Now | الآن |  |
| 141 | `debate.stageToCome` | To come | قادمة |  |
| 142 | `debate.competingClosed` | The members are past the point where a new proposal can join this question. It would change what people have already been asked. | تجاوز الأعضاء النقطة التي يمكن فيها لمقترح جديد أن ينضم إلى هذا السؤال، لأن ذلك سيغيّر ما سُئل عنه الناس بالفعل. |  |
| 143 | `debate.discussionTitle` | What members have said | ما قاله الأعضاء |  |
| 144 | `debate.discussionLead` | Anything said here is kept. It is a record of the discussion — it does not decide anything on its own. | كل ما يُقال هنا يُحفظ. هو سجل للنقاش — ولا يقرر شيئًا بذاته. |  |
| 145 | `debate.discussionEmpty` | Nothing has been said yet. | لم يُقل شيء بعد. |  |
| 146 | `debate.discussionField` | Say what you think | قل ما ترى |  |
| 147 | `debate.discussionSend` | Add to the discussion | أضف إلى النقاش |  |
| 148 | `debate.discussionOpenToAll` | Every member can take part in this, including members who have not done a government ID check. | يمكن لكل عضو المشاركة في هذا، بمن فيهم الأعضاء الذين لم يجروا فحص الهوية الحكومية. |  |
| 149 | `debate.discussionClosed` | The discussion for this question has closed. | أُغلق النقاش حول هذا السؤال. |  |
| 150 | `debate.ballotTitle` | The vote | التصويت |  |
| 151 | `debate.ballotLead` | Members choose between the proposals above. | يختار الأعضاء بين المقترحات أعلاه. |  |
| 152 | `debate.ballotCheck` | Check whether my vote counts | تحقق مما إذا كان صوتي يُحسب |  |
| 153 | `debate.ballotAdmitted` | Your vote counts in this decision. | صوتك يُحسب في هذا القرار. |  |
| 154 | `debate.ballotNotOpen` | The vote has not opened yet. | لم يُفتح التصويت بعد. |  |
| 155 | `debate.trailTitle` | Everything that happened, in order | كل ما حدث، بالترتيب |  |
| 156 | `debate.trailLead` | Every step is written down as it happens and never changed. You can read the whole story of a decision from start to finish. | تُكتب كل خطوة وقت حدوثها ولا تُغيَّر أبدًا. يمكنك قراءة قصة القرار كاملة من أولها إلى آخرها. |  |
| 157 | `debate.trailEvents.WINDOW_OPENED` | Question asked | طُرح السؤال |  |
| 158 | `debate.trailEvents.PROPOSAL_FILED` | Proposal put forward | قُدّم مقترح |  |
| 159 | `debate.trailEvents.DELIBERATION_POSTED` | Someone spoke | تحدّث أحدهم |  |
| 160 | `debate.trailEvents.STAGE_ADVANCED` | Moved to the next step | انتقل إلى الخطوة التالية |  |
| 161 | `debate.trailEvents.BALLOT_ADMISSION` | A member was admitted to the vote | قُبل عضو في التصويت |  |
| 162 | `debate.trailV1Note` | In this version the record is kept by us. Publishing it so that anyone can check it without trusting us is not switched on yet. We would rather say that than imply more. | في هذه النسخة نحتفظ نحن بالسجل. أما نشره بحيث يستطيع أي شخص التحقق منه دون الوثوق بنا فغير مفعّل بعد. نفضّل أن نقول ذلك على أن نوحي بأكثر منه. |  |

### `petitions` — 52 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 163 | `petitions.newTitle` | Start a party | ابدأ حزبًا |  |
| 164 | `petitions.newLead` | Write what your party would do about each of the eight areas below. All eight are needed. This is so people can judge a whole programme, not a slogan. | اكتب ما سيفعله حزبك في كل مجال من المجالات الثمانية أدناه. المجالات الثمانية كلها مطلوبة، ليحكم الناس على برنامج كامل لا على شعار. |  |
| 165 | `petitions.nameLabel` | Party name | اسم الحزب |  |
| 166 | `petitions.nameHelp` | Up to 80 characters. | حتى 80 حرفًا. |  |
| 167 | `petitions.jurisdictionLabel` | Where this party stands | المنطقة التي يمثلها الحزب |  |
| 168 | `petitions.jurisdictionHelp` | For example: IN/KA/BLR. Use the area codes for your country, state and city. | مثال: IN/KA/BLR. استخدم رموز بلدك وولايتك ومدينتك. |  |
| 169 | `petitions.pillarsTitle` | The eight areas | المجالات الثمانية |  |
| 170 | `petitions.completeness` _(template, arity 2 — number agreement)_ | **(1, 1)** 1 of 1 areas ready<br>**(2, 2)** 2 of 2 areas ready<br>**(3, 5)** 3 of 5 areas ready<br>**(11, 11)** 11 of 11 areas ready | **(1, 1)** 1 من 1 مجالات جاهزة<br>**(2, 2)** 2 من 2 مجالات جاهزة<br>**(3, 5)** 3 من 5 مجالات جاهزة<br>**(11, 11)** 11 من 11 مجالات جاهزة |  |
| 171 | `petitions.pillarNames.finance` | Money and the economy | المال والاقتصاد |  |
| 172 | `petitions.pillarNames.society` | People and communities | الناس والمجتمعات |  |
| 173 | `petitions.pillarNames.governance` | How decisions get made | كيف تُتخذ القرارات |  |
| 174 | `petitions.pillarNames.law` | Law and justice | القانون والعدالة |  |
| 175 | `petitions.pillarNames.education` | Schools and learning | المدارس والتعليم |  |
| 176 | `petitions.pillarNames.healthcare` | Health and care | الصحة والرعاية |  |
| 177 | `petitions.pillarNames.security` | Safety and defence | الأمن والدفاع |  |
| 178 | `petitions.pillarNames.regional` | Your local area | منطقتك المحلية |  |
| 179 | `petitions.pillarHelp` | Write at least 280 characters, so people can judge it. | اكتب 280 حرفًا على الأقل ليتمكن الناس من الحكم عليه. |  |
| 180 | `petitions.publish` | Publish and start gathering support | انشر وابدأ جمع الدعم |  |
| 181 | `petitions.publishBlocked` | Finish all eight areas before you publish | أكمل المجالات الثمانية قبل النشر |  |
| 182 | `petitions.progressTitle` | Support so far | الدعم حتى الآن |  |
| **183** | **`petitions.supporters`** ⚠ a citizen-actionable count | _(template, arity 1 — number agreement)_ **(1)** 1 supporters<br>**(2)** 2 supporters<br>**(3)** 3 supporters<br>**(11)** 11 supporters | **(1)** 1 داعمًا<br>**(2)** 2 داعمًا<br>**(3)** 3 داعمًا<br>**(11)** 11 داعمًا | **Check agreement at all 4 samples** |
| **184** | **`petitions.needed`** ⚠ a citizen-actionable count | _(template, arity 1 — number agreement)_ **(1)** 1 needed<br>**(2)** 2 needed<br>**(3)** 3 needed<br>**(11)** 11 needed | **(1)** 1 مطلوب<br>**(2)** 2 مطلوب<br>**(3)** 3 مطلوب<br>**(11)** 11 مطلوب | **Check agreement at all 4 samples** |
| 185 | `petitions.remaining` _(template, arity 1 — number agreement)_ | **(1)** 1 more to go<br>**(2)** 2 more to go<br>**(3)** 3 more to go<br>**(11)** 11 more to go | **(1)** بقي 1<br>**(2)** بقي 2<br>**(3)** بقي 3<br>**(11)** بقي 11 |  |
| 186 | `petitions.percentReady` _(template, arity 1 — number agreement)_ | **(1)** 1% of the way there<br>**(2)** 2% of the way there<br>**(3)** 3% of the way there<br>**(11)** 11% of the way there | **(1)** 1٪ من الطريق<br>**(2)** 2٪ من الطريق<br>**(3)** 3٪ من الطريق<br>**(11)** 11٪ من الطريق |  |
| **187** | **`petitions.timeLeft`** ⚠ a citizen-actionable count | _(template, arity 2 — number agreement)_ **(1, 1)** 1 days and 1 hours left<br>**(2, 2)** 2 days and 2 hours left<br>**(3, 5)** 3 days and 5 hours left<br>**(11, 11)** 11 days and 11 hours left | **(1, 1)** بقي 1 يومًا و1 ساعة<br>**(2, 2)** بقي 2 يومًا و2 ساعة<br>**(3, 5)** بقي 3 يومًا و5 ساعة<br>**(11, 11)** بقي 11 يومًا و11 ساعة | **Check agreement at all 4 samples** |
| 188 | `petitions.closed` | This has closed. | أُغلق هذا. |  |
| 189 | `petitions.met` | Enough people backed this. The party can start. | دعمه عدد كافٍ من الناس. يمكن للحزب أن يبدأ. |  |
| 190 | `petitions.support` | Support this party | ادعم هذا الحزب |  |
| 191 | `petitions.withdraw` | Take back my support | اسحب دعمي |  |
| 192 | `petitions.supportPublicWarning` | Backing a new party is a public act, like signing a public petition. Your name is not shown, but the fact that somebody in your area backed it is. | دعم حزب جديد فعل علني، مثل التوقيع على عريضة عامة. لا يظهر اسمك، لكن يظهر أن شخصًا من منطقتك دعمه. |  |
| 193 | `petitions.whyThisNumber` | Why this number? | لماذا هذا العدد؟ |  |
| 194 | `petitions.whyThisNumberBody` _(template, arity 1 — number agreement)_ | **(1)** This is a share of the people who live in this area.<br>**(2)** This is a share of the people who live in this area.<br>**(3)** This is a share of the people who live in this area.<br>**(11)** This is a share of the people who live in this area. | **(1)** هذه نسبة من عدد سكان هذه المنطقة.<br>**(2)** هذه نسبة من عدد سكان هذه المنطقة.<br>**(3)** هذه نسبة من عدد سكان هذه المنطقة.<br>**(11)** هذه نسبة من عدد سكان هذه المنطقة. |  |
| 195 | `petitions.emblemLabel` | Party emblem | شعار الحزب |  |
| 196 | `petitions.emblemHelp` | A short symbol for your party. Up to 8 characters — for example, two or three letters. | رمز قصير لحزبك. ثمانية أحرف كحدٍّ أقصى — كأن تكون حرفين أو ثلاثة. |  |
| 197 | `petitions.jurisdictionSelectLabel` | Area this party covers | المنطقة التي يمثلها هذا الحزب |  |
| 198 | `petitions.jurisdictionSelectHelp` | Choose the area your party will stand for. More areas will be added over time. | اختر المنطقة التي سيمثلها حزبك. ستُضاف مناطق أخرى مع الوقت. |  |
| 199 | `petitions.jurisdictionSelectPlaceholder` | Select an area | اختر منطقة |  |
| 200 | `petitions.nonViolenceTitle` | Non-violence commitment | التزام بالسلمية |  |
| 201 | `petitions.nonViolenceHelp` | Every party must include this statement. It cannot be removed or changed. This is the only restriction the platform places on what a party believes. | يجب أن يتضمن كل حزب هذا البيان. لا يمكن حذفه أو تعديله. هذا هو القيد الوحيد الذي تضعه المنصة على ما يؤمن به الحزب. |  |
| 202 | `petitions.charterSectionTitle` | Party rules | قواعد الحزب |  |
| 203 | `petitions.charterSectionHelp` | These are the rules your party will follow. The platform sets minimum standards. Your party can choose stricter rules, but not weaker ones. | هذه هي القواعد التي سيلتزم بها حزبك. تضع المنصة معايير دنيا، ويمكن لحزبك اختيار قواعد أكثر صرامة، لكن لا يمكنه اختيار قواعد أضعف. |  |
| 204 | `petitions.platformNotLegalTitle` | Creating a party here is not the same as legal registration | إنشاء حزب هنا لا يعني التسجيل القانوني |  |
| 205 | `petitions.platformNotLegalBody` | Starting a party on this platform means your party exists here, where people can support it. It does not mean your party is legally registered with any government. We cannot grant or override legal recognition. You will need to follow your own country's rules for legal registration separately. | إنشاء حزب على هذه المنصة يعني وجوده هنا حيث يمكن للناس دعمه. لا يعني ذلك أن حزبك مسجَّل قانونيًا لدى أي جهة حكومية. لا نستطيع منح أو إلغاء الاعتراف القانوني. ستحتاج إلى اتباع قواعد بلدك للتسجيل القانوني بشكل مستقل. |  |
| 206 | `petitions.provisionalLabel` | Pre-legal-verification | ما قبل التحقق القانوني |  |
| 207 | `petitions.provisionalCapHelpOpen` _(template, arity 1 — number agreement)_ | **(1)** This party is new and not yet legally registered. It can have up to 1 members for now. The limit lifts automatically when the party completes legal registration.<br>**(2)** This party is new and not yet legally registered. It can have up to 2 members for now. The limit lifts automatically when the party completes legal registration.<br>**(3)** This party is new and not yet legally registered. It can have up to 3 members for now. The limit lifts automatically when the party completes legal registration.<br>**(11)** This party is new and not yet legally registered. It can have up to 11 members for now. The limit lifts automatically when the party completes legal registration. | **(1)** هذا الحزب جديد وغير مسجَّل قانونيًا بعد. يمكنه استقبال حتى 1 عضوًا في الوقت الحالي. يُرفع هذا الحد تلقائيًا عند إتمام الحزب تسجيله القانوني.<br>**(2)** هذا الحزب جديد وغير مسجَّل قانونيًا بعد. يمكنه استقبال حتى 2 عضوًا في الوقت الحالي. يُرفع هذا الحد تلقائيًا عند إتمام الحزب تسجيله القانوني.<br>**(3)** هذا الحزب جديد وغير مسجَّل قانونيًا بعد. يمكنه استقبال حتى 3 عضوًا في الوقت الحالي. يُرفع هذا الحد تلقائيًا عند إتمام الحزب تسجيله القانوني.<br>**(11)** هذا الحزب جديد وغير مسجَّل قانونيًا بعد. يمكنه استقبال حتى 11 عضوًا في الوقت الحالي. يُرفع هذا الحد تلقائيًا عند إتمام الحزب تسجيله القانوني. |  |
| 208 | `petitions.provisionalCapHelpReached` _(template, arity 1 — number agreement)_ | **(1)** This party has reached its 1-member limit for new parties that are not yet legally registered. No new members can join until the party completes legal registration.<br>**(2)** This party has reached its 2-member limit for new parties that are not yet legally registered. No new members can join until the party completes legal registration.<br>**(3)** This party has reached its 3-member limit for new parties that are not yet legally registered. No new members can join until the party completes legal registration.<br>**(11)** This party has reached its 11-member limit for new parties that are not yet legally registered. No new members can join until the party completes legal registration. | **(1)** وصل هذا الحزب إلى حد 1 عضوًا المخصص للأحزاب الجديدة غير المسجَّلة قانونيًا. لا يمكن قبول أعضاء جدد حتى يُتمّ الحزب تسجيله القانوني.<br>**(2)** وصل هذا الحزب إلى حد 2 عضوًا المخصص للأحزاب الجديدة غير المسجَّلة قانونيًا. لا يمكن قبول أعضاء جدد حتى يُتمّ الحزب تسجيله القانوني.<br>**(3)** وصل هذا الحزب إلى حد 3 عضوًا المخصص للأحزاب الجديدة غير المسجَّلة قانونيًا. لا يمكن قبول أعضاء جدد حتى يُتمّ الحزب تسجيله القانوني.<br>**(11)** وصل هذا الحزب إلى حد 11 عضوًا المخصص للأحزاب الجديدة غير المسجَّلة قانونيًا. لا يمكن قبول أعضاء جدد حتى يُتمّ الحزب تسجيله القانوني. |  |
| 209 | `petitions.provisionalCapHelpLegal` | This party is legally registered. There is no membership limit. | هذا الحزب مسجَّل قانونيًا. لا يوجد حد لعدد الأعضاء. |  |
| 210 | `petitions.draftSaved` | Your draft has been saved. | تم حفظ مسودتك. |  |
| 211 | `petitions.petitionStarted` | Your party is now open for support. | حزبك مفتوح الآن لتلقي الدعم. |  |
| 212 | `petitions.collisionName` | A party or petition with this name already exists in your area. | يوجد حزب أو عريضة بنفس الاسم في منطقتك. |  |
| 213 | `petitions.collisionEmblem` | A party or petition with this emblem already exists in your area. | يوجد حزب أو عريضة بنفس الشعار في منطقتك. |  |
| 214 | `petitions.cooldownActive` _(template, arity 1 — number agreement)_ | **(1)** You filed a very similar party recently in this area. You can file again after 12/31/1969.<br>**(2)** You filed a very similar party recently in this area. You can file again after 12/31/1969.<br>**(3)** You filed a very similar party recently in this area. You can file again after 12/31/1969.<br>**(11)** You filed a very similar party recently in this area. You can file again after 12/31/1969. | **(1)** لقد قدّمت حزبًا مشابهًا مؤخرًا في هذه المنطقة. يمكنك التقديم مجددًا بعد 31‏/12‏/1969.<br>**(2)** لقد قدّمت حزبًا مشابهًا مؤخرًا في هذه المنطقة. يمكنك التقديم مجددًا بعد 31‏/12‏/1969.<br>**(3)** لقد قدّمت حزبًا مشابهًا مؤخرًا في هذه المنطقة. يمكنك التقديم مجددًا بعد 31‏/12‏/1969.<br>**(11)** لقد قدّمت حزبًا مشابهًا مؤخرًا في هذه المنطقة. يمكنك التقديم مجددًا بعد 31‏/12‏/1969. |  |

### `proposals` — 19 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 215 | `proposals.title` | Decision | قرار |  |
| 216 | `proposals.discussion` | Being discussed | قيد النقاش |  |
| 217 | `proposals.voting` | Open for voting | التصويت مفتوح |  |
| 218 | `proposals.tallying` | Counting | جارٍ العد |  |
| 219 | `proposals.defeated` | Not passed | لم يمر |  |
| 220 | `proposals.timelocked` | Passed, waiting | مرَّ، في الانتظار |  |
| 221 | `proposals.executed` | Done | نُفِّذ |  |
| 222 | `proposals.cancelled` | Withdrawn | سُحب |  |
| 223 | `proposals.barTitle` | What this needs to pass | ما يحتاجه هذا كي يمر |  |
| 224 | `proposals.quorum` _(template, arity 1 — number agreement)_ | **(1)** At least 1 of members must take part<br>**(2)** At least 2 of members must take part<br>**(3)** At least 3 of members must take part<br>**(11)** At least 11 of members must take part | **(1)** يجب أن يشارك 1 من الأعضاء على الأقل<br>**(2)** يجب أن يشارك 2 من الأعضاء على الأقل<br>**(3)** يجب أن يشارك 3 من الأعضاء على الأقل<br>**(11)** يجب أن يشارك 11 من الأعضاء على الأقل |  |
| 225 | `proposals.approval` _(template, arity 1 — number agreement)_ | **(1)** At least 1 of those who choose a side must say yes<br>**(2)** At least 2 of those who choose a side must say yes<br>**(3)** At least 3 of those who choose a side must say yes<br>**(11)** At least 11 of those who choose a side must say yes | **(1)** يجب أن يقول 1 على الأقل ممن اختاروا جانبًا: نعم<br>**(2)** يجب أن يقول 2 على الأقل ممن اختاروا جانبًا: نعم<br>**(3)** يجب أن يقول 3 على الأقل ممن اختاروا جانبًا: نعم<br>**(11)** يجب أن يقول 11 على الأقل ممن اختاروا جانبًا: نعم |  |
| 226 | `proposals.tenure` _(template, arity 1 — number agreement)_ | **(1)** You must have been a member for 1 days<br>**(2)** You must have been a member for 2 days<br>**(3)** You must have been a member for 3 days<br>**(11)** You must have been a member for 11 days | **(1)** يجب أن تكون عضوًا منذ 1 يومًا<br>**(2)** يجب أن تكون عضوًا منذ 2 يومًا<br>**(3)** يجب أن تكون عضوًا منذ 3 يومًا<br>**(11)** يجب أن تكون عضوًا منذ 11 يومًا |  |
| 227 | `proposals.resultsHidden` | No results are shown until voting closes. | لا تُعرض أي نتائج قبل إغلاق التصويت. |  |
| 228 | `proposals.resultsHiddenWhy` | Early numbers change how people vote, so nobody sees them. | الأرقام المبكرة تغيّر تصويت الناس، لذلك لا يراها أحد. |  |
| 229 | `proposals.castVote` | Cast your vote | أدلِ بصوتك |  |
| 230 | `proposals.choiceFor` | Yes | نعم |  |
| 231 | `proposals.choiceAgainst` | No | لا |  |
| 232 | `proposals.choiceAbstain` | Take part, but do not pick a side | أشارك دون اختيار جانب |  |
| 233 | `proposals.submit` | Send my vote | أرسل صوتي |  |

### `vote` — 8 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 234 | `vote.confirmTitle` | Your vote has been accepted | قُبل صوتك |  |
| 235 | `vote.confirmBody` | Your vote was accepted and it will be counted. | قُبل صوتك وسيُحتسب. |  |
| 236 | `vote.changeVote` | Change my vote | غيّر صوتي |  |
| 237 | `vote.changeVoteHelp` | You can change your vote as many times as you like until voting closes. | يمكنك تغيير صوتك كما تشاء حتى إغلاق التصويت. |  |
| 238 | `vote.changeVoteWindow` _(template, arity 1 — number agreement)_ | **(1)** You can change it until 1.<br>**(2)** You can change it until 2.<br>**(3)** You can change it until 3.<br>**(11)** You can change it until 11. | **(1)** يمكنك تغييره حتى 1.<br>**(2)** يمكنك تغييره حتى 2.<br>**(3)** يمكنك تغييره حتى 3.<br>**(11)** يمكنك تغييره حتى 11. |  |
| 239 | `vote.panic` | Start again | ابدأ من جديد |  |
| 240 | `vote.panicHelp` | Opens a fresh ballot. | يفتح ورقة تصويت جديدة. |  |
| 241 | `vote.done` | Done | تم |  |

### `errors` — 5 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 245 | `errors.title` | Something is wrong | هناك خطأ ما |  |
| 246 | `errors.trustBoundary` | The fast copy of the data disagreed with the record itself. We stopped rather than show you a number that might be wrong. | اختلفت النسخة السريعة من البيانات مع السجل نفسه. توقفنا بدل أن نعرض عليك رقمًا قد يكون خاطئًا. |  |
| 247 | `errors.anonymityTooSmall` | Too few people in your area have shown they are real, so acting here would point at you. We will use a wider area instead. | عدد من أثبتوا أنهم حقيقيون في منطقتك قليل جدًا، فالتصرف هنا سيشير إليك. سنستخدم منطقة أوسع. |  |
| 248 | `errors.flagOff` | This part is not switched on yet. | هذا الجزء غير مُفعَّل بعد. |  |
| 249 | `errors.generic` | We could not finish that. Nothing was sent. | لم نتمكن من إتمام ذلك. لم يُرسل شيء. |  |

### `a11y` — 4 leaves

| # | key | English (source of truth) | Arabic (engineer working draft) | OK? |
|---|---|---|---|---|
| 250 | `a11y.progressLabel` _(template, arity 1 — number agreement)_ | **(1)** Support: 1 per cent of the number needed<br>**(2)** Support: 2 per cent of the number needed<br>**(3)** Support: 3 per cent of the number needed<br>**(11)** Support: 11 per cent of the number needed | **(1)** الدعم: 1 بالمئة من العدد المطلوب<br>**(2)** الدعم: 2 بالمئة من العدد المطلوب<br>**(3)** الدعم: 3 بالمئة من العدد المطلوب<br>**(11)** الدعم: 11 بالمئة من العدد المطلوب |  |
| 251 | `a11y.errorSummary` _(template, arity 1 — number agreement)_ | **(1)** 1 things still need your attention<br>**(2)** 2 things still need your attention<br>**(3)** 3 things still need your attention<br>**(11)** 11 things still need your attention | **(1)** 1 أمور تحتاج إلى انتباهك<br>**(2)** 2 أمور تحتاج إلى انتباهك<br>**(3)** 3 أمور تحتاج إلى انتباهك<br>**(11)** 11 أمور تحتاج إلى انتباهك |  |
| 252 | `a11y.externalLink` | opens in a new tab | يفتح في تبويب جديد |  |
| 253 | `a11y.currentPage` | Current page | الصفحة الحالية |  |

---

## 5. A worked caution: why substring scanning cannot do this job

Doc 07 `TC-3573` records that a **proposed wide ban on the bare Arabic substring "سري"** ("secret")
was **removed on purpose** during that test case's design. The reason: **"سري" is a substring of
other, unrelated, entirely honest Arabic words** — for example **"سريعًا"** ("quickly") and
**"تسري"** ("takes effect"). The latter is **already shipping honestly** at `parties.leaveHelp`
(#78 above: "المغادرة تسري فورًا" — "Leaving takes effect at once"). A mechanical ban on the
substring would have flagged that correct, honest sentence as a false positive, while a more
permissive scan risks missing a real overclaim embedded in a longer word.

**Take the lesson, not just the example:** Arabic morphology means root letters recombine inside
many unrelated words, so no substring or keyword list can safely stand in for a reader's judgment
of what a sentence actually claims in context. This is exactly why §3(c) above says a native
speaker's reading is, in a real sense, the only instrument that can check this — not a stopgap
until a better scanner is built, but the correct instrument for a language whose word-formation a
Latin-script keyword list cannot model.

## 6. Return path — what happens to a finding

- **How to record a finding.** In the pairing tables above: leave the **OK?** column blank on any
  row with an issue, and note, next to it or in a follow-up list: the **key**, the **proposed
  Arabic replacement text**, and the **reason** (which of the five checks in §3 it fails).
- **Who receives it.** The reviewer's findings go to the **engineer** (Samuel Oyelaran), who owns
  `ar.ts` and applies the copy changes. The register that closes is **Doc 06 §7 item 17**
  (`ARABIC-I18N`) — the engineer updates it to record the review as done and the fixes as applied.
- **What happens to a Tier 1 (`banner.*`) finding, specifically.** Per Doc 06 §7 item 17's own
  language, a mistranslated coercion warning is a **safety defect, not a polish item**. A finding
  on any `banner.*` row **blocks Arabic-locale deployment outright — it does not queue** behind
  other findings or other work. It is applied and re-reviewed before an Arabic locale ships to any
  real user, independent of the state of the rest of this packet.
- **What happens to any other finding.** Applied by the engineer, then the corrected string is
  re-checked (ideally by the same reviewer) before the deployment for that locale proceeds.
- **What does NOT close `ARABIC-I18N`:** producing this packet, a partial pass through it, or an
  engineer's own re-reading of their own translation. Only a **named native Arabic speaker's**
  completed pass, with findings applied, closes it.
