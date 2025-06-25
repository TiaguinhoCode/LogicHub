/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    return [
      {
        source: "/curriculo",
        destination: "/curriculum",
      },
    ];
  },
};

module.exports = nextConfig;
