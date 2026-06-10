export default async function getNextNews() {
    const res = await fetch('/api/news/next?limit=2')
    const data = await res.json()

    return {res, data}
}