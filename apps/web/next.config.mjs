/**
 * Next.js configuration — ADR-012 §4, "unblockable by design".
 *
 * `output: 'export'` is not a performance choice. A static bundle can be published to
 * IPFS under an ENS name, mirrored to Arweave, handed around as a signed offline archive,
 * and installed as a PWA that keeps working after the domain is blocked. A server-rendered
 * app has a server, and a server is a thing a state can switch off or compel.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Static export cannot use the image optimiser (it needs a server), and we would not
  // want one anyway: an image proxy would see which party pages a citizen loads.
  images: { unoptimized: true },
  // Trailing slashes make the exported tree work when served from IPFS gateways and from
  // a plain file:// copy of the bundle.
  trailingSlash: true,
  // Reproducible builds (DES-050) require a build id that is a function of the source,
  // not of the clock or the machine. It is supplied by the release job.
  generateBuildId: async () => process.env.TRUMOCRACY_BUILD_ID ?? 'dev',
  // No telemetry, ever — including the framework's own (ADR-014 §3, NFR-024).
  // `next telemetry disable` is also run in CI; this is the belt to that's braces.
  env: { NEXT_TELEMETRY_DISABLED: '1' },
};

export default nextConfig;
