export default async function getAllCountries() {
    const res = await fetch('/api/countries')
    const data = await res.json()

    return {res, data}
}