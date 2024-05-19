import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

import Header from '@/components/shared/Header'
import TransformedImage from '@/components/shared/TransformedImage'
import { Button } from '@/components/ui/button'
import { getImageById } from '@/lib/actions/image.actions'
import { DeleteConfirmation } from '@/components/shared/DeleteConfirmation'
import TransformationsMediaUploader from '@/components/shared/TransformationsMediaUploader'

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth()

  const image = await getImageById(id)

  return (
    <>
      <Header title={image.title} />

      <section className='mt-5 flex flex-wrap gap-4'>
        <div className='p-14-medium md:p-16-medium flex gap-2'>
          <p className='text-dark-600'>Transformation:</p>
          <p className=' capitalize text-purple-400'>
            {image?.transformationType}
          </p>
        </div>

        {image?.prompt && (
          <>
            <p className='hidden text-dark-400/50 md:block'>&#x25CF;</p>
            <div className='p-14-medium md:p-16-medium flex gap-2 '>
              <p className='text-dark-600'>Prompt:</p>
              <p className=' capitalize text-purple-400'>{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className='hidden text-dark-400/50 md:block'>&#x25CF;</p>
            <div className='p-14-medium md:p-16-medium flex gap-2'>
              <p className='text-dark-600'>Color:</p>
              <p className=' capitalize text-purple-400'>{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className='hidden text-dark-400/50 md:block'>&#x25CF;</p>
            <div className='p-14-medium md:p-16-medium flex gap-2'>
              <p className='text-dark-600'>Aspect Ratio:</p>
              <p className=' capitalize text-purple-400'>{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>

      <section className='mt-10 border-t border-dark-400/15'>
        <div className='transformation-grid'>
          {/* MEDIA UPLOADER */}
          <TransformationsMediaUploader image={image} />

          {/* TRANSFORMED IMAGE */}
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className='mt-4 space-y-4 flex w-full flex-col gap-1'>
            <Button
              asChild
              type='button'
              className='py-4 px-6 w-full h-[40px] md:h-[50px] rounded-full'
              variant='gradient'
            >
              <Link href={`/transformations/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
    </>
  )
}

export default ImageDetails
