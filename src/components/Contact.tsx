import React from 'react'

function Contact() {
  return (
    <div className='bg-[#ffffff] min-h-[100ch] flex items-center justify-center lg:min-h-[100ch]'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-between items-center  gap-4 lg:flex-row lg:justify-between lg:items-center h-screen'>
                <div className='w-full lg:w-[50%]'>
                    <h1 className='text-[57px] w-[70%] leading-[65px] lg:text-[57px] font-bold text-start'>
                        Contact
                    </h1>
                </div>
                <div className='w-full flex flex-col gap-10 justify-center items-center p-4 lg:w-[50%]'>
                    <h6 className='text-[18px] text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                        Have questions? We would love to here from you! 
                    </h6>
                    <form className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col w-full gap-2 lg:flex-row lg:gap-4'>
                            <div>
                                <label htmlFor="firstName" className='text-dark text-[18px] block font-medium'>
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    placeholder='Enter your frist name' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block'  
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="lastname"
                                    className='text-dark text-[18px] block font-medium'>
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    placeholder='Enter your last name' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block' 
                                />
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="email" 
                                className='text-dark text-[18px] block font-medium'>
                                    Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder='Enter your email address' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block' 
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="subject" 
                                className='text-dark text-[18px] block font-medium'>
                                    Message
                            </label>
                            <textarea 
                                typeof='text'
                                name="subject" 
                                id="subject" 
                                placeholder='I would love to have a feature where I can...' 
                                className='p-4 w-[100%] h-[150px] bg-[#f9f9f9] rounded-md block' 
                            />
                        </div>

                        <div>
                            <button className='bg-primary rounded-md text-shade p-4'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact