'use client'

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const metadata: Metadata = {
//   title: "Glow Vibes",
//   description: "Anonymous Gist Platform for Sexual Health Education",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/confessions') || pathname.startsWith('/overview') || pathname.startsWith('/settings') || pathname.startsWith('/users') || pathname.startsWith('/revenue') || pathname.startsWith('/dashboard') || pathname.startsWith('/profile') || pathname.startsWith('/signin') || pathname.startsWith('/verify') || pathname.startsWith('/signup') || pathname.startsWith('/forgot') || pathname.startsWith('/reset') || pathname.startsWith('/404') || pathname.startsWith('/500') || pathname.startsWith('/403') || pathname.startsWith('/401') || pathname.startsWith('/400') || pathname.startsWith('/403') || pathname.startsWith('/401') || pathname.startsWith('/400') || pathname.startsWith('/500') || pathname.startsWith('/404') || pathname.startsWith('/signin') || pathname.startsWith('/signup') || pathname.startsWith('/forgot') || pathname.startsWith('/reset') || pathname.startsWith('/verify') || pathname.startsWith('/dashboard') || pathname.startsWith('/confessions') || pathname.startsWith('/overview') || pathname.startsWith('/settings') || pathname.startsWith('/users') || pathname.startsWith('/revenue') || pathname.startsWith('/profile');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {!isAdmin && <Navbar />}
          <ToastContainer position="top-center" limit={1} />
          <div>
            {children}
          </div>
        </main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
