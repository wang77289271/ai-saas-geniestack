'use client'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'

const LandingDemoTextCard = ({
  title,
  text,
  className,
}: {
  title?: string
  text: string
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col w-[320px]', className)}>
      <label className='text-left text-md font-medium ml-1 mb-2 text-[#7986ac]'>
        {title}
      </label>
      <Input
        type='text'
        value={text}
        readOnly
        className='border border-gray-300 rounded-xl px-6 py-7 w-full font-normal text-md'
      />
    </div>
  )
}

export default LandingDemoTextCard
