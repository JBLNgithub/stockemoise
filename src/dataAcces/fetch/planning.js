export const getPlanning = async() => {
    const res = await fetch('http://localhost:3000/api/planning')
    return await res.json()
}