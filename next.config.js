/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack(config) {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
