import logo from '../../assets/images/stockemoiseLogo.png'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import topThePage from '../../utils/topThePage';


const NavbarV2 = () => {
    const navList = [
        {label:'Actualités',path:'/actualites'},
        {label:'Harmonie',path:'/harmonie'},
        {label:'Location Salle',path:'/location-salle'},
        {label:"Stock'Up",path:'/stock-up'},
        {label:'Cours de Musique',path:'/cours-de-musique'},
        {label:'Location Instrument',path:'/location-instrument'},
        {label:'Planning',path:'/planning'},
        {label:'Contact',path:'/contact'},
    ]

    const linkClass = (({isActive}) => {
        let activeClass = isActive ? ' bg-gray-900' : ''
        return (`inline-block w-full text-center hover:bg-gray-800 rounded-none lg:rounded-md py-6 lg:px-3 lg:py-2 border-b-2 lg:border-0 border-black ${activeClass}`)
    })

    function toggleMenu() {
        document.querySelector('.nav-links').classList.toggle("hidden")
    }

    function navClick() {
        toggleMenu()
        topThePage()
    }

    return (
        <nav className='fixed w-full flex justify-around items-center flex-wrap h-20 bg-blue-800 border-b-3 border-blue-900 text-neutral-200'>

            <NavLink className="flex flex-shrink-0 mr-4" to="/" onClick={topThePage}>
                <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="Stockemoise"
                />
                <span className="text-2xl font-bold ml-2">
                    la Stockemoise
                </span>
            </NavLink>

            <div className='lg:hidden h-20 flex w-auto items-center'>
                <FiMenu
                    onClick={toggleMenu} 
                    className='cursor-pointer' 
                />
            </div>

            <div className='nav-links hidden lg:block bg-blue-800'>
                <ul className='flex flex-col lg:flex-row h-screen w-screen lg:h-auto lg:w-auto items-center justify-center lg:gap-4'>
                    {navList.map((link, id) =>
                        <li key={id} className={`w-full lg:w-auto ${id === 0 ? 'border-black border-t-2 lg:border-0' : ''}`}>
                            <NavLink className={linkClass} to={link.path} onClick={navClick}>{link.label}</NavLink>
                        </li>
                    )}
                </ul>
            </div>

        </nav>
    )
}

export default NavbarV2