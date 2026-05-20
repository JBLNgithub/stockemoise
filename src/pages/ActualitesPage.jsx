import { useEffect, useContext} from 'react'
import { OnAllNews } from '../contexts/controlPanelContexts'
import ActualitesList from '../components/actualites-pagination/ActualitesList'


const ActualitesPage = () => {
    const [onAllnews, setOnAllNews] = useContext(OnAllNews)

    const unmountCleanup = () => {
        setOnAllNews(false)
    }

    useEffect(() => {
        setOnAllNews(true)
        return unmountCleanup
    }, [])


    return (
        <>
            <h1 className='text-5xl font-bold mb-10'>Actualités</h1>
            <ActualitesList />
        </>
    )
}

export default ActualitesPage