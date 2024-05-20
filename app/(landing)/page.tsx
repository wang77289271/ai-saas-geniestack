import LandingHero from '@/components/shared/LandingHero'
import LandingNav from '@/components/shared/LandingNav'

const Home = () => {
  return (
    <div className='h-full'>
      <LandingNav />
      <LandingHero />
    </div>
  )
}

export default Home
