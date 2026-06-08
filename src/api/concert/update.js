import refresh from '../auth/refresh'


export default async function updateConcert(id, concert, accessToken, isRefresh=false) {
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
	const datas = {}

	if(res.status === 401 && !isRefresh) {
		const res2 = await refresh()
		if(res2.success) return updateConcert(id, concert, res2.accessToken, true)
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
