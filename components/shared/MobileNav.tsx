'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { gradientStyle, navLinks } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { IUser } from '@/lib/database/models/user.model'
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Image Restore': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  Profile: 'text-gray-600',
  'Buy Credits': 'text-yellow-400',
}

const MobileNav = () => {
  const pathname = usePathname()
  const [user, setUser] = useState<IUser | null>(null)

  const { userId } = useAuth()

  useEffect(() => {
    if (!userId) redirect('/sign-in')
    const getUser = async () => {
      setUser(await getUserById(userId))
    }
    getUser()
  }, [userId])

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
                <SheetClose asChild>
                  <Link href='/dashboard' className='flex items-center pl-3'>
                    <div className='relative w-6 h-6 mr-4'>
                      <Image
                        width={24}
                        height={24}
                        alt='Logo'
                        src='/logo.png'
                      />
                    </div>
                    <h1 className='text-2xl font-bold' style={gradientStyle}>
                      GenieStack
                    </h1>
                  </Link>
                </SheetClose>

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
                        <SheetClose asChild>
                          <Link
                            className='sidebar-link cursor-pointer'
                            href={link.route}
                          >
                            <link.icon className={iconColor[link.label]} />
                            {link.label}
                          </Link>
                        </SheetClose>
                      </li>
                    )
                  })}
                  {user && (
                    <li className='flex flex-row items-center ml-4 bg-gray-100 px-5 py-2 rounded-full'>
                      <p className='font-semibold text-sm text-gray-700 mr-3'>
                        Credits Available:{' '}
                      </p>
                      <Image
                        src='/assets/icons/coins.svg'
                        alt='coins'
                        width={20}
                        height={20}
                        className='size-5 mr-2'
                      />
                      <p className='font-semibold text-sm text-gray-700'>
                        {user.creditBalance}
                      </p>
                    </li>
                  )}
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
