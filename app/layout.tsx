import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fynbloc — Powering India's Safe Crypto P2P Ecosystem",
  description:
    "Fynbloc is building a safety-first infrastructure for peer-to-peer crypto trading in India. Structured. Secure. Transparent.",
  icons: {
    icon: [
      { url: "/favicon/favicon.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon/favicon_white.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased noise-bg" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
