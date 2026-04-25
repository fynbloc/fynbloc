import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fynbloc Labs — IT Services & Blockchain Development",
  description:
    "Fynbloc Labs is an Indian IT services and blockchain product development company building custom software, Web3 products, and scalable digital solutions.",
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
