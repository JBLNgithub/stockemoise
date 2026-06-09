import {useState, useEffect} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getConcert} from '../controllers/concerts'
import useControlPanel from '../hooks/useControlPanel'


const ConcertPage = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState({})
    const {setOnConcert} = useControlPanel()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
            const fetchConcert = async() => {
                setConcert(await getConcert(id))
                setIsLoading(false)
            }
            setOnConcert(true)
            fetchConcert()
            return () => setOnConcert(false)
        }, [id])

    return (
        <>
            {isLoading
                ? <p>loading...</p>
                : <ArticlePage article={concert} />
            }
        </>
    )
}

export default ConcertPage