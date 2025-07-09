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
  title: "Deepak's Portfolio",
  description: "Welcome to my portfolio website showcasing my work and skills.",
  openGraph: {
    title: "Deepak's Portfolio",
    description: "Explore my projects, experience, and contact details.",
    url: "https://deepakpatil.online",
    siteName: "Deepak's Portfolio",
    images: [
      {
        url: "https://deepakpatil.online/og-image.jpeg",
        width: 1200,
        height: 500,
        alt: "Deepak's Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak's Portfolio",
    description: "Explore my projects, experience, and contact details.",
    images: ["https://deepakpatil.online/og-image.jpeg"],
  },
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
