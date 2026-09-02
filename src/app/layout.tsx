import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageLoader } from "@/components/ui/PageLoader";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <LocaleProvider>
          <PageLoader />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
