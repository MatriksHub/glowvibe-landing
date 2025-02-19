'use client'

import Link from 'next/link';
import {useState} from 'react';
import { 
  BanknoteIcon, ChevronLeftIcon, DollarSignIcon, HomeIcon, Settings, User2Icon, WrenchIcon 
} from 'lucide-react';
import Image from 'next/image';
import { BiShield } from 'react-icons/bi';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`flex flex-col min-h-screen px-4 bg-[#2e0536] text-white ${collapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
      <div className='h-[74px] flex items-center justify-between mb-[20px]'>
        {!collapsed && 
          <Link href='/dashboard' legacyBehavior>
            <Image
              src='/glowvibewhite.png'
              alt='logo'
              width={100}
              height={50}
            />
          </Link>
        }

        <button onClick={toggleSidebar} className='focus:outline-none'>
          <ChevronLeftIcon className='w-6 h-6' />
        </button>
      </div>

      <nav className='flex flex-col space-y-2'>
        <Link href='/overview'>
          <SidebarItem 
            Icon={HomeIcon} 
            label="Overview" 
            collapsed={collapsed}           
          />
        </Link>

        <Link href='/revenue'>
          <SidebarItem 
            Icon={BanknoteIcon} 
            label="Revenue" 
            collapsed={collapsed}           
          />
        </Link>

        {/* <Link href='/expenses'>
          <SidebarItem 
            Icon={DollarSignIcon} 
            label="Expenses" 
            collapsed={collapsed} 
          />
        </Link> */}

        <Link href='/users'>
          <SidebarItem 
            Icon={WrenchIcon} 
            label="Users" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/confessions'>
          <SidebarItem 
            Icon={BiShield} 
            label="Confession Box" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/profile'>
          <SidebarItem 
            Icon={User2Icon} 
            label="Profile" 
            collapsed={collapsed} 
          />
        </Link>

        <Link href='/settings'>
            <SidebarItem 
                Icon={Settings} 
                label="Settings" 
                collapsed={collapsed} 
            />
        </Link>
      </nav>
    </div>
  )
}


interface SidebarItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  collapsed: boolean;
}

const SidebarItem = ({ Icon, label, collapsed }: SidebarItemProps) => (
  <div className="flex items-center space-x-2 text-[14px] active:border-l-4 active:border-white hover:border-l-4 border-[#fffffc] hover:text-[#fffffc] p-2">
    <Icon className='w-4 h-4' />
    {!collapsed && <span>{label}</span>}
  </div>
);