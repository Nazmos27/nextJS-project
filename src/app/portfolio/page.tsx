import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className=''>
      <h1 className='text-2xl my-4 font-semibold'>Choose A Gallery</h1>
      <div className='flex gap-8'>
        <Link href="/portfolio/illustrations" className="h-80 w-64 pl-20 bg-[url('/illustration.png')] hover:text-[#53c28b] bg-cover border-white border-2"><span className='absolute -bottom-10 text-2xl font-semibold  '>Illustrations</span></Link>
        <Link href="/portfolio/websites" className="h-80 w-64 pl-20 border-white border-2 bg-[url('/websites.jpg')] hover:text-[#53c28b] bg-cover"><span className='absolute -bottom-10 text-2xl font-semibold  '>Websites</span></Link>
        <Link href="/portfolio/applications" className="h-80 w-64 pl-20 border-white border-2 bg-[url('/apps.jpg')] hover:text-[#53c28b] bg-cover"><span className='absolute -bottom-10 text-2xl font-semibold  '>Applications</span></Link>
      </div>
    </div>
  )
}

export default Portfolio