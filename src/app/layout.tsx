import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Project Reach",
  description: "Reviving Economics through Agriculture and Comprehensive Harmony",
};

function Navigation() {
  return (
    <nav className="bg-emerald-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-800 font-bold text-lg">🌱</span>
            </div>
            <span className="text-amber-100 font-bold text-xl">Project Reach</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-amber-100 hover:text-amber-200 transition-colors font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="text-amber-100 hover:text-amber-200 transition-colors font-medium">
              Dashboard
            </Link>
            <Link href="/stories" className="text-amber-100 hover:text-amber-200 transition-colors font-medium">
              Stories
            </Link>
            <Link href="/admin" className="text-amber-100 hover:text-amber-200 transition-colors font-medium">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
