import React from 'react'
import imgLocation from '../assets/images/plan-stockemoise.png'
import {FaEnvelope} from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section>
      <h1 className='text-5xl font-bold mb-16'>Contact</h1>

      <div className='my-12'>
        <h3 className='text-2xl font-bold mb-4'>Harmonie - Location instrument</h3>
        <FaEnvelope className='inline mr- 1' />
        <p className='my-2 inline'>
          <span className='mx-3'>stockemoise@gmail.com</span>
        </p>

        <p className='my-2'>
          Pierre Goffinet : 
          <span className='mx-3'>063/22 25 39</span>
        </p>

        <p className='my-2'>
          Martine Everling : 
          <span className='mx-3'>063/22 07 28</span>
          <span className='mx-3'>0494/49 76 94</span>
        </p>
      </div>

      <div className='my-12'>
        <h3 className='text-2xl font-bold mb-4'>Location Salle</h3>
        <p className='my-2'>
          Martine Everling : 
          <span className='mx-3'>063/22 07 28</span>
          <span className='mx-3'>0494/49 76 94</span>
        </p>

        <p className='my-2'>
          Brigitte Demeuse : 
          <span className='mx-3'>063/21 69 32</span>
        </p>
      </div>

      <div className='my-12'>
        <h3 className='text-2xl font-bold mb-4'>Stock'Up Orchestra - Cours de musique</h3>
        <p className='my-2'>
          Laura Gosselin : 
          <span className='mx-3'>0494/49 76 94</span>
        </p>
      </div>

      <div className='my-12'>
        <h3 className='text-2xl font-bold mb-4'>Lieu</h3>
        <p>Royale Harmonie la Stockemoise, ASBL<br/>rue de l'Harmonie, 36<br/>6700 Arlon (Stockem)</p>
        
        <div className='mt-10'>
          <img src={imgLocation} />
        </div>
      </div>

    </section>
  )
}

export default ContactPage