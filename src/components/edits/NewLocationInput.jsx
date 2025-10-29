import LocalityInput from './LocalityInput'

const NewLocationInput = ({newLocationStates, knownLocalityState, isNewLocalityState, newLocalityStates, style}) => {
  const [name, setName] = newLocationStates[0]
  const [street, setStreet] = newLocationStates[1]
  const [number, setNumber] = newLocationStates[2]
  const [additionalAddress, setAdditionalAddress] = newLocationStates[3]

  return (
    <>
      <label htmlFor='name'>Nom*</label>
      <br />
      <input className={style} type='text' name='name' required value={name} onChange={(e) => setName(e.target.value)} />
      <br className='mb-4' />

      <label htmlFor='street'>Rue*</label>
      <br />
      <input className={style} type='text' name='street' required value={street} onChange={(e) => setStreet(e.target.value)} />
      <br className='mb-4' />

      <label htmlFor='number'>Numero*</label>
      <br />
      <input className={style} type='number' min='1' name='number' required value={number} onChange={(e) => setNumber(e.target.value)} />
      <br className='mb-4' />

      <label htmlFor='additionalAdress'>Complément d'adresse</label>
      <br />
      <input className={style} type='text' name='additionalAdress' value={additionalAddress} onChange={(e) => setAdditionalAddress(e.target.value)} />
      <br className='mb-4' />

      <LocalityInput knownLocalityState={knownLocalityState} isNewLocalityState={isNewLocalityState} newLocalityStates={newLocalityStates} style={style} />
    </>
  )
}

export default NewLocationInput