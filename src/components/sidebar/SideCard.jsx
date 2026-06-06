import SideLink from './SideLink'
import RedirectButton from '../RedirectButton'


const SideCard = ({title, buttonLabel, buttonPath, articles, baselink}) => {
    return (
        <section className='bg-blue-600 mb-10 p-5 rounded-2xl text-neutral-200'>
            <div>
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {articles.map(article => <SideLink
                        baselink={baselink}
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        location={article.locationName}
                        dateEvent={article.dateEvent}
                        />)}
                <RedirectButton label={buttonLabel} path={buttonPath}/>
            </div>
        </section>
    )
}

export default SideCard