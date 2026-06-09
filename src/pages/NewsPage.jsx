import {useState, useEffect} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getNews} from '../controllers/news'
import useControlPanel from '../hooks/useControlPanel'


const NewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})
    const {setOnNews} = useControlPanel()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async() => {
            setNews(await getNews(id))
            setIsLoading(false)
        }

        setOnNews(true)
        fetchNews()
        return () => setOnNews(false)
    }, [id])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : <ArticlePage article={news} />}
        </>
    )
}

export default NewsPage