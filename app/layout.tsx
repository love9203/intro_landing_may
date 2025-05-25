import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MainNavigation } from "../components/sections/main-navigation";
import Footer from "../components/ui/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intro | Your Go-To-Talent Partner",
  description: "Your company's modern solutions for today's challenges",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon_io/favicon-16x16.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon_io/favicon-32x32.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon_io/apple-touch-icon.png"
    },
    {
      rel: "icon",
      sizes: "192x192",
      url: "/favicon_io/android-chrome-192x192.png"
    },
    {
      rel: "icon",
      sizes: "512x512",
      url: "/favicon_io/android-chrome-512x512.png"
    }
  ],
  manifest: "/favicon_io/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
