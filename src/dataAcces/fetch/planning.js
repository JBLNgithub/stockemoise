export const getPlanning = async() => {
    const res = await fetch('/api/planning')
    return await res.json()
}