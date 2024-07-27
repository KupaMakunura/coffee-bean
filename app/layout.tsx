import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";
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
    "Welcome to Bean Boutique Coffee Shop. Enjoy our premium coffee blends, cozy atmosphere, and friendly service. A perfect place to relax, work, or catch up with friends. Explore our selection of brewing equipment for the perfect coffee experience at home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
