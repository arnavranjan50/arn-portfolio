import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1c1c1c",
};

export const metadata: Metadata = {
  title: "Arnav Ranjan | Portfolio",
  description:
    "Arnav Ranjan — Full-Stack Developer & Creative Technologist. Building digital experiences that push boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#1c1c1c] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
