import {useState, useEffect} from 'react'
import {getCountries} from '../../controllers/countries.js'


const CountryInput = ({style, countryState}) => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [country, setCountry] = countryState

    useEffect(() => {
        const fetchCountries = async() => {
            const res = await getCountries()
            setCountries(res)
            setIsLoading(false)
        }

        fetchCountries()
    }, [])

    return (
        <>
            <label htmlFor='country'>Pays*</label><br />
            <select className={style} name='country' required onChange={(e) => setCountry(e.target.value)} value={country} >
                {!isLoading && countries.map((c) => <option value={c.id} key={c.id}>{c.name}</option>)}
            </select>
            <br className='mb-4' />
        </>
    )
}

export default CountryInput