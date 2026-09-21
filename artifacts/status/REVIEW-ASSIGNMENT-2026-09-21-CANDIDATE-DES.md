# Review assignment — TRUMO-P03 candidate/election DESs made Definition-A (Doc 03 v2.15.0 → Doc 07 / Doc 08 closure touch)

```
Assigned by:   project-manager (Ana-Maria Petrescu) — per CLAUDE.md "Review-and-rework loop"
Date:          2026-09-21
Trigger:       Architect session TRUMO-P03 on branch design/candidate-des-definition-a (off main
               at 12fe4a6, PR #22 merged). TRUMO-P02 built and tested the v1 candidate-selection
               flow (Doc 06 v2.11.1 Approved; UT-0891..UT-0907; suite 739/739) and closed ZERO
               RTM rows because DES-027/028/066/067/076 name the on-chain Elections contract as
               the component and FR-081 / FR-093 have no DES at all. This session does for those
               elements what DES-095/096 did for eligibility and ballots: the SDK conventional
               backing becomes the Definition-A (v1) design behind one seam (ICandidateStore),
               with the Elections contract as the deferred v2 backing behind the same seam.
Scope:         DOCUMENTS ONLY. No product code, no test, no UT is written or edited. Doc 03
               v2.14.1 → v2.15.0 (architect). Then, folded in as the tester's immediate
               follow-up: Doc 07 v2.9.0 → v2.10.0 (TC rows for UT-0891..UT-0907) and Doc 08
               v2.12.3 → v2.13.0 (the honest per-row ruling: CLOSE, or "DES-present, tests-owed",
               or OPEN with the blocker named).
Entry state:   npm test 739/739 (confirmed at start); gate --audit exit 0, 0 blocking;
               RTM 138 Must / 16 COMPLETE / 122 OPEN, both hook signals agreeing.
Rule:          Reviewer assignment is recorded HERE before dispatch. A role that hits the
               SubagentStop block ROUTES to the PM; it never authors the review whose absence
               is blocking it. Other documents In Review mid-session is EXPECTED — do not
               self-appoint. Reviewers score and list only; they never edit.
Ratification:  NOMINATION_ENDORSEMENTS_MIN = 5 (NOMINATION-MIN-01) and NOMINATION_MATURATION =
               30 days (MATURATION-01) are APPROVER-RULED (Rathish Kumar, 2026-09-21) —
               artifacts/status/DECISIONS-2026-09-21-CANDIDATE-CONSTANTS.md. Doc 03 §10.11 is
               their home. The code comments that still say "flagged for ratification" are an
               engineer touch on the next Doc 06 version, not this session's.
```

## Phase-1 map (reported before any amendment — it defines the session)

| FR (Must) | DES today | v1 code + tests (TRUMO-P02) | Class | Design action | Honest row outlook |
|---|---|---|---|---|---|
| FR-036 | DES-027 "Solidity" | self-only nominate, `isWithin` scope, endorsement minimum, withdraw before lock — UT-0894/0896/0897/0905 | (a) | amend DES-027 | CLOSEABLE |
| FR-037 | **DES-028** "Solidity + client copy" (the row's DES; not in the brief's list) | consent recorded once; public view hides name pre-consent; trail names nobody pre-consent — UT-0895/0897/0904 | (a) | amend DES-028 | CLOSEABLE |
| FR-039 | DES-076 "Elections" | timetable immutable + ballot lock built; office-ballot residency guard and tie-break rule NOT built — UT-0901 | (c) | amend DES-076 layered | OPEN — build owed |
| FR-065 | DES-066 "Elections; Solidity" | +3/−1, refused second vote, aggregate-only reads — UT-0893/0900/0906 | (a) + ruling | amend DES-066 | closeable under Doc 02 §16.3.1's own IN-v1 reading; "unlinkable to caster" is Definition-B — tester rules |
| FR-066 | DES-067 "Elections; IPFS" | three topics, attendance, absence visible, content ref — UT-0892/0898 | (c) | amend DES-067 layered | OPEN — "on the verifiable record" needs DES-097 audit-record anchoring (S-8), not built |
| FR-067 | DES-067 | strict net-positive; PUBLISHED only via the full cycle; `officeHolder` unreachable; no renominate capability — UT-0891/0893/0899/0901/0906 | (a) + ruling | amend DES-067 | CLOSEABLE; "refused **and logged**" is refusal by construction with no refusal trail event — tester rules |
| FR-081 | none | self-nominate; no approve/reject/rank capability; vote decides; append-only trail — UT-0891/0896/0897/0901 | (b) | mint DES-107 | CLOSEABLE |
| FR-085 | DES-093/094 (UI only) | irrevocable after close; withdraw before close destroys disclosures — UT-0895/0897/0904 | (a)/(b) | amend DES-028 to carry the lifecycle | closeable only if the tester re-homes TC-3476 (Blocked FR-131 clause-8 case on this row) |
| FR-093 | none | nomination window, debates, vote, lock built; question phase and election NOT built | (b)+(c) | mint DES-108 | OPEN — build owed |

