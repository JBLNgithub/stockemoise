import React from 'react'
import logo from '../assets/images/stockemoiseLogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = (({isActive}) => {
    let activeClass = isActive ? ' bg-gray-900' : ''
    return (`text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 ${activeClass}`)
  })
  
  return (
    <nav className="bg-blue-800 border-b border-blue-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="Stockemoise"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >la Stockemoise
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/actualites"
                  className={linkClass}
                  >Actualités
                </NavLink>

                <NavLink
                  to="/harmonie"
                  className={linkClass}
                  >Harmonie
                </NavLink>

                <NavLink
                  to="/location-salle"
                  className={linkClass}
                  >Location Salle
                </NavLink>

                <NavLink
                  to="/stock-up"
                  className={linkClass}
                  >Stock'Up
                </NavLink>

                <NavLink
                  to="/cours-de-musique"
                  className={linkClass}
                  >Cours de Musique
                </NavLink>

                <NavLink
                  to="/location-instrument"
                  className={linkClass}
                  >Location Instrument
                </NavLink>

                <NavLink
                  to="/planning"
                  className={linkClass}
                  >Planning
                </NavLink>

                <NavLink
                  to="/contact"
                  className={linkClass}
                  >Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar