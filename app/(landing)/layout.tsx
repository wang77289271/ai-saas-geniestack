import React, { ReactNode } from 'react'

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='h-full overflow-auto'>
      <div className='mx-auto h-full w-full'>{children}</div>
    </main>
  )
}

export default LandingPageLayout
