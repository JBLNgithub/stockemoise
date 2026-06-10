export default async function getAllLocations() {
    const res = await fetch('/api/locations')
    const data = await res.json()

    return {res, data}
}