import Image from 'next/image'
import React from 'react'

const Category = ({ params }) => {
  console.log(params);//print params object like that {category:'illustrations'}
  return (
    <div>
      <h1>{params.category}</h1>
      <div className='space-y-20'>
        <div className='grid grid-flow-row grid-cols-2 items-center gap-6'>
          <div className=''>
            <h1 className='text-2xl font-semibold my-4'>Creative Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur velit enim accusamus minus numquam nesciunt, sunt odio quam dolores animi aliquam eaque? Quod perferendis fugit repellat laudantium vero quidem!</p>
            <button className='bg-green-700 px-4 py-3 my-4 rounded-md font-bold'>See More</button>
          </div>
          <div className=''>
            <Image src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} width={400} alt='abstract art'></Image>
          </div>
        </div>
        <div className='grid grid-cols-2 items-center gap-6'>
          <div className=''>
            <h1 className='text-2xl font-semibold my-4'>Creative Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur velit enim accusamus minus numquam nesciunt, sunt odio quam dolores animi aliquam eaque? Quod perferendis fugit repellat laudantium vero quidem!</p>
            <button className='bg-green-700 px-4 py-3 my-4 rounded-md font-bold'>See More</button>
          </div>
          <div className='order-first'>
            <Image src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} width={400} alt='abstract art'></Image>
          </div>
        </div>
        <div className='grid grid-flow-row grid-cols-2 items-center gap-6'>
          <div className=''>
            <h1 className='text-2xl font-semibold my-4'>Creative Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur velit enim accusamus minus numquam nesciunt, sunt odio quam dolores animi aliquam eaque? Quod perferendis fugit repellat laudantium vero quidem!</p>
            <button className='bg-green-700 px-4 py-3 my-4 rounded-md font-bold'>See More</button>
          </div>
          <div className=''>
            <Image src="https://images.pexels.com/photos/1070527/pexels-photo-1070527.jpeg?auto=compress&cs=tinysrgb&w=600"  height={300} width={400} alt='abstract art'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category