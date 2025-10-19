import allNews from '../../datas/news.json'

export const getAllNews = () => {
    return allNews
}

export const getNews = (id) => {
    let seekedNews
    
    allNews.forEach((n) => {
        if(n.id == id) seekedNews = n
    })

    return seekedNews
}

export default getAllNews;