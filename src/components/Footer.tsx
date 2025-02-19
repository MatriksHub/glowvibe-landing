import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuInstagram, LuTwitter } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-[#000000] text-white h-[100ch] sm:h-[70ch] flex justify-center items-center md:h-[80vh] lg:h-[70vh]'>
      <div className='container mx-auto'>
        <footer className="flex flex-col gap-20 lg:gap-20 lg:justify-between lg:items-center">
          <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-32'>
            <div className='flex flex-col gap-6'>
              <div>
                <Link href='/'>
                  <img 
                    src='/glowvibeWhite.png'
                    alt='glowvibe logo'
                    className='h-[50px] w-[150px]'
                  />
                </Link>
              </div>
              <p>
                A safe and anonymous space.
              </p>
            </div>
            
            {/* Quick links */}
            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-[20px] text-white'>
                Quick Links
              </h3>
              <ul className='flex flex-col items-start justify-start gap-6'>
                {/* <li className='capitalize'>
                  <Link href='/' legacyBehavior>
                    <a >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='#about' legacyBehavior>
                    <a target='_blank'>
                      About
                    </a>
                  </Link>
                </li> */}
                <li className='capitalize'>
                  <Link href='/privacy-policy' legacyBehavior>
                    <a target='_blank' className='text-white/50 text-[14px]'>
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='/terms-of-use' legacyBehavior>
                    <a target='_blank' className='text-white/50 text-[14px]'>
                      Terms of use
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='/content-moderation-policy' legacyBehavior>
                    <a target='_blank'className='text-white/50 text-[14px]'>
                      Content Moderation Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social media */}
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-[20px] text-white'>
                  Follow us
                </h3>

                <div className='flex text-[30px] gap-6'>
                  <Link 
                    href='https://www.instagram.com/glowvibeapp/' 
                    target='_blank' 
                    rel='noreferrer'
                  >
                    <LuInstagram />
                  </Link>

                  <Link 
                    href='https://x.com/glowvibeapp/' 
                    target='_blank' 
                    rel='noreferrer'
                  >
                    <LuTwitter />
                  </Link>                    
                </div>
              </div>
            </div>

            {/* coming soon  */}
            <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-[20px] text-white'>
                  Coming soon
                </h3>
                <div className='flex flex-row  items-start gap-6 lg:flex-col'>
                  <Link href='/'>
                    <Image 
                      src='/GetItOnGooglePlay.png'
                      alt='google store button'
                      width={100}
                      height={100}
                    />
                  </Link>

                  <Link href='/'>
                    <Image 
                      src='/App_Store_Badge.svg'
                      alt='app store button'
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <p>
              © 2025 GlowVibe inc. All rights reserved.
            </p>
            {/* <ul className='flex flex-row items-center justify-centr gap-6'>
              <li className='capitalize'>
                <Link href='/privacy-policy' legacyBehavior>
                  <a target='_blank' className='text-white/50 text-[12px] underline'>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li className='capitalize'>
                <Link href='/terms-of-use' legacyBehavior>
                  <a target='_blank' className='text-white/50 text-[12px] underline'>
                    Terms of use
                  </a>
                </Link>
              </li>
              <li className='capitalize'>
                <Link href='/content-moderation-policy' legacyBehavior>
                  <a target='_blank'className='text-white/50 text-[12px] underline'>
                    Content Moderation Policy
                  </a>
                </Link>
              </li>
            </ul> */}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer