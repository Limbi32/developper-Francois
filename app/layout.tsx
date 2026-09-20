import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio | Expert Web & Mobile",
  description: "Développeur Next.js, Flutter et React Native spécialisé dans la création d'applications haute performance.",
  icons: {
    icon: "/icon-francois-cercle.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-slate-900 font-poppins`}>
      <body className="flex min-h-full
       bg-slate-800 flex-col 
        text-zinc-900 antialiased
          dark:text-zinc-100">
        <Header />
        <div className="flex-1 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
