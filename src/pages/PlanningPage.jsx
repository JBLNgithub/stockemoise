import React from 'react'
import ArticleTile from '../components/ArticleTile'
import getAllConcerts from '../controllers/concerts'

const PlanningPage = () => {
  const allConcerts = getAllConcerts()

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Actualités</h1>

      <section className='grid grid-cols-2 gap-5'>

        {allConcerts.map((c) => <ArticleTile 
          type='0' 
          key={c.id} 
          id={c.id} 
          title={c.title} 
          cover={c.cover}
          day={c.dayStart}
          month={c.monthStart}
          year={c.yearStart}
        />)}
      </section>
    </>
  )
}

export default PlanningPage