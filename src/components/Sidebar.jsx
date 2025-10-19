import React from 'react'
import SideCard from './SideCard'
import articles from '../datas/database.json'
import SideLink from './SideLink'
import getAllConcerts from '../controllers/getAllConcertsC'
import getAllNews from '../controllers/getAllNewsC'

const Sidebar = () => {
  let nextConcerts = getAllConcerts().slice(0,3)
  const nextNews = getAllNews().slice(0,2)

  return (
    <>
      <SideCard title='Prochains concerts' buttonLabel='plus de dates' path='/planning'>
        {nextConcerts.map((c) => 
          <SideLink 
            type='0'
            key={c.id} 
            id={c.id}
            title={c.title} 
            location={c.location.name}
            day={c.dayStart} 
            month={c.monthStart} 
            year={c.yearStart}
          />
        )}
      </SideCard>

      <SideCard title='Actualités' buttonLabel="plus d'actus" path='/actualites'>
        {nextNews.map((n) => 
          <SideLink
            type='1' 
            key={n.id} 
            id={n.id} 
            title={n.title} />
        )}
      </SideCard>
    </>
  )
}

export default Sidebar