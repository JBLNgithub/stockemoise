import refresh from '../auth/refresh'

const PATHS = {
	default: '',
	location: 'with-location',
	locality: 'with-location&locality'
}


export default async function addConcert(concert, accessToken, mode='default', isRefresh=false) {
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
	const datas = {}

	if(res.status === 401 && !isRefresh) {
		const res2 = await refresh()
		if(res2.success) return addConcert(concert, res2.accessToken, mode, true)
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