Not in scope and left as they are: FR-038 (Should — DES-028's amendment covers it; the tester may
close the non-gating row), FR-040/FR-041 (DES-029, not built), FR-083 (DES-093/094; the
candidate half of the participation record is now in the trail, the Worker half is not designed),
FR-107 (platform-wide; still no DES).

## Ownership and rework

| Work | Owner | Target | Artifact |
|---|---|---|---|
| Doc 03 §5.2 annotations of DES-027/028/066/067/076; §10.13.14 (the layered v1/v2 design + DES-107/DES-108 normative text); §10.11 ratified constants; §10.12.4 SCR-15/16/22/23 notes; §11 rows; §13 owed-build rows; §15 trace sub-table; §16 Q18 | architect (Ravi Deshmukh) | Doc 03 v2.14.1 → **v2.15.0 In Review** | `docs/03-architecture-design-sdd.md`; `artifacts/architect-2026-09-21T0100-candidate-des-definition-a.md` |
| TC rows for UT-0891..UT-0907 (Doc 07) and the per-row RTM ruling with the new Must count (Doc 08) | tester (Ji-woo Park) | Doc 07 v2.9.0 → v2.10.0; Doc 08 v2.12.3 → v2.13.0 | anchored FIND/REPLACE specs under `artifacts/status/`, transcribed by the PM; `artifacts/tester-2026-09-21T0500-doc07-doc08-candidate-rows.md` |
| Doc 02 annotation giving NOMINATION_ENDORSEMENTS_MIN and NOMINATION_MATURATION an FR-side home (FR-036 "published minimum", FR-023 "published maturation period"), and the Q18 questions | product-owner | Doc 02 | **routed — not this session** (same route COOLDOWN-01 took) |
| Code comments in `packages/protocol/src/candidates.js` and Doc 06 §7 item 30(iii) that still say "flagged for ratification" | engineer | next Doc 06 version (v2.12.0) | **routed — not this session** |
| Doc 04 §14 re-narrowing of the `TS-V1-*` band if Doc 07 draws ids from TC-3592+ | architect | next Doc 04 touch | **routed** (the OPEN-30 pattern) |

## Neutral reviewers (recorded BEFORE dispatch)

| Document(s) | Mode | Reviewer | Why neutral | Excluded |
|---|---|---|---|---|
| Doc 03 v2.15.0 | technical | **tester** (Ji-woo Park, new instance) | Standing precedent for Doc 03 (v2.12.0..v2.14.1); has Bash to run the suite and read the code the DESs now claim to describe, so every "asserted by UT-nnnn" claim is checked against the test, not taken on assertion; the role that will then author the TC/RTM rows has the strongest interest in the design saying exactly what the code does | architect (owner); engineer (wrote the code the design now matches — a routed party) |
| Doc 07 v2.10.0 and Doc 08 v2.13.0 | technical | **reviewer-qa** (Rafael Duarte, new instance per document) | Standing reviewer for Docs 07/08; **Accountable for "RTM complete (zero gaps)"** under the RACI, so any row this touch CLOSES is a claim reviewer-qa must be able to defend at merge; read-only role, writes the report through Bash | tester (owner); architect (wrote the DESs the rows now cite) |

