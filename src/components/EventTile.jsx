import React from 'react'
import monthNames from '../utils/monthNames'
import { FaCalendar } from 'react-icons/fa'
import {FaMapMarker} from 'react-icons/fa'


const EventTile = ({event}) => {
  return (
    <section className='text-center bg-blue-600 text-neutral-200 rounded-2xl mt-15 p-5'>
        <h3 className='text-3xl font-bold mb-3'>
            <FaCalendar className='inline mr-1 mb-2' />
            Informations
        </h3>
        <p className='my-2'>Le concert aura lieu le :</p>
        <p className='bg-indigo-50 text-neutral-800 rounded-2xl py-1 font-bold'>{event.dateEvent}</p>
        <p className='my-2'>et se déroulera à :</p>
        <p className='bg-indigo-50 text-neutral-800 rounded-2xl py-1 font-bold'>
            <FaMapMarker className='inline mr-1 mb-1' />
            {'event.location'} ({'street'}, {'number'} - {'codePostal'} {'city'})
        </p>
    </section>
  )
}

export default EventTile