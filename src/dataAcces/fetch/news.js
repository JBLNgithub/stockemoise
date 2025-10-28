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

export const deleteNews = async(id) => {
    const requestOptions = {
        method: 'DELETE',
        credentials: 'include'
    }
    
    const res = await fetch(`/api/news/${id}`, requestOptions)
}