- General-purpose agents are never reviewers. Cap 5 cycles, then ESCALATE to the human.
- Note paths are pre-registered by the PM. **Roles never open `artifacts/memory-index.json`.**
- Medium-or-worse FAIL → at least a MINOR bump on rework; the Status → Approved flip does not bump.

## What the reviewers are asked to test hardest

1. **The design describes the code, not a wish.** Every normative rule in §10.13.14 must be traceable to a method, constant or refusal code that exists in `packages/protocol/src/candidates.js` / `packages/sdk/src/candidates.js` today, or be explicitly marked *owed* with a §13 row. A rule the code does not implement, stated as if it did, is a High.
2. **Nothing v2 is pulled forward.** The Elections contract, ZK, MACI stay behind the seam as the v2 backing; the v1 design must not claim any Definition-B property (unlinkability, receipt-freeness, on-chain verifiability).
3. **The Phase-1 map's honesty holds in the document.** FR-039, FR-066 and FR-093 are designed but stay OPEN with the blocker named; FR-065's "unlinkable", FR-067's "logged" and FR-085's TC-3476 are surfaced for the tester's ruling, not decided by the architect.
4. **The two constants are recorded as ratified, with a home, a rationale and an amendment layer**, and the decisions record exists and says what Doc 03 says.
5. **Doc 07/08 (reviewer-qa):** a row closes only when DES + US + TC-with-passing-evidence are all present; TC rows must name the implementing `it`; the Must count and every §6/§7/§9 figure must be re-derived, and the two hook signals must agree (`node hooks/run_gates.cjs --audit`).

## Outcomes (recorded by the PM as each loop closes)

