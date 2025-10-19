import getAllNews from "../dataAcces/getAllNewsDA";

function getNewsC(id) {
    const allNews = getAllNews()
    let seekedNews

    allNews.forEach((n) => {
        if(n.id == id) seekedNews = n
    })

    return seekedNews
}

export default getNewsC