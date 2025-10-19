export const getAllNews = async() => {
    const res = await fetch('http://localhost:3000/api/news?limit=2')
    return await res.json()
}