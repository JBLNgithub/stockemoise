export default async function refresh() {
	const requestOptions = {
        method: 'GET',
        credentials: 'include',
    }

    const res = await fetch('/api/auth/refresh', requestOptions)
    const datas = {success: res.status < 300}
    if(datas.success) datas.accessToken = (await res.json()).accessToken

    console.log('access token refreshed')
    return datas
}