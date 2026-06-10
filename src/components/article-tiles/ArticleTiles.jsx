import ArticleTile from "./ArticleTile"


const ArticleTiles = ({articles}) => {
  return (
    <section className='grid grid-cols-2 gap-5'>
        {articles.map((article) => <ArticleTile
            type='news'
            key={article.id}
            id={article.id}
            title={article.title}
            cover={article.cover}
            date={article.dateRedaction}
        />)}
    </section>
  )
}

export default ArticleTiles