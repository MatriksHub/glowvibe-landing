import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
    {
      title: "1. What is GlowVibe?",
      description: "GlowVibe is a safe, anonymous, and supportive platform where users can discuss sexual health, share experiences, and get expert advice without fear of stigma or judgment.",
    },
    {
      title: "2. Is GlowVibe free to use?",
      description: "Yes! GlowVibe offers free access to community discussions, expert-driven content, and anonymous support.",
    },
    {
      title: "3. How does GlowVibe protect my privacy?",
      description: "Your privacy is our priority. No real names, personal details, or tracking—everything is completely anonymous and secure.",
    },
    {
        title: "4. Can I ask questions anonymously?",
        description: "Absolutely! You can post questions, experiences, and discussions without revealing any personal information.",
    },
    {
        title: "5. Who answers my questions?",
        description: "Your questions can be answered by:",
        description2: "✅ Health professionals providing expert insights.",
        description3: "✅ Community members who share real-life experiences.",
    },
    {
        title: "6. How can I report inappropriate content?",
        description: "If you see misinformation, harassment, or inappropriate content, you can report it using the &apos;Report&apos; button on any post or comment.",
    },
    {
        title: "7.  What kind of topics can I discuss?",
        description: "GlowVibe covers a range of topics, including: Sexual health & wellness Relationships & intimacy Safe sex practices Personal experiences & advice",
    },
    {
        title: "8. How do I join the community?",
        description: "Simply download the app, create an account,  and start engaging with the community!",
    },
    {
        title: "9. Where can I download GlowVibe?",
        description: "You can find GlowVibe on the App Store (iOS) and Google Play Store (Android).",
    },
]

function Faq() {
  return (
    <div className='bg-shade w-full h-auto'>
        <div className='container mx-auto max-w-[95%] py-[100px] lg:py-[80px] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[85%] 3xl:max-w-[80%]'>
            <div className='grid gap-10'>
                <div className='grid text-center gap-4'>
                    <h5 className='text-[16px]'>
                        <span className=''></span> FAQ

                    </h5>
                    <h3>
                        <span className='text-primary'>Questions?</span> Look here.
                    </h3>
                </div>
                
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value="item-1">
                                <AccordionTrigger>
                                    {faq.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {faq.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq