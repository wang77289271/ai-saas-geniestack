'use client'

import { IImage } from '@/lib/database/models/image.model'
import { getImageSize } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const TransformationsMediaUploader = ({ image }: { image: IImage }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='h3-bold text-dark-600'>Original</h3>

      <Image
        width={getImageSize(image.transformationType, image, 'width')}
        height={getImageSize(image.transformationType, image, 'height')}
        src={image.secureURL}
        alt='image'
        className='transformation-original_image'
      />
    </div>
  )
}

export default TransformationsMediaUploader
