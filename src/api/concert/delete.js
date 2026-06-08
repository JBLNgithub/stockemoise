export default async function deleteConcert(accessToken, {id}) {
	const requestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        method: 'DELETE',
        // credentials: 'include',
    }

	const res = await fetch(`/api/concerts/${id}`, requestOptions)

    return {res}
}
