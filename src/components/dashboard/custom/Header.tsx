'use client'

import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BiExit } from "react-icons/bi";


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

        <DropdownMenu>
          <DropdownMenuTrigger className="border-0">
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
                  {user?.email}
                </h3>
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white border border-shade">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="bg-white hover:bg-white"
              onClick={logout}
            >
              <BiExit className="h-6 w-6 text-red-500 " />
              <p              
                className='w-full text-start bg-none text-red-500 hover:text-red-300 hover:text-white hover:bg-none'
              >
                Log Out
              </p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header