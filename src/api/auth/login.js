export default async function login(email, password) {
	const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }

    const res = await fetch('/api/auth/login', requestOptions)
    let data
    try {
    	data = await res.json()
    }
    catch {null}

    return {res, data}
}