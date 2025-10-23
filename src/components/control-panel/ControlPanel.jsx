import AllConcertsControlPanel from "./AllConcertsControlPanel"
import AllNewsControlPanel from "./AllNewsControlPanel"
import SingleConcertControlPanel from "./SingleConcertControlPanel"
import SingleNewsControlPanel from "./SingleNewsControlPanel"
import ActionButton from "../ActionButton"
import { useContext } from "react"
import { IsLoggedInContext } from "../../contexts/controlPanelContexts"
import {logout} from '../../controllers/users'


const ControlPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext)

  const disconnect = () => {
    logout()
    setIsLoggedIn(false)
  }

  return (
    <div className="bg-neutral-800 text-neutral-200 mb-10 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Panneau de contrôle</h2>

      <AllConcertsControlPanel />
      <AllNewsControlPanel />
      <SingleConcertControlPanel />
      <SingleNewsControlPanel />
      <ActionButton label="se déconnecter" action={disconnect} />
    </div>
  )
}

export default ControlPanel