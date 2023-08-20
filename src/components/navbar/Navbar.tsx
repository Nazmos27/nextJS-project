import Link from 'next/link'
import React from 'react'

const links = [
    {
        id: 1,
        url: '/',
        title: "Home"
    },
    {
        id: 2,
        url: '/about',
        title: "About",
    },
    {
        id: 3,
        url: "/contact",
        title: "Contact",
    },
    {
        id: 4,
        url: '/blog',
        title: "Blog"
    },
    {
        id: 5,
        url: "/dashboard",
        title: "Dashboard"
    },
    {
        id: 6,
        url: '/portfolio',
        title: "Portfolio"
    }
]

const Navbar = () => {
    return (
        <div>
            
            <div className='flex justify-between m-10'>
            <Link href="/">Lamamia</Link>
                <div>
                {
                    links.map((link) =><Link className='m-4' key={link.id} href={link.url}>{link.title}</Link>)
                }
                </div>
            </div>
        </div>

    )
}

export default Navbar