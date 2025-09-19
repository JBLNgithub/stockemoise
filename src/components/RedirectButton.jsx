import React from 'react'
import { Link } from 'react-router-dom'
import topThePage from '../utils/topThePage'

const RedirectButton = ({label='undefined', path}) => {
  return (
    <Link
        to={path}
        onClick={topThePage}
        className="bg-blue-800 hover:bg-blue-400 text-neutral-200 text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
        {label}
    </Link>
  )
}

export default RedirectButton