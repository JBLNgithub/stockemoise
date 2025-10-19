import {useState, useEffect} from 'react'
import ArticleTile from '../components/ArticleTile'
import {getPlanning} from '../controllers/planning'

const PlanningPage = () => {
  const [planning, setPlanning] = useState([])

  useEffect(() => {
    const fetchPlanning = async() => {
      setPlanning(await getPlanning())
    }
    fetchPlanning()
  }, [])

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Planning</h1>

      <section className='grid grid-cols-2 gap-5'>

        {planning.map((p) => <ArticleTile 
          type='0' 
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