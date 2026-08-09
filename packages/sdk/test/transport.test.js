/**
 * UT-2540…UT-2552 — the transport fallback chain (DES-051, ADR-014).
 *
 * "All three are implemented and tested in CI, not documented as theoretical — an escape
 * hatch that has never been exercised does not exist." These tests are that CI. They drive
 * the selection logic through every failure combination, because the combination that
 * matters (everything hosted is gone, force-inclusion is all that is left) is exactly the
 * one that will never occur in a normal test run.
 *
 * Traces: NFR-007, NFR-014, NFR-025, RISK-09, DES-041, DES-051.
 */
import { describe, it, expect, vi } from 'vitest';
import { decodeFunctionData } from 'viem';
import {
  BundlerTransport,
  L1ForceInclusionTransport,
  SelfPayTransport,
  Transport,
  TransportChain,
  defaultTransportChain,
} from '../src/transport.js';
import { optimismPortalAbi } from '../src/abi.js';
import { AllTransportsFailed, InvalidArgument } from '../src/errors.js';

const REQUEST = {
  to: `0x${'11'.repeat(20)}`,
  data: `0x${'de'.repeat(64)}`,
  value: 0n,
  gasLimit: 500_000n,
  action: 'endorse',
};

/** A transport whose availability and outcome are dictated by the test. */
function stub(name, { available = true, fails = false, probeThrows = false } = {}) {
  const t = new Transport(name);
  t.available = async () => {
    if (probeThrows) throw new Error(`${name} probe exploded`);
    return available;
  };
  t.send = vi.fn(async () => {
    if (fails) throw new Error(`${name} refused`);
    return { transport: name, hash: `0x${name.length.toString(16).padStart(64, '0')}`, layer: 'l2' };
  });
  return t;
}

