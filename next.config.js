/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          // qualquer rota
          source: "/:path*",
          // só aplica se o header “x-forwarded-host” bater com o subdomínio
          has: [
            {
              type: "header",
              key: "x-forwarded-host",
              // regex para capturar “bio” em “bio.logichub.com.br”
              value: "^(?<sub>[^.]+)\\.logichub\\.com\\.br$",
            },
          ],
          // redireciona invisivelmente para /bio/...
          destination: "/:sub/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
