/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Reconhece arquivos .ts e .tsx como páginas e middleware
  pageExtensions: ["ts", "tsx", "js", "jsx"], // :contentReference[oaicite:3]{index=3}

  // 2. Ignora erros de ESLint durante o next build (opcional)
  eslint: {
    ignoreDuringBuilds: true, // :contentReference[oaicite:4]{index=4}
  },

  // 3. Rewrites baseados em subdomínio via header x-forwarded-host
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "header",
              key: "x-forwarded-host",
              // captura o subdomínio (e.g. "bio") em "bio.logichub.com.br"
              value: "^(?<sub>[^.]+)\\.logichub\\.com\\.br$",
            },
          ],
          // injeta o subdomínio capturado como prefixo de rota
          destination: "/:sub/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig; // :contentReference[oaicite:5]{index=5}
