import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const quicksand = localFont({
  src: "../public/fonts/quicksand.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bean Boutique Coffee Shop",
  description:
    "Welcome to AFM Triumphant Life Center.A place of faith, hope, and community. Join us for inspiring services, uplifting music, and a warm fellowship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
