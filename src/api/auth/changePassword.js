export default async function changePassword(accessToken, {password, newPassword, newPassword_confirmation}) {
	const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({password, newPassword, newPassword_confirmation})
    }

    const res = await fetch('/api/auth/change-password', requestOptions)
    let data
    try {
    	data = await res.json()
    }
    catch {null}

    return {res, data}
}