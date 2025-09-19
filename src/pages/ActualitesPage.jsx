import React from 'react'
import ArticleTile from '../components/ArticleTile'
import articles from '../datas/database.json'

const ActualitesPage = () => {
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
      <h1 className='text-5xl font-bold mb-10'>Actualités</h1>

      <section className='grid grid-cols-2 gap-5'>
        {news.map((singleNews) => 
          <ArticleTile key={singleNews.id} id={singleNews.id} title={singleNews.title} cover={singleNews.cover} />
        )}
      </section>
    </>
  )
}

export default ActualitesPage