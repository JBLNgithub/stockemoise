export default async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }

    const res = await fetch('/api/users/login', requestOptions)
    console.log('fetch ', res)
    return res.json()
}