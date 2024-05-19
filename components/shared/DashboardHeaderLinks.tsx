'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Image Restore': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  'Buy Credits': 'text-yellow-400',
}

const DashboardHeaderLinks = () => {
  return (
    <ul className='flex-center w-full gap-20'>
      {navLinks.slice(1, 5).map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className='flex-center flex-col gap-2'
        >
          <li className='flex-center w-fit rounded-full bg-white p-4'>
            <link.icon className={iconColor[link.label]} />
          </li>
          <p className='p-14-medium text-center text-white'>{link.label}</p>
        </Link>
      ))}
    </ul>
  )
}

export default DashboardHeaderLinks
