 'use client'

import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const works = [
    {
      title: "Download & Install",
      description: "Visit the App Store or Google Play Store and search for GlowVibe App. Tap Download and wait for the installation to complete.",
      icon: "/icons/icons8-download-48.png"
    },
    {
      title: "Sign Up or Browse Anonymously",
      description: "Choose to sign up with an email. No personal details required—your privacy is 100% protected.",
      icon: "/icons/icons8-add-48.png"
    },
    {
      title: "Ask Questions & Share Experiences",
      description: "Post anonymously or browse existing conversations. Get expert-driven answers or real-life insights from the community.",
      icon: "/icons/icons8-questions-48.png"
    },
  ]

function HowItWorks() {
  return (
    <div className='bg-white w-full h-full flex justify-center items-center lg:h-screen'>
        <div className='container mx-auto max-w-[95%] py-[60px] lg:py-[80px] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] 3xl:max-w-[80%]'>
            <div className='flex flex-col gap-10'>
                <div className='grid text-center gap-4'>
                    <h5 className='text-[16px]'>
                        <span className=''></span> How It Works

                    </h5>
                    <div className='flex justify-center items-center w-[300px] mx-auto mb-[20px]'>
                        <h3 className=''>
                            How it works: <span className='text-primary'>A Step-by-Step Guide</span>
                        </h3>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex justify-center items-center'>
                        <Image 
                            src='/download.svg'
                            alt='download'
                            width={100}
                            height={50}
                            className='w-[350px]'
                        />
                    </div>

                    <div className='pr-6 w-full grid gap-8'>
                        {works.map((work, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col lg:flex-row gap-4 "
                            >
                                <span className="bg-neutral h-[60px] w-[60px] flex p-3 justify-center rounded-full items-center" 
                                >
                                    <Image 
                                        src={work.icon}
                                        alt='icons'
                                        width={40}
                                        height={40}
                                        className='w-[40px] h-[40px]'
                                    />
                                </span>
                                <Card className='w-full border-0 shadow-none'>
                                    <CardHeader className='text-start p-0'>
                                        <CardTitle className='font-medium lg:text-[22px]'>{work.title}</CardTitle>
                                        <CardDescription className='text-start font-normal opacity-60'>
                                            {work.description}
                                        </CardDescription> 
                                    </CardHeader>  
                                </Card>                     
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks