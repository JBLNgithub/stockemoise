import {useEffect} from 'react'
import ActualitesList from '../components/actualites-pagination/ActualitesList'
import useControlPanel from '../hooks/useControlPanel'


const ActualitesPage = () => {
	const {setOnAllNews} = useControlPanel()

    useEffect(() => {
        setOnAllNews(true)
        return () => setOnAllNews(false)
    }, [])

    return (
        <>
            <h1 className='text-5xl font-bold mb-10'>Actualités</h1>
            <ActualitesList />
        </>
    )
}

export default ActualitesPage