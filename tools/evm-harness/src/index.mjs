/**
 * Deterministic in-process EVM harness.
 *
 * Why this exists rather than Foundry/Hardhat: contract behaviour in this system is a
 * civic guarantee, so the tests must run everywhere, offline, byte-identically, with no
 * external binary download and no RPC. solc-js compiles; EthereumJS executes. Both are
 * plain npm packages, so `npm test` on a fresh clone reproduces every result.
 *
 * Provides: multi-file Solidity compilation with node_modules import resolution,
 * PoseidonT3 library linking + deployment, contract deploy/call/read with viem
 * ABI encoding, event decoding, revert-reason decoding, block-time control and
 * state snapshots.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import solc from 'solc';
import { createVM } from '@ethereumjs/vm';
import { Common, Mainnet, Hardfork } from '@ethereumjs/common';
import {
  createAddressFromPrivateKey,
  createAddressFromString,
  bytesToHex,
} from '@ethereumjs/util';
import {
  encodeFunctionData,
  decodeFunctionResult,
  decodeEventLog,
  decodeErrorResult,
  keccak256 as viemKeccak,
  toHex,
} from 'viem';

const require = createRequire(import.meta.url);

/** poseidon-solidity publishes a deterministic deployment address for the T3 library. */
export const POSEIDON_T3_ADDRESS = '0x3333333C0A88F9BE4fd23ed0536F9B6c427e3B93';

const bytes = (hex) => Uint8Array.from(Buffer.from(String(hex).replace(/^0x/, ''), 'hex'));

/** Resolve `import "pkg/File.sol"` against the nearest node_modules, walking upward. */
function makeImportResolver(roots) {
  const searchRoots = roots.map((r) => path.resolve(r));
  return (importPath) => {
    for (const root of searchRoots) {
      let dir = root;
      // walk upward looking for node_modules and for a direct relative hit
      for (let i = 0; i < 8; i++) {
        const direct = path.join(dir, importPath);
        if (fs.existsSync(direct) && fs.statSync(direct).isFile()) {
          return { contents: fs.readFileSync(direct, 'utf8') };
        }
        const nm = path.join(dir, 'node_modules', importPath);
        if (fs.existsSync(nm) && fs.statSync(nm).isFile()) {
          return { contents: fs.readFileSync(nm, 'utf8') };
        }
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
      }
    }
    return { error: `import not found: ${importPath}` };
  };
}

/**
 * Compile a set of Solidity sources.
 * @param {Record<string,string>} sources  virtual path -> source text
 * @param {{roots?: string[], optimize?: boolean, runs?: number, evmVersion?: string}} [opts]
 */
export function compile(sources, opts = {}) {
  const {
    roots = [process.cwd()],
    optimize = true,
    runs = 200,
    evmVersion = 'cancun',
  } = opts;

  const input = {
    language: 'Solidity',
    sources: Object.fromEntries(
      Object.entries(sources).map(([name, content]) => [name, { content }]),
    ),
    settings: {
      outputSelection: {
        '*': { '*': ['abi', 'evm.bytecode.object', 'evm.deployedBytecode.object'] },
      },
      optimizer: { enabled: optimize, runs },
      evmVersion,
      // PoseidonT3 exposes `public` functions, so it is an external library and must be linked.
      libraries: {
        'poseidon-solidity/PoseidonT3.sol': { PoseidonT3: POSEIDON_T3_ADDRESS },
      },
    },
  };

  const out = JSON.parse(
    solc.compile(JSON.stringify(input), { import: makeImportResolver(roots) }),
  );

  const errors = (out.errors ?? []).filter((e) => e.severity === 'error');
  if (errors.length > 0) {
    throw new Error(
      'Solidity compilation failed:\n' + errors.map((e) => e.formattedMessage).join('\n'),
    );
  }

  /** flatten: contractName -> { abi, bytecode, deployedBytecode } */
  const contracts = {};
  for (const [file, entries] of Object.entries(out.contracts ?? {})) {
    for (const [name, c] of Object.entries(entries)) {
      contracts[name] = {
        file,
        abi: c.abi,
        bytecode: '0x' + c.evm.bytecode.object,
        deployedBytecode: '0x' + c.evm.deployedBytecode.object,
      };
    }
  }
  return {
    contracts,
    warnings: (out.errors ?? []).filter((e) => e.severity !== 'error').map((e) => e.message),
  };
}

