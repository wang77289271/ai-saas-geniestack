'use client'

import { gradientStyle, navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { getUserById } from '@/lib/actions/user.actions'
import { IUser } from '@/lib/database/models/user.model'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Image Restore': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  'Buy Credits': 'text-yellow-400',
}

const Sidebar = () => {
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
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-4'>
          <div className='relative w-6 h-6 mr-4'>
            <Image width={24} height={24} alt='Logo' src='/logo.png' />
          </div>
          <h1 className='text-2xl font-bold' style={gradientStyle}>
            GenieStack
          </h1>
        </Link>
        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient-2 text-white'
                        : 'text-zinc-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={link.route}>
                      <link.icon
                        className={
                          isActive ? 'text-white' : iconColor[link.label]
                        }
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient-2  text-white'
                        : 'text-zinc-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={link.route}>
                      <div
                        className={`flex flex-row w-full ${
                          link.label === 'Buy Credits' && 'justify-between'
                        }`}
                      >
                        <div className='flex flex-row gap-2'>
                          <link.icon className={iconColor[link.label]} />
                          {link.label}
                        </div>
                        {user && link.label === 'Buy Credits' && (
                          <div className='flex flex-row items-center'>
                            <Image
                              src='/assets/icons/coins.svg'
                              alt='coins'
                              width={20}
                              height={20}
                              className='size-5 mr-2'
                            />
                            {user.creditBalance}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                )
              })}

              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