describe('TransportChain selection', () => {
  it('UT-2540 uses the first available transport and stops there', async () => {
    const a = stub('bundler-a');
    const b = stub('bundler-b');
    const chain = new TransportChain([a, b]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('bundler-a');
    expect(b.send).not.toHaveBeenCalled();
  });

  it('UT-2541 falls through to the alternate bundler when the primary is unavailable', async () => {
    const chain = new TransportChain([stub('bundler-a', { available: false }), stub('bundler-b')]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('bundler-b');
    expect(result.attempts).toEqual([
      { transport: 'bundler-a', outcome: 'unavailable' },
      { transport: 'bundler-b', outcome: 'sent' },
    ]);
  });

  it('UT-2542 falls through when a transport accepts and then fails', async () => {
    const chain = new TransportChain([stub('bundler-a', { fails: true }), stub('bundler-b')]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('bundler-b');
    expect(result.attempts[0].outcome).toBe('send-failed');
  });

  it('UT-2543 a health probe that throws is unavailability, not a fatal error', async () => {
    const chain = new TransportChain([stub('bundler-a', { probeThrows: true }), stub('self-pay')]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('self-pay');
    expect(result.attempts[0].outcome).toBe('probe-failed');
  });

  it('UT-2544 degrades to self-pay when sponsorship is exhausted — a degradation, never a denial', async () => {
    const chain = new TransportChain([
      stub('bundler-a', { available: false }),
      stub('bundler-b', { available: false }),
      stub('self-pay'),
      stub('l1-force-inclusion'),
    ]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('self-pay');
  });

  it('UT-2545 reaches L1 force-inclusion when every L2 path is gone (the censorship case)', async () => {
    const force = stub('l1-force-inclusion');
    const chain = new TransportChain([
      stub('bundler-a', { fails: true }),
      stub('bundler-b', { available: false }),
      stub('self-pay', { fails: true }),
      force,
    ]);
    const result = await chain.send(REQUEST);
    expect(result.transport).toBe('l1-force-inclusion');
    expect(result.attempts.map((a) => a.outcome)).toEqual(['send-failed', 'unavailable', 'send-failed', 'sent']);
  });

  it('UT-2546 throws with the full attempt log when nothing can carry the action', async () => {
    const chain = new TransportChain([stub('bundler-a', { fails: true }), stub('self-pay', { available: false })]);
    await expect(chain.send(REQUEST)).rejects.toBeInstanceOf(AllTransportsFailed);
    await chain.send(REQUEST).catch((e) => {
      expect(e.details.attempts.map((a) => a.transport)).toEqual(['bundler-a', 'self-pay']);
    });
  });

  it('UT-2547 reports each attempt as it happens, so the UI can narrate the fallback', async () => {
    const seen = [];
    const chain = new TransportChain([stub('bundler-a', { fails: true }), stub('self-pay')], {
      onAttempt: (a) => seen.push(`${a.transport}:${a.outcome}`),
    });
    await chain.send(REQUEST);
    expect(seen).toEqual(['bundler-a:send-failed', 'self-pay:sent']);
  });

  it('UT-2548 an empty chain is a configuration error, not a silent no-op', () => {
    expect(() => new TransportChain([])).toThrow(InvalidArgument);
  });
});

describe('defaultTransportChain — the ADR-014 order', () => {
  const bundler = (name) => new BundlerTransport({ name, bundler: { sendUserOperation: async () => '0x01' } });

  it('UT-2549 orders bundler → alternate bundler → self-pay → L1 force-inclusion', () => {
    const chain = defaultTransportChain({
      bundlers: [bundler('bundler-primary'), bundler('bundler-alternate')],
      selfPay: new SelfPayTransport({ walletClient: { sendTransaction: async () => '0x02' } }),
      forceInclusion: new L1ForceInclusionTransport({ portalAddress: `0x${'aa'.repeat(20)}`, submit: async () => '0x03' }),
    });
    expect(chain.order()).toEqual(['bundler-primary', 'bundler-alternate', 'self-pay', 'l1-force-inclusion']);
  });

  it('UT-2550 a citizen with no funded account still gets bundlers then force-inclusion', () => {
    const chain = defaultTransportChain({
      bundlers: [bundler('bundler-primary')],
      forceInclusion: new L1ForceInclusionTransport({ portalAddress: `0x${'aa'.repeat(20)}`, submit: async () => '0x03' }),
    });
    expect(chain.order()).toEqual(['bundler-primary', 'l1-force-inclusion']);
  });

  it('UT-2551 a bundler with no sponsorship budget reports itself unavailable', async () => {
    const t = new BundlerTransport({
      bundler: { sendUserOperation: async () => '0x01' },
      hasSponsorshipBudget: async () => false,
    });
    expect(await t.available()).toBe(false);
  });

  it('UT-2552 self-pay is unavailable to an account with a zero balance', async () => {
    const t = new SelfPayTransport({ walletClient: { sendTransaction: async () => '0x02' }, balanceOf: async () => 0n });
    expect(await t.available()).toBe(false);
    const funded = new SelfPayTransport({ walletClient: { sendTransaction: async () => '0x02' }, balanceOf: async () => 1n });
    expect(await funded.available()).toBe(true);
  });
});

describe('L1ForceInclusionTransport — depositTransaction calldata', () => {
  const PORTAL = `0x${'aa'.repeat(20)}`;

  it('UT-2553 builds a depositTransaction that carries the L2 call unchanged', () => {
    const t = new L1ForceInclusionTransport({ portalAddress: PORTAL, submit: async () => '0x0' });
    const deposit = t.buildDeposit(REQUEST);
    expect(deposit.to).toBe(PORTAL);

    const decoded = decodeFunctionData({ abi: optimismPortalAbi, data: deposit.data });
    expect(decoded.functionName).toBe('depositTransaction');
    const [to, value, gasLimit, isCreation, data] = decoded.args;
    expect(to).toBe(REQUEST.to);
    expect(value).toBe(0n);
    expect(gasLimit).toBe(REQUEST.gasLimit);
    // A citizen action is always a call to a deployed protocol contract.
    expect(isCreation).toBe(false);
    expect(data).toBe(REQUEST.data);
  });

  it('UT-2554 is unavailable without a way to submit on L1, and available with one', async () => {
    expect(await new L1ForceInclusionTransport({ portalAddress: PORTAL }).available()).toBe(false);
    expect(await new L1ForceInclusionTransport({ portalAddress: PORTAL, submit: async () => '0x0' }).available()).toBe(
      true,
    );
  });

  it('UT-2555 reports the honest inclusion delay rather than pretending it is instant', async () => {
    const t = new L1ForceInclusionTransport({ portalAddress: PORTAL, submit: async () => '0xfeed' });
    const result = await t.send(REQUEST);
    expect(result.layer).toBe('l1-force-inclusion');
    // ADR-001 puts force inclusion at 12–24h; the UI must be able to say so, which is why
    // voting windows are ≥72h (FR-032).
    expect(result.estimatedInclusionSeconds).toBeGreaterThanOrEqual(12 * 3600);
  });

  it('UT-2556 needs a portal address — there is no default to guess', () => {
    expect(() => new L1ForceInclusionTransport({})).toThrow(InvalidArgument);
  });
});
