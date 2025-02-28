// import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-[#f9f9f9] h-[100ch] py-[120px] flex justify-center items-center lg:h-[100vh] lg:py-0' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10'>
          {/* about glow vibes */}
          <div className='flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full lg:w-[50%]'>
              <h1 className='text-dark text-[45px] w-[70%] leading-[50px] lg:text-[57px] lg:leading-[65px] font-bold text-start'>
                
                ❔ What is GlowVibe?
              </h1>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <p className='text-[16px] text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                GlowVibe is an innovative mobile platform designed to provide a <span className='font-bold text-primary'>safe, anonymous, and inclusive</span> space for individuals to discuss <span className='font-bold text-primary'>sexual health</span> without fear of stigma or judgment.
              </p>
            </div>
          </div>
            {/* why glow vibes */}
          <div className='flex flex-col justify-between items-center gap-4 lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full lg:w-[50%]'>
              <h1 className='text-[45px] w-[70%] leading-[50px] lg:text-[57px] lg:leading-[65px] font-bold text-start text-dark'>
                💬 Why GlowVibe?
              </h1>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <ul className='px-4'>
                <li className='text-[16px] list-disc text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                  Many people hesitate to talk about sexual health due to embarrassment or fear.
                </li>
                <li className='text-[16px] list-disc text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                  Misinformation is widespread, making it hard to find accurate advice.
                </li>
                <li className='text-[16px] list-disc text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                  Access to expert guidance should be <span className='font-bold text-primary'>easy, anonymous, and supportive.</span>
                </li>
              </ul>

              <p className='text-[16px] text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                At GlowVibe, we believe knowledge is empowerment. Whether you are seeking advice, sharing personal experiences, or just curious, this platform offers a <span className='font-bold text-primary'>secure</span> and <span className='font-bold text-primary'>inclusive</span> environment where you can engage freely and confidently.
              </p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About