import React from 'react'
import logo from '../assets/images/stockemoiseLogo.png'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import topThePage from '../utils/topThePage';

const TempNavbar = () => {
  const linkClass = (({isActive}) => {
    let activeClass = isActive ? ' bg-gray-900' : ''
    return (`hover:bg-gray-800 rounded-none lg:rounded-md px-3 py-2 border-b-2 lg:border-y-0 border-black ${activeClass}`)
  })

  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle("hidden")
  }

  function navClick() {
    toggleMenu()
    topThePage()
  }
  
  return (
    <nav className="bg-blue-800 border-b border-blue-900 text-neutral-200">
        <div className='container m-auto flex justify-between items-center h-20'>
            <NavLink className="flex flex-shrink-0 mr-4" to="/">
                <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="Stockemoise"
                />
                <span className="text-2xl font-bold ml-2">
                    la Stockemoise
                </span>
            </NavLink>

            <div className='nav-links hidden lg:block absolute lg:static bg-blue-800 mt-100 lg:mt-0 w-full lg:w-auto'>
                <ul className='flex lg:flex-row flex-col gap-4 my-4 items-center'>
                    <li>
                        <NavLink className={linkClass} to='/actualites' onClick={navClick}>
                            Actualités
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink className={linkClass} to='/harmonie' onClick={navClick}>
                            Harmonie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/location-salle' onClick={navClick}>
                            Location Salle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/stock-up' onClick={navClick}>
                            Stock'Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/cours-de-musique' onClick={navClick}>
                            Cours de Musique
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/location-instrument' onClick={navClick}>
                            Location Instrument
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/planning' onClick={navClick}>
                            Planning
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to='/contact' onClick={navClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <FiMenu
                    onClick={toggleMenu} 
                    className='flex items-center cursor-pointer lg:hidden mr-8' 
                />
            </div>

        </div>
    </nav>
  )
}

export default TempNavbar