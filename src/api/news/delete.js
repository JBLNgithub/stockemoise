import refresh from '../auth/refresh'


export default async function deleteNews(id, accessToken, isRefresh=false) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'DELETE',
        // credentials: 'include',
    }

	const res = await fetch(`/api/news/${id}`, requestOptions)

	if(res.status === 401 && !isRefresh) {
		const res2 = await refresh()
		if(res2.success) return deleteNews(id, res2.accessToken, true)
	}

	const datas = {success: res.status < 300}
	if(!datas.success) datas.message = res.statusText
	if(isRefresh && datas.success) datas.accessToken = accessToken

    return datas
}
