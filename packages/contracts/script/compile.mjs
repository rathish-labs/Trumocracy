import { compile, readSolidityDir } from '@trumocracy/evm-harness';
const sources = readSolidityDir('/home/user/Trumocracy/packages/contracts/src', '/home/user/Trumocracy/packages/contracts/src');
const { contracts, warnings } = compile(sources, { roots: ['/home/user/Trumocracy/packages/contracts', '/home/user/Trumocracy'] });
console.log('compiled:', Object.keys(contracts).join(', '));
for (const [n,c] of Object.entries(contracts)) {
  const size = (c.deployedBytecode.length-2)/2;
  if (size > 0) console.log(`  ${n}: ${size} bytes${size>24576?'  ⚠ OVER EIP-170 LIMIT':''}`);
}
if (warnings.length) console.log('\nwarnings:\n' + warnings.slice(0,15).join('\n---\n'));
