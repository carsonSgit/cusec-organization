import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { archiveData } from "@/lib/archiveData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cusec.net";

const staticPaths = [
  "",
  "/archives",
  "/historic-sponsors",
  "/participant-schools",
  "/past-speakers",
];

function localeUrl(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}` || siteUrl;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...staticPaths, ...archiveData.map((item) => `/archives/${item.year}`)];

  return paths.map((path) => ({
    url: localeUrl(routing.defaultLocale, path),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, localeUrl(locale, path)]),
      ),
    },
  }));
}
