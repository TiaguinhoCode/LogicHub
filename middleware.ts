// Next
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const baseUrl = "logichub.com.br";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");
  const subdomain = host?.split(".")[0];

  if (
    subdomain === "www" ||
    subdomain === baseUrl ||
    url.pathname.endsWith("/not-found")
  ) {
    return NextResponse.next();
  }

  const isValid = isValidSlug(subdomain);

  if (!isValid) {
    return NextResponse.redirect(
      new URL(`${url.protocol}//${baseUrl}`, request.url)
    );
  }

  return NextResponse.rewrite(
    new URL(
      `/bio${subdomain}${url.pathname}${url.search}${url.hash}`,
      request.url
    )
  );
}

function isValidSlug(slug: string | undefined): boolean {
  console.log("slug: ", slug);

  if (!slug) return false;

  if (slug === "bio") return true;

  return false;
}

export const config = {
  matcher: [
    // ignora APIs, assets Next.js e arquivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..{1,4}$).*)",
  ],
};
