import React from 'react'

export default function Subscribe() {
  return (
    <div className='bg-[#ffffff] h-[100vh] flex justify-center items-center p-10 lg:h-[90vh] lg:p-0' id='subscribe'>
        <div className='bg-shade container mx-auto border-10 border-background rounded-md'>
            <div className=' flex flex-col gap-10 justify-center items-center py-10'>
                <h1 className='text-dark text-center font-bold text-[28px] w-[100%] leading-[34px] lg:text-[44px] lg:text-center lg:leading-[48px] lg:w-[70%]'>
                    Be the First to Experience GlowVibe when we launch. Get a 30days <span className='text-primary font-extrabold'>FREE</span> Access to our premium plan!
                </h1>

                <form className='flex flex-col gap-10 justify-center items-center w-[90%] lg:w-[50%]'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="email" className='text-dark text-[18px] block font-medium'>
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='Please enter your email address' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block' 
                        />
                    </div>
                    <div className='flex justify-center items-center w-[100%]'>
                        <button className='bg-primary text-white p-4 rounded-md'>
                            Join the Waitlist!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
