import React from 'react'
import RedirectButton from './RedirectButton'

const SideCard = ({children, id, title='undefined', buttonLabel, path}) => {
  return (
    <section className='bg-blue-600 mb-5 p-5 rounded-2xl text-neutral-200'>
      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
          {children}
        <RedirectButton label={buttonLabel} path={path}/>
      </div>
    </section>
  )
}

export default SideCard