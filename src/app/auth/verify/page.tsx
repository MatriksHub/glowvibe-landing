'use client'


import { VerifyForm } from "@/components/dashboard/misc/VerifyForm";
import { motion } from "framer-motion";
import Image from "next/image";

function page() {
  
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
      }}
      className="flex min-h-svh w-full items-center justify-center p-6 md:p-10"
    >
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <div className="flex items-center gap-2 self-center font-medium">
          <Image 
            src="/glowvibecolor.png"
            alt="Logo"
            width={100}
            height={100}
          />

        </div>
        <VerifyForm />
      </div>
    </motion.section>
  )
}

export default page;