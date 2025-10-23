import {useState, useEffect, useContext} from 'react'
import ArticlePage from './ArticlePage'
import { useParams } from 'react-router-dom'
import {getConcert} from '../controllers/concerts'
import { OnConcert } from '../contexts/controlPanelContexts'


const ConcertPage = () => {
    const {id} = useParams()
    const [concert, setConcert] = useState({})
    const [onConcert, setOnConcert] = useContext(OnConcert)

    const unmountCleanup = () => {
        setOnConcert(false)
    }

    useEffect(() => {
            const fetchConcert = async() => {
                setConcert(await getConcert(id))
            }
            setOnConcert(true)
            fetchConcert()
            return unmountCleanup
        }, [])

    return (
        <ArticlePage article={concert} />
    )
}

export default ConcertPage