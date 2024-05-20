'use client'

import LandingHero from '@/components/shared/LandingHero'
import LandingNav from '@/components/shared/LandingNav'
import { gradientStyle } from '@/constants'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const poppinsTitle = Poppins({
  weight: '700',
  subsets: ['latin'],
})

const Home = () => {
  return (
    <div className='h-full'>
      <LandingNav />
      <LandingHero />
      <div>
        <section className='text-center py-36 px-4'>
          <h2
            className={cn(
              'text-2xl md:text-4xl font-bold mb-12',
              poppinsTitle.className
            )}
          >
            Enhance Your Visuals with Our <br />
            <span style={gradientStyle}>AI Image SaaS </span>
            Platform
          </h2>
          <p className='text-md md:text-lg w-[90%] lg:w-[60%] mx-auto text-dark-500'>
            Unlock the potential of our AI-powered image SaaS platform.
            Experience seamless transactions, advanced search, and creative AI
            features such as image restoration, recoloring, and object removal.
            Elevate your visual content effortlessly.
          </p>
          <div className='flex justify-center mt-12 p-4'>
            <Image
              alt='work space'
              src='/assets/images/landing_page_1.jpg'
              width={800}
              height={400}
            />
          </div>
        </section>
      </div>
      <footer className='w-full '>
        <hr className='w-[70%] mx-auto h-[1px] bg-gray-200' />
        <p className='text-center pt-2 pb-6 text-sm'>
          Created by{' '}
          <Link href='https://findyewang.com/' target='_blank' rel='noreferrer'>
            <span style={gradientStyle} className='font-semibold text-lg'>
              Ye Wang
            </span>
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Home
