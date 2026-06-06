import {useState, useEffect} from 'react'
import SideCard from './SideCard'
import {getNextConcerts} from '../../controllers/concerts'
import {getRecentNews, getNextNews} from '../../controllers/news'
import ControlPanel from './control-panel/ControlPanel'
import useAuth from '../../hooks/useAuth'


const Sidebar = () => {
	const [nextConcerts, setNextConcerts] = useState([])
	const [nextNews, setNextNews] = useState([])
	const [recentNews, setRecentNews] = useState([])
	const [loading, setLoading] = useState(true)
	const {auth} = useAuth()

	useEffect(() => {
		const fetchSidebar = async() => {
		setNextConcerts(await getNextConcerts())
		setNextNews(await getNextNews())
		setRecentNews(await getRecentNews())
		setLoading(false)
		}

		fetchSidebar()
	}, [])

    return (
        <>
            {loading
                ? <p>loading...</p>
                : <>
                    {auth?.accessToken && <ControlPanel />}

                    {nextConcerts.length > 0 && <SideCard title='Prochains concerts' buttonLabel='planning' buttonPath='/planning' articles={nextConcerts} baselink='/concerts/' />}

                    {nextNews.length > 0 && <SideCard title='Autres dates' buttonLabel='planning' buttonPath='/planning' articles={nextNews} baselink='/actualites/' />}

                    {recentNews.length > 0 && <SideCard title='Actualités' buttonLabel="plus d'actus" buttonPath='/actualites' articles={recentNews} baselink='/actualites/' />}
            </>}
        </>
    )
}

export default Sidebar