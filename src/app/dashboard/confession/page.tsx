'use client'

import ConfessionCard from '@/components/dashboard/misc/confessions/ConfessionCard';
import { Confession } from '@/types/global';
import { useEffect, useState } from 'react';


function ConfessionPage() {
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
    <div className='flex py-4 pt-0'>
      <div className='space-y-4'>
        <div className='flex-1 bg-muted/50'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 xl:grid-cols-3 2xl:grid-cols-5 3xl:grid-cols-6'>
              {confessions.map((confess) => {
                return (
                  <ConfessionCard 
                    key={confess.id} 
                    confess={confess}
                  />
                )
              })}
            </div>
        </div> 
      </div>
    </div>
  )
}

export default ConfessionPage