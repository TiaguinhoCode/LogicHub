// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Pega primeiro o host “passado pelo proxy” (x-forwarded-host) ou, em último caso, o host normal
  const hostHeader =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    "";
  const hostname = hostHeader.split(":")[0]; // remove porta, se existir
  const parts = hostname.split(".");

  // 2. Se não tiver subdomínio (ou for “www”), deixa passar sem rewrite
  if (parts[0] === "www" || parts.length < 2) {
    return NextResponse.next();
  }
  // 3. Extrai subdomínio e resto do domínio
  const subdomain = parts[0];
  const fullDomain = parts.slice(1).join("."); // ex: "localhost" ou "logichub.com.br"
  console.log("hostHeader", hostHeader);
  console.log("hostname", hostname);
  console.log("parts", parts);
  console.log("subdomain", subdomain);
  console.log("fullDomain", fullDomain);

  // 4. Define quais domínios são válidos para reescrever
  const allowedDomains = ["localhost", "logichub.com.br"];
  if (!allowedDomains.includes(fullDomain)) {
    return NextResponse.next();
  }

  // 5. Reescreve a rota injetando o subdomínio como prefixo
  const url = request.nextUrl.clone();
  url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // aplica em todas as rotas, exceto APIs, assets do Next, imagens e arquivos estáticos
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)"],
};
