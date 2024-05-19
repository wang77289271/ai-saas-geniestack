import { Collection } from '@/components/shared/Collection'
import DashboardHeaderLinks from '@/components/shared/DashboardHeaderLinks'
import { getAllImages } from '@/lib/actions/image.actions'
import React from 'react'

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
        <DashboardHeaderLinks />
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
