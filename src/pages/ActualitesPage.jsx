import React from 'react'
import ArticleTile from '../components/ArticleTile'
import getAllNews from '../controller/getAllNewsC'

const ActualitesPage = () => {
  const allNews = getAllNews()

  return (
    <>
      <h1 className='text-5xl font-bold mb-10'>Actualités</h1>

      <section className='grid grid-cols-2 gap-5'>

        {allNews.map((n) => <ArticleTile type='1' key={n.id} id={n.id} title={n.title} cover={n.cover} />)}
      </section>
    </>
  )
}

export default ActualitesPage