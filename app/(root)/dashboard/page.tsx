import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default DashboardPage
