/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }

    return config;
  },
  turbopack() {},
};

module.exports = nextConfig;
