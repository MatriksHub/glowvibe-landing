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
                ❔ What is AskTaboo?
              </h3>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <p className='text-start w-full'>
                AskTaboo is a <span className='font-bold text-primary'>safe, anonymous, and inclusive</span> where you can ask your most personal questions about  
<span className='font-bold text-primary'>sex, health, and relationships</span> — and get expert answers.
              </p>
            </div>
          </div>

          {/* why glow vibes */}
          <div className='flex flex-col justify-between items-center gap-4 lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full lg:w-[50%]'>
              <h3 className='text-dark font-bold text-start'>
                💬 Why AskTaboo?
              </h3>
            </div>

            <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
              <ul className='grid gap-2 pl-4 lg:pl-0'>
                <li className='list-disc text-start w-full'>
                  <p>Many people struggle to ask taboo questions publicly.</p>
                </li>
                <li className='list-disc text-start w-full'>
                  <p>Misinformation spreads easily online.</p>
                </li>
                <li className='list-disc text-start w-full'>
                  <p>We make it easy, anonymous, and stigma-free to get <span className='font-bold text-primary'>real answers.</span></p>
                </li>
              </ul>

              <p className='text-start w-full'>
                We believe that when people are informed, they feel more confident and make better decisions. AskTaboo empowers users to  
                <span className='font-bold text-primary'> learn, explore, and grow</span> — privately.
              </p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
