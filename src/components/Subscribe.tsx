'use client'

import React, { useState } from 'react'

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (data.success) {
            setMessage("Thank you for subscribing! Check your email.");
            setEmail("");
        } else {
            setMessage("Error: " + data.error);
        }

        setLoading(false);
    };


  return (
    <div className='bg-shade h-[80vh] flex justify-center items-center lg:h-[90vh] lg:p-10 lg:bg-[#ffffff]' id='subscribe'>
        <div className='bg-shade container mx-auto border-10 border-background rounded-md'>
            <div className=' flex flex-col gap-10 justify-center items-center py-10'>
                <h1 className='text-dark text-center font-bold text-[28px] w-[100%] leading-[34px] lg:text-[44px] lg:text-center lg:leading-[48px] lg:w-[70%]'>
                    Be the First to Experience GlowVibe when we launch. Get a 30 days <span className='text-primary font-extrabold'>FREE</span> Access to our premium plan!
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-10 justify-center items-center w-[90%] lg:w-[50%]'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="email" className='text-dark text-[18px] block font-medium'>
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='Please enter your email address' className='p-4 w-[100%] bg-[#f9f9f9] rounded-md block'
                            required 
                        />
                    </div>
                    <div className='flex justify-center items-center w-[100%]'>
                        <button 
                            type='submit'
                            className='bg-primary text-white p-4 rounded-md disabled:bg-gray-400'
                            disabled={loading || !email}
                            >
                              {loading ? "Subscribing..." : "Join the Waitlist"}
                        </button>
                    </div>
                    {message && <p className="mt-3 text-center">{message}</p>}
                </form>
            </div>
        </div>
    </div>
  )
}
