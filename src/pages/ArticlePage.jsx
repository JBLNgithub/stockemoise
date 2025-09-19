import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../datas/database.json'
import NotFoundPage from '../pages/NotFoundPage'
import getImageURL from '../utils/getImageURL'

const ArticlePage = () => {
    const {id} = useParams()
    let found = false
    let title
    let content
    let dayRedaction
    let monthRedaction
    let yearRedaction
    let dayTakesPlace
    let monthTakesPlace
    let yearTakesPlace
    let hourTakesPlace
    let minuteTakesPlace
    let isConcert
    let cover
    let placeName
    let placeStreet
    let placeNumber
    let placeAdditionalAdress
    let placeCodePostal
    let placeCity
    let placeContry

    articles.map((article) => {
        if(article.id == id) {
            found = true
            cover = article.cover
            title = article.title
            content = article.content
            isConcert = article.isConcert
            dayTakesPlace = article.dateTakesPlace.day
            monthTakesPlace = article.dateTakesPlace.month
            yearTakesPlace = article.dateTakesPlace.year
            placeName = article.place.name
            placeStreet = article.place.street
            placeNumber = article.place.number
            placeAdditionalAdress = article.place.additionalAdress
            placeCodePostal = article.place.codePostal
            placeCity = article.place.city
        }
    })

    if(cover == '') cover = 'placeHolder.png'

  return (
    <>
        {!found ? 
        <NotFoundPage /> : 
        <>
            <div>
                <img
                    className='size-full object-cover rounded-2xl mb-20'
                    src={getImageURL(cover)}
                    alt="photo de couverture"
                    />
                </div>
        
                <section className='my-10'>
                    <h1 className='text-5xl font-bold mb-10'>{title}</h1>
                    <p>{content}</p>
                </section>

                {isConcert ?
                    <div>
                        <h3 className='text-3xl font-bold mb-6'>Informations :</h3>
                        <p>Le concert aura lieu le {`${dayTakesPlace}.${monthTakesPlace}.${yearTakesPlace} à ${placeName} (${placeStreet}, ${placeNumber} ${placeAdditionalAdress} ${placeCodePostal} ${placeCity})`}</p>
                    </div> : ''
                }
        </>} 
    </>
  )
}

export default ArticlePage