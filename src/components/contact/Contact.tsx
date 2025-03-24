'use client'

import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { useContactFormLogic } from './useContactFormLogic';
import Link from 'next/link';
import { LuInstagram, LuTwitter } from 'react-icons/lu';

function Contact() {
    const {
        formData, 
        loading, 
        error, 
        handleInputChange,
        handleSubmit
    } = useContactFormLogic();

  return (
    <div className='bg-[#ffffff] h-auto flex items-center justify-center lg:h-full'>
        <div className='container mx-auto max-w-[95%] py-[100px] lg:py-[85px] xl:max-w-[90%] 3xl:max-w-[80%]'>
            <div className='flex flex-col justify-between items-center  gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center'>
                <div className='w-full grid gap-6 lg:w-[50%]'>
                    <h1 className='font-bold text-start'>
                        Contact
                    </h1>

                    <div className='grid gap-2'>
                        <div className='grid gap-4  lg:text-[18px] font-normal'>
                            <p>
                                Hi there!
                            </p>

                            <p>
                                Welcome to GlowVibe support centre.
                            </p>

                            <p>
                                Is there an issue or question you&apos;d like to discuss with us?
                            </p>

                            <p className='md:w-[80%] lg:w-[80%]'>
                                Most users find answers they need in our GlowVibe Help Lines across social media, so we recommend exploring it first:
                            </p>

                            <div className='flex flex-col gap-2'>
                                <h4 className='font-semibold'>
                                Follow us
                                </h4>

                                <div className='flex text-[30px] gap-6'>
                                    <Link 
                                        href='https://www.instagram.com/glowvibeapp/' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <LuInstagram />
                                    </Link>

                                    <Link 
                                        href='https://x.com/glowvibeapp/' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <LuTwitter />
                                    </Link>                    
                                </div>
                            </div>

                            <p>If you still need assistance, please reach out to us:</p>

                            <div className='grid gap-2'>
                                <ul>
                                    <li className='flex items-center gap-1 list-disc'>
                                        <h4 className=''>
                                            Email:
                                        </h4>
                                        <Link href="mailto:hello@glowVibeapp.com" className='text-secondary underline'>
                                            hello@glowvibeapp.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full grid gap-4 lg:w-[50%] lg:gap-4 lg:p-4'>
                    <div className='grid gap-1'>
                        <h3 className='text-start font-semibold w-full'>
                            Feedbacks 
                        </h3>
                        <p className='font-normal w-full'>
                            Have feedbacks? We would love to here from you! 
                        </p>
                    </div>

                    <form 
                        onSubmit={handleSubmit} 
                        className='flex flex-col gap-4 w-full'>
                        <div>
                            {/* Error Message */}
                            {error && (
                                <p className="text-red-500 text-[12px] text-wrap text-center mb-2 font-medium">
                                {error}
                                </p>
                            )}
                        </div>
                        <div className='flex flex-col w-full gap-4 lg:flex-row lg:gap-4'>
                            <div className='grid gap-2 w-full'>
                                <Label htmlFor="firstName" className='text-dark text-[14px] block font-medium'>
                                    First Name
                                </Label>
                                <Input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    placeholder='Enter your frist name' className='w-[100%]  block'  
                                />
                            </div>
                            <div className='grid gap-2 w-full'>
                                <Label 
                                    htmlFor="lastname"
                                    className='text-dark text-[14px] block font-medium'>
                                    Last Name
                                </Label>
                                <Input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    placeholder='Enter your last name' className='w-[100%]  block' 
                                />
                            </div>
                        </div>

                        <div className='grid gap-2'>
                            <Label 
                                htmlFor="email" 
                                className='text-dark text-[14px] block font-medium'>
                                    Email
                            </Label>
                            <Input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder='Enter your email address' className=' block' 
                            />
                        </div>

                        <div className='grid gap-2'>
                            <Label
                                htmlFor="message" 
                                className='text-dark text-[14px] block font-medium'>
                                    Message
                            </Label>
                            <Textarea 
                                typeof='text'
                                name="message" 
                                id="message" 
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                placeholder='I would love to have a feature where I can...' 
                                className='w-[100%] h-[150px] rounded-md block' 
                            />
                        </div>

                        <div className='mt-4'>
                            <Button
                                type='submit' 
                                className='bg-secondary rounded-md text-primary p-4'
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center space-x-2">
                                        <span className="spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        <span>Submiting...</span>
                                    </span>
                                    ) : (
                                    'Submit'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact