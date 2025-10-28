import { Link } from "react-router-dom"
import topThePage from '../utils/topThePage'
import {logout} from '../controllers/users'


const Footer = () => {
  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }
  
  return (
    <>
      <Link
        to='/connexion'
        onClick={topThePage}
        className="text-neutral-800 hover:text-sky-600 py-2 px-4 mt-4"
        >
        Se connecter
      </Link>
    </>
  )
}

export default Footer