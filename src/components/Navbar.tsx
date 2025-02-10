'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react';


const Navbar = () => {
    // const [clicked, setClicked] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // const handleClick = () => {
    //     setClicked(!clicked);
    // }

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
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
                <div className=' md:flex-[2]'>
                    <Link href="/" className='log' legacyBehavior>
                        {/* <a className='log'> */}
                            <img
                                src='glowvibeWhite.png'
                                alt='glowvibe-logo'
                                className='h-[50px] w-[200px]'
                                // width={100}
                                // height={100}
                                // priority
                            />
                        {/* </a> */}
                    </Link>
                </div>
                <nav className='lg:flex-[4]'>
                    <div className='DESKTOP-MENU hidden sm:hidden md:hidden lg:flex lg:justify-end lg:items-center'>
                        <div className='flex justify-between items-center gap-10'>
                            <ul className='flex justify-center items-center tracking-[0.75px] font-medium'>
                                <li className='mx-3'>
                                    <Link href='/'>
                                        Home
                                    </Link>
                                </li>
                                <li  className='mx-3'>
                                    <Link href='#about'>
                                        About
                                    </Link>
                                </li>
                                {/* <li  className='mx-3'>
                                    <Link href='/blog'>
                                        Blog
                                    </Link>
                                </li> */}
                                <li  className='mx-3'>
                                    <Link href='/contact'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href='#subscribe' legacyBehavior>
                                        <a className='nav-cta bg-secondary text-light rounded-md text-[14px] px-6 py-3 font-bold'>
                                            Join the waitlist!
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
                            <span className='block h-0.5 w-8 animate-pulse bg-[#ffffff]'></span>
                            <span className='block h-0.5 w-7 animate-pulse bg-[#ffffff]'></span>
                            <span className='block h-0.5 w-6 animate-pulse bg-[#ffffff]'></span>
                        </div>

                        {/* NAV MENU */}
                        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                            <div className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className='h-8 w-8 text-[#000000] animate-pulse'
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

                            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
                                <li className='my-[25px] capitalize ' 
                                    onClick={closeMobileClicked}
                                >
                                    <Link href='/' legacyBehavior>
                                        <a >
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className='my-[25px] capitalize' 
                                    onClick={closeMobileClicked}
                                >
                                    <Link href='#about' legacyBehavior>
                                        <a target='_blank'>
                                            About
                                        </a>
                                    </Link>
                                </li>
                                {/* <li className='my-[25px] capitalize' 
                                    onClick={closeMobileClicked}
                                >
                                    <Link href='/blog' legacyBehavior>
                                        <a target='_blank'>
                                            Blog
                                        </a>
                                    </Link>
                                </li> */}
                                

                                <li className='my-[25px] capitalize' 
                                    onClick={closeMobileClicked}
                                >
                                    <Link href='/contact' legacyBehavior>
                                        <a target='_blank'>
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar