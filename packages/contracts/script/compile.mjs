import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile, readSolidityDir } from '@trumocracy/evm-harness';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, '..', 'src');
const PKG = path.resolve(HERE, '..');
const REPO = path.resolve(HERE, '..', '..', '..');

const sources = readSolidityDir(SRC, SRC);
const { contracts, warnings } = compile(sources, { roots: [PKG, REPO] });
console.log('compiled:', Object.keys(contracts).join(', '));
for (const [n,c] of Object.entries(contracts)) {
  const size = (c.deployedBytecode.length-2)/2;
  if (size > 0) console.log(`  ${n}: ${size} bytes${size>24576?'  ⚠ OVER EIP-170 LIMIT':''}`);
}
if (warnings.length) console.log('\nwarnings:\n' + warnings.slice(0,15).join('\n---\n'));
