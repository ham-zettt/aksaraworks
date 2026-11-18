import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { home, site } from "@/lib/content";
import { MotionProvider } from "@/components/layout/MotionProvider";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "AKSARA — Website, Logo, Penulisan, dan Olah Data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s" },
  description: site.description,
  keywords: home.keywords,
  authors: [{ name: "AKSARA", url: site.url }],
  creator: "AKSARA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Lewati ke konten utama
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
