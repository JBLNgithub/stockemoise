import React from 'react'
import { Link } from 'react-router-dom'
import getImageURL from '../utils/getImageURL'
import topThePage from '../utils/topThePage'
import { TbWriting } from 'react-icons/tb'
import { FaCalendar } from 'react-icons/fa'
import monthNames from '../utils/monthNames'


const ArticleTile = ({id, title, cover, type, date}) => {
  let link
  
  switch (type) {
    case 'concert':
      link = `/concerts/${id}`
      break
    case 'news':
      link = `/actualites/${id}`
      break
    case 'eventNews':
      link = `/actualites/${id}`
      break
    default:
      console.log('something went wrong with article tile')
      break
  }

  return (
    <>
        <Link
            to={link}
            onClick={topThePage}
            className='bg-blue-600 mb-6 md:mb-20 rounded-2xl text-neutral-200 hover:bg-blue-400 hover:text-neutral-800 col-span-2 md:col-span-1'
        >
            <img className='rounded-t-2xl' src={getImageURL(cover)} alt={'cover image'}  />
            <div className='m-3'>
              <h2 className='text-3xl font-bold'>{title}</h2>
              <h5 className='text-base ml-3'>
                {type === 'news' ? <TbWriting className='inline mr-1' /> : ''}
                {type === 'concert' || type === 'eventNews' ? <FaCalendar className='inline mr-1 mb-1' /> : ''}
                {date}
              </h5>
            </div>
        </Link>
    </>
  )
}

export default ArticleTile