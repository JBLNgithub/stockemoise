import React from 'react'
import cover from '../assets/images/placeHolder.png'
import RedirectButton from '../components/RedirectButton'
import CommonPageHeader from '../components/CommonPageHeader'

const StockUpPage = () => {
  return (
    <>
      <CommonPageHeader
        title="Stock'Up orchestra"
        cover={cover}
      >
        <section className='my-10'>
          <p>Tremplin vers l'harmonie, le Stock'Up orchestra est un orchestre dont le but premier est de préparer les musiciens débutants au fonctionnement d’un ensemble instrumental grâce à des morceaux abordables.<br className='mb-5' />Le Stock'Up est ouvert à tous jeunes musiciens de vent ou de percussion ! Les répétitions se déroule chaque vendredi à Stockem.<br className='mb-5' />N'hésitez pas à prendre contact pour plus d'information.
          </p>
        </section>
      </CommonPageHeader>

      <section className='text-center my-20'>
        <div>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/LM9xqCxtcGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    </>
  )
}

export default StockUpPage