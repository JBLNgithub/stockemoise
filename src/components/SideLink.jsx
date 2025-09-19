import React from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideLink = ({id, title="undefined", location="", day=0, month=0, year=0}) => {
  let date = !year ? '' : `${day}.${month}.${year}`

  return (
    <div className='mb-5'>
      <Link
        to={`/article/${id}`}
        className='hover:bg-blue-400 text-neutral-200 block rounded-xl'
      >
        {date}<br/>
        {title}<br/>
        {location == '' ? ('') :(<FaMapMarker className='inline mr-1 mb-1' />)}
        {location}
      </Link>
    </div>
  )
}

export default SideLink