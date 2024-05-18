import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      Home
      <Button asChild>
        <Link href='/dashboard'>Go to Dashboard</Link>
      </Button>
    </div>
  )
}

export default Home
