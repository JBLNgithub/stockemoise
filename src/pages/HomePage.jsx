import React from 'react'
import TemplatePage from './TemplatePage'
import HomeCard from '../components/HomeCard'

const HomePage = () => {
  return (
      <>
        <div className='text-center mx-6 mb-14'>
          <h1 className='text-5xl md:text-7xl font-bold font-serif'>Harmonie Royale la Stockemoise d'Arlon</h1>
        </div>
        <HomeCard
          title="Harmonie Royale la Stockemoise d'Arlon"
          description1='Orchestre composé d&apos;instruments à vents et de percussions, l&apos;Harmonie Royale la Stockemoise rassemble des musiciens amateurs de tous horizons dans un projet musical marquant.' 
          description2='L&apos;harmonie est ouverte à tous les musiciens maîtrisant un peu la musique ! Les répétitions se déroulent chaque vendredi à Stockem.'
          image='harmonie.jpg'
          imageAlt='photo de l&apos;harmonie'
          path='/harmonie'
        />

        <HomeCard 
          title='Stock&apos;Up Orchestra'
          description1="Tremplin vers l'harmonie, le Stock'Up orchestra a pour objectif de préparer les musiciens débutants au fonctionnement d’un ensemble instrumental grâce à des morceaux adaptés au niveau de chacun."
          description2="Le Stock'Up est ouvert à tous musiciens débutants souhaitant intégrer un orchestre ! Les répétitions se déroule chaque vendredi à Stockem."
          image="placeHolder.png"
          imageAlt="photo du Stock'Up Orchestra"
          path='/stock-up'
        />

        <HomeCard 
          title="Location Salle"
          description1="La Stockemoise met ses locaux à votre disposition (uniquement) pour vos fêtes de/en famille ou entre collègues: baptêmes, communions, anniversaires, départ à la retraite,… (maximum 80 personnes)."
          description2="Nous vous proposons une grande salle (capacité 80 personnes assises) avec toilettes, bar, tables et chaises... La salle est accessible aux personnes à mobilité réduite."
          image="salle-1.jpg"
          imageAlt="photo de la salle de Stockem"
          path='/location-salle'
        />

        <HomeCard 
          title="Cours de Musique"
          description1="Non-musiscien mais désireux de jouer en orchestre ? Cela n'est pas un problème ! La Stockemoise propose des cours de musique sans aucun prérequis. Il n'est jamais trop tard pour commencer ! Venez apprendre en notre compagnie pour peut-être plus tard rejoindre nos rangs."
          description2="Des cours d'éveil musical sont aussi proposés pour les enfants."
          image="stockemoiseCoursMusique.jpg"
          imageAlt="image des cours de musique"
          path='/cours-de-musique'
        />

        <HomeCard 
          title="Location d'instrument"
          description1="Apprendre un instrument demande souvent un effort financier pour acquérir le matériel d’apprentissage. La Stockemoise, propose le prêt d’un instrument à ses (futurs) musiciens contre le simple dépôt d’une caution. L’objectif à terme étant d'accueillir le musicien au pupitre."
          image="locationInstruments.jpg"
          imageAlt="image de plusieurs instruments"
          path='location-instrument'
        />
      </>
  )
}

export default HomePage