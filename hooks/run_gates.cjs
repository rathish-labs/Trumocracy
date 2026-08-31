#!/usr/bin/env node
/**
 * VEKTOR gate launcher — resolves a Python 3 interpreter, runs check_gates.py.
 *
 * WHY THIS EXISTS
 * ---------------
 * .claude/settings.json invoked `python3` directly. This Windows host has no
 * `python3` on PATH (Windows ships `python.exe`, and this install was made
 * without "Add to PATH"), so the hook exited 127 — "command not found" — on
 * every subagent stop for the life of the project.
 *
 * Claude Code treats a non-zero hook exit OTHER than 2 as a NON-blocking error.
 * So exit 127 meant the gate silently enforced nothing while looking wired up.
 * That is a fail-OPEN failure, the worst kind: an absent gate and a passing gate
 * are indistinguishable from outside.
 *
 * WHY NODE, AND NOT A SHELL SCRIPT
 * --------------------------------
 * The obvious fix is a POSIX `sh` wrapper. It was written, and rejected: on this
 * host `sh` is NOT on the Windows PATH at all, and `bash` there resolves to
 * C:\Windows\system32\bash.exe — WSL, which sees an entirely different
 * filesystem (/mnt/d/...) and would not find the repo. A shell wrapper would
 * therefore reproduce the original outage on the very machine it was meant to
 * fix, and which shell Claude Code uses for hooks is not something to guess at.
 *
 * `node` is on the Windows PATH *and* the Git Bash PATH, and it is the one
 * runtime this monorepo cannot function without — every package is built and
 * tested with it. Depending on node removes the interpreter-resolution problem
 * rather than relocating it.
 *
 * DESIGN RULES
 * ------------
 *   1. RESOLVE, DON'T ASSUME — try the interpreters that exist in the wild and
 *      use the first that actually executes. settings.json is tracked and shared,
 *      so it must never carry one developer's absolute path.
 *   2. FAIL CLOSED — if no interpreter is found, or the gate script is missing,
 *      or the child crashes, emit the block contract on stdout. A gate that
 *      cannot run must say so loudly and stop the work, never wave it through.
 *   3. BE OBSERVABLE — append one line per run to .claude/gate-runs.log
 *      (gitignored). A mechanical check nobody can watch is not a check; this
 *      log is what makes "is the gate actually running?" answerable in seconds
 *      instead of by porting the parser by hand.
 *
 * Override for an unusual install:  set VEKTOR_PYTHON to the interpreter path.
 * Arguments pass straight through, so this also serves the non-hook modes:
 *   node hooks/run_gates.cjs --audit
 *   node hooks/run_gates.cjs --gate2
 */

'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.env.CLAUDE_PROJECT_DIR || path.resolve(__dirname, '..');
const GATE = path.join(ROOT, 'hooks', 'check_gates.py');
const LOG = path.join(ROOT, '.claude', 'gate-runs.log');
const args = process.argv.slice(2);

/** Append one observability line. Never allowed to break the gate itself. */
function log(outcome, detail) {
  try {
    fs.mkdirSync(path.dirname(LOG), { recursive: true });
    const line = JSON.stringify({
      at: new Date().toISOString(),
      mode: args.length ? args.join(' ') : 'subagent-stop',
      outcome,
      detail,
    });
    // Keep the tail bounded so this never becomes its own problem.
    let prior = [];
    try {
      prior = fs.readFileSync(LOG, 'utf8').split('\n').filter(Boolean).slice(-499);
    } catch { /* first run */ }
    fs.writeFileSync(LOG, prior.concat(line).join('\n') + '\n', 'utf8');
  } catch { /* logging must never block or crash the gate */ }
}

/** Emit the hook block contract and exit 0 — the fail-CLOSED path. */
function blockAndExit(reason) {
  process.stdout.write(JSON.stringify({ decision: 'block', reason }) + '\n');
  log('BLOCK_CANNOT_RUN', reason);
  process.exit(0);
}

