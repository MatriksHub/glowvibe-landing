import React from 'react'

function Footer() {
  return (
    <div className='bg-[#f9f9f9] h-[70vh] flex justify-center items-center lg:h-[50vh]'>
      <div className='container mx-auto'>
        <footer className="row-start-3 flex gap-10 flex-wrap items-center justify-center">
          <div className='grid grid-cols-3 gap-20 lg:grid-cols-3'>
            <div >
              <h3>
                glowvibes
              </h3>
              <p>
                Empowering Conversations, Breaking Stigmas.
              </p>
            </div>

            <div className=''>
              <h3>
                Contact Us:
              </h3>
              <p>
                support@glowvibes.com
              </p>
            </div>

            <div className=''>
              <h3>
                Follow us on social media
              </h3>
            </div>
          </div>

          <p>
            © 2025 GlowVibe inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer