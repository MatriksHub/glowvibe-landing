'use client'

import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";


const Header = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("isAdmin");
    router.push("/login");
  };
 
  return (
    <header className="w-full h-[74px] p-[20px]">
      <div className="flex items-center justify-between pb-[20px] border-b border-b-shade" >
        <h1 className="text-xl font-bold"></h1>
        <div className="flex flex-row justify-center items-center content-center gap-4 ">
          <button onClick={handleLogout} className="text-red-500 font-bold">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header