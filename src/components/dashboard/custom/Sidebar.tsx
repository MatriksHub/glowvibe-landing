'use client'

import Link from 'next/link';
import {useState} from 'react';
import { 
   ChevronLeftIcon, HomeIcon, PersonStandingIcon, Settings, User2Icon
} from 'lucide-react';
import Image from 'next/image';
import { BiNotification, BiShield } from 'react-icons/bi';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <section className={`flex flex-col p-[20px] h-screen bg-[#2e0536]  text-white ${collapsed ? 'w-20' : 'w-60'} transition-width duration-300`}>
      <div className='h-[70px] flex items-center justify-between pb-[15px] border-b-[1px] border-shade'>
        {!collapsed && 
          <Link href='/dashboard' legacyBehavior>
            <Image
              src='/glowvibewhite.png'
              alt='logo'
              width={100}
              height={50}
              className='w-[100px]'
            />
          </Link>
        }

        <button 
          onClick={toggleSidebar}
          className='focus:outline-none'
        >
          <ChevronLeftIcon 
            className='w-8 h-8 text-white' 
          />
        </button>
      </div>

      <nav className='flex flex-col mt-10 font-semibold space-y-2'>
        <Link href='/dashboard'>
          <SidebarItem 
            Icon={HomeIcon} 
            label="Overview" 
            collapsed={collapsed}           
          />
        </Link>

        {/* <Link href='/dashboard/revenue'>
          <SidebarItem 
            Icon={BanknoteIcon} 
            label="Revenue" 
            collapsed={collapsed}           
          />
        </Link> */}

        <Link href='/dashboard/users'>
          <SidebarItem 
            Icon={PersonStandingIcon} 
            label="Users" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/dashboard/confession'>
          <SidebarItem 
            Icon={BiShield} 
            label="Confession Box" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/dashboard/notifications'>
          <SidebarItem 
            Icon={BiNotification} 
            label="Notifications" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/dashboard/profile'>
          <SidebarItem 
            Icon={User2Icon} 
            label="Profile" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='dashboard//settings'>
            <SidebarItem 
              Icon={Settings} 
              label="Settings" 
              collapsed={collapsed} 
            />
        </Link>
      </nav>
    </section>
  )
}


interface SidebarItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  collapsed: boolean;
}

const SidebarItem = ({ Icon, label, collapsed }: SidebarItemProps) => (
  <div className="flex items-center font-bold space-x-2 text-[14px] leading-[120%] active:border-l-2 active:border-secondary hover:border-l-2 border-secondary hover:text-secondary p-2"
  >
    <Icon className='w-6 h-6 text-white' />
    {!collapsed && <span>{label}</span>}
  </div>
);