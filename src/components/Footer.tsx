import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuInstagram, LuMail, LuTwitter } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-[#242424] text-white h-full flex justify-center items-center'>
      <div className='container mx-auto max-w-[95%] py-[100px] lg:py-[80px] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] 3xl:max-w-[80%]'>
        <footer className="flex flex-col gap-20 lg:gap-20 lg:justify-between lg:items-center">
          <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-32'>
            <div className='flex flex-col gap-6'>
              <div>
                <Link href='/'>
                  <Image 
                    src='/glowvibeWhite.png'
                    alt='glowvibe logo'
                    width={100}
                    height={100}
                    className='h-[100px] w-[150px]'
                  />
                </Link>
              </div>
              <p className='text-[14px]'>
                A safe and anonymous space.
              </p>
            </div>
            
            {/* Quick links */}
            <div className='flex flex-col gap-6'>
              <h4 className='font-semibold text-[20px] text-white'>
                Quick Links
              </h4>
              <ul className='flex flex-col items-start text-[14px] justify-start gap-6'>
                <li className='capitalize'>
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
                </li>

                <li className='capitalize'>
                  <Link href='https://erocraves.com' legacyBehavior>
                    <a target='_blank'>
                      Shop
                    </a>
                  </Link>
                </li>

                <li className='capitalize'>
                  <Link href='/contact' legacyBehavior>
                    <a >
                      Contact
                    </a>
                  </Link>
                </li>
                {/* <li className='capitalize'>
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
                </li> */}
              </ul>
            </div>
            
            {/* Social media */}
            <div className='flex flex-col text-[14px] gap-6'>
              <h4 className='font-semibold text-[20px] text-white'>
                Social Media
              </h4>
              <ul className='grid gap-4'>
                <li className='flex items-center gap-2 list-disc'>
                  <h4>
                    <LuInstagram className='text-[25px]' />
                  </h4> 
                    <Link 
                        href='https://www.instagram.com/glowvibeapp/' 
                        target='_blank' 
                        rel='noreferrer'
                        className='text-white underline'
                    >
                        @glowvibeapp
                    </Link>
                </li>

                <li className='flex items-center gap-2 list-disc'>
                    <h4>
                        <LuTwitter className='text-[25px]' />
                    </h4>
                    <Link 
                        href='https://x.com/glowvibeapp/' 
                        target='_blank' 
                        rel='noreferrer'
                        className='text-white underline'
                    >
                        @glowvibeapp
                    </Link>                    
                </li>
              </ul>

              <ul className='grid gap-2'>
                <li className='flex items-center gap-2 list-disc'>
                  <h4>
                    <LuMail className='text-[25px]' />
                  </h4>
                  <Link 
                      href="mailto:hello@glowVibeapp.com" 
                      className='text-white underline'
                  >
                      hello@glowvibeapp.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* coming soon  */}
            <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-[20px] text-white'>
                  Download the App
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

          

          <div className='w-full  border-t border-shade pt-[10px] flex flex-col items-center gap-6 lg:justify-between lg:items-center lg:flex-row'>
            <p className='text-[14px] text-center lg:text-end'>
              © 2025 GlowVibe inc. All rights reserved.
            </p>

            <ul className='flex flex-row text-center gap-6 lg:text-end'>
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
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer