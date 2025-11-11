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

export const postConcertAndLocation = async(concert) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(concert)
    }
    
    const res = await fetch(`/api/concerts/with-location`, requestOptions)
    return await res.json()
}

export const postConcertAndLocationAndLocality = async(concert) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(concert)
    }
    
    const res = await fetch(`/api/concerts/with-location&locality`, requestOptions)
    return await res.json()
}

export const patchConcert = async(id, concert) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify(concert)
    }
    
    const res = await fetch(`/api/concerts/${id}`, requestOptions)
    return await res.json()
}

export const postNewCover = async(id, formData) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data'        // WHY THE F DOES THIS NEED TO BE REMOVED ??????? // may be because it needs a boundary value with the header that is not added if I add header myself... maybe idk...
        },
        method: 'POST',
        credentials: 'include',
        body: formData
    }
    
    const res = await fetch(`/api/concerts/cover/${id}`, requestOptions)
    return await res.json()
}

export const deleteConcert = async(id) => {
    const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
    }
    
    const res = await fetch(`/api/concerts/${id}`, requestOptions)
}