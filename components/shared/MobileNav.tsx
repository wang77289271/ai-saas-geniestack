'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { gradientStyle, navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Image Restore': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  //   Profile: 'text-purple-600',
  'Buy Credits': 'text-yellow-400',
}

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <header className='header'>
      <Link href='/dashboard' className='flex items-center pl-3'>
        <div className='relative w-6 h-6 mr-4'>
          <Image width={24} height={24} alt='Logo' src='/logo.png' />
        </div>
        <h1 className='text-2xl font-bold' style={gradientStyle}>
          GenieStack
        </h1>
      </Link>

      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image
                src='/assets/icons/menu.svg'
                alt='menu'
                width={32}
                height={32}
                className='cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <>
                <div className='flex items-center pl-3'>
                  <div className='relative w-6 h-6 mr-4'>
                    <Image width={24} height={24} alt='Logo' src='/logo.png' />
                  </div>
                  <h1 className='text-2xl font-bold' style={gradientStyle}>
                    GenieStack
                  </h1>
                </div>

                <ul className='header-nav_elements'>
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (
                      <li
                        className={`${
                          isActive && 'gradient-text'
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className='sidebar-link cursor-pointer'
                          href={link.route}
                        >
                          <link.icon className={iconColor[link.label]} />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className='button bg-purple-gradient bg-cover'>
            <Link href='/sign-in'>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
