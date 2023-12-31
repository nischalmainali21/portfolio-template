/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "mega.nz" }] },
  experimental: { serverActions: true },
};

module.exports = nextConfig;
