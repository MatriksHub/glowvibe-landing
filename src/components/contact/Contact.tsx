'use client'

import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { useContactFormLogic } from './useContactFormLogic';

function Contact() {
    const {
        formData, 
        loading, 
        error, 
        handleInputChange,
        handleSubmit
    } = useContactFormLogic();

  return (
    <div className='bg-[#ffffff] h-[100ch] p-[20px] flex items-center justify-center lg:min-h-[100ch]'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-between items-center  gap-2 lg:flex-row lg:justify-between lg:items-center h-screen'>
                <div className='w-full lg:w-[50%]'>
                    <h1 className='text-[38px] w-[70%] leading-[120%] lg:text-[57px] font-bold text-start'>
                        Contact
                    </h1>
                </div>
                <div className='w-full flex flex-col gap-2 justify-center items-center lg:w-[50%] lg:gap-6 lg:p-4'>
                    <h6 className='text-[14px] text-start leading-[27px] lg:text-[18px] lg:leading-[25px] font-400 w-full'>
                        Have questions? We would love to here from you! 
                    </h6>
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
                                <Label htmlFor="firstName" className='text-dark text-[16px] block font-medium'>
                                    First Name
                                </Label>
                                <Input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    placeholder='Enter your frist name' className=' w-[100%]  block'  
                                />
                            </div>
                            <div className='grid gap-2 w-full'>
                                <Label 
                                    htmlFor="lastname"
                                    className='text-dark text-[16px] block font-medium'>
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
                                className='text-dark text-[16px] block font-medium'>
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
                                className='text-dark text-[16px] block font-medium'>
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

                        <div>
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