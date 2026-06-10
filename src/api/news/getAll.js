export default async function getAllNews(limit) {
    const res = await fetch(`/api/news${limit ? `?limit=${limit}` : ''}`)
    const data = await res.json()

    return {res, data}
}