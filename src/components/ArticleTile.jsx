import React from 'react'
import { Link } from 'react-router-dom'
import getImageURL from '../utils/getImageURL'
import topThePage from '../utils/topThePage'

const ArticleTile = ({id, title, cover, imageAlt, type}) => {
  let link
  
  switch (type) {
    case '0':
      link = `/concerts/${id}`
      break
    case '1':
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
            className='bg-blue-600 mb-20 rounded-2xl hover:bg-blue-400'
        >
            <img className='rounded-t-2xl' src={getImageURL(cover)} alt={imageAlt}  />
            <h2 className='text-3xl font-bold m-3 text-neutral-200'>{title}</h2>
        </Link>
    </>
  )
}

export default ArticleTile