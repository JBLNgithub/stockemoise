export default async function updateConcert(accessToken, {id, concert}) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'PATCH',
        // credentials: 'include',
        body: JSON.stringify(concert)
    }

	const res = await fetch(`/api/concerts/${id}`, requestOptions)
	let data
	try {
    	data = await res.json()
    }
    catch {null}

    return {res, data}
}
