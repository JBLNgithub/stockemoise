export const getNextConcerts = async() => {
    const res = await fetch('/api/concerts/next?limit=3')
    return await res.json()
}

export const getConcert = async(id) => {
    const res = await fetch(`/api/concerts/${id}`)
    return await res.json()
}

export const postConcert = async(concert) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(concert)
    }
    
    const res = await fetch(`/api/concerts/`, requestOptions)
    return await res.json()
}

export const deleteConcert = async(id) => {
    const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
    }
    
    const res = await fetch(`/api/concerts/${id}`, requestOptions)
}