import React from 'react'
import cover from '../assets/images/locationInstruments.jpg'
import RedirectButton from '../components/RedirectButton'

const LocationInstrumentPage = () => {
  return (
    <>
      <div>
        <img
          className='size-full object-cover rounded-2xl mb-20'
          src={cover}
          alt="photo de l"
          />
      </div>

      <section className='my-10'>
        <h1 className='text-5xl font-bold mb-10'>Location d'instrument</h1>
        <p>Apprendre un instrument demande souvent un effort financier pour acquérir le matériel d’apprentissage. Heureusement, la Stockemoise, comme beaucoup d’harmonies, propose le prêt d’un instrument à ses (futurs) musiciens contre le simple dépôt d’une caution. L’objectif à terme est bien entendu de pouvoir accueillir, après 3 ou 4 ans d’étude, le musicien « au pupitre » et d’ainsi permettre un renouvellement naturel des cadres.<br className='mb-5' />N'hésitez pas à prendre contact avec nous pour plus d'informations !.</p>
      </section>

      <div className='md:px-40'>
        <RedirectButton className='px-100' label='Contact' path='/contact' />
      </div>
    </>
  )
}

export default LocationInstrumentPage