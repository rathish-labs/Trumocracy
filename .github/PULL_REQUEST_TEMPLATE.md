<!-- Thank you. Read CONTRIBUTING.md first; the checklist below is what reviewer-qa checks before signing a merge. -->

## What this changes

<!-- One paragraph. Which user story (`US-####`) or `chore(...)` / `docs(...)` scope does this land? -->

Story / scope:

## Checklist

- [ ] Every commit carries a `Signed-off-by:` trailer (`git commit -s`, see `DCO`).
- [ ] Conventional Commit messages referencing the `US-####` (or `chore`/`docs`/`fix` scope).
- [ ] `npm run verify` is green locally (dep-guard, contracts compile, typecheck, every test suite).
- [ ] New behaviour has a `UT-####` unit test; the id is registered in `docs/06-coding-and-ut.md` §7.
- [ ] Feature work ships **behind a flag** (`packages/protocol/src/flags.js`), off in `prod`.
- [ ] **Honesty check (FR-131, `docs/02-requirements-srs.md` §4.45):** no string, comment, README line or doc
      describes a v1 participation act (voting, backing a petition, joining or belonging to a party) as
      private, anonymous, receipt-free or secure, and nothing lets a reader believe Trumocracy cannot
      link them to that act. The guards UT-0869 / UT-0887 / UT-0759 / UT-0888 / UT-0889 pass.
- [ ] No unintended files in the diff (`git show --stat`).
- [ ] If a `docs/` document changed: its `Version:` was bumped, `Status: In Review` set, and a neutral
      review is requested from the project-manager (you never review your own document).

## Notes for the reviewer

<!-- Anything a reviewer needs to know: what you could not verify, what is deliberately out of scope. -->
