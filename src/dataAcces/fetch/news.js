export const getAllNews = async() => {
    const res = await fetch('http://localhost:3000/api/news?limit=2')
    return await res.json()
}

export const getNextNews = async() => {
    const res = await fetch('http://localhost:3000/api/news/next?limit=2')
    return await res.json()
}