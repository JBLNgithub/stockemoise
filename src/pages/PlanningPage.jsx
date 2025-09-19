import React from 'react'
import ArticleTile from '../components/ArticleTile'
import articles from '../datas/database.json'


const PlanningPage = () => {
  let news = [];
  let concerts = [];
  let nbNews = 0;
  let nbConcerts = 0;

  articles.map((article, index) => {
    if(article.isConcert) {
      concerts.push(article)
      nbConcerts++
    }
    else if(!article.isConcert) {
      news.push(article)
      nbNews++
    }
  })

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Planning</h1>

      <section className='grid grid-cols-2 gap-5'>
        {concerts.map((concert) => 
          <ArticleTile key={concert.id} id={concert.id} title={concert.title} cover={concert.cover == '' ? 'placeHolder.png' : concert.cover} />
        )}
      </section>
    </>
  )
}

export default PlanningPage