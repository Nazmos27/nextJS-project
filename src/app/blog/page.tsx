import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col space-y-20'>
      <Link href="/blog/testId">
        <div className='flex mx-20'>
          <Image src="https://blog.strategiccoach.com/wp-content/uploads/2021/01/Imposter-Syndrome_Multiplier-Mindset-Blog.png" alt='imposter syndrome' height={250} width={350} ></Image>
          <div>
            <h1 className='text-3xl font-semibold text-green-600 px-20 my-3'>Imposter Syndrome</h1>
            <p className='text-sm px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto quaerat excepturi et illo sed sequi atque aperiam rerum amet, ab perspiciatis illum rem modi veritatis animi, nisi accusantium nam? Cum impedit, sint quibusdam fuga maxime quidem ipsam vel quo incidunt, commodi nesciunt quis cupiditate recusandae veritatis error natus eius deleniti non iure, repellat voluptate labore? Nostrum sed perspiciatis accusantium porro. Officia voluptas in eligendi explicabo dicta aut quo! Repudiandae sequi corrupti placeat, eligendi suscipit, ad error magni ducimus dolore.<span className='text-blue-500'>...see more</span></p>
          </div>
        </div>
      </Link>
      <Link href="/blog/testId">
        <div className='flex mx-20'>
          <Image src="https://i.ytimg.com/vi/anIV3poQBgk/maxresdefault.jpg" alt='imposter syndrome' height={250} width={350} ></Image>
          <div>
            <h1 className='text-3xl font-semibold text-green-600 px-20 my-3'>Stockholm Syndrome</h1>
            <p className='text-sm px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto quaerat excepturi et illo sed sequi atque aperiam rerum amet, ab perspiciatis illum rem modi veritatis animi, nisi accusantium nam? Cum impedit, sint quibusdam fuga maxime quidem ipsam vel quo incidunt, commodi nesciunt quis cupiditate recusandae veritatis error natus eius deleniti non iure, repellat voluptate labore? Nostrum sed perspiciatis accusantium porro. Officia voluptas in eligendi explicabo dicta aut quo! Repudiandae sequi corrupti placeat, eligendi suscipit, ad error magni ducimus dolore.<span className='text-blue-500'>...see more</span></p>
          </div>
        </div>
      </Link>
      <Link href="/blog/testId">
        <div className='flex mx-20'>
          <Image src="https://www.wondriumdaily.com/wp-content/uploads/2022/05/The-Placebo-Effect_QBS_Featured.jpg" alt='imposter syndrome' height={250} width={350} ></Image>
          <div>
            <h1 className='text-3xl font-semibold text-green-600 px-20 my-3'>Placeboo Effect</h1>
            <p className='text-sm px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto quaerat excepturi et illo sed sequi atque aperiam rerum amet, ab perspiciatis illum rem modi veritatis animi, nisi accusantium nam? Cum impedit, sint quibusdam fuga maxime quidem ipsam vel quo incidunt, commodi nesciunt quis cupiditate recusandae veritatis error natus eius deleniti non iure, repellat voluptate labore? Nostrum sed perspiciatis accusantium porro. Officia voluptas in eligendi explicabo dicta aut quo! Repudiandae sequi corrupti placeat, eligendi suscipit, ad error magni ducimus dolore.<span className='text-blue-500'>...see more</span></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Blog