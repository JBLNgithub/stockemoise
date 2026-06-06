export default async function login(email, password) {
	const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
        }
    }

    const res = await fetch('/api/auth/login', requestOptions)
    const datas = {}
    datas.success = res.status < 300
    try {
    	datas.response = await res.json()
    }
    catch {
    	datas.message = res.statusText
    }

    console.log('headers : ', res)
    console.log('datas : ', datas)
    return datas
}