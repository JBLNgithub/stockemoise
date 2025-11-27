import CountryInput from './CountryInput'


const NewLocalityInput = ({newLocalityStates, style}) => {
    const [codePostal, setCodePostal] = newLocalityStates[0]
    const [city, setCity] = newLocalityStates[1]

    return (
        <>
            <label htmlFor='codePostal'>Code postal*</label>
            <br />
            <input className={style} type='number' min='1' name='codePostal' required value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
            <br className='mb-4' />

            <label htmlFor='city'>Ville*</label>
            <br />
            <input className={style} type='text' name='city' required value={city} onChange={(e) => setCity(e.target.value)} />
            <br className='mb-4' />

            <CountryInput style={style} countryState={newLocalityStates[2]} />
        </>
    )
}

export default NewLocalityInput