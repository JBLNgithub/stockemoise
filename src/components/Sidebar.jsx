import React from 'react'
import SideCard from './SideCard'
import articles from '../datas/database.json'
import SideLink from './SideLink'

const Sidebar = () => {
  let news = [];
  let concerts = [];
  let nbNews = 0;
  let nbConcerts = 0;

  articles.map((article, index) => {
    if(article.isConcert && nbConcerts < 3) {
      concerts.push(article)
      nbConcerts++
    }
    else if(!article.isConcert && nbNews < 2) {
      news.push(article)
      nbNews++
    }
  })

  return (
    <>
      <SideCard title='Prochaines dates' buttonLabel='plus de dates' path='/planning'>
        {concerts.map((concert) => 
          <SideLink 
            key={concert.id} 
            id={concert.id}
            title={concert.title} 
            location={concert.place.name}
            day={concert.dateTakesPlace.day} 
            month={concert.dateTakesPlace.month} 
            year={concert.dateTakesPlace.year}
          />
        )}
      </SideCard>

      <SideCard title='Actualités' buttonLabel="plus d'actus" path='/actualites'>
        {news.map((singleNews) => 
          <SideLink key={singleNews.id} id={singleNews.id} title={singleNews.title} />
        )}
      </SideCard>
    </>
  )
}

export default Sidebar