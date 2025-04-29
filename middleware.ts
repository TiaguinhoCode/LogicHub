// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const ROOT_DOMAIN =
  process.env.NODE_ENV === "production" ? "logichub.com.br" : "localhost";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] || "";
  const url = request.nextUrl.clone();

  console.log("Host: ", host);
  console.log("url: ", url);

  // Se for domínio principal (com ou sem www), segue normal
  if (host === ROOT_DOMAIN || host === `www.${ROOT_DOMAIN}`) {
    return NextResponse.next();
  }

  // Captura subdomínio (qualquer coisa antes de ".ROOT_DOMAIN")
  if (host.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = host.replace(`.${ROOT_DOMAIN}`, "");
    console.log("parts: ", subdomain);
    if (subdomain && subdomain !== "www") {
      console.log(`subdomain: /${subdomain}/${url.pathname}`);
      url.pathname = `/${subdomain}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)"],
};
