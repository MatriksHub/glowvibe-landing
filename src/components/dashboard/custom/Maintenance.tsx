
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHome } from 'react-icons/bi'

function Maintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-10 text-center px-6">
        <div>
            <Image 
                src='/glowvibecolor.png'
                alt='glow vibe logo'
                width={100}
                height={100}
            />
        </div>

        <div className='flex flex-col items-center justify-center bg-gray-50 gap-6 text-center'>
            <h1 className="text-4xl font-bold text-gray-800">🚧 We&apos;re Under Maintenance 🚧</h1>
            <p className="mt-4 text-lg text-gray-600">
                We&apos;re making improvements to serve you better. Please check back soon!
            </p>
            <Link href='/dashboard' className="mt-6 flex items-center font-bold">
                <BiHome /> Back to Home
            </Link>
        </div>
    </div>
  )
}

export default Maintenance