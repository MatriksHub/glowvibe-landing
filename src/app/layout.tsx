'use client'

// import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { UserProvider } from "@/context/UserContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700'],
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

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} antialiased`}
      >
        <main>
          <ToastContainer position="top-center" limit={1} />
          <div>
            <UserProvider>{children}</UserProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
