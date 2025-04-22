// Next
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  const hostname = hostHeader.split(":")[0];

  const parts = hostname.split(".");

  console.log("hostHeader: ", hostHeader);
  console.log("hostname: ", hostname);
  console.log("parts: ", parts);

  if (parts.length === 2 && parts[1] === "localhost" && parts[0] !== "www") {
    const subdomain = parts[0];
    const url = request.nextUrl.clone();
    // põe o subdomain como primeiro segmento da rota
    url.pathname = `/${subdomain}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  } else if (
    parts.length === 2 &&
    parts[1] === "logichub.com.br" &&
    parts[0] !== "www"
  ) {
    const subdomain = parts[0];
    const url = request.nextUrl.clone();
    // põe o subdomain como primeiro segmento da rota
    url.pathname = `/${subdomain}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // ignora APIs, assets Next.js e arquivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)",
  ],
};
