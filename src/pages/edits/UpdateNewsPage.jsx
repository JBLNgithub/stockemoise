import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import InputNews from '../../components/edits/InputNews'
import { getNews } from "../../controllers/news"
import NotFoundPage from "../NotFoundPage"


const UpdateNewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async() => {
            const res = await getNews(id)
            if(res) setNews(res)
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