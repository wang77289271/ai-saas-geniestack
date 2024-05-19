import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const AddTransformationPage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth()
  // const transformation = transformationTypes[type]

  if (!userId) redirect('/sign-in')
  const user = await getUserById(userId)

  return (
    <>
      <Header type={type} />
      <section className='mt-10'>
        <TransformationForm
          action='Add'
          userId={user._id}
          type={type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationPage
