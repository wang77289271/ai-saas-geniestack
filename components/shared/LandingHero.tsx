'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Typewriter from './TypeWriter'
import LandingHeroDemo from './LandingHeroDemo'

const poppinsTitle = Poppins({
  weight: '700',
  subsets: ['latin'],
})
const poppinsSubtitle = Poppins({
  weight: '600',
  subsets: ['latin'],
})

const LandingHero = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='font-bold pt-36 text-center space-y-5 bg-landing-hero bg-cover bg-no-repeat relative'>
      <div className='min-h-[38vh] md:min-h-[55vh]'>
        <div className='transition-all space-y-5 font-extrabold mb-12'>
          <h1
            className={cn(
              ' text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              poppinsTitle.className
            )}
          >
            Unleashing AI Magic on Images
          </h1>
          <div
            className={cn(
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-normal font-semibold',
              poppinsSubtitle.className
            )}
          >
            <Typewriter
              words={[
                'Image Restore  ',
                'Generative Fill  ',
                'Object Remove  ',
                'Object Recolor  ',
                'Background Remove  ',
              ]}
              typingSpeed={120}
              containerHeight='36px'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
          <Link href={isSignedIn ? '/dashboard' : 'sign-in'}>
            <Button
              variant='gradient'
              className='md:text-base p-4 md:p-6 rounded-full font-medium'
            >
              Starting Generating for Free
            </Button>
          </Link>
          <Link
            href='https://github.com/wang77289271/ai-saas-geniestack'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              variant='default'
              className='md:text-base p-4 md:p-6 rounded-full font-medium'
            >
              <span>
                <Image
                  src='/github-mark-white.svg'
                  width={18}
                  height={18}
                  alt='github'
                  className='mr-3'
                />
              </span>
              Github
            </Button>
          </Link>
        </div>
        <div className='text-sm md:text-lg font-light text-zinc-400 mt-2'>
          Unlock the Power of Imagery with the AI Image Platform
        </div>
      </div>
      <LandingHeroDemo />
    </div>
  )
}

export default LandingHero
