'use client'

// import type { Metadata } from "next";
import Header from "@/components/dashboard/custom/Header";
import Sidebar from "@/components/dashboard/custom/Sidebar";
import LoadingScreen from "@/components/dashboard/custom/LoadingScreen";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

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

interface LayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: LayoutProps) {
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
        <main className="lg:h-screen">
          <div className="flex h-screen">
            <div className="sticky h-screen flex-col top-0 bottom-0 md:flex transition-all">
              <Sidebar />
            </div>
            <div className="flex flex-col w-full ">
              <Header />
              <div className="p-5 overflow-y-auto">
                {loading ? 
                  <LoadingScreen /> 
                  : 
                  children
                }
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
