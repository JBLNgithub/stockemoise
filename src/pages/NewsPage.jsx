import {useState, useEffect} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getNews} from '../controllers/news'

const NewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const fetchNews = async() => {
            setNews(await getNews(id))
        }
        fetchNews()
    }, [])

    return (
        <ArticlePage article={news} />
    )
}

export default NewsPage