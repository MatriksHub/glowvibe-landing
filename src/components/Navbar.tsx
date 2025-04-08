'use client'

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
    { 
      name: "Home", 
      icon: "home", 
      url: "/" 
    },
    { 
      name: "About", 
      icon: "about", 
      url: "#about" 
    },
    { 
      name: "Shop", 
      icon: "shop", 
      url: "https://erocraves.com" 
    },
    { 
      name: "Contact", 
      icon: "contact", 
      url: "/contact" 
    },
  ]

const Navbar = () => {
    const pathname = usePathname()
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const closeMobileClicked = () => setIsNavOpen(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


  return (
    <div className={isScrolled ? 'isScrolled' : 'notScrolled'}>
        <div className="bg-white px-[10px] py-[10px] rounded-lg container mx-auto max-w-[95%] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[90%] 3xl:max-w-[85%]">
            <div className='flex justify-between items-center'>
                <div className='md:flex-[2] w-[200px]'>
                    <Link href="/" legacyBehavior>
                        <Image
                            src='/newlogo.jpg'
                            alt='glowvibe-logo'
                            width={100}
                            height={50}
                            priority
                            className='w-[100px]'
                        />
                    </Link>
                </div>

                <nav className='lg:flex-[4] flex items-center justify-end'>
                    <div className='DESKTOP-MENU hidden sm:hidden md:hidden lg:flex lg:justify-end lg:items-center'>
                        <div className='flex justify-between items-center gap-10'>
                            <ul className='flex justify-center items-center tracking-[0.75px] font-medium'>
                                {NAV_LINKS.map((link, index) => (
                                    <li 
                                        key={index} 
                                        className='capitalize mx-4 ' 
                                        onClick={closeMobileClicked}
                                    >
                                        <Link href={link.url} legacyBehavior>
                                            <a className={`link ${pathname === link.url ? 'text-secondary font-semibold transition-all duration-300 ease-in-out cursor-pointer' : ''}`}
                                            >
                                                {link.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                <li>
                                    <Link href='#download' legacyBehavior>
                                        <a className='nav-cta inline-block font-poppins bg-secondary text-light rounded-md text-[14px] px-[22px] py-[13px] font-bold'>
                                            Get the App
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <div className='MOBILE-NAV-MENU flex justify-center items-center lg:hidden'>
                        {/* HAMBURGER MENU */}
                        <div 
                            className='HAMBURGER-ICON space-y-1.5 cursor-pointer'
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className='block h-0.5 w-8 bg-[#000000]'></span>
                            <span className='block h-0.5 w-7 bg-[#000000]'></span>
                            <span className='block h-0.5 w-6 bg-[#000000]'></span>
                        </div>

                        {/* NAV MENU */}
                        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                            <div className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className='h-8 w-8 text-[#ffffff] border-2 border-secondary rounded-md '
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <line x1='18' y1='6' x2='6' y2='18' />
                                    <line x1='6' y1='6' x2='18' y2='18' />
                                </svg>
                            </div>

                            <div className='MENU-LINK-MOBILE h-[400px] grid gap-8'>
                                <ul className='MENU-LINK grid gap-4'>
                                    {NAV_LINKS.map((link, index) => (
                                        <li 
                                            key={index} 
                                            className='capitalize' 
                                            onClick={closeMobileClicked}
                                        >
                                            <Link href={link.url} legacyBehavior>
                                                <a className={`link ${pathname === link.url ? 'text-secondary font-semibold' : ''}`}>
                                                    {link.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className='MENU-CTA'>
                                    <li>
                                        <Link href='#download' legacyBehavior>
                                            <a className='nav-cta font-poppins bg-secondary text-light rounded-md text-[14px] px-[22px] py-[13px] font-bold'>
                                                Get the App
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar