import React from 'react'
import RedirectButton from './RedirectButton'

const CommonPageHeader = ({children, cover, title}) => {
  return (
    <>
      <div>
        <img
          className='size-full object-cover rounded-2xl mb-20'
          src={cover}
          alt={`picture of ${title}`}
        />
      </div>

      <h1 className='text-5xl font-bold mb-10'>{title}</h1>

      {children}

      <div className='md:px-40'>
        <RedirectButton className='px-100' label='Contact' path='/contact' />
      </div>
    </>
  )
}

export default CommonPageHeader