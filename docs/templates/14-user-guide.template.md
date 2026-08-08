# User Guide / Product Documentation — TEMPLATE

```
Document ID:   UG-<product>
Version:       <semver — tracks the product release it documents>
Status:        Living (updated every release)
Owner / Author: <Tech Writer (Docs) — named>   (Responsible)
Accountable:    <Product Owner — named>         (signs off at Gate 2)
Source:         PR-<product>, SRS-<product>, REL-<product>-<x.y.z>
Last updated:   <YYYY-MM-DD>
```

> **Based on:** the **Diátaxis** documentation framework (tutorials · how-to · reference · explanation) + Google developer-documentation style + Apple HIG (task-oriented, customer-language). **Produced in:** Launch (drafted during **Coding & UT**, shipped at Gate 2). **Updated:** every release.
> _Roles: the **Tech Writer (Docs)** authors and owns this document; the **Product Owner** is accountable and signs it off. See the canonical RACI in Project Plan (13) §7._
> _The first **customer-facing** document in the suite. Write in the customer's language, in the second person ("you"), present tense. **Do not mix the four modes** — mixing types is the most common cause of confusing docs. Every feature that shipped (Doc 09) must be findable here; a shipped feature with no user-facing doc is a gap._

---

## 0. About this guide
> _Audience, product version this guide covers, and how to navigate the four sections below._
| Field | Value |
|-------|-------|
| Audience | <end user / admin / developer> |
| Product version | <x.y.z> (see Release Notes, Doc 09) |
| Last reviewed | <YYYY-MM-DD> |
| Feedback / support | <link — see §6> |

---

## 1. Get started — **Tutorials** (learning-oriented)
> _Take a brand-new user, by the hand, through one complete success. The user **does** something and reaches a working result. Concrete, no choices, no explanation of internals — confidence first. One tutorial per key persona/first-run journey._
### 1.1 Before you begin (prerequisites, accounts, install)
### 1.2 <TUT-01 — your first <outcome>>
```
Step 1. <do this> → you should see <observable result>
Step 2. <…>
✅ You've now <achieved the outcome>.
```
### 1.3 What's next (pointer into the How-to guides)

---

## 2. How-to guides — **task-oriented** (problem → solution)
> _Each guide answers "How do I …?" for a real goal a competent user already has. A recipe: numbered steps, the happy path, no teaching. Title every guide as a task ("Reset your password"), not a feature name. One row per shipped feature._
| ID | Task ("How do I…") | Covers feature | Steps location |
|----|--------------------|----------------|----------------|
| HT-001 | <…> | FE-### / from Doc 09 | §2.x |

### 2.x <HT-001 — How to <task>>
> _Goal · prerequisites · numbered steps · result · troubleshooting pointer._

---

## 3. Reference — **information-oriented** (accurate, complete, dry)
> _Facts the user looks up while working: every setting, field, screen, limit, error, shortcut. Describe — never instruct or explain. Structured for scanning. If the product has an API, the developer/API reference is its own artifact — link it, don't duplicate._
### 3.1 Screens & UI surfaces (map to SCR-## from Doc 05)
### 3.2 Settings & configuration (every option: name, default, effect, allowed values)
### 3.3 Limits, quotas & supported environments (browsers, devices, OS, regions, locales)
### 3.4 Keyboard shortcuts / commands
### 3.5 Error & status messages
| Message / code | What it means | What to do |
|----------------|---------------|------------|
| <…> | <…> | <…> |
### 3.6 Glossary (customer-facing terms)

---

## 4. Explanation — **understanding-oriented** (the "why")
> _Background and context for the user who wants to understand, not act. Concepts, design rationale, how the pieces fit, trade-offs. No step-by-step here. Optional but high-value for complex products._
### 4.1 Key concepts & how <product> works
### 4.2 Why it behaves this way (design intent, what it is **not** for — mirror PR-FAQ non-goals)

---

## 5. Accessibility & localization notes (customer-facing)
> _How to use accessibility features (screen reader, keyboard-only, contrast); available languages/locales. Conformance evidence lives in the Accessibility Conformance Report; link it here._

## 6. Get help & give feedback
> _Support channels, status page, known-issues link (from Doc 09 / Doc 11), how to report a bug, response expectations (link any customer SLA)._
| Need | Where | Hours |
|------|-------|-------|
| Support | <link> | <…> |
| Service status | <status page> | — |
| Report a bug / request | <link> | <…> |

## 7. What's new & version history
> _Per-release, customer-facing summary — the human-readable companion to Release Notes (Doc 09). Link, don't duplicate the changelog._

---
### Upstream / Downstream
Sourced from the requirements (Doc 02), screen inventory (Doc 05), and each release (Doc 09); known issues flow in from Operations (Doc 11). Every **Must** feature in the RTM (Doc 08) should resolve to a how-to or reference entry here — an undocumented shipped feature is a coverage gap.
