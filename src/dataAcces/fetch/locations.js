export const getLocations = async() => {
    const res = await fetch('/api/locations')
    return await res.json()
}