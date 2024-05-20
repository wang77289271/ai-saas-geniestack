'use client'

import Image from 'next/image'
import LandingDemoTextCard from './LandingDemoTextCard'

const LandingHeroDemo = () => {
  return (
    <div className='hidden md:flex flex-row w-[90%] lg:w-[80%] max-w-[1440px] h-full mx-auto'>
      <div className='flex-1 flex flex-col items-end mr-12 mt-12'>
        <div className='flex flex-col justify-center items-center'>
          <LandingDemoTextCard title='Object to Recolor' text='T-shirt' />
          <LandingDemoTextCard
            title='Replacement Color'
            text='Dark Olive Green'
            className='mt-5'
          />
        </div>
        <div className='flex justify-center items-center mt-[180px]'>
          <LandingDemoTextCard title='Remove Object' text='Squirrel' />
        </div>
      </div>
      <div className='flex-1 flex justify-center'>
        <Image
          alt='Transformation Demo'
          src='/assets/images/demo-transformation.jpg'
          className='rounded-lg w-[500px]'
          width={500}
          height={719}
        />
      </div>
      <div className='flex md:hidden justify-center'>
        <Image
          alt='Transformation Demo Mobile'
          src='/assets/images/demo-mobile.jpg'
          className='rounded-lg'
          width={500}
          height={719}
        />
      </div>
    </div>
  )
}

export default LandingHeroDemo
