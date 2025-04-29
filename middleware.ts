// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Extrai host sem porta
  const hostHeader = request.headers.get("host") || "";
  const host = hostHeader.split(":")[0];
  console.log("Host recebido:", host);

  // Se for domínio principal (localhost ou logichub.com.br) -> sem reescrita
  const ROOTS = ["localhost", "logichub.com.br"];
  if (ROOTS.some((root) => host === root || host === `www.${root}`)) {
    return NextResponse.next();
  }

  // Divide em subdomínio + domínio raiz
  const [subdomain, ...rest] = host.split(".");
  const rootDomain = rest.join(".");
  console.log("Subdomínio extraído:", subdomain);
  console.log("Domínio raiz extraído:", rootDomain);

  // Só reescreve se bater exatamente com o seu domínio de produção
  if (subdomain !== "www" && ROOTS.includes(rootDomain)) {
    // Clona URL para ter uma URL absoluta
    const url = request.nextUrl.clone();
    url.pathname = `/${subdomain}${url.pathname}`;
    // Normaliza múltiplas barras
    url.pathname = url.pathname.replace(/\/+/g, "/");
    console.log("URL reescrita para:", url.pathname);
    return NextResponse.rewrite(url);
  }

  // Qualquer outro caso: não interfere
  return NextResponse.next();
}

export const config = {
  matcher: [
    // ignora API, _next e arquivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)",
  ],
};
