import React from 'react'
import cover from '../assets/images/locationInstruments.jpg'
import RedirectButton from '../components/RedirectButton'
import CommonPageHeader from '../components/CommonPageHeader'

const LocationInstrumentPage = () => {
  return (
    <CommonPageHeader
      title="Location d'instruments"
      cover={cover}
    >
      <section className='my-10'>
        <p>Apprendre un instrument demande souvent un effort financier pour acquérir le matériel d’apprentissage. Heureusement, la Stockemoise, comme beaucoup d’harmonies, propose le prêt d’un instrument à ses (futurs) musiciens contre le simple dépôt d’une caution. L’objectif à terme est bien entendu de pouvoir accueillir, après 3 ou 4 ans d’étude, le musicien « au pupitre » et d’ainsi permettre un renouvellement naturel des cadres.<br className='mb-5' />N'hésitez pas à prendre contact avec nous pour plus d'informations !</p>
      </section>
    </CommonPageHeader>
  )
}

export default LocationInstrumentPage