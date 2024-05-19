'use client'

import { transformationTypes } from '@/constants'

const iconColor: { [key: string]: string } = {
  Dashboard: 'text-sky-500',
  'Restore Image': 'text-pink-700',
  'Generative Fill': 'text-orange-700',
  'Object Remove': 'text-emerald-500',
  'Object Recolor': 'text-indigo-600',
  'Background Remove': 'text-yellow-500',
  'Buy Credits': 'text-yellow-400',
}

const Header = ({
  title,
  subtitle,
  type,
}: {
  title?: string
  subtitle?: string
  type?: TransformationTypeKey
}) => {
  const transformation = transformationTypes[type!]
  const transformTitle = transformation?.title
  const transformSubtitle = transformation?.subTitle
  const Icon = transformation?.headerIcon
  return (
    <>
      <div className='flex flex-row whitespace-nowrap items-center'>
        {Icon && (
          <div className='mr-4'>
            <Icon
              width={32}
              height={32}
              className={iconColor[transformTitle]}
            />
          </div>
        )}
        <h2 className='h2-bold text-dark-600'>
          {title ? title : transformTitle}
        </h2>
      </div>
      {subtitle && (
        <p className='p-16-regular mt-4'>
          {subtitle ? subtitle : transformSubtitle}
        </p>
      )}
    </>
  )
}

export default Header
