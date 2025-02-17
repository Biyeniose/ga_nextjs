import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goal Archive",
  description: "Discover Football Trends and Stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeRegistry>
          {children}
          <Navbar />
        </ThemeRegistry>
      </body>
    </html>
  );
}
