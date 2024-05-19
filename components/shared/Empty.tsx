import Image from 'next/image'

interface EmptyProps {
  label: string
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className='h-full p-12 flex flex-col items-center justify-center'>
      <div className='relative w-72'>
        <Image alt='Empty' width={288} height={288} src='/empty.png' />
      </div>
      <p className='text-muted-foreground text-sm text-center'>{label}</p>
    </div>
  )
}

export default Empty
