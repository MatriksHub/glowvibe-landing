// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-shade min-h-auto flex justify-center items-center lg:min-h-[100ch]'>
      <div className='container mx-auto'>
        <div className='flex flex-col pt-[150px] pb-[20px] gap-0 h-screen justify-between items-center lg:flex-row lg:pt-[100px] lg:pb-[50px] lg:gap-10'>
          <div className='flex flex-col justify-start gap-8 items-start lg:justify-start lg:items-start lg:gap-10'>
            <h1 className='text-[45px] w-[90%] leading-[52px] lg:text-[75px] lg:w-[80%] lg:leading-[85px] font-extrabold'>
              A safe and anonymous space
            </h1>

            <p className='text-[18px] w-[90%] leading-[27px] lg:text-[27px]  font-400 lg:w-[70%] lg:leading-[27px]'>
              to discuss sexual health, share experiences, and learn from experts—all while staying completely anonymous.
            </p>

            <div>
              <Link href='#subscribe' className='bg-primary text-shade p-4 rounded-md'>
                Learn more
              </Link>
            </div>
          </div>

          {/* hero image */}
          <div className='hidden lg:flex'>
            <img
              src='/974shots_so1.png'
              alt='hero image'
              className='object-fit'
            />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero