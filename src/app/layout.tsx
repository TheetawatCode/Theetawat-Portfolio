import type { Metadata, Viewport } from "next";

import "./globals.css";

const title = "Theetawat Premsawat | Full-stack Developer";
const description = "Portfolio of Theetawat Premsawat, a Full-stack Developer building secure, well-tested web applications with Next.js, TypeScript, and PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://theetawat-portfolio.vercel.app"),
  icons: { icon: "/icons/T.svg" },
  openGraph: {
    type: "website",
    siteName: "Theetawat Premsawat",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
