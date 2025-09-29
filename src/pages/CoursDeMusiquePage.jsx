import React from 'react'
import cover from '../assets/images/stockemoiseCoursMusique.jpg'
import RedirectButton from '../components/RedirectButton'
import CommonPageHeader from '../components/CommonPageHeader'

const CoursDeMusiquePage = () => {
  return (
    <CommonPageHeader
      title='Cours de musique'
      cover={cover}
    >
      <section className='my-10'>
        <p>Parce que jouer nécessite au préalable d'apprendre un instrument, la stockemoise propose divers cours de musique pour permettre à toutes et tous d'apprendre. Aucun prérequis pour commencer, les cours de solfège sont inclus en parrallèle des cours d'instrument.</p>

        <div className='my-10'>
          <h4 className='mb-2'>A partir de 4 ans :</h4>
          <ul className='ml-5'><li>éveil musical</li></ul>

          <h4 className='mb-2 mt-4'>A partir de 6 ans :</h4>
          <ul className='ml-5'>
            <li>saxophone</li>
            <li>flute</li>
            <li>trompette</li>
            <li>euphonium</li>
            <li>clarinette</li>
            <li>percussion (batterie, marimba, ...)</li>
          </ul>
        </div>

        <p>
        coûts : 300 €/an (réduction si plusieurs inscriptions)<br className='mb-5' />N'hésitez pas à prendre contact pour plus d'informations !
        </p>
      </section>
    </CommonPageHeader>
  )
}

export default CoursDeMusiquePage