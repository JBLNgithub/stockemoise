import React from 'react'
import NotFoundPage from '../pages/NotFoundPage'
import getImageURL from '../utils/getImageURL'
import getNews from '../controller/getNewsC'
import getConcert from '../controller/getConcertC'
import { TbWriting } from 'react-icons/tb'
import { FaCalendar } from 'react-icons/fa'
import monthNames from '../utils/monthNames'


const ArticlePage = ({id, type}) => {
    let article

    switch(type){
        case '0':
            article = getConcert(id)
            break
        case '1':
            article = getNews(id)
            break
        default:
            console.log('something went wrong with ArticlePage')
    }

  return (
    <>
        {article === undefined ? 
        <NotFoundPage /> : 
        <>
            <div>
                <img
                    className='size-full object-cover rounded-2xl mb-20'
                    src={getImageURL(article.cover)}
                    alt="photo de couverture"
                    />
                </div>
        
                <section className='my-10'>
                    <div className='mb-10'>
                        <h1 className='text-5xl font-bold mb-2'>{article.title}</h1>
                        <h5 className='text-base ml-3'>
                            <TbWriting className='inline mr-1' />
                            {article.dayRedaction} {monthNames[article.monthRedaction].full} {article.yearRedaction}
                        </h5>
                    </div>
                    <p>{article.content}</p>
                </section>
                
                {/*if it's an event */}
                {type == '0' ?
                    <div>
                        <h3 className='text-3xl font-bold mb-6'>
                            <FaCalendar className='inline mr-1 mb-2' />
                            Informations :
                        </h3>
                        <p>Le concert aura lieu le {article.dayStart} {monthNames[article.monthStart].full} {article.yearStart} à {article.location.name} ({article.location.street}, {article.location.number} - {article.location.codePostal} {article.location.city})</p>
                    </div> : ''
                }
        </>} 
    </>
  )
}

export default ArticlePage