'use client'

import React, { useState } from 'react'

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    const data = await response.json();
    setStatus(data.success ? 'Message sent!' : `Error: ${data.error}`);
  }

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
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col w-full gap-2 lg:flex-row lg:gap-4'>
                            <div>
                                <label htmlFor="firstName" className='text-dark text-[18px] block font-medium'>
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
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
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email address' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block' 
                            />
                        </div>

                        <div>
                            <label 
                                htmlFor="message" 
                                className='text-dark text-[18px] block font-medium'>
                                    Message
                            </label>
                            <textarea 
                                typeof='text'
                                name="message" 
                                id="message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='I would love to have a feature where I can...' 
                                className='p-4 w-[100%] h-[150px] bg-[#f9f9f9] rounded-md block' 
                            />
                        </div>

                        <div>
                            <button 
                                type='submit' 
                                className='bg-primary rounded-md text-shade p-4'
                            >
                                Submit
                            </button>
                        </div>
                        {status && <p>{status}</p>}
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact