import { redirect } from 'next/navigation'

import Header from '@/components/shared/Header'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import CreditList from '@/components/shared/CreditList'

const Credits = async () => {
  const { userId } = auth()

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId)

  return (
    <>
      <Header
        title='Buy Credits'
        subtitle='Choose a credit package that suits your needs!'
      />

      <section>
        <CreditList user={user} />
      </section>
    </>
  )
}

export default Credits
