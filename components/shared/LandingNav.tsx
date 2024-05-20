'use client'

import { gradientStyle } from '@/constants'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const LandingNav = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='pt-5 pb-3 bg-transparent'>
      <div className='flex items-center justify-between max-w-screen-xl mx-auto'>
        <Link href='/' className='flex items-center pl-3 mb-4'>
          <div className='relative w-6 h-6 mr-4'>
            <Image width={24} height={24} alt='Logo' src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold' style={gradientStyle}>
            GenieStack
          </h1>
        </Link>
        <div className='flex items-center gap-x-2'>
          <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
            <Button variant='outline' className='rounded-full'>
              <span className='px-2'>
                {isSignedIn ? 'Go to dashboard' : 'Sign in'}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default LandingNav
