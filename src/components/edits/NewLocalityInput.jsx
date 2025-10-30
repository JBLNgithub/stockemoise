const NewLocalityInput = ({newLocalityStates, style}) => {
  const [codePostal, setCodePostal] = newLocalityStates[0]
  const [city, setCity] = newLocalityStates[1]
  const [country, setCountry] = newLocalityStates[2]

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

      <label htmlFor='country'>Pays*</label>
      <br />
      <input className={style} type='text' name='country' required value={country} onChange={(e) => setCountry(e.target.value)} />
      <br className='mb-4' />
    </>
  )
}

export default NewLocalityInput