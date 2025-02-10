import Link from 'next/link'
import React from 'react'
import { LuFacebook, LuInstagram, LuTwitter } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-[#000000] text-[#fff] h-[80vh] flex justify-center items-center lg:h-[70vh]'>
      <div className='container mx-auto'>
        <footer className="flex flex-col gap-20 lg:gap-20 lg:justify-between lg:items-center">
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20'>
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

            {/* <div className='flex flex-col gap-6'>
              <h3 className='font-bold'>
                Contact Us:
              </h3>
              <p>
                support@glowvibes.com
              </p>
            </div> */}

            <div className='flex flex-col gap-6'>
              <h3 className='font-bold'>
                Follow us on social media
              </h3>

              <div className='flex text-[30px] gap-4'>
                <Link href='/'>
                  <LuInstagram />
                </Link>

                <Link href='/'>
                  <LuFacebook />
                </Link>
                
                <Link href='/'>
                  <LuTwitter />
                </Link>
                
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