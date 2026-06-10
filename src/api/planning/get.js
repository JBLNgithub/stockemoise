export default async function getPlanning() {
    const res = await fetch('/api/planning')
    const data = await res.json()

    return {res, data}
}