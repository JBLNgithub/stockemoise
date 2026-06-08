export default async function refresh() {
	const requestOptions = {
        method: 'GET',
        credentials: 'include',
    }

    const res = await fetch('/api/auth/refresh', requestOptions)
    let data
    if(res.ok) data = await res.json()

    console.log('access token refreshed')
    return {res, data}
}