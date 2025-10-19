import {useState, useEffect} from 'react'
import SideCard from './SideCard'
import articles from '../datas/database.json'
import SideLink from './SideLink'
import {getNextConcerts} from '../controllers/concerts'
import {getRecentNews, getNextNews} from '../controllers/news'

const Sidebar = () => {
  const [nextConcerts, setNextConcerts] = useState([])
  const [nextNews, setNextNews] = useState([])
  const [recentNews, setRecentNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSidebar = async() => {
      setNextConcerts(await getNextConcerts())
      setNextNews(await getNextNews())
      setRecentNews(await getRecentNews())
    }

    fetchSidebar()
  }, [])


  return (
    <>
      <SideCard title='Prochains concerts' buttonLabel='planning' path='/planning'>
        {nextConcerts.map((c) => 
          <SideLink 
            baselink='/concerts/'
            key={c.id} 
            id={c.id}
            title={c.title} 
            location={c.locationName}
            dateEvent={c.dateEvent}
          />
        )}
      </SideCard>

      <SideCard title='Autres dates' buttonLabel='planning' path='/planning'>
        {nextNews.map(c => <SideLink
          baselink='/actualites/'
          key={c.id}
          id={c.id}
          title={c.title}
          location={c.locationName}
          dateEvent={c.dateEvent}
        />)}
      </SideCard>

      <SideCard title='Actualités' buttonLabel="plus d'actus" path='/actualites'>
        {recentNews.map((n) => 
          <SideLink
            baselink='/actualites/'
            key={n.id} 
            id={n.id} 
            title={n.title} />
        )}
      </SideCard>
    </>
  )
}

export default Sidebar