/**
 * Ordered interpreter candidates: an explicit override, then PATH names, then
 * the standard Windows per-user install locations — where an interpreter
 * installed without "Add to PATH" actually lands.
 */
function candidates() {
  const local = process.env.LOCALAPPDATA || '';
  const list = [process.env.VEKTOR_PYTHON, 'python3', 'python'];
  if (local) {
    for (const v of ['313', '312', '311', '310']) {
      list.push(path.join(local, 'Programs', 'Python', `Python${v}`, 'python.exe'));
    }
  }
  list.push('C:\\Python313\\python.exe', 'C:\\Python312\\python.exe');
  list.push('/usr/bin/python3', '/usr/local/bin/python3');
  return list.filter(Boolean);
}

/** A name on PATH is not proof it runs — the Windows Store alias resolves, then refuses. */
function resolvePython() {
  for (const cand of candidates()) {
    const probe = spawnSync(cand, ['-c', 'import sys; sys.exit(0 if sys.version_info[0]==3 else 1)'], {
      stdio: 'ignore',
      windowsHide: true,
    });
    if (!probe.error && probe.status === 0) return [cand, []];
  }
  // The py launcher is a launcher, not an interpreter: ask it for Python 3.
  const py = spawnSync('py', ['-3', '-c', ''], { stdio: 'ignore', windowsHide: true });
  if (!py.error && py.status === 0) return ['py', ['-3']];
  return [null, null];
}

const [python, prefix] = resolvePython();

if (!python) {
  blockAndExit(
    'VEKTOR gate cannot run: no Python 3 interpreter was found (tried python3, python, ' +
    'py -3, and the standard Windows per-user install paths). The SubagentStop gate is ' +
    'therefore enforcing NOTHING, so this stop is blocked rather than waved through. ' +
    'Fix: install Python 3, or set VEKTOR_PYTHON to its full path, then verify with: ' +
    'node hooks/run_gates.cjs --audit'
  );
}

if (!fs.existsSync(GATE)) {
  blockAndExit(
    `VEKTOR gate cannot run: ${GATE} is missing, so the gate is enforcing NOTHING. ` +
    'This stop is blocked rather than waved through. Restore the file from version control.'
  );
}

// stdout is PIPED, not inherited, so the launcher can record what the gate
// actually decided before passing it through untouched. Logging "the hook ran"
// is not the same as logging "the hook blocked, and why" — and it was the second
// question nobody could answer for the life of this project.
const run = spawnSync(python, [...prefix, GATE, ...args], {
  stdio: ['inherit', 'pipe', 'inherit'],
  encoding: 'utf8',
  windowsHide: true,
});
const out = run.stdout || '';
if (out) process.stdout.write(out);

if (run.error) {
  blockAndExit(
    `VEKTOR gate cannot run: failed to execute ${python} (${run.error.message}). The gate ` +
    'is enforcing NOTHING, so this stop is blocked rather than waved through.'
  );
}

// A crash (non-zero exit) must not be mistaken for a clean pass. check_gates.py
// signals a block via JSON on stdout and exits 0; --audit exits 1 when documents
// block, which is a report, not a hook decision.
if (run.status !== 0 && args.length === 0) {
  blockAndExit(
    `VEKTOR gate cannot run: check_gates.py exited ${run.status} instead of emitting a ` +
    'decision. The gate is enforcing NOTHING, so this stop is blocked rather than waved ' +
    'through. Reproduce with: node hooks/run_gates.cjs --audit'
  );
}

// Record the decision itself, not merely that a process started.
let outcome = 'ALLOW';
let detail = `${python} exit=${run.status}`;
try {
  const decision = JSON.parse(out.trim());
  if (decision && decision.decision === 'block') {
    outcome = 'BLOCK';
    detail = String(decision.reason || '').slice(0, 400);
  }
} catch {
  if (args.length) {
    outcome = 'REPORT';           // --audit / --gate2 print prose, not JSON
    detail = `${python} exit=${run.status}`;
  }
}
log(outcome, detail);
process.exit(args.length ? run.status : 0);
