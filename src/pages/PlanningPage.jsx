import {useState, useEffect, useContext} from 'react'
import ArticleTile from '../components/ArticleTile'
import {getPlanning} from '../controllers/planning'
import { OnAllConcerts } from '../contexts/controlPanelContexts'


const PlanningPage = () => {
  const [planning, setPlanning] = useState([])
  const [onAllConcerts, setOnAllConcerts] = useContext(OnAllConcerts)

  const unmountCleanup = () => {
    setOnAllConcerts(false)
  }

  useEffect(() => {
    const fetchPlanning = async() => {
      setPlanning(await getPlanning())
    }
    
    setOnAllConcerts(true)
    fetchPlanning()
    return unmountCleanup
  }, [])

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Planning</h1>

      <section className='grid grid-cols-2 gap-5'>

        {planning.map((p) => <ArticleTile 
          type={p.type}
          key={`${p.id}${p.type}`} 
          id={p.id} 
          title={p.title} 
          cover={p.cover}
          date={p.dateEvent}
        />)}
      </section>
    </>
  )
}

export default PlanningPage