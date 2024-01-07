
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-contain py-28'>
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className='flex flex-col justify-center gap-8'>
      <h1 className="h1-bold">Unlock the Future of Events</h1>
      <p className='p-regular-20 md:p-regurlar-24'>Join Us in Going Paperless and Embrace a Sustainable Tomorrow</p>
      <Button size="lg" asChild className='button w-full sm:w-fit'>
        <Link href="#events">Explore Now</Link>
      </Button>
        </div>
        <Image className='max-h-[90vh] object-contain object-center 2xl:max-h-[50vh]' src="/hero.png" width={2000} height={2000} alt='hero'/>
      </div>      
    </section>

    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <h2 className='h2-bold'>Discover What's Next <br /> Explore Upcoming Events</h2>
    <div className='flex w-full flex-col gap-5 md:flex-row'>
      Search
      CategoryFilter
    </div>
    </section>
    </>
  )
}
