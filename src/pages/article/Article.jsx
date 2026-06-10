import NotFoundPage from '../NotFoundPage'
import getImageURL from '../../utils/getImageURL'
import { TbWriting } from 'react-icons/tb'
import EventTile from '../../components/article-tiles/EventTile'
import datetimeToString from '../../utils/datetimeToString'
import ArticleBodyRenderer from '../../components/ArticleBodyRenderer'


const Article = ({article}) => {
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
                                {article.dateRedaction && datetimeToString(article.dateRedaction, 'full', false)}
                            </h5>
                        </div>
                        {/* TODO : compute content properly one day, and make it support markdown syntax */}
                        {/* {article.content && String(article.content).split('\n').map((c, i) => <p key={i} className='mb-4'>{c}</p>)} */}
                        <ArticleBodyRenderer content={article.content} />
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

export default Article