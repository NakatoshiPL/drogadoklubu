import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { Analytics } from "./components/analytics";
import { MobileBottomCta } from "./components/mobile-cta";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-app-sans",
  subsets: ["latin", "latin-ext"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Poradnik dla rodziców młodych piłkarzy",
    template: "%s | Poradnik dla rodziców młodych piłkarzy",
  },
  description:
    "Praktyczny przewodnik dla rodziców: jak podejść do kontaktu z klubami piłkarskimi w Holandii, Belgii i Polsce.",
  keywords: [
    "akademia piłkarska Holandia",
    "jak zapisać dziecko do klubu piłkarskiego",
    "testy piłkarskie Belgia",
    "Centralna Liga Juniorów",
  ],
  openGraph: {
    title: "Poradnik dla rodziców młodych piłkarzy",
    description:
      "Praktyczny przewodnik dla rodziców: jak podejść do kontaktu z klubami piłkarskimi w Holandii, Belgii i Polsce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poradnik dla rodziców młodych piłkarzy",
    description:
      "Praktyczny przewodnik dla rodziców: jak podejść do kontaktu z klubami piłkarskimi w Holandii, Belgii i Polsce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = getSiteUrl();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pilkarska Sciezka Rodzica",
    url: baseUrl,
    sameAs: [],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pilkarska Sciezka Rodzica",
    url: baseUrl,
    inLanguage: ["pl"],
  };

  return (
    <html
      lang="pl"
      className={`${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 pb-28 md:px-6 md:py-12 md:pb-12">
            {children}
          </main>
          <MobileBottomCta />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
