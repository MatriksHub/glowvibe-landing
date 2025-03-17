import Contact from '@/components/Contact'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Subscribe from '@/components/Subscribe'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
        <Contact />
        <Subscribe />
        <Footer />
    </div>
  )
}
