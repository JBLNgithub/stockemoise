import {useState, useEffect} from 'react'
import ArticleTile from '../components/ArticleTile'
import {getAllNews} from '../controllers/news'

const ActualitesPage = () => {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    const fetchAllNews = async() => {
      setAllNews(await getAllNews())
    }
    fetchAllNews()
  }, [])

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Actualités</h1>

      <section className='grid grid-cols-2 gap-5'>

        {allNews.map((n) => <ArticleTile 
          type='1' 
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