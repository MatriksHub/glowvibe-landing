import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Downloadapp() {
  return (
    <section className='pb-[50px] relative' id='download'>
      <div className='container md:max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] 3xl:max-w-[80%]'>
        <div className='bg-primary flex flex-col justify-center items-center rounded-2xl text-center p-[60px] mt-[-150px]'>
          <h2 className='text-[35px] font-bold text-white lg:text-[45px]'>Ready to Take Charge of Your Sexual Health?</h2>

          <p className='text-[16px] mt-[14px] mb-[50px] text-white lg:text-[18px]'>Download GlowVibe App today and start exploring in a safe, supportive, and private space.</p>

          <div className='w-full flex flex-row items-center justify-center gap-6'>
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
    </section>
  )
}

export default Downloadapp