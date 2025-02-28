'use client'

import { VerifyForm } from "@/components/dashboard/misc/VerifyForm";
import { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>} className="max-h-screen flex justify-center items-center">
      <VerifyForm />
    </Suspense>
  )
}

export default page;