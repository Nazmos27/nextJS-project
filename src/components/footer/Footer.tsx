import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center mx-10'>
      <div>
        <p>©All Rights Reserved To MD.Nazmos Sakib</p>
      </div>
      <div className='flex gap-4'>
        <Image src='/1.png' width={30} height={30} alt='fb'></Image>
        <Image src='/2.png' width={30} height={30} alt='insta'></Image>
        <Image src='/3.png' width={30} height={30} alt='twitter'></Image>
        <Image src='/4.png' width={30} height={30} alt='youtube'></Image>
      </div>
    </div>
  )
}

export default Footer