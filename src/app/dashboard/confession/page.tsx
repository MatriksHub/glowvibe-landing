'use client'

import ConfessionCard from '@/components/dashboard/misc/ConfessionCard';
// import { Card } from '@/components/ui/card'
import { ScrollArea } from "@/components/ui/scroll-area"
// import { useEffect, useState } from 'react';

const confessions = [
  {
    id: 1,
    username: "racksterly",
    confession: "Its's been five years, and I still think about him every single day. I pretend I've moved on, but the truth is, no one else has ever made me feel the way he did. Sometimes I wonder if he ever thinks about me, too… or if I was just another girl he used to know.",
  },
  {
    id: 2,
    username: 'neuf buns',
    confession: "My wife just told me she's pregnant, and I should be happy… but I'm terrified. My dad was never around, and I have no idea how to be a good father. I don’t want to mess up my kid’s life, but I feel like I’m already failing before I’ve even begun.",
    
  },
  {
    id: 3,
    username: 'palmer defroster',
    confession: "I laugh the loudest in the room, but when I get home, I cry myself to sleep. No one knows how much I’m struggling. I don’t even know how to ask for help without feeling like a burden.",
  },
  {
    id: 4,
    username: 'forensic gustapo',
    confession: "I cheated on the woman who loved me the most. It was a stupid, one-time mistake, and I hate myself for it every day. She doesn’t know… and I don’t know if I should tell her. I want to, but I know it will break her heart.",
  },
  {
    id: 5,
    username: 'luppe pinchacho',
    confession: "I'm in love with someone my family would never accept. We've been hiding our relationship for almost two years, and it's exhausting. I don’t know how much longer I can live like this, but I also can’t imagine my life without them.",
  },
  {
    id: 6,
    username: 'luppe pinchacho',
    confession: "I think my best friend is in love with me, but I don’t feel the same way. She’s amazing, and I don’t want to lose her, but I can’t force myself to love her back. How do I tell her without breaking her heart?",
  },
  {
    id: 7,
    username: 'luppe pinchacho',
    confession: "I was the other woman. I never meant for it to happen, but it did. I told myself he would leave her for me, but he never did. Now I’m left with nothing but regret, and I know I’ll always be the villain in this story.",
  },
  {
    id: 8,
    username: 'luppe pinchacho',
    confession: "I feel like I’m living someone else’s life. I go to work, I smile, I function… but inside, I feel empty. I don’t even know what makes me happy anymore. I just exist, and I don’t know how to change that.",
  },
]


function page() {
  // const [confessions, setConfessions] = useState([]);

  // useEffect(() => {
  //   async function fetchConfessions() {
  //     const response = await fetch("/api/confessions");
  //     const data = await response.json();
  //     setConfessions(data);
  //     console.log(data)
  //   }
  //   fetchConfessions();
  // }, []);

  return (
    <div className='flex flex-1 flex-col gap-4 py-4 pt-0'>
      <div className='grid auto-rows-min gap-4 lg:grid-cols-3'>
        {/* <Card>


        </Card> */}
      </div>

      <div className='mt-4 space-y-4'>
        {/* scroll area */}
        <h1 className='text-3xl text-muted font-700'>Confessions</h1>
        <div className=' flex-1 bg-muted/50 lg:min-h-min'>
          <ScrollArea className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {confessions.map((confession) => (
                <ConfessionCard 
                  key={confession.id} 
                   {...confession} 
                />
              ))}
            </div>
          </ScrollArea>
        </div> 
      </div>
    </div>
  )
}

export default page