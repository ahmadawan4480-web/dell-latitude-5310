import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dell Latitude 5310 | Premium Business Laptop",
  description:
    "Dell Latitude 5310 – 10th Gen Intel Core i7, 16GB RAM, 256GB NVMe SSD. Premium business laptop for professionals. Buy now at the best price.",
  keywords:
    "Dell Latitude 5310, business laptop, Intel Core i7, 16GB RAM, NVMe SSD, Windows 11",
  openGraph: {
    title: "Dell Latitude 5310 | Premium Business Laptop",
    description:
      "10th Gen Intel Core i7 Business Laptop – Powerful Performance, Premium Build",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
