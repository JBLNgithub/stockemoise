
export const login = async(email, password) => {
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }
    
    const res = await fetch('/api/users/login', requestOptions)
    return await res.json()
}

export const isLoggedIn = async() => {
    const requestOptions = {
        method: 'POST',
        credentials: 'include'
    }

    const res = await fetch('/api/users/isLoggedIn', requestOptions)
    return await res.json()
}

export const logout = async() => {
    const requestOptions = {
        method: 'POST',
        credentials: 'include'
    }

    const res = await fetch('/api/users/logout', requestOptions)
    return await res.json()
}