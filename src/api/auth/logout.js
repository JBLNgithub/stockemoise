export default async function logout() {
	const requestOptions = {
        method: 'POST',
        credentials: 'include'
    }

    const res = await fetch('/api/auth/logout', requestOptions)
    return res.status < 300
}
