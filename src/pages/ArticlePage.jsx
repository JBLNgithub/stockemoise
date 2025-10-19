import React from 'react'
import NotFoundPage from '../pages/NotFoundPage'
import getImageURL from '../utils/getImageURL'
import {getNews} from '../controllers/news'
import {getConcert} from '../controllers/concerts'
import { TbWriting } from 'react-icons/tb'
import { FaCalendar } from 'react-icons/fa'
import monthNames from '../utils/monthNames'
import EventTile from '../components/EventTile'


const ArticlePage = ({article}) => {
  return (
    <>
        {!article ? 
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
                            {article.dateRedaction}
                        </h5>
                    </div>
                    <p>{article.content}</p>
                </section>
                
                {/*if it's an event */}
                {!article.event ? '' : 
                    <div>
                        <EventTile event={article.event} />
                    </div>
                }
        </>} 
    </>
  )
}

export default ArticlePage