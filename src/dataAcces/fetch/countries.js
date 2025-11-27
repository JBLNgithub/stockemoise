export const getCountries = async() => {
    const res = await fetch('/api/countries')
    return await res.json()
}