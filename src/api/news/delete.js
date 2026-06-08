export default async function deleteNews(accessToken, {id}) {
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

	console.log(res)

    return {res}
}