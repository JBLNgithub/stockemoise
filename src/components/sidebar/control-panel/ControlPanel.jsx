import AllConcertsControlPanel from "./AllConcertsControlPanel";
import AllNewsControlPanel from "./AllNewsControlPanel";
import SingleConcertControlPanel from "./SingleConcertControlPanel";
import SingleNewsControlPanel from "./SingleNewsControlPanel";
import ActionButton from "../../ActionButton";
import { useContext } from "react";
import {
	OnAllConcerts,
	OnAllNews,
	OnConcert,
	OnNews,
} from "../../../contexts/controlPanelContexts";
import useLogout from '../../../hooks/useLogout'


const ControlPanel = () => {
	const [onAllConcerts, setOnAllConcerts] = useContext(OnAllConcerts);
	const [onAllnews, setOnAllNews] = useContext(OnAllNews);
	const [onConcert, setOnConcert] = useContext(OnConcert);
	const [onNews, setOnNews] = useContext(OnNews);
	const logout = useLogout()

	return (
		<div className="bg-neutral-800 text-neutral-200 mb-10 p-5 rounded-2xl">
			<h2 className="text-xl font-bold mb-4">Panneau de contrôle</h2>

			{onAllConcerts && <AllConcertsControlPanel />}
			{onAllnews && <AllNewsControlPanel />}
			{onConcert && <SingleConcertControlPanel />}
			{onNews && <SingleNewsControlPanel />}
			<ActionButton label="se déconnecter" action={logout} />
		</div>
	);
};

export default ControlPanel;
