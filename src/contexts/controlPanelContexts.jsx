import { createContext, useState } from "react";


const ControlPanelContext = createContext({})

export function ControlPanelProvider({children}){
	const [onAllConcerts, setOnAllConcerts] = useState(false)
	const [onAllNews, setOnAllNews] = useState(false)
	const [onConcert, setOnConcert] = useState(false)
	const [onNews, setOnNews] = useState(false)
	const [onHome, setOnHome] = useState(false)

	return(
		<ControlPanelContext.Provider value={{onAllConcerts, setOnAllConcerts, onAllNews, setOnAllNews, onConcert, setOnConcert, onNews, setOnNews, onHome, setOnHome}}>
			{children}
		</ControlPanelContext.Provider>
	)
}


export default ControlPanelContext