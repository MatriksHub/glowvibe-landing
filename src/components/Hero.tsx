import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-shade min-h-[80ch] flex justify-center items-center lg:min-h-[100ch]'>
      <div className='container mx-auto'>
        <div className='flex flex-col pt-[100px] pb-[0px] gap-10 h-screen justify-between items-center lg:flex-row lg:pt-[100px] lg:pb-[0px]'>
          <div className='flex flex-col justify-start gap-8 items-start lg:justify-start lg:items-start lg:gap-10'>
            <h1 className='text-[45px] w-[90%] leading-[52px] lg:text-[75px] lg:w-[70%] lg:leading-[85px] font-extrabold'>
              A safe and anonymous space
            </h1>

            <p className='text-[18px] w-[90%] leading-[27px] lg:text-[27px]  font-400 lg:w-[60%] lg:leading-[27px]'>
              to discuss sexual health, share experiences, and learn from experts.
            </p>

            <div>
              <Link href='#subscribe' className='bg-primary text-shade p-4 rounded-md'>
                Learn more
              </Link>
            </div>
          </div>

          {/* hero image */}
          <div className='h-[0px] lg:block'>
          </div>
        </div>

      </div>
        
    </div>
  )
}

export default Hero