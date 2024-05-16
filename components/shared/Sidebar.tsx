'use client'

import { gradientStyle, navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

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

const Sidebar = () => {
  const pathname = usePathname()
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
                        ? 'bg-purple-gradient text-white'
                        : 'text-zinc-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={link.route}>
                      <link.icon className={iconColor[link.label]} />
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
                        ? 'bg-purple-gradient text-white'
                        : 'text-zinc-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={link.route}>
                      <link.icon className={iconColor[link.label]} />
                      {link.label}
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
