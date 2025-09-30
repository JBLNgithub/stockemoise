import React from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import getBaseLinkType from '../utils/getBaseLinkType'
import monthNames from '../utils/monthNames'


const SideLink = ({type, id, title, location, day, month, year}) => {

  return (
    <div className='mb-1'>
      <Link
        to={`${getBaseLinkType(type)}${id}`}
        className='hover:bg-blue-400 text-neutral-200 hover:text-neutral-800 block rounded-xl px-2 py-1'
      >
        {type == '1' ? '' : `${day} ${monthNames[month].short} ${year}`}
        {type == '1' ? '' : <br/>}
        {title}
        {type == '1' ? '' : <br/>}
        {type == '1' ? '' :<FaMapMarker className='inline mr-1 mb-1' />}
        {type == '1' ? '' : location}
      </Link>
    </div>
  )
}

export default SideLink