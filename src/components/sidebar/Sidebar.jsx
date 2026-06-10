import {useState, useEffect} from 'react'
import SideCard from './SideCard'
import getNextConcerts from '../../api/concerts/getNext'
import getNextEventNews from '../../api/news/getNextEvents'
import getAllNews from '../../api/news/getAll'
import ControlPanel from './control-panel/ControlPanel'
import useAuth from '../../hooks/useAuth'


const Sidebar = () => {
	const [nextConcerts, setNextConcerts] = useState([])
	const [nextNews, setNextNews] = useState([])
	const [recentNews, setRecentNews] = useState([])
	const [loading, setLoading] = useState(true)
	const {accessToken} = useAuth()

	useEffect(() => {
		const fetchSidebar = async() => {
		setNextConcerts((await getNextConcerts()).data)
		setNextNews((await getNextEventNews()).data)
		setRecentNews((await getAllNews(3)).data)
		setLoading(false)
		}

		fetchSidebar()
	}, [])

    return (
        <>
            {loading
                ? <p>loading...</p>
                : <>
                    {accessToken && <ControlPanel />}

                    {nextConcerts.length > 0 && <SideCard title='Prochains concerts' buttonLabel='planning' buttonPath='/planning' articles={nextConcerts} baselink='/concerts/' />}

                    {nextNews.length > 0 && <SideCard title='Autres dates' buttonLabel='planning' buttonPath='/planning' articles={nextNews} baselink='/actualites/' />}

                    {recentNews.length > 0 && <SideCard title='Actualités' buttonLabel="plus d'actus" buttonPath='/actualites' articles={recentNews} baselink='/actualites/' />}
            </>}
        </>
    )
}

export default Sidebar