| Document | Cycle 1 | Cycle 2 | Final |
|---|---|---|---|
| Doc 03 v2.15.0 → v2.16.0 | **FAIL 88% (0C/2H/4M/5L; tester)** — ISS-01 High: DES-066 rule 4 claimed the FR-131(b) feedback disclosure renders before the controls (it renders after; no order test). ISS-02 High: DES-108 rule 3(a) grounded a v1 rule on FR-082 anonymity (DEFERRED-v2). Mediums: FR-065 third clause (same nullifier mechanism) unaddressed; FR-081 active/inactive mapping listed as a code fact; §5.2 provisional SCR note unannotated (origin of the SCR-22/23 inversion); §5.6 CANDIDACY sketch stale. Layering, seam, mints, OPEN rulings, constants record: no rework needed. **Fixed this session by the architect → v2.16.0** (MINOR), all five Lows taken | **PASS 97% (0C/0H/0M/2L; tester)** — all eleven cycle-1 findings verified FIXED at their sites against the code (every §5.6 edge checked against TRANSITIONS); two new Lows: ISS-C2-01 UT-0887 does not assert non-dismissability either; ISS-C2-02 "nine stages" — the enum has eight | **Approved v2.16.0**, two Lows carried explicitly in the Status line (the v2.14.1 / Doc 07 v2.9.0 precedent) |
| Doc 07 v2.10.0 | **FAIL 91% (0C/0H/2M/6L; reviewer-qa)** — core verified hard: 739/739 re-run, 97 cited `it`s matched verbatim (0 missing, 0 duplicated, 0 orphan), §2/§10 sums reproduce, 30 OPs applied once, no case promoted on a Definition-B property. ISS-01 (M): 640 + 97 = 737, not 739 — the +2 are UT-0871's two new seam assertions (one guards the ICandidateStore shim), so the drop's UT footprint is eighteen blocks and the orphan count was computed over the wrong set. ISS-02 (M): FR-039's voter-scope and tie-break clauses cited to TC-3320/TC-3612, which do not carry them — carried by no case; can propagate into Doc 08's FR-039 row. Six Lows (§10 "Ten cases" vs twelve ids; §8 misses TC-3407/3411; TC-3470 unannotated for the flipped UT-0750 `it`; TC-3407 automation cell; §0.1 run list; TC-3612 over-claim). Routed to the tester → v2.11.0 | **FAIL 94% (0C/0H/1M/3L; reviewer-qa)** — all eight cycle-1 issues verified FIXED; ISS-01 (M): the v2.11.0 changelog enumerates thirteen changed sites, the diff has fourteen — TC-3605's Verifies cell (the Doc 08 ISS-02 fold) unenumerated; three Lows (TC-3540 attribution gap for the proposals seam; §0.1 run series vs R-22; the "second deferral" ordinal). Routed to the tester → v2.12.0 | **Cycle 3: PASS 97% (0C/0H/0M/2L; reviewer-qa)** — the enumeration counted by diff (7 hunks ↔ 8 ops over 6 sites, no N+1th site); §2/§10 byte-identical; 739/739 and R-22 reproduced; --audit 138/19/119 agreeing. **Approved v2.12.0**, two Lows carried explicitly (orphaned bold marker in the header; "6 sites" vs 7 hunks) plus the v2.9.0 ISS-02/ISS-04 carried by id |
| Doc 08 v2.13.0 | **FAIL 87% (0C/2H/3M/3L; reviewer-qa)** — evidence re-run (739/739; 98/98 `it`s verbatim; 43 OPs once; --audit 138/19/119 agreeing); every headline figure re-derived and correct; all six OPEN rulings concurred with; FR-085 closure and the TC-3476 removal justified. ISS-01 (H): three LIVE subtotal lines never moved (§3.1 54-row block 12/42; §3.1 "114 rows · 16 complete · 98 open … = 122 open of 138" — the gate figure itself; §3.3 4/19). ISS-02 (H): FR-036's withdrawal clause is carried by no case on the row (TC-3605 not on it and not attributed to FR-036 in Doc 07; TC-3606 omitted) — the reviewer would not defend FR-036 at merge as cited. ISS-03 (M) FR-037 closes on a scope argument while FR-081 is refused for an absent assertion, unreconciled; ISS-04 (M) "Thirteen stories" over fifteen; ISS-05 (M) the Source block's Doc 07 pin truncated mid-word (spec OP 5). Three Lows. Merge sign-off WITHHELD. Routed to the tester → v2.14.0, with the TC-3605 requirement cell folded into the Doc 07 v2.11.0 rework | **FAIL 94% (0C/0H/2M/2L; reviewer-qa)** — both Highs verified fixed with the reviewer's own marker counter (114/19/95 · 54/14/40 · 24/0/24 · 23/5/18, zero both-marker rows); **FR-036 now defensible at merge** (every clause has a case on the row); rule 4a ruled, not straddled; the reviewer **would sign all three closures** (FR-036, FR-037, FR-085). ISS-C2-01 (M): the Source block's TC-TRUMOCRACY parenthesis still unclosed while the annotation says "Restored and closed"; ISS-C2-02 (M): the ISS-01 sweep's "15 hits" does not reproduce and L2596 is an unenumerated hit. Two Lows. Routed to the tester → v2.15.0 (house rule: Medium → MINOR). **Cycle 3 (v2.15.0): FAIL 96% (0C/0H/1M/2L; reviewer-qa)** — ISS-C2-01/03/04 verified FIXED (parenthesis 9/9; rule 4a limbs; scan reproduced 5 files 17·8·1·2·2); six diff hunks = six sites; --audit 138/19/119 agreeing; **the reviewer signs all three closures**. ISS-C3-01 (M): the sweep paragraph states "against this file: 14 lines / 21" when the published file returns 22/38 (its own quotations) and class (a) sums to 12 not 11. Lows: no site enumeration and an absolute "nothing touches a row"; Doc 07 pin lag (ruled expected). Routed to the tester → v2.16.0, cycle 4 of 5 | **Cycle 4 (v2.16.0): PASS 98% (0C/0H/0M/2L; reviewer-qa)** — the sweep DEVICE replaced: frozen-reference claim (v2.14.0 text, 14/21, reconstructed by the reviewer through 60 spec ops to a byte-identical file), live observation published as not-the-claim (23/41, fixed point verified), invariant stated; four hunks = four sites; nothing moved (138/19/119 agreeing). **Merge sign-off SIGNED on FR-036, FR-037, FR-085.** **Approved v2.16.0**, two Lows carried explicitly (a lost continuation indent; a spec-tail self-check count of 1 vs 2). Gate 2 NOT MET: 119 of 138 Must rows OPEN |
