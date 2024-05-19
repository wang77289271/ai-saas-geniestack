import { Collection } from '@/components/shared/Collection'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'
import Link from 'next/link'
import React from 'react'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Image Restore': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  'Buy Credits': 'text-yellow-400',
}

const DashboardPage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1
  const searchQuery = (searchParams?.query as string) || ''

  const images = await getAllImages({ page, searchQuery })

  return (
    <>
      <section className='home'>
        <h1 className='home-heading mb-5 text-nowrap'>
          Unleash Creativity with GenieStack
        </h1>
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
      </section>
      <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default DashboardPage
