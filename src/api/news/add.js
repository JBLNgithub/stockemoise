import refresh from '../auth/refresh'

const PATHS = {
	default: '',
	event: 'with-event',
	location: 'with-event&location',
	locality: 'with-event&location&locality'
}


export default async function addNews(news, accessToken, mode='default', isRefresh=false) {
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
	const datas = {}

	if(res.status === 401 && !isRefresh) {
		const res2 = await refresh()
		if(res2.success) return addNews(news, res2.accessToken, mode, true)
	}

	datas.success = res.status < 300
	try {
    	datas.result = await res.json()
    }
    catch {
    	datas.message = res.statusText
    }

	if(isRefresh && datas.success) datas.accessToken = accessToken

    return datas
}
