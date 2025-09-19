import React from 'react'
import cover from '../assets/images/stockemoiseCoursMusique.jpg'
import RedirectButton from '../components/RedirectButton'

const CoursDeMusiquePage = () => {
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
        <h1 className='text-5xl font-bold mb-10'>Cours de musique</h1>
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

      <div className='md:px-40'>
        <RedirectButton className='px-100' label='Contact' path='/contact' />
      </div>
    </>
  )
}

export default CoursDeMusiquePage