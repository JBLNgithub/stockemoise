import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginInput from "../components/LoginInput"
import { FaUser, FaLock } from "react-icons/fa"
import {login} from '../controllers/users'
import { useContext } from "react"
import { IsLoggedInContext } from "../contexts/controlPanelContexts"


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidCredentials, setInvalidCredentials] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext)
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    const res = await login(email, password)
    if(res.success) {
      setIsLoggedIn(true)
      navigate('/')
    }
    else {
      setInvalidCredentials(res.message)
    }
  }

  return (
    <div className="bg-blue-600 text-neutral-200 rounded-2xl p-5">
      <h2 className="text-center font-bold text-3xl mb-8">Connexion</h2>

      <form onSubmit={handleLogin}>
        <LoginInput icon={FaUser} type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <LoginInput icon={FaLock} type='password' placeholder='mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
        {invalidCredentials && <p className="text-red-400 text-center">{invalidCredentials}</p>}
        <button type="submit" className="bg-blue-800 hover:bg-blue-400 hover:text-neutral-800 py-2 px-4 rounded-full">se connecter</button>
      </form>
    </div>
  )
}

export default LoginPage