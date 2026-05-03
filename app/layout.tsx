import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hodžić Gradnja Srebrenik | Pouzdano. Kvalitetno. Na vrijeme.",
  description:
    "Profesionalna građevinska kompanija na području Srebrenika i okoline. Betonski radovi, fasaderski radovi, rekonstrukcije, dogradnje, krovni radovi i kompletna gradnja.",
  keywords: "gradnja Srebrenik, građevinska firma BiH, betonski radovi, fasada, rekonstrukcija, Hodžić Gradnja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-[#111111] antialiased">{children}</body>
    </html>
  );
}