/** Read every .sol file under a directory into a virtual-path source map. */
export function readSolidityDir(dir, baseDir = dir) {
  const sources = {};
  const walk = (d) => {
    for (const entry of fs.readdirSync(d)) {
      const full = path.join(d, entry);
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full);
      else if (entry.endsWith('.sol')) {
        sources[path.relative(baseDir, full).split(path.sep).join('/')] = fs.readFileSync(
          full,
          'utf8',
        );
      }
    }
  };
  walk(dir);
  return sources;
}

class Contract {
  constructor(chain, address, abi, name) {
    this.chain = chain;
    this.address = address;
    this.abi = abi;
    this.name = name;
  }

  /** State-changing call. Returns { logs, events, gasUsed, returnValue }. Throws on revert. */
  async send(functionName, args = [], overrides = {}) {
    return this.chain._call(this, functionName, args, { ...overrides, expectRevert: false });
  }

  /** Read call, ABI-decoded. */
  async read(functionName, args = []) {
    const res = await this.chain._call(this, functionName, args, { staticCall: true });
    return res.decoded;
  }

  /** Expect a revert; returns the decoded custom error or revert string. */
  async expectRevert(functionName, args = [], overrides = {}) {
    return this.chain._call(this, functionName, args, { ...overrides, expectRevert: true });
  }
}

export class Chain {
  constructor(vm, common) {
    this.vm = vm;
    this.common = common;
    this.timestamp = 1_760_000_000n; // fixed genesis time — determinism matters for governance tests
    this.blockNumber = 1n;
    this._accounts = new Map();
  }

  static async create() {
    const common = new Common({ chain: Mainnet, hardfork: Hardfork.Cancun });
    const vm = await createVM({ common });
    const chain = new Chain(vm, common);
    await chain._deployPoseidon();
    return chain;
  }

  /** Deterministic funded test account. `account(0)` is the default sender. */
  account(index) {
    if (!this._accounts.has(index)) {
      const pk = bytes('0x' + (index + 1).toString(16).padStart(2, '0').repeat(32));
      this._accounts.set(index, createAddressFromPrivateKey(pk));
    }
    return this._accounts.get(index);
  }

  addressOf(index) {
    return this.account(index).toString();
  }

  async _deployPoseidon() {
    const psol = require('poseidon-solidity');
    const res = await this.vm.evm.runCall({
      to: undefined,
      data: bytes(psol.PoseidonT3.bytecode),
      caller: this.account(0),
      origin: this.account(0),
      gasLimit: 60_000_000n,
    });
    if (res.execResult.exceptionError) {
      throw new Error('PoseidonT3 deployment failed: ' + res.execResult.exceptionError);
    }
    await this.vm.stateManager.putCode(
      createAddressFromString(POSEIDON_T3_ADDRESS.toLowerCase()),
      res.execResult.returnValue,
    );
  }

  /** Move the chain forward. Governance in this system is time-dependent, so tests need this. */
  async warp(seconds) {
    this.timestamp += BigInt(seconds);
    this.blockNumber += BigInt(Math.max(1, Math.floor(Number(seconds) / 2)));
    return this.timestamp;
  }

  async mine(blocks = 1) {
    this.blockNumber += BigInt(blocks);
    this.timestamp += BigInt(blocks) * 2n;
  }

  _blockContext() {
    return {
      block: {
        header: {
          number: this.blockNumber,
          timestamp: this.timestamp,
          gasLimit: 30_000_000n,
          baseFeePerGas: 1n,
          difficulty: 0n,
          prevRandao: new Uint8Array(32),
          coinbase: this.account(0),
        },
      },
    };
  }

