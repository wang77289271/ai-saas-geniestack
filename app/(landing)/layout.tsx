import React, { ReactNode } from 'react'

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='h-full min-h-[100vh] overflow-auto'>
      <div className='mx-auto h-full w-full'>{children}</div>
    </main>
  )
}

export default LandingPageLayout
