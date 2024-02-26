import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { ImageResponse } from "next/og";
import { Inter } from "next/font/google";
import "./globals.css";
import leafgif from "../../public/images/mailbox/mailboxscreenshot.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Miholics",
  description: "Web Development and Tech Art Resume/Portfolio for Matt Miholics",
  openGraph:{
    type: "website",
    url: "https://www.mattmiholics.com",
    title: "Matt Miholics Portfolio",
    description: "Web Development and Tech Art Resume/Portfolio for Matt Miholics",
    siteName: "Matt Miholics Personal Site",
    images: [{
      url: "https://www.mattmiholics.github.io/personal-site-next/images/mailbox/mailboxscreenshot.jpg",
    }]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar />{children}<Footer /></body>
    </html>
  );
}
