'use client'

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation";


const Header = () => {
  const { user, logout } = useUser();
  console.warn(`this is profile page: ${JSON.stringify(user, null, 2)}`);

  const pathname = usePathname(); // Get current route
  const formattedTitle = pathname
    .replace("/dashboard/", "") // Remove "/admin/" prefix
    .replace("-", " ") // Replace hyphens with spaces
    .replace("/", "") // Remove trailing slash
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "";
 
  return (
    <header className="p-[20px]">
      <div className="h-[70px] flex items-center justify-between border-b border-b-shade pb-[15px]">
        <h1 className="text-lg font-bold">{formattedTitle}</h1>

        <div className="">
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </div>

              <div className="grid gap2">
                <p className="text-[14px] font-400">
                  Welcome,
                </p>
                <h3 className="text-[16px] font-500">
                  {user?.username}
                </h3>
              </div>
            </div>

            <div>
              <Button 
                variant='outline'              
                onClick={logout} 
                className={`w-full text-center px-[15px] py-2 rounded bg-red-500 text-white hover:bg-red-300 hover:text-white`}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header