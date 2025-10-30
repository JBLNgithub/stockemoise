export const getLocalities = async() => {
    const res = await fetch('/api/localities')
    return await res.json()
}