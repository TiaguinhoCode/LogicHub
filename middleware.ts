// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Captura o domínio original, priorizando x-forwarded-host
  const hostHeader =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";
  const hostname = hostHeader.split(":")[0];    // remove eventual :PORT
  const parts = hostname.split(".");

  // 2. Se for www ou não houver subdomínio, deixa passar sem rewrite
  if (parts[0] === "www" || parts.length < 2) {
    return NextResponse.next();
  }

  // 3. Extrai subdomínio e domínio raiz
  const subdomain = parts[0];
  const fullDomain = parts.slice(1).join(".");  // e.g. "localhost" ou "logichub.com.br"

  // 4. Só processa se for um domínio permitido
  const allowed = ["localhost", "logichub.com.br"];
  if (!allowed.includes(fullDomain)) {
    return NextResponse.next();
  }

  // 5. Reescreve a rota injetando o subdomínio
  const url = request.nextUrl.clone();
  url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // ignora API, assets Next.js, imagens, favicon e arquivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)",
  ],
};