  async deploy(artifact, args = [], { from = 0, value = 0n } = {}) {
    const data =
      args.length > 0
        ? artifact.bytecode +
          encodeFunctionData({
            abi: [{ type: 'function', name: '_c', inputs: constructorInputs(artifact.abi), outputs: [] }],
            functionName: '_c',
            args,
          }).slice(10)
        : artifact.bytecode;

    const caller = this.account(from);
    const res = await this.vm.evm.runCall({
      to: undefined,
      data: bytes(data),
      caller,
      origin: caller,
      value,
      gasLimit: 30_000_000n,
      ...this._blockContext(),
    });
    if (res.execResult.exceptionError) {
      throw new Error(
        `deploy(${artifact.name ?? ''}) reverted: ${res.execResult.exceptionError} ${decodeRevert(res.execResult.returnValue, artifact.abi)}`,
      );
    }
    return new Contract(this, res.createdAddress, artifact.abi, artifact.name);
  }

  /** Put runtime code at an address directly — used to stand up mocks at fixed addresses. */
  async etch(address, runtimeBytecode) {
    await this.vm.stateManager.putCode(
      createAddressFromString(address.toLowerCase()),
      bytes(runtimeBytecode),
    );
  }

  async snapshot() {
    return await this.vm.stateManager.dumpStorage
      ? { root: await this.vm.stateManager.getStateRoot(), t: this.timestamp, b: this.blockNumber }
      : null;
  }

  async revertTo(snap) {
    if (!snap) return;
    await this.vm.stateManager.setStateRoot(snap.root);
    this.timestamp = snap.t;
    this.blockNumber = snap.b;
  }

  async _call(contract, functionName, args, opts = {}) {
    const { from = 0, value = 0n, expectRevert = false, gasLimit = 30_000_000n } = opts;
    const caller = this.account(from);
    const data = encodeFunctionData({ abi: contract.abi, functionName, args });

    const res = await this.vm.evm.runCall({
      to: contract.address,
      data: bytes(data),
      caller,
      origin: caller,
      value,
      gasLimit,
      ...this._blockContext(),
    });

    const failed = Boolean(res.execResult.exceptionError);
    if (failed && !expectRevert) {
      throw new Error(
        `${contract.name ?? 'contract'}.${functionName} reverted: ` +
          `${res.execResult.exceptionError} ${decodeRevert(res.execResult.returnValue, contract.abi)}`,
      );
    }
    if (!failed && expectRevert) {
      throw new Error(`${contract.name ?? 'contract'}.${functionName} was expected to revert but succeeded`);
    }
    if (failed) {
      return { reverted: true, reason: decodeRevert(res.execResult.returnValue, contract.abi) };
    }

    const logs = (res.execResult.logs ?? []).map(([address, topics, data]) => ({
      address: bytesToHex(address),
      topics: topics.map((t) => bytesToHex(t)),
      data: bytesToHex(data),
    }));

    let decoded;
    const returnHex = bytesToHex(res.execResult.returnValue);
    try {
      decoded = decodeFunctionResult({ abi: contract.abi, functionName, data: returnHex });
    } catch {
      decoded = returnHex;
    }

    return {
      reverted: false,
      decoded,
      returnValue: returnHex,
      gasUsed: res.execResult.executionGasUsed,
      logs,
      events: decodeEvents(logs, contract.abi),
    };
  }
}

function constructorInputs(abi) {
  const ctor = abi.find((e) => e.type === 'constructor');
  return ctor ? ctor.inputs : [];
}

function decodeEvents(logs, abi) {
  const out = [];
  for (const log of logs) {
    try {
      const ev = decodeEventLog({ abi, topics: log.topics, data: log.data });
      out.push({ name: ev.eventName, args: ev.args, address: log.address });
    } catch {
      /* not one of ours — ignore */
    }
  }
  return out;
}

function decodeRevert(returnValue, abi) {
  if (!returnValue || returnValue.length === 0) return '(no data)';
  const hex = bytesToHex(returnValue);
  try {
    const err = decodeErrorResult({ abi, data: hex });
    const args = err.args ? `(${err.args.map(String).join(', ')})` : '';
    return `${err.errorName}${args}`;
  } catch {
    /* fall through to Error(string) */
  }
  try {
    const err = decodeErrorResult({
      abi: [{ type: 'error', name: 'Error', inputs: [{ type: 'string', name: 'message' }] }],
      data: hex,
    });
    return `Error("${err.args[0]}")`;
  } catch {
    return hex.slice(0, 74);
  }
}

/** Convenience for tests that need a keccak of a label (region ids, scopes, …). */
export const labelHash = (s) => viemKeccak(toHex(s));

export { bytes as hexToBytes };
