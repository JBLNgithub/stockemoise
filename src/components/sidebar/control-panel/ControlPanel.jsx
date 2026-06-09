import AllConcertsControlPanel from "./AllConcertsControlPanel"
import AllNewsControlPanel from "./AllNewsControlPanel"
import SingleConcertControlPanel from "./SingleConcertControlPanel"
import SingleNewsControlPanel from "./SingleNewsControlPanel"
import OnHome from './OnHome'
import ActionButton from "../../ActionButton"
import useLogout from '../../../hooks/useLogout'
import useControlPanel from '../../../hooks/useControlPanel'


const ControlPanel = () => {
	const {onAllConcerts, onAllNews, onConcert, onNews, onHome} = useControlPanel()
	const logout = useLogout()

	return (
		<div className="bg-neutral-800 text-neutral-200 mb-10 p-5 rounded-2xl">
			<h2 className="text-xl font-bold mb-4">Panneau de contrôle</h2>

			{onAllConcerts && <AllConcertsControlPanel />}
			{onAllNews && <AllNewsControlPanel />}
			{onConcert && <SingleConcertControlPanel />}
			{onNews && <SingleNewsControlPanel />}
			{onHome && <OnHome />}
			<ActionButton label="Se déconnecter" action={logout} />
		</div>
	);
};

export default ControlPanel;
