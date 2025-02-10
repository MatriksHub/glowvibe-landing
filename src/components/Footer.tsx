import Link from 'next/link'
import React from 'react'
import { LuFacebook, LuInstagram, LuMenu, LuTwitter } from 'react-icons/lu'

function Footer() {
  return (
    <div className='bg-[#000000] text-[#fff] h-[70vh] flex justify-center items-center lg:h-[50vh]'>
      <div className='container mx-auto'>
        <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
          <div className='grid grid-cols-3 gap-20 lg:grid-cols-3'>
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