'use client'

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { usePathname } from "next/navigation";
import { UserProvider } from "@/context/UserContext";

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
  const isAdmin = pathname.startsWith('/auth') || pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {!isAdmin && <Navbar />}
          <ToastContainer position="top-center" limit={1} />
          <div>
            <UserProvider>{children}</UserProvider>
          </div>
        </main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
