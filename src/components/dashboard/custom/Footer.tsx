import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000000] text-white h-[10vh] sm:h-[10vh] flex justify-center items-center'>
      <div className='container mx-auto'>
        <footer className="flex flex-col gap-20 lg:gap-20 lg:justify-between lg:items-center">
          <div className='flex items-center justify-center'>
            <p>
              © 2025 GlowVibe inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer