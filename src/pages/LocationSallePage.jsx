import React from 'react'
import cover from '../assets/images/salle-1.jpg'
import img1 from '../assets/images/salle-2.jpeg'
import img2 from '../assets/images/salle-3.jpeg'
import img3 from '../assets/images/salle-4.jpg'
import RedirectButton from '../components/RedirectButton'
import CommonPageHeader from '../components/CommonPageHeader'

const LocationSallePage = () => {
  return (
    <>
      <CommonPageHeader
        title='Location de la salle'
        cover={cover}
      >
        <section className='my-10'>
          <p>La Stockemoise met ses locaux à votre disposition (uniquement) pour vos fêtes de/en famille ou entre collègues: baptêmes, communions, anniversaires, départ à la retraite,… (maximum 80 personnes).<br className='mb-5' />Nous vous proposons une grande salle (capacité 80 personnes assises) avec toilettes, bar, tables et chaises, accessibles aux personnes à mobilité réduite (via chaise montante).<br className='mb-5' />Une cuisine équipée (vaisselle pour 80 couverts, cuisinière gaz 6 becs, 2 fours, hotte, lave-vaisselle à capot, petite chambre froide et samovars) et monte-charge entre la cuisine et la salle de fêtes.<br className='mb-5' />N'hésitez à prendre contact pour plus d'informations ou pour réserver !<br className='mb-5' /></p>
        </section>
      </CommonPageHeader>

      <section className='grid grid-cols-2 gap-6 my-20'>
        <img
          className='size-full object-cover rounded-2xl mb-20 col-span-2 md:col-span-1'
          src={cover}
          alt="photo de la salle"
          />

        <img
          className='size-full object-cover rounded-2xl mb-20 col-span-2 md:col-span-1'
          src={img1}
          alt="photo de la cuisine"
          />

        <img
          className='size-full object-cover rounded-2xl mb-20 col-span-2 md:col-span-1'
          src={img2}
          alt="photo de la toilette"
          />

        <img
          className='size-full object-cover rounded-2xl mb-20 col-span-2 md:col-span-1'
          src={img3}
          alt="photo de l'extérieur"
          />
      </section>
    </>
  )
}

export default LocationSallePage