import {useState, useEffect} from 'react'
import ArticleTile from '../components/article-tiles/ArticleTile'
import getPlanning from '../api/planning/get'
import useControlPanel from '../hooks/useControlPanel'


const PlanningPage = () => {
    const [planning, setPlanning] = useState([])
    const {setOnAllConcerts} = useControlPanel()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPlanning = async() => {
	        setPlanning((await getPlanning()).data)
	        setIsLoading(false)
        }

        setOnAllConcerts(true)
        fetchPlanning()

        return () => setOnAllConcerts(false)
    }, [])

    return (
        <>
            <h1 className='text-5xl font-bold mb-10'>Planning</h1>

                {isLoading ?
                    <p>loading...</p>
                    : <section className='grid grid-cols-2 gap-5'>{
                        planning.map((p) => <ArticleTile
                            type={p.type}
                            key={`${p.id}${p.type}`}
                            id={p.id}
                            title={p.title}
                            cover={p.cover}
                            date={p.dateEvent}
                        />)}
                    </section>
                }
        </>
    )
}

export default PlanningPage