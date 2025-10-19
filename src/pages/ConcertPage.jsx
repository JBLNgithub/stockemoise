import {useState, useEffect} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getConcert} from '../controllers/concerts'


const ConcertPage = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState({})

    useEffect(() => {
            const fetchConcert = async() => {
                setConcert(await getConcert(id))
            }
            fetchConcert()
        }, [])

    return (
        <ArticlePage article={concert} />
    )
}

export default ConcertPage