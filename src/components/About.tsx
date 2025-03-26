// import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-neutral h-full flex justify-center items-center lg:h-screen' id="about">
      <div className='container mx-auto max-w-[95%] py-[100px] lg:py-[80px] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] 3xl:max-w-[80%]'>
        <div className='flex flex-col gap-10'>
          {/* about glow vibes */}
          <div className='flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full lg:w-[50%]'>
              <h3 className='text-dark font-bold text-start'>
                ❔ What is GlowVibe?
              </h3>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <p className='text-start w-full'>
                GlowVibe is an innovative mobile platform designed to provide a <span className='font-bold text-primary'>safe, anonymous, and inclusive</span> space for individuals to discuss <span className='font-bold text-primary'>sexual health</span> without fear of stigma or judgment.
              </p>
            </div>
          </div>

          {/* why glow vibes */}
          <div className='flex flex-col justify-between items-center gap-4 lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full lg:w-[50%]'>
              <h3 className='text-dark font-bold text-start'>
                💬 Why GlowVibe?
              </h3>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <ul className='grid gap-2 pl-4 lg:pl-0'>
                <li className='list-disc text-start w-full'>
                  <p>Many people hesitate to talk about sexual health due to embarrassment or fear.</p>
                </li>
                <li className='list-disc text-start w-full'>
                  <p>Misinformation is widespread, making it hard to find accurate advice.</p>
                </li>
                <li className='list-disc text-start w-full'>
                  <p>Access to expert guidance should be <span className='font-bold text-primary'>easy, anonymous, and supportive.</span></p>
                </li>
              </ul>

              <p className='text-start w-full'>
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