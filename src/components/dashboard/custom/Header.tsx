'use client'


import { useUser } from "@/context/UserContext";


const Header = () => {

  const { logout } = useUser();
 
  return (
    <header className="w-full h-[74px] p-[20px]">
      <div className="flex items-center justify-between pb-[20px] border-b border-b-shade" >
        <h1 className="text-xl font-bold"></h1>
        <div className="flex flex-row justify-center items-center content-center gap-4 ">
          <button onClick={logout} className={`block w-full text-center py-2 rounded text-red-500 hover:text-red-600`}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header