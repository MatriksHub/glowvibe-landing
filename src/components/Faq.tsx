import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const faqs = [
    {
      title: "1. What is AskTaboo?",
      description: "A platform for asking sensitive health and relationship questions anonymously.",
    },
    {
      title: "2. Is AskTaboo free ?",
      description: "Yes. The core features — anonymous questions and expert/community answers — are free.",
    },
    {
      title: "3. Who answers the questions?",
      description: " Licensed professionals, educators, and trained volunteers. They provide accurate and reliable information.",
    },
    {
        title: "4. Can I really stay anonymous?",
        description: "Absolutely!  Yes. No names, no photos, needed to ask a question. Your privacy is our priority.",
    },
   
    {
        title: "5. How can I report inappropriate content?",
        description: "If you see misinformation, harassment, or inappropriate content, you can report it using the &apos;Report&apos; button on any post or comment.",
    },
    
]

function Faq() {
  return (
    <div className='bg-neutral w-full h-auto pb-[100px]'>
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
