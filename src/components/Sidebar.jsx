import {useState, useEffect} from 'react'
import SideCard from './SideCard'
import articles from '../datas/database.json'
import SideLink from './SideLink'
import {getNextConcerts} from '../controllers/concerts'
import {getRecentNews} from '../controllers/news'

const Sidebar = () => {
  const [nextConcerts, setNextConcerts] = useState([])
  const [nextNews, setNextNews] = useState([])
  const [recentNews, setRecentNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSidebar = async() => {
      setRecentNews(await getRecentNews())
      setNextConcerts(await getNextConcerts())
    }

    fetchSidebar()
  }, [])


  return (
    <>
      <SideCard title='Prochains concerts' buttonLabel='plus de dates' path='/planning'>
        {nextConcerts.map((c) => 
          <SideLink 
            type='0'
            key={c.id} 
            id={c.id}
            title={c.title} 
            location={c.locationName}
            dateEvent={c.dateEvent}
          />
        )}
      </SideCard>

      <SideCard title='Actualités' buttonLabel="plus d'actus" path='/actualites'>
        {recentNews.map((n) => 
          <SideLink
            type='1' 
            key={n.id} 
            id={n.id} 
            title={n.title} />
        )}
      </SideCard>
    </>
  )
}

export default Sidebar