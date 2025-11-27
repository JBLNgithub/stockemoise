import {useState, useEffect, useContext} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getConcert} from '../controllers/concerts'
import { OnConcert } from '../contexts/controlPanelContexts'


const ConcertPage = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState({})
    const [onConcert, setOnConcert] = useContext(OnConcert)
    const [isLoading, setIsLoading] = useState(true)

    const unmountCleanup = () => {
        setOnConcert(false)
    }

    useEffect(() => {
            const fetchConcert = async() => {
                setConcert(await getConcert(id))
                setIsLoading(false)
            }
            setOnConcert(true)
            fetchConcert()
            return unmountCleanup
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