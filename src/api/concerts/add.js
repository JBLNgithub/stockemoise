const PATHS = {
	default: '',
	location: 'with-location',
	locality: 'with-location&locality'
}


export default async function addConcert(accessToken, {concert, mode='default'}) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(concert)
    }

	const res = await fetch(`/api/concerts/${PATHS[mode]}`, requestOptions)
	let data

	try {
    	data = await res.json()
    }
    catch {null}

    return {res, data}
}
