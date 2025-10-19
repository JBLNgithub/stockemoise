export const getNextConcerts = async() => {
    const res = await fetch('http://localhost:3000/api/concerts/next?limit=3')
    return await res.json()
}