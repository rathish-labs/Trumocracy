# Press Release / PR-FAQ — TEMPLATE

```
Document ID:   PR-<product>
Version:       <semver>
Status:        Draft | In Review | Approved (Gate 1)
Classification:Internal
Owner:         <Product Owner — named>
Approvers:     Gate 1 — Product, Engineering, Design
Last updated:  <YYYY-MM-DD>
```

> **Based on:** Amazon "Working Backwards" PR-FAQ. **Produced in:** Vision. **Approved at:** Gate 1.
> _Write as if the product has **already launched**, in the customer's language. One page of press release + an exhaustive FAQ. If it is not compelling here, kill it here — the cheapest place to fail._

---

## A. Tenets (the principles for this product)
> _3–5 short, opinionated statements you will not compromise on. Used to settle later trade-offs._
1. <tenet>
2. <tenet>

## B. Press Release (≤ 1 page)

**FOR IMMEDIATE RELEASE — <City>, <Date>**

### Headline
> _One benefit-led sentence in the customer's words._
<Headline>

### Sub-headline
> _One sentence naming the customer and the benefit._
<Sub-headline>

### Summary paragraph
> _What launched, for whom, and the single biggest benefit. Assume the reader stops here._
<2–4 sentences>

### The problem
> _The customer pain today, concretely._
<paragraph>

### The solution
> _How the product solves it. Simple, no jargon._
<paragraph>

### Leader quote
> _A spokesperson frames why this matters now._
"<quote>" — <Name, Title>

### How it works / customer journey
> _The end-to-end experience in 3–6 steps._
1. <step>

### Customer quote
> _A delighted customer in their own voice._
"<quote>" — <persona>

### Availability & call to action
<How to get it; rollout note.>

---

## C. Success metrics (measurable promises)
> _Every number here becomes a tracked requirement in Doc 02._
| Metric | Baseline | Target | Guardrail (must-not-regress) |
|--------|----------|--------|------------------------------|
| <e.g. conversion> | <x> | <y> | <z> |

## D. Out of scope (explicit non-goals)
> _What you are deliberately NOT doing this release. Prevents scope creep._
- <non-goal>

---

## E. FAQ

### E1. Customer FAQs
> _What customers will actually ask._
- **Who is this for?** <answer>
- **How much does it cost the customer?** <answer>
- **How is my data used / kept private?** <answer>
- **What happens if it goes wrong for me?** <answer / mitigation>
- **What devices / regions / languages?** <answer>
- **What's different from <alternative>?** <answer>

### E2. Stakeholder / internal FAQs (do not skip — these are most-regretted if missing)
- **What is the measurable success criterion?** <metric, target, time-box>
- **What is the business model / unit economics?** <revenue, cost-to-serve, margin>
- **What is the build vs. buy decision?** <answer + why>
- **What are the top 3 risks and mitigations?** <RISK-xx list>
- **What dependencies (teams, systems, vendors) does this need?** <list>
- **What are the legal, privacy, security, and compliance implications?** <answer>
- **What is the rollout & rollback plan at a high level?** <answer>
- **What does success at 1 month / 6 months / 1 year look like?** <answer>
- **What would make us kill or pivot this?** <kill criteria>
- **What is the estimated cost and timeline (appetite)?** <answer>
- **Accessibility & localization commitments?** <answer>
- **What is explicitly NOT in this release, and when (if ever) later?** <answer>

---

## F. Appendix
- Market / competitive notes · supporting data · mockups (links).

---

### Downstream
Every promise (headline, metrics, scope boundaries, risks) becomes an indexed requirement in **Doc 02**. A promise with no requirement is a gap to close before Gate 1.
