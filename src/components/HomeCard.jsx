import React from 'react'
import getImageURL from '../utils/getImageURL'
import RedirectButton from './RedirectButton'

const HomeCard = ({children, title='Title is Undifined', description1='description is Undifined', description2='', image='placeHolder.png', imageAlt='undifined', path}) => {

  return (
    <section className='bg-blue-600 mb-20 rounded-2xl'>
        <div className='grid grid-cols-3 gap-0'>
            <article className='col-span-3 md:col-span-1 p-5 text-neutral-200 text-center'>
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className='text-sm'>
                    {description1}
                    <br className='mb-5' />
                    {description2}
                </p>
                <RedirectButton label="plus d'infos" path={path} />
            </article>

            <aside  className='col-span-3 md:col-span-2'>
                <img
                    className='size-full object-cover rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl'
                    src={getImageURL(image)}
                    alt={imageAlt}
                    />
            </aside>
        </div>
    </section>
  )
}

export default HomeCard