const PATHS = {
	default: '',
	event: 'with-event',
	location: 'with-event&location',
	locality: 'with-event&location&locality'
}


export default async function addNews(accessToken, {news, mode='default'}) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(news)
    }

	const res = await fetch(`/api/news/${PATHS[mode]}`, requestOptions)
	let data

	try {
    	data = await res.json()
    }
    catch {null}

	return {res, data}
}
