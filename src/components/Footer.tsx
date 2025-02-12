import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuInstagram } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-[#000000] text-[#fff] h-[100ch] flex justify-center items-center lg:h-[70vh]'>
      <div className='container mx-auto'>
        <footer className="flex flex-col gap-20 lg:gap-20 lg:justify-between lg:items-center">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 lg:gap-20'>
            <div className='flex flex-col gap-6'>
              <div>
                <img 
                  src='/glowvibeWhite.png'
                  alt='glowvibe logo'
                  className='h-[50px] w-[150px]'
                />
              </div>
              <p>
                Empowering Conversations, Breaking Stigmas.
              </p>
            </div>

            <div className='flex flex-col gap-6'>
              <h3 className='font-bold text-primary'>
                Quick Links
              </h3>
              <ul className='flex flex-col items-start justify-start gap-6'>
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

                {/* <li className='capitalize'>
                  <Link href='/contact' legacyBehavior>
                    <a target='_blank'>
                      Contact
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
            
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-6'>
                <h3 className='font-bold text-primary'>
                  Follow us on social media
                </h3>

                <div className='flex text-[30px] gap-4'>
                  <Link href='https://www.instagram.com/glowvibeapp/' target='_blank' rel='noreferrer'>
                    <LuInstagram />
                  </Link>                  
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <h3 className='font-bold text-primary'>
                  Coming soon
                </h3>
                <div className='flex flex-row items-center gap-6'>
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
          </div>

          <p>
            © 2025 GlowVibe inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer