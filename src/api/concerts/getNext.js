export default async function getNextConcerts() {
    const res = await fetch('/api/concerts/next?limit=3')
    const data = await res.json()

    return {res, data}
}