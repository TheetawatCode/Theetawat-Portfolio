import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Theetawat Premsawat | Full-stack Developer",
  description: "Portfolio of Theetawat Premsawat, a Full-stack Developer building responsive and scalable digital products.",
  metadataBase: new URL("https://theetawat-portfolio.vercel.app"),
  icons: { icon: "/icons/T.svg" },
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
