import HeroCarousel from '@/components/boxes_sections/carousel/HeroCarousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='hero_section  overflow-x-hidden '>
       <HeroCarousel/>
      </div>
    </main>
  )
}
