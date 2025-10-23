import {useState, useEffect, useContext} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getNews} from '../controllers/news'
import { OnNews } from '../contexts/controlPanelContexts'


const NewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})
    const [onNews, setOnNews] = useContext(OnNews)

    const unmountCleanup = () => {
        setOnNews(false)
    }

    useEffect(() => {
        const fetchNews = async() => {
            setNews(await getNews(id))
        }

        setOnNews(true)
        fetchNews()
        return unmountCleanup
    }, [])

    return (
        <ArticlePage article={news} />
    )
}

export default NewsPage