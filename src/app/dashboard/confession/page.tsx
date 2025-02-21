'use client'

import ConfessionCard from '@/components/dashboard/misc/ConfessionCard';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Confession } from '@/types/global';
import { useEffect, useState } from 'react';


function page() {
  const [confessions, setConfessions] = useState<Confession[]>([]);

  useEffect(() => {
    async function fetchConfessions() {
      const response = await fetch("/api/confessions");
      const data = await response.json();
      setConfessions(data);
      console.log(data)
    }
    fetchConfessions();
  }, []);

  return (
    <div className='flex flex-1 flex-col gap-4 py-4 pt-0'>
      <div className='grid auto-rows-min gap-4 lg:grid-cols-3'>
      </div>

      <div className='mt-4 space-y-4'>
        {/* scroll area */}
        <h1 className='text-3xl text-muted font-700'>Confessions</h1>
        <div className=' flex-1 bg-muted/50 lg:min-h-min'>
          <ScrollArea className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-3'>
              {confessions.map((confess) => {
                return (
                  <ConfessionCard 
                    key={confess.id} 
                    confess={confess}
                  />
                )
              })}
            </div>
          </ScrollArea>
        </div> 
      </div>
    </div>
  )
}

export default page