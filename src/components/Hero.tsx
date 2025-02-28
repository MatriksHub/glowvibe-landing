// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-primary h-[150ch] flex justify-center items-center lg:h-[100ch]'>
      <div className='container mx-auto'>
        <div className='flex flex-col pt-[300px] pb-[20px] gap-20 h- justify-between items-center lg:flex-row lg:pt-[150px] lg:pb-[20px] lg:gap-20'>
          <div className='w-full flex flex-col justify-center gap-8 items-center text-center lg:justify-start lg:items-start lg:gap-10 lg:w-[80%] lg:text-start'>
            <h1 className='text-white text-[55px] w-[90%] leading-[58px] lg:text-[75px] lg:w-[80%] lg:leading-[80px] font-extrabold'>
              A safe and anonymous space
            </h1>

            <p className='text-white text-[18px] w-[90%] leading-[27px] lg:text-[27px]  font-400 lg:w-[70%] lg:leading-[32px]'>
              to express yourself, share experiences, and learn from experts—all while staying completely anonymous.
            </p>

            <div className='flex flex-col items-center lg:items-start gap-4'>
              <div className=''>
                <h1 className='text-secondary text-[18px] font-bold'>Coming soon on</h1>
              </div>
              <div className='w-full flex gap-6'>
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

          {/* hero image */}
          <div className='w-full h-full flex justify-center items-center lg:w-[40%]'>
            <img
              src='/923shots_so.png'
              alt='hero image'
              className='h-[250px] w-[300px] lg:h-[100%] lg:w-[100%]' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero