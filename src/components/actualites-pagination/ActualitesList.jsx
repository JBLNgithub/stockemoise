import { useState, useEffect } from "react"
import getAllNews from '../../api/news/getAll'
import ArticleTiles from "../article-tiles/ArticleTiles"
import Pagination from "./Pagination"


const ActualitesList = () => {
    const [allNews, setAllNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [articlePerPage, setArticlePerPage] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    const lastArticleIndex = currentPage * articlePerPage
    const firstArticleIndex = lastArticleIndex - articlePerPage

    useEffect(() => {
        const fetchAllNews = async() => {
        setAllNews((await getAllNews()).data)
        setIsLoading(false)
        }

        fetchAllNews()
    }, [])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : <ArticleTiles articles={allNews.slice(firstArticleIndex, lastArticleIndex)} />
            }
            <Pagination nbArticles={allNews.length} articlePerPage={articlePerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    )
}

export default ActualitesList