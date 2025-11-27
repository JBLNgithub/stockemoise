import {useState, useEffect} from 'react'
import SideCard from './SideCard'
import SideLink from './SideLink'
import {getNextConcerts} from '../controllers/concerts'
import {getRecentNews, getNextNews} from '../controllers/news'
import { isLoggedIn } from '../controllers/users'
import ControlPanel from './control-panel/ControlPanel'
import { useContext } from "react"
import { IsLoggedInContext } from "../contexts/controlPanelContexts"


const Sidebar = () => {
	const [nextConcerts, setNextConcerts] = useState([])
	const [nextNews, setNextNews] = useState([])
	const [recentNews, setRecentNews] = useState([])
	const [loading, setLoading] = useState(true)
	const [isLog, setIsLog] = useContext(IsLoggedInContext)

	useEffect(() => {
		const fetchSidebar = async() => {
		setNextConcerts(await getNextConcerts())
		setNextNews(await getNextNews())
		setRecentNews(await getRecentNews())
		setIsLog(await isLoggedIn())
		setLoading(false)
		}

		fetchSidebar()
	}, [])


    return (
        <>
            {loading
                ? <p>loading...</p>
                : <>
                    {isLog && <ControlPanel />}

                    <SideCard title='Prochains concerts' buttonLabel='planning' buttonPath='/planning' articles={nextConcerts} baselink='/concerts/' />

                    <SideCard title='Autres dates' buttonLabel='planning' buttonPath='/planning' articles={nextNews} baselink='/actualites/' />

                    <SideCard title='Actualités' buttonLabel="plus d'actus" buttonPath='/actualites' articles={recentNews} baselink='/actualites/' />
            </>}
        </>
    )
}

export default Sidebar