import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontDancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});


export const metadata: Metadata = {
  title: "Happy Birthday Cayangg 🎉",
  description: "A special birthday surprise 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontDancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
