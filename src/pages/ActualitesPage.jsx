import {useState, useEffect, useContext} from 'react'
import ArticleTile from '../components/ArticleTile'
import {getAllNews} from '../controllers/news'
import { OnAllNews } from '../contexts/controlPanelContexts'


const ActualitesPage = () => {
  const [allNews, setAllNews] = useState([])
  const [onAllnews, setOnAllNews] = useContext(OnAllNews)

  const unmountCleanup = () => {
    setOnAllNews(false)
  }

  useEffect(() => {
    const fetchAllNews = async() => {
      setAllNews(await getAllNews())
    }
    
    setOnAllNews(true)
    fetchAllNews()
    return unmountCleanup
  }, [])

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Actualités</h1>

      <section className='grid grid-cols-2 gap-5'>

        {allNews.map((n) => <ArticleTile 
          type='news' 
          key={n.id}
          id={n.id} 
          title={n.title} 
          cover={n.cover} 
          date={n.dateRedaction}
        />)}
      </section>
    </>
  )
}

export default ActualitesPage