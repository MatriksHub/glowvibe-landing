'use client'

// import type { Metadata } from "next";
import Header from "@/components/dashboard/custom/Header";
import Sidebar from "@/components/dashboard/custom/Sidebar";
import Footer from "@/components/dashboard/custom/Footer";
import LoadingScreen from "@/components/dashboard/custom/LoadingScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const metadata: Metadata = {
//   title: "Glowvibeapp",
//   description: "Anonymous Gist Platform for Sexual Health Education",
// };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    handleStart();
    const timeout = setTimeout(handleStop, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <html>
      <body className="antialiased">
        <main>
          <div className="flex ">
            <Sidebar />
            <div className="flex flex-col w-full">
              <Header />
              <div className="p-6 ">
                {loading? <LoadingScreen /> : children}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
