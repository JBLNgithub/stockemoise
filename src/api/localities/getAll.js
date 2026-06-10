export default async function getAllLocalities() {
    const res = await fetch('/api/localities')
    const data = await res.json()

    return {res, data}
}