import AllConcertsControlPanel from "./AllConcertsControlPanel"
import AllNewsControlPanel from "./AllNewsControlPanel"
import SingleConcertControlPanel from "./SingleConcertControlPanel"
import SingleNewsControlPanel from "./SingleNewsControlPanel"
import RedirectButton from "../RedirectButton"



const ControlPanel = () => {
  return (
    <div className="bg-neutral-800 text-neutral-200 mb-10 p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Panneau de contrôle</h2>

      <AllConcertsControlPanel />
      <AllNewsControlPanel />
      <SingleConcertControlPanel />
      <SingleNewsControlPanel />
      <RedirectButton label="se déconnecter" />
    </div>
  )
}

export default ControlPanel