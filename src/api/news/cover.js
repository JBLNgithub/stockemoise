export default async function cover(accessToken, {id, formData}) {
	const requestOptions = {
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data',        // WHY THE F DOES THIS NEED TO BE REMOVED ??????? // may be because it needs a boundary value with the header that is not added if I add header myself... maybe idk...
            Authorization: `Bearer ${accessToken}`
        },
        method: 'POST',
        credentials: 'include',
        body: formData
    }

	const res = await fetch(`/api/news/cover/${id}`, requestOptions)
	let data
	if(res.ok) data = await res.json()

	return {res}
}