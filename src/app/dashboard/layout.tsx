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
          <div className="flex justify-between max-h-screen">
            <div className="sticky h-screen flex-col top-0 hidden md:flex shrink-0 flex-grow max-w-[340px] border-r-[1.5px] border-grey-90 transition-all bg-gray-98 ">
              <Sidebar />
            </div>
            <div className="flex flex-col w-full">
              <Header />
              <div className="p-6 ">
                {loading? <LoadingScreen /> : children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
