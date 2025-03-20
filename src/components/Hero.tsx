// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-primary w-full h-full flex justify-center items-center lg:h-screen'>
      <div className='container mx-auto max-w-[95%] py-[100px] lg:py-[80px] xl:max-w-[90%] 3xl:max-w-[80%]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0'>
          <div className='text-center lg:text-start lg:w-1/2'>
            <div className='pt-10 grid gap-4 lg:pt-0 4xl:gap-8'>
              <h1 className='text-white font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight lg:leading-tight 3xl:leading-snug 4xl:text-9xl'>
                A safe and anonymous space
              </h1>

              <p className='text-white font-400 text-lg md:text-xl lg:text-2xl 4xl:text-5xl'>
                to express yourself, share experiences, and learn from experts—all while staying completely anonymous.
              </p>

              <div className='mt-6 flex flex-col items-center lg:items-start gap-4 4xl:mt-16'>
                <div className=''>
                  <h1 className='text-secondary text-[18px] font-bold'>Coming soon on</h1>
                </div>
                <div className='w-full flex flex-row items-center justify-center gap-6 lg:justify-start'>
                  <Link href='#'>
                    <Image 
                      src='/GetItOnGooglePlay.png'
                      alt='google store button'
                      width={120}
                      height={100}
                    />
                  </Link>

                  <Link href='#'>
                    <Image 
                      src='/App_Store_Badge.svg'
                      alt='app store button'
                      width={120}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* hero image */}
          <div className='flex justify-center items-center lg:w-1/2 lg:px-0'>
            <Image
              src='/923shots_so.png'
              alt='hero image'
              width={250}
              height={100}
              className='w-auto h-auto' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero