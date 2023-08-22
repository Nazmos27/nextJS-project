import Image from 'next/image'
import hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className='flex justify-between mx-40 items-center min-h-screen'>
      <div className='pr-44 space-y-6'>
        <h1 className='text-5xl pt-20 bg-gradient-to-t from-gray-100 bg-clip-text text-transparent'>Better design for your digital products</h1>
        <p className=''>Turning your idea into reality. We bring together the teams from the global tech industry.</p>
        <button className='bg-green-700 p-4 rounded-md font-bold'>See Our Works</button>
      </div>
      <Image src={hero}  width={350} height={350} alt='Display Image'></Image>
    </div>
  )
}
