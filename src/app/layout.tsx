import type {Metadata} from "next";
import {Geist, Geist_Mono, Nova_Square, Source_Serif_4} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const novaSquare = Nova_Square({
  weight: "400",
  variable: "--font-nova-square",
  subsets: ["latin"],
  fallback: ["font-sans", "font-mono"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Deep's Portfolio",
  description: "Deepak Patil Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${novaSquare.variable} ${sourceSerif.className} antialiased p-4 sm:p-10 md:p-16`}
      >
        {children}
      </body>
    </html>
  );
}
