import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carmech | Carmel Shoranur Entrepreneurship Cell",
  description:
    "Official launch of Carmech — the premier Entrepreneurship and Innovation Cell of Carmel Shoranur, Palakkad, Kerala. Inspiring student founders, tech innovators, and future leaders.",
  keywords: [
    "Carmech",
    "Carmel Shoranur",
    "Carmel CMI",
    "Entrepreneurship Cell",
    "E-Cell Kerala",
    "Student Startups",
    "Shoranur Innovation",
  ],
  authors: [{ name: "Carmech E-Cell, Carmel Shoranur" }],
  openGraph: {
    title: "Carmech | Carmel Shoranur Entrepreneurship Cell",
    description:
      "Igniting Tomorrow's Founders. The official E-Cell of Carmel Shoranur launching soon.",
    siteName: "Carmech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#060b19" />
      </head>
      <body className="min-h-screen bg-[#050814] text-slate-100 antialiased selection:bg-[#d4af37] selection:text-[#050814] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
