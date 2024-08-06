import { NextResponse, NextRequest } from 'next/server';
import { fallbackLng, locales } from './utils/localization/settings';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    const url = new URL(
      pathname.replace(
        `/${fallbackLng}`,
        pathname === `/${fallbackLng}` ? '/' : '',
      ),
      request.url,
    );
    searchParams.forEach((value, key) => url.searchParams.set(key, value));
    return NextResponse.redirect(url);
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, request.url),
    );
  }
}

export const config = {
  // Do not run the middleware on the following paths
  matcher: [
    '/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
  ],
};
