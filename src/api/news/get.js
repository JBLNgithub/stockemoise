export default async function getConcert(id) {
    const res = await fetch(`/api/news/${id}`)
    const data = await res.json()

    return {res, data}
}