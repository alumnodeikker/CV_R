import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";

import { profile } from "@/data/profile";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: profile.fullName,
    template: `%s | ${profile.name}`
  },
  description: profile.description,
  keywords: [...profile.keywords],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: profile.fullName,
    description: profile.description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: profile.fullName,
    description: profile.description
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
  colorScheme: "dark"
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: profile.siteUrl,
  jobTitle: profile.role,
  telephone: profile.phone,
  email: profile.email,
  sameAs: [profile.github, profile.linkedin].filter((item) => item !== "TODO")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
