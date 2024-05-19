'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { CldImage } from 'next-cloudinary'

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { transformationTypes } from '@/constants'
import { IImage } from '@/lib/database/models/image.model'
import { formUrlQuery } from '@/lib/utils'

import { Button } from '../ui/button'
import { Search } from './Search'
import Empty from './Empty'

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[]
  totalPages?: number
  page: number
  hasSearch?: boolean
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === 'next' ? Number(page) + 1 : Number(page) - 1

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: 'page',
      value: pageValue,
    })

    router.push(newUrl, { scroll: false })
  }

  return (
    <>
      <div className='collection-heading'>
        <h2 className='h2-bold text-dark-600'>Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <ul className='collection-list'>
          {images.map((image) => (
            <Card image={image} key={image._id} />
          ))}
        </ul>
      ) : (
        <div className='collection-empty'>
          <Empty label='No Items' />
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className='mt-10'>
          <PaginationContent className='flex w-full'>
            <Button
              disabled={Number(page) <= 1}
              className='collection-btn'
              onClick={() => onPageChange('prev')}
            >
              <PaginationPrevious className='hover:bg-transparent hover:text-white' />
            </Button>

            <p className='flex-center p-16-medium w-fit flex-1'>
              {page} / {totalPages}
            </p>

            <Button
              className='button w-32 bg-purple-gradient bg-cover text-white'
              onClick={() => onPageChange('next')}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className='hover:bg-transparent hover:text-white' />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}

const iconColor: { [key: string]: string } = {
  'Restore Image': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
}

const Card = ({ image }: { image: IImage }) => {
  const transforationType =
    transformationTypes[image.transformationType as TransformationTypeKey]
  const IconComponent = transforationType.headerIcon

  return (
    <li>
      <Link
        href={`/transformations/${image._id}`}
        className='collection-card group'
      >
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading='lazy'
          className='h-52 w-full rounded-[10px] object-cover'
          sizes='(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw'
        />
        <div className='flex-between'>
          <p className='p-20-regular mr-3 line-clamp-1 text-dark-600 capitalize'>
            {image.title}
          </p>
          <IconComponent
            className={`group-hover:${iconColor[transforationType.title]}`}
          />
        </div>
      </Link>
    </li>
  )
}
