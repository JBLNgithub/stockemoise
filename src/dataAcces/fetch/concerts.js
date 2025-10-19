export const getNextConcerts = async() => {
    const res = await fetch('http://localhost:3000/api/concerts/next?limit=3')
    return await res.json()
}

export const getConcert = async(id) => {
    const res = await fetch(`http://localhost:3000/api/concerts/${id}`)
    return await res.json()
}