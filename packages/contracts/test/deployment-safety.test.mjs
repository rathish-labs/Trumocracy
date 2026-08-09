/**
 * UT-0600..UT-0610 — the promotion gate.
 *
 * A development mock verifier accepts every proof. A deployment that reaches production with
 * one registered has no privacy and no Sybil resistance, and looks — from the outside, to
 * users, to us — exactly like a working system. This suite exists so that failure cannot
 * happen quietly.
 */
import { describe, it, expect } from 'vitest';
import { keccak256, toHex } from 'viem';
import {
  assertSafeToPromote,
  UnsafeDeploymentError,
  DEPLOY_ORDER,
  WIRING_STEPS,
  CIRCUITS,
} from '../script/deploy.mjs';

const realEntry = (circuit) => ({
  verifier: '0x1111111111111111111111111111111111111111',
  zkeyHash: keccak256(toHex(`zkey:${circuit}:v1`)),
  ceremonyURI: `ipfs://ceremony/${circuit}`,
});

const reader = (overrides = {}) => async (id) => {
  for (const c of CIRCUITS) {
    if (keccak256(toHex(c)) === id) return overrides[c] ?? realEntry(c);
  }
  throw new Error('unknown circuit');
};

describe('UT-0600 promotion gate', () => {
  it('passes a production deployment wired to real verifiers', async () => {
    const r = await assertSafeToPromote('production', reader(), async () => false);
    expect(r.safe).toBe(true);
    expect(r.circuits).toBe(3);
  });

  it('UT-0601 refuses production when ANY circuit is wired to a mock', async () => {
    for (const target of CIRCUITS) {
      const isMock = async (addr) => addr === '0xmock';
      const overrides = { [target]: { ...realEntry(target), verifier: '0xmock' } };
      await expect(assertSafeToPromote('production', reader(overrides), isMock)).rejects.toThrow(
        UnsafeDeploymentError,
      );
    }
  });

  it('UT-0602 allows a mock on devnet and below, so the governance layer can be built first', async () => {
    const isMock = async () => true;
    for (const env of ['local', 'ci', 'devnet']) {
      await expect(assertSafeToPromote(env, reader(), isMock)).resolves.toMatchObject({ safe: true });
    }
    for (const env of ['testnet', 'staging', 'production']) {
      await expect(assertSafeToPromote(env, reader(), isMock)).rejects.toThrow(UnsafeDeploymentError);
    }
  });

  it('UT-0603 refuses a circuit with no published ceremony', async () => {
    const overrides = { residency_member: { ...realEntry('residency_member'), ceremonyURI: '' } };
    await expect(assertSafeToPromote('staging', reader(overrides), async () => false)).rejects.toThrow(
      /NOT safe to promote/,
    );
  });

  it('UT-0604 refuses a circuit with no zkeyHash — clients could not detect a swapped key', async () => {
    const overrides = { tenure_member: { ...realEntry('tenure_member'), zkeyHash: '0x' + '00'.repeat(32) } };
    try {
      await assertSafeToPromote('production', reader(overrides), async () => false);
      throw new Error('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(UnsafeDeploymentError);
      expect(e.findings.some((f) => f.issue.includes('zkeyHash'))).toBe(true);
    }
  });

  it('UT-0605 refuses when a circuit has no verifier at all', async () => {
    const missing = async () => {
      throw new Error('unregistered');
    };
    await expect(assertSafeToPromote('production', missing, async () => false)).rejects.toThrow(
      UnsafeDeploymentError,
    );
  });

  it('UT-0606 rejects an unknown environment rather than defaulting to permissive', async () => {
    await expect(assertSafeToPromote('prod', reader(), async () => false)).rejects.toThrow(/unknown environment/);
  });
});

describe('UT-0610 deployment plan', () => {
  it('orders dependencies before dependents', () => {
    const names = DEPLOY_ORDER.map((s) => s.name);
    for (const step of DEPLOY_ORDER) {
      for (const arg of step.args ?? []) {
        if (names.includes(arg)) {
          expect(names.indexOf(arg), `${arg} must be deployed before ${step.name}`).toBeLessThan(
            names.indexOf(step.name),
          );
        }
      }
    }
  });

  it('UT-0611 wires the nullifier-spender authority, without which every action reverts', () => {
    expect(WIRING_STEPS[0]).toMatch(/setSpenderAuthoriser/);
  });

  it('UT-0612 bootstraps the population oracle through its dispute window', () => {
    const step = WIRING_STEPS.find((s) => s.includes('submitPopulation'));
    expect(step).toMatch(/≥5/);
    expect(step).toMatch(/7 days/);
  });
});
