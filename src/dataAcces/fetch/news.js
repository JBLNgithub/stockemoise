export const getAllNews = async(limit) => {
    const url = '/api/news' + (limit ? `?limit=${limit}` : '')

    const res = await fetch(url)
    return await res.json()
}

export const getNextNews = async() => {
    const res = await fetch('/api/news/next?limit=2')
    return await res.json()
}

export const getNews = async(id) => {
    const res = await fetch(`/api/news/${id}`)
    return await res.json()
}

export const postNews = async(news) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(news)
    }
    
    const res = await fetch(`/api/news/`, requestOptions)
    return await res.json()
}

export const postNewsAndEvent = async(news) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(news)
    }
    
    const res = await fetch(`/api/news/with-event`, requestOptions)
    return await res.json()
}

export const postNewsAndEventAndLocation = async(news) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(news)
    }
    
    const res = await fetch(`/api/news/with-event&location`, requestOptions)
    return await res.json()
}

export const postNewsAndEventAndLocationAndLocality = async(news) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(news)
    }
    
    const res = await fetch(`/api/news/with-event&location&locality`, requestOptions)
    return await res.json()
}

export const patchNews = async(id, news) => {
    const requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify(news)
    }
    
    const res = await fetch(`/api/news/${id}`, requestOptions)
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
    
    const res = await fetch(`/api/news/cover/${id}`, requestOptions)
    return await res.json()
}

export const deleteNews = async(id) => {
    const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
    }
    
    const res = await fetch(`/api/news/${id}`, requestOptions)
}