import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import InputNews from '../../components/edits/InputNews'
import getNews from '../../api/news/get'
import NotFoundPage from "../NotFoundPage"


const UpdateNewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async() => {
        setNews((await getNews(id)).data)
            setIsLoading(false)
        }

        fetchNews()
    }, [id])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : news
                    ? <InputNews id={id} newsToUpdate={news} />
                    : <NotFoundPage />
            }
        </>
    )
}

export default UpdateNewsPage