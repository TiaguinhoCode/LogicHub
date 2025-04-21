// Next
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // host vem no formato "sub.localhost:3000" ou "localhost:3000"
  const hostHeader = request.headers.get("host") || "";
  // remove a porta: "sub.localhost" ou "localhost"
  const hostname = hostHeader.split(":")[0];
  // separa pelos dots: ["sub","localhost"] ou ["localhost"]
  const parts = hostname.split(".");

  // só reescreve se for exatamente subdomínio.localhost
  if (parts.length === 2 && parts[1] === "localhost" && parts[0] !== "www") {
    const subdomain = parts[0];
    const url = request.nextUrl.clone();
    // põe o subdomain como primeiro segmento da rota
    url.pathname = `/${subdomain}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  // para todos os outros casos (localhost sem sub, www.localhost, etc)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // ignora APIs, assets Next.js e arquivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)",
  ],
};
