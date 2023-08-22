import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='m-20'>
        <h1 className='text-5xl font-bold'>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout