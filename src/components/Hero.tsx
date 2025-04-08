
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-primary w-full h-full flex justify-center items-center lg:h-screen rounded-b-2xl'>
      <div className='container mx-auto max-w-[95%] py-[100px] lg:pt-[120px] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[90%] 3xl:max-w-[90%]'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0'>
          <div className='text-center lg:text-start lg:w-1/2'>
            <div className='pt-10 grid gap-4 lg:pt-0 4xl:gap-8'>
              <h1 className='text-white font-semibold w-full sm:w-3/4 mx-auto lg:w-full'>
                A Safe and Anonymous Space
              </h1>

              <p className='text-white w-full mx-auto sm:w-3/4 lg:w-full'>
                Express yourself, share experiences, without fear of stigma or judgment and learn from experts.
              </p>

              <div className='mt-6 flex flex-col items-center lg:items-start gap-4 4xl:mt-16'>
                <div className=''>
                  <h1 className='text-secondary text-[18px] font-bold'>Download the App</h1>
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
              width={400}
              height={100}
              className='w-[300px] h-[300px]' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero