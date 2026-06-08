export default async function updateNews(id, news, accessToken, isRefresh=false) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'PATCH',
        // credentials: 'include',
        body: JSON.stringify(news)
    }

	const res = await fetch(`/api/news/${id}`, requestOptions)
	let data

	try {
    	data = await res.json()
    }
    catch {null}

    return {res, data}
}
