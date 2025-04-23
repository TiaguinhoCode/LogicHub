/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    return [
      // root → /domain
      {
        source: "/",
        destination: "/domain",
      },
      // subdomínio (prefixo dinâmico)
      {
        source: "/:path*",
        has: [{ type: "host", value: "([^\\.]+)\\.logichub\\.com\\.br" }],
        destination: "/:host/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
