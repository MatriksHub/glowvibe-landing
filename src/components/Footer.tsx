
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoInstagram, BiLogoTelegram, BiLogoTiktok, BiLogoTwitter } from 'react-icons/bi'

const SOCIAL_LINKS = [
  { 
    name: "Instagram", 
    icon: "instagram", 
    url: "https://www.instagram.com/glowvibeapp/" 
  },
  { 
    name: "TikTok", 
    icon: "tiktok", 
    url: "https://www.tiktok.com/@glowvibeapp" 
  },
  { 
    name: "Telegram", 
    icon: "telegram", 
    url: "https://t.me/glowvibeapp" 
  },
  { 
    name: "Twitter", 
    icon: "twitter", 
    url: "https://x.com/glowvibe_app" 
  },
]

function Footer() {
  return (
    <div className='bg-[#242424] text-white h-full flex justify-center items-center'>
      <div className='container mx-auto max-w-[95%] py-[50px] lg:py-[50px] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[90%] 3xl:max-w-[85%]'>
        <footer className="flex flex-col gap-14 lg:gap-14">
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-14'>
            {/* logo */}
            <div className='flex flex-col gap-2'>
              <div>
                <Link href='/'>
                  <Image 
                    src='/logowhite.png'
                    alt='askTaboo logo'
                    width={500}
                    height={100}
                    className='h-[100px] w-[200px] lg:w-[150px] lg:h-[100px]'
                  />
                </Link>
              </div>
              <p className='text-[14px]'>
                For everything you were too afraid to ask at home, too embarased to ask at school, or that was just too hard to ask a partner.
              </p>
            </div>
            
            {/* Quick links */}
            <div className='flex flex-col gap-6'>
              <h4 className='font-semibold text-[20px] text-white'>
                Quick Links
              </h4>

              <ul className='flex flex-col items-start text-[14px] justify-start gap-6'>
                <li className='capitalize'>
                  <Link href='/' legacyBehavior>
                    <a >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='#about' legacyBehavior>
                    <a target='_blank'>
                      About
                    </a>
                  </Link>
                </li>

                <li className='capitalize'>
                  <Link href='https://erocraves.com' legacyBehavior>
                    <a target='_blank'>
                      Shop
                    </a>
                  </Link>
                </li>

                <li className='capitalize'>
                  <Link href='/contact' legacyBehavior>
                    <a >
                      Contact
                    </a>
                  </Link>
                </li>
                {/* <li className='capitalize'>
                  <Link href='/privacy-policy' legacyBehavior>
                    <a target='_blank' className='text-white/50 text-[14px]'>
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='/terms-of-use' legacyBehavior>
                    <a target='_blank' className='text-white/50 text-[14px]'>
                      Terms of use
                    </a>
                  </Link>
                </li>
                <li className='capitalize'>
                  <Link href='/content-moderation-policy' legacyBehavior>
                    <a target='_blank'className='text-white/50 text-[14px]'>
                      Content Moderation Policy
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Social media */}
            <div className='flex flex-col text-[14px] gap-6'>
              <h4 className='font-semibold text-[20px] text-white'>
                Follow Us
              </h4>

              <ul className='grid gap-6'>
                {SOCIAL_LINKS.map((link) => (
                  <li 
                    key={link.name} 
                    className='flex items-center gap-2 list-disc'
                  >
                    <h4>
                      {link.icon === "instagram" && 
                        <BiLogoInstagram className='text-[25px]' />
                      }

                      {link.icon === "tiktok" && 
                        <BiLogoTiktok className='text-[25px]' />
                      }

                      {link.icon === "telegram" && 
                        <BiLogoTelegram className='text-[25px]' />
                      }

                      {link.icon === "twitter" && 
                        <BiLogoTwitter className='text-[25px]' />
                      }

                    </h4>

                    <Link 
                      href={link.url} 
                      target='_blank' 
                      rel='noreferrer'
                      className='text-white underline'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* coming soon  */}
            <div className='flex flex-col gap-6'>
                <h3 className='font-semibold text-[20px] text-white'>
                  Download the App
                </h3>

                <div className='flex flex-row  items-start gap-6 lg:flex-col'>
                  <Link href='/'>
                    <Image 
                      src='/GetItOnGooglePlay.png'
                      alt='google store button'
                      width={100}
                      height={100}
                    />
                  </Link>

                  <Link href='/'>
                    <Image 
                      src='/App_Store_Badge.svg'
                      alt='app store button'
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
            </div>
          </div>

          <div className='w-full border-t border-shade pt-[20px] flex flex-col items-center gap-6 lg:justify-between lg:items-center lg:flex-row'>
            <p className='text-[14px] text-center lg:text-end'>
              © 2025 AskTaboo inc. All rights reserved.
            </p>

            <ul className='flex flex-row text-center gap-6 lg:text-end'>
              <li className='capitalize'>
                <Link href='/privacy-policy' legacyBehavior>
                  <a target='_blank' className='text-white/50 text-[12px] underline'>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li className='capitalize'>
                <Link href='/terms-of-use' legacyBehavior>
                  <a target='_blank' className='text-white/50 text-[12px] underline'>
                    Terms of use
                  </a>
                </Link>
              </li>
              <li className='capitalize'>
                <Link href='/content-moderation-policy' legacyBehavior>
                  <a target='_blank'className='text-white/50 text-[12px] underline'>
                    Content Moderation Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
